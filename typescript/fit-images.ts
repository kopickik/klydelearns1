type Image = {
  src: string;
  width: number;
  height: number;
};

export const fitImages = (
  images: Image[],
  pageWidth: number,
  rowHeight: number
): Image[][] => {
  const result: Image[][] = [];

  function processImages(
    imageList: Image[],
    row: Image[] = [],
    rowWidth: number = 0
  ): void {
    if (imageList.length === 0) {
      if (row.length > 0) {
        result.push(row);
      }
      return;
    }

    const [currentImage, ...remainingImages] = imageList;
    const aspectRatio = currentImage.width / currentImage.height;
    let newWidth = Math.floor(aspectRatio * rowHeight);
    let newHeight = rowHeight;

    if (newWidth > pageWidth) {
      newWidth = pageWidth;
      newHeight = newWidth / aspectRatio;
    }

    if (rowWidth + newWidth > pageWidth) {
      result.push(row);
      processImages(
        remainingImages,
        [{ src: currentImage.src, width: newWidth, height: newHeight }],
        newWidth
      );
    } else {
      row.push({ src: currentImage.src, width: newWidth, height: newHeight });
      processImages(remainingImages, row, rowWidth + newWidth);
    }
  }

  processImages(images);

  return result;
};

// example
const images: Image[] = [
  { src: 'kitty1.jpg', width: 600, height: 400 },
  { src: 'image2.jpg', width: 800, height: 600 },
  { src: 'image3.jpg', width: 1000, height: 800 },
  { src: 'kitty4.jpg', width: 1440, height: 960 },
  { src: 'image6.jpg', width: 1600, height: 768 },
  { src: 'image7.jpg', width: 1800, height: 480 }
];

const pageWidth = 320;
const rowHeight = 60;

const fittedImages = fitImages(images, pageWidth, rowHeight);
console.log(fittedImages);
