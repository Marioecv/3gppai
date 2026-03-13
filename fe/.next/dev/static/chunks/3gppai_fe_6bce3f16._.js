(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/3gppai/fe/components/3gppchat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "amenityMap",
    ()=>amenityMap,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileInput$3e$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/lucide-react/dist/esm/icons/file-input.js [app-client] (ecmascript) <export default as FileInput>");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquarePause$3e$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/lucide-react/dist/esm/icons/square-pause.js [app-client] (ecmascript) <export default as SquarePause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bath$3e$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/lucide-react/dist/esm/icons/bath.js [app-client] (ecmascript) <export default as Bath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/lucide-react/dist/esm/icons/mountain.js [app-client] (ecmascript) <export default as Mountain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$parking$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ParkingCircle$3e$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/lucide-react/dist/esm/icons/circle-parking.js [app-client] (ecmascript) <export default as ParkingCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2d$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlugZap$3e$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/lucide-react/dist/esm/icons/plug-zap.js [app-client] (ecmascript) <export default as PlugZap>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const amenityMap = {
    wifi: {
        label: "Wi-Fi",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faWifi"],
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 23,
            columnNumber: 33
        }, ("TURBOPACK compile-time value", void 0))
    },
    Automóvil: {
        label: "Wi-Fi",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faCar"],
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 24,
            columnNumber: 38
        }, ("TURBOPACK compile-time value", void 0))
    },
    estacionamiento: {
        label: "Estacionamiento gratis",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$parking$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ParkingCircle$3e$__["ParkingCircle"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 27,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    jacuzzi: {
        label: "Jacuzzi",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bath$3e$__["Bath"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 29,
            columnNumber: 38
        }, ("TURBOPACK compile-time value", void 0))
    },
    cocina: {
        label: "Cocina equipada",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faUtensils"],
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 30,
            columnNumber: 45
        }, ("TURBOPACK compile-time value", void 0))
    },
    calefacción: {
        label: "Calefacción",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faFire"],
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 31,
            columnNumber: 46
        }, ("TURBOPACK compile-time value", void 0))
    },
    aire_acondicionado: {
        label: "Aire acondicionado",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faSnowflake"],
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 32,
            columnNumber: 59
        }, ("TURBOPACK compile-time value", void 0))
    },
    piscina: {
        label: "Piscina",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faPersonSwimming"],
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 33,
            columnNumber: 38
        }, ("TURBOPACK compile-time value", void 0))
    },
    tv: {
        label: "Televisión",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faTv"],
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 34,
            columnNumber: 36
        }, ("TURBOPACK compile-time value", void 0))
    },
    desayuno: {
        label: "Desayuno incluido",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faMugHot"],
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 35,
            columnNumber: 49
        }, ("TURBOPACK compile-time value", void 0))
    },
    pet_friendly: {
        label: "Pet-Friendly",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faDog"],
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 36,
            columnNumber: 48
        }, ("TURBOPACK compile-time value", void 0))
    },
    vista_montaña: {
        label: "Vista a la montaña",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__["Mountain"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 37,
            columnNumber: 55
        }, ("TURBOPACK compile-time value", void 0))
    },
    enchufes: {
        label: "Enchufes",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2d$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlugZap$3e$__["PlugZap"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 38,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0))
    },
    accesibilidad: {
        label: "Accesibilidad",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faWheelchair"],
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 39,
            columnNumber: 50
        }, ("TURBOPACK compile-time value", void 0))
    },
    solarium: {
        label: "Solárium",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faSun"],
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 40,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0))
    },
    seguridad: {
        label: "Seguridad 24h",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faShieldAlt"],
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 41,
            columnNumber: 46
        }, ("TURBOPACK compile-time value", void 0))
    },
    frente_al_lago: {
        label: "Frente al lago",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faWater"],
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 42,
            columnNumber: 52
        }, ("TURBOPACK compile-time value", void 0))
    }
};
const AdiumChat = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(({ initialMessage, userId, userName, token }, ref)=>{
    _s();
    //const [mensaje, setMensaje] = useState("");
    const mensaje = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(""); // NO causa render
    const setMensaje = (v)=>{
        mensaje.current = v;
    };
    const [render, setRender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mensajes, setMensajes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            autor: "bot",
            texto: "👋 ¡Hola " + userName + `! Soy SpecPilot, tu asistente especializado en interpretar, explicar y buscar información dentro de las especificaciones técnicas 3GPP (TS, TR, Releases 13–18).

Estoy aquí para ayudarte a entender cualquier aspecto del ecosistema móvil 4G/5G, desde arquitectura del Core Network hasta procedimientos, interfaces, seguridad, políticas y signaling.\n

Puedes preguntarme cosas como:\n\n

• ¿Cuál es la función del AMF/SMF/UPF según la TS 23.501?\n
• ¿Cómo funciona el establecimiento de una PDU Session?\n
• ¿Qué define la cláusula 5.x de una TS específica?\n
• ¿Qué diferencias hay entre Rel-15 vs Rel-16 vs Rel-17?\n
• ¿Cómo operan protocolos como HTTP/2 (SBI), PFCP, NAS o GTP-U?\n
• ¿Cómo se describe un procedimiento de movilidad inter-RAT o handover?\n\n

\nPuedo buscar en las TS indexadas, resumir cláusulas relevantes y ayudarte a interpretar el estándar de forma clara, precisa y alineada con 3GPP.

Cuando quieras, envíame tu consulta técnica. Estoy listo para ayudarte. 🚀📡📘
`
        }
    ]);
    const [sessionId, setSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const chatEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const claraChatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mensajesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    //const inputTextRef = useRef<HTMLInputElement>(null);
    const inputTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [didAnimate, setDidAnimate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStreaming, setIsStreaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dataaccumRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const newMessageCreated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdiumChat.useEffect": ()=>{
            mensajesRef.current = mensajes;
            chatEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["AdiumChat.useEffect"], [
        mensajes
    ]);
    const enviarMensajeDesdeProp = async (texto, sessionId, mensajes, setMensajes)=>{
        const controller = new AbortController();
        abortControllerRef.current = controller;
        if (!sessionId) return;
        const nuevos = [
            ...mensajes,
            {
                autor: "user",
                texto
            }
        ];
        setMensajes(nuevos);
        try {
            const res = await fetch("/api/ts-3gpp-chat", {
                method: "POST",
                signal: controller.signal,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    session_id: sessionId,
                    mensaje: texto
                })
            });
            if (!res.ok || !res.body) throw new Error("Respuesta inválida del servidor");
            const reader = res.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let result = "";
            //setMensajes(prev => [...prev, { autor: "bot", texto: "" }]);
            function handleEventFrame(e) {
                let eventName = "";
                let dataStr = "";
                for (const line of e.split("\n")){
                    if (line.startsWith("event:")) eventName = line.slice(6).trim();
                    if (line.startsWith("data:")) dataStr += line.slice(5).trim();
                }
                if (!dataStr) return;
                if (eventName === "log") {
                    if (!newMessageCreated.current) {
                        setMensajes((prev)=>[
                                ...prev,
                                {
                                    autor: "log",
                                    texto: ""
                                }
                            ]);
                        newMessageCreated.current = true;
                    }
                    setMensajes((prev)=>{
                        const data = JSON.parse(dataStr);
                        const actual = [
                            ...prev
                        ];
                        actual[actual.length - 1].autor = "log";
                        actual[actual.length - 1].texto = data.content;
                        return actual;
                    });
                    return;
                }
                if (eventName === "delta") {
                    if (!newMessageCreated.current) {
                        setMensajes((prev)=>[
                                ...prev,
                                {
                                    autor: "bot",
                                    texto: ""
                                }
                            ]);
                        newMessageCreated.current = true;
                    }
                    const data = JSON.parse(dataStr);
                    dataaccumRef.current += data.content;
                    const snapshot = dataaccumRef.current;
                    console.log("CLARA snapshot: ", snapshot);
                    setMensajes((prev)=>{
                        const actual = [
                            ...prev
                        ];
                        actual[actual.length - 1].autor = "bot";
                        actual[actual.length - 1].texto = snapshot;
                        return actual;
                    });
                    return;
                }
                if (eventName === "results") {
                    if (!newMessageCreated.current) {
                        setMensajes((prev)=>[
                                ...prev,
                                {
                                    autor: "bot",
                                    texto: ""
                                }
                            ]);
                        newMessageCreated.current = true;
                    }
                    setMensajes((prev)=>{
                        const actual = [
                            ...prev
                        ];
                        actual[actual.length - 1].autor = "bot";
                        actual[actual.length - 1].texto = dataStr;
                        return actual;
                    });
                    return;
                }
                if (eventName === "done") {
                    return; // terminó
                }
            }
            function consumeEvents(buf) {
                const parts = buf.split("\n\n");
                const rest = parts.pop() || "";
                for (const frame of parts)handleEventFrame(frame);
                return rest;
            }
            while(true){
                const { value, done } = await reader.read();
                if (done) {
                    console.log("⏹ Stream terminado");
                    break;
                }
                result += decoder.decode(value, {
                    stream: true
                });
                if (!result.includes("\n\n")) continue;
                result = consumeEvents(result);
            }
            result += decoder.decode();
            result = consumeEvents(result);
            dataaccumRef.current = "";
            newMessageCreated.current = false;
            return;
        } catch (err) {
            // Caso: abortaste con AbortController → no mostrar error al usuario
            if (err instanceof DOMException && err.name === "AbortError") {
                console.log("⏹ Stream abortado por el usuario");
                return;
            }
            console.error("Error enviando mensaje:", err);
            setMensajes((prev)=>[
                    ...prev,
                    {
                        autor: "bot",
                        texto: "Ocurrió un error 😓 intenta más tarde."
                    }
                ]);
        } finally{
            abortControllerRef.current = null;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "AdiumChat.useImperativeHandle": ()=>({
                enviarMensajeDesdeOutside: ({
                    "AdiumChat.useImperativeHandle": async (texto)=>{
                        if (!texto.trim() || !sessionId) return;
                        try {
                            setIsStreaming(true);
                            await enviarMensajeDesdeProp(texto, sessionId, mensajesRef.current, setMensajes);
                            setMensaje("");
                        } catch (e) {
                            console.error("Error en streaming:", e);
                        } finally{
                            setIsStreaming(false);
                        }
                    }
                })["AdiumChat.useImperativeHandle"]
            })
    }["AdiumChat.useImperativeHandle"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdiumChat.useEffect": ()=>{
            // Crear sesión
            if (!token || !userId) return;
            if (isSessionIdExisting.current) return;
            isSessionIdExisting.current = true;
            fetch("/api/new-ts-3gpp-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: userId,
                    user_name: userName,
                    token
                })
            }).then({
                "AdiumChat.useEffect": (res)=>res.json()
            }["AdiumChat.useEffect"]).then({
                "AdiumChat.useEffect": (data)=>{
                    if (data.session_id) setSessionId(data.session_id);
                }
            }["AdiumChat.useEffect"]);
        }
    }["AdiumChat.useEffect"], [
        token,
        userId
    ]);
    const isSessionIdExisting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const alreadySent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdiumChat.useEffect": ()=>{
            if (initialMessage && sessionId && !alreadySent.current) {
                enviarMensajeDesdeProp(initialMessage, sessionId, mensajesRef.current, setMensajes);
                alreadySent.current = true;
            }
        }
    }["AdiumChat.useEffect"], [
        initialMessage,
        sessionId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdiumChat.useEffect": ()=>{
            chatEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["AdiumChat.useEffect"], [
        mensajes
    ]);
    const enviarMensaje = async ()=>{
        if (!mensaje.current.trim() || !sessionId) return;
        try {
            setIsStreaming(true);
            await enviarMensajeDesdeProp(mensaje.current, sessionId, mensajesRef.current, setMensajes);
            setMensaje("");
        } catch (e) {
            console.error("Error en streaming:", e);
        } finally{
            setIsStreaming(false);
        }
    };
    function ChatMsg({ content }) {
        if (content == null) return null;
        if (typeof content === 'string') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "markdown-content prose prose-sm max-w-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                    remarkPlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    children: content
                }, void 0, false, {
                    fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                    lineNumber: 314,
                    columnNumber: 75
                }, this)
            }, void 0, false, {
                fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                lineNumber: 314,
                columnNumber: 15
            }, this);
        }
        // cuando content es JSX/ReactNode
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "prose max-w-none",
            children: content
        }, void 0, false, {
            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
            lineNumber: 317,
            columnNumber: 12
        }, this);
    }
    const isAHiddenMsg = (input)=>{
        if (typeof input !== "string") return null;
        try {
            const data = JSON.parse(input);
            const isHidden = data.hidden ?? false;
            console.log("EN CLARACHAT - isHidden:", isHidden);
            return isHidden;
        } catch  {
            return false;
        }
    };
    const setCheckCalendarChatContext = async ()=>{
        setMensaje("Quiero chequear disponibilidad del medicamento.");
        enviarMensaje();
    };
    const setSpaceInfoChatContext = async ()=>{
        setMensaje("Quiero información del medicamento.");
        enviarMensaje();
    };
    const handlePause = ()=>{
        setIsStreaming(false); // UI
        abortControllerRef.current?.abort(); // 👈 corta la request al BE
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " flex-1 flex flex-col min-h-0 mx-0 z-[10] overflow-y-hidden mt-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-99350b4bef41b271" + " " + `flex-1 flex flex-col min-h-0 z-[10] w-full mx-auto px-4 overflow-y-auto mb-9 sm:mb-21`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: "99350b4bef41b271",
                        children: "@keyframes fadeInUp{0%{opacity:0;transform:translateY(2px)}to{opacity:1;transform:translateY(0)}}"
                    }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
                    mensajes.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-99350b4bef41b271" + " " + `mb-2 flex ${msg.autor === "user" ? "justify-end" : "justify-start"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-99350b4bef41b271" + " " + `flex flex-col max-w-[80%] text-sm ${msg.autor === "user" ? "items-end text-right" : "items-start text-left"}`,
                                children: !isAHiddenMsg(msg.texto) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animationDelay: `${i * 10}ms`
                                    },
                                    className: "jsx-99350b4bef41b271" + " " + `px-4 py-2 rounded-lg shadow-sm 
                    
                      ${msg.autor === "user" ? "bg-gray-200 text-gray-800" : msg.autor === "log" ? "animate-[blink_1s_infinite] italic bg-emerald-100 text-gray-900" : "bg-blue-50 text-gray-900"}
                      opacity-0 animate-[fadeInUp_900ms_ease-out_forwards]`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-99350b4bef41b271" + " " + "mb-1 font-semibold",
                                            children: msg.autor === "bot" || msg.autor === "log" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-99350b4bef41b271" + " " + "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                        className: "w-7 h-7 text-emerald-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 28
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-99350b4bef41b271",
                                                        children: "SpecPilot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                                                lineNumber: 372,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)) : "👤 Tú"
                                        }, void 0, false, {
                                            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                                            lineNumber: 370,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatMsg, {
                                            content: msg.texto
                                        }, void 0, false, {
                                            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                                            lineNumber: 380,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                                    lineNumber: 364,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, i, false, {
                            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: chatEndRef,
                        className: "jsx-99350b4bef41b271"
                    }, void 0, false, {
                        fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 relative absolute top-0 px-0 pt-0 bg-white shadow-md ml-5 mr-5 sm:ml-30 sm:mr-30 lg:ml-60 lg:mr-60 mb-4 rounded-xs h-max",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputTextRef,
                        onChange: (e)=>{
                            setMensaje(e.target.value);
                        },
                        onKeyDown: (e)=>{
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                if (inputTextRef.current && !isStreaming) {
                                    enviarMensaje();
                                    inputTextRef.current.value = ""; // limpia
                                    setMensaje("");
                                }
                                inputTextRef.current?.focus();
                            }
                        },
                        placeholder: "Ask your 3GPP question...",
                        className: "flex sm:hidden absolute bottom-0 rounded-full w-full bg-white flex-grow max-h-50 pl-11 pr-18 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-[0.5px] focus:ring-red-900 placeholder:text-sm placeholder:text-gray-500 text-[15px] resize-none overflow-y-auto text-black z-[100]"
                    }, void 0, false, {
                        fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ref: textAreaRef,
                        rows: 3,
                        onChange: (e)=>setMensaje(e.target.value),
                        onKeyDown: (e)=>{
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                if (textAreaRef.current && !isStreaming) {
                                    enviarMensaje();
                                    textAreaRef.current.value = ""; // limpia
                                    setMensaje("");
                                }
                                textAreaRef.current?.focus();
                            }
                        },
                        placeholder: "Ask your technical question here...",
                        className: "hidden sm:flex absolute bottom-0 w-full bg-white flex-grow max-h-50 pl-5 pr-20 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-[0.5px] focus:ring-blue-900 placeholder:text-sm placeholder:text-gray-500 text-[15px] resize-none z-[100]"
                    }, void 0, false, {
                        fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: isStreaming,
                        onClick: ()=>{
                            if (textAreaRef.current) {
                                textAreaRef.current.value = ""; // limpia}
                                textAreaRef.current.placeholder = "Setting for Embedding/Hyperparameters...";
                            }
                            setCheckCalendarChatContext();
                            textAreaRef.current?.focus();
                        },
                        title: "Setting for Embedding/Hyperparameters",
                        className: "hidden sm:flex absolute bottom-1 left-2 p-[7px] border-blue-200 rounded-full sm:rounded-lg hover:bg-blue-200/50 bg-blue-50 text-blue-700 border-1 border-gray-3000 z-[999]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                            lineNumber: 447,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                        lineNumber: 432,
                        columnNumber: 8
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: isStreaming,
                        onClick: ()=>{
                            setSpaceInfoChatContext();
                            if (textAreaRef.current) {
                                textAreaRef.current.value = ""; // limpia
                                textAreaRef.current.placeholder = "Upload additional additional technical 3GPP spec doc...";
                            }
                            textAreaRef.current?.focus();
                        },
                        title: "Upload additional technical 3GPP spec doc",
                        className: "absolute bottom-1 left-1 sm:left-11 p-[7px] px-2 border-blue-200 rounded-full sm:rounded-lg hover:bg-blue-200/50 bg-blue-50 text-blue-700 border-1 border-gray-3000 z-[999]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 text-xs text-sky-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileInput$3e$__["FileInput"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                                    lineNumber: 464,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                                    lineNumber: 464,
                                    columnNumber: 36
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                                    lineNumber: 464,
                                    columnNumber: 50
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                            lineNumber: 463,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: isStreaming,
                        type: "button",
                        onClick: async ()=>{
                            enviarMensaje();
                            if (textAreaRef.current) textAreaRef.current.value = ""; // limpia
                            textAreaRef.current?.focus();
                        },
                        className: `absolute bottom-1 right-1 sm:right-2 p-[7px] px-[7px] rounded-full sm:rounded-lg hover:bg-blue-900 bg-blue-500 text-white z-[999] ${!isStreaming ? "flex" : "hidden"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                            lineNumber: 477,
                            columnNumber: 10
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: !isStreaming,
                        type: "button",
                        onClick: ()=>{
                            handlePause();
                            if (textAreaRef.current) textAreaRef.current.value = ""; // limpia
                            textAreaRef.current?.focus();
                        },
                        className: `absolute bottom-1 right-1 sm:right-2 p-[7px] px-[7px] rounded-full sm:rounded-lg hover:bg-blue-900 bg-blue-500 text-white z-[999] ${isStreaming ? "flex" : "hidden"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SquarePause$3e$__["SquarePause"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                            lineNumber: 489,
                            columnNumber: 10
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                        lineNumber: 480,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: isStreaming,
                        className: "absolute bottom-1 right-9 sm:right-11 p-[7px] px-[7px] rounded-full sm:rounded-lg hover:bg-blue-200 text-blue-600 border border-blue-200 z-[999]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                            lineNumber: 494,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                        lineNumber: 493,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-center absolute top-0.4 w-full text-gray-500 bg-white",
                        children: "3GPP SpecPilot Demo by Mario Chandía Vidal"
                    }, void 0, false, {
                        fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
                lineNumber: 390,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/3gppai/fe/components/3gppchat.tsx",
        lineNumber: 352,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "xjRm4RSAtIV5yzsW+f4nCS0uXsk=")), "xjRm4RSAtIV5yzsW+f4nCS0uXsk=");
