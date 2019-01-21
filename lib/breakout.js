'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Breakout = undefined;

var _canvas = require('./canvas');

var _canvas2 = _interopRequireDefault(_canvas);

var _paddle = require('./paddle');

var _paddle2 = _interopRequireDefault(_paddle);

var _ball = require('./ball');

var _ball2 = _interopRequireDefault(_ball);

var _brick = require('.brick');

var _brick2 = _interopRequireDefault(_brick);

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breakout = exports.Breakout = {

	_canvas: null,
	_paddle: null,
	_ball: [],
	_bricks: [],

	init: function init(canvas, bricks) {
		this._canvas = Object.create(_canvas2.default);
		this._canvas.init(canvas);

		this._paddle = Object.create(_paddle2.default);
		this._paddle.init();

		this._ball = Object.create(_ball2.default);
		this._ball.init();

		this._bricks = bricks.map(function (el) {
			return _helpers2.default.createBrick(el);
		});
	},
	startGame: function startGame() {}
};