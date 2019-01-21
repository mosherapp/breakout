'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Canvas = exports.Canvas = {
    canvas: null,
    ctx: null,

    width: 0,
    height: 0,

    init: function init(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    },
    clear: function clear() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
};