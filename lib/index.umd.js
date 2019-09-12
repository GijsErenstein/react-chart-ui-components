(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('styled-components')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'styled-components'], factory) :
  (global = global || self, factory(global.reactSampleComponentsLibrary = {}, global.React, global.styled));
}(this, function (exports, React, styled) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  var styled__default = 'default' in styled ? styled['default'] : styled;

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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var lightColors = {
    dark: "#D2D5D9",
    interactive: "#E7F0F3",
    success: "#DDE3D0",
    warning: "#EAE2D0",
    alert: "#E9D8D3"
  };
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
  var PopIn = styled.keyframes(_templateObject(), spacings.small);

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

  function _templateObject13() {
    var data = _taggedTemplateLiteral(["\n  vector-effect: non-scaling-stroke;\n  pointer-events : none;\n  fill : none;\n  stroke: ", ";\n  stroke-width: 2;\n"]);

    _templateObject13 = function _templateObject13() {
      return data;
    };

    return data;
  }

  function _templateObject12() {
    var data = _taggedTemplateLiteral(["\n  vector-effect: non-scaling-stroke;\n  pointer-events : none;\n  fill : ", ";\n  stroke: ", ";\n  opacity: 0.2;\n  stroke-width: 2;\n"]);

    _templateObject12 = function _templateObject12() {
      return data;
    };

    return data;
  }

  function _templateObject11() {
    var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  font-size : 12px;\n  color : ", ";\n  font-family : sans-serif;\n  font-weight: lighter;\n  position: absolute;\n  top: 12px;\n  transform: translate(50%,-", ");\n  background: ", ";\n  padding: ", " ", ";\n  border-radius: ", ";\n  opacity: 0;\n  transition: opacity 200ms;\n  \n  animation: ", " 200ms ease-out;\n  \n  &:not(:empty) {\n    opacity: 1;\n    \n    &:after {\n        content: '';\n        position: absolute;\n        top: 100%;\n        left: 50%;\n        border-left: 4px solid transparent;\n        border-right: 4px solid transparent;\n        border-top: 4px solid ", ";\n        transform: translate(-50%, 0);\n    }\n  }\n"]);

    _templateObject11 = function _templateObject11() {
      return data;
    };

    return data;
  }

  function _templateObject10() {
    var data = _taggedTemplateLiteral(["\n  top: 12px;\n  left: 0;\n  position: absolute;\n  color : ", ";\n  font-family : sans-serif;\n  font-size : 12px;\n  font-weight: lighter;\n  text-align: center;\n  min-width: 100px;\n  transform:translate(-50%,0);\n\n  ", ":last-child & {\n    text-align: right;\n    transform:translate(-100%,0);\n  }\n\n  ", ":first-child & {\n    text-align: left;\n    transform:translate(0,0);\n  }\n"]);

    _templateObject10 = function _templateObject10() {
      return data;
    };

    return data;
  }

  function _templateObject9() {
    var data = _taggedTemplateLiteral(["\n  flex: 1 1 auto;\n  border-left : 2px solid ", "; \n  pointer-events : none;\n  overflow: visible;\n  position: relative;\n  height: 10px;\n  \n  &:last-child {\n    width: 0;\n    flex: 0 0 0; \n  }\n"]);

    _templateObject9 = function _templateObject9() {
      return data;
    };

    return data;
  }

  function _templateObject8() {
    var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row nowrap;\n  border-top : 2px solid ", "; \n"]);

    _templateObject8 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7() {
    var data = _taggedTemplateLiteral(["\n  stroke-width : 0;\n  stroke: transparent;\n  pointer-events : none;\n  vector-effect: non-scaling-stroke;\n  transition: stroke-width 100ms;\n  \n  ", ":hover ~ & {\n  stroke-width : 2px;\n    stroke: ", "; \n  }\n"]);

    _templateObject7 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6() {
    var data = _taggedTemplateLiteral(["\n  stroke-width : 2px;\n  stroke: ", ";\n  opacity: 0.2;\n  vector-effect: non-scaling-stroke;\n  pointer-events : none;\n"]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5() {
    var data = _taggedTemplateLiteral(["\n  stroke-width : 0;\n  stroke: ", ";\n  transition: stroke-width 300ms, stroke 300ms;\n  pointer-events : none;\n  vector-effect: non-scaling-stroke;\n  stroke-linecap: round;\n   \n  ", ":hover ~ & {\n    stroke-width : 6px; \n  }\n"]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral(["\n  stroke-width : 6px;\n  stroke: ", ";\n  transition: stroke-width 300ms;\n  pointer-events : none;\n  vector-effect: non-scaling-stroke;\n  stroke-linecap: round;\n   \n  ", ":hover ~ & {\n    stroke-width : 10px; \n  }\n"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteral(["\n  fill: transparent;\n  vector-effect: non-scaling-stroke;\n"]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["\n    display : block;\n    overflow: visible;\n    height: 150px;\n    width: 100%;\n    position: relative;\n"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$1() {
    var data = _taggedTemplateLiteral(["\n    display: block;\n    padding: ", " 0 0 0;\n    position: relative;\n"]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }
  var Container = styled__default.div(_templateObject$1(), spacings.large);
  var ChartContainer = styled__default.svg(_templateObject2());
  var HoverElement = styled__default.rect(_templateObject3());
  var BlueDot = styled__default.line(_templateObject4(), colors.interactive, HoverElement);
  var LightBlueDot = styled__default.line(_templateObject5(), lightColors.interactive, HoverElement);
  var TopLine = styled__default.line(_templateObject6(), colors.interactive);
  var BottomLine = styled__default.line(_templateObject7(), HoverElement, colors.interactive);
  var AxisLine = styled__default.div(_templateObject8(), colors.dark);
  var AxisPoint = styled__default.div(_templateObject9(), colors.dark);
  var AxisValue = styled__default.div(_templateObject10(), colors.dark, AxisPoint, AxisPoint);
  var Value = styled__default.span(_templateObject11(), colors.white, spacings.small, colors.interactive, spacings.tiny, spacings.small, spacings.tiny, PopIn, colors.interactive);
  var ChartFill = styled__default.polyline(_templateObject12(), colors.interactive, colors.interactive);
  var ChartLine = styled__default.polyline(_templateObject13(), colors.interactive);

  var LineChart =
  /*#__PURE__*/
  function (_Component) {
    _inherits(LineChart, _Component);

    function LineChart(props) {
      var _this;

      _classCallCheck(this, LineChart);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LineChart).call(this, props));
      _this.formatValuesForLine = _this.formatValuesForLine.bind(_assertThisInitialized(_this));
      _this.formatValuesForDots = _this.formatValuesForDots.bind(_assertThisInitialized(_this));
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
        }

        var maxValue = Math.max.apply(Math, _toConsumableArray(this.props.values)),
            lineCoordinates = this.formatValuesForLine(),
            fillCoordinates = [0, maxValue].concat(_toConsumableArray(lineCoordinates), [100, maxValue]),
            dotCoordinates = this.formatValuesForDots(),
            hoverWidth = 110 / dotCoordinates.length,
            axisCoordinates = this.formatCoordinatesForAxis();
        return React__default.createElement(Container, null, React__default.createElement(ChartContainer, {
          preserveAspectRatio: "none",
          viewBox: "0 0 100 " + maxValue
        }, React__default.createElement(ChartFill, {
          points: fillCoordinates.join(',')
        }), React__default.createElement(ChartLine, {
          points: lineCoordinates.join(',')
        }), dotCoordinates.map(function (coordinates) {
          var x = coordinates[0],
              y = coordinates[1];
          return React__default.createElement("g", {
            key: x
          }, React__default.createElement(HoverElement, {
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
          }), React__default.createElement(BottomLine, {
            x1: x,
            y1: y,
            x2: x,
            y2: maxValue
          }), React__default.createElement(TopLine, {
            x1: x,
            y1: y,
            x2: x,
            y2: 0
          }), React__default.createElement(BlueDot, {
            x1: x,
            y1: y,
            x2: x,
            y2: y
          }), React__default.createElement(LightBlueDot, {
            x1: x,
            y1: y,
            x2: x,
            y2: y
          }));
        })), axisCoordinates.length ? React__default.createElement(AxisLine, null, axisCoordinates.map(function (axis) {
          return React__default.createElement(AxisPoint, {
            key: axis.x
          }, React__default.createElement(AxisValue, null, axis.label));
        })) : null, this.state.shownValue !== null ? React__default.createElement(Value, {
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
      key: "formatValuesForLine",
      value: function formatValuesForLine() {
        if (this.props.values.length < 2) {
          return [];
        }

        var values = [],
            maxValue = Math.max.apply(Math, [0].concat(_toConsumableArray(this.props.values))),
            step = 100 / (this.props.values.length - 1);

        for (var i = 0; i < this.props.values.length; i++) {
          values.push(i * step);
          values.push(Math.min(maxValue, maxValue - this.props.values[i]));
        }

        return values;
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
       * @returns {Array}
       */

    }, {
      key: "formatValuesForDots",
      value: function formatValuesForDots() {
        if (this.props.values.length < 2) {
          return [];
        }

        var values = [],
            maxValue = Math.max.apply(Math, _toConsumableArray(this.props.values)),
            step = 100 / (this.props.values.length - 1);

        for (var i = 0; i < this.props.values.length; i++) {
          values.push([i * step, Math.min(maxValue, maxValue - this.props.values[i])]);
        }

        return values;
      }
    }]);

    return LineChart;
  }(React.Component);

  function _templateObject7$1() {
    var data = _taggedTemplateLiteral(["\n    stroke-width: 2px;\n    fill: none;\n    stroke: ", ";\n    //stroke-linecap: round;\n    transform: rotate(-90deg);\n    transform-origin: center;\n"]);

    _templateObject7$1 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6$1() {
    var data = _taggedTemplateLiteral(["\n    stroke-width: 2px;\n    fill: none;\n    stroke: ", ";\n    opacity: 0.2;\n"]);

    _templateObject6$1 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5$1() {
    var data = _taggedTemplateLiteral(["\n    display : block;\n    height: 150px;\n    width: 150px;\n"]);

    _templateObject5$1 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4$1() {
    var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n    color: ", ";\n    font-family : sans-serif;\n"]);

    _templateObject4$1 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3$1() {
    var data = _taggedTemplateLiteral(["\n    position: absolute;\n    display : block;\n    text-align: center;\n    top: 80px;\n    font-size: ", ";\n    color: ", ";\n    font-family : sans-serif;\n    width: 150px;\n"]);

    _templateObject3$1 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2$1() {
    var data = _taggedTemplateLiteral(["\n    position: absolute;\n    display : block;\n    text-align: center;\n    top: 40px;\n    font-size: ", ";\n    color: ", ";\n    font-family : sans-serif;\n    width: 150px;\n"]);

    _templateObject2$1 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$2() {
    var data = _taggedTemplateLiteral(["\n    display : block;\n    position: relative;\n    height: 150px;\n    width: 150px;\n"]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  var Container$1 = styled__default.div(_templateObject$2());
  var Value$1 = styled__default.div(_templateObject2$1(), spacings.large, colors.interactive);
  var Metric = styled__default.div(_templateObject3$1(), spacings.medium, colors.interactive);
  var ValueAddition = styled__default.span(_templateObject4$1(), spacings.medium, colors.interactive);
  var ChartContainer$1 = styled__default.svg(_templateObject5$1());
  var CircleBackground = styled__default.circle(_templateObject6$1(), colors.interactive);
  var CircleValue = styled__default.circle(_templateObject7$1(), colors.interactive);

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
        return React__default.createElement(Container$1, null, React__default.createElement(ChartContainer$1, {
          viewBox: "0 0 33.83098862 33.83098862"
        }, React__default.createElement(CircleBackground, {
          cx: "16.91549431",
          cy: "16.91549431",
          r: "15.91549431"
        }), React__default.createElement(CircleValue, {
          strokeDasharray: percentage + ',100',
          cx: "16.91549431",
          cy: "16.91549431",
          r: "15.91549431"
        })), React__default.createElement(Value$1, null, React__default.createElement(ValueAddition, null, this.props.prefix), value, React__default.createElement(ValueAddition, null, this.props.postfix)), React__default.createElement(Metric, null, this.props.metric));
      }
    }]);

    return CircleChart;
  }(React.Component);

  exports.CircleChart = CircleChart;
  exports.LineChart = LineChart;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
