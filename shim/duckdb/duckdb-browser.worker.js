var duckdb = (() => {
	var x1 = Object.create;
	var gs = Object.defineProperty,
		q1 = Object.defineProperties,
		W1 = Object.getOwnPropertyDescriptor,
		z1 = Object.getOwnPropertyDescriptors,
		H1 = Object.getOwnPropertyNames,
		s_ = Object.getOwnPropertySymbols,
		Y1 = Object.getPrototypeOf,
		o_ = Object.prototype.hasOwnProperty,
		G1 = Object.prototype.propertyIsEnumerable;
	var a_ = (i, e, t) =>
			e in i ? gs(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (i[e] = t),
		Cr = (i, e) => {
			for (var t in e || (e = {})) o_.call(e, t) && a_(i, t, e[t]);
			if (s_) for (var t of s_(e)) G1.call(e, t) && a_(i, t, e[t]);
			return i;
		},
		Bo = (i, e) => q1(i, z1(e)),
		u_ = (i) => gs(i, '__esModule', { value: !0 });
	var $1 = ((i) =>
		typeof require != 'undefined'
			? require
			: typeof Proxy != 'undefined'
			? new Proxy(i, { get: (e, t) => (typeof require != 'undefined' ? require : e)[t] })
			: i)(function (i) {
		if (typeof require != 'undefined') return require.apply(this, arguments);
		throw new Error('Dynamic require of "' + i + '" is not supported');
	});
	var M = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports),
		J1 = (i, e) => {
			for (var t in e) gs(i, t, { get: e[t], enumerable: !0 });
		},
		c_ = (i, e, t, r) => {
			if ((e && typeof e == 'object') || typeof e == 'function')
				for (let n of H1(e))
					!o_.call(i, n) &&
						(t || n !== 'default') &&
						gs(i, n, { get: () => e[n], enumerable: !(r = W1(e, n)) || r.enumerable });
			return i;
		},
		Di = (i, e) =>
			c_(
				u_(
					gs(
						i != null ? x1(Y1(i)) : {},
						'default',
						!e && i && i.__esModule
							? { get: () => i.default, enumerable: !0 }
							: { value: i, enumerable: !0 }
					)
				),
				i
			),
		K1 = (
			(i) => (e, t) =>
				(i && i.get(e)) || ((t = c_(u_({}), e, 1)), i && i.set(e, t), t)
		)(typeof WeakMap != 'undefined' ? new WeakMap() : 0);
	var dt = M((WR, Do) => {
		var l_,
			d_,
			f_,
			h_,
			p_,
			y_,
			__,
			m_,
			b_,
			So,
			Wu,
			g_,
			v_,
			j_,
			ln,
			w_,
			T_,
			I_,
			B_,
			S_,
			A_,
			D_,
			F_,
			Ao;
		(function (i) {
			var e =
				typeof global == 'object'
					? global
					: typeof self == 'object'
					? self
					: typeof this == 'object'
					? this
					: {};
			typeof define == 'function' && define.amd
				? define('tslib', ['exports'], function (r) {
						i(t(e, t(r)));
				  })
				: typeof Do == 'object' && typeof Do.exports == 'object'
				? i(t(e, t(Do.exports)))
				: i(t(e));
			function t(r, n) {
				return (
					r !== e &&
						(typeof Object.create == 'function'
							? Object.defineProperty(r, '__esModule', { value: !0 })
							: (r.__esModule = !0)),
					function (o, l) {
						return (r[o] = n ? n(o, l) : l);
					}
				);
			}
		})(function (i) {
			var e =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (r, n) {
						r.__proto__ = n;
					}) ||
				function (r, n) {
					for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
				};
			(l_ = function (r, n) {
				if (typeof n != 'function' && n !== null)
					throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null');
				e(r, n);
				function o() {
					this.constructor = r;
				}
				r.prototype = n === null ? Object.create(n) : ((o.prototype = n.prototype), new o());
			}),
				(d_ =
					Object.assign ||
					function (r) {
						for (var n, o = 1, l = arguments.length; o < l; o++) {
							n = arguments[o];
							for (var _ in n) Object.prototype.hasOwnProperty.call(n, _) && (r[_] = n[_]);
						}
						return r;
					}),
				(f_ = function (r, n) {
					var o = {};
					for (var l in r)
						Object.prototype.hasOwnProperty.call(r, l) && n.indexOf(l) < 0 && (o[l] = r[l]);
					if (r != null && typeof Object.getOwnPropertySymbols == 'function')
						for (var _ = 0, l = Object.getOwnPropertySymbols(r); _ < l.length; _++)
							n.indexOf(l[_]) < 0 &&
								Object.prototype.propertyIsEnumerable.call(r, l[_]) &&
								(o[l[_]] = r[l[_]]);
					return o;
				}),
				(h_ = function (r, n, o, l) {
					var _ = arguments.length,
						v = _ < 3 ? n : l === null ? (l = Object.getOwnPropertyDescriptor(n, o)) : l,
						B;
					if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
						v = Reflect.decorate(r, n, o, l);
					else
						for (var D = r.length - 1; D >= 0; D--)
							(B = r[D]) && (v = (_ < 3 ? B(v) : _ > 3 ? B(n, o, v) : B(n, o)) || v);
					return _ > 3 && v && Object.defineProperty(n, o, v), v;
				}),
				(p_ = function (r, n) {
					return function (o, l) {
						n(o, l, r);
					};
				}),
				(y_ = function (r, n) {
					if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
						return Reflect.metadata(r, n);
				}),
				(__ = function (r, n, o, l) {
					function _(v) {
						return v instanceof o
							? v
							: new o(function (B) {
									B(v);
							  });
					}
					return new (o || (o = Promise))(function (v, B) {
						function D(K) {
							try {
								W(l.next(K));
							} catch (Re) {
								B(Re);
							}
						}
						function N(K) {
							try {
								W(l.throw(K));
							} catch (Re) {
								B(Re);
							}
						}
						function W(K) {
							K.done ? v(K.value) : _(K.value).then(D, N);
						}
						W((l = l.apply(r, n || [])).next());
					});
				}),
				(m_ = function (r, n) {
					var o = {
							label: 0,
							sent: function () {
								if (v[0] & 1) throw v[1];
								return v[1];
							},
							trys: [],
							ops: []
						},
						l,
						_,
						v,
						B;
					return (
						(B = { next: D(0), throw: D(1), return: D(2) }),
						typeof Symbol == 'function' &&
							(B[Symbol.iterator] = function () {
								return this;
							}),
						B
					);
					function D(W) {
						return function (K) {
							return N([W, K]);
						};
					}
					function N(W) {
						if (l) throw new TypeError('Generator is already executing.');
						for (; o; )
							try {
								if (
									((l = 1),
									_ &&
										(v =
											W[0] & 2
												? _.return
												: W[0]
												? _.throw || ((v = _.return) && v.call(_), 0)
												: _.next) &&
										!(v = v.call(_, W[1])).done)
								)
									return v;
								switch (((_ = 0), v && (W = [W[0] & 2, v.value]), W[0])) {
									case 0:
									case 1:
										v = W;
										break;
									case 4:
										return o.label++, { value: W[1], done: !1 };
									case 5:
										o.label++, (_ = W[1]), (W = [0]);
										continue;
									case 7:
										(W = o.ops.pop()), o.trys.pop();
										continue;
									default:
										if (
											((v = o.trys),
											!(v = v.length > 0 && v[v.length - 1]) && (W[0] === 6 || W[0] === 2))
										) {
											o = 0;
											continue;
										}
										if (W[0] === 3 && (!v || (W[1] > v[0] && W[1] < v[3]))) {
											o.label = W[1];
											break;
										}
										if (W[0] === 6 && o.label < v[1]) {
											(o.label = v[1]), (v = W);
											break;
										}
										if (v && o.label < v[2]) {
											(o.label = v[2]), o.ops.push(W);
											break;
										}
										v[2] && o.ops.pop(), o.trys.pop();
										continue;
								}
								W = n.call(r, o);
							} catch (K) {
								(W = [6, K]), (_ = 0);
							} finally {
								l = v = 0;
							}
						if (W[0] & 5) throw W[1];
						return { value: W[0] ? W[1] : void 0, done: !0 };
					}
				}),
				(b_ = function (r, n) {
					for (var o in r)
						o !== 'default' && !Object.prototype.hasOwnProperty.call(n, o) && Ao(n, r, o);
				}),
				(Ao = Object.create
					? function (r, n, o, l) {
							l === void 0 && (l = o),
								Object.defineProperty(r, l, {
									enumerable: !0,
									get: function () {
										return n[o];
									}
								});
					  }
					: function (r, n, o, l) {
							l === void 0 && (l = o), (r[l] = n[o]);
					  }),
				(So = function (r) {
					var n = typeof Symbol == 'function' && Symbol.iterator,
						o = n && r[n],
						l = 0;
					if (o) return o.call(r);
					if (r && typeof r.length == 'number')
						return {
							next: function () {
								return r && l >= r.length && (r = void 0), { value: r && r[l++], done: !r };
							}
						};
					throw new TypeError(n ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
				}),
				(Wu = function (r, n) {
					var o = typeof Symbol == 'function' && r[Symbol.iterator];
					if (!o) return r;
					var l = o.call(r),
						_,
						v = [],
						B;
					try {
						for (; (n === void 0 || n-- > 0) && !(_ = l.next()).done; ) v.push(_.value);
					} catch (D) {
						B = { error: D };
					} finally {
						try {
							_ && !_.done && (o = l.return) && o.call(l);
						} finally {
							if (B) throw B.error;
						}
					}
					return v;
				}),
				(g_ = function () {
					for (var r = [], n = 0; n < arguments.length; n++) r = r.concat(Wu(arguments[n]));
					return r;
				}),
				(v_ = function () {
					for (var r = 0, n = 0, o = arguments.length; n < o; n++) r += arguments[n].length;
					for (var l = Array(r), _ = 0, n = 0; n < o; n++)
						for (var v = arguments[n], B = 0, D = v.length; B < D; B++, _++) l[_] = v[B];
					return l;
				}),
				(j_ = function (r, n, o) {
					if (o || arguments.length === 2)
						for (var l = 0, _ = n.length, v; l < _; l++)
							(v || !(l in n)) && (v || (v = Array.prototype.slice.call(n, 0, l)), (v[l] = n[l]));
					return r.concat(v || Array.prototype.slice.call(n));
				}),
				(ln = function (r) {
					return this instanceof ln ? ((this.v = r), this) : new ln(r);
				}),
				(w_ = function (r, n, o) {
					if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
					var l = o.apply(r, n || []),
						_,
						v = [];
					return (
						(_ = {}),
						B('next'),
						B('throw'),
						B('return'),
						(_[Symbol.asyncIterator] = function () {
							return this;
						}),
						_
					);
					function B(Ae) {
						l[Ae] &&
							(_[Ae] = function ($t) {
								return new Promise(function (pt, fs) {
									v.push([Ae, $t, pt, fs]) > 1 || D(Ae, $t);
								});
							});
					}
					function D(Ae, $t) {
						try {
							N(l[Ae]($t));
						} catch (pt) {
							Re(v[0][3], pt);
						}
					}
					function N(Ae) {
						Ae.value instanceof ln ? Promise.resolve(Ae.value.v).then(W, K) : Re(v[0][2], Ae);
					}
					function W(Ae) {
						D('next', Ae);
					}
					function K(Ae) {
						D('throw', Ae);
					}
					function Re(Ae, $t) {
						Ae($t), v.shift(), v.length && D(v[0][0], v[0][1]);
					}
				}),
				(T_ = function (r) {
					var n, o;
					return (
						(n = {}),
						l('next'),
						l('throw', function (_) {
							throw _;
						}),
						l('return'),
						(n[Symbol.iterator] = function () {
							return this;
						}),
						n
					);
					function l(_, v) {
						n[_] = r[_]
							? function (B) {
									return (o = !o) ? { value: ln(r[_](B)), done: _ === 'return' } : v ? v(B) : B;
							  }
							: v;
					}
				}),
				(I_ = function (r) {
					if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
					var n = r[Symbol.asyncIterator],
						o;
					return n
						? n.call(r)
						: ((r = typeof So == 'function' ? So(r) : r[Symbol.iterator]()),
						  (o = {}),
						  l('next'),
						  l('throw'),
						  l('return'),
						  (o[Symbol.asyncIterator] = function () {
								return this;
						  }),
						  o);
					function l(v) {
						o[v] =
							r[v] &&
							function (B) {
								return new Promise(function (D, N) {
									(B = r[v](B)), _(D, N, B.done, B.value);
								});
							};
					}
					function _(v, B, D, N) {
						Promise.resolve(N).then(function (W) {
							v({ value: W, done: D });
						}, B);
					}
				}),
				(B_ = function (r, n) {
					return (
						Object.defineProperty ? Object.defineProperty(r, 'raw', { value: n }) : (r.raw = n), r
					);
				});
			var t = Object.create
				? function (r, n) {
						Object.defineProperty(r, 'default', { enumerable: !0, value: n });
				  }
				: function (r, n) {
						r.default = n;
				  };
			(S_ = function (r) {
				if (r && r.__esModule) return r;
				var n = {};
				if (r != null)
					for (var o in r)
						o !== 'default' && Object.prototype.hasOwnProperty.call(r, o) && Ao(n, r, o);
				return t(n, r), n;
			}),
				(A_ = function (r) {
					return r && r.__esModule ? r : { default: r };
				}),
				(D_ = function (r, n, o, l) {
					if (o === 'a' && !l) throw new TypeError('Private accessor was defined without a getter');
					if (typeof n == 'function' ? r !== n || !l : !n.has(r))
						throw new TypeError(
							'Cannot read private member from an object whose class did not declare it'
						);
					return o === 'm' ? l : o === 'a' ? l.call(r) : l ? l.value : n.get(r);
				}),
				(F_ = function (r, n, o, l, _) {
					if (l === 'm') throw new TypeError('Private method is not writable');
					if (l === 'a' && !_) throw new TypeError('Private accessor was defined without a setter');
					if (typeof n == 'function' ? r !== n || !_ : !n.has(r))
						throw new TypeError(
							'Cannot write private member to an object whose class did not declare it'
						);
					return l === 'a' ? _.call(r, o) : _ ? (_.value = o) : n.set(r, o), o;
				}),
				i('__extends', l_),
				i('__assign', d_),
				i('__rest', f_),
				i('__decorate', h_),
				i('__param', p_),
				i('__metadata', y_),
				i('__awaiter', __),
				i('__generator', m_),
				i('__exportStar', b_),
				i('__createBinding', Ao),
				i('__values', So),
				i('__read', Wu),
				i('__spread', g_),
				i('__spreadArrays', v_),
				i('__spreadArray', j_),
				i('__await', ln),
				i('__asyncGenerator', w_),
				i('__asyncDelegator', T_),
				i('__asyncValues', I_),
				i('__makeTemplateObject', B_),
				i('__importStar', S_),
				i('__importDefault', A_),
				i('__classPrivateFieldGet', D_),
				i('__classPrivateFieldSet', F_);
		});
	});
	var Fi = M((O_) => {
		var F = {};
		F.Offset;
		F.Table;
		F.SIZEOF_SHORT = 2;
		F.SIZEOF_INT = 4;
		F.FILE_IDENTIFIER_LENGTH = 4;
		F.SIZE_PREFIX_LENGTH = 4;
		F.Encoding = { UTF8_BYTES: 1, UTF16_STRING: 2 };
		F.int32 = new Int32Array(2);
		F.float32 = new Float32Array(F.int32.buffer);
		F.float64 = new Float64Array(F.int32.buffer);
		F.isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
		F.Long = function (i, e) {
			(this.low = i | 0), (this.high = e | 0);
		};
		F.Long.create = function (i, e) {
			return i == 0 && e == 0 ? F.Long.ZERO : new F.Long(i, e);
		};
		F.Long.prototype.toFloat64 = function () {
			return (this.low >>> 0) + this.high * 4294967296;
		};
		F.Long.prototype.equals = function (i) {
			return this.low == i.low && this.high == i.high;
		};
		F.Long.ZERO = new F.Long(0, 0);
		F.Builder = function (i) {
			if (i) var e = i;
			else var e = 1024;
			(this.bb = F.ByteBuffer.allocate(e)),
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
		F.Builder.prototype.clear = function () {
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
		F.Builder.prototype.forceDefaults = function (i) {
			this.force_defaults = i;
		};
		F.Builder.prototype.dataBuffer = function () {
			return this.bb;
		};
		F.Builder.prototype.asUint8Array = function () {
			return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
		};
		F.Builder.prototype.prep = function (i, e) {
			i > this.minalign && (this.minalign = i);
			for (
				var t = (~(this.bb.capacity() - this.space + e) + 1) & (i - 1);
				this.space < t + i + e;

			) {
				var r = this.bb.capacity();
				(this.bb = F.Builder.growByteBuffer(this.bb)), (this.space += this.bb.capacity() - r);
			}
			this.pad(t);
		};
		F.Builder.prototype.pad = function (i) {
			for (var e = 0; e < i; e++) this.bb.writeInt8(--this.space, 0);
		};
		F.Builder.prototype.writeInt8 = function (i) {
			this.bb.writeInt8((this.space -= 1), i);
		};
		F.Builder.prototype.writeInt16 = function (i) {
			this.bb.writeInt16((this.space -= 2), i);
		};
		F.Builder.prototype.writeInt32 = function (i) {
			this.bb.writeInt32((this.space -= 4), i);
		};
		F.Builder.prototype.writeInt64 = function (i) {
			this.bb.writeInt64((this.space -= 8), i);
		};
		F.Builder.prototype.writeFloat32 = function (i) {
			this.bb.writeFloat32((this.space -= 4), i);
		};
		F.Builder.prototype.writeFloat64 = function (i) {
			this.bb.writeFloat64((this.space -= 8), i);
		};
		F.Builder.prototype.addInt8 = function (i) {
			this.prep(1, 0), this.writeInt8(i);
		};
		F.Builder.prototype.addInt16 = function (i) {
			this.prep(2, 0), this.writeInt16(i);
		};
		F.Builder.prototype.addInt32 = function (i) {
			this.prep(4, 0), this.writeInt32(i);
		};
		F.Builder.prototype.addInt64 = function (i) {
			this.prep(8, 0), this.writeInt64(i);
		};
		F.Builder.prototype.addFloat32 = function (i) {
			this.prep(4, 0), this.writeFloat32(i);
		};
		F.Builder.prototype.addFloat64 = function (i) {
			this.prep(8, 0), this.writeFloat64(i);
		};
		F.Builder.prototype.addFieldInt8 = function (i, e, t) {
			(this.force_defaults || e != t) && (this.addInt8(e), this.slot(i));
		};
		F.Builder.prototype.addFieldInt16 = function (i, e, t) {
			(this.force_defaults || e != t) && (this.addInt16(e), this.slot(i));
		};
		F.Builder.prototype.addFieldInt32 = function (i, e, t) {
			(this.force_defaults || e != t) && (this.addInt32(e), this.slot(i));
		};
		F.Builder.prototype.addFieldInt64 = function (i, e, t) {
			(this.force_defaults || !e.equals(t)) && (this.addInt64(e), this.slot(i));
		};
		F.Builder.prototype.addFieldFloat32 = function (i, e, t) {
			(this.force_defaults || e != t) && (this.addFloat32(e), this.slot(i));
		};
		F.Builder.prototype.addFieldFloat64 = function (i, e, t) {
			(this.force_defaults || e != t) && (this.addFloat64(e), this.slot(i));
		};
		F.Builder.prototype.addFieldOffset = function (i, e, t) {
			(this.force_defaults || e != t) && (this.addOffset(e), this.slot(i));
		};
		F.Builder.prototype.addFieldStruct = function (i, e, t) {
			e != t && (this.nested(e), this.slot(i));
		};
		F.Builder.prototype.nested = function (i) {
			if (i != this.offset()) throw new Error('FlatBuffers: struct must be serialized inline.');
		};
		F.Builder.prototype.notNested = function () {
			if (this.isNested) throw new Error('FlatBuffers: object serialization must not be nested.');
		};
		F.Builder.prototype.slot = function (i) {
			this.vtable[i] = this.offset();
		};
		F.Builder.prototype.offset = function () {
			return this.bb.capacity() - this.space;
		};
		F.Builder.growByteBuffer = function (i) {
			var e = i.capacity();
			if (e & 3221225472) throw new Error('FlatBuffers: cannot grow buffer beyond 2 gigabytes.');
			var t = e << 1,
				r = F.ByteBuffer.allocate(t);
			return r.setPosition(t - e), r.bytes().set(i.bytes(), t - e), r;
		};
		F.Builder.prototype.addOffset = function (i) {
			this.prep(F.SIZEOF_INT, 0), this.writeInt32(this.offset() - i + F.SIZEOF_INT);
		};
		F.Builder.prototype.startObject = function (i) {
			this.notNested(), this.vtable == null && (this.vtable = []), (this.vtable_in_use = i);
			for (var e = 0; e < i; e++) this.vtable[e] = 0;
			(this.isNested = !0), (this.object_start = this.offset());
		};
		F.Builder.prototype.endObject = function () {
			if (this.vtable == null || !this.isNested)
				throw new Error('FlatBuffers: endObject called without startObject');
			this.addInt32(0);
			for (var i = this.offset(), e = this.vtable_in_use - 1; e >= 0 && this.vtable[e] == 0; e--);
			for (var t = e + 1; e >= 0; e--) this.addInt16(this.vtable[e] != 0 ? i - this.vtable[e] : 0);
			var r = 2;
			this.addInt16(i - this.object_start);
			var n = (t + r) * F.SIZEOF_SHORT;
			this.addInt16(n);
			var o = 0,
				l = this.space;
			e: for (e = 0; e < this.vtables.length; e++) {
				var _ = this.bb.capacity() - this.vtables[e];
				if (n == this.bb.readInt16(_)) {
					for (var v = F.SIZEOF_SHORT; v < n; v += F.SIZEOF_SHORT)
						if (this.bb.readInt16(l + v) != this.bb.readInt16(_ + v)) continue e;
					o = this.vtables[e];
					break;
				}
			}
			return (
				o
					? ((this.space = this.bb.capacity() - i), this.bb.writeInt32(this.space, o - i))
					: (this.vtables.push(this.offset()),
					  this.bb.writeInt32(this.bb.capacity() - i, this.offset() - i)),
				(this.isNested = !1),
				i
			);
		};
		F.Builder.prototype.finish = function (i, e, t) {
			var r = t ? F.SIZE_PREFIX_LENGTH : 0;
			if (e) {
				var n = e;
				if (
					(this.prep(this.minalign, F.SIZEOF_INT + F.FILE_IDENTIFIER_LENGTH + r),
					n.length != F.FILE_IDENTIFIER_LENGTH)
				)
					throw new Error(
						'FlatBuffers: file identifier must be length ' + F.FILE_IDENTIFIER_LENGTH
					);
				for (var o = F.FILE_IDENTIFIER_LENGTH - 1; o >= 0; o--) this.writeInt8(n.charCodeAt(o));
			}
			this.prep(this.minalign, F.SIZEOF_INT + r),
				this.addOffset(i),
				r && this.addInt32(this.bb.capacity() - this.space),
				this.bb.setPosition(this.space);
		};
		F.Builder.prototype.finishSizePrefixed = function (i, e) {
			this.finish(i, e, !0);
		};
		F.Builder.prototype.requiredField = function (i, e) {
			var t = this.bb.capacity() - i,
				r = t - this.bb.readInt32(t),
				n = this.bb.readInt16(r + e) != 0;
			if (!n) throw new Error('FlatBuffers: field ' + e + ' must be set');
		};
		F.Builder.prototype.startVector = function (i, e, t) {
			this.notNested(),
				(this.vector_num_elems = e),
				this.prep(F.SIZEOF_INT, i * e),
				this.prep(t, i * e);
		};
		F.Builder.prototype.endVector = function () {
			return this.writeInt32(this.vector_num_elems), this.offset();
		};
		F.Builder.prototype.createString = function (i) {
			if (i instanceof Uint8Array) var e = i;
			else
				for (var e = [], t = 0; t < i.length; ) {
					var r,
						n = i.charCodeAt(t++);
					if (n < 55296 || n >= 56320) r = n;
					else {
						var o = i.charCodeAt(t++);
						r = (n << 10) + o + (65536 - (55296 << 10) - 56320);
					}
					r < 128
						? e.push(r)
						: (r < 2048
								? e.push(((r >> 6) & 31) | 192)
								: (r < 65536
										? e.push(((r >> 12) & 15) | 224)
										: e.push(((r >> 18) & 7) | 240, ((r >> 12) & 63) | 128),
								  e.push(((r >> 6) & 63) | 128)),
						  e.push((r & 63) | 128));
				}
			this.addInt8(0),
				this.startVector(1, e.length, 1),
				this.bb.setPosition((this.space -= e.length));
			for (var t = 0, l = this.space, _ = this.bb.bytes(); t < e.length; t++) _[l++] = e[t];
			return this.endVector();
		};
		F.Builder.prototype.createLong = function (i, e) {
			return F.Long.create(i, e);
		};
		F.ByteBuffer = function (i) {
			(this.bytes_ = i), (this.position_ = 0);
		};
		F.ByteBuffer.allocate = function (i) {
			return new F.ByteBuffer(new Uint8Array(i));
		};
		F.ByteBuffer.prototype.clear = function () {
			this.position_ = 0;
		};
		F.ByteBuffer.prototype.bytes = function () {
			return this.bytes_;
		};
		F.ByteBuffer.prototype.position = function () {
			return this.position_;
		};
		F.ByteBuffer.prototype.setPosition = function (i) {
			this.position_ = i;
		};
		F.ByteBuffer.prototype.capacity = function () {
			return this.bytes_.length;
		};
		F.ByteBuffer.prototype.readInt8 = function (i) {
			return (this.readUint8(i) << 24) >> 24;
		};
		F.ByteBuffer.prototype.readUint8 = function (i) {
			return this.bytes_[i];
		};
		F.ByteBuffer.prototype.readInt16 = function (i) {
			return (this.readUint16(i) << 16) >> 16;
		};
		F.ByteBuffer.prototype.readUint16 = function (i) {
			return this.bytes_[i] | (this.bytes_[i + 1] << 8);
		};
		F.ByteBuffer.prototype.readInt32 = function (i) {
			return (
				this.bytes_[i] |
				(this.bytes_[i + 1] << 8) |
				(this.bytes_[i + 2] << 16) |
				(this.bytes_[i + 3] << 24)
			);
		};
		F.ByteBuffer.prototype.readUint32 = function (i) {
			return this.readInt32(i) >>> 0;
		};
		F.ByteBuffer.prototype.readInt64 = function (i) {
			return new F.Long(this.readInt32(i), this.readInt32(i + 4));
		};
		F.ByteBuffer.prototype.readUint64 = function (i) {
			return new F.Long(this.readUint32(i), this.readUint32(i + 4));
		};
		F.ByteBuffer.prototype.readFloat32 = function (i) {
			return (F.int32[0] = this.readInt32(i)), F.float32[0];
		};
		F.ByteBuffer.prototype.readFloat64 = function (i) {
			return (
				(F.int32[F.isLittleEndian ? 0 : 1] = this.readInt32(i)),
				(F.int32[F.isLittleEndian ? 1 : 0] = this.readInt32(i + 4)),
				F.float64[0]
			);
		};
		F.ByteBuffer.prototype.writeInt8 = function (i, e) {
			this.bytes_[i] = e;
		};
		F.ByteBuffer.prototype.writeUint8 = function (i, e) {
			this.bytes_[i] = e;
		};
		F.ByteBuffer.prototype.writeInt16 = function (i, e) {
			(this.bytes_[i] = e), (this.bytes_[i + 1] = e >> 8);
		};
		F.ByteBuffer.prototype.writeUint16 = function (i, e) {
			(this.bytes_[i] = e), (this.bytes_[i + 1] = e >> 8);
		};
		F.ByteBuffer.prototype.writeInt32 = function (i, e) {
			(this.bytes_[i] = e),
				(this.bytes_[i + 1] = e >> 8),
				(this.bytes_[i + 2] = e >> 16),
				(this.bytes_[i + 3] = e >> 24);
		};
		F.ByteBuffer.prototype.writeUint32 = function (i, e) {
			(this.bytes_[i] = e),
				(this.bytes_[i + 1] = e >> 8),
				(this.bytes_[i + 2] = e >> 16),
				(this.bytes_[i + 3] = e >> 24);
		};
		F.ByteBuffer.prototype.writeInt64 = function (i, e) {
			this.writeInt32(i, e.low), this.writeInt32(i + 4, e.high);
		};
		F.ByteBuffer.prototype.writeUint64 = function (i, e) {
			this.writeUint32(i, e.low), this.writeUint32(i + 4, e.high);
		};
		F.ByteBuffer.prototype.writeFloat32 = function (i, e) {
			(F.float32[0] = e), this.writeInt32(i, F.int32[0]);
		};
		F.ByteBuffer.prototype.writeFloat64 = function (i, e) {
			(F.float64[0] = e),
				this.writeInt32(i, F.int32[F.isLittleEndian ? 0 : 1]),
				this.writeInt32(i + 4, F.int32[F.isLittleEndian ? 1 : 0]);
		};
		F.ByteBuffer.prototype.getBufferIdentifier = function () {
			if (this.bytes_.length < this.position_ + F.SIZEOF_INT + F.FILE_IDENTIFIER_LENGTH)
				throw new Error('FlatBuffers: ByteBuffer is too short to contain an identifier.');
			for (var i = '', e = 0; e < F.FILE_IDENTIFIER_LENGTH; e++)
				i += String.fromCharCode(this.readInt8(this.position_ + F.SIZEOF_INT + e));
			return i;
		};
		F.ByteBuffer.prototype.__offset = function (i, e) {
			var t = i - this.readInt32(i);
			return e < this.readInt16(t) ? this.readInt16(t + e) : 0;
		};
		F.ByteBuffer.prototype.__union = function (i, e) {
			return (i.bb_pos = e + this.readInt32(e)), (i.bb = this), i;
		};
		F.ByteBuffer.prototype.__string = function (i, e) {
			i += this.readInt32(i);
			var t = this.readInt32(i),
				r = '',
				n = 0;
			if (((i += F.SIZEOF_INT), e === F.Encoding.UTF8_BYTES)) return this.bytes_.subarray(i, i + t);
			for (; n < t; ) {
				var o,
					l = this.readUint8(i + n++);
				if (l < 192) o = l;
				else {
					var _ = this.readUint8(i + n++);
					if (l < 224) o = ((l & 31) << 6) | (_ & 63);
					else {
						var v = this.readUint8(i + n++);
						if (l < 240) o = ((l & 15) << 12) | ((_ & 63) << 6) | (v & 63);
						else {
							var B = this.readUint8(i + n++);
							o = ((l & 7) << 18) | ((_ & 63) << 12) | ((v & 63) << 6) | (B & 63);
						}
					}
				}
				o < 65536
					? (r += String.fromCharCode(o))
					: ((o -= 65536),
					  (r += String.fromCharCode((o >> 10) + 55296, (o & ((1 << 10) - 1)) + 56320)));
			}
			return r;
		};
		F.ByteBuffer.prototype.__indirect = function (i) {
			return i + this.readInt32(i);
		};
		F.ByteBuffer.prototype.__vector = function (i) {
			return i + this.readInt32(i) + F.SIZEOF_INT;
		};
		F.ByteBuffer.prototype.__vector_len = function (i) {
			return this.readInt32(i + this.readInt32(i));
		};
		F.ByteBuffer.prototype.__has_identifier = function (i) {
			if (i.length != F.FILE_IDENTIFIER_LENGTH)
				throw new Error('FlatBuffers: file identifier must be length ' + F.FILE_IDENTIFIER_LENGTH);
			for (var e = 0; e < F.FILE_IDENTIFIER_LENGTH; e++)
				if (i.charCodeAt(e) != this.readInt8(this.position_ + F.SIZEOF_INT + e)) return !1;
			return !0;
		};
		F.ByteBuffer.prototype.createLong = function (i, e) {
			return F.Long.create(i, e);
		};
		O_.flatbuffers = F;
	});
	var Rr = M((dn) => {
		'use strict';
		Object.defineProperty(dn, '__esModule', { value: !0 });
		dn.encodeUtf8 = dn.decodeUtf8 = void 0;
		var Z1 = new TextDecoder('utf-8');
		dn.decodeUtf8 = (i) => Z1.decode(i);
		var X1 = new TextEncoder();
		dn.encodeUtf8 = (i) => X1.encode(i);
	});
	var fn = M((gt) => {
		'use strict';
		Object.defineProperty(gt, '__esModule', { value: !0 });
		gt.AsyncQueue = gt.ReadableInterop = gt.ArrowJSON = gt.ITERATOR_DONE = void 0;
		var vs = dt(),
			E_ = js();
		gt.ITERATOR_DONE = Object.freeze({ done: !0, value: void 0 });
		var M_ = class {
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
		gt.ArrowJSON = M_;
		var zu = class {
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
		gt.ReadableInterop = zu;
		var C_ = class extends zu {
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
				return vs.__awaiter(this, void 0, void 0, function* () {
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
					for (; e.length > 0; ) e.shift().resolve(gt.ITERATOR_DONE);
					this._closedPromiseResolve(), (this._closedPromiseResolve = void 0);
				}
			}
			[Symbol.asyncIterator]() {
				return this;
			}
			toDOMStream(e) {
				return E_.default.toDOMStream(
					this._closedPromiseResolve || this._error ? this : this._values,
					e
				);
			}
			toNodeStream(e) {
				return E_.default.toNodeStream(
					this._closedPromiseResolve || this._error ? this : this._values,
					e
				);
			}
			throw(e) {
				return vs.__awaiter(this, void 0, void 0, function* () {
					return yield this.abort(e), gt.ITERATOR_DONE;
				});
			}
			return(e) {
				return vs.__awaiter(this, void 0, void 0, function* () {
					return yield this.close(), gt.ITERATOR_DONE;
				});
			}
			read(e) {
				return vs.__awaiter(this, void 0, void 0, function* () {
					return (yield this.next(e, 'read')).value;
				});
			}
			peek(e) {
				return vs.__awaiter(this, void 0, void 0, function* () {
					return (yield this.next(e, 'peek')).value;
				});
			}
			next(...e) {
				return this._values.length > 0
					? Promise.resolve({ done: !1, value: this._values.shift() })
					: this._error
					? Promise.reject({ done: !0, value: this._error.error })
					: this._closedPromiseResolve
					? new Promise((t, r) => {
							this.resolvers.push({ resolve: t, reject: r });
					  })
					: Promise.resolve(gt.ITERATOR_DONE);
			}
			_ensureOpen() {
				if (this._closedPromiseResolve) return !0;
				throw new Error('AsyncQueue is closed');
			}
		};
		gt.AsyncQueue = C_;
	});
	var ft = M((z) => {
		'use strict';
		Object.defineProperty(z, '__esModule', { value: !0 });
		z.isReadableNodeStream =
			z.isWritableNodeStream =
			z.isReadableDOMStream =
			z.isWritableDOMStream =
			z.isFetchResponse =
			z.isFSReadStream =
			z.isFileHandle =
			z.isUnderlyingSink =
			z.isIteratorResult =
			z.isArrayLike =
			z.isArrowJSON =
			z.isAsyncIterable =
			z.isIterable =
			z.isObservable =
			z.isPromise =
			z.isObject =
			z.BigUint64ArrayAvailable =
			z.BigUint64Array =
			z.BigInt64ArrayAvailable =
			z.BigInt64Array =
			z.BigIntAvailable =
			z.BigInt =
				void 0;
		var Fo = fn(),
			[Q1, eA] = (() => {
				let i = () => {
					throw new Error('BigInt is not available in this environment');
				};
				function e() {
					throw i();
				}
				return (
					(e.asIntN = () => {
						throw i();
					}),
					(e.asUintN = () => {
						throw i();
					}),
					typeof BigInt != 'undefined' ? [BigInt, !0] : [e, !1]
				);
			})();
		z.BigInt = Q1;
		z.BigIntAvailable = eA;
		var [tA, iA] = (() => {
			let i = () => {
				throw new Error('BigInt64Array is not available in this environment');
			};
			class e {
				static get BYTES_PER_ELEMENT() {
					return 8;
				}
				static of() {
					throw i();
				}
				static from() {
					throw i();
				}
				constructor() {
					throw i();
				}
			}
			return typeof BigInt64Array != 'undefined' ? [BigInt64Array, !0] : [e, !1];
		})();
		z.BigInt64Array = tA;
		z.BigInt64ArrayAvailable = iA;
		var [rA, nA] = (() => {
			let i = () => {
				throw new Error('BigUint64Array is not available in this environment');
			};
			class e {
				static get BYTES_PER_ELEMENT() {
					return 8;
				}
				static of() {
					throw i();
				}
				static from() {
					throw i();
				}
				constructor() {
					throw i();
				}
			}
			return typeof BigUint64Array != 'undefined' ? [BigUint64Array, !0] : [e, !1];
		})();
		z.BigUint64Array = rA;
		z.BigUint64ArrayAvailable = nA;
		var Hu = (i) => typeof i == 'number',
			R_ = (i) => typeof i == 'boolean',
			at = (i) => typeof i == 'function';
		z.isObject = (i) => i != null && Object(i) === i;
		z.isPromise = (i) => z.isObject(i) && at(i.then);
		z.isObservable = (i) => z.isObject(i) && at(i.subscribe);
		z.isIterable = (i) => z.isObject(i) && at(i[Symbol.iterator]);
		z.isAsyncIterable = (i) => z.isObject(i) && at(i[Symbol.asyncIterator]);
		z.isArrowJSON = (i) => z.isObject(i) && z.isObject(i.schema);
		z.isArrayLike = (i) => z.isObject(i) && Hu(i.length);
		z.isIteratorResult = (i) => z.isObject(i) && 'done' in i && 'value' in i;
		z.isUnderlyingSink = (i) =>
			z.isObject(i) && at(i.abort) && at(i.close) && at(i.start) && at(i.write);
		z.isFileHandle = (i) => z.isObject(i) && at(i.stat) && Hu(i.fd);
		z.isFSReadStream = (i) => z.isReadableNodeStream(i) && Hu(i.bytesRead);
		z.isFetchResponse = (i) => z.isObject(i) && z.isReadableDOMStream(i.body);
		z.isWritableDOMStream = (i) =>
			z.isObject(i) && at(i.abort) && at(i.getWriter) && !(i instanceof Fo.ReadableInterop);
		z.isReadableDOMStream = (i) =>
			z.isObject(i) && at(i.cancel) && at(i.getReader) && !(i instanceof Fo.ReadableInterop);
		z.isWritableNodeStream = (i) =>
			z.isObject(i) &&
			at(i.end) &&
			at(i.write) &&
			R_(i.writable) &&
			!(i instanceof Fo.ReadableInterop);
		z.isReadableNodeStream = (i) =>
			z.isObject(i) &&
			at(i.read) &&
			at(i.pipe) &&
			R_(i.readable) &&
			!(i instanceof Fo.ReadableInterop);
	});
	var Xe = M((L) => {
		'use strict';
		Object.defineProperty(L, '__esModule', { value: !0 });
		L.compareArrayLike =
			L.rebaseValueOffsets =
			L.toUint8ClampedArrayAsyncIterator =
			L.toFloat64ArrayAsyncIterator =
			L.toFloat32ArrayAsyncIterator =
			L.toUint32ArrayAsyncIterator =
			L.toUint16ArrayAsyncIterator =
			L.toUint8ArrayAsyncIterator =
			L.toInt32ArrayAsyncIterator =
			L.toInt16ArrayAsyncIterator =
			L.toInt8ArrayAsyncIterator =
			L.toArrayBufferViewAsyncIterator =
			L.toUint8ClampedArrayIterator =
			L.toFloat64ArrayIterator =
			L.toFloat32ArrayIterator =
			L.toUint32ArrayIterator =
			L.toUint16ArrayIterator =
			L.toUint8ArrayIterator =
			L.toInt32ArrayIterator =
			L.toInt16ArrayIterator =
			L.toInt8ArrayIterator =
			L.toArrayBufferViewIterator =
			L.toUint8ClampedArray =
			L.toFloat64Array =
			L.toFloat32Array =
			L.toBigUint64Array =
			L.toUint32Array =
			L.toUint16Array =
			L.toUint8Array =
			L.toBigInt64Array =
			L.toInt32Array =
			L.toInt16Array =
			L.toInt8Array =
			L.toArrayBufferView =
			L.joinUint8Arrays =
			L.memcpy =
				void 0;
		var Ye = dt(),
			sA = Fi(),
			oA = Rr(),
			aA = sA.flatbuffers.ByteBuffer,
			Ur = ft(),
			Yu = typeof SharedArrayBuffer != 'undefined' ? SharedArrayBuffer : ArrayBuffer;
		function uA(i) {
			let e = i[0] ? [i[0]] : [],
				t,
				r,
				n,
				o;
			for (let l, _, v = 0, B = 0, D = i.length; ++v < D; ) {
				if (
					((l = e[B]), (_ = i[v]), !l || !_ || l.buffer !== _.buffer || _.byteOffset < l.byteOffset)
				) {
					_ && (e[++B] = _);
					continue;
				}
				if (
					(({ byteOffset: t, byteLength: n } = l),
					({ byteOffset: r, byteLength: o } = _),
					t + n < r || r + o < t)
				) {
					_ && (e[++B] = _);
					continue;
				}
				e[B] = new Uint8Array(l.buffer, t, r - t + o);
			}
			return e;
		}
		function Gu(i, e, t = 0, r = e.byteLength) {
			let n = i.byteLength,
				o = new Uint8Array(i.buffer, i.byteOffset, n),
				l = new Uint8Array(e.buffer, e.byteOffset, Math.min(r, n));
			return o.set(l, t), i;
		}
		L.memcpy = Gu;
		function cA(i, e) {
			let t = uA(i),
				r = t.reduce((D, N) => D + N.byteLength, 0),
				n,
				o,
				l,
				_ = 0,
				v = -1,
				B = Math.min(e || 1 / 0, r);
			for (let D = t.length; ++v < D; ) {
				if (((n = t[v]), (o = n.subarray(0, Math.min(n.length, B - _))), B <= _ + o.length)) {
					o.length < n.length ? (t[v] = n.subarray(o.length)) : o.length === n.length && v++,
						l ? Gu(l, o, _) : (l = o);
					break;
				}
				Gu(l || (l = new Uint8Array(B)), o, _), (_ += o.length);
			}
			return [l || new Uint8Array(0), t.slice(v), r - (l ? l.byteLength : 0)];
		}
		L.joinUint8Arrays = cA;
		function _t(i, e) {
			let t = Ur.isIteratorResult(e) ? e.value : e;
			return t instanceof i
				? i === Uint8Array
					? new i(t.buffer, t.byteOffset, t.byteLength)
					: t
				: t
				? (typeof t == 'string' && (t = oA.encodeUtf8(t)),
				  t instanceof ArrayBuffer
						? new i(t)
						: t instanceof Yu
						? new i(t)
						: t instanceof aA
						? _t(i, t.bytes())
						: ArrayBuffer.isView(t)
						? t.byteLength <= 0
							? new i(0)
							: new i(t.buffer, t.byteOffset, t.byteLength / i.BYTES_PER_ELEMENT)
						: i.from(t))
				: new i(0);
		}
		L.toArrayBufferView = _t;
		L.toInt8Array = (i) => _t(Int8Array, i);
		L.toInt16Array = (i) => _t(Int16Array, i);
		L.toInt32Array = (i) => _t(Int32Array, i);
		L.toBigInt64Array = (i) => _t(Ur.BigInt64Array, i);
		L.toUint8Array = (i) => _t(Uint8Array, i);
		L.toUint16Array = (i) => _t(Uint16Array, i);
		L.toUint32Array = (i) => _t(Uint32Array, i);
		L.toBigUint64Array = (i) => _t(Ur.BigUint64Array, i);
		L.toFloat32Array = (i) => _t(Float32Array, i);
		L.toFloat64Array = (i) => _t(Float64Array, i);
		L.toUint8ClampedArray = (i) => _t(Uint8ClampedArray, i);
		var $u = (i) => (i.next(), i);
		function* si(i, e) {
			let t = function* (n) {
					yield n;
				},
				r =
					typeof e == 'string' ||
					ArrayBuffer.isView(e) ||
					e instanceof ArrayBuffer ||
					e instanceof Yu
						? t(e)
						: Ur.isIterable(e)
						? e
						: t(e);
			return (
				yield* $u(
					(function* (n) {
						let o = null;
						do o = n.next(yield _t(i, o));
						while (!o.done);
					})(r[Symbol.iterator]())
				),
				new i()
			);
		}
		L.toArrayBufferViewIterator = si;
		L.toInt8ArrayIterator = (i) => si(Int8Array, i);
		L.toInt16ArrayIterator = (i) => si(Int16Array, i);
		L.toInt32ArrayIterator = (i) => si(Int32Array, i);
		L.toUint8ArrayIterator = (i) => si(Uint8Array, i);
		L.toUint16ArrayIterator = (i) => si(Uint16Array, i);
		L.toUint32ArrayIterator = (i) => si(Uint32Array, i);
		L.toFloat32ArrayIterator = (i) => si(Float32Array, i);
		L.toFloat64ArrayIterator = (i) => si(Float64Array, i);
		L.toUint8ClampedArrayIterator = (i) => si(Uint8ClampedArray, i);
		function Jt(i, e) {
			return Ye.__asyncGenerator(this, arguments, function* () {
				if (Ur.isPromise(e))
					return yield Ye.__await(
						yield Ye.__await(
							yield* Ye.__asyncDelegator(Ye.__asyncValues(Jt(i, yield Ye.__await(e))))
						)
					);
				let r = function (l) {
						return Ye.__asyncGenerator(this, arguments, function* () {
							yield yield Ye.__await(yield Ye.__await(l));
						});
					},
					n = function (l) {
						return Ye.__asyncGenerator(this, arguments, function* () {
							yield Ye.__await(
								yield* Ye.__asyncDelegator(
									Ye.__asyncValues(
										$u(
											(function* (_) {
												let v = null;
												do v = _.next(yield v == null ? void 0 : v.value);
												while (!v.done);
											})(l[Symbol.iterator]())
										)
									)
								)
							);
						});
					},
					o =
						typeof e == 'string' ||
						ArrayBuffer.isView(e) ||
						e instanceof ArrayBuffer ||
						e instanceof Yu
							? r(e)
							: Ur.isIterable(e)
							? n(e)
							: Ur.isAsyncIterable(e)
							? e
							: r(e);
				return (
					yield Ye.__await(
						yield* Ye.__asyncDelegator(
							Ye.__asyncValues(
								$u(
									(function (l) {
										return Ye.__asyncGenerator(this, arguments, function* () {
											let _ = null;
											do _ = yield Ye.__await(l.next(yield yield Ye.__await(_t(i, _))));
											while (!_.done);
										});
									})(o[Symbol.asyncIterator]())
								)
							)
						)
					),
					yield Ye.__await(new i())
				);
			});
		}
		L.toArrayBufferViewAsyncIterator = Jt;
		L.toInt8ArrayAsyncIterator = (i) => Jt(Int8Array, i);
		L.toInt16ArrayAsyncIterator = (i) => Jt(Int16Array, i);
		L.toInt32ArrayAsyncIterator = (i) => Jt(Int32Array, i);
		L.toUint8ArrayAsyncIterator = (i) => Jt(Uint8Array, i);
		L.toUint16ArrayAsyncIterator = (i) => Jt(Uint16Array, i);
		L.toUint32ArrayAsyncIterator = (i) => Jt(Uint32Array, i);
		L.toFloat32ArrayAsyncIterator = (i) => Jt(Float32Array, i);
		L.toFloat64ArrayAsyncIterator = (i) => Jt(Float64Array, i);
		L.toUint8ClampedArrayAsyncIterator = (i) => Jt(Uint8ClampedArray, i);
		function lA(i, e, t) {
			if (i !== 0) {
				t = t.slice(0, e + 1);
				for (let r = -1; ++r <= e; ) t[r] += i;
			}
			return t;
		}
		L.rebaseValueOffsets = lA;
		function dA(i, e) {
			let t = 0,
				r = i.length;
			if (r !== e.length) return !1;
			if (r > 0)
				do if (i[t] !== e[t]) return !1;
				while (++t < r);
			return !0;
		}
		L.compareArrayLike = dA;
	});
	var js = M((Ku) => {
		'use strict';
		Object.defineProperty(Ku, '__esModule', { value: !0 });
		var we = dt(),
			mt = Xe();
		Ku.default = {
			fromIterable(i) {
				return Oo(fA(i));
			},
			fromAsyncIterable(i) {
				return Oo(hA(i));
			},
			fromDOMStream(i) {
				return Oo(pA(i));
			},
			fromNodeStream(i) {
				return Oo(yA(i));
			},
			toDOMStream(i, e) {
				throw new Error('"toDOMStream" not available in this environment');
			},
			toNodeStream(i, e) {
				throw new Error('"toNodeStream" not available in this environment');
			}
		};
		var Oo = (i) => (i.next(), i);
		function* fA(i) {
			let e,
				t = !1,
				r = [],
				n,
				o,
				l,
				_ = 0;
			function v() {
				return o === 'peek'
					? mt.joinUint8Arrays(r, l)[0]
					: (([n, r, _] = mt.joinUint8Arrays(r, l)), n);
			}
			({ cmd: o, size: l } = yield null);
			let B = mt.toUint8ArrayIterator(i)[Symbol.iterator]();
			try {
				do
					if (
						(({ done: e, value: n } = isNaN(l - _) ? B.next(void 0) : B.next(l - _)),
						!e && n.byteLength > 0 && (r.push(n), (_ += n.byteLength)),
						e || l <= _)
					)
						do ({ cmd: o, size: l } = yield v());
						while (l < _);
				while (!e);
			} catch (D) {
				(t = !0) && typeof B.throw == 'function' && B.throw(D);
			} finally {
				t === !1 && typeof B.return == 'function' && B.return(null);
			}
			return null;
		}
		function hA(i) {
			return we.__asyncGenerator(this, arguments, function* () {
				let t,
					r = !1,
					n = [],
					o,
					l,
					_,
					v = 0;
				function B() {
					return l === 'peek'
						? mt.joinUint8Arrays(n, _)[0]
						: (([o, n, v] = mt.joinUint8Arrays(n, _)), o);
				}
				({ cmd: l, size: _ } = yield yield we.__await(null));
				let D = mt.toUint8ArrayAsyncIterator(i)[Symbol.asyncIterator]();
				try {
					do
						if (
							(({ done: t, value: o } = isNaN(_ - v)
								? yield we.__await(D.next(void 0))
								: yield we.__await(D.next(_ - v))),
							!t && o.byteLength > 0 && (n.push(o), (v += o.byteLength)),
							t || _ <= v)
						)
							do ({ cmd: l, size: _ } = yield yield we.__await(B()));
							while (_ < v);
					while (!t);
				} catch (N) {
					(r = !0) && typeof D.throw == 'function' && (yield we.__await(D.throw(N)));
				} finally {
					r === !1 &&
						typeof D.return == 'function' &&
						(yield we.__await(D.return(new Uint8Array(0))));
				}
				return yield we.__await(null);
			});
		}
		function pA(i) {
			return we.__asyncGenerator(this, arguments, function* () {
				let t = !1,
					r = !1,
					n = [],
					o,
					l,
					_,
					v = 0;
				function B() {
					return l === 'peek'
						? mt.joinUint8Arrays(n, _)[0]
						: (([o, n, v] = mt.joinUint8Arrays(n, _)), o);
				}
				({ cmd: l, size: _ } = yield yield we.__await(null));
				let D = new U_(i);
				try {
					do
						if (
							(({ done: t, value: o } = isNaN(_ - v)
								? yield we.__await(D.read(void 0))
								: yield we.__await(D.read(_ - v))),
							!t && o.byteLength > 0 && (n.push(mt.toUint8Array(o)), (v += o.byteLength)),
							t || _ <= v)
						)
							do ({ cmd: l, size: _ } = yield yield we.__await(B()));
							while (_ < v);
					while (!t);
				} catch (N) {
					(r = !0) && (yield we.__await(D.cancel(N)));
				} finally {
					r === !1 ? yield we.__await(D.cancel()) : i.locked && D.releaseLock();
				}
				return yield we.__await(null);
			});
		}
		var U_ = class {
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
				return we.__awaiter(this, void 0, void 0, function* () {
					let { reader: t, source: r } = this;
					t && (yield t.cancel(e).catch(() => {})), r && r.locked && this.releaseLock();
				});
			}
			read(e) {
				return we.__awaiter(this, void 0, void 0, function* () {
					if (e === 0) return { done: this.reader == null, value: new Uint8Array(0) };
					let t =
						!this.supportsBYOB || typeof e != 'number'
							? yield this.getDefaultReader().read()
							: yield this.readFromBYOBReader(e);
					return !t.done && (t.value = mt.toUint8Array(t)), t;
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
				return we.__awaiter(this, void 0, void 0, function* () {
					return yield k_(this.getBYOBReader(), new ArrayBuffer(e), 0, e);
				});
			}
		};
		function k_(i, e, t, r) {
			return we.__awaiter(this, void 0, void 0, function* () {
				if (t >= r) return { done: !1, value: new Uint8Array(e, 0, r) };
				let { done: n, value: o } = yield i.read(new Uint8Array(e, t, r - t));
				return (t += o.byteLength) < r && !n
					? yield k_(i, o.buffer, t, r)
					: { done: n, value: new Uint8Array(o.buffer, 0, t) };
			});
		}
		var Ju = (i, e) => {
			let t = (n) => r([e, n]),
				r;
			return [e, t, new Promise((n) => (r = n) && i.once(e, t))];
		};
		function yA(i) {
			return we.__asyncGenerator(this, arguments, function* () {
				let t = [],
					r = 'error',
					n = !1,
					o = null,
					l,
					_,
					v = 0,
					B = [],
					D;
				function N() {
					return l === 'peek'
						? mt.joinUint8Arrays(B, _)[0]
						: (([D, B, v] = mt.joinUint8Arrays(B, _)), D);
				}
				if ((({ cmd: l, size: _ } = yield yield we.__await(null)), i.isTTY))
					return yield yield we.__await(new Uint8Array(0)), yield we.__await(null);
				try {
					(t[0] = Ju(i, 'end')), (t[1] = Ju(i, 'error'));
					do {
						if (
							((t[2] = Ju(i, 'readable')),
							([r, o] = yield we.__await(Promise.race(t.map((K) => K[2])))),
							r === 'error')
						)
							break;
						if (
							((n = r === 'end') ||
								(isFinite(_ - v)
									? ((D = mt.toUint8Array(i.read(_ - v))),
									  D.byteLength < _ - v && (D = mt.toUint8Array(i.read(void 0))))
									: (D = mt.toUint8Array(i.read(void 0))),
								D.byteLength > 0 && (B.push(D), (v += D.byteLength))),
							n || _ <= v)
						)
							do ({ cmd: l, size: _ } = yield yield we.__await(N()));
							while (_ < v);
					} while (!n);
				} finally {
					yield we.__await(W(t, r === 'error' ? o : null));
				}
				return yield we.__await(null);
				function W(K, Re) {
					return (
						(D = B = null),
						new Promise((Ae, $t) => {
							for (let [pt, fs] of K) i.off(pt, fs);
							try {
								let pt = i.destroy;
								pt && pt.call(i, Re), (Re = void 0);
							} catch (pt) {
								Re = pt || Re;
							} finally {
								Re != null ? $t(Re) : Ae();
							}
						})
					);
				}
			});
		}
	});
	var We = M((hn) => {
		'use strict';
		Object.defineProperty(hn, '__esModule', { value: !0 });
		hn.Vector = hn.AbstractVector = void 0;
		var Eo = class {};
		hn.AbstractVector = Eo;
		hn.Vector = Eo;
		Eo.prototype.data = null;
	});
	var er = M((P) => {
		'use strict';
		Object.defineProperty(P, '__esModule', { value: !0 });
		P.Schema =
			P.Buffer =
			P.Field =
			P.DictionaryEncoding =
			P.KeyValue =
			P.Duration =
			P.Interval =
			P.Timestamp =
			P.Time =
			P.Date =
			P.Decimal =
			P.Bool =
			P.FixedSizeBinary =
			P.LargeBinary =
			P.LargeUtf8 =
			P.Binary =
			P.Utf8 =
			P.FloatingPoint =
			P.Int =
			P.Union =
			P.Map =
			P.FixedSizeList =
			P.LargeList =
			P.List =
			P.Struct_ =
			P.Null =
			P.Endianness =
			P.DictionaryKind =
			P.Type =
			P.IntervalUnit =
			P.TimeUnit =
			P.DateUnit =
			P.Precision =
			P.UnionMode =
			P.Feature =
			P.MetadataVersion =
				void 0;
		var De = Fi(),
			_A;
		(function (i) {
			(i[(i.V1 = 0)] = 'V1'),
				(i[(i.V2 = 1)] = 'V2'),
				(i[(i.V3 = 2)] = 'V3'),
				(i[(i.V4 = 3)] = 'V4'),
				(i[(i.V5 = 4)] = 'V5');
		})((_A = P.MetadataVersion || (P.MetadataVersion = {})));
		var mA;
		(function (i) {
			(i[(i.UNUSED = 0)] = 'UNUSED'),
				(i[(i.DICTIONARY_REPLACEMENT = 1)] = 'DICTIONARY_REPLACEMENT'),
				(i[(i.COMPRESSED_BODY = 2)] = 'COMPRESSED_BODY');
		})((mA = P.Feature || (P.Feature = {})));
		var Zu;
		(function (i) {
			(i[(i.Sparse = 0)] = 'Sparse'), (i[(i.Dense = 1)] = 'Dense');
		})((Zu = P.UnionMode || (P.UnionMode = {})));
		var Xu;
		(function (i) {
			(i[(i.HALF = 0)] = 'HALF'), (i[(i.SINGLE = 1)] = 'SINGLE'), (i[(i.DOUBLE = 2)] = 'DOUBLE');
		})((Xu = P.Precision || (P.Precision = {})));
		var Qu;
		(function (i) {
			(i[(i.DAY = 0)] = 'DAY'), (i[(i.MILLISECOND = 1)] = 'MILLISECOND');
		})((Qu = P.DateUnit || (P.DateUnit = {})));
		var kr;
		(function (i) {
			(i[(i.SECOND = 0)] = 'SECOND'),
				(i[(i.MILLISECOND = 1)] = 'MILLISECOND'),
				(i[(i.MICROSECOND = 2)] = 'MICROSECOND'),
				(i[(i.NANOSECOND = 3)] = 'NANOSECOND');
		})((kr = P.TimeUnit || (P.TimeUnit = {})));
		var ec;
		(function (i) {
			(i[(i.YEAR_MONTH = 0)] = 'YEAR_MONTH'), (i[(i.DAY_TIME = 1)] = 'DAY_TIME');
		})((ec = P.IntervalUnit || (P.IntervalUnit = {})));
		var tc;
		(function (i) {
			(i[(i.NONE = 0)] = 'NONE'),
				(i[(i.Null = 1)] = 'Null'),
				(i[(i.Int = 2)] = 'Int'),
				(i[(i.FloatingPoint = 3)] = 'FloatingPoint'),
				(i[(i.Binary = 4)] = 'Binary'),
				(i[(i.Utf8 = 5)] = 'Utf8'),
				(i[(i.Bool = 6)] = 'Bool'),
				(i[(i.Decimal = 7)] = 'Decimal'),
				(i[(i.Date = 8)] = 'Date'),
				(i[(i.Time = 9)] = 'Time'),
				(i[(i.Timestamp = 10)] = 'Timestamp'),
				(i[(i.Interval = 11)] = 'Interval'),
				(i[(i.List = 12)] = 'List'),
				(i[(i.Struct_ = 13)] = 'Struct_'),
				(i[(i.Union = 14)] = 'Union'),
				(i[(i.FixedSizeBinary = 15)] = 'FixedSizeBinary'),
				(i[(i.FixedSizeList = 16)] = 'FixedSizeList'),
				(i[(i.Map = 17)] = 'Map'),
				(i[(i.Duration = 18)] = 'Duration'),
				(i[(i.LargeBinary = 19)] = 'LargeBinary'),
				(i[(i.LargeUtf8 = 20)] = 'LargeUtf8'),
				(i[(i.LargeList = 21)] = 'LargeList');
		})((tc = P.Type || (P.Type = {})));
		var ic;
		(function (i) {
			i[(i.DenseArray = 0)] = 'DenseArray';
		})((ic = P.DictionaryKind || (P.DictionaryKind = {})));
		var rc;
		(function (i) {
			(i[(i.Little = 0)] = 'Little'), (i[(i.Big = 1)] = 'Big');
		})((rc = P.Endianness || (P.Endianness = {})));
		var Vr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsNull(e, t) {
				return (t || new Vr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsNull(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Vr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startNull(e) {
				e.startObject(0);
			}
			static endNull(e) {
				return e.endObject();
			}
			static createNull(e) {
				return Vr.startNull(e), Vr.endNull(e);
			}
		};
		P.Null = Vr;
		var Pr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsStruct_(e, t) {
				return (t || new Pr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsStruct_(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Pr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startStruct_(e) {
				e.startObject(0);
			}
			static endStruct_(e) {
				return e.endObject();
			}
			static createStruct_(e) {
				return Pr.startStruct_(e), Pr.endStruct_(e);
			}
		};
		P.Struct_ = Pr;
		var Nr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsList(e, t) {
				return (t || new Nr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsList(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Nr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startList(e) {
				e.startObject(0);
			}
			static endList(e) {
				return e.endObject();
			}
			static createList(e) {
				return Nr.startList(e), Nr.endList(e);
			}
		};
		P.List = Nr;
		var Lr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsLargeList(e, t) {
				return (t || new Lr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsLargeList(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Lr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startLargeList(e) {
				e.startObject(0);
			}
			static endLargeList(e) {
				return e.endObject();
			}
			static createLargeList(e) {
				return Lr.startLargeList(e), Lr.endLargeList(e);
			}
		};
		P.LargeList = Lr;
		var Gi = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsFixedSizeList(e, t) {
				return (t || new Gi()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsFixedSizeList(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Gi()).__init(e.readInt32(e.position()) + e.position(), e)
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
				return Gi.startFixedSizeList(e), Gi.addListSize(e, t), Gi.endFixedSizeList(e);
			}
		};
		P.FixedSizeList = Gi;
		var $i = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsMap(e, t) {
				return (t || new $i()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsMap(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new $i()).__init(e.readInt32(e.position()) + e.position(), e)
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
				return $i.startMap(e), $i.addKeysSorted(e, t), $i.endMap(e);
			}
		};
		P.Map = $i;
		var Oi = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsUnion(e, t) {
				return (t || new Oi()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsUnion(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Oi()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			mode() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : Zu.Sparse;
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
				e.addFieldInt16(0, t, Zu.Sparse);
			}
			static addTypeIds(e, t) {
				e.addFieldOffset(1, t, 0);
			}
			static createTypeIdsVector(e, t) {
				e.startVector(4, t.length, 4);
				for (let r = t.length - 1; r >= 0; r--) e.addInt32(t[r]);
				return e.endVector();
			}
			static startTypeIdsVector(e, t) {
				e.startVector(4, t, 4);
			}
			static endUnion(e) {
				return e.endObject();
			}
			static createUnion(e, t, r) {
				return Oi.startUnion(e), Oi.addMode(e, t), Oi.addTypeIds(e, r), Oi.endUnion(e);
			}
		};
		P.Union = Oi;
		var oi = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsInt(e, t) {
				return (t || new oi()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsInt(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new oi()).__init(e.readInt32(e.position()) + e.position(), e)
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
			static createInt(e, t, r) {
				return oi.startInt(e), oi.addBitWidth(e, t), oi.addIsSigned(e, r), oi.endInt(e);
			}
		};
		P.Int = oi;
		var Ji = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsFloatingPoint(e, t) {
				return (t || new Ji()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsFloatingPoint(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Ji()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			precision() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : Xu.HALF;
			}
			static startFloatingPoint(e) {
				e.startObject(1);
			}
			static addPrecision(e, t) {
				e.addFieldInt16(0, t, Xu.HALF);
			}
			static endFloatingPoint(e) {
				return e.endObject();
			}
			static createFloatingPoint(e, t) {
				return Ji.startFloatingPoint(e), Ji.addPrecision(e, t), Ji.endFloatingPoint(e);
			}
		};
		P.FloatingPoint = Ji;
		var xr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsUtf8(e, t) {
				return (t || new xr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsUtf8(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new xr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startUtf8(e) {
				e.startObject(0);
			}
			static endUtf8(e) {
				return e.endObject();
			}
			static createUtf8(e) {
				return xr.startUtf8(e), xr.endUtf8(e);
			}
		};
		P.Utf8 = xr;
		var qr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsBinary(e, t) {
				return (t || new qr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsBinary(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new qr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startBinary(e) {
				e.startObject(0);
			}
			static endBinary(e) {
				return e.endObject();
			}
			static createBinary(e) {
				return qr.startBinary(e), qr.endBinary(e);
			}
		};
		P.Binary = qr;
		var Wr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsLargeUtf8(e, t) {
				return (t || new Wr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsLargeUtf8(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Wr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startLargeUtf8(e) {
				e.startObject(0);
			}
			static endLargeUtf8(e) {
				return e.endObject();
			}
			static createLargeUtf8(e) {
				return Wr.startLargeUtf8(e), Wr.endLargeUtf8(e);
			}
		};
		P.LargeUtf8 = Wr;
		var zr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsLargeBinary(e, t) {
				return (t || new zr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsLargeBinary(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new zr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startLargeBinary(e) {
				e.startObject(0);
			}
			static endLargeBinary(e) {
				return e.endObject();
			}
			static createLargeBinary(e) {
				return zr.startLargeBinary(e), zr.endLargeBinary(e);
			}
		};
		P.LargeBinary = zr;
		var Ki = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsFixedSizeBinary(e, t) {
				return (t || new Ki()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsFixedSizeBinary(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Ki()).__init(e.readInt32(e.position()) + e.position(), e)
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
				return Ki.startFixedSizeBinary(e), Ki.addByteWidth(e, t), Ki.endFixedSizeBinary(e);
			}
		};
		P.FixedSizeBinary = Ki;
		var Hr = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsBool(e, t) {
				return (t || new Hr()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsBool(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Hr()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			static startBool(e) {
				e.startObject(0);
			}
			static endBool(e) {
				return e.endObject();
			}
			static createBool(e) {
				return Hr.startBool(e), Hr.endBool(e);
			}
		};
		P.Bool = Hr;
		var ai = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsDecimal(e, t) {
				return (t || new ai()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsDecimal(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new ai()).__init(e.readInt32(e.position()) + e.position(), e)
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
			static createDecimal(e, t, r, n) {
				return (
					ai.startDecimal(e),
					ai.addPrecision(e, t),
					ai.addScale(e, r),
					ai.addBitWidth(e, n),
					ai.endDecimal(e)
				);
			}
		};
		P.Decimal = ai;
		var Zi = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsDate(e, t) {
				return (t || new Zi()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsDate(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Zi()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			unit() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : Qu.MILLISECOND;
			}
			static startDate(e) {
				e.startObject(1);
			}
			static addUnit(e, t) {
				e.addFieldInt16(0, t, Qu.MILLISECOND);
			}
			static endDate(e) {
				return e.endObject();
			}
			static createDate(e, t) {
				return Zi.startDate(e), Zi.addUnit(e, t), Zi.endDate(e);
			}
		};
		P.Date = Zi;
		var Ei = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsTime(e, t) {
				return (t || new Ei()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsTime(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Ei()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			unit() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : kr.MILLISECOND;
			}
			bitWidth() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.readInt32(this.bb_pos + e) : 32;
			}
			static startTime(e) {
				e.startObject(2);
			}
			static addUnit(e, t) {
				e.addFieldInt16(0, t, kr.MILLISECOND);
			}
			static addBitWidth(e, t) {
				e.addFieldInt32(1, t, 32);
			}
			static endTime(e) {
				return e.endObject();
			}
			static createTime(e, t, r) {
				return Ei.startTime(e), Ei.addUnit(e, t), Ei.addBitWidth(e, r), Ei.endTime(e);
			}
		};
		P.Time = Ei;
		var Mi = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsTimestamp(e, t) {
				return (t || new Mi()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsTimestamp(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Mi()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			unit() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : kr.SECOND;
			}
			timezone(e) {
				let t = this.bb.__offset(this.bb_pos, 6);
				return t ? this.bb.__string(this.bb_pos + t, e) : null;
			}
			static startTimestamp(e) {
				e.startObject(2);
			}
			static addUnit(e, t) {
				e.addFieldInt16(0, t, kr.SECOND);
			}
			static addTimezone(e, t) {
				e.addFieldOffset(1, t, 0);
			}
			static endTimestamp(e) {
				return e.endObject();
			}
			static createTimestamp(e, t, r) {
				return Mi.startTimestamp(e), Mi.addUnit(e, t), Mi.addTimezone(e, r), Mi.endTimestamp(e);
			}
		};
		P.Timestamp = Mi;
		var Xi = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsInterval(e, t) {
				return (t || new Xi()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsInterval(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Xi()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			unit() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : ec.YEAR_MONTH;
			}
			static startInterval(e) {
				e.startObject(1);
			}
			static addUnit(e, t) {
				e.addFieldInt16(0, t, ec.YEAR_MONTH);
			}
			static endInterval(e) {
				return e.endObject();
			}
			static createInterval(e, t) {
				return Xi.startInterval(e), Xi.addUnit(e, t), Xi.endInterval(e);
			}
		};
		P.Interval = Xi;
		var Qi = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsDuration(e, t) {
				return (t || new Qi()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsDuration(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Qi()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			unit() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : kr.MILLISECOND;
			}
			static startDuration(e) {
				e.startObject(1);
			}
			static addUnit(e, t) {
				e.addFieldInt16(0, t, kr.MILLISECOND);
			}
			static endDuration(e) {
				return e.endObject();
			}
			static createDuration(e, t) {
				return Qi.startDuration(e), Qi.addUnit(e, t), Qi.endDuration(e);
			}
		};
		P.Duration = Qi;
		var Kt = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsKeyValue(e, t) {
				return (t || new Kt()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsKeyValue(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Kt()).__init(e.readInt32(e.position()) + e.position(), e)
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
			static createKeyValue(e, t, r) {
				return Kt.startKeyValue(e), Kt.addKey(e, t), Kt.addValue(e, r), Kt.endKeyValue(e);
			}
		};
		P.KeyValue = Kt;
		var Dt = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsDictionaryEncoding(e, t) {
				return (t || new Dt()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsDictionaryEncoding(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Dt()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			id() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt64(this.bb_pos + e) : this.bb.createLong(0, 0);
			}
			indexType(e) {
				let t = this.bb.__offset(this.bb_pos, 6);
				return t ? (e || new oi()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
			}
			isOrdered() {
				let e = this.bb.__offset(this.bb_pos, 8);
				return e ? !!this.bb.readInt8(this.bb_pos + e) : !1;
			}
			dictionaryKind() {
				let e = this.bb.__offset(this.bb_pos, 10);
				return e ? this.bb.readInt16(this.bb_pos + e) : ic.DenseArray;
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
				e.addFieldInt16(3, t, ic.DenseArray);
			}
			static endDictionaryEncoding(e) {
				return e.endObject();
			}
			static createDictionaryEncoding(e, t, r, n, o) {
				return (
					Dt.startDictionaryEncoding(e),
					Dt.addId(e, t),
					Dt.addIndexType(e, r),
					Dt.addIsOrdered(e, n),
					Dt.addDictionaryKind(e, o),
					Dt.endDictionaryEncoding(e)
				);
			}
		};
		P.DictionaryEncoding = Dt;
		var ht = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsField(e, t) {
				return (t || new ht()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsField(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new ht()).__init(e.readInt32(e.position()) + e.position(), e)
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
				return e ? this.bb.readUint8(this.bb_pos + e) : tc.NONE;
			}
			type(e) {
				let t = this.bb.__offset(this.bb_pos, 10);
				return t ? this.bb.__union(e, this.bb_pos + t) : null;
			}
			dictionary(e) {
				let t = this.bb.__offset(this.bb_pos, 12);
				return t ? (e || new Dt()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
			}
			children(e, t) {
				let r = this.bb.__offset(this.bb_pos, 14);
				return r
					? (t || new ht()).__init(
							this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + e * 4),
							this.bb
					  )
					: null;
			}
			childrenLength() {
				let e = this.bb.__offset(this.bb_pos, 14);
				return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
			}
			customMetadata(e, t) {
				let r = this.bb.__offset(this.bb_pos, 16);
				return r
					? (t || new Kt()).__init(
							this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + e * 4),
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
				e.addFieldInt8(2, t, tc.NONE);
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
				for (let r = t.length - 1; r >= 0; r--) e.addOffset(t[r]);
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
				for (let r = t.length - 1; r >= 0; r--) e.addOffset(t[r]);
				return e.endVector();
			}
			static startCustomMetadataVector(e, t) {
				e.startVector(4, t, 4);
			}
			static endField(e) {
				return e.endObject();
			}
			static createField(e, t, r, n, o, l, _, v) {
				return (
					ht.startField(e),
					ht.addName(e, t),
					ht.addNullable(e, r),
					ht.addTypeType(e, n),
					ht.addType(e, o),
					ht.addDictionary(e, l),
					ht.addChildren(e, _),
					ht.addCustomMetadata(e, v),
					ht.endField(e)
				);
			}
		};
		P.Field = ht;
		var V_ = class {
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
			static createBuffer(e, t, r) {
				return e.prep(8, 16), e.writeInt64(r), e.writeInt64(t), e.offset();
			}
		};
		P.Buffer = V_;
		var Zt = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsSchema(e, t) {
				return (t || new Zt()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsSchema(e, t) {
				return (
					e.setPosition(e.position() + De.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Zt()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			endianness() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : rc.Little;
			}
			fields(e, t) {
				let r = this.bb.__offset(this.bb_pos, 6);
				return r
					? (t || new ht()).__init(
							this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + e * 4),
							this.bb
					  )
					: null;
			}
			fieldsLength() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
			}
			customMetadata(e, t) {
				let r = this.bb.__offset(this.bb_pos, 8);
				return r
					? (t || new Kt()).__init(
							this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + e * 4),
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
				e.addFieldInt16(0, t, rc.Little);
			}
			static addFields(e, t) {
				e.addFieldOffset(1, t, 0);
			}
			static createFieldsVector(e, t) {
				e.startVector(4, t.length, 4);
				for (let r = t.length - 1; r >= 0; r--) e.addOffset(t[r]);
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
				for (let r = t.length - 1; r >= 0; r--) e.addOffset(t[r]);
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
				for (let r = t.length - 1; r >= 0; r--) e.addInt64(t[r]);
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
			static createSchema(e, t, r, n, o) {
				return (
					Zt.startSchema(e),
					Zt.addEndianness(e, t),
					Zt.addFields(e, r),
					Zt.addCustomMetadata(e, n),
					Zt.addFeatures(e, o),
					Zt.endSchema(e)
				);
			}
		};
		P.Schema = Zt;
	});
	var Ro = M((ze) => {
		'use strict';
		Object.defineProperty(ze, '__esModule', { value: !0 });
		ze.Message =
			ze.DictionaryBatch =
			ze.RecordBatch =
			ze.BodyCompression =
			ze.FieldNode =
			ze.MessageHeader =
			ze.BodyCompressionMethod =
			ze.CompressionType =
				void 0;
		var Mo = Fi(),
			Co = er(),
			nc;
		(function (i) {
			(i[(i.LZ4_FRAME = 0)] = 'LZ4_FRAME'), (i[(i.ZSTD = 1)] = 'ZSTD');
		})((nc = ze.CompressionType || (ze.CompressionType = {})));
		var sc;
		(function (i) {
			i[(i.BUFFER = 0)] = 'BUFFER';
		})((sc = ze.BodyCompressionMethod || (ze.BodyCompressionMethod = {})));
		var oc;
		(function (i) {
			(i[(i.NONE = 0)] = 'NONE'),
				(i[(i.Schema = 1)] = 'Schema'),
				(i[(i.DictionaryBatch = 2)] = 'DictionaryBatch'),
				(i[(i.RecordBatch = 3)] = 'RecordBatch'),
				(i[(i.Tensor = 4)] = 'Tensor'),
				(i[(i.SparseTensor = 5)] = 'SparseTensor');
		})((oc = ze.MessageHeader || (ze.MessageHeader = {})));
		var ac = class {
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
			static createFieldNode(e, t, r) {
				return e.prep(8, 16), e.writeInt64(r), e.writeInt64(t), e.offset();
			}
		};
		ze.FieldNode = ac;
		var ui = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsBodyCompression(e, t) {
				return (t || new ui()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsBodyCompression(e, t) {
				return (
					e.setPosition(e.position() + Mo.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new ui()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			codec() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt8(this.bb_pos + e) : nc.LZ4_FRAME;
			}
			method() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.readInt8(this.bb_pos + e) : sc.BUFFER;
			}
			static startBodyCompression(e) {
				e.startObject(2);
			}
			static addCodec(e, t) {
				e.addFieldInt8(0, t, nc.LZ4_FRAME);
			}
			static addMethod(e, t) {
				e.addFieldInt8(1, t, sc.BUFFER);
			}
			static endBodyCompression(e) {
				return e.endObject();
			}
			static createBodyCompression(e, t, r) {
				return (
					ui.startBodyCompression(e),
					ui.addCodec(e, t),
					ui.addMethod(e, r),
					ui.endBodyCompression(e)
				);
			}
		};
		ze.BodyCompression = ui;
		var Ft = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsRecordBatch(e, t) {
				return (t || new Ft()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsRecordBatch(e, t) {
				return (
					e.setPosition(e.position() + Mo.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Ft()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			length() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt64(this.bb_pos + e) : this.bb.createLong(0, 0);
			}
			nodes(e, t) {
				let r = this.bb.__offset(this.bb_pos, 6);
				return r
					? (t || new ac()).__init(this.bb.__vector(this.bb_pos + r) + e * 16, this.bb)
					: null;
			}
			nodesLength() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
			}
			buffers(e, t) {
				let r = this.bb.__offset(this.bb_pos, 8);
				return r
					? (t || new Co.Buffer()).__init(this.bb.__vector(this.bb_pos + r) + e * 16, this.bb)
					: null;
			}
			buffersLength() {
				let e = this.bb.__offset(this.bb_pos, 8);
				return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
			}
			compression(e) {
				let t = this.bb.__offset(this.bb_pos, 10);
				return t ? (e || new ui()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
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
			static createRecordBatch(e, t, r, n, o) {
				return (
					Ft.startRecordBatch(e),
					Ft.addLength(e, t),
					Ft.addNodes(e, r),
					Ft.addBuffers(e, n),
					Ft.addCompression(e, o),
					Ft.endRecordBatch(e)
				);
			}
		};
		ze.RecordBatch = Ft;
		var ci = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsDictionaryBatch(e, t) {
				return (t || new ci()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsDictionaryBatch(e, t) {
				return (
					e.setPosition(e.position() + Mo.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new ci()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			id() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt64(this.bb_pos + e) : this.bb.createLong(0, 0);
			}
			data(e) {
				let t = this.bb.__offset(this.bb_pos, 6);
				return t ? (e || new Ft()).__init(this.bb.__indirect(this.bb_pos + t), this.bb) : null;
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
			static createDictionaryBatch(e, t, r, n) {
				return (
					ci.startDictionaryBatch(e),
					ci.addId(e, t),
					ci.addData(e, r),
					ci.addIsDelta(e, n),
					ci.endDictionaryBatch(e)
				);
			}
		};
		ze.DictionaryBatch = ci;
		var Ot = class {
			constructor() {
				(this.bb = null), (this.bb_pos = 0);
			}
			__init(e, t) {
				return (this.bb_pos = e), (this.bb = t), this;
			}
			static getRootAsMessage(e, t) {
				return (t || new Ot()).__init(e.readInt32(e.position()) + e.position(), e);
			}
			static getSizePrefixedRootAsMessage(e, t) {
				return (
					e.setPosition(e.position() + Mo.flatbuffers.SIZE_PREFIX_LENGTH),
					(t || new Ot()).__init(e.readInt32(e.position()) + e.position(), e)
				);
			}
			version() {
				let e = this.bb.__offset(this.bb_pos, 4);
				return e ? this.bb.readInt16(this.bb_pos + e) : Co.MetadataVersion.V1;
			}
			headerType() {
				let e = this.bb.__offset(this.bb_pos, 6);
				return e ? this.bb.readUint8(this.bb_pos + e) : oc.NONE;
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
				let r = this.bb.__offset(this.bb_pos, 12);
				return r
					? (t || new Co.KeyValue()).__init(
							this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + e * 4),
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
				e.addFieldInt16(0, t, Co.MetadataVersion.V1);
			}
			static addHeaderType(e, t) {
				e.addFieldInt8(1, t, oc.NONE);
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
				for (let r = t.length - 1; r >= 0; r--) e.addOffset(t[r]);
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
			static createMessage(e, t, r, n, o, l) {
				return (
					Ot.startMessage(e),
					Ot.addVersion(e, t),
					Ot.addHeaderType(e, r),
					Ot.addHeader(e, n),
					Ot.addBodyLength(e, o),
					Ot.addCustomMetadata(e, l),
					Ot.endMessage(e)
				);
			}
		};
		ze.Message = Ot;
	});
	var Se = M((Ue) => {
		'use strict';
		Object.defineProperty(Ue, '__esModule', { value: !0 });
		Ue.BufferType =
			Ue.Type =
			Ue.MessageHeader =
			Ue.MetadataVersion =
			Ue.IntervalUnit =
			Ue.UnionMode =
			Ue.Precision =
			Ue.TimeUnit =
			Ue.DateUnit =
				void 0;
		var pn = er();
		Object.defineProperty(Ue, 'DateUnit', {
			enumerable: !0,
			get: function () {
				return pn.DateUnit;
			}
		});
		Object.defineProperty(Ue, 'TimeUnit', {
			enumerable: !0,
			get: function () {
				return pn.TimeUnit;
			}
		});
		Object.defineProperty(Ue, 'Precision', {
			enumerable: !0,
			get: function () {
				return pn.Precision;
			}
		});
		Object.defineProperty(Ue, 'UnionMode', {
			enumerable: !0,
			get: function () {
				return pn.UnionMode;
			}
		});
		Object.defineProperty(Ue, 'IntervalUnit', {
			enumerable: !0,
			get: function () {
				return pn.IntervalUnit;
			}
		});
		Object.defineProperty(Ue, 'MetadataVersion', {
			enumerable: !0,
			get: function () {
				return pn.MetadataVersion;
			}
		});
		var bA = Ro();
		Object.defineProperty(Ue, 'MessageHeader', {
			enumerable: !0,
			get: function () {
				return bA.MessageHeader;
			}
		});
		var gA;
		(function (i) {
			(i[(i.NONE = 0)] = 'NONE'),
				(i[(i.Null = 1)] = 'Null'),
				(i[(i.Int = 2)] = 'Int'),
				(i[(i.Float = 3)] = 'Float'),
				(i[(i.Binary = 4)] = 'Binary'),
				(i[(i.Utf8 = 5)] = 'Utf8'),
				(i[(i.Bool = 6)] = 'Bool'),
				(i[(i.Decimal = 7)] = 'Decimal'),
				(i[(i.Date = 8)] = 'Date'),
				(i[(i.Time = 9)] = 'Time'),
				(i[(i.Timestamp = 10)] = 'Timestamp'),
				(i[(i.Interval = 11)] = 'Interval'),
				(i[(i.List = 12)] = 'List'),
				(i[(i.Struct = 13)] = 'Struct'),
				(i[(i.Union = 14)] = 'Union'),
				(i[(i.FixedSizeBinary = 15)] = 'FixedSizeBinary'),
				(i[(i.FixedSizeList = 16)] = 'FixedSizeList'),
				(i[(i.Map = 17)] = 'Map'),
				(i[(i.Dictionary = -1)] = 'Dictionary'),
				(i[(i.Int8 = -2)] = 'Int8'),
				(i[(i.Int16 = -3)] = 'Int16'),
				(i[(i.Int32 = -4)] = 'Int32'),
				(i[(i.Int64 = -5)] = 'Int64'),
				(i[(i.Uint8 = -6)] = 'Uint8'),
				(i[(i.Uint16 = -7)] = 'Uint16'),
				(i[(i.Uint32 = -8)] = 'Uint32'),
				(i[(i.Uint64 = -9)] = 'Uint64'),
				(i[(i.Float16 = -10)] = 'Float16'),
				(i[(i.Float32 = -11)] = 'Float32'),
				(i[(i.Float64 = -12)] = 'Float64'),
				(i[(i.DateDay = -13)] = 'DateDay'),
				(i[(i.DateMillisecond = -14)] = 'DateMillisecond'),
				(i[(i.TimestampSecond = -15)] = 'TimestampSecond'),
				(i[(i.TimestampMillisecond = -16)] = 'TimestampMillisecond'),
				(i[(i.TimestampMicrosecond = -17)] = 'TimestampMicrosecond'),
				(i[(i.TimestampNanosecond = -18)] = 'TimestampNanosecond'),
				(i[(i.TimeSecond = -19)] = 'TimeSecond'),
				(i[(i.TimeMillisecond = -20)] = 'TimeMillisecond'),
				(i[(i.TimeMicrosecond = -21)] = 'TimeMicrosecond'),
				(i[(i.TimeNanosecond = -22)] = 'TimeNanosecond'),
				(i[(i.DenseUnion = -23)] = 'DenseUnion'),
				(i[(i.SparseUnion = -24)] = 'SparseUnion'),
				(i[(i.IntervalDayTime = -25)] = 'IntervalDayTime'),
				(i[(i.IntervalYearMonth = -26)] = 'IntervalYearMonth');
		})((gA = Ue.Type || (Ue.Type = {})));
		var vA;
		(function (i) {
			(i[(i.OFFSET = 0)] = 'OFFSET'),
				(i[(i.DATA = 1)] = 'DATA'),
				(i[(i.VALIDITY = 2)] = 'VALIDITY'),
				(i[(i.TYPE = 3)] = 'TYPE');
		})((vA = Ue.BufferType || (Ue.BufferType = {})));
	});
	var li = M((Ge) => {
		'use strict';
		Object.defineProperty(Ge, '__esModule', { value: !0 });
		Ge.popcnt_uint32 =
			Ge.popcnt_array =
			Ge.popcnt_bit_range =
			Ge.BitIterator =
			Ge.packBools =
			Ge.truncateBitmap =
			Ge.setBool =
			Ge.getBit =
			Ge.getBool =
				void 0;
		function P_(i, e, t, r) {
			return (t & (1 << r)) != 0;
		}
		Ge.getBool = P_;
		function N_(i, e, t, r) {
			return (t & (1 << r)) >> r;
		}
		Ge.getBit = N_;
		function jA(i, e, t) {
			return t ? !!(i[e >> 3] |= 1 << e % 8) || !0 : !(i[e >> 3] &= ~(1 << e % 8)) && !1;
		}
		Ge.setBool = jA;
		function wA(i, e, t) {
			let r = (t.byteLength + 7) & ~7;
			if (i > 0 || t.byteLength < r) {
				let n = new Uint8Array(r);
				return (
					n.set(i % 8 == 0 ? t.subarray(i >> 3) : L_(new Uo(t, i, e, null, P_)).subarray(0, r)), n
				);
			}
			return t;
		}
		Ge.truncateBitmap = wA;
		function L_(i) {
			let e = [],
				t = 0,
				r = 0,
				n = 0;
			for (let l of i) l && (n |= 1 << r), ++r == 8 && ((e[t++] = n), (n = r = 0));
			(t === 0 || r > 0) && (e[t++] = n);
			let o = new Uint8Array((e.length + 7) & ~7);
			return o.set(e), o;
		}
		Ge.packBools = L_;
		var Uo = class {
			constructor(e, t, r, n, o) {
				(this.bytes = e),
					(this.length = r),
					(this.context = n),
					(this.get = o),
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
		Ge.BitIterator = Uo;
		function uc(i, e, t) {
			if (t - e <= 0) return 0;
			if (t - e < 8) {
				let o = 0;
				for (let l of new Uo(i, e, t - e, i, N_)) o += l;
				return o;
			}
			let r = (t >> 3) << 3,
				n = e + (e % 8 == 0 ? 0 : 8 - (e % 8));
			return uc(i, e, n) + uc(i, r, t) + x_(i, n >> 3, (r - n) >> 3);
		}
		Ge.popcnt_bit_range = uc;
		function x_(i, e, t) {
			let r = 0,
				n = e | 0,
				o = new DataView(i.buffer, i.byteOffset, i.byteLength),
				l = t === void 0 ? i.byteLength : n + t;
			for (; l - n >= 4; ) (r += ko(o.getUint32(n))), (n += 4);
			for (; l - n >= 2; ) (r += ko(o.getUint16(n))), (n += 2);
			for (; l - n >= 1; ) (r += ko(o.getUint8(n))), (n += 1);
			return r;
		}
		Ge.popcnt_array = x_;
		function ko(i) {
			let e = i | 0;
			return (
				(e = e - ((e >>> 1) & 1431655765)),
				(e = (e & 858993459) + ((e >>> 2) & 858993459)),
				(((e + (e >>> 4)) & 252645135) * 16843009) >>> 24
			);
		}
		Ge.popcnt_uint32 = ko;
	});
	var ve = M((U) => {
		'use strict';
		Object.defineProperty(U, '__esModule', { value: !0 });
		U.strideForType =
			U.Dictionary =
			U.Map_ =
			U.FixedSizeList =
			U.FixedSizeBinary =
			U.SparseUnion =
			U.DenseUnion =
			U.Union =
			U.Struct =
			U.List =
			U.IntervalYearMonth =
			U.IntervalDayTime =
			U.Interval =
			U.TimestampNanosecond =
			U.TimestampMicrosecond =
			U.TimestampMillisecond =
			U.TimestampSecond =
			U.Timestamp =
			U.TimeNanosecond =
			U.TimeMicrosecond =
			U.TimeMillisecond =
			U.TimeSecond =
			U.Time =
			U.DateMillisecond =
			U.DateDay =
			U.Date_ =
			U.Decimal =
			U.Bool =
			U.Utf8 =
			U.Binary =
			U.Float64 =
			U.Float32 =
			U.Float16 =
			U.Float =
			U.Uint64 =
			U.Uint32 =
			U.Uint16 =
			U.Uint8 =
			U.Int64 =
			U.Int32 =
			U.Int16 =
			U.Int8 =
			U.Int =
			U.Null =
			U.DataType =
				void 0;
		var q = Se(),
			ke = class {
				static isNull(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.Null;
				}
				static isInt(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.Int;
				}
				static isFloat(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.Float;
				}
				static isBinary(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.Binary;
				}
				static isUtf8(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.Utf8;
				}
				static isBool(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.Bool;
				}
				static isDecimal(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.Decimal;
				}
				static isDate(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.Date;
				}
				static isTime(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.Time;
				}
				static isTimestamp(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.Timestamp;
				}
				static isInterval(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.Interval;
				}
				static isList(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.List;
				}
				static isStruct(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.Struct;
				}
				static isUnion(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.Union;
				}
				static isFixedSizeBinary(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.FixedSizeBinary;
				}
				static isFixedSizeList(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.FixedSizeList;
				}
				static isMap(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.Map;
				}
				static isDictionary(e) {
					return (e == null ? void 0 : e.typeId) === q.Type.Dictionary;
				}
				get typeId() {
					return q.Type.NONE;
				}
			};
		U.DataType = ke;
		ke[Symbol.toStringTag] = ((i) => (
			(i.children = null), (i.ArrayType = Array), (i[Symbol.toStringTag] = 'DataType')
		))(ke.prototype);
		var Vo = class extends ke {
			toString() {
				return 'Null';
			}
			get typeId() {
				return q.Type.Null;
			}
		};
		U.Null = Vo;
		Vo[Symbol.toStringTag] = ((i) => (i[Symbol.toStringTag] = 'Null'))(Vo.prototype);
		var Et = class extends ke {
			constructor(e, t) {
				super();
				(this.isSigned = e), (this.bitWidth = t);
			}
			get typeId() {
				return q.Type.Int;
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
		U.Int = Et;
		Et[Symbol.toStringTag] = ((i) => (
			(i.isSigned = null), (i.bitWidth = null), (i[Symbol.toStringTag] = 'Int')
		))(Et.prototype);
		var cc = class extends Et {
			constructor() {
				super(!0, 8);
			}
		};
		U.Int8 = cc;
		var lc = class extends Et {
			constructor() {
				super(!0, 16);
			}
		};
		U.Int16 = lc;
		var dc = class extends Et {
			constructor() {
				super(!0, 32);
			}
		};
		U.Int32 = dc;
		var fc = class extends Et {
			constructor() {
				super(!0, 64);
			}
		};
		U.Int64 = fc;
		var hc = class extends Et {
			constructor() {
				super(!1, 8);
			}
		};
		U.Uint8 = hc;
		var pc = class extends Et {
			constructor() {
				super(!1, 16);
			}
		};
		U.Uint16 = pc;
		var yc = class extends Et {
			constructor() {
				super(!1, 32);
			}
		};
		U.Uint32 = yc;
		var _c = class extends Et {
			constructor() {
				super(!1, 64);
			}
		};
		U.Uint64 = _c;
		Object.defineProperty(cc.prototype, 'ArrayType', { value: Int8Array });
		Object.defineProperty(lc.prototype, 'ArrayType', { value: Int16Array });
		Object.defineProperty(dc.prototype, 'ArrayType', { value: Int32Array });
		Object.defineProperty(fc.prototype, 'ArrayType', { value: Int32Array });
		Object.defineProperty(hc.prototype, 'ArrayType', { value: Uint8Array });
		Object.defineProperty(pc.prototype, 'ArrayType', { value: Uint16Array });
		Object.defineProperty(yc.prototype, 'ArrayType', { value: Uint32Array });
		Object.defineProperty(_c.prototype, 'ArrayType', { value: Uint32Array });
		var Yr = class extends ke {
			constructor(e) {
				super();
				this.precision = e;
			}
			get typeId() {
				return q.Type.Float;
			}
			get ArrayType() {
				switch (this.precision) {
					case q.Precision.HALF:
						return Uint16Array;
					case q.Precision.SINGLE:
						return Float32Array;
					case q.Precision.DOUBLE:
						return Float64Array;
				}
				throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
			}
			toString() {
				return `Float${this.precision << 5 || 16}`;
			}
		};
		U.Float = Yr;
		Yr[Symbol.toStringTag] = ((i) => ((i.precision = null), (i[Symbol.toStringTag] = 'Float')))(
			Yr.prototype
		);
		var mc = class extends Yr {
			constructor() {
				super(q.Precision.HALF);
			}
		};
		U.Float16 = mc;
		var bc = class extends Yr {
			constructor() {
				super(q.Precision.SINGLE);
			}
		};
		U.Float32 = bc;
		var gc = class extends Yr {
			constructor() {
				super(q.Precision.DOUBLE);
			}
		};
		U.Float64 = gc;
		Object.defineProperty(mc.prototype, 'ArrayType', { value: Uint16Array });
		Object.defineProperty(bc.prototype, 'ArrayType', { value: Float32Array });
		Object.defineProperty(gc.prototype, 'ArrayType', { value: Float64Array });
		var Po = class extends ke {
			constructor() {
				super();
			}
			get typeId() {
				return q.Type.Binary;
			}
			toString() {
				return 'Binary';
			}
		};
		U.Binary = Po;
		Po[Symbol.toStringTag] = ((i) => (
			(i.ArrayType = Uint8Array), (i[Symbol.toStringTag] = 'Binary')
		))(Po.prototype);
		var No = class extends ke {
			constructor() {
				super();
			}
			get typeId() {
				return q.Type.Utf8;
			}
			toString() {
				return 'Utf8';
			}
		};
		U.Utf8 = No;
		No[Symbol.toStringTag] = ((i) => (
			(i.ArrayType = Uint8Array), (i[Symbol.toStringTag] = 'Utf8')
		))(No.prototype);
		var Lo = class extends ke {
			constructor() {
				super();
			}
			get typeId() {
				return q.Type.Bool;
			}
			toString() {
				return 'Bool';
			}
		};
		U.Bool = Lo;
		Lo[Symbol.toStringTag] = ((i) => (
			(i.ArrayType = Uint8Array), (i[Symbol.toStringTag] = 'Bool')
		))(Lo.prototype);
		var xo = class extends ke {
			constructor(e, t) {
				super();
				(this.scale = e), (this.precision = t);
			}
			get typeId() {
				return q.Type.Decimal;
			}
			toString() {
				return `Decimal[${this.precision}e${this.scale > 0 ? '+' : ''}${this.scale}]`;
			}
		};
		U.Decimal = xo;
		xo[Symbol.toStringTag] = ((i) => (
			(i.scale = null),
			(i.precision = null),
			(i.ArrayType = Uint32Array),
			(i[Symbol.toStringTag] = 'Decimal')
		))(xo.prototype);
		var yn = class extends ke {
			constructor(e) {
				super();
				this.unit = e;
			}
			get typeId() {
				return q.Type.Date;
			}
			toString() {
				return `Date${(this.unit + 1) * 32}<${q.DateUnit[this.unit]}>`;
			}
		};
		U.Date_ = yn;
		yn[Symbol.toStringTag] = ((i) => (
			(i.unit = null), (i.ArrayType = Int32Array), (i[Symbol.toStringTag] = 'Date')
		))(yn.prototype);
		var q_ = class extends yn {
			constructor() {
				super(q.DateUnit.DAY);
			}
		};
		U.DateDay = q_;
		var W_ = class extends yn {
			constructor() {
				super(q.DateUnit.MILLISECOND);
			}
		};
		U.DateMillisecond = W_;
		var tr = class extends ke {
			constructor(e, t) {
				super();
				(this.unit = e), (this.bitWidth = t);
			}
			get typeId() {
				return q.Type.Time;
			}
			toString() {
				return `Time${this.bitWidth}<${q.TimeUnit[this.unit]}>`;
			}
		};
		U.Time = tr;
		tr[Symbol.toStringTag] = ((i) => (
			(i.unit = null),
			(i.bitWidth = null),
			(i.ArrayType = Int32Array),
			(i[Symbol.toStringTag] = 'Time')
		))(tr.prototype);
		var z_ = class extends tr {
			constructor() {
				super(q.TimeUnit.SECOND, 32);
			}
		};
		U.TimeSecond = z_;
		var H_ = class extends tr {
			constructor() {
				super(q.TimeUnit.MILLISECOND, 32);
			}
		};
		U.TimeMillisecond = H_;
		var Y_ = class extends tr {
			constructor() {
				super(q.TimeUnit.MICROSECOND, 64);
			}
		};
		U.TimeMicrosecond = Y_;
		var G_ = class extends tr {
			constructor() {
				super(q.TimeUnit.NANOSECOND, 64);
			}
		};
		U.TimeNanosecond = G_;
		var ir = class extends ke {
			constructor(e, t) {
				super();
				(this.unit = e), (this.timezone = t);
			}
			get typeId() {
				return q.Type.Timestamp;
			}
			toString() {
				return `Timestamp<${q.TimeUnit[this.unit]}${this.timezone ? `, ${this.timezone}` : ''}>`;
			}
		};
		U.Timestamp = ir;
		ir[Symbol.toStringTag] = ((i) => (
			(i.unit = null),
			(i.timezone = null),
			(i.ArrayType = Int32Array),
			(i[Symbol.toStringTag] = 'Timestamp')
		))(ir.prototype);
		var $_ = class extends ir {
			constructor(e) {
				super(q.TimeUnit.SECOND, e);
			}
		};
		U.TimestampSecond = $_;
		var J_ = class extends ir {
			constructor(e) {
				super(q.TimeUnit.MILLISECOND, e);
			}
		};
		U.TimestampMillisecond = J_;
		var K_ = class extends ir {
			constructor(e) {
				super(q.TimeUnit.MICROSECOND, e);
			}
		};
		U.TimestampMicrosecond = K_;
		var Z_ = class extends ir {
			constructor(e) {
				super(q.TimeUnit.NANOSECOND, e);
			}
		};
		U.TimestampNanosecond = Z_;
		var _n = class extends ke {
			constructor(e) {
				super();
				this.unit = e;
			}
			get typeId() {
				return q.Type.Interval;
			}
			toString() {
				return `Interval<${q.IntervalUnit[this.unit]}>`;
			}
		};
		U.Interval = _n;
		_n[Symbol.toStringTag] = ((i) => (
			(i.unit = null), (i.ArrayType = Int32Array), (i[Symbol.toStringTag] = 'Interval')
		))(_n.prototype);
		var X_ = class extends _n {
			constructor() {
				super(q.IntervalUnit.DAY_TIME);
			}
		};
		U.IntervalDayTime = X_;
		var Q_ = class extends _n {
			constructor() {
				super(q.IntervalUnit.YEAR_MONTH);
			}
		};
		U.IntervalYearMonth = Q_;
		var qo = class extends ke {
			constructor(e) {
				super();
				this.children = [e];
			}
			get typeId() {
				return q.Type.List;
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
		U.List = qo;
		qo[Symbol.toStringTag] = ((i) => ((i.children = null), (i[Symbol.toStringTag] = 'List')))(
			qo.prototype
		);
		var Wo = class extends ke {
			constructor(e) {
				super();
				this.children = e;
			}
			get typeId() {
				return q.Type.Struct;
			}
			toString() {
				return `Struct<{${this.children.map((e) => `${e.name}:${e.type}`).join(', ')}}>`;
			}
		};
		U.Struct = Wo;
		Wo[Symbol.toStringTag] = ((i) => ((i.children = null), (i[Symbol.toStringTag] = 'Struct')))(
			Wo.prototype
		);
		var mn = class extends ke {
			constructor(e, t, r) {
				super();
				(this.mode = e),
					(this.children = r),
					(this.typeIds = t = Int32Array.from(t)),
					(this.typeIdToChildIndex = t.reduce(
						(n, o, l) => ((n[o] = l) && n) || n,
						Object.create(null)
					));
			}
			get typeId() {
				return q.Type.Union;
			}
			toString() {
				return `${this[Symbol.toStringTag]}<${this.children.map((e) => `${e.type}`).join(' | ')}>`;
			}
		};
		U.Union = mn;
		mn[Symbol.toStringTag] = ((i) => (
			(i.mode = null),
			(i.typeIds = null),
			(i.children = null),
			(i.typeIdToChildIndex = null),
			(i.ArrayType = Int8Array),
			(i[Symbol.toStringTag] = 'Union')
		))(mn.prototype);
		var em = class extends mn {
			constructor(e, t) {
				super(q.UnionMode.Dense, e, t);
			}
		};
		U.DenseUnion = em;
		var tm = class extends mn {
			constructor(e, t) {
				super(q.UnionMode.Sparse, e, t);
			}
		};
		U.SparseUnion = tm;
		var zo = class extends ke {
			constructor(e) {
				super();
				this.byteWidth = e;
			}
			get typeId() {
				return q.Type.FixedSizeBinary;
			}
			toString() {
				return `FixedSizeBinary[${this.byteWidth}]`;
			}
		};
		U.FixedSizeBinary = zo;
		zo[Symbol.toStringTag] = ((i) => (
			(i.byteWidth = null), (i.ArrayType = Uint8Array), (i[Symbol.toStringTag] = 'FixedSizeBinary')
		))(zo.prototype);
		var Ho = class extends ke {
			constructor(e, t) {
				super();
				(this.listSize = e), (this.children = [t]);
			}
			get typeId() {
				return q.Type.FixedSizeList;
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
		U.FixedSizeList = Ho;
		Ho[Symbol.toStringTag] = ((i) => (
			(i.children = null), (i.listSize = null), (i[Symbol.toStringTag] = 'FixedSizeList')
		))(Ho.prototype);
		var Yo = class extends ke {
			constructor(e, t = !1) {
				super();
				(this.children = [e]), (this.keysSorted = t);
			}
			get typeId() {
				return q.Type.Map;
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
		U.Map_ = Yo;
		Yo[Symbol.toStringTag] = ((i) => (
			(i.children = null), (i.keysSorted = null), (i[Symbol.toStringTag] = 'Map_')
		))(Yo.prototype);
		var TA = (
				(i) => () =>
					++i
			)(-1),
			Go = class extends ke {
				constructor(e, t, r, n) {
					super();
					(this.indices = t),
						(this.dictionary = e),
						(this.isOrdered = n || !1),
						(this.id = r == null ? TA() : typeof r == 'number' ? r : r.low);
				}
				get typeId() {
					return q.Type.Dictionary;
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
		U.Dictionary = Go;
		Go[Symbol.toStringTag] = ((i) => (
			(i.id = null),
			(i.indices = null),
			(i.isOrdered = null),
			(i.dictionary = null),
			(i[Symbol.toStringTag] = 'Dictionary')
		))(Go.prototype);
		function IA(i) {
			let e = i;
			switch (i.typeId) {
				case q.Type.Decimal:
					return 4;
				case q.Type.Timestamp:
					return 2;
				case q.Type.Date:
					return 1 + e.unit;
				case q.Type.Interval:
					return 1 + e.unit;
				case q.Type.Int:
					return 1 + +(e.bitWidth > 32);
				case q.Type.Time:
					return 1 + +(e.bitWidth > 32);
				case q.Type.FixedSizeList:
					return e.listSize;
				case q.Type.FixedSizeBinary:
					return e.byteWidth;
				default:
					return 1;
			}
		}
		U.strideForType = IA;
	});
	var Xt = M((Gr) => {
		'use strict';
		Object.defineProperty(Gr, '__esModule', { value: !0 });
		Gr.Data = Gr.kUnknownNullCount = void 0;
		var BA = li(),
			SA = li(),
			H = Se(),
			AA = ve(),
			_e = Xe();
		Gr.kUnknownNullCount = -1;
		var ne = class {
			constructor(e, t, r, n, o, l, _) {
				(this.type = e),
					(this.dictionary = _),
					(this.offset = Math.floor(Math.max(t || 0, 0))),
					(this.length = Math.floor(Math.max(r || 0, 0))),
					(this._nullCount = Math.floor(Math.max(n || 0, -1))),
					(this.childData = (l || []).map((B) => (B instanceof ne ? B : B.data)));
				let v;
				o instanceof ne
					? ((this.stride = o.stride),
					  (this.values = o.values),
					  (this.typeIds = o.typeIds),
					  (this.nullBitmap = o.nullBitmap),
					  (this.valueOffsets = o.valueOffsets))
					: ((this.stride = AA.strideForType(e)),
					  o &&
							((v = o[0]) && (this.valueOffsets = v),
							(v = o[1]) && (this.values = v),
							(v = o[2]) && (this.nullBitmap = v),
							(v = o[3]) && (this.typeIds = v)));
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
					{ valueOffsets: t, values: r, nullBitmap: n, typeIds: o } = this;
				return (
					t && (e += t.byteLength),
					r && (e += r.byteLength),
					n && (e += n.byteLength),
					o && (e += o.byteLength),
					this.childData.reduce((l, _) => l + _.byteLength, e)
				);
			}
			get nullCount() {
				let e = this._nullCount,
					t;
				return (
					e <= Gr.kUnknownNullCount &&
						(t = this.nullBitmap) &&
						(this._nullCount = e =
							this.length - SA.popcnt_bit_range(t, this.offset, this.offset + this.length)),
					e
				);
			}
			clone(
				e,
				t = this.offset,
				r = this.length,
				n = this._nullCount,
				o = this,
				l = this.childData
			) {
				return new ne(e, t, r, n, o, l, this.dictionary);
			}
			slice(e, t) {
				let { stride: r, typeId: n, childData: o } = this,
					l = +(this._nullCount === 0) - 1,
					_ = n === 16 ? r : 1,
					v = this._sliceBuffers(e, t, r, n);
				return this.clone(
					this.type,
					this.offset + e,
					t,
					l,
					v,
					!o.length || this.valueOffsets ? o : this._sliceChildren(o, _ * e, _ * t)
				);
			}
			_changeLengthAndBackfillNullBitmap(e) {
				if (this.typeId === H.Type.Null) return this.clone(this.type, 0, e, 0);
				let { length: t, nullCount: r } = this,
					n = new Uint8Array(((e + 63) & ~63) >> 3).fill(255, 0, t >> 3);
				(n[t >> 3] = (1 << (t - (t & ~7))) - 1),
					r > 0 && n.set(BA.truncateBitmap(this.offset, t, this.nullBitmap), 0);
				let o = this.buffers;
				return (o[H.BufferType.VALIDITY] = n), this.clone(this.type, 0, e, r + (e - t), o);
			}
			_sliceBuffers(e, t, r, n) {
				let o,
					{ buffers: l } = this;
				return (
					(o = l[H.BufferType.TYPE]) && (l[H.BufferType.TYPE] = o.subarray(e, e + t)),
					((o = l[H.BufferType.OFFSET]) && (l[H.BufferType.OFFSET] = o.subarray(e, e + t + 1))) ||
						((o = l[H.BufferType.DATA]) &&
							(l[H.BufferType.DATA] = n === 6 ? o : o.subarray(r * e, r * (e + t)))),
					l
				);
			}
			_sliceChildren(e, t, r) {
				return e.map((n) => n.slice(t, r));
			}
			static new(e, t, r, n, o, l, _) {
				switch ((o instanceof ne ? (o = o.buffers) : o || (o = []), e.typeId)) {
					case H.Type.Null:
						return ne.Null(e, t, r);
					case H.Type.Int:
						return ne.Int(e, t, r, n || 0, o[H.BufferType.VALIDITY], o[H.BufferType.DATA] || []);
					case H.Type.Dictionary:
						return ne.Dictionary(
							e,
							t,
							r,
							n || 0,
							o[H.BufferType.VALIDITY],
							o[H.BufferType.DATA] || [],
							_
						);
					case H.Type.Float:
						return ne.Float(e, t, r, n || 0, o[H.BufferType.VALIDITY], o[H.BufferType.DATA] || []);
					case H.Type.Bool:
						return ne.Bool(e, t, r, n || 0, o[H.BufferType.VALIDITY], o[H.BufferType.DATA] || []);
					case H.Type.Decimal:
						return ne.Decimal(
							e,
							t,
							r,
							n || 0,
							o[H.BufferType.VALIDITY],
							o[H.BufferType.DATA] || []
						);
					case H.Type.Date:
						return ne.Date(e, t, r, n || 0, o[H.BufferType.VALIDITY], o[H.BufferType.DATA] || []);
					case H.Type.Time:
						return ne.Time(e, t, r, n || 0, o[H.BufferType.VALIDITY], o[H.BufferType.DATA] || []);
					case H.Type.Timestamp:
						return ne.Timestamp(
							e,
							t,
							r,
							n || 0,
							o[H.BufferType.VALIDITY],
							o[H.BufferType.DATA] || []
						);
					case H.Type.Interval:
						return ne.Interval(
							e,
							t,
							r,
							n || 0,
							o[H.BufferType.VALIDITY],
							o[H.BufferType.DATA] || []
						);
					case H.Type.FixedSizeBinary:
						return ne.FixedSizeBinary(
							e,
							t,
							r,
							n || 0,
							o[H.BufferType.VALIDITY],
							o[H.BufferType.DATA] || []
						);
					case H.Type.Binary:
						return ne.Binary(
							e,
							t,
							r,
							n || 0,
							o[H.BufferType.VALIDITY],
							o[H.BufferType.OFFSET] || [],
							o[H.BufferType.DATA] || []
						);
					case H.Type.Utf8:
						return ne.Utf8(
							e,
							t,
							r,
							n || 0,
							o[H.BufferType.VALIDITY],
							o[H.BufferType.OFFSET] || [],
							o[H.BufferType.DATA] || []
						);
					case H.Type.List:
						return ne.List(
							e,
							t,
							r,
							n || 0,
							o[H.BufferType.VALIDITY],
							o[H.BufferType.OFFSET] || [],
							(l || [])[0]
						);
					case H.Type.FixedSizeList:
						return ne.FixedSizeList(e, t, r, n || 0, o[H.BufferType.VALIDITY], (l || [])[0]);
					case H.Type.Struct:
						return ne.Struct(e, t, r, n || 0, o[H.BufferType.VALIDITY], l || []);
					case H.Type.Map:
						return ne.Map(
							e,
							t,
							r,
							n || 0,
							o[H.BufferType.VALIDITY],
							o[H.BufferType.OFFSET] || [],
							(l || [])[0]
						);
					case H.Type.Union:
						return ne.Union(
							e,
							t,
							r,
							n || 0,
							o[H.BufferType.VALIDITY],
							o[H.BufferType.TYPE] || [],
							o[H.BufferType.OFFSET] || l,
							l
						);
				}
				throw new Error(`Unrecognized typeId ${e.typeId}`);
			}
			static Null(e, t, r) {
				return new ne(e, t, r, 0);
			}
			static Int(e, t, r, n, o, l) {
				return new ne(e, t, r, n, [
					void 0,
					_e.toArrayBufferView(e.ArrayType, l),
					_e.toUint8Array(o)
				]);
			}
			static Dictionary(e, t, r, n, o, l, _) {
				return new ne(
					e,
					t,
					r,
					n,
					[void 0, _e.toArrayBufferView(e.indices.ArrayType, l), _e.toUint8Array(o)],
					[],
					_
				);
			}
			static Float(e, t, r, n, o, l) {
				return new ne(e, t, r, n, [
					void 0,
					_e.toArrayBufferView(e.ArrayType, l),
					_e.toUint8Array(o)
				]);
			}
			static Bool(e, t, r, n, o, l) {
				return new ne(e, t, r, n, [
					void 0,
					_e.toArrayBufferView(e.ArrayType, l),
					_e.toUint8Array(o)
				]);
			}
			static Decimal(e, t, r, n, o, l) {
				return new ne(e, t, r, n, [
					void 0,
					_e.toArrayBufferView(e.ArrayType, l),
					_e.toUint8Array(o)
				]);
			}
			static Date(e, t, r, n, o, l) {
				return new ne(e, t, r, n, [
					void 0,
					_e.toArrayBufferView(e.ArrayType, l),
					_e.toUint8Array(o)
				]);
			}
			static Time(e, t, r, n, o, l) {
				return new ne(e, t, r, n, [
					void 0,
					_e.toArrayBufferView(e.ArrayType, l),
					_e.toUint8Array(o)
				]);
			}
			static Timestamp(e, t, r, n, o, l) {
				return new ne(e, t, r, n, [
					void 0,
					_e.toArrayBufferView(e.ArrayType, l),
					_e.toUint8Array(o)
				]);
			}
			static Interval(e, t, r, n, o, l) {
				return new ne(e, t, r, n, [
					void 0,
					_e.toArrayBufferView(e.ArrayType, l),
					_e.toUint8Array(o)
				]);
			}
			static FixedSizeBinary(e, t, r, n, o, l) {
				return new ne(e, t, r, n, [
					void 0,
					_e.toArrayBufferView(e.ArrayType, l),
					_e.toUint8Array(o)
				]);
			}
			static Binary(e, t, r, n, o, l, _) {
				return new ne(e, t, r, n, [_e.toInt32Array(l), _e.toUint8Array(_), _e.toUint8Array(o)]);
			}
			static Utf8(e, t, r, n, o, l, _) {
				return new ne(e, t, r, n, [_e.toInt32Array(l), _e.toUint8Array(_), _e.toUint8Array(o)]);
			}
			static List(e, t, r, n, o, l, _) {
				return new ne(e, t, r, n, [_e.toInt32Array(l), void 0, _e.toUint8Array(o)], _ ? [_] : []);
			}
			static FixedSizeList(e, t, r, n, o, l) {
				return new ne(e, t, r, n, [void 0, void 0, _e.toUint8Array(o)], l ? [l] : []);
			}
			static Struct(e, t, r, n, o, l) {
				return new ne(e, t, r, n, [void 0, void 0, _e.toUint8Array(o)], l);
			}
			static Map(e, t, r, n, o, l, _) {
				return new ne(e, t, r, n, [_e.toInt32Array(l), void 0, _e.toUint8Array(o)], _ ? [_] : []);
			}
			static Union(e, t, r, n, o, l, _, v) {
				let B = [void 0, void 0, _e.toUint8Array(o), _e.toArrayBufferView(e.ArrayType, l)];
				return e.mode === H.UnionMode.Sparse
					? new ne(e, t, r, n, B, _)
					: ((B[H.BufferType.OFFSET] = _e.toInt32Array(_)), new ne(e, t, r, n, B, v));
			}
		};
		Gr.Data = ne;
		ne.prototype.childData = Object.freeze([]);
	});
	var vc = M(($o) => {
		'use strict';
		Object.defineProperty($o, '__esModule', { value: !0 });
		$o.valueToString = void 0;
		var DA = void 0;
		function FA(i) {
			if (i === null) return 'null';
			if (i === DA) return 'undefined';
			switch (typeof i) {
				case 'number':
					return `${i}`;
				case 'bigint':
					return `${i}`;
				case 'string':
					return `"${i}"`;
			}
			return typeof i[Symbol.toPrimitive] == 'function'
				? i[Symbol.toPrimitive]('string')
				: ArrayBuffer.isView(i)
				? `[${i}]`
				: JSON.stringify(i);
		}
		$o.valueToString = FA;
	});
	var im = M((Jo) => {
		'use strict';
		Object.defineProperty(Jo, '__esModule', { value: !0 });
		Jo.createIsValidFunction = void 0;
		var jc = vc(),
			OA = ft();
		function EA(i) {
			if (!i || i.length <= 0)
				return function (n) {
					return !0;
				};
			let e = '',
				t = i.filter((r) => r === r);
			return (
				t.length > 0 &&
					(e = `
    switch (x) {${t
			.map(
				(r) => `
        case ${MA(r)}:`
			)
			.join('')}
            return false;
    }`),
				i.length !== t.length &&
					(e = `if (x !== x) return false;
${e}`),
				new Function(
					'x',
					`${e}
return true;`
				)
			);
		}
		Jo.createIsValidFunction = EA;
		function MA(i) {
			return typeof i != 'bigint'
				? jc.valueToString(i)
				: OA.BigIntAvailable
				? `${jc.valueToString(i)}n`
				: `"${jc.valueToString(i)}"`;
		}
	});
	var rr = M((Mt) => {
		'use strict';
		Object.defineProperty(Mt, '__esModule', { value: !0 });
		Mt.WideBufferBuilder =
			Mt.OffsetsBufferBuilder =
			Mt.BitmapBufferBuilder =
			Mt.DataBufferBuilder =
			Mt.BufferBuilder =
				void 0;
		var rm = Xe(),
			wc = ft(),
			Tc = (i, e) => ((i * e + 63) & ~63 || 64) / e,
			CA = (i, e = 0) => (i.length >= e ? i.subarray(0, e) : rm.memcpy(new i.constructor(e), i, 0)),
			ws = class {
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
							r = this.length * t,
							n = this.buffer.length;
						r >= n &&
							this._resize(
								n === 0 ? Tc(r * 1, this.BYTES_PER_ELEMENT) : Tc(r * 2, this.BYTES_PER_ELEMENT)
							);
					}
					return this;
				}
				flush(e = this.length) {
					e = Tc(e * this.stride, this.BYTES_PER_ELEMENT);
					let t = CA(this.buffer, e);
					return this.clear(), t;
				}
				clear() {
					return (this.length = 0), this._resize(0), this;
				}
				_resize(e) {
					return (this.buffer = rm.memcpy(new this.ArrayType(e), this.buffer));
				}
			};
		Mt.BufferBuilder = ws;
		ws.prototype.offset = 0;
		var Ko = class extends ws {
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
		Mt.DataBufferBuilder = Ko;
		var nm = class extends Ko {
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
				let { buffer: r } = this.reserve(e - this.length + 1),
					n = e >> 3,
					o = e % 8,
					l = (r[n] >> o) & 1;
				return (
					t
						? l === 0 && ((r[n] |= 1 << o), ++this.numValid)
						: l === 1 && ((r[n] &= ~(1 << o)), --this.numValid),
					this
				);
			}
			clear() {
				return (this.numValid = 0), super.clear();
			}
		};
		Mt.BitmapBufferBuilder = nm;
		var sm = class extends Ko {
			constructor(e = new Int32Array(1)) {
				super(e, 1);
			}
			append(e) {
				return this.set(this.length - 1, e);
			}
			set(e, t) {
				let r = this.length - 1,
					n = this.reserve(e - r + 1).buffer;
				return r < e++ && n.fill(n[r], r, e), (n[e] = n[e - 1] + t), this;
			}
			flush(e = this.length - 1) {
				return e > this.length && this.set(e - 1, 0), super.flush(e + 1);
			}
		};
		Mt.OffsetsBufferBuilder = sm;
		var om = class extends ws {
			get ArrayType64() {
				return (
					this._ArrayType64 ||
					(this._ArrayType64 =
						this.buffer instanceof Int32Array ? wc.BigInt64Array : wc.BigUint64Array)
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
					r = t.byteLength / (this.BYTES_PER_ELEMENT * this.stride);
				return (
					wc.BigIntAvailable && (this.buffer64 = new this.ArrayType64(t.buffer, t.byteOffset, r)), t
				);
			}
		};
		Mt.WideBufferBuilder = om;
	});
	var Ve = M((nr) => {
		'use strict';
		Object.defineProperty(nr, '__esModule', { value: !0 });
		nr.VariableWidthBuilder = nr.FixedWidthBuilder = nr.Builder = void 0;
		var bn = dt(),
			RA = We(),
			gn = Se(),
			UA = Xt(),
			kA = im(),
			Ic = rr(),
			VA = ve(),
			Ct = class {
				constructor({ type: e, nullValues: t }) {
					(this.length = 0),
						(this.finished = !1),
						(this.type = e),
						(this.children = []),
						(this.nullValues = t),
						(this.stride = VA.strideForType(e)),
						(this._nulls = new Ic.BitmapBufferBuilder()),
						t && t.length > 0 && (this._isValid = kA.createIsValidFunction(t));
				}
				static new(e) {}
				static throughNode(e) {
					throw new Error('"throughNode" not available in this environment');
				}
				static throughDOM(e) {
					throw new Error('"throughDOM" not available in this environment');
				}
				static throughIterable(e) {
					return PA(e);
				}
				static throughAsyncIterable(e) {
					return NA(e);
				}
				toVector() {
					return RA.Vector.new(this.flush());
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
						this.children.reduce((t, r) => t + r.byteLength, e)
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
						this.children.reduce((t, r) => t + r.reservedByteLength, e)
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
						r = this._offsets,
						n = this._typeIds,
						{ length: o, nullCount: l } = this;
					n
						? ((e[gn.BufferType.TYPE] = n.flush(o)), r && (e[gn.BufferType.OFFSET] = r.flush(o)))
						: r
						? (t && (e[gn.BufferType.DATA] = t.flush(r.last())),
						  (e[gn.BufferType.OFFSET] = r.flush(o)))
						: t && (e[gn.BufferType.DATA] = t.flush(o)),
						l > 0 && (e[gn.BufferType.VALIDITY] = this._nulls.flush(o));
					let _ = UA.Data.new(
						this.type,
						0,
						o,
						l,
						e,
						this.children.map((v) => v.flush())
					);
					return this.clear(), _;
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
		nr.Builder = Ct;
		Ct.prototype.length = 1;
		Ct.prototype.stride = 1;
		Ct.prototype.children = null;
		Ct.prototype.finished = !1;
		Ct.prototype.nullValues = null;
		Ct.prototype._isValid = () => !0;
		var am = class extends Ct {
			constructor(e) {
				super(e);
				this._values = new Ic.DataBufferBuilder(new this.ArrayType(0), this.stride);
			}
			setValue(e, t) {
				let r = this._values;
				return r.reserve(e - r.length + 1), super.setValue(e, t);
			}
		};
		nr.FixedWidthBuilder = am;
		var um = class extends Ct {
			constructor(e) {
				super(e);
				(this._pendingLength = 0), (this._offsets = new Ic.OffsetsBufferBuilder());
			}
			setValue(e, t) {
				let r = this._pending || (this._pending = new Map()),
					n = r.get(e);
				n && (this._pendingLength -= n.length), (this._pendingLength += t.length), r.set(e, t);
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
		nr.VariableWidthBuilder = um;
		function PA(i) {
			let { ['queueingStrategy']: e = 'count' } = i,
				{ ['highWaterMark']: t = e !== 'bytes' ? 1e3 : Math.pow(2, 14) } = i,
				r = e !== 'bytes' ? 'length' : 'byteLength';
			return function* (n) {
				let o = 0,
					l = Ct.new(i);
				for (let _ of n) l.append(_)[r] >= t && ++o && (yield l.toVector());
				(l.finish().length > 0 || o === 0) && (yield l.toVector());
			};
		}
		function NA(i) {
			let { ['queueingStrategy']: e = 'count' } = i,
				{ ['highWaterMark']: t = e !== 'bytes' ? 1e3 : Math.pow(2, 14) } = i,
				r = e !== 'bytes' ? 'length' : 'byteLength';
			return function (n) {
				return bn.__asyncGenerator(this, arguments, function* () {
					var o, l;
					let _ = 0,
						v = Ct.new(i);
					try {
						for (var B = bn.__asyncValues(n), D; (D = yield bn.__await(B.next())), !D.done; ) {
							let N = D.value;
							v.append(N)[r] >= t && ++_ && (yield yield bn.__await(v.toVector()));
						}
					} catch (N) {
						o = { error: N };
					} finally {
						try {
							D && !D.done && (l = B.return) && (yield bn.__await(l.call(B)));
						} finally {
							if (o) throw o.error;
						}
					}
					(v.finish().length > 0 || _ === 0) && (yield yield bn.__await(v.toVector()));
				});
			};
		}
	});
	var Bc = M((Zo) => {
		'use strict';
		Object.defineProperty(Zo, '__esModule', { value: !0 });
		Zo.BoolBuilder = void 0;
		var LA = rr(),
			xA = Ve(),
			cm = class extends xA.Builder {
				constructor(e) {
					super(e);
					this._values = new LA.BitmapBufferBuilder();
				}
				setValue(e, t) {
					this._values.set(e, +t);
				}
			};
		Zo.BoolBuilder = cm;
	});
	var Sc = M((Xo) => {
		'use strict';
		Object.defineProperty(Xo, '__esModule', { value: !0 });
		Xo.NullBuilder = void 0;
		var qA = Ve(),
			lm = class extends qA.Builder {
				setValue(e, t) {}
				setValid(e, t) {
					return (this.length = Math.max(e + 1, this.length)), t;
				}
			};
		Xo.NullBuilder = lm;
	});
	var Ac = M((sr) => {
		'use strict';
		Object.defineProperty(sr, '__esModule', { value: !0 });
		sr.DateMillisecondBuilder = sr.DateDayBuilder = sr.DateBuilder = void 0;
		var WA = Ve(),
			Qo = class extends WA.FixedWidthBuilder {};
		sr.DateBuilder = Qo;
		var dm = class extends Qo {};
		sr.DateDayBuilder = dm;
		var fm = class extends Qo {};
		sr.DateMillisecondBuilder = fm;
	});
	var Dc = M((ea) => {
		'use strict';
		Object.defineProperty(ea, '__esModule', { value: !0 });
		ea.DecimalBuilder = void 0;
		var zA = Ve(),
			hm = class extends zA.FixedWidthBuilder {};
		ea.DecimalBuilder = hm;
	});
	var Oc = M((ta) => {
		'use strict';
		Object.defineProperty(ta, '__esModule', { value: !0 });
		ta.DictionaryBuilder = void 0;
		var HA = ve(),
			Fc = Ve(),
			pm = class extends Fc.Builder {
				constructor({ type: e, nullValues: t, dictionaryHashFunction: r }) {
					super({ type: new HA.Dictionary(e.dictionary, e.indices, e.id, e.isOrdered) });
					(this._nulls = null),
						(this._dictionaryOffset = 0),
						(this._keysToIndices = Object.create(null)),
						(this.indices = Fc.Builder.new({ type: this.type.indices, nullValues: t })),
						(this.dictionary = Fc.Builder.new({ type: this.type.dictionary, nullValues: null })),
						typeof r == 'function' && (this.valueToKey = r);
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
					let r = this.indices;
					return (t = r.setValid(e, t)), (this.length = r.length), t;
				}
				setValue(e, t) {
					let r = this._keysToIndices,
						n = this.valueToKey(t),
						o = r[n];
					return (
						o === void 0 &&
							(r[n] = o = this._dictionaryOffset + this.dictionary.append(t).length - 1),
						this.indices.setValue(e, o)
					);
				}
				flush() {
					let e = this.type,
						t = this._dictionary,
						r = this.dictionary.toVector(),
						n = this.indices.flush().clone(e);
					return (
						(n.dictionary = t ? t.concat(r) : r),
						this.finished || (this._dictionaryOffset += r.length),
						(this._dictionary = n.dictionary),
						this.clear(),
						n
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
		ta.DictionaryBuilder = pm;
	});
	var Ec = M((ia) => {
		'use strict';
		Object.defineProperty(ia, '__esModule', { value: !0 });
		ia.FixedSizeBinaryBuilder = void 0;
		var YA = Ve(),
			ym = class extends YA.FixedWidthBuilder {};
		ia.FixedSizeBinaryBuilder = ym;
	});
	var Ts = M((jn) => {
		'use strict';
		Object.defineProperty(jn, '__esModule', { value: !0 });
		jn.float64ToUint16 = jn.uint16ToFloat64 = void 0;
		var _m = new Float64Array(1),
			vn = new Uint32Array(_m.buffer);
		function GA(i) {
			let e = (i & 31744) >> 10,
				t = (i & 1023) / 1024,
				r = Math.pow(-1, (i & 32768) >> 15);
			switch (e) {
				case 31:
					return r * (t ? NaN : 1 / 0);
				case 0:
					return r * (t ? 6103515625e-14 * t : 0);
			}
			return r * Math.pow(2, e - 15) * (1 + t);
		}
		jn.uint16ToFloat64 = GA;
		function $A(i) {
			if (i !== i) return 32256;
			_m[0] = i;
			let e = ((vn[1] & 2147483648) >> 16) & 65535,
				t = vn[1] & 2146435072,
				r = 0;
			return (
				t >= 1089470464
					? vn[0] > 0
						? (t = 31744)
						: ((t = (t & 2080374784) >> 16), (r = (vn[1] & 1048575) >> 10))
					: t <= 1056964608
					? ((r = 1048576 + (vn[1] & 1048575)),
					  (r = (1048576 + (r << ((t >> 20) - 998))) >> 21),
					  (t = 0))
					: ((t = (t - 1056964608) >> 10), (r = ((vn[1] & 1048575) + 512) >> 10)),
				e | t | (r & 65535)
			);
		}
		jn.float64ToUint16 = $A;
	});
	var Mc = M((di) => {
		'use strict';
		Object.defineProperty(di, '__esModule', { value: !0 });
		di.Float64Builder = di.Float32Builder = di.Float16Builder = di.FloatBuilder = void 0;
		var JA = Ts(),
			KA = Ve(),
			Is = class extends KA.FixedWidthBuilder {};
		di.FloatBuilder = Is;
		var mm = class extends Is {
			setValue(e, t) {
				this._values.set(e, JA.float64ToUint16(t));
			}
		};
		di.Float16Builder = mm;
		var bm = class extends Is {
			setValue(e, t) {
				this._values.set(e, t);
			}
		};
		di.Float32Builder = bm;
		var gm = class extends Is {
			setValue(e, t) {
				this._values.set(e, t);
			}
		};
		di.Float64Builder = gm;
	});
	var As = M((Qe) => {
		'use strict';
		Object.defineProperty(Qe, '__esModule', { value: !0 });
		Qe.BN = Qe.bignumToBigInt = Qe.bignumToString = Qe.isArrowBigNumSymbol = void 0;
		var ZA = Xe(),
			Bs = ft();
		Qe.isArrowBigNumSymbol = Symbol.for('isArrowBigNum');
		function Qt(i, ...e) {
			return e.length === 0
				? Object.setPrototypeOf(
						ZA.toArrayBufferView(this.TypedArray, i),
						this.constructor.prototype
				  )
				: Object.setPrototypeOf(new this.TypedArray(i, ...e), this.constructor.prototype);
		}
		Qt.prototype[Qe.isArrowBigNumSymbol] = !0;
		Qt.prototype.toJSON = function () {
			return `"${Qe.bignumToString(this)}"`;
		};
		Qt.prototype.valueOf = function () {
			return vm(this);
		};
		Qt.prototype.toString = function () {
			return Qe.bignumToString(this);
		};
		Qt.prototype[Symbol.toPrimitive] = function (i = 'default') {
			switch (i) {
				case 'number':
					return vm(this);
				case 'string':
					return Qe.bignumToString(this);
				case 'default':
					return Qe.bignumToBigInt(this);
			}
			return Qe.bignumToString(this);
		};
		function wn(...i) {
			return Qt.apply(this, i);
		}
		function Tn(...i) {
			return Qt.apply(this, i);
		}
		function Ss(...i) {
			return Qt.apply(this, i);
		}
		Object.setPrototypeOf(wn.prototype, Object.create(Int32Array.prototype));
		Object.setPrototypeOf(Tn.prototype, Object.create(Uint32Array.prototype));
		Object.setPrototypeOf(Ss.prototype, Object.create(Uint32Array.prototype));
		Object.assign(wn.prototype, Qt.prototype, {
			constructor: wn,
			signed: !0,
			TypedArray: Int32Array,
			BigIntArray: Bs.BigInt64Array
		});
		Object.assign(Tn.prototype, Qt.prototype, {
			constructor: Tn,
			signed: !1,
			TypedArray: Uint32Array,
			BigIntArray: Bs.BigUint64Array
		});
		Object.assign(Ss.prototype, Qt.prototype, {
			constructor: Ss,
			signed: !0,
			TypedArray: Uint32Array,
			BigIntArray: Bs.BigUint64Array
		});
		function vm(i) {
			let { buffer: e, byteOffset: t, length: r, signed: n } = i,
				o = new Int32Array(e, t, r),
				l = 0,
				_ = 0,
				v = o.length,
				B,
				D;
			for (; _ < v; )
				(D = o[_++]), (B = o[_++]), n || (B = B >>> 0), (l += (D >>> 0) + B * Math.pow(_, 32));
			return l;
		}
		Bs.BigIntAvailable
			? ((Qe.bignumToBigInt = (i) =>
					i.byteLength === 8 ? new i.BigIntArray(i.buffer, i.byteOffset, 1)[0] : Cc(i)),
			  (Qe.bignumToString = (i) =>
					i.byteLength === 8 ? `${new i.BigIntArray(i.buffer, i.byteOffset, 1)[0]}` : Cc(i)))
			: ((Qe.bignumToString = Cc), (Qe.bignumToBigInt = Qe.bignumToString));
		function Cc(i) {
			let e = '',
				t = new Uint32Array(2),
				r = new Uint16Array(i.buffer, i.byteOffset, i.byteLength / 2),
				n = new Uint32Array((r = new Uint16Array(r).reverse()).buffer),
				o = -1,
				l = r.length - 1;
			do {
				for (t[0] = r[(o = 0)]; o < l; )
					(r[o++] = t[1] = t[0] / 10), (t[0] = ((t[0] - t[1] * 10) << 16) + r[o]);
				(r[o] = t[1] = t[0] / 10), (t[0] = t[0] - t[1] * 10), (e = `${t[0]}${e}`);
			} while (n[0] || n[1] || n[2] || n[3]);
			return e || '0';
		}
		var ra = class {
			static new(e, t) {
				switch (t) {
					case !0:
						return new wn(e);
					case !1:
						return new Tn(e);
				}
				switch (e.constructor) {
					case Int8Array:
					case Int16Array:
					case Int32Array:
					case Bs.BigInt64Array:
						return new wn(e);
				}
				return e.byteLength === 16 ? new Ss(e) : new Tn(e);
			}
			static signed(e) {
				return new wn(e);
			}
			static unsigned(e) {
				return new Tn(e);
			}
			static decimal(e) {
				return new Ss(e);
			}
			constructor(e, t) {
				return ra.new(e, t);
			}
		};
		Qe.BN = ra;
	});
	var Rc = M(($e) => {
		'use strict';
		Object.defineProperty($e, '__esModule', { value: !0 });
		$e.Uint64Builder =
			$e.Uint32Builder =
			$e.Uint16Builder =
			$e.Uint8Builder =
			$e.Int64Builder =
			$e.Int32Builder =
			$e.Int16Builder =
			$e.Int8Builder =
			$e.IntBuilder =
				void 0;
		var XA = As(),
			jm = rr(),
			QA = ft(),
			eD = Ve(),
			fi = class extends eD.FixedWidthBuilder {
				setValue(e, t) {
					this._values.set(e, t);
				}
			};
		$e.IntBuilder = fi;
		var wm = class extends fi {};
		$e.Int8Builder = wm;
		var Tm = class extends fi {};
		$e.Int16Builder = Tm;
		var Im = class extends fi {};
		$e.Int32Builder = Im;
		var Bm = class extends fi {
			constructor(e) {
				e.nullValues && (e.nullValues = e.nullValues.map(na));
				super(e);
				this._values = new jm.WideBufferBuilder(new Int32Array(0), 2);
			}
			get values64() {
				return this._values.buffer64;
			}
			isValid(e) {
				return super.isValid(na(e));
			}
		};
		$e.Int64Builder = Bm;
		var Sm = class extends fi {};
		$e.Uint8Builder = Sm;
		var Am = class extends fi {};
		$e.Uint16Builder = Am;
		var Dm = class extends fi {};
		$e.Uint32Builder = Dm;
		var Fm = class extends fi {
			constructor(e) {
				e.nullValues && (e.nullValues = e.nullValues.map(na));
				super(e);
				this._values = new jm.WideBufferBuilder(new Uint32Array(0), 2);
			}
			get values64() {
				return this._values.buffer64;
			}
			isValid(e) {
				return super.isValid(na(e));
			}
		};
		$e.Uint64Builder = Fm;
		var na = ((i) => (e) => (
			ArrayBuffer.isView(e) &&
				((i.buffer = e.buffer),
				(i.byteOffset = e.byteOffset),
				(i.byteLength = e.byteLength),
				(e = XA.bignumToBigInt(i)),
				(i.buffer = null)),
			e
		))({ BigIntArray: QA.BigInt64Array });
	});
	var Uc = M((Rt) => {
		'use strict';
		Object.defineProperty(Rt, '__esModule', { value: !0 });
		Rt.TimeNanosecondBuilder =
			Rt.TimeMicrosecondBuilder =
			Rt.TimeMillisecondBuilder =
			Rt.TimeSecondBuilder =
			Rt.TimeBuilder =
				void 0;
		var tD = Ve(),
			In = class extends tD.FixedWidthBuilder {};
		Rt.TimeBuilder = In;
		var Om = class extends In {};
		Rt.TimeSecondBuilder = Om;
		var Em = class extends In {};
		Rt.TimeMillisecondBuilder = Em;
		var Mm = class extends In {};
		Rt.TimeMicrosecondBuilder = Mm;
		var Cm = class extends In {};
		Rt.TimeNanosecondBuilder = Cm;
	});
	var kc = M((Ut) => {
		'use strict';
		Object.defineProperty(Ut, '__esModule', { value: !0 });
		Ut.TimestampNanosecondBuilder =
			Ut.TimestampMicrosecondBuilder =
			Ut.TimestampMillisecondBuilder =
			Ut.TimestampSecondBuilder =
			Ut.TimestampBuilder =
				void 0;
		var iD = Ve(),
			Bn = class extends iD.FixedWidthBuilder {};
		Ut.TimestampBuilder = Bn;
		var Rm = class extends Bn {};
		Ut.TimestampSecondBuilder = Rm;
		var Um = class extends Bn {};
		Ut.TimestampMillisecondBuilder = Um;
		var km = class extends Bn {};
		Ut.TimestampMicrosecondBuilder = km;
		var Vm = class extends Bn {};
		Ut.TimestampNanosecondBuilder = Vm;
	});
	var Vc = M((or) => {
		'use strict';
		Object.defineProperty(or, '__esModule', { value: !0 });
		or.IntervalYearMonthBuilder = or.IntervalDayTimeBuilder = or.IntervalBuilder = void 0;
		var rD = Ve(),
			sa = class extends rD.FixedWidthBuilder {};
		or.IntervalBuilder = sa;
		var Pm = class extends sa {};
		or.IntervalDayTimeBuilder = Pm;
		var Nm = class extends sa {};
		or.IntervalYearMonthBuilder = Nm;
	});
	var aa = M((oa) => {
		'use strict';
		Object.defineProperty(oa, '__esModule', { value: !0 });
		oa.BinaryBuilder = void 0;
		var nD = Xe(),
			sD = rr(),
			oD = Ve(),
			Lm = class extends oD.VariableWidthBuilder {
				constructor(e) {
					super(e);
					this._values = new sD.BufferBuilder(new Uint8Array(0));
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
					return super.setValue(e, nD.toUint8Array(t));
				}
				_flushPending(e, t) {
					let r = this._offsets,
						n = this._values.reserve(t).buffer,
						o = 0,
						l = 0,
						_ = 0,
						v;
					for ([o, v] of e)
						v === void 0 ? r.set(o, 0) : ((l = v.length), n.set(v, _), r.set(o, l), (_ += l));
				}
			};
		oa.BinaryBuilder = Lm;
	});
	var ca = M((ua) => {
		'use strict';
		Object.defineProperty(ua, '__esModule', { value: !0 });
		ua.Utf8Builder = void 0;
		var aD = Rr(),
			uD = aa(),
			cD = rr(),
			lD = Ve(),
			Pc = class extends lD.VariableWidthBuilder {
				constructor(e) {
					super(e);
					this._values = new cD.BufferBuilder(new Uint8Array(0));
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
					return super.setValue(e, aD.encodeUtf8(t));
				}
				_flushPending(e, t) {}
			};
		ua.Utf8Builder = Pc;
		Pc.prototype._flushPending = uD.BinaryBuilder.prototype._flushPending;
	});
	var Nc = M((la) => {
		'use strict';
		Object.defineProperty(la, '__esModule', { value: !0 });
		la.Run = void 0;
		var dD = We(),
			xm = class {
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
					return e instanceof dD.Vector ? e : ((this._values = e), this);
				}
			};
		la.Run = xm;
	});
	var rt = M((Sn) => {
		'use strict';
		Object.defineProperty(Sn, '__esModule', { value: !0 });
		Sn.Field = Sn.Schema = void 0;
		var fD = ve(),
			kt = class {
				constructor(e = [], t, r) {
					(this.fields = e || []),
						(this.metadata = t || new Map()),
						r || (r = Lc(e)),
						(this.dictionaries = r);
				}
				get [Symbol.toStringTag]() {
					return 'Schema';
				}
				toString() {
					return `Schema<{ ${this.fields.map((e, t) => `${t}: ${e}`).join(', ')} }>`;
				}
				select(...e) {
					let t = e.reduce((r, n) => (r[n] = !0) && r, Object.create(null));
					return new kt(
						this.fields.filter((r) => t[r.name]),
						this.metadata
					);
				}
				selectAt(...e) {
					return new kt(e.map((t) => this.fields[t]).filter(Boolean), this.metadata);
				}
				assign(...e) {
					let t = e[0] instanceof kt ? e[0] : Array.isArray(e[0]) ? new kt(e[0]) : new kt(e),
						r = [...this.fields],
						n = da(da(new Map(), this.metadata), t.metadata),
						o = t.fields.filter((_) => {
							let v = r.findIndex((B) => B.name === _.name);
							return ~v
								? (r[v] = _.clone({ metadata: da(da(new Map(), r[v].metadata), _.metadata) })) && !1
								: !0;
						}),
						l = Lc(o, new Map());
					return new kt([...r, ...o], n, new Map([...this.dictionaries, ...l]));
				}
			};
		Sn.Schema = kt;
		var Ci = class {
			constructor(e, t, r = !1, n) {
				(this.name = e), (this.type = t), (this.nullable = r), (this.metadata = n || new Map());
			}
			static new(...e) {
				let [t, r, n, o] = e;
				return (
					e[0] &&
						typeof e[0] == 'object' &&
						(({ name: t } = e[0]),
						r === void 0 && (r = e[0].type),
						n === void 0 && (n = e[0].nullable),
						o === void 0 && (o = e[0].metadata)),
					new Ci(`${t}`, r, n, o)
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
				let [t, r, n, o] = e;
				return (
					!e[0] || typeof e[0] != 'object'
						? ([t = this.name, r = this.type, n = this.nullable, o = this.metadata] = e)
						: ({
								name: t = this.name,
								type: r = this.type,
								nullable: n = this.nullable,
								metadata: o = this.metadata
						  } = e[0]),
					Ci.new(t, r, n, o)
				);
			}
		};
		Sn.Field = Ci;
		function da(i, e) {
			return new Map([...(i || new Map()), ...(e || new Map())]);
		}
		function Lc(i, e = new Map()) {
			for (let t = -1, r = i.length; ++t < r; ) {
				let o = i[t].type;
				if (fD.DataType.isDictionary(o)) {
					if (!e.has(o.id)) e.set(o.id, o.dictionary);
					else if (e.get(o.id) !== o.dictionary)
						throw new Error(
							'Cannot create Schema containing two different dictionaries with the same Id'
						);
				}
				o.children && o.children.length > 0 && Lc(o.children, e);
			}
			return e;
		}
		kt.prototype.fields = null;
		kt.prototype.metadata = null;
		kt.prototype.dictionaries = null;
		Ci.prototype.type = null;
		Ci.prototype.name = null;
		Ci.prototype.nullable = null;
		Ci.prototype.metadata = null;
	});
	var xc = M((fa) => {
		'use strict';
		Object.defineProperty(fa, '__esModule', { value: !0 });
		fa.ListBuilder = void 0;
		var hD = Nc(),
			pD = rt(),
			yD = ve(),
			_D = rr(),
			mD = Ve(),
			qm = class extends mD.VariableWidthBuilder {
				constructor(e) {
					super(e);
					(this._run = new hD.Run()), (this._offsets = new _D.OffsetsBufferBuilder());
				}
				addChild(e, t = '0') {
					if (this.numChildren > 0) throw new Error('ListBuilder can only have one child.');
					return (
						(this.children[this.numChildren] = e),
						(this.type = new yD.List(new pD.Field(t, e.type, !0))),
						this.numChildren - 1
					);
				}
				clear() {
					return this._run.clear(), super.clear();
				}
				_flushPending(e) {
					let t = this._run,
						r = this._offsets,
						n = this._setValue,
						o = 0,
						l;
					for ([o, l] of e)
						l === void 0 ? r.set(o, 0) : (r.set(o, l.length), n(this, o, t.bind(l)));
				}
			};
		fa.ListBuilder = qm;
	});
	var qc = M((ha) => {
		'use strict';
		Object.defineProperty(ha, '__esModule', { value: !0 });
		ha.FixedSizeListBuilder = void 0;
		var bD = Nc(),
			gD = rt(),
			vD = Ve(),
			jD = ve(),
			Wm = class extends vD.Builder {
				constructor() {
					super(...arguments);
					this._run = new bD.Run();
				}
				setValue(e, t) {
					super.setValue(e, this._run.bind(t));
				}
				addChild(e, t = '0') {
					if (this.numChildren > 0)
						throw new Error('FixedSizeListBuilder can only have one child.');
					let r = this.children.push(e);
					return (
						(this.type = new jD.FixedSizeList(this.type.listSize, new gD.Field(t, e.type, !0))), r
					);
				}
				clear() {
					return this._run.clear(), super.clear();
				}
			};
		ha.FixedSizeListBuilder = Wm;
	});
	var Wc = M((pa) => {
		'use strict';
		Object.defineProperty(pa, '__esModule', { value: !0 });
		pa.MapBuilder = void 0;
		var wD = rt(),
			TD = ve(),
			ID = Ve(),
			zm = class extends ID.VariableWidthBuilder {
				set(e, t) {
					return super.set(e, t);
				}
				setValue(e, t) {
					t = t instanceof Map ? t : new Map(Object.entries(t));
					let r = this._pending || (this._pending = new Map()),
						n = r.get(e);
					n && (this._pendingLength -= n.size), (this._pendingLength += t.size), r.set(e, t);
				}
				addChild(e, t = `${this.numChildren}`) {
					if (this.numChildren > 0) throw new Error('ListBuilder can only have one child.');
					return (
						(this.children[this.numChildren] = e),
						(this.type = new TD.Map_(new wD.Field(t, e.type, !0), this.type.keysSorted)),
						this.numChildren - 1
					);
				}
				_flushPending(e) {
					let t = this._offsets,
						r = this._setValue;
					e.forEach((n, o) => {
						n === void 0 ? t.set(o, 0) : (t.set(o, n.size), r(this, o, n));
					});
				}
			};
		pa.MapBuilder = zm;
	});
	var zc = M((ya) => {
		'use strict';
		Object.defineProperty(ya, '__esModule', { value: !0 });
		ya.StructBuilder = void 0;
		var BD = rt(),
			SD = Ve(),
			AD = ve(),
			Hm = class extends SD.Builder {
				addChild(e, t = `${this.numChildren}`) {
					let r = this.children.push(e);
					return (
						(this.type = new AD.Struct([...this.type.children, new BD.Field(t, e.type, !0)])), r
					);
				}
			};
		ya.StructBuilder = Hm;
	});
	var Hc = M((ar) => {
		'use strict';
		Object.defineProperty(ar, '__esModule', { value: !0 });
		ar.DenseUnionBuilder = ar.SparseUnionBuilder = ar.UnionBuilder = void 0;
		var DD = rt(),
			Ym = rr(),
			FD = Ve(),
			OD = ve(),
			_a = class extends FD.Builder {
				constructor(e) {
					super(e);
					(this._typeIds = new Ym.DataBufferBuilder(new Int8Array(0), 1)),
						typeof e.valueToChildTypeId == 'function' &&
							(this._valueToChildTypeId = e.valueToChildTypeId);
				}
				get typeIdToChildIndex() {
					return this.type.typeIdToChildIndex;
				}
				append(e, t) {
					return this.set(this.length, e, t);
				}
				set(e, t, r) {
					return (
						r === void 0 && (r = this._valueToChildTypeId(this, t, e)),
						this.setValid(e, this.isValid(t)) && this.setValue(e, t, r),
						this
					);
				}
				setValue(e, t, r) {
					this._typeIds.set(e, r), super.setValue(e, t);
				}
				addChild(e, t = `${this.children.length}`) {
					let r = this.children.push(e),
						{
							type: { children: n, mode: o, typeIds: l }
						} = this,
						_ = [...n, new DD.Field(t, e.type)];
					return (this.type = new OD.Union(o, [...l, r], _)), r;
				}
				_valueToChildTypeId(e, t, r) {
					throw new Error(
						'Cannot map UnionBuilder value to child typeId. Pass the `childTypeId` as the second argument to unionBuilder.append(), or supply a `valueToChildTypeId` function as part of the UnionBuilder constructor options.'
					);
				}
			};
		ar.UnionBuilder = _a;
		var Gm = class extends _a {};
		ar.SparseUnionBuilder = Gm;
		var $m = class extends _a {
			constructor(e) {
				super(e);
				this._offsets = new Ym.DataBufferBuilder(new Int32Array(0));
			}
			setValue(e, t, r) {
				let n = this.type.typeIdToChildIndex[r];
				return this._offsets.set(e, this.getChildAt(n).length), super.setValue(e, t, r);
			}
		};
		ar.DenseUnionBuilder = $m;
	});
	var ut = M((ma) => {
		'use strict';
		Object.defineProperty(ma, '__esModule', { value: !0 });
		ma.Visitor = void 0;
		var ED = Xt(),
			MD = We(),
			O = Se(),
			CD = ve(),
			Ie = class {
				visitMany(e, ...t) {
					return e.map((r, n) => this.visit(r, ...t.map((o) => o[n])));
				}
				visit(...e) {
					return this.getVisitFn(e[0], !1).apply(this, e);
				}
				getVisitFn(e, t = !0) {
					return RD(this, e, t);
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
		ma.Visitor = Ie;
		function RD(i, e, t = !0) {
			let r = null,
				n = O.Type.NONE;
			switch (
				(e instanceof ED.Data || e instanceof MD.Vector
					? (n = Yc(e.type))
					: e instanceof CD.DataType
					? (n = Yc(e))
					: typeof (n = e) != 'number' && (n = O.Type[e]),
				n)
			) {
				case O.Type.Null:
					r = i.visitNull;
					break;
				case O.Type.Bool:
					r = i.visitBool;
					break;
				case O.Type.Int:
					r = i.visitInt;
					break;
				case O.Type.Int8:
					r = i.visitInt8 || i.visitInt;
					break;
				case O.Type.Int16:
					r = i.visitInt16 || i.visitInt;
					break;
				case O.Type.Int32:
					r = i.visitInt32 || i.visitInt;
					break;
				case O.Type.Int64:
					r = i.visitInt64 || i.visitInt;
					break;
				case O.Type.Uint8:
					r = i.visitUint8 || i.visitInt;
					break;
				case O.Type.Uint16:
					r = i.visitUint16 || i.visitInt;
					break;
				case O.Type.Uint32:
					r = i.visitUint32 || i.visitInt;
					break;
				case O.Type.Uint64:
					r = i.visitUint64 || i.visitInt;
					break;
				case O.Type.Float:
					r = i.visitFloat;
					break;
				case O.Type.Float16:
					r = i.visitFloat16 || i.visitFloat;
					break;
				case O.Type.Float32:
					r = i.visitFloat32 || i.visitFloat;
					break;
				case O.Type.Float64:
					r = i.visitFloat64 || i.visitFloat;
					break;
				case O.Type.Utf8:
					r = i.visitUtf8;
					break;
				case O.Type.Binary:
					r = i.visitBinary;
					break;
				case O.Type.FixedSizeBinary:
					r = i.visitFixedSizeBinary;
					break;
				case O.Type.Date:
					r = i.visitDate;
					break;
				case O.Type.DateDay:
					r = i.visitDateDay || i.visitDate;
					break;
				case O.Type.DateMillisecond:
					r = i.visitDateMillisecond || i.visitDate;
					break;
				case O.Type.Timestamp:
					r = i.visitTimestamp;
					break;
				case O.Type.TimestampSecond:
					r = i.visitTimestampSecond || i.visitTimestamp;
					break;
				case O.Type.TimestampMillisecond:
					r = i.visitTimestampMillisecond || i.visitTimestamp;
					break;
				case O.Type.TimestampMicrosecond:
					r = i.visitTimestampMicrosecond || i.visitTimestamp;
					break;
				case O.Type.TimestampNanosecond:
					r = i.visitTimestampNanosecond || i.visitTimestamp;
					break;
				case O.Type.Time:
					r = i.visitTime;
					break;
				case O.Type.TimeSecond:
					r = i.visitTimeSecond || i.visitTime;
					break;
				case O.Type.TimeMillisecond:
					r = i.visitTimeMillisecond || i.visitTime;
					break;
				case O.Type.TimeMicrosecond:
					r = i.visitTimeMicrosecond || i.visitTime;
					break;
				case O.Type.TimeNanosecond:
					r = i.visitTimeNanosecond || i.visitTime;
					break;
				case O.Type.Decimal:
					r = i.visitDecimal;
					break;
				case O.Type.List:
					r = i.visitList;
					break;
				case O.Type.Struct:
					r = i.visitStruct;
					break;
				case O.Type.Union:
					r = i.visitUnion;
					break;
				case O.Type.DenseUnion:
					r = i.visitDenseUnion || i.visitUnion;
					break;
				case O.Type.SparseUnion:
					r = i.visitSparseUnion || i.visitUnion;
					break;
				case O.Type.Dictionary:
					r = i.visitDictionary;
					break;
				case O.Type.Interval:
					r = i.visitInterval;
					break;
				case O.Type.IntervalDayTime:
					r = i.visitIntervalDayTime || i.visitInterval;
					break;
				case O.Type.IntervalYearMonth:
					r = i.visitIntervalYearMonth || i.visitInterval;
					break;
				case O.Type.FixedSizeList:
					r = i.visitFixedSizeList;
					break;
				case O.Type.Map:
					r = i.visitMap;
					break;
			}
			if (typeof r == 'function') return r;
			if (!t) return () => null;
			throw new Error(`Unrecognized type '${O.Type[n]}'`);
		}
		function Yc(i) {
			switch (i.typeId) {
				case O.Type.Null:
					return O.Type.Null;
				case O.Type.Int: {
					let { bitWidth: e, isSigned: t } = i;
					switch (e) {
						case 8:
							return t ? O.Type.Int8 : O.Type.Uint8;
						case 16:
							return t ? O.Type.Int16 : O.Type.Uint16;
						case 32:
							return t ? O.Type.Int32 : O.Type.Uint32;
						case 64:
							return t ? O.Type.Int64 : O.Type.Uint64;
					}
					return O.Type.Int;
				}
				case O.Type.Float:
					switch (i.precision) {
						case O.Precision.HALF:
							return O.Type.Float16;
						case O.Precision.SINGLE:
							return O.Type.Float32;
						case O.Precision.DOUBLE:
							return O.Type.Float64;
					}
					return O.Type.Float;
				case O.Type.Binary:
					return O.Type.Binary;
				case O.Type.Utf8:
					return O.Type.Utf8;
				case O.Type.Bool:
					return O.Type.Bool;
				case O.Type.Decimal:
					return O.Type.Decimal;
				case O.Type.Time:
					switch (i.unit) {
						case O.TimeUnit.SECOND:
							return O.Type.TimeSecond;
						case O.TimeUnit.MILLISECOND:
							return O.Type.TimeMillisecond;
						case O.TimeUnit.MICROSECOND:
							return O.Type.TimeMicrosecond;
						case O.TimeUnit.NANOSECOND:
							return O.Type.TimeNanosecond;
					}
					return O.Type.Time;
				case O.Type.Timestamp:
					switch (i.unit) {
						case O.TimeUnit.SECOND:
							return O.Type.TimestampSecond;
						case O.TimeUnit.MILLISECOND:
							return O.Type.TimestampMillisecond;
						case O.TimeUnit.MICROSECOND:
							return O.Type.TimestampMicrosecond;
						case O.TimeUnit.NANOSECOND:
							return O.Type.TimestampNanosecond;
					}
					return O.Type.Timestamp;
				case O.Type.Date:
					switch (i.unit) {
						case O.DateUnit.DAY:
							return O.Type.DateDay;
						case O.DateUnit.MILLISECOND:
							return O.Type.DateMillisecond;
					}
					return O.Type.Date;
				case O.Type.Interval:
					switch (i.unit) {
						case O.IntervalUnit.DAY_TIME:
							return O.Type.IntervalDayTime;
						case O.IntervalUnit.YEAR_MONTH:
							return O.Type.IntervalYearMonth;
					}
					return O.Type.Interval;
				case O.Type.Map:
					return O.Type.Map;
				case O.Type.List:
					return O.Type.List;
				case O.Type.Struct:
					return O.Type.Struct;
				case O.Type.Union:
					switch (i.mode) {
						case O.UnionMode.Dense:
							return O.Type.DenseUnion;
						case O.UnionMode.Sparse:
							return O.Type.SparseUnion;
					}
					return O.Type.Union;
				case O.Type.FixedSizeBinary:
					return O.Type.FixedSizeBinary;
				case O.Type.FixedSizeList:
					return O.Type.FixedSizeList;
				case O.Type.Dictionary:
					return O.Type.Dictionary;
			}
			throw new Error(`Unrecognized type '${O.Type[i.typeId]}'`);
		}
		Ie.prototype.visitInt8 = null;
		Ie.prototype.visitInt16 = null;
		Ie.prototype.visitInt32 = null;
		Ie.prototype.visitInt64 = null;
		Ie.prototype.visitUint8 = null;
		Ie.prototype.visitUint16 = null;
		Ie.prototype.visitUint32 = null;
		Ie.prototype.visitUint64 = null;
		Ie.prototype.visitFloat16 = null;
		Ie.prototype.visitFloat32 = null;
		Ie.prototype.visitFloat64 = null;
		Ie.prototype.visitDateDay = null;
		Ie.prototype.visitDateMillisecond = null;
		Ie.prototype.visitTimestampSecond = null;
		Ie.prototype.visitTimestampMillisecond = null;
		Ie.prototype.visitTimestampMicrosecond = null;
		Ie.prototype.visitTimestampNanosecond = null;
		Ie.prototype.visitTimeSecond = null;
		Ie.prototype.visitTimeMillisecond = null;
		Ie.prototype.visitTimeMicrosecond = null;
		Ie.prototype.visitTimeNanosecond = null;
		Ie.prototype.visitDenseUnion = null;
		Ie.prototype.visitSparseUnion = null;
		Ie.prototype.visitIntervalDayTime = null;
		Ie.prototype.visitIntervalYearMonth = null;
	});
	var Jc = M((An) => {
		'use strict';
		Object.defineProperty(An, '__esModule', { value: !0 });
		An.instance = An.SetVisitor = void 0;
		var UD = We(),
			kD = ut(),
			VD = Rr(),
			PD = Ts(),
			ND = Xe(),
			Vt = Se(),
			se = class extends kD.Visitor {};
		An.SetVisitor = se;
		var LD = (i, e, t) => {
				i[e] = (t / 864e5) | 0;
			},
			Gc = (i, e, t) => {
				(i[e] = t % 4294967296 | 0), (i[e + 1] = (t / 4294967296) | 0);
			},
			xD = (i, e, t) => {
				(i[e] = (t * 1e3) % 4294967296 | 0), (i[e + 1] = ((t * 1e3) / 4294967296) | 0);
			},
			qD = (i, e, t) => {
				(i[e] = (t * 1e6) % 4294967296 | 0), (i[e + 1] = ((t * 1e6) / 4294967296) | 0);
			},
			Jm = (i, e, t, r) => {
				let { [t]: n, [t + 1]: o } = e;
				n != null && o != null && i.set(r.subarray(0, o - n), n);
			},
			WD = ({ offset: i, values: e }, t, r) => {
				let n = i + t;
				r ? (e[n >> 3] |= 1 << n % 8) : (e[n >> 3] &= ~(1 << n % 8));
			},
			Km = ({ values: i }, e, t) => {
				LD(i, e, t.valueOf());
			},
			Zm = ({ values: i }, e, t) => {
				Gc(i, e * 2, t.valueOf());
			},
			hi = ({ stride: i, values: e }, t, r) => {
				e[i * t] = r;
			},
			Xm = ({ stride: i, values: e }, t, r) => {
				e[i * t] = PD.float64ToUint16(r);
			},
			$c = (i, e, t) => {
				switch (typeof t) {
					case 'bigint':
						i.values64[e] = t;
						break;
					case 'number':
						i.values[e * i.stride] = t;
						break;
					default: {
						let r = t,
							{ stride: n, ArrayType: o } = i,
							l = ND.toArrayBufferView(o, r);
						i.values.set(l.subarray(0, n), n * e);
					}
				}
			},
			zD = ({ stride: i, values: e }, t, r) => {
				e.set(r.subarray(0, i), i * t);
			},
			HD = ({ values: i, valueOffsets: e }, t, r) => Jm(i, e, t, r),
			YD = ({ values: i, valueOffsets: e }, t, r) => {
				Jm(i, e, t, VD.encodeUtf8(r));
			},
			GD = (i, e, t) => {
				i.type.bitWidth < 64 ? hi(i, e, t) : $c(i, e, t);
			},
			$D = (i, e, t) => {
				i.type.precision !== Vt.Precision.HALF ? hi(i, e, t) : Xm(i, e, t);
			},
			JD = (i, e, t) => {
				i.type.unit === Vt.DateUnit.DAY ? Km(i, e, t) : Zm(i, e, t);
			},
			Qm = ({ values: i }, e, t) => Gc(i, e * 2, t / 1e3),
			eb = ({ values: i }, e, t) => Gc(i, e * 2, t),
			tb = ({ values: i }, e, t) => xD(i, e * 2, t),
			ib = ({ values: i }, e, t) => qD(i, e * 2, t),
			KD = (i, e, t) => {
				switch (i.type.unit) {
					case Vt.TimeUnit.SECOND:
						return Qm(i, e, t);
					case Vt.TimeUnit.MILLISECOND:
						return eb(i, e, t);
					case Vt.TimeUnit.MICROSECOND:
						return tb(i, e, t);
					case Vt.TimeUnit.NANOSECOND:
						return ib(i, e, t);
				}
			},
			rb = ({ values: i, stride: e }, t, r) => {
				i[e * t] = r;
			},
			nb = ({ values: i, stride: e }, t, r) => {
				i[e * t] = r;
			},
			sb = ({ values: i }, e, t) => {
				i.set(t.subarray(0, 2), 2 * e);
			},
			ob = ({ values: i }, e, t) => {
				i.set(t.subarray(0, 2), 2 * e);
			},
			ZD = (i, e, t) => {
				switch (i.type.unit) {
					case Vt.TimeUnit.SECOND:
						return rb(i, e, t);
					case Vt.TimeUnit.MILLISECOND:
						return nb(i, e, t);
					case Vt.TimeUnit.MICROSECOND:
						return sb(i, e, t);
					case Vt.TimeUnit.NANOSECOND:
						return ob(i, e, t);
				}
			},
			XD = ({ values: i }, e, t) => {
				i.set(t.subarray(0, 4), 4 * e);
			},
			QD = (i, e, t) => {
				let r = i.getChildAt(0),
					n = i.valueOffsets;
				for (let o = -1, l = n[e], _ = n[e + 1]; l < _; ) r.set(l++, t.get(++o));
			},
			eF = (i, e, t) => {
				let r = i.getChildAt(0),
					n = i.valueOffsets,
					o = t instanceof Map ? [...t] : Object.entries(t);
				for (let l = -1, _ = n[e], v = n[e + 1]; _ < v; ) r.set(_++, o[++l]);
			},
			tF = (i, e) => (t, r, n) => t == null ? void 0 : t.set(i, e[n]),
			iF = (i, e) => (t, r, n) => t == null ? void 0 : t.set(i, e.get(n)),
			rF = (i, e) => (t, r, n) => t == null ? void 0 : t.set(i, e.get(r.name)),
			nF = (i, e) => (t, r, n) => t == null ? void 0 : t.set(i, e[r.name]),
			sF = (i, e, t) => {
				let r =
					t instanceof Map
						? rF(e, t)
						: t instanceof UD.Vector
						? iF(e, t)
						: Array.isArray(t)
						? tF(e, t)
						: nF(e, t);
				i.type.children.forEach((n, o) => r(i.getChildAt(o), n, o));
			},
			oF = (i, e, t) => {
				i.type.mode === Vt.UnionMode.Dense ? ab(i, e, t) : ub(i, e, t);
			},
			ab = (i, e, t) => {
				let r = i.typeIdToChildIndex[i.typeIds[e]],
					n = i.getChildAt(r);
				n && n.set(i.valueOffsets[e], t);
			},
			ub = (i, e, t) => {
				let r = i.typeIdToChildIndex[i.typeIds[e]],
					n = i.getChildAt(r);
				n && n.set(e, t);
			},
			aF = (i, e, t) => {
				let r = i.getKey(e);
				r !== null && i.setValue(r, t);
			},
			uF = (i, e, t) => {
				i.type.unit === Vt.IntervalUnit.DAY_TIME ? cb(i, e, t) : lb(i, e, t);
			},
			cb = ({ values: i }, e, t) => {
				i.set(t.subarray(0, 2), 2 * e);
			},
			lb = ({ values: i }, e, t) => {
				i[e] = t[0] * 12 + (t[1] % 12);
			},
			cF = (i, e, t) => {
				let r = i.getChildAt(0),
					{ stride: n } = i;
				for (let o = -1, l = e * n; ++o < n; ) r.set(l + o, t.get(o));
			};
		se.prototype.visitBool = WD;
		se.prototype.visitInt = GD;
		se.prototype.visitInt8 = hi;
		se.prototype.visitInt16 = hi;
		se.prototype.visitInt32 = hi;
		se.prototype.visitInt64 = $c;
		se.prototype.visitUint8 = hi;
		se.prototype.visitUint16 = hi;
		se.prototype.visitUint32 = hi;
		se.prototype.visitUint64 = $c;
		se.prototype.visitFloat = $D;
		se.prototype.visitFloat16 = Xm;
		se.prototype.visitFloat32 = hi;
		se.prototype.visitFloat64 = hi;
		se.prototype.visitUtf8 = YD;
		se.prototype.visitBinary = HD;
		se.prototype.visitFixedSizeBinary = zD;
		se.prototype.visitDate = JD;
		se.prototype.visitDateDay = Km;
		se.prototype.visitDateMillisecond = Zm;
		se.prototype.visitTimestamp = KD;
		se.prototype.visitTimestampSecond = Qm;
		se.prototype.visitTimestampMillisecond = eb;
		se.prototype.visitTimestampMicrosecond = tb;
		se.prototype.visitTimestampNanosecond = ib;
		se.prototype.visitTime = ZD;
		se.prototype.visitTimeSecond = rb;
		se.prototype.visitTimeMillisecond = nb;
		se.prototype.visitTimeMicrosecond = sb;
		se.prototype.visitTimeNanosecond = ob;
		se.prototype.visitDecimal = XD;
		se.prototype.visitList = QD;
		se.prototype.visitStruct = sF;
		se.prototype.visitUnion = oF;
		se.prototype.visitDenseUnion = ab;
		se.prototype.visitSparseUnion = ub;
		se.prototype.visitDictionary = aF;
		se.prototype.visitInterval = uF;
		se.prototype.visitIntervalDayTime = cb;
		se.prototype.visitIntervalYearMonth = lb;
		se.prototype.visitFixedSizeList = cF;
		se.prototype.visitMap = eF;
		An.instance = new se();
	});
	var db = M((Dn) => {
		'use strict';
		Object.defineProperty(Dn, '__esModule', { value: !0 });
		Dn.instance = Dn.GetBuilderCtor = void 0;
		var lF = ut(),
			dF = aa(),
			fF = Bc(),
			Kc = Ac(),
			hF = Dc(),
			pF = Oc(),
			yF = Ec(),
			_F = qc(),
			ba = Mc(),
			Zc = Vc(),
			Ri = Rc(),
			mF = xc(),
			bF = Wc(),
			gF = Sc(),
			vF = zc(),
			Ds = kc(),
			Fs = Uc(),
			Xc = Hc(),
			jF = ca(),
			Qc = class extends lF.Visitor {
				visitNull() {
					return gF.NullBuilder;
				}
				visitBool() {
					return fF.BoolBuilder;
				}
				visitInt() {
					return Ri.IntBuilder;
				}
				visitInt8() {
					return Ri.Int8Builder;
				}
				visitInt16() {
					return Ri.Int16Builder;
				}
				visitInt32() {
					return Ri.Int32Builder;
				}
				visitInt64() {
					return Ri.Int64Builder;
				}
				visitUint8() {
					return Ri.Uint8Builder;
				}
				visitUint16() {
					return Ri.Uint16Builder;
				}
				visitUint32() {
					return Ri.Uint32Builder;
				}
				visitUint64() {
					return Ri.Uint64Builder;
				}
				visitFloat() {
					return ba.FloatBuilder;
				}
				visitFloat16() {
					return ba.Float16Builder;
				}
				visitFloat32() {
					return ba.Float32Builder;
				}
				visitFloat64() {
					return ba.Float64Builder;
				}
				visitUtf8() {
					return jF.Utf8Builder;
				}
				visitBinary() {
					return dF.BinaryBuilder;
				}
				visitFixedSizeBinary() {
					return yF.FixedSizeBinaryBuilder;
				}
				visitDate() {
					return Kc.DateBuilder;
				}
				visitDateDay() {
					return Kc.DateDayBuilder;
				}
				visitDateMillisecond() {
					return Kc.DateMillisecondBuilder;
				}
				visitTimestamp() {
					return Ds.TimestampBuilder;
				}
				visitTimestampSecond() {
					return Ds.TimestampSecondBuilder;
				}
				visitTimestampMillisecond() {
					return Ds.TimestampMillisecondBuilder;
				}
				visitTimestampMicrosecond() {
					return Ds.TimestampMicrosecondBuilder;
				}
				visitTimestampNanosecond() {
					return Ds.TimestampNanosecondBuilder;
				}
				visitTime() {
					return Fs.TimeBuilder;
				}
				visitTimeSecond() {
					return Fs.TimeSecondBuilder;
				}
				visitTimeMillisecond() {
					return Fs.TimeMillisecondBuilder;
				}
				visitTimeMicrosecond() {
					return Fs.TimeMicrosecondBuilder;
				}
				visitTimeNanosecond() {
					return Fs.TimeNanosecondBuilder;
				}
				visitDecimal() {
					return hF.DecimalBuilder;
				}
				visitList() {
					return mF.ListBuilder;
				}
				visitStruct() {
					return vF.StructBuilder;
				}
				visitUnion() {
					return Xc.UnionBuilder;
				}
				visitDenseUnion() {
					return Xc.DenseUnionBuilder;
				}
				visitSparseUnion() {
					return Xc.SparseUnionBuilder;
				}
				visitDictionary() {
					return pF.DictionaryBuilder;
				}
				visitInterval() {
					return Zc.IntervalBuilder;
				}
				visitIntervalDayTime() {
					return Zc.IntervalDayTimeBuilder;
				}
				visitIntervalYearMonth() {
					return Zc.IntervalYearMonthBuilder;
				}
				visitFixedSizeList() {
					return _F.FixedSizeListBuilder;
				}
				visitMap() {
					return bF.MapBuilder;
				}
			};
		Dn.GetBuilderCtor = Qc;
		Dn.instance = new Qc();
	});
	var va = M((k) => {
		'use strict';
		Object.defineProperty(k, '__esModule', { value: !0 });
		k.DenseUnionBuilder =
			k.SparseUnionBuilder =
			k.UnionBuilder =
			k.StructBuilder =
			k.MapBuilder =
			k.FixedSizeListBuilder =
			k.ListBuilder =
			k.BinaryBuilder =
			k.Utf8Builder =
			k.IntervalYearMonthBuilder =
			k.IntervalDayTimeBuilder =
			k.IntervalBuilder =
			k.TimestampNanosecondBuilder =
			k.TimestampMicrosecondBuilder =
			k.TimestampMillisecondBuilder =
			k.TimestampSecondBuilder =
			k.TimestampBuilder =
			k.TimeNanosecondBuilder =
			k.TimeMicrosecondBuilder =
			k.TimeMillisecondBuilder =
			k.TimeSecondBuilder =
			k.TimeBuilder =
			k.Uint64Builder =
			k.Uint32Builder =
			k.Uint16Builder =
			k.Uint8Builder =
			k.Int64Builder =
			k.Int32Builder =
			k.Int16Builder =
			k.Int8Builder =
			k.IntBuilder =
			k.Float64Builder =
			k.Float32Builder =
			k.Float16Builder =
			k.FloatBuilder =
			k.FixedSizeBinaryBuilder =
			k.DictionaryBuilder =
			k.DecimalBuilder =
			k.DateMillisecondBuilder =
			k.DateDayBuilder =
			k.DateBuilder =
			k.NullBuilder =
			k.BoolBuilder =
			k.Builder =
				void 0;
		var wF = Ve();
		Object.defineProperty(k, 'Builder', {
			enumerable: !0,
			get: function () {
				return wF.Builder;
			}
		});
		var TF = Bc();
		Object.defineProperty(k, 'BoolBuilder', {
			enumerable: !0,
			get: function () {
				return TF.BoolBuilder;
			}
		});
		var IF = Sc();
		Object.defineProperty(k, 'NullBuilder', {
			enumerable: !0,
			get: function () {
				return IF.NullBuilder;
			}
		});
		var el = Ac();
		Object.defineProperty(k, 'DateBuilder', {
			enumerable: !0,
			get: function () {
				return el.DateBuilder;
			}
		});
		Object.defineProperty(k, 'DateDayBuilder', {
			enumerable: !0,
			get: function () {
				return el.DateDayBuilder;
			}
		});
		Object.defineProperty(k, 'DateMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return el.DateMillisecondBuilder;
			}
		});
		var BF = Dc();
		Object.defineProperty(k, 'DecimalBuilder', {
			enumerable: !0,
			get: function () {
				return BF.DecimalBuilder;
			}
		});
		var SF = Oc();
		Object.defineProperty(k, 'DictionaryBuilder', {
			enumerable: !0,
			get: function () {
				return SF.DictionaryBuilder;
			}
		});
		var AF = Ec();
		Object.defineProperty(k, 'FixedSizeBinaryBuilder', {
			enumerable: !0,
			get: function () {
				return AF.FixedSizeBinaryBuilder;
			}
		});
		var ga = Mc();
		Object.defineProperty(k, 'FloatBuilder', {
			enumerable: !0,
			get: function () {
				return ga.FloatBuilder;
			}
		});
		Object.defineProperty(k, 'Float16Builder', {
			enumerable: !0,
			get: function () {
				return ga.Float16Builder;
			}
		});
		Object.defineProperty(k, 'Float32Builder', {
			enumerable: !0,
			get: function () {
				return ga.Float32Builder;
			}
		});
		Object.defineProperty(k, 'Float64Builder', {
			enumerable: !0,
			get: function () {
				return ga.Float64Builder;
			}
		});
		var Ui = Rc();
		Object.defineProperty(k, 'IntBuilder', {
			enumerable: !0,
			get: function () {
				return Ui.IntBuilder;
			}
		});
		Object.defineProperty(k, 'Int8Builder', {
			enumerable: !0,
			get: function () {
				return Ui.Int8Builder;
			}
		});
		Object.defineProperty(k, 'Int16Builder', {
			enumerable: !0,
			get: function () {
				return Ui.Int16Builder;
			}
		});
		Object.defineProperty(k, 'Int32Builder', {
			enumerable: !0,
			get: function () {
				return Ui.Int32Builder;
			}
		});
		Object.defineProperty(k, 'Int64Builder', {
			enumerable: !0,
			get: function () {
				return Ui.Int64Builder;
			}
		});
		Object.defineProperty(k, 'Uint8Builder', {
			enumerable: !0,
			get: function () {
				return Ui.Uint8Builder;
			}
		});
		Object.defineProperty(k, 'Uint16Builder', {
			enumerable: !0,
			get: function () {
				return Ui.Uint16Builder;
			}
		});
		Object.defineProperty(k, 'Uint32Builder', {
			enumerable: !0,
			get: function () {
				return Ui.Uint32Builder;
			}
		});
		Object.defineProperty(k, 'Uint64Builder', {
			enumerable: !0,
			get: function () {
				return Ui.Uint64Builder;
			}
		});
		var Os = Uc();
		Object.defineProperty(k, 'TimeBuilder', {
			enumerable: !0,
			get: function () {
				return Os.TimeBuilder;
			}
		});
		Object.defineProperty(k, 'TimeSecondBuilder', {
			enumerable: !0,
			get: function () {
				return Os.TimeSecondBuilder;
			}
		});
		Object.defineProperty(k, 'TimeMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return Os.TimeMillisecondBuilder;
			}
		});
		Object.defineProperty(k, 'TimeMicrosecondBuilder', {
			enumerable: !0,
			get: function () {
				return Os.TimeMicrosecondBuilder;
			}
		});
		Object.defineProperty(k, 'TimeNanosecondBuilder', {
			enumerable: !0,
			get: function () {
				return Os.TimeNanosecondBuilder;
			}
		});
		var Es = kc();
		Object.defineProperty(k, 'TimestampBuilder', {
			enumerable: !0,
			get: function () {
				return Es.TimestampBuilder;
			}
		});
		Object.defineProperty(k, 'TimestampSecondBuilder', {
			enumerable: !0,
			get: function () {
				return Es.TimestampSecondBuilder;
			}
		});
		Object.defineProperty(k, 'TimestampMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return Es.TimestampMillisecondBuilder;
			}
		});
		Object.defineProperty(k, 'TimestampMicrosecondBuilder', {
			enumerable: !0,
			get: function () {
				return Es.TimestampMicrosecondBuilder;
			}
		});
		Object.defineProperty(k, 'TimestampNanosecondBuilder', {
			enumerable: !0,
			get: function () {
				return Es.TimestampNanosecondBuilder;
			}
		});
		var tl = Vc();
		Object.defineProperty(k, 'IntervalBuilder', {
			enumerable: !0,
			get: function () {
				return tl.IntervalBuilder;
			}
		});
		Object.defineProperty(k, 'IntervalDayTimeBuilder', {
			enumerable: !0,
			get: function () {
				return tl.IntervalDayTimeBuilder;
			}
		});
		Object.defineProperty(k, 'IntervalYearMonthBuilder', {
			enumerable: !0,
			get: function () {
				return tl.IntervalYearMonthBuilder;
			}
		});
		var DF = ca();
		Object.defineProperty(k, 'Utf8Builder', {
			enumerable: !0,
			get: function () {
				return DF.Utf8Builder;
			}
		});
		var FF = aa();
		Object.defineProperty(k, 'BinaryBuilder', {
			enumerable: !0,
			get: function () {
				return FF.BinaryBuilder;
			}
		});
		var OF = xc();
		Object.defineProperty(k, 'ListBuilder', {
			enumerable: !0,
			get: function () {
				return OF.ListBuilder;
			}
		});
		var EF = qc();
		Object.defineProperty(k, 'FixedSizeListBuilder', {
			enumerable: !0,
			get: function () {
				return EF.FixedSizeListBuilder;
			}
		});
		var MF = Wc();
		Object.defineProperty(k, 'MapBuilder', {
			enumerable: !0,
			get: function () {
				return MF.MapBuilder;
			}
		});
		var CF = zc();
		Object.defineProperty(k, 'StructBuilder', {
			enumerable: !0,
			get: function () {
				return CF.StructBuilder;
			}
		});
		var il = Hc();
		Object.defineProperty(k, 'UnionBuilder', {
			enumerable: !0,
			get: function () {
				return il.UnionBuilder;
			}
		});
		Object.defineProperty(k, 'SparseUnionBuilder', {
			enumerable: !0,
			get: function () {
				return il.SparseUnionBuilder;
			}
		});
		Object.defineProperty(k, 'DenseUnionBuilder', {
			enumerable: !0,
			get: function () {
				return il.DenseUnionBuilder;
			}
		});
		var rl = Se(),
			RF = ca(),
			UF = Ve(),
			fb = Jc(),
			hb = db();
		UF.Builder.new = pb;
		function pb(i) {
			let e = i.type,
				t = new (hb.instance.getVisitFn(e)())(i);
			if (e.children && e.children.length > 0) {
				let r = i.children || [],
					n = { nullValues: i.nullValues },
					o = Array.isArray(r) ? (l, _) => r[_] || n : ({ name: l }) => r[l] || n;
				e.children.forEach((l, _) => {
					let { type: v } = l,
						B = o(l, _);
					t.children.push(pb(Object.assign(Object.assign({}, B), { type: v })));
				});
			}
			return t;
		}
		Object.keys(rl.Type)
			.map((i) => rl.Type[i])
			.filter((i) => typeof i == 'number' && i !== rl.Type.NONE)
			.forEach((i) => {
				let e = hb.instance.visit(i);
				e.prototype._setValue = fb.instance.getVisitFn(i);
			});
		RF.Utf8Builder.prototype._setValue = fb.instance.visitBinary;
	});
	var yb = M((Fn) => {
		'use strict';
		Object.defineProperty(Fn, '__esModule', { value: !0 });
		Fn.Block = Fn.Footer = void 0;
		var kF = Fi(),
			ja = er(),
			Pt = class {
				constructor() {
					(this.bb = null), (this.bb_pos = 0);
				}
				__init(e, t) {
					return (this.bb_pos = e), (this.bb = t), this;
				}
				static getRootAsFooter(e, t) {
					return (t || new Pt()).__init(e.readInt32(e.position()) + e.position(), e);
				}
				static getSizePrefixedRootAsFooter(e, t) {
					return (
						e.setPosition(e.position() + kF.flatbuffers.SIZE_PREFIX_LENGTH),
						(t || new Pt()).__init(e.readInt32(e.position()) + e.position(), e)
					);
				}
				version() {
					let e = this.bb.__offset(this.bb_pos, 4);
					return e ? this.bb.readInt16(this.bb_pos + e) : ja.MetadataVersion.V1;
				}
				schema(e) {
					let t = this.bb.__offset(this.bb_pos, 6);
					return t
						? (e || new ja.Schema()).__init(this.bb.__indirect(this.bb_pos + t), this.bb)
						: null;
				}
				dictionaries(e, t) {
					let r = this.bb.__offset(this.bb_pos, 8);
					return r
						? (t || new wa()).__init(this.bb.__vector(this.bb_pos + r) + e * 24, this.bb)
						: null;
				}
				dictionariesLength() {
					let e = this.bb.__offset(this.bb_pos, 8);
					return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
				}
				recordBatches(e, t) {
					let r = this.bb.__offset(this.bb_pos, 10);
					return r
						? (t || new wa()).__init(this.bb.__vector(this.bb_pos + r) + e * 24, this.bb)
						: null;
				}
				recordBatchesLength() {
					let e = this.bb.__offset(this.bb_pos, 10);
					return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
				}
				customMetadata(e, t) {
					let r = this.bb.__offset(this.bb_pos, 12);
					return r
						? (t || new ja.KeyValue()).__init(
								this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + e * 4),
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
					e.addFieldInt16(0, t, ja.MetadataVersion.V1);
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
					for (let r = t.length - 1; r >= 0; r--) e.addOffset(t[r]);
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
				static createFooter(e, t, r, n, o, l) {
					return (
						Pt.startFooter(e),
						Pt.addVersion(e, t),
						Pt.addSchema(e, r),
						Pt.addDictionaries(e, n),
						Pt.addRecordBatches(e, o),
						Pt.addCustomMetadata(e, l),
						Pt.endFooter(e)
					);
				}
			};
		Fn.Footer = Pt;
		var wa = class {
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
			static createBlock(e, t, r, n) {
				return (
					e.prep(8, 24), e.writeInt64(n), e.pad(4), e.writeInt32(r), e.writeInt64(t), e.offset()
				);
			}
		};
		Fn.Block = wa;
	});
	var ol = M((On) => {
		'use strict';
		Object.defineProperty(On, '__esModule', { value: !0 });
		On.FileBlock = On.Footer = void 0;
		var ei = yb(),
			nl = Fi(),
			_b = nl.flatbuffers.Long,
			VF = nl.flatbuffers.Builder,
			PF = nl.flatbuffers.ByteBuffer,
			mb = rt(),
			bb = Se(),
			NF = Xe(),
			sl = class {
				constructor(e, t = bb.MetadataVersion.V4, r, n) {
					(this.schema = e),
						(this.version = t),
						r && (this._recordBatches = r),
						n && (this._dictionaryBatches = n);
				}
				static decode(e) {
					e = new PF(NF.toUint8Array(e));
					let t = ei.Footer.getRootAsFooter(e),
						r = mb.Schema.decode(t.schema());
					return new gb(r, t);
				}
				static encode(e) {
					let t = new VF(),
						r = mb.Schema.encode(t, e.schema);
					ei.Footer.startRecordBatchesVector(t, e.numRecordBatches),
						[...e.recordBatches()]
							.slice()
							.reverse()
							.forEach((l) => ur.encode(t, l));
					let n = t.endVector();
					ei.Footer.startDictionariesVector(t, e.numDictionaries),
						[...e.dictionaryBatches()]
							.slice()
							.reverse()
							.forEach((l) => ur.encode(t, l));
					let o = t.endVector();
					return (
						ei.Footer.startFooter(t),
						ei.Footer.addSchema(t, r),
						ei.Footer.addVersion(t, bb.MetadataVersion.V4),
						ei.Footer.addRecordBatches(t, n),
						ei.Footer.addDictionaries(t, o),
						ei.Footer.finishFooterBuffer(t, ei.Footer.endFooter(t)),
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
					for (let e, t = -1, r = this.numRecordBatches; ++t < r; )
						(e = this.getRecordBatch(t)) && (yield e);
				}
				*dictionaryBatches() {
					for (let e, t = -1, r = this.numDictionaries; ++t < r; )
						(e = this.getDictionaryBatch(t)) && (yield e);
				}
				getRecordBatch(e) {
					return (e >= 0 && e < this.numRecordBatches && this._recordBatches[e]) || null;
				}
				getDictionaryBatch(e) {
					return (e >= 0 && e < this.numDictionaries && this._dictionaryBatches[e]) || null;
				}
			};
		On.Footer = sl;
		var gb = class extends sl {
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
						if (t) return ur.decode(t);
					}
					return null;
				}
				getDictionaryBatch(e) {
					if (e >= 0 && e < this.numDictionaries) {
						let t = this._footer.dictionaries(e);
						if (t) return ur.decode(t);
					}
					return null;
				}
			},
			ur = class {
				constructor(e, t, r) {
					(this.metaDataLength = e),
						(this.offset = typeof r == 'number' ? r : r.low),
						(this.bodyLength = typeof t == 'number' ? t : t.low);
				}
				static decode(e) {
					return new ur(e.metaDataLength(), e.bodyLength(), e.offset());
				}
				static encode(e, t) {
					let { metaDataLength: r } = t,
						n = new _b(t.offset, 0),
						o = new _b(t.bodyLength, 0);
					return ei.Block.createBlock(e, n, r, o);
				}
			};
		On.FileBlock = ur;
	});
	var hr = M((fr) => {
		'use strict';
		Object.defineProperty(fr, '__esModule', { value: !0 });
		fr.AsyncByteStream = fr.ByteStream = fr.AsyncByteQueue = void 0;
		var cr = dt(),
			lr = js(),
			vb = Rr(),
			Ms = fn(),
			al = Xe(),
			En = ft(),
			ul = class extends Ms.AsyncQueue {
				write(e) {
					if ((e = al.toUint8Array(e)).byteLength > 0) return super.write(e);
				}
				toString(e = !1) {
					return e
						? vb.decodeUtf8(this.toUint8Array(!0))
						: this.toUint8Array(!1).then(vb.decodeUtf8);
				}
				toUint8Array(e = !1) {
					return e
						? al.joinUint8Arrays(this._values)[0]
						: (() =>
								cr.__awaiter(this, void 0, void 0, function* () {
									var t, r;
									let n = [],
										o = 0;
									try {
										for (var l = cr.__asyncValues(this), _; (_ = yield l.next()), !_.done; ) {
											let v = _.value;
											n.push(v), (o += v.byteLength);
										}
									} catch (v) {
										t = { error: v };
									} finally {
										try {
											_ && !_.done && (r = l.return) && (yield r.call(l));
										} finally {
											if (t) throw t.error;
										}
									}
									return al.joinUint8Arrays(n, o)[0];
								}))();
				}
			};
		fr.AsyncByteQueue = ul;
		var jb = class {
			constructor(e) {
				e && (this.source = new wb(lr.default.fromIterable(e)));
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
		fr.ByteStream = jb;
		var Ta = class {
			constructor(e) {
				e instanceof Ta
					? (this.source = e.source)
					: e instanceof ul
					? (this.source = new dr(lr.default.fromAsyncIterable(e)))
					: En.isReadableNodeStream(e)
					? (this.source = new dr(lr.default.fromNodeStream(e)))
					: En.isReadableDOMStream(e)
					? (this.source = new dr(lr.default.fromDOMStream(e)))
					: En.isFetchResponse(e)
					? (this.source = new dr(lr.default.fromDOMStream(e.body)))
					: En.isIterable(e)
					? (this.source = new dr(lr.default.fromIterable(e)))
					: En.isPromise(e)
					? (this.source = new dr(lr.default.fromAsyncIterable(e)))
					: En.isAsyncIterable(e) && (this.source = new dr(lr.default.fromAsyncIterable(e)));
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
		fr.AsyncByteStream = Ta;
		var wb = class {
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
					return Object.create((this.source.throw && this.source.throw(e)) || Ms.ITERATOR_DONE);
				}
				return(e) {
					return Object.create((this.source.return && this.source.return(e)) || Ms.ITERATOR_DONE);
				}
			},
			dr = class {
				constructor(e) {
					(this.source = e),
						(this._closedPromise = new Promise((t) => (this._closedPromiseResolve = t)));
				}
				cancel(e) {
					return cr.__awaiter(this, void 0, void 0, function* () {
						yield this.return(e);
					});
				}
				get closed() {
					return this._closedPromise;
				}
				read(e) {
					return cr.__awaiter(this, void 0, void 0, function* () {
						return (yield this.next(e, 'read')).value;
					});
				}
				peek(e) {
					return cr.__awaiter(this, void 0, void 0, function* () {
						return (yield this.next(e, 'peek')).value;
					});
				}
				next(e, t = 'read') {
					return cr.__awaiter(this, void 0, void 0, function* () {
						return yield this.source.next({ cmd: t, size: e });
					});
				}
				throw(e) {
					return cr.__awaiter(this, void 0, void 0, function* () {
						let t = (this.source.throw && (yield this.source.throw(e))) || Ms.ITERATOR_DONE;
						return (
							this._closedPromiseResolve && this._closedPromiseResolve(),
							(this._closedPromiseResolve = void 0),
							Object.create(t)
						);
					});
				}
				return(e) {
					return cr.__awaiter(this, void 0, void 0, function* () {
						let t = (this.source.return && (yield this.source.return(e))) || Ms.ITERATOR_DONE;
						return (
							this._closedPromiseResolve && this._closedPromiseResolve(),
							(this._closedPromiseResolve = void 0),
							Object.create(t)
						);
					});
				}
			};
	});
	var cl = M((Mn) => {
		'use strict';
		Object.defineProperty(Mn, '__esModule', { value: !0 });
		Mn.AsyncRandomAccessFile = Mn.RandomAccessFile = void 0;
		var pr = dt(),
			Tb = hr(),
			LF = Xe(),
			Ib = class extends Tb.ByteStream {
				constructor(e, t) {
					super();
					(this.position = 0),
						(this.buffer = LF.toUint8Array(e)),
						(this.size = typeof t == 'undefined' ? this.buffer.byteLength : t);
				}
				readInt32(e) {
					let { buffer: t, byteOffset: r } = this.readAt(e, 4);
					return new DataView(t, r).getInt32(0, !0);
				}
				seek(e) {
					return (this.position = Math.min(e, this.size)), e < this.size;
				}
				read(e) {
					let { buffer: t, size: r, position: n } = this;
					return t && n < r
						? (typeof e != 'number' && (e = 1 / 0),
						  (this.position = Math.min(r, n + Math.min(r - n, e))),
						  t.subarray(n, this.position))
						: null;
				}
				readAt(e, t) {
					let r = this.buffer,
						n = Math.min(this.size, e + t);
					return r ? r.subarray(e, n) : new Uint8Array(t);
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
		Mn.RandomAccessFile = Ib;
		var Bb = class extends Tb.AsyncByteStream {
			constructor(e, t) {
				super();
				(this.position = 0),
					(this._handle = e),
					typeof t == 'number'
						? (this.size = t)
						: (this._pending = (() =>
								pr.__awaiter(this, void 0, void 0, function* () {
									(this.size = (yield e.stat()).size), delete this._pending;
								}))());
			}
			readInt32(e) {
				return pr.__awaiter(this, void 0, void 0, function* () {
					let { buffer: t, byteOffset: r } = yield this.readAt(e, 4);
					return new DataView(t, r).getInt32(0, !0);
				});
			}
			seek(e) {
				return pr.__awaiter(this, void 0, void 0, function* () {
					return (
						this._pending && (yield this._pending),
						(this.position = Math.min(e, this.size)),
						e < this.size
					);
				});
			}
			read(e) {
				return pr.__awaiter(this, void 0, void 0, function* () {
					this._pending && (yield this._pending);
					let { _handle: t, size: r, position: n } = this;
					if (t && n < r) {
						typeof e != 'number' && (e = 1 / 0);
						let o = n,
							l = 0,
							_ = 0,
							v = Math.min(r, o + Math.min(r - o, e)),
							B = new Uint8Array(Math.max(0, (this.position = v) - o));
						for (; (o += _) < v && (l += _) < B.byteLength; )
							({ bytesRead: _ } = yield t.read(B, l, B.byteLength - l, o));
						return B;
					}
					return null;
				});
			}
			readAt(e, t) {
				return pr.__awaiter(this, void 0, void 0, function* () {
					this._pending && (yield this._pending);
					let { _handle: r, size: n } = this;
					if (r && e + t < n) {
						let o = Math.min(n, e + t),
							l = new Uint8Array(o - e);
						return (yield r.read(l, 0, t, e)).buffer;
					}
					return new Uint8Array(t);
				});
			}
			close() {
				return pr.__awaiter(this, void 0, void 0, function* () {
					let e = this._handle;
					(this._handle = null), e && (yield e.close());
				});
			}
			throw(e) {
				return pr.__awaiter(this, void 0, void 0, function* () {
					return yield this.close(), { done: !0, value: e };
				});
			}
			return(e) {
				return pr.__awaiter(this, void 0, void 0, function* () {
					return yield this.close(), { done: !0, value: e };
				});
			}
		};
		Mn.AsyncRandomAccessFile = Bb;
	});
	var dl = M((pi) => {
		'use strict';
		Object.defineProperty(pi, '__esModule', { value: !0 });
		pi.Int128 = pi.Int64 = pi.Uint64 = pi.BaseInt64 = void 0;
		var xF = 1 << 16;
		function Cn(i) {
			return i < 0 && (i = 4294967295 + i + 1), `0x${i.toString(16)}`;
		}
		var Rn = 8,
			ll = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8],
			Ia = class {
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
						r = new Uint32Array([
							e.buffer[1] >>> 16,
							e.buffer[1] & 65535,
							e.buffer[0] >>> 16,
							e.buffer[0] & 65535
						]),
						n = t[3] * r[3];
					this.buffer[0] = n & 65535;
					let o = n >>> 16;
					return (
						(n = t[2] * r[3]),
						(o += n),
						(n = (t[3] * r[2]) >>> 0),
						(o += n),
						(this.buffer[0] += o << 16),
						(this.buffer[1] = o >>> 0 < n ? xF : 0),
						(this.buffer[1] += o >>> 16),
						(this.buffer[1] += t[1] * r[3] + t[2] * r[2] + t[3] * r[1]),
						(this.buffer[1] += (t[0] * r[3] + t[1] * r[2] + t[2] * r[1] + t[3] * r[0]) << 16),
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
					return `${Cn(this.buffer[1])} ${Cn(this.buffer[0])}`;
				}
			};
		pi.BaseInt64 = Ia;
		var je = class extends Ia {
			times(e) {
				return this._times(e), this;
			}
			plus(e) {
				return this._plus(e), this;
			}
			static from(e, t = new Uint32Array(2)) {
				return je.fromString(typeof e == 'string' ? e : e.toString(), t);
			}
			static fromNumber(e, t = new Uint32Array(2)) {
				return je.fromString(e.toString(), t);
			}
			static fromString(e, t = new Uint32Array(2)) {
				let r = e.length,
					n = new je(t);
				for (let o = 0; o < r; ) {
					let l = Rn < r - o ? Rn : r - o,
						_ = new je(new Uint32Array([parseInt(e.substr(o, l), 10), 0])),
						v = new je(new Uint32Array([ll[l], 0]));
					n.times(v), n.plus(_), (o += l);
				}
				return n;
			}
			static convertArray(e) {
				let t = new Uint32Array(e.length * 2);
				for (let r = -1, n = e.length; ++r < n; )
					je.from(e[r], new Uint32Array(t.buffer, t.byteOffset + 2 * r * 4, 2));
				return t;
			}
			static multiply(e, t) {
				return new je(new Uint32Array(e.buffer)).times(t);
			}
			static add(e, t) {
				return new je(new Uint32Array(e.buffer)).plus(t);
			}
		};
		pi.Uint64 = je;
		var wt = class extends Ia {
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
					r = e.buffer[1] << 0;
				return t < r || (t === r && this.buffer[0] < e.buffer[0]);
			}
			static from(e, t = new Uint32Array(2)) {
				return wt.fromString(typeof e == 'string' ? e : e.toString(), t);
			}
			static fromNumber(e, t = new Uint32Array(2)) {
				return wt.fromString(e.toString(), t);
			}
			static fromString(e, t = new Uint32Array(2)) {
				let r = e.startsWith('-'),
					n = e.length,
					o = new wt(t);
				for (let l = r ? 1 : 0; l < n; ) {
					let _ = Rn < n - l ? Rn : n - l,
						v = new wt(new Uint32Array([parseInt(e.substr(l, _), 10), 0])),
						B = new wt(new Uint32Array([ll[_], 0]));
					o.times(B), o.plus(v), (l += _);
				}
				return r ? o.negate() : o;
			}
			static convertArray(e) {
				let t = new Uint32Array(e.length * 2);
				for (let r = -1, n = e.length; ++r < n; )
					wt.from(e[r], new Uint32Array(t.buffer, t.byteOffset + 2 * r * 4, 2));
				return t;
			}
			static multiply(e, t) {
				return new wt(new Uint32Array(e.buffer)).times(t);
			}
			static add(e, t) {
				return new wt(new Uint32Array(e.buffer)).plus(t);
			}
		};
		pi.Int64 = wt;
		var ti = class {
			constructor(e) {
				this.buffer = e;
			}
			high() {
				return new wt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
			}
			low() {
				return new wt(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
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
				let t = new je(new Uint32Array([this.buffer[3], 0])),
					r = new je(new Uint32Array([this.buffer[2], 0])),
					n = new je(new Uint32Array([this.buffer[1], 0])),
					o = new je(new Uint32Array([this.buffer[0], 0])),
					l = new je(new Uint32Array([e.buffer[3], 0])),
					_ = new je(new Uint32Array([e.buffer[2], 0])),
					v = new je(new Uint32Array([e.buffer[1], 0])),
					B = new je(new Uint32Array([e.buffer[0], 0])),
					D = je.multiply(o, B);
				this.buffer[0] = D.low();
				let N = new je(new Uint32Array([D.high(), 0]));
				return (
					(D = je.multiply(n, B)),
					N.plus(D),
					(D = je.multiply(o, v)),
					N.plus(D),
					(this.buffer[1] = N.low()),
					(this.buffer[3] = N.lessThan(D) ? 1 : 0),
					(this.buffer[2] = N.high()),
					new je(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2))
						.plus(je.multiply(r, B))
						.plus(je.multiply(n, v))
						.plus(je.multiply(o, _)),
					(this.buffer[3] += je
						.multiply(t, B)
						.plus(je.multiply(r, v))
						.plus(je.multiply(n, _))
						.plus(je.multiply(o, l))
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
				return `${Cn(this.buffer[3])} ${Cn(this.buffer[2])} ${Cn(this.buffer[1])} ${Cn(
					this.buffer[0]
				)}`;
			}
			static multiply(e, t) {
				return new ti(new Uint32Array(e.buffer)).times(t);
			}
			static add(e, t) {
				return new ti(new Uint32Array(e.buffer)).plus(t);
			}
			static from(e, t = new Uint32Array(4)) {
				return ti.fromString(typeof e == 'string' ? e : e.toString(), t);
			}
			static fromNumber(e, t = new Uint32Array(4)) {
				return ti.fromString(e.toString(), t);
			}
			static fromString(e, t = new Uint32Array(4)) {
				let r = e.startsWith('-'),
					n = e.length,
					o = new ti(t);
				for (let l = r ? 1 : 0; l < n; ) {
					let _ = Rn < n - l ? Rn : n - l,
						v = new ti(new Uint32Array([parseInt(e.substr(l, _), 10), 0, 0, 0])),
						B = new ti(new Uint32Array([ll[_], 0, 0, 0]));
					o.times(B), o.plus(v), (l += _);
				}
				return r ? o.negate() : o;
			}
			static convertArray(e) {
				let t = new Uint32Array(e.length * 4);
				for (let r = -1, n = e.length; ++r < n; )
					ti.from(e[r], new Uint32Array(t.buffer, t.byteOffset + 4 * 4 * r, 4));
				return t;
			}
		};
		pi.Int128 = ti;
	});
	var Fb = M((Un) => {
		'use strict';
		Object.defineProperty(Un, '__esModule', { value: !0 });
		Un.JSONVectorLoader = Un.VectorLoader = void 0;
		var et = Xt(),
			qF = rt(),
			ki = ve(),
			WF = ut(),
			Sb = li(),
			zF = Rr(),
			Ba = dl(),
			Ab = Se(),
			yi = Xe(),
			fl = class extends WF.Visitor {
				constructor(e, t, r, n) {
					super();
					(this.nodesIndex = -1),
						(this.buffersIndex = -1),
						(this.bytes = e),
						(this.nodes = t),
						(this.buffers = r),
						(this.dictionaries = n);
				}
				visit(e) {
					return super.visit(e instanceof qF.Field ? e.type : e);
				}
				visitNull(e, { length: t } = this.nextFieldNode()) {
					return et.Data.Null(e, 0, t);
				}
				visitBool(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.Bool(e, 0, t, r, this.readNullBitmap(e, r), this.readData(e));
				}
				visitInt(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.Int(e, 0, t, r, this.readNullBitmap(e, r), this.readData(e));
				}
				visitFloat(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.Float(e, 0, t, r, this.readNullBitmap(e, r), this.readData(e));
				}
				visitUtf8(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.Utf8(
						e,
						0,
						t,
						r,
						this.readNullBitmap(e, r),
						this.readOffsets(e),
						this.readData(e)
					);
				}
				visitBinary(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.Binary(
						e,
						0,
						t,
						r,
						this.readNullBitmap(e, r),
						this.readOffsets(e),
						this.readData(e)
					);
				}
				visitFixedSizeBinary(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.FixedSizeBinary(e, 0, t, r, this.readNullBitmap(e, r), this.readData(e));
				}
				visitDate(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.Date(e, 0, t, r, this.readNullBitmap(e, r), this.readData(e));
				}
				visitTimestamp(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.Timestamp(e, 0, t, r, this.readNullBitmap(e, r), this.readData(e));
				}
				visitTime(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.Time(e, 0, t, r, this.readNullBitmap(e, r), this.readData(e));
				}
				visitDecimal(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.Decimal(e, 0, t, r, this.readNullBitmap(e, r), this.readData(e));
				}
				visitList(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.List(
						e,
						0,
						t,
						r,
						this.readNullBitmap(e, r),
						this.readOffsets(e),
						this.visit(e.children[0])
					);
				}
				visitStruct(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.Struct(e, 0, t, r, this.readNullBitmap(e, r), this.visitMany(e.children));
				}
				visitUnion(e) {
					return e.mode === Ab.UnionMode.Sparse
						? this.visitSparseUnion(e)
						: this.visitDenseUnion(e);
				}
				visitDenseUnion(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.Union(
						e,
						0,
						t,
						r,
						this.readNullBitmap(e, r),
						this.readTypeIds(e),
						this.readOffsets(e),
						this.visitMany(e.children)
					);
				}
				visitSparseUnion(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.Union(
						e,
						0,
						t,
						r,
						this.readNullBitmap(e, r),
						this.readTypeIds(e),
						this.visitMany(e.children)
					);
				}
				visitDictionary(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.Dictionary(
						e,
						0,
						t,
						r,
						this.readNullBitmap(e, r),
						this.readData(e.indices),
						this.readDictionary(e)
					);
				}
				visitInterval(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.Interval(e, 0, t, r, this.readNullBitmap(e, r), this.readData(e));
				}
				visitFixedSizeList(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.FixedSizeList(
						e,
						0,
						t,
						r,
						this.readNullBitmap(e, r),
						this.visit(e.children[0])
					);
				}
				visitMap(e, { length: t, nullCount: r } = this.nextFieldNode()) {
					return et.Data.Map(
						e,
						0,
						t,
						r,
						this.readNullBitmap(e, r),
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
				readNullBitmap(e, t, r = this.nextBufferRange()) {
					return (t > 0 && this.readData(e, r)) || new Uint8Array(0);
				}
				readOffsets(e, t) {
					return this.readData(e, t);
				}
				readTypeIds(e, t) {
					return this.readData(e, t);
				}
				readData(e, { length: t, offset: r } = this.nextBufferRange()) {
					return this.bytes.subarray(r, r + t);
				}
				readDictionary(e) {
					return this.dictionaries.get(e.id);
				}
			};
		Un.VectorLoader = fl;
		var Db = class extends fl {
			constructor(e, t, r, n) {
				super(new Uint8Array(0), t, r, n);
				this.sources = e;
			}
			readNullBitmap(e, t, { offset: r } = this.nextBufferRange()) {
				return t <= 0 ? new Uint8Array(0) : Sb.packBools(this.sources[r]);
			}
			readOffsets(e, { offset: t } = this.nextBufferRange()) {
				return yi.toArrayBufferView(Uint8Array, yi.toArrayBufferView(Int32Array, this.sources[t]));
			}
			readTypeIds(e, { offset: t } = this.nextBufferRange()) {
				return yi.toArrayBufferView(Uint8Array, yi.toArrayBufferView(e.ArrayType, this.sources[t]));
			}
			readData(e, { offset: t } = this.nextBufferRange()) {
				let { sources: r } = this;
				return ki.DataType.isTimestamp(e) ||
					((ki.DataType.isInt(e) || ki.DataType.isTime(e)) && e.bitWidth === 64) ||
					(ki.DataType.isDate(e) && e.unit === Ab.DateUnit.MILLISECOND)
					? yi.toArrayBufferView(Uint8Array, Ba.Int64.convertArray(r[t]))
					: ki.DataType.isDecimal(e)
					? yi.toArrayBufferView(Uint8Array, Ba.Int128.convertArray(r[t]))
					: ki.DataType.isBinary(e) || ki.DataType.isFixedSizeBinary(e)
					? HF(r[t])
					: ki.DataType.isBool(e)
					? Sb.packBools(r[t])
					: ki.DataType.isUtf8(e)
					? zF.encodeUtf8(r[t].join(''))
					: yi.toArrayBufferView(
							Uint8Array,
							yi.toArrayBufferView(
								e.ArrayType,
								r[t].map((n) => +n)
							)
					  );
			}
		};
		Un.JSONVectorLoader = Db;
		function HF(i) {
			let e = i.join(''),
				t = new Uint8Array(e.length / 2);
			for (let r = 0; r < e.length; r += 2) t[r >> 1] = parseInt(e.substr(r, 2), 16);
			return t;
		}
	});
	var Cs = M((Vn) => {
		'use strict';
		Object.defineProperty(Vn, '__esModule', { value: !0 });
		Vn.StructRow = Vn.MapRow = void 0;
		var Ob = vc(),
			ct = Symbol.for('parent'),
			kn = Symbol.for('rowIndex'),
			Tt = Symbol.for('keyToIdx'),
			It = Symbol.for('idxToVal'),
			hl = Symbol.for('nodejs.util.inspect.custom'),
			_i = class {
				constructor(e, t) {
					(this[ct] = e), (this.size = t);
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
						let r = this[Tt] || (this[Tt] = new Map()),
							n = r.get(e);
						if (n !== void 0) {
							let o = this[It] || (this[It] = new Array(this.size));
							(t = o[n]) !== void 0 || (o[n] = t = this.getValue(n));
						} else if ((n = this.getIndex(e)) > -1) {
							r.set(e, n);
							let o = this[It] || (this[It] = new Array(this.size));
							(t = o[n]) !== void 0 || (o[n] = t = this.getValue(n));
						}
					}
					return t;
				}
				set(e, t) {
					if (e != null) {
						let r = this[Tt] || (this[Tt] = new Map()),
							n = r.get(e);
						if ((n === void 0 && r.set(e, (n = this.getIndex(e))), n > -1)) {
							let o = this[It] || (this[It] = new Array(this.size));
							o[n] = this.setValue(n, t);
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
						r = this[Tt] || (this[Tt] = new Map()),
						n = this[It] || (this[It] = new Array(this.size));
					for (let o, l, _ = 0, v, B; !((v = e.next()).done || (B = t.next()).done); ++_)
						(o = v.value), (l = B.value), (n[_] = l), r.has(o) || r.set(o, _), yield [o, l];
				}
				forEach(e, t) {
					let r = this.keys(),
						n = this.values(),
						o = t === void 0 ? e : (v, B, D) => e.call(t, v, B, D),
						l = this[Tt] || (this[Tt] = new Map()),
						_ = this[It] || (this[It] = new Array(this.size));
					for (let v, B, D = 0, N, W; !((N = r.next()).done || (W = n.next()).done); ++D)
						(v = N.value), (B = W.value), (_[D] = B), l.has(v) || l.set(v, D), o(B, v, this);
				}
				toArray() {
					return [...this.values()];
				}
				toJSON() {
					let e = {};
					return this.forEach((t, r) => (e[r] = t)), e;
				}
				inspect() {
					return this.toString();
				}
				[hl]() {
					return this.toString();
				}
				toString() {
					let e = [];
					return (
						this.forEach((t, r) => {
							(r = Ob.valueToString(r)), (t = Ob.valueToString(t)), e.push(`${r}: ${t}`);
						}),
						`{ ${e.join(', ')} }`
					);
				}
			};
		_i[Symbol.toStringTag] = ((i) => (
			Object.defineProperties(i, {
				size: { writable: !0, enumerable: !1, configurable: !1, value: 0 },
				[ct]: { writable: !0, enumerable: !1, configurable: !1, value: null },
				[kn]: { writable: !0, enumerable: !1, configurable: !1, value: -1 }
			}),
			(i[Symbol.toStringTag] = 'Row')
		))(_i.prototype);
		var Eb = class extends _i {
			constructor(e) {
				super(e, e.length);
				return YF(this);
			}
			keys() {
				return this[ct].getChildAt(0)[Symbol.iterator]();
			}
			values() {
				return this[ct].getChildAt(1)[Symbol.iterator]();
			}
			getKey(e) {
				return this[ct].getChildAt(0).get(e);
			}
			getIndex(e) {
				return this[ct].getChildAt(0).indexOf(e);
			}
			getValue(e) {
				return this[ct].getChildAt(1).get(e);
			}
			setValue(e, t) {
				this[ct].getChildAt(1).set(e, t);
			}
		};
		Vn.MapRow = Eb;
		var Mb = class extends _i {
			constructor(e) {
				super(e, e.type.children.length);
				return Cb(this);
			}
			*keys() {
				for (let e of this[ct].type.children) yield e.name;
			}
			*values() {
				for (let e of this[ct].type.children) yield this[e.name];
			}
			getKey(e) {
				return this[ct].type.children[e].name;
			}
			getIndex(e) {
				return this[ct].type.children.findIndex((t) => t.name === e);
			}
			getValue(e) {
				return this[ct].getChildAt(e).get(this[kn]);
			}
			setValue(e, t) {
				return this[ct].getChildAt(e).set(this[kn], t);
			}
		};
		Vn.StructRow = Mb;
		Object.setPrototypeOf(_i.prototype, Map.prototype);
		var Cb = (() => {
				let i = { enumerable: !0, configurable: !1, get: null, set: null };
				return (e) => {
					let t = -1,
						r = e[Tt] || (e[Tt] = new Map()),
						n = (l) =>
							function () {
								return this.get(l);
							},
						o = (l) =>
							function (_) {
								return this.set(l, _);
							};
					for (let l of e.keys())
						r.set(l, ++t),
							(i.get = n(l)),
							(i.set = o(l)),
							Object.prototype.hasOwnProperty.call(e, l) ||
								((i.enumerable = !0), Object.defineProperty(e, l, i)),
							Object.prototype.hasOwnProperty.call(e, t) ||
								((i.enumerable = !1), Object.defineProperty(e, t, i));
					return (i.get = i.set = null), e;
				};
			})(),
			YF = (() => {
				if (typeof Proxy == 'undefined') return Cb;
				let i = _i.prototype.has,
					e = _i.prototype.get,
					t = _i.prototype.set,
					r = _i.prototype.getKey,
					n = {
						isExtensible() {
							return !1;
						},
						deleteProperty() {
							return !1;
						},
						preventExtensions() {
							return !0;
						},
						ownKeys(o) {
							return [...o.keys()].map((l) => `${l}`);
						},
						has(o, l) {
							switch (l) {
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
								case ct:
								case kn:
								case It:
								case Tt:
								case hl:
									return !0;
							}
							return typeof l == 'number' && !o.has(l) && (l = o.getKey(l)), o.has(l);
						},
						get(o, l, _) {
							switch (l) {
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
								case ct:
								case kn:
								case It:
								case Tt:
								case hl:
									return Reflect.get(o, l, _);
							}
							return typeof l == 'number' && !i.call(_, l) && (l = r.call(_, l)), e.call(_, l);
						},
						set(o, l, _, v) {
							switch (l) {
								case ct:
								case kn:
								case It:
								case Tt:
									return Reflect.set(o, l, _, v);
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
								typeof l == 'number' && !i.call(v, l) && (l = r.call(v, l)),
								i.call(v, l) ? !!t.call(v, l, _) : !1
							);
						}
					};
				return (o) => new Proxy(o, n);
			})();
	});
	var Us = M((yr) => {
		'use strict';
		Object.defineProperty(yr, '__esModule', { value: !0 });
		yr.createElementComparator = yr.clampRange = yr.clampIndex = void 0;
		var Rb = We(),
			Ub = Cs(),
			GF = Xe(),
			kb = ft();
		function $F(i, e, t) {
			let r = i.length,
				n = e > -1 ? e : r + (e % r);
			return t ? t(i, n) : n;
		}
		yr.clampIndex = $F;
		var Vb;
		function JF(i, e, t, r) {
			let { length: n = 0 } = i,
				o = typeof e != 'number' ? 0 : e,
				l = typeof t != 'number' ? n : t;
			return (
				o < 0 && (o = ((o % n) + n) % n),
				l < 0 && (l = ((l % n) + n) % n),
				l < o && ((Vb = o), (o = l), (l = Vb)),
				l > n && (l = n),
				r ? r(i, o, l) : [o, l]
			);
		}
		yr.clampRange = JF;
		var KF = kb.BigIntAvailable ? kb.BigInt(0) : 0,
			Pb = (i) => i !== i;
		function Rs(i) {
			let e = typeof i;
			if (e !== 'object' || i === null)
				return Pb(i) ? Pb : e !== 'bigint' ? (t) => t === i : (t) => KF + t === i;
			if (i instanceof Date) {
				let t = i.valueOf();
				return (r) => (r instanceof Date ? r.valueOf() === t : !1);
			}
			return ArrayBuffer.isView(i)
				? (t) => (t ? GF.compareArrayLike(i, t) : !1)
				: i instanceof Map
				? XF(i)
				: Array.isArray(i)
				? ZF(i)
				: i instanceof Rb.Vector
				? QF(i)
				: eO(i);
		}
		yr.createElementComparator = Rs;
		function ZF(i) {
			let e = [];
			for (let t = -1, r = i.length; ++t < r; ) e[t] = Rs(i[t]);
			return Sa(e);
		}
		function XF(i) {
			let e = -1,
				t = [];
			return i.forEach((r) => (t[++e] = Rs(r))), Sa(t);
		}
		function QF(i) {
			let e = [];
			for (let t = -1, r = i.length; ++t < r; ) e[t] = Rs(i.get(t));
			return Sa(e);
		}
		function eO(i) {
			let e = Object.keys(i);
			if (e.length === 0) return () => !1;
			let t = [];
			for (let r = -1, n = e.length; ++r < n; ) t[r] = Rs(i[e[r]]);
			return Sa(t, e);
		}
		function Sa(i, e) {
			return (t) => {
				if (!t || typeof t != 'object') return !1;
				switch (t.constructor) {
					case Array:
						return tO(i, t);
					case Map:
					case Ub.MapRow:
					case Ub.StructRow:
						return Nb(i, t, t.keys());
					case Object:
					case void 0:
						return Nb(i, t, e || Object.keys(t));
				}
				return t instanceof Rb.Vector ? iO(i, t) : !1;
			};
		}
		function tO(i, e) {
			let t = i.length;
			if (e.length !== t) return !1;
			for (let r = -1; ++r < t; ) if (!i[r](e[r])) return !1;
			return !0;
		}
		function iO(i, e) {
			let t = i.length;
			if (e.length !== t) return !1;
			for (let r = -1; ++r < t; ) if (!i[r](e.get(r))) return !1;
			return !0;
		}
		function Nb(i, e, t) {
			let r = t[Symbol.iterator](),
				n = e instanceof Map ? e.keys() : Object.keys(e)[Symbol.iterator](),
				o = e instanceof Map ? e.values() : Object.values(e)[Symbol.iterator](),
				l = 0,
				_ = i.length,
				v = o.next(),
				B = r.next(),
				D = n.next();
			for (
				;
				l < _ && !B.done && !D.done && !v.done && !(B.value !== D.value || !i[l](v.value));
				++l, B = r.next(), D = n.next(), v = o.next()
			);
			return l === _ && B.done && D.done && v.done
				? !0
				: (r.return && r.return(), n.return && n.return(), o.return && o.return(), !1);
		}
	});
	var $r = M((nt) => {
		'use strict';
		Object.defineProperty(nt, '__esModule', { value: !0 });
		nt.selectColumnChildrenArgs =
			nt.selectVectorChildrenArgs =
			nt.selectChunkArgs =
			nt.selectFieldArgs =
			nt.selectColumnArgs =
			nt.selectArgs =
			nt.arrayTypeToDataType =
			nt.isTypedArray =
				void 0;
		var pl = Xt(),
			Lb = rt(),
			Vi = Nn(),
			Pn = We(),
			Nt = ve(),
			rO = mr(),
			_r = Array.isArray;
		function yl(i) {
			return ArrayBuffer.isView(i) && 'BYTES_PER_ELEMENT' in i;
		}
		nt.isTypedArray = yl;
		function xb(i) {
			switch (i) {
				case Int8Array:
					return Nt.Int8;
				case Int16Array:
					return Nt.Int16;
				case Int32Array:
					return Nt.Int32;
				case BigInt64Array:
					return Nt.Int64;
				case Uint8Array:
					return Nt.Uint8;
				case Uint16Array:
					return Nt.Uint16;
				case Uint32Array:
					return Nt.Uint32;
				case BigUint64Array:
					return Nt.Uint64;
				case Float32Array:
					return Nt.Float32;
				case Float64Array:
					return Nt.Float64;
				default:
					return null;
			}
		}
		nt.arrayTypeToDataType = xb;
		function nO(i) {
			let e = xb(i.constructor);
			if (!e) throw new TypeError('Unrecognized Array input');
			let t = new e(),
				r = pl.Data.new(t, 0, i.length, 0, [void 0, i]);
			return Pn.Vector.new(r);
		}
		nt.selectArgs = (i, e) => Aa(i, e, [], 0);
		nt.selectColumnArgs = (i) => {
			let [e, t] = ml(i, [[], []]);
			return t.map((r, n) =>
				r instanceof Vi.Column
					? Vi.Column.new(r.field.clone(e[n]), r)
					: r instanceof Pn.Vector
					? Vi.Column.new(e[n], r)
					: yl(r)
					? Vi.Column.new(e[n], nO(r))
					: Vi.Column.new(e[n], [])
			);
		};
		nt.selectFieldArgs = (i) => ml(i, [[], []]);
		nt.selectChunkArgs = (i, e) => _l(i, e, [], 0);
		nt.selectVectorChildrenArgs = (i, e) => qb(i, e, [], 0);
		nt.selectColumnChildrenArgs = (i, e) => Wb(i, e, [], 0);
		function Aa(i, e, t, r) {
			let n,
				o = r,
				l = -1,
				_ = e.length;
			for (; ++l < _; )
				_r((n = e[l])) ? (o = Aa(i, n, t, o).length) : n instanceof i && (t[o++] = n);
			return t;
		}
		function _l(i, e, t, r) {
			let n,
				o = r,
				l = -1,
				_ = e.length;
			for (; ++l < _; )
				_r((n = e[l]))
					? (o = _l(i, n, t, o).length)
					: n instanceof rO.Chunked
					? (o = _l(i, n.chunks, t, o).length)
					: n instanceof i && (t[o++] = n);
			return t;
		}
		function qb(i, e, t, r) {
			let n,
				o = r,
				l = -1,
				_ = e.length;
			for (; ++l < _; )
				_r((n = e[l]))
					? (o = qb(i, n, t, o).length)
					: n instanceof i
					? (o = Aa(
							Pn.Vector,
							n.schema.fields.map((v, B) => n.getChildAt(B)),
							t,
							o
					  ).length)
					: n instanceof Pn.Vector && (t[o++] = n);
			return t;
		}
		function Wb(i, e, t, r) {
			let n,
				o = r,
				l = -1,
				_ = e.length;
			for (; ++l < _; )
				_r((n = e[l]))
					? (o = Wb(i, n, t, o).length)
					: n instanceof i
					? (o = Aa(
							Vi.Column,
							n.schema.fields.map((v, B) => Vi.Column.new(v, n.getChildAt(B))),
							t,
							o
					  ).length)
					: n instanceof Vi.Column && (t[o++] = n);
			return t;
		}
		var sO = (i, [e, t], r) => ((i[0][r] = e), (i[1][r] = t), i);
		function ml(i, e) {
			let t, r;
			switch ((r = i.length)) {
				case 0:
					return e;
				case 1:
					if (((t = e[0]), !i[0])) return e;
					if (_r(i[0])) return ml(i[0], e);
					i[0] instanceof pl.Data ||
						i[0] instanceof Pn.Vector ||
						yl(i[0]) ||
						i[0] instanceof Nt.DataType ||
						([t, i] = Object.entries(i[0]).reduce(sO, e));
					break;
				default:
					_r((t = i[r - 1]))
						? (i = _r(i[0]) ? i[0] : i.slice(0, r - 1))
						: ((i = _r(i[0]) ? i[0] : i), (t = []));
			}
			let n = -1,
				o = -1,
				l = -1,
				_ = i.length,
				v,
				B,
				[D, N] = e;
			for (; ++l < _; )
				(B = i[l]),
					B instanceof Vi.Column && (N[++o] = B)
						? (D[++n] = B.field.clone(t[l], B.type, !0))
						: (({ [l]: v = l } = t),
						  B instanceof Nt.DataType && (N[++o] = B)
								? (D[++n] = Lb.Field.new(v, B, !0))
								: (B == null ? void 0 : B.type) &&
								  (N[++o] = B) &&
								  (B instanceof pl.Data && (N[o] = B = Pn.Vector.new(B)),
								  (D[++n] = Lb.Field.new(v, B.type, !0))));
			return e;
		}
	});
	var mr = M((Da) => {
		'use strict';
		Object.defineProperty(Da, '__esModule', { value: !0 });
		Da.Chunked = void 0;
		var oO = Us(),
			zb = ve(),
			aO = $r(),
			Hb = We(),
			Yb = class {
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
			Pi = class extends Hb.AbstractVector {
				constructor(e, t = [], r = uO(t)) {
					super();
					(this._nullCount = -1),
						(this._type = e),
						(this._chunks = t),
						(this._chunkOffsets = r),
						(this._length = r[r.length - 1]),
						(this._numChildren = (this._type.children || []).length);
				}
				static flatten(...e) {
					return aO.selectChunkArgs(Hb.Vector, e);
				}
				static concat(...e) {
					let t = Pi.flatten(...e);
					return new Pi(t[0].type, t);
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
						e < 0 && (this._nullCount = e = this._chunks.reduce((t, { nullCount: r }) => t + r, 0)),
						e
					);
				}
				get indices() {
					if (zb.DataType.isDictionary(this._type)) {
						if (!this._indices) {
							let e = this._chunks;
							this._indices = e.length === 1 ? e[0].indices : Pi.concat(...e.map((t) => t.indices));
						}
						return this._indices;
					}
					return null;
				}
				get dictionary() {
					return zb.DataType.isDictionary(this._type)
						? this._chunks[this._chunks.length - 1].data.dictionary
						: null;
				}
				[Symbol.iterator]() {
					return new Yb(this._chunks);
				}
				clone(e = this._chunks) {
					return new Pi(this._type, e);
				}
				concat(...e) {
					return this.clone(Pi.flatten(this, ...e));
				}
				slice(e, t) {
					return oO.clampRange(this, e, t, this._sliceInternal);
				}
				getChildAt(e) {
					if (e < 0 || e >= this._numChildren) return null;
					let t = this._children || (this._children = []),
						r,
						n,
						o;
					return (r = t[e])
						? r
						: (n = (this._type.children || [])[e]) &&
						  ((o = this._chunks.map((l) => l.getChildAt(e)).filter((l) => l != null)),
						  o.length > 0)
						? (t[e] = new Pi(n.type, o))
						: null;
				}
				search(e, t) {
					let r = e,
						n = this._chunkOffsets,
						o = n.length - 1;
					if (r < 0 || r >= n[o]) return null;
					if (o <= 1) return t ? t(this, 0, r) : [0, r];
					let l = 0,
						_ = 0,
						v = 0;
					do {
						if (l + 1 === o) return t ? t(this, l, r - _) : [l, r - _];
						(v = (l + (o - l) / 2) | 0), r >= n[v] ? (l = v) : (o = v);
					} while (r < n[o] && r >= (_ = n[l]));
					return null;
				}
				isValid(e) {
					return !!this.search(e, this.isValidInternal);
				}
				get(e) {
					return this.search(e, this.getInternal);
				}
				set(e, t) {
					this.search(e, ({ chunks: r }, n, o) => r[n].set(o, t));
				}
				indexOf(e, t) {
					return t && typeof t == 'number'
						? this.search(t, (r, n, o) => this.indexOfInternal(r, n, o, e))
						: this.indexOfInternal(this, 0, Math.max(0, t || 0), e);
				}
				toArray() {
					let { chunks: e } = this,
						t = e.length,
						r = this._type.ArrayType;
					if (t <= 0) return new r(0);
					if (t <= 1) return e[0].toArray();
					let n = 0,
						o = new Array(t);
					for (let v = -1; ++v < t; ) n += (o[v] = e[v].toArray()).length;
					r !== o[0].constructor && (r = o[0].constructor);
					let l = new r(n),
						_ = r === Array ? lO : cO;
					for (let v = -1, B = 0; ++v < t; ) B = _(o[v], l, B);
					return l;
				}
				getInternal({ _chunks: e }, t, r) {
					return e[t].get(r);
				}
				isValidInternal({ _chunks: e }, t, r) {
					return e[t].isValid(r);
				}
				indexOfInternal({ _chunks: e }, t, r, n) {
					let o = t - 1,
						l = e.length,
						_ = r,
						v = 0,
						B = -1;
					for (; ++o < l; ) {
						if (~(B = e[o].indexOf(n, _))) return v + B;
						(_ = 0), (v += e[o].length);
					}
					return -1;
				}
				_sliceInternal(e, t, r) {
					let n = [],
						{ chunks: o, _chunkOffsets: l } = e;
					for (let _ = -1, v = o.length; ++_ < v; ) {
						let B = o[_],
							D = B.length,
							N = l[_];
						if (N >= r) break;
						if (t >= N + D) continue;
						if (N >= t && N + D <= r) {
							n.push(B);
							continue;
						}
						let W = Math.max(0, t - N),
							K = Math.min(r - N, D);
						n.push(B.slice(W, K));
					}
					return e.clone(n);
				}
			};
		Da.Chunked = Pi;
		function uO(i) {
			let e = new Uint32Array((i || []).length + 1),
				t = (e[0] = 0),
				r = e.length;
			for (let n = 0; ++n < r; ) e[n] = t += i[n - 1].length;
			return e;
		}
		var cO = (i, e, t) => (e.set(i, t), t + i.length),
			lO = (i, e, t) => {
				let r = t;
				for (let n = -1, o = i.length; ++n < o; ) e[r++] = i[n];
				return r;
			};
	});
	var Nn = M((Fa) => {
		'use strict';
		Object.defineProperty(Fa, '__esModule', { value: !0 });
		Fa.Column = void 0;
		var Gb = rt(),
			$b = We(),
			bl = mr(),
			Jr = class extends bl.Chunked {
				constructor(e, t = [], r) {
					t = bl.Chunked.flatten(...t);
					super(e.type, t, r);
					if (((this._field = e), t.length === 1 && !(this instanceof gl)))
						return new gl(e, t[0], this._chunkOffsets);
				}
				static new(...e) {
					let [t, r, ...n] = e;
					typeof t != 'string' && !(t instanceof Gb.Field) && ((r = t), (t = ''));
					let o = bl.Chunked.flatten(
						Array.isArray(r)
							? [...r, ...n]
							: r instanceof $b.Vector
							? [r, ...n]
							: [$b.Vector.new(r, ...n)]
					);
					if (typeof t == 'string') {
						let l = o[0].data.type;
						t = new Gb.Field(t, l, !0);
					} else
						!t.nullable && o.some(({ nullCount: l }) => l > 0) && (t = t.clone({ nullable: !0 }));
					return new Jr(t, o);
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
					return new Jr(this._field, e);
				}
				getChildAt(e) {
					if (e < 0 || e >= this.numChildren) return null;
					let t = this._children || (this._children = []),
						r,
						n,
						o;
					return (r = t[e])
						? r
						: (n = (this.type.children || [])[e]) &&
						  ((o = this._chunks.map((l) => l.getChildAt(e)).filter((l) => l != null)),
						  o.length > 0)
						? (t[e] = new Jr(n, o))
						: null;
				}
			};
		Fa.Column = Jr;
		var gl = class extends Jr {
			constructor(e, t, r) {
				super(e, [t], r);
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
	var Jb = M((Ln) => {
		'use strict';
		Object.defineProperty(Ln, '__esModule', { value: !0 });
		Ln.instance = Ln.TypeAssembler = void 0;
		var dO = Fi(),
			fO = dO.flatbuffers.Long,
			hO = ut(),
			J = er(),
			vl = class extends hO.Visitor {
				visit(e, t) {
					return e == null || t == null ? void 0 : super.visit(e, t);
				}
				visitNull(e, t) {
					return J.Null.startNull(t), J.Null.endNull(t);
				}
				visitInt(e, t) {
					return (
						J.Int.startInt(t),
						J.Int.addBitWidth(t, e.bitWidth),
						J.Int.addIsSigned(t, e.isSigned),
						J.Int.endInt(t)
					);
				}
				visitFloat(e, t) {
					return (
						J.FloatingPoint.startFloatingPoint(t),
						J.FloatingPoint.addPrecision(t, e.precision),
						J.FloatingPoint.endFloatingPoint(t)
					);
				}
				visitBinary(e, t) {
					return J.Binary.startBinary(t), J.Binary.endBinary(t);
				}
				visitBool(e, t) {
					return J.Bool.startBool(t), J.Bool.endBool(t);
				}
				visitUtf8(e, t) {
					return J.Utf8.startUtf8(t), J.Utf8.endUtf8(t);
				}
				visitDecimal(e, t) {
					return (
						J.Decimal.startDecimal(t),
						J.Decimal.addScale(t, e.scale),
						J.Decimal.addPrecision(t, e.precision),
						J.Decimal.endDecimal(t)
					);
				}
				visitDate(e, t) {
					return J.Date.startDate(t), J.Date.addUnit(t, e.unit), J.Date.endDate(t);
				}
				visitTime(e, t) {
					return (
						J.Time.startTime(t),
						J.Time.addUnit(t, e.unit),
						J.Time.addBitWidth(t, e.bitWidth),
						J.Time.endTime(t)
					);
				}
				visitTimestamp(e, t) {
					let r = (e.timezone && t.createString(e.timezone)) || void 0;
					return (
						J.Timestamp.startTimestamp(t),
						J.Timestamp.addUnit(t, e.unit),
						r !== void 0 && J.Timestamp.addTimezone(t, r),
						J.Timestamp.endTimestamp(t)
					);
				}
				visitInterval(e, t) {
					return (
						J.Interval.startInterval(t), J.Interval.addUnit(t, e.unit), J.Interval.endInterval(t)
					);
				}
				visitList(e, t) {
					return J.List.startList(t), J.List.endList(t);
				}
				visitStruct(e, t) {
					return J.Struct_.startStruct_(t), J.Struct_.endStruct_(t);
				}
				visitUnion(e, t) {
					J.Union.startTypeIdsVector(t, e.typeIds.length);
					let r = J.Union.createTypeIdsVector(t, e.typeIds);
					return (
						J.Union.startUnion(t),
						J.Union.addMode(t, e.mode),
						J.Union.addTypeIds(t, r),
						J.Union.endUnion(t)
					);
				}
				visitDictionary(e, t) {
					let r = this.visit(e.indices, t);
					return (
						J.DictionaryEncoding.startDictionaryEncoding(t),
						J.DictionaryEncoding.addId(t, new fO(e.id, 0)),
						J.DictionaryEncoding.addIsOrdered(t, e.isOrdered),
						r !== void 0 && J.DictionaryEncoding.addIndexType(t, r),
						J.DictionaryEncoding.endDictionaryEncoding(t)
					);
				}
				visitFixedSizeBinary(e, t) {
					return (
						J.FixedSizeBinary.startFixedSizeBinary(t),
						J.FixedSizeBinary.addByteWidth(t, e.byteWidth),
						J.FixedSizeBinary.endFixedSizeBinary(t)
					);
				}
				visitFixedSizeList(e, t) {
					return (
						J.FixedSizeList.startFixedSizeList(t),
						J.FixedSizeList.addListSize(t, e.listSize),
						J.FixedSizeList.endFixedSizeList(t)
					);
				}
				visitMap(e, t) {
					return J.Map.startMap(t), J.Map.addKeysSorted(t, e.keysSorted), J.Map.endMap(t);
				}
			};
		Ln.TypeAssembler = vl;
		Ln.instance = new vl();
	});
	var ig = M((mi) => {
		'use strict';
		Object.defineProperty(mi, '__esModule', { value: !0 });
		mi.fieldFromJSON =
			mi.dictionaryBatchFromJSON =
			mi.recordBatchFromJSON =
			mi.schemaFromJSON =
				void 0;
		var xn = rt(),
			Oe = ve(),
			Kr = Zr(),
			qn = Se();
		function pO(i, e = new Map()) {
			return new xn.Schema(_O(i, e), Oa(i.customMetadata), e);
		}
		mi.schemaFromJSON = pO;
		function Kb(i) {
			return new Kr.RecordBatch(i.count, Xb(i.columns), Qb(i.columns));
		}
		mi.recordBatchFromJSON = Kb;
		function yO(i) {
			return new Kr.DictionaryBatch(Kb(i.data), i.id, i.isDelta);
		}
		mi.dictionaryBatchFromJSON = yO;
		function _O(i, e) {
			return (i.fields || []).filter(Boolean).map((t) => xn.Field.fromJSON(t, e));
		}
		function Zb(i, e) {
			return (i.children || []).filter(Boolean).map((t) => xn.Field.fromJSON(t, e));
		}
		function Xb(i) {
			return (i || []).reduce(
				(e, t) => [...e, new Kr.FieldNode(t.count, mO(t.VALIDITY)), ...Xb(t.children)],
				[]
			);
		}
		function Qb(i, e = []) {
			for (let t = -1, r = (i || []).length; ++t < r; ) {
				let n = i[t];
				n.VALIDITY && e.push(new Kr.BufferRegion(e.length, n.VALIDITY.length)),
					n.TYPE && e.push(new Kr.BufferRegion(e.length, n.TYPE.length)),
					n.OFFSET && e.push(new Kr.BufferRegion(e.length, n.OFFSET.length)),
					n.DATA && e.push(new Kr.BufferRegion(e.length, n.DATA.length)),
					(e = Qb(n.children, e));
			}
			return e;
		}
		function mO(i) {
			return (i || []).reduce((e, t) => e + +(t === 0), 0);
		}
		function bO(i, e) {
			let t, r, n, o, l, _;
			return (
				!e || !(o = i.dictionary)
					? ((l = tg(i, Zb(i, e))), (n = new xn.Field(i.name, l, i.nullable, Oa(i.customMetadata))))
					: e.has((t = o.id))
					? ((r = (r = o.indexType) ? eg(r) : new Oe.Int32()),
					  (_ = new Oe.Dictionary(e.get(t), r, t, o.isOrdered)),
					  (n = new xn.Field(i.name, _, i.nullable, Oa(i.customMetadata))))
					: ((r = (r = o.indexType) ? eg(r) : new Oe.Int32()),
					  e.set(t, (l = tg(i, Zb(i, e)))),
					  (_ = new Oe.Dictionary(l, r, t, o.isOrdered)),
					  (n = new xn.Field(i.name, _, i.nullable, Oa(i.customMetadata)))),
				n || null
			);
		}
		mi.fieldFromJSON = bO;
		function Oa(i) {
			return new Map(Object.entries(i || {}));
		}
		function eg(i) {
			return new Oe.Int(i.isSigned, i.bitWidth);
		}
		function tg(i, e) {
			let t = i.type.name;
			switch (t) {
				case 'NONE':
					return new Oe.Null();
				case 'null':
					return new Oe.Null();
				case 'binary':
					return new Oe.Binary();
				case 'utf8':
					return new Oe.Utf8();
				case 'bool':
					return new Oe.Bool();
				case 'list':
					return new Oe.List((e || [])[0]);
				case 'struct':
					return new Oe.Struct(e || []);
				case 'struct_':
					return new Oe.Struct(e || []);
			}
			switch (t) {
				case 'int': {
					let r = i.type;
					return new Oe.Int(r.isSigned, r.bitWidth);
				}
				case 'floatingpoint': {
					let r = i.type;
					return new Oe.Float(qn.Precision[r.precision]);
				}
				case 'decimal': {
					let r = i.type;
					return new Oe.Decimal(r.scale, r.precision);
				}
				case 'date': {
					let r = i.type;
					return new Oe.Date_(qn.DateUnit[r.unit]);
				}
				case 'time': {
					let r = i.type;
					return new Oe.Time(qn.TimeUnit[r.unit], r.bitWidth);
				}
				case 'timestamp': {
					let r = i.type;
					return new Oe.Timestamp(qn.TimeUnit[r.unit], r.timezone);
				}
				case 'interval': {
					let r = i.type;
					return new Oe.Interval(qn.IntervalUnit[r.unit]);
				}
				case 'union': {
					let r = i.type;
					return new Oe.Union(qn.UnionMode[r.mode], r.typeIds || [], e || []);
				}
				case 'fixedsizebinary': {
					let r = i.type;
					return new Oe.FixedSizeBinary(r.byteWidth);
				}
				case 'fixedsizelist': {
					let r = i.type;
					return new Oe.FixedSizeList(r.listSize, (e || [])[0]);
				}
				case 'map': {
					let r = i.type;
					return new Oe.Map_((e || [])[0], r.keysSorted);
				}
			}
			throw new Error(`Unrecognized type: "${t}"`);
		}
	});
	var Zr = M((xt) => {
		'use strict';
		Object.defineProperty(xt, '__esModule', { value: !0 });
		xt.FieldNode = xt.BufferRegion = xt.DictionaryBatch = xt.RecordBatch = xt.Message = void 0;
		var jl = Fi(),
			Y = er(),
			Ce = Ro(),
			st = rt(),
			gO = Xe(),
			Pe = Se(),
			wl = Jb(),
			Ea = ig(),
			Xr = jl.flatbuffers.Long,
			vO = jl.flatbuffers.Builder,
			jO = jl.flatbuffers.ByteBuffer,
			Ee = ve(),
			br = class {
				constructor(e, t, r, n) {
					(this._version = t),
						(this._headerType = r),
						(this.body = new Uint8Array(0)),
						n && (this._createHeader = () => n),
						(this._bodyLength = typeof e == 'number' ? e : e.low);
				}
				static fromJSON(e, t) {
					let r = new br(0, Pe.MetadataVersion.V4, t);
					return (r._createHeader = wO(e, t)), r;
				}
				static decode(e) {
					e = new jO(gO.toUint8Array(e));
					let t = Ce.Message.getRootAsMessage(e),
						r = t.bodyLength(),
						n = t.version(),
						o = t.headerType(),
						l = new br(r, n, o);
					return (l._createHeader = TO(t, o)), l;
				}
				static encode(e) {
					let t = new vO(),
						r = -1;
					return (
						e.isSchema()
							? (r = st.Schema.encode(t, e.header()))
							: e.isRecordBatch()
							? (r = Lt.encode(t, e.header()))
							: e.isDictionaryBatch() && (r = bi.encode(t, e.header())),
						Ce.Message.startMessage(t),
						Ce.Message.addVersion(t, Pe.MetadataVersion.V4),
						Ce.Message.addHeader(t, r),
						Ce.Message.addHeaderType(t, e.headerType),
						Ce.Message.addBodyLength(t, new Xr(e.bodyLength, 0)),
						Ce.Message.finishMessageBuffer(t, Ce.Message.endMessage(t)),
						t.asUint8Array()
					);
				}
				static from(e, t = 0) {
					if (e instanceof st.Schema)
						return new br(0, Pe.MetadataVersion.V4, Pe.MessageHeader.Schema, e);
					if (e instanceof Lt)
						return new br(t, Pe.MetadataVersion.V4, Pe.MessageHeader.RecordBatch, e);
					if (e instanceof bi)
						return new br(t, Pe.MetadataVersion.V4, Pe.MessageHeader.DictionaryBatch, e);
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
					return this.headerType === Pe.MessageHeader.Schema;
				}
				isRecordBatch() {
					return this.headerType === Pe.MessageHeader.RecordBatch;
				}
				isDictionaryBatch() {
					return this.headerType === Pe.MessageHeader.DictionaryBatch;
				}
			};
		xt.Message = br;
		var Lt = class {
			constructor(e, t, r) {
				(this._nodes = t), (this._buffers = r), (this._length = typeof e == 'number' ? e : e.low);
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
		xt.RecordBatch = Lt;
		var bi = class {
			constructor(e, t, r = !1) {
				(this._data = e), (this._isDelta = r), (this._id = typeof t == 'number' ? t : t.low);
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
		xt.DictionaryBatch = bi;
		var Qr = class {
			constructor(e, t) {
				(this.offset = typeof e == 'number' ? e : e.low),
					(this.length = typeof t == 'number' ? t : t.low);
			}
		};
		xt.BufferRegion = Qr;
		var en = class {
			constructor(e, t) {
				(this.length = typeof e == 'number' ? e : e.low),
					(this.nullCount = typeof t == 'number' ? t : t.low);
			}
		};
		xt.FieldNode = en;
		function wO(i, e) {
			return () => {
				switch (e) {
					case Pe.MessageHeader.Schema:
						return st.Schema.fromJSON(i);
					case Pe.MessageHeader.RecordBatch:
						return Lt.fromJSON(i);
					case Pe.MessageHeader.DictionaryBatch:
						return bi.fromJSON(i);
				}
				throw new Error(`Unrecognized Message type: { name: ${Pe.MessageHeader[e]}, type: ${e} }`);
			};
		}
		function TO(i, e) {
			return () => {
				switch (e) {
					case Pe.MessageHeader.Schema:
						return st.Schema.decode(i.header(new Y.Schema()));
					case Pe.MessageHeader.RecordBatch:
						return Lt.decode(i.header(new Ce.RecordBatch()), i.version());
					case Pe.MessageHeader.DictionaryBatch:
						return bi.decode(i.header(new Ce.DictionaryBatch()), i.version());
				}
				throw new Error(`Unrecognized Message type: { name: ${Pe.MessageHeader[e]}, type: ${e} }`);
			};
		}
		st.Field.encode = RO;
		st.Field.decode = MO;
		st.Field.fromJSON = Ea.fieldFromJSON;
		st.Schema.encode = CO;
		st.Schema.decode = IO;
		st.Schema.fromJSON = Ea.schemaFromJSON;
		Lt.encode = UO;
		Lt.decode = BO;
		Lt.fromJSON = Ea.recordBatchFromJSON;
		bi.encode = kO;
		bi.decode = SO;
		bi.fromJSON = Ea.dictionaryBatchFromJSON;
		en.encode = VO;
		en.decode = DO;
		Qr.encode = PO;
		Qr.decode = AO;
		function IO(i, e = new Map()) {
			let t = EO(i, e);
			return new st.Schema(t, Ma(i), e);
		}
		function BO(i, e = Pe.MetadataVersion.V4) {
			return new Lt(i.length(), FO(i), OO(i, e));
		}
		function SO(i, e = Pe.MetadataVersion.V4) {
			return new bi(Lt.decode(i.data(), e), i.id(), i.isDelta());
		}
		function AO(i) {
			return new Qr(i.offset(), i.length());
		}
		function DO(i) {
			return new en(i.length(), i.nullCount());
		}
		function FO(i) {
			let e = [];
			for (let t, r = -1, n = -1, o = i.nodesLength(); ++r < o; )
				(t = i.nodes(r)) && (e[++n] = en.decode(t));
			return e;
		}
		function OO(i, e) {
			let t = [];
			for (let r, n = -1, o = -1, l = i.buffersLength(); ++n < l; )
				(r = i.buffers(n)) &&
					(e < Pe.MetadataVersion.V4 && (r.bb_pos += 8 * (n + 1)), (t[++o] = Qr.decode(r)));
			return t;
		}
		function EO(i, e) {
			let t = [];
			for (let r, n = -1, o = -1, l = i.fieldsLength(); ++n < l; )
				(r = i.fields(n)) && (t[++o] = st.Field.decode(r, e));
			return t;
		}
		function rg(i, e) {
			let t = [];
			for (let r, n = -1, o = -1, l = i.childrenLength(); ++n < l; )
				(r = i.children(n)) && (t[++o] = st.Field.decode(r, e));
			return t;
		}
		function MO(i, e) {
			let t, r, n, o, l, _;
			return (
				!e || !(_ = i.dictionary())
					? ((n = sg(i, rg(i, e))), (r = new st.Field(i.name(), n, i.nullable(), Ma(i))))
					: e.has((t = _.id().low))
					? ((o = (o = _.indexType()) ? ng(o) : new Ee.Int32()),
					  (l = new Ee.Dictionary(e.get(t), o, t, _.isOrdered())),
					  (r = new st.Field(i.name(), l, i.nullable(), Ma(i))))
					: ((o = (o = _.indexType()) ? ng(o) : new Ee.Int32()),
					  e.set(t, (n = sg(i, rg(i, e)))),
					  (l = new Ee.Dictionary(n, o, t, _.isOrdered())),
					  (r = new st.Field(i.name(), l, i.nullable(), Ma(i)))),
				r || null
			);
		}
		function Ma(i) {
			let e = new Map();
			if (i)
				for (let t, r, n = -1, o = i.customMetadataLength() | 0; ++n < o; )
					(t = i.customMetadata(n)) && (r = t.key()) != null && e.set(r, t.value());
			return e;
		}
		function ng(i) {
			return new Ee.Int(i.isSigned(), i.bitWidth());
		}
		function sg(i, e) {
			let t = i.typeType();
			switch (t) {
				case Y.Type.NONE:
					return new Ee.Null();
				case Y.Type.Null:
					return new Ee.Null();
				case Y.Type.Binary:
					return new Ee.Binary();
				case Y.Type.Utf8:
					return new Ee.Utf8();
				case Y.Type.Bool:
					return new Ee.Bool();
				case Y.Type.List:
					return new Ee.List((e || [])[0]);
				case Y.Type.Struct_:
					return new Ee.Struct(e || []);
			}
			switch (t) {
				case Y.Type.Int: {
					let r = i.type(new Y.Int());
					return new Ee.Int(r.isSigned(), r.bitWidth());
				}
				case Y.Type.FloatingPoint: {
					let r = i.type(new Y.FloatingPoint());
					return new Ee.Float(r.precision());
				}
				case Y.Type.Decimal: {
					let r = i.type(new Y.Decimal());
					return new Ee.Decimal(r.scale(), r.precision());
				}
				case Y.Type.Date: {
					let r = i.type(new Y.Date());
					return new Ee.Date_(r.unit());
				}
				case Y.Type.Time: {
					let r = i.type(new Y.Time());
					return new Ee.Time(r.unit(), r.bitWidth());
				}
				case Y.Type.Timestamp: {
					let r = i.type(new Y.Timestamp());
					return new Ee.Timestamp(r.unit(), r.timezone());
				}
				case Y.Type.Interval: {
					let r = i.type(new Y.Interval());
					return new Ee.Interval(r.unit());
				}
				case Y.Type.Union: {
					let r = i.type(new Y.Union());
					return new Ee.Union(r.mode(), r.typeIdsArray() || [], e || []);
				}
				case Y.Type.FixedSizeBinary: {
					let r = i.type(new Y.FixedSizeBinary());
					return new Ee.FixedSizeBinary(r.byteWidth());
				}
				case Y.Type.FixedSizeList: {
					let r = i.type(new Y.FixedSizeList());
					return new Ee.FixedSizeList(r.listSize(), (e || [])[0]);
				}
				case Y.Type.Map: {
					let r = i.type(new Y.Map());
					return new Ee.Map_((e || [])[0], r.keysSorted());
				}
			}
			throw new Error(`Unrecognized type: "${Y.Type[t]}" (${t})`);
		}
		function CO(i, e) {
			let t = e.fields.map((o) => st.Field.encode(i, o));
			Y.Schema.startFieldsVector(i, t.length);
			let r = Y.Schema.createFieldsVector(i, t),
				n =
					e.metadata && e.metadata.size > 0
						? Y.Schema.createCustomMetadataVector(
								i,
								[...e.metadata].map(([o, l]) => {
									let _ = i.createString(`${o}`),
										v = i.createString(`${l}`);
									return (
										Y.KeyValue.startKeyValue(i),
										Y.KeyValue.addKey(i, _),
										Y.KeyValue.addValue(i, v),
										Y.KeyValue.endKeyValue(i)
									);
								})
						  )
						: -1;
			return (
				Y.Schema.startSchema(i),
				Y.Schema.addFields(i, r),
				Y.Schema.addEndianness(i, NO ? Y.Endianness.Little : Y.Endianness.Big),
				n !== -1 && Y.Schema.addCustomMetadata(i, n),
				Y.Schema.endSchema(i)
			);
		}
		function RO(i, e) {
			let t = -1,
				r = -1,
				n = -1,
				o = e.type,
				l = e.typeId;
			Ee.DataType.isDictionary(o)
				? ((l = o.dictionary.typeId),
				  (n = wl.instance.visit(o, i)),
				  (r = wl.instance.visit(o.dictionary, i)))
				: (r = wl.instance.visit(o, i));
			let _ = (o.children || []).map((D) => st.Field.encode(i, D)),
				v = Y.Field.createChildrenVector(i, _),
				B =
					e.metadata && e.metadata.size > 0
						? Y.Field.createCustomMetadataVector(
								i,
								[...e.metadata].map(([D, N]) => {
									let W = i.createString(`${D}`),
										K = i.createString(`${N}`);
									return (
										Y.KeyValue.startKeyValue(i),
										Y.KeyValue.addKey(i, W),
										Y.KeyValue.addValue(i, K),
										Y.KeyValue.endKeyValue(i)
									);
								})
						  )
						: -1;
			return (
				e.name && (t = i.createString(e.name)),
				Y.Field.startField(i),
				Y.Field.addType(i, r),
				Y.Field.addTypeType(i, l),
				Y.Field.addChildren(i, v),
				Y.Field.addNullable(i, !!e.nullable),
				t !== -1 && Y.Field.addName(i, t),
				n !== -1 && Y.Field.addDictionary(i, n),
				B !== -1 && Y.Field.addCustomMetadata(i, B),
				Y.Field.endField(i)
			);
		}
		function UO(i, e) {
			let t = e.nodes || [],
				r = e.buffers || [];
			Ce.RecordBatch.startNodesVector(i, t.length),
				t
					.slice()
					.reverse()
					.forEach((l) => en.encode(i, l));
			let n = i.endVector();
			Ce.RecordBatch.startBuffersVector(i, r.length),
				r
					.slice()
					.reverse()
					.forEach((l) => Qr.encode(i, l));
			let o = i.endVector();
			return (
				Ce.RecordBatch.startRecordBatch(i),
				Ce.RecordBatch.addLength(i, new Xr(e.length, 0)),
				Ce.RecordBatch.addNodes(i, n),
				Ce.RecordBatch.addBuffers(i, o),
				Ce.RecordBatch.endRecordBatch(i)
			);
		}
		function kO(i, e) {
			let t = Lt.encode(i, e.data);
			return (
				Ce.DictionaryBatch.startDictionaryBatch(i),
				Ce.DictionaryBatch.addId(i, new Xr(e.id, 0)),
				Ce.DictionaryBatch.addIsDelta(i, e.isDelta),
				Ce.DictionaryBatch.addData(i, t),
				Ce.DictionaryBatch.endDictionaryBatch(i)
			);
		}
		function VO(i, e) {
			return Ce.FieldNode.createFieldNode(i, new Xr(e.length, 0), new Xr(e.nullCount, 0));
		}
		function PO(i, e) {
			return Y.Buffer.createBuffer(i, new Xr(e.offset, 0), new Xr(e.length, 0));
		}
		var NO = (function () {
			let i = new ArrayBuffer(2);
			return new DataView(i).setInt16(0, 256, !0), new Int16Array(i)[0] === 256;
		})();
	});
	var Ra = M((me) => {
		'use strict';
		Object.defineProperty(me, '__esModule', { value: !0 });
		me.magicX2AndPadding =
			me.magicAndPadding =
			me.magicLength =
			me.checkForMagicArrowString =
			me.MAGIC =
			me.MAGIC_STR =
			me.PADDING =
			me.JSONMessageReader =
			me.AsyncMessageReader =
			me.MessageReader =
				void 0;
		var gr = dt(),
			vr = Se(),
			LO = Fi(),
			og = LO.flatbuffers.ByteBuffer,
			ks = Zr(),
			xO = ft(),
			qO = cl(),
			ag = Xe(),
			Ca = hr(),
			ii = fn(),
			Tl = (i) => `Expected ${vr.MessageHeader[i]} Message in stream, but was null or length 0.`,
			Il = (i) =>
				`Header pointer of flatbuffer-encoded ${vr.MessageHeader[i]} Message is null or length 0.`,
			ug = (i, e) => `Expected to read ${i} metadata bytes, but only read ${e}.`,
			cg = (i, e) => `Expected to read ${i} bytes for message body, but only read ${e}.`,
			Bl = class {
				constructor(e) {
					this.source = e instanceof Ca.ByteStream ? e : new Ca.ByteStream(e);
				}
				[Symbol.iterator]() {
					return this;
				}
				next() {
					let e;
					return (e = this.readMetadataLength()).done ||
						(e.value === -1 && (e = this.readMetadataLength()).done) ||
						(e = this.readMetadata(e.value)).done
						? ii.ITERATOR_DONE
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
					if (e != null && t.value.headerType !== e) throw new Error(Tl(e));
					return t.value;
				}
				readMessageBody(e) {
					if (e <= 0) return new Uint8Array(0);
					let t = ag.toUint8Array(this.source.read(e));
					if (t.byteLength < e) throw new Error(cg(e, t.byteLength));
					return t.byteOffset % 8 == 0 && t.byteOffset + t.byteLength <= t.buffer.byteLength
						? t
						: t.slice();
				}
				readSchema(e = !1) {
					let t = vr.MessageHeader.Schema,
						r = this.readMessage(t),
						n = r == null ? void 0 : r.header();
					if (e && !n) throw new Error(Il(t));
					return n;
				}
				readMetadataLength() {
					let e = this.source.read(me.PADDING),
						t = e && new og(e),
						r = (t == null ? void 0 : t.readInt32(0)) || 0;
					return { done: r === 0, value: r };
				}
				readMetadata(e) {
					let t = this.source.read(e);
					if (!t) return ii.ITERATOR_DONE;
					if (t.byteLength < e) throw new Error(ug(e, t.byteLength));
					return { done: !1, value: ks.Message.decode(t) };
				}
			};
		me.MessageReader = Bl;
		var lg = class {
			constructor(e, t) {
				this.source =
					e instanceof Ca.AsyncByteStream
						? e
						: xO.isFileHandle(e)
						? new qO.AsyncRandomAccessFile(e, t)
						: new Ca.AsyncByteStream(e);
			}
			[Symbol.asyncIterator]() {
				return this;
			}
			next() {
				return gr.__awaiter(this, void 0, void 0, function* () {
					let e;
					return (e = yield this.readMetadataLength()).done ||
						(e.value === -1 && (e = yield this.readMetadataLength()).done) ||
						(e = yield this.readMetadata(e.value)).done
						? ii.ITERATOR_DONE
						: e;
				});
			}
			throw(e) {
				return gr.__awaiter(this, void 0, void 0, function* () {
					return yield this.source.throw(e);
				});
			}
			return(e) {
				return gr.__awaiter(this, void 0, void 0, function* () {
					return yield this.source.return(e);
				});
			}
			readMessage(e) {
				return gr.__awaiter(this, void 0, void 0, function* () {
					let t;
					if ((t = yield this.next()).done) return null;
					if (e != null && t.value.headerType !== e) throw new Error(Tl(e));
					return t.value;
				});
			}
			readMessageBody(e) {
				return gr.__awaiter(this, void 0, void 0, function* () {
					if (e <= 0) return new Uint8Array(0);
					let t = ag.toUint8Array(yield this.source.read(e));
					if (t.byteLength < e) throw new Error(cg(e, t.byteLength));
					return t.byteOffset % 8 == 0 && t.byteOffset + t.byteLength <= t.buffer.byteLength
						? t
						: t.slice();
				});
			}
			readSchema(e = !1) {
				return gr.__awaiter(this, void 0, void 0, function* () {
					let t = vr.MessageHeader.Schema,
						r = yield this.readMessage(t),
						n = r == null ? void 0 : r.header();
					if (e && !n) throw new Error(Il(t));
					return n;
				});
			}
			readMetadataLength() {
				return gr.__awaiter(this, void 0, void 0, function* () {
					let e = yield this.source.read(me.PADDING),
						t = e && new og(e),
						r = (t == null ? void 0 : t.readInt32(0)) || 0;
					return { done: r === 0, value: r };
				});
			}
			readMetadata(e) {
				return gr.__awaiter(this, void 0, void 0, function* () {
					let t = yield this.source.read(e);
					if (!t) return ii.ITERATOR_DONE;
					if (t.byteLength < e) throw new Error(ug(e, t.byteLength));
					return { done: !1, value: ks.Message.decode(t) };
				});
			}
		};
		me.AsyncMessageReader = lg;
		var dg = class extends Bl {
			constructor(e) {
				super(new Uint8Array(0));
				(this._schema = !1),
					(this._body = []),
					(this._batchIndex = 0),
					(this._dictionaryIndex = 0),
					(this._json = e instanceof ii.ArrowJSON ? e : new ii.ArrowJSON(e));
			}
			next() {
				let { _json: e } = this;
				if (!this._schema) {
					this._schema = !0;
					let t = ks.Message.fromJSON(e.schema, vr.MessageHeader.Schema);
					return { done: !1, value: t };
				}
				if (this._dictionaryIndex < e.dictionaries.length) {
					let t = e.dictionaries[this._dictionaryIndex++];
					this._body = t.data.columns;
					let r = ks.Message.fromJSON(t, vr.MessageHeader.DictionaryBatch);
					return { done: !1, value: r };
				}
				if (this._batchIndex < e.batches.length) {
					let t = e.batches[this._batchIndex++];
					this._body = t.columns;
					let r = ks.Message.fromJSON(t, vr.MessageHeader.RecordBatch);
					return { done: !1, value: r };
				}
				return (this._body = []), ii.ITERATOR_DONE;
			}
			readMessageBody(e) {
				return t(this._body);
				function t(r) {
					return (r || []).reduce(
						(n, o) => [
							...n,
							...((o.VALIDITY && [o.VALIDITY]) || []),
							...((o.TYPE && [o.TYPE]) || []),
							...((o.OFFSET && [o.OFFSET]) || []),
							...((o.DATA && [o.DATA]) || []),
							...t(o.children)
						],
						[]
					);
				}
			}
			readMessage(e) {
				let t;
				if ((t = this.next()).done) return null;
				if (e != null && t.value.headerType !== e) throw new Error(Tl(e));
				return t.value;
			}
			readSchema() {
				let e = vr.MessageHeader.Schema,
					t = this.readMessage(e),
					r = t == null ? void 0 : t.header();
				if (!t || !r) throw new Error(Il(e));
				return r;
			}
		};
		me.JSONMessageReader = dg;
		me.PADDING = 4;
		me.MAGIC_STR = 'ARROW1';
		me.MAGIC = new Uint8Array(me.MAGIC_STR.length);
		for (let i = 0; i < me.MAGIC_STR.length; i += 1 | 0) me.MAGIC[i] = me.MAGIC_STR.charCodeAt(i);
		function WO(i, e = 0) {
			for (let t = -1, r = me.MAGIC.length; ++t < r; ) if (me.MAGIC[t] !== i[e + t]) return !1;
			return !0;
		}
		me.checkForMagicArrowString = WO;
		me.magicLength = me.MAGIC.length;
		me.magicAndPadding = me.magicLength + me.PADDING;
		me.magicX2AndPadding = me.magicLength * 2 + me.PADDING;
	});
	var Fl = M((Ne) => {
		'use strict';
		Object.defineProperty(Ne, '__esModule', { value: !0 });
		Ne.compareTypes =
			Ne.compareFields =
			Ne.compareSchemas =
			Ne.instance =
			Ne.TypeComparator =
				void 0;
		var zO = ut(),
			X = class extends zO.Visitor {
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
							e.every((r, n) => this.compareFields(r, t[n])))
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
		Ne.TypeComparator = X;
		function vt(i, e) {
			return e instanceof i.constructor;
		}
		function Vs(i, e) {
			return i === e || vt(i, e);
		}
		function Ni(i, e) {
			return i === e || (vt(i, e) && i.bitWidth === e.bitWidth && i.isSigned === e.isSigned);
		}
		function Ua(i, e) {
			return i === e || (vt(i, e) && i.precision === e.precision);
		}
		function HO(i, e) {
			return i === e || (vt(i, e) && i.byteWidth === e.byteWidth);
		}
		function Sl(i, e) {
			return i === e || (vt(i, e) && i.unit === e.unit);
		}
		function Ps(i, e) {
			return i === e || (vt(i, e) && i.unit === e.unit && i.timezone === e.timezone);
		}
		function Ns(i, e) {
			return i === e || (vt(i, e) && i.unit === e.unit && i.bitWidth === e.bitWidth);
		}
		function YO(i, e) {
			return (
				i === e ||
				(vt(i, e) &&
					i.children.length === e.children.length &&
					Ne.instance.compareManyFields(i.children, e.children))
			);
		}
		function GO(i, e) {
			return (
				i === e ||
				(vt(i, e) &&
					i.children.length === e.children.length &&
					Ne.instance.compareManyFields(i.children, e.children))
			);
		}
		function Al(i, e) {
			return (
				i === e ||
				(vt(i, e) &&
					i.mode === e.mode &&
					i.typeIds.every((t, r) => t === e.typeIds[r]) &&
					Ne.instance.compareManyFields(i.children, e.children))
			);
		}
		function $O(i, e) {
			return (
				i === e ||
				(vt(i, e) &&
					i.id === e.id &&
					i.isOrdered === e.isOrdered &&
					Ne.instance.visit(i.indices, e.indices) &&
					Ne.instance.visit(i.dictionary, e.dictionary))
			);
		}
		function Dl(i, e) {
			return i === e || (vt(i, e) && i.unit === e.unit);
		}
		function JO(i, e) {
			return (
				i === e ||
				(vt(i, e) &&
					i.listSize === e.listSize &&
					i.children.length === e.children.length &&
					Ne.instance.compareManyFields(i.children, e.children))
			);
		}
		function KO(i, e) {
			return (
				i === e ||
				(vt(i, e) &&
					i.keysSorted === e.keysSorted &&
					i.children.length === e.children.length &&
					Ne.instance.compareManyFields(i.children, e.children))
			);
		}
		X.prototype.visitNull = Vs;
		X.prototype.visitBool = Vs;
		X.prototype.visitInt = Ni;
		X.prototype.visitInt8 = Ni;
		X.prototype.visitInt16 = Ni;
		X.prototype.visitInt32 = Ni;
		X.prototype.visitInt64 = Ni;
		X.prototype.visitUint8 = Ni;
		X.prototype.visitUint16 = Ni;
		X.prototype.visitUint32 = Ni;
		X.prototype.visitUint64 = Ni;
		X.prototype.visitFloat = Ua;
		X.prototype.visitFloat16 = Ua;
		X.prototype.visitFloat32 = Ua;
		X.prototype.visitFloat64 = Ua;
		X.prototype.visitUtf8 = Vs;
		X.prototype.visitBinary = Vs;
		X.prototype.visitFixedSizeBinary = HO;
		X.prototype.visitDate = Sl;
		X.prototype.visitDateDay = Sl;
		X.prototype.visitDateMillisecond = Sl;
		X.prototype.visitTimestamp = Ps;
		X.prototype.visitTimestampSecond = Ps;
		X.prototype.visitTimestampMillisecond = Ps;
		X.prototype.visitTimestampMicrosecond = Ps;
		X.prototype.visitTimestampNanosecond = Ps;
		X.prototype.visitTime = Ns;
		X.prototype.visitTimeSecond = Ns;
		X.prototype.visitTimeMillisecond = Ns;
		X.prototype.visitTimeMicrosecond = Ns;
		X.prototype.visitTimeNanosecond = Ns;
		X.prototype.visitDecimal = Vs;
		X.prototype.visitList = YO;
		X.prototype.visitStruct = GO;
		X.prototype.visitUnion = Al;
		X.prototype.visitDenseUnion = Al;
		X.prototype.visitSparseUnion = Al;
		X.prototype.visitDictionary = $O;
		X.prototype.visitInterval = Dl;
		X.prototype.visitIntervalDayTime = Dl;
		X.prototype.visitIntervalYearMonth = Dl;
		X.prototype.visitFixedSizeList = JO;
		X.prototype.visitMap = KO;
		Ne.instance = new X();
		function ZO(i, e) {
			return Ne.instance.compareSchemas(i, e);
		}
		Ne.compareSchemas = ZO;
		function XO(i, e) {
			return Ne.instance.compareFields(i, e);
		}
		Ne.compareFields = XO;
		function QO(i, e) {
			return Ne.instance.visit(i, e);
		}
		Ne.compareTypes = QO;
	});
	var _g = M((ka) => {
		'use strict';
		Object.defineProperty(ka, '__esModule', { value: !0 });
		ka.VectorAssembler = void 0;
		var eE = ut(),
			fg = Se(),
			tE = Li(),
			Ol = Xe(),
			El = li(),
			iE = $r(),
			hg = Zr(),
			pg = ve(),
			Je = class extends eE.Visitor {
				constructor() {
					super();
					(this._byteLength = 0),
						(this._nodes = []),
						(this._buffers = []),
						(this._bufferRegions = []);
				}
				static assemble(...e) {
					let t = new Je(),
						r = iE.selectVectorChildrenArgs(tE.RecordBatch, e),
						[n = t] = t.visitMany(r);
					return n;
				}
				visit(e) {
					if (!pg.DataType.isDictionary(e.type)) {
						let { data: t, length: r, nullCount: n } = e;
						if (r > 2147483647)
							throw new RangeError('Cannot write arrays larger than 2^31 - 1 in length');
						pg.DataType.isNull(e.type) ||
							ri.call(
								this,
								n <= 0 ? new Uint8Array(0) : El.truncateBitmap(t.offset, r, t.nullBitmap)
							),
							this.nodes.push(new hg.FieldNode(r, n));
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
		ka.VectorAssembler = Je;
		function ri(i) {
			let e = (i.byteLength + 7) & ~7;
			return (
				this.buffers.push(i),
				this.bufferRegions.push(new hg.BufferRegion(this._byteLength, e)),
				(this._byteLength += e),
				this
			);
		}
		function rE(i) {
			let { type: e, length: t, typeIds: r, valueOffsets: n } = i;
			if ((ri.call(this, r), e.mode === fg.UnionMode.Sparse)) return Cl.call(this, i);
			if (e.mode === fg.UnionMode.Dense) {
				if (i.offset <= 0) return ri.call(this, n), Cl.call(this, i);
				{
					let o = r.reduce((D, N) => Math.max(D, N), r[0]),
						l = new Int32Array(o + 1),
						_ = new Int32Array(o + 1).fill(-1),
						v = new Int32Array(t),
						B = Ol.rebaseValueOffsets(-n[0], t, n);
					for (let D, N, W = -1; ++W < t; )
						(N = _[(D = r[W])]) === -1 && (N = _[D] = B[D]), (v[W] = B[W] - N), ++l[D];
					ri.call(this, v);
					for (let D, N = -1, W = e.children.length; ++N < W; )
						if ((D = i.getChildAt(N))) {
							let K = e.typeIds[N],
								Re = Math.min(t, l[K]);
							this.visit(D.slice(_[K], Re));
						}
				}
			}
			return this;
		}
		function nE(i) {
			let e;
			return i.nullCount >= i.length
				? ri.call(this, new Uint8Array(0))
				: (e = i.values) instanceof Uint8Array
				? ri.call(this, El.truncateBitmap(i.offset, i.length, e))
				: ri.call(this, El.packBools(i));
		}
		function jr(i) {
			return ri.call(this, i.values.subarray(0, i.length * i.stride));
		}
		function yg(i) {
			let { length: e, values: t, valueOffsets: r } = i,
				n = r[0],
				o = r[e],
				l = Math.min(o - n, t.byteLength - n);
			return (
				ri.call(this, Ol.rebaseValueOffsets(-r[0], e, r)), ri.call(this, t.subarray(n, n + l)), this
			);
		}
		function Ml(i) {
			let { length: e, valueOffsets: t } = i;
			return t && ri.call(this, Ol.rebaseValueOffsets(t[0], e, t)), this.visit(i.getChildAt(0));
		}
		function Cl(i) {
			return this.visitMany(i.type.children.map((e, t) => i.getChildAt(t)).filter(Boolean))[0];
		}
		Je.prototype.visitBool = nE;
		Je.prototype.visitInt = jr;
		Je.prototype.visitFloat = jr;
		Je.prototype.visitUtf8 = yg;
		Je.prototype.visitBinary = yg;
		Je.prototype.visitFixedSizeBinary = jr;
		Je.prototype.visitDate = jr;
		Je.prototype.visitTimestamp = jr;
		Je.prototype.visitTime = jr;
		Je.prototype.visitDecimal = jr;
		Je.prototype.visitList = Ml;
		Je.prototype.visitStruct = Cl;
		Je.prototype.visitUnion = rE;
		Je.prototype.visitInterval = jr;
		Je.prototype.visitFixedSizeList = Ml;
		Je.prototype.visitMap = Ml;
	});
	var bg = M((Va) => {
		'use strict';
		Object.defineProperty(Va, '__esModule', { value: !0 });
		Va.JSONTypeAssembler = void 0;
		var sE = ut(),
			lt = er(),
			Wn = Se(),
			mg = class extends sE.Visitor {
				visit(e) {
					return e == null ? void 0 : super.visit(e);
				}
				visitNull({ typeId: e }) {
					return { name: lt.Type[e].toLowerCase() };
				}
				visitInt({ typeId: e, bitWidth: t, isSigned: r }) {
					return { name: lt.Type[e].toLowerCase(), bitWidth: t, isSigned: r };
				}
				visitFloat({ typeId: e, precision: t }) {
					return { name: lt.Type[e].toLowerCase(), precision: Wn.Precision[t] };
				}
				visitBinary({ typeId: e }) {
					return { name: lt.Type[e].toLowerCase() };
				}
				visitBool({ typeId: e }) {
					return { name: lt.Type[e].toLowerCase() };
				}
				visitUtf8({ typeId: e }) {
					return { name: lt.Type[e].toLowerCase() };
				}
				visitDecimal({ typeId: e, scale: t, precision: r }) {
					return { name: lt.Type[e].toLowerCase(), scale: t, precision: r };
				}
				visitDate({ typeId: e, unit: t }) {
					return { name: lt.Type[e].toLowerCase(), unit: Wn.DateUnit[t] };
				}
				visitTime({ typeId: e, unit: t, bitWidth: r }) {
					return { name: lt.Type[e].toLowerCase(), unit: Wn.TimeUnit[t], bitWidth: r };
				}
				visitTimestamp({ typeId: e, timezone: t, unit: r }) {
					return { name: lt.Type[e].toLowerCase(), unit: Wn.TimeUnit[r], timezone: t };
				}
				visitInterval({ typeId: e, unit: t }) {
					return { name: lt.Type[e].toLowerCase(), unit: Wn.IntervalUnit[t] };
				}
				visitList({ typeId: e }) {
					return { name: lt.Type[e].toLowerCase() };
				}
				visitStruct({ typeId: e }) {
					return { name: lt.Type[e].toLowerCase() };
				}
				visitUnion({ typeId: e, mode: t, typeIds: r }) {
					return { name: lt.Type[e].toLowerCase(), mode: Wn.UnionMode[t], typeIds: [...r] };
				}
				visitDictionary(e) {
					return this.visit(e.dictionary);
				}
				visitFixedSizeBinary({ typeId: e, byteWidth: t }) {
					return { name: lt.Type[e].toLowerCase(), byteWidth: t };
				}
				visitFixedSizeList({ typeId: e, listSize: t }) {
					return { name: lt.Type[e].toLowerCase(), listSize: t };
				}
				visitMap({ typeId: e, keysSorted: t }) {
					return { name: lt.Type[e].toLowerCase(), keysSorted: t };
				}
			};
		Va.JSONTypeAssembler = mg;
	});
	var jg = M((La) => {
		'use strict';
		Object.defineProperty(La, '__esModule', { value: !0 });
		La.JSONVectorAssembler = void 0;
		var oE = As(),
			Ls = Nn(),
			aE = We(),
			uE = ut(),
			cE = Se(),
			lE = Li(),
			Rl = Se(),
			Pa = li(),
			dE = $r(),
			gg = ve(),
			Na = class extends uE.Visitor {
				static assemble(...e) {
					return new Na().visitMany(dE.selectColumnChildrenArgs(lE.RecordBatch, e));
				}
				visit(e) {
					let { data: t, name: r, length: n } = e,
						{ offset: o, nullCount: l, nullBitmap: _ } = t,
						v = gg.DataType.isDictionary(e.type) ? e.type.indices : e.type,
						B = Object.assign([], t.buffers, { [cE.BufferType.VALIDITY]: void 0 });
					return Object.assign(
						{
							name: r,
							count: n,
							VALIDITY: gg.DataType.isNull(v)
								? void 0
								: l <= 0
								? Array.from({ length: n }, () => 1)
								: [...new Pa.BitIterator(_, o, n, null, Pa.getBit)]
						},
						super.visit(aE.Vector.new(t.clone(v, o, n, 0, B)))
					);
				}
				visitNull() {
					return {};
				}
				visitBool({ values: e, offset: t, length: r }) {
					return { DATA: [...new Pa.BitIterator(e, t, r, null, Pa.getBool)] };
				}
				visitInt(e) {
					return { DATA: e.type.bitWidth < 64 ? [...e.values] : [...xs(e.values, 2)] };
				}
				visitFloat(e) {
					return { DATA: [...e.values] };
				}
				visitUtf8(e) {
					return { DATA: [...e], OFFSET: [...e.valueOffsets] };
				}
				visitBinary(e) {
					return { DATA: [...vg(e)], OFFSET: [...e.valueOffsets] };
				}
				visitFixedSizeBinary(e) {
					return { DATA: [...vg(e)] };
				}
				visitDate(e) {
					return { DATA: e.type.unit === Rl.DateUnit.DAY ? [...e.values] : [...xs(e.values, 2)] };
				}
				visitTimestamp(e) {
					return { DATA: [...xs(e.values, 2)] };
				}
				visitTime(e) {
					return {
						DATA: e.type.unit < Rl.TimeUnit.MICROSECOND ? [...e.values] : [...xs(e.values, 2)]
					};
				}
				visitDecimal(e) {
					return { DATA: [...xs(e.values, 4)] };
				}
				visitList(e) {
					return {
						OFFSET: [...e.valueOffsets],
						children: e.type.children.map((t, r) => this.visit(new Ls.Column(t, [e.getChildAt(r)])))
					};
				}
				visitStruct(e) {
					return {
						children: e.type.children.map((t, r) => this.visit(new Ls.Column(t, [e.getChildAt(r)])))
					};
				}
				visitUnion(e) {
					return {
						TYPE: [...e.typeIds],
						OFFSET: e.type.mode === Rl.UnionMode.Dense ? [...e.valueOffsets] : void 0,
						children: e.type.children.map((t, r) => this.visit(new Ls.Column(t, [e.getChildAt(r)])))
					};
				}
				visitInterval(e) {
					return { DATA: [...e.values] };
				}
				visitFixedSizeList(e) {
					return {
						children: e.type.children.map((t, r) => this.visit(new Ls.Column(t, [e.getChildAt(r)])))
					};
				}
				visitMap(e) {
					return {
						OFFSET: [...e.valueOffsets],
						children: e.type.children.map((t, r) => this.visit(new Ls.Column(t, [e.getChildAt(r)])))
					};
				}
			};
		La.JSONVectorAssembler = Na;
		function* vg(i) {
			for (let e of i)
				yield e
					.reduce((t, r) => `${t}${('0' + (r & 255).toString(16)).slice(-2)}`, '')
					.toUpperCase();
		}
		function* xs(i, e) {
			for (let t = -1, r = i.length / e; ++t < r; )
				yield `${oE.BN.new(i.subarray((t + 0) * e, (t + 1) * e), !1)}`;
		}
	});
	var Ha = M((vi) => {
		'use strict';
		Object.defineProperty(vi, '__esModule', { value: !0 });
		vi.RecordBatchJSONWriter =
			vi.RecordBatchFileWriter =
			vi.RecordBatchStreamWriter =
			vi.RecordBatchWriter =
				void 0;
		var wg = dt(),
			Ul = Ws(),
			fE = Ra(),
			hE = Nn(),
			pE = ve(),
			yE = rt(),
			xa = Zr(),
			kl = Zr(),
			zn = ol(),
			Vl = Se(),
			Tg = Fl(),
			Pl = hr(),
			Ig = _g(),
			_E = bg(),
			Bg = jg(),
			mE = Xe(),
			Nl = Li(),
			bE = fn(),
			gi = ft(),
			qs = class extends bE.ReadableInterop {
				constructor(e) {
					super();
					(this._position = 0),
						(this._started = !1),
						(this._sink = new Pl.AsyncByteQueue()),
						(this._schema = null),
						(this._dictionaryBlocks = []),
						(this._recordBatchBlocks = []),
						(this._dictionaryDeltaOffsets = new Map()),
						gi.isObject(e) || (e = { autoDestroy: !0, writeLegacyIpcFormat: !1 }),
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
					return gi.isPromise(e)
						? e.then((t) => this.writeAll(t))
						: gi.isAsyncIterable(e)
						? xl(this, e)
						: Ll(this, e);
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
						e === this._sink || e instanceof Pl.AsyncByteQueue
							? (this._sink = e)
							: ((this._sink = new Pl.AsyncByteQueue()),
							  e && gi.isWritableDOMStream(e)
									? this.toDOMStream({ type: 'bytes' }).pipeTo(e)
									: e &&
									  gi.isWritableNodeStream(e) &&
									  this.toNodeStream({ objectMode: !1 }).pipe(e)),
						this._started && this._schema && this._writeFooter(this._schema),
						(this._started = !1),
						(this._dictionaryBlocks = []),
						(this._recordBatchBlocks = []),
						(this._dictionaryDeltaOffsets = new Map()),
						(!t || !Tg.compareSchemas(t, this._schema)) &&
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
						if (e instanceof Ul.Table && !(t = e.schema)) return this.finish() && void 0;
						if (e instanceof Nl.RecordBatch && !(t = e.schema)) return this.finish() && void 0;
					} else throw new Error('RecordBatchWriter is closed');
					if (t && !Tg.compareSchemas(t, this._schema)) {
						if (this._started && this._autoDestroy) return this.close();
						this.reset(this._sink, t);
					}
					e instanceof Nl.RecordBatch
						? e instanceof Nl._InternalEmptyPlaceholderRecordBatch || this._writeRecordBatch(e)
						: e instanceof Ul.Table
						? this.writeAll(e.chunks)
						: gi.isIterable(e) && this.writeAll(e);
				}
				_writeMessage(e, t = 8) {
					let r = t - 1,
						n = xa.Message.encode(e),
						o = n.byteLength,
						l = this._writeLegacyIpcFormat ? 4 : 8,
						_ = (o + l + r) & ~r,
						v = _ - o - l;
					return (
						e.headerType === Vl.MessageHeader.RecordBatch
							? this._recordBatchBlocks.push(new zn.FileBlock(_, e.bodyLength, this._position))
							: e.headerType === Vl.MessageHeader.DictionaryBatch &&
							  this._dictionaryBlocks.push(new zn.FileBlock(_, e.bodyLength, this._position)),
						this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)),
						this._write(Int32Array.of(_ - l)),
						o > 0 && this._write(n),
						this._writePadding(v)
					);
				}
				_write(e) {
					if (this._started) {
						let t = mE.toUint8Array(e);
						t && t.byteLength > 0 && (this._sink.write(t), (this._position += t.byteLength));
					}
					return this;
				}
				_writeSchema(e) {
					return this._writeMessage(xa.Message.from(e));
				}
				_writeFooter(e) {
					return this._writeLegacyIpcFormat
						? this._write(Int32Array.of(0))
						: this._write(Int32Array.of(-1, 0));
				}
				_writeMagic() {
					return this._write(fE.MAGIC);
				}
				_writePadding(e) {
					return e > 0 ? this._write(new Uint8Array(e)) : this;
				}
				_writeRecordBatch(e) {
					let {
							byteLength: t,
							nodes: r,
							bufferRegions: n,
							buffers: o
						} = Ig.VectorAssembler.assemble(e),
						l = new kl.RecordBatch(e.length, r, n),
						_ = xa.Message.from(l, t);
					return this._writeDictionaries(e)._writeMessage(_)._writeBodyBuffers(o);
				}
				_writeDictionaryBatch(e, t, r = !1) {
					this._dictionaryDeltaOffsets.set(
						t,
						e.length + (this._dictionaryDeltaOffsets.get(t) || 0)
					);
					let {
							byteLength: n,
							nodes: o,
							bufferRegions: l,
							buffers: _
						} = Ig.VectorAssembler.assemble(e),
						v = new kl.RecordBatch(e.length, o, l),
						B = new kl.DictionaryBatch(v, t, r),
						D = xa.Message.from(B, n);
					return this._writeMessage(D)._writeBodyBuffers(_);
				}
				_writeBodyBuffers(e) {
					let t, r, n;
					for (let o = -1, l = e.length; ++o < l; )
						(t = e[o]) &&
							(r = t.byteLength) > 0 &&
							(this._write(t), (n = ((r + 7) & ~7) - r) > 0 && this._writePadding(n));
					return this;
				}
				_writeDictionaries(e) {
					for (let [t, r] of e.dictionaries) {
						let n = this._dictionaryDeltaOffsets.get(t) || 0;
						if (n === 0 || (r = r.slice(n)).length > 0) {
							let o = 'chunks' in r ? r.chunks : [r];
							for (let l of o) this._writeDictionaryBatch(l, t, n > 0), (n += l.length);
						}
					}
					return this;
				}
			};
		vi.RecordBatchWriter = qs;
		var qa = class extends qs {
			static writeAll(e, t) {
				let r = new qa(t);
				return gi.isPromise(e)
					? e.then((n) => r.writeAll(n))
					: gi.isAsyncIterable(e)
					? xl(r, e)
					: Ll(r, e);
			}
		};
		vi.RecordBatchStreamWriter = qa;
		var Wa = class extends qs {
			static writeAll(e) {
				let t = new Wa();
				return gi.isPromise(e)
					? e.then((r) => t.writeAll(r))
					: gi.isAsyncIterable(e)
					? xl(t, e)
					: Ll(t, e);
			}
			constructor() {
				super();
				this._autoDestroy = !0;
			}
			_writeSchema(e) {
				return this._writeMagic()._writePadding(2);
			}
			_writeFooter(e) {
				let t = zn.Footer.encode(
					new zn.Footer(e, Vl.MetadataVersion.V4, this._recordBatchBlocks, this._dictionaryBlocks)
				);
				return super._writeFooter(e)._write(t)._write(Int32Array.of(t.byteLength))._writeMagic();
			}
		};
		vi.RecordBatchFileWriter = Wa;
		var za = class extends qs {
			constructor() {
				super();
				(this._autoDestroy = !0), (this._recordBatches = []), (this._dictionaries = []);
			}
			static writeAll(e) {
				return new za().writeAll(e);
			}
			_writeMessage() {
				return this;
			}
			_writeFooter(e) {
				return this;
			}
			_writeSchema(e) {
				return this._write(`{
  "schema": ${JSON.stringify({ fields: e.fields.map(Sg) }, null, 2)}`);
			}
			_writeDictionaries(e) {
				return e.dictionaries.size > 0 && this._dictionaries.push(e), this;
			}
			_writeDictionaryBatch(e, t, r = !1) {
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
					this._write(`${gE(e, t, r)}`),
					this._dictionaryBlocks.push(new zn.FileBlock(0, 0, 0)),
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
							this._write(`${vE(this._recordBatches[e])}`),
							this._recordBatchBlocks.push(new zn.FileBlock(0, 0, 0));
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
		vi.RecordBatchJSONWriter = za;
		function Ll(i, e) {
			let t = e;
			e instanceof Ul.Table && ((t = e.chunks), i.reset(void 0, e.schema));
			for (let r of t) i.write(r);
			return i.finish();
		}
		function xl(i, e) {
			var t, r, n, o;
			return wg.__awaiter(this, void 0, void 0, function* () {
				try {
					for (t = wg.__asyncValues(e); (r = yield t.next()), !r.done; ) {
						let l = r.value;
						i.write(l);
					}
				} catch (l) {
					n = { error: l };
				} finally {
					try {
						r && !r.done && (o = t.return) && (yield o.call(t));
					} finally {
						if (n) throw n.error;
					}
				}
				return i.finish();
			});
		}
		function Sg({ name: i, type: e, nullable: t }) {
			let r = new _E.JSONTypeAssembler();
			return {
				name: i,
				nullable: t,
				type: r.visit(e),
				children: (e.children || []).map(Sg),
				dictionary: pE.DataType.isDictionary(e)
					? { id: e.id, isOrdered: e.isOrdered, indexType: r.visit(e.indices) }
					: void 0
			};
		}
		function gE(i, e, t = !1) {
			let r = new yE.Field(`${e}`, i.type, i.nullCount > 0),
				n = Bg.JSONVectorAssembler.assemble(new hE.Column(r, [i]));
			return JSON.stringify({ id: e, isDelta: t, data: { count: i.length, columns: n } }, null, 2);
		}
		function vE(i) {
			return JSON.stringify(
				{ count: i.length, columns: Bg.JSONVectorAssembler.assemble(i) },
				null,
				2
			);
		}
	});
	var zl = M((wr) => {
		'use strict';
		Object.defineProperty(wr, '__esModule', { value: !0 });
		wr.distributeVectorsIntoRecordBatches =
			wr.distributeColumnsIntoRecordBatches =
			wr.ensureSameLengthData =
				void 0;
		var Ag = Xt(),
			ql = rt(),
			jE = mr(),
			wE = Li(),
			Wl = new Uint8Array(0),
			Dg = (i) => [Wl, Wl, new Uint8Array(i), Wl];
		function TE(i, e, t = e.reduce((r, n) => Math.max(r, n.length), 0)) {
			let r,
				n,
				o = -1,
				l = e.length,
				_ = [...i.fields],
				v = [],
				B = ((t + 63) & ~63) >> 3;
			for (; ++o < l; )
				(r = e[o]) && r.length === t
					? (v[o] = r)
					: ((n = _[o]).nullable || (_[o] = _[o].clone({ nullable: !0 })),
					  (v[o] = r
							? r._changeLengthAndBackfillNullBitmap(t)
							: Ag.Data.new(n.type, 0, t, t, Dg(B))));
			return [new ql.Schema(_), t, v];
		}
		wr.ensureSameLengthData = TE;
		function IE(i) {
			return Fg(new ql.Schema(i.map(({ field: e }) => e)), i);
		}
		wr.distributeColumnsIntoRecordBatches = IE;
		function Fg(i, e) {
			return BE(
				i,
				e.map((t) => (t instanceof jE.Chunked ? t.chunks.map((r) => r.data) : [t.data]))
			);
		}
		wr.distributeVectorsIntoRecordBatches = Fg;
		function BE(i, e) {
			let t = [...i.fields],
				r = [],
				n = { numBatches: e.reduce((N, W) => Math.max(N, W.length), 0) },
				o = 0,
				l = 0,
				_ = -1,
				v = e.length,
				B,
				D = [];
			for (; n.numBatches-- > 0; ) {
				for (l = Number.POSITIVE_INFINITY, _ = -1; ++_ < v; )
					(D[_] = B = e[_].shift()), (l = Math.min(l, B ? B.length : l));
				isFinite(l) && ((D = SE(t, l, D, e, n)), l > 0 && (r[o++] = [l, D.slice()]));
			}
			return [(i = new ql.Schema(t, i.metadata)), r.map((N) => new wE.RecordBatch(i, ...N))];
		}
		function SE(i, e, t, r, n) {
			let o,
				l,
				_ = 0,
				v = -1,
				B = r.length,
				D = ((e + 63) & ~63) >> 3;
			for (; ++v < B; )
				(o = t[v]) && (_ = o.length) >= e
					? _ === e
						? (t[v] = o)
						: ((t[v] = o.slice(0, e)),
						  (o = o.slice(e, _ - e)),
						  (n.numBatches = Math.max(n.numBatches, r[v].unshift(o))))
					: ((l = i[v]).nullable || (i[v] = l.clone({ nullable: !0 })),
					  (t[v] = o
							? o._changeLengthAndBackfillNullBitmap(e)
							: Ag.Data.new(l.type, 0, e, e, Dg(D))));
			return t;
		}
	});
	var He = M((Ya) => {
		'use strict';
		Object.defineProperty(Ya, '__esModule', { value: !0 });
		Ya.BaseVector = void 0;
		var AE = Se(),
			DE = mr(),
			FE = Us(),
			Hl = We(),
			Yl = class extends Hl.AbstractVector {
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
					return `${AE.Type[this.typeId]}Vector`;
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
					return Hl.Vector.new(e, t);
				}
				concat(...e) {
					return DE.Chunked.concat(this, ...e);
				}
				slice(e, t) {
					return FE.clampRange(this, e, t, this._sliceInternal);
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
								(this._children[e] = Hl.Vector.new(this.data.childData[e]));
				}
				toJSON() {
					return [...this];
				}
				_sliceInternal(e, t, r) {
					return e.clone(e.data.slice(t, r - t), null);
				}
				_bindDataAccessors(e) {}
			};
		Ya.BaseVector = Yl;
		Yl.prototype[Symbol.isConcatSpreadable] = !0;
	});
	var Gl = M((Ga) => {
		'use strict';
		Object.defineProperty(Ga, '__esModule', { value: !0 });
		Ga.BinaryVector = void 0;
		var OE = We(),
			EE = He(),
			ME = ve(),
			Og = class extends EE.BaseVector {
				asUtf8() {
					return OE.Vector.new(this.data.clone(new ME.Utf8()));
				}
			};
		Ga.BinaryVector = Og;
	});
	var $l = M(($a) => {
		'use strict';
		Object.defineProperty($a, '__esModule', { value: !0 });
		$a.BoolVector = void 0;
		var CE = ve(),
			RE = He(),
			UE = ji(),
			Eg = class extends RE.BaseVector {
				static from(e) {
					return UE.vectorFromValuesWithType(() => new CE.Bool(), e);
				}
			};
		$a.BoolVector = Eg;
	});
	var Kl = M((Tr) => {
		'use strict';
		Object.defineProperty(Tr, '__esModule', { value: !0 });
		Tr.DateMillisecondVector = Tr.DateDayVector = Tr.DateVector = void 0;
		var kE = Se(),
			VE = He(),
			Mg = ji(),
			Jl = ve(),
			Ja = class extends VE.BaseVector {
				static from(...e) {
					return e.length === 2
						? Mg.vectorFromValuesWithType(
								() => (e[1] === kE.DateUnit.DAY ? new Jl.DateDay() : new Jl.DateMillisecond()),
								e[0]
						  )
						: Mg.vectorFromValuesWithType(() => new Jl.DateMillisecond(), e[0]);
				}
			};
		Tr.DateVector = Ja;
		var Cg = class extends Ja {};
		Tr.DateDayVector = Cg;
		var Rg = class extends Ja {};
		Tr.DateMillisecondVector = Rg;
	});
	var Zl = M((Ka) => {
		'use strict';
		Object.defineProperty(Ka, '__esModule', { value: !0 });
		Ka.DecimalVector = void 0;
		var PE = He(),
			Ug = class extends PE.BaseVector {};
		Ka.DecimalVector = Ug;
	});
	var Xa = M((Za) => {
		'use strict';
		Object.defineProperty(Za, '__esModule', { value: !0 });
		Za.DictionaryVector = void 0;
		var NE = Xt(),
			kg = We(),
			LE = He(),
			xE = ji(),
			qE = ve(),
			Xl = class extends LE.BaseVector {
				constructor(e) {
					super(e);
					this.indices = kg.Vector.new(e.clone(this.type.indices));
				}
				static from(...e) {
					if (e.length === 3) {
						let [t, r, n] = e,
							o = new qE.Dictionary(t.type, r, null, null);
						return kg.Vector.new(NE.Data.Dictionary(o, 0, n.length, 0, null, n, t));
					}
					return xE.vectorFromValuesWithType(() => e[0].type, e[0]);
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
		Za.DictionaryVector = Xl;
		Xl.prototype.indices = null;
	});
	var Ql = M((Qa) => {
		'use strict';
		Object.defineProperty(Qa, '__esModule', { value: !0 });
		Qa.FixedSizeBinaryVector = void 0;
		var WE = He(),
			Vg = class extends WE.BaseVector {};
		Qa.FixedSizeBinaryVector = Vg;
	});
	var ed = M((eu) => {
		'use strict';
		Object.defineProperty(eu, '__esModule', { value: !0 });
		eu.FixedSizeListVector = void 0;
		var zE = He(),
			Pg = class extends zE.BaseVector {};
		eu.FixedSizeListVector = Pg;
	});
	var nd = M((wi) => {
		'use strict';
		Object.defineProperty(wi, '__esModule', { value: !0 });
		wi.Float64Vector = wi.Float32Vector = wi.Float16Vector = wi.FloatVector = void 0;
		var HE = Xt(),
			YE = We(),
			GE = He(),
			$E = ji(),
			tn = ve(),
			zs = class extends GE.BaseVector {
				static from(e) {
					let t = ZE(this);
					if (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) {
						let r = KE(e.constructor) || t;
						if ((t === null && (t = r), t && t === r)) {
							let n = new t(),
								o = e.byteLength / n.ArrayType.BYTES_PER_ELEMENT;
							if (!JE(t, e.constructor)) return YE.Vector.new(HE.Data.Float(n, 0, o, 0, null, e));
						}
					}
					if (t) return $E.vectorFromValuesWithType(() => new t(), e);
					throw e instanceof DataView || e instanceof ArrayBuffer
						? new TypeError(`Cannot infer float type from instance of ${e.constructor.name}`)
						: new TypeError('Unrecognized FloatVector input');
				}
			};
		wi.FloatVector = zs;
		var td = class extends zs {
			toFloat32Array() {
				return new Float32Array(this);
			}
			toFloat64Array() {
				return new Float64Array(this);
			}
		};
		wi.Float16Vector = td;
		var id = class extends zs {};
		wi.Float32Vector = id;
		var rd = class extends zs {};
		wi.Float64Vector = rd;
		var JE = (i, e) => i === tn.Float16 && e !== Uint16Array,
			KE = (i) => {
				switch (i) {
					case Uint16Array:
						return tn.Float16;
					case Float32Array:
						return tn.Float32;
					case Float64Array:
						return tn.Float64;
					default:
						return null;
				}
			},
			ZE = (i) => {
				switch (i) {
					case td:
						return tn.Float16;
					case id:
						return tn.Float32;
					case rd:
						return tn.Float64;
					default:
						return null;
				}
			};
	});
	var sd = M((Ir) => {
		'use strict';
		Object.defineProperty(Ir, '__esModule', { value: !0 });
		Ir.IntervalYearMonthVector = Ir.IntervalDayTimeVector = Ir.IntervalVector = void 0;
		var XE = He(),
			tu = class extends XE.BaseVector {};
		Ir.IntervalVector = tu;
		var Ng = class extends tu {};
		Ir.IntervalDayTimeVector = Ng;
		var Lg = class extends tu {};
		Ir.IntervalYearMonthVector = Lg;
	});
	var iu = M((Ke) => {
		'use strict';
		Object.defineProperty(Ke, '__esModule', { value: !0 });
		Ke.Uint64Vector =
			Ke.Uint32Vector =
			Ke.Uint16Vector =
			Ke.Uint8Vector =
			Ke.Int64Vector =
			Ke.Int32Vector =
			Ke.Int16Vector =
			Ke.Int8Vector =
			Ke.IntVector =
				void 0;
		var QE = Xt(),
			eM = We(),
			tM = He(),
			iM = ji(),
			xg = ft(),
			qg = Xe(),
			Le = ve(),
			Ti = class extends tM.BaseVector {
				static from(...e) {
					let [t, r = !1] = e,
						n = sM(this, r);
					if (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) {
						let o = nM(t.constructor, r) || n;
						if ((n === null && (n = o), n && n === o)) {
							let l = new n(),
								_ = t.byteLength / l.ArrayType.BYTES_PER_ELEMENT;
							return (
								rM(n, t.constructor) && (_ *= 0.5), eM.Vector.new(QE.Data.Int(l, 0, _, 0, null, t))
							);
						}
					}
					if (n) return iM.vectorFromValuesWithType(() => new n(), t);
					throw t instanceof DataView || t instanceof ArrayBuffer
						? new TypeError(`Cannot infer integer type from instance of ${t.constructor.name}`)
						: new TypeError('Unrecognized IntVector input');
				}
			};
		Ke.IntVector = Ti;
		var od = class extends Ti {};
		Ke.Int8Vector = od;
		var ad = class extends Ti {};
		Ke.Int16Vector = ad;
		var ud = class extends Ti {};
		Ke.Int32Vector = ud;
		var cd = class extends Ti {
			toBigInt64Array() {
				return qg.toBigInt64Array(this.values);
			}
			get values64() {
				return this._values64 || (this._values64 = this.toBigInt64Array());
			}
		};
		Ke.Int64Vector = cd;
		var ld = class extends Ti {};
		Ke.Uint8Vector = ld;
		var dd = class extends Ti {};
		Ke.Uint16Vector = dd;
		var fd = class extends Ti {};
		Ke.Uint32Vector = fd;
		var hd = class extends Ti {
			toBigUint64Array() {
				return qg.toBigUint64Array(this.values);
			}
			get values64() {
				return this._values64 || (this._values64 = this.toBigUint64Array());
			}
		};
		Ke.Uint64Vector = hd;
		var rM = (i, e) =>
				(i === Le.Int64 || i === Le.Uint64) && (e === Int32Array || e === Uint32Array),
			nM = (i, e) => {
				switch (i) {
					case Int8Array:
						return Le.Int8;
					case Int16Array:
						return Le.Int16;
					case Int32Array:
						return e ? Le.Int64 : Le.Int32;
					case xg.BigInt64Array:
						return Le.Int64;
					case Uint8Array:
						return Le.Uint8;
					case Uint16Array:
						return Le.Uint16;
					case Uint32Array:
						return e ? Le.Uint64 : Le.Uint32;
					case xg.BigUint64Array:
						return Le.Uint64;
					default:
						return null;
				}
			},
			sM = (i, e) => {
				switch (i) {
					case od:
						return Le.Int8;
					case ad:
						return Le.Int16;
					case ud:
						return e ? Le.Int64 : Le.Int32;
					case cd:
						return Le.Int64;
					case ld:
						return Le.Uint8;
					case dd:
						return Le.Uint16;
					case fd:
						return e ? Le.Uint64 : Le.Uint32;
					case hd:
						return Le.Uint64;
					default:
						return null;
				}
			};
	});
	var pd = M((ru) => {
		'use strict';
		Object.defineProperty(ru, '__esModule', { value: !0 });
		ru.ListVector = void 0;
		var oM = He(),
			Wg = class extends oM.BaseVector {};
		ru.ListVector = Wg;
	});
	var yd = M((nu) => {
		'use strict';
		Object.defineProperty(nu, '__esModule', { value: !0 });
		nu.MapVector = void 0;
		var aM = Cs(),
			uM = We(),
			cM = He(),
			lM = ve(),
			zg = class extends cM.BaseVector {
				asList() {
					let e = this.type.children[0];
					return uM.Vector.new(this.data.clone(new lM.List(e)));
				}
				bind(e) {
					let t = this.getChildAt(0),
						{ [e]: r, [e + 1]: n } = this.valueOffsets;
					return new aM.MapRow(t.slice(r, n));
				}
			};
		nu.MapVector = zg;
	});
	var _d = M((su) => {
		'use strict';
		Object.defineProperty(su, '__esModule', { value: !0 });
		su.NullVector = void 0;
		var dM = He(),
			Hg = class extends dM.BaseVector {};
		su.NullVector = Hg;
	});
	var md = M((ou) => {
		'use strict';
		Object.defineProperty(ou, '__esModule', { value: !0 });
		ou.StructVector = void 0;
		var fM = Cs(),
			hM = He(),
			pM = Symbol.for('rowIndex'),
			Yg = class extends hM.BaseVector {
				bind(e) {
					let t = this._row || (this._row = new fM.StructRow(this)),
						r = Object.create(t);
					return (r[pM] = e), r;
				}
			};
		ou.StructVector = Yg;
	});
	var bd = M((qt) => {
		'use strict';
		Object.defineProperty(qt, '__esModule', { value: !0 });
		qt.TimestampNanosecondVector =
			qt.TimestampMicrosecondVector =
			qt.TimestampMillisecondVector =
			qt.TimestampSecondVector =
			qt.TimestampVector =
				void 0;
		var yM = He(),
			Hn = class extends yM.BaseVector {};
		qt.TimestampVector = Hn;
		var Gg = class extends Hn {};
		qt.TimestampSecondVector = Gg;
		var $g = class extends Hn {};
		qt.TimestampMillisecondVector = $g;
		var Jg = class extends Hn {};
		qt.TimestampMicrosecondVector = Jg;
		var Kg = class extends Hn {};
		qt.TimestampNanosecondVector = Kg;
	});
	var gd = M((Wt) => {
		'use strict';
		Object.defineProperty(Wt, '__esModule', { value: !0 });
		Wt.TimeNanosecondVector =
			Wt.TimeMicrosecondVector =
			Wt.TimeMillisecondVector =
			Wt.TimeSecondVector =
			Wt.TimeVector =
				void 0;
		var _M = He(),
			Yn = class extends _M.BaseVector {};
		Wt.TimeVector = Yn;
		var Zg = class extends Yn {};
		Wt.TimeSecondVector = Zg;
		var Xg = class extends Yn {};
		Wt.TimeMillisecondVector = Xg;
		var Qg = class extends Yn {};
		Wt.TimeMicrosecondVector = Qg;
		var ev = class extends Yn {};
		Wt.TimeNanosecondVector = ev;
	});
	var vd = M((Br) => {
		'use strict';
		Object.defineProperty(Br, '__esModule', { value: !0 });
		Br.SparseUnionVector = Br.DenseUnionVector = Br.UnionVector = void 0;
		var mM = He(),
			au = class extends mM.BaseVector {
				get typeIdToChildIndex() {
					return this.data.type.typeIdToChildIndex;
				}
			};
		Br.UnionVector = au;
		var tv = class extends au {
			get valueOffsets() {
				return this.data.valueOffsets;
			}
		};
		Br.DenseUnionVector = tv;
		var iv = class extends au {};
		Br.SparseUnionVector = iv;
	});
	var jd = M((uu) => {
		'use strict';
		Object.defineProperty(uu, '__esModule', { value: !0 });
		uu.Utf8Vector = void 0;
		var bM = We(),
			gM = He(),
			rv = ve(),
			vM = ji(),
			nv = class extends gM.BaseVector {
				static from(e) {
					return vM.vectorFromValuesWithType(() => new rv.Utf8(), e);
				}
				asBinary() {
					return bM.Vector.new(this.data.clone(new rv.Binary()));
				}
			};
		uu.Utf8Vector = nv;
	});
	var sv = M((Sr) => {
		'use strict';
		Object.defineProperty(Sr, '__esModule', { value: !0 });
		Sr.partial2 = Sr.partial1 = Sr.partial0 = void 0;
		function jM(i) {
			return function () {
				return i(this);
			};
		}
		Sr.partial0 = jM;
		function wM(i) {
			return function (e) {
				return i(this, e);
			};
		}
		Sr.partial1 = wM;
		function TM(i) {
			return function (e, t) {
				return i(this, e, t);
			};
		}
		Sr.partial2 = TM;
	});
	var Id = M((Gn) => {
		'use strict';
		Object.defineProperty(Gn, '__esModule', { value: !0 });
		Gn.instance = Gn.GetVisitor = void 0;
		var cu = As(),
			IM = ut(),
			BM = Rr(),
			SM = Ts(),
			zt = Se(),
			Q = class extends IM.Visitor {};
		Gn.GetVisitor = Q;
		var AM = (i, e) => 864e5 * i[e],
			wd = (i, e) => 4294967296 * i[e + 1] + (i[e] >>> 0),
			DM = (i, e) => 4294967296 * (i[e + 1] / 1e3) + (i[e] >>> 0) / 1e3,
			FM = (i, e) => 4294967296 * (i[e + 1] / 1e6) + (i[e] >>> 0) / 1e6,
			ov = (i) => new Date(i),
			OM = (i, e) => ov(AM(i, e)),
			EM = (i, e) => ov(wd(i, e)),
			MM = (i, e) => null,
			av = (i, e, t) => {
				let { [t]: r, [t + 1]: n } = e;
				return r != null && n != null ? i.subarray(r, n) : null;
			},
			CM = ({ offset: i, values: e }, t) => {
				let r = i + t;
				return (e[r >> 3] & (1 << r % 8)) != 0;
			},
			uv = ({ values: i }, e) => OM(i, e),
			cv = ({ values: i }, e) => EM(i, e * 2),
			Ii = ({ stride: i, values: e }, t) => e[i * t],
			lv = ({ stride: i, values: e }, t) => SM.uint16ToFloat64(e[i * t]),
			Td = ({ stride: i, values: e, type: t }, r) =>
				cu.BN.new(e.subarray(i * r, i * (r + 1)), t.isSigned),
			RM = ({ stride: i, values: e }, t) => e.subarray(i * t, i * (t + 1)),
			UM = ({ values: i, valueOffsets: e }, t) => av(i, e, t),
			kM = ({ values: i, valueOffsets: e }, t) => {
				let r = av(i, e, t);
				return r !== null ? BM.decodeUtf8(r) : null;
			},
			VM = (i, e) => (i.type.bitWidth < 64 ? Ii(i, e) : Td(i, e)),
			PM = (i, e) => (i.type.precision !== zt.Precision.HALF ? Ii(i, e) : lv(i, e)),
			NM = (i, e) => (i.type.unit === zt.DateUnit.DAY ? uv(i, e) : cv(i, e)),
			dv = ({ values: i }, e) => 1e3 * wd(i, e * 2),
			fv = ({ values: i }, e) => wd(i, e * 2),
			hv = ({ values: i }, e) => DM(i, e * 2),
			pv = ({ values: i }, e) => FM(i, e * 2),
			LM = (i, e) => {
				switch (i.type.unit) {
					case zt.TimeUnit.SECOND:
						return dv(i, e);
					case zt.TimeUnit.MILLISECOND:
						return fv(i, e);
					case zt.TimeUnit.MICROSECOND:
						return hv(i, e);
					case zt.TimeUnit.NANOSECOND:
						return pv(i, e);
				}
			},
			yv = ({ values: i, stride: e }, t) => i[e * t],
			_v = ({ values: i, stride: e }, t) => i[e * t],
			mv = ({ values: i }, e) => cu.BN.signed(i.subarray(2 * e, 2 * (e + 1))),
			bv = ({ values: i }, e) => cu.BN.signed(i.subarray(2 * e, 2 * (e + 1))),
			xM = (i, e) => {
				switch (i.type.unit) {
					case zt.TimeUnit.SECOND:
						return yv(i, e);
					case zt.TimeUnit.MILLISECOND:
						return _v(i, e);
					case zt.TimeUnit.MICROSECOND:
						return mv(i, e);
					case zt.TimeUnit.NANOSECOND:
						return bv(i, e);
				}
			},
			qM = ({ values: i }, e) => cu.BN.decimal(i.subarray(4 * e, 4 * (e + 1))),
			WM = (i, e) => {
				let t = i.getChildAt(0),
					{ valueOffsets: r, stride: n } = i;
				return t.slice(r[e * n], r[e * n + 1]);
			},
			zM = (i, e) => i.bind(e),
			HM = (i, e) => i.bind(e),
			YM = (i, e) => (i.type.mode === zt.UnionMode.Dense ? gv(i, e) : vv(i, e)),
			gv = (i, e) => {
				let t = i.typeIdToChildIndex[i.typeIds[e]],
					r = i.getChildAt(t);
				return r ? r.get(i.valueOffsets[e]) : null;
			},
			vv = (i, e) => {
				let t = i.typeIdToChildIndex[i.typeIds[e]],
					r = i.getChildAt(t);
				return r ? r.get(e) : null;
			},
			GM = (i, e) => i.getValue(i.getKey(e)),
			$M = (i, e) => (i.type.unit === zt.IntervalUnit.DAY_TIME ? jv(i, e) : wv(i, e)),
			jv = ({ values: i }, e) => i.subarray(2 * e, 2 * (e + 1)),
			wv = ({ values: i }, e) => {
				let t = i[e],
					r = new Int32Array(2);
				return (r[0] = (t / 12) | 0), (r[1] = t % 12 | 0), r;
			},
			JM = (i, e) => {
				let t = i.getChildAt(0),
					{ stride: r } = i;
				return t.slice(e * r, (e + 1) * r);
			};
		Q.prototype.visitNull = MM;
		Q.prototype.visitBool = CM;
		Q.prototype.visitInt = VM;
		Q.prototype.visitInt8 = Ii;
		Q.prototype.visitInt16 = Ii;
		Q.prototype.visitInt32 = Ii;
		Q.prototype.visitInt64 = Td;
		Q.prototype.visitUint8 = Ii;
		Q.prototype.visitUint16 = Ii;
		Q.prototype.visitUint32 = Ii;
		Q.prototype.visitUint64 = Td;
		Q.prototype.visitFloat = PM;
		Q.prototype.visitFloat16 = lv;
		Q.prototype.visitFloat32 = Ii;
		Q.prototype.visitFloat64 = Ii;
		Q.prototype.visitUtf8 = kM;
		Q.prototype.visitBinary = UM;
		Q.prototype.visitFixedSizeBinary = RM;
		Q.prototype.visitDate = NM;
		Q.prototype.visitDateDay = uv;
		Q.prototype.visitDateMillisecond = cv;
		Q.prototype.visitTimestamp = LM;
		Q.prototype.visitTimestampSecond = dv;
		Q.prototype.visitTimestampMillisecond = fv;
		Q.prototype.visitTimestampMicrosecond = hv;
		Q.prototype.visitTimestampNanosecond = pv;
		Q.prototype.visitTime = xM;
		Q.prototype.visitTimeSecond = yv;
		Q.prototype.visitTimeMillisecond = _v;
		Q.prototype.visitTimeMicrosecond = mv;
		Q.prototype.visitTimeNanosecond = bv;
		Q.prototype.visitDecimal = qM;
		Q.prototype.visitList = WM;
		Q.prototype.visitStruct = HM;
		Q.prototype.visitUnion = YM;
		Q.prototype.visitDenseUnion = gv;
		Q.prototype.visitSparseUnion = vv;
		Q.prototype.visitDictionary = GM;
		Q.prototype.visitInterval = $M;
		Q.prototype.visitIntervalDayTime = jv;
		Q.prototype.visitIntervalYearMonth = wv;
		Q.prototype.visitFixedSizeList = JM;
		Q.prototype.visitMap = zM;
		Gn.instance = new Q();
	});
	var Sv = M(($n) => {
		'use strict';
		Object.defineProperty($n, '__esModule', { value: !0 });
		$n.instance = $n.IndexOfVisitor = void 0;
		var KM = ut(),
			Tv = li(),
			Iv = Us(),
			ee = class extends KM.Visitor {};
		$n.IndexOfVisitor = ee;
		function ZM(i, e) {
			return e === null && i.length > 0 ? 0 : -1;
		}
		function XM(i, e) {
			let { nullBitmap: t } = i.data;
			if (!t || i.nullCount <= 0) return -1;
			let r = 0;
			for (let n of new Tv.BitIterator(t, i.data.offset + (e || 0), i.length, t, Tv.getBool)) {
				if (!n) return r;
				++r;
			}
			return -1;
		}
		function de(i, e, t) {
			if (e === void 0) return -1;
			if (e === null) return XM(i, t);
			let r = Iv.createElementComparator(e);
			for (let n = (t || 0) - 1, o = i.length; ++n < o; ) if (r(i.get(n))) return n;
			return -1;
		}
		function Bv(i, e, t) {
			let r = Iv.createElementComparator(e);
			for (let n = (t || 0) - 1, o = i.length; ++n < o; ) if (r(i.get(n))) return n;
			return -1;
		}
		ee.prototype.visitNull = ZM;
		ee.prototype.visitBool = de;
		ee.prototype.visitInt = de;
		ee.prototype.visitInt8 = de;
		ee.prototype.visitInt16 = de;
		ee.prototype.visitInt32 = de;
		ee.prototype.visitInt64 = de;
		ee.prototype.visitUint8 = de;
		ee.prototype.visitUint16 = de;
		ee.prototype.visitUint32 = de;
		ee.prototype.visitUint64 = de;
		ee.prototype.visitFloat = de;
		ee.prototype.visitFloat16 = de;
		ee.prototype.visitFloat32 = de;
		ee.prototype.visitFloat64 = de;
		ee.prototype.visitUtf8 = de;
		ee.prototype.visitBinary = de;
		ee.prototype.visitFixedSizeBinary = de;
		ee.prototype.visitDate = de;
		ee.prototype.visitDateDay = de;
		ee.prototype.visitDateMillisecond = de;
		ee.prototype.visitTimestamp = de;
		ee.prototype.visitTimestampSecond = de;
		ee.prototype.visitTimestampMillisecond = de;
		ee.prototype.visitTimestampMicrosecond = de;
		ee.prototype.visitTimestampNanosecond = de;
		ee.prototype.visitTime = de;
		ee.prototype.visitTimeSecond = de;
		ee.prototype.visitTimeMillisecond = de;
		ee.prototype.visitTimeMicrosecond = de;
		ee.prototype.visitTimeNanosecond = de;
		ee.prototype.visitDecimal = de;
		ee.prototype.visitList = de;
		ee.prototype.visitStruct = de;
		ee.prototype.visitUnion = de;
		ee.prototype.visitDenseUnion = Bv;
		ee.prototype.visitSparseUnion = Bv;
		ee.prototype.visitDictionary = de;
		ee.prototype.visitInterval = de;
		ee.prototype.visitIntervalDayTime = de;
		ee.prototype.visitIntervalYearMonth = de;
		ee.prototype.visitFixedSizeList = de;
		ee.prototype.visitMap = de;
		$n.instance = new ee();
	});
	var Bd = M((Jn) => {
		'use strict';
		Object.defineProperty(Jn, '__esModule', { value: !0 });
		Jn.instance = Jn.IteratorVisitor = void 0;
		var lu = Se(),
			QM = ut(),
			eC = li(),
			Av = Id(),
			te = class extends QM.Visitor {};
		Jn.IteratorVisitor = te;
		function tC(i) {
			let e = Av.instance.getVisitFn(i);
			return new eC.BitIterator(i.data.nullBitmap, i.data.offset, i.length, i, (t, r, n, o) =>
				(n & (1 << o)) != 0 ? e(t, r) : null
			);
		}
		var Dv = class {
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
		function ue(i) {
			if (i.nullCount > 0) return tC(i);
			let { type: e, typeId: t, length: r } = i;
			return i.stride === 1 &&
				(t === lu.Type.Timestamp ||
					(t === lu.Type.Int && e.bitWidth !== 64) ||
					(t === lu.Type.Time && e.bitWidth !== 64) ||
					(t === lu.Type.Float && e.precision > 0))
				? i.data.values.subarray(0, r)[Symbol.iterator]()
				: new Dv(i, Av.instance.getVisitFn(i));
		}
		te.prototype.visitNull = ue;
		te.prototype.visitBool = ue;
		te.prototype.visitInt = ue;
		te.prototype.visitInt8 = ue;
		te.prototype.visitInt16 = ue;
		te.prototype.visitInt32 = ue;
		te.prototype.visitInt64 = ue;
		te.prototype.visitUint8 = ue;
		te.prototype.visitUint16 = ue;
		te.prototype.visitUint32 = ue;
		te.prototype.visitUint64 = ue;
		te.prototype.visitFloat = ue;
		te.prototype.visitFloat16 = ue;
		te.prototype.visitFloat32 = ue;
		te.prototype.visitFloat64 = ue;
		te.prototype.visitUtf8 = ue;
		te.prototype.visitBinary = ue;
		te.prototype.visitFixedSizeBinary = ue;
		te.prototype.visitDate = ue;
		te.prototype.visitDateDay = ue;
		te.prototype.visitDateMillisecond = ue;
		te.prototype.visitTimestamp = ue;
		te.prototype.visitTimestampSecond = ue;
		te.prototype.visitTimestampMillisecond = ue;
		te.prototype.visitTimestampMicrosecond = ue;
		te.prototype.visitTimestampNanosecond = ue;
		te.prototype.visitTime = ue;
		te.prototype.visitTimeSecond = ue;
		te.prototype.visitTimeMillisecond = ue;
		te.prototype.visitTimeMicrosecond = ue;
		te.prototype.visitTimeNanosecond = ue;
		te.prototype.visitDecimal = ue;
		te.prototype.visitList = ue;
		te.prototype.visitStruct = ue;
		te.prototype.visitUnion = ue;
		te.prototype.visitDenseUnion = ue;
		te.prototype.visitSparseUnion = ue;
		te.prototype.visitDictionary = ue;
		te.prototype.visitInterval = ue;
		te.prototype.visitIntervalDayTime = ue;
		te.prototype.visitIntervalYearMonth = ue;
		te.prototype.visitFixedSizeList = ue;
		te.prototype.visitMap = ue;
		Jn.instance = new te();
	});
	var Fv = M((Kn) => {
		'use strict';
		Object.defineProperty(Kn, '__esModule', { value: !0 });
		Kn.instance = Kn.ToArrayVisitor = void 0;
		var Hs = Se(),
			iC = ut(),
			rC = Bd(),
			ie = class extends iC.Visitor {};
		Kn.ToArrayVisitor = ie;
		function ce(i) {
			let { type: e, length: t, stride: r } = i;
			switch (e.typeId) {
				case Hs.Type.Int:
				case Hs.Type.Float:
				case Hs.Type.Decimal:
				case Hs.Type.Time:
				case Hs.Type.Timestamp:
					return i.data.values.subarray(0, t * r);
			}
			return [...rC.instance.visit(i)];
		}
		ie.prototype.visitNull = ce;
		ie.prototype.visitBool = ce;
		ie.prototype.visitInt = ce;
		ie.prototype.visitInt8 = ce;
		ie.prototype.visitInt16 = ce;
		ie.prototype.visitInt32 = ce;
		ie.prototype.visitInt64 = ce;
		ie.prototype.visitUint8 = ce;
		ie.prototype.visitUint16 = ce;
		ie.prototype.visitUint32 = ce;
		ie.prototype.visitUint64 = ce;
		ie.prototype.visitFloat = ce;
		ie.prototype.visitFloat16 = ce;
		ie.prototype.visitFloat32 = ce;
		ie.prototype.visitFloat64 = ce;
		ie.prototype.visitUtf8 = ce;
		ie.prototype.visitBinary = ce;
		ie.prototype.visitFixedSizeBinary = ce;
		ie.prototype.visitDate = ce;
		ie.prototype.visitDateDay = ce;
		ie.prototype.visitDateMillisecond = ce;
		ie.prototype.visitTimestamp = ce;
		ie.prototype.visitTimestampSecond = ce;
		ie.prototype.visitTimestampMillisecond = ce;
		ie.prototype.visitTimestampMicrosecond = ce;
		ie.prototype.visitTimestampNanosecond = ce;
		ie.prototype.visitTime = ce;
		ie.prototype.visitTimeSecond = ce;
		ie.prototype.visitTimeMillisecond = ce;
		ie.prototype.visitTimeMicrosecond = ce;
		ie.prototype.visitTimeNanosecond = ce;
		ie.prototype.visitDecimal = ce;
		ie.prototype.visitList = ce;
		ie.prototype.visitStruct = ce;
		ie.prototype.visitUnion = ce;
		ie.prototype.visitDenseUnion = ce;
		ie.prototype.visitSparseUnion = ce;
		ie.prototype.visitDictionary = ce;
		ie.prototype.visitInterval = ce;
		ie.prototype.visitIntervalDayTime = ce;
		ie.prototype.visitIntervalYearMonth = ce;
		ie.prototype.visitFixedSizeList = ce;
		ie.prototype.visitMap = ce;
		Kn.instance = new ie();
	});
	var Ov = M((Zn) => {
		'use strict';
		Object.defineProperty(Zn, '__esModule', { value: !0 });
		Zn.instance = Zn.ByteWidthVisitor = void 0;
		var nC = ut(),
			sC = Se(),
			Ys = (i, e) => i + e,
			Sd = (i) => `Cannot compute the byte width of variable-width column ${i}`,
			Ad = class extends nC.Visitor {
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
					throw new Error(Sd(e));
				}
				visitUtf8(e) {
					throw new Error(Sd(e));
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
					return e.unit === sC.TimeUnit.SECOND ? 4 : 8;
				}
				visitInterval(e) {
					return (e.unit + 1) * 4;
				}
				visitList(e) {
					throw new Error(Sd(e));
				}
				visitStruct(e) {
					return this.visitFields(e.children).reduce(Ys, 0);
				}
				visitUnion(e) {
					return this.visitFields(e.children).reduce(Ys, 0);
				}
				visitFixedSizeBinary(e) {
					return e.byteWidth;
				}
				visitFixedSizeList(e) {
					return e.listSize * this.visitFields(e.children).reduce(Ys, 0);
				}
				visitMap(e) {
					return this.visitFields(e.children).reduce(Ys, 0);
				}
				visitDictionary(e) {
					return this.visit(e.indices);
				}
				visitFields(e) {
					return (e || []).map((t) => this.visit(t.type));
				}
				visitSchema(e) {
					return this.visitFields(e.fields).reduce(Ys, 0);
				}
			};
		Zn.ByteWidthVisitor = Ad;
		Zn.instance = new Ad();
	});
	var Ev = M((Xn) => {
		'use strict';
		Object.defineProperty(Xn, '__esModule', { value: !0 });
		Xn.instance = Xn.GetVectorConstructor = void 0;
		var oC = ut(),
			aC = Gl(),
			uC = $l(),
			Dd = Kl(),
			cC = Zl(),
			lC = Xa(),
			dC = Ql(),
			fC = ed(),
			du = nd(),
			Fd = sd(),
			xi = iu(),
			hC = pd(),
			pC = yd(),
			yC = _d(),
			_C = md(),
			Gs = bd(),
			$s = gd(),
			Od = vd(),
			mC = jd(),
			Ed = class extends oC.Visitor {
				visitNull() {
					return yC.NullVector;
				}
				visitBool() {
					return uC.BoolVector;
				}
				visitInt() {
					return xi.IntVector;
				}
				visitInt8() {
					return xi.Int8Vector;
				}
				visitInt16() {
					return xi.Int16Vector;
				}
				visitInt32() {
					return xi.Int32Vector;
				}
				visitInt64() {
					return xi.Int64Vector;
				}
				visitUint8() {
					return xi.Uint8Vector;
				}
				visitUint16() {
					return xi.Uint16Vector;
				}
				visitUint32() {
					return xi.Uint32Vector;
				}
				visitUint64() {
					return xi.Uint64Vector;
				}
				visitFloat() {
					return du.FloatVector;
				}
				visitFloat16() {
					return du.Float16Vector;
				}
				visitFloat32() {
					return du.Float32Vector;
				}
				visitFloat64() {
					return du.Float64Vector;
				}
				visitUtf8() {
					return mC.Utf8Vector;
				}
				visitBinary() {
					return aC.BinaryVector;
				}
				visitFixedSizeBinary() {
					return dC.FixedSizeBinaryVector;
				}
				visitDate() {
					return Dd.DateVector;
				}
				visitDateDay() {
					return Dd.DateDayVector;
				}
				visitDateMillisecond() {
					return Dd.DateMillisecondVector;
				}
				visitTimestamp() {
					return Gs.TimestampVector;
				}
				visitTimestampSecond() {
					return Gs.TimestampSecondVector;
				}
				visitTimestampMillisecond() {
					return Gs.TimestampMillisecondVector;
				}
				visitTimestampMicrosecond() {
					return Gs.TimestampMicrosecondVector;
				}
				visitTimestampNanosecond() {
					return Gs.TimestampNanosecondVector;
				}
				visitTime() {
					return $s.TimeVector;
				}
				visitTimeSecond() {
					return $s.TimeSecondVector;
				}
				visitTimeMillisecond() {
					return $s.TimeMillisecondVector;
				}
				visitTimeMicrosecond() {
					return $s.TimeMicrosecondVector;
				}
				visitTimeNanosecond() {
					return $s.TimeNanosecondVector;
				}
				visitDecimal() {
					return cC.DecimalVector;
				}
				visitList() {
					return hC.ListVector;
				}
				visitStruct() {
					return _C.StructVector;
				}
				visitUnion() {
					return Od.UnionVector;
				}
				visitDenseUnion() {
					return Od.DenseUnionVector;
				}
				visitSparseUnion() {
					return Od.SparseUnionVector;
				}
				visitDictionary() {
					return lC.DictionaryVector;
				}
				visitInterval() {
					return Fd.IntervalVector;
				}
				visitIntervalDayTime() {
					return Fd.IntervalDayTimeVector;
				}
				visitIntervalYearMonth() {
					return Fd.IntervalYearMonthVector;
				}
				visitFixedSizeList() {
					return fC.FixedSizeListVector;
				}
				visitMap() {
					return pC.MapVector;
				}
			};
		Xn.GetVectorConstructor = Ed;
		Xn.instance = new Ed();
	});
	var ji = M((R) => {
		'use strict';
		Object.defineProperty(R, '__esModule', { value: !0 });
		R.vectorFromValuesWithType =
			R.StructRow =
			R.MapRow =
			R.Utf8Vector =
			R.SparseUnionVector =
			R.DenseUnionVector =
			R.UnionVector =
			R.TimeNanosecondVector =
			R.TimeMicrosecondVector =
			R.TimeMillisecondVector =
			R.TimeSecondVector =
			R.TimeVector =
			R.TimestampNanosecondVector =
			R.TimestampMicrosecondVector =
			R.TimestampMillisecondVector =
			R.TimestampSecondVector =
			R.TimestampVector =
			R.StructVector =
			R.NullVector =
			R.MapVector =
			R.ListVector =
			R.Uint64Vector =
			R.Uint32Vector =
			R.Uint16Vector =
			R.Uint8Vector =
			R.Int64Vector =
			R.Int32Vector =
			R.Int16Vector =
			R.Int8Vector =
			R.IntVector =
			R.IntervalYearMonthVector =
			R.IntervalDayTimeVector =
			R.IntervalVector =
			R.Float64Vector =
			R.Float32Vector =
			R.Float16Vector =
			R.FloatVector =
			R.FixedSizeListVector =
			R.FixedSizeBinaryVector =
			R.DictionaryVector =
			R.DecimalVector =
			R.DateMillisecondVector =
			R.DateDayVector =
			R.DateVector =
			R.Chunked =
			R.BoolVector =
			R.BinaryVector =
			R.BaseVector =
			R.Vector =
				void 0;
		var Md = dt(),
			bC = We();
		Object.defineProperty(R, 'Vector', {
			enumerable: !0,
			get: function () {
				return bC.Vector;
			}
		});
		var gC = He();
		Object.defineProperty(R, 'BaseVector', {
			enumerable: !0,
			get: function () {
				return gC.BaseVector;
			}
		});
		var vC = Gl();
		Object.defineProperty(R, 'BinaryVector', {
			enumerable: !0,
			get: function () {
				return vC.BinaryVector;
			}
		});
		var jC = $l();
		Object.defineProperty(R, 'BoolVector', {
			enumerable: !0,
			get: function () {
				return jC.BoolVector;
			}
		});
		var wC = mr();
		Object.defineProperty(R, 'Chunked', {
			enumerable: !0,
			get: function () {
				return wC.Chunked;
			}
		});
		var Cd = Kl();
		Object.defineProperty(R, 'DateVector', {
			enumerable: !0,
			get: function () {
				return Cd.DateVector;
			}
		});
		Object.defineProperty(R, 'DateDayVector', {
			enumerable: !0,
			get: function () {
				return Cd.DateDayVector;
			}
		});
		Object.defineProperty(R, 'DateMillisecondVector', {
			enumerable: !0,
			get: function () {
				return Cd.DateMillisecondVector;
			}
		});
		var TC = Zl();
		Object.defineProperty(R, 'DecimalVector', {
			enumerable: !0,
			get: function () {
				return TC.DecimalVector;
			}
		});
		var IC = Xa();
		Object.defineProperty(R, 'DictionaryVector', {
			enumerable: !0,
			get: function () {
				return IC.DictionaryVector;
			}
		});
		var BC = Ql();
		Object.defineProperty(R, 'FixedSizeBinaryVector', {
			enumerable: !0,
			get: function () {
				return BC.FixedSizeBinaryVector;
			}
		});
		var SC = ed();
		Object.defineProperty(R, 'FixedSizeListVector', {
			enumerable: !0,
			get: function () {
				return SC.FixedSizeListVector;
			}
		});
		var fu = nd();
		Object.defineProperty(R, 'FloatVector', {
			enumerable: !0,
			get: function () {
				return fu.FloatVector;
			}
		});
		Object.defineProperty(R, 'Float16Vector', {
			enumerable: !0,
			get: function () {
				return fu.Float16Vector;
			}
		});
		Object.defineProperty(R, 'Float32Vector', {
			enumerable: !0,
			get: function () {
				return fu.Float32Vector;
			}
		});
		Object.defineProperty(R, 'Float64Vector', {
			enumerable: !0,
			get: function () {
				return fu.Float64Vector;
			}
		});
		var Rd = sd();
		Object.defineProperty(R, 'IntervalVector', {
			enumerable: !0,
			get: function () {
				return Rd.IntervalVector;
			}
		});
		Object.defineProperty(R, 'IntervalDayTimeVector', {
			enumerable: !0,
			get: function () {
				return Rd.IntervalDayTimeVector;
			}
		});
		Object.defineProperty(R, 'IntervalYearMonthVector', {
			enumerable: !0,
			get: function () {
				return Rd.IntervalYearMonthVector;
			}
		});
		var qi = iu();
		Object.defineProperty(R, 'IntVector', {
			enumerable: !0,
			get: function () {
				return qi.IntVector;
			}
		});
		Object.defineProperty(R, 'Int8Vector', {
			enumerable: !0,
			get: function () {
				return qi.Int8Vector;
			}
		});
		Object.defineProperty(R, 'Int16Vector', {
			enumerable: !0,
			get: function () {
				return qi.Int16Vector;
			}
		});
		Object.defineProperty(R, 'Int32Vector', {
			enumerable: !0,
			get: function () {
				return qi.Int32Vector;
			}
		});
		Object.defineProperty(R, 'Int64Vector', {
			enumerable: !0,
			get: function () {
				return qi.Int64Vector;
			}
		});
		Object.defineProperty(R, 'Uint8Vector', {
			enumerable: !0,
			get: function () {
				return qi.Uint8Vector;
			}
		});
		Object.defineProperty(R, 'Uint16Vector', {
			enumerable: !0,
			get: function () {
				return qi.Uint16Vector;
			}
		});
		Object.defineProperty(R, 'Uint32Vector', {
			enumerable: !0,
			get: function () {
				return qi.Uint32Vector;
			}
		});
		Object.defineProperty(R, 'Uint64Vector', {
			enumerable: !0,
			get: function () {
				return qi.Uint64Vector;
			}
		});
		var AC = pd();
		Object.defineProperty(R, 'ListVector', {
			enumerable: !0,
			get: function () {
				return AC.ListVector;
			}
		});
		var DC = yd();
		Object.defineProperty(R, 'MapVector', {
			enumerable: !0,
			get: function () {
				return DC.MapVector;
			}
		});
		var FC = _d();
		Object.defineProperty(R, 'NullVector', {
			enumerable: !0,
			get: function () {
				return FC.NullVector;
			}
		});
		var OC = md();
		Object.defineProperty(R, 'StructVector', {
			enumerable: !0,
			get: function () {
				return OC.StructVector;
			}
		});
		var Js = bd();
		Object.defineProperty(R, 'TimestampVector', {
			enumerable: !0,
			get: function () {
				return Js.TimestampVector;
			}
		});
		Object.defineProperty(R, 'TimestampSecondVector', {
			enumerable: !0,
			get: function () {
				return Js.TimestampSecondVector;
			}
		});
		Object.defineProperty(R, 'TimestampMillisecondVector', {
			enumerable: !0,
			get: function () {
				return Js.TimestampMillisecondVector;
			}
		});
		Object.defineProperty(R, 'TimestampMicrosecondVector', {
			enumerable: !0,
			get: function () {
				return Js.TimestampMicrosecondVector;
			}
		});
		Object.defineProperty(R, 'TimestampNanosecondVector', {
			enumerable: !0,
			get: function () {
				return Js.TimestampNanosecondVector;
			}
		});
		var Ks = gd();
		Object.defineProperty(R, 'TimeVector', {
			enumerable: !0,
			get: function () {
				return Ks.TimeVector;
			}
		});
		Object.defineProperty(R, 'TimeSecondVector', {
			enumerable: !0,
			get: function () {
				return Ks.TimeSecondVector;
			}
		});
		Object.defineProperty(R, 'TimeMillisecondVector', {
			enumerable: !0,
			get: function () {
				return Ks.TimeMillisecondVector;
			}
		});
		Object.defineProperty(R, 'TimeMicrosecondVector', {
			enumerable: !0,
			get: function () {
				return Ks.TimeMicrosecondVector;
			}
		});
		Object.defineProperty(R, 'TimeNanosecondVector', {
			enumerable: !0,
			get: function () {
				return Ks.TimeNanosecondVector;
			}
		});
		var Ud = vd();
		Object.defineProperty(R, 'UnionVector', {
			enumerable: !0,
			get: function () {
				return Ud.UnionVector;
			}
		});
		Object.defineProperty(R, 'DenseUnionVector', {
			enumerable: !0,
			get: function () {
				return Ud.DenseUnionVector;
			}
		});
		Object.defineProperty(R, 'SparseUnionVector', {
			enumerable: !0,
			get: function () {
				return Ud.SparseUnionVector;
			}
		});
		var EC = jd();
		Object.defineProperty(R, 'Utf8Vector', {
			enumerable: !0,
			get: function () {
				return EC.Utf8Vector;
			}
		});
		var Mv = Cs();
		Object.defineProperty(R, 'MapRow', {
			enumerable: !0,
			get: function () {
				return Mv.MapRow;
			}
		});
		Object.defineProperty(R, 'StructRow', {
			enumerable: !0,
			get: function () {
				return Mv.StructRow;
			}
		});
		var Zs = sv(),
			kd = Se(),
			Qn = We(),
			Cv = mr(),
			rn = He(),
			MC = li(),
			hu = ft(),
			Rv = Ve(),
			Uv = Id(),
			kv = Jc(),
			Vv = Sv(),
			Pv = Fv(),
			Nv = Bd(),
			Lv = Ov(),
			xv = Ev();
		Qn.Vector.new = CC;
		Qn.Vector.from = UC;
		function CC(i, ...e) {
			return new (xv.instance.getVisitFn(i)())(i, ...e);
		}
		function RC(i, e) {
			if (hu.isIterable(e))
				return Qn.Vector.from({ nullValues: [null, void 0], type: i(), values: e });
			if (hu.isAsyncIterable(e))
				return Qn.Vector.from({ nullValues: [null, void 0], type: i(), values: e });
			let { values: t = [], type: r = i(), nullValues: n = [null, void 0] } = Object.assign({}, e);
			return hu.isIterable(t)
				? Qn.Vector.from(Object.assign(Object.assign({ nullValues: n }, e), { type: r }))
				: Qn.Vector.from(Object.assign(Object.assign({ nullValues: n }, e), { type: r }));
		}
		R.vectorFromValuesWithType = RC;
		function UC(i) {
			let e = Object.assign({ nullValues: [null, void 0] }, i),
				{ values: t = [] } = e,
				r = Md.__rest(e, ['values']);
			if (hu.isIterable(t)) {
				let n = [...Rv.Builder.throughIterable(r)(t)];
				return n.length === 1 ? n[0] : Cv.Chunked.concat(n);
			}
			return ((n) =>
				Md.__awaiter(this, void 0, void 0, function* () {
					var o, l;
					let _ = Rv.Builder.throughAsyncIterable(r);
					try {
						for (var v = Md.__asyncValues(_(t)), B; (B = yield v.next()), !B.done; ) {
							let D = B.value;
							n.push(D);
						}
					} catch (D) {
						o = { error: D };
					} finally {
						try {
							B && !B.done && (l = v.return) && (yield l.call(v));
						} finally {
							if (o) throw o.error;
						}
					}
					return n.length === 1 ? n[0] : Cv.Chunked.concat(n);
				}))([]);
		}
		rn.BaseVector.prototype.get = function (e) {
			return Uv.instance.visit(this, e);
		};
		rn.BaseVector.prototype.set = function (e, t) {
			return kv.instance.visit(this, e, t);
		};
		rn.BaseVector.prototype.indexOf = function (e, t) {
			return Vv.instance.visit(this, e, t);
		};
		rn.BaseVector.prototype.toArray = function () {
			return Pv.instance.visit(this);
		};
		rn.BaseVector.prototype.getByteWidth = function () {
			return Lv.instance.visit(this.type);
		};
		rn.BaseVector.prototype[Symbol.iterator] = function () {
			return Nv.instance.visit(this);
		};
		rn.BaseVector.prototype._bindDataAccessors = NC;
		Object.keys(kd.Type)
			.map((i) => kd.Type[i])
			.filter((i) => typeof i == 'number')
			.filter((i) => i !== kd.Type.NONE)
			.forEach((i) => {
				let e = xv.instance.visit(i);
				(e.prototype.get = Zs.partial1(Uv.instance.getVisitFn(i))),
					(e.prototype.set = Zs.partial2(kv.instance.getVisitFn(i))),
					(e.prototype.indexOf = Zs.partial2(Vv.instance.getVisitFn(i))),
					(e.prototype.toArray = Zs.partial0(Pv.instance.getVisitFn(i))),
					(e.prototype.getByteWidth = kC(Lv.instance.getVisitFn(i))),
					(e.prototype[Symbol.iterator] = Zs.partial0(Nv.instance.getVisitFn(i)));
			});
		function kC(i) {
			return function () {
				return i(this.type);
			};
		}
		function VC(i) {
			return function (e) {
				return this.isValid(e) ? i.call(this, e) : null;
			};
		}
		function PC(i) {
			return function (e, t) {
				MC.setBool(this.nullBitmap, this.offset + e, t != null) && i.call(this, e, t);
			};
		}
		function NC() {
			let i = this.nullBitmap;
			i && i.byteLength > 0 && ((this.get = VC(this.get)), (this.set = PC(this.set)));
		}
	});
	var Ws = M((yu) => {
		'use strict';
		Object.defineProperty(yu, '__esModule', { value: !0 });
		yu.Table = void 0;
		var pu = dt(),
			LC = Nn(),
			xC = Xs(),
			qv = Ha(),
			Vd = Li(),
			Wv = rt(),
			Pd = ve(),
			zv = $r(),
			Nd = ft(),
			Hv = zl(),
			Ld = ji(),
			tt = class extends Ld.Chunked {
				constructor(...e) {
					var t;
					let r = null;
					e[0] instanceof Wv.Schema && (r = e[0]);
					let n = e[0] instanceof tt ? e[0].chunks : zv.selectArgs(Vd.RecordBatch, e);
					if (!r && !(r = (t = n[0]) === null || t === void 0 ? void 0 : t.schema))
						throw new TypeError(
							'Table must be initialized with a Schema or at least one RecordBatch'
						);
					n[0] || (n[0] = new Vd._InternalEmptyPlaceholderRecordBatch(r));
					super(new Pd.Struct(r.fields), n);
					(this._schema = r), (this._chunks = n);
				}
				static empty(e = new Wv.Schema([])) {
					return new tt(e, []);
				}
				static from(e) {
					if (!e) return tt.empty();
					if (typeof e == 'object') {
						let r = Nd.isIterable(e.values) ? qC(e) : Nd.isAsyncIterable(e.values) ? WC(e) : null;
						if (r !== null) return r;
					}
					let t = xC.RecordBatchReader.from(e);
					return Nd.isPromise(t)
						? (() =>
								pu.__awaiter(this, void 0, void 0, function* () {
									return yield tt.from(yield t);
								}))()
						: t.isSync() && (t = t.open())
						? t.schema
							? new tt(t.schema, [...t])
							: tt.empty()
						: ((r) =>
								pu.__awaiter(this, void 0, void 0, function* () {
									var n, o;
									let l = yield r,
										_ = l.schema,
										v = [];
									if (_) {
										try {
											for (var B = pu.__asyncValues(l), D; (D = yield B.next()), !D.done; ) {
												let N = D.value;
												v.push(N);
											}
										} catch (N) {
											n = { error: N };
										} finally {
											try {
												D && !D.done && (o = B.return) && (yield o.call(B));
											} finally {
												if (n) throw n.error;
											}
										}
										return new tt(_, v);
									}
									return tt.empty();
								}))(t.open());
				}
				static fromAsync(e) {
					return pu.__awaiter(this, void 0, void 0, function* () {
						return yield tt.from(e);
					});
				}
				static fromStruct(e) {
					return tt.new(e.data.childData, e.type.children);
				}
				static new(...e) {
					return new tt(...Hv.distributeColumnsIntoRecordBatches(zv.selectColumnArgs(e)));
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
					return new tt(this._schema, e);
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
						r,
						n = this._schema.fields,
						o = this._children || (this._children = []);
					if ((r = o[e])) return r;
					if ((t = n[e])) {
						let l = this._chunks.map((_) => _.getChildAt(e)).filter((_) => _ != null);
						if (l.length > 0) return (o[e] = new LC.Column(t, l));
					}
					return null;
				}
				serialize(e = 'binary', t = !0) {
					return (t ? qv.RecordBatchStreamWriter : qv.RecordBatchFileWriter)
						.writeAll(this)
						.toUint8Array(!0);
				}
				count() {
					return this._length;
				}
				select(...e) {
					let t = this._schema.fields.reduce((r, n, o) => r.set(n.name, o), new Map());
					return this.selectAt(...e.map((r) => t.get(r)).filter((r) => r > -1));
				}
				selectAt(...e) {
					let t = this._schema.selectAt(...e);
					return new tt(
						t,
						this._chunks.map(
							({ length: r, data: { childData: n } }) =>
								new Vd.RecordBatch(t, r, e.map((o) => n[o]).filter(Boolean))
						)
					);
				}
				assign(e) {
					let t = this._schema.fields,
						[r, n] = e.schema.fields.reduce(
							(_, v, B) => {
								let [D, N] = _,
									W = t.findIndex((K) => K.name === v.name);
								return ~W ? (N[W] = B) : D.push(B), _;
							},
							[[], []]
						),
						o = this._schema.assign(e.schema),
						l = [
							...t.map((_, v, B, D = n[v]) =>
								D === void 0 ? this.getColumnAt(v) : e.getColumnAt(D)
							),
							...r.map((_) => e.getColumnAt(_))
						].filter(Boolean);
					return new tt(...Hv.distributeVectorsIntoRecordBatches(o, l));
				}
			};
		yu.Table = tt;
		function qC(i) {
			let { type: e } = i;
			return e instanceof Pd.Struct ? tt.fromStruct(Ld.StructVector.from(i)) : null;
		}
		function WC(i) {
			let { type: e } = i;
			return e instanceof Pd.Struct ? Ld.StructVector.from(i).then((t) => tt.fromStruct(t)) : null;
		}
	});
	var Li = M((es) => {
		'use strict';
		Object.defineProperty(es, '__esModule', { value: !0 });
		es._InternalEmptyPlaceholderRecordBatch = es.RecordBatch = void 0;
		var xd = Xt(),
			qd = Ws(),
			zC = We(),
			HC = ut(),
			YC = rt(),
			GC = ft(),
			$C = mr(),
			JC = $r(),
			Wd = ve(),
			KC = zl(),
			ZC = ji(),
			Ar = class extends ZC.StructVector {
				constructor(...e) {
					let t,
						r = e[0],
						n;
					if (e[1] instanceof xd.Data) [, t, n] = e;
					else {
						let o = r.fields,
							[, l, _] = e;
						t = xd.Data.Struct(new Wd.Struct(o), 0, l, 0, null, _);
					}
					super(t, n);
					this._schema = r;
				}
				static from(e) {
					return GC.isIterable(e.values), qd.Table.from(e);
				}
				static new(...e) {
					let [t, r] = JC.selectFieldArgs(e),
						n = r.filter((o) => o instanceof zC.Vector);
					return new Ar(
						...KC.ensureSameLengthData(
							new YC.Schema(t),
							n.map((o) => o.data)
						)
					);
				}
				clone(e, t = this._children) {
					return new Ar(this._schema, e, t);
				}
				concat(...e) {
					let t = this._schema,
						r = $C.Chunked.flatten(this, ...e);
					return new qd.Table(
						t,
						r.map(({ data: n }) => new Ar(t, n))
					);
				}
				get schema() {
					return this._schema;
				}
				get numCols() {
					return this._schema.fields.length;
				}
				get dictionaries() {
					return this._dictionaries || (this._dictionaries = _u.collect(this));
				}
				select(...e) {
					let t = this._schema.fields.reduce((r, n, o) => r.set(n.name, o), new Map());
					return this.selectAt(...e.map((r) => t.get(r)).filter((r) => r > -1));
				}
				selectAt(...e) {
					let t = this._schema.selectAt(...e),
						r = e.map((n) => this.data.childData[n]).filter(Boolean);
					return new Ar(t, this.length, r);
				}
			};
		es.RecordBatch = Ar;
		var Yv = class extends Ar {
			constructor(e) {
				super(
					e,
					0,
					e.fields.map((t) => xd.Data.new(t.type, 0, 0, 0))
				);
			}
		};
		es._InternalEmptyPlaceholderRecordBatch = Yv;
		var _u = class extends HC.Visitor {
			constructor() {
				super(...arguments);
				this.dictionaries = new Map();
			}
			static collect(e) {
				return new _u().visit(e.data, new Wd.Struct(e.schema.fields)).dictionaries;
			}
			visit(e, t) {
				return Wd.DataType.isDictionary(t)
					? this.visitDictionary(e, t)
					: (e.childData.forEach((r, n) => this.visit(r, t.children[n].type)), this);
			}
			visitDictionary(e, t) {
				let r = e.dictionary;
				return r && r.length > 0 && this.dictionaries.set(t.id, r), this;
			}
		};
	});
	var Xs = M((Gt) => {
		'use strict';
		Object.defineProperty(Gt, '__esModule', { value: !0 });
		Gt.AsyncRecordBatchFileReader =
			Gt.RecordBatchFileReader =
			Gt.AsyncRecordBatchStreamReader =
			Gt.RecordBatchStreamReader =
			Gt.RecordBatchReader =
				void 0;
		var Fe = dt(),
			Gv = We(),
			mu = Se(),
			$v = ol(),
			Jv = js(),
			Kv = hr(),
			Qs = cl(),
			Zv = Fb(),
			zd = Li(),
			nn = fn(),
			Ht = Ra(),
			Yt = ft(),
			Bi = class extends nn.ReadableInterop {
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
					return Yt.isPromise(t) ? t.then(() => this) : this;
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
					return Jv.default.toDOMStream(
						this.isSync()
							? { [Symbol.iterator]: () => this }
							: { [Symbol.asyncIterator]: () => this }
					);
				}
				toNodeStream() {
					return Jv.default.toNodeStream(
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
					return e instanceof Bi
						? e
						: Yt.isArrowJSON(e)
						? XC(e)
						: Yt.isFileHandle(e)
						? tR(e)
						: Yt.isPromise(e)
						? (() =>
								Fe.__awaiter(this, void 0, void 0, function* () {
									return yield Bi.from(yield e);
								}))()
						: Yt.isFetchResponse(e) ||
						  Yt.isReadableDOMStream(e) ||
						  Yt.isReadableNodeStream(e) ||
						  Yt.isAsyncIterable(e)
						? eR(new Kv.AsyncByteStream(e))
						: QC(new Kv.ByteStream(e));
				}
				static readAll(e) {
					return e instanceof Bi
						? e.isSync()
							? t0(e)
							: i0(e)
						: Yt.isArrowJSON(e) ||
						  ArrayBuffer.isView(e) ||
						  Yt.isIterable(e) ||
						  Yt.isIteratorResult(e)
						? t0(e)
						: i0(e);
				}
			};
		Gt.RecordBatchReader = Bi;
		var ts = class extends Bi {
			constructor(e) {
				super(e);
				this._impl = e;
			}
			[Symbol.iterator]() {
				return this._impl[Symbol.iterator]();
			}
			[Symbol.asyncIterator]() {
				return Fe.__asyncGenerator(this, arguments, function* () {
					yield Fe.__await(yield* Fe.__asyncDelegator(Fe.__asyncValues(this[Symbol.iterator]())));
				});
			}
		};
		Gt.RecordBatchStreamReader = ts;
		var is = class extends Bi {
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
		Gt.AsyncRecordBatchStreamReader = is;
		var bu = class extends ts {
			constructor(e) {
				super(e);
				this._impl = e;
			}
		};
		Gt.RecordBatchFileReader = bu;
		var Hd = class extends is {
			constructor(e) {
				super(e);
				this._impl = e;
			}
		};
		Gt.AsyncRecordBatchFileReader = Hd;
		var Yd = class {
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
					return new zd.RecordBatch(
						this.schema,
						e.length,
						this._loadVectors(e, t, this.schema.fields)
					);
				}
				_loadDictionaryBatch(e, t) {
					let { id: r, isDelta: n, data: o } = e,
						{ dictionaries: l, schema: _ } = this,
						v = l.get(r);
					if (n || !v) {
						let B = _.dictionaries.get(r);
						return v && n
							? v.concat(Gv.Vector.new(this._loadVectors(o, t, [B])[0]))
							: Gv.Vector.new(this._loadVectors(o, t, [B])[0]);
					}
					return v;
				}
				_loadVectors(e, t, r) {
					return new Zv.VectorLoader(t, e.nodes, e.buffers, this.dictionaries).visitMany(r);
				}
			},
			eo = class extends Yd {
				constructor(e, t) {
					super(t);
					this._reader = Yt.isArrowJSON(e)
						? new Ht.JSONMessageReader((this._handle = e))
						: new Ht.MessageReader((this._handle = e));
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
							((this.autoDestroy = e0(this, e)),
							this.schema || (this.schema = this._reader.readSchema()) || this.cancel()),
						this
					);
				}
				throw(e) {
					return !this.closed && this.autoDestroy && (this.closed = !0)
						? this.reset()._reader.throw(e)
						: nn.ITERATOR_DONE;
				}
				return(e) {
					return !this.closed && this.autoDestroy && (this.closed = !0)
						? this.reset()._reader.return(e)
						: nn.ITERATOR_DONE;
				}
				next() {
					if (this.closed) return nn.ITERATOR_DONE;
					let e,
						{ _reader: t } = this;
					for (; (e = this._readNextMessageAndValidate()); )
						if (e.isSchema()) this.reset(e.header());
						else if (e.isRecordBatch()) {
							this._recordBatchIndex++;
							let r = e.header(),
								n = t.readMessageBody(e.bodyLength),
								o = this._loadRecordBatch(r, n);
							return { done: !1, value: o };
						} else if (e.isDictionaryBatch()) {
							this._dictionaryIndex++;
							let r = e.header(),
								n = t.readMessageBody(e.bodyLength),
								o = this._loadDictionaryBatch(r, n);
							this.dictionaries.set(r.id, o);
						}
					return this.schema && this._recordBatchIndex === 0
						? (this._recordBatchIndex++,
						  { done: !1, value: new zd._InternalEmptyPlaceholderRecordBatch(this.schema) })
						: this.return();
				}
				_readNextMessageAndValidate(e) {
					return this._reader.readMessage(e);
				}
			},
			to = class extends Yd {
				constructor(e, t) {
					super(t);
					this._reader = new Ht.AsyncMessageReader((this._handle = e));
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
					return Fe.__awaiter(this, void 0, void 0, function* () {
						!this.closed &&
							(this.closed = !0) &&
							(yield this.reset()._reader.return(),
							(this._reader = null),
							(this.dictionaries = null));
					});
				}
				open(e) {
					return Fe.__awaiter(this, void 0, void 0, function* () {
						return (
							this.closed ||
								((this.autoDestroy = e0(this, e)),
								this.schema ||
									(this.schema = yield this._reader.readSchema()) ||
									(yield this.cancel())),
							this
						);
					});
				}
				throw(e) {
					return Fe.__awaiter(this, void 0, void 0, function* () {
						return !this.closed && this.autoDestroy && (this.closed = !0)
							? yield this.reset()._reader.throw(e)
							: nn.ITERATOR_DONE;
					});
				}
				return(e) {
					return Fe.__awaiter(this, void 0, void 0, function* () {
						return !this.closed && this.autoDestroy && (this.closed = !0)
							? yield this.reset()._reader.return(e)
							: nn.ITERATOR_DONE;
					});
				}
				next() {
					return Fe.__awaiter(this, void 0, void 0, function* () {
						if (this.closed) return nn.ITERATOR_DONE;
						let e,
							{ _reader: t } = this;
						for (; (e = yield this._readNextMessageAndValidate()); )
							if (e.isSchema()) yield this.reset(e.header());
							else if (e.isRecordBatch()) {
								this._recordBatchIndex++;
								let r = e.header(),
									n = yield t.readMessageBody(e.bodyLength),
									o = this._loadRecordBatch(r, n);
								return { done: !1, value: o };
							} else if (e.isDictionaryBatch()) {
								this._dictionaryIndex++;
								let r = e.header(),
									n = yield t.readMessageBody(e.bodyLength),
									o = this._loadDictionaryBatch(r, n);
								this.dictionaries.set(r.id, o);
							}
						return this.schema && this._recordBatchIndex === 0
							? (this._recordBatchIndex++,
							  { done: !1, value: new zd._InternalEmptyPlaceholderRecordBatch(this.schema) })
							: yield this.return();
					});
				}
				_readNextMessageAndValidate(e) {
					return Fe.__awaiter(this, void 0, void 0, function* () {
						return yield this._reader.readMessage(e);
					});
				}
			},
			Gd = class extends eo {
				constructor(e, t) {
					super(e instanceof Qs.RandomAccessFile ? e : new Qs.RandomAccessFile(e), t);
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
						let r = this._reader.readMessage(mu.MessageHeader.RecordBatch);
						if (r == null ? void 0 : r.isRecordBatch()) {
							let n = r.header(),
								o = this._reader.readMessageBody(r.bodyLength);
							return this._loadRecordBatch(n, o);
						}
					}
					return null;
				}
				_readDictionaryBatch(e) {
					let t = this._footer && this._footer.getDictionaryBatch(e);
					if (t && this._handle.seek(t.offset)) {
						let r = this._reader.readMessage(mu.MessageHeader.DictionaryBatch);
						if (r == null ? void 0 : r.isDictionaryBatch()) {
							let n = r.header(),
								o = this._reader.readMessageBody(r.bodyLength),
								l = this._loadDictionaryBatch(n, o);
							this.dictionaries.set(n.id, l);
						}
					}
				}
				_readFooter() {
					let { _handle: e } = this,
						t = e.size - Ht.magicAndPadding,
						r = e.readInt32(t),
						n = e.readAt(t - r, r);
					return $v.Footer.decode(n);
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
			Xv = class extends to {
				constructor(e, ...t) {
					let r = typeof t[0] != 'number' ? t.shift() : void 0,
						n = t[0] instanceof Map ? t.shift() : void 0;
					super(e instanceof Qs.AsyncRandomAccessFile ? e : new Qs.AsyncRandomAccessFile(e, r), n);
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
					return Fe.__awaiter(this, void 0, void 0, function* () {
						if (!this.closed && !this._footer) {
							this.schema = (this._footer = yield this._readFooter()).schema;
							for (let r of this._footer.dictionaryBatches())
								r && (yield this._readDictionaryBatch(this._dictionaryIndex++));
						}
						return yield t.open.call(this, e);
					});
				}
				readRecordBatch(e) {
					return Fe.__awaiter(this, void 0, void 0, function* () {
						if (this.closed) return null;
						this._footer || (yield this.open());
						let t = this._footer && this._footer.getRecordBatch(e);
						if (t && (yield this._handle.seek(t.offset))) {
							let r = yield this._reader.readMessage(mu.MessageHeader.RecordBatch);
							if (r == null ? void 0 : r.isRecordBatch()) {
								let n = r.header(),
									o = yield this._reader.readMessageBody(r.bodyLength);
								return this._loadRecordBatch(n, o);
							}
						}
						return null;
					});
				}
				_readDictionaryBatch(e) {
					return Fe.__awaiter(this, void 0, void 0, function* () {
						let t = this._footer && this._footer.getDictionaryBatch(e);
						if (t && (yield this._handle.seek(t.offset))) {
							let r = yield this._reader.readMessage(mu.MessageHeader.DictionaryBatch);
							if (r == null ? void 0 : r.isDictionaryBatch()) {
								let n = r.header(),
									o = yield this._reader.readMessageBody(r.bodyLength),
									l = this._loadDictionaryBatch(n, o);
								this.dictionaries.set(n.id, l);
							}
						}
					});
				}
				_readFooter() {
					return Fe.__awaiter(this, void 0, void 0, function* () {
						let { _handle: e } = this;
						e._pending && (yield e._pending);
						let t = e.size - Ht.magicAndPadding,
							r = yield e.readInt32(t),
							n = yield e.readAt(t - r, r);
						return $v.Footer.decode(n);
					});
				}
				_readNextMessageAndValidate(e) {
					return Fe.__awaiter(this, void 0, void 0, function* () {
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
			Qv = class extends eo {
				constructor(e, t) {
					super(e, t);
				}
				_loadVectors(e, t, r) {
					return new Zv.JSONVectorLoader(t, e.nodes, e.buffers, this.dictionaries).visitMany(r);
				}
			};
		function e0(i, e) {
			return e && typeof e.autoDestroy == 'boolean' ? e.autoDestroy : i.autoDestroy;
		}
		function* t0(i) {
			let e = Bi.from(i);
			try {
				if (!e.open({ autoDestroy: !1 }).closed)
					do yield e;
					while (!e.reset().open().closed);
			} finally {
				e.cancel();
			}
		}
		function i0(i) {
			return Fe.__asyncGenerator(this, arguments, function* () {
				let t = yield Fe.__await(Bi.from(i));
				try {
					if (!(yield Fe.__await(t.open({ autoDestroy: !1 }))).closed)
						do yield yield Fe.__await(t);
						while (!(yield Fe.__await(t.reset().open())).closed);
				} finally {
					yield Fe.__await(t.cancel());
				}
			});
		}
		function XC(i) {
			return new ts(new Qv(i));
		}
		function QC(i) {
			let e = i.peek((Ht.magicLength + 7) & ~7);
			return e && e.byteLength >= 4
				? Ht.checkForMagicArrowString(e)
					? new bu(new Gd(i.read()))
					: new ts(new eo(i))
				: new ts(new eo((function* () {})()));
		}
		function eR(i) {
			return Fe.__awaiter(this, void 0, void 0, function* () {
				let e = yield i.peek((Ht.magicLength + 7) & ~7);
				return e && e.byteLength >= 4
					? Ht.checkForMagicArrowString(e)
						? new bu(new Gd(yield i.read()))
						: new is(new to(i))
					: new is(
							new to(
								(function () {
									return Fe.__asyncGenerator(this, arguments, function* () {});
								})()
							)
					  );
			});
		}
		function tR(i) {
			return Fe.__awaiter(this, void 0, void 0, function* () {
				let { size: e } = yield i.stat(),
					t = new Qs.AsyncRandomAccessFile(i, e);
				return e >= Ht.magicX2AndPadding &&
					Ht.checkForMagicArrowString(yield t.readAt(0, (Ht.magicLength + 7) & ~7))
					? new Hd(new Xv(t))
					: new is(new to(t));
			});
		}
	});
	var s0 = M((vu) => {
		'use strict';
		Object.defineProperty(vu, '__esModule', { value: !0 });
		vu.toDOMStream = void 0;
		var gu = dt(),
			r0 = Xe(),
			n0 = ft();
		function iR(i, e) {
			if (n0.isAsyncIterable(i)) return nR(i, e);
			if (n0.isIterable(i)) return rR(i, e);
			throw new Error('toDOMStream() must be called with an Iterable or AsyncIterable');
		}
		vu.toDOMStream = iR;
		function rR(i, e) {
			let t = null,
				r = (e == null ? void 0 : e.type) === 'bytes' || !1,
				n = (e == null ? void 0 : e.highWaterMark) || Math.pow(2, 24);
			return new ReadableStream(
				Object.assign(Object.assign({}, e), {
					start(l) {
						o(l, t || (t = i[Symbol.iterator]()));
					},
					pull(l) {
						t ? o(l, t) : l.close();
					},
					cancel() {
						(((t == null ? void 0 : t.return) && t.return()) || !0) && (t = null);
					}
				}),
				Object.assign({ highWaterMark: r ? n : void 0 }, e)
			);
			function o(l, _) {
				let v,
					B = null,
					D = l.desiredSize || null;
				for (; !(B = _.next(r ? D : null)).done; )
					if (
						(ArrayBuffer.isView(B.value) &&
							(v = r0.toUint8Array(B.value)) &&
							(D != null && r && (D = D - v.byteLength + 1), (B.value = v)),
						l.enqueue(B.value),
						D != null && --D <= 0)
					)
						return;
				l.close();
			}
		}
		function nR(i, e) {
			let t = null,
				r = (e == null ? void 0 : e.type) === 'bytes' || !1,
				n = (e == null ? void 0 : e.highWaterMark) || Math.pow(2, 24);
			return new ReadableStream(
				Object.assign(Object.assign({}, e), {
					start(l) {
						return gu.__awaiter(this, void 0, void 0, function* () {
							yield o(l, t || (t = i[Symbol.asyncIterator]()));
						});
					},
					pull(l) {
						return gu.__awaiter(this, void 0, void 0, function* () {
							t ? yield o(l, t) : l.close();
						});
					},
					cancel() {
						return gu.__awaiter(this, void 0, void 0, function* () {
							(((t == null ? void 0 : t.return) && (yield t.return())) || !0) && (t = null);
						});
					}
				}),
				Object.assign({ highWaterMark: r ? n : void 0 }, e)
			);
			function o(l, _) {
				return gu.__awaiter(this, void 0, void 0, function* () {
					let v,
						B = null,
						D = l.desiredSize || null;
					for (; !(B = yield _.next(r ? D : null)).done; )
						if (
							(ArrayBuffer.isView(B.value) &&
								(v = r0.toUint8Array(B.value)) &&
								(D != null && r && (D = D - v.byteLength + 1), (B.value = v)),
							l.enqueue(B.value),
							D != null && --D <= 0)
						)
							return;
					l.close();
				});
			}
		}
	});
	var u0 = M((rs) => {
		'use strict';
		Object.defineProperty(rs, '__esModule', { value: !0 });
		rs.BuilderTransform = rs.builderThroughDOMStream = void 0;
		var sR = dt(),
			oR = va();
		function aR(i) {
			return new $d(i);
		}
		rs.builderThroughDOMStream = aR;
		var $d = class {
			constructor(e) {
				(this._numChunks = 0), (this._finished = !1), (this._bufferedSize = 0);
				let {
						['readableStrategy']: t,
						['writableStrategy']: r,
						['queueingStrategy']: n = 'count'
					} = e,
					o = sR.__rest(e, ['readableStrategy', 'writableStrategy', 'queueingStrategy']);
				(this._controller = null),
					(this._builder = oR.Builder.new(o)),
					(this._getSize = n !== 'bytes' ? o0 : a0);
				let { ['highWaterMark']: l = n === 'bytes' ? Math.pow(2, 14) : 1e3 } = Object.assign({}, t),
					{ ['highWaterMark']: _ = n === 'bytes' ? Math.pow(2, 14) : 1e3 } = Object.assign({}, r);
				(this.readable = new ReadableStream(
					{
						cancel: () => {
							this._builder.clear();
						},
						pull: (v) => {
							this._maybeFlush(this._builder, (this._controller = v));
						},
						start: (v) => {
							this._maybeFlush(this._builder, (this._controller = v));
						}
					},
					{ highWaterMark: l, size: n !== 'bytes' ? o0 : a0 }
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
						{ highWaterMark: _, size: (v) => this._writeValueAndReturnChunkSize(v) }
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
		rs.BuilderTransform = $d;
		var o0 = (i) => i.length,
			a0 = (i) => i.byteLength;
	});
	var c0 = M((ju) => {
		'use strict';
		Object.defineProperty(ju, '__esModule', { value: !0 });
		ju.recordBatchReaderThroughDOMStream = void 0;
		var io = dt(),
			uR = hr(),
			cR = Xs();
		function lR(i, e) {
			let t = new uR.AsyncByteQueue(),
				r = null,
				n = new ReadableStream({
					cancel() {
						return io.__awaiter(this, void 0, void 0, function* () {
							yield t.close();
						});
					},
					start(_) {
						return io.__awaiter(this, void 0, void 0, function* () {
							yield l(_, r || (r = yield o()));
						});
					},
					pull(_) {
						return io.__awaiter(this, void 0, void 0, function* () {
							r ? yield l(_, r) : _.close();
						});
					}
				});
			return {
				writable: new WritableStream(t, Object.assign({ highWaterMark: Math.pow(2, 14) }, i)),
				readable: n
			};
			function o() {
				return io.__awaiter(this, void 0, void 0, function* () {
					return yield (yield cR.RecordBatchReader.from(t)).open(e);
				});
			}
			function l(_, v) {
				return io.__awaiter(this, void 0, void 0, function* () {
					let B = _.desiredSize,
						D = null;
					for (; !(D = yield v.next()).done; )
						if ((_.enqueue(D.value), B != null && --B <= 0)) return;
					_.close();
				});
			}
		}
		ju.recordBatchReaderThroughDOMStream = lR;
	});
	var l0 = M((Tu) => {
		'use strict';
		Object.defineProperty(Tu, '__esModule', { value: !0 });
		Tu.recordBatchWriterThroughDOMStream = void 0;
		var wu = dt(),
			dR = hr();
		function fR(i, e) {
			let t = new this(i),
				r = new dR.AsyncByteStream(t),
				n = new ReadableStream(
					{
						type: 'bytes',
						cancel() {
							return wu.__awaiter(this, void 0, void 0, function* () {
								yield r.cancel();
							});
						},
						pull(l) {
							return wu.__awaiter(this, void 0, void 0, function* () {
								yield o(l);
							});
						},
						start(l) {
							return wu.__awaiter(this, void 0, void 0, function* () {
								yield o(l);
							});
						}
					},
					Object.assign({ highWaterMark: Math.pow(2, 14) }, e)
				);
			return { writable: new WritableStream(t, i), readable: n };
			function o(l) {
				return wu.__awaiter(this, void 0, void 0, function* () {
					let _ = null,
						v = l.desiredSize;
					for (; (_ = yield r.read(v || null)); )
						if ((l.enqueue(_), v != null && (v -= _.byteLength) <= 0)) return;
					l.close();
				});
			}
		}
		Tu.recordBatchWriterThroughDOMStream = fR;
	});
	var ef = M((fe) => {
		'use strict';
		Object.defineProperty(fe, '__esModule', { value: !0 });
		fe.custom =
			fe.or =
			fe.and =
			fe.col =
			fe.lit =
			fe.CustomPredicate =
			fe.Not =
			fe.GTeq =
			fe.LTeq =
			fe.Equals =
			fe.Or =
			fe.And =
			fe.CombinationPredicate =
			fe.ComparisonPredicate =
			fe.Predicate =
			fe.Col =
			fe.Literal =
			fe.Value =
				void 0;
		var hR = Xa(),
			Dr = class {
				eq(e) {
					return e instanceof Dr || (e = new Wi(e)), new Kd(this, e);
				}
				le(e) {
					return e instanceof Dr || (e = new Wi(e)), new Zd(this, e);
				}
				ge(e) {
					return e instanceof Dr || (e = new Wi(e)), new Xd(this, e);
				}
				lt(e) {
					return new as(this.ge(e));
				}
				gt(e) {
					return new as(this.le(e));
				}
				ne(e) {
					return new as(this.eq(e));
				}
			};
		fe.Value = Dr;
		var Wi = class extends Dr {
			constructor(e) {
				super();
				this.v = e;
			}
		};
		fe.Literal = Wi;
		var Jd = class extends Dr {
			constructor(e) {
				super();
				this.name = e;
			}
			bind(e) {
				if (!this.colidx) {
					this.colidx = -1;
					let r = e.schema.fields;
					for (let n = -1; ++n < r.length; )
						if (r[n].name === this.name) {
							this.colidx = n;
							break;
						}
					if (this.colidx < 0) throw new Error(`Failed to bind Col "${this.name}"`);
				}
				let t = (this.vector = e.getChildAt(this.colidx));
				return (r) => t.get(r);
			}
		};
		fe.Col = Jd;
		var ns = class {
			and(...e) {
				return new ss(this, ...e);
			}
			or(...e) {
				return new os(this, ...e);
			}
			not() {
				return new as(this);
			}
		};
		fe.Predicate = ns;
		var ro = class extends ns {
			constructor(e, t) {
				super();
				(this.left = e), (this.right = t);
			}
			bind(e) {
				return this.left instanceof Wi
					? this.right instanceof Wi
						? this._bindLitLit(e, this.left, this.right)
						: this._bindLitCol(e, this.left, this.right)
					: this.right instanceof Wi
					? this._bindColLit(e, this.left, this.right)
					: this._bindColCol(e, this.left, this.right);
			}
		};
		fe.ComparisonPredicate = ro;
		var no = class extends ns {
			constructor(...e) {
				super();
				this.children = e;
			}
		};
		fe.CombinationPredicate = no;
		no.prototype.children = Object.freeze([]);
		var ss = class extends no {
			constructor(...e) {
				e = e.reduce((t, r) => t.concat(r instanceof ss ? r.children : r), []);
				super(...e);
			}
			bind(e) {
				let t = this.children.map((r) => r.bind(e));
				return (r, n) => t.every((o) => o(r, n));
			}
		};
		fe.And = ss;
		var os = class extends no {
			constructor(...e) {
				e = e.reduce((t, r) => t.concat(r instanceof os ? r.children : r), []);
				super(...e);
			}
			bind(e) {
				let t = this.children.map((r) => r.bind(e));
				return (r, n) => t.some((o) => o(r, n));
			}
		};
		fe.Or = os;
		var Kd = class extends ro {
			_bindLitLit(e, t, r) {
				let n = t.v == r.v;
				return () => n;
			}
			_bindColCol(e, t, r) {
				let n = t.bind(e),
					o = r.bind(e);
				return (l, _) => n(l, _) == o(l, _);
			}
			_bindColLit(e, t, r) {
				let n = t.bind(e);
				if (t.vector instanceof hR.DictionaryVector) {
					let o,
						l = t.vector;
					return (
						l.dictionary !== this.lastDictionary
							? ((o = l.reverseLookup(r.v)),
							  (this.lastDictionary = l.dictionary),
							  (this.lastKey = o))
							: (o = this.lastKey),
						o === -1 ? () => !1 : (_) => l.getKey(_) === o
					);
				} else return (o, l) => n(o, l) == r.v;
			}
			_bindLitCol(e, t, r) {
				return this._bindColLit(e, r, t);
			}
		};
		fe.Equals = Kd;
		var Zd = class extends ro {
			_bindLitLit(e, t, r) {
				let n = t.v <= r.v;
				return () => n;
			}
			_bindColCol(e, t, r) {
				let n = t.bind(e),
					o = r.bind(e);
				return (l, _) => n(l, _) <= o(l, _);
			}
			_bindColLit(e, t, r) {
				let n = t.bind(e);
				return (o, l) => n(o, l) <= r.v;
			}
			_bindLitCol(e, t, r) {
				let n = r.bind(e);
				return (o, l) => t.v <= n(o, l);
			}
		};
		fe.LTeq = Zd;
		var Xd = class extends ro {
			_bindLitLit(e, t, r) {
				let n = t.v >= r.v;
				return () => n;
			}
			_bindColCol(e, t, r) {
				let n = t.bind(e),
					o = r.bind(e);
				return (l, _) => n(l, _) >= o(l, _);
			}
			_bindColLit(e, t, r) {
				let n = t.bind(e);
				return (o, l) => n(o, l) >= r.v;
			}
			_bindLitCol(e, t, r) {
				let n = r.bind(e);
				return (o, l) => t.v >= n(o, l);
			}
		};
		fe.GTeq = Xd;
		var as = class extends ns {
			constructor(e) {
				super();
				this.child = e;
			}
			bind(e) {
				let t = this.child.bind(e);
				return (r, n) => !t(r, n);
			}
		};
		fe.Not = as;
		var Qd = class extends ns {
			constructor(e, t) {
				super();
				(this.next = e), (this.bind_ = t);
			}
			bind(e) {
				return this.bind_(e), this.next;
			}
		};
		fe.CustomPredicate = Qd;
		function pR(i) {
			return new Wi(i);
		}
		fe.lit = pR;
		function yR(i) {
			return new Jd(i);
		}
		fe.col = yR;
		function _R(...i) {
			return new ss(...i);
		}
		fe.and = _R;
		function mR(...i) {
			return new os(...i);
		}
		fe.or = mR;
		function bR(i, e) {
			return new Qd(i, e);
		}
		fe.custom = bR;
	});
	var _0 = M((Fr) => {
		'use strict';
		Object.defineProperty(Fr, '__esModule', { value: !0 });
		Fr.FilteredDataFrame = Fr.CountByResult = Fr.DataFrame = void 0;
		var d0 = Ws(),
			f0 = iu(),
			tf = rt(),
			h0 = ef(),
			gR = Li(),
			p0 = ve(),
			rf = class extends d0.Table {
				filter(e) {
					return new so(this.chunks, e);
				}
				scan(e, t) {
					let r = this.chunks,
						n = r.length;
					for (let o = -1; ++o < n; ) {
						let l = r[o];
						t && t(l);
						for (let _ = -1, v = l.length; ++_ < v; ) e(_, l);
					}
				}
				scanReverse(e, t) {
					let r = this.chunks,
						n = r.length;
					for (let o = n; --o >= 0; ) {
						let l = r[o];
						t && t(l);
						for (let _ = l.length; --_ >= 0; ) e(_, l);
					}
				}
				countBy(e) {
					let t = this.chunks,
						r = t.length,
						n = typeof e == 'string' ? new h0.Col(e) : e;
					n.bind(t[r - 1]);
					let o = n.vector;
					if (!p0.DataType.isDictionary(o.type))
						throw new Error('countBy currently only supports dictionary-encoded columns');
					let l = Math.ceil(Math.log(o.length) / Math.log(256)),
						_ = l == 4 ? Uint32Array : l >= 2 ? Uint16Array : Uint8Array,
						v = new _(o.dictionary.length);
					for (let B = -1; ++B < r; ) {
						let D = t[B];
						n.bind(D);
						let N = n.vector.indices;
						for (let W = -1, K = D.length; ++W < K; ) {
							let Re = N.get(W);
							Re !== null && v[Re]++;
						}
					}
					return new Iu(o.dictionary, f0.IntVector.from(v));
				}
			};
		Fr.DataFrame = rf;
		var Iu = class extends d0.Table {
			constructor(e, t) {
				let r = new tf.Schema([new tf.Field('values', e.type), new tf.Field('counts', t.type)]);
				super(new gR.RecordBatch(r, t.length, [e, t]));
			}
			toJSON() {
				let e = this.getColumnAt(0),
					t = this.getColumnAt(1),
					r = {};
				for (let n = -1; ++n < this.length; ) r[e.get(n)] = t.get(n);
				return r;
			}
		};
		Fr.CountByResult = Iu;
		var y0 = class {
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
			so = class extends rf {
				constructor(e, t) {
					super(e);
					this._predicate = t;
				}
				scan(e, t) {
					let r = this._chunks,
						n = r.length;
					for (let o = -1; ++o < n; ) {
						let l = r[o],
							_ = this._predicate.bind(l),
							v = !1;
						for (let B = -1, D = l.length; ++B < D; )
							_(B, l) && (t && !v && (t(l), (v = !0)), e(B, l));
					}
				}
				scanReverse(e, t) {
					let r = this._chunks,
						n = r.length;
					for (let o = n; --o >= 0; ) {
						let l = r[o],
							_ = this._predicate.bind(l),
							v = !1;
						for (let B = l.length; --B >= 0; ) _(B, l) && (t && !v && (t(l), (v = !0)), e(B, l));
					}
				}
				count() {
					let e = 0,
						t = this._chunks,
						r = t.length;
					for (let n = -1; ++n < r; ) {
						let o = t[n],
							l = this._predicate.bind(o);
						for (let _ = -1, v = o.length; ++_ < v; ) l(_, o) && ++e;
					}
					return e;
				}
				[Symbol.iterator]() {
					return new y0(this._chunks, this._predicate);
				}
				filter(e) {
					return new so(this._chunks, this._predicate.and(e));
				}
				countBy(e) {
					let t = this._chunks,
						r = t.length,
						n = typeof e == 'string' ? new h0.Col(e) : e;
					n.bind(t[r - 1]);
					let o = n.vector;
					if (!p0.DataType.isDictionary(o.type))
						throw new Error('countBy currently only supports dictionary-encoded columns');
					let l = Math.ceil(Math.log(o.length) / Math.log(256)),
						_ = l == 4 ? Uint32Array : l >= 2 ? Uint16Array : Uint8Array,
						v = new _(o.dictionary.length);
					for (let B = -1; ++B < r; ) {
						let D = t[B],
							N = this._predicate.bind(D);
						n.bind(D);
						let W = n.vector.indices;
						for (let K = -1, Re = D.length; ++K < Re; ) {
							let Ae = W.get(K);
							Ae !== null && N(K, D) && v[Ae]++;
						}
					}
					return new Iu(o.dictionary, f0.IntVector.from(v));
				}
			};
		Fr.FilteredDataFrame = so;
	});
	var g0 = M((g) => {
		'use strict';
		Object.defineProperty(g, '__esModule', { value: !0 });
		g.isTypedArray =
			g.util =
			g.predicate =
			g.CountByResult =
			g.FilteredDataFrame =
			g.DataFrame =
			g.RecordBatch =
			g.Message =
			g.JSONMessageReader =
			g.AsyncMessageReader =
			g.MessageReader =
			g.RecordBatchJSONWriter =
			g.RecordBatchStreamWriter =
			g.RecordBatchFileWriter =
			g.RecordBatchWriter =
			g.AsyncRecordBatchStreamReader =
			g.AsyncRecordBatchFileReader =
			g.RecordBatchStreamReader =
			g.RecordBatchFileReader =
			g.RecordBatchReader =
			g.AsyncByteQueue =
			g.AsyncByteStream =
			g.ByteStream =
			g.Utf8Builder =
			g.SparseUnionBuilder =
			g.DenseUnionBuilder =
			g.UnionBuilder =
			g.TimeNanosecondBuilder =
			g.TimeMicrosecondBuilder =
			g.TimeMillisecondBuilder =
			g.TimeSecondBuilder =
			g.TimeBuilder =
			g.TimestampNanosecondBuilder =
			g.TimestampMicrosecondBuilder =
			g.TimestampMillisecondBuilder =
			g.TimestampSecondBuilder =
			g.TimestampBuilder =
			g.StructBuilder =
			g.NullBuilder =
			g.MapBuilder =
			g.ListBuilder =
			g.Uint64Builder =
			g.Uint32Builder =
			g.Uint16Builder =
			g.Uint8Builder =
			g.Int64Builder =
			g.Int32Builder =
			g.Int16Builder =
			g.Int8Builder =
			g.IntBuilder =
			g.IntervalYearMonthBuilder =
			g.IntervalDayTimeBuilder =
			g.IntervalBuilder =
			g.Float64Builder =
			g.Float32Builder =
			g.Float16Builder =
			g.FloatBuilder =
			g.FixedSizeListBuilder =
			g.FixedSizeBinaryBuilder =
			g.DictionaryBuilder =
			g.DecimalBuilder =
			g.DateMillisecondBuilder =
			g.DateDayBuilder =
			g.DateBuilder =
			g.BoolBuilder =
			g.BinaryBuilder =
			g.Builder =
			g.Utf8Vector =
			g.SparseUnionVector =
			g.DenseUnionVector =
			g.UnionVector =
			g.TimeNanosecondVector =
			g.TimeMicrosecondVector =
			g.TimeMillisecondVector =
			g.TimeSecondVector =
			g.TimeVector =
			g.TimestampNanosecondVector =
			g.TimestampMicrosecondVector =
			g.TimestampMillisecondVector =
			g.TimestampSecondVector =
			g.TimestampVector =
			g.StructVector =
			g.NullVector =
			g.MapVector =
			g.ListVector =
			g.Uint64Vector =
			g.Uint32Vector =
			g.Uint16Vector =
			g.Uint8Vector =
			g.Int64Vector =
			g.Int32Vector =
			g.Int16Vector =
			g.Int8Vector =
			g.IntVector =
			g.IntervalYearMonthVector =
			g.IntervalDayTimeVector =
			g.IntervalVector =
			g.Float64Vector =
			g.Float32Vector =
			g.Float16Vector =
			g.FloatVector =
			g.FixedSizeListVector =
			g.FixedSizeBinaryVector =
			g.DictionaryVector =
			g.DecimalVector =
			g.DateMillisecondVector =
			g.DateDayVector =
			g.DateVector =
			g.Chunked =
			g.BoolVector =
			g.BinaryVector =
			g.BaseVector =
			g.Vector =
			g.Field =
			g.Schema =
			g.Visitor =
			g.Column =
			g.Table =
			g.Map_ =
			g.FixedSizeList =
			g.IntervalYearMonth =
			g.IntervalDayTime =
			g.Interval =
			g.Dictionary =
			g.SparseUnion =
			g.DenseUnion =
			g.Union =
			g.Struct =
			g.List =
			g.Decimal =
			g.TimeNanosecond =
			g.TimeMicrosecond =
			g.TimeMillisecond =
			g.TimeSecond =
			g.Time =
			g.TimestampNanosecond =
			g.TimestampMicrosecond =
			g.TimestampMillisecond =
			g.TimestampSecond =
			g.Timestamp =
			g.DateMillisecond =
			g.DateDay =
			g.Date_ =
			g.FixedSizeBinary =
			g.Binary =
			g.Utf8 =
			g.Float64 =
			g.Float32 =
			g.Float16 =
			g.Float =
			g.Uint64 =
			g.Uint32 =
			g.Uint16 =
			g.Uint8 =
			g.Int64 =
			g.Int32 =
			g.Int16 =
			g.Int8 =
			g.Int =
			g.Bool =
			g.Null =
			g.DataType =
			g.Data =
			g.BufferType =
			g.Type =
			g.MessageHeader =
			g.MetadataVersion =
			g.IntervalUnit =
			g.UnionMode =
			g.Precision =
			g.TimeUnit =
			g.DateUnit =
				void 0;
		var us = er();
		Object.defineProperty(g, 'DateUnit', {
			enumerable: !0,
			get: function () {
				return us.DateUnit;
			}
		});
		Object.defineProperty(g, 'TimeUnit', {
			enumerable: !0,
			get: function () {
				return us.TimeUnit;
			}
		});
		Object.defineProperty(g, 'Precision', {
			enumerable: !0,
			get: function () {
				return us.Precision;
			}
		});
		Object.defineProperty(g, 'UnionMode', {
			enumerable: !0,
			get: function () {
				return us.UnionMode;
			}
		});
		Object.defineProperty(g, 'IntervalUnit', {
			enumerable: !0,
			get: function () {
				return us.IntervalUnit;
			}
		});
		Object.defineProperty(g, 'MetadataVersion', {
			enumerable: !0,
			get: function () {
				return us.MetadataVersion;
			}
		});
		var vR = Ro();
		Object.defineProperty(g, 'MessageHeader', {
			enumerable: !0,
			get: function () {
				return vR.MessageHeader;
			}
		});
		var m0 = Se();
		Object.defineProperty(g, 'Type', {
			enumerable: !0,
			get: function () {
				return m0.Type;
			}
		});
		Object.defineProperty(g, 'BufferType', {
			enumerable: !0,
			get: function () {
				return m0.BufferType;
			}
		});
		var jR = Xt();
		Object.defineProperty(g, 'Data', {
			enumerable: !0,
			get: function () {
				return jR.Data;
			}
		});
		var oe = ve();
		Object.defineProperty(g, 'DataType', {
			enumerable: !0,
			get: function () {
				return oe.DataType;
			}
		});
		Object.defineProperty(g, 'Null', {
			enumerable: !0,
			get: function () {
				return oe.Null;
			}
		});
		Object.defineProperty(g, 'Bool', {
			enumerable: !0,
			get: function () {
				return oe.Bool;
			}
		});
		Object.defineProperty(g, 'Int', {
			enumerable: !0,
			get: function () {
				return oe.Int;
			}
		});
		Object.defineProperty(g, 'Int8', {
			enumerable: !0,
			get: function () {
				return oe.Int8;
			}
		});
		Object.defineProperty(g, 'Int16', {
			enumerable: !0,
			get: function () {
				return oe.Int16;
			}
		});
		Object.defineProperty(g, 'Int32', {
			enumerable: !0,
			get: function () {
				return oe.Int32;
			}
		});
		Object.defineProperty(g, 'Int64', {
			enumerable: !0,
			get: function () {
				return oe.Int64;
			}
		});
		Object.defineProperty(g, 'Uint8', {
			enumerable: !0,
			get: function () {
				return oe.Uint8;
			}
		});
		Object.defineProperty(g, 'Uint16', {
			enumerable: !0,
			get: function () {
				return oe.Uint16;
			}
		});
		Object.defineProperty(g, 'Uint32', {
			enumerable: !0,
			get: function () {
				return oe.Uint32;
			}
		});
		Object.defineProperty(g, 'Uint64', {
			enumerable: !0,
			get: function () {
				return oe.Uint64;
			}
		});
		Object.defineProperty(g, 'Float', {
			enumerable: !0,
			get: function () {
				return oe.Float;
			}
		});
		Object.defineProperty(g, 'Float16', {
			enumerable: !0,
			get: function () {
				return oe.Float16;
			}
		});
		Object.defineProperty(g, 'Float32', {
			enumerable: !0,
			get: function () {
				return oe.Float32;
			}
		});
		Object.defineProperty(g, 'Float64', {
			enumerable: !0,
			get: function () {
				return oe.Float64;
			}
		});
		Object.defineProperty(g, 'Utf8', {
			enumerable: !0,
			get: function () {
				return oe.Utf8;
			}
		});
		Object.defineProperty(g, 'Binary', {
			enumerable: !0,
			get: function () {
				return oe.Binary;
			}
		});
		Object.defineProperty(g, 'FixedSizeBinary', {
			enumerable: !0,
			get: function () {
				return oe.FixedSizeBinary;
			}
		});
		Object.defineProperty(g, 'Date_', {
			enumerable: !0,
			get: function () {
				return oe.Date_;
			}
		});
		Object.defineProperty(g, 'DateDay', {
			enumerable: !0,
			get: function () {
				return oe.DateDay;
			}
		});
		Object.defineProperty(g, 'DateMillisecond', {
			enumerable: !0,
			get: function () {
				return oe.DateMillisecond;
			}
		});
		Object.defineProperty(g, 'Timestamp', {
			enumerable: !0,
			get: function () {
				return oe.Timestamp;
			}
		});
		Object.defineProperty(g, 'TimestampSecond', {
			enumerable: !0,
			get: function () {
				return oe.TimestampSecond;
			}
		});
		Object.defineProperty(g, 'TimestampMillisecond', {
			enumerable: !0,
			get: function () {
				return oe.TimestampMillisecond;
			}
		});
		Object.defineProperty(g, 'TimestampMicrosecond', {
			enumerable: !0,
			get: function () {
				return oe.TimestampMicrosecond;
			}
		});
		Object.defineProperty(g, 'TimestampNanosecond', {
			enumerable: !0,
			get: function () {
				return oe.TimestampNanosecond;
			}
		});
		Object.defineProperty(g, 'Time', {
			enumerable: !0,
			get: function () {
				return oe.Time;
			}
		});
		Object.defineProperty(g, 'TimeSecond', {
			enumerable: !0,
			get: function () {
				return oe.TimeSecond;
			}
		});
		Object.defineProperty(g, 'TimeMillisecond', {
			enumerable: !0,
			get: function () {
				return oe.TimeMillisecond;
			}
		});
		Object.defineProperty(g, 'TimeMicrosecond', {
			enumerable: !0,
			get: function () {
				return oe.TimeMicrosecond;
			}
		});
		Object.defineProperty(g, 'TimeNanosecond', {
			enumerable: !0,
			get: function () {
				return oe.TimeNanosecond;
			}
		});
		Object.defineProperty(g, 'Decimal', {
			enumerable: !0,
			get: function () {
				return oe.Decimal;
			}
		});
		Object.defineProperty(g, 'List', {
			enumerable: !0,
			get: function () {
				return oe.List;
			}
		});
		Object.defineProperty(g, 'Struct', {
			enumerable: !0,
			get: function () {
				return oe.Struct;
			}
		});
		Object.defineProperty(g, 'Union', {
			enumerable: !0,
			get: function () {
				return oe.Union;
			}
		});
		Object.defineProperty(g, 'DenseUnion', {
			enumerable: !0,
			get: function () {
				return oe.DenseUnion;
			}
		});
		Object.defineProperty(g, 'SparseUnion', {
			enumerable: !0,
			get: function () {
				return oe.SparseUnion;
			}
		});
		Object.defineProperty(g, 'Dictionary', {
			enumerable: !0,
			get: function () {
				return oe.Dictionary;
			}
		});
		Object.defineProperty(g, 'Interval', {
			enumerable: !0,
			get: function () {
				return oe.Interval;
			}
		});
		Object.defineProperty(g, 'IntervalDayTime', {
			enumerable: !0,
			get: function () {
				return oe.IntervalDayTime;
			}
		});
		Object.defineProperty(g, 'IntervalYearMonth', {
			enumerable: !0,
			get: function () {
				return oe.IntervalYearMonth;
			}
		});
		Object.defineProperty(g, 'FixedSizeList', {
			enumerable: !0,
			get: function () {
				return oe.FixedSizeList;
			}
		});
		Object.defineProperty(g, 'Map_', {
			enumerable: !0,
			get: function () {
				return oe.Map_;
			}
		});
		var wR = Ws();
		Object.defineProperty(g, 'Table', {
			enumerable: !0,
			get: function () {
				return wR.Table;
			}
		});
		var TR = Nn();
		Object.defineProperty(g, 'Column', {
			enumerable: !0,
			get: function () {
				return TR.Column;
			}
		});
		var IR = ut();
		Object.defineProperty(g, 'Visitor', {
			enumerable: !0,
			get: function () {
				return IR.Visitor;
			}
		});
		var b0 = rt();
		Object.defineProperty(g, 'Schema', {
			enumerable: !0,
			get: function () {
				return b0.Schema;
			}
		});
		Object.defineProperty(g, 'Field', {
			enumerable: !0,
			get: function () {
				return b0.Field;
			}
		});
		var re = ji();
		Object.defineProperty(g, 'Vector', {
			enumerable: !0,
			get: function () {
				return re.Vector;
			}
		});
		Object.defineProperty(g, 'BaseVector', {
			enumerable: !0,
			get: function () {
				return re.BaseVector;
			}
		});
		Object.defineProperty(g, 'BinaryVector', {
			enumerable: !0,
			get: function () {
				return re.BinaryVector;
			}
		});
		Object.defineProperty(g, 'BoolVector', {
			enumerable: !0,
			get: function () {
				return re.BoolVector;
			}
		});
		Object.defineProperty(g, 'Chunked', {
			enumerable: !0,
			get: function () {
				return re.Chunked;
			}
		});
		Object.defineProperty(g, 'DateVector', {
			enumerable: !0,
			get: function () {
				return re.DateVector;
			}
		});
		Object.defineProperty(g, 'DateDayVector', {
			enumerable: !0,
			get: function () {
				return re.DateDayVector;
			}
		});
		Object.defineProperty(g, 'DateMillisecondVector', {
			enumerable: !0,
			get: function () {
				return re.DateMillisecondVector;
			}
		});
		Object.defineProperty(g, 'DecimalVector', {
			enumerable: !0,
			get: function () {
				return re.DecimalVector;
			}
		});
		Object.defineProperty(g, 'DictionaryVector', {
			enumerable: !0,
			get: function () {
				return re.DictionaryVector;
			}
		});
		Object.defineProperty(g, 'FixedSizeBinaryVector', {
			enumerable: !0,
			get: function () {
				return re.FixedSizeBinaryVector;
			}
		});
		Object.defineProperty(g, 'FixedSizeListVector', {
			enumerable: !0,
			get: function () {
				return re.FixedSizeListVector;
			}
		});
		Object.defineProperty(g, 'FloatVector', {
			enumerable: !0,
			get: function () {
				return re.FloatVector;
			}
		});
		Object.defineProperty(g, 'Float16Vector', {
			enumerable: !0,
			get: function () {
				return re.Float16Vector;
			}
		});
		Object.defineProperty(g, 'Float32Vector', {
			enumerable: !0,
			get: function () {
				return re.Float32Vector;
			}
		});
		Object.defineProperty(g, 'Float64Vector', {
			enumerable: !0,
			get: function () {
				return re.Float64Vector;
			}
		});
		Object.defineProperty(g, 'IntervalVector', {
			enumerable: !0,
			get: function () {
				return re.IntervalVector;
			}
		});
		Object.defineProperty(g, 'IntervalDayTimeVector', {
			enumerable: !0,
			get: function () {
				return re.IntervalDayTimeVector;
			}
		});
		Object.defineProperty(g, 'IntervalYearMonthVector', {
			enumerable: !0,
			get: function () {
				return re.IntervalYearMonthVector;
			}
		});
		Object.defineProperty(g, 'IntVector', {
			enumerable: !0,
			get: function () {
				return re.IntVector;
			}
		});
		Object.defineProperty(g, 'Int8Vector', {
			enumerable: !0,
			get: function () {
				return re.Int8Vector;
			}
		});
		Object.defineProperty(g, 'Int16Vector', {
			enumerable: !0,
			get: function () {
				return re.Int16Vector;
			}
		});
		Object.defineProperty(g, 'Int32Vector', {
			enumerable: !0,
			get: function () {
				return re.Int32Vector;
			}
		});
		Object.defineProperty(g, 'Int64Vector', {
			enumerable: !0,
			get: function () {
				return re.Int64Vector;
			}
		});
		Object.defineProperty(g, 'Uint8Vector', {
			enumerable: !0,
			get: function () {
				return re.Uint8Vector;
			}
		});
		Object.defineProperty(g, 'Uint16Vector', {
			enumerable: !0,
			get: function () {
				return re.Uint16Vector;
			}
		});
		Object.defineProperty(g, 'Uint32Vector', {
			enumerable: !0,
			get: function () {
				return re.Uint32Vector;
			}
		});
		Object.defineProperty(g, 'Uint64Vector', {
			enumerable: !0,
			get: function () {
				return re.Uint64Vector;
			}
		});
		Object.defineProperty(g, 'ListVector', {
			enumerable: !0,
			get: function () {
				return re.ListVector;
			}
		});
		Object.defineProperty(g, 'MapVector', {
			enumerable: !0,
			get: function () {
				return re.MapVector;
			}
		});
		Object.defineProperty(g, 'NullVector', {
			enumerable: !0,
			get: function () {
				return re.NullVector;
			}
		});
		Object.defineProperty(g, 'StructVector', {
			enumerable: !0,
			get: function () {
				return re.StructVector;
			}
		});
		Object.defineProperty(g, 'TimestampVector', {
			enumerable: !0,
			get: function () {
				return re.TimestampVector;
			}
		});
		Object.defineProperty(g, 'TimestampSecondVector', {
			enumerable: !0,
			get: function () {
				return re.TimestampSecondVector;
			}
		});
		Object.defineProperty(g, 'TimestampMillisecondVector', {
			enumerable: !0,
			get: function () {
				return re.TimestampMillisecondVector;
			}
		});
		Object.defineProperty(g, 'TimestampMicrosecondVector', {
			enumerable: !0,
			get: function () {
				return re.TimestampMicrosecondVector;
			}
		});
		Object.defineProperty(g, 'TimestampNanosecondVector', {
			enumerable: !0,
			get: function () {
				return re.TimestampNanosecondVector;
			}
		});
		Object.defineProperty(g, 'TimeVector', {
			enumerable: !0,
			get: function () {
				return re.TimeVector;
			}
		});
		Object.defineProperty(g, 'TimeSecondVector', {
			enumerable: !0,
			get: function () {
				return re.TimeSecondVector;
			}
		});
		Object.defineProperty(g, 'TimeMillisecondVector', {
			enumerable: !0,
			get: function () {
				return re.TimeMillisecondVector;
			}
		});
		Object.defineProperty(g, 'TimeMicrosecondVector', {
			enumerable: !0,
			get: function () {
				return re.TimeMicrosecondVector;
			}
		});
		Object.defineProperty(g, 'TimeNanosecondVector', {
			enumerable: !0,
			get: function () {
				return re.TimeNanosecondVector;
			}
		});
		Object.defineProperty(g, 'UnionVector', {
			enumerable: !0,
			get: function () {
				return re.UnionVector;
			}
		});
		Object.defineProperty(g, 'DenseUnionVector', {
			enumerable: !0,
			get: function () {
				return re.DenseUnionVector;
			}
		});
		Object.defineProperty(g, 'SparseUnionVector', {
			enumerable: !0,
			get: function () {
				return re.SparseUnionVector;
			}
		});
		Object.defineProperty(g, 'Utf8Vector', {
			enumerable: !0,
			get: function () {
				return re.Utf8Vector;
			}
		});
		var ae = va();
		Object.defineProperty(g, 'Builder', {
			enumerable: !0,
			get: function () {
				return ae.Builder;
			}
		});
		Object.defineProperty(g, 'BinaryBuilder', {
			enumerable: !0,
			get: function () {
				return ae.BinaryBuilder;
			}
		});
		Object.defineProperty(g, 'BoolBuilder', {
			enumerable: !0,
			get: function () {
				return ae.BoolBuilder;
			}
		});
		Object.defineProperty(g, 'DateBuilder', {
			enumerable: !0,
			get: function () {
				return ae.DateBuilder;
			}
		});
		Object.defineProperty(g, 'DateDayBuilder', {
			enumerable: !0,
			get: function () {
				return ae.DateDayBuilder;
			}
		});
		Object.defineProperty(g, 'DateMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return ae.DateMillisecondBuilder;
			}
		});
		Object.defineProperty(g, 'DecimalBuilder', {
			enumerable: !0,
			get: function () {
				return ae.DecimalBuilder;
			}
		});
		Object.defineProperty(g, 'DictionaryBuilder', {
			enumerable: !0,
			get: function () {
				return ae.DictionaryBuilder;
			}
		});
		Object.defineProperty(g, 'FixedSizeBinaryBuilder', {
			enumerable: !0,
			get: function () {
				return ae.FixedSizeBinaryBuilder;
			}
		});
		Object.defineProperty(g, 'FixedSizeListBuilder', {
			enumerable: !0,
			get: function () {
				return ae.FixedSizeListBuilder;
			}
		});
		Object.defineProperty(g, 'FloatBuilder', {
			enumerable: !0,
			get: function () {
				return ae.FloatBuilder;
			}
		});
		Object.defineProperty(g, 'Float16Builder', {
			enumerable: !0,
			get: function () {
				return ae.Float16Builder;
			}
		});
		Object.defineProperty(g, 'Float32Builder', {
			enumerable: !0,
			get: function () {
				return ae.Float32Builder;
			}
		});
		Object.defineProperty(g, 'Float64Builder', {
			enumerable: !0,
			get: function () {
				return ae.Float64Builder;
			}
		});
		Object.defineProperty(g, 'IntervalBuilder', {
			enumerable: !0,
			get: function () {
				return ae.IntervalBuilder;
			}
		});
		Object.defineProperty(g, 'IntervalDayTimeBuilder', {
			enumerable: !0,
			get: function () {
				return ae.IntervalDayTimeBuilder;
			}
		});
		Object.defineProperty(g, 'IntervalYearMonthBuilder', {
			enumerable: !0,
			get: function () {
				return ae.IntervalYearMonthBuilder;
			}
		});
		Object.defineProperty(g, 'IntBuilder', {
			enumerable: !0,
			get: function () {
				return ae.IntBuilder;
			}
		});
		Object.defineProperty(g, 'Int8Builder', {
			enumerable: !0,
			get: function () {
				return ae.Int8Builder;
			}
		});
		Object.defineProperty(g, 'Int16Builder', {
			enumerable: !0,
			get: function () {
				return ae.Int16Builder;
			}
		});
		Object.defineProperty(g, 'Int32Builder', {
			enumerable: !0,
			get: function () {
				return ae.Int32Builder;
			}
		});
		Object.defineProperty(g, 'Int64Builder', {
			enumerable: !0,
			get: function () {
				return ae.Int64Builder;
			}
		});
		Object.defineProperty(g, 'Uint8Builder', {
			enumerable: !0,
			get: function () {
				return ae.Uint8Builder;
			}
		});
		Object.defineProperty(g, 'Uint16Builder', {
			enumerable: !0,
			get: function () {
				return ae.Uint16Builder;
			}
		});
		Object.defineProperty(g, 'Uint32Builder', {
			enumerable: !0,
			get: function () {
				return ae.Uint32Builder;
			}
		});
		Object.defineProperty(g, 'Uint64Builder', {
			enumerable: !0,
			get: function () {
				return ae.Uint64Builder;
			}
		});
		Object.defineProperty(g, 'ListBuilder', {
			enumerable: !0,
			get: function () {
				return ae.ListBuilder;
			}
		});
		Object.defineProperty(g, 'MapBuilder', {
			enumerable: !0,
			get: function () {
				return ae.MapBuilder;
			}
		});
		Object.defineProperty(g, 'NullBuilder', {
			enumerable: !0,
			get: function () {
				return ae.NullBuilder;
			}
		});
		Object.defineProperty(g, 'StructBuilder', {
			enumerable: !0,
			get: function () {
				return ae.StructBuilder;
			}
		});
		Object.defineProperty(g, 'TimestampBuilder', {
			enumerable: !0,
			get: function () {
				return ae.TimestampBuilder;
			}
		});
		Object.defineProperty(g, 'TimestampSecondBuilder', {
			enumerable: !0,
			get: function () {
				return ae.TimestampSecondBuilder;
			}
		});
		Object.defineProperty(g, 'TimestampMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return ae.TimestampMillisecondBuilder;
			}
		});
		Object.defineProperty(g, 'TimestampMicrosecondBuilder', {
			enumerable: !0,
			get: function () {
				return ae.TimestampMicrosecondBuilder;
			}
		});
		Object.defineProperty(g, 'TimestampNanosecondBuilder', {
			enumerable: !0,
			get: function () {
				return ae.TimestampNanosecondBuilder;
			}
		});
		Object.defineProperty(g, 'TimeBuilder', {
			enumerable: !0,
			get: function () {
				return ae.TimeBuilder;
			}
		});
		Object.defineProperty(g, 'TimeSecondBuilder', {
			enumerable: !0,
			get: function () {
				return ae.TimeSecondBuilder;
			}
		});
		Object.defineProperty(g, 'TimeMillisecondBuilder', {
			enumerable: !0,
			get: function () {
				return ae.TimeMillisecondBuilder;
			}
		});
		Object.defineProperty(g, 'TimeMicrosecondBuilder', {
			enumerable: !0,
			get: function () {
				return ae.TimeMicrosecondBuilder;
			}
		});
		Object.defineProperty(g, 'TimeNanosecondBuilder', {
			enumerable: !0,
			get: function () {
				return ae.TimeNanosecondBuilder;
			}
		});
		Object.defineProperty(g, 'UnionBuilder', {
			enumerable: !0,
			get: function () {
				return ae.UnionBuilder;
			}
		});
		Object.defineProperty(g, 'DenseUnionBuilder', {
			enumerable: !0,
			get: function () {
				return ae.DenseUnionBuilder;
			}
		});
		Object.defineProperty(g, 'SparseUnionBuilder', {
			enumerable: !0,
			get: function () {
				return ae.SparseUnionBuilder;
			}
		});
		Object.defineProperty(g, 'Utf8Builder', {
			enumerable: !0,
			get: function () {
				return ae.Utf8Builder;
			}
		});
		var nf = hr();
		Object.defineProperty(g, 'ByteStream', {
			enumerable: !0,
			get: function () {
				return nf.ByteStream;
			}
		});
		Object.defineProperty(g, 'AsyncByteStream', {
			enumerable: !0,
			get: function () {
				return nf.AsyncByteStream;
			}
		});
		Object.defineProperty(g, 'AsyncByteQueue', {
			enumerable: !0,
			get: function () {
				return nf.AsyncByteQueue;
			}
		});
		var oo = Xs();
		Object.defineProperty(g, 'RecordBatchReader', {
			enumerable: !0,
			get: function () {
				return oo.RecordBatchReader;
			}
		});
		Object.defineProperty(g, 'RecordBatchFileReader', {
			enumerable: !0,
			get: function () {
				return oo.RecordBatchFileReader;
			}
		});
		Object.defineProperty(g, 'RecordBatchStreamReader', {
			enumerable: !0,
			get: function () {
				return oo.RecordBatchStreamReader;
			}
		});
		Object.defineProperty(g, 'AsyncRecordBatchFileReader', {
			enumerable: !0,
			get: function () {
				return oo.AsyncRecordBatchFileReader;
			}
		});
		Object.defineProperty(g, 'AsyncRecordBatchStreamReader', {
			enumerable: !0,
			get: function () {
				return oo.AsyncRecordBatchStreamReader;
			}
		});
		var Bu = Ha();
		Object.defineProperty(g, 'RecordBatchWriter', {
			enumerable: !0,
			get: function () {
				return Bu.RecordBatchWriter;
			}
		});
		Object.defineProperty(g, 'RecordBatchFileWriter', {
			enumerable: !0,
			get: function () {
				return Bu.RecordBatchFileWriter;
			}
		});
		Object.defineProperty(g, 'RecordBatchStreamWriter', {
			enumerable: !0,
			get: function () {
				return Bu.RecordBatchStreamWriter;
			}
		});
		Object.defineProperty(g, 'RecordBatchJSONWriter', {
			enumerable: !0,
			get: function () {
				return Bu.RecordBatchJSONWriter;
			}
		});
		var sf = Ra();
		Object.defineProperty(g, 'MessageReader', {
			enumerable: !0,
			get: function () {
				return sf.MessageReader;
			}
		});
		Object.defineProperty(g, 'AsyncMessageReader', {
			enumerable: !0,
			get: function () {
				return sf.AsyncMessageReader;
			}
		});
		Object.defineProperty(g, 'JSONMessageReader', {
			enumerable: !0,
			get: function () {
				return sf.JSONMessageReader;
			}
		});
		var BR = Zr();
		Object.defineProperty(g, 'Message', {
			enumerable: !0,
			get: function () {
				return BR.Message;
			}
		});
		var SR = Li();
		Object.defineProperty(g, 'RecordBatch', {
			enumerable: !0,
			get: function () {
				return SR.RecordBatch;
			}
		});
		var of = _0();
		Object.defineProperty(g, 'DataFrame', {
			enumerable: !0,
			get: function () {
				return of.DataFrame;
			}
		});
		Object.defineProperty(g, 'FilteredDataFrame', {
			enumerable: !0,
			get: function () {
				return of.FilteredDataFrame;
			}
		});
		Object.defineProperty(g, 'CountByResult', {
			enumerable: !0,
			get: function () {
				return of.CountByResult;
			}
		});
		var AR = As(),
			DR = dl(),
			FR = li(),
			OR = Ts(),
			ER = Xe(),
			MR = Us(),
			CR = ef();
		g.predicate = CR;
		var af = Fl();
		g.util = Object.assign(
			Object.assign(
				Object.assign(
					Object.assign(Object.assign(Object.assign(Object.assign({}, AR), DR), FR), OR),
					ER
				),
				MR
			),
			{
				compareSchemas: af.compareSchemas,
				compareFields: af.compareFields,
				compareTypes: af.compareTypes
			}
		);
		var RR = $r();
		Object.defineProperty(g, 'isTypedArray', {
			enumerable: !0,
			get: function () {
				return RR.isTypedArray;
			}
		});
	});
	var Du = M(() => {});
	var cf = M(() => {});
	var NR = {};
	J1(NR, { registerWorker: () => F0 });
	var v0 = Di(js(), 1),
		j0 = Di(va(), 1),
		cs = Di(Xs(), 1),
		ls = Di(Ha(), 1),
		w0 = Di(s0(), 1),
		T0 = Di(u0(), 1),
		Su = Di(c0(), 1),
		Au = Di(l0(), 1),
		S = Di(g0(), 1);
	v0.default.toDOMStream = w0.toDOMStream;
	j0.Builder.throughDOM = T0.builderThroughDOMStream;
	cs.RecordBatchReader.throughDOM = Su.recordBatchReaderThroughDOMStream;
	cs.RecordBatchFileReader.throughDOM = Su.recordBatchReaderThroughDOMStream;
	cs.RecordBatchStreamReader.throughDOM = Su.recordBatchReaderThroughDOMStream;
	ls.RecordBatchWriter.throughDOM = Au.recordBatchWriterThroughDOMStream;
	ls.RecordBatchFileWriter.throughDOM = Au.recordBatchWriterThroughDOMStream;
	ls.RecordBatchStreamWriter.throughDOM = Au.recordBatchWriterThroughDOMStream;
	var ge = ((pe) => (
			(pe.CLOSE_PREPARED = 'CLOSE_PREPARED'),
			(pe.COLLECT_FILE_STATISTICS = 'COLLECT_FILE_STATISTICS'),
			(pe.CONNECT = 'CONNECT'),
			(pe.COPY_FILE_TO_BUFFER = 'COPY_FILE_TO_BUFFER'),
			(pe.COPY_FILE_TO_PATH = 'COPY_FILE_TO_PATH'),
			(pe.CREATE_PREPARED = 'CREATE_PREPARED'),
			(pe.DISCONNECT = 'DISCONNECT'),
			(pe.DROP_FILE = 'DROP_FILE'),
			(pe.DROP_FILES = 'DROP_FILES'),
			(pe.EXPORT_FILE_STATISTICS = 'EXPORT_FILE_STATISTICS'),
			(pe.FETCH_QUERY_RESULTS = 'FETCH_QUERY_RESULTS'),
			(pe.FLUSH_FILES = 'FLUSH_FILES'),
			(pe.GET_FEATURE_FLAGS = 'GET_FEATURE_FLAGS'),
			(pe.GET_TABLE_NAMES = 'GET_TABLE_NAMES'),
			(pe.GET_VERSION = 'GET_VERSION'),
			(pe.GLOB_FILE_INFOS = 'GLOB_FILE_INFOS'),
			(pe.INSERT_ARROW_FROM_IPC_STREAM = 'INSERT_ARROW_FROM_IPC_STREAM'),
			(pe.INSERT_CSV_FROM_PATH = 'IMPORT_CSV_FROM_PATH'),
			(pe.INSERT_JSON_FROM_PATH = 'IMPORT_JSON_FROM_PATH'),
			(pe.INSTANTIATE = 'INSTANTIATE'),
			(pe.OPEN = 'OPEN'),
			(pe.PING = 'PING'),
			(pe.REGISTER_FILE_BUFFER = 'REGISTER_FILE_BUFFER'),
			(pe.REGISTER_FILE_HANDLE = 'REGISTER_FILE_HANDLE'),
			(pe.REGISTER_FILE_URL = 'REGISTER_FILE_URL'),
			(pe.RESET = 'RESET'),
			(pe.RUN_PREPARED = 'RUN_PREPARED'),
			(pe.RUN_QUERY = 'RUN_QUERY'),
			(pe.SEND_PREPARED = 'SEND_PREPARED'),
			(pe.SEND_QUERY = 'SEND_QUERY'),
			(pe.TOKENIZE = 'TOKENIZE'),
			pe
		))(ge || {}),
		Ze = ((qe) => (
			(qe.CONNECTION_INFO = 'CONNECTION_INFO'),
			(qe.ERROR = 'ERROR'),
			(qe.FEATURE_FLAGS = 'FEATURE_FLAGS'),
			(qe.FILE_BUFFER = 'FILE_BUFFER'),
			(qe.FILE_INFOS = 'FILE_INFOS'),
			(qe.FILE_SIZE = 'FILE_SIZE'),
			(qe.FILE_STATISTICS = 'FILE_STATISTICS'),
			(qe.LOG = 'LOG'),
			(qe.OK = 'OK'),
			(qe.PREPARED_STATEMENT_ID = 'PREPARED_STATEMENT_ID'),
			(qe.QUERY_PLAN = 'QUERY_PLAN'),
			(qe.QUERY_RESULT = 'QUERY_RESULT'),
			(qe.QUERY_RESULT_CHUNK = 'QUERY_RESULT_CHUNK'),
			(qe.QUERY_START = 'QUERY_START'),
			(qe.REGISTERED_FILE = 'REGISTERED_FILE'),
			(qe.SCRIPT_TOKENS = 'SCRIPT_TOKENS'),
			(qe.SUCCESS = 'SUCCESS'),
			(qe.TABLE_NAMES = 'TABLE_NAMES'),
			(qe.VERSION_STRING = 'VERSION_STRING'),
			qe
		))(Ze || {});
	function ao(i, e) {
		switch (e.typeId) {
			case S.Type.Binary:
				return { name: i, type: 'binary' };
			case S.Type.Bool:
				return { name: i, type: 'bool' };
			case S.Type.Date:
				return { name: i, type: 'date' };
			case S.Type.DateDay:
				return { name: i, type: 'date32[d]' };
			case S.Type.DateMillisecond:
				return { name: i, type: 'date64[ms]' };
			case S.Type.Decimal: {
				let t = e;
				return { name: i, type: 'decimal', precision: t.precision, scale: t.scale };
			}
			case S.Type.Float:
				return { name: i, type: 'float' };
			case S.Type.Float16:
				return { name: i, type: 'float16' };
			case S.Type.Float32:
				return { name: i, type: 'float32' };
			case S.Type.Float64:
				return { name: i, type: 'float64' };
			case S.Type.Int:
				return { name: i, type: 'int32' };
			case S.Type.Int16:
				return { name: i, type: 'int16' };
			case S.Type.Int32:
				return { name: i, type: 'int32' };
			case S.Type.Int64:
				return { name: i, type: 'int64' };
			case S.Type.Uint16:
				return { name: i, type: 'uint16' };
			case S.Type.Uint32:
				return { name: i, type: 'uint32' };
			case S.Type.Uint64:
				return { name: i, type: 'uint64' };
			case S.Type.Uint8:
				return { name: i, type: 'uint8' };
			case S.Type.IntervalDayTime:
				return { name: i, type: 'interval[dt]' };
			case S.Type.IntervalYearMonth:
				return { name: i, type: 'interval[m]' };
			case S.Type.List: {
				let t = e;
				return { name: i, type: 'list', children: [ao(t.valueField.name, t.valueField.type)] };
			}
			case S.Type.FixedSizeBinary:
				return { name: i, type: 'fixedsizebinary', byteWidth: e.byteWidth };
			case S.Type.Null:
				return { name: i, type: 'null' };
			case S.Type.Utf8:
				return { name: i, type: 'utf8' };
			case S.Type.Struct:
				return { name: i, type: 'struct', children: e.children.map((r) => ao(r.name, r.type)) };
			case S.Type.Time:
				return { name: i, type: 'time[s]' };
			case S.Type.TimeMicrosecond:
				return { name: i, type: 'time[us]' };
			case S.Type.TimeMillisecond:
				return { name: i, type: 'time[ms]' };
			case S.Type.TimeNanosecond:
				return { name: i, type: 'time[ns]' };
			case S.Type.TimeSecond:
				return { name: i, type: 'time[s]' };
			case S.Type.Timestamp:
				return { name: i, type: 'timestamp', timezone: e.timezone || void 0 };
			case S.Type.TimestampSecond:
				return { name: i, type: 'timestamp[s]', timezone: e.timezone || void 0 };
			case S.Type.TimestampMicrosecond:
				return { name: i, type: 'timestamp[us]', timezone: e.timezone || void 0 };
			case S.Type.TimestampNanosecond:
				return { name: i, type: 'timestamp[ns]', timezone: e.timezone || void 0 };
			case S.Type.TimestampMillisecond:
				return { name: i, type: 'timestamp[ms]', timezone: e.timezone || void 0 };
		}
		throw new Error(`unsupported arrow type: ${e.toString()}`);
	}
	var uf = class {
		constructor() {
			this._bindings = null;
			this._nextMessageId = 0;
		}
		log(e) {
			this.postMessage(
				{ messageId: this._nextMessageId++, requestId: 0, type: Ze.LOG, data: e },
				[]
			);
		}
		sendOK(e) {
			this.postMessage(
				{ messageId: this._nextMessageId++, requestId: e.messageId, type: Ze.OK, data: null },
				[]
			);
		}
		failWith(e, t) {
			let r = { name: t.name, message: t.message, stack: t.stack || void 0 };
			this.postMessage(
				{ messageId: this._nextMessageId++, requestId: e.messageId, type: Ze.ERROR, data: r },
				[]
			);
		}
		async onMessage(e) {
			switch (e.type) {
				case ge.PING:
					this.sendOK(e);
					return;
				case ge.INSTANTIATE:
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
					case ge.GET_VERSION:
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: Ze.VERSION_STRING,
								data: this._bindings.getVersion()
							},
							[]
						);
						break;
					case ge.GET_FEATURE_FLAGS:
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: Ze.FEATURE_FLAGS,
								data: this._bindings.getFeatureFlags()
							},
							[]
						);
						break;
					case ge.RESET:
						this._bindings.reset(), this.sendOK(e);
						break;
					case ge.OPEN:
						this._bindings.open(e.data), this.sendOK(e);
						break;
					case ge.DROP_FILE:
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: Ze.SUCCESS,
								data: this._bindings.dropFile(e.data)
							},
							[]
						);
						break;
					case ge.DROP_FILES:
						this._bindings.dropFiles(), this.sendOK(e);
						break;
					case ge.FLUSH_FILES:
						this._bindings.flushFiles(), this.sendOK(e);
						break;
					case ge.CONNECT: {
						let t = this._bindings.connect();
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: Ze.CONNECTION_INFO,
								data: t.useUnsafe((r, n) => n)
							},
							[]
						);
						break;
					}
					case ge.DISCONNECT:
						this._bindings.disconnect(e.data), this.sendOK(e);
						break;
					case ge.CREATE_PREPARED: {
						let t = this._bindings.createPrepared(e.data[0], e.data[1]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: Ze.PREPARED_STATEMENT_ID,
								data: t
							},
							[]
						);
						break;
					}
					case ge.CLOSE_PREPARED: {
						this._bindings.closePrepared(e.data[0], e.data[1]), this.sendOK(e);
						break;
					}
					case ge.RUN_PREPARED: {
						let t = this._bindings.runPrepared(e.data[0], e.data[1], e.data[2]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: Ze.QUERY_RESULT,
								data: t
							},
							[t.buffer]
						);
						break;
					}
					case ge.RUN_QUERY: {
						let t = this._bindings.runQuery(e.data[0], e.data[1]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: Ze.QUERY_RESULT,
								data: t
							},
							[t.buffer]
						);
						break;
					}
					case ge.SEND_PREPARED: {
						let t = this._bindings.sendPrepared(e.data[0], e.data[1], e.data[2]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: Ze.QUERY_START,
								data: t
							},
							[t.buffer]
						);
						break;
					}
					case ge.SEND_QUERY: {
						let t = this._bindings.sendQuery(e.data[0], e.data[1]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: Ze.QUERY_START,
								data: t
							},
							[t.buffer]
						);
						break;
					}
					case ge.FETCH_QUERY_RESULTS: {
						let t = this._bindings.fetchQueryResults(e.data);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: Ze.QUERY_RESULT_CHUNK,
								data: t
							},
							[t.buffer]
						);
						break;
					}
					case ge.GET_TABLE_NAMES: {
						let t = this._bindings.getTableNames(e.data[0], e.data[1]);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: Ze.TABLE_NAMES,
								data: t
							},
							[]
						);
						break;
					}
					case ge.GLOB_FILE_INFOS: {
						let t = this._bindings.globFiles(e.data);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: Ze.FILE_INFOS,
								data: t
							},
							[]
						);
						break;
					}
					case ge.REGISTER_FILE_URL:
						this._bindings.registerFileURL(e.data[0], e.data[1]), this.sendOK(e);
						break;
					case ge.REGISTER_FILE_BUFFER:
						this._bindings.registerFileBuffer(e.data[0], e.data[1]), this.sendOK(e);
						break;
					case ge.REGISTER_FILE_HANDLE:
						this._bindings.registerFileHandle(e.data[0], e.data[1]), this.sendOK(e);
						break;
					case ge.COPY_FILE_TO_PATH:
						this._bindings.copyFileToPath(e.data[0], e.data[1]), this.sendOK(e);
						break;
					case ge.COPY_FILE_TO_BUFFER: {
						let t = this._bindings.copyFileToBuffer(e.data);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: Ze.FILE_BUFFER,
								data: t
							},
							[]
						);
						break;
					}
					case ge.COLLECT_FILE_STATISTICS:
						this._bindings.collectFileStatistics(e.data[0], e.data[1]), this.sendOK(e);
						break;
					case ge.EXPORT_FILE_STATISTICS: {
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: Ze.FILE_STATISTICS,
								data: this._bindings.exportFileStatistics(e.data)
							},
							[]
						);
						break;
					}
					case ge.INSERT_ARROW_FROM_IPC_STREAM: {
						this._bindings.insertArrowFromIPCStream(e.data[0], e.data[1], e.data[2]),
							this.sendOK(e);
						break;
					}
					case ge.INSERT_CSV_FROM_PATH: {
						this._bindings.insertCSVFromPath(e.data[0], e.data[1], e.data[2]), this.sendOK(e);
						break;
					}
					case ge.INSERT_JSON_FROM_PATH: {
						this._bindings.insertJSONFromPath(e.data[0], e.data[1], e.data[2]), this.sendOK(e);
						break;
					}
					case ge.TOKENIZE: {
						let t = this._bindings.tokenize(e.data);
						this.postMessage(
							{
								messageId: this._nextMessageId++,
								requestId: e.messageId,
								type: Ze.SCRIPT_TOKENS,
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
	var S0 = {},
		UR = (function () {
			var i = S0.url;
			return function (e) {
				e = e || {};
				var t = typeof e != 'undefined' ? e : {},
					r,
					n;
				t.ready = new Promise(function (s, a) {
					(r = s), (n = a);
				});
				var o = {},
					l;
				for (l in t) t.hasOwnProperty(l) && (o[l] = t[l]);
				var _ = [],
					v = './this.program',
					B = function (s, a) {
						throw a;
					},
					D = typeof window == 'object',
					N = typeof importScripts == 'function',
					W =
						typeof process == 'object' &&
						typeof process.versions == 'object' &&
						typeof process.versions.node == 'string',
					K = '';
				function Re(s) {
					return t.locateFile ? t.locateFile(s, K) : K + s;
				}
				var Ae, $t, pt, fs;
				function qe(s) {
					if (!(s instanceof Io)) {
						var a = s;
						Si('exiting due to exception: ' + a);
					}
				}
				var sn, on;
				W
					? (N ? (K = Du().dirname(K) + '/') : (K = __dirname + '/'),
					  (Ae = function (a, u) {
							return (
								sn || (sn = cf()),
								on || (on = Du()),
								(a = on.normalize(a)),
								sn.readFileSync(a, u ? null : 'utf8')
							);
					  }),
					  (pt = function (a) {
							var u = Ae(a, !0);
							return u.buffer || (u = new Uint8Array(u)), co(u.buffer), u;
					  }),
					  ($t = function (a, u, c) {
							sn || (sn = cf()),
								on || (on = Du()),
								(a = on.normalize(a)),
								sn.readFile(a, function (d, f) {
									d ? c(d) : u(f.buffer);
								});
					  }),
					  process.argv.length > 1 && (v = process.argv[1].replace(/\\/g, '/')),
					  (_ = process.argv.slice(2)),
					  process.on('uncaughtException', function (s) {
							if (!(s instanceof Io)) throw s;
					  }),
					  process.on('unhandledRejection', function (s) {
							throw s;
					  }),
					  (B = function (s, a) {
							if (Eu()) throw ((process.exitCode = s), a);
							qe(a), process.exit(s);
					  }),
					  (t.inspect = function () {
							return '[Emscripten Module object]';
					  }))
					: (D || N) &&
					  (N
							? (K = self.location.href)
							: typeof document != 'undefined' &&
							  document.currentScript &&
							  (K = document.currentScript.src),
					  i && (K = i),
					  K.indexOf('blob:') !== 0
							? (K = K.substr(0, K.replace(/[?#].*/, '').lastIndexOf('/') + 1))
							: (K = ''),
					  (Ae = function (s) {
							var a = new XMLHttpRequest();
							return a.open('GET', s, !1), a.send(null), a.responseText;
					  }),
					  N &&
							(pt = function (s) {
								var a = new XMLHttpRequest();
								return (
									a.open('GET', s, !1),
									(a.responseType = 'arraybuffer'),
									a.send(null),
									new Uint8Array(a.response)
								);
							}),
					  ($t = function (s, a, u) {
							var c = new XMLHttpRequest();
							c.open('GET', s, !0),
								(c.responseType = 'arraybuffer'),
								(c.onload = function () {
									if (c.status == 200 || (c.status == 0 && c.response)) {
										a(c.response);
										return;
									}
									u();
								}),
								(c.onerror = u),
								c.send(null);
					  }),
					  (fs = function (s) {
							document.title = s;
					  }));
				var O0 = t.print || console.log.bind(console),
					Si = t.printErr || console.warn.bind(console);
				for (l in o) o.hasOwnProperty(l) && (t[l] = o[l]);
				(o = null),
					t.arguments && (_ = t.arguments),
					t.thisProgram && (v = t.thisProgram),
					t.quit && (B = t.quit);
				var _f = 0,
					ot = function (s) {
						_f = s;
					},
					E0 = function () {
						return _f;
					},
					hs;
				t.wasmBinary && (hs = t.wasmBinary);
				var M0 = t.noExitRuntime || !0;
				typeof WebAssembly != 'object' && Bt('no native wasm support detected');
				var uo,
					Fu = !1,
					pe;
				function co(s, a) {
					s || Bt('Assertion failed: ' + a);
				}
				function C0(s) {
					var a = t['_' + s];
					return co(a, 'Cannot call unknown function ' + s + ', make sure it is exported'), a;
				}
				function R0(s, a, u, c, d) {
					var f = {
						string: function (V) {
							var Z = 0;
							if (V != null && V !== 0) {
								var le = (V.length << 2) + 1;
								(Z = Lu(le)), Ou(V, Z, le);
							}
							return Z;
						},
						array: function (V) {
							var Z = Lu(V.length);
							return vf(V, Z), Z;
						}
					};
					function h(V) {
						return a === 'string' ? an(V) : a === 'boolean' ? Boolean(V) : V;
					}
					var p = C0(s),
						y = [],
						m = 0;
					if (c)
						for (var b = 0; b < c.length; b++) {
							var j = f[u[b]];
							j ? (m === 0 && (m = w()), (y[b] = j(c[b]))) : (y[b] = c[b]);
						}
					var A = p.apply(null, y);
					function E(V) {
						return m !== 0 && T(m), h(V);
					}
					return (A = E(A)), A;
				}
				var mf = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : void 0;
				function bf(s, a, u) {
					for (var c = a + u, d = a; s[d] && !(d >= c); ) ++d;
					if (d - a > 16 && s.subarray && mf) return mf.decode(s.subarray(a, d));
					for (var f = ''; a < d; ) {
						var h = s[a++];
						if (!(h & 128)) {
							f += String.fromCharCode(h);
							continue;
						}
						var p = s[a++] & 63;
						if ((h & 224) == 192) {
							f += String.fromCharCode(((h & 31) << 6) | p);
							continue;
						}
						var y = s[a++] & 63;
						if (
							((h & 240) == 224
								? (h = ((h & 15) << 12) | (p << 6) | y)
								: (h = ((h & 7) << 18) | (p << 12) | (y << 6) | (s[a++] & 63)),
							h < 65536)
						)
							f += String.fromCharCode(h);
						else {
							var m = h - 65536;
							f += String.fromCharCode(55296 | (m >> 10), 56320 | (m & 1023));
						}
					}
					return f;
				}
				function an(s, a) {
					return s ? bf(Hi, s, a) : '';
				}
				function gf(s, a, u, c) {
					if (!(c > 0)) return 0;
					for (var d = u, f = u + c - 1, h = 0; h < s.length; ++h) {
						var p = s.charCodeAt(h);
						if (p >= 55296 && p <= 57343) {
							var y = s.charCodeAt(++h);
							p = (65536 + ((p & 1023) << 10)) | (y & 1023);
						}
						if (p <= 127) {
							if (u >= f) break;
							a[u++] = p;
						} else if (p <= 2047) {
							if (u + 1 >= f) break;
							(a[u++] = 192 | (p >> 6)), (a[u++] = 128 | (p & 63));
						} else if (p <= 65535) {
							if (u + 2 >= f) break;
							(a[u++] = 224 | (p >> 12)),
								(a[u++] = 128 | ((p >> 6) & 63)),
								(a[u++] = 128 | (p & 63));
						} else {
							if (u + 3 >= f) break;
							(a[u++] = 240 | (p >> 18)),
								(a[u++] = 128 | ((p >> 12) & 63)),
								(a[u++] = 128 | ((p >> 6) & 63)),
								(a[u++] = 128 | (p & 63));
						}
					}
					return (a[u] = 0), u - d;
				}
				function Ou(s, a, u) {
					return gf(s, Hi, a, u);
				}
				function U0(s) {
					for (var a = 0, u = 0; u < s.length; ++u) {
						var c = s.charCodeAt(u);
						c >= 55296 &&
							c <= 57343 &&
							(c = (65536 + ((c & 1023) << 10)) | (s.charCodeAt(++u) & 1023)),
							c <= 127 ? ++a : c <= 2047 ? (a += 2) : c <= 65535 ? (a += 3) : (a += 4);
					}
					return a;
				}
				function vf(s, a) {
					ni.set(s, a);
				}
				function k0(s, a, u) {
					for (var c = 0; c < s.length; ++c) ni[a++ >> 0] = s.charCodeAt(c);
					u || (ni[a >> 0] = 0);
				}
				function V0(s, a) {
					return s % a > 0 && (s += a - (s % a)), s;
				}
				var jf, ni, Hi, ps, wf, x, P0, N0, L0;
				function Tf(s) {
					(jf = s),
						(t.HEAP8 = ni = new Int8Array(s)),
						(t.HEAP16 = ps = new Int16Array(s)),
						(t.HEAP32 = x = new Int32Array(s)),
						(t.HEAPU8 = Hi = new Uint8Array(s)),
						(t.HEAPU16 = wf = new Uint16Array(s)),
						(t.HEAPU32 = P0 = new Uint32Array(s)),
						(t.HEAPF32 = N0 = new Float32Array(s)),
						(t.HEAPF64 = L0 = new Float64Array(s));
				}
				var LR = t.INITIAL_MEMORY || 16777216,
					$,
					If = [],
					Bf = [],
					x0 = [],
					Sf = [],
					q0 = !1,
					W0 = !1,
					z0 = 0;
				function Eu() {
					return M0 || z0 > 0;
				}
				function H0() {
					if (t.preRun)
						for (typeof t.preRun == 'function' && (t.preRun = [t.preRun]); t.preRun.length; )
							K0(t.preRun.shift());
					lo(If);
				}
				function Y0() {
					(q0 = !0), lo(Bf);
				}
				function G0() {
					lo(x0);
				}
				function $0() {
					W0 = !0;
				}
				function J0() {
					if (t.postRun)
						for (typeof t.postRun == 'function' && (t.postRun = [t.postRun]); t.postRun.length; )
							X0(t.postRun.shift());
					lo(Sf);
				}
				function K0(s) {
					If.unshift(s);
				}
				function Z0(s) {
					Bf.unshift(s);
				}
				function X0(s) {
					Sf.unshift(s);
				}
				var Or = 0,
					Mu = null,
					ys = null;
				function Q0(s) {
					Or++, t.monitorRunDependencies && t.monitorRunDependencies(Or);
				}
				function ej(s) {
					if (
						(Or--,
						t.monitorRunDependencies && t.monitorRunDependencies(Or),
						Or == 0 && (Mu !== null && (clearInterval(Mu), (Mu = null)), ys))
					) {
						var a = ys;
						(ys = null), a();
					}
				}
				(t.preloadedImages = {}), (t.preloadedAudios = {});
				function Bt(s) {
					t.onAbort && t.onAbort(s),
						(s = 'Aborted(' + s + ')'),
						Si(s),
						(Fu = !0),
						(pe = 1),
						(s += '. Build with -s ASSERTIONS=1 for more info.');
					var a = new WebAssembly.RuntimeError(s);
					throw (n(a), a);
				}
				var tj = 'data:application/octet-stream;base64,';
				function Af(s) {
					return s.startsWith(tj);
				}
				var St;
				t.locateFile
					? ((St = './duckdb-wasm.wasm'), Af(St) || (St = Re(St)))
					: (St = new URL('duckdb_wasm.wasm', S0.url).toString());
				function Df(s) {
					try {
						if (s == St && hs) return new Uint8Array(hs);
						if (pt) return pt(s);
						throw 'both async and sync fetching of the wasm failed';
					} catch (a) {
						Bt(a);
					}
				}
				function ij() {
					return !hs && (D || N) && typeof fetch == 'function'
						? fetch(St, { credentials: 'same-origin' })
								.then(function (s) {
									if (!s.ok) throw "failed to load wasm binary file at '" + St + "'";
									return s.arrayBuffer();
								})
								.catch(function () {
									return Df(St);
								})
						: Promise.resolve().then(function () {
								return Df(St);
						  });
				}
				function rj() {
					var s = { a: Cw };
					function a(h, p) {
						var y = h.exports;
						(t.asm = y),
							(uo = t.asm.Oe),
							Tf(uo.buffer),
							($ = t.asm.Re),
							Z0(t.asm.Pe),
							ej('wasm-instantiate');
					}
					Q0('wasm-instantiate');
					function u(h) {
						a(h.instance);
					}
					function c(h) {
						return ij()
							.then(function (p) {
								return WebAssembly.instantiate(p, s);
							})
							.then(function (p) {
								return p;
							})
							.then(h, function (p) {
								Si('failed to asynchronously prepare wasm: ' + p), Bt(p);
							});
					}
					function d() {
						return !hs &&
							typeof WebAssembly.instantiateStreaming == 'function' &&
							!Af(St) &&
							typeof fetch == 'function'
							? fetch(St, { credentials: 'same-origin' }).then(function (h) {
									var p = WebAssembly.instantiateStreaming(h, s);
									return p.then(u, function (y) {
										return (
											Si('wasm streaming compile failed: ' + y),
											Si('falling back to ArrayBuffer instantiation'),
											c(u)
										);
									});
							  })
							: c(u);
					}
					if (t.instantiateWasm)
						try {
							var f = t.instantiateWasm(s, a);
							return f;
						} catch (h) {
							return Si('Module.instantiateWasm callback failed with error: ' + h), !1;
						}
					return d().catch(n), {};
				}
				function lo(s) {
					for (; s.length > 0; ) {
						var a = s.shift();
						if (typeof a == 'function') {
							a(t);
							continue;
						}
						var u = a.func;
						typeof u == 'number'
							? a.arg === void 0
								? $.get(u)()
								: $.get(u)(a.arg)
							: u(a.arg === void 0 ? null : a.arg);
					}
				}
				function nj(s) {
					if (s instanceof Io || s == 'unwind') return pe;
					B(1, s);
				}
				function sj(s) {
					return bs(s + 16) + 16;
				}
				function Er(s) {
					(this.excPtr = s),
						(this.ptr = s - 16),
						(this.set_type = function (a) {
							x[(this.ptr + 4) >> 2] = a;
						}),
						(this.get_type = function () {
							return x[(this.ptr + 4) >> 2];
						}),
						(this.set_destructor = function (a) {
							x[(this.ptr + 8) >> 2] = a;
						}),
						(this.get_destructor = function () {
							return x[(this.ptr + 8) >> 2];
						}),
						(this.set_refcount = function (a) {
							x[this.ptr >> 2] = a;
						}),
						(this.set_caught = function (a) {
							(a = a ? 1 : 0), (ni[(this.ptr + 12) >> 0] = a);
						}),
						(this.get_caught = function () {
							return ni[(this.ptr + 12) >> 0] != 0;
						}),
						(this.set_rethrown = function (a) {
							(a = a ? 1 : 0), (ni[(this.ptr + 13) >> 0] = a);
						}),
						(this.get_rethrown = function () {
							return ni[(this.ptr + 13) >> 0] != 0;
						}),
						(this.init = function (a, u) {
							this.set_type(a),
								this.set_destructor(u),
								this.set_refcount(0),
								this.set_caught(!1),
								this.set_rethrown(!1);
						}),
						(this.add_ref = function () {
							var a = x[this.ptr >> 2];
							x[this.ptr >> 2] = a + 1;
						}),
						(this.release_ref = function () {
							var a = x[this.ptr >> 2];
							return (x[this.ptr >> 2] = a - 1), a === 1;
						});
				}
				function un(s) {
					(this.free = function () {
						xu(this.ptr), (this.ptr = 0);
					}),
						(this.set_base_ptr = function (a) {
							x[this.ptr >> 2] = a;
						}),
						(this.get_base_ptr = function () {
							return x[this.ptr >> 2];
						}),
						(this.set_adjusted_ptr = function (a) {
							x[(this.ptr + 4) >> 2] = a;
						}),
						(this.get_adjusted_ptr_addr = function () {
							return this.ptr + 4;
						}),
						(this.get_adjusted_ptr = function () {
							return x[(this.ptr + 4) >> 2];
						}),
						(this.get_exception_ptr = function () {
							var a = kf(this.get_exception_info().get_type());
							if (a) return x[this.get_base_ptr() >> 2];
							var u = this.get_adjusted_ptr();
							return u !== 0 ? u : this.get_base_ptr();
						}),
						(this.get_exception_info = function () {
							return new Er(this.get_base_ptr());
						}),
						s === void 0 ? ((this.ptr = bs(8)), this.set_adjusted_ptr(0)) : (this.ptr = s);
				}
				var fo = [];
				function oj(s) {
					s.add_ref();
				}
				var ho = 0;
				function aj(s) {
					var a = new un(s),
						u = a.get_exception_info();
					return (
						u.get_caught() || (u.set_caught(!0), ho--),
						u.set_rethrown(!1),
						fo.push(a),
						oj(u),
						a.get_exception_ptr()
					);
				}
				var Ai = 0;
				function Ff(s) {
					return xu(new Er(s).ptr);
				}
				function uj(s) {
					if (s.release_ref() && !s.get_rethrown()) {
						var a = s.get_destructor();
						a && $.get(a)(s.excPtr), Ff(s.excPtr);
					}
				}
				function cj() {
					I(0);
					var s = fo.pop();
					uj(s.get_exception_info()), s.free(), (Ai = 0);
				}
				function lj(s) {
					var a = new un(s),
						u = a.get_base_ptr();
					throw (Ai || (Ai = u), a.free(), u);
				}
				function dj() {
					var s = Ai;
					if (!s) return ot(0), 0 | 0;
					var a = new Er(s),
						u = a.get_type(),
						c = new un();
					if ((c.set_base_ptr(s), c.set_adjusted_ptr(s), !u)) return ot(0), c.ptr | 0;
					for (var d = Array.prototype.slice.call(arguments), f = 0; f < d.length; f++) {
						var h = d[f];
						if (h === 0 || h === u) break;
						if (ms(h, u, c.get_adjusted_ptr_addr())) return ot(h), c.ptr | 0;
					}
					return ot(u), c.ptr | 0;
				}
				function fj() {
					var s = Ai;
					if (!s) return ot(0), 0 | 0;
					var a = new Er(s),
						u = a.get_type(),
						c = new un();
					if ((c.set_base_ptr(s), c.set_adjusted_ptr(s), !u)) return ot(0), c.ptr | 0;
					for (var d = Array.prototype.slice.call(arguments), f = 0; f < d.length; f++) {
						var h = d[f];
						if (h === 0 || h === u) break;
						if (ms(h, u, c.get_adjusted_ptr_addr())) return ot(h), c.ptr | 0;
					}
					return ot(u), c.ptr | 0;
				}
				function hj() {
					var s = Ai;
					if (!s) return ot(0), 0 | 0;
					var a = new Er(s),
						u = a.get_type(),
						c = new un();
					if ((c.set_base_ptr(s), c.set_adjusted_ptr(s), !u)) return ot(0), c.ptr | 0;
					for (var d = Array.prototype.slice.call(arguments), f = 0; f < d.length; f++) {
						var h = d[f];
						if (h === 0 || h === u) break;
						if (ms(h, u, c.get_adjusted_ptr_addr())) return ot(h), c.ptr | 0;
					}
					return ot(u), c.ptr | 0;
				}
				function pj() {
					var s = Ai;
					if (!s) return ot(0), 0 | 0;
					var a = new Er(s),
						u = a.get_type(),
						c = new un();
					if ((c.set_base_ptr(s), c.set_adjusted_ptr(s), !u)) return ot(0), c.ptr | 0;
					for (var d = Array.prototype.slice.call(arguments), f = 0; f < d.length; f++) {
						var h = d[f];
						if (h === 0 || h === u) break;
						if (ms(h, u, c.get_adjusted_ptr_addr())) return ot(h), c.ptr | 0;
					}
					return ot(u), c.ptr | 0;
				}
				function yj() {
					var s = fo.pop();
					s || Bt('no exception to throw');
					var a = s.get_exception_info(),
						u = s.get_base_ptr();
					throw (
						(a.get_rethrown() ? s.free() : (fo.push(s), a.set_rethrown(!0), a.set_caught(!1), ho++),
						(Ai = u),
						u)
					);
				}
				function _j(s, a, u) {
					var c = new Er(s);
					throw (c.init(a, u), (Ai = s), ho++, s);
				}
				function mj() {
					return ho;
				}
				var it = {
					mappings: {},
					buffers: [null, [], []],
					printChar: function (s, a) {
						var u = it.buffers[s];
						a === 0 || a === 10 ? ((s === 1 ? O0 : Si)(bf(u, 0)), (u.length = 0)) : u.push(a);
					},
					varargs: void 0,
					get: function () {
						it.varargs += 4;
						var s = x[(it.varargs - 4) >> 2];
						return s;
					},
					getStr: function (s) {
						var a = an(s);
						return a;
					},
					get64: function (s, a) {
						return s;
					}
				};
				function bj(s, a, u, c, d) {}
				function gj(s, a) {
					return (s = it.getStr(s)), it.doAccess(s, a);
				}
				function vj() {
					Si('missing function: $SOCKFS'), Bt(-1);
				}
				function Of() {
					Si('missing function: $FS'), Bt(-1);
				}
				function cn(s) {
					var a = vj.getSocket(s);
					if (!a) throw new Of.ErrnoError(8);
					return a;
				}
				function jj(s) {
					return (x[Uf() >> 2] = s), s;
				}
				function Cu(s) {
					return (
						(s & 255) + '.' + ((s >> 8) & 255) + '.' + ((s >> 16) & 255) + '.' + ((s >> 24) & 255)
					);
				}
				function Ef(s) {
					var a = '',
						u = 0,
						c = 0,
						d = 0,
						f = 0,
						h = 0,
						p = 0,
						y = [
							s[0] & 65535,
							s[0] >> 16,
							s[1] & 65535,
							s[1] >> 16,
							s[2] & 65535,
							s[2] >> 16,
							s[3] & 65535,
							s[3] >> 16
						],
						m = !0,
						b = '';
					for (p = 0; p < 5; p++)
						if (y[p] !== 0) {
							m = !1;
							break;
						}
					if (m) {
						if (((b = Cu(y[6] | (y[7] << 16))), y[5] === -1)) return (a = '::ffff:'), (a += b), a;
						if (y[5] === 0)
							return (
								(a = '::'), b === '0.0.0.0' && (b = ''), b === '0.0.0.1' && (b = '1'), (a += b), a
							);
					}
					for (u = 0; u < 8; u++)
						y[u] === 0 && (u - d > 1 && (h = 0), (d = u), h++), h > c && ((c = h), (f = u - c + 1));
					for (u = 0; u < 8; u++) {
						if (c > 1 && y[u] === 0 && u >= f && u < f + c) {
							u === f && ((a += ':'), f === 0 && (a += ':'));
							continue;
						}
						(a += Number(Nu(y[u] & 65535)).toString(16)), (a += u < 7 ? ':' : '');
					}
					return a;
				}
				function Mf(s, a) {
					var u = ps[s >> 1],
						c = Nu(wf[(s + 2) >> 1]),
						d;
					switch (u) {
						case 2:
							if (a !== 16) return { errno: 28 };
							(d = x[(s + 4) >> 2]), (d = Cu(d));
							break;
						case 10:
							if (a !== 28) return { errno: 28 };
							(d = [x[(s + 8) >> 2], x[(s + 12) >> 2], x[(s + 16) >> 2], x[(s + 20) >> 2]]),
								(d = Ef(d));
							break;
						default:
							return { errno: 5 };
					}
					return { family: u, addr: d, port: c };
				}
				function Cf(s, a, u) {
					if (u && s === 0) return null;
					var c = Mf(s, a);
					if (c.errno) throw new Of.ErrnoError(c.errno);
					return (c.addr = At.lookup_addr(c.addr) || c.addr), c;
				}
				function wj(s, a, u) {
					var c = cn(s),
						d = Cf(a, u);
					return c.sock_ops.bind(c, d.addr, d.port), 0;
				}
				function Tj(s, a, u) {
					var c = cn(s),
						d = Cf(a, u);
					return c.sock_ops.connect(c, d.addr, d.port), 0;
				}
				function Ij(s, a, u) {
					return (it.varargs = u), 0;
				}
				function Bj(s, a) {}
				function Sj(s, a, u, c) {}
				function Aj(s, a, u) {}
				function po(s) {
					for (var a = s.split('.'), u = 0; u < 4; u++) {
						var c = Number(a[u]);
						if (isNaN(c)) return null;
						a[u] = c;
					}
					return (a[0] | (a[1] << 8) | (a[2] << 16) | (a[3] << 24)) >>> 0;
				}
				function yo(s) {
					return parseInt(s);
				}
				function Ru(s) {
					var a,
						u,
						c,
						d,
						f =
							/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
						h = [];
					if (!f.test(s)) return null;
					if (s === '::') return [0, 0, 0, 0, 0, 0, 0, 0];
					for (
						s.startsWith('::') ? (s = s.replace('::', 'Z:')) : (s = s.replace('::', ':Z:')),
							s.indexOf('.') > 0
								? ((s = s.replace(new RegExp('[.]', 'g'), ':')),
								  (a = s.split(':')),
								  (a[a.length - 4] = yo(a[a.length - 4]) + yo(a[a.length - 3]) * 256),
								  (a[a.length - 3] = yo(a[a.length - 2]) + yo(a[a.length - 1]) * 256),
								  (a = a.slice(0, a.length - 2)))
								: (a = s.split(':')),
							c = 0,
							d = 0,
							u = 0;
						u < a.length;
						u++
					)
						if (typeof a[u] == 'string')
							if (a[u] === 'Z') {
								for (d = 0; d < 8 - a.length + 1; d++) h[u + d] = 0;
								c = d - 1;
							} else h[u + c] = wo(parseInt(a[u], 16));
						else h[u + c] = a[u];
					return [
						(h[1] << 16) | h[0],
						(h[3] << 16) | h[2],
						(h[5] << 16) | h[4],
						(h[7] << 16) | h[6]
					];
				}
				function Rf(s, a) {
					Hi.fill(0, s, s + a);
				}
				function Uu(s, a, u, c, d) {
					switch (a) {
						case 2:
							(u = po(u)),
								Rf(s, 16),
								d && (x[d >> 2] = 16),
								(ps[s >> 1] = a),
								(x[(s + 4) >> 2] = u),
								(ps[(s + 2) >> 1] = wo(c));
							break;
						case 10:
							(u = Ru(u)),
								Rf(s, 28),
								d && (x[d >> 2] = 28),
								(x[s >> 2] = a),
								(x[(s + 8) >> 2] = u[0]),
								(x[(s + 12) >> 2] = u[1]),
								(x[(s + 16) >> 2] = u[2]),
								(x[(s + 20) >> 2] = u[3]),
								(ps[(s + 2) >> 1] = wo(c));
							break;
						default:
							return 5;
					}
					return 0;
				}
				var At = {
					address_map: { id: 1, addrs: {}, names: {} },
					lookup_name: function (s) {
						var a = po(s);
						if (a !== null || ((a = Ru(s)), a !== null)) return s;
						var u;
						if (At.address_map.addrs[s]) u = At.address_map.addrs[s];
						else {
							var c = At.address_map.id++;
							co(c < 65535, 'exceeded max address mappings of 65535'),
								(u = '172.29.' + (c & 255) + '.' + (c & 65280)),
								(At.address_map.names[u] = s),
								(At.address_map.addrs[s] = u);
						}
						return u;
					},
					lookup_addr: function (s) {
						return At.address_map.names[s] ? At.address_map.names[s] : null;
					}
				};
				function Dj(s, a, u) {
					var c = cn(s);
					if (!c.daddr) return -53;
					var d = Uu(a, c.family, At.lookup_name(c.daddr), c.dport, u);
					return 0;
				}
				function Fj() {
					return 42;
				}
				function Oj(s, a, u, c, d) {
					var f = cn(s);
					return a === 1 && u === 4
						? ((x[c >> 2] = f.error), (x[d >> 2] = 4), (f.error = null), 0)
						: -50;
				}
				function Ej(s, a, u) {
					return (it.varargs = u), 0;
				}
				function Mj(s, a, u) {
					return 0;
				}
				function Cj(s, a) {
					return (s = it.getStr(s)), it.doMkdir(s, a);
				}
				function Rj(s, a, u) {
					it.varargs = u;
				}
				function Uj(s, a, u, c, d, f) {
					var h = cn(s),
						p = h.sock_ops.recvmsg(h, u);
					if (!p) return 0;
					if (d) var y = Uu(d, h.family, At.lookup_name(p.addr), p.port, f);
					return Hi.set(p.buffer, a), p.buffer.byteLength;
				}
				function kj(s, a) {}
				function Vj(s) {}
				function Pj(s, a, u, c, d, f) {}
				function Nj(s) {
					return -50;
				}
				function Lj(s, a) {
					return cn(s), -52;
				}
				function xj(s, a, u) {}
				function qj(s, a) {}
				function Wj(s) {}
				function zj(s, a) {
					Bt(
						"To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
					);
				}
				function Hj(s, a) {
					Bt(
						"To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
					);
				}
				function Yj() {
					Bt('');
				}
				var ku;
				W
					? (ku = function () {
							var s = process.hrtime();
							return s[0] * 1e3 + s[1] / 1e6;
					  })
					: (ku = function () {
							return performance.now();
					  });
				var Gj = !0;
				function $j(s, a) {
					var u;
					if (s === 0) u = Date.now();
					else if ((s === 1 || s === 4) && Gj) u = ku();
					else return jj(28), -1;
					return (x[a >> 2] = (u / 1e3) | 0), (x[(a + 4) >> 2] = ((u % 1e3) * 1e3 * 1e3) | 0), 0;
				}
				function Jj(s, a) {
					return globalThis.DUCKDB_RUNTIME.createDirectory(t, s, a);
				}
				function Kj(s, a) {
					return globalThis.DUCKDB_RUNTIME.checkDirectory(t, s, a);
				}
				function Zj(s, a) {
					return globalThis.DUCKDB_RUNTIME.listDirectoryEntries(t, s, a);
				}
				function Xj(s, a) {
					return globalThis.DUCKDB_RUNTIME.removeDirectory(t, s, a);
				}
				function Qj(s) {
					return globalThis.DUCKDB_RUNTIME.closeFile(t, s);
				}
				function ew(s, a) {
					return globalThis.DUCKDB_RUNTIME.checkFile(t, s, a);
				}
				function tw(s) {
					return globalThis.DUCKDB_RUNTIME.getLastFileModificationTime(t, s);
				}
				function iw(s, a, u, c) {
					return globalThis.DUCKDB_RUNTIME.moveFile(t, s, a, u, c);
				}
				function rw(s) {
					return globalThis.DUCKDB_RUNTIME.openFile(t, s);
				}
				function nw(s, a, u, c) {
					return globalThis.DUCKDB_RUNTIME.readFile(t, s, a, u, c);
				}
				function sw(s, a) {
					return globalThis.DUCKDB_RUNTIME.truncateFile(t, s, a);
				}
				function ow(s, a, u, c) {
					return globalThis.DUCKDB_RUNTIME.writeFile(t, s, a, u, c);
				}
				function aw(s, a) {
					return globalThis.DUCKDB_RUNTIME.glob(t, s, a);
				}
				function uw(s) {
					return globalThis.DUCKDB_RUNTIME.testPlatformFeature(t, s);
				}
				function cw() {
					return 2147483648;
				}
				function lw(s, a, u) {
					Hi.copyWithin(s, a, a + u);
				}
				function dw(s) {
					try {
						return uo.grow((s - jf.byteLength + 65535) >>> 16), Tf(uo.buffer), 1;
					} catch (a) {}
				}
				function fw(s) {
					var a = Hi.length;
					s = s >>> 0;
					var u = 2147483648;
					if (s > u) return !1;
					for (var c = 1; c <= 4; c *= 2) {
						var d = a * (1 + 0.2 / c);
						d = Math.min(d, s + 100663296);
						var f = Math.min(u, V0(Math.max(s, d), 65536)),
							h = dw(f);
						if (h) return !0;
					}
					return !1;
				}
				var Vu = {};
				function hw() {
					return v || './this.program';
				}
				function _s() {
					if (!_s.strings) {
						var s =
								(
									(typeof navigator == 'object' && navigator.languages && navigator.languages[0]) ||
									'C'
								).replace('-', '_') + '.UTF-8',
							a = {
								USER: 'web_user',
								LOGNAME: 'web_user',
								PATH: '/',
								PWD: '/',
								HOME: '/home/web_user',
								LANG: s,
								_: hw()
							};
						for (var u in Vu) Vu[u] === void 0 ? delete a[u] : (a[u] = Vu[u]);
						var c = [];
						for (var u in a) c.push(u + '=' + a[u]);
						_s.strings = c;
					}
					return _s.strings;
				}
				function pw(s, a) {
					var u = 0;
					return (
						_s().forEach(function (c, d) {
							var f = a + u;
							(x[(s + d * 4) >> 2] = f), k0(c, f), (u += c.length + 1);
						}),
						0
					);
				}
				function yw(s, a) {
					var u = _s();
					x[s >> 2] = u.length;
					var c = 0;
					return (
						u.forEach(function (d) {
							c += d.length + 1;
						}),
						(x[a >> 2] = c),
						0
					);
				}
				function _w(s) {
					return 0;
				}
				function mw(s, a) {
					var u = s == 1 || s == 2 ? 2 : Bt();
					return (ni[a >> 0] = u), 0;
				}
				function bw(s, a, u, c, d, f) {
					var h = it.getStreamFromFD(s),
						p = it.doReadv(h, a, u, c);
					return (x[f >> 2] = p), 0;
				}
				function gw(s, a, u, c, d, f) {
					var h = it.getStreamFromFD(s),
						p = it.doWritev(h, a, u, c);
					return (x[f >> 2] = p), 0;
				}
				function vw(s, a, u, c) {
					var d = it.getStreamFromFD(s),
						f = it.doReadv(d, a, u);
					return (x[c >> 2] = f), 0;
				}
				function jw(s, a, u, c, d) {}
				function ww(s) {
					var a = it.getStreamFromFD(s);
					return a.stream_ops && a.stream_ops.fsync ? -a.stream_ops.fsync(a) : 0;
				}
				function Tw(s, a, u, c) {
					for (var d = 0, f = 0; f < u; f++) {
						for (var h = x[(a + f * 8) >> 2], p = x[(a + (f * 8 + 4)) >> 2], y = 0; y < p; y++)
							it.printChar(s, Hi[h + y]);
						d += p;
					}
					return (x[c >> 2] = d), 0;
				}
				function Iw() {
					return E0();
				}
				function Bw(s, a, u, c) {
					var d = 0,
						f = 0,
						h = 0,
						p = 0,
						y = 0,
						m = 0,
						b;
					function j(A, E, V, Z, le, Me) {
						var C, G, be, ye;
						return (
							(G = A === 10 ? 28 : 16),
							(le = A === 10 ? Ef(le) : Cu(le)),
							(C = bs(G)),
							(ye = Uu(C, A, le, Me)),
							co(!ye),
							(be = bs(32)),
							(x[(be + 4) >> 2] = A),
							(x[(be + 8) >> 2] = E),
							(x[(be + 12) >> 2] = V),
							(x[(be + 24) >> 2] = Z),
							(x[(be + 20) >> 2] = C),
							A === 10 ? (x[(be + 16) >> 2] = 28) : (x[(be + 16) >> 2] = 16),
							(x[(be + 28) >> 2] = 0),
							be
						);
					}
					if (
						(u &&
							((h = x[u >> 2]),
							(p = x[(u + 4) >> 2]),
							(y = x[(u + 8) >> 2]),
							(m = x[(u + 12) >> 2])),
						y && !m && (m = y === 2 ? 17 : 6),
						!y && m && (y = m === 17 ? 2 : 1),
						m === 0 && (m = 6),
						y === 0 && (y = 1),
						!s && !a)
					)
						return -2;
					if (h & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32) || (u !== 0 && x[u >> 2] & 2 && !s)) return -1;
					if (h & 32) return -2;
					if (y !== 0 && y !== 1 && y !== 2) return -7;
					if (p !== 0 && p !== 2 && p !== 10) return -6;
					if (a && ((a = an(a)), (f = parseInt(a, 10)), isNaN(f))) return h & 1024 ? -2 : -8;
					if (!s)
						return (
							p === 0 && (p = 2),
							(h & 1) == 0 && (p === 2 ? (d = jo(2130706433)) : (d = [0, 0, 0, 1])),
							(b = j(p, y, m, null, d, f)),
							(x[c >> 2] = b),
							0
						);
					if (((s = an(s)), (d = po(s)), d !== null))
						if (p === 0 || p === 2) p = 2;
						else if (p === 10 && h & 8) (d = [0, 0, jo(65535), d]), (p = 10);
						else return -2;
					else if (((d = Ru(s)), d !== null))
						if (p === 0 || p === 10) p = 10;
						else return -2;
					return d != null
						? ((b = j(p, y, m, s, d, f)), (x[c >> 2] = b), 0)
						: h & 4
						? -2
						: ((s = At.lookup_name(s)),
						  (d = po(s)),
						  p === 0 ? (p = 2) : p === 10 && (d = [0, 0, jo(65535), d]),
						  (b = j(p, y, m, null, d, f)),
						  (x[c >> 2] = b),
						  0);
				}
				function Sw() {
					if (typeof crypto == 'object' && typeof crypto.getRandomValues == 'function') {
						var s = new Uint8Array(1);
						return function () {
							return crypto.getRandomValues(s), s[0];
						};
					} else if (W)
						try {
							var a = $1('crypto');
							return function () {
								return a.randomBytes(1)[0];
							};
						} catch (u) {}
					return function () {
						Bt('randomDevice');
					};
				}
				function _o(s, a) {
					_o.randomDevice || (_o.randomDevice = Sw());
					for (var u = 0; u < a; u++) ni[(s + u) >> 0] = _o.randomDevice();
					return 0;
				}
				function Aw(s, a, u, c, d, f, h) {
					var p = Mf(s, a);
					if (p.errno) return -6;
					var y = p.port,
						m = p.addr,
						b = !1;
					if (u && c) {
						var j;
						if (h & 1 || !(j = At.lookup_addr(m))) {
							if (h & 8) return -2;
						} else m = j;
						var A = Ou(m, u, c);
						A + 1 >= c && (b = !0);
					}
					if (d && f) {
						y = '' + y;
						var A = Ou(y, d, f);
						A + 1 >= f && (b = !0);
					}
					return b ? -12 : 0;
				}
				function Dw(s) {
					return s;
				}
				function Fw(s) {
					ot(s);
				}
				function mo(s) {
					return s % 4 == 0 && (s % 100 != 0 || s % 400 == 0);
				}
				function Pu(s, a) {
					for (var u = 0, c = 0; c <= a; u += s[c++]);
					return u;
				}
				var bo = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
					go = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
				function vo(s, a) {
					for (var u = new Date(s.getTime()); a > 0; ) {
						var c = mo(u.getFullYear()),
							d = u.getMonth(),
							f = (c ? bo : go)[d];
						if (a > f - u.getDate())
							(a -= f - u.getDate() + 1),
								u.setDate(1),
								d < 11 ? u.setMonth(d + 1) : (u.setMonth(0), u.setFullYear(u.getFullYear() + 1));
						else return u.setDate(u.getDate() + a), u;
					}
					return u;
				}
				function Ow(s, a, u, c) {
					var d = x[(c + 40) >> 2],
						f = {
							tm_sec: x[c >> 2],
							tm_min: x[(c + 4) >> 2],
							tm_hour: x[(c + 8) >> 2],
							tm_mday: x[(c + 12) >> 2],
							tm_mon: x[(c + 16) >> 2],
							tm_year: x[(c + 20) >> 2],
							tm_wday: x[(c + 24) >> 2],
							tm_yday: x[(c + 28) >> 2],
							tm_isdst: x[(c + 32) >> 2],
							tm_gmtoff: x[(c + 36) >> 2],
							tm_zone: d ? an(d) : ''
						},
						h = an(u),
						p = {
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
					for (var y in p) h = h.replace(new RegExp(y, 'g'), p[y]);
					var m = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
						b = [
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
					function j(C, G, be) {
						for (var ye = typeof C == 'number' ? C.toString() : C || ''; ye.length < G; )
							ye = be[0] + ye;
						return ye;
					}
					function A(C, G) {
						return j(C, G, '0');
					}
					function E(C, G) {
						function be(yt) {
							return yt < 0 ? -1 : yt > 0 ? 1 : 0;
						}
						var ye;
						return (
							(ye = be(C.getFullYear() - G.getFullYear())) === 0 &&
								(ye = be(C.getMonth() - G.getMonth())) === 0 &&
								(ye = be(C.getDate() - G.getDate())),
							ye
						);
					}
					function V(C) {
						switch (C.getDay()) {
							case 0:
								return new Date(C.getFullYear() - 1, 11, 29);
							case 1:
								return C;
							case 2:
								return new Date(C.getFullYear(), 0, 3);
							case 3:
								return new Date(C.getFullYear(), 0, 2);
							case 4:
								return new Date(C.getFullYear(), 0, 1);
							case 5:
								return new Date(C.getFullYear() - 1, 11, 31);
							case 6:
								return new Date(C.getFullYear() - 1, 11, 30);
						}
					}
					function Z(C) {
						var G = vo(new Date(C.tm_year + 1900, 0, 1), C.tm_yday),
							be = new Date(G.getFullYear(), 0, 4),
							ye = new Date(G.getFullYear() + 1, 0, 4),
							yt = V(be),
							Yi = V(ye);
						return E(yt, G) <= 0
							? E(Yi, G) <= 0
								? G.getFullYear() + 1
								: G.getFullYear()
							: G.getFullYear() - 1;
					}
					var le = {
						'%a': function (C) {
							return m[C.tm_wday].substring(0, 3);
						},
						'%A': function (C) {
							return m[C.tm_wday];
						},
						'%b': function (C) {
							return b[C.tm_mon].substring(0, 3);
						},
						'%B': function (C) {
							return b[C.tm_mon];
						},
						'%C': function (C) {
							var G = C.tm_year + 1900;
							return A((G / 100) | 0, 2);
						},
						'%d': function (C) {
							return A(C.tm_mday, 2);
						},
						'%e': function (C) {
							return j(C.tm_mday, 2, ' ');
						},
						'%g': function (C) {
							return Z(C).toString().substring(2);
						},
						'%G': function (C) {
							return Z(C);
						},
						'%H': function (C) {
							return A(C.tm_hour, 2);
						},
						'%I': function (C) {
							var G = C.tm_hour;
							return G == 0 ? (G = 12) : G > 12 && (G -= 12), A(G, 2);
						},
						'%j': function (C) {
							return A(C.tm_mday + Pu(mo(C.tm_year + 1900) ? bo : go, C.tm_mon - 1), 3);
						},
						'%m': function (C) {
							return A(C.tm_mon + 1, 2);
						},
						'%M': function (C) {
							return A(C.tm_min, 2);
						},
						'%n': function () {
							return `
`;
						},
						'%p': function (C) {
							return C.tm_hour >= 0 && C.tm_hour < 12 ? 'AM' : 'PM';
						},
						'%S': function (C) {
							return A(C.tm_sec, 2);
						},
						'%t': function () {
							return '	';
						},
						'%u': function (C) {
							return C.tm_wday || 7;
						},
						'%U': function (C) {
							var G = new Date(C.tm_year + 1900, 0, 1),
								be = G.getDay() === 0 ? G : vo(G, 7 - G.getDay()),
								ye = new Date(C.tm_year + 1900, C.tm_mon, C.tm_mday);
							if (E(be, ye) < 0) {
								var yt = Pu(mo(ye.getFullYear()) ? bo : go, ye.getMonth() - 1) - 31,
									Yi = 31 - be.getDate(),
									Mr = Yi + yt + ye.getDate();
								return A(Math.ceil(Mr / 7), 2);
							}
							return E(be, G) === 0 ? '01' : '00';
						},
						'%V': function (C) {
							var G = new Date(C.tm_year + 1900, 0, 4),
								be = new Date(C.tm_year + 1901, 0, 4),
								ye = V(G),
								yt = V(be),
								Yi = vo(new Date(C.tm_year + 1900, 0, 1), C.tm_yday);
							if (E(Yi, ye) < 0) return '53';
							if (E(yt, Yi) <= 0) return '01';
							var Mr;
							return (
								ye.getFullYear() < C.tm_year + 1900
									? (Mr = C.tm_yday + 32 - ye.getDate())
									: (Mr = C.tm_yday + 1 - ye.getDate()),
								A(Math.ceil(Mr / 7), 2)
							);
						},
						'%w': function (C) {
							return C.tm_wday;
						},
						'%W': function (C) {
							var G = new Date(C.tm_year, 0, 1),
								be = G.getDay() === 1 ? G : vo(G, G.getDay() === 0 ? 1 : 7 - G.getDay() + 1),
								ye = new Date(C.tm_year + 1900, C.tm_mon, C.tm_mday);
							if (E(be, ye) < 0) {
								var yt = Pu(mo(ye.getFullYear()) ? bo : go, ye.getMonth() - 1) - 31,
									Yi = 31 - be.getDate(),
									Mr = Yi + yt + ye.getDate();
								return A(Math.ceil(Mr / 7), 2);
							}
							return E(be, G) === 0 ? '01' : '00';
						},
						'%y': function (C) {
							return (C.tm_year + 1900).toString().substring(2);
						},
						'%Y': function (C) {
							return C.tm_year + 1900;
						},
						'%z': function (C) {
							var G = C.tm_gmtoff,
								be = G >= 0;
							return (
								(G = Math.abs(G) / 60),
								(G = (G / 60) * 100 + (G % 60)),
								(be ? '+' : '-') + String('0000' + G).slice(-4)
							);
						},
						'%Z': function (C) {
							return C.tm_zone;
						},
						'%%': function () {
							return '%';
						}
					};
					for (var y in le) h.includes(y) && (h = h.replace(new RegExp(y, 'g'), le[y](f)));
					var Me = Mw(h, !1);
					return Me.length > a ? 0 : (vf(Me, s), Me.length - 1);
				}
				function Ew(s, a, u, c) {
					return Ow(s, a, u, c);
				}
				function Mw(s, a, u) {
					var c = u > 0 ? u : U0(s) + 1,
						d = new Array(c),
						f = gf(s, d, 0, d.length);
					return a && (d.length = f), d;
				}
				var Cw = {
						j: sj,
						A: aj,
						F: cj,
						b: dj,
						n: fj,
						I: hj,
						na: pj,
						i: Ff,
						ga: yj,
						u: _j,
						E: mj,
						e: lj,
						Ia: bj,
						za: gj,
						Ka: wj,
						Ja: Tj,
						N: Ij,
						Ba: Bj,
						Aa: Sj,
						Ne: Aj,
						Ea: Dj,
						va: Fj,
						Ha: Oj,
						Ra: Ej,
						Je: Mj,
						ya: Cj,
						qa: Rj,
						Fa: Uj,
						Le: kj,
						wa: Vj,
						Ga: Pj,
						La: Nj,
						Na: Lj,
						la: xj,
						ia: qj,
						xa: Wj,
						Pa: zj,
						Oa: Hj,
						fa: Yj,
						oa: $j,
						Ce: Jj,
						De: Kj,
						Ae: Zj,
						Be: Xj,
						ua: Qj,
						ye: ew,
						Fe: tw,
						ze: iw,
						He: rw,
						ha: nw,
						Ee: sw,
						Ge: ow,
						xe: aw,
						ta: uw,
						Sa: cw,
						eb: lw,
						ad: fw,
						Ua: pw,
						Va: yw,
						U: _w,
						Qa: mw,
						nb: bw,
						mb: gw,
						pa: vw,
						Qd: jw,
						Me: ww,
						ea: Tw,
						a: Iw,
						Ma: Bw,
						Ca: _o,
						Da: Aw,
						Y: fI,
						L: JT,
						T: AT,
						vc: pS,
						Z: dI,
						O: lI,
						sa: ST,
						wc: hS,
						t: PT,
						W: sI,
						Jb: MT,
						$: zT,
						X: nI,
						Ub: ET,
						d: gT,
						ba: uI,
						C: HT,
						Eb: r1,
						c: vT,
						_: KT,
						ja: hI,
						h: wT,
						Cb: s1,
						m: BT,
						ra: XT,
						o: TT,
						w: kT,
						z: VT,
						S: UT,
						y: NT,
						v: xT,
						p: tI,
						M: aI,
						J: oI,
						Zb: PS,
						ac: US,
						dc: MS,
						kc: BS,
						_b: VS,
						Db: n1,
						uc: yS,
						bc: RS,
						lc: IS,
						te: gI,
						Od: ZI,
						Hd: nB,
						ge: MI,
						Pb: GS,
						hd: OB,
						Ib: QS,
						Gb: t1,
						Yd: qI,
						Nd: XI,
						vb: f1,
						Vc: WB,
						Xd: WI,
						Cc: uS,
						Qb: YS,
						Fb: i1,
						oe: II,
						Ud: YI,
						yc: fS,
						Id: rB,
						td: bB,
						Fd: oB,
						ib: T1,
						Vd: HI,
						ic: AS,
						Sd: $I,
						gd: EB,
						cb: D1,
						Kb: XS,
						jd: DB,
						$d: NI,
						Zd: xI,
						_a: M1,
						tb: p1,
						Jd: iB,
						db: A1,
						Bb: o1,
						Td: GI,
						Cd: cB,
						fd: MB,
						Ed: aB,
						Dd: uB,
						zd: fB,
						hc: DS,
						Xb: LS,
						me: SI,
						ee: RI,
						mc: TS,
						de: UI,
						Pd: KI,
						pc: vS,
						oc: jS,
						ke: DI,
						fe: CI,
						Md: QI,
						we: _I,
						Ec: oS,
						nc: wS,
						$b: kS,
						Dc: aS,
						sc: mS,
						Sc: YB,
						sb: y1,
						zc: dS,
						tc: _S,
						qd: jB,
						ld: SB,
						Bc: cS,
						rc: bS,
						wb: d1,
						Wb: xS,
						nd: IB,
						bd: kB,
						Nc: ZB,
						Mc: XB,
						Kc: eS,
						Lc: QB,
						rd: vB,
						zb: u1,
						Zc: NB,
						Hb: e1,
						fc: OS,
						kb: j1,
						Xc: xB,
						qc: gS,
						Sb: zS,
						s: mT,
						k: jT,
						B: $T,
						ca: eI,
						pb: b1,
						D: GT,
						da: QT,
						qb: m1,
						f: bT,
						V: FT,
						R: YT,
						xc: DT,
						g: OT,
						l: IT,
						Ke: pI,
						q: RT,
						r: CT,
						ka: cI,
						x: LT,
						P: ZT,
						Q: rI,
						K: qT,
						Ie: yI,
						ma: iI,
						aa: WT,
						Bd: lB,
						ob: g1,
						id: FB,
						Yb: NS,
						Ac: lS,
						jc: SS,
						Lb: ZS,
						gb: B1,
						re: jI,
						Wd: zI,
						ub: h1,
						ab: O1,
						xd: pB,
						yd: hB,
						Tb: WS,
						ud: mB,
						Nb: JS,
						Mb: KS,
						Oc: KB,
						qe: wI,
						vd: _B,
						Ad: dB,
						Uc: zB,
						Hc: rS,
						xb: l1,
						yb: c1,
						fb: S1,
						je: FI,
						sd: gB,
						Ob: $S,
						Fc: sS,
						Rc: GB,
						pe: TI,
						bb: F1,
						ue: bI,
						be: VI,
						ce: kI,
						Gd: sB,
						$a: E1,
						$c: VB,
						Jc: tS,
						Ic: iS,
						_c: PB,
						Wc: qB,
						md: BB,
						hb: I1,
						ed: CB,
						Za: C1,
						Gc: nS,
						jb: w1,
						ve: mI,
						Rd: JI,
						cd: UB,
						Pc: JB,
						he: EI,
						cc: CS,
						se: vI,
						le: AI,
						dd: RB,
						Ld: eB,
						Kd: tB,
						Yc: LB,
						rb: _1,
						kd: AB,
						gc: FS,
						ne: BI,
						Ya: R1,
						Qc: $B,
						lb: v1,
						ae: PI,
						Tc: HB,
						Wa: k1,
						Xa: U1,
						ec: ES,
						ie: OI,
						pd: wB,
						_d: LI,
						Rb: HS,
						Vb: qS,
						Ab: a1,
						wd: yB,
						od: TB,
						H: Dw,
						G: Fw,
						Ta: Ew
					},
					xR = rj(),
					Rw = (t.___wasm_call_ctors = function () {
						return (Rw = t.___wasm_call_ctors = t.asm.Pe).apply(null, arguments);
					}),
					Uw = (t._main = function () {
						return (Uw = t._main = t.asm.Qe).apply(null, arguments);
					}),
					kw = (t._duckdb_web_fs_glob_add_path = function () {
						return (kw = t._duckdb_web_fs_glob_add_path = t.asm.Se).apply(null, arguments);
					}),
					Vw = (t._duckdb_web_clear_response = function () {
						return (Vw = t._duckdb_web_clear_response = t.asm.Te).apply(null, arguments);
					}),
					Pw = (t._duckdb_web_fail_with = function () {
						return (Pw = t._duckdb_web_fail_with = t.asm.Ue).apply(null, arguments);
					}),
					Nw = (t._duckdb_web_reset = function () {
						return (Nw = t._duckdb_web_reset = t.asm.Ve).apply(null, arguments);
					}),
					Lw = (t._duckdb_web_connect = function () {
						return (Lw = t._duckdb_web_connect = t.asm.We).apply(null, arguments);
					}),
					xw = (t._duckdb_web_disconnect = function () {
						return (xw = t._duckdb_web_disconnect = t.asm.Xe).apply(null, arguments);
					}),
					qw = (t._duckdb_web_flush_files = function () {
						return (qw = t._duckdb_web_flush_files = t.asm.Ye).apply(null, arguments);
					}),
					Ww = (t._duckdb_web_flush_file = function () {
						return (Ww = t._duckdb_web_flush_file = t.asm.Ze).apply(null, arguments);
					}),
					zw = (t._duckdb_web_open = function () {
						return (zw = t._duckdb_web_open = t.asm._e).apply(null, arguments);
					}),
					Hw = (t._duckdb_web_collect_file_stats = function () {
						return (Hw = t._duckdb_web_collect_file_stats = t.asm.$e).apply(null, arguments);
					}),
					Yw = (t._duckdb_web_export_file_stats = function () {
						return (Yw = t._duckdb_web_export_file_stats = t.asm.af).apply(null, arguments);
					}),
					Gw = (t._duckdb_web_fs_drop_file = function () {
						return (Gw = t._duckdb_web_fs_drop_file = t.asm.bf).apply(null, arguments);
					}),
					$w = (t._duckdb_web_fs_drop_files = function () {
						return ($w = t._duckdb_web_fs_drop_files = t.asm.cf).apply(null, arguments);
					}),
					Jw = (t._duckdb_web_fs_glob_file_infos = function () {
						return (Jw = t._duckdb_web_fs_glob_file_infos = t.asm.df).apply(null, arguments);
					}),
					Kw = (t._duckdb_web_fs_get_file_info_by_id = function () {
						return (Kw = t._duckdb_web_fs_get_file_info_by_id = t.asm.ef).apply(null, arguments);
					}),
					Zw = (t._duckdb_web_fs_get_file_info_by_name = function () {
						return (Zw = t._duckdb_web_fs_get_file_info_by_name = t.asm.ff).apply(null, arguments);
					}),
					Xw = (t._duckdb_web_fs_set_file_descriptor = function () {
						return (Xw = t._duckdb_web_fs_set_file_descriptor = t.asm.gf).apply(null, arguments);
					}),
					Qw = (t._duckdb_web_fs_register_file_url = function () {
						return (Qw = t._duckdb_web_fs_register_file_url = t.asm.hf).apply(null, arguments);
					}),
					eT = (t._duckdb_web_fs_register_file_buffer = function () {
						return (eT = t._duckdb_web_fs_register_file_buffer = t.asm.jf).apply(null, arguments);
					}),
					tT = (t._duckdb_web_copy_file_to_buffer = function () {
						return (tT = t._duckdb_web_copy_file_to_buffer = t.asm.kf).apply(null, arguments);
					}),
					iT = (t._duckdb_web_copy_file_to_path = function () {
						return (iT = t._duckdb_web_copy_file_to_path = t.asm.lf).apply(null, arguments);
					}),
					rT = (t._duckdb_web_get_version = function () {
						return (rT = t._duckdb_web_get_version = t.asm.mf).apply(null, arguments);
					}),
					nT = (t._duckdb_web_get_feature_flags = function () {
						return (nT = t._duckdb_web_get_feature_flags = t.asm.nf).apply(null, arguments);
					}),
					sT = (t._duckdb_web_tokenize = function () {
						return (sT = t._duckdb_web_tokenize = t.asm.of).apply(null, arguments);
					}),
					oT = (t._duckdb_web_prepared_create = function () {
						return (oT = t._duckdb_web_prepared_create = t.asm.pf).apply(null, arguments);
					}),
					aT = (t._duckdb_web_prepared_close = function () {
						return (aT = t._duckdb_web_prepared_close = t.asm.qf).apply(null, arguments);
					}),
					uT = (t._duckdb_web_prepared_run = function () {
						return (uT = t._duckdb_web_prepared_run = t.asm.rf).apply(null, arguments);
					}),
					cT = (t._duckdb_web_prepared_send = function () {
						return (cT = t._duckdb_web_prepared_send = t.asm.sf).apply(null, arguments);
					}),
					lT = (t._duckdb_web_query_run = function () {
						return (lT = t._duckdb_web_query_run = t.asm.tf).apply(null, arguments);
					}),
					dT = (t._duckdb_web_query_send = function () {
						return (dT = t._duckdb_web_query_send = t.asm.uf).apply(null, arguments);
					}),
					fT = (t._duckdb_web_query_fetch_results = function () {
						return (fT = t._duckdb_web_query_fetch_results = t.asm.vf).apply(null, arguments);
					}),
					hT = (t._duckdb_web_get_tablenames = function () {
						return (hT = t._duckdb_web_get_tablenames = t.asm.wf).apply(null, arguments);
					}),
					pT = (t._duckdb_web_insert_arrow_from_ipc_stream = function () {
						return (pT = t._duckdb_web_insert_arrow_from_ipc_stream = t.asm.xf).apply(
							null,
							arguments
						);
					}),
					yT = (t._duckdb_web_insert_csv_from_path = function () {
						return (yT = t._duckdb_web_insert_csv_from_path = t.asm.yf).apply(null, arguments);
					}),
					_T = (t._duckdb_web_insert_json_from_path = function () {
						return (_T = t._duckdb_web_insert_json_from_path = t.asm.zf).apply(null, arguments);
					}),
					Uf = (t.___errno_location = function () {
						return (Uf = t.___errno_location = t.asm.Af).apply(null, arguments);
					}),
					jo = (t._htonl = function () {
						return (jo = t._htonl = t.asm.Bf).apply(null, arguments);
					}),
					Nu = (t._ntohs = function () {
						return (Nu = t._ntohs = t.asm.Cf).apply(null, arguments);
					}),
					wo = (t._htons = function () {
						return (wo = t._htons = t.asm.Df).apply(null, arguments);
					}),
					w = (t.stackSave = function () {
						return (w = t.stackSave = t.asm.Ef).apply(null, arguments);
					}),
					T = (t.stackRestore = function () {
						return (T = t.stackRestore = t.asm.Ff).apply(null, arguments);
					}),
					Lu = (t.stackAlloc = function () {
						return (Lu = t.stackAlloc = t.asm.Gf).apply(null, arguments);
					}),
					I = (t._setThrew = function () {
						return (I = t._setThrew = t.asm.Hf).apply(null, arguments);
					}),
					ms = (t.___cxa_can_catch = function () {
						return (ms = t.___cxa_can_catch = t.asm.If).apply(null, arguments);
					}),
					kf = (t.___cxa_is_pointer_type = function () {
						return (kf = t.___cxa_is_pointer_type = t.asm.Jf).apply(null, arguments);
					}),
					bs = (t._malloc = function () {
						return (bs = t._malloc = t.asm.Kf).apply(null, arguments);
					}),
					xu = (t._free = function () {
						return (xu = t._free = t.asm.Lf).apply(null, arguments);
					}),
					Vf = (t.dynCall_viiij = function () {
						return (Vf = t.dynCall_viiij = t.asm.Mf).apply(null, arguments);
					}),
					Pf = (t.dynCall_viiijjj = function () {
						return (Pf = t.dynCall_viiijjj = t.asm.Nf).apply(null, arguments);
					}),
					Nf = (t.dynCall_iiij = function () {
						return (Nf = t.dynCall_iiij = t.asm.Of).apply(null, arguments);
					}),
					Lf = (t.dynCall_vijijj = function () {
						return (Lf = t.dynCall_vijijj = t.asm.Pf).apply(null, arguments);
					}),
					xf = (t.dynCall_iji = function () {
						return (xf = t.dynCall_iji = t.asm.Qf).apply(null, arguments);
					}),
					qf = (t.dynCall_viji = function () {
						return (qf = t.dynCall_viji = t.asm.Rf).apply(null, arguments);
					}),
					Wf = (t.dynCall_vij = function () {
						return (Wf = t.dynCall_vij = t.asm.Sf).apply(null, arguments);
					}),
					zf = (t.dynCall_viijj = function () {
						return (zf = t.dynCall_viijj = t.asm.Tf).apply(null, arguments);
					}),
					Hf = (t.dynCall_ji = function () {
						return (Hf = t.dynCall_ji = t.asm.Uf).apply(null, arguments);
					}),
					Yf = (t.dynCall_viiijj = function () {
						return (Yf = t.dynCall_viiijj = t.asm.Vf).apply(null, arguments);
					}),
					Gf = (t.dynCall_vijjj = function () {
						return (Gf = t.dynCall_vijjj = t.asm.Wf).apply(null, arguments);
					}),
					$f = (t.dynCall_viiiij = function () {
						return ($f = t.dynCall_viiiij = t.asm.Xf).apply(null, arguments);
					}),
					Jf = (t.dynCall_jii = function () {
						return (Jf = t.dynCall_jii = t.asm.Yf).apply(null, arguments);
					}),
					Kf = (t.dynCall_jiiii = function () {
						return (Kf = t.dynCall_jiiii = t.asm.Zf).apply(null, arguments);
					}),
					Zf = (t.dynCall_iiiiij = function () {
						return (Zf = t.dynCall_iiiiij = t.asm._f).apply(null, arguments);
					}),
					Xf = (t.dynCall_iiiiijj = function () {
						return (Xf = t.dynCall_iiiiijj = t.asm.$f).apply(null, arguments);
					}),
					Qf = (t.dynCall_iij = function () {
						return (Qf = t.dynCall_iij = t.asm.ag).apply(null, arguments);
					}),
					eh = (t.dynCall_viijii = function () {
						return (eh = t.dynCall_viijii = t.asm.bg).apply(null, arguments);
					}),
					th = (t.dynCall_viiji = function () {
						return (th = t.dynCall_viiji = t.asm.cg).apply(null, arguments);
					}),
					ih = (t.dynCall_vijj = function () {
						return (ih = t.dynCall_vijj = t.asm.dg).apply(null, arguments);
					}),
					rh = (t.dynCall_vj = function () {
						return (rh = t.dynCall_vj = t.asm.eg).apply(null, arguments);
					}),
					nh = (t.dynCall_iiji = function () {
						return (nh = t.dynCall_iiji = t.asm.fg).apply(null, arguments);
					}),
					sh = (t.dynCall_viij = function () {
						return (sh = t.dynCall_viij = t.asm.gg).apply(null, arguments);
					}),
					oh = (t.dynCall_jiji = function () {
						return (oh = t.dynCall_jiji = t.asm.hg).apply(null, arguments);
					}),
					ah = (t.dynCall_iiiij = function () {
						return (ah = t.dynCall_iiiij = t.asm.ig).apply(null, arguments);
					}),
					uh = (t.dynCall_iiiiiji = function () {
						return (uh = t.dynCall_iiiiiji = t.asm.jg).apply(null, arguments);
					}),
					ch = (t.dynCall_iiiji = function () {
						return (ch = t.dynCall_iiiji = t.asm.kg).apply(null, arguments);
					}),
					lh = (t.dynCall_iiiiji = function () {
						return (lh = t.dynCall_iiiiji = t.asm.lg).apply(null, arguments);
					}),
					dh = (t.dynCall_jiii = function () {
						return (dh = t.dynCall_jiii = t.asm.mg).apply(null, arguments);
					}),
					fh = (t.dynCall_jij = function () {
						return (fh = t.dynCall_jij = t.asm.ng).apply(null, arguments);
					}),
					hh = (t.dynCall_j = function () {
						return (hh = t.dynCall_j = t.asm.og).apply(null, arguments);
					}),
					ph = (t.dynCall_viijij = function () {
						return (ph = t.dynCall_viijij = t.asm.pg).apply(null, arguments);
					}),
					yh = (t.dynCall_iijjijj = function () {
						return (yh = t.dynCall_iijjijj = t.asm.qg).apply(null, arguments);
					}),
					_h = (t.dynCall_viiiijiiiii = function () {
						return (_h = t.dynCall_viiiijiiiii = t.asm.rg).apply(null, arguments);
					}),
					mh = (t.dynCall_viiiijiiii = function () {
						return (mh = t.dynCall_viiiijiiii = t.asm.sg).apply(null, arguments);
					}),
					bh = (t.dynCall_viiijii = function () {
						return (bh = t.dynCall_viiijii = t.asm.tg).apply(null, arguments);
					}),
					gh = (t.dynCall_viiiiiij = function () {
						return (gh = t.dynCall_viiiiiij = t.asm.ug).apply(null, arguments);
					}),
					vh = (t.dynCall_iiijiii = function () {
						return (vh = t.dynCall_iiijiii = t.asm.vg).apply(null, arguments);
					}),
					jh = (t.dynCall_iiiiijii = function () {
						return (jh = t.dynCall_iiiiijii = t.asm.wg).apply(null, arguments);
					}),
					wh = (t.dynCall_viijiii = function () {
						return (wh = t.dynCall_viijiii = t.asm.xg).apply(null, arguments);
					}),
					Th = (t.dynCall_iiijiij = function () {
						return (Th = t.dynCall_iiijiij = t.asm.yg).apply(null, arguments);
					}),
					Ih = (t.dynCall_vijiii = function () {
						return (Ih = t.dynCall_vijiii = t.asm.zg).apply(null, arguments);
					}),
					Bh = (t.dynCall_iijjiii = function () {
						return (Bh = t.dynCall_iijjiii = t.asm.Ag).apply(null, arguments);
					}),
					Sh = (t.dynCall_iijjiiii = function () {
						return (Sh = t.dynCall_iijjiiii = t.asm.Bg).apply(null, arguments);
					}),
					Ah = (t.dynCall_iijji = function () {
						return (Ah = t.dynCall_iijji = t.asm.Cg).apply(null, arguments);
					}),
					Dh = (t.dynCall_vijiiii = function () {
						return (Dh = t.dynCall_vijiiii = t.asm.Dg).apply(null, arguments);
					}),
					Fh = (t.dynCall_iijiiii = function () {
						return (Fh = t.dynCall_iijiiii = t.asm.Eg).apply(null, arguments);
					}),
					Oh = (t.dynCall_vijij = function () {
						return (Oh = t.dynCall_vijij = t.asm.Fg).apply(null, arguments);
					}),
					Eh = (t.dynCall_iiijjjj = function () {
						return (Eh = t.dynCall_iiijjjj = t.asm.Gg).apply(null, arguments);
					}),
					Mh = (t.dynCall_iiijiiii = function () {
						return (Mh = t.dynCall_iiijiiii = t.asm.Hg).apply(null, arguments);
					}),
					Ch = (t.dynCall_jiiij = function () {
						return (Ch = t.dynCall_jiiij = t.asm.Ig).apply(null, arguments);
					}),
					Rh = (t.dynCall_iiiiijjiijj = function () {
						return (Rh = t.dynCall_iiiiijjiijj = t.asm.Jg).apply(null, arguments);
					}),
					Uh = (t.dynCall_viijiiji = function () {
						return (Uh = t.dynCall_viijiiji = t.asm.Kg).apply(null, arguments);
					}),
					kh = (t.dynCall_vjjijij = function () {
						return (kh = t.dynCall_vjjijij = t.asm.Lg).apply(null, arguments);
					}),
					Vh = (t.dynCall_vijjji = function () {
						return (Vh = t.dynCall_vijjji = t.asm.Mg).apply(null, arguments);
					}),
					Ph = (t.dynCall_vjjii = function () {
						return (Ph = t.dynCall_vjjii = t.asm.Ng).apply(null, arguments);
					}),
					Nh = (t.dynCall_viiiiiji = function () {
						return (Nh = t.dynCall_viiiiiji = t.asm.Og).apply(null, arguments);
					}),
					Lh = (t.dynCall_jiiiji = function () {
						return (Lh = t.dynCall_jiiiji = t.asm.Pg).apply(null, arguments);
					}),
					xh = (t.dynCall_iijj = function () {
						return (xh = t.dynCall_iijj = t.asm.Qg).apply(null, arguments);
					}),
					qh = (t.dynCall_iiijjii = function () {
						return (qh = t.dynCall_iiijjii = t.asm.Rg).apply(null, arguments);
					}),
					Wh = (t.dynCall_iijjii = function () {
						return (Wh = t.dynCall_iijjii = t.asm.Sg).apply(null, arguments);
					}),
					zh = (t.dynCall_vijii = function () {
						return (zh = t.dynCall_vijii = t.asm.Tg).apply(null, arguments);
					}),
					Hh = (t.dynCall_viijjii = function () {
						return (Hh = t.dynCall_viijjii = t.asm.Ug).apply(null, arguments);
					}),
					Yh = (t.dynCall_viiiijj = function () {
						return (Yh = t.dynCall_viiiijj = t.asm.Vg).apply(null, arguments);
					}),
					Gh = (t.dynCall_jijjij = function () {
						return (Gh = t.dynCall_jijjij = t.asm.Wg).apply(null, arguments);
					}),
					$h = (t.dynCall_jiijii = function () {
						return ($h = t.dynCall_jiijii = t.asm.Xg).apply(null, arguments);
					}),
					Jh = (t.dynCall_jijiii = function () {
						return (Jh = t.dynCall_jijiii = t.asm.Yg).apply(null, arguments);
					}),
					Kh = (t.dynCall_viijiiiii = function () {
						return (Kh = t.dynCall_viijiiiii = t.asm.Zg).apply(null, arguments);
					}),
					Zh = (t.dynCall_viijiiij = function () {
						return (Zh = t.dynCall_viijiiij = t.asm._g).apply(null, arguments);
					}),
					Xh = (t.dynCall_vijiiiji = function () {
						return (Xh = t.dynCall_vijiiiji = t.asm.$g).apply(null, arguments);
					}),
					Qh = (t.dynCall_jiiji = function () {
						return (Qh = t.dynCall_jiiji = t.asm.ah).apply(null, arguments);
					}),
					ep = (t.dynCall_viiijij = function () {
						return (ep = t.dynCall_viiijij = t.asm.bh).apply(null, arguments);
					}),
					tp = (t.dynCall_viijiij = function () {
						return (tp = t.dynCall_viijiij = t.asm.ch).apply(null, arguments);
					}),
					ip = (t.dynCall_viiiiijj = function () {
						return (ip = t.dynCall_viiiiijj = t.asm.dh).apply(null, arguments);
					}),
					rp = (t.dynCall_viiijji = function () {
						return (rp = t.dynCall_viiijji = t.asm.eh).apply(null, arguments);
					}),
					np = (t.dynCall_viiiji = function () {
						return (np = t.dynCall_viiiji = t.asm.fh).apply(null, arguments);
					}),
					sp = (t.dynCall_iiiijiii = function () {
						return (sp = t.dynCall_iiiijiii = t.asm.gh).apply(null, arguments);
					}),
					op = (t.dynCall_iiijij = function () {
						return (op = t.dynCall_iiijij = t.asm.hh).apply(null, arguments);
					}),
					ap = (t.dynCall_iiijji = function () {
						return (ap = t.dynCall_iiijji = t.asm.ih).apply(null, arguments);
					}),
					up = (t.dynCall_viijji = function () {
						return (up = t.dynCall_viijji = t.asm.jh).apply(null, arguments);
					}),
					cp = (t.dynCall_iiiijj = function () {
						return (cp = t.dynCall_iiiijj = t.asm.kh).apply(null, arguments);
					}),
					lp = (t.dynCall_viiijiii = function () {
						return (lp = t.dynCall_viiijiii = t.asm.lh).apply(null, arguments);
					}),
					dp = (t.dynCall_vijji = function () {
						return (dp = t.dynCall_vijji = t.asm.mh).apply(null, arguments);
					}),
					fp = (t.dynCall_jiiiij = function () {
						return (fp = t.dynCall_jiiiij = t.asm.nh).apply(null, arguments);
					}),
					hp = (t.dynCall_jiijiiiii = function () {
						return (hp = t.dynCall_jiijiiiii = t.asm.oh).apply(null, arguments);
					}),
					pp = (t.dynCall_jiijiijiii = function () {
						return (pp = t.dynCall_jiijiijiii = t.asm.ph).apply(null, arguments);
					}),
					yp = (t.dynCall_jiijjiii = function () {
						return (yp = t.dynCall_jiijjiii = t.asm.qh).apply(null, arguments);
					}),
					_p = (t.dynCall_jiijijii = function () {
						return (_p = t.dynCall_jiijijii = t.asm.rh).apply(null, arguments);
					}),
					mp = (t.dynCall_viiijjij = function () {
						return (mp = t.dynCall_viiijjij = t.asm.sh).apply(null, arguments);
					}),
					bp = (t.dynCall_vijijjiij = function () {
						return (bp = t.dynCall_vijijjiij = t.asm.th).apply(null, arguments);
					}),
					gp = (t.dynCall_viijjij = function () {
						return (gp = t.dynCall_viijjij = t.asm.uh).apply(null, arguments);
					}),
					vp = (t.dynCall_viiijjiij = function () {
						return (vp = t.dynCall_viiijjiij = t.asm.vh).apply(null, arguments);
					}),
					jp = (t.dynCall_viiiijjjj = function () {
						return (jp = t.dynCall_viiiijjjj = t.asm.wh).apply(null, arguments);
					}),
					wp = (t.dynCall_viijiiiiij = function () {
						return (wp = t.dynCall_viijiiiiij = t.asm.xh).apply(null, arguments);
					}),
					Tp = (t.dynCall_viijiiiijj = function () {
						return (Tp = t.dynCall_viijiiiijj = t.asm.yh).apply(null, arguments);
					}),
					Ip = (t.dynCall_viiijiiiijjj = function () {
						return (Ip = t.dynCall_viiijiiiijjj = t.asm.zh).apply(null, arguments);
					}),
					Bp = (t.dynCall_viijijiiiijjj = function () {
						return (Bp = t.dynCall_viijijiiiijjj = t.asm.Ah).apply(null, arguments);
					}),
					Sp = (t.dynCall_jiiijii = function () {
						return (Sp = t.dynCall_jiiijii = t.asm.Bh).apply(null, arguments);
					}),
					Ap = (t.dynCall_viiiiijiiii = function () {
						return (Ap = t.dynCall_viiiiijiiii = t.asm.Ch).apply(null, arguments);
					}),
					Dp = (t.dynCall_iiijii = function () {
						return (Dp = t.dynCall_iiijii = t.asm.Dh).apply(null, arguments);
					}),
					Fp = (t.dynCall_fiijii = function () {
						return (Fp = t.dynCall_fiijii = t.asm.Eh).apply(null, arguments);
					}),
					Op = (t.dynCall_diijii = function () {
						return (Op = t.dynCall_diijii = t.asm.Fh).apply(null, arguments);
					}),
					Ep = (t.dynCall_iiiiiiijii = function () {
						return (Ep = t.dynCall_iiiiiiijii = t.asm.Gh).apply(null, arguments);
					}),
					Mp = (t.dynCall_viiiiji = function () {
						return (Mp = t.dynCall_viiiiji = t.asm.Hh).apply(null, arguments);
					}),
					Cp = (t.dynCall_jiiiijii = function () {
						return (Cp = t.dynCall_jiiiijii = t.asm.Ih).apply(null, arguments);
					}),
					Rp = (t.dynCall_jiiiijiiiiiiii = function () {
						return (Rp = t.dynCall_jiiiijiiiiiiii = t.asm.Jh).apply(null, arguments);
					}),
					Up = (t.dynCall_jiiiiijiiii = function () {
						return (Up = t.dynCall_jiiiiijiiii = t.asm.Kh).apply(null, arguments);
					}),
					kp = (t.dynCall_jiiijiii = function () {
						return (kp = t.dynCall_jiiijiii = t.asm.Lh).apply(null, arguments);
					}),
					Vp = (t.dynCall_jj = function () {
						return (Vp = t.dynCall_jj = t.asm.Mh).apply(null, arguments);
					}),
					Pp = (t.dynCall_jd = function () {
						return (Pp = t.dynCall_jd = t.asm.Nh).apply(null, arguments);
					}),
					Np = (t.dynCall_jf = function () {
						return (Np = t.dynCall_jf = t.asm.Oh).apply(null, arguments);
					}),
					Lp = (t.dynCall_iijjj = function () {
						return (Lp = t.dynCall_iijjj = t.asm.Ph).apply(null, arguments);
					}),
					xp = (t.dynCall_iiijj = function () {
						return (xp = t.dynCall_iiijj = t.asm.Qh).apply(null, arguments);
					}),
					qp = (t.dynCall_vijijiiiijjj = function () {
						return (qp = t.dynCall_vijijiiiijjj = t.asm.Rh).apply(null, arguments);
					}),
					Wp = (t.dynCall_iiiiiiji = function () {
						return (Wp = t.dynCall_iiiiiiji = t.asm.Sh).apply(null, arguments);
					}),
					zp = (t.dynCall_iiiiiiiiji = function () {
						return (zp = t.dynCall_iiiiiiiiji = t.asm.Th).apply(null, arguments);
					}),
					Hp = (t.dynCall_jijijjij = function () {
						return (Hp = t.dynCall_jijijjij = t.asm.Uh).apply(null, arguments);
					}),
					Yp = (t.dynCall_viijjj = function () {
						return (Yp = t.dynCall_viijjj = t.asm.Vh).apply(null, arguments);
					}),
					Gp = (t.dynCall_vijjij = function () {
						return (Gp = t.dynCall_vijjij = t.asm.Wh).apply(null, arguments);
					}),
					$p = (t.dynCall_viijjji = function () {
						return ($p = t.dynCall_viijjji = t.asm.Xh).apply(null, arguments);
					}),
					Jp = (t.dynCall_iiiiiij = function () {
						return (Jp = t.dynCall_iiiiiij = t.asm.Yh).apply(null, arguments);
					}),
					Kp = (t.dynCall_iiiiiiiiiiji = function () {
						return (Kp = t.dynCall_iiiiiiiiiiji = t.asm.Zh).apply(null, arguments);
					}),
					Zp = (t.dynCall_jiiiiiii = function () {
						return (Zp = t.dynCall_jiiiiiii = t.asm._h).apply(null, arguments);
					}),
					Xp = (t.dynCall_jijj = function () {
						return (Xp = t.dynCall_jijj = t.asm.$h).apply(null, arguments);
					}),
					Qp = (t.dynCall_viiiijiiiiiiii = function () {
						return (Qp = t.dynCall_viiiijiiiiiiii = t.asm.ai).apply(null, arguments);
					}),
					ey = (t.dynCall_ij = function () {
						return (ey = t.dynCall_ij = t.asm.bi).apply(null, arguments);
					}),
					ty = (t.dynCall_jjj = function () {
						return (ty = t.dynCall_jjj = t.asm.ci).apply(null, arguments);
					}),
					iy = (t.dynCall_vjii = function () {
						return (iy = t.dynCall_vjii = t.asm.di).apply(null, arguments);
					}),
					ry = (t.dynCall_vjiiii = function () {
						return (ry = t.dynCall_vjiiii = t.asm.ei).apply(null, arguments);
					}),
					ny = (t.dynCall_viiiiijiii = function () {
						return (ny = t.dynCall_viiiiijiii = t.asm.fi).apply(null, arguments);
					}),
					sy = (t.dynCall_jiij = function () {
						return (sy = t.dynCall_jiij = t.asm.gi).apply(null, arguments);
					}),
					oy = (t.dynCall_iiiijjii = function () {
						return (oy = t.dynCall_iiiijjii = t.asm.hi).apply(null, arguments);
					}),
					ay = (t.dynCall_iiiiijji = function () {
						return (ay = t.dynCall_iiiiijji = t.asm.ii).apply(null, arguments);
					}),
					uy = (t.dynCall_viiijjii = function () {
						return (uy = t.dynCall_viiijjii = t.asm.ji).apply(null, arguments);
					}),
					cy = (t.dynCall_viiiijji = function () {
						return (cy = t.dynCall_viiiijji = t.asm.ki).apply(null, arguments);
					}),
					ly = (t.dynCall_viiiijjii = function () {
						return (ly = t.dynCall_viiiijjii = t.asm.li).apply(null, arguments);
					}),
					dy = (t.dynCall_viiiiijji = function () {
						return (dy = t.dynCall_viiiiijji = t.asm.mi).apply(null, arguments);
					}),
					fy = (t.dynCall_iiiiijjj = function () {
						return (fy = t.dynCall_iiiiijjj = t.asm.ni).apply(null, arguments);
					}),
					hy = (t.dynCall_jijiiii = function () {
						return (hy = t.dynCall_jijiiii = t.asm.oi).apply(null, arguments);
					}),
					py = (t.dynCall_iiijjjii = function () {
						return (py = t.dynCall_iiijjjii = t.asm.pi).apply(null, arguments);
					}),
					yy = (t.dynCall_iiiiijjji = function () {
						return (yy = t.dynCall_iiiiijjji = t.asm.qi).apply(null, arguments);
					}),
					_y = (t.dynCall_iiiijjj = function () {
						return (_y = t.dynCall_iiiijjj = t.asm.ri).apply(null, arguments);
					}),
					my = (t.dynCall_iidj = function () {
						return (my = t.dynCall_iidj = t.asm.si).apply(null, arguments);
					}),
					by = (t.dynCall_ijji = function () {
						return (by = t.dynCall_ijji = t.asm.ti).apply(null, arguments);
					}),
					gy = (t.dynCall_iiiiiiiij = function () {
						return (gy = t.dynCall_iiiiiiiij = t.asm.ui).apply(null, arguments);
					}),
					vy = (t.dynCall_iiiiiiij = function () {
						return (vy = t.dynCall_iiiiiiij = t.asm.vi).apply(null, arguments);
					}),
					jy = (t.dynCall_iiiiiiiiiiiij = function () {
						return (jy = t.dynCall_iiiiiiiiiiiij = t.asm.wi).apply(null, arguments);
					}),
					wy = (t.dynCall_iiiiiiiji = function () {
						return (wy = t.dynCall_iiiiiiiji = t.asm.xi).apply(null, arguments);
					}),
					Ty = (t.dynCall_iiiidjj = function () {
						return (Ty = t.dynCall_iiiidjj = t.asm.yi).apply(null, arguments);
					}),
					Iy = (t.dynCall_jiiiii = function () {
						return (Iy = t.dynCall_jiiiii = t.asm.zi).apply(null, arguments);
					}),
					By = (t.dynCall_jiiiiiijii = function () {
						return (By = t.dynCall_jiiiiiijii = t.asm.Ai).apply(null, arguments);
					}),
					Sy = (t.dynCall_iiiijji = function () {
						return (Sy = t.dynCall_iiiijji = t.asm.Bi).apply(null, arguments);
					}),
					Ay = (t.dynCall_jiiiiii = function () {
						return (Ay = t.dynCall_jiiiiii = t.asm.Ci).apply(null, arguments);
					}),
					Dy = (t.dynCall_iijiji = function () {
						return (Dy = t.dynCall_iijiji = t.asm.Di).apply(null, arguments);
					}),
					Fy = (t.dynCall_vjiiiji = function () {
						return (Fy = t.dynCall_vjiiiji = t.asm.Ei).apply(null, arguments);
					}),
					Oy = (t.dynCall_viiijijiji = function () {
						return (Oy = t.dynCall_viiijijiji = t.asm.Fi).apply(null, arguments);
					}),
					Ey = (t.dynCall_jiiijj = function () {
						return (Ey = t.dynCall_jiiijj = t.asm.Gi).apply(null, arguments);
					}),
					My = (t.dynCall_iiiijii = function () {
						return (My = t.dynCall_iiiijii = t.asm.Hi).apply(null, arguments);
					}),
					Cy = (t.dynCall_viiiijii = function () {
						return (Cy = t.dynCall_viiiijii = t.asm.Ii).apply(null, arguments);
					}),
					Ry = (t.dynCall_iijiii = function () {
						return (Ry = t.dynCall_iijiii = t.asm.Ji).apply(null, arguments);
					}),
					Uy = (t.dynCall_jiiiiji = function () {
						return (Uy = t.dynCall_jiiiiji = t.asm.Ki).apply(null, arguments);
					}),
					ky = (t.dynCall_vijiijj = function () {
						return (ky = t.dynCall_vijiijj = t.asm.Li).apply(null, arguments);
					}),
					Vy = (t.dynCall_vifiijj = function () {
						return (Vy = t.dynCall_vifiijj = t.asm.Mi).apply(null, arguments);
					}),
					Py = (t.dynCall_vidiijj = function () {
						return (Py = t.dynCall_vidiijj = t.asm.Ni).apply(null, arguments);
					}),
					Ny = (t.dynCall_viiiiij = function () {
						return (Ny = t.dynCall_viiiiij = t.asm.Oi).apply(null, arguments);
					}),
					Ly = (t.dynCall_ijj = function () {
						return (Ly = t.dynCall_ijj = t.asm.Pi).apply(null, arguments);
					}),
					xy = (t.dynCall_ijjiii = function () {
						return (xy = t.dynCall_ijjiii = t.asm.Qi).apply(null, arguments);
					}),
					qy = (t.dynCall_vijijjji = function () {
						return (qy = t.dynCall_vijijjji = t.asm.Ri).apply(null, arguments);
					}),
					Wy = (t.dynCall_viijiijj = function () {
						return (Wy = t.dynCall_viijiijj = t.asm.Si).apply(null, arguments);
					}),
					zy = (t.dynCall_viijijj = function () {
						return (zy = t.dynCall_viijijj = t.asm.Ti).apply(null, arguments);
					}),
					Hy = (t.dynCall_viiiiijjji = function () {
						return (Hy = t.dynCall_viiiiijjji = t.asm.Ui).apply(null, arguments);
					}),
					Yy = (t.dynCall_iiijiijj = function () {
						return (Yy = t.dynCall_iiijiijj = t.asm.Vi).apply(null, arguments);
					}),
					Gy = (t.dynCall_viiijijjj = function () {
						return (Gy = t.dynCall_viiijijjj = t.asm.Wi).apply(null, arguments);
					}),
					$y = (t.dynCall_iijiijj = function () {
						return ($y = t.dynCall_iijiijj = t.asm.Xi).apply(null, arguments);
					}),
					Jy = (t.dynCall_viiijjjji = function () {
						return (Jy = t.dynCall_viiijjjji = t.asm.Yi).apply(null, arguments);
					}),
					Ky = (t.dynCall_viiiijiii = function () {
						return (Ky = t.dynCall_viiiijiii = t.asm.Zi).apply(null, arguments);
					}),
					Zy = (t.dynCall_viijiiii = function () {
						return (Zy = t.dynCall_viijiiii = t.asm._i).apply(null, arguments);
					}),
					Xy = (t.dynCall_iijii = function () {
						return (Xy = t.dynCall_iijii = t.asm.$i).apply(null, arguments);
					}),
					Qy = (t.dynCall_vijjiiii = function () {
						return (Qy = t.dynCall_vijjiiii = t.asm.aj).apply(null, arguments);
					}),
					e_ = (t.dynCall_vijijjiiiii = function () {
						return (e_ = t.dynCall_vijijjiiiii = t.asm.bj).apply(null, arguments);
					}),
					t_ = (t.dynCall_vijjiiiii = function () {
						return (t_ = t.dynCall_vijjiiiii = t.asm.cj).apply(null, arguments);
					}),
					i_ = (t.dynCall_iiijjji = function () {
						return (i_ = t.dynCall_iiijjji = t.asm.dj).apply(null, arguments);
					}),
					r_ = (t.dynCall_viijiji = function () {
						return (r_ = t.dynCall_viijiji = t.asm.ej).apply(null, arguments);
					});
				function mT(s) {
					var a = w();
					try {
						$.get(s)();
					} catch (u) {
						if ((T(a), u !== u + 0 && u !== 'longjmp')) throw u;
						I(1, 0);
					}
				}
				function bT(s, a, u) {
					var c = w();
					try {
						$.get(s)(a, u);
					} catch (d) {
						if ((T(c), d !== d + 0 && d !== 'longjmp')) throw d;
						I(1, 0);
					}
				}
				function gT(s, a) {
					var u = w();
					try {
						return $.get(s)(a);
					} catch (c) {
						if ((T(u), c !== c + 0 && c !== 'longjmp')) throw c;
						I(1, 0);
					}
				}
				function vT(s, a, u) {
					var c = w();
					try {
						return $.get(s)(a, u);
					} catch (d) {
						if ((T(c), d !== d + 0 && d !== 'longjmp')) throw d;
						I(1, 0);
					}
				}
				function jT(s, a) {
					var u = w();
					try {
						$.get(s)(a);
					} catch (c) {
						if ((T(u), c !== c + 0 && c !== 'longjmp')) throw c;
						I(1, 0);
					}
				}
				function wT(s, a, u, c) {
					var d = w();
					try {
						return $.get(s)(a, u, c);
					} catch (f) {
						if ((T(d), f !== f + 0 && f !== 'longjmp')) throw f;
						I(1, 0);
					}
				}
				function TT(s, a, u, c, d, f) {
					var h = w();
					try {
						return $.get(s)(a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function IT(s, a, u, c, d) {
					var f = w();
					try {
						$.get(s)(a, u, c, d);
					} catch (h) {
						if ((T(f), h !== h + 0 && h !== 'longjmp')) throw h;
						I(1, 0);
					}
				}
				function BT(s, a, u, c, d) {
					var f = w();
					try {
						return $.get(s)(a, u, c, d);
					} catch (h) {
						if ((T(f), h !== h + 0 && h !== 'longjmp')) throw h;
						I(1, 0);
					}
				}
				function ST(s, a, u, c) {
					var d = w();
					try {
						return $.get(s)(a, u, c);
					} catch (f) {
						if ((T(d), f !== f + 0 && f !== 'longjmp')) throw f;
						I(1, 0);
					}
				}
				function AT(s, a, u, c) {
					var d = w();
					try {
						return $.get(s)(a, u, c);
					} catch (f) {
						if ((T(d), f !== f + 0 && f !== 'longjmp')) throw f;
						I(1, 0);
					}
				}
				function DT(s, a, u, c) {
					var d = w();
					try {
						$.get(s)(a, u, c);
					} catch (f) {
						if ((T(d), f !== f + 0 && f !== 'longjmp')) throw f;
						I(1, 0);
					}
				}
				function FT(s, a, u, c) {
					var d = w();
					try {
						$.get(s)(a, u, c);
					} catch (f) {
						if ((T(d), f !== f + 0 && f !== 'longjmp')) throw f;
						I(1, 0);
					}
				}
				function OT(s, a, u, c) {
					var d = w();
					try {
						$.get(s)(a, u, c);
					} catch (f) {
						if ((T(d), f !== f + 0 && f !== 'longjmp')) throw f;
						I(1, 0);
					}
				}
				function ET(s, a, u) {
					var c = w();
					try {
						return $.get(s)(a, u);
					} catch (d) {
						if ((T(c), d !== d + 0 && d !== 'longjmp')) throw d;
						I(1, 0);
					}
				}
				function MT(s, a, u) {
					var c = w();
					try {
						return $.get(s)(a, u);
					} catch (d) {
						if ((T(c), d !== d + 0 && d !== 'longjmp')) throw d;
						I(1, 0);
					}
				}
				function CT(s, a, u, c, d, f, h) {
					var p = w();
					try {
						$.get(s)(a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function RT(s, a, u, c, d, f) {
					var h = w();
					try {
						$.get(s)(a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function UT(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						return $.get(s)(a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function kT(s, a, u, c, d, f, h) {
					var p = w();
					try {
						return $.get(s)(a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function VT(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return $.get(s)(a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function PT(s) {
					var a = w();
					try {
						return $.get(s)();
					} catch (u) {
						if ((T(a), u !== u + 0 && u !== 'longjmp')) throw u;
						I(1, 0);
					}
				}
				function NT(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						return $.get(s)(a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function LT(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						$.get(s)(a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function xT(s, a, u, c, d, f, h, p, y, m, b, j) {
					var A = w();
					try {
						return $.get(s)(a, u, c, d, f, h, p, y, m, b, j);
					} catch (E) {
						if ((T(A), E !== E + 0 && E !== 'longjmp')) throw E;
						I(1, 0);
					}
				}
				function qT(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						$.get(s)(a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function WT(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V, Z) {
					var le = w();
					try {
						$.get(s)(a, u, c, d, f, h, p, y, m, b, j, A, E, V, Z);
					} catch (Me) {
						if ((T(le), Me !== Me + 0 && Me !== 'longjmp')) throw Me;
						I(1, 0);
					}
				}
				function zT(s, a, u, c, d) {
					var f = w();
					try {
						return $.get(s)(a, u, c, d);
					} catch (h) {
						if ((T(f), h !== h + 0 && h !== 'longjmp')) throw h;
						I(1, 0);
					}
				}
				function HT(s, a, u, c, d) {
					var f = w();
					try {
						return $.get(s)(a, u, c, d);
					} catch (h) {
						if ((T(f), h !== h + 0 && h !== 'longjmp')) throw h;
						I(1, 0);
					}
				}
				function YT(s, a, u, c, d, f) {
					var h = w();
					try {
						$.get(s)(a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function GT(s, a, u) {
					var c = w();
					try {
						$.get(s)(a, u);
					} catch (d) {
						if ((T(c), d !== d + 0 && d !== 'longjmp')) throw d;
						I(1, 0);
					}
				}
				function $T(s, a, u) {
					var c = w();
					try {
						$.get(s)(a, u);
					} catch (d) {
						if ((T(c), d !== d + 0 && d !== 'longjmp')) throw d;
						I(1, 0);
					}
				}
				function JT(s, a) {
					var u = w();
					try {
						return $.get(s)(a);
					} catch (c) {
						if ((T(u), c !== c + 0 && c !== 'longjmp')) throw c;
						I(1, 0);
					}
				}
				function KT(s, a, u, c) {
					var d = w();
					try {
						return $.get(s)(a, u, c);
					} catch (f) {
						if ((T(d), f !== f + 0 && f !== 'longjmp')) throw f;
						I(1, 0);
					}
				}
				function ZT(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						$.get(s)(a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function XT(s, a, u, c, d, f) {
					var h = w();
					try {
						return $.get(s)(a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function QT(s, a, u, c) {
					var d = w();
					try {
						$.get(s)(a, u, c);
					} catch (f) {
						if ((T(d), f !== f + 0 && f !== 'longjmp')) throw f;
						I(1, 0);
					}
				}
				function eI(s, a, u, c) {
					var d = w();
					try {
						$.get(s)(a, u, c);
					} catch (f) {
						if ((T(d), f !== f + 0 && f !== 'longjmp')) throw f;
						I(1, 0);
					}
				}
				function tI(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V) {
					var Z = w();
					try {
						return $.get(s)(a, u, c, d, f, h, p, y, m, b, j, A, E, V);
					} catch (le) {
						if ((T(Z), le !== le + 0 && le !== 'longjmp')) throw le;
						I(1, 0);
					}
				}
				function iI(s, a, u, c, d, f, h, p, y, m, b, j, A, E) {
					var V = w();
					try {
						$.get(s)(a, u, c, d, f, h, p, y, m, b, j, A, E);
					} catch (Z) {
						if ((T(V), Z !== Z + 0 && Z !== 'longjmp')) throw Z;
						I(1, 0);
					}
				}
				function rI(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						$.get(s)(a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function nI(s, a) {
					var u = w();
					try {
						return $.get(s)(a);
					} catch (c) {
						if ((T(u), c !== c + 0 && c !== 'longjmp')) throw c;
						I(1, 0);
					}
				}
				function sI(s, a) {
					var u = w();
					try {
						return $.get(s)(a);
					} catch (c) {
						if ((T(u), c !== c + 0 && c !== 'longjmp')) throw c;
						I(1, 0);
					}
				}
				function oI(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V, Z, le, Me, C, G, be) {
					var ye = w();
					try {
						return $.get(s)(a, u, c, d, f, h, p, y, m, b, j, A, E, V, Z, le, Me, C, G, be);
					} catch (yt) {
						if ((T(ye), yt !== yt + 0 && yt !== 'longjmp')) throw yt;
						I(1, 0);
					}
				}
				function aI(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V, Z, le, Me, C, G) {
					var be = w();
					try {
						return $.get(s)(a, u, c, d, f, h, p, y, m, b, j, A, E, V, Z, le, Me, C, G);
					} catch (ye) {
						if ((T(be), ye !== ye + 0 && ye !== 'longjmp')) throw ye;
						I(1, 0);
					}
				}
				function uI(s, a, u) {
					var c = w();
					try {
						return $.get(s)(a, u);
					} catch (d) {
						if ((T(c), d !== d + 0 && d !== 'longjmp')) throw d;
						I(1, 0);
					}
				}
				function cI(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						$.get(s)(a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function lI(s, a) {
					var u = w();
					try {
						return $.get(s)(a);
					} catch (c) {
						if ((T(u), c !== c + 0 && c !== 'longjmp')) throw c;
						I(1, 0);
					}
				}
				function dI(s, a, u) {
					var c = w();
					try {
						return $.get(s)(a, u);
					} catch (d) {
						if ((T(c), d !== d + 0 && d !== 'longjmp')) throw d;
						I(1, 0);
					}
				}
				function fI(s, a, u) {
					var c = w();
					try {
						return $.get(s)(a, u);
					} catch (d) {
						if ((T(c), d !== d + 0 && d !== 'longjmp')) throw d;
						I(1, 0);
					}
				}
				function hI(s, a, u, c) {
					var d = w();
					try {
						return $.get(s)(a, u, c);
					} catch (f) {
						if ((T(d), f !== f + 0 && f !== 'longjmp')) throw f;
						I(1, 0);
					}
				}
				function pI(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						$.get(s)(a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function yI(s, a, u, c, d, f, h, p, y, m, b, j) {
					var A = w();
					try {
						$.get(s)(a, u, c, d, f, h, p, y, m, b, j);
					} catch (E) {
						if ((T(A), E !== E + 0 && E !== 'longjmp')) throw E;
						I(1, 0);
					}
				}
				function _I(s, a, u, c, d) {
					var f = w();
					try {
						return Kf(s, a, u, c, d);
					} catch (h) {
						if ((T(f), h !== h + 0 && h !== 'longjmp')) throw h;
						I(1, 0);
					}
				}
				function mI(s, a, u, c, d, f, h) {
					var p = w();
					try {
						zf(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function bI(s, a, u, c, d) {
					var f = w();
					try {
						sh(s, a, u, c, d);
					} catch (h) {
						if ((T(f), h !== h + 0 && h !== 'longjmp')) throw h;
						I(1, 0);
					}
				}
				function gI(s, a, u, c, d, f, h) {
					var p = w();
					try {
						return Zf(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function vI(s, a, u, c) {
					var d = w();
					try {
						Wf(s, a, u, c);
					} catch (f) {
						if ((T(d), f !== f + 0 && f !== 'longjmp')) throw f;
						I(1, 0);
					}
				}
				function jI(s, a, u, c, d, f, h) {
					var p = w();
					try {
						$f(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function wI(s, a, u, c, d, f) {
					var h = w();
					try {
						Vf(s, a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function TI(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						Pf(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function II(s, a, u, c, d) {
					var f = w();
					try {
						return Nf(s, a, u, c, d);
					} catch (h) {
						if ((T(f), h !== h + 0 && h !== 'longjmp')) throw h;
						I(1, 0);
					}
				}
				function BI(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						Lf(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function SI(s, a, u, c) {
					var d = w();
					try {
						return xf(s, a, u, c);
					} catch (f) {
						if ((T(d), f !== f + 0 && f !== 'longjmp')) throw f;
						I(1, 0);
					}
				}
				function AI(s, a, u, c, d) {
					var f = w();
					try {
						qf(s, a, u, c, d);
					} catch (h) {
						if ((T(f), h !== h + 0 && h !== 'longjmp')) throw h;
						I(1, 0);
					}
				}
				function DI(s, a) {
					var u = w();
					try {
						return Hf(s, a);
					} catch (c) {
						if ((T(u), c !== c + 0 && c !== 'longjmp')) throw c;
						I(1, 0);
					}
				}
				function FI(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						Yf(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function OI(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						Gf(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function EI(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						Yp(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function MI(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						return Xf(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function CI(s, a, u) {
					var c = w();
					try {
						return Jf(s, a, u);
					} catch (d) {
						if ((T(c), d !== d + 0 && d !== 'longjmp')) throw d;
						I(1, 0);
					}
				}
				function RI(s, a, u, c, d) {
					var f = w();
					try {
						return Ly(s, a, u, c, d);
					} catch (h) {
						if ((T(f), h !== h + 0 && h !== 'longjmp')) throw h;
						I(1, 0);
					}
				}
				function UI(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return xy(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function kI(s, a, u, c, d, f, h) {
					var p = w();
					try {
						eh(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function VI(s, a, u, c, d, f) {
					var h = w();
					try {
						th(s, a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function PI(s, a, u, c, d, f) {
					var h = w();
					try {
						ih(s, a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function NI(s, a, u, c) {
					var d = w();
					try {
						return Qf(s, a, u, c);
					} catch (f) {
						if ((T(d), f !== f + 0 && f !== 'longjmp')) throw f;
						I(1, 0);
					}
				}
				function LI(s, a, u) {
					var c = w();
					try {
						rh(s, a, u);
					} catch (d) {
						if ((T(c), d !== d + 0 && d !== 'longjmp')) throw d;
						I(1, 0);
					}
				}
				function xI(s, a, u, c, d) {
					var f = w();
					try {
						return nh(s, a, u, c, d);
					} catch (h) {
						if ((T(f), h !== h + 0 && h !== 'longjmp')) throw h;
						I(1, 0);
					}
				}
				function qI(s, a, u, c, d, f) {
					var h = w();
					try {
						return ah(s, a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function WI(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return cp(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function zI(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						Mp(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function HI(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return op(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function YI(s, a, u, c, d, f) {
					var h = w();
					try {
						return ch(s, a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function GI(s, a, u, c, d, f) {
					var h = w();
					try {
						return xh(s, a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function $I(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return ap(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function JI(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						up(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function KI(s) {
					var a = w();
					try {
						return hh(s);
					} catch (u) {
						if ((T(a), u !== u + 0 && u !== 'longjmp')) throw u;
						I(1, 0);
					}
				}
				function ZI(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return uh(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function XI(s, a, u, c, d, f, h) {
					var p = w();
					try {
						return lh(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function QI(s, a, u, c) {
					var d = w();
					try {
						return dh(s, a, u, c);
					} catch (f) {
						if ((T(d), f !== f + 0 && f !== 'longjmp')) throw f;
						I(1, 0);
					}
				}
				function eB(s, a, u, c, d, f, h) {
					var p = w();
					try {
						Ih(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function tB(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						Dh(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function iB(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return Fh(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function rB(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return vh(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function nB(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						return jh(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function sB(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						wh(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function oB(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						return Th(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function aB(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						return Bh(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function uB(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						return Sh(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function cB(s, a, u, c, d, f, h) {
					var p = w();
					try {
						return Ah(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function lB(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						gh(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function dB(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						bh(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function fB(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						return yh(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function hB(s, a, u, c, d, f, h, p, y, m, b, j) {
					var A = w();
					try {
						_h(s, a, u, c, d, f, h, p, y, m, b, j);
					} catch (E) {
						if ((T(A), E !== E + 0 && E !== 'longjmp')) throw E;
						I(1, 0);
					}
				}
				function pB(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						mh(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function yB(s, a, u, c, d, f, h) {
					var p = w();
					try {
						Ph(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function _B(s, a, u, c, d, f, h) {
					var p = w();
					try {
						np(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function mB(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						Yh(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function bB(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						return Mh(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function gB(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						rp(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function vB(s, a, u, c) {
					var d = w();
					try {
						return fh(s, a, u, c);
					} catch (f) {
						if ((T(d), f !== f + 0 && f !== 'longjmp')) throw f;
						I(1, 0);
					}
				}
				function jB(s, a, u, c, d, f) {
					var h = w();
					try {
						return Ch(s, a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function wB(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						Vh(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function TB(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						kh(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function IB(s, a, u, c, d, f) {
					var h = w();
					try {
						return Qh(s, a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function BB(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						Uh(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function SB(s, a, u, c, d, f, h) {
					var p = w();
					try {
						return Lh(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function AB(s, a, u, c, d, f, h) {
					var p = w();
					try {
						Oh(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function DB(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						return Eh(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function FB(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						Nh(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function OB(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V) {
					var Z = w();
					try {
						return Rh(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V);
					} catch (le) {
						if ((T(Z), le !== le + 0 && le !== 'longjmp')) throw le;
						I(1, 0);
					}
				}
				function EB(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						return qh(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function MB(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return Wh(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function CB(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						ph(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function RB(s, a, u, c, d, f) {
					var h = w();
					try {
						zh(s, a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function UB(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						Hh(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function kB(s, a, u, c, d, f, h) {
					var p = w();
					try {
						return $h(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function VB(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						Kh(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function PB(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						Zh(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function NB(s, a, u, c, d, f, h) {
					var p = w();
					try {
						return Jh(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function LB(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						Xh(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function xB(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						return Gh(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function qB(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						tp(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function WB(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						return sp(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function zB(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						lp(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function HB(s, a, u, c, d, f, h) {
					var p = w();
					try {
						dp(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function YB(s, a, u, c, d, f, h) {
					var p = w();
					try {
						return fp(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function GB(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						mp(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function $B(s, a, u, c, d, f, h, p, y, m, b, j, A) {
					var E = w();
					try {
						bp(s, a, u, c, d, f, h, p, y, m, b, j, A);
					} catch (V) {
						if ((T(E), V !== V + 0 && V !== 'longjmp')) throw V;
						I(1, 0);
					}
				}
				function JB(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						gp(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function KB(s, a, u, c, d, f, h, p, y, m, b, j, A) {
					var E = w();
					try {
						jp(s, a, u, c, d, f, h, p, y, m, b, j, A);
					} catch (V) {
						if ((T(E), V !== V + 0 && V !== 'longjmp')) throw V;
						I(1, 0);
					}
				}
				function ZB(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						return hp(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function XB(s, a, u, c, d, f, h, p, y, m, b, j) {
					var A = w();
					try {
						return pp(s, a, u, c, d, f, h, p, y, m, b, j);
					} catch (E) {
						if ((T(A), E !== E + 0 && E !== 'longjmp')) throw E;
						I(1, 0);
					}
				}
				function QB(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						return yp(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function eS(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						return _p(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function tS(s, a, u, c, d, f, h, p, y, m, b, j) {
					var A = w();
					try {
						wp(s, a, u, c, d, f, h, p, y, m, b, j);
					} catch (E) {
						if ((T(A), E !== E + 0 && E !== 'longjmp')) throw E;
						I(1, 0);
					}
				}
				function iS(s, a, u, c, d, f, h, p, y, m, b, j, A) {
					var E = w();
					try {
						Tp(s, a, u, c, d, f, h, p, y, m, b, j, A);
					} catch (V) {
						if ((T(E), V !== V + 0 && V !== 'longjmp')) throw V;
						I(1, 0);
					}
				}
				function rS(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V, Z) {
					var le = w();
					try {
						Ip(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V, Z);
					} catch (Me) {
						if ((T(le), Me !== Me + 0 && Me !== 'longjmp')) throw Me;
						I(1, 0);
					}
				}
				function nS(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V, Z, le, Me) {
					var C = w();
					try {
						Bp(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V, Z, le, Me);
					} catch (G) {
						if ((T(C), G !== G + 0 && G !== 'longjmp')) throw G;
						I(1, 0);
					}
				}
				function sS(s, a, u, c, d, f, h, p, y, m, b, j) {
					var A = w();
					try {
						vp(s, a, u, c, d, f, h, p, y, m, b, j);
					} catch (E) {
						if ((T(A), E !== E + 0 && E !== 'longjmp')) throw E;
						I(1, 0);
					}
				}
				function oS(s, a, u, c, d, f) {
					var h = w();
					try {
						return Iy(s, a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function aS(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						return By(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function uS(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						return Sy(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function cS(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return Sp(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function lS(s, a, u, c, d, f, h, p, y, m, b, j) {
					var A = w();
					try {
						Ap(s, a, u, c, d, f, h, p, y, m, b, j);
					} catch (E) {
						if ((T(A), E !== E + 0 && E !== 'longjmp')) throw E;
						I(1, 0);
					}
				}
				function dS(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						return Cp(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function fS(s, a, u, c, d, f, h) {
					var p = w();
					try {
						return Dp(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function hS(s, a, u, c, d, f, h) {
					var p = w();
					try {
						return Fp(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function pS(s, a, u, c, d, f, h) {
					var p = w();
					try {
						return Op(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function yS(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						return Ep(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function _S(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V) {
					var Z = w();
					try {
						return Rp(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V);
					} catch (le) {
						if ((T(Z), le !== le + 0 && le !== 'longjmp')) throw le;
						I(1, 0);
					}
				}
				function mS(s, a, u, c, d, f, h, p, y, m, b, j) {
					var A = w();
					try {
						return Up(s, a, u, c, d, f, h, p, y, m, b, j);
					} catch (E) {
						if ((T(A), E !== E + 0 && E !== 'longjmp')) throw E;
						I(1, 0);
					}
				}
				function bS(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						return kp(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function gS(s, a, u) {
					var c = w();
					try {
						return Vp(s, a, u);
					} catch (d) {
						if ((T(c), d !== d + 0 && d !== 'longjmp')) throw d;
						I(1, 0);
					}
				}
				function vS(s, a) {
					var u = w();
					try {
						return Pp(s, a);
					} catch (c) {
						if ((T(u), c !== c + 0 && c !== 'longjmp')) throw c;
						I(1, 0);
					}
				}
				function jS(s, a) {
					var u = w();
					try {
						return Np(s, a);
					} catch (c) {
						if ((T(u), c !== c + 0 && c !== 'longjmp')) throw c;
						I(1, 0);
					}
				}
				function wS(s, a, u, c, d, f, h) {
					var p = w();
					try {
						return Ay(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function TS(s, a, u, c, d, f) {
					var h = w();
					try {
						return by(s, a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function IS(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						return Wp(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function BS(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						return zp(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function SS(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						ip(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function AS(s, a, u, c, d, f, h) {
					var p = w();
					try {
						return xp(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function DS(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return Lp(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function FS(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V, Z, le) {
					var Me = w();
					try {
						qp(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V, Z, le);
					} catch (C) {
						if ((T(Me), C !== C + 0 && C !== 'longjmp')) throw C;
						I(1, 0);
					}
				}
				function OS(s, a, u, c, d, f, h, p, y, m, b, j) {
					var A = w();
					try {
						return Hp(s, a, u, c, d, f, h, p, y, m, b, j);
					} catch (E) {
						if ((T(A), E !== E + 0 && E !== 'longjmp')) throw E;
						I(1, 0);
					}
				}
				function ES(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						Gp(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function MS(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						return gy(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function CS(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						$p(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function RS(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return Jp(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function US(s, a, u, c, d, f, h, p, y, m, b, j, A) {
					var E = w();
					try {
						return Kp(s, a, u, c, d, f, h, p, y, m, b, j, A);
					} catch (V) {
						if ((T(E), V !== V + 0 && V !== 'longjmp')) throw V;
						I(1, 0);
					}
				}
				function kS(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return Zp(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function VS(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						return vy(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function PS(s, a, u, c, d, f, h, p, y, m, b, j, A, E) {
					var V = w();
					try {
						return jy(s, a, u, c, d, f, h, p, y, m, b, j, A, E);
					} catch (Z) {
						if ((T(V), Z !== Z + 0 && Z !== 'longjmp')) throw Z;
						I(1, 0);
					}
				}
				function NS(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						ny(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function LS(s, a, u) {
					var c = w();
					try {
						return ey(s, a, u);
					} catch (d) {
						if ((T(c), d !== d + 0 && d !== 'longjmp')) throw d;
						I(1, 0);
					}
				}
				function xS(s, a, u, c, d) {
					var f = w();
					try {
						return sy(s, a, u, c, d);
					} catch (h) {
						if ((T(f), h !== h + 0 && h !== 'longjmp')) throw h;
						I(1, 0);
					}
				}
				function qS(s, a, u, c, d, f, h) {
					var p = w();
					try {
						ry(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function WS(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V) {
					var Z = w();
					try {
						Qp(s, a, u, c, d, f, h, p, y, m, b, j, A, E, V);
					} catch (le) {
						if ((T(Z), le !== le + 0 && le !== 'longjmp')) throw le;
						I(1, 0);
					}
				}
				function zS(s, a, u, c, d) {
					var f = w();
					try {
						return ty(s, a, u, c, d);
					} catch (h) {
						if ((T(f), h !== h + 0 && h !== 'longjmp')) throw h;
						I(1, 0);
					}
				}
				function HS(s, a, u, c, d) {
					var f = w();
					try {
						iy(s, a, u, c, d);
					} catch (h) {
						if ((T(f), h !== h + 0 && h !== 'longjmp')) throw h;
						I(1, 0);
					}
				}
				function YS(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						return oy(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function GS(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						return ay(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function $S(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						uy(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function JS(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						cy(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function KS(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						ly(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function ZS(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						dy(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function XS(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						return py(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function QS(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						return fy(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function e1(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return hy(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function t1(s, a, u, c, d, f, h, p, y, m, b, j) {
					var A = w();
					try {
						return yy(s, a, u, c, d, f, h, p, y, m, b, j);
					} catch (E) {
						if ((T(A), E !== E + 0 && E !== 'longjmp')) throw E;
						I(1, 0);
					}
				}
				function i1(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						return _y(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function r1(s, a, u, c, d) {
					var f = w();
					try {
						return my(s, a, u, c, d);
					} catch (h) {
						if ((T(f), h !== h + 0 && h !== 'longjmp')) throw h;
						I(1, 0);
					}
				}
				function n1(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						return wy(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function s1(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						return Ty(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function o1(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return Dy(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function a1(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						Fy(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function u1(s, a, u, c, d) {
					var f = w();
					try {
						return oh(s, a, u, c, d);
					} catch (h) {
						if ((T(f), h !== h + 0 && h !== 'longjmp')) throw h;
						I(1, 0);
					}
				}
				function c1(s, a, u, c, d, f, h, p, y, m, b, j, A) {
					var E = w();
					try {
						Oy(s, a, u, c, d, f, h, p, y, m, b, j, A);
					} catch (V) {
						if ((T(E), V !== V + 0 && V !== 'longjmp')) throw V;
						I(1, 0);
					}
				}
				function l1(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						ep(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function d1(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return Ey(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function f1(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return My(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function h1(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						Cy(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function p1(s, a, u, c, d, f, h) {
					var p = w();
					try {
						return Ry(s, a, u, c, d, f, h);
					} catch (y) {
						if ((T(p), y !== y + 0 && y !== 'longjmp')) throw y;
						I(1, 0);
					}
				}
				function y1(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						return Uy(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function _1(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						ky(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function m1(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						Vy(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function b1(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						Py(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function g1(s, a, u, c, d, f, h, p) {
					var y = w();
					try {
						Ny(s, a, u, c, d, f, h, p);
					} catch (m) {
						if ((T(y), m !== m + 0 && m !== 'longjmp')) throw m;
						I(1, 0);
					}
				}
				function v1(s, a, u, c, d, f, h, p, y, m, b, j) {
					var A = w();
					try {
						qy(s, a, u, c, d, f, h, p, y, m, b, j);
					} catch (E) {
						if ((T(A), E !== E + 0 && E !== 'longjmp')) throw E;
						I(1, 0);
					}
				}
				function j1(s, a, u, c, d, f) {
					var h = w();
					try {
						return Xp(s, a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function w1(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						zy(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function T1(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						return Yy(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function I1(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						Wy(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function B1(s, a, u, c, d, f, h, p, y, m, b, j, A) {
					var E = w();
					try {
						Hy(s, a, u, c, d, f, h, p, y, m, b, j, A);
					} catch (V) {
						if ((T(E), V !== V + 0 && V !== 'longjmp')) throw V;
						I(1, 0);
					}
				}
				function S1(s, a, u, c, d, f, h, p, y, m, b, j, A) {
					var E = w();
					try {
						Gy(s, a, u, c, d, f, h, p, y, m, b, j, A);
					} catch (V) {
						if ((T(E), V !== V + 0 && V !== 'longjmp')) throw V;
						I(1, 0);
					}
				}
				function A1(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						return $y(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function D1(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						return i_(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function F1(s, a, u, c, d, f, h, p, y, m, b, j, A) {
					var E = w();
					try {
						Jy(s, a, u, c, d, f, h, p, y, m, b, j, A);
					} catch (V) {
						if ((T(E), V !== V + 0 && V !== 'longjmp')) throw V;
						I(1, 0);
					}
				}
				function O1(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						Ky(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				function E1(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						Zy(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function M1(s, a, u, c, d, f) {
					var h = w();
					try {
						return Xy(s, a, u, c, d, f);
					} catch (p) {
						if ((T(h), p !== p + 0 && p !== 'longjmp')) throw p;
						I(1, 0);
					}
				}
				function C1(s, a, u, c, d, f, h, p, y) {
					var m = w();
					try {
						r_(s, a, u, c, d, f, h, p, y);
					} catch (b) {
						if ((T(m), b !== b + 0 && b !== 'longjmp')) throw b;
						I(1, 0);
					}
				}
				function R1(s, a, u, c, d, f, h, p, y, m, b, j, A, E) {
					var V = w();
					try {
						e_(s, a, u, c, d, f, h, p, y, m, b, j, A, E);
					} catch (Z) {
						if ((T(V), Z !== Z + 0 && Z !== 'longjmp')) throw Z;
						I(1, 0);
					}
				}
				function U1(s, a, u, c, d, f, h, p, y, m, b) {
					var j = w();
					try {
						t_(s, a, u, c, d, f, h, p, y, m, b);
					} catch (A) {
						if ((T(j), A !== A + 0 && A !== 'longjmp')) throw A;
						I(1, 0);
					}
				}
				function k1(s, a, u, c, d, f, h, p, y, m) {
					var b = w();
					try {
						Qy(s, a, u, c, d, f, h, p, y, m);
					} catch (j) {
						if ((T(b), j !== j + 0 && j !== 'longjmp')) throw j;
						I(1, 0);
					}
				}
				t.ccall = R0;
				var To;
				function Io(s) {
					(this.name = 'ExitStatus'),
						(this.message = 'Program terminated with exit(' + s + ')'),
						(this.status = s);
				}
				var V1 = !1;
				ys = function s() {
					To || qu(), To || (ys = s);
				};
				function P1(s) {
					var a = t._main,
						u = 0,
						c = 0;
					try {
						var d = a(u, c);
						return N1(d, !0), d;
					} catch (f) {
						return nj(f);
					} finally {
						V1 = !0;
					}
				}
				function qu(s) {
					if (((s = s || _), Or > 0 || (H0(), Or > 0))) return;
					function a() {
						To ||
							((To = !0),
							(t.calledRun = !0),
							!Fu &&
								(Y0(),
								G0(),
								r(t),
								t.onRuntimeInitialized && t.onRuntimeInitialized(),
								n_ && P1(s),
								J0()));
					}
					t.setStatus
						? (t.setStatus('Running...'),
						  setTimeout(function () {
								setTimeout(function () {
									t.setStatus('');
								}, 1),
									a();
						  }, 1))
						: a();
				}
				t.run = qu;
				function N1(s, a) {
					(pe = s), Eu() || $0(), L1(s);
				}
				function L1(s) {
					(pe = s), Eu() || (t.onExit && t.onExit(s), (Fu = !0)), B(s, new Io(s));
				}
				if (t.preInit)
					for (typeof t.preInit == 'function' && (t.preInit = [t.preInit]); t.preInit.length > 0; )
						t.preInit.pop()();
				var n_ = !0;
				return t.noInitialRun && (n_ = !1), qu(), e.ready;
			};
		})(),
		B0 = UR;
	var lf = class {
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
					r = S.RecordBatchReader.from(t);
				return console.assert(r.isSync()), console.assert(r.isFile()), S.Table.from(r);
			}
			send(e) {
				let t = this._bindings.sendQuery(this._conn, e),
					r = new df(this._bindings, this._conn, t),
					n = S.RecordBatchReader.from(r);
				return console.assert(n.isSync()), console.assert(n.isStream()), n;
			}
			getTableNames(e) {
				return this._bindings.getTableNames(this._conn, e);
			}
			prepare(e) {
				let t = this._bindings.createPrepared(this._conn, e);
				return new A0(this._bindings, this._conn, t);
			}
			insertArrowTable(e, t) {
				let r = e.serialize('binary', !0);
				this.insertArrowFromIPCStream(r, t);
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
		df = class {
			constructor(e, t, r) {
				this.bindings = e;
				this.conn = t;
				this.header = r;
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
		A0 = class {
			constructor(e, t, r) {
				(this.bindings = e), (this.connectionId = t), (this.statementId = r);
			}
			close() {
				this.bindings.closePrepared(this.connectionId, this.statementId);
			}
			query(...e) {
				let t = this.bindings.runPrepared(this.connectionId, this.statementId, e),
					r = S.RecordBatchReader.from(t);
				return console.assert(r.isSync()), console.assert(r.isFile()), S.Table.from(r);
			}
			send(...e) {
				let t = this.bindings.sendPrepared(this.connectionId, this.statementId, e),
					r = new df(this.bindings, this.connectionId, t),
					n = S.RecordBatchReader.from(r);
				return console.assert(n.isSync()), console.assert(n.isStream()), n;
			}
		};
	var Te = ((e) => ((e[(e.SUCCESS = 0)] = 'SUCCESS'), e))(Te || {});
	function kR() {
		let i = new TextDecoder();
		return (e) => (
			typeof SharedArrayBuffer != 'undefined' &&
				e.buffer instanceof SharedArrayBuffer &&
				(e = new Uint8Array(e)),
			i.decode(e)
		);
	}
	var VR = kR();
	function zi(i, e) {
		i.ccall('duckdb_web_fail_with', null, ['string'], [e]);
	}
	function ds(i, e, t) {
		let r = i.HEAPU8.subarray(e, e + t),
			n = new Uint8Array(new ArrayBuffer(r.byteLength));
		return n.set(r), n;
	}
	function he(i, e, t) {
		return VR(i.HEAPU8.subarray(e, e + t));
	}
	var jt = ((r) => (
		(r[(r.BUFFER = 0)] = 'BUFFER'), (r[(r.NATIVE = 1)] = 'NATIVE'), (r[(r.HTTP = 3)] = 'HTTP'), r
	))(jt || {});
	function Be(i, e, t, r) {
		let n = i.stackSave(),
			o = i.stackAlloc(3 * 8);
		t.unshift('number'), r.unshift(o), i.ccall(e, null, t, r);
		let l = i.HEAPF64[(o >> 3) + 0],
			_ = i.HEAPF64[(o >> 3) + 1],
			v = i.HEAPF64[(o >> 3) + 2];
		return i.stackRestore(n), [l, _, v];
	}
	function xe(i) {
		i.ccall('duckdb_web_clear_response', null, [], []);
	}
	var ff = class {
		constructor(e) {
			let t = new Float64Array(e.buffer, e.byteOffset, e.byteLength / 8),
				r = new Uint8Array(new ArrayBuffer(e.byteLength));
			r.set(e.subarray(7 * 8)),
				(this.totalFileReadsCold = t[0]),
				(this.totalFileReadsAhead = t[1]),
				(this.totalFileReadsCached = t[2]),
				(this.totalFileWrites = t[3]),
				(this.totalPageAccesses = t[4]),
				(this.totalPageLoads = t[5]),
				(this.blockSize = t[6]),
				(this.blockStats = r);
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
	var PR = new TextEncoder();
	var hf = class {
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
			let [t, r, n] = Be(this.mod, 'duckdb_web_open', ['string'], [JSON.stringify(e)]);
			if (t !== Te.SUCCESS) throw new Error(he(this.mod, r, n));
			xe(this.mod);
		}
		reset() {
			let [e, t, r] = Be(this.mod, 'duckdb_web_reset', [], []);
			if (e !== Te.SUCCESS) throw new Error(he(this.mod, t, r));
			xe(this.mod);
		}
		getVersion() {
			let [e, t, r] = Be(this.mod, 'duckdb_web_get_version', [], []);
			if (e !== Te.SUCCESS) throw new Error(he(this.mod, t, r));
			let n = he(this.mod, t, r);
			return xe(this.mod), n;
		}
		getFeatureFlags() {
			return this.mod.ccall('duckdb_web_get_feature_flags', 'number', [], []);
		}
		tokenize(e) {
			let [t, r, n] = Be(this.mod, 'duckdb_web_tokenize', ['string'], [e]);
			if (t !== Te.SUCCESS) throw new Error(he(this.mod, r, n));
			let o = he(this.mod, r, n);
			return xe(this.mod), JSON.parse(o);
		}
		connect() {
			let e = this.mod.ccall('duckdb_web_connect', 'number', [], []);
			return new lf(this, e);
		}
		disconnect(e) {
			this.mod.ccall('duckdb_web_disconnect', null, ['number'], [e]);
		}
		runQuery(e, t) {
			let [r, n, o] = Be(this.mod, 'duckdb_web_query_run', ['number', 'string'], [e, t]);
			if (r !== Te.SUCCESS) throw new Error(he(this.mod, n, o));
			let l = ds(this.mod, n, o);
			return xe(this.mod), l;
		}
		sendQuery(e, t) {
			let [r, n, o] = Be(this.mod, 'duckdb_web_query_send', ['number', 'string'], [e, t]);
			if (r !== Te.SUCCESS) throw new Error(he(this.mod, n, o));
			let l = ds(this.mod, n, o);
			return xe(this.mod), l;
		}
		fetchQueryResults(e) {
			let [t, r, n] = Be(this.mod, 'duckdb_web_query_fetch_results', ['number'], [e]);
			if (t !== Te.SUCCESS) throw new Error(he(this.mod, r, n));
			let o = ds(this.mod, r, n);
			return xe(this.mod), o;
		}
		getTableNames(e, t) {
			let [r, n, o] = Be(this.mod, 'duckdb_web_get_tablenames', ['number', 'string'], [e, t]);
			if (r !== Te.SUCCESS) throw new Error(he(this.mod, n, o));
			let l = he(this.mod, n, o);
			return xe(this.mod), JSON.parse(l);
		}
		createPrepared(e, t) {
			let [r, n, o] = Be(this.mod, 'duckdb_web_prepared_create', ['number', 'string'], [e, t]);
			if (r !== Te.SUCCESS) throw new Error(he(this.mod, n, o));
			return xe(this.mod), n;
		}
		closePrepared(e, t) {
			let [r, n, o] = Be(this.mod, 'duckdb_web_prepared_close', ['number', 'number'], [e, t]);
			if (r !== Te.SUCCESS) throw new Error(he(this.mod, n, o));
			xe(this.mod);
		}
		runPrepared(e, t, r) {
			let [n, o, l] = Be(
				this.mod,
				'duckdb_web_prepared_run',
				['number', 'number', 'string'],
				[e, t, JSON.stringify(r)]
			);
			if (n !== Te.SUCCESS) throw new Error(he(this.mod, o, l));
			let _ = ds(this.mod, o, l);
			return xe(this.mod), _;
		}
		sendPrepared(e, t, r) {
			let [n, o, l] = Be(
				this.mod,
				'duckdb_web_prepared_send',
				['number', 'number', 'string'],
				[e, t, JSON.stringify(r)]
			);
			if (n !== Te.SUCCESS) throw new Error(he(this.mod, o, l));
			let _ = ds(this.mod, o, l);
			return xe(this.mod), _;
		}
		insertArrowFromIPCStream(e, t, r) {
			if (t.length == 0) return;
			let n = this.mod._malloc(t.length);
			this.mod.HEAPU8.subarray(n, n + t.length).set(t);
			let l = r ? JSON.stringify(r) : '',
				[_, v, B] = Be(
					this.mod,
					'duckdb_web_insert_arrow_from_ipc_stream',
					['number', 'number', 'number', 'string'],
					[e, n, t.length, l]
				);
			if (_ !== Te.SUCCESS) throw new Error(he(this.mod, v, B));
		}
		insertCSVFromPath(e, t, r) {
			if (r.columns !== void 0) {
				r.columnsFlat = [];
				for (let B in r.columns) r.columnsFlat.push(ao(B, r.columns[B]));
			}
			let n = Cr({}, r);
			(n.columns = n.columnsFlat), delete n.columnsFlat;
			let o = JSON.stringify(n),
				[l, _, v] = Be(
					this.mod,
					'duckdb_web_insert_csv_from_path',
					['number', 'string', 'string'],
					[e, t, o]
				);
			if (l !== Te.SUCCESS) throw new Error(he(this.mod, _, v));
		}
		insertJSONFromPath(e, t, r) {
			if (r.columns !== void 0) {
				r.columnsFlat = [];
				for (let B in r.columns) r.columnsFlat.push(ao(B, r.columns[B]));
			}
			let n = Cr({}, r);
			(n.columns = n.columnsFlat), delete n.columnsFlat;
			let o = JSON.stringify(n),
				[l, _, v] = Be(
					this.mod,
					'duckdb_web_insert_json_from_path',
					['number', 'string', 'string'],
					[e, t, o]
				);
			if (l !== Te.SUCCESS) throw new Error(he(this.mod, _, v));
		}
		globFiles(e) {
			let [t, r, n] = Be(this.mod, 'duckdb_web_fs_glob_file_infos', ['string'], [e]);
			if (t !== Te.SUCCESS) throw new Error(he(this.mod, r, n));
			let o = he(this.mod, r, n);
			xe(this.mod);
			let l = JSON.parse(o);
			return l == null ? [] : l;
		}
		registerFileURL(e, t) {
			t === void 0 && (t = e);
			let [r, n, o] = Be(this.mod, 'duckdb_web_fs_register_file_url', ['string', 'string'], [e, t]);
			if (r !== Te.SUCCESS) throw new Error(he(this.mod, n, o));
			xe(this.mod);
		}
		registerFileText(e, t) {
			let r = PR.encode(t);
			this.registerFileBuffer(e, r);
		}
		registerFileBuffer(e, t) {
			let r = this.mod._malloc(t.length);
			this.mod.HEAPU8.subarray(r, r + t.length).set(t);
			let [o, l, _] = Be(
				this.mod,
				'duckdb_web_fs_register_file_buffer',
				['string', 'number', 'number'],
				[e, r, t.length]
			);
			if (o !== Te.SUCCESS) throw new Error(he(this.mod, l, _));
			xe(this.mod);
		}
		registerFileHandle(e, t) {
			let [r, n, o] = Be(this.mod, 'duckdb_web_fs_register_file_url', ['string', 'string'], [e, e]);
			if (r !== Te.SUCCESS) throw new Error(he(this.mod, n, o));
			if (
				(xe(this.mod),
				(globalThis.DUCKDB_RUNTIME._files = (globalThis.DUCKDB_RUNTIME._files || new Map()).set(
					e,
					t
				)),
				this.pthread)
			) {
				for (let l of this.pthread.runningWorkers)
					l.postMessage({ cmd: 'registerFileHandle', fileName: e, fileHandle: t });
				for (let l of this.pthread.unusedWorkers)
					l.postMessage({ cmd: 'dropFileHandle', fileName: e });
			}
		}
		dropFile(e) {
			return this.mod.ccall('duckdb_web_fs_drop_file', 'boolean', ['string'], [e]);
		}
		dropFiles() {
			let [e, t, r] = Be(this.mod, 'duckdb_web_fs_drop_files', [], []);
			if (e !== Te.SUCCESS) throw new Error(he(this.mod, t, r));
			xe(this.mod);
		}
		flushFiles() {
			this.mod.ccall('duckdb_web_flush_files', null, [], []);
		}
		copyFileToPath(e, t) {
			let [r, n, o] = Be(this.mod, 'duckdb_web_copy_file_to_path', ['string', 'string'], [e, t]);
			if (r !== Te.SUCCESS) throw new Error(he(this.mod, n, o));
			xe(this.mod);
		}
		copyFileToBuffer(e) {
			let [t, r, n] = Be(this.mod, 'duckdb_web_copy_file_to_buffer', ['string'], [e]);
			if (t !== Te.SUCCESS) throw new Error(he(this.mod, r, n));
			let o = this.mod.HEAPU8.subarray(r, r + n),
				l = new Uint8Array(o.length);
			return l.set(o), xe(this.mod), l;
		}
		collectFileStatistics(e, t) {
			let [r, n, o] = Be(this.mod, 'duckdb_web_collect_file_stats', ['string', 'boolean'], [e, t]);
			if (r !== Te.SUCCESS) throw new Error(he(this.mod, n, o));
		}
		exportFileStatistics(e) {
			let [t, r, n] = Be(this.mod, 'duckdb_web_export_file_stats', ['string'], [e]);
			if (t !== Te.SUCCESS) throw new Error(he(this.mod, r, n));
			return new ff(this.mod.HEAPU8.subarray(r, r + n));
		}
	};
	var pf = class extends hf {
		constructor(e, t, r, n) {
			super(e, t);
			(this.mainModuleURL = r), (this.pthreadWorkerURL = n);
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
							(r) => {
								t(r.instance, r.module);
							}
					  )
					: fetch(this.mainModuleURL, { mode: 'cors' })
							.then((r) => r.arrayBuffer())
							.then((r) =>
								WebAssembly.instantiate(r, e).then((n) => {
									t(n.instance, n.module);
								})
							)
							.catch((r) => {
								console.error('Failed to instantiate WASM:', r);
							}),
				[]
			);
		}
	};
	var yf = class extends pf {
		constructor(e, t, r, n = null) {
			super(e, t, r, n);
		}
		instantiateImpl(e) {
			return B0(
				Bo(Cr({}, e), {
					instantiateWasm: this.instantiateWasm.bind(this),
					locateFile: this.locateFile.bind(this)
				})
			);
		}
	};
	var bt = {
		fileInfoCache: new Map(),
		getFileInfo(i, e) {
			try {
				let t = bt.fileInfoCache.get(e);
				if (t) return t;
				let [r, n, o] = Be(i, 'duckdb_web_fs_get_file_info_by_id', ['number'], [e]);
				if (r !== Te.SUCCESS) return null;
				let l = he(i, n, o);
				xe(i);
				let _ = JSON.parse(l);
				if (_ == null) return null;
				let v = Bo(Cr({}, _), { blob: null });
				return bt.fileInfoCache.set(e, v), v;
			} catch (t) {
				return null;
			}
		},
		testPlatformFeature: (i, e) => {
			switch (e) {
				case 1:
					return typeof BigInt64Array != 'undefined';
				default:
					return console.warn(`test for unknown feature: ${e}`), !1;
			}
		},
		openFile: (i, e) => {
			var t;
			try {
				bt.fileInfoCache.delete(e);
				let r = bt.getFileInfo(i, e);
				switch (r == null ? void 0 : r.dataProtocol) {
					case jt.HTTP: {
						let n = null;
						try {
							let o = new XMLHttpRequest();
							o.open('HEAD', r.dataUrl, !1), o.setRequestHeader('Range', 'bytes=0-'), o.send(null);
							let l = o.getResponseHeader('Content-Length');
							if (o.status == 206 && l !== null) {
								let _ = i._malloc(2 * 8);
								return (i.HEAPF64[(_ >> 3) + 0] = +l), (i.HEAPF64[(_ >> 3) + 1] = 0), _;
							}
						} catch (o) {
							(n = o), console.warn(`HEAD request with range header failed: ${o}`);
						}
						if (r.allowFullHttpReads) {
							console.warn(`falling back to full HTTP read for: ${r.dataUrl}`);
							let o = new XMLHttpRequest();
							if (
								(o.open('GET', r.dataUrl, !1),
								(o.responseType = 'arraybuffer'),
								o.send(null),
								o.status == 200)
							) {
								let l = i._malloc(o.response.byteLength),
									_ = new Uint8Array(o.response, 0, o.response.byteLength);
								i.HEAPU8.set(_, l);
								let v = i._malloc(2 * 8);
								return (
									(i.HEAPF64[(v >> 3) + 0] = o.response.byteLength),
									(i.HEAPF64[(v >> 3) + 1] = l),
									v
								);
							}
						}
						if (n != null) throw new Error(`Reading file ${r.fileName} failed with error: ${n}`);
						return 0;
					}
					case jt.NATIVE: {
						let n = (t = bt._files) == null ? void 0 : t.get(r.fileName);
						if (n) {
							let _ = i._malloc(2 * 8);
							return (i.HEAPF64[(_ >> 3) + 0] = n.size), (i.HEAPF64[(_ >> 3) + 1] = 0), _;
						}
						console.warn(`Buffering missing file: ${r.fileName}`);
						let o = i._malloc(2 * 8),
							l = i._malloc(1);
						return (i.HEAPF64[(o >> 3) + 0] = 1), (i.HEAPF64[(o >> 3) + 1] = l), o;
					}
				}
			} catch (r) {
				console.error(r.toString()), zi(i, r.toString());
			}
			return 0;
		},
		glob: (i, e, t) => {
			try {
				let r = he(i, e, t);
				if (r.startsWith('http')) {
					let n = new XMLHttpRequest();
					if ((n.open('HEAD', r, !1), n.send(null), n.status != 200 && n.status !== 206)) {
						zi(i, `HEAD request failed: ${r}`);
						return;
					}
					i.ccall('duckdb_web_fs_glob_add_path', null, ['string'], [r]);
				}
			} catch (r) {
				return zi(i, r.toString()), 0;
			}
		},
		checkFile: (i, e, t) => {
			try {
				let r = he(i, e, t);
				if (r.startsWith('http')) {
					let n = new XMLHttpRequest();
					n.open('HEAD', r, !1), n.setRequestHeader('Range', 'bytes=0-'), n.send(null);
					let o = !1;
					if (n.status == 206) o = !0;
					else if (n.status == 200) o = n.getResponseHeader('Accept-Ranges') === 'bytes';
					else return !1;
					return !!o;
				}
			} catch (r) {
				return !1;
			}
			return !1;
		},
		syncFile: (i, e) => {},
		closeFile: (i, e) => {
			let t = bt.getFileInfo(i, e);
			switch ((bt.fileInfoCache.delete(e), t == null ? void 0 : t.dataProtocol)) {
				case jt.HTTP:
					break;
				case jt.NATIVE:
					return;
			}
		},
		truncateFile: (i, e, t) => {
			let r = bt.getFileInfo(i, e);
			switch (r == null ? void 0 : r.dataProtocol) {
				case jt.HTTP:
					zi(i, 'Cannot truncate a http file');
					return;
				case jt.NATIVE:
					zi(i, 'truncateFile not implemented');
					return;
			}
			return 0;
		},
		readFile(i, e, t, r, n) {
			var o;
			try {
				let l = bt.getFileInfo(i, e);
				switch (l == null ? void 0 : l.dataProtocol) {
					case jt.HTTP: {
						if (!l.dataUrl) throw new Error(`Missing data URL for file ${e}`);
						try {
							let _ = new XMLHttpRequest();
							if (
								(_.open('GET', l.dataUrl, !1),
								(_.responseType = 'arraybuffer'),
								_.setRequestHeader('Range', `bytes=${n}-${n + r - 1}`),
								_.send(null),
								_.status == 206 || (_.status == 200 && r == _.response.byteLength && n == 0))
							) {
								let v = new Uint8Array(_.response, 0, Math.min(_.response.byteLength, r));
								return i.HEAPU8.set(v, t), v.byteLength;
							} else
								throw _.status == 200
									? new Error(
											`Range request for ${l.dataUrl} did not return a partial response: ${_.status} "${_.statusText}"`
									  )
									: new Error(
											`Range request for ${l.dataUrl} did returned non-success status: ${_.status} "${_.statusText}"`
									  );
						} catch (_) {
							throw new Error(`Range request for ${l.dataUrl} failed with error: ${_}"`);
						}
					}
					case jt.NATIVE: {
						let _ = (o = bt._files) == null ? void 0 : o.get(l.fileName);
						if (!_) throw new Error(`No handle available for file: ${l.fileName}`);
						let v = _.slice(n, n + r),
							B = new Uint8Array(new FileReaderSync().readAsArrayBuffer(v));
						return i.HEAPU8.set(B, t), B.byteLength;
					}
				}
				return 0;
			} catch (l) {
				return zi(i, l.toString()), 0;
			}
		},
		writeFile: (i, e, t, r, n) => {
			let o = bt.getFileInfo(i, e);
			switch (o == null ? void 0 : o.dataProtocol) {
				case jt.HTTP:
					return zi(i, 'Cannot write to HTTP file'), 0;
				case jt.NATIVE:
					return zi(i, 'writefile not implemented'), 0;
			}
			return 0;
		},
		getLastFileModificationTime: (i, e) => {
			var r;
			let t = bt.getFileInfo(i, e);
			switch (t == null ? void 0 : t.dataProtocol) {
				case jt.NATIVE: {
					if (!((r = bt._files) == null ? void 0 : r.get(t.fileName)))
						throw Error(`No handle available for file: ${t.fileName}`);
					return 0;
				}
				case jt.HTTP:
					return new Date().getTime();
			}
			return 0;
		},
		checkDirectory: (i, e, t) => {
			let r = he(i, e, t);
			return console.log(`checkDirectory: ${r}`), !1;
		},
		createDirectory: (i, e, t) => {
			let r = he(i, e, t);
			console.log(`createDirectory: ${r}`);
		},
		removeDirectory: (i, e, t) => {
			let r = he(i, e, t);
			console.log(`removeDirectory: ${r}`);
		},
		listDirectoryEntries: (i, e, t) => {
			let r = he(i, e, t);
			return console.log(`listDirectoryEntries: ${r}`), !1;
		},
		moveFile: (i, e, t, r, n) => {},
		removeFile: (i, e, t) => {}
	};
	var D0 = class extends uf {
		postMessage(e, t) {
			globalThis.postMessage(e, t);
		}
		async instantiate(e, t) {
			return await new yf(this, bt, e, t).instantiate();
		}
	};
	function F0() {
		let i = new D0();
		globalThis.onmessage = async (e) => {
			await i.onMessage(e.data);
		};
	}
	F0();
	return K1(NR);
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
//# sourceMappingURL=duckdb-browser.worker.js.map
