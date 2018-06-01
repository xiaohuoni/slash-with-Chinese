'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _fs = require('fs');

var _path = require('path');

var _slash = require('slash');

var _slash2 = _interopRequireDefault(_slash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dvaContainerPath = (0, _path.join)(process.cwd(), 'path.js');
var content = (0, _slash2.default)(process.cwd());
(0, _fs.writeFileSync)(dvaContainerPath, (0, _stringify2.default)(content), 'utf-8');