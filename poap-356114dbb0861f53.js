let U = 0,
    Y = `string`,
    X = `number`,
    a0 = 4,
    W = 1,
    _ = `Object`,
    S = `utf-8`,
    Q = null,
    Z = `function`,
    O = 128,
    R = `undefined`,
    N = Array,
    T = Error,
    $ = FinalizationRegistry,
    a1 = Object,
    V = Uint8Array,
    P = undefined;
var B = ((c, d, e) => {
    try {
        a.wasm_bindgen__convert__closures__invoke1_ref__h2c71a6705587b644(c, d, A(e))
    } finally {
        b[z++] = P
    }
});
var M = (async (b) => {
    if (a !== P) return a;
    if (typeof b === R) {
        b = new URL(`poap_bg.wasm`,
            import.meta.url)
    };
    const c = I();
    if (typeof b === Y || typeof Request === Z && b instanceof Request || typeof URL === Z && b instanceof URL) {
        b = fetch(b)
    };
    J(c);
    const {
        instance: d,
        module: e
    } = await H(await b, c);
    return K(d, e)
});
var q = (a => {
    const b = typeof a;
    if (b == X || b == `boolean` || a == Q) {
        return `${a}`
    };
    if (b == Y) {
        return `"${a}"`
    };
    if (b == `symbol`) {
        const b = a.description;
        if (b == Q) {
            return `Symbol`
        } else {
            return `Symbol(${b})`
        }
    };
    if (b == Z) {
        const b = a.name;
        if (typeof b == Y && b.length > U) {
            return `Function(${b})`
        } else {
            return `Function`
        }
    };
    if (N.isArray(a)) {
        const b = a.length;
        let c = `[`;
        if (b > U) {
            c += q(a[U])
        };
        for (let d = W; d < b; d++) {
            c += `, ` + q(a[d])
        };
        c += `]`;
        return c
    };
    const c = /\[object ([^\]]+)\]/.exec(toString.call(a));
    let d;
    if (c.length > W) {
        d = c[W]
    } else {
        return toString.call(a)
    };
    if (d == _) {
        try {
            return `Object(` + JSON.stringify(a) + `)`
        } catch (a) {
            return _
        }
    };
    if (a instanceof T) {
        return `${a.name}: ${a.message}\n${a.stack}`
    };
    return d
});
var x = ((b, c) => {
    a.wasm_bindgen__convert__closures__invoke0_mut__h8bb51f4d332eb5d4(b, c)
});
var c = (a => b[a]);
var K = ((b, c) => {
    a = b.exports;
    M.__wbindgen_wasm_module = c;
    m = Q;
    o = Q;
    E = Q;
    h = Q;
    a.__wbindgen_start();
    return a
});

