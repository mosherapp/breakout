

export const Paddle = {
    x: 0,
    y: 0,
    width: 50,
    height: 20,

    init(x, y, width, height) {

    },
    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    isInBounds(x, y) {

    },
};

