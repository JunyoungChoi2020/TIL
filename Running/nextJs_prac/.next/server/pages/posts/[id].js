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
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllPostIds\": () => (/* binding */ getAllPostIds),\n/* harmony export */   \"getPostData\": () => (/* binding */ getPostData),\n/* harmony export */   \"getSortedPostsData\": () => (/* binding */ getSortedPostsData)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-html */ \"remark-html\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);\n([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"posts\");\nfunction getSortedPostsData() {\n    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);\n    const allPostsData = fileNames.map((fileName)=>{\n        const id = fileName.replace(/\\.md$/, \"\");\n        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);\n        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, \"utf-8\");\n        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n        return {\n            id,\n            ...matterResult.data\n        };\n    });\n    return allPostsData.sort((a, b)=>{\n        if (a.date < b.date) {\n            return 1;\n        } else {\n            return -1;\n        }\n    });\n}\nfunction getAllPostIds() {\n    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);\n    return fileNames.map((fileName)=>{\n        return {\n            params: {\n                id: fileName.replace(/\\.md$/, \"\")\n            }\n        };\n    });\n}\nasync function getPostData(id) {\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${id}.md`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, \"utf-8\");\n    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_3__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).process(matterResult.content);\n    const contentHtml = processedContent.toString();\n    return {\n        id,\n        contentHtml,\n        ...matterResult.data\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQjtBQUNJO0FBQ1M7QUFDQTtBQUNLO0FBRXJDLE1BQU1LLGNBQWMsR0FBR0osZ0RBQVMsQ0FBQ00sT0FBTyxDQUFDQyxHQUFHLEVBQUUsRUFBRSxPQUFPLENBQUM7QUFFakQsU0FBU0Msa0JBQWtCLEdBQUc7SUFDakMsTUFBTUMsU0FBUyxHQUFHVixxREFBYyxDQUFDSyxjQUFjLENBQUM7SUFFaEQsTUFBTU8sWUFBWSxHQUFHRixTQUFTLENBQUNHLEdBQUcsQ0FBQ0MsQ0FBQUEsUUFBUSxHQUFJO1FBQzNDLE1BQU1DLEVBQUUsR0FBR0QsUUFBUSxDQUFDRSxPQUFPLFVBQVUsRUFBRSxDQUFDO1FBRXhDLE1BQU1DLFFBQVEsR0FBR2hCLGdEQUFTLENBQUNJLGNBQWMsRUFBRVMsUUFBUSxDQUFDO1FBQ3BELE1BQU1JLFlBQVksR0FBR2xCLHNEQUFlLENBQUNpQixRQUFRLEVBQUUsT0FBTyxDQUFDO1FBRXZELE1BQU1HLFlBQVksR0FBR2xCLGtEQUFNLENBQUNnQixZQUFZLENBQUM7UUFFekMsT0FBTztZQUNISCxFQUFFO1lBQ0YsR0FBSUssWUFBWSxDQUFDQyxJQUFJO1NBQ3hCO0tBQ0osQ0FBQztJQUVGLE9BQU9ULFlBQVksQ0FBQ1UsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxHQUFLO1FBQy9CLElBQUdELENBQUMsQ0FBQ0UsSUFBSSxHQUFHRCxDQUFDLENBQUNDLElBQUksRUFBRTtZQUNoQixPQUFPLENBQUMsQ0FBQztTQUNaLE1BQU07WUFDSCxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2I7S0FDSixDQUFDO0NBQ0w7QUFFTSxTQUFTQyxhQUFhLEdBQUU7SUFDM0IsTUFBTWhCLFNBQVMsR0FBR1YscURBQWMsQ0FBQ0ssY0FBYyxDQUFDO0lBQ2hELE9BQU9LLFNBQVMsQ0FBQ0csR0FBRyxDQUFDQyxDQUFBQSxRQUFRLEdBQUk7UUFDN0IsT0FBTztZQUNIYSxNQUFNLEVBQUU7Z0JBQ0paLEVBQUUsRUFBRUQsUUFBUSxDQUFDRSxPQUFPLFVBQVUsRUFBRSxDQUFDO2FBQ3BDO1NBQ0o7S0FDSixDQUFDO0NBQ0w7QUFFTSxlQUFlWSxXQUFXLENBQUNiLEVBQVMsRUFBQztJQUN4QyxNQUFNRSxRQUFRLEdBQUdoQixnREFBUyxDQUFDSSxjQUFjLEVBQUUsQ0FBQyxFQUFFVSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEQsTUFBTUcsWUFBWSxHQUFHbEIsc0RBQWUsQ0FBQ2lCLFFBQVEsRUFBRSxPQUFPLENBQUM7SUFFdkQsTUFBTUcsWUFBWSxHQUFHbEIsa0RBQU0sQ0FBQ2dCLFlBQVksQ0FBQztJQUV6QyxNQUFNVyxnQkFBZ0IsR0FBRyxNQUFNMUIsOENBQU0sRUFBRSxDQUFDMkIsR0FBRyxDQUFDMUIsbURBQVUsQ0FBQyxDQUFDRyxPQUFPLENBQUNhLFlBQVksQ0FBQ1csT0FBTyxDQUFDO0lBQ3JGLE1BQU1DLFdBQVcsR0FBR0gsZ0JBQWdCLENBQUNJLFFBQVEsRUFBRTtJQUUvQyxPQUFPO1FBQ0hsQixFQUFFO1FBQ0ZpQixXQUFXO1FBQ1gsR0FBSVosWUFBWSxDQUFDQyxJQUFJO0tBQ3hCO0NBSUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9saWIvcG9zdC50cz85OWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xuaW1wb3J0IHsgcmVtYXJrIH0gZnJvbSBcInJlbWFya1wiO1xuaW1wb3J0IHJlbWFya0h0bWwgZnJvbSBcInJlbWFyay1odG1sXCI7XG5cbmNvbnN0IHBvc3RzRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwb3N0cycpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29ydGVkUG9zdHNEYXRhKCkge1xuICAgIGNvbnN0IGZpbGVOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcblxuICAgIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGZpbGVOYW1lcy5tYXAoZmlsZU5hbWUgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGZpbGVOYW1lLnJlcGxhY2UoL1xcLm1kJC8sIFwiXCIpXG5cbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGZpbGVOYW1lKVxuICAgICAgICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsICd1dGYtOCcpXG5cbiAgICAgICAgY29uc3QgbWF0dGVyUmVzdWx0ID0gbWF0dGVyKGZpbGVDb250ZW50cylcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAuLi4obWF0dGVyUmVzdWx0LmRhdGEgYXMgeyBkYXRlOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmd9KVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBhbGxQb3N0c0RhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZihhLmRhdGUgPCBiLmRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBvc3RJZHMoKXtcbiAgICBjb25zdCBmaWxlTmFtZXMgPSBmcy5yZWFkZGlyU3luYyhwb3N0c0RpcmVjdG9yeSk7XG4gICAgcmV0dXJuIGZpbGVOYW1lcy5tYXAoZmlsZU5hbWUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGZpbGVOYW1lLnJlcGxhY2UoL1xcLm1kJC8sICcnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3REYXRhKGlkOnN0cmluZyl7XG4gICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGAke2lkfS5tZGApO1xuICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgJ3V0Zi04Jyk7XG5cbiAgICBjb25zdCBtYXR0ZXJSZXN1bHQgPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKTtcblxuICAgIGNvbnN0IHByb2Nlc3NlZENvbnRlbnQgPSBhd2FpdCByZW1hcmsoKS51c2UocmVtYXJrSHRtbCkucHJvY2VzcyhtYXR0ZXJSZXN1bHQuY29udGVudCk7XG4gICAgY29uc3QgY29udGVudEh0bWwgPSBwcm9jZXNzZWRDb250ZW50LnRvU3RyaW5nKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgY29udGVudEh0bWwsXG4gICAgICAgIC4uLihtYXR0ZXJSZXN1bHQuZGF0YSBhcyB7IGRhdGU6IHN0cmluZzsgdGl0bGU6IHN0cmluZyB9KVxuICAgIH1cblxuXG5cbn0iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwibWF0dGVyIiwicmVtYXJrIiwicmVtYXJrSHRtbCIsInBvc3RzRGlyZWN0b3J5Iiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJnZXRTb3J0ZWRQb3N0c0RhdGEiLCJmaWxlTmFtZXMiLCJyZWFkZGlyU3luYyIsImFsbFBvc3RzRGF0YSIsIm1hcCIsImZpbGVOYW1lIiwiaWQiLCJyZXBsYWNlIiwiZnVsbFBhdGgiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZVN5bmMiLCJtYXR0ZXJSZXN1bHQiLCJkYXRhIiwic29ydCIsImEiLCJiIiwiZGF0ZSIsImdldEFsbFBvc3RJZHMiLCJwYXJhbXMiLCJnZXRQb3N0RGF0YSIsInByb2Nlc3NlZENvbnRlbnQiLCJ1c2UiLCJjb250ZW50IiwiY29udGVudEh0bWwiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/post.ts\n");

