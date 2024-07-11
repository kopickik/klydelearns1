"use strict";
exports.__esModule = true;
exports.fitImages = function (images, pageWidth, rowHeight) {
    var result = [];
    function processImages(imageList, row, rowWidth) {
        if (row === void 0) { row = []; }
        if (rowWidth === void 0) { rowWidth = 0; }
        if (imageList.length === 0) {
            if (row.length > 0) {
                result.push(row);
            }
            return;
        }
        var currentImage = imageList[0], remainingImages = imageList.slice(1);
        var aspectRatio = currentImage.width / currentImage.height;
        var newWidth = Math.floor(aspectRatio * rowHeight);
        var newHeight = rowHeight;
        if (newWidth > pageWidth) {
            newWidth = pageWidth;
            newHeight = newWidth / aspectRatio;
        }
        if (rowWidth + newWidth > pageWidth) {
            result.push(row);
            processImages(remainingImages, [{ src: currentImage.src, width: newWidth, height: newHeight }], newWidth);
        }
        else {
            row.push({ src: currentImage.src, width: newWidth, height: newHeight });
            processImages(remainingImages, row, rowWidth + newWidth);
        }
    }
    processImages(images);
    return result;
};
var sampleImages = [
    { src: 'kitty1.jpg', width: 600, height: 400 },
    { src: 'image2.jpg', width: 800, height: 600 },
    { src: 'image3.jpg', width: 1000, height: 800 },
    { src: 'kitty4.jpg', width: 1440, height: 960 },
    { src: 'image6.jpg', width: 1600, height: 768 },
    { src: 'image7.jpg', width: 1800, height: 480 }
];
var width = 320;
var height = 60;
var fittedImages = exports.fitImages(sampleImages, width, height);
console.log(fittedImages);
