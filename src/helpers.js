
import Brick from './brick';

export const helpers = {
    createBrick({ x, y, width, height }) {
		const brick = Object.create(Brick);
		brick.x = x;
		brick.y = y;
		brick.width = width;
		brick.height = height;
		return brick;
	},
};