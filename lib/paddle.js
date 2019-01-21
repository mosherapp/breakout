'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Paddle = exports.Paddle = {
    x: 0,
    y: 0,
    width: 50,
    height: 20,

    init: function init(x, y, width, height) {},
    draw: function draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    isInBounds: function isInBounds(x, y) {}
};