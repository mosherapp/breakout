'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Ball = exports.Ball = {

    // Position (center of circle)
    x: 0,
    y: 0,

    // Size
    radius: 10,
    get diameter() {
        return this.radius * 2;
    },

    // Movement:
    //   speed: px per second
    //   angle: degrees. 0=North/Up
    speed: 0,
    angle: 0,

    init: function init() {},
    draw: function draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'white';
        ctx.fill();
    },
    nextPosition: function nextPosition() {
        return { x: x, y: y };
    },
    isInBounds: function isInBounds(x, y) {}
};