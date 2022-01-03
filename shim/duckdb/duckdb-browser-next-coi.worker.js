var duckdb = (() => {
	var cw = Object.create;
	var Fs = Object.defineProperty,
		lw = Object.defineProperties,
		dw = Object.getOwnPropertyDescriptor,
		fw = Object.getOwnPropertyDescriptors,
		hw = Object.getOwnPropertyNames,
		rp = Object.getOwnPropertySymbols,
		pw = Object.getPrototypeOf,
		np = Object.prototype.hasOwnProperty,
		_w = Object.prototype.propertyIsEnumerable;
	var ip = (r, e, t) =>
			e in r ? Fs(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t),
		Ln = (r, e) => {
			for (var t in e || (e = {})) np.call(e, t) && ip(r, t, e[t]);
			if (rp) for (var t of rp(e)) _w.call(e, t) && ip(r, t, e[t]);
			return r;
		},
		No = (r, e) => lw(r, fw(e)),
		sp = (r) => Fs(r, '__esModule', { value: !0 });
	var yw = ((r) =>
		typeof require != 'undefined'
			? require
			: typeof Proxy != 'undefined'
			? new Proxy(r, { get: (e, t) => (typeof require != 'undefined' ? require : e)[t] })
			: r)(function (r) {
		if (typeof require != 'undefined') return require.apply(this, arguments);
		throw new Error('Dynamic require of "' + r + '" is not supported');
	});
	var w = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports),
		mw = (r, e) => {
			for (var t in e) Fs(r, t, { get: e[t], enumerable: !0 });
		},
		op = (r, e, t, n) => {
			if ((e && typeof e == 'object') || typeof e == 'function')
				for (let i of hw(e))
					!np.call(r, i) &&
						(t || i !== 'default') &&
						Fs(r, i, { get: () => e[i], enumerable: !(n = dw(e, i)) || n.enumerable });
			return r;
		},
		Rr = (r, e) =>
			op(
				sp(
					Fs(
						r != null ? cw(pw(r)) : {},
						'default',
						!e && r && r.__esModule
							? { get: () => r.default, enumerable: !0 }
							: { value: r, enumerable: !0 }
					)
				),
				r
			),
		bw = (
			(r) => (e, t) =>
				(r && r.get(e)) || ((t = op(sp({}), e, 1)), r && r.set(e, t), t)
		)(typeof WeakMap != 'undefined' ? new WeakMap() : 0);
	var at = w((pO, jo) => {
		var ap,
			up,
			cp,
			lp,
			dp,
			fp,
			hp,
			pp,
			_p,
			xo,
			ec,
			yp,
			mp,
			bp,
			pi,
			gp,
			vp,
			Tp,
			wp,
			Ip,
			Bp,
			Sp,
			Ap,
			Co;
		(function (r) {
			var e =
				typeof global == 'object'
					? global
					: typeof self == 'object'
					? self
					: typeof this == 'object'
					? this
					: {};
			typeof define == 'function' && define.amd
				? define('tslib', ['exports'], function (n) {
						r(t(e, t(n)));
				  })
				: typeof jo == 'object' && typeof jo.exports == 'object'
				? r(t(e, t(jo.exports)))
				: r(t(e));
			function t(n, i) {
				return (
					n !== e &&
						(typeof Object.create == 'function'
							? Object.defineProperty(n, '__esModule', { value: !0 })
							: (n.__esModule = !0)),
					function (s, o) {
						return (n[s] = i ? i(s, o) : o);
					}
				);
			}
		})(function (r) {
			var e =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (n, i) {
						n.__proto__ = i;
					}) ||
				function (n, i) {
					for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
				};
			(ap = function (n, i) {
				if (typeof i != 'function' && i !== null)
					throw new TypeError('Class extends value ' + String(i) + ' is not a constructor or null');
				e(n, i);
				function s() {
					this.constructor = n;
				}
				n.prototype = i === null ? Object.create(i) : ((s.prototype = i.prototype), new s());
			}),
				(up =
					Object.assign ||
					function (n) {
						for (var i, s = 1, o = arguments.length; s < o; s++) {
							i = arguments[s];
							for (var l in i) Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
						}
						return n;
					}),
				(cp = function (n, i) {
					var s = {};
					for (var o in n)
						Object.prototype.hasOwnProperty.call(n, o) && i.indexOf(o) < 0 && (s[o] = n[o]);
					if (n != null && typeof Object.getOwnPropertySymbols == 'function')
						for (var l = 0, o = Object.getOwnPropertySymbols(n); l < o.length; l++)
							i.indexOf(o[l]) < 0 &&
								Object.prototype.propertyIsEnumerable.call(n, o[l]) &&
								(s[o[l]] = n[o[l]]);
					return s;
				}),
				(lp = function (n, i, s, o) {
					var l = arguments.length,
						h = l < 3 ? i : o === null ? (o = Object.getOwnPropertyDescriptor(i, s)) : o,
						u;
					if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
						h = Reflect.decorate(n, i, s, o);
					else
						for (var m = n.length - 1; m >= 0; m--)
							(u = n[m]) && (h = (l < 3 ? u(h) : l > 3 ? u(i, s, h) : u(i, s)) || h);
					return l > 3 && h && Object.defineProperty(i, s, h), h;
				}),
				(dp = function (n, i) {
					return function (s, o) {
						i(s, o, n);
					};
				}),
				(fp = function (n, i) {
					if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
						return Reflect.metadata(n, i);
				}),
				(hp = function (n, i, s, o) {
					function l(h) {
						return h instanceof s
							? h
							: new s(function (u) {
									u(h);
							  });
					}
					return new (s || (s = Promise))(function (h, u) {
						function m(X) {
							try {
								M(o.next(X));
							} catch (Ae) {
								u(Ae);
							}
						}
						function E(X) {
							try {
								M(o.throw(X));
							} catch (Ae) {
								u(Ae);
							}
						}
						function M(X) {
							X.done ? h(X.value) : l(X.value).then(m, E);
						}
						M((o = o.apply(n, i || [])).next());
					});
				}),
				(pp = function (n, i) {
					var s = {
							label: 0,
							sent: function () {
								if (h[0] & 1) throw h[1];
								return h[1];
							},
							trys: [],
							ops: []
						},
						o,
						l,
						h,
						u;
					return (
						(u = { next: m(0), throw: m(1), return: m(2) }),
						typeof Symbol == 'function' &&
							(u[Symbol.iterator] = function () {
								return this;
							}),
						u
					);
					function m(M) {
						return function (X) {
							return E([M, X]);
						};
					}
					function E(M) {
						if (o) throw new TypeError('Generator is already executing.');
						for (; s; )
							try {
								if (
									((o = 1),
									l &&
										(h =
											M[0] & 2
												? l.return
												: M[0]
												? l.throw || ((h = l.return) && h.call(l), 0)
												: l.next) &&
										!(h = h.call(l, M[1])).done)
								)
									return h;
								switch (((l = 0), h && (M = [M[0] & 2, h.value]), M[0])) {
									case 0:
									case 1:
										h = M;
										break;
									case 4:
										return s.label++, { value: M[1], done: !1 };
									case 5:
										s.label++, (l = M[1]), (M = [0]);
										continue;
									case 7:
										(M = s.ops.pop()), s.trys.pop();
										continue;
									default:
										if (
											((h = s.trys),
											!(h = h.length > 0 && h[h.length - 1]) && (M[0] === 6 || M[0] === 2))
										) {
											s = 0;
											continue;
										}
										if (M[0] === 3 && (!h || (M[1] > h[0] && M[1] < h[3]))) {
											s.label = M[1];
											break;
										}
										if (M[0] === 6 && s.label < h[1]) {
											(s.label = h[1]), (h = M);
											break;
										}
										if (h && s.label < h[2]) {
											(s.label = h[2]), s.ops.push(M);
											break;
										}
										h[2] && s.ops.pop(), s.trys.pop();
										continue;
								}
								M = i.call(n, s);
							} catch (X) {
								(M = [6, X]), (l = 0);
							} finally {
								o = h = 0;
							}
						if (M[0] & 5) throw M[1];
						return { value: M[0] ? M[1] : void 0, done: !0 };
					}
				}),
				(_p = function (n, i) {
					for (var s in n)
						s !== 'default' && !Object.prototype.hasOwnProperty.call(i, s) && Co(i, n, s);
				}),
				(Co = Object.create
					? function (n, i, s, o) {
							o === void 0 && (o = s),
								Object.defineProperty(n, o, {
									enumerable: !0,
									get: function () {
										return i[s];
									}
								});
					  }
					: function (n, i, s, o) {
							o === void 0 && (o = s), (n[o] = i[s]);
					  }),
				(xo = function (n) {
					var i = typeof Symbol == 'function' && Symbol.iterator,
						s = i && n[i],
						o = 0;
					if (s) return s.call(n);
					if (n && typeof n.length == 'number')
						return {
							next: function () {
								return n && o >= n.length && (n = void 0), { value: n && n[o++], done: !n };
							}
						};
					throw new TypeError(i ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
				}),
				(ec = function (n, i) {
					var s = typeof Symbol == 'function' && n[Symbol.iterator];
					if (!s) return n;
					var o = s.call(n),
						l,
						h = [],
						u;
					try {
						for (; (i === void 0 || i-- > 0) && !(l = o.next()).done; ) h.push(l.value);
					} catch (m) {
						u = { error: m };
					} finally {
						try {
							l && !l.done && (s = o.return) && s.call(o);
						} finally {
							if (u) throw u.error;
						}
					}
					return h;
				}),
				(yp = function () {
					for (var n = [], i = 0; i < arguments.length; i++) n = n.concat(ec(arguments[i]));
					return n;
				}),
				(mp = function () {
					for (var n = 0, i = 0, s = arguments.length; i < s; i++) n += arguments[i].length;
					for (var o = Array(n), l = 0, i = 0; i < s; i++)
						for (var h = arguments[i], u = 0, m = h.length; u < m; u++, l++) o[l] = h[u];
					return o;
				}),
				(bp = function (n, i, s) {
					if (s || arguments.length === 2)
						for (var o = 0, l = i.length, h; o < l; o++)
							(h || !(o in i)) && (h || (h = Array.prototype.slice.call(i, 0, o)), (h[o] = i[o]));
					return n.concat(h || Array.prototype.slice.call(i));
				}),
				(pi = function (n) {
					return this instanceof pi ? ((this.v = n), this) : new pi(n);
				}),
				(gp = function (n, i, s) {
					if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
					var o = s.apply(n, i || []),
						l,
						h = [];
					return (
						(l = {}),
						u('next'),
						u('throw'),
						u('return'),
						(l[Symbol.asyncIterator] = function () {
							return this;
						}),
						l
					);
					function u(Te) {
						o[Te] &&
							(l[Te] = function (bt) {
								return new Promise(function (ht, Zt) {
									h.push([Te, bt, ht, Zt]) > 1 || m(Te, bt);
								});
							});
					}
					function m(Te, bt) {
						try {
							E(o[Te](bt));
						} catch (ht) {
							Ae(h[0][3], ht);
						}
					}
					function E(Te) {
						Te.value instanceof pi ? Promise.resolve(Te.value.v).then(M, X) : Ae(h[0][2], Te);
					}
					function M(Te) {
						m('next', Te);
					}
					function X(Te) {
						m('throw', Te);
					}
					function Ae(Te, bt) {
						Te(bt), h.shift(), h.length && m(h[0][0], h[0][1]);
					}
				}),
				(vp = function (n) {
					var i, s;
					return (
						(i = {}),
						o('next'),
						o('throw', function (l) {
							throw l;
						}),
						o('return'),
						(i[Symbol.iterator] = function () {
							return this;
						}),
						i
					);
					function o(l, h) {
						i[l] = n[l]
							? function (u) {
									return (s = !s) ? { value: pi(n[l](u)), done: l === 'return' } : h ? h(u) : u;
							  }
							: h;
					}
				}),
				(Tp = function (n) {
					if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
					var i = n[Symbol.asyncIterator],
						s;
					return i
						? i.call(n)
						: ((n = typeof xo == 'function' ? xo(n) : n[Symbol.iterator]()),
						  (s = {}),
						  o('next'),
						  o('throw'),
						  o('return'),
						  (s[Symbol.asyncIterator] = function () {
								return this;
						  }),
						  s);
					function o(h) {
						s[h] =
							n[h] &&
							function (u) {
								return new Promise(function (m, E) {
									(u = n[h](u)), l(m, E, u.done, u.value);
								});
							};
					}
					function l(h, u, m, E) {
						Promise.resolve(E).then(function (M) {
							h({ value: M, done: m });
						}, u);
					}
				}),
				(wp = function (n, i) {
					return (
						Object.defineProperty ? Object.defineProperty(n, 'raw', { value: i }) : (n.raw = i), n
					);
				});
			var t = Object.create
				? function (n, i) {
						Object.defineProperty(n, 'default', { enumerable: !0, value: i });
				  }
				: function (n, i) {
						n.default = i;
				  };
			(Ip = function (n) {
				if (n && n.__esModule) return n;
				var i = {};
				if (n != null)
					for (var s in n)
						s !== 'default' && Object.prototype.hasOwnProperty.call(n, s) && Co(i, n, s);
				return t(i, n), i;
			}),
				(Bp = function (n) {
					return n && n.__esModule ? n : { default: n };
				}),
				(Sp = function (n, i, s, o) {
					if (s === 'a' && !o) throw new TypeError('Private accessor was defined without a getter');
					if (typeof i == 'function' ? n !== i || !o : !i.has(n))
						throw new TypeError(
							'Cannot read private member from an object whose class did not declare it'
						);
					return s === 'm' ? o : s === 'a' ? o.call(n) : o ? o.value : i.get(n);
				}),
				(Ap = function (n, i, s, o, l) {
					if (o === 'm') throw new TypeError('Private method is not writable');
					if (o === 'a' && !l) throw new TypeError('Private accessor was defined without a setter');
					if (typeof i == 'function' ? n !== i || !l : !i.has(n))
						throw new TypeError(
							'Cannot write private member to an object whose class did not declare it'
						);
					return o === 'a' ? l.call(n, s) : l ? (l.value = s) : i.set(n, s), s;
				}),
				r('__extends', ap),
				r('__assign', up),
				r('__rest', cp),
				r('__decorate', lp),
				r('__param', dp),
				r('__metadata', fp),
				r('__awaiter', hp),
				r('__generator', pp),
				r('__exportStar', _p),
				r('__createBinding', Co),
				r('__values', xo),
				r('__read', ec),
				r('__spread', yp),
				r('__spreadArrays', mp),
				r('__spreadArray', bp),
				r('__await', pi),
				r('__asyncGenerator', gp),
				r('__asyncDelegator', vp),
				r('__asyncValues', Tp),
				r('__makeTemplateObject', wp),
				r('__importStar', Ip),
				r('__importDefault', Bp),
				r('__classPrivateFieldGet', Sp),
				r('__classPrivateFieldSet', Ap);
		});
	});
	var Ur = w((Dp) => {
		var b = {};
		b.Offset;
		b.Table;
		b.SIZEOF_SHORT = 2;
		b.SIZEOF_INT = 4;
		b.FILE_IDENTIFIER_LENGTH = 4;
		b.SIZE_PREFIX_LENGTH = 4;
		b.Encoding = { UTF8_BYTES: 1, UTF16_STRING: 2 };
		b.int32 = new Int32Array(2);
		b.float32 = new Float32Array(b.int32.buffer);
		b.float64 = new Float64Array(b.int32.buffer);
		b.isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
		b.Long = function (r, e) {
			(this.low = r | 0), (this.high = e | 0);
		};
		b.Long.create = function (r, e) {
			return r == 0 && e == 0 ? b.Long.ZERO : new b.Long(r, e);
		};
		b.Long.prototype.toFloat64 = function () {
			return (this.low >>> 0) + this.high * 4294967296;
		};
		b.Long.prototype.equals = function (r) {
			return this.low == r.low && this.high == r.high;
		};
		b.Long.ZERO = new b.Long(0, 0);
		b.Builder = function (r) {
			if (r) var e = r;
			else var e = 1024;
			(this.bb = b.ByteBuffer.allocate(e)),
				(this.space = e),
				(this.minalign = 1),
				(this.vtable = null),
				(this.vtable_in_use = 0),
				(this.isNested = !1),
				(this.object_start = 0),
				(this.vtables = []),
				(this.vector_num_elems = 0),
				(this.force_defaults = !1);
		};
		b.Builder.prototype.clear = function () {
			this.bb.clear(),
				(this.space = this.bb.capacity()),
				(this.minalign = 1),
				(this.vtable = null),
				(this.vtable_in_use = 0),
				(this.isNested = !1),
				(this.object_start = 0),
				(this.vtables = []),
				(this.vector_num_elems = 0),
				(this.force_defaults = !1);
		};
		b.Builder.prototype.forceDefaults = function (r) {
			this.force_defaults = r;
		};
		b.Builder.prototype.dataBuffer = function () {
			return this.bb;
		};
		b.Builder.prototype.asUint8Array = function () {
			return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
		};
		b.Builder.prototype.prep = function (r, e) {
			r > this.minalign && (this.minalign = r);
			for (
				var t = (~(this.bb.capacity() - this.space + e) + 1) & (r - 1);
				this.space < t + r + e;

			) {
				var n = this.bb.capacity();
				(this.bb = b.Builder.growByteBuffer(this.bb)), (this.space += this.bb.capacity() - n);
			}
			this.pad(t);
		};
		b.Builder.prototype.pad = function (r) {
			for (var e = 0; e < r; e++) this.bb.writeInt8(--this.space, 0);
		};
		b.Builder.prototype.writeInt8 = function (r) {
			this.bb.writeInt8((this.space -= 1), r);
		};
		b.Builder.prototype.writeInt16 = function (r) {
			this.bb.writeInt16((this.space -= 2), r);
		};
		b.Builder.prototype.writeInt32 = function (r) {
			this.bb.writeInt32((this.space -= 4), r);
		};
		b.Builder.prototype.writeInt64 = function (r) {
			this.bb.writeInt64((this.space -= 8), r);
		};
		b.Builder.prototype.writeFloat32 = function (r) {
			this.bb.writeFloat32((this.space -= 4), r);
		};
		b.Builder.prototype.writeFloat64 = function (r) {
			this.bb.writeFloat64((this.space -= 8), r);
		};
		b.Builder.prototype.addInt8 = function (r) {
			this.prep(1, 0), this.writeInt8(r);
		};
		b.Builder.prototype.addInt16 = function (r) {
			this.prep(2, 0), this.writeInt16(r);
		};
		b.Builder.prototype.addInt32 = function (r) {
			this.prep(4, 0), this.writeInt32(r);
		};
		b.Builder.prototype.addInt64 = function (r) {
			this.prep(8, 0), this.writeInt64(r);
		};
		b.Builder.prototype.addFloat32 = function (r) {
			this.prep(4, 0), this.writeFloat32(r);
		};
		b.Builder.prototype.addFloat64 = function (r) {
			this.prep(8, 0), this.writeFloat64(r);
		};
		b.Builder.prototype.addFieldInt8 = function (r, e, t) {
			(this.force_defaults || e != t) && (this.addInt8(e), this.slot(r));
		};
		b.Builder.prototype.addFieldInt16 = function (r, e, t) {
			(this.force_defaults || e != t) && (this.addInt16(e), this.slot(r));
		};
		b.Builder.prototype.addFieldInt32 = function (r, e, t) {
			(this.force_defaults || e != t) && (this.addInt32(e), this.slot(r));
		};
		b.Builder.prototype.addFieldInt64 = function (r, e, t) {
			(this.force_defaults || !e.equals(t)) && (this.addInt64(e), this.slot(r));
		};
		b.Builder.prototype.addFieldFloat32 = function (r, e, t) {
			(this.force_defaults || e != t) && (this.addFloat32(e), this.slot(r));
		};
		b.Builder.prototype.addFieldFloat64 = function (r, e, t) {
			(this.force_defaults || e != t) && (this.addFloat64(e), this.slot(r));
		};
		b.Builder.prototype.addFieldOffset = function (r, e, t) {
			(this.force_defaults || e != t) && (this.addOffset(e), this.slot(r));
		};
		b.Builder.prototype.addFieldStruct = function (r, e, t) {
			e != t && (this.nested(e), this.slot(r));
		};
		b.Builder.prototype.nested = function (r) {
			if (r != this.offset()) throw new Error('FlatBuffers: struct must be serialized inline.');
		};
		b.Builder.prototype.notNested = function () {
			if (this.isNested) throw new Error('FlatBuffers: object serialization must not be nested.');
		};
		b.Builder.prototype.slot = function (r) {
			this.vtable[r] = this.offset();
		};
		b.Builder.prototype.offset = function () {
			return this.bb.capacity() - this.space;
		};
		b.Builder.growByteBuffer = function (r) {
			var e = r.capacity();
			if (e & 3221225472) throw new Error('FlatBuffers: cannot grow buffer beyond 2 gigabytes.');
			var t = e << 1,
				n = b.ByteBuffer.allocate(t);
			return n.setPosition(t - e), n.bytes().set(r.bytes(), t - e), n;
		};
		b.Builder.prototype.addOffset = function (r) {
			this.prep(b.SIZEOF_INT, 0), this.writeInt32(this.offset() - r + b.SIZEOF_INT);
		};
		b.Builder.prototype.startObject = function (r) {
			this.notNested(), this.vtable == null && (this.vtable = []), (this.vtable_in_use = r);
			for (var e = 0; e < r; e++) this.vtable[e] = 0;
			(this.isNested = !0), (this.object_start = this.offset());
		};
		b.Builder.prototype.endObject = function () {
			if (this.vtable == null || !this.isNested)
				throw new Error('FlatBuffers: endObject called without startObject');
			this.addInt32(0);
			for (var r = this.offset(), e = this.vtable_in_use - 1; e >= 0 && this.vtable[e] == 0; e--);
			for (var t = e + 1; e >= 0; e--) this.addInt16(this.vtable[e] != 0 ? r - this.vtable[e] : 0);
			var n = 2;
			this.addInt16(r - this.object_start);
			var i = (t + n) * b.SIZEOF_SHORT;
			this.addInt16(i);
			var s = 0,
				o = this.space;
			e: for (e = 0; e < this.vtables.length; e++) {
				var l = this.bb.capacity() - this.vtables[e];
				if (i == this.bb.readInt16(l)) {
					for (var h = b.SIZEOF_SHORT; h < i; h += b.SIZEOF_SHORT)
						if (this.bb.readInt16(o + h) != this.bb.readInt16(l + h)) continue e;
					s = this.vtables[e];
					break;
				}
			}
			return (
				s
					? ((this.space = this.bb.capacity() - r), this.bb.writeInt32(this.space, s - r))
					: (this.vtables.push(this.offset()),
					  this.bb.writeInt32(this.bb.capacity() - r, this.offset() - r)),
				(this.isNested = !1),
				r
			);
		};
		b.Builder.prototype.finish = function (r, e, t) {
			var n = t ? b.SIZE_PREFIX_LENGTH : 0;
			if (e) {
				var i = e;
				if (
					(this.prep(this.minalign, b.SIZEOF_INT + b.FILE_IDENTIFIER_LENGTH + n),
					i.length != b.FILE_IDENTIFIER_LENGTH)
				)
					throw new Error(
						'FlatBuffers: file identifier must be length ' + b.FILE_IDENTIFIER_LENGTH
					);
				for (var s = b.FILE_IDENTIFIER_LENGTH - 1; s >= 0; s--) this.writeInt8(i.charCodeAt(s));
			}
			this.prep(this.minalign, b.SIZEOF_INT + n),
				this.addOffset(r),
				n && this.addInt32(this.bb.capacity() - this.space),
				this.bb.setPosition(this.space);
		};
		b.Builder.prototype.finishSizePrefixed = function (r, e) {
			this.finish(r, e, !0);
		};
		b.Builder.prototype.requiredField = function (r, e) {
			var t = this.bb.capacity() - r,
				n = t - this.bb.readInt32(t),
				i = this.bb.readInt16(n + e) != 0;
			if (!i) throw new Error('FlatBuffers: field ' + e + ' must be set');
		};
		b.Builder.prototype.startVector = function (r, e, t) {
			this.notNested(),
				(this.vector_num_elems = e),
				this.prep(b.SIZEOF_INT, r * e),
				this.prep(t, r * e);
		};
		b.Builder.prototype.endVector = function () {
			return this.writeInt32(this.vector_num_elems), this.offset();
		};
		b.Builder.prototype.createString = function (r) {
			if (r instanceof Uint8Array) var e = r;
			else
				for (var e = [], t = 0; t < r.length; ) {
					var n,
						i = r.charCodeAt(t++);
					if (i < 55296 || i >= 56320) n = i;
					else {
						var s = r.charCodeAt(t++);
						n = (i << 10) + s + (65536 - (55296 << 10) - 56320);
					}
					n < 128
						? e.push(n)
						: (n < 2048
								? e.push(((n >> 6) & 31) | 192)
								: (n < 65536
										? e.push(((n >> 12) & 15) | 224)
										: e.push(((n >> 18) & 7) | 240, ((n >> 12) & 63) | 128),
								  e.push(((n >> 6) & 63) | 128)),
						  e.push((n & 63) | 128));
				}
			this.addInt8(0),
				this.startVector(1, e.length, 1),
				this.bb.setPosition((this.space -= e.length));
			for (var t = 0, o = this.space, l = this.bb.bytes(); t < e.length; t++) l[o++] = e[t];
			return this.endVector();
		};
		b.Builder.prototype.createLong = function (r, e) {
			return b.Long.create(r, e);
		};
		b.ByteBuffer = function (r) {
			(this.bytes_ = r), (this.position_ = 0);
		};
		b.ByteBuffer.allocate = function (r) {
			return new b.ByteBuffer(new Uint8Array(r));
		};
		b.ByteBuffer.prototype.clear = function () {
			this.position_ = 0;
		};
		b.ByteBuffer.prototype.bytes = function () {
			return this.bytes_;
		};
		b.ByteBuffer.prototype.position = function () {
			return this.position_;
		};
		b.ByteBuffer.prototype.setPosition = function (r) {
			this.position_ = r;
		};
		b.ByteBuffer.prototype.capacity = function () {
			return this.bytes_.length;
		};
		b.ByteBuffer.prototype.readInt8 = function (r) {
			return (this.readUint8(r) << 24) >> 24;
		};
		b.ByteBuffer.prototype.readUint8 = function (r) {
			return this.bytes_[r];
		};
		b.ByteBuffer.prototype.readInt16 = function (r) {
			return (this.readUint16(r) << 16) >> 16;
		};
		b.ByteBuffer.prototype.readUint16 = function (r) {
			return this.bytes_[r] | (this.bytes_[r + 1] << 8);
		};
		b.ByteBuffer.prototype.readInt32 = function (r) {
			return (
				this.bytes_[r] |
				(this.bytes_[r + 1] << 8) |
				(this.bytes_[r + 2] << 16) |
				(this.bytes_[r + 3] << 24)
			);
		};
		b.ByteBuffer.prototype.readUint32 = function (r) {
			return this.readInt32(r) >>> 0;
		};
		b.ByteBuffer.prototype.readInt64 = function (r) {
			return new b.Long(this.readInt32(r), this.readInt32(r + 4));
		};
		b.ByteBuffer.prototype.readUint64 = function (r) {
			return new b.Long(this.readUint32(r), this.readUint32(r + 4));
		};
		b.ByteBuffer.prototype.readFloat32 = function (r) {
			return (b.int32[0] = this.readInt32(r)), b.float32[0];
		};
		b.ByteBuffer.prototype.readFloat64 = function (r) {
			return (
				(b.int32[b.isLittleEndian ? 0 : 1] = this.readInt32(r)),
				(b.int32[b.isLittleEndian ? 1 : 0] = this.readInt32(r + 4)),
				b.float64[0]
			);
		};
		b.ByteBuffer.prototype.writeInt8 = function (r, e) {
			this.bytes_[r] = e;
		};
		b.ByteBuffer.prototype.writeUint8 = function (r, e) {
			this.bytes_[r] = e;
		};
		b.ByteBuffer.prototype.writeInt16 = function (r, e) {
			(this.bytes_[r] = e), (this.bytes_[r + 1] = e >> 8);
		};
		b.ByteBuffer.prototype.writeUint16 = function (r, e) {
			(this.bytes_[r] = e), (this.bytes_[r + 1] = e >> 8);
		};
		b.ByteBuffer.prototype.writeInt32 = function (r, e) {
			(this.bytes_[r] = e),
				(this.bytes_[r + 1] = e >> 8),
				(this.bytes_[r + 2] = e >> 16),
				(this.bytes_[r + 3] = e >> 24);
		};
		b.ByteBuffer.prototype.writeUint32 = function (r, e) {
			(this.bytes_[r] = e),
				(this.bytes_[r + 1] = e >> 8),
				(this.bytes_[r + 2] = e >> 16),
				(this.bytes_[r + 3] = e >> 24);
		};
		b.ByteBuffer.prototype.writeInt64 = function (r, e) {
			this.writeInt32(r, e.low), this.writeInt32(r + 4, e.high);
		};
		b.ByteBuffer.prototype.writeUint64 = function (r, e) {
			this.writeUint32(r, e.low), this.writeUint32(r + 4, e.high);
		};
		b.ByteBuffer.prototype.writeFloat32 = function (r, e) {
			(b.float32[0] = e), this.writeInt32(r, b.int32[0]);
		};
		b.ByteBuffer.prototype.writeFloat64 = function (r, e) {
			(b.float64[0] = e),
				this.writeInt32(r, b.int32[b.isLittleEndian ? 0 : 1]),
				this.writeInt32(r + 4, b.int32[b.isLittleEndian ? 1 : 0]);
		};
		b.ByteBuffer.prototype.getBufferIdentifier = function () {
			if (this.bytes_.length < this.position_ + b.SIZEOF_INT + b.FILE_IDENTIFIER_LENGTH)
				throw new Error('FlatBuffers: ByteBuffer is too short to contain an identifier.');
			for (var r = '', e = 0; e < b.FILE_IDENTIFIER_LENGTH; e++)
				r += String.fromCharCode(this.readInt8(this.position_ + b.SIZEOF_INT + e));
			return r;
		};
		b.ByteBuffer.prototype.__offset = function (r, e) {
			var t = r - this.readInt32(r);
			return e < this.readInt16(t) ? this.readInt16(t + e) : 0;
		};
		b.ByteBuffer.prototype.__union = function (r, e) {
			return (r.bb_pos = e + this.readInt32(e)), (r.bb = this), r;
		};
		b.ByteBuffer.prototype.__string = function (r, e) {
			r += this.readInt32(r);
			var t = this.readInt32(r),
				n = '',
				i = 0;
			if (((r += b.SIZEOF_INT), e === b.Encoding.UTF8_BYTES)) return this.bytes_.subarray(r, r + t);
			for (; i < t; ) {
				var s,
					o = this.readUint8(r + i++);
				if (o < 192) s = o;
				else {
					var l = this.readUint8(r + i++);
					if (o < 224) s = ((o & 31) << 6) | (l & 63);
					else {
						var h = this.readUint8(r + i++);
						if (o < 240) s = ((o & 15) << 12) | ((l & 63) << 6) | (h & 63);
						else {
							var u = this.readUint8(r + i++);
							s = ((o & 7) << 18) | ((l & 63) << 12) | ((h & 63) << 6) | (u & 63);
						}
					}
				}
				s < 65536
					? (n += String.fromCharCode(s))
					: ((s -= 65536),
					  (n += String.fromCharCode((s >> 10) + 55296, (s & ((1 << 10) - 1)) + 56320)));
			}
			return n;
		};
		b.ByteBuffer.prototype.__indirect = function (r) {
			return r + this.readInt32(r);
		};
		b.ByteBuffer.prototype.__vector = function (r) {
			return r + this.readInt32(r) + b.SIZEOF_INT;
		};
		b.ByteBuffer.prototype.__vector_len = function (r) {
			return this.readInt32(r + this.readInt32(r));
		};
		b.ByteBuffer.prototype.__has_identifier = function (r) {
			if (r.length != b.FILE_IDENTIFIER_LENGTH)
				throw new Error('FlatBuffers: file identifier must be length ' + b.FILE_IDENTIFIER_LENGTH);
			for (var e = 0; e < b.FILE_IDENTIFIER_LENGTH; e++)
				if (r.charCodeAt(e) != this.readInt8(this.position_ + b.SIZEOF_INT + e)) return !1;
			return !0;
		};
		b.ByteBuffer.prototype.createLong = function (r, e) {
			return b.Long.create(r, e);
		};
		Dp.flatbuffers = b;
	});
	var Nn = w((_i) => {
		'use strict';
		Object.defineProperty(_i, '__esModule', { value: !0 });
		_i.encodeUtf8 = _i.decodeUtf8 = void 0;
		var gw = new TextDecoder('utf-8');
		_i.decodeUtf8 = (r) => gw.decode(r);
		var vw = new TextEncoder();
		_i.encodeUtf8 = (r) => vw.encode(r);
	});
	var yi = w((_t) => {
		'use strict';
		Object.defineProperty(_t, '__esModule', { value: !0 });
		_t.AsyncQueue = _t.ReadableInterop = _t.ArrowJSON = _t.ITERATOR_DONE = void 0;
		var Es = at(),
			Op = Ms();
		_t.ITERATOR_DONE = Object.freeze({ done: !0, value: void 0 });
		var Fp = class {
			constructor(e) {
				this._json = e;
			}
			get schema() {
				return this._json.schema;
			}
			get batches() {
				return this._json.batches || [];
			}
			get dictionaries() {
				return this._json.dictionaries || [];
			}
		};
		_t.ArrowJSON = Fp;
		var tc = class {
			tee() {
				return this._getDOMStream().tee();
			}
			pipe(e, t) {
				return this._getNodeStream().pipe(e, t);
			}
			pipeTo(e, t) {
				return this._getDOMStream().pipeTo(e, t);
			}
			pipeThrough(e, t) {
				return this._getDOMStream().pipeThrough(e, t);
			}
			_getDOMStream() {
				return this._DOMStream || (this._DOMStream = this.toDOMStream());
			}
			_getNodeStream() {
				return this._nodeStream || (this._nodeStream = this.toNodeStream());
			}
		};
		_t.ReadableInterop = tc;
		var Ep = class extends tc {
			constructor() {
				super();
				(this._values = []),
					(this.resolvers = []),
					(this._closedPromise = new Promise((e) => (this._closedPromiseResolve = e)));
			}
			get closed() {
				return this._closedPromise;
			}
			cancel(e) {
				return Es.__awaiter(this, void 0, void 0, function* () {
					yield this.return(e);
				});
			}
			write(e) {
				this._ensureOpen() &&
					(this.resolvers.length <= 0
						? this._values.push(e)
						: this.resolvers.shift().resolve({ done: !1, value: e }));
			}
			abort(e) {
				this._closedPromiseResolve &&
					(this.resolvers.length <= 0
						? (this._error = { error: e })
						: this.resolvers.shift().reject({ done: !0, value: e }));
			}
			close() {
				if (this._closedPromiseResolve) {
					let { resolvers: e } = this;
					for (; e.length > 0; ) e.shift().resolve(_t.ITERATOR_DONE);
					this._closedPromiseResolve(), (this._closedPromiseResolve = void 0);
				}
			}
			[Symbol.asyncIterator]() {
				return this;
			}
			toDOMStream(e) {
				return Op.default.toDOMStream(
					this._closedPromiseResolve || this._error ? this : this._values,
					e
				);
			}
			toNodeStream(e) {
				return Op.default.toNodeStream(
					this._closedPromiseResolve || this._error ? this : this._values,
					e
				);
			}
			throw(e) {
				return Es.__awaiter(this, void 0, void 0, function* () {
					return yield this.abort(e), _t.ITERATOR_DONE;
				});
			}
			return(e) {
				return Es.__awaiter(this, void 0, void 0, function* () {
					return yield this.close(), _t.ITERATOR_DONE;
				});
			}
			read(e) {
				return Es.__awaiter(this, void 0, void 0, function* () {
					return (yield this.next(e, 'read')).value;
				});
			}
			peek(e) {
				return Es.__awaiter(this, void 0, void 0, function* () {
					return (yield this.next(e, 'peek')).value;
				});
			}
			next(...e) {
				return this._values.length > 0
					? Promise.resolve({ done: !1, value: this._values.shift() })
					: this._error
					? Promise.reject({ done: !0, value: this._error.error })
					: this._closedPromiseResolve
					? new Promise((t, n) => {
							this.resolvers.push({ resolve: t, reject: n });
					  })
					: Promise.resolve(_t.ITERATOR_DONE);
			}
			_ensureOpen() {
				if (this._closedPromiseResolve) return !0;
				throw new Error('AsyncQueue is closed');
			}
		};
		_t.AsyncQueue = Ep;
	});
	var ut = w((U) => {
		'use strict';
		Object.defineProperty(U, '__esModule', { value: !0 });
		U.isReadableNodeStream =
			U.isWritableNodeStream =
			U.isReadableDOMStream =
			U.isWritableDOMStream =
			U.isFetchResponse =
			U.isFSReadStream =
			U.isFileHandle =
			U.isUnderlyingSink =
			U.isIteratorResult =
			U.isArrayLike =
			U.isArrowJSON =
			U.isAsyncIterable =
			U.isIterable =
			U.isObservable =
			U.isPromise =
			U.isObject =
			U.BigUint64ArrayAvailable =
			U.BigUint64Array =
			U.BigInt64ArrayAvailable =
			U.BigInt64Array =
			U.BigIntAvailable =
			U.BigInt =
				void 0;
		var qo = yi(),
			[Tw, ww] = (() => {
				let r = () => {
					throw new Error('BigInt is not available in this environment');
				};
				function e() {
					throw r();
				}
				return (
					(e.asIntN = () => {
						throw r();
					}),
					(e.asUintN = () => {
						throw r();
					}),
					typeof BigInt != 'undefined' ? [BigInt, !0] : [e, !1]
				);
			})();
		U.BigInt = Tw;
		U.BigIntAvailable = ww;
		var [Iw, Bw] = (() => {
			let r = () => {
				throw new Error('BigInt64Array is not available in this environment');
			};
			class e {
				static get BYTES_PER_ELEMENT() {
					return 8;
				}
				static of() {
					throw r();
				}
				static from() {
					throw r();
				}
				constructor() {
					throw r();
				}
			}
			return typeof BigInt64Array != 'undefined' ? [BigInt64Array, !0] : [e, !1];
		})();
		U.BigInt64Array = Iw;
		U.BigInt64ArrayAvailable = Bw;
		var [Sw, Aw] = (() => {
			let r = () => {
				throw new Error('BigUint64Array is not available in this environment');
			};
			class e {
				static get BYTES_PER_ELEMENT() {
					return 8;
				}
				static of() {
					throw r();
				}
				static from() {
					throw r();
				}
				constructor() {
					throw r();
				}
			}
			return typeof BigUint64Array != 'undefined' ? [BigUint64Array, !0] : [e, !1];
		})();
		U.BigUint64Array = Sw;
		U.BigUint64ArrayAvailable = Aw;
		var rc = (r) => typeof r == 'number',
			Mp = (r) => typeof r == 'boolean',
			nt = (r) => typeof r == 'function';
		U.isObject = (r) => r != null && Object(r) === r;
		U.isPromise = (r) => U.isObject(r) && nt(r.then);
		U.isObservable = (r) => U.isObject(r) && nt(r.subscribe);
		U.isIterable = (r) => U.isObject(r) && nt(r[Symbol.iterator]);
		U.isAsyncIterable = (r) => U.isObject(r) && nt(r[Symbol.asyncIterator]);
		U.isArrowJSON = (r) => U.isObject(r) && U.isObject(r.schema);
		U.isArrayLike = (r) => U.isObject(r) && rc(r.length);
		U.isIteratorResult = (r) => U.isObject(r) && 'done' in r && 'value' in r;
		U.isUnderlyingSink = (r) =>
			U.isObject(r) && nt(r.abort) && nt(r.close) && nt(r.start) && nt(r.write);
		U.isFileHandle = (r) => U.isObject(r) && nt(r.stat) && rc(r.fd);
		U.isFSReadStream = (r) => U.isReadableNodeStream(r) && rc(r.bytesRead);
		U.isFetchResponse = (r) => U.isObject(r) && U.isReadableDOMStream(r.body);
		U.isWritableDOMStream = (r) =>
			U.isObject(r) && nt(r.abort) && nt(r.getWriter) && !(r instanceof qo.ReadableInterop);
		U.isReadableDOMStream = (r) =>
			U.isObject(r) && nt(r.cancel) && nt(r.getReader) && !(r instanceof qo.ReadableInterop);
		U.isWritableNodeStream = (r) =>
			U.isObject(r) &&
			nt(r.end) &&
			nt(r.write) &&
			Mp(r.writable) &&
			!(r instanceof qo.ReadableInterop);
		U.isReadableNodeStream = (r) =>
			U.isObject(r) &&
			nt(r.read) &&
			nt(r.pipe) &&
			Mp(r.readable) &&
			!(r instanceof qo.ReadableInterop);
	});
	var Je = w((F) => {
		'use strict';
		Object.defineProperty(F, '__esModule', { value: !0 });
		F.compareArrayLike =
			F.rebaseValueOffsets =
			F.toUint8ClampedArrayAsyncIterator =
			F.toFloat64ArrayAsyncIterator =
			F.toFloat32ArrayAsyncIterator =
			F.toUint32ArrayAsyncIterator =
			F.toUint16ArrayAsyncIterator =
			F.toUint8ArrayAsyncIterator =
			F.toInt32ArrayAsyncIterator =
			F.toInt16ArrayAsyncIterator =
			F.toInt8ArrayAsyncIterator =
			F.toArrayBufferViewAsyncIterator =
			F.toUint8ClampedArrayIterator =
			F.toFloat64ArrayIterator =
			F.toFloat32ArrayIterator =
			F.toUint32ArrayIterator =
			F.toUint16ArrayIterator =
			F.toUint8ArrayIterator =
			F.toInt32ArrayIterator =
			F.toInt16ArrayIterator =
			F.toInt8ArrayIterator =
			F.toArrayBufferViewIterator =
			F.toUint8ClampedArray =
			F.toFloat64Array =
			F.toFloat32Array =
			F.toBigUint64Array =
			F.toUint32Array =
			F.toUint16Array =
			F.toUint8Array =
			F.toBigInt64Array =
			F.toInt32Array =
			F.toInt16Array =
			F.toInt8Array =
			F.toArrayBufferView =
			F.joinUint8Arrays =
			F.memcpy =
				void 0;
		var We = at(),
			Dw = Ur(),
			Ow = Nn(),
			Fw = Dw.flatbuffers.ByteBuffer,
			xn = ut(),
			nc = typeof SharedArrayBuffer != 'undefined' ? SharedArrayBuffer : ArrayBuffer;
		function Ew(r) {
			let e = r[0] ? [r[0]] : [],
				t,
				n,
				i,
				s;
			for (let o, l, h = 0, u = 0, m = r.length; ++h < m; ) {
				if (
					((o = e[u]), (l = r[h]), !o || !l || o.buffer !== l.buffer || l.byteOffset < o.byteOffset)
				) {
					l && (e[++u] = l);
					continue;
				}
				if (
					(({ byteOffset: t, byteLength: i } = o),
					({ byteOffset: n, byteLength: s } = l),
					t + i < n || n + s < t)
				) {
					l && (e[++u] = l);
					continue;
				}
				e[u] = new Uint8Array(o.buffer, t, n - t + s);
			}
			return e;
		}
		function ic(r, e, t = 0, n = e.byteLength) {
			let i = r.byteLength,
				s = new Uint8Array(r.buffer, r.byteOffset, i),
				o = new Uint8Array(e.buffer, e.byteOffset, Math.min(n, i));
			return s.set(o, t), r;
		}
		F.memcpy = ic;
		function Mw(r, e) {
			let t = Ew(r),
				n = t.reduce((m, E) => m + E.byteLength, 0),
				i,
				s,
				o,
				l = 0,
				h = -1,
				u = Math.min(e || 1 / 0, n);
			for (let m = t.length; ++h < m; ) {
				if (((i = t[h]), (s = i.subarray(0, Math.min(i.length, u - l))), u <= l + s.length)) {
					s.length < i.length ? (t[h] = i.subarray(s.length)) : s.length === i.length && h++,
						o ? ic(o, s, l) : (o = s);
					break;
				}
				ic(o || (o = new Uint8Array(u)), s, l), (l += s.length);
			}
			return [o || new Uint8Array(0), t.slice(h), n - (o ? o.byteLength : 0)];
		}
		F.joinUint8Arrays = Mw;
		function lt(r, e) {
			let t = xn.isIteratorResult(e) ? e.value : e;
			return t instanceof r
				? r === Uint8Array
					? new r(t.buffer, t.byteOffset, t.byteLength)
					: t
				: t
				? (typeof t == 'string' && (t = Ow.encodeUtf8(t)),
				  t instanceof ArrayBuffer
						? new r(t)
						: t instanceof nc
						? new r(t)
						: t instanceof Fw
						? lt(r, t.bytes())
						: ArrayBuffer.isView(t)
						? t.byteLength <= 0
							? new r(0)
							: new r(t.buffer, t.byteOffset, t.byteLength / r.BYTES_PER_ELEMENT)
						: r.from(t))
				: new r(0);
		}
		F.toArrayBufferView = lt;
		F.toInt8Array = (r) => lt(Int8Array, r);
		F.toInt16Array = (r) => lt(Int16Array, r);
		F.toInt32Array = (r) => lt(Int32Array, r);
		F.toBigInt64Array = (r) => lt(xn.BigInt64Array, r);
		F.toUint8Array = (r) => lt(Uint8Array, r);
		F.toUint16Array = (r) => lt(Uint16Array, r);
		F.toUint32Array = (r) => lt(Uint32Array, r);
		F.toBigUint64Array = (r) => lt(xn.BigUint64Array, r);
		F.toFloat32Array = (r) => lt(Float32Array, r);
		F.toFloat64Array = (r) => lt(Float64Array, r);
		F.toUint8ClampedArray = (r) => lt(Uint8ClampedArray, r);
		var sc = (r) => (r.next(), r);
		function* lr(r, e) {
			let t = function* (i) {
					yield i;
				},
				n =
					typeof e == 'string' ||
					ArrayBuffer.isView(e) ||
					e instanceof ArrayBuffer ||
					e instanceof nc
						? t(e)
						: xn.isIterable(e)
						? e
						: t(e);
			return (
				yield* sc(
					(function* (i) {
						let s = null;
						do s = i.next(yield lt(r, s));
						while (!s.done);
					})(n[Symbol.iterator]())
				),
				new r()
			);
		}
		F.toArrayBufferViewIterator = lr;
		F.toInt8ArrayIterator = (r) => lr(Int8Array, r);
		F.toInt16ArrayIterator = (r) => lr(Int16Array, r);
		F.toInt32ArrayIterator = (r) => lr(Int32Array, r);
		F.toUint8ArrayIterator = (r) => lr(Uint8Array, r);
		F.toUint16ArrayIterator = (r) => lr(Uint16Array, r);
		F.toUint32ArrayIterator = (r) => lr(Uint32Array, r);
		F.toFloat32ArrayIterator = (r) => lr(Float32Array, r);
		F.toFloat64ArrayIterator = (r) => lr(Float64Array, r);
		F.toUint8ClampedArrayIterator = (r) => lr(Uint8ClampedArray, r);
		function Xt(r, e) {
			return We.__asyncGenerator(this, arguments, function* () {
				if (xn.isPromise(e))
					return yield We.__await(
						yield We.__await(
							yield* We.__asyncDelegator(We.__asyncValues(Xt(r, yield We.__await(e))))
						)
					);
				let n = function (o) {
						return We.__asyncGenerator(this, arguments, function* () {
							yield yield We.__await(yield We.__await(o));
						});
					},
					i = function (o) {
						return We.__asyncGenerator(this, arguments, function* () {
							yield We.__await(
								yield* We.__asyncDelegator(
									We.__asyncValues(
										sc(
											(function* (l) {
												let h = null;
												do h = l.next(yield h == null ? void 0 : h.value);
												while (!h.done);
											})(o[Symbol.iterator]())
										)
									)
								)
							);
						});
					},
					s =
						typeof e == 'string' ||
						ArrayBuffer.isView(e) ||
						e instanceof ArrayBuffer ||
						e instanceof nc
							? n(e)
							: xn.isIterable(e)
							? i(e)
							: xn.isAsyncIterable(e)
							? e
							: n(e);
				return (
					yield We.__await(
						yield* We.__asyncDelegator(
							We.__asyncValues(
								sc(
									(function (o) {
										return We.__asyncGenerator(this, arguments, function* () {
											let l = null;
											do l = yield We.__await(o.next(yield yield We.__await(lt(r, l))));
											while (!l.done);
										});
									})(s[Symbol.asyncIterator]())
								)
							)
						)
					),
					yield We.__await(new r())
				);
			});
		}
		F.toArrayBufferViewAsyncIterator = Xt;
		F.toInt8ArrayAsyncIterator = (r) => Xt(Int8Array, r);
		F.toInt16ArrayAsyncIterator = (r) => Xt(Int16Array, r);
		F.toInt32ArrayAsyncIterator = (r) => Xt(Int32Array, r);
		F.toUint8ArrayAsyncIterator = (r) => Xt(Uint8Array, r);
		F.toUint16ArrayAsyncIterator = (r) => Xt(Uint16Array, r);
		F.toUint32ArrayAsyncIterator = (r) => Xt(Uint32Array, r);
		F.toFloat32ArrayAsyncIterator = (r) => Xt(Float32Array, r);
		F.toFloat64ArrayAsyncIterator = (r) => Xt(Float64Array, r);
		F.toUint8ClampedArrayAsyncIterator = (r) => Xt(Uint8ClampedArray, r);
		function Rw(r, e, t) {
			if (r !== 0) {
				t = t.slice(0, e + 1);
				for (let n = -1; ++n <= e; ) t[n] += r;
			}
			return t;
		}
		F.rebaseValueOffsets = Rw;
		function Uw(r, e) {
			let t = 0,
				n = r.length;
			if (n !== e.length) return !1;
			if (n > 0)
				do if (r[t] !== e[t]) return !1;
				while (++t < n);
			return !0;
		}
		F.compareArrayLike = Uw;
	});
	var Ms = w((ac) => {
		'use strict';
		Object.defineProperty(ac, '__esModule', { value: !0 });
		var ye = at(),
			dt = Je();
		ac.default = {
			fromIterable(r) {
				return Wo(Vw(r));
			},
			fromAsyncIterable(r) {
				return Wo(kw(r));
			},
			fromDOMStream(r) {
				return Wo(Pw(r));
			},
			fromNodeStream(r) {
				return Wo(Lw(r));
			},
			toDOMStream(r, e) {
				throw new Error('"toDOMStream" not available in this environment');
			},
			toNodeStream(r, e) {
				throw new Error('"toNodeStream" not available in this environment');
			}
		};
		var Wo = (r) => (r.next(), r);
		function* Vw(r) {
			let e,
				t = !1,
				n = [],
				i,
				s,
				o,
				l = 0;
			function h() {
				return s === 'peek'
					? dt.joinUint8Arrays(n, o)[0]
					: (([i, n, l] = dt.joinUint8Arrays(n, o)), i);
			}
			({ cmd: s, size: o } = yield null);
			let u = dt.toUint8ArrayIterator(r)[Symbol.iterator]();
			try {
				do
					if (
						(({ done: e, value: i } = isNaN(o - l) ? u.next(void 0) : u.next(o - l)),
						!e && i.byteLength > 0 && (n.push(i), (l += i.byteLength)),
						e || o <= l)
					)
						do ({ cmd: s, size: o } = yield h());
						while (o < l);
				while (!e);
			} catch (m) {
				(t = !0) && typeof u.throw == 'function' && u.throw(m);
			} finally {
				t === !1 && typeof u.return == 'function' && u.return(null);
			}
			return null;
		}
		function kw(r) {
			return ye.__asyncGenerator(this, arguments, function* () {
				let t,
					n = !1,
					i = [],
					s,
					o,
					l,
					h = 0;
				function u() {
					return o === 'peek'
						? dt.joinUint8Arrays(i, l)[0]
						: (([s, i, h] = dt.joinUint8Arrays(i, l)), s);
				}
				({ cmd: o, size: l } = yield yield ye.__await(null));
				let m = dt.toUint8ArrayAsyncIterator(r)[Symbol.asyncIterator]();
				try {
					do
						if (
							(({ done: t, value: s } = isNaN(l - h)
								? yield ye.__await(m.next(void 0))
								: yield ye.__await(m.next(l - h))),
							!t && s.byteLength > 0 && (i.push(s), (h += s.byteLength)),
							t || l <= h)
						)
							do ({ cmd: o, size: l } = yield yield ye.__await(u()));
							while (l < h);
					while (!t);
				} catch (E) {
					(n = !0) && typeof m.throw == 'function' && (yield ye.__await(m.throw(E)));
				} finally {
					n === !1 &&
						typeof m.return == 'function' &&
						(yield ye.__await(m.return(new Uint8Array(0))));
				}
				return yield ye.__await(null);
			});
		}
		function Pw(r) {
			return ye.__asyncGenerator(this, arguments, function* () {
				let t = !1,
					n = !1,
					i = [],
					s,
					o,
					l,
					h = 0;
				function u() {
					return o === 'peek'
						? dt.joinUint8Arrays(i, l)[0]
						: (([s, i, h] = dt.joinUint8Arrays(i, l)), s);
				}
				({ cmd: o, size: l } = yield yield ye.__await(null));
				let m = new Rp(r);
				try {
					do
						if (
							(({ done: t, value: s } = isNaN(l - h)
								? yield ye.__await(m.read(void 0))
								: yield ye.__await(m.read(l - h))),
							!t && s.byteLength > 0 && (i.push(dt.toUint8Array(s)), (h += s.byteLength)),
							t || l <= h)
						)
							do ({ cmd: o, size: l } = yield yield ye.__await(u()));
							while (l < h);
					while (!t);
				} catch (E) {
					(n = !0) && (yield ye.__await(m.cancel(E)));
				} finally {
					n === !1 ? yield ye.__await(m.cancel()) : r.locked && m.releaseLock();
				}
				return yield ye.__await(null);
			});
		}
		var Rp = class {
			constructor(e) {
				(this.source = e), (this.byobReader = null), (this.defaultReader = null);
				try {
					this.supportsBYOB = !!(this.reader = this.getBYOBReader());
				} catch (t) {
					this.supportsBYOB = !(this.reader = this.getDefaultReader());
				}
			}
			get closed() {
				return this.reader ? this.reader.closed.catch(() => {}) : Promise.resolve();
			}
			releaseLock() {
				this.reader && this.reader.releaseLock(),
					(this.reader = this.byobReader = this.defaultReader = null);
			}
			cancel(e) {
				return ye.__awaiter(this, void 0, void 0, function* () {
					let { reader: t, source: n } = this;
					t && (yield t.cancel(e).catch(() => {})), n && n.locked && this.releaseLock();
				});
			}
			read(e) {
				return ye.__awaiter(this, void 0, void 0, function* () {
					if (e === 0) return { done: this.reader == null, value: new Uint8Array(0) };
					let t =
						!this.supportsBYOB || typeof e != 'number'
							? yield this.getDefaultReader().read()
							: yield this.readFromBYOBReader(e);
					return !t.done && (t.value = dt.toUint8Array(t)), t;
				});
			}
			getDefaultReader() {
				return (
					this.byobReader && this.releaseLock(),
					this.defaultReader ||
						((this.defaultReader = this.source.getReader()),
						this.defaultReader.closed.catch(() => {})),
					(this.reader = this.defaultReader)
				);
			}
			getBYOBReader() {
				return (
					this.defaultReader && this.releaseLock(),
					this.byobReader ||
						((this.byobReader = this.source.getReader({ mode: 'byob' })),
						this.byobReader.closed.catch(() => {})),
					(this.reader = this.byobReader)
				);
			}
			readFromBYOBReader(e) {
				return ye.__awaiter(this, void 0, void 0, function* () {
					return yield Up(this.getBYOBReader(), new ArrayBuffer(e), 0, e);
				});
			}
		};
		function Up(r, e, t, n) {
			return ye.__awaiter(this, void 0, void 0, function* () {
				if (t >= n) return { done: !1, value: new Uint8Array(e, 0, n) };
				let { done: i, value: s } = yield r.read(new Uint8Array(e, t, n - t));
				return (t += s.byteLength) < n && !i
					? yield Up(r, s.buffer, t, n)
					: { done: i, value: new Uint8Array(s.buffer, 0, t) };
			});
		}
		var oc = (r, e) => {
			let t = (i) => n([e, i]),
				n;
			return [e, t, new Promise((i) => (n = i) && r.once(e, t))];
		};
		function Lw(r) {
			return ye.__asyncGenerator(this, arguments, function* () {
				let t = [],
					n = 'error',
					i = !1,
					s = null,
					o,
					l,
					h = 0,
					u = [],
					m;
				function E() {
					return o === 'peek'
						? dt.joinUint8Arrays(u, l)[0]
						: (([m, u, h] = dt.joinUint8Arrays(u, l)), m);
				}
				if ((({ cmd: o, size: l } = yield yield ye.__await(null)), r.isTTY))
					return yield yield ye.__await(new Uint8Array(0)), yield ye.__await(null);
				try {
					(t[0] = oc(r, 'end')), (t[1] = oc(r, 'error'));
					do {
						if (
							((t[2] = oc(r, 'readable')),
							([n, s] = yield ye.__await(Promise.race(t.map((X) => X[2])))),
							n === 'error')
						)
							break;
						if (
							((i = n === 'end') ||
								(isFinite(l - h)
									? ((m = dt.toUint8Array(r.read(l - h))),
									  m.byteLength < l - h && (m = dt.toUint8Array(r.read(void 0))))
									: (m = dt.toUint8Array(r.read(void 0))),
								m.byteLength > 0 && (u.push(m), (h += m.byteLength))),
							i || l <= h)
						)
							do ({ cmd: o, size: l } = yield yield ye.__await(E()));
							while (l < h);
					} while (!i);
				} finally {
					yield ye.__await(M(t, n === 'error' ? s : null));
				}
				return yield ye.__await(null);
				function M(X, Ae) {
					return (
						(m = u = null),
						new Promise((Te, bt) => {
							for (let [ht, Zt] of X) r.off(ht, Zt);
							try {
								let ht = r.destroy;
								ht && ht.call(r, Ae), (Ae = void 0);
							} catch (ht) {
								Ae = ht || Ae;
							} finally {
								Ae != null ? bt(Ae) : Te();
							}
						})
					);
				}
			});
		}
	});
	var Ce = w((mi) => {
		'use strict';
		Object.defineProperty(mi, '__esModule', { value: !0 });
		mi.Vector = mi.AbstractVector = void 0;
		var zo = class {};
		mi.AbstractVector = zo;
		mi.Vector = zo;
		zo.prototype.data = null;
	});
	var nn = w((O) => {
		'use strict';
		Object.defineProperty(O, '__esModule', { value: !0 });
		O.Schema =
			O.Buffer =
			O.Field =
			O.DictionaryEncoding =
			O.KeyValue =
			O.Duration =
			O.Interval =
			O.Timestamp =
			O.Time =
			O.Date =
			O.Decimal =
			O.Bool =
			O.FixedSizeBinary =
			O.LargeBinary =
			O.LargeUtf8 =
			O.Binary =
			O.Utf8 =
			O.FloatingPoint =
			O.Int =
			O.Union =
			O.Map =
			O.FixedSizeList =
			O.LargeList =
			O.List =
			O.Struct_ =
			O.Null =
			O.Endianness =
			O.DictionaryKind =
			O.Type =
			O.IntervalUnit =
			O.TimeUnit =
			O.DateUnit =
			O.Precision =
			O.UnionMode =
			O.Feature =
			O.MetadataVersion =
				void 0;
		var Be = Ur(),
			Nw;
		(function (r) {
			(r[(r.V1 = 0)] = 'V1'),
				(r[(r.V2 = 1)] = 'V2'),
				(r[(r.V3 = 2)] = 'V3'),
				(r[(r.V4 = 3)] = 'V4'),
				(r[(r.V5 = 4)] = 'V5');
		})((Nw = O.MetadataVersion || (O.MetadataVersion = {})));
		var xw;
		(function (r) {
			(r[(r.UNUSED = 0)] = 'UNUSED'),
				(r[(r.DICTIONARY_REPLACEMENT = 1)] = 'DICTIONARY_REPLACEMENT'),
				(r[(r.COMPRESSED_BODY = 2)] = 'COMPRESSED_BODY');
		})((xw = O.Feature || (O.Feature = {})));
		var uc;
		(function (r) {
			(r[(r.Sparse = 0)] = 'Sparse'), (r[(r.Dense = 1)] = 'Dense');
		})((uc = O.UnionMode || (O.UnionMode = {})));
		var cc;
		(function (r) {
			(r[(r.HALF = 0)] = 'HALF'), (r[(r.SINGLE = 1)] = 'SINGLE'), (r[(r.DOUBLE = 2)] = 'DOUBLE');
		})((cc = O.Precision || (O.Precision = {})));
		var lc;
		(function (r) {
			(r[(r.DAY = 0)] = 'DAY'), (r[(r.MILLISECOND = 1)] = 'MILLISECOND');
		})((lc = O.DateUnit || (O.DateUnit = {})));
		var Cn;
		(function (r) {
			(r[(r.SECOND = 0)] = 'SECOND'),
				(r[(r.MILLISECOND = 1)] = 'MILLISECOND'),
				(r[(r.MICROSECOND = 2)] = 'MICROSECOND'),
				(r[(r.NANOSECOND = 3)] = 'NANOSECOND');
		})((Cn = O.TimeUnit || (O.TimeUnit = {})));
		var dc;
		(function (r) {
			(r[(r.YEAR_MONTH = 0)] = 'YEAR_MONTH'), (r[(r.DAY_TIME = 1)] = 'DAY_TIME');
		})((dc = O.IntervalUnit || (O.IntervalUnit = {})));
		var fc;
		(function (r) {
			(r[(r.NONE = 0)] = 'NONE'),
				(r[(r.Null = 1)] = 'Null'),
				(r[(r.Int = 2)] = 'Int'),
				(r[(r.FloatingPoint = 3)] = 'FloatingPoint'),
				(r[(r.Binary = 4)] = 'Binary'),
				(r[(r.Utf8 = 5)] = 'Utf8'),
				(r[(r.Bool = 6)] = 'Bool'),
				(r[(r.Decimal = 7)] = 'Decimal'),
				(r[(r.Date = 8)] = 'Date'),
				(r[(r.Time = 9)] = 'Time'),
				(r[(r.Timestamp = 10)] = 'Timestamp'),
				(r[(r.Interval = 11)] = 'Interval'),
				(r[(r.List = 12)] = 'List'),
				(r[(r.Struct_ = 13)] = 'Struct_'),
				(r[(r.Union = 14)] = 'Union'),
				(r[(r.FixedSizeBinary = 15)] = 'FixedSizeBinary'),
				(r[(r.FixedSizeList = 16)] = 'FixedSizeList'),
				(r[(r.Map = 17)] = 'Map'),
				(r[(r.Duration = 18)] = 'Duration'),
				(r[(r.LargeBinary = 19)] = 'LargeBinary'),
				(r[(r.LargeUtf8 = 20)] = 'LargeUtf8'),
				(r[(r.LargeList = 21)] = 'LargeList');
		})((fc = O.Type || (O.Type = {})));
		var hc;
		(function (r) {
			r[(r.DenseArray = 0)] = 'DenseArray';
		})((hc = O.DictionaryKind || (O.DictionaryKind = {})));
		var pc;
		(function (r) {
			(r[(r.Little = 0)] = 'Little'), (r[(r.Big = 1)] = 'Big');
		})((pc = O.Endianness || (O.Endianness = {})));
		var jn = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsNull(e, t) {
				return (t || new jn()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsNull(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new jn()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startNull(e) {
				e.startObject(0);
			}
			static endNull(e) {
				return e.endObject();
			}
			static createNull(e) {
				return jn.startNull(e), jn.endNull(e);
			}
		};
		O.Null = jn;
		var qn = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsStruct_(e, t) {
				return (t || new qn()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsStruct_(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new qn()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startStruct_(e) {
				e.startObject(0);
			}
			static endStruct_(e) {
				return e.endObject();
			}
			static createStruct_(e) {
				return qn.startStruct_(e), qn.endStruct_(e);
			}
		};
		O.Struct_ = qn;
		var Wn = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsList(e, t) {
				return (t || new Wn()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsList(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Wn()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startList(e) {
				e.startObject(0);
			}
			static endList(e) {
				return e.endObject();
			}
			static createList(e) {
				return Wn.startList(e), Wn.endList(e);
			}
		};
		O.List = Wn;
		var zn = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsLargeList(e, t) {
				return (t || new zn()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsLargeList(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new zn()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startLargeList(e) {
				e.startObject(0);
			}
			static endLargeList(e) {
				return e.endObject();
			}
			static createLargeList(e) {
				return zn.startLargeList(e), zn.endLargeList(e);
			}
		};
		O.LargeList = zn;
		var Kr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsFixedSizeList(e, t) {
				return (t || new Kr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsFixedSizeList(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Kr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			listSize() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt32(this.bb_pos + e) : 0;
			}
			static startFixedSizeList(e) {
				e.startObject(1);
			}
			static addListSize(e, t) {
				e.addFieldInt32(0, t, 0);
			}
			static endFixedSizeList(e) {
				return e.endObject();
			}
			static createFixedSizeList(e, t) {
				return Kr.startFixedSizeList(e), Kr.addListSize(e, t), Kr.endFixedSizeList(e);
			}
		};
		O.FixedSizeList = Kr;
		var Zr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsMap(e, t) {
				return (t || new Zr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsMap(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Zr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			keysSorted() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
			}
			static startMap(e) {
				e.startObject(1);
			}
			static addKeysSorted(e, t) {
				e.addFieldInt8(0, +t, 0);
			}
			static endMap(e) {
				return e.endObject();
			}
			static createMap(e, t) {
				return Zr.startMap(e), Zr.addKeysSorted(e, t), Zr.endMap(e);
			}
		};
		O.Map = Zr;
		var Vr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsUnion(e, t) {
				return (t || new Vr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsUnion(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Vr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			mode() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : uc.Sparse;
			}
			typeIds(e) {
				let t = this.bb.__offset(this.bb_pos, 6);
				return t ? this.bb.readInt32(this.bb.__vector(this.bb_pos + t) + e * 4) : 0;
			}
			typeIdsLength() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
			}
			typeIdsArray() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e
					? new Int32Array(
							this.bb.bytes().buffer,
							this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e),
							this.bb.__vector_len(this.bb_pos + e)
					  )
					: null;
			}
			static startUnion(e) {
				e.startObject(2);
			}
			static addMode(e, t) {
				e.addFieldInt16(0, t, uc.Sparse);
			}
			static addTypeIds(e, t) {
				e.addFieldOffset(1, t, 0);
			}
			static createTypeIdsVector(e, t) {
				e.startVector(4, t.length, 4);
				for (let n = t.length - 1; n >= 0; n--) e.addInt32(t[n]);
				return e.endVector();
			}
			static startTypeIdsVector(e, t) {
				e.startVector(4, t, 4);
			}
			static endUnion(e) {
				return e.endObject();
			}
			static createUnion(e, t, n) {
				return Vr.startUnion(e), Vr.addMode(e, t), Vr.addTypeIds(e, n), Vr.endUnion(e);
			}
		};
		O.Union = Vr;
		var dr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsInt(e, t) {
				return (t || new dr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsInt(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new dr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			bitWidth() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt32(this.bb_pos + e) : 0;
			}
			isSigned() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
			}
			static startInt(e) {
				e.startObject(2);
			}
			static addBitWidth(e, t) {
				e.addFieldInt32(0, t, 0);
			}
			static addIsSigned(e, t) {
				e.addFieldInt8(1, +t, 0);
			}
			static endInt(e) {
				return e.endObject();
			}
			static createInt(e, t, n) {
				return dr.startInt(e), dr.addBitWidth(e, t), dr.addIsSigned(e, n), dr.endInt(e);
			}
		};
		O.Int = dr;
		var Qr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsFloatingPoint(e, t) {
				return (t || new Qr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsFloatingPoint(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Qr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			precision() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : cc.HALF;
			}
			static startFloatingPoint(e) {
				e.startObject(1);
			}
			static addPrecision(e, t) {
				e.addFieldInt16(0, t, cc.HALF);
			}
			static endFloatingPoint(e) {
				return e.endObject();
			}
			static createFloatingPoint(e, t) {
				return Qr.startFloatingPoint(e), Qr.addPrecision(e, t), Qr.endFloatingPoint(e);
			}
		};
		O.FloatingPoint = Qr;
		var Hn = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsUtf8(e, t) {
				return (t || new Hn()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsUtf8(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Hn()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startUtf8(e) {
				e.startObject(0);
			}
			static endUtf8(e) {
				return e.endObject();
			}
			static createUtf8(e) {
				return Hn.startUtf8(e), Hn.endUtf8(e);
			}
		};
		O.Utf8 = Hn;
		var Yn = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsBinary(e, t) {
				return (t || new Yn()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsBinary(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Yn()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startBinary(e) {
				e.startObject(0);
			}
			static endBinary(e) {
				return e.endObject();
			}
			static createBinary(e) {
				return Yn.startBinary(e), Yn.endBinary(e);
			}
		};
		O.Binary = Yn;
		var Gn = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsLargeUtf8(e, t) {
				return (t || new Gn()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsLargeUtf8(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Gn()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startLargeUtf8(e) {
				e.startObject(0);
			}
			static endLargeUtf8(e) {
				return e.endObject();
			}
			static createLargeUtf8(e) {
				return Gn.startLargeUtf8(e), Gn.endLargeUtf8(e);
			}
		};
		O.LargeUtf8 = Gn;
		var $n = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsLargeBinary(e, t) {
				return (t || new $n()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsLargeBinary(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new $n()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startLargeBinary(e) {
				e.startObject(0);
			}
			static endLargeBinary(e) {
				return e.endObject();
			}
			static createLargeBinary(e) {
				return $n.startLargeBinary(e), $n.endLargeBinary(e);
			}
		};
		O.LargeBinary = $n;
		var Xr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsFixedSizeBinary(e, t) {
				return (t || new Xr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsFixedSizeBinary(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Xr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			byteWidth() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt32(this.bb_pos + e) : 0;
			}
			static startFixedSizeBinary(e) {
				e.startObject(1);
			}
			static addByteWidth(e, t) {
				e.addFieldInt32(0, t, 0);
			}
			static endFixedSizeBinary(e) {
				return e.endObject();
			}
			static createFixedSizeBinary(e, t) {
				return Xr.startFixedSizeBinary(e), Xr.addByteWidth(e, t), Xr.endFixedSizeBinary(e);
			}
		};
		O.FixedSizeBinary = Xr;
		var Jn = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsBool(e, t) {
				return (t || new Jn()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsBool(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Jn()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startBool(e) {
				e.startObject(0);
			}
			static endBool(e) {
				return e.endObject();
			}
			static createBool(e) {
				return Jn.startBool(e), Jn.endBool(e);
			}
		};
		O.Bool = Jn;
		var fr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsDecimal(e, t) {
				return (t || new fr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsDecimal(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new fr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			precision() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt32(this.bb_pos + e) : 0;
			}
			scale() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.readInt32(this.bb_pos + e) : 0;
			}
			bitWidth() {
				let e = this.bb.__offset(this.bb_pos, 8);
				return e ? this.bb.readInt32(this.bb_pos + e) : 128;
			}
			static startDecimal(e) {
				e.startObject(3);
			}
			static addPrecision(e, t) {
				e.addFieldInt32(0, t, 0);
			}
			static addScale(e, t) {
				e.addFieldInt32(1, t, 0);
			}
			static addBitWidth(e, t) {
				e.addFieldInt32(2, t, 128);
			}
			static endDecimal(e) {
				return e.endObject();
			}
			static createDecimal(e, t, n, i) {
				return (
					fr.startDecimal(e),
					fr.addPrecision(e, t),
					fr.addScale(e, n),
					fr.addBitWidth(e, i),
					fr.endDecimal(e)
				);
			}
		};
		O.Decimal = fr;
		var en = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsDate(e, t) {
				return (t || new en()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsDate(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new en()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			unit() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : lc.MILLISECOND;
			}
			static startDate(e) {
				e.startObject(1);
			}
			static addUnit(e, t) {
				e.addFieldInt16(0, t, lc.MILLISECOND);
			}
			static endDate(e) {
				return e.endObject();
			}
			static createDate(e, t) {
				return en.startDate(e), en.addUnit(e, t), en.endDate(e);
			}
		};
		O.Date = en;
		var kr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsTime(e, t) {
				return (t || new kr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsTime(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new kr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			unit() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : Cn.MILLISECOND;
			}
			bitWidth() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.readInt32(this.bb_pos + e) : 32;
			}
			static startTime(e) {
				e.startObject(2);
			}
			static addUnit(e, t) {
				e.addFieldInt16(0, t, Cn.MILLISECOND);
			}
			static addBitWidth(e, t) {
				e.addFieldInt32(1, t, 32);
			}
			static endTime(e) {
				return e.endObject();
			}
			static createTime(e, t, n) {
				return kr.startTime(e), kr.addUnit(e, t), kr.addBitWidth(e, n), kr.endTime(e);
			}
		};
		O.Time = kr;
		var Pr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsTimestamp(e, t) {
				return (t || new Pr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsTimestamp(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Pr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			unit() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : Cn.SECOND;
			}
			timezone(e) {
				let t = this.bb.__offset(this.bb_pos, 6);
				return t ? this.bb.__string(this.bb_pos + t, e) : null;
			}
			static startTimestamp(e) {
				e.startObject(2);
			}
			static addUnit(e, t) {
				e.addFieldInt16(0, t, Cn.SECOND);
			}
			static addTimezone(e, t) {
				e.addFieldOffset(1, t, 0);
			}
			static endTimestamp(e) {
				return e.endObject();
			}
			static createTimestamp(e, t, n) {
				return Pr.startTimestamp(e), Pr.addUnit(e, t), Pr.addTimezone(e, n), Pr.endTimestamp(e);
			}
		};
		O.Timestamp = Pr;
		var tn = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsInterval(e, t) {
				return (t || new tn()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsInterval(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new tn()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			unit() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : dc.YEAR_MONTH;
			}
			static startInterval(e) {
				e.startObject(1);
			}
			static addUnit(e, t) {
				e.addFieldInt16(0, t, dc.YEAR_MONTH);
			}
			static endInterval(e) {
				return e.endObject();
			}
			static createInterval(e, t) {
				return tn.startInterval(e), tn.addUnit(e, t), tn.endInterval(e);
			}
		};
		O.Interval = tn;
		var rn = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsDuration(e, t) {
				return (t || new rn()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsDuration(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new rn()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			unit() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : Cn.MILLISECOND;
			}
			static startDuration(e) {
				e.startObject(1);
			}
			static addUnit(e, t) {
				e.addFieldInt16(0, t, Cn.MILLISECOND);
			}
			static endDuration(e) {
				return e.endObject();
			}
			static createDuration(e, t) {
				return rn.startDuration(e), rn.addUnit(e, t), rn.endDuration(e);
			}
		};
		O.Duration = rn;
		var er = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsKeyValue(e, t) {
				return (t || new er()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsKeyValue(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new er()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			key(e) {
				let t = this.bb.__offset(this.bb_pos, 4);
				return t ? this.bb.__string(this.bb_pos + t, e) : null;
			}
			value(e) {
				let t = this.bb.__offset(this.bb_pos, 6);
				return t ? this.bb.__string(this.bb_pos + t, e) : null;
			}
			static startKeyValue(e) {
				e.startObject(2);
			}
			static addKey(e, t) {
				e.addFieldOffset(0, t, 0);
			}
			static addValue(e, t) {
				e.addFieldOffset(1, t, 0);
			}
			static endKeyValue(e) {
				return e.endObject();
			}
			static createKeyValue(e, t, n) {
				return er.startKeyValue(e), er.addKey(e, t), er.addValue(e, n), er.endKeyValue(e);
			}
		};
		O.KeyValue = er;
		var Mt = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsDictionaryEncoding(e, t) {
				return (t || new Mt()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsDictionaryEncoding(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Mt()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			id() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt64(this.bb_pos + e) : this.bb.createLong(0, 0);
			}
			indexType(e) {
				let t = this.bb.__offset(this.bb_pos, 6);
				return t ? (e || new dr()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
			}
			isOrdered() {
				let e = this.bb.__offset(this.bb_pos, 8);
				return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
			}
			dictionaryKind() {
				let e = this.bb.__offset(this.bb_pos, 10);
				return e ? this.bb.readInt16(this.bb_pos + e) : hc.DenseArray;
			}
			static startDictionaryEncoding(e) {
				e.startObject(4);
			}
			static addId(e, t) {
				e.addFieldInt64(0, t, e.createLong(0, 0));
			}
			static addIndexType(e, t) {
				e.addFieldOffset(1, t, 0);
			}
			static addIsOrdered(e, t) {
				e.addFieldInt8(2, +t, 0);
			}
			static addDictionaryKind(e, t) {
				e.addFieldInt16(3, t, hc.DenseArray);
			}
			static endDictionaryEncoding(e) {
				return e.endObject();
			}
			static createDictionaryEncoding(e, t, n, i, s) {
				return (
					Mt.startDictionaryEncoding(e),
					Mt.addId(e, t),
					Mt.addIndexType(e, n),
					Mt.addIsOrdered(e, i),
					Mt.addDictionaryKind(e, s),
					Mt.endDictionaryEncoding(e)
				);
			}
		};
		O.DictionaryEncoding = Mt;
		var ct = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsField(e, t) {
				return (t || new ct()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsField(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new ct()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			name(e) {
				let t = this.bb.__offset(this.bb_pos, 4);
				return t ? this.bb.__string(this.bb_pos + t, e) : null;
			}
			nullable() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
			}
			typeType() {
				let e = this.bb.__offset(this.bb_pos, 8);
				return e ? this.bb.readUint8(this.bb_pos + e) : fc.NONE;
			}
			type(e) {
				let t = this.bb.__offset(this.bb_pos, 10);
				return t ? this.bb.__union(e, this.bb_pos + t) : null;
			}
			dictionary(e) {
				let t = this.bb.__offset(this.bb_pos, 12);
				return t ? (e || new Mt()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
			}
			children(e, t) {
				let n = this.bb.__offset(this.bb_pos, 14);
				return n
					? (t || new ct()).__init(
							this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4),
							this.bb
					  )
					: null;
			}
			childrenLength() {
				let e = this.bb.__offset(this.bb_pos, 14);
				return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
			}
			customMetadata(e, t) {
				let n = this.bb.__offset(this.bb_pos, 16);
				return n
					? (t || new er()).__init(
							this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4),
							this.bb
					  )
					: null;
			}
			customMetadataLength() {
				let e = this.bb.__offset(this.bb_pos, 16);
				return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
			}
			static startField(e) {
				e.startObject(7);
			}
			static addName(e, t) {
				e.addFieldOffset(0, t, 0);
			}
			static addNullable(e, t) {
				e.addFieldInt8(1, +t, 0);
			}
			static addTypeType(e, t) {
				e.addFieldInt8(2, t, fc.NONE);
			}
			static addType(e, t) {
				e.addFieldOffset(3, t, 0);
			}
			static addDictionary(e, t) {
				e.addFieldOffset(4, t, 0);
			}
			static addChildren(e, t) {
				e.addFieldOffset(5, t, 0);
			}
			static createChildrenVector(e, t) {
				e.startVector(4, t.length, 4);
				for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
				return e.endVector();
			}
			static startChildrenVector(e, t) {
				e.startVector(4, t, 4);
			}
			static addCustomMetadata(e, t) {
				e.addFieldOffset(6, t, 0);
			}
			static createCustomMetadataVector(e, t) {
				e.startVector(4, t.length, 4);
				for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
				return e.endVector();
			}
			static startCustomMetadataVector(e, t) {
				e.startVector(4, t, 4);
			}
			static endField(e) {
				return e.endObject();
			}
			static createField(e, t, n, i, s, o, l, h) {
				return (
					ct.startField(e),
					ct.addName(e, t),
					ct.addNullable(e, n),
					ct.addTypeType(e, i),
					ct.addType(e, s),
					ct.addDictionary(e, o),
					ct.addChildren(e, l),
					ct.addCustomMetadata(e, h),
					ct.endField(e)
				);
			}
		};
		O.Field = ct;
		var Vp = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			offset() {
				return this.bb.readInt64(this.bb_pos);
			}
			length() {
				return this.bb.readInt64(this.bb_pos + 8);
			}
			static createBuffer(e, t, n) {
				return e.prep(8, 16), e.writeInt64(n), e.writeInt64(t), e.offset();
			}
		};
		O.Buffer = Vp;
		var tr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsSchema(e, t) {
				return (t || new tr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsSchema(e, t) {
				return (
					e.setPosition(e.position() + Be.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new tr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			endianness() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : pc.Little;
			}
			fields(e, t) {
				let n = this.bb.__offset(this.bb_pos, 6);
				return n
					? (t || new ct()).__init(
							this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4),
							this.bb
					  )
					: null;
			}
			fieldsLength() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
			}
			customMetadata(e, t) {
				let n = this.bb.__offset(this.bb_pos, 8);
				return n
					? (t || new er()).__init(
							this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4),
							this.bb
					  )
					: null;
			}
			customMetadataLength() {
				let e = this.bb.__offset(this.bb_pos, 8);
				return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
			}
			features(e) {
				let t = this.bb.__offset(this.bb_pos, 10);
				return t
					? this.bb.readInt64(this.bb.__vector(this.bb_pos + t) + e * 8)
					: this.bb.createLong(0, 0);
			}
			featuresLength() {
				let e = this.bb.__offset(this.bb_pos, 10);
				return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
			}
			static startSchema(e) {
				e.startObject(4);
			}
			static addEndianness(e, t) {
				e.addFieldInt16(0, t, pc.Little);
			}
			static addFields(e, t) {
				e.addFieldOffset(1, t, 0);
			}
			static createFieldsVector(e, t) {
				e.startVector(4, t.length, 4);
				for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
				return e.endVector();
			}
			static startFieldsVector(e, t) {
				e.startVector(4, t, 4);
			}
			static addCustomMetadata(e, t) {
				e.addFieldOffset(2, t, 0);
			}
			static createCustomMetadataVector(e, t) {
				e.startVector(4, t.length, 4);
				for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
				return e.endVector();
			}
			static startCustomMetadataVector(e, t) {
				e.startVector(4, t, 4);
			}
			static addFeatures(e, t) {
				e.addFieldOffset(3, t, 0);
			}
			static createFeaturesVector(e, t) {
				e.startVector(8, t.length, 8);
				for (let n = t.length - 1; n >= 0; n--) e.addInt64(t[n]);
				return e.endVector();
			}
			static startFeaturesVector(e, t) {
				e.startVector(8, t, 8);
			}
			static endSchema(e) {
				return e.endObject();
			}
			static finishSchemaBuffer(e, t) {
				e.finish(t);
			}
			static finishSizePrefixedSchemaBuffer(e, t) {
				e.finish(t, void 0, !0);
			}
			static createSchema(e, t, n, i, s) {
				return (
					tr.startSchema(e),
					tr.addEndianness(e, t),
					tr.addFields(e, n),
					tr.addCustomMetadata(e, i),
					tr.addFeatures(e, s),
					tr.endSchema(e)
				);
			}
		};
		O.Schema = tr;
	});
	var Go = w((je) => {
		'use strict';
		Object.defineProperty(je, '__esModule', { value: !0 });
		je.Message =
			je.DictionaryBatch =
			je.RecordBatch =
			je.BodyCompression =
			je.FieldNode =
			je.MessageHeader =
			je.BodyCompressionMethod =
			je.CompressionType =
				void 0;
		var Ho = Ur(),
			Yo = nn(),
			_c;
		(function (r) {
			(r[(r.LZ4_FRAME = 0)] = 'LZ4_FRAME'), (r[(r.ZSTD = 1)] = 'ZSTD');
		})((_c = je.CompressionType || (je.CompressionType = {})));
		var yc;
		(function (r) {
			r[(r.BUFFER = 0)] = 'BUFFER';
		})((yc = je.BodyCompressionMethod || (je.BodyCompressionMethod = {})));
		var mc;
		(function (r) {
			(r[(r.NONE = 0)] = 'NONE'),
				(r[(r.Schema = 1)] = 'Schema'),
				(r[(r.DictionaryBatch = 2)] = 'DictionaryBatch'),
				(r[(r.RecordBatch = 3)] = 'RecordBatch'),
				(r[(r.Tensor = 4)] = 'Tensor'),
				(r[(r.SparseTensor = 5)] = 'SparseTensor');
		})((mc = je.MessageHeader || (je.MessageHeader = {})));
		var bc = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			length() {
				return this.bb.readInt64(this.bb_pos);
			}
			nullCount() {
				return this.bb.readInt64(this.bb_pos + 8);
			}
			static createFieldNode(e, t, n) {
				return e.prep(8, 16), e.writeInt64(n), e.writeInt64(t), e.offset();
			}
		};
		je.FieldNode = bc;
		var hr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsBodyCompression(e, t) {
				return (t || new hr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsBodyCompression(e, t) {
				return (
					e.setPosition(e.position() + Ho.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new hr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			codec() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt8(this.bb_pos + e) : _c.LZ4_FRAME;
			}
			method() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.readInt8(this.bb_pos + e) : yc.BUFFER;
			}
			static startBodyCompression(e) {
				e.startObject(2);
			}
			static addCodec(e, t) {
				e.addFieldInt8(0, t, _c.LZ4_FRAME);
			}
			static addMethod(e, t) {
				e.addFieldInt8(1, t, yc.BUFFER);
			}
			static endBodyCompression(e) {
				return e.endObject();
			}
			static createBodyCompression(e, t, n) {
				return (
					hr.startBodyCompression(e),
					hr.addCodec(e, t),
					hr.addMethod(e, n),
					hr.endBodyCompression(e)
				);
			}
		};
		je.BodyCompression = hr;
		var Rt = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsRecordBatch(e, t) {
				return (t || new Rt()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsRecordBatch(e, t) {
				return (
					e.setPosition(e.position() + Ho.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Rt()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			length() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt64(this.bb_pos + e) : this.bb.createLong(0, 0);
			}
			nodes(e, t) {
				let n = this.bb.__offset(this.bb_pos, 6);
				return n
					? (t || new bc()).__init(this.bb.__vector(this.bb_pos + n) + e * 16, this.bb)
					: null;
			}
			nodesLength() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
			}
			buffers(e, t) {
				let n = this.bb.__offset(this.bb_pos, 8);
				return n
					? (t || new Yo.Buffer()).__init(this.bb.__vector(this.bb_pos + n) + e * 16, this.bb)
					: null;
			}
			buffersLength() {
				let e = this.bb.__offset(this.bb_pos, 8);
				return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
			}
			compression(e) {
				let t = this.bb.__offset(this.bb_pos, 10);
				return t ? (e || new hr()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
			}
			static startRecordBatch(e) {
				e.startObject(4);
			}
			static addLength(e, t) {
				e.addFieldInt64(0, t, e.createLong(0, 0));
			}
			static addNodes(e, t) {
				e.addFieldOffset(1, t, 0);
			}
			static startNodesVector(e, t) {
				e.startVector(16, t, 8);
			}
			static addBuffers(e, t) {
				e.addFieldOffset(2, t, 0);
			}
			static startBuffersVector(e, t) {
				e.startVector(16, t, 8);
			}
			static addCompression(e, t) {
				e.addFieldOffset(3, t, 0);
			}
			static endRecordBatch(e) {
				return e.endObject();
			}
			static createRecordBatch(e, t, n, i, s) {
				return (
					Rt.startRecordBatch(e),
					Rt.addLength(e, t),
					Rt.addNodes(e, n),
					Rt.addBuffers(e, i),
					Rt.addCompression(e, s),
					Rt.endRecordBatch(e)
				);
			}
		};
		je.RecordBatch = Rt;
		var pr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsDictionaryBatch(e, t) {
				return (t || new pr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsDictionaryBatch(e, t) {
				return (
					e.setPosition(e.position() + Ho.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new pr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			id() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt64(this.bb_pos + e) : this.bb.createLong(0, 0);
			}
			data(e) {
				let t = this.bb.__offset(this.bb_pos, 6);
				return t ? (e || new Rt()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
			}
			isDelta() {
				let e = this.bb.__offset(this.bb_pos, 8);
				return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
			}
			static startDictionaryBatch(e) {
				e.startObject(3);
			}
			static addId(e, t) {
				e.addFieldInt64(0, t, e.createLong(0, 0));
			}
			static addData(e, t) {
				e.addFieldOffset(1, t, 0);
			}
			static addIsDelta(e, t) {
				e.addFieldInt8(2, +t, 0);
			}
			static endDictionaryBatch(e) {
				return e.endObject();
			}
			static createDictionaryBatch(e, t, n, i) {
				return (
					pr.startDictionaryBatch(e),
					pr.addId(e, t),
					pr.addData(e, n),
					pr.addIsDelta(e, i),
					pr.endDictionaryBatch(e)
				);
			}
		};
		je.DictionaryBatch = pr;
		var Ut = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsMessage(e, t) {
				return (t || new Ut()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsMessage(e, t) {
				return (
					e.setPosition(e.position() + Ho.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Ut()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			version() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : Yo.MetadataVersion.V1;
			}
			headerType() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.readUint8(this.bb_pos + e) : mc.NONE;
			}
			header(e) {
				let t = this.bb.__offset(this.bb_pos, 8);
				return t ? this.bb.__union(e, this.bb_pos + t) : null;
			}
			bodyLength() {
				let e = this.bb.__offset(this.bb_pos, 10);
				return e ? this.bb.readInt64(this.bb_pos + e) : this.bb.createLong(0, 0);
			}
			customMetadata(e, t) {
				let n = this.bb.__offset(this.bb_pos, 12);
				return n
					? (t || new Yo.KeyValue()).__init(
							this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4),
							this.bb
					  )
					: null;
			}
			customMetadataLength() {
				let e = this.bb.__offset(this.bb_pos, 12);
				return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
			}
			static startMessage(e) {
				e.startObject(5);
			}
			static addVersion(e, t) {
				e.addFieldInt16(0, t, Yo.MetadataVersion.V1);
			}
			static addHeaderType(e, t) {
				e.addFieldInt8(1, t, mc.NONE);
			}
			static addHeader(e, t) {
				e.addFieldOffset(2, t, 0);
			}
			static addBodyLength(e, t) {
				e.addFieldInt64(3, t, e.createLong(0, 0));
			}
			static addCustomMetadata(e, t) {
				e.addFieldOffset(4, t, 0);
			}
			static createCustomMetadataVector(e, t) {
				e.startVector(4, t.length, 4);
				for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
				return e.endVector();
			}
			static startCustomMetadataVector(e, t) {
				e.startVector(4, t, 4);
			}
			static endMessage(e) {
				return e.endObject();
			}
			static finishMessageBuffer(e, t) {
				e.finish(t);
			}
			static finishSizePrefixedMessageBuffer(e, t) {
				e.finish(t, void 0, !0);
			}
			static createMessage(e, t, n, i, s, o) {
				return (
					Ut.startMessage(e),
					Ut.addVersion(e, t),
					Ut.addHeaderType(e, n),
					Ut.addHeader(e, i),
					Ut.addBodyLength(e, s),
					Ut.addCustomMetadata(e, o),
					Ut.endMessage(e)
				);
			}
		};
		je.Message = Ut;
	});
	var ve = w((Me) => {
		'use strict';
		Object.defineProperty(Me, '__esModule', { value: !0 });
		Me.BufferType =
			Me.Type =
			Me.MessageHeader =
			Me.MetadataVersion =
			Me.IntervalUnit =
			Me.UnionMode =
			Me.Precision =
			Me.TimeUnit =
			Me.DateUnit =
				void 0;
		var bi = nn();
		Object.defineProperty(Me, 'DateUnit', {
			enumerable: !0,
			get: function () {
				return bi.DateUnit;
			}
		});
		Object.defineProperty(Me, 'TimeUnit', {
			enumerable: !0,
			get: function () {
				return bi.TimeUnit;
			}
		});
		Object.defineProperty(Me, 'Precision', {
			enumerable: !0,
			get: function () {
				return bi.Precision;
			}
		});
		Object.defineProperty(Me, 'UnionMode', {
			enumerable: !0,
			get: function () {
				return bi.UnionMode;
			}
		});
		Object.defineProperty(Me, 'IntervalUnit', {
			enumerable: !0,
			get: function () {
				return bi.IntervalUnit;
			}
		});
		Object.defineProperty(Me, 'MetadataVersion', {
			enumerable: !0,
			get: function () {
				return bi.MetadataVersion;
			}
		});
		var Cw = Go();
		Object.defineProperty(Me, 'MessageHeader', {
			enumerable: !0,
			get: function () {
				return Cw.MessageHeader;
			}
		});
		var jw;
		(function (r) {
			(r[(r.NONE = 0)] = 'NONE'),
				(r[(r.Null = 1)] = 'Null'),
				(r[(r.Int = 2)] = 'Int'),
				(r[(r.Float = 3)] = 'Float'),
				(r[(r.Binary = 4)] = 'Binary'),
				(r[(r.Utf8 = 5)] = 'Utf8'),
				(r[(r.Bool = 6)] = 'Bool'),
				(r[(r.Decimal = 7)] = 'Decimal'),
				(r[(r.Date = 8)] = 'Date'),
				(r[(r.Time = 9)] = 'Time'),
				(r[(r.Timestamp = 10)] = 'Timestamp'),
				(r[(r.Interval = 11)] = 'Interval'),
				(r[(r.List = 12)] = 'List'),
				(r[(r.Struct = 13)] = 'Struct'),
				(r[(r.Union = 14)] = 'Union'),
				(r[(r.FixedSizeBinary = 15)] = 'FixedSizeBinary'),
				(r[(r.FixedSizeList = 16)] = 'FixedSizeList'),
				(r[(r.Map = 17)] = 'Map'),
				(r[(r.Dictionary = -1)] = 'Dictionary'),
				(r[(r.Int8 = -2)] = 'Int8'),
				(r[(r.Int16 = -3)] = 'Int16'),
				(r[(r.Int32 = -4)] = 'Int32'),
				(r[(r.Int64 = -5)] = 'Int64'),
				(r[(r.Uint8 = -6)] = 'Uint8'),
				(r[(r.Uint16 = -7)] = 'Uint16'),
				(r[(r.Uint32 = -8)] = 'Uint32'),
				(r[(r.Uint64 = -9)] = 'Uint64'),
				(r[(r.Float16 = -10)] = 'Float16'),
				(r[(r.Float32 = -11)] = 'Float32'),
				(r[(r.Float64 = -12)] = 'Float64'),
				(r[(r.DateDay = -13)] = 'DateDay'),
				(r[(r.DateMillisecond = -14)] = 'DateMillisecond'),
				(r[(r.TimestampSecond = -15)] = 'TimestampSecond'),
				(r[(r.TimestampMillisecond = -16)] = 'TimestampMillisecond'),
				(r[(r.TimestampMicrosecond = -17)] = 'TimestampMicrosecond'),
				(r[(r.TimestampNanosecond = -18)] = 'TimestampNanosecond'),
				(r[(r.TimeSecond = -19)] = 'TimeSecond'),
				(r[(r.TimeMillisecond = -20)] = 'TimeMillisecond'),
				(r[(r.TimeMicrosecond = -21)] = 'TimeMicrosecond'),
				(r[(r.TimeNanosecond = -22)] = 'TimeNanosecond'),
				(r[(r.DenseUnion = -23)] = 'DenseUnion'),
				(r[(r.SparseUnion = -24)] = 'SparseUnion'),
				(r[(r.IntervalDayTime = -25)] = 'IntervalDayTime'),
				(r[(r.IntervalYearMonth = -26)] = 'IntervalYearMonth');
		})((jw = Me.Type || (Me.Type = {})));
		var qw;
		(function (r) {
			(r[(r.OFFSET = 0)] = 'OFFSET'),
				(r[(r.DATA = 1)] = 'DATA'),
				(r[(r.VALIDITY = 2)] = 'VALIDITY'),
				(r[(r.TYPE = 3)] = 'TYPE');
		})((qw = Me.BufferType || (Me.BufferType = {})));
	});
	var _r = w((ze) => {
		'use strict';
		Object.defineProperty(ze, '__esModule', { value: !0 });
		ze.popcnt_uint32 =
			ze.popcnt_array =
			ze.popcnt_bit_range =
			ze.BitIterator =
			ze.packBools =
			ze.truncateBitmap =
			ze.setBool =
			ze.getBit =
			ze.getBool =
				void 0;
		function kp(r, e, t, n) {
			return (t & (1 << n)) != 0;
		}
		ze.getBool = kp;
		function Pp(r, e, t, n) {
			return (t & (1 << n)) >> n;
		}
		ze.getBit = Pp;
		function Ww(r, e, t) {
			return t ? !!(r[e >> 3] |= 1 << e % 8) || !0 : !(r[e >> 3] &= ~(1 << e % 8)) && !1;
		}
		ze.setBool = Ww;
		function zw(r, e, t) {
			let n = (t.byteLength + 7) & ~7;
			if (r > 0 || t.byteLength < n) {
				let i = new Uint8Array(n);
				return (
					i.set(r % 8 == 0 ? t.subarray(r >> 3) : Lp(new $o(t, r, e, null, kp)).subarray(0, n)), i
				);
			}
			return t;
		}
		ze.truncateBitmap = zw;
		function Lp(r) {
			let e = [],
				t = 0,
				n = 0,
				i = 0;
			for (let o of r) o && (i |= 1 << n), ++n == 8 && ((e[t++] = i), (i = n = 0));
			(t === 0 || n > 0) && (e[t++] = i);
			let s = new Uint8Array((e.length + 7) & ~7);
			return s.set(e), s;
		}
		ze.packBools = Lp;
		var $o = class {
			constructor(e, t, n, i, s) {
				(this.bytes = e),
					(this.length = n),
					(this.context = i),
					(this.get = s),
					(this.bit = t % 8),
					(this.byteIndex = t >> 3),
					(this.byte = e[this.byteIndex++]),
					(this.index = 0);
			}
			next() {
				return this.index < this.length
					? (this.bit === 8 && ((this.bit = 0), (this.byte = this.bytes[this.byteIndex++])),
					  { value: this.get(this.context, this.index++, this.byte, this.bit++) })
					: { done: !0, value: null };
			}
			[Symbol.iterator]() {
				return this;
			}
		};
		ze.BitIterator = $o;
		function gc(r, e, t) {
			if (t - e <= 0) return 0;
			if (t - e < 8) {
				let s = 0;
				for (let o of new $o(r, e, t - e, r, Pp)) s += o;
				return s;
			}
			let n = (t >> 3) << 3,
				i = e + (e % 8 == 0 ? 0 : 8 - (e % 8));
			return gc(r, e, i) + gc(r, n, t) + Np(r, i >> 3, (n - i) >> 3);
		}
		ze.popcnt_bit_range = gc;
		function Np(r, e, t) {
			let n = 0,
				i = e | 0,
				s = new DataView(r.buffer, r.byteOffset, r.byteLength),
				o = t === void 0 ? r.byteLength : i + t;
			for (; o - i >= 4; ) (n += Jo(s.getUint32(i))), (i += 4);
			for (; o - i >= 2; ) (n += Jo(s.getUint16(i))), (i += 2);
			for (; o - i >= 1; ) (n += Jo(s.getUint8(i))), (i += 1);
			return n;
		}
		ze.popcnt_array = Np;
		function Jo(r) {
			let e = r | 0;
			return (
				(e = e - ((e >>> 1) & 1431655765)),
				(e = (e & 858993459) + ((e >>> 2) & 858993459)),
				(((e + (e >>> 4)) & 252645135) * 16843009) >>> 24
			);
		}
		ze.popcnt_uint32 = Jo;
	});
	var de = w((S) => {
		'use strict';
		Object.defineProperty(S, '__esModule', { value: !0 });
		S.strideForType =
			S.Dictionary =
			S.Map_ =
			S.FixedSizeList =
			S.FixedSizeBinary =
			S.SparseUnion =
			S.DenseUnion =
			S.Union =
			S.Struct =
			S.List =
			S.IntervalYearMonth =
			S.IntervalDayTime =
			S.Interval =
			S.TimestampNanosecond =
			S.TimestampMicrosecond =
			S.TimestampMillisecond =
			S.TimestampSecond =
			S.Timestamp =
			S.TimeNanosecond =
			S.TimeMicrosecond =
			S.TimeMillisecond =
			S.TimeSecond =
			S.Time =
			S.DateMillisecond =
			S.DateDay =
			S.Date_ =
			S.Decimal =
			S.Bool =
			S.Utf8 =
			S.Binary =
			S.Float64 =
			S.Float32 =
			S.Float16 =
			S.Float =
			S.Uint64 =
			S.Uint32 =
			S.Uint16 =
			S.Uint8 =
			S.Int64 =
			S.Int32 =
			S.Int16 =
			S.Int8 =
			S.Int =
			S.Null =
			S.DataType =
				void 0;
		var R = ve(),
			Re = class {
				static isNull(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.Null;
				}
				static isInt(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.Int;
				}
				static isFloat(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.Float;
				}
				static isBinary(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.Binary;
				}
				static isUtf8(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.Utf8;
				}
				static isBool(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.Bool;
				}
				static isDecimal(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.Decimal;
				}
				static isDate(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.Date;
				}
				static isTime(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.Time;
				}
				static isTimestamp(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.Timestamp;
				}
				static isInterval(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.Interval;
				}
				static isList(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.List;
				}
				static isStruct(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.Struct;
				}
				static isUnion(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.Union;
				}
				static isFixedSizeBinary(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.FixedSizeBinary;
				}
				static isFixedSizeList(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.FixedSizeList;
				}
				static isMap(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.Map;
				}
				static isDictionary(e) {
					return (e == null ? void 0 : e.typeId) === R.Type.Dictionary;
				}
				get typeId() {
					return R.Type.NONE;
				}
			};
		S.DataType = Re;
		Re[Symbol.toStringTag] = ((r) => (
			(r.children = null), (r.ArrayType = Array), (r[Symbol.toStringTag] = 'DataType')
		))(Re.prototype);
		var Ko = class extends Re {
			toString() {
				return 'Null';
			}
			get typeId() {
				return R.Type.Null;
			}
		};
		S.Null = Ko;
		Ko[Symbol.toStringTag] = ((r) => (r[Symbol.toStringTag] = 'Null'))(Ko.prototype);
		var Vt = class extends Re {
			constructor(e, t) {
				super();
				(this.isSigned = e), (this.bitWidth = t);
			}
			get typeId() {
				return R.Type.Int;
			}
			get ArrayType() {
				switch (this.bitWidth) {
					case 8:
						return this.isSigned ? Int8Array : Uint8Array;
					case 16:
						return this.isSigned ? Int16Array : Uint16Array;
					case 32:
						return this.isSigned ? Int32Array : Uint32Array;
					case 64:
						return this.isSigned ? Int32Array : Uint32Array;
				}
				throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
			}
			toString() {
				return `${this.isSigned ? 'I' : 'Ui'}nt${this.bitWidth}`;
			}
		};
		S.Int = Vt;
		Vt[Symbol.toStringTag] = ((r) => (
			(r.isSigned = null), (r.bitWidth = null), (r[Symbol.toStringTag] = 'Int')
		))(Vt.prototype);
		var vc = class extends Vt {
			constructor() {
				super(!0, 8);
			}
		};
		S.Int8 = vc;
		var Tc = class extends Vt {
			constructor() {
				super(!0, 16);
			}
		};
		S.Int16 = Tc;
		var wc = class extends Vt {
			constructor() {
				super(!0, 32);
			}
		};
		S.Int32 = wc;
		var Ic = class extends Vt {
			constructor() {
				super(!0, 64);
			}
		};
		S.Int64 = Ic;
		var Bc = class extends Vt {
			constructor() {
				super(!1, 8);
			}
		};
		S.Uint8 = Bc;
		var Sc = class extends Vt {
			constructor() {
				super(!1, 16);
			}
		};
		S.Uint16 = Sc;
		var Ac = class extends Vt {
			constructor() {
				super(!1, 32);
			}
		};
		S.Uint32 = Ac;
		var Dc = class extends Vt {
			constructor() {
				super(!1, 64);
			}
		};
		S.Uint64 = Dc;
		Object.defineProperty(vc.prototype, 'ArrayType', { value: Int8Array });
		Object.defineProperty(Tc.prototype, 'ArrayType', { value: Int16Array });
		Object.defineProperty(wc.prototype, 'ArrayType', { value: Int32Array });
		Object.defineProperty(Ic.prototype, 'ArrayType', { value: Int32Array });
		Object.defineProperty(Bc.prototype, 'ArrayType', { value: Uint8Array });
		Object.defineProperty(Sc.prototype, 'ArrayType', { value: Uint16Array });
		Object.defineProperty(Ac.prototype, 'ArrayType', { value: Uint32Array });
		Object.defineProperty(Dc.prototype, 'ArrayType', { value: Uint32Array });
		var Kn = class extends Re {
			constructor(e) {
				super();
				this.precision = e;
			}
			get typeId() {
				return R.Type.Float;
			}
			get ArrayType() {
				switch (this.precision) {
					case R.Precision.HALF:
						return Uint16Array;
					case R.Precision.SINGLE:
						return Float32Array;
					case R.Precision.DOUBLE:
						return Float64Array;
				}
				throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
			}
			toString() {
				return `Float${this.precision << 5 || 16}`;
			}
		};
		S.Float = Kn;
		Kn[Symbol.toStringTag] = ((r) => ((r.precision = null), (r[Symbol.toStringTag] = 'Float')))(
			Kn.prototype
		);
		var Oc = class extends Kn {
			constructor() {
				super(R.Precision.HALF);
			}
		};
		S.Float16 = Oc;
		var Fc = class extends Kn {
			constructor() {
				super(R.Precision.SINGLE);
			}
		};
		S.Float32 = Fc;
		var Ec = class extends Kn {
			constructor() {
				super(R.Precision.DOUBLE);
			}
		};
		S.Float64 = Ec;
		Object.defineProperty(Oc.prototype, 'ArrayType', { value: Uint16Array });
		Object.defineProperty(Fc.prototype, 'ArrayType', { value: Float32Array });
		Object.defineProperty(Ec.prototype, 'ArrayType', { value: Float64Array });
		var Zo = class extends Re {
			constructor() {
				super();
			}
			get typeId() {
				return R.Type.Binary;
			}
			toString() {
				return 'Binary';
			}
		};
		S.Binary = Zo;
		Zo[Symbol.toStringTag] = ((r) => (
			(r.ArrayType = Uint8Array), (r[Symbol.toStringTag] = 'Binary')
		))(Zo.prototype);
		var Qo = class extends Re {
			constructor() {
				super();
			}
			get typeId() {
				return R.Type.Utf8;
			}
			toString() {
				return 'Utf8';
			}
		};
		S.Utf8 = Qo;
		Qo[Symbol.toStringTag] = ((r) => (
			(r.ArrayType = Uint8Array), (r[Symbol.toStringTag] = 'Utf8')
		))(Qo.prototype);
		var Xo = class extends Re {
			constructor() {
				super();
			}
			get typeId() {
				return R.Type.Bool;
			}
			toString() {
				return 'Bool';
			}
		};
		S.Bool = Xo;
		Xo[Symbol.toStringTag] = ((r) => (
			(r.ArrayType = Uint8Array), (r[Symbol.toStringTag] = 'Bool')
		))(Xo.prototype);
		var ea = class extends Re {
			constructor(e, t) {
				super();
				(this.scale = e), (this.precision = t);
			}
			get typeId() {
				return R.Type.Decimal;
			}
			toString() {
				return `Decimal[${this.precision}e${this.scale > 0 ? '+' : ''}${this.scale}]`;
			}
		};
		S.Decimal = ea;
		ea[Symbol.toStringTag] = ((r) => (
			(r.scale = null),
			(r.precision = null),
			(r.ArrayType = Uint32Array),
			(r[Symbol.toStringTag] = 'Decimal')
		))(ea.prototype);
		var gi = class extends Re {
			constructor(e) {
				super();
				this.unit = e;
			}
			get typeId() {
				return R.Type.Date;
			}
			toString() {
				return `Date${(this.unit + 1) * 32}<${R.DateUnit[this.unit]}>`;
			}
		};
		S.Date_ = gi;
		gi[Symbol.toStringTag] = ((r) => (
			(r.unit = null), (r.ArrayType = Int32Array), (r[Symbol.toStringTag] = 'Date')
		))(gi.prototype);
		var xp = class extends gi {
			constructor() {
				super(R.DateUnit.DAY);
			}
		};
		S.DateDay = xp;
		var Cp = class extends gi {
			constructor() {
				super(R.DateUnit.MILLISECOND);
			}
		};
		S.DateMillisecond = Cp;
		var sn = class extends Re {
			constructor(e, t) {
				super();
				(this.unit = e), (this.bitWidth = t);
			}
			get typeId() {
				return R.Type.Time;
			}
			toString() {
				return `Time${this.bitWidth}<${R.TimeUnit[this.unit]}>`;
			}
		};
		S.Time = sn;
		sn[Symbol.toStringTag] = ((r) => (
			(r.unit = null),
			(r.bitWidth = null),
			(r.ArrayType = Int32Array),
			(r[Symbol.toStringTag] = 'Time')
		))(sn.prototype);
		var jp = class extends sn {
			constructor() {
				super(R.TimeUnit.SECOND, 32);
			}
		};
		S.TimeSecond = jp;
		var qp = class extends sn {
			constructor() {
				super(R.TimeUnit.MILLISECOND, 32);
			}
		};
		S.TimeMillisecond = qp;
		var Wp = class extends sn {
			constructor() {
				super(R.TimeUnit.MICROSECOND, 64);
			}
		};
		S.TimeMicrosecond = Wp;
		var zp = class extends sn {
			constructor() {
				super(R.TimeUnit.NANOSECOND, 64);
			}
		};
		S.TimeNanosecond = zp;
		var on = class extends Re {
			constructor(e, t) {
				super();
				(this.unit = e), (this.timezone = t);
			}
			get typeId() {
				return R.Type.Timestamp;
			}
			toString() {
				return `Timestamp<${R.TimeUnit[this.unit]}${this.timezone ? `, ${this.timezone}` : ''}>`;
			}
		};
		S.Timestamp = on;
		on[Symbol.toStringTag] = ((r) => (
			(r.unit = null),
			(r.timezone = null),
			(r.ArrayType = Int32Array),
			(r[Symbol.toStringTag] = 'Timestamp')
		))(on.prototype);
		var Hp = class extends on {
			constructor(e) {
				super(R.TimeUnit.SECOND, e);
			}
		};
		S.TimestampSecond = Hp;
		var Yp = class extends on {
			constructor(e) {
				super(R.TimeUnit.MILLISECOND, e);
			}
		};
		S.TimestampMillisecond = Yp;
		var Gp = class extends on {
			constructor(e) {
				super(R.TimeUnit.MICROSECOND, e);
			}
		};
		S.TimestampMicrosecond = Gp;
		var $p = class extends on {
			constructor(e) {
				super(R.TimeUnit.NANOSECOND, e);
			}
		};
		S.TimestampNanosecond = $p;
		var vi = class extends Re {
			constructor(e) {
				super();
				this.unit = e;
			}
			get typeId() {
				return R.Type.Interval;
			}
			toString() {
				return `Interval<${R.IntervalUnit[this.unit]}>`;
			}
		};
		S.Interval = vi;
		vi[Symbol.toStringTag] = ((r) => (
			(r.unit = null), (r.ArrayType = Int32Array), (r[Symbol.toStringTag] = 'Interval')
		))(vi.prototype);
		var Jp = class extends vi {
			constructor() {
				super(R.IntervalUnit.DAY_TIME);
			}
		};
		S.IntervalDayTime = Jp;
		var Kp = class extends vi {
			constructor() {
				super(R.IntervalUnit.YEAR_MONTH);
			}
		};
		S.IntervalYearMonth = Kp;
		var ta = class extends Re {
			constructor(e) {
				super();
				this.children = [e];
			}
			get typeId() {
				return R.Type.List;
			}
			toString() {
				return `List<${this.valueType}>`;
			}
			get valueType() {
				return this.children[0].type;
			}
			get valueField() {
				return this.children[0];
			}
			get ArrayType() {
				return this.valueType.ArrayType;
			}
		};
		S.List = ta;
		ta[Symbol.toStringTag] = ((r) => ((r.children = null), (r[Symbol.toStringTag] = 'List')))(
			ta.prototype
		);
		var ra = class extends Re {
			constructor(e) {
				super();
				this.children = e;
			}
			get typeId() {
				return R.Type.Struct;
			}
			toString() {
				return `Struct<{${this.children.map((e) => `${e.name}:${e.type}`).join(', ')}}>`;
			}
		};
		S.Struct = ra;
		ra[Symbol.toStringTag] = ((r) => ((r.children = null), (r[Symbol.toStringTag] = 'Struct')))(
			ra.prototype
		);
		var Ti = class extends Re {
			constructor(e, t, n) {
				super();
				(this.mode = e),
					(this.children = n),
					(this.typeIds = t = Int32Array.from(t)),
					(this.typeIdToChildIndex = t.reduce(
						(i, s, o) => ((i[s] = o) && i) || i,
						Object.create(null)
					));
			}
			get typeId() {
				return R.Type.Union;
			}
			toString() {
				return `${this[Symbol.toStringTag]}<${this.children.map((e) => `${e.type}`).join(' | ')}>`;
			}
		};
		S.Union = Ti;
		Ti[Symbol.toStringTag] = ((r) => (
			(r.mode = null),
			(r.typeIds = null),
			(r.children = null),
			(r.typeIdToChildIndex = null),
			(r.ArrayType = Int8Array),
			(r[Symbol.toStringTag] = 'Union')
		))(Ti.prototype);
		var Zp = class extends Ti {
			constructor(e, t) {
				super(R.UnionMode.Dense, e, t);
			}
		};
		S.DenseUnion = Zp;
		var Qp = class extends Ti {
			constructor(e, t) {
				super(R.UnionMode.Sparse, e, t);
			}
		};
		S.SparseUnion = Qp;
		var na = class extends Re {
			constructor(e) {
				super();
				this.byteWidth = e;
			}
			get typeId() {
				return R.Type.FixedSizeBinary;
			}
			toString() {
				return `FixedSizeBinary[${this.byteWidth}]`;
			}
		};
		S.FixedSizeBinary = na;
		na[Symbol.toStringTag] = ((r) => (
			(r.byteWidth = null), (r.ArrayType = Uint8Array), (r[Symbol.toStringTag] = 'FixedSizeBinary')
		))(na.prototype);
		var ia = class extends Re {
			constructor(e, t) {
				super();
				(this.listSize = e), (this.children = [t]);
			}
			get typeId() {
				return R.Type.FixedSizeList;
			}
			get valueType() {
				return this.children[0].type;
			}
			get valueField() {
				return this.children[0];
			}
			get ArrayType() {
				return this.valueType.ArrayType;
			}
			toString() {
				return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
			}
		};
		S.FixedSizeList = ia;
		ia[Symbol.toStringTag] = ((r) => (
			(r.children = null), (r.listSize = null), (r[Symbol.toStringTag] = 'FixedSizeList')
		))(ia.prototype);
		var sa = class extends Re {
			constructor(e, t = !1) {
				super();
				(this.children = [e]), (this.keysSorted = t);
			}
			get typeId() {
				return R.Type.Map;
			}
			get keyType() {
				return this.children[0].type.children[0].type;
			}
			get valueType() {
				return this.children[0].type.children[1].type;
			}
			toString() {
				return `Map<{${this.children[0].type.children
					.map((e) => `${e.name}:${e.type}`)
					.join(', ')}}>`;
			}
		};
		S.Map_ = sa;
		sa[Symbol.toStringTag] = ((r) => (
			(r.children = null), (r.keysSorted = null), (r[Symbol.toStringTag] = 'Map_')
		))(sa.prototype);
		var Hw = (
				(r) => () =>
					++r
			)(-1),
			oa = class extends Re {
				constructor(e, t, n, i) {
					super();
					(this.indices = t),
						(this.dictionary = e),
						(this.isOrdered = i || !1),
						(this.id = n == null ? Hw() : typeof n == 'number' ? n : n.low);
				}
				get typeId() {
					return R.Type.Dictionary;
				}
				get children() {
					return this.dictionary.children;
				}
				get valueType() {
					return this.dictionary;
				}
				get ArrayType() {
					return this.dictionary.ArrayType;
				}
				toString() {
					return `Dictionary<${this.indices}, ${this.dictionary}>`;
				}
			};
		S.Dictionary = oa;
		oa[Symbol.toStringTag] = ((r) => (
			(r.id = null),
			(r.indices = null),
			(r.isOrdered = null),
			(r.dictionary = null),
			(r[Symbol.toStringTag] = 'Dictionary')
		))(oa.prototype);
		function Yw(r) {
			let e = r;
			switch (r.typeId) {
				case R.Type.Decimal:
					return 4;
				case R.Type.Timestamp:
					return 2;
				case R.Type.Date:
					return 1 + e.unit;
				case R.Type.Interval:
					return 1 + e.unit;
				case R.Type.Int:
					return 1 + +(e.bitWidth > 32);
				case R.Type.Time:
					return 1 + +(e.bitWidth > 32);
				case R.Type.FixedSizeList:
					return e.listSize;
				case R.Type.FixedSizeBinary:
					return e.byteWidth;
				default:
					return 1;
			}
		}
		S.strideForType = Yw;
	});
	var rr = w((Zn) => {
		'use strict';
		Object.defineProperty(Zn, '__esModule', { value: !0 });
		Zn.Data = Zn.kUnknownNullCount = void 0;
		var Gw = _r(),
			$w = _r(),
			V = ve(),
			Jw = de(),
			oe = Je();
		Zn.kUnknownNullCount = -1;
		var G = class {
			constructor(e, t, n, i, s, o, l) {
				(this.type = e),
					(this.dictionary = l),
					(this.offset = Math.floor(Math.max(t || 0, 0))),
					(this.length = Math.floor(Math.max(n || 0, 0))),
					(this._nullCount = Math.floor(Math.max(i || 0, -1))),
					(this.childData = (o || []).map((u) => (u instanceof G ? u : u.data)));
				let h;
				s instanceof G
					? ((this.stride = s.stride),
					  (this.values = s.values),
					  (this.typeIds = s.typeIds),
					  (this.nullBitmap = s.nullBitmap),
					  (this.valueOffsets = s.valueOffsets))
					: ((this.stride = Jw.strideForType(e)),
					  s &&
							((h = s[0]) && (this.valueOffsets = h),
							(h = s[1]) && (this.values = h),
							(h = s[2]) && (this.nullBitmap = h),
							(h = s[3]) && (this.typeIds = h)));
			}
			get typeId() {
				return this.type.typeId;
			}
			get ArrayType() {
				return this.type.ArrayType;
			}
			get buffers() {
				return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds];
			}
			get byteLength() {
				let e = 0,
					{ valueOffsets: t, values: n, nullBitmap: i, typeIds: s } = this;
				return (
					t && (e += t.byteLength),
					n && (e += n.byteLength),
					i && (e += i.byteLength),
					s && (e += s.byteLength),
					this.childData.reduce((o, l) => o + l.byteLength, e)
				);
			}
			get nullCount() {
				let e = this._nullCount,
					t;
				return (
					e <= Zn.kUnknownNullCount &&
						(t = this.nullBitmap) &&
						(this._nullCount = e =
							this.length - $w.popcnt_bit_range(t, this.offset, this.offset + this.length)),
					e
				);
			}
			clone(
				e,
				t = this.offset,
				n = this.length,
				i = this._nullCount,
				s = this,
				o = this.childData
			) {
				return new G(e, t, n, i, s, o, this.dictionary);
			}
			slice(e, t) {
				let { stride: n, typeId: i, childData: s } = this,
					o = +(this._nullCount === 0) - 1,
					l = i === 16 ? n : 1,
					h = this._sliceBuffers(e, t, n, i);
				return this.clone(
					this.type,
					this.offset + e,
					t,
					o,
					h,
					!s.length || this.valueOffsets ? s : this._sliceChildren(s, l * e, l * t)
				);
			}
			_changeLengthAndBackfillNullBitmap(e) {
				if (this.typeId === V.Type.Null) return this.clone(this.type, 0, e, 0);
				let { length: t, nullCount: n } = this,
					i = new Uint8Array(((e + 63) & ~63) >> 3).fill(255, 0, t >> 3);
				(i[t >> 3] = (1 << (t - (t & ~7))) - 1),
					n > 0 && i.set(Gw.truncateBitmap(this.offset, t, this.nullBitmap), 0);
				let s = this.buffers;
				return (s[V.BufferType.VALIDITY] = i), this.clone(this.type, 0, e, n + (e - t), s);
			}
			_sliceBuffers(e, t, n, i) {
				let s,
					{ buffers: o } = this;
				return (
					(s = o[V.BufferType.TYPE]) && (o[V.BufferType.TYPE] = s.subarray(e, e + t)),
					((s = o[V.BufferType.OFFSET]) && (o[V.BufferType.OFFSET] = s.subarray(e, e + t + 1))) ||
						((s = o[V.BufferType.DATA]) &&
							(o[V.BufferType.DATA] = i === 6 ? s : s.subarray(n * e, n * (e + t)))),
					o
				);
			}
			_sliceChildren(e, t, n) {
				return e.map((i) => i.slice(t, n));
			}
			static new(e, t, n, i, s, o, l) {
				switch ((s instanceof G ? (s = s.buffers) : s || (s = []), e.typeId)) {
					case V.Type.Null:
						return G.Null(e, t, n);
					case V.Type.Int:
						return G.Int(e, t, n, i || 0, s[V.BufferType.VALIDITY], s[V.BufferType.DATA] || []);
					case V.Type.Dictionary:
						return G.Dictionary(
							e,
							t,
							n,
							i || 0,
							s[V.BufferType.VALIDITY],
							s[V.BufferType.DATA] || [],
							l
						);
					case V.Type.Float:
						return G.Float(e, t, n, i || 0, s[V.BufferType.VALIDITY], s[V.BufferType.DATA] || []);
					case V.Type.Bool:
						return G.Bool(e, t, n, i || 0, s[V.BufferType.VALIDITY], s[V.BufferType.DATA] || []);
					case V.Type.Decimal:
						return G.Decimal(e, t, n, i || 0, s[V.BufferType.VALIDITY], s[V.BufferType.DATA] || []);
					case V.Type.Date:
						return G.Date(e, t, n, i || 0, s[V.BufferType.VALIDITY], s[V.BufferType.DATA] || []);
					case V.Type.Time:
						return G.Time(e, t, n, i || 0, s[V.BufferType.VALIDITY], s[V.BufferType.DATA] || []);
					case V.Type.Timestamp:
						return G.Timestamp(
							e,
							t,
							n,
							i || 0,
							s[V.BufferType.VALIDITY],
							s[V.BufferType.DATA] || []
						);
					case V.Type.Interval:
						return G.Interval(
							e,
							t,
							n,
							i || 0,
							s[V.BufferType.VALIDITY],
							s[V.BufferType.DATA] || []
						);
					case V.Type.FixedSizeBinary:
						return G.FixedSizeBinary(
							e,
							t,
							n,
							i || 0,
							s[V.BufferType.VALIDITY],
							s[V.BufferType.DATA] || []
						);
					case V.Type.Binary:
						return G.Binary(
							e,
							t,
							n,
							i || 0,
							s[V.BufferType.VALIDITY],
							s[V.BufferType.OFFSET] || [],
							s[V.BufferType.DATA] || []
						);
					case V.Type.Utf8:
						return G.Utf8(
							e,
							t,
							n,
							i || 0,
							s[V.BufferType.VALIDITY],
							s[V.BufferType.OFFSET] || [],
							s[V.BufferType.DATA] || []
						);
					case V.Type.List:
						return G.List(
							e,
							t,
							n,
							i || 0,
							s[V.BufferType.VALIDITY],
							s[V.BufferType.OFFSET] || [],
							(o || [])[0]
						);
					case V.Type.FixedSizeList:
						return G.FixedSizeList(e, t, n, i || 0, s[V.BufferType.VALIDITY], (o || [])[0]);
					case V.Type.Struct:
						return G.Struct(e, t, n, i || 0, s[V.BufferType.VALIDITY], o || []);
					case V.Type.Map:
						return G.Map(
							e,
							t,
							n,
							i || 0,
							s[V.BufferType.VALIDITY],
							s[V.BufferType.OFFSET] || [],
							(o || [])[0]
						);
					case V.Type.Union:
						return G.Union(
							e,
							t,
							n,
							i || 0,
							s[V.BufferType.VALIDITY],
							s[V.BufferType.TYPE] || [],
							s[V.BufferType.OFFSET] || o,
							o
						);
				}
				throw new Error(`Unrecognized typeId ${e.typeId}`);
			}
			static Null(e, t, n) {
				return new G(e, t, n, 0);
			}
			static Int(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					oe.toArrayBufferView(e.ArrayType, o),
					oe.toUint8Array(s)
				]);
			}
			static Dictionary(e, t, n, i, s, o, l) {
				return new G(
					e,
					t,
					n,
					i,
					[void 0, oe.toArrayBufferView(e.indices.ArrayType, o), oe.toUint8Array(s)],
					[],
					l
				);
			}
			static Float(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					oe.toArrayBufferView(e.ArrayType, o),
					oe.toUint8Array(s)
				]);
			}
			static Bool(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					oe.toArrayBufferView(e.ArrayType, o),
					oe.toUint8Array(s)
				]);
			}
			static Decimal(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					oe.toArrayBufferView(e.ArrayType, o),
					oe.toUint8Array(s)
				]);
			}
			static Date(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					oe.toArrayBufferView(e.ArrayType, o),
					oe.toUint8Array(s)
				]);
			}
			static Time(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					oe.toArrayBufferView(e.ArrayType, o),
					oe.toUint8Array(s)
				]);
			}
			static Timestamp(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					oe.toArrayBufferView(e.ArrayType, o),
					oe.toUint8Array(s)
				]);
			}
			static Interval(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					oe.toArrayBufferView(e.ArrayType, o),
					oe.toUint8Array(s)
				]);
			}
			static FixedSizeBinary(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					oe.toArrayBufferView(e.ArrayType, o),
					oe.toUint8Array(s)
				]);
			}
			static Binary(e, t, n, i, s, o, l) {
				return new G(e, t, n, i, [oe.toInt32Array(o), oe.toUint8Array(l), oe.toUint8Array(s)]);
			}
			static Utf8(e, t, n, i, s, o, l) {
				return new G(e, t, n, i, [oe.toInt32Array(o), oe.toUint8Array(l), oe.toUint8Array(s)]);
			}
			static List(e, t, n, i, s, o, l) {
				return new G(e, t, n, i, [oe.toInt32Array(o), void 0, oe.toUint8Array(s)], l ? [l] : []);
			}
			static FixedSizeList(e, t, n, i, s, o) {
				return new G(e, t, n, i, [void 0, void 0, oe.toUint8Array(s)], o ? [o] : []);
			}
			static Struct(e, t, n, i, s, o) {
				return new G(e, t, n, i, [void 0, void 0, oe.toUint8Array(s)], o);
			}
			static Map(e, t, n, i, s, o, l) {
				return new G(e, t, n, i, [oe.toInt32Array(o), void 0, oe.toUint8Array(s)], l ? [l] : []);
			}
			static Union(e, t, n, i, s, o, l, h) {
				let u = [void 0, void 0, oe.toUint8Array(s), oe.toArrayBufferView(e.ArrayType, o)];
				return e.mode === V.UnionMode.Sparse
					? new G(e, t, n, i, u, l)
					: ((u[V.BufferType.OFFSET] = oe.toInt32Array(l)), new G(e, t, n, i, u, h));
			}
		};
		Zn.Data = G;
		G.prototype.childData = Object.freeze([]);
	});
	var Mc = w((aa) => {
		'use strict';
		Object.defineProperty(aa, '__esModule', { value: !0 });
		aa.valueToString = void 0;
		var Kw = void 0;
		function Zw(r) {
			if (r === null) return 'null';
			if (r === Kw) return 'undefined';
			switch (typeof r) {
				case 'number':
					return `${r}`;
				case 'bigint':
					return `${r}`;
				case 'string':
					return `"${r}"`;
			}
			return typeof r[Symbol.toPrimitive] == 'function'
				? r[Symbol.toPrimitive]('string')
				: ArrayBuffer.isView(r)
				? `[${r}]`
				: JSON.stringify(r);
		}
		aa.valueToString = Zw;
	});
	var Xp = w((ua) => {
		'use strict';
		Object.defineProperty(ua, '__esModule', { value: !0 });
		ua.createIsValidFunction = void 0;
		var Rc = Mc(),
			Qw = ut();
		function Xw(r) {
			if (!r || r.length <= 0)
				return function (i) {
					return !0;
				};
			let e = '',
				t = r.filter((n) => n === n);
			return (
				t.length > 0 &&
					(e = `
    switch (x) {${t
			.map(
				(n) => `
        case ${eI(n)}:`
			)
			.join('')}
            return false;
    }`),
				r.length !== t.length &&
					(e = `if (x !== x) return false;
${e}`),
				new Function(
					'x',
					`${e}
return true;`
				)
			);
		}
		ua.createIsValidFunction = Xw;
		function eI(r) {
			return typeof r != 'bigint'
				? Rc.valueToString(r)
				: Qw.BigIntAvailable
				? `${Rc.valueToString(r)}n`
				: `"${Rc.valueToString(r)}"`;
		}
	});
	var an = w((kt) => {
		'use strict';
		Object.defineProperty(kt, '__esModule', { value: !0 });
		kt.WideBufferBuilder =
			kt.OffsetsBufferBuilder =
			kt.BitmapBufferBuilder =
			kt.DataBufferBuilder =
			kt.BufferBuilder =
				void 0;
		var e_ = Je(),
			Uc = ut(),
			Vc = (r, e) => ((r * e + 63) & ~63 || 64) / e,
			tI = (r, e = 0) => (r.length >= e ? r.subarray(0, e) : e_.memcpy(new r.constructor(e), r, 0)),
			Rs = class {
				constructor(e, t = 1) {
					(this.buffer = e),
						(this.stride = t),
						(this.BYTES_PER_ELEMENT = e.BYTES_PER_ELEMENT),
						(this.ArrayType = e.constructor),
						this._resize((this.length = (e.length / t) | 0));
				}
				get byteLength() {
					return (this.length * this.stride * this.BYTES_PER_ELEMENT) | 0;
				}
				get reservedLength() {
					return this.buffer.length / this.stride;
				}
				get reservedByteLength() {
					return this.buffer.byteLength;
				}
				set(e, t) {
					return this;
				}
				append(e) {
					return this.set(this.length, e);
				}
				reserve(e) {
					if (e > 0) {
						this.length += e;
						let t = this.stride,
							n = this.length * t,
							i = this.buffer.length;
						n >= i &&
							this._resize(
								i === 0 ? Vc(n * 1, this.BYTES_PER_ELEMENT) : Vc(n * 2, this.BYTES_PER_ELEMENT)
							);
					}
					return this;
				}
				flush(e = this.length) {
					e = Vc(e * this.stride, this.BYTES_PER_ELEMENT);
					let t = tI(this.buffer, e);
					return this.clear(), t;
				}
				clear() {
					return (this.length = 0), this._resize(0), this;
				}
				_resize(e) {
					return (this.buffer = e_.memcpy(new this.ArrayType(e), this.buffer));
				}
			};
		kt.BufferBuilder = Rs;
		Rs.prototype.offset = 0;
		var ca = class extends Rs {
			last() {
				return this.get(this.length - 1);
			}
			get(e) {
				return this.buffer[e];
			}
			set(e, t) {
				return this.reserve(e - this.length + 1), (this.buffer[e * this.stride] = t), this;
			}
		};
		kt.DataBufferBuilder = ca;
		var t_ = class extends ca {
			constructor(e = new Uint8Array(0)) {
				super(e, 1 / 8);
				this.numValid = 0;
			}
			get numInvalid() {
				return this.length - this.numValid;
			}
			get(e) {
				return (this.buffer[e >> 3] >> e % 8) & 1;
			}
			set(e, t) {
				let { buffer: n } = this.reserve(e - this.length + 1),
					i = e >> 3,
					s = e % 8,
					o = (n[i] >> s) & 1;
				return (
					t
						? o === 0 && ((n[i] |= 1 << s), ++this.numValid)
						: o === 1 && ((n[i] &= ~(1 << s)), --this.numValid),
					this
				);
			}
			clear() {
				return (this.numValid = 0), super.clear();
			}
		};
		kt.BitmapBufferBuilder = t_;
		var r_ = class extends ca {
			constructor(e = new Int32Array(1)) {
				super(e, 1);
			}
			append(e) {
				return this.set(this.length - 1, e);
			}
			set(e, t) {
				let n = this.length - 1,
					i = this.reserve(e - n + 1).buffer;
				return n < e++ && i.fill(i[n], n, e), (i[e] = i[e - 1] + t), this;
			}
			flush(e = this.length - 1) {
				return e > this.length && this.set(e - 1, 0), super.flush(e + 1);
			}
		};
		kt.OffsetsBufferBuilder = r_;
		var n_ = class extends Rs {
			get ArrayType64() {
				return (
					this._ArrayType64 ||
					(this._ArrayType64 =
						this.buffer instanceof Int32Array ? Uc.BigInt64Array : Uc.BigUint64Array)
				);
			}
			set(e, t) {
				switch ((this.reserve(e - this.length + 1), typeof t)) {
					case 'bigint':
						this.buffer64[e] = t;
						break;
					case 'number':
						this.buffer[e * this.stride] = t;
						break;
					default:
						this.buffer.set(t, e * this.stride);
				}
				return this;
			}
			_resize(e) {
				let t = super._resize(e),
					n = t.byteLength / (this.BYTES_PER_ELEMENT * this.stride);
				return (
					Uc.BigIntAvailable && (this.buffer64 = new this.ArrayType64(t.buffer, t.byteOffset, n)), t
				);
			}
		};
		kt.WideBufferBuilder = n_;
	});
	var Ue = w((un) => {
		'use strict';
		Object.defineProperty(un, '__esModule', { value: !0 });
		un.VariableWidthBuilder = un.FixedWidthBuilder = un.Builder = void 0;
		var wi = at(),
			rI = Ce(),
			Ii = ve(),
			nI = rr(),
			iI = Xp(),
			kc = an(),
			sI = de(),
			Pt = class {
				constructor({ type: e, nullValues: t }) {
					(this.length = 0),
						(this.finished = !1),
						(this.type = e),
						(this.children = []),
						(this.nullValues = t),
						(this.stride = sI.strideForType(e)),
						(this._nulls = new kc.BitmapBufferBuilder()),
						t && t.length > 0 && (this._isValid = iI.createIsValidFunction(t));
				}
				static new(e) {}
				static throughNode(e) {
					throw new Error('"throughNode" not available in this environment');
				}
				static throughDOM(e) {
					throw new Error('"throughDOM" not available in this environment');
				}
				static throughIterable(e) {
					return oI(e);
				}
				static throughAsyncIterable(e) {
					return aI(e);
				}
				toVector() {
					return rI.Vector.new(this.flush());
				}
				get ArrayType() {
					return this.type.ArrayType;
				}
				get nullCount() {
					return this._nulls.numInvalid;
				}
				get numChildren() {
					return this.children.length;
				}
				get byteLength() {
					let e = 0;
					return (
						this._offsets && (e += this._offsets.byteLength),
						this._values && (e += this._values.byteLength),
						this._nulls && (e += this._nulls.byteLength),
						this._typeIds && (e += this._typeIds.byteLength),
						this.children.reduce((t, n) => t + n.byteLength, e)
					);
				}
				get reservedLength() {
					return this._nulls.reservedLength;
				}
				get reservedByteLength() {
					let e = 0;
					return (
						this._offsets && (e += this._offsets.reservedByteLength),
						this._values && (e += this._values.reservedByteLength),
						this._nulls && (e += this._nulls.reservedByteLength),
						this._typeIds && (e += this._typeIds.reservedByteLength),
						this.children.reduce((t, n) => t + n.reservedByteLength, e)
					);
				}
				get valueOffsets() {
					return this._offsets ? this._offsets.buffer : null;
				}
				get values() {
					return this._values ? this._values.buffer : null;
				}
				get nullBitmap() {
					return this._nulls ? this._nulls.buffer : null;
				}
				get typeIds() {
					return this._typeIds ? this._typeIds.buffer : null;
				}
				append(e) {
					return this.set(this.length, e);
				}
				isValid(e) {
					return this._isValid(e);
				}
				set(e, t) {
					return this.setValid(e, this.isValid(t)) && this.setValue(e, t), this;
				}
				setValue(e, t) {
					this._setValue(this, e, t);
				}
				setValid(e, t) {
					return (this.length = this._nulls.set(e, +t).length), t;
				}
				addChild(e, t = `${this.numChildren}`) {
					throw new Error(`Cannot append children to non-nested type "${this.type}"`);
				}
				getChildAt(e) {
					return this.children[e] || null;
				}
				flush() {
					let e = [],
						t = this._values,
						n = this._offsets,
						i = this._typeIds,
						{ length: s, nullCount: o } = this;
					i
						? ((e[Ii.BufferType.TYPE] = i.flush(s)), n && (e[Ii.BufferType.OFFSET] = n.flush(s)))
						: n
						? (t && (e[Ii.BufferType.DATA] = t.flush(n.last())),
						  (e[Ii.BufferType.OFFSET] = n.flush(s)))
						: t && (e[Ii.BufferType.DATA] = t.flush(s)),
						o > 0 && (e[Ii.BufferType.VALIDITY] = this._nulls.flush(s));
					let l = nI.Data.new(
						this.type,
						0,
						s,
						o,
						e,
						this.children.map((h) => h.flush())
					);
					return this.clear(), l;
				}
				finish() {
					return (this.finished = !0), this.children.forEach((e) => e.finish()), this;
				}
				clear() {
					return (
						(this.length = 0),
						this._offsets && this._offsets.clear(),
						this._values && this._values.clear(),
						this._nulls && this._nulls.clear(),
						this._typeIds && this._typeIds.clear(),
						this.children.forEach((e) => e.clear()),
						this
					);
				}
			};
		un.Builder = Pt;
		Pt.prototype.length = 1;
		Pt.prototype.stride = 1;
		Pt.prototype.children = null;
		Pt.prototype.finished = !1;
		Pt.prototype.nullValues = null;
		Pt.prototype._isValid = () => !0;
		var i_ = class extends Pt {
			constructor(e) {
				super(e);
				this._values = new kc.DataBufferBuilder(new this.ArrayType(0), this.stride);
			}
			setValue(e, t) {
				let n = this._values;
				return n.reserve(e - n.length + 1), super.setValue(e, t);
			}
		};
		un.FixedWidthBuilder = i_;
		var s_ = class extends Pt {
			constructor(e) {
				super(e);
				(this._pendingLength = 0), (this._offsets = new kc.OffsetsBufferBuilder());
			}
			setValue(e, t) {
				let n = this._pending || (this._pending = new Map()),
					i = n.get(e);
				i && (this._pendingLength -= i.length), (this._pendingLength += t.length), n.set(e, t);
			}
			setValid(e, t) {
				return super.setValid(e, t)
					? !0
					: ((this._pending || (this._pending = new Map())).set(e, void 0), !1);
			}
			clear() {
				return (this._pendingLength = 0), (this._pending = void 0), super.clear();
			}
			flush() {
				return this._flush(), super.flush();
			}
			finish() {
				return this._flush(), super.finish();
			}
			_flush() {
				let e = this._pending,
					t = this._pendingLength;
				return (
					(this._pendingLength = 0),
					(this._pending = void 0),
					e && e.size > 0 && this._flushPending(e, t),
					this
				);
			}
		};
		un.VariableWidthBuilder = s_;
		function oI(r) {
			let { ['queueingStrategy']: e = 'count' } = r,
				{ ['highWaterMark']: t = e !== 'bytes' ? 1e3 : Math.pow(2, 14) } = r,
				n = e !== 'bytes' ? 'length' : 'byteLength';
			return function* (i) {
				let s = 0,
					o = Pt.new(r);
				for (let l of i) o.append(l)[n] >= t && ++s && (yield o.toVector());
				(o.finish().length > 0 || s === 0) && (yield o.toVector());
			};
		}
		function aI(r) {
			let { ['queueingStrategy']: e = 'count' } = r,
				{ ['highWaterMark']: t = e !== 'bytes' ? 1e3 : Math.pow(2, 14) } = r,
				n = e !== 'bytes' ? 'length' : 'byteLength';
			return function (i) {
				return wi.__asyncGenerator(this, arguments, function* () {
					var s, o;
					let l = 0,
						h = Pt.new(r);
					try {
						for (var u = wi.__asyncValues(i), m; (m = yield wi.__await(u.next())), !m.done; ) {
							let E = m.value;
							h.append(E)[n] >= t && ++l && (yield yield wi.__await(h.toVector()));
						}
					} catch (E) {
						s = { error: E };
					} finally {
						try {
							m && !m.done && (o = u.return) && (yield wi.__await(o.call(u)));
						} finally {
							if (s) throw s.error;
						}
					}
					(h.finish().length > 0 || l === 0) && (yield yield wi.__await(h.toVector()));
				});
			};
		}
	});
	var Pc = w((la) => {
		'use strict';
		Object.defineProperty(la, '__esModule', { value: !0 });
		la.BoolBuilder = void 0;
		var uI = an(),
			cI = Ue(),
			o_ = class extends cI.Builder {
				constructor(e) {
					super(e);
					this._values = new uI.BitmapBufferBuilder();
				}
				setValue(e, t) {
					this._values.set(e, +t);
				}
			};
		la.BoolBuilder = o_;
	});
	var Lc = w((da) => {
		'use strict';
		Object.defineProperty(da, '__esModule', { value: !0 });
		da.NullBuilder = void 0;
		var lI = Ue(),
			a_ = class extends lI.Builder {
				setValue(e, t) {}
				setValid(e, t) {
					return (this.length = Math.max(e + 1, this.length)), t;
				}
			};
		da.NullBuilder = a_;
	});
	var Nc = w((cn) => {
		'use strict';
		Object.defineProperty(cn, '__esModule', { value: !0 });
		cn.DateMillisecondBuilder = cn.DateDayBuilder = cn.DateBuilder = void 0;
		var dI = Ue(),
			fa = class extends dI.FixedWidthBuilder {};
		cn.DateBuilder = fa;
		var u_ = class extends fa {};
		cn.DateDayBuilder = u_;
		var c_ = class extends fa {};
		cn.DateMillisecondBuilder = c_;
	});
	var xc = w((ha) => {
		'use strict';
		Object.defineProperty(ha, '__esModule', { value: !0 });
		ha.DecimalBuilder = void 0;
		var fI = Ue(),
			l_ = class extends fI.FixedWidthBuilder {};
		ha.DecimalBuilder = l_;
	});
	var jc = w((pa) => {
		'use strict';
		Object.defineProperty(pa, '__esModule', { value: !0 });
		pa.DictionaryBuilder = void 0;
		var hI = de(),
			Cc = Ue(),
			d_ = class extends Cc.Builder {
				constructor({ type: e, nullValues: t, dictionaryHashFunction: n }) {
					super({ type: new hI.Dictionary(e.dictionary, e.indices, e.id, e.isOrdered) });
					(this._nulls = null),
						(this._dictionaryOffset = 0),
						(this._keysToIndices = Object.create(null)),
						(this.indices = Cc.Builder.new({ type: this.type.indices, nullValues: t })),
						(this.dictionary = Cc.Builder.new({ type: this.type.dictionary, nullValues: null })),
						typeof n == 'function' && (this.valueToKey = n);
				}
				get values() {
					return this.indices.values;
				}
				get nullCount() {
					return this.indices.nullCount;
				}
				get nullBitmap() {
					return this.indices.nullBitmap;
				}
				get byteLength() {
					return this.indices.byteLength + this.dictionary.byteLength;
				}
				get reservedLength() {
					return this.indices.reservedLength + this.dictionary.reservedLength;
				}
				get reservedByteLength() {
					return this.indices.reservedByteLength + this.dictionary.reservedByteLength;
				}
				isValid(e) {
					return this.indices.isValid(e);
				}
				setValid(e, t) {
					let n = this.indices;
					return (t = n.setValid(e, t)), (this.length = n.length), t;
				}
				setValue(e, t) {
					let n = this._keysToIndices,
						i = this.valueToKey(t),
						s = n[i];
					return (
						s === void 0 &&
							(n[i] = s = this._dictionaryOffset + this.dictionary.append(t).length - 1),
						this.indices.setValue(e, s)
					);
				}
				flush() {
					let e = this.type,
						t = this._dictionary,
						n = this.dictionary.toVector(),
						i = this.indices.flush().clone(e);
					return (
						(i.dictionary = t ? t.concat(n) : n),
						this.finished || (this._dictionaryOffset += n.length),
						(this._dictionary = i.dictionary),
						this.clear(),
						i
					);
				}
				finish() {
					return (
						this.indices.finish(),
						this.dictionary.finish(),
						(this._dictionaryOffset = 0),
						(this._keysToIndices = Object.create(null)),
						super.finish()
					);
				}
				clear() {
					return this.indices.clear(), this.dictionary.clear(), super.clear();
				}
				valueToKey(e) {
					return typeof e == 'string' ? e : `${e}`;
				}
			};
		pa.DictionaryBuilder = d_;
	});
	var qc = w((_a) => {
		'use strict';
		Object.defineProperty(_a, '__esModule', { value: !0 });
		_a.FixedSizeBinaryBuilder = void 0;
		var pI = Ue(),
			f_ = class extends pI.FixedWidthBuilder {};
		_a.FixedSizeBinaryBuilder = f_;
	});
	var Us = w((Si) => {
		'use strict';
		Object.defineProperty(Si, '__esModule', { value: !0 });
		Si.float64ToUint16 = Si.uint16ToFloat64 = void 0;
		var h_ = new Float64Array(1),
			Bi = new Uint32Array(h_.buffer);
		function _I(r) {
			let e = (r & 31744) >> 10,
				t = (r & 1023) / 1024,
				n = Math.pow(-1, (r & 32768) >> 15);
			switch (e) {
				case 31:
					return n * (t ? NaN : 1 / 0);
				case 0:
					return n * (t ? 6103515625e-14 * t : 0);
			}
			return n * Math.pow(2, e - 15) * (1 + t);
		}
		Si.uint16ToFloat64 = _I;
		function yI(r) {
			if (r !== r) return 32256;
			h_[0] = r;
			let e = ((Bi[1] & 2147483648) >> 16) & 65535,
				t = Bi[1] & 2146435072,
				n = 0;
			return (
				t >= 1089470464
					? Bi[0] > 0
						? (t = 31744)
						: ((t = (t & 2080374784) >> 16), (n = (Bi[1] & 1048575) >> 10))
					: t <= 1056964608
					? ((n = 1048576 + (Bi[1] & 1048575)),
					  (n = (1048576 + (n << ((t >> 20) - 998))) >> 21),
					  (t = 0))
					: ((t = (t - 1056964608) >> 10), (n = ((Bi[1] & 1048575) + 512) >> 10)),
				e | t | (n & 65535)
			);
		}
		Si.float64ToUint16 = yI;
	});
	var Wc = w((yr) => {
		'use strict';
		Object.defineProperty(yr, '__esModule', { value: !0 });
		yr.Float64Builder = yr.Float32Builder = yr.Float16Builder = yr.FloatBuilder = void 0;
		var mI = Us(),
			bI = Ue(),
			Vs = class extends bI.FixedWidthBuilder {};
		yr.FloatBuilder = Vs;
		var p_ = class extends Vs {
			setValue(e, t) {
				this._values.set(e, mI.float64ToUint16(t));
			}
		};
		yr.Float16Builder = p_;
		var __ = class extends Vs {
			setValue(e, t) {
				this._values.set(e, t);
			}
		};
		yr.Float32Builder = __;
		var y_ = class extends Vs {
			setValue(e, t) {
				this._values.set(e, t);
			}
		};
		yr.Float64Builder = y_;
	});
	var Ls = w((Ke) => {
		'use strict';
		Object.defineProperty(Ke, '__esModule', { value: !0 });
		Ke.BN = Ke.bignumToBigInt = Ke.bignumToString = Ke.isArrowBigNumSymbol = void 0;
		var gI = Je(),
			ks = ut();
		Ke.isArrowBigNumSymbol = Symbol.for('isArrowBigNum');
		function nr(r, ...e) {
			return e.length === 0
				? Object.setPrototypeOf(
						gI.toArrayBufferView(this.TypedArray, r),
						this.constructor.prototype
				  )
				: Object.setPrototypeOf(new this.TypedArray(r, ...e), this.constructor.prototype);
		}
		nr.prototype[Ke.isArrowBigNumSymbol] = !0;
		nr.prototype.toJSON = function () {
			return `"${Ke.bignumToString(this)}"`;
		};
		nr.prototype.valueOf = function () {
			return m_(this);
		};
		nr.prototype.toString = function () {
			return Ke.bignumToString(this);
		};
		nr.prototype[Symbol.toPrimitive] = function (r = 'default') {
			switch (r) {
				case 'number':
					return m_(this);
				case 'string':
					return Ke.bignumToString(this);
				case 'default':
					return Ke.bignumToBigInt(this);
			}
			return Ke.bignumToString(this);
		};
		function Ai(...r) {
			return nr.apply(this, r);
		}
		function Di(...r) {
			return nr.apply(this, r);
		}
		function Ps(...r) {
			return nr.apply(this, r);
		}
		Object.setPrototypeOf(Ai.prototype, Object.create(Int32Array.prototype));
		Object.setPrototypeOf(Di.prototype, Object.create(Uint32Array.prototype));
		Object.setPrototypeOf(Ps.prototype, Object.create(Uint32Array.prototype));
		Object.assign(Ai.prototype, nr.prototype, {
			constructor: Ai,
			signed: !0,
			TypedArray: Int32Array,
			BigIntArray: ks.BigInt64Array
		});
		Object.assign(Di.prototype, nr.prototype, {
			constructor: Di,
			signed: !1,
			TypedArray: Uint32Array,
			BigIntArray: ks.BigUint64Array
		});
		Object.assign(Ps.prototype, nr.prototype, {
			constructor: Ps,
			signed: !0,
			TypedArray: Uint32Array,
			BigIntArray: ks.BigUint64Array
		});
		function m_(r) {
			let { buffer: e, byteOffset: t, length: n, signed: i } = r,
				s = new Int32Array(e, t, n),
				o = 0,
				l = 0,
				h = s.length,
				u,
				m;
			for (; l < h; )
				(m = s[l++]), (u = s[l++]), i || (u = u >>> 0), (o += (m >>> 0) + u * Math.pow(l, 32));
			return o;
		}
		ks.BigIntAvailable
			? ((Ke.bignumToBigInt = (r) =>
					r.byteLength === 8 ? new r.BigIntArray(r.buffer, r.byteOffset, 1)[0] : zc(r)),
			  (Ke.bignumToString = (r) =>
					r.byteLength === 8 ? `${new r.BigIntArray(r.buffer, r.byteOffset, 1)[0]}` : zc(r)))
			: ((Ke.bignumToString = zc), (Ke.bignumToBigInt = Ke.bignumToString));
		function zc(r) {
			let e = '',
				t = new Uint32Array(2),
				n = new Uint16Array(r.buffer, r.byteOffset, r.byteLength / 2),
				i = new Uint32Array((n = new Uint16Array(n).reverse()).buffer),
				s = -1,
				o = n.length - 1;
			do {
				for (t[0] = n[(s = 0)]; s < o; )
					(n[s++] = t[1] = t[0] / 10), (t[0] = ((t[0] - t[1] * 10) << 16) + n[s]);
				(n[s] = t[1] = t[0] / 10), (t[0] = t[0] - t[1] * 10), (e = `${t[0]}${e}`);
			} while (i[0] || i[1] || i[2] || i[3]);
			return e || '0';
		}
		var ya = class {
			static new(e, t) {
				switch (t) {
					case !0:
						return new Ai(e);
					case !1:
						return new Di(e);
				}
				switch (e.constructor) {
					case Int8Array:
					case Int16Array:
					case Int32Array:
					case ks.BigInt64Array:
						return new Ai(e);
				}
				return e.byteLength === 16 ? new Ps(e) : new Di(e);
			}
			static signed(e) {
				return new Ai(e);
			}
			static unsigned(e) {
				return new Di(e);
			}
			static decimal(e) {
				return new Ps(e);
			}
			constructor(e, t) {
				return ya.new(e, t);
			}
		};
		Ke.BN = ya;
	});
	var Hc = w((He) => {
		'use strict';
		Object.defineProperty(He, '__esModule', { value: !0 });
		He.Uint64Builder =
			He.Uint32Builder =
			He.Uint16Builder =
			He.Uint8Builder =
			He.Int64Builder =
			He.Int32Builder =
			He.Int16Builder =
			He.Int8Builder =
			He.IntBuilder =
				void 0;
		var vI = Ls(),
			b_ = an(),
			TI = ut(),
			wI = Ue(),
			mr = class extends wI.FixedWidthBuilder {
				setValue(e, t) {
					this._values.set(e, t);
				}
			};
		He.IntBuilder = mr;
		var g_ = class extends mr {};
		He.Int8Builder = g_;
		var v_ = class extends mr {};
		He.Int16Builder = v_;
		var T_ = class extends mr {};
		He.Int32Builder = T_;
		var w_ = class extends mr {
			constructor(e) {
				e.nullValues && (e.nullValues = e.nullValues.map(ma));
				super(e);
				this._values = new b_.WideBufferBuilder(new Int32Array(0), 2);
			}
			get values64() {
				return this._values.buffer64;
			}
			isValid(e) {
				return super.isValid(ma(e));
			}
		};
		He.Int64Builder = w_;
		var I_ = class extends mr {};
		He.Uint8Builder = I_;
		var B_ = class extends mr {};
		He.Uint16Builder = B_;
		var S_ = class extends mr {};
		He.Uint32Builder = S_;
		var A_ = class extends mr {
			constructor(e) {
				e.nullValues && (e.nullValues = e.nullValues.map(ma));
				super(e);
				this._values = new b_.WideBufferBuilder(new Uint32Array(0), 2);
			}
			get values64() {
				return this._values.buffer64;
			}
			isValid(e) {
				return super.isValid(ma(e));
			}
		};
		He.Uint64Builder = A_;
		var ma = ((r) => (e) => (
			ArrayBuffer.isView(e) &&
				((r.buffer = e.buffer),
				(r.byteOffset = e.byteOffset),
				(r.byteLength = e.byteLength),
				(e = vI.bignumToBigInt(r)),
				(r.buffer = null)),
			e
		))({ BigIntArray: TI.BigInt64Array });
	});
	var Yc = w((Lt) => {
		'use strict';
		Object.defineProperty(Lt, '__esModule', { value: !0 });
		Lt.TimeNanosecondBuilder =
			Lt.TimeMicrosecondBuilder =
			Lt.TimeMillisecondBuilder =
			Lt.TimeSecondBuilder =
			Lt.TimeBuilder =
				void 0;
		var II = Ue(),
			Oi = class extends II.FixedWidthBuilder {};
		Lt.TimeBuilder = Oi;
		var D_ = class extends Oi {};
		Lt.TimeSecondBuilder = D_;
		var O_ = class extends Oi {};
		Lt.TimeMillisecondBuilder = O_;
		var F_ = class extends Oi {};
		Lt.TimeMicrosecondBuilder = F_;
		var E_ = class extends Oi {};
		Lt.TimeNanosecondBuilder = E_;
	});
	var Gc = w((Nt) => {
		'use strict';
		Object.defineProperty(Nt, '__esModule', { value: !0 });
		Nt.TimestampNanosecondBuilder =
			Nt.TimestampMicrosecondBuilder =
			Nt.TimestampMillisecondBuilder =
			Nt.TimestampSecondBuilder =
			Nt.TimestampBuilder =
				void 0;
		var BI = Ue(),
			Fi = class extends BI.FixedWidthBuilder {};
		Nt.TimestampBuilder = Fi;
		var M_ = class extends Fi {};
		Nt.TimestampSecondBuilder = M_;
		var R_ = class extends Fi {};
		Nt.TimestampMillisecondBuilder = R_;
		var U_ = class extends Fi {};
		Nt.TimestampMicrosecondBuilder = U_;
		var V_ = class extends Fi {};
		Nt.TimestampNanosecondBuilder = V_;
	});
	var $c = w((ln) => {
		'use strict';
		Object.defineProperty(ln, '__esModule', { value: !0 });
		ln.IntervalYearMonthBuilder = ln.IntervalDayTimeBuilder = ln.IntervalBuilder = void 0;
		var SI = Ue(),
			ba = class extends SI.FixedWidthBuilder {};
		ln.IntervalBuilder = ba;
		var k_ = class extends ba {};
		ln.IntervalDayTimeBuilder = k_;
		var P_ = class extends ba {};
		ln.IntervalYearMonthBuilder = P_;
	});
	var va = w((ga) => {
		'use strict';
		Object.defineProperty(ga, '__esModule', { value: !0 });
		ga.BinaryBuilder = void 0;
		var AI = Je(),
			DI = an(),
			OI = Ue(),
			L_ = class extends OI.VariableWidthBuilder {
				constructor(e) {
					super(e);
					this._values = new DI.BufferBuilder(new Uint8Array(0));
				}
				get byteLength() {
					let e = this._pendingLength + this.length * 4;
					return (
						this._offsets && (e += this._offsets.byteLength),
						this._values && (e += this._values.byteLength),
						this._nulls && (e += this._nulls.byteLength),
						e
					);
				}
				setValue(e, t) {
					return super.setValue(e, AI.toUint8Array(t));
				}
				_flushPending(e, t) {
					let n = this._offsets,
						i = this._values.reserve(t).buffer,
						s = 0,
						o = 0,
						l = 0,
						h;
					for ([s, h] of e)
						h === void 0 ? n.set(s, 0) : ((o = h.length), i.set(h, l), n.set(s, o), (l += o));
				}
			};
		ga.BinaryBuilder = L_;
	});
	var wa = w((Ta) => {
		'use strict';
		Object.defineProperty(Ta, '__esModule', { value: !0 });
		Ta.Utf8Builder = void 0;
		var FI = Nn(),
			EI = va(),
			MI = an(),
			RI = Ue(),
			Jc = class extends RI.VariableWidthBuilder {
				constructor(e) {
					super(e);
					this._values = new MI.BufferBuilder(new Uint8Array(0));
				}
				get byteLength() {
					let e = this._pendingLength + this.length * 4;
					return (
						this._offsets && (e += this._offsets.byteLength),
						this._values && (e += this._values.byteLength),
						this._nulls && (e += this._nulls.byteLength),
						e
					);
				}
				setValue(e, t) {
					return super.setValue(e, FI.encodeUtf8(t));
				}
				_flushPending(e, t) {}
			};
		Ta.Utf8Builder = Jc;
		Jc.prototype._flushPending = EI.BinaryBuilder.prototype._flushPending;
	});
	var Kc = w((Ia) => {
		'use strict';
		Object.defineProperty(Ia, '__esModule', { value: !0 });
		Ia.Run = void 0;
		var UI = Ce(),
			N_ = class {
				get length() {
					return this._values.length;
				}
				get(e) {
					return this._values[e];
				}
				clear() {
					return (this._values = null), this;
				}
				bind(e) {
					return e instanceof UI.Vector ? e : ((this._values = e), this);
				}
			};
		Ia.Run = N_;
	});
	var et = w((Ei) => {
		'use strict';
		Object.defineProperty(Ei, '__esModule', { value: !0 });
		Ei.Field = Ei.Schema = void 0;
		var VI = de(),
			xt = class {
				constructor(e = [], t, n) {
					(this.fields = e || []),
						(this.metadata = t || new Map()),
						n || (n = Zc(e)),
						(this.dictionaries = n);
				}
				get [Symbol.toStringTag]() {
					return 'Schema';
				}
				toString() {
					return `Schema<{ ${this.fields.map((e, t) => `${t}: ${e}`).join(', ')} }>`;
				}
				select(...e) {
					let t = e.reduce((n, i) => (n[i] = !0) && n, Object.create(null));
					return new xt(
						this.fields.filter((n) => t[n.name]),
						this.metadata
					);
				}
				selectAt(...e) {
					return new xt(e.map((t) => this.fields[t]).filter(Boolean), this.metadata);
				}
				assign(...e) {
					let t = e[0] instanceof xt ? e[0] : Array.isArray(e[0]) ? new xt(e[0]) : new xt(e),
						n = [...this.fields],
						i = Ba(Ba(new Map(), this.metadata), t.metadata),
						s = t.fields.filter((l) => {
							let h = n.findIndex((u) => u.name === l.name);
							return ~h
								? (n[h] = l.clone({ metadata: Ba(Ba(new Map(), n[h].metadata), l.metadata) })) && !1
								: !0;
						}),
						o = Zc(s, new Map());
					return new xt([...n, ...s], i, new Map([...this.dictionaries, ...o]));
				}
			};
		Ei.Schema = xt;
		var Lr = class {
			constructor(e, t, n = !1, i) {
				(this.name = e), (this.type = t), (this.nullable = n), (this.metadata = i || new Map());
			}
			static new(...e) {
				let [t, n, i, s] = e;
				return (
					e[0] &&
						typeof e[0] == 'object' &&
						(({ name: t } = e[0]),
						n === void 0 && (n = e[0].type),
						i === void 0 && (i = e[0].nullable),
						s === void 0 && (s = e[0].metadata)),
					new Lr(`${t}`, n, i, s)
				);
			}
			get typeId() {
				return this.type.typeId;
			}
			get [Symbol.toStringTag]() {
				return 'Field';
			}
			toString() {
				return `${this.name}: ${this.type}`;
			}
			clone(...e) {
				let [t, n, i, s] = e;
				return (
					!e[0] || typeof e[0] != 'object'
						? ([t = this.name, n = this.type, i = this.nullable, s = this.metadata] = e)
						: ({
								name: t = this.name,
								type: n = this.type,
								nullable: i = this.nullable,
								metadata: s = this.metadata
						  } = e[0]),
					Lr.new(t, n, i, s)
				);
			}
		};
		Ei.Field = Lr;
		function Ba(r, e) {
			return new Map([...(r || new Map()), ...(e || new Map())]);
		}
		function Zc(r, e = new Map()) {
			for (let t = -1, n = r.length; ++t < n; ) {
				let s = r[t].type;
				if (VI.DataType.isDictionary(s)) {
					if (!e.has(s.id)) e.set(s.id, s.dictionary);
					else if (e.get(s.id) !== s.dictionary)
						throw new Error(
							'Cannot create Schema containing two different dictionaries with the same Id'
						);
				}
				s.children && s.children.length > 0 && Zc(s.children, e);
			}
			return e;
		}
		xt.prototype.fields = null;
		xt.prototype.metadata = null;
		xt.prototype.dictionaries = null;
		Lr.prototype.type = null;
		Lr.prototype.name = null;
		Lr.prototype.nullable = null;
		Lr.prototype.metadata = null;
	});
	var Qc = w((Sa) => {
		'use strict';
		Object.defineProperty(Sa, '__esModule', { value: !0 });
		Sa.ListBuilder = void 0;
		var kI = Kc(),
			PI = et(),
			LI = de(),
			NI = an(),
			xI = Ue(),
			x_ = class extends xI.VariableWidthBuilder {
				constructor(e) {
					super(e);
					(this._run = new kI.Run()), (this._offsets = new NI.OffsetsBufferBuilder());
				}
				addChild(e, t = '0') {
					if (this.numChildren > 0) throw new Error('ListBuilder can only have one child.');
					return (
						(this.children[this.numChildren] = e),
						(this.type = new LI.List(new PI.Field(t, e.type, !0))),
						this.numChildren - 1
					);
				}
				clear() {
					return this._run.clear(), super.clear();
				}
				_flushPending(e) {
					let t = this._run,
						n = this._offsets,
						i = this._setValue,
						s = 0,
						o;
					for ([s, o] of e)
						o === void 0 ? n.set(s, 0) : (n.set(s, o.length), i(this, s, t.bind(o)));
				}
			};
		Sa.ListBuilder = x_;
	});
	var Xc = w((Aa) => {
		'use strict';
		Object.defineProperty(Aa, '__esModule', { value: !0 });
		Aa.FixedSizeListBuilder = void 0;
		var CI = Kc(),
			jI = et(),
			qI = Ue(),
			WI = de(),
			C_ = class extends qI.Builder {
				constructor() {
					super(...arguments);
					this._run = new CI.Run();
				}
				setValue(e, t) {
					super.setValue(e, this._run.bind(t));
				}
				addChild(e, t = '0') {
					if (this.numChildren > 0)
						throw new Error('FixedSizeListBuilder can only have one child.');
					let n = this.children.push(e);
					return (
						(this.type = new WI.FixedSizeList(this.type.listSize, new jI.Field(t, e.type, !0))), n
					);
				}
				clear() {
					return this._run.clear(), super.clear();
				}
			};
		Aa.FixedSizeListBuilder = C_;
	});
	var el = w((Da) => {
		'use strict';
		Object.defineProperty(Da, '__esModule', { value: !0 });
		Da.MapBuilder = void 0;
		var zI = et(),
			HI = de(),
			YI = Ue(),
			j_ = class extends YI.VariableWidthBuilder {
				set(e, t) {
					return super.set(e, t);
				}
				setValue(e, t) {
					t = t instanceof Map ? t : new Map(Object.entries(t));
					let n = this._pending || (this._pending = new Map()),
						i = n.get(e);
					i && (this._pendingLength -= i.size), (this._pendingLength += t.size), n.set(e, t);
				}
				addChild(e, t = `${this.numChildren}`) {
					if (this.numChildren > 0) throw new Error('ListBuilder can only have one child.');
					return (
						(this.children[this.numChildren] = e),
						(this.type = new HI.Map_(new zI.Field(t, e.type, !0), this.type.keysSorted)),
						this.numChildren - 1
					);
				}
				_flushPending(e) {
					let t = this._offsets,
						n = this._setValue;
					e.forEach((i, s) => {
						i === void 0 ? t.set(s, 0) : (t.set(s, i.size), n(this, s, i));
					});
				}
			};
		Da.MapBuilder = j_;
	});
	var tl = w((Oa) => {
		'use strict';
		Object.defineProperty(Oa, '__esModule', { value: !0 });
		Oa.StructBuilder = void 0;
		var GI = et(),
			$I = Ue(),
			JI = de(),
			q_ = class extends $I.Builder {
				addChild(e, t = `${this.numChildren}`) {
					let n = this.children.push(e);
					return (
						(this.type = new JI.Struct([...this.type.children, new GI.Field(t, e.type, !0)])), n
					);
				}
			};
		Oa.StructBuilder = q_;
	});
	var rl = w((dn) => {
		'use strict';
		Object.defineProperty(dn, '__esModule', { value: !0 });
		dn.DenseUnionBuilder = dn.SparseUnionBuilder = dn.UnionBuilder = void 0;
		var KI = et(),
			W_ = an(),
			ZI = Ue(),
			QI = de(),
			Fa = class extends ZI.Builder {
				constructor(e) {
					super(e);
					(this._typeIds = new W_.DataBufferBuilder(new Int8Array(0), 1)),
						typeof e.valueToChildTypeId == 'function' &&
							(this._valueToChildTypeId = e.valueToChildTypeId);
				}
				get typeIdToChildIndex() {
					return this.type.typeIdToChildIndex;
				}
				append(e, t) {
					return this.set(this.length, e, t);
				}
				set(e, t, n) {
					return (
						n === void 0 && (n = this._valueToChildTypeId(this, t, e)),
						this.setValid(e, this.isValid(t)) && this.setValue(e, t, n),
						this
					);
				}
				setValue(e, t, n) {
					this._typeIds.set(e, n), super.setValue(e, t);
				}
				addChild(e, t = `${this.children.length}`) {
					let n = this.children.push(e),
						{
							type: { children: i, mode: s, typeIds: o }
						} = this,
						l = [...i, new KI.Field(t, e.type)];
					return (this.type = new QI.Union(s, [...o, n], l)), n;
				}
				_valueToChildTypeId(e, t, n) {
					throw new Error(
						'Cannot map UnionBuilder value to child typeId. Pass the `childTypeId` as the second argument to unionBuilder.append(), or supply a `valueToChildTypeId` function as part of the UnionBuilder constructor options.'
					);
				}
			};
		dn.UnionBuilder = Fa;
		var z_ = class extends Fa {};
		dn.SparseUnionBuilder = z_;
		var H_ = class extends Fa {
			constructor(e) {
				super(e);
				this._offsets = new W_.DataBufferBuilder(new Int32Array(0));
			}
			setValue(e, t, n) {
				let i = this.type.typeIdToChildIndex[n];
				return this._offsets.set(e, this.getChildAt(i).length), super.setValue(e, t, n);
			}
		};
		dn.DenseUnionBuilder = H_;
	});
	var it = w((Ea) => {
		'use strict';
		Object.defineProperty(Ea, '__esModule', { value: !0 });
		Ea.Visitor = void 0;
		var XI = rr(),
			eB = Ce(),
			g = ve(),
			tB = de(),
			be = class {
				visitMany(e, ...t) {
					return e.map((n, i) => this.visit(n, ...t.map((s) => s[i])));
				}
				visit(...e) {
					return this.getVisitFn(e[0], !1).apply(this, e);
				}
				getVisitFn(e, t = !0) {
					return rB(this, e, t);
				}
				visitNull(e, ...t) {
					return null;
				}
				visitBool(e, ...t) {
					return null;
				}
				visitInt(e, ...t) {
					return null;
				}
				visitFloat(e, ...t) {
					return null;
				}
				visitUtf8(e, ...t) {
					return null;
				}
				visitBinary(e, ...t) {
					return null;
				}
				visitFixedSizeBinary(e, ...t) {
					return null;
				}
				visitDate(e, ...t) {
					return null;
				}
				visitTimestamp(e, ...t) {
					return null;
				}
				visitTime(e, ...t) {
					return null;
				}
				visitDecimal(e, ...t) {
					return null;
				}
				visitList(e, ...t) {
					return null;
				}
				visitStruct(e, ...t) {
					return null;
				}
				visitUnion(e, ...t) {
					return null;
				}
				visitDictionary(e, ...t) {
					return null;
				}
				visitInterval(e, ...t) {
					return null;
				}
				visitFixedSizeList(e, ...t) {
					return null;
				}
				visitMap(e, ...t) {
					return null;
				}
			};
		Ea.Visitor = be;
		function rB(r, e, t = !0) {
			let n = null,
				i = g.Type.NONE;
			switch (
				(e instanceof XI.Data || e instanceof eB.Vector
					? (i = nl(e.type))
					: e instanceof tB.DataType
					? (i = nl(e))
					: typeof (i = e) != 'number' && (i = g.Type[e]),
				i)
			) {
				case g.Type.Null:
					n = r.visitNull;
					break;
				case g.Type.Bool:
					n = r.visitBool;
					break;
				case g.Type.Int:
					n = r.visitInt;
					break;
				case g.Type.Int8:
					n = r.visitInt8 || r.visitInt;
					break;
				case g.Type.Int16:
					n = r.visitInt16 || r.visitInt;
					break;
				case g.Type.Int32:
					n = r.visitInt32 || r.visitInt;
					break;
				case g.Type.Int64:
					n = r.visitInt64 || r.visitInt;
					break;
				case g.Type.Uint8:
					n = r.visitUint8 || r.visitInt;
					break;
				case g.Type.Uint16:
					n = r.visitUint16 || r.visitInt;
					break;
				case g.Type.Uint32:
					n = r.visitUint32 || r.visitInt;
					break;
				case g.Type.Uint64:
					n = r.visitUint64 || r.visitInt;
					break;
				case g.Type.Float:
					n = r.visitFloat;
					break;
				case g.Type.Float16:
					n = r.visitFloat16 || r.visitFloat;
					break;
				case g.Type.Float32:
					n = r.visitFloat32 || r.visitFloat;
					break;
				case g.Type.Float64:
					n = r.visitFloat64 || r.visitFloat;
					break;
				case g.Type.Utf8:
					n = r.visitUtf8;
					break;
				case g.Type.Binary:
					n = r.visitBinary;
					break;
				case g.Type.FixedSizeBinary:
					n = r.visitFixedSizeBinary;
					break;
				case g.Type.Date:
					n = r.visitDate;
					break;
				case g.Type.DateDay:
					n = r.visitDateDay || r.visitDate;
					break;
				case g.Type.DateMillisecond:
					n = r.visitDateMillisecond || r.visitDate;
					break;
				case g.Type.Timestamp:
					n = r.visitTimestamp;
					break;
				case g.Type.TimestampSecond:
					n = r.visitTimestampSecond || r.visitTimestamp;
					break;
				case g.Type.TimestampMillisecond:
					n = r.visitTimestampMillisecond || r.visitTimestamp;
					break;
				case g.Type.TimestampMicrosecond:
					n = r.visitTimestampMicrosecond || r.visitTimestamp;
					break;
				case g.Type.TimestampNanosecond:
					n = r.visitTimestampNanosecond || r.visitTimestamp;
					break;
				case g.Type.Time:
					n = r.visitTime;
					break;
				case g.Type.TimeSecond:
					n = r.visitTimeSecond || r.visitTime;
					break;
				case g.Type.TimeMillisecond:
					n = r.visitTimeMillisecond || r.visitTime;
					break;
				case g.Type.TimeMicrosecond:
					n = r.visitTimeMicrosecond || r.visitTime;
					break;
				case g.Type.TimeNanosecond:
					n = r.visitTimeNanosecond || r.visitTime;
					break;
				case g.Type.Decimal:
					n = r.visitDecimal;
					break;
				case g.Type.List:
					n = r.visitList;
					break;
				case g.Type.Struct:
					n = r.visitStruct;
					break;
				case g.Type.Union:
					n = r.visitUnion;
					break;
				case g.Type.DenseUnion:
					n = r.visitDenseUnion || r.visitUnion;
					break;
				case g.Type.SparseUnion:
					n = r.visitSparseUnion || r.visitUnion;
					break;
				case g.Type.Dictionary:
					n = r.visitDictionary;
					break;
				case g.Type.Interval:
					n = r.visitInterval;
					break;
				case g.Type.IntervalDayTime:
					n = r.visitIntervalDayTime || r.visitInterval;
					break;
				case g.Type.IntervalYearMonth:
					n = r.visitIntervalYearMonth || r.visitInterval;
					break;
				case g.Type.FixedSizeList:
					n = r.visitFixedSizeList;
					break;
				case g.Type.Map:
					n = r.visitMap;
					break;
			}
			if (typeof n == 'function') return n;
			if (!t) return () => null;
			throw new Error(`Unrecognized type '${g.Type[i]}'`);
		}
		function nl(r) {
			switch (r.typeId) {
				case g.Type.Null:
					return g.Type.Null;
				case g.Type.Int: {
					let { bitWidth: e, isSigned: t } = r;
					switch (e) {
						case 8:
							return t ? g.Type.Int8 : g.Type.Uint8;
						case 16:
							return t ? g.Type.Int16 : g.Type.Uint16;
						case 32:
							return t ? g.Type.Int32 : g.Type.Uint32;
						case 64:
							return t ? g.Type.Int64 : g.Type.Uint64;
					}
					return g.Type.Int;
				}
				case g.Type.Float:
					switch (r.precision) {
						case g.Precision.HALF:
							return g.Type.Float16;
						case g.Precision.SINGLE:
							return g.Type.Float32;
						case g.Precision.DOUBLE:
							return g.Type.Float64;
					}
					return g.Type.Float;
				case g.Type.Binary:
					return g.Type.Binary;
				case g.Type.Utf8:
					return g.Type.Utf8;
				case g.Type.Bool:
					return g.Type.Bool;
				case g.Type.Decimal:
					return g.Type.Decimal;
				case g.Type.Time:
					switch (r.unit) {
						case g.TimeUnit.SECOND:
							return g.Type.TimeSecond;
						case g.TimeUnit.MILLISECOND:
							return g.Type.TimeMillisecond;
						case g.TimeUnit.MICROSECOND:
							return g.Type.TimeMicrosecond;
						case g.TimeUnit.NANOSECOND:
							return g.Type.TimeNanosecond;
					}
					return g.Type.Time;
				case g.Type.Timestamp:
					switch (r.unit) {
						case g.TimeUnit.SECOND:
							return g.Type.TimestampSecond;
						case g.TimeUnit.MILLISECOND:
							return g.Type.TimestampMillisecond;
						case g.TimeUnit.MICROSECOND:
							return g.Type.TimestampMicrosecond;
						case g.TimeUnit.NANOSECOND:
							return g.Type.TimestampNanosecond;
					}
					return g.Type.Timestamp;
				case g.Type.Date:
					switch (r.unit) {
						case g.DateUnit.DAY:
							return g.Type.DateDay;
						case g.DateUnit.MILLISECOND:
							return g.Type.DateMillisecond;
					}
					return g.Type.Date;
				case g.Type.Interval:
					switch (r.unit) {
						case g.IntervalUnit.DAY_TIME:
							return g.Type.IntervalDayTime;
						case g.IntervalUnit.YEAR_MONTH:
							return g.Type.IntervalYearMonth;
					}
					return g.Type.Interval;
				case g.Type.Map:
					return g.Type.Map;
				case g.Type.List:
					return g.Type.List;
				case g.Type.Struct:
					return g.Type.Struct;
				case g.Type.Union:
					switch (r.mode) {
						case g.UnionMode.Dense:
							return g.Type.DenseUnion;
						case g.UnionMode.Sparse:
							return g.Type.SparseUnion;
					}
					return g.Type.Union;
				case g.Type.FixedSizeBinary:
					return g.Type.FixedSizeBinary;
				case g.Type.FixedSizeList:
					return g.Type.FixedSizeList;
				case g.Type.Dictionary:
					return g.Type.Dictionary;
			}
			throw new Error(`Unrecognized type '${g.Type[r.typeId]}'`);
		}
		be.prototype.visitInt8 = null;
		be.prototype.visitInt16 = null;
		be.prototype.visitInt32 = null;
		be.prototype.visitInt64 = null;
		be.prototype.visitUint8 = null;
		be.prototype.visitUint16 = null;
		be.prototype.visitUint32 = null;
		be.prototype.visitUint64 = null;
		be.prototype.visitFloat16 = null;
		be.prototype.visitFloat32 = null;
		be.prototype.visitFloat64 = null;
		be.prototype.visitDateDay = null;
		be.prototype.visitDateMillisecond = null;
		be.prototype.visitTimestampSecond = null;
		be.prototype.visitTimestampMillisecond = null;
		be.prototype.visitTimestampMicrosecond = null;
		be.prototype.visitTimestampNanosecond = null;
		be.prototype.visitTimeSecond = null;
		be.prototype.visitTimeMillisecond = null;
		be.prototype.visitTimeMicrosecond = null;
		be.prototype.visitTimeNanosecond = null;
		be.prototype.visitDenseUnion = null;
		be.prototype.visitSparseUnion = null;
		be.prototype.visitIntervalDayTime = null;
		be.prototype.visitIntervalYearMonth = null;
	});
	var ol = w((Mi) => {
		'use strict';
		Object.defineProperty(Mi, '__esModule', { value: !0 });
		Mi.instance = Mi.SetVisitor = void 0;
		var nB = Ce(),
			iB = it(),
			sB = Nn(),
			oB = Us(),
			aB = Je(),
			Ct = ve(),
			$ = class extends iB.Visitor {};
		Mi.SetVisitor = $;
		var uB = (r, e, t) => {
				r[e] = (t / 864e5) | 0;
			},
			il = (r, e, t) => {
				(r[e] = t % 4294967296 | 0), (r[e + 1] = (t / 4294967296) | 0);
			},
			cB = (r, e, t) => {
				(r[e] = (t * 1e3) % 4294967296 | 0), (r[e + 1] = ((t * 1e3) / 4294967296) | 0);
			},
			lB = (r, e, t) => {
				(r[e] = (t * 1e6) % 4294967296 | 0), (r[e + 1] = ((t * 1e6) / 4294967296) | 0);
			},
			Y_ = (r, e, t, n) => {
				let { [t]: i, [t + 1]: s } = e;
				i != null && s != null && r.set(n.subarray(0, s - i), i);
			},
			dB = ({ offset: r, values: e }, t, n) => {
				let i = r + t;
				n ? (e[i >> 3] |= 1 << i % 8) : (e[i >> 3] &= ~(1 << i % 8));
			},
			G_ = ({ values: r }, e, t) => {
				uB(r, e, t.valueOf());
			},
			$_ = ({ values: r }, e, t) => {
				il(r, e * 2, t.valueOf());
			},
			br = ({ stride: r, values: e }, t, n) => {
				e[r * t] = n;
			},
			J_ = ({ stride: r, values: e }, t, n) => {
				e[r * t] = oB.float64ToUint16(n);
			},
			sl = (r, e, t) => {
				switch (typeof t) {
					case 'bigint':
						r.values64[e] = t;
						break;
					case 'number':
						r.values[e * r.stride] = t;
						break;
					default: {
						let n = t,
							{ stride: i, ArrayType: s } = r,
							o = aB.toArrayBufferView(s, n);
						r.values.set(o.subarray(0, i), i * e);
					}
				}
			},
			fB = ({ stride: r, values: e }, t, n) => {
				e.set(n.subarray(0, r), r * t);
			},
			hB = ({ values: r, valueOffsets: e }, t, n) => Y_(r, e, t, n),
			pB = ({ values: r, valueOffsets: e }, t, n) => {
				Y_(r, e, t, sB.encodeUtf8(n));
			},
			_B = (r, e, t) => {
				r.type.bitWidth < 64 ? br(r, e, t) : sl(r, e, t);
			},
			yB = (r, e, t) => {
				r.type.precision !== Ct.Precision.HALF ? br(r, e, t) : J_(r, e, t);
			},
			mB = (r, e, t) => {
				r.type.unit === Ct.DateUnit.DAY ? G_(r, e, t) : $_(r, e, t);
			},
			K_ = ({ values: r }, e, t) => il(r, e * 2, t / 1e3),
			Z_ = ({ values: r }, e, t) => il(r, e * 2, t),
			Q_ = ({ values: r }, e, t) => cB(r, e * 2, t),
			X_ = ({ values: r }, e, t) => lB(r, e * 2, t),
			bB = (r, e, t) => {
				switch (r.type.unit) {
					case Ct.TimeUnit.SECOND:
						return K_(r, e, t);
					case Ct.TimeUnit.MILLISECOND:
						return Z_(r, e, t);
					case Ct.TimeUnit.MICROSECOND:
						return Q_(r, e, t);
					case Ct.TimeUnit.NANOSECOND:
						return X_(r, e, t);
				}
			},
			ey = ({ values: r, stride: e }, t, n) => {
				r[e * t] = n;
			},
			ty = ({ values: r, stride: e }, t, n) => {
				r[e * t] = n;
			},
			ry = ({ values: r }, e, t) => {
				r.set(t.subarray(0, 2), 2 * e);
			},
			ny = ({ values: r }, e, t) => {
				r.set(t.subarray(0, 2), 2 * e);
			},
			gB = (r, e, t) => {
				switch (r.type.unit) {
					case Ct.TimeUnit.SECOND:
						return ey(r, e, t);
					case Ct.TimeUnit.MILLISECOND:
						return ty(r, e, t);
					case Ct.TimeUnit.MICROSECOND:
						return ry(r, e, t);
					case Ct.TimeUnit.NANOSECOND:
						return ny(r, e, t);
				}
			},
			vB = ({ values: r }, e, t) => {
				r.set(t.subarray(0, 4), 4 * e);
			},
			TB = (r, e, t) => {
				let n = r.getChildAt(0),
					i = r.valueOffsets;
				for (let s = -1, o = i[e], l = i[e + 1]; o < l; ) n.set(o++, t.get(++s));
			},
			wB = (r, e, t) => {
				let n = r.getChildAt(0),
					i = r.valueOffsets,
					s = t instanceof Map ? [...t] : Object.entries(t);
				for (let o = -1, l = i[e], h = i[e + 1]; l < h; ) n.set(l++, s[++o]);
			},
			IB = (r, e) => (t, n, i) => t == null ? void 0 : t.set(r, e[i]),
			BB = (r, e) => (t, n, i) => t == null ? void 0 : t.set(r, e.get(i)),
			SB = (r, e) => (t, n, i) => t == null ? void 0 : t.set(r, e.get(n.name)),
			AB = (r, e) => (t, n, i) => t == null ? void 0 : t.set(r, e[n.name]),
			DB = (r, e, t) => {
				let n =
					t instanceof Map
						? SB(e, t)
						: t instanceof nB.Vector
						? BB(e, t)
						: Array.isArray(t)
						? IB(e, t)
						: AB(e, t);
				r.type.children.forEach((i, s) => n(r.getChildAt(s), i, s));
			},
			OB = (r, e, t) => {
				r.type.mode === Ct.UnionMode.Dense ? iy(r, e, t) : sy(r, e, t);
			},
			iy = (r, e, t) => {
				let n = r.typeIdToChildIndex[r.typeIds[e]],
					i = r.getChildAt(n);
				i && i.set(r.valueOffsets[e], t);
			},
			sy = (r, e, t) => {
				let n = r.typeIdToChildIndex[r.typeIds[e]],
					i = r.getChildAt(n);
				i && i.set(e, t);
			},
			FB = (r, e, t) => {
				let n = r.getKey(e);
				n !== null && r.setValue(n, t);
			},
			EB = (r, e, t) => {
				r.type.unit === Ct.IntervalUnit.DAY_TIME ? oy(r, e, t) : ay(r, e, t);
			},
			oy = ({ values: r }, e, t) => {
				r.set(t.subarray(0, 2), 2 * e);
			},
			ay = ({ values: r }, e, t) => {
				r[e] = t[0] * 12 + (t[1] % 12);
			},
			MB = (r, e, t) => {
				let n = r.getChildAt(0),
					{ stride: i } = r;
				for (let s = -1, o = e * i; ++s < i; ) n.set(o + s, t.get(s));
			};
		$.prototype.visitBool = dB;
		$.prototype.visitInt = _B;
		$.prototype.visitInt8 = br;
		$.prototype.visitInt16 = br;
		$.prototype.visitInt32 = br;
		$.prototype.visitInt64 = sl;
		$.prototype.visitUint8 = br;
		$.prototype.visitUint16 = br;
		$.prototype.visitUint32 = br;
		$.prototype.visitUint64 = sl;
		$.prototype.visitFloat = yB;
		$.prototype.visitFloat16 = J_;
		$.prototype.visitFloat32 = br;
		$.prototype.visitFloat64 = br;
		$.prototype.visitUtf8 = pB;
		$.prototype.visitBinary = hB;
		$.prototype.visitFixedSizeBinary = fB;
		$.prototype.visitDate = mB;
		$.prototype.visitDateDay = G_;
		$.prototype.visitDateMillisecond = $_;
		$.prototype.visitTimestamp = bB;
		$.prototype.visitTimestampSecond = K_;
		$.prototype.visitTimestampMillisecond = Z_;
		$.prototype.visitTimestampMicrosecond = Q_;
		$.prototype.visitTimestampNanosecond = X_;
		$.prototype.visitTime = gB;
		$.prototype.visitTimeSecond = ey;
		$.prototype.visitTimeMillisecond = ty;
		$.prototype.visitTimeMicrosecond = ry;
		$.prototype.visitTimeNanosecond = ny;
		$.prototype.visitDecimal = vB;
		$.prototype.visitList = TB;
		$.prototype.visitStruct = DB;
		$.prototype.visitUnion = OB;
		$.prototype.visitDenseUnion = iy;
		$.prototype.visitSparseUnion = sy;
		$.prototype.visitDictionary = FB;
		$.prototype.visitInterval = EB;
		$.prototype.visitIntervalDayTime = oy;
		$.prototype.visitIntervalYearMonth = ay;
		$.prototype.visitFixedSizeList = MB;
		$.prototype.visitMap = wB;
		Mi.instance = new $();
	});
	var uy = w((Ri) => {
		'use strict';
		Object.defineProperty(Ri, '__esModule', { value: !0 });
		Ri.instance = Ri.GetBuilderCtor = void 0;
		var RB = it(),
			UB = va(),
			VB = Pc(),
			al = Nc(),
			kB = xc(),
			PB = jc(),
			LB = qc(),
			NB = Xc(),
			Ma = Wc(),
			ul = $c(),
			Nr = Hc(),
			xB = Qc(),
			CB = el(),
			jB = Lc(),
			qB = tl(),
			Ns = Gc(),
			xs = Yc(),
			cl = rl(),
			WB = wa(),
			ll = class extends RB.Visitor {
				visitNull() {
					return jB.NullBuilder;
				}
				visitBool() {
					return VB.BoolBuilder;
				}
				visitInt() {
					return Nr.IntBuilder;
				}
				visitInt8() {
					return Nr.Int8Builder;
				}
				visitInt16() {
					return Nr.Int16Builder;
				}
				visitInt32() {
					return Nr.Int32Builder;
				}
				visitInt64() {
					return Nr.Int64Builder;
				}
				visitUint8() {
					return Nr.Uint8Builder;
				}
				visitUint16() {
					return Nr.Uint16Builder;
				}
				visitUint32() {
					return Nr.Uint32Builder;
				}
				visitUint64() {
					return Nr.Uint64Builder;
				}
				visitFloat() {
					return Ma.FloatBuilder;
				}
				visitFloat16() {
					return Ma.Float16Builder;
				}
				visitFloat32() {
					return Ma.Float32Builder;
				}
				visitFloat64() {
					return Ma.Float64Builder;
				}
				visitUtf8() {
					return WB.Utf8Builder;
				}
				visitBinary() {
					return UB.BinaryBuilder;
				}
				visitFixedSizeBinary() {
					return LB.FixedSizeBinaryBuilder;
				}
				visitDate() {
					return al.DateBuilder;
				}
				visitDateDay() {
					return al.DateDayBuilder;
				}
				visitDateMillisecond() {
					return al.DateMillisecondBuilder;
				}
				visitTimestamp() {
					return Ns.TimestampBuilder;
				}
				visitTimestampSecond() {
					return Ns.TimestampSecondBuilder;
				}
				visitTimestampMillisecond() {
					return Ns.TimestampMillisecondBuilder;
				}
				visitTimestampMicrosecond() {
					return Ns.TimestampMicrosecondBuilder;
				}
				visitTimestampNanosecond() {
					return Ns.TimestampNanosecondBuilder;
				}
				visitTime() {
					return xs.TimeBuilder;
				}
				visitTimeSecond() {
					return xs.TimeSecondBuilder;
				}
				visitTimeMillisecond() {
					return xs.TimeMillisecondBuilder;
				}
				visitTimeMicrosecond() {
					return xs.TimeMicrosecondBuilder;
				}
				visitTimeNanosecond() {
					return xs.TimeNanosecondBuilder;
				}
				visitDecimal() {
					return kB.DecimalBuilder;
				}
				visitList() {
					return xB.ListBuilder;
				}
				visitStruct() {
					return qB.StructBuilder;
				}
				visitUnion() {
					return cl.UnionBuilder;
				}
				visitDenseUnion() {
					return cl.DenseUnionBuilder;
				}
				visitSparseUnion() {
					return cl.SparseUnionBuilder;
				}
				visitDictionary() {
					return PB.DictionaryBuilder;
				}
				visitInterval() {
					return ul.IntervalBuilder;
				}
				visitIntervalDayTime() {
					return ul.IntervalDayTimeBuilder;
				}
				visitIntervalYearMonth() {
					return ul.IntervalYearMonthBuilder;
				}
				visitFixedSizeList() {
					return NB.FixedSizeListBuilder;
				}
				visitMap() {
					return CB.MapBuilder;
				}
			};
		Ri.GetBuilderCtor = ll;
		Ri.instance = new ll();
	});
	var Ua = w((D) => {
		'use strict';
		Object.defineProperty(D, '__esModule', { value: !0 });
		D.DenseUnionBuilder =
			D.SparseUnionBuilder =
			D.UnionBuilder =
			D.StructBuilder =
			D.MapBuilder =
			D.FixedSizeListBuilder =
			D.ListBuilder =
			D.BinaryBuilder =
			D.Utf8Builder =
			D.IntervalYearMonthBuilder =
			D.IntervalDayTimeBuilder =
			D.IntervalBuilder =
			D.TimestampNanosecondBuilder =
			D.TimestampMicrosecondBuilder =
			D.TimestampMillisecondBuilder =
			D.TimestampSecondBuilder =
			D.TimestampBuilder =
			D.TimeNanosecondBuilder =
			D.TimeMicrosecondBuilder =
			D.TimeMillisecondBuilder =
			D.TimeSecondBuilder =
			D.TimeBuilder =
			D.Uint64Builder =
			D.Uint32Builder =
			D.Uint16Builder =
			D.Uint8Builder =
			D.Int64Builder =
			D.Int32Builder =
			D.Int16Builder =
			D.Int8Builder =
			D.IntBuilder =
			D.Float64Builder =
			D.Float32Builder =
			D.Float16Builder =
			D.FloatBuilder =
			D.FixedSizeBinaryBuilder =
			D.DictionaryBuilder =
			D.DecimalBuilder =
			D.DateMillisecondBuilder =
			D.DateDayBuilder =
			D.DateBuilder =
			D.NullBuilder =
			D.BoolBuilder =
			D.Builder =
				void 0;
		var zB = Ue();
		Object.defineProperty(D, 'Builder', {
			enumerable: !0,
			get: function () {
				return zB.Builder;
			}
		});
		var HB = Pc();
		Object.defineProperty(D, 'BoolBuilder', {
			enumerable: !0,
			get: function () {
				return HB.BoolBuilder;
			}
		});
		var YB = Lc();
		Object.defineProperty(D, 'NullBuilder', {
			enumerable: !0,
			get: function () {
				return YB.NullBuilder;
			}
		});
		var dl = Nc();
		Object.defineProperty(D, 'DateBuilder', {
			enumerable: !0,
			get: function () {
				return dl.DateBuilder;
			}
		});
		Object.defineProperty(D, 'DateDayBuilder', {
			enumerable: !0,
			get: function () {
				return dl.DateDayBuilder;
			}
		});
		Object.defineProperty(D, 'DateMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return dl.DateMillisecondBuilder;
			}
		});
		var GB = xc();
		Object.defineProperty(D, 'DecimalBuilder', {
			enumerable: !0,
			get: function () {
				return GB.DecimalBuilder;
			}
		});
		var $B = jc();
		Object.defineProperty(D, 'DictionaryBuilder', {
			enumerable: !0,
			get: function () {
				return $B.DictionaryBuilder;
			}
		});
		var JB = qc();
		Object.defineProperty(D, 'FixedSizeBinaryBuilder', {
			enumerable: !0,
			get: function () {
				return JB.FixedSizeBinaryBuilder;
			}
		});
		var Ra = Wc();
		Object.defineProperty(D, 'FloatBuilder', {
			enumerable: !0,
			get: function () {
				return Ra.FloatBuilder;
			}
		});
		Object.defineProperty(D, 'Float16Builder', {
			enumerable: !0,
			get: function () {
				return Ra.Float16Builder;
			}
		});
		Object.defineProperty(D, 'Float32Builder', {
			enumerable: !0,
			get: function () {
				return Ra.Float32Builder;
			}
		});
		Object.defineProperty(D, 'Float64Builder', {
			enumerable: !0,
			get: function () {
				return Ra.Float64Builder;
			}
		});
		var xr = Hc();
		Object.defineProperty(D, 'IntBuilder', {
			enumerable: !0,
			get: function () {
				return xr.IntBuilder;
			}
		});
		Object.defineProperty(D, 'Int8Builder', {
			enumerable: !0,
			get: function () {
				return xr.Int8Builder;
			}
		});
		Object.defineProperty(D, 'Int16Builder', {
			enumerable: !0,
			get: function () {
				return xr.Int16Builder;
			}
		});
		Object.defineProperty(D, 'Int32Builder', {
			enumerable: !0,
			get: function () {
				return xr.Int32Builder;
			}
		});
		Object.defineProperty(D, 'Int64Builder', {
			enumerable: !0,
			get: function () {
				return xr.Int64Builder;
			}
		});
		Object.defineProperty(D, 'Uint8Builder', {
			enumerable: !0,
			get: function () {
				return xr.Uint8Builder;
			}
		});
		Object.defineProperty(D, 'Uint16Builder', {
			enumerable: !0,
			get: function () {
				return xr.Uint16Builder;
			}
		});
		Object.defineProperty(D, 'Uint32Builder', {
			enumerable: !0,
			get: function () {
				return xr.Uint32Builder;
			}
		});
		Object.defineProperty(D, 'Uint64Builder', {
			enumerable: !0,
			get: function () {
				return xr.Uint64Builder;
			}
		});
		var Cs = Yc();
		Object.defineProperty(D, 'TimeBuilder', {
			enumerable: !0,
			get: function () {
				return Cs.TimeBuilder;
			}
		});
		Object.defineProperty(D, 'TimeSecondBuilder', {
			enumerable: !0,
			get: function () {
				return Cs.TimeSecondBuilder;
			}
		});
		Object.defineProperty(D, 'TimeMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return Cs.TimeMillisecondBuilder;
			}
		});
		Object.defineProperty(D, 'TimeMicrosecondBuilder', {
			enumerable: !0,
			get: function () {
				return Cs.TimeMicrosecondBuilder;
			}
		});
		Object.defineProperty(D, 'TimeNanosecondBuilder', {
			enumerable: !0,
			get: function () {
				return Cs.TimeNanosecondBuilder;
			}
		});
		var js = Gc();
		Object.defineProperty(D, 'TimestampBuilder', {
			enumerable: !0,
			get: function () {
				return js.TimestampBuilder;
			}
		});
		Object.defineProperty(D, 'TimestampSecondBuilder', {
			enumerable: !0,
			get: function () {
				return js.TimestampSecondBuilder;
			}
		});
		Object.defineProperty(D, 'TimestampMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return js.TimestampMillisecondBuilder;
			}
		});
		Object.defineProperty(D, 'TimestampMicrosecondBuilder', {
			enumerable: !0,
			get: function () {
				return js.TimestampMicrosecondBuilder;
			}
		});
		Object.defineProperty(D, 'TimestampNanosecondBuilder', {
			enumerable: !0,
			get: function () {
				return js.TimestampNanosecondBuilder;
			}
		});
		var fl = $c();
		Object.defineProperty(D, 'IntervalBuilder', {
			enumerable: !0,
			get: function () {
				return fl.IntervalBuilder;
			}
		});
		Object.defineProperty(D, 'IntervalDayTimeBuilder', {
			enumerable: !0,
			get: function () {
				return fl.IntervalDayTimeBuilder;
			}
		});
		Object.defineProperty(D, 'IntervalYearMonthBuilder', {
			enumerable: !0,
			get: function () {
				return fl.IntervalYearMonthBuilder;
			}
		});
		var KB = wa();
		Object.defineProperty(D, 'Utf8Builder', {
			enumerable: !0,
			get: function () {
				return KB.Utf8Builder;
			}
		});
		var ZB = va();
		Object.defineProperty(D, 'BinaryBuilder', {
			enumerable: !0,
			get: function () {
				return ZB.BinaryBuilder;
			}
		});
		var QB = Qc();
		Object.defineProperty(D, 'ListBuilder', {
			enumerable: !0,
			get: function () {
				return QB.ListBuilder;
			}
		});
		var XB = Xc();
		Object.defineProperty(D, 'FixedSizeListBuilder', {
			enumerable: !0,
			get: function () {
				return XB.FixedSizeListBuilder;
			}
		});
		var e0 = el();
		Object.defineProperty(D, 'MapBuilder', {
			enumerable: !0,
			get: function () {
				return e0.MapBuilder;
			}
		});
		var t0 = tl();
		Object.defineProperty(D, 'StructBuilder', {
			enumerable: !0,
			get: function () {
				return t0.StructBuilder;
			}
		});
		var hl = rl();
		Object.defineProperty(D, 'UnionBuilder', {
			enumerable: !0,
			get: function () {
				return hl.UnionBuilder;
			}
		});
		Object.defineProperty(D, 'SparseUnionBuilder', {
			enumerable: !0,
			get: function () {
				return hl.SparseUnionBuilder;
			}
		});
		Object.defineProperty(D, 'DenseUnionBuilder', {
			enumerable: !0,
			get: function () {
				return hl.DenseUnionBuilder;
			}
		});
		var pl = ve(),
			r0 = wa(),
			n0 = Ue(),
			cy = ol(),
			ly = uy();
		n0.Builder.new = dy;
		function dy(r) {
			let e = r.type,
				t = new (ly.instance.getVisitFn(e)())(r);
			if (e.children && e.children.length > 0) {
				let n = r.children || [],
					i = { nullValues: r.nullValues },
					s = Array.isArray(n) ? (o, l) => n[l] || i : ({ name: o }) => n[o] || i;
				e.children.forEach((o, l) => {
					let { type: h } = o,
						u = s(o, l);
					t.children.push(dy(Object.assign(Object.assign({}, u), { type: h })));
				});
			}
			return t;
		}
		Object.keys(pl.Type)
			.map((r) => pl.Type[r])
			.filter((r) => typeof r == 'number' && r !== pl.Type.NONE)
			.forEach((r) => {
				let e = ly.instance.visit(r);
				e.prototype._setValue = cy.instance.getVisitFn(r);
			});
		r0.Utf8Builder.prototype._setValue = cy.instance.visitBinary;
	});
	var fy = w((Ui) => {
		'use strict';
		Object.defineProperty(Ui, '__esModule', { value: !0 });
		Ui.Block = Ui.Footer = void 0;
		var i0 = Ur(),
			Va = nn(),
			jt = class {
				constructor() {
					(this.bb = null), (this.bb_pos = 0);
				}
				__init(e, t) {
					return (this.bb_pos = e), (this.bb = t), this;
				}
				static getRootAsFooter(e, t) {
					return (t || new jt()).__init(e.readInt32(e.position()) + e.position(), e);
				}
				static getSizePrefixedRootAsFooter(e, t) {
					return (
						e.setPosition(e.position() + i0.flatbuffers.SIZE_PREFIX_LENGTH),
						(t || new jt()).__init(e.readInt32(e.position()) + e.position(), e)
					);
				}
				version() {
					let e = this.bb.__offset(this.bb_pos, 4);
					return e ? this.bb.readInt16(this.bb_pos + e) : Va.MetadataVersion.V1;
				}
				schema(e) {
					let t = this.bb.__offset(this.bb_pos, 6);
					return t
						? (e || new Va.Schema()).__init(this.bb.__indirect(this.bb_pos + t), this.bb)
						: null;
				}
				dictionaries(e, t) {
					let n = this.bb.__offset(this.bb_pos, 8);
					return n
						? (t || new ka()).__init(this.bb.__vector(this.bb_pos + n) + e * 24, this.bb)
						: null;
				}
				dictionariesLength() {
					let e = this.bb.__offset(this.bb_pos, 8);
					return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
				}
				recordBatches(e, t) {
					let n = this.bb.__offset(this.bb_pos, 10);
					return n
						? (t || new ka()).__init(this.bb.__vector(this.bb_pos + n) + e * 24, this.bb)
						: null;
				}
				recordBatchesLength() {
					let e = this.bb.__offset(this.bb_pos, 10);
					return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
				}
				customMetadata(e, t) {
					let n = this.bb.__offset(this.bb_pos, 12);
					return n
						? (t || new Va.KeyValue()).__init(
								this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + e * 4),
								this.bb
						  )
						: null;
				}
				customMetadataLength() {
					let e = this.bb.__offset(this.bb_pos, 12);
					return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
				}
				static startFooter(e) {
					e.startObject(5);
				}
				static addVersion(e, t) {
					e.addFieldInt16(0, t, Va.MetadataVersion.V1);
				}
				static addSchema(e, t) {
					e.addFieldOffset(1, t, 0);
				}
				static addDictionaries(e, t) {
					e.addFieldOffset(2, t, 0);
				}
				static startDictionariesVector(e, t) {
					e.startVector(24, t, 8);
				}
				static addRecordBatches(e, t) {
					e.addFieldOffset(3, t, 0);
				}
				static startRecordBatchesVector(e, t) {
					e.startVector(24, t, 8);
				}
				static addCustomMetadata(e, t) {
					e.addFieldOffset(4, t, 0);
				}
				static createCustomMetadataVector(e, t) {
					e.startVector(4, t.length, 4);
					for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
					return e.endVector();
				}
				static startCustomMetadataVector(e, t) {
					e.startVector(4, t, 4);
				}
				static endFooter(e) {
					return e.endObject();
				}
				static finishFooterBuffer(e, t) {
					e.finish(t);
				}
				static finishSizePrefixedFooterBuffer(e, t) {
					e.finish(t, void 0, !0);
				}
				static createFooter(e, t, n, i, s, o) {
					return (
						jt.startFooter(e),
						jt.addVersion(e, t),
						jt.addSchema(e, n),
						jt.addDictionaries(e, i),
						jt.addRecordBatches(e, s),
						jt.addCustomMetadata(e, o),
						jt.endFooter(e)
					);
				}
			};
		Ui.Footer = jt;
		var ka = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			offset() {
				return this.bb.readInt64(this.bb_pos);
			}
			metaDataLength() {
				return this.bb.readInt32(this.bb_pos + 8);
			}
			bodyLength() {
				return this.bb.readInt64(this.bb_pos + 16);
			}
			static createBlock(e, t, n, i) {
				return (
					e.prep(8, 24), e.writeInt64(i), e.pad(4), e.writeInt32(n), e.writeInt64(t), e.offset()
				);
			}
		};
		Ui.Block = ka;
	});
	var ml = w((Vi) => {
		'use strict';
		Object.defineProperty(Vi, '__esModule', { value: !0 });
		Vi.FileBlock = Vi.Footer = void 0;
		var ir = fy(),
			_l = Ur(),
			hy = _l.flatbuffers.Long,
			s0 = _l.flatbuffers.Builder,
			o0 = _l.flatbuffers.ByteBuffer,
			py = et(),
			_y = ve(),
			a0 = Je(),
			yl = class {
				constructor(e, t = _y.MetadataVersion.V4, n, i) {
					(this.schema = e),
						(this.version = t),
						n && (this._recordBatches = n),
						i && (this._dictionaryBatches = i);
				}
				static decode(e) {
					e = new o0(a0.toUint8Array(e));
					let t = ir.Footer.getRootAsFooter(e),
						n = py.Schema.decode(t.schema());
					return new yy(n, t);
				}
				static encode(e) {
					let t = new s0(),
						n = py.Schema.encode(t, e.schema);
					ir.Footer.startRecordBatchesVector(t, e.numRecordBatches),
						[...e.recordBatches()]
							.slice()
							.reverse()
							.forEach((o) => fn.encode(t, o));
					let i = t.endVector();
					ir.Footer.startDictionariesVector(t, e.numDictionaries),
						[...e.dictionaryBatches()]
							.slice()
							.reverse()
							.forEach((o) => fn.encode(t, o));
					let s = t.endVector();
					return (
						ir.Footer.startFooter(t),
						ir.Footer.addSchema(t, n),
						ir.Footer.addVersion(t, _y.MetadataVersion.V4),
						ir.Footer.addRecordBatches(t, i),
						ir.Footer.addDictionaries(t, s),
						ir.Footer.finishFooterBuffer(t, ir.Footer.endFooter(t)),
						t.asUint8Array()
					);
				}
				get numRecordBatches() {
					return this._recordBatches.length;
				}
				get numDictionaries() {
					return this._dictionaryBatches.length;
				}
				*recordBatches() {
					for (let e, t = -1, n = this.numRecordBatches; ++t < n; )
						(e = this.getRecordBatch(t)) && (yield e);
				}
				*dictionaryBatches() {
					for (let e, t = -1, n = this.numDictionaries; ++t < n; )
						(e = this.getDictionaryBatch(t)) && (yield e);
				}
				getRecordBatch(e) {
					return (e >= 0 && e < this.numRecordBatches && this._recordBatches[e]) || null;
				}
				getDictionaryBatch(e) {
					return (e >= 0 && e < this.numDictionaries && this._dictionaryBatches[e]) || null;
				}
			};
		Vi.Footer = yl;
		var yy = class extends yl {
				constructor(e, t) {
					super(e, t.version());
					this._footer = t;
				}
				get numRecordBatches() {
					return this._footer.recordBatchesLength();
				}
				get numDictionaries() {
					return this._footer.dictionariesLength();
				}
				getRecordBatch(e) {
					if (e >= 0 && e < this.numRecordBatches) {
						let t = this._footer.recordBatches(e);
						if (t) return fn.decode(t);
					}
					return null;
				}
				getDictionaryBatch(e) {
					if (e >= 0 && e < this.numDictionaries) {
						let t = this._footer.dictionaries(e);
						if (t) return fn.decode(t);
					}
					return null;
				}
			},
			fn = class {
				constructor(e, t, n) {
					(this.metaDataLength = e),
						(this.offset = typeof n == 'number' ? n : n.low),
						(this.bodyLength = typeof t == 'number' ? t : t.low);
				}
				static decode(e) {
					return new fn(e.metaDataLength(), e.bodyLength(), e.offset());
				}
				static encode(e, t) {
					let { metaDataLength: n } = t,
						i = new hy(t.offset, 0),
						s = new hy(t.bodyLength, 0);
					return ir.Block.createBlock(e, i, n, s);
				}
			};
		Vi.FileBlock = fn;
	});
	var mn = w((yn) => {
		'use strict';
		Object.defineProperty(yn, '__esModule', { value: !0 });
		yn.AsyncByteStream = yn.ByteStream = yn.AsyncByteQueue = void 0;
		var hn = at(),
			pn = Ms(),
			my = Nn(),
			qs = yi(),
			bl = Je(),
			ki = ut(),
			gl = class extends qs.AsyncQueue {
				write(e) {
					if ((e = bl.toUint8Array(e)).byteLength > 0) return super.write(e);
				}
				toString(e = !1) {
					return e
						? my.decodeUtf8(this.toUint8Array(!0))
						: this.toUint8Array(!1).then(my.decodeUtf8);
				}
				toUint8Array(e = !1) {
					return e
						? bl.joinUint8Arrays(this._values)[0]
						: (() =>
								hn.__awaiter(this, void 0, void 0, function* () {
									var t, n;
									let i = [],
										s = 0;
									try {
										for (var o = hn.__asyncValues(this), l; (l = yield o.next()), !l.done; ) {
											let h = l.value;
											i.push(h), (s += h.byteLength);
										}
									} catch (h) {
										t = { error: h };
									} finally {
										try {
											l && !l.done && (n = o.return) && (yield n.call(o));
										} finally {
											if (t) throw t.error;
										}
									}
									return bl.joinUint8Arrays(i, s)[0];
								}))();
				}
			};
		yn.AsyncByteQueue = gl;
		var by = class {
			constructor(e) {
				e && (this.source = new gy(pn.default.fromIterable(e)));
			}
			[Symbol.iterator]() {
				return this;
			}
			next(e) {
				return this.source.next(e);
			}
			throw(e) {
				return this.source.throw(e);
			}
			return(e) {
				return this.source.return(e);
			}
			peek(e) {
				return this.source.peek(e);
			}
			read(e) {
				return this.source.read(e);
			}
		};
		yn.ByteStream = by;
		var Pa = class {
			constructor(e) {
				e instanceof Pa
					? (this.source = e.source)
					: e instanceof gl
					? (this.source = new _n(pn.default.fromAsyncIterable(e)))
					: ki.isReadableNodeStream(e)
					? (this.source = new _n(pn.default.fromNodeStream(e)))
					: ki.isReadableDOMStream(e)
					? (this.source = new _n(pn.default.fromDOMStream(e)))
					: ki.isFetchResponse(e)
					? (this.source = new _n(pn.default.fromDOMStream(e.body)))
					: ki.isIterable(e)
					? (this.source = new _n(pn.default.fromIterable(e)))
					: ki.isPromise(e)
					? (this.source = new _n(pn.default.fromAsyncIterable(e)))
					: ki.isAsyncIterable(e) && (this.source = new _n(pn.default.fromAsyncIterable(e)));
			}
			[Symbol.asyncIterator]() {
				return this;
			}
			next(e) {
				return this.source.next(e);
			}
			throw(e) {
				return this.source.throw(e);
			}
			return(e) {
				return this.source.return(e);
			}
			get closed() {
				return this.source.closed;
			}
			cancel(e) {
				return this.source.cancel(e);
			}
			peek(e) {
				return this.source.peek(e);
			}
			read(e) {
				return this.source.read(e);
			}
		};
		yn.AsyncByteStream = Pa;
		var gy = class {
				constructor(e) {
					this.source = e;
				}
				cancel(e) {
					this.return(e);
				}
				peek(e) {
					return this.next(e, 'peek').value;
				}
				read(e) {
					return this.next(e, 'read').value;
				}
				next(e, t = 'read') {
					return this.source.next({ cmd: t, size: e });
				}
				throw(e) {
					return Object.create((this.source.throw && this.source.throw(e)) || qs.ITERATOR_DONE);
				}
				return(e) {
					return Object.create((this.source.return && this.source.return(e)) || qs.ITERATOR_DONE);
				}
			},
			_n = class {
				constructor(e) {
					(this.source = e),
						(this._closedPromise = new Promise((t) => (this._closedPromiseResolve = t)));
				}
				cancel(e) {
					return hn.__awaiter(this, void 0, void 0, function* () {
						yield this.return(e);
					});
				}
				get closed() {
					return this._closedPromise;
				}
				read(e) {
					return hn.__awaiter(this, void 0, void 0, function* () {
						return (yield this.next(e, 'read')).value;
					});
				}
				peek(e) {
					return hn.__awaiter(this, void 0, void 0, function* () {
						return (yield this.next(e, 'peek')).value;
					});
				}
				next(e, t = 'read') {
					return hn.__awaiter(this, void 0, void 0, function* () {
						return yield this.source.next({ cmd: t, size: e });
					});
				}
				throw(e) {
					return hn.__awaiter(this, void 0, void 0, function* () {
						let t = (this.source.throw && (yield this.source.throw(e))) || qs.ITERATOR_DONE;
						return (
							this._closedPromiseResolve && this._closedPromiseResolve(),
							(this._closedPromiseResolve = void 0),
							Object.create(t)
						);
					});
				}
				return(e) {
					return hn.__awaiter(this, void 0, void 0, function* () {
						let t = (this.source.return && (yield this.source.return(e))) || qs.ITERATOR_DONE;
						return (
							this._closedPromiseResolve && this._closedPromiseResolve(),
							(this._closedPromiseResolve = void 0),
							Object.create(t)
						);
					});
				}
			};
	});
	var vl = w((Pi) => {
		'use strict';
		Object.defineProperty(Pi, '__esModule', { value: !0 });
		Pi.AsyncRandomAccessFile = Pi.RandomAccessFile = void 0;
		var bn = at(),
			vy = mn(),
			u0 = Je(),
			Ty = class extends vy.ByteStream {
				constructor(e, t) {
					super();
					(this.position = 0),
						(this.buffer = u0.toUint8Array(e)),
						(this.size = typeof t == 'undefined' ? this.buffer.byteLength : t);
				}
				readInt32(e) {
					let { buffer: t, byteOffset: n } = this.readAt(e, 4);
					return new DataView(t, n).getInt32(0, !0);
				}
				seek(e) {
					return (this.position = Math.min(e, this.size)), e < this.size;
				}
				read(e) {
					let { buffer: t, size: n, position: i } = this;
					return t && i < n
						? (typeof e != 'number' && (e = 1 / 0),
						  (this.position = Math.min(n, i + Math.min(n - i, e))),
						  t.subarray(i, this.position))
						: null;
				}
				readAt(e, t) {
					let n = this.buffer,
						i = Math.min(this.size, e + t);
					return n ? n.subarray(e, i) : new Uint8Array(t);
				}
				close() {
					this.buffer && (this.buffer = null);
				}
				throw(e) {
					return this.close(), { done: !0, value: e };
				}
				return(e) {
					return this.close(), { done: !0, value: e };
				}
			};
		Pi.RandomAccessFile = Ty;
		var wy = class extends vy.AsyncByteStream {
			constructor(e, t) {
				super();
				(this.position = 0),
					(this._handle = e),
					typeof t == 'number'
						? (this.size = t)
						: (this._pending = (() =>
								bn.__awaiter(this, void 0, void 0, function* () {
									(this.size = (yield e.stat()).size), delete this._pending;
								}))());
			}
			readInt32(e) {
				return bn.__awaiter(this, void 0, void 0, function* () {
					let { buffer: t, byteOffset: n } = yield this.readAt(e, 4);
					return new DataView(t, n).getInt32(0, !0);
				});
			}
			seek(e) {
				return bn.__awaiter(this, void 0, void 0, function* () {
					return (
						this._pending && (yield this._pending),
						(this.position = Math.min(e, this.size)),
						e < this.size
					);
				});
			}
			read(e) {
				return bn.__awaiter(this, void 0, void 0, function* () {
					this._pending && (yield this._pending);
					let { _handle: t, size: n, position: i } = this;
					if (t && i < n) {
						typeof e != 'number' && (e = 1 / 0);
						let s = i,
							o = 0,
							l = 0,
							h = Math.min(n, s + Math.min(n - s, e)),
							u = new Uint8Array(Math.max(0, (this.position = h) - s));
						for (; (s += l) < h && (o += l) < u.byteLength; )
							({ bytesRead: l } = yield t.read(u, o, u.byteLength - o, s));
						return u;
					}
					return null;
				});
			}
			readAt(e, t) {
				return bn.__awaiter(this, void 0, void 0, function* () {
					this._pending && (yield this._pending);
					let { _handle: n, size: i } = this;
					if (n && e + t < i) {
						let s = Math.min(i, e + t),
							o = new Uint8Array(s - e);
						return (yield n.read(o, 0, t, e)).buffer;
					}
					return new Uint8Array(t);
				});
			}
			close() {
				return bn.__awaiter(this, void 0, void 0, function* () {
					let e = this._handle;
					(this._handle = null), e && (yield e.close());
				});
			}
			throw(e) {
				return bn.__awaiter(this, void 0, void 0, function* () {
					return yield this.close(), { done: !0, value: e };
				});
			}
			return(e) {
				return bn.__awaiter(this, void 0, void 0, function* () {
					return yield this.close(), { done: !0, value: e };
				});
			}
		};
		Pi.AsyncRandomAccessFile = wy;
	});
	var wl = w((gr) => {
		'use strict';
		Object.defineProperty(gr, '__esModule', { value: !0 });
		gr.Int128 = gr.Int64 = gr.Uint64 = gr.BaseInt64 = void 0;
		var c0 = 1 << 16;
		function Li(r) {
			return r < 0 && (r = 4294967295 + r + 1), `0x${r.toString(16)}`;
		}
		var Ni = 8,
			Tl = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8],
			La = class {
				constructor(e) {
					this.buffer = e;
				}
				high() {
					return this.buffer[1];
				}
				low() {
					return this.buffer[0];
				}
				_times(e) {
					let t = new Uint32Array([
							this.buffer[1] >>> 16,
							this.buffer[1] & 65535,
							this.buffer[0] >>> 16,
							this.buffer[0] & 65535
						]),
						n = new Uint32Array([
							e.buffer[1] >>> 16,
							e.buffer[1] & 65535,
							e.buffer[0] >>> 16,
							e.buffer[0] & 65535
						]),
						i = t[3] * n[3];
					this.buffer[0] = i & 65535;
					let s = i >>> 16;
					return (
						(i = t[2] * n[3]),
						(s += i),
						(i = (t[3] * n[2]) >>> 0),
						(s += i),
						(this.buffer[0] += s << 16),
						(this.buffer[1] = s >>> 0 < i ? c0 : 0),
						(this.buffer[1] += s >>> 16),
						(this.buffer[1] += t[1] * n[3] + t[2] * n[2] + t[3] * n[1]),
						(this.buffer[1] += (t[0] * n[3] + t[1] * n[2] + t[2] * n[1] + t[3] * n[0]) << 16),
						this
					);
				}
				_plus(e) {
					let t = (this.buffer[0] + e.buffer[0]) >>> 0;
					(this.buffer[1] += e.buffer[1]),
						t < this.buffer[0] >>> 0 && ++this.buffer[1],
						(this.buffer[0] = t);
				}
				lessThan(e) {
					return (
						this.buffer[1] < e.buffer[1] ||
						(this.buffer[1] === e.buffer[1] && this.buffer[0] < e.buffer[0])
					);
				}
				equals(e) {
					return this.buffer[1] === e.buffer[1] && this.buffer[0] == e.buffer[0];
				}
				greaterThan(e) {
					return e.lessThan(this);
				}
				hex() {
					return `${Li(this.buffer[1])} ${Li(this.buffer[0])}`;
				}
			};
		gr.BaseInt64 = La;
		var fe = class extends La {
			times(e) {
				return this._times(e), this;
			}
			plus(e) {
				return this._plus(e), this;
			}
			static from(e, t = new Uint32Array(2)) {
				return fe.fromString(typeof e == 'string' ? e : e.toString(), t);
			}
			static fromNumber(e, t = new Uint32Array(2)) {
				return fe.fromString(e.toString(), t);
			}
			static fromString(e, t = new Uint32Array(2)) {
				let n = e.length,
					i = new fe(t);
				for (let s = 0; s < n; ) {
					let o = Ni < n - s ? Ni : n - s,
						l = new fe(new Uint32Array([parseInt(e.substr(s, o), 10), 0])),
						h = new fe(new Uint32Array([Tl[o], 0]));
					i.times(h), i.plus(l), (s += o);
				}
				return i;
			}
			static convertArray(e) {
				let t = new Uint32Array(e.length * 2);
				for (let n = -1, i = e.length; ++n < i; )
					fe.from(e[n], new Uint32Array(t.buffer, t.byteOffset + 2 * n * 4, 2));
				return t;
			}
			static multiply(e, t) {
				return new fe(new Uint32Array(e.buffer)).times(t);
			}
			static add(e, t) {
				return new fe(new Uint32Array(e.buffer)).plus(t);
			}
		};
		gr.Uint64 = fe;
		var vt = class extends La {
			negate() {
				return (
					(this.buffer[0] = ~this.buffer[0] + 1),
					(this.buffer[1] = ~this.buffer[1]),
					this.buffer[0] == 0 && ++this.buffer[1],
					this
				);
			}
			times(e) {
				return this._times(e), this;
			}
			plus(e) {
				return this._plus(e), this;
			}
			lessThan(e) {
				let t = this.buffer[1] << 0,
					n = e.buffer[1] << 0;
				return t < n || (t === n && this.buffer[0] < e.buffer[0]);
			}
			static from(e, t = new Uint32Array(2)) {
				return vt.fromString(typeof e == 'string' ? e : e.toString(), t);
			}
			static fromNumber(e, t = new Uint32Array(2)) {
				return vt.fromString(e.toString(), t);
			}
			static fromString(e, t = new Uint32Array(2)) {
				let n = e.startsWith('-'),
					i = e.length,
					s = new vt(t);
				for (let o = n ? 1 : 0; o < i; ) {
					let l = Ni < i - o ? Ni : i - o,
						h = new vt(new Uint32Array([parseInt(e.substr(o, l), 10), 0])),
						u = new vt(new Uint32Array([Tl[l], 0]));
					s.times(u), s.plus(h), (o += l);
				}
				return n ? s.negate() : s;
			}
			static convertArray(e) {
				let t = new Uint32Array(e.length * 2);
				for (let n = -1, i = e.length; ++n < i; )
					vt.from(e[n], new Uint32Array(t.buffer, t.byteOffset + 2 * n * 4, 2));
				return t;
			}
			static multiply(e, t) {
				return new vt(new Uint32Array(e.buffer)).times(t);
			}
			static add(e, t) {
				return new vt(new Uint32Array(e.buffer)).plus(t);
			}
		};
		gr.Int64 = vt;
		var sr = class {
			constructor(e) {
				this.buffer = e;
			}
			high() {
				return new vt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
			}
			low() {
				return new vt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
			}
			negate() {
				return (
					(this.buffer[0] = ~this.buffer[0] + 1),
					(this.buffer[1] = ~this.buffer[1]),
					(this.buffer[2] = ~this.buffer[2]),
					(this.buffer[3] = ~this.buffer[3]),
					this.buffer[0] == 0 && ++this.buffer[1],
					this.buffer[1] == 0 && ++this.buffer[2],
					this.buffer[2] == 0 && ++this.buffer[3],
					this
				);
			}
			times(e) {
				let t = new fe(new Uint32Array([this.buffer[3], 0])),
					n = new fe(new Uint32Array([this.buffer[2], 0])),
					i = new fe(new Uint32Array([this.buffer[1], 0])),
					s = new fe(new Uint32Array([this.buffer[0], 0])),
					o = new fe(new Uint32Array([e.buffer[3], 0])),
					l = new fe(new Uint32Array([e.buffer[2], 0])),
					h = new fe(new Uint32Array([e.buffer[1], 0])),
					u = new fe(new Uint32Array([e.buffer[0], 0])),
					m = fe.multiply(s, u);
				this.buffer[0] = m.low();
				let E = new fe(new Uint32Array([m.high(), 0]));
				return (
					(m = fe.multiply(i, u)),
					E.plus(m),
					(m = fe.multiply(s, h)),
					E.plus(m),
					(this.buffer[1] = E.low()),
					(this.buffer[3] = E.lessThan(m) ? 1 : 0),
					(this.buffer[2] = E.high()),
					new fe(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2))
						.plus(fe.multiply(n, u))
						.plus(fe.multiply(i, h))
						.plus(fe.multiply(s, l)),
					(this.buffer[3] += fe
						.multiply(t, u)
						.plus(fe.multiply(n, h))
						.plus(fe.multiply(i, l))
						.plus(fe.multiply(s, o))
						.low()),
					this
				);
			}
			plus(e) {
				let t = new Uint32Array(4);
				return (
					(t[3] = (this.buffer[3] + e.buffer[3]) >>> 0),
					(t[2] = (this.buffer[2] + e.buffer[2]) >>> 0),
					(t[1] = (this.buffer[1] + e.buffer[1]) >>> 0),
					(t[0] = (this.buffer[0] + e.buffer[0]) >>> 0),
					t[0] < this.buffer[0] >>> 0 && ++t[1],
					t[1] < this.buffer[1] >>> 0 && ++t[2],
					t[2] < this.buffer[2] >>> 0 && ++t[3],
					(this.buffer[3] = t[3]),
					(this.buffer[2] = t[2]),
					(this.buffer[1] = t[1]),
					(this.buffer[0] = t[0]),
					this
				);
			}
			hex() {
				return `${Li(this.buffer[3])} ${Li(this.buffer[2])} ${Li(this.buffer[1])} ${Li(
					this.buffer[0]
				)}`;
			}
			static multiply(e, t) {
				return new sr(new Uint32Array(e.buffer)).times(t);
			}
			static add(e, t) {
				return new sr(new Uint32Array(e.buffer)).plus(t);
			}
			static from(e, t = new Uint32Array(4)) {
				return sr.fromString(typeof e == 'string' ? e : e.toString(), t);
			}
			static fromNumber(e, t = new Uint32Array(4)) {
				return sr.fromString(e.toString(), t);
			}
			static fromString(e, t = new Uint32Array(4)) {
				let n = e.startsWith('-'),
					i = e.length,
					s = new sr(t);
				for (let o = n ? 1 : 0; o < i; ) {
					let l = Ni < i - o ? Ni : i - o,
						h = new sr(new Uint32Array([parseInt(e.substr(o, l), 10), 0, 0, 0])),
						u = new sr(new Uint32Array([Tl[l], 0, 0, 0]));
					s.times(u), s.plus(h), (o += l);
				}
				return n ? s.negate() : s;
			}
			static convertArray(e) {
				let t = new Uint32Array(e.length * 4);
				for (let n = -1, i = e.length; ++n < i; )
					sr.from(e[n], new Uint32Array(t.buffer, t.byteOffset + 4 * 4 * n, 4));
				return t;
			}
		};
		gr.Int128 = sr;
	});
	var Ay = w((xi) => {
		'use strict';
		Object.defineProperty(xi, '__esModule', { value: !0 });
		xi.JSONVectorLoader = xi.VectorLoader = void 0;
		var Ze = rr(),
			l0 = et(),
			Cr = de(),
			d0 = it(),
			Iy = _r(),
			f0 = Nn(),
			Na = wl(),
			By = ve(),
			vr = Je(),
			Il = class extends d0.Visitor {
				constructor(e, t, n, i) {
					super();
					(this.nodesIndex = -1),
						(this.buffersIndex = -1),
						(this.bytes = e),
						(this.nodes = t),
						(this.buffers = n),
						(this.dictionaries = i);
				}
				visit(e) {
					return super.visit(e instanceof l0.Field ? e.type : e);
				}
				visitNull(e, { length: t } = this.nextFieldNode()) {
					return Ze.Data.Null(e, 0, t);
				}
				visitBool(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.Bool(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitInt(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.Int(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitFloat(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.Float(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitUtf8(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.Utf8(
						e,
						0,
						t,
						n,
						this.readNullBitmap(e, n),
						this.readOffsets(e),
						this.readData(e)
					);
				}
				visitBinary(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.Binary(
						e,
						0,
						t,
						n,
						this.readNullBitmap(e, n),
						this.readOffsets(e),
						this.readData(e)
					);
				}
				visitFixedSizeBinary(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.FixedSizeBinary(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitDate(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.Date(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitTimestamp(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.Timestamp(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitTime(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.Time(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitDecimal(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.Decimal(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitList(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.List(
						e,
						0,
						t,
						n,
						this.readNullBitmap(e, n),
						this.readOffsets(e),
						this.visit(e.children[0])
					);
				}
				visitStruct(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.Struct(e, 0, t, n, this.readNullBitmap(e, n), this.visitMany(e.children));
				}
				visitUnion(e) {
					return e.mode === By.UnionMode.Sparse
						? this.visitSparseUnion(e)
						: this.visitDenseUnion(e);
				}
				visitDenseUnion(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.Union(
						e,
						0,
						t,
						n,
						this.readNullBitmap(e, n),
						this.readTypeIds(e),
						this.readOffsets(e),
						this.visitMany(e.children)
					);
				}
				visitSparseUnion(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.Union(
						e,
						0,
						t,
						n,
						this.readNullBitmap(e, n),
						this.readTypeIds(e),
						this.visitMany(e.children)
					);
				}
				visitDictionary(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.Dictionary(
						e,
						0,
						t,
						n,
						this.readNullBitmap(e, n),
						this.readData(e.indices),
						this.readDictionary(e)
					);
				}
				visitInterval(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.Interval(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitFixedSizeList(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.FixedSizeList(
						e,
						0,
						t,
						n,
						this.readNullBitmap(e, n),
						this.visit(e.children[0])
					);
				}
				visitMap(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return Ze.Data.Map(
						e,
						0,
						t,
						n,
						this.readNullBitmap(e, n),
						this.readOffsets(e),
						this.visit(e.children[0])
					);
				}
				nextFieldNode() {
					return this.nodes[++this.nodesIndex];
				}
				nextBufferRange() {
					return this.buffers[++this.buffersIndex];
				}
				readNullBitmap(e, t, n = this.nextBufferRange()) {
					return (t > 0 && this.readData(e, n)) || new Uint8Array(0);
				}
				readOffsets(e, t) {
					return this.readData(e, t);
				}
				readTypeIds(e, t) {
					return this.readData(e, t);
				}
				readData(e, { length: t, offset: n } = this.nextBufferRange()) {
					return this.bytes.subarray(n, n + t);
				}
				readDictionary(e) {
					return this.dictionaries.get(e.id);
				}
			};
		xi.VectorLoader = Il;
		var Sy = class extends Il {
			constructor(e, t, n, i) {
				super(new Uint8Array(0), t, n, i);
				this.sources = e;
			}
			readNullBitmap(e, t, { offset: n } = this.nextBufferRange()) {
				return t <= 0 ? new Uint8Array(0) : Iy.packBools(this.sources[n]);
			}
			readOffsets(e, { offset: t } = this.nextBufferRange()) {
				return vr.toArrayBufferView(Uint8Array, vr.toArrayBufferView(Int32Array, this.sources[t]));
			}
			readTypeIds(e, { offset: t } = this.nextBufferRange()) {
				return vr.toArrayBufferView(Uint8Array, vr.toArrayBufferView(e.ArrayType, this.sources[t]));
			}
			readData(e, { offset: t } = this.nextBufferRange()) {
				let { sources: n } = this;
				return Cr.DataType.isTimestamp(e) ||
					((Cr.DataType.isInt(e) || Cr.DataType.isTime(e)) && e.bitWidth === 64) ||
					(Cr.DataType.isDate(e) && e.unit === By.DateUnit.MILLISECOND)
					? vr.toArrayBufferView(Uint8Array, Na.Int64.convertArray(n[t]))
					: Cr.DataType.isDecimal(e)
					? vr.toArrayBufferView(Uint8Array, Na.Int128.convertArray(n[t]))
					: Cr.DataType.isBinary(e) || Cr.DataType.isFixedSizeBinary(e)
					? h0(n[t])
					: Cr.DataType.isBool(e)
					? Iy.packBools(n[t])
					: Cr.DataType.isUtf8(e)
					? f0.encodeUtf8(n[t].join(''))
					: vr.toArrayBufferView(
							Uint8Array,
							vr.toArrayBufferView(
								e.ArrayType,
								n[t].map((i) => +i)
							)
					  );
			}
		};
		xi.JSONVectorLoader = Sy;
		function h0(r) {
			let e = r.join(''),
				t = new Uint8Array(e.length / 2);
			for (let n = 0; n < e.length; n += 2) t[n >> 1] = parseInt(e.substr(n, 2), 16);
			return t;
		}
	});
	var Ws = w((ji) => {
		'use strict';
		Object.defineProperty(ji, '__esModule', { value: !0 });
		ji.StructRow = ji.MapRow = void 0;
		var Dy = Mc(),
			st = Symbol.for('parent'),
			Ci = Symbol.for('rowIndex'),
			Tt = Symbol.for('keyToIdx'),
			wt = Symbol.for('idxToVal'),
			Bl = Symbol.for('nodejs.util.inspect.custom'),
			Tr = class {
				constructor(e, t) {
					(this[st] = e), (this.size = t);
				}
				entries() {
					return this[Symbol.iterator]();
				}
				has(e) {
					return this.get(e) !== void 0;
				}
				get(e) {
					let t;
					if (e != null) {
						let n = this[Tt] || (this[Tt] = new Map()),
							i = n.get(e);
						if (i !== void 0) {
							let s = this[wt] || (this[wt] = new Array(this.size));
							(t = s[i]) !== void 0 || (s[i] = t = this.getValue(i));
						} else if ((i = this.getIndex(e)) > -1) {
							n.set(e, i);
							let s = this[wt] || (this[wt] = new Array(this.size));
							(t = s[i]) !== void 0 || (s[i] = t = this.getValue(i));
						}
					}
					return t;
				}
				set(e, t) {
					if (e != null) {
						let n = this[Tt] || (this[Tt] = new Map()),
							i = n.get(e);
						if ((i === void 0 && n.set(e, (i = this.getIndex(e))), i > -1)) {
							let s = this[wt] || (this[wt] = new Array(this.size));
							s[i] = this.setValue(i, t);
						}
					}
					return this;
				}
				clear() {
					throw new Error(`Clearing ${this[Symbol.toStringTag]} not supported.`);
				}
				delete(e) {
					throw new Error(`Deleting ${this[Symbol.toStringTag]} values not supported.`);
				}
				*[Symbol.iterator]() {
					let e = this.keys(),
						t = this.values(),
						n = this[Tt] || (this[Tt] = new Map()),
						i = this[wt] || (this[wt] = new Array(this.size));
					for (let s, o, l = 0, h, u; !((h = e.next()).done || (u = t.next()).done); ++l)
						(s = h.value), (o = u.value), (i[l] = o), n.has(s) || n.set(s, l), yield [s, o];
				}
				forEach(e, t) {
					let n = this.keys(),
						i = this.values(),
						s = t === void 0 ? e : (h, u, m) => e.call(t, h, u, m),
						o = this[Tt] || (this[Tt] = new Map()),
						l = this[wt] || (this[wt] = new Array(this.size));
					for (let h, u, m = 0, E, M; !((E = n.next()).done || (M = i.next()).done); ++m)
						(h = E.value), (u = M.value), (l[m] = u), o.has(h) || o.set(h, m), s(u, h, this);
				}
				toArray() {
					return [...this.values()];
				}
				toJSON() {
					let e = {};
					return this.forEach((t, n) => (e[n] = t)), e;
				}
				inspect() {
					return this.toString();
				}
				[Bl]() {
					return this.toString();
				}
				toString() {
					let e = [];
					return (
						this.forEach((t, n) => {
							(n = Dy.valueToString(n)), (t = Dy.valueToString(t)), e.push(`${n}: ${t}`);
						}),
						`{ ${e.join(', ')} }`
					);
				}
			};
		Tr[Symbol.toStringTag] = ((r) => (
			Object.defineProperties(r, {
				size: { writable: !0, enumerable: !1, configurable: !1, value: 0 },
				[st]: { writable: !0, enumerable: !1, configurable: !1, value: null },
				[Ci]: { writable: !0, enumerable: !1, configurable: !1, value: -1 }
			}),
			(r[Symbol.toStringTag] = 'Row')
		))(Tr.prototype);
		var Oy = class extends Tr {
			constructor(e) {
				super(e, e.length);
				return p0(this);
			}
			keys() {
				return this[st].getChildAt(0)[Symbol.iterator]();
			}
			values() {
				return this[st].getChildAt(1)[Symbol.iterator]();
			}
			getKey(e) {
				return this[st].getChildAt(0).get(e);
			}
			getIndex(e) {
				return this[st].getChildAt(0).indexOf(e);
			}
			getValue(e) {
				return this[st].getChildAt(1).get(e);
			}
			setValue(e, t) {
				this[st].getChildAt(1).set(e, t);
			}
		};
		ji.MapRow = Oy;
		var Fy = class extends Tr {
			constructor(e) {
				super(e, e.type.children.length);
				return Ey(this);
			}
			*keys() {
				for (let e of this[st].type.children) yield e.name;
			}
			*values() {
				for (let e of this[st].type.children) yield this[e.name];
			}
			getKey(e) {
				return this[st].type.children[e].name;
			}
			getIndex(e) {
				return this[st].type.children.findIndex((t) => t.name === e);
			}
			getValue(e) {
				return this[st].getChildAt(e).get(this[Ci]);
			}
			setValue(e, t) {
				return this[st].getChildAt(e).set(this[Ci], t);
			}
		};
		ji.StructRow = Fy;
		Object.setPrototypeOf(Tr.prototype, Map.prototype);
		var Ey = (() => {
				let r = { enumerable: !0, configurable: !1, get: null, set: null };
				return (e) => {
					let t = -1,
						n = e[Tt] || (e[Tt] = new Map()),
						i = (o) =>
							function () {
								return this.get(o);
							},
						s = (o) =>
							function (l) {
								return this.set(o, l);
							};
					for (let o of e.keys())
						n.set(o, ++t),
							(r.get = i(o)),
							(r.set = s(o)),
							Object.prototype.hasOwnProperty.call(e, o) ||
								((r.enumerable = !0), Object.defineProperty(e, o, r)),
							Object.prototype.hasOwnProperty.call(e, t) ||
								((r.enumerable = !1), Object.defineProperty(e, t, r));
					return (r.get = r.set = null), e;
				};
			})(),
			p0 = (() => {
				if (typeof Proxy == 'undefined') return Ey;
				let r = Tr.prototype.has,
					e = Tr.prototype.get,
					t = Tr.prototype.set,
					n = Tr.prototype.getKey,
					i = {
						isExtensible() {
							return !1;
						},
						deleteProperty() {
							return !1;
						},
						preventExtensions() {
							return !0;
						},
						ownKeys(s) {
							return [...s.keys()].map((o) => `${o}`);
						},
						has(s, o) {
							switch (o) {
								case 'getKey':
								case 'getIndex':
								case 'getValue':
								case 'setValue':
								case 'toArray':
								case 'toJSON':
								case 'inspect':
								case 'constructor':
								case 'isPrototypeOf':
								case 'propertyIsEnumerable':
								case 'toString':
								case 'toLocaleString':
								case 'valueOf':
								case 'size':
								case 'has':
								case 'get':
								case 'set':
								case 'clear':
								case 'delete':
								case 'keys':
								case 'values':
								case 'entries':
								case 'forEach':
								case '__proto__':
								case '__defineGetter__':
								case '__defineSetter__':
								case 'hasOwnProperty':
								case '__lookupGetter__':
								case '__lookupSetter__':
								case Symbol.iterator:
								case Symbol.toStringTag:
								case st:
								case Ci:
								case wt:
								case Tt:
								case Bl:
									return !0;
							}
							return typeof o == 'number' && !s.has(o) && (o = s.getKey(o)), s.has(o);
						},
						get(s, o, l) {
							switch (o) {
								case 'getKey':
								case 'getIndex':
								case 'getValue':
								case 'setValue':
								case 'toArray':
								case 'toJSON':
								case 'inspect':
								case 'constructor':
								case 'isPrototypeOf':
								case 'propertyIsEnumerable':
								case 'toString':
								case 'toLocaleString':
								case 'valueOf':
								case 'size':
								case 'has':
								case 'get':
								case 'set':
								case 'clear':
								case 'delete':
								case 'keys':
								case 'values':
								case 'entries':
								case 'forEach':
								case '__proto__':
								case '__defineGetter__':
								case '__defineSetter__':
								case 'hasOwnProperty':
								case '__lookupGetter__':
								case '__lookupSetter__':
								case Symbol.iterator:
								case Symbol.toStringTag:
								case st:
								case Ci:
								case wt:
								case Tt:
								case Bl:
									return Reflect.get(s, o, l);
							}
							return typeof o == 'number' && !r.call(l, o) && (o = n.call(l, o)), e.call(l, o);
						},
						set(s, o, l, h) {
							switch (o) {
								case st:
								case Ci:
								case wt:
								case Tt:
									return Reflect.set(s, o, l, h);
								case 'getKey':
								case 'getIndex':
								case 'getValue':
								case 'setValue':
								case 'toArray':
								case 'toJSON':
								case 'inspect':
								case 'constructor':
								case 'isPrototypeOf':
								case 'propertyIsEnumerable':
								case 'toString':
								case 'toLocaleString':
								case 'valueOf':
								case 'size':
								case 'has':
								case 'get':
								case 'set':
								case 'clear':
								case 'delete':
								case 'keys':
								case 'values':
								case 'entries':
								case 'forEach':
								case '__proto__':
								case '__defineGetter__':
								case '__defineSetter__':
								case 'hasOwnProperty':
								case '__lookupGetter__':
								case '__lookupSetter__':
								case Symbol.iterator:
								case Symbol.toStringTag:
									return !1;
							}
							return (
								typeof o == 'number' && !r.call(h, o) && (o = n.call(h, o)),
								r.call(h, o) ? !!t.call(h, o, l) : !1
							);
						}
					};
				return (s) => new Proxy(s, i);
			})();
	});
	var Hs = w((gn) => {
		'use strict';
		Object.defineProperty(gn, '__esModule', { value: !0 });
		gn.createElementComparator = gn.clampRange = gn.clampIndex = void 0;
		var My = Ce(),
			Ry = Ws(),
			_0 = Je(),
			Uy = ut();
		function y0(r, e, t) {
			let n = r.length,
				i = e > -1 ? e : n + (e % n);
			return t ? t(r, i) : i;
		}
		gn.clampIndex = y0;
		var Vy;
		function m0(r, e, t, n) {
			let { length: i = 0 } = r,
				s = typeof e != 'number' ? 0 : e,
				o = typeof t != 'number' ? i : t;
			return (
				s < 0 && (s = ((s % i) + i) % i),
				o < 0 && (o = ((o % i) + i) % i),
				o < s && ((Vy = s), (s = o), (o = Vy)),
				o > i && (o = i),
				n ? n(r, s, o) : [s, o]
			);
		}
		gn.clampRange = m0;
		var b0 = Uy.BigIntAvailable ? Uy.BigInt(0) : 0,
			ky = (r) => r !== r;
		function zs(r) {
			let e = typeof r;
			if (e !== 'object' || r === null)
				return ky(r) ? ky : e !== 'bigint' ? (t) => t === r : (t) => b0 + t === r;
			if (r instanceof Date) {
				let t = r.valueOf();
				return (n) => (n instanceof Date ? n.valueOf() === t : !1);
			}
			return ArrayBuffer.isView(r)
				? (t) => (t ? _0.compareArrayLike(r, t) : !1)
				: r instanceof Map
				? v0(r)
				: Array.isArray(r)
				? g0(r)
				: r instanceof My.Vector
				? T0(r)
				: w0(r);
		}
		gn.createElementComparator = zs;
		function g0(r) {
			let e = [];
			for (let t = -1, n = r.length; ++t < n; ) e[t] = zs(r[t]);
			return xa(e);
		}
		function v0(r) {
			let e = -1,
				t = [];
			return r.forEach((n) => (t[++e] = zs(n))), xa(t);
		}
		function T0(r) {
			let e = [];
			for (let t = -1, n = r.length; ++t < n; ) e[t] = zs(r.get(t));
			return xa(e);
		}
		function w0(r) {
			let e = Object.keys(r);
			if (e.length === 0) return () => !1;
			let t = [];
			for (let n = -1, i = e.length; ++n < i; ) t[n] = zs(r[e[n]]);
			return xa(t, e);
		}
		function xa(r, e) {
			return (t) => {
				if (!t || typeof t != 'object') return !1;
				switch (t.constructor) {
					case Array:
						return I0(r, t);
					case Map:
					case Ry.MapRow:
					case Ry.StructRow:
						return Py(r, t, t.keys());
					case Object:
					case void 0:
						return Py(r, t, e || Object.keys(t));
				}
				return t instanceof My.Vector ? B0(r, t) : !1;
			};
		}
		function I0(r, e) {
			let t = r.length;
			if (e.length !== t) return !1;
			for (let n = -1; ++n < t; ) if (!r[n](e[n])) return !1;
			return !0;
		}
		function B0(r, e) {
			let t = r.length;
			if (e.length !== t) return !1;
			for (let n = -1; ++n < t; ) if (!r[n](e.get(n))) return !1;
			return !0;
		}
		function Py(r, e, t) {
			let n = t[Symbol.iterator](),
				i = e instanceof Map ? e.keys() : Object.keys(e)[Symbol.iterator](),
				s = e instanceof Map ? e.values() : Object.values(e)[Symbol.iterator](),
				o = 0,
				l = r.length,
				h = s.next(),
				u = n.next(),
				m = i.next();
			for (
				;
				o < l && !u.done && !m.done && !h.done && !(u.value !== m.value || !r[o](h.value));
				++o, u = n.next(), m = i.next(), h = s.next()
			);
			return o === l && u.done && m.done && h.done
				? !0
				: (n.return && n.return(), i.return && i.return(), s.return && s.return(), !1);
		}
	});
	var Qn = w((tt) => {
		'use strict';
		Object.defineProperty(tt, '__esModule', { value: !0 });
		tt.selectColumnChildrenArgs =
			tt.selectVectorChildrenArgs =
			tt.selectChunkArgs =
			tt.selectFieldArgs =
			tt.selectColumnArgs =
			tt.selectArgs =
			tt.arrayTypeToDataType =
			tt.isTypedArray =
				void 0;
		var Sl = rr(),
			Ly = et(),
			jr = Wi(),
			qi = Ce(),
			qt = de(),
			S0 = Tn(),
			vn = Array.isArray;
		function Al(r) {
			return ArrayBuffer.isView(r) && 'BYTES_PER_ELEMENT' in r;
		}
		tt.isTypedArray = Al;
		function Ny(r) {
			switch (r) {
				case Int8Array:
					return qt.Int8;
				case Int16Array:
					return qt.Int16;
				case Int32Array:
					return qt.Int32;
				case BigInt64Array:
					return qt.Int64;
				case Uint8Array:
					return qt.Uint8;
				case Uint16Array:
					return qt.Uint16;
				case Uint32Array:
					return qt.Uint32;
				case BigUint64Array:
					return qt.Uint64;
				case Float32Array:
					return qt.Float32;
				case Float64Array:
					return qt.Float64;
				default:
					return null;
			}
		}
		tt.arrayTypeToDataType = Ny;
		function A0(r) {
			let e = Ny(r.constructor);
			if (!e) throw new TypeError('Unrecognized Array input');
			let t = new e(),
				n = Sl.Data.new(t, 0, r.length, 0, [void 0, r]);
			return qi.Vector.new(n);
		}
		tt.selectArgs = (r, e) => Ca(r, e, [], 0);
		tt.selectColumnArgs = (r) => {
			let [e, t] = Ol(r, [[], []]);
			return t.map((n, i) =>
				n instanceof jr.Column
					? jr.Column.new(n.field.clone(e[i]), n)
					: n instanceof qi.Vector
					? jr.Column.new(e[i], n)
					: Al(n)
					? jr.Column.new(e[i], A0(n))
					: jr.Column.new(e[i], [])
			);
		};
		tt.selectFieldArgs = (r) => Ol(r, [[], []]);
		tt.selectChunkArgs = (r, e) => Dl(r, e, [], 0);
		tt.selectVectorChildrenArgs = (r, e) => xy(r, e, [], 0);
		tt.selectColumnChildrenArgs = (r, e) => Cy(r, e, [], 0);
		function Ca(r, e, t, n) {
			let i,
				s = n,
				o = -1,
				l = e.length;
			for (; ++o < l; )
				vn((i = e[o])) ? (s = Ca(r, i, t, s).length) : i instanceof r && (t[s++] = i);
			return t;
		}
		function Dl(r, e, t, n) {
			let i,
				s = n,
				o = -1,
				l = e.length;
			for (; ++o < l; )
				vn((i = e[o]))
					? (s = Dl(r, i, t, s).length)
					: i instanceof S0.Chunked
					? (s = Dl(r, i.chunks, t, s).length)
					: i instanceof r && (t[s++] = i);
			return t;
		}
		function xy(r, e, t, n) {
			let i,
				s = n,
				o = -1,
				l = e.length;
			for (; ++o < l; )
				vn((i = e[o]))
					? (s = xy(r, i, t, s).length)
					: i instanceof r
					? (s = Ca(
							qi.Vector,
							i.schema.fields.map((h, u) => i.getChildAt(u)),
							t,
							s
					  ).length)
					: i instanceof qi.Vector && (t[s++] = i);
			return t;
		}
		function Cy(r, e, t, n) {
			let i,
				s = n,
				o = -1,
				l = e.length;
			for (; ++o < l; )
				vn((i = e[o]))
					? (s = Cy(r, i, t, s).length)
					: i instanceof r
					? (s = Ca(
							jr.Column,
							i.schema.fields.map((h, u) => jr.Column.new(h, i.getChildAt(u))),
							t,
							s
					  ).length)
					: i instanceof jr.Column && (t[s++] = i);
			return t;
		}
		var D0 = (r, [e, t], n) => ((r[0][n] = e), (r[1][n] = t), r);
		function Ol(r, e) {
			let t, n;
			switch ((n = r.length)) {
				case 0:
					return e;
				case 1:
					if (((t = e[0]), !r[0])) return e;
					if (vn(r[0])) return Ol(r[0], e);
					r[0] instanceof Sl.Data ||
						r[0] instanceof qi.Vector ||
						Al(r[0]) ||
						r[0] instanceof qt.DataType ||
						([t, r] = Object.entries(r[0]).reduce(D0, e));
					break;
				default:
					vn((t = r[n - 1]))
						? (r = vn(r[0]) ? r[0] : r.slice(0, n - 1))
						: ((r = vn(r[0]) ? r[0] : r), (t = []));
			}
			let i = -1,
				s = -1,
				o = -1,
				l = r.length,
				h,
				u,
				[m, E] = e;
			for (; ++o < l; )
				(u = r[o]),
					u instanceof jr.Column && (E[++s] = u)
						? (m[++i] = u.field.clone(t[o], u.type, !0))
						: (({ [o]: h = o } = t),
						  u instanceof qt.DataType && (E[++s] = u)
								? (m[++i] = Ly.Field.new(h, u, !0))
								: (u == null ? void 0 : u.type) &&
								  (E[++s] = u) &&
								  (u instanceof Sl.Data && (E[s] = u = qi.Vector.new(u)),
								  (m[++i] = Ly.Field.new(h, u.type, !0))));
			return e;
		}
	});
	var Tn = w((ja) => {
		'use strict';
		Object.defineProperty(ja, '__esModule', { value: !0 });
		ja.Chunked = void 0;
		var O0 = Hs(),
			jy = de(),
			F0 = Qn(),
			qy = Ce(),
			Wy = class {
				constructor(e) {
					(this.chunks = e), (this.chunkIndex = 0), (this.chunkIterator = this.getChunkIterator());
				}
				next() {
					for (; this.chunkIndex < this.chunks.length; ) {
						let e = this.chunkIterator.next();
						if (!e.done) return e;
						++this.chunkIndex < this.chunks.length &&
							(this.chunkIterator = this.getChunkIterator());
					}
					return { done: !0, value: null };
				}
				getChunkIterator() {
					return this.chunks[this.chunkIndex][Symbol.iterator]();
				}
				[Symbol.iterator]() {
					return this;
				}
			},
			qr = class extends qy.AbstractVector {
				constructor(e, t = [], n = E0(t)) {
					super();
					(this._nullCount = -1),
						(this._type = e),
						(this._chunks = t),
						(this._chunkOffsets = n),
						(this._length = n[n.length - 1]),
						(this._numChildren = (this._type.children || []).length);
				}
				static flatten(...e) {
					return F0.selectChunkArgs(qy.Vector, e);
				}
				static concat(...e) {
					let t = qr.flatten(...e);
					return new qr(t[0].type, t);
				}
				get type() {
					return this._type;
				}
				get length() {
					return this._length;
				}
				get chunks() {
					return this._chunks;
				}
				get typeId() {
					return this._type.typeId;
				}
				get VectorName() {
					return `Chunked<${this._type}>`;
				}
				get data() {
					return this._chunks[0] ? this._chunks[0].data : null;
				}
				get ArrayType() {
					return this._type.ArrayType;
				}
				get numChildren() {
					return this._numChildren;
				}
				get stride() {
					return this._chunks[0] ? this._chunks[0].stride : 1;
				}
				get byteLength() {
					return this._chunks.reduce((e, t) => e + t.byteLength, 0);
				}
				get nullCount() {
					let e = this._nullCount;
					return (
						e < 0 && (this._nullCount = e = this._chunks.reduce((t, { nullCount: n }) => t + n, 0)),
						e
					);
				}
				get indices() {
					if (jy.DataType.isDictionary(this._type)) {
						if (!this._indices) {
							let e = this._chunks;
							this._indices = e.length === 1 ? e[0].indices : qr.concat(...e.map((t) => t.indices));
						}
						return this._indices;
					}
					return null;
				}
				get dictionary() {
					return jy.DataType.isDictionary(this._type)
						? this._chunks[this._chunks.length - 1].data.dictionary
						: null;
				}
				[Symbol.iterator]() {
					return new Wy(this._chunks);
				}
				clone(e = this._chunks) {
					return new qr(this._type, e);
				}
				concat(...e) {
					return this.clone(qr.flatten(this, ...e));
				}
				slice(e, t) {
					return O0.clampRange(this, e, t, this._sliceInternal);
				}
				getChildAt(e) {
					if (e < 0 || e >= this._numChildren) return null;
					let t = this._children || (this._children = []),
						n,
						i,
						s;
					return (n = t[e])
						? n
						: (i = (this._type.children || [])[e]) &&
						  ((s = this._chunks.map((o) => o.getChildAt(e)).filter((o) => o != null)),
						  s.length > 0)
						? (t[e] = new qr(i.type, s))
						: null;
				}
				search(e, t) {
					let n = e,
						i = this._chunkOffsets,
						s = i.length - 1;
					if (n < 0 || n >= i[s]) return null;
					if (s <= 1) return t ? t(this, 0, n) : [0, n];
					let o = 0,
						l = 0,
						h = 0;
					do {
						if (o + 1 === s) return t ? t(this, o, n - l) : [o, n - l];
						(h = (o + (s - o) / 2) | 0), n >= i[h] ? (o = h) : (s = h);
					} while (n < i[s] && n >= (l = i[o]));
					return null;
				}
				isValid(e) {
					return !!this.search(e, this.isValidInternal);
				}
				get(e) {
					return this.search(e, this.getInternal);
				}
				set(e, t) {
					this.search(e, ({ chunks: n }, i, s) => n[i].set(s, t));
				}
				indexOf(e, t) {
					return t && typeof t == 'number'
						? this.search(t, (n, i, s) => this.indexOfInternal(n, i, s, e))
						: this.indexOfInternal(this, 0, Math.max(0, t || 0), e);
				}
				toArray() {
					let { chunks: e } = this,
						t = e.length,
						n = this._type.ArrayType;
					if (t <= 0) return new n(0);
					if (t <= 1) return e[0].toArray();
					let i = 0,
						s = new Array(t);
					for (let h = -1; ++h < t; ) i += (s[h] = e[h].toArray()).length;
					n !== s[0].constructor && (n = s[0].constructor);
					let o = new n(i),
						l = n === Array ? R0 : M0;
					for (let h = -1, u = 0; ++h < t; ) u = l(s[h], o, u);
					return o;
				}
				getInternal({ _chunks: e }, t, n) {
					return e[t].get(n);
				}
				isValidInternal({ _chunks: e }, t, n) {
					return e[t].isValid(n);
				}
				indexOfInternal({ _chunks: e }, t, n, i) {
					let s = t - 1,
						o = e.length,
						l = n,
						h = 0,
						u = -1;
					for (; ++s < o; ) {
						if (~(u = e[s].indexOf(i, l))) return h + u;
						(l = 0), (h += e[s].length);
					}
					return -1;
				}
				_sliceInternal(e, t, n) {
					let i = [],
						{ chunks: s, _chunkOffsets: o } = e;
					for (let l = -1, h = s.length; ++l < h; ) {
						let u = s[l],
							m = u.length,
							E = o[l];
						if (E >= n) break;
						if (t >= E + m) continue;
						if (E >= t && E + m <= n) {
							i.push(u);
							continue;
						}
						let M = Math.max(0, t - E),
							X = Math.min(n - E, m);
						i.push(u.slice(M, X));
					}
					return e.clone(i);
				}
			};
		ja.Chunked = qr;
		function E0(r) {
			let e = new Uint32Array((r || []).length + 1),
				t = (e[0] = 0),
				n = e.length;
			for (let i = 0; ++i < n; ) e[i] = t += r[i - 1].length;
			return e;
		}
		var M0 = (r, e, t) => (e.set(r, t), t + r.length),
			R0 = (r, e, t) => {
				let n = t;
				for (let i = -1, s = r.length; ++i < s; ) e[n++] = r[i];
				return n;
			};
	});
	var Wi = w((qa) => {
		'use strict';
		Object.defineProperty(qa, '__esModule', { value: !0 });
		qa.Column = void 0;
		var zy = et(),
			Hy = Ce(),
			Fl = Tn(),
			Xn = class extends Fl.Chunked {
				constructor(e, t = [], n) {
					t = Fl.Chunked.flatten(...t);
					super(e.type, t, n);
					if (((this._field = e), t.length === 1 && !(this instanceof El)))
						return new El(e, t[0], this._chunkOffsets);
				}
				static new(...e) {
					let [t, n, ...i] = e;
					typeof t != 'string' && !(t instanceof zy.Field) && ((n = t), (t = ''));
					let s = Fl.Chunked.flatten(
						Array.isArray(n)
							? [...n, ...i]
							: n instanceof Hy.Vector
							? [n, ...i]
							: [Hy.Vector.new(n, ...i)]
					);
					if (typeof t == 'string') {
						let o = s[0].data.type;
						t = new zy.Field(t, o, !0);
					} else
						!t.nullable && s.some(({ nullCount: o }) => o > 0) && (t = t.clone({ nullable: !0 }));
					return new Xn(t, s);
				}
				get field() {
					return this._field;
				}
				get name() {
					return this._field.name;
				}
				get nullable() {
					return this._field.nullable;
				}
				get metadata() {
					return this._field.metadata;
				}
				clone(e = this._chunks) {
					return new Xn(this._field, e);
				}
				getChildAt(e) {
					if (e < 0 || e >= this.numChildren) return null;
					let t = this._children || (this._children = []),
						n,
						i,
						s;
					return (n = t[e])
						? n
						: (i = (this.type.children || [])[e]) &&
						  ((s = this._chunks.map((o) => o.getChildAt(e)).filter((o) => o != null)),
						  s.length > 0)
						? (t[e] = new Xn(i, s))
						: null;
				}
			};
		qa.Column = Xn;
		var El = class extends Xn {
			constructor(e, t, n) {
				super(e, [t], n);
				this._chunk = t;
			}
			search(e, t) {
				return t ? t(this, 0, e) : [0, e];
			}
			isValid(e) {
				return this._chunk.isValid(e);
			}
			get(e) {
				return this._chunk.get(e);
			}
			set(e, t) {
				this._chunk.set(e, t);
			}
			indexOf(e, t) {
				return this._chunk.indexOf(e, t);
			}
		};
	});
	var Yy = w((zi) => {
		'use strict';
		Object.defineProperty(zi, '__esModule', { value: !0 });
		zi.instance = zi.TypeAssembler = void 0;
		var U0 = Ur(),
			V0 = U0.flatbuffers.Long,
			k0 = it(),
			N = nn(),
			Ml = class extends k0.Visitor {
				visit(e, t) {
					return e == null || t == null ? void 0 : super.visit(e, t);
				}
				visitNull(e, t) {
					return N.Null.startNull(t), N.Null.endNull(t);
				}
				visitInt(e, t) {
					return (
						N.Int.startInt(t),
						N.Int.addBitWidth(t, e.bitWidth),
						N.Int.addIsSigned(t, e.isSigned),
						N.Int.endInt(t)
					);
				}
				visitFloat(e, t) {
					return (
						N.FloatingPoint.startFloatingPoint(t),
						N.FloatingPoint.addPrecision(t, e.precision),
						N.FloatingPoint.endFloatingPoint(t)
					);
				}
				visitBinary(e, t) {
					return N.Binary.startBinary(t), N.Binary.endBinary(t);
				}
				visitBool(e, t) {
					return N.Bool.startBool(t), N.Bool.endBool(t);
				}
				visitUtf8(e, t) {
					return N.Utf8.startUtf8(t), N.Utf8.endUtf8(t);
				}
				visitDecimal(e, t) {
					return (
						N.Decimal.startDecimal(t),
						N.Decimal.addScale(t, e.scale),
						N.Decimal.addPrecision(t, e.precision),
						N.Decimal.endDecimal(t)
					);
				}
				visitDate(e, t) {
					return N.Date.startDate(t), N.Date.addUnit(t, e.unit), N.Date.endDate(t);
				}
				visitTime(e, t) {
					return (
						N.Time.startTime(t),
						N.Time.addUnit(t, e.unit),
						N.Time.addBitWidth(t, e.bitWidth),
						N.Time.endTime(t)
					);
				}
				visitTimestamp(e, t) {
					let n = (e.timezone && t.createString(e.timezone)) || void 0;
					return (
						N.Timestamp.startTimestamp(t),
						N.Timestamp.addUnit(t, e.unit),
						n !== void 0 && N.Timestamp.addTimezone(t, n),
						N.Timestamp.endTimestamp(t)
					);
				}
				visitInterval(e, t) {
					return (
						N.Interval.startInterval(t), N.Interval.addUnit(t, e.unit), N.Interval.endInterval(t)
					);
				}
				visitList(e, t) {
					return N.List.startList(t), N.List.endList(t);
				}
				visitStruct(e, t) {
					return N.Struct_.startStruct_(t), N.Struct_.endStruct_(t);
				}
				visitUnion(e, t) {
					N.Union.startTypeIdsVector(t, e.typeIds.length);
					let n = N.Union.createTypeIdsVector(t, e.typeIds);
					return (
						N.Union.startUnion(t),
						N.Union.addMode(t, e.mode),
						N.Union.addTypeIds(t, n),
						N.Union.endUnion(t)
					);
				}
				visitDictionary(e, t) {
					let n = this.visit(e.indices, t);
					return (
						N.DictionaryEncoding.startDictionaryEncoding(t),
						N.DictionaryEncoding.addId(t, new V0(e.id, 0)),
						N.DictionaryEncoding.addIsOrdered(t, e.isOrdered),
						n !== void 0 && N.DictionaryEncoding.addIndexType(t, n),
						N.DictionaryEncoding.endDictionaryEncoding(t)
					);
				}
				visitFixedSizeBinary(e, t) {
					return (
						N.FixedSizeBinary.startFixedSizeBinary(t),
						N.FixedSizeBinary.addByteWidth(t, e.byteWidth),
						N.FixedSizeBinary.endFixedSizeBinary(t)
					);
				}
				visitFixedSizeList(e, t) {
					return (
						N.FixedSizeList.startFixedSizeList(t),
						N.FixedSizeList.addListSize(t, e.listSize),
						N.FixedSizeList.endFixedSizeList(t)
					);
				}
				visitMap(e, t) {
					return N.Map.startMap(t), N.Map.addKeysSorted(t, e.keysSorted), N.Map.endMap(t);
				}
			};
		zi.TypeAssembler = Ml;
		zi.instance = new Ml();
	});
	var Xy = w((wr) => {
		'use strict';
		Object.defineProperty(wr, '__esModule', { value: !0 });
		wr.fieldFromJSON =
			wr.dictionaryBatchFromJSON =
			wr.recordBatchFromJSON =
			wr.schemaFromJSON =
				void 0;
		var Hi = et(),
			De = de(),
			ei = ti(),
			Yi = ve();
		function P0(r, e = new Map()) {
			return new Hi.Schema(N0(r, e), Wa(r.customMetadata), e);
		}
		wr.schemaFromJSON = P0;
		function Gy(r) {
			return new ei.RecordBatch(r.count, Jy(r.columns), Ky(r.columns));
		}
		wr.recordBatchFromJSON = Gy;
		function L0(r) {
			return new ei.DictionaryBatch(Gy(r.data), r.id, r.isDelta);
		}
		wr.dictionaryBatchFromJSON = L0;
		function N0(r, e) {
			return (r.fields || []).filter(Boolean).map((t) => Hi.Field.fromJSON(t, e));
		}
		function $y(r, e) {
			return (r.children || []).filter(Boolean).map((t) => Hi.Field.fromJSON(t, e));
		}
		function Jy(r) {
			return (r || []).reduce(
				(e, t) => [...e, new ei.FieldNode(t.count, x0(t.VALIDITY)), ...Jy(t.children)],
				[]
			);
		}
		function Ky(r, e = []) {
			for (let t = -1, n = (r || []).length; ++t < n; ) {
				let i = r[t];
				i.VALIDITY && e.push(new ei.BufferRegion(e.length, i.VALIDITY.length)),
					i.TYPE && e.push(new ei.BufferRegion(e.length, i.TYPE.length)),
					i.OFFSET && e.push(new ei.BufferRegion(e.length, i.OFFSET.length)),
					i.DATA && e.push(new ei.BufferRegion(e.length, i.DATA.length)),
					(e = Ky(i.children, e));
			}
			return e;
		}
		function x0(r) {
			return (r || []).reduce((e, t) => e + +(t === 0), 0);
		}
		function C0(r, e) {
			let t, n, i, s, o, l;
			return (
				!e || !(s = r.dictionary)
					? ((o = Qy(r, $y(r, e))), (i = new Hi.Field(r.name, o, r.nullable, Wa(r.customMetadata))))
					: e.has((t = s.id))
					? ((n = (n = s.indexType) ? Zy(n) : new De.Int32()),
					  (l = new De.Dictionary(e.get(t), n, t, s.isOrdered)),
					  (i = new Hi.Field(r.name, l, r.nullable, Wa(r.customMetadata))))
					: ((n = (n = s.indexType) ? Zy(n) : new De.Int32()),
					  e.set(t, (o = Qy(r, $y(r, e)))),
					  (l = new De.Dictionary(o, n, t, s.isOrdered)),
					  (i = new Hi.Field(r.name, l, r.nullable, Wa(r.customMetadata)))),
				i || null
			);
		}
		wr.fieldFromJSON = C0;
		function Wa(r) {
			return new Map(Object.entries(r || {}));
		}
		function Zy(r) {
			return new De.Int(r.isSigned, r.bitWidth);
		}
		function Qy(r, e) {
			let t = r.type.name;
			switch (t) {
				case 'NONE':
					return new De.Null();
				case 'null':
					return new De.Null();
				case 'binary':
					return new De.Binary();
				case 'utf8':
					return new De.Utf8();
				case 'bool':
					return new De.Bool();
				case 'list':
					return new De.List((e || [])[0]);
				case 'struct':
					return new De.Struct(e || []);
				case 'struct_':
					return new De.Struct(e || []);
			}
			switch (t) {
				case 'int': {
					let n = r.type;
					return new De.Int(n.isSigned, n.bitWidth);
				}
				case 'floatingpoint': {
					let n = r.type;
					return new De.Float(Yi.Precision[n.precision]);
				}
				case 'decimal': {
					let n = r.type;
					return new De.Decimal(n.scale, n.precision);
				}
				case 'date': {
					let n = r.type;
					return new De.Date_(Yi.DateUnit[n.unit]);
				}
				case 'time': {
					let n = r.type;
					return new De.Time(Yi.TimeUnit[n.unit], n.bitWidth);
				}
				case 'timestamp': {
					let n = r.type;
					return new De.Timestamp(Yi.TimeUnit[n.unit], n.timezone);
				}
				case 'interval': {
					let n = r.type;
					return new De.Interval(Yi.IntervalUnit[n.unit]);
				}
				case 'union': {
					let n = r.type;
					return new De.Union(Yi.UnionMode[n.mode], n.typeIds || [], e || []);
				}
				case 'fixedsizebinary': {
					let n = r.type;
					return new De.FixedSizeBinary(n.byteWidth);
				}
				case 'fixedsizelist': {
					let n = r.type;
					return new De.FixedSizeList(n.listSize, (e || [])[0]);
				}
				case 'map': {
					let n = r.type;
					return new De.Map_((e || [])[0], n.keysSorted);
				}
			}
			throw new Error(`Unrecognized type: "${t}"`);
		}
	});
	var ti = w((zt) => {
		'use strict';
		Object.defineProperty(zt, '__esModule', { value: !0 });
		zt.FieldNode = zt.BufferRegion = zt.DictionaryBatch = zt.RecordBatch = zt.Message = void 0;
		var Rl = Ur(),
			k = nn(),
			Fe = Go(),
			rt = et(),
			j0 = Je(),
			Ve = ve(),
			Ul = Yy(),
			za = Xy(),
			ri = Rl.flatbuffers.Long,
			q0 = Rl.flatbuffers.Builder,
			W0 = Rl.flatbuffers.ByteBuffer,
			Oe = de(),
			wn = class {
				constructor(e, t, n, i) {
					(this._version = t),
						(this._headerType = n),
						(this.body = new Uint8Array(0)),
						i && (this._createHeader = () => i),
						(this._bodyLength = typeof e == 'number' ? e : e.low);
				}
				static fromJSON(e, t) {
					let n = new wn(0, Ve.MetadataVersion.V4, t);
					return (n._createHeader = z0(e, t)), n;
				}
				static decode(e) {
					e = new W0(j0.toUint8Array(e));
					let t = Fe.Message.getRootAsMessage(e),
						n = t.bodyLength(),
						i = t.version(),
						s = t.headerType(),
						o = new wn(n, i, s);
					return (o._createHeader = H0(t, s)), o;
				}
				static encode(e) {
					let t = new q0(),
						n = -1;
					return (
						e.isSchema()
							? (n = rt.Schema.encode(t, e.header()))
							: e.isRecordBatch()
							? (n = Wt.encode(t, e.header()))
							: e.isDictionaryBatch() && (n = Ir.encode(t, e.header())),
						Fe.Message.startMessage(t),
						Fe.Message.addVersion(t, Ve.MetadataVersion.V4),
						Fe.Message.addHeader(t, n),
						Fe.Message.addHeaderType(t, e.headerType),
						Fe.Message.addBodyLength(t, new ri(e.bodyLength, 0)),
						Fe.Message.finishMessageBuffer(t, Fe.Message.endMessage(t)),
						t.asUint8Array()
					);
				}
				static from(e, t = 0) {
					if (e instanceof rt.Schema)
						return new wn(0, Ve.MetadataVersion.V4, Ve.MessageHeader.Schema, e);
					if (e instanceof Wt)
						return new wn(t, Ve.MetadataVersion.V4, Ve.MessageHeader.RecordBatch, e);
					if (e instanceof Ir)
						return new wn(t, Ve.MetadataVersion.V4, Ve.MessageHeader.DictionaryBatch, e);
					throw new Error(`Unrecognized Message header: ${e}`);
				}
				get type() {
					return this.headerType;
				}
				get version() {
					return this._version;
				}
				get headerType() {
					return this._headerType;
				}
				get bodyLength() {
					return this._bodyLength;
				}
				header() {
					return this._createHeader();
				}
				isSchema() {
					return this.headerType === Ve.MessageHeader.Schema;
				}
				isRecordBatch() {
					return this.headerType === Ve.MessageHeader.RecordBatch;
				}
				isDictionaryBatch() {
					return this.headerType === Ve.MessageHeader.DictionaryBatch;
				}
			};
		zt.Message = wn;
		var Wt = class {
			constructor(e, t, n) {
				(this._nodes = t), (this._buffers = n), (this._length = typeof e == 'number' ? e : e.low);
			}
			get nodes() {
				return this._nodes;
			}
			get length() {
				return this._length;
			}
			get buffers() {
				return this._buffers;
			}
		};
		zt.RecordBatch = Wt;
		var Ir = class {
			constructor(e, t, n = !1) {
				(this._data = e), (this._isDelta = n), (this._id = typeof t == 'number' ? t : t.low);
			}
			get id() {
				return this._id;
			}
			get data() {
				return this._data;
			}
			get isDelta() {
				return this._isDelta;
			}
			get length() {
				return this.data.length;
			}
			get nodes() {
				return this.data.nodes;
			}
			get buffers() {
				return this.data.buffers;
			}
		};
		zt.DictionaryBatch = Ir;
		var ni = class {
			constructor(e, t) {
				(this.offset = typeof e == 'number' ? e : e.low),
					(this.length = typeof t == 'number' ? t : t.low);
			}
		};
		zt.BufferRegion = ni;
		var ii = class {
			constructor(e, t) {
				(this.length = typeof e == 'number' ? e : e.low),
					(this.nullCount = typeof t == 'number' ? t : t.low);
			}
		};
		zt.FieldNode = ii;
		function z0(r, e) {
			return () => {
				switch (e) {
					case Ve.MessageHeader.Schema:
						return rt.Schema.fromJSON(r);
					case Ve.MessageHeader.RecordBatch:
						return Wt.fromJSON(r);
					case Ve.MessageHeader.DictionaryBatch:
						return Ir.fromJSON(r);
				}
				throw new Error(`Unrecognized Message type: { name: ${Ve.MessageHeader[e]}, type: ${e} }`);
			};
		}
		function H0(r, e) {
			return () => {
				switch (e) {
					case Ve.MessageHeader.Schema:
						return rt.Schema.decode(r.header(new k.Schema()));
					case Ve.MessageHeader.RecordBatch:
						return Wt.decode(r.header(new Fe.RecordBatch()), r.version());
					case Ve.MessageHeader.DictionaryBatch:
						return Ir.decode(r.header(new Fe.DictionaryBatch()), r.version());
				}
				throw new Error(`Unrecognized Message type: { name: ${Ve.MessageHeader[e]}, type: ${e} }`);
			};
		}
		rt.Field.encode = rS;
		rt.Field.decode = eS;
		rt.Field.fromJSON = za.fieldFromJSON;
		rt.Schema.encode = tS;
		rt.Schema.decode = Y0;
		rt.Schema.fromJSON = za.schemaFromJSON;
		Wt.encode = nS;
		Wt.decode = G0;
		Wt.fromJSON = za.recordBatchFromJSON;
		Ir.encode = iS;
		Ir.decode = $0;
		Ir.fromJSON = za.dictionaryBatchFromJSON;
		ii.encode = sS;
		ii.decode = K0;
		ni.encode = oS;
		ni.decode = J0;
		function Y0(r, e = new Map()) {
			let t = X0(r, e);
			return new rt.Schema(t, Ha(r), e);
		}
		function G0(r, e = Ve.MetadataVersion.V4) {
			return new Wt(r.length(), Z0(r), Q0(r, e));
		}
		function $0(r, e = Ve.MetadataVersion.V4) {
			return new Ir(Wt.decode(r.data(), e), r.id(), r.isDelta());
		}
		function J0(r) {
			return new ni(r.offset(), r.length());
		}
		function K0(r) {
			return new ii(r.length(), r.nullCount());
		}
		function Z0(r) {
			let e = [];
			for (let t, n = -1, i = -1, s = r.nodesLength(); ++n < s; )
				(t = r.nodes(n)) && (e[++i] = ii.decode(t));
			return e;
		}
		function Q0(r, e) {
			let t = [];
			for (let n, i = -1, s = -1, o = r.buffersLength(); ++i < o; )
				(n = r.buffers(i)) &&
					(e < Ve.MetadataVersion.V4 && (n.bb_pos += 8 * (i + 1)), (t[++s] = ni.decode(n)));
			return t;
		}
		function X0(r, e) {
			let t = [];
			for (let n, i = -1, s = -1, o = r.fieldsLength(); ++i < o; )
				(n = r.fields(i)) && (t[++s] = rt.Field.decode(n, e));
			return t;
		}
		function em(r, e) {
			let t = [];
			for (let n, i = -1, s = -1, o = r.childrenLength(); ++i < o; )
				(n = r.children(i)) && (t[++s] = rt.Field.decode(n, e));
			return t;
		}
		function eS(r, e) {
			let t, n, i, s, o, l;
			return (
				!e || !(l = r.dictionary())
					? ((i = rm(r, em(r, e))), (n = new rt.Field(r.name(), i, r.nullable(), Ha(r))))
					: e.has((t = l.id().low))
					? ((s = (s = l.indexType()) ? tm(s) : new Oe.Int32()),
					  (o = new Oe.Dictionary(e.get(t), s, t, l.isOrdered())),
					  (n = new rt.Field(r.name(), o, r.nullable(), Ha(r))))
					: ((s = (s = l.indexType()) ? tm(s) : new Oe.Int32()),
					  e.set(t, (i = rm(r, em(r, e)))),
					  (o = new Oe.Dictionary(i, s, t, l.isOrdered())),
					  (n = new rt.Field(r.name(), o, r.nullable(), Ha(r)))),
				n || null
			);
		}
		function Ha(r) {
			let e = new Map();
			if (r)
				for (let t, n, i = -1, s = r.customMetadataLength() | 0; ++i < s; )
					(t = r.customMetadata(i)) && (n = t.key()) != null && e.set(n, t.value());
			return e;
		}
		function tm(r) {
			return new Oe.Int(r.isSigned(), r.bitWidth());
		}
		function rm(r, e) {
			let t = r.typeType();
			switch (t) {
				case k.Type.NONE:
					return new Oe.Null();
				case k.Type.Null:
					return new Oe.Null();
				case k.Type.Binary:
					return new Oe.Binary();
				case k.Type.Utf8:
					return new Oe.Utf8();
				case k.Type.Bool:
					return new Oe.Bool();
				case k.Type.List:
					return new Oe.List((e || [])[0]);
				case k.Type.Struct_:
					return new Oe.Struct(e || []);
			}
			switch (t) {
				case k.Type.Int: {
					let n = r.type(new k.Int());
					return new Oe.Int(n.isSigned(), n.bitWidth());
				}
				case k.Type.FloatingPoint: {
					let n = r.type(new k.FloatingPoint());
					return new Oe.Float(n.precision());
				}
				case k.Type.Decimal: {
					let n = r.type(new k.Decimal());
					return new Oe.Decimal(n.scale(), n.precision());
				}
				case k.Type.Date: {
					let n = r.type(new k.Date());
					return new Oe.Date_(n.unit());
				}
				case k.Type.Time: {
					let n = r.type(new k.Time());
					return new Oe.Time(n.unit(), n.bitWidth());
				}
				case k.Type.Timestamp: {
					let n = r.type(new k.Timestamp());
					return new Oe.Timestamp(n.unit(), n.timezone());
				}
				case k.Type.Interval: {
					let n = r.type(new k.Interval());
					return new Oe.Interval(n.unit());
				}
				case k.Type.Union: {
					let n = r.type(new k.Union());
					return new Oe.Union(n.mode(), n.typeIdsArray() || [], e || []);
				}
				case k.Type.FixedSizeBinary: {
					let n = r.type(new k.FixedSizeBinary());
					return new Oe.FixedSizeBinary(n.byteWidth());
				}
				case k.Type.FixedSizeList: {
					let n = r.type(new k.FixedSizeList());
					return new Oe.FixedSizeList(n.listSize(), (e || [])[0]);
				}
				case k.Type.Map: {
					let n = r.type(new k.Map());
					return new Oe.Map_((e || [])[0], n.keysSorted());
				}
			}
			throw new Error(`Unrecognized type: "${k.Type[t]}" (${t})`);
		}
		function tS(r, e) {
			let t = e.fields.map((s) => rt.Field.encode(r, s));
			k.Schema.startFieldsVector(r, t.length);
			let n = k.Schema.createFieldsVector(r, t),
				i =
					e.metadata && e.metadata.size > 0
						? k.Schema.createCustomMetadataVector(
								r,
								[...e.metadata].map(([s, o]) => {
									let l = r.createString(`${s}`),
										h = r.createString(`${o}`);
									return (
										k.KeyValue.startKeyValue(r),
										k.KeyValue.addKey(r, l),
										k.KeyValue.addValue(r, h),
										k.KeyValue.endKeyValue(r)
									);
								})
						  )
						: -1;
			return (
				k.Schema.startSchema(r),
				k.Schema.addFields(r, n),
				k.Schema.addEndianness(r, aS ? k.Endianness.Little : k.Endianness.Big),
				i !== -1 && k.Schema.addCustomMetadata(r, i),
				k.Schema.endSchema(r)
			);
		}
		function rS(r, e) {
			let t = -1,
				n = -1,
				i = -1,
				s = e.type,
				o = e.typeId;
			Oe.DataType.isDictionary(s)
				? ((o = s.dictionary.typeId),
				  (i = Ul.instance.visit(s, r)),
				  (n = Ul.instance.visit(s.dictionary, r)))
				: (n = Ul.instance.visit(s, r));
			let l = (s.children || []).map((m) => rt.Field.encode(r, m)),
				h = k.Field.createChildrenVector(r, l),
				u =
					e.metadata && e.metadata.size > 0
						? k.Field.createCustomMetadataVector(
								r,
								[...e.metadata].map(([m, E]) => {
									let M = r.createString(`${m}`),
										X = r.createString(`${E}`);
									return (
										k.KeyValue.startKeyValue(r),
										k.KeyValue.addKey(r, M),
										k.KeyValue.addValue(r, X),
										k.KeyValue.endKeyValue(r)
									);
								})
						  )
						: -1;
			return (
				e.name && (t = r.createString(e.name)),
				k.Field.startField(r),
				k.Field.addType(r, n),
				k.Field.addTypeType(r, o),
				k.Field.addChildren(r, h),
				k.Field.addNullable(r, !!e.nullable),
				t !== -1 && k.Field.addName(r, t),
				i !== -1 && k.Field.addDictionary(r, i),
				u !== -1 && k.Field.addCustomMetadata(r, u),
				k.Field.endField(r)
			);
		}
		function nS(r, e) {
			let t = e.nodes || [],
				n = e.buffers || [];
			Fe.RecordBatch.startNodesVector(r, t.length),
				t
					.slice()
					.reverse()
					.forEach((o) => ii.encode(r, o));
			let i = r.endVector();
			Fe.RecordBatch.startBuffersVector(r, n.length),
				n
					.slice()
					.reverse()
					.forEach((o) => ni.encode(r, o));
			let s = r.endVector();
			return (
				Fe.RecordBatch.startRecordBatch(r),
				Fe.RecordBatch.addLength(r, new ri(e.length, 0)),
				Fe.RecordBatch.addNodes(r, i),
				Fe.RecordBatch.addBuffers(r, s),
				Fe.RecordBatch.endRecordBatch(r)
			);
		}
		function iS(r, e) {
			let t = Wt.encode(r, e.data);
			return (
				Fe.DictionaryBatch.startDictionaryBatch(r),
				Fe.DictionaryBatch.addId(r, new ri(e.id, 0)),
				Fe.DictionaryBatch.addIsDelta(r, e.isDelta),
				Fe.DictionaryBatch.addData(r, t),
				Fe.DictionaryBatch.endDictionaryBatch(r)
			);
		}
		function sS(r, e) {
			return Fe.FieldNode.createFieldNode(r, new ri(e.length, 0), new ri(e.nullCount, 0));
		}
		function oS(r, e) {
			return k.Buffer.createBuffer(r, new ri(e.offset, 0), new ri(e.length, 0));
		}
		var aS = (function () {
			let r = new ArrayBuffer(2);
			return new DataView(r).setInt16(0, 256, !0), new Int16Array(r)[0] === 256;
		})();
	});
	var Ga = w((ae) => {
		'use strict';
		Object.defineProperty(ae, '__esModule', { value: !0 });
		ae.magicX2AndPadding =
			ae.magicAndPadding =
			ae.magicLength =
			ae.checkForMagicArrowString =
			ae.MAGIC =
			ae.MAGIC_STR =
			ae.PADDING =
			ae.JSONMessageReader =
			ae.AsyncMessageReader =
			ae.MessageReader =
				void 0;
		var In = at(),
			Bn = ve(),
			uS = Ur(),
			nm = uS.flatbuffers.ByteBuffer,
			Ys = ti(),
			cS = ut(),
			lS = vl(),
			im = Je(),
			Ya = mn(),
			or = yi(),
			Vl = (r) => `Expected ${Bn.MessageHeader[r]} Message in stream, but was null or length 0.`,
			kl = (r) =>
				`Header pointer of flatbuffer-encoded ${Bn.MessageHeader[r]} Message is null or length 0.`,
			sm = (r, e) => `Expected to read ${r} metadata bytes, but only read ${e}.`,
			om = (r, e) => `Expected to read ${r} bytes for message body, but only read ${e}.`,
			Pl = class {
				constructor(e) {
					this.source = e instanceof Ya.ByteStream ? e : new Ya.ByteStream(e);
				}
				[Symbol.iterator]() {
					return this;
				}
				next() {
					let e;
					return (e = this.readMetadataLength()).done ||
						(e.value === -1 && (e = this.readMetadataLength()).done) ||
						(e = this.readMetadata(e.value)).done
						? or.ITERATOR_DONE
						: e;
				}
				throw(e) {
					return this.source.throw(e);
				}
				return(e) {
					return this.source.return(e);
				}
				readMessage(e) {
					let t;
					if ((t = this.next()).done) return null;
					if (e != null && t.value.headerType !== e) throw new Error(Vl(e));
					return t.value;
				}
				readMessageBody(e) {
					if (e <= 0) return new Uint8Array(0);
					let t = im.toUint8Array(this.source.read(e));
					if (t.byteLength < e) throw new Error(om(e, t.byteLength));
					return t.byteOffset % 8 == 0 && t.byteOffset + t.byteLength <= t.buffer.byteLength
						? t
						: t.slice();
				}
				readSchema(e = !1) {
					let t = Bn.MessageHeader.Schema,
						n = this.readMessage(t),
						i = n == null ? void 0 : n.header();
					if (e && !i) throw new Error(kl(t));
					return i;
				}
				readMetadataLength() {
					let e = this.source.read(ae.PADDING),
						t = e && new nm(e),
						n = (t == null ? void 0 : t.readInt32(0)) || 0;
					return { done: n === 0, value: n };
				}
				readMetadata(e) {
					let t = this.source.read(e);
					if (!t) return or.ITERATOR_DONE;
					if (t.byteLength < e) throw new Error(sm(e, t.byteLength));
					return { done: !1, value: Ys.Message.decode(t) };
				}
			};
		ae.MessageReader = Pl;
		var am = class {
			constructor(e, t) {
				this.source =
					e instanceof Ya.AsyncByteStream
						? e
						: cS.isFileHandle(e)
						? new lS.AsyncRandomAccessFile(e, t)
						: new Ya.AsyncByteStream(e);
			}
			[Symbol.asyncIterator]() {
				return this;
			}
			next() {
				return In.__awaiter(this, void 0, void 0, function* () {
					let e;
					return (e = yield this.readMetadataLength()).done ||
						(e.value === -1 && (e = yield this.readMetadataLength()).done) ||
						(e = yield this.readMetadata(e.value)).done
						? or.ITERATOR_DONE
						: e;
				});
			}
			throw(e) {
				return In.__awaiter(this, void 0, void 0, function* () {
					return yield this.source.throw(e);
				});
			}
			return(e) {
				return In.__awaiter(this, void 0, void 0, function* () {
					return yield this.source.return(e);
				});
			}
			readMessage(e) {
				return In.__awaiter(this, void 0, void 0, function* () {
					let t;
					if ((t = yield this.next()).done) return null;
					if (e != null && t.value.headerType !== e) throw new Error(Vl(e));
					return t.value;
				});
			}
			readMessageBody(e) {
				return In.__awaiter(this, void 0, void 0, function* () {
					if (e <= 0) return new Uint8Array(0);
					let t = im.toUint8Array(yield this.source.read(e));
					if (t.byteLength < e) throw new Error(om(e, t.byteLength));
					return t.byteOffset % 8 == 0 && t.byteOffset + t.byteLength <= t.buffer.byteLength
						? t
						: t.slice();
				});
			}
			readSchema(e = !1) {
				return In.__awaiter(this, void 0, void 0, function* () {
					let t = Bn.MessageHeader.Schema,
						n = yield this.readMessage(t),
						i = n == null ? void 0 : n.header();
					if (e && !i) throw new Error(kl(t));
					return i;
				});
			}
			readMetadataLength() {
				return In.__awaiter(this, void 0, void 0, function* () {
					let e = yield this.source.read(ae.PADDING),
						t = e && new nm(e),
						n = (t == null ? void 0 : t.readInt32(0)) || 0;
					return { done: n === 0, value: n };
				});
			}
			readMetadata(e) {
				return In.__awaiter(this, void 0, void 0, function* () {
					let t = yield this.source.read(e);
					if (!t) return or.ITERATOR_DONE;
					if (t.byteLength < e) throw new Error(sm(e, t.byteLength));
					return { done: !1, value: Ys.Message.decode(t) };
				});
			}
		};
		ae.AsyncMessageReader = am;
		var um = class extends Pl {
			constructor(e) {
				super(new Uint8Array(0));
				(this._schema = !1),
					(this._body = []),
					(this._batchIndex = 0),
					(this._dictionaryIndex = 0),
					(this._json = e instanceof or.ArrowJSON ? e : new or.ArrowJSON(e));
			}
			next() {
				let { _json: e } = this;
				if (!this._schema) {
					this._schema = !0;
					let t = Ys.Message.fromJSON(e.schema, Bn.MessageHeader.Schema);
					return { done: !1, value: t };
				}
				if (this._dictionaryIndex < e.dictionaries.length) {
					let t = e.dictionaries[this._dictionaryIndex++];
					this._body = t.data.columns;
					let n = Ys.Message.fromJSON(t, Bn.MessageHeader.DictionaryBatch);
					return { done: !1, value: n };
				}
				if (this._batchIndex < e.batches.length) {
					let t = e.batches[this._batchIndex++];
					this._body = t.columns;
					let n = Ys.Message.fromJSON(t, Bn.MessageHeader.RecordBatch);
					return { done: !1, value: n };
				}
				return (this._body = []), or.ITERATOR_DONE;
			}
			readMessageBody(e) {
				return t(this._body);
				function t(n) {
					return (n || []).reduce(
						(i, s) => [
							...i,
							...((s.VALIDITY && [s.VALIDITY]) || []),
							...((s.TYPE && [s.TYPE]) || []),
							...((s.OFFSET && [s.OFFSET]) || []),
							...((s.DATA && [s.DATA]) || []),
							...t(s.children)
						],
						[]
					);
				}
			}
			readMessage(e) {
				let t;
				if ((t = this.next()).done) return null;
				if (e != null && t.value.headerType !== e) throw new Error(Vl(e));
				return t.value;
			}
			readSchema() {
				let e = Bn.MessageHeader.Schema,
					t = this.readMessage(e),
					n = t == null ? void 0 : t.header();
				if (!t || !n) throw new Error(kl(e));
				return n;
			}
		};
		ae.JSONMessageReader = um;
		ae.PADDING = 4;
		ae.MAGIC_STR = 'ARROW1';
		ae.MAGIC = new Uint8Array(ae.MAGIC_STR.length);
		for (let r = 0; r < ae.MAGIC_STR.length; r += 1 | 0) ae.MAGIC[r] = ae.MAGIC_STR.charCodeAt(r);
		function dS(r, e = 0) {
			for (let t = -1, n = ae.MAGIC.length; ++t < n; ) if (ae.MAGIC[t] !== r[e + t]) return !1;
			return !0;
		}
		ae.checkForMagicArrowString = dS;
		ae.magicLength = ae.MAGIC.length;
		ae.magicAndPadding = ae.magicLength + ae.PADDING;
		ae.magicX2AndPadding = ae.magicLength * 2 + ae.PADDING;
	});
	var Cl = w((ke) => {
		'use strict';
		Object.defineProperty(ke, '__esModule', { value: !0 });
		ke.compareTypes =
			ke.compareFields =
			ke.compareSchemas =
			ke.instance =
			ke.TypeComparator =
				void 0;
		var fS = it(),
			j = class extends fS.Visitor {
				compareSchemas(e, t) {
					return (
						e === t || (t instanceof e.constructor && this.compareManyFields(e.fields, t.fields))
					);
				}
				compareManyFields(e, t) {
					return (
						e === t ||
						(Array.isArray(e) &&
							Array.isArray(t) &&
							e.length === t.length &&
							e.every((n, i) => this.compareFields(n, t[i])))
					);
				}
				compareFields(e, t) {
					return (
						e === t ||
						(t instanceof e.constructor &&
							e.name === t.name &&
							e.nullable === t.nullable &&
							this.visit(e.type, t.type))
					);
				}
			};
		ke.TypeComparator = j;
		function yt(r, e) {
			return e instanceof r.constructor;
		}
		function Gs(r, e) {
			return r === e || yt(r, e);
		}
		function Wr(r, e) {
			return r === e || (yt(r, e) && r.bitWidth === e.bitWidth && r.isSigned === e.isSigned);
		}
		function $a(r, e) {
			return r === e || (yt(r, e) && r.precision === e.precision);
		}
		function hS(r, e) {
			return r === e || (yt(r, e) && r.byteWidth === e.byteWidth);
		}
		function Ll(r, e) {
			return r === e || (yt(r, e) && r.unit === e.unit);
		}
		function $s(r, e) {
			return r === e || (yt(r, e) && r.unit === e.unit && r.timezone === e.timezone);
		}
		function Js(r, e) {
			return r === e || (yt(r, e) && r.unit === e.unit && r.bitWidth === e.bitWidth);
		}
		function pS(r, e) {
			return (
				r === e ||
				(yt(r, e) &&
					r.children.length === e.children.length &&
					ke.instance.compareManyFields(r.children, e.children))
			);
		}
		function _S(r, e) {
			return (
				r === e ||
				(yt(r, e) &&
					r.children.length === e.children.length &&
					ke.instance.compareManyFields(r.children, e.children))
			);
		}
		function Nl(r, e) {
			return (
				r === e ||
				(yt(r, e) &&
					r.mode === e.mode &&
					r.typeIds.every((t, n) => t === e.typeIds[n]) &&
					ke.instance.compareManyFields(r.children, e.children))
			);
		}
		function yS(r, e) {
			return (
				r === e ||
				(yt(r, e) &&
					r.id === e.id &&
					r.isOrdered === e.isOrdered &&
					ke.instance.visit(r.indices, e.indices) &&
					ke.instance.visit(r.dictionary, e.dictionary))
			);
		}
		function xl(r, e) {
			return r === e || (yt(r, e) && r.unit === e.unit);
		}
		function mS(r, e) {
			return (
				r === e ||
				(yt(r, e) &&
					r.listSize === e.listSize &&
					r.children.length === e.children.length &&
					ke.instance.compareManyFields(r.children, e.children))
			);
		}
		function bS(r, e) {
			return (
				r === e ||
				(yt(r, e) &&
					r.keysSorted === e.keysSorted &&
					r.children.length === e.children.length &&
					ke.instance.compareManyFields(r.children, e.children))
			);
		}
		j.prototype.visitNull = Gs;
		j.prototype.visitBool = Gs;
		j.prototype.visitInt = Wr;
		j.prototype.visitInt8 = Wr;
		j.prototype.visitInt16 = Wr;
		j.prototype.visitInt32 = Wr;
		j.prototype.visitInt64 = Wr;
		j.prototype.visitUint8 = Wr;
		j.prototype.visitUint16 = Wr;
		j.prototype.visitUint32 = Wr;
		j.prototype.visitUint64 = Wr;
		j.prototype.visitFloat = $a;
		j.prototype.visitFloat16 = $a;
		j.prototype.visitFloat32 = $a;
		j.prototype.visitFloat64 = $a;
		j.prototype.visitUtf8 = Gs;
		j.prototype.visitBinary = Gs;
		j.prototype.visitFixedSizeBinary = hS;
		j.prototype.visitDate = Ll;
		j.prototype.visitDateDay = Ll;
		j.prototype.visitDateMillisecond = Ll;
		j.prototype.visitTimestamp = $s;
		j.prototype.visitTimestampSecond = $s;
		j.prototype.visitTimestampMillisecond = $s;
		j.prototype.visitTimestampMicrosecond = $s;
		j.prototype.visitTimestampNanosecond = $s;
		j.prototype.visitTime = Js;
		j.prototype.visitTimeSecond = Js;
		j.prototype.visitTimeMillisecond = Js;
		j.prototype.visitTimeMicrosecond = Js;
		j.prototype.visitTimeNanosecond = Js;
		j.prototype.visitDecimal = Gs;
		j.prototype.visitList = pS;
		j.prototype.visitStruct = _S;
		j.prototype.visitUnion = Nl;
		j.prototype.visitDenseUnion = Nl;
		j.prototype.visitSparseUnion = Nl;
		j.prototype.visitDictionary = yS;
		j.prototype.visitInterval = xl;
		j.prototype.visitIntervalDayTime = xl;
		j.prototype.visitIntervalYearMonth = xl;
		j.prototype.visitFixedSizeList = mS;
		j.prototype.visitMap = bS;
		ke.instance = new j();
		function gS(r, e) {
			return ke.instance.compareSchemas(r, e);
		}
		ke.compareSchemas = gS;
		function vS(r, e) {
			return ke.instance.compareFields(r, e);
		}
		ke.compareFields = vS;
		function TS(r, e) {
			return ke.instance.visit(r, e);
		}
		ke.compareTypes = TS;
	});
	var hm = w((Ja) => {
		'use strict';
		Object.defineProperty(Ja, '__esModule', { value: !0 });
		Ja.VectorAssembler = void 0;
		var wS = it(),
			cm = ve(),
			IS = zr(),
			jl = Je(),
			ql = _r(),
			BS = Qn(),
			lm = ti(),
			dm = de(),
			Ye = class extends wS.Visitor {
				constructor() {
					super();
					(this._byteLength = 0),
						(this._nodes = []),
						(this._buffers = []),
						(this._bufferRegions = []);
				}
				static assemble(...e) {
					let t = new Ye(),
						n = BS.selectVectorChildrenArgs(IS.RecordBatch, e),
						[i = t] = t.visitMany(n);
					return i;
				}
				visit(e) {
					if (!dm.DataType.isDictionary(e.type)) {
						let { data: t, length: n, nullCount: i } = e;
						if (n > 2147483647)
							throw new RangeError('Cannot write arrays larger than 2^31 - 1 in length');
						dm.DataType.isNull(e.type) ||
							ar.call(
								this,
								i <= 0 ? new Uint8Array(0) : ql.truncateBitmap(t.offset, n, t.nullBitmap)
							),
							this.nodes.push(new lm.FieldNode(n, i));
					}
					return super.visit(e);
				}
				visitNull(e) {
					return this;
				}
				visitDictionary(e) {
					return this.visit(e.indices);
				}
				get nodes() {
					return this._nodes;
				}
				get buffers() {
					return this._buffers;
				}
				get byteLength() {
					return this._byteLength;
				}
				get bufferRegions() {
					return this._bufferRegions;
				}
			};
		Ja.VectorAssembler = Ye;
		function ar(r) {
			let e = (r.byteLength + 7) & ~7;
			return (
				this.buffers.push(r),
				this.bufferRegions.push(new lm.BufferRegion(this._byteLength, e)),
				(this._byteLength += e),
				this
			);
		}
		function SS(r) {
			let { type: e, length: t, typeIds: n, valueOffsets: i } = r;
			if ((ar.call(this, n), e.mode === cm.UnionMode.Sparse)) return zl.call(this, r);
			if (e.mode === cm.UnionMode.Dense) {
				if (r.offset <= 0) return ar.call(this, i), zl.call(this, r);
				{
					let s = n.reduce((m, E) => Math.max(m, E), n[0]),
						o = new Int32Array(s + 1),
						l = new Int32Array(s + 1).fill(-1),
						h = new Int32Array(t),
						u = jl.rebaseValueOffsets(-i[0], t, i);
					for (let m, E, M = -1; ++M < t; )
						(E = l[(m = n[M])]) === -1 && (E = l[m] = u[m]), (h[M] = u[M] - E), ++o[m];
					ar.call(this, h);
					for (let m, E = -1, M = e.children.length; ++E < M; )
						if ((m = r.getChildAt(E))) {
							let X = e.typeIds[E],
								Ae = Math.min(t, o[X]);
							this.visit(m.slice(l[X], Ae));
						}
				}
			}
			return this;
		}
		function AS(r) {
			let e;
			return r.nullCount >= r.length
				? ar.call(this, new Uint8Array(0))
				: (e = r.values) instanceof Uint8Array
				? ar.call(this, ql.truncateBitmap(r.offset, r.length, e))
				: ar.call(this, ql.packBools(r));
		}
		function Sn(r) {
			return ar.call(this, r.values.subarray(0, r.length * r.stride));
		}
		function fm(r) {
			let { length: e, values: t, valueOffsets: n } = r,
				i = n[0],
				s = n[e],
				o = Math.min(s - i, t.byteLength - i);
			return (
				ar.call(this, jl.rebaseValueOffsets(-n[0], e, n)), ar.call(this, t.subarray(i, i + o)), this
			);
		}
		function Wl(r) {
			let { length: e, valueOffsets: t } = r;
			return t && ar.call(this, jl.rebaseValueOffsets(t[0], e, t)), this.visit(r.getChildAt(0));
		}
		function zl(r) {
			return this.visitMany(r.type.children.map((e, t) => r.getChildAt(t)).filter(Boolean))[0];
		}
		Ye.prototype.visitBool = AS;
		Ye.prototype.visitInt = Sn;
		Ye.prototype.visitFloat = Sn;
		Ye.prototype.visitUtf8 = fm;
		Ye.prototype.visitBinary = fm;
		Ye.prototype.visitFixedSizeBinary = Sn;
		Ye.prototype.visitDate = Sn;
		Ye.prototype.visitTimestamp = Sn;
		Ye.prototype.visitTime = Sn;
		Ye.prototype.visitDecimal = Sn;
		Ye.prototype.visitList = Wl;
		Ye.prototype.visitStruct = zl;
		Ye.prototype.visitUnion = SS;
		Ye.prototype.visitInterval = Sn;
		Ye.prototype.visitFixedSizeList = Wl;
		Ye.prototype.visitMap = Wl;
	});
	var _m = w((Ka) => {
		'use strict';
		Object.defineProperty(Ka, '__esModule', { value: !0 });
		Ka.JSONTypeAssembler = void 0;
		var DS = it(),
			ot = nn(),
			Gi = ve(),
			pm = class extends DS.Visitor {
				visit(e) {
					return e == null ? void 0 : super.visit(e);
				}
				visitNull({ typeId: e }) {
					return { name: ot.Type[e].toLowerCase() };
				}
				visitInt({ typeId: e, bitWidth: t, isSigned: n }) {
					return { name: ot.Type[e].toLowerCase(), bitWidth: t, isSigned: n };
				}
				visitFloat({ typeId: e, precision: t }) {
					return { name: ot.Type[e].toLowerCase(), precision: Gi.Precision[t] };
				}
				visitBinary({ typeId: e }) {
					return { name: ot.Type[e].toLowerCase() };
				}
				visitBool({ typeId: e }) {
					return { name: ot.Type[e].toLowerCase() };
				}
				visitUtf8({ typeId: e }) {
					return { name: ot.Type[e].toLowerCase() };
				}
				visitDecimal({ typeId: e, scale: t, precision: n }) {
					return { name: ot.Type[e].toLowerCase(), scale: t, precision: n };
				}
				visitDate({ typeId: e, unit: t }) {
					return { name: ot.Type[e].toLowerCase(), unit: Gi.DateUnit[t] };
				}
				visitTime({ typeId: e, unit: t, bitWidth: n }) {
					return { name: ot.Type[e].toLowerCase(), unit: Gi.TimeUnit[t], bitWidth: n };
				}
				visitTimestamp({ typeId: e, timezone: t, unit: n }) {
					return { name: ot.Type[e].toLowerCase(), unit: Gi.TimeUnit[n], timezone: t };
				}
				visitInterval({ typeId: e, unit: t }) {
					return { name: ot.Type[e].toLowerCase(), unit: Gi.IntervalUnit[t] };
				}
				visitList({ typeId: e }) {
					return { name: ot.Type[e].toLowerCase() };
				}
				visitStruct({ typeId: e }) {
					return { name: ot.Type[e].toLowerCase() };
				}
				visitUnion({ typeId: e, mode: t, typeIds: n }) {
					return { name: ot.Type[e].toLowerCase(), mode: Gi.UnionMode[t], typeIds: [...n] };
				}
				visitDictionary(e) {
					return this.visit(e.dictionary);
				}
				visitFixedSizeBinary({ typeId: e, byteWidth: t }) {
					return { name: ot.Type[e].toLowerCase(), byteWidth: t };
				}
				visitFixedSizeList({ typeId: e, listSize: t }) {
					return { name: ot.Type[e].toLowerCase(), listSize: t };
				}
				visitMap({ typeId: e, keysSorted: t }) {
					return { name: ot.Type[e].toLowerCase(), keysSorted: t };
				}
			};
		Ka.JSONTypeAssembler = pm;
	});
	var bm = w((Xa) => {
		'use strict';
		Object.defineProperty(Xa, '__esModule', { value: !0 });
		Xa.JSONVectorAssembler = void 0;
		var OS = Ls(),
			Ks = Wi(),
			FS = Ce(),
			ES = it(),
			MS = ve(),
			RS = zr(),
			Hl = ve(),
			Za = _r(),
			US = Qn(),
			ym = de(),
			Qa = class extends ES.Visitor {
				static assemble(...e) {
					return new Qa().visitMany(US.selectColumnChildrenArgs(RS.RecordBatch, e));
				}
				visit(e) {
					let { data: t, name: n, length: i } = e,
						{ offset: s, nullCount: o, nullBitmap: l } = t,
						h = ym.DataType.isDictionary(e.type) ? e.type.indices : e.type,
						u = Object.assign([], t.buffers, { [MS.BufferType.VALIDITY]: void 0 });
					return Object.assign(
						{
							name: n,
							count: i,
							VALIDITY: ym.DataType.isNull(h)
								? void 0
								: o <= 0
								? Array.from({ length: i }, () => 1)
								: [...new Za.BitIterator(l, s, i, null, Za.getBit)]
						},
						super.visit(FS.Vector.new(t.clone(h, s, i, 0, u)))
					);
				}
				visitNull() {
					return {};
				}
				visitBool({ values: e, offset: t, length: n }) {
					return { DATA: [...new Za.BitIterator(e, t, n, null, Za.getBool)] };
				}
				visitInt(e) {
					return { DATA: e.type.bitWidth < 64 ? [...e.values] : [...Zs(e.values, 2)] };
				}
				visitFloat(e) {
					return { DATA: [...e.values] };
				}
				visitUtf8(e) {
					return { DATA: [...e], OFFSET: [...e.valueOffsets] };
				}
				visitBinary(e) {
					return { DATA: [...mm(e)], OFFSET: [...e.valueOffsets] };
				}
				visitFixedSizeBinary(e) {
					return { DATA: [...mm(e)] };
				}
				visitDate(e) {
					return { DATA: e.type.unit === Hl.DateUnit.DAY ? [...e.values] : [...Zs(e.values, 2)] };
				}
				visitTimestamp(e) {
					return { DATA: [...Zs(e.values, 2)] };
				}
				visitTime(e) {
					return {
						DATA: e.type.unit < Hl.TimeUnit.MICROSECOND ? [...e.values] : [...Zs(e.values, 2)]
					};
				}
				visitDecimal(e) {
					return { DATA: [...Zs(e.values, 4)] };
				}
				visitList(e) {
					return {
						OFFSET: [...e.valueOffsets],
						children: e.type.children.map((t, n) => this.visit(new Ks.Column(t, [e.getChildAt(n)])))
					};
				}
				visitStruct(e) {
					return {
						children: e.type.children.map((t, n) => this.visit(new Ks.Column(t, [e.getChildAt(n)])))
					};
				}
				visitUnion(e) {
					return {
						TYPE: [...e.typeIds],
						OFFSET: e.type.mode === Hl.UnionMode.Dense ? [...e.valueOffsets] : void 0,
						children: e.type.children.map((t, n) => this.visit(new Ks.Column(t, [e.getChildAt(n)])))
					};
				}
				visitInterval(e) {
					return { DATA: [...e.values] };
				}
				visitFixedSizeList(e) {
					return {
						children: e.type.children.map((t, n) => this.visit(new Ks.Column(t, [e.getChildAt(n)])))
					};
				}
				visitMap(e) {
					return {
						OFFSET: [...e.valueOffsets],
						children: e.type.children.map((t, n) => this.visit(new Ks.Column(t, [e.getChildAt(n)])))
					};
				}
			};
		Xa.JSONVectorAssembler = Qa;
		function* mm(r) {
			for (let e of r)
				yield e
					.reduce((t, n) => `${t}${('0' + (n & 255).toString(16)).slice(-2)}`, '')
					.toUpperCase();
		}
		function* Zs(r, e) {
			for (let t = -1, n = r.length / e; ++t < n; )
				yield `${OS.BN.new(r.subarray((t + 0) * e, (t + 1) * e), !1)}`;
		}
	});
	var iu = w((Sr) => {
		'use strict';
		Object.defineProperty(Sr, '__esModule', { value: !0 });
		Sr.RecordBatchJSONWriter =
			Sr.RecordBatchFileWriter =
			Sr.RecordBatchStreamWriter =
			Sr.RecordBatchWriter =
				void 0;
		var gm = at(),
			Yl = Xs(),
			VS = Ga(),
			kS = Wi(),
			PS = de(),
			LS = et(),
			eu = ti(),
			Gl = ti(),
			$i = ml(),
			$l = ve(),
			vm = Cl(),
			Jl = mn(),
			Tm = hm(),
			NS = _m(),
			wm = bm(),
			xS = Je(),
			Kl = zr(),
			CS = yi(),
			Br = ut(),
			Qs = class extends CS.ReadableInterop {
				constructor(e) {
					super();
					(this._position = 0),
						(this._started = !1),
						(this._sink = new Jl.AsyncByteQueue()),
						(this._schema = null),
						(this._dictionaryBlocks = []),
						(this._recordBatchBlocks = []),
						(this._dictionaryDeltaOffsets = new Map()),
						Br.isObject(e) || (e = { autoDestroy: !0, writeLegacyIpcFormat: !1 }),
						(this._autoDestroy = typeof e.autoDestroy == 'boolean' ? e.autoDestroy : !0),
						(this._writeLegacyIpcFormat =
							typeof e.writeLegacyIpcFormat == 'boolean' ? e.writeLegacyIpcFormat : !1);
				}
				static throughNode(e) {
					throw new Error('"throughNode" not available in this environment');
				}
				static throughDOM(e, t) {
					throw new Error('"throughDOM" not available in this environment');
				}
				toString(e = !1) {
					return this._sink.toString(e);
				}
				toUint8Array(e = !1) {
					return this._sink.toUint8Array(e);
				}
				writeAll(e) {
					return Br.isPromise(e)
						? e.then((t) => this.writeAll(t))
						: Br.isAsyncIterable(e)
						? Ql(this, e)
						: Zl(this, e);
				}
				get closed() {
					return this._sink.closed;
				}
				[Symbol.asyncIterator]() {
					return this._sink[Symbol.asyncIterator]();
				}
				toDOMStream(e) {
					return this._sink.toDOMStream(e);
				}
				toNodeStream(e) {
					return this._sink.toNodeStream(e);
				}
				close() {
					return this.reset()._sink.close();
				}
				abort(e) {
					return this.reset()._sink.abort(e);
				}
				finish() {
					return this._autoDestroy ? this.close() : this.reset(this._sink, this._schema), this;
				}
				reset(e = this._sink, t = null) {
					return (
						e === this._sink || e instanceof Jl.AsyncByteQueue
							? (this._sink = e)
							: ((this._sink = new Jl.AsyncByteQueue()),
							  e && Br.isWritableDOMStream(e)
									? this.toDOMStream({ type: 'bytes' }).pipeTo(e)
									: e &&
									  Br.isWritableNodeStream(e) &&
									  this.toNodeStream({ objectMode: !1 }).pipe(e)),
						this._started && this._schema && this._writeFooter(this._schema),
						(this._started = !1),
						(this._dictionaryBlocks = []),
						(this._recordBatchBlocks = []),
						(this._dictionaryDeltaOffsets = new Map()),
						(!t || !vm.compareSchemas(t, this._schema)) &&
							(t === null
								? ((this._position = 0), (this._schema = null))
								: ((this._started = !0), (this._schema = t), this._writeSchema(t))),
						this
					);
				}
				write(e) {
					let t = null;
					if (this._sink) {
						if (e == null) return this.finish() && void 0;
						if (e instanceof Yl.Table && !(t = e.schema)) return this.finish() && void 0;
						if (e instanceof Kl.RecordBatch && !(t = e.schema)) return this.finish() && void 0;
					} else throw new Error('RecordBatchWriter is closed');
					if (t && !vm.compareSchemas(t, this._schema)) {
						if (this._started && this._autoDestroy) return this.close();
						this.reset(this._sink, t);
					}
					e instanceof Kl.RecordBatch
						? e instanceof Kl._InternalEmptyPlaceholderRecordBatch || this._writeRecordBatch(e)
						: e instanceof Yl.Table
						? this.writeAll(e.chunks)
						: Br.isIterable(e) && this.writeAll(e);
				}
				_writeMessage(e, t = 8) {
					let n = t - 1,
						i = eu.Message.encode(e),
						s = i.byteLength,
						o = this._writeLegacyIpcFormat ? 4 : 8,
						l = (s + o + n) & ~n,
						h = l - s - o;
					return (
						e.headerType === $l.MessageHeader.RecordBatch
							? this._recordBatchBlocks.push(new $i.FileBlock(l, e.bodyLength, this._position))
							: e.headerType === $l.MessageHeader.DictionaryBatch &&
							  this._dictionaryBlocks.push(new $i.FileBlock(l, e.bodyLength, this._position)),
						this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)),
						this._write(Int32Array.of(l - o)),
						s > 0 && this._write(i),
						this._writePadding(h)
					);
				}
				_write(e) {
					if (this._started) {
						let t = xS.toUint8Array(e);
						t && t.byteLength > 0 && (this._sink.write(t), (this._position += t.byteLength));
					}
					return this;
				}
				_writeSchema(e) {
					return this._writeMessage(eu.Message.from(e));
				}
				_writeFooter(e) {
					return this._writeLegacyIpcFormat
						? this._write(Int32Array.of(0))
						: this._write(Int32Array.of(-1, 0));
				}
				_writeMagic() {
					return this._write(VS.MAGIC);
				}
				_writePadding(e) {
					return e > 0 ? this._write(new Uint8Array(e)) : this;
				}
				_writeRecordBatch(e) {
					let {
							byteLength: t,
							nodes: n,
							bufferRegions: i,
							buffers: s
						} = Tm.VectorAssembler.assemble(e),
						o = new Gl.RecordBatch(e.length, n, i),
						l = eu.Message.from(o, t);
					return this._writeDictionaries(e)._writeMessage(l)._writeBodyBuffers(s);
				}
				_writeDictionaryBatch(e, t, n = !1) {
					this._dictionaryDeltaOffsets.set(
						t,
						e.length + (this._dictionaryDeltaOffsets.get(t) || 0)
					);
					let {
							byteLength: i,
							nodes: s,
							bufferRegions: o,
							buffers: l
						} = Tm.VectorAssembler.assemble(e),
						h = new Gl.RecordBatch(e.length, s, o),
						u = new Gl.DictionaryBatch(h, t, n),
						m = eu.Message.from(u, i);
					return this._writeMessage(m)._writeBodyBuffers(l);
				}
				_writeBodyBuffers(e) {
					let t, n, i;
					for (let s = -1, o = e.length; ++s < o; )
						(t = e[s]) &&
							(n = t.byteLength) > 0 &&
							(this._write(t), (i = ((n + 7) & ~7) - n) > 0 && this._writePadding(i));
					return this;
				}
				_writeDictionaries(e) {
					for (let [t, n] of e.dictionaries) {
						let i = this._dictionaryDeltaOffsets.get(t) || 0;
						if (i === 0 || (n = n.slice(i)).length > 0) {
							let s = 'chunks' in n ? n.chunks : [n];
							for (let o of s) this._writeDictionaryBatch(o, t, i > 0), (i += o.length);
						}
					}
					return this;
				}
			};
		Sr.RecordBatchWriter = Qs;
		var tu = class extends Qs {
			static writeAll(e, t) {
				let n = new tu(t);
				return Br.isPromise(e)
					? e.then((i) => n.writeAll(i))
					: Br.isAsyncIterable(e)
					? Ql(n, e)
					: Zl(n, e);
			}
		};
		Sr.RecordBatchStreamWriter = tu;
		var ru = class extends Qs {
			static writeAll(e) {
				let t = new ru();
				return Br.isPromise(e)
					? e.then((n) => t.writeAll(n))
					: Br.isAsyncIterable(e)
					? Ql(t, e)
					: Zl(t, e);
			}
			constructor() {
				super();
				this._autoDestroy = !0;
			}
			_writeSchema(e) {
				return this._writeMagic()._writePadding(2);
			}
			_writeFooter(e) {
				let t = $i.Footer.encode(
					new $i.Footer(e, $l.MetadataVersion.V4, this._recordBatchBlocks, this._dictionaryBlocks)
				);
				return super._writeFooter(e)._write(t)._write(Int32Array.of(t.byteLength))._writeMagic();
			}
		};
		Sr.RecordBatchFileWriter = ru;
		var nu = class extends Qs {
			constructor() {
				super();
				(this._autoDestroy = !0), (this._recordBatches = []), (this._dictionaries = []);
			}
			static writeAll(e) {
				return new nu().writeAll(e);
			}
			_writeMessage() {
				return this;
			}
			_writeFooter(e) {
				return this;
			}
			_writeSchema(e) {
				return this._write(`{
  "schema": ${JSON.stringify({ fields: e.fields.map(Im) }, null, 2)}`);
			}
			_writeDictionaries(e) {
				return e.dictionaries.size > 0 && this._dictionaries.push(e), this;
			}
			_writeDictionaryBatch(e, t, n = !1) {
				return (
					this._dictionaryDeltaOffsets.set(
						t,
						e.length + (this._dictionaryDeltaOffsets.get(t) || 0)
					),
					this._write(
						this._dictionaryBlocks.length === 0
							? '    '
							: `,
    `
					),
					this._write(`${jS(e, t, n)}`),
					this._dictionaryBlocks.push(new $i.FileBlock(0, 0, 0)),
					this
				);
			}
			_writeRecordBatch(e) {
				return this._writeDictionaries(e), this._recordBatches.push(e), this;
			}
			close() {
				if (this._dictionaries.length > 0) {
					this._write(`,
  "dictionaries": [
`);
					for (let e of this._dictionaries) super._writeDictionaries(e);
					this._write(`
  ]`);
				}
				if (this._recordBatches.length > 0) {
					for (let e = -1, t = this._recordBatches.length; ++e < t; )
						this._write(
							e === 0
								? `,
  "batches": [
    `
								: `,
    `
						),
							this._write(`${qS(this._recordBatches[e])}`),
							this._recordBatchBlocks.push(new $i.FileBlock(0, 0, 0));
					this._write(`
  ]`);
				}
				return (
					this._schema &&
						this._write(`
}`),
					(this._dictionaries = []),
					(this._recordBatches = []),
					super.close()
				);
			}
		};
		Sr.RecordBatchJSONWriter = nu;
		function Zl(r, e) {
			let t = e;
			e instanceof Yl.Table && ((t = e.chunks), r.reset(void 0, e.schema));
			for (let n of t) r.write(n);
			return r.finish();
		}
		function Ql(r, e) {
			var t, n, i, s;
			return gm.__awaiter(this, void 0, void 0, function* () {
				try {
					for (t = gm.__asyncValues(e); (n = yield t.next()), !n.done; ) {
						let o = n.value;
						r.write(o);
					}
				} catch (o) {
					i = { error: o };
				} finally {
					try {
						n && !n.done && (s = t.return) && (yield s.call(t));
					} finally {
						if (i) throw i.error;
					}
				}
				return r.finish();
			});
		}
		function Im({ name: r, type: e, nullable: t }) {
			let n = new NS.JSONTypeAssembler();
			return {
				name: r,
				nullable: t,
				type: n.visit(e),
				children: (e.children || []).map(Im),
				dictionary: PS.DataType.isDictionary(e)
					? { id: e.id, isOrdered: e.isOrdered, indexType: n.visit(e.indices) }
					: void 0
			};
		}
		function jS(r, e, t = !1) {
			let n = new LS.Field(`${e}`, r.type, r.nullCount > 0),
				i = wm.JSONVectorAssembler.assemble(new kS.Column(n, [r]));
			return JSON.stringify({ id: e, isDelta: t, data: { count: r.length, columns: i } }, null, 2);
		}
		function qS(r) {
			return JSON.stringify(
				{ count: r.length, columns: wm.JSONVectorAssembler.assemble(r) },
				null,
				2
			);
		}
	});
	var td = w((An) => {
		'use strict';
		Object.defineProperty(An, '__esModule', { value: !0 });
		An.distributeVectorsIntoRecordBatches =
			An.distributeColumnsIntoRecordBatches =
			An.ensureSameLengthData =
				void 0;
		var Bm = rr(),
			Xl = et(),
			WS = Tn(),
			zS = zr(),
			ed = new Uint8Array(0),
			Sm = (r) => [ed, ed, new Uint8Array(r), ed];
		function HS(r, e, t = e.reduce((n, i) => Math.max(n, i.length), 0)) {
			let n,
				i,
				s = -1,
				o = e.length,
				l = [...r.fields],
				h = [],
				u = ((t + 63) & ~63) >> 3;
			for (; ++s < o; )
				(n = e[s]) && n.length === t
					? (h[s] = n)
					: ((i = l[s]).nullable || (l[s] = l[s].clone({ nullable: !0 })),
					  (h[s] = n
							? n._changeLengthAndBackfillNullBitmap(t)
							: Bm.Data.new(i.type, 0, t, t, Sm(u))));
			return [new Xl.Schema(l), t, h];
		}
		An.ensureSameLengthData = HS;
		function YS(r) {
			return Am(new Xl.Schema(r.map(({ field: e }) => e)), r);
		}
		An.distributeColumnsIntoRecordBatches = YS;
		function Am(r, e) {
			return GS(
				r,
				e.map((t) => (t instanceof WS.Chunked ? t.chunks.map((n) => n.data) : [t.data]))
			);
		}
		An.distributeVectorsIntoRecordBatches = Am;
		function GS(r, e) {
			let t = [...r.fields],
				n = [],
				i = { numBatches: e.reduce((E, M) => Math.max(E, M.length), 0) },
				s = 0,
				o = 0,
				l = -1,
				h = e.length,
				u,
				m = [];
			for (; i.numBatches-- > 0; ) {
				for (o = Number.POSITIVE_INFINITY, l = -1; ++l < h; )
					(m[l] = u = e[l].shift()), (o = Math.min(o, u ? u.length : o));
				isFinite(o) && ((m = $S(t, o, m, e, i)), o > 0 && (n[s++] = [o, m.slice()]));
			}
			return [(r = new Xl.Schema(t, r.metadata)), n.map((E) => new zS.RecordBatch(r, ...E))];
		}
		function $S(r, e, t, n, i) {
			let s,
				o,
				l = 0,
				h = -1,
				u = n.length,
				m = ((e + 63) & ~63) >> 3;
			for (; ++h < u; )
				(s = t[h]) && (l = s.length) >= e
					? l === e
						? (t[h] = s)
						: ((t[h] = s.slice(0, e)),
						  (s = s.slice(e, l - e)),
						  (i.numBatches = Math.max(i.numBatches, n[h].unshift(s))))
					: ((o = r[h]).nullable || (r[h] = o.clone({ nullable: !0 })),
					  (t[h] = s
							? s._changeLengthAndBackfillNullBitmap(e)
							: Bm.Data.new(o.type, 0, e, e, Sm(m))));
			return t;
		}
	});
	var qe = w((su) => {
		'use strict';
		Object.defineProperty(su, '__esModule', { value: !0 });
		su.BaseVector = void 0;
		var JS = ve(),
			KS = Tn(),
			ZS = Hs(),
			rd = Ce(),
			nd = class extends rd.AbstractVector {
				constructor(e, t) {
					super();
					(this._children = t),
						(this.numChildren = e.childData.length),
						this._bindDataAccessors((this.data = e));
				}
				get type() {
					return this.data.type;
				}
				get typeId() {
					return this.data.typeId;
				}
				get length() {
					return this.data.length;
				}
				get offset() {
					return this.data.offset;
				}
				get stride() {
					return this.data.stride;
				}
				get nullCount() {
					return this.data.nullCount;
				}
				get byteLength() {
					return this.data.byteLength;
				}
				get VectorName() {
					return `${JS.Type[this.typeId]}Vector`;
				}
				get ArrayType() {
					return this.type.ArrayType;
				}
				get values() {
					return this.data.values;
				}
				get typeIds() {
					return this.data.typeIds;
				}
				get nullBitmap() {
					return this.data.nullBitmap;
				}
				get valueOffsets() {
					return this.data.valueOffsets;
				}
				get [Symbol.toStringTag]() {
					return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
				}
				clone(e, t = this._children) {
					return rd.Vector.new(e, t);
				}
				concat(...e) {
					return KS.Chunked.concat(this, ...e);
				}
				slice(e, t) {
					return ZS.clampRange(this, e, t, this._sliceInternal);
				}
				isValid(e) {
					if (this.nullCount > 0) {
						let t = this.offset + e;
						return (this.nullBitmap[t >> 3] & (1 << t % 8)) !== 0;
					}
					return !0;
				}
				getChildAt(e) {
					return e < 0 || e >= this.numChildren
						? null
						: (this._children || (this._children = []))[e] ||
								(this._children[e] = rd.Vector.new(this.data.childData[e]));
				}
				toJSON() {
					return [...this];
				}
				_sliceInternal(e, t, n) {
					return e.clone(e.data.slice(t, n - t), null);
				}
				_bindDataAccessors(e) {}
			};
		su.BaseVector = nd;
		nd.prototype[Symbol.isConcatSpreadable] = !0;
	});
	var id = w((ou) => {
		'use strict';
		Object.defineProperty(ou, '__esModule', { value: !0 });
		ou.BinaryVector = void 0;
		var QS = Ce(),
			XS = qe(),
			e1 = de(),
			Dm = class extends XS.BaseVector {
				asUtf8() {
					return QS.Vector.new(this.data.clone(new e1.Utf8()));
				}
			};
		ou.BinaryVector = Dm;
	});
	var sd = w((au) => {
		'use strict';
		Object.defineProperty(au, '__esModule', { value: !0 });
		au.BoolVector = void 0;
		var t1 = de(),
			r1 = qe(),
			n1 = Ar(),
			Om = class extends r1.BaseVector {
				static from(e) {
					return n1.vectorFromValuesWithType(() => new t1.Bool(), e);
				}
			};
		au.BoolVector = Om;
	});
	var ad = w((Dn) => {
		'use strict';
		Object.defineProperty(Dn, '__esModule', { value: !0 });
		Dn.DateMillisecondVector = Dn.DateDayVector = Dn.DateVector = void 0;
		var i1 = ve(),
			s1 = qe(),
			Fm = Ar(),
			od = de(),
			uu = class extends s1.BaseVector {
				static from(...e) {
					return e.length === 2
						? Fm.vectorFromValuesWithType(
								() => (e[1] === i1.DateUnit.DAY ? new od.DateDay() : new od.DateMillisecond()),
								e[0]
						  )
						: Fm.vectorFromValuesWithType(() => new od.DateMillisecond(), e[0]);
				}
			};
		Dn.DateVector = uu;
		var Em = class extends uu {};
		Dn.DateDayVector = Em;
		var Mm = class extends uu {};
		Dn.DateMillisecondVector = Mm;
	});
	var ud = w((cu) => {
		'use strict';
		Object.defineProperty(cu, '__esModule', { value: !0 });
		cu.DecimalVector = void 0;
		var o1 = qe(),
			Rm = class extends o1.BaseVector {};
		cu.DecimalVector = Rm;
	});
	var du = w((lu) => {
		'use strict';
		Object.defineProperty(lu, '__esModule', { value: !0 });
		lu.DictionaryVector = void 0;
		var a1 = rr(),
			Um = Ce(),
			u1 = qe(),
			c1 = Ar(),
			l1 = de(),
			cd = class extends u1.BaseVector {
				constructor(e) {
					super(e);
					this.indices = Um.Vector.new(e.clone(this.type.indices));
				}
				static from(...e) {
					if (e.length === 3) {
						let [t, n, i] = e,
							s = new l1.Dictionary(t.type, n, null, null);
						return Um.Vector.new(a1.Data.Dictionary(s, 0, i.length, 0, null, i, t));
					}
					return c1.vectorFromValuesWithType(() => e[0].type, e[0]);
				}
				get dictionary() {
					return this.data.dictionary;
				}
				reverseLookup(e) {
					return this.dictionary.indexOf(e);
				}
				getKey(e) {
					return this.indices.get(e);
				}
				getValue(e) {
					return this.dictionary.get(e);
				}
				setKey(e, t) {
					return this.indices.set(e, t);
				}
				setValue(e, t) {
					return this.dictionary.set(e, t);
				}
			};
		lu.DictionaryVector = cd;
		cd.prototype.indices = null;
	});
	var ld = w((fu) => {
		'use strict';
		Object.defineProperty(fu, '__esModule', { value: !0 });
		fu.FixedSizeBinaryVector = void 0;
		var d1 = qe(),
			Vm = class extends d1.BaseVector {};
		fu.FixedSizeBinaryVector = Vm;
	});
	var dd = w((hu) => {
		'use strict';
		Object.defineProperty(hu, '__esModule', { value: !0 });
		hu.FixedSizeListVector = void 0;
		var f1 = qe(),
			km = class extends f1.BaseVector {};
		hu.FixedSizeListVector = km;
	});
	var _d = w((Dr) => {
		'use strict';
		Object.defineProperty(Dr, '__esModule', { value: !0 });
		Dr.Float64Vector = Dr.Float32Vector = Dr.Float16Vector = Dr.FloatVector = void 0;
		var h1 = rr(),
			p1 = Ce(),
			_1 = qe(),
			y1 = Ar(),
			si = de(),
			eo = class extends _1.BaseVector {
				static from(e) {
					let t = g1(this);
					if (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) {
						let n = b1(e.constructor) || t;
						if ((t === null && (t = n), t && t === n)) {
							let i = new t(),
								s = e.byteLength / i.ArrayType.BYTES_PER_ELEMENT;
							if (!m1(t, e.constructor)) return p1.Vector.new(h1.Data.Float(i, 0, s, 0, null, e));
						}
					}
					if (t) return y1.vectorFromValuesWithType(() => new t(), e);
					throw e instanceof DataView || e instanceof ArrayBuffer
						? new TypeError(`Cannot infer float type from instance of ${e.constructor.name}`)
						: new TypeError('Unrecognized FloatVector input');
				}
			};
		Dr.FloatVector = eo;
		var fd = class extends eo {
			toFloat32Array() {
				return new Float32Array(this);
			}
			toFloat64Array() {
				return new Float64Array(this);
			}
		};
		Dr.Float16Vector = fd;
		var hd = class extends eo {};
		Dr.Float32Vector = hd;
		var pd = class extends eo {};
		Dr.Float64Vector = pd;
		var m1 = (r, e) => r === si.Float16 && e !== Uint16Array,
			b1 = (r) => {
				switch (r) {
					case Uint16Array:
						return si.Float16;
					case Float32Array:
						return si.Float32;
					case Float64Array:
						return si.Float64;
					default:
						return null;
				}
			},
			g1 = (r) => {
				switch (r) {
					case fd:
						return si.Float16;
					case hd:
						return si.Float32;
					case pd:
						return si.Float64;
					default:
						return null;
				}
			};
	});
	var yd = w((On) => {
		'use strict';
		Object.defineProperty(On, '__esModule', { value: !0 });
		On.IntervalYearMonthVector = On.IntervalDayTimeVector = On.IntervalVector = void 0;
		var v1 = qe(),
			pu = class extends v1.BaseVector {};
		On.IntervalVector = pu;
		var Pm = class extends pu {};
		On.IntervalDayTimeVector = Pm;
		var Lm = class extends pu {};
		On.IntervalYearMonthVector = Lm;
	});
	var _u = w((Ge) => {
		'use strict';
		Object.defineProperty(Ge, '__esModule', { value: !0 });
		Ge.Uint64Vector =
			Ge.Uint32Vector =
			Ge.Uint16Vector =
			Ge.Uint8Vector =
			Ge.Int64Vector =
			Ge.Int32Vector =
			Ge.Int16Vector =
			Ge.Int8Vector =
			Ge.IntVector =
				void 0;
		var T1 = rr(),
			w1 = Ce(),
			I1 = qe(),
			B1 = Ar(),
			Nm = ut(),
			xm = Je(),
			Pe = de(),
			Or = class extends I1.BaseVector {
				static from(...e) {
					let [t, n = !1] = e,
						i = D1(this, n);
					if (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) {
						let s = A1(t.constructor, n) || i;
						if ((i === null && (i = s), i && i === s)) {
							let o = new i(),
								l = t.byteLength / o.ArrayType.BYTES_PER_ELEMENT;
							return (
								S1(i, t.constructor) && (l *= 0.5), w1.Vector.new(T1.Data.Int(o, 0, l, 0, null, t))
							);
						}
					}
					if (i) return B1.vectorFromValuesWithType(() => new i(), t);
					throw t instanceof DataView || t instanceof ArrayBuffer
						? new TypeError(`Cannot infer integer type from instance of ${t.constructor.name}`)
						: new TypeError('Unrecognized IntVector input');
				}
			};
		Ge.IntVector = Or;
		var md = class extends Or {};
		Ge.Int8Vector = md;
		var bd = class extends Or {};
		Ge.Int16Vector = bd;
		var gd = class extends Or {};
		Ge.Int32Vector = gd;
		var vd = class extends Or {
			toBigInt64Array() {
				return xm.toBigInt64Array(this.values);
			}
			get values64() {
				return this._values64 || (this._values64 = this.toBigInt64Array());
			}
		};
		Ge.Int64Vector = vd;
		var Td = class extends Or {};
		Ge.Uint8Vector = Td;
		var wd = class extends Or {};
		Ge.Uint16Vector = wd;
		var Id = class extends Or {};
		Ge.Uint32Vector = Id;
		var Bd = class extends Or {
			toBigUint64Array() {
				return xm.toBigUint64Array(this.values);
			}
			get values64() {
				return this._values64 || (this._values64 = this.toBigUint64Array());
			}
		};
		Ge.Uint64Vector = Bd;
		var S1 = (r, e) =>
				(r === Pe.Int64 || r === Pe.Uint64) && (e === Int32Array || e === Uint32Array),
			A1 = (r, e) => {
				switch (r) {
					case Int8Array:
						return Pe.Int8;
					case Int16Array:
						return Pe.Int16;
					case Int32Array:
						return e ? Pe.Int64 : Pe.Int32;
					case Nm.BigInt64Array:
						return Pe.Int64;
					case Uint8Array:
						return Pe.Uint8;
					case Uint16Array:
						return Pe.Uint16;
					case Uint32Array:
						return e ? Pe.Uint64 : Pe.Uint32;
					case Nm.BigUint64Array:
						return Pe.Uint64;
					default:
						return null;
				}
			},
			D1 = (r, e) => {
				switch (r) {
					case md:
						return Pe.Int8;
					case bd:
						return Pe.Int16;
					case gd:
						return e ? Pe.Int64 : Pe.Int32;
					case vd:
						return Pe.Int64;
					case Td:
						return Pe.Uint8;
					case wd:
						return Pe.Uint16;
					case Id:
						return e ? Pe.Uint64 : Pe.Uint32;
					case Bd:
						return Pe.Uint64;
					default:
						return null;
				}
			};
	});
	var Sd = w((yu) => {
		'use strict';
		Object.defineProperty(yu, '__esModule', { value: !0 });
		yu.ListVector = void 0;
		var O1 = qe(),
			Cm = class extends O1.BaseVector {};
		yu.ListVector = Cm;
	});
	var Ad = w((mu) => {
		'use strict';
		Object.defineProperty(mu, '__esModule', { value: !0 });
		mu.MapVector = void 0;
		var F1 = Ws(),
			E1 = Ce(),
			M1 = qe(),
			R1 = de(),
			jm = class extends M1.BaseVector {
				asList() {
					let e = this.type.children[0];
					return E1.Vector.new(this.data.clone(new R1.List(e)));
				}
				bind(e) {
					let t = this.getChildAt(0),
						{ [e]: n, [e + 1]: i } = this.valueOffsets;
					return new F1.MapRow(t.slice(n, i));
				}
			};
		mu.MapVector = jm;
	});
	var Dd = w((bu) => {
		'use strict';
		Object.defineProperty(bu, '__esModule', { value: !0 });
		bu.NullVector = void 0;
		var U1 = qe(),
			qm = class extends U1.BaseVector {};
		bu.NullVector = qm;
	});
	var Od = w((gu) => {
		'use strict';
		Object.defineProperty(gu, '__esModule', { value: !0 });
		gu.StructVector = void 0;
		var V1 = Ws(),
			k1 = qe(),
			P1 = Symbol.for('rowIndex'),
			Wm = class extends k1.BaseVector {
				bind(e) {
					let t = this._row || (this._row = new V1.StructRow(this)),
						n = Object.create(t);
					return (n[P1] = e), n;
				}
			};
		gu.StructVector = Wm;
	});
	var Fd = w((Ht) => {
		'use strict';
		Object.defineProperty(Ht, '__esModule', { value: !0 });
		Ht.TimestampNanosecondVector =
			Ht.TimestampMicrosecondVector =
			Ht.TimestampMillisecondVector =
			Ht.TimestampSecondVector =
			Ht.TimestampVector =
				void 0;
		var L1 = qe(),
			Ji = class extends L1.BaseVector {};
		Ht.TimestampVector = Ji;
		var zm = class extends Ji {};
		Ht.TimestampSecondVector = zm;
		var Hm = class extends Ji {};
		Ht.TimestampMillisecondVector = Hm;
		var Ym = class extends Ji {};
		Ht.TimestampMicrosecondVector = Ym;
		var Gm = class extends Ji {};
		Ht.TimestampNanosecondVector = Gm;
	});
	var Ed = w((Yt) => {
		'use strict';
		Object.defineProperty(Yt, '__esModule', { value: !0 });
		Yt.TimeNanosecondVector =
			Yt.TimeMicrosecondVector =
			Yt.TimeMillisecondVector =
			Yt.TimeSecondVector =
			Yt.TimeVector =
				void 0;
		var N1 = qe(),
			Ki = class extends N1.BaseVector {};
		Yt.TimeVector = Ki;
		var $m = class extends Ki {};
		Yt.TimeSecondVector = $m;
		var Jm = class extends Ki {};
		Yt.TimeMillisecondVector = Jm;
		var Km = class extends Ki {};
		Yt.TimeMicrosecondVector = Km;
		var Zm = class extends Ki {};
		Yt.TimeNanosecondVector = Zm;
	});
	var Md = w((Fn) => {
		'use strict';
		Object.defineProperty(Fn, '__esModule', { value: !0 });
		Fn.SparseUnionVector = Fn.DenseUnionVector = Fn.UnionVector = void 0;
		var x1 = qe(),
			vu = class extends x1.BaseVector {
				get typeIdToChildIndex() {
					return this.data.type.typeIdToChildIndex;
				}
			};
		Fn.UnionVector = vu;
		var Qm = class extends vu {
			get valueOffsets() {
				return this.data.valueOffsets;
			}
		};
		Fn.DenseUnionVector = Qm;
		var Xm = class extends vu {};
		Fn.SparseUnionVector = Xm;
	});
	var Rd = w((Tu) => {
		'use strict';
		Object.defineProperty(Tu, '__esModule', { value: !0 });
		Tu.Utf8Vector = void 0;
		var C1 = Ce(),
			j1 = qe(),
			eb = de(),
			q1 = Ar(),
			tb = class extends j1.BaseVector {
				static from(e) {
					return q1.vectorFromValuesWithType(() => new eb.Utf8(), e);
				}
				asBinary() {
					return C1.Vector.new(this.data.clone(new eb.Binary()));
				}
			};
		Tu.Utf8Vector = tb;
	});
	var rb = w((En) => {
		'use strict';
		Object.defineProperty(En, '__esModule', { value: !0 });
		En.partial2 = En.partial1 = En.partial0 = void 0;
		function W1(r) {
			return function () {
				return r(this);
			};
		}
		En.partial0 = W1;
		function z1(r) {
			return function (e) {
				return r(this, e);
			};
		}
		En.partial1 = z1;
		function H1(r) {
			return function (e, t) {
				return r(this, e, t);
			};
		}
		En.partial2 = H1;
	});
	var kd = w((Zi) => {
		'use strict';
		Object.defineProperty(Zi, '__esModule', { value: !0 });
		Zi.instance = Zi.GetVisitor = void 0;
		var wu = Ls(),
			Y1 = it(),
			G1 = Nn(),
			$1 = Us(),
			Gt = ve(),
			q = class extends Y1.Visitor {};
		Zi.GetVisitor = q;
		var J1 = (r, e) => 864e5 * r[e],
			Ud = (r, e) => 4294967296 * r[e + 1] + (r[e] >>> 0),
			K1 = (r, e) => 4294967296 * (r[e + 1] / 1e3) + (r[e] >>> 0) / 1e3,
			Z1 = (r, e) => 4294967296 * (r[e + 1] / 1e6) + (r[e] >>> 0) / 1e6,
			nb = (r) => new Date(r),
			Q1 = (r, e) => nb(J1(r, e)),
			X1 = (r, e) => nb(Ud(r, e)),
			eA = (r, e) => null,
			ib = (r, e, t) => {
				let { [t]: n, [t + 1]: i } = e;
				return n != null && i != null ? r.subarray(n, i) : null;
			},
			tA = ({ offset: r, values: e }, t) => {
				let n = r + t;
				return (e[n >> 3] & (1 << n % 8)) != 0;
			},
			sb = ({ values: r }, e) => Q1(r, e),
			ob = ({ values: r }, e) => X1(r, e * 2),
			Fr = ({ stride: r, values: e }, t) => e[r * t],
			ab = ({ stride: r, values: e }, t) => $1.uint16ToFloat64(e[r * t]),
			Vd = ({ stride: r, values: e, type: t }, n) =>
				wu.BN.new(e.subarray(r * n, r * (n + 1)), t.isSigned),
			rA = ({ stride: r, values: e }, t) => e.subarray(r * t, r * (t + 1)),
			nA = ({ values: r, valueOffsets: e }, t) => ib(r, e, t),
			iA = ({ values: r, valueOffsets: e }, t) => {
				let n = ib(r, e, t);
				return n !== null ? G1.decodeUtf8(n) : null;
			},
			sA = (r, e) => (r.type.bitWidth < 64 ? Fr(r, e) : Vd(r, e)),
			oA = (r, e) => (r.type.precision !== Gt.Precision.HALF ? Fr(r, e) : ab(r, e)),
			aA = (r, e) => (r.type.unit === Gt.DateUnit.DAY ? sb(r, e) : ob(r, e)),
			ub = ({ values: r }, e) => 1e3 * Ud(r, e * 2),
			cb = ({ values: r }, e) => Ud(r, e * 2),
			lb = ({ values: r }, e) => K1(r, e * 2),
			db = ({ values: r }, e) => Z1(r, e * 2),
			uA = (r, e) => {
				switch (r.type.unit) {
					case Gt.TimeUnit.SECOND:
						return ub(r, e);
					case Gt.TimeUnit.MILLISECOND:
						return cb(r, e);
					case Gt.TimeUnit.MICROSECOND:
						return lb(r, e);
					case Gt.TimeUnit.NANOSECOND:
						return db(r, e);
				}
			},
			fb = ({ values: r, stride: e }, t) => r[e * t],
			hb = ({ values: r, stride: e }, t) => r[e * t],
			pb = ({ values: r }, e) => wu.BN.signed(r.subarray(2 * e, 2 * (e + 1))),
			_b = ({ values: r }, e) => wu.BN.signed(r.subarray(2 * e, 2 * (e + 1))),
			cA = (r, e) => {
				switch (r.type.unit) {
					case Gt.TimeUnit.SECOND:
						return fb(r, e);
					case Gt.TimeUnit.MILLISECOND:
						return hb(r, e);
					case Gt.TimeUnit.MICROSECOND:
						return pb(r, e);
					case Gt.TimeUnit.NANOSECOND:
						return _b(r, e);
				}
			},
			lA = ({ values: r }, e) => wu.BN.decimal(r.subarray(4 * e, 4 * (e + 1))),
			dA = (r, e) => {
				let t = r.getChildAt(0),
					{ valueOffsets: n, stride: i } = r;
				return t.slice(n[e * i], n[e * i + 1]);
			},
			fA = (r, e) => r.bind(e),
			hA = (r, e) => r.bind(e),
			pA = (r, e) => (r.type.mode === Gt.UnionMode.Dense ? yb(r, e) : mb(r, e)),
			yb = (r, e) => {
				let t = r.typeIdToChildIndex[r.typeIds[e]],
					n = r.getChildAt(t);
				return n ? n.get(r.valueOffsets[e]) : null;
			},
			mb = (r, e) => {
				let t = r.typeIdToChildIndex[r.typeIds[e]],
					n = r.getChildAt(t);
				return n ? n.get(e) : null;
			},
			_A = (r, e) => r.getValue(r.getKey(e)),
			yA = (r, e) => (r.type.unit === Gt.IntervalUnit.DAY_TIME ? bb(r, e) : gb(r, e)),
			bb = ({ values: r }, e) => r.subarray(2 * e, 2 * (e + 1)),
			gb = ({ values: r }, e) => {
				let t = r[e],
					n = new Int32Array(2);
				return (n[0] = (t / 12) | 0), (n[1] = t % 12 | 0), n;
			},
			mA = (r, e) => {
				let t = r.getChildAt(0),
					{ stride: n } = r;
				return t.slice(e * n, (e + 1) * n);
			};
		q.prototype.visitNull = eA;
		q.prototype.visitBool = tA;
		q.prototype.visitInt = sA;
		q.prototype.visitInt8 = Fr;
		q.prototype.visitInt16 = Fr;
		q.prototype.visitInt32 = Fr;
		q.prototype.visitInt64 = Vd;
		q.prototype.visitUint8 = Fr;
		q.prototype.visitUint16 = Fr;
		q.prototype.visitUint32 = Fr;
		q.prototype.visitUint64 = Vd;
		q.prototype.visitFloat = oA;
		q.prototype.visitFloat16 = ab;
		q.prototype.visitFloat32 = Fr;
		q.prototype.visitFloat64 = Fr;
		q.prototype.visitUtf8 = iA;
		q.prototype.visitBinary = nA;
		q.prototype.visitFixedSizeBinary = rA;
		q.prototype.visitDate = aA;
		q.prototype.visitDateDay = sb;
		q.prototype.visitDateMillisecond = ob;
		q.prototype.visitTimestamp = uA;
		q.prototype.visitTimestampSecond = ub;
		q.prototype.visitTimestampMillisecond = cb;
		q.prototype.visitTimestampMicrosecond = lb;
		q.prototype.visitTimestampNanosecond = db;
		q.prototype.visitTime = cA;
		q.prototype.visitTimeSecond = fb;
		q.prototype.visitTimeMillisecond = hb;
		q.prototype.visitTimeMicrosecond = pb;
		q.prototype.visitTimeNanosecond = _b;
		q.prototype.visitDecimal = lA;
		q.prototype.visitList = dA;
		q.prototype.visitStruct = hA;
		q.prototype.visitUnion = pA;
		q.prototype.visitDenseUnion = yb;
		q.prototype.visitSparseUnion = mb;
		q.prototype.visitDictionary = _A;
		q.prototype.visitInterval = yA;
		q.prototype.visitIntervalDayTime = bb;
		q.prototype.visitIntervalYearMonth = gb;
		q.prototype.visitFixedSizeList = mA;
		q.prototype.visitMap = fA;
		Zi.instance = new q();
	});
	var Ib = w((Qi) => {
		'use strict';
		Object.defineProperty(Qi, '__esModule', { value: !0 });
		Qi.instance = Qi.IndexOfVisitor = void 0;
		var bA = it(),
			vb = _r(),
			Tb = Hs(),
			W = class extends bA.Visitor {};
		Qi.IndexOfVisitor = W;
		function gA(r, e) {
			return e === null && r.length > 0 ? 0 : -1;
		}
		function vA(r, e) {
			let { nullBitmap: t } = r.data;
			if (!t || r.nullCount <= 0) return -1;
			let n = 0;
			for (let i of new vb.BitIterator(t, r.data.offset + (e || 0), r.length, t, vb.getBool)) {
				if (!i) return n;
				++n;
			}
			return -1;
		}
		function ee(r, e, t) {
			if (e === void 0) return -1;
			if (e === null) return vA(r, t);
			let n = Tb.createElementComparator(e);
			for (let i = (t || 0) - 1, s = r.length; ++i < s; ) if (n(r.get(i))) return i;
			return -1;
		}
		function wb(r, e, t) {
			let n = Tb.createElementComparator(e);
			for (let i = (t || 0) - 1, s = r.length; ++i < s; ) if (n(r.get(i))) return i;
			return -1;
		}
		W.prototype.visitNull = gA;
		W.prototype.visitBool = ee;
		W.prototype.visitInt = ee;
		W.prototype.visitInt8 = ee;
		W.prototype.visitInt16 = ee;
		W.prototype.visitInt32 = ee;
		W.prototype.visitInt64 = ee;
		W.prototype.visitUint8 = ee;
		W.prototype.visitUint16 = ee;
		W.prototype.visitUint32 = ee;
		W.prototype.visitUint64 = ee;
		W.prototype.visitFloat = ee;
		W.prototype.visitFloat16 = ee;
		W.prototype.visitFloat32 = ee;
		W.prototype.visitFloat64 = ee;
		W.prototype.visitUtf8 = ee;
		W.prototype.visitBinary = ee;
		W.prototype.visitFixedSizeBinary = ee;
		W.prototype.visitDate = ee;
		W.prototype.visitDateDay = ee;
		W.prototype.visitDateMillisecond = ee;
		W.prototype.visitTimestamp = ee;
		W.prototype.visitTimestampSecond = ee;
		W.prototype.visitTimestampMillisecond = ee;
		W.prototype.visitTimestampMicrosecond = ee;
		W.prototype.visitTimestampNanosecond = ee;
		W.prototype.visitTime = ee;
		W.prototype.visitTimeSecond = ee;
		W.prototype.visitTimeMillisecond = ee;
		W.prototype.visitTimeMicrosecond = ee;
		W.prototype.visitTimeNanosecond = ee;
		W.prototype.visitDecimal = ee;
		W.prototype.visitList = ee;
		W.prototype.visitStruct = ee;
		W.prototype.visitUnion = ee;
		W.prototype.visitDenseUnion = wb;
		W.prototype.visitSparseUnion = wb;
		W.prototype.visitDictionary = ee;
		W.prototype.visitInterval = ee;
		W.prototype.visitIntervalDayTime = ee;
		W.prototype.visitIntervalYearMonth = ee;
		W.prototype.visitFixedSizeList = ee;
		W.prototype.visitMap = ee;
		Qi.instance = new W();
	});
	var Pd = w((Xi) => {
		'use strict';
		Object.defineProperty(Xi, '__esModule', { value: !0 });
		Xi.instance = Xi.IteratorVisitor = void 0;
		var Iu = ve(),
			TA = it(),
			wA = _r(),
			Bb = kd(),
			z = class extends TA.Visitor {};
		Xi.IteratorVisitor = z;
		function IA(r) {
			let e = Bb.instance.getVisitFn(r);
			return new wA.BitIterator(r.data.nullBitmap, r.data.offset, r.length, r, (t, n, i, s) =>
				(i & (1 << s)) != 0 ? e(t, n) : null
			);
		}
		var Sb = class {
			constructor(e, t) {
				(this.vector = e), (this.getFn = t), (this.index = 0);
			}
			next() {
				return this.index < this.vector.length
					? { value: this.getFn(this.vector, this.index++) }
					: { done: !0, value: null };
			}
			[Symbol.iterator]() {
				return this;
			}
		};
		function Z(r) {
			if (r.nullCount > 0) return IA(r);
			let { type: e, typeId: t, length: n } = r;
			return r.stride === 1 &&
				(t === Iu.Type.Timestamp ||
					(t === Iu.Type.Int && e.bitWidth !== 64) ||
					(t === Iu.Type.Time && e.bitWidth !== 64) ||
					(t === Iu.Type.Float && e.precision > 0))
				? r.data.values.subarray(0, n)[Symbol.iterator]()
				: new Sb(r, Bb.instance.getVisitFn(r));
		}
		z.prototype.visitNull = Z;
		z.prototype.visitBool = Z;
		z.prototype.visitInt = Z;
		z.prototype.visitInt8 = Z;
		z.prototype.visitInt16 = Z;
		z.prototype.visitInt32 = Z;
		z.prototype.visitInt64 = Z;
		z.prototype.visitUint8 = Z;
		z.prototype.visitUint16 = Z;
		z.prototype.visitUint32 = Z;
		z.prototype.visitUint64 = Z;
		z.prototype.visitFloat = Z;
		z.prototype.visitFloat16 = Z;
		z.prototype.visitFloat32 = Z;
		z.prototype.visitFloat64 = Z;
		z.prototype.visitUtf8 = Z;
		z.prototype.visitBinary = Z;
		z.prototype.visitFixedSizeBinary = Z;
		z.prototype.visitDate = Z;
		z.prototype.visitDateDay = Z;
		z.prototype.visitDateMillisecond = Z;
		z.prototype.visitTimestamp = Z;
		z.prototype.visitTimestampSecond = Z;
		z.prototype.visitTimestampMillisecond = Z;
		z.prototype.visitTimestampMicrosecond = Z;
		z.prototype.visitTimestampNanosecond = Z;
		z.prototype.visitTime = Z;
		z.prototype.visitTimeSecond = Z;
		z.prototype.visitTimeMillisecond = Z;
		z.prototype.visitTimeMicrosecond = Z;
		z.prototype.visitTimeNanosecond = Z;
		z.prototype.visitDecimal = Z;
		z.prototype.visitList = Z;
		z.prototype.visitStruct = Z;
		z.prototype.visitUnion = Z;
		z.prototype.visitDenseUnion = Z;
		z.prototype.visitSparseUnion = Z;
		z.prototype.visitDictionary = Z;
		z.prototype.visitInterval = Z;
		z.prototype.visitIntervalDayTime = Z;
		z.prototype.visitIntervalYearMonth = Z;
		z.prototype.visitFixedSizeList = Z;
		z.prototype.visitMap = Z;
		Xi.instance = new z();
	});
	var Ab = w((es) => {
		'use strict';
		Object.defineProperty(es, '__esModule', { value: !0 });
		es.instance = es.ToArrayVisitor = void 0;
		var to = ve(),
			BA = it(),
			SA = Pd(),
			H = class extends BA.Visitor {};
		es.ToArrayVisitor = H;
		function Q(r) {
			let { type: e, length: t, stride: n } = r;
			switch (e.typeId) {
				case to.Type.Int:
				case to.Type.Float:
				case to.Type.Decimal:
				case to.Type.Time:
				case to.Type.Timestamp:
					return r.data.values.subarray(0, t * n);
			}
			return [...SA.instance.visit(r)];
		}
		H.prototype.visitNull = Q;
		H.prototype.visitBool = Q;
		H.prototype.visitInt = Q;
		H.prototype.visitInt8 = Q;
		H.prototype.visitInt16 = Q;
		H.prototype.visitInt32 = Q;
		H.prototype.visitInt64 = Q;
		H.prototype.visitUint8 = Q;
		H.prototype.visitUint16 = Q;
		H.prototype.visitUint32 = Q;
		H.prototype.visitUint64 = Q;
		H.prototype.visitFloat = Q;
		H.prototype.visitFloat16 = Q;
		H.prototype.visitFloat32 = Q;
		H.prototype.visitFloat64 = Q;
		H.prototype.visitUtf8 = Q;
		H.prototype.visitBinary = Q;
		H.prototype.visitFixedSizeBinary = Q;
		H.prototype.visitDate = Q;
		H.prototype.visitDateDay = Q;
		H.prototype.visitDateMillisecond = Q;
		H.prototype.visitTimestamp = Q;
		H.prototype.visitTimestampSecond = Q;
		H.prototype.visitTimestampMillisecond = Q;
		H.prototype.visitTimestampMicrosecond = Q;
		H.prototype.visitTimestampNanosecond = Q;
		H.prototype.visitTime = Q;
		H.prototype.visitTimeSecond = Q;
		H.prototype.visitTimeMillisecond = Q;
		H.prototype.visitTimeMicrosecond = Q;
		H.prototype.visitTimeNanosecond = Q;
		H.prototype.visitDecimal = Q;
		H.prototype.visitList = Q;
		H.prototype.visitStruct = Q;
		H.prototype.visitUnion = Q;
		H.prototype.visitDenseUnion = Q;
		H.prototype.visitSparseUnion = Q;
		H.prototype.visitDictionary = Q;
		H.prototype.visitInterval = Q;
		H.prototype.visitIntervalDayTime = Q;
		H.prototype.visitIntervalYearMonth = Q;
		H.prototype.visitFixedSizeList = Q;
		H.prototype.visitMap = Q;
		es.instance = new H();
	});
	var Db = w((ts) => {
		'use strict';
		Object.defineProperty(ts, '__esModule', { value: !0 });
		ts.instance = ts.ByteWidthVisitor = void 0;
		var AA = it(),
			DA = ve(),
			ro = (r, e) => r + e,
			Ld = (r) => `Cannot compute the byte width of variable-width column ${r}`,
			Nd = class extends AA.Visitor {
				visitNull(e) {
					return 0;
				}
				visitInt(e) {
					return e.bitWidth / 8;
				}
				visitFloat(e) {
					return e.ArrayType.BYTES_PER_ELEMENT;
				}
				visitBinary(e) {
					throw new Error(Ld(e));
				}
				visitUtf8(e) {
					throw new Error(Ld(e));
				}
				visitBool(e) {
					return 1 / 8;
				}
				visitDecimal(e) {
					return 16;
				}
				visitDate(e) {
					return (e.unit + 1) * 4;
				}
				visitTime(e) {
					return e.bitWidth / 8;
				}
				visitTimestamp(e) {
					return e.unit === DA.TimeUnit.SECOND ? 4 : 8;
				}
				visitInterval(e) {
					return (e.unit + 1) * 4;
				}
				visitList(e) {
					throw new Error(Ld(e));
				}
				visitStruct(e) {
					return this.visitFields(e.children).reduce(ro, 0);
				}
				visitUnion(e) {
					return this.visitFields(e.children).reduce(ro, 0);
				}
				visitFixedSizeBinary(e) {
					return e.byteWidth;
				}
				visitFixedSizeList(e) {
					return e.listSize * this.visitFields(e.children).reduce(ro, 0);
				}
				visitMap(e) {
					return this.visitFields(e.children).reduce(ro, 0);
				}
				visitDictionary(e) {
					return this.visit(e.indices);
				}
				visitFields(e) {
					return (e || []).map((t) => this.visit(t.type));
				}
				visitSchema(e) {
					return this.visitFields(e.fields).reduce(ro, 0);
				}
			};
		ts.ByteWidthVisitor = Nd;
		ts.instance = new Nd();
	});
	var Ob = w((rs) => {
		'use strict';
		Object.defineProperty(rs, '__esModule', { value: !0 });
		rs.instance = rs.GetVectorConstructor = void 0;
		var OA = it(),
			FA = id(),
			EA = sd(),
			xd = ad(),
			MA = ud(),
			RA = du(),
			UA = ld(),
			VA = dd(),
			Bu = _d(),
			Cd = yd(),
			Hr = _u(),
			kA = Sd(),
			PA = Ad(),
			LA = Dd(),
			NA = Od(),
			no = Fd(),
			io = Ed(),
			jd = Md(),
			xA = Rd(),
			qd = class extends OA.Visitor {
				visitNull() {
					return LA.NullVector;
				}
				visitBool() {
					return EA.BoolVector;
				}
				visitInt() {
					return Hr.IntVector;
				}
				visitInt8() {
					return Hr.Int8Vector;
				}
				visitInt16() {
					return Hr.Int16Vector;
				}
				visitInt32() {
					return Hr.Int32Vector;
				}
				visitInt64() {
					return Hr.Int64Vector;
				}
				visitUint8() {
					return Hr.Uint8Vector;
				}
				visitUint16() {
					return Hr.Uint16Vector;
				}
				visitUint32() {
					return Hr.Uint32Vector;
				}
				visitUint64() {
					return Hr.Uint64Vector;
				}
				visitFloat() {
					return Bu.FloatVector;
				}
				visitFloat16() {
					return Bu.Float16Vector;
				}
				visitFloat32() {
					return Bu.Float32Vector;
				}
				visitFloat64() {
					return Bu.Float64Vector;
				}
				visitUtf8() {
					return xA.Utf8Vector;
				}
				visitBinary() {
					return FA.BinaryVector;
				}
				visitFixedSizeBinary() {
					return UA.FixedSizeBinaryVector;
				}
				visitDate() {
					return xd.DateVector;
				}
				visitDateDay() {
					return xd.DateDayVector;
				}
				visitDateMillisecond() {
					return xd.DateMillisecondVector;
				}
				visitTimestamp() {
					return no.TimestampVector;
				}
				visitTimestampSecond() {
					return no.TimestampSecondVector;
				}
				visitTimestampMillisecond() {
					return no.TimestampMillisecondVector;
				}
				visitTimestampMicrosecond() {
					return no.TimestampMicrosecondVector;
				}
				visitTimestampNanosecond() {
					return no.TimestampNanosecondVector;
				}
				visitTime() {
					return io.TimeVector;
				}
				visitTimeSecond() {
					return io.TimeSecondVector;
				}
				visitTimeMillisecond() {
					return io.TimeMillisecondVector;
				}
				visitTimeMicrosecond() {
					return io.TimeMicrosecondVector;
				}
				visitTimeNanosecond() {
					return io.TimeNanosecondVector;
				}
				visitDecimal() {
					return MA.DecimalVector;
				}
				visitList() {
					return kA.ListVector;
				}
				visitStruct() {
					return NA.StructVector;
				}
				visitUnion() {
					return jd.UnionVector;
				}
				visitDenseUnion() {
					return jd.DenseUnionVector;
				}
				visitSparseUnion() {
					return jd.SparseUnionVector;
				}
				visitDictionary() {
					return RA.DictionaryVector;
				}
				visitInterval() {
					return Cd.IntervalVector;
				}
				visitIntervalDayTime() {
					return Cd.IntervalDayTimeVector;
				}
				visitIntervalYearMonth() {
					return Cd.IntervalYearMonthVector;
				}
				visitFixedSizeList() {
					return VA.FixedSizeListVector;
				}
				visitMap() {
					return PA.MapVector;
				}
			};
		rs.GetVectorConstructor = qd;
		rs.instance = new qd();
	});
	var Ar = w((I) => {
		'use strict';
		Object.defineProperty(I, '__esModule', { value: !0 });
		I.vectorFromValuesWithType =
			I.StructRow =
			I.MapRow =
			I.Utf8Vector =
			I.SparseUnionVector =
			I.DenseUnionVector =
			I.UnionVector =
			I.TimeNanosecondVector =
			I.TimeMicrosecondVector =
			I.TimeMillisecondVector =
			I.TimeSecondVector =
			I.TimeVector =
			I.TimestampNanosecondVector =
			I.TimestampMicrosecondVector =
			I.TimestampMillisecondVector =
			I.TimestampSecondVector =
			I.TimestampVector =
			I.StructVector =
			I.NullVector =
			I.MapVector =
			I.ListVector =
			I.Uint64Vector =
			I.Uint32Vector =
			I.Uint16Vector =
			I.Uint8Vector =
			I.Int64Vector =
			I.Int32Vector =
			I.Int16Vector =
			I.Int8Vector =
			I.IntVector =
			I.IntervalYearMonthVector =
			I.IntervalDayTimeVector =
			I.IntervalVector =
			I.Float64Vector =
			I.Float32Vector =
			I.Float16Vector =
			I.FloatVector =
			I.FixedSizeListVector =
			I.FixedSizeBinaryVector =
			I.DictionaryVector =
			I.DecimalVector =
			I.DateMillisecondVector =
			I.DateDayVector =
			I.DateVector =
			I.Chunked =
			I.BoolVector =
			I.BinaryVector =
			I.BaseVector =
			I.Vector =
				void 0;
		var Wd = at(),
			CA = Ce();
		Object.defineProperty(I, 'Vector', {
			enumerable: !0,
			get: function () {
				return CA.Vector;
			}
		});
		var jA = qe();
		Object.defineProperty(I, 'BaseVector', {
			enumerable: !0,
			get: function () {
				return jA.BaseVector;
			}
		});
		var qA = id();
		Object.defineProperty(I, 'BinaryVector', {
			enumerable: !0,
			get: function () {
				return qA.BinaryVector;
			}
		});
		var WA = sd();
		Object.defineProperty(I, 'BoolVector', {
			enumerable: !0,
			get: function () {
				return WA.BoolVector;
			}
		});
		var zA = Tn();
		Object.defineProperty(I, 'Chunked', {
			enumerable: !0,
			get: function () {
				return zA.Chunked;
			}
		});
		var zd = ad();
		Object.defineProperty(I, 'DateVector', {
			enumerable: !0,
			get: function () {
				return zd.DateVector;
			}
		});
		Object.defineProperty(I, 'DateDayVector', {
			enumerable: !0,
			get: function () {
				return zd.DateDayVector;
			}
		});
		Object.defineProperty(I, 'DateMillisecondVector', {
			enumerable: !0,
			get: function () {
				return zd.DateMillisecondVector;
			}
		});
		var HA = ud();
		Object.defineProperty(I, 'DecimalVector', {
			enumerable: !0,
			get: function () {
				return HA.DecimalVector;
			}
		});
		var YA = du();
		Object.defineProperty(I, 'DictionaryVector', {
			enumerable: !0,
			get: function () {
				return YA.DictionaryVector;
			}
		});
		var GA = ld();
		Object.defineProperty(I, 'FixedSizeBinaryVector', {
			enumerable: !0,
			get: function () {
				return GA.FixedSizeBinaryVector;
			}
		});
		var $A = dd();
		Object.defineProperty(I, 'FixedSizeListVector', {
			enumerable: !0,
			get: function () {
				return $A.FixedSizeListVector;
			}
		});
		var Su = _d();
		Object.defineProperty(I, 'FloatVector', {
			enumerable: !0,
			get: function () {
				return Su.FloatVector;
			}
		});
		Object.defineProperty(I, 'Float16Vector', {
			enumerable: !0,
			get: function () {
				return Su.Float16Vector;
			}
		});
		Object.defineProperty(I, 'Float32Vector', {
			enumerable: !0,
			get: function () {
				return Su.Float32Vector;
			}
		});
		Object.defineProperty(I, 'Float64Vector', {
			enumerable: !0,
			get: function () {
				return Su.Float64Vector;
			}
		});
		var Hd = yd();
		Object.defineProperty(I, 'IntervalVector', {
			enumerable: !0,
			get: function () {
				return Hd.IntervalVector;
			}
		});
		Object.defineProperty(I, 'IntervalDayTimeVector', {
			enumerable: !0,
			get: function () {
				return Hd.IntervalDayTimeVector;
			}
		});
		Object.defineProperty(I, 'IntervalYearMonthVector', {
			enumerable: !0,
			get: function () {
				return Hd.IntervalYearMonthVector;
			}
		});
		var Yr = _u();
		Object.defineProperty(I, 'IntVector', {
			enumerable: !0,
			get: function () {
				return Yr.IntVector;
			}
		});
		Object.defineProperty(I, 'Int8Vector', {
			enumerable: !0,
			get: function () {
				return Yr.Int8Vector;
			}
		});
		Object.defineProperty(I, 'Int16Vector', {
			enumerable: !0,
			get: function () {
				return Yr.Int16Vector;
			}
		});
		Object.defineProperty(I, 'Int32Vector', {
			enumerable: !0,
			get: function () {
				return Yr.Int32Vector;
			}
		});
		Object.defineProperty(I, 'Int64Vector', {
			enumerable: !0,
			get: function () {
				return Yr.Int64Vector;
			}
		});
		Object.defineProperty(I, 'Uint8Vector', {
			enumerable: !0,
			get: function () {
				return Yr.Uint8Vector;
			}
		});
		Object.defineProperty(I, 'Uint16Vector', {
			enumerable: !0,
			get: function () {
				return Yr.Uint16Vector;
			}
		});
		Object.defineProperty(I, 'Uint32Vector', {
			enumerable: !0,
			get: function () {
				return Yr.Uint32Vector;
			}
		});
		Object.defineProperty(I, 'Uint64Vector', {
			enumerable: !0,
			get: function () {
				return Yr.Uint64Vector;
			}
		});
		var JA = Sd();
		Object.defineProperty(I, 'ListVector', {
			enumerable: !0,
			get: function () {
				return JA.ListVector;
			}
		});
		var KA = Ad();
		Object.defineProperty(I, 'MapVector', {
			enumerable: !0,
			get: function () {
				return KA.MapVector;
			}
		});
		var ZA = Dd();
		Object.defineProperty(I, 'NullVector', {
			enumerable: !0,
			get: function () {
				return ZA.NullVector;
			}
		});
		var QA = Od();
		Object.defineProperty(I, 'StructVector', {
			enumerable: !0,
			get: function () {
				return QA.StructVector;
			}
		});
		var so = Fd();
		Object.defineProperty(I, 'TimestampVector', {
			enumerable: !0,
			get: function () {
				return so.TimestampVector;
			}
		});
		Object.defineProperty(I, 'TimestampSecondVector', {
			enumerable: !0,
			get: function () {
				return so.TimestampSecondVector;
			}
		});
		Object.defineProperty(I, 'TimestampMillisecondVector', {
			enumerable: !0,
			get: function () {
				return so.TimestampMillisecondVector;
			}
		});
		Object.defineProperty(I, 'TimestampMicrosecondVector', {
			enumerable: !0,
			get: function () {
				return so.TimestampMicrosecondVector;
			}
		});
		Object.defineProperty(I, 'TimestampNanosecondVector', {
			enumerable: !0,
			get: function () {
				return so.TimestampNanosecondVector;
			}
		});
		var oo = Ed();
		Object.defineProperty(I, 'TimeVector', {
			enumerable: !0,
			get: function () {
				return oo.TimeVector;
			}
		});
		Object.defineProperty(I, 'TimeSecondVector', {
			enumerable: !0,
			get: function () {
				return oo.TimeSecondVector;
			}
		});
		Object.defineProperty(I, 'TimeMillisecondVector', {
			enumerable: !0,
			get: function () {
				return oo.TimeMillisecondVector;
			}
		});
		Object.defineProperty(I, 'TimeMicrosecondVector', {
			enumerable: !0,
			get: function () {
				return oo.TimeMicrosecondVector;
			}
		});
		Object.defineProperty(I, 'TimeNanosecondVector', {
			enumerable: !0,
			get: function () {
				return oo.TimeNanosecondVector;
			}
		});
		var Yd = Md();
		Object.defineProperty(I, 'UnionVector', {
			enumerable: !0,
			get: function () {
				return Yd.UnionVector;
			}
		});
		Object.defineProperty(I, 'DenseUnionVector', {
			enumerable: !0,
			get: function () {
				return Yd.DenseUnionVector;
			}
		});
		Object.defineProperty(I, 'SparseUnionVector', {
			enumerable: !0,
			get: function () {
				return Yd.SparseUnionVector;
			}
		});
		var XA = Rd();
		Object.defineProperty(I, 'Utf8Vector', {
			enumerable: !0,
			get: function () {
				return XA.Utf8Vector;
			}
		});
		var Fb = Ws();
		Object.defineProperty(I, 'MapRow', {
			enumerable: !0,
			get: function () {
				return Fb.MapRow;
			}
		});
		Object.defineProperty(I, 'StructRow', {
			enumerable: !0,
			get: function () {
				return Fb.StructRow;
			}
		});
		var ao = rb(),
			Gd = ve(),
			ns = Ce(),
			Eb = Tn(),
			oi = qe(),
			eD = _r(),
			Au = ut(),
			Mb = Ue(),
			Rb = kd(),
			Ub = ol(),
			Vb = Ib(),
			kb = Ab(),
			Pb = Pd(),
			Lb = Db(),
			Nb = Ob();
		ns.Vector.new = tD;
		ns.Vector.from = nD;
		function tD(r, ...e) {
			return new (Nb.instance.getVisitFn(r)())(r, ...e);
		}
		function rD(r, e) {
			if (Au.isIterable(e))
				return ns.Vector.from({ nullValues: [null, void 0], type: r(), values: e });
			if (Au.isAsyncIterable(e))
				return ns.Vector.from({ nullValues: [null, void 0], type: r(), values: e });
			let { values: t = [], type: n = r(), nullValues: i = [null, void 0] } = Object.assign({}, e);
			return Au.isIterable(t)
				? ns.Vector.from(Object.assign(Object.assign({ nullValues: i }, e), { type: n }))
				: ns.Vector.from(Object.assign(Object.assign({ nullValues: i }, e), { type: n }));
		}
		I.vectorFromValuesWithType = rD;
		function nD(r) {
			let e = Object.assign({ nullValues: [null, void 0] }, r),
				{ values: t = [] } = e,
				n = Wd.__rest(e, ['values']);
			if (Au.isIterable(t)) {
				let i = [...Mb.Builder.throughIterable(n)(t)];
				return i.length === 1 ? i[0] : Eb.Chunked.concat(i);
			}
			return ((i) =>
				Wd.__awaiter(this, void 0, void 0, function* () {
					var s, o;
					let l = Mb.Builder.throughAsyncIterable(n);
					try {
						for (var h = Wd.__asyncValues(l(t)), u; (u = yield h.next()), !u.done; ) {
							let m = u.value;
							i.push(m);
						}
					} catch (m) {
						s = { error: m };
					} finally {
						try {
							u && !u.done && (o = h.return) && (yield o.call(h));
						} finally {
							if (s) throw s.error;
						}
					}
					return i.length === 1 ? i[0] : Eb.Chunked.concat(i);
				}))([]);
		}
		oi.BaseVector.prototype.get = function (e) {
			return Rb.instance.visit(this, e);
		};
		oi.BaseVector.prototype.set = function (e, t) {
			return Ub.instance.visit(this, e, t);
		};
		oi.BaseVector.prototype.indexOf = function (e, t) {
			return Vb.instance.visit(this, e, t);
		};
		oi.BaseVector.prototype.toArray = function () {
			return kb.instance.visit(this);
		};
		oi.BaseVector.prototype.getByteWidth = function () {
			return Lb.instance.visit(this.type);
		};
		oi.BaseVector.prototype[Symbol.iterator] = function () {
			return Pb.instance.visit(this);
		};
		oi.BaseVector.prototype._bindDataAccessors = aD;
		Object.keys(Gd.Type)
			.map((r) => Gd.Type[r])
			.filter((r) => typeof r == 'number')
			.filter((r) => r !== Gd.Type.NONE)
			.forEach((r) => {
				let e = Nb.instance.visit(r);
				(e.prototype.get = ao.partial1(Rb.instance.getVisitFn(r))),
					(e.prototype.set = ao.partial2(Ub.instance.getVisitFn(r))),
					(e.prototype.indexOf = ao.partial2(Vb.instance.getVisitFn(r))),
					(e.prototype.toArray = ao.partial0(kb.instance.getVisitFn(r))),
					(e.prototype.getByteWidth = iD(Lb.instance.getVisitFn(r))),
					(e.prototype[Symbol.iterator] = ao.partial0(Pb.instance.getVisitFn(r)));
			});
		function iD(r) {
			return function () {
				return r(this.type);
			};
		}
		function sD(r) {
			return function (e) {
				return this.isValid(e) ? r.call(this, e) : null;
			};
		}
		function oD(r) {
			return function (e, t) {
				eD.setBool(this.nullBitmap, this.offset + e, t != null) && r.call(this, e, t);
			};
		}
		function aD() {
			let r = this.nullBitmap;
			r && r.byteLength > 0 && ((this.get = sD(this.get)), (this.set = oD(this.set)));
		}
	});
	var Xs = w((Ou) => {
		'use strict';
		Object.defineProperty(Ou, '__esModule', { value: !0 });
		Ou.Table = void 0;
		var Du = at(),
			uD = Wi(),
			cD = uo(),
			xb = iu(),
			$d = zr(),
			Cb = et(),
			Jd = de(),
			jb = Qn(),
			Kd = ut(),
			qb = td(),
			Zd = Ar(),
			Qe = class extends Zd.Chunked {
				constructor(...e) {
					var t;
					let n = null;
					e[0] instanceof Cb.Schema && (n = e[0]);
					let i = e[0] instanceof Qe ? e[0].chunks : jb.selectArgs($d.RecordBatch, e);
					if (!n && !(n = (t = i[0]) === null || t === void 0 ? void 0 : t.schema))
						throw new TypeError(
							'Table must be initialized with a Schema or at least one RecordBatch'
						);
					i[0] || (i[0] = new $d._InternalEmptyPlaceholderRecordBatch(n));
					super(new Jd.Struct(n.fields), i);
					(this._schema = n), (this._chunks = i);
				}
				static empty(e = new Cb.Schema([])) {
					return new Qe(e, []);
				}
				static from(e) {
					if (!e) return Qe.empty();
					if (typeof e == 'object') {
						let n = Kd.isIterable(e.values) ? lD(e) : Kd.isAsyncIterable(e.values) ? dD(e) : null;
						if (n !== null) return n;
					}
					let t = cD.RecordBatchReader.from(e);
					return Kd.isPromise(t)
						? (() =>
								Du.__awaiter(this, void 0, void 0, function* () {
									return yield Qe.from(yield t);
								}))()
						: t.isSync() && (t = t.open())
						? t.schema
							? new Qe(t.schema, [...t])
							: Qe.empty()
						: ((n) =>
								Du.__awaiter(this, void 0, void 0, function* () {
									var i, s;
									let o = yield n,
										l = o.schema,
										h = [];
									if (l) {
										try {
											for (var u = Du.__asyncValues(o), m; (m = yield u.next()), !m.done; ) {
												let E = m.value;
												h.push(E);
											}
										} catch (E) {
											i = { error: E };
										} finally {
											try {
												m && !m.done && (s = u.return) && (yield s.call(u));
											} finally {
												if (i) throw i.error;
											}
										}
										return new Qe(l, h);
									}
									return Qe.empty();
								}))(t.open());
				}
				static fromAsync(e) {
					return Du.__awaiter(this, void 0, void 0, function* () {
						return yield Qe.from(e);
					});
				}
				static fromStruct(e) {
					return Qe.new(e.data.childData, e.type.children);
				}
				static new(...e) {
					return new Qe(...qb.distributeColumnsIntoRecordBatches(jb.selectColumnArgs(e)));
				}
				get schema() {
					return this._schema;
				}
				get length() {
					return this._length;
				}
				get chunks() {
					return this._chunks;
				}
				get numCols() {
					return this._numChildren;
				}
				clone(e = this._chunks) {
					return new Qe(this._schema, e);
				}
				getColumn(e) {
					return this.getColumnAt(this.getColumnIndex(e));
				}
				getColumnAt(e) {
					return this.getChildAt(e);
				}
				getColumnIndex(e) {
					return this._schema.fields.findIndex((t) => t.name === e);
				}
				getChildAt(e) {
					if (e < 0 || e >= this.numChildren) return null;
					let t,
						n,
						i = this._schema.fields,
						s = this._children || (this._children = []);
					if ((n = s[e])) return n;
					if ((t = i[e])) {
						let o = this._chunks.map((l) => l.getChildAt(e)).filter((l) => l != null);
						if (o.length > 0) return (s[e] = new uD.Column(t, o));
					}
					return null;
				}
				serialize(e = 'binary', t = !0) {
					return (t ? xb.RecordBatchStreamWriter : xb.RecordBatchFileWriter)
						.writeAll(this)
						.toUint8Array(!0);
				}
				count() {
					return this._length;
				}
				select(...e) {
					let t = this._schema.fields.reduce((n, i, s) => n.set(i.name, s), new Map());
					return this.selectAt(...e.map((n) => t.get(n)).filter((n) => n > -1));
				}
				selectAt(...e) {
					let t = this._schema.selectAt(...e);
					return new Qe(
						t,
						this._chunks.map(
							({ length: n, data: { childData: i } }) =>
								new $d.RecordBatch(t, n, e.map((s) => i[s]).filter(Boolean))
						)
					);
				}
				assign(e) {
					let t = this._schema.fields,
						[n, i] = e.schema.fields.reduce(
							(l, h, u) => {
								let [m, E] = l,
									M = t.findIndex((X) => X.name === h.name);
								return ~M ? (E[M] = u) : m.push(u), l;
							},
							[[], []]
						),
						s = this._schema.assign(e.schema),
						o = [
							...t.map((l, h, u, m = i[h]) =>
								m === void 0 ? this.getColumnAt(h) : e.getColumnAt(m)
							),
							...n.map((l) => e.getColumnAt(l))
						].filter(Boolean);
					return new Qe(...qb.distributeVectorsIntoRecordBatches(s, o));
				}
			};
		Ou.Table = Qe;
		function lD(r) {
			let { type: e } = r;
			return e instanceof Jd.Struct ? Qe.fromStruct(Zd.StructVector.from(r)) : null;
		}
		function dD(r) {
			let { type: e } = r;
			return e instanceof Jd.Struct ? Zd.StructVector.from(r).then((t) => Qe.fromStruct(t)) : null;
		}
	});
	var zr = w((is) => {
		'use strict';
		Object.defineProperty(is, '__esModule', { value: !0 });
		is._InternalEmptyPlaceholderRecordBatch = is.RecordBatch = void 0;
		var Qd = rr(),
			Xd = Xs(),
			fD = Ce(),
			hD = it(),
			pD = et(),
			_D = ut(),
			yD = Tn(),
			mD = Qn(),
			ef = de(),
			bD = td(),
			gD = Ar(),
			Mn = class extends gD.StructVector {
				constructor(...e) {
					let t,
						n = e[0],
						i;
					if (e[1] instanceof Qd.Data) [, t, i] = e;
					else {
						let s = n.fields,
							[, o, l] = e;
						t = Qd.Data.Struct(new ef.Struct(s), 0, o, 0, null, l);
					}
					super(t, i);
					this._schema = n;
				}
				static from(e) {
					return _D.isIterable(e.values), Xd.Table.from(e);
				}
				static new(...e) {
					let [t, n] = mD.selectFieldArgs(e),
						i = n.filter((s) => s instanceof fD.Vector);
					return new Mn(
						...bD.ensureSameLengthData(
							new pD.Schema(t),
							i.map((s) => s.data)
						)
					);
				}
				clone(e, t = this._children) {
					return new Mn(this._schema, e, t);
				}
				concat(...e) {
					let t = this._schema,
						n = yD.Chunked.flatten(this, ...e);
					return new Xd.Table(
						t,
						n.map(({ data: i }) => new Mn(t, i))
					);
				}
				get schema() {
					return this._schema;
				}
				get numCols() {
					return this._schema.fields.length;
				}
				get dictionaries() {
					return this._dictionaries || (this._dictionaries = Fu.collect(this));
				}
				select(...e) {
					let t = this._schema.fields.reduce((n, i, s) => n.set(i.name, s), new Map());
					return this.selectAt(...e.map((n) => t.get(n)).filter((n) => n > -1));
				}
				selectAt(...e) {
					let t = this._schema.selectAt(...e),
						n = e.map((i) => this.data.childData[i]).filter(Boolean);
					return new Mn(t, this.length, n);
				}
			};
		is.RecordBatch = Mn;
		var Wb = class extends Mn {
			constructor(e) {
				super(
					e,
					0,
					e.fields.map((t) => Qd.Data.new(t.type, 0, 0, 0))
				);
			}
		};
		is._InternalEmptyPlaceholderRecordBatch = Wb;
		var Fu = class extends hD.Visitor {
			constructor() {
				super(...arguments);
				this.dictionaries = new Map();
			}
			static collect(e) {
				return new Fu().visit(e.data, new ef.Struct(e.schema.fields)).dictionaries;
			}
			visit(e, t) {
				return ef.DataType.isDictionary(t)
					? this.visitDictionary(e, t)
					: (e.childData.forEach((n, i) => this.visit(n, t.children[i].type)), this);
			}
			visitDictionary(e, t) {
				let n = e.dictionary;
				return n && n.length > 0 && this.dictionaries.set(t.id, n), this;
			}
		};
	});
	var uo = w((Kt) => {
		'use strict';
		Object.defineProperty(Kt, '__esModule', { value: !0 });
		Kt.AsyncRecordBatchFileReader =
			Kt.RecordBatchFileReader =
			Kt.AsyncRecordBatchStreamReader =
			Kt.RecordBatchStreamReader =
			Kt.RecordBatchReader =
				void 0;
		var Se = at(),
			zb = Ce(),
			Eu = ve(),
			Hb = ml(),
			Yb = Ms(),
			Gb = mn(),
			co = vl(),
			$b = Ay(),
			tf = zr(),
			ai = yi(),
			$t = Ga(),
			Jt = ut(),
			Er = class extends ai.ReadableInterop {
				constructor(e) {
					super();
					this._impl = e;
				}
				get closed() {
					return this._impl.closed;
				}
				get schema() {
					return this._impl.schema;
				}
				get autoDestroy() {
					return this._impl.autoDestroy;
				}
				get dictionaries() {
					return this._impl.dictionaries;
				}
				get numDictionaries() {
					return this._impl.numDictionaries;
				}
				get numRecordBatches() {
					return this._impl.numRecordBatches;
				}
				get footer() {
					return this._impl.isFile() ? this._impl.footer : null;
				}
				isSync() {
					return this._impl.isSync();
				}
				isAsync() {
					return this._impl.isAsync();
				}
				isFile() {
					return this._impl.isFile();
				}
				isStream() {
					return this._impl.isStream();
				}
				next() {
					return this._impl.next();
				}
				throw(e) {
					return this._impl.throw(e);
				}
				return(e) {
					return this._impl.return(e);
				}
				cancel() {
					return this._impl.cancel();
				}
				reset(e) {
					return this._impl.reset(e), (this._DOMStream = void 0), (this._nodeStream = void 0), this;
				}
				open(e) {
					let t = this._impl.open(e);
					return Jt.isPromise(t) ? t.then(() => this) : this;
				}
				readRecordBatch(e) {
					return this._impl.isFile() ? this._impl.readRecordBatch(e) : null;
				}
				[Symbol.iterator]() {
					return this._impl[Symbol.iterator]();
				}
				[Symbol.asyncIterator]() {
					return this._impl[Symbol.asyncIterator]();
				}
				toDOMStream() {
					return Yb.default.toDOMStream(
						this.isSync()
							? { [Symbol.iterator]: () => this }
							: { [Symbol.asyncIterator]: () => this }
					);
				}
				toNodeStream() {
					return Yb.default.toNodeStream(
						this.isSync()
							? { [Symbol.iterator]: () => this }
							: { [Symbol.asyncIterator]: () => this },
						{ objectMode: !0 }
					);
				}
				static throughNode(e) {
					throw new Error('"throughNode" not available in this environment');
				}
				static throughDOM(e, t) {
					throw new Error('"throughDOM" not available in this environment');
				}
				static from(e) {
					return e instanceof Er
						? e
						: Jt.isArrowJSON(e)
						? vD(e)
						: Jt.isFileHandle(e)
						? ID(e)
						: Jt.isPromise(e)
						? (() =>
								Se.__awaiter(this, void 0, void 0, function* () {
									return yield Er.from(yield e);
								}))()
						: Jt.isFetchResponse(e) ||
						  Jt.isReadableDOMStream(e) ||
						  Jt.isReadableNodeStream(e) ||
						  Jt.isAsyncIterable(e)
						? wD(new Gb.AsyncByteStream(e))
						: TD(new Gb.ByteStream(e));
				}
				static readAll(e) {
					return e instanceof Er
						? e.isSync()
							? Qb(e)
							: Xb(e)
						: Jt.isArrowJSON(e) ||
						  ArrayBuffer.isView(e) ||
						  Jt.isIterable(e) ||
						  Jt.isIteratorResult(e)
						? Qb(e)
						: Xb(e);
				}
			};
		Kt.RecordBatchReader = Er;
		var ss = class extends Er {
			constructor(e) {
				super(e);
				this._impl = e;
			}
			[Symbol.iterator]() {
				return this._impl[Symbol.iterator]();
			}
			[Symbol.asyncIterator]() {
				return Se.__asyncGenerator(this, arguments, function* () {
					yield Se.__await(yield* Se.__asyncDelegator(Se.__asyncValues(this[Symbol.iterator]())));
				});
			}
		};
		Kt.RecordBatchStreamReader = ss;
		var os = class extends Er {
			constructor(e) {
				super(e);
				this._impl = e;
			}
			[Symbol.iterator]() {
				throw new Error('AsyncRecordBatchStreamReader is not Iterable');
			}
			[Symbol.asyncIterator]() {
				return this._impl[Symbol.asyncIterator]();
			}
		};
		Kt.AsyncRecordBatchStreamReader = os;
		var Mu = class extends ss {
			constructor(e) {
				super(e);
				this._impl = e;
			}
		};
		Kt.RecordBatchFileReader = Mu;
		var rf = class extends os {
			constructor(e) {
				super(e);
				this._impl = e;
			}
		};
		Kt.AsyncRecordBatchFileReader = rf;
		var nf = class {
				constructor(e = new Map()) {
					(this.closed = !1),
						(this.autoDestroy = !0),
						(this._dictionaryIndex = 0),
						(this._recordBatchIndex = 0),
						(this.dictionaries = e);
				}
				get numDictionaries() {
					return this._dictionaryIndex;
				}
				get numRecordBatches() {
					return this._recordBatchIndex;
				}
				isSync() {
					return !1;
				}
				isAsync() {
					return !1;
				}
				isFile() {
					return !1;
				}
				isStream() {
					return !1;
				}
				reset(e) {
					return (
						(this._dictionaryIndex = 0),
						(this._recordBatchIndex = 0),
						(this.schema = e),
						(this.dictionaries = new Map()),
						this
					);
				}
				_loadRecordBatch(e, t) {
					return new tf.RecordBatch(
						this.schema,
						e.length,
						this._loadVectors(e, t, this.schema.fields)
					);
				}
				_loadDictionaryBatch(e, t) {
					let { id: n, isDelta: i, data: s } = e,
						{ dictionaries: o, schema: l } = this,
						h = o.get(n);
					if (i || !h) {
						let u = l.dictionaries.get(n);
						return h && i
							? h.concat(zb.Vector.new(this._loadVectors(s, t, [u])[0]))
							: zb.Vector.new(this._loadVectors(s, t, [u])[0]);
					}
					return h;
				}
				_loadVectors(e, t, n) {
					return new $b.VectorLoader(t, e.nodes, e.buffers, this.dictionaries).visitMany(n);
				}
			},
			lo = class extends nf {
				constructor(e, t) {
					super(t);
					this._reader = Jt.isArrowJSON(e)
						? new $t.JSONMessageReader((this._handle = e))
						: new $t.MessageReader((this._handle = e));
				}
				isSync() {
					return !0;
				}
				isStream() {
					return !0;
				}
				[Symbol.iterator]() {
					return this;
				}
				cancel() {
					!this.closed &&
						(this.closed = !0) &&
						(this.reset()._reader.return(), (this._reader = null), (this.dictionaries = null));
				}
				open(e) {
					return (
						this.closed ||
							((this.autoDestroy = Zb(this, e)),
							this.schema || (this.schema = this._reader.readSchema()) || this.cancel()),
						this
					);
				}
				throw(e) {
					return !this.closed && this.autoDestroy && (this.closed = !0)
						? this.reset()._reader.throw(e)
						: ai.ITERATOR_DONE;
				}
				return(e) {
					return !this.closed && this.autoDestroy && (this.closed = !0)
						? this.reset()._reader.return(e)
						: ai.ITERATOR_DONE;
				}
				next() {
					if (this.closed) return ai.ITERATOR_DONE;
					let e,
						{ _reader: t } = this;
					for (; (e = this._readNextMessageAndValidate()); )
						if (e.isSchema()) this.reset(e.header());
						else if (e.isRecordBatch()) {
							this._recordBatchIndex++;
							let n = e.header(),
								i = t.readMessageBody(e.bodyLength),
								s = this._loadRecordBatch(n, i);
							return { done: !1, value: s };
						} else if (e.isDictionaryBatch()) {
							this._dictionaryIndex++;
							let n = e.header(),
								i = t.readMessageBody(e.bodyLength),
								s = this._loadDictionaryBatch(n, i);
							this.dictionaries.set(n.id, s);
						}
					return this.schema && this._recordBatchIndex === 0
						? (this._recordBatchIndex++,
						  { done: !1, value: new tf._InternalEmptyPlaceholderRecordBatch(this.schema) })
						: this.return();
				}
				_readNextMessageAndValidate(e) {
					return this._reader.readMessage(e);
				}
			},
			fo = class extends nf {
				constructor(e, t) {
					super(t);
					this._reader = new $t.AsyncMessageReader((this._handle = e));
				}
				isAsync() {
					return !0;
				}
				isStream() {
					return !0;
				}
				[Symbol.asyncIterator]() {
					return this;
				}
				cancel() {
					return Se.__awaiter(this, void 0, void 0, function* () {
						!this.closed &&
							(this.closed = !0) &&
							(yield this.reset()._reader.return(),
							(this._reader = null),
							(this.dictionaries = null));
					});
				}
				open(e) {
					return Se.__awaiter(this, void 0, void 0, function* () {
						return (
							this.closed ||
								((this.autoDestroy = Zb(this, e)),
								this.schema ||
									(this.schema = yield this._reader.readSchema()) ||
									(yield this.cancel())),
							this
						);
					});
				}
				throw(e) {
					return Se.__awaiter(this, void 0, void 0, function* () {
						return !this.closed && this.autoDestroy && (this.closed = !0)
							? yield this.reset()._reader.throw(e)
							: ai.ITERATOR_DONE;
					});
				}
				return(e) {
					return Se.__awaiter(this, void 0, void 0, function* () {
						return !this.closed && this.autoDestroy && (this.closed = !0)
							? yield this.reset()._reader.return(e)
							: ai.ITERATOR_DONE;
					});
				}
				next() {
					return Se.__awaiter(this, void 0, void 0, function* () {
						if (this.closed) return ai.ITERATOR_DONE;
						let e,
							{ _reader: t } = this;
						for (; (e = yield this._readNextMessageAndValidate()); )
							if (e.isSchema()) yield this.reset(e.header());
							else if (e.isRecordBatch()) {
								this._recordBatchIndex++;
								let n = e.header(),
									i = yield t.readMessageBody(e.bodyLength),
									s = this._loadRecordBatch(n, i);
								return { done: !1, value: s };
							} else if (e.isDictionaryBatch()) {
								this._dictionaryIndex++;
								let n = e.header(),
									i = yield t.readMessageBody(e.bodyLength),
									s = this._loadDictionaryBatch(n, i);
								this.dictionaries.set(n.id, s);
							}
						return this.schema && this._recordBatchIndex === 0
							? (this._recordBatchIndex++,
							  { done: !1, value: new tf._InternalEmptyPlaceholderRecordBatch(this.schema) })
							: yield this.return();
					});
				}
				_readNextMessageAndValidate(e) {
					return Se.__awaiter(this, void 0, void 0, function* () {
						return yield this._reader.readMessage(e);
					});
				}
			},
			sf = class extends lo {
				constructor(e, t) {
					super(e instanceof co.RandomAccessFile ? e : new co.RandomAccessFile(e), t);
				}
				get footer() {
					return this._footer;
				}
				get numDictionaries() {
					return this._footer ? this._footer.numDictionaries : 0;
				}
				get numRecordBatches() {
					return this._footer ? this._footer.numRecordBatches : 0;
				}
				isSync() {
					return !0;
				}
				isFile() {
					return !0;
				}
				open(e) {
					if (!this.closed && !this._footer) {
						this.schema = (this._footer = this._readFooter()).schema;
						for (let t of this._footer.dictionaryBatches())
							t && this._readDictionaryBatch(this._dictionaryIndex++);
					}
					return super.open(e);
				}
				readRecordBatch(e) {
					if (this.closed) return null;
					this._footer || this.open();
					let t = this._footer && this._footer.getRecordBatch(e);
					if (t && this._handle.seek(t.offset)) {
						let n = this._reader.readMessage(Eu.MessageHeader.RecordBatch);
						if (n == null ? void 0 : n.isRecordBatch()) {
							let i = n.header(),
								s = this._reader.readMessageBody(n.bodyLength);
							return this._loadRecordBatch(i, s);
						}
					}
					return null;
				}
				_readDictionaryBatch(e) {
					let t = this._footer && this._footer.getDictionaryBatch(e);
					if (t && this._handle.seek(t.offset)) {
						let n = this._reader.readMessage(Eu.MessageHeader.DictionaryBatch);
						if (n == null ? void 0 : n.isDictionaryBatch()) {
							let i = n.header(),
								s = this._reader.readMessageBody(n.bodyLength),
								o = this._loadDictionaryBatch(i, s);
							this.dictionaries.set(i.id, o);
						}
					}
				}
				_readFooter() {
					let { _handle: e } = this,
						t = e.size - $t.magicAndPadding,
						n = e.readInt32(t),
						i = e.readAt(t - n, n);
					return Hb.Footer.decode(i);
				}
				_readNextMessageAndValidate(e) {
					if (
						(this._footer || this.open(),
						this._footer && this._recordBatchIndex < this.numRecordBatches)
					) {
						let t = this._footer && this._footer.getRecordBatch(this._recordBatchIndex);
						if (t && this._handle.seek(t.offset)) return this._reader.readMessage(e);
					}
					return null;
				}
			},
			Jb = class extends fo {
				constructor(e, ...t) {
					let n = typeof t[0] != 'number' ? t.shift() : void 0,
						i = t[0] instanceof Map ? t.shift() : void 0;
					super(e instanceof co.AsyncRandomAccessFile ? e : new co.AsyncRandomAccessFile(e, n), i);
				}
				get footer() {
					return this._footer;
				}
				get numDictionaries() {
					return this._footer ? this._footer.numDictionaries : 0;
				}
				get numRecordBatches() {
					return this._footer ? this._footer.numRecordBatches : 0;
				}
				isFile() {
					return !0;
				}
				isAsync() {
					return !0;
				}
				open(e) {
					let t = Object.create(null, { open: { get: () => super.open } });
					return Se.__awaiter(this, void 0, void 0, function* () {
						if (!this.closed && !this._footer) {
							this.schema = (this._footer = yield this._readFooter()).schema;
							for (let n of this._footer.dictionaryBatches())
								n && (yield this._readDictionaryBatch(this._dictionaryIndex++));
						}
						return yield t.open.call(this, e);
					});
				}
				readRecordBatch(e) {
					return Se.__awaiter(this, void 0, void 0, function* () {
						if (this.closed) return null;
						this._footer || (yield this.open());
						let t = this._footer && this._footer.getRecordBatch(e);
						if (t && (yield this._handle.seek(t.offset))) {
							let n = yield this._reader.readMessage(Eu.MessageHeader.RecordBatch);
							if (n == null ? void 0 : n.isRecordBatch()) {
								let i = n.header(),
									s = yield this._reader.readMessageBody(n.bodyLength);
								return this._loadRecordBatch(i, s);
							}
						}
						return null;
					});
				}
				_readDictionaryBatch(e) {
					return Se.__awaiter(this, void 0, void 0, function* () {
						let t = this._footer && this._footer.getDictionaryBatch(e);
						if (t && (yield this._handle.seek(t.offset))) {
							let n = yield this._reader.readMessage(Eu.MessageHeader.DictionaryBatch);
							if (n == null ? void 0 : n.isDictionaryBatch()) {
								let i = n.header(),
									s = yield this._reader.readMessageBody(n.bodyLength),
									o = this._loadDictionaryBatch(i, s);
								this.dictionaries.set(i.id, o);
							}
						}
					});
				}
				_readFooter() {
					return Se.__awaiter(this, void 0, void 0, function* () {
						let { _handle: e } = this;
						e._pending && (yield e._pending);
						let t = e.size - $t.magicAndPadding,
							n = yield e.readInt32(t),
							i = yield e.readAt(t - n, n);
						return Hb.Footer.decode(i);
					});
				}
				_readNextMessageAndValidate(e) {
					return Se.__awaiter(this, void 0, void 0, function* () {
						if (
							(this._footer || (yield this.open()),
							this._footer && this._recordBatchIndex < this.numRecordBatches)
						) {
							let t = this._footer.getRecordBatch(this._recordBatchIndex);
							if (t && (yield this._handle.seek(t.offset)))
								return yield this._reader.readMessage(e);
						}
						return null;
					});
				}
			},
			Kb = class extends lo {
				constructor(e, t) {
					super(e, t);
				}
				_loadVectors(e, t, n) {
					return new $b.JSONVectorLoader(t, e.nodes, e.buffers, this.dictionaries).visitMany(n);
				}
			};
		function Zb(r, e) {
			return e && typeof e.autoDestroy == 'boolean' ? e.autoDestroy : r.autoDestroy;
		}
		function* Qb(r) {
			let e = Er.from(r);
			try {
				if (!e.open({ autoDestroy: !1 }).closed)
					do yield e;
					while (!e.reset().open().closed);
			} finally {
				e.cancel();
			}
		}
		function Xb(r) {
			return Se.__asyncGenerator(this, arguments, function* () {
				let t = yield Se.__await(Er.from(r));
				try {
					if (!(yield Se.__await(t.open({ autoDestroy: !1 }))).closed)
						do yield yield Se.__await(t);
						while (!(yield Se.__await(t.reset().open())).closed);
				} finally {
					yield Se.__await(t.cancel());
				}
			});
		}
		function vD(r) {
			return new ss(new Kb(r));
		}
		function TD(r) {
			let e = r.peek(($t.magicLength + 7) & ~7);
			return e && e.byteLength >= 4
				? $t.checkForMagicArrowString(e)
					? new Mu(new sf(r.read()))
					: new ss(new lo(r))
				: new ss(new lo((function* () {})()));
		}
		function wD(r) {
			return Se.__awaiter(this, void 0, void 0, function* () {
				let e = yield r.peek(($t.magicLength + 7) & ~7);
				return e && e.byteLength >= 4
					? $t.checkForMagicArrowString(e)
						? new Mu(new sf(yield r.read()))
						: new os(new fo(r))
					: new os(
							new fo(
								(function () {
									return Se.__asyncGenerator(this, arguments, function* () {});
								})()
							)
					  );
			});
		}
		function ID(r) {
			return Se.__awaiter(this, void 0, void 0, function* () {
				let { size: e } = yield r.stat(),
					t = new co.AsyncRandomAccessFile(r, e);
				return e >= $t.magicX2AndPadding &&
					$t.checkForMagicArrowString(yield t.readAt(0, ($t.magicLength + 7) & ~7))
					? new rf(new Jb(t))
					: new os(new fo(t));
			});
		}
	});
	var rg = w((Uu) => {
		'use strict';
		Object.defineProperty(Uu, '__esModule', { value: !0 });
		Uu.toDOMStream = void 0;
		var Ru = at(),
			eg = Je(),
			tg = ut();
		function BD(r, e) {
			if (tg.isAsyncIterable(r)) return AD(r, e);
			if (tg.isIterable(r)) return SD(r, e);
			throw new Error('toDOMStream() must be called with an Iterable or AsyncIterable');
		}
		Uu.toDOMStream = BD;
		function SD(r, e) {
			let t = null,
				n = (e == null ? void 0 : e.type) === 'bytes' || !1,
				i = (e == null ? void 0 : e.highWaterMark) || Math.pow(2, 24);
			return new ReadableStream(
				Object.assign(Object.assign({}, e), {
					start(o) {
						s(o, t || (t = r[Symbol.iterator]()));
					},
					pull(o) {
						t ? s(o, t) : o.close();
					},
					cancel() {
						(((t == null ? void 0 : t.return) && t.return()) || !0) && (t = null);
					}
				}),
				Object.assign({ highWaterMark: n ? i : void 0 }, e)
			);
			function s(o, l) {
				let h,
					u = null,
					m = o.desiredSize || null;
				for (; !(u = l.next(n ? m : null)).done; )
					if (
						(ArrayBuffer.isView(u.value) &&
							(h = eg.toUint8Array(u.value)) &&
							(m != null && n && (m = m - h.byteLength + 1), (u.value = h)),
						o.enqueue(u.value),
						m != null && --m <= 0)
					)
						return;
				o.close();
			}
		}
		function AD(r, e) {
			let t = null,
				n = (e == null ? void 0 : e.type) === 'bytes' || !1,
				i = (e == null ? void 0 : e.highWaterMark) || Math.pow(2, 24);
			return new ReadableStream(
				Object.assign(Object.assign({}, e), {
					start(o) {
						return Ru.__awaiter(this, void 0, void 0, function* () {
							yield s(o, t || (t = r[Symbol.asyncIterator]()));
						});
					},
					pull(o) {
						return Ru.__awaiter(this, void 0, void 0, function* () {
							t ? yield s(o, t) : o.close();
						});
					},
					cancel() {
						return Ru.__awaiter(this, void 0, void 0, function* () {
							(((t == null ? void 0 : t.return) && (yield t.return())) || !0) && (t = null);
						});
					}
				}),
				Object.assign({ highWaterMark: n ? i : void 0 }, e)
			);
			function s(o, l) {
				return Ru.__awaiter(this, void 0, void 0, function* () {
					let h,
						u = null,
						m = o.desiredSize || null;
					for (; !(u = yield l.next(n ? m : null)).done; )
						if (
							(ArrayBuffer.isView(u.value) &&
								(h = eg.toUint8Array(u.value)) &&
								(m != null && n && (m = m - h.byteLength + 1), (u.value = h)),
							o.enqueue(u.value),
							m != null && --m <= 0)
						)
							return;
					o.close();
				});
			}
		}
	});
	var sg = w((as) => {
		'use strict';
		Object.defineProperty(as, '__esModule', { value: !0 });
		as.BuilderTransform = as.builderThroughDOMStream = void 0;
		var DD = at(),
			OD = Ua();
		function FD(r) {
			return new of(r);
		}
		as.builderThroughDOMStream = FD;
		var of = class {
			constructor(e) {
				(this._numChunks = 0), (this._finished = !1), (this._bufferedSize = 0);
				let {
						['readableStrategy']: t,
						['writableStrategy']: n,
						['queueingStrategy']: i = 'count'
					} = e,
					s = DD.__rest(e, ['readableStrategy', 'writableStrategy', 'queueingStrategy']);
				(this._controller = null),
					(this._builder = OD.Builder.new(s)),
					(this._getSize = i !== 'bytes' ? ng : ig);
				let { ['highWaterMark']: o = i === 'bytes' ? Math.pow(2, 14) : 1e3 } = Object.assign({}, t),
					{ ['highWaterMark']: l = i === 'bytes' ? Math.pow(2, 14) : 1e3 } = Object.assign({}, n);
				(this.readable = new ReadableStream(
					{
						cancel: () => {
							this._builder.clear();
						},
						pull: (h) => {
							this._maybeFlush(this._builder, (this._controller = h));
						},
						start: (h) => {
							this._maybeFlush(this._builder, (this._controller = h));
						}
					},
					{ highWaterMark: o, size: i !== 'bytes' ? ng : ig }
				)),
					(this.writable = new WritableStream(
						{
							abort: () => {
								this._builder.clear();
							},
							write: () => {
								this._maybeFlush(this._builder, this._controller);
							},
							close: () => {
								this._maybeFlush(this._builder.finish(), this._controller);
							}
						},
						{ highWaterMark: l, size: (h) => this._writeValueAndReturnChunkSize(h) }
					));
			}
			_writeValueAndReturnChunkSize(e) {
				let t = this._bufferedSize;
				return (
					(this._bufferedSize = this._getSize(this._builder.append(e))), this._bufferedSize - t
				);
			}
			_maybeFlush(e, t) {
				t !== null &&
					(this._bufferedSize >= t.desiredSize &&
						++this._numChunks &&
						this._enqueue(t, e.toVector()),
					e.finished &&
						((e.length > 0 || this._numChunks === 0) &&
							++this._numChunks &&
							this._enqueue(t, e.toVector()),
						!this._finished && (this._finished = !0) && this._enqueue(t, null)));
			}
			_enqueue(e, t) {
				(this._bufferedSize = 0), (this._controller = null), t === null ? e.close() : e.enqueue(t);
			}
		};
		as.BuilderTransform = of;
		var ng = (r) => r.length,
			ig = (r) => r.byteLength;
	});
	var og = w((Vu) => {
		'use strict';
		Object.defineProperty(Vu, '__esModule', { value: !0 });
		Vu.recordBatchReaderThroughDOMStream = void 0;
		var ho = at(),
			ED = mn(),
			MD = uo();
		function RD(r, e) {
			let t = new ED.AsyncByteQueue(),
				n = null,
				i = new ReadableStream({
					cancel() {
						return ho.__awaiter(this, void 0, void 0, function* () {
							yield t.close();
						});
					},
					start(l) {
						return ho.__awaiter(this, void 0, void 0, function* () {
							yield o(l, n || (n = yield s()));
						});
					},
					pull(l) {
						return ho.__awaiter(this, void 0, void 0, function* () {
							n ? yield o(l, n) : l.close();
						});
					}
				});
			return {
				writable: new WritableStream(t, Object.assign({ highWaterMark: Math.pow(2, 14) }, r)),
				readable: i
			};
			function s() {
				return ho.__awaiter(this, void 0, void 0, function* () {
					return yield (yield MD.RecordBatchReader.from(t)).open(e);
				});
			}
			function o(l, h) {
				return ho.__awaiter(this, void 0, void 0, function* () {
					let u = l.desiredSize,
						m = null;
					for (; !(m = yield h.next()).done; )
						if ((l.enqueue(m.value), u != null && --u <= 0)) return;
					l.close();
				});
			}
		}
		Vu.recordBatchReaderThroughDOMStream = RD;
	});
	var ag = w((Pu) => {
		'use strict';
		Object.defineProperty(Pu, '__esModule', { value: !0 });
		Pu.recordBatchWriterThroughDOMStream = void 0;
		var ku = at(),
			UD = mn();
		function VD(r, e) {
			let t = new this(r),
				n = new UD.AsyncByteStream(t),
				i = new ReadableStream(
					{
						type: 'bytes',
						cancel() {
							return ku.__awaiter(this, void 0, void 0, function* () {
								yield n.cancel();
							});
						},
						pull(o) {
							return ku.__awaiter(this, void 0, void 0, function* () {
								yield s(o);
							});
						},
						start(o) {
							return ku.__awaiter(this, void 0, void 0, function* () {
								yield s(o);
							});
						}
					},
					Object.assign({ highWaterMark: Math.pow(2, 14) }, e)
				);
			return { writable: new WritableStream(t, r), readable: i };
			function s(o) {
				return ku.__awaiter(this, void 0, void 0, function* () {
					let l = null,
						h = o.desiredSize;
					for (; (l = yield n.read(h || null)); )
						if ((o.enqueue(l), h != null && (h -= l.byteLength) <= 0)) return;
					o.close();
				});
			}
		}
		Pu.recordBatchWriterThroughDOMStream = VD;
	});
	var ff = w((re) => {
		'use strict';
		Object.defineProperty(re, '__esModule', { value: !0 });
		re.custom =
			re.or =
			re.and =
			re.col =
			re.lit =
			re.CustomPredicate =
			re.Not =
			re.GTeq =
			re.LTeq =
			re.Equals =
			re.Or =
			re.And =
			re.CombinationPredicate =
			re.ComparisonPredicate =
			re.Predicate =
			re.Col =
			re.Literal =
			re.Value =
				void 0;
		var kD = du(),
			Rn = class {
				eq(e) {
					return e instanceof Rn || (e = new Gr(e)), new uf(this, e);
				}
				le(e) {
					return e instanceof Rn || (e = new Gr(e)), new cf(this, e);
				}
				ge(e) {
					return e instanceof Rn || (e = new Gr(e)), new lf(this, e);
				}
				lt(e) {
					return new ds(this.ge(e));
				}
				gt(e) {
					return new ds(this.le(e));
				}
				ne(e) {
					return new ds(this.eq(e));
				}
			};
		re.Value = Rn;
		var Gr = class extends Rn {
			constructor(e) {
				super();
				this.v = e;
			}
		};
		re.Literal = Gr;
		var af = class extends Rn {
			constructor(e) {
				super();
				this.name = e;
			}
			bind(e) {
				if (!this.colidx) {
					this.colidx = -1;
					let n = e.schema.fields;
					for (let i = -1; ++i < n.length; )
						if (n[i].name === this.name) {
							this.colidx = i;
							break;
						}
					if (this.colidx < 0) throw new Error(`Failed to bind Col "${this.name}"`);
				}
				let t = (this.vector = e.getChildAt(this.colidx));
				return (n) => t.get(n);
			}
		};
		re.Col = af;
		var us = class {
			and(...e) {
				return new cs(this, ...e);
			}
			or(...e) {
				return new ls(this, ...e);
			}
			not() {
				return new ds(this);
			}
		};
		re.Predicate = us;
		var po = class extends us {
			constructor(e, t) {
				super();
				(this.left = e), (this.right = t);
			}
			bind(e) {
				return this.left instanceof Gr
					? this.right instanceof Gr
						? this._bindLitLit(e, this.left, this.right)
						: this._bindLitCol(e, this.left, this.right)
					: this.right instanceof Gr
					? this._bindColLit(e, this.left, this.right)
					: this._bindColCol(e, this.left, this.right);
			}
		};
		re.ComparisonPredicate = po;
		var _o = class extends us {
			constructor(...e) {
				super();
				this.children = e;
			}
		};
		re.CombinationPredicate = _o;
		_o.prototype.children = Object.freeze([]);
		var cs = class extends _o {
			constructor(...e) {
				e = e.reduce((t, n) => t.concat(n instanceof cs ? n.children : n), []);
				super(...e);
			}
			bind(e) {
				let t = this.children.map((n) => n.bind(e));
				return (n, i) => t.every((s) => s(n, i));
			}
		};
		re.And = cs;
		var ls = class extends _o {
			constructor(...e) {
				e = e.reduce((t, n) => t.concat(n instanceof ls ? n.children : n), []);
				super(...e);
			}
			bind(e) {
				let t = this.children.map((n) => n.bind(e));
				return (n, i) => t.some((s) => s(n, i));
			}
		};
		re.Or = ls;
		var uf = class extends po {
			_bindLitLit(e, t, n) {
				let i = t.v == n.v;
				return () => i;
			}
			_bindColCol(e, t, n) {
				let i = t.bind(e),
					s = n.bind(e);
				return (o, l) => i(o, l) == s(o, l);
			}
			_bindColLit(e, t, n) {
				let i = t.bind(e);
				if (t.vector instanceof kD.DictionaryVector) {
					let s,
						o = t.vector;
					return (
						o.dictionary !== this.lastDictionary
							? ((s = o.reverseLookup(n.v)),
							  (this.lastDictionary = o.dictionary),
							  (this.lastKey = s))
							: (s = this.lastKey),
						s === -1 ? () => !1 : (l) => o.getKey(l) === s
					);
				} else return (s, o) => i(s, o) == n.v;
			}
			_bindLitCol(e, t, n) {
				return this._bindColLit(e, n, t);
			}
		};
		re.Equals = uf;
		var cf = class extends po {
			_bindLitLit(e, t, n) {
				let i = t.v <= n.v;
				return () => i;
			}
			_bindColCol(e, t, n) {
				let i = t.bind(e),
					s = n.bind(e);
				return (o, l) => i(o, l) <= s(o, l);
			}
			_bindColLit(e, t, n) {
				let i = t.bind(e);
				return (s, o) => i(s, o) <= n.v;
			}
			_bindLitCol(e, t, n) {
				let i = n.bind(e);
				return (s, o) => t.v <= i(s, o);
			}
		};
		re.LTeq = cf;
		var lf = class extends po {
			_bindLitLit(e, t, n) {
				let i = t.v >= n.v;
				return () => i;
			}
			_bindColCol(e, t, n) {
				let i = t.bind(e),
					s = n.bind(e);
				return (o, l) => i(o, l) >= s(o, l);
			}
			_bindColLit(e, t, n) {
				let i = t.bind(e);
				return (s, o) => i(s, o) >= n.v;
			}
			_bindLitCol(e, t, n) {
				let i = n.bind(e);
				return (s, o) => t.v >= i(s, o);
			}
		};
		re.GTeq = lf;
		var ds = class extends us {
			constructor(e) {
				super();
				this.child = e;
			}
			bind(e) {
				let t = this.child.bind(e);
				return (n, i) => !t(n, i);
			}
		};
		re.Not = ds;
		var df = class extends us {
			constructor(e, t) {
				super();
				(this.next = e), (this.bind_ = t);
			}
			bind(e) {
				return this.bind_(e), this.next;
			}
		};
		re.CustomPredicate = df;
		function PD(r) {
			return new Gr(r);
		}
		re.lit = PD;
		function LD(r) {
			return new af(r);
		}
		re.col = LD;
		function ND(...r) {
			return new cs(...r);
		}
		re.and = ND;
		function xD(...r) {
			return new ls(...r);
		}
		re.or = xD;
		function CD(r, e) {
			return new df(r, e);
		}
		re.custom = CD;
	});
	var hg = w((Un) => {
		'use strict';
		Object.defineProperty(Un, '__esModule', { value: !0 });
		Un.FilteredDataFrame = Un.CountByResult = Un.DataFrame = void 0;
		var ug = Xs(),
			cg = _u(),
			hf = et(),
			lg = ff(),
			jD = zr(),
			dg = de(),
			pf = class extends ug.Table {
				filter(e) {
					return new yo(this.chunks, e);
				}
				scan(e, t) {
					let n = this.chunks,
						i = n.length;
					for (let s = -1; ++s < i; ) {
						let o = n[s];
						t && t(o);
						for (let l = -1, h = o.length; ++l < h; ) e(l, o);
					}
				}
				scanReverse(e, t) {
					let n = this.chunks,
						i = n.length;
					for (let s = i; --s >= 0; ) {
						let o = n[s];
						t && t(o);
						for (let l = o.length; --l >= 0; ) e(l, o);
					}
				}
				countBy(e) {
					let t = this.chunks,
						n = t.length,
						i = typeof e == 'string' ? new lg.Col(e) : e;
					i.bind(t[n - 1]);
					let s = i.vector;
					if (!dg.DataType.isDictionary(s.type))
						throw new Error('countBy currently only supports dictionary-encoded columns');
					let o = Math.ceil(Math.log(s.length) / Math.log(256)),
						l = o == 4 ? Uint32Array : o >= 2 ? Uint16Array : Uint8Array,
						h = new l(s.dictionary.length);
					for (let u = -1; ++u < n; ) {
						let m = t[u];
						i.bind(m);
						let E = i.vector.indices;
						for (let M = -1, X = m.length; ++M < X; ) {
							let Ae = E.get(M);
							Ae !== null && h[Ae]++;
						}
					}
					return new Lu(s.dictionary, cg.IntVector.from(h));
				}
			};
		Un.DataFrame = pf;
		var Lu = class extends ug.Table {
			constructor(e, t) {
				let n = new hf.Schema([new hf.Field('values', e.type), new hf.Field('counts', t.type)]);
				super(new jD.RecordBatch(n, t.length, [e, t]));
			}
			toJSON() {
				let e = this.getColumnAt(0),
					t = this.getColumnAt(1),
					n = {};
				for (let i = -1; ++i < this.length; ) n[e.get(i)] = t.get(i);
				return n;
			}
		};
		Un.CountByResult = Lu;
		var fg = class {
				constructor(e, t) {
					(this.batches = e),
						(this.predicate = t),
						(this.batchIndex = 0),
						(this.index = 0),
						(this.batch = this.batches[this.batchIndex]),
						(this.predicateFunc = this.predicate.bind(this.batch));
				}
				next() {
					for (; this.batchIndex < this.batches.length; ) {
						for (; this.index < this.batch.length; ) {
							if (this.predicateFunc(this.index, this.batch))
								return { value: this.batch.get(this.index++) };
							this.index++;
						}
						++this.batchIndex < this.batches.length &&
							((this.index = 0),
							(this.batch = this.batches[this.batchIndex]),
							(this.predicateFunc = this.predicate.bind(this.batch)));
					}
					return { done: !0, value: null };
				}
				[Symbol.iterator]() {
					return this;
				}
			},
			yo = class extends pf {
				constructor(e, t) {
					super(e);
					this._predicate = t;
				}
				scan(e, t) {
					let n = this._chunks,
						i = n.length;
					for (let s = -1; ++s < i; ) {
						let o = n[s],
							l = this._predicate.bind(o),
							h = !1;
						for (let u = -1, m = o.length; ++u < m; )
							l(u, o) && (t && !h && (t(o), (h = !0)), e(u, o));
					}
				}
				scanReverse(e, t) {
					let n = this._chunks,
						i = n.length;
					for (let s = i; --s >= 0; ) {
						let o = n[s],
							l = this._predicate.bind(o),
							h = !1;
						for (let u = o.length; --u >= 0; ) l(u, o) && (t && !h && (t(o), (h = !0)), e(u, o));
					}
				}
				count() {
					let e = 0,
						t = this._chunks,
						n = t.length;
					for (let i = -1; ++i < n; ) {
						let s = t[i],
							o = this._predicate.bind(s);
						for (let l = -1, h = s.length; ++l < h; ) o(l, s) && ++e;
					}
					return e;
				}
				[Symbol.iterator]() {
					return new fg(this._chunks, this._predicate);
				}
				filter(e) {
					return new yo(this._chunks, this._predicate.and(e));
				}
				countBy(e) {
					let t = this._chunks,
						n = t.length,
						i = typeof e == 'string' ? new lg.Col(e) : e;
					i.bind(t[n - 1]);
					let s = i.vector;
					if (!dg.DataType.isDictionary(s.type))
						throw new Error('countBy currently only supports dictionary-encoded columns');
					let o = Math.ceil(Math.log(s.length) / Math.log(256)),
						l = o == 4 ? Uint32Array : o >= 2 ? Uint16Array : Uint8Array,
						h = new l(s.dictionary.length);
					for (let u = -1; ++u < n; ) {
						let m = t[u],
							E = this._predicate.bind(m);
						i.bind(m);
						let M = i.vector.indices;
						for (let X = -1, Ae = m.length; ++X < Ae; ) {
							let Te = M.get(X);
							Te !== null && E(X, m) && h[Te]++;
						}
					}
					return new Lu(s.dictionary, cg.IntVector.from(h));
				}
			};
		Un.FilteredDataFrame = yo;
	});
	var yg = w((f) => {
		'use strict';
		Object.defineProperty(f, '__esModule', { value: !0 });
		f.isTypedArray =
			f.util =
			f.predicate =
			f.CountByResult =
			f.FilteredDataFrame =
			f.DataFrame =
			f.RecordBatch =
			f.Message =
			f.JSONMessageReader =
			f.AsyncMessageReader =
			f.MessageReader =
			f.RecordBatchJSONWriter =
			f.RecordBatchStreamWriter =
			f.RecordBatchFileWriter =
			f.RecordBatchWriter =
			f.AsyncRecordBatchStreamReader =
			f.AsyncRecordBatchFileReader =
			f.RecordBatchStreamReader =
			f.RecordBatchFileReader =
			f.RecordBatchReader =
			f.AsyncByteQueue =
			f.AsyncByteStream =
			f.ByteStream =
			f.Utf8Builder =
			f.SparseUnionBuilder =
			f.DenseUnionBuilder =
			f.UnionBuilder =
			f.TimeNanosecondBuilder =
			f.TimeMicrosecondBuilder =
			f.TimeMillisecondBuilder =
			f.TimeSecondBuilder =
			f.TimeBuilder =
			f.TimestampNanosecondBuilder =
			f.TimestampMicrosecondBuilder =
			f.TimestampMillisecondBuilder =
			f.TimestampSecondBuilder =
			f.TimestampBuilder =
			f.StructBuilder =
			f.NullBuilder =
			f.MapBuilder =
			f.ListBuilder =
			f.Uint64Builder =
			f.Uint32Builder =
			f.Uint16Builder =
			f.Uint8Builder =
			f.Int64Builder =
			f.Int32Builder =
			f.Int16Builder =
			f.Int8Builder =
			f.IntBuilder =
			f.IntervalYearMonthBuilder =
			f.IntervalDayTimeBuilder =
			f.IntervalBuilder =
			f.Float64Builder =
			f.Float32Builder =
			f.Float16Builder =
			f.FloatBuilder =
			f.FixedSizeListBuilder =
			f.FixedSizeBinaryBuilder =
			f.DictionaryBuilder =
			f.DecimalBuilder =
			f.DateMillisecondBuilder =
			f.DateDayBuilder =
			f.DateBuilder =
			f.BoolBuilder =
			f.BinaryBuilder =
			f.Builder =
			f.Utf8Vector =
			f.SparseUnionVector =
			f.DenseUnionVector =
			f.UnionVector =
			f.TimeNanosecondVector =
			f.TimeMicrosecondVector =
			f.TimeMillisecondVector =
			f.TimeSecondVector =
			f.TimeVector =
			f.TimestampNanosecondVector =
			f.TimestampMicrosecondVector =
			f.TimestampMillisecondVector =
			f.TimestampSecondVector =
			f.TimestampVector =
			f.StructVector =
			f.NullVector =
			f.MapVector =
			f.ListVector =
			f.Uint64Vector =
			f.Uint32Vector =
			f.Uint16Vector =
			f.Uint8Vector =
			f.Int64Vector =
			f.Int32Vector =
			f.Int16Vector =
			f.Int8Vector =
			f.IntVector =
			f.IntervalYearMonthVector =
			f.IntervalDayTimeVector =
			f.IntervalVector =
			f.Float64Vector =
			f.Float32Vector =
			f.Float16Vector =
			f.FloatVector =
			f.FixedSizeListVector =
			f.FixedSizeBinaryVector =
			f.DictionaryVector =
			f.DecimalVector =
			f.DateMillisecondVector =
			f.DateDayVector =
			f.DateVector =
			f.Chunked =
			f.BoolVector =
			f.BinaryVector =
			f.BaseVector =
			f.Vector =
			f.Field =
			f.Schema =
			f.Visitor =
			f.Column =
			f.Table =
			f.Map_ =
			f.FixedSizeList =
			f.IntervalYearMonth =
			f.IntervalDayTime =
			f.Interval =
			f.Dictionary =
			f.SparseUnion =
			f.DenseUnion =
			f.Union =
			f.Struct =
			f.List =
			f.Decimal =
			f.TimeNanosecond =
			f.TimeMicrosecond =
			f.TimeMillisecond =
			f.TimeSecond =
			f.Time =
			f.TimestampNanosecond =
			f.TimestampMicrosecond =
			f.TimestampMillisecond =
			f.TimestampSecond =
			f.Timestamp =
			f.DateMillisecond =
			f.DateDay =
			f.Date_ =
			f.FixedSizeBinary =
			f.Binary =
			f.Utf8 =
			f.Float64 =
			f.Float32 =
			f.Float16 =
			f.Float =
			f.Uint64 =
			f.Uint32 =
			f.Uint16 =
			f.Uint8 =
			f.Int64 =
			f.Int32 =
			f.Int16 =
			f.Int8 =
			f.Int =
			f.Bool =
			f.Null =
			f.DataType =
			f.Data =
			f.BufferType =
			f.Type =
			f.MessageHeader =
			f.MetadataVersion =
			f.IntervalUnit =
			f.UnionMode =
			f.Precision =
			f.TimeUnit =
			f.DateUnit =
				void 0;
		var fs = nn();
		Object.defineProperty(f, 'DateUnit', {
			enumerable: !0,
			get: function () {
				return fs.DateUnit;
			}
		});
		Object.defineProperty(f, 'TimeUnit', {
			enumerable: !0,
			get: function () {
				return fs.TimeUnit;
			}
		});
		Object.defineProperty(f, 'Precision', {
			enumerable: !0,
			get: function () {
				return fs.Precision;
			}
		});
		Object.defineProperty(f, 'UnionMode', {
			enumerable: !0,
			get: function () {
				return fs.UnionMode;
			}
		});
		Object.defineProperty(f, 'IntervalUnit', {
			enumerable: !0,
			get: function () {
				return fs.IntervalUnit;
			}
		});
		Object.defineProperty(f, 'MetadataVersion', {
			enumerable: !0,
			get: function () {
				return fs.MetadataVersion;
			}
		});
		var qD = Go();
		Object.defineProperty(f, 'MessageHeader', {
			enumerable: !0,
			get: function () {
				return qD.MessageHeader;
			}
		});
		var pg = ve();
		Object.defineProperty(f, 'Type', {
			enumerable: !0,
			get: function () {
				return pg.Type;
			}
		});
		Object.defineProperty(f, 'BufferType', {
			enumerable: !0,
			get: function () {
				return pg.BufferType;
			}
		});
		var WD = rr();
		Object.defineProperty(f, 'Data', {
			enumerable: !0,
			get: function () {
				return WD.Data;
			}
		});
		var J = de();
		Object.defineProperty(f, 'DataType', {
			enumerable: !0,
			get: function () {
				return J.DataType;
			}
		});
		Object.defineProperty(f, 'Null', {
			enumerable: !0,
			get: function () {
				return J.Null;
			}
		});
		Object.defineProperty(f, 'Bool', {
			enumerable: !0,
			get: function () {
				return J.Bool;
			}
		});
		Object.defineProperty(f, 'Int', {
			enumerable: !0,
			get: function () {
				return J.Int;
			}
		});
		Object.defineProperty(f, 'Int8', {
			enumerable: !0,
			get: function () {
				return J.Int8;
			}
		});
		Object.defineProperty(f, 'Int16', {
			enumerable: !0,
			get: function () {
				return J.Int16;
			}
		});
		Object.defineProperty(f, 'Int32', {
			enumerable: !0,
			get: function () {
				return J.Int32;
			}
		});
		Object.defineProperty(f, 'Int64', {
			enumerable: !0,
			get: function () {
				return J.Int64;
			}
		});
		Object.defineProperty(f, 'Uint8', {
			enumerable: !0,
			get: function () {
				return J.Uint8;
			}
		});
		Object.defineProperty(f, 'Uint16', {
			enumerable: !0,
			get: function () {
				return J.Uint16;
			}
		});
		Object.defineProperty(f, 'Uint32', {
			enumerable: !0,
			get: function () {
				return J.Uint32;
			}
		});
		Object.defineProperty(f, 'Uint64', {
			enumerable: !0,
			get: function () {
				return J.Uint64;
			}
		});
		Object.defineProperty(f, 'Float', {
			enumerable: !0,
			get: function () {
				return J.Float;
			}
		});
		Object.defineProperty(f, 'Float16', {
			enumerable: !0,
			get: function () {
				return J.Float16;
			}
		});
		Object.defineProperty(f, 'Float32', {
			enumerable: !0,
			get: function () {
				return J.Float32;
			}
		});
		Object.defineProperty(f, 'Float64', {
			enumerable: !0,
			get: function () {
				return J.Float64;
			}
		});
		Object.defineProperty(f, 'Utf8', {
			enumerable: !0,
			get: function () {
				return J.Utf8;
			}
		});
		Object.defineProperty(f, 'Binary', {
			enumerable: !0,
			get: function () {
				return J.Binary;
			}
		});
		Object.defineProperty(f, 'FixedSizeBinary', {
			enumerable: !0,
			get: function () {
				return J.FixedSizeBinary;
			}
		});
		Object.defineProperty(f, 'Date_', {
			enumerable: !0,
			get: function () {
				return J.Date_;
			}
		});
		Object.defineProperty(f, 'DateDay', {
			enumerable: !0,
			get: function () {
				return J.DateDay;
			}
		});
		Object.defineProperty(f, 'DateMillisecond', {
			enumerable: !0,
			get: function () {
				return J.DateMillisecond;
			}
		});
		Object.defineProperty(f, 'Timestamp', {
			enumerable: !0,
			get: function () {
				return J.Timestamp;
			}
		});
		Object.defineProperty(f, 'TimestampSecond', {
			enumerable: !0,
			get: function () {
				return J.TimestampSecond;
			}
		});
		Object.defineProperty(f, 'TimestampMillisecond', {
			enumerable: !0,
			get: function () {
				return J.TimestampMillisecond;
			}
		});
		Object.defineProperty(f, 'TimestampMicrosecond', {
			enumerable: !0,
			get: function () {
				return J.TimestampMicrosecond;
			}
		});
		Object.defineProperty(f, 'TimestampNanosecond', {
			enumerable: !0,
			get: function () {
				return J.TimestampNanosecond;
			}
		});
		Object.defineProperty(f, 'Time', {
			enumerable: !0,
			get: function () {
				return J.Time;
			}
		});
		Object.defineProperty(f, 'TimeSecond', {
			enumerable: !0,
			get: function () {
				return J.TimeSecond;
			}
		});
		Object.defineProperty(f, 'TimeMillisecond', {
			enumerable: !0,
			get: function () {
				return J.TimeMillisecond;
			}
		});
		Object.defineProperty(f, 'TimeMicrosecond', {
			enumerable: !0,
			get: function () {
				return J.TimeMicrosecond;
			}
		});
		Object.defineProperty(f, 'TimeNanosecond', {
			enumerable: !0,
			get: function () {
				return J.TimeNanosecond;
			}
		});
		Object.defineProperty(f, 'Decimal', {
			enumerable: !0,
			get: function () {
				return J.Decimal;
			}
		});
		Object.defineProperty(f, 'List', {
			enumerable: !0,
			get: function () {
				return J.List;
			}
		});
		Object.defineProperty(f, 'Struct', {
			enumerable: !0,
			get: function () {
				return J.Struct;
			}
		});
		Object.defineProperty(f, 'Union', {
			enumerable: !0,
			get: function () {
				return J.Union;
			}
		});
		Object.defineProperty(f, 'DenseUnion', {
			enumerable: !0,
			get: function () {
				return J.DenseUnion;
			}
		});
		Object.defineProperty(f, 'SparseUnion', {
			enumerable: !0,
			get: function () {
				return J.SparseUnion;
			}
		});
		Object.defineProperty(f, 'Dictionary', {
			enumerable: !0,
			get: function () {
				return J.Dictionary;
			}
		});
		Object.defineProperty(f, 'Interval', {
			enumerable: !0,
			get: function () {
				return J.Interval;
			}
		});
		Object.defineProperty(f, 'IntervalDayTime', {
			enumerable: !0,
			get: function () {
				return J.IntervalDayTime;
			}
		});
		Object.defineProperty(f, 'IntervalYearMonth', {
			enumerable: !0,
			get: function () {
				return J.IntervalYearMonth;
			}
		});
		Object.defineProperty(f, 'FixedSizeList', {
			enumerable: !0,
			get: function () {
				return J.FixedSizeList;
			}
		});
		Object.defineProperty(f, 'Map_', {
			enumerable: !0,
			get: function () {
				return J.Map_;
			}
		});
		var zD = Xs();
		Object.defineProperty(f, 'Table', {
			enumerable: !0,
			get: function () {
				return zD.Table;
			}
		});
		var HD = Wi();
		Object.defineProperty(f, 'Column', {
			enumerable: !0,
			get: function () {
				return HD.Column;
			}
		});
		var YD = it();
		Object.defineProperty(f, 'Visitor', {
			enumerable: !0,
			get: function () {
				return YD.Visitor;
			}
		});
		var _g = et();
		Object.defineProperty(f, 'Schema', {
			enumerable: !0,
			get: function () {
				return _g.Schema;
			}
		});
		Object.defineProperty(f, 'Field', {
			enumerable: !0,
			get: function () {
				return _g.Field;
			}
		});
		var Y = Ar();
		Object.defineProperty(f, 'Vector', {
			enumerable: !0,
			get: function () {
				return Y.Vector;
			}
		});
		Object.defineProperty(f, 'BaseVector', {
			enumerable: !0,
			get: function () {
				return Y.BaseVector;
			}
		});
		Object.defineProperty(f, 'BinaryVector', {
			enumerable: !0,
			get: function () {
				return Y.BinaryVector;
			}
		});
		Object.defineProperty(f, 'BoolVector', {
			enumerable: !0,
			get: function () {
				return Y.BoolVector;
			}
		});
		Object.defineProperty(f, 'Chunked', {
			enumerable: !0,
			get: function () {
				return Y.Chunked;
			}
		});
		Object.defineProperty(f, 'DateVector', {
			enumerable: !0,
			get: function () {
				return Y.DateVector;
			}
		});
		Object.defineProperty(f, 'DateDayVector', {
			enumerable: !0,
			get: function () {
				return Y.DateDayVector;
			}
		});
		Object.defineProperty(f, 'DateMillisecondVector', {
			enumerable: !0,
			get: function () {
				return Y.DateMillisecondVector;
			}
		});
		Object.defineProperty(f, 'DecimalVector', {
			enumerable: !0,
			get: function () {
				return Y.DecimalVector;
			}
		});
		Object.defineProperty(f, 'DictionaryVector', {
			enumerable: !0,
			get: function () {
				return Y.DictionaryVector;
			}
		});
		Object.defineProperty(f, 'FixedSizeBinaryVector', {
			enumerable: !0,
			get: function () {
				return Y.FixedSizeBinaryVector;
			}
		});
		Object.defineProperty(f, 'FixedSizeListVector', {
			enumerable: !0,
			get: function () {
				return Y.FixedSizeListVector;
			}
		});
		Object.defineProperty(f, 'FloatVector', {
			enumerable: !0,
			get: function () {
				return Y.FloatVector;
			}
		});
		Object.defineProperty(f, 'Float16Vector', {
			enumerable: !0,
			get: function () {
				return Y.Float16Vector;
			}
		});
		Object.defineProperty(f, 'Float32Vector', {
			enumerable: !0,
			get: function () {
				return Y.Float32Vector;
			}
		});
		Object.defineProperty(f, 'Float64Vector', {
			enumerable: !0,
			get: function () {
				return Y.Float64Vector;
			}
		});
		Object.defineProperty(f, 'IntervalVector', {
			enumerable: !0,
			get: function () {
				return Y.IntervalVector;
			}
		});
		Object.defineProperty(f, 'IntervalDayTimeVector', {
			enumerable: !0,
			get: function () {
				return Y.IntervalDayTimeVector;
			}
		});
		Object.defineProperty(f, 'IntervalYearMonthVector', {
			enumerable: !0,
			get: function () {
				return Y.IntervalYearMonthVector;
			}
		});
		Object.defineProperty(f, 'IntVector', {
			enumerable: !0,
			get: function () {
				return Y.IntVector;
			}
		});
		Object.defineProperty(f, 'Int8Vector', {
			enumerable: !0,
			get: function () {
				return Y.Int8Vector;
			}
		});
		Object.defineProperty(f, 'Int16Vector', {
			enumerable: !0,
			get: function () {
				return Y.Int16Vector;
			}
		});
		Object.defineProperty(f, 'Int32Vector', {
			enumerable: !0,
			get: function () {
				return Y.Int32Vector;
			}
		});
		Object.defineProperty(f, 'Int64Vector', {
			enumerable: !0,
			get: function () {
				return Y.Int64Vector;
			}
		});
		Object.defineProperty(f, 'Uint8Vector', {
			enumerable: !0,
			get: function () {
				return Y.Uint8Vector;
			}
		});
		Object.defineProperty(f, 'Uint16Vector', {
			enumerable: !0,
			get: function () {
				return Y.Uint16Vector;
			}
		});
		Object.defineProperty(f, 'Uint32Vector', {
			enumerable: !0,
			get: function () {
				return Y.Uint32Vector;
			}
		});
		Object.defineProperty(f, 'Uint64Vector', {
			enumerable: !0,
			get: function () {
				return Y.Uint64Vector;
			}
		});
		Object.defineProperty(f, 'ListVector', {
			enumerable: !0,
			get: function () {
				return Y.ListVector;
			}
		});
		Object.defineProperty(f, 'MapVector', {
			enumerable: !0,
			get: function () {
				return Y.MapVector;
			}
		});
		Object.defineProperty(f, 'NullVector', {
			enumerable: !0,
			get: function () {
				return Y.NullVector;
			}
		});
		Object.defineProperty(f, 'StructVector', {
			enumerable: !0,
			get: function () {
				return Y.StructVector;
			}
		});
		Object.defineProperty(f, 'TimestampVector', {
			enumerable: !0,
			get: function () {
				return Y.TimestampVector;
			}
		});
		Object.defineProperty(f, 'TimestampSecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimestampSecondVector;
			}
		});
		Object.defineProperty(f, 'TimestampMillisecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimestampMillisecondVector;
			}
		});
		Object.defineProperty(f, 'TimestampMicrosecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimestampMicrosecondVector;
			}
		});
		Object.defineProperty(f, 'TimestampNanosecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimestampNanosecondVector;
			}
		});
		Object.defineProperty(f, 'TimeVector', {
			enumerable: !0,
			get: function () {
				return Y.TimeVector;
			}
		});
		Object.defineProperty(f, 'TimeSecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimeSecondVector;
			}
		});
		Object.defineProperty(f, 'TimeMillisecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimeMillisecondVector;
			}
		});
		Object.defineProperty(f, 'TimeMicrosecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimeMicrosecondVector;
			}
		});
		Object.defineProperty(f, 'TimeNanosecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimeNanosecondVector;
			}
		});
		Object.defineProperty(f, 'UnionVector', {
			enumerable: !0,
			get: function () {
				return Y.UnionVector;
			}
		});
		Object.defineProperty(f, 'DenseUnionVector', {
			enumerable: !0,
			get: function () {
				return Y.DenseUnionVector;
			}
		});
		Object.defineProperty(f, 'SparseUnionVector', {
			enumerable: !0,
			get: function () {
				return Y.SparseUnionVector;
			}
		});
		Object.defineProperty(f, 'Utf8Vector', {
			enumerable: !0,
			get: function () {
				return Y.Utf8Vector;
			}
		});
		var K = Ua();
		Object.defineProperty(f, 'Builder', {
			enumerable: !0,
			get: function () {
				return K.Builder;
			}
		});
		Object.defineProperty(f, 'BinaryBuilder', {
			enumerable: !0,
			get: function () {
				return K.BinaryBuilder;
			}
		});
		Object.defineProperty(f, 'BoolBuilder', {
			enumerable: !0,
			get: function () {
				return K.BoolBuilder;
			}
		});
		Object.defineProperty(f, 'DateBuilder', {
			enumerable: !0,
			get: function () {
				return K.DateBuilder;
			}
		});
		Object.defineProperty(f, 'DateDayBuilder', {
			enumerable: !0,
			get: function () {
				return K.DateDayBuilder;
			}
		});
		Object.defineProperty(f, 'DateMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.DateMillisecondBuilder;
			}
		});
		Object.defineProperty(f, 'DecimalBuilder', {
			enumerable: !0,
			get: function () {
				return K.DecimalBuilder;
			}
		});
		Object.defineProperty(f, 'DictionaryBuilder', {
			enumerable: !0,
			get: function () {
				return K.DictionaryBuilder;
			}
		});
		Object.defineProperty(f, 'FixedSizeBinaryBuilder', {
			enumerable: !0,
			get: function () {
				return K.FixedSizeBinaryBuilder;
			}
		});
		Object.defineProperty(f, 'FixedSizeListBuilder', {
			enumerable: !0,
			get: function () {
				return K.FixedSizeListBuilder;
			}
		});
		Object.defineProperty(f, 'FloatBuilder', {
			enumerable: !0,
			get: function () {
				return K.FloatBuilder;
			}
		});
		Object.defineProperty(f, 'Float16Builder', {
			enumerable: !0,
			get: function () {
				return K.Float16Builder;
			}
		});
		Object.defineProperty(f, 'Float32Builder', {
			enumerable: !0,
			get: function () {
				return K.Float32Builder;
			}
		});
		Object.defineProperty(f, 'Float64Builder', {
			enumerable: !0,
			get: function () {
				return K.Float64Builder;
			}
		});
		Object.defineProperty(f, 'IntervalBuilder', {
			enumerable: !0,
			get: function () {
				return K.IntervalBuilder;
			}
		});
		Object.defineProperty(f, 'IntervalDayTimeBuilder', {
			enumerable: !0,
			get: function () {
				return K.IntervalDayTimeBuilder;
			}
		});
		Object.defineProperty(f, 'IntervalYearMonthBuilder', {
			enumerable: !0,
			get: function () {
				return K.IntervalYearMonthBuilder;
			}
		});
		Object.defineProperty(f, 'IntBuilder', {
			enumerable: !0,
			get: function () {
				return K.IntBuilder;
			}
		});
		Object.defineProperty(f, 'Int8Builder', {
			enumerable: !0,
			get: function () {
				return K.Int8Builder;
			}
		});
		Object.defineProperty(f, 'Int16Builder', {
			enumerable: !0,
			get: function () {
				return K.Int16Builder;
			}
		});
		Object.defineProperty(f, 'Int32Builder', {
			enumerable: !0,
			get: function () {
				return K.Int32Builder;
			}
		});
		Object.defineProperty(f, 'Int64Builder', {
			enumerable: !0,
			get: function () {
				return K.Int64Builder;
			}
		});
		Object.defineProperty(f, 'Uint8Builder', {
			enumerable: !0,
			get: function () {
				return K.Uint8Builder;
			}
		});
		Object.defineProperty(f, 'Uint16Builder', {
			enumerable: !0,
			get: function () {
				return K.Uint16Builder;
			}
		});
		Object.defineProperty(f, 'Uint32Builder', {
			enumerable: !0,
			get: function () {
				return K.Uint32Builder;
			}
		});
		Object.defineProperty(f, 'Uint64Builder', {
			enumerable: !0,
			get: function () {
				return K.Uint64Builder;
			}
		});
		Object.defineProperty(f, 'ListBuilder', {
			enumerable: !0,
			get: function () {
				return K.ListBuilder;
			}
		});
		Object.defineProperty(f, 'MapBuilder', {
			enumerable: !0,
			get: function () {
				return K.MapBuilder;
			}
		});
		Object.defineProperty(f, 'NullBuilder', {
			enumerable: !0,
			get: function () {
				return K.NullBuilder;
			}
		});
		Object.defineProperty(f, 'StructBuilder', {
			enumerable: !0,
			get: function () {
				return K.StructBuilder;
			}
		});
		Object.defineProperty(f, 'TimestampBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimestampBuilder;
			}
		});
		Object.defineProperty(f, 'TimestampSecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimestampSecondBuilder;
			}
		});
		Object.defineProperty(f, 'TimestampMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimestampMillisecondBuilder;
			}
		});
		Object.defineProperty(f, 'TimestampMicrosecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimestampMicrosecondBuilder;
			}
		});
		Object.defineProperty(f, 'TimestampNanosecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimestampNanosecondBuilder;
			}
		});
		Object.defineProperty(f, 'TimeBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimeBuilder;
			}
		});
		Object.defineProperty(f, 'TimeSecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimeSecondBuilder;
			}
		});
		Object.defineProperty(f, 'TimeMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimeMillisecondBuilder;
			}
		});
		Object.defineProperty(f, 'TimeMicrosecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimeMicrosecondBuilder;
			}
		});
		Object.defineProperty(f, 'TimeNanosecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimeNanosecondBuilder;
			}
		});
		Object.defineProperty(f, 'UnionBuilder', {
			enumerable: !0,
			get: function () {
				return K.UnionBuilder;
			}
		});
		Object.defineProperty(f, 'DenseUnionBuilder', {
			enumerable: !0,
			get: function () {
				return K.DenseUnionBuilder;
			}
		});
		Object.defineProperty(f, 'SparseUnionBuilder', {
			enumerable: !0,
			get: function () {
				return K.SparseUnionBuilder;
			}
		});
		Object.defineProperty(f, 'Utf8Builder', {
			enumerable: !0,
			get: function () {
				return K.Utf8Builder;
			}
		});
		var _f = mn();
		Object.defineProperty(f, 'ByteStream', {
			enumerable: !0,
			get: function () {
				return _f.ByteStream;
			}
		});
		Object.defineProperty(f, 'AsyncByteStream', {
			enumerable: !0,
			get: function () {
				return _f.AsyncByteStream;
			}
		});
		Object.defineProperty(f, 'AsyncByteQueue', {
			enumerable: !0,
			get: function () {
				return _f.AsyncByteQueue;
			}
		});
		var mo = uo();
		Object.defineProperty(f, 'RecordBatchReader', {
			enumerable: !0,
			get: function () {
				return mo.RecordBatchReader;
			}
		});
		Object.defineProperty(f, 'RecordBatchFileReader', {
			enumerable: !0,
			get: function () {
				return mo.RecordBatchFileReader;
			}
		});
		Object.defineProperty(f, 'RecordBatchStreamReader', {
			enumerable: !0,
			get: function () {
				return mo.RecordBatchStreamReader;
			}
		});
		Object.defineProperty(f, 'AsyncRecordBatchFileReader', {
			enumerable: !0,
			get: function () {
				return mo.AsyncRecordBatchFileReader;
			}
		});
		Object.defineProperty(f, 'AsyncRecordBatchStreamReader', {
			enumerable: !0,
			get: function () {
				return mo.AsyncRecordBatchStreamReader;
			}
		});
		var Nu = iu();
		Object.defineProperty(f, 'RecordBatchWriter', {
			enumerable: !0,
			get: function () {
				return Nu.RecordBatchWriter;
			}
		});
		Object.defineProperty(f, 'RecordBatchFileWriter', {
			enumerable: !0,
			get: function () {
				return Nu.RecordBatchFileWriter;
			}
		});
		Object.defineProperty(f, 'RecordBatchStreamWriter', {
			enumerable: !0,
			get: function () {
				return Nu.RecordBatchStreamWriter;
			}
		});
		Object.defineProperty(f, 'RecordBatchJSONWriter', {
			enumerable: !0,
			get: function () {
				return Nu.RecordBatchJSONWriter;
			}
		});
		var yf = Ga();
		Object.defineProperty(f, 'MessageReader', {
			enumerable: !0,
			get: function () {
				return yf.MessageReader;
			}
		});
		Object.defineProperty(f, 'AsyncMessageReader', {
			enumerable: !0,
			get: function () {
				return yf.AsyncMessageReader;
			}
		});
		Object.defineProperty(f, 'JSONMessageReader', {
			enumerable: !0,
			get: function () {
				return yf.JSONMessageReader;
			}
		});
		var GD = ti();
		Object.defineProperty(f, 'Message', {
			enumerable: !0,
			get: function () {
				return GD.Message;
			}
		});
		var $D = zr();
		Object.defineProperty(f, 'RecordBatch', {
			enumerable: !0,
			get: function () {
				return $D.RecordBatch;
			}
		});
		var mf = hg();
		Object.defineProperty(f, 'DataFrame', {
			enumerable: !0,
			get: function () {
				return mf.DataFrame;
			}
		});
		Object.defineProperty(f, 'FilteredDataFrame', {
			enumerable: !0,
			get: function () {
				return mf.FilteredDataFrame;
			}
		});
		Object.defineProperty(f, 'CountByResult', {
			enumerable: !0,
			get: function () {
				return mf.CountByResult;
			}
		});
		var JD = Ls(),
			KD = wl(),
			ZD = _r(),
			QD = Us(),
			XD = Je(),
			eO = Hs(),
			tO = ff();
		f.predicate = tO;
		var bf = Cl();
		f.util = Object.assign(
			Object.assign(
				Object.assign(
					Object.assign(Object.assign(Object.assign(Object.assign({}, JD), KD), ZD), QD),
					XD
				),
				eO
			),
			{
				compareSchemas: bf.compareSchemas,
				compareFields: bf.compareFields,
				compareTypes: bf.compareTypes
			}
		);
		var rO = Qn();
		Object.defineProperty(f, 'isTypedArray', {
			enumerable: !0,
			get: function () {
				return rO.isTypedArray;
			}
		});
	});
	var _s = w(() => {});
	var go = w(() => {});
	var wg = w(() => {});
	var Ig = w(() => {});
	var Bg = w(() => {});
	var aO = {};
	mw(aO, { registerWorker: () => Og });
	var mg = Rr(Ms(), 1),
		bg = Rr(Ua(), 1),
		hs = Rr(uo(), 1),
		ps = Rr(iu(), 1),
		gg = Rr(rg(), 1),
		vg = Rr(sg(), 1),
		xu = Rr(og(), 1),
		Cu = Rr(ag(), 1),
		_ = Rr(yg(), 1);
	mg.default.toDOMStream = gg.toDOMStream;
	bg.Builder.throughDOM = vg.builderThroughDOMStream;
	hs.RecordBatchReader.throughDOM = xu.recordBatchReaderThroughDOMStream;
	hs.RecordBatchFileReader.throughDOM = xu.recordBatchReaderThroughDOMStream;
	hs.RecordBatchStreamReader.throughDOM = xu.recordBatchReaderThroughDOMStream;
	ps.RecordBatchWriter.throughDOM = Cu.recordBatchWriterThroughDOMStream;
	ps.RecordBatchFileWriter.throughDOM = Cu.recordBatchWriterThroughDOMStream;
	ps.RecordBatchStreamWriter.throughDOM = Cu.recordBatchWriterThroughDOMStream;
	var le = ((ue) => (
			(ue.CLOSE_PREPARED = 'CLOSE_PREPARED'),
			(ue.COLLECT_FILE_STATISTICS = 'COLLECT_FILE_STATISTICS'),
			(ue.CONNECT = 'CONNECT'),
			(ue.COPY_FILE_TO_BUFFER = 'COPY_FILE_TO_BUFFER'),
			(ue.COPY_FILE_TO_PATH = 'COPY_FILE_TO_PATH'),
			(ue.CREATE_PREPARED = 'CREATE_PREPARED'),
			(ue.DISCONNECT = 'DISCONNECT'),
			(ue.DROP_FILE = 'DROP_FILE'),
			(ue.DROP_FILES = 'DROP_FILES'),
			(ue.EXPORT_FILE_STATISTICS = 'EXPORT_FILE_STATISTICS'),
			(ue.FETCH_QUERY_RESULTS = 'FETCH_QUERY_RESULTS'),
			(ue.FLUSH_FILES = 'FLUSH_FILES'),
			(ue.GET_FEATURE_FLAGS = 'GET_FEATURE_FLAGS'),
			(ue.GET_TABLE_NAMES = 'GET_TABLE_NAMES'),
			(ue.GET_VERSION = 'GET_VERSION'),
			(ue.GLOB_FILE_INFOS = 'GLOB_FILE_INFOS'),
			(ue.INSERT_ARROW_FROM_IPC_STREAM = 'INSERT_ARROW_FROM_IPC_STREAM'),
			(ue.INSERT_CSV_FROM_PATH = 'IMPORT_CSV_FROM_PATH'),
			(ue.INSERT_JSON_FROM_PATH = 'IMPORT_JSON_FROM_PATH'),
			(ue.INSTANTIATE = 'INSTANTIATE'),
			(ue.OPEN = 'OPEN'),
			(ue.PING = 'PING'),
			(ue.REGISTER_FILE_BUFFER = 'REGISTER_FILE_BUFFER'),
			(ue.REGISTER_FILE_HANDLE = 'REGISTER_FILE_HANDLE'),
			(ue.REGISTER_FILE_URL = 'REGISTER_FILE_URL'),
			(ue.RESET = 'RESET'),
			(ue.RUN_PREPARED = 'RUN_PREPARED'),
			(ue.RUN_QUERY = 'RUN_QUERY'),
			(ue.SEND_PREPARED = 'SEND_PREPARED'),
			(ue.SEND_QUERY = 'SEND_QUERY'),
			(ue.TOKENIZE = 'TOKENIZE'),
			ue
		))(le || {}),
		$e = ((pe) => (
			(pe.CONNECTION_INFO = 'CONNECTION_INFO'),
			(pe.ERROR = 'ERROR'),
			(pe.FEATURE_FLAGS = 'FEATURE_FLAGS'),
			(pe.FILE_BUFFER = 'FILE_BUFFER'),
			(pe.FILE_INFOS = 'FILE_INFOS'),
			(pe.FILE_SIZE = 'FILE_SIZE'),
			(pe.FILE_STATISTICS = 'FILE_STATISTICS'),
			(pe.LOG = 'LOG'),
			(pe.OK = 'OK'),
			(pe.PREPARED_STATEMENT_ID = 'PREPARED_STATEMENT_ID'),
			(pe.QUERY_PLAN = 'QUERY_PLAN'),
			(pe.QUERY_RESULT = 'QUERY_RESULT'),
			(pe.QUERY_RESULT_CHUNK = 'QUERY_RESULT_CHUNK'),
			(pe.QUERY_START = 'QUERY_START'),
			(pe.REGISTERED_FILE = 'REGISTERED_FILE'),
			(pe.SCRIPT_TOKENS = 'SCRIPT_TOKENS'),
			(pe.SUCCESS = 'SUCCESS'),
			(pe.TABLE_NAMES = 'TABLE_NAMES'),
			(pe.VERSION_STRING = 'VERSION_STRING'),
			pe
		))($e || {});
	function bo(r, e) {
		switch (e.typeId) {
			case _.Type.Binary:
				return { name: r, type: 'binary' };
			case _.Type.Bool:
				return { name: r, type: 'bool' };
			case _.Type.Date:
				return { name: r, type: 'date' };
			case _.Type.DateDay:
				return { name: r, type: 'date32[d]' };
			case _.Type.DateMillisecond:
				return { name: r, type: 'date64[ms]' };
			case _.Type.Decimal: {
				let t = e;
				return { name: r, type: 'decimal', precision: t.precision, scale: t.scale };
			}
			case _.Type.Float:
				return { name: r, type: 'float' };
			case _.Type.Float16:
				return { name: r, type: 'float16' };
			case _.Type.Float32:
				return { name: r, type: 'float32' };
			case _.Type.Float64:
				return { name: r, type: 'float64' };
			case _.Type.Int:
				return { name: r, type: 'int32' };
			case _.Type.Int16:
				return { name: r, type: 'int16' };
			case _.Type.Int32:
				return { name: r, type: 'int32' };
			case _.Type.Int64:
				return { name: r, type: 'int64' };
			case _.Type.Uint16:
				return { name: r, type: 'uint16' };
			case _.Type.Uint32:
				return { name: r, type: 'uint32' };
			case _.Type.Uint64:
				return { name: r, type: 'uint64' };
			case _.Type.Uint8:
				return { name: r, type: 'uint8' };
			case _.Type.IntervalDayTime:
				return { name: r, type: 'interval[dt]' };
			case _.Type.IntervalYearMonth:
				return { name: r, type: 'interval[m]' };
			case _.Type.List: {
				let t = e;
				return { name: r, type: 'list', children: [bo(t.valueField.name, t.valueField.type)] };
			}
			case _.Type.FixedSizeBinary:
				return { name: r, type: 'fixedsizebinary', byteWidth: e.byteWidth };
			case _.Type.Null:
				return { name: r, type: 'null' };
			case _.Type.Utf8:
				return { name: r, type: 'utf8' };
			case _.Type.Struct:
				return { name: r, type: 'struct', children: e.children.map((n) => bo(n.name, n.type)) };
			case _.Type.Time:
				return { name: r, type: 'time[s]' };
			case _.Type.TimeMicrosecond:
				return { name: r, type: 'time[us]' };
			case _.Type.TimeMillisecond:
				return { name: r, type: 'time[ms]' };
			case _.Type.TimeNanosecond:
				return { name: r, type: 'time[ns]' };
			case _.Type.TimeSecond:
				return { name: r, type: 'time[s]' };
			case _.Type.Timestamp:
				return { name: r, type: 'timestamp', timezone: e.timezone || void 0 };
			case _.Type.TimestampSecond:
				return { name: r, type: 'timestamp[s]', timezone: e.timezone || void 0 };
			case _.Type.TimestampMicrosecond:
				return { name: r, type: 'timestamp[us]', timezone: e.timezone || void 0 };
			case _.Type.TimestampNanosecond:
				return { name: r, type: 'timestamp[ns]', timezone: e.timezone || void 0 };
			case _.Type.TimestampMillisecond:
				return { name: r, type: 'timestamp[ms]', timezone: e.timezone || void 0 };
		}
		throw new Error(`unsupported arrow type: ${e.toString()}`);
	}
	var gf = class {
		constructor() {
			this._bindings = null;
			this._nextMessageId = 0;
		}
		log(e) {
			this.postMessage(
				{ messageId: this._nextMessageId++, requestId: 0, type: $e.LOG, data: e },
				[]
			);
		}
		sendOK(e) {
			this.postMessage(
				{ messageId: this._nextMessageId++, requestId: e.messageId, type: $e.OK, data: null },
				[]
			);
		}
		failWith(e, t) {
			let n = { name: t.name, message: t.message, stack: t.stack || void 0 };
			this.postMessage(
				{ messageId: this._nextMessageId++, requestId: e.messageId, type: $e.ERROR, data: n },
				[]
			);
		}
		async onMessage(e) {
			switch (e.type) {
				case le.PING:
					this.sendOK(e);
					return;
				case le.INSTANTIATE:
					this._bindings != null && this.failWith(e, new Error('duckdb already initialized'));
					try {
						(this._bindings = await this.instantiate(e.data[0], e.data[1])), this.sendOK(e);
					} catch (t) {
						(this._bindings = null), this.failWith(e, t);
					}
					return;
				default:
					break;
			}
			if (!this._bindings) return this.failWith(e, new Error('duckdb is not initialized'));
			try {
				switch (e.type) {
					case le.GET_VERSION:
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: $e.VERSION_STRING,
								data: this._bindings.getVersion()
							},
							[]
						);
						break;
					case le.GET_FEATURE_FLAGS:
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: $e.FEATURE_FLAGS,
								data: this._bindings.getFeatureFlags()
							},
							[]
						);
						break;
					case le.RESET:
						this._bindings.reset(), this.sendOK(e);
						break;
					case le.OPEN:
						this._bindings.open(e.data), this.sendOK(e);
						break;
					case le.DROP_FILE:
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: $e.SUCCESS,
								data: this._bindings.dropFile(e.data)
							},
							[]
						);
						break;
					case le.DROP_FILES:
						this._bindings.dropFiles(), this.sendOK(e);
						break;
					case le.FLUSH_FILES:
						this._bindings.flushFiles(), this.sendOK(e);
						break;
					case le.CONNECT: {
						let t = this._bindings.connect();
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: $e.CONNECTION_INFO,
								data: t.useUnsafe((n, i) => i)
							},
							[]
						);
						break;
					}
					case le.DISCONNECT:
						this._bindings.disconnect(e.data), this.sendOK(e);
						break;
					case le.CREATE_PREPARED: {
						let t = this._bindings.createPrepared(e.data[0], e.data[1]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: $e.PREPARED_STATEMENT_ID,
								data: t
							},
							[]
						);
						break;
					}
					case le.CLOSE_PREPARED: {
						this._bindings.closePrepared(e.data[0], e.data[1]), this.sendOK(e);
						break;
					}
					case le.RUN_PREPARED: {
						let t = this._bindings.runPrepared(e.data[0], e.data[1], e.data[2]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: $e.QUERY_RESULT,
								data: t
							},
							[t.buffer]
						);
						break;
					}
					case le.RUN_QUERY: {
						let t = this._bindings.runQuery(e.data[0], e.data[1]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: $e.QUERY_RESULT,
								data: t
							},
							[t.buffer]
						);
						break;
					}
					case le.SEND_PREPARED: {
						let t = this._bindings.sendPrepared(e.data[0], e.data[1], e.data[2]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: $e.QUERY_START,
								data: t
							},
							[t.buffer]
						);
						break;
					}
					case le.SEND_QUERY: {
						let t = this._bindings.sendQuery(e.data[0], e.data[1]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: $e.QUERY_START,
								data: t
							},
							[t.buffer]
						);
						break;
					}
					case le.FETCH_QUERY_RESULTS: {
						let t = this._bindings.fetchQueryResults(e.data);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: $e.QUERY_RESULT_CHUNK,
								data: t
							},
							[t.buffer]
						);
						break;
					}
					case le.GET_TABLE_NAMES: {
						let t = this._bindings.getTableNames(e.data[0], e.data[1]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: $e.TABLE_NAMES,
								data: t
							},
							[]
						);
						break;
					}
					case le.GLOB_FILE_INFOS: {
						let t = this._bindings.globFiles(e.data);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: $e.FILE_INFOS,
								data: t
							},
							[]
						);
						break;
					}
					case le.REGISTER_FILE_URL:
						this._bindings.registerFileURL(e.data[0], e.data[1]), this.sendOK(e);
						break;
					case le.REGISTER_FILE_BUFFER:
						this._bindings.registerFileBuffer(e.data[0], e.data[1]), this.sendOK(e);
						break;
					case le.REGISTER_FILE_HANDLE:
						this._bindings.registerFileHandle(e.data[0], e.data[1]), this.sendOK(e);
						break;
					case le.COPY_FILE_TO_PATH:
						this._bindings.copyFileToPath(e.data[0], e.data[1]), this.sendOK(e);
						break;
					case le.COPY_FILE_TO_BUFFER: {
						let t = this._bindings.copyFileToBuffer(e.data);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: $e.FILE_BUFFER,
								data: t
							},
							[]
						);
						break;
					}
					case le.COLLECT_FILE_STATISTICS:
						this._bindings.collectFileStatistics(e.data[0], e.data[1]), this.sendOK(e);
						break;
					case le.EXPORT_FILE_STATISTICS: {
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: $e.FILE_STATISTICS,
								data: this._bindings.exportFileStatistics(e.data)
							},
							[]
						);
						break;
					}
					case le.INSERT_ARROW_FROM_IPC_STREAM: {
						this._bindings.insertArrowFromIPCStream(e.data[0], e.data[1], e.data[2]),
							this.sendOK(e);
						break;
					}
					case le.INSERT_CSV_FROM_PATH: {
						this._bindings.insertCSVFromPath(e.data[0], e.data[1], e.data[2]), this.sendOK(e);
						break;
					}
					case le.INSERT_JSON_FROM_PATH: {
						this._bindings.insertJSONFromPath(e.data[0], e.data[1], e.data[2]), this.sendOK(e);
						break;
					}
					case le.TOKENIZE: {
						let t = this._bindings.tokenize(e.data);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: $e.SCRIPT_TOKENS,
								data: t
							},
							[]
						);
						break;
					}
				}
			} catch (t) {
				return this.failWith(e, t);
			}
		}
	};
	var vf = {},
		nO = (function () {
			var r = vf.url;
			return function (e) {
				e = e || {};
				function t() {
					return we.buffer != pt && Mr(we.buffer), Lf;
				}
				function n() {
					return we.buffer != pt && Mr(we.buffer), Nf;
				}
				function i() {
					return we.buffer != pt && Mr(we.buffer), xf;
				}
				function s() {
					return we.buffer != pt && Mr(we.buffer), Cf;
				}
				function o() {
					return we.buffer != pt && Mr(we.buffer), jf;
				}
				function l() {
					return we.buffer != pt && Mr(we.buffer), qf;
				}
				function h() {
					return we.buffer != pt && Mr(we.buffer), Wf;
				}
				var u = typeof e != 'undefined' ? e : {},
					m,
					E;
				u.ready = new Promise(function (a, c) {
					(m = a), (E = c);
				});
				var M = {},
					X;
				for (X in u) u.hasOwnProperty(X) && (M[X] = u[X]);
				var Ae = [],
					Te = './this.program',
					bt = function (a, c) {
						throw c;
					},
					ht = typeof window == 'object',
					Zt = typeof importScripts == 'function',
					pe =
						typeof process == 'object' &&
						typeof process.versions == 'object' &&
						typeof process.versions.node == 'string',
					P = u.ENVIRONMENT_IS_PTHREAD || !1,
					gt = '';
				function Df(a) {
					return u.locateFile ? u.locateFile(a, gt) : gt + a;
				}
				var ms, ju, bs, Fg;
				function Eg(a) {
					if (!(a instanceof Ds)) {
						var c = a;
						Ne('exiting due to exception: ' + c);
					}
				}
				var It, Bt;
				if (pe) {
					Zt ? (gt = _s().dirname(gt) + '/') : (gt = __dirname + '/'),
						(ms = function (c, d) {
							return (
								It || (It = go()),
								Bt || (Bt = _s()),
								(c = Bt.normalize(c)),
								It.readFileSync(c, d ? null : 'utf8')
							);
						}),
						(bs = function (c) {
							var d = ms(c, !0);
							return d.buffer || (d = new Uint8Array(d)), ui(d.buffer), d;
						}),
						(ju = function (c, d, p) {
							It || (It = go()),
								Bt || (Bt = _s()),
								(c = Bt.normalize(c)),
								It.readFile(c, function (y, v) {
									y ? p(y) : d(v.buffer);
								});
						}),
						process.argv.length > 1 && (Te = process.argv[1].replace(/\\/g, '/')),
						(Ae = process.argv.slice(2)),
						process.on('uncaughtException', function (a) {
							if (!(a instanceof Ds)) throw a;
						}),
						process.on('unhandledRejection', function (a) {
							throw a;
						}),
						(bt = function (a, c) {
							if (Ts()) throw ((process.exitCode = a), c);
							Eg(c), process.exit(a);
						}),
						(u.inspect = function () {
							return '[Emscripten Module object]';
						});
					var Of;
					try {
						Of = wg();
					} catch (a) {
						throw (
							(console.error(
								'The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'
							),
							a)
						);
					}
					global.Worker = Of.Worker;
				} else
					(ht || Zt) &&
						(Zt
							? (gt = self.location.href)
							: typeof document != 'undefined' &&
							  document.currentScript &&
							  (gt = document.currentScript.src),
						r && (gt = r),
						gt.indexOf('blob:') !== 0
							? (gt = gt.substr(0, gt.replace(/[?#].*/, '').lastIndexOf('/') + 1))
							: (gt = ''),
						pe
							? ((ms = function (c, d) {
									return (
										It || (It = go()),
										Bt || (Bt = _s()),
										(c = Bt.normalize(c)),
										It.readFileSync(c, d ? null : 'utf8')
									);
							  }),
							  (bs = function (c) {
									var d = ms(c, !0);
									return d.buffer || (d = new Uint8Array(d)), ui(d.buffer), d;
							  }),
							  (ju = function (c, d, p) {
									It || (It = go()),
										Bt || (Bt = _s()),
										(c = Bt.normalize(c)),
										It.readFile(c, function (y, v) {
											y ? p(y) : d(v.buffer);
										});
							  }))
							: ((ms = function (a) {
									var c = new XMLHttpRequest();
									return c.open('GET', a, !1), c.send(null), c.responseText;
							  }),
							  Zt &&
									(bs = function (a) {
										var c = new XMLHttpRequest();
										return (
											c.open('GET', a, !1),
											(c.responseType = 'arraybuffer'),
											c.send(null),
											new Uint8Array(c.response)
										);
									}),
							  (ju = function (a, c, d) {
									var p = new XMLHttpRequest();
									p.open('GET', a, !0),
										(p.responseType = 'arraybuffer'),
										(p.onload = function () {
											if (p.status == 200 || (p.status == 0 && p.response)) {
												c(p.response);
												return;
											}
											d();
										}),
										(p.onerror = d),
										p.send(null);
							  })),
						(Fg = function (a) {
							document.title = a;
						}));
				pe && typeof performance == 'undefined' && (global.performance = Ig().performance);
				var ue = u.print || console.log.bind(console),
					Ne = u.printErr || console.warn.bind(console);
				for (X in M) M.hasOwnProperty(X) && (u[X] = M[X]);
				(M = null),
					u.arguments && (Ae = u.arguments),
					u.thisProgram && (Te = u.thisProgram),
					u.quit && (bt = u.quit);
				function gs(a) {
					gs.shown || (gs.shown = {}), gs.shown[a] || ((gs.shown[a] = 1), Ne(a));
				}
				var uO = Atomics.load,
					cO = Atomics.store,
					lO = Atomics.compareExchange,
					vs;
				u.wasmBinary && (vs = u.wasmBinary);
				var Ff = u.noExitRuntime || !0;
				typeof WebAssembly != 'object' && At('no native wasm support detected');
				var we,
					Ef,
					vo = !1,
					Vn;
				function ui(a, c) {
					a || At('Assertion failed: ' + c);
				}
				function Mg(a) {
					var c = u['_' + a];
					return ui(c, 'Cannot call unknown function ' + a + ', make sure it is exported'), c;
				}
				function Rg(a, c, d, p, y) {
					var v = {
						string: function (xe) {
							var Qt = 0;
							if (xe != null && xe !== 0) {
								var ur = (xe.length << 2) + 1;
								(Qt = fi(ur)), To(xe, Qt, ur);
							}
							return Qt;
						},
						array: function (xe) {
							var Qt = fi(xe.length);
							return Pf(xe, Qt), Qt;
						}
					};
					function T(xe) {
						return c === 'string' ? St(xe) : c === 'boolean' ? Boolean(xe) : xe;
					}
					var B = Mg(a),
						L = [],
						ie = 0;
					if (p)
						for (var se = 0; se < p.length; se++) {
							var Ft = v[d[se]];
							Ft ? (ie === 0 && (ie = Ss()), (L[se] = Ft(p[se]))) : (L[se] = p[se]);
						}
					var Ie = B.apply(null, L);
					function Et(xe) {
						return ie !== 0 && di(ie), T(xe);
					}
					return (Ie = Et(Ie)), Ie;
				}
				function Mf(a) {
					var c = new TextDecoder(a);
					this.decode = function (d) {
						return (
							d.buffer instanceof SharedArrayBuffer && (d = new Uint8Array(d)), c.decode.call(c, d)
						);
					};
				}
				var Rf = typeof TextDecoder != 'undefined' ? new Mf('utf8') : void 0;
				function Uf(a, c, d) {
					for (var p = c + d, y = c; a[y] && !(y >= p); ) ++y;
					if (y - c > 16 && a.subarray && Rf) return Rf.decode(a.subarray(c, y));
					for (var v = ''; c < y; ) {
						var T = a[c++];
						if (!(T & 128)) {
							v += String.fromCharCode(T);
							continue;
						}
						var B = a[c++] & 63;
						if ((T & 224) == 192) {
							v += String.fromCharCode(((T & 31) << 6) | B);
							continue;
						}
						var L = a[c++] & 63;
						if (
							((T & 240) == 224
								? (T = ((T & 15) << 12) | (B << 6) | L)
								: (T = ((T & 7) << 18) | (B << 12) | (L << 6) | (a[c++] & 63)),
							T < 65536)
						)
							v += String.fromCharCode(T);
						else {
							var ie = T - 65536;
							v += String.fromCharCode(55296 | (ie >> 10), 56320 | (ie & 1023));
						}
					}
					return v;
				}
				function St(a, c) {
					return a ? Uf(n(), a, c) : '';
				}
				function Vf(a, c, d, p) {
					if (!(p > 0)) return 0;
					for (var y = d, v = d + p - 1, T = 0; T < a.length; ++T) {
						var B = a.charCodeAt(T);
						if (B >= 55296 && B <= 57343) {
							var L = a.charCodeAt(++T);
							B = (65536 + ((B & 1023) << 10)) | (L & 1023);
						}
						if (B <= 127) {
							if (d >= v) break;
							c[d++] = B;
						} else if (B <= 2047) {
							if (d + 1 >= v) break;
							(c[d++] = 192 | (B >> 6)), (c[d++] = 128 | (B & 63));
						} else if (B <= 65535) {
							if (d + 2 >= v) break;
							(c[d++] = 224 | (B >> 12)),
								(c[d++] = 128 | ((B >> 6) & 63)),
								(c[d++] = 128 | (B & 63));
						} else {
							if (d + 3 >= v) break;
							(c[d++] = 240 | (B >> 18)),
								(c[d++] = 128 | ((B >> 12) & 63)),
								(c[d++] = 128 | ((B >> 6) & 63)),
								(c[d++] = 128 | (B & 63));
						}
					}
					return (c[d] = 0), d - y;
				}
				function To(a, c, d) {
					return Vf(a, n(), c, d);
				}
				function kf(a) {
					for (var c = 0, d = 0; d < a.length; ++d) {
						var p = a.charCodeAt(d);
						p >= 55296 &&
							p <= 57343 &&
							(p = (65536 + ((p & 1023) << 10)) | (a.charCodeAt(++d) & 1023)),
							p <= 127 ? ++c : p <= 2047 ? (c += 2) : p <= 65535 ? (c += 3) : (c += 4);
					}
					return c;
				}
				var dO = typeof TextDecoder != 'undefined' ? new Mf('utf-16le') : void 0;
				function Pf(a, c) {
					t().set(a, c);
				}
				function Ug(a, c, d) {
					for (var p = 0; p < a.length; ++p) t()[c++ >> 0] = a.charCodeAt(p);
					d || (t()[c >> 0] = 0);
				}
				function Vg(a, c) {
					return a % c > 0 && (a += c - (a % c)), a;
				}
				var pt, Lf, Nf, xf, Cf, jf, qf, kg, Wf;
				P && (pt = u.buffer);
				function Mr(a) {
					(pt = a),
						(u.HEAP8 = Lf = new Int8Array(a)),
						(u.HEAP16 = xf = new Int16Array(a)),
						(u.HEAP32 = jf = new Int32Array(a)),
						(u.HEAPU8 = Nf = new Uint8Array(a)),
						(u.HEAPU16 = Cf = new Uint16Array(a)),
						(u.HEAPU32 = qf = new Uint32Array(a)),
						(u.HEAPF32 = kg = new Float32Array(a)),
						(u.HEAPF64 = Wf = new Float64Array(a));
				}
				var zf = u.INITIAL_MEMORY || 16777216;
				if (P) (we = u.wasmMemory), (pt = u.buffer);
				else if (u.wasmMemory) we = u.wasmMemory;
				else if (
					((we = new WebAssembly.Memory({
						initial: zf / 65536,
						maximum: 2147483648 / 65536,
						shared: !0
					})),
					!(we.buffer instanceof SharedArrayBuffer))
				)
					throw (
						(Ne(
							'requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag'
						),
						pe &&
							console.log(
								'(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)'
							),
						Error('bad memory'))
					);
				we && (pt = we.buffer), (zf = pt.byteLength), Mr(pt);
				var ci,
					Hf = [],
					Yf = [],
					Pg = [],
					Lg = [],
					Gf = [],
					Ng = !1,
					xg = !1,
					qu = 0;
				function Ts() {
					return Ff || qu > 0;
				}
				function Cg() {
					if (!P) {
						if (u.preRun)
							for (typeof u.preRun == 'function' && (u.preRun = [u.preRun]); u.preRun.length; )
								zg(u.preRun.shift());
						wo(Hf);
					}
				}
				function $f() {
					(Ng = !0), !P && wo(Yf);
				}
				function jg() {
					P || wo(Pg);
				}
				function qg() {
					P || (x.terminateAllThreads(), (xg = !0));
				}
				function Wg() {
					if (!P) {
						if (u.postRun)
							for (typeof u.postRun == 'function' && (u.postRun = [u.postRun]); u.postRun.length; )
								Yg(u.postRun.shift());
						wo(Gf);
					}
				}
				function zg(a) {
					Hf.unshift(a);
				}
				function Hg(a) {
					Yf.unshift(a);
				}
				function Yg(a) {
					Gf.unshift(a);
				}
				var kn = 0,
					Wu = null,
					ws = null;
				function Gg(a) {
					kn++, u.monitorRunDependencies && u.monitorRunDependencies(kn);
				}
				function $g(a) {
					if (
						(kn--,
						u.monitorRunDependencies && u.monitorRunDependencies(kn),
						kn == 0 && (Wu !== null && (clearInterval(Wu), (Wu = null)), ws))
					) {
						var c = ws;
						(ws = null), c();
					}
				}
				(u.preloadedImages = {}), (u.preloadedAudios = {});
				function At(a) {
					P ? postMessage({ cmd: 'onAbort', arg: a }) : u.onAbort && u.onAbort(a),
						(a = 'Aborted(' + a + ')'),
						Ne(a),
						(vo = !0),
						(Vn = 1),
						(a += '. Build with -s ASSERTIONS=1 for more info.');
					var c = new WebAssembly.RuntimeError(a);
					throw (E(c), c);
				}
				var Jg = 'data:application/octet-stream;base64,';
				function Jf(a) {
					return a.startsWith(Jg);
				}
				var Dt;
				u.locateFile
					? ((Dt = './duckdb-wasm-next-coi.wasm'), Jf(Dt) || (Dt = Df(Dt)))
					: (Dt = new URL('duckdb_wasm.wasm', vf.url).toString());
				function Kf(a) {
					try {
						if (a == Dt && vs) return new Uint8Array(vs);
						if (bs) return bs(a);
						throw 'both async and sync fetching of the wasm failed';
					} catch (c) {
						At(c);
					}
				}
				function Kg() {
					return !vs && (ht || Zt) && typeof fetch == 'function'
						? fetch(Dt, { credentials: 'same-origin' })
								.then(function (a) {
									if (!a.ok) throw "failed to load wasm binary file at '" + Dt + "'";
									return a.arrayBuffer();
								})
								.catch(function () {
									return Kf(Dt);
								})
						: Promise.resolve().then(function () {
								return Kf(Dt);
						  });
				}
				function Zg() {
					var a = { a: vT };
					function c(T, B) {
						var L = T.exports;
						if (((u.asm = L), nv(u.asm.mb), (ci = u.asm.Ea), Hg(u.asm.Ca), (Ef = B), !P)) {
							var ie = x.unusedWorkers.length;
							x.unusedWorkers.forEach(function (se) {
								x.loadWasmModuleToWorker(se, function () {
									--ie || $g('wasm-instantiate');
								});
							});
						}
					}
					P || Gg('wasm-instantiate');
					function d(T) {
						c(T.instance, T.module);
					}
					function p(T) {
						return Kg()
							.then(function (B) {
								return WebAssembly.instantiate(B, a);
							})
							.then(function (B) {
								return B;
							})
							.then(T, function (B) {
								Ne('failed to asynchronously prepare wasm: ' + B), At(B);
							});
					}
					function y() {
						return !vs &&
							typeof WebAssembly.instantiateStreaming == 'function' &&
							!Jf(Dt) &&
							typeof fetch == 'function'
							? fetch(Dt, { credentials: 'same-origin' }).then(function (T) {
									var B = WebAssembly.instantiateStreaming(T, a);
									return B.then(d, function (L) {
										return (
											Ne('wasm streaming compile failed: ' + L),
											Ne('falling back to ArrayBuffer instantiation'),
											p(d)
										);
									});
							  })
							: p(d);
					}
					if (u.instantiateWasm)
						try {
							var v = u.instantiateWasm(a, c);
							return v;
						} catch (T) {
							return Ne('Module.instantiateWasm callback failed with error: ' + T), !1;
						}
					return y().catch(E), {};
				}
				var Qg = {};
				function wo(a) {
					for (; a.length > 0; ) {
						var c = a.shift();
						if (typeof c == 'function') {
							c(u);
							continue;
						}
						var d = c.func;
						typeof d == 'number'
							? c.arg === void 0
								? ci.get(d)()
								: ci.get(d)(c.arg)
							: d(c.arg === void 0 ? null : c.arg);
					}
				}
				function Zf(a, c) {
					if (a <= 0 || a > t().length || a & !0 || c < 0) return -28;
					if (c == 0) return 0;
					c >= 2147483647 && (c = 1 / 0);
					var d = Atomics.load(o(), hi >> 2),
						p = 0;
					if (d == a) {
						var y = Atomics.compareExchange(o(), hi >> 2, d, 0);
						if (y == d && (--c, (p = 1), c <= 0)) return 1;
					}
					var v = Atomics.notify(o(), a >> 2, c);
					if (v >= 0) return v + p;
					throw 'Atomics.notify returned an unexpected value ' + v;
				}
				u._emscripten_futex_wake = Zf;
				function Xg(a) {
					o()[(a + 8) >> 2] = 0;
					var c = x.pthreads[a];
					delete x.pthreads[a],
						c.worker.terminate(),
						Xf(c),
						x.runningWorkers.splice(x.runningWorkers.indexOf(c.worker), 1),
						(c.worker.pthread = void 0);
				}
				function ev(a) {
					var c = x.pthreads[a];
					c.worker.postMessage({ cmd: 'cancel' });
				}
				function Qf(a) {
					var c = x.pthreads[a];
					if (c) {
						o()[(a + 8) >> 2] = 0;
						var d = c.worker;
						x.returnWorkerToPool(d);
					}
				}
				function Xf(a) {
					!a ||
						(a.threadInfoStruct && Po(a.threadInfoStruct),
						(a.threadInfoStruct = 0),
						a.allocatedOwnStack && a.stackBase && Po(a.stackBase),
						(a.stackBase = 0),
						a.worker && (a.worker.pthread = null));
				}
				function Io(a) {
					ep(a);
				}
				u._exit = Io;
				function Bo(a) {
					if (a instanceof Ds || a == 'unwind') return Vn;
					bt(1, a);
				}
				var x = {
					unusedWorkers: [],
					runningWorkers: [],
					tlsInitFunctions: [],
					initMainThreadBlock: function () {
						for (var a = 4, c = 0; c < a; ++c) x.allocateUnusedWorker();
					},
					initWorker: function () {},
					pthreads: {},
					threadExitHandlers: [],
					setExitStatus: function (a) {
						Vn = a;
					},
					terminateAllThreads: function () {
						for (var a in x.pthreads) {
							var c = x.pthreads[a];
							c && c.worker && x.returnWorkerToPool(c.worker);
						}
						for (var d = 0; d < x.unusedWorkers.length; ++d) {
							var p = x.unusedWorkers[d];
							p.terminate();
						}
						x.unusedWorkers = [];
					},
					returnWorkerToPool: function (a) {
						x.runWithoutMainThreadQueuedCalls(function () {
							delete x.pthreads[a.pthread.threadInfoStruct],
								x.unusedWorkers.push(a),
								x.runningWorkers.splice(x.runningWorkers.indexOf(a), 1),
								Xf(a.pthread),
								(a.pthread = void 0);
						});
					},
					runWithoutMainThreadQueuedCalls: function (a) {
						o()[Xh >> 2] = 0;
						try {
							a();
						} finally {
							o()[Xh >> 2] = 1;
						}
					},
					receiveObjectTransfer: function (a) {},
					threadInit: function () {
						for (var a in x.tlsInitFunctions) x.tlsInitFunctions[a]();
					},
					loadWasmModuleToWorker: function (a, c) {
						(a.onmessage = function (d) {
							var p = d.data,
								y = p.cmd;
							if (
								(a.pthread && (x.currentProxiedOperationCallerThread = a.pthread.threadInfoStruct),
								p.targetThread && p.targetThread != Uo())
							) {
								var v = x.pthreads[p.targetThread];
								v
									? v.worker.postMessage(p, p.transferList)
									: Ne(
											'Internal error! Worker sent a message "' +
												y +
												'" to target pthread ' +
												p.targetThread +
												', but that thread no longer exists!'
									  ),
									(x.currentProxiedOperationCallerThread = void 0);
								return;
							}
							y === 'processQueuedMainThreadWork'
								? Ro()
								: y === 'spawnThread'
								? rh(p)
								: y === 'cleanupThread'
								? Qf(p.thread)
								: y === 'killThread'
								? Xg(p.thread)
								: y === 'cancelThread'
								? ev(p.thread)
								: y === 'loaded'
								? ((a.loaded = !0),
								  c && c(a),
								  a.runPthread && (a.runPthread(), delete a.runPthread))
								: y === 'print'
								? ue('Thread ' + p.threadId + ': ' + p.text)
								: y === 'printErr'
								? Ne('Thread ' + p.threadId + ': ' + p.text)
								: y === 'alert'
								? alert('Thread ' + p.threadId + ': ' + p.text)
								: y === 'detachedExit' || y === 'cancelDone'
								? x.returnWorkerToPool(a)
								: p.target === 'setimmediate'
								? a.postMessage(p)
								: y === 'onAbort'
								? u.onAbort && u.onAbort(p.arg)
								: Ne('worker sent an unknown command ' + y),
								(x.currentProxiedOperationCallerThread = void 0);
						}),
							(a.onerror = function (d) {
								throw (
									(Ne('pthread sent an error! ' + d.filename + ':' + d.lineno + ': ' + d.message),
									d)
								);
							}),
							pe &&
								(a.on('message', function (d) {
									a.onmessage({ data: d });
								}),
								a.on('error', function (d) {
									a.onerror(d);
								}),
								a.on('detachedExit', function () {})),
							a.postMessage({
								cmd: 'load',
								urlOrBlob: u.mainScriptUrlOrBlob,
								wasmMemory: we,
								wasmModule: Ef
							});
					},
					allocateUnusedWorker: function () {
						if (!u.locateFile) {
							x.unusedWorkers.push(new Worker(new URL('duckdb_wasm.worker.js', vf.url)));
							return;
						}
						var a = Df('duckdb_wasm.worker.js');
						x.unusedWorkers.push(new Worker(a));
					},
					getNewWorker: function () {
						return (
							x.unusedWorkers.length == 0 &&
								(x.allocateUnusedWorker(), x.loadWasmModuleToWorker(x.unusedWorkers[0])),
							x.unusedWorkers.pop()
						);
					}
				};
				function tv(a, c) {
					Zh(a, c), di(a);
				}
				u.establishStackSpace = tv;
				function eh(a) {
					if (P) return ce(1, 0, a);
					try {
						Io(a);
					} catch (c) {
						Bo(c);
					}
				}
				function rv(a, c) {
					return ci.get(a)(c);
				}
				u.invokeEntryPoint = rv;
				function nv(a, c, d) {
					x.tlsInitFunctions.push(a);
				}
				function iv(a, c, d, p) {
					At(
						'Assertion failed: ' +
							St(a) +
							', at: ' +
							[c ? St(c) : 'unknown filename', d, p ? St(p) : 'unknown function']
					);
				}
				var Is;
				pe
					? (Is = function () {
							var a = process.hrtime();
							return a[0] * 1e3 + a[1] / 1e6;
					  })
					: P
					? (Is = function () {
							return performance.now() - u.__performance_now_clock_drift;
					  })
					: (Is = function () {
							return performance.now();
					  });
				var sv = !0;
				function ov(a) {
					return (o()[Kh() >> 2] = a), a;
				}
				function th(a, c) {
					var d;
					if (a === 0) d = Date.now();
					else if ((a === 1 || a === 4) && sv) d = Is();
					else return ov(28), -1;
					return (
						(o()[c >> 2] = (d / 1e3) | 0), (o()[(c + 4) >> 2] = ((d % 1e3) * 1e3 * 1e3) | 0), 0
					);
				}
				function av(a, c) {
					return th(a, c);
				}
				function uv(a, c) {
					if (P) return ce(2, 1, a, c);
				}
				function cv(a, c) {
					x.threadExitHandlers.push(function () {
						ci.get(a)(c);
					});
				}
				function lv(a) {
					Jh(a, !Zt, 1), x.threadInit();
				}
				function rh(a) {
					var c = x.getNewWorker();
					if (!c) return 6;
					x.runningWorkers.push(c);
					var d = a.stackBase + a.stackSize,
						p = (x.pthreads[a.pthread_ptr] = {
							worker: c,
							stackBase: a.stackBase,
							stackSize: a.stackSize,
							allocatedOwnStack: a.allocatedOwnStack,
							threadInfoStruct: a.pthread_ptr
						}),
						y = p.threadInfoStruct >> 2;
					Atomics.store(l(), y + (60 >> 2), a.detached),
						Atomics.store(l(), y + (76 >> 2), a.stackSize),
						Atomics.store(l(), y + (72 >> 2), d),
						Atomics.store(l(), y + (100 >> 2), a.stackSize),
						Atomics.store(l(), y + ((100 + 8) >> 2), d),
						Atomics.store(l(), y + ((100 + 12) >> 2), a.detached),
						(c.pthread = p);
					var v = {
						cmd: 'run',
						start_routine: a.startRoutine,
						arg: a.arg,
						threadInfoStruct: a.pthread_ptr,
						stackBase: a.stackBase,
						stackSize: a.stackSize
					};
					return (
						(c.runPthread = function () {
							(v.time = performance.now()), c.postMessage(v, a.transferList);
						}),
						c.loaded && (c.runPthread(), delete c.runPthread),
						0
					);
				}
				function dv(a, c, d, p) {
					if (typeof SharedArrayBuffer == 'undefined')
						return (
							Ne(
								'Current environment does not support SharedArrayBuffer, pthreads are not available!'
							),
							6
						);
					var y = [],
						v = 0;
					if (P && (y.length === 0 || v)) return Hh(687865856, a, c, d, p);
					if (v) return v;
					var T = 0,
						B = 0,
						L = 0;
					c && c != -1
						? ((T = o()[c >> 2]),
						  (T += 2097152),
						  (B = o()[(c + 8) >> 2]),
						  (L = o()[(c + 12) >> 2] !== 0))
						: (T = 2097152);
					var ie = B == 0;
					ie ? (B = Qh(16, T)) : ((B -= T), ui(B > 0));
					var se = {
						stackBase: B,
						stackSize: T,
						allocatedOwnStack: ie,
						detached: L,
						startRoutine: d,
						pthread_ptr: a,
						arg: p,
						transferList: y
					};
					return P ? ((se.cmd = 'spawnThread'), postMessage(se, y), 0) : rh(se);
				}
				function fv() {
					postMessage({ cmd: 'detachedExit' });
				}
				function hv(a) {
					for (; x.threadExitHandlers.length > 0; ) x.threadExitHandlers.pop()();
				}
				function nh(a, c, d) {
					if (a <= 0 || a > t().length || a & !0) return -28;
					if (ht) {
						if (Atomics.load(o(), a >> 2) != c) return -6;
						for (var y = performance.now(), v = y + d, T = Atomics.exchange(o(), hi >> 2, a); ; ) {
							if (((y = performance.now()), y > v))
								return (T = Atomics.exchange(o(), hi >> 2, 0)), -73;
							if (((T = Atomics.exchange(o(), hi >> 2, 0)), T == 0)) break;
							if ((Ro(), Atomics.load(o(), a >> 2) != c)) return -6;
							T = Atomics.exchange(o(), hi >> 2, a);
						}
						return 0;
					} else {
						var p = Atomics.wait(o(), a >> 2, c, d);
						if (p === 'timed-out') return -73;
						if (p === 'not-equal') return -6;
						if (p === 'ok') return 0;
						throw 'Atomics.wait returned an unexpected value ' + p;
					}
				}
				function ih() {
					pe ||
						Zt ||
						gs(
							'Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread'
						);
				}
				function pv(a, c, d) {
					if (!a) return Ne('pthread_join attempted on a null thread pointer!'), 71;
					if (P && Uo() == a) return Ne('PThread ' + a + ' is attempting to join to itself!'), 16;
					if (!P && zh() == a)
						return Ne('Main thread ' + a + ' is attempting to join to itself!'), 16;
					var p = o()[(a + 8) >> 2];
					if (p !== a)
						return (
							Ne(
								'pthread_join attempted on thread ' +
									a +
									', which does not point to a valid thread, or does not exist anymore!'
							),
							71
						);
					var y = Atomics.load(l(), (a + 60) >> 2);
					if (y) return Ne('Attempted to join thread ' + a + ', which was already detached!'), 28;
					for (d && ih(); ; ) {
						var v = Atomics.load(l(), (a + 0) >> 2);
						if (v == 1) {
							if (c) {
								var T = Atomics.load(l(), (a + 88) >> 2);
								o()[c >> 2] = T;
							}
							return (
								Atomics.store(l(), (a + 60) >> 2, 1),
								P ? postMessage({ cmd: 'cleanupThread', thread: a }) : Qf(a),
								0
							);
						}
						if (!d) return 10;
						$h(), P || Ro(), nh(a + 0, v, P ? 100 : 1);
					}
				}
				function _v(a, c) {
					return pv(a, c, !0);
				}
				var Xe = {
					mappings: {},
					buffers: [null, [], []],
					printChar: function (a, c) {
						var d = Xe.buffers[a];
						c === 0 || c === 10 ? ((a === 1 ? ue : Ne)(Uf(d, 0)), (d.length = 0)) : d.push(c);
					},
					varargs: void 0,
					get: function () {
						Xe.varargs += 4;
						var a = o()[(Xe.varargs - 4) >> 2];
						return a;
					},
					getStr: function (a) {
						var c = St(a);
						return c;
					},
					get64: function (a, c) {
						return a;
					}
				};
				function sh(a, c, d, p, y) {
					if (P) return ce(3, 1, a, c, d, p, y);
				}
				function oh(a, c) {
					return P ? ce(4, 1, a, c) : ((a = Xe.getStr(a)), Xe.doAccess(a, c));
				}
				function yv() {
					Ne('missing function: $SOCKFS'), At(-1);
				}
				function ah() {
					Ne('missing function: $FS'), At(-1);
				}
				function li(a) {
					var c = yv.getSocket(a);
					if (!c) throw new ah.ErrnoError(8);
					return c;
				}
				function zu(a) {
					return (
						(a & 255) + '.' + ((a >> 8) & 255) + '.' + ((a >> 16) & 255) + '.' + ((a >> 24) & 255)
					);
				}
				function uh(a) {
					var c = '',
						d = 0,
						p = 0,
						y = 0,
						v = 0,
						T = 0,
						B = 0,
						L = [
							a[0] & 65535,
							a[0] >> 16,
							a[1] & 65535,
							a[1] >> 16,
							a[2] & 65535,
							a[2] >> 16,
							a[3] & 65535,
							a[3] >> 16
						],
						ie = !0,
						se = '';
					for (B = 0; B < 5; B++)
						if (L[B] !== 0) {
							ie = !1;
							break;
						}
					if (ie) {
						if (((se = zu(L[6] | (L[7] << 16))), L[5] === -1)) return (c = '::ffff:'), (c += se), c;
						if (L[5] === 0)
							return (
								(c = '::'),
								se === '0.0.0.0' && (se = ''),
								se === '0.0.0.1' && (se = '1'),
								(c += se),
								c
							);
					}
					for (d = 0; d < 8; d++)
						L[d] === 0 && (d - y > 1 && (T = 0), (y = d), T++), T > p && ((p = T), (v = d - p + 1));
					for (d = 0; d < 8; d++) {
						if (p > 1 && L[d] === 0 && d >= v && d < v + p) {
							d === v && ((c += ':'), v === 0 && (c += ':'));
							continue;
						}
						(c += Number(Qu(L[d] & 65535)).toString(16)), (c += d < 7 ? ':' : '');
					}
					return c;
				}
				function ch(a, c) {
					var d = i()[a >> 1],
						p = Qu(s()[(a + 2) >> 1]),
						y;
					switch (d) {
						case 2:
							if (c !== 16) return { errno: 28 };
							(y = o()[(a + 4) >> 2]), (y = zu(y));
							break;
						case 10:
							if (c !== 28) return { errno: 28 };
							(y = [o()[(a + 8) >> 2], o()[(a + 12) >> 2], o()[(a + 16) >> 2], o()[(a + 20) >> 2]]),
								(y = uh(y));
							break;
						default:
							return { errno: 5 };
					}
					return { family: d, addr: y, port: p };
				}
				function lh(a, c, d) {
					if (d && a === 0) return null;
					var p = ch(a, c);
					if (p.errno) throw new ah.ErrnoError(p.errno);
					return (p.addr = Ot.lookup_addr(p.addr) || p.addr), p;
				}
				function dh(a, c, d) {
					if (P) return ce(5, 1, a, c, d);
					var p = li(a),
						y = lh(c, d);
					return p.sock_ops.bind(p, y.addr, y.port), 0;
				}
				function fh(a, c, d) {
					if (P) return ce(6, 1, a, c, d);
					var p = li(a),
						y = lh(c, d);
					return p.sock_ops.connect(p, y.addr, y.port), 0;
				}
				function hh(a, c, d) {
					return P ? ce(7, 1, a, c, d) : ((Xe.varargs = d), 0);
				}
				function ph(a, c) {
					if (P) return ce(8, 1, a, c);
				}
				function _h(a, c, d, p) {
					if (P) return ce(9, 1, a, c, d, p);
				}
				function yh(a, c, d) {
					if (P) return ce(10, 1, a, c, d);
				}
				function So(a) {
					for (var c = a.split('.'), d = 0; d < 4; d++) {
						var p = Number(c[d]);
						if (isNaN(p)) return null;
						c[d] = p;
					}
					return (c[0] | (c[1] << 8) | (c[2] << 16) | (c[3] << 24)) >>> 0;
				}
				function Ao(a) {
					return parseInt(a);
				}
				function Hu(a) {
					var c,
						d,
						p,
						y,
						v =
							/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
						T = [];
					if (!v.test(a)) return null;
					if (a === '::') return [0, 0, 0, 0, 0, 0, 0, 0];
					for (
						a.startsWith('::') ? (a = a.replace('::', 'Z:')) : (a = a.replace('::', ':Z:')),
							a.indexOf('.') > 0
								? ((a = a.replace(new RegExp('[.]', 'g'), ':')),
								  (c = a.split(':')),
								  (c[c.length - 4] = Ao(c[c.length - 4]) + Ao(c[c.length - 3]) * 256),
								  (c[c.length - 3] = Ao(c[c.length - 2]) + Ao(c[c.length - 1]) * 256),
								  (c = c.slice(0, c.length - 2)))
								: (c = a.split(':')),
							p = 0,
							y = 0,
							d = 0;
						d < c.length;
						d++
					)
						if (typeof c[d] == 'string')
							if (c[d] === 'Z') {
								for (y = 0; y < 8 - c.length + 1; y++) T[d + y] = 0;
								p = y - 1;
							} else T[d + p] = ko(parseInt(c[d], 16));
						else T[d + p] = c[d];
					return [
						(T[1] << 16) | T[0],
						(T[3] << 16) | T[2],
						(T[5] << 16) | T[4],
						(T[7] << 16) | T[6]
					];
				}
				function mh(a, c) {
					n().fill(0, a, a + c);
				}
				function Yu(a, c, d, p, y) {
					switch (c) {
						case 2:
							(d = So(d)),
								mh(a, 16),
								y && (o()[y >> 2] = 16),
								(i()[a >> 1] = c),
								(o()[(a + 4) >> 2] = d),
								(i()[(a + 2) >> 1] = ko(p));
							break;
						case 10:
							(d = Hu(d)),
								mh(a, 28),
								y && (o()[y >> 2] = 28),
								(o()[a >> 2] = c),
								(o()[(a + 8) >> 2] = d[0]),
								(o()[(a + 12) >> 2] = d[1]),
								(o()[(a + 16) >> 2] = d[2]),
								(o()[(a + 20) >> 2] = d[3]),
								(i()[(a + 2) >> 1] = ko(p));
							break;
						default:
							return 5;
					}
					return 0;
				}
				var Ot = {
					address_map: { id: 1, addrs: {}, names: {} },
					lookup_name: function (a) {
						var c = So(a);
						if (c !== null || ((c = Hu(a)), c !== null)) return a;
						var d;
						if (Ot.address_map.addrs[a]) d = Ot.address_map.addrs[a];
						else {
							var p = Ot.address_map.id++;
							ui(p < 65535, 'exceeded max address mappings of 65535'),
								(d = '172.29.' + (p & 255) + '.' + (p & 65280)),
								(Ot.address_map.names[d] = a),
								(Ot.address_map.addrs[a] = d);
						}
						return d;
					},
					lookup_addr: function (a) {
						return Ot.address_map.names[a] ? Ot.address_map.names[a] : null;
					}
				};
				function bh(a, c, d) {
					if (P) return ce(11, 1, a, c, d);
					var p = li(a);
					if (!p.daddr) return -53;
					var y = Yu(c, p.family, Ot.lookup_name(p.daddr), p.dport, d);
					return 0;
				}
				function mv() {
					return 42;
				}
				function gh(a, c, d, p, y) {
					if (P) return ce(12, 1, a, c, d, p, y);
					var v = li(a);
					return c === 1 && d === 4
						? ((o()[p >> 2] = v.error), (o()[y >> 2] = 4), (v.error = null), 0)
						: -50;
				}
				function vh(a, c, d) {
					return P ? ce(13, 1, a, c, d) : ((Xe.varargs = d), 0);
				}
				function bv(a, c, d) {
					return 0;
				}
				function Th(a, c) {
					return P ? ce(14, 1, a, c) : ((a = Xe.getStr(a)), Xe.doMkdir(a, c));
				}
				function wh(a, c, d) {
					if (P) return ce(15, 1, a, c, d);
					Xe.varargs = d;
				}
				function Ih(a, c, d, p, y, v) {
					if (P) return ce(16, 1, a, c, d, p, y, v);
					var T = li(a),
						B = T.sock_ops.recvmsg(T, d);
					if (!B) return 0;
					if (y) var L = Yu(y, T.family, Ot.lookup_name(B.addr), B.port, v);
					return n().set(B.buffer, c), B.buffer.byteLength;
				}
				function Bh(a, c) {
					if (P) return ce(17, 1, a, c);
				}
				function Sh(a) {
					if (P) return ce(18, 1, a);
				}
				function Ah(a, c, d, p, y, v) {
					if (P) return ce(19, 1, a, c, d, p, y, v);
				}
				function gv(a) {
					return -50;
				}
				function vv(a, c) {
					return li(a), -52;
				}
				function Dh(a, c, d) {
					if (P) return ce(20, 1, a, c, d);
				}
				function Oh(a, c) {
					if (P) return ce(21, 1, a, c);
				}
				function Fh(a) {
					if (P) return ce(22, 1, a);
				}
				function Tv(a, c) {
					At(
						"To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
					);
				}
				function wv(a, c) {
					At(
						"To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
					);
				}
				function Iv(a, c) {
					if (a == c) postMessage({ cmd: 'processQueuedMainThreadWork' });
					else if (P) postMessage({ targetThread: a, cmd: 'processThreadQueue' });
					else {
						var d = x.pthreads[a],
							p = d && d.worker;
						if (!p) return;
						p.postMessage({ cmd: 'processThreadQueue' });
					}
					return 1;
				}
				function Bv() {
					At('');
				}
				function Sv(a, c) {
					return globalThis.DUCKDB_RUNTIME.createDirectory(u, a, c);
				}
				function Av(a, c) {
					return globalThis.DUCKDB_RUNTIME.checkDirectory(u, a, c);
				}
				function Dv(a, c) {
					return globalThis.DUCKDB_RUNTIME.listDirectoryEntries(u, a, c);
				}
				function Ov(a, c) {
					return globalThis.DUCKDB_RUNTIME.removeDirectory(u, a, c);
				}
				function Fv(a) {
					return globalThis.DUCKDB_RUNTIME.closeFile(u, a);
				}
				function Ev(a, c) {
					return globalThis.DUCKDB_RUNTIME.checkFile(u, a, c);
				}
				function Mv(a) {
					return globalThis.DUCKDB_RUNTIME.getLastFileModificationTime(u, a);
				}
				function Rv(a, c, d, p) {
					return globalThis.DUCKDB_RUNTIME.moveFile(u, a, c, d, p);
				}
				function Uv(a) {
					return globalThis.DUCKDB_RUNTIME.openFile(u, a);
				}
				function Vv(a, c, d, p) {
					return globalThis.DUCKDB_RUNTIME.readFile(u, a, c, d, p);
				}
				function kv(a, c) {
					return globalThis.DUCKDB_RUNTIME.truncateFile(u, a, c);
				}
				function Pv(a, c, d, p) {
					return globalThis.DUCKDB_RUNTIME.writeFile(u, a, c, d, p);
				}
				function Lv(a, c) {
					return globalThis.DUCKDB_RUNTIME.glob(u, a, c);
				}
				function Nv(a) {
					return globalThis.DUCKDB_RUNTIME.testPlatformFeature(u, a);
				}
				function xv(a, c) {}
				function Cv() {
					return 2147483648;
				}
				function jv(a, c, d) {
					n().copyWithin(a, c, c + d);
				}
				function qv() {
					return pe ? Bg().cpus().length : navigator.hardwareConcurrency;
				}
				function ce(a, c) {
					for (
						var d = arguments.length - 2, p = Ss(), y = d, v = fi(y * 8), T = v >> 3, B = 0;
						B < d;
						B++
					) {
						var L = arguments[2 + B];
						h()[T + B] = L;
					}
					var ie = Yh(a, y, v, c);
					return di(p), ie;
				}
				var Gu = [];
				function Wv(a, c, d) {
					Gu.length = c;
					for (var p = d >> 3, y = 0; y < c; y++) Gu[y] = h()[p + y];
					var v = a < 0,
						T = v ? Qg[-a - 1] : bT[a];
					return T.apply(null, Gu);
				}
				function zv(a) {
					try {
						return we.grow((a - pt.byteLength + 65535) >>> 16), Mr(we.buffer), 1;
					} catch (c) {}
				}
				function Hv(a) {
					var c = n().length;
					if (((a = a >>> 0), a <= c)) return !1;
					var d = 2147483648;
					if (a > d) return !1;
					for (var p = 1; p <= 4; p *= 2) {
						var y = c * (1 + 0.2 / p);
						y = Math.min(y, a + 100663296);
						var v = Math.min(d, Vg(Math.max(a, y), 65536)),
							T = zv(v);
						if (T) return !0;
					}
					return !1;
				}
				var te = {
					inEventHandler: 0,
					removeAllEventListeners: function () {
						for (var a = te.eventHandlers.length - 1; a >= 0; --a) te._removeHandler(a);
						(te.eventHandlers = []), (te.deferredCalls = []);
					},
					registerRemoveEventListeners: function () {
						te.removeEventListenersRegistered ||
							(Lg.push(te.removeAllEventListeners), (te.removeEventListenersRegistered = !0));
					},
					deferredCalls: [],
					deferCall: function (a, c, d) {
						function p(T, B) {
							if (T.length != B.length) return !1;
							for (var L in T) if (T[L] != B[L]) return !1;
							return !0;
						}
						for (var y in te.deferredCalls) {
							var v = te.deferredCalls[y];
							if (v.targetFunction == a && p(v.argsList, d)) return;
						}
						te.deferredCalls.push({ targetFunction: a, precedence: c, argsList: d }),
							te.deferredCalls.sort(function (T, B) {
								return T.precedence < B.precedence;
							});
					},
					removeDeferredCalls: function (a) {
						for (var c = 0; c < te.deferredCalls.length; ++c)
							te.deferredCalls[c].targetFunction == a && (te.deferredCalls.splice(c, 1), --c);
					},
					canPerformEventHandlerRequests: function () {
						return te.inEventHandler && te.currentEventHandler.allowsDeferredCalls;
					},
					runDeferredCalls: function () {
						if (!!te.canPerformEventHandlerRequests())
							for (var a = 0; a < te.deferredCalls.length; ++a) {
								var c = te.deferredCalls[a];
								te.deferredCalls.splice(a, 1), --a, c.targetFunction.apply(null, c.argsList);
							}
					},
					eventHandlers: [],
					removeAllHandlersOnTarget: function (a, c) {
						for (var d = 0; d < te.eventHandlers.length; ++d)
							te.eventHandlers[d].target == a &&
								(!c || c == te.eventHandlers[d].eventTypeString) &&
								te._removeHandler(d--);
					},
					_removeHandler: function (a) {
						var c = te.eventHandlers[a];
						c.target.removeEventListener(c.eventTypeString, c.eventListenerFunc, c.useCapture),
							te.eventHandlers.splice(a, 1);
					},
					registerOrRemoveHandler: function (a) {
						var c = function (y) {
							++te.inEventHandler,
								(te.currentEventHandler = a),
								te.runDeferredCalls(),
								a.handlerFunc(y),
								te.runDeferredCalls(),
								--te.inEventHandler;
						};
						if (a.callbackfunc)
							(a.eventListenerFunc = c),
								a.target.addEventListener(a.eventTypeString, c, a.useCapture),
								te.eventHandlers.push(a),
								te.registerRemoveEventListeners();
						else
							for (var d = 0; d < te.eventHandlers.length; ++d)
								te.eventHandlers[d].target == a.target &&
									te.eventHandlers[d].eventTypeString == a.eventTypeString &&
									te._removeHandler(d--);
					},
					queueEventHandlerOnThread_iiii: function (a, c, d, p, y) {
						var v = Ss(),
							T = fi(12);
						(o()[T >> 2] = d),
							(o()[(T + 4) >> 2] = p),
							(o()[(T + 8) >> 2] = y),
							Zu(0, a, 637534208, c, p, T),
							di(v);
					},
					getTargetThreadForEventCallback: function (a) {
						switch (a) {
							case 1:
								return 0;
							case 2:
								return x.currentProxiedOperationCallerThread;
							default:
								return a;
						}
					},
					getNodeNameForTarget: function (a) {
						return a
							? a == window
								? '#window'
								: a == screen
								? '#screen'
								: a && a.nodeName
								? a.nodeName
								: ''
							: '';
					},
					fullscreenEnabled: function () {
						return document.fullscreenEnabled || document.webkitFullscreenEnabled;
					}
				};
				function Yv(a) {
					var c = kf(a) + 1,
						d = As(c);
					return To(a, d, c), d;
				}
				function Gv(a, c, d, p) {
					var y = Ss(),
						v = fi(12),
						T = 0;
					c && (T = Yv(c)),
						(o()[v >> 2] = T),
						(o()[(v + 4) >> 2] = d),
						(o()[(v + 8) >> 2] = p),
						Zu(0, a, 657457152, 0, T, v),
						di(y);
				}
				function $v(a, c, d, p) {
					(c = c ? St(c) : ''), Gv(a, c, d, p);
				}
				function Jv(a) {
					return a > 2 ? St(a) : a;
				}
				var Kv = [
					0,
					typeof document != 'undefined' ? document : 0,
					typeof window != 'undefined' ? window : 0
				];
				function Zv(a) {
					a = Jv(a);
					var c = Kv[a] || (typeof document != 'undefined' ? document.querySelector(a) : void 0);
					return c;
				}
				function $u(a) {
					return Zv(a);
				}
				function Eh(a, c, d) {
					var p = $u(a);
					if (!p) return -4;
					if (
						(p.canvasSharedPtr &&
							((o()[p.canvasSharedPtr >> 2] = c), (o()[(p.canvasSharedPtr + 4) >> 2] = d)),
						p.offscreenCanvas || !p.controlTransferredOffscreen)
					) {
						p.offscreenCanvas && (p = p.offscreenCanvas);
						var y = !1;
						if (p.GLctxObject && p.GLctxObject.GLctx) {
							var v = p.GLctxObject.GLctx.getParameter(2978);
							y = v[0] === 0 && v[1] === 0 && v[2] === p.width && v[3] === p.height;
						}
						(p.width = c), (p.height = d), y && p.GLctxObject.GLctx.viewport(0, 0, c, d);
					} else if (p.canvasSharedPtr) {
						var T = o()[(p.canvasSharedPtr + 8) >> 2];
						return $v(T, a, c, d), 1;
					} else return -4;
					return 0;
				}
				function Mh(a, c, d) {
					return P ? ce(23, 1, a, c, d) : Eh(a, c, d);
				}
				function Qv(a, c, d) {
					var p = $u(a);
					return p ? Eh(a, c, d) : Mh(a, c, d);
				}
				function Xv(a) {}
				function eT() {
					if (!Ts())
						try {
							P ? Gh(Vn) : Io(Vn);
						} catch (a) {
							Bo(a);
						}
				}
				function tT(a, c) {
					if (!vo) {
						if (c) {
							a();
							return;
						}
						try {
							a(), P && eT();
						} catch (d) {
							Bo(d);
						}
					}
				}
				function rT() {
					qu += 1;
				}
				function nT() {
					qu -= 1;
				}
				function iT(a, c, d) {
					return (
						rT(),
						setTimeout(function () {
							nT(),
								tT(function () {
									ci.get(a)(d);
								});
						}, c)
					);
				}
				function sT() {
					throw 'unwind';
				}
				function oT(a) {
					var c = a.getExtension('ANGLE_instanced_arrays');
					if (c)
						return (
							(a.vertexAttribDivisor = function (d, p) {
								c.vertexAttribDivisorANGLE(d, p);
							}),
							(a.drawArraysInstanced = function (d, p, y, v) {
								c.drawArraysInstancedANGLE(d, p, y, v);
							}),
							(a.drawElementsInstanced = function (d, p, y, v, T) {
								c.drawElementsInstancedANGLE(d, p, y, v, T);
							}),
							1
						);
				}
				function aT(a) {
					var c = a.getExtension('OES_vertex_array_object');
					if (c)
						return (
							(a.createVertexArray = function () {
								return c.createVertexArrayOES();
							}),
							(a.deleteVertexArray = function (d) {
								c.deleteVertexArrayOES(d);
							}),
							(a.bindVertexArray = function (d) {
								c.bindVertexArrayOES(d);
							}),
							(a.isVertexArray = function (d) {
								return c.isVertexArrayOES(d);
							}),
							1
						);
				}
				function uT(a) {
					var c = a.getExtension('WEBGL_draw_buffers');
					if (c)
						return (
							(a.drawBuffers = function (d, p) {
								c.drawBuffersWEBGL(d, p);
							}),
							1
						);
				}
				function cT(a) {
					return !!(a.multiDrawWebgl = a.getExtension('WEBGL_multi_draw'));
				}
				var Ee = {
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
						recordError: function (c) {
							Ee.lastError || (Ee.lastError = c);
						},
						getNewId: function (a) {
							for (var c = Ee.counter++, d = a.length; d < c; d++) a[d] = null;
							return c;
						},
						getSource: function (a, c, d, p) {
							for (var y = '', v = 0; v < c; ++v) {
								var T = p ? o()[(p + v * 4) >> 2] : -1;
								y += St(o()[(d + v * 4) >> 2], T < 0 ? void 0 : T);
							}
							return y;
						},
						createContext: function (a, c) {
							a.getContextSafariWebGL2Fixed ||
								((a.getContextSafariWebGL2Fixed = a.getContext),
								(a.getContext = function (y, v) {
									var T = a.getContextSafariWebGL2Fixed(y, v);
									return (y == 'webgl') == T instanceof WebGLRenderingContext ? T : null;
								}));
							var d = a.getContext('webgl', c);
							if (!d) return 0;
							var p = Ee.registerContext(d, c);
							return p;
						},
						registerContext: function (a, c) {
							var d = As(8);
							o()[(d + 4) >> 2] = Uo();
							var p = { handle: d, attributes: c, version: c.majorVersion, GLctx: a };
							return (
								a.canvas && (a.canvas.GLctxObject = p),
								(Ee.contexts[d] = p),
								(typeof c.enableExtensionsByDefault == 'undefined' ||
									c.enableExtensionsByDefault) &&
									Ee.initExtensions(p),
								d
							);
						},
						makeContextCurrent: function (a) {
							return (
								(Ee.currentContext = Ee.contexts[a]),
								(u.ctx = Wh = Ee.currentContext && Ee.currentContext.GLctx),
								!(a && !Wh)
							);
						},
						getContext: function (a) {
							return Ee.contexts[a];
						},
						deleteContext: function (a) {
							Ee.currentContext === Ee.contexts[a] && (Ee.currentContext = null),
								typeof te == 'object' && te.removeAllHandlersOnTarget(Ee.contexts[a].GLctx.canvas),
								Ee.contexts[a] &&
									Ee.contexts[a].GLctx.canvas &&
									(Ee.contexts[a].GLctx.canvas.GLctxObject = void 0),
								Po(Ee.contexts[a].handle),
								(Ee.contexts[a] = null);
						},
						initExtensions: function (a) {
							if ((a || (a = Ee.currentContext), !a.initExtensionsDone)) {
								a.initExtensionsDone = !0;
								var c = a.GLctx;
								oT(c),
									aT(c),
									uT(c),
									(c.disjointTimerQueryExt = c.getExtension('EXT_disjoint_timer_query')),
									cT(c);
								var d = c.getSupportedExtensions() || [];
								d.forEach(function (p) {
									!p.includes('lose_context') && !p.includes('debug') && c.getExtension(p);
								});
							}
						}
					},
					lT = ['default', 'low-power', 'high-performance'];
				function dT(a, c) {
					var d = c >> 2,
						p = o()[d + (24 >> 2)],
						y = {
							alpha: !!o()[d + (0 >> 2)],
							depth: !!o()[d + (4 >> 2)],
							stencil: !!o()[d + (8 >> 2)],
							antialias: !!o()[d + (12 >> 2)],
							premultipliedAlpha: !!o()[d + (16 >> 2)],
							preserveDrawingBuffer: !!o()[d + (20 >> 2)],
							powerPreference: lT[p],
							failIfMajorPerformanceCaveat: !!o()[d + (28 >> 2)],
							majorVersion: o()[d + (32 >> 2)],
							minorVersion: o()[d + (36 >> 2)],
							enableExtensionsByDefault: o()[d + (40 >> 2)],
							explicitSwapControl: o()[d + (44 >> 2)],
							proxyContextToMainThread: o()[d + (48 >> 2)],
							renderViaOffscreenBackBuffer: o()[d + (52 >> 2)]
						},
						v = $u(a);
					if (!v || y.explicitSwapControl) return 0;
					var T = Ee.createContext(v, y);
					return T;
				}
				function fT(a, c) {
					return dT(a, c);
				}
				var Ju = {};
				function hT() {
					return Te || './this.program';
				}
				function Bs() {
					if (!Bs.strings) {
						var a =
								(
									(typeof navigator == 'object' && navigator.languages && navigator.languages[0]) ||
									'C'
								).replace('-', '_') + '.UTF-8',
							c = {
								USER: 'web_user',
								LOGNAME: 'web_user',
								PATH: '/',
								PWD: '/',
								HOME: '/home/web_user',
								LANG: a,
								_: hT()
							};
						for (var d in Ju) Ju[d] === void 0 ? delete c[d] : (c[d] = Ju[d]);
						var p = [];
						for (var d in c) p.push(d + '=' + c[d]);
						Bs.strings = p;
					}
					return Bs.strings;
				}
				function Rh(a, c) {
					if (P) return ce(24, 1, a, c);
					var d = 0;
					return (
						Bs().forEach(function (p, y) {
							var v = c + d;
							(o()[(a + y * 4) >> 2] = v), Ug(p, v), (d += p.length + 1);
						}),
						0
					);
				}
				function Uh(a, c) {
					if (P) return ce(25, 1, a, c);
					var d = Bs();
					o()[a >> 2] = d.length;
					var p = 0;
					return (
						d.forEach(function (y) {
							p += y.length + 1;
						}),
						(o()[c >> 2] = p),
						0
					);
				}
				function Vh(a) {
					return P ? ce(26, 1, a) : 0;
				}
				function kh(a, c) {
					if (P) return ce(27, 1, a, c);
					var d = a == 1 || a == 2 ? 2 : At();
					return (t()[c >> 0] = d), 0;
				}
				function Ph(a, c, d, p, y, v) {
					if (P) return ce(28, 1, a, c, d, p, y, v);
					var T = Xe.getStreamFromFD(a),
						B = Xe.doReadv(T, c, d, p);
					return (o()[v >> 2] = B), 0;
				}
				function Lh(a, c, d, p, y, v) {
					if (P) return ce(29, 1, a, c, d, p, y, v);
					var T = Xe.getStreamFromFD(a),
						B = Xe.doWritev(T, c, d, p);
					return (o()[v >> 2] = B), 0;
				}
				function Nh(a, c, d, p) {
					if (P) return ce(30, 1, a, c, d, p);
					var y = Xe.getStreamFromFD(a),
						v = Xe.doReadv(y, c, d);
					return (o()[p >> 2] = v), 0;
				}
				function xh(a, c, d, p, y) {
					if (P) return ce(31, 1, a, c, d, p, y);
				}
				function Ch(a) {
					if (P) return ce(32, 1, a);
					var c = Xe.getStreamFromFD(a);
					return c.stream_ops && c.stream_ops.fsync ? -c.stream_ops.fsync(c) : 0;
				}
				function jh(a, c, d, p) {
					if (P) return ce(33, 1, a, c, d, p);
					for (var y = 0, v = 0; v < d; v++) {
						for (var T = o()[(c + v * 8) >> 2], B = o()[(c + (v * 8 + 4)) >> 2], L = 0; L < B; L++)
							Xe.printChar(a, n()[T + L]);
						y += B;
					}
					return (o()[p >> 2] = y), 0;
				}
				function qh(a, c, d, p) {
					if (P) return ce(34, 1, a, c, d, p);
					var y = 0,
						v = 0,
						T = 0,
						B = 0,
						L = 0,
						ie = 0,
						se;
					function Ft(Ie, Et, xe, Qt, ur, Os) {
						var A, C, he, _e;
						return (
							(C = Ie === 10 ? 28 : 16),
							(ur = Ie === 10 ? uh(ur) : zu(ur)),
							(A = As(C)),
							(_e = Yu(A, Ie, ur, Os)),
							ui(!_e),
							(he = As(32)),
							(o()[(he + 4) >> 2] = Ie),
							(o()[(he + 8) >> 2] = Et),
							(o()[(he + 12) >> 2] = xe),
							(o()[(he + 24) >> 2] = Qt),
							(o()[(he + 20) >> 2] = A),
							Ie === 10 ? (o()[(he + 16) >> 2] = 28) : (o()[(he + 16) >> 2] = 16),
							(o()[(he + 28) >> 2] = 0),
							he
						);
					}
					if (
						(d &&
							((T = o()[d >> 2]),
							(B = o()[(d + 4) >> 2]),
							(L = o()[(d + 8) >> 2]),
							(ie = o()[(d + 12) >> 2])),
						L && !ie && (ie = L === 2 ? 17 : 6),
						!L && ie && (L = ie === 17 ? 2 : 1),
						ie === 0 && (ie = 6),
						L === 0 && (L = 1),
						!a && !c)
					)
						return -2;
					if (T & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32) || (d !== 0 && o()[d >> 2] & 2 && !a))
						return -1;
					if (T & 32) return -2;
					if (L !== 0 && L !== 1 && L !== 2) return -7;
					if (B !== 0 && B !== 2 && B !== 10) return -6;
					if (c && ((c = St(c)), (v = parseInt(c, 10)), isNaN(v))) return T & 1024 ? -2 : -8;
					if (!a)
						return (
							B === 0 && (B = 2),
							(T & 1) == 0 && (B === 2 ? (y = Vo(2130706433)) : (y = [0, 0, 0, 1])),
							(se = Ft(B, L, ie, null, y, v)),
							(o()[p >> 2] = se),
							0
						);
					if (((a = St(a)), (y = So(a)), y !== null))
						if (B === 0 || B === 2) B = 2;
						else if (B === 10 && T & 8) (y = [0, 0, Vo(65535), y]), (B = 10);
						else return -2;
					else if (((y = Hu(a)), y !== null))
						if (B === 0 || B === 10) B = 10;
						else return -2;
					return y != null
						? ((se = Ft(B, L, ie, a, y, v)), (o()[p >> 2] = se), 0)
						: T & 4
						? -2
						: ((a = Ot.lookup_name(a)),
						  (y = So(a)),
						  B === 0 ? (B = 2) : B === 10 && (y = [0, 0, Vo(65535), y]),
						  (se = Ft(B, L, ie, null, y, v)),
						  (o()[p >> 2] = se),
						  0);
				}
				function pT() {
					if (typeof crypto == 'object' && typeof crypto.getRandomValues == 'function') {
						var a = new Uint8Array(1);
						return function () {
							return crypto.getRandomValues(a), a[0];
						};
					} else if (pe)
						try {
							var c = yw('crypto');
							return function () {
								return c.randomBytes(1)[0];
							};
						} catch (d) {}
					return function () {
						At('randomDevice');
					};
				}
				function Do(a, c) {
					Do.randomDevice || (Do.randomDevice = pT());
					for (var d = 0; d < c; d++) t()[(a + d) >> 0] = Do.randomDevice();
					return 0;
				}
				function _T(a, c, d, p, y, v, T) {
					var B = ch(a, c);
					if (B.errno) return -6;
					var L = B.port,
						ie = B.addr,
						se = !1;
					if (d && p) {
						var Ft;
						if (T & 1 || !(Ft = Ot.lookup_addr(ie))) {
							if (T & 8) return -2;
						} else ie = Ft;
						var Ie = To(ie, d, p);
						Ie + 1 >= p && (se = !0);
					}
					if (y && v) {
						L = '' + L;
						var Ie = To(L, y, v);
						Ie + 1 >= v && (se = !0);
					}
					return se ? -12 : 0;
				}
				function Oo(a) {
					return a % 4 == 0 && (a % 100 != 0 || a % 400 == 0);
				}
				function Ku(a, c) {
					for (var d = 0, p = 0; p <= c; d += a[p++]);
					return d;
				}
				var Fo = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
					Eo = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
				function Mo(a, c) {
					for (var d = new Date(a.getTime()); c > 0; ) {
						var p = Oo(d.getFullYear()),
							y = d.getMonth(),
							v = (p ? Fo : Eo)[y];
						if (c > v - d.getDate())
							(c -= v - d.getDate() + 1),
								d.setDate(1),
								y < 11 ? d.setMonth(y + 1) : (d.setMonth(0), d.setFullYear(d.getFullYear() + 1));
						else return d.setDate(d.getDate() + c), d;
					}
					return d;
				}
				function yT(a, c, d, p) {
					var y = o()[(p + 40) >> 2],
						v = {
							tm_sec: o()[p >> 2],
							tm_min: o()[(p + 4) >> 2],
							tm_hour: o()[(p + 8) >> 2],
							tm_mday: o()[(p + 12) >> 2],
							tm_mon: o()[(p + 16) >> 2],
							tm_year: o()[(p + 20) >> 2],
							tm_wday: o()[(p + 24) >> 2],
							tm_yday: o()[(p + 28) >> 2],
							tm_isdst: o()[(p + 32) >> 2],
							tm_gmtoff: o()[(p + 36) >> 2],
							tm_zone: y ? St(y) : ''
						},
						T = St(d),
						B = {
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
					for (var L in B) T = T.replace(new RegExp(L, 'g'), B[L]);
					var ie = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
						se = [
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
					function Ft(A, C, he) {
						for (var _e = typeof A == 'number' ? A.toString() : A || ''; _e.length < C; )
							_e = he[0] + _e;
						return _e;
					}
					function Ie(A, C) {
						return Ft(A, C, '0');
					}
					function Et(A, C) {
						function he(cr) {
							return cr < 0 ? -1 : cr > 0 ? 1 : 0;
						}
						var _e;
						return (
							(_e = he(A.getFullYear() - C.getFullYear())) === 0 &&
								(_e = he(A.getMonth() - C.getMonth())) === 0 &&
								(_e = he(A.getDate() - C.getDate())),
							_e
						);
					}
					function xe(A) {
						switch (A.getDay()) {
							case 0:
								return new Date(A.getFullYear() - 1, 11, 29);
							case 1:
								return A;
							case 2:
								return new Date(A.getFullYear(), 0, 3);
							case 3:
								return new Date(A.getFullYear(), 0, 2);
							case 4:
								return new Date(A.getFullYear(), 0, 1);
							case 5:
								return new Date(A.getFullYear() - 1, 11, 31);
							case 6:
								return new Date(A.getFullYear() - 1, 11, 30);
						}
					}
					function Qt(A) {
						var C = Mo(new Date(A.tm_year + 1900, 0, 1), A.tm_yday),
							he = new Date(C.getFullYear(), 0, 4),
							_e = new Date(C.getFullYear() + 1, 0, 4),
							cr = xe(he),
							Jr = xe(_e);
						return Et(cr, C) <= 0
							? Et(Jr, C) <= 0
								? C.getFullYear() + 1
								: C.getFullYear()
							: C.getFullYear() - 1;
					}
					var ur = {
						'%a': function (A) {
							return ie[A.tm_wday].substring(0, 3);
						},
						'%A': function (A) {
							return ie[A.tm_wday];
						},
						'%b': function (A) {
							return se[A.tm_mon].substring(0, 3);
						},
						'%B': function (A) {
							return se[A.tm_mon];
						},
						'%C': function (A) {
							var C = A.tm_year + 1900;
							return Ie((C / 100) | 0, 2);
						},
						'%d': function (A) {
							return Ie(A.tm_mday, 2);
						},
						'%e': function (A) {
							return Ft(A.tm_mday, 2, ' ');
						},
						'%g': function (A) {
							return Qt(A).toString().substring(2);
						},
						'%G': function (A) {
							return Qt(A);
						},
						'%H': function (A) {
							return Ie(A.tm_hour, 2);
						},
						'%I': function (A) {
							var C = A.tm_hour;
							return C == 0 ? (C = 12) : C > 12 && (C -= 12), Ie(C, 2);
						},
						'%j': function (A) {
							return Ie(A.tm_mday + Ku(Oo(A.tm_year + 1900) ? Fo : Eo, A.tm_mon - 1), 3);
						},
						'%m': function (A) {
							return Ie(A.tm_mon + 1, 2);
						},
						'%M': function (A) {
							return Ie(A.tm_min, 2);
						},
						'%n': function () {
							return `
`;
						},
						'%p': function (A) {
							return A.tm_hour >= 0 && A.tm_hour < 12 ? 'AM' : 'PM';
						},
						'%S': function (A) {
							return Ie(A.tm_sec, 2);
						},
						'%t': function () {
							return '	';
						},
						'%u': function (A) {
							return A.tm_wday || 7;
						},
						'%U': function (A) {
							var C = new Date(A.tm_year + 1900, 0, 1),
								he = C.getDay() === 0 ? C : Mo(C, 7 - C.getDay()),
								_e = new Date(A.tm_year + 1900, A.tm_mon, A.tm_mday);
							if (Et(he, _e) < 0) {
								var cr = Ku(Oo(_e.getFullYear()) ? Fo : Eo, _e.getMonth() - 1) - 31,
									Jr = 31 - he.getDate(),
									Pn = Jr + cr + _e.getDate();
								return Ie(Math.ceil(Pn / 7), 2);
							}
							return Et(he, C) === 0 ? '01' : '00';
						},
						'%V': function (A) {
							var C = new Date(A.tm_year + 1900, 0, 4),
								he = new Date(A.tm_year + 1901, 0, 4),
								_e = xe(C),
								cr = xe(he),
								Jr = Mo(new Date(A.tm_year + 1900, 0, 1), A.tm_yday);
							if (Et(Jr, _e) < 0) return '53';
							if (Et(cr, Jr) <= 0) return '01';
							var Pn;
							return (
								_e.getFullYear() < A.tm_year + 1900
									? (Pn = A.tm_yday + 32 - _e.getDate())
									: (Pn = A.tm_yday + 1 - _e.getDate()),
								Ie(Math.ceil(Pn / 7), 2)
							);
						},
						'%w': function (A) {
							return A.tm_wday;
						},
						'%W': function (A) {
							var C = new Date(A.tm_year, 0, 1),
								he = C.getDay() === 1 ? C : Mo(C, C.getDay() === 0 ? 1 : 7 - C.getDay() + 1),
								_e = new Date(A.tm_year + 1900, A.tm_mon, A.tm_mday);
							if (Et(he, _e) < 0) {
								var cr = Ku(Oo(_e.getFullYear()) ? Fo : Eo, _e.getMonth() - 1) - 31,
									Jr = 31 - he.getDate(),
									Pn = Jr + cr + _e.getDate();
								return Ie(Math.ceil(Pn / 7), 2);
							}
							return Et(he, C) === 0 ? '01' : '00';
						},
						'%y': function (A) {
							return (A.tm_year + 1900).toString().substring(2);
						},
						'%Y': function (A) {
							return A.tm_year + 1900;
						},
						'%z': function (A) {
							var C = A.tm_gmtoff,
								he = C >= 0;
							return (
								(C = Math.abs(C) / 60),
								(C = (C / 60) * 100 + (C % 60)),
								(he ? '+' : '-') + String('0000' + C).slice(-4)
							);
						},
						'%Z': function (A) {
							return A.tm_zone;
						},
						'%%': function () {
							return '%';
						}
					};
					for (var L in ur) T.includes(L) && (T = T.replace(new RegExp(L, 'g'), ur[L](v)));
					var Os = gT(T, !1);
					return Os.length > c ? 0 : (Pf(Os, a), Os.length - 1);
				}
				function mT(a, c, d, p) {
					return yT(a, c, d, p);
				}
				P || x.initMainThreadBlock();
				var Wh,
					bT = [
						null,
						eh,
						uv,
						sh,
						oh,
						dh,
						fh,
						hh,
						ph,
						_h,
						yh,
						bh,
						gh,
						vh,
						Th,
						wh,
						Ih,
						Bh,
						Sh,
						Ah,
						Dh,
						Oh,
						Fh,
						Mh,
						Rh,
						Uh,
						Vh,
						kh,
						Ph,
						Lh,
						Nh,
						xh,
						Ch,
						jh,
						qh
					];
				function gT(a, c, d) {
					var p = d > 0 ? d : kf(a) + 1,
						y = new Array(p),
						v = Vf(a, y, 0, y.length);
					return c && (y.length = v), y;
				}
				var vT = {
						c: iv,
						Ba: av,
						qa: cv,
						va: lv,
						y: dv,
						ua: fv,
						ca: hv,
						ja: _v,
						_: sh,
						R: oh,
						aa: dh,
						$: fh,
						b: hh,
						T: ph,
						S: _h,
						P: yh,
						W: bh,
						o: mv,
						Z: gh,
						ga: vh,
						M: bv,
						Q: Th,
						x: wh,
						X: Ih,
						N: Bh,
						p: Sh,
						Y: Ah,
						ba: gv,
						da: vv,
						t: Dh,
						r: Oh,
						q: Fh,
						fa: Tv,
						ea: wv,
						Aa: Iv,
						g: Bv,
						v: th,
						H: Sv,
						I: Av,
						F: Dv,
						G: Ov,
						n: Fv,
						D: Ev,
						K: Mv,
						E: Rv,
						L: Uv,
						i: Vv,
						J: kv,
						m: Pv,
						C: Lv,
						l: Nv,
						na: ih,
						s: xv,
						e: nh,
						d: Zf,
						ha: Cv,
						h: Is,
						pa: jv,
						ia: qv,
						xa: Wv,
						ra: Hv,
						ya: Qv,
						k: Xv,
						wa: iT,
						sa: sT,
						za: fT,
						la: Rh,
						ma: Uh,
						ta: Io,
						f: Vh,
						oa: kh,
						A: Ph,
						z: Lh,
						w: Nh,
						B: xh,
						O: Ch,
						j: jh,
						u: qh,
						U: Do,
						V: _T,
						a: we || u.wasmMemory,
						ka: mT
					},
					fO = Zg(),
					TT = (u.___wasm_call_ctors = function () {
						return (TT = u.___wasm_call_ctors = u.asm.Ca).apply(null, arguments);
					}),
					wT = (u._main = function () {
						return (wT = u._main = u.asm.Da).apply(null, arguments);
					}),
					IT = (u._duckdb_web_fs_glob_add_path = function () {
						return (IT = u._duckdb_web_fs_glob_add_path = u.asm.Fa).apply(null, arguments);
					}),
					BT = (u._duckdb_web_clear_response = function () {
						return (BT = u._duckdb_web_clear_response = u.asm.Ga).apply(null, arguments);
					}),
					ST = (u._duckdb_web_fail_with = function () {
						return (ST = u._duckdb_web_fail_with = u.asm.Ha).apply(null, arguments);
					}),
					AT = (u._duckdb_web_reset = function () {
						return (AT = u._duckdb_web_reset = u.asm.Ia).apply(null, arguments);
					}),
					DT = (u._duckdb_web_connect = function () {
						return (DT = u._duckdb_web_connect = u.asm.Ja).apply(null, arguments);
					}),
					OT = (u._duckdb_web_disconnect = function () {
						return (OT = u._duckdb_web_disconnect = u.asm.Ka).apply(null, arguments);
					}),
					FT = (u._duckdb_web_flush_files = function () {
						return (FT = u._duckdb_web_flush_files = u.asm.La).apply(null, arguments);
					}),
					ET = (u._duckdb_web_flush_file = function () {
						return (ET = u._duckdb_web_flush_file = u.asm.Ma).apply(null, arguments);
					}),
					MT = (u._duckdb_web_open = function () {
						return (MT = u._duckdb_web_open = u.asm.Na).apply(null, arguments);
					}),
					RT = (u._duckdb_web_collect_file_stats = function () {
						return (RT = u._duckdb_web_collect_file_stats = u.asm.Oa).apply(null, arguments);
					}),
					UT = (u._duckdb_web_export_file_stats = function () {
						return (UT = u._duckdb_web_export_file_stats = u.asm.Pa).apply(null, arguments);
					}),
					VT = (u._duckdb_web_fs_drop_file = function () {
						return (VT = u._duckdb_web_fs_drop_file = u.asm.Qa).apply(null, arguments);
					}),
					kT = (u._duckdb_web_fs_drop_files = function () {
						return (kT = u._duckdb_web_fs_drop_files = u.asm.Ra).apply(null, arguments);
					}),
					PT = (u._duckdb_web_fs_glob_file_infos = function () {
						return (PT = u._duckdb_web_fs_glob_file_infos = u.asm.Sa).apply(null, arguments);
					}),
					LT = (u._duckdb_web_fs_get_file_info_by_id = function () {
						return (LT = u._duckdb_web_fs_get_file_info_by_id = u.asm.Ta).apply(null, arguments);
					}),
					NT = (u._duckdb_web_fs_get_file_info_by_name = function () {
						return (NT = u._duckdb_web_fs_get_file_info_by_name = u.asm.Ua).apply(null, arguments);
					}),
					xT = (u._duckdb_web_fs_set_file_descriptor = function () {
						return (xT = u._duckdb_web_fs_set_file_descriptor = u.asm.Va).apply(null, arguments);
					}),
					CT = (u._duckdb_web_fs_register_file_url = function () {
						return (CT = u._duckdb_web_fs_register_file_url = u.asm.Wa).apply(null, arguments);
					}),
					jT = (u._duckdb_web_fs_register_file_buffer = function () {
						return (jT = u._duckdb_web_fs_register_file_buffer = u.asm.Xa).apply(null, arguments);
					}),
					qT = (u._duckdb_web_copy_file_to_buffer = function () {
						return (qT = u._duckdb_web_copy_file_to_buffer = u.asm.Ya).apply(null, arguments);
					}),
					WT = (u._duckdb_web_copy_file_to_path = function () {
						return (WT = u._duckdb_web_copy_file_to_path = u.asm.Za).apply(null, arguments);
					}),
					zT = (u._duckdb_web_get_version = function () {
						return (zT = u._duckdb_web_get_version = u.asm._a).apply(null, arguments);
					}),
					HT = (u._duckdb_web_get_feature_flags = function () {
						return (HT = u._duckdb_web_get_feature_flags = u.asm.$a).apply(null, arguments);
					}),
					YT = (u._duckdb_web_tokenize = function () {
						return (YT = u._duckdb_web_tokenize = u.asm.ab).apply(null, arguments);
					}),
					GT = (u._duckdb_web_prepared_create = function () {
						return (GT = u._duckdb_web_prepared_create = u.asm.bb).apply(null, arguments);
					}),
					$T = (u._duckdb_web_prepared_close = function () {
						return ($T = u._duckdb_web_prepared_close = u.asm.cb).apply(null, arguments);
					}),
					JT = (u._duckdb_web_prepared_run = function () {
						return (JT = u._duckdb_web_prepared_run = u.asm.db).apply(null, arguments);
					}),
					KT = (u._duckdb_web_prepared_send = function () {
						return (KT = u._duckdb_web_prepared_send = u.asm.eb).apply(null, arguments);
					}),
					ZT = (u._duckdb_web_query_run = function () {
						return (ZT = u._duckdb_web_query_run = u.asm.fb).apply(null, arguments);
					}),
					QT = (u._duckdb_web_query_send = function () {
						return (QT = u._duckdb_web_query_send = u.asm.gb).apply(null, arguments);
					}),
					XT = (u._duckdb_web_query_fetch_results = function () {
						return (XT = u._duckdb_web_query_fetch_results = u.asm.hb).apply(null, arguments);
					}),
					ew = (u._duckdb_web_get_tablenames = function () {
						return (ew = u._duckdb_web_get_tablenames = u.asm.ib).apply(null, arguments);
					}),
					tw = (u._duckdb_web_insert_arrow_from_ipc_stream = function () {
						return (tw = u._duckdb_web_insert_arrow_from_ipc_stream = u.asm.jb).apply(
							null,
							arguments
						);
					}),
					rw = (u._duckdb_web_insert_csv_from_path = function () {
						return (rw = u._duckdb_web_insert_csv_from_path = u.asm.kb).apply(null, arguments);
					}),
					nw = (u._duckdb_web_insert_json_from_path = function () {
						return (nw = u._duckdb_web_insert_json_from_path = u.asm.lb).apply(null, arguments);
					}),
					iw = (u._emscripten_tls_init = function () {
						return (iw = u._emscripten_tls_init = u.asm.mb).apply(null, arguments);
					}),
					sw = (u._emscripten_current_thread_process_queued_calls = function () {
						return (sw = u._emscripten_current_thread_process_queued_calls = u.asm.nb).apply(
							null,
							arguments
						);
					}),
					zh = (u._emscripten_main_browser_thread_id = function () {
						return (zh = u._emscripten_main_browser_thread_id = u.asm.ob).apply(null, arguments);
					}),
					Hh = (u._emscripten_sync_run_in_main_thread_4 = function () {
						return (Hh = u._emscripten_sync_run_in_main_thread_4 = u.asm.pb).apply(null, arguments);
					}),
					Ro = (u._emscripten_main_thread_process_queued_calls = function () {
						return (Ro = u._emscripten_main_thread_process_queued_calls = u.asm.qb).apply(
							null,
							arguments
						);
					}),
					Yh = (u._emscripten_run_in_main_runtime_thread_js = function () {
						return (Yh = u._emscripten_run_in_main_runtime_thread_js = u.asm.rb).apply(
							null,
							arguments
						);
					}),
					Zu = (u.__emscripten_call_on_thread = function () {
						return (Zu = u.__emscripten_call_on_thread = u.asm.sb).apply(null, arguments);
					}),
					Gh = (u.__emscripten_thread_exit = function () {
						return (Gh = u.__emscripten_thread_exit = u.asm.tb).apply(null, arguments);
					}),
					$h = (u._pthread_testcancel = function () {
						return ($h = u._pthread_testcancel = u.asm.ub).apply(null, arguments);
					}),
					Jh = (u.__emscripten_thread_init = function () {
						return (Jh = u.__emscripten_thread_init = u.asm.vb).apply(null, arguments);
					}),
					Kh = (u.___errno_location = function () {
						return (Kh = u.___errno_location = u.asm.wb).apply(null, arguments);
					}),
					Uo = (u._pthread_self = function () {
						return (Uo = u._pthread_self = u.asm.xb).apply(null, arguments);
					}),
					Vo = (u._htonl = function () {
						return (Vo = u._htonl = u.asm.yb).apply(null, arguments);
					}),
					Qu = (u._ntohs = function () {
						return (Qu = u._ntohs = u.asm.zb).apply(null, arguments);
					}),
					ko = (u._htons = function () {
						return (ko = u._htons = u.asm.Ab).apply(null, arguments);
					}),
					Ss = (u.stackSave = function () {
						return (Ss = u.stackSave = u.asm.Bb).apply(null, arguments);
					}),
					di = (u.stackRestore = function () {
						return (di = u.stackRestore = u.asm.Cb).apply(null, arguments);
					}),
					fi = (u.stackAlloc = function () {
						return (fi = u.stackAlloc = u.asm.Db).apply(null, arguments);
					}),
					Zh = (u._emscripten_stack_set_limits = function () {
						return (Zh = u._emscripten_stack_set_limits = u.asm.Eb).apply(null, arguments);
					}),
					As = (u._malloc = function () {
						return (As = u._malloc = u.asm.Fb).apply(null, arguments);
					}),
					Po = (u._free = function () {
						return (Po = u._free = u.asm.Gb).apply(null, arguments);
					}),
					Qh = (u._memalign = function () {
						return (Qh = u._memalign = u.asm.Hb).apply(null, arguments);
					}),
					Xh = (u.__emscripten_allow_main_runtime_queued_calls = 957536),
					hi = (u.__emscripten_main_thread_futex = 1062928);
				(u.ccall = Rg),
					(u.keepRuntimeAlive = Ts),
					(u.PThread = x),
					(u.PThread = x),
					(u.wasmMemory = we),
					(u.ExitStatus = Ds);
				var Lo;
				function Ds(a) {
					(this.name = 'ExitStatus'),
						(this.message = 'Program terminated with exit(' + a + ')'),
						(this.status = a);
				}
				var ow = !1;
				ws = function a() {
					Lo || Xu(), Lo || (ws = a);
				};
				function aw(a) {
					var c = u._main,
						d = 0,
						p = 0;
					try {
						var y = c(d, p);
						return ep(y, !0), y;
					} catch (v) {
						return Bo(v);
					} finally {
						ow = !0;
					}
				}
				function Xu(a) {
					if (((a = a || Ae), kn > 0)) return;
					if (P) {
						m(u), $f(), postMessage({ cmd: 'loaded' });
						return;
					}
					if ((Cg(), kn > 0)) return;
					function c() {
						Lo ||
							((Lo = !0),
							(u.calledRun = !0),
							!vo &&
								($f(),
								jg(),
								m(u),
								u.onRuntimeInitialized && u.onRuntimeInitialized(),
								tp && aw(a),
								Wg()));
					}
					u.setStatus
						? (u.setStatus('Running...'),
						  setTimeout(function () {
								setTimeout(function () {
									u.setStatus('');
								}, 1),
									c();
						  }, 1))
						: c();
				}
				u.run = Xu;
				function ep(a, c) {
					if (((Vn = a), !c && P)) throw (eh(a), 'unwind');
					Ts() || qg(), uw(a);
				}
				function uw(a) {
					(Vn = a),
						Ts() || (x.terminateAllThreads(), u.onExit && u.onExit(a), (vo = !0)),
						bt(a, new Ds(a));
				}
				if (u.preInit)
					for (typeof u.preInit == 'function' && (u.preInit = [u.preInit]); u.preInit.length > 0; )
						u.preInit.pop()();
				var tp = !0;
				return u.noInitialRun && (tp = !1), P && ((Ff = !1), x.initWorker()), Xu(), e.ready;
			};
		})(),
		Sg = nO;
	var Tf = class {
			constructor(e, t) {
				(this._bindings = e), (this._conn = t);
			}
			close() {
				this._bindings.disconnect(this._conn);
			}
			useUnsafe(e) {
				return e(this._bindings, this._conn);
			}
			query(e) {
				let t = this._bindings.runQuery(this._conn, e),
					n = _.RecordBatchReader.from(t);
				return console.assert(n.isSync()), console.assert(n.isFile()), _.Table.from(n);
			}
			send(e) {
				let t = this._bindings.sendQuery(this._conn, e),
					n = new wf(this._bindings, this._conn, t),
					i = _.RecordBatchReader.from(n);
				return console.assert(i.isSync()), console.assert(i.isStream()), i;
			}
			getTableNames(e) {
				return this._bindings.getTableNames(this._conn, e);
			}
			prepare(e) {
				let t = this._bindings.createPrepared(this._conn, e);
				return new Ag(this._bindings, this._conn, t);
			}
			insertArrowTable(e, t) {
				let n = e.serialize('binary', !0);
				this.insertArrowFromIPCStream(n, t);
			}
			insertArrowFromIPCStream(e, t) {
				this._bindings.insertArrowFromIPCStream(this._conn, e, t);
			}
			insertCSVFromPath(e, t) {
				this._bindings.insertCSVFromPath(this._conn, e, t);
			}
			insertJSONFromPath(e, t) {
				this._bindings.insertJSONFromPath(this._conn, e, t);
			}
		},
		wf = class {
			constructor(e, t, n) {
				this.bindings = e;
				this.conn = t;
				this.header = n;
				(this._first = !0), (this._depleted = !1);
			}
			next() {
				if (this._first) return (this._first = !1), { done: !1, value: this.header };
				if (this._depleted) return { done: !0, value: null };
				let e = this.bindings.fetchQueryResults(this.conn);
				return (this._depleted = e.length == 0), { done: this._depleted, value: e };
			}
			[Symbol.iterator]() {
				return this;
			}
		},
		Ag = class {
			constructor(e, t, n) {
				(this.bindings = e), (this.connectionId = t), (this.statementId = n);
			}
			close() {
				this.bindings.closePrepared(this.connectionId, this.statementId);
			}
			query(...e) {
				let t = this.bindings.runPrepared(this.connectionId, this.statementId, e),
					n = _.RecordBatchReader.from(t);
				return console.assert(n.isSync()), console.assert(n.isFile()), _.Table.from(n);
			}
			send(...e) {
				let t = this.bindings.sendPrepared(this.connectionId, this.statementId, e),
					n = new wf(this.bindings, this.connectionId, t),
					i = _.RecordBatchReader.from(n);
				return console.assert(i.isSync()), console.assert(i.isStream()), i;
			}
		};
	var me = ((e) => ((e[(e.SUCCESS = 0)] = 'SUCCESS'), e))(me || {});
	function iO() {
		let r = new TextDecoder();
		return (e) => (
			typeof SharedArrayBuffer != 'undefined' &&
				e.buffer instanceof SharedArrayBuffer &&
				(e = new Uint8Array(e)),
			r.decode(e)
		);
	}
	var sO = iO();
	function $r(r, e) {
		r.ccall('duckdb_web_fail_with', null, ['string'], [e]);
	}
	function ys(r, e, t) {
		let n = r.HEAPU8.subarray(e, e + t),
			i = new Uint8Array(new ArrayBuffer(n.byteLength));
		return i.set(n), i;
	}
	function ne(r, e, t) {
		return sO(r.HEAPU8.subarray(e, e + t));
	}
	var mt = ((n) => (
		(n[(n.BUFFER = 0)] = 'BUFFER'), (n[(n.NATIVE = 1)] = 'NATIVE'), (n[(n.HTTP = 3)] = 'HTTP'), n
	))(mt || {});
	function ge(r, e, t, n) {
		let i = r.stackSave(),
			s = r.stackAlloc(3 * 8);
		t.unshift('number'), n.unshift(s), r.ccall(e, null, t, n);
		let o = r.HEAPF64[(s >> 3) + 0],
			l = r.HEAPF64[(s >> 3) + 1],
			h = r.HEAPF64[(s >> 3) + 2];
		return r.stackRestore(i), [o, l, h];
	}
	function Le(r) {
		r.ccall('duckdb_web_clear_response', null, [], []);
	}
	var If = class {
		constructor(e) {
			let t = new Float64Array(e.buffer, e.byteOffset, e.byteLength / 8),
				n = new Uint8Array(new ArrayBuffer(e.byteLength));
			n.set(e.subarray(7 * 8)),
				(this.totalFileReadsCold = t[0]),
				(this.totalFileReadsAhead = t[1]),
				(this.totalFileReadsCached = t[2]),
				(this.totalFileWrites = t[3]),
				(this.totalPageAccesses = t[4]),
				(this.totalPageLoads = t[5]),
				(this.blockSize = t[6]),
				(this.blockStats = n);
		}
		getBlockStats(e, t) {
			return (
				(t = t || {
					file_reads_cold: 0,
					file_reads_ahead: 0,
					file_reads_cached: 0,
					file_writes: 0,
					page_accesses: 0,
					page_loads: 0
				}),
				(t.file_writes = this.blockStats[e * 3 + 0] & 15),
				(t.file_reads_cold = this.blockStats[e * 3 + 0] >> 4),
				(t.file_reads_ahead = this.blockStats[e * 3 + 1] & 15),
				(t.file_reads_cached = this.blockStats[e * 3 + 1] >> 4),
				(t.page_accesses = this.blockStats[e * 3 + 1] & 15),
				(t.page_loads = this.blockStats[e * 3 + 1] >> 4),
				t
			);
		}
	};
	var oO = new TextEncoder();
	var Bf = class {
		constructor(e, t) {
			this._instance = null;
			this._initPromise = null;
			this._initPromiseResolver = () => {};
			(this._logger = e), (this._runtime = t);
		}
		get logger() {
			return this._logger;
		}
		get mod() {
			return this._instance;
		}
		get pthread() {
			return this.mod.PThread || null;
		}
		async instantiate() {
			return this._instance != null
				? this
				: (this._initPromise != null && (await this._initPromise),
				  (this._initPromise = new Promise((e) => {
						this._initPromiseResolver = e;
				  })),
				  (this._instance = await this.instantiateImpl({
						print: console.log.bind(console),
						printErr: console.log.bind(console),
						onRuntimeInitialized: this._initPromiseResolver
				  })),
				  await this._initPromise,
				  (this._initPromise = null),
				  this);
		}
		open(e) {
			let [t, n, i] = ge(this.mod, 'duckdb_web_open', ['string'], [JSON.stringify(e)]);
			if (t !== me.SUCCESS) throw new Error(ne(this.mod, n, i));
			Le(this.mod);
		}
		reset() {
			let [e, t, n] = ge(this.mod, 'duckdb_web_reset', [], []);
			if (e !== me.SUCCESS) throw new Error(ne(this.mod, t, n));
			Le(this.mod);
		}
		getVersion() {
			let [e, t, n] = ge(this.mod, 'duckdb_web_get_version', [], []);
			if (e !== me.SUCCESS) throw new Error(ne(this.mod, t, n));
			let i = ne(this.mod, t, n);
			return Le(this.mod), i;
		}
		getFeatureFlags() {
			return this.mod.ccall('duckdb_web_get_feature_flags', 'number', [], []);
		}
		tokenize(e) {
			let [t, n, i] = ge(this.mod, 'duckdb_web_tokenize', ['string'], [e]);
			if (t !== me.SUCCESS) throw new Error(ne(this.mod, n, i));
			let s = ne(this.mod, n, i);
			return Le(this.mod), JSON.parse(s);
		}
		connect() {
			let e = this.mod.ccall('duckdb_web_connect', 'number', [], []);
			return new Tf(this, e);
		}
		disconnect(e) {
			this.mod.ccall('duckdb_web_disconnect', null, ['number'], [e]);
		}
		runQuery(e, t) {
			let [n, i, s] = ge(this.mod, 'duckdb_web_query_run', ['number', 'string'], [e, t]);
			if (n !== me.SUCCESS) throw new Error(ne(this.mod, i, s));
			let o = ys(this.mod, i, s);
			return Le(this.mod), o;
		}
		sendQuery(e, t) {
			let [n, i, s] = ge(this.mod, 'duckdb_web_query_send', ['number', 'string'], [e, t]);
			if (n !== me.SUCCESS) throw new Error(ne(this.mod, i, s));
			let o = ys(this.mod, i, s);
			return Le(this.mod), o;
		}
		fetchQueryResults(e) {
			let [t, n, i] = ge(this.mod, 'duckdb_web_query_fetch_results', ['number'], [e]);
			if (t !== me.SUCCESS) throw new Error(ne(this.mod, n, i));
			let s = ys(this.mod, n, i);
			return Le(this.mod), s;
		}
		getTableNames(e, t) {
			let [n, i, s] = ge(this.mod, 'duckdb_web_get_tablenames', ['number', 'string'], [e, t]);
			if (n !== me.SUCCESS) throw new Error(ne(this.mod, i, s));
			let o = ne(this.mod, i, s);
			return Le(this.mod), JSON.parse(o);
		}
		createPrepared(e, t) {
			let [n, i, s] = ge(this.mod, 'duckdb_web_prepared_create', ['number', 'string'], [e, t]);
			if (n !== me.SUCCESS) throw new Error(ne(this.mod, i, s));
			return Le(this.mod), i;
		}
		closePrepared(e, t) {
			let [n, i, s] = ge(this.mod, 'duckdb_web_prepared_close', ['number', 'number'], [e, t]);
			if (n !== me.SUCCESS) throw new Error(ne(this.mod, i, s));
			Le(this.mod);
		}
		runPrepared(e, t, n) {
			let [i, s, o] = ge(
				this.mod,
				'duckdb_web_prepared_run',
				['number', 'number', 'string'],
				[e, t, JSON.stringify(n)]
			);
			if (i !== me.SUCCESS) throw new Error(ne(this.mod, s, o));
			let l = ys(this.mod, s, o);
			return Le(this.mod), l;
		}
		sendPrepared(e, t, n) {
			let [i, s, o] = ge(
				this.mod,
				'duckdb_web_prepared_send',
				['number', 'number', 'string'],
				[e, t, JSON.stringify(n)]
			);
			if (i !== me.SUCCESS) throw new Error(ne(this.mod, s, o));
			let l = ys(this.mod, s, o);
			return Le(this.mod), l;
		}
		insertArrowFromIPCStream(e, t, n) {
			if (t.length == 0) return;
			let i = this.mod._malloc(t.length);
			this.mod.HEAPU8.subarray(i, i + t.length).set(t);
			let o = n ? JSON.stringify(n) : '',
				[l, h, u] = ge(
					this.mod,
					'duckdb_web_insert_arrow_from_ipc_stream',
					['number', 'number', 'number', 'string'],
					[e, i, t.length, o]
				);
			if (l !== me.SUCCESS) throw new Error(ne(this.mod, h, u));
		}
		insertCSVFromPath(e, t, n) {
			if (n.columns !== void 0) {
				n.columnsFlat = [];
				for (let u in n.columns) n.columnsFlat.push(bo(u, n.columns[u]));
			}
			let i = Ln({}, n);
			(i.columns = i.columnsFlat), delete i.columnsFlat;
			let s = JSON.stringify(i),
				[o, l, h] = ge(
					this.mod,
					'duckdb_web_insert_csv_from_path',
					['number', 'string', 'string'],
					[e, t, s]
				);
			if (o !== me.SUCCESS) throw new Error(ne(this.mod, l, h));
		}
		insertJSONFromPath(e, t, n) {
			if (n.columns !== void 0) {
				n.columnsFlat = [];
				for (let u in n.columns) n.columnsFlat.push(bo(u, n.columns[u]));
			}
			let i = Ln({}, n);
			(i.columns = i.columnsFlat), delete i.columnsFlat;
			let s = JSON.stringify(i),
				[o, l, h] = ge(
					this.mod,
					'duckdb_web_insert_json_from_path',
					['number', 'string', 'string'],
					[e, t, s]
				);
			if (o !== me.SUCCESS) throw new Error(ne(this.mod, l, h));
		}
		globFiles(e) {
			let [t, n, i] = ge(this.mod, 'duckdb_web_fs_glob_file_infos', ['string'], [e]);
			if (t !== me.SUCCESS) throw new Error(ne(this.mod, n, i));
			let s = ne(this.mod, n, i);
			Le(this.mod);
			let o = JSON.parse(s);
			return o == null ? [] : o;
		}
		registerFileURL(e, t) {
			t === void 0 && (t = e);
			let [n, i, s] = ge(this.mod, 'duckdb_web_fs_register_file_url', ['string', 'string'], [e, t]);
			if (n !== me.SUCCESS) throw new Error(ne(this.mod, i, s));
			Le(this.mod);
		}
		registerFileText(e, t) {
			let n = oO.encode(t);
			this.registerFileBuffer(e, n);
		}
		registerFileBuffer(e, t) {
			let n = this.mod._malloc(t.length);
			this.mod.HEAPU8.subarray(n, n + t.length).set(t);
			let [s, o, l] = ge(
				this.mod,
				'duckdb_web_fs_register_file_buffer',
				['string', 'number', 'number'],
				[e, n, t.length]
			);
			if (s !== me.SUCCESS) throw new Error(ne(this.mod, o, l));
			Le(this.mod);
		}
		registerFileHandle(e, t) {
			let [n, i, s] = ge(this.mod, 'duckdb_web_fs_register_file_url', ['string', 'string'], [e, e]);
			if (n !== me.SUCCESS) throw new Error(ne(this.mod, i, s));
			if (
				(Le(this.mod),
				(globalThis.DUCKDB_RUNTIME._files = (globalThis.DUCKDB_RUNTIME._files || new Map()).set(
					e,
					t
				)),
				this.pthread)
			) {
				for (let o of this.pthread.runningWorkers)
					o.postMessage({ cmd: 'registerFileHandle', fileName: e, fileHandle: t });
				for (let o of this.pthread.unusedWorkers)
					o.postMessage({ cmd: 'dropFileHandle', fileName: e });
			}
		}
		dropFile(e) {
			return this.mod.ccall('duckdb_web_fs_drop_file', 'boolean', ['string'], [e]);
		}
		dropFiles() {
			let [e, t, n] = ge(this.mod, 'duckdb_web_fs_drop_files', [], []);
			if (e !== me.SUCCESS) throw new Error(ne(this.mod, t, n));
			Le(this.mod);
		}
		flushFiles() {
			this.mod.ccall('duckdb_web_flush_files', null, [], []);
		}
		copyFileToPath(e, t) {
			let [n, i, s] = ge(this.mod, 'duckdb_web_copy_file_to_path', ['string', 'string'], [e, t]);
			if (n !== me.SUCCESS) throw new Error(ne(this.mod, i, s));
			Le(this.mod);
		}
		copyFileToBuffer(e) {
			let [t, n, i] = ge(this.mod, 'duckdb_web_copy_file_to_buffer', ['string'], [e]);
			if (t !== me.SUCCESS) throw new Error(ne(this.mod, n, i));
			let s = this.mod.HEAPU8.subarray(n, n + i),
				o = new Uint8Array(s.length);
			return o.set(s), Le(this.mod), o;
		}
		collectFileStatistics(e, t) {
			let [n, i, s] = ge(this.mod, 'duckdb_web_collect_file_stats', ['string', 'boolean'], [e, t]);
			if (n !== me.SUCCESS) throw new Error(ne(this.mod, i, s));
		}
		exportFileStatistics(e) {
			let [t, n, i] = ge(this.mod, 'duckdb_web_export_file_stats', ['string'], [e]);
			if (t !== me.SUCCESS) throw new Error(ne(this.mod, n, i));
			return new If(this.mod.HEAPU8.subarray(n, n + i));
		}
	};
	var Sf = class extends Bf {
		constructor(e, t, n, i) {
			super(e, t);
			(this.mainModuleURL = n), (this.pthreadWorkerURL = i);
		}
		locateFile(e, t) {
			if (e.endsWith('.wasm')) return this.mainModuleURL;
			if (e.endsWith('.worker.js')) {
				if (!this.pthreadWorkerURL) throw new Error('Missing DuckDB worker URL!');
				return this.pthreadWorkerURL;
			}
			throw new Error(`WASM instantiation requested unexpected file: prefix=${t} path=${e}`);
		}
		instantiateWasm(e, t) {
			return (
				(globalThis.DUCKDB_RUNTIME = this._runtime),
				WebAssembly.instantiateStreaming
					? WebAssembly.instantiateStreaming(fetch(this.mainModuleURL, { mode: 'cors' }), e).then(
							(n) => {
								t(n.instance, n.module);
							}
					  )
					: fetch(this.mainModuleURL, { mode: 'cors' })
							.then((n) => n.arrayBuffer())
							.then((n) =>
								WebAssembly.instantiate(n, e).then((i) => {
									t(i.instance, i.module);
								})
							)
							.catch((n) => {
								console.error('Failed to instantiate WASM:', n);
							}),
				[]
			);
		}
	};
	var Af = class extends Sf {
		constructor(e, t, n, i = null) {
			super(e, t, n, i);
		}
		instantiateImpl(e) {
			return Sg(
				No(Ln({}, e), {
					instantiateWasm: this.instantiateWasm.bind(this),
					locateFile: this.locateFile.bind(this)
				})
			);
		}
	};
	var ft = {
		fileInfoCache: new Map(),
		getFileInfo(r, e) {
			try {
				let t = ft.fileInfoCache.get(e);
				if (t) return t;
				let [n, i, s] = ge(r, 'duckdb_web_fs_get_file_info_by_id', ['number'], [e]);
				if (n !== me.SUCCESS) return null;
				let o = ne(r, i, s);
				Le(r);
				let l = JSON.parse(o);
				if (l == null) return null;
				let h = No(Ln({}, l), { blob: null });
				return ft.fileInfoCache.set(e, h), h;
			} catch (t) {
				return null;
			}
		},
		testPlatformFeature: (r, e) => {
			switch (e) {
				case 1:
					return typeof BigInt64Array != 'undefined';
				default:
					return console.warn(`test for unknown feature: ${e}`), !1;
			}
		},
		openFile: (r, e) => {
			var t;
			try {
				ft.fileInfoCache.delete(e);
				let n = ft.getFileInfo(r, e);
				switch (n == null ? void 0 : n.dataProtocol) {
					case mt.HTTP: {
						let i = null;
						try {
							let s = new XMLHttpRequest();
							s.open('HEAD', n.dataUrl, !1), s.setRequestHeader('Range', 'bytes=0-'), s.send(null);
							let o = s.getResponseHeader('Content-Length');
							if (s.status == 206 && o !== null) {
								let l = r._malloc(2 * 8);
								return (r.HEAPF64[(l >> 3) + 0] = +o), (r.HEAPF64[(l >> 3) + 1] = 0), l;
							}
						} catch (s) {
							(i = s), console.warn(`HEAD request with range header failed: ${s}`);
						}
						if (n.allowFullHttpReads) {
							console.warn(`falling back to full HTTP read for: ${n.dataUrl}`);
							let s = new XMLHttpRequest();
							if (
								(s.open('GET', n.dataUrl, !1),
								(s.responseType = 'arraybuffer'),
								s.send(null),
								s.status == 200)
							) {
								let o = r._malloc(s.response.byteLength),
									l = new Uint8Array(s.response, 0, s.response.byteLength);
								r.HEAPU8.set(l, o);
								let h = r._malloc(2 * 8);
								return (
									(r.HEAPF64[(h >> 3) + 0] = s.response.byteLength),
									(r.HEAPF64[(h >> 3) + 1] = o),
									h
								);
							}
						}
						if (i != null) throw new Error(`Reading file ${n.fileName} failed with error: ${i}`);
						return 0;
					}
					case mt.NATIVE: {
						let i = (t = ft._files) == null ? void 0 : t.get(n.fileName);
						if (i) {
							let l = r._malloc(2 * 8);
							return (r.HEAPF64[(l >> 3) + 0] = i.size), (r.HEAPF64[(l >> 3) + 1] = 0), l;
						}
						console.warn(`Buffering missing file: ${n.fileName}`);
						let s = r._malloc(2 * 8),
							o = r._malloc(1);
						return (r.HEAPF64[(s >> 3) + 0] = 1), (r.HEAPF64[(s >> 3) + 1] = o), s;
					}
				}
			} catch (n) {
				console.error(n.toString()), $r(r, n.toString());
			}
			return 0;
		},
		glob: (r, e, t) => {
			try {
				let n = ne(r, e, t);
				if (n.startsWith('http')) {
					let i = new XMLHttpRequest();
					if ((i.open('HEAD', n, !1), i.send(null), i.status != 200 && i.status !== 206)) {
						$r(r, `HEAD request failed: ${n}`);
						return;
					}
					r.ccall('duckdb_web_fs_glob_add_path', null, ['string'], [n]);
				}
			} catch (n) {
				return $r(r, n.toString()), 0;
			}
		},
		checkFile: (r, e, t) => {
			try {
				let n = ne(r, e, t);
				if (n.startsWith('http')) {
					let i = new XMLHttpRequest();
					i.open('HEAD', n, !1), i.setRequestHeader('Range', 'bytes=0-'), i.send(null);
					let s = !1;
					if (i.status == 206) s = !0;
					else if (i.status == 200) s = i.getResponseHeader('Accept-Ranges') === 'bytes';
					else return !1;
					return !!s;
				}
			} catch (n) {
				return !1;
			}
			return !1;
		},
		syncFile: (r, e) => {},
		closeFile: (r, e) => {
			let t = ft.getFileInfo(r, e);
			switch ((ft.fileInfoCache.delete(e), t == null ? void 0 : t.dataProtocol)) {
				case mt.HTTP:
					break;
				case mt.NATIVE:
					return;
			}
		},
		truncateFile: (r, e, t) => {
			let n = ft.getFileInfo(r, e);
			switch (n == null ? void 0 : n.dataProtocol) {
				case mt.HTTP:
					$r(r, 'Cannot truncate a http file');
					return;
				case mt.NATIVE:
					$r(r, 'truncateFile not implemented');
					return;
			}
			return 0;
		},
		readFile(r, e, t, n, i) {
			var s;
			try {
				let o = ft.getFileInfo(r, e);
				switch (o == null ? void 0 : o.dataProtocol) {
					case mt.HTTP: {
						if (!o.dataUrl) throw new Error(`Missing data URL for file ${e}`);
						try {
							let l = new XMLHttpRequest();
							if (
								(l.open('GET', o.dataUrl, !1),
								(l.responseType = 'arraybuffer'),
								l.setRequestHeader('Range', `bytes=${i}-${i + n - 1}`),
								l.send(null),
								l.status == 206 || (l.status == 200 && n == l.response.byteLength && i == 0))
							) {
								let h = new Uint8Array(l.response, 0, Math.min(l.response.byteLength, n));
								return r.HEAPU8.set(h, t), h.byteLength;
							} else
								throw l.status == 200
									? new Error(
											`Range request for ${o.dataUrl} did not return a partial response: ${l.status} "${l.statusText}"`
									  )
									: new Error(
											`Range request for ${o.dataUrl} did returned non-success status: ${l.status} "${l.statusText}"`
									  );
						} catch (l) {
							throw new Error(`Range request for ${o.dataUrl} failed with error: ${l}"`);
						}
					}
					case mt.NATIVE: {
						let l = (s = ft._files) == null ? void 0 : s.get(o.fileName);
						if (!l) throw new Error(`No handle available for file: ${o.fileName}`);
						let h = l.slice(i, i + n),
							u = new Uint8Array(new FileReaderSync().readAsArrayBuffer(h));
						return r.HEAPU8.set(u, t), u.byteLength;
					}
				}
				return 0;
			} catch (o) {
				return $r(r, o.toString()), 0;
			}
		},
		writeFile: (r, e, t, n, i) => {
			let s = ft.getFileInfo(r, e);
			switch (s == null ? void 0 : s.dataProtocol) {
				case mt.HTTP:
					return $r(r, 'Cannot write to HTTP file'), 0;
				case mt.NATIVE:
					return $r(r, 'writefile not implemented'), 0;
			}
			return 0;
		},
		getLastFileModificationTime: (r, e) => {
			var n;
			let t = ft.getFileInfo(r, e);
			switch (t == null ? void 0 : t.dataProtocol) {
				case mt.NATIVE: {
					if (!((n = ft._files) == null ? void 0 : n.get(t.fileName)))
						throw Error(`No handle available for file: ${t.fileName}`);
					return 0;
				}
				case mt.HTTP:
					return new Date().getTime();
			}
			return 0;
		},
		checkDirectory: (r, e, t) => {
			let n = ne(r, e, t);
			return console.log(`checkDirectory: ${n}`), !1;
		},
		createDirectory: (r, e, t) => {
			let n = ne(r, e, t);
			console.log(`createDirectory: ${n}`);
		},
		removeDirectory: (r, e, t) => {
			let n = ne(r, e, t);
			console.log(`removeDirectory: ${n}`);
		},
		listDirectoryEntries: (r, e, t) => {
			let n = ne(r, e, t);
			return console.log(`listDirectoryEntries: ${n}`), !1;
		},
		moveFile: (r, e, t, n, i) => {},
		removeFile: (r, e, t) => {}
	};
	var Dg = class extends gf {
		postMessage(e, t) {
			globalThis.postMessage(e, t);
		}
		async instantiate(e, t) {
			return await new Af(this, ft, e, t).instantiate();
		}
	};
	function Og() {
		let r = new Dg();
		globalThis.onmessage = async (e) => {
			await r.onMessage(e.data);
		};
	}
	Og();
	return bw(aO);
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=duckdb-browser-next-coi.worker.js.map
