import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var colors = {
  dark: "#0D2C54",
  interactive: "#00A6ED",
  success: "#7FB800",
  warning: "#FFB400",
  alert: "#F6511D",
  white: "#ffffff",
  grey: "#cccccc"
};
var spacings = {
  tiny: "4px",
  small: "8px",
  medium: "16px",
  large: "32px",
  extraLarge: "48px"
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: translate(50%, 0);\n  }\n  100% {\n    transform: translate(50%,-", ");\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var PopIn = keyframes(_templateObject(), spacings.small);

function formatNumber(number) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  number = number.toFixed(decimals) + '';
  var x = number.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;

  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }

  return x1 + x2;
}

var ColorChanger =
/*#__PURE__*/
function () {
  function ColorChanger() {
    _classCallCheck(this, ColorChanger);
  }

  _createClass(ColorChanger, null, [{
    key: "hslToRgb",

    /**
     * Converts an HSL color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes h, s, and l are contained in the set [0, 1] and
     * returns r, g, and b in the set [0, 255].
     *
     * @param   {number}  h       The hue
     * @param   {number}  s       The saturation
     * @param   {number}  l       The lightness
     * @return  {Array}           The RGB representation
     */
    value: function hslToRgb(h, s, l) {
      var r, g, b;

      if (s === 0) {
        r = g = b = l; // achromatic
      } else {
        var hue2rgb = function hue2rgb(p, q, t) {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }

      return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    /**
     * Converts an RGB color value to HSL. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes r, g, and b are contained in the set [0, 255] and
     * returns h, s, and l in the set [0, 1].
     *
     * @param   {number}  r       The red color value
     * @param   {number}  g       The green color value
     * @param   {number}  b       The blue color value
     * @return  {Array}           The HSL representation
     */

  }, {
    key: "rgbToHsl",
    value: function rgbToHsl(r, g, b) {
      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b),
          min = Math.min(r, g, b);
      var h,
          s,
          l = (max + min) / 2;

      if (max === min) {
        h = s = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;

          case g:
            h = (b - r) / d + 2;
            break;

          case b:
            h = (r - g) / d + 4;
            break;
        }

        h /= 6;
      }

      return [h, s, l];
    }
    /**
     *
     * @param {string} color
     * @param {number} amount
     *
     * @return {string|null}
     */

  }, {
    key: "lightenColor",
    value: function lightenColor(color) {
      var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;

      if (color && color.length >= 6) {
        var redValue = parseInt(color.slice(-6, -4), 16);
        var greenValue = parseInt(color.slice(-4, -2), 16);
        var blueValue = parseInt(color.slice(-2), 16);
        var hsl = ColorChanger.rgbToHsl(redValue, greenValue, blueValue);
        hsl[2] = Math.min(hsl[2] + amount, 1);
        var rgb = ColorChanger.hslToRgb(hsl[0], hsl[1], hsl[2]);
        return "#" + rgb[0].toString(16) + rgb[1].toString(16) + rgb[2].toString(16);
      }

      return null;
    }
  }, {
    key: "darkenColor",

    /**
     *
     * @param {string} color
     * @param {number} amount
     *
     * @return {string|null}
     */
    value: function darkenColor(color) {
      var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;

      if (color && color.length >= 6) {
        var redValue = parseInt(color.slice(-6, -4), 16),
            greenValue = parseInt(color.slice(-4, -2), 16),
            blueValue = parseInt(color.slice(-2), 16);
        var hsl = ColorChanger.rgbToHsl(redValue, greenValue, blueValue);
        hsl[2] = Math.max(hsl[2] - amount, 0);
        var rgb = ColorChanger.hslToRgb(hsl[0], hsl[1], hsl[2]);
        var RR = rgb[0].toString(16).length < 2 ? '0' + rgb[0].toString(16) : rgb[0].toString(16),
            GG = rgb[1].toString(16).length < 2 ? '0' + rgb[1].toString(16) : rgb[1].toString(16),
            BB = rgb[2].toString(16).length < 2 ? '0' + rgb[2].toString(16) : rgb[2].toString(16);
        return "#".concat(RR).concat(GG).concat(BB);
      }

      return null;
    }
    /**
     *
     * @param {string} color
     */

  }, {
    key: "getBlackOrWhiteContrastColor",
    value: function getBlackOrWhiteContrastColor(color) {
      if (color && color.length >= 6) {
        var redValue = parseInt(color.slice(-6, -4), 16),
            greenValue = parseInt(color.slice(-4, -2), 16),
            blueValue = parseInt(color.slice(-2), 16);
        var luma = 0.2126 * redValue + 0.7152 * greenValue + 0.0722 * blueValue; // per ITU-R BT.709

        if (luma < 180) {
          return '#FFFFFF';
        }

        return '#000000';
      }
    }
  }]);

  return ColorChanger;
}();

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n          vector-effect: non-scaling-stroke;\n          pointer-events : none;\n          fill : none;\n          stroke: ", ";\n          stroke-width: 2;\n        "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n          vector-effect: non-scaling-stroke;\n          pointer-events : none;\n          fill : ", ";\n          stroke: ", ";\n          opacity: 0.2;\n          stroke-width: 2;\n        "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n          display: inline-block;\n          font-size : 12px;\n          color : ", ";\n          font-family : sans-serif;\n          font-weight: lighter;\n          position: absolute;\n          top: 12px;\n          transform: translate(50%,-", ");\n          background: ", ";\n          padding: ", " ", ";\n          border-radius: ", ";\n          opacity: 0;\n          transition: opacity 200ms;\n          \n          animation: ", " 200ms ease-out;\n          \n          &:not(:empty) {\n            opacity: 1;\n            \n            &:after {\n                content: '';\n                position: absolute;\n                top: 100%;\n                left: 50%;\n                border-left: 4px solid transparent;\n                border-right: 4px solid transparent;\n                border-top: 4px solid", ";\n                transform: translate(-50%, 0);\n            }\n          }\n        "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n          top: 12px;\n          left: 0;\n          position: absolute;\n          color : ", ";\n          font-family : sans-serif;\n          font-size : 12px;\n          font-weight: lighter;\n          text-align: center;\n          min-width: 100px;\n          transform:translate(-50%,0);\n        \n          ", ":last-child & {\n            text-align: right;\n            transform:translate(-100%,0);\n          }\n        \n          ", ":first-child & {\n            text-align: left;\n            transform:translate(0,0);\n          }\n        "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n          flex: 1 1 auto;\n          border-left : 2px solid ", "; \n          pointer-events : none;\n          overflow: visible;\n          position: relative;\n          height: 10px;\n          \n          &:last-child {\n            width: 0;\n            flex: 0 0 0; \n          }\n        "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n          display: flex;\n          flex-flow: row nowrap;\n          border-top : 2px solid ", "; \n        "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n          stroke-width : 0;\n          stroke: transparent;\n          pointer-events : none;\n          vector-effect: non-scaling-stroke;\n          transition: stroke-width 100ms;\n          \n          ", ":hover ~ & {\n          stroke-width : 2px;\n            stroke: ", "; \n          }\n        "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n          stroke-width : 2px;\n          stroke: ", ";\n          opacity: 0.2;\n          vector-effect: non-scaling-stroke;\n          pointer-events : none;\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n          stroke-width : 0;\n          stroke: ", ";\n          transition: stroke-width 300ms, stroke 300ms;\n          pointer-events : none;\n          vector-effect: non-scaling-stroke;\n          stroke-linecap: round;\n           \n          ", ":hover ~ & {\n            stroke-width : 6px; \n          }\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n          stroke-width : 6px;\n          stroke: ", ";\n          transition: stroke-width 300ms;\n          pointer-events : none;\n          vector-effect: non-scaling-stroke;\n          stroke-linecap: round;\n           \n          ", ":hover ~ & {\n            stroke-width : 10px; \n          }\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          fill: transparent;\n          vector-effect: non-scaling-stroke;\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            display : block;\n            overflow: visible;\n            height: 150px;\n            width: 100%;\n            position: relative;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n            display: block;\n            padding: ", " 0 0 0;\n            position: relative;\n        "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var LineChart =
/*#__PURE__*/
function (_Component) {
  _inherits(LineChart, _Component);

  function LineChart(props) {
    var _this;

    _classCallCheck(this, LineChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LineChart).call(this, props));
    _this.formatValuesForLine = _this.formatValuesForLine.bind(_assertThisInitialized(_this));
    _this.lineStrategy = _this.lineStrategy.bind(_assertThisInitialized(_this));
    _this.bezierStrategy = _this.bezierStrategy.bind(_assertThisInitialized(_this));
    _this.controlPoint = _this.controlPoint.bind(_assertThisInitialized(_this));
    _this.line = _this.line.bind(_assertThisInitialized(_this));
    _this.formatCoordinatesAsPair = _this.formatCoordinatesAsPair.bind(_assertThisInitialized(_this));
    _this.showValue = _this.showValue.bind(_assertThisInitialized(_this));
    _this.decimals = _this.props.decimals ? _this.props.decimals : 0;
    _this.state = {
      shownValue: 0,
      shownPosition: 1
    };
    return _this;
  }

  _createClass(LineChart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.props.values) {
        return null;
      } // Override colors


      var uiColor = this.props.color ? this.props.color : colors.interactive,
          darkerColor = ColorChanger.darkenColor(uiColor, 0.2),
          lighterColor = ColorChanger.lightenColor(uiColor, 0.1),
          contrastColor = ColorChanger.getBlackOrWhiteContrastColor(uiColor);
      var Container = styled.div(_templateObject$1(), spacings.large);
      var ChartContainer = styled.svg(_templateObject2());
      var HoverElement = styled.rect(_templateObject3());
      var BlueDot = styled.line(_templateObject4(), uiColor, HoverElement);
      var LightBlueDot = styled.line(_templateObject5(), lighterColor, HoverElement);
      var TopLine = styled.line(_templateObject6(), uiColor);
      var BottomLine = styled.line(_templateObject7(), HoverElement, uiColor);
      var AxisLine = styled.div(_templateObject8(), darkerColor);
      var AxisPoint = styled.div(_templateObject9(), darkerColor);
      var AxisValue = styled.div(_templateObject10(), darkerColor, AxisPoint, AxisPoint);
      var Value = styled.span(_templateObject11(), contrastColor, spacings.small, uiColor, spacings.tiny, spacings.small, spacings.tiny, PopIn, uiColor);
      var ChartFill = styled.path(_templateObject12(), uiColor, uiColor);
      var ChartPath = styled.path(_templateObject13(), uiColor); // Calculate svg coordinates

      var maxValue = Math.max.apply(Math, _toConsumableArray(this.props.values)),
          // Build the paths for rounder or straight lines,
      // instructions used from:
      // https://medium.com/@francoisromain/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74
      strategy = this.props.rounded ? this.bezierStrategy : this.lineStrategy,
          pathCoordinates = this.formatValuesForLine(strategy),
          fillCoordinates = this.formatValuesForFill(strategy),
          dotCoordinates = this.formatCoordinatesAsPair(),
          hoverWidth = 110 / dotCoordinates.length,
          axisCoordinates = this.formatCoordinatesForAxis();
      return React.createElement(Container, null, React.createElement(ChartContainer, {
        preserveAspectRatio: "none",
        viewBox: "0 0 100 " + maxValue
      }, React.createElement(ChartPath, {
        d: pathCoordinates
      }), React.createElement(ChartFill, {
        d: fillCoordinates
      }), dotCoordinates.map(function (coordinates) {
        var x = coordinates[0],
            y = coordinates[1];
        return React.createElement("g", {
          key: x
        }, React.createElement(HoverElement, {
          x: x - hoverWidth / 2,
          y: 0,
          width: hoverWidth * 0.8,
          height: maxValue,
          onMouseEnter: function onMouseEnter() {
            _this2.showValue(maxValue - y, x);
          },
          onMouseLeave: function onMouseLeave() {
            _this2.showValue(null, null);
          }
        }), React.createElement(BottomLine, {
          x1: x,
          y1: y,
          x2: x,
          y2: maxValue
        }), React.createElement(TopLine, {
          x1: x,
          y1: y,
          x2: x,
          y2: 0
        }), React.createElement(BlueDot, {
          x1: x,
          y1: y,
          x2: x,
          y2: y
        }), React.createElement(LightBlueDot, {
          x1: x,
          y1: y,
          x2: x,
          y2: y
        }));
      })), axisCoordinates.length ? React.createElement(AxisLine, null, axisCoordinates.map(function (axis) {
        return React.createElement(AxisPoint, {
          key: axis.x
        }, React.createElement(AxisValue, null, axis.label));
      })) : null, this.state.shownValue !== null ? React.createElement(Value, {
        style: {
          right: this.state.shownPosition + "%"
        }
      }, this.props.prefix, " ", formatNumber(this.state.shownValue, this.decimals), " ", this.props.postfix) : null);
    }
    /**
     * @param value
     * @param position
     */

  }, {
    key: "showValue",
    value: function showValue(value, position) {
      this.setState({
        shownValue: value,
        shownPosition: 100 - position
      });
    }
    /**
     * @returns {Array}
     */

  }, {
    key: "formatCoordinatesAsPair",
    value: function formatCoordinatesAsPair() {
      if (this.props.values.length < 2) {
        return [];
      }

      var coordinates = [],
          maxValue = Math.max.apply(Math, [0].concat(_toConsumableArray(this.props.values))),
          step = 100 / (this.props.values.length - 1);

      for (var i = 0; i < this.props.values.length; i++) {
        coordinates.push([i * step, Math.min(maxValue, maxValue - this.props.values[i])]);
      }

      return coordinates;
    }
    /**
     *
     * @returns {Array}
     */

  }, {
    key: "formatCoordinatesForAxis",
    value: function formatCoordinatesForAxis() {
      if (!this.props.axis) {
        return [];
      }

      var values = [],
          step = 100 / (this.props.axis.length - 1);

      for (var i = 0; i < this.props.axis.length; i++) {
        values.push({
          x: i * step,
          label: this.props.axis[i]
        });
      }

      return values;
    }
    /**
     * @param {function} command
     *
     * @returns {Array}
     */

  }, {
    key: "formatValuesForLine",
    value: function formatValuesForLine(command) {
      var coordinates = this.formatCoordinatesAsPair(); // build the d attributes by looping over the points

      return coordinates.reduce(function (acc, point, i, a) {
        return i === 0 // if first point
        ? "M ".concat(point[0], ",").concat(point[1]) // else
        : "".concat(acc, " ").concat(command(point, i, a));
      }, '');
    }
    /**
     * @param {function} command
     *
     * @returns {Array}
     */

  }, {
    key: "formatValuesForFill",
    value: function formatValuesForFill(command) {
      var _this3 = this;

      var coordinates = this.formatCoordinatesAsPair(),
          fillCoordinates = [[0, Math.max.apply(Math, _toConsumableArray(this.props.values))]].concat(_toConsumableArray(coordinates), [[100, Math.max.apply(Math, _toConsumableArray(this.props.values))]]);
      return fillCoordinates.reduce(function (acc, point, i, a) {
        if (i === 0) {
          return "M ".concat(point[0], ",").concat(point[1]);
        }

        if (i === 1 || i === fillCoordinates.length - 1) {
          return "".concat(acc, " ").concat(_this3.lineStrategy(point));
        }

        return "".concat(acc, " ").concat(command(point, i, a));
      }, '');
    }
    /**
     * @param {Array} point
     *
     * @return {string}
     */

  }, {
    key: "lineStrategy",
    value: function lineStrategy(point) {
      return "L ".concat(point[0], " ").concat(point[1]);
    }
    /**
     * @param {Array} point
     * @param {int} i
     * @param {Array} a
     *
     * @returns {string}
     */

  }, {
    key: "bezierStrategy",
    value: function bezierStrategy(point, i, a) {
      // start control point
      var _this$controlPoint = this.controlPoint(a[i - 1], a[i - 2], point),
          _this$controlPoint2 = _slicedToArray(_this$controlPoint, 2),
          cpsX = _this$controlPoint2[0],
          cpsY = _this$controlPoint2[1]; // end control point


      var _this$controlPoint3 = this.controlPoint(point, a[i - 1], a[i + 1], true),
          _this$controlPoint4 = _slicedToArray(_this$controlPoint3, 2),
          cpeX = _this$controlPoint4[0],
          cpeY = _this$controlPoint4[1];

      return "C ".concat(cpsX, ",").concat(cpsY, " ").concat(cpeX, ",").concat(cpeY, " ").concat(point[0], ",").concat(point[1]);
    }
    /**
     * @param {Array} pointA
     * @param {Array} pointB
     *
     * @return {{length: number, angle: number}}
     */

  }, {
    key: "line",
    value: function line(pointA, pointB) {
      var lengthX = pointB[0] - pointA[0];
      var lengthY = pointB[1] - pointA[1];
      return {
        length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
        angle: Math.atan2(lengthY, lengthX)
      };
    }
    /**
     * @param current
     * @param previous
     * @param next
     * @param reverse
     *
     * @see https://medium.com/@francoisromain/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74
     *
     * @return {Array}
     */

  }, {
    key: "controlPoint",
    value: function controlPoint(current, previous, next, reverse) {
      var p = previous || current;
      var n = next || current; // The smoothing ratio

      var smoothing = 0.15; // Properties of the opposed-line

      var o = this.line(p, n); // If is end-control-point, add PI to the angle to go backward

      var angle = o.angle + (reverse ? Math.PI : 0);
      var length = o.length * smoothing; // The control point position is relative to the current point

      var x = current[0] + Math.cos(angle) * length;
      var y = current[1] + Math.sin(angle) * length;
      return [x, y];
    }
  }]);

  return LineChart;
}(Component);

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n            stroke-width: 2px;\n            fill: none;\n            stroke: ", ";\n            opacity: 0.2;\n        "]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n            display : block;\n            height: 150px;\n            width: 150px;\n        "]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n            font-size: ", ";\n            color: ", ";\n            font-family : sans-serif;\n        "]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n            position: absolute;\n            display : block;\n            text-align: center;\n            top: 80px;\n            font-size: ", ";\n            color: ", ";\n            font-family : sans-serif;\n            width: 150px;\n        "]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n            position: absolute;\n            display : block;\n            text-align: center;\n            top: 40px;\n            font-size: ", ";\n            color: ", ";\n            font-family : sans-serif;\n            width: 150px;\n        "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n            display : block;\n            position: relative;\n            height: 150px;\n            width: 150px;\n        "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n            stroke-width: 2px;\n            fill: none;\n            stroke: ", ";\n            //stroke-linecap: round;\n            transform: rotate(-90deg);\n            transform-origin: center;\n        "]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