_c1 = AdiumChat;
AdiumChat.displayName = "AdiumChat";
const __TURBOPACK__default__export__ = AdiumChat;
var _c, _c1;
__turbopack_context__.k.register(_c, "AdiumChat$forwardRef");
__turbopack_context__.k.register(_c1, "AdiumChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/3gppai/fe/components/AuthModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function AuthModal({ onClose, onAuthSuccess }) {
    _s();
    const [isLogin, setIsLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        password: "",
        phone: "",
        location: "",
        profile_picture: ""
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError(null);
        const endpoint = isLogin ? "/login" : "/create-user";
        const payload = isLogin ? {
            email: form.email,
            password: form.password
        } : {
            name: form.name,
            email: form.email,
            password: form.password,
            phone: form.phone || undefined,
            location: form.location || undefined,
            profile_picture: form.profile_picture || undefined
        };
        try {
            const res = await fetch(`/api/${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Error inesperado");
            if (isLogin) {
                localStorage.setItem("adiumpoc_token", data.token);
                localStorage.setItem("user_name", data.name);
                localStorage.setItem("user_email", form.email); // ⬅️ esta es la línea nueva
                const parsed = JSON.parse(atob(data.token.split(".")[1]));
                onAuthSuccess(data.token, data.name, parsed.user_id);
            } else {
                alert("Cuenta creada. Ahora inicia sesión.");
                setIsLogin(true);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Ocurrió un error inesperado");
        } finally{
            setLoading(false);
        }
    };
    return(//    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/10 backdrop-blur-sm">
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/30 flex items-center justify-center z-999",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl p-6 shadow-2xl w-full max-w-sm z-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-gray-700 bg-white text-xl font-bold mb-4 text-center",
                    children: isLogin ? "Iniciar sesión" : "Crear cuenta"
                }, void 0, false, {
                    fileName: "[project]/3gppai/fe/components/AuthModal.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-3",
                    children: [
                        !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    name: "name",
                                    placeholder: "Nombre",
                                    className: "w-full border px-3 py-2 rounded text-gray-700 bg-white",
                                    onChange: handleChange,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/3gppai/fe/components/AuthModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    name: "phone",
                                    placeholder: "Teléfono (opcional)",
                                    className: "w-full border px-3 py-2 rounded  text-gray-700 bg-white",
                                    onChange: handleChange
                                }, void 0, false, {
                                    fileName: "[project]/3gppai/fe/components/AuthModal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    name: "location",
                                    placeholder: "Ubicación",
                                    className: "w-full border px-3 py-2 rounded  text-gray-700 bg-white",
                                    onChange: handleChange
                                }, void 0, false, {
                                    fileName: "[project]/3gppai/fe/components/AuthModal.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    name: "profile_picture",
                                    placeholder: "URL de foto de perfil",
                                    className: "w-full border px-3 py-2 rounded  text-gray-700 bg-white",
                                    onChange: handleChange
                                }, void 0, false, {
                                    fileName: "[project]/3gppai/fe/components/AuthModal.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "email",
                            type: "email",
                            placeholder: "Correo",
                            className: "w-full border px-3 py-2 rounded  text-gray-700 bg-white",
                            onChange: handleChange,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/3gppai/fe/components/AuthModal.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "password",
                            type: "password",
                            placeholder: "Contraseña",
                            className: "w-full border px-3 py-2 rounded  text-gray-700 bg-white",
                            onChange: handleChange,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/3gppai/fe/components/AuthModal.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/3gppai/fe/components/AuthModal.tsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "w-full bg-red-600 text-white py-2 rounded hover:bg-red-700",
                            children: loading ? "Cargando..." : isLogin ? "Entrar" : "Crear cuenta"
                        }, void 0, false, {
                            fileName: "[project]/3gppai/fe/components/AuthModal.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/3gppai/fe/components/AuthModal.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-700 bg-white text-sm text-center mt-3",
                    children: [
                        isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsLogin(!isLogin),
                            className: "text-red-600 ml-1 underline",
                            children: isLogin ? "Regístrate" : "Inicia sesión"
                        }, void 0, false, {
                            fileName: "[project]/3gppai/fe/components/AuthModal.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/3gppai/fe/components/AuthModal.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute translate-x-84 -translate-y-62 text-gray-500 hover:text-red-600 text-2xl",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/3gppai/fe/components/AuthModal.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/3gppai/fe/components/AuthModal.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/3gppai/fe/components/AuthModal.tsx",
        lineNumber: 68,
        columnNumber: 7
    }, this));
}
_s(AuthModal, "sjnVVO8KZchyCuKv4VUfT+9EPFw=");
_c = AuthModal;
var _c;
__turbopack_context__.k.register(_c, "AuthModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/3gppai/fe/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$components$2f$3gppchat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/3gppai/fe/components/3gppchat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$components$2f$AuthModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/3gppai/fe/components/AuthModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/3gppai/fe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const [userInitial, setUserInitial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [accionPendiente, setAccionPendiente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mostrarClaraChat, setMostrarClaraChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [renderizarClaraChat, setRenderizarClaraChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mostrarMenu, setMostrarMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mostrarAuthModal, setMostrarAuthModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userName, setUserNameId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mensajeInicialClara, setMensajeInicialClara] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chatActivo, setChatActivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("clara");
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (mostrarMenu) {
                document.body.style.overflowY = 'hidden';
            } else {
                document.body.style.overflowY = 'auto';
            }
        }
    }["Home.useEffect"], [
        mostrarMenu
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen bg-white flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "    w-full h-max border-b shadow-sm px-4 sticky top-0 border-gray-200 z-[999]    bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(210,235,255,0.45)_40%,rgba(135,206,250,0.25)_100%)] bg-center bg-no-repeat bg-[length:100%_100%]    ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mt-0 px-0 py-0 relative mb-0 md:mb-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-0 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between w-full flex-nowrap overflow-x-auto gap-0 px-0 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    ref: videoRef,
                                    src: "/Logo3GPPSpecPilot3.webm",
                                    autoPlay: true,
                                    muted: true,
                                    playsInline: true,
                                    disablePictureInPicture: true,
                                    controlsList: "nodownload nofullscreen noplaybackrate",
                                    className: "          flex items-center justify-center          max-w-[350px]          w-full          h-auto          object-contain         "
                                }, void 0, false, {
                                    fileName: "[project]/3gppai/fe/app/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative ml-3 z-[70]",
                                        ref: menuRef,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMostrarMenu(!mostrarMenu),
                                                className: `w-9 h-9 rounded-full flex items-center justify-center font-semibold hover:opacity-90 ${token ? 'bg-gray-800 text-white' : 'bg-white text-black border border-gray-300'}`,
                                                title: "Menú de usuario",
                                                children: userInitial ? userInitial : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    size: 20,
                                                    className: token ? "text-white" : "text-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/3gppai/fe/app/page.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/3gppai/fe/app/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 10
                                            }, this),
                                            mostrarMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fixed top-14 right-6 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-[100]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "text-sm text-gray-700",
                                                    children: [
                                                        token ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
                                                            onClick: ()=>{
                                                                setToken(null);
                                                                setUserId(null);
                                                                setUserInitial(null);
                                                                localStorage.removeItem("token");
                                                                localStorage.removeItem("user_id");
                                                                localStorage.removeItem("user_name");
                                                                localStorage.removeItem("user_email");
                                                                setRenderizarClaraChat(false);
                                                                setMostrarClaraChat(false);
                                                                setMostrarMenu(false);
                                                            },
                                                            children: "Cerrar sesión"
                                                        }, void 0, false, {
                                                            fileName: "[project]/3gppai/fe/app/page.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 15
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
                                                            onClick: ()=>{
                                                                setMostrarAuthModal(true);
                                                                setMostrarMenu(false);
                                                            },
                                                            children: "Iniciar sesión / Crear cuenta"
                                                        }, void 0, false, {
                                                            fileName: "[project]/3gppai/fe/app/page.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                                            className: "my-1 mx-3 border-gray-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/3gppai/fe/app/page.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
                                                            onClick: ()=>{
                                                                setMostrarMenu(false);
                                                                if (!token) {
                                                                    setAccionPendiente("clara");
                                                                    setMostrarAuthModal(true);
                                                                } else {
                                                                    if (!renderizarClaraChat) setRenderizarClaraChat(true);
                                                                    setMostrarClaraChat(true);
                                                                }
                                                            },
                                                            children: "Chatea con SpecPilot 3GPP"
                                                        }, void 0, false, {
                                                            fileName: "[project]/3gppai/fe/app/page.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
                                                            children: "Contáctenos"
                                                        }, void 0, false, {
                                                            fileName: "[project]/3gppai/fe/app/page.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/3gppai/fe/app/page.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 12
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/3gppai/fe/app/page.tsx",
                                                lineNumber: 79,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/3gppai/fe/app/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/3gppai/fe/app/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/3gppai/fe/app/page.tsx",
                            lineNumber: 44,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/3gppai/fe/app/page.tsx",
                        lineNumber: 43,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/3gppai/fe/app/page.tsx",
                    lineNumber: 41,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/3gppai/fe/app/page.tsx",
                lineNumber: 37,
                columnNumber: 3
            }, this),
            renderizarClaraChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: mostrarClaraChat ? "block overflow-y-hidden flex-1 h-full" : "hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 h-full flex flex-col lg:flex-row justify-center gap-6 mt-2 px-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col min-h-0 relative w-full lg:w-5/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMostrarClaraChat(false),
                                className: "absolute right-3 top-0 text-gray-400 hover:text-red-500 text-2xl font-bold z-10",
                                title: "Cerrar",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/3gppai/fe/app/page.tsx",
                                lineNumber: 145,
                                columnNumber: 7
                            }, this),
                            chatActivo === "clara" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$components$2f$3gppchat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                ref: chatRef,
                                initialMessage: mensajeInicialClara ?? undefined,
                                userId: userId,
                                userName: userName,
                                token: token
                            }, void 0, false, {
                                fileName: "[project]/3gppai/fe/app/page.tsx",
                                lineNumber: 153,
                                columnNumber: 8
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/3gppai/fe/app/page.tsx",
                        lineNumber: 144,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/3gppai/fe/app/page.tsx",
                    lineNumber: 143,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/3gppai/fe/app/page.tsx",
                lineNumber: 142,
                columnNumber: 4
            }, this),
            mostrarAuthModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$3gppai$2f$fe$2f$components$2f$AuthModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>{
                    setMostrarAuthModal(false);
                    setAccionPendiente(null);
                },
                onAuthSuccess: (token, user_name, user_id)=>{
                    setToken(token);
                    setUserId(user_id);
                    setUserNameId(user_name);
                    // Por ahora, saquemos la inicial del email del localStorage
                    const email = localStorage.getItem("user_email"); // asegúrate de guardarlo ahí en AuthModal
                    if (email) {
                        setUserInitial(email[0].toUpperCase());
                    }
                    setMostrarAuthModal(false);
                    if (accionPendiente === "clara") {
                        setMostrarClaraChat(true);
                        setRenderizarClaraChat(true);
                    }
                    setAccionPendiente(null); // limpiamos el estado
                }
            }, void 0, false, {
                fileName: "[project]/3gppai/fe/app/page.tsx",
                lineNumber: 165,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/3gppai/fe/app/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Home, "fVWypx9AzCNROO3HQHVKtz0lSK8=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=3gppai_fe_6bce3f16._.js.map