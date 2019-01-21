'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.helpers = undefined;

var _brick = require('./brick');

var _brick2 = _interopRequireDefault(_brick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var helpers = exports.helpers = {
				createBrick: function createBrick(_ref) {
								var x = _ref.x,
								    y = _ref.y,
								    width = _ref.width,
								    height = _ref.height;

								var brick = Object.create(_brick2.default);
								brick.x = x;
								brick.y = y;
								brick.width = width;
								brick.height = height;
								return brick;
				}
};