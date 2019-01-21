

export const Brick = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,

    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    isInBounds(x, y) {

    },
};