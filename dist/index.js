"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var EventEmitter = require("events").EventEmitter;
var throttle = _interopRequire(require("lodash.throttle"));

var singleton = _interopRequire(require("pragma-singleton"));

var BrowserSize = (function (EventEmitter) {
  function BrowserSize() {
    var _this = this;
    _classCallCheck(this, BrowserSize);

    window.addEventListener("resize", throttle(function () {
      _this.computeSize();
      _this.emit("resize");
    }, 200));

    this.computeSize();
  }

  _inherits(BrowserSize, EventEmitter);

  _prototypeProperties(BrowserSize, null, {
    computeSize: {
      value: function computeSize() {
        this.width = document.documentElement.clientWidth;
        this.height = document.documentElement.clientHeight;
      },
      writable: true,
      configurable: true
    }
  });

  return BrowserSize;
})(EventEmitter);

module.exports = singleton(BrowserSize);

