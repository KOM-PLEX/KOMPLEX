(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  typeof document === "object" ? document.currentScript : undefined,
  {
    "[project]/packages/config/firebase.ts [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        // Import the functions you need from the SDKs you need
        __turbopack_context__.s({
          analytics: () => analytics,
          app: () => app,
          auth: () => auth,
          githubProvider: () => githubProvider,
          googleProvider: () => googleProvider,
          microsoftProvider: () => microsoftProvider,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$3$2e$0$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/.pnpm/firebase@12.3.0/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/.pnpm/@firebase+app@0.14.3/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$3$2e$0$2f$node_modules$2f$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/.pnpm/firebase@12.3.0/node_modules/firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$analytics$40$0$2e$10$2e$18_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/.pnpm/@firebase+analytics@0.10.18_@firebase+app@0.14.3/node_modules/@firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$3$2e$0$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/.pnpm/firebase@12.3.0/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/.pnpm/@firebase+auth@1.11.0_@firebase+app@0.14.3/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export p as getAuth>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Y__as__GoogleAuthProvider$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/.pnpm/@firebase+auth@1.11.0_@firebase+app@0.14.3/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export Y as GoogleAuthProvider>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__OAuthProvider$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/.pnpm/@firebase+auth@1.11.0_@firebase+app@0.14.3/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export _ as OAuthProvider>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Z__as__GithubAuthProvider$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/.pnpm/@firebase+auth@1.11.0_@firebase+app@0.14.3/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export Z as GithubAuthProvider>"
          );
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyBQJfSMb1JjyIkFmGdPTrql1aE302O6BSM",
          authDomain: "komplex-a9ff5.firebaseapp.com",
          projectId: "komplex-a9ff5",
          storageBucket: "komplex-a9ff5.firebasestorage.app",
          messagingSenderId: "711155458274",
          appId: "1:711155458274:web:f3a907bed5b9d661db3ebb",
          measurementId: "G-NRP2WJGHQQ",
        };
        // Initialize Firebase
        const app = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
          "initializeApp"
        ])(firebaseConfig);
        // Initialize Analytics (guard for non-browser environments)
        let analytics;
        if (("TURBOPACK compile-time truthy", 1)) {
          // getAnalytics throws if not supported (e.g., SSR); check support first
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$analytics$40$0$2e$10$2e$18_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "isSupported"
          ])().then((supported) => {
            if (supported) {
              analytics = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$analytics$40$0$2e$10$2e$18_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "getAnalytics"
              ])(app);
            }
          });
        }
        // Initialize Auth and providers
        const auth = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__[
          "getAuth"
        ])(app);
        const googleProvider =
          new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Y__as__GoogleAuthProvider$3e$__[
            "GoogleAuthProvider"
          ]();
        const githubProvider =
          new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Z__as__GithubAuthProvider$3e$__[
            "GithubAuthProvider"
          ]();
        const microsoftProvider =
          new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__OAuthProvider$3e$__[
            "OAuthProvider"
          ]("microsoft.com");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/packages/config/axios.ts [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          /*#__PURE__*/ __turbopack_context__.i(
            "[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$12$2e$2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/.pnpm/axios@1.12.2/node_modules/axios/lib/axios.js [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/packages/config/firebase.ts [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$3$2e$0$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/.pnpm/firebase@12.3.0/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ =
          __turbopack_context__.i(
            "[project]/node_modules/.pnpm/@firebase+auth@1.11.0_@firebase+app@0.14.3/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export z as onAuthStateChanged>"
          );
        const api =
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$12$2e$2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "default"
          ].create({
            baseURL:
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "default"
              ].env.NEXT_PUBLIC_API_URL,
          });
        // Attach Firebase ID token to every request
        api.interceptors.request.use(async (config) => {
          const firebaseUser = await new Promise((resolve) => {
            if (
              __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "auth"
              ].currentUser
            ) {
              resolve(
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "auth"
                ].currentUser
              );
              return;
            }
            const unsubscribe = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__[
              "onAuthStateChanged"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "auth"
              ],
              (u) => {
                unsubscribe();
                resolve(u);
              }
            );
          });
          const idToken = firebaseUser ? await firebaseUser.getIdToken() : null;
          config.headers.Authorization = "Bearer ".concat(idToken);
          return config;
        });
        const __TURBOPACK__default__export__ = api;
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
        {
          __turbopack_context__.s({
            default: () => FeedbackModal,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/@headlessui+react@2.2.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@headlessui/react/dist/components/listbox/listbox.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/@headlessui+react@2.2.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/packages/config/axios.ts [app-client] (ecmascript)"
            );
          var _s = __turbopack_context__.k.signature();
          ("use client");
          function FeedbackModal(param) {
            let { isOpen, onClose } = param;
            var _options_find;
            _s();
            const [feedbackType, setFeedbackType] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])("bug");
            const [customType, setCustomType] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])("");
            const [content, setContent] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])("");
            const [isSubmitting, setIsSubmitting] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])(false);
            const options = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useMemo"
            ])(
              {
                "FeedbackModal.useMemo[options]": () => [
                  {
                    value: "bug",
                    label: "បញ្ហាប្រើប្រាស់",
                  },
                  {
                    value: "wrong_content",
                    label: "មាតិកាមិនត្រឹមត្រូវ",
                  },
                  {
                    value: "question",
                    label: "សំណួរ",
                  },
                  {
                    value: "feature_request",
                    label: "ស្នើមុខងារថ្មី",
                  },
                  {
                    value: "other",
                    label: "ផ្សេងទៀត",
                  },
                ],
              }["FeedbackModal.useMemo[options]"],
              []
            );
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useEffect"
            ])(
              {
                "FeedbackModal.useEffect": () => {
                  if (!isOpen) return;
                  setFeedbackType("bug");
                  setCustomType("");
                  setContent("");
                  setIsSubmitting(false);
                },
              }["FeedbackModal.useEffect"],
              [isOpen]
            );
            const canSubmit = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useMemo"
            ])(
              {
                "FeedbackModal.useMemo[canSubmit]": () => {
                  const typeValid =
                    feedbackType !== "other"
                      ? Boolean(feedbackType)
                      : customType.trim().length > 0;
                  const contentValid = content.trim().length > 0;
                  return typeValid && contentValid && !isSubmitting;
                },
              }["FeedbackModal.useMemo[canSubmit]"],
              [feedbackType, customType, content, isSubmitting]
            );
            const handleSubmit = async () => {
              if (!canSubmit) return;
              try {
                setIsSubmitting(true);
                const body = {
                  type:
                    feedbackType === "other" ? customType.trim() : feedbackType,
                  content: content,
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "default"
                ].post("/me/feedback", body);
                onClose();
              } catch (error) {
                console.error("Failed to submit feedback:", error);
                alert("Failed to submit feedback. Please try again.");
              } finally {
                setIsSubmitting(false);
              }
            };
            if (!isOpen) return null;
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "fixed inset-0 z-50 flex items-center justify-center p-4",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "absolute inset-0 bg-black/40",
                      onClick: onClose,
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                      lineNumber: 83,
                      columnNumber: 13,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "relative z-10 w-full max-w-lg mx-auto bg-white rounded-2xl shadow-xl border border-gray-200",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "flex items-center justify-between p-6 border-b border-gray-200",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "h3",
                                {
                                  className:
                                    "flex items-center gap-2 text-xl font-bold text-gray-900",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__[
                                        "MessageCircle"
                                      ],
                                      {
                                        className: "w-5 h-5 text-indigo-500",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                        lineNumber: 88,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                    "ផ្ញើមតិយោបល់",
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                  lineNumber: 87,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "button",
                                {
                                  onClick: onClose,
                                  className:
                                    "p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors",
                                  "aria-label": "Close feedback modal",
                                  children: /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__[
                                      "X"
                                    ],
                                    {
                                      className: "w-5 h-5",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                      lineNumber: 96,
                                      columnNumber: 25,
                                    },
                                    this
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                  lineNumber: 91,
                                  columnNumber: 21,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                            lineNumber: 86,
                            columnNumber: 17,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "p-6 space-y-6",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "label",
                                      {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-3",
                                        children: "ប្រភេទ",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                        lineNumber: 102,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "Listbox"
                                      ],
                                      {
                                        value: feedbackType,
                                        onChange: setFeedbackType,
                                        children: /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className: "relative",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "Listbox"
                                                ].Button,
                                                {
                                                  className:
                                                    "relative w-full cursor-pointer rounded-lg bg-white py-3 pl-4 pr-10 text-left shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "span",
                                                      {
                                                        className:
                                                          "block truncate text-gray-900",
                                                        children:
                                                          (_options_find =
                                                            options.find(
                                                              (opt) =>
                                                                opt.value ===
                                                                feedbackType
                                                            )) === null ||
                                                          _options_find ===
                                                            void 0
                                                            ? void 0
                                                            : _options_find.label,
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 37,
                                                      },
                                                      this
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "span",
                                                      {
                                                        className:
                                                          "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
                                                        children:
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__[
                                                              "ChevronDown"
                                                            ],
                                                            {
                                                              className:
                                                                "h-5 w-5 text-gray-400",
                                                              "aria-hidden":
                                                                "true",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                                              lineNumber: 110,
                                                              columnNumber: 41,
                                                            },
                                                            this
                                                          ),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 37,
                                                      },
                                                      this
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                                  lineNumber: 105,
                                                  columnNumber: 33,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "Transition"
                                                ],
                                                {
                                                  as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "Fragment"
                                                  ],
                                                  leave:
                                                    "transition ease-in duration-100",
                                                  leaveFrom: "opacity-100",
                                                  leaveTo: "opacity-0",
                                                  children: /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "Listbox"
                                                    ].Options,
                                                    {
                                                      className:
                                                        "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                                      children: options.map(
                                                        (option) =>
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "Listbox"
                                                            ].Option,
                                                            {
                                                              className: (
                                                                param
                                                              ) => {
                                                                let { active } =
                                                                  param;
                                                                return "relative cursor-pointer select-none py-3 pl-10 pr-4 ".concat(
                                                                  active
                                                                    ? "bg-indigo-100 text-indigo-900"
                                                                    : "text-gray-900"
                                                                );
                                                              },
                                                              value:
                                                                option.value,
                                                              children: (
                                                                param
                                                              ) => {
                                                                let {
                                                                  selected,
                                                                } = param;
                                                                return /*#__PURE__*/ (0,
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                  "jsxDEV"
                                                                ])(
                                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                    "Fragment"
                                                                  ],
                                                                  {
                                                                    children: [
                                                                      /*#__PURE__*/ (0,
                                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                        "jsxDEV"
                                                                      ])(
                                                                        "span",
                                                                        {
                                                                          className:
                                                                            "block truncate ".concat(
                                                                              selected
                                                                                ? "font-medium"
                                                                                : "font-normal"
                                                                            ),
                                                                          children:
                                                                            option.label,
                                                                        },
                                                                        void 0,
                                                                        false,
                                                                        {
                                                                          fileName:
                                                                            "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                                                          lineNumber: 131,
                                                                          columnNumber: 57,
                                                                        },
                                                                        this
                                                                      ),
                                                                      selected
                                                                        ? /*#__PURE__*/ (0,
                                                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                            "jsxDEV"
                                                                          ])(
                                                                            "span",
                                                                            {
                                                                              className:
                                                                                "absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600",
                                                                              children:
                                                                                /*#__PURE__*/ (0,
                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                                  "jsxDEV"
                                                                                ])(
                                                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__[
                                                                                    "Check"
                                                                                  ],
                                                                                  {
                                                                                    className:
                                                                                      "h-5 w-5",
                                                                                    "aria-hidden":
                                                                                      "true",
                                                                                  },
                                                                                  void 0,
                                                                                  false,
                                                                                  {
                                                                                    fileName:
                                                                                      "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                                                                    lineNumber: 136,
                                                                                    columnNumber: 65,
                                                                                  },
                                                                                  this
                                                                                ),
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                                                              lineNumber: 135,
                                                                              columnNumber: 61,
                                                                            },
                                                                            this
                                                                          )
                                                                        : null,
                                                                    ],
                                                                  },
                                                                  void 0,
                                                                  true
                                                                );
                                                              },
                                                            },
                                                            option.value,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                                              lineNumber: 121,
                                                              columnNumber: 45,
                                                            },
                                                            this
                                                          )
                                                      ),
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                                      lineNumber: 119,
                                                      columnNumber: 37,
                                                    },
                                                    this
                                                  ),
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                                  lineNumber: 113,
                                                  columnNumber: 33,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                            lineNumber: 104,
                                            columnNumber: 29,
                                          },
                                          this
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                        lineNumber: 103,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                    feedbackType === "other" &&
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "input",
                                        {
                                          type: "text",
                                          value: customType,
                                          onChange: (e) =>
                                            setCustomType(e.target.value),
                                          placeholder:
                                            "បញ្ចូលប្រភេទផ្ទាល់ខ្លួន",
                                          className:
                                            "mt-3 w-full px-4 py-3 bg-white rounded-lg text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                          lineNumber: 148,
                                          columnNumber: 29,
                                        },
                                        this
                                      ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                  lineNumber: 101,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "label",
                                      {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-3",
                                        children: "មតិយោបល់",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                        lineNumber: 159,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "textarea",
                                      {
                                        value: content,
                                        onChange: (e) =>
                                          setContent(e.target.value),
                                        placeholder:
                                          "ពិពណ៌នាអំពីបញ្ហា/ប្រធានបទ/សំណួរ ឬចែករំលែកមតិយោបល់របស់អ្នក...",
                                        className:
                                          "w-full p-4 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all",
                                        rows: 6,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                        lineNumber: 160,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                  lineNumber: 158,
                                  columnNumber: 21,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                            lineNumber: 100,
                            columnNumber: 17,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "p-6 border-t border-gray-200 flex items-center justify-end gap-3",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "button",
                                {
                                  onClick: onClose,
                                  className:
                                    "px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium",
                                  disabled: isSubmitting,
                                  children: "បោះបង់",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                  lineNumber: 171,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "button",
                                {
                                  onClick: handleSubmit,
                                  disabled: !canSubmit,
                                  className:
                                    "px-6 py-3 rounded-xl text-white flex items-center gap-2 font-medium transition-all ".concat(
                                      canSubmit
                                        ? "bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl"
                                        : "bg-indigo-400 cursor-not-allowed"
                                    ),
                                  children: [
                                    isSubmitting &&
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__[
                                          "Loader2"
                                        ],
                                        {
                                          className: "w-4 h-4 animate-spin",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                          lineNumber: 184,
                                          columnNumber: 42,
                                        },
                                        this
                                      ),
                                    "ផ្ញើ",
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                                  lineNumber: 178,
                                  columnNumber: 21,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                            lineNumber: 170,
                            columnNumber: 17,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                      lineNumber: 85,
                      columnNumber: 13,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName:
                  "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx",
                lineNumber: 82,
                columnNumber: 9,
              },
              this
            );
          }
          _s(FeedbackModal, "92rgbiA/N4D+JLHm6I1/eVv+w8A=");
          _c = FeedbackModal;
          var _c;
          __turbopack_context__.k.register(_c, "FeedbackModal");
          if (
            typeof globalThis.$RefreshHelpers$ === "object" &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    "[project]/apps/web/src/components/common/Header.tsx [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
        {
          __turbopack_context__.s({
            default: () => Header,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/book-marked.js [app-client] (ecmascript) <export default as BookMarked>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as UserIcon>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/@headlessui+react@2.2.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@headlessui/react/dist/components/menu/menu.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/@headlessui+react@2.2.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pages$2f$feedback$2f$FeedbackModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/apps/web/src/components/pages/feedback/FeedbackModal.tsx [app-client] (ecmascript)"
            );
          (() => {
            const e = new Error("Cannot find module '@hooks/useAuth'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })();
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$3$2e$0$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/firebase@12.3.0/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/@firebase+auth@1.11.0_@firebase+app@0.14.3/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export D as signOut>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/packages/config/firebase.ts [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
            );
          var _s = __turbopack_context__.k.signature();
          ("use client");
          const navLinks = [
            {
              label: "មេរៀន",
              href: "/docs",
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__[
                "FileText"
              ],
              style:
                "bg-transparent  hover:text-indigo-600 hover:bg-indigo-50/90 ",
            },
            {
              label: "អនុវត្តន៍",
              href: "/exercises",
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__[
                "Pencil"
              ],
              style:
                "bg-transparent  hover:text-indigo-600 hover:bg-indigo-50/90 ",
            },
            {
              label: "ពិភាក្សា",
              href: "/forums",
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__[
                "MessageSquare"
              ],
              style:
                "bg-transparent  hover:text-indigo-600 hover:bg-indigo-50/90 ",
            },
            {
              label: "អត្ថបទ",
              href: "/blogs",
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__[
                "BookOpen"
              ],
              style:
                "bg-transparent  hover:text-indigo-600 hover:bg-indigo-50/90 ",
            },
            {
              label: "វីដេអូ",
              href: "/videos",
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__[
                "Camera"
              ],
              style:
                "bg-transparent  hover:text-indigo-600 hover:bg-indigo-50/90 ",
            },
            {
              label: "តារា",
              href: "/ai",
              icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__[
                "Bot"
              ],
              style:
                "bg-indigo-600 text-white no-underline   hover:bg-indigo-500",
            },
          ];
          function Header() {
            _s();
            const router = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useRouter"
            ])();
            const pathname = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "usePathname"
            ])();
            const { user, loading } = useAuth();
            const [showFeedbackModal, setShowFeedbackModal] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])(false);
            const handleLogout = async () => {
              try {
                await (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__[
                  "signOut"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "auth"
                  ]
                );
                localStorage.removeItem("user");
                router.push("/auth");
              } catch (error) {
                console.error("Logout error:", error);
              }
            };
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Fragment"
              ],
              {
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "bg-white/95 backdrop-blur-md border-b border-indigo-500/10 fixed top-0 left-0 right-0 z-50 w-full",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "max-w-full px-6 py-2 flex justify-between items-center",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "default"
                              ],
                              {
                                href: "/",
                                className:
                                  "text-decoration-none flex items-center gap-2",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "img",
                                    {
                                      src: "/logo.png",
                                      alt: "logo",
                                      className: "w-5 h-5",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/apps/web/src/components/common/Header.tsx",
                                      lineNumber: 77,
                                      columnNumber: 25,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "flex items-center justify-center gap-0",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "span",
                                          {
                                            className:
                                              "text-2xl font-extrabold tracking-tight text-indigo-500",
                                            children: "KOM",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/apps/web/src/components/common/Header.tsx",
                                            lineNumber: 79,
                                            columnNumber: 29,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "span",
                                          {
                                            className:
                                              "text-2xl font-extrabold tracking-tight text-black",
                                            children: "PLEX",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/apps/web/src/components/common/Header.tsx",
                                            lineNumber: 80,
                                            columnNumber: 29,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/apps/web/src/components/common/Header.tsx",
                                      lineNumber: 78,
                                      columnNumber: 25,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/apps/web/src/components/common/Header.tsx",
                                lineNumber: 76,
                                columnNumber: 21,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "Menu"
                              ],
                              {
                                as: "div",
                                className: "md:hidden relative",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "Menu"
                                    ].Button,
                                    {
                                      className:
                                        "bg-none border-none focus:outline-none text-2xl text-indigo-600 cursor-pointer py-2 rounded-lg transition-colors duration-200",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__[
                                          "Menu"
                                        ],
                                        {
                                          size: 24,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/apps/web/src/components/common/Header.tsx",
                                          lineNumber: 87,
                                          columnNumber: 29,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/apps/web/src/components/common/Header.tsx",
                                      lineNumber: 86,
                                      columnNumber: 25,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "Transition"
                                    ],
                                    {
                                      enter: "transition duration-100 ease-out",
                                      enterFrom: "transform scale-95 opacity-0",
                                      enterTo:
                                        "transform scale-100 opacity-100",
                                      leave: "transition duration-75 ease-out",
                                      leaveFrom:
                                        "transform scale-100 opacity-100",
                                      leaveTo: "transform scale-95 opacity-0",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "Menu"
                                        ].Items,
                                        {
                                          className:
                                            "absolute -right-6 mt-3 w-56 bg-white rounded-bl-2xl shadow-4xl border border-indigo-500/10 backdrop-blur-sm z-50 focus:outline-none p-2",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "div",
                                              {
                                                className: "space-y-1",
                                                children: navLinks.map(
                                                  (link) => {
                                                    const Icon = link.icon;
                                                    // Get the first segment after the domain (e.g., "blogs" from "/blogs" or "me" from "/me/blogs")
                                                    const pathSegment =
                                                      pathname.split("/")[1];
                                                    const linkSegment =
                                                      link.href.split("/")[1];
                                                    const isActive =
                                                      pathSegment ===
                                                      linkSegment;
                                                    return /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "Menu"
                                                      ].Item,
                                                      {
                                                        children: () =>
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "default"
                                                            ],
                                                            {
                                                              href: link.href,
                                                              className:
                                                                "flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-sm text-gray-600 no-underline font-medium backdrop-blur-sm  transition-all duration-300 ".concat(
                                                                  isActive
                                                                    ? "text-indigo-600 bg-indigo-50/90 shadow-sm border border-indigo-500/10"
                                                                    : "hover:text-indigo-600 hover:bg-indigo-50/90"
                                                                ),
                                                              children: [
                                                                /*#__PURE__*/ (0,
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                  "jsxDEV"
                                                                ])(
                                                                  Icon,
                                                                  {
                                                                    size: 18,
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      "[project]/apps/web/src/components/common/Header.tsx",
                                                                    lineNumber: 116,
                                                                    columnNumber: 57,
                                                                  },
                                                                  this
                                                                ),
                                                                link.label,
                                                              ],
                                                            },
                                                            void 0,
                                                            true,
                                                            {
                                                              fileName:
                                                                "[project]/apps/web/src/components/common/Header.tsx",
                                                              lineNumber: 109,
                                                              columnNumber: 53,
                                                            },
                                                            this
                                                          ),
                                                      },
                                                      link.href,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/apps/web/src/components/common/Header.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 45,
                                                      },
                                                      this
                                                    );
                                                  }
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/apps/web/src/components/common/Header.tsx",
                                                lineNumber: 99,
                                                columnNumber: 33,
                                              },
                                              this
                                            ),
                                            !loading &&
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className: "mt-2 p-2",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "div",
                                                      {
                                                        className:
                                                          "h-0.5 bg-gray-200 my-2",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/apps/web/src/components/common/Header.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 41,
                                                      },
                                                      this
                                                    ),
                                                    user
                                                      ? /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "Fragment"
                                                          ],
                                                          {
                                                            children: [
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "flex items-center gap-3 px-2 py-2",
                                                                  children: [
                                                                    (
                                                                      user ===
                                                                        null ||
                                                                      user ===
                                                                        void 0
                                                                        ? void 0
                                                                        : user.profileImage
                                                                    )
                                                                      ? /*#__PURE__*/ (0,
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                          "jsxDEV"
                                                                        ])(
                                                                          "img",
                                                                          {
                                                                            src: user.profileImage,
                                                                            alt: "Profile",
                                                                            className:
                                                                              "w-8 h-8 border border-indigo-500 rounded-full object-cover",
                                                                            onError:
                                                                              (
                                                                                e
                                                                              ) => {
                                                                                e.target.src =
                                                                                  "/image-error.png";
                                                                              },
                                                                          },
                                                                          void 0,
                                                                          false,
                                                                          {
                                                                            fileName:
                                                                              "[project]/apps/web/src/components/common/Header.tsx",
                                                                            lineNumber: 132,
                                                                            columnNumber: 57,
                                                                          },
                                                                          this
                                                                        )
                                                                      : /*#__PURE__*/ (0,
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                          "jsxDEV"
                                                                        ])(
                                                                          "div",
                                                                          {
                                                                            className:
                                                                              "w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm",
                                                                            children:
                                                                              (
                                                                                ""
                                                                                  .concat(
                                                                                    (user ===
                                                                                      null ||
                                                                                    user ===
                                                                                      void 0
                                                                                      ? void 0
                                                                                      : user.firstName) ||
                                                                                      "",
                                                                                    " "
                                                                                  )
                                                                                  .concat(
                                                                                    (user ===
                                                                                      null ||
                                                                                    user ===
                                                                                      void 0
                                                                                      ? void 0
                                                                                      : user.lastName) ||
                                                                                      ""
                                                                                  )
                                                                                  .trim() ||
                                                                                (user ===
                                                                                  null ||
                                                                                user ===
                                                                                  void 0
                                                                                  ? void 0
                                                                                  : user.username) ||
                                                                                (user ===
                                                                                  null ||
                                                                                user ===
                                                                                  void 0
                                                                                  ? void 0
                                                                                  : user.email) ||
                                                                                "U"
                                                                              )
                                                                                .toUpperCase()
                                                                                .charAt(
                                                                                  0
                                                                                ),
                                                                          },
                                                                          void 0,
                                                                          false,
                                                                          {
                                                                            fileName:
                                                                              "[project]/apps/web/src/components/common/Header.tsx",
                                                                            lineNumber: 141,
                                                                            columnNumber: 57,
                                                                          },
                                                                          this
                                                                        ),
                                                                    /*#__PURE__*/ (0,
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                      "jsxDEV"
                                                                    ])(
                                                                      "div",
                                                                      {
                                                                        children:
                                                                          [
                                                                            /*#__PURE__*/ (0,
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                              "jsxDEV"
                                                                            ])(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "text-sm font-semibold text-gray-900",
                                                                                children:
                                                                                  user
                                                                                    ? ""
                                                                                        .concat(
                                                                                          user.firstName ||
                                                                                            "",
                                                                                          " "
                                                                                        )
                                                                                        .concat(
                                                                                          user.lastName ||
                                                                                            ""
                                                                                        )
                                                                                        .trim() ||
                                                                                      user.username ||
                                                                                      "Unknown"
                                                                                    : "Unknown",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  "[project]/apps/web/src/components/common/Header.tsx",
                                                                                lineNumber: 146,
                                                                                columnNumber: 57,
                                                                              },
                                                                              this
                                                                            ),
                                                                            /*#__PURE__*/ (0,
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                              "jsxDEV"
                                                                            ])(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "text-xs text-gray-500",
                                                                                children:
                                                                                  user
                                                                                    ? user.email ||
                                                                                      ""
                                                                                    : "",
                                                                              },
                                                                              void 0,
                                                                              false,
                                                                              {
                                                                                fileName:
                                                                                  "[project]/apps/web/src/components/common/Header.tsx",
                                                                                lineNumber: 149,
                                                                                columnNumber: 57,
                                                                              },
                                                                              this
                                                                            ),
                                                                          ],
                                                                      },
                                                                      void 0,
                                                                      true,
                                                                      {
                                                                        fileName:
                                                                          "[project]/apps/web/src/components/common/Header.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 53,
                                                                      },
                                                                      this
                                                                    ),
                                                                  ],
                                                                },
                                                                void 0,
                                                                true,
                                                                {
                                                                  fileName:
                                                                    "[project]/apps/web/src/components/common/Header.tsx",
                                                                  lineNumber: 130,
                                                                  columnNumber: 49,
                                                                },
                                                                this
                                                              ),
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "space-y-1 mt-2",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                      "jsxDEV"
                                                                    ])(
                                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                        "Menu"
                                                                      ].Item,
                                                                      {
                                                                        children:
                                                                          (
                                                                            param
                                                                          ) => {
                                                                            let {
                                                                              active,
                                                                            } =
                                                                              param;
                                                                            return /*#__PURE__*/ (0,
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                              "jsxDEV"
                                                                            ])(
                                                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                                "default"
                                                                              ],
                                                                              {
                                                                                href: "/me",
                                                                                className:
                                                                                  "flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ".concat(
                                                                                    active
                                                                                      ? "bg-gray-50 text-indigo-600"
                                                                                      : "hover:bg-gray-50 hover:text-indigo-600"
                                                                                  ),
                                                                                children:
                                                                                  [
                                                                                    /*#__PURE__*/ (0,
                                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                                      "jsxDEV"
                                                                                    ])(
                                                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__[
                                                                                        "BookMarked"
                                                                                      ],
                                                                                      {
                                                                                        className:
                                                                                          "w-4 h-4",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          "[project]/apps/web/src/components/common/Header.tsx",
                                                                                        lineNumber: 161,
                                                                                        columnNumber: 65,
                                                                                      },
                                                                                      this
                                                                                    ),
                                                                                    "មាតិការបស់ខ្ញុំ",
                                                                                  ],
                                                                              },
                                                                              void 0,
                                                                              true,
                                                                              {
                                                                                fileName:
                                                                                  "[project]/apps/web/src/components/common/Header.tsx",
                                                                                lineNumber: 157,
                                                                                columnNumber: 61,
                                                                              },
                                                                              this
                                                                            );
                                                                          },
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          "[project]/apps/web/src/components/common/Header.tsx",
                                                                        lineNumber: 155,
                                                                        columnNumber: 53,
                                                                      },
                                                                      this
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                      "jsxDEV"
                                                                    ])(
                                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                        "Menu"
                                                                      ].Item,
                                                                      {
                                                                        children:
                                                                          (
                                                                            param
                                                                          ) => {
                                                                            let {
                                                                              active,
                                                                            } =
                                                                              param;
                                                                            return /*#__PURE__*/ (0,
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                              "jsxDEV"
                                                                            ])(
                                                                              "button",
                                                                              {
                                                                                onClick:
                                                                                  () =>
                                                                                    setShowFeedbackModal(
                                                                                      true
                                                                                    ),
                                                                                className:
                                                                                  "flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ".concat(
                                                                                    active
                                                                                      ? "bg-gray-50 text-indigo-600"
                                                                                      : "hover:bg-gray-50 hover:text-indigo-600"
                                                                                  ),
                                                                                children:
                                                                                  [
                                                                                    /*#__PURE__*/ (0,
                                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                                      "jsxDEV"
                                                                                    ])(
                                                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__[
                                                                                        "MessageCircle"
                                                                                      ],
                                                                                      {
                                                                                        className:
                                                                                          "w-4 h-4",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          "[project]/apps/web/src/components/common/Header.tsx",
                                                                                        lineNumber: 172,
                                                                                        columnNumber: 65,
                                                                                      },
                                                                                      this
                                                                                    ),
                                                                                    "ជួយផ្ដល់មតិ",
                                                                                  ],
                                                                              },
                                                                              void 0,
                                                                              true,
                                                                              {
                                                                                fileName:
                                                                                  "[project]/apps/web/src/components/common/Header.tsx",
                                                                                lineNumber: 168,
                                                                                columnNumber: 61,
                                                                              },
                                                                              this
                                                                            );
                                                                          },
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          "[project]/apps/web/src/components/common/Header.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 53,
                                                                      },
                                                                      this
                                                                    ),
                                                                    /*#__PURE__*/ (0,
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                      "jsxDEV"
                                                                    ])(
                                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                        "Menu"
                                                                      ].Item,
                                                                      {
                                                                        children:
                                                                          (
                                                                            param
                                                                          ) => {
                                                                            let {
                                                                              active,
                                                                            } =
                                                                              param;
                                                                            return /*#__PURE__*/ (0,
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                              "jsxDEV"
                                                                            ])(
                                                                              "button",
                                                                              {
                                                                                onClick:
                                                                                  handleLogout,
                                                                                className:
                                                                                  "flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ".concat(
                                                                                    active
                                                                                      ? "bg-gray-50 text-red-600"
                                                                                      : "hover:bg-gray-50 hover:text-red-600"
                                                                                  ),
                                                                                children:
                                                                                  [
                                                                                    /*#__PURE__*/ (0,
                                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                                      "jsxDEV"
                                                                                    ])(
                                                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__[
                                                                                        "LogOut"
                                                                                      ],
                                                                                      {
                                                                                        className:
                                                                                          "w-4 h-4",
                                                                                      },
                                                                                      void 0,
                                                                                      false,
                                                                                      {
                                                                                        fileName:
                                                                                          "[project]/apps/web/src/components/common/Header.tsx",
                                                                                        lineNumber: 183,
                                                                                        columnNumber: 65,
                                                                                      },
                                                                                      this
                                                                                    ),
                                                                                    "ចាកចេញ",
                                                                                  ],
                                                                              },
                                                                              void 0,
                                                                              true,
                                                                              {
                                                                                fileName:
                                                                                  "[project]/apps/web/src/components/common/Header.tsx",
                                                                                lineNumber: 179,
                                                                                columnNumber: 61,
                                                                              },
                                                                              this
                                                                            );
                                                                          },
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          "[project]/apps/web/src/components/common/Header.tsx",
                                                                        lineNumber: 177,
                                                                        columnNumber: 53,
                                                                      },
                                                                      this
                                                                    ),
                                                                  ],
                                                                },
                                                                void 0,
                                                                true,
                                                                {
                                                                  fileName:
                                                                    "[project]/apps/web/src/components/common/Header.tsx",
                                                                  lineNumber: 154,
                                                                  columnNumber: 49,
                                                                },
                                                                this
                                                              ),
                                                            ],
                                                          },
                                                          void 0,
                                                          true
                                                        )
                                                      : pathname === "/auth"
                                                      ? null
                                                      : /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          "div",
                                                          {
                                                            className:
                                                              "px-2 py-2",
                                                            children:
                                                              /*#__PURE__*/ (0,
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "jsxDEV"
                                                              ])(
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                  "default"
                                                                ],
                                                                {
                                                                  href: "/auth",
                                                                  className:
                                                                    "w-full bg-indigo-600 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-indigo-500 transition-colors duration-300 border border-white/20 flex items-center justify-center gap-2",
                                                                  children: [
                                                                    /*#__PURE__*/ (0,
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                      "jsxDEV"
                                                                    ])(
                                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__[
                                                                        "UserIcon"
                                                                      ],
                                                                      {
                                                                        size: 16,
                                                                      },
                                                                      void 0,
                                                                      false,
                                                                      {
                                                                        fileName:
                                                                          "[project]/apps/web/src/components/common/Header.tsx",
                                                                        lineNumber: 196,
                                                                        columnNumber: 53,
                                                                      },
                                                                      this
                                                                    ),
                                                                    "ចុះឈ្មោះ",
                                                                  ],
                                                                },
                                                                void 0,
                                                                true,
                                                                {
                                                                  fileName:
                                                                    "[project]/apps/web/src/components/common/Header.tsx",
                                                                  lineNumber: 192,
                                                                  columnNumber: 49,
                                                                },
                                                                this
                                                              ),
                                                          },
                                                          void 0,
                                                          false,
                                                          {
                                                            fileName:
                                                              "[project]/apps/web/src/components/common/Header.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 45,
                                                          },
                                                          this
                                                        ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/apps/web/src/components/common/Header.tsx",
                                                  lineNumber: 126,
                                                  columnNumber: 37,
                                                },
                                                this
                                              ),
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/apps/web/src/components/common/Header.tsx",
                                          lineNumber: 98,
                                          columnNumber: 29,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/apps/web/src/components/common/Header.tsx",
                                      lineNumber: 90,
                                      columnNumber: 25,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/apps/web/src/components/common/Header.tsx",
                                lineNumber: 85,
                                columnNumber: 21,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "hidden md:flex gap-2.5 items-center",
                                children: [
                                  navLinks.map((link) => {
                                    const Icon = link.icon;
                                    // Get the first segment after the domain (e.g., "blogs" from "/blogs" or "me" from "/me/blogs")
                                    const pathSegment = pathname.split("/")[1];
                                    const linkSegment = link.href.split("/")[1];
                                    const isActive =
                                      pathSegment === linkSegment;
                                    return /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "default"
                                      ],
                                      {
                                        href: link.href,
                                        className:
                                          "flex items-center gap-2 text-gray-600 no-underline font-semibold  text-sm px-3 py-2.5 rounded-xl transition-all duration-300 relative ".concat(
                                            isActive
                                              ? "text-indigo-600 bg-indigo-50/90 shadow-sm "
                                              : link.style
                                          ),
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            Icon,
                                            {
                                              size: 18,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/apps/web/src/components/common/Header.tsx",
                                              lineNumber: 221,
                                              columnNumber: 37,
                                            },
                                            this
                                          ),
                                          link.label,
                                        ],
                                      },
                                      link.href,
                                      true,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/common/Header.tsx",
                                        lineNumber: 216,
                                        columnNumber: 33,
                                      },
                                      this
                                    );
                                  }),
                                  loading || pathname === "/auth"
                                    ? null
                                    : user
                                    ? /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "Menu"
                                        ],
                                        {
                                          as: "div",
                                          className: "relative ml-2",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "Menu"
                                              ].Button,
                                              {
                                                className:
                                                  "flex items-center gap-2 rounded-xl transition-colors duration-200 cursor-pointer",
                                                children: user.profileImage
                                                  ? /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "img",
                                                      {
                                                        src: user.profileImage,
                                                        alt: "Profile",
                                                        className:
                                                          "w-8 h-8 border border-indigo-500 rounded-full object-cover",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/apps/web/src/components/common/Header.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 41,
                                                      },
                                                      this
                                                    )
                                                  : /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "div",
                                                      {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm",
                                                        children: (
                                                          ""
                                                            .concat(
                                                              user.firstName ||
                                                                "",
                                                              " "
                                                            )
                                                            .concat(
                                                              user.lastName ||
                                                                ""
                                                            )
                                                            .trim() ||
                                                          user.username ||
                                                          user.email ||
                                                          "U"
                                                        ).charAt(0),
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/apps/web/src/components/common/Header.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 41,
                                                      },
                                                      this
                                                    ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/apps/web/src/components/common/Header.tsx",
                                                lineNumber: 230,
                                                columnNumber: 33,
                                              },
                                              this
                                            ),
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "Transition"
                                              ],
                                              {
                                                enter:
                                                  "transition duration-100 ease-out",
                                                enterFrom:
                                                  "transform scale-95 opacity-0",
                                                enterTo:
                                                  "transform scale-100 opacity-100",
                                                leave:
                                                  "transition duration-75 ease-out",
                                                leaveFrom:
                                                  "transform scale-100 opacity-100",
                                                leaveTo:
                                                  "transform scale-95 opacity-0",
                                                children: /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    "Menu"
                                                  ].Items,
                                                  {
                                                    className:
                                                      "absolute  right-0 mt-3 focus:outline-none w-72 bg-white rounded-xl shadow-2xl border border-gray-200 backdrop-blur-sm z-50 p-4",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "flex items-center gap-3",
                                                          children: [
                                                            user.profileImage
                                                              ? /*#__PURE__*/ (0,
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                  "jsxDEV"
                                                                ])(
                                                                  "img",
                                                                  {
                                                                    src: user.profileImage,
                                                                    alt: "Profile",
                                                                    className:
                                                                      "w-12 h-12 border border-indigo-500 rounded-full object-cover",
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      "[project]/apps/web/src/components/common/Header.tsx",
                                                                    lineNumber: 252,
                                                                    columnNumber: 49,
                                                                  },
                                                                  this
                                                                )
                                                              : /*#__PURE__*/ (0,
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                  "jsxDEV"
                                                                ])(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-lg",
                                                                    children: (
                                                                      ""
                                                                        .concat(
                                                                          user.firstName ||
                                                                            "",
                                                                          " "
                                                                        )
                                                                        .concat(
                                                                          user.lastName ||
                                                                            ""
                                                                        )
                                                                        .trim() ||
                                                                      user.username ||
                                                                      user.email ||
                                                                      "U"
                                                                    ).charAt(0),
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      "[project]/apps/web/src/components/common/Header.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 49,
                                                                  },
                                                                  this
                                                                ),
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              "div",
                                                              {
                                                                children: [
                                                                  /*#__PURE__*/ (0,
                                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                    "jsxDEV"
                                                                  ])(
                                                                    "h3",
                                                                    {
                                                                      className:
                                                                        "font-semibold text-gray-900 text-sm",
                                                                      children:
                                                                        ""
                                                                          .concat(
                                                                            user.firstName ||
                                                                              "",
                                                                            " "
                                                                          )
                                                                          .concat(
                                                                            user.lastName ||
                                                                              ""
                                                                          )
                                                                          .trim() ||
                                                                        user.username ||
                                                                        "User",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        "[project]/apps/web/src/components/common/Header.tsx",
                                                                      lineNumber: 259,
                                                                      columnNumber: 49,
                                                                    },
                                                                    this
                                                                  ),
                                                                  /*#__PURE__*/ (0,
                                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                    "jsxDEV"
                                                                  ])(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "text-gray-500 text-xs",
                                                                      children:
                                                                        user.email ||
                                                                        "",
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        "[project]/apps/web/src/components/common/Header.tsx",
                                                                      lineNumber: 262,
                                                                      columnNumber: 49,
                                                                    },
                                                                    this
                                                                  ),
                                                                ],
                                                              },
                                                              void 0,
                                                              true,
                                                              {
                                                                fileName:
                                                                  "[project]/apps/web/src/components/common/Header.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 45,
                                                              },
                                                              this
                                                            ),
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            "[project]/apps/web/src/components/common/Header.tsx",
                                                          lineNumber: 250,
                                                          columnNumber: 41,
                                                        },
                                                        this
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "h-0.5 bg-gray-200 my-2",
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/apps/web/src/components/common/Header.tsx",
                                                          lineNumber: 268,
                                                          columnNumber: 41,
                                                        },
                                                        this
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "space-y-1",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "Menu"
                                                              ].Item,
                                                              {
                                                                children: (
                                                                  param
                                                                ) => {
                                                                  let {
                                                                    active,
                                                                  } = param;
                                                                  return /*#__PURE__*/ (0,
                                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                    "jsxDEV"
                                                                  ])(
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                      "default"
                                                                    ],
                                                                    {
                                                                      href: "/me",
                                                                      className:
                                                                        "flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ".concat(
                                                                          active
                                                                            ? "bg-gray-50 text-indigo-600"
                                                                            : "hover:bg-gray-50 hover:text-indigo-600"
                                                                        ),
                                                                      children:
                                                                        [
                                                                          /*#__PURE__*/ (0,
                                                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                            "jsxDEV"
                                                                          ])(
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__[
                                                                              "BookMarked"
                                                                            ],
                                                                            {
                                                                              className:
                                                                                "w-4 h-4",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                "[project]/apps/web/src/components/common/Header.tsx",
                                                                              lineNumber: 278,
                                                                              columnNumber: 57,
                                                                            },
                                                                            this
                                                                          ),
                                                                          "មាតិការបស់ខ្ញុំ",
                                                                        ],
                                                                    },
                                                                    void 0,
                                                                    true,
                                                                    {
                                                                      fileName:
                                                                        "[project]/apps/web/src/components/common/Header.tsx",
                                                                      lineNumber: 274,
                                                                      columnNumber: 53,
                                                                    },
                                                                    this
                                                                  );
                                                                },
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/apps/web/src/components/common/Header.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 45,
                                                              },
                                                              this
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "Menu"
                                                              ].Item,
                                                              {
                                                                children: (
                                                                  param
                                                                ) => {
                                                                  let {
                                                                    active,
                                                                  } = param;
                                                                  return /*#__PURE__*/ (0,
                                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                    "jsxDEV"
                                                                  ])(
                                                                    "button",
                                                                    {
                                                                      onClick:
                                                                        () =>
                                                                          setShowFeedbackModal(
                                                                            true
                                                                          ),
                                                                      className:
                                                                        "flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ".concat(
                                                                          active
                                                                            ? "bg-gray-50 text-indigo-600"
                                                                            : "hover:bg-gray-50 hover:text-indigo-600"
                                                                        ),
                                                                      children:
                                                                        [
                                                                          /*#__PURE__*/ (0,
                                                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                            "jsxDEV"
                                                                          ])(
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__[
                                                                              "MessageCircle"
                                                                            ],
                                                                            {
                                                                              className:
                                                                                "w-4 h-4",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                "[project]/apps/web/src/components/common/Header.tsx",
                                                                              lineNumber: 289,
                                                                              columnNumber: 57,
                                                                            },
                                                                            this
                                                                          ),
                                                                          "ជួយផ្ដល់មតិ",
                                                                        ],
                                                                    },
                                                                    void 0,
                                                                    true,
                                                                    {
                                                                      fileName:
                                                                        "[project]/apps/web/src/components/common/Header.tsx",
                                                                      lineNumber: 285,
                                                                      columnNumber: 53,
                                                                    },
                                                                    this
                                                                  );
                                                                },
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/apps/web/src/components/common/Header.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 45,
                                                              },
                                                              this
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                "Menu"
                                                              ].Item,
                                                              {
                                                                children: (
                                                                  param
                                                                ) => {
                                                                  let {
                                                                    active,
                                                                  } = param;
                                                                  return /*#__PURE__*/ (0,
                                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                    "jsxDEV"
                                                                  ])(
                                                                    "button",
                                                                    {
                                                                      onClick:
                                                                        handleLogout,
                                                                      className:
                                                                        "flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 no-underline font-medium transition-colors duration-200 ".concat(
                                                                          active
                                                                            ? "bg-gray-50 text-red-600"
                                                                            : "hover:bg-gray-50 hover:text-red-600"
                                                                        ),
                                                                      children:
                                                                        [
                                                                          /*#__PURE__*/ (0,
                                                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                                            "jsxDEV"
                                                                          ])(
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__[
                                                                              "LogOut"
                                                                            ],
                                                                            {
                                                                              className:
                                                                                "w-4 h-4",
                                                                            },
                                                                            void 0,
                                                                            false,
                                                                            {
                                                                              fileName:
                                                                                "[project]/apps/web/src/components/common/Header.tsx",
                                                                              lineNumber: 301,
                                                                              columnNumber: 57,
                                                                            },
                                                                            this
                                                                          ),
                                                                          "ចាកចេញ",
                                                                        ],
                                                                    },
                                                                    void 0,
                                                                    true,
                                                                    {
                                                                      fileName:
                                                                        "[project]/apps/web/src/components/common/Header.tsx",
                                                                      lineNumber: 297,
                                                                      columnNumber: 53,
                                                                    },
                                                                    this
                                                                  );
                                                                },
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/apps/web/src/components/common/Header.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 45,
                                                              },
                                                              this
                                                            ),
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            "[project]/apps/web/src/components/common/Header.tsx",
                                                          lineNumber: 271,
                                                          columnNumber: 41,
                                                        },
                                                        this
                                                      ),
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName:
                                                      "[project]/apps/web/src/components/common/Header.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 37,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/apps/web/src/components/common/Header.tsx",
                                                lineNumber: 240,
                                                columnNumber: 33,
                                              },
                                              this
                                            ),
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/apps/web/src/components/common/Header.tsx",
                                          lineNumber: 229,
                                          columnNumber: 29,
                                        },
                                        this
                                      )
                                    : /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "div",
                                        {
                                          className: "ml-1",
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "default"
                                            ],
                                            {
                                              href: "/auth",
                                              className:
                                                "bg-indigo-600 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-indigo-500 transition-colors duration-300 shadow-lg shadow-indigo-500/30 border border-white/20 flex items-center justify-between gap-2",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__[
                                                    "UserIcon"
                                                  ],
                                                  {
                                                    size: 16,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/apps/web/src/components/common/Header.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 37,
                                                  },
                                                  this
                                                ),
                                                "ចុះឈ្មោះ",
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                "[project]/apps/web/src/components/common/Header.tsx",
                                              lineNumber: 312,
                                              columnNumber: 33,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/apps/web/src/components/common/Header.tsx",
                                          lineNumber: 311,
                                          columnNumber: 29,
                                        },
                                        this
                                      ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/apps/web/src/components/common/Header.tsx",
                                lineNumber: 208,
                                columnNumber: 21,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/apps/web/src/components/common/Header.tsx",
                          lineNumber: 74,
                          columnNumber: 17,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/apps/web/src/components/common/Header.tsx",
                      lineNumber: 73,
                      columnNumber: 13,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pages$2f$feedback$2f$FeedbackModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "default"
                    ],
                    {
                      isOpen: showFeedbackModal,
                      onClose: () => setShowFeedbackModal(false),
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/apps/web/src/components/common/Header.tsx",
                      lineNumber: 324,
                      columnNumber: 13,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true
            );
          }
          _s(Header, "pgofDLE0oQLvkBAZeotNyQNq5jE=", false, function () {
            return [
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "useRouter"
              ],
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "usePathname"
              ],
              useAuth,
            ];
          });
          _c = Header;
          var _c;
          __turbopack_context__.k.register(_c, "Header");
          if (
            typeof globalThis.$RefreshHelpers$ === "object" &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    "[project]/packages/services/auth.ts [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          getCurrentUser: () => getCurrentUser,
          signup: () => signup,
          socialLogin: () => socialLogin,
          updateProfile: () => updateProfile,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/packages/config/axios.ts [app-client] (ecmascript)"
          );
        const signup = async (signupData) => {
          try {
            const response =
              await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "default"
              ].post("/auth/signup", signupData);
            return response.data;
          } catch (error) {
            console.error("Error during signup:", error);
            throw new Error("Failed to create account");
          }
        };
        const socialLogin = async (socialData) => {
          try {
            const response =
              await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "default"
              ].post("/auth/social-login", socialData);
            return response.data;
          } catch (error) {
            console.error("Error during social login:", error);
            throw new Error("Failed to login with social provider");
          }
        };
        const updateProfile = async (userId, profileData) => {
          try {
            const response =
              await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "default"
              ].put("/profile/".concat(userId), profileData);
            return response.data;
          } catch (error) {
            console.error("Error updating profile:", error);
            throw new Error("Failed to update profile");
          }
        };
        const getCurrentUser = async () => {
          try {
            const response =
              await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "default"
              ].get("/me");
            return response.data;
          } catch (error) {
            console.error("Error fetching current user:", error);
            throw new Error("Failed to fetch user profile");
          }
        }; // ! FOR FUTURE
        // // Change password
        // export const changePassword = async (
        //   userId: number,
        //   currentPassword: string,
        //   newPassword: string
        // ): Promise<void> => {
        //   try {
        //     await api.put(`/change-password/${userId}`, {
        //       currentPassword,
        //       newPassword,
        //     });
        //   } catch (error) {
        //     console.error("Error changing password:", error);
        //     throw new Error("Failed to change password");
        //   }
        // };
        // // Delete user account
        // export const deleteAccount = async (userId: number): Promise<void> => {
        //   try {
        //     await api.delete(`/account/${userId}`);
        //   } catch (error) {
        //     console.error("Error deleting account:", error);
        //     throw new Error("Failed to delete account");
        //   }
        // };
        // // FORGOT PASSWORD
        // // Send password reset email
        // export const sendPasswordResetEmail = async (email: string): Promise<void> => {
        //   try {
        //     await api.post(`/forgot-password`, { email });
        //   } catch (error) {
        //     console.error("Error sending password reset email:", error);
        //     throw new Error("Failed to send password reset email");
        //   }
        // };
        // // Reset password with token
        // export const resetPassword = async (
        //   token: string,
        //   newPassword: string
        // ): Promise<void> => {
        //   try {
        //     await api.post(`/reset-password`, {
        //       token,
        //       newPassword,
        //     });
        //   } catch (error) {
        //     console.error("Error resetting password:", error);
        //     throw new Error("Failed to reset password");
        //   }
        // };
        // // VERIFICATION
        // // Send email verification
        // export const sendEmailVerification = async (userId: number): Promise<void> => {
        //   try {
        //     await api.post(`/send-verification/${userId}`);
        //   } catch (error) {
        //     console.error("Error sending email verification:", error);
        //     throw new Error("Failed to send verification email");
        //   }
        // };
        // // Verify email with token
        // export const verifyEmail = async (token: string): Promise<void> => {
        //   try {
        //     await api.post(`/verify-email`, { token });
        //   } catch (error) {
        //     console.error("Error verifying email:", error);
        //     throw new Error("Failed to verify email");
        //   }
        // };
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/packages/services/upload.ts [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          getUploadUrl: () => getUploadUrl,
          uploadFile: () => uploadFile,
          uploadFileToR2: () => uploadFileToR2,
          uploadFileWithProgress: () => uploadFileWithProgress,
          uploadMultipleFiles: () => uploadMultipleFiles,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/packages/config/axios.ts [app-client] (ecmascript)"
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$12$2e$2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/.pnpm/axios@1.12.2/node_modules/axios/lib/axios.js [app-client] (ecmascript)"
          );
        const getUploadUrl = async (fileName, fileType) => {
          try {
            const response =
              await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "default"
              ].post(
                "/upload/upload-url",
                {
                  fileName,
                  fileType,
                },
                {
                  withCredentials: true,
                }
              );
            return response.data;
          } catch (error) {
            console.error("Error getting upload URL:", error);
            throw new Error("Failed to get upload URL");
          }
        };
        const uploadFileToR2 = async (signedUrl, file) => {
          try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$12$2e$2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "default"
            ].put(signedUrl, file, {
              headers: {
                "Content-Type": file.type,
              },
            });
          } catch (error) {
            console.error("Error uploading file to R2:", error);
            throw new Error("Failed to upload file");
          }
        };
        const uploadFile = async (file) => {
          try {
            const { signedUrl, key } = await getUploadUrl(file.name, file.type);
            await uploadFileToR2(signedUrl, file);
            return key;
          } catch (error) {
            console.error("Error uploading file:", error);
            throw new Error("Failed to upload file");
          }
        };
        const uploadMultipleFiles = async (files) => {
          try {
            const uploadPromises = files.map((file) => uploadFile(file));
            return await Promise.all(uploadPromises);
          } catch (error) {
            console.error("Error uploading multiple files:", error);
            throw new Error("Failed to upload files");
          }
        };
        const uploadFileWithProgress = async (file, onProgress) => {
          try {
            const { signedUrl, key } = await getUploadUrl(file.name, file.type);
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "default"
            ].put(signedUrl, file, {
              headers: {
                "Content-Type": file.type,
              },
              onUploadProgress: (progressEvent) => {
                if (onProgress && progressEvent.total) {
                  const progress = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                  );
                  onProgress(progress);
                }
              },
            });
            return key;
          } catch (error) {
            console.error("Error uploading file with progress:", error);
            throw new Error("Failed to upload file");
          }
        };
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/packages/utils/validator.ts [app-client] (ecmascript)": (
      __turbopack_context__
    ) => {
      "use strict";

      var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        // VALIDATION UTILITIES ========================================================
        // Email validation
        __turbopack_context__.s({
          getValidationError: () => getValidationError,
          isStrongPassword: () => isStrongPassword,
          isValidAge: () => isValidAge,
          isValidDate: () => isValidDate,
          isValidEmail: () => isValidEmail,
          isValidImageFile: () => isValidImageFile,
          isValidPassword: () => isValidPassword,
          isValidPhone: () => isValidPhone,
          isValidUrl: () => isValidUrl,
          isValidUsername: () => isValidUsername,
          isValidVideoFile: () => isValidVideoFile,
          validateLoginForm: () => validateLoginForm,
          validatePasswordConfirmation: () => validatePasswordConfirmation,
          validateSignupForm: () => validateSignupForm,
        });
        const isValidEmail = (email) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        };
        const isValidUsername = (username) => {
          return (
            username.length >= 3 &&
            username.length <= 20 &&
            /^[a-zA-Z0-9_]+$/.test(username)
          );
        };
        const isValidPassword = (password) => {
          return password.length >= 6;
        };
        const isValidPhone = (phone) => {
          return /^[0-9+\-\s()]+$/.test(phone);
        };
        const isStrongPassword = (password) => {
          // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
          const strongPasswordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          return strongPasswordRegex.test(password);
        };
        const isValidUrl = (url) => {
          try {
            new URL(url);
            return true;
          } catch (e) {
            return false;
          }
        };
        const isValidDate = (date) => {
          const dateObj = new Date(date);
          return dateObj instanceof Date && !isNaN(dateObj.getTime());
        };
        const isValidAge = (dateOfBirth) => {
          const birthDate = new Date(dateOfBirth);
          const today = new Date();
          const age = today.getFullYear() - birthDate.getFullYear();
          const monthDiff = today.getMonth() - birthDate.getMonth();
          if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDate.getDate())
          ) {
            return age - 1 >= 3;
          }
          return age >= 3;
        };
        const isValidImageFile = (file) => {
          const allowedTypes = [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/gif",
            "image/webp",
          ];
          const maxSize = 5 * 1024 * 1024; // 5MB
          return allowedTypes.includes(file.type) && file.size <= maxSize;
        };
        const isValidVideoFile = (file) => {
          const allowedTypes = [
            "video/mp4",
            "video/webm",
            "video/ogg",
            "video/avi",
            "video/mov",
          ];
          const maxSize = 100 * 1024 * 1024; // 100MB
          return allowedTypes.includes(file.type) && file.size <= maxSize;
        };
        const validateLoginForm = (identifier, password) => {
          return identifier.trim().length > 0 && password.trim().length > 0;
        };
        const validateSignupForm = (formData) => {
          return (
            formData.username.trim().length > 0 &&
            formData.firstName.trim().length > 0 &&
            formData.lastName.trim().length > 0 &&
            formData.email.trim().length > 0 &&
            formData.password.trim().length > 0 &&
            formData.confirmPassword.trim().length > 0 &&
            formData.dateOfBirth.length > 0 &&
            formData.phone.trim().length > 0 &&
            isValidUsername(formData.username) &&
            isValidEmail(formData.email) &&
            isValidPassword(formData.password) &&
            formData.password === formData.confirmPassword &&
            isValidPhone(formData.phone) &&
            isValidDate(formData.dateOfBirth) &&
            isValidAge(formData.dateOfBirth)
          );
        };
        const getValidationError = (field, value) => {
          switch (field) {
            case "email":
              return !isValidEmail(value) ? "សូមបញ្ចូលអ៊ីមែលត្រឹមត្រូវ" : "";
            case "username":
              return !isValidUsername(value)
                ? "ឈ្មោះអ្នកប្រើប្រាស់ត្រូវតែមាន 3-20 តួអក្សរ និងមិនមានអក្សរពិសេស"
                : "";
            case "password":
              return !isValidPassword(value)
                ? "ពាក្យសម្ងាត់ត្រូវតែមានយ៉ាងតិច 6 តួអក្សរ"
                : "";
            case "phone":
              return !isValidPhone(value)
                ? "សូមបញ្ចូលលេខទូរស័ព្ទត្រឹមត្រូវ"
                : "";
            case "dateOfBirth":
              if (!isValidDate(value)) return "សូមបញ្ចូលថ្ងៃខែឆ្នាំត្រឹមត្រូវ";
              if (!isValidAge(value))
                return "អ្នកត្រូវតែមានអាយុយ៉ាងតិច 3 ឆ្នាំ";
              return "";
            default:
              return "";
          }
        };
        const validatePasswordConfirmation = (password, confirmPassword) => {
          return password !== confirmPassword ? "ពាក្យសម្ងាត់មិនត្រូវគ្នា" : "";
        };
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    "[project]/apps/web/src/components/pages/auth/LogIn.tsx [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
        {
          __turbopack_context__.s({
            default: () => LogIn,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>"
            );
          ("use client");
          function LogIn(param) {
            let {
              loginIdentifier,
              setLoginIdentifier,
              loginPassword,
              setLoginPassword,
              showPassword,
              setShowPassword,
              isLoginValid,
              handleLogin,
              isSubmitting = false,
              errorMessage = null,
            } = param;
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "form",
              {
                onSubmit: handleLogin,
                className: "space-y-4 mx-auto",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "label",
                          {
                            className:
                              "block text-sm font-medium text-black mb-2",
                            children: "អ៊ីមែល ឬ ឈ្មោះអ្នកប្រើប្រាស់",
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                            lineNumber: 35,
                            columnNumber: 17,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "relative",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__[
                                  "Mail"
                                ],
                                {
                                  size: 18,
                                  className:
                                    "absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                                  lineNumber: 39,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "input",
                                {
                                  type: "text",
                                  value: loginIdentifier,
                                  onChange: (e) =>
                                    setLoginIdentifier(e.target.value),
                                  className:
                                    "w-full pl-10 pr-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300",
                                  placeholder:
                                    "បញ្ចូលអ៊ីមែល ឬ ឈ្មោះអ្នកប្រើប្រាស់",
                                  disabled: isSubmitting,
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                                  lineNumber: 40,
                                  columnNumber: 21,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                            lineNumber: 38,
                            columnNumber: 17,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                      lineNumber: 34,
                      columnNumber: 13,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "label",
                          {
                            className:
                              "block text-sm font-medium text-black mb-2",
                            children: "ពាក្យសម្ងាត់",
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                            lineNumber: 52,
                            columnNumber: 17,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "relative",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__[
                                  "Lock"
                                ],
                                {
                                  size: 18,
                                  className:
                                    "absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                                  lineNumber: 56,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "input",
                                {
                                  type: showPassword ? "text" : "password",
                                  value: loginPassword,
                                  onChange: (e) =>
                                    setLoginPassword(e.target.value),
                                  className:
                                    "w-full pl-10 pr-12 py-3 border border-indigo-500/20 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300",
                                  placeholder: "បញ្ចូលពាក្យសម្ងាត់",
                                  disabled: isSubmitting,
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                                  lineNumber: 57,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => setShowPassword(!showPassword),
                                  className:
                                    "absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-600 hover:text-gray-600 transition-colors",
                                  disabled: isSubmitting,
                                  children: showPassword
                                    ? /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__[
                                          "EyeOff"
                                        ],
                                        {
                                          size: 18,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                                          lineNumber: 71,
                                          columnNumber: 41,
                                        },
                                        this
                                      )
                                    : /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__[
                                          "Eye"
                                        ],
                                        {
                                          size: 18,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                                          lineNumber: 71,
                                          columnNumber: 64,
                                        },
                                        this
                                      ),
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                                  lineNumber: 65,
                                  columnNumber: 21,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                            lineNumber: 55,
                            columnNumber: 17,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                      lineNumber: 51,
                      columnNumber: 13,
                    },
                    this
                  ),
                  errorMessage &&
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className:
                          "w-full rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm p-3",
                        children: errorMessage,
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                        lineNumber: 77,
                        columnNumber: 17,
                      },
                      this
                    ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "button",
                    {
                      type: "submit",
                      disabled: !isLoginValid() || isSubmitting,
                      className:
                        "w-full bg-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-indigo-500 transition-colors duration-300 shadow-lg shadow-indigo-500/30 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed",
                      children: isSubmitting ? "កំពុងចូល..." : "ចូលទៅកាន់",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                      lineNumber: 95,
                      columnNumber: 13,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName:
                  "[project]/apps/web/src/components/pages/auth/LogIn.tsx",
                lineNumber: 32,
                columnNumber: 9,
              },
              this
            );
          }
          _c = LogIn;
          var _c;
          __turbopack_context__.k.register(_c, "LogIn");
          if (
            typeof globalThis.$RefreshHelpers$ === "object" &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    "[project]/apps/web/src/components/pages/auth/SignUp.tsx [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
        {
          __turbopack_context__.s({
            default: () => SignUp,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/lucide-react@0.536.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/packages/utils/validator.ts [app-client] (ecmascript)"
            );
          ("use client");
          function SignUp(param) {
            let {
              signupData,
              setSignupData,
              showPassword,
              setShowPassword,
              showConfirmPassword,
              setShowConfirmPassword,
              isSignupValid,
              handleSignup,
              handleProfileImageChange,
              isSubmitting = false,
              errorMessage = null,
            } = param;
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "form",
              {
                onSubmit: handleSignup,
                className: "space-y-6 mx-auto",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "flex flex-col lg:flex-row gap-6 items-start",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "flex-shrink-0",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "label",
                                {
                                  className:
                                    "block text-sm font-medium text-black mb-2",
                                  children: "រូបផ្ទាល់ខ្លួន",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                  lineNumber: 60,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: "relative",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className:
                                          "w-32 h-32 rounded-full border-2 border-indigo-300 bg-gray-100 flex items-center justify-center overflow-hidden",
                                        children: signupData.profileImage
                                          ? /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "img",
                                              {
                                                src: URL.createObjectURL(
                                                  signupData.profileImage
                                                ),
                                                alt: "Profile preview",
                                                className:
                                                  "w-full h-full object-cover",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                                lineNumber: 66,
                                                columnNumber: 33,
                                              },
                                              this
                                            )
                                          : /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__[
                                                "Upload"
                                              ],
                                              {
                                                size: 32,
                                                className: "text-indigo-400",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                                lineNumber: 72,
                                                columnNumber: 33,
                                              },
                                              this
                                            ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 64,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "input",
                                      {
                                        type: "file",
                                        accept: "image/*",
                                        onChange: handleProfileImageChange,
                                        className:
                                          "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
                                        disabled: isSubmitting,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 75,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                  lineNumber: 63,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              signupData.profileImage &&
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "p",
                                  {
                                    className:
                                      "text-green-600 text-xs mt-1 text-center",
                                    children: "រូបផ្ទាល់ខ្លួនត្រូវបានជ្រើសរើស",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                    lineNumber: 84,
                                    columnNumber: 25,
                                  },
                                  this
                                ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                            lineNumber: 59,
                            columnNumber: 17,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "flex-1 space-y-4 w-full",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "label",
                                      {
                                        className:
                                          "block text-sm font-medium text-black mb-2",
                                        children: "ឈ្មោះអ្នកប្រើប្រាស់",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 91,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "input",
                                      {
                                        type: "text",
                                        value: signupData.username,
                                        onChange: (e) =>
                                          setSignupData((prev) => ({
                                            ...prev,
                                            username: e.target.value,
                                          })),
                                        className:
                                          "w-full px-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300",
                                        placeholder:
                                          "បញ្ចូលឈ្មោះអ្នកប្រើប្រាស់",
                                        disabled: isSubmitting,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 94,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                    signupData.username &&
                                      (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "getValidationError"
                                      ])("username", signupData.username) &&
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "p",
                                        {
                                          className:
                                            "text-red-500 text-xs mt-1",
                                          children: (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "getValidationError"
                                          ])("username", signupData.username),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                          lineNumber: 103,
                                          columnNumber: 29,
                                        },
                                        this
                                      ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                  lineNumber: 90,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: "grid grid-cols-2 gap-3",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "label",
                                            {
                                              className:
                                                "block text-sm font-medium text-black mb-2",
                                              children: "ឈ្មោះ",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                              lineNumber: 109,
                                              columnNumber: 29,
                                            },
                                            this
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "input",
                                            {
                                              type: "text",
                                              value: signupData.firstName,
                                              onChange: (e) =>
                                                setSignupData((prev) => ({
                                                  ...prev,
                                                  firstName: e.target.value,
                                                })),
                                              className:
                                                "w-full px-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300",
                                              placeholder: "ឈ្មោះ",
                                              disabled: isSubmitting,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                              lineNumber: 112,
                                              columnNumber: 29,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 108,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "label",
                                            {
                                              className:
                                                "block text-sm font-medium text-black mb-2",
                                              children: "នាមត្រកូល",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                              lineNumber: 122,
                                              columnNumber: 29,
                                            },
                                            this
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "input",
                                            {
                                              type: "text",
                                              value: signupData.lastName,
                                              onChange: (e) =>
                                                setSignupData((prev) => ({
                                                  ...prev,
                                                  lastName: e.target.value,
                                                })),
                                              className:
                                                "w-full px-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300",
                                              placeholder: "នាមត្រកូល",
                                              disabled: isSubmitting,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                              lineNumber: 125,
                                              columnNumber: 29,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 121,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                  lineNumber: 107,
                                  columnNumber: 21,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                            lineNumber: 89,
                            columnNumber: 17,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                      lineNumber: 57,
                      columnNumber: 13,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "label",
                          {
                            className:
                              "block text-sm font-medium text-black mb-2",
                            children: "អ៊ីមែល",
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                            lineNumber: 140,
                            columnNumber: 17,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "relative",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__[
                                  "Mail"
                                ],
                                {
                                  size: 18,
                                  className:
                                    "absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                  lineNumber: 144,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "input",
                                {
                                  type: "email",
                                  value: signupData.email,
                                  onChange: (e) =>
                                    setSignupData((prev) => ({
                                      ...prev,
                                      email: e.target.value,
                                    })),
                                  className:
                                    "w-full pl-10 pr-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300",
                                  placeholder: "បញ្ចូលអ៊ីមែលរបស់អ្នក",
                                  disabled: isSubmitting,
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                  lineNumber: 145,
                                  columnNumber: 21,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                            lineNumber: 143,
                            columnNumber: 17,
                          },
                          this
                        ),
                        signupData.email &&
                          (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "getValidationError"
                          ])("email", signupData.email) &&
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "p",
                            {
                              className: "text-red-500 text-xs mt-1",
                              children: (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "getValidationError"
                              ])("email", signupData.email),
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                              lineNumber: 155,
                              columnNumber: 21,
                            },
                            this
                          ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                      lineNumber: 139,
                      columnNumber: 13,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "grid grid-cols-2 gap-3",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "label",
                                {
                                  className:
                                    "block text-sm font-medium text-black mb-2",
                                  children: "ពាក្យសម្ងាត់",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                  lineNumber: 162,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: "relative",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__[
                                        "Lock"
                                      ],
                                      {
                                        size: 18,
                                        className:
                                          "absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 166,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "input",
                                      {
                                        type: showPassword
                                          ? "text"
                                          : "password",
                                        value: signupData.password,
                                        onChange: (e) =>
                                          setSignupData((prev) => ({
                                            ...prev,
                                            password: e.target.value,
                                          })),
                                        className:
                                          "w-full pl-10 pr-12 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300",
                                        placeholder: "បង្កើតពាក្យសម្ងាត់",
                                        disabled: isSubmitting,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 167,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () =>
                                          setShowPassword(!showPassword),
                                        className:
                                          "absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-600 hover:text-gray-600 transition-colors",
                                        disabled: isSubmitting,
                                        children: showPassword
                                          ? /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__[
                                                "EyeOff"
                                              ],
                                              {
                                                size: 18,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                                lineNumber: 181,
                                                columnNumber: 45,
                                              },
                                              this
                                            )
                                          : /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__[
                                                "Eye"
                                              ],
                                              {
                                                size: 18,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                                lineNumber: 181,
                                                columnNumber: 68,
                                              },
                                              this
                                            ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 175,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                  lineNumber: 165,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              signupData.password &&
                                (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "getValidationError"
                                ])("password", signupData.password) &&
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "p",
                                  {
                                    className: "text-red-500 text-xs mt-1",
                                    children: (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "getValidationError"
                                    ])("password", signupData.password),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                    lineNumber: 185,
                                    columnNumber: 25,
                                  },
                                  this
                                ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                            lineNumber: 161,
                            columnNumber: 17,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "label",
                                {
                                  className:
                                    "block text-sm font-medium text-black mb-2",
                                  children: "បញ្ជាក់ពាក្យសម្ងាត់",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                  lineNumber: 189,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: "relative",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__[
                                        "Lock"
                                      ],
                                      {
                                        size: 18,
                                        className:
                                          "absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 193,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "input",
                                      {
                                        type: showConfirmPassword
                                          ? "text"
                                          : "password",
                                        value: signupData.confirmPassword,
                                        onChange: (e) =>
                                          setSignupData((prev) => ({
                                            ...prev,
                                            confirmPassword: e.target.value,
                                          })),
                                        className:
                                          "w-full pl-10 pr-12 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300",
                                        placeholder:
                                          "បញ្ជាក់ពាក្យសម្ងាត់ម្តងទៀត",
                                        disabled: isSubmitting,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 194,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () =>
                                          setShowConfirmPassword(
                                            !showConfirmPassword
                                          ),
                                        className:
                                          "absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-600 hover:text-gray-600 transition-colors",
                                        disabled: isSubmitting,
                                        children: showConfirmPassword
                                          ? /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__[
                                                "EyeOff"
                                              ],
                                              {
                                                size: 18,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                                lineNumber: 208,
                                                columnNumber: 52,
                                              },
                                              this
                                            )
                                          : /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__[
                                                "Eye"
                                              ],
                                              {
                                                size: 18,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                                lineNumber: 208,
                                                columnNumber: 75,
                                              },
                                              this
                                            ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 202,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                  lineNumber: 192,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              signupData.confirmPassword &&
                                (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "validatePasswordConfirmation"
                                ])(
                                  signupData.password,
                                  signupData.confirmPassword
                                ) &&
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "p",
                                  {
                                    className: "text-red-500 text-xs mt-1",
                                    children: (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "validatePasswordConfirmation"
                                    ])(
                                      signupData.password,
                                      signupData.confirmPassword
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                    lineNumber: 212,
                                    columnNumber: 25,
                                  },
                                  this
                                ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                            lineNumber: 188,
                            columnNumber: 17,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                      lineNumber: 160,
                      columnNumber: 13,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "grid grid-cols-2 gap-3",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "label",
                                {
                                  className:
                                    "block text-sm font-medium text-black mb-2",
                                  children: "ថ្ងៃខែឆ្នាំកំណើត",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                  lineNumber: 220,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: "relative",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__[
                                        "Calendar"
                                      ],
                                      {
                                        size: 18,
                                        className:
                                          "absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 224,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "input",
                                      {
                                        type: "date",
                                        value: signupData.dateOfBirth,
                                        onChange: (e) =>
                                          setSignupData((prev) => ({
                                            ...prev,
                                            dateOfBirth: e.target.value,
                                          })),
                                        className:
                                          "w-full pl-10 pr-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300",
                                        disabled: isSubmitting,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 225,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                    signupData.dateOfBirth &&
                                      (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "getValidationError"
                                      ])(
                                        "dateOfBirth",
                                        signupData.dateOfBirth
                                      ) &&
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "p",
                                        {
                                          className:
                                            "text-red-500 text-xs mt-1",
                                          children: (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "getValidationError"
                                          ])(
                                            "dateOfBirth",
                                            signupData.dateOfBirth
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                          lineNumber: 233,
                                          columnNumber: 29,
                                        },
                                        this
                                      ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                  lineNumber: 223,
                                  columnNumber: 21,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                            lineNumber: 219,
                            columnNumber: 17,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "label",
                                {
                                  className:
                                    "block text-sm font-medium text-black mb-2",
                                  children: "លេខទូរស័ព្ទ",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                  lineNumber: 238,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: "relative",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$536$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__[
                                        "Phone"
                                      ],
                                      {
                                        size: 18,
                                        className:
                                          "absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-600 z-10",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 242,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "input",
                                      {
                                        type: "tel",
                                        value: signupData.phone,
                                        onChange: (e) =>
                                          setSignupData((prev) => ({
                                            ...prev,
                                            phone: e.target.value,
                                          })),
                                        className:
                                          "w-full pl-10 pr-4 py-3 border border-indigo-500/20 rounded-xl bg-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/40 transition-all duration-300",
                                        placeholder: "លេខទូរស័ព្ទ",
                                        disabled: isSubmitting,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                        lineNumber: 243,
                                        columnNumber: 25,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                  lineNumber: 241,
                                  columnNumber: 21,
                                },
                                this
                              ),
                              signupData.phone &&
                                (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "getValidationError"
                                ])("phone", signupData.phone) &&
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "p",
                                  {
                                    className: "text-red-500 text-xs mt-1",
                                    children: (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "getValidationError"
                                    ])("phone", signupData.phone),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                                    lineNumber: 253,
                                    columnNumber: 25,
                                  },
                                  this
                                ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                            lineNumber: 237,
                            columnNumber: 17,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                      lineNumber: 218,
                      columnNumber: 13,
                    },
                    this
                  ),
                  errorMessage &&
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className:
                          "w-full rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm p-3",
                        children: errorMessage,
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                        lineNumber: 259,
                        columnNumber: 17,
                      },
                      this
                    ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "button",
                    {
                      type: "submit",
                      disabled: !isSignupValid() || isSubmitting,
                      className:
                        "w-full bg-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-indigo-500 transition-colors duration-300 shadow-lg shadow-indigo-500/30 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed",
                      children: isSubmitting ? "កំពុងចុះឈ្មោះ..." : "ចុះឈ្មោះ",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                      lineNumber: 274,
                      columnNumber: 13,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName:
                  "[project]/apps/web/src/components/pages/auth/SignUp.tsx",
                lineNumber: 55,
                columnNumber: 9,
              },
              this
            );
          }
          _c = SignUp;
          var _c;
          __turbopack_context__.k.register(_c, "SignUp");
          if (
            typeof globalThis.$RefreshHelpers$ === "object" &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    "[project]/apps/web/src/components/pages/auth/AuthModal.tsx [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
        {
          __turbopack_context__.s({
            default: () => AuthModal,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/@headlessui+react@2.2.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/@headlessui+react@2.2.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/packages/config/firebase.ts [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$firebase$40$12$2e$3$2e$0$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/firebase@12.3.0/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/@firebase+auth@1.11.0_@firebase+app@0.14.3/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export ab as createUserWithEmailAndPassword>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/@firebase+auth@1.11.0_@firebase+app@0.14.3/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export ac as signInWithEmailAndPassword>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__d__as__signInWithPopup$3e$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/@firebase+auth@1.11.0_@firebase+app@0.14.3/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export d as signInWithPopup>"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$services$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/packages/services/auth.ts [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$services$2f$upload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/packages/services/upload.ts [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/packages/utils/validator.ts [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pages$2f$auth$2f$LogIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/apps/web/src/components/pages/auth/LogIn.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pages$2f$auth$2f$SignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/apps/web/src/components/pages/auth/SignUp.tsx [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$common$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/apps/web/src/components/common/Header.tsx [app-client] (ecmascript)"
            );
          var _s = __turbopack_context__.k.signature();
          ("use client");
          const socialPlatforms = [
            {
              name: "Google",
              provider: "google",
              icon: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "svg",
                {
                  className: "w-5 h-5",
                  viewBox: "0 0 24 24",
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "path",
                      {
                        fill: "#4285F4",
                        d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                        lineNumber: 32,
                        columnNumber: 17,
                      },
                      ("TURBOPACK compile-time value", void 0)
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "path",
                      {
                        fill: "#34A853",
                        d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                        lineNumber: 33,
                        columnNumber: 17,
                      },
                      ("TURBOPACK compile-time value", void 0)
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "path",
                      {
                        fill: "#FBBC05",
                        d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                        lineNumber: 34,
                        columnNumber: 17,
                      },
                      ("TURBOPACK compile-time value", void 0)
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "path",
                      {
                        fill: "#EA4335",
                        d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                        lineNumber: 35,
                        columnNumber: 17,
                      },
                      ("TURBOPACK compile-time value", void 0)
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName:
                    "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                  lineNumber: 31,
                  columnNumber: 13,
                },
                ("TURBOPACK compile-time value", void 0)
              ),
            },
            {
              name: "Microsoft",
              provider: "microsoft",
              icon: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "svg",
                {
                  className: "w-5 h-5",
                  viewBox: "0 0 23 23",
                  fill: "#00A4EF",
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "path",
                    {
                      d: "M0 0h11v11H0zm12 0h11v11H12zM0 12h11v11H0zm12 0h11v11H12z",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                      lineNumber: 44,
                      columnNumber: 17,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                },
                void 0,
                false,
                {
                  fileName:
                    "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                  lineNumber: 43,
                  columnNumber: 13,
                },
                ("TURBOPACK compile-time value", void 0)
              ),
            },
            {
              name: "GitHub",
              provider: "github",
              icon: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "svg",
                {
                  className: "w-5 h-5",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  "aria-hidden": "true",
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M12 .5C5.73.5.99 5.24.99 11.5c0 4.85 3.14 8.96 7.49 10.41.55.1.75-.24.75-.52 0-.26-.01-.95-.02-1.87-3.05.66-3.7-1.47-3.7-1.47-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.66.08-.66 1.1.08 1.68 1.12 1.68 1.12.98 1.67 2.56 1.19 3.19.9.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.17 1.12-2.93-.11-.28-.49-1.41.11-2.94 0 0 .93-.3 3.05 1.12.88-.25 1.82-.38 2.76-.39.94.01 1.88.14 2.76.39 2.12-1.42 3.05-1.12 3.05-1.12.6 1.53.22 2.66.11 2.94.69.76 1.12 1.73 1.12 2.93 0 4.22-2.57 5.14-5.02 5.42.39.34.73 1.02.73 2.06 0 1.49-.01 2.69-.01 3.05 0 .29.2.63.76.52 4.34-1.45 7.48-5.56 7.48-10.41C23.01 5.24 18.27.5 12 .5z",
                      clipRule: "evenodd",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                      lineNumber: 53,
                      columnNumber: 17,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  ),
                },
                void 0,
                false,
                {
                  fileName:
                    "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                  lineNumber: 52,
                  columnNumber: 13,
                },
                ("TURBOPACK compile-time value", void 0)
              ),
            },
          ];
          function AuthModal(param) {
            let { open, onClose } = param;
            _s();
            const router = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useRouter"
            ])();
            const [activeTab, setActiveTab] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])("login");
            const [showPassword, setShowPassword] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])(false);
            const [showConfirmPassword, setShowConfirmPassword] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])(false);
            const [isSubmitting, setIsSubmitting] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])(false);
            const [formError, setFormError] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])(null);
            // Login form state
            const [loginIdentifier, setLoginIdentifier] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])("");
            const [loginPassword, setLoginPassword] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])("");
            // Signup form state
            const [signupData, setSignupData] = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "useState"
            ])({
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
              dateOfBirth: "",
              phone: "",
              profileImage: null,
            });
            const isLoginValid = () =>
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "validateLoginForm"
              ])(loginIdentifier, loginPassword);
            const isSignupValid = () =>
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$utils$2f$validator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "validateSignupForm"
              ])(signupData);
            const closeAndReset = () => {
              setIsSubmitting(false);
              setFormError(null);
              onClose();
            };
            const handleLogin = async (e) => {
              e.preventDefault();
              if (!isLoginValid()) return;
              setFormError(null);
              setIsSubmitting(true);
              try {
                const result = await (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__[
                  "signInWithEmailAndPassword"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "auth"
                  ],
                  loginIdentifier,
                  loginPassword
                );
                await result.user.getIdToken(true);
                const userData = await (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$services$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "getCurrentUser"
                ])();
                localStorage.setItem("user", JSON.stringify(userData));
                closeAndReset();
                router.push("/");
              } catch (error) {
                console.error("Login error:", error);
                const message =
                  error instanceof Error
                    ? error.message
                    : "មានបញ្ហាក្នុងការចូល";
                setFormError(message);
              } finally {
                setIsSubmitting(false);
              }
            };
            const handleSignup = async (e) => {
              e.preventDefault();
              if (!isSignupValid()) return;
              setFormError(null);
              setIsSubmitting(true);
              try {
                let imageKey = "";
                if (signupData.profileImage) {
                  try {
                    imageKey = await (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$services$2f$upload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "uploadFile"
                    ])(signupData.profileImage);
                  } catch (uploadErr) {
                    console.error("Upload error:", uploadErr);
                    setFormError("បញ្ហាក្នុងការបង្ហោះរូបភាព");
                    setIsSubmitting(false);
                    return;
                  }
                }
                const result = await (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__[
                  "createUserWithEmailAndPassword"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "auth"
                  ],
                  signupData.email,
                  signupData.password
                );
                const userData = await (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$services$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "signup"
                ])({
                  email: signupData.email,
                  username: signupData.username,
                  uid: result.user.uid,
                  firstName: signupData.firstName,
                  lastName: signupData.lastName,
                  dateOfBirth: signupData.dateOfBirth,
                  phone: signupData.phone,
                  profileImageKey: imageKey,
                });
                localStorage.setItem("user", JSON.stringify(userData));
                closeAndReset();
                router.push("/");
              } catch (error) {
                console.error("Signup error:", error);
                const message =
                  error instanceof Error
                    ? error.message
                    : "មានបញ្ហាក្នុងការចុះឈ្មោះ";
                setFormError(message);
              } finally {
                setIsSubmitting(false);
              }
            };
            const handleSocialLogin = async (providerKey) => {
              setFormError(null);
              setIsSubmitting(true);
              try {
                var _result_user_displayName, _result_user_displayName1;
                const provider =
                  providerKey === "google"
                    ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "googleProvider"
                      ]
                    : providerKey === "github"
                    ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "githubProvider"
                      ]
                    : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "microsoftProvider"
                      ];
                const result = await (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__d__as__signInWithPopup$3e$__[
                  "signInWithPopup"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$config$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "auth"
                  ],
                  provider
                );
                const userData = await (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$services$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "socialLogin"
                ])({
                  provider: providerKey,
                  email: result.user.email || "",
                  username: result.user.displayName || "",
                  uid: result.user.uid,
                  firstName:
                    ((_result_user_displayName = result.user.displayName) ===
                      null || _result_user_displayName === void 0
                      ? void 0
                      : _result_user_displayName.split(" ")[0]) || "",
                  lastName:
                    ((_result_user_displayName1 = result.user.displayName) ===
                      null || _result_user_displayName1 === void 0
                      ? void 0
                      : _result_user_displayName1
                          .split(" ")
                          .slice(1)
                          .join(" ")) || "",
                  dateOfBirth: null,
                  phone: "",
                  profileImage: result.user.photoURL,
                  profileImageKey: null,
                });
                localStorage.setItem("user", JSON.stringify(userData));
                closeAndReset();
                router.push("/");
              } catch (error) {
                console.error("Social login error:", error);
                const message =
                  error instanceof Error
                    ? error.message
                    : "មានបញ្ហាក្នុងការចូលដោយប្រើគណនីសង្គម";
                setFormError(message);
              } finally {
                setIsSubmitting(false);
              }
            };
            const handleProfileImageChange = (e) => {
              var _e_target_files;
              const file =
                (_e_target_files = e.target.files) === null ||
                _e_target_files === void 0
                  ? void 0
                  : _e_target_files[0];
              if (file) {
                setSignupData((prev) => ({
                  ...prev,
                  profileImage: file,
                }));
              }
            };
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "Transition"
              ].Root,
              {
                show: open,
                as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "Fragment"
                ],
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "Dialog"
                  ],
                  {
                    as: "div",
                    className: "relative z-50",
                    onClose: () => {},
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "Transition"
                        ].Child,
                        {
                          as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "Fragment"
                          ],
                          enter: "ease-out duration-200",
                          enterFrom: "opacity-0",
                          enterTo: "opacity-100",
                          leave: "ease-in duration-150",
                          leaveFrom: "opacity-100",
                          leaveTo: "opacity-0",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className:
                                "fixed inset-0 bg-black/20 backdrop-blur-[6px]",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                              lineNumber: 211,
                              columnNumber: 21,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                          lineNumber: 202,
                          columnNumber: 17,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$common$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                          lineNumber: 213,
                          columnNumber: 17,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "fixed inset-0 overflow-y-auto",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className:
                                "flex min-h-full items-center justify-center py-20",
                              children: /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  "Transition"
                                ].Child,
                                {
                                  as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "Fragment"
                                  ],
                                  enter: "ease-out duration-200",
                                  enterFrom:
                                    "opacity-0 translate-y-2 sm:scale-95",
                                  enterTo:
                                    "opacity-100 translate-y-0 sm:scale-100",
                                  leave: "ease-in duration-150",
                                  leaveFrom:
                                    "opacity-100 translate-y-0 sm:scale-100",
                                  leaveTo:
                                    "opacity-0 translate-y-2 sm:scale-95",
                                  children: /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "Dialog"
                                    ].Panel,
                                    {
                                      className:
                                        "w-full max-w-2xl transform overflow-hidden rounded-2xl border border-indigo-600 bg-white backdrop-blur-xl p-6 shadow-xl shadow-indigo-500/10",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "flex items-start justify-between",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$headlessui$2b$react$40$2$2e$2$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "Dialog"
                                                ].Title,
                                                {
                                                  className: "sr-only",
                                                  children: "Authentication",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                                  lineNumber: 229,
                                                  columnNumber: 37,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "default"
                                                ],
                                                {
                                                  href: "/",
                                                  className:
                                                    "flex items-center justify-center gap-2 mb-4",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "img",
                                                      {
                                                        src: "/logo.png",
                                                        alt: "",
                                                        className: "w-8 h-8",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 41,
                                                      },
                                                      this
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "div",
                                                      {
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-2xl font-extrabold tracking-tight text-indigo-600",
                                                              children: "KOM",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                                              lineNumber: 233,
                                                              columnNumber: 45,
                                                            },
                                                            this
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-2xl font-extrabold tracking-tight text-black",
                                                              children: "PLEX",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                                              lineNumber: 234,
                                                              columnNumber: 45,
                                                            },
                                                            this
                                                          ),
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName:
                                                          "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 41,
                                                      },
                                                      this
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                                  lineNumber: 230,
                                                  columnNumber: 37,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                            lineNumber: 228,
                                            columnNumber: 33,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "flex bg-white rounded-xl p-1 mb-6 border border-indigo-600  mx-auto",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "button",
                                                {
                                                  onClick: () =>
                                                    setActiveTab("login"),
                                                  className:
                                                    "flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all hover:bg-gray-50 duration-300 ".concat(
                                                      activeTab === "login"
                                                        ? "bg-white text-indigo-600 shadow-sm border border-indigo-600"
                                                        : "text-black hover:text-indigo-600"
                                                    ),
                                                  children: "ចូលទៅកាន់",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                                  lineNumber: 241,
                                                  columnNumber: 37,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "button",
                                                {
                                                  onClick: () =>
                                                    setActiveTab("signup"),
                                                  className:
                                                    "flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all hover:bg-gray-50 duration-300 ".concat(
                                                      activeTab === "signup"
                                                        ? "bg-white text-indigo-600 shadow-sm border border-indigo-600"
                                                        : "text-black hover:text-indigo-600"
                                                    ),
                                                  children: "ចុះឈ្មោះ",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                                  lineNumber: 250,
                                                  columnNumber: 37,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                            lineNumber: 240,
                                            columnNumber: 33,
                                          },
                                          this
                                        ),
                                        activeTab === "login" &&
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pages$2f$auth$2f$LogIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "default"
                                            ],
                                            {
                                              loginIdentifier: loginIdentifier,
                                              setLoginIdentifier:
                                                setLoginIdentifier,
                                              loginPassword: loginPassword,
                                              setLoginPassword:
                                                setLoginPassword,
                                              showPassword: showPassword,
                                              setShowPassword: setShowPassword,
                                              isLoginValid: isLoginValid,
                                              handleLogin: handleLogin,
                                              isSubmitting: isSubmitting,
                                              errorMessage: formError,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                              lineNumber: 263,
                                              columnNumber: 37,
                                            },
                                            this
                                          ),
                                        activeTab === "signup" &&
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pages$2f$auth$2f$SignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                              "default"
                                            ],
                                            {
                                              signupData: signupData,
                                              setSignupData: setSignupData,
                                              showPassword: showPassword,
                                              setShowPassword: setShowPassword,
                                              showConfirmPassword:
                                                showConfirmPassword,
                                              setShowConfirmPassword:
                                                setShowConfirmPassword,
                                              isSignupValid: isSignupValid,
                                              handleSignup: handleSignup,
                                              handleProfileImageChange:
                                                handleProfileImageChange,
                                              isSubmitting: isSubmitting,
                                              errorMessage: formError,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                              lineNumber: 278,
                                              columnNumber: 37,
                                            },
                                            this
                                          ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "my-6 flex items-center  mx-auto",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className:
                                                    "flex-1 border-t border-indigo-500/20",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                                  lineNumber: 295,
                                                  columnNumber: 37,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "span",
                                                {
                                                  className:
                                                    "px-4 text-sm text-gray-500",
                                                  children: "ឬ",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                                  lineNumber: 296,
                                                  columnNumber: 37,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className:
                                                    "flex-1 border-t border-indigo-500/20",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                                  lineNumber: 297,
                                                  columnNumber: 37,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                            lineNumber: 294,
                                            columnNumber: 33,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className: "flex gap-2 mx-auto",
                                            children: socialPlatforms.map(
                                              (platform, index) =>
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "button",
                                                  {
                                                    onClick: () =>
                                                      handleSocialLogin(
                                                        platform.provider
                                                      ),
                                                    className:
                                                      "flex-1 bg-white border border-indigo-500/20 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                                    disabled: isSubmitting,
                                                    children: platform.icon,
                                                  },
                                                  index,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 41,
                                                  },
                                                  this
                                                )
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                            lineNumber: 301,
                                            columnNumber: 33,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                      lineNumber: 227,
                                      columnNumber: 29,
                                    },
                                    this
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                                  lineNumber: 218,
                                  columnNumber: 25,
                                },
                                this
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                              lineNumber: 217,
                              columnNumber: 21,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                          lineNumber: 216,
                          columnNumber: 17,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                    lineNumber: 200,
                    columnNumber: 13,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/apps/web/src/components/pages/auth/AuthModal.tsx",
                lineNumber: 199,
                columnNumber: 9,
              },
              this
            );
          }
          _s(AuthModal, "Ts/TjJnn+uGCW/9HBXjjyZBDBQM=", false, function () {
            return [
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "useRouter"
              ],
            ];
          });
          _c = AuthModal;
          var _c;
          __turbopack_context__.k.register(_c, "AuthModal");
          if (
            typeof globalThis.$RefreshHelpers$ === "object" &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
    "[project]/apps/web/src/components/common/ModalRoot.tsx [app-client] (ecmascript)":
      (__turbopack_context__) => {
        "use strict";

        var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
        {
          __turbopack_context__.s({
            default: () => ModalRoot,
          });
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/.pnpm/next@15.4.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pages$2f$auth$2f$AuthModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/apps/web/src/components/pages/auth/AuthModal.tsx [app-client] (ecmascript)"
            );
          (() => {
            const e = new Error("Cannot find module '@hooks/useAuth'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          })();
          var _s = __turbopack_context__.k.signature();
          ("use client");
          function ModalRoot() {
            _s();
            const { isLoginOpen, closeLoginModal } = useAuth();
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$pages$2f$auth$2f$AuthModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "default"
              ],
              {
                open: isLoginOpen,
                onClose: closeLoginModal,
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/apps/web/src/components/common/ModalRoot.tsx",
                lineNumber: 8,
                columnNumber: 12,
              },
              this
            );
          }
          _s(ModalRoot, "pwCMWt/pZ+xcK7KzrfOBLCnwR+Y=", false, function () {
            return [useAuth];
          });
          _c = ModalRoot;
          var _c;
          __turbopack_context__.k.register(_c, "ModalRoot");
          if (
            typeof globalThis.$RefreshHelpers$ === "object" &&
            globalThis.$RefreshHelpers !== null
          ) {
            __turbopack_context__.k.registerExports(
              module,
              globalThis.$RefreshHelpers$
            );
          }
        }
      },
  },
]);

//# sourceMappingURL=_eaea81aa._.js.map
