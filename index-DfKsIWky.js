var Dc = e => {
    throw TypeError(e)
};
var wa = (e, t, n) => t.has(e) || Dc("Cannot " + n);
var j = (e, t, n) => (wa(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    Z = (e, t, n) => t.has(e) ? Dc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    G = (e, t, n, r) => (wa(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    Te = (e, t, n) => (wa(e, t, "access private method"), n);
var xs = (e, t, n, r) => ({
    set _(o) {
        G(e, t, o, n)
    },
    get _() {
        return j(e, t, r)
    }
});

function yg(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
})();

function $f(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Bf = {
        exports: {}
    },
    Di = {},
    Hf = {
        exports: {}
    },
    q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ls = Symbol.for("react.element"),
    xg = Symbol.for("react.portal"),
    wg = Symbol.for("react.fragment"),
    Sg = Symbol.for("react.strict_mode"),
    Cg = Symbol.for("react.profiler"),
    bg = Symbol.for("react.provider"),
    Pg = Symbol.for("react.context"),
    Eg = Symbol.for("react.forward_ref"),
    kg = Symbol.for("react.suspense"),
    Ng = Symbol.for("react.memo"),
    Tg = Symbol.for("react.lazy"),
    Ic = Symbol.iterator;

function jg(e) {
    return e === null || typeof e != "object" ? null : (e = Ic && e[Ic] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Wf = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Gf = Object.assign,
    Qf = {};

function oo(e, t, n) {
    this.props = e, this.context = t, this.refs = Qf, this.updater = n || Wf
}
oo.prototype.isReactComponent = {};
oo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
oo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Kf() {}
Kf.prototype = oo.prototype;

function pu(e, t, n) {
    this.props = e, this.context = t, this.refs = Qf, this.updater = n || Wf
}
var mu = pu.prototype = new Kf;
mu.constructor = pu;
Gf(mu, oo.prototype);
mu.isPureReactComponent = !0;
var Uc = Array.isArray,
    Xf = Object.prototype.hasOwnProperty,
    hu = {
        current: null
    },
    qf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Yf(e, t, n) {
    var r, o = {},
        s = null,
        i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) Xf.call(t, r) && !qf.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: ls,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: hu.current
    }
}

function Rg(e, t) {
    return {
        $$typeof: ls,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function gu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ls
}

function Vg(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var zc = /\/+/g;

function Sa(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Vg("" + e.key) : t.toString(36)
}

function Bs(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else switch (s) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case ls:
                case xg:
                    i = !0
            }
    }
    if (i) return i = e, o = o(i), e = r === "" ? "." + Sa(i, 0) : r, Uc(o) ? (n = "", e != null && (n = e.replace(zc, "$&/") + "/"), Bs(o, t, n, "", function(u) {
        return u
    })) : o != null && (gu(o) && (o = Rg(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(zc, "$&/") + "/") + e)), t.push(o)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", Uc(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + Sa(s, a);
            i += Bs(s, t, n, l, o)
        } else if (l = jg(e), typeof l == "function")
            for (e = l.call(e), a = 0; !(s = e.next()).done;) s = s.value, l = r + Sa(s, a++), i += Bs(s, t, n, l, o);
        else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function ws(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return Bs(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }), r
}

function Ag(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Ie = {
        current: null
    },
    Hs = {
        transition: null
    },
    Lg = {
        ReactCurrentDispatcher: Ie,
        ReactCurrentBatchConfig: Hs,
        ReactCurrentOwner: hu
    };

function Jf() {
    throw Error("act(...) is not supported in production builds of React.")
}
q.Children = {
    map: ws,
    forEach: function(e, t, n) {
        ws(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ws(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return ws(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!gu(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
q.Component = oo;
q.Fragment = wg;
q.Profiler = Cg;
q.PureComponent = pu;
q.StrictMode = Sg;
q.Suspense = kg;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lg;
q.act = Jf;
q.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Gf({}, e.props),
        o = e.key,
        s = e.ref,
        i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref, i = hu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) Xf.call(t, l) && !qf.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: ls,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: i
    }
};
q.createContext = function(e) {
    return e = {
        $$typeof: Pg,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: bg,
        _context: e
    }, e.Consumer = e
};
q.createElement = Yf;
q.createFactory = function(e) {
    var t = Yf.bind(null, e);
    return t.type = e, t
};
q.createRef = function() {
    return {
        current: null
    }
};
q.forwardRef = function(e) {
    return {
        $$typeof: Eg,
        render: e
    }
};
q.isValidElement = gu;
q.lazy = function(e) {
    return {
        $$typeof: Tg,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Ag
    }
};
q.memo = function(e, t) {
    return {
        $$typeof: Ng,
        type: e,
        compare: t === void 0 ? null : t
    }
};
q.startTransition = function(e) {
    var t = Hs.transition;
    Hs.transition = {};
    try {
        e()
    } finally {
        Hs.transition = t
    }
};
q.unstable_act = Jf;
q.useCallback = function(e, t) {
    return Ie.current.useCallback(e, t)
};
q.useContext = function(e) {
    return Ie.current.useContext(e)
};
q.useDebugValue = function() {};
q.useDeferredValue = function(e) {
    return Ie.current.useDeferredValue(e)
};
q.useEffect = function(e, t) {
    return Ie.current.useEffect(e, t)
};
q.useId = function() {
    return Ie.current.useId()
};
q.useImperativeHandle = function(e, t, n) {
    return Ie.current.useImperativeHandle(e, t, n)
};
q.useInsertionEffect = function(e, t) {
    return Ie.current.useInsertionEffect(e, t)
};
q.useLayoutEffect = function(e, t) {
    return Ie.current.useLayoutEffect(e, t)
};
q.useMemo = function(e, t) {
    return Ie.current.useMemo(e, t)
};
q.useReducer = function(e, t, n) {
    return Ie.current.useReducer(e, t, n)
};
q.useRef = function(e) {
    return Ie.current.useRef(e)
};
q.useState = function(e) {
    return Ie.current.useState(e)
};
q.useSyncExternalStore = function(e, t, n) {
    return Ie.current.useSyncExternalStore(e, t, n)
};
q.useTransition = function() {
    return Ie.current.useTransition()
};
q.version = "18.3.1";
Hf.exports = q;
var S = Hf.exports;
const A = $f(S),
    vu = yg({
        __proto__: null,
        default: A
    }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mg = S,
    Og = Symbol.for("react.element"),
    _g = Symbol.for("react.fragment"),
    Dg = Object.prototype.hasOwnProperty,
    Ig = Mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Ug = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Zf(e, t, n) {
    var r, o = {},
        s = null,
        i = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) Dg.call(t, r) && !Ug.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Og,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: Ig.current
    }
}
Di.Fragment = _g;
Di.jsx = Zf;
Di.jsxs = Zf;
Bf.exports = Di;
var d = Bf.exports,
    ep = {
        exports: {}
    },
    et = {},
    tp = {
        exports: {}
    },
    np = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(T, R) {
        var D = T.length;
        T.push(R);
        e: for (; 0 < D;) {
            var B = D - 1 >>> 1,
                N = T[B];
            if (0 < o(N, R)) T[B] = R, T[D] = N, D = B;
            else break e
        }
    }

    function n(T) {
        return T.length === 0 ? null : T[0]
    }

    function r(T) {
        if (T.length === 0) return null;
        var R = T[0],
            D = T.pop();
        if (D !== R) {
            T[0] = D;
            e: for (var B = 0, N = T.length, H = N >>> 1; B < H;) {
                var Y = 2 * (B + 1) - 1,
                    ve = T[Y],
                    Ne = Y + 1,
                    ee = T[Ne];
                if (0 > o(ve, D)) Ne < N && 0 > o(ee, ve) ? (T[B] = ee, T[Ne] = D, B = Ne) : (T[B] = ve, T[Y] = D, B = Y);
                else if (Ne < N && 0 > o(ee, D)) T[B] = ee, T[Ne] = D, B = Ne;
                else break e
            }
        }
        return R
    }

    function o(T, R) {
        var D = T.sortIndex - R.sortIndex;
        return D !== 0 ? D : T.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var i = Date,
            a = i.now();
        e.unstable_now = function() {
            return i.now() - a
        }
    }
    var l = [],
        u = [],
        f = 1,
        m = null,
        g = 3,
        p = !1,
        C = !1,
        x = !1,
        w = typeof setTimeout == "function" ? setTimeout : null,
        v = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function y(T) {
        for (var R = n(u); R !== null;) {
            if (R.callback === null) r(u);
            else if (R.startTime <= T) r(u), R.sortIndex = R.expirationTime, t(l, R);
            else break;
            R = n(u)
        }
    }

    function b(T) {
        if (x = !1, y(T), !C)
            if (n(l) !== null) C = !0, z(P);
            else {
                var R = n(u);
                R !== null && $(b, R.startTime - T)
            }
    }

    function P(T, R) {
        C = !1, x && (x = !1, v(V), V = -1), p = !0;
        var D = g;
        try {
            for (y(R), m = n(l); m !== null && (!(m.expirationTime > R) || T && !F());) {
                var B = m.callback;
                if (typeof B == "function") {
                    m.callback = null, g = m.priorityLevel;
                    var N = B(m.expirationTime <= R);
                    R = e.unstable_now(), typeof N == "function" ? m.callback = N : m === n(l) && r(l), y(R)
                } else r(l);
                m = n(l)
            }
            if (m !== null) var H = !0;
            else {
                var Y = n(u);
                Y !== null && $(b, Y.startTime - R), H = !1
            }
            return H
        } finally {
            m = null, g = D, p = !1
        }
    }
    var E = !1,
        k = null,
        V = -1,
        O = 5,
        M = -1;

    function F() {
        return !(e.unstable_now() - M < O)
    }

    function I() {
        if (k !== null) {
            var T = e.unstable_now();
            M = T;
            var R = !0;
            try {
                R = k(!0, T)
            } finally {
                R ? K() : (E = !1, k = null)
            }
        } else E = !1
    }
    var K;
    if (typeof h == "function") K = function() {
        h(I)
    };
    else if (typeof MessageChannel < "u") {
        var _ = new MessageChannel,
            X = _.port2;
        _.port1.onmessage = I, K = function() {
            X.postMessage(null)
        }
    } else K = function() {
        w(I, 0)
    };

    function z(T) {
        k = T, E || (E = !0, K())
    }

    function $(T, R) {
        V = w(function() {
            T(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
        T.callback = null
    }, e.unstable_continueExecution = function() {
        C || p || (C = !0, z(P))
    }, e.unstable_forceFrameRate = function(T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < T ? Math.floor(1e3 / T) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return g
    }, e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, e.unstable_next = function(T) {
        switch (g) {
            case 1:
            case 2:
            case 3:
                var R = 3;
                break;
            default:
                R = g
        }
        var D = g;
        g = R;
        try {
            return T()
        } finally {
            g = D
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(T, R) {
        switch (T) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                T = 3
        }
        var D = g;
        g = T;
        try {
            return R()
        } finally {
            g = D
        }
    }, e.unstable_scheduleCallback = function(T, R, D) {
        var B = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? B + D : B) : D = B, T) {
            case 1:
                var N = -1;
                break;
            case 2:
                N = 250;
                break;
            case 5:
                N = 1073741823;
                break;
            case 4:
                N = 1e4;
                break;
            default:
                N = 5e3
        }
        return N = D + N, T = {
            id: f++,
            callback: R,
            priorityLevel: T,
            startTime: D,
            expirationTime: N,
            sortIndex: -1
        }, D > B ? (T.sortIndex = D, t(u, T), n(l) === null && T === n(u) && (x ? (v(V), V = -1) : x = !0, $(b, D - B))) : (T.sortIndex = N, t(l, T), C || p || (C = !0, z(P))), T
    }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(T) {
        var R = g;
        return function() {
            var D = g;
            g = R;
            try {
                return T.apply(this, arguments)
            } finally {
                g = D
            }
        }
    }
})(np);
tp.exports = np;
var zg = tp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fg = S,
    Je = zg;

function L(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var rp = new Set,
    Uo = {};

function dr(e, t) {
    Xr(e, t), Xr(e + "Capture", t)
}

function Xr(e, t) {
    for (Uo[e] = t, e = 0; e < t.length; e++) rp.add(t[e])
}
var Xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    tl = Object.prototype.hasOwnProperty,
    $g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Fc = {},
    $c = {};

function Bg(e) {
    return tl.call($c, e) ? !0 : tl.call(Fc, e) ? !1 : $g.test(e) ? $c[e] = !0 : (Fc[e] = !0, !1)
}

function Hg(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Wg(e, t, n, r) {
    if (t === null || typeof t > "u" || Hg(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ue(e, t, n, r, o, s, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ke[e] = new Ue(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    ke[t] = new Ue(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ke[e] = new Ue(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ke[e] = new Ue(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ke[e] = new Ue(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ke[e] = new Ue(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    ke[e] = new Ue(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ke[e] = new Ue(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    ke[e] = new Ue(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var yu = /[\-:]([a-z])/g;

function xu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(yu, xu);
    ke[t] = new Ue(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(yu, xu);
    ke[t] = new Ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(yu, xu);
    ke[t] = new Ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ke[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ke.xlinkHref = new Ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ke[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function wu(e, t, n, r) {
    var o = ke.hasOwnProperty(t) ? ke[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Wg(t, n, o, r) && (n = null), r || o === null ? Bg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var tn = Fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ss = Symbol.for("react.element"),
    wr = Symbol.for("react.portal"),
    Sr = Symbol.for("react.fragment"),
    Su = Symbol.for("react.strict_mode"),
    nl = Symbol.for("react.profiler"),
    op = Symbol.for("react.provider"),
    sp = Symbol.for("react.context"),
    Cu = Symbol.for("react.forward_ref"),
    rl = Symbol.for("react.suspense"),
    ol = Symbol.for("react.suspense_list"),
    bu = Symbol.for("react.memo"),
    pn = Symbol.for("react.lazy"),
    ip = Symbol.for("react.offscreen"),
    Bc = Symbol.iterator;

function mo(e) {
    return e === null || typeof e != "object" ? null : (e = Bc && e[Bc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var de = Object.assign,
    Ca;

function Po(e) {
    if (Ca === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ca = t && t[1] || ""
    }
    return `
` + Ca + e
}
var ba = !1;

function Pa(e, t) {
    if (!e || ba) return "";
    ba = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), s = r.stack.split(`
`), i = o.length - 1, a = s.length - 1; 1 <= i && 0 <= a && o[i] !== s[a];) a--;
            for (; 1 <= i && 0 <= a; i--, a--)
                if (o[i] !== s[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--, a--, 0 > a || o[i] !== s[a]) {
                                var l = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            }
                    while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        ba = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Po(e) : ""
}

function Gg(e) {
    switch (e.tag) {
        case 5:
            return Po(e.type);
        case 16:
            return Po("Lazy");
        case 13:
            return Po("Suspense");
        case 19:
            return Po("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Pa(e.type, !1), e;
        case 11:
            return e = Pa(e.type.render, !1), e;
        case 1:
            return e = Pa(e.type, !0), e;
        default:
            return ""
    }
}

function sl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Sr:
            return "Fragment";
        case wr:
            return "Portal";
        case nl:
            return "Profiler";
        case Su:
            return "StrictMode";
        case rl:
            return "Suspense";
        case ol:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case sp:
            return (e.displayName || "Context") + ".Consumer";
        case op:
            return (e._context.displayName || "Context") + ".Provider";
        case Cu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case bu:
            return t = e.displayName || null, t !== null ? t : sl(e.type) || "Memo";
        case pn:
            t = e._payload, e = e._init;
            try {
                return sl(e(t))
            } catch {}
    }
    return null
}

function Qg(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return sl(t);
        case 8:
            return t === Su ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Ln(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function ap(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Kg(e) {
    var t = ap(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(i) {
                r = "" + i, s.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Cs(e) {
    e._valueTracker || (e._valueTracker = Kg(e))
}

function lp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = ap(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function oi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function il(e, t) {
    var n = t.checked;
    return de({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Hc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ln(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function up(e, t) {
    t = t.checked, t != null && wu(e, "checked", t, !1)
}

function al(e, t) {
    up(e, t);
    var n = Ln(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ll(e, t.type, n) : t.hasOwnProperty("defaultValue") && ll(e, t.type, Ln(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Wc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function ll(e, t, n) {
    (t !== "number" || oi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Eo = Array.isArray;

function Ar(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Ln(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function ul(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
    return de({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Gc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(L(92));
            if (Eo(n)) {
                if (1 < n.length) throw Error(L(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Ln(n)
    }
}

function cp(e, t) {
    var n = Ln(t.value),
        r = Ln(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Qc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function dp(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function cl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? dp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var bs, fp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (bs = bs || document.createElement("div"), bs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = bs.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function zo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var jo = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Xg = ["Webkit", "ms", "Moz", "O"];
Object.keys(jo).forEach(function(e) {
    Xg.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), jo[t] = jo[e]
    })
});

function pp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || jo.hasOwnProperty(e) && jo[e] ? ("" + t).trim() : t + "px"
}

function mp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = pp(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var qg = de({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function dl(e, t) {
    if (t) {
        if (qg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(L(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(L(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(L(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(L(62))
    }
}

function fl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var pl = null;

function Pu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var ml = null,
    Lr = null,
    Mr = null;

function Kc(e) {
    if (e = ds(e)) {
        if (typeof ml != "function") throw Error(L(280));
        var t = e.stateNode;
        t && (t = $i(t), ml(e.stateNode, e.type, t))
    }
}

function hp(e) {
    Lr ? Mr ? Mr.push(e) : Mr = [e] : Lr = e
}

function gp() {
    if (Lr) {
        var e = Lr,
            t = Mr;
        if (Mr = Lr = null, Kc(e), t)
            for (e = 0; e < t.length; e++) Kc(t[e])
    }
}

function vp(e, t) {
    return e(t)
}

function yp() {}
var Ea = !1;

function xp(e, t, n) {
    if (Ea) return e(t, n);
    Ea = !0;
    try {
        return vp(e, t, n)
    } finally {
        Ea = !1, (Lr !== null || Mr !== null) && (yp(), gp())
    }
}

function Fo(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = $i(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(L(231, t, typeof n));
    return n
}
var hl = !1;
if (Xt) try {
    var ho = {};
    Object.defineProperty(ho, "passive", {
        get: function() {
            hl = !0
        }
    }), window.addEventListener("test", ho, ho), window.removeEventListener("test", ho, ho)
} catch {
    hl = !1
}

function Yg(e, t, n, r, o, s, i, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (f) {
        this.onError(f)
    }
}
var Ro = !1,
    si = null,
    ii = !1,
    gl = null,
    Jg = {
        onError: function(e) {
            Ro = !0, si = e
        }
    };

function Zg(e, t, n, r, o, s, i, a, l) {
    Ro = !1, si = null, Yg.apply(Jg, arguments)
}

function ev(e, t, n, r, o, s, i, a, l) {
    if (Zg.apply(this, arguments), Ro) {
        if (Ro) {
            var u = si;
            Ro = !1, si = null
        } else throw Error(L(198));
        ii || (ii = !0, gl = u)
    }
}

function fr(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function wp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Xc(e) {
    if (fr(e) !== e) throw Error(L(188))
}

function tv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = fr(e), t === null) throw Error(L(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s;) {
                if (s === n) return Xc(o), e;
                if (s === r) return Xc(o), t;
                s = s.sibling
            }
            throw Error(L(188))
        }
        if (n.return !== r.return) n = o, r = s;
        else {
            for (var i = !1, a = o.child; a;) {
                if (a === n) {
                    i = !0, n = o, r = s;
                    break
                }
                if (a === r) {
                    i = !0, r = o, n = s;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = s.child; a;) {
                    if (a === n) {
                        i = !0, n = s, r = o;
                        break
                    }
                    if (a === r) {
                        i = !0, r = s, n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!i) throw Error(L(189))
            }
        }
        if (n.alternate !== r) throw Error(L(190))
    }
    if (n.tag !== 3) throw Error(L(188));
    return n.stateNode.current === n ? e : t
}

function Sp(e) {
    return e = tv(e), e !== null ? Cp(e) : null
}

function Cp(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Cp(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var bp = Je.unstable_scheduleCallback,
    qc = Je.unstable_cancelCallback,
    nv = Je.unstable_shouldYield,
    rv = Je.unstable_requestPaint,
    me = Je.unstable_now,
    ov = Je.unstable_getCurrentPriorityLevel,
    Eu = Je.unstable_ImmediatePriority,
    Pp = Je.unstable_UserBlockingPriority,
    ai = Je.unstable_NormalPriority,
    sv = Je.unstable_LowPriority,
    Ep = Je.unstable_IdlePriority,
    Ii = null,
    Mt = null;

function iv(e) {
    if (Mt && typeof Mt.onCommitFiberRoot == "function") try {
        Mt.onCommitFiberRoot(Ii, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var St = Math.clz32 ? Math.clz32 : uv,
    av = Math.log,
    lv = Math.LN2;

function uv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (av(e) / lv | 0) | 0
}
var Ps = 64,
    Es = 4194304;

function ko(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function li(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        s = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var a = i & ~o;
        a !== 0 ? r = ko(a) : (s &= i, s !== 0 && (r = ko(s)))
    } else i = n & ~o, i !== 0 ? r = ko(i) : s !== 0 && (r = ko(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - St(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function cv(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function dv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
        var i = 31 - St(s),
            a = 1 << i,
            l = o[i];
        l === -1 ? (!(a & n) || a & r) && (o[i] = cv(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a
    }
}

function vl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function kp() {
    var e = Ps;
    return Ps <<= 1, !(Ps & 4194240) && (Ps = 64), e
}

function ka(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function us(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n
}

function fv(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - St(n),
            s = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s
    }
}

function ku(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - St(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var te = 0;

function Np(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Tp, Nu, jp, Rp, Vp, yl = !1,
    ks = [],
    En = null,
    kn = null,
    Nn = null,
    $o = new Map,
    Bo = new Map,
    hn = [],
    pv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Yc(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            En = null;
            break;
        case "dragenter":
        case "dragleave":
            kn = null;
            break;
        case "mouseover":
        case "mouseout":
            Nn = null;
            break;
        case "pointerover":
        case "pointerout":
            $o.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Bo.delete(t.pointerId)
    }
}

function go(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    }, t !== null && (t = ds(t), t !== null && Nu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function mv(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return En = go(En, e, t, n, r, o), !0;
        case "dragenter":
            return kn = go(kn, e, t, n, r, o), !0;
        case "mouseover":
            return Nn = go(Nn, e, t, n, r, o), !0;
        case "pointerover":
            var s = o.pointerId;
            return $o.set(s, go($o.get(s) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return s = o.pointerId, Bo.set(s, go(Bo.get(s) || null, e, t, n, r, o)), !0
    }
    return !1
}

function Ap(e) {
    var t = Kn(e.target);
    if (t !== null) {
        var n = fr(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = wp(n), t !== null) {
                    e.blockedOn = t, Vp(e.priority, function() {
                        jp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Ws(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            pl = r, n.target.dispatchEvent(r), pl = null
        } else return t = ds(n), t !== null && Nu(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Jc(e, t, n) {
    Ws(e) && n.delete(t)
}

function hv() {
    yl = !1, En !== null && Ws(En) && (En = null), kn !== null && Ws(kn) && (kn = null), Nn !== null && Ws(Nn) && (Nn = null), $o.forEach(Jc), Bo.forEach(Jc)
}

function vo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, yl || (yl = !0, Je.unstable_scheduleCallback(Je.unstable_NormalPriority, hv)))
}

function Ho(e) {
    function t(o) {
        return vo(o, e)
    }
    if (0 < ks.length) {
        vo(ks[0], e);
        for (var n = 1; n < ks.length; n++) {
            var r = ks[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (En !== null && vo(En, e), kn !== null && vo(kn, e), Nn !== null && vo(Nn, e), $o.forEach(t), Bo.forEach(t), n = 0; n < hn.length; n++) r = hn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < hn.length && (n = hn[0], n.blockedOn === null);) Ap(n), n.blockedOn === null && hn.shift()
}
var Or = tn.ReactCurrentBatchConfig,
    ui = !0;

function gv(e, t, n, r) {
    var o = te,
        s = Or.transition;
    Or.transition = null;
    try {
        te = 1, Tu(e, t, n, r)
    } finally {
        te = o, Or.transition = s
    }
}

function vv(e, t, n, r) {
    var o = te,
        s = Or.transition;
    Or.transition = null;
    try {
        te = 4, Tu(e, t, n, r)
    } finally {
        te = o, Or.transition = s
    }
}

function Tu(e, t, n, r) {
    if (ui) {
        var o = xl(e, t, n, r);
        if (o === null) _a(e, t, r, ci, n), Yc(e, r);
        else if (mv(o, e, t, n, r)) r.stopPropagation();
        else if (Yc(e, r), t & 4 && -1 < pv.indexOf(e)) {
            for (; o !== null;) {
                var s = ds(o);
                if (s !== null && Tp(s), s = xl(e, t, n, r), s === null && _a(e, t, r, ci, n), s === o) break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else _a(e, t, r, null, n)
    }
}
var ci = null;

function xl(e, t, n, r) {
    if (ci = null, e = Pu(r), e = Kn(e), e !== null)
        if (t = fr(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = wp(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return ci = e, null
}

function Lp(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (ov()) {
                case Eu:
                    return 1;
                case Pp:
                    return 4;
                case ai:
                case sv:
                    return 16;
                case Ep:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Cn = null,
    ju = null,
    Gs = null;

function Mp() {
    if (Gs) return Gs;
    var e, t = ju,
        n = t.length,
        r, o = "value" in Cn ? Cn.value : Cn.textContent,
        s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
    return Gs = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Qs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Ns() {
    return !0
}

function Zc() {
    return !1
}

function tt(e) {
    function t(n, r, o, s, i) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ns : Zc, this.isPropagationStopped = Zc, this
    }
    return de(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ns)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ns)
        },
        persist: function() {},
        isPersistent: Ns
    }), t
}
var so = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Ru = tt(so),
    cs = de({}, so, {
        view: 0,
        detail: 0
    }),
    yv = tt(cs),
    Na, Ta, yo, Ui = de({}, cs, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Vu,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== yo && (yo && e.type === "mousemove" ? (Na = e.screenX - yo.screenX, Ta = e.screenY - yo.screenY) : Ta = Na = 0, yo = e), Na)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Ta
        }
    }),
    ed = tt(Ui),
    xv = de({}, Ui, {
        dataTransfer: 0
    }),
    wv = tt(xv),
    Sv = de({}, cs, {
        relatedTarget: 0
    }),
    ja = tt(Sv),
    Cv = de({}, so, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    bv = tt(Cv),
    Pv = de({}, so, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Ev = tt(Pv),
    kv = de({}, so, {
        data: 0
    }),
    td = tt(kv),
    Nv = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Tv = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    jv = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Rv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = jv[e]) ? !!t[e] : !1
}

function Vu() {
    return Rv
}
var Vv = de({}, cs, {
        key: function(e) {
            if (e.key) {
                var t = Nv[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Qs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Tv[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Vu,
        charCode: function(e) {
            return e.type === "keypress" ? Qs(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Qs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Av = tt(Vv),
    Lv = de({}, Ui, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    nd = tt(Lv),
    Mv = de({}, cs, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Vu
    }),
    Ov = tt(Mv),
    _v = de({}, so, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Dv = tt(_v),
    Iv = de({}, Ui, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Uv = tt(Iv),
    zv = [9, 13, 27, 32],
    Au = Xt && "CompositionEvent" in window,
    Vo = null;
Xt && "documentMode" in document && (Vo = document.documentMode);
var Fv = Xt && "TextEvent" in window && !Vo,
    Op = Xt && (!Au || Vo && 8 < Vo && 11 >= Vo),
    rd = " ",
    od = !1;

function _p(e, t) {
    switch (e) {
        case "keyup":
            return zv.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Dp(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Cr = !1;

function $v(e, t) {
    switch (e) {
        case "compositionend":
            return Dp(t);
        case "keypress":
            return t.which !== 32 ? null : (od = !0, rd);
        case "textInput":
            return e = t.data, e === rd && od ? null : e;
        default:
            return null
    }
}

function Bv(e, t) {
    if (Cr) return e === "compositionend" || !Au && _p(e, t) ? (e = Mp(), Gs = ju = Cn = null, Cr = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Op && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Hv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function sd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Hv[e.type] : t === "textarea"
}

function Ip(e, t, n, r) {
    hp(r), t = di(t, "onChange"), 0 < t.length && (n = new Ru("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Ao = null,
    Wo = null;

function Wv(e) {
    Xp(e, 0)
}

function zi(e) {
    var t = Er(e);
    if (lp(t)) return e
}

function Gv(e, t) {
    if (e === "change") return t
}
var Up = !1;
if (Xt) {
    var Ra;
    if (Xt) {
        var Va = "oninput" in document;
        if (!Va) {
            var id = document.createElement("div");
            id.setAttribute("oninput", "return;"), Va = typeof id.oninput == "function"
        }
        Ra = Va
    } else Ra = !1;
    Up = Ra && (!document.documentMode || 9 < document.documentMode)
}

function ad() {
    Ao && (Ao.detachEvent("onpropertychange", zp), Wo = Ao = null)
}

function zp(e) {
    if (e.propertyName === "value" && zi(Wo)) {
        var t = [];
        Ip(t, Wo, e, Pu(e)), xp(Wv, t)
    }
}

function Qv(e, t, n) {
    e === "focusin" ? (ad(), Ao = t, Wo = n, Ao.attachEvent("onpropertychange", zp)) : e === "focusout" && ad()
}

function Kv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return zi(Wo)
}

function Xv(e, t) {
    if (e === "click") return zi(t)
}

function qv(e, t) {
    if (e === "input" || e === "change") return zi(t)
}

function Yv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var bt = typeof Object.is == "function" ? Object.is : Yv;

function Go(e, t) {
    if (bt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!tl.call(t, o) || !bt(e[o], t[o])) return !1
    }
    return !0
}

function ld(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function ud(e, t) {
    var n = ld(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ld(n)
    }
}

function Fp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function $p() {
    for (var e = window, t = oi(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = oi(e.document)
    }
    return t
}

function Lu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Jv(e) {
    var t = $p(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Fp(n.ownerDocument.documentElement, n)) {
        if (r !== null && Lu(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (o = r, r = s, s = o), o = ud(n, s);
                var i = ud(n, r);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Zv = Xt && "documentMode" in document && 11 >= document.documentMode,
    br = null,
    wl = null,
    Lo = null,
    Sl = !1;

function cd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Sl || br == null || br !== oi(r) || (r = br, "selectionStart" in r && Lu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Lo && Go(Lo, r) || (Lo = r, r = di(wl, "onSelect"), 0 < r.length && (t = new Ru("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = br)))
}

function Ts(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Pr = {
        animationend: Ts("Animation", "AnimationEnd"),
        animationiteration: Ts("Animation", "AnimationIteration"),
        animationstart: Ts("Animation", "AnimationStart"),
        transitionend: Ts("Transition", "TransitionEnd")
    },
    Aa = {},
    Bp = {};
Xt && (Bp = document.createElement("div").style, "AnimationEvent" in window || (delete Pr.animationend.animation, delete Pr.animationiteration.animation, delete Pr.animationstart.animation), "TransitionEvent" in window || delete Pr.transitionend.transition);

function Fi(e) {
    if (Aa[e]) return Aa[e];
    if (!Pr[e]) return e;
    var t = Pr[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Bp) return Aa[e] = t[n];
    return e
}
var Hp = Fi("animationend"),
    Wp = Fi("animationiteration"),
    Gp = Fi("animationstart"),
    Qp = Fi("transitionend"),
    Kp = new Map,
    dd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function In(e, t) {
    Kp.set(e, t), dr(t, [e])
}
for (var La = 0; La < dd.length; La++) {
    var Ma = dd[La],
        e2 = Ma.toLowerCase(),
        t2 = Ma[0].toUpperCase() + Ma.slice(1);
    In(e2, "on" + t2)
}
In(Hp, "onAnimationEnd");
In(Wp, "onAnimationIteration");
In(Gp, "onAnimationStart");
In("dblclick", "onDoubleClick");
In("focusin", "onFocus");
In("focusout", "onBlur");
In(Qp, "onTransitionEnd");
Xr("onMouseEnter", ["mouseout", "mouseover"]);
Xr("onMouseLeave", ["mouseout", "mouseover"]);
Xr("onPointerEnter", ["pointerout", "pointerover"]);
Xr("onPointerLeave", ["pointerout", "pointerover"]);
dr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
dr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
dr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
dr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
dr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var No = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    n2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(No));

function fd(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, ev(r, t, void 0, e), e.currentTarget = null
}

function Xp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== s && o.isPropagationStopped()) break e;
                    fd(o, a, u), s = l
                } else
                    for (i = 0; i < r.length; i++) {
                        if (a = r[i], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && o.isPropagationStopped()) break e;
                        fd(o, a, u), s = l
                    }
        }
    }
    if (ii) throw e = gl, ii = !1, gl = null, e
}

function se(e, t) {
    var n = t[kl];
    n === void 0 && (n = t[kl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (qp(t, e, 2, !1), n.add(r))
}

function Oa(e, t, n) {
    var r = 0;
    t && (r |= 4), qp(n, e, r, t)
}
var js = "_reactListening" + Math.random().toString(36).slice(2);

function Qo(e) {
    if (!e[js]) {
        e[js] = !0, rp.forEach(function(n) {
            n !== "selectionchange" && (n2.has(n) || Oa(n, !1, e), Oa(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[js] || (t[js] = !0, Oa("selectionchange", !1, t))
    }
}

function qp(e, t, n, r) {
    switch (Lp(t)) {
        case 1:
            var o = gv;
            break;
        case 4:
            o = vv;
            break;
        default:
            o = Tu
    }
    n = o.bind(null, t, n, e), o = void 0, !hl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function _a(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var a = r.stateNode.containerInfo;
            if (a === o || a.nodeType === 8 && a.parentNode === o) break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var l = i.tag;
                    if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
                    i = i.return
                }
            for (; a !== null;) {
                if (i = Kn(a), i === null) return;
                if (l = i.tag, l === 5 || l === 6) {
                    r = s = i;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    xp(function() {
        var u = s,
            f = Pu(n),
            m = [];
        e: {
            var g = Kp.get(e);
            if (g !== void 0) {
                var p = Ru,
                    C = e;
                switch (e) {
                    case "keypress":
                        if (Qs(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        p = Av;
                        break;
                    case "focusin":
                        C = "focus", p = ja;
                        break;
                    case "focusout":
                        C = "blur", p = ja;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        p = ja;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        p = ed;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        p = wv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        p = Ov;
                        break;
                    case Hp:
                    case Wp:
                    case Gp:
                        p = bv;
                        break;
                    case Qp:
                        p = Dv;
                        break;
                    case "scroll":
                        p = yv;
                        break;
                    case "wheel":
                        p = Uv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        p = Ev;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        p = nd
                }
                var x = (t & 4) !== 0,
                    w = !x && e === "scroll",
                    v = x ? g !== null ? g + "Capture" : null : g;
                x = [];
                for (var h = u, y; h !== null;) {
                    y = h;
                    var b = y.stateNode;
                    if (y.tag === 5 && b !== null && (y = b, v !== null && (b = Fo(h, v), b != null && x.push(Ko(h, b, y)))), w) break;
                    h = h.return
                }
                0 < x.length && (g = new p(g, C, null, n, f), m.push({
                    event: g,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (g = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", g && n !== pl && (C = n.relatedTarget || n.fromElement) && (Kn(C) || C[qt])) break e;
                if ((p || g) && (g = f.window === f ? f : (g = f.ownerDocument) ? g.defaultView || g.parentWindow : window, p ? (C = n.relatedTarget || n.toElement, p = u, C = C ? Kn(C) : null, C !== null && (w = fr(C), C !== w || C.tag !== 5 && C.tag !== 6) && (C = null)) : (p = null, C = u), p !== C)) {
                    if (x = ed, b = "onMouseLeave", v = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (x = nd, b = "onPointerLeave", v = "onPointerEnter", h = "pointer"), w = p == null ? g : Er(p), y = C == null ? g : Er(C), g = new x(b, h + "leave", p, n, f), g.target = w, g.relatedTarget = y, b = null, Kn(f) === u && (x = new x(v, h + "enter", C, n, f), x.target = y, x.relatedTarget = w, b = x), w = b, p && C) t: {
                        for (x = p, v = C, h = 0, y = x; y; y = xr(y)) h++;
                        for (y = 0, b = v; b; b = xr(b)) y++;
                        for (; 0 < h - y;) x = xr(x),
                        h--;
                        for (; 0 < y - h;) v = xr(v),
                        y--;
                        for (; h--;) {
                            if (x === v || v !== null && x === v.alternate) break t;
                            x = xr(x), v = xr(v)
                        }
                        x = null
                    }
                    else x = null;
                    p !== null && pd(m, g, p, x, !1), C !== null && w !== null && pd(m, w, C, x, !0)
                }
            }
            e: {
                if (g = u ? Er(u) : window, p = g.nodeName && g.nodeName.toLowerCase(), p === "select" || p === "input" && g.type === "file") var P = Gv;
                else if (sd(g))
                    if (Up) P = qv;
                    else {
                        P = Kv;
                        var E = Qv
                    }
                else(p = g.nodeName) && p.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (P = Xv);
                if (P && (P = P(e, u))) {
                    Ip(m, P, n, f);
                    break e
                }
                E && E(e, g, u),
                e === "focusout" && (E = g._wrapperState) && E.controlled && g.type === "number" && ll(g, "number", g.value)
            }
            switch (E = u ? Er(u) : window, e) {
                case "focusin":
                    (sd(E) || E.contentEditable === "true") && (br = E, wl = u, Lo = null);
                    break;
                case "focusout":
                    Lo = wl = br = null;
                    break;
                case "mousedown":
                    Sl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Sl = !1, cd(m, n, f);
                    break;
                case "selectionchange":
                    if (Zv) break;
                case "keydown":
                case "keyup":
                    cd(m, n, f)
            }
            var k;
            if (Au) e: {
                switch (e) {
                    case "compositionstart":
                        var V = "onCompositionStart";
                        break e;
                    case "compositionend":
                        V = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        V = "onCompositionUpdate";
                        break e
                }
                V = void 0
            }
            else Cr ? _p(e, n) && (V = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (V = "onCompositionStart");V && (Op && n.locale !== "ko" && (Cr || V !== "onCompositionStart" ? V === "onCompositionEnd" && Cr && (k = Mp()) : (Cn = f, ju = "value" in Cn ? Cn.value : Cn.textContent, Cr = !0)), E = di(u, V), 0 < E.length && (V = new td(V, e, null, n, f), m.push({
                event: V,
                listeners: E
            }), k ? V.data = k : (k = Dp(n), k !== null && (V.data = k)))),
            (k = Fv ? $v(e, n) : Bv(e, n)) && (u = di(u, "onBeforeInput"), 0 < u.length && (f = new td("onBeforeInput", "beforeinput", null, n, f), m.push({
                event: f,
                listeners: u
            }), f.data = k))
        }
        Xp(m, t)
    })
}

function Ko(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function di(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            s = o.stateNode;
        o.tag === 5 && s !== null && (o = s, s = Fo(e, n), s != null && r.unshift(Ko(e, s, o)), s = Fo(e, t), s != null && r.push(Ko(e, s, o))), e = e.return
    }
    return r
}

function xr(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function pd(e, t, n, r, o) {
    for (var s = t._reactName, i = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, o ? (l = Fo(n, s), l != null && i.unshift(Ko(n, l, a))) : o || (l = Fo(n, s), l != null && i.push(Ko(n, l, a)))), n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var r2 = /\r\n?/g,
    o2 = /\u0000|\uFFFD/g;

function md(e) {
    return (typeof e == "string" ? e : "" + e).replace(r2, `
`).replace(o2, "")
}

function Rs(e, t, n) {
    if (t = md(t), md(e) !== t && n) throw Error(L(425))
}

function fi() {}
var Cl = null,
    bl = null;

function Pl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var El = typeof setTimeout == "function" ? setTimeout : void 0,
    s2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    hd = typeof Promise == "function" ? Promise : void 0,
    i2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof hd < "u" ? function(e) {
        return hd.resolve(null).then(e).catch(a2)
    } : El;

function a2(e) {
    setTimeout(function() {
        throw e
    })
}

function Da(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), Ho(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Ho(t)
}

function Tn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function gd(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var io = Math.random().toString(36).slice(2),
    At = "__reactFiber$" + io,
    Xo = "__reactProps$" + io,
    qt = "__reactContainer$" + io,
    kl = "__reactEvents$" + io,
    l2 = "__reactListeners$" + io,
    u2 = "__reactHandles$" + io;

function Kn(e) {
    var t = e[At];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[qt] || n[At]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = gd(e); e !== null;) {
                    if (n = e[At]) return n;
                    e = gd(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ds(e) {
    return e = e[At] || e[qt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Er(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(L(33))
}

function $i(e) {
    return e[Xo] || null
}
var Nl = [],
    kr = -1;

function Un(e) {
    return {
        current: e
    }
}

function ie(e) {
    0 > kr || (e.current = Nl[kr], Nl[kr] = null, kr--)
}

function re(e, t) {
    kr++, Nl[kr] = e.current, e.current = t
}
var Mn = {},
    Le = Un(Mn),
    Be = Un(!1),
    sr = Mn;

function qr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Mn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        s;
    for (s in n) o[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function He(e) {
    return e = e.childContextTypes, e != null
}

function pi() {
    ie(Be), ie(Le)
}

function vd(e, t, n) {
    if (Le.current !== Mn) throw Error(L(168));
    re(Le, t), re(Be, n)
}

function Yp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(L(108, Qg(e) || "Unknown", o));
    return de({}, n, r)
}

function mi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mn, sr = Le.current, re(Le, e), re(Be, Be.current), !0
}

function yd(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(L(169));
    n ? (e = Yp(e, t, sr), r.__reactInternalMemoizedMergedChildContext = e, ie(Be), ie(Le), re(Le, e)) : ie(Be), re(Be, n)
}
var Ht = null,
    Bi = !1,
    Ia = !1;

function Jp(e) {
    Ht === null ? Ht = [e] : Ht.push(e)
}

function c2(e) {
    Bi = !0, Jp(e)
}

function zn() {
    if (!Ia && Ht !== null) {
        Ia = !0;
        var e = 0,
            t = te;
        try {
            var n = Ht;
            for (te = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Ht = null, Bi = !1
        } catch (o) {
            throw Ht !== null && (Ht = Ht.slice(e + 1)), bp(Eu, zn), o
        } finally {
            te = t, Ia = !1
        }
    }
    return null
}
var Nr = [],
    Tr = 0,
    hi = null,
    gi = 0,
    ot = [],
    st = 0,
    ir = null,
    Gt = 1,
    Qt = "";

function Wn(e, t) {
    Nr[Tr++] = gi, Nr[Tr++] = hi, hi = e, gi = t
}

function Zp(e, t, n) {
    ot[st++] = Gt, ot[st++] = Qt, ot[st++] = ir, ir = e;
    var r = Gt;
    e = Qt;
    var o = 32 - St(r) - 1;
    r &= ~(1 << o), n += 1;
    var s = 32 - St(t) + o;
    if (30 < s) {
        var i = o - o % 5;
        s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Gt = 1 << 32 - St(t) + o | n << o | r, Qt = s + e
    } else Gt = 1 << s | n << o | r, Qt = e
}

function Mu(e) {
    e.return !== null && (Wn(e, 1), Zp(e, 1, 0))
}

function Ou(e) {
    for (; e === hi;) hi = Nr[--Tr], Nr[Tr] = null, gi = Nr[--Tr], Nr[Tr] = null;
    for (; e === ir;) ir = ot[--st], ot[st] = null, Qt = ot[--st], ot[st] = null, Gt = ot[--st], ot[st] = null
}
var qe = null,
    Xe = null,
    le = !1,
    wt = null;

function em(e, t) {
    var n = it(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function xd(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qe = e, Xe = Tn(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qe = e, Xe = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ir !== null ? {
                id: Gt,
                overflow: Qt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = it(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qe = e, Xe = null, !0) : !1;
        default:
            return !1
    }
}

function Tl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function jl(e) {
    if (le) {
        var t = Xe;
        if (t) {
            var n = t;
            if (!xd(e, t)) {
                if (Tl(e)) throw Error(L(418));
                t = Tn(n.nextSibling);
                var r = qe;
                t && xd(e, t) ? em(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, qe = e)
            }
        } else {
            if (Tl(e)) throw Error(L(418));
            e.flags = e.flags & -4097 | 2, le = !1, qe = e
        }
    }
}

function wd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    qe = e
}

function Vs(e) {
    if (e !== qe) return !1;
    if (!le) return wd(e), le = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Pl(e.type, e.memoizedProps)), t && (t = Xe)) {
        if (Tl(e)) throw tm(), Error(L(418));
        for (; t;) em(e, t), t = Tn(t.nextSibling)
    }
    if (wd(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(L(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Xe = Tn(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Xe = null
        }
    } else Xe = qe ? Tn(e.stateNode.nextSibling) : null;
    return !0
}

function tm() {
    for (var e = Xe; e;) e = Tn(e.nextSibling)
}

function Yr() {
    Xe = qe = null, le = !1
}

function _u(e) {
    wt === null ? wt = [e] : wt.push(e)
}
var d2 = tn.ReactCurrentBatchConfig;

function xo(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(L(309));
                var r = n.stateNode
            }
            if (!r) throw Error(L(147, e));
            var o = r,
                s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
                var a = o.refs;
                i === null ? delete a[s] : a[s] = i
            }, t._stringRef = s, t)
        }
        if (typeof e != "string") throw Error(L(284));
        if (!n._owner) throw Error(L(290, e))
    }
    return e
}

function As(e, t) {
    throw e = Object.prototype.toString.call(t), Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Sd(e) {
    var t = e._init;
    return t(e._payload)
}

function nm(e) {
    function t(v, h) {
        if (e) {
            var y = v.deletions;
            y === null ? (v.deletions = [h], v.flags |= 16) : y.push(h)
        }
    }

    function n(v, h) {
        if (!e) return null;
        for (; h !== null;) t(v, h), h = h.sibling;
        return null
    }

    function r(v, h) {
        for (v = new Map; h !== null;) h.key !== null ? v.set(h.key, h) : v.set(h.index, h), h = h.sibling;
        return v
    }

    function o(v, h) {
        return v = An(v, h), v.index = 0, v.sibling = null, v
    }

    function s(v, h, y) {
        return v.index = y, e ? (y = v.alternate, y !== null ? (y = y.index, y < h ? (v.flags |= 2, h) : y) : (v.flags |= 2, h)) : (v.flags |= 1048576, h)
    }

    function i(v) {
        return e && v.alternate === null && (v.flags |= 2), v
    }

    function a(v, h, y, b) {
        return h === null || h.tag !== 6 ? (h = Wa(y, v.mode, b), h.return = v, h) : (h = o(h, y), h.return = v, h)
    }

    function l(v, h, y, b) {
        var P = y.type;
        return P === Sr ? f(v, h, y.props.children, b, y.key) : h !== null && (h.elementType === P || typeof P == "object" && P !== null && P.$$typeof === pn && Sd(P) === h.type) ? (b = o(h, y.props), b.ref = xo(v, h, y), b.return = v, b) : (b = ei(y.type, y.key, y.props, null, v.mode, b), b.ref = xo(v, h, y), b.return = v, b)
    }

    function u(v, h, y, b) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = Ga(y, v.mode, b), h.return = v, h) : (h = o(h, y.children || []), h.return = v, h)
    }

    function f(v, h, y, b, P) {
        return h === null || h.tag !== 7 ? (h = or(y, v.mode, b, P), h.return = v, h) : (h = o(h, y), h.return = v, h)
    }

    function m(v, h, y) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = Wa("" + h, v.mode, y), h.return = v, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Ss:
                    return y = ei(h.type, h.key, h.props, null, v.mode, y), y.ref = xo(v, null, h), y.return = v, y;
                case wr:
                    return h = Ga(h, v.mode, y), h.return = v, h;
                case pn:
                    var b = h._init;
                    return m(v, b(h._payload), y)
            }
            if (Eo(h) || mo(h)) return h = or(h, v.mode, y, null), h.return = v, h;
            As(v, h)
        }
        return null
    }

    function g(v, h, y, b) {
        var P = h !== null ? h.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number") return P !== null ? null : a(v, h, "" + y, b);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Ss:
                    return y.key === P ? l(v, h, y, b) : null;
                case wr:
                    return y.key === P ? u(v, h, y, b) : null;
                case pn:
                    return P = y._init, g(v, h, P(y._payload), b)
            }
            if (Eo(y) || mo(y)) return P !== null ? null : f(v, h, y, b, null);
            As(v, y)
        }
        return null
    }

    function p(v, h, y, b, P) {
        if (typeof b == "string" && b !== "" || typeof b == "number") return v = v.get(y) || null, a(h, v, "" + b, P);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
                case Ss:
                    return v = v.get(b.key === null ? y : b.key) || null, l(h, v, b, P);
                case wr:
                    return v = v.get(b.key === null ? y : b.key) || null, u(h, v, b, P);
                case pn:
                    var E = b._init;
                    return p(v, h, y, E(b._payload), P)
            }
            if (Eo(b) || mo(b)) return v = v.get(y) || null, f(h, v, b, P, null);
            As(h, b)
        }
        return null
    }

    function C(v, h, y, b) {
        for (var P = null, E = null, k = h, V = h = 0, O = null; k !== null && V < y.length; V++) {
            k.index > V ? (O = k, k = null) : O = k.sibling;
            var M = g(v, k, y[V], b);
            if (M === null) {
                k === null && (k = O);
                break
            }
            e && k && M.alternate === null && t(v, k), h = s(M, h, V), E === null ? P = M : E.sibling = M, E = M, k = O
        }
        if (V === y.length) return n(v, k), le && Wn(v, V), P;
        if (k === null) {
            for (; V < y.length; V++) k = m(v, y[V], b), k !== null && (h = s(k, h, V), E === null ? P = k : E.sibling = k, E = k);
            return le && Wn(v, V), P
        }
        for (k = r(v, k); V < y.length; V++) O = p(k, v, V, y[V], b), O !== null && (e && O.alternate !== null && k.delete(O.key === null ? V : O.key), h = s(O, h, V), E === null ? P = O : E.sibling = O, E = O);
        return e && k.forEach(function(F) {
            return t(v, F)
        }), le && Wn(v, V), P
    }

    function x(v, h, y, b) {
        var P = mo(y);
        if (typeof P != "function") throw Error(L(150));
        if (y = P.call(y), y == null) throw Error(L(151));
        for (var E = P = null, k = h, V = h = 0, O = null, M = y.next(); k !== null && !M.done; V++, M = y.next()) {
            k.index > V ? (O = k, k = null) : O = k.sibling;
            var F = g(v, k, M.value, b);
            if (F === null) {
                k === null && (k = O);
                break
            }
            e && k && F.alternate === null && t(v, k), h = s(F, h, V), E === null ? P = F : E.sibling = F, E = F, k = O
        }
        if (M.done) return n(v, k), le && Wn(v, V), P;
        if (k === null) {
            for (; !M.done; V++, M = y.next()) M = m(v, M.value, b), M !== null && (h = s(M, h, V), E === null ? P = M : E.sibling = M, E = M);
            return le && Wn(v, V), P
        }
        for (k = r(v, k); !M.done; V++, M = y.next()) M = p(k, v, V, M.value, b), M !== null && (e && M.alternate !== null && k.delete(M.key === null ? V : M.key), h = s(M, h, V), E === null ? P = M : E.sibling = M, E = M);
        return e && k.forEach(function(I) {
            return t(v, I)
        }), le && Wn(v, V), P
    }

    function w(v, h, y, b) {
        if (typeof y == "object" && y !== null && y.type === Sr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Ss:
                    e: {
                        for (var P = y.key, E = h; E !== null;) {
                            if (E.key === P) {
                                if (P = y.type, P === Sr) {
                                    if (E.tag === 7) {
                                        n(v, E.sibling), h = o(E, y.props.children), h.return = v, v = h;
                                        break e
                                    }
                                } else if (E.elementType === P || typeof P == "object" && P !== null && P.$$typeof === pn && Sd(P) === E.type) {
                                    n(v, E.sibling), h = o(E, y.props), h.ref = xo(v, E, y), h.return = v, v = h;
                                    break e
                                }
                                n(v, E);
                                break
                            } else t(v, E);
                            E = E.sibling
                        }
                        y.type === Sr ? (h = or(y.props.children, v.mode, b, y.key), h.return = v, v = h) : (b = ei(y.type, y.key, y.props, null, v.mode, b), b.ref = xo(v, h, y), b.return = v, v = b)
                    }
                    return i(v);
                case wr:
                    e: {
                        for (E = y.key; h !== null;) {
                            if (h.key === E)
                                if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                                    n(v, h.sibling), h = o(h, y.children || []), h.return = v, v = h;
                                    break e
                                } else {
                                    n(v, h);
                                    break
                                }
                            else t(v, h);
                            h = h.sibling
                        }
                        h = Ga(y, v.mode, b),
                        h.return = v,
                        v = h
                    }
                    return i(v);
                case pn:
                    return E = y._init, w(v, h, E(y._payload), b)
            }
            if (Eo(y)) return C(v, h, y, b);
            if (mo(y)) return x(v, h, y, b);
            As(v, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (n(v, h.sibling), h = o(h, y), h.return = v, v = h) : (n(v, h), h = Wa(y, v.mode, b), h.return = v, v = h), i(v)) : n(v, h)
    }
    return w
}
var Jr = nm(!0),
    rm = nm(!1),
    vi = Un(null),
    yi = null,
    jr = null,
    Du = null;

function Iu() {
    Du = jr = yi = null
}

function Uu(e) {
    var t = vi.current;
    ie(vi), e._currentValue = t
}

function Rl(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function _r(e, t) {
    yi = e, Du = jr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && ($e = !0), e.firstContext = null)
}

function lt(e) {
    var t = e._currentValue;
    if (Du !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, jr === null) {
            if (yi === null) throw Error(L(308));
            jr = e, yi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else jr = jr.next = e;
    return t
}
var Xn = null;

function zu(e) {
    Xn === null ? Xn = [e] : Xn.push(e)
}

function om(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, zu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Yt(e, r)
}

function Yt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var mn = !1;

function Fu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function sm(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Kt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function jn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, J & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Yt(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, zu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Yt(e, n)
}

function Ks(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ku(e, n)
    }
}

function Cd(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            s = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = i : s = s.next = i, n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function xi(e, t, n, r) {
    var o = e.updateQueue;
    mn = !1;
    var s = o.firstBaseUpdate,
        i = o.lastBaseUpdate,
        a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, i === null ? s = u : i.next = u, i = l;
        var f = e.alternate;
        f !== null && (f = f.updateQueue, a = f.lastBaseUpdate, a !== i && (a === null ? f.firstBaseUpdate = u : a.next = u, f.lastBaseUpdate = l))
    }
    if (s !== null) {
        var m = o.baseState;
        i = 0, f = u = l = null, a = s;
        do {
            var g = a.lane,
                p = a.eventTime;
            if ((r & g) === g) {
                f !== null && (f = f.next = {
                    eventTime: p,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var C = e,
                        x = a;
                    switch (g = t, p = n, x.tag) {
                        case 1:
                            if (C = x.payload, typeof C == "function") {
                                m = C.call(p, m, g);
                                break e
                            }
                            m = C;
                            break e;
                        case 3:
                            C.flags = C.flags & -65537 | 128;
                        case 0:
                            if (C = x.payload, g = typeof C == "function" ? C.call(p, m, g) : C, g == null) break e;
                            m = de({}, m, g);
                            break e;
                        case 2:
                            mn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, g = o.effects, g === null ? o.effects = [a] : g.push(a))
            } else p = {
                eventTime: p,
                lane: g,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, f === null ? (u = f = p, l = m) : f = f.next = p, i |= g;
            if (a = a.next, a === null) {
                if (a = o.shared.pending, a === null) break;
                g = a, a = g.next, g.next = null, o.lastBaseUpdate = g, o.shared.pending = null
            }
        } while (!0);
        if (f === null && (l = m), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
            o = t;
            do i |= o.lane, o = o.next; while (o !== t)
        } else s === null && (o.shared.lanes = 0);
        lr |= i, e.lanes = i, e.memoizedState = m
    }
}

function bd(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(L(191, o));
                o.call(r)
            }
        }
}
var fs = {},
    Ot = Un(fs),
    qo = Un(fs),
    Yo = Un(fs);

function qn(e) {
    if (e === fs) throw Error(L(174));
    return e
}

function $u(e, t) {
    switch (re(Yo, t), re(qo, e), re(Ot, fs), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : cl(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = cl(t, e)
    }
    ie(Ot), re(Ot, t)
}

function Zr() {
    ie(Ot), ie(qo), ie(Yo)
}

function im(e) {
    qn(Yo.current);
    var t = qn(Ot.current),
        n = cl(t, e.type);
    t !== n && (re(qo, e), re(Ot, n))
}

function Bu(e) {
    qo.current === e && (ie(Ot), ie(qo))
}
var ue = Un(0);

function wi(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ua = [];

function Hu() {
    for (var e = 0; e < Ua.length; e++) Ua[e]._workInProgressVersionPrimary = null;
    Ua.length = 0
}
var Xs = tn.ReactCurrentDispatcher,
    za = tn.ReactCurrentBatchConfig,
    ar = 0,
    ce = null,
    xe = null,
    Ce = null,
    Si = !1,
    Mo = !1,
    Jo = 0,
    f2 = 0;

function je() {
    throw Error(L(321))
}

function Wu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!bt(e[n], t[n])) return !1;
    return !0
}

function Gu(e, t, n, r, o, s) {
    if (ar = s, ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Xs.current = e === null || e.memoizedState === null ? g2 : v2, e = n(r, o), Mo) {
        s = 0;
        do {
            if (Mo = !1, Jo = 0, 25 <= s) throw Error(L(301));
            s += 1, Ce = xe = null, t.updateQueue = null, Xs.current = y2, e = n(r, o)
        } while (Mo)
    }
    if (Xs.current = Ci, t = xe !== null && xe.next !== null, ar = 0, Ce = xe = ce = null, Si = !1, t) throw Error(L(300));
    return e
}

function Qu() {
    var e = Jo !== 0;
    return Jo = 0, e
}

function Tt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ce === null ? ce.memoizedState = Ce = e : Ce = Ce.next = e, Ce
}

function ut() {
    if (xe === null) {
        var e = ce.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = xe.next;
    var t = Ce === null ? ce.memoizedState : Ce.next;
    if (t !== null) Ce = t, xe = e;
    else {
        if (e === null) throw Error(L(310));
        xe = e, e = {
            memoizedState: xe.memoizedState,
            baseState: xe.baseState,
            baseQueue: xe.baseQueue,
            queue: xe.queue,
            next: null
        }, Ce === null ? ce.memoizedState = Ce = e : Ce = Ce.next = e
    }
    return Ce
}

function Zo(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Fa(e) {
    var t = ut(),
        n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = xe,
        o = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = s.next, s.next = i
        }
        r.baseQueue = o = s, n.pending = null
    }
    if (o !== null) {
        s = o.next, r = r.baseState;
        var a = i = null,
            l = null,
            u = s;
        do {
            var f = u.lane;
            if ((ar & f) === f) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var m = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = m, i = r) : l = l.next = m, ce.lanes |= f, lr |= f
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? i = r : l.next = a, bt(r, t.memoizedState) || ($e = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do s = o.lane, ce.lanes |= s, lr |= s, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function $a(e) {
    var t = ut(),
        n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = o = o.next;
        do s = e(s, i.action), i = i.next; while (i !== o);
        bt(s, t.memoizedState) || ($e = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
    }
    return [s, r]
}

function am() {}

function lm(e, t) {
    var n = ce,
        r = ut(),
        o = t(),
        s = !bt(r.memoizedState, o);
    if (s && (r.memoizedState = o, $e = !0), r = r.queue, Ku(dm.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Ce !== null && Ce.memoizedState.tag & 1) {
        if (n.flags |= 2048, es(9, cm.bind(null, n, r, o, t), void 0, null), be === null) throw Error(L(349));
        ar & 30 || um(n, t, o)
    }
    return o
}

function um(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = ce.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function cm(e, t, n, r) {
    t.value = n, t.getSnapshot = r, fm(t) && pm(e)
}

function dm(e, t, n) {
    return n(function() {
        fm(t) && pm(e)
    })
}

function fm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !bt(e, n)
    } catch {
        return !0
    }
}

function pm(e) {
    var t = Yt(e, 1);
    t !== null && Ct(t, e, 1, -1)
}

function Pd(e) {
    var t = Tt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zo,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = h2.bind(null, ce, e), [t.memoizedState, e]
}

function es(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ce.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function mm() {
    return ut().memoizedState
}

function qs(e, t, n, r) {
    var o = Tt();
    ce.flags |= e, o.memoizedState = es(1 | t, n, void 0, r === void 0 ? null : r)
}

function Hi(e, t, n, r) {
    var o = ut();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (xe !== null) {
        var i = xe.memoizedState;
        if (s = i.destroy, r !== null && Wu(r, i.deps)) {
            o.memoizedState = es(t, n, s, r);
            return
        }
    }
    ce.flags |= e, o.memoizedState = es(1 | t, n, s, r)
}

function Ed(e, t) {
    return qs(8390656, 8, e, t)
}

function Ku(e, t) {
    return Hi(2048, 8, e, t)
}

function hm(e, t) {
    return Hi(4, 2, e, t)
}

function gm(e, t) {
    return Hi(4, 4, e, t)
}

function vm(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function ym(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Hi(4, 4, vm.bind(null, t, e), n)
}

function Xu() {}

function xm(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function wm(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Wu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Sm(e, t, n) {
    return ar & 21 ? (bt(n, t) || (n = kp(), ce.lanes |= n, lr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, $e = !0), e.memoizedState = n)
}

function p2(e, t) {
    var n = te;
    te = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = za.transition;
    za.transition = {};
    try {
        e(!1), t()
    } finally {
        te = n, za.transition = r
    }
}

function Cm() {
    return ut().memoizedState
}

function m2(e, t, n) {
    var r = Vn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, bm(e)) Pm(t, n);
    else if (n = om(e, t, n, r), n !== null) {
        var o = De();
        Ct(n, e, r, o), Em(n, t, r)
    }
}

function h2(e, t, n) {
    var r = Vn(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (bm(e)) Pm(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
            var i = t.lastRenderedState,
                a = s(i, n);
            if (o.hasEagerState = !0, o.eagerState = a, bt(a, i)) {
                var l = t.interleaved;
                l === null ? (o.next = o, zu(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = om(e, t, o, r), n !== null && (o = De(), Ct(n, e, r, o), Em(n, t, r))
    }
}

function bm(e) {
    var t = e.alternate;
    return e === ce || t !== null && t === ce
}

function Pm(e, t) {
    Mo = Si = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Em(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ku(e, n)
    }
}
var Ci = {
        readContext: lt,
        useCallback: je,
        useContext: je,
        useEffect: je,
        useImperativeHandle: je,
        useInsertionEffect: je,
        useLayoutEffect: je,
        useMemo: je,
        useReducer: je,
        useRef: je,
        useState: je,
        useDebugValue: je,
        useDeferredValue: je,
        useTransition: je,
        useMutableSource: je,
        useSyncExternalStore: je,
        useId: je,
        unstable_isNewReconciler: !1
    },
    g2 = {
        readContext: lt,
        useCallback: function(e, t) {
            return Tt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: lt,
        useEffect: Ed,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, qs(4194308, 4, vm.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return qs(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return qs(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Tt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Tt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = m2.bind(null, ce, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Tt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Pd,
        useDebugValue: Xu,
        useDeferredValue: function(e) {
            return Tt().memoizedState = e
        },
        useTransition: function() {
            var e = Pd(!1),
                t = e[0];
            return e = p2.bind(null, e[1]), Tt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ce,
                o = Tt();
            if (le) {
                if (n === void 0) throw Error(L(407));
                n = n()
            } else {
                if (n = t(), be === null) throw Error(L(349));
                ar & 30 || um(r, t, n)
            }
            o.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return o.queue = s, Ed(dm.bind(null, r, s, e), [e]), r.flags |= 2048, es(9, cm.bind(null, r, s, n, t), void 0, null), n
        },
        useId: function() {
            var e = Tt(),
                t = be.identifierPrefix;
            if (le) {
                var n = Qt,
                    r = Gt;
                n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jo++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = f2++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    v2 = {
        readContext: lt,
        useCallback: xm,
        useContext: lt,
        useEffect: Ku,
        useImperativeHandle: ym,
        useInsertionEffect: hm,
        useLayoutEffect: gm,
        useMemo: wm,
        useReducer: Fa,
        useRef: mm,
        useState: function() {
            return Fa(Zo)
        },
        useDebugValue: Xu,
        useDeferredValue: function(e) {
            var t = ut();
            return Sm(t, xe.memoizedState, e)
        },
        useTransition: function() {
            var e = Fa(Zo)[0],
                t = ut().memoizedState;
            return [e, t]
        },
        useMutableSource: am,
        useSyncExternalStore: lm,
        useId: Cm,
        unstable_isNewReconciler: !1
    },
    y2 = {
        readContext: lt,
        useCallback: xm,
        useContext: lt,
        useEffect: Ku,
        useImperativeHandle: ym,
        useInsertionEffect: hm,
        useLayoutEffect: gm,
        useMemo: wm,
        useReducer: $a,
        useRef: mm,
        useState: function() {
            return $a(Zo)
        },
        useDebugValue: Xu,
        useDeferredValue: function(e) {
            var t = ut();
            return xe === null ? t.memoizedState = e : Sm(t, xe.memoizedState, e)
        },
        useTransition: function() {
            var e = $a(Zo)[0],
                t = ut().memoizedState;
            return [e, t]
        },
        useMutableSource: am,
        useSyncExternalStore: lm,
        useId: Cm,
        unstable_isNewReconciler: !1
    };

function ht(e, t) {
    if (e && e.defaultProps) {
        t = de({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Vl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : de({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Wi = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? fr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = De(),
            o = Vn(e),
            s = Kt(r, o);
        s.payload = t, n != null && (s.callback = n), t = jn(e, s, o), t !== null && (Ct(t, e, o, r), Ks(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = De(),
            o = Vn(e),
            s = Kt(r, o);
        s.tag = 1, s.payload = t, n != null && (s.callback = n), t = jn(e, s, o), t !== null && (Ct(t, e, o, r), Ks(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = De(),
            r = Vn(e),
            o = Kt(n, r);
        o.tag = 2, t != null && (o.callback = t), t = jn(e, o, r), t !== null && (Ct(t, e, r, n), Ks(t, e, r))
    }
};

function kd(e, t, n, r, o, s, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !Go(n, r) || !Go(o, s) : !0
}

function km(e, t, n) {
    var r = !1,
        o = Mn,
        s = t.contextType;
    return typeof s == "object" && s !== null ? s = lt(s) : (o = He(t) ? sr : Le.current, r = t.contextTypes, s = (r = r != null) ? qr(e, o) : Mn), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Wi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t
}

function Nd(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Wi.enqueueReplaceState(t, t.state, null)
}

function Al(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, Fu(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = lt(s) : (s = He(t) ? sr : Le.current, o.context = qr(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Vl(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Wi.enqueueReplaceState(o, o.state, null), xi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function eo(e, t) {
    try {
        var n = "",
            r = t;
        do n += Gg(r), r = r.return; while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function Ba(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function Ll(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var x2 = typeof WeakMap == "function" ? WeakMap : Map;

function Nm(e, t, n) {
    n = Kt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Pi || (Pi = !0, Bl = r), Ll(e, t)
    }, n
}

function Tm(e, t, n) {
    n = Kt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            Ll(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Ll(e, t), typeof r != "function" && (Rn === null ? Rn = new Set([this]) : Rn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }), n
}

function Td(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new x2;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = L2.bind(null, e, t, n), t.then(e, e))
}

function jd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Rd(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Kt(-1, 1), t.tag = 2, jn(n, t, 1))), n.lanes |= 1), e)
}
var w2 = tn.ReactCurrentOwner,
    $e = !1;

function Oe(e, t, n, r) {
    t.child = e === null ? rm(t, null, n, r) : Jr(t, e.child, n, r)
}

function Vd(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return _r(t, o), r = Gu(e, t, n, r, s, o), n = Qu(), e !== null && !$e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Jt(e, t, o)) : (le && n && Mu(t), t.flags |= 1, Oe(e, t, r, o), t.child)
}

function Ad(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !rc(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, jm(e, t, s, r, o)) : (e = ei(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (s = e.child, !(e.lanes & o)) {
        var i = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Go, n(i, r) && e.ref === t.ref) return Jt(e, t, o)
    }
    return t.flags |= 1, e = An(s, r), e.ref = t.ref, e.return = t, t.child = e
}

function jm(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Go(s, r) && e.ref === t.ref)
            if ($e = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && ($e = !0);
            else return t.lanes = e.lanes, Jt(e, t, o)
    }
    return Ml(e, t, n, r, o)
}

function Rm(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, re(Vr, Qe), Qe |= n;
        else {
            if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, re(Vr, Qe), Qe |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = s !== null ? s.baseLanes : n, re(Vr, Qe), Qe |= r
        }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, re(Vr, Qe), Qe |= r;
    return Oe(e, t, o, n), t.child
}

function Vm(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ml(e, t, n, r, o) {
    var s = He(n) ? sr : Le.current;
    return s = qr(t, s), _r(t, o), n = Gu(e, t, n, r, s, o), r = Qu(), e !== null && !$e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Jt(e, t, o)) : (le && r && Mu(t), t.flags |= 1, Oe(e, t, n, o), t.child)
}

function Ld(e, t, n, r, o) {
    if (He(n)) {
        var s = !0;
        mi(t)
    } else s = !1;
    if (_r(t, o), t.stateNode === null) Ys(e, t), km(t, n, r), Al(t, n, r, o), r = !0;
    else if (e === null) {
        var i = t.stateNode,
            a = t.memoizedProps;
        i.props = a;
        var l = i.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = lt(u) : (u = He(n) ? sr : Le.current, u = qr(t, u));
        var f = n.getDerivedStateFromProps,
            m = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== u) && Nd(t, i, r, u), mn = !1;
        var g = t.memoizedState;
        i.state = g, xi(t, r, i, o), l = t.memoizedState, a !== r || g !== l || Be.current || mn ? (typeof f == "function" && (Vl(t, n, f, r), l = t.memoizedState), (a = mn || kd(t, n, a, r, g, l, u)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = u, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, sm(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : ht(t.type, a), i.props = u, m = t.pendingProps, g = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = lt(l) : (l = He(n) ? sr : Le.current, l = qr(t, l));
        var p = n.getDerivedStateFromProps;
        (f = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== m || g !== l) && Nd(t, i, r, l), mn = !1, g = t.memoizedState, i.state = g, xi(t, r, i, o);
        var C = t.memoizedState;
        a !== m || g !== C || Be.current || mn ? (typeof p == "function" && (Vl(t, n, p, r), C = t.memoizedState), (u = mn || kd(t, n, u, r, g, C, l) || !1) ? (f || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, C, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, C, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), i.props = r, i.state = C, i.context = l, r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Ol(e, t, n, r, s, o)
}

function Ol(e, t, n, r, o, s) {
    Vm(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return o && yd(t, n, !1), Jt(e, t, s);
    r = t.stateNode, w2.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = Jr(t, e.child, null, s), t.child = Jr(t, null, a, s)) : Oe(e, t, a, s), t.memoizedState = r.state, o && yd(t, n, !0), t.child
}

function Am(e) {
    var t = e.stateNode;
    t.pendingContext ? vd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vd(e, t.context, !1), $u(e, t.containerInfo)
}

function Md(e, t, n, r, o) {
    return Yr(), _u(o), t.flags |= 256, Oe(e, t, n, r), t.child
}
var _l = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Dl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Lm(e, t, n) {
    var r = t.pendingProps,
        o = ue.current,
        s = !1,
        i = (t.flags & 128) !== 0,
        a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), re(ue, o & 1), e === null) return jl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = Ki(i, r, 0, null), e = or(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Dl(n), t.memoizedState = _l, e) : qu(t, i));
    if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return S2(e, t, i, r, a, o, n);
    if (s) {
        s = r.fallback, i = t.mode, o = e.child, a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = An(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? s = An(a, s) : (s = or(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? Dl(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = _l, r
    }
    return s = e.child, e = s.sibling, r = An(s, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function qu(e, t) {
    return t = Ki({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Ls(e, t, n, r) {
    return r !== null && _u(r), Jr(t, e.child, null, n), e = qu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function S2(e, t, n, r, o, s, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Ba(Error(L(422))), Ls(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = Ki({
        mode: "visible",
        children: r.children
    }, o, 0, null), s = or(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Jr(t, e.child, null, i), t.child.memoizedState = Dl(i), t.memoizedState = _l, s);
    if (!(t.mode & 1)) return Ls(e, t, i, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
        return r = a, s = Error(L(419)), r = Ba(s, r, void 0), Ls(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0, $e || a) {
        if (r = be, r !== null) {
            switch (i & -i) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, Yt(e, o), Ct(r, e, o, -1))
        }
        return nc(), r = Ba(Error(L(421))), Ls(e, t, i, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = M2.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, Xe = Tn(o.nextSibling), qe = t, le = !0, wt = null, e !== null && (ot[st++] = Gt, ot[st++] = Qt, ot[st++] = ir, Gt = e.id, Qt = e.overflow, ir = t), t = qu(t, r.children), t.flags |= 4096, t)
}

function Od(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Rl(e.return, t, n)
}

function Ha(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o)
}

function Mm(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        s = r.tail;
    if (Oe(e, t, r.children, n), r = ue.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Od(e, n, t);
            else if (e.tag === 19) Od(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (re(ue, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && wi(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ha(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && wi(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            Ha(t, !0, n, null, s);
            break;
        case "together":
            Ha(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Ys(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Jt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), lr |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(L(153));
    if (t.child !== null) {
        for (e = t.child, n = An(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = An(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function C2(e, t, n) {
    switch (t.tag) {
        case 3:
            Am(t), Yr();
            break;
        case 5:
            im(t);
            break;
        case 1:
            He(t.type) && mi(t);
            break;
        case 4:
            $u(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            re(vi, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (re(ue, ue.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Lm(e, t, n) : (re(ue, ue.current & 1), e = Jt(e, t, n), e !== null ? e.sibling : null);
            re(ue, ue.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Mm(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), re(ue, ue.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Rm(e, t, n)
    }
    return Jt(e, t, n)
}
var Om, Il, _m, Dm;
Om = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Il = function() {};
_m = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, qn(Ot.current);
        var s = null;
        switch (n) {
            case "input":
                o = il(e, o), r = il(e, r), s = [];
                break;
            case "select":
                o = de({}, o, {
                    value: void 0
                }), r = de({}, r, {
                    value: void 0
                }), s = [];
                break;
            case "textarea":
                o = ul(e, o), r = ul(e, r), s = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = fi)
        }
        dl(n, r);
        var i;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Uo.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (i in a) !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in l) l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}), n[i] = l[i])
                    } else n || (s || (s = []), s.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Uo.hasOwnProperty(u) ? (l != null && u === "onScroll" && se("scroll", e), s || a === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Dm = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function wo(e, t) {
    if (!le) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function b2(e, t, n) {
    var r = t.pendingProps;
    switch (Ou(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Re(t), null;
        case 1:
            return He(t.type) && pi(), Re(t), null;
        case 3:
            return r = t.stateNode, Zr(), ie(Be), ie(Le), Hu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Vs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wt !== null && (Gl(wt), wt = null))), Il(e, t), Re(t), null;
        case 5:
            Bu(t);
            var o = qn(Yo.current);
            if (n = t.type, e !== null && t.stateNode != null) _m(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(L(166));
                    return Re(t), null
                }
                if (e = qn(Ot.current), Vs(t)) {
                    r = t.stateNode, n = t.type;
                    var s = t.memoizedProps;
                    switch (r[At] = t, r[Xo] = s, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            se("cancel", r), se("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            se("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < No.length; o++) se(No[o], r);
                            break;
                        case "source":
                            se("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            se("error", r), se("load", r);
                            break;
                        case "details":
                            se("toggle", r);
                            break;
                        case "input":
                            Hc(r, s), se("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            }, se("invalid", r);
                            break;
                        case "textarea":
                            Gc(r, s), se("invalid", r)
                    }
                    dl(n, s), o = null;
                    for (var i in s)
                        if (s.hasOwnProperty(i)) {
                            var a = s[i];
                            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Rs(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Rs(r.textContent, a, e), o = ["children", "" + a]) : Uo.hasOwnProperty(i) && a != null && i === "onScroll" && se("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Cs(r), Wc(r, s, !0);
                            break;
                        case "textarea":
                            Cs(r), Qc(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = fi)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = dp(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[At] = t, e[Xo] = r, Om(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = fl(n, r), n) {
                            case "dialog":
                                se("cancel", e), se("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                se("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < No.length; o++) se(No[o], e);
                                o = r;
                                break;
                            case "source":
                                se("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                se("error", e), se("load", e), o = r;
                                break;
                            case "details":
                                se("toggle", e), o = r;
                                break;
                            case "input":
                                Hc(e, r), o = il(e, r), se("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = de({}, r, {
                                    value: void 0
                                }), se("invalid", e);
                                break;
                            case "textarea":
                                Gc(e, r), o = ul(e, r), se("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        dl(n, o),
                        a = o;
                        for (s in a)
                            if (a.hasOwnProperty(s)) {
                                var l = a[s];
                                s === "style" ? mp(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && fp(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && zo(e, l) : typeof l == "number" && zo(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Uo.hasOwnProperty(s) ? l != null && s === "onScroll" && se("scroll", e) : l != null && wu(e, s, l, i))
                            }
                        switch (n) {
                            case "input":
                                Cs(e), Wc(e, r, !1);
                                break;
                            case "textarea":
                                Cs(e), Qc(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Ln(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, s = r.value, s != null ? Ar(e, !!r.multiple, s, !1) : r.defaultValue != null && Ar(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = fi)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Re(t), null;
        case 6:
            if (e && t.stateNode != null) Dm(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
                if (n = qn(Yo.current), qn(Ot.current), Vs(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[At] = t, (s = r.nodeValue !== n) && (e = qe, e !== null)) switch (e.tag) {
                        case 3:
                            Rs(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Rs(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    s && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[At] = t, t.stateNode = r
            }
            return Re(t), null;
        case 13:
            if (ie(ue), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (le && Xe !== null && t.mode & 1 && !(t.flags & 128)) tm(), Yr(), t.flags |= 98560, s = !1;
                else if (s = Vs(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!s) throw Error(L(318));
                        if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(L(317));
                        s[At] = t
                    } else Yr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Re(t), s = !1
                } else wt !== null && (Gl(wt), wt = null), s = !0;
                if (!s) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ue.current & 1 ? we === 0 && (we = 3) : nc())), t.updateQueue !== null && (t.flags |= 4), Re(t), null);
        case 4:
            return Zr(), Il(e, t), e === null && Qo(t.stateNode.containerInfo), Re(t), null;
        case 10:
            return Uu(t.type._context), Re(t), null;
        case 17:
            return He(t.type) && pi(), Re(t), null;
        case 19:
            if (ie(ue), s = t.memoizedState, s === null) return Re(t), null;
            if (r = (t.flags & 128) !== 0, i = s.rendering, i === null)
                if (r) wo(s, !1);
                else {
                    if (we !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = wi(e), i !== null) {
                                for (t.flags |= 128, wo(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return re(ue, ue.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && me() > to && (t.flags |= 128, r = !0, wo(s, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = wi(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), wo(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !le) return Re(t), null
                    } else 2 * me() - s.renderingStartTime > to && n !== 1073741824 && (t.flags |= 128, r = !0, wo(s, !1), t.lanes = 4194304);
                s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i)
            }
            return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = me(), t.sibling = null, n = ue.current, re(ue, r ? n & 1 | 2 : n & 1), t) : (Re(t), null);
        case 22:
        case 23:
            return tc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Qe & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(L(156, t.tag))
}

function P2(e, t) {
    switch (Ou(t), t.tag) {
        case 1:
            return He(t.type) && pi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Zr(), ie(Be), ie(Le), Hu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Bu(t), null;
        case 13:
            if (ie(ue), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(L(340));
                Yr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ie(ue), null;
        case 4:
            return Zr(), null;
        case 10:
            return Uu(t.type._context), null;
        case 22:
        case 23:
            return tc(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Ms = !1,
    Ae = !1,
    E2 = typeof WeakSet == "function" ? WeakSet : Set,
    U = null;

function Rr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            pe(e, t, r)
        } else n.current = null
}

function Ul(e, t, n) {
    try {
        n()
    } catch (r) {
        pe(e, t, r)
    }
}
var _d = !1;

function k2(e, t) {
    if (Cl = ui, e = $p(), Lu(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    s = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, s.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    f = 0,
                    m = e,
                    g = null;
                t: for (;;) {
                    for (var p; m !== n || o !== 0 && m.nodeType !== 3 || (a = i + o), m !== s || r !== 0 && m.nodeType !== 3 || (l = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (p = m.firstChild) !== null;) g = m, m = p;
                    for (;;) {
                        if (m === e) break t;
                        if (g === n && ++u === o && (a = i), g === s && ++f === r && (l = i), (p = m.nextSibling) !== null) break;
                        m = g, g = m.parentNode
                    }
                    m = p
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (bl = {
            focusedElem: e,
            selectionRange: n
        }, ui = !1, U = t; U !== null;)
        if (t = U, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, U = e;
        else
            for (; U !== null;) {
                t = U;
                try {
                    var C = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (C !== null) {
                                var x = C.memoizedProps,
                                    w = C.memoizedState,
                                    v = t.stateNode,
                                    h = v.getSnapshotBeforeUpdate(t.elementType === t.type ? x : ht(t.type, x), w);
                                v.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(L(163))
                    }
                } catch (b) {
                    pe(t, t.return, b)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, U = e;
                    break
                }
                U = t.return
            }
    return C = _d, _d = !1, C
}

function Oo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0, s !== void 0 && Ul(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}

function Gi(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function zl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Im(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Im(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[At], delete t[Xo], delete t[kl], delete t[l2], delete t[u2])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Um(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Dd(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Um(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Fl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = fi));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Fl(e, t, n), e = e.sibling; e !== null;) Fl(e, t, n), e = e.sibling
}

function $l(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for ($l(e, t, n), e = e.sibling; e !== null;) $l(e, t, n), e = e.sibling
}
var Pe = null,
    xt = !1;

function un(e, t, n) {
    for (n = n.child; n !== null;) zm(e, t, n), n = n.sibling
}

function zm(e, t, n) {
    if (Mt && typeof Mt.onCommitFiberUnmount == "function") try {
        Mt.onCommitFiberUnmount(Ii, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Ae || Rr(n, t);
        case 6:
            var r = Pe,
                o = xt;
            Pe = null, un(e, t, n), Pe = r, xt = o, Pe !== null && (xt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Pe.removeChild(n.stateNode));
            break;
        case 18:
            Pe !== null && (xt ? (e = Pe, n = n.stateNode, e.nodeType === 8 ? Da(e.parentNode, n) : e.nodeType === 1 && Da(e, n), Ho(e)) : Da(Pe, n.stateNode));
            break;
        case 4:
            r = Pe, o = xt, Pe = n.stateNode.containerInfo, xt = !0, un(e, t, n), Pe = r, xt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ae && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var s = o,
                        i = s.destroy;
                    s = s.tag, i !== void 0 && (s & 2 || s & 4) && Ul(n, t, i), o = o.next
                } while (o !== r)
            }
            un(e, t, n);
            break;
        case 1:
            if (!Ae && (Rr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                pe(n, t, a)
            }
            un(e, t, n);
            break;
        case 21:
            un(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Ae = (r = Ae) || n.memoizedState !== null, un(e, t, n), Ae = r) : un(e, t, n);
            break;
        default:
            un(e, t, n)
    }
}

function Id(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new E2), t.forEach(function(r) {
            var o = O2.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function pt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e,
                    i = t,
                    a = i;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            Pe = a.stateNode, xt = !1;
                            break e;
                        case 3:
                            Pe = a.stateNode.containerInfo, xt = !0;
                            break e;
                        case 4:
                            Pe = a.stateNode.containerInfo, xt = !0;
                            break e
                    }
                    a = a.return
                }
                if (Pe === null) throw Error(L(160));
                zm(s, i, o), Pe = null, xt = !1;
                var l = o.alternate;
                l !== null && (l.return = null), o.return = null
            } catch (u) {
                pe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Fm(t, e), t = t.sibling
}

function Fm(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (pt(t, e), Nt(e), r & 4) {
                try {
                    Oo(3, e, e.return), Gi(3, e)
                } catch (x) {
                    pe(e, e.return, x)
                }
                try {
                    Oo(5, e, e.return)
                } catch (x) {
                    pe(e, e.return, x)
                }
            }
            break;
        case 1:
            pt(t, e), Nt(e), r & 512 && n !== null && Rr(n, n.return);
            break;
        case 5:
            if (pt(t, e), Nt(e), r & 512 && n !== null && Rr(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    zo(o, "")
                } catch (x) {
                    pe(e, e.return, x)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var s = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : s,
                    a = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && s.type === "radio" && s.name != null && up(o, s), fl(a, i);
                    var u = fl(a, s);
                    for (i = 0; i < l.length; i += 2) {
                        var f = l[i],
                            m = l[i + 1];
                        f === "style" ? mp(o, m) : f === "dangerouslySetInnerHTML" ? fp(o, m) : f === "children" ? zo(o, m) : wu(o, f, m, u)
                    }
                    switch (a) {
                        case "input":
                            al(o, s);
                            break;
                        case "textarea":
                            cp(o, s);
                            break;
                        case "select":
                            var g = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!s.multiple;
                            var p = s.value;
                            p != null ? Ar(o, !!s.multiple, p, !1) : g !== !!s.multiple && (s.defaultValue != null ? Ar(o, !!s.multiple, s.defaultValue, !0) : Ar(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[Xo] = s
                } catch (x) {
                    pe(e, e.return, x)
                }
            }
            break;
        case 6:
            if (pt(t, e), Nt(e), r & 4) {
                if (e.stateNode === null) throw Error(L(162));
                o = e.stateNode, s = e.memoizedProps;
                try {
                    o.nodeValue = s
                } catch (x) {
                    pe(e, e.return, x)
                }
            }
            break;
        case 3:
            if (pt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Ho(t.containerInfo)
            } catch (x) {
                pe(e, e.return, x)
            }
            break;
        case 4:
            pt(t, e), Nt(e);
            break;
        case 13:
            pt(t, e), Nt(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (Zu = me())), r & 4 && Id(e);
            break;
        case 22:
            if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ae = (u = Ae) || f, pt(t, e), Ae = u) : pt(t, e), Nt(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1)
                    for (U = e, f = e.child; f !== null;) {
                        for (m = U = f; U !== null;) {
                            switch (g = U, p = g.child, g.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Oo(4, g, g.return);
                                    break;
                                case 1:
                                    Rr(g, g.return);
                                    var C = g.stateNode;
                                    if (typeof C.componentWillUnmount == "function") {
                                        r = g, n = g.return;
                                        try {
                                            t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount()
                                        } catch (x) {
                                            pe(r, n, x)
                                        }
                                    }
                                    break;
                                case 5:
                                    Rr(g, g.return);
                                    break;
                                case 22:
                                    if (g.memoizedState !== null) {
                                        zd(m);
                                        continue
                                    }
                            }
                            p !== null ? (p.return = g, U = p) : zd(m)
                        }
                        f = f.sibling
                    }
                e: for (f = null, m = e;;) {
                    if (m.tag === 5) {
                        if (f === null) {
                            f = m;
                            try {
                                o = m.stateNode, u ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = m.stateNode, l = m.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = pp("display", i))
                            } catch (x) {
                                pe(e, e.return, x)
                            }
                        }
                    } else if (m.tag === 6) {
                        if (f === null) try {
                            m.stateNode.nodeValue = u ? "" : m.memoizedProps
                        } catch (x) {
                            pe(e, e.return, x)
                        }
                    } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                        m.child.return = m, m = m.child;
                        continue
                    }
                    if (m === e) break e;
                    for (; m.sibling === null;) {
                        if (m.return === null || m.return === e) break e;
                        f === m && (f = null), m = m.return
                    }
                    f === m && (f = null), m.sibling.return = m.return, m = m.sibling
                }
            }
            break;
        case 19:
            pt(t, e), Nt(e), r & 4 && Id(e);
            break;
        case 21:
            break;
        default:
            pt(t, e), Nt(e)
    }
}

function Nt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Um(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(L(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (zo(o, ""), r.flags &= -33);
                    var s = Dd(e);
                    $l(e, s, o);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        a = Dd(e);
                    Fl(e, a, i);
                    break;
                default:
                    throw Error(L(161))
            }
        }
        catch (l) {
            pe(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function N2(e, t, n) {
    U = e, $m(e)
}

function $m(e, t, n) {
    for (var r = (e.mode & 1) !== 0; U !== null;) {
        var o = U,
            s = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || Ms;
            if (!i) {
                var a = o.alternate,
                    l = a !== null && a.memoizedState !== null || Ae;
                a = Ms;
                var u = Ae;
                if (Ms = i, (Ae = l) && !u)
                    for (U = o; U !== null;) i = U, l = i.child, i.tag === 22 && i.memoizedState !== null ? Fd(o) : l !== null ? (l.return = i, U = l) : Fd(o);
                for (; s !== null;) U = s, $m(s), s = s.sibling;
                U = o, Ms = a, Ae = u
            }
            Ud(e)
        } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, U = s) : Ud(e)
    }
}

function Ud(e) {
    for (; U !== null;) {
        var t = U;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ae || Gi(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ae)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && bd(t, s, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            bd(t, i, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var m = f.dehydrated;
                                    m !== null && Ho(m)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(L(163))
                }
                Ae || t.flags & 512 && zl(t)
            } catch (g) {
                pe(t, t.return, g)
            }
        }
        if (t === e) {
            U = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, U = n;
            break
        }
        U = t.return
    }
}

function zd(e) {
    for (; U !== null;) {
        var t = U;
        if (t === e) {
            U = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, U = n;
            break
        }
        U = t.return
    }
}

function Fd(e) {
    for (; U !== null;) {
        var t = U;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Gi(4, t)
                    } catch (l) {
                        pe(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            pe(t, o, l)
                        }
                    }
                    var s = t.return;
                    try {
                        zl(t)
                    } catch (l) {
                        pe(t, s, l)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        zl(t)
                    } catch (l) {
                        pe(t, i, l)
                    }
            }
        } catch (l) {
            pe(t, t.return, l)
        }
        if (t === e) {
            U = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, U = a;
            break
        }
        U = t.return
    }
}
var T2 = Math.ceil,
    bi = tn.ReactCurrentDispatcher,
    Yu = tn.ReactCurrentOwner,
    at = tn.ReactCurrentBatchConfig,
    J = 0,
    be = null,
    ye = null,
    Ee = 0,
    Qe = 0,
    Vr = Un(0),
    we = 0,
    ts = null,
    lr = 0,
    Qi = 0,
    Ju = 0,
    _o = null,
    Fe = null,
    Zu = 0,
    to = 1 / 0,
    Bt = null,
    Pi = !1,
    Bl = null,
    Rn = null,
    Os = !1,
    bn = null,
    Ei = 0,
    Do = 0,
    Hl = null,
    Js = -1,
    Zs = 0;

function De() {
    return J & 6 ? me() : Js !== -1 ? Js : Js = me()
}

function Vn(e) {
    return e.mode & 1 ? J & 2 && Ee !== 0 ? Ee & -Ee : d2.transition !== null ? (Zs === 0 && (Zs = kp()), Zs) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Lp(e.type)), e) : 1
}

function Ct(e, t, n, r) {
    if (50 < Do) throw Do = 0, Hl = null, Error(L(185));
    us(e, n, r), (!(J & 2) || e !== be) && (e === be && (!(J & 2) && (Qi |= n), we === 4 && gn(e, Ee)), We(e, r), n === 1 && J === 0 && !(t.mode & 1) && (to = me() + 500, Bi && zn()))
}

function We(e, t) {
    var n = e.callbackNode;
    dv(e, t);
    var r = li(e, e === be ? Ee : 0);
    if (r === 0) n !== null && qc(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && qc(n), t === 1) e.tag === 0 ? c2($d.bind(null, e)) : Jp($d.bind(null, e)), i2(function() {
            !(J & 6) && zn()
        }), n = null;
        else {
            switch (Np(r)) {
                case 1:
                    n = Eu;
                    break;
                case 4:
                    n = Pp;
                    break;
                case 16:
                    n = ai;
                    break;
                case 536870912:
                    n = Ep;
                    break;
                default:
                    n = ai
            }
            n = qm(n, Bm.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Bm(e, t) {
    if (Js = -1, Zs = 0, J & 6) throw Error(L(327));
    var n = e.callbackNode;
    if (Dr() && e.callbackNode !== n) return null;
    var r = li(e, e === be ? Ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ki(e, r);
    else {
        t = r;
        var o = J;
        J |= 2;
        var s = Wm();
        (be !== e || Ee !== t) && (Bt = null, to = me() + 500, rr(e, t));
        do try {
            V2();
            break
        } catch (a) {
            Hm(e, a)
        }
        while (!0);
        Iu(), bi.current = s, J = o, ye !== null ? t = 0 : (be = null, Ee = 0, t = we)
    }
    if (t !== 0) {
        if (t === 2 && (o = vl(e), o !== 0 && (r = o, t = Wl(e, o))), t === 1) throw n = ts, rr(e, 0), gn(e, r), We(e, me()), n;
        if (t === 6) gn(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !j2(o) && (t = ki(e, r), t === 2 && (s = vl(e), s !== 0 && (r = s, t = Wl(e, s))), t === 1)) throw n = ts, rr(e, 0), gn(e, r), We(e, me()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(L(345));
                case 2:
                    Gn(e, Fe, Bt);
                    break;
                case 3:
                    if (gn(e, r), (r & 130023424) === r && (t = Zu + 500 - me(), 10 < t)) {
                        if (li(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            De(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = El(Gn.bind(null, e, Fe, Bt), t);
                        break
                    }
                    Gn(e, Fe, Bt);
                    break;
                case 4:
                    if (gn(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var i = 31 - St(r);
                        s = 1 << i, i = t[i], i > o && (o = i), r &= ~s
                    }
                    if (r = o, r = me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * T2(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = El(Gn.bind(null, e, Fe, Bt), r);
                        break
                    }
                    Gn(e, Fe, Bt);
                    break;
                case 5:
                    Gn(e, Fe, Bt);
                    break;
                default:
                    throw Error(L(329))
            }
        }
    }
    return We(e, me()), e.callbackNode === n ? Bm.bind(null, e) : null
}

function Wl(e, t) {
    var n = _o;
    return e.current.memoizedState.isDehydrated && (rr(e, t).flags |= 256), e = ki(e, t), e !== 2 && (t = Fe, Fe = n, t !== null && Gl(t)), e
}

function Gl(e) {
    Fe === null ? Fe = e : Fe.push.apply(Fe, e)
}

function j2(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!bt(s(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function gn(e, t) {
    for (t &= ~Ju, t &= ~Qi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - St(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function $d(e) {
    if (J & 6) throw Error(L(327));
    Dr();
    var t = li(e, 0);
    if (!(t & 1)) return We(e, me()), null;
    var n = ki(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = vl(e);
        r !== 0 && (t = r, n = Wl(e, r))
    }
    if (n === 1) throw n = ts, rr(e, 0), gn(e, t), We(e, me()), n;
    if (n === 6) throw Error(L(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gn(e, Fe, Bt), We(e, me()), null
}

function ec(e, t) {
    var n = J;
    J |= 1;
    try {
        return e(t)
    } finally {
        J = n, J === 0 && (to = me() + 500, Bi && zn())
    }
}

function ur(e) {
    bn !== null && bn.tag === 0 && !(J & 6) && Dr();
    var t = J;
    J |= 1;
    var n = at.transition,
        r = te;
    try {
        if (at.transition = null, te = 1, e) return e()
    } finally {
        te = r, at.transition = n, J = t, !(J & 6) && zn()
    }
}

function tc() {
    Qe = Vr.current, ie(Vr)
}

function rr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, s2(n)), ye !== null)
        for (n = ye.return; n !== null;) {
            var r = n;
            switch (Ou(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && pi();
                    break;
                case 3:
                    Zr(), ie(Be), ie(Le), Hu();
                    break;
                case 5:
                    Bu(r);
                    break;
                case 4:
                    Zr();
                    break;
                case 13:
                    ie(ue);
                    break;
                case 19:
                    ie(ue);
                    break;
                case 10:
                    Uu(r.type._context);
                    break;
                case 22:
                case 23:
                    tc()
            }
            n = n.return
        }
    if (be = e, ye = e = An(e.current, null), Ee = Qe = t, we = 0, ts = null, Ju = Qi = lr = 0, Fe = _o = null, Xn !== null) {
        for (t = 0; t < Xn.length; t++)
            if (n = Xn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    s = n.pending;
                if (s !== null) {
                    var i = s.next;
                    s.next = o, r.next = i
                }
                n.pending = r
            }
        Xn = null
    }
    return e
}

function Hm(e, t) {
    do {
        var n = ye;
        try {
            if (Iu(), Xs.current = Ci, Si) {
                for (var r = ce.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                Si = !1
            }
            if (ar = 0, Ce = xe = ce = null, Mo = !1, Jo = 0, Yu.current = null, n === null || n.return === null) {
                we = 1, ts = t, ye = null;
                break
            }
            e: {
                var s = e,
                    i = n.return,
                    a = n,
                    l = t;
                if (t = Ee, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        f = a,
                        m = f.tag;
                    if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var g = f.alternate;
                        g ? (f.updateQueue = g.updateQueue, f.memoizedState = g.memoizedState, f.lanes = g.lanes) : (f.updateQueue = null, f.memoizedState = null)
                    }
                    var p = jd(i);
                    if (p !== null) {
                        p.flags &= -257, Rd(p, i, a, s, t), p.mode & 1 && Td(s, u, t), t = p, l = u;
                        var C = t.updateQueue;
                        if (C === null) {
                            var x = new Set;
                            x.add(l), t.updateQueue = x
                        } else C.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Td(s, u, t), nc();
                            break e
                        }
                        l = Error(L(426))
                    }
                } else if (le && a.mode & 1) {
                    var w = jd(i);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256), Rd(w, i, a, s, t), _u(eo(l, a));
                        break e
                    }
                }
                s = l = eo(l, a),
                we !== 4 && (we = 2),
                _o === null ? _o = [s] : _o.push(s),
                s = i;do {
                    switch (s.tag) {
                        case 3:
                            s.flags |= 65536, t &= -t, s.lanes |= t;
                            var v = Nm(s, l, t);
                            Cd(s, v);
                            break e;
                        case 1:
                            a = l;
                            var h = s.type,
                                y = s.stateNode;
                            if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Rn === null || !Rn.has(y)))) {
                                s.flags |= 65536, t &= -t, s.lanes |= t;
                                var b = Tm(s, a, t);
                                Cd(s, b);
                                break e
                            }
                    }
                    s = s.return
                } while (s !== null)
            }
            Qm(n)
        } catch (P) {
            t = P, ye === n && n !== null && (ye = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Wm() {
    var e = bi.current;
    return bi.current = Ci, e === null ? Ci : e
}

function nc() {
    (we === 0 || we === 3 || we === 2) && (we = 4), be === null || !(lr & 268435455) && !(Qi & 268435455) || gn(be, Ee)
}

function ki(e, t) {
    var n = J;
    J |= 2;
    var r = Wm();
    (be !== e || Ee !== t) && (Bt = null, rr(e, t));
    do try {
        R2();
        break
    } catch (o) {
        Hm(e, o)
    }
    while (!0);
    if (Iu(), J = n, bi.current = r, ye !== null) throw Error(L(261));
    return be = null, Ee = 0, we
}

function R2() {
    for (; ye !== null;) Gm(ye)
}

function V2() {
    for (; ye !== null && !nv();) Gm(ye)
}

function Gm(e) {
    var t = Xm(e.alternate, e, Qe);
    e.memoizedProps = e.pendingProps, t === null ? Qm(e) : ye = t, Yu.current = null
}

function Qm(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = P2(n, t), n !== null) {
                n.flags &= 32767, ye = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                we = 6, ye = null;
                return
            }
        } else if (n = b2(n, t, Qe), n !== null) {
            ye = n;
            return
        }
        if (t = t.sibling, t !== null) {
            ye = t;
            return
        }
        ye = t = e
    } while (t !== null);
    we === 0 && (we = 5)
}

function Gn(e, t, n) {
    var r = te,
        o = at.transition;
    try {
        at.transition = null, te = 1, A2(e, t, n, r)
    } finally {
        at.transition = o, te = r
    }
    return null
}

function A2(e, t, n, r) {
    do Dr(); while (bn !== null);
    if (J & 6) throw Error(L(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(L(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (fv(e, s), e === be && (ye = be = null, Ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Os || (Os = !0, qm(ai, function() {
            return Dr(), null
        })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
        s = at.transition, at.transition = null;
        var i = te;
        te = 1;
        var a = J;
        J |= 4, Yu.current = null, k2(e, n), Fm(n, e), Jv(bl), ui = !!Cl, bl = Cl = null, e.current = n, N2(n), rv(), J = a, te = i, at.transition = s
    } else e.current = n;
    if (Os && (Os = !1, bn = e, Ei = o), s = e.pendingLanes, s === 0 && (Rn = null), iv(n.stateNode), We(e, me()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (Pi) throw Pi = !1, e = Bl, Bl = null, e;
    return Ei & 1 && e.tag !== 0 && Dr(), s = e.pendingLanes, s & 1 ? e === Hl ? Do++ : (Do = 0, Hl = e) : Do = 0, zn(), null
}

function Dr() {
    if (bn !== null) {
        var e = Np(Ei),
            t = at.transition,
            n = te;
        try {
            if (at.transition = null, te = 16 > e ? 16 : e, bn === null) var r = !1;
            else {
                if (e = bn, bn = null, Ei = 0, J & 6) throw Error(L(331));
                var o = J;
                for (J |= 4, U = e.current; U !== null;) {
                    var s = U,
                        i = s.child;
                    if (U.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (U = u; U !== null;) {
                                    var f = U;
                                    switch (f.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Oo(8, f, s)
                                    }
                                    var m = f.child;
                                    if (m !== null) m.return = f, U = m;
                                    else
                                        for (; U !== null;) {
                                            f = U;
                                            var g = f.sibling,
                                                p = f.return;
                                            if (Im(f), f === u) {
                                                U = null;
                                                break
                                            }
                                            if (g !== null) {
                                                g.return = p, U = g;
                                                break
                                            }
                                            U = p
                                        }
                                }
                            }
                            var C = s.alternate;
                            if (C !== null) {
                                var x = C.child;
                                if (x !== null) {
                                    C.child = null;
                                    do {
                                        var w = x.sibling;
                                        x.sibling = null, x = w
                                    } while (x !== null)
                                }
                            }
                            U = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && i !== null) i.return = s, U = i;
                    else e: for (; U !== null;) {
                        if (s = U, s.flags & 2048) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Oo(9, s, s.return)
                        }
                        var v = s.sibling;
                        if (v !== null) {
                            v.return = s.return, U = v;
                            break e
                        }
                        U = s.return
                    }
                }
                var h = e.current;
                for (U = h; U !== null;) {
                    i = U;
                    var y = i.child;
                    if (i.subtreeFlags & 2064 && y !== null) y.return = i, U = y;
                    else e: for (i = h; U !== null;) {
                        if (a = U, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Gi(9, a)
                            }
                        } catch (P) {
                            pe(a, a.return, P)
                        }
                        if (a === i) {
                            U = null;
                            break e
                        }
                        var b = a.sibling;
                        if (b !== null) {
                            b.return = a.return, U = b;
                            break e
                        }
                        U = a.return
                    }
                }
                if (J = o, zn(), Mt && typeof Mt.onPostCommitFiberRoot == "function") try {
                    Mt.onPostCommitFiberRoot(Ii, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            te = n, at.transition = t
        }
    }
    return !1
}

function Bd(e, t, n) {
    t = eo(n, t), t = Nm(e, t, 1), e = jn(e, t, 1), t = De(), e !== null && (us(e, 1, t), We(e, t))
}

function pe(e, t, n) {
    if (e.tag === 3) Bd(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Bd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rn === null || !Rn.has(r))) {
                    e = eo(n, e), e = Tm(t, e, 1), t = jn(t, e, 1), e = De(), t !== null && (us(t, 1, e), We(t, e));
                    break
                }
            }
            t = t.return
        }
}

function L2(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = De(), e.pingedLanes |= e.suspendedLanes & n, be === e && (Ee & n) === n && (we === 4 || we === 3 && (Ee & 130023424) === Ee && 500 > me() - Zu ? rr(e, 0) : Ju |= n), We(e, t)
}

function Km(e, t) {
    t === 0 && (e.mode & 1 ? (t = Es, Es <<= 1, !(Es & 130023424) && (Es = 4194304)) : t = 1);
    var n = De();
    e = Yt(e, t), e !== null && (us(e, t, n), We(e, n))
}

function M2(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Km(e, n)
}

function O2(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(L(314))
    }
    r !== null && r.delete(t), Km(e, n)
}
var Xm;
Xm = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Be.current) $e = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return $e = !1, C2(e, t, n);
            $e = !!(e.flags & 131072)
        }
    else $e = !1, le && t.flags & 1048576 && Zp(t, gi, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Ys(e, t), e = t.pendingProps;
            var o = qr(t, Le.current);
            _r(t, n), o = Gu(null, t, r, e, o, n);
            var s = Qu();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, He(r) ? (s = !0, mi(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Fu(t), o.updater = Wi, t.stateNode = o, o._reactInternals = t, Al(t, r, e, n), t = Ol(null, t, r, !0, s, n)) : (t.tag = 0, le && s && Mu(t), Oe(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Ys(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = D2(r), e = ht(r, e), o) {
                    case 0:
                        t = Ml(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ld(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Vd(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Ad(null, t, r, ht(r.type, e), n);
                        break e
                }
                throw Error(L(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ht(r, o), Ml(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ht(r, o), Ld(e, t, r, o, n);
        case 3:
            e: {
                if (Am(t), e === null) throw Error(L(387));r = t.pendingProps,
                s = t.memoizedState,
                o = s.element,
                sm(e, t),
                xi(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, s.isDehydrated)
                    if (s = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions
                        }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                        o = eo(Error(L(423)), t), t = Md(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = eo(Error(L(424)), t), t = Md(e, t, r, n, o);
                    break e
                } else
                    for (Xe = Tn(t.stateNode.containerInfo.firstChild), qe = t, le = !0, wt = null, n = rm(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Yr(), r === o) {
                        t = Jt(e, t, n);
                        break e
                    }
                    Oe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return im(t), e === null && jl(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, Pl(r, o) ? i = null : s !== null && Pl(r, s) && (t.flags |= 32), Vm(e, t), Oe(e, t, i, n), t.child;
        case 6:
            return e === null && jl(t), null;
        case 13:
            return Lm(e, t, n);
        case 4:
            return $u(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Jr(t, null, r, n) : Oe(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ht(r, o), Vd(e, t, r, o, n);
        case 7:
            return Oe(e, t, t.pendingProps, n), t.child;
        case 8:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, re(vi, r._currentValue), r._currentValue = i, s !== null)
                    if (bt(s.value, i)) {
                        if (s.children === o.children && !Be.current) {
                            t = Jt(e, t, n);
                            break e
                        }
                    } else
                        for (s = t.child, s !== null && (s.return = t); s !== null;) {
                            var a = s.dependencies;
                            if (a !== null) {
                                i = s.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (s.tag === 1) {
                                            l = Kt(-1, n & -n), l.tag = 2;
                                            var u = s.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var f = u.pending;
                                                f === null ? l.next = l : (l.next = f.next, f.next = l), u.pending = l
                                            }
                                        }
                                        s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Rl(s.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (i = s.return, i === null) throw Error(L(341));
                                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Rl(i, n, t), i = s.sibling
                            } else i = s.child;
                            if (i !== null) i.return = s;
                            else
                                for (i = s; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (s = i.sibling, s !== null) {
                                        s.return = i.return, i = s;
                                        break
                                    }
                                    i = i.return
                                }
                            s = i
                        }
                Oe(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, _r(t, n), o = lt(o), r = r(o), t.flags |= 1, Oe(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = ht(r, t.pendingProps), o = ht(r.type, o), Ad(e, t, r, o, n);
        case 15:
            return jm(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ht(r, o), Ys(e, t), t.tag = 1, He(r) ? (e = !0, mi(t)) : e = !1, _r(t, n), km(t, r, o), Al(t, r, o, n), Ol(null, t, r, !0, e, n);
        case 19:
            return Mm(e, t, n);
        case 22:
            return Rm(e, t, n)
    }
    throw Error(L(156, t.tag))
};

function qm(e, t) {
    return bp(e, t)
}

function _2(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function it(e, t, n, r) {
    return new _2(e, t, n, r)
}

function rc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function D2(e) {
    if (typeof e == "function") return rc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Cu) return 11;
        if (e === bu) return 14
    }
    return 2
}

function An(e, t) {
    var n = e.alternate;
    return n === null ? (n = it(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function ei(e, t, n, r, o, s) {
    var i = 2;
    if (r = e, typeof e == "function") rc(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
        case Sr:
            return or(n.children, o, s, t);
        case Su:
            i = 8, o |= 8;
            break;
        case nl:
            return e = it(12, n, t, o | 2), e.elementType = nl, e.lanes = s, e;
        case rl:
            return e = it(13, n, t, o), e.elementType = rl, e.lanes = s, e;
        case ol:
            return e = it(19, n, t, o), e.elementType = ol, e.lanes = s, e;
        case ip:
            return Ki(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case op:
                    i = 10;
                    break e;
                case sp:
                    i = 9;
                    break e;
                case Cu:
                    i = 11;
                    break e;
                case bu:
                    i = 14;
                    break e;
                case pn:
                    i = 16, r = null;
                    break e
            }
            throw Error(L(130, e == null ? e : typeof e, ""))
    }
    return t = it(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t
}

function or(e, t, n, r) {
    return e = it(7, e, r, t), e.lanes = n, e
}

function Ki(e, t, n, r) {
    return e = it(22, e, r, t), e.elementType = ip, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Wa(e, t, n) {
    return e = it(6, e, null, t), e.lanes = n, e
}

function Ga(e, t, n) {
    return t = it(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function I2(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ka(0), this.expirationTimes = ka(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ka(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function oc(e, t, n, r, o, s, i, a, l) {
    return e = new I2(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = it(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Fu(s), e
}

function U2(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: wr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Ym(e) {
    if (!e) return Mn;
    e = e._reactInternals;
    e: {
        if (fr(e) !== e || e.tag !== 1) throw Error(L(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (He(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(L(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (He(n)) return Yp(e, n, t)
    }
    return t
}

function Jm(e, t, n, r, o, s, i, a, l) {
    return e = oc(n, r, !0, e, o, s, i, a, l), e.context = Ym(null), n = e.current, r = De(), o = Vn(n), s = Kt(r, o), s.callback = t ? ? null, jn(n, s, o), e.current.lanes = o, us(e, o, r), We(e, r), e
}

function Xi(e, t, n, r) {
    var o = t.current,
        s = De(),
        i = Vn(o);
    return n = Ym(n), t.context === null ? t.context = n : t.pendingContext = n, t = Kt(s, i), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = jn(o, t, i), e !== null && (Ct(e, o, i, s), Ks(e, o, i)), i
}

function Ni(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Hd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function sc(e, t) {
    Hd(e, t), (e = e.alternate) && Hd(e, t)
}

function z2() {
    return null
}
var Zm = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function ic(e) {
    this._internalRoot = e
}
qi.prototype.render = ic.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(L(409));
    Xi(e, t, null, null)
};
qi.prototype.unmount = ic.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ur(function() {
            Xi(null, e, null, null)
        }), t[qt] = null
    }
};

function qi(e) {
    this._internalRoot = e
}
qi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Rp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++);
        hn.splice(n, 0, e), n === 0 && Ap(e)
    }
};

function ac(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Yi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Wd() {}

function F2(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = Ni(i);
                s.call(u)
            }
        }
        var i = Jm(t, r, e, 0, null, !1, !1, "", Wd);
        return e._reactRootContainer = i, e[qt] = i.current, Qo(e.nodeType === 8 ? e.parentNode : e), ur(), i
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Ni(l);
            a.call(u)
        }
    }
    var l = oc(e, 0, !1, null, null, !1, !1, "", Wd);
    return e._reactRootContainer = l, e[qt] = l.current, Qo(e.nodeType === 8 ? e.parentNode : e), ur(function() {
        Xi(t, l, n, r)
    }), l
}

function Ji(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var i = s;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = Ni(i);
                a.call(l)
            }
        }
        Xi(t, i, e, o)
    } else i = F2(n, t, e, o, r);
    return Ni(i)
}
Tp = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = ko(t.pendingLanes);
                n !== 0 && (ku(t, n | 1), We(t, me()), !(J & 6) && (to = me() + 500, zn()))
            }
            break;
        case 13:
            ur(function() {
                var r = Yt(e, 1);
                if (r !== null) {
                    var o = De();
                    Ct(r, e, 1, o)
                }
            }), sc(e, 1)
    }
};
Nu = function(e) {
    if (e.tag === 13) {
        var t = Yt(e, 134217728);
        if (t !== null) {
            var n = De();
            Ct(t, e, 134217728, n)
        }
        sc(e, 134217728)
    }
};
jp = function(e) {
    if (e.tag === 13) {
        var t = Vn(e),
            n = Yt(e, t);
        if (n !== null) {
            var r = De();
            Ct(n, e, t, r)
        }
        sc(e, t)
    }
};
Rp = function() {
    return te
};
Vp = function(e, t) {
    var n = te;
    try {
        return te = e, t()
    } finally {
        te = n
    }
};
ml = function(e, t, n) {
    switch (t) {
        case "input":
            if (al(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = $i(r);
                        if (!o) throw Error(L(90));
                        lp(r), al(r, o)
                    }
                }
            }
            break;
        case "textarea":
            cp(e, n);
            break;
        case "select":
            t = n.value, t != null && Ar(e, !!n.multiple, t, !1)
    }
};
vp = ec;
yp = ur;
var $2 = {
        usingClientEntryPoint: !1,
        Events: [ds, Er, $i, hp, gp, ec]
    },
    So = {
        findFiberByHostInstance: Kn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    B2 = {
        bundleType: So.bundleType,
        version: So.version,
        rendererPackageName: So.rendererPackageName,
        rendererConfig: So.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: tn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Sp(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: So.findFiberByHostInstance || z2,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_s.isDisabled && _s.supportsFiber) try {
        Ii = _s.inject(B2), Mt = _s
    } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $2;
et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ac(t)) throw Error(L(200));
    return U2(e, t, null, n)
};
et.createRoot = function(e, t) {
    if (!ac(e)) throw Error(L(299));
    var n = !1,
        r = "",
        o = Zm;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = oc(e, 1, !1, null, null, n, !1, r, o), e[qt] = t.current, Qo(e.nodeType === 8 ? e.parentNode : e), new ic(t)
};
et.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(L(188)) : (e = Object.keys(e).join(","), Error(L(268, e)));
    return e = Sp(t), e = e === null ? null : e.stateNode, e
};
et.flushSync = function(e) {
    return ur(e)
};
et.hydrate = function(e, t, n) {
    if (!Yi(t)) throw Error(L(200));
    return Ji(null, e, t, !0, n)
};
et.hydrateRoot = function(e, t, n) {
    if (!ac(e)) throw Error(L(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        s = "",
        i = Zm;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Jm(t, null, e, 1, n ? ? null, o, !1, s, i), e[qt] = t.current, Qo(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new qi(t)
};
et.render = function(e, t, n) {
    if (!Yi(t)) throw Error(L(200));
    return Ji(null, e, t, !1, n)
};
et.unmountComponentAtNode = function(e) {
    if (!Yi(e)) throw Error(L(40));
    return e._reactRootContainer ? (ur(function() {
        Ji(null, null, e, !1, function() {
            e._reactRootContainer = null, e[qt] = null
        })
    }), !0) : !1
};
et.unstable_batchedUpdates = ec;
et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Yi(n)) throw Error(L(200));
    if (e == null || e._reactInternals === void 0) throw Error(L(38));
    return Ji(e, t, n, !1, r)
};
et.version = "18.3.1-next-f1338f8080-20240426";

function eh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eh)
    } catch (e) {
        console.error(e)
    }
}
eh(), ep.exports = et;
var ps = ep.exports;
const th = $f(ps);
var nh, Gd = ps;
nh = Gd.createRoot, Gd.hydrateRoot;
var Zi = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    ea = typeof window > "u" || "Deno" in globalThis;

function gt() {}

function H2(e, t) {
    return typeof e == "function" ? e(t) : e
}

function W2(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function G2(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function Ql(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Q2(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Qd(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: o,
        predicate: s,
        queryKey: i,
        stale: a
    } = e;
    if (i) {
        if (r) {
            if (t.queryHash !== lc(i, t.options)) return !1
        } else if (!rs(t.queryKey, i)) return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l) return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || s && !s(t))
}

function Kd(e, t) {
    const {
        exact: n,
        status: r,
        predicate: o,
        mutationKey: s
    } = e;
    if (s) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (ns(t.options.mutationKey) !== ns(s)) return !1
        } else if (!rs(t.options.mutationKey, s)) return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}

function lc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || ns)(e)
}

function ns(e) {
    return JSON.stringify(e, (t, n) => Kl(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n)
}

function rs(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => rs(e[n], t[n])) : !1
}

function rh(e, t) {
    if (e === t) return e;
    const n = Xd(e) && Xd(t);
    if (n || Kl(e) && Kl(t)) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            s = n ? t : Object.keys(t),
            i = s.length,
            a = n ? [] : {},
            l = new Set(r);
        let u = 0;
        for (let f = 0; f < i; f++) {
            const m = n ? f : s[f];
            (!n && l.has(m) || n) && e[m] === void 0 && t[m] === void 0 ? (a[m] = void 0, u++) : (a[m] = rh(e[m], t[m]), a[m] === e[m] && e[m] !== void 0 && u++)
        }
        return o === i && u === o ? e : a
    }
    return t
}

function Xd(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Kl(e) {
    if (!qd(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!qd(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function qd(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function K2(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function X2(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? rh(e, t) : t
}

function q2(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function Y2(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var uc = Symbol();

function oh(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === uc ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Yn, vn, Fr, Mf, J2 = (Mf = class extends Zi {
        constructor() {
            super();
            Z(this, Yn);
            Z(this, vn);
            Z(this, Fr);
            G(this, Fr, t => {
                if (!ea && window.addEventListener) {
                    const n = () => t();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            j(this, vn) || this.setEventListener(j(this, Fr))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = j(this, vn)) == null || t.call(this), G(this, vn, void 0))
        }
        setEventListener(t) {
            var n;
            G(this, Fr, t), (n = j(this, vn)) == null || n.call(this), G(this, vn, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            j(this, Yn) !== t && (G(this, Yn, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(n => {
                n(t)
            })
        }
        isFocused() {
            var t;
            return typeof j(this, Yn) == "boolean" ? j(this, Yn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, Yn = new WeakMap, vn = new WeakMap, Fr = new WeakMap, Mf),
    sh = new J2,
    $r, yn, Br, Of, Z2 = (Of = class extends Zi {
        constructor() {
            super();
            Z(this, $r, !0);
            Z(this, yn);
            Z(this, Br);
            G(this, Br, t => {
                if (!ea && window.addEventListener) {
                    const n = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            j(this, yn) || this.setEventListener(j(this, Br))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = j(this, yn)) == null || t.call(this), G(this, yn, void 0))
        }
        setEventListener(t) {
            var n;
            G(this, Br, t), (n = j(this, yn)) == null || n.call(this), G(this, yn, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            j(this, $r) !== t && (G(this, $r, t), this.listeners.forEach(r => {
                r(t)
            }))
        }
        isOnline() {
            return j(this, $r)
        }
    }, $r = new WeakMap, yn = new WeakMap, Br = new WeakMap, Of),
    Ti = new Z2;

function ey() {
    let e, t;
    const n = new Promise((o, s) => {
        e = o, t = s
    });
    n.status = "pending", n.catch(() => {});

    function r(o) {
        Object.assign(n, o), delete n.resolve, delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }), e(o)
    }, n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }), t(o)
    }, n
}

function ty(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function ih(e) {
    return (e ? ? "online") === "online" ? Ti.isOnline() : !0
}
var ah = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function Qa(e) {
    return e instanceof ah
}

function lh(e) {
    let t = !1,
        n = 0,
        r = !1,
        o;
    const s = ey(),
        i = x => {
            var w;
            r || (g(new ah(x)), (w = e.abort) == null || w.call(e))
        },
        a = () => {
            t = !0
        },
        l = () => {
            t = !1
        },
        u = () => sh.isFocused() && (e.networkMode === "always" || Ti.isOnline()) && e.canRun(),
        f = () => ih(e.networkMode) && e.canRun(),
        m = x => {
            var w;
            r || (r = !0, (w = e.onSuccess) == null || w.call(e, x), o == null || o(), s.resolve(x))
        },
        g = x => {
            var w;
            r || (r = !0, (w = e.onError) == null || w.call(e, x), o == null || o(), s.reject(x))
        },
        p = () => new Promise(x => {
            var w;
            o = v => {
                (r || u()) && x(v)
            }, (w = e.onPause) == null || w.call(e)
        }).then(() => {
            var x;
            o = void 0, r || (x = e.onContinue) == null || x.call(e)
        }),
        C = () => {
            if (r) return;
            let x;
            const w = n === 0 ? e.initialPromise : void 0;
            try {
                x = w ? ? e.fn()
            } catch (v) {
                x = Promise.reject(v)
            }
            Promise.resolve(x).then(m).catch(v => {
                var E;
                if (r) return;
                const h = e.retry ? ? (ea ? 0 : 3),
                    y = e.retryDelay ? ? ty,
                    b = typeof y == "function" ? y(n, v) : y,
                    P = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, v);
                if (t || !P) {
                    g(v);
                    return
                }
                n++, (E = e.onFail) == null || E.call(e, n, v), K2(b).then(() => u() ? void 0 : p()).then(() => {
                    t ? g(v) : C()
                })
            })
        };
    return {
        promise: s,
        cancel: i,
        continue: () => (o == null || o(), s),
        cancelRetry: a,
        continueRetry: l,
        canStart: f,
        start: () => (f() ? C() : p().then(C), s)
    }
}
var ny = e => setTimeout(e, 0);

function ry() {
    let e = [],
        t = 0,
        n = a => {
            a()
        },
        r = a => {
            a()
        },
        o = ny;
    const s = a => {
            t ? e.push(a) : o(() => {
                n(a)
            })
        },
        i = () => {
            const a = e;
            e = [], a.length && o(() => {
                r(() => {
                    a.forEach(l => {
                        n(l)
                    })
                })
            })
        };
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--, t || i()
            }
            return l
        },
        batchCalls: a => (...l) => {
            s(() => {
                a(...l)
            })
        },
        schedule: s,
        setNotifyFunction: a => {
            n = a
        },
        setBatchNotifyFunction: a => {
            r = a
        },
        setScheduler: a => {
            o = a
        }
    }
}
var _e = ry(),
    Jn, _f, uh = (_f = class {
        constructor() {
            Z(this, Jn)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), W2(this.gcTime) && G(this, Jn, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ? ? (ea ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            j(this, Jn) && (clearTimeout(j(this, Jn)), G(this, Jn, void 0))
        }
    }, Jn = new WeakMap, _f),
    Hr, Zn, rt, er, Ve, is, tr, vt, $t, Df, oy = (Df = class extends uh {
        constructor(t) {
            super();
            Z(this, vt);
            Z(this, Hr);
            Z(this, Zn);
            Z(this, rt);
            Z(this, er);
            Z(this, Ve);
            Z(this, is);
            Z(this, tr);
            G(this, tr, !1), G(this, is, t.defaultOptions), this.setOptions(t.options), this.observers = [], G(this, er, t.client), G(this, rt, j(this, er).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, G(this, Hr, iy(this.options)), this.state = t.state ? ? j(this, Hr), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = j(this, Ve)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = { ...j(this, is),
                ...t
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && j(this, rt).remove(this)
        }
        setData(t, n) {
            const r = X2(this.state.data, t, this.options);
            return Te(this, vt, $t).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), r
        }
        setState(t, n) {
            Te(this, vt, $t).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r, o;
            const n = (r = j(this, Ve)) == null ? void 0 : r.promise;
            return (o = j(this, Ve)) == null || o.cancel(t), n ? n.then(gt).catch(gt) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(j(this, Hr))
        }
        isActive() {
            return this.observers.some(t => Q2(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === uc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(t => Ql(t.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(t = 0) {
            return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !G2(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = j(this, Ve)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = j(this, Ve)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), j(this, rt).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (j(this, Ve) && (j(this, tr) ? j(this, Ve).cancel({
                revert: !0
            }) : j(this, Ve).cancelRetry()), this.scheduleGc()), j(this, rt).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || Te(this, vt, $t).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var u, f, m;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (j(this, Ve)) return j(this, Ve).continueRetry(), j(this, Ve).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const g = this.observers.find(p => p.options.queryFn);
                g && this.setOptions(g.options)
            }
            const r = new AbortController,
                o = g => {
                    Object.defineProperty(g, "signal", {
                        enumerable: !0,
                        get: () => (G(this, tr, !0), r.signal)
                    })
                },
                s = () => {
                    const g = oh(this.options, n),
                        C = (() => {
                            const x = {
                                client: j(this, er),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return o(x), x
                        })();
                    return G(this, tr, !1), this.options.persister ? this.options.persister(g, C, this) : g(C)
                },
                a = (() => {
                    const g = {
                        fetchOptions: n,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: j(this, er),
                        state: this.state,
                        fetchFn: s
                    };
                    return o(g), g
                })();
            (u = this.options.behavior) == null || u.onFetch(a, this), G(this, Zn, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((f = a.fetchOptions) == null ? void 0 : f.meta)) && Te(this, vt, $t).call(this, {
                type: "fetch",
                meta: (m = a.fetchOptions) == null ? void 0 : m.meta
            });
            const l = g => {
                var p, C, x, w;
                Qa(g) && g.silent || Te(this, vt, $t).call(this, {
                    type: "error",
                    error: g
                }), Qa(g) || ((C = (p = j(this, rt).config).onError) == null || C.call(p, g, this), (w = (x = j(this, rt).config).onSettled) == null || w.call(x, this.state.data, g, this)), this.scheduleGc()
            };
            return G(this, Ve, lh({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: a.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: g => {
                    var p, C, x, w;
                    if (g === void 0) {
                        l(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(g)
                    } catch (v) {
                        l(v);
                        return
                    }(C = (p = j(this, rt).config).onSuccess) == null || C.call(p, g, this), (w = (x = j(this, rt).config).onSettled) == null || w.call(x, g, this.state.error, this), this.scheduleGc()
                },
                onError: l,
                onFail: (g, p) => {
                    Te(this, vt, $t).call(this, {
                        type: "failed",
                        failureCount: g,
                        error: p
                    })
                },
                onPause: () => {
                    Te(this, vt, $t).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Te(this, vt, $t).call(this, {
                        type: "continue"
                    })
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0
            })), j(this, Ve).start()
        }
    }, Hr = new WeakMap, Zn = new WeakMap, rt = new WeakMap, er = new WeakMap, Ve = new WeakMap, is = new WeakMap, tr = new WeakMap, vt = new WeakSet, $t = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...r,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...r,
                        ...sy(r.data, this.options),
                        fetchMeta: t.meta ? ? null
                    };
                case "success":
                    return G(this, Zn, void 0), { ...r,
                        data: t.data,
                        dataUpdateCount: r.dataUpdateCount + 1,
                        dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const o = t.error;
                    return Qa(o) && o.revert && j(this, Zn) ? { ...j(this, Zn),
                        fetchStatus: "idle"
                    } : { ...r,
                        error: o,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: o,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...r,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...r,
                        ...t.state
                    }
            }
        };
        this.state = n(this.state), _e.batch(() => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }), j(this, rt).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, Df);

function sy(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: ih(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function iy(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var jt, If, ay = (If = class extends Zi {
        constructor(t = {}) {
            super();
            Z(this, jt);
            this.config = t, G(this, jt, new Map)
        }
        build(t, n, r) {
            const o = n.queryKey,
                s = n.queryHash ? ? lc(o, n);
            let i = this.get(s);
            return i || (i = new oy({
                client: t,
                queryKey: o,
                queryHash: s,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(o)
            }), this.add(i)), i
        }
        add(t) {
            j(this, jt).has(t.queryHash) || (j(this, jt).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = j(this, jt).get(t.queryHash);
            n && (t.destroy(), n === t && j(this, jt).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            _e.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return j(this, jt).get(t)
        }
        getAll() {
            return [...j(this, jt).values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(r => Qd(n, r))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(r => Qd(t, r)) : n
        }
        notify(t) {
            _e.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            _e.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            _e.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, jt = new WeakMap, If),
    Rt, Me, nr, Vt, fn, Uf, ly = (Uf = class extends uh {
        constructor(t) {
            super();
            Z(this, Vt);
            Z(this, Rt);
            Z(this, Me);
            Z(this, nr);
            this.mutationId = t.mutationId, G(this, Me, t.mutationCache), G(this, Rt, []), this.state = t.state || uy(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            j(this, Rt).includes(t) || (j(this, Rt).push(t), this.clearGcTimeout(), j(this, Me).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            G(this, Rt, j(this, Rt).filter(n => n !== t)), this.scheduleGc(), j(this, Me).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            j(this, Rt).length || (this.state.status === "pending" ? this.scheduleGc() : j(this, Me).remove(this))
        }
        continue () {
            var t;
            return ((t = j(this, nr)) == null ? void 0 : t.continue()) ? ? this.execute(this.state.variables)
        }
        async execute(t) {
            var s, i, a, l, u, f, m, g, p, C, x, w, v, h, y, b, P, E, k, V;
            const n = () => {
                Te(this, Vt, fn).call(this, {
                    type: "continue"
                })
            };
            G(this, nr, lh({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (O, M) => {
                    Te(this, Vt, fn).call(this, {
                        type: "failed",
                        failureCount: O,
                        error: M
                    })
                },
                onPause: () => {
                    Te(this, Vt, fn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: n,
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => j(this, Me).canRun(this)
            }));
            const r = this.state.status === "pending",
                o = !j(this, nr).canStart();
            try {
                if (r) n();
                else {
                    Te(this, Vt, fn).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: o
                    }), await ((i = (s = j(this, Me).config).onMutate) == null ? void 0 : i.call(s, t, this));
                    const M = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                    M !== this.state.context && Te(this, Vt, fn).call(this, {
                        type: "pending",
                        context: M,
                        variables: t,
                        isPaused: o
                    })
                }
                const O = await j(this, nr).start();
                return await ((f = (u = j(this, Me).config).onSuccess) == null ? void 0 : f.call(u, O, t, this.state.context, this)), await ((g = (m = this.options).onSuccess) == null ? void 0 : g.call(m, O, t, this.state.context)), await ((C = (p = j(this, Me).config).onSettled) == null ? void 0 : C.call(p, O, null, this.state.variables, this.state.context, this)), await ((w = (x = this.options).onSettled) == null ? void 0 : w.call(x, O, null, t, this.state.context)), Te(this, Vt, fn).call(this, {
                    type: "success",
                    data: O
                }), O
            } catch (O) {
                try {
                    throw await ((h = (v = j(this, Me).config).onError) == null ? void 0 : h.call(v, O, t, this.state.context, this)), await ((b = (y = this.options).onError) == null ? void 0 : b.call(y, O, t, this.state.context)), await ((E = (P = j(this, Me).config).onSettled) == null ? void 0 : E.call(P, void 0, O, this.state.variables, this.state.context, this)), await ((V = (k = this.options).onSettled) == null ? void 0 : V.call(k, void 0, O, t, this.state.context)), O
                } finally {
                    Te(this, Vt, fn).call(this, {
                        type: "error",
                        error: O
                    })
                }
            } finally {
                j(this, Me).runNext(this)
            }
        }
    }, Rt = new WeakMap, Me = new WeakMap, nr = new WeakMap, Vt = new WeakSet, fn = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        isPaused: !0
                    };
                case "continue":
                    return { ...r,
                        isPaused: !1
                    };
                case "pending":
                    return { ...r,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...r,
                        data: void 0,
                        error: t.error,
                        failureCount: r.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = n(this.state), _e.batch(() => {
            j(this, Rt).forEach(r => {
                r.onMutationUpdate(t)
            }), j(this, Me).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, Uf);

function uy() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Wt, yt, as, zf, cy = (zf = class extends Zi {
    constructor(t = {}) {
        super();
        Z(this, Wt);
        Z(this, yt);
        Z(this, as);
        this.config = t, G(this, Wt, new Set), G(this, yt, new Map), G(this, as, 0)
    }
    build(t, n, r) {
        const o = new ly({
            mutationCache: this,
            mutationId: ++xs(this, as)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o), o
    }
    add(t) {
        j(this, Wt).add(t);
        const n = Ds(t);
        if (typeof n == "string") {
            const r = j(this, yt).get(n);
            r ? r.push(t) : j(this, yt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (j(this, Wt).delete(t)) {
            const n = Ds(t);
            if (typeof n == "string") {
                const r = j(this, yt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else r[0] === t && j(this, yt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = Ds(t);
        if (typeof n == "string") {
            const r = j(this, yt).get(n),
                o = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !o || o === t
        } else return !0
    }
    runNext(t) {
        var r;
        const n = Ds(t);
        if (typeof n == "string") {
            const o = (r = j(this, yt).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (o == null ? void 0 : o.continue()) ? ? Promise.resolve()
        } else return Promise.resolve()
    }
    clear() {
        _e.batch(() => {
            j(this, Wt).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }), j(this, Wt).clear(), j(this, yt).clear()
        })
    }
    getAll() {
        return Array.from(j(this, Wt))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Kd(n, r))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => Kd(t, n))
    }
    notify(t) {
        _e.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return _e.batch(() => Promise.all(t.map(n => n.continue().catch(gt))))
    }
}, Wt = new WeakMap, yt = new WeakMap, as = new WeakMap, zf);

function Ds(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}

function Yd(e) {
    return {
        onFetch: (t, n) => {
            var f, m, g, p, C;
            const r = t.options,
                o = (g = (m = (f = t.fetchOptions) == null ? void 0 : f.meta) == null ? void 0 : m.fetchMore) == null ? void 0 : g.direction,
                s = ((p = t.state.data) == null ? void 0 : p.pages) || [],
                i = ((C = t.state.data) == null ? void 0 : C.pageParams) || [];
            let a = {
                    pages: [],
                    pageParams: []
                },
                l = 0;
            const u = async () => {
                let x = !1;
                const w = y => {
                        Object.defineProperty(y, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? x = !0 : t.signal.addEventListener("abort", () => {
                                x = !0
                            }), t.signal)
                        })
                    },
                    v = oh(t.options, t.fetchOptions),
                    h = async (y, b, P) => {
                        if (x) return Promise.reject();
                        if (b == null && y.pages.length) return Promise.resolve(y);
                        const k = (() => {
                                const F = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: b,
                                    direction: P ? "backward" : "forward",
                                    meta: t.options.meta
                                };
                                return w(F), F
                            })(),
                            V = await v(k),
                            {
                                maxPages: O
                            } = t.options,
                            M = P ? Y2 : q2;
                        return {
                            pages: M(y.pages, V, O),
                            pageParams: M(y.pageParams, b, O)
                        }
                    };
                if (o && s.length) {
                    const y = o === "backward",
                        b = y ? dy : Jd,
                        P = {
                            pages: s,
                            pageParams: i
                        },
                        E = b(r, P);
                    a = await h(P, E, y)
                } else {
                    const y = e ? ? s.length;
                    do {
                        const b = l === 0 ? i[0] ? ? r.initialPageParam : Jd(r, a);
                        if (l > 0 && b == null) break;
                        a = await h(a, b), l++
                    } while (l < y)
                }
                return a
            };
            t.options.persister ? t.fetchFn = () => {
                var x, w;
                return (w = (x = t.options).persister) == null ? void 0 : w.call(x, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = u
        }
    }
}

function Jd(e, {
    pages: t,
    pageParams: n
}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function dy(e, {
    pages: t,
    pageParams: n
}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var fe, xn, wn, Wr, Gr, Sn, Qr, Kr, Ff, fy = (Ff = class {
        constructor(e = {}) {
            Z(this, fe);
            Z(this, xn);
            Z(this, wn);
            Z(this, Wr);
            Z(this, Gr);
            Z(this, Sn);
            Z(this, Qr);
            Z(this, Kr);
            G(this, fe, e.queryCache || new ay), G(this, xn, e.mutationCache || new cy), G(this, wn, e.defaultOptions || {}), G(this, Wr, new Map), G(this, Gr, new Map), G(this, Sn, 0)
        }
        mount() {
            xs(this, Sn)._++, j(this, Sn) === 1 && (G(this, Qr, sh.subscribe(async e => {
                e && (await this.resumePausedMutations(), j(this, fe).onFocus())
            })), G(this, Kr, Ti.subscribe(async e => {
                e && (await this.resumePausedMutations(), j(this, fe).onOnline())
            })))
        }
        unmount() {
            var e, t;
            xs(this, Sn)._--, j(this, Sn) === 0 && ((e = j(this, Qr)) == null || e.call(this), G(this, Qr, void 0), (t = j(this, Kr)) == null || t.call(this), G(this, Kr, void 0))
        }
        isFetching(e) {
            return j(this, fe).findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return j(this, xn).findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = j(this, fe).get(t.queryHash)) == null ? void 0 : n.state.data
        }
        ensureQueryData(e) {
            const t = this.defaultQueryOptions(e),
                n = j(this, fe).build(this, t),
                r = n.state.data;
            return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Ql(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r))
        }
        getQueriesData(e) {
            return j(this, fe).findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const r = n.data;
                return [t, r]
            })
        }
        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                o = j(this, fe).get(r.queryHash),
                s = o == null ? void 0 : o.state.data,
                i = H2(t, s);
            if (i !== void 0) return j(this, fe).build(this, r).setData(i, { ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return _e.batch(() => j(this, fe).findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, n)]))
        }
        getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = j(this, fe).get(t.queryHash)) == null ? void 0 : n.state
        }
        removeQueries(e) {
            const t = j(this, fe);
            _e.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = j(this, fe);
            return _e.batch(() => (n.findAll(e).forEach(r => {
                r.reset()
            }), this.refetchQueries({
                type: "active",
                ...e
            }, t)))
        }
        cancelQueries(e, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                r = _e.batch(() => j(this, fe).findAll(e).map(o => o.cancel(n)));
            return Promise.all(r).then(gt).catch(gt)
        }
        invalidateQueries(e, t = {}) {
            return _e.batch(() => (j(this, fe).findAll(e).forEach(n => {
                n.invalidate()
            }), (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...e,
                type: (e == null ? void 0 : e.refetchType) ? ? (e == null ? void 0 : e.type) ? ? "active"
            }, t)))
        }
        refetchQueries(e, t = {}) {
            const n = { ...t,
                    cancelRefetch: t.cancelRefetch ? ? !0
                },
                r = _e.batch(() => j(this, fe).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
                    let s = o.fetch(void 0, n);
                    return n.throwOnError || (s = s.catch(gt)), o.state.fetchStatus === "paused" ? Promise.resolve() : s
                }));
            return Promise.all(r).then(gt)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = j(this, fe).build(this, t);
            return n.isStaleByTime(Ql(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(gt).catch(gt)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = Yd(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(gt).catch(gt)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = Yd(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return Ti.isOnline() ? j(this, xn).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return j(this, fe)
        }
        getMutationCache() {
            return j(this, xn)
        }
        getDefaultOptions() {
            return j(this, wn)
        }
        setDefaultOptions(e) {
            G(this, wn, e)
        }
        setQueryDefaults(e, t) {
            j(this, Wr).set(ns(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...j(this, Wr).values()],
                n = {};
            return t.forEach(r => {
                rs(e, r.queryKey) && Object.assign(n, r.defaultOptions)
            }), n
        }
        setMutationDefaults(e, t) {
            j(this, Gr).set(ns(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...j(this, Gr).values()],
                n = {};
            return t.forEach(r => {
                rs(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...j(this, wn).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = lc(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === uc && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : { ...j(this, wn).mutations,
                ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            j(this, fe).clear(), j(this, xn).clear()
        }
    }, fe = new WeakMap, xn = new WeakMap, wn = new WeakMap, Wr = new WeakMap, Gr = new WeakMap, Sn = new WeakMap, Qr = new WeakMap, Kr = new WeakMap, Ff),
    py = S.createContext(void 0),
    my = ({
        client: e,
        children: t
    }) => (S.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), d.jsx(py.Provider, {
        value: e,
        children: t
    }));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ji() {
    return ji = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ji.apply(this, arguments)
}
var Pn;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Pn || (Pn = {}));
const Zd = "popstate";

function hy(e) {
    e === void 0 && (e = {});

    function t(r, o) {
        let {
            pathname: s,
            search: i,
            hash: a
        } = r.location;
        return Xl("", {
            pathname: s,
            search: i,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(r, o) {
        return typeof o == "string" ? o : dh(o)
    }
    return vy(t, n, null, e)
}

function Ge(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function ch(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function gy() {
    return Math.random().toString(36).substr(2, 8)
}

function ef(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Xl(e, t, n, r) {
    return n === void 0 && (n = null), ji({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? ta(t) : t, {
        state: n,
        key: t && t.key || r || gy()
    })
}

function dh(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function ta(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function vy(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: o = document.defaultView,
        v5Compat: s = !1
    } = r, i = o.history, a = Pn.Pop, l = null, u = f();
    u == null && (u = 0, i.replaceState(ji({}, i.state, {
        idx: u
    }), ""));

    function f() {
        return (i.state || {
            idx: null
        }).idx
    }

    function m() {
        a = Pn.Pop;
        let w = f(),
            v = w == null ? null : w - u;
        u = w, l && l({
            action: a,
            location: x.location,
            delta: v
        })
    }

    function g(w, v) {
        a = Pn.Push;
        let h = Xl(x.location, w, v);
        u = f() + 1;
        let y = ef(h, u),
            b = x.createHref(h);
        try {
            i.pushState(y, "", b)
        } catch (P) {
            if (P instanceof DOMException && P.name === "DataCloneError") throw P;
            o.location.assign(b)
        }
        s && l && l({
            action: a,
            location: x.location,
            delta: 1
        })
    }

    function p(w, v) {
        a = Pn.Replace;
        let h = Xl(x.location, w, v);
        u = f();
        let y = ef(h, u),
            b = x.createHref(h);
        i.replaceState(y, "", b), s && l && l({
            action: a,
            location: x.location,
            delta: 0
        })
    }

    function C(w) {
        let v = o.location.origin !== "null" ? o.location.origin : o.location.href,
            h = typeof w == "string" ? w : dh(w);
        return h = h.replace(/ $/, "%20"), Ge(v, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, v)
    }
    let x = {
        get action() {
            return a
        },
        get location() {
            return e(o, i)
        },
        listen(w) {
            if (l) throw new Error("A history only accepts one active listener");
            return o.addEventListener(Zd, m), l = w, () => {
                o.removeEventListener(Zd, m), l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: C,
        encodeLocation(w) {
            let v = C(w);
            return {
                pathname: v.pathname,
                search: v.search,
                hash: v.hash
            }
        },
        push: g,
        replace: p,
        go(w) {
            return i.go(w)
        }
    };
    return x
}
var tf;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(tf || (tf = {}));

function yy(e, t, n) {
    return n === void 0 && (n = "/"), xy(e, t, n, !1)
}

function xy(e, t, n, r) {
    let o = typeof t == "string" ? ta(t) : t,
        s = mh(o.pathname || "/", n);
    if (s == null) return null;
    let i = fh(e);
    wy(i);
    let a = null;
    for (let l = 0; a == null && l < i.length; ++l) {
        let u = Vy(s);
        a = jy(i[l], u, r)
    }
    return a
}

function fh(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (s, i, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: i,
            route: s
        };
        l.relativePath.startsWith("/") && (Ge(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
        let u = Ir([r, l.relativePath]),
            f = n.concat(l);
        s.children && s.children.length > 0 && (Ge(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), fh(s.children, t, f, u)), !(s.path == null && !s.index) && t.push({
            path: u,
            score: Ny(u, s.index),
            routesMeta: f
        })
    };
    return e.forEach((s, i) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?"))) o(s, i);
        else
            for (let l of ph(s.path)) o(s, i, l)
    }), t
}

function ph(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, o = n.endsWith("?"), s = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [s, ""] : [s];
    let i = ph(r.join("/")),
        a = [];
    return a.push(...i.map(l => l === "" ? s : [s, l].join("/"))), o && a.push(...i), a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}

function wy(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Ty(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Sy = /^:[\w-]+$/,
    Cy = 3,
    by = 2,
    Py = 1,
    Ey = 10,
    ky = -2,
    nf = e => e === "*";

function Ny(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(nf) && (r += ky), t && (r += by), n.filter(o => !nf(o)).reduce((o, s) => o + (Sy.test(s) ? Cy : s === "" ? Py : Ey), r)
}

function Ty(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function jy(e, t, n) {
    let {
        routesMeta: r
    } = e, o = {}, s = "/", i = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a],
            u = a === r.length - 1,
            f = s === "/" ? t : t.slice(s.length) || "/",
            m = rf({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: u
            }, f),
            g = l.route;
        if (!m && u && n && !r[r.length - 1].route.index && (m = rf({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: !1
            }, f)), !m) return null;
        Object.assign(o, m.params), i.push({
            params: o,
            pathname: Ir([s, m.pathname]),
            pathnameBase: Ay(Ir([s, m.pathnameBase])),
            route: g
        }), m.pathnameBase !== "/" && (s = Ir([s, m.pathnameBase]))
    }
    return i
}

function rf(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = Ry(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let s = o[0],
        i = s.replace(/(.)\/+$/, "$1"),
        a = o.slice(1);
    return {
        params: r.reduce((u, f, m) => {
            let {
                paramName: g,
                isOptional: p
            } = f;
            if (g === "*") {
                let x = a[m] || "";
                i = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1")
            }
            const C = a[m];
            return p && !C ? u[g] = void 0 : u[g] = (C || "").replace(/%2F/g, "/"), u
        }, {}),
        pathname: s,
        pathnameBase: i,
        pattern: e
    }
}

function Ry(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), ch(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, a, l) => (r.push({
            paramName: a,
            isOptional: l != null
        }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function Vy(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return ch(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function mh(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Ir = e => e.join("/").replace(/\/\/+/g, "/"),
    Ay = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");

function Ly(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const hh = ["post", "put", "patch", "delete"];
new Set(hh);
const My = ["get", ...hh];
new Set(My);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ri() {
    return Ri = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ri.apply(this, arguments)
}
const Oy = S.createContext(null),
    _y = S.createContext(null),
    gh = S.createContext(null),
    na = S.createContext(null),
    ra = S.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    vh = S.createContext(null);

function cc() {
    return S.useContext(na) != null
}

function yh() {
    return cc() || Ge(!1), S.useContext(na).location
}

function Dy(e, t) {
    return Iy(e, t)
}

function Iy(e, t, n, r) {
    cc() || Ge(!1);
    let {
        navigator: o
    } = S.useContext(gh), {
        matches: s
    } = S.useContext(ra), i = s[s.length - 1], a = i ? i.params : {};
    i && i.pathname;
    let l = i ? i.pathnameBase : "/";
    i && i.route;
    let u = yh(),
        f;
    if (t) {
        var m;
        let w = typeof t == "string" ? ta(t) : t;
        l === "/" || (m = w.pathname) != null && m.startsWith(l) || Ge(!1), f = w
    } else f = u;
    let g = f.pathname || "/",
        p = g;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        p = "/" + g.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let C = yy(e, {
            pathname: p
        }),
        x = By(C && C.map(w => Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: Ir([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
            pathnameBase: w.pathnameBase === "/" ? l : Ir([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
        })), s, n, r);
    return t && x ? S.createElement(na.Provider, {
        value: {
            location: Ri({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, f),
            navigationType: Pn.Pop
        }
    }, x) : x
}

function Uy() {
    let e = Qy(),
        t = Ly(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? S.createElement("pre", {
        style: o
    }, n) : null, null)
}
const zy = S.createElement(Uy, null);
class Fy extends S.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? S.createElement(ra.Provider, {
            value: this.props.routeContext
        }, S.createElement(vh.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function $y(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, o = S.useContext(Oy);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), S.createElement(ra.Provider, {
        value: t
    }, r)
}

function By(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var s;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let i = e,
        a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let f = i.findIndex(m => m.route.id && (a == null ? void 0 : a[m.route.id]) !== void 0);
        f >= 0 || Ge(!1), i = i.slice(0, Math.min(i.length, f + 1))
    }
    let l = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let f = 0; f < i.length; f++) {
            let m = i[f];
            if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (u = f), m.route.id) {
                let {
                    loaderData: g,
                    errors: p
                } = n, C = m.route.loader && g[m.route.id] === void 0 && (!p || p[m.route.id] === void 0);
                if (m.route.lazy || C) {
                    l = !0, u >= 0 ? i = i.slice(0, u + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight((f, m, g) => {
        let p, C = !1,
            x = null,
            w = null;
        n && (p = a && m.route.id ? a[m.route.id] : void 0, x = m.route.errorElement || zy, l && (u < 0 && g === 0 ? (C = !0, w = null) : u === g && (C = !0, w = m.route.hydrateFallbackElement || null)));
        let v = t.concat(i.slice(0, g + 1)),
            h = () => {
                let y;
                return p ? y = x : C ? y = w : m.route.Component ? y = S.createElement(m.route.Component, null) : m.route.element ? y = m.route.element : y = f, S.createElement($y, {
                    match: m,
                    routeContext: {
                        outlet: f,
                        matches: v,
                        isDataRoute: n != null
                    },
                    children: y
                })
            };
        return n && (m.route.ErrorBoundary || m.route.errorElement || g === 0) ? S.createElement(Fy, {
            location: n.location,
            revalidation: n.revalidation,
            component: x,
            error: p,
            children: h(),
            routeContext: {
                outlet: null,
                matches: v,
                isDataRoute: !0
            }
        }) : h()
    }, null)
}
var ql = function(e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}(ql || {});

function Hy(e) {
    let t = S.useContext(_y);
    return t || Ge(!1), t
}

function Wy(e) {
    let t = S.useContext(ra);
    return t || Ge(!1), t
}

function Gy(e) {
    let t = Wy(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Ge(!1), n.route.id
}

function Qy() {
    var e;
    let t = S.useContext(vh),
        n = Hy(ql.UseRouteError),
        r = Gy(ql.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function Ky(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath
}

function Yl(e) {
    Ge(!1)
}

function Xy(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = Pn.Pop,
        navigator: s,
        static: i = !1,
        future: a
    } = e;
    cc() && Ge(!1);
    let l = t.replace(/^\/*/, "/"),
        u = S.useMemo(() => ({
            basename: l,
            navigator: s,
            static: i,
            future: Ri({
                v7_relativeSplatPath: !1
            }, a)
        }), [l, a, s, i]);
    typeof r == "string" && (r = ta(r));
    let {
        pathname: f = "/",
        search: m = "",
        hash: g = "",
        state: p = null,
        key: C = "default"
    } = r, x = S.useMemo(() => {
        let w = mh(f, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: m,
                hash: g,
                state: p,
                key: C
            },
            navigationType: o
        }
    }, [l, f, m, g, p, C, o]);
    return x == null ? null : S.createElement(gh.Provider, {
        value: u
    }, S.createElement(na.Provider, {
        children: n,
        value: x
    }))
}

function qy(e) {
    let {
        children: t,
        location: n
    } = e;
    return Dy(Jl(t), n)
}
new Promise(() => {});

function Jl(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return S.Children.forEach(e, (r, o) => {
        if (!S.isValidElement(r)) return;
        let s = [...t, o];
        if (r.type === S.Fragment) {
            n.push.apply(n, Jl(r.props.children, s));
            return
        }
        r.type !== Yl && Ge(!1), !r.props.index || !r.props.children || Ge(!1);
        let i = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = Jl(r.props.children, s)), n.push(i)
    }), n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Yy = "6";
try {
    window.__reactRouterVersion = Yy
} catch {}
const Jy = "startTransition",
    of = vu[Jy];

function Zy(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: o
    } = e, s = S.useRef();
    s.current == null && (s.current = hy({
        window: o,
        v5Compat: !0
    }));
    let i = s.current,
        [a, l] = S.useState({
            action: i.action,
            location: i.location
        }),
        {
            v7_startTransition: u
        } = r || {},
        f = S.useCallback(m => {
            u && of ? of (() => l(m)) : l(m)
        }, [l, u]);
    return S.useLayoutEffect(() => i.listen(f), [i, f]), S.useEffect(() => Ky(r), [r]), S.createElement(Xy, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: i,
        future: r
    })
}
var sf;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(sf || (sf = {}));
var af;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(af || (af = {}));
var lf = ["light", "dark"],
    e1 = "(prefers-color-scheme: dark)",
    t1 = S.createContext(void 0),
    n1 = {
        setTheme: e => {},
        themes: []
    },
    r1 = () => {
        var e;
        return (e = S.useContext(t1)) != null ? e : n1
    };
S.memo(({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: s,
    value: i,
    attrs: a,
    nonce: l
}) => {
    let u = s === "system",
        f = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(C=>`'${C}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
        m = o ? lf.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
        g = (C, x = !1, w = !0) => {
            let v = i ? i[C] : C,
                h = x ? C + "|| ''" : `'${v}'`,
                y = "";
            return o && w && !x && lf.includes(C) && (y += `d.style.colorScheme = '${C}';`), n === "class" ? x || v ? y += `c.add(${h})` : y += "null" : v && (y += `d[s](n,${h})`), y
        },
        p = e ? `!function(){${f}${g(e)}}()` : r ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${e1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${g(i?"x[e]":"e",!0)}}${u?"":"else{"+g(s,!1,!1)+"}"}${m}}catch(e){}}()` : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${g(i?"x[e]":"e",!0)}}else{${g(s,!1,!1)};}${m}}catch(t){}}();`;
    return S.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: p
        }
    })
});
var o1 = e => {
        switch (e) {
            case "success":
                return a1;
            case "info":
                return u1;
            case "warning":
                return l1;
            case "error":
                return c1;
            default:
                return null
        }
    },
    s1 = Array(12).fill(0),
    i1 = ({
        visible: e,
        className: t
    }) => A.createElement("div", {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e
    }, A.createElement("div", {
        className: "sonner-spinner"
    }, s1.map((n, r) => A.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${r}`
    })))),
    a1 = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    l1 = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    u1 = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    c1 = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    d1 = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, A.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), A.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })),
    f1 = () => {
        let [e, t] = A.useState(document.hidden);
        return A.useEffect(() => {
            let n = () => {
                t(document.hidden)
            };
            return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n)
        }, []), e
    },
    Zl = 1,
    p1 = class {
        constructor() {
            this.subscribe = e => (this.subscribers.push(e), () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1)
            }), this.publish = e => {
                this.subscribers.forEach(t => t(e))
            }, this.addToast = e => {
                this.publish(e), this.toasts = [...this.toasts, e]
            }, this.create = e => {
                var t;
                let {
                    message: n,
                    ...r
                } = e, o = typeof(e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Zl++, s = this.toasts.find(a => a.id === o), i = e.dismissible === void 0 ? !0 : e.dismissible;
                return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), s ? this.toasts = this.toasts.map(a => a.id === o ? (this.publish({ ...a,
                    ...e,
                    id: o,
                    title: n
                }), { ...a,
                    ...e,
                    id: o,
                    dismissible: i,
                    title: n
                }) : a) : this.addToast({
                    title: n,
                    ...r,
                    dismissible: i,
                    id: o
                }), o
            }, this.dismiss = e => (this.dismissedToasts.add(e), e || this.toasts.forEach(t => {
                this.subscribers.forEach(n => n({
                    id: t.id,
                    dismiss: !0
                }))
            }), this.subscribers.forEach(t => t({
                id: e,
                dismiss: !0
            })), e), this.message = (e, t) => this.create({ ...t,
                message: e
            }), this.error = (e, t) => this.create({ ...t,
                message: e,
                type: "error"
            }), this.success = (e, t) => this.create({ ...t,
                type: "success",
                message: e
            }), this.info = (e, t) => this.create({ ...t,
                type: "info",
                message: e
            }), this.warning = (e, t) => this.create({ ...t,
                type: "warning",
                message: e
            }), this.loading = (e, t) => this.create({ ...t,
                type: "loading",
                message: e
            }), this.promise = (e, t) => {
                if (!t) return;
                let n;
                t.loading !== void 0 && (n = this.create({ ...t,
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description: typeof t.description != "function" ? t.description : void 0
                }));
                let r = e instanceof Promise ? e : e(),
                    o = n !== void 0,
                    s, i = r.then(async l => {
                        if (s = ["resolve", l], A.isValidElement(l)) o = !1, this.create({
                            id: n,
                            type: "default",
                            message: l
                        });
                        else if (h1(l) && !l.ok) {
                            o = !1;
                            let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error,
                                f = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: u,
                                description: f
                            })
                        } else if (t.success !== void 0) {
                            o = !1;
                            let u = typeof t.success == "function" ? await t.success(l) : t.success,
                                f = typeof t.description == "function" ? await t.description(l) : t.description;
                            this.create({
                                id: n,
                                type: "success",
                                message: u,
                                description: f
                            })
                        }
                    }).catch(async l => {
                        if (s = ["reject", l], t.error !== void 0) {
                            o = !1;
                            let u = typeof t.error == "function" ? await t.error(l) : t.error,
                                f = typeof t.description == "function" ? await t.description(l) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: u,
                                description: f
                            })
                        }
                    }).finally(() => {
                        var l;
                        o && (this.dismiss(n), n = void 0), (l = t.finally) == null || l.call(t)
                    }),
                    a = () => new Promise((l, u) => i.then(() => s[0] === "reject" ? u(s[1]) : l(s[1])).catch(u));
                return typeof n != "string" && typeof n != "number" ? {
                    unwrap: a
                } : Object.assign(n, {
                    unwrap: a
                })
            }, this.custom = (e, t) => {
                let n = (t == null ? void 0 : t.id) || Zl++;
                return this.create({
                    jsx: e(n),
                    id: n,
                    ...t
                }), n
            }, this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
        }
    },
    ze = new p1,
    m1 = (e, t) => {
        let n = (t == null ? void 0 : t.id) || Zl++;
        return ze.addToast({
            title: e,
            ...t,
            id: n
        }), n
    },
    h1 = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number",
    g1 = m1,
    v1 = () => ze.toasts,
    y1 = () => ze.getActiveToasts();
Object.assign(g1, {
    success: ze.success,
    info: ze.info,
    warning: ze.warning,
    error: ze.error,
    custom: ze.custom,
    message: ze.message,
    promise: ze.promise,
    dismiss: ze.dismiss,
    loading: ze.loading
}, {
    getHistory: v1,
    getToasts: y1
});

function x1(e, {
    insertAt: t
} = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
x1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function Is(e) {
    return e.label !== void 0
}
var w1 = 3,
    S1 = "32px",
    C1 = "16px",
    uf = 4e3,
    b1 = 356,
    P1 = 14,
    E1 = 20,
    k1 = 200;

function mt(...e) {
    return e.filter(Boolean).join(" ")
}

function N1(e) {
    let [t, n] = e.split("-"), r = [];
    return t && r.push(t), n && r.push(n), r
}
var T1 = e => {
    var t, n, r, o, s, i, a, l, u, f, m;
    let {
        invert: g,
        toast: p,
        unstyled: C,
        interacting: x,
        setHeights: w,
        visibleToasts: v,
        heights: h,
        index: y,
        toasts: b,
        expanded: P,
        removeToast: E,
        defaultRichColors: k,
        closeButton: V,
        style: O,
        cancelButtonStyle: M,
        actionButtonStyle: F,
        className: I = "",
        descriptionClassName: K = "",
        duration: _,
        position: X,
        gap: z,
        loadingIcon: $,
        expandByDefault: T,
        classNames: R,
        icons: D,
        closeButtonAriaLabel: B = "Close toast",
        pauseWhenPageIsHidden: N
    } = e, [H, Y] = A.useState(null), [ve, Ne] = A.useState(null), [ee, pr] = A.useState(!1), [nn, Fn] = A.useState(!1), [rn, mr] = A.useState(!1), [on, gs] = A.useState(!1), [ga, vs] = A.useState(!1), [va, fo] = A.useState(0), [hr, Vc] = A.useState(0), po = A.useRef(p.duration || _ || uf), Ac = A.useRef(null), $n = A.useRef(null), ug = y === 0, cg = y + 1 <= v, nt = p.type, gr = p.dismissible !== !1, dg = p.className || "", fg = p.descriptionClassName || "", ys = A.useMemo(() => h.findIndex(W => W.toastId === p.id) || 0, [h, p.id]), pg = A.useMemo(() => {
        var W;
        return (W = p.closeButton) != null ? W : V
    }, [p.closeButton, V]), Lc = A.useMemo(() => p.duration || _ || uf, [p.duration, _]), ya = A.useRef(0), vr = A.useRef(0), Mc = A.useRef(0), yr = A.useRef(null), [mg, hg] = X.split("-"), Oc = A.useMemo(() => h.reduce((W, ne, ae) => ae >= ys ? W : W + ne.height, 0), [h, ys]), _c = f1(), gg = p.invert || g, xa = nt === "loading";
    vr.current = A.useMemo(() => ys * z + Oc, [ys, Oc]), A.useEffect(() => {
        po.current = Lc
    }, [Lc]), A.useEffect(() => {
        pr(!0)
    }, []), A.useEffect(() => {
        let W = $n.current;
        if (W) {
            let ne = W.getBoundingClientRect().height;
            return Vc(ne), w(ae => [{
                toastId: p.id,
                height: ne,
                position: p.position
            }, ...ae]), () => w(ae => ae.filter(ct => ct.toastId !== p.id))
        }
    }, [w, p.id]), A.useLayoutEffect(() => {
        if (!ee) return;
        let W = $n.current,
            ne = W.style.height;
        W.style.height = "auto";
        let ae = W.getBoundingClientRect().height;
        W.style.height = ne, Vc(ae), w(ct => ct.find(dt => dt.toastId === p.id) ? ct.map(dt => dt.toastId === p.id ? { ...dt,
            height: ae
        } : dt) : [{
            toastId: p.id,
            height: ae,
            position: p.position
        }, ...ct])
    }, [ee, p.title, p.description, w, p.id]);
    let sn = A.useCallback(() => {
        Fn(!0), fo(vr.current), w(W => W.filter(ne => ne.toastId !== p.id)), setTimeout(() => {
            E(p)
        }, k1)
    }, [p, E, w, vr]);
    A.useEffect(() => {
        if (p.promise && nt === "loading" || p.duration === 1 / 0 || p.type === "loading") return;
        let W;
        return P || x || N && _c ? (() => {
            if (Mc.current < ya.current) {
                let ne = new Date().getTime() - ya.current;
                po.current = po.current - ne
            }
            Mc.current = new Date().getTime()
        })() : po.current !== 1 / 0 && (ya.current = new Date().getTime(), W = setTimeout(() => {
            var ne;
            (ne = p.onAutoClose) == null || ne.call(p, p), sn()
        }, po.current)), () => clearTimeout(W)
    }, [P, x, p, nt, N, _c, sn]), A.useEffect(() => {
        p.delete && sn()
    }, [sn, p.delete]);

    function vg() {
        var W, ne, ae;
        return D != null && D.loading ? A.createElement("div", {
            className: mt(R == null ? void 0 : R.loader, (W = p == null ? void 0 : p.classNames) == null ? void 0 : W.loader, "sonner-loader"),
            "data-visible": nt === "loading"
        }, D.loading) : $ ? A.createElement("div", {
            className: mt(R == null ? void 0 : R.loader, (ne = p == null ? void 0 : p.classNames) == null ? void 0 : ne.loader, "sonner-loader"),
            "data-visible": nt === "loading"
        }, $) : A.createElement(i1, {
            className: mt(R == null ? void 0 : R.loader, (ae = p == null ? void 0 : p.classNames) == null ? void 0 : ae.loader),
            visible: nt === "loading"
        })
    }
    return A.createElement("li", {
        tabIndex: 0,
        ref: $n,
        className: mt(I, dg, R == null ? void 0 : R.toast, (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast, R == null ? void 0 : R.default, R == null ? void 0 : R[nt], (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[nt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = p.richColors) != null ? r : k,
        "data-styled": !(p.jsx || p.unstyled || C),
        "data-mounted": ee,
        "data-promise": !!p.promise,
        "data-swiped": ga,
        "data-removed": nn,
        "data-visible": cg,
        "data-y-position": mg,
        "data-x-position": hg,
        "data-index": y,
        "data-front": ug,
        "data-swiping": rn,
        "data-dismissible": gr,
        "data-type": nt,
        "data-invert": gg,
        "data-swipe-out": on,
        "data-swipe-direction": ve,
        "data-expanded": !!(P || T && ee),
        style: {
            "--index": y,
            "--toasts-before": y,
            "--z-index": b.length - y,
            "--offset": `${nn?va:vr.current}px`,
            "--initial-height": T ? "auto" : `${hr}px`,
            ...O,
            ...p.style
        },
        onDragEnd: () => {
            mr(!1), Y(null), yr.current = null
        },
        onPointerDown: W => {
            xa || !gr || (Ac.current = new Date, fo(vr.current), W.target.setPointerCapture(W.pointerId), W.target.tagName !== "BUTTON" && (mr(!0), yr.current = {
                x: W.clientX,
                y: W.clientY
            }))
        },
        onPointerUp: () => {
            var W, ne, ae, ct;
            if (on || !gr) return;
            yr.current = null;
            let dt = Number(((W = $n.current) == null ? void 0 : W.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                an = Number(((ne = $n.current) == null ? void 0 : ne.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                Bn = new Date().getTime() - ((ae = Ac.current) == null ? void 0 : ae.getTime()),
                ft = H === "x" ? dt : an,
                ln = Math.abs(ft) / Bn;
            if (Math.abs(ft) >= E1 || ln > .11) {
                fo(vr.current), (ct = p.onDismiss) == null || ct.call(p, p), Ne(H === "x" ? dt > 0 ? "right" : "left" : an > 0 ? "down" : "up"), sn(), gs(!0), vs(!1);
                return
            }
            mr(!1), Y(null)
        },
        onPointerMove: W => {
            var ne, ae, ct, dt;
            if (!yr.current || !gr || ((ne = window.getSelection()) == null ? void 0 : ne.toString().length) > 0) return;
            let an = W.clientY - yr.current.y,
                Bn = W.clientX - yr.current.x,
                ft = (ae = e.swipeDirections) != null ? ae : N1(X);
            !H && (Math.abs(Bn) > 1 || Math.abs(an) > 1) && Y(Math.abs(Bn) > Math.abs(an) ? "x" : "y");
            let ln = {
                x: 0,
                y: 0
            };
            H === "y" ? (ft.includes("top") || ft.includes("bottom")) && (ft.includes("top") && an < 0 || ft.includes("bottom") && an > 0) && (ln.y = an) : H === "x" && (ft.includes("left") || ft.includes("right")) && (ft.includes("left") && Bn < 0 || ft.includes("right") && Bn > 0) && (ln.x = Bn), (Math.abs(ln.x) > 0 || Math.abs(ln.y) > 0) && vs(!0), (ct = $n.current) == null || ct.style.setProperty("--swipe-amount-x", `${ln.x}px`), (dt = $n.current) == null || dt.style.setProperty("--swipe-amount-y", `${ln.y}px`)
        }
    }, pg && !p.jsx ? A.createElement("button", {
        "aria-label": B,
        "data-disabled": xa,
        "data-close-button": !0,
        onClick: xa || !gr ? () => {} : () => {
            var W;
            sn(), (W = p.onDismiss) == null || W.call(p, p)
        },
        className: mt(R == null ? void 0 : R.closeButton, (o = p == null ? void 0 : p.classNames) == null ? void 0 : o.closeButton)
    }, (s = D == null ? void 0 : D.close) != null ? s : d1) : null, p.jsx || S.isValidElement(p.title) ? p.jsx ? p.jsx : typeof p.title == "function" ? p.title() : p.title : A.createElement(A.Fragment, null, nt || p.icon || p.promise ? A.createElement("div", {
        "data-icon": "",
        className: mt(R == null ? void 0 : R.icon, (i = p == null ? void 0 : p.classNames) == null ? void 0 : i.icon)
    }, p.promise || p.type === "loading" && !p.icon ? p.icon || vg() : null, p.type !== "loading" ? p.icon || (D == null ? void 0 : D[nt]) || o1(nt) : null) : null, A.createElement("div", {
        "data-content": "",
        className: mt(R == null ? void 0 : R.content, (a = p == null ? void 0 : p.classNames) == null ? void 0 : a.content)
    }, A.createElement("div", {
        "data-title": "",
        className: mt(R == null ? void 0 : R.title, (l = p == null ? void 0 : p.classNames) == null ? void 0 : l.title)
    }, typeof p.title == "function" ? p.title() : p.title), p.description ? A.createElement("div", {
        "data-description": "",
        className: mt(K, fg, R == null ? void 0 : R.description, (u = p == null ? void 0 : p.classNames) == null ? void 0 : u.description)
    }, typeof p.description == "function" ? p.description() : p.description) : null), S.isValidElement(p.cancel) ? p.cancel : p.cancel && Is(p.cancel) ? A.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: p.cancelButtonStyle || M,
        onClick: W => {
            var ne, ae;
            Is(p.cancel) && gr && ((ae = (ne = p.cancel).onClick) == null || ae.call(ne, W), sn())
        },
        className: mt(R == null ? void 0 : R.cancelButton, (f = p == null ? void 0 : p.classNames) == null ? void 0 : f.cancelButton)
    }, p.cancel.label) : null, S.isValidElement(p.action) ? p.action : p.action && Is(p.action) ? A.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: p.actionButtonStyle || F,
        onClick: W => {
            var ne, ae;
            Is(p.action) && ((ae = (ne = p.action).onClick) == null || ae.call(ne, W), !W.defaultPrevented && sn())
        },
        className: mt(R == null ? void 0 : R.actionButton, (m = p == null ? void 0 : p.classNames) == null ? void 0 : m.actionButton)
    }, p.action.label) : null))
};

function cf() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}

function j1(e, t) {
    let n = {};
    return [e, t].forEach((r, o) => {
        let s = o === 1,
            i = s ? "--mobile-offset" : "--offset",
            a = s ? C1 : S1;

        function l(u) {
            ["top", "right", "bottom", "left"].forEach(f => {
                n[`${i}-${f}`] = typeof u == "number" ? `${u}px` : u
            })
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${i}-${u}`] = a : n[`${i}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }) : l(a)
    }), n
}
var R1 = S.forwardRef(function(e, t) {
    let {
        invert: n,
        position: r = "bottom-right",
        hotkey: o = ["altKey", "KeyT"],
        expand: s,
        closeButton: i,
        className: a,
        offset: l,
        mobileOffset: u,
        theme: f = "light",
        richColors: m,
        duration: g,
        style: p,
        visibleToasts: C = w1,
        toastOptions: x,
        dir: w = cf(),
        gap: v = P1,
        loadingIcon: h,
        icons: y,
        containerAriaLabel: b = "Notifications",
        pauseWhenPageIsHidden: P
    } = e, [E, k] = A.useState([]), V = A.useMemo(() => Array.from(new Set([r].concat(E.filter(N => N.position).map(N => N.position)))), [E, r]), [O, M] = A.useState([]), [F, I] = A.useState(!1), [K, _] = A.useState(!1), [X, z] = A.useState(f !== "system" ? f : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), $ = A.useRef(null), T = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), R = A.useRef(null), D = A.useRef(!1), B = A.useCallback(N => {
        k(H => {
            var Y;
            return (Y = H.find(ve => ve.id === N.id)) != null && Y.delete || ze.dismiss(N.id), H.filter(({
                id: ve
            }) => ve !== N.id)
        })
    }, []);
    return A.useEffect(() => ze.subscribe(N => {
        if (N.dismiss) {
            k(H => H.map(Y => Y.id === N.id ? { ...Y,
                delete: !0
            } : Y));
            return
        }
        setTimeout(() => {
            th.flushSync(() => {
                k(H => {
                    let Y = H.findIndex(ve => ve.id === N.id);
                    return Y !== -1 ? [...H.slice(0, Y), { ...H[Y],
                        ...N
                    }, ...H.slice(Y + 1)] : [N, ...H]
                })
            })
        })
    }), []), A.useEffect(() => {
        if (f !== "system") {
            z(f);
            return
        }
        if (f === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")), typeof window > "u") return;
        let N = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            N.addEventListener("change", ({
                matches: H
            }) => {
                z(H ? "dark" : "light")
            })
        } catch {
            N.addListener(({
                matches: Y
            }) => {
                try {
                    z(Y ? "dark" : "light")
                } catch (ve) {
                    console.error(ve)
                }
            })
        }
    }, [f]), A.useEffect(() => {
        E.length <= 1 && I(!1)
    }, [E]), A.useEffect(() => {
        let N = H => {
            var Y, ve;
            o.every(Ne => H[Ne] || H.code === Ne) && (I(!0), (Y = $.current) == null || Y.focus()), H.code === "Escape" && (document.activeElement === $.current || (ve = $.current) != null && ve.contains(document.activeElement)) && I(!1)
        };
        return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N)
    }, [o]), A.useEffect(() => {
        if ($.current) return () => {
            R.current && (R.current.focus({
                preventScroll: !0
            }), R.current = null, D.current = !1)
        }
    }, [$.current]), A.createElement("section", {
        ref: t,
        "aria-label": `${b} ${T}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, V.map((N, H) => {
        var Y;
        let [ve, Ne] = N.split("-");
        return E.length ? A.createElement("ol", {
            key: N,
            dir: w === "auto" ? cf() : w,
            tabIndex: -1,
            ref: $,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": X,
            "data-y-position": ve,
            "data-lifted": F && E.length > 1 && !s,
            "data-x-position": Ne,
            style: {
                "--front-toast-height": `${((Y=O[0])==null?void 0:Y.height)||0}px`,
                "--width": `${b1}px`,
                "--gap": `${v}px`,
                ...p,
                ...j1(l, u)
            },
            onBlur: ee => {
                D.current && !ee.currentTarget.contains(ee.relatedTarget) && (D.current = !1, R.current && (R.current.focus({
                    preventScroll: !0
                }), R.current = null))
            },
            onFocus: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || D.current || (D.current = !0, R.current = ee.relatedTarget)
            },
            onMouseEnter: () => I(!0),
            onMouseMove: () => I(!0),
            onMouseLeave: () => {
                K || I(!1)
            },
            onDragEnd: () => I(!1),
            onPointerDown: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || _(!0)
            },
            onPointerUp: () => _(!1)
        }, E.filter(ee => !ee.position && H === 0 || ee.position === N).map((ee, pr) => {
            var nn, Fn;
            return A.createElement(T1, {
                key: ee.id,
                icons: y,
                index: pr,
                toast: ee,
                defaultRichColors: m,
                duration: (nn = x == null ? void 0 : x.duration) != null ? nn : g,
                className: x == null ? void 0 : x.className,
                descriptionClassName: x == null ? void 0 : x.descriptionClassName,
                invert: n,
                visibleToasts: C,
                closeButton: (Fn = x == null ? void 0 : x.closeButton) != null ? Fn : i,
                interacting: K,
                position: N,
                style: x == null ? void 0 : x.style,
                unstyled: x == null ? void 0 : x.unstyled,
                classNames: x == null ? void 0 : x.classNames,
                cancelButtonStyle: x == null ? void 0 : x.cancelButtonStyle,
                actionButtonStyle: x == null ? void 0 : x.actionButtonStyle,
                removeToast: B,
                toasts: E.filter(rn => rn.position == ee.position),
                heights: O.filter(rn => rn.position == ee.position),
                setHeights: M,
                expandByDefault: s,
                gap: v,
                loadingIcon: h,
                expanded: F,
                pauseWhenPageIsHidden: P,
                swipeDirections: e.swipeDirections
            })
        })) : null
    }))
});
const V1 = ({ ...e
    }) => {
        const {
            theme: t = "system"
        } = r1();
        return d.jsx(R1, {
            theme: t,
            className: "toaster group",
            toastOptions: {
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                }
            },
            ...e
        })
    },
    A1 = 1,
    L1 = 1e6;
let Ka = 0;

function M1() {
    return Ka = (Ka + 1) % Number.MAX_SAFE_INTEGER, Ka.toString()
}
const Xa = new Map,
    df = e => {
        if (Xa.has(e)) return;
        const t = setTimeout(() => {
            Xa.delete(e), Io({
                type: "REMOVE_TOAST",
                toastId: e
            })
        }, L1);
        Xa.set(e, t)
    },
    O1 = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, A1)
                };
            case "UPDATE_TOAST":
                return { ...e,
                    toasts: e.toasts.map(n => n.id === t.toast.id ? { ...n,
                        ...t.toast
                    } : n)
                };
            case "DISMISS_TOAST":
                {
                    const {
                        toastId: n
                    } = t;
                    return n ? df(n) : e.toasts.forEach(r => {
                        df(r.id)
                    }),
                    { ...e,
                        toasts: e.toasts.map(r => r.id === n || n === void 0 ? { ...r,
                            open: !1
                        } : r)
                    }
                }
            case "REMOVE_TOAST":
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(n => n.id !== t.toastId)
                }
        }
    },
    ti = [];
let ni = {
    toasts: []
};

function Io(e) {
    ni = O1(ni, e), ti.forEach(t => {
        t(ni)
    })
}

function _1({ ...e
}) {
    const t = M1(),
        n = o => Io({
            type: "UPDATE_TOAST",
            toast: { ...o,
                id: t
            }
        }),
        r = () => Io({
            type: "DISMISS_TOAST",
            toastId: t
        });
    return Io({
        type: "ADD_TOAST",
        toast: { ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }), {
        id: t,
        dismiss: r,
        update: n
    }
}

function D1() {
    const [e, t] = S.useState(ni);
    return S.useEffect(() => (ti.push(t), () => {
        const n = ti.indexOf(t);
        n > -1 && ti.splice(n, 1)
    }), [e]), { ...e,
        toast: _1,
        dismiss: n => Io({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}

function he(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function ff(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function xh(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = ff(o, t);
            return !n && typeof s == "function" && (n = !0), s
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const s = r[o];
                typeof s == "function" ? s() : ff(e[o], null)
            }
        }
    }
}

function Ze(...e) {
    return S.useCallback(xh(...e), e)
}

function ao(e, t = []) {
    let n = [];

    function r(s, i) {
        const a = S.createContext(i),
            l = n.length;
        n = [...n, i];
        const u = m => {
            var v;
            const {
                scope: g,
                children: p,
                ...C
            } = m, x = ((v = g == null ? void 0 : g[e]) == null ? void 0 : v[l]) || a, w = S.useMemo(() => C, Object.values(C));
            return d.jsx(x.Provider, {
                value: w,
                children: p
            })
        };
        u.displayName = s + "Provider";

        function f(m, g) {
            var x;
            const p = ((x = g == null ? void 0 : g[e]) == null ? void 0 : x[l]) || a,
                C = S.useContext(p);
            if (C) return C;
            if (i !== void 0) return i;
            throw new Error(`\`${m}\` must be used within \`${s}\``)
        }
        return [u, f]
    }
    const o = () => {
        const s = n.map(i => S.createContext(i));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return S.useMemo(() => ({
                [`__scope${e}`]: { ...a,
                    [e]: l
                }
            }), [a, l])
        }
    };
    return o.scopeName = e, [r, I1(o, ...t)]
}

function I1(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce((a, {
                useScope: l,
                scopeName: u
            }) => {
                const m = l(s)[`__scope${u}`];
                return { ...a,
                    ...m
                }
            }, {});
            return S.useMemo(() => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    };
    return n.scopeName = t.scopeName, n
}

function eu(e) {
    const t = U1(e),
        n = S.forwardRef((r, o) => {
            const {
                children: s,
                ...i
            } = r, a = S.Children.toArray(s), l = a.find(F1);
            if (l) {
                const u = l.props.children,
                    f = a.map(m => m === l ? S.Children.count(u) > 1 ? S.Children.only(null) : S.isValidElement(u) ? u.props.children : null : m);
                return d.jsx(t, { ...i,
                    ref: o,
                    children: S.isValidElement(u) ? S.cloneElement(u, void 0, f) : null
                })
            }
            return d.jsx(t, { ...i,
                ref: o,
                children: s
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function U1(e) {
    const t = S.forwardRef((n, r) => {
        const {
            children: o,
            ...s
        } = n;
        if (S.isValidElement(o)) {
            const i = B1(o),
                a = $1(s, o.props);
            return o.type !== S.Fragment && (a.ref = r ? xh(r, i) : i), S.cloneElement(o, a)
        }
        return S.Children.count(o) > 1 ? S.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var wh = Symbol("radix.slottable");

function z1(e) {
    const t = ({
        children: n
    }) => d.jsx(d.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`, t.__radixId = wh, t
}

function F1(e) {
    return S.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === wh
}

function $1(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            const l = s(...a);
            return o(...a), l
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function B1(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function Sh(e) {
    const t = e + "CollectionProvider",
        [n, r] = ao(t),
        [o, s] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        i = x => {
            const {
                scope: w,
                children: v
            } = x, h = A.useRef(null), y = A.useRef(new Map).current;
            return d.jsx(o, {
                scope: w,
                itemMap: y,
                collectionRef: h,
                children: v
            })
        };
    i.displayName = t;
    const a = e + "CollectionSlot",
        l = eu(a),
        u = A.forwardRef((x, w) => {
            const {
                scope: v,
                children: h
            } = x, y = s(a, v), b = Ze(w, y.collectionRef);
            return d.jsx(l, {
                ref: b,
                children: h
            })
        });
    u.displayName = a;
    const f = e + "CollectionItemSlot",
        m = "data-radix-collection-item",
        g = eu(f),
        p = A.forwardRef((x, w) => {
            const {
                scope: v,
                children: h,
                ...y
            } = x, b = A.useRef(null), P = Ze(w, b), E = s(f, v);
            return A.useEffect(() => (E.itemMap.set(b, {
                ref: b,
                ...y
            }), () => void E.itemMap.delete(b))), d.jsx(g, {
                [m]: "",
                ref: P,
                children: h
            })
        });
    p.displayName = f;

    function C(x) {
        const w = s(e + "CollectionConsumer", x);
        return A.useCallback(() => {
            const h = w.collectionRef.current;
            if (!h) return [];
            const y = Array.from(h.querySelectorAll(`[${m}]`));
            return Array.from(w.itemMap.values()).sort((E, k) => y.indexOf(E.ref.current) - y.indexOf(k.ref.current))
        }, [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: i,
        Slot: u,
        ItemSlot: p
    }, C, r]
}
var H1 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    Se = H1.reduce((e, t) => {
        const n = eu(`Primitive.${t}`),
            r = S.forwardRef((o, s) => {
                const {
                    asChild: i,
                    ...a
                } = o, l = i ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), d.jsx(l, { ...a,
                    ref: s
                })
            });
        return r.displayName = `Primitive.${t}`, { ...e,
            [t]: r
        }
    }, {});

function Ch(e, t) {
    e && ps.flushSync(() => e.dispatchEvent(t))
}

function On(e) {
    const t = S.useRef(e);
    return S.useEffect(() => {
        t.current = e
    }), S.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function W1(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = On(e);
    S.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var G1 = "DismissableLayer",
    tu = "dismissableLayer.update",
    Q1 = "dismissableLayer.pointerDownOutside",
    K1 = "dismissableLayer.focusOutside",
    pf, bh = S.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    dc = S.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: a,
            ...l
        } = e, u = S.useContext(bh), [f, m] = S.useState(null), g = (f == null ? void 0 : f.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, p] = S.useState({}), C = Ze(t, k => m(k)), x = Array.from(u.layers), [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = x.indexOf(w), h = f ? x.indexOf(f) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, b = h >= v, P = q1(k => {
            const V = k.target,
                O = [...u.branches].some(M => M.contains(V));
            !b || O || (o == null || o(k), i == null || i(k), k.defaultPrevented || a == null || a())
        }, g), E = Y1(k => {
            const V = k.target;
            [...u.branches].some(M => M.contains(V)) || (s == null || s(k), i == null || i(k), k.defaultPrevented || a == null || a())
        }, g);
        return W1(k => {
            h === u.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && a && (k.preventDefault(), a()))
        }, g), S.useEffect(() => {
            if (f) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (pf = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), mf(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = pf)
            }
        }, [f, g, n, u]), S.useEffect(() => () => {
            f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), mf())
        }, [f, u]), S.useEffect(() => {
            const k = () => p({});
            return document.addEventListener(tu, k), () => document.removeEventListener(tu, k)
        }, []), d.jsx(Se.div, { ...l,
            ref: C,
            style: {
                pointerEvents: y ? b ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: he(e.onFocusCapture, E.onFocusCapture),
            onBlurCapture: he(e.onBlurCapture, E.onBlurCapture),
            onPointerDownCapture: he(e.onPointerDownCapture, P.onPointerDownCapture)
        })
    });
dc.displayName = G1;
var X1 = "DismissableLayerBranch",
    Ph = S.forwardRef((e, t) => {
        const n = S.useContext(bh),
            r = S.useRef(null),
            o = Ze(t, r);
        return S.useEffect(() => {
            const s = r.current;
            if (s) return n.branches.add(s), () => {
                n.branches.delete(s)
            }
        }, [n.branches]), d.jsx(Se.div, { ...e,
            ref: o
        })
    });
Ph.displayName = X1;

function q1(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = On(e),
        r = S.useRef(!1),
        o = S.useRef(() => {});
    return S.useEffect(() => {
        const s = a => {
                if (a.target && !r.current) {
                    let l = function() {
                        Eh(Q1, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: a
                    };
                    a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
                        once: !0
                    })) : l()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            i = window.setTimeout(() => {
                t.addEventListener("pointerdown", s)
            }, 0);
        return () => {
            window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function Y1(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = On(e),
        r = S.useRef(!1);
    return S.useEffect(() => {
        const o = s => {
            s.target && !r.current && Eh(K1, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function mf() {
    const e = new CustomEvent(tu);
    document.dispatchEvent(e)
}

function Eh(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Ch(o, s) : o.dispatchEvent(s)
}
var J1 = dc,
    Z1 = Ph,
    Dt = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {},
    ex = "Portal",
    kh = S.forwardRef((e, t) => {
        var a;
        const {
            container: n,
            ...r
        } = e, [o, s] = S.useState(!1);
        Dt(() => s(!0), []);
        const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
        return i ? th.createPortal(d.jsx(Se.div, { ...r,
            ref: t
        }), i) : null
    });
kh.displayName = ex;

function tx(e, t) {
    return S.useReducer((n, r) => t[n][r] ? ? n, e)
}
var oa = e => {
    const {
        present: t,
        children: n
    } = e, r = nx(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : S.Children.only(n), s = Ze(r.ref, rx(o));
    return typeof n == "function" || r.isPresent ? S.cloneElement(o, {
        ref: s
    }) : null
};
oa.displayName = "Presence";

function nx(e) {
    const [t, n] = S.useState(), r = S.useRef(null), o = S.useRef(e), s = S.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = tx(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return S.useEffect(() => {
        const u = Us(r.current);
        s.current = a === "mounted" ? u : "none"
    }, [a]), Dt(() => {
        const u = r.current,
            f = o.current;
        if (f !== e) {
            const g = s.current,
                p = Us(u);
            e ? l("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(f && g !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, l]), Dt(() => {
        if (t) {
            let u;
            const f = t.ownerDocument.defaultView ? ? window,
                m = p => {
                    const x = Us(r.current).includes(p.animationName);
                    if (p.target === t && x && (l("ANIMATION_END"), !o.current)) {
                        const w = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                        })
                    }
                },
                g = p => {
                    p.target === t && (s.current = Us(r.current))
                };
            return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
                f.clearTimeout(u), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m)
            }
        } else l("ANIMATION_END")
    }, [t, l]), {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: S.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null, n(u)
        }, [])
    }
}

function Us(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function rx(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var ox = vu[" useInsertionEffect ".trim().toString()] || Dt;

function sa({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r
}) {
    const [o, s, i] = sx({
        defaultProp: t,
        onChange: n
    }), a = e !== void 0, l = a ? e : o; {
        const f = S.useRef(e !== void 0);
        S.useEffect(() => {
            const m = f.current;
            m !== a && console.warn(`${r} is changing from ${m?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), f.current = a
        }, [a, r])
    }
    const u = S.useCallback(f => {
        var m;
        if (a) {
            const g = ix(f) ? f(e) : f;
            g !== e && ((m = i.current) == null || m.call(i, g))
        } else s(f)
    }, [a, e, s, i]);
    return [l, u]
}

function sx({
    defaultProp: e,
    onChange: t
}) {
    const [n, r] = S.useState(e), o = S.useRef(n), s = S.useRef(t);
    return ox(() => {
        s.current = t
    }, [t]), S.useEffect(() => {
        var i;
        o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n)
    }, [n, o]), [n, r, s]
}

function ix(e) {
    return typeof e == "function"
}
var ax = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    lx = "VisuallyHidden",
    ia = S.forwardRef((e, t) => d.jsx(Se.span, { ...e,
        ref: t,
        style: { ...ax,
            ...e.style
        }
    }));
ia.displayName = lx;
var ux = ia,
    fc = "ToastProvider",
    [pc, cx, dx] = Sh("Toast"),
    [Nh, Qb] = ao("Toast", [dx]),
    [fx, aa] = Nh(fc),
    Th = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: s = 50,
            children: i
        } = e, [a, l] = S.useState(null), [u, f] = S.useState(0), m = S.useRef(!1), g = S.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${fc}\`. Expected non-empty \`string\`.`), d.jsx(pc.Provider, {
            scope: t,
            children: d.jsx(fx, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: o,
                swipeThreshold: s,
                toastCount: u,
                viewport: a,
                onViewportChange: l,
                onToastAdd: S.useCallback(() => f(p => p + 1), []),
                onToastRemove: S.useCallback(() => f(p => p - 1), []),
                isFocusedToastEscapeKeyDownRef: m,
                isClosePausedRef: g,
                children: i
            })
        })
    };
Th.displayName = fc;
var jh = "ToastViewport",
    px = ["F8"],
    nu = "toast.viewportPause",
    ru = "toast.viewportResume",
    Rh = S.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: r = px,
            label: o = "Notifications ({hotkey})",
            ...s
        } = e, i = aa(jh, n), a = cx(n), l = S.useRef(null), u = S.useRef(null), f = S.useRef(null), m = S.useRef(null), g = Ze(t, m, i.onViewportChange), p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), C = i.toastCount > 0;
        S.useEffect(() => {
            const w = v => {
                var y;
                r.length !== 0 && r.every(b => v[b] || v.code === b) && ((y = m.current) == null || y.focus())
            };
            return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w)
        }, [r]), S.useEffect(() => {
            const w = l.current,
                v = m.current;
            if (C && w && v) {
                const h = () => {
                        if (!i.isClosePausedRef.current) {
                            const E = new CustomEvent(nu);
                            v.dispatchEvent(E), i.isClosePausedRef.current = !0
                        }
                    },
                    y = () => {
                        if (i.isClosePausedRef.current) {
                            const E = new CustomEvent(ru);
                            v.dispatchEvent(E), i.isClosePausedRef.current = !1
                        }
                    },
                    b = E => {
                        !w.contains(E.relatedTarget) && y()
                    },
                    P = () => {
                        w.contains(document.activeElement) || y()
                    };
                return w.addEventListener("focusin", h), w.addEventListener("focusout", b), w.addEventListener("pointermove", h), w.addEventListener("pointerleave", P), window.addEventListener("blur", h), window.addEventListener("focus", y), () => {
                    w.removeEventListener("focusin", h), w.removeEventListener("focusout", b), w.removeEventListener("pointermove", h), w.removeEventListener("pointerleave", P), window.removeEventListener("blur", h), window.removeEventListener("focus", y)
                }
            }
        }, [C, i.isClosePausedRef]);
        const x = S.useCallback(({
            tabbingDirection: w
        }) => {
            const h = a().map(y => {
                const b = y.ref.current,
                    P = [b, ...kx(b)];
                return w === "forwards" ? P : P.reverse()
            });
            return (w === "forwards" ? h.reverse() : h).flat()
        }, [a]);
        return S.useEffect(() => {
            const w = m.current;
            if (w) {
                const v = h => {
                    var P, E, k;
                    const y = h.altKey || h.ctrlKey || h.metaKey;
                    if (h.key === "Tab" && !y) {
                        const V = document.activeElement,
                            O = h.shiftKey;
                        if (h.target === w && O) {
                            (P = u.current) == null || P.focus();
                            return
                        }
                        const I = x({
                                tabbingDirection: O ? "backwards" : "forwards"
                            }),
                            K = I.findIndex(_ => _ === V);
                        qa(I.slice(K + 1)) ? h.preventDefault() : O ? (E = u.current) == null || E.focus() : (k = f.current) == null || k.focus()
                    }
                };
                return w.addEventListener("keydown", v), () => w.removeEventListener("keydown", v)
            }
        }, [a, x]), d.jsxs(Z1, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
                pointerEvents: C ? void 0 : "none"
            },
            children: [C && d.jsx(ou, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                    const w = x({
                        tabbingDirection: "forwards"
                    });
                    qa(w)
                }
            }), d.jsx(pc.Slot, {
                scope: n,
                children: d.jsx(Se.ol, {
                    tabIndex: -1,
                    ...s,
                    ref: g
                })
            }), C && d.jsx(ou, {
                ref: f,
                onFocusFromOutsideViewport: () => {
                    const w = x({
                        tabbingDirection: "backwards"
                    });
                    qa(w)
                }
            })]
        })
    });
Rh.displayName = jh;
var Vh = "ToastFocusProxy",
    ou = S.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
        } = e, s = aa(Vh, n);
        return d.jsx(ia, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: i => {
                var u;
                const a = i.relatedTarget;
                !((u = s.viewport) != null && u.contains(a)) && r()
            }
        })
    });
ou.displayName = Vh;
var ms = "Toast",
    mx = "toast.swipeStart",
    hx = "toast.swipeMove",
    gx = "toast.swipeCancel",
    vx = "toast.swipeEnd",
    Ah = S.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: s,
            ...i
        } = e, [a, l] = sa({
            prop: r,
            defaultProp: o ? ? !0,
            onChange: s,
            caller: ms
        });
        return d.jsx(oa, {
            present: n || a,
            children: d.jsx(wx, {
                open: a,
                ...i,
                ref: t,
                onClose: () => l(!1),
                onPause: On(e.onPause),
                onResume: On(e.onResume),
                onSwipeStart: he(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: he(e.onSwipeMove, u => {
                    const {
                        x: f,
                        y: m
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`)
                }),
                onSwipeCancel: he(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: he(e.onSwipeEnd, u => {
                    const {
                        x: f,
                        y: m
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`), l(!1)
                })
            })
        })
    });
Ah.displayName = ms;
var [yx, xx] = Nh(ms, {
    onClose() {}
}), wx = S.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: s,
        onClose: i,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: f,
        onSwipeMove: m,
        onSwipeCancel: g,
        onSwipeEnd: p,
        ...C
    } = e, x = aa(ms, n), [w, v] = S.useState(null), h = Ze(t, _ => v(_)), y = S.useRef(null), b = S.useRef(null), P = o || x.duration, E = S.useRef(0), k = S.useRef(P), V = S.useRef(0), {
        onToastAdd: O,
        onToastRemove: M
    } = x, F = On(() => {
        var X;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((X = x.viewport) == null || X.focus()), i()
    }), I = S.useCallback(_ => {
        !_ || _ === 1 / 0 || (window.clearTimeout(V.current), E.current = new Date().getTime(), V.current = window.setTimeout(F, _))
    }, [F]);
    S.useEffect(() => {
        const _ = x.viewport;
        if (_) {
            const X = () => {
                    I(k.current), u == null || u()
                },
                z = () => {
                    const $ = new Date().getTime() - E.current;
                    k.current = k.current - $, window.clearTimeout(V.current), l == null || l()
                };
            return _.addEventListener(nu, z), _.addEventListener(ru, X), () => {
                _.removeEventListener(nu, z), _.removeEventListener(ru, X)
            }
        }
    }, [x.viewport, P, l, u, I]), S.useEffect(() => {
        s && !x.isClosePausedRef.current && I(P)
    }, [s, P, x.isClosePausedRef, I]), S.useEffect(() => (O(), () => M()), [O, M]);
    const K = S.useMemo(() => w ? Uh(w) : null, [w]);
    return x.viewport ? d.jsxs(d.Fragment, {
        children: [K && d.jsx(Sx, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: K
        }), d.jsx(yx, {
            scope: n,
            onClose: F,
            children: ps.createPortal(d.jsx(pc.ItemSlot, {
                scope: n,
                children: d.jsx(J1, {
                    asChild: !0,
                    onEscapeKeyDown: he(a, () => {
                        x.isFocusedToastEscapeKeyDownRef.current || F(), x.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: d.jsx(Se.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": x.swipeDirection,
                        ...C,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: he(e.onKeyDown, _ => {
                            _.key === "Escape" && (a == null || a(_.nativeEvent), _.nativeEvent.defaultPrevented || (x.isFocusedToastEscapeKeyDownRef.current = !0, F()))
                        }),
                        onPointerDown: he(e.onPointerDown, _ => {
                            _.button === 0 && (y.current = {
                                x: _.clientX,
                                y: _.clientY
                            })
                        }),
                        onPointerMove: he(e.onPointerMove, _ => {
                            if (!y.current) return;
                            const X = _.clientX - y.current.x,
                                z = _.clientY - y.current.y,
                                $ = !!b.current,
                                T = ["left", "right"].includes(x.swipeDirection),
                                R = ["left", "up"].includes(x.swipeDirection) ? Math.min : Math.max,
                                D = T ? R(0, X) : 0,
                                B = T ? 0 : R(0, z),
                                N = _.pointerType === "touch" ? 10 : 2,
                                H = {
                                    x: D,
                                    y: B
                                },
                                Y = {
                                    originalEvent: _,
                                    delta: H
                                };
                            $ ? (b.current = H, zs(hx, m, Y, {
                                discrete: !1
                            })) : hf(H, x.swipeDirection, N) ? (b.current = H, zs(mx, f, Y, {
                                discrete: !1
                            }), _.target.setPointerCapture(_.pointerId)) : (Math.abs(X) > N || Math.abs(z) > N) && (y.current = null)
                        }),
                        onPointerUp: he(e.onPointerUp, _ => {
                            const X = b.current,
                                z = _.target;
                            if (z.hasPointerCapture(_.pointerId) && z.releasePointerCapture(_.pointerId), b.current = null, y.current = null, X) {
                                const $ = _.currentTarget,
                                    T = {
                                        originalEvent: _,
                                        delta: X
                                    };
                                hf(X, x.swipeDirection, x.swipeThreshold) ? zs(vx, p, T, {
                                    discrete: !0
                                }) : zs(gx, g, T, {
                                    discrete: !0
                                }), $.addEventListener("click", R => R.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), x.viewport)
        })]
    }) : null
}), Sx = e => {
    const {
        __scopeToast: t,
        children: n,
        ...r
    } = e, o = aa(ms, t), [s, i] = S.useState(!1), [a, l] = S.useState(!1);
    return Px(() => i(!0)), S.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }, []), a ? null : d.jsx(kh, {
        asChild: !0,
        children: d.jsx(ia, { ...r,
            children: s && d.jsxs(d.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}, Cx = "ToastTitle", Lh = S.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...r
    } = e;
    return d.jsx(Se.div, { ...r,
        ref: t
    })
});
Lh.displayName = Cx;
var bx = "ToastDescription",
    Mh = S.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e;
        return d.jsx(Se.div, { ...r,
            ref: t
        })
    });
Mh.displayName = bx;
var Oh = "ToastAction",
    _h = S.forwardRef((e, t) => {
        const {
            altText: n,
            ...r
        } = e;
        return n.trim() ? d.jsx(Ih, {
            altText: n,
            asChild: !0,
            children: d.jsx(mc, { ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${Oh}\`. Expected non-empty \`string\`.`), null)
    });
_h.displayName = Oh;
var Dh = "ToastClose",
    mc = S.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e, o = xx(Dh, n);
        return d.jsx(Ih, {
            asChild: !0,
            children: d.jsx(Se.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: he(e.onClick, o.onClose)
            })
        })
    });
mc.displayName = Dh;
var Ih = S.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: r,
        ...o
    } = e;
    return d.jsx(Se.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
});

function Uh(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Ex(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none",
                s = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (s) {
                    const i = r.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else t.push(...Uh(r))
        }
    }), t
}

function zs(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.currentTarget,
        s = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Ch(o, s) : o.dispatchEvent(s)
}
var hf = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n
};

function Px(e = () => {}) {
    const t = On(e);
    Dt(() => {
        let n = 0,
            r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
        }
    }, [t])
}

function Ex(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function kx(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function qa(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var Nx = Th,
    zh = Rh,
    Fh = Ah,
    $h = Lh,
    Bh = Mh,
    Hh = _h,
    Wh = mc;

function Gh(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = Gh(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function Qh() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Gh(e)) && (r && (r += " "), r += t);
    return r
}
const gf = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    vf = Qh,
    Tx = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null) return vf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: o,
            defaultVariants: s
        } = t, i = Object.keys(o).map(u => {
            const f = n == null ? void 0 : n[u],
                m = s == null ? void 0 : s[u];
            if (f === null) return null;
            const g = gf(f) || gf(m);
            return o[u][g]
        }), a = n && Object.entries(n).reduce((u, f) => {
            let [m, g] = f;
            return g === void 0 || (u[m] = g), u
        }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, f) => {
            let {
                class: m,
                className: g,
                ...p
            } = f;
            return Object.entries(p).every(C => {
                let [x, w] = C;
                return Array.isArray(w) ? w.includes({ ...s,
                    ...a
                }[x]) : { ...s,
                    ...a
                }[x] === w
            }) ? [...u, m, g] : u
        }, []);
        return vf(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jx = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Kh = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Rx = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vx = S.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: i,
    ...a
}, l) => S.createElement("svg", {
    ref: l,
    ...Rx,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Kh("lucide", o),
    ...a
}, [...i.map(([u, f]) => S.createElement(u, f)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ge = (e, t) => {
    const n = S.forwardRef(({
        className: r,
        ...o
    }, s) => S.createElement(Vx, {
        ref: s,
        iconNode: t,
        className: Kh(`lucide-${jx(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xh = ge("Award", [
    ["path", {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv"
    }],
    ["circle", {
        cx: "12",
        cy: "8",
        r: "6",
        key: "1vp47v"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const su = ge("Car", [
    ["path", {
        d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
        key: "5owen"
    }],
    ["circle", {
        cx: "7",
        cy: "17",
        r: "2",
        key: "u2ysq9"
    }],
    ["path", {
        d: "M9 17h6",
        key: "r8uit2"
    }],
    ["circle", {
        cx: "17",
        cy: "17",
        r: "2",
        key: "axvx0g"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qn = ge("ChevronDown", [
    ["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ax = ge("ChevronLeft", [
    ["path", {
        d: "m15 18-6-6 6-6",
        key: "1wnfg3"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lx = ge("ChevronRight", [
    ["path", {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mx = ge("CircleCheckBig", [
    ["path", {
        d: "M21.801 10A10 10 0 1 1 17 3.335",
        key: "yps3ct"
    }],
    ["path", {
        d: "m9 11 3 3L22 4",
        key: "1pflzl"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ox = ge("Droplets", [
    ["path", {
        d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
        key: "1ptgy4"
    }],
    ["path", {
        d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
        key: "1sl1rz"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _x = ge("LoaderCircle", [
    ["path", {
        d: "M21 12a9 9 0 1 1-6.219-8.56",
        key: "13zald"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yf = ge("Lock", [
    ["rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1"
    }],
    ["path", {
        d: "M7 11V7a5 5 0 0 1 10 0v4",
        key: "fwvmzm"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dx = ge("MapPin", [
    ["path", {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z"
    }],
    ["circle", {
        cx: "12",
        cy: "10",
        r: "3",
        key: "ilqhr7"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ix = ge("Play", [
    ["polygon", {
        points: "6 3 20 12 6 21 6 3",
        key: "1oa8hb"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qh = ge("RotateCcw", [
    ["path", {
        d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
        key: "1357e3"
    }],
    ["path", {
        d: "M3 3v5h5",
        key: "1xhq8a"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ux = ge("Ruler", [
    ["path", {
        d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
        key: "icamh8"
    }],
    ["path", {
        d: "m14.5 12.5 2-2",
        key: "inckbg"
    }],
    ["path", {
        d: "m11.5 9.5 2-2",
        key: "fmmyf7"
    }],
    ["path", {
        d: "m8.5 6.5 2-2",
        key: "vc6u1g"
    }],
    ["path", {
        d: "m17.5 15.5 2-2",
        key: "wo5hmg"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vi = ge("ShieldCheck", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }],
    ["path", {
        d: "m9 12 2 2 4-4",
        key: "dzmm74"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iu = ge("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yh = ge("Star", [
    ["path", {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zx = ge("TriangleAlert", [
    ["path", {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
    }],
    ["path", {
        d: "M12 9v4",
        key: "juzpu7"
    }],
    ["path", {
        d: "M12 17h.01",
        key: "p32p05"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = ge("Truck", [
    ["path", {
        d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
        key: "wrbu53"
    }],
    ["path", {
        d: "M15 18H9",
        key: "1lyqi6"
    }],
    ["path", {
        d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
        key: "lysw3i"
    }],
    ["circle", {
        cx: "17",
        cy: "18",
        r: "2",
        key: "332jqn"
    }],
    ["circle", {
        cx: "7",
        cy: "18",
        r: "2",
        key: "19iecd"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fx = ge("Users", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["path", {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd"
    }],
    ["path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75",
        key: "1da9ce"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $x = ge("Wrench", [
    ["path", {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
        key: "cbrjhi"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jh = ge("X", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]),
    hc = "-",
    Bx = e => {
        const t = Wx(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: i => {
                const a = i.split(hc);
                return a[0] === "" && a.length !== 1 && a.shift(), Zh(a, t) || Hx(i)
            },
            getConflictingClassGroupIds: (i, a) => {
                const l = n[i] || [];
                return a && r[i] ? [...l, ...r[i]] : l
            }
        }
    },
    Zh = (e, t) => {
        var i;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? Zh(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const s = e.join(hc);
        return (i = t.validators.find(({
            validator: a
        }) => a(s))) == null ? void 0 : i.classGroupId
    },
    xf = /^\[(.+)\]$/,
    Hx = e => {
        if (xf.test(e)) {
            const t = xf.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    Wx = e => {
        const {
            theme: t,
            prefix: n
        } = e, r = {
            nextPart: new Map,
            validators: []
        };
        return Qx(Object.entries(e.classGroups), n).forEach(([s, i]) => {
            au(i, r, s, t)
        }), r
    },
    au = (e, t, n, r) => {
        e.forEach(o => {
            if (typeof o == "string") {
                const s = o === "" ? t : wf(t, o);
                s.classGroupId = n;
                return
            }
            if (typeof o == "function") {
                if (Gx(o)) {
                    au(o(r), t, n, r);
                    return
                }
                t.validators.push({
                    validator: o,
                    classGroupId: n
                });
                return
            }
            Object.entries(o).forEach(([s, i]) => {
                au(i, wf(t, s), n, r)
            })
        })
    },
    wf = (e, t) => {
        let n = e;
        return t.split(hc).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(r)
        }), n
    },
    Gx = e => e.isThemeGetter,
    Qx = (e, t) => t ? e.map(([n, r]) => {
        const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
        return [n, o]
    }) : e,
    Kx = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            n = new Map,
            r = new Map;
        const o = (s, i) => {
            n.set(s, i), t++, t > e && (t = 0, r = n, n = new Map)
        };
        return {
            get(s) {
                let i = n.get(s);
                if (i !== void 0) return i;
                if ((i = r.get(s)) !== void 0) return o(s, i), i
            },
            set(s, i) {
                n.has(s) ? n.set(s, i) : o(s, i)
            }
        }
    },
    e0 = "!",
    Xx = e => {
        const {
            separator: t,
            experimentalParseClassName: n
        } = e, r = t.length === 1, o = t[0], s = t.length, i = a => {
            const l = [];
            let u = 0,
                f = 0,
                m;
            for (let w = 0; w < a.length; w++) {
                let v = a[w];
                if (u === 0) {
                    if (v === o && (r || a.slice(w, w + s) === t)) {
                        l.push(a.slice(f, w)), f = w + s;
                        continue
                    }
                    if (v === "/") {
                        m = w;
                        continue
                    }
                }
                v === "[" ? u++ : v === "]" && u--
            }
            const g = l.length === 0 ? a : a.substring(f),
                p = g.startsWith(e0),
                C = p ? g.substring(1) : g,
                x = m && m > f ? m - f : void 0;
            return {
                modifiers: l,
                hasImportantModifier: p,
                baseClassName: C,
                maybePostfixModifierPosition: x
            }
        };
        return n ? a => n({
            className: a,
            parseClassName: i
        }) : i
    },
    qx = e => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return e.forEach(r => {
            r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
        }), t.push(...n.sort()), t
    },
    Yx = e => ({
        cache: Kx(e.cacheSize),
        parseClassName: Xx(e),
        ...Bx(e)
    }),
    Jx = /\s+/,
    Zx = (e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: o
        } = t, s = [], i = e.trim().split(Jx);
        let a = "";
        for (let l = i.length - 1; l >= 0; l -= 1) {
            const u = i[l],
                {
                    modifiers: f,
                    hasImportantModifier: m,
                    baseClassName: g,
                    maybePostfixModifierPosition: p
                } = n(u);
            let C = !!p,
                x = r(C ? g.substring(0, p) : g);
            if (!x) {
                if (!C) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                if (x = r(g), !x) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                C = !1
            }
            const w = qx(f).join(":"),
                v = m ? w + e0 : w,
                h = v + x;
            if (s.includes(h)) continue;
            s.push(h);
            const y = o(x, C);
            for (let b = 0; b < y.length; ++b) {
                const P = y[b];
                s.push(v + P)
            }
            a = u + (a.length > 0 ? " " + a : a)
        }
        return a
    };

function ew() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = t0(t)) && (r && (r += " "), r += n);
    return r
}
const t0 = e => {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = t0(e[r])) && (n && (n += " "), n += t);
    return n
};

function tw(e, ...t) {
    let n, r, o, s = i;

    function i(l) {
        const u = t.reduce((f, m) => m(f), e());
        return n = Yx(u), r = n.cache.get, o = n.cache.set, s = a, a(l)
    }

    function a(l) {
        const u = r(l);
        if (u) return u;
        const f = Zx(l, n);
        return o(l, f), f
    }
    return function() {
        return s(ew.apply(null, arguments))
    }
}
const oe = e => {
        const t = n => n[e] || [];
        return t.isThemeGetter = !0, t
    },
    n0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    nw = /^\d+\/\d+$/,
    rw = new Set(["px", "full", "screen"]),
    ow = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    sw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    iw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    aw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    lw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Ft = e => Ur(e) || rw.has(e) || nw.test(e),
    cn = e => lo(e, "length", gw),
    Ur = e => !!e && !Number.isNaN(Number(e)),
    Ya = e => lo(e, "number", Ur),
    Co = e => !!e && Number.isInteger(Number(e)),
    uw = e => e.endsWith("%") && Ur(e.slice(0, -1)),
    Q = e => n0.test(e),
    dn = e => ow.test(e),
    cw = new Set(["length", "size", "percentage"]),
    dw = e => lo(e, cw, r0),
    fw = e => lo(e, "position", r0),
    pw = new Set(["image", "url"]),
    mw = e => lo(e, pw, yw),
    hw = e => lo(e, "", vw),
    bo = () => !0,
    lo = (e, t, n) => {
        const r = n0.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    },
    gw = e => sw.test(e) && !iw.test(e),
    r0 = () => !1,
    vw = e => aw.test(e),
    yw = e => lw.test(e),
    xw = () => {
        const e = oe("colors"),
            t = oe("spacing"),
            n = oe("blur"),
            r = oe("brightness"),
            o = oe("borderColor"),
            s = oe("borderRadius"),
            i = oe("borderSpacing"),
            a = oe("borderWidth"),
            l = oe("contrast"),
            u = oe("grayscale"),
            f = oe("hueRotate"),
            m = oe("invert"),
            g = oe("gap"),
            p = oe("gradientColorStops"),
            C = oe("gradientColorStopPositions"),
            x = oe("inset"),
            w = oe("margin"),
            v = oe("opacity"),
            h = oe("padding"),
            y = oe("saturate"),
            b = oe("scale"),
            P = oe("sepia"),
            E = oe("skew"),
            k = oe("space"),
            V = oe("translate"),
            O = () => ["auto", "contain", "none"],
            M = () => ["auto", "hidden", "clip", "visible", "scroll"],
            F = () => ["auto", Q, t],
            I = () => [Q, t],
            K = () => ["", Ft, cn],
            _ = () => ["auto", Ur, Q],
            X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            z = () => ["solid", "dashed", "dotted", "double", "none"],
            $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            R = () => ["", "0", Q],
            D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            B = () => [Ur, Q];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [bo],
                spacing: [Ft, cn],
                blur: ["none", "", dn, Q],
                brightness: B(),
                borderColor: [e],
                borderRadius: ["none", "", "full", dn, Q],
                borderSpacing: I(),
                borderWidth: K(),
                contrast: B(),
                grayscale: R(),
                hueRotate: B(),
                invert: R(),
                gap: I(),
                gradientColorStops: [e],
                gradientColorStopPositions: [uw, cn],
                inset: F(),
                margin: F(),
                opacity: B(),
                padding: I(),
                saturate: B(),
                scale: B(),
                sepia: R(),
                skew: B(),
                space: I(),
                translate: I()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", Q]
                }],
                container: ["container"],
                columns: [{
                    columns: [dn]
                }],
                "break-after": [{
                    "break-after": D()
                }],
                "break-before": [{
                    "break-before": D()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...X(), Q]
                }],
                overflow: [{
                    overflow: M()
                }],
                "overflow-x": [{
                    "overflow-x": M()
                }],
                "overflow-y": [{
                    "overflow-y": M()
                }],
                overscroll: [{
                    overscroll: O()
                }],
                "overscroll-x": [{
                    "overscroll-x": O()
                }],
                "overscroll-y": [{
                    "overscroll-y": O()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [x]
                }],
                "inset-x": [{
                    "inset-x": [x]
                }],
                "inset-y": [{
                    "inset-y": [x]
                }],
                start: [{
                    start: [x]
                }],
                end: [{
                    end: [x]
                }],
                top: [{
                    top: [x]
                }],
                right: [{
                    right: [x]
                }],
                bottom: [{
                    bottom: [x]
                }],
                left: [{
                    left: [x]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", Co, Q]
                }],
                basis: [{
                    basis: F()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", Q]
                }],
                grow: [{
                    grow: R()
                }],
                shrink: [{
                    shrink: R()
                }],
                order: [{
                    order: ["first", "last", "none", Co, Q]
                }],
                "grid-cols": [{
                    "grid-cols": [bo]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", Co, Q]
                    }, Q]
                }],
                "col-start": [{
                    "col-start": _()
                }],
                "col-end": [{
                    "col-end": _()
                }],
                "grid-rows": [{
                    "grid-rows": [bo]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [Co, Q]
                    }, Q]
                }],
                "row-start": [{
                    "row-start": _()
                }],
                "row-end": [{
                    "row-end": _()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", Q]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", Q]
                }],
                gap: [{
                    gap: [g]
                }],
                "gap-x": [{
                    "gap-x": [g]
                }],
                "gap-y": [{
                    "gap-y": [g]
                }],
                "justify-content": [{
                    justify: ["normal", ...T()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...T(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...T(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [h]
                }],
                px: [{
                    px: [h]
                }],
                py: [{
                    py: [h]
                }],
                ps: [{
                    ps: [h]
                }],
                pe: [{
                    pe: [h]
                }],
                pt: [{
                    pt: [h]
                }],
                pr: [{
                    pr: [h]
                }],
                pb: [{
                    pb: [h]
                }],
                pl: [{
                    pl: [h]
                }],
                m: [{
                    m: [w]
                }],
                mx: [{
                    mx: [w]
                }],
                my: [{
                    my: [w]
                }],
                ms: [{
                    ms: [w]
                }],
                me: [{
                    me: [w]
                }],
                mt: [{
                    mt: [w]
                }],
                mr: [{
                    mr: [w]
                }],
                mb: [{
                    mb: [w]
                }],
                ml: [{
                    ml: [w]
                }],
                "space-x": [{
                    "space-x": [k]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [k]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t]
                }],
                "min-w": [{
                    "min-w": [Q, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [Q, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [dn]
                    }, dn]
                }],
                h: [{
                    h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [Q, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", dn, cn]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ya]
                }],
                "font-family": [{
                    font: [bo]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", Ur, Ya]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ft, Q]
                }],
                "list-image": [{
                    "list-image": ["none", Q]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", Q]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [v]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [v]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...z(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", Ft, cn]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", Ft, Q]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: I()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", Q]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [v]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...X(), fw]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", dw]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, mw]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [C]
                }],
                "gradient-via-pos": [{
                    via: [C]
                }],
                "gradient-to-pos": [{
                    to: [C]
                }],
                "gradient-from": [{
                    from: [p]
                }],
                "gradient-via": [{
                    via: [p]
                }],
                "gradient-to": [{
                    to: [p]
                }],
                rounded: [{
                    rounded: [s]
                }],
                "rounded-s": [{
                    "rounded-s": [s]
                }],
                "rounded-e": [{
                    "rounded-e": [s]
                }],
                "rounded-t": [{
                    "rounded-t": [s]
                }],
                "rounded-r": [{
                    "rounded-r": [s]
                }],
                "rounded-b": [{
                    "rounded-b": [s]
                }],
                "rounded-l": [{
                    "rounded-l": [s]
                }],
                "rounded-ss": [{
                    "rounded-ss": [s]
                }],
                "rounded-se": [{
                    "rounded-se": [s]
                }],
                "rounded-ee": [{
                    "rounded-ee": [s]
                }],
                "rounded-es": [{
                    "rounded-es": [s]
                }],
                "rounded-tl": [{
                    "rounded-tl": [s]
                }],
                "rounded-tr": [{
                    "rounded-tr": [s]
                }],
                "rounded-br": [{
                    "rounded-br": [s]
                }],
                "rounded-bl": [{
                    "rounded-bl": [s]
                }],
                "border-w": [{
                    border: [a]
                }],
                "border-w-x": [{
                    "border-x": [a]
                }],
                "border-w-y": [{
                    "border-y": [a]
                }],
                "border-w-s": [{
                    "border-s": [a]
                }],
                "border-w-e": [{
                    "border-e": [a]
                }],
                "border-w-t": [{
                    "border-t": [a]
                }],
                "border-w-r": [{
                    "border-r": [a]
                }],
                "border-w-b": [{
                    "border-b": [a]
                }],
                "border-w-l": [{
                    "border-l": [a]
                }],
                "border-opacity": [{
                    "border-opacity": [v]
                }],
                "border-style": [{
                    border: [...z(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [a]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [a]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [v]
                }],
                "divide-style": [{
                    divide: z()
                }],
                "border-color": [{
                    border: [o]
                }],
                "border-color-x": [{
                    "border-x": [o]
                }],
                "border-color-y": [{
                    "border-y": [o]
                }],
                "border-color-s": [{
                    "border-s": [o]
                }],
                "border-color-e": [{
                    "border-e": [o]
                }],
                "border-color-t": [{
                    "border-t": [o]
                }],
                "border-color-r": [{
                    "border-r": [o]
                }],
                "border-color-b": [{
                    "border-b": [o]
                }],
                "border-color-l": [{
                    "border-l": [o]
                }],
                "divide-color": [{
                    divide: [o]
                }],
                "outline-style": [{
                    outline: ["", ...z()]
                }],
                "outline-offset": [{
                    "outline-offset": [Ft, Q]
                }],
                "outline-w": [{
                    outline: [Ft, cn]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: K()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [v]
                }],
                "ring-offset-w": [{
                    "ring-offset": [Ft, cn]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", dn, hw]
                }],
                "shadow-color": [{
                    shadow: [bo]
                }],
                opacity: [{
                    opacity: [v]
                }],
                "mix-blend": [{
                    "mix-blend": [...$(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": $()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [l]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", dn, Q]
                }],
                grayscale: [{
                    grayscale: [u]
                }],
                "hue-rotate": [{
                    "hue-rotate": [f]
                }],
                invert: [{
                    invert: [m]
                }],
                saturate: [{
                    saturate: [y]
                }],
                sepia: [{
                    sepia: [P]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [l]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [u]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [f]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [m]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [v]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [y]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [P]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [i]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [i]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [i]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q]
                }],
                duration: [{
                    duration: B()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", Q]
                }],
                delay: [{
                    delay: B()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", Q]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [b]
                }],
                "scale-x": [{
                    "scale-x": [b]
                }],
                "scale-y": [{
                    "scale-y": [b]
                }],
                rotate: [{
                    rotate: [Co, Q]
                }],
                "translate-x": [{
                    "translate-x": [V]
                }],
                "translate-y": [{
                    "translate-y": [V]
                }],
                "skew-x": [{
                    "skew-x": [E]
                }],
                "skew-y": [{
                    "skew-y": [E]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": I()
                }],
                "scroll-mx": [{
                    "scroll-mx": I()
                }],
                "scroll-my": [{
                    "scroll-my": I()
                }],
                "scroll-ms": [{
                    "scroll-ms": I()
                }],
                "scroll-me": [{
                    "scroll-me": I()
                }],
                "scroll-mt": [{
                    "scroll-mt": I()
                }],
                "scroll-mr": [{
                    "scroll-mr": I()
                }],
                "scroll-mb": [{
                    "scroll-mb": I()
                }],
                "scroll-ml": [{
                    "scroll-ml": I()
                }],
                "scroll-p": [{
                    "scroll-p": I()
                }],
                "scroll-px": [{
                    "scroll-px": I()
                }],
                "scroll-py": [{
                    "scroll-py": I()
                }],
                "scroll-ps": [{
                    "scroll-ps": I()
                }],
                "scroll-pe": [{
                    "scroll-pe": I()
                }],
                "scroll-pt": [{
                    "scroll-pt": I()
                }],
                "scroll-pr": [{
                    "scroll-pr": I()
                }],
                "scroll-pb": [{
                    "scroll-pb": I()
                }],
                "scroll-pl": [{
                    "scroll-pl": I()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", Q]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [Ft, cn, Ya]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    ww = tw(xw);

function Ut(...e) {
    return ww(Qh(e))
}
const Sw = Nx,
    o0 = S.forwardRef(({
        className: e,
        ...t
    }, n) => d.jsx(zh, {
        ref: n,
        className: Ut("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
o0.displayName = zh.displayName;
const Cw = Tx("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    s0 = S.forwardRef(({
        className: e,
        variant: t,
        ...n
    }, r) => d.jsx(Fh, {
        ref: r,
        className: Ut(Cw({
            variant: t
        }), e),
        ...n
    }));
s0.displayName = Fh.displayName;
const bw = S.forwardRef(({
    className: e,
    ...t
}, n) => d.jsx(Hh, {
    ref: n,
    className: Ut("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
bw.displayName = Hh.displayName;
const i0 = S.forwardRef(({
    className: e,
    ...t
}, n) => d.jsx(Wh, {
    ref: n,
    className: Ut("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: d.jsx(Jh, {
        className: "h-4 w-4"
    })
}));
i0.displayName = Wh.displayName;
const a0 = S.forwardRef(({
    className: e,
    ...t
}, n) => d.jsx($h, {
    ref: n,
    className: Ut("text-sm font-semibold", e),
    ...t
}));
a0.displayName = $h.displayName;
const l0 = S.forwardRef(({
    className: e,
    ...t
}, n) => d.jsx(Bh, {
    ref: n,
    className: Ut("text-sm opacity-90", e),
    ...t
}));
l0.displayName = Bh.displayName;

function Pw() {
    const {
        toasts: e
    } = D1();
    return d.jsxs(Sw, {
        children: [e.map(function({
            id: t,
            title: n,
            description: r,
            action: o,
            ...s
        }) {
            return d.jsxs(s0, { ...s,
                children: [d.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && d.jsx(a0, {
                        children: n
                    }), r && d.jsx(l0, {
                        children: r
                    })]
                }), o, d.jsx(i0, {})]
            }, t)
        }), d.jsx(o0, {})]
    })
}
var Ew = vu[" useId ".trim().toString()] || (() => {}),
    kw = 0;

function u0(e) {
    const [t, n] = S.useState(Ew());
    return Dt(() => {
        n(r => r ? ? String(kw++))
    }, [e]), t ? `radix-${t}` : ""
}
const Nw = ["top", "right", "bottom", "left"],
    _n = Math.min,
    Ke = Math.max,
    Ai = Math.round,
    Fs = Math.floor,
    _t = e => ({
        x: e,
        y: e
    }),
    Tw = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    jw = {
        start: "end",
        end: "start"
    };

function lu(e, t, n) {
    return Ke(e, _n(t, n))
}

function Zt(e, t) {
    return typeof e == "function" ? e(t) : e
}

function en(e) {
    return e.split("-")[0]
}

function uo(e) {
    return e.split("-")[1]
}

function gc(e) {
    return e === "x" ? "y" : "x"
}

function vc(e) {
    return e === "y" ? "height" : "width"
}
const Rw = new Set(["top", "bottom"]);

function Lt(e) {
    return Rw.has(en(e)) ? "y" : "x"
}

function yc(e) {
    return gc(Lt(e))
}

function Vw(e, t, n) {
    n === void 0 && (n = !1);
    const r = uo(e),
        o = yc(e),
        s = vc(o);
    let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (i = Li(i)), [i, Li(i)]
}

function Aw(e) {
    const t = Li(e);
    return [uu(e), t, uu(t)]
}

function uu(e) {
    return e.replace(/start|end/g, t => jw[t])
}
const Sf = ["left", "right"],
    Cf = ["right", "left"],
    Lw = ["top", "bottom"],
    Mw = ["bottom", "top"];

function Ow(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? Cf : Sf : t ? Sf : Cf;
        case "left":
        case "right":
            return t ? Lw : Mw;
        default:
            return []
    }
}

function _w(e, t, n, r) {
    const o = uo(e);
    let s = Ow(en(e), n === "start", r);
    return o && (s = s.map(i => i + "-" + o), t && (s = s.concat(s.map(uu)))), s
}

function Li(e) {
    return e.replace(/left|right|bottom|top/g, t => Tw[t])
}

function Dw(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function c0(e) {
    return typeof e != "number" ? Dw(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function Mi(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: o
    } = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}

function bf(e, t, n) {
    let {
        reference: r,
        floating: o
    } = e;
    const s = Lt(t),
        i = yc(t),
        a = vc(i),
        l = en(t),
        u = s === "y",
        f = r.x + r.width / 2 - o.width / 2,
        m = r.y + r.height / 2 - o.height / 2,
        g = r[a] / 2 - o[a] / 2;
    let p;
    switch (l) {
        case "top":
            p = {
                x: f,
                y: r.y - o.height
            };
            break;
        case "bottom":
            p = {
                x: f,
                y: r.y + r.height
            };
            break;
        case "right":
            p = {
                x: r.x + r.width,
                y: m
            };
            break;
        case "left":
            p = {
                x: r.x - o.width,
                y: m
            };
            break;
        default:
            p = {
                x: r.x,
                y: r.y
            }
    }
    switch (uo(t)) {
        case "start":
            p[i] -= g * (n && u ? -1 : 1);
            break;
        case "end":
            p[i] += g * (n && u ? -1 : 1);
            break
    }
    return p
}
const Iw = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: s = [],
        platform: i
    } = n, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: f,
            y: m
        } = bf(u, r, l),
        g = r,
        p = {},
        C = 0;
    for (let x = 0; x < a.length; x++) {
        const {
            name: w,
            fn: v
        } = a[x], {
            x: h,
            y,
            data: b,
            reset: P
        } = await v({
            x: f,
            y: m,
            initialPlacement: r,
            placement: g,
            strategy: o,
            middlewareData: p,
            rects: u,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        f = h ? ? f, m = y ? ? m, p = { ...p,
            [w]: { ...p[w],
                ...b
            }
        }, P && C <= 50 && (C++, typeof P == "object" && (P.placement && (g = P.placement), P.rects && (u = P.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : P.rects), {
            x: f,
            y: m
        } = bf(u, g, l)), x = -1)
    }
    return {
        x: f,
        y: m,
        placement: g,
        strategy: o,
        middlewareData: p
    }
};
async function os(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: o,
        platform: s,
        rects: i,
        elements: a,
        strategy: l
    } = e, {
        boundary: u = "clippingAncestors",
        rootBoundary: f = "viewport",
        elementContext: m = "floating",
        altBoundary: g = !1,
        padding: p = 0
    } = Zt(t, e), C = c0(p), w = a[g ? m === "floating" ? "reference" : "floating" : m], v = Mi(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: f,
        strategy: l
    })), h = m === "floating" ? {
        x: r,
        y: o,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), b = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, P = Mi(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: h,
        offsetParent: y,
        strategy: l
    }) : h);
    return {
        top: (v.top - P.top + C.top) / b.y,
        bottom: (P.bottom - v.bottom + C.bottom) / b.y,
        left: (v.left - P.left + C.left) / b.x,
        right: (P.right - v.right + C.right) / b.x
    }
}
const Uw = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: s,
                platform: i,
                elements: a,
                middlewareData: l
            } = t, {
                element: u,
                padding: f = 0
            } = Zt(e, t) || {};
            if (u == null) return {};
            const m = c0(f),
                g = {
                    x: n,
                    y: r
                },
                p = yc(o),
                C = vc(p),
                x = await i.getDimensions(u),
                w = p === "y",
                v = w ? "top" : "left",
                h = w ? "bottom" : "right",
                y = w ? "clientHeight" : "clientWidth",
                b = s.reference[C] + s.reference[p] - g[p] - s.floating[C],
                P = g[p] - s.reference[p],
                E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
            let k = E ? E[y] : 0;
            (!k || !await (i.isElement == null ? void 0 : i.isElement(E))) && (k = a.floating[y] || s.floating[C]);
            const V = b / 2 - P / 2,
                O = k / 2 - x[C] / 2 - 1,
                M = _n(m[v], O),
                F = _n(m[h], O),
                I = M,
                K = k - x[C] - F,
                _ = k / 2 - x[C] / 2 + V,
                X = lu(I, _, K),
                z = !l.arrow && uo(o) != null && _ !== X && s.reference[C] / 2 - (_ < I ? M : F) - x[C] / 2 < 0,
                $ = z ? _ < I ? _ - I : _ - K : 0;
            return {
                [p]: g[p] + $,
                data: {
                    [p]: X,
                    centerOffset: _ - X - $,
                    ...z && {
                        alignmentOffset: $
                    }
                },
                reset: z
            }
        }
    }),
    zw = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    middlewareData: s,
                    rects: i,
                    initialPlacement: a,
                    platform: l,
                    elements: u
                } = t, {
                    mainAxis: f = !0,
                    crossAxis: m = !0,
                    fallbackPlacements: g,
                    fallbackStrategy: p = "bestFit",
                    fallbackAxisSideDirection: C = "none",
                    flipAlignment: x = !0,
                    ...w
                } = Zt(e, t);
                if ((n = s.arrow) != null && n.alignmentOffset) return {};
                const v = en(o),
                    h = Lt(a),
                    y = en(a) === a,
                    b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
                    P = g || (y || !x ? [Li(a)] : Aw(a)),
                    E = C !== "none";
                !g && E && P.push(..._w(a, x, C, b));
                const k = [a, ...P],
                    V = await os(t, w),
                    O = [];
                let M = ((r = s.flip) == null ? void 0 : r.overflows) || [];
                if (f && O.push(V[v]), m) {
                    const _ = Vw(o, i, b);
                    O.push(V[_[0]], V[_[1]])
                }
                if (M = [...M, {
                        placement: o,
                        overflows: O
                    }], !O.every(_ => _ <= 0)) {
                    var F, I;
                    const _ = (((F = s.flip) == null ? void 0 : F.index) || 0) + 1,
                        X = k[_];
                    if (X && (!(m === "alignment" ? h !== Lt(X) : !1) || M.every(T => T.overflows[0] > 0 && Lt(T.placement) === h))) return {
                        data: {
                            index: _,
                            overflows: M
                        },
                        reset: {
                            placement: X
                        }
                    };
                    let z = (I = M.filter($ => $.overflows[0] <= 0).sort(($, T) => $.overflows[1] - T.overflows[1])[0]) == null ? void 0 : I.placement;
                    if (!z) switch (p) {
                        case "bestFit":
                            {
                                var K;
                                const $ = (K = M.filter(T => {
                                    if (E) {
                                        const R = Lt(T.placement);
                                        return R === h || R === "y"
                                    }
                                    return !0
                                }).map(T => [T.placement, T.overflows.filter(R => R > 0).reduce((R, D) => R + D, 0)]).sort((T, R) => T[1] - R[1])[0]) == null ? void 0 : K[0];$ && (z = $);
                                break
                            }
                        case "initialPlacement":
                            z = a;
                            break
                    }
                    if (o !== z) return {
                        reset: {
                            placement: z
                        }
                    }
                }
                return {}
            }
        }
    };

function Pf(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function Ef(e) {
    return Nw.some(t => e[t] >= 0)
}
const Fw = function(e) {
        return e === void 0 && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
                const {
                    rects: n
                } = t, {
                    strategy: r = "referenceHidden",
                    ...o
                } = Zt(e, t);
                switch (r) {
                    case "referenceHidden":
                        {
                            const s = await os(t, { ...o,
                                    elementContext: "reference"
                                }),
                                i = Pf(s, n.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: i,
                                    referenceHidden: Ef(i)
                                }
                            }
                        }
                    case "escaped":
                        {
                            const s = await os(t, { ...o,
                                    altBoundary: !0
                                }),
                                i = Pf(s, n.floating);
                            return {
                                data: {
                                    escapedOffsets: i,
                                    escaped: Ef(i)
                                }
                            }
                        }
                    default:
                        return {}
                }
            }
        }
    },
    d0 = new Set(["left", "top"]);
async function $w(e, t) {
    const {
        placement: n,
        platform: r,
        elements: o
    } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = en(n), a = uo(n), l = Lt(n) === "y", u = d0.has(i) ? -1 : 1, f = s && l ? -1 : 1, m = Zt(t, e);
    let {
        mainAxis: g,
        crossAxis: p,
        alignmentAxis: C
    } = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: m.mainAxis || 0,
        crossAxis: m.crossAxis || 0,
        alignmentAxis: m.alignmentAxis
    };
    return a && typeof C == "number" && (p = a === "end" ? C * -1 : C), l ? {
        x: p * f,
        y: g * u
    } : {
        x: g * u,
        y: p * f
    }
}
const Bw = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: o,
                    y: s,
                    placement: i,
                    middlewareData: a
                } = t, l = await $w(t, e);
                return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                    x: o + l.x,
                    y: s + l.y,
                    data: { ...l,
                        placement: i
                    }
                }
            }
        }
    },
    Hw = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o
                } = t, {
                    mainAxis: s = !0,
                    crossAxis: i = !1,
                    limiter: a = {
                        fn: w => {
                            let {
                                x: v,
                                y: h
                            } = w;
                            return {
                                x: v,
                                y: h
                            }
                        }
                    },
                    ...l
                } = Zt(e, t), u = {
                    x: n,
                    y: r
                }, f = await os(t, l), m = Lt(en(o)), g = gc(m);
                let p = u[g],
                    C = u[m];
                if (s) {
                    const w = g === "y" ? "top" : "left",
                        v = g === "y" ? "bottom" : "right",
                        h = p + f[w],
                        y = p - f[v];
                    p = lu(h, p, y)
                }
                if (i) {
                    const w = m === "y" ? "top" : "left",
                        v = m === "y" ? "bottom" : "right",
                        h = C + f[w],
                        y = C - f[v];
                    C = lu(h, C, y)
                }
                const x = a.fn({ ...t,
                    [g]: p,
                    [m]: C
                });
                return { ...x,
                    data: {
                        x: x.x - n,
                        y: x.y - r,
                        enabled: {
                            [g]: s,
                            [m]: i
                        }
                    }
                }
            }
        }
    },
    Ww = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: s,
                    middlewareData: i
                } = t, {
                    offset: a = 0,
                    mainAxis: l = !0,
                    crossAxis: u = !0
                } = Zt(e, t), f = {
                    x: n,
                    y: r
                }, m = Lt(o), g = gc(m);
                let p = f[g],
                    C = f[m];
                const x = Zt(a, t),
                    w = typeof x == "number" ? {
                        mainAxis: x,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...x
                    };
                if (l) {
                    const y = g === "y" ? "height" : "width",
                        b = s.reference[g] - s.floating[y] + w.mainAxis,
                        P = s.reference[g] + s.reference[y] - w.mainAxis;
                    p < b ? p = b : p > P && (p = P)
                }
                if (u) {
                    var v, h;
                    const y = g === "y" ? "width" : "height",
                        b = d0.has(en(o)),
                        P = s.reference[m] - s.floating[y] + (b && ((v = i.offset) == null ? void 0 : v[m]) || 0) + (b ? 0 : w.crossAxis),
                        E = s.reference[m] + s.reference[y] + (b ? 0 : ((h = i.offset) == null ? void 0 : h[m]) || 0) - (b ? w.crossAxis : 0);
                    C < P ? C = P : C > E && (C = E)
                }
                return {
                    [g]: p,
                    [m]: C
                }
            }
        }
    },
    Gw = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    rects: s,
                    platform: i,
                    elements: a
                } = t, {
                    apply: l = () => {},
                    ...u
                } = Zt(e, t), f = await os(t, u), m = en(o), g = uo(o), p = Lt(o) === "y", {
                    width: C,
                    height: x
                } = s.floating;
                let w, v;
                m === "top" || m === "bottom" ? (w = m, v = g === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = m, w = g === "end" ? "top" : "bottom");
                const h = x - f.top - f.bottom,
                    y = C - f.left - f.right,
                    b = _n(x - f[w], h),
                    P = _n(C - f[v], y),
                    E = !t.middlewareData.shift;
                let k = b,
                    V = P;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (V = y), (r = t.middlewareData.shift) != null && r.enabled.y && (k = h), E && !g) {
                    const M = Ke(f.left, 0),
                        F = Ke(f.right, 0),
                        I = Ke(f.top, 0),
                        K = Ke(f.bottom, 0);
                    p ? V = C - 2 * (M !== 0 || F !== 0 ? M + F : Ke(f.left, f.right)) : k = x - 2 * (I !== 0 || K !== 0 ? I + K : Ke(f.top, f.bottom))
                }
                await l({ ...t,
                    availableWidth: V,
                    availableHeight: k
                });
                const O = await i.getDimensions(a.floating);
                return C !== O.width || x !== O.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function la() {
    return typeof window < "u"
}

function co(e) {
    return f0(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function Ye(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function zt(e) {
    var t;
    return (t = (f0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function f0(e) {
    return la() ? e instanceof Node || e instanceof Ye(e).Node : !1
}

function Pt(e) {
    return la() ? e instanceof Element || e instanceof Ye(e).Element : !1
}

function It(e) {
    return la() ? e instanceof HTMLElement || e instanceof Ye(e).HTMLElement : !1
}

function kf(e) {
    return !la() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ye(e).ShadowRoot
}
const Qw = new Set(["inline", "contents"]);

function hs(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: o
    } = Et(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Qw.has(o)
}
const Kw = new Set(["table", "td", "th"]);

function Xw(e) {
    return Kw.has(co(e))
}
const qw = [":popover-open", ":modal"];

function ua(e) {
    return qw.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}
const Yw = ["transform", "translate", "scale", "rotate", "perspective"],
    Jw = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    Zw = ["paint", "layout", "strict", "content"];

function xc(e) {
    const t = wc(),
        n = Pt(e) ? Et(e) : e;
    return Yw.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Jw.some(r => (n.willChange || "").includes(r)) || Zw.some(r => (n.contain || "").includes(r))
}

function eS(e) {
    let t = Dn(e);
    for (; It(t) && !no(t);) {
        if (xc(t)) return t;
        if (ua(t)) return null;
        t = Dn(t)
    }
    return null
}

function wc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const tS = new Set(["html", "body", "#document"]);

function no(e) {
    return tS.has(co(e))
}

function Et(e) {
    return Ye(e).getComputedStyle(e)
}

function ca(e) {
    return Pt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function Dn(e) {
    if (co(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || kf(e) && e.host || zt(e);
    return kf(t) ? t.host : t
}

function p0(e) {
    const t = Dn(e);
    return no(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : It(t) && hs(t) ? t : p0(t)
}

function ss(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = p0(e),
        s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        i = Ye(o);
    if (s) {
        const a = cu(i);
        return t.concat(i, i.visualViewport || [], hs(o) ? o : [], a && n ? ss(a) : [])
    }
    return t.concat(o, ss(o, [], n))
}

function cu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function m0(e) {
    const t = Et(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = It(e),
        s = o ? e.offsetWidth : n,
        i = o ? e.offsetHeight : r,
        a = Ai(n) !== s || Ai(r) !== i;
    return a && (n = s, r = i), {
        width: n,
        height: r,
        $: a
    }
}

function Sc(e) {
    return Pt(e) ? e : e.contextElement
}

function zr(e) {
    const t = Sc(e);
    if (!It(t)) return _t(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: s
        } = m0(t);
    let i = (s ? Ai(n.width) : n.width) / r,
        a = (s ? Ai(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
        x: i,
        y: a
    }
}
const nS = _t(0);

function h0(e) {
    const t = Ye(e);
    return !wc() || !t.visualViewport ? nS : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function rS(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== Ye(e) ? !1 : t
}

function cr(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        s = Sc(e);
    let i = _t(1);
    t && (r ? Pt(r) && (i = zr(r)) : i = zr(e));
    const a = rS(s, n, r) ? h0(s) : _t(0);
    let l = (o.left + a.x) / i.x,
        u = (o.top + a.y) / i.y,
        f = o.width / i.x,
        m = o.height / i.y;
    if (s) {
        const g = Ye(s),
            p = r && Pt(r) ? Ye(r) : r;
        let C = g,
            x = cu(C);
        for (; x && r && p !== C;) {
            const w = zr(x),
                v = x.getBoundingClientRect(),
                h = Et(x),
                y = v.left + (x.clientLeft + parseFloat(h.paddingLeft)) * w.x,
                b = v.top + (x.clientTop + parseFloat(h.paddingTop)) * w.y;
            l *= w.x, u *= w.y, f *= w.x, m *= w.y, l += y, u += b, C = Ye(x), x = cu(C)
        }
    }
    return Mi({
        width: f,
        height: m,
        x: l,
        y: u
    })
}

function Cc(e, t) {
    const n = ca(e).scrollLeft;
    return t ? t.left + n : cr(zt(e)).left + n
}

function g0(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        o = r.left + t.scrollLeft - (n ? 0 : Cc(e, r)),
        s = r.top + t.scrollTop;
    return {
        x: o,
        y: s
    }
}

function oS(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: o
    } = e;
    const s = o === "fixed",
        i = zt(r),
        a = t ? ua(t.floating) : !1;
    if (r === i || a && s) return n;
    let l = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = _t(1);
    const f = _t(0),
        m = It(r);
    if ((m || !m && !s) && ((co(r) !== "body" || hs(i)) && (l = ca(r)), It(r))) {
        const p = cr(r);
        u = zr(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop
    }
    const g = i && !m && !s ? g0(i, l, !0) : _t(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + f.x + g.x,
        y: n.y * u.y - l.scrollTop * u.y + f.y + g.y
    }
}

function sS(e) {
    return Array.from(e.getClientRects())
}

function iS(e) {
    const t = zt(e),
        n = ca(e),
        r = e.ownerDocument.body,
        o = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        s = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + Cc(e);
    const a = -n.scrollTop;
    return Et(r).direction === "rtl" && (i += Ke(t.clientWidth, r.clientWidth) - o), {
        width: o,
        height: s,
        x: i,
        y: a
    }
}

function aS(e, t) {
    const n = Ye(e),
        r = zt(e),
        o = n.visualViewport;
    let s = r.clientWidth,
        i = r.clientHeight,
        a = 0,
        l = 0;
    if (o) {
        s = o.width, i = o.height;
        const u = wc();
        (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop)
    }
    return {
        width: s,
        height: i,
        x: a,
        y: l
    }
}
const lS = new Set(["absolute", "fixed"]);

function uS(e, t) {
    const n = cr(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        s = It(e) ? zr(e) : _t(1),
        i = e.clientWidth * s.x,
        a = e.clientHeight * s.y,
        l = o * s.x,
        u = r * s.y;
    return {
        width: i,
        height: a,
        x: l,
        y: u
    }
}

function Nf(e, t, n) {
    let r;
    if (t === "viewport") r = aS(e, n);
    else if (t === "document") r = iS(zt(e));
    else if (Pt(t)) r = uS(t, n);
    else {
        const o = h0(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return Mi(r)
}

function v0(e, t) {
    const n = Dn(e);
    return n === t || !Pt(n) || no(n) ? !1 : Et(n).position === "fixed" || v0(n, t)
}

function cS(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = ss(e, [], !1).filter(a => Pt(a) && co(a) !== "body"),
        o = null;
    const s = Et(e).position === "fixed";
    let i = s ? Dn(e) : e;
    for (; Pt(i) && !no(i);) {
        const a = Et(i),
            l = xc(i);
        !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && lS.has(o.position) || hs(i) && !l && v0(e, i)) ? r = r.filter(f => f !== i) : o = a, i = Dn(i)
    }
    return t.set(e, r), r
}

function dS(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: o
    } = e;
    const i = [...n === "clippingAncestors" ? ua(t) ? [] : cS(t, this._c) : [].concat(n), r],
        a = i[0],
        l = i.reduce((u, f) => {
            const m = Nf(t, f, o);
            return u.top = Ke(m.top, u.top), u.right = _n(m.right, u.right), u.bottom = _n(m.bottom, u.bottom), u.left = Ke(m.left, u.left), u
        }, Nf(t, a, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}

function fS(e) {
    const {
        width: t,
        height: n
    } = m0(e);
    return {
        width: t,
        height: n
    }
}

function pS(e, t, n) {
    const r = It(t),
        o = zt(t),
        s = n === "fixed",
        i = cr(e, !0, s, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = _t(0);

    function u() {
        l.x = Cc(o)
    }
    if (r || !r && !s)
        if ((co(t) !== "body" || hs(o)) && (a = ca(t)), r) {
            const p = cr(t, !0, s, t);
            l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop
        } else o && u();
    s && !r && o && u();
    const f = o && !r && !s ? g0(o, a) : _t(0),
        m = i.left + a.scrollLeft - l.x - f.x,
        g = i.top + a.scrollTop - l.y - f.y;
    return {
        x: m,
        y: g,
        width: i.width,
        height: i.height
    }
}

function Ja(e) {
    return Et(e).position === "static"
}

function Tf(e, t) {
    if (!It(e) || Et(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return zt(e) === n && (n = n.ownerDocument.body), n
}

function y0(e, t) {
    const n = Ye(e);
    if (ua(e)) return n;
    if (!It(e)) {
        let o = Dn(e);
        for (; o && !no(o);) {
            if (Pt(o) && !Ja(o)) return o;
            o = Dn(o)
        }
        return n
    }
    let r = Tf(e, t);
    for (; r && Xw(r) && Ja(r);) r = Tf(r, t);
    return r && no(r) && Ja(r) && !xc(r) ? n : r || eS(e) || n
}
const mS = async function(e) {
    const t = this.getOffsetParent || y0,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: pS(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function hS(e) {
    return Et(e).direction === "rtl"
}
const gS = {
    convertOffsetParentRelativeRectToViewportRelativeRect: oS,
    getDocumentElement: zt,
    getClippingRect: dS,
    getOffsetParent: y0,
    getElementRects: mS,
    getClientRects: sS,
    getDimensions: fS,
    getScale: zr,
    isElement: Pt,
    isRTL: hS
};

function x0(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function vS(e, t) {
    let n = null,
        r;
    const o = zt(e);

    function s() {
        var a;
        clearTimeout(r), (a = n) == null || a.disconnect(), n = null
    }

    function i(a, l) {
        a === void 0 && (a = !1), l === void 0 && (l = 1), s();
        const u = e.getBoundingClientRect(),
            {
                left: f,
                top: m,
                width: g,
                height: p
            } = u;
        if (a || t(), !g || !p) return;
        const C = Fs(m),
            x = Fs(o.clientWidth - (f + g)),
            w = Fs(o.clientHeight - (m + p)),
            v = Fs(f),
            y = {
                rootMargin: -C + "px " + -x + "px " + -w + "px " + -v + "px",
                threshold: Ke(0, _n(1, l)) || 1
            };
        let b = !0;

        function P(E) {
            const k = E[0].intersectionRatio;
            if (k !== l) {
                if (!b) return i();
                k ? i(!1, k) : r = setTimeout(() => {
                    i(!1, 1e-7)
                }, 1e3)
            }
            k === 1 && !x0(u, e.getBoundingClientRect()) && i(), b = !1
        }
        try {
            n = new IntersectionObserver(P, { ...y,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(P, y)
        }
        n.observe(e)
    }
    return i(!0), s
}

function yS(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: s = !0,
        elementResize: i = typeof ResizeObserver == "function",
        layoutShift: a = typeof IntersectionObserver == "function",
        animationFrame: l = !1
    } = r, u = Sc(e), f = o || s ? [...u ? ss(u) : [], ...ss(t)] : [];
    f.forEach(v => {
        o && v.addEventListener("scroll", n, {
            passive: !0
        }), s && v.addEventListener("resize", n)
    });
    const m = u && a ? vS(u, n) : null;
    let g = -1,
        p = null;
    i && (p = new ResizeObserver(v => {
        let [h] = v;
        h && h.target === u && p && (p.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
            var y;
            (y = p) == null || y.observe(t)
        })), n()
    }), u && !l && p.observe(u), p.observe(t));
    let C, x = l ? cr(e) : null;
    l && w();

    function w() {
        const v = cr(e);
        x && !x0(x, v) && n(), x = v, C = requestAnimationFrame(w)
    }
    return n(), () => {
        var v;
        f.forEach(h => {
            o && h.removeEventListener("scroll", n), s && h.removeEventListener("resize", n)
        }), m == null || m(), (v = p) == null || v.disconnect(), p = null, l && cancelAnimationFrame(C)
    }
}
const xS = Bw,
    wS = Hw,
    SS = zw,
    CS = Gw,
    bS = Fw,
    jf = Uw,
    PS = Ww,
    ES = (e, t, n) => {
        const r = new Map,
            o = {
                platform: gS,
                ...n
            },
            s = { ...o.platform,
                _c: r
            };
        return Iw(e, t, { ...o,
            platform: s
        })
    };
var kS = typeof document < "u",
    NS = function() {},
    ri = kS ? S.useLayoutEffect : NS;

function Oi(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!Oi(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !Oi(e[s], t[s])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function w0(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Rf(e, t) {
    const n = w0(e);
    return Math.round(t * n) / n
}

function Za(e) {
    const t = S.useRef(e);
    return ri(() => {
        t.current = e
    }), t
}

function TS(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: {
            reference: s,
            floating: i
        } = {},
        transform: a = !0,
        whileElementsMounted: l,
        open: u
    } = e, [f, m] = S.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [g, p] = S.useState(r);
    Oi(g, r) || p(r);
    const [C, x] = S.useState(null), [w, v] = S.useState(null), h = S.useCallback(T => {
        T !== E.current && (E.current = T, x(T))
    }, []), y = S.useCallback(T => {
        T !== k.current && (k.current = T, v(T))
    }, []), b = s || C, P = i || w, E = S.useRef(null), k = S.useRef(null), V = S.useRef(f), O = l != null, M = Za(l), F = Za(o), I = Za(u), K = S.useCallback(() => {
        if (!E.current || !k.current) return;
        const T = {
            placement: t,
            strategy: n,
            middleware: g
        };
        F.current && (T.platform = F.current), ES(E.current, k.current, T).then(R => {
            const D = { ...R,
                isPositioned: I.current !== !1
            };
            _.current && !Oi(V.current, D) && (V.current = D, ps.flushSync(() => {
                m(D)
            }))
        })
    }, [g, t, n, F, I]);
    ri(() => {
        u === !1 && V.current.isPositioned && (V.current.isPositioned = !1, m(T => ({ ...T,
            isPositioned: !1
        })))
    }, [u]);
    const _ = S.useRef(!1);
    ri(() => (_.current = !0, () => {
        _.current = !1
    }), []), ri(() => {
        if (b && (E.current = b), P && (k.current = P), b && P) {
            if (M.current) return M.current(b, P, K);
            K()
        }
    }, [b, P, K, M, O]);
    const X = S.useMemo(() => ({
            reference: E,
            floating: k,
            setReference: h,
            setFloating: y
        }), [h, y]),
        z = S.useMemo(() => ({
            reference: b,
            floating: P
        }), [b, P]),
        $ = S.useMemo(() => {
            const T = {
                position: n,
                left: 0,
                top: 0
            };
            if (!z.floating) return T;
            const R = Rf(z.floating, f.x),
                D = Rf(z.floating, f.y);
            return a ? { ...T,
                transform: "translate(" + R + "px, " + D + "px)",
                ...w0(z.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: R,
                top: D
            }
        }, [n, a, z.floating, f.x, f.y]);
    return S.useMemo(() => ({ ...f,
        update: K,
        refs: X,
        elements: z,
        floatingStyles: $
    }), [f, K, X, z, $])
}
const jS = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: r,
                    padding: o
                } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? jf({
                    element: r.current,
                    padding: o
                }).fn(n) : {} : r ? jf({
                    element: r,
                    padding: o
                }).fn(n) : {}
            }
        }
    },
    RS = (e, t) => ({ ...xS(e),
        options: [e, t]
    }),
    VS = (e, t) => ({ ...wS(e),
        options: [e, t]
    }),
    AS = (e, t) => ({ ...PS(e),
        options: [e, t]
    }),
    LS = (e, t) => ({ ...SS(e),
        options: [e, t]
    }),
    MS = (e, t) => ({ ...CS(e),
        options: [e, t]
    }),
    OS = (e, t) => ({ ...bS(e),
        options: [e, t]
    }),
    _S = (e, t) => ({ ...jS(e),
        options: [e, t]
    });
var DS = "Arrow",
    S0 = S.forwardRef((e, t) => {
        const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...s
        } = e;
        return d.jsx(Se.svg, { ...s,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : d.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
S0.displayName = DS;
var IS = S0;

function US(e) {
    const [t, n] = S.useState(void 0);
    return Dt(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const s = o[0];
                let i, a;
                if ("borderBoxSize" in s) {
                    const l = s.borderBoxSize,
                        u = Array.isArray(l) ? l[0] : l;
                    i = u.inlineSize, a = u.blockSize
                } else i = e.offsetWidth, a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var C0 = "Popper",
    [b0, P0] = ao(C0),
    [Kb, E0] = b0(C0),
    k0 = "PopperAnchor",
    N0 = S.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...o
        } = e, s = E0(k0, n), i = S.useRef(null), a = Ze(t, i);
        return S.useEffect(() => {
            s.onAnchorChange((r == null ? void 0 : r.current) || i.current)
        }), r ? null : d.jsx(Se.div, { ...o,
            ref: a
        })
    });
N0.displayName = k0;
var bc = "PopperContent",
    [zS, FS] = b0(bc),
    T0 = S.forwardRef((e, t) => {
        var ee, pr, nn, Fn, rn, mr;
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: s = "center",
            alignOffset: i = 0,
            arrowPadding: a = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: f = 0,
            sticky: m = "partial",
            hideWhenDetached: g = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: C,
            ...x
        } = e, w = E0(bc, n), [v, h] = S.useState(null), y = Ze(t, on => h(on)), [b, P] = S.useState(null), E = US(b), k = (E == null ? void 0 : E.width) ? ? 0, V = (E == null ? void 0 : E.height) ? ? 0, O = r + (s !== "center" ? "-" + s : ""), M = typeof f == "number" ? f : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...f
        }, F = Array.isArray(u) ? u : [u], I = F.length > 0, K = {
            padding: M,
            boundary: F.filter(BS),
            altBoundary: I
        }, {
            refs: _,
            floatingStyles: X,
            placement: z,
            isPositioned: $,
            middlewareData: T
        } = TS({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...on) => yS(...on, {
                animationFrame: p === "always"
            }),
            elements: {
                reference: w.anchor
            },
            middleware: [RS({
                mainAxis: o + V,
                alignmentAxis: i
            }), l && VS({
                mainAxis: !0,
                crossAxis: !1,
                limiter: m === "partial" ? AS() : void 0,
                ...K
            }), l && LS({ ...K
            }), MS({ ...K,
                apply: ({
                    elements: on,
                    rects: gs,
                    availableWidth: ga,
                    availableHeight: vs
                }) => {
                    const {
                        width: va,
                        height: fo
                    } = gs.reference, hr = on.floating.style;
                    hr.setProperty("--radix-popper-available-width", `${ga}px`), hr.setProperty("--radix-popper-available-height", `${vs}px`), hr.setProperty("--radix-popper-anchor-width", `${va}px`), hr.setProperty("--radix-popper-anchor-height", `${fo}px`)
                }
            }), b && _S({
                element: b,
                padding: a
            }), HS({
                arrowWidth: k,
                arrowHeight: V
            }), g && OS({
                strategy: "referenceHidden",
                ...K
            })]
        }), [R, D] = V0(z), B = On(C);
        Dt(() => {
            $ && (B == null || B())
        }, [$, B]);
        const N = (ee = T.arrow) == null ? void 0 : ee.x,
            H = (pr = T.arrow) == null ? void 0 : pr.y,
            Y = ((nn = T.arrow) == null ? void 0 : nn.centerOffset) !== 0,
            [ve, Ne] = S.useState();
        return Dt(() => {
            v && Ne(window.getComputedStyle(v).zIndex)
        }, [v]), d.jsx("div", {
            ref: _.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...X,
                transform: $ ? X.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: ve,
                "--radix-popper-transform-origin": [(Fn = T.transformOrigin) == null ? void 0 : Fn.x, (rn = T.transformOrigin) == null ? void 0 : rn.y].join(" "),
                ...((mr = T.hide) == null ? void 0 : mr.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: d.jsx(zS, {
                scope: n,
                placedSide: R,
                onArrowChange: P,
                arrowX: N,
                arrowY: H,
                shouldHideArrow: Y,
                children: d.jsx(Se.div, {
                    "data-side": R,
                    "data-align": D,
                    ...x,
                    ref: y,
                    style: { ...x.style,
                        animation: $ ? void 0 : "none"
                    }
                })
            })
        })
    });
T0.displayName = bc;
var j0 = "PopperArrow",
    $S = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    R0 = S.forwardRef(function(t, n) {
        const {
            __scopePopper: r,
            ...o
        } = t, s = FS(j0, r), i = $S[s.placedSide];
        return d.jsx("span", {
            ref: s.onArrowChange,
            style: {
                position: "absolute",
                left: s.arrowX,
                top: s.arrowY,
                [i]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[s.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[s.placedSide],
                visibility: s.shouldHideArrow ? "hidden" : void 0
            },
            children: d.jsx(IS, { ...o,
                ref: n,
                style: { ...o.style,
                    display: "block"
                }
            })
        })
    });
R0.displayName = j0;

function BS(e) {
    return e !== null
}
var HS = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, v, h;
        const {
            placement: n,
            rects: r,
            middlewareData: o
        } = t, i = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, f] = V0(n), m = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[f], g = (((v = o.arrow) == null ? void 0 : v.x) ? ? 0) + a / 2, p = (((h = o.arrow) == null ? void 0 : h.y) ? ? 0) + l / 2;
        let C = "",
            x = "";
        return u === "bottom" ? (C = i ? m : `${g}px`, x = `${-l}px`) : u === "top" ? (C = i ? m : `${g}px`, x = `${r.floating.height+l}px`) : u === "right" ? (C = `${-l}px`, x = i ? m : `${p}px`) : u === "left" && (C = `${r.floating.width+l}px`, x = i ? m : `${p}px`), {
            data: {
                x: C,
                y: x
            }
        }
    }
});

function V0(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var WS = N0,
    GS = T0,
    QS = R0,
    [da, Xb] = ao("Tooltip", [P0]),
    Pc = P0(),
    A0 = "TooltipProvider",
    KS = 700,
    Vf = "tooltip.open",
    [XS, L0] = da(A0),
    M0 = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = KS,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: s
        } = e, i = S.useRef(!0), a = S.useRef(!1), l = S.useRef(0);
        return S.useEffect(() => {
            const u = l.current;
            return () => window.clearTimeout(u)
        }, []), d.jsx(XS, {
            scope: t,
            isOpenDelayedRef: i,
            delayDuration: n,
            onOpen: S.useCallback(() => {
                window.clearTimeout(l.current), i.current = !1
            }, []),
            onClose: S.useCallback(() => {
                window.clearTimeout(l.current), l.current = window.setTimeout(() => i.current = !0, r)
            }, [r]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: S.useCallback(u => {
                a.current = u
            }, []),
            disableHoverableContent: o,
            children: s
        })
    };
M0.displayName = A0;
var O0 = "Tooltip",
    [qb, fa] = da(O0),
    du = "TooltipTrigger",
    qS = S.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = fa(du, n), s = L0(du, n), i = Pc(n), a = S.useRef(null), l = Ze(t, a, o.onTriggerChange), u = S.useRef(!1), f = S.useRef(!1), m = S.useCallback(() => u.current = !1, []);
        return S.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), d.jsx(WS, {
            asChild: !0,
            ...i,
            children: d.jsx(Se.button, {
                "aria-describedby": o.open ? o.contentId : void 0,
                "data-state": o.stateAttribute,
                ...r,
                ref: l,
                onPointerMove: he(e.onPointerMove, g => {
                    g.pointerType !== "touch" && !f.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0)
                }),
                onPointerLeave: he(e.onPointerLeave, () => {
                    o.onTriggerLeave(), f.current = !1
                }),
                onPointerDown: he(e.onPointerDown, () => {
                    o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", m, {
                        once: !0
                    })
                }),
                onFocus: he(e.onFocus, () => {
                    u.current || o.onOpen()
                }),
                onBlur: he(e.onBlur, o.onClose),
                onClick: he(e.onClick, o.onClose)
            })
        })
    });
qS.displayName = du;
var YS = "TooltipPortal",
    [Yb, JS] = da(YS, {
        forceMount: void 0
    }),
    ro = "TooltipContent",
    _0 = S.forwardRef((e, t) => {
        const n = JS(ro, e.__scopeTooltip),
            {
                forceMount: r = n.forceMount,
                side: o = "top",
                ...s
            } = e,
            i = fa(ro, e.__scopeTooltip);
        return d.jsx(oa, {
            present: r || i.open,
            children: i.disableHoverableContent ? d.jsx(D0, {
                side: o,
                ...s,
                ref: t
            }) : d.jsx(ZS, {
                side: o,
                ...s,
                ref: t
            })
        })
    }),
    ZS = S.forwardRef((e, t) => {
        const n = fa(ro, e.__scopeTooltip),
            r = L0(ro, e.__scopeTooltip),
            o = S.useRef(null),
            s = Ze(t, o),
            [i, a] = S.useState(null),
            {
                trigger: l,
                onClose: u
            } = n,
            f = o.current,
            {
                onPointerInTransitChange: m
            } = r,
            g = S.useCallback(() => {
                a(null), m(!1)
            }, [m]),
            p = S.useCallback((C, x) => {
                const w = C.currentTarget,
                    v = {
                        x: C.clientX,
                        y: C.clientY
                    },
                    h = oC(v, w.getBoundingClientRect()),
                    y = sC(v, h),
                    b = iC(x.getBoundingClientRect()),
                    P = lC([...y, ...b]);
                a(P), m(!0)
            }, [m]);
        return S.useEffect(() => () => g(), [g]), S.useEffect(() => {
            if (l && f) {
                const C = w => p(w, f),
                    x = w => p(w, l);
                return l.addEventListener("pointerleave", C), f.addEventListener("pointerleave", x), () => {
                    l.removeEventListener("pointerleave", C), f.removeEventListener("pointerleave", x)
                }
            }
        }, [l, f, p, g]), S.useEffect(() => {
            if (i) {
                const C = x => {
                    const w = x.target,
                        v = {
                            x: x.clientX,
                            y: x.clientY
                        },
                        h = (l == null ? void 0 : l.contains(w)) || (f == null ? void 0 : f.contains(w)),
                        y = !aC(v, i);
                    h ? g() : y && (g(), u())
                };
                return document.addEventListener("pointermove", C), () => document.removeEventListener("pointermove", C)
            }
        }, [l, f, i, u, g]), d.jsx(D0, { ...e,
            ref: s
        })
    }),
    [eC, tC] = da(O0, {
        isInside: !1
    }),
    nC = z1("TooltipContent"),
    D0 = S.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            ...a
        } = e, l = fa(ro, n), u = Pc(n), {
            onClose: f
        } = l;
        return S.useEffect(() => (document.addEventListener(Vf, f), () => document.removeEventListener(Vf, f)), [f]), S.useEffect(() => {
            if (l.trigger) {
                const m = g => {
                    const p = g.target;
                    p != null && p.contains(l.trigger) && f()
                };
                return window.addEventListener("scroll", m, {
                    capture: !0
                }), () => window.removeEventListener("scroll", m, {
                    capture: !0
                })
            }
        }, [l.trigger, f]), d.jsx(dc, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            onFocusOutside: m => m.preventDefault(),
            onDismiss: f,
            children: d.jsxs(GS, {
                "data-state": l.stateAttribute,
                ...u,
                ...a,
                ref: t,
                style: { ...a.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [d.jsx(nC, {
                    children: r
                }), d.jsx(eC, {
                    scope: n,
                    isInside: !0,
                    children: d.jsx(ux, {
                        id: l.contentId,
                        role: "tooltip",
                        children: o || r
                    })
                })]
            })
        })
    });
_0.displayName = ro;
var I0 = "TooltipArrow",
    rC = S.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = Pc(n);
        return tC(I0, n).isInside ? null : d.jsx(QS, { ...o,
            ...r,
            ref: t
        })
    });
rC.displayName = I0;

function oC(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
        case s:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function sC(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function iC(e) {
    const {
        top: t,
        right: n,
        bottom: r,
        left: o
    } = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}

function aC(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let o = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const a = t[s],
            l = t[i],
            u = a.x,
            f = a.y,
            m = l.x,
            g = l.y;
        f > r != g > r && n < (m - u) * (r - f) / (g - f) + u && (o = !o)
    }
    return o
}

function lC(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), uC(t)
}

function uC(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2;) {
            const s = t[t.length - 1],
                i = t[t.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
            else break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2;) {
            const s = n[n.length - 1],
                i = n[n.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
            else break
        }
        n.push(o)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var cC = M0,
    U0 = _0;
const dC = cC,
    fC = S.forwardRef(({
        className: e,
        sideOffset: t = 4,
        ...n
    }, r) => d.jsx(U0, {
        ref: r,
        sideOffset: t,
        className: Ut("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    }));
fC.displayName = U0.displayName;
const pC = () => d.jsx("div", {
        className: "bg-primary py-2.5 px-4 text-center",
        children: d.jsx("p", {
            className: "text-primary-foreground text-sm font-semibold tracking-wide",
            children: "MÊS DE ANIVERSÁRIO — Frete Grátis para Todo o Brasil"
        })
    }),
    z0 = "/assets/logo-BbDuOFYn.png",
    mC = ["Produto", "Benefícios", "Avaliações", "Garantia", "FAQ", "Sobre Nós"],
    hC = () => d.jsx("nav", {
        className: "sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border",
        children: d.jsxs("div", {
            className: "container mx-auto flex flex-col md:flex-row items-center justify-between py-2 px-4 gap-1 md:gap-0",
            children: [d.jsxs("div", {
                className: "flex items-center justify-between w-full md:w-auto",
                children: [d.jsx("img", {
                    src: z0,
                    alt: "Oliver Auto Parts",
                    className: "h-10 w-auto"
                }), d.jsxs("div", {
                    className: "flex md:hidden items-center gap-1.5 text-xs font-medium text-primary",
                    children: [d.jsx(yf, {
                        className: "w-3.5 h-3.5"
                    }), "Compra Segura"]
                })]
            }), d.jsx("div", {
                className: "flex items-center gap-3 md:gap-6 overflow-x-auto w-full md:w-auto justify-center",
                children: mC.map(e => d.jsx("a", {
                    href: `#${e.toLowerCase().replace(/\s/g,"-").replace("ã","a").replace("í","i")}`,
                    className: "text-xs md:text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap",
                    children: e
                }, e))
            }), d.jsxs("div", {
                className: "hidden md:flex items-center gap-1.5 text-sm font-medium text-primary",
                children: [d.jsx(yf, {
                    className: "w-4 h-4"
                }), "Compra 100% Segura"]
            })]
        })
    }),
    gC = "/assets/kit-completo-DuT0vGkO.jpg",
    vC = "/assets/kit-interno-Tk9H7iJ2.jpg",
    yC = "/assets/hero-tapete-3-CjEBeeXw.jpg",
    xC = "/assets/hero-tapete-4-CTcO_2X9.jpg",
    wC = "/assets/hero-tapete-5-CLmPGSY4.jpg",
    SC = "/assets/kit-cacamba-ChMdJ6E8.jpg",
    Hn = [{
        src: gC,
        alt: "Kit completo de tapetes 3D com porta-malas",
        label: "Kit Completo"
    }, {
        src: vC,
        alt: "Kit interno de tapetes 3D - 3 peças",
        label: "Kit Interno"
    }, {
        src: yC,
        alt: "Ilhós de fixação original de fábrica",
        label: "Fixação Original"
    }, {
        src: xC,
        alt: "Tapetes 3D dianteiro e traseiro vista superior",
        label: "Proteção Total"
    }, {
        src: wC,
        alt: "Tapete com altíssima durabilidade e borda elevada",
        label: "Borda Elevada"
    }, {
        src: SC,
        alt: "Kit interno + porta-malas sob medida",
        label: "Interno + Porta-Malas"
    }],
    CC = () => {
        const [e, t] = S.useState(0);
        S.useEffect(() => {
            const o = setInterval(() => {
                t(s => (s + 1) % Hn.length)
            }, 4e3);
            return () => clearInterval(o)
        }, []);
        const n = () => t(o => (o + 1) % Hn.length),
            r = () => t(o => (o - 1 + Hn.length) % Hn.length);
        return d.jsx("section", {
            id: "produto",
            className: "bg-background py-8 md:py-20",
            children: d.jsxs("div", {
                className: "container mx-auto px-4 text-center",
                children: [d.jsx("p", {
                    className: "text-accent font-bold text-sm tracking-widest uppercase mb-4 text-center",
                    children: "Tapete Bandeja 3D — Sob Medida Para Seu Carro"
                }), d.jsx("h1", {
                    className: "text-3xl md:text-5xl font-black text-foreground leading-tight mb-4",
                    children: "Proteção Total Para o Assoalho do Seu Carro"
                }), d.jsx("p", {
                    className: "text-muted-foreground text-lg max-w-xl mx-auto mb-10",
                    children: "100% sob medida. Borda elevada. Impermeável. Encaixa no seu carro sem folga."
                }), d.jsxs("div", {
                    className: "relative max-w-2xl mx-auto",
                    children: [d.jsxs("div", {
                        className: "overflow-hidden rounded-xl bg-muted/30",
                        children: [d.jsx("div", {
                            className: "relative",
                            children: Hn.map((o, s) => d.jsx("img", {
                                src: o.src,
                                alt: o.alt,
                                className: `w-full h-auto object-contain aspect-square transition-opacity duration-500 ${s===e?"opacity-100":"opacity-0 absolute inset-0"}`,
                                width: 1024,
                                height: 1024,
                                loading: s === 0 ? "eager" : "lazy"
                            }, s))
                        }), d.jsx("span", {
                            className: "absolute bottom-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg",
                            children: Hn[e].label
                        })]
                    }), d.jsx("button", {
                        onClick: r,
                        className: "absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2 shadow-card hover:bg-background transition",
                        children: d.jsx(Ax, {
                            className: "w-5 h-5 text-foreground"
                        })
                    }), d.jsx("button", {
                        onClick: n,
                        className: "absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2 shadow-card hover:bg-background transition",
                        children: d.jsx(Lx, {
                            className: "w-5 h-5 text-foreground"
                        })
                    }), d.jsx("div", {
                        className: "flex justify-center gap-2 mt-4",
                        children: Hn.map((o, s) => d.jsx("button", {
                            onClick: () => t(s),
                            className: `w-3 h-3 rounded-full transition ${s===e?"bg-accent scale-110":"bg-border"}`
                        }, s))
                    })]
                })]
            })
        })
    },
    bC = e => {
        const t = ["SP", "RJ", "MG", "ES"],
            n = ["PR", "SC", "RS"],
            r = ["GO", "MT", "MS", "DF"],
            o = ["BA", "SE", "AL", "PE", "PB", "RN", "CE", "PI", "MA"];
        return t.includes(e) ? {
            min: 5,
            max: 10
        } : n.includes(e) ? {
            min: 6,
            max: 12
        } : r.includes(e) ? {
            min: 7,
            max: 14
        } : o.includes(e) ? {
            min: 8,
            max: 16
        } : {
            min: 10,
            max: 20
        }
    },
    PC = () => {
        const [e, t] = S.useState(""), [n, r] = S.useState(!1), [o, s] = S.useState(null), [i, a] = S.useState(""), l = f => {
            const m = f.replace(/\D/g, "").slice(0, 8);
            return m.length > 5 ? `${m.slice(0,5)}-${m.slice(5)}` : m
        }, u = async () => {
            const f = e.replace(/\D/g, "");
            if (f.length !== 8) {
                a("Digite um CEP válido com 8 dígitos");
                return
            }
            r(!0), a(""), s(null);
            try {
                const g = await (await fetch(`https://viacep.com.br/ws/${f}/json/`)).json();
                if (g.erro) {
                    a("CEP não encontrado");
                    return
                }
                const p = bC(g.uf);
                s({
                    city: g.localidade,
                    uf: g.uf,
                    ...p
                })
            } catch {
                a("Erro ao consultar CEP. Tente novamente.")
            } finally {
                r(!1)
            }
        };
        return d.jsxs("div", {
            className: "bg-card border border-border rounded-xl p-4 mt-6 max-w-md mx-auto",
            children: [d.jsxs("div", {
                className: "flex items-center gap-2 mb-3",
                children: [d.jsx(To, {
                    className: "w-5 h-5 text-primary"
                }), d.jsx("h4", {
                    className: "text-sm font-bold text-foreground",
                    children: "Calcular prazo de entrega"
                })]
            }), d.jsxs("div", {
                className: "flex gap-2",
                children: [d.jsx("input", {
                    type: "text",
                    value: e,
                    onChange: f => {
                        t(l(f.target.value)), a(""), s(null)
                    },
                    onKeyDown: f => f.key === "Enter" && u(),
                    placeholder: "00000-000",
                    className: "flex-1 h-10 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                    inputMode: "numeric"
                }), d.jsx("button", {
                    onClick: u,
                    disabled: n,
                    className: "bg-primary text-primary-foreground font-semibold text-sm px-4 h-10 rounded-lg hover:opacity-90 transition disabled:opacity-50",
                    children: n ? d.jsx(_x, {
                        className: "w-4 h-4 animate-spin"
                    }) : "Consultar"
                })]
            }), i && d.jsx("p", {
                className: "text-xs text-destructive mt-2",
                children: i
            }), o && d.jsxs("div", {
                className: "mt-3 space-y-2 animate-fade-in",
                children: [d.jsxs("div", {
                    className: "flex items-center gap-2 mb-2",
                    children: [d.jsx(Dx, {
                        className: "w-4 h-4 text-success shrink-0"
                    }), d.jsxs("p", {
                        className: "text-sm font-semibold text-foreground",
                        children: [o.city, " - ", o.uf]
                    })]
                }), d.jsxs("div", {
                    className: "flex items-center justify-between bg-success/10 border border-success/20 rounded-lg p-3",
                    children: [d.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [d.jsx(To, {
                            className: "w-4 h-4 text-success shrink-0"
                        }), d.jsxs("div", {
                            children: [d.jsx("p", {
                                className: "text-sm font-semibold text-foreground",
                                children: "Frete Grátis"
                            }), d.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "10 a 13 dias úteis"
                            })]
                        })]
                    }), d.jsx("span", {
                        className: "text-sm font-bold text-success",
                        children: "Grátis"
                    })]
                }), d.jsxs("div", {
                    className: "flex items-center justify-between bg-card border border-border rounded-lg p-3",
                    children: [d.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [d.jsx(To, {
                            className: "w-4 h-4 text-primary shrink-0"
                        }), d.jsxs("div", {
                            children: [d.jsx("p", {
                                className: "text-sm font-semibold text-foreground",
                                children: "Sedex - ENVIO PRIORITÁRIO"
                            }), d.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "5 a 7 dias úteis"
                            })]
                        })]
                    }), d.jsx("span", {
                        className: "text-sm font-bold text-foreground",
                        children: "R$ 27,10"
                    })]
                }), d.jsxs("div", {
                    className: "flex items-center justify-between bg-card border border-border rounded-lg p-3",
                    children: [d.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [d.jsx(To, {
                            className: "w-4 h-4 text-primary shrink-0"
                        }), d.jsxs("div", {
                            children: [d.jsx("p", {
                                className: "text-sm font-semibold text-foreground",
                                children: "JadLog"
                            }), d.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "3 a 7 dias úteis"
                            })]
                        })]
                    }), d.jsx("span", {
                        className: "text-sm font-bold text-foreground",
                        children: "R$ 58,65"
                    })]
                })]
            }), d.jsx("a", {
                href: "https://buscacepinter.correios.com.br/app/endereco/index.php",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-[10px] text-primary hover:underline mt-2 inline-block",
                children: "Não sei meu CEP"
            })]
        })
    },
    EC = "/assets/kit-completo-DuT0vGkO.jpg",
    F0 = "/assets/kit-interno-Tk9H7iJ2.jpg",
    kC = "/assets/kit-cacamba-ChMdJ6E8.jpg",
    NC = "/assets/textura-a-Bo79uEh4.webp",
    TC = "/assets/textura-b-BqyhvT_Z.webp",
    jC = "/assets/textura-c-BIsvRtzO.webp",
    c = (e, t) => Array.from({
        length: t - e + 1
    }, (n, r) => String(e + r)),
    RC = ["Veículo de Passeio", "SUV", "Caminhonete"],
    VC = {
        A1: ["Veículo de Passeio"],
        A3: ["Veículo de Passeio"],
        "A3 Sedan": ["Veículo de Passeio"],
        A4: ["Veículo de Passeio"],
        "A4 Avant": ["Veículo de Passeio"],
        A5: ["Veículo de Passeio"],
        "A5 Sportback": ["Veículo de Passeio"],
        A6: ["Veículo de Passeio"],
        A7: ["Veículo de Passeio"],
        A8: ["Veículo de Passeio"],
        "e-tron GT": ["Veículo de Passeio"],
        RS3: ["Veículo de Passeio"],
        RS4: ["Veículo de Passeio"],
        RS5: ["Veículo de Passeio"],
        RS6: ["Veículo de Passeio"],
        RS7: ["Veículo de Passeio"],
        TT: ["Veículo de Passeio"],
        "TT RS": ["Veículo de Passeio"],
        R8: ["Veículo de Passeio"],
        "Série 1 (118i/120i)": ["Veículo de Passeio"],
        "Série 2 Active Tourer": ["Veículo de Passeio"],
        "Série 2 Gran Coupé": ["Veículo de Passeio"],
        "Série 3 (320i/330i)": ["Veículo de Passeio"],
        "Série 3 Touring": ["Veículo de Passeio"],
        "Série 4 Gran Coupé": ["Veículo de Passeio"],
        "Série 5 (520i/530i/540i)": ["Veículo de Passeio"],
        "Série 7": ["Veículo de Passeio"],
        "Série 8": ["Veículo de Passeio"],
        Z4: ["Veículo de Passeio"],
        i4: ["Veículo de Passeio"],
        i5: ["Veículo de Passeio"],
        i7: ["Veículo de Passeio"],
        M2: ["Veículo de Passeio"],
        M3: ["Veículo de Passeio"],
        M4: ["Veículo de Passeio"],
        M5: ["Veículo de Passeio"],
        Dolphin: ["Veículo de Passeio"],
        "Dolphin Mini": ["Veículo de Passeio"],
        Seal: ["Veículo de Passeio"],
        Han: ["Veículo de Passeio"],
        Arrizo5: ["Veículo de Passeio"],
        Arrizo6: ["Veículo de Passeio"],
        Agile: ["Veículo de Passeio"],
        "Astra Hatch": ["Veículo de Passeio"],
        "Astra Sedan": ["Veículo de Passeio"],
        Bolt: ["Veículo de Passeio"],
        Camaro: ["Veículo de Passeio"],
        Celta: ["Veículo de Passeio"],
        Classic: ["Veículo de Passeio"],
        Cobalt: ["Veículo de Passeio"],
        "Corsa Hatch": ["Veículo de Passeio"],
        "Corsa Sedan": ["Veículo de Passeio"],
        Cruze: ["Veículo de Passeio"],
        "Cruze Sport6": ["Veículo de Passeio"],
        Joy: ["Veículo de Passeio"],
        "Joy Plus": ["Veículo de Passeio"],
        Onix: ["Veículo de Passeio"],
        "Onix Plus": ["Veículo de Passeio"],
        Prisma: ["Veículo de Passeio"],
        "Vectra Hatch": ["Veículo de Passeio"],
        "Vectra Sedan": ["Veículo de Passeio"],
        C3: ["Veículo de Passeio"],
        "C3 Picasso": ["Veículo de Passeio"],
        C4: ["Veículo de Passeio"],
        "C4 Lounge": ["Veículo de Passeio"],
        C5: ["Veículo de Passeio"],
        DS3: ["Veículo de Passeio"],
        DS4: ["Veículo de Passeio"],
        DS5: ["Veículo de Passeio"],
        "ë-C3": ["Veículo de Passeio"],
        Challenger: ["Veículo de Passeio"],
        Charger: ["Veículo de Passeio"],
        500: ["Veículo de Passeio"],
        "500e": ["Veículo de Passeio"],
        Argo: ["Veículo de Passeio"],
        Bravo: ["Veículo de Passeio"],
        Cronos: ["Veículo de Passeio"],
        "Grand Siena": ["Veículo de Passeio"],
        Idea: ["Veículo de Passeio"],
        Linea: ["Veículo de Passeio"],
        Mobi: ["Veículo de Passeio"],
        Palio: ["Veículo de Passeio"],
        "Palio Weekend": ["Veículo de Passeio"],
        Punto: ["Veículo de Passeio"],
        Siena: ["Veículo de Passeio"],
        Uno: ["Veículo de Passeio"],
        "Uno Way": ["Veículo de Passeio"],
        "Fiesta Hatch": ["Veículo de Passeio"],
        "Fiesta Sedan": ["Veículo de Passeio"],
        "Focus Hatch": ["Veículo de Passeio"],
        "Focus Sedan": ["Veículo de Passeio"],
        Fusion: ["Veículo de Passeio"],
        Ka: ["Veículo de Passeio"],
        "Ka+": ["Veículo de Passeio"],
        "Ka Sedan": ["Veículo de Passeio"],
        Mustang: ["Veículo de Passeio"],
        "Ora 03": ["Veículo de Passeio"],
        "Ora 07": ["Veículo de Passeio"],
        MG4: ["Veículo de Passeio"],
        "Neta Aya": ["Veículo de Passeio"],
        Accord: ["Veículo de Passeio"],
        City: ["Veículo de Passeio"],
        "City Hatchback": ["Veículo de Passeio"],
        Civic: ["Veículo de Passeio"],
        Fit: ["Veículo de Passeio"],
        Azera: ["Veículo de Passeio"],
        Elantra: ["Veículo de Passeio"],
        HB20: ["Veículo de Passeio"],
        "HB20 S": ["Veículo de Passeio"],
        "HB20 X": ["Veículo de Passeio"],
        i30: ["Veículo de Passeio"],
        Veloster: ["Veículo de Passeio"],
        "E-JS1": ["Veículo de Passeio"],
        "E-J7": ["Veículo de Passeio"],
        J2: ["Veículo de Passeio"],
        J3: ["Veículo de Passeio"],
        J5: ["Veículo de Passeio"],
        J6: ["Veículo de Passeio"],
        "Cerato Hatch": ["Veículo de Passeio"],
        "Cerato Sedan": ["Veículo de Passeio"],
        K5: ["Veículo de Passeio"],
        Optima: ["Veículo de Passeio"],
        Picanto: ["Veículo de Passeio"],
        Rio: ["Veículo de Passeio"],
        Soul: ["Veículo de Passeio"],
        Stinger: ["Veículo de Passeio"],
        CT200h: ["Veículo de Passeio"],
        ES300h: ["Veículo de Passeio"],
        IS: ["Veículo de Passeio"],
        LC: ["Veículo de Passeio"],
        "Classe A (A200/A250)": ["Veículo de Passeio"],
        "A 35 AMG": ["Veículo de Passeio"],
        "A 45 AMG": ["Veículo de Passeio"],
        "Classe B": ["Veículo de Passeio"],
        "Classe C (C180/C200/C300)": ["Veículo de Passeio"],
        "C 43 AMG": ["Veículo de Passeio"],
        "C 63 AMG": ["Veículo de Passeio"],
        "CLA (CLA180/CLA200)": ["Veículo de Passeio"],
        "CLA 35 AMG": ["Veículo de Passeio"],
        "CLA 45 AMG": ["Veículo de Passeio"],
        CLS: ["Veículo de Passeio"],
        "Classe E (E200/E300)": ["Veículo de Passeio"],
        "E 53 AMG": ["Veículo de Passeio"],
        "Classe S": ["Veículo de Passeio"],
        Cooper: ["Veículo de Passeio"],
        "Cooper S": ["Veículo de Passeio"],
        "Cooper SE": ["Veículo de Passeio"],
        Clubman: ["Veículo de Passeio"],
        "John Cooper Works": ["Veículo de Passeio"],
        Lancer: ["Veículo de Passeio"],
        Eclipse: ["Veículo de Passeio"],
        Altima: ["Veículo de Passeio"],
        Leaf: ["Veículo de Passeio"],
        Livina: ["Veículo de Passeio"],
        March: ["Veículo de Passeio"],
        Note: ["Veículo de Passeio"],
        Sentra: ["Veículo de Passeio"],
        Tiida: ["Veículo de Passeio"],
        Versa: ["Veículo de Passeio"],
        208: ["Veículo de Passeio"],
        308: ["Veículo de Passeio"],
        408: ["Veículo de Passeio"],
        508: ["Veículo de Passeio"],
        "e-208": ["Veículo de Passeio"],
        "718 Cayman": ["Veículo de Passeio"],
        "718 Boxster": ["Veículo de Passeio"],
        911: ["Veículo de Passeio"],
        Panamera: ["Veículo de Passeio"],
        Taycan: ["Veículo de Passeio"],
        "Taycan Cross Turismo": ["Veículo de Passeio"],
        Clio: ["Veículo de Passeio"],
        Fluence: ["Veículo de Passeio"],
        Kwid: ["Veículo de Passeio"],
        "Kwid E-Tech": ["Veículo de Passeio"],
        Logan: ["Veículo de Passeio"],
        Megane: ["Veículo de Passeio"],
        "Megane E-Tech": ["Veículo de Passeio"],
        Sandero: ["Veículo de Passeio"],
        "Sandero RS": ["Veículo de Passeio"],
        Scenic: ["Veículo de Passeio"],
        Symbol: ["Veículo de Passeio"],
        Zoe: ["Veículo de Passeio"],
        BRZ: ["Veículo de Passeio"],
        Impreza: ["Veículo de Passeio"],
        Legacy: ["Veículo de Passeio"],
        WRX: ["Veículo de Passeio"],
        Baleno: ["Veículo de Passeio"],
        Swift: ["Veículo de Passeio"],
        Camry: ["Veículo de Passeio"],
        Corolla: ["Veículo de Passeio"],
        Etios: ["Veículo de Passeio"],
        "Etios Sedan": ["Veículo de Passeio"],
        "GR Corolla": ["Veículo de Passeio"],
        "GR Supra": ["Veículo de Passeio"],
        "GR Yaris": ["Veículo de Passeio"],
        Yaris: ["Veículo de Passeio"],
        "Yaris Sedan": ["Veículo de Passeio"],
        Fox: ["Veículo de Passeio"],
        Gol: ["Veículo de Passeio"],
        Golf: ["Veículo de Passeio"],
        "Golf GTI": ["Veículo de Passeio"],
        ID3: ["Veículo de Passeio"],
        Jetta: ["Veículo de Passeio"],
        "Jetta GLI": ["Veículo de Passeio"],
        Passat: ["Veículo de Passeio"],
        Polo: ["Veículo de Passeio"],
        "Polo GTS": ["Veículo de Passeio"],
        Spacefox: ["Veículo de Passeio"],
        Up: ["Veículo de Passeio"],
        Virtus: ["Veículo de Passeio"],
        Voyage: ["Veículo de Passeio"],
        C30: ["Veículo de Passeio"],
        S60: ["Veículo de Passeio"],
        S90: ["Veículo de Passeio"],
        V40: ["Veículo de Passeio"],
        V60: ["Veículo de Passeio"],
        V90: ["Veículo de Passeio"],
        Q3: ["SUV"],
        "Q3 Sportback": ["SUV"],
        Q5: ["SUV"],
        "Q5 Sportback": ["SUV"],
        Q7: ["SUV"],
        Q8: ["SUV"],
        "e-tron": ["SUV"],
        "Q8 e-tron": ["SUV"],
        "RS Q3": ["SUV"],
        "RS Q8": ["SUV"],
        X1: ["SUV"],
        X2: ["SUV"],
        X3: ["SUV"],
        X4: ["SUV"],
        X5: ["SUV"],
        X6: ["SUV"],
        X7: ["SUV"],
        XM: ["SUV"],
        iX: ["SUV"],
        iX1: ["SUV"],
        iX3: ["SUV"],
        "X3 M": ["SUV"],
        "X4 M": ["SUV"],
        "Song Plus": ["SUV"],
        "Song Pro": ["SUV"],
        Yuan: ["SUV"],
        "Yuan Plus": ["SUV"],
        Tan: ["SUV"],
        King: ["SUV"],
        "Seal U": ["SUV"],
        "Tiggo 2": ["SUV"],
        "Tiggo 3X": ["SUV"],
        "Tiggo 4": ["SUV"],
        "Tiggo 5X": ["SUV"],
        "Tiggo 7": ["SUV"],
        "Tiggo 7 Pro": ["SUV"],
        "Tiggo 8": ["SUV"],
        "Tiggo 8 Pro": ["SUV"],
        iCar: ["SUV"],
        "Omoda 5": ["SUV"],
        "Omoda E5": ["SUV"],
        "Jaecoo J7": ["SUV"],
        "Jaecoo J8": ["SUV"],
        "Blazer EV": ["SUV"],
        Captiva: ["SUV"],
        Equinox: ["SUV"],
        "Equinox EV": ["SUV"],
        Spin: ["SUV"],
        Tracker: ["SUV"],
        Trailblazer: ["SUV"],
        Zafira: ["SUV", "Veículo de Passeio"],
        "Aircross (antigo)": ["SUV"],
        Basalt: ["SUV"],
        "C3 Aircross": ["SUV"],
        "C4 Cactus": ["SUV"],
        "C5 Aircross": ["SUV"],
        Durango: ["SUV"],
        Journey: ["SUV"],
        Pulse: ["SUV"],
        Fastback: ["SUV"],
        Freemont: ["SUV"],
        Renegade: ["SUV"],
        Bronco: ["SUV"],
        "Bronco Sport": ["SUV"],
        EcoSport: ["SUV"],
        Edge: ["SUV"],
        "Mustang Mach-E": ["SUV"],
        Territory: ["SUV"],
        Haval: ["SUV"],
        "Haval H6": ["SUV"],
        "Haval H6 GT": ["SUV"],
        "Haval Jolion": ["SUV"],
        "Tank 300": ["SUV"],
        "CR-V": ["SUV"],
        "HR-V": ["SUV"],
        "WR-V": ["SUV"],
        "ZR-V": ["SUV"],
        "e:NP1": ["SUV"],
        Creta: ["SUV"],
        "Creta N Line": ["SUV"],
        ix35: ["SUV"],
        Ioniq: ["SUV"],
        "Ioniq 5": ["SUV"],
        "Ioniq 6": ["SUV"],
        Kona: ["SUV"],
        "Kona EV": ["SUV"],
        "New Tucson": ["SUV"],
        Palisade: ["SUV"],
        "Santa Fe": ["SUV"],
        Tucson: ["SUV"],
        Venue: ["SUV"],
        Veracruz: ["SUV"],
        T40: ["SUV"],
        T50: ["SUV"],
        T60: ["SUV"],
        T80: ["SUV"],
        Cherokee: ["SUV"],
        Commander: ["SUV"],
        Compass: ["SUV"],
        "Grand Cherokee": ["SUV"],
        "Grand Cherokee L": ["SUV"],
        Renegade_Jeep: ["SUV"],
        Wrangler: ["SUV"],
        Avenger: ["SUV"],
        Carnival: ["SUV"],
        EV6: ["SUV"],
        EV9: ["SUV"],
        Mohave: ["SUV"],
        Niro: ["SUV"],
        Seltos: ["SUV"],
        Sorento: ["SUV"],
        Sportage: ["SUV"],
        Stonic: ["SUV"],
        EV3: ["SUV"],
        Defender: ["SUV"],
        "Defender 90": ["SUV"],
        "Defender 110": ["SUV"],
        "Defender 130": ["SUV"],
        Discovery: ["SUV"],
        "Discovery Sport": ["SUV"],
        "Range Rover": ["SUV"],
        "Range Rover Evoque": ["SUV"],
        "Range Rover Sport": ["SUV"],
        "Range Rover Velar": ["SUV"],
        Freelander: ["SUV"],
        C10: ["SUV"],
        LX: ["SUV"],
        NX: ["SUV"],
        RX: ["SUV"],
        UX: ["SUV"],
        RZ: ["SUV"],
        EQA: ["SUV"],
        EQB: ["SUV"],
        EQC: ["SUV"],
        EQE: ["SUV"],
        EQS: ["SUV"],
        "GLA (GLA200/GLA250)": ["SUV"],
        GLB: ["SUV"],
        "GLC (GLC200/GLC300)": ["SUV"],
        "GLC Coupé": ["SUV"],
        GLE: ["SUV"],
        "GLE Coupé": ["SUV"],
        GLS: ["SUV"],
        "Classe G": ["SUV"],
        Countryman: ["SUV"],
        "Countryman SE": ["SUV"],
        "MG ZS": ["SUV"],
        "MG ZS EV": ["SUV"],
        "MG HS": ["SUV"],
        ASX: ["SUV"],
        "Eclipse Cross": ["SUV"],
        Outlander: ["SUV"],
        "Outlander PHEV": ["SUV"],
        "Outlander Sport": ["SUV"],
        Pajero: ["SUV"],
        "Pajero Dakar": ["SUV"],
        "Pajero Full": ["SUV"],
        "Pajero Sport": ["SUV"],
        "Pajero TR4": ["SUV"],
        "Neta X": ["SUV"],
        Kicks: ["SUV"],
        "Kicks e-Power": ["SUV"],
        Murano: ["SUV"],
        Pathfinder: ["SUV"],
        "X-Trail": ["SUV"],
        2008: ["SUV"],
        3008: ["SUV"],
        5008: ["SUV"],
        "e-2008": ["SUV"],
        Cayenne: ["SUV"],
        "Cayenne Coupé": ["SUV"],
        Macan: ["SUV"],
        Captur: ["SUV"],
        Duster: ["SUV"],
        Kardian: ["SUV"],
        Boreal: ["SUV"],
        Stepway: ["SUV"],
        "Sandero Stepway": ["SUV"],
        "Logan Stepway": ["SUV"],
        "Kwid Outsider": ["SUV"],
        Forester: ["SUV"],
        Outback: ["SUV"],
        XV: ["SUV"],
        Crosstrek: ["SUV"],
        Solterra: ["SUV"],
        "Grand Vitara": ["SUV"],
        Ignis: ["SUV"],
        Jimny: ["SUV"],
        "Jimny Sierra": ["SUV"],
        "S-Cross": ["SUV"],
        Vitara: ["SUV"],
        SX4: ["SUV"],
        "Corolla Cross": ["SUV"],
        "Corolla Cross XRE": ["SUV"],
        "Land Cruiser": ["SUV"],
        "Land Cruiser Prado": ["SUV"],
        RAV4: ["SUV"],
        SW4: ["SUV"],
        "Hilux SW4": ["SUV"],
        bZ4X: ["SUV"],
        "Yaris Cross": ["SUV"],
        T4: ["SUV"],
        Pantanal: ["SUV"],
        ID4: ["SUV"],
        "ID.Buzz": ["SUV"],
        Nivus: ["SUV"],
        "T-Cross": ["SUV"],
        Taos: ["SUV"],
        Tera: ["SUV"],
        Tiguan: ["SUV"],
        "Tiguan Allspace": ["SUV"],
        Touareg: ["SUV"],
        C40: ["SUV"],
        EX30: ["SUV"],
        EX90: ["SUV"],
        XC40: ["SUV"],
        "XC40 Recharge": ["SUV"],
        XC60: ["SUV"],
        XC90: ["SUV"],
        Shark: ["Caminhonete"],
        Montana: ["Caminhonete"],
        S10: ["Caminhonete"],
        Ram: ["Caminhonete"],
        "Ram 1500": ["Caminhonete"],
        "Ram 2500": ["Caminhonete"],
        "Ram 3500": ["Caminhonete"],
        "Ram Classic": ["Caminhonete"],
        "Ram Rampage": ["Caminhonete"],
        Strada: ["Caminhonete"],
        Toro: ["Caminhonete"],
        Titano: ["Caminhonete"],
        "F-150": ["Caminhonete"],
        "F-250": ["Caminhonete"],
        Maverick: ["Caminhonete"],
        Ranger: ["Caminhonete"],
        Poer: ["Caminhonete"],
        "Santa Cruz": ["Caminhonete"],
        Hunter: ["Caminhonete"],
        Gladiator: ["Caminhonete"],
        "L200 Triton": ["Caminhonete"],
        "L200 Triton Sport": ["Caminhonete"],
        Frontier: ["Caminhonete"],
        1500: ["Caminhonete"],
        "1500 Classic": ["Caminhonete"],
        2500: ["Caminhonete"],
        3500: ["Caminhonete"],
        Rampage: ["Caminhonete"],
        "Duster Oroch": ["Caminhonete"],
        Hilux: ["Caminhonete"],
        Bandeirante: ["Caminhonete"],
        Saveiro: ["Caminhonete"],
        Amarok: ["Caminhonete"],
        "Amarok V6": ["Caminhonete"],
        Berlingo: ["Veículo de Passeio"],
        Jumpy: ["Veículo de Passeio"],
        Doblo: ["Veículo de Passeio"],
        Ducato: ["Veículo de Passeio"],
        Fiorino: ["Veículo de Passeio"],
        Scudo: ["Veículo de Passeio"],
        Transit: ["Veículo de Passeio"],
        Kangoo: ["Veículo de Passeio"],
        Master: ["Veículo de Passeio"],
        Boxer: ["Veículo de Passeio"],
        Expert: ["Veículo de Passeio"],
        Partner: ["Veículo de Passeio"],
        Sprinter: ["Veículo de Passeio"],
        Vito: ["Veículo de Passeio"]
    },
    Af = e => VC[e] || ["Veículo de Passeio"],
    $s = {
        Audi: {
            A1: c(2011, 2026),
            A3: c(2013, 2026),
            "A3 Sedan": c(2014, 2026),
            A4: c(2005, 2026),
            "A4 Avant": c(2009, 2026),
            A5: c(2010, 2026),
            "A5 Sportback": c(2012, 2026),
            A6: c(2005, 2026),
            A7: c(2012, 2026),
            A8: c(2010, 2026),
            Q3: c(2013, 2026),
            "Q3 Sportback": c(2020, 2026),
            Q5: c(2009, 2026),
            "Q5 Sportback": c(2021, 2026),
            Q7: c(2007, 2026),
            Q8: c(2019, 2026),
            "e-tron": c(2020, 2026),
            "e-tron GT": c(2022, 2026),
            "Q8 e-tron": c(2023, 2026),
            RS3: c(2016, 2026),
            RS4: c(2018, 2026),
            RS5: c(2018, 2026),
            RS6: c(2021, 2026),
            RS7: c(2021, 2026),
            "RS Q3": c(2015, 2026),
            "RS Q8": c(2020, 2026),
            TT: c(2007, 2026),
            "TT RS": c(2013, 2026),
            R8: c(2009, 2026)
        },
        BMW: {
            "Série 1 (118i/120i)": c(2012, 2026),
            "Série 2 Active Tourer": c(2015, 2026),
            "Série 2 Gran Coupé": c(2020, 2026),
            "Série 3 (320i/330i)": c(2005, 2026),
            "Série 3 Touring": c(2013, 2026),
            "Série 4 Gran Coupé": c(2015, 2026),
            "Série 5 (520i/530i/540i)": c(2005, 2026),
            "Série 7": c(2009, 2026),
            "Série 8": c(2019, 2026),
            X1: c(2010, 2026),
            X2: c(2018, 2026),
            X3: c(2007, 2026),
            X4: c(2015, 2026),
            X5: c(2007, 2026),
            X6: c(2009, 2026),
            X7: c(2019, 2026),
            XM: c(2023, 2026),
            Z4: c(2009, 2026),
            iX: c(2022, 2026),
            iX1: c(2023, 2026),
            iX3: c(2022, 2026),
            i4: c(2022, 2026),
            i5: c(2024, 2026),
            i7: c(2023, 2026),
            M2: c(2023, 2026),
            M3: c(2015, 2026),
            M4: c(2015, 2026),
            M5: c(2018, 2026),
            "X3 M": c(2020, 2026),
            "X4 M": c(2020, 2026)
        },
        BYD: {
            Dolphin: c(2023, 2026),
            "Dolphin Mini": c(2024, 2026),
            "Song Plus": c(2023, 2026),
            "Song Pro": c(2024, 2026),
            Yuan: c(2023, 2026),
            "Yuan Plus": c(2023, 2026),
            Seal: c(2024, 2026),
            Han: c(2024, 2026),
            Tan: c(2024, 2026),
            King: c(2024, 2026),
            Shark: c(2024, 2026),
            "Seal U": c(2025, 2026)
        },
        "Caoa Chery": {
            "Tiggo 2": c(2018, 2026),
            "Tiggo 3X": c(2020, 2026),
            "Tiggo 4": c(2020, 2026),
            "Tiggo 5X": c(2019, 2026),
            "Tiggo 7": c(2019, 2026),
            "Tiggo 7 Pro": c(2022, 2026),
            "Tiggo 8": c(2020, 2026),
            "Tiggo 8 Pro": c(2022, 2026),
            Arrizo5: c(2019, 2026),
            Arrizo6: c(2020, 2026),
            iCar: c(2024, 2026),
            "Omoda 5": c(2024, 2026),
            "Omoda E5": c(2025, 2026),
            "Jaecoo J7": c(2024, 2026),
            "Jaecoo J8": c(2025, 2026)
        },
        Chevrolet: {
            Agile: c(2010, 2026),
            "Astra Hatch": c(1999, 2026),
            "Astra Sedan": c(2e3, 2026),
            Bolt: c(2019, 2026),
            "Blazer EV": c(2024, 2026),
            Camaro: c(2010, 2026),
            Captiva: c(2008, 2026),
            Celta: c(2001, 2026),
            Classic: c(2005, 2026),
            Cobalt: c(2012, 2026),
            "Corsa Hatch": c(2e3, 2026),
            "Corsa Sedan": c(2002, 2026),
            Cruze: c(2012, 2026),
            "Cruze Sport6": c(2013, 2026),
            Equinox: c(2018, 2026),
            "Equinox EV": c(2024, 2026),
            Joy: c(2017, 2026),
            "Joy Plus": c(2020, 2026),
            Meriva: c(2003, 2012),
            Montana: c(2004, 2026),
            Onix: c(2013, 2026),
            "Onix Plus": c(2020, 2026),
            Prisma: c(2007, 2026),
            S10: c(2001, 2026),
            Spin: c(2013, 2026),
            Tracker: [...c(2008, 2011), ...c(2014, 2026)],
            Trailblazer: c(2013, 2026),
            Zafira: c(2001, 2012),
            "Vectra Hatch": c(2005, 2026),
            "Vectra Sedan": c(2e3, 2026)
        },
        Citroën: {
            "Aircross (antigo)": c(2011, 2026),
            Berlingo: c(2e3, 2026),
            C3: c(2003, 2026),
            "C3 Aircross": c(2019, 2026),
            "C3 Picasso": c(2012, 2026),
            C4: c(2007, 2026),
            "C4 Cactus": c(2018, 2026),
            "C4 Lounge": c(2014, 2026),
            C5: c(2005, 2026),
            "C5 Aircross": c(2020, 2026),
            DS3: c(2012, 2026),
            DS4: c(2013, 2026),
            DS5: c(2013, 2026),
            Jumpy: c(2018, 2026),
            Basalt: c(2024, 2026),
            "ë-C3": c(2024, 2026)
        },
        Dodge: {
            Challenger: c(2009, 2026),
            Charger: c(2012, 2026),
            Durango: c(2012, 2026),
            Journey: c(2009, 2026),
            Ram: c(2005, 2026),
            "Ram 1500": c(2019, 2026),
            "Ram 2500": c(2012, 2026),
            "Ram 3500": c(2012, 2026),
            "Ram Classic": c(2020, 2026),
            "Ram Rampage": c(2024, 2026)
        },
        Fiat: {
            500: c(2012, 2026),
            "500e": c(2022, 2026),
            Argo: c(2018, 2026),
            Bravo: c(2011, 2026),
            Cronos: c(2018, 2026),
            Doblo: c(2002, 2026),
            Ducato: c(2005, 2026),
            Fastback: c(2023, 2026),
            Fiorino: c(2005, 2026),
            "Grand Siena": c(2012, 2026),
            Idea: c(2005, 2026),
            Linea: c(2009, 2026),
            Mobi: c(2017, 2026),
            Palio: c(2001, 2026),
            "Palio Weekend": c(2001, 2026),
            Punto: c(2008, 2026),
            Pulse: c(2022, 2026),
            Renegade: c(2015, 2026),
            Scudo: c(2022, 2026),
            Siena: c(2001, 2026),
            Strada: c(2001, 2026),
            Toro: c(2016, 2026),
            Uno: c(2005, 2026),
            "Uno Way": c(2011, 2026),
            Freemont: c(2012, 2026),
            Titano: c(2024, 2026)
        },
        Ford: {
            Bronco: c(2022, 2026),
            "Bronco Sport": c(2022, 2026),
            EcoSport: c(2003, 2026),
            Edge: c(2011, 2026),
            "F-150": c(2019, 2026),
            "F-250": c(1999, 2011),
            "Fiesta Hatch": c(2003, 2026),
            "Fiesta Sedan": c(2005, 2026),
            "Focus Hatch": c(2004, 2026),
            "Focus Sedan": c(2005, 2026),
            Fusion: c(2006, 2026),
            Ka: c(2008, 2026),
            "Ka+": c(2015, 2026),
            "Ka Sedan": c(2015, 2026),
            Maverick: c(2022, 2026),
            Mustang: c(2012, 2026),
            "Mustang Mach-E": c(2023, 2026),
            Ranger: c(2001, 2026),
            Territory: c(2020, 2026),
            Transit: c(2014, 2026)
        },
        GWM: {
            Haval: c(2022, 2026),
            "Haval H6": c(2022, 2026),
            "Haval H6 GT": c(2023, 2026),
            "Haval Jolion": c(2023, 2026),
            "Ora 03": c(2023, 2026),
            Poer: c(2023, 2026),
            "Ora 07": c(2024, 2026),
            "Tank 300": c(2025, 2026)
        },
        Leapmotor: {
            C10: c(2025, 2026)
        },
        "MG Motor": {
            MG4: c(2024, 2026),
            "MG ZS": c(2024, 2026),
            "MG ZS EV": c(2024, 2026),
            "MG HS": c(2024, 2026)
        },
        Honda: {
            Accord: c(2005, 2026),
            City: c(2009, 2026),
            "City Hatchback": c(2022, 2026),
            Civic: c(2001, 2026),
            "CR-V": c(2002, 2026),
            Fit: c(2004, 2026),
            "HR-V": c(2015, 2026),
            "WR-V": c(2017, 2026),
            "ZR-V": c(2024, 2026),
            "e:NP1": c(2024, 2026)
        },
        Hyundai: {
            Azera: c(2007, 2026),
            Creta: c(2017, 2026),
            "Creta N Line": c(2023, 2026),
            Elantra: c(2012, 2026),
            HB20: c(2012, 2026),
            "HB20 S": c(2013, 2026),
            "HB20 X": c(2014, 2026),
            i30: c(2009, 2026),
            ix35: c(2010, 2026),
            Ioniq: c(2019, 2026),
            "Ioniq 5": c(2022, 2026),
            "Ioniq 6": c(2024, 2026),
            Kona: c(2022, 2026),
            "Kona EV": c(2020, 2026),
            "New Tucson": c(2016, 2026),
            Palisade: c(2022, 2026),
            "Santa Fe": c(2007, 2026),
            "Santa Cruz": c(2023, 2026),
            Tucson: c(2005, 2026),
            Venue: c(2024, 2026),
            Veloster: c(2012, 2026),
            Veracruz: c(2007, 2015)
        },
        "JAC Motors": {
            "E-JS1": c(2022, 2026),
            "E-J7": c(2022, 2026),
            J2: c(2013, 2026),
            J3: c(2012, 2026),
            J5: c(2012, 2026),
            J6: c(2012, 2026),
            T40: c(2018, 2026),
            T50: c(2018, 2026),
            T60: c(2019, 2026),
            T80: c(2018, 2026),
            Hunter: c(2024, 2026)
        },
        Jeep: {
            Cherokee: c(2014, 2026),
            Commander: c(2022, 2026),
            Compass: c(2017, 2026),
            "Grand Cherokee": c(2007, 2026),
            "Grand Cherokee L": c(2022, 2026),
            Gladiator: c(2020, 2026),
            Renegade: c(2015, 2026),
            Wrangler: c(2007, 2026),
            Avenger: c(2024, 2026)
        },
        Kia: {
            Carnival: c(2006, 2026),
            "Cerato Hatch": c(2010, 2026),
            "Cerato Sedan": c(2010, 2026),
            EV6: c(2023, 2026),
            EV3: c(2025, 2026),
            EV9: c(2024, 2026),
            K5: c(2022, 2026),
            Mohave: c(2009, 2026),
            Niro: c(2023, 2026),
            Optima: c(2012, 2026),
            Picanto: c(2007, 2026),
            Rio: c(2012, 2026),
            Seltos: c(2022, 2026),
            Sorento: c(2005, 2026),
            Soul: c(2010, 2026),
            Sportage: c(2007, 2026),
            Stinger: c(2018, 2026),
            Stonic: c(2023, 2026)
        },
        "Land Rover": {
            Defender: c(2020, 2026),
            "Defender 90": c(2021, 2026),
            "Defender 110": c(2020, 2026),
            "Defender 130": c(2023, 2026),
            Discovery: c(2005, 2026),
            "Discovery Sport": c(2015, 2026),
            "Range Rover": c(2005, 2026),
            "Range Rover Evoque": c(2012, 2026),
            "Range Rover Sport": c(2006, 2026),
            "Range Rover Velar": c(2017, 2026),
            Freelander: c(2005, 2026)
        },
        Lexus: {
            CT200h: c(2012, 2026),
            ES300h: c(2013, 2026),
            IS: c(2013, 2026),
            LC: c(2018, 2026),
            LX: c(2016, 2026),
            NX: c(2015, 2026),
            RX: c(2009, 2026),
            UX: c(2019, 2026),
            RZ: c(2023, 2026)
        },
        "Mercedes-Benz": {
            "Classe A (A200/A250)": c(2013, 2026),
            "A 35 AMG": c(2020, 2026),
            "A 45 AMG": c(2015, 2026),
            "Classe B": c(2012, 2026),
            "Classe C (C180/C200/C300)": c(2005, 2026),
            "C 43 AMG": c(2017, 2026),
            "C 63 AMG": c(2012, 2026),
            "CLA (CLA180/CLA200)": c(2014, 2026),
            "CLA 35 AMG": c(2020, 2026),
            "CLA 45 AMG": c(2015, 2026),
            CLS: c(2007, 2026),
            "Classe E (E200/E300)": c(2005, 2026),
            "E 53 AMG": c(2019, 2026),
            "Classe S": c(2006, 2026),
            EQA: c(2022, 2026),
            EQB: c(2022, 2026),
            EQC: c(2020, 2026),
            EQE: c(2023, 2026),
            EQS: c(2022, 2026),
            "GLA (GLA200/GLA250)": c(2014, 2026),
            GLB: c(2020, 2026),
            "GLC (GLC200/GLC300)": c(2016, 2026),
            "GLC Coupé": c(2017, 2026),
            GLE: c(2012, 2026),
            "GLE Coupé": c(2015, 2026),
            GLS: c(2017, 2026),
            "Classe G": c(2009, 2026),
            Sprinter: c(2005, 2026),
            Vito: c(2005, 2026)
        },
        Mini: {
            Cooper: c(2007, 2026),
            "Cooper S": c(2007, 2026),
            "Cooper SE": c(2021, 2026),
            Countryman: c(2011, 2026),
            "Countryman SE": c(2020, 2026),
            Clubman: c(2016, 2026),
            "John Cooper Works": c(2010, 2026)
        },
        Mitsubishi: {
            ASX: c(2011, 2026),
            Eclipse: c(2006, 2026),
            "Eclipse Cross": c(2018, 2026),
            "L200 Triton": c(2008, 2026),
            "L200 Triton Sport": c(2017, 2026),
            Lancer: c(2007, 2026),
            Outlander: c(2008, 2026),
            "Outlander PHEV": c(2019, 2026),
            "Outlander Sport": c(2012, 2026),
            Pajero: c(2001, 2026),
            "Pajero Dakar": c(2010, 2026),
            "Pajero Full": c(2001, 2026),
            "Pajero Sport": c(2007, 2026),
            "Pajero TR4": c(2004, 2026)
        },
        Neta: {
            "Neta Aya": c(2025, 2026),
            "Neta X": c(2025, 2026)
        },
        Nissan: {
            Altima: c(2014, 2026),
            Frontier: c(2003, 2026),
            Kicks: c(2017, 2026),
            "Kicks e-Power": c(2023, 2026),
            Leaf: c(2019, 2026),
            Livina: c(2009, 2026),
            March: c(2012, 2026),
            Murano: c(2009, 2026),
            Note: c(2012, 2026),
            Pathfinder: c(2014, 2026),
            Sentra: c(2008, 2026),
            Tiida: c(2008, 2026),
            Versa: c(2012, 2026),
            "X-Trail": c(2022, 2026)
        },
        Peugeot: {
            206: c(1999, 2010),
            207: c(2008, 2014),
            2008: c(2016, 2026),
            208: c(2014, 2026),
            3008: c(2018, 2026),
            308: c(2012, 2026),
            408: c(2012, 2026),
            5008: c(2018, 2026),
            508: c(2019, 2026),
            Boxer: c(2005, 2026),
            Expert: c(2018, 2026),
            Partner: c(2005, 2026),
            "e-2008": c(2022, 2026),
            "e-208": c(2022, 2026)
        },
        Porsche: {
            "718 Cayman": c(2017, 2026),
            "718 Boxster": c(2017, 2026),
            911: c(2005, 2026),
            Cayenne: c(2005, 2026),
            "Cayenne Coupé": c(2020, 2026),
            Macan: c(2015, 2026),
            Panamera: c(2012, 2026),
            Taycan: c(2020, 2026),
            "Taycan Cross Turismo": c(2022, 2026)
        },
        Ram: {
            1500: c(2019, 2026),
            "1500 Classic": c(2020, 2026),
            2500: c(2012, 2026),
            3500: c(2012, 2026),
            Rampage: c(2024, 2026)
        },
        Renault: {
            Captur: c(2017, 2026),
            Clio: c(2e3, 2026),
            Duster: c(2012, 2026),
            "Duster Oroch": c(2016, 2026),
            Fluence: c(2011, 2026),
            Kangoo: c(2e3, 2026),
            Kwid: c(2017, 2026),
            "Kwid E-Tech": c(2024, 2026),
            Logan: c(2007, 2026),
            Master: c(2005, 2026),
            Megane: c(2005, 2026),
            "Megane E-Tech": c(2024, 2026),
            Sandero: c(2008, 2026),
            "Sandero Stepway": c(2009, 2026),
            "Sandero RS": c(2015, 2026),
            Scenic: c(2001, 2026),
            Stepway: c(2011, 2026),
            "Logan Stepway": c(2010, 2017),
            "Kwid Outsider": c(2023, 2026),
            Symbol: c(2009, 2026),
            Zoe: c(2020, 2026),
            Kardian: c(2024, 2026),
            Boreal: c(2025, 2026)
        },
        Subaru: {
            BRZ: c(2013, 2026),
            Forester: c(2009, 2026),
            Impreza: c(2008, 2026),
            Legacy: c(2005, 2026),
            Outback: c(2005, 2026),
            WRX: c(2015, 2026),
            XV: c(2012, 2026),
            Crosstrek: c(2024, 2026),
            Solterra: c(2023, 2026)
        },
        Suzuki: {
            Baleno: c(2016, 2026),
            "Grand Vitara": c(2005, 2026),
            Ignis: c(2018, 2026),
            Jimny: c(2007, 2026),
            "Jimny Sierra": c(2019, 2026),
            "S-Cross": c(2016, 2026),
            Swift: c(2009, 2026),
            Vitara: c(2015, 2026),
            SX4: c(2007, 2026)
        },
        Toyota: {
            Bandeirante: c(2001, 2026),
            Camry: c(2007, 2026),
            Corolla: c(2001, 2026),
            "Corolla Cross": c(2021, 2026),
            "Corolla Cross XRE": c(2022, 2026),
            Etios: c(2013, 2026),
            "Etios Sedan": c(2013, 2026),
            "GR Corolla": c(2024, 2026),
            "GR Supra": c(2020, 2026),
            "GR Yaris": c(2022, 2026),
            Hilux: c(2005, 2026),
            "Hilux SW4": c(2005, 2026),
            "Land Cruiser": c(2005, 2026),
            "Land Cruiser Prado": c(2007, 2026),
            RAV4: c(2006, 2026),
            SW4: c(2005, 2026),
            Yaris: c(2018, 2026),
            "Yaris Sedan": c(2019, 2026),
            bZ4X: c(2024, 2026),
            "Yaris Cross": c(2025, 2026)
        },
        Troller: {
            T4: c(2007, 2021),
            Pantanal: c(2007, 2010)
        },
        Volkswagen: {
            Amarok: c(2010, 2026),
            "Amarok V6": c(2018, 2026),
            Fox: c(2004, 2026),
            Gol: c(2001, 2026),
            Golf: c(2001, 2026),
            "Golf GTI": c(2015, 2026),
            ID3: c(2024, 2026),
            ID4: c(2024, 2026),
            "ID.Buzz": c(2024, 2026),
            Jetta: c(2007, 2026),
            "Jetta GLI": c(2019, 2026),
            Nivus: c(2020, 2026),
            Passat: c(2006, 2026),
            Polo: c(2002, 2026),
            "Polo GTS": c(2020, 2026),
            Saveiro: c(2001, 2026),
            Spacefox: c(2006, 2018),
            "T-Cross": c(2019, 2026),
            Taos: c(2021, 2026),
            Tera: c(2025, 2026),
            Tiguan: c(2009, 2026),
            "Tiguan Allspace": c(2018, 2026),
            Touareg: c(2006, 2026),
            Up: c(2014, 2026),
            Virtus: c(2018, 2026),
            Voyage: c(2008, 2026)
        },
        Volvo: {
            C30: c(2008, 2026),
            C40: c(2022, 2026),
            EX30: c(2024, 2026),
            EX90: c(2024, 2026),
            S60: c(2005, 2026),
            S90: c(2017, 2026),
            V40: c(2013, 2026),
            V60: c(2011, 2026),
            V90: c(2017, 2026),
            XC40: c(2018, 2026),
            "XC40 Recharge": c(2021, 2026),
            XC60: c(2009, 2026),
            XC90: c(2005, 2026)
        }
    },
    AC = {
        S10: ["Cabine Simples", "Cabine Dupla"],
        Montana: ["Cabine Simples", "Cabine Dupla"],
        Hilux: ["Cabine Simples", "Cabine Dupla"],
        Ranger: ["Cabine Simples", "Cabine Dupla"],
        Frontier: ["Cabine Simples", "Cabine Dupla"],
        Amarok: ["Cabine Dupla"],
        "Amarok V6": ["Cabine Dupla"],
        Saveiro: ["Cabine Simples", "Cabine Dupla", "Cabine Estendida"],
        Strada: ["Cabine Simples", "Cabine Dupla", "Cabine Plus"],
        Toro: ["Cabine Dupla"],
        Titano: ["Cabine Dupla"],
        "L200 Triton": ["Cabine Dupla"],
        "L200 Triton Sport": ["Cabine Dupla"],
        Ram: ["Cabine Dupla"],
        "Ram 1500": ["Cabine Dupla"],
        "Ram 2500": ["Cabine Dupla"],
        "Ram 3500": ["Cabine Dupla"],
        "Ram Classic": ["Cabine Dupla"],
        "Ram Rampage": ["Cabine Dupla"],
        1500: ["Cabine Dupla"],
        "1500 Classic": ["Cabine Dupla"],
        2500: ["Cabine Dupla"],
        3500: ["Cabine Dupla"],
        Rampage: ["Cabine Dupla"],
        "F-150": ["Cabine Dupla"],
        Maverick: ["Cabine Dupla"],
        Gladiator: ["Cabine Dupla"],
        "Duster Oroch": ["Cabine Dupla"],
        "Santa Cruz": ["Cabine Dupla"],
        Poer: ["Cabine Dupla"],
        Shark: ["Cabine Dupla"],
        Hunter: ["Cabine Dupla"],
        Bandeirante: ["Cabine Simples", "Cabine Dupla"]
    },
    LC = {
        Spin: ["5 Lugares", "7 Lugares"],
        Trailblazer: ["5 Lugares", "7 Lugares"],
        Captiva: ["5 Lugares", "7 Lugares"],
        Freemont: ["5 Lugares", "7 Lugares"],
        Journey: ["5 Lugares", "7 Lugares"],
        Durango: ["7 Lugares"],
        SW4: ["7 Lugares"],
        "Hilux SW4": ["7 Lugares"],
        "Land Cruiser": ["7 Lugares"],
        "Land Cruiser Prado": ["7 Lugares"],
        Sorento: ["5 Lugares", "7 Lugares"],
        Carnival: ["7 Lugares", "8 Lugares"],
        EV9: ["6 Lugares", "7 Lugares"],
        Mohave: ["7 Lugares"],
        Discovery: ["5 Lugares", "7 Lugares"],
        "Defender 110": ["5 Lugares", "7 Lugares"],
        "Defender 130": ["8 Lugares"],
        "Grand Cherokee L": ["5 Lugares", "7 Lugares"],
        Commander: ["5 Lugares", "7 Lugares"],
        Wrangler: ["5 Lugares"],
        Outlander: ["5 Lugares", "7 Lugares"],
        "Pajero Sport": ["5 Lugares", "7 Lugares"],
        "Pajero Dakar": ["7 Lugares"],
        "Pajero Full": ["2 Portas - 5 Lugares", "4 Portas - 5 Lugares", "4 Portas - 7 Lugares"],
        Pathfinder: ["7 Lugares"],
        "X-Trail": ["5 Lugares", "7 Lugares"],
        5008: ["7 Lugares"],
        "Tiguan Allspace": ["5 Lugares", "7 Lugares"],
        "ID.Buzz": ["5 Lugares", "7 Lugares"],
        XC90: ["7 Lugares"],
        EX90: ["7 Lugares"],
        GLS: ["7 Lugares"],
        GLE: ["5 Lugares", "7 Lugares"],
        GLB: ["5 Lugares", "7 Lugares"],
        EQB: ["5 Lugares", "7 Lugares"],
        Q7: ["7 Lugares"],
        X5: ["5 Lugares", "7 Lugares"],
        X7: ["7 Lugares"],
        XM: ["5 Lugares"],
        Palisade: ["7 Lugares", "8 Lugares"],
        "Santa Fe": ["5 Lugares", "7 Lugares"],
        "Tiggo 8": ["5 Lugares", "7 Lugares"],
        "Tiggo 8 Pro": ["7 Lugares"],
        "Range Rover": ["5 Lugares"],
        "Range Rover Sport": ["5 Lugares"],
        Cayenne: ["5 Lugares"],
        Taos: ["5 Lugares"]
    },
    MC = ({
        onSelect: e,
        onTypeChange: t,
        onVehicleChange: n
    }) => {
        const [r, o] = S.useState(""), [s, i] = S.useState(""), [a, l] = S.useState(""), [u, f] = S.useState(""), [m, g] = S.useState(""), [p, C] = S.useState(""), [x, w] = S.useState(""), v = S.useMemo(() => r ? Object.keys($s).filter(N => Object.keys($s[N]).some(H => Af(H).includes(r))).sort() : [], [r]), h = S.useMemo(() => !s || !r ? [] : Object.keys($s[s]).filter(N => Af(N).includes(r)).sort(), [s, r]), y = S.useMemo(() => r !== "Caminhonete" || !a ? [] : AC[a] || [], [r, a]), b = S.useMemo(() => r !== "SUV" || !a ? [] : LC[a] || [], [r, a]), P = y.length > 0, E = b.length > 1, k = S.useMemo(() => {
            var N;
            return s && a ? ((N = $s[s]) == null ? void 0 : N[a]) || [] : []
        }, [s, a]), V = N => {
            const H = N;
            o(H), i(""), l(""), f(""), g(""), C(""), t == null || t(H || "")
        }, O = N => {
            i(N), l(""), f(""), g(""), C("")
        }, M = N => {
            l(N), f(""), g(""), C("")
        }, F = N => {
            f(N), C("")
        }, I = N => {
            g(N), C("")
        }, K = N => {
            C(N), e == null || e(s, a, N), n == null || n({
                type: r,
                brand: s,
                model: a,
                cabType: u,
                seatConfig: m,
                year: N,
                observation: x
            })
        }, _ = N => {
            w(N), p && (n == null || n({
                type: r,
                brand: s,
                model: a,
                cabType: u,
                seatConfig: m,
                year: p,
                observation: N
            }))
        }, X = P || E, z = P ? !!u : E ? !!m : !0, $ = a && z, T = s && a && p && z, R = "w-full appearance-none bg-muted border border-border rounded-lg px-4 py-3 text-sm font-medium text-foreground cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent/50 transition", B = [{
            num: 1,
            label: "Tipo",
            done: !!r
        }, {
            num: 2,
            label: "Marca",
            done: !!s
        }, {
            num: 3,
            label: "Modelo",
            done: !!a
        }, ...X ? [{
            num: 4,
            label: P ? "Cabine" : E ? "Lugares" : "",
            done: z
        }] : [], {
            num: X ? 5 : 4,
            label: "Ano",
            done: !!p
        }];
        return d.jsxs("div", {
            className: "max-w-xl mx-auto",
            children: [d.jsxs("div", {
                className: "text-center mb-6",
                children: [d.jsxs("div", {
                    className: "inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-3",
                    children: [d.jsx(su, {
                        className: "w-5 h-5 text-primary"
                    }), d.jsx("span", {
                        className: "text-sm font-semibold text-primary",
                        children: "Agora escolha seu carro"
                    })]
                }), d.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Escolha os dados do seu carro para garantir o encaixe perfeito"
                })]
            }), d.jsx("div", {
                className: "bg-card border border-border rounded-xl p-4 mb-6 shadow-card",
                children: d.jsx("div", {
                    className: "flex items-center justify-between",
                    children: B.map((N, H) => d.jsxs("div", {
                        className: "flex items-center flex-1 last:flex-none",
                        children: [d.jsxs("div", {
                            className: "flex flex-col items-center gap-1.5",
                            children: [d.jsx("div", {
                                className: `w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${N.done?"bg-accent text-accent-foreground shadow-md scale-110":"bg-muted text-muted-foreground"}`,
                                children: N.done ? "✓" : N.num
                            }), d.jsx("span", {
                                className: `text-xs font-semibold tracking-wide ${N.done?"text-accent":"text-muted-foreground"}`,
                                children: N.label
                            })]
                        }), H < B.length - 1 && d.jsx("div", {
                            className: `flex-1 h-0.5 mx-2 mt-[-1rem] rounded-full transition-colors duration-300 ${N.done?"bg-accent":"bg-border"}`
                        })]
                    }, N.num))
                })
            }), d.jsxs("div", {
                className: "bg-card border border-border rounded-xl p-6 shadow-card space-y-4",
                children: [d.jsxs("div", {
                    children: [d.jsx("label", {
                        className: "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block",
                        children: "Tipo de Veículo"
                    }), d.jsxs("div", {
                        className: "relative",
                        children: [d.jsxs("select", {
                            value: r,
                            onChange: N => V(N.target.value),
                            className: R,
                            children: [d.jsx("option", {
                                value: "",
                                children: "Escolha o tipo de veículo"
                            }), RC.map(N => d.jsx("option", {
                                value: N,
                                children: N
                            }, N))]
                        }), d.jsx(Qn, {
                            className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                        })]
                    })]
                }), d.jsxs("div", {
                    children: [d.jsx("label", {
                        className: "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block",
                        children: "Marca"
                    }), d.jsxs("div", {
                        className: "relative",
                        children: [d.jsxs("select", {
                            value: s,
                            onChange: N => O(N.target.value),
                            disabled: !r,
                            className: R,
                            children: [d.jsx("option", {
                                value: "",
                                children: r ? "Escolha a marca do seu carro" : "Selecione o tipo primeiro"
                            }), v.map(N => d.jsx("option", {
                                value: N,
                                children: N
                            }, N))]
                        }), d.jsx(Qn, {
                            className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                        })]
                    })]
                }), d.jsxs("div", {
                    children: [d.jsx("label", {
                        className: "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block",
                        children: "Modelo"
                    }), d.jsxs("div", {
                        className: "relative",
                        children: [d.jsxs("select", {
                            value: a,
                            onChange: N => M(N.target.value),
                            disabled: !s,
                            className: R,
                            children: [d.jsx("option", {
                                value: "",
                                children: s ? "Escolha o Modelo" : "Selecione a marca primeiro"
                            }), h.map(N => d.jsx("option", {
                                value: N,
                                children: N
                            }, N))]
                        }), d.jsx(Qn, {
                            className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                        })]
                    })]
                }), P && d.jsxs("div", {
                    className: "animate-fade-in-up",
                    children: [d.jsx("label", {
                        className: "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block",
                        children: "Tipo de Cabine"
                    }), d.jsxs("div", {
                        className: "relative",
                        children: [d.jsxs("select", {
                            value: u,
                            onChange: N => F(N.target.value),
                            disabled: !a,
                            className: R,
                            children: [d.jsx("option", {
                                value: "",
                                children: "Escolha o tipo de cabine"
                            }), y.map(N => d.jsx("option", {
                                value: N,
                                children: N
                            }, N))]
                        }), d.jsx(Qn, {
                            className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                        })]
                    })]
                }), E && d.jsxs("div", {
                    className: "animate-fade-in-up",
                    children: [d.jsx("label", {
                        className: "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block",
                        children: "Quantidade de Lugares"
                    }), d.jsxs("div", {
                        className: "relative",
                        children: [d.jsxs("select", {
                            value: m,
                            onChange: N => I(N.target.value),
                            disabled: !a,
                            className: R,
                            children: [d.jsx("option", {
                                value: "",
                                children: "Escolha a quantidade de lugares"
                            }), b.map(N => d.jsx("option", {
                                value: N,
                                children: N
                            }, N))]
                        }), d.jsx(Qn, {
                            className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                        })]
                    })]
                }), d.jsxs("div", {
                    children: [d.jsx("label", {
                        className: "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block",
                        children: "Ano"
                    }), d.jsxs("div", {
                        className: "relative",
                        children: [d.jsxs("select", {
                            value: p,
                            onChange: N => K(N.target.value),
                            disabled: !$,
                            className: R,
                            children: [d.jsx("option", {
                                value: "",
                                children: $ ? "Escolha o Ano" : z ? "Selecione o modelo primeiro" : P ? "Selecione a cabine primeiro" : "Selecione os lugares primeiro"
                            }), k.map(N => d.jsx("option", {
                                value: N,
                                children: N
                            }, N))]
                        }), d.jsx(Qn, {
                            className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                        })]
                    })]
                }), d.jsxs("div", {
                    children: [d.jsx("label", {
                        className: "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 block",
                        children: "Observação"
                    }), d.jsx("textarea", {
                        value: x,
                        onChange: N => _(N.target.value),
                        placeholder: "Enviar alguma observação, caso necessário.",
                        className: "w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition min-h-[80px] resize-y"
                    })]
                }), T ? d.jsxs("div", {
                    className: "bg-accent/10 border border-accent/20 rounded-lg p-4 flex items-center gap-3 animate-fade-in-up",
                    children: [d.jsx("div", {
                        className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0",
                        children: d.jsx(su, {
                            className: "w-5 h-5 text-accent-foreground"
                        })
                    }), d.jsxs("div", {
                        children: [d.jsx("p", {
                            className: "text-xs text-accent font-semibold uppercase tracking-wider",
                            children: "Tapete sob medida para"
                        }), d.jsxs("p", {
                            className: "text-foreground font-bold",
                            children: [s, " ", a, " ", u ? `(${u})` : "", " ", m ? `(${m})` : "", " ", p]
                        })]
                    })]
                }) : d.jsxs("div", {
                    className: "bg-muted rounded-lg p-4 flex items-center gap-3",
                    children: [d.jsx("div", {
                        className: "w-10 h-10 rounded-full bg-border flex items-center justify-center flex-shrink-0",
                        children: "🛡️"
                    }), d.jsxs("div", {
                        children: [d.jsx("p", {
                            className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider",
                            children: "Tapete sob medida para"
                        }), d.jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children: "Selecione seu veículo acima"
                        })]
                    })]
                })]
            })]
        })
    },
    Lf = [{
        id: "A",
        label: "Textura A",
        image: NC
    }, {
        id: "B",
        label: "Textura B",
        image: TC
    }, {
        id: "C",
        label: "Textura C",
        image: jC
    }],
    OC = [{
        image: EC,
        title: "Kit Interno + Porta-Malas",
        subtitle: "Proteção completa",
        originalPrice: "R$ 439,90",
        price: "R$ 283,70",
        saving: "Economize R$ 156,20",
        pix: "R$ 255,33",
        badge: "MAIS VENDIDO",
        discount: "-35%",
        checkoutUrl: "https://pagamento.tapetecar.com/checkout?product=111681d7-10e7-11f1-b2a5-46da4690ad53",
        features: ["3 tapetes internos sob medida", "Traseiro inteiriço c/ proteção central", "Tapete porta-malas sob medida"]
    }, {
        image: F0,
        title: "Kit Tapetes Interno",
        subtitle: "Sem porta-malas",
        originalPrice: "R$ 312,80",
        price: "R$ 187,10",
        saving: "Economize R$ 125,70",
        pix: "R$ 168,39",
        badge: "MELHOR PREÇO",
        discount: "-40%",
        checkoutUrl: "https://pagamento.tapetecar.com/checkout?product=f16f44f3-10e7-11f1-b2a5-46da4690ad53",
        features: ["3 tapetes internos sob medida", "Traseiro inteiriço c/ proteção central"]
    }],
    _C = [{
        image: kC,
        title: "Kit Interno + Caçamba",
        subtitle: "Proteção completa",
        originalPrice: "R$ 439,90",
        price: "R$ 283,70",
        saving: "Economize R$ 156,20",
        pix: "R$ 255,33",
        badge: "MAIS VENDIDO",
        discount: "-35%",
        checkoutUrl: "https://pagamento.tapetecar.com/checkout?product=082b3416-2780-11f1-b2a5-46da4690ad53",
        features: ["3 tapetes internos sob medida", "Traseiro inteiriço c/ proteção central", "Tapete caçamba sob medida"]
    }, {
        image: F0,
        title: "Kit Tapetes Interno",
        subtitle: "Sem caçamba",
        originalPrice: "R$ 312,80",
        price: "R$ 187,10",
        saving: "Economize R$ 125,70",
        pix: "R$ 168,39",
        badge: "MELHOR PREÇO",
        discount: "-40%",
        checkoutUrl: "https://pagamento.tapetecar.com/checkout?product=f16f44f3-10e7-11f1-b2a5-46da4690ad53",
        features: ["3 tapetes internos sob medida", "Traseiro inteiriço c/ proteção central"]
    }],
    DC = () => {
        const [e, t] = S.useState(""), [n, r] = S.useState(null), [o, s] = S.useState(null), [i, a] = S.useState(null), [l, u] = S.useState(""), f = e === "Caminhonete" ? _C : OC, m = n && n.brand && n.model && n.year;
        S.useEffect(() => {
            m && Lf.forEach(w => {
                const v = new Image;
                v.src = w.image
            })
        }, [m]);
        const g = (w, v) => {
                var h;
                if (!m) {
                    (h = document.getElementById("vehicle-selector")) == null || h.scrollIntoView({
                        behavior: "smooth"
                    });
                    return
                }
                s(w), a(v), u("")
            },
            p = () => {
                o && window.open(o, "_blank", "noopener,noreferrer"), s(null), a(null)
            },
            C = () => {
                s(null), a(null)
            },
            x = n ? `${n.brand} ${n.model}${n.cabType?` (${n.cabType})`:""}${n.seatConfig?` (${n.seatConfig})`:""} ${n.year}` : "";
        return d.jsxs("section", {
            className: "bg-section-alt py-8 md:py-16",
            children: [d.jsxs("div", {
                className: "container mx-auto px-4",
                children: [d.jsxs("div", {
                    className: "text-center mb-10",
                    children: [d.jsx("h2", {
                        className: "text-2xl md:text-3xl font-bold text-foreground mb-2",
                        children: "Monte seu kit sob medida"
                    }), d.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Produzido sob medida para o seu carro • Envio rápido"
                    }), d.jsxs("div", {
                        className: "flex items-center justify-center gap-1 mt-3",
                        children: [Array.from({
                            length: 5
                        }).map((w, v) => d.jsx(Yh, {
                            className: "w-5 h-5 fill-accent text-accent"
                        }, v)), d.jsx("span", {
                            className: "ml-2 text-sm text-muted-foreground font-medium",
                            children: "4.9 (1.247 avaliações)"
                        })]
                    })]
                }), d.jsxs("div", {
                    className: "flex items-center justify-center gap-2 mb-8",
                    children: [d.jsx(iu, {
                        className: "w-5 h-5 text-primary"
                    }), d.jsx("span", {
                        className: "text-sm font-medium text-foreground",
                        children: "🔒 Pagamento Seguro · 🚚 Frete Grátis · ↩️ 7 dias para trocar"
                    })]
                }), d.jsx("div", {
                    className: "mb-12 -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8 py-8 bg-primary/5 rounded-2xl",
                    id: "vehicle-selector",
                    children: d.jsx(MC, {
                        onTypeChange: t,
                        onVehicleChange: r
                    })
                }), d.jsx("div", {
                    className: "grid md:grid-cols-2 gap-6 max-w-3xl mx-auto",
                    children: f.map(w => d.jsxs("div", {
                        className: "bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-lg transition-shadow",
                        children: [d.jsxs("div", {
                            className: "relative",
                            children: [d.jsxs("div", {
                                className: "absolute top-3 left-3 flex gap-2",
                                children: [d.jsx("span", {
                                    className: "bg-badge-sale text-badge-sale-foreground text-xs font-bold px-2.5 py-1 rounded-full",
                                    children: w.discount
                                }), d.jsx("span", {
                                    className: "bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full",
                                    children: w.badge
                                })]
                            }), d.jsx("img", {
                                src: w.image,
                                alt: w.title,
                                className: "w-full aspect-square object-cover",
                                loading: "lazy",
                                width: 800,
                                height: 800
                            })]
                        }), d.jsxs("div", {
                            className: "p-5",
                            children: [d.jsx("h3", {
                                className: "text-lg font-bold text-foreground",
                                children: w.title
                            }), d.jsx("p", {
                                className: "text-sm text-muted-foreground mb-3",
                                children: w.subtitle
                            }), d.jsxs("div", {
                                className: "flex items-baseline gap-2 mb-1",
                                children: [d.jsx("span", {
                                    className: "text-sm text-muted-foreground line-through",
                                    children: w.originalPrice
                                }), d.jsx("span", {
                                    className: "text-2xl font-black text-primary",
                                    children: w.price
                                })]
                            }), d.jsx("p", {
                                className: "text-xs text-success font-semibold mb-1",
                                children: w.saving
                            }), d.jsx("p", {
                                className: "text-sm font-semibold text-accent mb-4",
                                children: "ou em até 3x sem juros no cartão"
                            }), d.jsx("ul", {
                                className: "space-y-1.5 mb-5",
                                children: w.features.map(v => d.jsxs("li", {
                                    className: "text-sm text-foreground flex items-start gap-2",
                                    children: [d.jsx("span", {
                                        className: "text-success mt-0.5",
                                        children: "✓"
                                    }), v]
                                }, v))
                            }), d.jsx("button", {
                                onClick: () => g(w.checkoutUrl, w.title),
                                className: "block w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg shadow-cta animate-pulse-glow hover:opacity-90 transition text-center",
                                children: "COMPRAR AGORA"
                            })]
                        })]
                    }, w.title))
                }), d.jsx("p", {
                    className: "text-center text-xs md:text-sm text-muted-foreground mt-6 whitespace-nowrap",
                    children: "Parcele em até 3x sem juros no cartão"
                }), d.jsx("div", {
                    className: "flex flex-wrap items-center justify-center gap-3 mt-4",
                    children: [{
                        label: "Visa"
                    }, {
                        label: "Mastercard"
                    }, {
                        label: "Elo"
                    }, {
                        label: "PIX"
                    }, {
                        label: "Boleto"
                    }].map(w => d.jsx("span", {
                        className: "bg-muted text-muted-foreground text-[10px] font-bold px-3 py-1.5 rounded-md border border-border",
                        children: w.label
                    }, w.label))
                }), d.jsxs("div", {
                    className: "flex items-center justify-center gap-4 mt-3",
                    children: [d.jsxs("span", {
                        className: "flex items-center gap-1 text-[10px] text-success font-semibold",
                        children: [d.jsx(iu, {
                            className: "w-3.5 h-3.5"
                        }), " Compra Segura"]
                    }), d.jsx("span", {
                        className: "flex items-center gap-1 text-[10px] text-muted-foreground font-semibold",
                        children: "🔒 Site Protegido SSL"
                    })]
                }), d.jsx(PC, {})]
            }), o && d.jsx("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",
                children: d.jsxs("div", {
                    className: "bg-card rounded-2xl border border-border shadow-xl max-w-md w-full p-6 relative animate-fade-in-up",
                    children: [d.jsx("button", {
                        onClick: C,
                        className: "absolute top-4 right-4 text-muted-foreground hover:text-foreground transition",
                        children: d.jsx(Jh, {
                            className: "w-5 h-5"
                        })
                    }), d.jsxs("div", {
                        className: "text-center mb-5",
                        children: [d.jsx("div", {
                            className: "w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3",
                            children: d.jsx(su, {
                                className: "w-7 h-7 text-accent"
                            })
                        }), d.jsx("h3", {
                            className: "text-xl font-bold text-foreground",
                            children: "Confirme seu veículo"
                        }), d.jsx("p", {
                            className: "text-sm text-muted-foreground mt-1",
                            children: "Verifique se os dados estão corretos antes de prosseguir"
                        })]
                    }), d.jsxs("div", {
                        className: "bg-muted rounded-xl p-4 mb-5",
                        children: [d.jsx("p", {
                            className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1",
                            children: "Tapete sob medida para"
                        }), d.jsx("p", {
                            className: "text-lg font-bold text-foreground",
                            children: x
                        }), d.jsx("p", {
                            className: "text-sm text-accent font-medium mt-1",
                            children: i
                        })]
                    }), d.jsxs("div", {
                        className: "mb-5",
                        children: [d.jsx("p", {
                            className: "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3",
                            children: "Escolha a textura do tapete"
                        }), d.jsx("div", {
                            className: "grid grid-cols-3 gap-3",
                            children: Lf.map(w => d.jsxs("button", {
                                onClick: () => u(w.id),
                                className: `relative rounded-xl border-2 overflow-hidden transition-all ${l===w.id?"border-accent ring-2 ring-accent/30 scale-[1.02]":"border-border hover:border-muted-foreground"}`,
                                children: [d.jsx("div", {
                                    className: "w-full aspect-square bg-muted",
                                    children: d.jsx("img", {
                                        src: w.image,
                                        alt: w.label,
                                        className: "w-full h-full object-cover",
                                        width: 400,
                                        height: 400,
                                        loading: "eager",
                                        decoding: "sync",
                                        onError: v => {
                                            const h = v.currentTarget;
                                            h.dataset.retried || (h.dataset.retried = "1", h.src = `${w.image}${w.image.includes("?")?"&":"?"}r=${Date.now()}`)
                                        }
                                    })
                                }), d.jsx("span", {
                                    className: `block text-center text-xs font-bold py-1.5 ${l===w.id?"bg-accent text-accent-foreground":"bg-muted text-muted-foreground"}`,
                                    children: w.label
                                })]
                            }, w.id))
                        })]
                    }), d.jsxs("div", {
                        className: "flex gap-3",
                        children: [d.jsx("button", {
                            onClick: C,
                            className: "flex-1 bg-muted text-foreground font-semibold py-3 rounded-lg hover:bg-muted/80 transition",
                            children: "Alterar"
                        }), d.jsx("button", {
                            onClick: p,
                            disabled: !l,
                            className: "flex-1 bg-accent text-accent-foreground font-bold py-3 rounded-lg shadow-cta hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed",
                            children: "Confirmar ✓"
                        })]
                    })]
                })
            })]
        })
    },
    IC = "/assets/benefit-1-BvoUugmp.jpg",
    UC = "/assets/benefit-2-B4p1FOXL.jpg",
    zC = "/assets/benefit-3-C8x1tX26.jpg",
    FC = "/assets/benefit-4-CTzF5lPl.jpg",
    $C = [{
        icon: Ox,
        image: IC,
        title: "100% Impermeável",
        description: "Borracha TPE forma barreira completa. Borda elevada 3cm retém tudo dentro do tapete.",
        points: ["Líquidos contidos pela borda", "Superfície antiderrapante", "Limpeza em segundos"]
    }, {
        icon: Ux,
        image: UC,
        title: "100% Sob Medida",
        description: "Modelado para o assoalho exato do seu carro. Encaixe milimétrico sem folgas.",
        points: ["Cobertura total do assoalho", "Sem corte ou ajuste", "+500 modelos disponíveis"]
    }, {
        icon: $x,
        image: zC,
        title: "Fixação Original de Fábrica",
        description: "Encaixa nos pinos originais do seu veículo. Tapete fixo durante toda a direção.",
        points: ["Não desloca em frenagens", "Encaixe nos pinos originais", "Maior segurança"]
    }, {
        icon: Vi,
        image: FC,
        title: "Altíssima Durabilidade",
        description: "TPE injetada de alta qualidade. Não amassa, não racha, não descolore.",
        points: ["Resistente a UV", "Suporta uso diário intenso", "Borda mantém forma"]
    }],
    BC = () => d.jsx("section", {
        id: "beneficios",
        className: "bg-background py-8 md:py-16",
        children: d.jsxs("div", {
            className: "container mx-auto px-4",
            children: [d.jsx("h2", {
                className: "text-2xl md:text-3xl font-bold text-center text-foreground mb-12",
                children: "Por Que o Tapete Bandeja 3D é Diferente?"
            }), d.jsx("div", {
                className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto",
                children: $C.map((e, t) => d.jsxs("div", {
                    className: "bg-card rounded-xl border border-border overflow-hidden shadow-card animate-fade-in-up",
                    style: {
                        animationDelay: `${t*100}ms`
                    },
                    children: [d.jsx("img", {
                        src: e.image,
                        alt: e.title,
                        className: "w-full aspect-video object-cover",
                        loading: "lazy",
                        width: 600,
                        height: 338
                    }), d.jsxs("div", {
                        className: "p-5",
                        children: [d.jsxs("div", {
                            className: "flex items-center gap-3 mb-2",
                            children: [d.jsx("div", {
                                className: "flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center",
                                children: d.jsx(e.icon, {
                                    className: "w-5 h-5 text-accent"
                                })
                            }), d.jsx("h3", {
                                className: "text-lg font-bold text-foreground",
                                children: e.title
                            })]
                        }), d.jsx("p", {
                            className: "text-sm text-muted-foreground mb-3",
                            children: e.description
                        }), d.jsx("ul", {
                            className: "space-y-1",
                            children: e.points.map(n => d.jsxs("li", {
                                className: "text-sm text-foreground flex items-center gap-2",
                                children: [d.jsx("span", {
                                    className: "text-success",
                                    children: "✓"
                                }), " ", n]
                            }, n))
                        })]
                    })]
                }, t))
            })]
        })
    }),
    HC = "/assets/before-1-CSeZZCWP.jpg",
    WC = "/assets/after-1-B-BLMjYY.jpg",
    GC = "/assets/before-2-o3mJEfFp.jpg",
    QC = "/assets/after-2-CY3IPhR1.jpg",
    KC = ({
        beforeImage: e,
        afterImage: t,
        beforeLabel: n = "ANTES",
        afterLabel: r = "DEPOIS"
    }) => {
        const [o, s] = S.useState(50), i = S.useRef(null), a = S.useRef(!1), l = S.useRef(!1), u = S.useRef(!1);
        S.useEffect(() => {
            const w = i.current;
            if (!w) return;
            const v = new IntersectionObserver(h => {
                h.forEach(y => {
                    y.isIntersecting && !l.current && !u.current && (l.current = !0, [{
                        value: 85,
                        delay: 300
                    }, {
                        value: 15,
                        delay: 1400
                    }, {
                        value: 50,
                        delay: 2500
                    }].forEach(({
                        value: P,
                        delay: E
                    }) => {
                        setTimeout(() => {
                            u.current || s(P)
                        }, E)
                    }))
                })
            }, {
                threshold: .4
            });
            return v.observe(w), () => v.disconnect()
        }, []), S.useCallback(() => {
            u.current = !0
        }, []);
        const f = S.useCallback(w => {
                if (!i.current) return;
                const v = i.current.getBoundingClientRect(),
                    h = w - v.left,
                    y = Math.max(0, Math.min(100, h / v.width * 100));
                s(y)
            }, []),
            m = S.useCallback(() => {
                a.current = !0, u.current = !0
            }, []),
            g = S.useCallback(w => {
                a.current && f(w.clientX)
            }, [f]),
            p = S.useCallback(() => {
                a.current = !1
            }, []),
            C = S.useCallback(w => {
                u.current = !0, f(w.touches[0].clientX)
            }, [f]),
            x = S.useCallback(w => {
                u.current = !0, f(w.clientX)
            }, [f]);
        return d.jsxs("div", {
            ref: i,
            className: "relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-col-resize select-none shadow-card",
            onMouseDown: m,
            onMouseMove: g,
            onMouseUp: p,
            onMouseLeave: p,
            onTouchMove: C,
            onClick: x,
            children: [d.jsx("img", {
                src: t,
                alt: "Depois",
                className: "absolute inset-0 w-full h-full object-cover",
                loading: "lazy",
                draggable: !1
            }), d.jsx("div", {
                className: "absolute inset-0 overflow-hidden transition-[clip-path] duration-1000 ease-in-out",
                style: {
                    clipPath: `inset(0 0 0 ${o}%)`
                },
                children: d.jsx("img", {
                    src: e,
                    alt: "Antes",
                    className: "absolute inset-0 w-full h-full object-cover",
                    loading: "lazy",
                    draggable: !1
                })
            }), d.jsx("div", {
                className: "absolute top-0 bottom-0 w-0.5 bg-white z-10 transition-[left] duration-1000 ease-in-out",
                style: {
                    left: `${o}%`
                },
                children: d.jsx("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-20",
                    children: d.jsxs("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        children: [d.jsx("path", {
                            d: "M7 4L3 10L7 16",
                            stroke: "hsl(var(--primary))",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), d.jsx("path", {
                            d: "M13 4L17 10L13 16",
                            stroke: "hsl(var(--primary))",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                })
            }), d.jsx("span", {
                className: "absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full z-10",
                children: r
            }), d.jsx("span", {
                className: "absolute top-3 right-3 bg-muted/80 text-foreground text-xs font-bold px-3 py-1 rounded-full z-10",
                children: n
            })]
        })
    },
    XC = [{
        before: HC,
        after: WC
    }, {
        before: GC,
        after: QC
    }],
    qC = () => d.jsx("section", {
        className: "bg-background py-8 md:py-16",
        children: d.jsxs("div", {
            className: "container mx-auto px-4",
            children: [d.jsxs("div", {
                className: "text-center mb-10",
                children: [d.jsx("h2", {
                    className: "text-2xl md:text-3xl font-black text-foreground mb-2",
                    children: "Veja a Diferença na Prática"
                }), d.jsx("p", {
                    className: "text-muted-foreground",
                    children: "Deslize para comparar antes e depois da instalação"
                })]
            }), d.jsx("div", {
                className: "grid md:grid-cols-2 gap-6 max-w-4xl mx-auto",
                children: XC.map((e, t) => d.jsx(KC, {
                    beforeImage: e.before,
                    afterImage: e.after
                }, t))
            })]
        })
    }),
    YC = [
        ["Material", "Borracha TPE de Alta Densidade"],
        ["Espessura", "6mm"],
        ["Bordas", "Elevadas até 5cm"],
        ["Fixação", "Ilhós originais de fábrica"],
        ["Cobertura", "Assoalho completo sob medida"],
        ["Limpeza", "Lavável com água e sabão"],
        ["Garantia", "12 meses"],
        ["Cor", "Preto"],
        ["Aplicação", "+500 modelos de veículos"]
    ],
    JC = [{
        icon: To,
        title: "Frete Grátis",
        sub: "Para todo o Brasil"
    }, {
        icon: Vi,
        title: "Pagamento Seguro",
        sub: "SSL 256-bit"
    }, {
        icon: qh,
        title: "7 Dias para Devolver",
        sub: "Sem burocracia"
    }, {
        icon: Fx,
        title: "+15.000 Clientes",
        sub: "Avaliação 4.9/5"
    }, {
        icon: Xh,
        title: "Garantia 12 Meses",
        sub: "Contra defeitos"
    }],
    ZC = () => d.jsx("section", {
        className: "bg-section-alt py-8 md:py-16",
        children: d.jsxs("div", {
            className: "container mx-auto px-4 max-w-3xl",
            children: [d.jsx("h2", {
                className: "text-2xl md:text-3xl font-bold text-center text-foreground mb-10",
                children: "Especificações Técnicas"
            }), d.jsx("div", {
                className: "bg-card rounded-xl border border-border overflow-hidden shadow-card mb-12",
                children: YC.map(([e, t], n) => d.jsxs("div", {
                    className: `flex justify-between items-center px-5 py-3.5 text-sm ${n%2===0?"bg-card":"bg-section-alt"}`,
                    children: [d.jsx("span", {
                        className: "font-semibold text-foreground",
                        children: e
                    }), d.jsx("span", {
                        className: "text-muted-foreground",
                        children: t
                    })]
                }, e))
            }), d.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-5 gap-4",
                children: JC.map(e => d.jsxs("div", {
                    className: "text-center",
                    children: [d.jsx(e.icon, {
                        className: "w-8 h-8 text-primary mx-auto mb-2"
                    }), d.jsx("p", {
                        className: "text-sm font-bold text-foreground",
                        children: e.title
                    }), d.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: e.sub
                    })]
                }, e.title))
            })]
        })
    }),
    eb = "/assets/review-marcos-BZNjDJ6c.jpg",
    tb = "/assets/review-ana-07z3BQmt.jpg",
    nb = "/assets/review-ricardo-BCiW0-GG.jpg",
    rb = "/assets/review-camila-zXcmQKQA.jpg",
    ob = "/assets/review-fernando-0h0bPQ8x.jpg",
    sb = "/assets/review-juliana-BsWj2KV6.jpg",
    ib = "/assets/review-trunk-BxavS3pV.jpg",
    ab = [{
        initials: "MS",
        name: "Marcos Silva",
        city: "São Paulo, SP",
        car: "VW Virtus 2022",
        date: "12/03/2026",
        photo: eb,
        text: "Encaixou perfeitinho! A borda segurou até o café que derrubei na correria. Muito melhor que tapete universal."
    }, {
        initials: "AF",
        name: "Ana Ferreira",
        city: "Belo Horizonte, MG",
        car: "Fiat Pulse 2023",
        date: "28/02/2026",
        photo: tb,
        text: "Tenho dois filhos e meu carro vivia imundo. Agora limpo em 2 minutos. Instalou super fácil!"
    }, {
        initials: "RO",
        name: "Ricardo Oliveira",
        city: "Curitiba, PR",
        car: "Toyota Hilux 2021",
        date: "05/03/2026",
        photo: nb,
        text: "Uso em obra, entra muita lama. Já lavei 30 vezes e tá igual. Nunca vi tapete tão resistente."
    }, {
        initials: "CL",
        name: "Camila Lima",
        city: "Rio de Janeiro, RJ",
        car: "Hyundai Creta 2023",
        date: "18/03/2026",
        photo: rb,
        text: "Chegou rápido, embalado perfeitamente. Encaixe na primeira tentativa. Indiquei para 3 amigas!"
    }, {
        initials: "FG",
        name: "Fernando Gomes",
        city: "Fortaleza, CE",
        car: "Chevrolet Tracker 2022",
        date: "22/02/2026",
        photo: ob,
        text: "Aqui chove muito e sempre entrava lama. Desde que coloquei acabou o problema. Entrega rápida!"
    }, {
        initials: "JB",
        name: "Juliana Bastos",
        city: "Porto Alegre, RS",
        car: "Jeep Compass 2023",
        date: "01/04/2026",
        photo: sb,
        text: "Tenho cachorro e o carro ficava cheio de pelo. Agora é só tirar e lavar. Parece peça original!"
    }, {
        initials: "PL",
        name: "Paulo Lopes",
        city: "Campinas, SP",
        car: "Chery Tiggo 7 2024",
        date: "08/04/2026",
        photo: ib,
        text: "Porta-malas ficou 100% protegido. Encaixe perfeito, parece peça original. Recomendo demais!"
    }],
    lb = [{
        src: "/videos/video-homem-1.mp4",
        name: "Carlos Mendes"
    }, {
        src: "/videos/video-mulher-1.mp4",
        name: "Patrícia Souza"
    }, {
        src: "/videos/video-homem-2.mp4",
        name: "Roberto Alves"
    }, {
        src: "/videos/video-mulher-2.mp4",
        name: "Fernanda Costa"
    }, {
        src: "/videos/video-homem-3.mp4",
        name: "Lucas Pereira"
    }, {
        src: "/videos/video-mulher-3.mp4",
        name: "Mariana Santos"
    }],
    ub = ({
        src: e,
        name: t
    }) => {
        const n = S.useRef(null),
            [r, o] = S.useState(!1),
            s = () => {
                n.current && (r ? n.current.pause() : (n.current.currentTime = 0, n.current.play()), o(!r))
            };
        return d.jsx("div", {
            className: "flex flex-col items-center gap-2",
            children: d.jsxs("div", {
                className: "relative rounded-xl overflow-hidden bg-muted aspect-[9/16] cursor-pointer shadow-card w-full",
                onClick: s,
                children: [d.jsx("video", {
                    ref: n,
                    src: e,
                    className: "w-full h-full object-cover",
                    playsInline: !0,
                    preload: "metadata",
                    poster: "",
                    onLoadedData: i => {
                        const a = i.currentTarget;
                        a.currentTime = .5
                    },
                    onEnded: () => o(!1)
                }), !r && d.jsxs("div", {
                    className: "absolute inset-0 flex flex-col items-center justify-center bg-black/30",
                    children: [d.jsx("div", {
                        className: "w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg",
                        children: d.jsx(Ix, {
                            className: "w-6 h-6 text-accent-foreground ml-1",
                            fill: "currentColor"
                        })
                    }), d.jsx("p", {
                        className: "mt-3 text-sm font-bold text-white drop-shadow-md",
                        children: t
                    })]
                })]
            })
        })
    },
    cb = () => d.jsx("section", {
        id: "avaliacoes",
        className: "bg-background py-8 md:py-16",
        children: d.jsxs("div", {
            className: "container mx-auto px-4",
            children: [d.jsx("h2", {
                className: "text-2xl md:text-3xl font-bold text-center text-foreground mb-2",
                children: "O Que Nossos Clientes Dizem"
            }), d.jsx("p", {
                className: "text-center text-muted-foreground mb-10",
                children: "4.9/5 — 847 avaliações verificadas"
            }), d.jsxs("div", {
                className: "mb-12",
                children: [d.jsx("h3", {
                    className: "text-lg font-bold text-foreground text-center mb-6",
                    children: "🎥 Depoimentos em Vídeo"
                }), d.jsx("div", {
                    className: "flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide max-w-5xl mx-auto",
                    children: lb.map((e, t) => d.jsx("div", {
                        className: "flex-shrink-0 w-48 md:w-56 snap-start",
                        children: d.jsx(ub, {
                            src: e.src,
                            name: e.name
                        })
                    }, t))
                })]
            }), d.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto",
                children: ab.map(e => d.jsxs("div", {
                    className: "bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-shadow",
                    children: [d.jsx("img", {
                        src: e.photo,
                        alt: `Tapete instalado no ${e.car}`,
                        className: "w-full aspect-video object-cover",
                        loading: "lazy",
                        width: 512,
                        height: 288
                    }), d.jsxs("div", {
                        className: "p-5",
                        children: [d.jsxs("div", {
                            className: "flex items-center gap-3 mb-3",
                            children: [d.jsx("div", {
                                className: "w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm",
                                children: e.initials
                            }), d.jsxs("div", {
                                children: [d.jsx("p", {
                                    className: "font-semibold text-sm text-foreground",
                                    children: e.name
                                }), d.jsxs("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: [e.city, " · ", e.car]
                                })]
                            })]
                        }), d.jsxs("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [d.jsx("div", {
                                className: "flex gap-0.5",
                                children: Array.from({
                                    length: 5
                                }).map((t, n) => d.jsx(Yh, {
                                    className: "w-4 h-4 fill-accent text-accent"
                                }, n))
                            }), d.jsx("span", {
                                className: "text-[10px] text-muted-foreground",
                                children: e.date
                            })]
                        }), d.jsxs("p", {
                            className: "text-sm text-foreground leading-relaxed",
                            children: ['"', e.text, '"']
                        }), d.jsxs("div", {
                            className: "flex items-center gap-1.5 mt-3 bg-success/10 text-success px-2.5 py-1 rounded-full w-fit",
                            children: [d.jsx(iu, {
                                className: "w-3.5 h-3.5"
                            }), d.jsx("span", {
                                className: "text-xs font-bold",
                                children: "Compra Verificada"
                            })]
                        })]
                    })]
                }, e.initials))
            })]
        })
    });
var pa = "Collapsible",
    [db, $0] = ao(pa),
    [fb, Ec] = db(pa),
    B0 = S.forwardRef((e, t) => {
        const {
            __scopeCollapsible: n,
            open: r,
            defaultOpen: o,
            disabled: s,
            onOpenChange: i,
            ...a
        } = e, [l, u] = sa({
            prop: r,
            defaultProp: o ? ? !1,
            onChange: i,
            caller: pa
        });
        return d.jsx(fb, {
            scope: n,
            disabled: s,
            contentId: u0(),
            open: l,
            onOpenToggle: S.useCallback(() => u(f => !f), [u]),
            children: d.jsx(Se.div, {
                "data-state": Nc(l),
                "data-disabled": s ? "" : void 0,
                ...a,
                ref: t
            })
        })
    });
B0.displayName = pa;
var H0 = "CollapsibleTrigger",
    W0 = S.forwardRef((e, t) => {
        const {
            __scopeCollapsible: n,
            ...r
        } = e, o = Ec(H0, n);
        return d.jsx(Se.button, {
            type: "button",
            "aria-controls": o.contentId,
            "aria-expanded": o.open || !1,
            "data-state": Nc(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...r,
            ref: t,
            onClick: he(e.onClick, o.onOpenToggle)
        })
    });
W0.displayName = H0;
var kc = "CollapsibleContent",
    G0 = S.forwardRef((e, t) => {
        const {
            forceMount: n,
            ...r
        } = e, o = Ec(kc, e.__scopeCollapsible);
        return d.jsx(oa, {
            present: n || o.open,
            children: ({
                present: s
            }) => d.jsx(pb, { ...r,
                ref: t,
                present: s
            })
        })
    });
G0.displayName = kc;
var pb = S.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        present: r,
        children: o,
        ...s
    } = e, i = Ec(kc, n), [a, l] = S.useState(r), u = S.useRef(null), f = Ze(t, u), m = S.useRef(0), g = m.current, p = S.useRef(0), C = p.current, x = i.open || a, w = S.useRef(x), v = S.useRef(void 0);
    return S.useEffect(() => {
        const h = requestAnimationFrame(() => w.current = !1);
        return () => cancelAnimationFrame(h)
    }, []), Dt(() => {
        const h = u.current;
        if (h) {
            v.current = v.current || {
                transitionDuration: h.style.transitionDuration,
                animationName: h.style.animationName
            }, h.style.transitionDuration = "0s", h.style.animationName = "none";
            const y = h.getBoundingClientRect();
            m.current = y.height, p.current = y.width, w.current || (h.style.transitionDuration = v.current.transitionDuration, h.style.animationName = v.current.animationName), l(r)
        }
    }, [i.open, r]), d.jsx(Se.div, {
        "data-state": Nc(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        id: i.contentId,
        hidden: !x,
        ...s,
        ref: f,
        style: {
            "--radix-collapsible-content-height": g ? `${g}px` : void 0,
            "--radix-collapsible-content-width": C ? `${C}px` : void 0,
            ...e.style
        },
        children: x && o
    })
});

function Nc(e) {
    return e ? "open" : "closed"
}
var mb = B0,
    hb = W0,
    gb = G0,
    vb = S.createContext(void 0);

function yb(e) {
    const t = S.useContext(vb);
    return e || t || "ltr"
}
var kt = "Accordion",
    xb = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
    [Tc, wb, Sb] = Sh(kt),
    [ma, Jb] = ao(kt, [Sb, $0]),
    jc = $0(),
    Q0 = A.forwardRef((e, t) => {
        const {
            type: n,
            ...r
        } = e, o = r, s = r;
        return d.jsx(Tc.Provider, {
            scope: e.__scopeAccordion,
            children: n === "multiple" ? d.jsx(Eb, { ...s,
                ref: t
            }) : d.jsx(Pb, { ...o,
                ref: t
            })
        })
    });
Q0.displayName = kt;
var [K0, Cb] = ma(kt), [X0, bb] = ma(kt, {
    collapsible: !1
}), Pb = A.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onValueChange: o = () => {},
        collapsible: s = !1,
        ...i
    } = e, [a, l] = sa({
        prop: n,
        defaultProp: r ? ? "",
        onChange: o,
        caller: kt
    });
    return d.jsx(K0, {
        scope: e.__scopeAccordion,
        value: A.useMemo(() => a ? [a] : [], [a]),
        onItemOpen: l,
        onItemClose: A.useCallback(() => s && l(""), [s, l]),
        children: d.jsx(X0, {
            scope: e.__scopeAccordion,
            collapsible: s,
            children: d.jsx(q0, { ...i,
                ref: t
            })
        })
    })
}), Eb = A.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onValueChange: o = () => {},
        ...s
    } = e, [i, a] = sa({
        prop: n,
        defaultProp: r ? ? [],
        onChange: o,
        caller: kt
    }), l = A.useCallback(f => a((m = []) => [...m, f]), [a]), u = A.useCallback(f => a((m = []) => m.filter(g => g !== f)), [a]);
    return d.jsx(K0, {
        scope: e.__scopeAccordion,
        value: i,
        onItemOpen: l,
        onItemClose: u,
        children: d.jsx(X0, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: d.jsx(q0, { ...s,
                ref: t
            })
        })
    })
}), [kb, ha] = ma(kt), q0 = A.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        disabled: r,
        dir: o,
        orientation: s = "vertical",
        ...i
    } = e, a = A.useRef(null), l = Ze(a, t), u = wb(n), m = yb(o) === "ltr", g = he(e.onKeyDown, p => {
        var V;
        if (!xb.includes(p.key)) return;
        const C = p.target,
            x = u().filter(O => {
                var M;
                return !((M = O.ref.current) != null && M.disabled)
            }),
            w = x.findIndex(O => O.ref.current === C),
            v = x.length;
        if (w === -1) return;
        p.preventDefault();
        let h = w;
        const y = 0,
            b = v - 1,
            P = () => {
                h = w + 1, h > b && (h = y)
            },
            E = () => {
                h = w - 1, h < y && (h = b)
            };
        switch (p.key) {
            case "Home":
                h = y;
                break;
            case "End":
                h = b;
                break;
            case "ArrowRight":
                s === "horizontal" && (m ? P() : E());
                break;
            case "ArrowDown":
                s === "vertical" && P();
                break;
            case "ArrowLeft":
                s === "horizontal" && (m ? E() : P());
                break;
            case "ArrowUp":
                s === "vertical" && E();
                break
        }
        const k = h % v;
        (V = x[k].ref.current) == null || V.focus()
    });
    return d.jsx(kb, {
        scope: n,
        disabled: r,
        direction: o,
        orientation: s,
        children: d.jsx(Tc.Slot, {
            scope: n,
            children: d.jsx(Se.div, { ...i,
                "data-orientation": s,
                ref: l,
                onKeyDown: r ? void 0 : g
            })
        })
    })
}), _i = "AccordionItem", [Nb, Rc] = ma(_i), Y0 = A.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        value: r,
        ...o
    } = e, s = ha(_i, n), i = Cb(_i, n), a = jc(n), l = u0(), u = r && i.value.includes(r) || !1, f = s.disabled || e.disabled;
    return d.jsx(Nb, {
        scope: n,
        open: u,
        disabled: f,
        triggerId: l,
        children: d.jsx(mb, {
            "data-orientation": s.orientation,
            "data-state": rg(u),
            ...a,
            ...o,
            ref: t,
            disabled: f,
            open: u,
            onOpenChange: m => {
                m ? i.onItemOpen(r) : i.onItemClose(r)
            }
        })
    })
});
Y0.displayName = _i;
var J0 = "AccordionHeader",
    Z0 = A.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...r
        } = e, o = ha(kt, n), s = Rc(J0, n);
        return d.jsx(Se.h3, {
            "data-orientation": o.orientation,
            "data-state": rg(s.open),
            "data-disabled": s.disabled ? "" : void 0,
            ...r,
            ref: t
        })
    });
Z0.displayName = J0;
var fu = "AccordionTrigger",
    eg = A.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...r
        } = e, o = ha(kt, n), s = Rc(fu, n), i = bb(fu, n), a = jc(n);
        return d.jsx(Tc.ItemSlot, {
            scope: n,
            children: d.jsx(hb, {
                "aria-disabled": s.open && !i.collapsible || void 0,
                "data-orientation": o.orientation,
                id: s.triggerId,
                ...a,
                ...r,
                ref: t
            })
        })
    });
eg.displayName = fu;
var tg = "AccordionContent",
    ng = A.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...r
        } = e, o = ha(kt, n), s = Rc(tg, n), i = jc(n);
        return d.jsx(gb, {
            role: "region",
            "aria-labelledby": s.triggerId,
            "data-orientation": o.orientation,
            ...i,
            ...r,
            ref: t,
            style: {
                "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                ...e.style
            }
        })
    });
ng.displayName = tg;

function rg(e) {
    return e ? "open" : "closed"
}
var Tb = Q0,
    jb = Y0,
    Rb = Z0,
    og = eg,
    sg = ng;
const Vb = Tb,
    ig = S.forwardRef(({
        className: e,
        ...t
    }, n) => d.jsx(jb, {
        ref: n,
        className: Ut("border-b", e),
        ...t
    }));
ig.displayName = "AccordionItem";
const ag = S.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => d.jsx(Rb, {
    className: "flex",
    children: d.jsxs(og, {
        ref: r,
        className: Ut("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", e),
        ...n,
        children: [t, d.jsx(Qn, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
ag.displayName = og.displayName;
const lg = S.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => d.jsx(sg, {
    ref: r,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: d.jsx("div", {
        className: Ut("pb-4 pt-0", e),
        children: t
    })
}));
lg.displayName = sg.displayName;
const Ab = [{
        q: "O tapete serve para o meu carro?",
        a: "Sim! Temos tapetes desenvolvidos sob medida para mais de 500 modelos de veículos. Ao selecionar a marca, modelo e ano do seu carro, você garante o tapete perfeito para o assoalho do seu veículo."
    }, {
        q: "Como é feita a fixação do tapete?",
        a: "Nossos tapetes possuem ilhós de fixação original de fábrica, que encaixam nos pinos que já existem no assoalho do seu carro. Isso garante que o tapete não deslize durante a direção."
    }, {
        q: "O tapete é realmente 100% impermeável?",
        a: "Sim! O material borracha TPE de alta densidade forma uma barreira completa contra água, lama, líquidos e detritos. A borda elevada de até 3cm contém tudo dentro do tapete."
    }, {
        q: "Quanto tempo leva para chegar?",
        a: "O prazo médio de entrega é de 5 a 10 dias úteis após a confirmação do pagamento. Você receberá o código de rastreio por e-mail assim que o pedido for despachado."
    }, {
        q: "E se o tapete não servir no meu carro?",
        a: "Você tem 7 dias corridos a partir do recebimento para solicitar a troca ou devolução sem qualquer custo. Basta entrar em contato com nosso suporte via WhatsApp."
    }, {
        q: "Quais formas de pagamento são aceitas?",
        a: "Aceitamos cartão de crédito em até 3x sem juros, PIX, boleto bancário e transferência. Todas as transações são 100% seguras com criptografia SSL."
    }, {
        q: "O tapete danifica o carpete original?",
        a: "Não! O tapete é projetado para PROTEGER o carpete original do seu veículo. Ele não cola, não risca e não danifica nada. Você pode removê-lo a qualquer momento sem deixar marcas."
    }],
    Lb = () => d.jsx("section", {
        id: "faq",
        className: "bg-section-alt py-8 md:py-16",
        children: d.jsxs("div", {
            className: "container mx-auto px-4 max-w-2xl",
            children: [d.jsx("h2", {
                className: "text-2xl md:text-3xl font-bold text-center text-foreground mb-10",
                children: "Perguntas Frequentes"
            }), d.jsx(Vb, {
                type: "single",
                collapsible: !0,
                className: "space-y-3",
                children: Ab.map((e, t) => d.jsxs(ig, {
                    value: `faq-${t}`,
                    className: "bg-card border border-border rounded-xl px-5",
                    children: [d.jsx(ag, {
                        className: "text-left font-semibold text-foreground text-sm hover:no-underline",
                        children: e.q
                    }), d.jsx(lg, {
                        className: "text-sm text-muted-foreground leading-relaxed",
                        children: e.a
                    })]
                }, t))
            })]
        })
    }),
    Mb = () => d.jsx("section", {
        id: "garantia",
        className: "bg-background py-8 md:py-16",
        children: d.jsxs("div", {
            className: "container mx-auto px-4 text-center max-w-2xl",
            children: [d.jsx(Vi, {
                className: "w-16 h-16 text-accent mx-auto mb-4"
            }), d.jsx("h2", {
                className: "text-2xl md:text-3xl font-bold text-foreground mb-4",
                children: "Garantia Total de 12 Meses"
            }), d.jsx("p", {
                className: "text-muted-foreground leading-relaxed mb-8",
                children: "Acreditamos tanto na qualidade dos nossos tapetes que oferecemos 12 meses de garantia contra qualquer defeito de fabricação. Se por qualquer motivo você não ficar satisfeito nos primeiros 7 dias, devolvemos 100% do seu dinheiro sem perguntas."
            }), d.jsxs("div", {
                className: "flex justify-center gap-8",
                children: [d.jsxs("div", {
                    className: "text-center",
                    children: [d.jsx(Vi, {
                        className: "w-8 h-8 text-primary mx-auto mb-1"
                    }), d.jsx("p", {
                        className: "text-sm font-bold text-foreground",
                        children: "Compra Protegida"
                    })]
                }), d.jsxs("div", {
                    className: "text-center",
                    children: [d.jsx(qh, {
                        className: "w-8 h-8 text-primary mx-auto mb-1"
                    }), d.jsx("p", {
                        className: "text-sm font-bold text-foreground",
                        children: "7 dias Devolução"
                    })]
                }), d.jsxs("div", {
                    className: "text-center",
                    children: [d.jsx(Xh, {
                        className: "w-8 h-8 text-primary mx-auto mb-1"
                    }), d.jsx("p", {
                        className: "text-sm font-bold text-foreground",
                        children: "12 meses Garantia"
                    })]
                })]
            })]
        })
    }),
    Ob = () => {
        const [e, t] = S.useState({
            d: 0,
            h: 13,
            m: 35,
            s: 23
        });
        S.useEffect(() => {
            const r = setInterval(() => {
                t(o => {
                    let {
                        d: s,
                        h: i,
                        m: a,
                        s: l
                    } = o;
                    return l--, l < 0 && (l = 59, a--), a < 0 && (a = 59, i--), i < 0 && (i = 23, s--), s < 0 && (s = 0, i = 0, a = 0, l = 0), {
                        d: s,
                        h: i,
                        m: a,
                        s: l
                    }
                })
            }, 1e3);
            return () => clearInterval(r)
        }, []);
        const n = r => String(r).padStart(2, "0");
        return d.jsx("section", {
            className: "bg-primary py-8 md:py-16",
            children: d.jsxs("div", {
                className: "container mx-auto px-4 text-center",
                children: [d.jsx("h2", {
                    className: "text-2xl md:text-3xl font-bold text-primary-foreground mb-2",
                    children: "Não Deixe Para Depois — Proteja Seu Carro Agora"
                }), d.jsx("p", {
                    className: "text-primary-foreground/80 mb-8",
                    children: "Oferta da Semana do Cliente — Válida por tempo limitado"
                }), d.jsx("div", {
                    className: "flex justify-center gap-4 mb-8",
                    children: [{
                        val: n(e.d),
                        label: "Dias"
                    }, {
                        val: n(e.h),
                        label: "Horas"
                    }, {
                        val: n(e.m),
                        label: "Min"
                    }, {
                        val: n(e.s),
                        label: "Seg"
                    }].map(r => d.jsxs("div", {
                        className: "text-center",
                        children: [d.jsx("div", {
                            className: "bg-primary-foreground/10 text-primary-foreground text-3xl font-black rounded-lg w-16 h-16 flex items-center justify-center",
                            children: r.val
                        }), d.jsx("span", {
                            className: "text-primary-foreground/70 text-xs mt-1",
                            children: r.label
                        })]
                    }, r.label))
                }), d.jsxs("div", {
                    className: "flex items-center justify-center gap-2 mb-6",
                    children: [d.jsx(zx, {
                        className: "w-4 h-4 text-accent"
                    }), d.jsx("span", {
                        className: "text-primary-foreground/90 text-sm font-medium",
                        children: "Apenas 47 unidades em estoque para o modelo selecionado"
                    })]
                }), d.jsx("button", {
                    onClick: () => {
                        var r;
                        return (r = document.getElementById("vehicle-selector")) == null ? void 0 : r.scrollIntoView({
                            behavior: "smooth"
                        })
                    },
                    className: "bg-accent text-accent-foreground font-bold text-lg px-10 py-4 rounded-xl shadow-cta animate-pulse-glow hover:opacity-90 transition",
                    children: "GARANTIR MEU TAPETE COM DESCONTO →"
                }), d.jsx("p", {
                    className: "text-primary-foreground/60 text-sm mt-6",
                    children: "🔒 Pagamento 100% Seguro | 🚚 Frete Grátis | ↩️ 7 dias para devolver"
                })]
            })
        })
    },
    _b = "/assets/loja-fachada-BCDNfaGU.jpg",
    Db = [{
        value: "15.000+",
        label: "Clientes atendidos"
    }, {
        value: "12 meses",
        label: "Garantia real"
    }, {
        value: "48h",
        label: "Prazo de envio"
    }, {
        value: "4.9★",
        label: "Avaliação média"
    }],
    Ib = () => d.jsx("section", {
        id: "sobre-nos",
        className: "bg-section-alt py-8 md:py-16",
        children: d.jsxs("div", {
            className: "container mx-auto px-4",
            children: [d.jsx("p", {
                className: "text-center text-accent font-bold text-sm tracking-widest uppercase mb-2",
                children: "POR QUE CONFIAR NA OLIVEIRA AUTO PARTS?"
            }), d.jsx("h2", {
                className: "text-2xl md:text-3xl font-bold text-center text-foreground mb-4",
                children: "Empresa com estrutura real e compromisso com cada cliente"
            }), d.jsx("p", {
                className: "text-center text-muted-foreground max-w-xl mx-auto mb-10",
                children: "Não somos uma loja de fundo de quintal. Temos loja física, equipe dedicada e um processo de qualidade que garante o tapete certo para o seu carro."
            }), d.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12",
                children: Db.map(e => d.jsxs("div", {
                    className: "text-center",
                    children: [d.jsx("p", {
                        className: "text-2xl font-black text-primary",
                        children: e.value
                    }), d.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: e.label
                    })]
                }, e.label))
            }), d.jsxs("div", {
                className: "max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center",
                children: [d.jsx("img", {
                    src: _b,
                    alt: "Loja física Oliveira Auto Parts",
                    className: "w-full rounded-xl shadow-card",
                    loading: "lazy",
                    width: 800,
                    height: 512
                }), d.jsxs("div", {
                    children: [d.jsx("h3", {
                        className: "text-xl font-bold text-foreground mb-4",
                        children: "Uma empresa real, com história e compromisso"
                    }), d.jsx("p", {
                        className: "text-muted-foreground text-sm leading-relaxed mb-4",
                        children: "A Oliveira Auto Parts nasceu da paixão por qualidade e proteção automotiva. Com loja física, atendimento humano e milhares de clientes satisfeitos em todo o Brasil."
                    }), d.jsx("ul", {
                        className: "space-y-2",
                        children: ["Loja física com estoque próprio", "Mais de 15.000 clientes atendidos", "Garantia real de 12 meses"].map(e => d.jsxs("li", {
                            className: "flex items-center gap-2 text-sm text-foreground",
                            children: [d.jsx(Mx, {
                                className: "w-4 h-4 text-success flex-shrink-0"
                            }), e]
                        }, e))
                    })]
                })]
            })]
        })
    }),
    Ub = () => d.jsx("footer", {
        className: "bg-primary py-8",
        children: d.jsxs("div", {
            className: "container mx-auto px-4 text-center flex flex-col items-center",
            children: [d.jsx("img", {
                src: z0,
                alt: "Oliver Auto Parts",
                className: "h-12 w-auto mb-3 brightness-0 invert"
            }), d.jsx("p", {
                className: "text-primary-foreground/60 text-sm mb-1",
                children: "Rua Jose do Carmo da Silva, 49 — Park Empresarial de Iracemápolis, Iracemápolis - SP"
            }), d.jsxs("a", {
                href: "https://wa.me/551153041574?text=Olá! Tenho interesse nos tapetes da Oliver Auto Parts.",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm transition mb-3",
                children: [d.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: d.jsx("path", {
                        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    })
                }), "(11) 5304-1574"]
            }), d.jsxs("div", {
                className: "flex flex-wrap items-center justify-center gap-4 mb-3",
                children: [d.jsx("a", {
                    href: "#sobre-nos",
                    className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition",
                    children: "Sobre Nós"
                }), d.jsx("span", {
                    className: "text-primary-foreground/30",
                    children: "·"
                }), d.jsx("a", {
                    href: "#termos",
                    className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition",
                    children: "Termos de Uso"
                }), d.jsx("span", {
                    className: "text-primary-foreground/30",
                    children: "·"
                }), d.jsx("a", {
                    href: "#privacidade",
                    className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition",
                    children: "Política de Privacidade"
                }), d.jsx("span", {
                    className: "text-primary-foreground/30",
                    children: "·"
                }), d.jsx("a", {
                    href: "#contato",
                    className: "text-primary-foreground/70 hover:text-primary-foreground text-sm transition",
                    children: "Contato"
                })]
            }), d.jsxs("p", {
                className: "text-primary-foreground/60 text-sm",
                children: ["© ", new Date().getFullYear(), " Oliver Auto Parts. Todos os direitos reservados."]
            })]
        })
    }),
    el = 768;

function zb() {
    const [e, t] = S.useState(void 0);
    return S.useEffect(() => {
        const n = window.matchMedia(`(max-width: ${el-1}px)`),
            r = () => {
                t(window.innerWidth < el)
            };
        return n.addEventListener("change", r), t(window.innerWidth < el), () => n.removeEventListener("change", r)
    }, []), !!e
}
const Fb = () => {
        const e = zb(),
            [t, n] = S.useState(!1);
        return S.useEffect(() => {
            if (!e) return;
            const r = () => {
                n(window.scrollY > 600)
            };
            return window.addEventListener("scroll", r, {
                passive: !0
            }), r(), () => window.removeEventListener("scroll", r)
        }, [e]), !e || !t ? null : d.jsx("div", {
            className: "fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border px-4 py-3 animate-fade-in",
            children: d.jsx("button", {
                onClick: () => {
                    var r;
                    return (r = document.getElementById("vehicle-selector")) == null ? void 0 : r.scrollIntoView({
                        behavior: "smooth"
                    })
                },
                className: "w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg shadow-cta animate-pulse-glow hover:opacity-90 transition text-center",
                children: "ESCOLHER MEU TAPETE"
            })
        })
    },
    $b = () => d.jsxs("div", {
        className: "min-h-screen",
        children: [d.jsx(pC, {}), d.jsx(hC, {}), d.jsx(CC, {}), d.jsx(DC, {}), d.jsx(BC, {}), d.jsx(qC, {}), d.jsx(ZC, {}), d.jsx(cb, {}), d.jsx(Mb, {}), d.jsx(Lb, {}), d.jsx(Ob, {}), d.jsx(Ib, {}), d.jsx(Ub, {}), d.jsx(Fb, {})]
    }),
    Bb = () => {
        const e = yh();
        return S.useEffect(() => {
            console.error("404 Error: User attempted to access non-existent route:", e.pathname)
        }, [e.pathname]), d.jsx("div", {
            className: "flex min-h-screen items-center justify-center bg-muted",
            children: d.jsxs("div", {
                className: "text-center",
                children: [d.jsx("h1", {
                    className: "mb-4 text-4xl font-bold",
                    children: "404"
                }), d.jsx("p", {
                    className: "mb-4 text-xl text-muted-foreground",
                    children: "Oops! Page not found"
                }), d.jsx("a", {
                    href: "/",
                    className: "text-primary underline hover:text-primary/90",
                    children: "Return to Home"
                })]
            })
        })
    },
    Hb = new fy,
    Wb = () => (S.useEffect(() => {
        const e = n => {
                const r = n.target;
                (r.tagName === "IMG" || r.tagName === "VIDEO" || r.closest("img, video")) && n.preventDefault()
            },
            t = n => {
                const r = n.target;
                (r.tagName === "IMG" || r.tagName === "VIDEO") && n.preventDefault()
            };
        return document.addEventListener("contextmenu", e), document.addEventListener("dragstart", t), () => {
            document.removeEventListener("contextmenu", e), document.removeEventListener("dragstart", t)
        }
    }, []), d.jsx(my, {
        client: Hb,
        children: d.jsxs(dC, {
            children: [d.jsx(Pw, {}), d.jsx(V1, {}), d.jsx(Zy, {
                children: d.jsxs(qy, {
                    children: [d.jsx(Yl, {
                        path: "/",
                        element: d.jsx($b, {})
                    }), d.jsx(Yl, {
                        path: "*",
                        element: d.jsx(Bb, {})
                    })]
                })
            })]
        })
    }));
nh(document.getElementById("root")).render(d.jsx(Wb, {}));