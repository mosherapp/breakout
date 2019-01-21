'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Brick = exports.Brick = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,

    draw: function draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    isInBounds: function isInBounds(x, y) {}
};