function D(b, c) {
    try {
        return b.apply(this, c)
    } catch (b) {
        a.__wbindgen_exn_store(k(b))
    }
}
var C = ((b, c, d) => {
    a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h77fd1a3184cd890d(b, c, k(d))
});
var k = (a => {
    if (d === b.length) b.push(b.length + W);
    const c = d;
    d = b[c];
    b[c] = a;
    return c
});
var f = (a => {
    const b = c(a);
    e(a);
    return b
});
var A = (a => {
    if (z == W) throw new T(`out of js stack`);
    b[--z] = a;
    return z
});
var j = ((a, b) => {
    a = a >>> U;
    return g.decode(i().subarray(a, a + b))
});
var L = (b => {
    if (a !== P) return a;
    const c = I();
    J(c);
    if (!(b instanceof WebAssembly.Module)) {
        b = new WebAssembly.Module(b)
    };
    const d = new WebAssembly.Instance(b, c);
    return K(d, b)
});
var J = ((a, b) => {});
var u = ((a, b, c) => {
    if (c === P) {
        const c = s.encode(a);
        const d = b(c.length, W) >>> U;
        i().subarray(d, d + c.length).set(c);
        r = c.length;
        return d
    };
    let d = a.length;
    let e = b(d, W) >>> U;
    const f = i();
    let g = U;
    for (; g < d; g++) {
        const b = a.charCodeAt(g);
        if (b > 127) break;
        f[e + g] = b
    };
    if (g !== d) {
        if (g !== U) {
            a = a.slice(g)
        };
        e = c(e, d, d = g + a.length * 3, W) >>> U;
        const b = i().subarray(e + g, e + d);
        const f = t(a, b);
        g += f.written;
        e = c(e, d, g, W) >>> U
    };
    r = g;
    return e
});
var i = (() => {
    if (h === Q || h.byteLength === U) {
        h = new V(a.memory.buffer)
    };
    return h
});
var y = ((b, c, d, e) => {
    const f = {
        a: b,
        b: c,
        cnt: W,
        dtor: d
    };
    const g = (...b) => {
        f.cnt++;
        try {
            return e(f.a, f.b, ...b)
        } finally {
            if (--f.cnt === U) {
                a.__wbindgen_export_2.get(f.dtor)(f.a, f.b);
                f.a = U;
                v.unregister(f)
            }
        }
    };
    g.original = f;
    v.register(g, f, f);
    return g
});
var w = ((b, c, d, e) => {
    const f = {
        a: b,
        b: c,
        cnt: W,
        dtor: d
    };
    const g = (...b) => {
        f.cnt++;
        const c = f.a;
        f.a = U;
        try {
            return e(c, f.b, ...b)
        } finally {
            if (--f.cnt === U) {
                a.__wbindgen_export_2.get(f.dtor)(c, f.b);
                v.unregister(f)
            } else {
                f.a = c
            }
        }
    };
    g.original = f;
    v.register(g, f, f);
    return g
});
var l = (a => a === P || a === Q);
var H = (async (a, b) => {
    if (typeof Response === Z && a instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === Z) {
            try {
                return await WebAssembly.instantiateStreaming(a, b)
            } catch (b) {
                if (a.headers.get(`Content-Type`) != `application/wasm`) {
                    console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`, b)
                } else {
                    throw b
                }
            }
        };
        const c = await a.arrayBuffer();
        return await WebAssembly.instantiate(c, b)
    } else {
        const c = await WebAssembly.instantiate(a, b);
        if (c instanceof WebAssembly.Instance) {
            return {
                instance: c,
                module: a
            }
        } else {
            return c
        }
    }
});
var e = (a => {
    if (a < 132) return;
    b[a] = d;
    d = a
});
var F = (() => {
    if (E === Q || E.byteLength === U) {
        E = new Uint32Array(a.memory.buffer)
    };
    return E
});
var n = (() => {
    if (m === Q || m.byteLength === U) {
        m = new Float64Array(a.memory.buffer)
    };
    return m
});
var I = (() => {
    const b = {};
    b.wbg = {};
    b.wbg.__wbindgen_object_drop_ref = (a => {
        f(a)
    });
    b.wbg.__wbindgen_cb_drop = (a => {
        const b = f(a).original;
        if (b.cnt-- == W) {
            b.a = U;
            return !0
        };
        const c = !1;
        return c
    });
    b.wbg.__wbindgen_string_new = ((a, b) => {
        const c = j(a, b);
        return k(c)
    });
    b.wbg.__wbindgen_number_get = ((a, b) => {
        const d = c(b);
        const e = typeof d === X ? d : P;
        n()[a / 8 + W] = l(e) ? U : e;
        p()[a / a0 + U] = !l(e)
    });
    b.wbg.__wbindgen_number_new = (a => {
        const b = a;
        return k(b)
    });
    b.wbg.__wbindgen_object_clone_ref = (a => {
        const b = c(a);
        return k(b)
    });
    b.wbg.__wbg_subtreeid_e80a1798fee782f9 = ((a, b) => {
        const d = c(b).__yew_subtree_id;
        p()[a / a0 + W] = l(d) ? U : d;
        p()[a / a0 + U] = !l(d)
    });
    b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf = ((a, b) => {
        c(a).__yew_subtree_id = b >>> U
    });
    b.wbg.__wbg_cachekey_b81c1aacc6a0645c = ((a, b) => {
        const d = c(b).__yew_subtree_cache_key;
        p()[a / a0 + W] = l(d) ? U : d;
        p()[a / a0 + U] = !l(d)
    });
    b.wbg.__wbg_setcachekey_75bcd45312087529 = ((a, b) => {
        c(a).__yew_subtree_cache_key = b >>> U
    });
    b.wbg.__wbg_setlistenerid_f2e783343fa0cec1 = ((a, b) => {
        c(a).__yew_listener_id = b >>> U
    });
    b.wbg.__wbg_listenerid_6dcf1c62b7b7de58 = ((a, b) => {
        const d = c(b).__yew_listener_id;
        p()[a / a0 + W] = l(d) ? U : d;
        p()[a / a0 + U] = !l(d)
    });
    b.wbg.__wbg_new_abda76e883ba8a5f = (() => {
        const a = new T();
        return k(a)
    });
    b.wbg.__wbg_stack_658279fe44541cf6 = ((b, d) => {
        const e = c(d).stack;
        const f = u(e, a.__wbindgen_malloc, a.__wbindgen_realloc);
        const g = r;
        p()[b / a0 + W] = g;
        p()[b / a0 + U] = f
    });
    b.wbg.__wbg_error_f851667af71bcfc6 = ((b, c) => {
        let d;
        let e;
        try {
            d = b;
            e = c;
            console.error(j(b, c))
        } finally {
            a.__wbindgen_free(d, e, W)
        }
    });
    b.wbg.__wbg_clearInterval_7f51e4380e64c6c5 = (a => {
        const b = clearInterval(f(a));
        return k(b)
    });
    b.wbg.__wbg_setInterval_e227d4d8a9d44d66 = function() {
        return D(((a, b) => {
            const d = setInterval(c(a), b);
            return k(d)
        }), arguments)
    };
    b.wbg.__wbg_queueMicrotask_481971b0d87f3dd4 = (a => {
        queueMicrotask(c(a))
    });
    b.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6 = (a => {
        const b = c(a).queueMicrotask;
        return k(b)
    });
    b.wbg.__wbindgen_is_function = (a => {
        const b = typeof c(a) === Z;
        return b
    });
    b.wbg.__wbg_crypto_566d7465cdbb6b7a = (a => {
        const b = c(a).crypto;
        return k(b)
    });
    b.wbg.__wbindgen_is_object = (a => {
        const b = c(a);
        const d = typeof b === `object` && b !== Q;
        return d
    });
    b.wbg.__wbg_process_dc09a8c7d59982f6 = (a => {
        const b = c(a).process;
        return k(b)
    });
    b.wbg.__wbg_versions_d98c6400c6ca2bd8 = (a => {
        const b = c(a).versions;
        return k(b)
    });
    b.wbg.__wbg_node_caaf83d002149bd5 = (a => {
        const b = c(a).node;
        return k(b)
    });
    b.wbg.__wbindgen_is_string = (a => {
        const b = typeof c(a) === Y;
        return b
    });
    b.wbg.__wbg_msCrypto_0b84745e9245cdf6 = (a => {
        const b = c(a).msCrypto;
        return k(b)
    });
    b.wbg.__wbg_require_94a9da52636aacbf = function() {
        return D((() => {
            const a = module.require;
            return k(a)
        }), arguments)
    };
    b.wbg.__wbg_randomFillSync_290977693942bf03 = function() {
        return D(((a, b) => {
            c(a).randomFillSync(f(b))
        }), arguments)
    };
    b.wbg.__wbg_getRandomValues_260cc23a41afad9a = function() {
        return D(((a, b) => {
            c(a).getRandomValues(c(b))
        }), arguments)
    };
    b.wbg.__wbg_error_a526fb08a0205972 = ((b, c) => {
        var d = G(b, c).slice();
        a.__wbindgen_free(b, c * a0, a0);
        console.error(...d)
    });
    b.wbg.__wbg_instanceof_Window_f401953a2cf86220 = (a => {
        let b;
        try {
            b = c(a) instanceof Window
        } catch (a) {
            b = !1
        }
        const d = b;
        return d
    });
    b.wbg.__wbg_document_5100775d18896c16 = (a => {
        const b = c(a).document;
        return l(b) ? U : k(b)
    });
    b.wbg.__wbg_parent_d3e363a015349e04 = function() {
        return D((a => {
            const b = c(a).parent;
            return l(b) ? U : k(b)
        }), arguments)
    };
    b.wbg.__wbg_screen_650bdf1ecbce27b4 = function() {
        return D((a => {
            const b = c(a).screen;
            return k(b)
        }), arguments)
    };
    b.wbg.__wbg_innerWidth_758af301ca4baa3e = function() {
        return D((a => {
            const b = c(a).innerWidth;
            return k(b)
        }), arguments)
    };
    b.wbg.__wbg_innerHeight_c1ef73925c3d3e9c = function() {
        return D((a => {
            const b = c(a).innerHeight;
            return k(b)
        }), arguments)
    };
    b.wbg.__wbg_postMessage_63da9b1061b71a10 = function() {
        return D(((a, b, d, e) => {
            c(a).postMessage(c(b), j(d, e))
        }), arguments)
    };
    b.wbg.__wbg_body_edb1908d3ceff3a1 = (a => {
        const b = c(a).body;
        return l(b) ? U : k(b)
    });
    b.wbg.__wbg_createElement_8bae7856a4bb7411 = function() {
        return D(((a, b, d) => {
            const e = c(a).createElement(j(b, d));
            return k(e)
        }), arguments)
    };
    b.wbg.__wbg_createElementNS_556a62fb298be5a2 = function() {
        return D(((a, b, d, e, f) => {
            const g = c(a).createElementNS(b === U ? P : j(b, d), j(e, f));
            return k(g)
        }), arguments)
    };
    b.wbg.__wbg_createTextNode_0c38fd80a5b2284d = ((a, b, d) => {
        const e = c(a).createTextNode(j(b, d));
        return k(e)
    });
    b.wbg.__wbg_instanceof_Element_6945fc210db80ea9 = (a => {
        let b;
        try {
            b = c(a) instanceof Element
        } catch (a) {
            b = !1
        }
        const d = b;
        return d
    });
    b.wbg.__wbg_namespaceURI_5235ee79fd5f6781 = ((b, d) => {
        const e = c(d).namespaceURI;
        var f = l(e) ? U : u(e, a.__wbindgen_malloc, a.__wbindgen_realloc);
        var g = r;
        p()[b / a0 + W] = g;
        p()[b / a0 + U] = f
    });
    b.wbg.__wbg_setinnerHTML_26d69b59e1af99c7 = ((a, b, d) => {
        c(a).innerHTML = j(b, d)
    });
    b.wbg.__wbg_outerHTML_e073aa84e7bc1eaf = ((b, d) => {
        const e = c(d).outerHTML;
        const f = u(e, a.__wbindgen_malloc, a.__wbindgen_realloc);
        const g = r;
        p()[b / a0 + W] = g;
        p()[b / a0 + U] = f
    });
    b.wbg.__wbg_getBoundingClientRect_91e6d57c4e65f745 = (a => {
        const b = c(a).getBoundingClientRect();
        return k(b)
    });
    b.wbg.__wbg_removeAttribute_1b10a06ae98ebbd1 = function() {
        return D(((a, b, d) => {
            c(a).removeAttribute(j(b, d))
        }), arguments)
    };
    b.wbg.__wbg_setAttribute_3c9f6c303b696daa = function() {
        return D(((a, b, d, e, f) => {
            c(a).setAttribute(j(b, d), j(e, f))
        }), arguments)
    };
    b.wbg.__wbg_addEventListener_4283b15b4f039eb5 = function() {
        return D(((a, b, d, e, f) => {
            c(a).addEventListener(j(b, d), c(e), c(f))
        }), arguments)
    };
    b.wbg.__wbg_setchecked_931ff2ed2cd3ebfd = ((a, b) => {
        c(a).checked = b !== U
    });
    b.wbg.__wbg_value_47fe6384562f52ab = ((b, d) => {
        const e = c(d).value;
        const f = u(e, a.__wbindgen_malloc, a.__wbindgen_realloc);
        const g = r;
        p()[b / a0 + W] = g;
        p()[b / a0 + U] = f
    });
    b.wbg.__wbg_setvalue_78cb4f1fef58ae98 = ((a, b, d) => {
        c(a).value = j(b, d)
    });
    b.wbg.__wbg_instanceof_ShadowRoot_9db040264422e84a = (a => {
        let b;
        try {
            b = c(a) instanceof ShadowRoot
        } catch (a) {
            b = !1
        }
        const d = b;
        return d
    });
    b.wbg.__wbg_host_c667c7623404d6bf = (a => {
        const b = c(a).host;
        return k(b)
    });
    b.wbg.__wbg_bottom_91d8cb531cf1afd2 = (a => {
        const b = c(a).bottom;
        return b
    });
    b.wbg.__wbg_left_fe0a839abdd508f4 = (a => {
        const b = c(a).left;
        return b
    });
    b.wbg.__wbg_setwidth_080107476e633963 = ((a, b) => {
        c(a).width = b >>> U
    });
    b.wbg.__wbg_setheight_dc240617639f1f51 = ((a, b) => {
        c(a).height = b >>> U
    });
    b.wbg.__wbg_getContext_df50fa48a8876636 = function() {
        return D(((a, b, d) => {
            const e = c(a).getContext(j(b, d));
            return l(e) ? U : k(e)
        }), arguments)
    };
    b.wbg.__wbg_width_b455dec2a8f76e45 = (a => {
        const b = c(a).width;
        return b
    });
    b.wbg.__wbg_clientX_fef6bf7a6bcf41b8 = (a => {
        const b = c(a).clientX;
        return b
    });
    b.wbg.__wbg_clientY_df42f8fceab3cef2 = (a => {
        const b = c(a).clientY;
        return b
    });
    b.wbg.__wbg_parentNode_6be3abff20e1a5fb = (a => {
        const b = c(a).parentNode;
        return l(b) ? U : k(b)
    });
    b.wbg.__wbg_parentElement_347524db59fc2976 = (a => {
        const b = c(a).parentElement;
        return l(b) ? U : k(b)
    });
    b.wbg.__wbg_childNodes_118168e8b23bcb9b = (a => {
        const b = c(a).childNodes;
        return k(b)
    });
    b.wbg.__wbg_lastChild_83efe6d5da370e1f = (a => {
        const b = c(a).lastChild;
        return l(b) ? U : k(b)
    });
    b.wbg.__wbg_nextSibling_709614fdb0fb7a66 = (a => {
        const b = c(a).nextSibling;
        return l(b) ? U : k(b)
    });
    b.wbg.__wbg_setnodeValue_94b86af0cda24b90 = ((a, b, d) => {
        c(a).nodeValue = b === U ? P : j(b, d)
    });
    b.wbg.__wbg_textContent_8e392d624539e731 = ((b, d) => {
        const e = c(d).textContent;
        var f = l(e) ? U : u(e, a.__wbindgen_malloc, a.__wbindgen_realloc);
        var g = r;
        p()[b / a0 + W] = g;
        p()[b / a0 + U] = f
    });
    b.wbg.__wbg_cloneNode_e19c313ea20d5d1d = function() {
        return D((a => {
            const b = c(a).cloneNode();
            return k(b)
        }), arguments)
    };
    b.wbg.__wbg_insertBefore_d2a001abf538c1f8 = function() {
        return D(((a, b, d) => {
            const e = c(a).insertBefore(c(b), c(d));
            return k(e)
        }), arguments)
    };
    b.wbg.__wbg_removeChild_96bbfefd2f5a0261 = function() {
        return D(((a, b) => {
            const d = c(a).removeChild(c(b));
            return k(d)
        }), arguments)
    };
    b.wbg.__wbg_width_e870de808b523851 = (a => {
        const b = c(a).width;
        return b
    });
    b.wbg.__wbg_value_d7f5bfbd9302c14b = ((b, d) => {
        const e = c(d).value;
        const f = u(e, a.__wbindgen_malloc, a.__wbindgen_realloc);
        const g = r;
        p()[b / a0 + W] = g;
        p()[b / a0 + U] = f
    });
    b.wbg.__wbg_setvalue_090972231f0a4f6f = ((a, b, d) => {
        c(a).value = j(b, d)
    });
    b.wbg.__wbg_setstrokeStyle_c79ba6bc36a7f302 = ((a, b) => {
        c(a).strokeStyle = c(b)
    });
    b.wbg.__wbg_setfillStyle_4de94b275f5761f2 = ((a, b) => {
        c(a).fillStyle = c(b)
    });
    b.wbg.__wbg_setlineWidth_ea4c8cb72d8cdc31 = ((a, b) => {
        c(a).lineWidth = b
    });
    b.wbg.__wbg_setfont_a4d031cf2c94b4db = ((a, b, d) => {
        c(a).font = j(b, d)
    });
    b.wbg.__wbg_settextBaseline_a36b2a6259ade423 = ((a, b, d) => {
        c(a).textBaseline = j(b, d)
    });
    b.wbg.__wbg_drawImage_14f72ed9b8430e9d = function() {
        return D(((a, b, d, e, f, g) => {
            c(a).drawImage(c(b), d, e, f, g)
        }), arguments)
    };
    b.wbg.__wbg_beginPath_c7b9e681f2d031ca = (a => {
        c(a).beginPath()
    });
    b.wbg.__wbg_fill_7f376d2e52c3054e = (a => {
        c(a).fill()
    });
    b.wbg.__wbg_stroke_b125233fc8b11e59 = (a => {
        c(a).stroke()
    });
    b.wbg.__wbg_lineTo_863448482ad2bd29 = ((a, b, d) => {
        c(a).lineTo(b, d)
    });
    b.wbg.__wbg_moveTo_5526d0fa563650fa = ((a, b, d) => {
        c(a).moveTo(b, d)
    });
    b.wbg.__wbg_setLineDash_aed2919a1550112b = function() {
        return D(((a, b) => {
            c(a).setLineDash(c(b))
        }), arguments)
    };
    b.wbg.__wbg_fillRect_b5c8166281bac9df = ((a, b, d, e, f) => {
        c(a).fillRect(b, d, e, f)
    });
    b.wbg.__wbg_fillText_6dfde0e3b04c85db = function() {
        return D(((a, b, d, e, f) => {
            c(a).fillText(j(b, d), e, f)
        }), arguments)
    };
    b.wbg.__wbg_measureText_ea212ea07011bf71 = function() {
        return D(((a, b, d) => {
            const e = c(a).measureText(j(b, d));
            return k(e)
        }), arguments)
    };
    b.wbg.__wbg_target_2fc177e386c8b7b0 = (a => {
        const b = c(a).target;
        return l(b) ? U : k(b)
    });
    b.wbg.__wbg_bubbles_abce839854481bc6 = (a => {
        const b = c(a).bubbles;
        return b
    });
    b.wbg.__wbg_cancelBubble_c0aa3172524eb03c = (a => {
        const b = c(a).cancelBubble;
        return b
    });
    b.wbg.__wbg_composedPath_58473fd5ae55f2cd = (a => {
        const b = c(a).composedPath();
        return k(b)
    });
    b.wbg.__wbg_height_46a1bcc5706e90bc = function() {
        return D((a => {
            const b = c(a).height;
            return b
        }), arguments)
    };
    b.wbg.__wbg_get_bd8e338fbd5f5cc8 = ((a, b) => {
        const d = c(a)[b >>> U];
        return k(d)
    });
    b.wbg.__wbg_length_cd7af8117672b8b8 = (a => {
        const b = c(a).length;
        return b
    });
    b.wbg.__wbg_new_16b304a2cfa7ff4a = (() => {
        const a = new N();
        return k(a)
    });
    b.wbg.__wbg_newnoargs_e258087cd0daa0ea = ((a, b) => {
        const c = new Function(j(a, b));
        return k(c)
    });
    b.wbg.__wbg_call_27c0f87801dedf93 = function() {
        return D(((a, b) => {
            const d = c(a).call(c(b));
            return k(d)
        }), arguments)
    };
    b.wbg.__wbg_new_72fb9a18b5ae2624 = (() => {
        const a = new a1();
        return k(a)
    });
    b.wbg.__wbg_self_ce0dbfc45cf2f5be = function() {
        return D((() => {
            const a = self.self;
            return k(a)
        }), arguments)
    };
    b.wbg.__wbg_window_c6fb939a7f436783 = function() {
        return D((() => {
            const a = window.window;
            return k(a)
        }), arguments)
    };
    b.wbg.__wbg_globalThis_d1e6af4856ba331b = function() {
        return D((() => {
            const a = globalThis.globalThis;
            return k(a)
        }), arguments)
    };
    b.wbg.__wbg_global_207b558942527489 = function() {
        return D((() => {
            const a = global.global;
            return k(a)
        }), arguments)
    };
    b.wbg.__wbindgen_is_undefined = (a => {
        const b = c(a) === P;
        return b
    });
    b.wbg.__wbg_from_89e3fc3ba5e6fb48 = (a => {
        const b = N.from(c(a));
        return k(b)
    });
    b.wbg.__wbg_push_a5b05aedc7234f9f = ((a, b) => {
        const d = c(a).push(c(b));
        return d
    });
    b.wbg.__wbg_call_b3ca7c6051f9bec1 = function() {
        return D(((a, b, d) => {
            const e = c(a).call(c(b), c(d));
            return k(e)
        }), arguments)
    };
    b.wbg.__wbg_is_010fdc0f4ab96916 = ((a, b) => {
        const d = a1.is(c(a), c(b));
        return d
    });
    b.wbg.__wbg_resolve_b0083a7967828ec8 = (a => {
        const b = Promise.resolve(c(a));
        return k(b)
    });
    b.wbg.__wbg_then_0c86a60e8fcfe9f6 = ((a, b) => {
        const d = c(a).then(c(b));
        return k(d)
    });
    b.wbg.__wbg_buffer_12d079cc21e14bdb = (a => {
        const b = c(a).buffer;
        return k(b)
    });
    b.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb = ((a, b, d) => {
        const e = new V(c(a), b >>> U, d >>> U);
        return k(e)
    });
    b.wbg.__wbg_new_63b92bc8671ed464 = (a => {
        const b = new V(c(a));
        return k(b)
    });
    b.wbg.__wbg_set_a47bac70306a19a7 = ((a, b, d) => {
        c(a).set(c(b), d >>> U)
    });
    b.wbg.__wbg_newwithlength_e9b4878cebadb3d3 = (a => {
        const b = new V(a >>> U);
        return k(b)
    });
    b.wbg.__wbg_subarray_a1f73cd4b5b42fe1 = ((a, b, d) => {
        const e = c(a).subarray(b >>> U, d >>> U);
        return k(e)
    });
    b.wbg.__wbg_set_1f9b04f170055d33 = function() {
        return D(((a, b, d) => {
            const e = Reflect.set(c(a), c(b), c(d));
            return e
        }), arguments)
    };
    b.wbg.__wbindgen_debug_string = ((b, d) => {
        const e = q(c(d));
        const f = u(e, a.__wbindgen_malloc, a.__wbindgen_realloc);
        const g = r;
        p()[b / a0 + W] = g;
        p()[b / a0 + U] = f
    });
    b.wbg.__wbindgen_throw = ((a, b) => {
        throw new T(j(a, b))
    });
    b.wbg.__wbindgen_memory = (() => {
        const b = a.memory;
        return k(b)
    });
    b.wbg.__wbindgen_closure_wrapper263 = ((a, b, c) => {
        const d = w(a, b, 97, x);
        return k(d)
    });
    b.wbg.__wbindgen_closure_wrapper626 = ((a, b, c) => {
        const d = y(a, b, 233, B);
        return k(d)
    });
    b.wbg.__wbindgen_closure_wrapper794 = ((a, b, c) => {
        const d = w(a, b, 298, C);
        return k(d)
    });
    return b
});
var G = ((a, b) => {
    a = a >>> U;
    const c = F();
    const d = c.subarray(a / a0, a / a0 + b);
    const e = [];
    for (let a = U; a < d.length; a++) {
        e.push(f(d[a]))
    };
    return e
});
var p = (() => {
    if (o === Q || o.byteLength === U) {
        o = new Int32Array(a.memory.buffer)
    };
    return o
});
let a;
const b = new N(O).fill(P);
b.push(P, Q, !0, !1);
let d = b.length;
const g = typeof TextDecoder !== R ? new TextDecoder(S, {
    ignoreBOM: !0,
    fatal: !0
}) : {
    decode: () => {
        throw T(`TextDecoder not available`)
    }
};
if (typeof TextDecoder !== R) {
    g.decode()
};
let h = Q;
let m = Q;
let o = Q;
let r = U;
const s = typeof TextEncoder !== R ? new TextEncoder(S) : {
    encode: () => {
        throw T(`TextEncoder not available`)
    }
};
const t = typeof s.encodeInto === Z ? ((a, b) => s.encodeInto(a, b)) : ((a, b) => {
    const c = s.encode(a);
    b.set(c);
    return {
        read: a.length,
        written: c.length
    }
});
const v = typeof $ === R ? {
    register: () => {},
    unregister: () => {}
} : new $(b => {
    a.__wbindgen_export_2.get(b.dtor)(b.a, b.b)
});
let z = O;
let E = Q;
export default M;
export {
    L as initSync
}