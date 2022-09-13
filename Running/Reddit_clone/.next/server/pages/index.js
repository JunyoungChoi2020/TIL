/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"headingMd\": \"Home_headingMd__SEBf6\",\n\t\"padding1px\": \"Home_padding1px__uJX3C\",\n\t\"headingLg\": \"Home_headingLg__oQ2Vy\",\n\t\"list\": \"Home_list__qBUOI\",\n\t\"listItem\": \"Home_listItem__9gzv8\",\n\t\"lightText\": \"Home_lightText__SOpV2\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkaW5nTWRcIjogXCJIb21lX2hlYWRpbmdNZF9fU0VCZjZcIixcblx0XCJwYWRkaW5nMXB4XCI6IFwiSG9tZV9wYWRkaW5nMXB4X191SlgzQ1wiLFxuXHRcImhlYWRpbmdMZ1wiOiBcIkhvbWVfaGVhZGluZ0xnX19vUTJWeVwiLFxuXHRcImxpc3RcIjogXCJIb21lX2xpc3RfX3FCVU9JXCIsXG5cdFwibGlzdEl0ZW1cIjogXCJIb21lX2xpc3RJdGVtX185Z3p2OFwiLFxuXHRcImxpZ2h0VGV4dFwiOiBcIkhvbWVfbGlnaHRUZXh0X19TT3BWMlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./lib/post.ts":
/*!*********************!*\
  !*** ./lib/post.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSortedPostsData\": () => (/* binding */ getSortedPostsData)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"posts\");\nfunction getSortedPostsData() {\n    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);\n    const allPostsData = fileNames.map((fileName)=>{\n        const id = fileName.replace(/\\.md$/, \"\");\n        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);\n        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, \"utf-8\");\n        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n        return {\n            id,\n            ...matterResult.data\n        };\n    });\n    return allPostsData.sort((a, b)=>{\n        if (a.date < b.date) {\n            return 1;\n        } else {\n            return -1;\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1CO0FBQ0k7QUFDUztBQUVoQyxNQUFNRyxjQUFjLEdBQUdGLGdEQUFTLENBQUNJLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDO0FBRWpELFNBQVNDLGtCQUFrQixHQUFHO0lBQ2pDLE1BQU1DLFNBQVMsR0FBR1IscURBQWMsQ0FBQ0csY0FBYyxDQUFDO0lBRWhELE1BQU1PLFlBQVksR0FBR0YsU0FBUyxDQUFDRyxHQUFHLENBQUNDLENBQUFBLFFBQVEsR0FBSTtRQUMzQyxNQUFNQyxFQUFFLEdBQUdELFFBQVEsQ0FBQ0UsT0FBTyxVQUFVLEVBQUUsQ0FBQztRQUV4QyxNQUFNQyxRQUFRLEdBQUdkLGdEQUFTLENBQUNFLGNBQWMsRUFBRVMsUUFBUSxDQUFDO1FBQ3BELE1BQU1JLFlBQVksR0FBR2hCLHNEQUFlLENBQUNlLFFBQVEsRUFBRSxPQUFPLENBQUM7UUFFdkQsTUFBTUcsWUFBWSxHQUFHaEIsa0RBQU0sQ0FBQ2MsWUFBWSxDQUFDO1FBRXpDLE9BQU87WUFDSEgsRUFBRTtZQUNGLEdBQUlLLFlBQVksQ0FBQ0MsSUFBSTtTQUN4QjtLQUNKLENBQUM7SUFFRixPQUFPVCxZQUFZLENBQUNVLElBQUksQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsR0FBSztRQUMvQixJQUFHRCxDQUFDLENBQUNFLElBQUksR0FBR0QsQ0FBQyxDQUFDQyxJQUFJLEVBQUU7WUFDaEIsT0FBTyxDQUFDLENBQUM7U0FDWixNQUFNO1lBQ0gsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNiO0tBQ0osQ0FBQztDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbGliL3Bvc3QudHM/OTlmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcblxuY29uc3QgcG9zdHNEaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3Bvc3RzJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3J0ZWRQb3N0c0RhdGEoKSB7XG4gICAgY29uc3QgZmlsZU5hbWVzID0gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpO1xuXG4gICAgY29uc3QgYWxsUG9zdHNEYXRhID0gZmlsZU5hbWVzLm1hcChmaWxlTmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgXCJcIilcblxuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihwb3N0c0RpcmVjdG9yeSwgZmlsZU5hbWUpXG4gICAgICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgJ3V0Zi04JylcblxuICAgICAgICBjb25zdCBtYXR0ZXJSZXN1bHQgPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIC4uLihtYXR0ZXJSZXN1bHQuZGF0YSBhcyB7IGRhdGU6IHN0cmluZzsgdGl0bGU6IHN0cmluZ30pXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGFsbFBvc3RzRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmKGEuZGF0ZSA8IGIuZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9KVxufSJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJtYXR0ZXIiLCJwb3N0c0RpcmVjdG9yeSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZ2V0U29ydGVkUG9zdHNEYXRhIiwiZmlsZU5hbWVzIiwicmVhZGRpclN5bmMiLCJhbGxQb3N0c0RhdGEiLCJtYXAiLCJmaWxlTmFtZSIsImlkIiwicmVwbGFjZSIsImZ1bGxQYXRoIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwibWF0dGVyUmVzdWx0IiwiZGF0YSIsInNvcnQiLCJhIiwiYiIsImRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/post.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/post */ \"./lib/post.ts\");\n\n\n\n\nconst Home = ({ allPostsData  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"cjy\"\n                    }, void 0, false, {\n                        fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().headingMd),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"[CJY Introduction]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"(This is a website)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().headingMd)} ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().padding1px)}`,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().headingLg),\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().list),\n                        children: allPostsData.map(({ id , title , date  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/index.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/index.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().lightText),\n                                        children: date\n                                    }, void 0, false, {\n                                        fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/index.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, id, true, {\n                                fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nconst getStaticProps = async ()=>{\n    const allPostsData = (0,_lib_post__WEBPACK_IMPORTED_MODULE_2__.getSortedPostsData)();\n    return {\n        props: {\n            allPostsData\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEI7QUFFc0I7QUFDSDtBQUUvQyxNQUFNRyxJQUFJLEdBQUcsQ0FBQyxFQUFDQyxZQUFZLEdBTTFCLEdBQUs7SUFDSixxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNMLGtEQUFJOztrQ0FDSCw4REFBQ00sT0FBSztrQ0FBQyxLQUFHOzs7OztpQ0FBUTtrQ0FDbEIsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsOEJBQThCOzs7OztpQ0FBRztrQ0FDbEUsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7aUNBQUc7Ozs7Ozt5QkFDbEM7MEJBQ1AsOERBQUNDLFNBQU87Z0JBQUNDLFNBQVMsRUFBRWIsMEVBQW9COztrQ0FDcEMsOERBQUNlLEdBQUM7a0NBQUMsb0JBQWtCOzs7OztpQ0FBSTtrQ0FDekIsOERBQUNBLEdBQUM7a0NBQUMscUJBRUg7Ozs7O2lDQUFJOzs7Ozs7eUJBQ0U7MEJBQ1IsOERBQUNILFNBQU87Z0JBQUNDLFNBQVMsRUFBRSxDQUFDLEVBQUViLDBFQUFvQixDQUFDLENBQUMsRUFBRUEsMkVBQXFCLENBQUMsQ0FBQzs7a0NBQ2xFLDhEQUFDaUIsSUFBRTt3QkFBQ0osU0FBUyxFQUFFYiwwRUFBb0I7a0NBQUUsTUFBSTs7Ozs7aUNBQUs7a0NBQzlDLDhEQUFDbUIsSUFBRTt3QkFBQ04sU0FBUyxFQUFFYixxRUFBZTtrQ0FDekJHLFlBQVksQ0FBQ2tCLEdBQUcsQ0FBQyxDQUFDLEVBQUNDLEVBQUUsR0FBRWpCLEtBQUssR0FBRWtCLElBQUksR0FBQyxpQkFDcEMsOERBQUNDLElBQUU7Z0NBQUNYLFNBQVMsRUFBRWIseUVBQW1COztrREFDOUIsOERBQUMwQixHQUFDO2tEQUFFckIsS0FBSzs7Ozs7aURBQUs7a0RBQ2QsOERBQUNzQixJQUFFOzs7O2lEQUFHO2tEQUNOLDhEQUFDQyxPQUFLO3dDQUFDZixTQUFTLEVBQUViLDBFQUFvQjtrREFBR3VCLElBQUk7Ozs7O2lEQUFTOzsrQkFIakJELEVBQUU7Ozs7eUNBSXRDLENBQ0o7Ozs7O2lDQUNBOzs7Ozs7eUJBQ0M7Ozs7OztpQkFDUixDQUNQO0NBQ0Y7QUFFRCxpRUFBZXBCLElBQUk7QUFFWixNQUFNNEIsY0FBYyxHQUFtQixVQUFZO0lBQ3RELE1BQU0zQixZQUFZLEdBQUdGLDZEQUFrQixFQUFFO0lBQ3pDLE9BQU87UUFDSDhCLEtBQUssRUFBRTtZQUNINUIsWUFBWTtTQUNmO0tBQ0o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtHZXRTdGF0aWNQcm9wcywgTmV4dFBhZ2V9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBob21lU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQge2dldFNvcnRlZFBvc3RzRGF0YX0gZnJvbSBcIi4uL2xpYi9wb3N0XCI7XG5cbmNvbnN0IEhvbWUgPSAoe2FsbFBvc3RzRGF0YX0gOiB7XG4gICAgYWxsUG9zdHNEYXRhOiB7XG4gICAgICAgIGRhdGU6IHN0cmluZ1xuICAgICAgICB0aXRsZTogc3RyaW5nXG4gICAgICAgIGlkOiBzdHJpbmdcbiAgICB9W11cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5jank8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5oZWFkaW5nTWR9PlxuICAgICAgICAgIDxwPltDSlkgSW50cm9kdWN0aW9uXTwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgKFRoaXMgaXMgYSB3ZWJzaXRlKVxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtob21lU3R5bGVzLmhlYWRpbmdNZH0gJHtob21lU3R5bGVzLnBhZGRpbmcxcHh9YH0+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtob21lU3R5bGVzLmhlYWRpbmdMZ30+QmxvZzwvaDI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtob21lU3R5bGVzLmxpc3R9PlxuICAgICAgICAgICAgICAgIHthbGxQb3N0c0RhdGEubWFwKCh7aWQsIHRpdGxlLCBkYXRlfSkgPT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtob21lU3R5bGVzLmxpc3RJdGVtfSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e2hvbWVTdHlsZXMubGlnaHRUZXh0fT57ZGF0ZX08L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGFsbFBvc3RzRGF0YVxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJIZWFkIiwiaG9tZVN0eWxlcyIsImdldFNvcnRlZFBvc3RzRGF0YSIsIkhvbWUiLCJhbGxQb3N0c0RhdGEiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImhlYWRpbmdNZCIsInAiLCJwYWRkaW5nMXB4IiwiaDIiLCJoZWFkaW5nTGciLCJ1bCIsImxpc3QiLCJtYXAiLCJpZCIsImRhdGUiLCJsaSIsImxpc3RJdGVtIiwiYSIsImJyIiwic21hbGwiLCJsaWdodFRleHQiLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();