"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Theme = require("./Theme");

var _reactRouterDom = require("react-router-dom");

var _material = require("@mui/material");

var _Home = _interopRequireDefault(require("@mui/icons-material/Home"));

var _People = _interopRequireDefault(require("@mui/icons-material/People"));

var _DnsRounded = _interopRequireDefault(require("@mui/icons-material/DnsRounded"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const categories = [{
  id: 'Build',
  children: [{
    id: 'Authentication',
    icon: /*#__PURE__*/_react.default.createElement(_People.default, null),
    route: '/authentication'
  }, {
    id: 'Database',
    icon: /*#__PURE__*/_react.default.createElement(_DnsRounded.default, null),
    route: '/database'
  }]
}];
const item = {
  'py': '2px',
  'px': 3,
  'color': 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)'
  }
};
const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3
};

const Navbar = props => {
  const IsActive = route => {
    return route === (0, _reactRouterDom.useLocation)().pathname;
  };

  return /*#__PURE__*/_react.default.createElement(_material.ThemeProvider, {
    theme: _Theme.theme
  }, /*#__PURE__*/_react.default.createElement(_material.CssBaseline, null), /*#__PURE__*/_react.default.createElement(_material.Drawer, {
    variant: "permanent",
    PaperProps: {
      style: {
        width: 256
      }
    },
    sx: {
      display: {
        sm: 'block',
        xs: 'none'
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_material.List, {
    disablePadding: true
  }, /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    sx: _objectSpread(_objectSpread(_objectSpread({}, item), itemCategory), {}, {
      fontSize: 22,
      color: '#fff'
    })
  }, "Paperbase"), /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    sx: _objectSpread(_objectSpread({}, item), itemCategory)
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(_Home.default, null)), /*#__PURE__*/_react.default.createElement(_material.ListItemText, null, "Project Overview")), categories.map(_ref => {
    let {
      id,
      children
    } = _ref;
    return /*#__PURE__*/_react.default.createElement(_material.Box, {
      key: id,
      sx: {
        bgcolor: '#101F33'
      }
    }, /*#__PURE__*/_react.default.createElement(_material.ListItem, {
      sx: {
        py: 2,
        px: 3
      }
    }, /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
      sx: {
        color: '#fff'
      }
    }, id)), children.map(_ref2 => {
      let {
        id: childId,
        icon,
        route
      } = _ref2;
      return /*#__PURE__*/_react.default.createElement(_material.ListItem, {
        disablePadding: true,
        key: childId
      }, /*#__PURE__*/_react.default.createElement(_material.ListItemButton // selected={IsActive(route)}
      , {
        sx: item,
        component: _reactRouterDom.Link,
        to: route
      }, /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, null, icon), /*#__PURE__*/_react.default.createElement(_material.ListItemText, null, childId)));
    }), /*#__PURE__*/_react.default.createElement(_material.Divider, {
      sx: {
        mt: 2
      }
    }));
  }))));
};

var _default = Navbar;
exports.default = _default;