/***/ }),

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/post */ \"./lib/post.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_post__WEBPACK_IMPORTED_MODULE_2__]);\n_lib_post__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Post = ({ postData  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: postData.title\n                }, void 0, false, {\n                    fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/posts/[id].tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/posts/[id].tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().headingXl),\n                        children: postData.title\n                    }, void 0, false, {\n                        fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/posts/[id].tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: postData.date\n                    }, void 0, false, {\n                        fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/posts/[id].tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        dangerouslySetInnerHTML: {\n                            __html: postData.contentHtml\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/posts/[id].tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/posts/[id].tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/junyoungchoi/Desktop/TIL/Running/Reddit_clone/pages/posts/[id].tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\nconst getStaticPaths = async ()=>{\n    const paths = (0,_lib_post__WEBPACK_IMPORTED_MODULE_2__.getAllPostIds)();\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async ({ params  })=>{\n    const postData = await (0,_lib_post__WEBPACK_IMPORTED_MODULE_2__.getPostData)(params.id);\n    return {\n        props: {\n            postData\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUUrQjtBQUM3QjtBQUN5QjtBQUVyRCxNQUFNSyxJQUFJLEdBQUcsQ0FBQyxFQUFDQyxRQUFRLEdBTXRCLEdBQUs7SUFDRixxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNKLGtEQUFJOzBCQUNELDRFQUFDSyxPQUFLOzhCQUNERixRQUFRLENBQUNFLEtBQUs7Ozs7OzZCQUNYOzs7Ozt5QkFDTDswQkFDUCw4REFBQ0MsU0FBTzs7a0NBQ0osOERBQUNDLElBQUU7d0JBQUNDLFNBQVMsRUFBRVAsMEVBQW9CO2tDQUFHRSxRQUFRLENBQUNFLEtBQUs7Ozs7O2lDQUFNO2tDQUMxRCw4REFBQ0QsS0FBRztrQ0FDQ0QsUUFBUSxDQUFDTyxJQUFJOzs7OztpQ0FDWjtrQ0FDTiw4REFBQ04sS0FBRzt3QkFBQ08sdUJBQXVCLEVBQUU7NEJBQUNDLE1BQU0sRUFBRVQsUUFBUSxDQUFDVSxXQUFXO3lCQUFDOzs7OztpQ0FBSTs7Ozs7O3lCQUMxRDs7Ozs7O2lCQUNSLENBQ1I7Q0FDTDtBQUVELGlFQUFlWCxJQUFJLEVBQUM7QUFFYixNQUFNWSxjQUFjLEdBQW1CLFVBQVk7SUFDdEQsTUFBTUMsS0FBSyxHQUFHakIsd0RBQWEsRUFBRTtJQUM3QixPQUFPO1FBQ0hpQixLQUFLO1FBQ0xDLFFBQVEsRUFBRSxLQUFLO0tBQ2xCO0NBQ0o7QUFFTSxNQUFNQyxjQUFjLEdBQW1CLE9BQU8sRUFBQ0MsTUFBTSxHQUFDLEdBQUs7SUFDOUQsTUFBTWYsUUFBUSxHQUFHLE1BQU1KLHNEQUFXLENBQUNtQixNQUFNLENBQUNDLEVBQUUsQ0FBVztJQUN2RCxPQUFPO1FBQ0hDLEtBQUssRUFBRTtZQUNIakIsUUFBUTtTQUNYO0tBQ0o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL3Bvc3RzL1tpZF0udHN4PzIxZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7R2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzfSBmcm9tICduZXh0J1xuaW1wb3J0IHtnZXRBbGxQb3N0SWRzLCBnZXRQb3N0RGF0YX0gZnJvbSAnLi4vLi4vbGliL3Bvc3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgaG9tZVN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBQb3N0ID0gKHtwb3N0RGF0YX0gOiB7XG4gICAgcG9zdERhdGE6IHtcbiAgICAgICAgdGl0bGU6IHN0cmluZ1xuICAgICAgICBkYXRlOiBzdHJpbmdcbiAgICAgICAgY29udGVudEh0bWw6IHN0cmluZ1xuICAgIH1cbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAgICAgICAgICB7cG9zdERhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2hvbWVTdHlsZXMuaGVhZGluZ1hsfT57cG9zdERhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7cG9zdERhdGEuZGF0ZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwb3N0RGF0YS5jb250ZW50SHRtbH19IC8+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBhdGhzID0gZ2V0QWxsUG9zdElkcygpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoe3BhcmFtc30pID0+IHtcbiAgICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IGdldFBvc3REYXRhKHBhcmFtcy5pZCBhcyBzdHJpbmcpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwb3N0RGF0YVxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImdldEFsbFBvc3RJZHMiLCJnZXRQb3N0RGF0YSIsIkhlYWQiLCJob21lU3R5bGVzIiwiUG9zdCIsInBvc3REYXRhIiwiZGl2IiwidGl0bGUiLCJhcnRpY2xlIiwiaDEiLCJjbGFzc05hbWUiLCJoZWFkaW5nWGwiLCJkYXRlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjb250ZW50SHRtbCIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwiaWQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[id].tsx\n");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("remark");;

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("remark-html");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].tsx"));
module.exports = __webpack_exports__;

})();