import Rx from 'rxjs/Rx'

function dragMe(sprite, spriteContainer) {
  let spriteMouseDowns = Rx.Observable.fromEvent(sprite, 'mousedown')
  let spriteContainerMouseMoves = Rx.Observable.fromEvent(
    spriteContainer,
    'mousemove',
  )
  let spriteContainerMouseUps = Rx.Observable.fromEvent(
    spriteContainer,
    'mouseup',
  )
  let spriteMouseDrags = spriteMouseDowns.concatMap(contactPoint => {
    return spriteContainerMouseMoves
      .takeUntil(spriteContainerMouseUps)
      .map(movePoint => {
        return {
          pageX: movePoint.pageX - contactPoint.layerX,
          pageY: movePoint.pageY - contactPoint.layerY,
        }
      })
  })

  spriteMouseDrags.forEach(dragPoint => {
    sprite.style.left = dragPoint.pageX + 'px'
    sprite.style.top = dragPoint.pageY + 'px'
  })
}

module.exports = dragMe
