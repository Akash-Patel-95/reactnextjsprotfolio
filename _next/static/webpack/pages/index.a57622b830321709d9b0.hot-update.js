self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header/HeaderStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderStyles.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Div1": function() { return /* binding */ Div1; },
/* harmony export */   "Span": function() { return /* binding */ Span; },
/* harmony export */   "Div2": function() { return /* binding */ Div2; },
/* harmony export */   "Div3": function() { return /* binding */ Div3; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "ContactDropDown": function() { return /* binding */ ContactDropDown; },
/* harmony export */   "NavProductsIcon": function() { return /* binding */ NavProductsIcon; },
/* harmony export */   "SocialIcons": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Container",
  componentId: "sc-9w0vkp-0"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ", "{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Div1 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Div1",
  componentId: "sc-9w0vkp-1"
})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ", "{grid-area:1 / 1 / 2 / 3;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Span = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.span.withConfig({
  displayName: "HeaderStyles__Span",
  componentId: "sc-9w0vkp-2"
})([""]);
var Div2 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Div2",
  componentId: "sc-9w0vkp-3"
})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ", "{grid-area:2 / 2 / 3 / 5;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Div3 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Div3",
  componentId: "sc-9w0vkp-4"
})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ", "{align-items:center;grid-area:1 / 4 / 2 / 6;}"], function (props) {
  return props.theme.breakpoints.sm;
}); // Navigation Links

var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "HeaderStyles__NavLink",
  componentId: "sc-9w0vkp-5"
})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ", "{padding:0.5rem;}"], function (props) {
  return props.theme.breakpoints.sm;
}); /// DropDown Contact

var ContactDropDown = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "HeaderStyles__ContactDropDown",
  componentId: "sc-9w0vkp-6"
})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ", "{padding:0.4rem 0;}@media ", "{padding:0;}"], function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.theme.breakpoints.md;
});
var NavProductsIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosArrowDropdown).withConfig({
  displayName: "HeaderStyles__NavProductsIcon",
  componentId: "sc-9w0vkp-7"
})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:", ";transform:", ";&:hover{opacity:1;}@media ", "{margin:2px 0 0 2px;width:15px;}"], function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? '1' : '.75';
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? 'scaleY(-1)' : 'scaleY(1)';
}, function (props) {
  return props.theme.breakpoints.sm;
}); // Social Icons 

var SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "HeaderStyles__SocialIcons",
  componentId: "sc-9w0vkp-8"
})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclN0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJzbSIsIkRpdjEiLCJTcGFuIiwiRGl2MiIsIkRpdjMiLCJOYXZMaW5rIiwiQ29udGFjdERyb3BEb3duIiwibWQiLCJOYXZQcm9kdWN0c0ljb24iLCJJb0lvc0Fycm93RHJvcGRvd24iLCJpc09wZW4iLCJTb2NpYWxJY29ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsK1FBUVgsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBUlcsQ0FBZjtBQWdCQSxJQUFNQyxJQUFJLEdBQUdMLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDJIQUtSLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQUxRLENBQVY7QUFVQSxJQUFNRSxJQUFJLEdBQUdOLHNFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQVY7QUFJQSxJQUFNTyxJQUFJLEdBQUdQLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdIQUlSLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQUpRLENBQVY7QUFXQSxJQUFNSSxJQUFJLEdBQUdSLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHNKQUtSLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQUxRLENBQVYsQyxDQVdQOztBQUNPLElBQU1LLE9BQU8sR0FBR1QsbUVBQUg7QUFBQTtBQUFBO0FBQUEsb0tBVVgsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBVlcsQ0FBYixDLENBZVA7O0FBQ08sSUFBTU0sZUFBZSxHQUFHVix3RUFBSDtBQUFBO0FBQUE7QUFBQSxzUUFnQm5CLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQWhCbUIsRUFtQm5CLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QlEsRUFBbkM7QUFBQSxDQW5CbUIsQ0FBckI7QUF3QkEsSUFBTUMsZUFBZSxHQUFHWiwwREFBTSxDQUFDYSw4REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHVLQUtmO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sR0FBRyxHQUFILEdBQVMsS0FBaEM7QUFBQSxDQUxlLEVBTWI7QUFBQSxNQUFHQSxNQUFILFNBQUdBLE1BQUg7QUFBQSxTQUFpQkEsTUFBTSxHQUFHLFlBQUgsR0FBa0IsV0FBekM7QUFBQSxDQU5hLEVBVWpCLFVBQUNiLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVZpQixDQUFyQixDLENBaUJQOztBQUVPLElBQU1XLFdBQVcsR0FBR2YsbUVBQUg7QUFBQTtBQUFBO0FBQUEsOElBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE1NzYyMmI4MzAzMjE3MDlkOWIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJb0lvc0Fycm93RHJvcGRvd24gfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDJyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgNjBweCk7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwLjVyZW07XG4gICAgZ3JpZC1yb3ctZ2FwOiAwLjVyZW07XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgRGl2MSA9IHN0eWxlZC5kaXZgXG5ncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IHJvdztcbmFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcbn1cbmA7XG5leHBvcnQgY29uc3QgU3BhbiA9IHN0eWxlZC5zcGFuYFxuICBcbmA7XG5cbmV4cG9ydCBjb25zdCBEaXYyID0gc3R5bGVkLmRpdmBcbmdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNDtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA1O1xufVxuYDtcblxuXG5cbmV4cG9ydCBjb25zdCBEaXYzID0gc3R5bGVkLmRpdmBcbmdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNjtcbn1cbmA7XG5cbi8vIE5hdmlnYXRpb24gTGlua3NcbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gc3R5bGVkLmFgXG5mb250LXNpemU6IDJyZW07XG5saW5lLWhlaWdodDogMzJweDtcbmNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xudHJhbnNpdGlvbjogMC40cyBlYXNlO1xuJjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbmA7XG5cbi8vLyBEcm9wRG93biBDb250YWN0XG5leHBvcnQgY29uc3QgQ29udGFjdERyb3BEb3duID0gc3R5bGVkLmJ1dHRvbmBcbmJvcmRlcjogbm9uZTtcbmRpc3BsYXk6IGZsZXg7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5iYWNrZ3JvdW5kOiBub25lO1xuZm9udC1zaXplOiAxLjdyZW07XG5saW5lLWhlaWdodDogMzJweDtcbmNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuY3Vyc29yOiBwb2ludGVyO1xudHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuJjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4mOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gIHBhZGRpbmc6IDAuNHJlbSAwO1xufVxuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICBwYWRkaW5nOiAwO1xufVxuYDtcblxuZXhwb3J0IGNvbnN0IE5hdlByb2R1Y3RzSWNvbiA9IHN0eWxlZChJb0lvc0Fycm93RHJvcGRvd24pYFxuICBtYXJnaW4tbGVmdDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgb3BhY2l0eTogJHsoeyBpc09wZW4gfSkgPT4gKGlzT3BlbiA/ICcxJyA6ICcuNzUnKX07XG4gIHRyYW5zZm9ybTogJHsoeyBpc09wZW4gfSkgPT4gKGlzT3BlbiA/ICdzY2FsZVkoLTEpJyA6ICdzY2FsZVkoMSknKX07XG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIG1hcmdpbjogMnB4IDAgMCAycHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gIH1cbmA7XG5cblxuLy8gU29jaWFsIEljb25zIFxuXG5leHBvcnQgY29uc3QgU29jaWFsSWNvbnMgPSBzdHlsZWQuYWBcbnRyYW5zaXRpb246IDAuM3MgZWFzZTtcbmNvbG9yOiB3aGl0ZTtcbmJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTJkNDU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbiAgfVxuYCJdLCJzb3VyY2VSb290IjoiIn0=