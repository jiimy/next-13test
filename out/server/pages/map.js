"use strict";
(() => {
var exports = {};
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 7017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fmap_preferredRegion_absolutePagePath_private_next_pages_2Fmap_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/map/index.tsx
var map_namespaceObject = {};
__webpack_require__.r(map_namespaceObject);
__webpack_require__.d(map_namespaceObject, {
  "default": () => (map)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./src/pages/_document.tsx
var _document = __webpack_require__(3104);
// EXTERNAL MODULE: ./src/pages/_app.tsx
var _app = __webpack_require__(9212);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "recoil"
const external_recoil_namespaceObject = require("recoil");
;// CONCATENATED MODULE: ./src/recoil/user.ts

// userState 아톰
const userState = (0,external_recoil_namespaceObject.atom)({
    key: "userState",
    default: {
        atk: "",
        locationState: {
            latitude: 0,
            longitude: 0
        }
    }
});
// selector를 사용하여 locationState.latitude를 변경
const locationSelector = (0,external_recoil_namespaceObject.selector)({
    key: "locationSelector",
    get: ({ get })=>{
        const user = get(userState);
        return user.locationState.latitude;
    },
    set: ({ set }, newValue)=>{
        // userState를 가져와서 변경
        set(userState, (prevUserState)=>({
                ...prevUserState,
                locationState: {
                    ...prevUserState.locationState,
                    latitude: newValue
                }
            }));
    }
});

;// CONCATENATED MODULE: ./src/pages/map/index.tsx




const Index = ()=>{
    const getLocation = (0,external_recoil_namespaceObject.useRecoilValue)(locationSelector);
    const [route, setRoute] = (0,external_react_.useState)([]);
    // useEffect(() => {
    //   const getLocation = {
    //     longitude: '34',
    //     latitude: '11',
    //   }
    //   // 주소로 위도 경도 찾기 - 목적지
    //   axios
    //     .get("http://localhost:3000/api/navermap", {
    //       params: {
    //         query: "서울 관악구 관악로 1",
    //       },
    //     })
    //     // 경로 탐색
    //     .then((response) => {
    //       console.log('변환 : ', response);
    //       console.log('컨버터1: ', response.data.data.addresses[0].x)
    //       console.log('컨버터2: ', response.data.data.addresses[0].y)
    //       axios
    //         .get("http://localhost:3000/api/path", {
    //           params: {
    //             start: `${getLocation.longitude},${getLocation.latitude}`,
    //             goal: `${response.data.data.addresses[0].x}, ${response.data.data.addresses[0].y}`,
    //             option: "trafast"
    //           },
    //         })
    //         .then((response) => {
    //           console.log('경로탐색 : ', response.data.data.route.trafast[0].path);
    //           // 경로 정보 설정
    //           setRoute(response.data.data.route.trafast[0].path);
    //         })
    //     })
    // }, [])
    // useEffect(() => {
    //   if (route.length > 0) {
    //     const map = new window.naver.maps.Map('map', {
    //       center: new window.naver.maps.LatLng(getLocation.latitude, getLocation.longitude), // 초기 지도 중심 좌표 설정
    //       zoom: 14, // 초기 줌 레벨 설정 - 높을수록 확대
    //     });
    //     // 경로를 표시할 Polyline 추가
    //     const polyline = new window.naver.maps.Polyline({
    //       map,
    //       path: route,
    //       strokeColor: '#ff0000', // 선 색상
    //       strokeWeight: 3, // 선 굵기
    //     });
    //     const path = route.map(coordPair => {
    //       const [latitude, longitude] = coordPair;
    //       return new window.naver.maps.LatLng(longitude, latitude);
    //     });
    //     // 출발지, 경유지, 도착지 마커 추가
    //     const markers = route.map((coordinate, index) => {
    //       if (index === 0 || index === path.length - 1) {
    //         return new window.naver.maps.Marker({
    //           position: coordinate,
    //           map
    //         });
    //       }
    //       return null;
    //     }).filter(marker => marker !== null);
    //     return () => {
    //       // 컴포넌트가 언마운트되면 지도 객체를 정리
    //       markers.forEach((marker: any) => marker.setMap(null));
    //       polyline.setMap(null);
    //     };
    //   }
    // }, [route, getLocation])
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: "맵"
    });
};
/* harmony default export */ const map = (Index);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fmap&preferredRegion=&absolutePagePath=private-next-pages%2Fmap%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fmap_preferredRegion_absolutePagePath_private_next_pages_2Fmap_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(map_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(map_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(map_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(map_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(map_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(map_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(map_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(map_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(map_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(map_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(map_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/map",
        pathname: "/map",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: map_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [37,535], () => (__webpack_exec__(7017)));
module.exports = __webpack_exports__;

})();