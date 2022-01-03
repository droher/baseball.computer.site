(() => {
	var Ki = Object.create;
	var Se = Object.defineProperty,
		$i = Object.defineProperties,
		Xi = Object.getOwnPropertyDescriptor,
		Ji = Object.getOwnPropertyDescriptors,
		Qi = Object.getOwnPropertyNames,
		et = Object.getOwnPropertySymbols,
		Zi = Object.getPrototypeOf,
		rt = Object.prototype.hasOwnProperty,
		eu = Object.prototype.propertyIsEnumerable;
	var nt = (u, f, d) =>
			f in u ? Se(u, f, { enumerable: !0, configurable: !0, writable: !0, value: d }) : (u[f] = d),
		tt = (u, f) => {
			for (var d in f || (f = {})) rt.call(f, d) && nt(u, d, f[d]);
			if (et) for (var d of et(f)) eu.call(f, d) && nt(u, d, f[d]);
			return u;
		},
		at = (u, f) => $i(u, Ji(f)),
		ru = (u) => Se(u, '__esModule', { value: !0 });
	var $e = ((u) =>
		typeof require != 'undefined'
			? require
			: typeof Proxy != 'undefined'
			? new Proxy(u, { get: (f, d) => (typeof require != 'undefined' ? require : f)[d] })
			: u)(function (u) {
		if (typeof require != 'undefined') return require.apply(this, arguments);
		throw new Error('Dynamic require of "' + u + '" is not supported');
	});
	var nu = (u, f) => () => (u && (f = u((u = 0))), f);
	var xe = (u, f) => () => (f || u((f = { exports: {} }).exports, f), f.exports),
		tu = (u, f) => {
			for (var d in f) Se(u, d, { get: f[d], enumerable: !0 });
		},
		au = (u, f, d, m) => {
			if ((f && typeof f == 'object') || typeof f == 'function')
				for (let v of Qi(f))
					!rt.call(u, v) &&
						(d || v !== 'default') &&
						Se(u, v, { get: () => f[v], enumerable: !(m = Xi(f, v)) || m.enumerable });
			return u;
		},
		it = (u, f) =>
			au(
				ru(
					Se(
						u != null ? Ki(Zi(u)) : {},
						'default',
						!f && u && u.__esModule
							? { get: () => u.default, enumerable: !0 }
							: { value: u, enumerable: !0 }
					)
				),
				u
			);
	var pr = xe(() => {});
	var de = xe(() => {});
	var me = xe(() => {});
	var ut = xe(() => {});
	var ot = xe(() => {});
	var st = {};
	tu(st, { default: () => br });
	var vr,
		iu,
		br,
		gr = nu(() => {
			(vr = {}),
				(iu = (function () {
					var u = vr.url;
					return function (f) {
						f = f || {};
						function d() {
							return x.buffer != N && Q(x.buffer), Pr;
						}
						function m() {
							return x.buffer != N && Q(x.buffer), Cr;
						}
						function v() {
							return x.buffer != N && Q(x.buffer), Ur;
						}
						function w() {
							return x.buffer != N && Q(x.buffer), Nr;
						}
						function o() {
							return x.buffer != N && Q(x.buffer), Lr;
						}
						function y() {
							return x.buffer != N && Q(x.buffer), Hr;
						}
						function C() {
							return x.buffer != N && Q(x.buffer), Wr;
						}
						var t = typeof f != 'undefined' ? f : {},
							Je,
							Qe;
						t.ready = new Promise(function (e, r) {
							(Je = e), (Qe = r);
						});
						var pe = {},
							ee;
						for (ee in t) t.hasOwnProperty(ee) && (pe[ee] = t[ee]);
						var Ze = [],
							er = './this.program',
							Re = function (e, r) {
								throw r;
							},
							rr = typeof window == 'object',
							te = typeof importScripts == 'function',
							J =
								typeof process == 'object' &&
								typeof process.versions == 'object' &&
								typeof process.versions.node == 'string',
							p = t.ENVIRONMENT_IS_PTHREAD || !1,
							H = '';
						function Dr(e) {
							return t.locateFile ? t.locateFile(e, H) : H + e;
						}
						var be, nr, ve, mt;
						function pt(e) {
							if (!(e instanceof Te)) {
								var r = e;
								F('exiting due to exception: ' + r);
							}
						}
						var W, O;
						if (J) {
							te ? (H = me().dirname(H) + '/') : (H = __dirname + '/'),
								(be = function (r, n) {
									return (
										W || (W = de()),
										O || (O = me()),
										(r = O.normalize(r)),
										W.readFileSync(r, n ? null : 'utf8')
									);
								}),
								(ve = function (r) {
									var n = be(r, !0);
									return n.buffer || (n = new Uint8Array(n)), oe(n.buffer), n;
								}),
								(nr = function (r, n, a) {
									W || (W = de()),
										O || (O = me()),
										(r = O.normalize(r)),
										W.readFile(r, function (i, s) {
											i ? a(i) : n(s.buffer);
										});
								}),
								process.argv.length > 1 && (er = process.argv[1].replace(/\\/g, '/')),
								(Ze = process.argv.slice(2)),
								process.on('uncaughtException', function (e) {
									if (!(e instanceof Te)) throw e;
								}),
								process.on('unhandledRejection', function (e) {
									throw e;
								}),
								(Re = function (e, r) {
									if (ye()) throw ((process.exitCode = e), r);
									pt(r), process.exit(e);
								}),
								(t.inspect = function () {
									return '[Emscripten Module object]';
								});
							var Er;
							try {
								Er = pr();
							} catch (e) {
								throw (
									(console.error(
										'The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'
									),
									e)
								);
							}
							global.Worker = Er.Worker;
						} else
							(rr || te) &&
								(te
									? (H = self.location.href)
									: typeof document != 'undefined' &&
									  document.currentScript &&
									  (H = document.currentScript.src),
								u && (H = u),
								H.indexOf('blob:') !== 0
									? (H = H.substr(0, H.replace(/[?#].*/, '').lastIndexOf('/') + 1))
									: (H = ''),
								J
									? ((be = function (r, n) {
											return (
												W || (W = de()),
												O || (O = me()),
												(r = O.normalize(r)),
												W.readFileSync(r, n ? null : 'utf8')
											);
									  }),
									  (ve = function (r) {
											var n = be(r, !0);
											return n.buffer || (n = new Uint8Array(n)), oe(n.buffer), n;
									  }),
									  (nr = function (r, n, a) {
											W || (W = de()),
												O || (O = me()),
												(r = O.normalize(r)),
												W.readFile(r, function (i, s) {
													i ? a(i) : n(s.buffer);
												});
									  }))
									: ((be = function (e) {
											var r = new XMLHttpRequest();
											return r.open('GET', e, !1), r.send(null), r.responseText;
									  }),
									  te &&
											(ve = function (e) {
												var r = new XMLHttpRequest();
												return (
													r.open('GET', e, !1),
													(r.responseType = 'arraybuffer'),
													r.send(null),
													new Uint8Array(r.response)
												);
											}),
									  (nr = function (e, r, n) {
											var a = new XMLHttpRequest();
											a.open('GET', e, !0),
												(a.responseType = 'arraybuffer'),
												(a.onload = function () {
													if (a.status == 200 || (a.status == 0 && a.response)) {
														r(a.response);
														return;
													}
													n();
												}),
												(a.onerror = n),
												a.send(null);
									  })),
								(mt = function (e) {
									document.title = e;
								}));
						J && typeof performance == 'undefined' && (global.performance = ut().performance);
						var Ar = t.print || console.log.bind(console),
							F = t.printErr || console.warn.bind(console);
						for (ee in pe) pe.hasOwnProperty(ee) && (t[ee] = pe[ee]);
						(pe = null),
							t.arguments && (Ze = t.arguments),
							t.thisProgram && (er = t.thisProgram),
							t.quit && (Re = t.quit);
						function ge(e) {
							ge.shown || (ge.shown = {}), ge.shown[e] || ((ge.shown[e] = 1), F(e));
						}
						var lu = Atomics.load,
							_u = Atomics.store,
							du = Atomics.compareExchange,
							he;
						t.wasmBinary && (he = t.wasmBinary);
						var Tr = t.noExitRuntime || !0;
						typeof WebAssembly != 'object' && q('no native wasm support detected');
						var x,
							Mr,
							Be = !1,
							ae;
						function oe(e, r) {
							e || q('Assertion failed: ' + r);
						}
						function bt(e) {
							var r = t['_' + e];
							return oe(r, 'Cannot call unknown function ' + e + ', make sure it is exported'), r;
						}
						function vt(e, r, n, a, i) {
							var s = {
								string: function (I) {
									var K = 0;
									if (I != null && I !== 0) {
										var $ = (I.length << 2) + 1;
										(K = le($)), Fe(I, K, $);
									}
									return K;
								},
								array: function (I) {
									var K = le(I.length);
									return Ir(I, K), K;
								}
							};
							function c(I) {
								return r === 'string' ? j(I) : r === 'boolean' ? Boolean(I) : I;
							}
							var l = bt(e),
								b = [],
								D = 0;
							if (a)
								for (var E = 0; E < a.length; E++) {
									var z = s[n[E]];
									z ? (D === 0 && (D = Ee()), (b[E] = z(a[E]))) : (b[E] = a[E]);
								}
							var R = l.apply(null, b);
							function V(I) {
								return D !== 0 && fe(D), c(I);
							}
							return (R = V(R)), R;
						}
						function Sr(e) {
							var r = new TextDecoder(e);
							this.decode = function (n) {
								return (
									n.buffer instanceof SharedArrayBuffer && (n = new Uint8Array(n)),
									r.decode.call(r, n)
								);
							};
						}
						var xr = typeof TextDecoder != 'undefined' ? new Sr('utf8') : void 0;
						function Rr(e, r, n) {
							for (var a = r + n, i = r; e[i] && !(i >= a); ) ++i;
							if (i - r > 16 && e.subarray && xr) return xr.decode(e.subarray(r, i));
							for (var s = ''; r < i; ) {
								var c = e[r++];
								if (!(c & 128)) {
									s += String.fromCharCode(c);
									continue;
								}
								var l = e[r++] & 63;
								if ((c & 224) == 192) {
									s += String.fromCharCode(((c & 31) << 6) | l);
									continue;
								}
								var b = e[r++] & 63;
								if (
									((c & 240) == 224
										? (c = ((c & 15) << 12) | (l << 6) | b)
										: (c = ((c & 7) << 18) | (l << 12) | (b << 6) | (e[r++] & 63)),
									c < 65536)
								)
									s += String.fromCharCode(c);
								else {
									var D = c - 65536;
									s += String.fromCharCode(55296 | (D >> 10), 56320 | (D & 1023));
								}
							}
							return s;
						}
						function j(e, r) {
							return e ? Rr(m(), e, r) : '';
						}
						function Br(e, r, n, a) {
							if (!(a > 0)) return 0;
							for (var i = n, s = n + a - 1, c = 0; c < e.length; ++c) {
								var l = e.charCodeAt(c);
								if (l >= 55296 && l <= 57343) {
									var b = e.charCodeAt(++c);
									l = (65536 + ((l & 1023) << 10)) | (b & 1023);
								}
								if (l <= 127) {
									if (n >= s) break;
									r[n++] = l;
								} else if (l <= 2047) {
									if (n + 1 >= s) break;
									(r[n++] = 192 | (l >> 6)), (r[n++] = 128 | (l & 63));
								} else if (l <= 65535) {
									if (n + 2 >= s) break;
									(r[n++] = 224 | (l >> 12)),
										(r[n++] = 128 | ((l >> 6) & 63)),
										(r[n++] = 128 | (l & 63));
								} else {
									if (n + 3 >= s) break;
									(r[n++] = 240 | (l >> 18)),
										(r[n++] = 128 | ((l >> 12) & 63)),
										(r[n++] = 128 | ((l >> 6) & 63)),
										(r[n++] = 128 | (l & 63));
								}
							}
							return (r[n] = 0), n - i;
						}
						function Fe(e, r, n) {
							return Br(e, m(), r, n);
						}
						function Fr(e) {
							for (var r = 0, n = 0; n < e.length; ++n) {
								var a = e.charCodeAt(n);
								a >= 55296 &&
									a <= 57343 &&
									(a = (65536 + ((a & 1023) << 10)) | (e.charCodeAt(++n) & 1023)),
									a <= 127 ? ++r : a <= 2047 ? (r += 2) : a <= 65535 ? (r += 3) : (r += 4);
							}
							return r;
						}
						var mu = typeof TextDecoder != 'undefined' ? new Sr('utf-16le') : void 0;
						function Ir(e, r) {
							d().set(e, r);
						}
						function gt(e, r, n) {
							for (var a = 0; a < e.length; ++a) d()[r++ >> 0] = e.charCodeAt(a);
							n || (d()[r >> 0] = 0);
						}
						function ht(e, r) {
							return e % r > 0 && (e += r - (e % r)), e;
						}
						var N, Pr, Cr, Ur, Nr, Lr, Hr, yt, Wr;
						p && (N = t.buffer);
						function Q(e) {
							(N = e),
								(t.HEAP8 = Pr = new Int8Array(e)),
								(t.HEAP16 = Ur = new Int16Array(e)),
								(t.HEAP32 = Lr = new Int32Array(e)),
								(t.HEAPU8 = Cr = new Uint8Array(e)),
								(t.HEAPU16 = Nr = new Uint16Array(e)),
								(t.HEAPU32 = Hr = new Uint32Array(e)),
								(t.HEAPF32 = yt = new Float32Array(e)),
								(t.HEAPF64 = Wr = new Float64Array(e));
						}
						var Or = t.INITIAL_MEMORY || 16777216;
						if (p) (x = t.wasmMemory), (N = t.buffer);
						else if (t.wasmMemory) x = t.wasmMemory;
						else if (
							((x = new WebAssembly.Memory({
								initial: Or / 65536,
								maximum: 2147483648 / 65536,
								shared: !0
							})),
							!(x.buffer instanceof SharedArrayBuffer))
						)
							throw (
								(F(
									'requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag'
								),
								J &&
									console.log(
										'(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)'
									),
								Error('bad memory'))
							);
						x && (N = x.buffer), (Or = N.byteLength), Q(N);
						var se,
							jr = [],
							qr = [],
							wt = [],
							kt = [],
							Gr = [],
							Dt = !1,
							Et = !1,
							tr = 0;
						function ye() {
							return Tr || tr > 0;
						}
						function At() {
							if (!p) {
								if (t.preRun)
									for (typeof t.preRun == 'function' && (t.preRun = [t.preRun]); t.preRun.length; )
										xt(t.preRun.shift());
								Ie(jr);
							}
						}
						function Yr() {
							(Dt = !0), !p && Ie(qr);
						}
						function Tt() {
							p || Ie(wt);
						}
						function Mt() {
							p || (g.terminateAllThreads(), (Et = !0));
						}
						function St() {
							if (!p) {
								if (t.postRun)
									for (
										typeof t.postRun == 'function' && (t.postRun = [t.postRun]);
										t.postRun.length;

									)
										Bt(t.postRun.shift());
								Ie(Gr);
							}
						}
						function xt(e) {
							jr.unshift(e);
						}
						function Rt(e) {
							qr.unshift(e);
						}
						function Bt(e) {
							Gr.unshift(e);
						}
						var ie = 0,
							ar = null,
							we = null;
						function Ft(e) {
							ie++, t.monitorRunDependencies && t.monitorRunDependencies(ie);
						}
						function It(e) {
							if (
								(ie--,
								t.monitorRunDependencies && t.monitorRunDependencies(ie),
								ie == 0 && (ar !== null && (clearInterval(ar), (ar = null)), we))
							) {
								var r = we;
								(we = null), r();
							}
						}
						(t.preloadedImages = {}), (t.preloadedAudios = {});
						function q(e) {
							p ? postMessage({ cmd: 'onAbort', arg: e }) : t.onAbort && t.onAbort(e),
								(e = 'Aborted(' + e + ')'),
								F(e),
								(Be = !0),
								(ae = 1),
								(e += '. Build with -s ASSERTIONS=1 for more info.');
							var r = new WebAssembly.RuntimeError(e);
							throw (Qe(r), r);
						}
						var Pt = 'data:application/octet-stream;base64,';
						function zr(e) {
							return e.startsWith(Pt);
						}
						var G;
						t.locateFile
							? ((G = './duckdb-wasm-next-coi.wasm'), zr(G) || (G = Dr(G)))
							: (G = new URL('duckdb_wasm.wasm', vr.url).toString());
						function Vr(e) {
							try {
								if (e == G && he) return new Uint8Array(he);
								if (ve) return ve(e);
								throw 'both async and sync fetching of the wasm failed';
							} catch (r) {
								q(r);
							}
						}
						function Ct() {
							return !he && (rr || te) && typeof fetch == 'function'
								? fetch(G, { credentials: 'same-origin' })
										.then(function (e) {
											if (!e.ok) throw "failed to load wasm binary file at '" + G + "'";
											return e.arrayBuffer();
										})
										.catch(function () {
											return Vr(G);
										})
								: Promise.resolve().then(function () {
										return Vr(G);
								  });
						}
						function Ut() {
							var e = { a: ii };
							function r(c, l) {
								var b = c.exports;
								if (((t.asm = b), jt(t.asm.mb), (se = t.asm.Ea), Rt(t.asm.Ca), (Mr = l), !p)) {
									var D = g.unusedWorkers.length;
									g.unusedWorkers.forEach(function (E) {
										g.loadWasmModuleToWorker(E, function () {
											--D || It('wasm-instantiate');
										});
									});
								}
							}
							p || Ft('wasm-instantiate');
							function n(c) {
								r(c.instance, c.module);
							}
							function a(c) {
								return Ct()
									.then(function (l) {
										return WebAssembly.instantiate(l, e);
									})
									.then(function (l) {
										return l;
									})
									.then(c, function (l) {
										F('failed to asynchronously prepare wasm: ' + l), q(l);
									});
							}
							function i() {
								return !he &&
									typeof WebAssembly.instantiateStreaming == 'function' &&
									!zr(G) &&
									typeof fetch == 'function'
									? fetch(G, { credentials: 'same-origin' }).then(function (c) {
											var l = WebAssembly.instantiateStreaming(c, e);
											return l.then(n, function (b) {
												return (
													F('wasm streaming compile failed: ' + b),
													F('falling back to ArrayBuffer instantiation'),
													a(n)
												);
											});
									  })
									: a(n);
							}
							if (t.instantiateWasm)
								try {
									var s = t.instantiateWasm(e, r);
									return s;
								} catch (c) {
									return F('Module.instantiateWasm callback failed with error: ' + c), !1;
								}
							return i().catch(Qe), {};
						}
						var Nt = {};
						function Ie(e) {
							for (; e.length > 0; ) {
								var r = e.shift();
								if (typeof r == 'function') {
									r(t);
									continue;
								}
								var n = r.func;
								typeof n == 'number'
									? r.arg === void 0
										? se.get(n)()
										: se.get(n)(r.arg)
									: n(r.arg === void 0 ? null : r.arg);
							}
						}
						function Kr(e, r) {
							if (e <= 0 || e > d().length || e & !0 || r < 0) return -28;
							if (r == 0) return 0;
							r >= 2147483647 && (r = 1 / 0);
							var n = Atomics.load(o(), _e >> 2),
								a = 0;
							if (n == e) {
								var i = Atomics.compareExchange(o(), _e >> 2, n, 0);
								if (i == n && (--r, (a = 1), r <= 0)) return 1;
							}
							var s = Atomics.notify(o(), e >> 2, r);
							if (s >= 0) return s + a;
							throw 'Atomics.notify returned an unexpected value ' + s;
						}
						t._emscripten_futex_wake = Kr;
						function Lt(e) {
							o()[(e + 8) >> 2] = 0;
							var r = g.pthreads[e];
							delete g.pthreads[e],
								r.worker.terminate(),
								Xr(r),
								g.runningWorkers.splice(g.runningWorkers.indexOf(r.worker), 1),
								(r.worker.pthread = void 0);
						}
						function Ht(e) {
							var r = g.pthreads[e];
							r.worker.postMessage({ cmd: 'cancel' });
						}
						function $r(e) {
							var r = g.pthreads[e];
							if (r) {
								o()[(e + 8) >> 2] = 0;
								var n = r.worker;
								g.returnWorkerToPool(n);
							}
						}
						function Xr(e) {
							!e ||
								(e.threadInfoStruct && Ve(e.threadInfoStruct),
								(e.threadInfoStruct = 0),
								e.allocatedOwnStack && e.stackBase && Ve(e.stackBase),
								(e.stackBase = 0),
								e.worker && (e.worker.pthread = null));
						}
						function Pe(e) {
							Qn(e);
						}
						t._exit = Pe;
						function Ce(e) {
							if (e instanceof Te || e == 'unwind') return ae;
							Re(1, e);
						}
						var g = {
							unusedWorkers: [],
							runningWorkers: [],
							tlsInitFunctions: [],
							initMainThreadBlock: function () {
								for (var e = 4, r = 0; r < e; ++r) g.allocateUnusedWorker();
							},
							initWorker: function () {},
							pthreads: {},
							threadExitHandlers: [],
							setExitStatus: function (e) {
								ae = e;
							},
							terminateAllThreads: function () {
								for (var e in g.pthreads) {
									var r = g.pthreads[e];
									r && r.worker && g.returnWorkerToPool(r.worker);
								}
								for (var n = 0; n < g.unusedWorkers.length; ++n) {
									var a = g.unusedWorkers[n];
									a.terminate();
								}
								g.unusedWorkers = [];
							},
							returnWorkerToPool: function (e) {
								g.runWithoutMainThreadQueuedCalls(function () {
									delete g.pthreads[e.pthread.threadInfoStruct],
										g.unusedWorkers.push(e),
										g.runningWorkers.splice(g.runningWorkers.indexOf(e), 1),
										Xr(e.pthread),
										(e.pthread = void 0);
								});
							},
							runWithoutMainThreadQueuedCalls: function (e) {
								o()[Jn >> 2] = 0;
								try {
									e();
								} finally {
									o()[Jn >> 2] = 1;
								}
							},
							receiveObjectTransfer: function (e) {},
							threadInit: function () {
								for (var e in g.tlsInitFunctions) g.tlsInitFunctions[e]();
							},
							loadWasmModuleToWorker: function (e, r) {
								(e.onmessage = function (n) {
									var a = n.data,
										i = a.cmd;
									if (
										(e.pthread &&
											(g.currentProxiedOperationCallerThread = e.pthread.threadInfoStruct),
										a.targetThread && a.targetThread != Ge())
									) {
										var s = g.pthreads[a.targetThread];
										s
											? s.worker.postMessage(a, a.transferList)
											: F(
													'Internal error! Worker sent a message "' +
														i +
														'" to target pthread ' +
														a.targetThread +
														', but that thread no longer exists!'
											  ),
											(g.currentProxiedOperationCallerThread = void 0);
										return;
									}
									i === 'processQueuedMainThreadWork'
										? qe()
										: i === 'spawnThread'
										? Zr(a)
										: i === 'cleanupThread'
										? $r(a.thread)
										: i === 'killThread'
										? Lt(a.thread)
										: i === 'cancelThread'
										? Ht(a.thread)
										: i === 'loaded'
										? ((e.loaded = !0),
										  r && r(e),
										  e.runPthread && (e.runPthread(), delete e.runPthread))
										: i === 'print'
										? Ar('Thread ' + a.threadId + ': ' + a.text)
										: i === 'printErr'
										? F('Thread ' + a.threadId + ': ' + a.text)
										: i === 'alert'
										? alert('Thread ' + a.threadId + ': ' + a.text)
										: i === 'detachedExit' || i === 'cancelDone'
										? g.returnWorkerToPool(e)
										: a.target === 'setimmediate'
										? e.postMessage(a)
										: i === 'onAbort'
										? t.onAbort && t.onAbort(a.arg)
										: F('worker sent an unknown command ' + i),
										(g.currentProxiedOperationCallerThread = void 0);
								}),
									(e.onerror = function (n) {
										throw (
											(F(
												'pthread sent an error! ' + n.filename + ':' + n.lineno + ': ' + n.message
											),
											n)
										);
									}),
									J &&
										(e.on('message', function (n) {
											e.onmessage({ data: n });
										}),
										e.on('error', function (n) {
											e.onerror(n);
										}),
										e.on('detachedExit', function () {})),
									e.postMessage({
										cmd: 'load',
										urlOrBlob: t.mainScriptUrlOrBlob,
										wasmMemory: x,
										wasmModule: Mr
									});
							},
							allocateUnusedWorker: function () {
								if (!t.locateFile) {
									g.unusedWorkers.push(new Worker(new URL('duckdb_wasm.worker.js', vr.url)));
									return;
								}
								var e = Dr('duckdb_wasm.worker.js');
								g.unusedWorkers.push(new Worker(e));
							},
							getNewWorker: function () {
								return (
									g.unusedWorkers.length == 0 &&
										(g.allocateUnusedWorker(), g.loadWasmModuleToWorker(g.unusedWorkers[0])),
									g.unusedWorkers.pop()
								);
							}
						};
						function Wt(e, r) {
							$n(e, r), fe(e);
						}
						t.establishStackSpace = Wt;
						function Jr(e) {
							if (p) return A(1, 0, e);
							try {
								Pe(e);
							} catch (r) {
								Ce(r);
							}
						}
						function Ot(e, r) {
							return se.get(e)(r);
						}
						t.invokeEntryPoint = Ot;
						function jt(e, r, n) {
							g.tlsInitFunctions.push(e);
						}
						function qt(e, r, n, a) {
							q(
								'Assertion failed: ' +
									j(e) +
									', at: ' +
									[r ? j(r) : 'unknown filename', n, a ? j(a) : 'unknown function']
							);
						}
						var ke;
						J
							? (ke = function () {
									var e = process.hrtime();
									return e[0] * 1e3 + e[1] / 1e6;
							  })
							: p
							? (ke = function () {
									return performance.now() - t.__performance_now_clock_drift;
							  })
							: (ke = function () {
									return performance.now();
							  });
						var Gt = !0;
						function Yt(e) {
							return (o()[Kn() >> 2] = e), e;
						}
						function Qr(e, r) {
							var n;
							if (e === 0) n = Date.now();
							else if ((e === 1 || e === 4) && Gt) n = ke();
							else return Yt(28), -1;
							return (
								(o()[r >> 2] = (n / 1e3) | 0), (o()[(r + 4) >> 2] = ((n % 1e3) * 1e3 * 1e3) | 0), 0
							);
						}
						function zt(e, r) {
							return Qr(e, r);
						}
						function Vt(e, r) {
							if (p) return A(2, 1, e, r);
						}
						function Kt(e, r) {
							g.threadExitHandlers.push(function () {
								se.get(e)(r);
							});
						}
						function $t(e) {
							Vn(e, !te, 1), g.threadInit();
						}
						function Zr(e) {
							var r = g.getNewWorker();
							if (!r) return 6;
							g.runningWorkers.push(r);
							var n = e.stackBase + e.stackSize,
								a = (g.pthreads[e.pthread_ptr] = {
									worker: r,
									stackBase: e.stackBase,
									stackSize: e.stackSize,
									allocatedOwnStack: e.allocatedOwnStack,
									threadInfoStruct: e.pthread_ptr
								}),
								i = a.threadInfoStruct >> 2;
							Atomics.store(y(), i + (60 >> 2), e.detached),
								Atomics.store(y(), i + (76 >> 2), e.stackSize),
								Atomics.store(y(), i + (72 >> 2), n),
								Atomics.store(y(), i + (100 >> 2), e.stackSize),
								Atomics.store(y(), i + ((100 + 8) >> 2), n),
								Atomics.store(y(), i + ((100 + 12) >> 2), e.detached),
								(r.pthread = a);
							var s = {
								cmd: 'run',
								start_routine: e.startRoutine,
								arg: e.arg,
								threadInfoStruct: e.pthread_ptr,
								stackBase: e.stackBase,
								stackSize: e.stackSize
							};
							return (
								(r.runPthread = function () {
									(s.time = performance.now()), r.postMessage(s, e.transferList);
								}),
								r.loaded && (r.runPthread(), delete r.runPthread),
								0
							);
						}
						function Xt(e, r, n, a) {
							if (typeof SharedArrayBuffer == 'undefined')
								return (
									F(
										'Current environment does not support SharedArrayBuffer, pthreads are not available!'
									),
									6
								);
							var i = [],
								s = 0;
							if (p && (i.length === 0 || s)) return qn(687865856, e, r, n, a);
							if (s) return s;
							var c = 0,
								l = 0,
								b = 0;
							r && r != -1
								? ((c = o()[r >> 2]),
								  (c += 2097152),
								  (l = o()[(r + 8) >> 2]),
								  (b = o()[(r + 12) >> 2] !== 0))
								: (c = 2097152);
							var D = l == 0;
							D ? (l = Xn(16, c)) : ((l -= c), oe(l > 0));
							var E = {
								stackBase: l,
								stackSize: c,
								allocatedOwnStack: D,
								detached: b,
								startRoutine: n,
								pthread_ptr: e,
								arg: a,
								transferList: i
							};
							return p ? ((E.cmd = 'spawnThread'), postMessage(E, i), 0) : Zr(E);
						}
						function Jt() {
							postMessage({ cmd: 'detachedExit' });
						}
						function Qt(e) {
							for (; g.threadExitHandlers.length > 0; ) g.threadExitHandlers.pop()();
						}
						function en(e, r, n) {
							if (e <= 0 || e > d().length || e & !0) return -28;
							if (rr) {
								if (Atomics.load(o(), e >> 2) != r) return -6;
								for (
									var i = performance.now(), s = i + n, c = Atomics.exchange(o(), _e >> 2, e);
									;

								) {
									if (((i = performance.now()), i > s))
										return (c = Atomics.exchange(o(), _e >> 2, 0)), -73;
									if (((c = Atomics.exchange(o(), _e >> 2, 0)), c == 0)) break;
									if ((qe(), Atomics.load(o(), e >> 2) != r)) return -6;
									c = Atomics.exchange(o(), _e >> 2, e);
								}
								return 0;
							} else {
								var a = Atomics.wait(o(), e >> 2, r, n);
								if (a === 'timed-out') return -73;
								if (a === 'not-equal') return -6;
								if (a === 'ok') return 0;
								throw 'Atomics.wait returned an unexpected value ' + a;
							}
						}
						function rn() {
							J ||
								te ||
								ge(
									'Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread'
								);
						}
						function Zt(e, r, n) {
							if (!e) return F('pthread_join attempted on a null thread pointer!'), 71;
							if (p && Ge() == e)
								return F('PThread ' + e + ' is attempting to join to itself!'), 16;
							if (!p && jn() == e)
								return F('Main thread ' + e + ' is attempting to join to itself!'), 16;
							var a = o()[(e + 8) >> 2];
							if (a !== e)
								return (
									F(
										'pthread_join attempted on thread ' +
											e +
											', which does not point to a valid thread, or does not exist anymore!'
									),
									71
								);
							var i = Atomics.load(y(), (e + 60) >> 2);
							if (i)
								return F('Attempted to join thread ' + e + ', which was already detached!'), 28;
							for (n && rn(); ; ) {
								var s = Atomics.load(y(), (e + 0) >> 2);
								if (s == 1) {
									if (r) {
										var c = Atomics.load(y(), (e + 88) >> 2);
										o()[r >> 2] = c;
									}
									return (
										Atomics.store(y(), (e + 60) >> 2, 1),
										p ? postMessage({ cmd: 'cleanupThread', thread: e }) : $r(e),
										0
									);
								}
								if (!n) return 10;
								zn(), p || qe(), en(e + 0, s, p ? 100 : 1);
							}
						}
						function ea(e, r) {
							return Zt(e, r, !0);
						}
						var P = {
							mappings: {},
							buffers: [null, [], []],
							printChar: function (e, r) {
								var n = P.buffers[e];
								r === 0 || r === 10 ? ((e === 1 ? Ar : F)(Rr(n, 0)), (n.length = 0)) : n.push(r);
							},
							varargs: void 0,
							get: function () {
								P.varargs += 4;
								var e = o()[(P.varargs - 4) >> 2];
								return e;
							},
							getStr: function (e) {
								var r = j(e);
								return r;
							},
							get64: function (e, r) {
								return e;
							}
						};
						function nn(e, r, n, a, i) {
							if (p) return A(3, 1, e, r, n, a, i);
						}
						function tn(e, r) {
							return p ? A(4, 1, e, r) : ((e = P.getStr(e)), P.doAccess(e, r));
						}
						function ra() {
							F('missing function: $SOCKFS'), q(-1);
						}
						function an() {
							F('missing function: $FS'), q(-1);
						}
						function ce(e) {
							var r = ra.getSocket(e);
							if (!r) throw new an.ErrnoError(8);
							return r;
						}
						function ir(e) {
							return (
								(e & 255) +
								'.' +
								((e >> 8) & 255) +
								'.' +
								((e >> 16) & 255) +
								'.' +
								((e >> 24) & 255)
							);
						}
						function un(e) {
							var r = '',
								n = 0,
								a = 0,
								i = 0,
								s = 0,
								c = 0,
								l = 0,
								b = [
									e[0] & 65535,
									e[0] >> 16,
									e[1] & 65535,
									e[1] >> 16,
									e[2] & 65535,
									e[2] >> 16,
									e[3] & 65535,
									e[3] >> 16
								],
								D = !0,
								E = '';
							for (l = 0; l < 5; l++)
								if (b[l] !== 0) {
									D = !1;
									break;
								}
							if (D) {
								if (((E = ir(b[6] | (b[7] << 16))), b[5] === -1))
									return (r = '::ffff:'), (r += E), r;
								if (b[5] === 0)
									return (
										(r = '::'),
										E === '0.0.0.0' && (E = ''),
										E === '0.0.0.1' && (E = '1'),
										(r += E),
										r
									);
							}
							for (n = 0; n < 8; n++)
								b[n] === 0 && (n - i > 1 && (c = 0), (i = n), c++),
									c > a && ((a = c), (s = n - a + 1));
							for (n = 0; n < 8; n++) {
								if (a > 1 && b[n] === 0 && n >= s && n < s + a) {
									n === s && ((r += ':'), s === 0 && (r += ':'));
									continue;
								}
								(r += Number(dr(b[n] & 65535)).toString(16)), (r += n < 7 ? ':' : '');
							}
							return r;
						}
						function on(e, r) {
							var n = v()[e >> 1],
								a = dr(w()[(e + 2) >> 1]),
								i;
							switch (n) {
								case 2:
									if (r !== 16) return { errno: 28 };
									(i = o()[(e + 4) >> 2]), (i = ir(i));
									break;
								case 10:
									if (r !== 28) return { errno: 28 };
									(i = [
										o()[(e + 8) >> 2],
										o()[(e + 12) >> 2],
										o()[(e + 16) >> 2],
										o()[(e + 20) >> 2]
									]),
										(i = un(i));
									break;
								default:
									return { errno: 5 };
							}
							return { family: n, addr: i, port: a };
						}
						function sn(e, r, n) {
							if (n && e === 0) return null;
							var a = on(e, r);
							if (a.errno) throw new an.ErrnoError(a.errno);
							return (a.addr = Y.lookup_addr(a.addr) || a.addr), a;
						}
						function cn(e, r, n) {
							if (p) return A(5, 1, e, r, n);
							var a = ce(e),
								i = sn(r, n);
							return a.sock_ops.bind(a, i.addr, i.port), 0;
						}
						function fn(e, r, n) {
							if (p) return A(6, 1, e, r, n);
							var a = ce(e),
								i = sn(r, n);
							return a.sock_ops.connect(a, i.addr, i.port), 0;
						}
						function ln(e, r, n) {
							return p ? A(7, 1, e, r, n) : ((P.varargs = n), 0);
						}
						function _n(e, r) {
							if (p) return A(8, 1, e, r);
						}
						function dn(e, r, n, a) {
							if (p) return A(9, 1, e, r, n, a);
						}
						function mn(e, r, n) {
							if (p) return A(10, 1, e, r, n);
						}
						function Ue(e) {
							for (var r = e.split('.'), n = 0; n < 4; n++) {
								var a = Number(r[n]);
								if (isNaN(a)) return null;
								r[n] = a;
							}
							return (r[0] | (r[1] << 8) | (r[2] << 16) | (r[3] << 24)) >>> 0;
						}
						function Ne(e) {
							return parseInt(e);
						}
						function ur(e) {
							var r,
								n,
								a,
								i,
								s =
									/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
								c = [];
							if (!s.test(e)) return null;
							if (e === '::') return [0, 0, 0, 0, 0, 0, 0, 0];
							for (
								e.startsWith('::') ? (e = e.replace('::', 'Z:')) : (e = e.replace('::', ':Z:')),
									e.indexOf('.') > 0
										? ((e = e.replace(new RegExp('[.]', 'g'), ':')),
										  (r = e.split(':')),
										  (r[r.length - 4] = Ne(r[r.length - 4]) + Ne(r[r.length - 3]) * 256),
										  (r[r.length - 3] = Ne(r[r.length - 2]) + Ne(r[r.length - 1]) * 256),
										  (r = r.slice(0, r.length - 2)))
										: (r = e.split(':')),
									a = 0,
									i = 0,
									n = 0;
								n < r.length;
								n++
							)
								if (typeof r[n] == 'string')
									if (r[n] === 'Z') {
										for (i = 0; i < 8 - r.length + 1; i++) c[n + i] = 0;
										a = i - 1;
									} else c[n + a] = ze(parseInt(r[n], 16));
								else c[n + a] = r[n];
							return [
								(c[1] << 16) | c[0],
								(c[3] << 16) | c[2],
								(c[5] << 16) | c[4],
								(c[7] << 16) | c[6]
							];
						}
						function pn(e, r) {
							m().fill(0, e, e + r);
						}
						function or(e, r, n, a, i) {
							switch (r) {
								case 2:
									(n = Ue(n)),
										pn(e, 16),
										i && (o()[i >> 2] = 16),
										(v()[e >> 1] = r),
										(o()[(e + 4) >> 2] = n),
										(v()[(e + 2) >> 1] = ze(a));
									break;
								case 10:
									(n = ur(n)),
										pn(e, 28),
										i && (o()[i >> 2] = 28),
										(o()[e >> 2] = r),
										(o()[(e + 8) >> 2] = n[0]),
										(o()[(e + 12) >> 2] = n[1]),
										(o()[(e + 16) >> 2] = n[2]),
										(o()[(e + 20) >> 2] = n[3]),
										(v()[(e + 2) >> 1] = ze(a));
									break;
								default:
									return 5;
							}
							return 0;
						}
						var Y = {
							address_map: { id: 1, addrs: {}, names: {} },
							lookup_name: function (e) {
								var r = Ue(e);
								if (r !== null || ((r = ur(e)), r !== null)) return e;
								var n;
								if (Y.address_map.addrs[e]) n = Y.address_map.addrs[e];
								else {
									var a = Y.address_map.id++;
									oe(a < 65535, 'exceeded max address mappings of 65535'),
										(n = '172.29.' + (a & 255) + '.' + (a & 65280)),
										(Y.address_map.names[n] = e),
										(Y.address_map.addrs[e] = n);
								}
								return n;
							},
							lookup_addr: function (e) {
								return Y.address_map.names[e] ? Y.address_map.names[e] : null;
							}
						};
						function bn(e, r, n) {
							if (p) return A(11, 1, e, r, n);
							var a = ce(e);
							if (!a.daddr) return -53;
							var i = or(r, a.family, Y.lookup_name(a.daddr), a.dport, n);
							return 0;
						}
						function na() {
							return 42;
						}
						function vn(e, r, n, a, i) {
							if (p) return A(12, 1, e, r, n, a, i);
							var s = ce(e);
							return r === 1 && n === 4
								? ((o()[a >> 2] = s.error), (o()[i >> 2] = 4), (s.error = null), 0)
								: -50;
						}
						function gn(e, r, n) {
							return p ? A(13, 1, e, r, n) : ((P.varargs = n), 0);
						}
						function ta(e, r, n) {
							return 0;
						}
						function hn(e, r) {
							return p ? A(14, 1, e, r) : ((e = P.getStr(e)), P.doMkdir(e, r));
						}
						function yn(e, r, n) {
							if (p) return A(15, 1, e, r, n);
							P.varargs = n;
						}
						function wn(e, r, n, a, i, s) {
							if (p) return A(16, 1, e, r, n, a, i, s);
							var c = ce(e),
								l = c.sock_ops.recvmsg(c, n);
							if (!l) return 0;
							if (i) var b = or(i, c.family, Y.lookup_name(l.addr), l.port, s);
							return m().set(l.buffer, r), l.buffer.byteLength;
						}
						function kn(e, r) {
							if (p) return A(17, 1, e, r);
						}
						function Dn(e) {
							if (p) return A(18, 1, e);
						}
						function En(e, r, n, a, i, s) {
							if (p) return A(19, 1, e, r, n, a, i, s);
						}
						function aa(e) {
							return -50;
						}
						function ia(e, r) {
							return ce(e), -52;
						}
						function An(e, r, n) {
							if (p) return A(20, 1, e, r, n);
						}
						function Tn(e, r) {
							if (p) return A(21, 1, e, r);
						}
						function Mn(e) {
							if (p) return A(22, 1, e);
						}
						function ua(e, r) {
							q(
								"To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
							);
						}
						function oa(e, r) {
							q(
								"To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
							);
						}
						function sa(e, r) {
							if (e == r) postMessage({ cmd: 'processQueuedMainThreadWork' });
							else if (p) postMessage({ targetThread: e, cmd: 'processThreadQueue' });
							else {
								var n = g.pthreads[e],
									a = n && n.worker;
								if (!a) return;
								a.postMessage({ cmd: 'processThreadQueue' });
							}
							return 1;
						}
						function ca() {
							q('');
						}
						function fa(e, r) {
							return globalThis.DUCKDB_RUNTIME.createDirectory(t, e, r);
						}
						function la(e, r) {
							return globalThis.DUCKDB_RUNTIME.checkDirectory(t, e, r);
						}
						function _a(e, r) {
							return globalThis.DUCKDB_RUNTIME.listDirectoryEntries(t, e, r);
						}
						function da(e, r) {
							return globalThis.DUCKDB_RUNTIME.removeDirectory(t, e, r);
						}
						function ma(e) {
							return globalThis.DUCKDB_RUNTIME.closeFile(t, e);
						}
						function pa(e, r) {
							return globalThis.DUCKDB_RUNTIME.checkFile(t, e, r);
						}
						function ba(e) {
							return globalThis.DUCKDB_RUNTIME.getLastFileModificationTime(t, e);
						}
						function va(e, r, n, a) {
							return globalThis.DUCKDB_RUNTIME.moveFile(t, e, r, n, a);
						}
						function ga(e) {
							return globalThis.DUCKDB_RUNTIME.openFile(t, e);
						}
						function ha(e, r, n, a) {
							return globalThis.DUCKDB_RUNTIME.readFile(t, e, r, n, a);
						}
						function ya(e, r) {
							return globalThis.DUCKDB_RUNTIME.truncateFile(t, e, r);
						}
						function wa(e, r, n, a) {
							return globalThis.DUCKDB_RUNTIME.writeFile(t, e, r, n, a);
						}
						function ka(e, r) {
							return globalThis.DUCKDB_RUNTIME.glob(t, e, r);
						}
						function Da(e) {
							return globalThis.DUCKDB_RUNTIME.testPlatformFeature(t, e);
						}
						function Ea(e, r) {}
						function Aa() {
							return 2147483648;
						}
						function Ta(e, r, n) {
							m().copyWithin(e, r, r + n);
						}
						function Ma() {
							return J ? ot().cpus().length : navigator.hardwareConcurrency;
						}
						function A(e, r) {
							for (
								var n = arguments.length - 2, a = Ee(), i = n, s = le(i * 8), c = s >> 3, l = 0;
								l < n;
								l++
							) {
								var b = arguments[2 + l];
								C()[c + l] = b;
							}
							var D = Gn(e, i, s, r);
							return fe(a), D;
						}
						var sr = [];
						function Sa(e, r, n) {
							sr.length = r;
							for (var a = n >> 3, i = 0; i < r; i++) sr[i] = C()[a + i];
							var s = e < 0,
								c = s ? Nt[-e - 1] : ti[e];
							return c.apply(null, sr);
						}
						function xa(e) {
							try {
								return x.grow((e - N.byteLength + 65535) >>> 16), Q(x.buffer), 1;
							} catch (r) {}
						}
						function Ra(e) {
							var r = m().length;
							if (((e = e >>> 0), e <= r)) return !1;
							var n = 2147483648;
							if (e > n) return !1;
							for (var a = 1; a <= 4; a *= 2) {
								var i = r * (1 + 0.2 / a);
								i = Math.min(i, e + 100663296);
								var s = Math.min(n, ht(Math.max(e, i), 65536)),
									c = xa(s);
								if (c) return !0;
							}
							return !1;
						}
						var k = {
							inEventHandler: 0,
							removeAllEventListeners: function () {
								for (var e = k.eventHandlers.length - 1; e >= 0; --e) k._removeHandler(e);
								(k.eventHandlers = []), (k.deferredCalls = []);
							},
							registerRemoveEventListeners: function () {
								k.removeEventListenersRegistered ||
									(kt.push(k.removeAllEventListeners), (k.removeEventListenersRegistered = !0));
							},
							deferredCalls: [],
							deferCall: function (e, r, n) {
								function a(c, l) {
									if (c.length != l.length) return !1;
									for (var b in c) if (c[b] != l[b]) return !1;
									return !0;
								}
								for (var i in k.deferredCalls) {
									var s = k.deferredCalls[i];
									if (s.targetFunction == e && a(s.argsList, n)) return;
								}
								k.deferredCalls.push({ targetFunction: e, precedence: r, argsList: n }),
									k.deferredCalls.sort(function (c, l) {
										return c.precedence < l.precedence;
									});
							},
							removeDeferredCalls: function (e) {
								for (var r = 0; r < k.deferredCalls.length; ++r)
									k.deferredCalls[r].targetFunction == e && (k.deferredCalls.splice(r, 1), --r);
							},
							canPerformEventHandlerRequests: function () {
								return k.inEventHandler && k.currentEventHandler.allowsDeferredCalls;
							},
							runDeferredCalls: function () {
								if (!!k.canPerformEventHandlerRequests())
									for (var e = 0; e < k.deferredCalls.length; ++e) {
										var r = k.deferredCalls[e];
										k.deferredCalls.splice(e, 1), --e, r.targetFunction.apply(null, r.argsList);
									}
							},
							eventHandlers: [],
							removeAllHandlersOnTarget: function (e, r) {
								for (var n = 0; n < k.eventHandlers.length; ++n)
									k.eventHandlers[n].target == e &&
										(!r || r == k.eventHandlers[n].eventTypeString) &&
										k._removeHandler(n--);
							},
							_removeHandler: function (e) {
								var r = k.eventHandlers[e];
								r.target.removeEventListener(r.eventTypeString, r.eventListenerFunc, r.useCapture),
									k.eventHandlers.splice(e, 1);
							},
							registerOrRemoveHandler: function (e) {
								var r = function (i) {
									++k.inEventHandler,
										(k.currentEventHandler = e),
										k.runDeferredCalls(),
										e.handlerFunc(i),
										k.runDeferredCalls(),
										--k.inEventHandler;
								};
								if (e.callbackfunc)
									(e.eventListenerFunc = r),
										e.target.addEventListener(e.eventTypeString, r, e.useCapture),
										k.eventHandlers.push(e),
										k.registerRemoveEventListeners();
								else
									for (var n = 0; n < k.eventHandlers.length; ++n)
										k.eventHandlers[n].target == e.target &&
											k.eventHandlers[n].eventTypeString == e.eventTypeString &&
											k._removeHandler(n--);
							},
							queueEventHandlerOnThread_iiii: function (e, r, n, a, i) {
								var s = Ee(),
									c = le(12);
								(o()[c >> 2] = n),
									(o()[(c + 4) >> 2] = a),
									(o()[(c + 8) >> 2] = i),
									_r(0, e, 637534208, r, a, c),
									fe(s);
							},
							getTargetThreadForEventCallback: function (e) {
								switch (e) {
									case 1:
										return 0;
									case 2:
										return g.currentProxiedOperationCallerThread;
									default:
										return e;
								}
							},
							getNodeNameForTarget: function (e) {
								return e
									? e == window
										? '#window'
										: e == screen
										? '#screen'
										: e && e.nodeName
										? e.nodeName
										: ''
									: '';
							},
							fullscreenEnabled: function () {
								return document.fullscreenEnabled || document.webkitFullscreenEnabled;
							}
						};
						function Ba(e) {
							var r = Fr(e) + 1,
								n = Ae(r);
							return Fe(e, n, r), n;
						}
						function Fa(e, r, n, a) {
							var i = Ee(),
								s = le(12),
								c = 0;
							r && (c = Ba(r)),
								(o()[s >> 2] = c),
								(o()[(s + 4) >> 2] = n),
								(o()[(s + 8) >> 2] = a),
								_r(0, e, 657457152, 0, c, s),
								fe(i);
						}
						function Ia(e, r, n, a) {
							(r = r ? j(r) : ''), Fa(e, r, n, a);
						}
						function Pa(e) {
							return e > 2 ? j(e) : e;
						}
						var Ca = [
							0,
							typeof document != 'undefined' ? document : 0,
							typeof window != 'undefined' ? window : 0
						];
						function Ua(e) {
							e = Pa(e);
							var r =
								Ca[e] || (typeof document != 'undefined' ? document.querySelector(e) : void 0);
							return r;
						}
						function cr(e) {
							return Ua(e);
						}
						function Sn(e, r, n) {
							var a = cr(e);
							if (!a) return -4;
							if (
								(a.canvasSharedPtr &&
									((o()[a.canvasSharedPtr >> 2] = r), (o()[(a.canvasSharedPtr + 4) >> 2] = n)),
								a.offscreenCanvas || !a.controlTransferredOffscreen)
							) {
								a.offscreenCanvas && (a = a.offscreenCanvas);
								var i = !1;
								if (a.GLctxObject && a.GLctxObject.GLctx) {
									var s = a.GLctxObject.GLctx.getParameter(2978);
									i = s[0] === 0 && s[1] === 0 && s[2] === a.width && s[3] === a.height;
								}
								(a.width = r), (a.height = n), i && a.GLctxObject.GLctx.viewport(0, 0, r, n);
							} else if (a.canvasSharedPtr) {
								var c = o()[(a.canvasSharedPtr + 8) >> 2];
								return Ia(c, e, r, n), 1;
							} else return -4;
							return 0;
						}
						function xn(e, r, n) {
							return p ? A(23, 1, e, r, n) : Sn(e, r, n);
						}
						function Na(e, r, n) {
							var a = cr(e);
							return a ? Sn(e, r, n) : xn(e, r, n);
						}
						function La(e) {}
						function Ha() {
							if (!ye())
								try {
									p ? Yn(ae) : Pe(ae);
								} catch (e) {
									Ce(e);
								}
						}
						function Wa(e, r) {
							if (!Be) {
								if (r) {
									e();
									return;
								}
								try {
									e(), p && Ha();
								} catch (n) {
									Ce(n);
								}
							}
						}
						function Oa() {
							tr += 1;
						}
						function ja() {
							tr -= 1;
						}
						function qa(e, r, n) {
							return (
								Oa(),
								setTimeout(function () {
									ja(),
										Wa(function () {
											se.get(e)(n);
										});
								}, r)
							);
						}
						function Ga() {
							throw 'unwind';
						}
						function Ya(e) {
							var r = e.getExtension('ANGLE_instanced_arrays');
							if (r)
								return (
									(e.vertexAttribDivisor = function (n, a) {
										r.vertexAttribDivisorANGLE(n, a);
									}),
									(e.drawArraysInstanced = function (n, a, i, s) {
										r.drawArraysInstancedANGLE(n, a, i, s);
									}),
									(e.drawElementsInstanced = function (n, a, i, s, c) {
										r.drawElementsInstancedANGLE(n, a, i, s, c);
									}),
									1
								);
						}
						function za(e) {
							var r = e.getExtension('OES_vertex_array_object');
							if (r)
								return (
									(e.createVertexArray = function () {
										return r.createVertexArrayOES();
									}),
									(e.deleteVertexArray = function (n) {
										r.deleteVertexArrayOES(n);
									}),
									(e.bindVertexArray = function (n) {
										r.bindVertexArrayOES(n);
									}),
									(e.isVertexArray = function (n) {
										return r.isVertexArrayOES(n);
									}),
									1
								);
						}
						function Va(e) {
							var r = e.getExtension('WEBGL_draw_buffers');
							if (r)
								return (
									(e.drawBuffers = function (n, a) {
										r.drawBuffersWEBGL(n, a);
									}),
									1
								);
						}
						function Ka(e) {
							return !!(e.multiDrawWebgl = e.getExtension('WEBGL_multi_draw'));
						}
						var B = {
								counter: 1,
								buffers: [],
								programs: [],
								framebuffers: [],
								renderbuffers: [],
								textures: [],
								shaders: [],
								vaos: [],
								contexts: {},
								offscreenCanvases: {},
								queries: [],
								stringCache: {},
								unpackAlignment: 4,
								recordError: function (r) {
									B.lastError || (B.lastError = r);
								},
								getNewId: function (e) {
									for (var r = B.counter++, n = e.length; n < r; n++) e[n] = null;
									return r;
								},
								getSource: function (e, r, n, a) {
									for (var i = '', s = 0; s < r; ++s) {
										var c = a ? o()[(a + s * 4) >> 2] : -1;
										i += j(o()[(n + s * 4) >> 2], c < 0 ? void 0 : c);
									}
									return i;
								},
								createContext: function (e, r) {
									e.getContextSafariWebGL2Fixed ||
										((e.getContextSafariWebGL2Fixed = e.getContext),
										(e.getContext = function (i, s) {
											var c = e.getContextSafariWebGL2Fixed(i, s);
											return (i == 'webgl') == c instanceof WebGLRenderingContext ? c : null;
										}));
									var n = e.getContext('webgl', r);
									if (!n) return 0;
									var a = B.registerContext(n, r);
									return a;
								},
								registerContext: function (e, r) {
									var n = Ae(8);
									o()[(n + 4) >> 2] = Ge();
									var a = { handle: n, attributes: r, version: r.majorVersion, GLctx: e };
									return (
										e.canvas && (e.canvas.GLctxObject = a),
										(B.contexts[n] = a),
										(typeof r.enableExtensionsByDefault == 'undefined' ||
											r.enableExtensionsByDefault) &&
											B.initExtensions(a),
										n
									);
								},
								makeContextCurrent: function (e) {
									return (
										(B.currentContext = B.contexts[e]),
										(t.ctx = On = B.currentContext && B.currentContext.GLctx),
										!(e && !On)
									);
								},
								getContext: function (e) {
									return B.contexts[e];
								},
								deleteContext: function (e) {
									B.currentContext === B.contexts[e] && (B.currentContext = null),
										typeof k == 'object' && k.removeAllHandlersOnTarget(B.contexts[e].GLctx.canvas),
										B.contexts[e] &&
											B.contexts[e].GLctx.canvas &&
											(B.contexts[e].GLctx.canvas.GLctxObject = void 0),
										Ve(B.contexts[e].handle),
										(B.contexts[e] = null);
								},
								initExtensions: function (e) {
									if ((e || (e = B.currentContext), !e.initExtensionsDone)) {
										e.initExtensionsDone = !0;
										var r = e.GLctx;
										Ya(r),
											za(r),
											Va(r),
											(r.disjointTimerQueryExt = r.getExtension('EXT_disjoint_timer_query')),
											Ka(r);
										var n = r.getSupportedExtensions() || [];
										n.forEach(function (a) {
											!a.includes('lose_context') && !a.includes('debug') && r.getExtension(a);
										});
									}
								}
							},
							$a = ['default', 'low-power', 'high-performance'];
						function Xa(e, r) {
							var n = r >> 2,
								a = o()[n + (24 >> 2)],
								i = {
									alpha: !!o()[n + (0 >> 2)],
									depth: !!o()[n + (4 >> 2)],
									stencil: !!o()[n + (8 >> 2)],
									antialias: !!o()[n + (12 >> 2)],
									premultipliedAlpha: !!o()[n + (16 >> 2)],
									preserveDrawingBuffer: !!o()[n + (20 >> 2)],
									powerPreference: $a[a],
									failIfMajorPerformanceCaveat: !!o()[n + (28 >> 2)],
									majorVersion: o()[n + (32 >> 2)],
									minorVersion: o()[n + (36 >> 2)],
									enableExtensionsByDefault: o()[n + (40 >> 2)],
									explicitSwapControl: o()[n + (44 >> 2)],
									proxyContextToMainThread: o()[n + (48 >> 2)],
									renderViaOffscreenBackBuffer: o()[n + (52 >> 2)]
								},
								s = cr(e);
							if (!s || i.explicitSwapControl) return 0;
							var c = B.createContext(s, i);
							return c;
						}
						function Ja(e, r) {
							return Xa(e, r);
						}
						var fr = {};
						function Qa() {
							return er || './this.program';
						}
						function De() {
							if (!De.strings) {
								var e =
										(
											(typeof navigator == 'object' &&
												navigator.languages &&
												navigator.languages[0]) ||
											'C'
										).replace('-', '_') + '.UTF-8',
									r = {
										USER: 'web_user',
										LOGNAME: 'web_user',
										PATH: '/',
										PWD: '/',
										HOME: '/home/web_user',
										LANG: e,
										_: Qa()
									};
								for (var n in fr) fr[n] === void 0 ? delete r[n] : (r[n] = fr[n]);
								var a = [];
								for (var n in r) a.push(n + '=' + r[n]);
								De.strings = a;
							}
							return De.strings;
						}
						function Rn(e, r) {
							if (p) return A(24, 1, e, r);
							var n = 0;
							return (
								De().forEach(function (a, i) {
									var s = r + n;
									(o()[(e + i * 4) >> 2] = s), gt(a, s), (n += a.length + 1);
								}),
								0
							);
						}
						function Bn(e, r) {
							if (p) return A(25, 1, e, r);
							var n = De();
							o()[e >> 2] = n.length;
							var a = 0;
							return (
								n.forEach(function (i) {
									a += i.length + 1;
								}),
								(o()[r >> 2] = a),
								0
							);
						}
						function Fn(e) {
							return p ? A(26, 1, e) : 0;
						}
						function In(e, r) {
							if (p) return A(27, 1, e, r);
							var n = e == 1 || e == 2 ? 2 : q();
							return (d()[r >> 0] = n), 0;
						}
						function Pn(e, r, n, a, i, s) {
							if (p) return A(28, 1, e, r, n, a, i, s);
							var c = P.getStreamFromFD(e),
								l = P.doReadv(c, r, n, a);
							return (o()[s >> 2] = l), 0;
						}
						function Cn(e, r, n, a, i, s) {
							if (p) return A(29, 1, e, r, n, a, i, s);
							var c = P.getStreamFromFD(e),
								l = P.doWritev(c, r, n, a);
							return (o()[s >> 2] = l), 0;
						}
						function Un(e, r, n, a) {
							if (p) return A(30, 1, e, r, n, a);
							var i = P.getStreamFromFD(e),
								s = P.doReadv(i, r, n);
							return (o()[a >> 2] = s), 0;
						}
						function Nn(e, r, n, a, i) {
							if (p) return A(31, 1, e, r, n, a, i);
						}
						function Ln(e) {
							if (p) return A(32, 1, e);
							var r = P.getStreamFromFD(e);
							return r.stream_ops && r.stream_ops.fsync ? -r.stream_ops.fsync(r) : 0;
						}
						function Hn(e, r, n, a) {
							if (p) return A(33, 1, e, r, n, a);
							for (var i = 0, s = 0; s < n; s++) {
								for (
									var c = o()[(r + s * 8) >> 2], l = o()[(r + (s * 8 + 4)) >> 2], b = 0;
									b < l;
									b++
								)
									P.printChar(e, m()[c + b]);
								i += l;
							}
							return (o()[a >> 2] = i), 0;
						}
						function Wn(e, r, n, a) {
							if (p) return A(34, 1, e, r, n, a);
							var i = 0,
								s = 0,
								c = 0,
								l = 0,
								b = 0,
								D = 0,
								E;
							function z(R, V, I, K, $, Me) {
								var _, h, T, S;
								return (
									(h = R === 10 ? 28 : 16),
									($ = R === 10 ? un($) : ir($)),
									(_ = Ae(h)),
									(S = or(_, R, $, Me)),
									oe(!S),
									(T = Ae(32)),
									(o()[(T + 4) >> 2] = R),
									(o()[(T + 8) >> 2] = V),
									(o()[(T + 12) >> 2] = I),
									(o()[(T + 24) >> 2] = K),
									(o()[(T + 20) >> 2] = _),
									R === 10 ? (o()[(T + 16) >> 2] = 28) : (o()[(T + 16) >> 2] = 16),
									(o()[(T + 28) >> 2] = 0),
									T
								);
							}
							if (
								(n &&
									((c = o()[n >> 2]),
									(l = o()[(n + 4) >> 2]),
									(b = o()[(n + 8) >> 2]),
									(D = o()[(n + 12) >> 2])),
								b && !D && (D = b === 2 ? 17 : 6),
								!b && D && (b = D === 17 ? 2 : 1),
								D === 0 && (D = 6),
								b === 0 && (b = 1),
								!e && !r)
							)
								return -2;
							if (c & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32) || (n !== 0 && o()[n >> 2] & 2 && !e))
								return -1;
							if (c & 32) return -2;
							if (b !== 0 && b !== 1 && b !== 2) return -7;
							if (l !== 0 && l !== 2 && l !== 10) return -6;
							if (r && ((r = j(r)), (s = parseInt(r, 10)), isNaN(s))) return c & 1024 ? -2 : -8;
							if (!e)
								return (
									l === 0 && (l = 2),
									(c & 1) == 0 && (l === 2 ? (i = Ye(2130706433)) : (i = [0, 0, 0, 1])),
									(E = z(l, b, D, null, i, s)),
									(o()[a >> 2] = E),
									0
								);
							if (((e = j(e)), (i = Ue(e)), i !== null))
								if (l === 0 || l === 2) l = 2;
								else if (l === 10 && c & 8) (i = [0, 0, Ye(65535), i]), (l = 10);
								else return -2;
							else if (((i = ur(e)), i !== null))
								if (l === 0 || l === 10) l = 10;
								else return -2;
							return i != null
								? ((E = z(l, b, D, e, i, s)), (o()[a >> 2] = E), 0)
								: c & 4
								? -2
								: ((e = Y.lookup_name(e)),
								  (i = Ue(e)),
								  l === 0 ? (l = 2) : l === 10 && (i = [0, 0, Ye(65535), i]),
								  (E = z(l, b, D, null, i, s)),
								  (o()[a >> 2] = E),
								  0);
						}
						function Za() {
							if (typeof crypto == 'object' && typeof crypto.getRandomValues == 'function') {
								var e = new Uint8Array(1);
								return function () {
									return crypto.getRandomValues(e), e[0];
								};
							} else if (J)
								try {
									var r = $e('crypto');
									return function () {
										return r.randomBytes(1)[0];
									};
								} catch (n) {}
							return function () {
								q('randomDevice');
							};
						}
						function Le(e, r) {
							Le.randomDevice || (Le.randomDevice = Za());
							for (var n = 0; n < r; n++) d()[(e + n) >> 0] = Le.randomDevice();
							return 0;
						}
						function ei(e, r, n, a, i, s, c) {
							var l = on(e, r);
							if (l.errno) return -6;
							var b = l.port,
								D = l.addr,
								E = !1;
							if (n && a) {
								var z;
								if (c & 1 || !(z = Y.lookup_addr(D))) {
									if (c & 8) return -2;
								} else D = z;
								var R = Fe(D, n, a);
								R + 1 >= a && (E = !0);
							}
							if (i && s) {
								b = '' + b;
								var R = Fe(b, i, s);
								R + 1 >= s && (E = !0);
							}
							return E ? -12 : 0;
						}
						function He(e) {
							return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
						}
						function lr(e, r) {
							for (var n = 0, a = 0; a <= r; n += e[a++]);
							return n;
						}
						var We = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
							Oe = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
						function je(e, r) {
							for (var n = new Date(e.getTime()); r > 0; ) {
								var a = He(n.getFullYear()),
									i = n.getMonth(),
									s = (a ? We : Oe)[i];
								if (r > s - n.getDate())
									(r -= s - n.getDate() + 1),
										n.setDate(1),
										i < 11
											? n.setMonth(i + 1)
											: (n.setMonth(0), n.setFullYear(n.getFullYear() + 1));
								else return n.setDate(n.getDate() + r), n;
							}
							return n;
						}
						function ri(e, r, n, a) {
							var i = o()[(a + 40) >> 2],
								s = {
									tm_sec: o()[a >> 2],
									tm_min: o()[(a + 4) >> 2],
									tm_hour: o()[(a + 8) >> 2],
									tm_mday: o()[(a + 12) >> 2],
									tm_mon: o()[(a + 16) >> 2],
									tm_year: o()[(a + 20) >> 2],
									tm_wday: o()[(a + 24) >> 2],
									tm_yday: o()[(a + 28) >> 2],
									tm_isdst: o()[(a + 32) >> 2],
									tm_gmtoff: o()[(a + 36) >> 2],
									tm_zone: i ? j(i) : ''
								},
								c = j(n),
								l = {
									'%c': '%a %b %d %H:%M:%S %Y',
									'%D': '%m/%d/%y',
									'%F': '%Y-%m-%d',
									'%h': '%b',
									'%r': '%I:%M:%S %p',
									'%R': '%H:%M',
									'%T': '%H:%M:%S',
									'%x': '%m/%d/%y',
									'%X': '%H:%M:%S',
									'%Ec': '%c',
									'%EC': '%C',
									'%Ex': '%m/%d/%y',
									'%EX': '%H:%M:%S',
									'%Ey': '%y',
									'%EY': '%Y',
									'%Od': '%d',
									'%Oe': '%e',
									'%OH': '%H',
									'%OI': '%I',
									'%Om': '%m',
									'%OM': '%M',
									'%OS': '%S',
									'%Ou': '%u',
									'%OU': '%U',
									'%OV': '%V',
									'%Ow': '%w',
									'%OW': '%W',
									'%Oy': '%y'
								};
							for (var b in l) c = c.replace(new RegExp(b, 'g'), l[b]);
							var D = [
									'Sunday',
									'Monday',
									'Tuesday',
									'Wednesday',
									'Thursday',
									'Friday',
									'Saturday'
								],
								E = [
									'January',
									'February',
									'March',
									'April',
									'May',
									'June',
									'July',
									'August',
									'September',
									'October',
									'November',
									'December'
								];
							function z(_, h, T) {
								for (var S = typeof _ == 'number' ? _.toString() : _ || ''; S.length < h; )
									S = T[0] + S;
								return S;
							}
							function R(_, h) {
								return z(_, h, '0');
							}
							function V(_, h) {
								function T(X) {
									return X < 0 ? -1 : X > 0 ? 1 : 0;
								}
								var S;
								return (
									(S = T(_.getFullYear() - h.getFullYear())) === 0 &&
										(S = T(_.getMonth() - h.getMonth())) === 0 &&
										(S = T(_.getDate() - h.getDate())),
									S
								);
							}
							function I(_) {
								switch (_.getDay()) {
									case 0:
										return new Date(_.getFullYear() - 1, 11, 29);
									case 1:
										return _;
									case 2:
										return new Date(_.getFullYear(), 0, 3);
									case 3:
										return new Date(_.getFullYear(), 0, 2);
									case 4:
										return new Date(_.getFullYear(), 0, 1);
									case 5:
										return new Date(_.getFullYear() - 1, 11, 31);
									case 6:
										return new Date(_.getFullYear() - 1, 11, 30);
								}
							}
							function K(_) {
								var h = je(new Date(_.tm_year + 1900, 0, 1), _.tm_yday),
									T = new Date(h.getFullYear(), 0, 4),
									S = new Date(h.getFullYear() + 1, 0, 4),
									X = I(T),
									re = I(S);
								return V(X, h) <= 0
									? V(re, h) <= 0
										? h.getFullYear() + 1
										: h.getFullYear()
									: h.getFullYear() - 1;
							}
							var $ = {
								'%a': function (_) {
									return D[_.tm_wday].substring(0, 3);
								},
								'%A': function (_) {
									return D[_.tm_wday];
								},
								'%b': function (_) {
									return E[_.tm_mon].substring(0, 3);
								},
								'%B': function (_) {
									return E[_.tm_mon];
								},
								'%C': function (_) {
									var h = _.tm_year + 1900;
									return R((h / 100) | 0, 2);
								},
								'%d': function (_) {
									return R(_.tm_mday, 2);
								},
								'%e': function (_) {
									return z(_.tm_mday, 2, ' ');
								},
								'%g': function (_) {
									return K(_).toString().substring(2);
								},
								'%G': function (_) {
									return K(_);
								},
								'%H': function (_) {
									return R(_.tm_hour, 2);
								},
								'%I': function (_) {
									var h = _.tm_hour;
									return h == 0 ? (h = 12) : h > 12 && (h -= 12), R(h, 2);
								},
								'%j': function (_) {
									return R(_.tm_mday + lr(He(_.tm_year + 1900) ? We : Oe, _.tm_mon - 1), 3);
								},
								'%m': function (_) {
									return R(_.tm_mon + 1, 2);
								},
								'%M': function (_) {
									return R(_.tm_min, 2);
								},
								'%n': function () {
									return `
`;
								},
								'%p': function (_) {
									return _.tm_hour >= 0 && _.tm_hour < 12 ? 'AM' : 'PM';
								},
								'%S': function (_) {
									return R(_.tm_sec, 2);
								},
								'%t': function () {
									return '	';
								},
								'%u': function (_) {
									return _.tm_wday || 7;
								},
								'%U': function (_) {
									var h = new Date(_.tm_year + 1900, 0, 1),
										T = h.getDay() === 0 ? h : je(h, 7 - h.getDay()),
										S = new Date(_.tm_year + 1900, _.tm_mon, _.tm_mday);
									if (V(T, S) < 0) {
										var X = lr(He(S.getFullYear()) ? We : Oe, S.getMonth() - 1) - 31,
											re = 31 - T.getDate(),
											ue = re + X + S.getDate();
										return R(Math.ceil(ue / 7), 2);
									}
									return V(T, h) === 0 ? '01' : '00';
								},
								'%V': function (_) {
									var h = new Date(_.tm_year + 1900, 0, 4),
										T = new Date(_.tm_year + 1901, 0, 4),
										S = I(h),
										X = I(T),
										re = je(new Date(_.tm_year + 1900, 0, 1), _.tm_yday);
									if (V(re, S) < 0) return '53';
									if (V(X, re) <= 0) return '01';
									var ue;
									return (
										S.getFullYear() < _.tm_year + 1900
											? (ue = _.tm_yday + 32 - S.getDate())
											: (ue = _.tm_yday + 1 - S.getDate()),
										R(Math.ceil(ue / 7), 2)
									);
								},
								'%w': function (_) {
									return _.tm_wday;
								},
								'%W': function (_) {
									var h = new Date(_.tm_year, 0, 1),
										T = h.getDay() === 1 ? h : je(h, h.getDay() === 0 ? 1 : 7 - h.getDay() + 1),
										S = new Date(_.tm_year + 1900, _.tm_mon, _.tm_mday);
									if (V(T, S) < 0) {
										var X = lr(He(S.getFullYear()) ? We : Oe, S.getMonth() - 1) - 31,
											re = 31 - T.getDate(),
											ue = re + X + S.getDate();
										return R(Math.ceil(ue / 7), 2);
									}
									return V(T, h) === 0 ? '01' : '00';
								},
								'%y': function (_) {
									return (_.tm_year + 1900).toString().substring(2);
								},
								'%Y': function (_) {
									return _.tm_year + 1900;
								},
								'%z': function (_) {
									var h = _.tm_gmtoff,
										T = h >= 0;
									return (
										(h = Math.abs(h) / 60),
										(h = (h / 60) * 100 + (h % 60)),
										(T ? '+' : '-') + String('0000' + h).slice(-4)
									);
								},
								'%Z': function (_) {
									return _.tm_zone;
								},
								'%%': function () {
									return '%';
								}
							};
							for (var b in $) c.includes(b) && (c = c.replace(new RegExp(b, 'g'), $[b](s)));
							var Me = ai(c, !1);
							return Me.length > r ? 0 : (Ir(Me, e), Me.length - 1);
						}
						function ni(e, r, n, a) {
							return ri(e, r, n, a);
						}
						p || g.initMainThreadBlock();
						var On,
							ti = [
								null,
								Jr,
								Vt,
								nn,
								tn,
								cn,
								fn,
								ln,
								_n,
								dn,
								mn,
								bn,
								vn,
								gn,
								hn,
								yn,
								wn,
								kn,
								Dn,
								En,
								An,
								Tn,
								Mn,
								xn,
								Rn,
								Bn,
								Fn,
								In,
								Pn,
								Cn,
								Un,
								Nn,
								Ln,
								Hn,
								Wn
							];
						function ai(e, r, n) {
							var a = n > 0 ? n : Fr(e) + 1,
								i = new Array(a),
								s = Br(e, i, 0, i.length);
							return r && (i.length = s), i;
						}
						var ii = {
								c: qt,
								Ba: zt,
								qa: Kt,
								va: $t,
								y: Xt,
								ua: Jt,
								ca: Qt,
								ja: ea,
								_: nn,
								R: tn,
								aa: cn,
								$: fn,
								b: ln,
								T: _n,
								S: dn,
								P: mn,
								W: bn,
								o: na,
								Z: vn,
								ga: gn,
								M: ta,
								Q: hn,
								x: yn,
								X: wn,
								N: kn,
								p: Dn,
								Y: En,
								ba: aa,
								da: ia,
								t: An,
								r: Tn,
								q: Mn,
								fa: ua,
								ea: oa,
								Aa: sa,
								g: ca,
								v: Qr,
								H: fa,
								I: la,
								F: _a,
								G: da,
								n: ma,
								D: pa,
								K: ba,
								E: va,
								L: ga,
								i: ha,
								J: ya,
								m: wa,
								C: ka,
								l: Da,
								na: rn,
								s: Ea,
								e: en,
								d: Kr,
								ha: Aa,
								h: ke,
								pa: Ta,
								ia: Ma,
								xa: Sa,
								ra: Ra,
								ya: Na,
								k: La,
								wa: qa,
								sa: Ga,
								za: Ja,
								la: Rn,
								ma: Bn,
								ta: Pe,
								f: Fn,
								oa: In,
								A: Pn,
								z: Cn,
								w: Un,
								B: Nn,
								O: Ln,
								j: Hn,
								u: Wn,
								U: Le,
								V: ei,
								a: x || t.wasmMemory,
								ka: ni
							},
							pu = Ut(),
							ui = (t.___wasm_call_ctors = function () {
								return (ui = t.___wasm_call_ctors = t.asm.Ca).apply(null, arguments);
							}),
							oi = (t._main = function () {
								return (oi = t._main = t.asm.Da).apply(null, arguments);
							}),
							si = (t._duckdb_web_fs_glob_add_path = function () {
								return (si = t._duckdb_web_fs_glob_add_path = t.asm.Fa).apply(null, arguments);
							}),
							ci = (t._duckdb_web_clear_response = function () {
								return (ci = t._duckdb_web_clear_response = t.asm.Ga).apply(null, arguments);
							}),
							fi = (t._duckdb_web_fail_with = function () {
								return (fi = t._duckdb_web_fail_with = t.asm.Ha).apply(null, arguments);
							}),
							li = (t._duckdb_web_reset = function () {
								return (li = t._duckdb_web_reset = t.asm.Ia).apply(null, arguments);
							}),
							_i = (t._duckdb_web_connect = function () {
								return (_i = t._duckdb_web_connect = t.asm.Ja).apply(null, arguments);
							}),
							di = (t._duckdb_web_disconnect = function () {
								return (di = t._duckdb_web_disconnect = t.asm.Ka).apply(null, arguments);
							}),
							mi = (t._duckdb_web_flush_files = function () {
								return (mi = t._duckdb_web_flush_files = t.asm.La).apply(null, arguments);
							}),
							pi = (t._duckdb_web_flush_file = function () {
								return (pi = t._duckdb_web_flush_file = t.asm.Ma).apply(null, arguments);
							}),
							bi = (t._duckdb_web_open = function () {
								return (bi = t._duckdb_web_open = t.asm.Na).apply(null, arguments);
							}),
							vi = (t._duckdb_web_collect_file_stats = function () {
								return (vi = t._duckdb_web_collect_file_stats = t.asm.Oa).apply(null, arguments);
							}),
							gi = (t._duckdb_web_export_file_stats = function () {
								return (gi = t._duckdb_web_export_file_stats = t.asm.Pa).apply(null, arguments);
							}),
							hi = (t._duckdb_web_fs_drop_file = function () {
								return (hi = t._duckdb_web_fs_drop_file = t.asm.Qa).apply(null, arguments);
							}),
							yi = (t._duckdb_web_fs_drop_files = function () {
								return (yi = t._duckdb_web_fs_drop_files = t.asm.Ra).apply(null, arguments);
							}),
							wi = (t._duckdb_web_fs_glob_file_infos = function () {
								return (wi = t._duckdb_web_fs_glob_file_infos = t.asm.Sa).apply(null, arguments);
							}),
							ki = (t._duckdb_web_fs_get_file_info_by_id = function () {
								return (ki = t._duckdb_web_fs_get_file_info_by_id = t.asm.Ta).apply(
									null,
									arguments
								);
							}),
							Di = (t._duckdb_web_fs_get_file_info_by_name = function () {
								return (Di = t._duckdb_web_fs_get_file_info_by_name = t.asm.Ua).apply(
									null,
									arguments
								);
							}),
							Ei = (t._duckdb_web_fs_set_file_descriptor = function () {
								return (Ei = t._duckdb_web_fs_set_file_descriptor = t.asm.Va).apply(
									null,
									arguments
								);
							}),
							Ai = (t._duckdb_web_fs_register_file_url = function () {
								return (Ai = t._duckdb_web_fs_register_file_url = t.asm.Wa).apply(null, arguments);
							}),
							Ti = (t._duckdb_web_fs_register_file_buffer = function () {
								return (Ti = t._duckdb_web_fs_register_file_buffer = t.asm.Xa).apply(
									null,
									arguments
								);
							}),
							Mi = (t._duckdb_web_copy_file_to_buffer = function () {
								return (Mi = t._duckdb_web_copy_file_to_buffer = t.asm.Ya).apply(null, arguments);
							}),
							Si = (t._duckdb_web_copy_file_to_path = function () {
								return (Si = t._duckdb_web_copy_file_to_path = t.asm.Za).apply(null, arguments);
							}),
							xi = (t._duckdb_web_get_version = function () {
								return (xi = t._duckdb_web_get_version = t.asm._a).apply(null, arguments);
							}),
							Ri = (t._duckdb_web_get_feature_flags = function () {
								return (Ri = t._duckdb_web_get_feature_flags = t.asm.$a).apply(null, arguments);
							}),
							Bi = (t._duckdb_web_tokenize = function () {
								return (Bi = t._duckdb_web_tokenize = t.asm.ab).apply(null, arguments);
							}),
							Fi = (t._duckdb_web_prepared_create = function () {
								return (Fi = t._duckdb_web_prepared_create = t.asm.bb).apply(null, arguments);
							}),
							Ii = (t._duckdb_web_prepared_close = function () {
								return (Ii = t._duckdb_web_prepared_close = t.asm.cb).apply(null, arguments);
							}),
							Pi = (t._duckdb_web_prepared_run = function () {
								return (Pi = t._duckdb_web_prepared_run = t.asm.db).apply(null, arguments);
							}),
							Ci = (t._duckdb_web_prepared_send = function () {
								return (Ci = t._duckdb_web_prepared_send = t.asm.eb).apply(null, arguments);
							}),
							Ui = (t._duckdb_web_query_run = function () {
								return (Ui = t._duckdb_web_query_run = t.asm.fb).apply(null, arguments);
							}),
							Ni = (t._duckdb_web_query_send = function () {
								return (Ni = t._duckdb_web_query_send = t.asm.gb).apply(null, arguments);
							}),
							Li = (t._duckdb_web_query_fetch_results = function () {
								return (Li = t._duckdb_web_query_fetch_results = t.asm.hb).apply(null, arguments);
							}),
							Hi = (t._duckdb_web_get_tablenames = function () {
								return (Hi = t._duckdb_web_get_tablenames = t.asm.ib).apply(null, arguments);
							}),
							Wi = (t._duckdb_web_insert_arrow_from_ipc_stream = function () {
								return (Wi = t._duckdb_web_insert_arrow_from_ipc_stream = t.asm.jb).apply(
									null,
									arguments
								);
							}),
							Oi = (t._duckdb_web_insert_csv_from_path = function () {
								return (Oi = t._duckdb_web_insert_csv_from_path = t.asm.kb).apply(null, arguments);
							}),
							ji = (t._duckdb_web_insert_json_from_path = function () {
								return (ji = t._duckdb_web_insert_json_from_path = t.asm.lb).apply(null, arguments);
							}),
							qi = (t._emscripten_tls_init = function () {
								return (qi = t._emscripten_tls_init = t.asm.mb).apply(null, arguments);
							}),
							Gi = (t._emscripten_current_thread_process_queued_calls = function () {
								return (Gi = t._emscripten_current_thread_process_queued_calls = t.asm.nb).apply(
									null,
									arguments
								);
							}),
							jn = (t._emscripten_main_browser_thread_id = function () {
								return (jn = t._emscripten_main_browser_thread_id = t.asm.ob).apply(
									null,
									arguments
								);
							}),
							qn = (t._emscripten_sync_run_in_main_thread_4 = function () {
								return (qn = t._emscripten_sync_run_in_main_thread_4 = t.asm.pb).apply(
									null,
									arguments
								);
							}),
							qe = (t._emscripten_main_thread_process_queued_calls = function () {
								return (qe = t._emscripten_main_thread_process_queued_calls = t.asm.qb).apply(
									null,
									arguments
								);
							}),
							Gn = (t._emscripten_run_in_main_runtime_thread_js = function () {
								return (Gn = t._emscripten_run_in_main_runtime_thread_js = t.asm.rb).apply(
									null,
									arguments
								);
							}),
							_r = (t.__emscripten_call_on_thread = function () {
								return (_r = t.__emscripten_call_on_thread = t.asm.sb).apply(null, arguments);
							}),
							Yn = (t.__emscripten_thread_exit = function () {
								return (Yn = t.__emscripten_thread_exit = t.asm.tb).apply(null, arguments);
							}),
							zn = (t._pthread_testcancel = function () {
								return (zn = t._pthread_testcancel = t.asm.ub).apply(null, arguments);
							}),
							Vn = (t.__emscripten_thread_init = function () {
								return (Vn = t.__emscripten_thread_init = t.asm.vb).apply(null, arguments);
							}),
							Kn = (t.___errno_location = function () {
								return (Kn = t.___errno_location = t.asm.wb).apply(null, arguments);
							}),
							Ge = (t._pthread_self = function () {
								return (Ge = t._pthread_self = t.asm.xb).apply(null, arguments);
							}),
							Ye = (t._htonl = function () {
								return (Ye = t._htonl = t.asm.yb).apply(null, arguments);
							}),
							dr = (t._ntohs = function () {
								return (dr = t._ntohs = t.asm.zb).apply(null, arguments);
							}),
							ze = (t._htons = function () {
								return (ze = t._htons = t.asm.Ab).apply(null, arguments);
							}),
							Ee = (t.stackSave = function () {
								return (Ee = t.stackSave = t.asm.Bb).apply(null, arguments);
							}),
							fe = (t.stackRestore = function () {
								return (fe = t.stackRestore = t.asm.Cb).apply(null, arguments);
							}),
							le = (t.stackAlloc = function () {
								return (le = t.stackAlloc = t.asm.Db).apply(null, arguments);
							}),
							$n = (t._emscripten_stack_set_limits = function () {
								return ($n = t._emscripten_stack_set_limits = t.asm.Eb).apply(null, arguments);
							}),
							Ae = (t._malloc = function () {
								return (Ae = t._malloc = t.asm.Fb).apply(null, arguments);
							}),
							Ve = (t._free = function () {
								return (Ve = t._free = t.asm.Gb).apply(null, arguments);
							}),
							Xn = (t._memalign = function () {
								return (Xn = t._memalign = t.asm.Hb).apply(null, arguments);
							}),
							Jn = (t.__emscripten_allow_main_runtime_queued_calls = 957536),
							_e = (t.__emscripten_main_thread_futex = 1062928);
						(t.ccall = vt),
							(t.keepRuntimeAlive = ye),
							(t.PThread = g),
							(t.PThread = g),
							(t.wasmMemory = x),
							(t.ExitStatus = Te);
						var Ke;
						function Te(e) {
							(this.name = 'ExitStatus'),
								(this.message = 'Program terminated with exit(' + e + ')'),
								(this.status = e);
						}
						var Yi = !1;
						we = function e() {
							Ke || mr(), Ke || (we = e);
						};
						function zi(e) {
							var r = t._main,
								n = 0,
								a = 0;
							try {
								var i = r(n, a);
								return Qn(i, !0), i;
							} catch (s) {
								return Ce(s);
							} finally {
								Yi = !0;
							}
						}
						function mr(e) {
							if (((e = e || Ze), ie > 0)) return;
							if (p) {
								Je(t), Yr(), postMessage({ cmd: 'loaded' });
								return;
							}
							if ((At(), ie > 0)) return;
							function r() {
								Ke ||
									((Ke = !0),
									(t.calledRun = !0),
									!Be &&
										(Yr(),
										Tt(),
										Je(t),
										t.onRuntimeInitialized && t.onRuntimeInitialized(),
										Zn && zi(e),
										St()));
							}
							t.setStatus
								? (t.setStatus('Running...'),
								  setTimeout(function () {
										setTimeout(function () {
											t.setStatus('');
										}, 1),
											r();
								  }, 1))
								: r();
						}
						t.run = mr;
						function Qn(e, r) {
							if (((ae = e), !r && p)) throw (Jr(e), 'unwind');
							ye() || Mt(), Vi(e);
						}
						function Vi(e) {
							(ae = e),
								ye() || (g.terminateAllThreads(), t.onExit && t.onExit(e), (Be = !0)),
								Re(e, new Te(e));
						}
						if (t.preInit)
							for (
								typeof t.preInit == 'function' && (t.preInit = [t.preInit]);
								t.preInit.length > 0;

							)
								t.preInit.pop()();
						var Zn = !0;
						return t.noInitialRun && (Zn = !1), p && ((Tr = !1), g.initWorker()), mr(), f.ready;
					};
				})()),
				(br = iu);
		});
	var M = {};
	typeof process == 'object' &&
		typeof process.versions == 'object' &&
		typeof process.versions.node == 'string' &&
		((hr = pr()),
		(yr = hr.parentPort),
		yr.on('message', function (u) {
			wr({ data: u });
		}),
		(ct = de()),
		Object.assign(global, {
			self: global,
			require: $e,
			Module: M,
			location: { href: __filename },
			Worker: hr.Worker,
			importScripts: function (u) {
				(0, eval)(ct.readFileSync(u, 'utf8'));
			},
			postMessage: function (u) {
				yr.postMessage(u);
			},
			performance: global.performance || {
				now: function () {
					return Date.now();
				}
			}
		}));
	var hr, yr, ct;
	function uu() {
		var u = Array.prototype.slice.call(arguments).join(' ');
		console.error(u);
	}
	function ou() {
		var u = Array.prototype.slice.call(arguments).join(' ');
		postMessage({ cmd: 'alert', text: u, threadId: M._pthread_self() });
	}
	var Xe = uu;
	self.alert = ou;
	M.instantiateWasm = function (u, f) {
		var d = new WebAssembly.Instance(M.wasmModule, u);
		return f(d), (M.wasmModule = null), d.exports;
	};
	self.onmessage = function (u) {
		try {
			if (u.data.cmd === 'load')
				(M.wasmModule = u.data.wasmModule),
					(M.wasmMemory = u.data.wasmMemory),
					(M.buffer = M.wasmMemory.buffer),
					(M.ENVIRONMENT_IS_PTHREAD = !0),
					(u.data.urlOrBlob
						? Promise.resolve().then(() => it($e(u.data.urlOrBlob)))
						: Promise.resolve().then(() => (gr(), st))
					)
						.then(function (v) {
							return v.default(M);
						})
						.then(function (v) {
							M = v;
						});
			else if (u.data.cmd === 'run') {
				(M.__performance_now_clock_drift = performance.now() - u.data.time),
					M.__emscripten_thread_init(u.data.threadInfoStruct, 0, 0);
				var f = u.data.stackBase,
					d = u.data.stackBase + u.data.stackSize;
				M.establishStackSpace(d, f),
					M.PThread.receiveObjectTransfer(u.data),
					M.PThread.threadInit();
				try {
					var m = M.invokeEntryPoint(u.data.start_routine, u.data.arg);
					M.keepRuntimeAlive() ? M.PThread.setExitStatus(m) : M.__emscripten_thread_exit(m);
				} catch (v) {
					if (v != 'unwind')
						if (v instanceof M.ExitStatus)
							M.keepRuntimeAlive() || M.__emscripten_thread_exit(v.status);
						else throw v;
				}
			} else
				u.data.cmd === 'cancel'
					? (M._pthread_self() && M.__emscripten_thread_exit(-1),
					  postMessage({ cmd: 'cancelDone' }))
					: u.data.target === 'setimmediate' ||
					  (u.data.cmd === 'processThreadQueue'
							? M._pthread_self() && M._emscripten_current_thread_process_queued_calls()
							: (Xe('worker.js received unknown command ' + u.data.cmd), Xe(u.data)));
		} catch (v) {
			throw (
				(Xe('worker.js onmessage() captured an uncaught exception: ' + v),
				v && v.stack && Xe(v.stack),
				v)
			);
		}
	};
	var wr = self.onmessage;
	function ft() {
		return M;
	}
	function lt(u) {
		M = u;
	}
	gr();
	var kr = ((f) => ((f[(f.SUCCESS = 0)] = 'SUCCESS'), f))(kr || {});
	function cu() {
		let u = new TextDecoder();
		return (f) => (
			typeof SharedArrayBuffer != 'undefined' &&
				f.buffer instanceof SharedArrayBuffer &&
				(f = new Uint8Array(f)),
			u.decode(f)
		);
	}
	var fu = cu();
	function Z(u, f) {
		u.ccall('duckdb_web_fail_with', null, ['string'], [f]);
	}
	function ne(u, f, d) {
		return fu(u.HEAPU8.subarray(f, f + d));
	}
	var L = ((m) => (
		(m[(m.BUFFER = 0)] = 'BUFFER'), (m[(m.NATIVE = 1)] = 'NATIVE'), (m[(m.HTTP = 3)] = 'HTTP'), m
	))(L || {});
	function _t(u, f, d, m) {
		let v = u.stackSave(),
			w = u.stackAlloc(3 * 8);
		d.unshift('number'), m.unshift(w), u.ccall(f, null, d, m);
		let o = u.HEAPF64[(w >> 3) + 0],
			y = u.HEAPF64[(w >> 3) + 1],
			C = u.HEAPF64[(w >> 3) + 2];
		return u.stackRestore(v), [o, y, C];
	}
	function dt(u) {
		u.ccall('duckdb_web_clear_response', null, [], []);
	}
	var U = {
		fileInfoCache: new Map(),
		getFileInfo(u, f) {
			try {
				let d = U.fileInfoCache.get(f);
				if (d) return d;
				let [m, v, w] = _t(u, 'duckdb_web_fs_get_file_info_by_id', ['number'], [f]);
				if (m !== kr.SUCCESS) return null;
				let o = ne(u, v, w);
				dt(u);
				let y = JSON.parse(o);
				if (y == null) return null;
				let C = at(tt({}, y), { blob: null });
				return U.fileInfoCache.set(f, C), C;
			} catch (d) {
				return null;
			}
		},
		testPlatformFeature: (u, f) => {
			switch (f) {
				case 1:
					return typeof BigInt64Array != 'undefined';
				default:
					return console.warn(`test for unknown feature: ${f}`), !1;
			}
		},
		openFile: (u, f) => {
			var d;
			try {
				U.fileInfoCache.delete(f);
				let m = U.getFileInfo(u, f);
				switch (m == null ? void 0 : m.dataProtocol) {
					case L.HTTP: {
						let v = null;
						try {
							let w = new XMLHttpRequest();
							w.open('HEAD', m.dataUrl, !1), w.setRequestHeader('Range', 'bytes=0-'), w.send(null);
							let o = w.getResponseHeader('Content-Length');
							if (w.status == 206 && o !== null) {
								let y = u._malloc(2 * 8);
								return (u.HEAPF64[(y >> 3) + 0] = +o), (u.HEAPF64[(y >> 3) + 1] = 0), y;
							}
						} catch (w) {
							(v = w), console.warn(`HEAD request with range header failed: ${w}`);
						}
						if (m.allowFullHttpReads) {
							console.warn(`falling back to full HTTP read for: ${m.dataUrl}`);
							let w = new XMLHttpRequest();
							if (
								(w.open('GET', m.dataUrl, !1),
								(w.responseType = 'arraybuffer'),
								w.send(null),
								w.status == 200)
							) {
								let o = u._malloc(w.response.byteLength),
									y = new Uint8Array(w.response, 0, w.response.byteLength);
								u.HEAPU8.set(y, o);
								let C = u._malloc(2 * 8);
								return (
									(u.HEAPF64[(C >> 3) + 0] = w.response.byteLength),
									(u.HEAPF64[(C >> 3) + 1] = o),
									C
								);
							}
						}
						if (v != null) throw new Error(`Reading file ${m.fileName} failed with error: ${v}`);
						return 0;
					}
					case L.NATIVE: {
						let v = (d = U._files) == null ? void 0 : d.get(m.fileName);
						if (v) {
							let y = u._malloc(2 * 8);
							return (u.HEAPF64[(y >> 3) + 0] = v.size), (u.HEAPF64[(y >> 3) + 1] = 0), y;
						}
						console.warn(`Buffering missing file: ${m.fileName}`);
						let w = u._malloc(2 * 8),
							o = u._malloc(1);
						return (u.HEAPF64[(w >> 3) + 0] = 1), (u.HEAPF64[(w >> 3) + 1] = o), w;
					}
				}
			} catch (m) {
				console.error(m.toString()), Z(u, m.toString());
			}
			return 0;
		},
		glob: (u, f, d) => {
			try {
				let m = ne(u, f, d);
				if (m.startsWith('http')) {
					let v = new XMLHttpRequest();
					if ((v.open('HEAD', m, !1), v.send(null), v.status != 200 && v.status !== 206)) {
						Z(u, `HEAD request failed: ${m}`);
						return;
					}
					u.ccall('duckdb_web_fs_glob_add_path', null, ['string'], [m]);
				}
			} catch (m) {
				return Z(u, m.toString()), 0;
			}
		},
		checkFile: (u, f, d) => {
			try {
				let m = ne(u, f, d);
				if (m.startsWith('http')) {
					let v = new XMLHttpRequest();
					v.open('HEAD', m, !1), v.setRequestHeader('Range', 'bytes=0-'), v.send(null);
					let w = !1;
					if (v.status == 206) w = !0;
					else if (v.status == 200) w = v.getResponseHeader('Accept-Ranges') === 'bytes';
					else return !1;
					return !!w;
				}
			} catch (m) {
				return !1;
			}
			return !1;
		},
		syncFile: (u, f) => {},
		closeFile: (u, f) => {
			let d = U.getFileInfo(u, f);
			switch ((U.fileInfoCache.delete(f), d == null ? void 0 : d.dataProtocol)) {
				case L.HTTP:
					break;
				case L.NATIVE:
					return;
			}
		},
		truncateFile: (u, f, d) => {
			let m = U.getFileInfo(u, f);
			switch (m == null ? void 0 : m.dataProtocol) {
				case L.HTTP:
					Z(u, 'Cannot truncate a http file');
					return;
				case L.NATIVE:
					Z(u, 'truncateFile not implemented');
					return;
			}
			return 0;
		},
		readFile(u, f, d, m, v) {
			var w;
			try {
				let o = U.getFileInfo(u, f);
				switch (o == null ? void 0 : o.dataProtocol) {
					case L.HTTP: {
						if (!o.dataUrl) throw new Error(`Missing data URL for file ${f}`);
						try {
							let y = new XMLHttpRequest();
							if (
								(y.open('GET', o.dataUrl, !1),
								(y.responseType = 'arraybuffer'),
								y.setRequestHeader('Range', `bytes=${v}-${v + m - 1}`),
								y.send(null),
								y.status == 206 || (y.status == 200 && m == y.response.byteLength && v == 0))
							) {
								let C = new Uint8Array(y.response, 0, Math.min(y.response.byteLength, m));
								return u.HEAPU8.set(C, d), C.byteLength;
							} else
								throw y.status == 200
									? new Error(
											`Range request for ${o.dataUrl} did not return a partial response: ${y.status} "${y.statusText}"`
									  )
									: new Error(
											`Range request for ${o.dataUrl} did returned non-success status: ${y.status} "${y.statusText}"`
									  );
						} catch (y) {
							throw new Error(`Range request for ${o.dataUrl} failed with error: ${y}"`);
						}
					}
					case L.NATIVE: {
						let y = (w = U._files) == null ? void 0 : w.get(o.fileName);
						if (!y) throw new Error(`No handle available for file: ${o.fileName}`);
						let C = y.slice(v, v + m),
							t = new Uint8Array(new FileReaderSync().readAsArrayBuffer(C));
						return u.HEAPU8.set(t, d), t.byteLength;
					}
				}
				return 0;
			} catch (o) {
				return Z(u, o.toString()), 0;
			}
		},
		writeFile: (u, f, d, m, v) => {
			let w = U.getFileInfo(u, f);
			switch (w == null ? void 0 : w.dataProtocol) {
				case L.HTTP:
					return Z(u, 'Cannot write to HTTP file'), 0;
				case L.NATIVE:
					return Z(u, 'writefile not implemented'), 0;
			}
			return 0;
		},
		getLastFileModificationTime: (u, f) => {
			var m;
			let d = U.getFileInfo(u, f);
			switch (d == null ? void 0 : d.dataProtocol) {
				case L.NATIVE: {
					if (!((m = U._files) == null ? void 0 : m.get(d.fileName)))
						throw Error(`No handle available for file: ${d.fileName}`);
					return 0;
				}
				case L.HTTP:
					return new Date().getTime();
			}
			return 0;
		},
		checkDirectory: (u, f, d) => {
			let m = ne(u, f, d);
			return console.log(`checkDirectory: ${m}`), !1;
		},
		createDirectory: (u, f, d) => {
			let m = ne(u, f, d);
			console.log(`createDirectory: ${m}`);
		},
		removeDirectory: (u, f, d) => {
			let m = ne(u, f, d);
			console.log(`removeDirectory: ${m}`);
		},
		listDirectoryEntries: (u, f, d) => {
			let m = ne(u, f, d);
			return console.log(`listDirectoryEntries: ${m}`), !1;
		},
		moveFile: (u, f, d, m, v) => {},
		removeFile: (u, f, d) => {}
	};
	globalThis.DUCKDB_RUNTIME = {};
	for (let u of Object.getOwnPropertyNames(U))
		u != 'constructor' &&
			(globalThis.DUCKDB_RUNTIME[u] = Object.getOwnPropertyDescriptor(U, u).value);
	globalThis.onmessage = (u) => {
		if (u.data.cmd === 'load') {
			let f = ft();
			(f.wasmModule = u.data.wasmModule),
				(f.wasmMemory = u.data.wasmMemory),
				(f.buffer = f.wasmMemory.buffer),
				(f.ENVIRONMENT_IS_PTHREAD = !0),
				br(f).then(function (d) {
					lt(d);
				});
		} else
			u.data.cmd === 'registerFileHandle'
				? ((globalThis.DUCKDB_RUNTIME._files = globalThis.DUCKDB_RUNTIME._files || new Map()),
				  globalThis.DUCKDB_RUNTIME._files.set(u.data.fileName, u.data.fileHandle))
				: u.data.cmd === 'dropFileHandle'
				? ((globalThis.DUCKDB_RUNTIME._files = globalThis.DUCKDB_RUNTIME._files || new Map()),
				  globalThis.DUCKDB_RUNTIME._files.delete(u.data.fileName))
				: wr(u);
	};
})();
//# sourceMappingURL=duckdb-browser-next-coi.pthread.worker.js.map
