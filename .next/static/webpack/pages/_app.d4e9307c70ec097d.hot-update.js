"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#f0e7db', '#202023')(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            'section-title': {\n                textDecoration: 'underline',\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationColor: '#525252',\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#3d7aed', '#ff63c3')(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nvar colors = {\n    grassTeal: '#88ccca'\n};\nvar config = {\n    initialColorMode: 'light',\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    fonts: fonts,\n    colors: colors\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQThDO0FBQ0Q7QUFFN0MsR0FBSyxDQUFDRSxNQUFNLEdBQUcsQ0FBQztJQUNkQyxNQUFNLEVBQUVDLFFBQVEsQ0FBUkEsS0FBSztRQUFJLE1BQ2pCLENBRGtCLENBQUM7WUFDakJDLElBQUksRUFBRSxDQUFDO2dCQUNMQyxFQUFFLEVBQUVMLDREQUFJLENBQUMsQ0FBUyxVQUFFLENBQVMsVUFBRUcsS0FBSztZQUN0QyxDQUFDO1FBQ0gsQ0FBQzs7QUFDSCxDQUFDO0FBRUQsR0FBSyxDQUFDRyxVQUFVLEdBQUcsQ0FBQztJQUNsQkMsT0FBTyxFQUFFLENBQUM7UUFDUkMsUUFBUSxFQUFFLENBQUM7WUFDVCxDQUFlLGdCQUFFLENBQUM7Z0JBQ2hCQyxjQUFjLEVBQUUsQ0FBVztnQkFDM0JDLFFBQVEsRUFBRSxFQUFFO2dCQUNaQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUN0QkMsbUJBQW1CLEVBQUUsQ0FBUztnQkFDOUJDLHVCQUF1QixFQUFFLENBQUM7Z0JBQzFCQyxTQUFTLEVBQUUsQ0FBQztnQkFDWkMsWUFBWSxFQUFFLENBQUM7WUFDakIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0RDLElBQUksRUFBRSxDQUFDO1FBQ0xDLFNBQVMsRUFBRWQsUUFBUSxDQUFSQSxLQUFLO1lBQUksTUFDdEIsQ0FEdUIsQ0FBQztnQkFDcEJlLEtBQUssRUFBRWxCLDREQUFJLENBQUMsQ0FBUyxVQUFFLENBQVMsVUFBRUcsS0FBSztnQkFDdkNRLG1CQUFtQixFQUFFLENBQUM7WUFDeEIsQ0FBQzs7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELEdBQUssQ0FBQ1EsS0FBSyxHQUFHLENBQUM7SUFDYkMsT0FBTyxFQUFFLENBQXFCO0FBQ2hDLENBQUM7QUFFRCxHQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2RDLFNBQVMsRUFBRSxDQUFTO0FBQ3RCLENBQUM7QUFFRCxHQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2RDLGdCQUFnQixFQUFFLENBQU87SUFDekJDLGtCQUFrQixFQUFFLElBQUk7QUFDMUIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsS0FBSyxHQUFHM0IsNkRBQVcsQ0FBQyxDQUFDO0lBQUN3QixNQUFNLEVBQU5BLE1BQU07SUFBRXRCLE1BQU0sRUFBTkEsTUFBTTtJQUFFSyxVQUFVLEVBQVZBLFVBQVU7SUFBRWEsS0FBSyxFQUFMQSxLQUFLO0lBQUVFLE1BQU0sRUFBTkEsTUFBTTtBQUFDLENBQUM7QUFDdkUsK0RBQWVLLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RoZW1lLmpzPzMzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBtb2RlIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZS10b29scydcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBnbG9iYWw6IHByb3BzID0+ICh7XHJcbiAgICBib2R5OiB7XHJcbiAgICAgIGJnOiBtb2RlKCcjZjBlN2RiJywgJyMyMDIwMjMnKShwcm9wcylcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gIEhlYWRpbmc6IHtcclxuICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICdzZWN0aW9uLXRpdGxlJzoge1xyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogNixcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiAnIzUyNTI1MicsXHJcbiAgICAgICAgdGV4dERlY29yYXRpb25UaGlja25lc3M6IDQsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAzLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogNFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBMaW5rOiB7XHJcbiAgICBiYXNlU3R5bGU6IHByb3BzID0+ICh7XHJcbiAgICAgIGNvbG9yOiBtb2RlKCcjM2Q3YWVkJywgJyNmZjYzYzMnKShwcm9wcyksXHJcbiAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDNcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBmb250cyA9IHtcclxuICBoZWFkaW5nOiBcIidNIFBMVVMgUm91bmRlZCAxYydcIlxyXG59XHJcblxyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgZ3Jhc3NUZWFsOiAnIzg4Y2NjYSdcclxufVxyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGluaXRpYWxDb2xvck1vZGU6ICdsaWdodCcsXHJcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiB0cnVlXHJcbn1cclxuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoeyBjb25maWcsIHN0eWxlcywgY29tcG9uZW50cywgZm9udHMsIGNvbG9ycyB9KVxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZSJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsIm1vZGUiLCJzdHlsZXMiLCJnbG9iYWwiLCJwcm9wcyIsImJvZHkiLCJiZyIsImNvbXBvbmVudHMiLCJIZWFkaW5nIiwidmFyaWFudHMiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRTaXplIiwidGV4dFVuZGVybGluZU9mZnNldCIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJ0ZXh0RGVjb3JhdGlvblRoaWNrbmVzcyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIkxpbmsiLCJiYXNlU3R5bGUiLCJjb2xvciIsImZvbnRzIiwiaGVhZGluZyIsImNvbG9ycyIsImdyYXNzVGVhbCIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ })

});