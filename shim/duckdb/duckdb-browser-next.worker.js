var duckdb = (() => {
	var Av = Object.create;
	var cs = Object.defineProperty,
		Dv = Object.defineProperties,
		Fv = Object.getOwnPropertyDescriptor,
		Ov = Object.getOwnPropertyDescriptors,
		Mv = Object.getOwnPropertyNames,
		Df = Object.getOwnPropertySymbols,
		Ev = Object.getPrototypeOf,
		Ff = Object.prototype.hasOwnProperty,
		Rv = Object.prototype.propertyIsEnumerable;
	var Of = (r, e, t) =>
			e in r ? cs(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (r[e] = t),
		Sn = (r, e) => {
			for (var t in e || (e = {})) Ff.call(e, t) && Of(r, t, e[t]);
			if (Df) for (var t of Df(e)) Rv.call(e, t) && Of(r, t, e[t]);
			return r;
		},
		po = (r, e) => Dv(r, Ov(e)),
		Mf = (r) => cs(r, '__esModule', { value: !0 });
	var Uv = ((r) =>
		typeof require != 'undefined'
			? require
			: typeof Proxy != 'undefined'
			? new Proxy(r, { get: (e, t) => (typeof require != 'undefined' ? require : e)[t] })
			: r)(function (r) {
		if (typeof require != 'undefined') return require.apply(this, arguments);
		throw new Error('Dynamic require of "' + r + '" is not supported');
	});
	var g = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports),
		Vv = (r, e) => {
			for (var t in e) cs(r, t, { get: e[t], enumerable: !0 });
		},
		Ef = (r, e, t, n) => {
			if ((e && typeof e == 'object') || typeof e == 'function')
				for (let i of Mv(e))
					!Ff.call(r, i) &&
						(t || i !== 'default') &&
						cs(r, i, { get: () => e[i], enumerable: !(n = Fv(e, i)) || n.enumerable });
			return r;
		},
		vr = (r, e) =>
			Ef(
				Mf(
					cs(
						r != null ? Av(Ev(r)) : {},
						'default',
						!e && r && r.__esModule
							? { get: () => r.default, enumerable: !0 }
							: { value: r, enumerable: !0 }
					)
				),
				r
			),
		Pv = (
			(r) => (e, t) =>
				(r && r.get(e)) || ((t = Ef(Mf({}), e, 1)), r && r.set(e, t), t)
		)(typeof WeakMap != 'undefined' ? new WeakMap() : 0);
	var tt = g((FA, mo) => {
		var Rf,
			Uf,
			Vf,
			Pf,
			Nf,
			Lf,
			kf,
			xf,
			Cf,
			yo,
			Uu,
			jf,
			qf,
			Wf,
			ti,
			zf,
			Hf,
			Yf,
			Gf,
			$f,
			Jf,
			Kf,
			Zf,
			_o;
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
				: typeof mo == 'object' && typeof mo.exports == 'object'
				? r(t(e, t(mo.exports)))
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
			(Rf = function (n, i) {
				if (typeof i != 'function' && i !== null)
					throw new TypeError('Class extends value ' + String(i) + ' is not a constructor or null');
				e(n, i);
				function s() {
					this.constructor = n;
				}
				n.prototype = i === null ? Object.create(i) : ((s.prototype = i.prototype), new s());
			}),
				(Uf =
					Object.assign ||
					function (n) {
						for (var i, s = 1, o = arguments.length; s < o; s++) {
							i = arguments[s];
							for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
						}
						return n;
					}),
				(Vf = function (n, i) {
					var s = {};
					for (var o in n)
						Object.prototype.hasOwnProperty.call(n, o) && i.indexOf(o) < 0 && (s[o] = n[o]);
					if (n != null && typeof Object.getOwnPropertySymbols == 'function')
						for (var a = 0, o = Object.getOwnPropertySymbols(n); a < o.length; a++)
							i.indexOf(o[a]) < 0 &&
								Object.prototype.propertyIsEnumerable.call(n, o[a]) &&
								(s[o[a]] = n[o[a]]);
					return s;
				}),
				(Pf = function (n, i, s, o) {
					var a = arguments.length,
						l = a < 3 ? i : o === null ? (o = Object.getOwnPropertyDescriptor(i, s)) : o,
						f;
					if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
						l = Reflect.decorate(n, i, s, o);
					else
						for (var y = n.length - 1; y >= 0; y--)
							(f = n[y]) && (l = (a < 3 ? f(l) : a > 3 ? f(i, s, l) : f(i, s)) || l);
					return a > 3 && l && Object.defineProperty(i, s, l), l;
				}),
				(Nf = function (n, i) {
					return function (s, o) {
						i(s, o, n);
					};
				}),
				(Lf = function (n, i) {
					if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
						return Reflect.metadata(n, i);
				}),
				(kf = function (n, i, s, o) {
					function a(l) {
						return l instanceof s
							? l
							: new s(function (f) {
									f(l);
							  });
					}
					return new (s || (s = Promise))(function (l, f) {
						function y(C) {
							try {
								E(o.next(C));
							} catch (we) {
								f(we);
							}
						}
						function F(C) {
							try {
								E(o.throw(C));
							} catch (we) {
								f(we);
							}
						}
						function E(C) {
							C.done ? l(C.value) : a(C.value).then(y, F);
						}
						E((o = o.apply(n, i || [])).next());
					});
				}),
				(xf = function (n, i) {
					var s = {
							label: 0,
							sent: function () {
								if (l[0] & 1) throw l[1];
								return l[1];
							},
							trys: [],
							ops: []
						},
						o,
						a,
						l,
						f;
					return (
						(f = { next: y(0), throw: y(1), return: y(2) }),
						typeof Symbol == 'function' &&
							(f[Symbol.iterator] = function () {
								return this;
							}),
						f
					);
					function y(E) {
						return function (C) {
							return F([E, C]);
						};
					}
					function F(E) {
						if (o) throw new TypeError('Generator is already executing.');
						for (; s; )
							try {
								if (
									((o = 1),
									a &&
										(l =
											E[0] & 2
												? a.return
												: E[0]
												? a.throw || ((l = a.return) && l.call(a), 0)
												: a.next) &&
										!(l = l.call(a, E[1])).done)
								)
									return l;
								switch (((a = 0), l && (E = [E[0] & 2, l.value]), E[0])) {
									case 0:
									case 1:
										l = E;
										break;
									case 4:
										return s.label++, { value: E[1], done: !1 };
									case 5:
										s.label++, (a = E[1]), (E = [0]);
										continue;
									case 7:
										(E = s.ops.pop()), s.trys.pop();
										continue;
									default:
										if (
											((l = s.trys),
											!(l = l.length > 0 && l[l.length - 1]) && (E[0] === 6 || E[0] === 2))
										) {
											s = 0;
											continue;
										}
										if (E[0] === 3 && (!l || (E[1] > l[0] && E[1] < l[3]))) {
											s.label = E[1];
											break;
										}
										if (E[0] === 6 && s.label < l[1]) {
											(s.label = l[1]), (l = E);
											break;
										}
										if (l && s.label < l[2]) {
											(s.label = l[2]), s.ops.push(E);
											break;
										}
										l[2] && s.ops.pop(), s.trys.pop();
										continue;
								}
								E = i.call(n, s);
							} catch (C) {
								(E = [6, C]), (a = 0);
							} finally {
								o = l = 0;
							}
						if (E[0] & 5) throw E[1];
						return { value: E[0] ? E[1] : void 0, done: !0 };
					}
				}),
				(Cf = function (n, i) {
					for (var s in n)
						s !== 'default' && !Object.prototype.hasOwnProperty.call(i, s) && _o(i, n, s);
				}),
				(_o = Object.create
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
				(yo = function (n) {
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
				(Uu = function (n, i) {
					var s = typeof Symbol == 'function' && n[Symbol.iterator];
					if (!s) return n;
					var o = s.call(n),
						a,
						l = [],
						f;
					try {
						for (; (i === void 0 || i-- > 0) && !(a = o.next()).done; ) l.push(a.value);
					} catch (y) {
						f = { error: y };
					} finally {
						try {
							a && !a.done && (s = o.return) && s.call(o);
						} finally {
							if (f) throw f.error;
						}
					}
					return l;
				}),
				(jf = function () {
					for (var n = [], i = 0; i < arguments.length; i++) n = n.concat(Uu(arguments[i]));
					return n;
				}),
				(qf = function () {
					for (var n = 0, i = 0, s = arguments.length; i < s; i++) n += arguments[i].length;
					for (var o = Array(n), a = 0, i = 0; i < s; i++)
						for (var l = arguments[i], f = 0, y = l.length; f < y; f++, a++) o[a] = l[f];
					return o;
				}),
				(Wf = function (n, i, s) {
					if (s || arguments.length === 2)
						for (var o = 0, a = i.length, l; o < a; o++)
							(l || !(o in i)) && (l || (l = Array.prototype.slice.call(i, 0, o)), (l[o] = i[o]));
					return n.concat(l || Array.prototype.slice.call(i));
				}),
				(ti = function (n) {
					return this instanceof ti ? ((this.v = n), this) : new ti(n);
				}),
				(zf = function (n, i, s) {
					if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
					var o = s.apply(n, i || []),
						a,
						l = [];
					return (
						(a = {}),
						f('next'),
						f('throw'),
						f('return'),
						(a[Symbol.asyncIterator] = function () {
							return this;
						}),
						a
					);
					function f(me) {
						o[me] &&
							(a[me] = function (kt) {
								return new Promise(function (it, ns) {
									l.push([me, kt, it, ns]) > 1 || y(me, kt);
								});
							});
					}
					function y(me, kt) {
						try {
							F(o[me](kt));
						} catch (it) {
							we(l[0][3], it);
						}
					}
					function F(me) {
						me.value instanceof ti ? Promise.resolve(me.value.v).then(E, C) : we(l[0][2], me);
					}
					function E(me) {
						y('next', me);
					}
					function C(me) {
						y('throw', me);
					}
					function we(me, kt) {
						me(kt), l.shift(), l.length && y(l[0][0], l[0][1]);
					}
				}),
				(Hf = function (n) {
					var i, s;
					return (
						(i = {}),
						o('next'),
						o('throw', function (a) {
							throw a;
						}),
						o('return'),
						(i[Symbol.iterator] = function () {
							return this;
						}),
						i
					);
					function o(a, l) {
						i[a] = n[a]
							? function (f) {
									return (s = !s) ? { value: ti(n[a](f)), done: a === 'return' } : l ? l(f) : f;
							  }
							: l;
					}
				}),
				(Yf = function (n) {
					if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
					var i = n[Symbol.asyncIterator],
						s;
					return i
						? i.call(n)
						: ((n = typeof yo == 'function' ? yo(n) : n[Symbol.iterator]()),
						  (s = {}),
						  o('next'),
						  o('throw'),
						  o('return'),
						  (s[Symbol.asyncIterator] = function () {
								return this;
						  }),
						  s);
					function o(l) {
						s[l] =
							n[l] &&
							function (f) {
								return new Promise(function (y, F) {
									(f = n[l](f)), a(y, F, f.done, f.value);
								});
							};
					}
					function a(l, f, y, F) {
						Promise.resolve(F).then(function (E) {
							l({ value: E, done: y });
						}, f);
					}
				}),
				(Gf = function (n, i) {
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
			($f = function (n) {
				if (n && n.__esModule) return n;
				var i = {};
				if (n != null)
					for (var s in n)
						s !== 'default' && Object.prototype.hasOwnProperty.call(n, s) && _o(i, n, s);
				return t(i, n), i;
			}),
				(Jf = function (n) {
					return n && n.__esModule ? n : { default: n };
				}),
				(Kf = function (n, i, s, o) {
					if (s === 'a' && !o) throw new TypeError('Private accessor was defined without a getter');
					if (typeof i == 'function' ? n !== i || !o : !i.has(n))
						throw new TypeError(
							'Cannot read private member from an object whose class did not declare it'
						);
					return s === 'm' ? o : s === 'a' ? o.call(n) : o ? o.value : i.get(n);
				}),
				(Zf = function (n, i, s, o, a) {
					if (o === 'm') throw new TypeError('Private method is not writable');
					if (o === 'a' && !a) throw new TypeError('Private accessor was defined without a setter');
					if (typeof i == 'function' ? n !== i || !a : !i.has(n))
						throw new TypeError(
							'Cannot write private member to an object whose class did not declare it'
						);
					return o === 'a' ? a.call(n, s) : a ? (a.value = s) : i.set(n, s), s;
				}),
				r('__extends', Rf),
				r('__assign', Uf),
				r('__rest', Vf),
				r('__decorate', Pf),
				r('__param', Nf),
				r('__metadata', Lf),
				r('__awaiter', kf),
				r('__generator', xf),
				r('__exportStar', Cf),
				r('__createBinding', _o),
				r('__values', yo),
				r('__read', Uu),
				r('__spread', jf),
				r('__spreadArrays', qf),
				r('__spreadArray', Wf),
				r('__await', ti),
				r('__asyncGenerator', zf),
				r('__asyncDelegator', Hf),
				r('__asyncValues', Yf),
				r('__makeTemplateObject', Gf),
				r('__importStar', $f),
				r('__importDefault', Jf),
				r('__classPrivateFieldGet', Kf),
				r('__classPrivateFieldSet', Zf);
		});
	});
	var Tr = g((Xf) => {
		var _ = {};
		_.Offset;
		_.Table;
		_.SIZEOF_SHORT = 2;
		_.SIZEOF_INT = 4;
		_.FILE_IDENTIFIER_LENGTH = 4;
		_.SIZE_PREFIX_LENGTH = 4;
		_.Encoding = { UTF8_BYTES: 1, UTF16_STRING: 2 };
		_.int32 = new Int32Array(2);
		_.float32 = new Float32Array(_.int32.buffer);
		_.float64 = new Float64Array(_.int32.buffer);
		_.isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
		_.Long = function (r, e) {
			(this.low = r | 0), (this.high = e | 0);
		};
		_.Long.create = function (r, e) {
			return r == 0 && e == 0 ? _.Long.ZERO : new _.Long(r, e);
		};
		_.Long.prototype.toFloat64 = function () {
			return (this.low >>> 0) + this.high * 4294967296;
		};
		_.Long.prototype.equals = function (r) {
			return this.low == r.low && this.high == r.high;
		};
		_.Long.ZERO = new _.Long(0, 0);
		_.Builder = function (r) {
			if (r) var e = r;
			else var e = 1024;
			(this.bb = _.ByteBuffer.allocate(e)),
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
		_.Builder.prototype.clear = function () {
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
		_.Builder.prototype.forceDefaults = function (r) {
			this.force_defaults = r;
		};
		_.Builder.prototype.dataBuffer = function () {
			return this.bb;
		};
		_.Builder.prototype.asUint8Array = function () {
			return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
		};
		_.Builder.prototype.prep = function (r, e) {
			r > this.minalign && (this.minalign = r);
			for (
				var t = (~(this.bb.capacity() - this.space + e) + 1) & (r - 1);
				this.space < t + r + e;

			) {
				var n = this.bb.capacity();
				(this.bb = _.Builder.growByteBuffer(this.bb)), (this.space += this.bb.capacity() - n);
			}
			this.pad(t);
		};
		_.Builder.prototype.pad = function (r) {
			for (var e = 0; e < r; e++) this.bb.writeInt8(--this.space, 0);
		};
		_.Builder.prototype.writeInt8 = function (r) {
			this.bb.writeInt8((this.space -= 1), r);
		};
		_.Builder.prototype.writeInt16 = function (r) {
			this.bb.writeInt16((this.space -= 2), r);
		};
		_.Builder.prototype.writeInt32 = function (r) {
			this.bb.writeInt32((this.space -= 4), r);
		};
		_.Builder.prototype.writeInt64 = function (r) {
			this.bb.writeInt64((this.space -= 8), r);
		};
		_.Builder.prototype.writeFloat32 = function (r) {
			this.bb.writeFloat32((this.space -= 4), r);
		};
		_.Builder.prototype.writeFloat64 = function (r) {
			this.bb.writeFloat64((this.space -= 8), r);
		};
		_.Builder.prototype.addInt8 = function (r) {
			this.prep(1, 0), this.writeInt8(r);
		};
		_.Builder.prototype.addInt16 = function (r) {
			this.prep(2, 0), this.writeInt16(r);
		};
		_.Builder.prototype.addInt32 = function (r) {
			this.prep(4, 0), this.writeInt32(r);
		};
		_.Builder.prototype.addInt64 = function (r) {
			this.prep(8, 0), this.writeInt64(r);
		};
		_.Builder.prototype.addFloat32 = function (r) {
			this.prep(4, 0), this.writeFloat32(r);
		};
		_.Builder.prototype.addFloat64 = function (r) {
			this.prep(8, 0), this.writeFloat64(r);
		};
		_.Builder.prototype.addFieldInt8 = function (r, e, t) {
			(this.force_defaults || e != t) && (this.addInt8(e), this.slot(r));
		};
		_.Builder.prototype.addFieldInt16 = function (r, e, t) {
			(this.force_defaults || e != t) && (this.addInt16(e), this.slot(r));
		};
		_.Builder.prototype.addFieldInt32 = function (r, e, t) {
			(this.force_defaults || e != t) && (this.addInt32(e), this.slot(r));
		};
		_.Builder.prototype.addFieldInt64 = function (r, e, t) {
			(this.force_defaults || !e.equals(t)) && (this.addInt64(e), this.slot(r));
		};
		_.Builder.prototype.addFieldFloat32 = function (r, e, t) {
			(this.force_defaults || e != t) && (this.addFloat32(e), this.slot(r));
		};
		_.Builder.prototype.addFieldFloat64 = function (r, e, t) {
			(this.force_defaults || e != t) && (this.addFloat64(e), this.slot(r));
		};
		_.Builder.prototype.addFieldOffset = function (r, e, t) {
			(this.force_defaults || e != t) && (this.addOffset(e), this.slot(r));
		};
		_.Builder.prototype.addFieldStruct = function (r, e, t) {
			e != t && (this.nested(e), this.slot(r));
		};
		_.Builder.prototype.nested = function (r) {
			if (r != this.offset()) throw new Error('FlatBuffers: struct must be serialized inline.');
		};
		_.Builder.prototype.notNested = function () {
			if (this.isNested) throw new Error('FlatBuffers: object serialization must not be nested.');
		};
		_.Builder.prototype.slot = function (r) {
			this.vtable[r] = this.offset();
		};
		_.Builder.prototype.offset = function () {
			return this.bb.capacity() - this.space;
		};
		_.Builder.growByteBuffer = function (r) {
			var e = r.capacity();
			if (e & 3221225472) throw new Error('FlatBuffers: cannot grow buffer beyond 2 gigabytes.');
			var t = e << 1,
				n = _.ByteBuffer.allocate(t);
			return n.setPosition(t - e), n.bytes().set(r.bytes(), t - e), n;
		};
		_.Builder.prototype.addOffset = function (r) {
			this.prep(_.SIZEOF_INT, 0), this.writeInt32(this.offset() - r + _.SIZEOF_INT);
		};
		_.Builder.prototype.startObject = function (r) {
			this.notNested(), this.vtable == null && (this.vtable = []), (this.vtable_in_use = r);
			for (var e = 0; e < r; e++) this.vtable[e] = 0;
			(this.isNested = !0), (this.object_start = this.offset());
		};
		_.Builder.prototype.endObject = function () {
			if (this.vtable == null || !this.isNested)
				throw new Error('FlatBuffers: endObject called without startObject');
			this.addInt32(0);
			for (var r = this.offset(), e = this.vtable_in_use - 1; e >= 0 && this.vtable[e] == 0; e--);
			for (var t = e + 1; e >= 0; e--) this.addInt16(this.vtable[e] != 0 ? r - this.vtable[e] : 0);
			var n = 2;
			this.addInt16(r - this.object_start);
			var i = (t + n) * _.SIZEOF_SHORT;
			this.addInt16(i);
			var s = 0,
				o = this.space;
			e: for (e = 0; e < this.vtables.length; e++) {
				var a = this.bb.capacity() - this.vtables[e];
				if (i == this.bb.readInt16(a)) {
					for (var l = _.SIZEOF_SHORT; l < i; l += _.SIZEOF_SHORT)
						if (this.bb.readInt16(o + l) != this.bb.readInt16(a + l)) continue e;
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
		_.Builder.prototype.finish = function (r, e, t) {
			var n = t ? _.SIZE_PREFIX_LENGTH : 0;
			if (e) {
				var i = e;
				if (
					(this.prep(this.minalign, _.SIZEOF_INT + _.FILE_IDENTIFIER_LENGTH + n),
					i.length != _.FILE_IDENTIFIER_LENGTH)
				)
					throw new Error(
						'FlatBuffers: file identifier must be length ' + _.FILE_IDENTIFIER_LENGTH
					);
				for (var s = _.FILE_IDENTIFIER_LENGTH - 1; s >= 0; s--) this.writeInt8(i.charCodeAt(s));
			}
			this.prep(this.minalign, _.SIZEOF_INT + n),
				this.addOffset(r),
				n && this.addInt32(this.bb.capacity() - this.space),
				this.bb.setPosition(this.space);
		};
		_.Builder.prototype.finishSizePrefixed = function (r, e) {
			this.finish(r, e, !0);
		};
		_.Builder.prototype.requiredField = function (r, e) {
			var t = this.bb.capacity() - r,
				n = t - this.bb.readInt32(t),
				i = this.bb.readInt16(n + e) != 0;
			if (!i) throw new Error('FlatBuffers: field ' + e + ' must be set');
		};
		_.Builder.prototype.startVector = function (r, e, t) {
			this.notNested(),
				(this.vector_num_elems = e),
				this.prep(_.SIZEOF_INT, r * e),
				this.prep(t, r * e);
		};
		_.Builder.prototype.endVector = function () {
			return this.writeInt32(this.vector_num_elems), this.offset();
		};
		_.Builder.prototype.createString = function (r) {
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
			for (var t = 0, o = this.space, a = this.bb.bytes(); t < e.length; t++) a[o++] = e[t];
			return this.endVector();
		};
		_.Builder.prototype.createLong = function (r, e) {
			return _.Long.create(r, e);
		};
		_.ByteBuffer = function (r) {
			(this.bytes_ = r), (this.position_ = 0);
		};
		_.ByteBuffer.allocate = function (r) {
			return new _.ByteBuffer(new Uint8Array(r));
		};
		_.ByteBuffer.prototype.clear = function () {
			this.position_ = 0;
		};
		_.ByteBuffer.prototype.bytes = function () {
			return this.bytes_;
		};
		_.ByteBuffer.prototype.position = function () {
			return this.position_;
		};
		_.ByteBuffer.prototype.setPosition = function (r) {
			this.position_ = r;
		};
		_.ByteBuffer.prototype.capacity = function () {
			return this.bytes_.length;
		};
		_.ByteBuffer.prototype.readInt8 = function (r) {
			return (this.readUint8(r) << 24) >> 24;
		};
		_.ByteBuffer.prototype.readUint8 = function (r) {
			return this.bytes_[r];
		};
		_.ByteBuffer.prototype.readInt16 = function (r) {
			return (this.readUint16(r) << 16) >> 16;
		};
		_.ByteBuffer.prototype.readUint16 = function (r) {
			return this.bytes_[r] | (this.bytes_[r + 1] << 8);
		};
		_.ByteBuffer.prototype.readInt32 = function (r) {
			return (
				this.bytes_[r] |
				(this.bytes_[r + 1] << 8) |
				(this.bytes_[r + 2] << 16) |
				(this.bytes_[r + 3] << 24)
			);
		};
		_.ByteBuffer.prototype.readUint32 = function (r) {
			return this.readInt32(r) >>> 0;
		};
		_.ByteBuffer.prototype.readInt64 = function (r) {
			return new _.Long(this.readInt32(r), this.readInt32(r + 4));
		};
		_.ByteBuffer.prototype.readUint64 = function (r) {
			return new _.Long(this.readUint32(r), this.readUint32(r + 4));
		};
		_.ByteBuffer.prototype.readFloat32 = function (r) {
			return (_.int32[0] = this.readInt32(r)), _.float32[0];
		};
		_.ByteBuffer.prototype.readFloat64 = function (r) {
			return (
				(_.int32[_.isLittleEndian ? 0 : 1] = this.readInt32(r)),
				(_.int32[_.isLittleEndian ? 1 : 0] = this.readInt32(r + 4)),
				_.float64[0]
			);
		};
		_.ByteBuffer.prototype.writeInt8 = function (r, e) {
			this.bytes_[r] = e;
		};
		_.ByteBuffer.prototype.writeUint8 = function (r, e) {
			this.bytes_[r] = e;
		};
		_.ByteBuffer.prototype.writeInt16 = function (r, e) {
			(this.bytes_[r] = e), (this.bytes_[r + 1] = e >> 8);
		};
		_.ByteBuffer.prototype.writeUint16 = function (r, e) {
			(this.bytes_[r] = e), (this.bytes_[r + 1] = e >> 8);
		};
		_.ByteBuffer.prototype.writeInt32 = function (r, e) {
			(this.bytes_[r] = e),
				(this.bytes_[r + 1] = e >> 8),
				(this.bytes_[r + 2] = e >> 16),
				(this.bytes_[r + 3] = e >> 24);
		};
		_.ByteBuffer.prototype.writeUint32 = function (r, e) {
			(this.bytes_[r] = e),
				(this.bytes_[r + 1] = e >> 8),
				(this.bytes_[r + 2] = e >> 16),
				(this.bytes_[r + 3] = e >> 24);
		};
		_.ByteBuffer.prototype.writeInt64 = function (r, e) {
			this.writeInt32(r, e.low), this.writeInt32(r + 4, e.high);
		};
		_.ByteBuffer.prototype.writeUint64 = function (r, e) {
			this.writeUint32(r, e.low), this.writeUint32(r + 4, e.high);
		};
		_.ByteBuffer.prototype.writeFloat32 = function (r, e) {
			(_.float32[0] = e), this.writeInt32(r, _.int32[0]);
		};
		_.ByteBuffer.prototype.writeFloat64 = function (r, e) {
			(_.float64[0] = e),
				this.writeInt32(r, _.int32[_.isLittleEndian ? 0 : 1]),
				this.writeInt32(r + 4, _.int32[_.isLittleEndian ? 1 : 0]);
		};
		_.ByteBuffer.prototype.getBufferIdentifier = function () {
			if (this.bytes_.length < this.position_ + _.SIZEOF_INT + _.FILE_IDENTIFIER_LENGTH)
				throw new Error('FlatBuffers: ByteBuffer is too short to contain an identifier.');
			for (var r = '', e = 0; e < _.FILE_IDENTIFIER_LENGTH; e++)
				r += String.fromCharCode(this.readInt8(this.position_ + _.SIZEOF_INT + e));
			return r;
		};
		_.ByteBuffer.prototype.__offset = function (r, e) {
			var t = r - this.readInt32(r);
			return e < this.readInt16(t) ? this.readInt16(t + e) : 0;
		};
		_.ByteBuffer.prototype.__union = function (r, e) {
			return (r.bb_pos = e + this.readInt32(e)), (r.bb = this), r;
		};
		_.ByteBuffer.prototype.__string = function (r, e) {
			r += this.readInt32(r);
			var t = this.readInt32(r),
				n = '',
				i = 0;
			if (((r += _.SIZEOF_INT), e === _.Encoding.UTF8_BYTES)) return this.bytes_.subarray(r, r + t);
			for (; i < t; ) {
				var s,
					o = this.readUint8(r + i++);
				if (o < 192) s = o;
				else {
					var a = this.readUint8(r + i++);
					if (o < 224) s = ((o & 31) << 6) | (a & 63);
					else {
						var l = this.readUint8(r + i++);
						if (o < 240) s = ((o & 15) << 12) | ((a & 63) << 6) | (l & 63);
						else {
							var f = this.readUint8(r + i++);
							s = ((o & 7) << 18) | ((a & 63) << 12) | ((l & 63) << 6) | (f & 63);
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
		_.ByteBuffer.prototype.__indirect = function (r) {
			return r + this.readInt32(r);
		};
		_.ByteBuffer.prototype.__vector = function (r) {
			return r + this.readInt32(r) + _.SIZEOF_INT;
		};
		_.ByteBuffer.prototype.__vector_len = function (r) {
			return this.readInt32(r + this.readInt32(r));
		};
		_.ByteBuffer.prototype.__has_identifier = function (r) {
			if (r.length != _.FILE_IDENTIFIER_LENGTH)
				throw new Error('FlatBuffers: file identifier must be length ' + _.FILE_IDENTIFIER_LENGTH);
			for (var e = 0; e < _.FILE_IDENTIFIER_LENGTH; e++)
				if (r.charCodeAt(e) != this.readInt8(this.position_ + _.SIZEOF_INT + e)) return !1;
			return !0;
		};
		_.ByteBuffer.prototype.createLong = function (r, e) {
			return _.Long.create(r, e);
		};
		Xf.flatbuffers = _;
	});
	var An = g((ri) => {
		'use strict';
		Object.defineProperty(ri, '__esModule', { value: !0 });
		ri.encodeUtf8 = ri.decodeUtf8 = void 0;
		var Nv = new TextDecoder('utf-8');
		ri.decodeUtf8 = (r) => Nv.decode(r);
		var Lv = new TextEncoder();
		ri.encodeUtf8 = (r) => Lv.encode(r);
	});
	var ni = g((ut) => {
		'use strict';
		Object.defineProperty(ut, '__esModule', { value: !0 });
		ut.AsyncQueue = ut.ReadableInterop = ut.ArrowJSON = ut.ITERATOR_DONE = void 0;
		var ls = tt(),
			Qf = ds();
		ut.ITERATOR_DONE = Object.freeze({ done: !0, value: void 0 });
		var eh = class {
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
		ut.ArrowJSON = eh;
		var Vu = class {
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
		ut.ReadableInterop = Vu;
		var th = class extends Vu {
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
				return ls.__awaiter(this, void 0, void 0, function* () {
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
					for (; e.length > 0; ) e.shift().resolve(ut.ITERATOR_DONE);
					this._closedPromiseResolve(), (this._closedPromiseResolve = void 0);
				}
			}
			[Symbol.asyncIterator]() {
				return this;
			}
			toDOMStream(e) {
				return Qf.default.toDOMStream(
					this._closedPromiseResolve || this._error ? this : this._values,
					e
				);
			}
			toNodeStream(e) {
				return Qf.default.toNodeStream(
					this._closedPromiseResolve || this._error ? this : this._values,
					e
				);
			}
			throw(e) {
				return ls.__awaiter(this, void 0, void 0, function* () {
					return yield this.abort(e), ut.ITERATOR_DONE;
				});
			}
			return(e) {
				return ls.__awaiter(this, void 0, void 0, function* () {
					return yield this.close(), ut.ITERATOR_DONE;
				});
			}
			read(e) {
				return ls.__awaiter(this, void 0, void 0, function* () {
					return (yield this.next(e, 'read')).value;
				});
			}
			peek(e) {
				return ls.__awaiter(this, void 0, void 0, function* () {
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
					: Promise.resolve(ut.ITERATOR_DONE);
			}
			_ensureOpen() {
				if (this._closedPromiseResolve) return !0;
				throw new Error('AsyncQueue is closed');
			}
		};
		ut.AsyncQueue = th;
	});
	var rt = g((U) => {
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
		var bo = ni(),
			[kv, xv] = (() => {
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
		U.BigInt = kv;
		U.BigIntAvailable = xv;
		var [Cv, jv] = (() => {
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
		U.BigInt64Array = Cv;
		U.BigInt64ArrayAvailable = jv;
		var [qv, Wv] = (() => {
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
		U.BigUint64Array = qv;
		U.BigUint64ArrayAvailable = Wv;
		var Pu = (r) => typeof r == 'number',
			rh = (r) => typeof r == 'boolean',
			Ze = (r) => typeof r == 'function';
		U.isObject = (r) => r != null && Object(r) === r;
		U.isPromise = (r) => U.isObject(r) && Ze(r.then);
		U.isObservable = (r) => U.isObject(r) && Ze(r.subscribe);
		U.isIterable = (r) => U.isObject(r) && Ze(r[Symbol.iterator]);
		U.isAsyncIterable = (r) => U.isObject(r) && Ze(r[Symbol.asyncIterator]);
		U.isArrowJSON = (r) => U.isObject(r) && U.isObject(r.schema);
		U.isArrayLike = (r) => U.isObject(r) && Pu(r.length);
		U.isIteratorResult = (r) => U.isObject(r) && 'done' in r && 'value' in r;
		U.isUnderlyingSink = (r) =>
			U.isObject(r) && Ze(r.abort) && Ze(r.close) && Ze(r.start) && Ze(r.write);
		U.isFileHandle = (r) => U.isObject(r) && Ze(r.stat) && Pu(r.fd);
		U.isFSReadStream = (r) => U.isReadableNodeStream(r) && Pu(r.bytesRead);
		U.isFetchResponse = (r) => U.isObject(r) && U.isReadableDOMStream(r.body);
		U.isWritableDOMStream = (r) =>
			U.isObject(r) && Ze(r.abort) && Ze(r.getWriter) && !(r instanceof bo.ReadableInterop);
		U.isReadableDOMStream = (r) =>
			U.isObject(r) && Ze(r.cancel) && Ze(r.getReader) && !(r instanceof bo.ReadableInterop);
		U.isWritableNodeStream = (r) =>
			U.isObject(r) &&
			Ze(r.end) &&
			Ze(r.write) &&
			rh(r.writable) &&
			!(r instanceof bo.ReadableInterop);
		U.isReadableNodeStream = (r) =>
			U.isObject(r) &&
			Ze(r.read) &&
			Ze(r.pipe) &&
			rh(r.readable) &&
			!(r instanceof bo.ReadableInterop);
	});
	var We = g((O) => {
		'use strict';
		Object.defineProperty(O, '__esModule', { value: !0 });
		O.compareArrayLike =
			O.rebaseValueOffsets =
			O.toUint8ClampedArrayAsyncIterator =
			O.toFloat64ArrayAsyncIterator =
			O.toFloat32ArrayAsyncIterator =
			O.toUint32ArrayAsyncIterator =
			O.toUint16ArrayAsyncIterator =
			O.toUint8ArrayAsyncIterator =
			O.toInt32ArrayAsyncIterator =
			O.toInt16ArrayAsyncIterator =
			O.toInt8ArrayAsyncIterator =
			O.toArrayBufferViewAsyncIterator =
			O.toUint8ClampedArrayIterator =
			O.toFloat64ArrayIterator =
			O.toFloat32ArrayIterator =
			O.toUint32ArrayIterator =
			O.toUint16ArrayIterator =
			O.toUint8ArrayIterator =
			O.toInt32ArrayIterator =
			O.toInt16ArrayIterator =
			O.toInt8ArrayIterator =
			O.toArrayBufferViewIterator =
			O.toUint8ClampedArray =
			O.toFloat64Array =
			O.toFloat32Array =
			O.toBigUint64Array =
			O.toUint32Array =
			O.toUint16Array =
			O.toUint8Array =
			O.toBigInt64Array =
			O.toInt32Array =
			O.toInt16Array =
			O.toInt8Array =
			O.toArrayBufferView =
			O.joinUint8Arrays =
			O.memcpy =
				void 0;
		var Le = tt(),
			zv = Tr(),
			Hv = An(),
			Yv = zv.flatbuffers.ByteBuffer,
			Dn = rt(),
			Nu = typeof SharedArrayBuffer != 'undefined' ? SharedArrayBuffer : ArrayBuffer;
		function Gv(r) {
			let e = r[0] ? [r[0]] : [],
				t,
				n,
				i,
				s;
			for (let o, a, l = 0, f = 0, y = r.length; ++l < y; ) {
				if (
					((o = e[f]), (a = r[l]), !o || !a || o.buffer !== a.buffer || a.byteOffset < o.byteOffset)
				) {
					a && (e[++f] = a);
					continue;
				}
				if (
					(({ byteOffset: t, byteLength: i } = o),
					({ byteOffset: n, byteLength: s } = a),
					t + i < n || n + s < t)
				) {
					a && (e[++f] = a);
					continue;
				}
				e[f] = new Uint8Array(o.buffer, t, n - t + s);
			}
			return e;
		}
		function Lu(r, e, t = 0, n = e.byteLength) {
			let i = r.byteLength,
				s = new Uint8Array(r.buffer, r.byteOffset, i),
				o = new Uint8Array(e.buffer, e.byteOffset, Math.min(n, i));
			return s.set(o, t), r;
		}
		O.memcpy = Lu;
		function $v(r, e) {
			let t = Gv(r),
				n = t.reduce((y, F) => y + F.byteLength, 0),
				i,
				s,
				o,
				a = 0,
				l = -1,
				f = Math.min(e || 1 / 0, n);
			for (let y = t.length; ++l < y; ) {
				if (((i = t[l]), (s = i.subarray(0, Math.min(i.length, f - a))), f <= a + s.length)) {
					s.length < i.length ? (t[l] = i.subarray(s.length)) : s.length === i.length && l++,
						o ? Lu(o, s, a) : (o = s);
					break;
				}
				Lu(o || (o = new Uint8Array(f)), s, a), (a += s.length);
			}
			return [o || new Uint8Array(0), t.slice(l), n - (o ? o.byteLength : 0)];
		}
		O.joinUint8Arrays = $v;
		function st(r, e) {
			let t = Dn.isIteratorResult(e) ? e.value : e;
			return t instanceof r
				? r === Uint8Array
					? new r(t.buffer, t.byteOffset, t.byteLength)
					: t
				: t
				? (typeof t == 'string' && (t = Hv.encodeUtf8(t)),
				  t instanceof ArrayBuffer
						? new r(t)
						: t instanceof Nu
						? new r(t)
						: t instanceof Yv
						? st(r, t.bytes())
						: ArrayBuffer.isView(t)
						? t.byteLength <= 0
							? new r(0)
							: new r(t.buffer, t.byteOffset, t.byteLength / r.BYTES_PER_ELEMENT)
						: r.from(t))
				: new r(0);
		}
		O.toArrayBufferView = st;
		O.toInt8Array = (r) => st(Int8Array, r);
		O.toInt16Array = (r) => st(Int16Array, r);
		O.toInt32Array = (r) => st(Int32Array, r);
		O.toBigInt64Array = (r) => st(Dn.BigInt64Array, r);
		O.toUint8Array = (r) => st(Uint8Array, r);
		O.toUint16Array = (r) => st(Uint16Array, r);
		O.toUint32Array = (r) => st(Uint32Array, r);
		O.toBigUint64Array = (r) => st(Dn.BigUint64Array, r);
		O.toFloat32Array = (r) => st(Float32Array, r);
		O.toFloat64Array = (r) => st(Float64Array, r);
		O.toUint8ClampedArray = (r) => st(Uint8ClampedArray, r);
		var ku = (r) => (r.next(), r);
		function* Xt(r, e) {
			let t = function* (i) {
					yield i;
				},
				n =
					typeof e == 'string' ||
					ArrayBuffer.isView(e) ||
					e instanceof ArrayBuffer ||
					e instanceof Nu
						? t(e)
						: Dn.isIterable(e)
						? e
						: t(e);
			return (
				yield* ku(
					(function* (i) {
						let s = null;
						do s = i.next(yield st(r, s));
						while (!s.done);
					})(n[Symbol.iterator]())
				),
				new r()
			);
		}
		O.toArrayBufferViewIterator = Xt;
		O.toInt8ArrayIterator = (r) => Xt(Int8Array, r);
		O.toInt16ArrayIterator = (r) => Xt(Int16Array, r);
		O.toInt32ArrayIterator = (r) => Xt(Int32Array, r);
		O.toUint8ArrayIterator = (r) => Xt(Uint8Array, r);
		O.toUint16ArrayIterator = (r) => Xt(Uint16Array, r);
		O.toUint32ArrayIterator = (r) => Xt(Uint32Array, r);
		O.toFloat32ArrayIterator = (r) => Xt(Float32Array, r);
		O.toFloat64ArrayIterator = (r) => Xt(Float64Array, r);
		O.toUint8ClampedArrayIterator = (r) => Xt(Uint8ClampedArray, r);
		function jt(r, e) {
			return Le.__asyncGenerator(this, arguments, function* () {
				if (Dn.isPromise(e))
					return yield Le.__await(
						yield Le.__await(
							yield* Le.__asyncDelegator(Le.__asyncValues(jt(r, yield Le.__await(e))))
						)
					);
				let n = function (o) {
						return Le.__asyncGenerator(this, arguments, function* () {
							yield yield Le.__await(yield Le.__await(o));
						});
					},
					i = function (o) {
						return Le.__asyncGenerator(this, arguments, function* () {
							yield Le.__await(
								yield* Le.__asyncDelegator(
									Le.__asyncValues(
										ku(
											(function* (a) {
												let l = null;
												do l = a.next(yield l == null ? void 0 : l.value);
												while (!l.done);
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
						e instanceof Nu
							? n(e)
							: Dn.isIterable(e)
							? i(e)
							: Dn.isAsyncIterable(e)
							? e
							: n(e);
				return (
					yield Le.__await(
						yield* Le.__asyncDelegator(
							Le.__asyncValues(
								ku(
									(function (o) {
										return Le.__asyncGenerator(this, arguments, function* () {
											let a = null;
											do a = yield Le.__await(o.next(yield yield Le.__await(st(r, a))));
											while (!a.done);
										});
									})(s[Symbol.asyncIterator]())
								)
							)
						)
					),
					yield Le.__await(new r())
				);
			});
		}
		O.toArrayBufferViewAsyncIterator = jt;
		O.toInt8ArrayAsyncIterator = (r) => jt(Int8Array, r);
		O.toInt16ArrayAsyncIterator = (r) => jt(Int16Array, r);
		O.toInt32ArrayAsyncIterator = (r) => jt(Int32Array, r);
		O.toUint8ArrayAsyncIterator = (r) => jt(Uint8Array, r);
		O.toUint16ArrayAsyncIterator = (r) => jt(Uint16Array, r);
		O.toUint32ArrayAsyncIterator = (r) => jt(Uint32Array, r);
		O.toFloat32ArrayAsyncIterator = (r) => jt(Float32Array, r);
		O.toFloat64ArrayAsyncIterator = (r) => jt(Float64Array, r);
		O.toUint8ClampedArrayAsyncIterator = (r) => jt(Uint8ClampedArray, r);
		function Jv(r, e, t) {
			if (r !== 0) {
				t = t.slice(0, e + 1);
				for (let n = -1; ++n <= e; ) t[n] += r;
			}
			return t;
		}
		O.rebaseValueOffsets = Jv;
		function Kv(r, e) {
			let t = 0,
				n = r.length;
			if (n !== e.length) return !1;
			if (n > 0)
				do if (r[t] !== e[t]) return !1;
				while (++t < n);
			return !0;
		}
		O.compareArrayLike = Kv;
	});
	var ds = g((Cu) => {
		'use strict';
		Object.defineProperty(Cu, '__esModule', { value: !0 });
		var fe = tt(),
			ot = We();
		Cu.default = {
			fromIterable(r) {
				return go(Zv(r));
			},
			fromAsyncIterable(r) {
				return go(Xv(r));
			},
			fromDOMStream(r) {
				return go(Qv(r));
			},
			fromNodeStream(r) {
				return go(eT(r));
			},
			toDOMStream(r, e) {
				throw new Error('"toDOMStream" not available in this environment');
			},
			toNodeStream(r, e) {
				throw new Error('"toNodeStream" not available in this environment');
			}
		};
		var go = (r) => (r.next(), r);
		function* Zv(r) {
			let e,
				t = !1,
				n = [],
				i,
				s,
				o,
				a = 0;
			function l() {
				return s === 'peek'
					? ot.joinUint8Arrays(n, o)[0]
					: (([i, n, a] = ot.joinUint8Arrays(n, o)), i);
			}
			({ cmd: s, size: o } = yield null);
			let f = ot.toUint8ArrayIterator(r)[Symbol.iterator]();
			try {
				do
					if (
						(({ done: e, value: i } = isNaN(o - a) ? f.next(void 0) : f.next(o - a)),
						!e && i.byteLength > 0 && (n.push(i), (a += i.byteLength)),
						e || o <= a)
					)
						do ({ cmd: s, size: o } = yield l());
						while (o < a);
				while (!e);
			} catch (y) {
				(t = !0) && typeof f.throw == 'function' && f.throw(y);
			} finally {
				t === !1 && typeof f.return == 'function' && f.return(null);
			}
			return null;
		}
		function Xv(r) {
			return fe.__asyncGenerator(this, arguments, function* () {
				let t,
					n = !1,
					i = [],
					s,
					o,
					a,
					l = 0;
				function f() {
					return o === 'peek'
						? ot.joinUint8Arrays(i, a)[0]
						: (([s, i, l] = ot.joinUint8Arrays(i, a)), s);
				}
				({ cmd: o, size: a } = yield yield fe.__await(null));
				let y = ot.toUint8ArrayAsyncIterator(r)[Symbol.asyncIterator]();
				try {
					do
						if (
							(({ done: t, value: s } = isNaN(a - l)
								? yield fe.__await(y.next(void 0))
								: yield fe.__await(y.next(a - l))),
							!t && s.byteLength > 0 && (i.push(s), (l += s.byteLength)),
							t || a <= l)
						)
							do ({ cmd: o, size: a } = yield yield fe.__await(f()));
							while (a < l);
					while (!t);
				} catch (F) {
					(n = !0) && typeof y.throw == 'function' && (yield fe.__await(y.throw(F)));
				} finally {
					n === !1 &&
						typeof y.return == 'function' &&
						(yield fe.__await(y.return(new Uint8Array(0))));
				}
				return yield fe.__await(null);
			});
		}
		function Qv(r) {
			return fe.__asyncGenerator(this, arguments, function* () {
				let t = !1,
					n = !1,
					i = [],
					s,
					o,
					a,
					l = 0;
				function f() {
					return o === 'peek'
						? ot.joinUint8Arrays(i, a)[0]
						: (([s, i, l] = ot.joinUint8Arrays(i, a)), s);
				}
				({ cmd: o, size: a } = yield yield fe.__await(null));
				let y = new nh(r);
				try {
					do
						if (
							(({ done: t, value: s } = isNaN(a - l)
								? yield fe.__await(y.read(void 0))
								: yield fe.__await(y.read(a - l))),
							!t && s.byteLength > 0 && (i.push(ot.toUint8Array(s)), (l += s.byteLength)),
							t || a <= l)
						)
							do ({ cmd: o, size: a } = yield yield fe.__await(f()));
							while (a < l);
					while (!t);
				} catch (F) {
					(n = !0) && (yield fe.__await(y.cancel(F)));
				} finally {
					n === !1 ? yield fe.__await(y.cancel()) : r.locked && y.releaseLock();
				}
				return yield fe.__await(null);
			});
		}
		var nh = class {
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
				return fe.__awaiter(this, void 0, void 0, function* () {
					let { reader: t, source: n } = this;
					t && (yield t.cancel(e).catch(() => {})), n && n.locked && this.releaseLock();
				});
			}
			read(e) {
				return fe.__awaiter(this, void 0, void 0, function* () {
					if (e === 0) return { done: this.reader == null, value: new Uint8Array(0) };
					let t =
						!this.supportsBYOB || typeof e != 'number'
							? yield this.getDefaultReader().read()
							: yield this.readFromBYOBReader(e);
					return !t.done && (t.value = ot.toUint8Array(t)), t;
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
				return fe.__awaiter(this, void 0, void 0, function* () {
					return yield ih(this.getBYOBReader(), new ArrayBuffer(e), 0, e);
				});
			}
		};
		function ih(r, e, t, n) {
			return fe.__awaiter(this, void 0, void 0, function* () {
				if (t >= n) return { done: !1, value: new Uint8Array(e, 0, n) };
				let { done: i, value: s } = yield r.read(new Uint8Array(e, t, n - t));
				return (t += s.byteLength) < n && !i
					? yield ih(r, s.buffer, t, n)
					: { done: i, value: new Uint8Array(s.buffer, 0, t) };
			});
		}
		var xu = (r, e) => {
			let t = (i) => n([e, i]),
				n;
			return [e, t, new Promise((i) => (n = i) && r.once(e, t))];
		};
		function eT(r) {
			return fe.__asyncGenerator(this, arguments, function* () {
				let t = [],
					n = 'error',
					i = !1,
					s = null,
					o,
					a,
					l = 0,
					f = [],
					y;
				function F() {
					return o === 'peek'
						? ot.joinUint8Arrays(f, a)[0]
						: (([y, f, l] = ot.joinUint8Arrays(f, a)), y);
				}
				if ((({ cmd: o, size: a } = yield yield fe.__await(null)), r.isTTY))
					return yield yield fe.__await(new Uint8Array(0)), yield fe.__await(null);
				try {
					(t[0] = xu(r, 'end')), (t[1] = xu(r, 'error'));
					do {
						if (
							((t[2] = xu(r, 'readable')),
							([n, s] = yield fe.__await(Promise.race(t.map((C) => C[2])))),
							n === 'error')
						)
							break;
						if (
							((i = n === 'end') ||
								(isFinite(a - l)
									? ((y = ot.toUint8Array(r.read(a - l))),
									  y.byteLength < a - l && (y = ot.toUint8Array(r.read(void 0))))
									: (y = ot.toUint8Array(r.read(void 0))),
								y.byteLength > 0 && (f.push(y), (l += y.byteLength))),
							i || a <= l)
						)
							do ({ cmd: o, size: a } = yield yield fe.__await(F()));
							while (a < l);
					} while (!i);
				} finally {
					yield fe.__await(E(t, n === 'error' ? s : null));
				}
				return yield fe.__await(null);
				function E(C, we) {
					return (
						(y = f = null),
						new Promise((me, kt) => {
							for (let [it, ns] of C) r.off(it, ns);
							try {
								let it = r.destroy;
								it && it.call(r, we), (we = void 0);
							} catch (it) {
								we = it || we;
							} finally {
								we != null ? kt(we) : me();
							}
						})
					);
				}
			});
		}
	});
	var Ve = g((ii) => {
		'use strict';
		Object.defineProperty(ii, '__esModule', { value: !0 });
		ii.Vector = ii.AbstractVector = void 0;
		var vo = class {};
		ii.AbstractVector = vo;
		ii.Vector = vo;
		vo.prototype.data = null;
	});
	var Yr = g((S) => {
		'use strict';
		Object.defineProperty(S, '__esModule', { value: !0 });
		S.Schema =
			S.Buffer =
			S.Field =
			S.DictionaryEncoding =
			S.KeyValue =
			S.Duration =
			S.Interval =
			S.Timestamp =
			S.Time =
			S.Date =
			S.Decimal =
			S.Bool =
			S.FixedSizeBinary =
			S.LargeBinary =
			S.LargeUtf8 =
			S.Binary =
			S.Utf8 =
			S.FloatingPoint =
			S.Int =
			S.Union =
			S.Map =
			S.FixedSizeList =
			S.LargeList =
			S.List =
			S.Struct_ =
			S.Null =
			S.Endianness =
			S.DictionaryKind =
			S.Type =
			S.IntervalUnit =
			S.TimeUnit =
			S.DateUnit =
			S.Precision =
			S.UnionMode =
			S.Feature =
			S.MetadataVersion =
				void 0;
		var ge = Tr(),
			tT;
		(function (r) {
			(r[(r.V1 = 0)] = 'V1'),
				(r[(r.V2 = 1)] = 'V2'),
				(r[(r.V3 = 2)] = 'V3'),
				(r[(r.V4 = 3)] = 'V4'),
				(r[(r.V5 = 4)] = 'V5');
		})((tT = S.MetadataVersion || (S.MetadataVersion = {})));
		var rT;
		(function (r) {
			(r[(r.UNUSED = 0)] = 'UNUSED'),
				(r[(r.DICTIONARY_REPLACEMENT = 1)] = 'DICTIONARY_REPLACEMENT'),
				(r[(r.COMPRESSED_BODY = 2)] = 'COMPRESSED_BODY');
		})((rT = S.Feature || (S.Feature = {})));
		var ju;
		(function (r) {
			(r[(r.Sparse = 0)] = 'Sparse'), (r[(r.Dense = 1)] = 'Dense');
		})((ju = S.UnionMode || (S.UnionMode = {})));
		var qu;
		(function (r) {
			(r[(r.HALF = 0)] = 'HALF'), (r[(r.SINGLE = 1)] = 'SINGLE'), (r[(r.DOUBLE = 2)] = 'DOUBLE');
		})((qu = S.Precision || (S.Precision = {})));
		var Wu;
		(function (r) {
			(r[(r.DAY = 0)] = 'DAY'), (r[(r.MILLISECOND = 1)] = 'MILLISECOND');
		})((Wu = S.DateUnit || (S.DateUnit = {})));
		var Fn;
		(function (r) {
			(r[(r.SECOND = 0)] = 'SECOND'),
				(r[(r.MILLISECOND = 1)] = 'MILLISECOND'),
				(r[(r.MICROSECOND = 2)] = 'MICROSECOND'),
				(r[(r.NANOSECOND = 3)] = 'NANOSECOND');
		})((Fn = S.TimeUnit || (S.TimeUnit = {})));
		var zu;
		(function (r) {
			(r[(r.YEAR_MONTH = 0)] = 'YEAR_MONTH'), (r[(r.DAY_TIME = 1)] = 'DAY_TIME');
		})((zu = S.IntervalUnit || (S.IntervalUnit = {})));
		var Hu;
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
		})((Hu = S.Type || (S.Type = {})));
		var Yu;
		(function (r) {
			r[(r.DenseArray = 0)] = 'DenseArray';
		})((Yu = S.DictionaryKind || (S.DictionaryKind = {})));
		var Gu;
		(function (r) {
			(r[(r.Little = 0)] = 'Little'), (r[(r.Big = 1)] = 'Big');
		})((Gu = S.Endianness || (S.Endianness = {})));
		var On = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsNull(e, t) {
				return (t || new On()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsNull(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new On()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startNull(e) {
				e.startObject(0);
			}
			static endNull(e) {
				return e.endObject();
			}
			static createNull(e) {
				return On.startNull(e), On.endNull(e);
			}
		};
		S.Null = On;
		var Mn = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsStruct_(e, t) {
				return (t || new Mn()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsStruct_(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Mn()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startStruct_(e) {
				e.startObject(0);
			}
			static endStruct_(e) {
				return e.endObject();
			}
			static createStruct_(e) {
				return Mn.startStruct_(e), Mn.endStruct_(e);
			}
		};
		S.Struct_ = Mn;
		var En = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsList(e, t) {
				return (t || new En()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsList(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new En()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startList(e) {
				e.startObject(0);
			}
			static endList(e) {
				return e.endObject();
			}
			static createList(e) {
				return En.startList(e), En.endList(e);
			}
		};
		S.List = En;
		var Rn = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsLargeList(e, t) {
				return (t || new Rn()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsLargeList(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Rn()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startLargeList(e) {
				e.startObject(0);
			}
			static endLargeList(e) {
				return e.endObject();
			}
			static createLargeList(e) {
				return Rn.startLargeList(e), Rn.endLargeList(e);
			}
		};
		S.LargeList = Rn;
		var xr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsFixedSizeList(e, t) {
				return (t || new xr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsFixedSizeList(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new xr()).__init(e.readInt32(e.position()) + e.position(), e)
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
				return xr.startFixedSizeList(e), xr.addListSize(e, t), xr.endFixedSizeList(e);
			}
		};
		S.FixedSizeList = xr;
		var Cr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsMap(e, t) {
				return (t || new Cr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsMap(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Cr()).__init(e.readInt32(e.position()) + e.position(), e)
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
				return Cr.startMap(e), Cr.addKeysSorted(e, t), Cr.endMap(e);
			}
		};
		S.Map = Cr;
		var Ir = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsUnion(e, t) {
				return (t || new Ir()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsUnion(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Ir()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			mode() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : ju.Sparse;
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
				e.addFieldInt16(0, t, ju.Sparse);
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
				return Ir.startUnion(e), Ir.addMode(e, t), Ir.addTypeIds(e, n), Ir.endUnion(e);
			}
		};
		S.Union = Ir;
		var Qt = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsInt(e, t) {
				return (t || new Qt()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsInt(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Qt()).__init(e.readInt32(e.position()) + e.position(), e)
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
				return Qt.startInt(e), Qt.addBitWidth(e, t), Qt.addIsSigned(e, n), Qt.endInt(e);
			}
		};
		S.Int = Qt;
		var jr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsFloatingPoint(e, t) {
				return (t || new jr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsFloatingPoint(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new jr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			precision() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : qu.HALF;
			}
			static startFloatingPoint(e) {
				e.startObject(1);
			}
			static addPrecision(e, t) {
				e.addFieldInt16(0, t, qu.HALF);
			}
			static endFloatingPoint(e) {
				return e.endObject();
			}
			static createFloatingPoint(e, t) {
				return jr.startFloatingPoint(e), jr.addPrecision(e, t), jr.endFloatingPoint(e);
			}
		};
		S.FloatingPoint = jr;
		var Un = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsUtf8(e, t) {
				return (t || new Un()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsUtf8(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Un()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startUtf8(e) {
				e.startObject(0);
			}
			static endUtf8(e) {
				return e.endObject();
			}
			static createUtf8(e) {
				return Un.startUtf8(e), Un.endUtf8(e);
			}
		};
		S.Utf8 = Un;
		var Vn = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsBinary(e, t) {
				return (t || new Vn()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsBinary(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Vn()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startBinary(e) {
				e.startObject(0);
			}
			static endBinary(e) {
				return e.endObject();
			}
			static createBinary(e) {
				return Vn.startBinary(e), Vn.endBinary(e);
			}
		};
		S.Binary = Vn;
		var Pn = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsLargeUtf8(e, t) {
				return (t || new Pn()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsLargeUtf8(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Pn()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startLargeUtf8(e) {
				e.startObject(0);
			}
			static endLargeUtf8(e) {
				return e.endObject();
			}
			static createLargeUtf8(e) {
				return Pn.startLargeUtf8(e), Pn.endLargeUtf8(e);
			}
		};
		S.LargeUtf8 = Pn;
		var Nn = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsLargeBinary(e, t) {
				return (t || new Nn()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsLargeBinary(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Nn()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startLargeBinary(e) {
				e.startObject(0);
			}
			static endLargeBinary(e) {
				return e.endObject();
			}
			static createLargeBinary(e) {
				return Nn.startLargeBinary(e), Nn.endLargeBinary(e);
			}
		};
		S.LargeBinary = Nn;
		var qr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsFixedSizeBinary(e, t) {
				return (t || new qr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsFixedSizeBinary(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new qr()).__init(e.readInt32(e.position()) + e.position(), e)
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
				return qr.startFixedSizeBinary(e), qr.addByteWidth(e, t), qr.endFixedSizeBinary(e);
			}
		};
		S.FixedSizeBinary = qr;
		var Ln = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsBool(e, t) {
				return (t || new Ln()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsBool(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Ln()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startBool(e) {
				e.startObject(0);
			}
			static endBool(e) {
				return e.endObject();
			}
			static createBool(e) {
				return Ln.startBool(e), Ln.endBool(e);
			}
		};
		S.Bool = Ln;
		var er = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsDecimal(e, t) {
				return (t || new er()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsDecimal(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new er()).__init(e.readInt32(e.position()) + e.position(), e)
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
					er.startDecimal(e),
					er.addPrecision(e, t),
					er.addScale(e, n),
					er.addBitWidth(e, i),
					er.endDecimal(e)
				);
			}
		};
		S.Decimal = er;
		var Wr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsDate(e, t) {
				return (t || new Wr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsDate(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Wr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			unit() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : Wu.MILLISECOND;
			}
			static startDate(e) {
				e.startObject(1);
			}
			static addUnit(e, t) {
				e.addFieldInt16(0, t, Wu.MILLISECOND);
			}
			static endDate(e) {
				return e.endObject();
			}
			static createDate(e, t) {
				return Wr.startDate(e), Wr.addUnit(e, t), Wr.endDate(e);
			}
		};
		S.Date = Wr;
		var Br = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsTime(e, t) {
				return (t || new Br()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsTime(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Br()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			unit() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : Fn.MILLISECOND;
			}
			bitWidth() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.readInt32(this.bb_pos + e) : 32;
			}
			static startTime(e) {
				e.startObject(2);
			}
			static addUnit(e, t) {
				e.addFieldInt16(0, t, Fn.MILLISECOND);
			}
			static addBitWidth(e, t) {
				e.addFieldInt32(1, t, 32);
			}
			static endTime(e) {
				return e.endObject();
			}
			static createTime(e, t, n) {
				return Br.startTime(e), Br.addUnit(e, t), Br.addBitWidth(e, n), Br.endTime(e);
			}
		};
		S.Time = Br;
		var wr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsTimestamp(e, t) {
				return (t || new wr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsTimestamp(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new wr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			unit() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : Fn.SECOND;
			}
			timezone(e) {
				let t = this.bb.__offset(this.bb_pos, 6);
				return t ? this.bb.__string(this.bb_pos + t, e) : null;
			}
			static startTimestamp(e) {
				e.startObject(2);
			}
			static addUnit(e, t) {
				e.addFieldInt16(0, t, Fn.SECOND);
			}
			static addTimezone(e, t) {
				e.addFieldOffset(1, t, 0);
			}
			static endTimestamp(e) {
				return e.endObject();
			}
			static createTimestamp(e, t, n) {
				return wr.startTimestamp(e), wr.addUnit(e, t), wr.addTimezone(e, n), wr.endTimestamp(e);
			}
		};
		S.Timestamp = wr;
		var zr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsInterval(e, t) {
				return (t || new zr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsInterval(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new zr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			unit() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : zu.YEAR_MONTH;
			}
			static startInterval(e) {
				e.startObject(1);
			}
			static addUnit(e, t) {
				e.addFieldInt16(0, t, zu.YEAR_MONTH);
			}
			static endInterval(e) {
				return e.endObject();
			}
			static createInterval(e, t) {
				return zr.startInterval(e), zr.addUnit(e, t), zr.endInterval(e);
			}
		};
		S.Interval = zr;
		var Hr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsDuration(e, t) {
				return (t || new Hr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsDuration(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Hr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			unit() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : Fn.MILLISECOND;
			}
			static startDuration(e) {
				e.startObject(1);
			}
			static addUnit(e, t) {
				e.addFieldInt16(0, t, Fn.MILLISECOND);
			}
			static endDuration(e) {
				return e.endObject();
			}
			static createDuration(e, t) {
				return Hr.startDuration(e), Hr.addUnit(e, t), Hr.endDuration(e);
			}
		};
		S.Duration = Hr;
		var qt = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsKeyValue(e, t) {
				return (t || new qt()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsKeyValue(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new qt()).__init(e.readInt32(e.position()) + e.position(), e)
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
				return qt.startKeyValue(e), qt.addKey(e, t), qt.addValue(e, n), qt.endKeyValue(e);
			}
		};
		S.KeyValue = qt;
		var bt = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsDictionaryEncoding(e, t) {
				return (t || new bt()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsDictionaryEncoding(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new bt()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			id() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt64(this.bb_pos + e) : this.bb.createLong(0, 0);
			}
			indexType(e) {
				let t = this.bb.__offset(this.bb_pos, 6);
				return t ? (e || new Qt()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
			}
			isOrdered() {
				let e = this.bb.__offset(this.bb_pos, 8);
				return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
			}
			dictionaryKind() {
				let e = this.bb.__offset(this.bb_pos, 10);
				return e ? this.bb.readInt16(this.bb_pos + e) : Yu.DenseArray;
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
				e.addFieldInt16(3, t, Yu.DenseArray);
			}
			static endDictionaryEncoding(e) {
				return e.endObject();
			}
			static createDictionaryEncoding(e, t, n, i, s) {
				return (
					bt.startDictionaryEncoding(e),
					bt.addId(e, t),
					bt.addIndexType(e, n),
					bt.addIsOrdered(e, i),
					bt.addDictionaryKind(e, s),
					bt.endDictionaryEncoding(e)
				);
			}
		};
		S.DictionaryEncoding = bt;
		var nt = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsField(e, t) {
				return (t || new nt()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsField(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new nt()).__init(e.readInt32(e.position()) + e.position(), e)
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
				return e ? this.bb.readUint8(this.bb_pos + e) : Hu.NONE;
			}
			type(e) {
				let t = this.bb.__offset(this.bb_pos, 10);
				return t ? this.bb.__union(e, this.bb_pos + t) : null;
			}
			dictionary(e) {
				let t = this.bb.__offset(this.bb_pos, 12);
				return t ? (e || new bt()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
			}
			children(e, t) {
				let n = this.bb.__offset(this.bb_pos, 14);
				return n
					? (t || new nt()).__init(
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
					? (t || new qt()).__init(
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
				e.addFieldInt8(2, t, Hu.NONE);
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
			static createField(e, t, n, i, s, o, a, l) {
				return (
					nt.startField(e),
					nt.addName(e, t),
					nt.addNullable(e, n),
					nt.addTypeType(e, i),
					nt.addType(e, s),
					nt.addDictionary(e, o),
					nt.addChildren(e, a),
					nt.addCustomMetadata(e, l),
					nt.endField(e)
				);
			}
		};
		S.Field = nt;
		var sh = class {
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
		S.Buffer = sh;
		var Wt = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsSchema(e, t) {
				return (t || new Wt()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsSchema(e, t) {
				return (
					e.setPosition(e.position() + ge.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Wt()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			endianness() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : Gu.Little;
			}
			fields(e, t) {
				let n = this.bb.__offset(this.bb_pos, 6);
				return n
					? (t || new nt()).__init(
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
					? (t || new qt()).__init(
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
				e.addFieldInt16(0, t, Gu.Little);
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
					Wt.startSchema(e),
					Wt.addEndianness(e, t),
					Wt.addFields(e, n),
					Wt.addCustomMetadata(e, i),
					Wt.addFeatures(e, s),
					Wt.endSchema(e)
				);
			}
		};
		S.Schema = Wt;
	});
	var Bo = g((Pe) => {
		'use strict';
		Object.defineProperty(Pe, '__esModule', { value: !0 });
		Pe.Message =
			Pe.DictionaryBatch =
			Pe.RecordBatch =
			Pe.BodyCompression =
			Pe.FieldNode =
			Pe.MessageHeader =
			Pe.BodyCompressionMethod =
			Pe.CompressionType =
				void 0;
		var To = Tr(),
			Io = Yr(),
			$u;
		(function (r) {
			(r[(r.LZ4_FRAME = 0)] = 'LZ4_FRAME'), (r[(r.ZSTD = 1)] = 'ZSTD');
		})(($u = Pe.CompressionType || (Pe.CompressionType = {})));
		var Ju;
		(function (r) {
			r[(r.BUFFER = 0)] = 'BUFFER';
		})((Ju = Pe.BodyCompressionMethod || (Pe.BodyCompressionMethod = {})));
		var Ku;
		(function (r) {
			(r[(r.NONE = 0)] = 'NONE'),
				(r[(r.Schema = 1)] = 'Schema'),
				(r[(r.DictionaryBatch = 2)] = 'DictionaryBatch'),
				(r[(r.RecordBatch = 3)] = 'RecordBatch'),
				(r[(r.Tensor = 4)] = 'Tensor'),
				(r[(r.SparseTensor = 5)] = 'SparseTensor');
		})((Ku = Pe.MessageHeader || (Pe.MessageHeader = {})));
		var Zu = class {
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
		Pe.FieldNode = Zu;
		var tr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsBodyCompression(e, t) {
				return (t || new tr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsBodyCompression(e, t) {
				return (
					e.setPosition(e.position() + To.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new tr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			codec() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt8(this.bb_pos + e) : $u.LZ4_FRAME;
			}
			method() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.readInt8(this.bb_pos + e) : Ju.BUFFER;
			}
			static startBodyCompression(e) {
				e.startObject(2);
			}
			static addCodec(e, t) {
				e.addFieldInt8(0, t, $u.LZ4_FRAME);
			}
			static addMethod(e, t) {
				e.addFieldInt8(1, t, Ju.BUFFER);
			}
			static endBodyCompression(e) {
				return e.endObject();
			}
			static createBodyCompression(e, t, n) {
				return (
					tr.startBodyCompression(e),
					tr.addCodec(e, t),
					tr.addMethod(e, n),
					tr.endBodyCompression(e)
				);
			}
		};
		Pe.BodyCompression = tr;
		var gt = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsRecordBatch(e, t) {
				return (t || new gt()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsRecordBatch(e, t) {
				return (
					e.setPosition(e.position() + To.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new gt()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			length() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt64(this.bb_pos + e) : this.bb.createLong(0, 0);
			}
			nodes(e, t) {
				let n = this.bb.__offset(this.bb_pos, 6);
				return n
					? (t || new Zu()).__init(this.bb.__vector(this.bb_pos + n) + e * 16, this.bb)
					: null;
			}
			nodesLength() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
			}
			buffers(e, t) {
				let n = this.bb.__offset(this.bb_pos, 8);
				return n
					? (t || new Io.Buffer()).__init(this.bb.__vector(this.bb_pos + n) + e * 16, this.bb)
					: null;
			}
			buffersLength() {
				let e = this.bb.__offset(this.bb_pos, 8);
				return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
			}
			compression(e) {
				let t = this.bb.__offset(this.bb_pos, 10);
				return t ? (e || new tr()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
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
					gt.startRecordBatch(e),
					gt.addLength(e, t),
					gt.addNodes(e, n),
					gt.addBuffers(e, i),
					gt.addCompression(e, s),
					gt.endRecordBatch(e)
				);
			}
		};
		Pe.RecordBatch = gt;
		var rr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsDictionaryBatch(e, t) {
				return (t || new rr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsDictionaryBatch(e, t) {
				return (
					e.setPosition(e.position() + To.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new rr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			id() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt64(this.bb_pos + e) : this.bb.createLong(0, 0);
			}
			data(e) {
				let t = this.bb.__offset(this.bb_pos, 6);
				return t ? (e || new gt()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
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
					rr.startDictionaryBatch(e),
					rr.addId(e, t),
					rr.addData(e, n),
					rr.addIsDelta(e, i),
					rr.endDictionaryBatch(e)
				);
			}
		};
		Pe.DictionaryBatch = rr;
		var vt = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsMessage(e, t) {
				return (t || new vt()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsMessage(e, t) {
				return (
					e.setPosition(e.position() + To.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new vt()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			version() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : Io.MetadataVersion.V1;
			}
			headerType() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.readUint8(this.bb_pos + e) : Ku.NONE;
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
					? (t || new Io.KeyValue()).__init(
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
				e.addFieldInt16(0, t, Io.MetadataVersion.V1);
			}
			static addHeaderType(e, t) {
				e.addFieldInt8(1, t, Ku.NONE);
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
					vt.startMessage(e),
					vt.addVersion(e, t),
					vt.addHeaderType(e, n),
					vt.addHeader(e, i),
					vt.addBodyLength(e, s),
					vt.addCustomMetadata(e, o),
					vt.endMessage(e)
				);
			}
		};
		Pe.Message = vt;
	});
	var _e = g((Se) => {
		'use strict';
		Object.defineProperty(Se, '__esModule', { value: !0 });
		Se.BufferType =
			Se.Type =
			Se.MessageHeader =
			Se.MetadataVersion =
			Se.IntervalUnit =
			Se.UnionMode =
			Se.Precision =
			Se.TimeUnit =
			Se.DateUnit =
				void 0;
		var si = Yr();
		Object.defineProperty(Se, 'DateUnit', {
			enumerable: !0,
			get: function () {
				return si.DateUnit;
			}
		});
		Object.defineProperty(Se, 'TimeUnit', {
			enumerable: !0,
			get: function () {
				return si.TimeUnit;
			}
		});
		Object.defineProperty(Se, 'Precision', {
			enumerable: !0,
			get: function () {
				return si.Precision;
			}
		});
		Object.defineProperty(Se, 'UnionMode', {
			enumerable: !0,
			get: function () {
				return si.UnionMode;
			}
		});
		Object.defineProperty(Se, 'IntervalUnit', {
			enumerable: !0,
			get: function () {
				return si.IntervalUnit;
			}
		});
		Object.defineProperty(Se, 'MetadataVersion', {
			enumerable: !0,
			get: function () {
				return si.MetadataVersion;
			}
		});
		var nT = Bo();
		Object.defineProperty(Se, 'MessageHeader', {
			enumerable: !0,
			get: function () {
				return nT.MessageHeader;
			}
		});
		var iT;
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
		})((iT = Se.Type || (Se.Type = {})));
		var sT;
		(function (r) {
			(r[(r.OFFSET = 0)] = 'OFFSET'),
				(r[(r.DATA = 1)] = 'DATA'),
				(r[(r.VALIDITY = 2)] = 'VALIDITY'),
				(r[(r.TYPE = 3)] = 'TYPE');
		})((sT = Se.BufferType || (Se.BufferType = {})));
	});
	var nr = g((ke) => {
		'use strict';
		Object.defineProperty(ke, '__esModule', { value: !0 });
		ke.popcnt_uint32 =
			ke.popcnt_array =
			ke.popcnt_bit_range =
			ke.BitIterator =
			ke.packBools =
			ke.truncateBitmap =
			ke.setBool =
			ke.getBit =
			ke.getBool =
				void 0;
		function oh(r, e, t, n) {
			return (t & (1 << n)) != 0;
		}
		ke.getBool = oh;
		function ah(r, e, t, n) {
			return (t & (1 << n)) >> n;
		}
		ke.getBit = ah;
		function oT(r, e, t) {
			return t ? !!(r[e >> 3] |= 1 << e % 8) || !0 : !(r[e >> 3] &= ~(1 << e % 8)) && !1;
		}
		ke.setBool = oT;
		function aT(r, e, t) {
			let n = (t.byteLength + 7) & ~7;
			if (r > 0 || t.byteLength < n) {
				let i = new Uint8Array(n);
				return (
					i.set(r % 8 == 0 ? t.subarray(r >> 3) : uh(new wo(t, r, e, null, oh)).subarray(0, n)), i
				);
			}
			return t;
		}
		ke.truncateBitmap = aT;
		function uh(r) {
			let e = [],
				t = 0,
				n = 0,
				i = 0;
			for (let o of r) o && (i |= 1 << n), ++n == 8 && ((e[t++] = i), (i = n = 0));
			(t === 0 || n > 0) && (e[t++] = i);
			let s = new Uint8Array((e.length + 7) & ~7);
			return s.set(e), s;
		}
		ke.packBools = uh;
		var wo = class {
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
		ke.BitIterator = wo;
		function Xu(r, e, t) {
			if (t - e <= 0) return 0;
			if (t - e < 8) {
				let s = 0;
				for (let o of new wo(r, e, t - e, r, ah)) s += o;
				return s;
			}
			let n = (t >> 3) << 3,
				i = e + (e % 8 == 0 ? 0 : 8 - (e % 8));
			return Xu(r, e, i) + Xu(r, n, t) + ch(r, i >> 3, (n - i) >> 3);
		}
		ke.popcnt_bit_range = Xu;
		function ch(r, e, t) {
			let n = 0,
				i = e | 0,
				s = new DataView(r.buffer, r.byteOffset, r.byteLength),
				o = t === void 0 ? r.byteLength : i + t;
			for (; o - i >= 4; ) (n += So(s.getUint32(i))), (i += 4);
			for (; o - i >= 2; ) (n += So(s.getUint16(i))), (i += 2);
			for (; o - i >= 1; ) (n += So(s.getUint8(i))), (i += 1);
			return n;
		}
		ke.popcnt_array = ch;
		function So(r) {
			let e = r | 0;
			return (
				(e = e - ((e >>> 1) & 1431655765)),
				(e = (e & 858993459) + ((e >>> 2) & 858993459)),
				(((e + (e >>> 4)) & 252645135) * 16843009) >>> 24
			);
		}
		ke.popcnt_uint32 = So;
	});
	var oe = g((I) => {
		'use strict';
		Object.defineProperty(I, '__esModule', { value: !0 });
		I.strideForType =
			I.Dictionary =
			I.Map_ =
			I.FixedSizeList =
			I.FixedSizeBinary =
			I.SparseUnion =
			I.DenseUnion =
			I.Union =
			I.Struct =
			I.List =
			I.IntervalYearMonth =
			I.IntervalDayTime =
			I.Interval =
			I.TimestampNanosecond =
			I.TimestampMicrosecond =
			I.TimestampMillisecond =
			I.TimestampSecond =
			I.Timestamp =
			I.TimeNanosecond =
			I.TimeMicrosecond =
			I.TimeMillisecond =
			I.TimeSecond =
			I.Time =
			I.DateMillisecond =
			I.DateDay =
			I.Date_ =
			I.Decimal =
			I.Bool =
			I.Utf8 =
			I.Binary =
			I.Float64 =
			I.Float32 =
			I.Float16 =
			I.Float =
			I.Uint64 =
			I.Uint32 =
			I.Uint16 =
			I.Uint8 =
			I.Int64 =
			I.Int32 =
			I.Int16 =
			I.Int8 =
			I.Int =
			I.Null =
			I.DataType =
				void 0;
		var M = _e(),
			Ae = class {
				static isNull(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.Null;
				}
				static isInt(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.Int;
				}
				static isFloat(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.Float;
				}
				static isBinary(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.Binary;
				}
				static isUtf8(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.Utf8;
				}
				static isBool(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.Bool;
				}
				static isDecimal(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.Decimal;
				}
				static isDate(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.Date;
				}
				static isTime(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.Time;
				}
				static isTimestamp(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.Timestamp;
				}
				static isInterval(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.Interval;
				}
				static isList(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.List;
				}
				static isStruct(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.Struct;
				}
				static isUnion(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.Union;
				}
				static isFixedSizeBinary(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.FixedSizeBinary;
				}
				static isFixedSizeList(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.FixedSizeList;
				}
				static isMap(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.Map;
				}
				static isDictionary(e) {
					return (e == null ? void 0 : e.typeId) === M.Type.Dictionary;
				}
				get typeId() {
					return M.Type.NONE;
				}
			};
		I.DataType = Ae;
		Ae[Symbol.toStringTag] = ((r) => (
			(r.children = null), (r.ArrayType = Array), (r[Symbol.toStringTag] = 'DataType')
		))(Ae.prototype);
		var Ao = class extends Ae {
			toString() {
				return 'Null';
			}
			get typeId() {
				return M.Type.Null;
			}
		};
		I.Null = Ao;
		Ao[Symbol.toStringTag] = ((r) => (r[Symbol.toStringTag] = 'Null'))(Ao.prototype);
		var Tt = class extends Ae {
			constructor(e, t) {
				super();
				(this.isSigned = e), (this.bitWidth = t);
			}
			get typeId() {
				return M.Type.Int;
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
		I.Int = Tt;
		Tt[Symbol.toStringTag] = ((r) => (
			(r.isSigned = null), (r.bitWidth = null), (r[Symbol.toStringTag] = 'Int')
		))(Tt.prototype);
		var Qu = class extends Tt {
			constructor() {
				super(!0, 8);
			}
		};
		I.Int8 = Qu;
		var ec = class extends Tt {
			constructor() {
				super(!0, 16);
			}
		};
		I.Int16 = ec;
		var tc = class extends Tt {
			constructor() {
				super(!0, 32);
			}
		};
		I.Int32 = tc;
		var rc = class extends Tt {
			constructor() {
				super(!0, 64);
			}
		};
		I.Int64 = rc;
		var nc = class extends Tt {
			constructor() {
				super(!1, 8);
			}
		};
		I.Uint8 = nc;
		var ic = class extends Tt {
			constructor() {
				super(!1, 16);
			}
		};
		I.Uint16 = ic;
		var sc = class extends Tt {
			constructor() {
				super(!1, 32);
			}
		};
		I.Uint32 = sc;
		var oc = class extends Tt {
			constructor() {
				super(!1, 64);
			}
		};
		I.Uint64 = oc;
		Object.defineProperty(Qu.prototype, 'ArrayType', { value: Int8Array });
		Object.defineProperty(ec.prototype, 'ArrayType', { value: Int16Array });
		Object.defineProperty(tc.prototype, 'ArrayType', { value: Int32Array });
		Object.defineProperty(rc.prototype, 'ArrayType', { value: Int32Array });
		Object.defineProperty(nc.prototype, 'ArrayType', { value: Uint8Array });
		Object.defineProperty(ic.prototype, 'ArrayType', { value: Uint16Array });
		Object.defineProperty(sc.prototype, 'ArrayType', { value: Uint32Array });
		Object.defineProperty(oc.prototype, 'ArrayType', { value: Uint32Array });
		var kn = class extends Ae {
			constructor(e) {
				super();
				this.precision = e;
			}
			get typeId() {
				return M.Type.Float;
			}
			get ArrayType() {
				switch (this.precision) {
					case M.Precision.HALF:
						return Uint16Array;
					case M.Precision.SINGLE:
						return Float32Array;
					case M.Precision.DOUBLE:
						return Float64Array;
				}
				throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
			}
			toString() {
				return `Float${this.precision << 5 || 16}`;
			}
		};
		I.Float = kn;
		kn[Symbol.toStringTag] = ((r) => ((r.precision = null), (r[Symbol.toStringTag] = 'Float')))(
			kn.prototype
		);
		var ac = class extends kn {
			constructor() {
				super(M.Precision.HALF);
			}
		};
		I.Float16 = ac;
		var uc = class extends kn {
			constructor() {
				super(M.Precision.SINGLE);
			}
		};
		I.Float32 = uc;
		var cc = class extends kn {
			constructor() {
				super(M.Precision.DOUBLE);
			}
		};
		I.Float64 = cc;
		Object.defineProperty(ac.prototype, 'ArrayType', { value: Uint16Array });
		Object.defineProperty(uc.prototype, 'ArrayType', { value: Float32Array });
		Object.defineProperty(cc.prototype, 'ArrayType', { value: Float64Array });
		var Do = class extends Ae {
			constructor() {
				super();
			}
			get typeId() {
				return M.Type.Binary;
			}
			toString() {
				return 'Binary';
			}
		};
		I.Binary = Do;
		Do[Symbol.toStringTag] = ((r) => (
			(r.ArrayType = Uint8Array), (r[Symbol.toStringTag] = 'Binary')
		))(Do.prototype);
		var Fo = class extends Ae {
			constructor() {
				super();
			}
			get typeId() {
				return M.Type.Utf8;
			}
			toString() {
				return 'Utf8';
			}
		};
		I.Utf8 = Fo;
		Fo[Symbol.toStringTag] = ((r) => (
			(r.ArrayType = Uint8Array), (r[Symbol.toStringTag] = 'Utf8')
		))(Fo.prototype);
		var Oo = class extends Ae {
			constructor() {
				super();
			}
			get typeId() {
				return M.Type.Bool;
			}
			toString() {
				return 'Bool';
			}
		};
		I.Bool = Oo;
		Oo[Symbol.toStringTag] = ((r) => (
			(r.ArrayType = Uint8Array), (r[Symbol.toStringTag] = 'Bool')
		))(Oo.prototype);
		var Mo = class extends Ae {
			constructor(e, t) {
				super();
				(this.scale = e), (this.precision = t);
			}
			get typeId() {
				return M.Type.Decimal;
			}
			toString() {
				return `Decimal[${this.precision}e${this.scale > 0 ? '+' : ''}${this.scale}]`;
			}
		};
		I.Decimal = Mo;
		Mo[Symbol.toStringTag] = ((r) => (
			(r.scale = null),
			(r.precision = null),
			(r.ArrayType = Uint32Array),
			(r[Symbol.toStringTag] = 'Decimal')
		))(Mo.prototype);
		var oi = class extends Ae {
			constructor(e) {
				super();
				this.unit = e;
			}
			get typeId() {
				return M.Type.Date;
			}
			toString() {
				return `Date${(this.unit + 1) * 32}<${M.DateUnit[this.unit]}>`;
			}
		};
		I.Date_ = oi;
		oi[Symbol.toStringTag] = ((r) => (
			(r.unit = null), (r.ArrayType = Int32Array), (r[Symbol.toStringTag] = 'Date')
		))(oi.prototype);
		var lh = class extends oi {
			constructor() {
				super(M.DateUnit.DAY);
			}
		};
		I.DateDay = lh;
		var dh = class extends oi {
			constructor() {
				super(M.DateUnit.MILLISECOND);
			}
		};
		I.DateMillisecond = dh;
		var Gr = class extends Ae {
			constructor(e, t) {
				super();
				(this.unit = e), (this.bitWidth = t);
			}
			get typeId() {
				return M.Type.Time;
			}
			toString() {
				return `Time${this.bitWidth}<${M.TimeUnit[this.unit]}>`;
			}
		};
		I.Time = Gr;
		Gr[Symbol.toStringTag] = ((r) => (
			(r.unit = null),
			(r.bitWidth = null),
			(r.ArrayType = Int32Array),
			(r[Symbol.toStringTag] = 'Time')
		))(Gr.prototype);
		var fh = class extends Gr {
			constructor() {
				super(M.TimeUnit.SECOND, 32);
			}
		};
		I.TimeSecond = fh;
		var hh = class extends Gr {
			constructor() {
				super(M.TimeUnit.MILLISECOND, 32);
			}
		};
		I.TimeMillisecond = hh;
		var ph = class extends Gr {
			constructor() {
				super(M.TimeUnit.MICROSECOND, 64);
			}
		};
		I.TimeMicrosecond = ph;
		var yh = class extends Gr {
			constructor() {
				super(M.TimeUnit.NANOSECOND, 64);
			}
		};
		I.TimeNanosecond = yh;
		var $r = class extends Ae {
			constructor(e, t) {
				super();
				(this.unit = e), (this.timezone = t);
			}
			get typeId() {
				return M.Type.Timestamp;
			}
			toString() {
				return `Timestamp<${M.TimeUnit[this.unit]}${this.timezone ? `, ${this.timezone}` : ''}>`;
			}
		};
		I.Timestamp = $r;
		$r[Symbol.toStringTag] = ((r) => (
			(r.unit = null),
			(r.timezone = null),
			(r.ArrayType = Int32Array),
			(r[Symbol.toStringTag] = 'Timestamp')
		))($r.prototype);
		var _h = class extends $r {
			constructor(e) {
				super(M.TimeUnit.SECOND, e);
			}
		};
		I.TimestampSecond = _h;
		var mh = class extends $r {
			constructor(e) {
				super(M.TimeUnit.MILLISECOND, e);
			}
		};
		I.TimestampMillisecond = mh;
		var bh = class extends $r {
			constructor(e) {
				super(M.TimeUnit.MICROSECOND, e);
			}
		};
		I.TimestampMicrosecond = bh;
		var gh = class extends $r {
			constructor(e) {
				super(M.TimeUnit.NANOSECOND, e);
			}
		};
		I.TimestampNanosecond = gh;
		var ai = class extends Ae {
			constructor(e) {
				super();
				this.unit = e;
			}
			get typeId() {
				return M.Type.Interval;
			}
			toString() {
				return `Interval<${M.IntervalUnit[this.unit]}>`;
			}
		};
		I.Interval = ai;
		ai[Symbol.toStringTag] = ((r) => (
			(r.unit = null), (r.ArrayType = Int32Array), (r[Symbol.toStringTag] = 'Interval')
		))(ai.prototype);
		var vh = class extends ai {
			constructor() {
				super(M.IntervalUnit.DAY_TIME);
			}
		};
		I.IntervalDayTime = vh;
		var Th = class extends ai {
			constructor() {
				super(M.IntervalUnit.YEAR_MONTH);
			}
		};
		I.IntervalYearMonth = Th;
		var Eo = class extends Ae {
			constructor(e) {
				super();
				this.children = [e];
			}
			get typeId() {
				return M.Type.List;
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
		I.List = Eo;
		Eo[Symbol.toStringTag] = ((r) => ((r.children = null), (r[Symbol.toStringTag] = 'List')))(
			Eo.prototype
		);
		var Ro = class extends Ae {
			constructor(e) {
				super();
				this.children = e;
			}
			get typeId() {
				return M.Type.Struct;
			}
			toString() {
				return `Struct<{${this.children.map((e) => `${e.name}:${e.type}`).join(', ')}}>`;
			}
		};
		I.Struct = Ro;
		Ro[Symbol.toStringTag] = ((r) => ((r.children = null), (r[Symbol.toStringTag] = 'Struct')))(
			Ro.prototype
		);
		var ui = class extends Ae {
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
				return M.Type.Union;
			}
			toString() {
				return `${this[Symbol.toStringTag]}<${this.children.map((e) => `${e.type}`).join(' | ')}>`;
			}
		};
		I.Union = ui;
		ui[Symbol.toStringTag] = ((r) => (
			(r.mode = null),
			(r.typeIds = null),
			(r.children = null),
			(r.typeIdToChildIndex = null),
			(r.ArrayType = Int8Array),
			(r[Symbol.toStringTag] = 'Union')
		))(ui.prototype);
		var Ih = class extends ui {
			constructor(e, t) {
				super(M.UnionMode.Dense, e, t);
			}
		};
		I.DenseUnion = Ih;
		var Bh = class extends ui {
			constructor(e, t) {
				super(M.UnionMode.Sparse, e, t);
			}
		};
		I.SparseUnion = Bh;
		var Uo = class extends Ae {
			constructor(e) {
				super();
				this.byteWidth = e;
			}
			get typeId() {
				return M.Type.FixedSizeBinary;
			}
			toString() {
				return `FixedSizeBinary[${this.byteWidth}]`;
			}
		};
		I.FixedSizeBinary = Uo;
		Uo[Symbol.toStringTag] = ((r) => (
			(r.byteWidth = null), (r.ArrayType = Uint8Array), (r[Symbol.toStringTag] = 'FixedSizeBinary')
		))(Uo.prototype);
		var Vo = class extends Ae {
			constructor(e, t) {
				super();
				(this.listSize = e), (this.children = [t]);
			}
			get typeId() {
				return M.Type.FixedSizeList;
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
		I.FixedSizeList = Vo;
		Vo[Symbol.toStringTag] = ((r) => (
			(r.children = null), (r.listSize = null), (r[Symbol.toStringTag] = 'FixedSizeList')
		))(Vo.prototype);
		var Po = class extends Ae {
			constructor(e, t = !1) {
				super();
				(this.children = [e]), (this.keysSorted = t);
			}
			get typeId() {
				return M.Type.Map;
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
		I.Map_ = Po;
		Po[Symbol.toStringTag] = ((r) => (
			(r.children = null), (r.keysSorted = null), (r[Symbol.toStringTag] = 'Map_')
		))(Po.prototype);
		var uT = (
				(r) => () =>
					++r
			)(-1),
			No = class extends Ae {
				constructor(e, t, n, i) {
					super();
					(this.indices = t),
						(this.dictionary = e),
						(this.isOrdered = i || !1),
						(this.id = n == null ? uT() : typeof n == 'number' ? n : n.low);
				}
				get typeId() {
					return M.Type.Dictionary;
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
		I.Dictionary = No;
		No[Symbol.toStringTag] = ((r) => (
			(r.id = null),
			(r.indices = null),
			(r.isOrdered = null),
			(r.dictionary = null),
			(r[Symbol.toStringTag] = 'Dictionary')
		))(No.prototype);
		function cT(r) {
			let e = r;
			switch (r.typeId) {
				case M.Type.Decimal:
					return 4;
				case M.Type.Timestamp:
					return 2;
				case M.Type.Date:
					return 1 + e.unit;
				case M.Type.Interval:
					return 1 + e.unit;
				case M.Type.Int:
					return 1 + +(e.bitWidth > 32);
				case M.Type.Time:
					return 1 + +(e.bitWidth > 32);
				case M.Type.FixedSizeList:
					return e.listSize;
				case M.Type.FixedSizeBinary:
					return e.byteWidth;
				default:
					return 1;
			}
		}
		I.strideForType = cT;
	});
	var zt = g((xn) => {
		'use strict';
		Object.defineProperty(xn, '__esModule', { value: !0 });
		xn.Data = xn.kUnknownNullCount = void 0;
		var lT = nr(),
			dT = nr(),
			V = _e(),
			fT = oe(),
			re = We();
		xn.kUnknownNullCount = -1;
		var G = class {
			constructor(e, t, n, i, s, o, a) {
				(this.type = e),
					(this.dictionary = a),
					(this.offset = Math.floor(Math.max(t || 0, 0))),
					(this.length = Math.floor(Math.max(n || 0, 0))),
					(this._nullCount = Math.floor(Math.max(i || 0, -1))),
					(this.childData = (o || []).map((f) => (f instanceof G ? f : f.data)));
				let l;
				s instanceof G
					? ((this.stride = s.stride),
					  (this.values = s.values),
					  (this.typeIds = s.typeIds),
					  (this.nullBitmap = s.nullBitmap),
					  (this.valueOffsets = s.valueOffsets))
					: ((this.stride = fT.strideForType(e)),
					  s &&
							((l = s[0]) && (this.valueOffsets = l),
							(l = s[1]) && (this.values = l),
							(l = s[2]) && (this.nullBitmap = l),
							(l = s[3]) && (this.typeIds = l)));
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
					this.childData.reduce((o, a) => o + a.byteLength, e)
				);
			}
			get nullCount() {
				let e = this._nullCount,
					t;
				return (
					e <= xn.kUnknownNullCount &&
						(t = this.nullBitmap) &&
						(this._nullCount = e =
							this.length - dT.popcnt_bit_range(t, this.offset, this.offset + this.length)),
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
					a = i === 16 ? n : 1,
					l = this._sliceBuffers(e, t, n, i);
				return this.clone(
					this.type,
					this.offset + e,
					t,
					o,
					l,
					!s.length || this.valueOffsets ? s : this._sliceChildren(s, a * e, a * t)
				);
			}
			_changeLengthAndBackfillNullBitmap(e) {
				if (this.typeId === V.Type.Null) return this.clone(this.type, 0, e, 0);
				let { length: t, nullCount: n } = this,
					i = new Uint8Array(((e + 63) & ~63) >> 3).fill(255, 0, t >> 3);
				(i[t >> 3] = (1 << (t - (t & ~7))) - 1),
					n > 0 && i.set(lT.truncateBitmap(this.offset, t, this.nullBitmap), 0);
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
			static new(e, t, n, i, s, o, a) {
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
							a
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
					re.toArrayBufferView(e.ArrayType, o),
					re.toUint8Array(s)
				]);
			}
			static Dictionary(e, t, n, i, s, o, a) {
				return new G(
					e,
					t,
					n,
					i,
					[void 0, re.toArrayBufferView(e.indices.ArrayType, o), re.toUint8Array(s)],
					[],
					a
				);
			}
			static Float(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					re.toArrayBufferView(e.ArrayType, o),
					re.toUint8Array(s)
				]);
			}
			static Bool(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					re.toArrayBufferView(e.ArrayType, o),
					re.toUint8Array(s)
				]);
			}
			static Decimal(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					re.toArrayBufferView(e.ArrayType, o),
					re.toUint8Array(s)
				]);
			}
			static Date(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					re.toArrayBufferView(e.ArrayType, o),
					re.toUint8Array(s)
				]);
			}
			static Time(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					re.toArrayBufferView(e.ArrayType, o),
					re.toUint8Array(s)
				]);
			}
			static Timestamp(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					re.toArrayBufferView(e.ArrayType, o),
					re.toUint8Array(s)
				]);
			}
			static Interval(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					re.toArrayBufferView(e.ArrayType, o),
					re.toUint8Array(s)
				]);
			}
			static FixedSizeBinary(e, t, n, i, s, o) {
				return new G(e, t, n, i, [
					void 0,
					re.toArrayBufferView(e.ArrayType, o),
					re.toUint8Array(s)
				]);
			}
			static Binary(e, t, n, i, s, o, a) {
				return new G(e, t, n, i, [re.toInt32Array(o), re.toUint8Array(a), re.toUint8Array(s)]);
			}
			static Utf8(e, t, n, i, s, o, a) {
				return new G(e, t, n, i, [re.toInt32Array(o), re.toUint8Array(a), re.toUint8Array(s)]);
			}
			static List(e, t, n, i, s, o, a) {
				return new G(e, t, n, i, [re.toInt32Array(o), void 0, re.toUint8Array(s)], a ? [a] : []);
			}
			static FixedSizeList(e, t, n, i, s, o) {
				return new G(e, t, n, i, [void 0, void 0, re.toUint8Array(s)], o ? [o] : []);
			}
			static Struct(e, t, n, i, s, o) {
				return new G(e, t, n, i, [void 0, void 0, re.toUint8Array(s)], o);
			}
			static Map(e, t, n, i, s, o, a) {
				return new G(e, t, n, i, [re.toInt32Array(o), void 0, re.toUint8Array(s)], a ? [a] : []);
			}
			static Union(e, t, n, i, s, o, a, l) {
				let f = [void 0, void 0, re.toUint8Array(s), re.toArrayBufferView(e.ArrayType, o)];
				return e.mode === V.UnionMode.Sparse
					? new G(e, t, n, i, f, a)
					: ((f[V.BufferType.OFFSET] = re.toInt32Array(a)), new G(e, t, n, i, f, l));
			}
		};
		xn.Data = G;
		G.prototype.childData = Object.freeze([]);
	});
	var lc = g((Lo) => {
		'use strict';
		Object.defineProperty(Lo, '__esModule', { value: !0 });
		Lo.valueToString = void 0;
		var hT = void 0;
		function pT(r) {
			if (r === null) return 'null';
			if (r === hT) return 'undefined';
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
		Lo.valueToString = pT;
	});
	var wh = g((ko) => {
		'use strict';
		Object.defineProperty(ko, '__esModule', { value: !0 });
		ko.createIsValidFunction = void 0;
		var dc = lc(),
			yT = rt();
		function _T(r) {
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
        case ${mT(n)}:`
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
		ko.createIsValidFunction = _T;
		function mT(r) {
			return typeof r != 'bigint'
				? dc.valueToString(r)
				: yT.BigIntAvailable
				? `${dc.valueToString(r)}n`
				: `"${dc.valueToString(r)}"`;
		}
	});
	var Jr = g((It) => {
		'use strict';
		Object.defineProperty(It, '__esModule', { value: !0 });
		It.WideBufferBuilder =
			It.OffsetsBufferBuilder =
			It.BitmapBufferBuilder =
			It.DataBufferBuilder =
			It.BufferBuilder =
				void 0;
		var Sh = We(),
			fc = rt(),
			hc = (r, e) => ((r * e + 63) & ~63 || 64) / e,
			bT = (r, e = 0) => (r.length >= e ? r.subarray(0, e) : Sh.memcpy(new r.constructor(e), r, 0)),
			fs = class {
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
								i === 0 ? hc(n * 1, this.BYTES_PER_ELEMENT) : hc(n * 2, this.BYTES_PER_ELEMENT)
							);
					}
					return this;
				}
				flush(e = this.length) {
					e = hc(e * this.stride, this.BYTES_PER_ELEMENT);
					let t = bT(this.buffer, e);
					return this.clear(), t;
				}
				clear() {
					return (this.length = 0), this._resize(0), this;
				}
				_resize(e) {
					return (this.buffer = Sh.memcpy(new this.ArrayType(e), this.buffer));
				}
			};
		It.BufferBuilder = fs;
		fs.prototype.offset = 0;
		var xo = class extends fs {
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
		It.DataBufferBuilder = xo;
		var Ah = class extends xo {
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
		It.BitmapBufferBuilder = Ah;
		var Dh = class extends xo {
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
		It.OffsetsBufferBuilder = Dh;
		var Fh = class extends fs {
			get ArrayType64() {
				return (
					this._ArrayType64 ||
					(this._ArrayType64 =
						this.buffer instanceof Int32Array ? fc.BigInt64Array : fc.BigUint64Array)
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
					fc.BigIntAvailable && (this.buffer64 = new this.ArrayType64(t.buffer, t.byteOffset, n)), t
				);
			}
		};
		It.WideBufferBuilder = Fh;
	});
	var De = g((Kr) => {
		'use strict';
		Object.defineProperty(Kr, '__esModule', { value: !0 });
		Kr.VariableWidthBuilder = Kr.FixedWidthBuilder = Kr.Builder = void 0;
		var ci = tt(),
			gT = Ve(),
			li = _e(),
			vT = zt(),
			TT = wh(),
			pc = Jr(),
			IT = oe(),
			Bt = class {
				constructor({ type: e, nullValues: t }) {
					(this.length = 0),
						(this.finished = !1),
						(this.type = e),
						(this.children = []),
						(this.nullValues = t),
						(this.stride = IT.strideForType(e)),
						(this._nulls = new pc.BitmapBufferBuilder()),
						t && t.length > 0 && (this._isValid = TT.createIsValidFunction(t));
				}
				static new(e) {}
				static throughNode(e) {
					throw new Error('"throughNode" not available in this environment');
				}
				static throughDOM(e) {
					throw new Error('"throughDOM" not available in this environment');
				}
				static throughIterable(e) {
					return BT(e);
				}
				static throughAsyncIterable(e) {
					return wT(e);
				}
				toVector() {
					return gT.Vector.new(this.flush());
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
						? ((e[li.BufferType.TYPE] = i.flush(s)), n && (e[li.BufferType.OFFSET] = n.flush(s)))
						: n
						? (t && (e[li.BufferType.DATA] = t.flush(n.last())),
						  (e[li.BufferType.OFFSET] = n.flush(s)))
						: t && (e[li.BufferType.DATA] = t.flush(s)),
						o > 0 && (e[li.BufferType.VALIDITY] = this._nulls.flush(s));
					let a = vT.Data.new(
						this.type,
						0,
						s,
						o,
						e,
						this.children.map((l) => l.flush())
					);
					return this.clear(), a;
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
		Kr.Builder = Bt;
		Bt.prototype.length = 1;
		Bt.prototype.stride = 1;
		Bt.prototype.children = null;
		Bt.prototype.finished = !1;
		Bt.prototype.nullValues = null;
		Bt.prototype._isValid = () => !0;
		var Oh = class extends Bt {
			constructor(e) {
				super(e);
				this._values = new pc.DataBufferBuilder(new this.ArrayType(0), this.stride);
			}
			setValue(e, t) {
				let n = this._values;
				return n.reserve(e - n.length + 1), super.setValue(e, t);
			}
		};
		Kr.FixedWidthBuilder = Oh;
		var Mh = class extends Bt {
			constructor(e) {
				super(e);
				(this._pendingLength = 0), (this._offsets = new pc.OffsetsBufferBuilder());
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
		Kr.VariableWidthBuilder = Mh;
		function BT(r) {
			let { ['queueingStrategy']: e = 'count' } = r,
				{ ['highWaterMark']: t = e !== 'bytes' ? 1e3 : Math.pow(2, 14) } = r,
				n = e !== 'bytes' ? 'length' : 'byteLength';
			return function* (i) {
				let s = 0,
					o = Bt.new(r);
				for (let a of i) o.append(a)[n] >= t && ++s && (yield o.toVector());
				(o.finish().length > 0 || s === 0) && (yield o.toVector());
			};
		}
		function wT(r) {
			let { ['queueingStrategy']: e = 'count' } = r,
				{ ['highWaterMark']: t = e !== 'bytes' ? 1e3 : Math.pow(2, 14) } = r,
				n = e !== 'bytes' ? 'length' : 'byteLength';
			return function (i) {
				return ci.__asyncGenerator(this, arguments, function* () {
					var s, o;
					let a = 0,
						l = Bt.new(r);
					try {
						for (var f = ci.__asyncValues(i), y; (y = yield ci.__await(f.next())), !y.done; ) {
							let F = y.value;
							l.append(F)[n] >= t && ++a && (yield yield ci.__await(l.toVector()));
						}
					} catch (F) {
						s = { error: F };
					} finally {
						try {
							y && !y.done && (o = f.return) && (yield ci.__await(o.call(f)));
						} finally {
							if (s) throw s.error;
						}
					}
					(l.finish().length > 0 || a === 0) && (yield yield ci.__await(l.toVector()));
				});
			};
		}
	});
	var yc = g((Co) => {
		'use strict';
		Object.defineProperty(Co, '__esModule', { value: !0 });
		Co.BoolBuilder = void 0;
		var ST = Jr(),
			AT = De(),
			Eh = class extends AT.Builder {
				constructor(e) {
					super(e);
					this._values = new ST.BitmapBufferBuilder();
				}
				setValue(e, t) {
					this._values.set(e, +t);
				}
			};
		Co.BoolBuilder = Eh;
	});
	var _c = g((jo) => {
		'use strict';
		Object.defineProperty(jo, '__esModule', { value: !0 });
		jo.NullBuilder = void 0;
		var DT = De(),
			Rh = class extends DT.Builder {
				setValue(e, t) {}
				setValid(e, t) {
					return (this.length = Math.max(e + 1, this.length)), t;
				}
			};
		jo.NullBuilder = Rh;
	});
	var mc = g((Zr) => {
		'use strict';
		Object.defineProperty(Zr, '__esModule', { value: !0 });
		Zr.DateMillisecondBuilder = Zr.DateDayBuilder = Zr.DateBuilder = void 0;
		var FT = De(),
			qo = class extends FT.FixedWidthBuilder {};
		Zr.DateBuilder = qo;
		var Uh = class extends qo {};
		Zr.DateDayBuilder = Uh;
		var Vh = class extends qo {};
		Zr.DateMillisecondBuilder = Vh;
	});
	var bc = g((Wo) => {
		'use strict';
		Object.defineProperty(Wo, '__esModule', { value: !0 });
		Wo.DecimalBuilder = void 0;
		var OT = De(),
			Ph = class extends OT.FixedWidthBuilder {};
		Wo.DecimalBuilder = Ph;
	});
	var vc = g((zo) => {
		'use strict';
		Object.defineProperty(zo, '__esModule', { value: !0 });
		zo.DictionaryBuilder = void 0;
		var MT = oe(),
			gc = De(),
			Nh = class extends gc.Builder {
				constructor({ type: e, nullValues: t, dictionaryHashFunction: n }) {
					super({ type: new MT.Dictionary(e.dictionary, e.indices, e.id, e.isOrdered) });
					(this._nulls = null),
						(this._dictionaryOffset = 0),
						(this._keysToIndices = Object.create(null)),
						(this.indices = gc.Builder.new({ type: this.type.indices, nullValues: t })),
						(this.dictionary = gc.Builder.new({ type: this.type.dictionary, nullValues: null })),
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
		zo.DictionaryBuilder = Nh;
	});
	var Tc = g((Ho) => {
		'use strict';
		Object.defineProperty(Ho, '__esModule', { value: !0 });
		Ho.FixedSizeBinaryBuilder = void 0;
		var ET = De(),
			Lh = class extends ET.FixedWidthBuilder {};
		Ho.FixedSizeBinaryBuilder = Lh;
	});
	var hs = g((fi) => {
		'use strict';
		Object.defineProperty(fi, '__esModule', { value: !0 });
		fi.float64ToUint16 = fi.uint16ToFloat64 = void 0;
		var kh = new Float64Array(1),
			di = new Uint32Array(kh.buffer);
		function RT(r) {
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
		fi.uint16ToFloat64 = RT;
		function UT(r) {
			if (r !== r) return 32256;
			kh[0] = r;
			let e = ((di[1] & 2147483648) >> 16) & 65535,
				t = di[1] & 2146435072,
				n = 0;
			return (
				t >= 1089470464
					? di[0] > 0
						? (t = 31744)
						: ((t = (t & 2080374784) >> 16), (n = (di[1] & 1048575) >> 10))
					: t <= 1056964608
					? ((n = 1048576 + (di[1] & 1048575)),
					  (n = (1048576 + (n << ((t >> 20) - 998))) >> 21),
					  (t = 0))
					: ((t = (t - 1056964608) >> 10), (n = ((di[1] & 1048575) + 512) >> 10)),
				e | t | (n & 65535)
			);
		}
		fi.float64ToUint16 = UT;
	});
	var Ic = g((ir) => {
		'use strict';
		Object.defineProperty(ir, '__esModule', { value: !0 });
		ir.Float64Builder = ir.Float32Builder = ir.Float16Builder = ir.FloatBuilder = void 0;
		var VT = hs(),
			PT = De(),
			ps = class extends PT.FixedWidthBuilder {};
		ir.FloatBuilder = ps;
		var xh = class extends ps {
			setValue(e, t) {
				this._values.set(e, VT.float64ToUint16(t));
			}
		};
		ir.Float16Builder = xh;
		var Ch = class extends ps {
			setValue(e, t) {
				this._values.set(e, t);
			}
		};
		ir.Float32Builder = Ch;
		var jh = class extends ps {
			setValue(e, t) {
				this._values.set(e, t);
			}
		};
		ir.Float64Builder = jh;
	});
	var ms = g((ze) => {
		'use strict';
		Object.defineProperty(ze, '__esModule', { value: !0 });
		ze.BN = ze.bignumToBigInt = ze.bignumToString = ze.isArrowBigNumSymbol = void 0;
		var NT = We(),
			ys = rt();
		ze.isArrowBigNumSymbol = Symbol.for('isArrowBigNum');
		function Ht(r, ...e) {
			return e.length === 0
				? Object.setPrototypeOf(
						NT.toArrayBufferView(this.TypedArray, r),
						this.constructor.prototype
				  )
				: Object.setPrototypeOf(new this.TypedArray(r, ...e), this.constructor.prototype);
		}
		Ht.prototype[ze.isArrowBigNumSymbol] = !0;
		Ht.prototype.toJSON = function () {
			return `"${ze.bignumToString(this)}"`;
		};
		Ht.prototype.valueOf = function () {
			return qh(this);
		};
		Ht.prototype.toString = function () {
			return ze.bignumToString(this);
		};
		Ht.prototype[Symbol.toPrimitive] = function (r = 'default') {
			switch (r) {
				case 'number':
					return qh(this);
				case 'string':
					return ze.bignumToString(this);
				case 'default':
					return ze.bignumToBigInt(this);
			}
			return ze.bignumToString(this);
		};
		function hi(...r) {
			return Ht.apply(this, r);
		}
		function pi(...r) {
			return Ht.apply(this, r);
		}
		function _s(...r) {
			return Ht.apply(this, r);
		}
		Object.setPrototypeOf(hi.prototype, Object.create(Int32Array.prototype));
		Object.setPrototypeOf(pi.prototype, Object.create(Uint32Array.prototype));
		Object.setPrototypeOf(_s.prototype, Object.create(Uint32Array.prototype));
		Object.assign(hi.prototype, Ht.prototype, {
			constructor: hi,
			signed: !0,
			TypedArray: Int32Array,
			BigIntArray: ys.BigInt64Array
		});
		Object.assign(pi.prototype, Ht.prototype, {
			constructor: pi,
			signed: !1,
			TypedArray: Uint32Array,
			BigIntArray: ys.BigUint64Array
		});
		Object.assign(_s.prototype, Ht.prototype, {
			constructor: _s,
			signed: !0,
			TypedArray: Uint32Array,
			BigIntArray: ys.BigUint64Array
		});
		function qh(r) {
			let { buffer: e, byteOffset: t, length: n, signed: i } = r,
				s = new Int32Array(e, t, n),
				o = 0,
				a = 0,
				l = s.length,
				f,
				y;
			for (; a < l; )
				(y = s[a++]), (f = s[a++]), i || (f = f >>> 0), (o += (y >>> 0) + f * Math.pow(a, 32));
			return o;
		}
		ys.BigIntAvailable
			? ((ze.bignumToBigInt = (r) =>
					r.byteLength === 8 ? new r.BigIntArray(r.buffer, r.byteOffset, 1)[0] : Bc(r)),
			  (ze.bignumToString = (r) =>
					r.byteLength === 8 ? `${new r.BigIntArray(r.buffer, r.byteOffset, 1)[0]}` : Bc(r)))
			: ((ze.bignumToString = Bc), (ze.bignumToBigInt = ze.bignumToString));
		function Bc(r) {
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
		var Yo = class {
			static new(e, t) {
				switch (t) {
					case !0:
						return new hi(e);
					case !1:
						return new pi(e);
				}
				switch (e.constructor) {
					case Int8Array:
					case Int16Array:
					case Int32Array:
					case ys.BigInt64Array:
						return new hi(e);
				}
				return e.byteLength === 16 ? new _s(e) : new pi(e);
			}
			static signed(e) {
				return new hi(e);
			}
			static unsigned(e) {
				return new pi(e);
			}
			static decimal(e) {
				return new _s(e);
			}
			constructor(e, t) {
				return Yo.new(e, t);
			}
		};
		ze.BN = Yo;
	});
	var wc = g((xe) => {
		'use strict';
		Object.defineProperty(xe, '__esModule', { value: !0 });
		xe.Uint64Builder =
			xe.Uint32Builder =
			xe.Uint16Builder =
			xe.Uint8Builder =
			xe.Int64Builder =
			xe.Int32Builder =
			xe.Int16Builder =
			xe.Int8Builder =
			xe.IntBuilder =
				void 0;
		var LT = ms(),
			Wh = Jr(),
			kT = rt(),
			xT = De(),
			sr = class extends xT.FixedWidthBuilder {
				setValue(e, t) {
					this._values.set(e, t);
				}
			};
		xe.IntBuilder = sr;
		var zh = class extends sr {};
		xe.Int8Builder = zh;
		var Hh = class extends sr {};
		xe.Int16Builder = Hh;
		var Yh = class extends sr {};
		xe.Int32Builder = Yh;
		var Gh = class extends sr {
			constructor(e) {
				e.nullValues && (e.nullValues = e.nullValues.map(Go));
				super(e);
				this._values = new Wh.WideBufferBuilder(new Int32Array(0), 2);
			}
			get values64() {
				return this._values.buffer64;
			}
			isValid(e) {
				return super.isValid(Go(e));
			}
		};
		xe.Int64Builder = Gh;
		var $h = class extends sr {};
		xe.Uint8Builder = $h;
		var Jh = class extends sr {};
		xe.Uint16Builder = Jh;
		var Kh = class extends sr {};
		xe.Uint32Builder = Kh;
		var Zh = class extends sr {
			constructor(e) {
				e.nullValues && (e.nullValues = e.nullValues.map(Go));
				super(e);
				this._values = new Wh.WideBufferBuilder(new Uint32Array(0), 2);
			}
			get values64() {
				return this._values.buffer64;
			}
			isValid(e) {
				return super.isValid(Go(e));
			}
		};
		xe.Uint64Builder = Zh;
		var Go = ((r) => (e) => (
			ArrayBuffer.isView(e) &&
				((r.buffer = e.buffer),
				(r.byteOffset = e.byteOffset),
				(r.byteLength = e.byteLength),
				(e = LT.bignumToBigInt(r)),
				(r.buffer = null)),
			e
		))({ BigIntArray: kT.BigInt64Array });
	});
	var Sc = g((wt) => {
		'use strict';
		Object.defineProperty(wt, '__esModule', { value: !0 });
		wt.TimeNanosecondBuilder =
			wt.TimeMicrosecondBuilder =
			wt.TimeMillisecondBuilder =
			wt.TimeSecondBuilder =
			wt.TimeBuilder =
				void 0;
		var CT = De(),
			yi = class extends CT.FixedWidthBuilder {};
		wt.TimeBuilder = yi;
		var Xh = class extends yi {};
		wt.TimeSecondBuilder = Xh;
		var Qh = class extends yi {};
		wt.TimeMillisecondBuilder = Qh;
		var ep = class extends yi {};
		wt.TimeMicrosecondBuilder = ep;
		var tp = class extends yi {};
		wt.TimeNanosecondBuilder = tp;
	});
	var Ac = g((St) => {
		'use strict';
		Object.defineProperty(St, '__esModule', { value: !0 });
		St.TimestampNanosecondBuilder =
			St.TimestampMicrosecondBuilder =
			St.TimestampMillisecondBuilder =
			St.TimestampSecondBuilder =
			St.TimestampBuilder =
				void 0;
		var jT = De(),
			_i = class extends jT.FixedWidthBuilder {};
		St.TimestampBuilder = _i;
		var rp = class extends _i {};
		St.TimestampSecondBuilder = rp;
		var np = class extends _i {};
		St.TimestampMillisecondBuilder = np;
		var ip = class extends _i {};
		St.TimestampMicrosecondBuilder = ip;
		var sp = class extends _i {};
		St.TimestampNanosecondBuilder = sp;
	});
	var Dc = g((Xr) => {
		'use strict';
		Object.defineProperty(Xr, '__esModule', { value: !0 });
		Xr.IntervalYearMonthBuilder = Xr.IntervalDayTimeBuilder = Xr.IntervalBuilder = void 0;
		var qT = De(),
			$o = class extends qT.FixedWidthBuilder {};
		Xr.IntervalBuilder = $o;
		var op = class extends $o {};
		Xr.IntervalDayTimeBuilder = op;
		var ap = class extends $o {};
		Xr.IntervalYearMonthBuilder = ap;
	});
	var Ko = g((Jo) => {
		'use strict';
		Object.defineProperty(Jo, '__esModule', { value: !0 });
		Jo.BinaryBuilder = void 0;
		var WT = We(),
			zT = Jr(),
			HT = De(),
			up = class extends HT.VariableWidthBuilder {
				constructor(e) {
					super(e);
					this._values = new zT.BufferBuilder(new Uint8Array(0));
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
					return super.setValue(e, WT.toUint8Array(t));
				}
				_flushPending(e, t) {
					let n = this._offsets,
						i = this._values.reserve(t).buffer,
						s = 0,
						o = 0,
						a = 0,
						l;
					for ([s, l] of e)
						l === void 0 ? n.set(s, 0) : ((o = l.length), i.set(l, a), n.set(s, o), (a += o));
				}
			};
		Jo.BinaryBuilder = up;
	});
	var Xo = g((Zo) => {
		'use strict';
		Object.defineProperty(Zo, '__esModule', { value: !0 });
		Zo.Utf8Builder = void 0;
		var YT = An(),
			GT = Ko(),
			$T = Jr(),
			JT = De(),
			Fc = class extends JT.VariableWidthBuilder {
				constructor(e) {
					super(e);
					this._values = new $T.BufferBuilder(new Uint8Array(0));
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
					return super.setValue(e, YT.encodeUtf8(t));
				}
				_flushPending(e, t) {}
			};
		Zo.Utf8Builder = Fc;
		Fc.prototype._flushPending = GT.BinaryBuilder.prototype._flushPending;
	});
	var Oc = g((Qo) => {
		'use strict';
		Object.defineProperty(Qo, '__esModule', { value: !0 });
		Qo.Run = void 0;
		var KT = Ve(),
			cp = class {
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
					return e instanceof KT.Vector ? e : ((this._values = e), this);
				}
			};
		Qo.Run = cp;
	});
	var $e = g((mi) => {
		'use strict';
		Object.defineProperty(mi, '__esModule', { value: !0 });
		mi.Field = mi.Schema = void 0;
		var ZT = oe(),
			At = class {
				constructor(e = [], t, n) {
					(this.fields = e || []),
						(this.metadata = t || new Map()),
						n || (n = Mc(e)),
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
					return new At(
						this.fields.filter((n) => t[n.name]),
						this.metadata
					);
				}
				selectAt(...e) {
					return new At(e.map((t) => this.fields[t]).filter(Boolean), this.metadata);
				}
				assign(...e) {
					let t = e[0] instanceof At ? e[0] : Array.isArray(e[0]) ? new At(e[0]) : new At(e),
						n = [...this.fields],
						i = ea(ea(new Map(), this.metadata), t.metadata),
						s = t.fields.filter((a) => {
							let l = n.findIndex((f) => f.name === a.name);
							return ~l
								? (n[l] = a.clone({ metadata: ea(ea(new Map(), n[l].metadata), a.metadata) })) && !1
								: !0;
						}),
						o = Mc(s, new Map());
					return new At([...n, ...s], i, new Map([...this.dictionaries, ...o]));
				}
			};
		mi.Schema = At;
		var Sr = class {
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
					new Sr(`${t}`, n, i, s)
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
					Sr.new(t, n, i, s)
				);
			}
		};
		mi.Field = Sr;
		function ea(r, e) {
			return new Map([...(r || new Map()), ...(e || new Map())]);
		}
		function Mc(r, e = new Map()) {
			for (let t = -1, n = r.length; ++t < n; ) {
				let s = r[t].type;
				if (ZT.DataType.isDictionary(s)) {
					if (!e.has(s.id)) e.set(s.id, s.dictionary);
					else if (e.get(s.id) !== s.dictionary)
						throw new Error(
							'Cannot create Schema containing two different dictionaries with the same Id'
						);
				}
				s.children && s.children.length > 0 && Mc(s.children, e);
			}
			return e;
		}
		At.prototype.fields = null;
		At.prototype.metadata = null;
		At.prototype.dictionaries = null;
		Sr.prototype.type = null;
		Sr.prototype.name = null;
		Sr.prototype.nullable = null;
		Sr.prototype.metadata = null;
	});
	var Ec = g((ta) => {
		'use strict';
		Object.defineProperty(ta, '__esModule', { value: !0 });
		ta.ListBuilder = void 0;
		var XT = Oc(),
			QT = $e(),
			eI = oe(),
			tI = Jr(),
			rI = De(),
			lp = class extends rI.VariableWidthBuilder {
				constructor(e) {
					super(e);
					(this._run = new XT.Run()), (this._offsets = new tI.OffsetsBufferBuilder());
				}
				addChild(e, t = '0') {
					if (this.numChildren > 0) throw new Error('ListBuilder can only have one child.');
					return (
						(this.children[this.numChildren] = e),
						(this.type = new eI.List(new QT.Field(t, e.type, !0))),
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
		ta.ListBuilder = lp;
	});
	var Rc = g((ra) => {
		'use strict';
		Object.defineProperty(ra, '__esModule', { value: !0 });
		ra.FixedSizeListBuilder = void 0;
		var nI = Oc(),
			iI = $e(),
			sI = De(),
			oI = oe(),
			dp = class extends sI.Builder {
				constructor() {
					super(...arguments);
					this._run = new nI.Run();
				}
				setValue(e, t) {
					super.setValue(e, this._run.bind(t));
				}
				addChild(e, t = '0') {
					if (this.numChildren > 0)
						throw new Error('FixedSizeListBuilder can only have one child.');
					let n = this.children.push(e);
					return (
						(this.type = new oI.FixedSizeList(this.type.listSize, new iI.Field(t, e.type, !0))), n
					);
				}
				clear() {
					return this._run.clear(), super.clear();
				}
			};
		ra.FixedSizeListBuilder = dp;
	});
	var Uc = g((na) => {
		'use strict';
		Object.defineProperty(na, '__esModule', { value: !0 });
		na.MapBuilder = void 0;
		var aI = $e(),
			uI = oe(),
			cI = De(),
			fp = class extends cI.VariableWidthBuilder {
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
						(this.type = new uI.Map_(new aI.Field(t, e.type, !0), this.type.keysSorted)),
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
		na.MapBuilder = fp;
	});
	var Vc = g((ia) => {
		'use strict';
		Object.defineProperty(ia, '__esModule', { value: !0 });
		ia.StructBuilder = void 0;
		var lI = $e(),
			dI = De(),
			fI = oe(),
			hp = class extends dI.Builder {
				addChild(e, t = `${this.numChildren}`) {
					let n = this.children.push(e);
					return (
						(this.type = new fI.Struct([...this.type.children, new lI.Field(t, e.type, !0)])), n
					);
				}
			};
		ia.StructBuilder = hp;
	});
	var Pc = g((Qr) => {
		'use strict';
		Object.defineProperty(Qr, '__esModule', { value: !0 });
		Qr.DenseUnionBuilder = Qr.SparseUnionBuilder = Qr.UnionBuilder = void 0;
		var hI = $e(),
			pp = Jr(),
			pI = De(),
			yI = oe(),
			sa = class extends pI.Builder {
				constructor(e) {
					super(e);
					(this._typeIds = new pp.DataBufferBuilder(new Int8Array(0), 1)),
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
						a = [...i, new hI.Field(t, e.type)];
					return (this.type = new yI.Union(s, [...o, n], a)), n;
				}
				_valueToChildTypeId(e, t, n) {
					throw new Error(
						'Cannot map UnionBuilder value to child typeId. Pass the `childTypeId` as the second argument to unionBuilder.append(), or supply a `valueToChildTypeId` function as part of the UnionBuilder constructor options.'
					);
				}
			};
		Qr.UnionBuilder = sa;
		var yp = class extends sa {};
		Qr.SparseUnionBuilder = yp;
		var _p = class extends sa {
			constructor(e) {
				super(e);
				this._offsets = new pp.DataBufferBuilder(new Int32Array(0));
			}
			setValue(e, t, n) {
				let i = this.type.typeIdToChildIndex[n];
				return this._offsets.set(e, this.getChildAt(i).length), super.setValue(e, t, n);
			}
		};
		Qr.DenseUnionBuilder = _p;
	});
	var Xe = g((oa) => {
		'use strict';
		Object.defineProperty(oa, '__esModule', { value: !0 });
		oa.Visitor = void 0;
		var _I = zt(),
			mI = Ve(),
			b = _e(),
			bI = oe(),
			pe = class {
				visitMany(e, ...t) {
					return e.map((n, i) => this.visit(n, ...t.map((s) => s[i])));
				}
				visit(...e) {
					return this.getVisitFn(e[0], !1).apply(this, e);
				}
				getVisitFn(e, t = !0) {
					return gI(this, e, t);
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
		oa.Visitor = pe;
		function gI(r, e, t = !0) {
			let n = null,
				i = b.Type.NONE;
			switch (
				(e instanceof _I.Data || e instanceof mI.Vector
					? (i = Nc(e.type))
					: e instanceof bI.DataType
					? (i = Nc(e))
					: typeof (i = e) != 'number' && (i = b.Type[e]),
				i)
			) {
				case b.Type.Null:
					n = r.visitNull;
					break;
				case b.Type.Bool:
					n = r.visitBool;
					break;
				case b.Type.Int:
					n = r.visitInt;
					break;
				case b.Type.Int8:
					n = r.visitInt8 || r.visitInt;
					break;
				case b.Type.Int16:
					n = r.visitInt16 || r.visitInt;
					break;
				case b.Type.Int32:
					n = r.visitInt32 || r.visitInt;
					break;
				case b.Type.Int64:
					n = r.visitInt64 || r.visitInt;
					break;
				case b.Type.Uint8:
					n = r.visitUint8 || r.visitInt;
					break;
				case b.Type.Uint16:
					n = r.visitUint16 || r.visitInt;
					break;
				case b.Type.Uint32:
					n = r.visitUint32 || r.visitInt;
					break;
				case b.Type.Uint64:
					n = r.visitUint64 || r.visitInt;
					break;
				case b.Type.Float:
					n = r.visitFloat;
					break;
				case b.Type.Float16:
					n = r.visitFloat16 || r.visitFloat;
					break;
				case b.Type.Float32:
					n = r.visitFloat32 || r.visitFloat;
					break;
				case b.Type.Float64:
					n = r.visitFloat64 || r.visitFloat;
					break;
				case b.Type.Utf8:
					n = r.visitUtf8;
					break;
				case b.Type.Binary:
					n = r.visitBinary;
					break;
				case b.Type.FixedSizeBinary:
					n = r.visitFixedSizeBinary;
					break;
				case b.Type.Date:
					n = r.visitDate;
					break;
				case b.Type.DateDay:
					n = r.visitDateDay || r.visitDate;
					break;
				case b.Type.DateMillisecond:
					n = r.visitDateMillisecond || r.visitDate;
					break;
				case b.Type.Timestamp:
					n = r.visitTimestamp;
					break;
				case b.Type.TimestampSecond:
					n = r.visitTimestampSecond || r.visitTimestamp;
					break;
				case b.Type.TimestampMillisecond:
					n = r.visitTimestampMillisecond || r.visitTimestamp;
					break;
				case b.Type.TimestampMicrosecond:
					n = r.visitTimestampMicrosecond || r.visitTimestamp;
					break;
				case b.Type.TimestampNanosecond:
					n = r.visitTimestampNanosecond || r.visitTimestamp;
					break;
				case b.Type.Time:
					n = r.visitTime;
					break;
				case b.Type.TimeSecond:
					n = r.visitTimeSecond || r.visitTime;
					break;
				case b.Type.TimeMillisecond:
					n = r.visitTimeMillisecond || r.visitTime;
					break;
				case b.Type.TimeMicrosecond:
					n = r.visitTimeMicrosecond || r.visitTime;
					break;
				case b.Type.TimeNanosecond:
					n = r.visitTimeNanosecond || r.visitTime;
					break;
				case b.Type.Decimal:
					n = r.visitDecimal;
					break;
				case b.Type.List:
					n = r.visitList;
					break;
				case b.Type.Struct:
					n = r.visitStruct;
					break;
				case b.Type.Union:
					n = r.visitUnion;
					break;
				case b.Type.DenseUnion:
					n = r.visitDenseUnion || r.visitUnion;
					break;
				case b.Type.SparseUnion:
					n = r.visitSparseUnion || r.visitUnion;
					break;
				case b.Type.Dictionary:
					n = r.visitDictionary;
					break;
				case b.Type.Interval:
					n = r.visitInterval;
					break;
				case b.Type.IntervalDayTime:
					n = r.visitIntervalDayTime || r.visitInterval;
					break;
				case b.Type.IntervalYearMonth:
					n = r.visitIntervalYearMonth || r.visitInterval;
					break;
				case b.Type.FixedSizeList:
					n = r.visitFixedSizeList;
					break;
				case b.Type.Map:
					n = r.visitMap;
					break;
			}
			if (typeof n == 'function') return n;
			if (!t) return () => null;
			throw new Error(`Unrecognized type '${b.Type[i]}'`);
		}
		function Nc(r) {
			switch (r.typeId) {
				case b.Type.Null:
					return b.Type.Null;
				case b.Type.Int: {
					let { bitWidth: e, isSigned: t } = r;
					switch (e) {
						case 8:
							return t ? b.Type.Int8 : b.Type.Uint8;
						case 16:
							return t ? b.Type.Int16 : b.Type.Uint16;
						case 32:
							return t ? b.Type.Int32 : b.Type.Uint32;
						case 64:
							return t ? b.Type.Int64 : b.Type.Uint64;
					}
					return b.Type.Int;
				}
				case b.Type.Float:
					switch (r.precision) {
						case b.Precision.HALF:
							return b.Type.Float16;
						case b.Precision.SINGLE:
							return b.Type.Float32;
						case b.Precision.DOUBLE:
							return b.Type.Float64;
					}
					return b.Type.Float;
				case b.Type.Binary:
					return b.Type.Binary;
				case b.Type.Utf8:
					return b.Type.Utf8;
				case b.Type.Bool:
					return b.Type.Bool;
				case b.Type.Decimal:
					return b.Type.Decimal;
				case b.Type.Time:
					switch (r.unit) {
						case b.TimeUnit.SECOND:
							return b.Type.TimeSecond;
						case b.TimeUnit.MILLISECOND:
							return b.Type.TimeMillisecond;
						case b.TimeUnit.MICROSECOND:
							return b.Type.TimeMicrosecond;
						case b.TimeUnit.NANOSECOND:
							return b.Type.TimeNanosecond;
					}
					return b.Type.Time;
				case b.Type.Timestamp:
					switch (r.unit) {
						case b.TimeUnit.SECOND:
							return b.Type.TimestampSecond;
						case b.TimeUnit.MILLISECOND:
							return b.Type.TimestampMillisecond;
						case b.TimeUnit.MICROSECOND:
							return b.Type.TimestampMicrosecond;
						case b.TimeUnit.NANOSECOND:
							return b.Type.TimestampNanosecond;
					}
					return b.Type.Timestamp;
				case b.Type.Date:
					switch (r.unit) {
						case b.DateUnit.DAY:
							return b.Type.DateDay;
						case b.DateUnit.MILLISECOND:
							return b.Type.DateMillisecond;
					}
					return b.Type.Date;
				case b.Type.Interval:
					switch (r.unit) {
						case b.IntervalUnit.DAY_TIME:
							return b.Type.IntervalDayTime;
						case b.IntervalUnit.YEAR_MONTH:
							return b.Type.IntervalYearMonth;
					}
					return b.Type.Interval;
				case b.Type.Map:
					return b.Type.Map;
				case b.Type.List:
					return b.Type.List;
				case b.Type.Struct:
					return b.Type.Struct;
				case b.Type.Union:
					switch (r.mode) {
						case b.UnionMode.Dense:
							return b.Type.DenseUnion;
						case b.UnionMode.Sparse:
							return b.Type.SparseUnion;
					}
					return b.Type.Union;
				case b.Type.FixedSizeBinary:
					return b.Type.FixedSizeBinary;
				case b.Type.FixedSizeList:
					return b.Type.FixedSizeList;
				case b.Type.Dictionary:
					return b.Type.Dictionary;
			}
			throw new Error(`Unrecognized type '${b.Type[r.typeId]}'`);
		}
		pe.prototype.visitInt8 = null;
		pe.prototype.visitInt16 = null;
		pe.prototype.visitInt32 = null;
		pe.prototype.visitInt64 = null;
		pe.prototype.visitUint8 = null;
		pe.prototype.visitUint16 = null;
		pe.prototype.visitUint32 = null;
		pe.prototype.visitUint64 = null;
		pe.prototype.visitFloat16 = null;
		pe.prototype.visitFloat32 = null;
		pe.prototype.visitFloat64 = null;
		pe.prototype.visitDateDay = null;
		pe.prototype.visitDateMillisecond = null;
		pe.prototype.visitTimestampSecond = null;
		pe.prototype.visitTimestampMillisecond = null;
		pe.prototype.visitTimestampMicrosecond = null;
		pe.prototype.visitTimestampNanosecond = null;
		pe.prototype.visitTimeSecond = null;
		pe.prototype.visitTimeMillisecond = null;
		pe.prototype.visitTimeMicrosecond = null;
		pe.prototype.visitTimeNanosecond = null;
		pe.prototype.visitDenseUnion = null;
		pe.prototype.visitSparseUnion = null;
		pe.prototype.visitIntervalDayTime = null;
		pe.prototype.visitIntervalYearMonth = null;
	});
	var xc = g((bi) => {
		'use strict';
		Object.defineProperty(bi, '__esModule', { value: !0 });
		bi.instance = bi.SetVisitor = void 0;
		var vI = Ve(),
			TI = Xe(),
			II = An(),
			BI = hs(),
			wI = We(),
			Dt = _e(),
			$ = class extends TI.Visitor {};
		bi.SetVisitor = $;
		var SI = (r, e, t) => {
				r[e] = (t / 864e5) | 0;
			},
			Lc = (r, e, t) => {
				(r[e] = t % 4294967296 | 0), (r[e + 1] = (t / 4294967296) | 0);
			},
			AI = (r, e, t) => {
				(r[e] = (t * 1e3) % 4294967296 | 0), (r[e + 1] = ((t * 1e3) / 4294967296) | 0);
			},
			DI = (r, e, t) => {
				(r[e] = (t * 1e6) % 4294967296 | 0), (r[e + 1] = ((t * 1e6) / 4294967296) | 0);
			},
			mp = (r, e, t, n) => {
				let { [t]: i, [t + 1]: s } = e;
				i != null && s != null && r.set(n.subarray(0, s - i), i);
			},
			FI = ({ offset: r, values: e }, t, n) => {
				let i = r + t;
				n ? (e[i >> 3] |= 1 << i % 8) : (e[i >> 3] &= ~(1 << i % 8));
			},
			bp = ({ values: r }, e, t) => {
				SI(r, e, t.valueOf());
			},
			gp = ({ values: r }, e, t) => {
				Lc(r, e * 2, t.valueOf());
			},
			or = ({ stride: r, values: e }, t, n) => {
				e[r * t] = n;
			},
			vp = ({ stride: r, values: e }, t, n) => {
				e[r * t] = BI.float64ToUint16(n);
			},
			kc = (r, e, t) => {
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
							o = wI.toArrayBufferView(s, n);
						r.values.set(o.subarray(0, i), i * e);
					}
				}
			},
			OI = ({ stride: r, values: e }, t, n) => {
				e.set(n.subarray(0, r), r * t);
			},
			MI = ({ values: r, valueOffsets: e }, t, n) => mp(r, e, t, n),
			EI = ({ values: r, valueOffsets: e }, t, n) => {
				mp(r, e, t, II.encodeUtf8(n));
			},
			RI = (r, e, t) => {
				r.type.bitWidth < 64 ? or(r, e, t) : kc(r, e, t);
			},
			UI = (r, e, t) => {
				r.type.precision !== Dt.Precision.HALF ? or(r, e, t) : vp(r, e, t);
			},
			VI = (r, e, t) => {
				r.type.unit === Dt.DateUnit.DAY ? bp(r, e, t) : gp(r, e, t);
			},
			Tp = ({ values: r }, e, t) => Lc(r, e * 2, t / 1e3),
			Ip = ({ values: r }, e, t) => Lc(r, e * 2, t),
			Bp = ({ values: r }, e, t) => AI(r, e * 2, t),
			wp = ({ values: r }, e, t) => DI(r, e * 2, t),
			PI = (r, e, t) => {
				switch (r.type.unit) {
					case Dt.TimeUnit.SECOND:
						return Tp(r, e, t);
					case Dt.TimeUnit.MILLISECOND:
						return Ip(r, e, t);
					case Dt.TimeUnit.MICROSECOND:
						return Bp(r, e, t);
					case Dt.TimeUnit.NANOSECOND:
						return wp(r, e, t);
				}
			},
			Sp = ({ values: r, stride: e }, t, n) => {
				r[e * t] = n;
			},
			Ap = ({ values: r, stride: e }, t, n) => {
				r[e * t] = n;
			},
			Dp = ({ values: r }, e, t) => {
				r.set(t.subarray(0, 2), 2 * e);
			},
			Fp = ({ values: r }, e, t) => {
				r.set(t.subarray(0, 2), 2 * e);
			},
			NI = (r, e, t) => {
				switch (r.type.unit) {
					case Dt.TimeUnit.SECOND:
						return Sp(r, e, t);
					case Dt.TimeUnit.MILLISECOND:
						return Ap(r, e, t);
					case Dt.TimeUnit.MICROSECOND:
						return Dp(r, e, t);
					case Dt.TimeUnit.NANOSECOND:
						return Fp(r, e, t);
				}
			},
			LI = ({ values: r }, e, t) => {
				r.set(t.subarray(0, 4), 4 * e);
			},
			kI = (r, e, t) => {
				let n = r.getChildAt(0),
					i = r.valueOffsets;
				for (let s = -1, o = i[e], a = i[e + 1]; o < a; ) n.set(o++, t.get(++s));
			},
			xI = (r, e, t) => {
				let n = r.getChildAt(0),
					i = r.valueOffsets,
					s = t instanceof Map ? [...t] : Object.entries(t);
				for (let o = -1, a = i[e], l = i[e + 1]; a < l; ) n.set(a++, s[++o]);
			},
			CI = (r, e) => (t, n, i) => t == null ? void 0 : t.set(r, e[i]),
			jI = (r, e) => (t, n, i) => t == null ? void 0 : t.set(r, e.get(i)),
			qI = (r, e) => (t, n, i) => t == null ? void 0 : t.set(r, e.get(n.name)),
			WI = (r, e) => (t, n, i) => t == null ? void 0 : t.set(r, e[n.name]),
			zI = (r, e, t) => {
				let n =
					t instanceof Map
						? qI(e, t)
						: t instanceof vI.Vector
						? jI(e, t)
						: Array.isArray(t)
						? CI(e, t)
						: WI(e, t);
				r.type.children.forEach((i, s) => n(r.getChildAt(s), i, s));
			},
			HI = (r, e, t) => {
				r.type.mode === Dt.UnionMode.Dense ? Op(r, e, t) : Mp(r, e, t);
			},
			Op = (r, e, t) => {
				let n = r.typeIdToChildIndex[r.typeIds[e]],
					i = r.getChildAt(n);
				i && i.set(r.valueOffsets[e], t);
			},
			Mp = (r, e, t) => {
				let n = r.typeIdToChildIndex[r.typeIds[e]],
					i = r.getChildAt(n);
				i && i.set(e, t);
			},
			YI = (r, e, t) => {
				let n = r.getKey(e);
				n !== null && r.setValue(n, t);
			},
			GI = (r, e, t) => {
				r.type.unit === Dt.IntervalUnit.DAY_TIME ? Ep(r, e, t) : Rp(r, e, t);
			},
			Ep = ({ values: r }, e, t) => {
				r.set(t.subarray(0, 2), 2 * e);
			},
			Rp = ({ values: r }, e, t) => {
				r[e] = t[0] * 12 + (t[1] % 12);
			},
			$I = (r, e, t) => {
				let n = r.getChildAt(0),
					{ stride: i } = r;
				for (let s = -1, o = e * i; ++s < i; ) n.set(o + s, t.get(s));
			};
		$.prototype.visitBool = FI;
		$.prototype.visitInt = RI;
		$.prototype.visitInt8 = or;
		$.prototype.visitInt16 = or;
		$.prototype.visitInt32 = or;
		$.prototype.visitInt64 = kc;
		$.prototype.visitUint8 = or;
		$.prototype.visitUint16 = or;
		$.prototype.visitUint32 = or;
		$.prototype.visitUint64 = kc;
		$.prototype.visitFloat = UI;
		$.prototype.visitFloat16 = vp;
		$.prototype.visitFloat32 = or;
		$.prototype.visitFloat64 = or;
		$.prototype.visitUtf8 = EI;
		$.prototype.visitBinary = MI;
		$.prototype.visitFixedSizeBinary = OI;
		$.prototype.visitDate = VI;
		$.prototype.visitDateDay = bp;
		$.prototype.visitDateMillisecond = gp;
		$.prototype.visitTimestamp = PI;
		$.prototype.visitTimestampSecond = Tp;
		$.prototype.visitTimestampMillisecond = Ip;
		$.prototype.visitTimestampMicrosecond = Bp;
		$.prototype.visitTimestampNanosecond = wp;
		$.prototype.visitTime = NI;
		$.prototype.visitTimeSecond = Sp;
		$.prototype.visitTimeMillisecond = Ap;
		$.prototype.visitTimeMicrosecond = Dp;
		$.prototype.visitTimeNanosecond = Fp;
		$.prototype.visitDecimal = LI;
		$.prototype.visitList = kI;
		$.prototype.visitStruct = zI;
		$.prototype.visitUnion = HI;
		$.prototype.visitDenseUnion = Op;
		$.prototype.visitSparseUnion = Mp;
		$.prototype.visitDictionary = YI;
		$.prototype.visitInterval = GI;
		$.prototype.visitIntervalDayTime = Ep;
		$.prototype.visitIntervalYearMonth = Rp;
		$.prototype.visitFixedSizeList = $I;
		$.prototype.visitMap = xI;
		bi.instance = new $();
	});
	var Up = g((gi) => {
		'use strict';
		Object.defineProperty(gi, '__esModule', { value: !0 });
		gi.instance = gi.GetBuilderCtor = void 0;
		var JI = Xe(),
			KI = Ko(),
			ZI = yc(),
			Cc = mc(),
			XI = bc(),
			QI = vc(),
			eB = Tc(),
			tB = Rc(),
			aa = Ic(),
			jc = Dc(),
			Ar = wc(),
			rB = Ec(),
			nB = Uc(),
			iB = _c(),
			sB = Vc(),
			bs = Ac(),
			gs = Sc(),
			qc = Pc(),
			oB = Xo(),
			Wc = class extends JI.Visitor {
				visitNull() {
					return iB.NullBuilder;
				}
				visitBool() {
					return ZI.BoolBuilder;
				}
				visitInt() {
					return Ar.IntBuilder;
				}
				visitInt8() {
					return Ar.Int8Builder;
				}
				visitInt16() {
					return Ar.Int16Builder;
				}
				visitInt32() {
					return Ar.Int32Builder;
				}
				visitInt64() {
					return Ar.Int64Builder;
				}
				visitUint8() {
					return Ar.Uint8Builder;
				}
				visitUint16() {
					return Ar.Uint16Builder;
				}
				visitUint32() {
					return Ar.Uint32Builder;
				}
				visitUint64() {
					return Ar.Uint64Builder;
				}
				visitFloat() {
					return aa.FloatBuilder;
				}
				visitFloat16() {
					return aa.Float16Builder;
				}
				visitFloat32() {
					return aa.Float32Builder;
				}
				visitFloat64() {
					return aa.Float64Builder;
				}
				visitUtf8() {
					return oB.Utf8Builder;
				}
				visitBinary() {
					return KI.BinaryBuilder;
				}
				visitFixedSizeBinary() {
					return eB.FixedSizeBinaryBuilder;
				}
				visitDate() {
					return Cc.DateBuilder;
				}
				visitDateDay() {
					return Cc.DateDayBuilder;
				}
				visitDateMillisecond() {
					return Cc.DateMillisecondBuilder;
				}
				visitTimestamp() {
					return bs.TimestampBuilder;
				}
				visitTimestampSecond() {
					return bs.TimestampSecondBuilder;
				}
				visitTimestampMillisecond() {
					return bs.TimestampMillisecondBuilder;
				}
				visitTimestampMicrosecond() {
					return bs.TimestampMicrosecondBuilder;
				}
				visitTimestampNanosecond() {
					return bs.TimestampNanosecondBuilder;
				}
				visitTime() {
					return gs.TimeBuilder;
				}
				visitTimeSecond() {
					return gs.TimeSecondBuilder;
				}
				visitTimeMillisecond() {
					return gs.TimeMillisecondBuilder;
				}
				visitTimeMicrosecond() {
					return gs.TimeMicrosecondBuilder;
				}
				visitTimeNanosecond() {
					return gs.TimeNanosecondBuilder;
				}
				visitDecimal() {
					return XI.DecimalBuilder;
				}
				visitList() {
					return rB.ListBuilder;
				}
				visitStruct() {
					return sB.StructBuilder;
				}
				visitUnion() {
					return qc.UnionBuilder;
				}
				visitDenseUnion() {
					return qc.DenseUnionBuilder;
				}
				visitSparseUnion() {
					return qc.SparseUnionBuilder;
				}
				visitDictionary() {
					return QI.DictionaryBuilder;
				}
				visitInterval() {
					return jc.IntervalBuilder;
				}
				visitIntervalDayTime() {
					return jc.IntervalDayTimeBuilder;
				}
				visitIntervalYearMonth() {
					return jc.IntervalYearMonthBuilder;
				}
				visitFixedSizeList() {
					return tB.FixedSizeListBuilder;
				}
				visitMap() {
					return nB.MapBuilder;
				}
			};
		gi.GetBuilderCtor = Wc;
		gi.instance = new Wc();
	});
	var ca = g((w) => {
		'use strict';
		Object.defineProperty(w, '__esModule', { value: !0 });
		w.DenseUnionBuilder =
			w.SparseUnionBuilder =
			w.UnionBuilder =
			w.StructBuilder =
			w.MapBuilder =
			w.FixedSizeListBuilder =
			w.ListBuilder =
			w.BinaryBuilder =
			w.Utf8Builder =
			w.IntervalYearMonthBuilder =
			w.IntervalDayTimeBuilder =
			w.IntervalBuilder =
			w.TimestampNanosecondBuilder =
			w.TimestampMicrosecondBuilder =
			w.TimestampMillisecondBuilder =
			w.TimestampSecondBuilder =
			w.TimestampBuilder =
			w.TimeNanosecondBuilder =
			w.TimeMicrosecondBuilder =
			w.TimeMillisecondBuilder =
			w.TimeSecondBuilder =
			w.TimeBuilder =
			w.Uint64Builder =
			w.Uint32Builder =
			w.Uint16Builder =
			w.Uint8Builder =
			w.Int64Builder =
			w.Int32Builder =
			w.Int16Builder =
			w.Int8Builder =
			w.IntBuilder =
			w.Float64Builder =
			w.Float32Builder =
			w.Float16Builder =
			w.FloatBuilder =
			w.FixedSizeBinaryBuilder =
			w.DictionaryBuilder =
			w.DecimalBuilder =
			w.DateMillisecondBuilder =
			w.DateDayBuilder =
			w.DateBuilder =
			w.NullBuilder =
			w.BoolBuilder =
			w.Builder =
				void 0;
		var aB = De();
		Object.defineProperty(w, 'Builder', {
			enumerable: !0,
			get: function () {
				return aB.Builder;
			}
		});
		var uB = yc();
		Object.defineProperty(w, 'BoolBuilder', {
			enumerable: !0,
			get: function () {
				return uB.BoolBuilder;
			}
		});
		var cB = _c();
		Object.defineProperty(w, 'NullBuilder', {
			enumerable: !0,
			get: function () {
				return cB.NullBuilder;
			}
		});
		var zc = mc();
		Object.defineProperty(w, 'DateBuilder', {
			enumerable: !0,
			get: function () {
				return zc.DateBuilder;
			}
		});
		Object.defineProperty(w, 'DateDayBuilder', {
			enumerable: !0,
			get: function () {
				return zc.DateDayBuilder;
			}
		});
		Object.defineProperty(w, 'DateMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return zc.DateMillisecondBuilder;
			}
		});
		var lB = bc();
		Object.defineProperty(w, 'DecimalBuilder', {
			enumerable: !0,
			get: function () {
				return lB.DecimalBuilder;
			}
		});
		var dB = vc();
		Object.defineProperty(w, 'DictionaryBuilder', {
			enumerable: !0,
			get: function () {
				return dB.DictionaryBuilder;
			}
		});
		var fB = Tc();
		Object.defineProperty(w, 'FixedSizeBinaryBuilder', {
			enumerable: !0,
			get: function () {
				return fB.FixedSizeBinaryBuilder;
			}
		});
		var ua = Ic();
		Object.defineProperty(w, 'FloatBuilder', {
			enumerable: !0,
			get: function () {
				return ua.FloatBuilder;
			}
		});
		Object.defineProperty(w, 'Float16Builder', {
			enumerable: !0,
			get: function () {
				return ua.Float16Builder;
			}
		});
		Object.defineProperty(w, 'Float32Builder', {
			enumerable: !0,
			get: function () {
				return ua.Float32Builder;
			}
		});
		Object.defineProperty(w, 'Float64Builder', {
			enumerable: !0,
			get: function () {
				return ua.Float64Builder;
			}
		});
		var Dr = wc();
		Object.defineProperty(w, 'IntBuilder', {
			enumerable: !0,
			get: function () {
				return Dr.IntBuilder;
			}
		});
		Object.defineProperty(w, 'Int8Builder', {
			enumerable: !0,
			get: function () {
				return Dr.Int8Builder;
			}
		});
		Object.defineProperty(w, 'Int16Builder', {
			enumerable: !0,
			get: function () {
				return Dr.Int16Builder;
			}
		});
		Object.defineProperty(w, 'Int32Builder', {
			enumerable: !0,
			get: function () {
				return Dr.Int32Builder;
			}
		});
		Object.defineProperty(w, 'Int64Builder', {
			enumerable: !0,
			get: function () {
				return Dr.Int64Builder;
			}
		});
		Object.defineProperty(w, 'Uint8Builder', {
			enumerable: !0,
			get: function () {
				return Dr.Uint8Builder;
			}
		});
		Object.defineProperty(w, 'Uint16Builder', {
			enumerable: !0,
			get: function () {
				return Dr.Uint16Builder;
			}
		});
		Object.defineProperty(w, 'Uint32Builder', {
			enumerable: !0,
			get: function () {
				return Dr.Uint32Builder;
			}
		});
		Object.defineProperty(w, 'Uint64Builder', {
			enumerable: !0,
			get: function () {
				return Dr.Uint64Builder;
			}
		});
		var vs = Sc();
		Object.defineProperty(w, 'TimeBuilder', {
			enumerable: !0,
			get: function () {
				return vs.TimeBuilder;
			}
		});
		Object.defineProperty(w, 'TimeSecondBuilder', {
			enumerable: !0,
			get: function () {
				return vs.TimeSecondBuilder;
			}
		});
		Object.defineProperty(w, 'TimeMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return vs.TimeMillisecondBuilder;
			}
		});
		Object.defineProperty(w, 'TimeMicrosecondBuilder', {
			enumerable: !0,
			get: function () {
				return vs.TimeMicrosecondBuilder;
			}
		});
		Object.defineProperty(w, 'TimeNanosecondBuilder', {
			enumerable: !0,
			get: function () {
				return vs.TimeNanosecondBuilder;
			}
		});
		var Ts = Ac();
		Object.defineProperty(w, 'TimestampBuilder', {
			enumerable: !0,
			get: function () {
				return Ts.TimestampBuilder;
			}
		});
		Object.defineProperty(w, 'TimestampSecondBuilder', {
			enumerable: !0,
			get: function () {
				return Ts.TimestampSecondBuilder;
			}
		});
		Object.defineProperty(w, 'TimestampMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return Ts.TimestampMillisecondBuilder;
			}
		});
		Object.defineProperty(w, 'TimestampMicrosecondBuilder', {
			enumerable: !0,
			get: function () {
				return Ts.TimestampMicrosecondBuilder;
			}
		});
		Object.defineProperty(w, 'TimestampNanosecondBuilder', {
			enumerable: !0,
			get: function () {
				return Ts.TimestampNanosecondBuilder;
			}
		});
		var Hc = Dc();
		Object.defineProperty(w, 'IntervalBuilder', {
			enumerable: !0,
			get: function () {
				return Hc.IntervalBuilder;
			}
		});
		Object.defineProperty(w, 'IntervalDayTimeBuilder', {
			enumerable: !0,
			get: function () {
				return Hc.IntervalDayTimeBuilder;
			}
		});
		Object.defineProperty(w, 'IntervalYearMonthBuilder', {
			enumerable: !0,
			get: function () {
				return Hc.IntervalYearMonthBuilder;
			}
		});
		var hB = Xo();
		Object.defineProperty(w, 'Utf8Builder', {
			enumerable: !0,
			get: function () {
				return hB.Utf8Builder;
			}
		});
		var pB = Ko();
		Object.defineProperty(w, 'BinaryBuilder', {
			enumerable: !0,
			get: function () {
				return pB.BinaryBuilder;
			}
		});
		var yB = Ec();
		Object.defineProperty(w, 'ListBuilder', {
			enumerable: !0,
			get: function () {
				return yB.ListBuilder;
			}
		});
		var _B = Rc();
		Object.defineProperty(w, 'FixedSizeListBuilder', {
			enumerable: !0,
			get: function () {
				return _B.FixedSizeListBuilder;
			}
		});
		var mB = Uc();
		Object.defineProperty(w, 'MapBuilder', {
			enumerable: !0,
			get: function () {
				return mB.MapBuilder;
			}
		});
		var bB = Vc();
		Object.defineProperty(w, 'StructBuilder', {
			enumerable: !0,
			get: function () {
				return bB.StructBuilder;
			}
		});
		var Yc = Pc();
		Object.defineProperty(w, 'UnionBuilder', {
			enumerable: !0,
			get: function () {
				return Yc.UnionBuilder;
			}
		});
		Object.defineProperty(w, 'SparseUnionBuilder', {
			enumerable: !0,
			get: function () {
				return Yc.SparseUnionBuilder;
			}
		});
		Object.defineProperty(w, 'DenseUnionBuilder', {
			enumerable: !0,
			get: function () {
				return Yc.DenseUnionBuilder;
			}
		});
		var Gc = _e(),
			gB = Xo(),
			vB = De(),
			Vp = xc(),
			Pp = Up();
		vB.Builder.new = Np;
		function Np(r) {
			let e = r.type,
				t = new (Pp.instance.getVisitFn(e)())(r);
			if (e.children && e.children.length > 0) {
				let n = r.children || [],
					i = { nullValues: r.nullValues },
					s = Array.isArray(n) ? (o, a) => n[a] || i : ({ name: o }) => n[o] || i;
				e.children.forEach((o, a) => {
					let { type: l } = o,
						f = s(o, a);
					t.children.push(Np(Object.assign(Object.assign({}, f), { type: l })));
				});
			}
			return t;
		}
		Object.keys(Gc.Type)
			.map((r) => Gc.Type[r])
			.filter((r) => typeof r == 'number' && r !== Gc.Type.NONE)
			.forEach((r) => {
				let e = Pp.instance.visit(r);
				e.prototype._setValue = Vp.instance.getVisitFn(r);
			});
		gB.Utf8Builder.prototype._setValue = Vp.instance.visitBinary;
	});
	var Lp = g((vi) => {
		'use strict';
		Object.defineProperty(vi, '__esModule', { value: !0 });
		vi.Block = vi.Footer = void 0;
		var TB = Tr(),
			la = Yr(),
			Ft = class {
				constructor() {
					(this.bb = null), (this.bb_pos = 0);
				}
				__init(e, t) {
					return (this.bb_pos = e), (this.bb = t), this;
				}
				static getRootAsFooter(e, t) {
					return (t || new Ft()).__init(e.readInt32(e.position()) + e.position(), e);
				}
				static getSizePrefixedRootAsFooter(e, t) {
					return (
						e.setPosition(e.position() + TB.flatbuffers.SIZE_PREFIX_LENGTH),
						(t || new Ft()).__init(e.readInt32(e.position()) + e.position(), e)
					);
				}
				version() {
					let e = this.bb.__offset(this.bb_pos, 4);
					return e ? this.bb.readInt16(this.bb_pos + e) : la.MetadataVersion.V1;
				}
				schema(e) {
					let t = this.bb.__offset(this.bb_pos, 6);
					return t
						? (e || new la.Schema()).__init(this.bb.__indirect(this.bb_pos + t), this.bb)
						: null;
				}
				dictionaries(e, t) {
					let n = this.bb.__offset(this.bb_pos, 8);
					return n
						? (t || new da()).__init(this.bb.__vector(this.bb_pos + n) + e * 24, this.bb)
						: null;
				}
				dictionariesLength() {
					let e = this.bb.__offset(this.bb_pos, 8);
					return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
				}
				recordBatches(e, t) {
					let n = this.bb.__offset(this.bb_pos, 10);
					return n
						? (t || new da()).__init(this.bb.__vector(this.bb_pos + n) + e * 24, this.bb)
						: null;
				}
				recordBatchesLength() {
					let e = this.bb.__offset(this.bb_pos, 10);
					return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
				}
				customMetadata(e, t) {
					let n = this.bb.__offset(this.bb_pos, 12);
					return n
						? (t || new la.KeyValue()).__init(
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
					e.addFieldInt16(0, t, la.MetadataVersion.V1);
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
						Ft.startFooter(e),
						Ft.addVersion(e, t),
						Ft.addSchema(e, n),
						Ft.addDictionaries(e, i),
						Ft.addRecordBatches(e, s),
						Ft.addCustomMetadata(e, o),
						Ft.endFooter(e)
					);
				}
			};
		vi.Footer = Ft;
		var da = class {
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
		vi.Block = da;
	});
	var Kc = g((Ti) => {
		'use strict';
		Object.defineProperty(Ti, '__esModule', { value: !0 });
		Ti.FileBlock = Ti.Footer = void 0;
		var Yt = Lp(),
			$c = Tr(),
			kp = $c.flatbuffers.Long,
			IB = $c.flatbuffers.Builder,
			BB = $c.flatbuffers.ByteBuffer,
			xp = $e(),
			Cp = _e(),
			wB = We(),
			Jc = class {
				constructor(e, t = Cp.MetadataVersion.V4, n, i) {
					(this.schema = e),
						(this.version = t),
						n && (this._recordBatches = n),
						i && (this._dictionaryBatches = i);
				}
				static decode(e) {
					e = new BB(wB.toUint8Array(e));
					let t = Yt.Footer.getRootAsFooter(e),
						n = xp.Schema.decode(t.schema());
					return new jp(n, t);
				}
				static encode(e) {
					let t = new IB(),
						n = xp.Schema.encode(t, e.schema);
					Yt.Footer.startRecordBatchesVector(t, e.numRecordBatches),
						[...e.recordBatches()]
							.slice()
							.reverse()
							.forEach((o) => en.encode(t, o));
					let i = t.endVector();
					Yt.Footer.startDictionariesVector(t, e.numDictionaries),
						[...e.dictionaryBatches()]
							.slice()
							.reverse()
							.forEach((o) => en.encode(t, o));
					let s = t.endVector();
					return (
						Yt.Footer.startFooter(t),
						Yt.Footer.addSchema(t, n),
						Yt.Footer.addVersion(t, Cp.MetadataVersion.V4),
						Yt.Footer.addRecordBatches(t, i),
						Yt.Footer.addDictionaries(t, s),
						Yt.Footer.finishFooterBuffer(t, Yt.Footer.endFooter(t)),
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
		Ti.Footer = Jc;
		var jp = class extends Jc {
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
						if (t) return en.decode(t);
					}
					return null;
				}
				getDictionaryBatch(e) {
					if (e >= 0 && e < this.numDictionaries) {
						let t = this._footer.dictionaries(e);
						if (t) return en.decode(t);
					}
					return null;
				}
			},
			en = class {
				constructor(e, t, n) {
					(this.metaDataLength = e),
						(this.offset = typeof n == 'number' ? n : n.low),
						(this.bodyLength = typeof t == 'number' ? t : t.low);
				}
				static decode(e) {
					return new en(e.metaDataLength(), e.bodyLength(), e.offset());
				}
				static encode(e, t) {
					let { metaDataLength: n } = t,
						i = new kp(t.offset, 0),
						s = new kp(t.bodyLength, 0);
					return Yt.Block.createBlock(e, i, n, s);
				}
			};
		Ti.FileBlock = en;
	});
	var on = g((sn) => {
		'use strict';
		Object.defineProperty(sn, '__esModule', { value: !0 });
		sn.AsyncByteStream = sn.ByteStream = sn.AsyncByteQueue = void 0;
		var tn = tt(),
			rn = ds(),
			qp = An(),
			Is = ni(),
			Zc = We(),
			Ii = rt(),
			Xc = class extends Is.AsyncQueue {
				write(e) {
					if ((e = Zc.toUint8Array(e)).byteLength > 0) return super.write(e);
				}
				toString(e = !1) {
					return e
						? qp.decodeUtf8(this.toUint8Array(!0))
						: this.toUint8Array(!1).then(qp.decodeUtf8);
				}
				toUint8Array(e = !1) {
					return e
						? Zc.joinUint8Arrays(this._values)[0]
						: (() =>
								tn.__awaiter(this, void 0, void 0, function* () {
									var t, n;
									let i = [],
										s = 0;
									try {
										for (var o = tn.__asyncValues(this), a; (a = yield o.next()), !a.done; ) {
											let l = a.value;
											i.push(l), (s += l.byteLength);
										}
									} catch (l) {
										t = { error: l };
									} finally {
										try {
											a && !a.done && (n = o.return) && (yield n.call(o));
										} finally {
											if (t) throw t.error;
										}
									}
									return Zc.joinUint8Arrays(i, s)[0];
								}))();
				}
			};
		sn.AsyncByteQueue = Xc;
		var Wp = class {
			constructor(e) {
				e && (this.source = new zp(rn.default.fromIterable(e)));
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
		sn.ByteStream = Wp;
		var fa = class {
			constructor(e) {
				e instanceof fa
					? (this.source = e.source)
					: e instanceof Xc
					? (this.source = new nn(rn.default.fromAsyncIterable(e)))
					: Ii.isReadableNodeStream(e)
					? (this.source = new nn(rn.default.fromNodeStream(e)))
					: Ii.isReadableDOMStream(e)
					? (this.source = new nn(rn.default.fromDOMStream(e)))
					: Ii.isFetchResponse(e)
					? (this.source = new nn(rn.default.fromDOMStream(e.body)))
					: Ii.isIterable(e)
					? (this.source = new nn(rn.default.fromIterable(e)))
					: Ii.isPromise(e)
					? (this.source = new nn(rn.default.fromAsyncIterable(e)))
					: Ii.isAsyncIterable(e) && (this.source = new nn(rn.default.fromAsyncIterable(e)));
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
		sn.AsyncByteStream = fa;
		var zp = class {
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
					return Object.create((this.source.throw && this.source.throw(e)) || Is.ITERATOR_DONE);
				}
				return(e) {
					return Object.create((this.source.return && this.source.return(e)) || Is.ITERATOR_DONE);
				}
			},
			nn = class {
				constructor(e) {
					(this.source = e),
						(this._closedPromise = new Promise((t) => (this._closedPromiseResolve = t)));
				}
				cancel(e) {
					return tn.__awaiter(this, void 0, void 0, function* () {
						yield this.return(e);
					});
				}
				get closed() {
					return this._closedPromise;
				}
				read(e) {
					return tn.__awaiter(this, void 0, void 0, function* () {
						return (yield this.next(e, 'read')).value;
					});
				}
				peek(e) {
					return tn.__awaiter(this, void 0, void 0, function* () {
						return (yield this.next(e, 'peek')).value;
					});
				}
				next(e, t = 'read') {
					return tn.__awaiter(this, void 0, void 0, function* () {
						return yield this.source.next({ cmd: t, size: e });
					});
				}
				throw(e) {
					return tn.__awaiter(this, void 0, void 0, function* () {
						let t = (this.source.throw && (yield this.source.throw(e))) || Is.ITERATOR_DONE;
						return (
							this._closedPromiseResolve && this._closedPromiseResolve(),
							(this._closedPromiseResolve = void 0),
							Object.create(t)
						);
					});
				}
				return(e) {
					return tn.__awaiter(this, void 0, void 0, function* () {
						let t = (this.source.return && (yield this.source.return(e))) || Is.ITERATOR_DONE;
						return (
							this._closedPromiseResolve && this._closedPromiseResolve(),
							(this._closedPromiseResolve = void 0),
							Object.create(t)
						);
					});
				}
			};
	});
	var Qc = g((Bi) => {
		'use strict';
		Object.defineProperty(Bi, '__esModule', { value: !0 });
		Bi.AsyncRandomAccessFile = Bi.RandomAccessFile = void 0;
		var an = tt(),
			Hp = on(),
			SB = We(),
			Yp = class extends Hp.ByteStream {
				constructor(e, t) {
					super();
					(this.position = 0),
						(this.buffer = SB.toUint8Array(e)),
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
		Bi.RandomAccessFile = Yp;
		var Gp = class extends Hp.AsyncByteStream {
			constructor(e, t) {
				super();
				(this.position = 0),
					(this._handle = e),
					typeof t == 'number'
						? (this.size = t)
						: (this._pending = (() =>
								an.__awaiter(this, void 0, void 0, function* () {
									(this.size = (yield e.stat()).size), delete this._pending;
								}))());
			}
			readInt32(e) {
				return an.__awaiter(this, void 0, void 0, function* () {
					let { buffer: t, byteOffset: n } = yield this.readAt(e, 4);
					return new DataView(t, n).getInt32(0, !0);
				});
			}
			seek(e) {
				return an.__awaiter(this, void 0, void 0, function* () {
					return (
						this._pending && (yield this._pending),
						(this.position = Math.min(e, this.size)),
						e < this.size
					);
				});
			}
			read(e) {
				return an.__awaiter(this, void 0, void 0, function* () {
					this._pending && (yield this._pending);
					let { _handle: t, size: n, position: i } = this;
					if (t && i < n) {
						typeof e != 'number' && (e = 1 / 0);
						let s = i,
							o = 0,
							a = 0,
							l = Math.min(n, s + Math.min(n - s, e)),
							f = new Uint8Array(Math.max(0, (this.position = l) - s));
						for (; (s += a) < l && (o += a) < f.byteLength; )
							({ bytesRead: a } = yield t.read(f, o, f.byteLength - o, s));
						return f;
					}
					return null;
				});
			}
			readAt(e, t) {
				return an.__awaiter(this, void 0, void 0, function* () {
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
				return an.__awaiter(this, void 0, void 0, function* () {
					let e = this._handle;
					(this._handle = null), e && (yield e.close());
				});
			}
			throw(e) {
				return an.__awaiter(this, void 0, void 0, function* () {
					return yield this.close(), { done: !0, value: e };
				});
			}
			return(e) {
				return an.__awaiter(this, void 0, void 0, function* () {
					return yield this.close(), { done: !0, value: e };
				});
			}
		};
		Bi.AsyncRandomAccessFile = Gp;
	});
	var tl = g((ar) => {
		'use strict';
		Object.defineProperty(ar, '__esModule', { value: !0 });
		ar.Int128 = ar.Int64 = ar.Uint64 = ar.BaseInt64 = void 0;
		var AB = 1 << 16;
		function wi(r) {
			return r < 0 && (r = 4294967295 + r + 1), `0x${r.toString(16)}`;
		}
		var Si = 8,
			el = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8],
			ha = class {
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
						(this.buffer[1] = s >>> 0 < i ? AB : 0),
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
					return `${wi(this.buffer[1])} ${wi(this.buffer[0])}`;
				}
			};
		ar.BaseInt64 = ha;
		var ae = class extends ha {
			times(e) {
				return this._times(e), this;
			}
			plus(e) {
				return this._plus(e), this;
			}
			static from(e, t = new Uint32Array(2)) {
				return ae.fromString(typeof e == 'string' ? e : e.toString(), t);
			}
			static fromNumber(e, t = new Uint32Array(2)) {
				return ae.fromString(e.toString(), t);
			}
			static fromString(e, t = new Uint32Array(2)) {
				let n = e.length,
					i = new ae(t);
				for (let s = 0; s < n; ) {
					let o = Si < n - s ? Si : n - s,
						a = new ae(new Uint32Array([parseInt(e.substr(s, o), 10), 0])),
						l = new ae(new Uint32Array([el[o], 0]));
					i.times(l), i.plus(a), (s += o);
				}
				return i;
			}
			static convertArray(e) {
				let t = new Uint32Array(e.length * 2);
				for (let n = -1, i = e.length; ++n < i; )
					ae.from(e[n], new Uint32Array(t.buffer, t.byteOffset + 2 * n * 4, 2));
				return t;
			}
			static multiply(e, t) {
				return new ae(new Uint32Array(e.buffer)).times(t);
			}
			static add(e, t) {
				return new ae(new Uint32Array(e.buffer)).plus(t);
			}
		};
		ar.Uint64 = ae;
		var dt = class extends ha {
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
				return dt.fromString(typeof e == 'string' ? e : e.toString(), t);
			}
			static fromNumber(e, t = new Uint32Array(2)) {
				return dt.fromString(e.toString(), t);
			}
			static fromString(e, t = new Uint32Array(2)) {
				let n = e.startsWith('-'),
					i = e.length,
					s = new dt(t);
				for (let o = n ? 1 : 0; o < i; ) {
					let a = Si < i - o ? Si : i - o,
						l = new dt(new Uint32Array([parseInt(e.substr(o, a), 10), 0])),
						f = new dt(new Uint32Array([el[a], 0]));
					s.times(f), s.plus(l), (o += a);
				}
				return n ? s.negate() : s;
			}
			static convertArray(e) {
				let t = new Uint32Array(e.length * 2);
				for (let n = -1, i = e.length; ++n < i; )
					dt.from(e[n], new Uint32Array(t.buffer, t.byteOffset + 2 * n * 4, 2));
				return t;
			}
			static multiply(e, t) {
				return new dt(new Uint32Array(e.buffer)).times(t);
			}
			static add(e, t) {
				return new dt(new Uint32Array(e.buffer)).plus(t);
			}
		};
		ar.Int64 = dt;
		var Gt = class {
			constructor(e) {
				this.buffer = e;
			}
			high() {
				return new dt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
			}
			low() {
				return new dt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
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
				let t = new ae(new Uint32Array([this.buffer[3], 0])),
					n = new ae(new Uint32Array([this.buffer[2], 0])),
					i = new ae(new Uint32Array([this.buffer[1], 0])),
					s = new ae(new Uint32Array([this.buffer[0], 0])),
					o = new ae(new Uint32Array([e.buffer[3], 0])),
					a = new ae(new Uint32Array([e.buffer[2], 0])),
					l = new ae(new Uint32Array([e.buffer[1], 0])),
					f = new ae(new Uint32Array([e.buffer[0], 0])),
					y = ae.multiply(s, f);
				this.buffer[0] = y.low();
				let F = new ae(new Uint32Array([y.high(), 0]));
				return (
					(y = ae.multiply(i, f)),
					F.plus(y),
					(y = ae.multiply(s, l)),
					F.plus(y),
					(this.buffer[1] = F.low()),
					(this.buffer[3] = F.lessThan(y) ? 1 : 0),
					(this.buffer[2] = F.high()),
					new ae(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2))
						.plus(ae.multiply(n, f))
						.plus(ae.multiply(i, l))
						.plus(ae.multiply(s, a)),
					(this.buffer[3] += ae
						.multiply(t, f)
						.plus(ae.multiply(n, l))
						.plus(ae.multiply(i, a))
						.plus(ae.multiply(s, o))
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
				return `${wi(this.buffer[3])} ${wi(this.buffer[2])} ${wi(this.buffer[1])} ${wi(
					this.buffer[0]
				)}`;
			}
			static multiply(e, t) {
				return new Gt(new Uint32Array(e.buffer)).times(t);
			}
			static add(e, t) {
				return new Gt(new Uint32Array(e.buffer)).plus(t);
			}
			static from(e, t = new Uint32Array(4)) {
				return Gt.fromString(typeof e == 'string' ? e : e.toString(), t);
			}
			static fromNumber(e, t = new Uint32Array(4)) {
				return Gt.fromString(e.toString(), t);
			}
			static fromString(e, t = new Uint32Array(4)) {
				let n = e.startsWith('-'),
					i = e.length,
					s = new Gt(t);
				for (let o = n ? 1 : 0; o < i; ) {
					let a = Si < i - o ? Si : i - o,
						l = new Gt(new Uint32Array([parseInt(e.substr(o, a), 10), 0, 0, 0])),
						f = new Gt(new Uint32Array([el[a], 0, 0, 0]));
					s.times(f), s.plus(l), (o += a);
				}
				return n ? s.negate() : s;
			}
			static convertArray(e) {
				let t = new Uint32Array(e.length * 4);
				for (let n = -1, i = e.length; ++n < i; )
					Gt.from(e[n], new Uint32Array(t.buffer, t.byteOffset + 4 * 4 * n, 4));
				return t;
			}
		};
		ar.Int128 = Gt;
	});
	var Zp = g((Ai) => {
		'use strict';
		Object.defineProperty(Ai, '__esModule', { value: !0 });
		Ai.JSONVectorLoader = Ai.VectorLoader = void 0;
		var He = zt(),
			DB = $e(),
			Fr = oe(),
			FB = Xe(),
			$p = nr(),
			OB = An(),
			pa = tl(),
			Jp = _e(),
			ur = We(),
			rl = class extends FB.Visitor {
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
					return super.visit(e instanceof DB.Field ? e.type : e);
				}
				visitNull(e, { length: t } = this.nextFieldNode()) {
					return He.Data.Null(e, 0, t);
				}
				visitBool(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return He.Data.Bool(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitInt(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return He.Data.Int(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitFloat(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return He.Data.Float(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitUtf8(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return He.Data.Utf8(
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
					return He.Data.Binary(
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
					return He.Data.FixedSizeBinary(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitDate(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return He.Data.Date(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitTimestamp(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return He.Data.Timestamp(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitTime(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return He.Data.Time(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitDecimal(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return He.Data.Decimal(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitList(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return He.Data.List(
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
					return He.Data.Struct(e, 0, t, n, this.readNullBitmap(e, n), this.visitMany(e.children));
				}
				visitUnion(e) {
					return e.mode === Jp.UnionMode.Sparse
						? this.visitSparseUnion(e)
						: this.visitDenseUnion(e);
				}
				visitDenseUnion(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return He.Data.Union(
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
					return He.Data.Union(
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
					return He.Data.Dictionary(
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
					return He.Data.Interval(e, 0, t, n, this.readNullBitmap(e, n), this.readData(e));
				}
				visitFixedSizeList(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return He.Data.FixedSizeList(
						e,
						0,
						t,
						n,
						this.readNullBitmap(e, n),
						this.visit(e.children[0])
					);
				}
				visitMap(e, { length: t, nullCount: n } = this.nextFieldNode()) {
					return He.Data.Map(
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
		Ai.VectorLoader = rl;
		var Kp = class extends rl {
			constructor(e, t, n, i) {
				super(new Uint8Array(0), t, n, i);
				this.sources = e;
			}
			readNullBitmap(e, t, { offset: n } = this.nextBufferRange()) {
				return t <= 0 ? new Uint8Array(0) : $p.packBools(this.sources[n]);
			}
			readOffsets(e, { offset: t } = this.nextBufferRange()) {
				return ur.toArrayBufferView(Uint8Array, ur.toArrayBufferView(Int32Array, this.sources[t]));
			}
			readTypeIds(e, { offset: t } = this.nextBufferRange()) {
				return ur.toArrayBufferView(Uint8Array, ur.toArrayBufferView(e.ArrayType, this.sources[t]));
			}
			readData(e, { offset: t } = this.nextBufferRange()) {
				let { sources: n } = this;
				return Fr.DataType.isTimestamp(e) ||
					((Fr.DataType.isInt(e) || Fr.DataType.isTime(e)) && e.bitWidth === 64) ||
					(Fr.DataType.isDate(e) && e.unit === Jp.DateUnit.MILLISECOND)
					? ur.toArrayBufferView(Uint8Array, pa.Int64.convertArray(n[t]))
					: Fr.DataType.isDecimal(e)
					? ur.toArrayBufferView(Uint8Array, pa.Int128.convertArray(n[t]))
					: Fr.DataType.isBinary(e) || Fr.DataType.isFixedSizeBinary(e)
					? MB(n[t])
					: Fr.DataType.isBool(e)
					? $p.packBools(n[t])
					: Fr.DataType.isUtf8(e)
					? OB.encodeUtf8(n[t].join(''))
					: ur.toArrayBufferView(
							Uint8Array,
							ur.toArrayBufferView(
								e.ArrayType,
								n[t].map((i) => +i)
							)
					  );
			}
		};
		Ai.JSONVectorLoader = Kp;
		function MB(r) {
			let e = r.join(''),
				t = new Uint8Array(e.length / 2);
			for (let n = 0; n < e.length; n += 2) t[n >> 1] = parseInt(e.substr(n, 2), 16);
			return t;
		}
	});
	var Bs = g((Fi) => {
		'use strict';
		Object.defineProperty(Fi, '__esModule', { value: !0 });
		Fi.StructRow = Fi.MapRow = void 0;
		var Xp = lc(),
			Qe = Symbol.for('parent'),
			Di = Symbol.for('rowIndex'),
			ft = Symbol.for('keyToIdx'),
			ht = Symbol.for('idxToVal'),
			nl = Symbol.for('nodejs.util.inspect.custom'),
			cr = class {
				constructor(e, t) {
					(this[Qe] = e), (this.size = t);
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
						let n = this[ft] || (this[ft] = new Map()),
							i = n.get(e);
						if (i !== void 0) {
							let s = this[ht] || (this[ht] = new Array(this.size));
							(t = s[i]) !== void 0 || (s[i] = t = this.getValue(i));
						} else if ((i = this.getIndex(e)) > -1) {
							n.set(e, i);
							let s = this[ht] || (this[ht] = new Array(this.size));
							(t = s[i]) !== void 0 || (s[i] = t = this.getValue(i));
						}
					}
					return t;
				}
				set(e, t) {
					if (e != null) {
						let n = this[ft] || (this[ft] = new Map()),
							i = n.get(e);
						if ((i === void 0 && n.set(e, (i = this.getIndex(e))), i > -1)) {
							let s = this[ht] || (this[ht] = new Array(this.size));
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
						n = this[ft] || (this[ft] = new Map()),
						i = this[ht] || (this[ht] = new Array(this.size));
					for (let s, o, a = 0, l, f; !((l = e.next()).done || (f = t.next()).done); ++a)
						(s = l.value), (o = f.value), (i[a] = o), n.has(s) || n.set(s, a), yield [s, o];
				}
				forEach(e, t) {
					let n = this.keys(),
						i = this.values(),
						s = t === void 0 ? e : (l, f, y) => e.call(t, l, f, y),
						o = this[ft] || (this[ft] = new Map()),
						a = this[ht] || (this[ht] = new Array(this.size));
					for (let l, f, y = 0, F, E; !((F = n.next()).done || (E = i.next()).done); ++y)
						(l = F.value), (f = E.value), (a[y] = f), o.has(l) || o.set(l, y), s(f, l, this);
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
				[nl]() {
					return this.toString();
				}
				toString() {
					let e = [];
					return (
						this.forEach((t, n) => {
							(n = Xp.valueToString(n)), (t = Xp.valueToString(t)), e.push(`${n}: ${t}`);
						}),
						`{ ${e.join(', ')} }`
					);
				}
			};
		cr[Symbol.toStringTag] = ((r) => (
			Object.defineProperties(r, {
				size: { writable: !0, enumerable: !1, configurable: !1, value: 0 },
				[Qe]: { writable: !0, enumerable: !1, configurable: !1, value: null },
				[Di]: { writable: !0, enumerable: !1, configurable: !1, value: -1 }
			}),
			(r[Symbol.toStringTag] = 'Row')
		))(cr.prototype);
		var Qp = class extends cr {
			constructor(e) {
				super(e, e.length);
				return EB(this);
			}
			keys() {
				return this[Qe].getChildAt(0)[Symbol.iterator]();
			}
			values() {
				return this[Qe].getChildAt(1)[Symbol.iterator]();
			}
			getKey(e) {
				return this[Qe].getChildAt(0).get(e);
			}
			getIndex(e) {
				return this[Qe].getChildAt(0).indexOf(e);
			}
			getValue(e) {
				return this[Qe].getChildAt(1).get(e);
			}
			setValue(e, t) {
				this[Qe].getChildAt(1).set(e, t);
			}
		};
		Fi.MapRow = Qp;
		var ey = class extends cr {
			constructor(e) {
				super(e, e.type.children.length);
				return ty(this);
			}
			*keys() {
				for (let e of this[Qe].type.children) yield e.name;
			}
			*values() {
				for (let e of this[Qe].type.children) yield this[e.name];
			}
			getKey(e) {
				return this[Qe].type.children[e].name;
			}
			getIndex(e) {
				return this[Qe].type.children.findIndex((t) => t.name === e);
			}
			getValue(e) {
				return this[Qe].getChildAt(e).get(this[Di]);
			}
			setValue(e, t) {
				return this[Qe].getChildAt(e).set(this[Di], t);
			}
		};
		Fi.StructRow = ey;
		Object.setPrototypeOf(cr.prototype, Map.prototype);
		var ty = (() => {
				let r = { enumerable: !0, configurable: !1, get: null, set: null };
				return (e) => {
					let t = -1,
						n = e[ft] || (e[ft] = new Map()),
						i = (o) =>
							function () {
								return this.get(o);
							},
						s = (o) =>
							function (a) {
								return this.set(o, a);
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
			EB = (() => {
				if (typeof Proxy == 'undefined') return ty;
				let r = cr.prototype.has,
					e = cr.prototype.get,
					t = cr.prototype.set,
					n = cr.prototype.getKey,
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
								case Qe:
								case Di:
								case ht:
								case ft:
								case nl:
									return !0;
							}
							return typeof o == 'number' && !s.has(o) && (o = s.getKey(o)), s.has(o);
						},
						get(s, o, a) {
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
								case Qe:
								case Di:
								case ht:
								case ft:
								case nl:
									return Reflect.get(s, o, a);
							}
							return typeof o == 'number' && !r.call(a, o) && (o = n.call(a, o)), e.call(a, o);
						},
						set(s, o, a, l) {
							switch (o) {
								case Qe:
								case Di:
								case ht:
								case ft:
									return Reflect.set(s, o, a, l);
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
								typeof o == 'number' && !r.call(l, o) && (o = n.call(l, o)),
								r.call(l, o) ? !!t.call(l, o, a) : !1
							);
						}
					};
				return (s) => new Proxy(s, i);
			})();
	});
	var Ss = g((un) => {
		'use strict';
		Object.defineProperty(un, '__esModule', { value: !0 });
		un.createElementComparator = un.clampRange = un.clampIndex = void 0;
		var ry = Ve(),
			ny = Bs(),
			RB = We(),
			iy = rt();
		function UB(r, e, t) {
			let n = r.length,
				i = e > -1 ? e : n + (e % n);
			return t ? t(r, i) : i;
		}
		un.clampIndex = UB;
		var sy;
		function VB(r, e, t, n) {
			let { length: i = 0 } = r,
				s = typeof e != 'number' ? 0 : e,
				o = typeof t != 'number' ? i : t;
			return (
				s < 0 && (s = ((s % i) + i) % i),
				o < 0 && (o = ((o % i) + i) % i),
				o < s && ((sy = s), (s = o), (o = sy)),
				o > i && (o = i),
				n ? n(r, s, o) : [s, o]
			);
		}
		un.clampRange = VB;
		var PB = iy.BigIntAvailable ? iy.BigInt(0) : 0,
			oy = (r) => r !== r;
		function ws(r) {
			let e = typeof r;
			if (e !== 'object' || r === null)
				return oy(r) ? oy : e !== 'bigint' ? (t) => t === r : (t) => PB + t === r;
			if (r instanceof Date) {
				let t = r.valueOf();
				return (n) => (n instanceof Date ? n.valueOf() === t : !1);
			}
			return ArrayBuffer.isView(r)
				? (t) => (t ? RB.compareArrayLike(r, t) : !1)
				: r instanceof Map
				? LB(r)
				: Array.isArray(r)
				? NB(r)
				: r instanceof ry.Vector
				? kB(r)
				: xB(r);
		}
		un.createElementComparator = ws;
		function NB(r) {
			let e = [];
			for (let t = -1, n = r.length; ++t < n; ) e[t] = ws(r[t]);
			return ya(e);
		}
		function LB(r) {
			let e = -1,
				t = [];
			return r.forEach((n) => (t[++e] = ws(n))), ya(t);
		}
		function kB(r) {
			let e = [];
			for (let t = -1, n = r.length; ++t < n; ) e[t] = ws(r.get(t));
			return ya(e);
		}
		function xB(r) {
			let e = Object.keys(r);
			if (e.length === 0) return () => !1;
			let t = [];
			for (let n = -1, i = e.length; ++n < i; ) t[n] = ws(r[e[n]]);
			return ya(t, e);
		}
		function ya(r, e) {
			return (t) => {
				if (!t || typeof t != 'object') return !1;
				switch (t.constructor) {
					case Array:
						return CB(r, t);
					case Map:
					case ny.MapRow:
					case ny.StructRow:
						return ay(r, t, t.keys());
					case Object:
					case void 0:
						return ay(r, t, e || Object.keys(t));
				}
				return t instanceof ry.Vector ? jB(r, t) : !1;
			};
		}
		function CB(r, e) {
			let t = r.length;
			if (e.length !== t) return !1;
			for (let n = -1; ++n < t; ) if (!r[n](e[n])) return !1;
			return !0;
		}
		function jB(r, e) {
			let t = r.length;
			if (e.length !== t) return !1;
			for (let n = -1; ++n < t; ) if (!r[n](e.get(n))) return !1;
			return !0;
		}
		function ay(r, e, t) {
			let n = t[Symbol.iterator](),
				i = e instanceof Map ? e.keys() : Object.keys(e)[Symbol.iterator](),
				s = e instanceof Map ? e.values() : Object.values(e)[Symbol.iterator](),
				o = 0,
				a = r.length,
				l = s.next(),
				f = n.next(),
				y = i.next();
			for (
				;
				o < a && !f.done && !y.done && !l.done && !(f.value !== y.value || !r[o](l.value));
				++o, f = n.next(), y = i.next(), l = s.next()
			);
			return o === a && f.done && y.done && l.done
				? !0
				: (n.return && n.return(), i.return && i.return(), s.return && s.return(), !1);
		}
	});
	var Cn = g((Je) => {
		'use strict';
		Object.defineProperty(Je, '__esModule', { value: !0 });
		Je.selectColumnChildrenArgs =
			Je.selectVectorChildrenArgs =
			Je.selectChunkArgs =
			Je.selectFieldArgs =
			Je.selectColumnArgs =
			Je.selectArgs =
			Je.arrayTypeToDataType =
			Je.isTypedArray =
				void 0;
		var il = zt(),
			uy = $e(),
			Or = Mi(),
			Oi = Ve(),
			Ot = oe(),
			qB = ln(),
			cn = Array.isArray;
		function sl(r) {
			return ArrayBuffer.isView(r) && 'BYTES_PER_ELEMENT' in r;
		}
		Je.isTypedArray = sl;
		function cy(r) {
			switch (r) {
				case Int8Array:
					return Ot.Int8;
				case Int16Array:
					return Ot.Int16;
				case Int32Array:
					return Ot.Int32;
				case BigInt64Array:
					return Ot.Int64;
				case Uint8Array:
					return Ot.Uint8;
				case Uint16Array:
					return Ot.Uint16;
				case Uint32Array:
					return Ot.Uint32;
				case BigUint64Array:
					return Ot.Uint64;
				case Float32Array:
					return Ot.Float32;
				case Float64Array:
					return Ot.Float64;
				default:
					return null;
			}
		}
		Je.arrayTypeToDataType = cy;
		function WB(r) {
			let e = cy(r.constructor);
			if (!e) throw new TypeError('Unrecognized Array input');
			let t = new e(),
				n = il.Data.new(t, 0, r.length, 0, [void 0, r]);
			return Oi.Vector.new(n);
		}
		Je.selectArgs = (r, e) => _a(r, e, [], 0);
		Je.selectColumnArgs = (r) => {
			let [e, t] = al(r, [[], []]);
			return t.map((n, i) =>
				n instanceof Or.Column
					? Or.Column.new(n.field.clone(e[i]), n)
					: n instanceof Oi.Vector
					? Or.Column.new(e[i], n)
					: sl(n)
					? Or.Column.new(e[i], WB(n))
					: Or.Column.new(e[i], [])
			);
		};
		Je.selectFieldArgs = (r) => al(r, [[], []]);
		Je.selectChunkArgs = (r, e) => ol(r, e, [], 0);
		Je.selectVectorChildrenArgs = (r, e) => ly(r, e, [], 0);
		Je.selectColumnChildrenArgs = (r, e) => dy(r, e, [], 0);
		function _a(r, e, t, n) {
			let i,
				s = n,
				o = -1,
				a = e.length;
			for (; ++o < a; )
				cn((i = e[o])) ? (s = _a(r, i, t, s).length) : i instanceof r && (t[s++] = i);
			return t;
		}
		function ol(r, e, t, n) {
			let i,
				s = n,
				o = -1,
				a = e.length;
			for (; ++o < a; )
				cn((i = e[o]))
					? (s = ol(r, i, t, s).length)
					: i instanceof qB.Chunked
					? (s = ol(r, i.chunks, t, s).length)
					: i instanceof r && (t[s++] = i);
			return t;
		}
		function ly(r, e, t, n) {
			let i,
				s = n,
				o = -1,
				a = e.length;
			for (; ++o < a; )
				cn((i = e[o]))
					? (s = ly(r, i, t, s).length)
					: i instanceof r
					? (s = _a(
							Oi.Vector,
							i.schema.fields.map((l, f) => i.getChildAt(f)),
							t,
							s
					  ).length)
					: i instanceof Oi.Vector && (t[s++] = i);
			return t;
		}
		function dy(r, e, t, n) {
			let i,
				s = n,
				o = -1,
				a = e.length;
			for (; ++o < a; )
				cn((i = e[o]))
					? (s = dy(r, i, t, s).length)
					: i instanceof r
					? (s = _a(
							Or.Column,
							i.schema.fields.map((l, f) => Or.Column.new(l, i.getChildAt(f))),
							t,
							s
					  ).length)
					: i instanceof Or.Column && (t[s++] = i);
			return t;
		}
		var zB = (r, [e, t], n) => ((r[0][n] = e), (r[1][n] = t), r);
		function al(r, e) {
			let t, n;
			switch ((n = r.length)) {
				case 0:
					return e;
				case 1:
					if (((t = e[0]), !r[0])) return e;
					if (cn(r[0])) return al(r[0], e);
					r[0] instanceof il.Data ||
						r[0] instanceof Oi.Vector ||
						sl(r[0]) ||
						r[0] instanceof Ot.DataType ||
						([t, r] = Object.entries(r[0]).reduce(zB, e));
					break;
				default:
					cn((t = r[n - 1]))
						? (r = cn(r[0]) ? r[0] : r.slice(0, n - 1))
						: ((r = cn(r[0]) ? r[0] : r), (t = []));
			}
			let i = -1,
				s = -1,
				o = -1,
				a = r.length,
				l,
				f,
				[y, F] = e;
			for (; ++o < a; )
				(f = r[o]),
					f instanceof Or.Column && (F[++s] = f)
						? (y[++i] = f.field.clone(t[o], f.type, !0))
						: (({ [o]: l = o } = t),
						  f instanceof Ot.DataType && (F[++s] = f)
								? (y[++i] = uy.Field.new(l, f, !0))
								: (f == null ? void 0 : f.type) &&
								  (F[++s] = f) &&
								  (f instanceof il.Data && (F[s] = f = Oi.Vector.new(f)),
								  (y[++i] = uy.Field.new(l, f.type, !0))));
			return e;
		}
	});
	var ln = g((ma) => {
		'use strict';
		Object.defineProperty(ma, '__esModule', { value: !0 });
		ma.Chunked = void 0;
		var HB = Ss(),
			fy = oe(),
			YB = Cn(),
			hy = Ve(),
			py = class {
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
			Mr = class extends hy.AbstractVector {
				constructor(e, t = [], n = GB(t)) {
					super();
					(this._nullCount = -1),
						(this._type = e),
						(this._chunks = t),
						(this._chunkOffsets = n),
						(this._length = n[n.length - 1]),
						(this._numChildren = (this._type.children || []).length);
				}
				static flatten(...e) {
					return YB.selectChunkArgs(hy.Vector, e);
				}
				static concat(...e) {
					let t = Mr.flatten(...e);
					return new Mr(t[0].type, t);
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
					if (fy.DataType.isDictionary(this._type)) {
						if (!this._indices) {
							let e = this._chunks;
							this._indices = e.length === 1 ? e[0].indices : Mr.concat(...e.map((t) => t.indices));
						}
						return this._indices;
					}
					return null;
				}
				get dictionary() {
					return fy.DataType.isDictionary(this._type)
						? this._chunks[this._chunks.length - 1].data.dictionary
						: null;
				}
				[Symbol.iterator]() {
					return new py(this._chunks);
				}
				clone(e = this._chunks) {
					return new Mr(this._type, e);
				}
				concat(...e) {
					return this.clone(Mr.flatten(this, ...e));
				}
				slice(e, t) {
					return HB.clampRange(this, e, t, this._sliceInternal);
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
						? (t[e] = new Mr(i.type, s))
						: null;
				}
				search(e, t) {
					let n = e,
						i = this._chunkOffsets,
						s = i.length - 1;
					if (n < 0 || n >= i[s]) return null;
					if (s <= 1) return t ? t(this, 0, n) : [0, n];
					let o = 0,
						a = 0,
						l = 0;
					do {
						if (o + 1 === s) return t ? t(this, o, n - a) : [o, n - a];
						(l = (o + (s - o) / 2) | 0), n >= i[l] ? (o = l) : (s = l);
					} while (n < i[s] && n >= (a = i[o]));
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
					for (let l = -1; ++l < t; ) i += (s[l] = e[l].toArray()).length;
					n !== s[0].constructor && (n = s[0].constructor);
					let o = new n(i),
						a = n === Array ? JB : $B;
					for (let l = -1, f = 0; ++l < t; ) f = a(s[l], o, f);
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
						a = n,
						l = 0,
						f = -1;
					for (; ++s < o; ) {
						if (~(f = e[s].indexOf(i, a))) return l + f;
						(a = 0), (l += e[s].length);
					}
					return -1;
				}
				_sliceInternal(e, t, n) {
					let i = [],
						{ chunks: s, _chunkOffsets: o } = e;
					for (let a = -1, l = s.length; ++a < l; ) {
						let f = s[a],
							y = f.length,
							F = o[a];
						if (F >= n) break;
						if (t >= F + y) continue;
						if (F >= t && F + y <= n) {
							i.push(f);
							continue;
						}
						let E = Math.max(0, t - F),
							C = Math.min(n - F, y);
						i.push(f.slice(E, C));
					}
					return e.clone(i);
				}
			};
		ma.Chunked = Mr;
		function GB(r) {
			let e = new Uint32Array((r || []).length + 1),
				t = (e[0] = 0),
				n = e.length;
			for (let i = 0; ++i < n; ) e[i] = t += r[i - 1].length;
			return e;
		}
		var $B = (r, e, t) => (e.set(r, t), t + r.length),
			JB = (r, e, t) => {
				let n = t;
				for (let i = -1, s = r.length; ++i < s; ) e[n++] = r[i];
				return n;
			};
	});
	var Mi = g((ba) => {
		'use strict';
		Object.defineProperty(ba, '__esModule', { value: !0 });
		ba.Column = void 0;
		var yy = $e(),
			_y = Ve(),
			ul = ln(),
			jn = class extends ul.Chunked {
				constructor(e, t = [], n) {
					t = ul.Chunked.flatten(...t);
					super(e.type, t, n);
					if (((this._field = e), t.length === 1 && !(this instanceof cl)))
						return new cl(e, t[0], this._chunkOffsets);
				}
				static new(...e) {
					let [t, n, ...i] = e;
					typeof t != 'string' && !(t instanceof yy.Field) && ((n = t), (t = ''));
					let s = ul.Chunked.flatten(
						Array.isArray(n)
							? [...n, ...i]
							: n instanceof _y.Vector
							? [n, ...i]
							: [_y.Vector.new(n, ...i)]
					);
					if (typeof t == 'string') {
						let o = s[0].data.type;
						t = new yy.Field(t, o, !0);
					} else
						!t.nullable && s.some(({ nullCount: o }) => o > 0) && (t = t.clone({ nullable: !0 }));
					return new jn(t, s);
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
					return new jn(this._field, e);
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
						? (t[e] = new jn(i, s))
						: null;
				}
			};
		ba.Column = jn;
		var cl = class extends jn {
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
	var my = g((Ei) => {
		'use strict';
		Object.defineProperty(Ei, '__esModule', { value: !0 });
		Ei.instance = Ei.TypeAssembler = void 0;
		var KB = Tr(),
			ZB = KB.flatbuffers.Long,
			XB = Xe(),
			N = Yr(),
			ll = class extends XB.Visitor {
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
						N.DictionaryEncoding.addId(t, new ZB(e.id, 0)),
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
		Ei.TypeAssembler = ll;
		Ei.instance = new ll();
	});
	var wy = g((lr) => {
		'use strict';
		Object.defineProperty(lr, '__esModule', { value: !0 });
		lr.fieldFromJSON =
			lr.dictionaryBatchFromJSON =
			lr.recordBatchFromJSON =
			lr.schemaFromJSON =
				void 0;
		var Ri = $e(),
			Te = oe(),
			qn = Wn(),
			Ui = _e();
		function QB(r, e = new Map()) {
			return new Ri.Schema(tw(r, e), ga(r.customMetadata), e);
		}
		lr.schemaFromJSON = QB;
		function by(r) {
			return new qn.RecordBatch(r.count, vy(r.columns), Ty(r.columns));
		}
		lr.recordBatchFromJSON = by;
		function ew(r) {
			return new qn.DictionaryBatch(by(r.data), r.id, r.isDelta);
		}
		lr.dictionaryBatchFromJSON = ew;
		function tw(r, e) {
			return (r.fields || []).filter(Boolean).map((t) => Ri.Field.fromJSON(t, e));
		}
		function gy(r, e) {
			return (r.children || []).filter(Boolean).map((t) => Ri.Field.fromJSON(t, e));
		}
		function vy(r) {
			return (r || []).reduce(
				(e, t) => [...e, new qn.FieldNode(t.count, rw(t.VALIDITY)), ...vy(t.children)],
				[]
			);
		}
		function Ty(r, e = []) {
			for (let t = -1, n = (r || []).length; ++t < n; ) {
				let i = r[t];
				i.VALIDITY && e.push(new qn.BufferRegion(e.length, i.VALIDITY.length)),
					i.TYPE && e.push(new qn.BufferRegion(e.length, i.TYPE.length)),
					i.OFFSET && e.push(new qn.BufferRegion(e.length, i.OFFSET.length)),
					i.DATA && e.push(new qn.BufferRegion(e.length, i.DATA.length)),
					(e = Ty(i.children, e));
			}
			return e;
		}
		function rw(r) {
			return (r || []).reduce((e, t) => e + +(t === 0), 0);
		}
		function nw(r, e) {
			let t, n, i, s, o, a;
			return (
				!e || !(s = r.dictionary)
					? ((o = By(r, gy(r, e))), (i = new Ri.Field(r.name, o, r.nullable, ga(r.customMetadata))))
					: e.has((t = s.id))
					? ((n = (n = s.indexType) ? Iy(n) : new Te.Int32()),
					  (a = new Te.Dictionary(e.get(t), n, t, s.isOrdered)),
					  (i = new Ri.Field(r.name, a, r.nullable, ga(r.customMetadata))))
					: ((n = (n = s.indexType) ? Iy(n) : new Te.Int32()),
					  e.set(t, (o = By(r, gy(r, e)))),
					  (a = new Te.Dictionary(o, n, t, s.isOrdered)),
					  (i = new Ri.Field(r.name, a, r.nullable, ga(r.customMetadata)))),
				i || null
			);
		}
		lr.fieldFromJSON = nw;
		function ga(r) {
			return new Map(Object.entries(r || {}));
		}
		function Iy(r) {
			return new Te.Int(r.isSigned, r.bitWidth);
		}
		function By(r, e) {
			let t = r.type.name;
			switch (t) {
				case 'NONE':
					return new Te.Null();
				case 'null':
					return new Te.Null();
				case 'binary':
					return new Te.Binary();
				case 'utf8':
					return new Te.Utf8();
				case 'bool':
					return new Te.Bool();
				case 'list':
					return new Te.List((e || [])[0]);
				case 'struct':
					return new Te.Struct(e || []);
				case 'struct_':
					return new Te.Struct(e || []);
			}
			switch (t) {
				case 'int': {
					let n = r.type;
					return new Te.Int(n.isSigned, n.bitWidth);
				}
				case 'floatingpoint': {
					let n = r.type;
					return new Te.Float(Ui.Precision[n.precision]);
				}
				case 'decimal': {
					let n = r.type;
					return new Te.Decimal(n.scale, n.precision);
				}
				case 'date': {
					let n = r.type;
					return new Te.Date_(Ui.DateUnit[n.unit]);
				}
				case 'time': {
					let n = r.type;
					return new Te.Time(Ui.TimeUnit[n.unit], n.bitWidth);
				}
				case 'timestamp': {
					let n = r.type;
					return new Te.Timestamp(Ui.TimeUnit[n.unit], n.timezone);
				}
				case 'interval': {
					let n = r.type;
					return new Te.Interval(Ui.IntervalUnit[n.unit]);
				}
				case 'union': {
					let n = r.type;
					return new Te.Union(Ui.UnionMode[n.mode], n.typeIds || [], e || []);
				}
				case 'fixedsizebinary': {
					let n = r.type;
					return new Te.FixedSizeBinary(n.byteWidth);
				}
				case 'fixedsizelist': {
					let n = r.type;
					return new Te.FixedSizeList(n.listSize, (e || [])[0]);
				}
				case 'map': {
					let n = r.type;
					return new Te.Map_((e || [])[0], n.keysSorted);
				}
			}
			throw new Error(`Unrecognized type: "${t}"`);
		}
	});
	var Wn = g((Et) => {
		'use strict';
		Object.defineProperty(Et, '__esModule', { value: !0 });
		Et.FieldNode = Et.BufferRegion = Et.DictionaryBatch = Et.RecordBatch = Et.Message = void 0;
		var dl = Tr(),
			P = Yr(),
			Be = Bo(),
			Ke = $e(),
			iw = We(),
			Fe = _e(),
			fl = my(),
			va = wy(),
			zn = dl.flatbuffers.Long,
			sw = dl.flatbuffers.Builder,
			ow = dl.flatbuffers.ByteBuffer,
			Ie = oe(),
			dn = class {
				constructor(e, t, n, i) {
					(this._version = t),
						(this._headerType = n),
						(this.body = new Uint8Array(0)),
						i && (this._createHeader = () => i),
						(this._bodyLength = typeof e == 'number' ? e : e.low);
				}
				static fromJSON(e, t) {
					let n = new dn(0, Fe.MetadataVersion.V4, t);
					return (n._createHeader = aw(e, t)), n;
				}
				static decode(e) {
					e = new ow(iw.toUint8Array(e));
					let t = Be.Message.getRootAsMessage(e),
						n = t.bodyLength(),
						i = t.version(),
						s = t.headerType(),
						o = new dn(n, i, s);
					return (o._createHeader = uw(t, s)), o;
				}
				static encode(e) {
					let t = new sw(),
						n = -1;
					return (
						e.isSchema()
							? (n = Ke.Schema.encode(t, e.header()))
							: e.isRecordBatch()
							? (n = Mt.encode(t, e.header()))
							: e.isDictionaryBatch() && (n = dr.encode(t, e.header())),
						Be.Message.startMessage(t),
						Be.Message.addVersion(t, Fe.MetadataVersion.V4),
						Be.Message.addHeader(t, n),
						Be.Message.addHeaderType(t, e.headerType),
						Be.Message.addBodyLength(t, new zn(e.bodyLength, 0)),
						Be.Message.finishMessageBuffer(t, Be.Message.endMessage(t)),
						t.asUint8Array()
					);
				}
				static from(e, t = 0) {
					if (e instanceof Ke.Schema)
						return new dn(0, Fe.MetadataVersion.V4, Fe.MessageHeader.Schema, e);
					if (e instanceof Mt)
						return new dn(t, Fe.MetadataVersion.V4, Fe.MessageHeader.RecordBatch, e);
					if (e instanceof dr)
						return new dn(t, Fe.MetadataVersion.V4, Fe.MessageHeader.DictionaryBatch, e);
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
					return this.headerType === Fe.MessageHeader.Schema;
				}
				isRecordBatch() {
					return this.headerType === Fe.MessageHeader.RecordBatch;
				}
				isDictionaryBatch() {
					return this.headerType === Fe.MessageHeader.DictionaryBatch;
				}
			};
		Et.Message = dn;
		var Mt = class {
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
		Et.RecordBatch = Mt;
		var dr = class {
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
		Et.DictionaryBatch = dr;
		var Hn = class {
			constructor(e, t) {
				(this.offset = typeof e == 'number' ? e : e.low),
					(this.length = typeof t == 'number' ? t : t.low);
			}
		};
		Et.BufferRegion = Hn;
		var Yn = class {
			constructor(e, t) {
				(this.length = typeof e == 'number' ? e : e.low),
					(this.nullCount = typeof t == 'number' ? t : t.low);
			}
		};
		Et.FieldNode = Yn;
		function aw(r, e) {
			return () => {
				switch (e) {
					case Fe.MessageHeader.Schema:
						return Ke.Schema.fromJSON(r);
					case Fe.MessageHeader.RecordBatch:
						return Mt.fromJSON(r);
					case Fe.MessageHeader.DictionaryBatch:
						return dr.fromJSON(r);
				}
				throw new Error(`Unrecognized Message type: { name: ${Fe.MessageHeader[e]}, type: ${e} }`);
			};
		}
		function uw(r, e) {
			return () => {
				switch (e) {
					case Fe.MessageHeader.Schema:
						return Ke.Schema.decode(r.header(new P.Schema()));
					case Fe.MessageHeader.RecordBatch:
						return Mt.decode(r.header(new Be.RecordBatch()), r.version());
					case Fe.MessageHeader.DictionaryBatch:
						return dr.decode(r.header(new Be.DictionaryBatch()), r.version());
				}
				throw new Error(`Unrecognized Message type: { name: ${Fe.MessageHeader[e]}, type: ${e} }`);
			};
		}
		Ke.Field.encode = gw;
		Ke.Field.decode = mw;
		Ke.Field.fromJSON = va.fieldFromJSON;
		Ke.Schema.encode = bw;
		Ke.Schema.decode = cw;
		Ke.Schema.fromJSON = va.schemaFromJSON;
		Mt.encode = vw;
		Mt.decode = lw;
		Mt.fromJSON = va.recordBatchFromJSON;
		dr.encode = Tw;
		dr.decode = dw;
		dr.fromJSON = va.dictionaryBatchFromJSON;
		Yn.encode = Iw;
		Yn.decode = hw;
		Hn.encode = Bw;
		Hn.decode = fw;
		function cw(r, e = new Map()) {
			let t = _w(r, e);
			return new Ke.Schema(t, Ta(r), e);
		}
		function lw(r, e = Fe.MetadataVersion.V4) {
			return new Mt(r.length(), pw(r), yw(r, e));
		}
		function dw(r, e = Fe.MetadataVersion.V4) {
			return new dr(Mt.decode(r.data(), e), r.id(), r.isDelta());
		}
		function fw(r) {
			return new Hn(r.offset(), r.length());
		}
		function hw(r) {
			return new Yn(r.length(), r.nullCount());
		}
		function pw(r) {
			let e = [];
			for (let t, n = -1, i = -1, s = r.nodesLength(); ++n < s; )
				(t = r.nodes(n)) && (e[++i] = Yn.decode(t));
			return e;
		}
		function yw(r, e) {
			let t = [];
			for (let n, i = -1, s = -1, o = r.buffersLength(); ++i < o; )
				(n = r.buffers(i)) &&
					(e < Fe.MetadataVersion.V4 && (n.bb_pos += 8 * (i + 1)), (t[++s] = Hn.decode(n)));
			return t;
		}
		function _w(r, e) {
			let t = [];
			for (let n, i = -1, s = -1, o = r.fieldsLength(); ++i < o; )
				(n = r.fields(i)) && (t[++s] = Ke.Field.decode(n, e));
			return t;
		}
		function Sy(r, e) {
			let t = [];
			for (let n, i = -1, s = -1, o = r.childrenLength(); ++i < o; )
				(n = r.children(i)) && (t[++s] = Ke.Field.decode(n, e));
			return t;
		}
		function mw(r, e) {
			let t, n, i, s, o, a;
			return (
				!e || !(a = r.dictionary())
					? ((i = Dy(r, Sy(r, e))), (n = new Ke.Field(r.name(), i, r.nullable(), Ta(r))))
					: e.has((t = a.id().low))
					? ((s = (s = a.indexType()) ? Ay(s) : new Ie.Int32()),
					  (o = new Ie.Dictionary(e.get(t), s, t, a.isOrdered())),
					  (n = new Ke.Field(r.name(), o, r.nullable(), Ta(r))))
					: ((s = (s = a.indexType()) ? Ay(s) : new Ie.Int32()),
					  e.set(t, (i = Dy(r, Sy(r, e)))),
					  (o = new Ie.Dictionary(i, s, t, a.isOrdered())),
					  (n = new Ke.Field(r.name(), o, r.nullable(), Ta(r)))),
				n || null
			);
		}
		function Ta(r) {
			let e = new Map();
			if (r)
				for (let t, n, i = -1, s = r.customMetadataLength() | 0; ++i < s; )
					(t = r.customMetadata(i)) && (n = t.key()) != null && e.set(n, t.value());
			return e;
		}
		function Ay(r) {
			return new Ie.Int(r.isSigned(), r.bitWidth());
		}
		function Dy(r, e) {
			let t = r.typeType();
			switch (t) {
				case P.Type.NONE:
					return new Ie.Null();
				case P.Type.Null:
					return new Ie.Null();
				case P.Type.Binary:
					return new Ie.Binary();
				case P.Type.Utf8:
					return new Ie.Utf8();
				case P.Type.Bool:
					return new Ie.Bool();
				case P.Type.List:
					return new Ie.List((e || [])[0]);
				case P.Type.Struct_:
					return new Ie.Struct(e || []);
			}
			switch (t) {
				case P.Type.Int: {
					let n = r.type(new P.Int());
					return new Ie.Int(n.isSigned(), n.bitWidth());
				}
				case P.Type.FloatingPoint: {
					let n = r.type(new P.FloatingPoint());
					return new Ie.Float(n.precision());
				}
				case P.Type.Decimal: {
					let n = r.type(new P.Decimal());
					return new Ie.Decimal(n.scale(), n.precision());
				}
				case P.Type.Date: {
					let n = r.type(new P.Date());
					return new Ie.Date_(n.unit());
				}
				case P.Type.Time: {
					let n = r.type(new P.Time());
					return new Ie.Time(n.unit(), n.bitWidth());
				}
				case P.Type.Timestamp: {
					let n = r.type(new P.Timestamp());
					return new Ie.Timestamp(n.unit(), n.timezone());
				}
				case P.Type.Interval: {
					let n = r.type(new P.Interval());
					return new Ie.Interval(n.unit());
				}
				case P.Type.Union: {
					let n = r.type(new P.Union());
					return new Ie.Union(n.mode(), n.typeIdsArray() || [], e || []);
				}
				case P.Type.FixedSizeBinary: {
					let n = r.type(new P.FixedSizeBinary());
					return new Ie.FixedSizeBinary(n.byteWidth());
				}
				case P.Type.FixedSizeList: {
					let n = r.type(new P.FixedSizeList());
					return new Ie.FixedSizeList(n.listSize(), (e || [])[0]);
				}
				case P.Type.Map: {
					let n = r.type(new P.Map());
					return new Ie.Map_((e || [])[0], n.keysSorted());
				}
			}
			throw new Error(`Unrecognized type: "${P.Type[t]}" (${t})`);
		}
		function bw(r, e) {
			let t = e.fields.map((s) => Ke.Field.encode(r, s));
			P.Schema.startFieldsVector(r, t.length);
			let n = P.Schema.createFieldsVector(r, t),
				i =
					e.metadata && e.metadata.size > 0
						? P.Schema.createCustomMetadataVector(
								r,
								[...e.metadata].map(([s, o]) => {
									let a = r.createString(`${s}`),
										l = r.createString(`${o}`);
									return (
										P.KeyValue.startKeyValue(r),
										P.KeyValue.addKey(r, a),
										P.KeyValue.addValue(r, l),
										P.KeyValue.endKeyValue(r)
									);
								})
						  )
						: -1;
			return (
				P.Schema.startSchema(r),
				P.Schema.addFields(r, n),
				P.Schema.addEndianness(r, ww ? P.Endianness.Little : P.Endianness.Big),
				i !== -1 && P.Schema.addCustomMetadata(r, i),
				P.Schema.endSchema(r)
			);
		}
		function gw(r, e) {
			let t = -1,
				n = -1,
				i = -1,
				s = e.type,
				o = e.typeId;
			Ie.DataType.isDictionary(s)
				? ((o = s.dictionary.typeId),
				  (i = fl.instance.visit(s, r)),
				  (n = fl.instance.visit(s.dictionary, r)))
				: (n = fl.instance.visit(s, r));
			let a = (s.children || []).map((y) => Ke.Field.encode(r, y)),
				l = P.Field.createChildrenVector(r, a),
				f =
					e.metadata && e.metadata.size > 0
						? P.Field.createCustomMetadataVector(
								r,
								[...e.metadata].map(([y, F]) => {
									let E = r.createString(`${y}`),
										C = r.createString(`${F}`);
									return (
										P.KeyValue.startKeyValue(r),
										P.KeyValue.addKey(r, E),
										P.KeyValue.addValue(r, C),
										P.KeyValue.endKeyValue(r)
									);
								})
						  )
						: -1;
			return (
				e.name && (t = r.createString(e.name)),
				P.Field.startField(r),
				P.Field.addType(r, n),
				P.Field.addTypeType(r, o),
				P.Field.addChildren(r, l),
				P.Field.addNullable(r, !!e.nullable),
				t !== -1 && P.Field.addName(r, t),
				i !== -1 && P.Field.addDictionary(r, i),
				f !== -1 && P.Field.addCustomMetadata(r, f),
				P.Field.endField(r)
			);
		}
		function vw(r, e) {
			let t = e.nodes || [],
				n = e.buffers || [];
			Be.RecordBatch.startNodesVector(r, t.length),
				t
					.slice()
					.reverse()
					.forEach((o) => Yn.encode(r, o));
			let i = r.endVector();
			Be.RecordBatch.startBuffersVector(r, n.length),
				n
					.slice()
					.reverse()
					.forEach((o) => Hn.encode(r, o));
			let s = r.endVector();
			return (
				Be.RecordBatch.startRecordBatch(r),
				Be.RecordBatch.addLength(r, new zn(e.length, 0)),
				Be.RecordBatch.addNodes(r, i),
				Be.RecordBatch.addBuffers(r, s),
				Be.RecordBatch.endRecordBatch(r)
			);
		}
		function Tw(r, e) {
			let t = Mt.encode(r, e.data);
			return (
				Be.DictionaryBatch.startDictionaryBatch(r),
				Be.DictionaryBatch.addId(r, new zn(e.id, 0)),
				Be.DictionaryBatch.addIsDelta(r, e.isDelta),
				Be.DictionaryBatch.addData(r, t),
				Be.DictionaryBatch.endDictionaryBatch(r)
			);
		}
		function Iw(r, e) {
			return Be.FieldNode.createFieldNode(r, new zn(e.length, 0), new zn(e.nullCount, 0));
		}
		function Bw(r, e) {
			return P.Buffer.createBuffer(r, new zn(e.offset, 0), new zn(e.length, 0));
		}
		var ww = (function () {
			let r = new ArrayBuffer(2);
			return new DataView(r).setInt16(0, 256, !0), new Int16Array(r)[0] === 256;
		})();
	});
	var Ba = g((ne) => {
		'use strict';
		Object.defineProperty(ne, '__esModule', { value: !0 });
		ne.magicX2AndPadding =
			ne.magicAndPadding =
			ne.magicLength =
			ne.checkForMagicArrowString =
			ne.MAGIC =
			ne.MAGIC_STR =
			ne.PADDING =
			ne.JSONMessageReader =
			ne.AsyncMessageReader =
			ne.MessageReader =
				void 0;
		var fn = tt(),
			hn = _e(),
			Sw = Tr(),
			Fy = Sw.flatbuffers.ByteBuffer,
			As = Wn(),
			Aw = rt(),
			Dw = Qc(),
			Oy = We(),
			Ia = on(),
			$t = ni(),
			hl = (r) => `Expected ${hn.MessageHeader[r]} Message in stream, but was null or length 0.`,
			pl = (r) =>
				`Header pointer of flatbuffer-encoded ${hn.MessageHeader[r]} Message is null or length 0.`,
			My = (r, e) => `Expected to read ${r} metadata bytes, but only read ${e}.`,
			Ey = (r, e) => `Expected to read ${r} bytes for message body, but only read ${e}.`,
			yl = class {
				constructor(e) {
					this.source = e instanceof Ia.ByteStream ? e : new Ia.ByteStream(e);
				}
				[Symbol.iterator]() {
					return this;
				}
				next() {
					let e;
					return (e = this.readMetadataLength()).done ||
						(e.value === -1 && (e = this.readMetadataLength()).done) ||
						(e = this.readMetadata(e.value)).done
						? $t.ITERATOR_DONE
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
					if (e != null && t.value.headerType !== e) throw new Error(hl(e));
					return t.value;
				}
				readMessageBody(e) {
					if (e <= 0) return new Uint8Array(0);
					let t = Oy.toUint8Array(this.source.read(e));
					if (t.byteLength < e) throw new Error(Ey(e, t.byteLength));
					return t.byteOffset % 8 == 0 && t.byteOffset + t.byteLength <= t.buffer.byteLength
						? t
						: t.slice();
				}
				readSchema(e = !1) {
					let t = hn.MessageHeader.Schema,
						n = this.readMessage(t),
						i = n == null ? void 0 : n.header();
					if (e && !i) throw new Error(pl(t));
					return i;
				}
				readMetadataLength() {
					let e = this.source.read(ne.PADDING),
						t = e && new Fy(e),
						n = (t == null ? void 0 : t.readInt32(0)) || 0;
					return { done: n === 0, value: n };
				}
				readMetadata(e) {
					let t = this.source.read(e);
					if (!t) return $t.ITERATOR_DONE;
					if (t.byteLength < e) throw new Error(My(e, t.byteLength));
					return { done: !1, value: As.Message.decode(t) };
				}
			};
		ne.MessageReader = yl;
		var Ry = class {
			constructor(e, t) {
				this.source =
					e instanceof Ia.AsyncByteStream
						? e
						: Aw.isFileHandle(e)
						? new Dw.AsyncRandomAccessFile(e, t)
						: new Ia.AsyncByteStream(e);
			}
			[Symbol.asyncIterator]() {
				return this;
			}
			next() {
				return fn.__awaiter(this, void 0, void 0, function* () {
					let e;
					return (e = yield this.readMetadataLength()).done ||
						(e.value === -1 && (e = yield this.readMetadataLength()).done) ||
						(e = yield this.readMetadata(e.value)).done
						? $t.ITERATOR_DONE
						: e;
				});
			}
			throw(e) {
				return fn.__awaiter(this, void 0, void 0, function* () {
					return yield this.source.throw(e);
				});
			}
			return(e) {
				return fn.__awaiter(this, void 0, void 0, function* () {
					return yield this.source.return(e);
				});
			}
			readMessage(e) {
				return fn.__awaiter(this, void 0, void 0, function* () {
					let t;
					if ((t = yield this.next()).done) return null;
					if (e != null && t.value.headerType !== e) throw new Error(hl(e));
					return t.value;
				});
			}
			readMessageBody(e) {
				return fn.__awaiter(this, void 0, void 0, function* () {
					if (e <= 0) return new Uint8Array(0);
					let t = Oy.toUint8Array(yield this.source.read(e));
					if (t.byteLength < e) throw new Error(Ey(e, t.byteLength));
					return t.byteOffset % 8 == 0 && t.byteOffset + t.byteLength <= t.buffer.byteLength
						? t
						: t.slice();
				});
			}
			readSchema(e = !1) {
				return fn.__awaiter(this, void 0, void 0, function* () {
					let t = hn.MessageHeader.Schema,
						n = yield this.readMessage(t),
						i = n == null ? void 0 : n.header();
					if (e && !i) throw new Error(pl(t));
					return i;
				});
			}
			readMetadataLength() {
				return fn.__awaiter(this, void 0, void 0, function* () {
					let e = yield this.source.read(ne.PADDING),
						t = e && new Fy(e),
						n = (t == null ? void 0 : t.readInt32(0)) || 0;
					return { done: n === 0, value: n };
				});
			}
			readMetadata(e) {
				return fn.__awaiter(this, void 0, void 0, function* () {
					let t = yield this.source.read(e);
					if (!t) return $t.ITERATOR_DONE;
					if (t.byteLength < e) throw new Error(My(e, t.byteLength));
					return { done: !1, value: As.Message.decode(t) };
				});
			}
		};
		ne.AsyncMessageReader = Ry;
		var Uy = class extends yl {
			constructor(e) {
				super(new Uint8Array(0));
				(this._schema = !1),
					(this._body = []),
					(this._batchIndex = 0),
					(this._dictionaryIndex = 0),
					(this._json = e instanceof $t.ArrowJSON ? e : new $t.ArrowJSON(e));
			}
			next() {
				let { _json: e } = this;
				if (!this._schema) {
					this._schema = !0;
					let t = As.Message.fromJSON(e.schema, hn.MessageHeader.Schema);
					return { done: !1, value: t };
				}
				if (this._dictionaryIndex < e.dictionaries.length) {
					let t = e.dictionaries[this._dictionaryIndex++];
					this._body = t.data.columns;
					let n = As.Message.fromJSON(t, hn.MessageHeader.DictionaryBatch);
					return { done: !1, value: n };
				}
				if (this._batchIndex < e.batches.length) {
					let t = e.batches[this._batchIndex++];
					this._body = t.columns;
					let n = As.Message.fromJSON(t, hn.MessageHeader.RecordBatch);
					return { done: !1, value: n };
				}
				return (this._body = []), $t.ITERATOR_DONE;
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
				if (e != null && t.value.headerType !== e) throw new Error(hl(e));
				return t.value;
			}
			readSchema() {
				let e = hn.MessageHeader.Schema,
					t = this.readMessage(e),
					n = t == null ? void 0 : t.header();
				if (!t || !n) throw new Error(pl(e));
				return n;
			}
		};
		ne.JSONMessageReader = Uy;
		ne.PADDING = 4;
		ne.MAGIC_STR = 'ARROW1';
		ne.MAGIC = new Uint8Array(ne.MAGIC_STR.length);
		for (let r = 0; r < ne.MAGIC_STR.length; r += 1 | 0) ne.MAGIC[r] = ne.MAGIC_STR.charCodeAt(r);
		function Fw(r, e = 0) {
			for (let t = -1, n = ne.MAGIC.length; ++t < n; ) if (ne.MAGIC[t] !== r[e + t]) return !1;
			return !0;
		}
		ne.checkForMagicArrowString = Fw;
		ne.magicLength = ne.MAGIC.length;
		ne.magicAndPadding = ne.magicLength + ne.PADDING;
		ne.magicX2AndPadding = ne.magicLength * 2 + ne.PADDING;
	});
	var gl = g((Oe) => {
		'use strict';
		Object.defineProperty(Oe, '__esModule', { value: !0 });
		Oe.compareTypes =
			Oe.compareFields =
			Oe.compareSchemas =
			Oe.instance =
			Oe.TypeComparator =
				void 0;
		var Ow = Xe(),
			j = class extends Ow.Visitor {
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
		Oe.TypeComparator = j;
		function ct(r, e) {
			return e instanceof r.constructor;
		}
		function Ds(r, e) {
			return r === e || ct(r, e);
		}
		function Er(r, e) {
			return r === e || (ct(r, e) && r.bitWidth === e.bitWidth && r.isSigned === e.isSigned);
		}
		function wa(r, e) {
			return r === e || (ct(r, e) && r.precision === e.precision);
		}
		function Mw(r, e) {
			return r === e || (ct(r, e) && r.byteWidth === e.byteWidth);
		}
		function _l(r, e) {
			return r === e || (ct(r, e) && r.unit === e.unit);
		}
		function Fs(r, e) {
			return r === e || (ct(r, e) && r.unit === e.unit && r.timezone === e.timezone);
		}
		function Os(r, e) {
			return r === e || (ct(r, e) && r.unit === e.unit && r.bitWidth === e.bitWidth);
		}
		function Ew(r, e) {
			return (
				r === e ||
				(ct(r, e) &&
					r.children.length === e.children.length &&
					Oe.instance.compareManyFields(r.children, e.children))
			);
		}
		function Rw(r, e) {
			return (
				r === e ||
				(ct(r, e) &&
					r.children.length === e.children.length &&
					Oe.instance.compareManyFields(r.children, e.children))
			);
		}
		function ml(r, e) {
			return (
				r === e ||
				(ct(r, e) &&
					r.mode === e.mode &&
					r.typeIds.every((t, n) => t === e.typeIds[n]) &&
					Oe.instance.compareManyFields(r.children, e.children))
			);
		}
		function Uw(r, e) {
			return (
				r === e ||
				(ct(r, e) &&
					r.id === e.id &&
					r.isOrdered === e.isOrdered &&
					Oe.instance.visit(r.indices, e.indices) &&
					Oe.instance.visit(r.dictionary, e.dictionary))
			);
		}
		function bl(r, e) {
			return r === e || (ct(r, e) && r.unit === e.unit);
		}
		function Vw(r, e) {
			return (
				r === e ||
				(ct(r, e) &&
					r.listSize === e.listSize &&
					r.children.length === e.children.length &&
					Oe.instance.compareManyFields(r.children, e.children))
			);
		}
		function Pw(r, e) {
			return (
				r === e ||
				(ct(r, e) &&
					r.keysSorted === e.keysSorted &&
					r.children.length === e.children.length &&
					Oe.instance.compareManyFields(r.children, e.children))
			);
		}
		j.prototype.visitNull = Ds;
		j.prototype.visitBool = Ds;
		j.prototype.visitInt = Er;
		j.prototype.visitInt8 = Er;
		j.prototype.visitInt16 = Er;
		j.prototype.visitInt32 = Er;
		j.prototype.visitInt64 = Er;
		j.prototype.visitUint8 = Er;
		j.prototype.visitUint16 = Er;
		j.prototype.visitUint32 = Er;
		j.prototype.visitUint64 = Er;
		j.prototype.visitFloat = wa;
		j.prototype.visitFloat16 = wa;
		j.prototype.visitFloat32 = wa;
		j.prototype.visitFloat64 = wa;
		j.prototype.visitUtf8 = Ds;
		j.prototype.visitBinary = Ds;
		j.prototype.visitFixedSizeBinary = Mw;
		j.prototype.visitDate = _l;
		j.prototype.visitDateDay = _l;
		j.prototype.visitDateMillisecond = _l;
		j.prototype.visitTimestamp = Fs;
		j.prototype.visitTimestampSecond = Fs;
		j.prototype.visitTimestampMillisecond = Fs;
		j.prototype.visitTimestampMicrosecond = Fs;
		j.prototype.visitTimestampNanosecond = Fs;
		j.prototype.visitTime = Os;
		j.prototype.visitTimeSecond = Os;
		j.prototype.visitTimeMillisecond = Os;
		j.prototype.visitTimeMicrosecond = Os;
		j.prototype.visitTimeNanosecond = Os;
		j.prototype.visitDecimal = Ds;
		j.prototype.visitList = Ew;
		j.prototype.visitStruct = Rw;
		j.prototype.visitUnion = ml;
		j.prototype.visitDenseUnion = ml;
		j.prototype.visitSparseUnion = ml;
		j.prototype.visitDictionary = Uw;
		j.prototype.visitInterval = bl;
		j.prototype.visitIntervalDayTime = bl;
		j.prototype.visitIntervalYearMonth = bl;
		j.prototype.visitFixedSizeList = Vw;
		j.prototype.visitMap = Pw;
		Oe.instance = new j();
		function Nw(r, e) {
			return Oe.instance.compareSchemas(r, e);
		}
		Oe.compareSchemas = Nw;
		function Lw(r, e) {
			return Oe.instance.compareFields(r, e);
		}
		Oe.compareFields = Lw;
		function kw(r, e) {
			return Oe.instance.visit(r, e);
		}
		Oe.compareTypes = kw;
	});
	var ky = g((Sa) => {
		'use strict';
		Object.defineProperty(Sa, '__esModule', { value: !0 });
		Sa.VectorAssembler = void 0;
		var xw = Xe(),
			Vy = _e(),
			Cw = Rr(),
			vl = We(),
			Tl = nr(),
			jw = Cn(),
			Py = Wn(),
			Ny = oe(),
			Ce = class extends xw.Visitor {
				constructor() {
					super();
					(this._byteLength = 0),
						(this._nodes = []),
						(this._buffers = []),
						(this._bufferRegions = []);
				}
				static assemble(...e) {
					let t = new Ce(),
						n = jw.selectVectorChildrenArgs(Cw.RecordBatch, e),
						[i = t] = t.visitMany(n);
					return i;
				}
				visit(e) {
					if (!Ny.DataType.isDictionary(e.type)) {
						let { data: t, length: n, nullCount: i } = e;
						if (n > 2147483647)
							throw new RangeError('Cannot write arrays larger than 2^31 - 1 in length');
						Ny.DataType.isNull(e.type) ||
							Jt.call(
								this,
								i <= 0 ? new Uint8Array(0) : Tl.truncateBitmap(t.offset, n, t.nullBitmap)
							),
							this.nodes.push(new Py.FieldNode(n, i));
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
		Sa.VectorAssembler = Ce;
		function Jt(r) {
			let e = (r.byteLength + 7) & ~7;
			return (
				this.buffers.push(r),
				this.bufferRegions.push(new Py.BufferRegion(this._byteLength, e)),
				(this._byteLength += e),
				this
			);
		}
		function qw(r) {
			let { type: e, length: t, typeIds: n, valueOffsets: i } = r;
			if ((Jt.call(this, n), e.mode === Vy.UnionMode.Sparse)) return Bl.call(this, r);
			if (e.mode === Vy.UnionMode.Dense) {
				if (r.offset <= 0) return Jt.call(this, i), Bl.call(this, r);
				{
					let s = n.reduce((y, F) => Math.max(y, F), n[0]),
						o = new Int32Array(s + 1),
						a = new Int32Array(s + 1).fill(-1),
						l = new Int32Array(t),
						f = vl.rebaseValueOffsets(-i[0], t, i);
					for (let y, F, E = -1; ++E < t; )
						(F = a[(y = n[E])]) === -1 && (F = a[y] = f[y]), (l[E] = f[E] - F), ++o[y];
					Jt.call(this, l);
					for (let y, F = -1, E = e.children.length; ++F < E; )
						if ((y = r.getChildAt(F))) {
							let C = e.typeIds[F],
								we = Math.min(t, o[C]);
							this.visit(y.slice(a[C], we));
						}
				}
			}
			return this;
		}
		function Ww(r) {
			let e;
			return r.nullCount >= r.length
				? Jt.call(this, new Uint8Array(0))
				: (e = r.values) instanceof Uint8Array
				? Jt.call(this, Tl.truncateBitmap(r.offset, r.length, e))
				: Jt.call(this, Tl.packBools(r));
		}
		function pn(r) {
			return Jt.call(this, r.values.subarray(0, r.length * r.stride));
		}
		function Ly(r) {
			let { length: e, values: t, valueOffsets: n } = r,
				i = n[0],
				s = n[e],
				o = Math.min(s - i, t.byteLength - i);
			return (
				Jt.call(this, vl.rebaseValueOffsets(-n[0], e, n)), Jt.call(this, t.subarray(i, i + o)), this
			);
		}
		function Il(r) {
			let { length: e, valueOffsets: t } = r;
			return t && Jt.call(this, vl.rebaseValueOffsets(t[0], e, t)), this.visit(r.getChildAt(0));
		}
		function Bl(r) {
			return this.visitMany(r.type.children.map((e, t) => r.getChildAt(t)).filter(Boolean))[0];
		}
		Ce.prototype.visitBool = Ww;
		Ce.prototype.visitInt = pn;
		Ce.prototype.visitFloat = pn;
		Ce.prototype.visitUtf8 = Ly;
		Ce.prototype.visitBinary = Ly;
		Ce.prototype.visitFixedSizeBinary = pn;
		Ce.prototype.visitDate = pn;
		Ce.prototype.visitTimestamp = pn;
		Ce.prototype.visitTime = pn;
		Ce.prototype.visitDecimal = pn;
		Ce.prototype.visitList = Il;
		Ce.prototype.visitStruct = Bl;
		Ce.prototype.visitUnion = qw;
		Ce.prototype.visitInterval = pn;
		Ce.prototype.visitFixedSizeList = Il;
		Ce.prototype.visitMap = Il;
	});
	var Cy = g((Aa) => {
		'use strict';
		Object.defineProperty(Aa, '__esModule', { value: !0 });
		Aa.JSONTypeAssembler = void 0;
		var zw = Xe(),
			et = Yr(),
			Vi = _e(),
			xy = class extends zw.Visitor {
				visit(e) {
					return e == null ? void 0 : super.visit(e);
				}
				visitNull({ typeId: e }) {
					return { name: et.Type[e].toLowerCase() };
				}
				visitInt({ typeId: e, bitWidth: t, isSigned: n }) {
					return { name: et.Type[e].toLowerCase(), bitWidth: t, isSigned: n };
				}
				visitFloat({ typeId: e, precision: t }) {
					return { name: et.Type[e].toLowerCase(), precision: Vi.Precision[t] };
				}
				visitBinary({ typeId: e }) {
					return { name: et.Type[e].toLowerCase() };
				}
				visitBool({ typeId: e }) {
					return { name: et.Type[e].toLowerCase() };
				}
				visitUtf8({ typeId: e }) {
					return { name: et.Type[e].toLowerCase() };
				}
				visitDecimal({ typeId: e, scale: t, precision: n }) {
					return { name: et.Type[e].toLowerCase(), scale: t, precision: n };
				}
				visitDate({ typeId: e, unit: t }) {
					return { name: et.Type[e].toLowerCase(), unit: Vi.DateUnit[t] };
				}
				visitTime({ typeId: e, unit: t, bitWidth: n }) {
					return { name: et.Type[e].toLowerCase(), unit: Vi.TimeUnit[t], bitWidth: n };
				}
				visitTimestamp({ typeId: e, timezone: t, unit: n }) {
					return { name: et.Type[e].toLowerCase(), unit: Vi.TimeUnit[n], timezone: t };
				}
				visitInterval({ typeId: e, unit: t }) {
					return { name: et.Type[e].toLowerCase(), unit: Vi.IntervalUnit[t] };
				}
				visitList({ typeId: e }) {
					return { name: et.Type[e].toLowerCase() };
				}
				visitStruct({ typeId: e }) {
					return { name: et.Type[e].toLowerCase() };
				}
				visitUnion({ typeId: e, mode: t, typeIds: n }) {
					return { name: et.Type[e].toLowerCase(), mode: Vi.UnionMode[t], typeIds: [...n] };
				}
				visitDictionary(e) {
					return this.visit(e.dictionary);
				}
				visitFixedSizeBinary({ typeId: e, byteWidth: t }) {
					return { name: et.Type[e].toLowerCase(), byteWidth: t };
				}
				visitFixedSizeList({ typeId: e, listSize: t }) {
					return { name: et.Type[e].toLowerCase(), listSize: t };
				}
				visitMap({ typeId: e, keysSorted: t }) {
					return { name: et.Type[e].toLowerCase(), keysSorted: t };
				}
			};
		Aa.JSONTypeAssembler = xy;
	});
	var Wy = g((Oa) => {
		'use strict';
		Object.defineProperty(Oa, '__esModule', { value: !0 });
		Oa.JSONVectorAssembler = void 0;
		var Hw = ms(),
			Ms = Mi(),
			Yw = Ve(),
			Gw = Xe(),
			$w = _e(),
			Jw = Rr(),
			wl = _e(),
			Da = nr(),
			Kw = Cn(),
			jy = oe(),
			Fa = class extends Gw.Visitor {
				static assemble(...e) {
					return new Fa().visitMany(Kw.selectColumnChildrenArgs(Jw.RecordBatch, e));
				}
				visit(e) {
					let { data: t, name: n, length: i } = e,
						{ offset: s, nullCount: o, nullBitmap: a } = t,
						l = jy.DataType.isDictionary(e.type) ? e.type.indices : e.type,
						f = Object.assign([], t.buffers, { [$w.BufferType.VALIDITY]: void 0 });
					return Object.assign(
						{
							name: n,
							count: i,
							VALIDITY: jy.DataType.isNull(l)
								? void 0
								: o <= 0
								? Array.from({ length: i }, () => 1)
								: [...new Da.BitIterator(a, s, i, null, Da.getBit)]
						},
						super.visit(Yw.Vector.new(t.clone(l, s, i, 0, f)))
					);
				}
				visitNull() {
					return {};
				}
				visitBool({ values: e, offset: t, length: n }) {
					return { DATA: [...new Da.BitIterator(e, t, n, null, Da.getBool)] };
				}
				visitInt(e) {
					return { DATA: e.type.bitWidth < 64 ? [...e.values] : [...Es(e.values, 2)] };
				}
				visitFloat(e) {
					return { DATA: [...e.values] };
				}
				visitUtf8(e) {
					return { DATA: [...e], OFFSET: [...e.valueOffsets] };
				}
				visitBinary(e) {
					return { DATA: [...qy(e)], OFFSET: [...e.valueOffsets] };
				}
				visitFixedSizeBinary(e) {
					return { DATA: [...qy(e)] };
				}
				visitDate(e) {
					return { DATA: e.type.unit === wl.DateUnit.DAY ? [...e.values] : [...Es(e.values, 2)] };
				}
				visitTimestamp(e) {
					return { DATA: [...Es(e.values, 2)] };
				}
				visitTime(e) {
					return {
						DATA: e.type.unit < wl.TimeUnit.MICROSECOND ? [...e.values] : [...Es(e.values, 2)]
					};
				}
				visitDecimal(e) {
					return { DATA: [...Es(e.values, 4)] };
				}
				visitList(e) {
					return {
						OFFSET: [...e.valueOffsets],
						children: e.type.children.map((t, n) => this.visit(new Ms.Column(t, [e.getChildAt(n)])))
					};
				}
				visitStruct(e) {
					return {
						children: e.type.children.map((t, n) => this.visit(new Ms.Column(t, [e.getChildAt(n)])))
					};
				}
				visitUnion(e) {
					return {
						TYPE: [...e.typeIds],
						OFFSET: e.type.mode === wl.UnionMode.Dense ? [...e.valueOffsets] : void 0,
						children: e.type.children.map((t, n) => this.visit(new Ms.Column(t, [e.getChildAt(n)])))
					};
				}
				visitInterval(e) {
					return { DATA: [...e.values] };
				}
				visitFixedSizeList(e) {
					return {
						children: e.type.children.map((t, n) => this.visit(new Ms.Column(t, [e.getChildAt(n)])))
					};
				}
				visitMap(e) {
					return {
						OFFSET: [...e.valueOffsets],
						children: e.type.children.map((t, n) => this.visit(new Ms.Column(t, [e.getChildAt(n)])))
					};
				}
			};
		Oa.JSONVectorAssembler = Fa;
		function* qy(r) {
			for (let e of r)
				yield e
					.reduce((t, n) => `${t}${('0' + (n & 255).toString(16)).slice(-2)}`, '')
					.toUpperCase();
		}
		function* Es(r, e) {
			for (let t = -1, n = r.length / e; ++t < n; )
				yield `${Hw.BN.new(r.subarray((t + 0) * e, (t + 1) * e), !1)}`;
		}
	});
	var Va = g((hr) => {
		'use strict';
		Object.defineProperty(hr, '__esModule', { value: !0 });
		hr.RecordBatchJSONWriter =
			hr.RecordBatchFileWriter =
			hr.RecordBatchStreamWriter =
			hr.RecordBatchWriter =
				void 0;
		var zy = tt(),
			Sl = Us(),
			Zw = Ba(),
			Xw = Mi(),
			Qw = oe(),
			e0 = $e(),
			Ma = Wn(),
			Al = Wn(),
			Pi = Kc(),
			Dl = _e(),
			Hy = gl(),
			Fl = on(),
			Yy = ky(),
			t0 = Cy(),
			Gy = Wy(),
			r0 = We(),
			Ol = Rr(),
			n0 = ni(),
			fr = rt(),
			Rs = class extends n0.ReadableInterop {
				constructor(e) {
					super();
					(this._position = 0),
						(this._started = !1),
						(this._sink = new Fl.AsyncByteQueue()),
						(this._schema = null),
						(this._dictionaryBlocks = []),
						(this._recordBatchBlocks = []),
						(this._dictionaryDeltaOffsets = new Map()),
						fr.isObject(e) || (e = { autoDestroy: !0, writeLegacyIpcFormat: !1 }),
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
					return fr.isPromise(e)
						? e.then((t) => this.writeAll(t))
						: fr.isAsyncIterable(e)
						? El(this, e)
						: Ml(this, e);
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
						e === this._sink || e instanceof Fl.AsyncByteQueue
							? (this._sink = e)
							: ((this._sink = new Fl.AsyncByteQueue()),
							  e && fr.isWritableDOMStream(e)
									? this.toDOMStream({ type: 'bytes' }).pipeTo(e)
									: e &&
									  fr.isWritableNodeStream(e) &&
									  this.toNodeStream({ objectMode: !1 }).pipe(e)),
						this._started && this._schema && this._writeFooter(this._schema),
						(this._started = !1),
						(this._dictionaryBlocks = []),
						(this._recordBatchBlocks = []),
						(this._dictionaryDeltaOffsets = new Map()),
						(!t || !Hy.compareSchemas(t, this._schema)) &&
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
						if (e instanceof Sl.Table && !(t = e.schema)) return this.finish() && void 0;
						if (e instanceof Ol.RecordBatch && !(t = e.schema)) return this.finish() && void 0;
					} else throw new Error('RecordBatchWriter is closed');
					if (t && !Hy.compareSchemas(t, this._schema)) {
						if (this._started && this._autoDestroy) return this.close();
						this.reset(this._sink, t);
					}
					e instanceof Ol.RecordBatch
						? e instanceof Ol._InternalEmptyPlaceholderRecordBatch || this._writeRecordBatch(e)
						: e instanceof Sl.Table
						? this.writeAll(e.chunks)
						: fr.isIterable(e) && this.writeAll(e);
				}
				_writeMessage(e, t = 8) {
					let n = t - 1,
						i = Ma.Message.encode(e),
						s = i.byteLength,
						o = this._writeLegacyIpcFormat ? 4 : 8,
						a = (s + o + n) & ~n,
						l = a - s - o;
					return (
						e.headerType === Dl.MessageHeader.RecordBatch
							? this._recordBatchBlocks.push(new Pi.FileBlock(a, e.bodyLength, this._position))
							: e.headerType === Dl.MessageHeader.DictionaryBatch &&
							  this._dictionaryBlocks.push(new Pi.FileBlock(a, e.bodyLength, this._position)),
						this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)),
						this._write(Int32Array.of(a - o)),
						s > 0 && this._write(i),
						this._writePadding(l)
					);
				}
				_write(e) {
					if (this._started) {
						let t = r0.toUint8Array(e);
						t && t.byteLength > 0 && (this._sink.write(t), (this._position += t.byteLength));
					}
					return this;
				}
				_writeSchema(e) {
					return this._writeMessage(Ma.Message.from(e));
				}
				_writeFooter(e) {
					return this._writeLegacyIpcFormat
						? this._write(Int32Array.of(0))
						: this._write(Int32Array.of(-1, 0));
				}
				_writeMagic() {
					return this._write(Zw.MAGIC);
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
						} = Yy.VectorAssembler.assemble(e),
						o = new Al.RecordBatch(e.length, n, i),
						a = Ma.Message.from(o, t);
					return this._writeDictionaries(e)._writeMessage(a)._writeBodyBuffers(s);
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
							buffers: a
						} = Yy.VectorAssembler.assemble(e),
						l = new Al.RecordBatch(e.length, s, o),
						f = new Al.DictionaryBatch(l, t, n),
						y = Ma.Message.from(f, i);
					return this._writeMessage(y)._writeBodyBuffers(a);
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
		hr.RecordBatchWriter = Rs;
		var Ea = class extends Rs {
			static writeAll(e, t) {
				let n = new Ea(t);
				return fr.isPromise(e)
					? e.then((i) => n.writeAll(i))
					: fr.isAsyncIterable(e)
					? El(n, e)
					: Ml(n, e);
			}
		};
		hr.RecordBatchStreamWriter = Ea;
		var Ra = class extends Rs {
			static writeAll(e) {
				let t = new Ra();
				return fr.isPromise(e)
					? e.then((n) => t.writeAll(n))
					: fr.isAsyncIterable(e)
					? El(t, e)
					: Ml(t, e);
			}
			constructor() {
				super();
				this._autoDestroy = !0;
			}
			_writeSchema(e) {
				return this._writeMagic()._writePadding(2);
			}
			_writeFooter(e) {
				let t = Pi.Footer.encode(
					new Pi.Footer(e, Dl.MetadataVersion.V4, this._recordBatchBlocks, this._dictionaryBlocks)
				);
				return super._writeFooter(e)._write(t)._write(Int32Array.of(t.byteLength))._writeMagic();
			}
		};
		hr.RecordBatchFileWriter = Ra;
		var Ua = class extends Rs {
			constructor() {
				super();
				(this._autoDestroy = !0), (this._recordBatches = []), (this._dictionaries = []);
			}
			static writeAll(e) {
				return new Ua().writeAll(e);
			}
			_writeMessage() {
				return this;
			}
			_writeFooter(e) {
				return this;
			}
			_writeSchema(e) {
				return this._write(`{
  "schema": ${JSON.stringify({ fields: e.fields.map($y) }, null, 2)}`);
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
					this._write(`${i0(e, t, n)}`),
					this._dictionaryBlocks.push(new Pi.FileBlock(0, 0, 0)),
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
							this._write(`${s0(this._recordBatches[e])}`),
							this._recordBatchBlocks.push(new Pi.FileBlock(0, 0, 0));
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
		hr.RecordBatchJSONWriter = Ua;
		function Ml(r, e) {
			let t = e;
			e instanceof Sl.Table && ((t = e.chunks), r.reset(void 0, e.schema));
			for (let n of t) r.write(n);
			return r.finish();
		}
		function El(r, e) {
			var t, n, i, s;
			return zy.__awaiter(this, void 0, void 0, function* () {
				try {
					for (t = zy.__asyncValues(e); (n = yield t.next()), !n.done; ) {
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
		function $y({ name: r, type: e, nullable: t }) {
			let n = new t0.JSONTypeAssembler();
			return {
				name: r,
				nullable: t,
				type: n.visit(e),
				children: (e.children || []).map($y),
				dictionary: Qw.DataType.isDictionary(e)
					? { id: e.id, isOrdered: e.isOrdered, indexType: n.visit(e.indices) }
					: void 0
			};
		}
		function i0(r, e, t = !1) {
			let n = new e0.Field(`${e}`, r.type, r.nullCount > 0),
				i = Gy.JSONVectorAssembler.assemble(new Xw.Column(n, [r]));
			return JSON.stringify({ id: e, isDelta: t, data: { count: r.length, columns: i } }, null, 2);
		}
		function s0(r) {
			return JSON.stringify(
				{ count: r.length, columns: Gy.JSONVectorAssembler.assemble(r) },
				null,
				2
			);
		}
	});
	var Vl = g((yn) => {
		'use strict';
		Object.defineProperty(yn, '__esModule', { value: !0 });
		yn.distributeVectorsIntoRecordBatches =
			yn.distributeColumnsIntoRecordBatches =
			yn.ensureSameLengthData =
				void 0;
		var Jy = zt(),
			Rl = $e(),
			o0 = ln(),
			a0 = Rr(),
			Ul = new Uint8Array(0),
			Ky = (r) => [Ul, Ul, new Uint8Array(r), Ul];
		function u0(r, e, t = e.reduce((n, i) => Math.max(n, i.length), 0)) {
			let n,
				i,
				s = -1,
				o = e.length,
				a = [...r.fields],
				l = [],
				f = ((t + 63) & ~63) >> 3;
			for (; ++s < o; )
				(n = e[s]) && n.length === t
					? (l[s] = n)
					: ((i = a[s]).nullable || (a[s] = a[s].clone({ nullable: !0 })),
					  (l[s] = n
							? n._changeLengthAndBackfillNullBitmap(t)
							: Jy.Data.new(i.type, 0, t, t, Ky(f))));
			return [new Rl.Schema(a), t, l];
		}
		yn.ensureSameLengthData = u0;
		function c0(r) {
			return Zy(new Rl.Schema(r.map(({ field: e }) => e)), r);
		}
		yn.distributeColumnsIntoRecordBatches = c0;
		function Zy(r, e) {
			return l0(
				r,
				e.map((t) => (t instanceof o0.Chunked ? t.chunks.map((n) => n.data) : [t.data]))
			);
		}
		yn.distributeVectorsIntoRecordBatches = Zy;
		function l0(r, e) {
			let t = [...r.fields],
				n = [],
				i = { numBatches: e.reduce((F, E) => Math.max(F, E.length), 0) },
				s = 0,
				o = 0,
				a = -1,
				l = e.length,
				f,
				y = [];
			for (; i.numBatches-- > 0; ) {
				for (o = Number.POSITIVE_INFINITY, a = -1; ++a < l; )
					(y[a] = f = e[a].shift()), (o = Math.min(o, f ? f.length : o));
				isFinite(o) && ((y = d0(t, o, y, e, i)), o > 0 && (n[s++] = [o, y.slice()]));
			}
			return [(r = new Rl.Schema(t, r.metadata)), n.map((F) => new a0.RecordBatch(r, ...F))];
		}
		function d0(r, e, t, n, i) {
			let s,
				o,
				a = 0,
				l = -1,
				f = n.length,
				y = ((e + 63) & ~63) >> 3;
			for (; ++l < f; )
				(s = t[l]) && (a = s.length) >= e
					? a === e
						? (t[l] = s)
						: ((t[l] = s.slice(0, e)),
						  (s = s.slice(e, a - e)),
						  (i.numBatches = Math.max(i.numBatches, n[l].unshift(s))))
					: ((o = r[l]).nullable || (r[l] = o.clone({ nullable: !0 })),
					  (t[l] = s
							? s._changeLengthAndBackfillNullBitmap(e)
							: Jy.Data.new(o.type, 0, e, e, Ky(y))));
			return t;
		}
	});
	var Ne = g((Pa) => {
		'use strict';
		Object.defineProperty(Pa, '__esModule', { value: !0 });
		Pa.BaseVector = void 0;
		var f0 = _e(),
			h0 = ln(),
			p0 = Ss(),
			Pl = Ve(),
			Nl = class extends Pl.AbstractVector {
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
					return `${f0.Type[this.typeId]}Vector`;
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
					return Pl.Vector.new(e, t);
				}
				concat(...e) {
					return h0.Chunked.concat(this, ...e);
				}
				slice(e, t) {
					return p0.clampRange(this, e, t, this._sliceInternal);
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
								(this._children[e] = Pl.Vector.new(this.data.childData[e]));
				}
				toJSON() {
					return [...this];
				}
				_sliceInternal(e, t, n) {
					return e.clone(e.data.slice(t, n - t), null);
				}
				_bindDataAccessors(e) {}
			};
		Pa.BaseVector = Nl;
		Nl.prototype[Symbol.isConcatSpreadable] = !0;
	});
	var Ll = g((Na) => {
		'use strict';
		Object.defineProperty(Na, '__esModule', { value: !0 });
		Na.BinaryVector = void 0;
		var y0 = Ve(),
			_0 = Ne(),
			m0 = oe(),
			Xy = class extends _0.BaseVector {
				asUtf8() {
					return y0.Vector.new(this.data.clone(new m0.Utf8()));
				}
			};
		Na.BinaryVector = Xy;
	});
	var kl = g((La) => {
		'use strict';
		Object.defineProperty(La, '__esModule', { value: !0 });
		La.BoolVector = void 0;
		var b0 = oe(),
			g0 = Ne(),
			v0 = pr(),
			Qy = class extends g0.BaseVector {
				static from(e) {
					return v0.vectorFromValuesWithType(() => new b0.Bool(), e);
				}
			};
		La.BoolVector = Qy;
	});
	var Cl = g((_n) => {
		'use strict';
		Object.defineProperty(_n, '__esModule', { value: !0 });
		_n.DateMillisecondVector = _n.DateDayVector = _n.DateVector = void 0;
		var T0 = _e(),
			I0 = Ne(),
			e_ = pr(),
			xl = oe(),
			ka = class extends I0.BaseVector {
				static from(...e) {
					return e.length === 2
						? e_.vectorFromValuesWithType(
								() => (e[1] === T0.DateUnit.DAY ? new xl.DateDay() : new xl.DateMillisecond()),
								e[0]
						  )
						: e_.vectorFromValuesWithType(() => new xl.DateMillisecond(), e[0]);
				}
			};
		_n.DateVector = ka;
		var t_ = class extends ka {};
		_n.DateDayVector = t_;
		var r_ = class extends ka {};
		_n.DateMillisecondVector = r_;
	});
	var jl = g((xa) => {
		'use strict';
		Object.defineProperty(xa, '__esModule', { value: !0 });
		xa.DecimalVector = void 0;
		var B0 = Ne(),
			n_ = class extends B0.BaseVector {};
		xa.DecimalVector = n_;
	});
	var ja = g((Ca) => {
		'use strict';
		Object.defineProperty(Ca, '__esModule', { value: !0 });
		Ca.DictionaryVector = void 0;
		var w0 = zt(),
			i_ = Ve(),
			S0 = Ne(),
			A0 = pr(),
			D0 = oe(),
			ql = class extends S0.BaseVector {
				constructor(e) {
					super(e);
					this.indices = i_.Vector.new(e.clone(this.type.indices));
				}
				static from(...e) {
					if (e.length === 3) {
						let [t, n, i] = e,
							s = new D0.Dictionary(t.type, n, null, null);
						return i_.Vector.new(w0.Data.Dictionary(s, 0, i.length, 0, null, i, t));
					}
					return A0.vectorFromValuesWithType(() => e[0].type, e[0]);
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
		Ca.DictionaryVector = ql;
		ql.prototype.indices = null;
	});
	var Wl = g((qa) => {
		'use strict';
		Object.defineProperty(qa, '__esModule', { value: !0 });
		qa.FixedSizeBinaryVector = void 0;
		var F0 = Ne(),
			s_ = class extends F0.BaseVector {};
		qa.FixedSizeBinaryVector = s_;
	});
	var zl = g((Wa) => {
		'use strict';
		Object.defineProperty(Wa, '__esModule', { value: !0 });
		Wa.FixedSizeListVector = void 0;
		var O0 = Ne(),
			o_ = class extends O0.BaseVector {};
		Wa.FixedSizeListVector = o_;
	});
	var $l = g((yr) => {
		'use strict';
		Object.defineProperty(yr, '__esModule', { value: !0 });
		yr.Float64Vector = yr.Float32Vector = yr.Float16Vector = yr.FloatVector = void 0;
		var M0 = zt(),
			E0 = Ve(),
			R0 = Ne(),
			U0 = pr(),
			Gn = oe(),
			Vs = class extends R0.BaseVector {
				static from(e) {
					let t = N0(this);
					if (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) {
						let n = P0(e.constructor) || t;
						if ((t === null && (t = n), t && t === n)) {
							let i = new t(),
								s = e.byteLength / i.ArrayType.BYTES_PER_ELEMENT;
							if (!V0(t, e.constructor)) return E0.Vector.new(M0.Data.Float(i, 0, s, 0, null, e));
						}
					}
					if (t) return U0.vectorFromValuesWithType(() => new t(), e);
					throw e instanceof DataView || e instanceof ArrayBuffer
						? new TypeError(`Cannot infer float type from instance of ${e.constructor.name}`)
						: new TypeError('Unrecognized FloatVector input');
				}
			};
		yr.FloatVector = Vs;
		var Hl = class extends Vs {
			toFloat32Array() {
				return new Float32Array(this);
			}
			toFloat64Array() {
				return new Float64Array(this);
			}
		};
		yr.Float16Vector = Hl;
		var Yl = class extends Vs {};
		yr.Float32Vector = Yl;
		var Gl = class extends Vs {};
		yr.Float64Vector = Gl;
		var V0 = (r, e) => r === Gn.Float16 && e !== Uint16Array,
			P0 = (r) => {
				switch (r) {
					case Uint16Array:
						return Gn.Float16;
					case Float32Array:
						return Gn.Float32;
					case Float64Array:
						return Gn.Float64;
					default:
						return null;
				}
			},
			N0 = (r) => {
				switch (r) {
					case Hl:
						return Gn.Float16;
					case Yl:
						return Gn.Float32;
					case Gl:
						return Gn.Float64;
					default:
						return null;
				}
			};
	});
	var Jl = g((mn) => {
		'use strict';
		Object.defineProperty(mn, '__esModule', { value: !0 });
		mn.IntervalYearMonthVector = mn.IntervalDayTimeVector = mn.IntervalVector = void 0;
		var L0 = Ne(),
			za = class extends L0.BaseVector {};
		mn.IntervalVector = za;
		var a_ = class extends za {};
		mn.IntervalDayTimeVector = a_;
		var u_ = class extends za {};
		mn.IntervalYearMonthVector = u_;
	});
	var Ha = g((je) => {
		'use strict';
		Object.defineProperty(je, '__esModule', { value: !0 });
		je.Uint64Vector =
			je.Uint32Vector =
			je.Uint16Vector =
			je.Uint8Vector =
			je.Int64Vector =
			je.Int32Vector =
			je.Int16Vector =
			je.Int8Vector =
			je.IntVector =
				void 0;
		var k0 = zt(),
			x0 = Ve(),
			C0 = Ne(),
			j0 = pr(),
			c_ = rt(),
			l_ = We(),
			Me = oe(),
			_r = class extends C0.BaseVector {
				static from(...e) {
					let [t, n = !1] = e,
						i = z0(this, n);
					if (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) {
						let s = W0(t.constructor, n) || i;
						if ((i === null && (i = s), i && i === s)) {
							let o = new i(),
								a = t.byteLength / o.ArrayType.BYTES_PER_ELEMENT;
							return (
								q0(i, t.constructor) && (a *= 0.5), x0.Vector.new(k0.Data.Int(o, 0, a, 0, null, t))
							);
						}
					}
					if (i) return j0.vectorFromValuesWithType(() => new i(), t);
					throw t instanceof DataView || t instanceof ArrayBuffer
						? new TypeError(`Cannot infer integer type from instance of ${t.constructor.name}`)
						: new TypeError('Unrecognized IntVector input');
				}
			};
		je.IntVector = _r;
		var Kl = class extends _r {};
		je.Int8Vector = Kl;
		var Zl = class extends _r {};
		je.Int16Vector = Zl;
		var Xl = class extends _r {};
		je.Int32Vector = Xl;
		var Ql = class extends _r {
			toBigInt64Array() {
				return l_.toBigInt64Array(this.values);
			}
			get values64() {
				return this._values64 || (this._values64 = this.toBigInt64Array());
			}
		};
		je.Int64Vector = Ql;
		var ed = class extends _r {};
		je.Uint8Vector = ed;
		var td = class extends _r {};
		je.Uint16Vector = td;
		var rd = class extends _r {};
		je.Uint32Vector = rd;
		var nd = class extends _r {
			toBigUint64Array() {
				return l_.toBigUint64Array(this.values);
			}
			get values64() {
				return this._values64 || (this._values64 = this.toBigUint64Array());
			}
		};
		je.Uint64Vector = nd;
		var q0 = (r, e) =>
				(r === Me.Int64 || r === Me.Uint64) && (e === Int32Array || e === Uint32Array),
			W0 = (r, e) => {
				switch (r) {
					case Int8Array:
						return Me.Int8;
					case Int16Array:
						return Me.Int16;
					case Int32Array:
						return e ? Me.Int64 : Me.Int32;
					case c_.BigInt64Array:
						return Me.Int64;
					case Uint8Array:
						return Me.Uint8;
					case Uint16Array:
						return Me.Uint16;
					case Uint32Array:
						return e ? Me.Uint64 : Me.Uint32;
					case c_.BigUint64Array:
						return Me.Uint64;
					default:
						return null;
				}
			},
			z0 = (r, e) => {
				switch (r) {
					case Kl:
						return Me.Int8;
					case Zl:
						return Me.Int16;
					case Xl:
						return e ? Me.Int64 : Me.Int32;
					case Ql:
						return Me.Int64;
					case ed:
						return Me.Uint8;
					case td:
						return Me.Uint16;
					case rd:
						return e ? Me.Uint64 : Me.Uint32;
					case nd:
						return Me.Uint64;
					default:
						return null;
				}
			};
	});
	var id = g((Ya) => {
		'use strict';
		Object.defineProperty(Ya, '__esModule', { value: !0 });
		Ya.ListVector = void 0;
		var H0 = Ne(),
			d_ = class extends H0.BaseVector {};
		Ya.ListVector = d_;
	});
	var sd = g((Ga) => {
		'use strict';
		Object.defineProperty(Ga, '__esModule', { value: !0 });
		Ga.MapVector = void 0;
		var Y0 = Bs(),
			G0 = Ve(),
			$0 = Ne(),
			J0 = oe(),
			f_ = class extends $0.BaseVector {
				asList() {
					let e = this.type.children[0];
					return G0.Vector.new(this.data.clone(new J0.List(e)));
				}
				bind(e) {
					let t = this.getChildAt(0),
						{ [e]: n, [e + 1]: i } = this.valueOffsets;
					return new Y0.MapRow(t.slice(n, i));
				}
			};
		Ga.MapVector = f_;
	});
	var od = g(($a) => {
		'use strict';
		Object.defineProperty($a, '__esModule', { value: !0 });
		$a.NullVector = void 0;
		var K0 = Ne(),
			h_ = class extends K0.BaseVector {};
		$a.NullVector = h_;
	});
	var ad = g((Ja) => {
		'use strict';
		Object.defineProperty(Ja, '__esModule', { value: !0 });
		Ja.StructVector = void 0;
		var Z0 = Bs(),
			X0 = Ne(),
			Q0 = Symbol.for('rowIndex'),
			p_ = class extends X0.BaseVector {
				bind(e) {
					let t = this._row || (this._row = new Z0.StructRow(this)),
						n = Object.create(t);
					return (n[Q0] = e), n;
				}
			};
		Ja.StructVector = p_;
	});
	var ud = g((Rt) => {
		'use strict';
		Object.defineProperty(Rt, '__esModule', { value: !0 });
		Rt.TimestampNanosecondVector =
			Rt.TimestampMicrosecondVector =
			Rt.TimestampMillisecondVector =
			Rt.TimestampSecondVector =
			Rt.TimestampVector =
				void 0;
		var eS = Ne(),
			Ni = class extends eS.BaseVector {};
		Rt.TimestampVector = Ni;
		var y_ = class extends Ni {};
		Rt.TimestampSecondVector = y_;
		var __ = class extends Ni {};
		Rt.TimestampMillisecondVector = __;
		var m_ = class extends Ni {};
		Rt.TimestampMicrosecondVector = m_;
		var b_ = class extends Ni {};
		Rt.TimestampNanosecondVector = b_;
	});
	var cd = g((Ut) => {
		'use strict';
		Object.defineProperty(Ut, '__esModule', { value: !0 });
		Ut.TimeNanosecondVector =
			Ut.TimeMicrosecondVector =
			Ut.TimeMillisecondVector =
			Ut.TimeSecondVector =
			Ut.TimeVector =
				void 0;
		var tS = Ne(),
			Li = class extends tS.BaseVector {};
		Ut.TimeVector = Li;
		var g_ = class extends Li {};
		Ut.TimeSecondVector = g_;
		var v_ = class extends Li {};
		Ut.TimeMillisecondVector = v_;
		var T_ = class extends Li {};
		Ut.TimeMicrosecondVector = T_;
		var I_ = class extends Li {};
		Ut.TimeNanosecondVector = I_;
	});
	var ld = g((bn) => {
		'use strict';
		Object.defineProperty(bn, '__esModule', { value: !0 });
		bn.SparseUnionVector = bn.DenseUnionVector = bn.UnionVector = void 0;
		var rS = Ne(),
			Ka = class extends rS.BaseVector {
				get typeIdToChildIndex() {
					return this.data.type.typeIdToChildIndex;
				}
			};
		bn.UnionVector = Ka;
		var B_ = class extends Ka {
			get valueOffsets() {
				return this.data.valueOffsets;
			}
		};
		bn.DenseUnionVector = B_;
		var w_ = class extends Ka {};
		bn.SparseUnionVector = w_;
	});
	var dd = g((Za) => {
		'use strict';
		Object.defineProperty(Za, '__esModule', { value: !0 });
		Za.Utf8Vector = void 0;
		var nS = Ve(),
			iS = Ne(),
			S_ = oe(),
			sS = pr(),
			A_ = class extends iS.BaseVector {
				static from(e) {
					return sS.vectorFromValuesWithType(() => new S_.Utf8(), e);
				}
				asBinary() {
					return nS.Vector.new(this.data.clone(new S_.Binary()));
				}
			};
		Za.Utf8Vector = A_;
	});
	var D_ = g((gn) => {
		'use strict';
		Object.defineProperty(gn, '__esModule', { value: !0 });
		gn.partial2 = gn.partial1 = gn.partial0 = void 0;
		function oS(r) {
			return function () {
				return r(this);
			};
		}
		gn.partial0 = oS;
		function aS(r) {
			return function (e) {
				return r(this, e);
			};
		}
		gn.partial1 = aS;
		function uS(r) {
			return function (e, t) {
				return r(this, e, t);
			};
		}
		gn.partial2 = uS;
	});
	var pd = g((ki) => {
		'use strict';
		Object.defineProperty(ki, '__esModule', { value: !0 });
		ki.instance = ki.GetVisitor = void 0;
		var Xa = ms(),
			cS = Xe(),
			lS = An(),
			dS = hs(),
			Vt = _e(),
			q = class extends cS.Visitor {};
		ki.GetVisitor = q;
		var fS = (r, e) => 864e5 * r[e],
			fd = (r, e) => 4294967296 * r[e + 1] + (r[e] >>> 0),
			hS = (r, e) => 4294967296 * (r[e + 1] / 1e3) + (r[e] >>> 0) / 1e3,
			pS = (r, e) => 4294967296 * (r[e + 1] / 1e6) + (r[e] >>> 0) / 1e6,
			F_ = (r) => new Date(r),
			yS = (r, e) => F_(fS(r, e)),
			_S = (r, e) => F_(fd(r, e)),
			mS = (r, e) => null,
			O_ = (r, e, t) => {
				let { [t]: n, [t + 1]: i } = e;
				return n != null && i != null ? r.subarray(n, i) : null;
			},
			bS = ({ offset: r, values: e }, t) => {
				let n = r + t;
				return (e[n >> 3] & (1 << n % 8)) != 0;
			},
			M_ = ({ values: r }, e) => yS(r, e),
			E_ = ({ values: r }, e) => _S(r, e * 2),
			mr = ({ stride: r, values: e }, t) => e[r * t],
			R_ = ({ stride: r, values: e }, t) => dS.uint16ToFloat64(e[r * t]),
			hd = ({ stride: r, values: e, type: t }, n) =>
				Xa.BN.new(e.subarray(r * n, r * (n + 1)), t.isSigned),
			gS = ({ stride: r, values: e }, t) => e.subarray(r * t, r * (t + 1)),
			vS = ({ values: r, valueOffsets: e }, t) => O_(r, e, t),
			TS = ({ values: r, valueOffsets: e }, t) => {
				let n = O_(r, e, t);
				return n !== null ? lS.decodeUtf8(n) : null;
			},
			IS = (r, e) => (r.type.bitWidth < 64 ? mr(r, e) : hd(r, e)),
			BS = (r, e) => (r.type.precision !== Vt.Precision.HALF ? mr(r, e) : R_(r, e)),
			wS = (r, e) => (r.type.unit === Vt.DateUnit.DAY ? M_(r, e) : E_(r, e)),
			U_ = ({ values: r }, e) => 1e3 * fd(r, e * 2),
			V_ = ({ values: r }, e) => fd(r, e * 2),
			P_ = ({ values: r }, e) => hS(r, e * 2),
			N_ = ({ values: r }, e) => pS(r, e * 2),
			SS = (r, e) => {
				switch (r.type.unit) {
					case Vt.TimeUnit.SECOND:
						return U_(r, e);
					case Vt.TimeUnit.MILLISECOND:
						return V_(r, e);
					case Vt.TimeUnit.MICROSECOND:
						return P_(r, e);
					case Vt.TimeUnit.NANOSECOND:
						return N_(r, e);
				}
			},
			L_ = ({ values: r, stride: e }, t) => r[e * t],
			k_ = ({ values: r, stride: e }, t) => r[e * t],
			x_ = ({ values: r }, e) => Xa.BN.signed(r.subarray(2 * e, 2 * (e + 1))),
			C_ = ({ values: r }, e) => Xa.BN.signed(r.subarray(2 * e, 2 * (e + 1))),
			AS = (r, e) => {
				switch (r.type.unit) {
					case Vt.TimeUnit.SECOND:
						return L_(r, e);
					case Vt.TimeUnit.MILLISECOND:
						return k_(r, e);
					case Vt.TimeUnit.MICROSECOND:
						return x_(r, e);
					case Vt.TimeUnit.NANOSECOND:
						return C_(r, e);
				}
			},
			DS = ({ values: r }, e) => Xa.BN.decimal(r.subarray(4 * e, 4 * (e + 1))),
			FS = (r, e) => {
				let t = r.getChildAt(0),
					{ valueOffsets: n, stride: i } = r;
				return t.slice(n[e * i], n[e * i + 1]);
			},
			OS = (r, e) => r.bind(e),
			MS = (r, e) => r.bind(e),
			ES = (r, e) => (r.type.mode === Vt.UnionMode.Dense ? j_(r, e) : q_(r, e)),
			j_ = (r, e) => {
				let t = r.typeIdToChildIndex[r.typeIds[e]],
					n = r.getChildAt(t);
				return n ? n.get(r.valueOffsets[e]) : null;
			},
			q_ = (r, e) => {
				let t = r.typeIdToChildIndex[r.typeIds[e]],
					n = r.getChildAt(t);
				return n ? n.get(e) : null;
			},
			RS = (r, e) => r.getValue(r.getKey(e)),
			US = (r, e) => (r.type.unit === Vt.IntervalUnit.DAY_TIME ? W_(r, e) : z_(r, e)),
			W_ = ({ values: r }, e) => r.subarray(2 * e, 2 * (e + 1)),
			z_ = ({ values: r }, e) => {
				let t = r[e],
					n = new Int32Array(2);
				return (n[0] = (t / 12) | 0), (n[1] = t % 12 | 0), n;
			},
			VS = (r, e) => {
				let t = r.getChildAt(0),
					{ stride: n } = r;
				return t.slice(e * n, (e + 1) * n);
			};
		q.prototype.visitNull = mS;
		q.prototype.visitBool = bS;
		q.prototype.visitInt = IS;
		q.prototype.visitInt8 = mr;
		q.prototype.visitInt16 = mr;
		q.prototype.visitInt32 = mr;
		q.prototype.visitInt64 = hd;
		q.prototype.visitUint8 = mr;
		q.prototype.visitUint16 = mr;
		q.prototype.visitUint32 = mr;
		q.prototype.visitUint64 = hd;
		q.prototype.visitFloat = BS;
		q.prototype.visitFloat16 = R_;
		q.prototype.visitFloat32 = mr;
		q.prototype.visitFloat64 = mr;
		q.prototype.visitUtf8 = TS;
		q.prototype.visitBinary = vS;
		q.prototype.visitFixedSizeBinary = gS;
		q.prototype.visitDate = wS;
		q.prototype.visitDateDay = M_;
		q.prototype.visitDateMillisecond = E_;
		q.prototype.visitTimestamp = SS;
		q.prototype.visitTimestampSecond = U_;
		q.prototype.visitTimestampMillisecond = V_;
		q.prototype.visitTimestampMicrosecond = P_;
		q.prototype.visitTimestampNanosecond = N_;
		q.prototype.visitTime = AS;
		q.prototype.visitTimeSecond = L_;
		q.prototype.visitTimeMillisecond = k_;
		q.prototype.visitTimeMicrosecond = x_;
		q.prototype.visitTimeNanosecond = C_;
		q.prototype.visitDecimal = DS;
		q.prototype.visitList = FS;
		q.prototype.visitStruct = MS;
		q.prototype.visitUnion = ES;
		q.prototype.visitDenseUnion = j_;
		q.prototype.visitSparseUnion = q_;
		q.prototype.visitDictionary = RS;
		q.prototype.visitInterval = US;
		q.prototype.visitIntervalDayTime = W_;
		q.prototype.visitIntervalYearMonth = z_;
		q.prototype.visitFixedSizeList = VS;
		q.prototype.visitMap = OS;
		ki.instance = new q();
	});
	var $_ = g((xi) => {
		'use strict';
		Object.defineProperty(xi, '__esModule', { value: !0 });
		xi.instance = xi.IndexOfVisitor = void 0;
		var PS = Xe(),
			H_ = nr(),
			Y_ = Ss(),
			W = class extends PS.Visitor {};
		xi.IndexOfVisitor = W;
		function NS(r, e) {
			return e === null && r.length > 0 ? 0 : -1;
		}
		function LS(r, e) {
			let { nullBitmap: t } = r.data;
			if (!t || r.nullCount <= 0) return -1;
			let n = 0;
			for (let i of new H_.BitIterator(t, r.data.offset + (e || 0), r.length, t, H_.getBool)) {
				if (!i) return n;
				++n;
			}
			return -1;
		}
		function Q(r, e, t) {
			if (e === void 0) return -1;
			if (e === null) return LS(r, t);
			let n = Y_.createElementComparator(e);
			for (let i = (t || 0) - 1, s = r.length; ++i < s; ) if (n(r.get(i))) return i;
			return -1;
		}
		function G_(r, e, t) {
			let n = Y_.createElementComparator(e);
			for (let i = (t || 0) - 1, s = r.length; ++i < s; ) if (n(r.get(i))) return i;
			return -1;
		}
		W.prototype.visitNull = NS;
		W.prototype.visitBool = Q;
		W.prototype.visitInt = Q;
		W.prototype.visitInt8 = Q;
		W.prototype.visitInt16 = Q;
		W.prototype.visitInt32 = Q;
		W.prototype.visitInt64 = Q;
		W.prototype.visitUint8 = Q;
		W.prototype.visitUint16 = Q;
		W.prototype.visitUint32 = Q;
		W.prototype.visitUint64 = Q;
		W.prototype.visitFloat = Q;
		W.prototype.visitFloat16 = Q;
		W.prototype.visitFloat32 = Q;
		W.prototype.visitFloat64 = Q;
		W.prototype.visitUtf8 = Q;
		W.prototype.visitBinary = Q;
		W.prototype.visitFixedSizeBinary = Q;
		W.prototype.visitDate = Q;
		W.prototype.visitDateDay = Q;
		W.prototype.visitDateMillisecond = Q;
		W.prototype.visitTimestamp = Q;
		W.prototype.visitTimestampSecond = Q;
		W.prototype.visitTimestampMillisecond = Q;
		W.prototype.visitTimestampMicrosecond = Q;
		W.prototype.visitTimestampNanosecond = Q;
		W.prototype.visitTime = Q;
		W.prototype.visitTimeSecond = Q;
		W.prototype.visitTimeMillisecond = Q;
		W.prototype.visitTimeMicrosecond = Q;
		W.prototype.visitTimeNanosecond = Q;
		W.prototype.visitDecimal = Q;
		W.prototype.visitList = Q;
		W.prototype.visitStruct = Q;
		W.prototype.visitUnion = Q;
		W.prototype.visitDenseUnion = G_;
		W.prototype.visitSparseUnion = G_;
		W.prototype.visitDictionary = Q;
		W.prototype.visitInterval = Q;
		W.prototype.visitIntervalDayTime = Q;
		W.prototype.visitIntervalYearMonth = Q;
		W.prototype.visitFixedSizeList = Q;
		W.prototype.visitMap = Q;
		xi.instance = new W();
	});
	var yd = g((Ci) => {
		'use strict';
		Object.defineProperty(Ci, '__esModule', { value: !0 });
		Ci.instance = Ci.IteratorVisitor = void 0;
		var Qa = _e(),
			kS = Xe(),
			xS = nr(),
			J_ = pd(),
			z = class extends kS.Visitor {};
		Ci.IteratorVisitor = z;
		function CS(r) {
			let e = J_.instance.getVisitFn(r);
			return new xS.BitIterator(r.data.nullBitmap, r.data.offset, r.length, r, (t, n, i, s) =>
				(i & (1 << s)) != 0 ? e(t, n) : null
			);
		}
		var K_ = class {
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
			if (r.nullCount > 0) return CS(r);
			let { type: e, typeId: t, length: n } = r;
			return r.stride === 1 &&
				(t === Qa.Type.Timestamp ||
					(t === Qa.Type.Int && e.bitWidth !== 64) ||
					(t === Qa.Type.Time && e.bitWidth !== 64) ||
					(t === Qa.Type.Float && e.precision > 0))
				? r.data.values.subarray(0, n)[Symbol.iterator]()
				: new K_(r, J_.instance.getVisitFn(r));
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
		Ci.instance = new z();
	});
	var Z_ = g((ji) => {
		'use strict';
		Object.defineProperty(ji, '__esModule', { value: !0 });
		ji.instance = ji.ToArrayVisitor = void 0;
		var Ps = _e(),
			jS = Xe(),
			qS = yd(),
			H = class extends jS.Visitor {};
		ji.ToArrayVisitor = H;
		function X(r) {
			let { type: e, length: t, stride: n } = r;
			switch (e.typeId) {
				case Ps.Type.Int:
				case Ps.Type.Float:
				case Ps.Type.Decimal:
				case Ps.Type.Time:
				case Ps.Type.Timestamp:
					return r.data.values.subarray(0, t * n);
			}
			return [...qS.instance.visit(r)];
		}
		H.prototype.visitNull = X;
		H.prototype.visitBool = X;
		H.prototype.visitInt = X;
		H.prototype.visitInt8 = X;
		H.prototype.visitInt16 = X;
		H.prototype.visitInt32 = X;
		H.prototype.visitInt64 = X;
		H.prototype.visitUint8 = X;
		H.prototype.visitUint16 = X;
		H.prototype.visitUint32 = X;
		H.prototype.visitUint64 = X;
		H.prototype.visitFloat = X;
		H.prototype.visitFloat16 = X;
		H.prototype.visitFloat32 = X;
		H.prototype.visitFloat64 = X;
		H.prototype.visitUtf8 = X;
		H.prototype.visitBinary = X;
		H.prototype.visitFixedSizeBinary = X;
		H.prototype.visitDate = X;
		H.prototype.visitDateDay = X;
		H.prototype.visitDateMillisecond = X;
		H.prototype.visitTimestamp = X;
		H.prototype.visitTimestampSecond = X;
		H.prototype.visitTimestampMillisecond = X;
		H.prototype.visitTimestampMicrosecond = X;
		H.prototype.visitTimestampNanosecond = X;
		H.prototype.visitTime = X;
		H.prototype.visitTimeSecond = X;
		H.prototype.visitTimeMillisecond = X;
		H.prototype.visitTimeMicrosecond = X;
		H.prototype.visitTimeNanosecond = X;
		H.prototype.visitDecimal = X;
		H.prototype.visitList = X;
		H.prototype.visitStruct = X;
		H.prototype.visitUnion = X;
		H.prototype.visitDenseUnion = X;
		H.prototype.visitSparseUnion = X;
		H.prototype.visitDictionary = X;
		H.prototype.visitInterval = X;
		H.prototype.visitIntervalDayTime = X;
		H.prototype.visitIntervalYearMonth = X;
		H.prototype.visitFixedSizeList = X;
		H.prototype.visitMap = X;
		ji.instance = new H();
	});
	var X_ = g((qi) => {
		'use strict';
		Object.defineProperty(qi, '__esModule', { value: !0 });
		qi.instance = qi.ByteWidthVisitor = void 0;
		var WS = Xe(),
			zS = _e(),
			Ns = (r, e) => r + e,
			_d = (r) => `Cannot compute the byte width of variable-width column ${r}`,
			md = class extends WS.Visitor {
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
					throw new Error(_d(e));
				}
				visitUtf8(e) {
					throw new Error(_d(e));
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
					return e.unit === zS.TimeUnit.SECOND ? 4 : 8;
				}
				visitInterval(e) {
					return (e.unit + 1) * 4;
				}
				visitList(e) {
					throw new Error(_d(e));
				}
				visitStruct(e) {
					return this.visitFields(e.children).reduce(Ns, 0);
				}
				visitUnion(e) {
					return this.visitFields(e.children).reduce(Ns, 0);
				}
				visitFixedSizeBinary(e) {
					return e.byteWidth;
				}
				visitFixedSizeList(e) {
					return e.listSize * this.visitFields(e.children).reduce(Ns, 0);
				}
				visitMap(e) {
					return this.visitFields(e.children).reduce(Ns, 0);
				}
				visitDictionary(e) {
					return this.visit(e.indices);
				}
				visitFields(e) {
					return (e || []).map((t) => this.visit(t.type));
				}
				visitSchema(e) {
					return this.visitFields(e.fields).reduce(Ns, 0);
				}
			};
		qi.ByteWidthVisitor = md;
		qi.instance = new md();
	});
	var Q_ = g((Wi) => {
		'use strict';
		Object.defineProperty(Wi, '__esModule', { value: !0 });
		Wi.instance = Wi.GetVectorConstructor = void 0;
		var HS = Xe(),
			YS = Ll(),
			GS = kl(),
			bd = Cl(),
			$S = jl(),
			JS = ja(),
			KS = Wl(),
			ZS = zl(),
			eu = $l(),
			gd = Jl(),
			Ur = Ha(),
			XS = id(),
			QS = sd(),
			e1 = od(),
			t1 = ad(),
			Ls = ud(),
			ks = cd(),
			vd = ld(),
			r1 = dd(),
			Td = class extends HS.Visitor {
				visitNull() {
					return e1.NullVector;
				}
				visitBool() {
					return GS.BoolVector;
				}
				visitInt() {
					return Ur.IntVector;
				}
				visitInt8() {
					return Ur.Int8Vector;
				}
				visitInt16() {
					return Ur.Int16Vector;
				}
				visitInt32() {
					return Ur.Int32Vector;
				}
				visitInt64() {
					return Ur.Int64Vector;
				}
				visitUint8() {
					return Ur.Uint8Vector;
				}
				visitUint16() {
					return Ur.Uint16Vector;
				}
				visitUint32() {
					return Ur.Uint32Vector;
				}
				visitUint64() {
					return Ur.Uint64Vector;
				}
				visitFloat() {
					return eu.FloatVector;
				}
				visitFloat16() {
					return eu.Float16Vector;
				}
				visitFloat32() {
					return eu.Float32Vector;
				}
				visitFloat64() {
					return eu.Float64Vector;
				}
				visitUtf8() {
					return r1.Utf8Vector;
				}
				visitBinary() {
					return YS.BinaryVector;
				}
				visitFixedSizeBinary() {
					return KS.FixedSizeBinaryVector;
				}
				visitDate() {
					return bd.DateVector;
				}
				visitDateDay() {
					return bd.DateDayVector;
				}
				visitDateMillisecond() {
					return bd.DateMillisecondVector;
				}
				visitTimestamp() {
					return Ls.TimestampVector;
				}
				visitTimestampSecond() {
					return Ls.TimestampSecondVector;
				}
				visitTimestampMillisecond() {
					return Ls.TimestampMillisecondVector;
				}
				visitTimestampMicrosecond() {
					return Ls.TimestampMicrosecondVector;
				}
				visitTimestampNanosecond() {
					return Ls.TimestampNanosecondVector;
				}
				visitTime() {
					return ks.TimeVector;
				}
				visitTimeSecond() {
					return ks.TimeSecondVector;
				}
				visitTimeMillisecond() {
					return ks.TimeMillisecondVector;
				}
				visitTimeMicrosecond() {
					return ks.TimeMicrosecondVector;
				}
				visitTimeNanosecond() {
					return ks.TimeNanosecondVector;
				}
				visitDecimal() {
					return $S.DecimalVector;
				}
				visitList() {
					return XS.ListVector;
				}
				visitStruct() {
					return t1.StructVector;
				}
				visitUnion() {
					return vd.UnionVector;
				}
				visitDenseUnion() {
					return vd.DenseUnionVector;
				}
				visitSparseUnion() {
					return vd.SparseUnionVector;
				}
				visitDictionary() {
					return JS.DictionaryVector;
				}
				visitInterval() {
					return gd.IntervalVector;
				}
				visitIntervalDayTime() {
					return gd.IntervalDayTimeVector;
				}
				visitIntervalYearMonth() {
					return gd.IntervalYearMonthVector;
				}
				visitFixedSizeList() {
					return ZS.FixedSizeListVector;
				}
				visitMap() {
					return QS.MapVector;
				}
			};
		Wi.GetVectorConstructor = Td;
		Wi.instance = new Td();
	});
	var pr = g((T) => {
		'use strict';
		Object.defineProperty(T, '__esModule', { value: !0 });
		T.vectorFromValuesWithType =
			T.StructRow =
			T.MapRow =
			T.Utf8Vector =
			T.SparseUnionVector =
			T.DenseUnionVector =
			T.UnionVector =
			T.TimeNanosecondVector =
			T.TimeMicrosecondVector =
			T.TimeMillisecondVector =
			T.TimeSecondVector =
			T.TimeVector =
			T.TimestampNanosecondVector =
			T.TimestampMicrosecondVector =
			T.TimestampMillisecondVector =
			T.TimestampSecondVector =
			T.TimestampVector =
			T.StructVector =
			T.NullVector =
			T.MapVector =
			T.ListVector =
			T.Uint64Vector =
			T.Uint32Vector =
			T.Uint16Vector =
			T.Uint8Vector =
			T.Int64Vector =
			T.Int32Vector =
			T.Int16Vector =
			T.Int8Vector =
			T.IntVector =
			T.IntervalYearMonthVector =
			T.IntervalDayTimeVector =
			T.IntervalVector =
			T.Float64Vector =
			T.Float32Vector =
			T.Float16Vector =
			T.FloatVector =
			T.FixedSizeListVector =
			T.FixedSizeBinaryVector =
			T.DictionaryVector =
			T.DecimalVector =
			T.DateMillisecondVector =
			T.DateDayVector =
			T.DateVector =
			T.Chunked =
			T.BoolVector =
			T.BinaryVector =
			T.BaseVector =
			T.Vector =
				void 0;
		var Id = tt(),
			n1 = Ve();
		Object.defineProperty(T, 'Vector', {
			enumerable: !0,
			get: function () {
				return n1.Vector;
			}
		});
		var i1 = Ne();
		Object.defineProperty(T, 'BaseVector', {
			enumerable: !0,
			get: function () {
				return i1.BaseVector;
			}
		});
		var s1 = Ll();
		Object.defineProperty(T, 'BinaryVector', {
			enumerable: !0,
			get: function () {
				return s1.BinaryVector;
			}
		});
		var o1 = kl();
		Object.defineProperty(T, 'BoolVector', {
			enumerable: !0,
			get: function () {
				return o1.BoolVector;
			}
		});
		var a1 = ln();
		Object.defineProperty(T, 'Chunked', {
			enumerable: !0,
			get: function () {
				return a1.Chunked;
			}
		});
		var Bd = Cl();
		Object.defineProperty(T, 'DateVector', {
			enumerable: !0,
			get: function () {
				return Bd.DateVector;
			}
		});
		Object.defineProperty(T, 'DateDayVector', {
			enumerable: !0,
			get: function () {
				return Bd.DateDayVector;
			}
		});
		Object.defineProperty(T, 'DateMillisecondVector', {
			enumerable: !0,
			get: function () {
				return Bd.DateMillisecondVector;
			}
		});
		var u1 = jl();
		Object.defineProperty(T, 'DecimalVector', {
			enumerable: !0,
			get: function () {
				return u1.DecimalVector;
			}
		});
		var c1 = ja();
		Object.defineProperty(T, 'DictionaryVector', {
			enumerable: !0,
			get: function () {
				return c1.DictionaryVector;
			}
		});
		var l1 = Wl();
		Object.defineProperty(T, 'FixedSizeBinaryVector', {
			enumerable: !0,
			get: function () {
				return l1.FixedSizeBinaryVector;
			}
		});
		var d1 = zl();
		Object.defineProperty(T, 'FixedSizeListVector', {
			enumerable: !0,
			get: function () {
				return d1.FixedSizeListVector;
			}
		});
		var tu = $l();
		Object.defineProperty(T, 'FloatVector', {
			enumerable: !0,
			get: function () {
				return tu.FloatVector;
			}
		});
		Object.defineProperty(T, 'Float16Vector', {
			enumerable: !0,
			get: function () {
				return tu.Float16Vector;
			}
		});
		Object.defineProperty(T, 'Float32Vector', {
			enumerable: !0,
			get: function () {
				return tu.Float32Vector;
			}
		});
		Object.defineProperty(T, 'Float64Vector', {
			enumerable: !0,
			get: function () {
				return tu.Float64Vector;
			}
		});
		var wd = Jl();
		Object.defineProperty(T, 'IntervalVector', {
			enumerable: !0,
			get: function () {
				return wd.IntervalVector;
			}
		});
		Object.defineProperty(T, 'IntervalDayTimeVector', {
			enumerable: !0,
			get: function () {
				return wd.IntervalDayTimeVector;
			}
		});
		Object.defineProperty(T, 'IntervalYearMonthVector', {
			enumerable: !0,
			get: function () {
				return wd.IntervalYearMonthVector;
			}
		});
		var Vr = Ha();
		Object.defineProperty(T, 'IntVector', {
			enumerable: !0,
			get: function () {
				return Vr.IntVector;
			}
		});
		Object.defineProperty(T, 'Int8Vector', {
			enumerable: !0,
			get: function () {
				return Vr.Int8Vector;
			}
		});
		Object.defineProperty(T, 'Int16Vector', {
			enumerable: !0,
			get: function () {
				return Vr.Int16Vector;
			}
		});
		Object.defineProperty(T, 'Int32Vector', {
			enumerable: !0,
			get: function () {
				return Vr.Int32Vector;
			}
		});
		Object.defineProperty(T, 'Int64Vector', {
			enumerable: !0,
			get: function () {
				return Vr.Int64Vector;
			}
		});
		Object.defineProperty(T, 'Uint8Vector', {
			enumerable: !0,
			get: function () {
				return Vr.Uint8Vector;
			}
		});
		Object.defineProperty(T, 'Uint16Vector', {
			enumerable: !0,
			get: function () {
				return Vr.Uint16Vector;
			}
		});
		Object.defineProperty(T, 'Uint32Vector', {
			enumerable: !0,
			get: function () {
				return Vr.Uint32Vector;
			}
		});
		Object.defineProperty(T, 'Uint64Vector', {
			enumerable: !0,
			get: function () {
				return Vr.Uint64Vector;
			}
		});
		var f1 = id();
		Object.defineProperty(T, 'ListVector', {
			enumerable: !0,
			get: function () {
				return f1.ListVector;
			}
		});
		var h1 = sd();
		Object.defineProperty(T, 'MapVector', {
			enumerable: !0,
			get: function () {
				return h1.MapVector;
			}
		});
		var p1 = od();
		Object.defineProperty(T, 'NullVector', {
			enumerable: !0,
			get: function () {
				return p1.NullVector;
			}
		});
		var y1 = ad();
		Object.defineProperty(T, 'StructVector', {
			enumerable: !0,
			get: function () {
				return y1.StructVector;
			}
		});
		var xs = ud();
		Object.defineProperty(T, 'TimestampVector', {
			enumerable: !0,
			get: function () {
				return xs.TimestampVector;
			}
		});
		Object.defineProperty(T, 'TimestampSecondVector', {
			enumerable: !0,
			get: function () {
				return xs.TimestampSecondVector;
			}
		});
		Object.defineProperty(T, 'TimestampMillisecondVector', {
			enumerable: !0,
			get: function () {
				return xs.TimestampMillisecondVector;
			}
		});
		Object.defineProperty(T, 'TimestampMicrosecondVector', {
			enumerable: !0,
			get: function () {
				return xs.TimestampMicrosecondVector;
			}
		});
		Object.defineProperty(T, 'TimestampNanosecondVector', {
			enumerable: !0,
			get: function () {
				return xs.TimestampNanosecondVector;
			}
		});
		var Cs = cd();
		Object.defineProperty(T, 'TimeVector', {
			enumerable: !0,
			get: function () {
				return Cs.TimeVector;
			}
		});
		Object.defineProperty(T, 'TimeSecondVector', {
			enumerable: !0,
			get: function () {
				return Cs.TimeSecondVector;
			}
		});
		Object.defineProperty(T, 'TimeMillisecondVector', {
			enumerable: !0,
			get: function () {
				return Cs.TimeMillisecondVector;
			}
		});
		Object.defineProperty(T, 'TimeMicrosecondVector', {
			enumerable: !0,
			get: function () {
				return Cs.TimeMicrosecondVector;
			}
		});
		Object.defineProperty(T, 'TimeNanosecondVector', {
			enumerable: !0,
			get: function () {
				return Cs.TimeNanosecondVector;
			}
		});
		var Sd = ld();
		Object.defineProperty(T, 'UnionVector', {
			enumerable: !0,
			get: function () {
				return Sd.UnionVector;
			}
		});
		Object.defineProperty(T, 'DenseUnionVector', {
			enumerable: !0,
			get: function () {
				return Sd.DenseUnionVector;
			}
		});
		Object.defineProperty(T, 'SparseUnionVector', {
			enumerable: !0,
			get: function () {
				return Sd.SparseUnionVector;
			}
		});
		var _1 = dd();
		Object.defineProperty(T, 'Utf8Vector', {
			enumerable: !0,
			get: function () {
				return _1.Utf8Vector;
			}
		});
		var em = Bs();
		Object.defineProperty(T, 'MapRow', {
			enumerable: !0,
			get: function () {
				return em.MapRow;
			}
		});
		Object.defineProperty(T, 'StructRow', {
			enumerable: !0,
			get: function () {
				return em.StructRow;
			}
		});
		var js = D_(),
			Ad = _e(),
			zi = Ve(),
			tm = ln(),
			$n = Ne(),
			m1 = nr(),
			ru = rt(),
			rm = De(),
			nm = pd(),
			im = xc(),
			sm = $_(),
			om = Z_(),
			am = yd(),
			um = X_(),
			cm = Q_();
		zi.Vector.new = b1;
		zi.Vector.from = v1;
		function b1(r, ...e) {
			return new (cm.instance.getVisitFn(r)())(r, ...e);
		}
		function g1(r, e) {
			if (ru.isIterable(e))
				return zi.Vector.from({ nullValues: [null, void 0], type: r(), values: e });
			if (ru.isAsyncIterable(e))
				return zi.Vector.from({ nullValues: [null, void 0], type: r(), values: e });
			let { values: t = [], type: n = r(), nullValues: i = [null, void 0] } = Object.assign({}, e);
			return ru.isIterable(t)
				? zi.Vector.from(Object.assign(Object.assign({ nullValues: i }, e), { type: n }))
				: zi.Vector.from(Object.assign(Object.assign({ nullValues: i }, e), { type: n }));
		}
		T.vectorFromValuesWithType = g1;
		function v1(r) {
			let e = Object.assign({ nullValues: [null, void 0] }, r),
				{ values: t = [] } = e,
				n = Id.__rest(e, ['values']);
			if (ru.isIterable(t)) {
				let i = [...rm.Builder.throughIterable(n)(t)];
				return i.length === 1 ? i[0] : tm.Chunked.concat(i);
			}
			return ((i) =>
				Id.__awaiter(this, void 0, void 0, function* () {
					var s, o;
					let a = rm.Builder.throughAsyncIterable(n);
					try {
						for (var l = Id.__asyncValues(a(t)), f; (f = yield l.next()), !f.done; ) {
							let y = f.value;
							i.push(y);
						}
					} catch (y) {
						s = { error: y };
					} finally {
						try {
							f && !f.done && (o = l.return) && (yield o.call(l));
						} finally {
							if (s) throw s.error;
						}
					}
					return i.length === 1 ? i[0] : tm.Chunked.concat(i);
				}))([]);
		}
		$n.BaseVector.prototype.get = function (e) {
			return nm.instance.visit(this, e);
		};
		$n.BaseVector.prototype.set = function (e, t) {
			return im.instance.visit(this, e, t);
		};
		$n.BaseVector.prototype.indexOf = function (e, t) {
			return sm.instance.visit(this, e, t);
		};
		$n.BaseVector.prototype.toArray = function () {
			return om.instance.visit(this);
		};
		$n.BaseVector.prototype.getByteWidth = function () {
			return um.instance.visit(this.type);
		};
		$n.BaseVector.prototype[Symbol.iterator] = function () {
			return am.instance.visit(this);
		};
		$n.BaseVector.prototype._bindDataAccessors = w1;
		Object.keys(Ad.Type)
			.map((r) => Ad.Type[r])
			.filter((r) => typeof r == 'number')
			.filter((r) => r !== Ad.Type.NONE)
			.forEach((r) => {
				let e = cm.instance.visit(r);
				(e.prototype.get = js.partial1(nm.instance.getVisitFn(r))),
					(e.prototype.set = js.partial2(im.instance.getVisitFn(r))),
					(e.prototype.indexOf = js.partial2(sm.instance.getVisitFn(r))),
					(e.prototype.toArray = js.partial0(om.instance.getVisitFn(r))),
					(e.prototype.getByteWidth = T1(um.instance.getVisitFn(r))),
					(e.prototype[Symbol.iterator] = js.partial0(am.instance.getVisitFn(r)));
			});
		function T1(r) {
			return function () {
				return r(this.type);
			};
		}
		function I1(r) {
			return function (e) {
				return this.isValid(e) ? r.call(this, e) : null;
			};
		}
		function B1(r) {
			return function (e, t) {
				m1.setBool(this.nullBitmap, this.offset + e, t != null) && r.call(this, e, t);
			};
		}
		function w1() {
			let r = this.nullBitmap;
			r && r.byteLength > 0 && ((this.get = I1(this.get)), (this.set = B1(this.set)));
		}
	});
	var Us = g((iu) => {
		'use strict';
		Object.defineProperty(iu, '__esModule', { value: !0 });
		iu.Table = void 0;
		var nu = tt(),
			S1 = Mi(),
			A1 = qs(),
			lm = Va(),
			Dd = Rr(),
			dm = $e(),
			Fd = oe(),
			fm = Cn(),
			Od = rt(),
			hm = Vl(),
			Md = pr(),
			Ye = class extends Md.Chunked {
				constructor(...e) {
					var t;
					let n = null;
					e[0] instanceof dm.Schema && (n = e[0]);
					let i = e[0] instanceof Ye ? e[0].chunks : fm.selectArgs(Dd.RecordBatch, e);
					if (!n && !(n = (t = i[0]) === null || t === void 0 ? void 0 : t.schema))
						throw new TypeError(
							'Table must be initialized with a Schema or at least one RecordBatch'
						);
					i[0] || (i[0] = new Dd._InternalEmptyPlaceholderRecordBatch(n));
					super(new Fd.Struct(n.fields), i);
					(this._schema = n), (this._chunks = i);
				}
				static empty(e = new dm.Schema([])) {
					return new Ye(e, []);
				}
				static from(e) {
					if (!e) return Ye.empty();
					if (typeof e == 'object') {
						let n = Od.isIterable(e.values) ? D1(e) : Od.isAsyncIterable(e.values) ? F1(e) : null;
						if (n !== null) return n;
					}
					let t = A1.RecordBatchReader.from(e);
					return Od.isPromise(t)
						? (() =>
								nu.__awaiter(this, void 0, void 0, function* () {
									return yield Ye.from(yield t);
								}))()
						: t.isSync() && (t = t.open())
						? t.schema
							? new Ye(t.schema, [...t])
							: Ye.empty()
						: ((n) =>
								nu.__awaiter(this, void 0, void 0, function* () {
									var i, s;
									let o = yield n,
										a = o.schema,
										l = [];
									if (a) {
										try {
											for (var f = nu.__asyncValues(o), y; (y = yield f.next()), !y.done; ) {
												let F = y.value;
												l.push(F);
											}
										} catch (F) {
											i = { error: F };
										} finally {
											try {
												y && !y.done && (s = f.return) && (yield s.call(f));
											} finally {
												if (i) throw i.error;
											}
										}
										return new Ye(a, l);
									}
									return Ye.empty();
								}))(t.open());
				}
				static fromAsync(e) {
					return nu.__awaiter(this, void 0, void 0, function* () {
						return yield Ye.from(e);
					});
				}
				static fromStruct(e) {
					return Ye.new(e.data.childData, e.type.children);
				}
				static new(...e) {
					return new Ye(...hm.distributeColumnsIntoRecordBatches(fm.selectColumnArgs(e)));
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
					return new Ye(this._schema, e);
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
						let o = this._chunks.map((a) => a.getChildAt(e)).filter((a) => a != null);
						if (o.length > 0) return (s[e] = new S1.Column(t, o));
					}
					return null;
				}
				serialize(e = 'binary', t = !0) {
					return (t ? lm.RecordBatchStreamWriter : lm.RecordBatchFileWriter)
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
					return new Ye(
						t,
						this._chunks.map(
							({ length: n, data: { childData: i } }) =>
								new Dd.RecordBatch(t, n, e.map((s) => i[s]).filter(Boolean))
						)
					);
				}
				assign(e) {
					let t = this._schema.fields,
						[n, i] = e.schema.fields.reduce(
							(a, l, f) => {
								let [y, F] = a,
									E = t.findIndex((C) => C.name === l.name);
								return ~E ? (F[E] = f) : y.push(f), a;
							},
							[[], []]
						),
						s = this._schema.assign(e.schema),
						o = [
							...t.map((a, l, f, y = i[l]) =>
								y === void 0 ? this.getColumnAt(l) : e.getColumnAt(y)
							),
							...n.map((a) => e.getColumnAt(a))
						].filter(Boolean);
					return new Ye(...hm.distributeVectorsIntoRecordBatches(s, o));
				}
			};
		iu.Table = Ye;
		function D1(r) {
			let { type: e } = r;
			return e instanceof Fd.Struct ? Ye.fromStruct(Md.StructVector.from(r)) : null;
		}
		function F1(r) {
			let { type: e } = r;
			return e instanceof Fd.Struct ? Md.StructVector.from(r).then((t) => Ye.fromStruct(t)) : null;
		}
	});
	var Rr = g((Hi) => {
		'use strict';
		Object.defineProperty(Hi, '__esModule', { value: !0 });
		Hi._InternalEmptyPlaceholderRecordBatch = Hi.RecordBatch = void 0;
		var Ed = zt(),
			Rd = Us(),
			O1 = Ve(),
			M1 = Xe(),
			E1 = $e(),
			R1 = rt(),
			U1 = ln(),
			V1 = Cn(),
			Ud = oe(),
			P1 = Vl(),
			N1 = pr(),
			vn = class extends N1.StructVector {
				constructor(...e) {
					let t,
						n = e[0],
						i;
					if (e[1] instanceof Ed.Data) [, t, i] = e;
					else {
						let s = n.fields,
							[, o, a] = e;
						t = Ed.Data.Struct(new Ud.Struct(s), 0, o, 0, null, a);
					}
					super(t, i);
					this._schema = n;
				}
				static from(e) {
					return R1.isIterable(e.values), Rd.Table.from(e);
				}
				static new(...e) {
					let [t, n] = V1.selectFieldArgs(e),
						i = n.filter((s) => s instanceof O1.Vector);
					return new vn(
						...P1.ensureSameLengthData(
							new E1.Schema(t),
							i.map((s) => s.data)
						)
					);
				}
				clone(e, t = this._children) {
					return new vn(this._schema, e, t);
				}
				concat(...e) {
					let t = this._schema,
						n = U1.Chunked.flatten(this, ...e);
					return new Rd.Table(
						t,
						n.map(({ data: i }) => new vn(t, i))
					);
				}
				get schema() {
					return this._schema;
				}
				get numCols() {
					return this._schema.fields.length;
				}
				get dictionaries() {
					return this._dictionaries || (this._dictionaries = su.collect(this));
				}
				select(...e) {
					let t = this._schema.fields.reduce((n, i, s) => n.set(i.name, s), new Map());
					return this.selectAt(...e.map((n) => t.get(n)).filter((n) => n > -1));
				}
				selectAt(...e) {
					let t = this._schema.selectAt(...e),
						n = e.map((i) => this.data.childData[i]).filter(Boolean);
					return new vn(t, this.length, n);
				}
			};
		Hi.RecordBatch = vn;
		var pm = class extends vn {
			constructor(e) {
				super(
					e,
					0,
					e.fields.map((t) => Ed.Data.new(t.type, 0, 0, 0))
				);
			}
		};
		Hi._InternalEmptyPlaceholderRecordBatch = pm;
		var su = class extends M1.Visitor {
			constructor() {
				super(...arguments);
				this.dictionaries = new Map();
			}
			static collect(e) {
				return new su().visit(e.data, new Ud.Struct(e.schema.fields)).dictionaries;
			}
			visit(e, t) {
				return Ud.DataType.isDictionary(t)
					? this.visitDictionary(e, t)
					: (e.childData.forEach((n, i) => this.visit(n, t.children[i].type)), this);
			}
			visitDictionary(e, t) {
				let n = e.dictionary;
				return n && n.length > 0 && this.dictionaries.set(t.id, n), this;
			}
		};
	});
	var qs = g((Lt) => {
		'use strict';
		Object.defineProperty(Lt, '__esModule', { value: !0 });
		Lt.AsyncRecordBatchFileReader =
			Lt.RecordBatchFileReader =
			Lt.AsyncRecordBatchStreamReader =
			Lt.RecordBatchStreamReader =
			Lt.RecordBatchReader =
				void 0;
		var ve = tt(),
			ym = Ve(),
			ou = _e(),
			_m = Kc(),
			mm = ds(),
			bm = on(),
			Ws = Qc(),
			gm = Zp(),
			Vd = Rr(),
			Jn = ni(),
			Pt = Ba(),
			Nt = rt(),
			br = class extends Jn.ReadableInterop {
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
					return Nt.isPromise(t) ? t.then(() => this) : this;
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
					return mm.default.toDOMStream(
						this.isSync()
							? { [Symbol.iterator]: () => this }
							: { [Symbol.asyncIterator]: () => this }
					);
				}
				toNodeStream() {
					return mm.default.toNodeStream(
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
					return e instanceof br
						? e
						: Nt.isArrowJSON(e)
						? L1(e)
						: Nt.isFileHandle(e)
						? C1(e)
						: Nt.isPromise(e)
						? (() =>
								ve.__awaiter(this, void 0, void 0, function* () {
									return yield br.from(yield e);
								}))()
						: Nt.isFetchResponse(e) ||
						  Nt.isReadableDOMStream(e) ||
						  Nt.isReadableNodeStream(e) ||
						  Nt.isAsyncIterable(e)
						? x1(new bm.AsyncByteStream(e))
						: k1(new bm.ByteStream(e));
				}
				static readAll(e) {
					return e instanceof br
						? e.isSync()
							? Bm(e)
							: wm(e)
						: Nt.isArrowJSON(e) ||
						  ArrayBuffer.isView(e) ||
						  Nt.isIterable(e) ||
						  Nt.isIteratorResult(e)
						? Bm(e)
						: wm(e);
				}
			};
		Lt.RecordBatchReader = br;
		var Yi = class extends br {
			constructor(e) {
				super(e);
				this._impl = e;
			}
			[Symbol.iterator]() {
				return this._impl[Symbol.iterator]();
			}
			[Symbol.asyncIterator]() {
				return ve.__asyncGenerator(this, arguments, function* () {
					yield ve.__await(yield* ve.__asyncDelegator(ve.__asyncValues(this[Symbol.iterator]())));
				});
			}
		};
		Lt.RecordBatchStreamReader = Yi;
		var Gi = class extends br {
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
		Lt.AsyncRecordBatchStreamReader = Gi;
		var au = class extends Yi {
			constructor(e) {
				super(e);
				this._impl = e;
			}
		};
		Lt.RecordBatchFileReader = au;
		var Pd = class extends Gi {
			constructor(e) {
				super(e);
				this._impl = e;
			}
		};
		Lt.AsyncRecordBatchFileReader = Pd;
		var Nd = class {
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
					return new Vd.RecordBatch(
						this.schema,
						e.length,
						this._loadVectors(e, t, this.schema.fields)
					);
				}
				_loadDictionaryBatch(e, t) {
					let { id: n, isDelta: i, data: s } = e,
						{ dictionaries: o, schema: a } = this,
						l = o.get(n);
					if (i || !l) {
						let f = a.dictionaries.get(n);
						return l && i
							? l.concat(ym.Vector.new(this._loadVectors(s, t, [f])[0]))
							: ym.Vector.new(this._loadVectors(s, t, [f])[0]);
					}
					return l;
				}
				_loadVectors(e, t, n) {
					return new gm.VectorLoader(t, e.nodes, e.buffers, this.dictionaries).visitMany(n);
				}
			},
			zs = class extends Nd {
				constructor(e, t) {
					super(t);
					this._reader = Nt.isArrowJSON(e)
						? new Pt.JSONMessageReader((this._handle = e))
						: new Pt.MessageReader((this._handle = e));
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
							((this.autoDestroy = Im(this, e)),
							this.schema || (this.schema = this._reader.readSchema()) || this.cancel()),
						this
					);
				}
				throw(e) {
					return !this.closed && this.autoDestroy && (this.closed = !0)
						? this.reset()._reader.throw(e)
						: Jn.ITERATOR_DONE;
				}
				return(e) {
					return !this.closed && this.autoDestroy && (this.closed = !0)
						? this.reset()._reader.return(e)
						: Jn.ITERATOR_DONE;
				}
				next() {
					if (this.closed) return Jn.ITERATOR_DONE;
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
						  { done: !1, value: new Vd._InternalEmptyPlaceholderRecordBatch(this.schema) })
						: this.return();
				}
				_readNextMessageAndValidate(e) {
					return this._reader.readMessage(e);
				}
			},
			Hs = class extends Nd {
				constructor(e, t) {
					super(t);
					this._reader = new Pt.AsyncMessageReader((this._handle = e));
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
					return ve.__awaiter(this, void 0, void 0, function* () {
						!this.closed &&
							(this.closed = !0) &&
							(yield this.reset()._reader.return(),
							(this._reader = null),
							(this.dictionaries = null));
					});
				}
				open(e) {
					return ve.__awaiter(this, void 0, void 0, function* () {
						return (
							this.closed ||
								((this.autoDestroy = Im(this, e)),
								this.schema ||
									(this.schema = yield this._reader.readSchema()) ||
									(yield this.cancel())),
							this
						);
					});
				}
				throw(e) {
					return ve.__awaiter(this, void 0, void 0, function* () {
						return !this.closed && this.autoDestroy && (this.closed = !0)
							? yield this.reset()._reader.throw(e)
							: Jn.ITERATOR_DONE;
					});
				}
				return(e) {
					return ve.__awaiter(this, void 0, void 0, function* () {
						return !this.closed && this.autoDestroy && (this.closed = !0)
							? yield this.reset()._reader.return(e)
							: Jn.ITERATOR_DONE;
					});
				}
				next() {
					return ve.__awaiter(this, void 0, void 0, function* () {
						if (this.closed) return Jn.ITERATOR_DONE;
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
							  { done: !1, value: new Vd._InternalEmptyPlaceholderRecordBatch(this.schema) })
							: yield this.return();
					});
				}
				_readNextMessageAndValidate(e) {
					return ve.__awaiter(this, void 0, void 0, function* () {
						return yield this._reader.readMessage(e);
					});
				}
			},
			Ld = class extends zs {
				constructor(e, t) {
					super(e instanceof Ws.RandomAccessFile ? e : new Ws.RandomAccessFile(e), t);
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
						let n = this._reader.readMessage(ou.MessageHeader.RecordBatch);
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
						let n = this._reader.readMessage(ou.MessageHeader.DictionaryBatch);
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
						t = e.size - Pt.magicAndPadding,
						n = e.readInt32(t),
						i = e.readAt(t - n, n);
					return _m.Footer.decode(i);
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
			vm = class extends Hs {
				constructor(e, ...t) {
					let n = typeof t[0] != 'number' ? t.shift() : void 0,
						i = t[0] instanceof Map ? t.shift() : void 0;
					super(e instanceof Ws.AsyncRandomAccessFile ? e : new Ws.AsyncRandomAccessFile(e, n), i);
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
					return ve.__awaiter(this, void 0, void 0, function* () {
						if (!this.closed && !this._footer) {
							this.schema = (this._footer = yield this._readFooter()).schema;
							for (let n of this._footer.dictionaryBatches())
								n && (yield this._readDictionaryBatch(this._dictionaryIndex++));
						}
						return yield t.open.call(this, e);
					});
				}
				readRecordBatch(e) {
					return ve.__awaiter(this, void 0, void 0, function* () {
						if (this.closed) return null;
						this._footer || (yield this.open());
						let t = this._footer && this._footer.getRecordBatch(e);
						if (t && (yield this._handle.seek(t.offset))) {
							let n = yield this._reader.readMessage(ou.MessageHeader.RecordBatch);
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
					return ve.__awaiter(this, void 0, void 0, function* () {
						let t = this._footer && this._footer.getDictionaryBatch(e);
						if (t && (yield this._handle.seek(t.offset))) {
							let n = yield this._reader.readMessage(ou.MessageHeader.DictionaryBatch);
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
					return ve.__awaiter(this, void 0, void 0, function* () {
						let { _handle: e } = this;
						e._pending && (yield e._pending);
						let t = e.size - Pt.magicAndPadding,
							n = yield e.readInt32(t),
							i = yield e.readAt(t - n, n);
						return _m.Footer.decode(i);
					});
				}
				_readNextMessageAndValidate(e) {
					return ve.__awaiter(this, void 0, void 0, function* () {
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
			Tm = class extends zs {
				constructor(e, t) {
					super(e, t);
				}
				_loadVectors(e, t, n) {
					return new gm.JSONVectorLoader(t, e.nodes, e.buffers, this.dictionaries).visitMany(n);
				}
			};
		function Im(r, e) {
			return e && typeof e.autoDestroy == 'boolean' ? e.autoDestroy : r.autoDestroy;
		}
		function* Bm(r) {
			let e = br.from(r);
			try {
				if (!e.open({ autoDestroy: !1 }).closed)
					do yield e;
					while (!e.reset().open().closed);
			} finally {
				e.cancel();
			}
		}
		function wm(r) {
			return ve.__asyncGenerator(this, arguments, function* () {
				let t = yield ve.__await(br.from(r));
				try {
					if (!(yield ve.__await(t.open({ autoDestroy: !1 }))).closed)
						do yield yield ve.__await(t);
						while (!(yield ve.__await(t.reset().open())).closed);
				} finally {
					yield ve.__await(t.cancel());
				}
			});
		}
		function L1(r) {
			return new Yi(new Tm(r));
		}
		function k1(r) {
			let e = r.peek((Pt.magicLength + 7) & ~7);
			return e && e.byteLength >= 4
				? Pt.checkForMagicArrowString(e)
					? new au(new Ld(r.read()))
					: new Yi(new zs(r))
				: new Yi(new zs((function* () {})()));
		}
		function x1(r) {
			return ve.__awaiter(this, void 0, void 0, function* () {
				let e = yield r.peek((Pt.magicLength + 7) & ~7);
				return e && e.byteLength >= 4
					? Pt.checkForMagicArrowString(e)
						? new au(new Ld(yield r.read()))
						: new Gi(new Hs(r))
					: new Gi(
							new Hs(
								(function () {
									return ve.__asyncGenerator(this, arguments, function* () {});
								})()
							)
					  );
			});
		}
		function C1(r) {
			return ve.__awaiter(this, void 0, void 0, function* () {
				let { size: e } = yield r.stat(),
					t = new Ws.AsyncRandomAccessFile(r, e);
				return e >= Pt.magicX2AndPadding &&
					Pt.checkForMagicArrowString(yield t.readAt(0, (Pt.magicLength + 7) & ~7))
					? new Pd(new vm(t))
					: new Gi(new Hs(t));
			});
		}
	});
	var Dm = g((cu) => {
		'use strict';
		Object.defineProperty(cu, '__esModule', { value: !0 });
		cu.toDOMStream = void 0;
		var uu = tt(),
			Sm = We(),
			Am = rt();
		function j1(r, e) {
			if (Am.isAsyncIterable(r)) return W1(r, e);
			if (Am.isIterable(r)) return q1(r, e);
			throw new Error('toDOMStream() must be called with an Iterable or AsyncIterable');
		}
		cu.toDOMStream = j1;
		function q1(r, e) {
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
			function s(o, a) {
				let l,
					f = null,
					y = o.desiredSize || null;
				for (; !(f = a.next(n ? y : null)).done; )
					if (
						(ArrayBuffer.isView(f.value) &&
							(l = Sm.toUint8Array(f.value)) &&
							(y != null && n && (y = y - l.byteLength + 1), (f.value = l)),
						o.enqueue(f.value),
						y != null && --y <= 0)
					)
						return;
				o.close();
			}
		}
		function W1(r, e) {
			let t = null,
				n = (e == null ? void 0 : e.type) === 'bytes' || !1,
				i = (e == null ? void 0 : e.highWaterMark) || Math.pow(2, 24);
			return new ReadableStream(
				Object.assign(Object.assign({}, e), {
					start(o) {
						return uu.__awaiter(this, void 0, void 0, function* () {
							yield s(o, t || (t = r[Symbol.asyncIterator]()));
						});
					},
					pull(o) {
						return uu.__awaiter(this, void 0, void 0, function* () {
							t ? yield s(o, t) : o.close();
						});
					},
					cancel() {
						return uu.__awaiter(this, void 0, void 0, function* () {
							(((t == null ? void 0 : t.return) && (yield t.return())) || !0) && (t = null);
						});
					}
				}),
				Object.assign({ highWaterMark: n ? i : void 0 }, e)
			);
			function s(o, a) {
				return uu.__awaiter(this, void 0, void 0, function* () {
					let l,
						f = null,
						y = o.desiredSize || null;
					for (; !(f = yield a.next(n ? y : null)).done; )
						if (
							(ArrayBuffer.isView(f.value) &&
								(l = Sm.toUint8Array(f.value)) &&
								(y != null && n && (y = y - l.byteLength + 1), (f.value = l)),
							o.enqueue(f.value),
							y != null && --y <= 0)
						)
							return;
					o.close();
				});
			}
		}
	});
	var Mm = g(($i) => {
		'use strict';
		Object.defineProperty($i, '__esModule', { value: !0 });
		$i.BuilderTransform = $i.builderThroughDOMStream = void 0;
		var z1 = tt(),
			H1 = ca();
		function Y1(r) {
			return new kd(r);
		}
		$i.builderThroughDOMStream = Y1;
		var kd = class {
			constructor(e) {
				(this._numChunks = 0), (this._finished = !1), (this._bufferedSize = 0);
				let {
						['readableStrategy']: t,
						['writableStrategy']: n,
						['queueingStrategy']: i = 'count'
					} = e,
					s = z1.__rest(e, ['readableStrategy', 'writableStrategy', 'queueingStrategy']);
				(this._controller = null),
					(this._builder = H1.Builder.new(s)),
					(this._getSize = i !== 'bytes' ? Fm : Om);
				let { ['highWaterMark']: o = i === 'bytes' ? Math.pow(2, 14) : 1e3 } = Object.assign({}, t),
					{ ['highWaterMark']: a = i === 'bytes' ? Math.pow(2, 14) : 1e3 } = Object.assign({}, n);
				(this.readable = new ReadableStream(
					{
						cancel: () => {
							this._builder.clear();
						},
						pull: (l) => {
							this._maybeFlush(this._builder, (this._controller = l));
						},
						start: (l) => {
							this._maybeFlush(this._builder, (this._controller = l));
						}
					},
					{ highWaterMark: o, size: i !== 'bytes' ? Fm : Om }
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
						{ highWaterMark: a, size: (l) => this._writeValueAndReturnChunkSize(l) }
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
		$i.BuilderTransform = kd;
		var Fm = (r) => r.length,
			Om = (r) => r.byteLength;
	});
	var Em = g((lu) => {
		'use strict';
		Object.defineProperty(lu, '__esModule', { value: !0 });
		lu.recordBatchReaderThroughDOMStream = void 0;
		var Ys = tt(),
			G1 = on(),
			$1 = qs();
		function J1(r, e) {
			let t = new G1.AsyncByteQueue(),
				n = null,
				i = new ReadableStream({
					cancel() {
						return Ys.__awaiter(this, void 0, void 0, function* () {
							yield t.close();
						});
					},
					start(a) {
						return Ys.__awaiter(this, void 0, void 0, function* () {
							yield o(a, n || (n = yield s()));
						});
					},
					pull(a) {
						return Ys.__awaiter(this, void 0, void 0, function* () {
							n ? yield o(a, n) : a.close();
						});
					}
				});
			return {
				writable: new WritableStream(t, Object.assign({ highWaterMark: Math.pow(2, 14) }, r)),
				readable: i
			};
			function s() {
				return Ys.__awaiter(this, void 0, void 0, function* () {
					return yield (yield $1.RecordBatchReader.from(t)).open(e);
				});
			}
			function o(a, l) {
				return Ys.__awaiter(this, void 0, void 0, function* () {
					let f = a.desiredSize,
						y = null;
					for (; !(y = yield l.next()).done; )
						if ((a.enqueue(y.value), f != null && --f <= 0)) return;
					a.close();
				});
			}
		}
		lu.recordBatchReaderThroughDOMStream = J1;
	});
	var Rm = g((fu) => {
		'use strict';
		Object.defineProperty(fu, '__esModule', { value: !0 });
		fu.recordBatchWriterThroughDOMStream = void 0;
		var du = tt(),
			K1 = on();
		function Z1(r, e) {
			let t = new this(r),
				n = new K1.AsyncByteStream(t),
				i = new ReadableStream(
					{
						type: 'bytes',
						cancel() {
							return du.__awaiter(this, void 0, void 0, function* () {
								yield n.cancel();
							});
						},
						pull(o) {
							return du.__awaiter(this, void 0, void 0, function* () {
								yield s(o);
							});
						},
						start(o) {
							return du.__awaiter(this, void 0, void 0, function* () {
								yield s(o);
							});
						}
					},
					Object.assign({ highWaterMark: Math.pow(2, 14) }, e)
				);
			return { writable: new WritableStream(t, r), readable: i };
			function s(o) {
				return du.__awaiter(this, void 0, void 0, function* () {
					let a = null,
						l = o.desiredSize;
					for (; (a = yield n.read(l || null)); )
						if ((o.enqueue(a), l != null && (l -= a.byteLength) <= 0)) return;
					o.close();
				});
			}
		}
		fu.recordBatchWriterThroughDOMStream = Z1;
	});
	var zd = g((ee) => {
		'use strict';
		Object.defineProperty(ee, '__esModule', { value: !0 });
		ee.custom =
			ee.or =
			ee.and =
			ee.col =
			ee.lit =
			ee.CustomPredicate =
			ee.Not =
			ee.GTeq =
			ee.LTeq =
			ee.Equals =
			ee.Or =
			ee.And =
			ee.CombinationPredicate =
			ee.ComparisonPredicate =
			ee.Predicate =
			ee.Col =
			ee.Literal =
			ee.Value =
				void 0;
		var X1 = ja(),
			Tn = class {
				eq(e) {
					return e instanceof Tn || (e = new Pr(e)), new Cd(this, e);
				}
				le(e) {
					return e instanceof Tn || (e = new Pr(e)), new jd(this, e);
				}
				ge(e) {
					return e instanceof Tn || (e = new Pr(e)), new qd(this, e);
				}
				lt(e) {
					return new Xi(this.ge(e));
				}
				gt(e) {
					return new Xi(this.le(e));
				}
				ne(e) {
					return new Xi(this.eq(e));
				}
			};
		ee.Value = Tn;
		var Pr = class extends Tn {
			constructor(e) {
				super();
				this.v = e;
			}
		};
		ee.Literal = Pr;
		var xd = class extends Tn {
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
		ee.Col = xd;
		var Ji = class {
			and(...e) {
				return new Ki(this, ...e);
			}
			or(...e) {
				return new Zi(this, ...e);
			}
			not() {
				return new Xi(this);
			}
		};
		ee.Predicate = Ji;
		var Gs = class extends Ji {
			constructor(e, t) {
				super();
				(this.left = e), (this.right = t);
			}
			bind(e) {
				return this.left instanceof Pr
					? this.right instanceof Pr
						? this._bindLitLit(e, this.left, this.right)
						: this._bindLitCol(e, this.left, this.right)
					: this.right instanceof Pr
					? this._bindColLit(e, this.left, this.right)
					: this._bindColCol(e, this.left, this.right);
			}
		};
		ee.ComparisonPredicate = Gs;
		var $s = class extends Ji {
			constructor(...e) {
				super();
				this.children = e;
			}
		};
		ee.CombinationPredicate = $s;
		$s.prototype.children = Object.freeze([]);
		var Ki = class extends $s {
			constructor(...e) {
				e = e.reduce((t, n) => t.concat(n instanceof Ki ? n.children : n), []);
				super(...e);
			}
			bind(e) {
				let t = this.children.map((n) => n.bind(e));
				return (n, i) => t.every((s) => s(n, i));
			}
		};
		ee.And = Ki;
		var Zi = class extends $s {
			constructor(...e) {
				e = e.reduce((t, n) => t.concat(n instanceof Zi ? n.children : n), []);
				super(...e);
			}
			bind(e) {
				let t = this.children.map((n) => n.bind(e));
				return (n, i) => t.some((s) => s(n, i));
			}
		};
		ee.Or = Zi;
		var Cd = class extends Gs {
			_bindLitLit(e, t, n) {
				let i = t.v == n.v;
				return () => i;
			}
			_bindColCol(e, t, n) {
				let i = t.bind(e),
					s = n.bind(e);
				return (o, a) => i(o, a) == s(o, a);
			}
			_bindColLit(e, t, n) {
				let i = t.bind(e);
				if (t.vector instanceof X1.DictionaryVector) {
					let s,
						o = t.vector;
					return (
						o.dictionary !== this.lastDictionary
							? ((s = o.reverseLookup(n.v)),
							  (this.lastDictionary = o.dictionary),
							  (this.lastKey = s))
							: (s = this.lastKey),
						s === -1 ? () => !1 : (a) => o.getKey(a) === s
					);
				} else return (s, o) => i(s, o) == n.v;
			}
			_bindLitCol(e, t, n) {
				return this._bindColLit(e, n, t);
			}
		};
		ee.Equals = Cd;
		var jd = class extends Gs {
			_bindLitLit(e, t, n) {
				let i = t.v <= n.v;
				return () => i;
			}
			_bindColCol(e, t, n) {
				let i = t.bind(e),
					s = n.bind(e);
				return (o, a) => i(o, a) <= s(o, a);
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
		ee.LTeq = jd;
		var qd = class extends Gs {
			_bindLitLit(e, t, n) {
				let i = t.v >= n.v;
				return () => i;
			}
			_bindColCol(e, t, n) {
				let i = t.bind(e),
					s = n.bind(e);
				return (o, a) => i(o, a) >= s(o, a);
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
		ee.GTeq = qd;
		var Xi = class extends Ji {
			constructor(e) {
				super();
				this.child = e;
			}
			bind(e) {
				let t = this.child.bind(e);
				return (n, i) => !t(n, i);
			}
		};
		ee.Not = Xi;
		var Wd = class extends Ji {
			constructor(e, t) {
				super();
				(this.next = e), (this.bind_ = t);
			}
			bind(e) {
				return this.bind_(e), this.next;
			}
		};
		ee.CustomPredicate = Wd;
		function Q1(r) {
			return new Pr(r);
		}
		ee.lit = Q1;
		function eA(r) {
			return new xd(r);
		}
		ee.col = eA;
		function tA(...r) {
			return new Ki(...r);
		}
		ee.and = tA;
		function rA(...r) {
			return new Zi(...r);
		}
		ee.or = rA;
		function nA(r, e) {
			return new Wd(r, e);
		}
		ee.custom = nA;
	});
	var km = g((In) => {
		'use strict';
		Object.defineProperty(In, '__esModule', { value: !0 });
		In.FilteredDataFrame = In.CountByResult = In.DataFrame = void 0;
		var Um = Us(),
			Vm = Ha(),
			Hd = $e(),
			Pm = zd(),
			iA = Rr(),
			Nm = oe(),
			Yd = class extends Um.Table {
				filter(e) {
					return new Js(this.chunks, e);
				}
				scan(e, t) {
					let n = this.chunks,
						i = n.length;
					for (let s = -1; ++s < i; ) {
						let o = n[s];
						t && t(o);
						for (let a = -1, l = o.length; ++a < l; ) e(a, o);
					}
				}
				scanReverse(e, t) {
					let n = this.chunks,
						i = n.length;
					for (let s = i; --s >= 0; ) {
						let o = n[s];
						t && t(o);
						for (let a = o.length; --a >= 0; ) e(a, o);
					}
				}
				countBy(e) {
					let t = this.chunks,
						n = t.length,
						i = typeof e == 'string' ? new Pm.Col(e) : e;
					i.bind(t[n - 1]);
					let s = i.vector;
					if (!Nm.DataType.isDictionary(s.type))
						throw new Error('countBy currently only supports dictionary-encoded columns');
					let o = Math.ceil(Math.log(s.length) / Math.log(256)),
						a = o == 4 ? Uint32Array : o >= 2 ? Uint16Array : Uint8Array,
						l = new a(s.dictionary.length);
					for (let f = -1; ++f < n; ) {
						let y = t[f];
						i.bind(y);
						let F = i.vector.indices;
						for (let E = -1, C = y.length; ++E < C; ) {
							let we = F.get(E);
							we !== null && l[we]++;
						}
					}
					return new hu(s.dictionary, Vm.IntVector.from(l));
				}
			};
		In.DataFrame = Yd;
		var hu = class extends Um.Table {
			constructor(e, t) {
				let n = new Hd.Schema([new Hd.Field('values', e.type), new Hd.Field('counts', t.type)]);
				super(new iA.RecordBatch(n, t.length, [e, t]));
			}
			toJSON() {
				let e = this.getColumnAt(0),
					t = this.getColumnAt(1),
					n = {};
				for (let i = -1; ++i < this.length; ) n[e.get(i)] = t.get(i);
				return n;
			}
		};
		In.CountByResult = hu;
		var Lm = class {
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
			Js = class extends Yd {
				constructor(e, t) {
					super(e);
					this._predicate = t;
				}
				scan(e, t) {
					let n = this._chunks,
						i = n.length;
					for (let s = -1; ++s < i; ) {
						let o = n[s],
							a = this._predicate.bind(o),
							l = !1;
						for (let f = -1, y = o.length; ++f < y; )
							a(f, o) && (t && !l && (t(o), (l = !0)), e(f, o));
					}
				}
				scanReverse(e, t) {
					let n = this._chunks,
						i = n.length;
					for (let s = i; --s >= 0; ) {
						let o = n[s],
							a = this._predicate.bind(o),
							l = !1;
						for (let f = o.length; --f >= 0; ) a(f, o) && (t && !l && (t(o), (l = !0)), e(f, o));
					}
				}
				count() {
					let e = 0,
						t = this._chunks,
						n = t.length;
					for (let i = -1; ++i < n; ) {
						let s = t[i],
							o = this._predicate.bind(s);
						for (let a = -1, l = s.length; ++a < l; ) o(a, s) && ++e;
					}
					return e;
				}
				[Symbol.iterator]() {
					return new Lm(this._chunks, this._predicate);
				}
				filter(e) {
					return new Js(this._chunks, this._predicate.and(e));
				}
				countBy(e) {
					let t = this._chunks,
						n = t.length,
						i = typeof e == 'string' ? new Pm.Col(e) : e;
					i.bind(t[n - 1]);
					let s = i.vector;
					if (!Nm.DataType.isDictionary(s.type))
						throw new Error('countBy currently only supports dictionary-encoded columns');
					let o = Math.ceil(Math.log(s.length) / Math.log(256)),
						a = o == 4 ? Uint32Array : o >= 2 ? Uint16Array : Uint8Array,
						l = new a(s.dictionary.length);
					for (let f = -1; ++f < n; ) {
						let y = t[f],
							F = this._predicate.bind(y);
						i.bind(y);
						let E = i.vector.indices;
						for (let C = -1, we = y.length; ++C < we; ) {
							let me = E.get(C);
							me !== null && F(C, y) && l[me]++;
						}
					}
					return new hu(s.dictionary, Vm.IntVector.from(l));
				}
			};
		In.FilteredDataFrame = Js;
	});
	var jm = g((c) => {
		'use strict';
		Object.defineProperty(c, '__esModule', { value: !0 });
		c.isTypedArray =
			c.util =
			c.predicate =
			c.CountByResult =
			c.FilteredDataFrame =
			c.DataFrame =
			c.RecordBatch =
			c.Message =
			c.JSONMessageReader =
			c.AsyncMessageReader =
			c.MessageReader =
			c.RecordBatchJSONWriter =
			c.RecordBatchStreamWriter =
			c.RecordBatchFileWriter =
			c.RecordBatchWriter =
			c.AsyncRecordBatchStreamReader =
			c.AsyncRecordBatchFileReader =
			c.RecordBatchStreamReader =
			c.RecordBatchFileReader =
			c.RecordBatchReader =
			c.AsyncByteQueue =
			c.AsyncByteStream =
			c.ByteStream =
			c.Utf8Builder =
			c.SparseUnionBuilder =
			c.DenseUnionBuilder =
			c.UnionBuilder =
			c.TimeNanosecondBuilder =
			c.TimeMicrosecondBuilder =
			c.TimeMillisecondBuilder =
			c.TimeSecondBuilder =
			c.TimeBuilder =
			c.TimestampNanosecondBuilder =
			c.TimestampMicrosecondBuilder =
			c.TimestampMillisecondBuilder =
			c.TimestampSecondBuilder =
			c.TimestampBuilder =
			c.StructBuilder =
			c.NullBuilder =
			c.MapBuilder =
			c.ListBuilder =
			c.Uint64Builder =
			c.Uint32Builder =
			c.Uint16Builder =
			c.Uint8Builder =
			c.Int64Builder =
			c.Int32Builder =
			c.Int16Builder =
			c.Int8Builder =
			c.IntBuilder =
			c.IntervalYearMonthBuilder =
			c.IntervalDayTimeBuilder =
			c.IntervalBuilder =
			c.Float64Builder =
			c.Float32Builder =
			c.Float16Builder =
			c.FloatBuilder =
			c.FixedSizeListBuilder =
			c.FixedSizeBinaryBuilder =
			c.DictionaryBuilder =
			c.DecimalBuilder =
			c.DateMillisecondBuilder =
			c.DateDayBuilder =
			c.DateBuilder =
			c.BoolBuilder =
			c.BinaryBuilder =
			c.Builder =
			c.Utf8Vector =
			c.SparseUnionVector =
			c.DenseUnionVector =
			c.UnionVector =
			c.TimeNanosecondVector =
			c.TimeMicrosecondVector =
			c.TimeMillisecondVector =
			c.TimeSecondVector =
			c.TimeVector =
			c.TimestampNanosecondVector =
			c.TimestampMicrosecondVector =
			c.TimestampMillisecondVector =
			c.TimestampSecondVector =
			c.TimestampVector =
			c.StructVector =
			c.NullVector =
			c.MapVector =
			c.ListVector =
			c.Uint64Vector =
			c.Uint32Vector =
			c.Uint16Vector =
			c.Uint8Vector =
			c.Int64Vector =
			c.Int32Vector =
			c.Int16Vector =
			c.Int8Vector =
			c.IntVector =
			c.IntervalYearMonthVector =
			c.IntervalDayTimeVector =
			c.IntervalVector =
			c.Float64Vector =
			c.Float32Vector =
			c.Float16Vector =
			c.FloatVector =
			c.FixedSizeListVector =
			c.FixedSizeBinaryVector =
			c.DictionaryVector =
			c.DecimalVector =
			c.DateMillisecondVector =
			c.DateDayVector =
			c.DateVector =
			c.Chunked =
			c.BoolVector =
			c.BinaryVector =
			c.BaseVector =
			c.Vector =
			c.Field =
			c.Schema =
			c.Visitor =
			c.Column =
			c.Table =
			c.Map_ =
			c.FixedSizeList =
			c.IntervalYearMonth =
			c.IntervalDayTime =
			c.Interval =
			c.Dictionary =
			c.SparseUnion =
			c.DenseUnion =
			c.Union =
			c.Struct =
			c.List =
			c.Decimal =
			c.TimeNanosecond =
			c.TimeMicrosecond =
			c.TimeMillisecond =
			c.TimeSecond =
			c.Time =
			c.TimestampNanosecond =
			c.TimestampMicrosecond =
			c.TimestampMillisecond =
			c.TimestampSecond =
			c.Timestamp =
			c.DateMillisecond =
			c.DateDay =
			c.Date_ =
			c.FixedSizeBinary =
			c.Binary =
			c.Utf8 =
			c.Float64 =
			c.Float32 =
			c.Float16 =
			c.Float =
			c.Uint64 =
			c.Uint32 =
			c.Uint16 =
			c.Uint8 =
			c.Int64 =
			c.Int32 =
			c.Int16 =
			c.Int8 =
			c.Int =
			c.Bool =
			c.Null =
			c.DataType =
			c.Data =
			c.BufferType =
			c.Type =
			c.MessageHeader =
			c.MetadataVersion =
			c.IntervalUnit =
			c.UnionMode =
			c.Precision =
			c.TimeUnit =
			c.DateUnit =
				void 0;
		var Qi = Yr();
		Object.defineProperty(c, 'DateUnit', {
			enumerable: !0,
			get: function () {
				return Qi.DateUnit;
			}
		});
		Object.defineProperty(c, 'TimeUnit', {
			enumerable: !0,
			get: function () {
				return Qi.TimeUnit;
			}
		});
		Object.defineProperty(c, 'Precision', {
			enumerable: !0,
			get: function () {
				return Qi.Precision;
			}
		});
		Object.defineProperty(c, 'UnionMode', {
			enumerable: !0,
			get: function () {
				return Qi.UnionMode;
			}
		});
		Object.defineProperty(c, 'IntervalUnit', {
			enumerable: !0,
			get: function () {
				return Qi.IntervalUnit;
			}
		});
		Object.defineProperty(c, 'MetadataVersion', {
			enumerable: !0,
			get: function () {
				return Qi.MetadataVersion;
			}
		});
		var sA = Bo();
		Object.defineProperty(c, 'MessageHeader', {
			enumerable: !0,
			get: function () {
				return sA.MessageHeader;
			}
		});
		var xm = _e();
		Object.defineProperty(c, 'Type', {
			enumerable: !0,
			get: function () {
				return xm.Type;
			}
		});
		Object.defineProperty(c, 'BufferType', {
			enumerable: !0,
			get: function () {
				return xm.BufferType;
			}
		});
		var oA = zt();
		Object.defineProperty(c, 'Data', {
			enumerable: !0,
			get: function () {
				return oA.Data;
			}
		});
		var J = oe();
		Object.defineProperty(c, 'DataType', {
			enumerable: !0,
			get: function () {
				return J.DataType;
			}
		});
		Object.defineProperty(c, 'Null', {
			enumerable: !0,
			get: function () {
				return J.Null;
			}
		});
		Object.defineProperty(c, 'Bool', {
			enumerable: !0,
			get: function () {
				return J.Bool;
			}
		});
		Object.defineProperty(c, 'Int', {
			enumerable: !0,
			get: function () {
				return J.Int;
			}
		});
		Object.defineProperty(c, 'Int8', {
			enumerable: !0,
			get: function () {
				return J.Int8;
			}
		});
		Object.defineProperty(c, 'Int16', {
			enumerable: !0,
			get: function () {
				return J.Int16;
			}
		});
		Object.defineProperty(c, 'Int32', {
			enumerable: !0,
			get: function () {
				return J.Int32;
			}
		});
		Object.defineProperty(c, 'Int64', {
			enumerable: !0,
			get: function () {
				return J.Int64;
			}
		});
		Object.defineProperty(c, 'Uint8', {
			enumerable: !0,
			get: function () {
				return J.Uint8;
			}
		});
		Object.defineProperty(c, 'Uint16', {
			enumerable: !0,
			get: function () {
				return J.Uint16;
			}
		});
		Object.defineProperty(c, 'Uint32', {
			enumerable: !0,
			get: function () {
				return J.Uint32;
			}
		});
		Object.defineProperty(c, 'Uint64', {
			enumerable: !0,
			get: function () {
				return J.Uint64;
			}
		});
		Object.defineProperty(c, 'Float', {
			enumerable: !0,
			get: function () {
				return J.Float;
			}
		});
		Object.defineProperty(c, 'Float16', {
			enumerable: !0,
			get: function () {
				return J.Float16;
			}
		});
		Object.defineProperty(c, 'Float32', {
			enumerable: !0,
			get: function () {
				return J.Float32;
			}
		});
		Object.defineProperty(c, 'Float64', {
			enumerable: !0,
			get: function () {
				return J.Float64;
			}
		});
		Object.defineProperty(c, 'Utf8', {
			enumerable: !0,
			get: function () {
				return J.Utf8;
			}
		});
		Object.defineProperty(c, 'Binary', {
			enumerable: !0,
			get: function () {
				return J.Binary;
			}
		});
		Object.defineProperty(c, 'FixedSizeBinary', {
			enumerable: !0,
			get: function () {
				return J.FixedSizeBinary;
			}
		});
		Object.defineProperty(c, 'Date_', {
			enumerable: !0,
			get: function () {
				return J.Date_;
			}
		});
		Object.defineProperty(c, 'DateDay', {
			enumerable: !0,
			get: function () {
				return J.DateDay;
			}
		});
		Object.defineProperty(c, 'DateMillisecond', {
			enumerable: !0,
			get: function () {
				return J.DateMillisecond;
			}
		});
		Object.defineProperty(c, 'Timestamp', {
			enumerable: !0,
			get: function () {
				return J.Timestamp;
			}
		});
		Object.defineProperty(c, 'TimestampSecond', {
			enumerable: !0,
			get: function () {
				return J.TimestampSecond;
			}
		});
		Object.defineProperty(c, 'TimestampMillisecond', {
			enumerable: !0,
			get: function () {
				return J.TimestampMillisecond;
			}
		});
		Object.defineProperty(c, 'TimestampMicrosecond', {
			enumerable: !0,
			get: function () {
				return J.TimestampMicrosecond;
			}
		});
		Object.defineProperty(c, 'TimestampNanosecond', {
			enumerable: !0,
			get: function () {
				return J.TimestampNanosecond;
			}
		});
		Object.defineProperty(c, 'Time', {
			enumerable: !0,
			get: function () {
				return J.Time;
			}
		});
		Object.defineProperty(c, 'TimeSecond', {
			enumerable: !0,
			get: function () {
				return J.TimeSecond;
			}
		});
		Object.defineProperty(c, 'TimeMillisecond', {
			enumerable: !0,
			get: function () {
				return J.TimeMillisecond;
			}
		});
		Object.defineProperty(c, 'TimeMicrosecond', {
			enumerable: !0,
			get: function () {
				return J.TimeMicrosecond;
			}
		});
		Object.defineProperty(c, 'TimeNanosecond', {
			enumerable: !0,
			get: function () {
				return J.TimeNanosecond;
			}
		});
		Object.defineProperty(c, 'Decimal', {
			enumerable: !0,
			get: function () {
				return J.Decimal;
			}
		});
		Object.defineProperty(c, 'List', {
			enumerable: !0,
			get: function () {
				return J.List;
			}
		});
		Object.defineProperty(c, 'Struct', {
			enumerable: !0,
			get: function () {
				return J.Struct;
			}
		});
		Object.defineProperty(c, 'Union', {
			enumerable: !0,
			get: function () {
				return J.Union;
			}
		});
		Object.defineProperty(c, 'DenseUnion', {
			enumerable: !0,
			get: function () {
				return J.DenseUnion;
			}
		});
		Object.defineProperty(c, 'SparseUnion', {
			enumerable: !0,
			get: function () {
				return J.SparseUnion;
			}
		});
		Object.defineProperty(c, 'Dictionary', {
			enumerable: !0,
			get: function () {
				return J.Dictionary;
			}
		});
		Object.defineProperty(c, 'Interval', {
			enumerable: !0,
			get: function () {
				return J.Interval;
			}
		});
		Object.defineProperty(c, 'IntervalDayTime', {
			enumerable: !0,
			get: function () {
				return J.IntervalDayTime;
			}
		});
		Object.defineProperty(c, 'IntervalYearMonth', {
			enumerable: !0,
			get: function () {
				return J.IntervalYearMonth;
			}
		});
		Object.defineProperty(c, 'FixedSizeList', {
			enumerable: !0,
			get: function () {
				return J.FixedSizeList;
			}
		});
		Object.defineProperty(c, 'Map_', {
			enumerable: !0,
			get: function () {
				return J.Map_;
			}
		});
		var aA = Us();
		Object.defineProperty(c, 'Table', {
			enumerable: !0,
			get: function () {
				return aA.Table;
			}
		});
		var uA = Mi();
		Object.defineProperty(c, 'Column', {
			enumerable: !0,
			get: function () {
				return uA.Column;
			}
		});
		var cA = Xe();
		Object.defineProperty(c, 'Visitor', {
			enumerable: !0,
			get: function () {
				return cA.Visitor;
			}
		});
		var Cm = $e();
		Object.defineProperty(c, 'Schema', {
			enumerable: !0,
			get: function () {
				return Cm.Schema;
			}
		});
		Object.defineProperty(c, 'Field', {
			enumerable: !0,
			get: function () {
				return Cm.Field;
			}
		});
		var Y = pr();
		Object.defineProperty(c, 'Vector', {
			enumerable: !0,
			get: function () {
				return Y.Vector;
			}
		});
		Object.defineProperty(c, 'BaseVector', {
			enumerable: !0,
			get: function () {
				return Y.BaseVector;
			}
		});
		Object.defineProperty(c, 'BinaryVector', {
			enumerable: !0,
			get: function () {
				return Y.BinaryVector;
			}
		});
		Object.defineProperty(c, 'BoolVector', {
			enumerable: !0,
			get: function () {
				return Y.BoolVector;
			}
		});
		Object.defineProperty(c, 'Chunked', {
			enumerable: !0,
			get: function () {
				return Y.Chunked;
			}
		});
		Object.defineProperty(c, 'DateVector', {
			enumerable: !0,
			get: function () {
				return Y.DateVector;
			}
		});
		Object.defineProperty(c, 'DateDayVector', {
			enumerable: !0,
			get: function () {
				return Y.DateDayVector;
			}
		});
		Object.defineProperty(c, 'DateMillisecondVector', {
			enumerable: !0,
			get: function () {
				return Y.DateMillisecondVector;
			}
		});
		Object.defineProperty(c, 'DecimalVector', {
			enumerable: !0,
			get: function () {
				return Y.DecimalVector;
			}
		});
		Object.defineProperty(c, 'DictionaryVector', {
			enumerable: !0,
			get: function () {
				return Y.DictionaryVector;
			}
		});
		Object.defineProperty(c, 'FixedSizeBinaryVector', {
			enumerable: !0,
			get: function () {
				return Y.FixedSizeBinaryVector;
			}
		});
		Object.defineProperty(c, 'FixedSizeListVector', {
			enumerable: !0,
			get: function () {
				return Y.FixedSizeListVector;
			}
		});
		Object.defineProperty(c, 'FloatVector', {
			enumerable: !0,
			get: function () {
				return Y.FloatVector;
			}
		});
		Object.defineProperty(c, 'Float16Vector', {
			enumerable: !0,
			get: function () {
				return Y.Float16Vector;
			}
		});
		Object.defineProperty(c, 'Float32Vector', {
			enumerable: !0,
			get: function () {
				return Y.Float32Vector;
			}
		});
		Object.defineProperty(c, 'Float64Vector', {
			enumerable: !0,
			get: function () {
				return Y.Float64Vector;
			}
		});
		Object.defineProperty(c, 'IntervalVector', {
			enumerable: !0,
			get: function () {
				return Y.IntervalVector;
			}
		});
		Object.defineProperty(c, 'IntervalDayTimeVector', {
			enumerable: !0,
			get: function () {
				return Y.IntervalDayTimeVector;
			}
		});
		Object.defineProperty(c, 'IntervalYearMonthVector', {
			enumerable: !0,
			get: function () {
				return Y.IntervalYearMonthVector;
			}
		});
		Object.defineProperty(c, 'IntVector', {
			enumerable: !0,
			get: function () {
				return Y.IntVector;
			}
		});
		Object.defineProperty(c, 'Int8Vector', {
			enumerable: !0,
			get: function () {
				return Y.Int8Vector;
			}
		});
		Object.defineProperty(c, 'Int16Vector', {
			enumerable: !0,
			get: function () {
				return Y.Int16Vector;
			}
		});
		Object.defineProperty(c, 'Int32Vector', {
			enumerable: !0,
			get: function () {
				return Y.Int32Vector;
			}
		});
		Object.defineProperty(c, 'Int64Vector', {
			enumerable: !0,
			get: function () {
				return Y.Int64Vector;
			}
		});
		Object.defineProperty(c, 'Uint8Vector', {
			enumerable: !0,
			get: function () {
				return Y.Uint8Vector;
			}
		});
		Object.defineProperty(c, 'Uint16Vector', {
			enumerable: !0,
			get: function () {
				return Y.Uint16Vector;
			}
		});
		Object.defineProperty(c, 'Uint32Vector', {
			enumerable: !0,
			get: function () {
				return Y.Uint32Vector;
			}
		});
		Object.defineProperty(c, 'Uint64Vector', {
			enumerable: !0,
			get: function () {
				return Y.Uint64Vector;
			}
		});
		Object.defineProperty(c, 'ListVector', {
			enumerable: !0,
			get: function () {
				return Y.ListVector;
			}
		});
		Object.defineProperty(c, 'MapVector', {
			enumerable: !0,
			get: function () {
				return Y.MapVector;
			}
		});
		Object.defineProperty(c, 'NullVector', {
			enumerable: !0,
			get: function () {
				return Y.NullVector;
			}
		});
		Object.defineProperty(c, 'StructVector', {
			enumerable: !0,
			get: function () {
				return Y.StructVector;
			}
		});
		Object.defineProperty(c, 'TimestampVector', {
			enumerable: !0,
			get: function () {
				return Y.TimestampVector;
			}
		});
		Object.defineProperty(c, 'TimestampSecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimestampSecondVector;
			}
		});
		Object.defineProperty(c, 'TimestampMillisecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimestampMillisecondVector;
			}
		});
		Object.defineProperty(c, 'TimestampMicrosecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimestampMicrosecondVector;
			}
		});
		Object.defineProperty(c, 'TimestampNanosecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimestampNanosecondVector;
			}
		});
		Object.defineProperty(c, 'TimeVector', {
			enumerable: !0,
			get: function () {
				return Y.TimeVector;
			}
		});
		Object.defineProperty(c, 'TimeSecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimeSecondVector;
			}
		});
		Object.defineProperty(c, 'TimeMillisecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimeMillisecondVector;
			}
		});
		Object.defineProperty(c, 'TimeMicrosecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimeMicrosecondVector;
			}
		});
		Object.defineProperty(c, 'TimeNanosecondVector', {
			enumerable: !0,
			get: function () {
				return Y.TimeNanosecondVector;
			}
		});
		Object.defineProperty(c, 'UnionVector', {
			enumerable: !0,
			get: function () {
				return Y.UnionVector;
			}
		});
		Object.defineProperty(c, 'DenseUnionVector', {
			enumerable: !0,
			get: function () {
				return Y.DenseUnionVector;
			}
		});
		Object.defineProperty(c, 'SparseUnionVector', {
			enumerable: !0,
			get: function () {
				return Y.SparseUnionVector;
			}
		});
		Object.defineProperty(c, 'Utf8Vector', {
			enumerable: !0,
			get: function () {
				return Y.Utf8Vector;
			}
		});
		var K = ca();
		Object.defineProperty(c, 'Builder', {
			enumerable: !0,
			get: function () {
				return K.Builder;
			}
		});
		Object.defineProperty(c, 'BinaryBuilder', {
			enumerable: !0,
			get: function () {
				return K.BinaryBuilder;
			}
		});
		Object.defineProperty(c, 'BoolBuilder', {
			enumerable: !0,
			get: function () {
				return K.BoolBuilder;
			}
		});
		Object.defineProperty(c, 'DateBuilder', {
			enumerable: !0,
			get: function () {
				return K.DateBuilder;
			}
		});
		Object.defineProperty(c, 'DateDayBuilder', {
			enumerable: !0,
			get: function () {
				return K.DateDayBuilder;
			}
		});
		Object.defineProperty(c, 'DateMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.DateMillisecondBuilder;
			}
		});
		Object.defineProperty(c, 'DecimalBuilder', {
			enumerable: !0,
			get: function () {
				return K.DecimalBuilder;
			}
		});
		Object.defineProperty(c, 'DictionaryBuilder', {
			enumerable: !0,
			get: function () {
				return K.DictionaryBuilder;
			}
		});
		Object.defineProperty(c, 'FixedSizeBinaryBuilder', {
			enumerable: !0,
			get: function () {
				return K.FixedSizeBinaryBuilder;
			}
		});
		Object.defineProperty(c, 'FixedSizeListBuilder', {
			enumerable: !0,
			get: function () {
				return K.FixedSizeListBuilder;
			}
		});
		Object.defineProperty(c, 'FloatBuilder', {
			enumerable: !0,
			get: function () {
				return K.FloatBuilder;
			}
		});
		Object.defineProperty(c, 'Float16Builder', {
			enumerable: !0,
			get: function () {
				return K.Float16Builder;
			}
		});
		Object.defineProperty(c, 'Float32Builder', {
			enumerable: !0,
			get: function () {
				return K.Float32Builder;
			}
		});
		Object.defineProperty(c, 'Float64Builder', {
			enumerable: !0,
			get: function () {
				return K.Float64Builder;
			}
		});
		Object.defineProperty(c, 'IntervalBuilder', {
			enumerable: !0,
			get: function () {
				return K.IntervalBuilder;
			}
		});
		Object.defineProperty(c, 'IntervalDayTimeBuilder', {
			enumerable: !0,
			get: function () {
				return K.IntervalDayTimeBuilder;
			}
		});
		Object.defineProperty(c, 'IntervalYearMonthBuilder', {
			enumerable: !0,
			get: function () {
				return K.IntervalYearMonthBuilder;
			}
		});
		Object.defineProperty(c, 'IntBuilder', {
			enumerable: !0,
			get: function () {
				return K.IntBuilder;
			}
		});
		Object.defineProperty(c, 'Int8Builder', {
			enumerable: !0,
			get: function () {
				return K.Int8Builder;
			}
		});
		Object.defineProperty(c, 'Int16Builder', {
			enumerable: !0,
			get: function () {
				return K.Int16Builder;
			}
		});
		Object.defineProperty(c, 'Int32Builder', {
			enumerable: !0,
			get: function () {
				return K.Int32Builder;
			}
		});
		Object.defineProperty(c, 'Int64Builder', {
			enumerable: !0,
			get: function () {
				return K.Int64Builder;
			}
		});
		Object.defineProperty(c, 'Uint8Builder', {
			enumerable: !0,
			get: function () {
				return K.Uint8Builder;
			}
		});
		Object.defineProperty(c, 'Uint16Builder', {
			enumerable: !0,
			get: function () {
				return K.Uint16Builder;
			}
		});
		Object.defineProperty(c, 'Uint32Builder', {
			enumerable: !0,
			get: function () {
				return K.Uint32Builder;
			}
		});
		Object.defineProperty(c, 'Uint64Builder', {
			enumerable: !0,
			get: function () {
				return K.Uint64Builder;
			}
		});
		Object.defineProperty(c, 'ListBuilder', {
			enumerable: !0,
			get: function () {
				return K.ListBuilder;
			}
		});
		Object.defineProperty(c, 'MapBuilder', {
			enumerable: !0,
			get: function () {
				return K.MapBuilder;
			}
		});
		Object.defineProperty(c, 'NullBuilder', {
			enumerable: !0,
			get: function () {
				return K.NullBuilder;
			}
		});
		Object.defineProperty(c, 'StructBuilder', {
			enumerable: !0,
			get: function () {
				return K.StructBuilder;
			}
		});
		Object.defineProperty(c, 'TimestampBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimestampBuilder;
			}
		});
		Object.defineProperty(c, 'TimestampSecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimestampSecondBuilder;
			}
		});
		Object.defineProperty(c, 'TimestampMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimestampMillisecondBuilder;
			}
		});
		Object.defineProperty(c, 'TimestampMicrosecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimestampMicrosecondBuilder;
			}
		});
		Object.defineProperty(c, 'TimestampNanosecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimestampNanosecondBuilder;
			}
		});
		Object.defineProperty(c, 'TimeBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimeBuilder;
			}
		});
		Object.defineProperty(c, 'TimeSecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimeSecondBuilder;
			}
		});
		Object.defineProperty(c, 'TimeMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimeMillisecondBuilder;
			}
		});
		Object.defineProperty(c, 'TimeMicrosecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimeMicrosecondBuilder;
			}
		});
		Object.defineProperty(c, 'TimeNanosecondBuilder', {
			enumerable: !0,
			get: function () {
				return K.TimeNanosecondBuilder;
			}
		});
		Object.defineProperty(c, 'UnionBuilder', {
			enumerable: !0,
			get: function () {
				return K.UnionBuilder;
			}
		});
		Object.defineProperty(c, 'DenseUnionBuilder', {
			enumerable: !0,
			get: function () {
				return K.DenseUnionBuilder;
			}
		});
		Object.defineProperty(c, 'SparseUnionBuilder', {
			enumerable: !0,
			get: function () {
				return K.SparseUnionBuilder;
			}
		});
		Object.defineProperty(c, 'Utf8Builder', {
			enumerable: !0,
			get: function () {
				return K.Utf8Builder;
			}
		});
		var Gd = on();
		Object.defineProperty(c, 'ByteStream', {
			enumerable: !0,
			get: function () {
				return Gd.ByteStream;
			}
		});
		Object.defineProperty(c, 'AsyncByteStream', {
			enumerable: !0,
			get: function () {
				return Gd.AsyncByteStream;
			}
		});
		Object.defineProperty(c, 'AsyncByteQueue', {
			enumerable: !0,
			get: function () {
				return Gd.AsyncByteQueue;
			}
		});
		var Ks = qs();
		Object.defineProperty(c, 'RecordBatchReader', {
			enumerable: !0,
			get: function () {
				return Ks.RecordBatchReader;
			}
		});
		Object.defineProperty(c, 'RecordBatchFileReader', {
			enumerable: !0,
			get: function () {
				return Ks.RecordBatchFileReader;
			}
		});
		Object.defineProperty(c, 'RecordBatchStreamReader', {
			enumerable: !0,
			get: function () {
				return Ks.RecordBatchStreamReader;
			}
		});
		Object.defineProperty(c, 'AsyncRecordBatchFileReader', {
			enumerable: !0,
			get: function () {
				return Ks.AsyncRecordBatchFileReader;
			}
		});
		Object.defineProperty(c, 'AsyncRecordBatchStreamReader', {
			enumerable: !0,
			get: function () {
				return Ks.AsyncRecordBatchStreamReader;
			}
		});
		var pu = Va();
		Object.defineProperty(c, 'RecordBatchWriter', {
			enumerable: !0,
			get: function () {
				return pu.RecordBatchWriter;
			}
		});
		Object.defineProperty(c, 'RecordBatchFileWriter', {
			enumerable: !0,
			get: function () {
				return pu.RecordBatchFileWriter;
			}
		});
		Object.defineProperty(c, 'RecordBatchStreamWriter', {
			enumerable: !0,
			get: function () {
				return pu.RecordBatchStreamWriter;
			}
		});
		Object.defineProperty(c, 'RecordBatchJSONWriter', {
			enumerable: !0,
			get: function () {
				return pu.RecordBatchJSONWriter;
			}
		});
		var $d = Ba();
		Object.defineProperty(c, 'MessageReader', {
			enumerable: !0,
			get: function () {
				return $d.MessageReader;
			}
		});
		Object.defineProperty(c, 'AsyncMessageReader', {
			enumerable: !0,
			get: function () {
				return $d.AsyncMessageReader;
			}
		});
		Object.defineProperty(c, 'JSONMessageReader', {
			enumerable: !0,
			get: function () {
				return $d.JSONMessageReader;
			}
		});
		var lA = Wn();
		Object.defineProperty(c, 'Message', {
			enumerable: !0,
			get: function () {
				return lA.Message;
			}
		});
		var dA = Rr();
		Object.defineProperty(c, 'RecordBatch', {
			enumerable: !0,
			get: function () {
				return dA.RecordBatch;
			}
		});
		var Jd = km();
		Object.defineProperty(c, 'DataFrame', {
			enumerable: !0,
			get: function () {
				return Jd.DataFrame;
			}
		});
		Object.defineProperty(c, 'FilteredDataFrame', {
			enumerable: !0,
			get: function () {
				return Jd.FilteredDataFrame;
			}
		});
		Object.defineProperty(c, 'CountByResult', {
			enumerable: !0,
			get: function () {
				return Jd.CountByResult;
			}
		});
		var fA = ms(),
			hA = tl(),
			pA = nr(),
			yA = hs(),
			_A = We(),
			mA = Ss(),
			bA = zd();
		c.predicate = bA;
		var Kd = gl();
		c.util = Object.assign(
			Object.assign(
				Object.assign(
					Object.assign(Object.assign(Object.assign(Object.assign({}, fA), hA), pA), yA),
					_A
				),
				mA
			),
			{
				compareSchemas: Kd.compareSchemas,
				compareFields: Kd.compareFields,
				compareTypes: Kd.compareTypes
			}
		);
		var gA = Cn();
		Object.defineProperty(c, 'isTypedArray', {
			enumerable: !0,
			get: function () {
				return gA.isTypedArray;
			}
		});
	});
	var mu = g(() => {});
	var Xd = g(() => {});
	var wA = {};
	Vv(wA, { registerWorker: () => Zm });
	var qm = vr(ds(), 1),
		Wm = vr(ca(), 1),
		es = vr(qs(), 1),
		ts = vr(Va(), 1),
		zm = vr(Dm(), 1),
		Hm = vr(Mm(), 1),
		yu = vr(Em(), 1),
		_u = vr(Rm(), 1),
		p = vr(jm(), 1);
	qm.default.toDOMStream = zm.toDOMStream;
	Wm.Builder.throughDOM = Hm.builderThroughDOMStream;
	es.RecordBatchReader.throughDOM = yu.recordBatchReaderThroughDOMStream;
	es.RecordBatchFileReader.throughDOM = yu.recordBatchReaderThroughDOMStream;
	es.RecordBatchStreamReader.throughDOM = yu.recordBatchReaderThroughDOMStream;
	ts.RecordBatchWriter.throughDOM = _u.recordBatchWriterThroughDOMStream;
	ts.RecordBatchFileWriter.throughDOM = _u.recordBatchWriterThroughDOMStream;
	ts.RecordBatchStreamWriter.throughDOM = _u.recordBatchWriterThroughDOMStream;
	var se = ((ie) => (
			(ie.CLOSE_PREPARED = 'CLOSE_PREPARED'),
			(ie.COLLECT_FILE_STATISTICS = 'COLLECT_FILE_STATISTICS'),
			(ie.CONNECT = 'CONNECT'),
			(ie.COPY_FILE_TO_BUFFER = 'COPY_FILE_TO_BUFFER'),
			(ie.COPY_FILE_TO_PATH = 'COPY_FILE_TO_PATH'),
			(ie.CREATE_PREPARED = 'CREATE_PREPARED'),
			(ie.DISCONNECT = 'DISCONNECT'),
			(ie.DROP_FILE = 'DROP_FILE'),
			(ie.DROP_FILES = 'DROP_FILES'),
			(ie.EXPORT_FILE_STATISTICS = 'EXPORT_FILE_STATISTICS'),
			(ie.FETCH_QUERY_RESULTS = 'FETCH_QUERY_RESULTS'),
			(ie.FLUSH_FILES = 'FLUSH_FILES'),
			(ie.GET_FEATURE_FLAGS = 'GET_FEATURE_FLAGS'),
			(ie.GET_TABLE_NAMES = 'GET_TABLE_NAMES'),
			(ie.GET_VERSION = 'GET_VERSION'),
			(ie.GLOB_FILE_INFOS = 'GLOB_FILE_INFOS'),
			(ie.INSERT_ARROW_FROM_IPC_STREAM = 'INSERT_ARROW_FROM_IPC_STREAM'),
			(ie.INSERT_CSV_FROM_PATH = 'IMPORT_CSV_FROM_PATH'),
			(ie.INSERT_JSON_FROM_PATH = 'IMPORT_JSON_FROM_PATH'),
			(ie.INSTANTIATE = 'INSTANTIATE'),
			(ie.OPEN = 'OPEN'),
			(ie.PING = 'PING'),
			(ie.REGISTER_FILE_BUFFER = 'REGISTER_FILE_BUFFER'),
			(ie.REGISTER_FILE_HANDLE = 'REGISTER_FILE_HANDLE'),
			(ie.REGISTER_FILE_URL = 'REGISTER_FILE_URL'),
			(ie.RESET = 'RESET'),
			(ie.RUN_PREPARED = 'RUN_PREPARED'),
			(ie.RUN_QUERY = 'RUN_QUERY'),
			(ie.SEND_PREPARED = 'SEND_PREPARED'),
			(ie.SEND_QUERY = 'SEND_QUERY'),
			(ie.TOKENIZE = 'TOKENIZE'),
			ie
		))(se || {}),
		qe = ((Re) => (
			(Re.CONNECTION_INFO = 'CONNECTION_INFO'),
			(Re.ERROR = 'ERROR'),
			(Re.FEATURE_FLAGS = 'FEATURE_FLAGS'),
			(Re.FILE_BUFFER = 'FILE_BUFFER'),
			(Re.FILE_INFOS = 'FILE_INFOS'),
			(Re.FILE_SIZE = 'FILE_SIZE'),
			(Re.FILE_STATISTICS = 'FILE_STATISTICS'),
			(Re.LOG = 'LOG'),
			(Re.OK = 'OK'),
			(Re.PREPARED_STATEMENT_ID = 'PREPARED_STATEMENT_ID'),
			(Re.QUERY_PLAN = 'QUERY_PLAN'),
			(Re.QUERY_RESULT = 'QUERY_RESULT'),
			(Re.QUERY_RESULT_CHUNK = 'QUERY_RESULT_CHUNK'),
			(Re.QUERY_START = 'QUERY_START'),
			(Re.REGISTERED_FILE = 'REGISTERED_FILE'),
			(Re.SCRIPT_TOKENS = 'SCRIPT_TOKENS'),
			(Re.SUCCESS = 'SUCCESS'),
			(Re.TABLE_NAMES = 'TABLE_NAMES'),
			(Re.VERSION_STRING = 'VERSION_STRING'),
			Re
		))(qe || {});
	function Zs(r, e) {
		switch (e.typeId) {
			case p.Type.Binary:
				return { name: r, type: 'binary' };
			case p.Type.Bool:
				return { name: r, type: 'bool' };
			case p.Type.Date:
				return { name: r, type: 'date' };
			case p.Type.DateDay:
				return { name: r, type: 'date32[d]' };
			case p.Type.DateMillisecond:
				return { name: r, type: 'date64[ms]' };
			case p.Type.Decimal: {
				let t = e;
				return { name: r, type: 'decimal', precision: t.precision, scale: t.scale };
			}
			case p.Type.Float:
				return { name: r, type: 'float' };
			case p.Type.Float16:
				return { name: r, type: 'float16' };
			case p.Type.Float32:
				return { name: r, type: 'float32' };
			case p.Type.Float64:
				return { name: r, type: 'float64' };
			case p.Type.Int:
				return { name: r, type: 'int32' };
			case p.Type.Int16:
				return { name: r, type: 'int16' };
			case p.Type.Int32:
				return { name: r, type: 'int32' };
			case p.Type.Int64:
				return { name: r, type: 'int64' };
			case p.Type.Uint16:
				return { name: r, type: 'uint16' };
			case p.Type.Uint32:
				return { name: r, type: 'uint32' };
			case p.Type.Uint64:
				return { name: r, type: 'uint64' };
			case p.Type.Uint8:
				return { name: r, type: 'uint8' };
			case p.Type.IntervalDayTime:
				return { name: r, type: 'interval[dt]' };
			case p.Type.IntervalYearMonth:
				return { name: r, type: 'interval[m]' };
			case p.Type.List: {
				let t = e;
				return { name: r, type: 'list', children: [Zs(t.valueField.name, t.valueField.type)] };
			}
			case p.Type.FixedSizeBinary:
				return { name: r, type: 'fixedsizebinary', byteWidth: e.byteWidth };
			case p.Type.Null:
				return { name: r, type: 'null' };
			case p.Type.Utf8:
				return { name: r, type: 'utf8' };
			case p.Type.Struct:
				return { name: r, type: 'struct', children: e.children.map((n) => Zs(n.name, n.type)) };
			case p.Type.Time:
				return { name: r, type: 'time[s]' };
			case p.Type.TimeMicrosecond:
				return { name: r, type: 'time[us]' };
			case p.Type.TimeMillisecond:
				return { name: r, type: 'time[ms]' };
			case p.Type.TimeNanosecond:
				return { name: r, type: 'time[ns]' };
			case p.Type.TimeSecond:
				return { name: r, type: 'time[s]' };
			case p.Type.Timestamp:
				return { name: r, type: 'timestamp', timezone: e.timezone || void 0 };
			case p.Type.TimestampSecond:
				return { name: r, type: 'timestamp[s]', timezone: e.timezone || void 0 };
			case p.Type.TimestampMicrosecond:
				return { name: r, type: 'timestamp[us]', timezone: e.timezone || void 0 };
			case p.Type.TimestampNanosecond:
				return { name: r, type: 'timestamp[ns]', timezone: e.timezone || void 0 };
			case p.Type.TimestampMillisecond:
				return { name: r, type: 'timestamp[ms]', timezone: e.timezone || void 0 };
		}
		throw new Error(`unsupported arrow type: ${e.toString()}`);
	}
	var Zd = class {
		constructor() {
			this._bindings = null;
			this._nextMessageId = 0;
		}
		log(e) {
			this.postMessage(
				{ messageId: this._nextMessageId++, requestId: 0, type: qe.LOG, data: e },
				[]
			);
		}
		sendOK(e) {
			this.postMessage(
				{ messageId: this._nextMessageId++, requestId: e.messageId, type: qe.OK, data: null },
				[]
			);
		}
		failWith(e, t) {
			let n = { name: t.name, message: t.message, stack: t.stack || void 0 };
			this.postMessage(
				{ messageId: this._nextMessageId++, requestId: e.messageId, type: qe.ERROR, data: n },
				[]
			);
		}
		async onMessage(e) {
			switch (e.type) {
				case se.PING:
					this.sendOK(e);
					return;
				case se.INSTANTIATE:
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
					case se.GET_VERSION:
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: qe.VERSION_STRING,
								data: this._bindings.getVersion()
							},
							[]
						);
						break;
					case se.GET_FEATURE_FLAGS:
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: qe.FEATURE_FLAGS,
								data: this._bindings.getFeatureFlags()
							},
							[]
						);
						break;
					case se.RESET:
						this._bindings.reset(), this.sendOK(e);
						break;
					case se.OPEN:
						this._bindings.open(e.data), this.sendOK(e);
						break;
					case se.DROP_FILE:
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: qe.SUCCESS,
								data: this._bindings.dropFile(e.data)
							},
							[]
						);
						break;
					case se.DROP_FILES:
						this._bindings.dropFiles(), this.sendOK(e);
						break;
					case se.FLUSH_FILES:
						this._bindings.flushFiles(), this.sendOK(e);
						break;
					case se.CONNECT: {
						let t = this._bindings.connect();
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: qe.CONNECTION_INFO,
								data: t.useUnsafe((n, i) => i)
							},
							[]
						);
						break;
					}
					case se.DISCONNECT:
						this._bindings.disconnect(e.data), this.sendOK(e);
						break;
					case se.CREATE_PREPARED: {
						let t = this._bindings.createPrepared(e.data[0], e.data[1]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: qe.PREPARED_STATEMENT_ID,
								data: t
							},
							[]
						);
						break;
					}
					case se.CLOSE_PREPARED: {
						this._bindings.closePrepared(e.data[0], e.data[1]), this.sendOK(e);
						break;
					}
					case se.RUN_PREPARED: {
						let t = this._bindings.runPrepared(e.data[0], e.data[1], e.data[2]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: qe.QUERY_RESULT,
								data: t
							},
							[t.buffer]
						);
						break;
					}
					case se.RUN_QUERY: {
						let t = this._bindings.runQuery(e.data[0], e.data[1]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: qe.QUERY_RESULT,
								data: t
							},
							[t.buffer]
						);
						break;
					}
					case se.SEND_PREPARED: {
						let t = this._bindings.sendPrepared(e.data[0], e.data[1], e.data[2]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: qe.QUERY_START,
								data: t
							},
							[t.buffer]
						);
						break;
					}
					case se.SEND_QUERY: {
						let t = this._bindings.sendQuery(e.data[0], e.data[1]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: qe.QUERY_START,
								data: t
							},
							[t.buffer]
						);
						break;
					}
					case se.FETCH_QUERY_RESULTS: {
						let t = this._bindings.fetchQueryResults(e.data);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: qe.QUERY_RESULT_CHUNK,
								data: t
							},
							[t.buffer]
						);
						break;
					}
					case se.GET_TABLE_NAMES: {
						let t = this._bindings.getTableNames(e.data[0], e.data[1]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: qe.TABLE_NAMES,
								data: t
							},
							[]
						);
						break;
					}
					case se.GLOB_FILE_INFOS: {
						let t = this._bindings.globFiles(e.data);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: qe.FILE_INFOS,
								data: t
							},
							[]
						);
						break;
					}
					case se.REGISTER_FILE_URL:
						this._bindings.registerFileURL(e.data[0], e.data[1]), this.sendOK(e);
						break;
					case se.REGISTER_FILE_BUFFER:
						this._bindings.registerFileBuffer(e.data[0], e.data[1]), this.sendOK(e);
						break;
					case se.REGISTER_FILE_HANDLE:
						this._bindings.registerFileHandle(e.data[0], e.data[1]), this.sendOK(e);
						break;
					case se.COPY_FILE_TO_PATH:
						this._bindings.copyFileToPath(e.data[0], e.data[1]), this.sendOK(e);
						break;
					case se.COPY_FILE_TO_BUFFER: {
						let t = this._bindings.copyFileToBuffer(e.data);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: qe.FILE_BUFFER,
								data: t
							},
							[]
						);
						break;
					}
					case se.COLLECT_FILE_STATISTICS:
						this._bindings.collectFileStatistics(e.data[0], e.data[1]), this.sendOK(e);
						break;
					case se.EXPORT_FILE_STATISTICS: {
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: qe.FILE_STATISTICS,
								data: this._bindings.exportFileStatistics(e.data)
							},
							[]
						);
						break;
					}
					case se.INSERT_ARROW_FROM_IPC_STREAM: {
						this._bindings.insertArrowFromIPCStream(e.data[0], e.data[1], e.data[2]),
							this.sendOK(e);
						break;
					}
					case se.INSERT_CSV_FROM_PATH: {
						this._bindings.insertCSVFromPath(e.data[0], e.data[1], e.data[2]), this.sendOK(e);
						break;
					}
					case se.INSERT_JSON_FROM_PATH: {
						this._bindings.insertJSONFromPath(e.data[0], e.data[1], e.data[2]), this.sendOK(e);
						break;
					}
					case se.TOKENIZE: {
						let t = this._bindings.tokenize(e.data);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: qe.SCRIPT_TOKENS,
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
	var $m = {},
		vA = (function () {
			var r = $m.url;
			return function (e) {
				e = e || {};
				var t = typeof e != 'undefined' ? e : {},
					n,
					i;
				t.ready = new Promise(function (u, d) {
					(n = u), (i = d);
				});
				var s = {},
					o;
				for (o in t) t.hasOwnProperty(o) && (s[o] = t[o]);
				var a = [],
					l = './this.program',
					f = function (u, d) {
						throw d;
					},
					y = typeof window == 'object',
					F = typeof importScripts == 'function',
					E =
						typeof process == 'object' &&
						typeof process.versions == 'object' &&
						typeof process.versions.node == 'string',
					C = '';
				function we(u) {
					return t.locateFile ? t.locateFile(u, C) : C + u;
				}
				var me, kt, it, ns;
				function Re(u) {
					if (!(u instanceof ho)) {
						var d = u;
						gr('exiting due to exception: ' + d);
					}
				}
				var Kn, Zn;
				E
					? (F ? (C = mu().dirname(C) + '/') : (C = __dirname + '/'),
					  (me = function (d, h) {
							return (
								Kn || (Kn = Xd()),
								Zn || (Zn = mu()),
								(d = Zn.normalize(d)),
								Kn.readFileSync(d, h ? null : 'utf8')
							);
					  }),
					  (it = function (d) {
							var h = me(d, !0);
							return h.buffer || (h = new Uint8Array(h)), eo(h.buffer), h;
					  }),
					  (kt = function (d, h, m) {
							Kn || (Kn = Xd()),
								Zn || (Zn = mu()),
								(d = Zn.normalize(d)),
								Kn.readFile(d, function (v, R) {
									v ? m(v) : h(R.buffer);
								});
					  }),
					  process.argv.length > 1 && (l = process.argv[1].replace(/\\/g, '/')),
					  (a = process.argv.slice(2)),
					  process.on('uncaughtException', function (u) {
							if (!(u instanceof ho)) throw u;
					  }),
					  process.on('unhandledRejection', function (u) {
							throw u;
					  }),
					  (f = function (u, d) {
							if (Tu()) throw ((process.exitCode = u), d);
							Re(d), process.exit(u);
					  }),
					  (t.inspect = function () {
							return '[Emscripten Module object]';
					  }))
					: (y || F) &&
					  (F
							? (C = self.location.href)
							: typeof document != 'undefined' &&
							  document.currentScript &&
							  (C = document.currentScript.src),
					  r && (C = r),
					  C.indexOf('blob:') !== 0
							? (C = C.substr(0, C.replace(/[?#].*/, '').lastIndexOf('/') + 1))
							: (C = ''),
					  (me = function (u) {
							var d = new XMLHttpRequest();
							return d.open('GET', u, !1), d.send(null), d.responseText;
					  }),
					  F &&
							(it = function (u) {
								var d = new XMLHttpRequest();
								return (
									d.open('GET', u, !1),
									(d.responseType = 'arraybuffer'),
									d.send(null),
									new Uint8Array(d.response)
								);
							}),
					  (kt = function (u, d, h) {
							var m = new XMLHttpRequest();
							m.open('GET', u, !0),
								(m.responseType = 'arraybuffer'),
								(m.onload = function () {
									if (m.status == 200 || (m.status == 0 && m.response)) {
										d(m.response);
										return;
									}
									h();
								}),
								(m.onerror = h),
								m.send(null);
					  }),
					  (ns = function (u) {
							document.title = u;
					  }));
				var Xm = t.print || console.log.bind(console),
					gr = t.printErr || console.warn.bind(console);
				for (o in s) s.hasOwnProperty(o) && (t[o] = s[o]);
				(s = null),
					t.arguments && (a = t.arguments),
					t.thisProgram && (l = t.thisProgram),
					t.quit && (f = t.quit);
				var is;
				t.wasmBinary && (is = t.wasmBinary);
				var Qm = t.noExitRuntime || !0;
				typeof WebAssembly != 'object' && xt('no native wasm support detected');
				var Xs,
					bu = !1,
					Qs;
				function eo(u, d) {
					u || xt('Assertion failed: ' + d);
				}
				function eb(u) {
					var d = t['_' + u];
					return eo(d, 'Cannot call unknown function ' + u + ', make sure it is exported'), d;
				}
				function ie(u, d, h, m, v) {
					var R = {
						string: function (Ue) {
							var Ct = 0;
							if (Ue != null && Ue !== 0) {
								var Kt = (Ue.length << 2) + 1;
								(Ct = Mu(Kt)), gu(Ue, Ct, Kt);
							}
							return Ct;
						},
						array: function (Ue) {
							var Ct = Mu(Ue.length);
							return cf(Ue, Ct), Ct;
						}
					};
					function D(Ue) {
						return d === 'string' ? Xn(Ue) : d === 'boolean' ? Boolean(Ue) : Ue;
					}
					var A = eb(u),
						k = [],
						de = 0;
					if (m)
						for (var ce = 0; ce < m.length; ce++) {
							var _t = R[h[ce]];
							_t ? (de === 0 && (de = wf()), (k[ce] = _t(m[ce]))) : (k[ce] = m[ce]);
						}
					var be = A.apply(null, k);
					function mt(Ue) {
						return de !== 0 && Sf(de), D(Ue);
					}
					return (be = mt(be)), be;
				}
				var of = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : void 0;
				function af(u, d, h) {
					for (var m = d + h, v = d; u[v] && !(v >= m); ) ++v;
					if (v - d > 16 && u.subarray && of) return of.decode(u.subarray(d, v));
					for (var R = ''; d < v; ) {
						var D = u[d++];
						if (!(D & 128)) {
							R += String.fromCharCode(D);
							continue;
						}
						var A = u[d++] & 63;
						if ((D & 224) == 192) {
							R += String.fromCharCode(((D & 31) << 6) | A);
							continue;
						}
						var k = u[d++] & 63;
						if (
							((D & 240) == 224
								? (D = ((D & 15) << 12) | (A << 6) | k)
								: (D = ((D & 7) << 18) | (A << 12) | (k << 6) | (u[d++] & 63)),
							D < 65536)
						)
							R += String.fromCharCode(D);
						else {
							var de = D - 65536;
							R += String.fromCharCode(55296 | (de >> 10), 56320 | (de & 1023));
						}
					}
					return R;
				}
				function Xn(u, d) {
					return u ? af(Lr, u, d) : '';
				}
				function uf(u, d, h, m) {
					if (!(m > 0)) return 0;
					for (var v = h, R = h + m - 1, D = 0; D < u.length; ++D) {
						var A = u.charCodeAt(D);
						if (A >= 55296 && A <= 57343) {
							var k = u.charCodeAt(++D);
							A = (65536 + ((A & 1023) << 10)) | (k & 1023);
						}
						if (A <= 127) {
							if (h >= R) break;
							d[h++] = A;
						} else if (A <= 2047) {
							if (h + 1 >= R) break;
							(d[h++] = 192 | (A >> 6)), (d[h++] = 128 | (A & 63));
						} else if (A <= 65535) {
							if (h + 2 >= R) break;
							(d[h++] = 224 | (A >> 12)),
								(d[h++] = 128 | ((A >> 6) & 63)),
								(d[h++] = 128 | (A & 63));
						} else {
							if (h + 3 >= R) break;
							(d[h++] = 240 | (A >> 18)),
								(d[h++] = 128 | ((A >> 12) & 63)),
								(d[h++] = 128 | ((A >> 6) & 63)),
								(d[h++] = 128 | (A & 63));
						}
					}
					return (d[h] = 0), h - v;
				}
				function gu(u, d, h) {
					return uf(u, Lr, d, h);
				}
				function tb(u) {
					for (var d = 0, h = 0; h < u.length; ++h) {
						var m = u.charCodeAt(h);
						m >= 55296 &&
							m <= 57343 &&
							(m = (65536 + ((m & 1023) << 10)) | (u.charCodeAt(++h) & 1023)),
							m <= 127 ? ++d : m <= 2047 ? (d += 2) : m <= 65535 ? (d += 3) : (d += 4);
					}
					return d;
				}
				function cf(u, d) {
					Qn.set(u, d);
				}
				function rb(u, d, h) {
					for (var m = 0; m < u.length; ++m) Qn[d++ >> 0] = u.charCodeAt(m);
					h || (Qn[d >> 0] = 0);
				}
				function nb(u, d) {
					return u % d > 0 && (u += d - (u % d)), u;
				}
				var lf, Qn, Lr, ss, df, L, ib, sb, ob;
				function ff(u) {
					(lf = u),
						(t.HEAP8 = Qn = new Int8Array(u)),
						(t.HEAP16 = ss = new Int16Array(u)),
						(t.HEAP32 = L = new Int32Array(u)),
						(t.HEAPU8 = Lr = new Uint8Array(u)),
						(t.HEAPU16 = df = new Uint16Array(u)),
						(t.HEAPU32 = ib = new Uint32Array(u)),
						(t.HEAPF32 = sb = new Float32Array(u)),
						(t.HEAPF64 = ob = new Float64Array(u));
				}
				var SA = t.INITIAL_MEMORY || 16777216,
					vu,
					hf = [],
					pf = [],
					ab = [],
					yf = [],
					ub = !1,
					cb = !1,
					lb = 0;
				function Tu() {
					return Qm || lb > 0;
				}
				function db() {
					if (t.preRun)
						for (typeof t.preRun == 'function' && (t.preRun = [t.preRun]); t.preRun.length; )
							_b(t.preRun.shift());
					to(hf);
				}
				function fb() {
					(ub = !0), to(pf);
				}
				function hb() {
					to(ab);
				}
				function pb() {
					cb = !0;
				}
				function yb() {
					if (t.postRun)
						for (typeof t.postRun == 'function' && (t.postRun = [t.postRun]); t.postRun.length; )
							bb(t.postRun.shift());
					to(yf);
				}
				function _b(u) {
					hf.unshift(u);
				}
				function mb(u) {
					pf.unshift(u);
				}
				function bb(u) {
					yf.unshift(u);
				}
				var Bn = 0,
					Iu = null,
					os = null;
				function gb(u) {
					Bn++, t.monitorRunDependencies && t.monitorRunDependencies(Bn);
				}
				function vb(u) {
					if (
						(Bn--,
						t.monitorRunDependencies && t.monitorRunDependencies(Bn),
						Bn == 0 && (Iu !== null && (clearInterval(Iu), (Iu = null)), os))
					) {
						var d = os;
						(os = null), d();
					}
				}
				(t.preloadedImages = {}), (t.preloadedAudios = {});
				function xt(u) {
					t.onAbort && t.onAbort(u),
						(u = 'Aborted(' + u + ')'),
						gr(u),
						(bu = !0),
						(Qs = 1),
						(u += '. Build with -s ASSERTIONS=1 for more info.');
					var d = new WebAssembly.RuntimeError(u);
					throw (i(d), d);
				}
				var Tb = 'data:application/octet-stream;base64,';
				function _f(u) {
					return u.startsWith(Tb);
				}
				var pt;
				t.locateFile
					? ((pt = './duckdb-wasm-next.wasm'), _f(pt) || (pt = we(pt)))
					: (pt = new URL('duckdb_wasm.wasm', $m.url).toString());
				function mf(u) {
					try {
						if (u == pt && is) return new Uint8Array(is);
						if (it) return it(u);
						throw 'both async and sync fetching of the wasm failed';
					} catch (d) {
						xt(d);
					}
				}
				function Ib() {
					return !is && (y || F) && typeof fetch == 'function'
						? fetch(pt, { credentials: 'same-origin' })
								.then(function (u) {
									if (!u.ok) throw "failed to load wasm binary file at '" + pt + "'";
									return u.arrayBuffer();
								})
								.catch(function () {
									return mf(pt);
								})
						: Promise.resolve().then(function () {
								return mf(pt);
						  });
				}
				function Bb() {
					var u = { a: Lg };
					function d(D, A) {
						var k = D.exports;
						(t.asm = k),
							(Xs = t.asm.fa),
							ff(Xs.buffer),
							(vu = t.asm.ia),
							mb(t.asm.ga),
							vb('wasm-instantiate');
					}
					gb('wasm-instantiate');
					function h(D) {
						d(D.instance);
					}
					function m(D) {
						return Ib()
							.then(function (A) {
								return WebAssembly.instantiate(A, u);
							})
							.then(function (A) {
								return A;
							})
							.then(D, function (A) {
								gr('failed to asynchronously prepare wasm: ' + A), xt(A);
							});
					}
					function v() {
						return !is &&
							typeof WebAssembly.instantiateStreaming == 'function' &&
							!_f(pt) &&
							typeof fetch == 'function'
							? fetch(pt, { credentials: 'same-origin' }).then(function (D) {
									var A = WebAssembly.instantiateStreaming(D, u);
									return A.then(h, function (k) {
										return (
											gr('wasm streaming compile failed: ' + k),
											gr('falling back to ArrayBuffer instantiation'),
											m(h)
										);
									});
							  })
							: m(h);
					}
					if (t.instantiateWasm)
						try {
							var R = t.instantiateWasm(u, d);
							return R;
						} catch (D) {
							return gr('Module.instantiateWasm callback failed with error: ' + D), !1;
						}
					return v().catch(i), {};
				}
				function to(u) {
					for (; u.length > 0; ) {
						var d = u.shift();
						if (typeof d == 'function') {
							d(t);
							continue;
						}
						var h = d.func;
						typeof h == 'number'
							? d.arg === void 0
								? vu.get(h)()
								: vu.get(h)(d.arg)
							: h(d.arg === void 0 ? null : d.arg);
					}
				}
				function wb(u) {
					if (u instanceof ho || u == 'unwind') return Qs;
					f(1, u);
				}
				var Ge = {
					mappings: {},
					buffers: [null, [], []],
					printChar: function (u, d) {
						var h = Ge.buffers[u];
						d === 0 || d === 10 ? ((u === 1 ? Xm : gr)(af(h, 0)), (h.length = 0)) : h.push(d);
					},
					varargs: void 0,
					get: function () {
						Ge.varargs += 4;
						var u = L[(Ge.varargs - 4) >> 2];
						return u;
					},
					getStr: function (u) {
						var d = Xn(u);
						return d;
					},
					get64: function (u, d) {
						return u;
					}
				};
				function Sb(u, d, h, m, v) {}
				function Ab(u, d) {
					return (u = Ge.getStr(u)), Ge.doAccess(u, d);
				}
				function Db() {
					gr('missing function: $SOCKFS'), xt(-1);
				}
				function bf() {
					gr('missing function: $FS'), xt(-1);
				}
				function ei(u) {
					var d = Db.getSocket(u);
					if (!d) throw new bf.ErrnoError(8);
					return d;
				}
				function Fb(u) {
					return (L[Bf() >> 2] = u), u;
				}
				function Bu(u) {
					return (
						(u & 255) + '.' + ((u >> 8) & 255) + '.' + ((u >> 16) & 255) + '.' + ((u >> 24) & 255)
					);
				}
				function gf(u) {
					var d = '',
						h = 0,
						m = 0,
						v = 0,
						R = 0,
						D = 0,
						A = 0,
						k = [
							u[0] & 65535,
							u[0] >> 16,
							u[1] & 65535,
							u[1] >> 16,
							u[2] & 65535,
							u[2] >> 16,
							u[3] & 65535,
							u[3] >> 16
						],
						de = !0,
						ce = '';
					for (A = 0; A < 5; A++)
						if (k[A] !== 0) {
							de = !1;
							break;
						}
					if (de) {
						if (((ce = Bu(k[6] | (k[7] << 16))), k[5] === -1)) return (d = '::ffff:'), (d += ce), d;
						if (k[5] === 0)
							return (
								(d = '::'),
								ce === '0.0.0.0' && (ce = ''),
								ce === '0.0.0.1' && (ce = '1'),
								(d += ce),
								d
							);
					}
					for (h = 0; h < 8; h++)
						k[h] === 0 && (h - v > 1 && (D = 0), (v = h), D++), D > m && ((m = D), (R = h - m + 1));
					for (h = 0; h < 8; h++) {
						if (m > 1 && k[h] === 0 && h >= R && h < R + m) {
							h === R && ((d += ':'), R === 0 && (d += ':'));
							continue;
						}
						(d += Number(Ou(k[h] & 65535)).toString(16)), (d += h < 7 ? ':' : '');
					}
					return d;
				}
				function vf(u, d) {
					var h = ss[u >> 1],
						m = Ou(df[(u + 2) >> 1]),
						v;
					switch (h) {
						case 2:
							if (d !== 16) return { errno: 28 };
							(v = L[(u + 4) >> 2]), (v = Bu(v));
							break;
						case 10:
							if (d !== 28) return { errno: 28 };
							(v = [L[(u + 8) >> 2], L[(u + 12) >> 2], L[(u + 16) >> 2], L[(u + 20) >> 2]]),
								(v = gf(v));
							break;
						default:
							return { errno: 5 };
					}
					return { family: h, addr: v, port: m };
				}
				function Tf(u, d, h) {
					if (h && u === 0) return null;
					var m = vf(u, d);
					if (m.errno) throw new bf.ErrnoError(m.errno);
					return (m.addr = yt.lookup_addr(m.addr) || m.addr), m;
				}
				function Ob(u, d, h) {
					var m = ei(u),
						v = Tf(d, h);
					return m.sock_ops.bind(m, v.addr, v.port), 0;
				}
				function Mb(u, d, h) {
					var m = ei(u),
						v = Tf(d, h);
					return m.sock_ops.connect(m, v.addr, v.port), 0;
				}
				function Eb(u, d, h) {
					return (Ge.varargs = h), 0;
				}
				function Rb(u, d) {}
				function Ub(u, d, h, m) {}
				function Vb(u, d, h) {}
				function ro(u) {
					for (var d = u.split('.'), h = 0; h < 4; h++) {
						var m = Number(d[h]);
						if (isNaN(m)) return null;
						d[h] = m;
					}
					return (d[0] | (d[1] << 8) | (d[2] << 16) | (d[3] << 24)) >>> 0;
				}
				function no(u) {
					return parseInt(u);
				}
				function wu(u) {
					var d,
						h,
						m,
						v,
						R =
							/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
						D = [];
					if (!R.test(u)) return null;
					if (u === '::') return [0, 0, 0, 0, 0, 0, 0, 0];
					for (
						u.startsWith('::') ? (u = u.replace('::', 'Z:')) : (u = u.replace('::', ':Z:')),
							u.indexOf('.') > 0
								? ((u = u.replace(new RegExp('[.]', 'g'), ':')),
								  (d = u.split(':')),
								  (d[d.length - 4] = no(d[d.length - 4]) + no(d[d.length - 3]) * 256),
								  (d[d.length - 3] = no(d[d.length - 2]) + no(d[d.length - 1]) * 256),
								  (d = d.slice(0, d.length - 2)))
								: (d = u.split(':')),
							m = 0,
							v = 0,
							h = 0;
						h < d.length;
						h++
					)
						if (typeof d[h] == 'string')
							if (d[h] === 'Z') {
								for (v = 0; v < 8 - d.length + 1; v++) D[h + v] = 0;
								m = v - 1;
							} else D[h + m] = lo(parseInt(d[h], 16));
						else D[h + m] = d[h];
					return [
						(D[1] << 16) | D[0],
						(D[3] << 16) | D[2],
						(D[5] << 16) | D[4],
						(D[7] << 16) | D[6]
					];
				}
				function If(u, d) {
					Lr.fill(0, u, u + d);
				}
				function Su(u, d, h, m, v) {
					switch (d) {
						case 2:
							(h = ro(h)),
								If(u, 16),
								v && (L[v >> 2] = 16),
								(ss[u >> 1] = d),
								(L[(u + 4) >> 2] = h),
								(ss[(u + 2) >> 1] = lo(m));
							break;
						case 10:
							(h = wu(h)),
								If(u, 28),
								v && (L[v >> 2] = 28),
								(L[u >> 2] = d),
								(L[(u + 8) >> 2] = h[0]),
								(L[(u + 12) >> 2] = h[1]),
								(L[(u + 16) >> 2] = h[2]),
								(L[(u + 20) >> 2] = h[3]),
								(ss[(u + 2) >> 1] = lo(m));
							break;
						default:
							return 5;
					}
					return 0;
				}
				var yt = {
					address_map: { id: 1, addrs: {}, names: {} },
					lookup_name: function (u) {
						var d = ro(u);
						if (d !== null || ((d = wu(u)), d !== null)) return u;
						var h;
						if (yt.address_map.addrs[u]) h = yt.address_map.addrs[u];
						else {
							var m = yt.address_map.id++;
							eo(m < 65535, 'exceeded max address mappings of 65535'),
								(h = '172.29.' + (m & 255) + '.' + (m & 65280)),
								(yt.address_map.names[h] = u),
								(yt.address_map.addrs[u] = h);
						}
						return h;
					},
					lookup_addr: function (u) {
						return yt.address_map.names[u] ? yt.address_map.names[u] : null;
					}
				};
				function Pb(u, d, h) {
					var m = ei(u);
					if (!m.daddr) return -53;
					var v = Su(d, m.family, yt.lookup_name(m.daddr), m.dport, h);
					return 0;
				}
				function Nb() {
					return 42;
				}
				function Lb(u, d, h, m, v) {
					var R = ei(u);
					return d === 1 && h === 4
						? ((L[m >> 2] = R.error), (L[v >> 2] = 4), (R.error = null), 0)
						: -50;
				}
				function kb(u, d, h) {
					return (Ge.varargs = h), 0;
				}
				function xb(u, d, h) {
					return 0;
				}
				function Cb(u, d) {
					return (u = Ge.getStr(u)), Ge.doMkdir(u, d);
				}
				function jb(u, d, h) {
					Ge.varargs = h;
				}
				function qb(u, d, h, m, v, R) {
					var D = ei(u),
						A = D.sock_ops.recvmsg(D, h);
					if (!A) return 0;
					if (v) var k = Su(v, D.family, yt.lookup_name(A.addr), A.port, R);
					return Lr.set(A.buffer, d), A.buffer.byteLength;
				}
				function Wb(u, d) {}
				function zb(u) {}
				function Hb(u, d, h, m, v, R) {}
				function Yb(u) {
					return -50;
				}
				function Gb(u, d) {
					return ei(u), -52;
				}
				function $b(u, d, h) {}
				function Jb(u, d) {}
				function Kb(u) {}
				function Zb(u, d) {
					xt(
						"To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
					);
				}
				function Xb(u, d) {
					xt(
						"To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
					);
				}
				function Qb() {
					xt('');
				}
				var Au;
				E
					? (Au = function () {
							var u = process.hrtime();
							return u[0] * 1e3 + u[1] / 1e6;
					  })
					: (Au = function () {
							return performance.now();
					  });
				var eg = !0;
				function tg(u, d) {
					var h;
					if (u === 0) h = Date.now();
					else if ((u === 1 || u === 4) && eg) h = Au();
					else return Fb(28), -1;
					return (L[d >> 2] = (h / 1e3) | 0), (L[(d + 4) >> 2] = ((h % 1e3) * 1e3 * 1e3) | 0), 0;
				}
				function rg(u, d) {
					return globalThis.DUCKDB_RUNTIME.createDirectory(t, u, d);
				}
				function ng(u, d) {
					return globalThis.DUCKDB_RUNTIME.checkDirectory(t, u, d);
				}
				function ig(u, d) {
					return globalThis.DUCKDB_RUNTIME.listDirectoryEntries(t, u, d);
				}
				function sg(u, d) {
					return globalThis.DUCKDB_RUNTIME.removeDirectory(t, u, d);
				}
				function og(u) {
					return globalThis.DUCKDB_RUNTIME.closeFile(t, u);
				}
				function ag(u, d) {
					return globalThis.DUCKDB_RUNTIME.checkFile(t, u, d);
				}
				function ug(u) {
					return globalThis.DUCKDB_RUNTIME.getLastFileModificationTime(t, u);
				}
				function cg(u, d, h, m) {
					return globalThis.DUCKDB_RUNTIME.moveFile(t, u, d, h, m);
				}
				function lg(u) {
					return globalThis.DUCKDB_RUNTIME.openFile(t, u);
				}
				function dg(u, d, h, m) {
					return globalThis.DUCKDB_RUNTIME.readFile(t, u, d, h, m);
				}
				function fg(u, d) {
					return globalThis.DUCKDB_RUNTIME.truncateFile(t, u, d);
				}
				function hg(u, d, h, m) {
					return globalThis.DUCKDB_RUNTIME.writeFile(t, u, d, h, m);
				}
				function pg(u, d) {
					return globalThis.DUCKDB_RUNTIME.glob(t, u, d);
				}
				function yg(u) {
					return globalThis.DUCKDB_RUNTIME.testPlatformFeature(t, u);
				}
				function _g() {
					return 2147483648;
				}
				function mg(u, d, h) {
					Lr.copyWithin(u, d, d + h);
				}
				function bg(u) {
					try {
						return Xs.grow((u - lf.byteLength + 65535) >>> 16), ff(Xs.buffer), 1;
					} catch (d) {}
				}
				function gg(u) {
					var d = Lr.length;
					u = u >>> 0;
					var h = 2147483648;
					if (u > h) return !1;
					for (var m = 1; m <= 4; m *= 2) {
						var v = d * (1 + 0.2 / m);
						v = Math.min(v, u + 100663296);
						var R = Math.min(h, nb(Math.max(u, v), 65536)),
							D = bg(R);
						if (D) return !0;
					}
					return !1;
				}
				var Du = {};
				function vg() {
					return l || './this.program';
				}
				function as() {
					if (!as.strings) {
						var u =
								(
									(typeof navigator == 'object' && navigator.languages && navigator.languages[0]) ||
									'C'
								).replace('-', '_') + '.UTF-8',
							d = {
								USER: 'web_user',
								LOGNAME: 'web_user',
								PATH: '/',
								PWD: '/',
								HOME: '/home/web_user',
								LANG: u,
								_: vg()
							};
						for (var h in Du) Du[h] === void 0 ? delete d[h] : (d[h] = Du[h]);
						var m = [];
						for (var h in d) m.push(h + '=' + d[h]);
						as.strings = m;
					}
					return as.strings;
				}
				function Tg(u, d) {
					var h = 0;
					return (
						as().forEach(function (m, v) {
							var R = d + h;
							(L[(u + v * 4) >> 2] = R), rb(m, R), (h += m.length + 1);
						}),
						0
					);
				}
				function Ig(u, d) {
					var h = as();
					L[u >> 2] = h.length;
					var m = 0;
					return (
						h.forEach(function (v) {
							m += v.length + 1;
						}),
						(L[d >> 2] = m),
						0
					);
				}
				function Bg(u) {
					return 0;
				}
				function wg(u, d) {
					var h = u == 1 || u == 2 ? 2 : xt();
					return (Qn[d >> 0] = h), 0;
				}
				function Sg(u, d, h, m, v, R) {
					var D = Ge.getStreamFromFD(u),
						A = Ge.doReadv(D, d, h, m);
					return (L[R >> 2] = A), 0;
				}
				function Ag(u, d, h, m, v, R) {
					var D = Ge.getStreamFromFD(u),
						A = Ge.doWritev(D, d, h, m);
					return (L[R >> 2] = A), 0;
				}
				function Dg(u, d, h, m) {
					var v = Ge.getStreamFromFD(u),
						R = Ge.doReadv(v, d, h);
					return (L[m >> 2] = R), 0;
				}
				function Fg(u, d, h, m, v) {}
				function Og(u) {
					var d = Ge.getStreamFromFD(u);
					return d.stream_ops && d.stream_ops.fsync ? -d.stream_ops.fsync(d) : 0;
				}
				function Mg(u, d, h, m) {
					for (var v = 0, R = 0; R < h; R++) {
						for (var D = L[(d + R * 8) >> 2], A = L[(d + (R * 8 + 4)) >> 2], k = 0; k < A; k++)
							Ge.printChar(u, Lr[D + k]);
						v += A;
					}
					return (L[m >> 2] = v), 0;
				}
				function Eg(u, d, h, m) {
					var v = 0,
						R = 0,
						D = 0,
						A = 0,
						k = 0,
						de = 0,
						ce;
					function _t(be, mt, Ue, Ct, Kt, us) {
						var B, x, ue, le;
						return (
							(x = be === 10 ? 28 : 16),
							(Kt = be === 10 ? gf(Kt) : Bu(Kt)),
							(B = Eu(x)),
							(le = Su(B, be, Kt, us)),
							eo(!le),
							(ue = Eu(32)),
							(L[(ue + 4) >> 2] = be),
							(L[(ue + 8) >> 2] = mt),
							(L[(ue + 12) >> 2] = Ue),
							(L[(ue + 24) >> 2] = Ct),
							(L[(ue + 20) >> 2] = B),
							be === 10 ? (L[(ue + 16) >> 2] = 28) : (L[(ue + 16) >> 2] = 16),
							(L[(ue + 28) >> 2] = 0),
							ue
						);
					}
					if (
						(h &&
							((D = L[h >> 2]),
							(A = L[(h + 4) >> 2]),
							(k = L[(h + 8) >> 2]),
							(de = L[(h + 12) >> 2])),
						k && !de && (de = k === 2 ? 17 : 6),
						!k && de && (k = de === 17 ? 2 : 1),
						de === 0 && (de = 6),
						k === 0 && (k = 1),
						!u && !d)
					)
						return -2;
					if (D & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32) || (h !== 0 && L[h >> 2] & 2 && !u)) return -1;
					if (D & 32) return -2;
					if (k !== 0 && k !== 1 && k !== 2) return -7;
					if (A !== 0 && A !== 2 && A !== 10) return -6;
					if (d && ((d = Xn(d)), (R = parseInt(d, 10)), isNaN(R))) return D & 1024 ? -2 : -8;
					if (!u)
						return (
							A === 0 && (A = 2),
							(D & 1) == 0 && (A === 2 ? (v = co(2130706433)) : (v = [0, 0, 0, 1])),
							(ce = _t(A, k, de, null, v, R)),
							(L[m >> 2] = ce),
							0
						);
					if (((u = Xn(u)), (v = ro(u)), v !== null))
						if (A === 0 || A === 2) A = 2;
						else if (A === 10 && D & 8) (v = [0, 0, co(65535), v]), (A = 10);
						else return -2;
					else if (((v = wu(u)), v !== null))
						if (A === 0 || A === 10) A = 10;
						else return -2;
					return v != null
						? ((ce = _t(A, k, de, u, v, R)), (L[m >> 2] = ce), 0)
						: D & 4
						? -2
						: ((u = yt.lookup_name(u)),
						  (v = ro(u)),
						  A === 0 ? (A = 2) : A === 10 && (v = [0, 0, co(65535), v]),
						  (ce = _t(A, k, de, null, v, R)),
						  (L[m >> 2] = ce),
						  0);
				}
				function Rg() {
					if (typeof crypto == 'object' && typeof crypto.getRandomValues == 'function') {
						var u = new Uint8Array(1);
						return function () {
							return crypto.getRandomValues(u), u[0];
						};
					} else if (E)
						try {
							var d = Uv('crypto');
							return function () {
								return d.randomBytes(1)[0];
							};
						} catch (h) {}
					return function () {
						xt('randomDevice');
					};
				}
				function io(u, d) {
					io.randomDevice || (io.randomDevice = Rg());
					for (var h = 0; h < d; h++) Qn[(u + h) >> 0] = io.randomDevice();
					return 0;
				}
				function Ug(u, d, h, m, v, R, D) {
					var A = vf(u, d);
					if (A.errno) return -6;
					var k = A.port,
						de = A.addr,
						ce = !1;
					if (h && m) {
						var _t;
						if (D & 1 || !(_t = yt.lookup_addr(de))) {
							if (D & 8) return -2;
						} else de = _t;
						var be = gu(de, h, m);
						be + 1 >= m && (ce = !0);
					}
					if (v && R) {
						k = '' + k;
						var be = gu(k, v, R);
						be + 1 >= R && (ce = !0);
					}
					return ce ? -12 : 0;
				}
				function so(u) {
					return u % 4 == 0 && (u % 100 != 0 || u % 400 == 0);
				}
				function Fu(u, d) {
					for (var h = 0, m = 0; m <= d; h += u[m++]);
					return h;
				}
				var oo = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
					ao = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
				function uo(u, d) {
					for (var h = new Date(u.getTime()); d > 0; ) {
						var m = so(h.getFullYear()),
							v = h.getMonth(),
							R = (m ? oo : ao)[v];
						if (d > R - h.getDate())
							(d -= R - h.getDate() + 1),
								h.setDate(1),
								v < 11 ? h.setMonth(v + 1) : (h.setMonth(0), h.setFullYear(h.getFullYear() + 1));
						else return h.setDate(h.getDate() + d), h;
					}
					return h;
				}
				function Vg(u, d, h, m) {
					var v = L[(m + 40) >> 2],
						R = {
							tm_sec: L[m >> 2],
							tm_min: L[(m + 4) >> 2],
							tm_hour: L[(m + 8) >> 2],
							tm_mday: L[(m + 12) >> 2],
							tm_mon: L[(m + 16) >> 2],
							tm_year: L[(m + 20) >> 2],
							tm_wday: L[(m + 24) >> 2],
							tm_yday: L[(m + 28) >> 2],
							tm_isdst: L[(m + 32) >> 2],
							tm_gmtoff: L[(m + 36) >> 2],
							tm_zone: v ? Xn(v) : ''
						},
						D = Xn(h),
						A = {
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
					for (var k in A) D = D.replace(new RegExp(k, 'g'), A[k]);
					var de = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
						ce = [
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
					function _t(B, x, ue) {
						for (var le = typeof B == 'number' ? B.toString() : B || ''; le.length < x; )
							le = ue[0] + le;
						return le;
					}
					function be(B, x) {
						return _t(B, x, '0');
					}
					function mt(B, x) {
						function ue(Zt) {
							return Zt < 0 ? -1 : Zt > 0 ? 1 : 0;
						}
						var le;
						return (
							(le = ue(B.getFullYear() - x.getFullYear())) === 0 &&
								(le = ue(B.getMonth() - x.getMonth())) === 0 &&
								(le = ue(B.getDate() - x.getDate())),
							le
						);
					}
					function Ue(B) {
						switch (B.getDay()) {
							case 0:
								return new Date(B.getFullYear() - 1, 11, 29);
							case 1:
								return B;
							case 2:
								return new Date(B.getFullYear(), 0, 3);
							case 3:
								return new Date(B.getFullYear(), 0, 2);
							case 4:
								return new Date(B.getFullYear(), 0, 1);
							case 5:
								return new Date(B.getFullYear() - 1, 11, 31);
							case 6:
								return new Date(B.getFullYear() - 1, 11, 30);
						}
					}
					function Ct(B) {
						var x = uo(new Date(B.tm_year + 1900, 0, 1), B.tm_yday),
							ue = new Date(x.getFullYear(), 0, 4),
							le = new Date(x.getFullYear() + 1, 0, 4),
							Zt = Ue(ue),
							kr = Ue(le);
						return mt(Zt, x) <= 0
							? mt(kr, x) <= 0
								? x.getFullYear() + 1
								: x.getFullYear()
							: x.getFullYear() - 1;
					}
					var Kt = {
						'%a': function (B) {
							return de[B.tm_wday].substring(0, 3);
						},
						'%A': function (B) {
							return de[B.tm_wday];
						},
						'%b': function (B) {
							return ce[B.tm_mon].substring(0, 3);
						},
						'%B': function (B) {
							return ce[B.tm_mon];
						},
						'%C': function (B) {
							var x = B.tm_year + 1900;
							return be((x / 100) | 0, 2);
						},
						'%d': function (B) {
							return be(B.tm_mday, 2);
						},
						'%e': function (B) {
							return _t(B.tm_mday, 2, ' ');
						},
						'%g': function (B) {
							return Ct(B).toString().substring(2);
						},
						'%G': function (B) {
							return Ct(B);
						},
						'%H': function (B) {
							return be(B.tm_hour, 2);
						},
						'%I': function (B) {
							var x = B.tm_hour;
							return x == 0 ? (x = 12) : x > 12 && (x -= 12), be(x, 2);
						},
						'%j': function (B) {
							return be(B.tm_mday + Fu(so(B.tm_year + 1900) ? oo : ao, B.tm_mon - 1), 3);
						},
						'%m': function (B) {
							return be(B.tm_mon + 1, 2);
						},
						'%M': function (B) {
							return be(B.tm_min, 2);
						},
						'%n': function () {
							return `
`;
						},
						'%p': function (B) {
							return B.tm_hour >= 0 && B.tm_hour < 12 ? 'AM' : 'PM';
						},
						'%S': function (B) {
							return be(B.tm_sec, 2);
						},
						'%t': function () {
							return '	';
						},
						'%u': function (B) {
							return B.tm_wday || 7;
						},
						'%U': function (B) {
							var x = new Date(B.tm_year + 1900, 0, 1),
								ue = x.getDay() === 0 ? x : uo(x, 7 - x.getDay()),
								le = new Date(B.tm_year + 1900, B.tm_mon, B.tm_mday);
							if (mt(ue, le) < 0) {
								var Zt = Fu(so(le.getFullYear()) ? oo : ao, le.getMonth() - 1) - 31,
									kr = 31 - ue.getDate(),
									wn = kr + Zt + le.getDate();
								return be(Math.ceil(wn / 7), 2);
							}
							return mt(ue, x) === 0 ? '01' : '00';
						},
						'%V': function (B) {
							var x = new Date(B.tm_year + 1900, 0, 4),
								ue = new Date(B.tm_year + 1901, 0, 4),
								le = Ue(x),
								Zt = Ue(ue),
								kr = uo(new Date(B.tm_year + 1900, 0, 1), B.tm_yday);
							if (mt(kr, le) < 0) return '53';
							if (mt(Zt, kr) <= 0) return '01';
							var wn;
							return (
								le.getFullYear() < B.tm_year + 1900
									? (wn = B.tm_yday + 32 - le.getDate())
									: (wn = B.tm_yday + 1 - le.getDate()),
								be(Math.ceil(wn / 7), 2)
							);
						},
						'%w': function (B) {
							return B.tm_wday;
						},
						'%W': function (B) {
							var x = new Date(B.tm_year, 0, 1),
								ue = x.getDay() === 1 ? x : uo(x, x.getDay() === 0 ? 1 : 7 - x.getDay() + 1),
								le = new Date(B.tm_year + 1900, B.tm_mon, B.tm_mday);
							if (mt(ue, le) < 0) {
								var Zt = Fu(so(le.getFullYear()) ? oo : ao, le.getMonth() - 1) - 31,
									kr = 31 - ue.getDate(),
									wn = kr + Zt + le.getDate();
								return be(Math.ceil(wn / 7), 2);
							}
							return mt(ue, x) === 0 ? '01' : '00';
						},
						'%y': function (B) {
							return (B.tm_year + 1900).toString().substring(2);
						},
						'%Y': function (B) {
							return B.tm_year + 1900;
						},
						'%z': function (B) {
							var x = B.tm_gmtoff,
								ue = x >= 0;
							return (
								(x = Math.abs(x) / 60),
								(x = (x / 60) * 100 + (x % 60)),
								(ue ? '+' : '-') + String('0000' + x).slice(-4)
							);
						},
						'%Z': function (B) {
							return B.tm_zone;
						},
						'%%': function () {
							return '%';
						}
					};
					for (var k in Kt) D.includes(k) && (D = D.replace(new RegExp(k, 'g'), Kt[k](R)));
					var us = Ng(D, !1);
					return us.length > d ? 0 : (cf(us, u), us.length - 1);
				}
				function Pg(u, d, h, m) {
					return Vg(u, d, h, m);
				}
				function Ng(u, d, h) {
					var m = h > 0 ? h : tb(u) + 1,
						v = new Array(m),
						R = uf(u, v, 0, v.length);
					return d && (v.length = R), v;
				}
				var Lg = {
						X: Sb,
						N: Ab,
						Z: Ob,
						Y: Mb,
						a: Eb,
						P: Rb,
						O: Ub,
						L: Vb,
						T: Pb,
						i: Nb,
						W: Lb,
						q: kb,
						H: xb,
						M: Cb,
						f: jb,
						U: qb,
						J: Wb,
						j: zb,
						V: Hb,
						_: Yb,
						$: Gb,
						m: $b,
						l: Jb,
						k: Kb,
						ba: Zb,
						aa: Xb,
						c: Qb,
						o: tg,
						B: rg,
						C: ng,
						y: ig,
						z: sg,
						h: og,
						w: ag,
						E: ug,
						x: cg,
						G: lg,
						d: dg,
						D: fg,
						F: hg,
						v: pg,
						g: yg,
						r: _g,
						da: mg,
						ea: gg,
						I: Tg,
						Q: Ig,
						b: Bg,
						ca: wg,
						t: Sg,
						s: Ag,
						p: Dg,
						u: Fg,
						K: Og,
						e: Mg,
						n: Eg,
						R: io,
						S: Ug,
						A: Pg
					},
					AA = Bb(),
					kg = (t.___wasm_call_ctors = function () {
						return (kg = t.___wasm_call_ctors = t.asm.ga).apply(null, arguments);
					}),
					xg = (t._main = function () {
						return (xg = t._main = t.asm.ha).apply(null, arguments);
					}),
					Cg = (t._duckdb_web_fs_glob_add_path = function () {
						return (Cg = t._duckdb_web_fs_glob_add_path = t.asm.ja).apply(null, arguments);
					}),
					jg = (t._duckdb_web_clear_response = function () {
						return (jg = t._duckdb_web_clear_response = t.asm.ka).apply(null, arguments);
					}),
					qg = (t._duckdb_web_fail_with = function () {
						return (qg = t._duckdb_web_fail_with = t.asm.la).apply(null, arguments);
					}),
					Wg = (t._duckdb_web_reset = function () {
						return (Wg = t._duckdb_web_reset = t.asm.ma).apply(null, arguments);
					}),
					zg = (t._duckdb_web_connect = function () {
						return (zg = t._duckdb_web_connect = t.asm.na).apply(null, arguments);
					}),
					Hg = (t._duckdb_web_disconnect = function () {
						return (Hg = t._duckdb_web_disconnect = t.asm.oa).apply(null, arguments);
					}),
					Yg = (t._duckdb_web_flush_files = function () {
						return (Yg = t._duckdb_web_flush_files = t.asm.pa).apply(null, arguments);
					}),
					Gg = (t._duckdb_web_flush_file = function () {
						return (Gg = t._duckdb_web_flush_file = t.asm.qa).apply(null, arguments);
					}),
					$g = (t._duckdb_web_open = function () {
						return ($g = t._duckdb_web_open = t.asm.ra).apply(null, arguments);
					}),
					Jg = (t._duckdb_web_collect_file_stats = function () {
						return (Jg = t._duckdb_web_collect_file_stats = t.asm.sa).apply(null, arguments);
					}),
					Kg = (t._duckdb_web_export_file_stats = function () {
						return (Kg = t._duckdb_web_export_file_stats = t.asm.ta).apply(null, arguments);
					}),
					Zg = (t._duckdb_web_fs_drop_file = function () {
						return (Zg = t._duckdb_web_fs_drop_file = t.asm.ua).apply(null, arguments);
					}),
					Xg = (t._duckdb_web_fs_drop_files = function () {
						return (Xg = t._duckdb_web_fs_drop_files = t.asm.va).apply(null, arguments);
					}),
					Qg = (t._duckdb_web_fs_glob_file_infos = function () {
						return (Qg = t._duckdb_web_fs_glob_file_infos = t.asm.wa).apply(null, arguments);
					}),
					ev = (t._duckdb_web_fs_get_file_info_by_id = function () {
						return (ev = t._duckdb_web_fs_get_file_info_by_id = t.asm.xa).apply(null, arguments);
					}),
					tv = (t._duckdb_web_fs_get_file_info_by_name = function () {
						return (tv = t._duckdb_web_fs_get_file_info_by_name = t.asm.ya).apply(null, arguments);
					}),
					rv = (t._duckdb_web_fs_set_file_descriptor = function () {
						return (rv = t._duckdb_web_fs_set_file_descriptor = t.asm.za).apply(null, arguments);
					}),
					nv = (t._duckdb_web_fs_register_file_url = function () {
						return (nv = t._duckdb_web_fs_register_file_url = t.asm.Aa).apply(null, arguments);
					}),
					iv = (t._duckdb_web_fs_register_file_buffer = function () {
						return (iv = t._duckdb_web_fs_register_file_buffer = t.asm.Ba).apply(null, arguments);
					}),
					sv = (t._duckdb_web_copy_file_to_buffer = function () {
						return (sv = t._duckdb_web_copy_file_to_buffer = t.asm.Ca).apply(null, arguments);
					}),
					ov = (t._duckdb_web_copy_file_to_path = function () {
						return (ov = t._duckdb_web_copy_file_to_path = t.asm.Da).apply(null, arguments);
					}),
					av = (t._duckdb_web_get_version = function () {
						return (av = t._duckdb_web_get_version = t.asm.Ea).apply(null, arguments);
					}),
					uv = (t._duckdb_web_get_feature_flags = function () {
						return (uv = t._duckdb_web_get_feature_flags = t.asm.Fa).apply(null, arguments);
					}),
					cv = (t._duckdb_web_tokenize = function () {
						return (cv = t._duckdb_web_tokenize = t.asm.Ga).apply(null, arguments);
					}),
					lv = (t._duckdb_web_prepared_create = function () {
						return (lv = t._duckdb_web_prepared_create = t.asm.Ha).apply(null, arguments);
					}),
					dv = (t._duckdb_web_prepared_close = function () {
						return (dv = t._duckdb_web_prepared_close = t.asm.Ia).apply(null, arguments);
					}),
					fv = (t._duckdb_web_prepared_run = function () {
						return (fv = t._duckdb_web_prepared_run = t.asm.Ja).apply(null, arguments);
					}),
					hv = (t._duckdb_web_prepared_send = function () {
						return (hv = t._duckdb_web_prepared_send = t.asm.Ka).apply(null, arguments);
					}),
					pv = (t._duckdb_web_query_run = function () {
						return (pv = t._duckdb_web_query_run = t.asm.La).apply(null, arguments);
					}),
					yv = (t._duckdb_web_query_send = function () {
						return (yv = t._duckdb_web_query_send = t.asm.Ma).apply(null, arguments);
					}),
					_v = (t._duckdb_web_query_fetch_results = function () {
						return (_v = t._duckdb_web_query_fetch_results = t.asm.Na).apply(null, arguments);
					}),
					mv = (t._duckdb_web_get_tablenames = function () {
						return (mv = t._duckdb_web_get_tablenames = t.asm.Oa).apply(null, arguments);
					}),
					bv = (t._duckdb_web_insert_arrow_from_ipc_stream = function () {
						return (bv = t._duckdb_web_insert_arrow_from_ipc_stream = t.asm.Pa).apply(
							null,
							arguments
						);
					}),
					gv = (t._duckdb_web_insert_csv_from_path = function () {
						return (gv = t._duckdb_web_insert_csv_from_path = t.asm.Qa).apply(null, arguments);
					}),
					vv = (t._duckdb_web_insert_json_from_path = function () {
						return (vv = t._duckdb_web_insert_json_from_path = t.asm.Ra).apply(null, arguments);
					}),
					Bf = (t.___errno_location = function () {
						return (Bf = t.___errno_location = t.asm.Sa).apply(null, arguments);
					}),
					co = (t._htonl = function () {
						return (co = t._htonl = t.asm.Ta).apply(null, arguments);
					}),
					Ou = (t._ntohs = function () {
						return (Ou = t._ntohs = t.asm.Ua).apply(null, arguments);
					}),
					lo = (t._htons = function () {
						return (lo = t._htons = t.asm.Va).apply(null, arguments);
					}),
					wf = (t.stackSave = function () {
						return (wf = t.stackSave = t.asm.Wa).apply(null, arguments);
					}),
					Sf = (t.stackRestore = function () {
						return (Sf = t.stackRestore = t.asm.Xa).apply(null, arguments);
					}),
					Mu = (t.stackAlloc = function () {
						return (Mu = t.stackAlloc = t.asm.Ya).apply(null, arguments);
					}),
					Eu = (t._malloc = function () {
						return (Eu = t._malloc = t.asm.Za).apply(null, arguments);
					}),
					Tv = (t._free = function () {
						return (Tv = t._free = t.asm._a).apply(null, arguments);
					});
				t.ccall = ie;
				var fo;
				function ho(u) {
					(this.name = 'ExitStatus'),
						(this.message = 'Program terminated with exit(' + u + ')'),
						(this.status = u);
				}
				var Iv = !1;
				os = function u() {
					fo || Ru(), fo || (os = u);
				};
				function Bv(u) {
					var d = t._main,
						h = 0,
						m = 0;
					try {
						var v = d(h, m);
						return wv(v, !0), v;
					} catch (R) {
						return wb(R);
					} finally {
						Iv = !0;
					}
				}
				function Ru(u) {
					if (((u = u || a), Bn > 0 || (db(), Bn > 0))) return;
					function d() {
						fo ||
							((fo = !0),
							(t.calledRun = !0),
							!bu &&
								(fb(),
								hb(),
								n(t),
								t.onRuntimeInitialized && t.onRuntimeInitialized(),
								Af && Bv(u),
								yb()));
					}
					t.setStatus
						? (t.setStatus('Running...'),
						  setTimeout(function () {
								setTimeout(function () {
									t.setStatus('');
								}, 1),
									d();
						  }, 1))
						: d();
				}
				t.run = Ru;
				function wv(u, d) {
					(Qs = u), Tu() || pb(), Sv(u);
				}
				function Sv(u) {
					(Qs = u), Tu() || (t.onExit && t.onExit(u), (bu = !0)), f(u, new ho(u));
				}
				if (t.preInit)
					for (typeof t.preInit == 'function' && (t.preInit = [t.preInit]); t.preInit.length > 0; )
						t.preInit.pop()();
				var Af = !0;
				return t.noInitialRun && (Af = !1), Ru(), e.ready;
			};
		})(),
		Gm = vA;
	var Qd = class {
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
					n = p.RecordBatchReader.from(t);
				return console.assert(n.isSync()), console.assert(n.isFile()), p.Table.from(n);
			}
			send(e) {
				let t = this._bindings.sendQuery(this._conn, e),
					n = new ef(this._bindings, this._conn, t),
					i = p.RecordBatchReader.from(n);
				return console.assert(i.isSync()), console.assert(i.isStream()), i;
			}
			getTableNames(e) {
				return this._bindings.getTableNames(this._conn, e);
			}
			prepare(e) {
				let t = this._bindings.createPrepared(this._conn, e);
				return new Jm(this._bindings, this._conn, t);
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
		ef = class {
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
		Jm = class {
			constructor(e, t, n) {
				(this.bindings = e), (this.connectionId = t), (this.statementId = n);
			}
			close() {
				this.bindings.closePrepared(this.connectionId, this.statementId);
			}
			query(...e) {
				let t = this.bindings.runPrepared(this.connectionId, this.statementId, e),
					n = p.RecordBatchReader.from(t);
				return console.assert(n.isSync()), console.assert(n.isFile()), p.Table.from(n);
			}
			send(...e) {
				let t = this.bindings.sendPrepared(this.connectionId, this.statementId, e),
					n = new ef(this.bindings, this.connectionId, t),
					i = p.RecordBatchReader.from(n);
				return console.assert(i.isSync()), console.assert(i.isStream()), i;
			}
		};
	var he = ((e) => ((e[(e.SUCCESS = 0)] = 'SUCCESS'), e))(he || {});
	function TA() {
		let r = new TextDecoder();
		return (e) => (
			typeof SharedArrayBuffer != 'undefined' &&
				e.buffer instanceof SharedArrayBuffer &&
				(e = new Uint8Array(e)),
			r.decode(e)
		);
	}
	var IA = TA();
	function Nr(r, e) {
		r.ccall('duckdb_web_fail_with', null, ['string'], [e]);
	}
	function rs(r, e, t) {
		let n = r.HEAPU8.subarray(e, e + t),
			i = new Uint8Array(new ArrayBuffer(n.byteLength));
		return i.set(n), i;
	}
	function te(r, e, t) {
		return IA(r.HEAPU8.subarray(e, e + t));
	}
	var lt = ((n) => (
		(n[(n.BUFFER = 0)] = 'BUFFER'), (n[(n.NATIVE = 1)] = 'NATIVE'), (n[(n.HTTP = 3)] = 'HTTP'), n
	))(lt || {});
	function ye(r, e, t, n) {
		let i = r.stackSave(),
			s = r.stackAlloc(3 * 8);
		t.unshift('number'), n.unshift(s), r.ccall(e, null, t, n);
		let o = r.HEAPF64[(s >> 3) + 0],
			a = r.HEAPF64[(s >> 3) + 1],
			l = r.HEAPF64[(s >> 3) + 2];
		return r.stackRestore(i), [o, a, l];
	}
	function Ee(r) {
		r.ccall('duckdb_web_clear_response', null, [], []);
	}
	var tf = class {
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
	var BA = new TextEncoder();
	var rf = class {
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
			let [t, n, i] = ye(this.mod, 'duckdb_web_open', ['string'], [JSON.stringify(e)]);
			if (t !== he.SUCCESS) throw new Error(te(this.mod, n, i));
			Ee(this.mod);
		}
		reset() {
			let [e, t, n] = ye(this.mod, 'duckdb_web_reset', [], []);
			if (e !== he.SUCCESS) throw new Error(te(this.mod, t, n));
			Ee(this.mod);
		}
		getVersion() {
			let [e, t, n] = ye(this.mod, 'duckdb_web_get_version', [], []);
			if (e !== he.SUCCESS) throw new Error(te(this.mod, t, n));
			let i = te(this.mod, t, n);
			return Ee(this.mod), i;
		}
		getFeatureFlags() {
			return this.mod.ccall('duckdb_web_get_feature_flags', 'number', [], []);
		}
		tokenize(e) {
			let [t, n, i] = ye(this.mod, 'duckdb_web_tokenize', ['string'], [e]);
			if (t !== he.SUCCESS) throw new Error(te(this.mod, n, i));
			let s = te(this.mod, n, i);
			return Ee(this.mod), JSON.parse(s);
		}
		connect() {
			let e = this.mod.ccall('duckdb_web_connect', 'number', [], []);
			return new Qd(this, e);
		}
		disconnect(e) {
			this.mod.ccall('duckdb_web_disconnect', null, ['number'], [e]);
		}
		runQuery(e, t) {
			let [n, i, s] = ye(this.mod, 'duckdb_web_query_run', ['number', 'string'], [e, t]);
			if (n !== he.SUCCESS) throw new Error(te(this.mod, i, s));
			let o = rs(this.mod, i, s);
			return Ee(this.mod), o;
		}
		sendQuery(e, t) {
			let [n, i, s] = ye(this.mod, 'duckdb_web_query_send', ['number', 'string'], [e, t]);
			if (n !== he.SUCCESS) throw new Error(te(this.mod, i, s));
			let o = rs(this.mod, i, s);
			return Ee(this.mod), o;
		}
		fetchQueryResults(e) {
			let [t, n, i] = ye(this.mod, 'duckdb_web_query_fetch_results', ['number'], [e]);
			if (t !== he.SUCCESS) throw new Error(te(this.mod, n, i));
			let s = rs(this.mod, n, i);
			return Ee(this.mod), s;
		}
		getTableNames(e, t) {
			let [n, i, s] = ye(this.mod, 'duckdb_web_get_tablenames', ['number', 'string'], [e, t]);
			if (n !== he.SUCCESS) throw new Error(te(this.mod, i, s));
			let o = te(this.mod, i, s);
			return Ee(this.mod), JSON.parse(o);
		}
		createPrepared(e, t) {
			let [n, i, s] = ye(this.mod, 'duckdb_web_prepared_create', ['number', 'string'], [e, t]);
			if (n !== he.SUCCESS) throw new Error(te(this.mod, i, s));
			return Ee(this.mod), i;
		}
		closePrepared(e, t) {
			let [n, i, s] = ye(this.mod, 'duckdb_web_prepared_close', ['number', 'number'], [e, t]);
			if (n !== he.SUCCESS) throw new Error(te(this.mod, i, s));
			Ee(this.mod);
		}
		runPrepared(e, t, n) {
			let [i, s, o] = ye(
				this.mod,
				'duckdb_web_prepared_run',
				['number', 'number', 'string'],
				[e, t, JSON.stringify(n)]
			);
			if (i !== he.SUCCESS) throw new Error(te(this.mod, s, o));
			let a = rs(this.mod, s, o);
			return Ee(this.mod), a;
		}
		sendPrepared(e, t, n) {
			let [i, s, o] = ye(
				this.mod,
				'duckdb_web_prepared_send',
				['number', 'number', 'string'],
				[e, t, JSON.stringify(n)]
			);
			if (i !== he.SUCCESS) throw new Error(te(this.mod, s, o));
			let a = rs(this.mod, s, o);
			return Ee(this.mod), a;
		}
		insertArrowFromIPCStream(e, t, n) {
			if (t.length == 0) return;
			let i = this.mod._malloc(t.length);
			this.mod.HEAPU8.subarray(i, i + t.length).set(t);
			let o = n ? JSON.stringify(n) : '',
				[a, l, f] = ye(
					this.mod,
					'duckdb_web_insert_arrow_from_ipc_stream',
					['number', 'number', 'number', 'string'],
					[e, i, t.length, o]
				);
			if (a !== he.SUCCESS) throw new Error(te(this.mod, l, f));
		}
		insertCSVFromPath(e, t, n) {
			if (n.columns !== void 0) {
				n.columnsFlat = [];
				for (let f in n.columns) n.columnsFlat.push(Zs(f, n.columns[f]));
			}
			let i = Sn({}, n);
			(i.columns = i.columnsFlat), delete i.columnsFlat;
			let s = JSON.stringify(i),
				[o, a, l] = ye(
					this.mod,
					'duckdb_web_insert_csv_from_path',
					['number', 'string', 'string'],
					[e, t, s]
				);
			if (o !== he.SUCCESS) throw new Error(te(this.mod, a, l));
		}
		insertJSONFromPath(e, t, n) {
			if (n.columns !== void 0) {
				n.columnsFlat = [];
				for (let f in n.columns) n.columnsFlat.push(Zs(f, n.columns[f]));
			}
			let i = Sn({}, n);
			(i.columns = i.columnsFlat), delete i.columnsFlat;
			let s = JSON.stringify(i),
				[o, a, l] = ye(
					this.mod,
					'duckdb_web_insert_json_from_path',
					['number', 'string', 'string'],
					[e, t, s]
				);
			if (o !== he.SUCCESS) throw new Error(te(this.mod, a, l));
		}
		globFiles(e) {
			let [t, n, i] = ye(this.mod, 'duckdb_web_fs_glob_file_infos', ['string'], [e]);
			if (t !== he.SUCCESS) throw new Error(te(this.mod, n, i));
			let s = te(this.mod, n, i);
			Ee(this.mod);
			let o = JSON.parse(s);
			return o == null ? [] : o;
		}
		registerFileURL(e, t) {
			t === void 0 && (t = e);
			let [n, i, s] = ye(this.mod, 'duckdb_web_fs_register_file_url', ['string', 'string'], [e, t]);
			if (n !== he.SUCCESS) throw new Error(te(this.mod, i, s));
			Ee(this.mod);
		}
		registerFileText(e, t) {
			let n = BA.encode(t);
			this.registerFileBuffer(e, n);
		}
		registerFileBuffer(e, t) {
			let n = this.mod._malloc(t.length);
			this.mod.HEAPU8.subarray(n, n + t.length).set(t);
			let [s, o, a] = ye(
				this.mod,
				'duckdb_web_fs_register_file_buffer',
				['string', 'number', 'number'],
				[e, n, t.length]
			);
			if (s !== he.SUCCESS) throw new Error(te(this.mod, o, a));
			Ee(this.mod);
		}
		registerFileHandle(e, t) {
			let [n, i, s] = ye(this.mod, 'duckdb_web_fs_register_file_url', ['string', 'string'], [e, e]);
			if (n !== he.SUCCESS) throw new Error(te(this.mod, i, s));
			if (
				(Ee(this.mod),
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
			let [e, t, n] = ye(this.mod, 'duckdb_web_fs_drop_files', [], []);
			if (e !== he.SUCCESS) throw new Error(te(this.mod, t, n));
			Ee(this.mod);
		}
		flushFiles() {
			this.mod.ccall('duckdb_web_flush_files', null, [], []);
		}
		copyFileToPath(e, t) {
			let [n, i, s] = ye(this.mod, 'duckdb_web_copy_file_to_path', ['string', 'string'], [e, t]);
			if (n !== he.SUCCESS) throw new Error(te(this.mod, i, s));
			Ee(this.mod);
		}
		copyFileToBuffer(e) {
			let [t, n, i] = ye(this.mod, 'duckdb_web_copy_file_to_buffer', ['string'], [e]);
			if (t !== he.SUCCESS) throw new Error(te(this.mod, n, i));
			let s = this.mod.HEAPU8.subarray(n, n + i),
				o = new Uint8Array(s.length);
			return o.set(s), Ee(this.mod), o;
		}
		collectFileStatistics(e, t) {
			let [n, i, s] = ye(this.mod, 'duckdb_web_collect_file_stats', ['string', 'boolean'], [e, t]);
			if (n !== he.SUCCESS) throw new Error(te(this.mod, i, s));
		}
		exportFileStatistics(e) {
			let [t, n, i] = ye(this.mod, 'duckdb_web_export_file_stats', ['string'], [e]);
			if (t !== he.SUCCESS) throw new Error(te(this.mod, n, i));
			return new tf(this.mod.HEAPU8.subarray(n, n + i));
		}
	};
	var nf = class extends rf {
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
	var sf = class extends nf {
		constructor(e, t, n, i = null) {
			super(e, t, n, i);
		}
		instantiateImpl(e) {
			return Gm(
				po(Sn({}, e), {
					instantiateWasm: this.instantiateWasm.bind(this),
					locateFile: this.locateFile.bind(this)
				})
			);
		}
	};
	var at = {
		fileInfoCache: new Map(),
		getFileInfo(r, e) {
			try {
				let t = at.fileInfoCache.get(e);
				if (t) return t;
				let [n, i, s] = ye(r, 'duckdb_web_fs_get_file_info_by_id', ['number'], [e]);
				if (n !== he.SUCCESS) return null;
				let o = te(r, i, s);
				Ee(r);
				let a = JSON.parse(o);
				if (a == null) return null;
				let l = po(Sn({}, a), { blob: null });
				return at.fileInfoCache.set(e, l), l;
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
				at.fileInfoCache.delete(e);
				let n = at.getFileInfo(r, e);
				switch (n == null ? void 0 : n.dataProtocol) {
					case lt.HTTP: {
						let i = null;
						try {
							let s = new XMLHttpRequest();
							s.open('HEAD', n.dataUrl, !1), s.setRequestHeader('Range', 'bytes=0-'), s.send(null);
							let o = s.getResponseHeader('Content-Length');
							if (s.status == 206 && o !== null) {
								let a = r._malloc(2 * 8);
								return (r.HEAPF64[(a >> 3) + 0] = +o), (r.HEAPF64[(a >> 3) + 1] = 0), a;
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
									a = new Uint8Array(s.response, 0, s.response.byteLength);
								r.HEAPU8.set(a, o);
								let l = r._malloc(2 * 8);
								return (
									(r.HEAPF64[(l >> 3) + 0] = s.response.byteLength),
									(r.HEAPF64[(l >> 3) + 1] = o),
									l
								);
							}
						}
						if (i != null) throw new Error(`Reading file ${n.fileName} failed with error: ${i}`);
						return 0;
					}
					case lt.NATIVE: {
						let i = (t = at._files) == null ? void 0 : t.get(n.fileName);
						if (i) {
							let a = r._malloc(2 * 8);
							return (r.HEAPF64[(a >> 3) + 0] = i.size), (r.HEAPF64[(a >> 3) + 1] = 0), a;
						}
						console.warn(`Buffering missing file: ${n.fileName}`);
						let s = r._malloc(2 * 8),
							o = r._malloc(1);
						return (r.HEAPF64[(s >> 3) + 0] = 1), (r.HEAPF64[(s >> 3) + 1] = o), s;
					}
				}
			} catch (n) {
				console.error(n.toString()), Nr(r, n.toString());
			}
			return 0;
		},
		glob: (r, e, t) => {
			try {
				let n = te(r, e, t);
				if (n.startsWith('http')) {
					let i = new XMLHttpRequest();
					if ((i.open('HEAD', n, !1), i.send(null), i.status != 200 && i.status !== 206)) {
						Nr(r, `HEAD request failed: ${n}`);
						return;
					}
					r.ccall('duckdb_web_fs_glob_add_path', null, ['string'], [n]);
				}
			} catch (n) {
				return Nr(r, n.toString()), 0;
			}
		},
		checkFile: (r, e, t) => {
			try {
				let n = te(r, e, t);
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
			let t = at.getFileInfo(r, e);
			switch ((at.fileInfoCache.delete(e), t == null ? void 0 : t.dataProtocol)) {
				case lt.HTTP:
					break;
				case lt.NATIVE:
					return;
			}
		},
		truncateFile: (r, e, t) => {
			let n = at.getFileInfo(r, e);
			switch (n == null ? void 0 : n.dataProtocol) {
				case lt.HTTP:
					Nr(r, 'Cannot truncate a http file');
					return;
				case lt.NATIVE:
					Nr(r, 'truncateFile not implemented');
					return;
			}
			return 0;
		},
		readFile(r, e, t, n, i) {
			var s;
			try {
				let o = at.getFileInfo(r, e);
				switch (o == null ? void 0 : o.dataProtocol) {
					case lt.HTTP: {
						if (!o.dataUrl) throw new Error(`Missing data URL for file ${e}`);
						try {
							let a = new XMLHttpRequest();
							if (
								(a.open('GET', o.dataUrl, !1),
								(a.responseType = 'arraybuffer'),
								a.setRequestHeader('Range', `bytes=${i}-${i + n - 1}`),
								a.send(null),
								a.status == 206 || (a.status == 200 && n == a.response.byteLength && i == 0))
							) {
								let l = new Uint8Array(a.response, 0, Math.min(a.response.byteLength, n));
								return r.HEAPU8.set(l, t), l.byteLength;
							} else
								throw a.status == 200
									? new Error(
											`Range request for ${o.dataUrl} did not return a partial response: ${a.status} "${a.statusText}"`
									  )
									: new Error(
											`Range request for ${o.dataUrl} did returned non-success status: ${a.status} "${a.statusText}"`
									  );
						} catch (a) {
							throw new Error(`Range request for ${o.dataUrl} failed with error: ${a}"`);
						}
					}
					case lt.NATIVE: {
						let a = (s = at._files) == null ? void 0 : s.get(o.fileName);
						if (!a) throw new Error(`No handle available for file: ${o.fileName}`);
						let l = a.slice(i, i + n),
							f = new Uint8Array(new FileReaderSync().readAsArrayBuffer(l));
						return r.HEAPU8.set(f, t), f.byteLength;
					}
				}
				return 0;
			} catch (o) {
				return Nr(r, o.toString()), 0;
			}
		},
		writeFile: (r, e, t, n, i) => {
			let s = at.getFileInfo(r, e);
			switch (s == null ? void 0 : s.dataProtocol) {
				case lt.HTTP:
					return Nr(r, 'Cannot write to HTTP file'), 0;
				case lt.NATIVE:
					return Nr(r, 'writefile not implemented'), 0;
			}
			return 0;
		},
		getLastFileModificationTime: (r, e) => {
			var n;
			let t = at.getFileInfo(r, e);
			switch (t == null ? void 0 : t.dataProtocol) {
				case lt.NATIVE: {
					if (!((n = at._files) == null ? void 0 : n.get(t.fileName)))
						throw Error(`No handle available for file: ${t.fileName}`);
					return 0;
				}
				case lt.HTTP:
					return new Date().getTime();
			}
			return 0;
		},
		checkDirectory: (r, e, t) => {
			let n = te(r, e, t);
			return console.log(`checkDirectory: ${n}`), !1;
		},
		createDirectory: (r, e, t) => {
			let n = te(r, e, t);
			console.log(`createDirectory: ${n}`);
		},
		removeDirectory: (r, e, t) => {
			let n = te(r, e, t);
			console.log(`removeDirectory: ${n}`);
		},
		listDirectoryEntries: (r, e, t) => {
			let n = te(r, e, t);
			return console.log(`listDirectoryEntries: ${n}`), !1;
		},
		moveFile: (r, e, t, n, i) => {},
		removeFile: (r, e, t) => {}
	};
	var Km = class extends Zd {
		postMessage(e, t) {
			globalThis.postMessage(e, t);
		}
		async instantiate(e, t) {
			return await new sf(this, at, e, t).instantiate();
		}
	};
	function Zm() {
		let r = new Km();
		globalThis.onmessage = async (e) => {
			await r.onMessage(e.data);
		};
	}
	Zm();
	return Pv(wA);
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
//# sourceMappingURL=duckdb-browser-next.worker.js.map
