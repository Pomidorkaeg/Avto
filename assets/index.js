const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Index2.js",
      "assets/Footer.js",
      "assets/api.js",
      "assets/trophy.js",
      "assets/chevron-right.js",
      "assets/Team.js",
      "assets/users.js",
      "assets/calendar.js",
      "assets/News.js",
      "assets/search.js",
      "assets/clock.js",
      "assets/Matches.js",
      "assets/Tournaments.js",
      "assets/Media.js",
      "assets/Contacts.js",
      "assets/Dashboard.js",
      "assets/AdminHome.js",
      "assets/PlayersManagement.js",
    ])
) => i.map((i) => d[i]);
var Ev = Object.defineProperty,
  Sv = Object.defineProperties;
var Cv = Object.getOwnPropertyDescriptors;
var vi = Object.getOwnPropertySymbols;
var wc = Object.prototype.hasOwnProperty,
  xc = Object.prototype.propertyIsEnumerable;
var Ec = (e) => {
    throw TypeError(e);
  },
  Sc = Math.pow,
  yc = (e, t, n) =>
    t in e
      ? Ev(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  S = (e, t) => {
    for (var n in t || (t = {})) wc.call(t, n) && yc(e, n, t[n]);
    if (vi) for (var n of vi(t)) xc.call(t, n) && yc(e, n, t[n]);
    return e;
  },
  b = (e, t) => Sv(e, Cv(t));
var W = (e, t) => {
  var n = {};
  for (var r in e) wc.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && vi)
    for (var r of vi(e)) t.indexOf(r) < 0 && xc.call(e, r) && (n[r] = e[r]);
  return n;
};
var dl = (e, t, n) => t.has(e) || Ec("Cannot " + n);
var _ = (e, t, n) => (
    dl(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  ee = (e, t, n) =>
    t.has(e)
      ? Ec("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  Y = (e, t, n, r) => (
    dl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  be = (e, t, n) => (dl(e, t, "access private method"), n);
var gi = (e, t, n, r) => ({
  set _(o) {
    Y(e, t, o, n);
  },
  get _() {
    return _(e, t, r);
  },
});
var Se = (e, t, n) =>
  new Promise((r, o) => {
    var i = (a) => {
        try {
          l(n.next(a));
        } catch (u) {
          o(u);
        }
      },
      s = (a) => {
        try {
          l(n.throw(a));
        } catch (u) {
          o(u);
        }
      },
      l = (a) => (a.done ? r(a.value) : Promise.resolve(a.value).then(i, s));
    l((n = n.apply(e, t)).next());
  });
function kv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Pf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Tf = { exports: {} },
  Ls = {},
  Rf = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ri = Symbol.for("react.element"),
  Pv = Symbol.for("react.portal"),
  Tv = Symbol.for("react.fragment"),
  Rv = Symbol.for("react.strict_mode"),
  _v = Symbol.for("react.profiler"),
  bv = Symbol.for("react.provider"),
  Nv = Symbol.for("react.context"),
  Ov = Symbol.for("react.forward_ref"),
  Av = Symbol.for("react.suspense"),
  Lv = Symbol.for("react.memo"),
  Mv = Symbol.for("react.lazy"),
  Cc = Symbol.iterator;
function Iv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cc && e[Cc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _f = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bf = Object.assign,
  Nf = {};
function Jr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nf),
    (this.updater = n || _f);
}
Jr.prototype.isReactComponent = {};
Jr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Of() {}
Of.prototype = Jr.prototype;
function eu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nf),
    (this.updater = n || _f);
}
var tu = (eu.prototype = new Of());
tu.constructor = eu;
bf(tu, Jr.prototype);
tu.isPureReactComponent = !0;
var kc = Array.isArray,
  Af = Object.prototype.hasOwnProperty,
  nu = { current: null },
  Lf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mf(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Af.call(t, r) && !Lf.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: ri,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: nu.current,
  };
}
function Dv(e, t) {
  return {
    $$typeof: ri,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ru(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ri;
}
function jv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pc = /\/+/g;
function fl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? jv("" + e.key)
    : t.toString(36);
}
function $i(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ri:
          case Pv:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + fl(s, 0) : r),
      kc(o)
        ? ((n = ""),
          e != null && (n = e.replace(Pc, "$&/") + "/"),
          $i(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (ru(o) &&
            (o = Dv(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Pc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), kc(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + fl(i, l);
      s += $i(i, t, n, a, o);
    }
  else if (((a = Iv(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + fl(i, l++)), (s += $i(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function yi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    $i(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function zv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Fe = { current: null },
  Ui = { transition: null },
  Fv = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: Ui,
    ReactCurrentOwner: nu,
  };
function If() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = {
  map: yi,
  forEach: function (e, t, n) {
    yi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      yi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      yi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ru(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = Jr;
G.Fragment = Tv;
G.Profiler = _v;
G.PureComponent = eu;
G.StrictMode = Rv;
G.Suspense = Av;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fv;
G.act = If;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = bf({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = nu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Af.call(t, a) &&
        !Lf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ri, type: e.type, key: o, ref: i, props: r, _owner: s };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: Nv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: bv, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = Mf;
G.createFactory = function (e) {
  var t = Mf.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: Ov, render: e };
};
G.isValidElement = ru;
G.lazy = function (e) {
  return { $$typeof: Mv, _payload: { _status: -1, _result: e }, _init: zv };
};
G.memo = function (e, t) {
  return { $$typeof: Lv, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = Ui.transition;
  Ui.transition = {};
  try {
    e();
  } finally {
    Ui.transition = t;
  }
};
G.unstable_act = If;
G.useCallback = function (e, t) {
  return Fe.current.useCallback(e, t);
};
G.useContext = function (e) {
  return Fe.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return Fe.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return Fe.current.useEffect(e, t);
};
G.useId = function () {
  return Fe.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return Fe.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return Fe.current.useRef(e);
};
G.useState = function (e) {
  return Fe.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return Fe.current.useTransition();
};
G.version = "18.3.1";
Rf.exports = G;
var y = Rf.exports;
const L = Pf(y),
  $v = kv({ __proto__: null, default: L }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uv = y,
  Bv = Symbol.for("react.element"),
  Vv = Symbol.for("react.fragment"),
  Wv = Object.prototype.hasOwnProperty,
  Hv = Uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Qv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Df(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Wv.call(t, r) && !Qv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Bv,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Hv.current,
  };
}
Ls.Fragment = Vv;
Ls.jsx = Df;
Ls.jsxs = Df;
Tf.exports = Ls;
var T = Tf.exports,
  jf = { exports: {} },
  rt = {},
  zf = { exports: {} },
  Ff = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, I) {
    var j = k.length;
    k.push(I);
    e: for (; 0 < j; ) {
      var D = (j - 1) >>> 1,
        V = k[D];
      if (0 < o(V, I)) (k[D] = I), (k[j] = V), (j = D);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var I = k[0],
      j = k.pop();
    if (j !== I) {
      k[0] = j;
      e: for (var D = 0, V = k.length, q = V >>> 1; D < q; ) {
        var ie = 2 * (D + 1) - 1,
          _e = k[ie],
          te = ie + 1,
          pt = k[te];
        if (0 > o(_e, j))
          te < V && 0 > o(pt, _e)
            ? ((k[D] = pt), (k[te] = j), (D = te))
            : ((k[D] = _e), (k[ie] = j), (D = ie));
        else if (te < V && 0 > o(pt, j)) (k[D] = pt), (k[te] = j), (D = te);
        else break e;
      }
    }
    return I;
  }
  function o(k, I) {
    var j = k.sortIndex - I.sortIndex;
    return j !== 0 ? j : k.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    f = 1,
    d = null,
    c = 3,
    g = !1,
    w = !1,
    v = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate != "undefined" ? setImmediate : null;
  typeof navigator != "undefined" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(k) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= k)
        r(u), (I.sortIndex = I.expirationTime), t(a, I);
      else break;
      I = n(u);
    }
  }
  function E(k) {
    if (((v = !1), m(k), !w))
      if (n(a) !== null) (w = !0), B(C);
      else {
        var I = n(u);
        I !== null && X(E, I.startTime - k);
      }
  }
  function C(k, I) {
    (w = !1), v && ((v = !1), p(N), (N = -1)), (g = !0);
    var j = c;
    try {
      for (
        m(I), d = n(a);
        d !== null && (!(d.expirationTime > I) || (k && !U()));

      ) {
        var D = d.callback;
        if (typeof D == "function") {
          (d.callback = null), (c = d.priorityLevel);
          var V = D(d.expirationTime <= I);
          (I = e.unstable_now()),
            typeof V == "function" ? (d.callback = V) : d === n(a) && r(a),
            m(I);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var q = !0;
      else {
        var ie = n(u);
        ie !== null && X(E, ie.startTime - I), (q = !1);
      }
      return q;
    } finally {
      (d = null), (c = j), (g = !1);
    }
  }
  var P = !1,
    R = null,
    N = -1,
    A = 5,
    M = -1;
  function U() {
    return !(e.unstable_now() - M < A);
  }
  function $() {
    if (R !== null) {
      var k = e.unstable_now();
      M = k;
      var I = !0;
      try {
        I = R(!0, k);
      } finally {
        I ? H() : ((P = !1), (R = null));
      }
    } else P = !1;
  }
  var H;
  if (typeof h == "function")
    H = function () {
      h($);
    };
  else if (typeof MessageChannel != "undefined") {
    var J = new MessageChannel(),
      z = J.port2;
    (J.port1.onmessage = $),
      (H = function () {
        z.postMessage(null);
      });
  } else
    H = function () {
      x($, 0);
    };
  function B(k) {
    (R = k), P || ((P = !0), H());
  }
  function X(k, I) {
    N = x(function () {
      k(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), B(C));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (k) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = c;
      }
      var j = c;
      c = I;
      try {
        return k();
      } finally {
        c = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, I) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var j = c;
      c = k;
      try {
        return I();
      } finally {
        c = j;
      }
    }),
    (e.unstable_scheduleCallback = function (k, I, j) {
      var D = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? D + j : D))
          : (j = D),
        k)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = j + V),
        (k = {
          id: f++,
          callback: I,
          priorityLevel: k,
          startTime: j,
          expirationTime: V,
          sortIndex: -1,
        }),
        j > D
          ? ((k.sortIndex = j),
            t(u, k),
            n(a) === null &&
              k === n(u) &&
              (v ? (p(N), (N = -1)) : (v = !0), X(E, j - D)))
          : ((k.sortIndex = V), t(a, k), w || g || ((w = !0), B(C))),
        k
      );
    }),
    (e.unstable_shouldYield = U),
    (e.unstable_wrapCallback = function (k) {
      var I = c;
      return function () {
        var j = c;
        c = I;
        try {
          return k.apply(this, arguments);
        } finally {
          c = j;
        }
      };
    });
})(Ff);
zf.exports = Ff;
var Kv = zf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yv = y,
  nt = Kv;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var $f = new Set(),
  Ao = {};
function ir(e, t) {
  Wr(e, t), Wr(e + "Capture", t);
}
function Wr(e, t) {
  for (Ao[e] = t, e = 0; e < t.length; e++) $f.add(t[e]);
}
var Kt = !(
    typeof window == "undefined" ||
    typeof window.document == "undefined" ||
    typeof window.document.createElement == "undefined"
  ),
  Ql = Object.prototype.hasOwnProperty,
  Gv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Tc = {},
  Rc = {};
function Xv(e) {
  return Ql.call(Rc, e)
    ? !0
    : Ql.call(Tc, e)
    ? !1
    : Gv.test(e)
    ? (Rc[e] = !0)
    : ((Tc[e] = !0), !1);
}
function qv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Zv(e, t, n, r) {
  if (t === null || typeof t == "undefined" || qv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function $e(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new $e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Re[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Re[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Re[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Re[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Re[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Re[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Re[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ou = /[\-:]([a-z])/g;
function iu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ou, iu);
    Re[t] = new $e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ou, iu);
    Re[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ou, iu);
  Re[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Re[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new $e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Re[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function su(e, t, n, r) {
  var o = Re.hasOwnProperty(t) ? Re[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Zv(t, n, o, r) && (n = null),
    r || o === null
      ? Xv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Jt = Yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wi = Symbol.for("react.element"),
  mr = Symbol.for("react.portal"),
  vr = Symbol.for("react.fragment"),
  lu = Symbol.for("react.strict_mode"),
  Kl = Symbol.for("react.profiler"),
  Uf = Symbol.for("react.provider"),
  Bf = Symbol.for("react.context"),
  au = Symbol.for("react.forward_ref"),
  Yl = Symbol.for("react.suspense"),
  Gl = Symbol.for("react.suspense_list"),
  uu = Symbol.for("react.memo"),
  cn = Symbol.for("react.lazy"),
  Vf = Symbol.for("react.offscreen"),
  _c = Symbol.iterator;
function lo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_c && e[_c]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pe = Object.assign,
  pl;
function yo(e) {
  if (pl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      pl = (t && t[1]) || "";
    }
  return (
    `
` +
    pl +
    e
  );
}
var hl = !1;
function ml(e, t) {
  if (!e || hl) return "";
  hl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (hl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? yo(e) : "";
}
function Jv(e) {
  switch (e.tag) {
    case 5:
      return yo(e.type);
    case 16:
      return yo("Lazy");
    case 13:
      return yo("Suspense");
    case 19:
      return yo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ml(e.type, !1)), e;
    case 11:
      return (e = ml(e.type.render, !1)), e;
    case 1:
      return (e = ml(e.type, !0)), e;
    default:
      return "";
  }
}
function Xl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case vr:
      return "Fragment";
    case mr:
      return "Portal";
    case Kl:
      return "Profiler";
    case lu:
      return "StrictMode";
    case Yl:
      return "Suspense";
    case Gl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Bf:
        return (e.displayName || "Context") + ".Consumer";
      case Uf:
        return (e._context.displayName || "Context") + ".Provider";
      case au:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case uu:
        return (
          (t = e.displayName || null), t !== null ? t : Xl(e.type) || "Memo"
        );
      case cn:
        (t = e._payload), (e = e._init);
        try {
          return Xl(e(t));
        } catch (n) {}
    }
  return null;
}
function eg(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return Xl(t);
    case 8:
      return t === lu ? "StrictMode" : "Mode";
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
      if (typeof t == "string") return t;
  }
  return null;
}
function On(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Wf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function tg(e) {
  var t = Wf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n != "undefined" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xi(e) {
  e._valueTracker || (e._valueTracker = tg(e));
}
function Hf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Wf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ts(e) {
  if (
    ((e = e || (typeof document != "undefined" ? document : void 0)),
    typeof e == "undefined")
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch (t) {
    return e.body;
  }
}
function ql(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function bc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = On(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Qf(e, t) {
  (t = t.checked), t != null && su(e, "checked", t, !1);
}
function Zl(e, t) {
  Qf(e, t);
  var n = On(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Jl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Jl(e, t.type, On(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Nc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Jl(e, t, n) {
  (t !== "number" || ts(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wo = Array.isArray;
function Rr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + On(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ea(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Oc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (wo(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: On(n) };
}
function Kf(e, t) {
  var n = On(t.value),
    r = On(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ac(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Yf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ta(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Yf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ei,
  Gf = (function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ei = Ei || document.createElement("div"),
          Ei.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ei.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Lo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var So = {
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
    strokeWidth: !0,
  },
  ng = ["Webkit", "ms", "Moz", "O"];
Object.keys(So).forEach(function (e) {
  ng.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (So[t] = So[e]);
  });
});
function Xf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (So.hasOwnProperty(e) && So[e])
    ? ("" + t).trim()
    : t + "px";
}
function qf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Xf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var rg = pe(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function na(e, t) {
  if (t) {
    if (rg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function ra(e, t) {
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
      return !0;
  }
}
var oa = null;
function cu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ia = null,
  _r = null,
  br = null;
function Lc(e) {
  if ((e = si(e))) {
    if (typeof ia != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = zs(t)), ia(e.stateNode, e.type, t));
  }
}
function Zf(e) {
  _r ? (br ? br.push(e) : (br = [e])) : (_r = e);
}
function Jf() {
  if (_r) {
    var e = _r,
      t = br;
    if (((br = _r = null), Lc(e), t)) for (e = 0; e < t.length; e++) Lc(t[e]);
  }
}
function ep(e, t) {
  return e(t);
}
function tp() {}
var vl = !1;
function np(e, t, n) {
  if (vl) return e(t, n);
  vl = !0;
  try {
    return ep(e, t, n);
  } finally {
    (vl = !1), (_r !== null || br !== null) && (tp(), Jf());
  }
}
function Mo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = zs(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var sa = !1;
if (Kt)
  try {
    var ao = {};
    Object.defineProperty(ao, "passive", {
      get: function () {
        sa = !0;
      },
    }),
      window.addEventListener("test", ao, ao),
      window.removeEventListener("test", ao, ao);
  } catch (e) {
    sa = !1;
  }
function og(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Co = !1,
  ns = null,
  rs = !1,
  la = null,
  ig = {
    onError: function (e) {
      (Co = !0), (ns = e);
    },
  };
function sg(e, t, n, r, o, i, s, l, a) {
  (Co = !1), (ns = null), og.apply(ig, arguments);
}
function lg(e, t, n, r, o, i, s, l, a) {
  if ((sg.apply(this, arguments), Co)) {
    if (Co) {
      var u = ns;
      (Co = !1), (ns = null);
    } else throw Error(O(198));
    rs || ((rs = !0), (la = u));
  }
}
function sr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function rp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Mc(e) {
  if (sr(e) !== e) throw Error(O(188));
}
function ag(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = sr(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Mc(o), e;
        if (i === r) return Mc(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function op(e) {
  return (e = ag(e)), e !== null ? ip(e) : null;
}
function ip(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ip(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sp = nt.unstable_scheduleCallback,
  Ic = nt.unstable_cancelCallback,
  ug = nt.unstable_shouldYield,
  cg = nt.unstable_requestPaint,
  ve = nt.unstable_now,
  dg = nt.unstable_getCurrentPriorityLevel,
  du = nt.unstable_ImmediatePriority,
  lp = nt.unstable_UserBlockingPriority,
  os = nt.unstable_NormalPriority,
  fg = nt.unstable_LowPriority,
  ap = nt.unstable_IdlePriority,
  Ms = null,
  It = null;
function pg(e) {
  if (It && typeof It.onCommitFiberRoot == "function")
    try {
      It.onCommitFiberRoot(Ms, e, void 0, (e.current.flags & 128) === 128);
    } catch (t) {}
}
var xt = Math.clz32 ? Math.clz32 : vg,
  hg = Math.log,
  mg = Math.LN2;
function vg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((hg(e) / mg) | 0)) | 0;
}
var Si = 64,
  Ci = 4194304;
function xo(e) {
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
      return e;
  }
}
function is(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = xo(l)) : ((i &= s), i !== 0 && (r = xo(i)));
  } else (s = n & ~o), s !== 0 ? (r = xo(s)) : i !== 0 && (r = xo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - xt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function gg(e, t) {
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
      return -1;
  }
}
function yg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - xt(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = gg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function aa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function up() {
  var e = Si;
  return (Si <<= 1), !(Si & 4194240) && (Si = 64), e;
}
function gl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function oi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xt(t)),
    (e[t] = n);
}
function wg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - xt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function fu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ne = 0;
function cp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var dp,
  pu,
  fp,
  pp,
  hp,
  ua = !1,
  ki = [],
  Sn = null,
  Cn = null,
  kn = null,
  Io = new Map(),
  Do = new Map(),
  fn = [],
  xg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Dc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Sn = null;
      break;
    case "dragenter":
    case "dragleave":
      Cn = null;
      break;
    case "mouseover":
    case "mouseout":
      kn = null;
      break;
    case "pointerover":
    case "pointerout":
      Io.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Do.delete(t.pointerId);
  }
}
function uo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = si(t)), t !== null && pu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Eg(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Sn = uo(Sn, e, t, n, r, o)), !0;
    case "dragenter":
      return (Cn = uo(Cn, e, t, n, r, o)), !0;
    case "mouseover":
      return (kn = uo(kn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Io.set(i, uo(Io.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Do.set(i, uo(Do.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function mp(e) {
  var t = Vn(e.target);
  if (t !== null) {
    var n = sr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = rp(n)), t !== null)) {
          (e.blockedOn = t),
            hp(e.priority, function () {
              fp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Bi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (oa = r), n.target.dispatchEvent(r), (oa = null);
    } else return (t = si(n)), t !== null && pu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function jc(e, t, n) {
  Bi(e) && n.delete(t);
}
function Sg() {
  (ua = !1),
    Sn !== null && Bi(Sn) && (Sn = null),
    Cn !== null && Bi(Cn) && (Cn = null),
    kn !== null && Bi(kn) && (kn = null),
    Io.forEach(jc),
    Do.forEach(jc);
}
function co(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ua ||
      ((ua = !0),
      nt.unstable_scheduleCallback(nt.unstable_NormalPriority, Sg)));
}
function jo(e) {
  function t(o) {
    return co(o, e);
  }
  if (0 < ki.length) {
    co(ki[0], e);
    for (var n = 1; n < ki.length; n++) {
      var r = ki[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Sn !== null && co(Sn, e),
      Cn !== null && co(Cn, e),
      kn !== null && co(kn, e),
      Io.forEach(t),
      Do.forEach(t),
      n = 0;
    n < fn.length;
    n++
  )
    (r = fn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < fn.length && ((n = fn[0]), n.blockedOn === null); )
    mp(n), n.blockedOn === null && fn.shift();
}
var Nr = Jt.ReactCurrentBatchConfig,
  ss = !0;
function Cg(e, t, n, r) {
  var o = ne,
    i = Nr.transition;
  Nr.transition = null;
  try {
    (ne = 1), hu(e, t, n, r);
  } finally {
    (ne = o), (Nr.transition = i);
  }
}
function kg(e, t, n, r) {
  var o = ne,
    i = Nr.transition;
  Nr.transition = null;
  try {
    (ne = 4), hu(e, t, n, r);
  } finally {
    (ne = o), (Nr.transition = i);
  }
}
function hu(e, t, n, r) {
  if (ss) {
    var o = ca(e, t, n, r);
    if (o === null) Rl(e, t, r, ls, n), Dc(e, r);
    else if (Eg(o, e, t, n, r)) r.stopPropagation();
    else if ((Dc(e, r), t & 4 && -1 < xg.indexOf(e))) {
      for (; o !== null; ) {
        var i = si(o);
        if (
          (i !== null && dp(i),
          (i = ca(e, t, n, r)),
          i === null && Rl(e, t, r, ls, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Rl(e, t, r, null, n);
  }
}
var ls = null;
function ca(e, t, n, r) {
  if (((ls = null), (e = cu(r)), (e = Vn(e)), e !== null))
    if (((t = sr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = rp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ls = e), null;
}
function vp(e) {
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
      switch (dg()) {
        case du:
          return 1;
        case lp:
          return 4;
        case os:
        case fg:
          return 16;
        case ap:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wn = null,
  mu = null,
  Vi = null;
function gp() {
  if (Vi) return Vi;
  var e,
    t = mu,
    n = t.length,
    r,
    o = "value" in wn ? wn.value : wn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Vi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Wi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Pi() {
  return !0;
}
function zc() {
  return !1;
}
function ot(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Pi
        : zc),
      (this.isPropagationStopped = zc),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Pi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Pi));
      },
      persist: function () {},
      isPersistent: Pi,
    }),
    t
  );
}
var eo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  vu = ot(eo),
  ii = pe({}, eo, { view: 0, detail: 0 }),
  Pg = ot(ii),
  yl,
  wl,
  fo,
  Is = pe({}, ii, {
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
    getModifierState: gu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== fo &&
            (fo && e.type === "mousemove"
              ? ((yl = e.screenX - fo.screenX), (wl = e.screenY - fo.screenY))
              : (wl = yl = 0),
            (fo = e)),
          yl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : wl;
    },
  }),
  Fc = ot(Is),
  Tg = pe({}, Is, { dataTransfer: 0 }),
  Rg = ot(Tg),
  _g = pe({}, ii, { relatedTarget: 0 }),
  xl = ot(_g),
  bg = pe({}, eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ng = ot(bg),
  Og = pe({}, eo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ag = ot(Og),
  Lg = pe({}, eo, { data: 0 }),
  $c = ot(Lg),
  Mg = {
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
    MozPrintableKey: "Unidentified",
  },
  Ig = {
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
    224: "Meta",
  },
  Dg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function jg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Dg[e]) ? !!t[e] : !1;
}
function gu() {
  return jg;
}
var zg = pe({}, ii, {
    key: function (e) {
      if (e.key) {
        var t = Mg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Wi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ig[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gu,
    charCode: function (e) {
      return e.type === "keypress" ? Wi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Wi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Fg = ot(zg),
  $g = pe({}, Is, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Uc = ot($g),
  Ug = pe({}, ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gu,
  }),
  Bg = ot(Ug),
  Vg = pe({}, eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wg = ot(Vg),
  Hg = pe({}, Is, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Qg = ot(Hg),
  Kg = [9, 13, 27, 32],
  yu = Kt && "CompositionEvent" in window,
  ko = null;
Kt && "documentMode" in document && (ko = document.documentMode);
var Yg = Kt && "TextEvent" in window && !ko,
  yp = Kt && (!yu || (ko && 8 < ko && 11 >= ko)),
  Bc = " ",
  Vc = !1;
function wp(e, t) {
  switch (e) {
    case "keyup":
      return Kg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function xp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var gr = !1;
function Gg(e, t) {
  switch (e) {
    case "compositionend":
      return xp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Vc = !0), Bc);
    case "textInput":
      return (e = t.data), e === Bc && Vc ? null : e;
    default:
      return null;
  }
}
function Xg(e, t) {
  if (gr)
    return e === "compositionend" || (!yu && wp(e, t))
      ? ((e = gp()), (Vi = mu = wn = null), (gr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return yp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var qg = {
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
  week: !0,
};
function Wc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!qg[e.type] : t === "textarea";
}
function Ep(e, t, n, r) {
  Zf(r),
    (t = as(t, "onChange")),
    0 < t.length &&
      ((n = new vu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Po = null,
  zo = null;
function Zg(e) {
  Ap(e, 0);
}
function Ds(e) {
  var t = xr(e);
  if (Hf(t)) return e;
}
function Jg(e, t) {
  if (e === "change") return t;
}
var Sp = !1;
if (Kt) {
  var El;
  if (Kt) {
    var Sl = "oninput" in document;
    if (!Sl) {
      var Hc = document.createElement("div");
      Hc.setAttribute("oninput", "return;"),
        (Sl = typeof Hc.oninput == "function");
    }
    El = Sl;
  } else El = !1;
  Sp = El && (!document.documentMode || 9 < document.documentMode);
}
function Qc() {
  Po && (Po.detachEvent("onpropertychange", Cp), (zo = Po = null));
}
function Cp(e) {
  if (e.propertyName === "value" && Ds(zo)) {
    var t = [];
    Ep(t, zo, e, cu(e)), np(Zg, t);
  }
}
function ey(e, t, n) {
  e === "focusin"
    ? (Qc(), (Po = t), (zo = n), Po.attachEvent("onpropertychange", Cp))
    : e === "focusout" && Qc();
}
function ty(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ds(zo);
}
function ny(e, t) {
  if (e === "click") return Ds(t);
}
function ry(e, t) {
  if (e === "input" || e === "change") return Ds(t);
}
function oy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var St = typeof Object.is == "function" ? Object.is : oy;
function Fo(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ql.call(t, o) || !St(e[o], t[o])) return !1;
  }
  return !0;
}
function Kc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Yc(e, t) {
  var n = Kc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Kc(n);
  }
}
function kp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? kp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Pp() {
  for (var e = window, t = ts(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch (r) {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ts(e.document);
  }
  return t;
}
function wu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function iy(e) {
  var t = Pp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    kp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && wu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Yc(n, i));
        var s = Yc(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var sy = Kt && "documentMode" in document && 11 >= document.documentMode,
  yr = null,
  da = null,
  To = null,
  fa = !1;
function Gc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fa ||
    yr == null ||
    yr !== ts(r) ||
    ((r = yr),
    "selectionStart" in r && wu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (To && Fo(To, r)) ||
      ((To = r),
      (r = as(da, "onSelect")),
      0 < r.length &&
        ((t = new vu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = yr))));
}
function Ti(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var wr = {
    animationend: Ti("Animation", "AnimationEnd"),
    animationiteration: Ti("Animation", "AnimationIteration"),
    animationstart: Ti("Animation", "AnimationStart"),
    transitionend: Ti("Transition", "TransitionEnd"),
  },
  Cl = {},
  Tp = {};
Kt &&
  ((Tp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete wr.animationend.animation,
    delete wr.animationiteration.animation,
    delete wr.animationstart.animation),
  "TransitionEvent" in window || delete wr.transitionend.transition);
function js(e) {
  if (Cl[e]) return Cl[e];
  if (!wr[e]) return e;
  var t = wr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Tp) return (Cl[e] = t[n]);
  return e;
}
var Rp = js("animationend"),
  _p = js("animationiteration"),
  bp = js("animationstart"),
  Np = js("transitionend"),
  Op = new Map(),
  Xc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function jn(e, t) {
  Op.set(e, t), ir(t, [e]);
}
for (var kl = 0; kl < Xc.length; kl++) {
  var Pl = Xc[kl],
    ly = Pl.toLowerCase(),
    ay = Pl[0].toUpperCase() + Pl.slice(1);
  jn(ly, "on" + ay);
}
jn(Rp, "onAnimationEnd");
jn(_p, "onAnimationIteration");
jn(bp, "onAnimationStart");
jn("dblclick", "onDoubleClick");
jn("focusin", "onFocus");
jn("focusout", "onBlur");
jn(Np, "onTransitionEnd");
Wr("onMouseEnter", ["mouseout", "mouseover"]);
Wr("onMouseLeave", ["mouseout", "mouseover"]);
Wr("onPointerEnter", ["pointerout", "pointerover"]);
Wr("onPointerLeave", ["pointerout", "pointerover"]);
ir(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ir(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ir(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ir(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ir(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Eo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  uy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));
function qc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), lg(r, t, void 0, e), (e.currentTarget = null);
}
function Ap(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          qc(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          qc(o, l, u), (i = a);
        }
    }
  }
  if (rs) throw ((e = la), (rs = !1), (la = null), e);
}
function ae(e, t) {
  var n = t[ga];
  n === void 0 && (n = t[ga] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Lp(t, e, 2, !1), n.add(r));
}
function Tl(e, t, n) {
  var r = 0;
  t && (r |= 4), Lp(n, e, r, t);
}
var Ri = "_reactListening" + Math.random().toString(36).slice(2);
function $o(e) {
  if (!e[Ri]) {
    (e[Ri] = !0),
      $f.forEach(function (n) {
        n !== "selectionchange" && (uy.has(n) || Tl(n, !1, e), Tl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ri] || ((t[Ri] = !0), Tl("selectionchange", !1, t));
  }
}
function Lp(e, t, n, r) {
  switch (vp(t)) {
    case 1:
      var o = Cg;
      break;
    case 4:
      o = kg;
      break;
    default:
      o = hu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !sa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Rl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Vn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  np(function () {
    var u = i,
      f = cu(n),
      d = [];
    e: {
      var c = Op.get(e);
      if (c !== void 0) {
        var g = vu,
          w = e;
        switch (e) {
          case "keypress":
            if (Wi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Fg;
            break;
          case "focusin":
            (w = "focus"), (g = xl);
            break;
          case "focusout":
            (w = "blur"), (g = xl);
            break;
          case "beforeblur":
          case "afterblur":
            g = xl;
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
            g = Fc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Rg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Bg;
            break;
          case Rp:
          case _p:
          case bp:
            g = Ng;
            break;
          case Np:
            g = Wg;
            break;
          case "scroll":
            g = Pg;
            break;
          case "wheel":
            g = Qg;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Ag;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Uc;
        }
        var v = (t & 4) !== 0,
          x = !v && e === "scroll",
          p = v ? (c !== null ? c + "Capture" : null) : c;
        v = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var E = m.stateNode;
          if (
            (m.tag === 5 &&
              E !== null &&
              ((m = E),
              p !== null && ((E = Mo(h, p)), E != null && v.push(Uo(h, E, m)))),
            x)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((c = new g(c, w, null, n, f)), d.push({ event: c, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          c &&
            n !== oa &&
            (w = n.relatedTarget || n.fromElement) &&
            (Vn(w) || w[Yt]))
        )
          break e;
        if (
          (g || c) &&
          ((c =
            f.window === f
              ? f
              : (c = f.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = u),
              (w = w ? Vn(w) : null),
              w !== null &&
                ((x = sr(w)), w !== x || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = u)),
          g !== w)
        ) {
          if (
            ((v = Fc),
            (E = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Uc),
              (E = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (x = g == null ? c : xr(g)),
            (m = w == null ? c : xr(w)),
            (c = new v(E, h + "leave", g, n, f)),
            (c.target = x),
            (c.relatedTarget = m),
            (E = null),
            Vn(f) === u &&
              ((v = new v(p, h + "enter", w, n, f)),
              (v.target = m),
              (v.relatedTarget = x),
              (E = v)),
            (x = E),
            g && w)
          )
            t: {
              for (v = g, p = w, h = 0, m = v; m; m = hr(m)) h++;
              for (m = 0, E = p; E; E = hr(E)) m++;
              for (; 0 < h - m; ) (v = hr(v)), h--;
              for (; 0 < m - h; ) (p = hr(p)), m--;
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = hr(v)), (p = hr(p));
              }
              v = null;
            }
          else v = null;
          g !== null && Zc(d, c, g, v, !1),
            w !== null && x !== null && Zc(d, x, w, v, !0);
        }
      }
      e: {
        if (
          ((c = u ? xr(u) : window),
          (g = c.nodeName && c.nodeName.toLowerCase()),
          g === "select" || (g === "input" && c.type === "file"))
        )
          var C = Jg;
        else if (Wc(c))
          if (Sp) C = ry;
          else {
            C = ty;
            var P = ey;
          }
        else
          (g = c.nodeName) &&
            g.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (C = ny);
        if (C && (C = C(e, u))) {
          Ep(d, C, n, f);
          break e;
        }
        P && P(e, c, u),
          e === "focusout" &&
            (P = c._wrapperState) &&
            P.controlled &&
            c.type === "number" &&
            Jl(c, "number", c.value);
      }
      switch (((P = u ? xr(u) : window), e)) {
        case "focusin":
          (Wc(P) || P.contentEditable === "true") &&
            ((yr = P), (da = u), (To = null));
          break;
        case "focusout":
          To = da = yr = null;
          break;
        case "mousedown":
          fa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fa = !1), Gc(d, n, f);
          break;
        case "selectionchange":
          if (sy) break;
        case "keydown":
        case "keyup":
          Gc(d, n, f);
      }
      var R;
      if (yu)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        gr
          ? wp(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (yp &&
          n.locale !== "ko" &&
          (gr || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && gr && (R = gp())
            : ((wn = f),
              (mu = "value" in wn ? wn.value : wn.textContent),
              (gr = !0))),
        (P = as(u, N)),
        0 < P.length &&
          ((N = new $c(N, e, null, n, f)),
          d.push({ event: N, listeners: P }),
          R ? (N.data = R) : ((R = xp(n)), R !== null && (N.data = R)))),
        (R = Yg ? Gg(e, n) : Xg(e, n)) &&
          ((u = as(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new $c("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: u }),
            (f.data = R)));
    }
    Ap(d, t);
  });
}
function Uo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function as(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Mo(e, n)),
      i != null && r.unshift(Uo(e, i, o)),
      (i = Mo(e, t)),
      i != null && r.push(Uo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function hr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zc(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = Mo(n, i)), a != null && s.unshift(Uo(n, a, l)))
        : o || ((a = Mo(n, i)), a != null && s.push(Uo(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var cy = /\r\n?/g,
  dy = /\u0000|\uFFFD/g;
function Jc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      cy,
      `
`
    )
    .replace(dy, "");
}
function _i(e, t, n) {
  if (((t = Jc(t)), Jc(e) !== t && n)) throw Error(O(425));
}
function us() {}
var pa = null,
  ha = null;
function ma(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var va = typeof setTimeout == "function" ? setTimeout : void 0,
  fy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ed = typeof Promise == "function" ? Promise : void 0,
  py =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ed != "undefined"
      ? function (e) {
          return ed.resolve(null).then(e).catch(hy);
        }
      : va;
function hy(e) {
  setTimeout(function () {
    throw e;
  });
}
function _l(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), jo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  jo(t);
}
function Pn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function td(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var to = Math.random().toString(36).slice(2),
  Mt = "__reactFiber$" + to,
  Bo = "__reactProps$" + to,
  Yt = "__reactContainer$" + to,
  ga = "__reactEvents$" + to,
  my = "__reactListeners$" + to,
  vy = "__reactHandles$" + to;
function Vn(e) {
  var t = e[Mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Yt] || n[Mt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = td(e); e !== null; ) {
          if ((n = e[Mt])) return n;
          e = td(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function si(e) {
  return (
    (e = e[Mt] || e[Yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function xr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function zs(e) {
  return e[Bo] || null;
}
var ya = [],
  Er = -1;
function zn(e) {
  return { current: e };
}
function ue(e) {
  0 > Er || ((e.current = ya[Er]), (ya[Er] = null), Er--);
}
function oe(e, t) {
  Er++, (ya[Er] = e.current), (e.current = t);
}
var An = {},
  Me = zn(An),
  He = zn(!1),
  Zn = An;
function Hr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return An;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Qe(e) {
  return (e = e.childContextTypes), e != null;
}
function cs() {
  ue(He), ue(Me);
}
function nd(e, t, n) {
  if (Me.current !== An) throw Error(O(168));
  oe(Me, t), oe(He, n);
}
function Mp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(O(108, eg(e) || "Unknown", o));
  return pe({}, n, r);
}
function ds(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || An),
    (Zn = Me.current),
    oe(Me, e),
    oe(He, He.current),
    !0
  );
}
function rd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = Mp(e, t, Zn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(He),
      ue(Me),
      oe(Me, e))
    : ue(He),
    oe(He, n);
}
var Vt = null,
  Fs = !1,
  bl = !1;
function Ip(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
function gy(e) {
  (Fs = !0), Ip(e);
}
function Fn() {
  if (!bl && Vt !== null) {
    bl = !0;
    var e = 0,
      t = ne;
    try {
      var n = Vt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Vt = null), (Fs = !1);
    } catch (o) {
      throw (Vt !== null && (Vt = Vt.slice(e + 1)), sp(du, Fn), o);
    } finally {
      (ne = t), (bl = !1);
    }
  }
  return null;
}
var Sr = [],
  Cr = 0,
  fs = null,
  ps = 0,
  lt = [],
  at = 0,
  Jn = null,
  Wt = 1,
  Ht = "";
function Un(e, t) {
  (Sr[Cr++] = ps), (Sr[Cr++] = fs), (fs = e), (ps = t);
}
function Dp(e, t, n) {
  (lt[at++] = Wt), (lt[at++] = Ht), (lt[at++] = Jn), (Jn = e);
  var r = Wt;
  e = Ht;
  var o = 32 - xt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - xt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Wt = (1 << (32 - xt(t) + o)) | (n << o) | r),
      (Ht = i + e);
  } else (Wt = (1 << i) | (n << o) | r), (Ht = e);
}
function xu(e) {
  e.return !== null && (Un(e, 1), Dp(e, 1, 0));
}
function Eu(e) {
  for (; e === fs; )
    (fs = Sr[--Cr]), (Sr[Cr] = null), (ps = Sr[--Cr]), (Sr[Cr] = null);
  for (; e === Jn; )
    (Jn = lt[--at]),
      (lt[at] = null),
      (Ht = lt[--at]),
      (lt[at] = null),
      (Wt = lt[--at]),
      (lt[at] = null);
}
var et = null,
  Je = null,
  ce = !1,
  wt = null;
function jp(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function od(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (et = e), (Je = Pn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (et = e), (Je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Jn !== null ? { id: Wt, overflow: Ht } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (et = e),
            (Je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xa(e) {
  if (ce) {
    var t = Je;
    if (t) {
      var n = t;
      if (!od(e, t)) {
        if (wa(e)) throw Error(O(418));
        t = Pn(n.nextSibling);
        var r = et;
        t && od(e, t)
          ? jp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (et = e));
      }
    } else {
      if (wa(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (ce = !1), (et = e);
    }
  }
}
function id(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  et = e;
}
function bi(e) {
  if (e !== et) return !1;
  if (!ce) return id(e), (ce = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ma(e.type, e.memoizedProps))),
    t && (t = Je))
  ) {
    if (wa(e)) throw (zp(), Error(O(418)));
    for (; t; ) jp(e, t), (t = Pn(t.nextSibling));
  }
  if ((id(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Je = Pn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = et ? Pn(e.stateNode.nextSibling) : null;
  return !0;
}
function zp() {
  for (var e = Je; e; ) e = Pn(e.nextSibling);
}
function Qr() {
  (Je = et = null), (ce = !1);
}
function Su(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
var yy = Jt.ReactCurrentBatchConfig;
function po(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function Ni(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function sd(e) {
  var t = e._init;
  return t(e._payload);
}
function Fp(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function o(p, h) {
    return (p = bn(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, h, m, E) {
    return h === null || h.tag !== 6
      ? ((h = Dl(m, p.mode, E)), (h.return = p), h)
      : ((h = o(h, m)), (h.return = p), h);
  }
  function a(p, h, m, E) {
    var C = m.type;
    return C === vr
      ? f(p, h, m.props.children, E, m.key)
      : h !== null &&
        (h.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === cn &&
            sd(C) === h.type))
      ? ((E = o(h, m.props)), (E.ref = po(p, h, m)), (E.return = p), E)
      : ((E = qi(m.type, m.key, m.props, null, p.mode, E)),
        (E.ref = po(p, h, m)),
        (E.return = p),
        E);
  }
  function u(p, h, m, E) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = jl(m, p.mode, E)), (h.return = p), h)
      : ((h = o(h, m.children || [])), (h.return = p), h);
  }
  function f(p, h, m, E, C) {
    return h === null || h.tag !== 7
      ? ((h = qn(m, p.mode, E, C)), (h.return = p), h)
      : ((h = o(h, m)), (h.return = p), h);
  }
  function d(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Dl("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case wi:
          return (
            (m = qi(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = po(p, null, h)),
            (m.return = p),
            m
          );
        case mr:
          return (h = jl(h, p.mode, m)), (h.return = p), h;
        case cn:
          var E = h._init;
          return d(p, E(h._payload), m);
      }
      if (wo(h) || lo(h))
        return (h = qn(h, p.mode, m, null)), (h.return = p), h;
      Ni(p, h);
    }
    return null;
  }
  function c(p, h, m, E) {
    var C = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return C !== null ? null : l(p, h, "" + m, E);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case wi:
          return m.key === C ? a(p, h, m, E) : null;
        case mr:
          return m.key === C ? u(p, h, m, E) : null;
        case cn:
          return (C = m._init), c(p, h, C(m._payload), E);
      }
      if (wo(m) || lo(m)) return C !== null ? null : f(p, h, m, E, null);
      Ni(p, m);
    }
    return null;
  }
  function g(p, h, m, E, C) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (p = p.get(m) || null), l(h, p, "" + E, C);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case wi:
          return (p = p.get(E.key === null ? m : E.key) || null), a(h, p, E, C);
        case mr:
          return (p = p.get(E.key === null ? m : E.key) || null), u(h, p, E, C);
        case cn:
          var P = E._init;
          return g(p, h, m, P(E._payload), C);
      }
      if (wo(E) || lo(E)) return (p = p.get(m) || null), f(h, p, E, C, null);
      Ni(h, E);
    }
    return null;
  }
  function w(p, h, m, E) {
    for (
      var C = null, P = null, R = h, N = (h = 0), A = null;
      R !== null && N < m.length;
      N++
    ) {
      R.index > N ? ((A = R), (R = null)) : (A = R.sibling);
      var M = c(p, R, m[N], E);
      if (M === null) {
        R === null && (R = A);
        break;
      }
      e && R && M.alternate === null && t(p, R),
        (h = i(M, h, N)),
        P === null ? (C = M) : (P.sibling = M),
        (P = M),
        (R = A);
    }
    if (N === m.length) return n(p, R), ce && Un(p, N), C;
    if (R === null) {
      for (; N < m.length; N++)
        (R = d(p, m[N], E)),
          R !== null &&
            ((h = i(R, h, N)), P === null ? (C = R) : (P.sibling = R), (P = R));
      return ce && Un(p, N), C;
    }
    for (R = r(p, R); N < m.length; N++)
      (A = g(R, p, N, m[N], E)),
        A !== null &&
          (e && A.alternate !== null && R.delete(A.key === null ? N : A.key),
          (h = i(A, h, N)),
          P === null ? (C = A) : (P.sibling = A),
          (P = A));
    return (
      e &&
        R.forEach(function (U) {
          return t(p, U);
        }),
      ce && Un(p, N),
      C
    );
  }
  function v(p, h, m, E) {
    var C = lo(m);
    if (typeof C != "function") throw Error(O(150));
    if (((m = C.call(m)), m == null)) throw Error(O(151));
    for (
      var P = (C = null), R = h, N = (h = 0), A = null, M = m.next();
      R !== null && !M.done;
      N++, M = m.next()
    ) {
      R.index > N ? ((A = R), (R = null)) : (A = R.sibling);
      var U = c(p, R, M.value, E);
      if (U === null) {
        R === null && (R = A);
        break;
      }
      e && R && U.alternate === null && t(p, R),
        (h = i(U, h, N)),
        P === null ? (C = U) : (P.sibling = U),
        (P = U),
        (R = A);
    }
    if (M.done) return n(p, R), ce && Un(p, N), C;
    if (R === null) {
      for (; !M.done; N++, M = m.next())
        (M = d(p, M.value, E)),
          M !== null &&
            ((h = i(M, h, N)), P === null ? (C = M) : (P.sibling = M), (P = M));
      return ce && Un(p, N), C;
    }
    for (R = r(p, R); !M.done; N++, M = m.next())
      (M = g(R, p, N, M.value, E)),
        M !== null &&
          (e && M.alternate !== null && R.delete(M.key === null ? N : M.key),
          (h = i(M, h, N)),
          P === null ? (C = M) : (P.sibling = M),
          (P = M));
    return (
      e &&
        R.forEach(function ($) {
          return t(p, $);
        }),
      ce && Un(p, N),
      C
    );
  }
  function x(p, h, m, E) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === vr &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case wi:
          e: {
            for (var C = m.key, P = h; P !== null; ) {
              if (P.key === C) {
                if (((C = m.type), C === vr)) {
                  if (P.tag === 7) {
                    n(p, P.sibling),
                      (h = o(P, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === cn &&
                    sd(C) === P.type)
                ) {
                  n(p, P.sibling),
                    (h = o(P, m.props)),
                    (h.ref = po(p, P, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            m.type === vr
              ? ((h = qn(m.props.children, p.mode, E, m.key)),
                (h.return = p),
                (p = h))
              : ((E = qi(m.type, m.key, m.props, null, p.mode, E)),
                (E.ref = po(p, h, m)),
                (E.return = p),
                (p = E));
          }
          return s(p);
        case mr:
          e: {
            for (P = m.key; h !== null; ) {
              if (h.key === P)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = o(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = jl(m, p.mode, E)), (h.return = p), (p = h);
          }
          return s(p);
        case cn:
          return (P = m._init), x(p, h, P(m._payload), E);
      }
      if (wo(m)) return w(p, h, m, E);
      if (lo(m)) return v(p, h, m, E);
      Ni(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = o(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = Dl(m, p.mode, E)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return x;
}
var Kr = Fp(!0),
  $p = Fp(!1),
  hs = zn(null),
  ms = null,
  kr = null,
  Cu = null;
function ku() {
  Cu = kr = ms = null;
}
function Pu(e) {
  var t = hs.current;
  ue(hs), (e._currentValue = t);
}
function Ea(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Or(e, t) {
  (ms = e),
    (Cu = kr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (We = !0), (e.firstContext = null));
}
function dt(e) {
  var t = e._currentValue;
  if (Cu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), kr === null)) {
      if (ms === null) throw Error(O(308));
      (kr = e), (ms.dependencies = { lanes: 0, firstContext: e });
    } else kr = kr.next = e;
  return t;
}
var Wn = null;
function Tu(e) {
  Wn === null ? (Wn = [e]) : Wn.push(e);
}
function Up(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Tu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Gt(e, r)
  );
}
function Gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var dn = !1;
function Ru(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Bp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Tn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Gt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Tu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Gt(e, n)
  );
}
function Hi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fu(e, n);
  }
}
function ld(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function vs(e, t, n, r) {
  var o = e.updateQueue;
  dn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== s &&
        (l === null ? (f.firstBaseUpdate = u) : (l.next = u),
        (f.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (f = u = a = null), (l = i);
    do {
      var c = l.lane,
        g = l.eventTime;
      if ((r & c) === c) {
        f !== null &&
          (f = f.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var w = e,
            v = l;
          switch (((c = t), (g = n), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == "function")) {
                d = w.call(g, d, c);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = v.payload),
                (c = typeof w == "function" ? w.call(g, d, c) : w),
                c == null)
              )
                break e;
              d = pe({}, d, c);
              break e;
            case 2:
              dn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (c = o.effects),
          c === null ? (o.effects = [l]) : c.push(l));
      } else
        (g = {
          eventTime: g,
          lane: c,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((u = f = g), (a = d)) : (f = f.next = g),
          (s |= c);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (c = l),
          (l = c.next),
          (c.next = null),
          (o.lastBaseUpdate = c),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (a = d),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (tr |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function ad(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(O(191, o));
        o.call(r);
      }
    }
}
var li = {},
  Dt = zn(li),
  Vo = zn(li),
  Wo = zn(li);
function Hn(e) {
  if (e === li) throw Error(O(174));
  return e;
}
function _u(e, t) {
  switch ((oe(Wo, t), oe(Vo, e), oe(Dt, li), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ta(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ta(t, e));
  }
  ue(Dt), oe(Dt, t);
}
function Yr() {
  ue(Dt), ue(Vo), ue(Wo);
}
function Vp(e) {
  Hn(Wo.current);
  var t = Hn(Dt.current),
    n = ta(t, e.type);
  t !== n && (oe(Vo, e), oe(Dt, n));
}
function bu(e) {
  Vo.current === e && (ue(Dt), ue(Vo));
}
var de = zn(0);
function gs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Nl = [];
function Nu() {
  for (var e = 0; e < Nl.length; e++)
    Nl[e]._workInProgressVersionPrimary = null;
  Nl.length = 0;
}
var Qi = Jt.ReactCurrentDispatcher,
  Ol = Jt.ReactCurrentBatchConfig,
  er = 0,
  fe = null,
  we = null,
  Ce = null,
  ys = !1,
  Ro = !1,
  Ho = 0,
  wy = 0;
function Ne() {
  throw Error(O(321));
}
function Ou(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!St(e[n], t[n])) return !1;
  return !0;
}
function Au(e, t, n, r, o, i) {
  if (
    ((er = i),
    (fe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qi.current = e === null || e.memoizedState === null ? Cy : ky),
    (e = n(r, o)),
    Ro)
  ) {
    i = 0;
    do {
      if (((Ro = !1), (Ho = 0), 25 <= i)) throw Error(O(301));
      (i += 1),
        (Ce = we = null),
        (t.updateQueue = null),
        (Qi.current = Py),
        (e = n(r, o));
    } while (Ro);
  }
  if (
    ((Qi.current = ws),
    (t = we !== null && we.next !== null),
    (er = 0),
    (Ce = we = fe = null),
    (ys = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function Lu() {
  var e = Ho !== 0;
  return (Ho = 0), e;
}
function Nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ce === null ? (fe.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce;
}
function ft() {
  if (we === null) {
    var e = fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = Ce === null ? fe.memoizedState : Ce.next;
  if (t !== null) (Ce = t), (we = e);
  else {
    if (e === null) throw Error(O(310));
    (we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null,
      }),
      Ce === null ? (fe.memoizedState = Ce = e) : (Ce = Ce.next = e);
  }
  return Ce;
}
function Qo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Al(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = we,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var f = u.lane;
      if ((er & f) === f)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = d), (s = r)) : (a = a.next = d),
          (fe.lanes |= f),
          (tr |= f);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      St(r, t.memoizedState) || (We = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (fe.lanes |= i), (tr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ll(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    St(i, t.memoizedState) || (We = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Wp() {}
function Hp(e, t) {
  var n = fe,
    r = ft(),
    o = t(),
    i = !St(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (We = !0)),
    (r = r.queue),
    Mu(Yp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ce !== null && Ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ko(9, Kp.bind(null, n, r, o, t), void 0, null),
      ke === null)
    )
      throw Error(O(349));
    er & 30 || Qp(n, t, o);
  }
  return o;
}
function Qp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Kp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Gp(t) && Xp(e);
}
function Yp(e, t, n) {
  return n(function () {
    Gp(t) && Xp(e);
  });
}
function Gp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch (r) {
    return !0;
  }
}
function Xp(e) {
  var t = Gt(e, 1);
  t !== null && Et(t, e, 1, -1);
}
function ud(e) {
  var t = Nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Sy.bind(null, fe, e)),
    [t.memoizedState, e]
  );
}
function Ko(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function qp() {
  return ft().memoizedState;
}
function Ki(e, t, n, r) {
  var o = Nt();
  (fe.flags |= e),
    (o.memoizedState = Ko(1 | t, n, void 0, r === void 0 ? null : r));
}
function $s(e, t, n, r) {
  var o = ft();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (we !== null) {
    var s = we.memoizedState;
    if (((i = s.destroy), r !== null && Ou(r, s.deps))) {
      o.memoizedState = Ko(t, n, i, r);
      return;
    }
  }
  (fe.flags |= e), (o.memoizedState = Ko(1 | t, n, i, r));
}
function cd(e, t) {
  return Ki(8390656, 8, e, t);
}
function Mu(e, t) {
  return $s(2048, 8, e, t);
}
function Zp(e, t) {
  return $s(4, 2, e, t);
}
function Jp(e, t) {
  return $s(4, 4, e, t);
}
function eh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function th(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), $s(4, 4, eh.bind(null, t, e), n)
  );
}
function Iu() {}
function nh(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ou(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function rh(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ou(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function oh(e, t, n) {
  return er & 21
    ? (St(n, t) || ((n = up()), (fe.lanes |= n), (tr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = n));
}
function xy(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ol.transition;
  Ol.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (Ol.transition = r);
  }
}
function ih() {
  return ft().memoizedState;
}
function Ey(e, t, n) {
  var r = _n(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sh(e))
  )
    lh(t, n);
  else if (((n = Up(e, t, n, r)), n !== null)) {
    var o = ze();
    Et(n, e, r, o), ah(n, t, r);
  }
}
function Sy(e, t, n) {
  var r = _n(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sh(e)) lh(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), St(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Tu(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch (u) {
      } finally {
      }
    (n = Up(e, t, o, r)),
      n !== null && ((o = ze()), Et(n, e, r, o), ah(n, t, r));
  }
}
function sh(e) {
  var t = e.alternate;
  return e === fe || (t !== null && t === fe);
}
function lh(e, t) {
  Ro = ys = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ah(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fu(e, n);
  }
}
var ws = {
    readContext: dt,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  Cy = {
    readContext: dt,
    useCallback: function (e, t) {
      return (Nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: dt,
    useEffect: cd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ki(4194308, 4, eh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ki(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ki(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Nt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Nt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ey.bind(null, fe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ud,
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      return (Nt().memoizedState = e);
    },
    useTransition: function () {
      var e = ud(!1),
        t = e[0];
      return (e = xy.bind(null, e[1])), (Nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = fe,
        o = Nt();
      if (ce) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), ke === null)) throw Error(O(349));
        er & 30 || Qp(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        cd(Yp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ko(9, Kp.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Nt(),
        t = ke.identifierPrefix;
      if (ce) {
        var n = Ht,
          r = Wt;
        (n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ho++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = wy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ky = {
    readContext: dt,
    useCallback: nh,
    useContext: dt,
    useEffect: Mu,
    useImperativeHandle: th,
    useInsertionEffect: Zp,
    useLayoutEffect: Jp,
    useMemo: rh,
    useReducer: Al,
    useRef: qp,
    useState: function () {
      return Al(Qo);
    },
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      var t = ft();
      return oh(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Qo)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Wp,
    useSyncExternalStore: Hp,
    useId: ih,
    unstable_isNewReconciler: !1,
  },
  Py = {
    readContext: dt,
    useCallback: nh,
    useContext: dt,
    useEffect: Mu,
    useImperativeHandle: th,
    useInsertionEffect: Zp,
    useLayoutEffect: Jp,
    useMemo: rh,
    useReducer: Ll,
    useRef: qp,
    useState: function () {
      return Ll(Qo);
    },
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      var t = ft();
      return we === null ? (t.memoizedState = e) : oh(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = Ll(Qo)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Wp,
    useSyncExternalStore: Hp,
    useId: ih,
    unstable_isNewReconciler: !1,
  };
function mt(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Sa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Us = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? sr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      o = _n(e),
      i = Qt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Tn(e, i, o)),
      t !== null && (Et(t, e, o, r), Hi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      o = _n(e),
      i = Qt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Tn(e, i, o)),
      t !== null && (Et(t, e, o, r), Hi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ze(),
      r = _n(e),
      o = Qt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Tn(e, o, r)),
      t !== null && (Et(t, e, r, n), Hi(t, e, r));
  },
};
function dd(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Fo(n, r) || !Fo(o, i)
      : !0
  );
}
function uh(e, t, n) {
  var r = !1,
    o = An,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = dt(i))
      : ((o = Qe(t) ? Zn : Me.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Hr(e, o) : An)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Us),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function fd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Us.enqueueReplaceState(t, t.state, null);
}
function Ca(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ru(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = dt(i))
    : ((i = Qe(t) ? Zn : Me.current), (o.context = Hr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Sa(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Us.enqueueReplaceState(o, o.state, null),
      vs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Jv(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ml(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function ka(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ty = typeof WeakMap == "function" ? WeakMap : Map;
function ch(e, t, n) {
  (n = Qt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Es || ((Es = !0), (Ma = r)), ka(e, t);
    }),
    n
  );
}
function dh(e, t, n) {
  (n = Qt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ka(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ka(e, t),
          typeof r != "function" &&
            (Rn === null ? (Rn = new Set([this])) : Rn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function pd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ty();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = $y.bind(null, e, t, n)), t.then(e, e));
}
function hd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function md(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qt(-1, 1)), (t.tag = 2), Tn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ry = Jt.ReactCurrentOwner,
  We = !1;
function De(e, t, n, r) {
  t.child = e === null ? $p(t, null, n, r) : Kr(t, e.child, n, r);
}
function vd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Or(t, o),
    (r = Au(e, t, n, r, i, o)),
    (n = Lu()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Xt(e, t, o))
      : (ce && n && xu(t), (t.flags |= 1), De(e, t, r, o), t.child)
  );
}
function gd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Vu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), fh(e, t, i, r, o))
      : ((e = qi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Fo), n(s, r) && e.ref === t.ref)
    )
      return Xt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = bn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Fo(i, r) && e.ref === t.ref)
      if (((We = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (We = !0);
      else return (t.lanes = e.lanes), Xt(e, t, o);
  }
  return Pa(e, t, n, r, o);
}
function ph(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(Tr, qe),
        (qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          oe(Tr, qe),
          (qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        oe(Tr, qe),
        (qe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      oe(Tr, qe),
      (qe |= r);
  return De(e, t, o, n), t.child;
}
function hh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Pa(e, t, n, r, o) {
  var i = Qe(n) ? Zn : Me.current;
  return (
    (i = Hr(t, i)),
    Or(t, o),
    (n = Au(e, t, n, r, i, o)),
    (r = Lu()),
    e !== null && !We
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Xt(e, t, o))
      : (ce && r && xu(t), (t.flags |= 1), De(e, t, n, o), t.child)
  );
}
function yd(e, t, n, r, o) {
  if (Qe(n)) {
    var i = !0;
    ds(t);
  } else i = !1;
  if ((Or(t, o), t.stateNode === null))
    Yi(e, t), uh(t, n, r), Ca(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = dt(u))
      : ((u = Qe(n) ? Zn : Me.current), (u = Hr(t, u)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && fd(t, s, r, u)),
      (dn = !1);
    var c = t.memoizedState;
    (s.state = c),
      vs(t, r, s, o),
      (a = t.memoizedState),
      l !== r || c !== a || He.current || dn
        ? (typeof f == "function" && (Sa(t, n, f, r), (a = t.memoizedState)),
          (l = dn || dd(t, n, l, r, c, a, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Bp(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : mt(t.type, l)),
      (s.props = u),
      (d = t.pendingProps),
      (c = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = dt(a))
        : ((a = Qe(n) ? Zn : Me.current), (a = Hr(t, a)));
    var g = n.getDerivedStateFromProps;
    (f =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== d || c !== a) && fd(t, s, r, a)),
      (dn = !1),
      (c = t.memoizedState),
      (s.state = c),
      vs(t, r, s, o);
    var w = t.memoizedState;
    l !== d || c !== w || He.current || dn
      ? (typeof g == "function" && (Sa(t, n, g, r), (w = t.memoizedState)),
        (u = dn || dd(t, n, u, r, c, w, a) || !1)
          ? (f ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, w, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ta(e, t, n, r, i, o);
}
function Ta(e, t, n, r, o, i) {
  hh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && rd(t, n, !1), Xt(e, t, i);
  (r = t.stateNode), (Ry.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Kr(t, e.child, null, i)), (t.child = Kr(t, null, l, i)))
      : De(e, t, l, i),
    (t.memoizedState = r.state),
    o && rd(t, n, !0),
    t.child
  );
}
function mh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? nd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && nd(e, t.context, !1),
    _u(e, t.containerInfo);
}
function wd(e, t, n, r, o) {
  return Qr(), Su(o), (t.flags |= 256), De(e, t, n, r), t.child;
}
var Ra = { dehydrated: null, treeContext: null, retryLane: 0 };
function _a(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vh(e, t, n) {
  var r = t.pendingProps,
    o = de.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    oe(de, o & 1),
    e === null)
  )
    return (
      xa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Ws(s, r, 0, null)),
              (e = qn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = _a(n)),
              (t.memoizedState = Ra),
              e)
            : Du(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return _y(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = bn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = bn(l, i)) : ((i = qn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? _a(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ra),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = bn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Du(e, t) {
  return (
    (t = Ws({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Oi(e, t, n, r) {
  return (
    r !== null && Su(r),
    Kr(t, e.child, null, n),
    (e = Du(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function _y(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ml(Error(O(422)))), Oi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ws({ mode: "visible", children: r.children }, o, 0, null)),
        (i = qn(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Kr(t, e.child, null, s),
        (t.child.memoizedState = _a(s)),
        (t.memoizedState = Ra),
        i);
  if (!(t.mode & 1)) return Oi(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(O(419))), (r = Ml(i, r, void 0)), Oi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), We || l)) {
    if (((r = ke), r !== null)) {
      switch (s & -s) {
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
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Gt(e, o), Et(r, e, o, -1));
    }
    return Bu(), (r = Ml(Error(O(421)))), Oi(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Uy.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Je = Pn(o.nextSibling)),
      (et = t),
      (ce = !0),
      (wt = null),
      e !== null &&
        ((lt[at++] = Wt),
        (lt[at++] = Ht),
        (lt[at++] = Jn),
        (Wt = e.id),
        (Ht = e.overflow),
        (Jn = t)),
      (t = Du(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ea(e.return, t, n);
}
function Il(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function gh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((De(e, t, r.children, n), (r = de.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xd(e, n, t);
        else if (e.tag === 19) xd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((oe(de, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && gs(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Il(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && gs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Il(t, !0, n, null, i);
        break;
      case "together":
        Il(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Yi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (tr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = bn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = bn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function by(e, t, n) {
  switch (t.tag) {
    case 3:
      mh(t), Qr();
      break;
    case 5:
      Vp(t);
      break;
    case 1:
      Qe(t.type) && ds(t);
      break;
    case 4:
      _u(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      oe(hs, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (oe(de, de.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? vh(e, t, n)
          : (oe(de, de.current & 1),
            (e = Xt(e, t, n)),
            e !== null ? e.sibling : null);
      oe(de, de.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return gh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        oe(de, de.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ph(e, t, n);
  }
  return Xt(e, t, n);
}
var yh, ba, wh, xh;
yh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ba = function () {};
wh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Hn(Dt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = ql(e, o)), (r = ql(e, r)), (i = []);
        break;
      case "select":
        (o = pe({}, o, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ea(e, o)), (r = ea(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = us);
    }
    na(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ao.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ao.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && ae("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
xh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ho(e, t) {
  if (!ce)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ny(e, t, n) {
  var r = t.pendingProps;
  switch ((Eu(t), t.tag)) {
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
      return Oe(t), null;
    case 1:
      return Qe(t.type) && cs(), Oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Yr(),
        ue(He),
        ue(Me),
        Nu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (bi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), wt !== null && (ja(wt), (wt = null)))),
        ba(e, t),
        Oe(t),
        null
      );
    case 5:
      bu(t);
      var o = Hn(Wo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        wh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Oe(t), null;
        }
        if (((e = Hn(Dt.current)), bi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Mt] = t), (r[Bo] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ae("cancel", r), ae("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ae("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Eo.length; o++) ae(Eo[o], r);
              break;
            case "source":
              ae("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ae("error", r), ae("load", r);
              break;
            case "details":
              ae("toggle", r);
              break;
            case "input":
              bc(r, i), ae("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ae("invalid", r);
              break;
            case "textarea":
              Oc(r, i), ae("invalid", r);
          }
          na(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      _i(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      _i(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Ao.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  ae("scroll", r);
            }
          switch (n) {
            case "input":
              xi(r), Nc(r, i, !0);
              break;
            case "textarea":
              xi(r), Ac(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = us);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Yf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Mt] = t),
            (e[Bo] = r),
            yh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ra(n, r)), n)) {
              case "dialog":
                ae("cancel", e), ae("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Eo.length; o++) ae(Eo[o], e);
                o = r;
                break;
              case "source":
                ae("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ae("error", e), ae("load", e), (o = r);
                break;
              case "details":
                ae("toggle", e), (o = r);
                break;
              case "input":
                bc(e, r), (o = ql(e, r)), ae("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = pe({}, r, { value: void 0 })),
                  ae("invalid", e);
                break;
              case "textarea":
                Oc(e, r), (o = ea(e, r)), ae("invalid", e);
                break;
              default:
                o = r;
            }
            na(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? qf(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Gf(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Lo(e, a)
                    : typeof a == "number" && Lo(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ao.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && ae("scroll", e)
                      : a != null && su(e, i, a, s));
              }
            switch (n) {
              case "input":
                xi(e), Nc(e, r, !1);
                break;
              case "textarea":
                xi(e), Ac(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + On(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Rr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Rr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = us);
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
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) xh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = Hn(Wo.current)), Hn(Dt.current), bi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Mt] = t),
            (i = r.nodeValue !== n) && ((e = et), e !== null))
          )
            switch (e.tag) {
              case 3:
                _i(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _i(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Mt] = t),
            (t.stateNode = r);
      }
      return Oe(t), null;
    case 13:
      if (
        (ue(de),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ce && Je !== null && t.mode & 1 && !(t.flags & 128))
          zp(), Qr(), (t.flags |= 98560), (i = !1);
        else if (((i = bi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(O(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(O(317));
            i[Mt] = t;
          } else
            Qr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Oe(t), (i = !1);
        } else wt !== null && (ja(wt), (wt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || de.current & 1 ? Ee === 0 && (Ee = 3) : Bu())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null);
    case 4:
      return (
        Yr(), ba(e, t), e === null && $o(t.stateNode.containerInfo), Oe(t), null
      );
    case 10:
      return Pu(t.type._context), Oe(t), null;
    case 17:
      return Qe(t.type) && cs(), Oe(t), null;
    case 19:
      if ((ue(de), (i = t.memoizedState), i === null)) return Oe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) ho(i, !1);
        else {
          if (Ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = gs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ho(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return oe(de, (de.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ve() > Xr &&
            ((t.flags |= 128), (r = !0), ho(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ho(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ce)
            )
              return Oe(t), null;
          } else
            2 * ve() - i.renderingStartTime > Xr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ho(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ve()),
          (t.sibling = null),
          (n = de.current),
          oe(de, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null);
    case 22:
    case 23:
      return (
        Uu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? qe & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function Oy(e, t) {
  switch ((Eu(t), t.tag)) {
    case 1:
      return (
        Qe(t.type) && cs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Yr(),
        ue(He),
        ue(Me),
        Nu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return bu(t), null;
    case 13:
      if (
        (ue(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        Qr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ue(de), null;
    case 4:
      return Yr(), null;
    case 10:
      return Pu(t.type._context), null;
    case 22:
    case 23:
      return Uu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ai = !1,
  Le = !1,
  Ay = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function Pr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function Na(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var Ed = !1;
function Ly(e, t) {
  if (((pa = ss), (e = Pp()), wu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch (E) {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            f = 0,
            d = e,
            c = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (a = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (c = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (c === n && ++u === o && (l = s),
                c === i && ++f === r && (a = s),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = c), (c = d.parentNode);
            }
            d = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ha = { focusedElem: e, selectionRange: n }, ss = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var v = w.memoizedProps,
                    x = w.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : mt(t.type, v),
                      x
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (E) {
          me(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (w = Ed), (Ed = !1), w;
}
function _o(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Na(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Bs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Oa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Eh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Eh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Mt], delete t[Bo], delete t[ga], delete t[my], delete t[vy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Sh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Sd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Aa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = us));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Aa(e, t, n), e = e.sibling; e !== null; ) Aa(e, t, n), (e = e.sibling);
}
function La(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (La(e, t, n), e = e.sibling; e !== null; ) La(e, t, n), (e = e.sibling);
}
var Pe = null,
  yt = !1;
function sn(e, t, n) {
  for (n = n.child; n !== null; ) Ch(e, t, n), (n = n.sibling);
}
function Ch(e, t, n) {
  if (It && typeof It.onCommitFiberUnmount == "function")
    try {
      It.onCommitFiberUnmount(Ms, n);
    } catch (l) {}
  switch (n.tag) {
    case 5:
      Le || Pr(n, t);
    case 6:
      var r = Pe,
        o = yt;
      (Pe = null),
        sn(e, t, n),
        (Pe = r),
        (yt = o),
        Pe !== null &&
          (yt
            ? ((e = Pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null &&
        (yt
          ? ((e = Pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? _l(e.parentNode, n)
              : e.nodeType === 1 && _l(e, n),
            jo(e))
          : _l(Pe, n.stateNode));
      break;
    case 4:
      (r = Pe),
        (o = yt),
        (Pe = n.stateNode.containerInfo),
        (yt = !0),
        sn(e, t, n),
        (Pe = r),
        (yt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Na(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      sn(e, t, n);
      break;
    case 1:
      if (
        !Le &&
        (Pr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          me(n, t, l);
        }
      sn(e, t, n);
      break;
    case 21:
      sn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Le = (r = Le) || n.memoizedState !== null), sn(e, t, n), (Le = r))
        : sn(e, t, n);
      break;
    default:
      sn(e, t, n);
  }
}
function Cd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ay()),
      t.forEach(function (r) {
        var o = By.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ht(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Pe = l.stateNode), (yt = !1);
              break e;
            case 3:
              (Pe = l.stateNode.containerInfo), (yt = !0);
              break e;
            case 4:
              (Pe = l.stateNode.containerInfo), (yt = !0);
              break e;
          }
          l = l.return;
        }
        if (Pe === null) throw Error(O(160));
        Ch(i, s, o), (Pe = null), (yt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        me(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) kh(t, e), (t = t.sibling);
}
function kh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ht(t, e), bt(e), r & 4)) {
        try {
          _o(3, e, e.return), Bs(3, e);
        } catch (v) {
          me(e, e.return, v);
        }
        try {
          _o(5, e, e.return);
        } catch (v) {
          me(e, e.return, v);
        }
      }
      break;
    case 1:
      ht(t, e), bt(e), r & 512 && n !== null && Pr(n, n.return);
      break;
    case 5:
      if (
        (ht(t, e),
        bt(e),
        r & 512 && n !== null && Pr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Lo(o, "");
        } catch (v) {
          me(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Qf(o, i),
              ra(l, s);
            var u = ra(l, i);
            for (s = 0; s < a.length; s += 2) {
              var f = a[s],
                d = a[s + 1];
              f === "style"
                ? qf(o, d)
                : f === "dangerouslySetInnerHTML"
                ? Gf(o, d)
                : f === "children"
                ? Lo(o, d)
                : su(o, f, d, u);
            }
            switch (l) {
              case "input":
                Zl(o, i);
                break;
              case "textarea":
                Kf(o, i);
                break;
              case "select":
                var c = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Rr(o, !!i.multiple, g, !1)
                  : c !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Rr(o, !!i.multiple, i.defaultValue, !0)
                      : Rr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Bo] = i;
          } catch (v) {
            me(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ht(t, e), bt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          me(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (ht(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          jo(t.containerInfo);
        } catch (v) {
          me(e, e.return, v);
        }
      break;
    case 4:
      ht(t, e), bt(e);
      break;
    case 13:
      ht(t, e),
        bt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Fu = ve())),
        r & 4 && Cd(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Le = (u = Le) || f), ht(t, e), (Le = u)) : ht(t, e),
        bt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (F = e, f = e.child; f !== null; ) {
            for (d = F = f; F !== null; ) {
              switch (((c = F), (g = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _o(4, c, c.return);
                  break;
                case 1:
                  Pr(c, c.return);
                  var w = c.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = c), (n = c.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (v) {
                      me(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Pr(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    Pd(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = c), (F = g)) : Pd(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Xf("display", s)));
              } catch (v) {
                me(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                me(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ht(t, e), bt(e), r & 4 && Cd(e);
      break;
    case 21:
      break;
    default:
      ht(t, e), bt(e);
  }
}
function bt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Lo(o, ""), (r.flags &= -33));
          var i = Sd(e);
          La(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Sd(e);
          Aa(e, l, s);
          break;
        default:
          throw Error(O(161));
      }
    } catch (a) {
      me(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function My(e, t, n) {
  (F = e), Ph(e);
}
function Ph(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ai;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Le;
        l = Ai;
        var u = Le;
        if (((Ai = s), (Le = a) && !u))
          for (F = o; F !== null; )
            (s = F),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Td(o)
                : a !== null
                ? ((a.return = s), (F = a))
                : Td(o);
        for (; i !== null; ) (F = i), Ph(i), (i = i.sibling);
        (F = o), (Ai = l), (Le = u);
      }
      kd(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (F = i)) : kd(e);
  }
}
function kd(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Le || Bs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Le)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ad(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ad(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                    var d = f.dehydrated;
                    d !== null && jo(d);
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
              throw Error(O(163));
          }
        Le || (t.flags & 512 && Oa(t));
      } catch (c) {
        me(t, t.return, c);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Pd(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Td(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bs(4, t);
          } catch (a) {
            me(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              me(t, o, a);
            }
          }
          var i = t.return;
          try {
            Oa(t);
          } catch (a) {
            me(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Oa(t);
          } catch (a) {
            me(t, s, a);
          }
      }
    } catch (a) {
      me(t, t.return, a);
    }
    if (t === e) {
      F = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (F = l);
      break;
    }
    F = t.return;
  }
}
var Iy = Math.ceil,
  xs = Jt.ReactCurrentDispatcher,
  ju = Jt.ReactCurrentOwner,
  ct = Jt.ReactCurrentBatchConfig,
  Z = 0,
  ke = null,
  ge = null,
  Te = 0,
  qe = 0,
  Tr = zn(0),
  Ee = 0,
  Yo = null,
  tr = 0,
  Vs = 0,
  zu = 0,
  bo = null,
  Ve = null,
  Fu = 0,
  Xr = 1 / 0,
  Bt = null,
  Es = !1,
  Ma = null,
  Rn = null,
  Li = !1,
  xn = null,
  Ss = 0,
  No = 0,
  Ia = null,
  Gi = -1,
  Xi = 0;
function ze() {
  return Z & 6 ? ve() : Gi !== -1 ? Gi : (Gi = ve());
}
function _n(e) {
  return e.mode & 1
    ? Z & 2 && Te !== 0
      ? Te & -Te
      : yy.transition !== null
      ? (Xi === 0 && (Xi = up()), Xi)
      : ((e = ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vp(e.type))),
        e)
    : 1;
}
function Et(e, t, n, r) {
  if (50 < No) throw ((No = 0), (Ia = null), Error(O(185)));
  oi(e, n, r),
    (!(Z & 2) || e !== ke) &&
      (e === ke && (!(Z & 2) && (Vs |= n), Ee === 4 && pn(e, Te)),
      Ke(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Xr = ve() + 500), Fs && Fn()));
}
function Ke(e, t) {
  var n = e.callbackNode;
  yg(e, t);
  var r = is(e, e === ke ? Te : 0);
  if (r === 0)
    n !== null && Ic(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ic(n), t === 1))
      e.tag === 0 ? gy(Rd.bind(null, e)) : Ip(Rd.bind(null, e)),
        py(function () {
          !(Z & 6) && Fn();
        }),
        (n = null);
    else {
      switch (cp(r)) {
        case 1:
          n = du;
          break;
        case 4:
          n = lp;
          break;
        case 16:
          n = os;
          break;
        case 536870912:
          n = ap;
          break;
        default:
          n = os;
      }
      n = Lh(n, Th.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Th(e, t) {
  if (((Gi = -1), (Xi = 0), Z & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (Ar() && e.callbackNode !== n) return null;
  var r = is(e, e === ke ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cs(e, r);
  else {
    t = r;
    var o = Z;
    Z |= 2;
    var i = _h();
    (ke !== e || Te !== t) && ((Bt = null), (Xr = ve() + 500), Xn(e, t));
    do
      try {
        zy();
        break;
      } catch (l) {
        Rh(e, l);
      }
    while (!0);
    ku(),
      (xs.current = i),
      (Z = o),
      ge !== null ? (t = 0) : ((ke = null), (Te = 0), (t = Ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = aa(e)), o !== 0 && ((r = o), (t = Da(e, o)))), t === 1)
    )
      throw ((n = Yo), Xn(e, 0), pn(e, r), Ke(e, ve()), n);
    if (t === 6) pn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Dy(o) &&
          ((t = Cs(e, r)),
          t === 2 && ((i = aa(e)), i !== 0 && ((r = i), (t = Da(e, i)))),
          t === 1))
      )
        throw ((n = Yo), Xn(e, 0), pn(e, r), Ke(e, ve()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          Bn(e, Ve, Bt);
          break;
        case 3:
          if (
            (pn(e, r), (r & 130023424) === r && ((t = Fu + 500 - ve()), 10 < t))
          ) {
            if (is(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ze(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = va(Bn.bind(null, e, Ve, Bt), t);
            break;
          }
          Bn(e, Ve, Bt);
          break;
        case 4:
          if ((pn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - xt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ve() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Iy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = va(Bn.bind(null, e, Ve, Bt), r);
            break;
          }
          Bn(e, Ve, Bt);
          break;
        case 5:
          Bn(e, Ve, Bt);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Ke(e, ve()), e.callbackNode === n ? Th.bind(null, e) : null;
}
function Da(e, t) {
  var n = bo;
  return (
    e.current.memoizedState.isDehydrated && (Xn(e, t).flags |= 256),
    (e = Cs(e, t)),
    e !== 2 && ((t = Ve), (Ve = n), t !== null && ja(t)),
    e
  );
}
function ja(e) {
  Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
}
function Dy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!St(i(), o)) return !1;
          } catch (s) {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function pn(e, t) {
  for (
    t &= ~zu,
      t &= ~Vs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - xt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Rd(e) {
  if (Z & 6) throw Error(O(327));
  Ar();
  var t = is(e, 0);
  if (!(t & 1)) return Ke(e, ve()), null;
  var n = Cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = aa(e);
    r !== 0 && ((t = r), (n = Da(e, r)));
  }
  if (n === 1) throw ((n = Yo), Xn(e, 0), pn(e, t), Ke(e, ve()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Bn(e, Ve, Bt),
    Ke(e, ve()),
    null
  );
}
function $u(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((Xr = ve() + 500), Fs && Fn());
  }
}
function nr(e) {
  xn !== null && xn.tag === 0 && !(Z & 6) && Ar();
  var t = Z;
  Z |= 1;
  var n = ct.transition,
    r = ne;
  try {
    if (((ct.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (ct.transition = n), (Z = t), !(Z & 6) && Fn();
  }
}
function Uu() {
  (qe = Tr.current), ue(Tr);
}
function Xn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), fy(n)), ge !== null))
    for (n = ge.return; n !== null; ) {
      var r = n;
      switch ((Eu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && cs();
          break;
        case 3:
          Yr(), ue(He), ue(Me), Nu();
          break;
        case 5:
          bu(r);
          break;
        case 4:
          Yr();
          break;
        case 13:
          ue(de);
          break;
        case 19:
          ue(de);
          break;
        case 10:
          Pu(r.type._context);
          break;
        case 22:
        case 23:
          Uu();
      }
      n = n.return;
    }
  if (
    ((ke = e),
    (ge = e = bn(e.current, null)),
    (Te = qe = t),
    (Ee = 0),
    (Yo = null),
    (zu = Vs = tr = 0),
    (Ve = bo = null),
    Wn !== null)
  ) {
    for (t = 0; t < Wn.length; t++)
      if (((n = Wn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Wn = null;
  }
  return e;
}
function Rh(e, t) {
  do {
    var n = ge;
    try {
      if ((ku(), (Qi.current = ws), ys)) {
        for (var r = fe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ys = !1;
      }
      if (
        ((er = 0),
        (Ce = we = fe = null),
        (Ro = !1),
        (Ho = 0),
        (ju.current = null),
        n === null || n.return === null)
      ) {
        (Ee = 1), (Yo = t), (ge = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = Te),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            f = l,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var c = f.alternate;
            c
              ? ((f.updateQueue = c.updateQueue),
                (f.memoizedState = c.memoizedState),
                (f.lanes = c.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var g = hd(s);
          if (g !== null) {
            (g.flags &= -257),
              md(g, s, l, i, t),
              g.mode & 1 && pd(i, u, t),
              (t = g),
              (a = u);
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              pd(i, u, t), Bu();
              break e;
            }
            a = Error(O(426));
          }
        } else if (ce && l.mode & 1) {
          var x = hd(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              md(x, s, l, i, t),
              Su(Gr(a, l));
            break e;
          }
        }
        (i = a = Gr(a, l)),
          Ee !== 4 && (Ee = 2),
          bo === null ? (bo = [i]) : bo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = ch(i, a, t);
              ld(i, p);
              break e;
            case 1:
              l = a;
              var h = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Rn === null || !Rn.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = dh(i, l, t);
                ld(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Nh(n);
    } catch (C) {
      (t = C), ge === n && n !== null && (ge = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function _h() {
  var e = xs.current;
  return (xs.current = ws), e === null ? ws : e;
}
function Bu() {
  (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
    ke === null || (!(tr & 268435455) && !(Vs & 268435455)) || pn(ke, Te);
}
function Cs(e, t) {
  var n = Z;
  Z |= 2;
  var r = _h();
  (ke !== e || Te !== t) && ((Bt = null), Xn(e, t));
  do
    try {
      jy();
      break;
    } catch (o) {
      Rh(e, o);
    }
  while (!0);
  if ((ku(), (Z = n), (xs.current = r), ge !== null)) throw Error(O(261));
  return (ke = null), (Te = 0), Ee;
}
function jy() {
  for (; ge !== null; ) bh(ge);
}
function zy() {
  for (; ge !== null && !ug(); ) bh(ge);
}
function bh(e) {
  var t = Ah(e.alternate, e, qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Nh(e) : (ge = t),
    (ju.current = null);
}
function Nh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Oy(n, t)), n !== null)) {
        (n.flags &= 32767), (ge = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ee = 6), (ge = null);
        return;
      }
    } else if (((n = Ny(n, t, qe)), n !== null)) {
      ge = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  Ee === 0 && (Ee = 5);
}
function Bn(e, t, n) {
  var r = ne,
    o = ct.transition;
  try {
    (ct.transition = null), (ne = 1), Fy(e, t, n, r);
  } finally {
    (ct.transition = o), (ne = r);
  }
  return null;
}
function Fy(e, t, n, r) {
  do Ar();
  while (xn !== null);
  if (Z & 6) throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (wg(e, i),
    e === ke && ((ge = ke = null), (Te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Li ||
      ((Li = !0),
      Lh(os, function () {
        return Ar(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ct.transition), (ct.transition = null);
    var s = ne;
    ne = 1;
    var l = Z;
    (Z |= 4),
      (ju.current = null),
      Ly(e, n),
      kh(n, e),
      iy(ha),
      (ss = !!pa),
      (ha = pa = null),
      (e.current = n),
      My(n),
      cg(),
      (Z = l),
      (ne = s),
      (ct.transition = i);
  } else e.current = n;
  if (
    (Li && ((Li = !1), (xn = e), (Ss = o)),
    (i = e.pendingLanes),
    i === 0 && (Rn = null),
    pg(n.stateNode),
    Ke(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Es) throw ((Es = !1), (e = Ma), (Ma = null), e);
  return (
    Ss & 1 && e.tag !== 0 && Ar(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ia ? No++ : ((No = 0), (Ia = e))) : (No = 0),
    Fn(),
    null
  );
}
function Ar() {
  if (xn !== null) {
    var e = cp(Ss),
      t = ct.transition,
      n = ne;
    try {
      if (((ct.transition = null), (ne = 16 > e ? 16 : e), xn === null))
        var r = !1;
      else {
        if (((e = xn), (xn = null), (Ss = 0), Z & 6)) throw Error(O(331));
        var o = Z;
        for (Z |= 4, F = e.current; F !== null; ) {
          var i = F,
            s = i.child;
          if (F.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (F = u; F !== null; ) {
                  var f = F;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _o(8, f, i);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (F = d);
                  else
                    for (; F !== null; ) {
                      f = F;
                      var c = f.sibling,
                        g = f.return;
                      if ((Eh(f), f === u)) {
                        F = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = g), (F = c);
                        break;
                      }
                      F = g;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (F = s);
          else
            e: for (; F !== null; ) {
              if (((i = F), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _o(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (F = p);
                break e;
              }
              F = i.return;
            }
        }
        var h = e.current;
        for (F = h; F !== null; ) {
          s = F;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (F = m);
          else
            e: for (s = h; F !== null; ) {
              if (((l = F), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bs(9, l);
                  }
                } catch (C) {
                  me(l, l.return, C);
                }
              if (l === s) {
                F = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                (E.return = l.return), (F = E);
                break e;
              }
              F = l.return;
            }
        }
        if (
          ((Z = o), Fn(), It && typeof It.onPostCommitFiberRoot == "function")
        )
          try {
            It.onPostCommitFiberRoot(Ms, e);
          } catch (C) {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (ct.transition = t);
    }
  }
  return !1;
}
function _d(e, t, n) {
  (t = Gr(n, t)),
    (t = ch(e, t, 1)),
    (e = Tn(e, t, 1)),
    (t = ze()),
    e !== null && (oi(e, 1, t), Ke(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) _d(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _d(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Rn === null || !Rn.has(r)))
        ) {
          (e = Gr(n, e)),
            (e = dh(t, e, 1)),
            (t = Tn(t, e, 1)),
            (e = ze()),
            t !== null && (oi(t, 1, e), Ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $y(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (Te & n) === n &&
      (Ee === 4 || (Ee === 3 && (Te & 130023424) === Te && 500 > ve() - Fu)
        ? Xn(e, 0)
        : (zu |= n)),
    Ke(e, t);
}
function Oh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ci), (Ci <<= 1), !(Ci & 130023424) && (Ci = 4194304))
      : (t = 1));
  var n = ze();
  (e = Gt(e, t)), e !== null && (oi(e, t, n), Ke(e, n));
}
function Uy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Oh(e, n);
}
function By(e, t) {
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
      throw Error(O(314));
  }
  r !== null && r.delete(t), Oh(e, n);
}
var Ah;
Ah = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || He.current) We = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (We = !1), by(e, t, n);
      We = !!(e.flags & 131072);
    }
  else (We = !1), ce && t.flags & 1048576 && Dp(t, ps, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Yi(e, t), (e = t.pendingProps);
      var o = Hr(t, Me.current);
      Or(t, n), (o = Au(null, t, r, e, o, n));
      var i = Lu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Qe(r) ? ((i = !0), ds(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ru(t),
            (o.updater = Us),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ca(t, r, e, n),
            (t = Ta(null, t, r, !0, i, n)))
          : ((t.tag = 0), ce && i && xu(t), De(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Yi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Wy(r)),
          (e = mt(r, e)),
          o)
        ) {
          case 0:
            t = Pa(null, t, r, e, n);
            break e;
          case 1:
            t = yd(null, t, r, e, n);
            break e;
          case 11:
            t = vd(null, t, r, e, n);
            break e;
          case 14:
            t = gd(null, t, r, mt(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        Pa(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        yd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((mh(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Bp(e, t),
          vs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Gr(Error(O(423)), t)), (t = wd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Gr(Error(O(424)), t)), (t = wd(e, t, r, n, o));
            break e;
          } else
            for (
              Je = Pn(t.stateNode.containerInfo.firstChild),
                et = t,
                ce = !0,
                wt = null,
                n = $p(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qr(), r === o)) {
            t = Xt(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Vp(t),
        e === null && xa(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        ma(r, o) ? (s = null) : i !== null && ma(r, i) && (t.flags |= 32),
        hh(e, t),
        De(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && xa(t), null;
    case 13:
      return vh(e, t, n);
    case 4:
      return (
        _u(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Kr(t, null, r, n)) : De(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        vd(e, t, r, o, n)
      );
    case 7:
      return De(e, t, t.pendingProps, n), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          oe(hs, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (St(i.value, s)) {
            if (i.children === o.children && !He.current) {
              t = Xt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Qt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (a.next = a)
                          : ((a.next = f.next), (f.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Ea(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(O(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Ea(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        De(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Or(t, n),
        (o = dt(o)),
        (r = r(o)),
        (t.flags |= 1),
        De(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = mt(r, t.pendingProps)),
        (o = mt(r.type, o)),
        gd(e, t, r, o, n)
      );
    case 15:
      return fh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        Yi(e, t),
        (t.tag = 1),
        Qe(r) ? ((e = !0), ds(t)) : (e = !1),
        Or(t, n),
        uh(t, r, o),
        Ca(t, r, o, n),
        Ta(null, t, r, !0, e, n)
      );
    case 19:
      return gh(e, t, n);
    case 22:
      return ph(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Lh(e, t) {
  return sp(e, t);
}
function Vy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ut(e, t, n, r) {
  return new Vy(e, t, n, r);
}
function Vu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Wy(e) {
  if (typeof e == "function") return Vu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === au)) return 11;
    if (e === uu) return 14;
  }
  return 2;
}
function bn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function qi(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Vu(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case vr:
        return qn(n.children, o, i, t);
      case lu:
        (s = 8), (o |= 8);
        break;
      case Kl:
        return (
          (e = ut(12, n, t, o | 2)), (e.elementType = Kl), (e.lanes = i), e
        );
      case Yl:
        return (e = ut(13, n, t, o)), (e.elementType = Yl), (e.lanes = i), e;
      case Gl:
        return (e = ut(19, n, t, o)), (e.elementType = Gl), (e.lanes = i), e;
      case Vf:
        return Ws(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Uf:
              s = 10;
              break e;
            case Bf:
              s = 9;
              break e;
            case au:
              s = 11;
              break e;
            case uu:
              s = 14;
              break e;
            case cn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ut(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function qn(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function Ws(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = Vf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Dl(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function jl(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Hy(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = gl(0)),
    (this.expirationTimes = gl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = gl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Wu(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new Hy(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ut(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ru(i),
    e
  );
}
function Qy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: mr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Mh(e) {
  if (!e) return An;
  e = e._reactInternals;
  e: {
    if (sr(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Qe(n)) return Mp(e, n, t);
  }
  return t;
}
function Ih(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Wu(n, r, !0, e, o, i, s, l, a)),
    (e.context = Mh(null)),
    (n = e.current),
    (r = ze()),
    (o = _n(n)),
    (i = Qt(r, o)),
    (i.callback = t != null ? t : null),
    Tn(n, i, o),
    (e.current.lanes = o),
    oi(e, o, r),
    Ke(e, r),
    e
  );
}
function Hs(e, t, n, r) {
  var o = t.current,
    i = ze(),
    s = _n(o);
  return (
    (n = Mh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Tn(o, t, s)),
    e !== null && (Et(e, o, s, i), Hi(e, o, s)),
    s
  );
}
function ks(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hu(e, t) {
  bd(e, t), (e = e.alternate) && bd(e, t);
}
function Ky() {
  return null;
}
var Dh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Qu(e) {
  this._internalRoot = e;
}
Qs.prototype.render = Qu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Hs(e, t, null, null);
};
Qs.prototype.unmount = Qu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    nr(function () {
      Hs(null, e, null, null);
    }),
      (t[Yt] = null);
  }
};
function Qs(e) {
  this._internalRoot = e;
}
Qs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = pp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < fn.length && t !== 0 && t < fn[n].priority; n++);
    fn.splice(n, 0, e), n === 0 && mp(e);
  }
};
function Ku(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ks(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Nd() {}
function Yy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = ks(s);
        i.call(u);
      };
    }
    var s = Ih(t, r, e, 0, null, !1, !1, "", Nd);
    return (
      (e._reactRootContainer = s),
      (e[Yt] = s.current),
      $o(e.nodeType === 8 ? e.parentNode : e),
      nr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = ks(a);
      l.call(u);
    };
  }
  var a = Wu(e, 0, !1, null, null, !1, !1, "", Nd);
  return (
    (e._reactRootContainer = a),
    (e[Yt] = a.current),
    $o(e.nodeType === 8 ? e.parentNode : e),
    nr(function () {
      Hs(t, a, n, r);
    }),
    a
  );
}
function Ys(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = ks(s);
        l.call(a);
      };
    }
    Hs(t, s, e, o);
  } else s = Yy(n, t, e, o, r);
  return ks(s);
}
dp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xo(t.pendingLanes);
        n !== 0 &&
          (fu(t, n | 1), Ke(t, ve()), !(Z & 6) && ((Xr = ve() + 500), Fn()));
      }
      break;
    case 13:
      nr(function () {
        var r = Gt(e, 1);
        if (r !== null) {
          var o = ze();
          Et(r, e, 1, o);
        }
      }),
        Hu(e, 1);
  }
};
pu = function (e) {
  if (e.tag === 13) {
    var t = Gt(e, 134217728);
    if (t !== null) {
      var n = ze();
      Et(t, e, 134217728, n);
    }
    Hu(e, 134217728);
  }
};
fp = function (e) {
  if (e.tag === 13) {
    var t = _n(e),
      n = Gt(e, t);
    if (n !== null) {
      var r = ze();
      Et(n, e, t, r);
    }
    Hu(e, t);
  }
};
pp = function () {
  return ne;
};
hp = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
ia = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Zl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = zs(r);
            if (!o) throw Error(O(90));
            Hf(r), Zl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Kf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Rr(e, !!n.multiple, t, !1);
  }
};
ep = $u;
tp = nr;
var Gy = { usingClientEntryPoint: !1, Events: [si, xr, zs, Zf, Jf, $u] },
  mo = {
    findFiberByHostInstance: Vn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Xy = {
    bundleType: mo.bundleType,
    version: mo.version,
    rendererPackageName: mo.rendererPackageName,
    rendererConfig: mo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = op(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: mo.findFiberByHostInstance || Ky,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var Mi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Mi.isDisabled && Mi.supportsFiber)
    try {
      (Ms = Mi.inject(Xy)), (It = Mi);
    } catch (e) {}
}
rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gy;
rt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ku(t)) throw Error(O(200));
  return Qy(e, t, null, n);
};
rt.createRoot = function (e, t) {
  if (!Ku(e)) throw Error(O(299));
  var n = !1,
    r = "",
    o = Dh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Wu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Yt] = t.current),
    $o(e.nodeType === 8 ? e.parentNode : e),
    new Qu(t)
  );
};
rt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = op(t)), (e = e === null ? null : e.stateNode), e;
};
rt.flushSync = function (e) {
  return nr(e);
};
rt.hydrate = function (e, t, n) {
  if (!Ks(t)) throw Error(O(200));
  return Ys(null, e, t, !0, n);
};
rt.hydrateRoot = function (e, t, n) {
  if (!Ku(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Dh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Ih(t, null, e, 1, n != null ? n : null, o, !1, i, s)),
    (e[Yt] = t.current),
    $o(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Qs(t);
};
rt.render = function (e, t, n) {
  if (!Ks(t)) throw Error(O(200));
  return Ys(null, e, t, !1, n);
};
rt.unmountComponentAtNode = function (e) {
  if (!Ks(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (nr(function () {
        Ys(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Yt] = null);
        });
      }),
      !0)
    : !1;
};
rt.unstable_batchedUpdates = $u;
rt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ks(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Ys(e, t, n, !1, r);
};
rt.version = "18.3.1-next-f1338f8080-20240426";
function jh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jh);
    } catch (e) {
      console.error(e);
    }
}
jh(), (jf.exports = rt);
var ai = jf.exports;
const zh = Pf(ai);
var Fh,
  Od = ai;
(Fh = Od.createRoot), Od.hydrateRoot;
const qy = "modulepreload",
  Zy = function (e) {
    return "/tournament-tables-hub1/" + e;
  },
  Ad = {},
  Tt = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const s = document.querySelector("meta[property=csp-nonce]"),
        l =
          (s == null ? void 0 : s.nonce) ||
          (s == null ? void 0 : s.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((a) => {
          if (((a = Zy(a)), a in Ad)) return;
          Ad[a] = !0;
          const u = a.endsWith(".css"),
            f = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${a}"]${f}`)) return;
          const d = document.createElement("link");
          if (
            ((d.rel = u ? "stylesheet" : qy),
            u || (d.as = "script"),
            (d.crossOrigin = ""),
            (d.href = a),
            l && d.setAttribute("nonce", l),
            document.head.appendChild(d),
            u)
          )
            return new Promise((c, g) => {
              d.addEventListener("load", c),
                d.addEventListener("error", () =>
                  g(new Error(`Unable to preload CSS for ${a}`))
                );
            });
        })
      );
    }
    function i(s) {
      const l = new Event("vite:preloadError", { cancelable: !0 });
      if (((l.payload = s), window.dispatchEvent(l), !l.defaultPrevented))
        throw s;
    }
    return o.then((s) => {
      for (const l of s || []) l.status === "rejected" && i(l.reason);
      return t().catch(i);
    });
  },
  Jy = 1,
  e0 = 1e6;
let zl = 0;
function t0() {
  return (zl = (zl + 1) % Number.MAX_SAFE_INTEGER), zl.toString();
}
const Fl = new Map(),
  Ld = (e) => {
    if (Fl.has(e)) return;
    const t = setTimeout(() => {
      Fl.delete(e), Oo({ type: "REMOVE_TOAST", toastId: e });
    }, e0);
    Fl.set(e, t);
  },
  n0 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return b(S({}, e), { toasts: [t.toast, ...e.toasts].slice(0, Jy) });
      case "UPDATE_TOAST":
        return b(S({}, e), {
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? S(S({}, n), t.toast) : n
          ),
        });
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Ld(n)
            : e.toasts.forEach((r) => {
                Ld(r.id);
              }),
          b(S({}, e), {
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? b(S({}, r), { open: !1 }) : r
            ),
          })
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? b(S({}, e), { toasts: [] })
          : b(S({}, e), { toasts: e.toasts.filter((n) => n.id !== t.toastId) });
    }
  },
  Zi = [];
let Ji = { toasts: [] };
function Oo(e) {
  (Ji = n0(Ji, e)),
    Zi.forEach((t) => {
      t(Ji);
    });
}
function r0(t) {
  var e = W(t, []);
  const n = t0(),
    r = (i) => Oo({ type: "UPDATE_TOAST", toast: b(S({}, i), { id: n }) }),
    o = () => Oo({ type: "DISMISS_TOAST", toastId: n });
  return (
    Oo({
      type: "ADD_TOAST",
      toast: b(S({}, e), {
        id: n,
        open: !0,
        onOpenChange: (i) => {
          i || o();
        },
      }),
    }),
    { id: n, dismiss: o, update: r }
  );
}
function o0() {
  const [e, t] = y.useState(Ji);
  return (
    y.useEffect(
      () => (
        Zi.push(t),
        () => {
          const n = Zi.indexOf(t);
          n > -1 && Zi.splice(n, 1);
        }
      ),
      [e]
    ),
    b(S({}, e), {
      toast: r0,
      dismiss: (n) => Oo({ type: "DISMISS_TOAST", toastId: n }),
    })
  );
}
function xe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function i0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function $h(...e) {
  return (t) => e.forEach((n) => i0(n, t));
}
function Ct(...e) {
  return y.useCallback($h(...e), e);
}
function s0(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = y.createContext(s),
      a = n.length;
    n = [...n, s];
    function u(d) {
      const p = d,
        { scope: c, children: g } = p,
        w = W(p, ["scope", "children"]),
        v = (c == null ? void 0 : c[e][a]) || l,
        x = y.useMemo(() => w, Object.values(w));
      return T.jsx(v.Provider, { value: x, children: g });
    }
    function f(d, c) {
      const g = (c == null ? void 0 : c[e][a]) || l,
        w = y.useContext(g);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, f];
  }
  const o = () => {
    const i = n.map((s) => y.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return y.useMemo(
        () => ({ [`__scope${e}`]: b(S({}, l), { [e]: a }) }),
        [l, a]
      );
    };
  };
  return (o.scopeName = e), [r, l0(o, ...t)];
}
function l0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const d = a(i)[`__scope${u}`];
        return S(S({}, l), d);
      }, {});
      return y.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var Ps = y.forwardRef((e, t) => {
  const s = e,
    { children: n } = s,
    r = W(s, ["children"]),
    o = y.Children.toArray(n),
    i = o.find(a0);
  if (i) {
    const l = i.props.children,
      a = o.map((u) =>
        u === i
          ? y.Children.count(l) > 1
            ? y.Children.only(null)
            : y.isValidElement(l)
            ? l.props.children
            : null
          : u
      );
    return T.jsx(
      za,
      b(S({}, r), {
        ref: t,
        children: y.isValidElement(l) ? y.cloneElement(l, void 0, a) : null,
      })
    );
  }
  return T.jsx(za, b(S({}, r), { ref: t, children: n }));
});
Ps.displayName = "Slot";
var za = y.forwardRef((e, t) => {
  const o = e,
    { children: n } = o,
    r = W(o, ["children"]);
  if (y.isValidElement(n)) {
    const i = c0(n);
    return y.cloneElement(
      n,
      b(S({}, u0(r, n.props)), { ref: t ? $h(t, i) : i })
    );
  }
  return y.Children.count(n) > 1 ? y.Children.only(null) : null;
});
za.displayName = "SlotClone";
var Uh = ({ children: e }) => T.jsx(T.Fragment, { children: e });
function a0(e) {
  return y.isValidElement(e) && e.type === Uh;
}
function u0(e, t) {
  const n = S({}, t);
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            i(...l), o(...l);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = S(S({}, o), i))
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return S(S({}, e), n);
}
function c0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function d0(e) {
  const t = e + "CollectionProvider",
    [n, r] = s0(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (g) => {
      const { scope: w, children: v } = g,
        x = L.useRef(null),
        p = L.useRef(new Map()).current;
      return T.jsx(o, { scope: w, itemMap: p, collectionRef: x, children: v });
    };
  s.displayName = t;
  const l = e + "CollectionSlot",
    a = L.forwardRef((g, w) => {
      const { scope: v, children: x } = g,
        p = i(l, v),
        h = Ct(w, p.collectionRef);
      return T.jsx(Ps, { ref: h, children: x });
    });
  a.displayName = l;
  const u = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    d = L.forwardRef((g, w) => {
      const C = g,
        { scope: v, children: x } = C,
        p = W(C, ["scope", "children"]),
        h = L.useRef(null),
        m = Ct(w, h),
        E = i(u, v);
      return (
        L.useEffect(
          () => (
            E.itemMap.set(h, S({ ref: h }, p)), () => void E.itemMap.delete(h)
          )
        ),
        T.jsx(Ps, { [f]: "", ref: m, children: x })
      );
    });
  d.displayName = u;
  function c(g) {
    const w = i(e + "CollectionConsumer", g);
    return L.useCallback(() => {
      const x = w.collectionRef.current;
      if (!x) return [];
      const p = Array.from(x.querySelectorAll(`[${f}]`));
      return Array.from(w.itemMap.values()).sort(
        (E, C) => p.indexOf(E.ref.current) - p.indexOf(C.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: a, ItemSlot: d }, c, r];
}
function Bh(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = y.createContext(s),
      a = n.length;
    n = [...n, s];
    const u = (d) => {
      var h;
      const p = d,
        { scope: c, children: g } = p,
        w = W(p, ["scope", "children"]),
        v = ((h = c == null ? void 0 : c[e]) == null ? void 0 : h[a]) || l,
        x = y.useMemo(() => w, Object.values(w));
      return T.jsx(v.Provider, { value: x, children: g });
    };
    u.displayName = i + "Provider";
    function f(d, c) {
      var v;
      const g = ((v = c == null ? void 0 : c[e]) == null ? void 0 : v[a]) || l,
        w = y.useContext(g);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, f];
  }
  const o = () => {
    const i = n.map((s) => y.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return y.useMemo(
        () => ({ [`__scope${e}`]: b(S({}, l), { [e]: a }) }),
        [l, a]
      );
    };
  };
  return (o.scopeName = e), [r, f0(o, ...t)];
}
function f0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const d = a(i)[`__scope${u}`];
        return S(S({}, l), d);
      }, {});
      return y.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var p0 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Ye = p0.reduce((e, t) => {
    const n = y.forwardRef((r, o) => {
      const a = r,
        { asChild: i } = a,
        s = W(a, ["asChild"]),
        l = i ? Ps : t;
      return (
        typeof window != "undefined" && (window[Symbol.for("radix-ui")] = !0),
        T.jsx(l, b(S({}, s), { ref: o }))
      );
    });
    return (n.displayName = `Primitive.${t}`), b(S({}, e), { [t]: n });
  }, {});
function Vh(e, t) {
  e && ai.flushSync(() => e.dispatchEvent(t));
}
function jt(e) {
  const t = y.useRef(e);
  return (
    y.useEffect(() => {
      t.current = e;
    }),
    y.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function h0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = jt(e);
  y.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var m0 = "DismissableLayer",
  Fa = "dismissableLayer.update",
  v0 = "dismissableLayer.pointerDownOutside",
  g0 = "dismissableLayer.focusOutside",
  Md,
  Wh = y.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Yu = y.forwardRef((e, t) => {
    var N;
    const R = e,
      {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: l,
      } = R,
      a = W(R, [
        "disableOutsidePointerEvents",
        "onEscapeKeyDown",
        "onPointerDownOutside",
        "onFocusOutside",
        "onInteractOutside",
        "onDismiss",
      ]),
      u = y.useContext(Wh),
      [f, d] = y.useState(null),
      c =
        (N = f == null ? void 0 : f.ownerDocument) != null
          ? N
          : globalThis == null
          ? void 0
          : globalThis.document,
      [, g] = y.useState({}),
      w = Ct(t, (A) => d(A)),
      v = Array.from(u.layers),
      [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      p = v.indexOf(x),
      h = f ? v.indexOf(f) : -1,
      m = u.layersWithOutsidePointerEventsDisabled.size > 0,
      E = h >= p,
      C = w0((A) => {
        const M = A.target,
          U = [...u.branches].some(($) => $.contains(M));
        !E ||
          U ||
          (o == null || o(A),
          s == null || s(A),
          A.defaultPrevented || l == null || l());
      }, c),
      P = x0((A) => {
        const M = A.target;
        [...u.branches].some(($) => $.contains(M)) ||
          (i == null || i(A),
          s == null || s(A),
          A.defaultPrevented || l == null || l());
      }, c);
    return (
      h0((A) => {
        h === u.layers.size - 1 &&
          (r == null || r(A),
          !A.defaultPrevented && l && (A.preventDefault(), l()));
      }, c),
      y.useEffect(() => {
        if (f)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Md = c.body.style.pointerEvents),
                (c.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(f)),
            u.layers.add(f),
            Id(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (c.body.style.pointerEvents = Md);
            }
          );
      }, [f, c, n, u]),
      y.useEffect(
        () => () => {
          f &&
            (u.layers.delete(f),
            u.layersWithOutsidePointerEventsDisabled.delete(f),
            Id());
        },
        [f, u]
      ),
      y.useEffect(() => {
        const A = () => g({});
        return (
          document.addEventListener(Fa, A),
          () => document.removeEventListener(Fa, A)
        );
      }, []),
      T.jsx(
        Ye.div,
        b(S({}, a), {
          ref: w,
          style: S(
            { pointerEvents: m ? (E ? "auto" : "none") : void 0 },
            e.style
          ),
          onFocusCapture: xe(e.onFocusCapture, P.onFocusCapture),
          onBlurCapture: xe(e.onBlurCapture, P.onBlurCapture),
          onPointerDownCapture: xe(
            e.onPointerDownCapture,
            C.onPointerDownCapture
          ),
        })
      )
    );
  });
Yu.displayName = m0;
var y0 = "DismissableLayerBranch",
  Hh = y.forwardRef((e, t) => {
    const n = y.useContext(Wh),
      r = y.useRef(null),
      o = Ct(t, r);
    return (
      y.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      T.jsx(Ye.div, b(S({}, e), { ref: o }))
    );
  });
Hh.displayName = y0;
function w0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = jt(e),
    r = y.useRef(!1),
    o = y.useRef(() => {});
  return (
    y.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              Qh(v0, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function x0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = jt(e),
    r = y.useRef(!1);
  return (
    y.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          Qh(g0, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Id() {
  const e = new CustomEvent(Fa);
  document.dispatchEvent(e);
}
function Qh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Vh(o, i) : o.dispatchEvent(i);
}
var E0 = Yu,
  S0 = Hh,
  rr = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {},
  C0 = "Portal",
  Kh = y.forwardRef((e, t) => {
    var a;
    const l = e,
      { container: n } = l,
      r = W(l, ["container"]),
      [o, i] = y.useState(!1);
    rr(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s
      ? zh.createPortal(T.jsx(Ye.div, b(S({}, r), { ref: t })), s)
      : null;
  });
Kh.displayName = C0;
function k0(e, t) {
  return y.useReducer((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
var Gu = (e) => {
  const { present: t, children: n } = e,
    r = P0(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : y.Children.only(n),
    i = Ct(r.ref, T0(o));
  return typeof n == "function" || r.isPresent
    ? y.cloneElement(o, { ref: i })
    : null;
};
Gu.displayName = "Presence";
function P0(e) {
  const [t, n] = y.useState(),
    r = y.useRef({}),
    o = y.useRef(e),
    i = y.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [l, a] = k0(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    y.useEffect(() => {
      const u = Ii(r.current);
      i.current = l === "mounted" ? u : "none";
    }, [l]),
    rr(() => {
      const u = r.current,
        f = o.current;
      if (f !== e) {
        const c = i.current,
          g = Ii(u);
        e
          ? a("MOUNT")
          : g === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(f && c !== g ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    rr(() => {
      var u;
      if (t) {
        let f;
        const d = (u = t.ownerDocument.defaultView) != null ? u : window,
          c = (w) => {
            const x = Ii(r.current).includes(w.animationName);
            if (w.target === t && x && (a("ANIMATION_END"), !o.current)) {
              const p = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (f = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = p);
                }));
            }
          },
          g = (w) => {
            w.target === t && (i.current = Ii(r.current));
          };
        return (
          t.addEventListener("animationstart", g),
          t.addEventListener("animationcancel", c),
          t.addEventListener("animationend", c),
          () => {
            d.clearTimeout(f),
              t.removeEventListener("animationstart", g),
              t.removeEventListener("animationcancel", c),
              t.removeEventListener("animationend", c);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: y.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Ii(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function T0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function R0({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = _0({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    l = jt(n),
    a = y.useCallback(
      (u) => {
        if (i) {
          const d = typeof u == "function" ? u(e) : u;
          d !== e && l(d);
        } else o(u);
      },
      [i, e, o, l]
    );
  return [s, a];
}
function _0({ defaultProp: e, onChange: t }) {
  const n = y.useState(e),
    [r] = n,
    o = y.useRef(r),
    i = jt(t);
  return (
    y.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
var b0 = "VisuallyHidden",
  Gs = y.forwardRef((e, t) =>
    T.jsx(
      Ye.span,
      b(S({}, e), {
        ref: t,
        style: S(
          {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
          },
          e.style
        ),
      })
    )
  );
Gs.displayName = b0;
var N0 = Gs,
  Xu = "ToastProvider",
  [qu, O0, A0] = d0("Toast"),
  [Yh, kS] = Bh("Toast", [A0]),
  [L0, Xs] = Yh(Xu),
  Gh = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [l, a] = y.useState(null),
      [u, f] = y.useState(0),
      d = y.useRef(!1),
      c = y.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Xu}\`. Expected non-empty \`string\`.`
        ),
      T.jsx(qu.Provider, {
        scope: t,
        children: T.jsx(L0, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: y.useCallback(() => f((g) => g + 1), []),
          onToastRemove: y.useCallback(() => f((g) => g - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: c,
          children: s,
        }),
      })
    );
  };
Gh.displayName = Xu;
var Xh = "ToastViewport",
  M0 = ["F8"],
  $a = "toast.viewportPause",
  Ua = "toast.viewportResume",
  qh = y.forwardRef((e, t) => {
    const x = e,
      {
        __scopeToast: n,
        hotkey: r = M0,
        label: o = "Notifications ({hotkey})",
      } = x,
      i = W(x, ["__scopeToast", "hotkey", "label"]),
      s = Xs(Xh, n),
      l = O0(n),
      a = y.useRef(null),
      u = y.useRef(null),
      f = y.useRef(null),
      d = y.useRef(null),
      c = Ct(t, d, s.onViewportChange),
      g = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      w = s.toastCount > 0;
    y.useEffect(() => {
      const p = (h) => {
        var E;
        r.length !== 0 &&
          r.every((C) => h[C] || h.code === C) &&
          ((E = d.current) == null || E.focus());
      };
      return (
        document.addEventListener("keydown", p),
        () => document.removeEventListener("keydown", p)
      );
    }, [r]),
      y.useEffect(() => {
        const p = a.current,
          h = d.current;
        if (w && p && h) {
          const m = () => {
              if (!s.isClosePausedRef.current) {
                const R = new CustomEvent($a);
                h.dispatchEvent(R), (s.isClosePausedRef.current = !0);
              }
            },
            E = () => {
              if (s.isClosePausedRef.current) {
                const R = new CustomEvent(Ua);
                h.dispatchEvent(R), (s.isClosePausedRef.current = !1);
              }
            },
            C = (R) => {
              !p.contains(R.relatedTarget) && E();
            },
            P = () => {
              p.contains(document.activeElement) || E();
            };
          return (
            p.addEventListener("focusin", m),
            p.addEventListener("focusout", C),
            p.addEventListener("pointermove", m),
            p.addEventListener("pointerleave", P),
            window.addEventListener("blur", m),
            window.addEventListener("focus", E),
            () => {
              p.removeEventListener("focusin", m),
                p.removeEventListener("focusout", C),
                p.removeEventListener("pointermove", m),
                p.removeEventListener("pointerleave", P),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", E);
            }
          );
        }
      }, [w, s.isClosePausedRef]);
    const v = y.useCallback(
      ({ tabbingDirection: p }) => {
        const m = l().map((E) => {
          const C = E.ref.current,
            P = [C, ...K0(C)];
          return p === "forwards" ? P : P.reverse();
        });
        return (p === "forwards" ? m.reverse() : m).flat();
      },
      [l]
    );
    return (
      y.useEffect(() => {
        const p = d.current;
        if (p) {
          const h = (m) => {
            var P, R, N;
            const E = m.altKey || m.ctrlKey || m.metaKey;
            if (m.key === "Tab" && !E) {
              const A = document.activeElement,
                M = m.shiftKey;
              if (m.target === p && M) {
                (P = u.current) == null || P.focus();
                return;
              }
              const H = v({ tabbingDirection: M ? "backwards" : "forwards" }),
                J = H.findIndex((z) => z === A);
              $l(H.slice(J + 1))
                ? m.preventDefault()
                : M
                ? (R = u.current) == null || R.focus()
                : (N = f.current) == null || N.focus();
            }
          };
          return (
            p.addEventListener("keydown", h),
            () => p.removeEventListener("keydown", h)
          );
        }
      }, [l, v]),
      T.jsxs(S0, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: w ? void 0 : "none" },
        children: [
          w &&
            T.jsx(Ba, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const p = v({ tabbingDirection: "forwards" });
                $l(p);
              },
            }),
          T.jsx(qu.Slot, {
            scope: n,
            children: T.jsx(Ye.ol, b(S({ tabIndex: -1 }, i), { ref: c })),
          }),
          w &&
            T.jsx(Ba, {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const p = v({ tabbingDirection: "backwards" });
                $l(p);
              },
            }),
        ],
      })
    );
  });
qh.displayName = Xh;
var Zh = "ToastFocusProxy",
  Ba = y.forwardRef((e, t) => {
    const s = e,
      { __scopeToast: n, onFocusFromOutsideViewport: r } = s,
      o = W(s, ["__scopeToast", "onFocusFromOutsideViewport"]),
      i = Xs(Zh, n);
    return T.jsx(
      Gs,
      b(S({ "aria-hidden": !0, tabIndex: 0 }, o), {
        ref: t,
        style: { position: "fixed" },
        onFocus: (l) => {
          var f;
          const a = l.relatedTarget;
          !((f = i.viewport) != null && f.contains(a)) && r();
        },
      })
    );
  });
Ba.displayName = Zh;
var qs = "Toast",
  I0 = "toast.swipeStart",
  D0 = "toast.swipeMove",
  j0 = "toast.swipeCancel",
  z0 = "toast.swipeEnd",
  Jh = y.forwardRef((e, t) => {
    const u = e,
      { forceMount: n, open: r, defaultOpen: o, onOpenChange: i } = u,
      s = W(u, ["forceMount", "open", "defaultOpen", "onOpenChange"]),
      [l = !0, a] = R0({ prop: r, defaultProp: o, onChange: i });
    return T.jsx(Gu, {
      present: n || l,
      children: T.jsx(
        U0,
        b(S({ open: l }, s), {
          ref: t,
          onClose: () => a(!1),
          onPause: jt(e.onPause),
          onResume: jt(e.onResume),
          onSwipeStart: xe(e.onSwipeStart, (f) => {
            f.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: xe(e.onSwipeMove, (f) => {
            const { x: d, y: c } = f.detail.delta;
            f.currentTarget.setAttribute("data-swipe", "move"),
              f.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-x",
                `${d}px`
              ),
              f.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-y",
                `${c}px`
              );
          }),
          onSwipeCancel: xe(e.onSwipeCancel, (f) => {
            f.currentTarget.setAttribute("data-swipe", "cancel"),
              f.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x"
              ),
              f.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y"
              ),
              f.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
              f.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: xe(e.onSwipeEnd, (f) => {
            const { x: d, y: c } = f.detail.delta;
            f.currentTarget.setAttribute("data-swipe", "end"),
              f.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x"
              ),
              f.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y"
              ),
              f.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-x",
                `${d}px`
              ),
              f.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-y",
                `${c}px`
              ),
              a(!1);
          }),
        })
      ),
    });
  });
Jh.displayName = qs;
var [F0, $0] = Yh(qs, { onClose() {} }),
  U0 = y.forwardRef((e, t) => {
    const J = e,
      {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: f,
        onSwipeMove: d,
        onSwipeCancel: c,
        onSwipeEnd: g,
      } = J,
      w = W(J, [
        "__scopeToast",
        "type",
        "duration",
        "open",
        "onClose",
        "onEscapeKeyDown",
        "onPause",
        "onResume",
        "onSwipeStart",
        "onSwipeMove",
        "onSwipeCancel",
        "onSwipeEnd",
      ]),
      v = Xs(qs, n),
      [x, p] = y.useState(null),
      h = Ct(t, (z) => p(z)),
      m = y.useRef(null),
      E = y.useRef(null),
      C = o || v.duration,
      P = y.useRef(0),
      R = y.useRef(C),
      N = y.useRef(0),
      { onToastAdd: A, onToastRemove: M } = v,
      U = jt(() => {
        var B;
        (x == null ? void 0 : x.contains(document.activeElement)) &&
          ((B = v.viewport) == null || B.focus()),
          s();
      }),
      $ = y.useCallback(
        (z) => {
          !z ||
            z === 1 / 0 ||
            (window.clearTimeout(N.current),
            (P.current = new Date().getTime()),
            (N.current = window.setTimeout(U, z)));
        },
        [U]
      );
    y.useEffect(() => {
      const z = v.viewport;
      if (z) {
        const B = () => {
            $(R.current), u == null || u();
          },
          X = () => {
            const k = new Date().getTime() - P.current;
            (R.current = R.current - k),
              window.clearTimeout(N.current),
              a == null || a();
          };
        return (
          z.addEventListener($a, X),
          z.addEventListener(Ua, B),
          () => {
            z.removeEventListener($a, X), z.removeEventListener(Ua, B);
          }
        );
      }
    }, [v.viewport, C, a, u, $]),
      y.useEffect(() => {
        i && !v.isClosePausedRef.current && $(C);
      }, [i, C, v.isClosePausedRef, $]),
      y.useEffect(() => (A(), () => M()), [A, M]);
    const H = y.useMemo(() => (x ? sm(x) : null), [x]);
    return v.viewport
      ? T.jsxs(T.Fragment, {
          children: [
            H &&
              T.jsx(B0, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: H,
              }),
            T.jsx(F0, {
              scope: n,
              onClose: U,
              children: ai.createPortal(
                T.jsx(qu.ItemSlot, {
                  scope: n,
                  children: T.jsx(E0, {
                    asChild: !0,
                    onEscapeKeyDown: xe(l, () => {
                      v.isFocusedToastEscapeKeyDownRef.current || U(),
                        (v.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: T.jsx(
                      Ye.li,
                      b(
                        S(
                          {
                            role: "status",
                            "aria-live": "off",
                            "aria-atomic": !0,
                            tabIndex: 0,
                            "data-state": i ? "open" : "closed",
                            "data-swipe-direction": v.swipeDirection,
                          },
                          w
                        ),
                        {
                          ref: h,
                          style: S(
                            { userSelect: "none", touchAction: "none" },
                            e.style
                          ),
                          onKeyDown: xe(e.onKeyDown, (z) => {
                            z.key === "Escape" &&
                              (l == null || l(z.nativeEvent),
                              z.nativeEvent.defaultPrevented ||
                                ((v.isFocusedToastEscapeKeyDownRef.current =
                                  !0),
                                U()));
                          }),
                          onPointerDown: xe(e.onPointerDown, (z) => {
                            z.button === 0 &&
                              (m.current = { x: z.clientX, y: z.clientY });
                          }),
                          onPointerMove: xe(e.onPointerMove, (z) => {
                            if (!m.current) return;
                            const B = z.clientX - m.current.x,
                              X = z.clientY - m.current.y,
                              k = !!E.current,
                              I = ["left", "right"].includes(v.swipeDirection),
                              j = ["left", "up"].includes(v.swipeDirection)
                                ? Math.min
                                : Math.max,
                              D = I ? j(0, B) : 0,
                              V = I ? 0 : j(0, X),
                              q = z.pointerType === "touch" ? 10 : 2,
                              ie = { x: D, y: V },
                              _e = { originalEvent: z, delta: ie };
                            k
                              ? ((E.current = ie),
                                Di(D0, d, _e, { discrete: !1 }))
                              : Dd(ie, v.swipeDirection, q)
                              ? ((E.current = ie),
                                Di(I0, f, _e, { discrete: !1 }),
                                z.target.setPointerCapture(z.pointerId))
                              : (Math.abs(B) > q || Math.abs(X) > q) &&
                                (m.current = null);
                          }),
                          onPointerUp: xe(e.onPointerUp, (z) => {
                            const B = E.current,
                              X = z.target;
                            if (
                              (X.hasPointerCapture(z.pointerId) &&
                                X.releasePointerCapture(z.pointerId),
                              (E.current = null),
                              (m.current = null),
                              B)
                            ) {
                              const k = z.currentTarget,
                                I = { originalEvent: z, delta: B };
                              Dd(B, v.swipeDirection, v.swipeThreshold)
                                ? Di(z0, g, I, { discrete: !0 })
                                : Di(j0, c, I, { discrete: !0 }),
                                k.addEventListener(
                                  "click",
                                  (j) => j.preventDefault(),
                                  { once: !0 }
                                );
                            }
                          }),
                        }
                      )
                    ),
                  }),
                }),
                v.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  B0 = (e) => {
    const u = e,
      { __scopeToast: t, children: n } = u,
      r = W(u, ["__scopeToast", "children"]),
      o = Xs(qs, t),
      [i, s] = y.useState(!1),
      [l, a] = y.useState(!1);
    return (
      H0(() => s(!0)),
      y.useEffect(() => {
        const f = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(f);
      }, []),
      l
        ? null
        : T.jsx(Kh, {
            asChild: !0,
            children: T.jsx(
              Gs,
              b(S({}, r), {
                children:
                  i && T.jsxs(T.Fragment, { children: [o.label, " ", n] }),
              })
            ),
          })
    );
  },
  V0 = "ToastTitle",
  em = y.forwardRef((e, t) => {
    const o = e,
      { __scopeToast: n } = o,
      r = W(o, ["__scopeToast"]);
    return T.jsx(Ye.div, b(S({}, r), { ref: t }));
  });
em.displayName = V0;
var W0 = "ToastDescription",
  tm = y.forwardRef((e, t) => {
    const o = e,
      { __scopeToast: n } = o,
      r = W(o, ["__scopeToast"]);
    return T.jsx(Ye.div, b(S({}, r), { ref: t }));
  });
tm.displayName = W0;
var nm = "ToastAction",
  rm = y.forwardRef((e, t) => {
    const o = e,
      { altText: n } = o,
      r = W(o, ["altText"]);
    return n.trim()
      ? T.jsx(im, {
          altText: n,
          asChild: !0,
          children: T.jsx(Zu, b(S({}, r), { ref: t })),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${nm}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
rm.displayName = nm;
var om = "ToastClose",
  Zu = y.forwardRef((e, t) => {
    const i = e,
      { __scopeToast: n } = i,
      r = W(i, ["__scopeToast"]),
      o = $0(om, n);
    return T.jsx(im, {
      asChild: !0,
      children: T.jsx(
        Ye.button,
        b(S({ type: "button" }, r), {
          ref: t,
          onClick: xe(e.onClick, o.onClose),
        })
      ),
    });
  });
Zu.displayName = om;
var im = y.forwardRef((e, t) => {
  const i = e,
    { __scopeToast: n, altText: r } = i,
    o = W(i, ["__scopeToast", "altText"]);
  return T.jsx(
    Ye.div,
    b(
      S(
        {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": r || void 0,
        },
        o
      ),
      { ref: t }
    )
  );
});
function sm(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Q0(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...sm(r));
      }
    }),
    t
  );
}
function Di(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Vh(o, i) : o.dispatchEvent(i);
}
var Dd = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function H0(e = () => {}) {
  const t = jt(e);
  rr(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function Q0(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function K0(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function $l(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var Y0 = Gh,
  lm = qh,
  am = Jh,
  um = em,
  cm = tm,
  dm = rm,
  fm = Zu;
function pm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = pm(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function hm() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = pm(e)) && (r && (r += " "), (r += t));
  return r;
}
const jd = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  zd = hm,
  G0 = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return zd(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const f = n == null ? void 0 : n[u],
          d = i == null ? void 0 : i[u];
        if (f === null) return null;
        const c = jd(f) || jd(d);
        return o[u][c];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, f) => {
          let [d, c] = f;
          return c === void 0 || (u[d] = c), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, f) => {
              let w = f,
                { class: d, className: c } = w,
                g = W(w, ["class", "className"]);
              return Object.entries(g).every((v) => {
                let [x, p] = v;
                return Array.isArray(p)
                  ? p.includes(S(S({}, i), l)[x])
                  : S(S({}, i), l)[x] === p;
              })
                ? [...u, d, c]
                : u;
            }, []);
    return zd(
      e,
      s,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  mm = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var q0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z0 = y.forwardRef((u, a) => {
  var f = u,
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
    } = f,
    l = W(f, [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode",
    ]);
  return y.createElement(
    "svg",
    S(
      b(S({ ref: a }, q0), {
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: mm("lucide", o),
      }),
      l
    ),
    [
      ...s.map(([d, c]) => y.createElement(d, c)),
      ...(Array.isArray(i) ? i : [i]),
    ]
  );
});
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J0 = (e, t) => {
  const n = y.forwardRef((s, i) => {
    var l = s,
      { className: r } = l,
      o = W(l, ["className"]);
    return y.createElement(
      Z0,
      S({ ref: i, iconNode: t, className: mm(`lucide-${X0(e)}`, r) }, o)
    );
  });
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ew = J0("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Ju = "-",
  tw = (e) => {
    const t = rw(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(Ju);
        return l[0] === "" && l.length !== 1 && l.shift(), vm(l, t) || nw(s);
      },
      getConflictingClassGroupIds: (s, l) => {
        const a = n[s] || [];
        return l && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  vm = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? vm(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Ju);
    return (s = t.validators.find(({ validator: l }) => l(i))) == null
      ? void 0
      : s.classGroupId;
  },
  Fd = /^\[(.+)\]$/,
  nw = (e) => {
    if (Fd.test(e)) {
      const t = Fd.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  rw = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      iw(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        Va(s, r, i, t);
      }),
      r
    );
  },
  Va = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : $d(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (ow(o)) {
          Va(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        Va(s, $d(t, i), n, r);
      });
    });
  },
  $d = (e, t) => {
    let n = e;
    return (
      t.split(Ju).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  ow = (e) => e.isThemeGetter,
  iw = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([s, l]) => [t + s, l])
                )
              : i
          );
          return [n, o];
        })
      : e,
  sw = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  gm = "!",
  lw = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (l) => {
        const a = [];
        let u = 0,
          f = 0,
          d;
        for (let x = 0; x < l.length; x++) {
          let p = l[x];
          if (u === 0) {
            if (p === o && (r || l.slice(x, x + i) === t)) {
              a.push(l.slice(f, x)), (f = x + i);
              continue;
            }
            if (p === "/") {
              d = x;
              continue;
            }
          }
          p === "[" ? u++ : p === "]" && u--;
        }
        const c = a.length === 0 ? l : l.substring(f),
          g = c.startsWith(gm),
          w = g ? c.substring(1) : c,
          v = d && d > f ? d - f : void 0;
        return {
          modifiers: a,
          hasImportantModifier: g,
          baseClassName: w,
          maybePostfixModifierPosition: v,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: s }) : s;
  },
  aw = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  uw = (e) => S({ cache: sw(e.cacheSize), parseClassName: lw(e) }, tw(e)),
  cw = /\s+/,
  dw = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(cw);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        {
          modifiers: f,
          hasImportantModifier: d,
          baseClassName: c,
          maybePostfixModifierPosition: g,
        } = n(u);
      let w = !!g,
        v = r(w ? c.substring(0, g) : c);
      if (!v) {
        if (!w) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((v = r(c)), !v)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        w = !1;
      }
      const x = aw(f).join(":"),
        p = d ? x + gm : x,
        h = p + v;
      if (i.includes(h)) continue;
      i.push(h);
      const m = o(v, w);
      for (let E = 0; E < m.length; ++E) {
        const C = m[E];
        i.push(p + C);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function fw() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ym(t)) && (r && (r += " "), (r += n));
  return r;
}
const ym = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ym(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function pw(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(a) {
    const u = t.reduce((f, d) => d(f), e());
    return (n = uw(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const f = dw(a, n);
    return o(a, f), f;
  }
  return function () {
    return i(fw.apply(null, arguments));
  };
}
const le = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  wm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  hw = /^\d+\/\d+$/,
  mw = new Set(["px", "full", "screen"]),
  vw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  gw =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  yw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  ww = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  xw =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  $t = (e) => Lr(e) || mw.has(e) || hw.test(e),
  ln = (e) => no(e, "length", _w),
  Lr = (e) => !!e && !Number.isNaN(Number(e)),
  Ul = (e) => no(e, "number", Lr),
  vo = (e) => !!e && Number.isInteger(Number(e)),
  Ew = (e) => e.endsWith("%") && Lr(e.slice(0, -1)),
  K = (e) => wm.test(e),
  an = (e) => vw.test(e),
  Sw = new Set(["length", "size", "percentage"]),
  Cw = (e) => no(e, Sw, xm),
  kw = (e) => no(e, "position", xm),
  Pw = new Set(["image", "url"]),
  Tw = (e) => no(e, Pw, Nw),
  Rw = (e) => no(e, "", bw),
  go = () => !0,
  no = (e, t, n) => {
    const r = wm.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  _w = (e) => gw.test(e) && !yw.test(e),
  xm = () => !1,
  bw = (e) => ww.test(e),
  Nw = (e) => xw.test(e),
  Ow = () => {
    const e = le("colors"),
      t = le("spacing"),
      n = le("blur"),
      r = le("brightness"),
      o = le("borderColor"),
      i = le("borderRadius"),
      s = le("borderSpacing"),
      l = le("borderWidth"),
      a = le("contrast"),
      u = le("grayscale"),
      f = le("hueRotate"),
      d = le("invert"),
      c = le("gap"),
      g = le("gradientColorStops"),
      w = le("gradientColorStopPositions"),
      v = le("inset"),
      x = le("margin"),
      p = le("opacity"),
      h = le("padding"),
      m = le("saturate"),
      E = le("scale"),
      C = le("sepia"),
      P = le("skew"),
      R = le("space"),
      N = le("translate"),
      A = () => ["auto", "contain", "none"],
      M = () => ["auto", "hidden", "clip", "visible", "scroll"],
      U = () => ["auto", K, t],
      $ = () => [K, t],
      H = () => ["", $t, ln],
      J = () => ["auto", Lr, K],
      z = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      B = () => ["solid", "dashed", "dotted", "double", "none"],
      X = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      k = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      I = () => ["", "0", K],
      j = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      D = () => [Lr, K];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [go],
        spacing: [$t, ln],
        blur: ["none", "", an, K],
        brightness: D(),
        borderColor: [e],
        borderRadius: ["none", "", "full", an, K],
        borderSpacing: $(),
        borderWidth: H(),
        contrast: D(),
        grayscale: I(),
        hueRotate: D(),
        invert: I(),
        gap: $(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Ew, ln],
        inset: U(),
        margin: U(),
        opacity: D(),
        padding: $(),
        saturate: D(),
        scale: D(),
        sepia: I(),
        skew: D(),
        space: $(),
        translate: $(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", K] }],
        container: ["container"],
        columns: [{ columns: [an] }],
        "break-after": [{ "break-after": j() }],
        "break-before": [{ "break-before": j() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...z(), K] }],
        overflow: [{ overflow: M() }],
        "overflow-x": [{ "overflow-x": M() }],
        "overflow-y": [{ "overflow-y": M() }],
        overscroll: [{ overscroll: A() }],
        "overscroll-x": [{ "overscroll-x": A() }],
        "overscroll-y": [{ "overscroll-y": A() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", vo, K] }],
        basis: [{ basis: U() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", K] }],
        grow: [{ grow: I() }],
        shrink: [{ shrink: I() }],
        order: [{ order: ["first", "last", "none", vo, K] }],
        "grid-cols": [{ "grid-cols": [go] }],
        "col-start-end": [{ col: ["auto", { span: ["full", vo, K] }, K] }],
        "col-start": [{ "col-start": J() }],
        "col-end": [{ "col-end": J() }],
        "grid-rows": [{ "grid-rows": [go] }],
        "row-start-end": [{ row: ["auto", { span: [vo, K] }, K] }],
        "row-start": [{ "row-start": J() }],
        "row-end": [{ "row-end": J() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", K] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", K] }],
        gap: [{ gap: [c] }],
        "gap-x": [{ "gap-x": [c] }],
        "gap-y": [{ "gap-y": [c] }],
        "justify-content": [{ justify: ["normal", ...k()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...k(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...k(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [h] }],
        px: [{ px: [h] }],
        py: [{ py: [h] }],
        ps: [{ ps: [h] }],
        pe: [{ pe: [h] }],
        pt: [{ pt: [h] }],
        pr: [{ pr: [h] }],
        pb: [{ pb: [h] }],
        pl: [{ pl: [h] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [R] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [R] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", K, t] }],
        "min-w": [{ "min-w": [K, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              K,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [an] },
              an,
            ],
          },
        ],
        h: [{ h: [K, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [K, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", an, ln] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Ul,
            ],
          },
        ],
        "font-family": [{ font: [go] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              K,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Lr, Ul] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              $t,
              K,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", K] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", K] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [p] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [p] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...B(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", $t, ln] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", $t, K] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: $() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              K,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", K] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [p] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...z(), kw] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Cw] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Tw,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [g] }],
        "gradient-via": [{ via: [g] }],
        "gradient-to": [{ to: [g] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [p] }],
        "border-style": [{ border: [...B(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [p] }],
        "divide-style": [{ divide: B() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...B()] }],
        "outline-offset": [{ "outline-offset": [$t, K] }],
        "outline-w": [{ outline: [$t, ln] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: H() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [p] }],
        "ring-offset-w": [{ "ring-offset": [$t, ln] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", an, Rw] }],
        "shadow-color": [{ shadow: [go] }],
        opacity: [{ opacity: [p] }],
        "mix-blend": [{ "mix-blend": [...X(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": X() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", an, K] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [f] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [m] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [p] }],
        "backdrop-saturate": [{ "backdrop-saturate": [m] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              K,
            ],
          },
        ],
        duration: [{ duration: D() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", K] }],
        delay: [{ delay: D() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", K] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [E] }],
        "scale-x": [{ "scale-x": [E] }],
        "scale-y": [{ "scale-y": [E] }],
        rotate: [{ rotate: [vo, K] }],
        "translate-x": [{ "translate-x": [N] }],
        "translate-y": [{ "translate-y": [N] }],
        "skew-x": [{ "skew-x": [P] }],
        "skew-y": [{ "skew-y": [P] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              K,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              K,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": $() }],
        "scroll-mx": [{ "scroll-mx": $() }],
        "scroll-my": [{ "scroll-my": $() }],
        "scroll-ms": [{ "scroll-ms": $() }],
        "scroll-me": [{ "scroll-me": $() }],
        "scroll-mt": [{ "scroll-mt": $() }],
        "scroll-mr": [{ "scroll-mr": $() }],
        "scroll-mb": [{ "scroll-mb": $() }],
        "scroll-ml": [{ "scroll-ml": $() }],
        "scroll-p": [{ "scroll-p": $() }],
        "scroll-px": [{ "scroll-px": $() }],
        "scroll-py": [{ "scroll-py": $() }],
        "scroll-ps": [{ "scroll-ps": $() }],
        "scroll-pe": [{ "scroll-pe": $() }],
        "scroll-pt": [{ "scroll-pt": $() }],
        "scroll-pr": [{ "scroll-pr": $() }],
        "scroll-pb": [{ "scroll-pb": $() }],
        "scroll-pl": [{ "scroll-pl": $() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", K] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [$t, ln, Ul] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
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
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Aw = pw(Ow);
function lr(...e) {
  return Aw(hm(e));
}
const Lw = Y0,
  Em = y.forwardRef((r, n) => {
    var o = r,
      { className: e } = o,
      t = W(o, ["className"]);
    return T.jsx(
      lm,
      S(
        {
          ref: n,
          className: lr(
            "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
            e
          ),
        },
        t
      )
    );
  });
Em.displayName = lm.displayName;
const Mw = G0(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Sm = y.forwardRef((o, r) => {
    var i = o,
      { className: e, variant: t } = i,
      n = W(i, ["className", "variant"]);
    return T.jsx(am, S({ ref: r, className: lr(Mw({ variant: t }), e) }, n));
  });
Sm.displayName = am.displayName;
const Iw = y.forwardRef((r, n) => {
  var o = r,
    { className: e } = o,
    t = W(o, ["className"]);
  return T.jsx(
    dm,
    S(
      {
        ref: n,
        className: lr(
          "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
          e
        ),
      },
      t
    )
  );
});
Iw.displayName = dm.displayName;
const Cm = y.forwardRef((r, n) => {
  var o = r,
    { className: e } = o,
    t = W(o, ["className"]);
  return T.jsx(
    fm,
    b(
      S(
        {
          ref: n,
          className: lr(
            "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            e
          ),
          "toast-close": "",
        },
        t
      ),
      { children: T.jsx(ew, { className: "h-4 w-4" }) }
    )
  );
});
Cm.displayName = fm.displayName;
const km = y.forwardRef((r, n) => {
  var o = r,
    { className: e } = o,
    t = W(o, ["className"]);
  return T.jsx(um, S({ ref: n, className: lr("text-sm font-semibold", e) }, t));
});
km.displayName = um.displayName;
const Pm = y.forwardRef((r, n) => {
  var o = r,
    { className: e } = o,
    t = W(o, ["className"]);
  return T.jsx(cm, S({ ref: n, className: lr("text-sm opacity-90", e) }, t));
});
Pm.displayName = cm.displayName;
function Dw() {
  const { toasts: e } = o0();
  return T.jsxs(Lw, {
    children: [
      e.map(function (s) {
        var l = s,
          { id: t, title: n, description: r, action: o } = l,
          i = W(l, ["id", "title", "description", "action"]);
        return T.jsxs(
          Sm,
          b(S({}, i), {
            children: [
              T.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && T.jsx(km, { children: n }),
                  r && T.jsx(Pm, { children: r }),
                ],
              }),
              o,
              T.jsx(Cm, {}),
            ],
          }),
          t
        );
      }),
      T.jsx(Em, {}),
    ],
  });
}
var Ud = ["light", "dark"],
  jw = "(prefers-color-scheme: dark)",
  zw = y.createContext(void 0),
  Fw = { setTheme: (e) => {}, themes: [] },
  $w = () => {
    var e;
    return (e = y.useContext(zw)) != null ? e : Fw;
  };
y.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: l,
    nonce: a,
  }) => {
    let u = i === "system",
      f =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l
              .map((w) => `'${w}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      d = o
        ? Ud.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      c = (w, v = !1, x = !0) => {
        let p = s ? s[w] : w,
          h = v ? w + "|| ''" : `'${p}'`,
          m = "";
        return (
          o &&
            x &&
            !v &&
            Ud.includes(w) &&
            (m += `d.style.colorScheme = '${w}';`),
          n === "class"
            ? v || p
              ? (m += `c.add(${h})`)
              : (m += "null")
            : p && (m += `d[s](n,${h})`),
          m
        );
      },
      g = e
        ? `!function(){${f}${c(e)}}()`
        : r
        ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${jw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${c(
            "dark"
          )}}else{${c("light")}}}else if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${c(s ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + c(i, !1, !1) + "}"
          }${d}}catch(e){}}()`
        : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${c(s ? "x[e]" : "e", !0)}}else{${c(
            i,
            !1,
            !1
          )};}${d}}catch(t){}}();`;
    return y.createElement("script", {
      nonce: a,
      dangerouslySetInnerHTML: { __html: g },
    });
  }
);
var Uw = (e) => {
    switch (e) {
      case "success":
        return Ww;
      case "info":
        return Qw;
      case "warning":
        return Hw;
      case "error":
        return Kw;
      default:
        return null;
    }
  },
  Bw = Array(12).fill(0),
  Vw = ({ visible: e }) =>
    L.createElement(
      "div",
      { className: "sonner-loading-wrapper", "data-visible": e },
      L.createElement(
        "div",
        { className: "sonner-spinner" },
        Bw.map((t, n) =>
          L.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          })
        )
      )
    ),
  Ww = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  Hw = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  Qw = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  Kw = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  Yw = () => {
    let [e, t] = L.useState(document.hidden);
    return (
      L.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Wa = 1,
  Gw = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let l = e,
            { message: n } = l,
            r = W(l, ["message"]),
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Wa++,
            i = this.toasts.find((a) => a.id === o),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            i
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === o
                    ? (this.publish(b(S(S({}, a), e), { id: o, title: n })),
                      b(S(S({}, a), e), { id: o, dismissible: s, title: n }))
                    : a
                ))
              : this.addToast(b(S({ title: n }, r), { dismissible: s, id: o })),
            o
          );
        }),
        (this.dismiss = (e) => (
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create(b(S({}, t), { message: e }))),
        (this.error = (e, t) =>
          this.create(b(S({}, t), { message: e, type: "error" }))),
        (this.success = (e, t) =>
          this.create(b(S({}, t), { type: "success", message: e }))),
        (this.info = (e, t) =>
          this.create(b(S({}, t), { type: "info", message: e }))),
        (this.warning = (e, t) =>
          this.create(b(S({}, t), { type: "warning", message: e }))),
        (this.loading = (e, t) =>
          this.create(b(S({}, t), { type: "loading", message: e }))),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create(
              b(S({}, t), {
                promise: e,
                type: "loading",
                message: t.loading,
                description:
                  typeof t.description != "function" ? t.description : void 0,
              })
            ));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0;
          return (
            r
              .then((i) =>
                Se(this, null, function* () {
                  if (qw(i) && !i.ok) {
                    o = !1;
                    let s =
                        typeof t.error == "function"
                          ? yield t.error(`HTTP error! status: ${i.status}`)
                          : t.error,
                      l =
                        typeof t.description == "function"
                          ? yield t.description(
                              `HTTP error! status: ${i.status}`
                            )
                          : t.description;
                    this.create({
                      id: n,
                      type: "error",
                      message: s,
                      description: l,
                    });
                  } else if (t.success !== void 0) {
                    o = !1;
                    let s =
                        typeof t.success == "function"
                          ? yield t.success(i)
                          : t.success,
                      l =
                        typeof t.description == "function"
                          ? yield t.description(i)
                          : t.description;
                    this.create({
                      id: n,
                      type: "success",
                      message: s,
                      description: l,
                    });
                  }
                })
              )
              .catch((i) =>
                Se(this, null, function* () {
                  if (t.error !== void 0) {
                    o = !1;
                    let s =
                        typeof t.error == "function"
                          ? yield t.error(i)
                          : t.error,
                      l =
                        typeof t.description == "function"
                          ? yield t.description(i)
                          : t.description;
                    this.create({
                      id: n,
                      type: "error",
                      message: s,
                      description: l,
                    });
                  }
                })
              )
              .finally(() => {
                var i;
                o && (this.dismiss(n), (n = void 0)),
                  (i = t.finally) == null || i.call(t);
              }),
            n
          );
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Wa++;
          return this.create(S({ jsx: e(n), id: n }, t)), n;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  Xe = new Gw(),
  Xw = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Wa++;
    return Xe.addToast(b(S({ title: e }, t), { id: n })), n;
  },
  qw = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  Zw = Xw,
  Jw = () => Xe.toasts;
Object.assign(
  Zw,
  {
    success: Xe.success,
    info: Xe.info,
    warning: Xe.warning,
    error: Xe.error,
    custom: Xe.custom,
    message: Xe.message,
    promise: Xe.promise,
    dismiss: Xe.dismiss,
    loading: Xe.loading,
  },
  { getHistory: Jw }
);
function e1(e, { insertAt: t } = {}) {
  if (typeof document == "undefined") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
e1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ji(e) {
  return e.label !== void 0;
}
var t1 = 3,
  n1 = "32px",
  r1 = 4e3,
  o1 = 356,
  i1 = 14,
  s1 = 20,
  l1 = 200;
function a1(...e) {
  return e.filter(Boolean).join(" ");
}
var u1 = (e) => {
  var t, n, r, o, i, s, l, a, u, f;
  let {
      invert: d,
      toast: c,
      unstyled: g,
      interacting: w,
      setHeights: v,
      visibleToasts: x,
      heights: p,
      index: h,
      toasts: m,
      expanded: E,
      removeToast: C,
      defaultRichColors: P,
      closeButton: R,
      style: N,
      cancelButtonStyle: A,
      actionButtonStyle: M,
      className: U = "",
      descriptionClassName: $ = "",
      duration: H,
      position: J,
      gap: z,
      loadingIcon: B,
      expandByDefault: X,
      classNames: k,
      icons: I,
      closeButtonAriaLabel: j = "Close toast",
      pauseWhenPageIsHidden: D,
      cn: V,
    } = e,
    [q, ie] = L.useState(!1),
    [_e, te] = L.useState(!1),
    [pt, en] = L.useState(!1),
    [tn, nn] = L.useState(!1),
    [di, cr] = L.useState(0),
    [fi, io] = L.useState(0),
    so = L.useRef(null),
    it = L.useRef(null),
    pi = h === 0,
    ll = h + 1 <= x,
    Ue = c.type,
    rn = c.dismissible !== !1,
    al = c.className || "",
    dr = c.descriptionClassName || "",
    hi = L.useMemo(
      () => p.findIndex((Q) => Q.toastId === c.id) || 0,
      [p, c.id]
    ),
    vv = L.useMemo(() => {
      var Q;
      return (Q = c.closeButton) != null ? Q : R;
    }, [c.closeButton, R]),
    pc = L.useMemo(() => c.duration || H || r1, [c.duration, H]),
    ul = L.useRef(0),
    fr = L.useRef(0),
    hc = L.useRef(0),
    pr = L.useRef(null),
    [mc, gv] = J.split("-"),
    vc = L.useMemo(
      () => p.reduce((Q, se, re) => (re >= hi ? Q : Q + se.height), 0),
      [p, hi]
    ),
    gc = Yw(),
    yv = c.invert || d,
    cl = Ue === "loading";
  (fr.current = L.useMemo(() => hi * z + vc, [hi, vc])),
    L.useEffect(() => {
      ie(!0);
    }, []),
    L.useLayoutEffect(() => {
      if (!q) return;
      let Q = it.current,
        se = Q.style.height;
      Q.style.height = "auto";
      let re = Q.getBoundingClientRect().height;
      (Q.style.height = se),
        io(re),
        v((Rt) =>
          Rt.find((_t) => _t.toastId === c.id)
            ? Rt.map((_t) =>
                _t.toastId === c.id ? b(S({}, _t), { height: re }) : _t
              )
            : [{ toastId: c.id, height: re, position: c.position }, ...Rt]
        );
    }, [q, c.title, c.description, v, c.id]);
  let on = L.useCallback(() => {
    te(!0),
      cr(fr.current),
      v((Q) => Q.filter((se) => se.toastId !== c.id)),
      setTimeout(() => {
        C(c);
      }, l1);
  }, [c, C, v, fr]);
  L.useEffect(() => {
    if (
      (c.promise && Ue === "loading") ||
      c.duration === 1 / 0 ||
      c.type === "loading"
    )
      return;
    let Q,
      se = pc;
    return (
      E || w || (D && gc)
        ? (() => {
            if (hc.current < ul.current) {
              let re = new Date().getTime() - ul.current;
              se = se - re;
            }
            hc.current = new Date().getTime();
          })()
        : se !== 1 / 0 &&
          ((ul.current = new Date().getTime()),
          (Q = setTimeout(() => {
            var re;
            (re = c.onAutoClose) == null || re.call(c, c), on();
          }, se))),
      () => clearTimeout(Q)
    );
  }, [E, w, X, c, pc, on, c.promise, Ue, D, gc]),
    L.useEffect(() => {
      let Q = it.current;
      if (Q) {
        let se = Q.getBoundingClientRect().height;
        return (
          io(se),
          v((re) => [
            { toastId: c.id, height: se, position: c.position },
            ...re,
          ]),
          () => v((re) => re.filter((Rt) => Rt.toastId !== c.id))
        );
      }
    }, [v, c.id]),
    L.useEffect(() => {
      c.delete && on();
    }, [on, c.delete]);
  function wv() {
    return I != null && I.loading
      ? L.createElement(
          "div",
          { className: "sonner-loader", "data-visible": Ue === "loading" },
          I.loading
        )
      : B
      ? L.createElement(
          "div",
          { className: "sonner-loader", "data-visible": Ue === "loading" },
          B
        )
      : L.createElement(Vw, { visible: Ue === "loading" });
  }
  return L.createElement(
    "li",
    {
      "aria-live": c.important ? "assertive" : "polite",
      "aria-atomic": "true",
      role: "status",
      tabIndex: 0,
      ref: it,
      className: V(
        U,
        al,
        k == null ? void 0 : k.toast,
        (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast,
        k == null ? void 0 : k.default,
        k == null ? void 0 : k[Ue],
        (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[Ue]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = c.richColors) != null ? r : P,
      "data-styled": !(c.jsx || c.unstyled || g),
      "data-mounted": q,
      "data-promise": !!c.promise,
      "data-removed": _e,
      "data-visible": ll,
      "data-y-position": mc,
      "data-x-position": gv,
      "data-index": h,
      "data-front": pi,
      "data-swiping": pt,
      "data-dismissible": rn,
      "data-type": Ue,
      "data-invert": yv,
      "data-swipe-out": tn,
      "data-expanded": !!(E || (X && q)),
      style: S(
        S(
          {
            "--index": h,
            "--toasts-before": h,
            "--z-index": m.length - h,
            "--offset": `${_e ? di : fr.current}px`,
            "--initial-height": X ? "auto" : `${fi}px`,
          },
          N
        ),
        c.style
      ),
      onPointerDown: (Q) => {
        cl ||
          !rn ||
          ((so.current = new Date()),
          cr(fr.current),
          Q.target.setPointerCapture(Q.pointerId),
          Q.target.tagName !== "BUTTON" &&
            (en(!0), (pr.current = { x: Q.clientX, y: Q.clientY })));
      },
      onPointerUp: () => {
        var Q, se, re, Rt;
        if (tn || !rn) return;
        pr.current = null;
        let _t = Number(
            ((Q = it.current) == null
              ? void 0
              : Q.style.getPropertyValue("--swipe-amount").replace("px", "")) ||
              0
          ),
          mi =
            new Date().getTime() -
            ((se = so.current) == null ? void 0 : se.getTime()),
          xv = Math.abs(_t) / mi;
        if (Math.abs(_t) >= s1 || xv > 0.11) {
          cr(fr.current),
            (re = c.onDismiss) == null || re.call(c, c),
            on(),
            nn(!0);
          return;
        }
        (Rt = it.current) == null ||
          Rt.style.setProperty("--swipe-amount", "0px"),
          en(!1);
      },
      onPointerMove: (Q) => {
        var se;
        if (!pr.current || !rn) return;
        let re = Q.clientY - pr.current.y,
          Rt = Q.clientX - pr.current.x,
          _t = (mc === "top" ? Math.min : Math.max)(0, re),
          mi = Q.pointerType === "touch" ? 10 : 2;
        Math.abs(_t) > mi
          ? (se = it.current) == null ||
            se.style.setProperty("--swipe-amount", `${re}px`)
          : Math.abs(Rt) > mi && (pr.current = null);
      },
    },
    vv && !c.jsx
      ? L.createElement(
          "button",
          {
            "aria-label": j,
            "data-disabled": cl,
            "data-close-button": !0,
            onClick:
              cl || !rn
                ? () => {}
                : () => {
                    var Q;
                    on(), (Q = c.onDismiss) == null || Q.call(c, c);
                  },
            className: V(
              k == null ? void 0 : k.closeButton,
              (o = c == null ? void 0 : c.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          L.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            L.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            L.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          )
        )
      : null,
    c.jsx || L.isValidElement(c.title)
      ? c.jsx || c.title
      : L.createElement(
          L.Fragment,
          null,
          Ue || c.icon || c.promise
            ? L.createElement(
                "div",
                {
                  "data-icon": "",
                  className: V(
                    k == null ? void 0 : k.icon,
                    (i = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : i.icon
                  ),
                },
                c.promise || (c.type === "loading" && !c.icon)
                  ? c.icon || wv()
                  : null,
                c.type !== "loading"
                  ? c.icon || (I == null ? void 0 : I[Ue]) || Uw(Ue)
                  : null
              )
            : null,
          L.createElement(
            "div",
            {
              "data-content": "",
              className: V(
                k == null ? void 0 : k.content,
                (s = c == null ? void 0 : c.classNames) == null
                  ? void 0
                  : s.content
              ),
            },
            L.createElement(
              "div",
              {
                "data-title": "",
                className: V(
                  k == null ? void 0 : k.title,
                  (l = c == null ? void 0 : c.classNames) == null
                    ? void 0
                    : l.title
                ),
              },
              c.title
            ),
            c.description
              ? L.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: V(
                      $,
                      dr,
                      k == null ? void 0 : k.description,
                      (a = c == null ? void 0 : c.classNames) == null
                        ? void 0
                        : a.description
                    ),
                  },
                  c.description
                )
              : null
          ),
          L.isValidElement(c.cancel)
            ? c.cancel
            : c.cancel && ji(c.cancel)
            ? L.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: c.cancelButtonStyle || A,
                  onClick: (Q) => {
                    var se, re;
                    ji(c.cancel) &&
                      rn &&
                      ((re = (se = c.cancel).onClick) == null || re.call(se, Q),
                      on());
                  },
                  className: V(
                    k == null ? void 0 : k.cancelButton,
                    (u = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : u.cancelButton
                  ),
                },
                c.cancel.label
              )
            : null,
          L.isValidElement(c.action)
            ? c.action
            : c.action && ji(c.action)
            ? L.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: c.actionButtonStyle || M,
                  onClick: (Q) => {
                    var se, re;
                    ji(c.action) &&
                      (Q.defaultPrevented ||
                        ((re = (se = c.action).onClick) == null ||
                          re.call(se, Q),
                        on()));
                  },
                  className: V(
                    k == null ? void 0 : k.actionButton,
                    (f = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : f.actionButton
                  ),
                },
                c.action.label
              )
            : null
        )
  );
};
function Bd() {
  if (typeof window == "undefined" || typeof document == "undefined")
    return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
var c1 = (e) => {
  let {
      invert: t,
      position: n = "bottom-right",
      hotkey: r = ["altKey", "KeyT"],
      expand: o,
      closeButton: i,
      className: s,
      offset: l,
      theme: a = "light",
      richColors: u,
      duration: f,
      style: d,
      visibleToasts: c = t1,
      toastOptions: g,
      dir: w = Bd(),
      gap: v = i1,
      loadingIcon: x,
      icons: p,
      containerAriaLabel: h = "Notifications",
      pauseWhenPageIsHidden: m,
      cn: E = a1,
    } = e,
    [C, P] = L.useState([]),
    R = L.useMemo(
      () =>
        Array.from(
          new Set(
            [n].concat(C.filter((D) => D.position).map((D) => D.position))
          )
        ),
      [C, n]
    ),
    [N, A] = L.useState([]),
    [M, U] = L.useState(!1),
    [$, H] = L.useState(!1),
    [J, z] = L.useState(
      a !== "system"
        ? a
        : typeof window != "undefined" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    B = L.useRef(null),
    X = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    k = L.useRef(null),
    I = L.useRef(!1),
    j = L.useCallback(
      (D) => {
        var V;
        ((V = C.find((q) => q.id === D.id)) != null && V.delete) ||
          Xe.dismiss(D.id),
          P((q) => q.filter(({ id: ie }) => ie !== D.id));
      },
      [C]
    );
  return (
    L.useEffect(
      () =>
        Xe.subscribe((D) => {
          if (D.dismiss) {
            P((V) =>
              V.map((q) => (q.id === D.id ? b(S({}, q), { delete: !0 }) : q))
            );
            return;
          }
          setTimeout(() => {
            zh.flushSync(() => {
              P((V) => {
                let q = V.findIndex((ie) => ie.id === D.id);
                return q !== -1
                  ? [...V.slice(0, q), S(S({}, V[q]), D), ...V.slice(q + 1)]
                  : [D, ...V];
              });
            });
          });
        }),
      []
    ),
    L.useEffect(() => {
      if (a !== "system") {
        z(a);
        return;
      }
      a === "system" &&
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? z("dark")
          : z("light")),
        typeof window != "undefined" &&
          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", ({ matches: D }) => {
              z(D ? "dark" : "light");
            });
    }, [a]),
    L.useEffect(() => {
      C.length <= 1 && U(!1);
    }, [C]),
    L.useEffect(() => {
      let D = (V) => {
        var q, ie;
        r.every((_e) => V[_e] || V.code === _e) &&
          (U(!0), (q = B.current) == null || q.focus()),
          V.code === "Escape" &&
            (document.activeElement === B.current ||
              ((ie = B.current) != null &&
                ie.contains(document.activeElement))) &&
            U(!1);
      };
      return (
        document.addEventListener("keydown", D),
        () => document.removeEventListener("keydown", D)
      );
    }, [r]),
    L.useEffect(() => {
      if (B.current)
        return () => {
          k.current &&
            (k.current.focus({ preventScroll: !0 }),
            (k.current = null),
            (I.current = !1));
        };
    }, [B.current]),
    C.length
      ? L.createElement(
          "section",
          { "aria-label": `${h} ${X}`, tabIndex: -1 },
          R.map((D, V) => {
            var q;
            let [ie, _e] = D.split("-");
            return L.createElement(
              "ol",
              {
                key: D,
                dir: w === "auto" ? Bd() : w,
                tabIndex: -1,
                ref: B,
                className: s,
                "data-sonner-toaster": !0,
                "data-theme": J,
                "data-y-position": ie,
                "data-x-position": _e,
                style: S(
                  {
                    "--front-toast-height": `${
                      ((q = N[0]) == null ? void 0 : q.height) || 0
                    }px`,
                    "--offset": typeof l == "number" ? `${l}px` : l || n1,
                    "--width": `${o1}px`,
                    "--gap": `${v}px`,
                  },
                  d
                ),
                onBlur: (te) => {
                  I.current &&
                    !te.currentTarget.contains(te.relatedTarget) &&
                    ((I.current = !1),
                    k.current &&
                      (k.current.focus({ preventScroll: !0 }),
                      (k.current = null)));
                },
                onFocus: (te) => {
                  (te.target instanceof HTMLElement &&
                    te.target.dataset.dismissible === "false") ||
                    I.current ||
                    ((I.current = !0), (k.current = te.relatedTarget));
                },
                onMouseEnter: () => U(!0),
                onMouseMove: () => U(!0),
                onMouseLeave: () => {
                  $ || U(!1);
                },
                onPointerDown: (te) => {
                  (te.target instanceof HTMLElement &&
                    te.target.dataset.dismissible === "false") ||
                    H(!0);
                },
                onPointerUp: () => H(!1),
              },
              C.filter(
                (te) => (!te.position && V === 0) || te.position === D
              ).map((te, pt) => {
                var en, tn;
                return L.createElement(u1, {
                  key: te.id,
                  icons: p,
                  index: pt,
                  toast: te,
                  defaultRichColors: u,
                  duration:
                    (en = g == null ? void 0 : g.duration) != null ? en : f,
                  className: g == null ? void 0 : g.className,
                  descriptionClassName:
                    g == null ? void 0 : g.descriptionClassName,
                  invert: t,
                  visibleToasts: c,
                  closeButton:
                    (tn = g == null ? void 0 : g.closeButton) != null ? tn : i,
                  interacting: $,
                  position: D,
                  style: g == null ? void 0 : g.style,
                  unstyled: g == null ? void 0 : g.unstyled,
                  classNames: g == null ? void 0 : g.classNames,
                  cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                  actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                  removeToast: j,
                  toasts: C.filter((nn) => nn.position == te.position),
                  heights: N.filter((nn) => nn.position == te.position),
                  setHeights: A,
                  expandByDefault: o,
                  gap: v,
                  loadingIcon: x,
                  expanded: M,
                  pauseWhenPageIsHidden: m,
                  cn: E,
                });
              })
            );
          })
        )
      : null
  );
};
const d1 = (t) => {
    var e = W(t, []);
    const { theme: n = "system" } = $w();
    return T.jsx(
      c1,
      S(
        {
          theme: n,
          className: "toaster group",
          toastOptions: {
            classNames: {
              toast:
                "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
              description: "group-[.toast]:text-muted-foreground",
              actionButton:
                "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
              cancelButton:
                "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
            },
          },
        },
        e
      )
    );
  },
  f1 = ["top", "right", "bottom", "left"],
  Ln = Math.min,
  Ze = Math.max,
  Ts = Math.round,
  zi = Math.floor,
  Mn = (e) => ({ x: e, y: e }),
  p1 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  h1 = { start: "end", end: "start" };
function Ha(e, t, n) {
  return Ze(e, Ln(t, n));
}
function qt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Zt(e) {
  return e.split("-")[0];
}
function ro(e) {
  return e.split("-")[1];
}
function ec(e) {
  return e === "x" ? "y" : "x";
}
function tc(e) {
  return e === "y" ? "height" : "width";
}
function In(e) {
  return ["top", "bottom"].includes(Zt(e)) ? "y" : "x";
}
function nc(e) {
  return ec(In(e));
}
function m1(e, t, n) {
  n === void 0 && (n = !1);
  const r = ro(e),
    o = nc(e),
    i = tc(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (s = Rs(s)), [s, Rs(s)];
}
function v1(e) {
  const t = Rs(e);
  return [Qa(e), t, Qa(t)];
}
function Qa(e) {
  return e.replace(/start|end/g, (t) => h1[t]);
}
function g1(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function y1(e, t, n, r) {
  const o = ro(e);
  let i = g1(Zt(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Qa)))), i
  );
}
function Rs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => p1[t]);
}
function w1(e) {
  return S({ top: 0, right: 0, bottom: 0, left: 0 }, e);
}
function Tm(e) {
  return typeof e != "number"
    ? w1(e)
    : { top: e, right: e, bottom: e, left: e };
}
function _s(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Vd(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = In(t),
    s = nc(t),
    l = tc(s),
    a = Zt(t),
    u = i === "y",
    f = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    c = r[l] / 2 - o[l] / 2;
  let g;
  switch (a) {
    case "top":
      g = { x: f, y: r.y - o.height };
      break;
    case "bottom":
      g = { x: f, y: r.y + r.height };
      break;
    case "right":
      g = { x: r.x + r.width, y: d };
      break;
    case "left":
      g = { x: r.x - o.width, y: d };
      break;
    default:
      g = { x: r.x, y: r.y };
  }
  switch (ro(t)) {
    case "start":
      g[s] -= c * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += c * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const x1 = (e, t, n) =>
  Se(void 0, null, function* () {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: s,
      } = n,
      l = i.filter(Boolean),
      a = yield s.isRTL == null ? void 0 : s.isRTL(t);
    let u = yield s.getElementRects({ reference: e, floating: t, strategy: o }),
      { x: f, y: d } = Vd(u, r, a),
      c = r,
      g = {},
      w = 0;
    for (let v = 0; v < l.length; v++) {
      const { name: x, fn: p } = l[v],
        {
          x: h,
          y: m,
          data: E,
          reset: C,
        } = yield p({
          x: f,
          y: d,
          initialPlacement: r,
          placement: c,
          strategy: o,
          middlewareData: g,
          rects: u,
          platform: s,
          elements: { reference: e, floating: t },
        });
      (f = h != null ? h : f),
        (d = m != null ? m : d),
        (g = b(S({}, g), { [x]: S(S({}, g[x]), E) })),
        C &&
          w <= 50 &&
          (w++,
          typeof C == "object" &&
            (C.placement && (c = C.placement),
            C.rects &&
              (u =
                C.rects === !0
                  ? yield s.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: o,
                    })
                  : C.rects),
            ({ x: f, y: d } = Vd(u, c, a))),
          (v = -1));
    }
    return { x: f, y: d, placement: c, strategy: o, middlewareData: g };
  });
function Go(e, t) {
  return Se(this, null, function* () {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
      {
        boundary: u = "clippingAncestors",
        rootBoundary: f = "viewport",
        elementContext: d = "floating",
        altBoundary: c = !1,
        padding: g = 0,
      } = qt(t, e),
      w = Tm(g),
      x = l[c ? (d === "floating" ? "reference" : "floating") : d],
      p = _s(
        yield i.getClippingRect({
          element:
            (n = yield i.isElement == null ? void 0 : i.isElement(x)) == null ||
            n
              ? x
              : x.contextElement ||
                (yield i.getDocumentElement == null
                  ? void 0
                  : i.getDocumentElement(l.floating)),
          boundary: u,
          rootBoundary: f,
          strategy: a,
        })
      ),
      h =
        d === "floating"
          ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
          : s.reference,
      m = yield i.getOffsetParent == null
        ? void 0
        : i.getOffsetParent(l.floating),
      E = (yield i.isElement == null ? void 0 : i.isElement(m))
        ? (yield i.getScale == null ? void 0 : i.getScale(m)) || { x: 1, y: 1 }
        : { x: 1, y: 1 },
      C = _s(
        i.convertOffsetParentRelativeRectToViewportRelativeRect
          ? yield i.convertOffsetParentRelativeRectToViewportRelativeRect({
              elements: l,
              rect: h,
              offsetParent: m,
              strategy: a,
            })
          : h
      );
    return {
      top: (p.top - C.top + w.top) / E.y,
      bottom: (C.bottom - p.bottom + w.bottom) / E.y,
      left: (p.left - C.left + w.left) / E.x,
      right: (C.right - p.right + w.right) / E.x,
    };
  });
}
const E1 = (e) => ({
    name: "arrow",
    options: e,
    fn(n) {
      return Se(this, null, function* () {
        const {
            x: r,
            y: o,
            placement: i,
            rects: s,
            platform: l,
            elements: a,
            middlewareData: u,
          } = n,
          { element: f, padding: d = 0 } = qt(e, n) || {};
        if (f == null) return {};
        const c = Tm(d),
          g = { x: r, y: o },
          w = nc(i),
          v = tc(w),
          x = yield l.getDimensions(f),
          p = w === "y",
          h = p ? "top" : "left",
          m = p ? "bottom" : "right",
          E = p ? "clientHeight" : "clientWidth",
          C = s.reference[v] + s.reference[w] - g[w] - s.floating[v],
          P = g[w] - s.reference[w],
          R = yield l.getOffsetParent == null ? void 0 : l.getOffsetParent(f);
        let N = R ? R[E] : 0;
        (!N || !(yield l.isElement == null ? void 0 : l.isElement(R))) &&
          (N = a.floating[E] || s.floating[v]);
        const A = C / 2 - P / 2,
          M = N / 2 - x[v] / 2 - 1,
          U = Ln(c[h], M),
          $ = Ln(c[m], M),
          H = U,
          J = N - x[v] - $,
          z = N / 2 - x[v] / 2 + A,
          B = Ha(H, z, J),
          X =
            !u.arrow &&
            ro(i) != null &&
            z !== B &&
            s.reference[v] / 2 - (z < H ? U : $) - x[v] / 2 < 0,
          k = X ? (z < H ? z - H : z - J) : 0;
        return {
          [w]: g[w] + k,
          data: S(
            { [w]: B, centerOffset: z - B - k },
            X && { alignmentOffset: k }
          ),
          reset: X,
        };
      });
    },
  }),
  S1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        fn(n) {
          return Se(this, null, function* () {
            var r, o;
            const {
                placement: i,
                middlewareData: s,
                rects: l,
                initialPlacement: a,
                platform: u,
                elements: f,
              } = n,
              z = qt(e, n),
              {
                mainAxis: d = !0,
                crossAxis: c = !0,
                fallbackPlacements: g,
                fallbackStrategy: w = "bestFit",
                fallbackAxisSideDirection: v = "none",
                flipAlignment: x = !0,
              } = z,
              p = W(z, [
                "mainAxis",
                "crossAxis",
                "fallbackPlacements",
                "fallbackStrategy",
                "fallbackAxisSideDirection",
                "flipAlignment",
              ]);
            if ((r = s.arrow) != null && r.alignmentOffset) return {};
            const h = Zt(i),
              m = In(a),
              E = Zt(a) === a,
              C = yield u.isRTL == null ? void 0 : u.isRTL(f.floating),
              P = g || (E || !x ? [Rs(a)] : v1(a)),
              R = v !== "none";
            !g && R && P.push(...y1(a, x, v, C));
            const N = [a, ...P],
              A = yield Go(n, p),
              M = [];
            let U = ((o = s.flip) == null ? void 0 : o.overflows) || [];
            if ((d && M.push(A[h]), c)) {
              const B = m1(i, l, C);
              M.push(A[B[0]], A[B[1]]);
            }
            if (
              ((U = [...U, { placement: i, overflows: M }]),
              !M.every((B) => B <= 0))
            ) {
              var $, H;
              const B = ((($ = s.flip) == null ? void 0 : $.index) || 0) + 1,
                X = N[B];
              if (X)
                return {
                  data: { index: B, overflows: U },
                  reset: { placement: X },
                };
              let k =
                (H = U.filter((I) => I.overflows[0] <= 0).sort(
                  (I, j) => I.overflows[1] - j.overflows[1]
                )[0]) == null
                  ? void 0
                  : H.placement;
              if (!k)
                switch (w) {
                  case "bestFit": {
                    var J;
                    const I =
                      (J = U.filter((j) => {
                        if (R) {
                          const D = In(j.placement);
                          return D === m || D === "y";
                        }
                        return !0;
                      })
                        .map((j) => [
                          j.placement,
                          j.overflows
                            .filter((D) => D > 0)
                            .reduce((D, V) => D + V, 0),
                        ])
                        .sort((j, D) => j[1] - D[1])[0]) == null
                        ? void 0
                        : J[0];
                    I && (k = I);
                    break;
                  }
                  case "initialPlacement":
                    k = a;
                    break;
                }
              if (i !== k) return { reset: { placement: k } };
            }
            return {};
          });
        },
      }
    );
  };
function Wd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Hd(e) {
  return f1.some((t) => e[t] >= 0);
}
const C1 = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      fn(n) {
        return Se(this, null, function* () {
          const { rects: r } = n,
            s = qt(e, n),
            { strategy: o = "referenceHidden" } = s,
            i = W(s, ["strategy"]);
          switch (o) {
            case "referenceHidden": {
              const l = yield Go(
                  n,
                  b(S({}, i), { elementContext: "reference" })
                ),
                a = Wd(l, r.reference);
              return {
                data: { referenceHiddenOffsets: a, referenceHidden: Hd(a) },
              };
            }
            case "escaped": {
              const l = yield Go(n, b(S({}, i), { altBoundary: !0 })),
                a = Wd(l, r.floating);
              return { data: { escapedOffsets: a, escaped: Hd(a) } };
            }
            default:
              return {};
          }
        });
      },
    }
  );
};
function k1(e, t) {
  return Se(this, null, function* () {
    const { placement: n, platform: r, elements: o } = e,
      i = yield r.isRTL == null ? void 0 : r.isRTL(o.floating),
      s = Zt(n),
      l = ro(n),
      a = In(n) === "y",
      u = ["left", "top"].includes(s) ? -1 : 1,
      f = i && a ? -1 : 1,
      d = qt(t, e);
    let {
      mainAxis: c,
      crossAxis: g,
      alignmentAxis: w,
    } = typeof d == "number"
      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: d.mainAxis || 0,
          crossAxis: d.crossAxis || 0,
          alignmentAxis: d.alignmentAxis,
        };
    return (
      l && typeof w == "number" && (g = l === "end" ? w * -1 : w),
      a ? { x: g * f, y: c * u } : { x: c * u, y: g * f }
    );
  });
}
const P1 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        fn(n) {
          return Se(this, null, function* () {
            var r, o;
            const { x: i, y: s, placement: l, middlewareData: a } = n,
              u = yield k1(n, e);
            return l === ((r = a.offset) == null ? void 0 : r.placement) &&
              (o = a.arrow) != null &&
              o.alignmentOffset
              ? {}
              : { x: i + u.x, y: s + u.y, data: b(S({}, u), { placement: l }) };
          });
        },
      }
    );
  },
  T1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        fn(n) {
          return Se(this, null, function* () {
            const { x: r, y: o, placement: i } = n,
              p = qt(e, n),
              {
                mainAxis: s = !0,
                crossAxis: l = !1,
                limiter: a = {
                  fn: (h) => {
                    let { x: m, y: E } = h;
                    return { x: m, y: E };
                  },
                },
              } = p,
              u = W(p, ["mainAxis", "crossAxis", "limiter"]),
              f = { x: r, y: o },
              d = yield Go(n, u),
              c = In(Zt(i)),
              g = ec(c);
            let w = f[g],
              v = f[c];
            if (s) {
              const h = g === "y" ? "top" : "left",
                m = g === "y" ? "bottom" : "right",
                E = w + d[h],
                C = w - d[m];
              w = Ha(E, w, C);
            }
            if (l) {
              const h = c === "y" ? "top" : "left",
                m = c === "y" ? "bottom" : "right",
                E = v + d[h],
                C = v - d[m];
              v = Ha(E, v, C);
            }
            const x = a.fn(b(S({}, n), { [g]: w, [c]: v }));
            return b(S({}, x), {
              data: { x: x.x - r, y: x.y - o, enabled: { [g]: s, [c]: l } },
            });
          });
        },
      }
    );
  },
  R1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = qt(e, t),
            f = { x: n, y: r },
            d = In(o),
            c = ec(d);
          let g = f[c],
            w = f[d];
          const v = qt(l, t),
            x =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : S({ mainAxis: 0, crossAxis: 0 }, v);
          if (a) {
            const m = c === "y" ? "height" : "width",
              E = i.reference[c] - i.floating[m] + x.mainAxis,
              C = i.reference[c] + i.reference[m] - x.mainAxis;
            g < E ? (g = E) : g > C && (g = C);
          }
          if (u) {
            var p, h;
            const m = c === "y" ? "width" : "height",
              E = ["top", "left"].includes(Zt(o)),
              C =
                i.reference[d] -
                i.floating[m] +
                ((E && ((p = s.offset) == null ? void 0 : p[d])) || 0) +
                (E ? 0 : x.crossAxis),
              P =
                i.reference[d] +
                i.reference[m] +
                (E ? 0 : ((h = s.offset) == null ? void 0 : h[d]) || 0) -
                (E ? x.crossAxis : 0);
            w < C ? (w = C) : w > P && (w = P);
          }
          return { [c]: g, [d]: w };
        },
      }
    );
  },
  _1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        fn(n) {
          return Se(this, null, function* () {
            var r, o;
            const { placement: i, rects: s, platform: l, elements: a } = n,
              U = qt(e, n),
              { apply: u = () => {} } = U,
              f = W(U, ["apply"]),
              d = yield Go(n, f),
              c = Zt(i),
              g = ro(i),
              w = In(i) === "y",
              { width: v, height: x } = s.floating;
            let p, h;
            c === "top" || c === "bottom"
              ? ((p = c),
                (h =
                  g ===
                  ((yield l.isRTL == null ? void 0 : l.isRTL(a.floating))
                    ? "start"
                    : "end")
                    ? "left"
                    : "right"))
              : ((h = c), (p = g === "end" ? "top" : "bottom"));
            const m = x - d.top - d.bottom,
              E = v - d.left - d.right,
              C = Ln(x - d[p], m),
              P = Ln(v - d[h], E),
              R = !n.middlewareData.shift;
            let N = C,
              A = P;
            if (
              ((r = n.middlewareData.shift) != null && r.enabled.x && (A = E),
              (o = n.middlewareData.shift) != null && o.enabled.y && (N = m),
              R && !g)
            ) {
              const $ = Ze(d.left, 0),
                H = Ze(d.right, 0),
                J = Ze(d.top, 0),
                z = Ze(d.bottom, 0);
              w
                ? (A =
                    v - 2 * ($ !== 0 || H !== 0 ? $ + H : Ze(d.left, d.right)))
                : (N =
                    x - 2 * (J !== 0 || z !== 0 ? J + z : Ze(d.top, d.bottom)));
            }
            yield u(b(S({}, n), { availableWidth: A, availableHeight: N }));
            const M = yield l.getDimensions(a.floating);
            return v !== M.width || x !== M.height
              ? { reset: { rects: !0 } }
              : {};
          });
        },
      }
    );
  };
function Zs() {
  return typeof window != "undefined";
}
function oo(e) {
  return Rm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Ft(e) {
  var t;
  return (t = (Rm(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Rm(e) {
  return Zs() ? e instanceof Node || e instanceof tt(e).Node : !1;
}
function kt(e) {
  return Zs() ? e instanceof Element || e instanceof tt(e).Element : !1;
}
function zt(e) {
  return Zs() ? e instanceof HTMLElement || e instanceof tt(e).HTMLElement : !1;
}
function Qd(e) {
  return !Zs() || typeof ShadowRoot == "undefined"
    ? !1
    : e instanceof ShadowRoot || e instanceof tt(e).ShadowRoot;
}
function ui(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Pt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function b1(e) {
  return ["table", "td", "th"].includes(oo(e));
}
function Js(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch (n) {
      return !1;
    }
  });
}
function rc(e) {
  const t = oc(),
    n = kt(e) ? Pt(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function N1(e) {
  let t = Dn(e);
  for (; zt(t) && !qr(t); ) {
    if (rc(t)) return t;
    if (Js(t)) return null;
    t = Dn(t);
  }
  return null;
}
function oc() {
  return typeof CSS == "undefined" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function qr(e) {
  return ["html", "body", "#document"].includes(oo(e));
}
function Pt(e) {
  return tt(e).getComputedStyle(e);
}
function el(e) {
  return kt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Dn(e) {
  if (oo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Qd(e) && e.host) || Ft(e);
  return Qd(t) ? t.host : t;
}
function _m(e) {
  const t = Dn(e);
  return qr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : zt(t) && ui(t)
    ? t
    : _m(t);
}
function Xo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = _m(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = tt(o);
  if (i) {
    const l = Ka(s);
    return t.concat(
      s,
      s.visualViewport || [],
      ui(o) ? o : [],
      l && n ? Xo(l) : []
    );
  }
  return t.concat(o, Xo(o, [], n));
}
function Ka(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function bm(e) {
  const t = Pt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = zt(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    l = Ts(n) !== i || Ts(r) !== s;
  return l && ((n = i), (r = s)), { width: n, height: r, $: l };
}
function ic(e) {
  return kt(e) ? e : e.contextElement;
}
function Mr(e) {
  const t = ic(e);
  if (!zt(t)) return Mn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = bm(t);
  let s = (i ? Ts(n.width) : n.width) / r,
    l = (i ? Ts(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const O1 = Mn(0);
function Nm(e) {
  const t = tt(e);
  return !oc() || !t.visualViewport
    ? O1
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function A1(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== tt(e)) ? !1 : t;
}
function or(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = ic(e);
  let s = Mn(1);
  t && (r ? kt(r) && (s = Mr(r)) : (s = Mr(e)));
  const l = A1(i, n, r) ? Nm(i) : Mn(0);
  let a = (o.left + l.x) / s.x,
    u = (o.top + l.y) / s.y,
    f = o.width / s.x,
    d = o.height / s.y;
  if (i) {
    const c = tt(i),
      g = r && kt(r) ? tt(r) : r;
    let w = c,
      v = Ka(w);
    for (; v && r && g !== w; ) {
      const x = Mr(v),
        p = v.getBoundingClientRect(),
        h = Pt(v),
        m = p.left + (v.clientLeft + parseFloat(h.paddingLeft)) * x.x,
        E = p.top + (v.clientTop + parseFloat(h.paddingTop)) * x.y;
      (a *= x.x),
        (u *= x.y),
        (f *= x.x),
        (d *= x.y),
        (a += m),
        (u += E),
        (w = tt(v)),
        (v = Ka(w));
    }
  }
  return _s({ width: f, height: d, x: a, y: u });
}
function L1(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = Ft(r),
    l = t ? Js(t.floating) : !1;
  if (r === s || (l && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = Mn(1);
  const f = Mn(0),
    d = zt(r);
  if (
    (d || (!d && !i)) &&
    ((oo(r) !== "body" || ui(s)) && (a = el(r)), zt(r))
  ) {
    const c = or(r);
    (u = Mr(r)), (f.x = c.x + r.clientLeft), (f.y = c.y + r.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + f.x,
    y: n.y * u.y - a.scrollTop * u.y + f.y,
  };
}
function M1(e) {
  return Array.from(e.getClientRects());
}
function Ya(e, t) {
  const n = el(e).scrollLeft;
  return t ? t.left + n : or(Ft(e)).left + n;
}
function I1(e) {
  const t = Ft(e),
    n = el(e),
    r = e.ownerDocument.body,
    o = Ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Ya(e);
  const l = -n.scrollTop;
  return (
    Pt(r).direction === "rtl" && (s += Ze(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: l }
  );
}
function D1(e, t) {
  const n = tt(e),
    r = Ft(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = oc();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: s, x: l, y: a };
}
function j1(e, t) {
  const n = or(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = zt(e) ? Mr(e) : Mn(1),
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: s, height: l, x: a, y: u };
}
function Kd(e, t, n) {
  let r;
  if (t === "viewport") r = D1(e, n);
  else if (t === "document") r = I1(Ft(e));
  else if (kt(t)) r = j1(t, n);
  else {
    const o = Nm(e);
    r = b(S({}, t), { x: t.x - o.x, y: t.y - o.y });
  }
  return _s(r);
}
function Om(e, t) {
  const n = Dn(e);
  return n === t || !kt(n) || qr(n)
    ? !1
    : Pt(n).position === "fixed" || Om(n, t);
}
function z1(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Xo(e, [], !1).filter((l) => kt(l) && oo(l) !== "body"),
    o = null;
  const i = Pt(e).position === "fixed";
  let s = i ? Dn(e) : e;
  for (; kt(s) && !qr(s); ) {
    const l = Pt(s),
      a = rc(s);
    !a && l.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (ui(s) && !a && Om(e, s))
      )
        ? (r = r.filter((f) => f !== s))
        : (o = l),
      (s = Dn(s));
  }
  return t.set(e, r), r;
}
function F1(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? Js(t)
          ? []
          : z1(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = s[0],
    a = s.reduce((u, f) => {
      const d = Kd(t, f, o);
      return (
        (u.top = Ze(d.top, u.top)),
        (u.right = Ln(d.right, u.right)),
        (u.bottom = Ln(d.bottom, u.bottom)),
        (u.left = Ze(d.left, u.left)),
        u
      );
    }, Kd(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function $1(e) {
  const { width: t, height: n } = bm(e);
  return { width: t, height: n };
}
function U1(e, t, n) {
  const r = zt(t),
    o = Ft(t),
    i = n === "fixed",
    s = or(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = Mn(0);
  if (r || (!r && !i))
    if (((oo(t) !== "body" || ui(o)) && (l = el(t)), r)) {
      const g = or(t, !0, i, t);
      (a.x = g.x + t.clientLeft), (a.y = g.y + t.clientTop);
    } else o && (a.x = Ya(o));
  let u = 0,
    f = 0;
  if (o && !r && !i) {
    const g = o.getBoundingClientRect();
    (f = g.top + l.scrollTop), (u = g.left + l.scrollLeft - Ya(o, g));
  }
  const d = s.left + l.scrollLeft - a.x - u,
    c = s.top + l.scrollTop - a.y - f;
  return { x: d, y: c, width: s.width, height: s.height };
}
function Bl(e) {
  return Pt(e).position === "static";
}
function Yd(e, t) {
  if (!zt(e) || Pt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Ft(e) === n && (n = n.ownerDocument.body), n;
}
function Am(e, t) {
  const n = tt(e);
  if (Js(e)) return n;
  if (!zt(e)) {
    let o = Dn(e);
    for (; o && !qr(o); ) {
      if (kt(o) && !Bl(o)) return o;
      o = Dn(o);
    }
    return n;
  }
  let r = Yd(e, t);
  for (; r && b1(r) && Bl(r); ) r = Yd(r, t);
  return r && qr(r) && Bl(r) && !rc(r) ? n : r || N1(e) || n;
}
const B1 = function (e) {
  return Se(this, null, function* () {
    const t = this.getOffsetParent || Am,
      n = this.getDimensions,
      r = yield n(e.floating);
    return {
      reference: U1(e.reference, yield t(e.floating), e.strategy),
      floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
  });
};
function V1(e) {
  return Pt(e).direction === "rtl";
}
const W1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: L1,
  getDocumentElement: Ft,
  getClippingRect: F1,
  getOffsetParent: Am,
  getElementRects: B1,
  getClientRects: M1,
  getDimensions: $1,
  getScale: Mr,
  isElement: kt,
  isRTL: V1,
};
function H1(e, t) {
  let n = null,
    r;
  const o = Ft(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const { left: u, top: f, width: d, height: c } = e.getBoundingClientRect();
    if ((l || t(), !d || !c)) return;
    const g = zi(f),
      w = zi(o.clientWidth - (u + d)),
      v = zi(o.clientHeight - (f + c)),
      x = zi(u),
      h = {
        rootMargin: -g + "px " + -w + "px " + -v + "px " + -x + "px",
        threshold: Ze(0, Ln(1, a)) || 1,
      };
    let m = !0;
    function E(C) {
      const P = C[0].intersectionRatio;
      if (P !== a) {
        if (!m) return s();
        P
          ? s(!1, P)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      m = !1;
    }
    try {
      n = new IntersectionObserver(E, b(S({}, h), { root: o.ownerDocument }));
    } catch (C) {
      n = new IntersectionObserver(E, h);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Q1(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = ic(e),
    f = o || i ? [...(u ? Xo(u) : []), ...Xo(t)] : [];
  f.forEach((p) => {
    o && p.addEventListener("scroll", n, { passive: !0 }),
      i && p.addEventListener("resize", n);
  });
  const d = u && l ? H1(u, n) : null;
  let c = -1,
    g = null;
  s &&
    ((g = new ResizeObserver((p) => {
      let [h] = p;
      h &&
        h.target === u &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(c),
        (c = requestAnimationFrame(() => {
          var m;
          (m = g) == null || m.observe(t);
        }))),
        n();
    })),
    u && !a && g.observe(u),
    g.observe(t));
  let w,
    v = a ? or(e) : null;
  a && x();
  function x() {
    const p = or(e);
    v &&
      (p.x !== v.x ||
        p.y !== v.y ||
        p.width !== v.width ||
        p.height !== v.height) &&
      n(),
      (v = p),
      (w = requestAnimationFrame(x));
  }
  return (
    n(),
    () => {
      var p;
      f.forEach((h) => {
        o && h.removeEventListener("scroll", n),
          i && h.removeEventListener("resize", n);
      }),
        d == null || d(),
        (p = g) == null || p.disconnect(),
        (g = null),
        a && cancelAnimationFrame(w);
    }
  );
}
const K1 = P1,
  Y1 = T1,
  G1 = S1,
  X1 = _1,
  q1 = C1,
  Gd = E1,
  Z1 = R1,
  J1 = (e, t, n) => {
    const r = new Map(),
      o = S({ platform: W1 }, n),
      i = b(S({}, o.platform), { _c: r });
    return x1(e, t, b(S({}, o), { platform: i }));
  };
var es = typeof document != "undefined" ? y.useLayoutEffect : y.useEffect;
function bs(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!bs(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !bs(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Lm(e) {
  return typeof window == "undefined"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xd(e, t) {
  const n = Lm(e);
  return Math.round(t * n) / n;
}
function Vl(e) {
  const t = y.useRef(e);
  return (
    es(() => {
      t.current = e;
    }),
    t
  );
}
function ex(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [f, d] = y.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [c, g] = y.useState(r);
  bs(c, r) || g(r);
  const [w, v] = y.useState(null),
    [x, p] = y.useState(null),
    h = y.useCallback((k) => {
      k !== P.current && ((P.current = k), v(k));
    }, []),
    m = y.useCallback((k) => {
      k !== R.current && ((R.current = k), p(k));
    }, []),
    E = i || w,
    C = s || x,
    P = y.useRef(null),
    R = y.useRef(null),
    N = y.useRef(f),
    A = a != null,
    M = Vl(a),
    U = Vl(o),
    $ = Vl(u),
    H = y.useCallback(() => {
      if (!P.current || !R.current) return;
      const k = { placement: t, strategy: n, middleware: c };
      U.current && (k.platform = U.current),
        J1(P.current, R.current, k).then((I) => {
          const j = b(S({}, I), { isPositioned: $.current !== !1 });
          J.current &&
            !bs(N.current, j) &&
            ((N.current = j),
            ai.flushSync(() => {
              d(j);
            }));
        });
    }, [c, t, n, U, $]);
  es(() => {
    u === !1 &&
      N.current.isPositioned &&
      ((N.current.isPositioned = !1),
      d((k) => b(S({}, k), { isPositioned: !1 })));
  }, [u]);
  const J = y.useRef(!1);
  es(
    () => (
      (J.current = !0),
      () => {
        J.current = !1;
      }
    ),
    []
  ),
    es(() => {
      if ((E && (P.current = E), C && (R.current = C), E && C)) {
        if (M.current) return M.current(E, C, H);
        H();
      }
    }, [E, C, H, M, A]);
  const z = y.useMemo(
      () => ({ reference: P, floating: R, setReference: h, setFloating: m }),
      [h, m]
    ),
    B = y.useMemo(() => ({ reference: E, floating: C }), [E, C]),
    X = y.useMemo(() => {
      const k = { position: n, left: 0, top: 0 };
      if (!B.floating) return k;
      const I = Xd(B.floating, f.x),
        j = Xd(B.floating, f.y);
      return l
        ? S(
            b(S({}, k), { transform: "translate(" + I + "px, " + j + "px)" }),
            Lm(B.floating) >= 1.5 && { willChange: "transform" }
          )
        : { position: n, left: I, top: j };
    }, [n, l, B.floating, f.x, f.y]);
  return y.useMemo(
    () => b(S({}, f), { update: H, refs: z, elements: B, floatingStyles: X }),
    [f, H, z, B, X]
  );
}
const tx = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Gd({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? Gd({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  nx = (e, t) => b(S({}, K1(e)), { options: [e, t] }),
  rx = (e, t) => b(S({}, Y1(e)), { options: [e, t] }),
  ox = (e, t) => b(S({}, Z1(e)), { options: [e, t] }),
  ix = (e, t) => b(S({}, G1(e)), { options: [e, t] }),
  sx = (e, t) => b(S({}, X1(e)), { options: [e, t] }),
  lx = (e, t) => b(S({}, q1(e)), { options: [e, t] }),
  ax = (e, t) => b(S({}, tx(e)), { options: [e, t] });
var ux = "Arrow",
  Mm = y.forwardRef((e, t) => {
    const s = e,
      { children: n, width: r = 10, height: o = 5 } = s,
      i = W(s, ["children", "width", "height"]);
    return T.jsx(
      Ye.svg,
      b(S({}, i), {
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild
          ? n
          : T.jsx("polygon", { points: "0,0 30,0 15,10" }),
      })
    );
  });
Mm.displayName = ux;
var cx = Mm;
function dx(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = y.createContext(s),
      a = n.length;
    n = [...n, s];
    function u(d) {
      const p = d,
        { scope: c, children: g } = p,
        w = W(p, ["scope", "children"]),
        v = (c == null ? void 0 : c[e][a]) || l,
        x = y.useMemo(() => w, Object.values(w));
      return T.jsx(v.Provider, { value: x, children: g });
    }
    function f(d, c) {
      const g = (c == null ? void 0 : c[e][a]) || l,
        w = y.useContext(g);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, f];
  }
  const o = () => {
    const i = n.map((s) => y.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return y.useMemo(
        () => ({ [`__scope${e}`]: b(S({}, l), { [e]: a }) }),
        [l, a]
      );
    };
  };
  return (o.scopeName = e), [r, fx(o, ...t)];
}
function fx(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const d = a(i)[`__scope${u}`];
        return S(S({}, l), d);
      }, {});
      return y.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function px(e) {
  const [t, n] = y.useState(void 0);
  return (
    rr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, l;
          if ("borderBoxSize" in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (s = u.inlineSize), (l = u.blockSize);
          } else (s = e.offsetWidth), (l = e.offsetHeight);
          n({ width: s, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Im = "Popper",
  [Dm, jm] = dx(Im),
  [PS, zm] = Dm(Im),
  Fm = "PopperAnchor",
  $m = y.forwardRef((e, t) => {
    const a = e,
      { __scopePopper: n, virtualRef: r } = a,
      o = W(a, ["__scopePopper", "virtualRef"]),
      i = zm(Fm, n),
      s = y.useRef(null),
      l = Ct(t, s);
    return (
      y.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : T.jsx(Ye.div, b(S({}, o), { ref: l }))
    );
  });
$m.displayName = Fm;
var sc = "PopperContent",
  [hx, mx] = Dm(sc),
  Um = y.forwardRef((e, t) => {
    var en, tn, nn, di, cr, fi, io, so;
    const pt = e,
      {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: f = 0,
        sticky: d = "partial",
        hideWhenDetached: c = !1,
        updatePositionStrategy: g = "optimized",
        onPlaced: w,
      } = pt,
      v = W(pt, [
        "__scopePopper",
        "side",
        "sideOffset",
        "align",
        "alignOffset",
        "arrowPadding",
        "avoidCollisions",
        "collisionBoundary",
        "collisionPadding",
        "sticky",
        "hideWhenDetached",
        "updatePositionStrategy",
        "onPlaced",
      ]),
      x = zm(sc, n),
      [p, h] = y.useState(null),
      m = Ct(t, (it) => h(it)),
      [E, C] = y.useState(null),
      P = px(E),
      R = (en = P == null ? void 0 : P.width) != null ? en : 0,
      N = (tn = P == null ? void 0 : P.height) != null ? tn : 0,
      A = r + (i !== "center" ? "-" + i : ""),
      M =
        typeof f == "number"
          ? f
          : S({ top: 0, right: 0, bottom: 0, left: 0 }, f),
      U = Array.isArray(u) ? u : [u],
      $ = U.length > 0,
      H = { padding: M, boundary: U.filter(gx), altBoundary: $ },
      {
        refs: J,
        floatingStyles: z,
        placement: B,
        isPositioned: X,
        middlewareData: k,
      } = ex({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...it) =>
          Q1(...it, { animationFrame: g === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          nx({ mainAxis: o + N, alignmentAxis: s }),
          a &&
            rx(
              S(
                {
                  mainAxis: !0,
                  crossAxis: !1,
                  limiter: d === "partial" ? ox() : void 0,
                },
                H
              )
            ),
          a && ix(S({}, H)),
          sx(
            b(S({}, H), {
              apply: ({
                elements: it,
                rects: pi,
                availableWidth: ll,
                availableHeight: Ue,
              }) => {
                const { width: rn, height: al } = pi.reference,
                  dr = it.floating.style;
                dr.setProperty("--radix-popper-available-width", `${ll}px`),
                  dr.setProperty("--radix-popper-available-height", `${Ue}px`),
                  dr.setProperty("--radix-popper-anchor-width", `${rn}px`),
                  dr.setProperty("--radix-popper-anchor-height", `${al}px`);
              },
            })
          ),
          E && ax({ element: E, padding: l }),
          yx({ arrowWidth: R, arrowHeight: N }),
          c && lx(S({ strategy: "referenceHidden" }, H)),
        ],
      }),
      [I, j] = Wm(B),
      D = jt(w);
    rr(() => {
      X && (D == null || D());
    }, [X, D]);
    const V = (nn = k.arrow) == null ? void 0 : nn.x,
      q = (di = k.arrow) == null ? void 0 : di.y,
      ie = ((cr = k.arrow) == null ? void 0 : cr.centerOffset) !== 0,
      [_e, te] = y.useState();
    return (
      rr(() => {
        p && te(window.getComputedStyle(p).zIndex);
      }, [p]),
      T.jsx("div", {
        ref: J.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: S(
          b(S({}, z), {
            transform: X ? z.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: _e,
            "--radix-popper-transform-origin": [
              (fi = k.transformOrigin) == null ? void 0 : fi.x,
              (io = k.transformOrigin) == null ? void 0 : io.y,
            ].join(" "),
          }),
          ((so = k.hide) == null ? void 0 : so.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }
        ),
        dir: e.dir,
        children: T.jsx(hx, {
          scope: n,
          placedSide: I,
          onArrowChange: C,
          arrowX: V,
          arrowY: q,
          shouldHideArrow: ie,
          children: T.jsx(
            Ye.div,
            b(S({ "data-side": I, "data-align": j }, v), {
              ref: m,
              style: b(S({}, v.style), { animation: X ? void 0 : "none" }),
            })
          ),
        }),
      })
    );
  });
Um.displayName = sc;
var Bm = "PopperArrow",
  vx = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Vm = y.forwardRef(function (t, n) {
    const l = t,
      { __scopePopper: r } = l,
      o = W(l, ["__scopePopper"]),
      i = mx(Bm, r),
      s = vx[i.placedSide];
    return T.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: T.jsx(
        cx,
        b(S({}, o), { ref: n, style: b(S({}, o.style), { display: "block" }) })
      ),
    });
  });
Vm.displayName = Bm;
function gx(e) {
  return e !== null;
}
var yx = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, p, h, m, E;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0,
      l = s ? 0 : e.arrowWidth,
      a = s ? 0 : e.arrowHeight,
      [u, f] = Wm(n),
      d = { start: "0%", center: "50%", end: "100%" }[f],
      c = ((h = (p = o.arrow) == null ? void 0 : p.x) != null ? h : 0) + l / 2,
      g = ((E = (m = o.arrow) == null ? void 0 : m.y) != null ? E : 0) + a / 2;
    let w = "",
      v = "";
    return (
      u === "bottom"
        ? ((w = s ? d : `${c}px`), (v = `${-a}px`))
        : u === "top"
        ? ((w = s ? d : `${c}px`), (v = `${r.floating.height + a}px`))
        : u === "right"
        ? ((w = `${-a}px`), (v = s ? d : `${g}px`))
        : u === "left" &&
          ((w = `${r.floating.width + a}px`), (v = s ? d : `${g}px`)),
      { data: { x: w, y: v } }
    );
  },
});
function Wm(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var wx = $m,
  xx = Um,
  Ex = Vm,
  [tl, TS] = Bh("Tooltip", [jm]),
  lc = jm(),
  Hm = "TooltipProvider",
  Sx = 700,
  qd = "tooltip.open",
  [Cx, Qm] = tl(Hm),
  Km = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Sx,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      [s, l] = y.useState(!0),
      a = y.useRef(!1),
      u = y.useRef(0);
    return (
      y.useEffect(() => {
        const f = u.current;
        return () => window.clearTimeout(f);
      }, []),
      T.jsx(Cx, {
        scope: t,
        isOpenDelayed: s,
        delayDuration: n,
        onOpen: y.useCallback(() => {
          window.clearTimeout(u.current), l(!1);
        }, []),
        onClose: y.useCallback(() => {
          window.clearTimeout(u.current),
            (u.current = window.setTimeout(() => l(!0), r));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: y.useCallback((f) => {
          a.current = f;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
Km.displayName = Hm;
var Ym = "Tooltip",
  [RS, nl] = tl(Ym),
  Ga = "TooltipTrigger",
  kx = y.forwardRef((e, t) => {
    const c = e,
      { __scopeTooltip: n } = c,
      r = W(c, ["__scopeTooltip"]),
      o = nl(Ga, n),
      i = Qm(Ga, n),
      s = lc(n),
      l = y.useRef(null),
      a = Ct(t, l, o.onTriggerChange),
      u = y.useRef(!1),
      f = y.useRef(!1),
      d = y.useCallback(() => (u.current = !1), []);
    return (
      y.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d]
      ),
      T.jsx(
        wx,
        b(S({ asChild: !0 }, s), {
          children: T.jsx(
            Ye.button,
            b(
              S(
                {
                  "aria-describedby": o.open ? o.contentId : void 0,
                  "data-state": o.stateAttribute,
                },
                r
              ),
              {
                ref: a,
                onPointerMove: xe(e.onPointerMove, (g) => {
                  g.pointerType !== "touch" &&
                    !f.current &&
                    !i.isPointerInTransitRef.current &&
                    (o.onTriggerEnter(), (f.current = !0));
                }),
                onPointerLeave: xe(e.onPointerLeave, () => {
                  o.onTriggerLeave(), (f.current = !1);
                }),
                onPointerDown: xe(e.onPointerDown, () => {
                  (u.current = !0),
                    document.addEventListener("pointerup", d, { once: !0 });
                }),
                onFocus: xe(e.onFocus, () => {
                  u.current || o.onOpen();
                }),
                onBlur: xe(e.onBlur, o.onClose),
                onClick: xe(e.onClick, o.onClose),
              }
            )
          ),
        })
      )
    );
  });
kx.displayName = Ga;
var Px = "TooltipPortal",
  [_S, Tx] = tl(Px, { forceMount: void 0 }),
  Zr = "TooltipContent",
  Gm = y.forwardRef((e, t) => {
    const n = Tx(Zr, e.__scopeTooltip),
      l = e,
      { forceMount: r = n.forceMount, side: o = "top" } = l,
      i = W(l, ["forceMount", "side"]),
      s = nl(Zr, e.__scopeTooltip);
    return T.jsx(Gu, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? T.jsx(Xm, b(S({ side: o }, i), { ref: t }))
        : T.jsx(Rx, b(S({ side: o }, i), { ref: t })),
    });
  }),
  Rx = y.forwardRef((e, t) => {
    const n = nl(Zr, e.__scopeTooltip),
      r = Qm(Zr, e.__scopeTooltip),
      o = y.useRef(null),
      i = Ct(t, o),
      [s, l] = y.useState(null),
      { trigger: a, onClose: u } = n,
      f = o.current,
      { onPointerInTransitChange: d } = r,
      c = y.useCallback(() => {
        l(null), d(!1);
      }, [d]),
      g = y.useCallback(
        (w, v) => {
          const x = w.currentTarget,
            p = { x: w.clientX, y: w.clientY },
            h = Ox(p, x.getBoundingClientRect()),
            m = Ax(p, h),
            E = Lx(v.getBoundingClientRect()),
            C = Ix([...m, ...E]);
          l(C), d(!0);
        },
        [d]
      );
    return (
      y.useEffect(() => () => c(), [c]),
      y.useEffect(() => {
        if (a && f) {
          const w = (x) => g(x, f),
            v = (x) => g(x, a);
          return (
            a.addEventListener("pointerleave", w),
            f.addEventListener("pointerleave", v),
            () => {
              a.removeEventListener("pointerleave", w),
                f.removeEventListener("pointerleave", v);
            }
          );
        }
      }, [a, f, g, c]),
      y.useEffect(() => {
        if (s) {
          const w = (v) => {
            const x = v.target,
              p = { x: v.clientX, y: v.clientY },
              h =
                (a == null ? void 0 : a.contains(x)) ||
                (f == null ? void 0 : f.contains(x)),
              m = !Mx(p, s);
            h ? c() : m && (c(), u());
          };
          return (
            document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
          );
        }
      }, [a, f, s, u, c]),
      T.jsx(Xm, b(S({}, e), { ref: i }))
    );
  }),
  [_x, bx] = tl(Ym, { isInside: !1 }),
  Xm = y.forwardRef((e, t) => {
    const d = e,
      {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
      } = d,
      l = W(d, [
        "__scopeTooltip",
        "children",
        "aria-label",
        "onEscapeKeyDown",
        "onPointerDownOutside",
      ]),
      a = nl(Zr, n),
      u = lc(n),
      { onClose: f } = a;
    return (
      y.useEffect(
        () => (
          document.addEventListener(qd, f),
          () => document.removeEventListener(qd, f)
        ),
        [f]
      ),
      y.useEffect(() => {
        if (a.trigger) {
          const c = (g) => {
            const w = g.target;
            w != null && w.contains(a.trigger) && f();
          };
          return (
            window.addEventListener("scroll", c, { capture: !0 }),
            () => window.removeEventListener("scroll", c, { capture: !0 })
          );
        }
      }, [a.trigger, f]),
      T.jsx(Yu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (c) => c.preventDefault(),
        onDismiss: f,
        children: T.jsxs(
          xx,
          b(S(S({ "data-state": a.stateAttribute }, u), l), {
            ref: t,
            style: b(S({}, l.style), {
              "--radix-tooltip-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height":
                "var(--radix-popper-anchor-height)",
            }),
            children: [
              T.jsx(Uh, { children: r }),
              T.jsx(_x, {
                scope: n,
                isInside: !0,
                children: T.jsx(N0, {
                  id: a.contentId,
                  role: "tooltip",
                  children: o || r,
                }),
              }),
            ],
          })
        ),
      })
    );
  });
Gm.displayName = Zr;
var qm = "TooltipArrow",
  Nx = y.forwardRef((e, t) => {
    const s = e,
      { __scopeTooltip: n } = s,
      r = W(s, ["__scopeTooltip"]),
      o = lc(n);
    return bx(qm, n).isInside ? null : T.jsx(Ex, b(S(S({}, o), r), { ref: t }));
  });
Nx.displayName = qm;
function Ox(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Ax(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Lx(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function Mx(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i].x,
      a = t[i].y,
      u = t[s].x,
      f = t[s].y;
    a > r != f > r && n < ((u - l) * (r - a)) / (f - a) + l && (o = !o);
  }
  return o;
}
function Ix(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    Dx(t)
  );
}
function Dx(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var jx = Km,
  Zm = Gm;
const zx = jx,
  Fx = y.forwardRef((o, r) => {
    var i = o,
      { className: e, sideOffset: t = 4 } = i,
      n = W(i, ["className", "sideOffset"]);
    return T.jsx(
      Zm,
      S(
        {
          ref: r,
          sideOffset: t,
          className: lr(
            "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e
          ),
        },
        n
      )
    );
  });
Fx.displayName = Zm.displayName;
var rl = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  ol = typeof window == "undefined" || "Deno" in globalThis;
function vt() {}
function $x(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ux(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Bx(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Zd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vx(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jd(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: l,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== ac(s, t.options)) return !1;
    } else if (!Zo(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function ef(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (qo(t.options.mutationKey) !== qo(i)) return !1;
    } else if (!Zo(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function ac(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || qo)(e);
}
function qo(e) {
  return JSON.stringify(e, (t, n) =>
    Xa(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function Zo(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !Zo(e[n], t[n]))
    : !1;
}
function Jm(e, t) {
  if (e === t) return e;
  const n = tf(e) && tf(t);
  if (n || (Xa(e) && Xa(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      l = n ? [] : {};
    let a = 0;
    for (let u = 0; u < s; u++) {
      const f = n ? u : i[u];
      ((!n && r.includes(f)) || n) && e[f] === void 0 && t[f] === void 0
        ? ((l[f] = void 0), a++)
        : ((l[f] = Jm(e[f], t[f])), l[f] === e[f] && e[f] !== void 0 && a++);
    }
    return o === s && a === o ? e : l;
  }
  return t;
}
function tf(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Xa(e) {
  if (!nf(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !nf(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function nf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Wx(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Hx(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Jm(e, t)
    : t;
}
function Qx(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Kx(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var uc = Symbol();
function ev(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === uc
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var Qn,
  hn,
  Ir,
  gf,
  Yx =
    ((gf = class extends rl {
      constructor() {
        super();
        ee(this, Qn);
        ee(this, hn);
        ee(this, Ir);
        Y(this, Ir, (t) => {
          if (!ol && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        _(this, hn) || this.setEventListener(_(this, Ir));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = _(this, hn)) == null || t.call(this), Y(this, hn, void 0));
      }
      setEventListener(t) {
        var n;
        Y(this, Ir, t),
          (n = _(this, hn)) == null || n.call(this),
          Y(
            this,
            hn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        _(this, Qn) !== t && (Y(this, Qn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof _(this, Qn) == "boolean"
          ? _(this, Qn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Qn = new WeakMap()),
    (hn = new WeakMap()),
    (Ir = new WeakMap()),
    gf),
  tv = new Yx(),
  Dr,
  mn,
  jr,
  yf,
  Gx =
    ((yf = class extends rl {
      constructor() {
        super();
        ee(this, Dr, !0);
        ee(this, mn);
        ee(this, jr);
        Y(this, jr, (t) => {
          if (!ol && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        _(this, mn) || this.setEventListener(_(this, jr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = _(this, mn)) == null || t.call(this), Y(this, mn, void 0));
      }
      setEventListener(t) {
        var n;
        Y(this, jr, t),
          (n = _(this, mn)) == null || n.call(this),
          Y(this, mn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        _(this, Dr) !== t &&
          (Y(this, Dr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return _(this, Dr);
      }
    }),
    (Dr = new WeakMap()),
    (mn = new WeakMap()),
    (jr = new WeakMap()),
    yf),
  Ns = new Gx();
function Xx() {
  let e, t;
  const n = new Promise((o, i) => {
    (e = o), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function qx(e) {
  return Math.min(1e3 * Sc(2, e), 3e4);
}
function nv(e) {
  return (e != null ? e : "online") === "online" ? Ns.isOnline() : !0;
}
var rv = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Wl(e) {
  return e instanceof rv;
}
function ov(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = Xx(),
    s = (v) => {
      var x;
      r || (c(new rv(v)), (x = e.abort) == null || x.call(e));
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      tv.isFocused() &&
      (e.networkMode === "always" || Ns.isOnline()) &&
      e.canRun(),
    f = () => nv(e.networkMode) && e.canRun(),
    d = (v) => {
      var x;
      r ||
        ((r = !0),
        (x = e.onSuccess) == null || x.call(e, v),
        o == null || o(),
        i.resolve(v));
    },
    c = (v) => {
      var x;
      r ||
        ((r = !0),
        (x = e.onError) == null || x.call(e, v),
        o == null || o(),
        i.reject(v));
    },
    g = () =>
      new Promise((v) => {
        var x;
        (o = (p) => {
          (r || u()) && v(p);
        }),
          (x = e.onPause) == null || x.call(e);
      }).then(() => {
        var v;
        (o = void 0), r || (v = e.onContinue) == null || v.call(e);
      }),
    w = () => {
      if (r) return;
      let v;
      const x = n === 0 ? e.initialPromise : void 0;
      try {
        v = x != null ? x : e.fn();
      } catch (p) {
        v = Promise.reject(p);
      }
      Promise.resolve(v)
        .then(d)
        .catch((p) => {
          var P, R, N;
          if (r) return;
          const h = (P = e.retry) != null ? P : ol ? 0 : 3,
            m = (R = e.retryDelay) != null ? R : qx,
            E = typeof m == "function" ? m(n, p) : m,
            C =
              h === !0 ||
              (typeof h == "number" && n < h) ||
              (typeof h == "function" && h(n, p));
          if (t || !C) {
            c(p);
            return;
          }
          n++,
            (N = e.onFail) == null || N.call(e, n, p),
            Wx(E)
              .then(() => (u() ? void 0 : g()))
              .then(() => {
                t ? c(p) : w();
              });
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: l,
    continueRetry: a,
    canStart: f,
    start: () => (f() ? w() : g().then(w), i),
  };
}
function Zx() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = (l) => setTimeout(l, 0);
  const i = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    s = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((a) => {
                n(a);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        t--, t || s();
      }
      return a;
    },
    batchCalls:
      (l) =>
      (...a) => {
        i(() => {
          l(...a);
        });
      },
    schedule: i,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var je = Zx(),
  Kn,
  wf,
  iv =
    ((wf = class {
      constructor() {
        ee(this, Kn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Ux(this.gcTime) &&
            Y(
              this,
              Kn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e != null ? e : ol ? 1 / 0 : 5 * 60 * 1e3
        );
      }
      clearGcTimeout() {
        _(this, Kn) && (clearTimeout(_(this, Kn)), Y(this, Kn, void 0));
      }
    }),
    (Kn = new WeakMap()),
    wf),
  zr,
  Fr,
  st,
  Ae,
  ti,
  Yn,
  gt,
  Ut,
  xf,
  Jx =
    ((xf = class extends iv {
      constructor(t) {
        var n;
        super();
        ee(this, gt);
        ee(this, zr);
        ee(this, Fr);
        ee(this, st);
        ee(this, Ae);
        ee(this, ti);
        ee(this, Yn);
        Y(this, Yn, !1),
          Y(this, ti, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          Y(this, st, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          Y(this, zr, tE(this.options)),
          (this.state = (n = t.state) != null ? n : _(this, zr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = _(this, Ae)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = S(S({}, _(this, ti)), t)),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          _(this, st).remove(this);
      }
      setData(t, n) {
        const r = Hx(this.state.data, t, this.options);
        return (
          be(this, gt, Ut).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        be(this, gt, Ut).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = _(this, Ae)) == null ? void 0 : r.promise;
        return (
          (o = _(this, Ae)) == null || o.cancel(t),
          n ? n.then(vt).catch(vt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(_(this, zr));
      }
      isActive() {
        return this.observers.some((t) => Vx(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === uc ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !Bx(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = _(this, Ae)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = _(this, Ae)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          _(this, st).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (_(this, Ae) &&
              (_(this, Yn)
                ? _(this, Ae).cancel({ revert: !0 })
                : _(this, Ae).cancelRetry()),
            this.scheduleGc()),
          _(this, st).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          be(this, gt, Ut).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var a, u, f;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (_(this, Ae))
            return _(this, Ae).continueRetry(), _(this, Ae).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const d = this.observers.find((c) => c.options.queryFn);
          d && this.setOptions(d.options);
        }
        const r = new AbortController(),
          o = (d) => {
            Object.defineProperty(d, "signal", {
              enumerable: !0,
              get: () => (Y(this, Yn, !0), r.signal),
            });
          },
          i = () => {
            const d = ev(this.options, n),
              c = { queryKey: this.queryKey, meta: this.meta };
            return (
              o(c),
              Y(this, Yn, !1),
              this.options.persister ? this.options.persister(d, c, this) : d(c)
            );
          },
          s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i,
          };
        o(s),
          (a = this.options.behavior) == null || a.onFetch(s, this),
          Y(this, Fr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = s.fetchOptions) == null ? void 0 : u.meta)) &&
            be(this, gt, Ut).call(this, {
              type: "fetch",
              meta: (f = s.fetchOptions) == null ? void 0 : f.meta,
            });
        const l = (d) => {
          var c, g, w, v;
          (Wl(d) && d.silent) ||
            be(this, gt, Ut).call(this, { type: "error", error: d }),
            Wl(d) ||
              ((g = (c = _(this, st).config).onError) == null ||
                g.call(c, d, this),
              (v = (w = _(this, st).config).onSettled) == null ||
                v.call(w, this.state.data, d, this)),
            this.scheduleGc();
        };
        return (
          Y(
            this,
            Ae,
            ov({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: s.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (d) => {
                var c, g, w, v;
                if (d === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(d);
                } catch (x) {
                  l(x);
                  return;
                }
                (g = (c = _(this, st).config).onSuccess) == null ||
                  g.call(c, d, this),
                  (v = (w = _(this, st).config).onSettled) == null ||
                    v.call(w, d, this.state.error, this),
                  this.scheduleGc();
              },
              onError: l,
              onFail: (d, c) => {
                be(this, gt, Ut).call(this, {
                  type: "failed",
                  failureCount: d,
                  error: c,
                });
              },
              onPause: () => {
                be(this, gt, Ut).call(this, { type: "pause" });
              },
              onContinue: () => {
                be(this, gt, Ut).call(this, { type: "continue" });
              },
              retry: s.options.retry,
              retryDelay: s.options.retryDelay,
              networkMode: s.options.networkMode,
              canRun: () => !0,
            })
          ),
          _(this, Ae).start()
        );
      }
    }),
    (zr = new WeakMap()),
    (Fr = new WeakMap()),
    (st = new WeakMap()),
    (Ae = new WeakMap()),
    (ti = new WeakMap()),
    (Yn = new WeakMap()),
    (gt = new WeakSet()),
    (Ut = function (t) {
      const n = (r) => {
        var o, i;
        switch (t.type) {
          case "failed":
            return b(S({}, r), {
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            });
          case "pause":
            return b(S({}, r), { fetchStatus: "paused" });
          case "continue":
            return b(S({}, r), { fetchStatus: "fetching" });
          case "fetch":
            return b(S(S({}, r), eE(r.data, this.options)), {
              fetchMeta: (o = t.meta) != null ? o : null,
            });
          case "success":
            return S(
              b(S({}, r), {
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: (i = t.dataUpdatedAt) != null ? i : Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
              }),
              !t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }
            );
          case "error":
            const s = t.error;
            return Wl(s) && s.revert && _(this, Fr)
              ? b(S({}, _(this, Fr)), { fetchStatus: "idle" })
              : b(S({}, r), {
                  error: s,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                });
          case "invalidate":
            return b(S({}, r), { isInvalidated: !0 });
          case "setState":
            return S(S({}, r), t.state);
        }
      };
      (this.state = n(this.state)),
        je.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            _(this, st).notify({ query: this, type: "updated", action: t });
        });
    }),
    xf);
function eE(e, t) {
  return S(
    {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: nv(t.networkMode) ? "fetching" : "paused",
    },
    e === void 0 && { error: null, status: "pending" }
  );
}
function tE(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r != null ? r : Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Ot,
  Ef,
  nE =
    ((Ef = class extends rl {
      constructor(t = {}) {
        super();
        ee(this, Ot);
        (this.config = t), Y(this, Ot, new Map());
      }
      build(t, n, r) {
        var l;
        const o = n.queryKey,
          i = (l = n.queryHash) != null ? l : ac(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new Jx({
              cache: this,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        _(this, Ot).has(t.queryHash) ||
          (_(this, Ot).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = _(this, Ot).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && _(this, Ot).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        je.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return _(this, Ot).get(t);
      }
      getAll() {
        return [..._(this, Ot).values()];
      }
      find(t) {
        const n = S({ exact: !0 }, t);
        return this.getAll().find((r) => Jd(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Jd(t, r)) : n;
      }
      notify(t) {
        je.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        je.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        je.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Ot = new WeakMap()),
    Ef),
  At,
  Ie,
  Gn,
  Lt,
  un,
  Sf,
  rE =
    ((Sf = class extends iv {
      constructor(t) {
        super();
        ee(this, Lt);
        ee(this, At);
        ee(this, Ie);
        ee(this, Gn);
        (this.mutationId = t.mutationId),
          Y(this, Ie, t.mutationCache),
          Y(this, At, []),
          (this.state = t.state || oE()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        _(this, At).includes(t) ||
          (_(this, At).push(t),
          this.clearGcTimeout(),
          _(this, Ie).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        Y(
          this,
          At,
          _(this, At).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          _(this, Ie).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        _(this, At).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : _(this, Ie).remove(this));
      }
      continue() {
        var t, n;
        return (n = (t = _(this, Gn)) == null ? void 0 : t.continue()) != null
          ? n
          : this.execute(this.state.variables);
      }
      execute(t) {
        return Se(this, null, function* () {
          var o, i, s, l, a, u, f, d, c, g, w, v, x, p, h, m, E, C, P, R, N;
          Y(
            this,
            Gn,
            ov({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t)
                  : Promise.reject(new Error("No mutationFn found")),
              onFail: (A, M) => {
                be(this, Lt, un).call(this, {
                  type: "failed",
                  failureCount: A,
                  error: M,
                });
              },
              onPause: () => {
                be(this, Lt, un).call(this, { type: "pause" });
              },
              onContinue: () => {
                be(this, Lt, un).call(this, { type: "continue" });
              },
              retry: (o = this.options.retry) != null ? o : 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => _(this, Ie).canRun(this),
            })
          );
          const n = this.state.status === "pending",
            r = !_(this, Gn).canStart();
          try {
            if (!n) {
              be(this, Lt, un).call(this, {
                type: "pending",
                variables: t,
                isPaused: r,
              }),
                yield (s = (i = _(this, Ie).config).onMutate) == null
                  ? void 0
                  : s.call(i, t, this);
              const M = yield (a = (l = this.options).onMutate) == null
                ? void 0
                : a.call(l, t);
              M !== this.state.context &&
                be(this, Lt, un).call(this, {
                  type: "pending",
                  context: M,
                  variables: t,
                  isPaused: r,
                });
            }
            const A = yield _(this, Gn).start();
            return (
              yield (f = (u = _(this, Ie).config).onSuccess) == null
                ? void 0
                : f.call(u, A, t, this.state.context, this),
              yield (c = (d = this.options).onSuccess) == null
                ? void 0
                : c.call(d, A, t, this.state.context),
              yield (w = (g = _(this, Ie).config).onSettled) == null
                ? void 0
                : w.call(
                    g,
                    A,
                    null,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
              yield (x = (v = this.options).onSettled) == null
                ? void 0
                : x.call(v, A, null, t, this.state.context),
              be(this, Lt, un).call(this, { type: "success", data: A }),
              A
            );
          } catch (A) {
            try {
              throw (
                (yield (h = (p = _(this, Ie).config).onError) == null
                  ? void 0
                  : h.call(p, A, t, this.state.context, this),
                yield (E = (m = this.options).onError) == null
                  ? void 0
                  : E.call(m, A, t, this.state.context),
                yield (P = (C = _(this, Ie).config).onSettled) == null
                  ? void 0
                  : P.call(
                      C,
                      void 0,
                      A,
                      this.state.variables,
                      this.state.context,
                      this
                    ),
                yield (N = (R = this.options).onSettled) == null
                  ? void 0
                  : N.call(R, void 0, A, t, this.state.context),
                A)
              );
            } finally {
              be(this, Lt, un).call(this, { type: "error", error: A });
            }
          } finally {
            _(this, Ie).runNext(this);
          }
        });
      }
    }),
    (At = new WeakMap()),
    (Ie = new WeakMap()),
    (Gn = new WeakMap()),
    (Lt = new WeakSet()),
    (un = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return b(S({}, r), {
              failureCount: t.failureCount,
              failureReason: t.error,
            });
          case "pause":
            return b(S({}, r), { isPaused: !0 });
          case "continue":
            return b(S({}, r), { isPaused: !1 });
          case "pending":
            return b(S({}, r), {
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            });
          case "success":
            return b(S({}, r), {
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            });
          case "error":
            return b(S({}, r), {
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            });
        }
      };
      (this.state = n(this.state)),
        je.batch(() => {
          _(this, At).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            _(this, Ie).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Sf);
function oE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Ge,
  ni,
  Cf,
  iE =
    ((Cf = class extends rl {
      constructor(t = {}) {
        super();
        ee(this, Ge);
        ee(this, ni);
        (this.config = t), Y(this, Ge, new Map()), Y(this, ni, Date.now());
      }
      build(t, n, r) {
        const o = new rE({
          mutationCache: this,
          mutationId: ++gi(this, ni)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        var o;
        const n = Fi(t),
          r = (o = _(this, Ge).get(n)) != null ? o : [];
        r.push(t),
          _(this, Ge).set(n, r),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var r;
        const n = Fi(t);
        if (_(this, Ge).has(n)) {
          const o =
            (r = _(this, Ge).get(n)) == null
              ? void 0
              : r.filter((i) => i !== t);
          o && (o.length === 0 ? _(this, Ge).delete(n) : _(this, Ge).set(n, o));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = _(this, Ge).get(Fi(t))) == null
            ? void 0
            : r.find((o) => o.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var r, o;
        const n =
          (r = _(this, Ge).get(Fi(t))) == null
            ? void 0
            : r.find((i) => i !== t && i.state.isPaused);
        return (o = n == null ? void 0 : n.continue()) != null
          ? o
          : Promise.resolve();
      }
      clear() {
        je.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [..._(this, Ge).values()].flat();
      }
      find(t) {
        const n = S({ exact: !0 }, t);
        return this.getAll().find((r) => ef(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => ef(t, n));
      }
      notify(t) {
        je.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return je.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(vt)))
        );
      }
    }),
    (Ge = new WeakMap()),
    (ni = new WeakMap()),
    Cf);
function Fi(e) {
  var t, n;
  return (n = (t = e.options.scope) == null ? void 0 : t.id) != null
    ? n
    : String(e.mutationId);
}
function rf(e) {
  return {
    onFetch: (t, n) => {
      var f, d, c, g, w;
      const r = t.options,
        o =
          (c =
            (d = (f = t.fetchOptions) == null ? void 0 : f.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : c.direction,
        i = ((g = t.state.data) == null ? void 0 : g.pages) || [],
        s = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = () =>
        Se(this, null, function* () {
          var m;
          let v = !1;
          const x = (E) => {
              Object.defineProperty(E, "signal", {
                enumerable: !0,
                get: () => (
                  t.signal.aborted
                    ? (v = !0)
                    : t.signal.addEventListener("abort", () => {
                        v = !0;
                      }),
                  t.signal
                ),
              });
            },
            p = ev(t.options, t.fetchOptions),
            h = (E, C, P) =>
              Se(this, null, function* () {
                if (v) return Promise.reject();
                if (C == null && E.pages.length) return Promise.resolve(E);
                const R = {
                  queryKey: t.queryKey,
                  pageParam: C,
                  direction: P ? "backward" : "forward",
                  meta: t.options.meta,
                };
                x(R);
                const N = yield p(R),
                  { maxPages: A } = t.options,
                  M = P ? Kx : Qx;
                return {
                  pages: M(E.pages, N, A),
                  pageParams: M(E.pageParams, C, A),
                };
              });
          if (o && i.length) {
            const E = o === "backward",
              C = E ? sE : of,
              P = { pages: i, pageParams: s },
              R = C(r, P);
            l = yield h(P, R, E);
          } else {
            const E = e != null ? e : i.length;
            do {
              const C =
                a === 0
                  ? (m = s[0]) != null
                    ? m
                    : r.initialPageParam
                  : of(r, l);
              if (a > 0 && C == null) break;
              (l = yield h(l, C)), a++;
            } while (a < E);
          }
          return l;
        });
      t.options.persister
        ? (t.fetchFn = () => {
            var v, x;
            return (x = (v = t.options).persister) == null
              ? void 0
              : x.call(
                  v,
                  u,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function of(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function sE(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var he,
  vn,
  gn,
  $r,
  Ur,
  yn,
  Br,
  Vr,
  kf,
  lE =
    ((kf = class {
      constructor(e = {}) {
        ee(this, he);
        ee(this, vn);
        ee(this, gn);
        ee(this, $r);
        ee(this, Ur);
        ee(this, yn);
        ee(this, Br);
        ee(this, Vr);
        Y(this, he, e.queryCache || new nE()),
          Y(this, vn, e.mutationCache || new iE()),
          Y(this, gn, e.defaultOptions || {}),
          Y(this, $r, new Map()),
          Y(this, Ur, new Map()),
          Y(this, yn, 0);
      }
      mount() {
        gi(this, yn)._++,
          _(this, yn) === 1 &&
            (Y(
              this,
              Br,
              tv.subscribe((e) =>
                Se(this, null, function* () {
                  e &&
                    (yield this.resumePausedMutations(), _(this, he).onFocus());
                })
              )
            ),
            Y(
              this,
              Vr,
              Ns.subscribe((e) =>
                Se(this, null, function* () {
                  e &&
                    (yield this.resumePausedMutations(),
                    _(this, he).onOnline());
                })
              )
            ));
      }
      unmount() {
        var e, t;
        gi(this, yn)._--,
          _(this, yn) === 0 &&
            ((e = _(this, Br)) == null || e.call(this),
            Y(this, Br, void 0),
            (t = _(this, Vr)) == null || t.call(this),
            Y(this, Vr, void 0));
      }
      isFetching(e) {
        return _(this, he).findAll(b(S({}, e), { fetchStatus: "fetching" }))
          .length;
      }
      isMutating(e) {
        return _(this, vn).findAll(b(S({}, e), { status: "pending" })).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = _(this, he).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = _(this, he).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(Zd(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return _(this, he)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = _(this, he).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = $x(t, i);
        if (s !== void 0)
          return _(this, he)
            .build(this, r)
            .setData(s, b(S({}, n), { manual: !0 }));
      }
      setQueriesData(e, t, n) {
        return je.batch(() =>
          _(this, he)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = _(this, he).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = _(this, he);
        je.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = _(this, he),
          r = S({ type: "active" }, e);
        return je.batch(
          () => (
            n.findAll(e).forEach((o) => {
              o.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = S({ revert: !0 }, t),
          r = je.batch(() =>
            _(this, he)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(vt).catch(vt);
      }
      invalidateQueries(e = {}, t = {}) {
        return je.batch(() => {
          var r, o;
          if (
            (_(this, he)
              .findAll(e)
              .forEach((i) => {
                i.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = b(S({}, e), {
            type:
              (o = (r = e.refetchType) != null ? r : e.type) != null
                ? o
                : "active",
          });
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        var o;
        const n = b(S({}, t), {
            cancelRefetch:
              (o = t == null ? void 0 : t.cancelRefetch) != null ? o : !0,
          }),
          r = je.batch(() =>
            _(this, he)
              .findAll(e)
              .filter((i) => !i.isDisabled())
              .map((i) => {
                let s = i.fetch(void 0, n);
                return (
                  n.throwOnError || (s = s.catch(vt)),
                  i.state.fetchStatus === "paused" ? Promise.resolve() : s
                );
              })
          );
        return Promise.all(r).then(vt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = _(this, he).build(this, t);
        return n.isStaleByTime(Zd(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(vt).catch(vt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = rf(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(vt).catch(vt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = rf(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Ns.isOnline()
          ? _(this, vn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return _(this, he);
      }
      getMutationCache() {
        return _(this, vn);
      }
      getDefaultOptions() {
        return _(this, gn);
      }
      setDefaultOptions(e) {
        Y(this, gn, e);
      }
      setQueryDefaults(e, t) {
        _(this, $r).set(qo(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [..._(this, $r).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Zo(e, r.queryKey) && (n = S(S({}, n), r.defaultOptions));
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        _(this, Ur).set(qo(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [..._(this, Ur).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Zo(e, r.mutationKey) && (n = S(S({}, n), r.defaultOptions));
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = b(
          S(
            S(S({}, _(this, gn).queries), this.getQueryDefaults(e.queryKey)),
            e
          ),
          { _defaulted: !0 }
        );
        return (
          t.queryHash || (t.queryHash = ac(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === uc && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : b(
              S(
                S(
                  S({}, _(this, gn).mutations),
                  (e == null ? void 0 : e.mutationKey) &&
                    this.getMutationDefaults(e.mutationKey)
                ),
                e
              ),
              { _defaulted: !0 }
            );
      }
      clear() {
        _(this, he).clear(), _(this, vn).clear();
      }
    }),
    (he = new WeakMap()),
    (vn = new WeakMap()),
    (gn = new WeakMap()),
    ($r = new WeakMap()),
    (Ur = new WeakMap()),
    (yn = new WeakMap()),
    (Br = new WeakMap()),
    (Vr = new WeakMap()),
    kf),
  aE = y.createContext(void 0),
  uE = ({ client: e, children: t }) => (
    y.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    T.jsx(aE.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Jo() {
  return (
    (Jo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Jo.apply(this, arguments)
  );
}
var En;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(En || (En = {}));
const sf = "popstate";
function cE(e) {
  e === void 0 && (e = {});
  function t(o, i) {
    let {
      pathname: s = "/",
      search: l = "",
      hash: a = "",
    } = ar(o.location.hash.substr(1));
    return (
      !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s),
      qa(
        "",
        { pathname: s, search: l, hash: a },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default"
      )
    );
  }
  function n(o, i) {
    let s = o.document.querySelector("base"),
      l = "";
    if (s && s.getAttribute("href")) {
      let a = o.location.href,
        u = a.indexOf("#");
      l = u === -1 ? a : a.slice(0, u);
    }
    return l + "#" + (typeof i == "string" ? i : Os(i));
  }
  function r(o, i) {
    cc(
      o.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")"
    );
  }
  return fE(t, n, r, e);
}
function ye(e, t) {
  if (e === !1 || e === null || typeof e == "undefined") throw new Error(t);
}
function cc(e, t) {
  if (!e) {
    typeof console != "undefined" && console.warn(t);
    try {
      throw new Error(t);
    } catch (n) {}
  }
}
function dE() {
  return Math.random().toString(36).substr(2, 8);
}
function lf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function qa(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Jo(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ar(t) : t,
      { state: n, key: (t && t.key) || r || dE() }
    )
  );
}
function Os(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ar(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function fE(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    l = En.Pop,
    a = null,
    u = f();
  u == null && ((u = 0), s.replaceState(Jo({}, s.state, { idx: u }), ""));
  function f() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    l = En.Pop;
    let x = f(),
      p = x == null ? null : x - u;
    (u = x), a && a({ action: l, location: v.location, delta: p });
  }
  function c(x, p) {
    l = En.Push;
    let h = qa(v.location, x, p);
    n && n(h, x), (u = f() + 1);
    let m = lf(h, u),
      E = v.createHref(h);
    try {
      s.pushState(m, "", E);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(E);
    }
    i && a && a({ action: l, location: v.location, delta: 1 });
  }
  function g(x, p) {
    l = En.Replace;
    let h = qa(v.location, x, p);
    n && n(h, x), (u = f());
    let m = lf(h, u),
      E = v.createHref(h);
    s.replaceState(m, "", E),
      i && a && a({ action: l, location: v.location, delta: 0 });
  }
  function w(x) {
    let p = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof x == "string" ? x : Os(x);
    return (
      (h = h.replace(/ $/, "%20")),
      ye(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, p)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(o, s);
    },
    listen(x) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(sf, d),
        (a = x),
        () => {
          o.removeEventListener(sf, d), (a = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: w,
    encodeLocation(x) {
      let p = w(x);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: c,
    replace: g,
    go(x) {
      return s.go(x);
    },
  };
  return v;
}
var af;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(af || (af = {}));
function pE(e, t, n) {
  return n === void 0 && (n = "/"), hE(e, t, n, !1);
}
function hE(e, t, n, r) {
  let o = typeof t == "string" ? ar(t) : t,
    i = dc(o.pathname || "/", n);
  if (i == null) return null;
  let s = sv(e);
  mE(s);
  let l = null;
  for (let a = 0; l == null && a < s.length; ++a) {
    let u = TE(i);
    l = kE(s[a], u, r);
  }
  return l;
}
function sv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, l) => {
    let a = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (ye(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Nn([r, a.relativePath]),
      f = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (ye(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      sv(i.children, t, f, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: SE(u, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, s) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
      else for (let a of lv(i.path)) o(i, s, a);
    }),
    t
  );
}
function lv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = lv(r.join("/")),
    l = [];
  return (
    l.push(...s.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && l.push(...s),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function mE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : CE(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const vE = /^:[\w-]+$/,
  gE = 3,
  yE = 2,
  wE = 1,
  xE = 10,
  EE = -2,
  uf = (e) => e === "*";
function SE(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(uf) && (r += EE),
    t && (r += yE),
    n
      .filter((o) => !uf(o))
      .reduce((o, i) => o + (vE.test(i) ? gE : i === "" ? wE : xE), r)
  );
}
function CE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function kE(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      f = i === "/" ? t : t.slice(i.length) || "/",
      d = cf(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        f
      ),
      c = a.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = cf(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          f
        )),
      !d)
    )
      return null;
    Object.assign(o, d.params),
      s.push({
        params: o,
        pathname: Nn([i, d.pathname]),
        pathnameBase: NE(Nn([i, d.pathnameBase])),
        route: c,
      }),
      d.pathnameBase !== "/" && (i = Nn([i, d.pathnameBase]));
  }
  return s;
}
function cf(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = PE(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, f, d) => {
      let { paramName: c, isOptional: g } = f;
      if (c === "*") {
        let v = l[d] || "";
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const w = l[d];
      return (
        g && !w ? (u[c] = void 0) : (u[c] = (w || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function PE(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    cc(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function TE(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      cc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function dc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function RE(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? ar(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : _E(n, t)) : t,
    search: OE(r),
    hash: AE(o),
  };
}
function _E(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Hl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function bE(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function av(e, t) {
  let n = bE(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function uv(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = ar(e))
    : ((o = Jo({}, e)),
      ye(
        !o.pathname || !o.pathname.includes("?"),
        Hl("?", "pathname", "search", o)
      ),
      ye(
        !o.pathname || !o.pathname.includes("#"),
        Hl("#", "pathname", "hash", o)
      ),
      ye(!o.search || !o.search.includes("#"), Hl("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    l;
  if (s == null) l = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith("..")) {
      let c = s.split("/");
      for (; c[0] === ".."; ) c.shift(), (d -= 1);
      o.pathname = c.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let a = RE(o, l),
    u = s && s !== "/" && s.endsWith("/"),
    f = (i || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || f) && (a.pathname += "/"), a;
}
const Nn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  NE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  OE = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  AE = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function LE(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const cv = ["post", "put", "patch", "delete"];
new Set(cv);
const ME = ["get", ...cv];
new Set(ME);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ei() {
  return (
    (ei = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ei.apply(this, arguments)
  );
}
const fc = y.createContext(null),
  IE = y.createContext(null),
  ur = y.createContext(null),
  il = y.createContext(null),
  $n = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  dv = y.createContext(null);
function DE(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ci() || ye(!1);
  let { basename: r, navigator: o } = y.useContext(ur),
    { hash: i, pathname: s, search: l } = pv(e, { relative: n }),
    a = s;
  return (
    r !== "/" && (a = s === "/" ? r : Nn([r, s])),
    o.createHref({ pathname: a, search: l, hash: i })
  );
}
function ci() {
  return y.useContext(il) != null;
}
function sl() {
  return ci() || ye(!1), y.useContext(il).location;
}
function fv(e) {
  y.useContext(ur).static || y.useLayoutEffect(e);
}
function jE() {
  let { isDataRoute: e } = y.useContext($n);
  return e ? ZE() : zE();
}
function zE() {
  ci() || ye(!1);
  let e = y.useContext(fc),
    { basename: t, future: n, navigator: r } = y.useContext(ur),
    { matches: o } = y.useContext($n),
    { pathname: i } = sl(),
    s = JSON.stringify(av(o, n.v7_relativeSplatPath)),
    l = y.useRef(!1);
  return (
    fv(() => {
      l.current = !0;
    }),
    y.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = uv(u, JSON.parse(s), i, f.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Nn([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f);
      },
      [t, r, s, i, e]
    )
  );
}
const FE = y.createContext(null);
function $E(e) {
  let t = y.useContext($n).outlet;
  return t && y.createElement(FE.Provider, { value: e }, t);
}
function pv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(ur),
    { matches: o } = y.useContext($n),
    { pathname: i } = sl(),
    s = JSON.stringify(av(o, r.v7_relativeSplatPath));
  return y.useMemo(() => uv(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function UE(e, t) {
  return BE(e, t);
}
function BE(e, t, n, r) {
  ci() || ye(!1);
  let { navigator: o } = y.useContext(ur),
    { matches: i } = y.useContext($n),
    s = i[i.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let u = sl(),
    f;
  if (t) {
    var d;
    let x = typeof t == "string" ? ar(t) : t;
    a === "/" || ((d = x.pathname) != null && d.startsWith(a)) || ye(!1),
      (f = x);
  } else f = u;
  let c = f.pathname || "/",
    g = c;
  if (a !== "/") {
    let x = a.replace(/^\//, "").split("/");
    g = "/" + c.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let w = pE(e, { pathname: g }),
    v = KE(
      w &&
        w.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, l, x.params),
            pathname: Nn([
              a,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? a
                : Nn([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && v
    ? y.createElement(
        il.Provider,
        {
          value: {
            location: ei(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f
            ),
            navigationType: En.Pop,
          },
        },
        v
      )
    : v;
}
function VE() {
  let e = qE(),
    t = LE(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? y.createElement("pre", { style: o }, n) : null,
    null
  );
}
const WE = y.createElement(VE, null);
class HE extends y.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? y.createElement(
          $n.Provider,
          { value: this.props.routeContext },
          y.createElement(dv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function QE(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = y.useContext(fc);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement($n.Provider, { value: t }, r)
  );
}
function KE(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let f = s.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0
    );
    f >= 0 || ye(!1), (s = s.slice(0, Math.min(s.length, f + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < s.length; f++) {
      let d = s[f];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f),
        d.route.id)
      ) {
        let { loaderData: c, errors: g } = n,
          w =
            d.route.loader &&
            c[d.route.id] === void 0 &&
            (!g || g[d.route.id] === void 0);
        if (d.route.lazy || w) {
          (a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((f, d, c) => {
    let g,
      w = !1,
      v = null,
      x = null;
    n &&
      ((g = l && d.route.id ? l[d.route.id] : void 0),
      (v = d.route.errorElement || WE),
      a &&
        (u < 0 && c === 0
          ? ((w = !0), (x = null))
          : u === c &&
            ((w = !0), (x = d.route.hydrateFallbackElement || null))));
    let p = t.concat(s.slice(0, c + 1)),
      h = () => {
        let m;
        return (
          g
            ? (m = v)
            : w
            ? (m = x)
            : d.route.Component
            ? (m = y.createElement(d.route.Component, null))
            : d.route.element
            ? (m = d.route.element)
            : (m = f),
          y.createElement(QE, {
            match: d,
            routeContext: { outlet: f, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || c === 0)
      ? y.createElement(HE, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: g,
          children: h(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var hv = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(hv || {}),
  As = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(As || {});
function YE(e) {
  let t = y.useContext(fc);
  return t || ye(!1), t;
}
function GE(e) {
  let t = y.useContext(IE);
  return t || ye(!1), t;
}
function XE(e) {
  let t = y.useContext($n);
  return t || ye(!1), t;
}
function mv(e) {
  let t = XE(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ye(!1), n.route.id;
}
function qE() {
  var e;
  let t = y.useContext(dv),
    n = GE(As.UseRouteError),
    r = mv(As.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ZE() {
  let { router: e } = YE(hv.UseNavigateStable),
    t = mv(As.UseNavigateStable),
    n = y.useRef(!1);
  return (
    fv(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, ei({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function bS(e) {
  return $E(e.context);
}
function Be(e) {
  ye(!1);
}
function JE(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = En.Pop,
    navigator: i,
    static: s = !1,
    future: l,
  } = e;
  ci() && ye(!1);
  let a = t.replace(/^\/*/, "/"),
    u = y.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: s,
        future: ei({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, i, s]
    );
  typeof r == "string" && (r = ar(r));
  let {
      pathname: f = "/",
      search: d = "",
      hash: c = "",
      state: g = null,
      key: w = "default",
    } = r,
    v = y.useMemo(() => {
      let x = dc(f, a);
      return x == null
        ? null
        : {
            location: { pathname: x, search: d, hash: c, state: g, key: w },
            navigationType: o,
          };
    }, [a, f, d, c, g, w, o]);
  return v == null
    ? null
    : y.createElement(
        ur.Provider,
        { value: u },
        y.createElement(il.Provider, { children: n, value: v })
      );
}
function eS(e) {
  let { children: t, location: n } = e;
  return UE(Za(t), n);
}
new Promise(() => {});
function Za(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    y.Children.forEach(e, (r, o) => {
      if (!y.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === y.Fragment) {
        n.push.apply(n, Za(r.props.children, i));
        return;
      }
      r.type !== Be && ye(!1), !r.props.index || !r.props.children || ye(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Za(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ja() {
  return (
    (Ja = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ja.apply(this, arguments)
  );
}
function tS(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function nS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function rS(e, t) {
  return e.button === 0 && (!t || t === "_self") && !nS(e);
}
const oS = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  iS = "6";
try {
  window.__reactRouterVersion = iS;
} catch (e) {}
const sS = "startTransition",
  df = $v[sS];
function lS(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = y.useRef();
  i.current == null && (i.current = cE({ window: o, v5Compat: !0 }));
  let s = i.current,
    [l, a] = y.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    f = y.useCallback(
      (d) => {
        u && df ? df(() => a(d)) : a(d);
      },
      [a, u]
    );
  return (
    y.useLayoutEffect(() => s.listen(f), [s, f]),
    y.createElement(JE, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
const aS =
    typeof window != "undefined" &&
    typeof window.document != "undefined" &&
    typeof window.document.createElement != "undefined",
  uS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  NS = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: l,
        target: a,
        to: u,
        preventScrollReset: f,
        viewTransition: d,
      } = t,
      c = tS(t, oS),
      { basename: g } = y.useContext(ur),
      w,
      v = !1;
    if (typeof u == "string" && uS.test(u) && ((w = u), aS))
      try {
        let m = new URL(window.location.href),
          E = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
          C = dc(E.pathname, g);
        E.origin === m.origin && C != null
          ? (u = C + E.search + E.hash)
          : (v = !0);
      } catch (m) {}
    let x = DE(u, { relative: o }),
      p = cS(u, {
        replace: s,
        state: l,
        target: a,
        preventScrollReset: f,
        relative: o,
        viewTransition: d,
      });
    function h(m) {
      r && r(m), m.defaultPrevented || p(m);
    }
    return y.createElement(
      "a",
      Ja({}, c, { href: w || x, onClick: v || i ? r : h, ref: n, target: a })
    );
  });
var ff;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ff || (ff = {}));
var pf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(pf || (pf = {}));
function cS(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      viewTransition: l,
    } = t === void 0 ? {} : t,
    a = jE(),
    u = sl(),
    f = pv(e, { relative: s });
  return y.useCallback(
    (d) => {
      if (rS(d, n)) {
        d.preventDefault();
        let c = r !== void 0 ? r : Os(u) === Os(f);
        a(e, {
          replace: c,
          state: o,
          preventScrollReset: i,
          relative: s,
          viewTransition: l,
        });
      }
    },
    [u, a, f, r, o, n, e, i, s, l]
  );
}
const dS = y.lazy(() =>
    Tt(() => import("./Index2.js"), __vite__mapDeps([0, 1, 2, 3, 4]))
  ),
  fS = y.lazy(() =>
    Tt(() => import("./Team.js"), __vite__mapDeps([5, 1, 6, 7]))
  ),
  pS = y.lazy(() =>
    Tt(() => import("./News.js"), __vite__mapDeps([8, 1, 9, 7, 10]))
  ),
  hS = y.lazy(() =>
    Tt(() => import("./Matches.js"), __vite__mapDeps([11, 1, 7, 4]))
  ),
  hf = y.lazy(() =>
    Tt(() => import("./Tournaments.js"), __vite__mapDeps([12, 1, 2, 3, 4, 9]))
  ),
  mS = y.lazy(() =>
    Tt(() => import("./Media.js"), __vite__mapDeps([13, 1, 9, 7]))
  ),
  vS = y.lazy(() =>
    Tt(() => import("./Contacts.js"), __vite__mapDeps([14, 1, 10]))
  ),
  gS = y.lazy(() => Tt(() => import("./NotFound.js"), [])),
  yS = y.lazy(() =>
    Tt(() => import("./Dashboard.js"), __vite__mapDeps([15, 6, 3]))
  ),
  mf = y.lazy(() =>
    Tt(() => import("./AdminHome.js"), __vite__mapDeps([16, 6, 3, 7]))
  ),
  wS = y.lazy(() =>
    Tt(() => import("./PlayersManagement.js"), __vite__mapDeps([17, 9]))
  ),
  xS = () =>
    T.jsx("div", {
      className: "flex h-screen w-full items-center justify-center",
      children: T.jsx("div", {
        className:
          "h-10 w-10 animate-spin rounded-full border-4 border-fc-green border-t-transparent",
      }),
    }),
  ES = new lE({
    defaultOptions: {
      queries: { staleTime: 60 * 1e3, refetchOnWindowFocus: !1 },
    },
  }),
  SS = () =>
    T.jsx(uE, {
      client: ES,
      children: T.jsxs(zx, {
        children: [
          T.jsx(Dw, {}),
          T.jsx(d1, {}),
          T.jsx(lS, {
            children: T.jsx(y.Suspense, {
              fallback: T.jsx(xS, {}),
              children: T.jsxs(eS, {
                children: [
                  T.jsx(Be, { path: "/", element: T.jsx(dS, {}) }),
                  T.jsx(Be, { path: "/team", element: T.jsx(fS, {}) }),
                  T.jsx(Be, { path: "/news", element: T.jsx(pS, {}) }),
                  T.jsx(Be, { path: "/matches", element: T.jsx(hS, {}) }),
                  T.jsx(Be, { path: "/tournaments", element: T.jsx(hf, {}) }),
                  T.jsx(Be, {
                    path: "/tournaments/:id",
                    element: T.jsx(hf, {}),
                  }),
                  T.jsx(Be, { path: "/media", element: T.jsx(mS, {}) }),
                  T.jsx(Be, { path: "/contacts", element: T.jsx(vS, {}) }),
                  T.jsxs(Be, {
                    path: "/admin",
                    element: T.jsx(yS, {}),
                    children: [
                      T.jsx(Be, { index: !0, element: T.jsx(mf, {}) }),
                      T.jsx(Be, { path: "players", element: T.jsx(wS, {}) }),
                      T.jsx(Be, {
                        path: "tournaments",
                        element: T.jsx(mf, {}),
                      }),
                    ],
                  }),
                  T.jsx(Be, { path: "*", element: T.jsx(gS, {}) }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  vf = document.getElementById("root");
vf
  ? Fh(vf).render(T.jsx(L.StrictMode, { children: T.jsx(SS, {}) }))
  : console.error("Root element not found");
export {
  NS as L,
  bS as O,
  Ye as P,
  Ps as S,
  ew as X,
  Tt as _,
  lr as a,
  sl as b,
  J0 as c,
  G0 as d,
  T as j,
  y as r,
  r0 as t,
  o0 as u,
};
