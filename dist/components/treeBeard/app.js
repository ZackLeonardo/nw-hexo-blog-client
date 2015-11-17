'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _treeBeard = require('./treeBeard');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var data = {
    name: 'root',
    children: [{
        name: 'parent',
        children: [{
            name: 'child',
            terminal: true,
            filePath: 'root/parent/child'
        }]
    }, {
        name: 'loading parent',
        loading: true
    }, {
        name: 'parent',
        children: [{
            name: 'nested parent',
            children: [{
                name: 'nested child',
                terminal: true,
                filePath: 'root/parent/nested parent/nested child'
            }]
        }]
    }]
};

var TreeBeard = (function (_React$Component) {
    _inherits(TreeBeard, _React$Component);

    function TreeBeard(props) {
        _classCallCheck(this, TreeBeard);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TreeBeard).call(this, props));

        _this.state = {};
        _this.onToggle = _this.onToggle.bind(_this);
        return _this;
    }

    _createClass(TreeBeard, [{
        key: 'onSubTreeToggled',
        value: function onSubTreeToggled(node, toggled) {
            // Store Toggle State
            node.toggled = toggled;
        }
    }, {
        key: 'onToggle',
        value: function onToggle(node, toggled) {
            if (this.state.cursor) {
                this.state.cursor.active = false;
            }
            node.active = true;
            if (!node.terminal) {
                this.onSubTreeToggled(node, toggled);
            } else {
                window.alert(node.filePath);
            }
            this.setState({ cursor: node });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_treeBeard.Treebeard, {
                data: data,
                onToggle: this.onToggle
            });
        }
    }]);

    return TreeBeard;
})(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(TreeBeard, null), document.getElementById('fileTree'));