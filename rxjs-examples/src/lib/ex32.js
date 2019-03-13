'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dragMe(sprite, spriteContainer) {
  var spriteMouseDowns = _Rx2.default.Observable.fromEvent(sprite, 'mousedown');
  var spriteContainerMouseMoves = _Rx2.default.Observable.fromEvent(spriteContainer, 'mousemove');
  var spriteContainerMouseUps = _Rx2.default.Observable.fromEvent(spriteContainer, 'mouseup');
  var spriteMouseDrags = spriteMouseDowns.concatMap(function (contactPoint) {
    return spriteContainerMouseMoves.takeUntil(spriteContainerMouseUps).map(function (movePoint) {
      return {
        pageX: movePoint.pageX - contactPoint.layerX,
        pageY: movePoint.pageY - contactPoint.layerY
      };
    });
  });

  spriteMouseDrags.forEach(function (dragPoint) {
    sprite.style.left = dragPoint.pageX + 'px';
    sprite.style.top = dragPoint.pageY + 'px';
  });
}

module.exports = dragMe;