var CircleChart =
/*#__PURE__*/
function (_Component) {
  _inherits(CircleChart, _Component);

  function CircleChart(props) {
    _classCallCheck(this, CircleChart);

    return _possibleConstructorReturn(this, _getPrototypeOf(CircleChart).call(this, props));
  }

  _createClass(CircleChart, [{
    key: "render",
    value: function render() {
      var initialValue = this.props.value ? this.props.value : 0,
          maxValue = this.props.maxValue ? this.props.maxValue : 0,
          percentage = initialValue / maxValue * 100,
          value = formatNumber(initialValue, this.props.decimals);
      var uiColor = this.props.color ? this.props.color : colors.interactive;
      var CircleValue = styled.circle(_templateObject$2(), uiColor);
      var Container = styled.div(_templateObject2$1());
      var Value = styled.div(_templateObject3$1(), spacings.large, uiColor);
      var Metric = styled.div(_templateObject4$1(), spacings.medium, uiColor);
      var ValueAddition = styled.span(_templateObject5$1(), spacings.medium, uiColor);
      var ChartContainer = styled.svg(_templateObject6$1());
      var CircleBackground = styled.circle(_templateObject7$1(), uiColor);
      return React.createElement(Container, null, React.createElement(ChartContainer, {
        viewBox: "0 0 33.83098862 33.83098862"
      }, React.createElement(CircleBackground, {
        cx: "16.91549431",
        cy: "16.91549431",
        r: "15.91549431"
      }), React.createElement(CircleValue, {
        strokeDasharray: percentage + ',100',
        cx: "16.91549431",
        cy: "16.91549431",
        r: "15.91549431"
      })), React.createElement(Value, null, React.createElement(ValueAddition, null, this.props.prefix), value, React.createElement(ValueAddition, null, this.props.postfix)), React.createElement(Metric, null, this.props.metric));
    }
  }]);

  return CircleChart;
}(Component);

export { CircleChart, LineChart };
