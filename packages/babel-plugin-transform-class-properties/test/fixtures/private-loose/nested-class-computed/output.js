var _foo = /*#__PURE__*/babelHelpers.classPrivateFieldLooseKey("foo");
var Foo = /*#__PURE__*/function () {
  "use strict";

  function Foo() {
    babelHelpers.classCallCheck(this, Foo);
    Object.defineProperty(this, _foo, {
      writable: true,
      value: 1
    });
  }
  return babelHelpers.createClass(Foo, [{
    key: "test",
    value: function test() {
      var Nested = /*#__PURE__*/function (_babelHelpers$classPr) {
        function Nested() {
          babelHelpers.classCallCheck(this, Nested);
        }
        return babelHelpers.createClass(Nested, [{
          key: _babelHelpers$classPr,
          value: function () {}
        }]);
      }(babelHelpers.classPrivateFieldLooseBase(this, _foo)[_foo]);
      babelHelpers.classPrivateFieldLooseBase(this, _foo)[_foo];
    }
  }]);
}();
