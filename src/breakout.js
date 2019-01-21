

import Canvas from './canvas';
import Paddle from './paddle';
import Ball from './ball';
import Brick from '.brick';
import helpers from './helpers';

export const Breakout = {

	_canvas: null,
	_paddle: null,
	_ball: [],
	_bricks: [],

	init(canvas, bricks) {
		this._canvas = Object.create(Canvas);
		this._canvas.init(canvas);

		this._paddle = Object.create(Paddle);
		this._paddle.init();

		this._ball = Object.create(Ball);
		this._ball.init();

		this._bricks = bricks.map((el) => helpers.createBrick(el));
	},
	startGame() {

	},
};

