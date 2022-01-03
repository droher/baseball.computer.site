var duckdb = (() => {
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __markAsModule = (target) => __defProp(target, '__esModule', { value: true });
	var __require = /* @__PURE__ */ ((x) =>
		typeof require !== 'undefined'
			? require
			: typeof Proxy !== 'undefined'
			? new Proxy(x, {
					get: (a, b) => (typeof require !== 'undefined' ? require : a)[b]
			  })
			: x)(function (x) {
		if (typeof require !== 'undefined') return require.apply(this, arguments);
		throw new Error('Dynamic require of "' + x + '" is not supported');
	});
	var __commonJS = (cb, mod) =>
		function __require2() {
			return (
				mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports
			);
		};
	var __reExport = (target, module, copyDefault, desc) => {
		if ((module && typeof module === 'object') || typeof module === 'function') {
			for (let key of __getOwnPropNames(module))
				if (!__hasOwnProp.call(target, key) && (copyDefault || key !== 'default'))
					__defProp(target, key, {
						get: () => module[key],
						enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable
					});
		}
		return target;
	};
	var __toESM = (module, isNodeMode) => {
		return __reExport(
			__markAsModule(
				__defProp(
					module != null ? __create(__getProtoOf(module)) : {},
					'default',
					!isNodeMode && module && module.__esModule
						? { get: () => module.default, enumerable: true }
						: { value: module, enumerable: true }
				)
			),
			module
		);
	};

	// ../../node_modules/tslib/tslib.js
	var require_tslib = __commonJS({
		'../../node_modules/tslib/tslib.js'(exports, module) {
			var __extends;
			var __assign;
			var __rest;
			var __decorate;
			var __param;
			var __metadata;
			var __awaiter;
			var __generator;
			var __exportStar;
			var __values;
			var __read;
			var __spread;
			var __spreadArrays;
			var __spreadArray;
			var __await;
			var __asyncGenerator;
			var __asyncDelegator;
			var __asyncValues;
			var __makeTemplateObject;
			var __importStar;
			var __importDefault;
			var __classPrivateFieldGet;
			var __classPrivateFieldSet;
			var __createBinding;
			(function (factory) {
				var root =
					typeof global === 'object'
						? global
						: typeof self === 'object'
						? self
						: typeof this === 'object'
						? this
						: {};
				if (typeof define === 'function' && define.amd) {
					define('tslib', ['exports'], function (exports2) {
						factory(createExporter(root, createExporter(exports2)));
					});
				} else if (typeof module === 'object' && typeof module.exports === 'object') {
					factory(createExporter(root, createExporter(module.exports)));
				} else {
					factory(createExporter(root));
				}
				function createExporter(exports2, previous) {
					if (exports2 !== root) {
						if (typeof Object.create === 'function') {
							Object.defineProperty(exports2, '__esModule', { value: true });
						} else {
							exports2.__esModule = true;
						}
					}
					return function (id, v) {
						return (exports2[id] = previous ? previous(id, v) : v);
					};
				}
			})(function (exporter) {
				var extendStatics =
					Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array &&
						function (d, b) {
							d.__proto__ = b;
						}) ||
					function (d, b) {
						for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
					};
				__extends = function (d, b) {
					if (typeof b !== 'function' && b !== null)
						throw new TypeError(
							'Class extends value ' + String(b) + ' is not a constructor or null'
						);
					extendStatics(d, b);
					function __() {
						this.constructor = d;
					}
					d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
				};
				__assign =
					Object.assign ||
					function (t) {
						for (var s, i = 1, n = arguments.length; i < n; i++) {
							s = arguments[i];
							for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
						}
						return t;
					};
				__rest = function (s, e) {
					var t = {};
					for (var p in s)
						if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
					if (s != null && typeof Object.getOwnPropertySymbols === 'function')
						for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
							if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
								t[p[i]] = s[p[i]];
						}
					return t;
				};
				__decorate = function (decorators, target, key, desc) {
					var c = arguments.length,
						r =
							c < 3
								? target
								: desc === null
								? (desc = Object.getOwnPropertyDescriptor(target, key))
								: desc,
						d;
					if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
						r = Reflect.decorate(decorators, target, key, desc);
					else
						for (var i = decorators.length - 1; i >= 0; i--)
							if ((d = decorators[i]))
								r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
					return c > 3 && r && Object.defineProperty(target, key, r), r;
				};
				__param = function (paramIndex, decorator) {
					return function (target, key) {
						decorator(target, key, paramIndex);
					};
				};
				__metadata = function (metadataKey, metadataValue) {
					if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
						return Reflect.metadata(metadataKey, metadataValue);
				};
				__awaiter = function (thisArg, _arguments, P, generator) {
					function adopt(value) {
						return value instanceof P
							? value
							: new P(function (resolve) {
									resolve(value);
							  });
					}
					return new (P || (P = Promise))(function (resolve, reject) {
						function fulfilled(value) {
							try {
								step(generator.next(value));
							} catch (e) {
								reject(e);
							}
						}
						function rejected(value) {
							try {
								step(generator['throw'](value));
							} catch (e) {
								reject(e);
							}
						}
						function step(result) {
							result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
						}
						step((generator = generator.apply(thisArg, _arguments || [])).next());
					});
				};
				__generator = function (thisArg, body) {
					var _ = {
							label: 0,
							sent: function () {
								if (t[0] & 1) throw t[1];
								return t[1];
							},
							trys: [],
							ops: []
						},
						f,
						y,
						t,
						g;
					return (
						(g = { next: verb(0), throw: verb(1), return: verb(2) }),
						typeof Symbol === 'function' &&
							(g[Symbol.iterator] = function () {
								return this;
							}),
						g
					);
					function verb(n) {
						return function (v) {
							return step([n, v]);
						};
					}
					function step(op) {
						if (f) throw new TypeError('Generator is already executing.');
						while (_)
							try {
								if (
									((f = 1),
									y &&
										(t =
											op[0] & 2
												? y['return']
												: op[0]
												? y['throw'] || ((t = y['return']) && t.call(y), 0)
												: y.next) &&
										!(t = t.call(y, op[1])).done)
								)
									return t;
								if (((y = 0), t)) op = [op[0] & 2, t.value];
								switch (op[0]) {
									case 0:
									case 1:
										t = op;
										break;
									case 4:
										_.label++;
										return { value: op[1], done: false };
									case 5:
										_.label++;
										y = op[1];
										op = [0];
										continue;
									case 7:
										op = _.ops.pop();
										_.trys.pop();
										continue;
									default:
										if (
											!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
											(op[0] === 6 || op[0] === 2)
										) {
											_ = 0;
											continue;
										}
										if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
											_.label = op[1];
											break;
										}
										if (op[0] === 6 && _.label < t[1]) {
											_.label = t[1];
											t = op;
											break;
										}
										if (t && _.label < t[2]) {
											_.label = t[2];
											_.ops.push(op);
											break;
										}
										if (t[2]) _.ops.pop();
										_.trys.pop();
										continue;
								}
								op = body.call(thisArg, _);
							} catch (e) {
								op = [6, e];
								y = 0;
							} finally {
								f = t = 0;
							}
						if (op[0] & 5) throw op[1];
						return { value: op[0] ? op[1] : void 0, done: true };
					}
				};
				__exportStar = function (m, o) {
					for (var p in m)
						if (p !== 'default' && !Object.prototype.hasOwnProperty.call(o, p))
							__createBinding(o, m, p);
				};
				__createBinding = Object.create
					? function (o, m, k, k2) {
							if (k2 === void 0) k2 = k;
							Object.defineProperty(o, k2, {
								enumerable: true,
								get: function () {
									return m[k];
								}
							});
					  }
					: function (o, m, k, k2) {
							if (k2 === void 0) k2 = k;
							o[k2] = m[k];
					  };
				__values = function (o) {
					var s = typeof Symbol === 'function' && Symbol.iterator,
						m = s && o[s],
						i = 0;
					if (m) return m.call(o);
					if (o && typeof o.length === 'number')
						return {
							next: function () {
								if (o && i >= o.length) o = void 0;
								return { value: o && o[i++], done: !o };
							}
						};
					throw new TypeError(s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
				};
				__read = function (o, n) {
					var m = typeof Symbol === 'function' && o[Symbol.iterator];
					if (!m) return o;
					var i = m.call(o),
						r,
						ar = [],
						e;
					try {
						while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
					} catch (error) {
						e = { error };
					} finally {
						try {
							if (r && !r.done && (m = i['return'])) m.call(i);
						} finally {
							if (e) throw e.error;
						}
					}
					return ar;
				};
				__spread = function () {
					for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
					return ar;
				};
				__spreadArrays = function () {
					for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
					for (var r = Array(s), k = 0, i = 0; i < il; i++)
						for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
					return r;
				};
				__spreadArray = function (to, from, pack) {
					if (pack || arguments.length === 2)
						for (var i = 0, l = from.length, ar; i < l; i++) {
							if (ar || !(i in from)) {
								if (!ar) ar = Array.prototype.slice.call(from, 0, i);
								ar[i] = from[i];
							}
						}
					return to.concat(ar || Array.prototype.slice.call(from));
				};
				__await = function (v) {
					return this instanceof __await ? ((this.v = v), this) : new __await(v);
				};
				__asyncGenerator = function (thisArg, _arguments, generator) {
					if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
					var g = generator.apply(thisArg, _arguments || []),
						i,
						q = [];
					return (
						(i = {}),
						verb('next'),
						verb('throw'),
						verb('return'),
						(i[Symbol.asyncIterator] = function () {
							return this;
						}),
						i
					);
					function verb(n) {
						if (g[n])
							i[n] = function (v) {
								return new Promise(function (a, b) {
									q.push([n, v, a, b]) > 1 || resume(n, v);
								});
							};
					}
					function resume(n, v) {
						try {
							step(g[n](v));
						} catch (e) {
							settle(q[0][3], e);
						}
					}
					function step(r) {
						r.value instanceof __await
							? Promise.resolve(r.value.v).then(fulfill, reject)
							: settle(q[0][2], r);
					}
					function fulfill(value) {
						resume('next', value);
					}
					function reject(value) {
						resume('throw', value);
					}
					function settle(f, v) {
						if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
					}
				};
				__asyncDelegator = function (o) {
					var i, p;
					return (
						(i = {}),
						verb('next'),
						verb('throw', function (e) {
							throw e;
						}),
						verb('return'),
						(i[Symbol.iterator] = function () {
							return this;
						}),
						i
					);
					function verb(n, f) {
						i[n] = o[n]
							? function (v) {
									return (p = !p)
										? { value: __await(o[n](v)), done: n === 'return' }
										: f
										? f(v)
										: v;
							  }
							: f;
					}
				};
				__asyncValues = function (o) {
					if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
					var m = o[Symbol.asyncIterator],
						i;
					return m
						? m.call(o)
						: ((o = typeof __values === 'function' ? __values(o) : o[Symbol.iterator]()),
						  (i = {}),
						  verb('next'),
						  verb('throw'),
						  verb('return'),
						  (i[Symbol.asyncIterator] = function () {
								return this;
						  }),
						  i);
					function verb(n) {
						i[n] =
							o[n] &&
							function (v) {
								return new Promise(function (resolve, reject) {
									(v = o[n](v)), settle(resolve, reject, v.done, v.value);
								});
							};
					}
					function settle(resolve, reject, d, v) {
						Promise.resolve(v).then(function (v2) {
							resolve({ value: v2, done: d });
						}, reject);
					}
				};
				__makeTemplateObject = function (cooked, raw) {
					if (Object.defineProperty) {
						Object.defineProperty(cooked, 'raw', { value: raw });
					} else {
						cooked.raw = raw;
					}
					return cooked;
				};
				var __setModuleDefault = Object.create
					? function (o, v) {
							Object.defineProperty(o, 'default', { enumerable: true, value: v });
					  }
					: function (o, v) {
							o['default'] = v;
					  };
				__importStar = function (mod) {
					if (mod && mod.__esModule) return mod;
					var result = {};
					if (mod != null) {
						for (var k in mod)
							if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
								__createBinding(result, mod, k);
					}
					__setModuleDefault(result, mod);
					return result;
				};
				__importDefault = function (mod) {
					return mod && mod.__esModule ? mod : { default: mod };
				};
				__classPrivateFieldGet = function (receiver, state, kind, f) {
					if (kind === 'a' && !f)
						throw new TypeError('Private accessor was defined without a getter');
					if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver))
						throw new TypeError(
							'Cannot read private member from an object whose class did not declare it'
						);
					return kind === 'm'
						? f
						: kind === 'a'
						? f.call(receiver)
						: f
						? f.value
						: state.get(receiver);
				};
				__classPrivateFieldSet = function (receiver, state, value, kind, f) {
					if (kind === 'm') throw new TypeError('Private method is not writable');
					if (kind === 'a' && !f)
						throw new TypeError('Private accessor was defined without a setter');
					if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver))
						throw new TypeError(
							'Cannot write private member to an object whose class did not declare it'
						);
					return (
						kind === 'a'
							? f.call(receiver, value)
							: f
							? (f.value = value)
							: state.set(receiver, value),
						value
					);
				};
				exporter('__extends', __extends);
				exporter('__assign', __assign);
				exporter('__rest', __rest);
				exporter('__decorate', __decorate);
				exporter('__param', __param);
				exporter('__metadata', __metadata);
				exporter('__awaiter', __awaiter);
				exporter('__generator', __generator);
				exporter('__exportStar', __exportStar);
				exporter('__createBinding', __createBinding);
				exporter('__values', __values);
				exporter('__read', __read);
				exporter('__spread', __spread);
				exporter('__spreadArrays', __spreadArrays);
				exporter('__spreadArray', __spreadArray);
				exporter('__await', __await);
				exporter('__asyncGenerator', __asyncGenerator);
				exporter('__asyncDelegator', __asyncDelegator);
				exporter('__asyncValues', __asyncValues);
				exporter('__makeTemplateObject', __makeTemplateObject);
				exporter('__importStar', __importStar);
				exporter('__importDefault', __importDefault);
				exporter('__classPrivateFieldGet', __classPrivateFieldGet);
				exporter('__classPrivateFieldSet', __classPrivateFieldSet);
			});
		}
	});

	// ../../node_modules/flatbuffers/js/flatbuffers.js
	var require_flatbuffers = __commonJS({
		'../../node_modules/flatbuffers/js/flatbuffers.js'(exports) {
			var flatbuffers = {};
			flatbuffers.Offset;
			flatbuffers.Table;
			flatbuffers.SIZEOF_SHORT = 2;
			flatbuffers.SIZEOF_INT = 4;
			flatbuffers.FILE_IDENTIFIER_LENGTH = 4;
			flatbuffers.SIZE_PREFIX_LENGTH = 4;
			flatbuffers.Encoding = {
				UTF8_BYTES: 1,
				UTF16_STRING: 2
			};
			flatbuffers.int32 = new Int32Array(2);
			flatbuffers.float32 = new Float32Array(flatbuffers.int32.buffer);
			flatbuffers.float64 = new Float64Array(flatbuffers.int32.buffer);
			flatbuffers.isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
			flatbuffers.Long = function (low, high) {
				this.low = low | 0;
				this.high = high | 0;
			};
			flatbuffers.Long.create = function (low, high) {
				return low == 0 && high == 0 ? flatbuffers.Long.ZERO : new flatbuffers.Long(low, high);
			};
			flatbuffers.Long.prototype.toFloat64 = function () {
				return (this.low >>> 0) + this.high * 4294967296;
			};
			flatbuffers.Long.prototype.equals = function (other) {
				return this.low == other.low && this.high == other.high;
			};
			flatbuffers.Long.ZERO = new flatbuffers.Long(0, 0);
			flatbuffers.Builder = function (opt_initial_size) {
				if (!opt_initial_size) {
					var initial_size = 1024;
				} else {
					var initial_size = opt_initial_size;
				}
				this.bb = flatbuffers.ByteBuffer.allocate(initial_size);
				this.space = initial_size;
				this.minalign = 1;
				this.vtable = null;
				this.vtable_in_use = 0;
				this.isNested = false;
				this.object_start = 0;
				this.vtables = [];
				this.vector_num_elems = 0;
				this.force_defaults = false;
			};
			flatbuffers.Builder.prototype.clear = function () {
				this.bb.clear();
				this.space = this.bb.capacity();
				this.minalign = 1;
				this.vtable = null;
				this.vtable_in_use = 0;
				this.isNested = false;
				this.object_start = 0;
				this.vtables = [];
				this.vector_num_elems = 0;
				this.force_defaults = false;
			};
			flatbuffers.Builder.prototype.forceDefaults = function (forceDefaults) {
				this.force_defaults = forceDefaults;
			};
			flatbuffers.Builder.prototype.dataBuffer = function () {
				return this.bb;
			};
			flatbuffers.Builder.prototype.asUint8Array = function () {
				return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
			};
			flatbuffers.Builder.prototype.prep = function (size, additional_bytes) {
				if (size > this.minalign) {
					this.minalign = size;
				}
				var align_size = (~(this.bb.capacity() - this.space + additional_bytes) + 1) & (size - 1);
				while (this.space < align_size + size + additional_bytes) {
					var old_buf_size = this.bb.capacity();
					this.bb = flatbuffers.Builder.growByteBuffer(this.bb);
					this.space += this.bb.capacity() - old_buf_size;
				}
				this.pad(align_size);
			};
			flatbuffers.Builder.prototype.pad = function (byte_size) {
				for (var i = 0; i < byte_size; i++) {
					this.bb.writeInt8(--this.space, 0);
				}
			};
			flatbuffers.Builder.prototype.writeInt8 = function (value) {
				this.bb.writeInt8((this.space -= 1), value);
			};
			flatbuffers.Builder.prototype.writeInt16 = function (value) {
				this.bb.writeInt16((this.space -= 2), value);
			};
			flatbuffers.Builder.prototype.writeInt32 = function (value) {
				this.bb.writeInt32((this.space -= 4), value);
			};
			flatbuffers.Builder.prototype.writeInt64 = function (value) {
				this.bb.writeInt64((this.space -= 8), value);
			};
			flatbuffers.Builder.prototype.writeFloat32 = function (value) {
				this.bb.writeFloat32((this.space -= 4), value);
			};
			flatbuffers.Builder.prototype.writeFloat64 = function (value) {
				this.bb.writeFloat64((this.space -= 8), value);
			};
			flatbuffers.Builder.prototype.addInt8 = function (value) {
				this.prep(1, 0);
				this.writeInt8(value);
			};
			flatbuffers.Builder.prototype.addInt16 = function (value) {
				this.prep(2, 0);
				this.writeInt16(value);
			};
			flatbuffers.Builder.prototype.addInt32 = function (value) {
				this.prep(4, 0);
				this.writeInt32(value);
			};
			flatbuffers.Builder.prototype.addInt64 = function (value) {
				this.prep(8, 0);
				this.writeInt64(value);
			};
			flatbuffers.Builder.prototype.addFloat32 = function (value) {
				this.prep(4, 0);
				this.writeFloat32(value);
			};
			flatbuffers.Builder.prototype.addFloat64 = function (value) {
				this.prep(8, 0);
				this.writeFloat64(value);
			};
			flatbuffers.Builder.prototype.addFieldInt8 = function (voffset, value, defaultValue) {
				if (this.force_defaults || value != defaultValue) {
					this.addInt8(value);
					this.slot(voffset);
				}
			};
			flatbuffers.Builder.prototype.addFieldInt16 = function (voffset, value, defaultValue) {
				if (this.force_defaults || value != defaultValue) {
					this.addInt16(value);
					this.slot(voffset);
				}
			};
			flatbuffers.Builder.prototype.addFieldInt32 = function (voffset, value, defaultValue) {
				if (this.force_defaults || value != defaultValue) {
					this.addInt32(value);
					this.slot(voffset);
				}
			};
			flatbuffers.Builder.prototype.addFieldInt64 = function (voffset, value, defaultValue) {
				if (this.force_defaults || !value.equals(defaultValue)) {
					this.addInt64(value);
					this.slot(voffset);
				}
			};
			flatbuffers.Builder.prototype.addFieldFloat32 = function (voffset, value, defaultValue) {
				if (this.force_defaults || value != defaultValue) {
					this.addFloat32(value);
					this.slot(voffset);
				}
			};
			flatbuffers.Builder.prototype.addFieldFloat64 = function (voffset, value, defaultValue) {
				if (this.force_defaults || value != defaultValue) {
					this.addFloat64(value);
					this.slot(voffset);
				}
			};
			flatbuffers.Builder.prototype.addFieldOffset = function (voffset, value, defaultValue) {
				if (this.force_defaults || value != defaultValue) {
					this.addOffset(value);
					this.slot(voffset);
				}
			};
			flatbuffers.Builder.prototype.addFieldStruct = function (voffset, value, defaultValue) {
				if (value != defaultValue) {
					this.nested(value);
					this.slot(voffset);
				}
			};
			flatbuffers.Builder.prototype.nested = function (obj) {
				if (obj != this.offset()) {
					throw new Error('FlatBuffers: struct must be serialized inline.');
				}
			};
			flatbuffers.Builder.prototype.notNested = function () {
				if (this.isNested) {
					throw new Error('FlatBuffers: object serialization must not be nested.');
				}
			};
			flatbuffers.Builder.prototype.slot = function (voffset) {
				this.vtable[voffset] = this.offset();
			};
			flatbuffers.Builder.prototype.offset = function () {
				return this.bb.capacity() - this.space;
			};
			flatbuffers.Builder.growByteBuffer = function (bb) {
				var old_buf_size = bb.capacity();
				if (old_buf_size & 3221225472) {
					throw new Error('FlatBuffers: cannot grow buffer beyond 2 gigabytes.');
				}
				var new_buf_size = old_buf_size << 1;
				var nbb = flatbuffers.ByteBuffer.allocate(new_buf_size);
				nbb.setPosition(new_buf_size - old_buf_size);
				nbb.bytes().set(bb.bytes(), new_buf_size - old_buf_size);
				return nbb;
			};
			flatbuffers.Builder.prototype.addOffset = function (offset) {
				this.prep(flatbuffers.SIZEOF_INT, 0);
				this.writeInt32(this.offset() - offset + flatbuffers.SIZEOF_INT);
			};
			flatbuffers.Builder.prototype.startObject = function (numfields) {
				this.notNested();
				if (this.vtable == null) {
					this.vtable = [];
				}
				this.vtable_in_use = numfields;
				for (var i = 0; i < numfields; i++) {
					this.vtable[i] = 0;
				}
				this.isNested = true;
				this.object_start = this.offset();
			};
			flatbuffers.Builder.prototype.endObject = function () {
				if (this.vtable == null || !this.isNested) {
					throw new Error('FlatBuffers: endObject called without startObject');
				}
				this.addInt32(0);
				var vtableloc = this.offset();
				var i = this.vtable_in_use - 1;
				for (; i >= 0 && this.vtable[i] == 0; i--) {}
				var trimmed_size = i + 1;
				for (; i >= 0; i--) {
					this.addInt16(this.vtable[i] != 0 ? vtableloc - this.vtable[i] : 0);
				}
				var standard_fields = 2;
				this.addInt16(vtableloc - this.object_start);
				var len = (trimmed_size + standard_fields) * flatbuffers.SIZEOF_SHORT;
				this.addInt16(len);
				var existing_vtable = 0;
				var vt1 = this.space;
				outer_loop: for (i = 0; i < this.vtables.length; i++) {
					var vt2 = this.bb.capacity() - this.vtables[i];
					if (len == this.bb.readInt16(vt2)) {
						for (var j = flatbuffers.SIZEOF_SHORT; j < len; j += flatbuffers.SIZEOF_SHORT) {
							if (this.bb.readInt16(vt1 + j) != this.bb.readInt16(vt2 + j)) {
								continue outer_loop;
							}
						}
						existing_vtable = this.vtables[i];
						break;
					}
				}
				if (existing_vtable) {
					this.space = this.bb.capacity() - vtableloc;
					this.bb.writeInt32(this.space, existing_vtable - vtableloc);
				} else {
					this.vtables.push(this.offset());
					this.bb.writeInt32(this.bb.capacity() - vtableloc, this.offset() - vtableloc);
				}
				this.isNested = false;
				return vtableloc;
			};
			flatbuffers.Builder.prototype.finish = function (
				root_table,
				opt_file_identifier,
				opt_size_prefix
			) {
				var size_prefix = opt_size_prefix ? flatbuffers.SIZE_PREFIX_LENGTH : 0;
				if (opt_file_identifier) {
					var file_identifier = opt_file_identifier;
					this.prep(
						this.minalign,
						flatbuffers.SIZEOF_INT + flatbuffers.FILE_IDENTIFIER_LENGTH + size_prefix
					);
					if (file_identifier.length != flatbuffers.FILE_IDENTIFIER_LENGTH) {
						throw new Error(
							'FlatBuffers: file identifier must be length ' + flatbuffers.FILE_IDENTIFIER_LENGTH
						);
					}
					for (var i = flatbuffers.FILE_IDENTIFIER_LENGTH - 1; i >= 0; i--) {
						this.writeInt8(file_identifier.charCodeAt(i));
					}
				}
				this.prep(this.minalign, flatbuffers.SIZEOF_INT + size_prefix);
				this.addOffset(root_table);
				if (size_prefix) {
					this.addInt32(this.bb.capacity() - this.space);
				}
				this.bb.setPosition(this.space);
			};
			flatbuffers.Builder.prototype.finishSizePrefixed = function (
				root_table,
				opt_file_identifier
			) {
				this.finish(root_table, opt_file_identifier, true);
			};
			flatbuffers.Builder.prototype.requiredField = function (table, field) {
				var table_start = this.bb.capacity() - table;
				var vtable_start = table_start - this.bb.readInt32(table_start);
				var ok = this.bb.readInt16(vtable_start + field) != 0;
				if (!ok) {
					throw new Error('FlatBuffers: field ' + field + ' must be set');
				}
			};
			flatbuffers.Builder.prototype.startVector = function (elem_size, num_elems, alignment) {
				this.notNested();
				this.vector_num_elems = num_elems;
				this.prep(flatbuffers.SIZEOF_INT, elem_size * num_elems);
				this.prep(alignment, elem_size * num_elems);
			};
			flatbuffers.Builder.prototype.endVector = function () {
				this.writeInt32(this.vector_num_elems);
				return this.offset();
			};
			flatbuffers.Builder.prototype.createString = function (s) {
				if (s instanceof Uint8Array) {
					var utf8 = s;
				} else {
					var utf8 = [];
					var i = 0;
					while (i < s.length) {
						var codePoint;
						var a = s.charCodeAt(i++);
						if (a < 55296 || a >= 56320) {
							codePoint = a;
						} else {
							var b = s.charCodeAt(i++);
							codePoint = (a << 10) + b + (65536 - (55296 << 10) - 56320);
						}
						if (codePoint < 128) {
							utf8.push(codePoint);
						} else {
							if (codePoint < 2048) {
								utf8.push(((codePoint >> 6) & 31) | 192);
							} else {
								if (codePoint < 65536) {
									utf8.push(((codePoint >> 12) & 15) | 224);
								} else {
									utf8.push(((codePoint >> 18) & 7) | 240, ((codePoint >> 12) & 63) | 128);
								}
								utf8.push(((codePoint >> 6) & 63) | 128);
							}
							utf8.push((codePoint & 63) | 128);
						}
					}
				}
				this.addInt8(0);
				this.startVector(1, utf8.length, 1);
				this.bb.setPosition((this.space -= utf8.length));
				for (var i = 0, offset = this.space, bytes = this.bb.bytes(); i < utf8.length; i++) {
					bytes[offset++] = utf8[i];
				}
				return this.endVector();
			};
			flatbuffers.Builder.prototype.createLong = function (low, high) {
				return flatbuffers.Long.create(low, high);
			};
			flatbuffers.ByteBuffer = function (bytes) {
				this.bytes_ = bytes;
				this.position_ = 0;
			};
			flatbuffers.ByteBuffer.allocate = function (byte_size) {
				return new flatbuffers.ByteBuffer(new Uint8Array(byte_size));
			};
			flatbuffers.ByteBuffer.prototype.clear = function () {
				this.position_ = 0;
			};
			flatbuffers.ByteBuffer.prototype.bytes = function () {
				return this.bytes_;
			};
			flatbuffers.ByteBuffer.prototype.position = function () {
				return this.position_;
			};
			flatbuffers.ByteBuffer.prototype.setPosition = function (position) {
				this.position_ = position;
			};
			flatbuffers.ByteBuffer.prototype.capacity = function () {
				return this.bytes_.length;
			};
			flatbuffers.ByteBuffer.prototype.readInt8 = function (offset) {
				return (this.readUint8(offset) << 24) >> 24;
			};
			flatbuffers.ByteBuffer.prototype.readUint8 = function (offset) {
				return this.bytes_[offset];
			};
			flatbuffers.ByteBuffer.prototype.readInt16 = function (offset) {
				return (this.readUint16(offset) << 16) >> 16;
			};
			flatbuffers.ByteBuffer.prototype.readUint16 = function (offset) {
				return this.bytes_[offset] | (this.bytes_[offset + 1] << 8);
			};
			flatbuffers.ByteBuffer.prototype.readInt32 = function (offset) {
				return (
					this.bytes_[offset] |
					(this.bytes_[offset + 1] << 8) |
					(this.bytes_[offset + 2] << 16) |
					(this.bytes_[offset + 3] << 24)
				);
			};
			flatbuffers.ByteBuffer.prototype.readUint32 = function (offset) {
				return this.readInt32(offset) >>> 0;
			};
			flatbuffers.ByteBuffer.prototype.readInt64 = function (offset) {
				return new flatbuffers.Long(this.readInt32(offset), this.readInt32(offset + 4));
			};
			flatbuffers.ByteBuffer.prototype.readUint64 = function (offset) {
				return new flatbuffers.Long(this.readUint32(offset), this.readUint32(offset + 4));
			};
			flatbuffers.ByteBuffer.prototype.readFloat32 = function (offset) {
				flatbuffers.int32[0] = this.readInt32(offset);
				return flatbuffers.float32[0];
			};
			flatbuffers.ByteBuffer.prototype.readFloat64 = function (offset) {
				flatbuffers.int32[flatbuffers.isLittleEndian ? 0 : 1] = this.readInt32(offset);
				flatbuffers.int32[flatbuffers.isLittleEndian ? 1 : 0] = this.readInt32(offset + 4);
				return flatbuffers.float64[0];
			};
			flatbuffers.ByteBuffer.prototype.writeInt8 = function (offset, value) {
				this.bytes_[offset] = value;
			};
			flatbuffers.ByteBuffer.prototype.writeUint8 = function (offset, value) {
				this.bytes_[offset] = value;
			};
			flatbuffers.ByteBuffer.prototype.writeInt16 = function (offset, value) {
				this.bytes_[offset] = value;
				this.bytes_[offset + 1] = value >> 8;
			};
			flatbuffers.ByteBuffer.prototype.writeUint16 = function (offset, value) {
				this.bytes_[offset] = value;
				this.bytes_[offset + 1] = value >> 8;
			};
			flatbuffers.ByteBuffer.prototype.writeInt32 = function (offset, value) {
				this.bytes_[offset] = value;
				this.bytes_[offset + 1] = value >> 8;
				this.bytes_[offset + 2] = value >> 16;
				this.bytes_[offset + 3] = value >> 24;
			};
			flatbuffers.ByteBuffer.prototype.writeUint32 = function (offset, value) {
				this.bytes_[offset] = value;
				this.bytes_[offset + 1] = value >> 8;
				this.bytes_[offset + 2] = value >> 16;
				this.bytes_[offset + 3] = value >> 24;
			};
			flatbuffers.ByteBuffer.prototype.writeInt64 = function (offset, value) {
				this.writeInt32(offset, value.low);
				this.writeInt32(offset + 4, value.high);
			};
			flatbuffers.ByteBuffer.prototype.writeUint64 = function (offset, value) {
				this.writeUint32(offset, value.low);
				this.writeUint32(offset + 4, value.high);
			};
			flatbuffers.ByteBuffer.prototype.writeFloat32 = function (offset, value) {
				flatbuffers.float32[0] = value;
				this.writeInt32(offset, flatbuffers.int32[0]);
			};
			flatbuffers.ByteBuffer.prototype.writeFloat64 = function (offset, value) {
				flatbuffers.float64[0] = value;
				this.writeInt32(offset, flatbuffers.int32[flatbuffers.isLittleEndian ? 0 : 1]);
				this.writeInt32(offset + 4, flatbuffers.int32[flatbuffers.isLittleEndian ? 1 : 0]);
			};
			flatbuffers.ByteBuffer.prototype.getBufferIdentifier = function () {
				if (
					this.bytes_.length <
					this.position_ + flatbuffers.SIZEOF_INT + flatbuffers.FILE_IDENTIFIER_LENGTH
				) {
					throw new Error('FlatBuffers: ByteBuffer is too short to contain an identifier.');
				}
				var result = '';
				for (var i = 0; i < flatbuffers.FILE_IDENTIFIER_LENGTH; i++) {
					result += String.fromCharCode(this.readInt8(this.position_ + flatbuffers.SIZEOF_INT + i));
				}
				return result;
			};
			flatbuffers.ByteBuffer.prototype.__offset = function (bb_pos, vtable_offset) {
				var vtable = bb_pos - this.readInt32(bb_pos);
				return vtable_offset < this.readInt16(vtable) ? this.readInt16(vtable + vtable_offset) : 0;
			};
			flatbuffers.ByteBuffer.prototype.__union = function (t, offset) {
				t.bb_pos = offset + this.readInt32(offset);
				t.bb = this;
				return t;
			};
			flatbuffers.ByteBuffer.prototype.__string = function (offset, opt_encoding) {
				offset += this.readInt32(offset);
				var length = this.readInt32(offset);
				var result = '';
				var i = 0;
				offset += flatbuffers.SIZEOF_INT;
				if (opt_encoding === flatbuffers.Encoding.UTF8_BYTES) {
					return this.bytes_.subarray(offset, offset + length);
				}
				while (i < length) {
					var codePoint;
					var a = this.readUint8(offset + i++);
					if (a < 192) {
						codePoint = a;
					} else {
						var b = this.readUint8(offset + i++);
						if (a < 224) {
							codePoint = ((a & 31) << 6) | (b & 63);
						} else {
							var c = this.readUint8(offset + i++);
							if (a < 240) {
								codePoint = ((a & 15) << 12) | ((b & 63) << 6) | (c & 63);
							} else {
								var d = this.readUint8(offset + i++);
								codePoint = ((a & 7) << 18) | ((b & 63) << 12) | ((c & 63) << 6) | (d & 63);
							}
						}
					}
					if (codePoint < 65536) {
						result += String.fromCharCode(codePoint);
					} else {
						codePoint -= 65536;
						result += String.fromCharCode(
							(codePoint >> 10) + 55296,
							(codePoint & ((1 << 10) - 1)) + 56320
						);
					}
				}
				return result;
			};
			flatbuffers.ByteBuffer.prototype.__indirect = function (offset) {
				return offset + this.readInt32(offset);
			};
			flatbuffers.ByteBuffer.prototype.__vector = function (offset) {
				return offset + this.readInt32(offset) + flatbuffers.SIZEOF_INT;
			};
			flatbuffers.ByteBuffer.prototype.__vector_len = function (offset) {
				return this.readInt32(offset + this.readInt32(offset));
			};
			flatbuffers.ByteBuffer.prototype.__has_identifier = function (ident) {
				if (ident.length != flatbuffers.FILE_IDENTIFIER_LENGTH) {
					throw new Error(
						'FlatBuffers: file identifier must be length ' + flatbuffers.FILE_IDENTIFIER_LENGTH
					);
				}
				for (var i = 0; i < flatbuffers.FILE_IDENTIFIER_LENGTH; i++) {
					if (ident.charCodeAt(i) != this.readInt8(this.position_ + flatbuffers.SIZEOF_INT + i)) {
						return false;
					}
				}
				return true;
			};
			flatbuffers.ByteBuffer.prototype.createLong = function (low, high) {
				return flatbuffers.Long.create(low, high);
			};
			exports.flatbuffers = flatbuffers;
		}
	});

	// ../../node_modules/apache-arrow/util/utf8.js
	var require_utf8 = __commonJS({
		'../../node_modules/apache-arrow/util/utf8.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.encodeUtf8 = exports.decodeUtf8 = void 0;
			var decoder2 = new TextDecoder('utf-8');
			exports.decodeUtf8 = (buffer) => decoder2.decode(buffer);
			var encoder3 = new TextEncoder();
			exports.encodeUtf8 = (value) => encoder3.encode(value);
		}
	});

	// ../../node_modules/apache-arrow/io/interfaces.js
	var require_interfaces = __commonJS({
		'../../node_modules/apache-arrow/io/interfaces.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.AsyncQueue =
				exports.ReadableInterop =
				exports.ArrowJSON =
				exports.ITERATOR_DONE =
					void 0;
			var tslib_1 = require_tslib();
			var adapters_1 = require_adapters();
			exports.ITERATOR_DONE = Object.freeze({ done: true, value: void 0 });
			var ArrowJSON = class {
				constructor(_json) {
					this._json = _json;
				}
				get schema() {
					return this._json['schema'];
				}
				get batches() {
					return this._json['batches'] || [];
				}
				get dictionaries() {
					return this._json['dictionaries'] || [];
				}
			};
			exports.ArrowJSON = ArrowJSON;
			var ReadableInterop = class {
				tee() {
					return this._getDOMStream().tee();
				}
				pipe(writable, options) {
					return this._getNodeStream().pipe(writable, options);
				}
				pipeTo(writable, options) {
					return this._getDOMStream().pipeTo(writable, options);
				}
				pipeThrough(duplex, options) {
					return this._getDOMStream().pipeThrough(duplex, options);
				}
				_getDOMStream() {
					return this._DOMStream || (this._DOMStream = this.toDOMStream());
				}
				_getNodeStream() {
					return this._nodeStream || (this._nodeStream = this.toNodeStream());
				}
			};
			exports.ReadableInterop = ReadableInterop;
			var AsyncQueue = class extends ReadableInterop {
				constructor() {
					super();
					this._values = [];
					this.resolvers = [];
					this._closedPromise = new Promise((r) => (this._closedPromiseResolve = r));
				}
				get closed() {
					return this._closedPromise;
				}
				cancel(reason) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						yield this.return(reason);
					});
				}
				write(value) {
					if (this._ensureOpen()) {
						this.resolvers.length <= 0
							? this._values.push(value)
							: this.resolvers.shift().resolve({ done: false, value });
					}
				}
				abort(value) {
					if (this._closedPromiseResolve) {
						this.resolvers.length <= 0
							? (this._error = { error: value })
							: this.resolvers.shift().reject({ done: true, value });
					}
				}
				close() {
					if (this._closedPromiseResolve) {
						const { resolvers } = this;
						while (resolvers.length > 0) {
							resolvers.shift().resolve(exports.ITERATOR_DONE);
						}
						this._closedPromiseResolve();
						this._closedPromiseResolve = void 0;
					}
				}
				[Symbol.asyncIterator]() {
					return this;
				}
				toDOMStream(options) {
					return adapters_1.default.toDOMStream(
						this._closedPromiseResolve || this._error ? this : this._values,
						options
					);
				}
				toNodeStream(options) {
					return adapters_1.default.toNodeStream(
						this._closedPromiseResolve || this._error ? this : this._values,
						options
					);
				}
				throw(_) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						yield this.abort(_);
						return exports.ITERATOR_DONE;
					});
				}
				return(_) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						yield this.close();
						return exports.ITERATOR_DONE;
					});
				}
				read(size) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						return (yield this.next(size, 'read')).value;
					});
				}
				peek(size) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						return (yield this.next(size, 'peek')).value;
					});
				}
				next(..._args) {
					if (this._values.length > 0) {
						return Promise.resolve({ done: false, value: this._values.shift() });
					} else if (this._error) {
						return Promise.reject({ done: true, value: this._error.error });
					} else if (!this._closedPromiseResolve) {
						return Promise.resolve(exports.ITERATOR_DONE);
					} else {
						return new Promise((resolve, reject) => {
							this.resolvers.push({ resolve, reject });
						});
					}
				}
				_ensureOpen() {
					if (this._closedPromiseResolve) {
						return true;
					}
					throw new Error(`AsyncQueue is closed`);
				}
			};
			exports.AsyncQueue = AsyncQueue;
		}
	});

	// ../../node_modules/apache-arrow/util/compat.js
	var require_compat = __commonJS({
		'../../node_modules/apache-arrow/util/compat.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.isReadableNodeStream =
				exports.isWritableNodeStream =
				exports.isReadableDOMStream =
				exports.isWritableDOMStream =
				exports.isFetchResponse =
				exports.isFSReadStream =
				exports.isFileHandle =
				exports.isUnderlyingSink =
				exports.isIteratorResult =
				exports.isArrayLike =
				exports.isArrowJSON =
				exports.isAsyncIterable =
				exports.isIterable =
				exports.isObservable =
				exports.isPromise =
				exports.isObject =
				exports.BigUint64ArrayAvailable =
				exports.BigUint64Array =
				exports.BigInt64ArrayAvailable =
				exports.BigInt64Array =
				exports.BigIntAvailable =
				exports.BigInt =
					void 0;
			var interfaces_1 = require_interfaces();
			var [BigIntCtor, BigIntAvailable] = (() => {
				const BigIntUnavailableError = () => {
					throw new Error('BigInt is not available in this environment');
				};
				function BigIntUnavailable() {
					throw BigIntUnavailableError();
				}
				BigIntUnavailable.asIntN = () => {
					throw BigIntUnavailableError();
				};
				BigIntUnavailable.asUintN = () => {
					throw BigIntUnavailableError();
				};
				return typeof BigInt !== 'undefined' ? [BigInt, true] : [BigIntUnavailable, false];
			})();
			exports.BigInt = BigIntCtor;
			exports.BigIntAvailable = BigIntAvailable;
			var [BigInt64ArrayCtor, BigInt64ArrayAvailable] = (() => {
				const BigInt64ArrayUnavailableError = () => {
					throw new Error('BigInt64Array is not available in this environment');
				};
				class BigInt64ArrayUnavailable {
					static get BYTES_PER_ELEMENT() {
						return 8;
					}
					static of() {
						throw BigInt64ArrayUnavailableError();
					}
					static from() {
						throw BigInt64ArrayUnavailableError();
					}
					constructor() {
						throw BigInt64ArrayUnavailableError();
					}
				}
				return typeof BigInt64Array !== 'undefined'
					? [BigInt64Array, true]
					: [BigInt64ArrayUnavailable, false];
			})();
			exports.BigInt64Array = BigInt64ArrayCtor;
			exports.BigInt64ArrayAvailable = BigInt64ArrayAvailable;
			var [BigUint64ArrayCtor, BigUint64ArrayAvailable] = (() => {
				const BigUint64ArrayUnavailableError = () => {
					throw new Error('BigUint64Array is not available in this environment');
				};
				class BigUint64ArrayUnavailable {
					static get BYTES_PER_ELEMENT() {
						return 8;
					}
					static of() {
						throw BigUint64ArrayUnavailableError();
					}
					static from() {
						throw BigUint64ArrayUnavailableError();
					}
					constructor() {
						throw BigUint64ArrayUnavailableError();
					}
				}
				return typeof BigUint64Array !== 'undefined'
					? [BigUint64Array, true]
					: [BigUint64ArrayUnavailable, false];
			})();
			exports.BigUint64Array = BigUint64ArrayCtor;
			exports.BigUint64ArrayAvailable = BigUint64ArrayAvailable;
			var isNumber = (x) => typeof x === 'number';
			var isBoolean = (x) => typeof x === 'boolean';
			var isFunction = (x) => typeof x === 'function';
			exports.isObject = (x) => x != null && Object(x) === x;
			exports.isPromise = (x) => {
				return exports.isObject(x) && isFunction(x.then);
			};
			exports.isObservable = (x) => {
				return exports.isObject(x) && isFunction(x.subscribe);
			};
			exports.isIterable = (x) => {
				return exports.isObject(x) && isFunction(x[Symbol.iterator]);
			};
			exports.isAsyncIterable = (x) => {
				return exports.isObject(x) && isFunction(x[Symbol.asyncIterator]);
			};
			exports.isArrowJSON = (x) => {
				return exports.isObject(x) && exports.isObject(x['schema']);
			};
			exports.isArrayLike = (x) => {
				return exports.isObject(x) && isNumber(x['length']);
			};
			exports.isIteratorResult = (x) => {
				return exports.isObject(x) && 'done' in x && 'value' in x;
			};
			exports.isUnderlyingSink = (x) => {
				return (
					exports.isObject(x) &&
					isFunction(x['abort']) &&
					isFunction(x['close']) &&
					isFunction(x['start']) &&
					isFunction(x['write'])
				);
			};
			exports.isFileHandle = (x) => {
				return exports.isObject(x) && isFunction(x['stat']) && isNumber(x['fd']);
			};
			exports.isFSReadStream = (x) => {
				return exports.isReadableNodeStream(x) && isNumber(x['bytesRead']);
			};
			exports.isFetchResponse = (x) => {
				return exports.isObject(x) && exports.isReadableDOMStream(x['body']);
			};
			exports.isWritableDOMStream = (x) => {
				return (
					exports.isObject(x) &&
					isFunction(x['abort']) &&
					isFunction(x['getWriter']) &&
					!(x instanceof interfaces_1.ReadableInterop)
				);
			};
			exports.isReadableDOMStream = (x) => {
				return (
					exports.isObject(x) &&
					isFunction(x['cancel']) &&
					isFunction(x['getReader']) &&
					!(x instanceof interfaces_1.ReadableInterop)
				);
			};
			exports.isWritableNodeStream = (x) => {
				return (
					exports.isObject(x) &&
					isFunction(x['end']) &&
					isFunction(x['write']) &&
					isBoolean(x['writable']) &&
					!(x instanceof interfaces_1.ReadableInterop)
				);
			};
			exports.isReadableNodeStream = (x) => {
				return (
					exports.isObject(x) &&
					isFunction(x['read']) &&
					isFunction(x['pipe']) &&
					isBoolean(x['readable']) &&
					!(x instanceof interfaces_1.ReadableInterop)
				);
			};
		}
	});

	// ../../node_modules/apache-arrow/util/buffer.js
	var require_buffer = __commonJS({
		'../../node_modules/apache-arrow/util/buffer.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.compareArrayLike =
				exports.rebaseValueOffsets =
				exports.toUint8ClampedArrayAsyncIterator =
				exports.toFloat64ArrayAsyncIterator =
				exports.toFloat32ArrayAsyncIterator =
				exports.toUint32ArrayAsyncIterator =
				exports.toUint16ArrayAsyncIterator =
				exports.toUint8ArrayAsyncIterator =
				exports.toInt32ArrayAsyncIterator =
				exports.toInt16ArrayAsyncIterator =
				exports.toInt8ArrayAsyncIterator =
				exports.toArrayBufferViewAsyncIterator =
				exports.toUint8ClampedArrayIterator =
				exports.toFloat64ArrayIterator =
				exports.toFloat32ArrayIterator =
				exports.toUint32ArrayIterator =
				exports.toUint16ArrayIterator =
				exports.toUint8ArrayIterator =
				exports.toInt32ArrayIterator =
				exports.toInt16ArrayIterator =
				exports.toInt8ArrayIterator =
				exports.toArrayBufferViewIterator =
				exports.toUint8ClampedArray =
				exports.toFloat64Array =
				exports.toFloat32Array =
				exports.toBigUint64Array =
				exports.toUint32Array =
				exports.toUint16Array =
				exports.toUint8Array =
				exports.toBigInt64Array =
				exports.toInt32Array =
				exports.toInt16Array =
				exports.toInt8Array =
				exports.toArrayBufferView =
				exports.joinUint8Arrays =
				exports.memcpy =
					void 0;
			var tslib_1 = require_tslib();
			var flatbuffers_1 = require_flatbuffers();
			var utf8_1 = require_utf8();
			var ByteBuffer = flatbuffers_1.flatbuffers.ByteBuffer;
			var compat_1 = require_compat();
			var SharedArrayBuf =
				typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : ArrayBuffer;
			function collapseContiguousByteRanges(chunks) {
				const result = chunks[0] ? [chunks[0]] : [];
				let xOffset, yOffset, xLen, yLen;
				for (let x, y, i = 0, j = 0, n = chunks.length; ++i < n; ) {
					x = result[j];
					y = chunks[i];
					if (!x || !y || x.buffer !== y.buffer || y.byteOffset < x.byteOffset) {
						y && (result[++j] = y);
						continue;
					}
					({ byteOffset: xOffset, byteLength: xLen } = x);
					({ byteOffset: yOffset, byteLength: yLen } = y);
					if (xOffset + xLen < yOffset || yOffset + yLen < xOffset) {
						y && (result[++j] = y);
						continue;
					}
					result[j] = new Uint8Array(x.buffer, xOffset, yOffset - xOffset + yLen);
				}
				return result;
			}
			function memcpy(target, source, targetByteOffset = 0, sourceByteLength = source.byteLength) {
				const targetByteLength = target.byteLength;
				const dst = new Uint8Array(target.buffer, target.byteOffset, targetByteLength);
				const src = new Uint8Array(
					source.buffer,
					source.byteOffset,
					Math.min(sourceByteLength, targetByteLength)
				);
				dst.set(src, targetByteOffset);
				return target;
			}
			exports.memcpy = memcpy;
			function joinUint8Arrays(chunks, size) {
				const result = collapseContiguousByteRanges(chunks);
				const byteLength = result.reduce((x, b) => x + b.byteLength, 0);
				let source, sliced, buffer;
				let offset = 0,
					index = -1;
				const length = Math.min(size || Infinity, byteLength);
				for (let n = result.length; ++index < n; ) {
					source = result[index];
					sliced = source.subarray(0, Math.min(source.length, length - offset));
					if (length <= offset + sliced.length) {
						if (sliced.length < source.length) {
							result[index] = source.subarray(sliced.length);
						} else if (sliced.length === source.length) {
							index++;
						}
						buffer ? memcpy(buffer, sliced, offset) : (buffer = sliced);
						break;
					}
					memcpy(buffer || (buffer = new Uint8Array(length)), sliced, offset);
					offset += sliced.length;
				}
				return [
					buffer || new Uint8Array(0),
					result.slice(index),
					byteLength - (buffer ? buffer.byteLength : 0)
				];
			}
			exports.joinUint8Arrays = joinUint8Arrays;
			function toArrayBufferView(ArrayBufferViewCtor, input) {
				let value = compat_1.isIteratorResult(input) ? input.value : input;
				if (value instanceof ArrayBufferViewCtor) {
					if (ArrayBufferViewCtor === Uint8Array) {
						return new ArrayBufferViewCtor(value.buffer, value.byteOffset, value.byteLength);
					}
					return value;
				}
				if (!value) {
					return new ArrayBufferViewCtor(0);
				}
				if (typeof value === 'string') {
					value = utf8_1.encodeUtf8(value);
				}
				if (value instanceof ArrayBuffer) {
					return new ArrayBufferViewCtor(value);
				}
				if (value instanceof SharedArrayBuf) {
					return new ArrayBufferViewCtor(value);
				}
				if (value instanceof ByteBuffer) {
					return toArrayBufferView(ArrayBufferViewCtor, value.bytes());
				}
				return !ArrayBuffer.isView(value)
					? ArrayBufferViewCtor.from(value)
					: value.byteLength <= 0
					? new ArrayBufferViewCtor(0)
					: new ArrayBufferViewCtor(
							value.buffer,
							value.byteOffset,
							value.byteLength / ArrayBufferViewCtor.BYTES_PER_ELEMENT
					  );
			}
			exports.toArrayBufferView = toArrayBufferView;
			exports.toInt8Array = (input) => toArrayBufferView(Int8Array, input);
			exports.toInt16Array = (input) => toArrayBufferView(Int16Array, input);
			exports.toInt32Array = (input) => toArrayBufferView(Int32Array, input);
			exports.toBigInt64Array = (input) => toArrayBufferView(compat_1.BigInt64Array, input);
			exports.toUint8Array = (input) => toArrayBufferView(Uint8Array, input);
			exports.toUint16Array = (input) => toArrayBufferView(Uint16Array, input);
			exports.toUint32Array = (input) => toArrayBufferView(Uint32Array, input);
			exports.toBigUint64Array = (input) => toArrayBufferView(compat_1.BigUint64Array, input);
			exports.toFloat32Array = (input) => toArrayBufferView(Float32Array, input);
			exports.toFloat64Array = (input) => toArrayBufferView(Float64Array, input);
			exports.toUint8ClampedArray = (input) => toArrayBufferView(Uint8ClampedArray, input);
			var pump = (iterator) => {
				iterator.next();
				return iterator;
			};
			function* toArrayBufferViewIterator(ArrayCtor, source) {
				const wrap = function* (x) {
					yield x;
				};
				const buffers =
					typeof source === 'string'
						? wrap(source)
						: ArrayBuffer.isView(source)
						? wrap(source)
						: source instanceof ArrayBuffer
						? wrap(source)
						: source instanceof SharedArrayBuf
						? wrap(source)
						: !compat_1.isIterable(source)
						? wrap(source)
						: source;
				yield* pump(
					(function* (it2) {
						let r = null;
						do {
							r = it2.next(yield toArrayBufferView(ArrayCtor, r));
						} while (!r.done);
					})(buffers[Symbol.iterator]())
				);
				return new ArrayCtor();
			}
			exports.toArrayBufferViewIterator = toArrayBufferViewIterator;
			exports.toInt8ArrayIterator = (input) => toArrayBufferViewIterator(Int8Array, input);
			exports.toInt16ArrayIterator = (input) => toArrayBufferViewIterator(Int16Array, input);
			exports.toInt32ArrayIterator = (input) => toArrayBufferViewIterator(Int32Array, input);
			exports.toUint8ArrayIterator = (input) => toArrayBufferViewIterator(Uint8Array, input);
			exports.toUint16ArrayIterator = (input) => toArrayBufferViewIterator(Uint16Array, input);
			exports.toUint32ArrayIterator = (input) => toArrayBufferViewIterator(Uint32Array, input);
			exports.toFloat32ArrayIterator = (input) => toArrayBufferViewIterator(Float32Array, input);
			exports.toFloat64ArrayIterator = (input) => toArrayBufferViewIterator(Float64Array, input);
			exports.toUint8ClampedArrayIterator = (input) =>
				toArrayBufferViewIterator(Uint8ClampedArray, input);
			function toArrayBufferViewAsyncIterator(ArrayCtor, source) {
				return tslib_1.__asyncGenerator(
					this,
					arguments,
					function* toArrayBufferViewAsyncIterator_1() {
						if (compat_1.isPromise(source)) {
							return yield tslib_1.__await(
								yield tslib_1.__await(
									yield* tslib_1.__asyncDelegator(
										tslib_1.__asyncValues(
											toArrayBufferViewAsyncIterator(ArrayCtor, yield tslib_1.__await(source))
										)
									)
								)
							);
						}
						const wrap = function (x) {
							return tslib_1.__asyncGenerator(this, arguments, function* () {
								yield yield tslib_1.__await(yield tslib_1.__await(x));
							});
						};
						const emit = function (source2) {
							return tslib_1.__asyncGenerator(this, arguments, function* () {
								yield tslib_1.__await(
									yield* tslib_1.__asyncDelegator(
										tslib_1.__asyncValues(
											pump(
												(function* (it2) {
													let r = null;
													do {
														r = it2.next(yield r === null || r === void 0 ? void 0 : r.value);
													} while (!r.done);
												})(source2[Symbol.iterator]())
											)
										)
									)
								);
							});
						};
						const buffers =
							typeof source === 'string'
								? wrap(source)
								: ArrayBuffer.isView(source)
								? wrap(source)
								: source instanceof ArrayBuffer
								? wrap(source)
								: source instanceof SharedArrayBuf
								? wrap(source)
								: compat_1.isIterable(source)
								? emit(source)
								: !compat_1.isAsyncIterable(source)
								? wrap(source)
								: source;
						yield tslib_1.__await(
							yield* tslib_1.__asyncDelegator(
								tslib_1.__asyncValues(
									pump(
										(function (it2) {
											return tslib_1.__asyncGenerator(this, arguments, function* () {
												let r = null;
												do {
													r = yield tslib_1.__await(
														it2.next(yield yield tslib_1.__await(toArrayBufferView(ArrayCtor, r)))
													);
												} while (!r.done);
											});
										})(buffers[Symbol.asyncIterator]())
									)
								)
							)
						);
						return yield tslib_1.__await(new ArrayCtor());
					}
				);
			}
			exports.toArrayBufferViewAsyncIterator = toArrayBufferViewAsyncIterator;
			exports.toInt8ArrayAsyncIterator = (input) =>
				toArrayBufferViewAsyncIterator(Int8Array, input);
			exports.toInt16ArrayAsyncIterator = (input) =>
				toArrayBufferViewAsyncIterator(Int16Array, input);
			exports.toInt32ArrayAsyncIterator = (input) =>
				toArrayBufferViewAsyncIterator(Int32Array, input);
			exports.toUint8ArrayAsyncIterator = (input) =>
				toArrayBufferViewAsyncIterator(Uint8Array, input);
			exports.toUint16ArrayAsyncIterator = (input) =>
				toArrayBufferViewAsyncIterator(Uint16Array, input);
			exports.toUint32ArrayAsyncIterator = (input) =>
				toArrayBufferViewAsyncIterator(Uint32Array, input);
			exports.toFloat32ArrayAsyncIterator = (input) =>
				toArrayBufferViewAsyncIterator(Float32Array, input);
			exports.toFloat64ArrayAsyncIterator = (input) =>
				toArrayBufferViewAsyncIterator(Float64Array, input);
			exports.toUint8ClampedArrayAsyncIterator = (input) =>
				toArrayBufferViewAsyncIterator(Uint8ClampedArray, input);
			function rebaseValueOffsets(offset, length, valueOffsets) {
				if (offset !== 0) {
					valueOffsets = valueOffsets.slice(0, length + 1);
					for (let i = -1; ++i <= length; ) {
						valueOffsets[i] += offset;
					}
				}
				return valueOffsets;
			}
			exports.rebaseValueOffsets = rebaseValueOffsets;
			function compareArrayLike(a, b) {
				let i = 0;
				const n = a.length;
				if (n !== b.length) {
					return false;
				}
				if (n > 0) {
					do {
						if (a[i] !== b[i]) {
							return false;
						}
					} while (++i < n);
				}
				return true;
			}
			exports.compareArrayLike = compareArrayLike;
		}
	});

	// ../../node_modules/apache-arrow/io/adapters.js
	var require_adapters = __commonJS({
		'../../node_modules/apache-arrow/io/adapters.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			var tslib_1 = require_tslib();
			var buffer_1 = require_buffer();
			exports.default = {
				fromIterable(source) {
					return pump(fromIterable(source));
				},
				fromAsyncIterable(source) {
					return pump(fromAsyncIterable(source));
				},
				fromDOMStream(source) {
					return pump(fromDOMStream(source));
				},
				fromNodeStream(stream) {
					return pump(fromNodeStream(stream));
				},
				toDOMStream(source, options) {
					throw new Error(`"toDOMStream" not available in this environment`);
				},
				toNodeStream(source, options) {
					throw new Error(`"toNodeStream" not available in this environment`);
				}
			};
			var pump = (iterator) => {
				iterator.next();
				return iterator;
			};
			function* fromIterable(source) {
				let done,
					threw = false;
				let buffers = [],
					buffer;
				let cmd,
					size,
					bufferLength = 0;
				function byteRange() {
					if (cmd === 'peek') {
						return buffer_1.joinUint8Arrays(buffers, size)[0];
					}
					[buffer, buffers, bufferLength] = buffer_1.joinUint8Arrays(buffers, size);
					return buffer;
				}
				({ cmd, size } = yield null);
				const it2 = buffer_1.toUint8ArrayIterator(source)[Symbol.iterator]();
				try {
					do {
						({ done, value: buffer } = isNaN(size - bufferLength)
							? it2.next(void 0)
							: it2.next(size - bufferLength));
						if (!done && buffer.byteLength > 0) {
							buffers.push(buffer);
							bufferLength += buffer.byteLength;
						}
						if (done || size <= bufferLength) {
							do {
								({ cmd, size } = yield byteRange());
							} while (size < bufferLength);
						}
					} while (!done);
				} catch (e) {
					(threw = true) && typeof it2.throw === 'function' && it2.throw(e);
				} finally {
					threw === false && typeof it2.return === 'function' && it2.return(null);
				}
				return null;
			}
			function fromAsyncIterable(source) {
				return tslib_1.__asyncGenerator(this, arguments, function* fromAsyncIterable_1() {
					let done,
						threw = false;
					let buffers = [],
						buffer;
					let cmd,
						size,
						bufferLength = 0;
					function byteRange() {
						if (cmd === 'peek') {
							return buffer_1.joinUint8Arrays(buffers, size)[0];
						}
						[buffer, buffers, bufferLength] = buffer_1.joinUint8Arrays(buffers, size);
						return buffer;
					}
					({ cmd, size } = yield yield tslib_1.__await(null));
					const it2 = buffer_1.toUint8ArrayAsyncIterator(source)[Symbol.asyncIterator]();
					try {
						do {
							({ done, value: buffer } = isNaN(size - bufferLength)
								? yield tslib_1.__await(it2.next(void 0))
								: yield tslib_1.__await(it2.next(size - bufferLength)));
							if (!done && buffer.byteLength > 0) {
								buffers.push(buffer);
								bufferLength += buffer.byteLength;
							}
							if (done || size <= bufferLength) {
								do {
									({ cmd, size } = yield yield tslib_1.__await(byteRange()));
								} while (size < bufferLength);
							}
						} while (!done);
					} catch (e) {
						(threw = true) &&
							typeof it2.throw === 'function' &&
							(yield tslib_1.__await(it2.throw(e)));
					} finally {
						threw === false &&
							typeof it2.return === 'function' &&
							(yield tslib_1.__await(it2.return(new Uint8Array(0))));
					}
					return yield tslib_1.__await(null);
				});
			}
			function fromDOMStream(source) {
				return tslib_1.__asyncGenerator(this, arguments, function* fromDOMStream_1() {
					let done = false,
						threw = false;
					let buffers = [],
						buffer;
					let cmd,
						size,
						bufferLength = 0;
					function byteRange() {
						if (cmd === 'peek') {
							return buffer_1.joinUint8Arrays(buffers, size)[0];
						}
						[buffer, buffers, bufferLength] = buffer_1.joinUint8Arrays(buffers, size);
						return buffer;
					}
					({ cmd, size } = yield yield tslib_1.__await(null));
					const it2 = new AdaptiveByteReader(source);
					try {
						do {
							({ done, value: buffer } = isNaN(size - bufferLength)
								? yield tslib_1.__await(it2['read'](void 0))
								: yield tslib_1.__await(it2['read'](size - bufferLength)));
							if (!done && buffer.byteLength > 0) {
								buffers.push(buffer_1.toUint8Array(buffer));
								bufferLength += buffer.byteLength;
							}
							if (done || size <= bufferLength) {
								do {
									({ cmd, size } = yield yield tslib_1.__await(byteRange()));
								} while (size < bufferLength);
							}
						} while (!done);
					} catch (e) {
						(threw = true) && (yield tslib_1.__await(it2['cancel'](e)));
					} finally {
						threw === false
							? yield tslib_1.__await(it2['cancel']())
							: source['locked'] && it2.releaseLock();
					}
					return yield tslib_1.__await(null);
				});
			}
			var AdaptiveByteReader = class {
				constructor(source) {
					this.source = source;
					this.byobReader = null;
					this.defaultReader = null;
					try {
						this.supportsBYOB = !!(this.reader = this.getBYOBReader());
					} catch (e) {
						this.supportsBYOB = !(this.reader = this.getDefaultReader());
					}
				}
				get closed() {
					return this.reader ? this.reader['closed'].catch(() => {}) : Promise.resolve();
				}
				releaseLock() {
					if (this.reader) {
						this.reader.releaseLock();
					}
					this.reader = this.byobReader = this.defaultReader = null;
				}
				cancel(reason) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						const { reader, source } = this;
						reader && (yield reader['cancel'](reason).catch(() => {}));
						source && source['locked'] && this.releaseLock();
					});
				}
				read(size) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						if (size === 0) {
							return { done: this.reader == null, value: new Uint8Array(0) };
						}
						const result =
							!this.supportsBYOB || typeof size !== 'number'
								? yield this.getDefaultReader().read()
								: yield this.readFromBYOBReader(size);
						!result.done && (result.value = buffer_1.toUint8Array(result));
						return result;
					});
				}
				getDefaultReader() {
					if (this.byobReader) {
						this.releaseLock();
					}
					if (!this.defaultReader) {
						this.defaultReader = this.source['getReader']();
						this.defaultReader['closed'].catch(() => {});
					}
					return (this.reader = this.defaultReader);
				}
				getBYOBReader() {
					if (this.defaultReader) {
						this.releaseLock();
					}
					if (!this.byobReader) {
						this.byobReader = this.source['getReader']({ mode: 'byob' });
						this.byobReader['closed'].catch(() => {});
					}
					return (this.reader = this.byobReader);
				}
				readFromBYOBReader(size) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						return yield readInto(this.getBYOBReader(), new ArrayBuffer(size), 0, size);
					});
				}
			};
			function readInto(reader, buffer, offset, size) {
				return tslib_1.__awaiter(this, void 0, void 0, function* () {
					if (offset >= size) {
						return { done: false, value: new Uint8Array(buffer, 0, size) };
					}
					const { done, value } = yield reader.read(new Uint8Array(buffer, offset, size - offset));
					if ((offset += value.byteLength) < size && !done) {
						return yield readInto(reader, value.buffer, offset, size);
					}
					return { done, value: new Uint8Array(value.buffer, 0, offset) };
				});
			}
			var onEvent = (stream, event) => {
				const handler = (_) => resolve([event, _]);
				let resolve;
				return [
					event,
					handler,
					new Promise((r) => (resolve = r) && stream['once'](event, handler))
				];
			};
			function fromNodeStream(stream) {
				return tslib_1.__asyncGenerator(this, arguments, function* fromNodeStream_1() {
					const events = [];
					let event = 'error';
					let done = false,
						err = null;
					let cmd,
						size,
						bufferLength = 0;
					let buffers = [],
						buffer;
					function byteRange() {
						if (cmd === 'peek') {
							return buffer_1.joinUint8Arrays(buffers, size)[0];
						}
						[buffer, buffers, bufferLength] = buffer_1.joinUint8Arrays(buffers, size);
						return buffer;
					}
					({ cmd, size } = yield yield tslib_1.__await(null));
					if (stream['isTTY']) {
						yield yield tslib_1.__await(new Uint8Array(0));
						return yield tslib_1.__await(null);
					}
					try {
						events[0] = onEvent(stream, 'end');
						events[1] = onEvent(stream, 'error');
						do {
							events[2] = onEvent(stream, 'readable');
							[event, err] = yield tslib_1.__await(Promise.race(events.map((x) => x[2])));
							if (event === 'error') {
								break;
							}
							if (!(done = event === 'end')) {
								if (!isFinite(size - bufferLength)) {
									buffer = buffer_1.toUint8Array(stream['read'](void 0));
								} else {
									buffer = buffer_1.toUint8Array(stream['read'](size - bufferLength));
									if (buffer.byteLength < size - bufferLength) {
										buffer = buffer_1.toUint8Array(stream['read'](void 0));
									}
								}
								if (buffer.byteLength > 0) {
									buffers.push(buffer);
									bufferLength += buffer.byteLength;
								}
							}
							if (done || size <= bufferLength) {
								do {
									({ cmd, size } = yield yield tslib_1.__await(byteRange()));
								} while (size < bufferLength);
							}
						} while (!done);
					} finally {
						yield tslib_1.__await(cleanup(events, event === 'error' ? err : null));
					}
					return yield tslib_1.__await(null);
					function cleanup(events2, err2) {
						buffer = buffers = null;
						return new Promise((resolve, reject) => {
							for (const [evt, fn] of events2) {
								stream['off'](evt, fn);
							}
							try {
								const destroy = stream['destroy'];
								destroy && destroy.call(stream, err2);
								err2 = void 0;
							} catch (e) {
								err2 = e || err2;
							} finally {
								err2 != null ? reject(err2) : resolve();
							}
						});
					}
				});
			}
		}
	});

	// ../../node_modules/apache-arrow/vector.js
	var require_vector = __commonJS({
		'../../node_modules/apache-arrow/vector.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Vector = exports.AbstractVector = void 0;
			var AbstractVector = class {};
			exports.AbstractVector = AbstractVector;
			exports.Vector = AbstractVector;
			AbstractVector.prototype.data = null;
		}
	});

	// ../../node_modules/apache-arrow/fb/Schema.js
	var require_Schema = __commonJS({
		'../../node_modules/apache-arrow/fb/Schema.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Schema =
				exports.Buffer =
				exports.Field =
				exports.DictionaryEncoding =
				exports.KeyValue =
				exports.Duration =
				exports.Interval =
				exports.Timestamp =
				exports.Time =
				exports.Date =
				exports.Decimal =
				exports.Bool =
				exports.FixedSizeBinary =
				exports.LargeBinary =
				exports.LargeUtf8 =
				exports.Binary =
				exports.Utf8 =
				exports.FloatingPoint =
				exports.Int =
				exports.Union =
				exports.Map =
				exports.FixedSizeList =
				exports.LargeList =
				exports.List =
				exports.Struct_ =
				exports.Null =
				exports.Endianness =
				exports.DictionaryKind =
				exports.Type =
				exports.IntervalUnit =
				exports.TimeUnit =
				exports.DateUnit =
				exports.Precision =
				exports.UnionMode =
				exports.Feature =
				exports.MetadataVersion =
					void 0;
			var flatbuffers_1 = require_flatbuffers();
			var MetadataVersion2;
			(function (MetadataVersion3) {
				MetadataVersion3[(MetadataVersion3['V1'] = 0)] = 'V1';
				MetadataVersion3[(MetadataVersion3['V2'] = 1)] = 'V2';
				MetadataVersion3[(MetadataVersion3['V3'] = 2)] = 'V3';
				MetadataVersion3[(MetadataVersion3['V4'] = 3)] = 'V4';
				MetadataVersion3[(MetadataVersion3['V5'] = 4)] = 'V5';
			})((MetadataVersion2 = exports.MetadataVersion || (exports.MetadataVersion = {})));
			var Feature;
			(function (Feature2) {
				Feature2[(Feature2['UNUSED'] = 0)] = 'UNUSED';
				Feature2[(Feature2['DICTIONARY_REPLACEMENT'] = 1)] = 'DICTIONARY_REPLACEMENT';
				Feature2[(Feature2['COMPRESSED_BODY'] = 2)] = 'COMPRESSED_BODY';
			})((Feature = exports.Feature || (exports.Feature = {})));
			var UnionMode2;
			(function (UnionMode3) {
				UnionMode3[(UnionMode3['Sparse'] = 0)] = 'Sparse';
				UnionMode3[(UnionMode3['Dense'] = 1)] = 'Dense';
			})((UnionMode2 = exports.UnionMode || (exports.UnionMode = {})));
			var Precision2;
			(function (Precision3) {
				Precision3[(Precision3['HALF'] = 0)] = 'HALF';
				Precision3[(Precision3['SINGLE'] = 1)] = 'SINGLE';
				Precision3[(Precision3['DOUBLE'] = 2)] = 'DOUBLE';
			})((Precision2 = exports.Precision || (exports.Precision = {})));
			var DateUnit2;
			(function (DateUnit3) {
				DateUnit3[(DateUnit3['DAY'] = 0)] = 'DAY';
				DateUnit3[(DateUnit3['MILLISECOND'] = 1)] = 'MILLISECOND';
			})((DateUnit2 = exports.DateUnit || (exports.DateUnit = {})));
			var TimeUnit2;
			(function (TimeUnit3) {
				TimeUnit3[(TimeUnit3['SECOND'] = 0)] = 'SECOND';
				TimeUnit3[(TimeUnit3['MILLISECOND'] = 1)] = 'MILLISECOND';
				TimeUnit3[(TimeUnit3['MICROSECOND'] = 2)] = 'MICROSECOND';
				TimeUnit3[(TimeUnit3['NANOSECOND'] = 3)] = 'NANOSECOND';
			})((TimeUnit2 = exports.TimeUnit || (exports.TimeUnit = {})));
			var IntervalUnit2;
			(function (IntervalUnit3) {
				IntervalUnit3[(IntervalUnit3['YEAR_MONTH'] = 0)] = 'YEAR_MONTH';
				IntervalUnit3[(IntervalUnit3['DAY_TIME'] = 1)] = 'DAY_TIME';
			})((IntervalUnit2 = exports.IntervalUnit || (exports.IntervalUnit = {})));
			var Type2;
			(function (Type3) {
				Type3[(Type3['NONE'] = 0)] = 'NONE';
				Type3[(Type3['Null'] = 1)] = 'Null';
				Type3[(Type3['Int'] = 2)] = 'Int';
				Type3[(Type3['FloatingPoint'] = 3)] = 'FloatingPoint';
				Type3[(Type3['Binary'] = 4)] = 'Binary';
				Type3[(Type3['Utf8'] = 5)] = 'Utf8';
				Type3[(Type3['Bool'] = 6)] = 'Bool';
				Type3[(Type3['Decimal'] = 7)] = 'Decimal';
				Type3[(Type3['Date'] = 8)] = 'Date';
				Type3[(Type3['Time'] = 9)] = 'Time';
				Type3[(Type3['Timestamp'] = 10)] = 'Timestamp';
				Type3[(Type3['Interval'] = 11)] = 'Interval';
				Type3[(Type3['List'] = 12)] = 'List';
				Type3[(Type3['Struct_'] = 13)] = 'Struct_';
				Type3[(Type3['Union'] = 14)] = 'Union';
				Type3[(Type3['FixedSizeBinary'] = 15)] = 'FixedSizeBinary';
				Type3[(Type3['FixedSizeList'] = 16)] = 'FixedSizeList';
				Type3[(Type3['Map'] = 17)] = 'Map';
				Type3[(Type3['Duration'] = 18)] = 'Duration';
				Type3[(Type3['LargeBinary'] = 19)] = 'LargeBinary';
				Type3[(Type3['LargeUtf8'] = 20)] = 'LargeUtf8';
				Type3[(Type3['LargeList'] = 21)] = 'LargeList';
			})((Type2 = exports.Type || (exports.Type = {})));
			var DictionaryKind;
			(function (DictionaryKind2) {
				DictionaryKind2[(DictionaryKind2['DenseArray'] = 0)] = 'DenseArray';
			})((DictionaryKind = exports.DictionaryKind || (exports.DictionaryKind = {})));
			var Endianness;
			(function (Endianness2) {
				Endianness2[(Endianness2['Little'] = 0)] = 'Little';
				Endianness2[(Endianness2['Big'] = 1)] = 'Big';
			})((Endianness = exports.Endianness || (exports.Endianness = {})));
			var Null2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsNull(bb, obj) {
					return (obj || new Null2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsNull(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Null2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static startNull(builder) {
					builder.startObject(0);
				}
				static endNull(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createNull(builder) {
					Null2.startNull(builder);
					return Null2.endNull(builder);
				}
			};
			exports.Null = Null2;
			var Struct_ = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsStruct_(bb, obj) {
					return (obj || new Struct_()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsStruct_(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Struct_()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static startStruct_(builder) {
					builder.startObject(0);
				}
				static endStruct_(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createStruct_(builder) {
					Struct_.startStruct_(builder);
					return Struct_.endStruct_(builder);
				}
			};
			exports.Struct_ = Struct_;
			var List2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsList(bb, obj) {
					return (obj || new List2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsList(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new List2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static startList(builder) {
					builder.startObject(0);
				}
				static endList(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createList(builder) {
					List2.startList(builder);
					return List2.endList(builder);
				}
			};
			exports.List = List2;
			var LargeList = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsLargeList(bb, obj) {
					return (obj || new LargeList()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsLargeList(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new LargeList()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static startLargeList(builder) {
					builder.startObject(0);
				}
				static endLargeList(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createLargeList(builder) {
					LargeList.startLargeList(builder);
					return LargeList.endLargeList(builder);
				}
			};
			exports.LargeList = LargeList;
			var FixedSizeList2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsFixedSizeList(bb, obj) {
					return (obj || new FixedSizeList2()).__init(
						bb.readInt32(bb.position()) + bb.position(),
						bb
					);
				}
				static getSizePrefixedRootAsFixedSizeList(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new FixedSizeList2()).__init(
						bb.readInt32(bb.position()) + bb.position(),
						bb
					);
				}
				listSize() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
				}
				static startFixedSizeList(builder) {
					builder.startObject(1);
				}
				static addListSize(builder, listSize) {
					builder.addFieldInt32(0, listSize, 0);
				}
				static endFixedSizeList(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createFixedSizeList(builder, listSize) {
					FixedSizeList2.startFixedSizeList(builder);
					FixedSizeList2.addListSize(builder, listSize);
					return FixedSizeList2.endFixedSizeList(builder);
				}
			};
			exports.FixedSizeList = FixedSizeList2;
			var Map2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsMap(bb, obj) {
					return (obj || new Map2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsMap(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Map2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				keysSorted() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
				}
				static startMap(builder) {
					builder.startObject(1);
				}
				static addKeysSorted(builder, keysSorted) {
					builder.addFieldInt8(0, +keysSorted, 0);
				}
				static endMap(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createMap(builder, keysSorted) {
					Map2.startMap(builder);
					Map2.addKeysSorted(builder, keysSorted);
					return Map2.endMap(builder);
				}
			};
			exports.Map = Map2;
			var Union2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsUnion(bb, obj) {
					return (obj || new Union2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsUnion(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Union2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				mode() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt16(this.bb_pos + offset) : UnionMode2.Sparse;
				}
				typeIds(index) {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
				}
				typeIdsLength() {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
				}
				typeIdsArray() {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset
						? new Int32Array(
								this.bb.bytes().buffer,
								this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset),
								this.bb.__vector_len(this.bb_pos + offset)
						  )
						: null;
				}
				static startUnion(builder) {
					builder.startObject(2);
				}
				static addMode(builder, mode) {
					builder.addFieldInt16(0, mode, UnionMode2.Sparse);
				}
				static addTypeIds(builder, typeIdsOffset) {
					builder.addFieldOffset(1, typeIdsOffset, 0);
				}
				static createTypeIdsVector(builder, data) {
					builder.startVector(4, data.length, 4);
					for (let i = data.length - 1; i >= 0; i--) {
						builder.addInt32(data[i]);
					}
					return builder.endVector();
				}
				static startTypeIdsVector(builder, numElems) {
					builder.startVector(4, numElems, 4);
				}
				static endUnion(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createUnion(builder, mode, typeIdsOffset) {
					Union2.startUnion(builder);
					Union2.addMode(builder, mode);
					Union2.addTypeIds(builder, typeIdsOffset);
					return Union2.endUnion(builder);
				}
			};
			exports.Union = Union2;
			var Int2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsInt(bb, obj) {
					return (obj || new Int2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsInt(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Int2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				bitWidth() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
				}
				isSigned() {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
				}
				static startInt(builder) {
					builder.startObject(2);
				}
				static addBitWidth(builder, bitWidth) {
					builder.addFieldInt32(0, bitWidth, 0);
				}
				static addIsSigned(builder, isSigned) {
					builder.addFieldInt8(1, +isSigned, 0);
				}
				static endInt(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createInt(builder, bitWidth, isSigned) {
					Int2.startInt(builder);
					Int2.addBitWidth(builder, bitWidth);
					Int2.addIsSigned(builder, isSigned);
					return Int2.endInt(builder);
				}
			};
			exports.Int = Int2;
			var FloatingPoint = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsFloatingPoint(bb, obj) {
					return (obj || new FloatingPoint()).__init(
						bb.readInt32(bb.position()) + bb.position(),
						bb
					);
				}
				static getSizePrefixedRootAsFloatingPoint(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new FloatingPoint()).__init(
						bb.readInt32(bb.position()) + bb.position(),
						bb
					);
				}
				precision() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt16(this.bb_pos + offset) : Precision2.HALF;
				}
				static startFloatingPoint(builder) {
					builder.startObject(1);
				}
				static addPrecision(builder, precision) {
					builder.addFieldInt16(0, precision, Precision2.HALF);
				}
				static endFloatingPoint(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createFloatingPoint(builder, precision) {
					FloatingPoint.startFloatingPoint(builder);
					FloatingPoint.addPrecision(builder, precision);
					return FloatingPoint.endFloatingPoint(builder);
				}
			};
			exports.FloatingPoint = FloatingPoint;
			var Utf82 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsUtf8(bb, obj) {
					return (obj || new Utf82()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsUtf8(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Utf82()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static startUtf8(builder) {
					builder.startObject(0);
				}
				static endUtf8(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createUtf8(builder) {
					Utf82.startUtf8(builder);
					return Utf82.endUtf8(builder);
				}
			};
			exports.Utf8 = Utf82;
			var Binary2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsBinary(bb, obj) {
					return (obj || new Binary2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsBinary(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Binary2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static startBinary(builder) {
					builder.startObject(0);
				}
				static endBinary(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createBinary(builder) {
					Binary2.startBinary(builder);
					return Binary2.endBinary(builder);
				}
			};
			exports.Binary = Binary2;
			var LargeUtf8 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsLargeUtf8(bb, obj) {
					return (obj || new LargeUtf8()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsLargeUtf8(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new LargeUtf8()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static startLargeUtf8(builder) {
					builder.startObject(0);
				}
				static endLargeUtf8(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createLargeUtf8(builder) {
					LargeUtf8.startLargeUtf8(builder);
					return LargeUtf8.endLargeUtf8(builder);
				}
			};
			exports.LargeUtf8 = LargeUtf8;
			var LargeBinary = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsLargeBinary(bb, obj) {
					return (obj || new LargeBinary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsLargeBinary(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new LargeBinary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static startLargeBinary(builder) {
					builder.startObject(0);
				}
				static endLargeBinary(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createLargeBinary(builder) {
					LargeBinary.startLargeBinary(builder);
					return LargeBinary.endLargeBinary(builder);
				}
			};
			exports.LargeBinary = LargeBinary;
			var FixedSizeBinary2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsFixedSizeBinary(bb, obj) {
					return (obj || new FixedSizeBinary2()).__init(
						bb.readInt32(bb.position()) + bb.position(),
						bb
					);
				}
				static getSizePrefixedRootAsFixedSizeBinary(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new FixedSizeBinary2()).__init(
						bb.readInt32(bb.position()) + bb.position(),
						bb
					);
				}
				byteWidth() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
				}
				static startFixedSizeBinary(builder) {
					builder.startObject(1);
				}
				static addByteWidth(builder, byteWidth) {
					builder.addFieldInt32(0, byteWidth, 0);
				}
				static endFixedSizeBinary(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createFixedSizeBinary(builder, byteWidth) {
					FixedSizeBinary2.startFixedSizeBinary(builder);
					FixedSizeBinary2.addByteWidth(builder, byteWidth);
					return FixedSizeBinary2.endFixedSizeBinary(builder);
				}
			};
			exports.FixedSizeBinary = FixedSizeBinary2;
			var Bool2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsBool(bb, obj) {
					return (obj || new Bool2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsBool(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Bool2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static startBool(builder) {
					builder.startObject(0);
				}
				static endBool(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createBool(builder) {
					Bool2.startBool(builder);
					return Bool2.endBool(builder);
				}
			};
			exports.Bool = Bool2;
			var Decimal2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsDecimal(bb, obj) {
					return (obj || new Decimal2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsDecimal(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Decimal2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				precision() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
				}
				scale() {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
				}
				bitWidth() {
					const offset = this.bb.__offset(this.bb_pos, 8);
					return offset ? this.bb.readInt32(this.bb_pos + offset) : 128;
				}
				static startDecimal(builder) {
					builder.startObject(3);
				}
				static addPrecision(builder, precision) {
					builder.addFieldInt32(0, precision, 0);
				}
				static addScale(builder, scale) {
					builder.addFieldInt32(1, scale, 0);
				}
				static addBitWidth(builder, bitWidth) {
					builder.addFieldInt32(2, bitWidth, 128);
				}
				static endDecimal(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createDecimal(builder, precision, scale, bitWidth) {
					Decimal2.startDecimal(builder);
					Decimal2.addPrecision(builder, precision);
					Decimal2.addScale(builder, scale);
					Decimal2.addBitWidth(builder, bitWidth);
					return Decimal2.endDecimal(builder);
				}
			};
			exports.Decimal = Decimal2;
			var Date2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsDate(bb, obj) {
					return (obj || new Date2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsDate(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Date2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				unit() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt16(this.bb_pos + offset) : DateUnit2.MILLISECOND;
				}
				static startDate(builder) {
					builder.startObject(1);
				}
				static addUnit(builder, unit) {
					builder.addFieldInt16(0, unit, DateUnit2.MILLISECOND);
				}
				static endDate(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createDate(builder, unit) {
					Date2.startDate(builder);
					Date2.addUnit(builder, unit);
					return Date2.endDate(builder);
				}
			};
			exports.Date = Date2;
			var Time2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsTime(bb, obj) {
					return (obj || new Time2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsTime(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Time2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				unit() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt16(this.bb_pos + offset) : TimeUnit2.MILLISECOND;
				}
				bitWidth() {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset ? this.bb.readInt32(this.bb_pos + offset) : 32;
				}
				static startTime(builder) {
					builder.startObject(2);
				}
				static addUnit(builder, unit) {
					builder.addFieldInt16(0, unit, TimeUnit2.MILLISECOND);
				}
				static addBitWidth(builder, bitWidth) {
					builder.addFieldInt32(1, bitWidth, 32);
				}
				static endTime(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createTime(builder, unit, bitWidth) {
					Time2.startTime(builder);
					Time2.addUnit(builder, unit);
					Time2.addBitWidth(builder, bitWidth);
					return Time2.endTime(builder);
				}
			};
			exports.Time = Time2;
			var Timestamp2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsTimestamp(bb, obj) {
					return (obj || new Timestamp2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsTimestamp(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Timestamp2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				unit() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt16(this.bb_pos + offset) : TimeUnit2.SECOND;
				}
				timezone(optionalEncoding) {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
				}
				static startTimestamp(builder) {
					builder.startObject(2);
				}
				static addUnit(builder, unit) {
					builder.addFieldInt16(0, unit, TimeUnit2.SECOND);
				}
				static addTimezone(builder, timezoneOffset) {
					builder.addFieldOffset(1, timezoneOffset, 0);
				}
				static endTimestamp(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createTimestamp(builder, unit, timezoneOffset) {
					Timestamp2.startTimestamp(builder);
					Timestamp2.addUnit(builder, unit);
					Timestamp2.addTimezone(builder, timezoneOffset);
					return Timestamp2.endTimestamp(builder);
				}
			};
			exports.Timestamp = Timestamp2;
			var Interval2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsInterval(bb, obj) {
					return (obj || new Interval2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsInterval(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Interval2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				unit() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt16(this.bb_pos + offset) : IntervalUnit2.YEAR_MONTH;
				}
				static startInterval(builder) {
					builder.startObject(1);
				}
				static addUnit(builder, unit) {
					builder.addFieldInt16(0, unit, IntervalUnit2.YEAR_MONTH);
				}
				static endInterval(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createInterval(builder, unit) {
					Interval2.startInterval(builder);
					Interval2.addUnit(builder, unit);
					return Interval2.endInterval(builder);
				}
			};
			exports.Interval = Interval2;
			var Duration = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsDuration(bb, obj) {
					return (obj || new Duration()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsDuration(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Duration()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				unit() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt16(this.bb_pos + offset) : TimeUnit2.MILLISECOND;
				}
				static startDuration(builder) {
					builder.startObject(1);
				}
				static addUnit(builder, unit) {
					builder.addFieldInt16(0, unit, TimeUnit2.MILLISECOND);
				}
				static endDuration(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createDuration(builder, unit) {
					Duration.startDuration(builder);
					Duration.addUnit(builder, unit);
					return Duration.endDuration(builder);
				}
			};
			exports.Duration = Duration;
			var KeyValue = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsKeyValue(bb, obj) {
					return (obj || new KeyValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsKeyValue(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new KeyValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				key(optionalEncoding) {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
				}
				value(optionalEncoding) {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
				}
				static startKeyValue(builder) {
					builder.startObject(2);
				}
				static addKey(builder, keyOffset) {
					builder.addFieldOffset(0, keyOffset, 0);
				}
				static addValue(builder, valueOffset) {
					builder.addFieldOffset(1, valueOffset, 0);
				}
				static endKeyValue(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createKeyValue(builder, keyOffset, valueOffset) {
					KeyValue.startKeyValue(builder);
					KeyValue.addKey(builder, keyOffset);
					KeyValue.addValue(builder, valueOffset);
					return KeyValue.endKeyValue(builder);
				}
			};
			exports.KeyValue = KeyValue;
			var DictionaryEncoding = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsDictionaryEncoding(bb, obj) {
					return (obj || new DictionaryEncoding()).__init(
						bb.readInt32(bb.position()) + bb.position(),
						bb
					);
				}
				static getSizePrefixedRootAsDictionaryEncoding(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new DictionaryEncoding()).__init(
						bb.readInt32(bb.position()) + bb.position(),
						bb
					);
				}
				id() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
				}
				indexType(obj) {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset
						? (obj || new Int2()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb)
						: null;
				}
				isOrdered() {
					const offset = this.bb.__offset(this.bb_pos, 8);
					return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
				}
				dictionaryKind() {
					const offset = this.bb.__offset(this.bb_pos, 10);
					return offset ? this.bb.readInt16(this.bb_pos + offset) : DictionaryKind.DenseArray;
				}
				static startDictionaryEncoding(builder) {
					builder.startObject(4);
				}
				static addId(builder, id) {
					builder.addFieldInt64(0, id, builder.createLong(0, 0));
				}
				static addIndexType(builder, indexTypeOffset) {
					builder.addFieldOffset(1, indexTypeOffset, 0);
				}
				static addIsOrdered(builder, isOrdered) {
					builder.addFieldInt8(2, +isOrdered, 0);
				}
				static addDictionaryKind(builder, dictionaryKind) {
					builder.addFieldInt16(3, dictionaryKind, DictionaryKind.DenseArray);
				}
				static endDictionaryEncoding(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createDictionaryEncoding(builder, id, indexTypeOffset, isOrdered, dictionaryKind) {
					DictionaryEncoding.startDictionaryEncoding(builder);
					DictionaryEncoding.addId(builder, id);
					DictionaryEncoding.addIndexType(builder, indexTypeOffset);
					DictionaryEncoding.addIsOrdered(builder, isOrdered);
					DictionaryEncoding.addDictionaryKind(builder, dictionaryKind);
					return DictionaryEncoding.endDictionaryEncoding(builder);
				}
			};
			exports.DictionaryEncoding = DictionaryEncoding;
			var Field2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsField(bb, obj) {
					return (obj || new Field2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsField(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Field2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				name(optionalEncoding) {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
				}
				nullable() {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
				}
				typeType() {
					const offset = this.bb.__offset(this.bb_pos, 8);
					return offset ? this.bb.readUint8(this.bb_pos + offset) : Type2.NONE;
				}
				type(obj) {
					const offset = this.bb.__offset(this.bb_pos, 10);
					return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
				}
				dictionary(obj) {
					const offset = this.bb.__offset(this.bb_pos, 12);
					return offset
						? (obj || new DictionaryEncoding()).__init(
								this.bb.__indirect(this.bb_pos + offset),
								this.bb
						  )
						: null;
				}
				children(index, obj) {
					const offset = this.bb.__offset(this.bb_pos, 14);
					return offset
						? (obj || new Field2()).__init(
								this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4),
								this.bb
						  )
						: null;
				}
				childrenLength() {
					const offset = this.bb.__offset(this.bb_pos, 14);
					return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
				}
				customMetadata(index, obj) {
					const offset = this.bb.__offset(this.bb_pos, 16);
					return offset
						? (obj || new KeyValue()).__init(
								this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4),
								this.bb
						  )
						: null;
				}
				customMetadataLength() {
					const offset = this.bb.__offset(this.bb_pos, 16);
					return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
				}
				static startField(builder) {
					builder.startObject(7);
				}
				static addName(builder, nameOffset) {
					builder.addFieldOffset(0, nameOffset, 0);
				}
				static addNullable(builder, nullable) {
					builder.addFieldInt8(1, +nullable, 0);
				}
				static addTypeType(builder, typeType) {
					builder.addFieldInt8(2, typeType, Type2.NONE);
				}
				static addType(builder, typeOffset) {
					builder.addFieldOffset(3, typeOffset, 0);
				}
				static addDictionary(builder, dictionaryOffset) {
					builder.addFieldOffset(4, dictionaryOffset, 0);
				}
				static addChildren(builder, childrenOffset) {
					builder.addFieldOffset(5, childrenOffset, 0);
				}
				static createChildrenVector(builder, data) {
					builder.startVector(4, data.length, 4);
					for (let i = data.length - 1; i >= 0; i--) {
						builder.addOffset(data[i]);
					}
					return builder.endVector();
				}
				static startChildrenVector(builder, numElems) {
					builder.startVector(4, numElems, 4);
				}
				static addCustomMetadata(builder, customMetadataOffset) {
					builder.addFieldOffset(6, customMetadataOffset, 0);
				}
				static createCustomMetadataVector(builder, data) {
					builder.startVector(4, data.length, 4);
					for (let i = data.length - 1; i >= 0; i--) {
						builder.addOffset(data[i]);
					}
					return builder.endVector();
				}
				static startCustomMetadataVector(builder, numElems) {
					builder.startVector(4, numElems, 4);
				}
				static endField(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createField(
					builder,
					nameOffset,
					nullable,
					typeType,
					typeOffset,
					dictionaryOffset,
					childrenOffset,
					customMetadataOffset
				) {
					Field2.startField(builder);
					Field2.addName(builder, nameOffset);
					Field2.addNullable(builder, nullable);
					Field2.addTypeType(builder, typeType);
					Field2.addType(builder, typeOffset);
					Field2.addDictionary(builder, dictionaryOffset);
					Field2.addChildren(builder, childrenOffset);
					Field2.addCustomMetadata(builder, customMetadataOffset);
					return Field2.endField(builder);
				}
			};
			exports.Field = Field2;
			var Buffer2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				offset() {
					return this.bb.readInt64(this.bb_pos);
				}
				length() {
					return this.bb.readInt64(this.bb_pos + 8);
				}
				static createBuffer(builder, offset, length) {
					builder.prep(8, 16);
					builder.writeInt64(length);
					builder.writeInt64(offset);
					return builder.offset();
				}
			};
			exports.Buffer = Buffer2;
			var Schema2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsSchema(bb, obj) {
					return (obj || new Schema2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsSchema(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Schema2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				endianness() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt16(this.bb_pos + offset) : Endianness.Little;
				}
				fields(index, obj) {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset
						? (obj || new Field2()).__init(
								this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4),
								this.bb
						  )
						: null;
				}
				fieldsLength() {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
				}
				customMetadata(index, obj) {
					const offset = this.bb.__offset(this.bb_pos, 8);
					return offset
						? (obj || new KeyValue()).__init(
								this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4),
								this.bb
						  )
						: null;
				}
				customMetadataLength() {
					const offset = this.bb.__offset(this.bb_pos, 8);
					return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
				}
				features(index) {
					const offset = this.bb.__offset(this.bb_pos, 10);
					return offset
						? this.bb.readInt64(this.bb.__vector(this.bb_pos + offset) + index * 8)
						: this.bb.createLong(0, 0);
				}
				featuresLength() {
					const offset = this.bb.__offset(this.bb_pos, 10);
					return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
				}
				static startSchema(builder) {
					builder.startObject(4);
				}
				static addEndianness(builder, endianness) {
					builder.addFieldInt16(0, endianness, Endianness.Little);
				}
				static addFields(builder, fieldsOffset) {
					builder.addFieldOffset(1, fieldsOffset, 0);
				}
				static createFieldsVector(builder, data) {
					builder.startVector(4, data.length, 4);
					for (let i = data.length - 1; i >= 0; i--) {
						builder.addOffset(data[i]);
					}
					return builder.endVector();
				}
				static startFieldsVector(builder, numElems) {
					builder.startVector(4, numElems, 4);
				}
				static addCustomMetadata(builder, customMetadataOffset) {
					builder.addFieldOffset(2, customMetadataOffset, 0);
				}
				static createCustomMetadataVector(builder, data) {
					builder.startVector(4, data.length, 4);
					for (let i = data.length - 1; i >= 0; i--) {
						builder.addOffset(data[i]);
					}
					return builder.endVector();
				}
				static startCustomMetadataVector(builder, numElems) {
					builder.startVector(4, numElems, 4);
				}
				static addFeatures(builder, featuresOffset) {
					builder.addFieldOffset(3, featuresOffset, 0);
				}
				static createFeaturesVector(builder, data) {
					builder.startVector(8, data.length, 8);
					for (let i = data.length - 1; i >= 0; i--) {
						builder.addInt64(data[i]);
					}
					return builder.endVector();
				}
				static startFeaturesVector(builder, numElems) {
					builder.startVector(8, numElems, 8);
				}
				static endSchema(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static finishSchemaBuffer(builder, offset) {
					builder.finish(offset);
				}
				static finishSizePrefixedSchemaBuffer(builder, offset) {
					builder.finish(offset, void 0, true);
				}
				static createSchema(
					builder,
					endianness,
					fieldsOffset,
					customMetadataOffset,
					featuresOffset
				) {
					Schema2.startSchema(builder);
					Schema2.addEndianness(builder, endianness);
					Schema2.addFields(builder, fieldsOffset);
					Schema2.addCustomMetadata(builder, customMetadataOffset);
					Schema2.addFeatures(builder, featuresOffset);
					return Schema2.endSchema(builder);
				}
			};
			exports.Schema = Schema2;
		}
	});

	// ../../node_modules/apache-arrow/fb/Message.js
	var require_Message = __commonJS({
		'../../node_modules/apache-arrow/fb/Message.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Message =
				exports.DictionaryBatch =
				exports.RecordBatch =
				exports.BodyCompression =
				exports.FieldNode =
				exports.MessageHeader =
				exports.BodyCompressionMethod =
				exports.CompressionType =
					void 0;
			var flatbuffers_1 = require_flatbuffers();
			var NS13596923344997147894 = require_Schema();
			var CompressionType;
			(function (CompressionType2) {
				CompressionType2[(CompressionType2['LZ4_FRAME'] = 0)] = 'LZ4_FRAME';
				CompressionType2[(CompressionType2['ZSTD'] = 1)] = 'ZSTD';
			})((CompressionType = exports.CompressionType || (exports.CompressionType = {})));
			var BodyCompressionMethod;
			(function (BodyCompressionMethod2) {
				BodyCompressionMethod2[(BodyCompressionMethod2['BUFFER'] = 0)] = 'BUFFER';
			})(
				(BodyCompressionMethod =
					exports.BodyCompressionMethod || (exports.BodyCompressionMethod = {}))
			);
			var MessageHeader2;
			(function (MessageHeader3) {
				MessageHeader3[(MessageHeader3['NONE'] = 0)] = 'NONE';
				MessageHeader3[(MessageHeader3['Schema'] = 1)] = 'Schema';
				MessageHeader3[(MessageHeader3['DictionaryBatch'] = 2)] = 'DictionaryBatch';
				MessageHeader3[(MessageHeader3['RecordBatch'] = 3)] = 'RecordBatch';
				MessageHeader3[(MessageHeader3['Tensor'] = 4)] = 'Tensor';
				MessageHeader3[(MessageHeader3['SparseTensor'] = 5)] = 'SparseTensor';
			})((MessageHeader2 = exports.MessageHeader || (exports.MessageHeader = {})));
			var FieldNode = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				length() {
					return this.bb.readInt64(this.bb_pos);
				}
				nullCount() {
					return this.bb.readInt64(this.bb_pos + 8);
				}
				static createFieldNode(builder, length, null_count) {
					builder.prep(8, 16);
					builder.writeInt64(null_count);
					builder.writeInt64(length);
					return builder.offset();
				}
			};
			exports.FieldNode = FieldNode;
			var BodyCompression = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsBodyCompression(bb, obj) {
					return (obj || new BodyCompression()).__init(
						bb.readInt32(bb.position()) + bb.position(),
						bb
					);
				}
				static getSizePrefixedRootAsBodyCompression(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new BodyCompression()).__init(
						bb.readInt32(bb.position()) + bb.position(),
						bb
					);
				}
				codec() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt8(this.bb_pos + offset) : CompressionType.LZ4_FRAME;
				}
				method() {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset ? this.bb.readInt8(this.bb_pos + offset) : BodyCompressionMethod.BUFFER;
				}
				static startBodyCompression(builder) {
					builder.startObject(2);
				}
				static addCodec(builder, codec) {
					builder.addFieldInt8(0, codec, CompressionType.LZ4_FRAME);
				}
				static addMethod(builder, method) {
					builder.addFieldInt8(1, method, BodyCompressionMethod.BUFFER);
				}
				static endBodyCompression(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createBodyCompression(builder, codec, method) {
					BodyCompression.startBodyCompression(builder);
					BodyCompression.addCodec(builder, codec);
					BodyCompression.addMethod(builder, method);
					return BodyCompression.endBodyCompression(builder);
				}
			};
			exports.BodyCompression = BodyCompression;
			var RecordBatch2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsRecordBatch(bb, obj) {
					return (obj || new RecordBatch2()).__init(
						bb.readInt32(bb.position()) + bb.position(),
						bb
					);
				}
				static getSizePrefixedRootAsRecordBatch(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new RecordBatch2()).__init(
						bb.readInt32(bb.position()) + bb.position(),
						bb
					);
				}
				length() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
				}
				nodes(index, obj) {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset
						? (obj || new FieldNode()).__init(
								this.bb.__vector(this.bb_pos + offset) + index * 16,
								this.bb
						  )
						: null;
				}
				nodesLength() {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
				}
				buffers(index, obj) {
					const offset = this.bb.__offset(this.bb_pos, 8);
					return offset
						? (obj || new NS13596923344997147894.Buffer()).__init(
								this.bb.__vector(this.bb_pos + offset) + index * 16,
								this.bb
						  )
						: null;
				}
				buffersLength() {
					const offset = this.bb.__offset(this.bb_pos, 8);
					return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
				}
				compression(obj) {
					const offset = this.bb.__offset(this.bb_pos, 10);
					return offset
						? (obj || new BodyCompression()).__init(
								this.bb.__indirect(this.bb_pos + offset),
								this.bb
						  )
						: null;
				}
				static startRecordBatch(builder) {
					builder.startObject(4);
				}
				static addLength(builder, length) {
					builder.addFieldInt64(0, length, builder.createLong(0, 0));
				}
				static addNodes(builder, nodesOffset) {
					builder.addFieldOffset(1, nodesOffset, 0);
				}
				static startNodesVector(builder, numElems) {
					builder.startVector(16, numElems, 8);
				}
				static addBuffers(builder, buffersOffset) {
					builder.addFieldOffset(2, buffersOffset, 0);
				}
				static startBuffersVector(builder, numElems) {
					builder.startVector(16, numElems, 8);
				}
				static addCompression(builder, compressionOffset) {
					builder.addFieldOffset(3, compressionOffset, 0);
				}
				static endRecordBatch(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createRecordBatch(builder, length, nodesOffset, buffersOffset, compressionOffset) {
					RecordBatch2.startRecordBatch(builder);
					RecordBatch2.addLength(builder, length);
					RecordBatch2.addNodes(builder, nodesOffset);
					RecordBatch2.addBuffers(builder, buffersOffset);
					RecordBatch2.addCompression(builder, compressionOffset);
					return RecordBatch2.endRecordBatch(builder);
				}
			};
			exports.RecordBatch = RecordBatch2;
			var DictionaryBatch = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsDictionaryBatch(bb, obj) {
					return (obj || new DictionaryBatch()).__init(
						bb.readInt32(bb.position()) + bb.position(),
						bb
					);
				}
				static getSizePrefixedRootAsDictionaryBatch(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new DictionaryBatch()).__init(
						bb.readInt32(bb.position()) + bb.position(),
						bb
					);
				}
				id() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
				}
				data(obj) {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset
						? (obj || new RecordBatch2()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb)
						: null;
				}
				isDelta() {
					const offset = this.bb.__offset(this.bb_pos, 8);
					return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
				}
				static startDictionaryBatch(builder) {
					builder.startObject(3);
				}
				static addId(builder, id) {
					builder.addFieldInt64(0, id, builder.createLong(0, 0));
				}
				static addData(builder, dataOffset) {
					builder.addFieldOffset(1, dataOffset, 0);
				}
				static addIsDelta(builder, isDelta) {
					builder.addFieldInt8(2, +isDelta, 0);
				}
				static endDictionaryBatch(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static createDictionaryBatch(builder, id, dataOffset, isDelta) {
					DictionaryBatch.startDictionaryBatch(builder);
					DictionaryBatch.addId(builder, id);
					DictionaryBatch.addData(builder, dataOffset);
					DictionaryBatch.addIsDelta(builder, isDelta);
					return DictionaryBatch.endDictionaryBatch(builder);
				}
			};
			exports.DictionaryBatch = DictionaryBatch;
			var Message2 = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsMessage(bb, obj) {
					return (obj || new Message2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsMessage(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Message2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				version() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset
						? this.bb.readInt16(this.bb_pos + offset)
						: NS13596923344997147894.MetadataVersion.V1;
				}
				headerType() {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset ? this.bb.readUint8(this.bb_pos + offset) : MessageHeader2.NONE;
				}
				header(obj) {
					const offset = this.bb.__offset(this.bb_pos, 8);
					return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
				}
				bodyLength() {
					const offset = this.bb.__offset(this.bb_pos, 10);
					return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
				}
				customMetadata(index, obj) {
					const offset = this.bb.__offset(this.bb_pos, 12);
					return offset
						? (obj || new NS13596923344997147894.KeyValue()).__init(
								this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4),
								this.bb
						  )
						: null;
				}
				customMetadataLength() {
					const offset = this.bb.__offset(this.bb_pos, 12);
					return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
				}
				static startMessage(builder) {
					builder.startObject(5);
				}
				static addVersion(builder, version) {
					builder.addFieldInt16(0, version, NS13596923344997147894.MetadataVersion.V1);
				}
				static addHeaderType(builder, headerType) {
					builder.addFieldInt8(1, headerType, MessageHeader2.NONE);
				}
				static addHeader(builder, headerOffset) {
					builder.addFieldOffset(2, headerOffset, 0);
				}
				static addBodyLength(builder, bodyLength) {
					builder.addFieldInt64(3, bodyLength, builder.createLong(0, 0));
				}
				static addCustomMetadata(builder, customMetadataOffset) {
					builder.addFieldOffset(4, customMetadataOffset, 0);
				}
				static createCustomMetadataVector(builder, data) {
					builder.startVector(4, data.length, 4);
					for (let i = data.length - 1; i >= 0; i--) {
						builder.addOffset(data[i]);
					}
					return builder.endVector();
				}
				static startCustomMetadataVector(builder, numElems) {
					builder.startVector(4, numElems, 4);
				}
				static endMessage(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static finishMessageBuffer(builder, offset) {
					builder.finish(offset);
				}
				static finishSizePrefixedMessageBuffer(builder, offset) {
					builder.finish(offset, void 0, true);
				}
				static createMessage(
					builder,
					version,
					headerType,
					headerOffset,
					bodyLength,
					customMetadataOffset
				) {
					Message2.startMessage(builder);
					Message2.addVersion(builder, version);
					Message2.addHeaderType(builder, headerType);
					Message2.addHeader(builder, headerOffset);
					Message2.addBodyLength(builder, bodyLength);
					Message2.addCustomMetadata(builder, customMetadataOffset);
					return Message2.endMessage(builder);
				}
			};
			exports.Message = Message2;
		}
	});

	// ../../node_modules/apache-arrow/enum.js
	var require_enum = __commonJS({
		'../../node_modules/apache-arrow/enum.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.BufferType =
				exports.Type =
				exports.MessageHeader =
				exports.MetadataVersion =
				exports.IntervalUnit =
				exports.UnionMode =
				exports.Precision =
				exports.TimeUnit =
				exports.DateUnit =
					void 0;
			var Schema_1 = require_Schema();
			Object.defineProperty(exports, 'DateUnit', {
				enumerable: true,
				get: function () {
					return Schema_1.DateUnit;
				}
			});
			Object.defineProperty(exports, 'TimeUnit', {
				enumerable: true,
				get: function () {
					return Schema_1.TimeUnit;
				}
			});
			Object.defineProperty(exports, 'Precision', {
				enumerable: true,
				get: function () {
					return Schema_1.Precision;
				}
			});
			Object.defineProperty(exports, 'UnionMode', {
				enumerable: true,
				get: function () {
					return Schema_1.UnionMode;
				}
			});
			Object.defineProperty(exports, 'IntervalUnit', {
				enumerable: true,
				get: function () {
					return Schema_1.IntervalUnit;
				}
			});
			Object.defineProperty(exports, 'MetadataVersion', {
				enumerable: true,
				get: function () {
					return Schema_1.MetadataVersion;
				}
			});
			var Message_1 = require_Message();
			Object.defineProperty(exports, 'MessageHeader', {
				enumerable: true,
				get: function () {
					return Message_1.MessageHeader;
				}
			});
			var Type2;
			(function (Type3) {
				Type3[(Type3['NONE'] = 0)] = 'NONE';
				Type3[(Type3['Null'] = 1)] = 'Null';
				Type3[(Type3['Int'] = 2)] = 'Int';
				Type3[(Type3['Float'] = 3)] = 'Float';
				Type3[(Type3['Binary'] = 4)] = 'Binary';
				Type3[(Type3['Utf8'] = 5)] = 'Utf8';
				Type3[(Type3['Bool'] = 6)] = 'Bool';
				Type3[(Type3['Decimal'] = 7)] = 'Decimal';
				Type3[(Type3['Date'] = 8)] = 'Date';
				Type3[(Type3['Time'] = 9)] = 'Time';
				Type3[(Type3['Timestamp'] = 10)] = 'Timestamp';
				Type3[(Type3['Interval'] = 11)] = 'Interval';
				Type3[(Type3['List'] = 12)] = 'List';
				Type3[(Type3['Struct'] = 13)] = 'Struct';
				Type3[(Type3['Union'] = 14)] = 'Union';
				Type3[(Type3['FixedSizeBinary'] = 15)] = 'FixedSizeBinary';
				Type3[(Type3['FixedSizeList'] = 16)] = 'FixedSizeList';
				Type3[(Type3['Map'] = 17)] = 'Map';
				Type3[(Type3['Dictionary'] = -1)] = 'Dictionary';
				Type3[(Type3['Int8'] = -2)] = 'Int8';
				Type3[(Type3['Int16'] = -3)] = 'Int16';
				Type3[(Type3['Int32'] = -4)] = 'Int32';
				Type3[(Type3['Int64'] = -5)] = 'Int64';
				Type3[(Type3['Uint8'] = -6)] = 'Uint8';
				Type3[(Type3['Uint16'] = -7)] = 'Uint16';
				Type3[(Type3['Uint32'] = -8)] = 'Uint32';
				Type3[(Type3['Uint64'] = -9)] = 'Uint64';
				Type3[(Type3['Float16'] = -10)] = 'Float16';
				Type3[(Type3['Float32'] = -11)] = 'Float32';
				Type3[(Type3['Float64'] = -12)] = 'Float64';
				Type3[(Type3['DateDay'] = -13)] = 'DateDay';
				Type3[(Type3['DateMillisecond'] = -14)] = 'DateMillisecond';
				Type3[(Type3['TimestampSecond'] = -15)] = 'TimestampSecond';
				Type3[(Type3['TimestampMillisecond'] = -16)] = 'TimestampMillisecond';
				Type3[(Type3['TimestampMicrosecond'] = -17)] = 'TimestampMicrosecond';
				Type3[(Type3['TimestampNanosecond'] = -18)] = 'TimestampNanosecond';
				Type3[(Type3['TimeSecond'] = -19)] = 'TimeSecond';
				Type3[(Type3['TimeMillisecond'] = -20)] = 'TimeMillisecond';
				Type3[(Type3['TimeMicrosecond'] = -21)] = 'TimeMicrosecond';
				Type3[(Type3['TimeNanosecond'] = -22)] = 'TimeNanosecond';
				Type3[(Type3['DenseUnion'] = -23)] = 'DenseUnion';
				Type3[(Type3['SparseUnion'] = -24)] = 'SparseUnion';
				Type3[(Type3['IntervalDayTime'] = -25)] = 'IntervalDayTime';
				Type3[(Type3['IntervalYearMonth'] = -26)] = 'IntervalYearMonth';
			})((Type2 = exports.Type || (exports.Type = {})));
			var BufferType2;
			(function (BufferType3) {
				BufferType3[(BufferType3['OFFSET'] = 0)] = 'OFFSET';
				BufferType3[(BufferType3['DATA'] = 1)] = 'DATA';
				BufferType3[(BufferType3['VALIDITY'] = 2)] = 'VALIDITY';
				BufferType3[(BufferType3['TYPE'] = 3)] = 'TYPE';
			})((BufferType2 = exports.BufferType || (exports.BufferType = {})));
		}
	});

	// ../../node_modules/apache-arrow/util/bit.js
	var require_bit = __commonJS({
		'../../node_modules/apache-arrow/util/bit.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.popcnt_uint32 =
				exports.popcnt_array =
				exports.popcnt_bit_range =
				exports.BitIterator =
				exports.packBools =
				exports.truncateBitmap =
				exports.setBool =
				exports.getBit =
				exports.getBool =
					void 0;
			function getBool(_data, _index, byte, bit) {
				return (byte & (1 << bit)) !== 0;
			}
			exports.getBool = getBool;
			function getBit(_data, _index, byte, bit) {
				return (byte & (1 << bit)) >> bit;
			}
			exports.getBit = getBit;
			function setBool(bytes, index, value) {
				return value
					? !!(bytes[index >> 3] |= 1 << index % 8) || true
					: !(bytes[index >> 3] &= ~(1 << index % 8)) && false;
			}
			exports.setBool = setBool;
			function truncateBitmap(offset, length, bitmap) {
				const alignedSize = (bitmap.byteLength + 7) & ~7;
				if (offset > 0 || bitmap.byteLength < alignedSize) {
					const bytes = new Uint8Array(alignedSize);
					bytes.set(
						offset % 8 === 0
							? bitmap.subarray(offset >> 3)
							: packBools(new BitIterator(bitmap, offset, length, null, getBool)).subarray(
									0,
									alignedSize
							  )
					);
					return bytes;
				}
				return bitmap;
			}
			exports.truncateBitmap = truncateBitmap;
			function packBools(values) {
				const xs = [];
				let i = 0,
					bit = 0,
					byte = 0;
				for (const value of values) {
					value && (byte |= 1 << bit);
					if (++bit === 8) {
						xs[i++] = byte;
						byte = bit = 0;
					}
				}
				if (i === 0 || bit > 0) {
					xs[i++] = byte;
				}
				const b = new Uint8Array((xs.length + 7) & ~7);
				b.set(xs);
				return b;
			}
			exports.packBools = packBools;
			var BitIterator = class {
				constructor(bytes, begin, length, context, get) {
					this.bytes = bytes;
					this.length = length;
					this.context = context;
					this.get = get;
					this.bit = begin % 8;
					this.byteIndex = begin >> 3;
					this.byte = bytes[this.byteIndex++];
					this.index = 0;
				}
				next() {
					if (this.index < this.length) {
						if (this.bit === 8) {
							this.bit = 0;
							this.byte = this.bytes[this.byteIndex++];
						}
						return {
							value: this.get(this.context, this.index++, this.byte, this.bit++)
						};
					}
					return { done: true, value: null };
				}
				[Symbol.iterator]() {
					return this;
				}
			};
			exports.BitIterator = BitIterator;
			function popcnt_bit_range(data, lhs, rhs) {
				if (rhs - lhs <= 0) {
					return 0;
				}
				if (rhs - lhs < 8) {
					let sum = 0;
					for (const bit of new BitIterator(data, lhs, rhs - lhs, data, getBit)) {
						sum += bit;
					}
					return sum;
				}
				const rhsInside = (rhs >> 3) << 3;
				const lhsInside = lhs + (lhs % 8 === 0 ? 0 : 8 - (lhs % 8));
				return (
					popcnt_bit_range(data, lhs, lhsInside) +
					popcnt_bit_range(data, rhsInside, rhs) +
					popcnt_array(data, lhsInside >> 3, (rhsInside - lhsInside) >> 3)
				);
			}
			exports.popcnt_bit_range = popcnt_bit_range;
			function popcnt_array(arr, byteOffset, byteLength) {
				let cnt = 0,
					pos = byteOffset | 0;
				const view = new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
				const len = byteLength === void 0 ? arr.byteLength : pos + byteLength;
				while (len - pos >= 4) {
					cnt += popcnt_uint32(view.getUint32(pos));
					pos += 4;
				}
				while (len - pos >= 2) {
					cnt += popcnt_uint32(view.getUint16(pos));
					pos += 2;
				}
				while (len - pos >= 1) {
					cnt += popcnt_uint32(view.getUint8(pos));
					pos += 1;
				}
				return cnt;
			}
			exports.popcnt_array = popcnt_array;
			function popcnt_uint32(uint32) {
				let i = uint32 | 0;
				i = i - ((i >>> 1) & 1431655765);
				i = (i & 858993459) + ((i >>> 2) & 858993459);
				return (((i + (i >>> 4)) & 252645135) * 16843009) >>> 24;
			}
			exports.popcnt_uint32 = popcnt_uint32;
		}
	});

	// ../../node_modules/apache-arrow/type.js
	var require_type = __commonJS({
		'../../node_modules/apache-arrow/type.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.strideForType =
				exports.Dictionary =
				exports.Map_ =
				exports.FixedSizeList =
				exports.FixedSizeBinary =
				exports.SparseUnion =
				exports.DenseUnion =
				exports.Union =
				exports.Struct =
				exports.List =
				exports.IntervalYearMonth =
				exports.IntervalDayTime =
				exports.Interval =
				exports.TimestampNanosecond =
				exports.TimestampMicrosecond =
				exports.TimestampMillisecond =
				exports.TimestampSecond =
				exports.Timestamp =
				exports.TimeNanosecond =
				exports.TimeMicrosecond =
				exports.TimeMillisecond =
				exports.TimeSecond =
				exports.Time =
				exports.DateMillisecond =
				exports.DateDay =
				exports.Date_ =
				exports.Decimal =
				exports.Bool =
				exports.Utf8 =
				exports.Binary =
				exports.Float64 =
				exports.Float32 =
				exports.Float16 =
				exports.Float =
				exports.Uint64 =
				exports.Uint32 =
				exports.Uint16 =
				exports.Uint8 =
				exports.Int64 =
				exports.Int32 =
				exports.Int16 =
				exports.Int8 =
				exports.Int =
				exports.Null =
				exports.DataType =
					void 0;
			var enum_1 = require_enum();
			var DataType2 = class {
				static isNull(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Null;
				}
				static isInt(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Int;
				}
				static isFloat(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Float;
				}
				static isBinary(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Binary;
				}
				static isUtf8(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Utf8;
				}
				static isBool(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Bool;
				}
				static isDecimal(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Decimal;
				}
				static isDate(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Date;
				}
				static isTime(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Time;
				}
				static isTimestamp(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Timestamp;
				}
				static isInterval(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Interval;
				}
				static isList(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.List;
				}
				static isStruct(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Struct;
				}
				static isUnion(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Union;
				}
				static isFixedSizeBinary(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.FixedSizeBinary;
				}
				static isFixedSizeList(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.FixedSizeList;
				}
				static isMap(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Map;
				}
				static isDictionary(x) {
					return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Dictionary;
				}
				get typeId() {
					return enum_1.Type.NONE;
				}
			};
			exports.DataType = DataType2;
			DataType2[Symbol.toStringTag] = ((proto) => {
				proto.children = null;
				proto.ArrayType = Array;
				return (proto[Symbol.toStringTag] = 'DataType');
			})(DataType2.prototype);
			var Null2 = class extends DataType2 {
				toString() {
					return `Null`;
				}
				get typeId() {
					return enum_1.Type.Null;
				}
			};
			exports.Null = Null2;
			Null2[Symbol.toStringTag] = ((proto) => {
				return (proto[Symbol.toStringTag] = 'Null');
			})(Null2.prototype);
			var Int_ = class extends DataType2 {
				constructor(isSigned, bitWidth) {
					super();
					this.isSigned = isSigned;
					this.bitWidth = bitWidth;
				}
				get typeId() {
					return enum_1.Type.Int;
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
					return `${this.isSigned ? `I` : `Ui`}nt${this.bitWidth}`;
				}
			};
			exports.Int = Int_;
			Int_[Symbol.toStringTag] = ((proto) => {
				proto.isSigned = null;
				proto.bitWidth = null;
				return (proto[Symbol.toStringTag] = 'Int');
			})(Int_.prototype);
			var Int82 = class extends Int_ {
				constructor() {
					super(true, 8);
				}
			};
			exports.Int8 = Int82;
			var Int162 = class extends Int_ {
				constructor() {
					super(true, 16);
				}
			};
			exports.Int16 = Int162;
			var Int322 = class extends Int_ {
				constructor() {
					super(true, 32);
				}
			};
			exports.Int32 = Int322;
			var Int642 = class extends Int_ {
				constructor() {
					super(true, 64);
				}
			};
			exports.Int64 = Int642;
			var Uint82 = class extends Int_ {
				constructor() {
					super(false, 8);
				}
			};
			exports.Uint8 = Uint82;
			var Uint162 = class extends Int_ {
				constructor() {
					super(false, 16);
				}
			};
			exports.Uint16 = Uint162;
			var Uint322 = class extends Int_ {
				constructor() {
					super(false, 32);
				}
			};
			exports.Uint32 = Uint322;
			var Uint642 = class extends Int_ {
				constructor() {
					super(false, 64);
				}
			};
			exports.Uint64 = Uint642;
			Object.defineProperty(Int82.prototype, 'ArrayType', { value: Int8Array });
			Object.defineProperty(Int162.prototype, 'ArrayType', { value: Int16Array });
			Object.defineProperty(Int322.prototype, 'ArrayType', { value: Int32Array });
			Object.defineProperty(Int642.prototype, 'ArrayType', { value: Int32Array });
			Object.defineProperty(Uint82.prototype, 'ArrayType', { value: Uint8Array });
			Object.defineProperty(Uint162.prototype, 'ArrayType', { value: Uint16Array });
			Object.defineProperty(Uint322.prototype, 'ArrayType', { value: Uint32Array });
			Object.defineProperty(Uint642.prototype, 'ArrayType', { value: Uint32Array });
			var Float2 = class extends DataType2 {
				constructor(precision) {
					super();
					this.precision = precision;
				}
				get typeId() {
					return enum_1.Type.Float;
				}
				get ArrayType() {
					switch (this.precision) {
						case enum_1.Precision.HALF:
							return Uint16Array;
						case enum_1.Precision.SINGLE:
							return Float32Array;
						case enum_1.Precision.DOUBLE:
							return Float64Array;
					}
					throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
				}
				toString() {
					return `Float${this.precision << 5 || 16}`;
				}
			};
			exports.Float = Float2;
			Float2[Symbol.toStringTag] = ((proto) => {
				proto.precision = null;
				return (proto[Symbol.toStringTag] = 'Float');
			})(Float2.prototype);
			var Float162 = class extends Float2 {
				constructor() {
					super(enum_1.Precision.HALF);
				}
			};
			exports.Float16 = Float162;
			var Float322 = class extends Float2 {
				constructor() {
					super(enum_1.Precision.SINGLE);
				}
			};
			exports.Float32 = Float322;
			var Float642 = class extends Float2 {
				constructor() {
					super(enum_1.Precision.DOUBLE);
				}
			};
			exports.Float64 = Float642;
			Object.defineProperty(Float162.prototype, 'ArrayType', { value: Uint16Array });
			Object.defineProperty(Float322.prototype, 'ArrayType', { value: Float32Array });
			Object.defineProperty(Float642.prototype, 'ArrayType', { value: Float64Array });
			var Binary2 = class extends DataType2 {
				constructor() {
					super();
				}
				get typeId() {
					return enum_1.Type.Binary;
				}
				toString() {
					return `Binary`;
				}
			};
			exports.Binary = Binary2;
			Binary2[Symbol.toStringTag] = ((proto) => {
				proto.ArrayType = Uint8Array;
				return (proto[Symbol.toStringTag] = 'Binary');
			})(Binary2.prototype);
			var Utf82 = class extends DataType2 {
				constructor() {
					super();
				}
				get typeId() {
					return enum_1.Type.Utf8;
				}
				toString() {
					return `Utf8`;
				}
			};
			exports.Utf8 = Utf82;
			Utf82[Symbol.toStringTag] = ((proto) => {
				proto.ArrayType = Uint8Array;
				return (proto[Symbol.toStringTag] = 'Utf8');
			})(Utf82.prototype);
			var Bool2 = class extends DataType2 {
				constructor() {
					super();
				}
				get typeId() {
					return enum_1.Type.Bool;
				}
				toString() {
					return `Bool`;
				}
			};
			exports.Bool = Bool2;
			Bool2[Symbol.toStringTag] = ((proto) => {
				proto.ArrayType = Uint8Array;
				return (proto[Symbol.toStringTag] = 'Bool');
			})(Bool2.prototype);
			var Decimal2 = class extends DataType2 {
				constructor(scale, precision) {
					super();
					this.scale = scale;
					this.precision = precision;
				}
				get typeId() {
					return enum_1.Type.Decimal;
				}
				toString() {
					return `Decimal[${this.precision}e${this.scale > 0 ? `+` : ``}${this.scale}]`;
				}
			};
			exports.Decimal = Decimal2;
			Decimal2[Symbol.toStringTag] = ((proto) => {
				proto.scale = null;
				proto.precision = null;
				proto.ArrayType = Uint32Array;
				return (proto[Symbol.toStringTag] = 'Decimal');
			})(Decimal2.prototype);
			var Date_2 = class extends DataType2 {
				constructor(unit) {
					super();
					this.unit = unit;
				}
				get typeId() {
					return enum_1.Type.Date;
				}
				toString() {
					return `Date${(this.unit + 1) * 32}<${enum_1.DateUnit[this.unit]}>`;
				}
			};
			exports.Date_ = Date_2;
			Date_2[Symbol.toStringTag] = ((proto) => {
				proto.unit = null;
				proto.ArrayType = Int32Array;
				return (proto[Symbol.toStringTag] = 'Date');
			})(Date_2.prototype);
			var DateDay2 = class extends Date_2 {
				constructor() {
					super(enum_1.DateUnit.DAY);
				}
			};
			exports.DateDay = DateDay2;
			var DateMillisecond2 = class extends Date_2 {
				constructor() {
					super(enum_1.DateUnit.MILLISECOND);
				}
			};
			exports.DateMillisecond = DateMillisecond2;
			var Time_ = class extends DataType2 {
				constructor(unit, bitWidth) {
					super();
					this.unit = unit;
					this.bitWidth = bitWidth;
				}
				get typeId() {
					return enum_1.Type.Time;
				}
				toString() {
					return `Time${this.bitWidth}<${enum_1.TimeUnit[this.unit]}>`;
				}
			};
			exports.Time = Time_;
			Time_[Symbol.toStringTag] = ((proto) => {
				proto.unit = null;
				proto.bitWidth = null;
				proto.ArrayType = Int32Array;
				return (proto[Symbol.toStringTag] = 'Time');
			})(Time_.prototype);
			var TimeSecond2 = class extends Time_ {
				constructor() {
					super(enum_1.TimeUnit.SECOND, 32);
				}
			};
			exports.TimeSecond = TimeSecond2;
			var TimeMillisecond2 = class extends Time_ {
				constructor() {
					super(enum_1.TimeUnit.MILLISECOND, 32);
				}
			};
			exports.TimeMillisecond = TimeMillisecond2;
			var TimeMicrosecond2 = class extends Time_ {
				constructor() {
					super(enum_1.TimeUnit.MICROSECOND, 64);
				}
			};
			exports.TimeMicrosecond = TimeMicrosecond2;
			var TimeNanosecond2 = class extends Time_ {
				constructor() {
					super(enum_1.TimeUnit.NANOSECOND, 64);
				}
			};
			exports.TimeNanosecond = TimeNanosecond2;
			var Timestamp_ = class extends DataType2 {
				constructor(unit, timezone) {
					super();
					this.unit = unit;
					this.timezone = timezone;
				}
				get typeId() {
					return enum_1.Type.Timestamp;
				}
				toString() {
					return `Timestamp<${enum_1.TimeUnit[this.unit]}${
						this.timezone ? `, ${this.timezone}` : ``
					}>`;
				}
			};
			exports.Timestamp = Timestamp_;
			Timestamp_[Symbol.toStringTag] = ((proto) => {
				proto.unit = null;
				proto.timezone = null;
				proto.ArrayType = Int32Array;
				return (proto[Symbol.toStringTag] = 'Timestamp');
			})(Timestamp_.prototype);
			var TimestampSecond2 = class extends Timestamp_ {
				constructor(timezone) {
					super(enum_1.TimeUnit.SECOND, timezone);
				}
			};
			exports.TimestampSecond = TimestampSecond2;
			var TimestampMillisecond2 = class extends Timestamp_ {
				constructor(timezone) {
					super(enum_1.TimeUnit.MILLISECOND, timezone);
				}
			};
			exports.TimestampMillisecond = TimestampMillisecond2;
			var TimestampMicrosecond2 = class extends Timestamp_ {
				constructor(timezone) {
					super(enum_1.TimeUnit.MICROSECOND, timezone);
				}
			};
			exports.TimestampMicrosecond = TimestampMicrosecond2;
			var TimestampNanosecond2 = class extends Timestamp_ {
				constructor(timezone) {
					super(enum_1.TimeUnit.NANOSECOND, timezone);
				}
			};
			exports.TimestampNanosecond = TimestampNanosecond2;
			var Interval_ = class extends DataType2 {
				constructor(unit) {
					super();
					this.unit = unit;
				}
				get typeId() {
					return enum_1.Type.Interval;
				}
				toString() {
					return `Interval<${enum_1.IntervalUnit[this.unit]}>`;
				}
			};
			exports.Interval = Interval_;
			Interval_[Symbol.toStringTag] = ((proto) => {
				proto.unit = null;
				proto.ArrayType = Int32Array;
				return (proto[Symbol.toStringTag] = 'Interval');
			})(Interval_.prototype);
			var IntervalDayTime2 = class extends Interval_ {
				constructor() {
					super(enum_1.IntervalUnit.DAY_TIME);
				}
			};
			exports.IntervalDayTime = IntervalDayTime2;
			var IntervalYearMonth2 = class extends Interval_ {
				constructor() {
					super(enum_1.IntervalUnit.YEAR_MONTH);
				}
			};
			exports.IntervalYearMonth = IntervalYearMonth2;
			var List2 = class extends DataType2 {
				constructor(child) {
					super();
					this.children = [child];
				}
				get typeId() {
					return enum_1.Type.List;
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
			exports.List = List2;
			List2[Symbol.toStringTag] = ((proto) => {
				proto.children = null;
				return (proto[Symbol.toStringTag] = 'List');
			})(List2.prototype);
			var Struct2 = class extends DataType2 {
				constructor(children) {
					super();
					this.children = children;
				}
				get typeId() {
					return enum_1.Type.Struct;
				}
				toString() {
					return `Struct<{${this.children.map((f) => `${f.name}:${f.type}`).join(`, `)}}>`;
				}
			};
			exports.Struct = Struct2;
			Struct2[Symbol.toStringTag] = ((proto) => {
				proto.children = null;
				return (proto[Symbol.toStringTag] = 'Struct');
			})(Struct2.prototype);
			var Union_ = class extends DataType2 {
				constructor(mode, typeIds, children) {
					super();
					this.mode = mode;
					this.children = children;
					this.typeIds = typeIds = Int32Array.from(typeIds);
					this.typeIdToChildIndex = typeIds.reduce((typeIdToChildIndex, typeId, idx) => {
						return ((typeIdToChildIndex[typeId] = idx) && typeIdToChildIndex) || typeIdToChildIndex;
					}, Object.create(null));
				}
				get typeId() {
					return enum_1.Type.Union;
				}
				toString() {
					return `${this[Symbol.toStringTag]}<${this.children
						.map((x) => `${x.type}`)
						.join(` | `)}>`;
				}
			};
			exports.Union = Union_;
			Union_[Symbol.toStringTag] = ((proto) => {
				proto.mode = null;
				proto.typeIds = null;
				proto.children = null;
				proto.typeIdToChildIndex = null;
				proto.ArrayType = Int8Array;
				return (proto[Symbol.toStringTag] = 'Union');
			})(Union_.prototype);
			var DenseUnion2 = class extends Union_ {
				constructor(typeIds, children) {
					super(enum_1.UnionMode.Dense, typeIds, children);
				}
			};
			exports.DenseUnion = DenseUnion2;
			var SparseUnion2 = class extends Union_ {
				constructor(typeIds, children) {
					super(enum_1.UnionMode.Sparse, typeIds, children);
				}
			};
			exports.SparseUnion = SparseUnion2;
			var FixedSizeBinary2 = class extends DataType2 {
				constructor(byteWidth) {
					super();
					this.byteWidth = byteWidth;
				}
				get typeId() {
					return enum_1.Type.FixedSizeBinary;
				}
				toString() {
					return `FixedSizeBinary[${this.byteWidth}]`;
				}
			};
			exports.FixedSizeBinary = FixedSizeBinary2;
			FixedSizeBinary2[Symbol.toStringTag] = ((proto) => {
				proto.byteWidth = null;
				proto.ArrayType = Uint8Array;
				return (proto[Symbol.toStringTag] = 'FixedSizeBinary');
			})(FixedSizeBinary2.prototype);
			var FixedSizeList2 = class extends DataType2 {
				constructor(listSize, child) {
					super();
					this.listSize = listSize;
					this.children = [child];
				}
				get typeId() {
					return enum_1.Type.FixedSizeList;
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
			exports.FixedSizeList = FixedSizeList2;
			FixedSizeList2[Symbol.toStringTag] = ((proto) => {
				proto.children = null;
				proto.listSize = null;
				return (proto[Symbol.toStringTag] = 'FixedSizeList');
			})(FixedSizeList2.prototype);
			var Map_2 = class extends DataType2 {
				constructor(child, keysSorted = false) {
					super();
					this.children = [child];
					this.keysSorted = keysSorted;
				}
				get typeId() {
					return enum_1.Type.Map;
				}
				get keyType() {
					return this.children[0].type.children[0].type;
				}
				get valueType() {
					return this.children[0].type.children[1].type;
				}
				toString() {
					return `Map<{${this.children[0].type.children
						.map((f) => `${f.name}:${f.type}`)
						.join(`, `)}}>`;
				}
			};
			exports.Map_ = Map_2;
			Map_2[Symbol.toStringTag] = ((proto) => {
				proto.children = null;
				proto.keysSorted = null;
				return (proto[Symbol.toStringTag] = 'Map_');
			})(Map_2.prototype);
			var getId = (
				(atomicDictionaryId) => () =>
					++atomicDictionaryId
			)(-1);
			var Dictionary2 = class extends DataType2 {
				constructor(dictionary, indices, id, isOrdered) {
					super();
					this.indices = indices;
					this.dictionary = dictionary;
					this.isOrdered = isOrdered || false;
					this.id = id == null ? getId() : typeof id === 'number' ? id : id.low;
				}
				get typeId() {
					return enum_1.Type.Dictionary;
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
			exports.Dictionary = Dictionary2;
			Dictionary2[Symbol.toStringTag] = ((proto) => {
				proto.id = null;
				proto.indices = null;
				proto.isOrdered = null;
				proto.dictionary = null;
				return (proto[Symbol.toStringTag] = 'Dictionary');
			})(Dictionary2.prototype);
			function strideForType(type) {
				const t = type;
				switch (type.typeId) {
					case enum_1.Type.Decimal:
						return 4;
					case enum_1.Type.Timestamp:
						return 2;
					case enum_1.Type.Date:
						return 1 + t.unit;
					case enum_1.Type.Interval:
						return 1 + t.unit;
					case enum_1.Type.Int:
						return 1 + +(t.bitWidth > 32);
					case enum_1.Type.Time:
						return 1 + +(t.bitWidth > 32);
					case enum_1.Type.FixedSizeList:
						return t.listSize;
					case enum_1.Type.FixedSizeBinary:
						return t.byteWidth;
					default:
						return 1;
				}
			}
			exports.strideForType = strideForType;
		}
	});

	// ../../node_modules/apache-arrow/data.js
	var require_data = __commonJS({
		'../../node_modules/apache-arrow/data.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Data = exports.kUnknownNullCount = void 0;
			var bit_1 = require_bit();
			var bit_2 = require_bit();
			var enum_1 = require_enum();
			var type_1 = require_type();
			var buffer_1 = require_buffer();
			exports.kUnknownNullCount = -1;
			var Data2 = class {
				constructor(type, offset, length, nullCount, buffers, childData, dictionary) {
					this.type = type;
					this.dictionary = dictionary;
					this.offset = Math.floor(Math.max(offset || 0, 0));
					this.length = Math.floor(Math.max(length || 0, 0));
					this._nullCount = Math.floor(Math.max(nullCount || 0, -1));
					this.childData = (childData || []).map((x) => (x instanceof Data2 ? x : x.data));
					let buffer;
					if (buffers instanceof Data2) {
						this.stride = buffers.stride;
						this.values = buffers.values;
						this.typeIds = buffers.typeIds;
						this.nullBitmap = buffers.nullBitmap;
						this.valueOffsets = buffers.valueOffsets;
					} else {
						this.stride = type_1.strideForType(type);
						if (buffers) {
							(buffer = buffers[0]) && (this.valueOffsets = buffer);
							(buffer = buffers[1]) && (this.values = buffer);
							(buffer = buffers[2]) && (this.nullBitmap = buffer);
							(buffer = buffers[3]) && (this.typeIds = buffer);
						}
					}
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
					let byteLength = 0;
					const { valueOffsets, values, nullBitmap, typeIds } = this;
					valueOffsets && (byteLength += valueOffsets.byteLength);
					values && (byteLength += values.byteLength);
					nullBitmap && (byteLength += nullBitmap.byteLength);
					typeIds && (byteLength += typeIds.byteLength);
					return this.childData.reduce(
						(byteLength2, child) => byteLength2 + child.byteLength,
						byteLength
					);
				}
				get nullCount() {
					let nullCount = this._nullCount;
					let nullBitmap;
					if (nullCount <= exports.kUnknownNullCount && (nullBitmap = this.nullBitmap)) {
						this._nullCount = nullCount =
							this.length -
							bit_2.popcnt_bit_range(nullBitmap, this.offset, this.offset + this.length);
					}
					return nullCount;
				}
				clone(
					type,
					offset = this.offset,
					length = this.length,
					nullCount = this._nullCount,
					buffers = this,
					childData = this.childData
				) {
					return new Data2(type, offset, length, nullCount, buffers, childData, this.dictionary);
				}
				slice(offset, length) {
					const { stride, typeId, childData } = this;
					const nullCount = +(this._nullCount === 0) - 1;
					const childStride = typeId === 16 ? stride : 1;
					const buffers = this._sliceBuffers(offset, length, stride, typeId);
					return this.clone(
						this.type,
						this.offset + offset,
						length,
						nullCount,
						buffers,
						!childData.length || this.valueOffsets
							? childData
							: this._sliceChildren(childData, childStride * offset, childStride * length)
					);
				}
				_changeLengthAndBackfillNullBitmap(newLength) {
					if (this.typeId === enum_1.Type.Null) {
						return this.clone(this.type, 0, newLength, 0);
					}
					const { length, nullCount } = this;
					const bitmap = new Uint8Array(((newLength + 63) & ~63) >> 3).fill(255, 0, length >> 3);
					bitmap[length >> 3] = (1 << (length - (length & ~7))) - 1;
					if (nullCount > 0) {
						bitmap.set(bit_1.truncateBitmap(this.offset, length, this.nullBitmap), 0);
					}
					const buffers = this.buffers;
					buffers[enum_1.BufferType.VALIDITY] = bitmap;
					return this.clone(this.type, 0, newLength, nullCount + (newLength - length), buffers);
				}
				_sliceBuffers(offset, length, stride, typeId) {
					let arr;
					const { buffers } = this;
					(arr = buffers[enum_1.BufferType.TYPE]) &&
						(buffers[enum_1.BufferType.TYPE] = arr.subarray(offset, offset + length));
					((arr = buffers[enum_1.BufferType.OFFSET]) &&
						(buffers[enum_1.BufferType.OFFSET] = arr.subarray(offset, offset + length + 1))) ||
						((arr = buffers[enum_1.BufferType.DATA]) &&
							(buffers[enum_1.BufferType.DATA] =
								typeId === 6 ? arr : arr.subarray(stride * offset, stride * (offset + length))));
					return buffers;
				}
				_sliceChildren(childData, offset, length) {
					return childData.map((child) => child.slice(offset, length));
				}
				static new(type, offset, length, nullCount, buffers, childData, dictionary) {
					if (buffers instanceof Data2) {
						buffers = buffers.buffers;
					} else if (!buffers) {
						buffers = [];
					}
					switch (type.typeId) {
						case enum_1.Type.Null:
							return Data2.Null(type, offset, length);
						case enum_1.Type.Int:
							return Data2.Int(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								buffers[enum_1.BufferType.DATA] || []
							);
						case enum_1.Type.Dictionary:
							return Data2.Dictionary(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								buffers[enum_1.BufferType.DATA] || [],
								dictionary
							);
						case enum_1.Type.Float:
							return Data2.Float(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								buffers[enum_1.BufferType.DATA] || []
							);
						case enum_1.Type.Bool:
							return Data2.Bool(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								buffers[enum_1.BufferType.DATA] || []
							);
						case enum_1.Type.Decimal:
							return Data2.Decimal(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								buffers[enum_1.BufferType.DATA] || []
							);
						case enum_1.Type.Date:
							return Data2.Date(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								buffers[enum_1.BufferType.DATA] || []
							);
						case enum_1.Type.Time:
							return Data2.Time(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								buffers[enum_1.BufferType.DATA] || []
							);
						case enum_1.Type.Timestamp:
							return Data2.Timestamp(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								buffers[enum_1.BufferType.DATA] || []
							);
						case enum_1.Type.Interval:
							return Data2.Interval(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								buffers[enum_1.BufferType.DATA] || []
							);
						case enum_1.Type.FixedSizeBinary:
							return Data2.FixedSizeBinary(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								buffers[enum_1.BufferType.DATA] || []
							);
						case enum_1.Type.Binary:
							return Data2.Binary(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								buffers[enum_1.BufferType.OFFSET] || [],
								buffers[enum_1.BufferType.DATA] || []
							);
						case enum_1.Type.Utf8:
							return Data2.Utf8(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								buffers[enum_1.BufferType.OFFSET] || [],
								buffers[enum_1.BufferType.DATA] || []
							);
						case enum_1.Type.List:
							return Data2.List(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								buffers[enum_1.BufferType.OFFSET] || [],
								(childData || [])[0]
							);
						case enum_1.Type.FixedSizeList:
							return Data2.FixedSizeList(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								(childData || [])[0]
							);
						case enum_1.Type.Struct:
							return Data2.Struct(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								childData || []
							);
						case enum_1.Type.Map:
							return Data2.Map(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								buffers[enum_1.BufferType.OFFSET] || [],
								(childData || [])[0]
							);
						case enum_1.Type.Union:
							return Data2.Union(
								type,
								offset,
								length,
								nullCount || 0,
								buffers[enum_1.BufferType.VALIDITY],
								buffers[enum_1.BufferType.TYPE] || [],
								buffers[enum_1.BufferType.OFFSET] || childData,
								childData
							);
					}
					throw new Error(`Unrecognized typeId ${type.typeId}`);
				}
				static Null(type, offset, length) {
					return new Data2(type, offset, length, 0);
				}
				static Int(type, offset, length, nullCount, nullBitmap, data) {
					return new Data2(type, offset, length, nullCount, [
						void 0,
						buffer_1.toArrayBufferView(type.ArrayType, data),
						buffer_1.toUint8Array(nullBitmap)
					]);
				}
				static Dictionary(type, offset, length, nullCount, nullBitmap, data, dictionary) {
					return new Data2(
						type,
						offset,
						length,
						nullCount,
						[
							void 0,
							buffer_1.toArrayBufferView(type.indices.ArrayType, data),
							buffer_1.toUint8Array(nullBitmap)
						],
						[],
						dictionary
					);
				}
				static Float(type, offset, length, nullCount, nullBitmap, data) {
					return new Data2(type, offset, length, nullCount, [
						void 0,
						buffer_1.toArrayBufferView(type.ArrayType, data),
						buffer_1.toUint8Array(nullBitmap)
					]);
				}
				static Bool(type, offset, length, nullCount, nullBitmap, data) {
					return new Data2(type, offset, length, nullCount, [
						void 0,
						buffer_1.toArrayBufferView(type.ArrayType, data),
						buffer_1.toUint8Array(nullBitmap)
					]);
				}
				static Decimal(type, offset, length, nullCount, nullBitmap, data) {
					return new Data2(type, offset, length, nullCount, [
						void 0,
						buffer_1.toArrayBufferView(type.ArrayType, data),
						buffer_1.toUint8Array(nullBitmap)
					]);
				}
				static Date(type, offset, length, nullCount, nullBitmap, data) {
					return new Data2(type, offset, length, nullCount, [
						void 0,
						buffer_1.toArrayBufferView(type.ArrayType, data),
						buffer_1.toUint8Array(nullBitmap)
					]);
				}
				static Time(type, offset, length, nullCount, nullBitmap, data) {
					return new Data2(type, offset, length, nullCount, [
						void 0,
						buffer_1.toArrayBufferView(type.ArrayType, data),
						buffer_1.toUint8Array(nullBitmap)
					]);
				}
				static Timestamp(type, offset, length, nullCount, nullBitmap, data) {
					return new Data2(type, offset, length, nullCount, [
						void 0,
						buffer_1.toArrayBufferView(type.ArrayType, data),
						buffer_1.toUint8Array(nullBitmap)
					]);
				}
				static Interval(type, offset, length, nullCount, nullBitmap, data) {
					return new Data2(type, offset, length, nullCount, [
						void 0,
						buffer_1.toArrayBufferView(type.ArrayType, data),
						buffer_1.toUint8Array(nullBitmap)
					]);
				}
				static FixedSizeBinary(type, offset, length, nullCount, nullBitmap, data) {
					return new Data2(type, offset, length, nullCount, [
						void 0,
						buffer_1.toArrayBufferView(type.ArrayType, data),
						buffer_1.toUint8Array(nullBitmap)
					]);
				}
				static Binary(type, offset, length, nullCount, nullBitmap, valueOffsets, data) {
					return new Data2(type, offset, length, nullCount, [
						buffer_1.toInt32Array(valueOffsets),
						buffer_1.toUint8Array(data),
						buffer_1.toUint8Array(nullBitmap)
					]);
				}
				static Utf8(type, offset, length, nullCount, nullBitmap, valueOffsets, data) {
					return new Data2(type, offset, length, nullCount, [
						buffer_1.toInt32Array(valueOffsets),
						buffer_1.toUint8Array(data),
						buffer_1.toUint8Array(nullBitmap)
					]);
				}
				static List(type, offset, length, nullCount, nullBitmap, valueOffsets, child) {
					return new Data2(
						type,
						offset,
						length,
						nullCount,
						[buffer_1.toInt32Array(valueOffsets), void 0, buffer_1.toUint8Array(nullBitmap)],
						child ? [child] : []
					);
				}
				static FixedSizeList(type, offset, length, nullCount, nullBitmap, child) {
					return new Data2(
						type,
						offset,
						length,
						nullCount,
						[void 0, void 0, buffer_1.toUint8Array(nullBitmap)],
						child ? [child] : []
					);
				}
				static Struct(type, offset, length, nullCount, nullBitmap, children) {
					return new Data2(
						type,
						offset,
						length,
						nullCount,
						[void 0, void 0, buffer_1.toUint8Array(nullBitmap)],
						children
					);
				}
				static Map(type, offset, length, nullCount, nullBitmap, valueOffsets, child) {
					return new Data2(
						type,
						offset,
						length,
						nullCount,
						[buffer_1.toInt32Array(valueOffsets), void 0, buffer_1.toUint8Array(nullBitmap)],
						child ? [child] : []
					);
				}
				static Union(
					type,
					offset,
					length,
					nullCount,
					nullBitmap,
					typeIds,
					valueOffsetsOrChildren,
					children
				) {
					const buffers = [
						void 0,
						void 0,
						buffer_1.toUint8Array(nullBitmap),
						buffer_1.toArrayBufferView(type.ArrayType, typeIds)
					];
					if (type.mode === enum_1.UnionMode.Sparse) {
						return new Data2(type, offset, length, nullCount, buffers, valueOffsetsOrChildren);
					}
					buffers[enum_1.BufferType.OFFSET] = buffer_1.toInt32Array(valueOffsetsOrChildren);
					return new Data2(type, offset, length, nullCount, buffers, children);
				}
			};
			exports.Data = Data2;
			Data2.prototype.childData = Object.freeze([]);
		}
	});

	// ../../node_modules/apache-arrow/util/pretty.js
	var require_pretty = __commonJS({
		'../../node_modules/apache-arrow/util/pretty.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.valueToString = void 0;
			var undf = void 0;
			function valueToString(x) {
				if (x === null) {
					return 'null';
				}
				if (x === undf) {
					return 'undefined';
				}
				switch (typeof x) {
					case 'number':
						return `${x}`;
					case 'bigint':
						return `${x}`;
					case 'string':
						return `"${x}"`;
				}
				if (typeof x[Symbol.toPrimitive] === 'function') {
					return x[Symbol.toPrimitive]('string');
				}
				return ArrayBuffer.isView(x) ? `[${x}]` : JSON.stringify(x);
			}
			exports.valueToString = valueToString;
		}
	});

	// ../../node_modules/apache-arrow/builder/valid.js
	var require_valid = __commonJS({
		'../../node_modules/apache-arrow/builder/valid.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.createIsValidFunction = void 0;
			var pretty_1 = require_pretty();
			var compat_1 = require_compat();
			function createIsValidFunction(nullValues) {
				if (!nullValues || nullValues.length <= 0) {
					return function isValid(value) {
						return true;
					};
				}
				let fnBody = '';
				const noNaNs = nullValues.filter((x) => x === x);
				if (noNaNs.length > 0) {
					fnBody = `
    switch (x) {${noNaNs
			.map(
				(x) => `
        case ${valueToCase(x)}:`
			)
			.join('')}
            return false;
    }`;
				}
				if (nullValues.length !== noNaNs.length) {
					fnBody = `if (x !== x) return false;
${fnBody}`;
				}
				return new Function(
					`x`,
					`${fnBody}
return true;`
				);
			}
			exports.createIsValidFunction = createIsValidFunction;
			function valueToCase(x) {
				if (typeof x !== 'bigint') {
					return pretty_1.valueToString(x);
				} else if (compat_1.BigIntAvailable) {
					return `${pretty_1.valueToString(x)}n`;
				}
				return `"${pretty_1.valueToString(x)}"`;
			}
		}
	});

	// ../../node_modules/apache-arrow/builder/buffer.js
	var require_buffer2 = __commonJS({
		'../../node_modules/apache-arrow/builder/buffer.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.WideBufferBuilder =
				exports.OffsetsBufferBuilder =
				exports.BitmapBufferBuilder =
				exports.DataBufferBuilder =
				exports.BufferBuilder =
					void 0;
			var buffer_1 = require_buffer();
			var compat_1 = require_compat();
			var roundLengthUpToNearest64Bytes = (len, BPE) => ((len * BPE + 63) & ~63 || 64) / BPE;
			var sliceOrExtendArray = (arr, len = 0) =>
				arr.length >= len
					? arr.subarray(0, len)
					: buffer_1.memcpy(new arr.constructor(len), arr, 0);
			var BufferBuilder = class {
				constructor(buffer, stride = 1) {
					this.buffer = buffer;
					this.stride = stride;
					this.BYTES_PER_ELEMENT = buffer.BYTES_PER_ELEMENT;
					this.ArrayType = buffer.constructor;
					this._resize((this.length = (buffer.length / stride) | 0));
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
				set(index, value) {
					return this;
				}
				append(value) {
					return this.set(this.length, value);
				}
				reserve(extra) {
					if (extra > 0) {
						this.length += extra;
						const stride = this.stride;
						const length = this.length * stride;
						const reserved = this.buffer.length;
						if (length >= reserved) {
							this._resize(
								reserved === 0
									? roundLengthUpToNearest64Bytes(length * 1, this.BYTES_PER_ELEMENT)
									: roundLengthUpToNearest64Bytes(length * 2, this.BYTES_PER_ELEMENT)
							);
						}
					}
					return this;
				}
				flush(length = this.length) {
					length = roundLengthUpToNearest64Bytes(length * this.stride, this.BYTES_PER_ELEMENT);
					const array = sliceOrExtendArray(this.buffer, length);
					this.clear();
					return array;
				}
				clear() {
					this.length = 0;
					this._resize(0);
					return this;
				}
				_resize(newLength) {
					return (this.buffer = buffer_1.memcpy(new this.ArrayType(newLength), this.buffer));
				}
			};
			exports.BufferBuilder = BufferBuilder;
			BufferBuilder.prototype.offset = 0;
			var DataBufferBuilder = class extends BufferBuilder {
				last() {
					return this.get(this.length - 1);
				}
				get(index) {
					return this.buffer[index];
				}
				set(index, value) {
					this.reserve(index - this.length + 1);
					this.buffer[index * this.stride] = value;
					return this;
				}
			};
			exports.DataBufferBuilder = DataBufferBuilder;
			var BitmapBufferBuilder = class extends DataBufferBuilder {
				constructor(data = new Uint8Array(0)) {
					super(data, 1 / 8);
					this.numValid = 0;
				}
				get numInvalid() {
					return this.length - this.numValid;
				}
				get(idx) {
					return (this.buffer[idx >> 3] >> idx % 8) & 1;
				}
				set(idx, val) {
					const { buffer } = this.reserve(idx - this.length + 1);
					const byte = idx >> 3,
						bit = idx % 8,
						cur = (buffer[byte] >> bit) & 1;
					val
						? cur === 0 && ((buffer[byte] |= 1 << bit), ++this.numValid)
						: cur === 1 && ((buffer[byte] &= ~(1 << bit)), --this.numValid);
					return this;
				}
				clear() {
					this.numValid = 0;
					return super.clear();
				}
			};
			exports.BitmapBufferBuilder = BitmapBufferBuilder;
			var OffsetsBufferBuilder = class extends DataBufferBuilder {
				constructor(data = new Int32Array(1)) {
					super(data, 1);
				}
				append(value) {
					return this.set(this.length - 1, value);
				}
				set(index, value) {
					const offset = this.length - 1;
					const buffer = this.reserve(index - offset + 1).buffer;
					if (offset < index++) {
						buffer.fill(buffer[offset], offset, index);
					}
					buffer[index] = buffer[index - 1] + value;
					return this;
				}
				flush(length = this.length - 1) {
					if (length > this.length) {
						this.set(length - 1, 0);
					}
					return super.flush(length + 1);
				}
			};
			exports.OffsetsBufferBuilder = OffsetsBufferBuilder;
			var WideBufferBuilder = class extends BufferBuilder {
				get ArrayType64() {
					return (
						this._ArrayType64 ||
						(this._ArrayType64 =
							this.buffer instanceof Int32Array ? compat_1.BigInt64Array : compat_1.BigUint64Array)
					);
				}
				set(index, value) {
					this.reserve(index - this.length + 1);
					switch (typeof value) {
						case 'bigint':
							this.buffer64[index] = value;
							break;
						case 'number':
							this.buffer[index * this.stride] = value;
							break;
						default:
							this.buffer.set(value, index * this.stride);
					}
					return this;
				}
				_resize(newLength) {
					const data = super._resize(newLength);
					const length = data.byteLength / (this.BYTES_PER_ELEMENT * this.stride);
					if (compat_1.BigIntAvailable) {
						this.buffer64 = new this.ArrayType64(data.buffer, data.byteOffset, length);
					}
					return data;
				}
			};
			exports.WideBufferBuilder = WideBufferBuilder;
		}
	});

	// ../../node_modules/apache-arrow/builder.js
	var require_builder = __commonJS({
		'../../node_modules/apache-arrow/builder.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.VariableWidthBuilder = exports.FixedWidthBuilder = exports.Builder = void 0;
			var tslib_1 = require_tslib();
			var vector_1 = require_vector();
			var enum_1 = require_enum();
			var data_1 = require_data();
			var valid_1 = require_valid();
			var buffer_1 = require_buffer2();
			var type_1 = require_type();
			var Builder3 = class {
				constructor({ type: type, nullValues: nulls }) {
					this.length = 0;
					this.finished = false;
					this.type = type;
					this.children = [];
					this.nullValues = nulls;
					this.stride = type_1.strideForType(type);
					this._nulls = new buffer_1.BitmapBufferBuilder();
					if (nulls && nulls.length > 0) {
						this._isValid = valid_1.createIsValidFunction(nulls);
					}
				}
				static new(options) {}
				static throughNode(options) {
					throw new Error(`"throughNode" not available in this environment`);
				}
				static throughDOM(options) {
					throw new Error(`"throughDOM" not available in this environment`);
				}
				static throughIterable(options) {
					return throughIterable(options);
				}
				static throughAsyncIterable(options) {
					return throughAsyncIterable(options);
				}
				toVector() {
					return vector_1.Vector.new(this.flush());
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
					let size = 0;
					this._offsets && (size += this._offsets.byteLength);
					this._values && (size += this._values.byteLength);
					this._nulls && (size += this._nulls.byteLength);
					this._typeIds && (size += this._typeIds.byteLength);
					return this.children.reduce((size2, child) => size2 + child.byteLength, size);
				}
				get reservedLength() {
					return this._nulls.reservedLength;
				}
				get reservedByteLength() {
					let size = 0;
					this._offsets && (size += this._offsets.reservedByteLength);
					this._values && (size += this._values.reservedByteLength);
					this._nulls && (size += this._nulls.reservedByteLength);
					this._typeIds && (size += this._typeIds.reservedByteLength);
					return this.children.reduce((size2, child) => size2 + child.reservedByteLength, size);
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
				append(value) {
					return this.set(this.length, value);
				}
				isValid(value) {
					return this._isValid(value);
				}
				set(index, value) {
					if (this.setValid(index, this.isValid(value))) {
						this.setValue(index, value);
					}
					return this;
				}
				setValue(index, value) {
					this._setValue(this, index, value);
				}
				setValid(index, valid) {
					this.length = this._nulls.set(index, +valid).length;
					return valid;
				}
				addChild(child, name = `${this.numChildren}`) {
					throw new Error(`Cannot append children to non-nested type "${this.type}"`);
				}
				getChildAt(index) {
					return this.children[index] || null;
				}
				flush() {
					const buffers = [];
					const values = this._values;
					const offsets = this._offsets;
					const typeIds = this._typeIds;
					const { length, nullCount } = this;
					if (typeIds) {
						buffers[enum_1.BufferType.TYPE] = typeIds.flush(length);
						offsets && (buffers[enum_1.BufferType.OFFSET] = offsets.flush(length));
					} else if (offsets) {
						values && (buffers[enum_1.BufferType.DATA] = values.flush(offsets.last()));
						buffers[enum_1.BufferType.OFFSET] = offsets.flush(length);
					} else if (values) {
						buffers[enum_1.BufferType.DATA] = values.flush(length);
					}
					nullCount > 0 && (buffers[enum_1.BufferType.VALIDITY] = this._nulls.flush(length));
					const data = data_1.Data.new(
						this.type,
						0,
						length,
						nullCount,
						buffers,
						this.children.map((child) => child.flush())
					);
					this.clear();
					return data;
				}
				finish() {
					this.finished = true;
					this.children.forEach((child) => child.finish());
					return this;
				}
				clear() {
					this.length = 0;
					this._offsets && this._offsets.clear();
					this._values && this._values.clear();
					this._nulls && this._nulls.clear();
					this._typeIds && this._typeIds.clear();
					this.children.forEach((child) => child.clear());
					return this;
				}
			};
			exports.Builder = Builder3;
			Builder3.prototype.length = 1;
			Builder3.prototype.stride = 1;
			Builder3.prototype.children = null;
			Builder3.prototype.finished = false;
			Builder3.prototype.nullValues = null;
			Builder3.prototype._isValid = () => true;
			var FixedWidthBuilder = class extends Builder3 {
				constructor(opts) {
					super(opts);
					this._values = new buffer_1.DataBufferBuilder(new this.ArrayType(0), this.stride);
				}
				setValue(index, value) {
					const values = this._values;
					values.reserve(index - values.length + 1);
					return super.setValue(index, value);
				}
			};
			exports.FixedWidthBuilder = FixedWidthBuilder;
			var VariableWidthBuilder = class extends Builder3 {
				constructor(opts) {
					super(opts);
					this._pendingLength = 0;
					this._offsets = new buffer_1.OffsetsBufferBuilder();
				}
				setValue(index, value) {
					const pending = this._pending || (this._pending = /* @__PURE__ */ new Map());
					const current = pending.get(index);
					current && (this._pendingLength -= current.length);
					this._pendingLength += value.length;
					pending.set(index, value);
				}
				setValid(index, isValid) {
					if (!super.setValid(index, isValid)) {
						(this._pending || (this._pending = /* @__PURE__ */ new Map())).set(index, void 0);
						return false;
					}
					return true;
				}
				clear() {
					this._pendingLength = 0;
					this._pending = void 0;
					return super.clear();
				}
				flush() {
					this._flush();
					return super.flush();
				}
				finish() {
					this._flush();
					return super.finish();
				}
				_flush() {
					const pending = this._pending;
					const pendingLength = this._pendingLength;
					this._pendingLength = 0;
					this._pending = void 0;
					if (pending && pending.size > 0) {
						this._flushPending(pending, pendingLength);
					}
					return this;
				}
			};
			exports.VariableWidthBuilder = VariableWidthBuilder;
			function throughIterable(options) {
				const { ['queueingStrategy']: queueingStrategy = 'count' } = options;
				const {
					['highWaterMark']: highWaterMark = queueingStrategy !== 'bytes' ? 1e3 : Math.pow(2, 14)
				} = options;
				const sizeProperty = queueingStrategy !== 'bytes' ? 'length' : 'byteLength';
				return function* (source) {
					let numChunks = 0;
					const builder = Builder3.new(options);
					for (const value of source) {
						if (builder.append(value)[sizeProperty] >= highWaterMark) {
							++numChunks && (yield builder.toVector());
						}
					}
					if (builder.finish().length > 0 || numChunks === 0) {
						yield builder.toVector();
					}
				};
			}
			function throughAsyncIterable(options) {
				const { ['queueingStrategy']: queueingStrategy = 'count' } = options;
				const {
					['highWaterMark']: highWaterMark = queueingStrategy !== 'bytes' ? 1e3 : Math.pow(2, 14)
				} = options;
				const sizeProperty = queueingStrategy !== 'bytes' ? 'length' : 'byteLength';
				return function (source) {
					return tslib_1.__asyncGenerator(this, arguments, function* () {
						var e_1, _a;
						let numChunks = 0;
						const builder = Builder3.new(options);
						try {
							for (
								var source_1 = tslib_1.__asyncValues(source), source_1_1;
								(source_1_1 = yield tslib_1.__await(source_1.next())), !source_1_1.done;

							) {
								const value = source_1_1.value;
								if (builder.append(value)[sizeProperty] >= highWaterMark) {
									++numChunks && (yield yield tslib_1.__await(builder.toVector()));
								}
							}
						} catch (e_1_1) {
							e_1 = { error: e_1_1 };
						} finally {
							try {
								if (source_1_1 && !source_1_1.done && (_a = source_1.return))
									yield tslib_1.__await(_a.call(source_1));
							} finally {
								if (e_1) throw e_1.error;
							}
						}
						if (builder.finish().length > 0 || numChunks === 0) {
							yield yield tslib_1.__await(builder.toVector());
						}
					});
				};
			}
		}
	});

	// ../../node_modules/apache-arrow/builder/bool.js
	var require_bool = __commonJS({
		'../../node_modules/apache-arrow/builder/bool.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.BoolBuilder = void 0;
			var buffer_1 = require_buffer2();
			var builder_1 = require_builder();
			var BoolBuilder2 = class extends builder_1.Builder {
				constructor(options) {
					super(options);
					this._values = new buffer_1.BitmapBufferBuilder();
				}
				setValue(index, value) {
					this._values.set(index, +value);
				}
			};
			exports.BoolBuilder = BoolBuilder2;
		}
	});

	// ../../node_modules/apache-arrow/builder/null.js
	var require_null = __commonJS({
		'../../node_modules/apache-arrow/builder/null.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.NullBuilder = void 0;
			var builder_1 = require_builder();
			var NullBuilder2 = class extends builder_1.Builder {
				setValue(index, value) {}
				setValid(index, valid) {
					this.length = Math.max(index + 1, this.length);
					return valid;
				}
			};
			exports.NullBuilder = NullBuilder2;
		}
	});

	// ../../node_modules/apache-arrow/builder/date.js
	var require_date = __commonJS({
		'../../node_modules/apache-arrow/builder/date.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.DateMillisecondBuilder = exports.DateDayBuilder = exports.DateBuilder = void 0;
			var builder_1 = require_builder();
			var DateBuilder2 = class extends builder_1.FixedWidthBuilder {};
			exports.DateBuilder = DateBuilder2;
			var DateDayBuilder2 = class extends DateBuilder2 {};
			exports.DateDayBuilder = DateDayBuilder2;
			var DateMillisecondBuilder2 = class extends DateBuilder2 {};
			exports.DateMillisecondBuilder = DateMillisecondBuilder2;
		}
	});

	// ../../node_modules/apache-arrow/builder/decimal.js
	var require_decimal = __commonJS({
		'../../node_modules/apache-arrow/builder/decimal.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.DecimalBuilder = void 0;
			var builder_1 = require_builder();
			var DecimalBuilder2 = class extends builder_1.FixedWidthBuilder {};
			exports.DecimalBuilder = DecimalBuilder2;
		}
	});

	// ../../node_modules/apache-arrow/builder/dictionary.js
	var require_dictionary = __commonJS({
		'../../node_modules/apache-arrow/builder/dictionary.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.DictionaryBuilder = void 0;
			var type_1 = require_type();
			var builder_1 = require_builder();
			var DictionaryBuilder2 = class extends builder_1.Builder {
				constructor({ type: type, nullValues: nulls, dictionaryHashFunction: hashFn }) {
					super({
						type: new type_1.Dictionary(type.dictionary, type.indices, type.id, type.isOrdered)
					});
					this._nulls = null;
					this._dictionaryOffset = 0;
					this._keysToIndices = Object.create(null);
					this.indices = builder_1.Builder.new({ type: this.type.indices, nullValues: nulls });
					this.dictionary = builder_1.Builder.new({ type: this.type.dictionary, nullValues: null });
					if (typeof hashFn === 'function') {
						this.valueToKey = hashFn;
					}
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
				isValid(value) {
					return this.indices.isValid(value);
				}
				setValid(index, valid) {
					const indices = this.indices;
					valid = indices.setValid(index, valid);
					this.length = indices.length;
					return valid;
				}
				setValue(index, value) {
					const keysToIndices = this._keysToIndices;
					const key = this.valueToKey(value);
					let idx = keysToIndices[key];
					if (idx === void 0) {
						keysToIndices[key] = idx =
							this._dictionaryOffset + this.dictionary.append(value).length - 1;
					}
					return this.indices.setValue(index, idx);
				}
				flush() {
					const type = this.type;
					const prev = this._dictionary;
					const curr = this.dictionary.toVector();
					const data = this.indices.flush().clone(type);
					data.dictionary = prev ? prev.concat(curr) : curr;
					this.finished || (this._dictionaryOffset += curr.length);
					this._dictionary = data.dictionary;
					this.clear();
					return data;
				}
				finish() {
					this.indices.finish();
					this.dictionary.finish();
					this._dictionaryOffset = 0;
					this._keysToIndices = Object.create(null);
					return super.finish();
				}
				clear() {
					this.indices.clear();
					this.dictionary.clear();
					return super.clear();
				}
				valueToKey(val) {
					return typeof val === 'string' ? val : `${val}`;
				}
			};
			exports.DictionaryBuilder = DictionaryBuilder2;
		}
	});

	// ../../node_modules/apache-arrow/builder/fixedsizebinary.js
	var require_fixedsizebinary = __commonJS({
		'../../node_modules/apache-arrow/builder/fixedsizebinary.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.FixedSizeBinaryBuilder = void 0;
			var builder_1 = require_builder();
			var FixedSizeBinaryBuilder2 = class extends builder_1.FixedWidthBuilder {};
			exports.FixedSizeBinaryBuilder = FixedSizeBinaryBuilder2;
		}
	});

	// ../../node_modules/apache-arrow/util/math.js
	var require_math = __commonJS({
		'../../node_modules/apache-arrow/util/math.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.float64ToUint16 = exports.uint16ToFloat64 = void 0;
			var f64 = new Float64Array(1);
			var u32 = new Uint32Array(f64.buffer);
			function uint16ToFloat64(h) {
				const expo = (h & 31744) >> 10;
				const sigf = (h & 1023) / 1024;
				const sign = Math.pow(-1, (h & 32768) >> 15);
				switch (expo) {
					case 31:
						return sign * (sigf ? NaN : 1 / 0);
					case 0:
						return sign * (sigf ? 6103515625e-14 * sigf : 0);
				}
				return sign * Math.pow(2, expo - 15) * (1 + sigf);
			}
			exports.uint16ToFloat64 = uint16ToFloat64;
			function float64ToUint16(d) {
				if (d !== d) {
					return 32256;
				}
				f64[0] = d;
				const sign = ((u32[1] & 2147483648) >> 16) & 65535;
				let expo = u32[1] & 2146435072,
					sigf = 0;
				if (expo >= 1089470464) {
					if (u32[0] > 0) {
						expo = 31744;
					} else {
						expo = (expo & 2080374784) >> 16;
						sigf = (u32[1] & 1048575) >> 10;
					}
				} else if (expo <= 1056964608) {
					sigf = 1048576 + (u32[1] & 1048575);
					sigf = (1048576 + (sigf << ((expo >> 20) - 998))) >> 21;
					expo = 0;
				} else {
					expo = (expo - 1056964608) >> 10;
					sigf = ((u32[1] & 1048575) + 512) >> 10;
				}
				return sign | expo | (sigf & 65535);
			}
			exports.float64ToUint16 = float64ToUint16;
		}
	});

	// ../../node_modules/apache-arrow/builder/float.js
	var require_float = __commonJS({
		'../../node_modules/apache-arrow/builder/float.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Float64Builder =
				exports.Float32Builder =
				exports.Float16Builder =
				exports.FloatBuilder =
					void 0;
			var math_1 = require_math();
			var builder_1 = require_builder();
			var FloatBuilder2 = class extends builder_1.FixedWidthBuilder {};
			exports.FloatBuilder = FloatBuilder2;
			var Float16Builder2 = class extends FloatBuilder2 {
				setValue(index, value) {
					this._values.set(index, math_1.float64ToUint16(value));
				}
			};
			exports.Float16Builder = Float16Builder2;
			var Float32Builder2 = class extends FloatBuilder2 {
				setValue(index, value) {
					this._values.set(index, value);
				}
			};
			exports.Float32Builder = Float32Builder2;
			var Float64Builder2 = class extends FloatBuilder2 {
				setValue(index, value) {
					this._values.set(index, value);
				}
			};
			exports.Float64Builder = Float64Builder2;
		}
	});

	// ../../node_modules/apache-arrow/util/bn.js
	var require_bn = __commonJS({
		'../../node_modules/apache-arrow/util/bn.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.BN =
				exports.bignumToBigInt =
				exports.bignumToString =
				exports.isArrowBigNumSymbol =
					void 0;
			var buffer_1 = require_buffer();
			var compat_1 = require_compat();
			exports.isArrowBigNumSymbol = Symbol.for('isArrowBigNum');
			function BigNum(x, ...xs) {
				if (xs.length === 0) {
					return Object.setPrototypeOf(
						buffer_1.toArrayBufferView(this['TypedArray'], x),
						this.constructor.prototype
					);
				}
				return Object.setPrototypeOf(new this['TypedArray'](x, ...xs), this.constructor.prototype);
			}
			BigNum.prototype[exports.isArrowBigNumSymbol] = true;
			BigNum.prototype.toJSON = function () {
				return `"${exports.bignumToString(this)}"`;
			};
			BigNum.prototype.valueOf = function () {
				return bignumToNumber(this);
			};
			BigNum.prototype.toString = function () {
				return exports.bignumToString(this);
			};
			BigNum.prototype[Symbol.toPrimitive] = function (hint = 'default') {
				switch (hint) {
					case 'number':
						return bignumToNumber(this);
					case 'string':
						return exports.bignumToString(this);
					case 'default':
						return exports.bignumToBigInt(this);
				}
				return exports.bignumToString(this);
			};
			function SignedBigNum(...args) {
				return BigNum.apply(this, args);
			}
			function UnsignedBigNum(...args) {
				return BigNum.apply(this, args);
			}
			function DecimalBigNum(...args) {
				return BigNum.apply(this, args);
			}
			Object.setPrototypeOf(SignedBigNum.prototype, Object.create(Int32Array.prototype));
			Object.setPrototypeOf(UnsignedBigNum.prototype, Object.create(Uint32Array.prototype));
			Object.setPrototypeOf(DecimalBigNum.prototype, Object.create(Uint32Array.prototype));
			Object.assign(SignedBigNum.prototype, BigNum.prototype, {
				constructor: SignedBigNum,
				signed: true,
				TypedArray: Int32Array,
				BigIntArray: compat_1.BigInt64Array
			});
			Object.assign(UnsignedBigNum.prototype, BigNum.prototype, {
				constructor: UnsignedBigNum,
				signed: false,
				TypedArray: Uint32Array,
				BigIntArray: compat_1.BigUint64Array
			});
			Object.assign(DecimalBigNum.prototype, BigNum.prototype, {
				constructor: DecimalBigNum,
				signed: true,
				TypedArray: Uint32Array,
				BigIntArray: compat_1.BigUint64Array
			});
			function bignumToNumber(bn) {
				const { buffer, byteOffset, length, signed: signed } = bn;
				const words = new Int32Array(buffer, byteOffset, length);
				let number = 0,
					i = 0;
				const n = words.length;
				let hi, lo;
				while (i < n) {
					lo = words[i++];
					hi = words[i++];
					signed || (hi = hi >>> 0);
					number += (lo >>> 0) + hi * Math.pow(i, 32);
				}
				return number;
			}
			if (!compat_1.BigIntAvailable) {
				exports.bignumToString = decimalToString;
				exports.bignumToBigInt = exports.bignumToString;
			} else {
				exports.bignumToBigInt = (a) =>
					a.byteLength === 8
						? new a['BigIntArray'](a.buffer, a.byteOffset, 1)[0]
						: decimalToString(a);
				exports.bignumToString = (a) =>
					a.byteLength === 8
						? `${new a['BigIntArray'](a.buffer, a.byteOffset, 1)[0]}`
						: decimalToString(a);
			}
			function decimalToString(a) {
				let digits = '';
				const base64 = new Uint32Array(2);
				let base32 = new Uint16Array(a.buffer, a.byteOffset, a.byteLength / 2);
				const checks = new Uint32Array((base32 = new Uint16Array(base32).reverse()).buffer);
				let i = -1;
				const n = base32.length - 1;
				do {
					for (base64[0] = base32[(i = 0)]; i < n; ) {
						base32[i++] = base64[1] = base64[0] / 10;
						base64[0] = ((base64[0] - base64[1] * 10) << 16) + base32[i];
					}
					base32[i] = base64[1] = base64[0] / 10;
					base64[0] = base64[0] - base64[1] * 10;
					digits = `${base64[0]}${digits}`;
				} while (checks[0] || checks[1] || checks[2] || checks[3]);
				return digits ? digits : `0`;
			}
			var BN = class {
				static new(num, isSigned) {
					switch (isSigned) {
						case true:
							return new SignedBigNum(num);
						case false:
							return new UnsignedBigNum(num);
					}
					switch (num.constructor) {
						case Int8Array:
						case Int16Array:
						case Int32Array:
						case compat_1.BigInt64Array:
							return new SignedBigNum(num);
					}
					if (num.byteLength === 16) {
						return new DecimalBigNum(num);
					}
					return new UnsignedBigNum(num);
				}
				static signed(num) {
					return new SignedBigNum(num);
				}
				static unsigned(num) {
					return new UnsignedBigNum(num);
				}
				static decimal(num) {
					return new DecimalBigNum(num);
				}
				constructor(num, isSigned) {
					return BN.new(num, isSigned);
				}
			};
			exports.BN = BN;
		}
	});

	// ../../node_modules/apache-arrow/builder/int.js
	var require_int = __commonJS({
		'../../node_modules/apache-arrow/builder/int.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Uint64Builder =
				exports.Uint32Builder =
				exports.Uint16Builder =
				exports.Uint8Builder =
				exports.Int64Builder =
				exports.Int32Builder =
				exports.Int16Builder =
				exports.Int8Builder =
				exports.IntBuilder =
					void 0;
			var bn_1 = require_bn();
			var buffer_1 = require_buffer2();
			var compat_1 = require_compat();
			var builder_1 = require_builder();
			var IntBuilder2 = class extends builder_1.FixedWidthBuilder {
				setValue(index, value) {
					this._values.set(index, value);
				}
			};
			exports.IntBuilder = IntBuilder2;
			var Int8Builder2 = class extends IntBuilder2 {};
			exports.Int8Builder = Int8Builder2;
			var Int16Builder2 = class extends IntBuilder2 {};
			exports.Int16Builder = Int16Builder2;
			var Int32Builder2 = class extends IntBuilder2 {};
			exports.Int32Builder = Int32Builder2;
			var Int64Builder2 = class extends IntBuilder2 {
				constructor(options) {
					if (options['nullValues']) {
						options['nullValues'] = options['nullValues'].map(toBigInt);
					}
					super(options);
					this._values = new buffer_1.WideBufferBuilder(new Int32Array(0), 2);
				}
				get values64() {
					return this._values.buffer64;
				}
				isValid(value) {
					return super.isValid(toBigInt(value));
				}
			};
			exports.Int64Builder = Int64Builder2;
			var Uint8Builder2 = class extends IntBuilder2 {};
			exports.Uint8Builder = Uint8Builder2;
			var Uint16Builder2 = class extends IntBuilder2 {};
			exports.Uint16Builder = Uint16Builder2;
			var Uint32Builder2 = class extends IntBuilder2 {};
			exports.Uint32Builder = Uint32Builder2;
			var Uint64Builder2 = class extends IntBuilder2 {
				constructor(options) {
					if (options['nullValues']) {
						options['nullValues'] = options['nullValues'].map(toBigInt);
					}
					super(options);
					this._values = new buffer_1.WideBufferBuilder(new Uint32Array(0), 2);
				}
				get values64() {
					return this._values.buffer64;
				}
				isValid(value) {
					return super.isValid(toBigInt(value));
				}
			};
			exports.Uint64Builder = Uint64Builder2;
			var toBigInt = ((memo) => (value) => {
				if (ArrayBuffer.isView(value)) {
					memo.buffer = value.buffer;
					memo.byteOffset = value.byteOffset;
					memo.byteLength = value.byteLength;
					value = bn_1.bignumToBigInt(memo);
					memo.buffer = null;
				}
				return value;
			})({ BigIntArray: compat_1.BigInt64Array });
		}
	});

	// ../../node_modules/apache-arrow/builder/time.js
	var require_time = __commonJS({
		'../../node_modules/apache-arrow/builder/time.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.TimeNanosecondBuilder =
				exports.TimeMicrosecondBuilder =
				exports.TimeMillisecondBuilder =
				exports.TimeSecondBuilder =
				exports.TimeBuilder =
					void 0;
			var builder_1 = require_builder();
			var TimeBuilder2 = class extends builder_1.FixedWidthBuilder {};
			exports.TimeBuilder = TimeBuilder2;
			var TimeSecondBuilder2 = class extends TimeBuilder2 {};
			exports.TimeSecondBuilder = TimeSecondBuilder2;
			var TimeMillisecondBuilder2 = class extends TimeBuilder2 {};
			exports.TimeMillisecondBuilder = TimeMillisecondBuilder2;
			var TimeMicrosecondBuilder2 = class extends TimeBuilder2 {};
			exports.TimeMicrosecondBuilder = TimeMicrosecondBuilder2;
			var TimeNanosecondBuilder2 = class extends TimeBuilder2 {};
			exports.TimeNanosecondBuilder = TimeNanosecondBuilder2;
		}
	});

	// ../../node_modules/apache-arrow/builder/timestamp.js
	var require_timestamp = __commonJS({
		'../../node_modules/apache-arrow/builder/timestamp.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.TimestampNanosecondBuilder =
				exports.TimestampMicrosecondBuilder =
				exports.TimestampMillisecondBuilder =
				exports.TimestampSecondBuilder =
				exports.TimestampBuilder =
					void 0;
			var builder_1 = require_builder();
			var TimestampBuilder2 = class extends builder_1.FixedWidthBuilder {};
			exports.TimestampBuilder = TimestampBuilder2;
			var TimestampSecondBuilder2 = class extends TimestampBuilder2 {};
			exports.TimestampSecondBuilder = TimestampSecondBuilder2;
			var TimestampMillisecondBuilder2 = class extends TimestampBuilder2 {};
			exports.TimestampMillisecondBuilder = TimestampMillisecondBuilder2;
			var TimestampMicrosecondBuilder2 = class extends TimestampBuilder2 {};
			exports.TimestampMicrosecondBuilder = TimestampMicrosecondBuilder2;
			var TimestampNanosecondBuilder2 = class extends TimestampBuilder2 {};
			exports.TimestampNanosecondBuilder = TimestampNanosecondBuilder2;
		}
	});

	// ../../node_modules/apache-arrow/builder/interval.js
	var require_interval = __commonJS({
		'../../node_modules/apache-arrow/builder/interval.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.IntervalYearMonthBuilder =
				exports.IntervalDayTimeBuilder =
				exports.IntervalBuilder =
					void 0;
			var builder_1 = require_builder();
			var IntervalBuilder2 = class extends builder_1.FixedWidthBuilder {};
			exports.IntervalBuilder = IntervalBuilder2;
			var IntervalDayTimeBuilder2 = class extends IntervalBuilder2 {};
			exports.IntervalDayTimeBuilder = IntervalDayTimeBuilder2;
			var IntervalYearMonthBuilder2 = class extends IntervalBuilder2 {};
			exports.IntervalYearMonthBuilder = IntervalYearMonthBuilder2;
		}
	});

	// ../../node_modules/apache-arrow/builder/binary.js
	var require_binary = __commonJS({
		'../../node_modules/apache-arrow/builder/binary.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.BinaryBuilder = void 0;
			var buffer_1 = require_buffer();
			var buffer_2 = require_buffer2();
			var builder_1 = require_builder();
			var BinaryBuilder2 = class extends builder_1.VariableWidthBuilder {
				constructor(opts) {
					super(opts);
					this._values = new buffer_2.BufferBuilder(new Uint8Array(0));
				}
				get byteLength() {
					let size = this._pendingLength + this.length * 4;
					this._offsets && (size += this._offsets.byteLength);
					this._values && (size += this._values.byteLength);
					this._nulls && (size += this._nulls.byteLength);
					return size;
				}
				setValue(index, value) {
					return super.setValue(index, buffer_1.toUint8Array(value));
				}
				_flushPending(pending, pendingLength) {
					const offsets = this._offsets;
					const data = this._values.reserve(pendingLength).buffer;
					let index = 0,
						length = 0,
						offset = 0,
						value;
					for ([index, value] of pending) {
						if (value === void 0) {
							offsets.set(index, 0);
						} else {
							length = value.length;
							data.set(value, offset);
							offsets.set(index, length);
							offset += length;
						}
					}
				}
			};
			exports.BinaryBuilder = BinaryBuilder2;
		}
	});

	// ../../node_modules/apache-arrow/builder/utf8.js
	var require_utf82 = __commonJS({
		'../../node_modules/apache-arrow/builder/utf8.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Utf8Builder = void 0;
			var utf8_1 = require_utf8();
			var binary_1 = require_binary();
			var buffer_1 = require_buffer2();
			var builder_1 = require_builder();
			var Utf8Builder2 = class extends builder_1.VariableWidthBuilder {
				constructor(opts) {
					super(opts);
					this._values = new buffer_1.BufferBuilder(new Uint8Array(0));
				}
				get byteLength() {
					let size = this._pendingLength + this.length * 4;
					this._offsets && (size += this._offsets.byteLength);
					this._values && (size += this._values.byteLength);
					this._nulls && (size += this._nulls.byteLength);
					return size;
				}
				setValue(index, value) {
					return super.setValue(index, utf8_1.encodeUtf8(value));
				}
				_flushPending(pending, pendingLength) {}
			};
			exports.Utf8Builder = Utf8Builder2;
			Utf8Builder2.prototype._flushPending = binary_1.BinaryBuilder.prototype._flushPending;
		}
	});

	// ../../node_modules/apache-arrow/builder/run.js
	var require_run = __commonJS({
		'../../node_modules/apache-arrow/builder/run.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Run = void 0;
			var vector_1 = require_vector();
			var Run = class {
				get length() {
					return this._values.length;
				}
				get(index) {
					return this._values[index];
				}
				clear() {
					this._values = null;
					return this;
				}
				bind(values) {
					if (values instanceof vector_1.Vector) {
						return values;
					}
					this._values = values;
					return this;
				}
			};
			exports.Run = Run;
		}
	});

	// ../../node_modules/apache-arrow/schema.js
	var require_schema = __commonJS({
		'../../node_modules/apache-arrow/schema.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Field = exports.Schema = void 0;
			var type_1 = require_type();
			var Schema2 = class {
				constructor(fields = [], metadata, dictionaries) {
					this.fields = fields || [];
					this.metadata = metadata || /* @__PURE__ */ new Map();
					if (!dictionaries) {
						dictionaries = generateDictionaryMap(fields);
					}
					this.dictionaries = dictionaries;
				}
				get [Symbol.toStringTag]() {
					return 'Schema';
				}
				toString() {
					return `Schema<{ ${this.fields.map((f, i) => `${i}: ${f}`).join(', ')} }>`;
				}
				select(...columnNames) {
					const names = columnNames.reduce((xs, x) => (xs[x] = true) && xs, Object.create(null));
					return new Schema2(
						this.fields.filter((f) => names[f.name]),
						this.metadata
					);
				}
				selectAt(...columnIndices) {
					return new Schema2(
						columnIndices.map((i) => this.fields[i]).filter(Boolean),
						this.metadata
					);
				}
				assign(...args) {
					const other =
						args[0] instanceof Schema2
							? args[0]
							: Array.isArray(args[0])
							? new Schema2(args[0])
							: new Schema2(args);
					const curFields = [...this.fields];
					const metadata = mergeMaps(
						mergeMaps(/* @__PURE__ */ new Map(), this.metadata),
						other.metadata
					);
					const newFields = other.fields.filter((f2) => {
						const i = curFields.findIndex((f) => f.name === f2.name);
						return ~i
							? (curFields[i] = f2.clone({
									metadata: mergeMaps(
										mergeMaps(/* @__PURE__ */ new Map(), curFields[i].metadata),
										f2.metadata
									)
							  })) && false
							: true;
					});
					const newDictionaries = generateDictionaryMap(newFields, /* @__PURE__ */ new Map());
					return new Schema2(
						[...curFields, ...newFields],
						metadata,
						new Map([...this.dictionaries, ...newDictionaries])
					);
				}
			};
			exports.Schema = Schema2;
			var Field2 = class {
				constructor(name, type, nullable = false, metadata) {
					this.name = name;
					this.type = type;
					this.nullable = nullable;
					this.metadata = metadata || /* @__PURE__ */ new Map();
				}
				static new(...args) {
					let [name, type, nullable, metadata] = args;
					if (args[0] && typeof args[0] === 'object') {
						({ name } = args[0]);
						type === void 0 && (type = args[0].type);
						nullable === void 0 && (nullable = args[0].nullable);
						metadata === void 0 && (metadata = args[0].metadata);
					}
					return new Field2(`${name}`, type, nullable, metadata);
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
				clone(...args) {
					let [name, type, nullable, metadata] = args;
					!args[0] || typeof args[0] !== 'object'
						? ([
								name = this.name,
								type = this.type,
								nullable = this.nullable,
								metadata = this.metadata
						  ] = args)
						: ({
								name = this.name,
								type = this.type,
								nullable = this.nullable,
								metadata = this.metadata
						  } = args[0]);
					return Field2.new(name, type, nullable, metadata);
				}
			};
			exports.Field = Field2;
			function mergeMaps(m1, m2) {
				return new Map([
					...(m1 || /* @__PURE__ */ new Map()),
					...(m2 || /* @__PURE__ */ new Map())
				]);
			}
			function generateDictionaryMap(fields, dictionaries = /* @__PURE__ */ new Map()) {
				for (let i = -1, n = fields.length; ++i < n; ) {
					const field = fields[i];
					const type = field.type;
					if (type_1.DataType.isDictionary(type)) {
						if (!dictionaries.has(type.id)) {
							dictionaries.set(type.id, type.dictionary);
						} else if (dictionaries.get(type.id) !== type.dictionary) {
							throw new Error(
								`Cannot create Schema containing two different dictionaries with the same Id`
							);
						}
					}
					if (type.children && type.children.length > 0) {
						generateDictionaryMap(type.children, dictionaries);
					}
				}
				return dictionaries;
			}
			Schema2.prototype.fields = null;
			Schema2.prototype.metadata = null;
			Schema2.prototype.dictionaries = null;
			Field2.prototype.type = null;
			Field2.prototype.name = null;
			Field2.prototype.nullable = null;
			Field2.prototype.metadata = null;
		}
	});

	// ../../node_modules/apache-arrow/builder/list.js
	var require_list = __commonJS({
		'../../node_modules/apache-arrow/builder/list.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.ListBuilder = void 0;
			var run_1 = require_run();
			var schema_1 = require_schema();
			var type_1 = require_type();
			var buffer_1 = require_buffer2();
			var builder_1 = require_builder();
			var ListBuilder2 = class extends builder_1.VariableWidthBuilder {
				constructor(opts) {
					super(opts);
					this._run = new run_1.Run();
					this._offsets = new buffer_1.OffsetsBufferBuilder();
				}
				addChild(child, name = '0') {
					if (this.numChildren > 0) {
						throw new Error('ListBuilder can only have one child.');
					}
					this.children[this.numChildren] = child;
					this.type = new type_1.List(new schema_1.Field(name, child.type, true));
					return this.numChildren - 1;
				}
				clear() {
					this._run.clear();
					return super.clear();
				}
				_flushPending(pending) {
					const run = this._run;
					const offsets = this._offsets;
					const setValue = this._setValue;
					let index = 0,
						value;
					for ([index, value] of pending) {
						if (value === void 0) {
							offsets.set(index, 0);
						} else {
							offsets.set(index, value.length);
							setValue(this, index, run.bind(value));
						}
					}
				}
			};
			exports.ListBuilder = ListBuilder2;
		}
	});

	// ../../node_modules/apache-arrow/builder/fixedsizelist.js
	var require_fixedsizelist = __commonJS({
		'../../node_modules/apache-arrow/builder/fixedsizelist.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.FixedSizeListBuilder = void 0;
			var run_1 = require_run();
			var schema_1 = require_schema();
			var builder_1 = require_builder();
			var type_1 = require_type();
			var FixedSizeListBuilder2 = class extends builder_1.Builder {
				constructor() {
					super(...arguments);
					this._run = new run_1.Run();
				}
				setValue(index, value) {
					super.setValue(index, this._run.bind(value));
				}
				addChild(child, name = '0') {
					if (this.numChildren > 0) {
						throw new Error('FixedSizeListBuilder can only have one child.');
					}
					const childIndex = this.children.push(child);
					this.type = new type_1.FixedSizeList(
						this.type.listSize,
						new schema_1.Field(name, child.type, true)
					);
					return childIndex;
				}
				clear() {
					this._run.clear();
					return super.clear();
				}
			};
			exports.FixedSizeListBuilder = FixedSizeListBuilder2;
		}
	});

	// ../../node_modules/apache-arrow/builder/map.js
	var require_map = __commonJS({
		'../../node_modules/apache-arrow/builder/map.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.MapBuilder = void 0;
			var schema_1 = require_schema();
			var type_1 = require_type();
			var builder_1 = require_builder();
			var MapBuilder2 = class extends builder_1.VariableWidthBuilder {
				set(index, value) {
					return super.set(index, value);
				}
				setValue(index, value) {
					value = value instanceof Map ? value : new Map(Object.entries(value));
					const pending = this._pending || (this._pending = /* @__PURE__ */ new Map());
					const current = pending.get(index);
					current && (this._pendingLength -= current.size);
					this._pendingLength += value.size;
					pending.set(index, value);
				}
				addChild(child, name = `${this.numChildren}`) {
					if (this.numChildren > 0) {
						throw new Error('ListBuilder can only have one child.');
					}
					this.children[this.numChildren] = child;
					this.type = new type_1.Map_(
						new schema_1.Field(name, child.type, true),
						this.type.keysSorted
					);
					return this.numChildren - 1;
				}
				_flushPending(pending) {
					const offsets = this._offsets;
					const setValue = this._setValue;
					pending.forEach((value, index) => {
						if (value === void 0) {
							offsets.set(index, 0);
						} else {
							offsets.set(index, value.size);
							setValue(this, index, value);
						}
					});
				}
			};
			exports.MapBuilder = MapBuilder2;
		}
	});

	// ../../node_modules/apache-arrow/builder/struct.js
	var require_struct = __commonJS({
		'../../node_modules/apache-arrow/builder/struct.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.StructBuilder = void 0;
			var schema_1 = require_schema();
			var builder_1 = require_builder();
			var type_1 = require_type();
			var StructBuilder2 = class extends builder_1.Builder {
				addChild(child, name = `${this.numChildren}`) {
					const childIndex = this.children.push(child);
					this.type = new type_1.Struct([
						...this.type.children,
						new schema_1.Field(name, child.type, true)
					]);
					return childIndex;
				}
			};
			exports.StructBuilder = StructBuilder2;
		}
	});

	// ../../node_modules/apache-arrow/builder/union.js
	var require_union = __commonJS({
		'../../node_modules/apache-arrow/builder/union.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.DenseUnionBuilder = exports.SparseUnionBuilder = exports.UnionBuilder = void 0;
			var schema_1 = require_schema();
			var buffer_1 = require_buffer2();
			var builder_1 = require_builder();
			var type_1 = require_type();
			var UnionBuilder2 = class extends builder_1.Builder {
				constructor(options) {
					super(options);
					this._typeIds = new buffer_1.DataBufferBuilder(new Int8Array(0), 1);
					if (typeof options['valueToChildTypeId'] === 'function') {
						this._valueToChildTypeId = options['valueToChildTypeId'];
					}
				}
				get typeIdToChildIndex() {
					return this.type.typeIdToChildIndex;
				}
				append(value, childTypeId) {
					return this.set(this.length, value, childTypeId);
				}
				set(index, value, childTypeId) {
					if (childTypeId === void 0) {
						childTypeId = this._valueToChildTypeId(this, value, index);
					}
					if (this.setValid(index, this.isValid(value))) {
						this.setValue(index, value, childTypeId);
					}
					return this;
				}
				setValue(index, value, childTypeId) {
					this._typeIds.set(index, childTypeId);
					super.setValue(index, value);
				}
				addChild(child, name = `${this.children.length}`) {
					const childTypeId = this.children.push(child);
					const {
						type: { children, mode, typeIds }
					} = this;
					const fields = [...children, new schema_1.Field(name, child.type)];
					this.type = new type_1.Union(mode, [...typeIds, childTypeId], fields);
					return childTypeId;
				}
				_valueToChildTypeId(builder, value, offset) {
					throw new Error(
						`Cannot map UnionBuilder value to child typeId. Pass the \`childTypeId\` as the second argument to unionBuilder.append(), or supply a \`valueToChildTypeId\` function as part of the UnionBuilder constructor options.`
					);
				}
			};
			exports.UnionBuilder = UnionBuilder2;
			var SparseUnionBuilder2 = class extends UnionBuilder2 {};
			exports.SparseUnionBuilder = SparseUnionBuilder2;
			var DenseUnionBuilder2 = class extends UnionBuilder2 {
				constructor(options) {
					super(options);
					this._offsets = new buffer_1.DataBufferBuilder(new Int32Array(0));
				}
				setValue(index, value, childTypeId) {
					const childIndex = this.type.typeIdToChildIndex[childTypeId];
					this._offsets.set(index, this.getChildAt(childIndex).length);
					return super.setValue(index, value, childTypeId);
				}
			};
			exports.DenseUnionBuilder = DenseUnionBuilder2;
		}
	});

	// ../../node_modules/apache-arrow/visitor.js
	var require_visitor = __commonJS({
		'../../node_modules/apache-arrow/visitor.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Visitor = void 0;
			var data_1 = require_data();
			var vector_1 = require_vector();
			var enum_1 = require_enum();
			var type_1 = require_type();
			var Visitor2 = class {
				visitMany(nodes, ...args) {
					return nodes.map((node, i) => this.visit(node, ...args.map((x) => x[i])));
				}
				visit(...args) {
					return this.getVisitFn(args[0], false).apply(this, args);
				}
				getVisitFn(node, throwIfNotFound = true) {
					return getVisitFn(this, node, throwIfNotFound);
				}
				visitNull(_node, ..._args) {
					return null;
				}
				visitBool(_node, ..._args) {
					return null;
				}
				visitInt(_node, ..._args) {
					return null;
				}
				visitFloat(_node, ..._args) {
					return null;
				}
				visitUtf8(_node, ..._args) {
					return null;
				}
				visitBinary(_node, ..._args) {
					return null;
				}
				visitFixedSizeBinary(_node, ..._args) {
					return null;
				}
				visitDate(_node, ..._args) {
					return null;
				}
				visitTimestamp(_node, ..._args) {
					return null;
				}
				visitTime(_node, ..._args) {
					return null;
				}
				visitDecimal(_node, ..._args) {
					return null;
				}
				visitList(_node, ..._args) {
					return null;
				}
				visitStruct(_node, ..._args) {
					return null;
				}
				visitUnion(_node, ..._args) {
					return null;
				}
				visitDictionary(_node, ..._args) {
					return null;
				}
				visitInterval(_node, ..._args) {
					return null;
				}
				visitFixedSizeList(_node, ..._args) {
					return null;
				}
				visitMap(_node, ..._args) {
					return null;
				}
			};
			exports.Visitor = Visitor2;
			function getVisitFn(visitor, node, throwIfNotFound = true) {
				let fn = null;
				let dtype = enum_1.Type.NONE;
				if (node instanceof data_1.Data) dtype = inferDType(node.type);
				else if (node instanceof vector_1.Vector) dtype = inferDType(node.type);
				else if (node instanceof type_1.DataType) dtype = inferDType(node);
				else if (typeof (dtype = node) !== 'number') dtype = enum_1.Type[node];
				switch (dtype) {
					case enum_1.Type.Null:
						fn = visitor.visitNull;
						break;
					case enum_1.Type.Bool:
						fn = visitor.visitBool;
						break;
					case enum_1.Type.Int:
						fn = visitor.visitInt;
						break;
					case enum_1.Type.Int8:
						fn = visitor.visitInt8 || visitor.visitInt;
						break;
					case enum_1.Type.Int16:
						fn = visitor.visitInt16 || visitor.visitInt;
						break;
					case enum_1.Type.Int32:
						fn = visitor.visitInt32 || visitor.visitInt;
						break;
					case enum_1.Type.Int64:
						fn = visitor.visitInt64 || visitor.visitInt;
						break;
					case enum_1.Type.Uint8:
						fn = visitor.visitUint8 || visitor.visitInt;
						break;
					case enum_1.Type.Uint16:
						fn = visitor.visitUint16 || visitor.visitInt;
						break;
					case enum_1.Type.Uint32:
						fn = visitor.visitUint32 || visitor.visitInt;
						break;
					case enum_1.Type.Uint64:
						fn = visitor.visitUint64 || visitor.visitInt;
						break;
					case enum_1.Type.Float:
						fn = visitor.visitFloat;
						break;
					case enum_1.Type.Float16:
						fn = visitor.visitFloat16 || visitor.visitFloat;
						break;
					case enum_1.Type.Float32:
						fn = visitor.visitFloat32 || visitor.visitFloat;
						break;
					case enum_1.Type.Float64:
						fn = visitor.visitFloat64 || visitor.visitFloat;
						break;
					case enum_1.Type.Utf8:
						fn = visitor.visitUtf8;
						break;
					case enum_1.Type.Binary:
						fn = visitor.visitBinary;
						break;
					case enum_1.Type.FixedSizeBinary:
						fn = visitor.visitFixedSizeBinary;
						break;
					case enum_1.Type.Date:
						fn = visitor.visitDate;
						break;
					case enum_1.Type.DateDay:
						fn = visitor.visitDateDay || visitor.visitDate;
						break;
					case enum_1.Type.DateMillisecond:
						fn = visitor.visitDateMillisecond || visitor.visitDate;
						break;
					case enum_1.Type.Timestamp:
						fn = visitor.visitTimestamp;
						break;
					case enum_1.Type.TimestampSecond:
						fn = visitor.visitTimestampSecond || visitor.visitTimestamp;
						break;
					case enum_1.Type.TimestampMillisecond:
						fn = visitor.visitTimestampMillisecond || visitor.visitTimestamp;
						break;
					case enum_1.Type.TimestampMicrosecond:
						fn = visitor.visitTimestampMicrosecond || visitor.visitTimestamp;
						break;
					case enum_1.Type.TimestampNanosecond:
						fn = visitor.visitTimestampNanosecond || visitor.visitTimestamp;
						break;
					case enum_1.Type.Time:
						fn = visitor.visitTime;
						break;
					case enum_1.Type.TimeSecond:
						fn = visitor.visitTimeSecond || visitor.visitTime;
						break;
					case enum_1.Type.TimeMillisecond:
						fn = visitor.visitTimeMillisecond || visitor.visitTime;
						break;
					case enum_1.Type.TimeMicrosecond:
						fn = visitor.visitTimeMicrosecond || visitor.visitTime;
						break;
					case enum_1.Type.TimeNanosecond:
						fn = visitor.visitTimeNanosecond || visitor.visitTime;
						break;
					case enum_1.Type.Decimal:
						fn = visitor.visitDecimal;
						break;
					case enum_1.Type.List:
						fn = visitor.visitList;
						break;
					case enum_1.Type.Struct:
						fn = visitor.visitStruct;
						break;
					case enum_1.Type.Union:
						fn = visitor.visitUnion;
						break;
					case enum_1.Type.DenseUnion:
						fn = visitor.visitDenseUnion || visitor.visitUnion;
						break;
					case enum_1.Type.SparseUnion:
						fn = visitor.visitSparseUnion || visitor.visitUnion;
						break;
					case enum_1.Type.Dictionary:
						fn = visitor.visitDictionary;
						break;
					case enum_1.Type.Interval:
						fn = visitor.visitInterval;
						break;
					case enum_1.Type.IntervalDayTime:
						fn = visitor.visitIntervalDayTime || visitor.visitInterval;
						break;
					case enum_1.Type.IntervalYearMonth:
						fn = visitor.visitIntervalYearMonth || visitor.visitInterval;
						break;
					case enum_1.Type.FixedSizeList:
						fn = visitor.visitFixedSizeList;
						break;
					case enum_1.Type.Map:
						fn = visitor.visitMap;
						break;
				}
				if (typeof fn === 'function') return fn;
				if (!throwIfNotFound) return () => null;
				throw new Error(`Unrecognized type '${enum_1.Type[dtype]}'`);
			}
			function inferDType(type) {
				switch (type.typeId) {
					case enum_1.Type.Null:
						return enum_1.Type.Null;
					case enum_1.Type.Int: {
						const { bitWidth, isSigned } = type;
						switch (bitWidth) {
							case 8:
								return isSigned ? enum_1.Type.Int8 : enum_1.Type.Uint8;
							case 16:
								return isSigned ? enum_1.Type.Int16 : enum_1.Type.Uint16;
							case 32:
								return isSigned ? enum_1.Type.Int32 : enum_1.Type.Uint32;
							case 64:
								return isSigned ? enum_1.Type.Int64 : enum_1.Type.Uint64;
						}
						return enum_1.Type.Int;
					}
					case enum_1.Type.Float:
						switch (type.precision) {
							case enum_1.Precision.HALF:
								return enum_1.Type.Float16;
							case enum_1.Precision.SINGLE:
								return enum_1.Type.Float32;
							case enum_1.Precision.DOUBLE:
								return enum_1.Type.Float64;
						}
						return enum_1.Type.Float;
					case enum_1.Type.Binary:
						return enum_1.Type.Binary;
					case enum_1.Type.Utf8:
						return enum_1.Type.Utf8;
					case enum_1.Type.Bool:
						return enum_1.Type.Bool;
					case enum_1.Type.Decimal:
						return enum_1.Type.Decimal;
					case enum_1.Type.Time:
						switch (type.unit) {
							case enum_1.TimeUnit.SECOND:
								return enum_1.Type.TimeSecond;
							case enum_1.TimeUnit.MILLISECOND:
								return enum_1.Type.TimeMillisecond;
							case enum_1.TimeUnit.MICROSECOND:
								return enum_1.Type.TimeMicrosecond;
							case enum_1.TimeUnit.NANOSECOND:
								return enum_1.Type.TimeNanosecond;
						}
						return enum_1.Type.Time;
					case enum_1.Type.Timestamp:
						switch (type.unit) {
							case enum_1.TimeUnit.SECOND:
								return enum_1.Type.TimestampSecond;
							case enum_1.TimeUnit.MILLISECOND:
								return enum_1.Type.TimestampMillisecond;
							case enum_1.TimeUnit.MICROSECOND:
								return enum_1.Type.TimestampMicrosecond;
							case enum_1.TimeUnit.NANOSECOND:
								return enum_1.Type.TimestampNanosecond;
						}
						return enum_1.Type.Timestamp;
					case enum_1.Type.Date:
						switch (type.unit) {
							case enum_1.DateUnit.DAY:
								return enum_1.Type.DateDay;
							case enum_1.DateUnit.MILLISECOND:
								return enum_1.Type.DateMillisecond;
						}
						return enum_1.Type.Date;
					case enum_1.Type.Interval:
						switch (type.unit) {
							case enum_1.IntervalUnit.DAY_TIME:
								return enum_1.Type.IntervalDayTime;
							case enum_1.IntervalUnit.YEAR_MONTH:
								return enum_1.Type.IntervalYearMonth;
						}
						return enum_1.Type.Interval;
					case enum_1.Type.Map:
						return enum_1.Type.Map;
					case enum_1.Type.List:
						return enum_1.Type.List;
					case enum_1.Type.Struct:
						return enum_1.Type.Struct;
					case enum_1.Type.Union:
						switch (type.mode) {
							case enum_1.UnionMode.Dense:
								return enum_1.Type.DenseUnion;
							case enum_1.UnionMode.Sparse:
								return enum_1.Type.SparseUnion;
						}
						return enum_1.Type.Union;
					case enum_1.Type.FixedSizeBinary:
						return enum_1.Type.FixedSizeBinary;
					case enum_1.Type.FixedSizeList:
						return enum_1.Type.FixedSizeList;
					case enum_1.Type.Dictionary:
						return enum_1.Type.Dictionary;
				}
				throw new Error(`Unrecognized type '${enum_1.Type[type.typeId]}'`);
			}
			Visitor2.prototype.visitInt8 = null;
			Visitor2.prototype.visitInt16 = null;
			Visitor2.prototype.visitInt32 = null;
			Visitor2.prototype.visitInt64 = null;
			Visitor2.prototype.visitUint8 = null;
			Visitor2.prototype.visitUint16 = null;
			Visitor2.prototype.visitUint32 = null;
			Visitor2.prototype.visitUint64 = null;
			Visitor2.prototype.visitFloat16 = null;
			Visitor2.prototype.visitFloat32 = null;
			Visitor2.prototype.visitFloat64 = null;
			Visitor2.prototype.visitDateDay = null;
			Visitor2.prototype.visitDateMillisecond = null;
			Visitor2.prototype.visitTimestampSecond = null;
			Visitor2.prototype.visitTimestampMillisecond = null;
			Visitor2.prototype.visitTimestampMicrosecond = null;
			Visitor2.prototype.visitTimestampNanosecond = null;
			Visitor2.prototype.visitTimeSecond = null;
			Visitor2.prototype.visitTimeMillisecond = null;
			Visitor2.prototype.visitTimeMicrosecond = null;
			Visitor2.prototype.visitTimeNanosecond = null;
			Visitor2.prototype.visitDenseUnion = null;
			Visitor2.prototype.visitSparseUnion = null;
			Visitor2.prototype.visitIntervalDayTime = null;
			Visitor2.prototype.visitIntervalYearMonth = null;
		}
	});

	// ../../node_modules/apache-arrow/visitor/set.js
	var require_set = __commonJS({
		'../../node_modules/apache-arrow/visitor/set.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.instance = exports.SetVisitor = void 0;
			var vector_1 = require_vector();
			var visitor_1 = require_visitor();
			var utf8_1 = require_utf8();
			var math_1 = require_math();
			var buffer_1 = require_buffer();
			var enum_1 = require_enum();
			var SetVisitor = class extends visitor_1.Visitor {};
			exports.SetVisitor = SetVisitor;
			var setEpochMsToDays = (data, index, epochMs) => {
				data[index] = (epochMs / 864e5) | 0;
			};
			var setEpochMsToMillisecondsLong = (data, index, epochMs) => {
				data[index] = epochMs % 4294967296 | 0;
				data[index + 1] = (epochMs / 4294967296) | 0;
			};
			var setEpochMsToMicrosecondsLong = (data, index, epochMs) => {
				data[index] = (epochMs * 1e3) % 4294967296 | 0;
				data[index + 1] = ((epochMs * 1e3) / 4294967296) | 0;
			};
			var setEpochMsToNanosecondsLong = (data, index, epochMs) => {
				data[index] = (epochMs * 1e6) % 4294967296 | 0;
				data[index + 1] = ((epochMs * 1e6) / 4294967296) | 0;
			};
			var setVariableWidthBytes = (values, valueOffsets, index, value) => {
				const { [index]: x, [index + 1]: y } = valueOffsets;
				if (x != null && y != null) {
					values.set(value.subarray(0, y - x), x);
				}
			};
			var setBool = ({ offset, values }, index, val) => {
				const idx = offset + index;
				val ? (values[idx >> 3] |= 1 << idx % 8) : (values[idx >> 3] &= ~(1 << idx % 8));
			};
			var setDateDay = ({ values }, index, value) => {
				setEpochMsToDays(values, index, value.valueOf());
			};
			var setDateMillisecond = ({ values }, index, value) => {
				setEpochMsToMillisecondsLong(values, index * 2, value.valueOf());
			};
			var setNumeric = ({ stride, values }, index, value) => {
				values[stride * index] = value;
			};
			var setFloat16 = ({ stride, values }, index, value) => {
				values[stride * index] = math_1.float64ToUint16(value);
			};
			var setNumericX2 = (vector, index, value) => {
				switch (typeof value) {
					case 'bigint':
						vector.values64[index] = value;
						break;
					case 'number':
						vector.values[index * vector.stride] = value;
						break;
					default: {
						const val = value;
						const { stride, ArrayType } = vector;
						const long = buffer_1.toArrayBufferView(ArrayType, val);
						vector.values.set(long.subarray(0, stride), stride * index);
					}
				}
			};
			var setFixedSizeBinary = ({ stride, values }, index, value) => {
				values.set(value.subarray(0, stride), stride * index);
			};
			var setBinary = ({ values, valueOffsets }, index, value) =>
				setVariableWidthBytes(values, valueOffsets, index, value);
			var setUtf8 = ({ values, valueOffsets }, index, value) => {
				setVariableWidthBytes(values, valueOffsets, index, utf8_1.encodeUtf8(value));
			};
			var setInt = (vector, index, value) => {
				vector.type.bitWidth < 64
					? setNumeric(vector, index, value)
					: setNumericX2(vector, index, value);
			};
			var setFloat = (vector, index, value) => {
				vector.type.precision !== enum_1.Precision.HALF
					? setNumeric(vector, index, value)
					: setFloat16(vector, index, value);
			};
			var setDate = (vector, index, value) => {
				vector.type.unit === enum_1.DateUnit.DAY
					? setDateDay(vector, index, value)
					: setDateMillisecond(vector, index, value);
			};
			var setTimestampSecond = ({ values }, index, value) =>
				setEpochMsToMillisecondsLong(values, index * 2, value / 1e3);
			var setTimestampMillisecond = ({ values }, index, value) =>
				setEpochMsToMillisecondsLong(values, index * 2, value);
			var setTimestampMicrosecond = ({ values }, index, value) =>
				setEpochMsToMicrosecondsLong(values, index * 2, value);
			var setTimestampNanosecond = ({ values }, index, value) =>
				setEpochMsToNanosecondsLong(values, index * 2, value);
			var setTimestamp = (vector, index, value) => {
				switch (vector.type.unit) {
					case enum_1.TimeUnit.SECOND:
						return setTimestampSecond(vector, index, value);
					case enum_1.TimeUnit.MILLISECOND:
						return setTimestampMillisecond(vector, index, value);
					case enum_1.TimeUnit.MICROSECOND:
						return setTimestampMicrosecond(vector, index, value);
					case enum_1.TimeUnit.NANOSECOND:
						return setTimestampNanosecond(vector, index, value);
				}
			};
			var setTimeSecond = ({ values, stride }, index, value) => {
				values[stride * index] = value;
			};
			var setTimeMillisecond = ({ values, stride }, index, value) => {
				values[stride * index] = value;
			};
			var setTimeMicrosecond = ({ values }, index, value) => {
				values.set(value.subarray(0, 2), 2 * index);
			};
			var setTimeNanosecond = ({ values }, index, value) => {
				values.set(value.subarray(0, 2), 2 * index);
			};
			var setTime = (vector, index, value) => {
				switch (vector.type.unit) {
					case enum_1.TimeUnit.SECOND:
						return setTimeSecond(vector, index, value);
					case enum_1.TimeUnit.MILLISECOND:
						return setTimeMillisecond(vector, index, value);
					case enum_1.TimeUnit.MICROSECOND:
						return setTimeMicrosecond(vector, index, value);
					case enum_1.TimeUnit.NANOSECOND:
						return setTimeNanosecond(vector, index, value);
				}
			};
			var setDecimal = ({ values }, index, value) => {
				values.set(value.subarray(0, 4), 4 * index);
			};
			var setList = (vector, index, value) => {
				const values = vector.getChildAt(0),
					valueOffsets = vector.valueOffsets;
				for (let idx = -1, itr = valueOffsets[index], end = valueOffsets[index + 1]; itr < end; ) {
					values.set(itr++, value.get(++idx));
				}
			};
			var setMap = (vector, index, value) => {
				const values = vector.getChildAt(0),
					valueOffsets = vector.valueOffsets;
				const entries = value instanceof Map ? [...value] : Object.entries(value);
				for (let idx = -1, itr = valueOffsets[index], end = valueOffsets[index + 1]; itr < end; ) {
					values.set(itr++, entries[++idx]);
				}
			};
			var _setStructArrayValue = (o, v) => (c, _, i) =>
				c === null || c === void 0 ? void 0 : c.set(o, v[i]);
			var _setStructVectorValue = (o, v) => (c, _, i) =>
				c === null || c === void 0 ? void 0 : c.set(o, v.get(i));
			var _setStructMapValue = (o, v) => (c, f, _) =>
				c === null || c === void 0 ? void 0 : c.set(o, v.get(f.name));
			var _setStructObjectValue = (o, v) => (c, f, _) =>
				c === null || c === void 0 ? void 0 : c.set(o, v[f.name]);
			var setStruct = (vector, index, value) => {
				const setValue =
					value instanceof Map
						? _setStructMapValue(index, value)
						: value instanceof vector_1.Vector
						? _setStructVectorValue(index, value)
						: Array.isArray(value)
						? _setStructArrayValue(index, value)
						: _setStructObjectValue(index, value);
				vector.type.children.forEach((f, i) => setValue(vector.getChildAt(i), f, i));
			};
			var setUnion = (vector, index, value) => {
				vector.type.mode === enum_1.UnionMode.Dense
					? setDenseUnion(vector, index, value)
					: setSparseUnion(vector, index, value);
			};
			var setDenseUnion = (vector, index, value) => {
				const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
				const child = vector.getChildAt(childIndex);
				child && child.set(vector.valueOffsets[index], value);
			};
			var setSparseUnion = (vector, index, value) => {
				const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
				const child = vector.getChildAt(childIndex);
				child && child.set(index, value);
			};
			var setDictionary = (vector, index, value) => {
				const key = vector.getKey(index);
				if (key !== null) {
					vector.setValue(key, value);
				}
			};
			var setIntervalValue = (vector, index, value) => {
				vector.type.unit === enum_1.IntervalUnit.DAY_TIME
					? setIntervalDayTime(vector, index, value)
					: setIntervalYearMonth(vector, index, value);
			};
			var setIntervalDayTime = ({ values }, index, value) => {
				values.set(value.subarray(0, 2), 2 * index);
			};
			var setIntervalYearMonth = ({ values }, index, value) => {
				values[index] = value[0] * 12 + (value[1] % 12);
			};
			var setFixedSizeList = (vector, index, value) => {
				const child = vector.getChildAt(0),
					{ stride } = vector;
				for (let idx = -1, offset = index * stride; ++idx < stride; ) {
					child.set(offset + idx, value.get(idx));
				}
			};
			SetVisitor.prototype.visitBool = setBool;
			SetVisitor.prototype.visitInt = setInt;
			SetVisitor.prototype.visitInt8 = setNumeric;
			SetVisitor.prototype.visitInt16 = setNumeric;
			SetVisitor.prototype.visitInt32 = setNumeric;
			SetVisitor.prototype.visitInt64 = setNumericX2;
			SetVisitor.prototype.visitUint8 = setNumeric;
			SetVisitor.prototype.visitUint16 = setNumeric;
			SetVisitor.prototype.visitUint32 = setNumeric;
			SetVisitor.prototype.visitUint64 = setNumericX2;
			SetVisitor.prototype.visitFloat = setFloat;
			SetVisitor.prototype.visitFloat16 = setFloat16;
			SetVisitor.prototype.visitFloat32 = setNumeric;
			SetVisitor.prototype.visitFloat64 = setNumeric;
			SetVisitor.prototype.visitUtf8 = setUtf8;
			SetVisitor.prototype.visitBinary = setBinary;
			SetVisitor.prototype.visitFixedSizeBinary = setFixedSizeBinary;
			SetVisitor.prototype.visitDate = setDate;
			SetVisitor.prototype.visitDateDay = setDateDay;
			SetVisitor.prototype.visitDateMillisecond = setDateMillisecond;
			SetVisitor.prototype.visitTimestamp = setTimestamp;
			SetVisitor.prototype.visitTimestampSecond = setTimestampSecond;
			SetVisitor.prototype.visitTimestampMillisecond = setTimestampMillisecond;
			SetVisitor.prototype.visitTimestampMicrosecond = setTimestampMicrosecond;
			SetVisitor.prototype.visitTimestampNanosecond = setTimestampNanosecond;
			SetVisitor.prototype.visitTime = setTime;
			SetVisitor.prototype.visitTimeSecond = setTimeSecond;
			SetVisitor.prototype.visitTimeMillisecond = setTimeMillisecond;
			SetVisitor.prototype.visitTimeMicrosecond = setTimeMicrosecond;
			SetVisitor.prototype.visitTimeNanosecond = setTimeNanosecond;
			SetVisitor.prototype.visitDecimal = setDecimal;
			SetVisitor.prototype.visitList = setList;
			SetVisitor.prototype.visitStruct = setStruct;
			SetVisitor.prototype.visitUnion = setUnion;
			SetVisitor.prototype.visitDenseUnion = setDenseUnion;
			SetVisitor.prototype.visitSparseUnion = setSparseUnion;
			SetVisitor.prototype.visitDictionary = setDictionary;
			SetVisitor.prototype.visitInterval = setIntervalValue;
			SetVisitor.prototype.visitIntervalDayTime = setIntervalDayTime;
			SetVisitor.prototype.visitIntervalYearMonth = setIntervalYearMonth;
			SetVisitor.prototype.visitFixedSizeList = setFixedSizeList;
			SetVisitor.prototype.visitMap = setMap;
			exports.instance = new SetVisitor();
		}
	});

	// ../../node_modules/apache-arrow/visitor/builderctor.js
	var require_builderctor = __commonJS({
		'../../node_modules/apache-arrow/visitor/builderctor.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.instance = exports.GetBuilderCtor = void 0;
			var visitor_1 = require_visitor();
			var binary_1 = require_binary();
			var bool_1 = require_bool();
			var date_1 = require_date();
			var decimal_1 = require_decimal();
			var dictionary_1 = require_dictionary();
			var fixedsizebinary_1 = require_fixedsizebinary();
			var fixedsizelist_1 = require_fixedsizelist();
			var float_1 = require_float();
			var interval_1 = require_interval();
			var int_1 = require_int();
			var list_1 = require_list();
			var map_1 = require_map();
			var null_1 = require_null();
			var struct_1 = require_struct();
			var timestamp_1 = require_timestamp();
			var time_1 = require_time();
			var union_1 = require_union();
			var utf8_1 = require_utf82();
			var GetBuilderCtor = class extends visitor_1.Visitor {
				visitNull() {
					return null_1.NullBuilder;
				}
				visitBool() {
					return bool_1.BoolBuilder;
				}
				visitInt() {
					return int_1.IntBuilder;
				}
				visitInt8() {
					return int_1.Int8Builder;
				}
				visitInt16() {
					return int_1.Int16Builder;
				}
				visitInt32() {
					return int_1.Int32Builder;
				}
				visitInt64() {
					return int_1.Int64Builder;
				}
				visitUint8() {
					return int_1.Uint8Builder;
				}
				visitUint16() {
					return int_1.Uint16Builder;
				}
				visitUint32() {
					return int_1.Uint32Builder;
				}
				visitUint64() {
					return int_1.Uint64Builder;
				}
				visitFloat() {
					return float_1.FloatBuilder;
				}
				visitFloat16() {
					return float_1.Float16Builder;
				}
				visitFloat32() {
					return float_1.Float32Builder;
				}
				visitFloat64() {
					return float_1.Float64Builder;
				}
				visitUtf8() {
					return utf8_1.Utf8Builder;
				}
				visitBinary() {
					return binary_1.BinaryBuilder;
				}
				visitFixedSizeBinary() {
					return fixedsizebinary_1.FixedSizeBinaryBuilder;
				}
				visitDate() {
					return date_1.DateBuilder;
				}
				visitDateDay() {
					return date_1.DateDayBuilder;
				}
				visitDateMillisecond() {
					return date_1.DateMillisecondBuilder;
				}
				visitTimestamp() {
					return timestamp_1.TimestampBuilder;
				}
				visitTimestampSecond() {
					return timestamp_1.TimestampSecondBuilder;
				}
				visitTimestampMillisecond() {
					return timestamp_1.TimestampMillisecondBuilder;
				}
				visitTimestampMicrosecond() {
					return timestamp_1.TimestampMicrosecondBuilder;
				}
				visitTimestampNanosecond() {
					return timestamp_1.TimestampNanosecondBuilder;
				}
				visitTime() {
					return time_1.TimeBuilder;
				}
				visitTimeSecond() {
					return time_1.TimeSecondBuilder;
				}
				visitTimeMillisecond() {
					return time_1.TimeMillisecondBuilder;
				}
				visitTimeMicrosecond() {
					return time_1.TimeMicrosecondBuilder;
				}
				visitTimeNanosecond() {
					return time_1.TimeNanosecondBuilder;
				}
				visitDecimal() {
					return decimal_1.DecimalBuilder;
				}
				visitList() {
					return list_1.ListBuilder;
				}
				visitStruct() {
					return struct_1.StructBuilder;
				}
				visitUnion() {
					return union_1.UnionBuilder;
				}
				visitDenseUnion() {
					return union_1.DenseUnionBuilder;
				}
				visitSparseUnion() {
					return union_1.SparseUnionBuilder;
				}
				visitDictionary() {
					return dictionary_1.DictionaryBuilder;
				}
				visitInterval() {
					return interval_1.IntervalBuilder;
				}
				visitIntervalDayTime() {
					return interval_1.IntervalDayTimeBuilder;
				}
				visitIntervalYearMonth() {
					return interval_1.IntervalYearMonthBuilder;
				}
				visitFixedSizeList() {
					return fixedsizelist_1.FixedSizeListBuilder;
				}
				visitMap() {
					return map_1.MapBuilder;
				}
			};
			exports.GetBuilderCtor = GetBuilderCtor;
			exports.instance = new GetBuilderCtor();
		}
	});

	// ../../node_modules/apache-arrow/builder/index.js
	var require_builder2 = __commonJS({
		'../../node_modules/apache-arrow/builder/index.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.DenseUnionBuilder =
				exports.SparseUnionBuilder =
				exports.UnionBuilder =
				exports.StructBuilder =
				exports.MapBuilder =
				exports.FixedSizeListBuilder =
				exports.ListBuilder =
				exports.BinaryBuilder =
				exports.Utf8Builder =
				exports.IntervalYearMonthBuilder =
				exports.IntervalDayTimeBuilder =
				exports.IntervalBuilder =
				exports.TimestampNanosecondBuilder =
				exports.TimestampMicrosecondBuilder =
				exports.TimestampMillisecondBuilder =
				exports.TimestampSecondBuilder =
				exports.TimestampBuilder =
				exports.TimeNanosecondBuilder =
				exports.TimeMicrosecondBuilder =
				exports.TimeMillisecondBuilder =
				exports.TimeSecondBuilder =
				exports.TimeBuilder =
				exports.Uint64Builder =
				exports.Uint32Builder =
				exports.Uint16Builder =
				exports.Uint8Builder =
				exports.Int64Builder =
				exports.Int32Builder =
				exports.Int16Builder =
				exports.Int8Builder =
				exports.IntBuilder =
				exports.Float64Builder =
				exports.Float32Builder =
				exports.Float16Builder =
				exports.FloatBuilder =
				exports.FixedSizeBinaryBuilder =
				exports.DictionaryBuilder =
				exports.DecimalBuilder =
				exports.DateMillisecondBuilder =
				exports.DateDayBuilder =
				exports.DateBuilder =
				exports.NullBuilder =
				exports.BoolBuilder =
				exports.Builder =
					void 0;
			var builder_1 = require_builder();
			Object.defineProperty(exports, 'Builder', {
				enumerable: true,
				get: function () {
					return builder_1.Builder;
				}
			});
			var bool_1 = require_bool();
			Object.defineProperty(exports, 'BoolBuilder', {
				enumerable: true,
				get: function () {
					return bool_1.BoolBuilder;
				}
			});
			var null_1 = require_null();
			Object.defineProperty(exports, 'NullBuilder', {
				enumerable: true,
				get: function () {
					return null_1.NullBuilder;
				}
			});
			var date_1 = require_date();
			Object.defineProperty(exports, 'DateBuilder', {
				enumerable: true,
				get: function () {
					return date_1.DateBuilder;
				}
			});
			Object.defineProperty(exports, 'DateDayBuilder', {
				enumerable: true,
				get: function () {
					return date_1.DateDayBuilder;
				}
			});
			Object.defineProperty(exports, 'DateMillisecondBuilder', {
				enumerable: true,
				get: function () {
					return date_1.DateMillisecondBuilder;
				}
			});
			var decimal_1 = require_decimal();
			Object.defineProperty(exports, 'DecimalBuilder', {
				enumerable: true,
				get: function () {
					return decimal_1.DecimalBuilder;
				}
			});
			var dictionary_1 = require_dictionary();
			Object.defineProperty(exports, 'DictionaryBuilder', {
				enumerable: true,
				get: function () {
					return dictionary_1.DictionaryBuilder;
				}
			});
			var fixedsizebinary_1 = require_fixedsizebinary();
			Object.defineProperty(exports, 'FixedSizeBinaryBuilder', {
				enumerable: true,
				get: function () {
					return fixedsizebinary_1.FixedSizeBinaryBuilder;
				}
			});
			var float_1 = require_float();
			Object.defineProperty(exports, 'FloatBuilder', {
				enumerable: true,
				get: function () {
					return float_1.FloatBuilder;
				}
			});
			Object.defineProperty(exports, 'Float16Builder', {
				enumerable: true,
				get: function () {
					return float_1.Float16Builder;
				}
			});
			Object.defineProperty(exports, 'Float32Builder', {
				enumerable: true,
				get: function () {
					return float_1.Float32Builder;
				}
			});
			Object.defineProperty(exports, 'Float64Builder', {
				enumerable: true,
				get: function () {
					return float_1.Float64Builder;
				}
			});
			var int_1 = require_int();
			Object.defineProperty(exports, 'IntBuilder', {
				enumerable: true,
				get: function () {
					return int_1.IntBuilder;
				}
			});
			Object.defineProperty(exports, 'Int8Builder', {
				enumerable: true,
				get: function () {
					return int_1.Int8Builder;
				}
			});
			Object.defineProperty(exports, 'Int16Builder', {
				enumerable: true,
				get: function () {
					return int_1.Int16Builder;
				}
			});
			Object.defineProperty(exports, 'Int32Builder', {
				enumerable: true,
				get: function () {
					return int_1.Int32Builder;
				}
			});
			Object.defineProperty(exports, 'Int64Builder', {
				enumerable: true,
				get: function () {
					return int_1.Int64Builder;
				}
			});
			Object.defineProperty(exports, 'Uint8Builder', {
				enumerable: true,
				get: function () {
					return int_1.Uint8Builder;
				}
			});
			Object.defineProperty(exports, 'Uint16Builder', {
				enumerable: true,
				get: function () {
					return int_1.Uint16Builder;
				}
			});
			Object.defineProperty(exports, 'Uint32Builder', {
				enumerable: true,
				get: function () {
					return int_1.Uint32Builder;
				}
			});
			Object.defineProperty(exports, 'Uint64Builder', {
				enumerable: true,
				get: function () {
					return int_1.Uint64Builder;
				}
			});
			var time_1 = require_time();
			Object.defineProperty(exports, 'TimeBuilder', {
				enumerable: true,
				get: function () {
					return time_1.TimeBuilder;
				}
			});
			Object.defineProperty(exports, 'TimeSecondBuilder', {
				enumerable: true,
				get: function () {
					return time_1.TimeSecondBuilder;
				}
			});
			Object.defineProperty(exports, 'TimeMillisecondBuilder', {
				enumerable: true,
				get: function () {
					return time_1.TimeMillisecondBuilder;
				}
			});
			Object.defineProperty(exports, 'TimeMicrosecondBuilder', {
				enumerable: true,
				get: function () {
					return time_1.TimeMicrosecondBuilder;
				}
			});
			Object.defineProperty(exports, 'TimeNanosecondBuilder', {
				enumerable: true,
				get: function () {
					return time_1.TimeNanosecondBuilder;
				}
			});
			var timestamp_1 = require_timestamp();
			Object.defineProperty(exports, 'TimestampBuilder', {
				enumerable: true,
				get: function () {
					return timestamp_1.TimestampBuilder;
				}
			});
			Object.defineProperty(exports, 'TimestampSecondBuilder', {
				enumerable: true,
				get: function () {
					return timestamp_1.TimestampSecondBuilder;
				}
			});
			Object.defineProperty(exports, 'TimestampMillisecondBuilder', {
				enumerable: true,
				get: function () {
					return timestamp_1.TimestampMillisecondBuilder;
				}
			});
			Object.defineProperty(exports, 'TimestampMicrosecondBuilder', {
				enumerable: true,
				get: function () {
					return timestamp_1.TimestampMicrosecondBuilder;
				}
			});
			Object.defineProperty(exports, 'TimestampNanosecondBuilder', {
				enumerable: true,
				get: function () {
					return timestamp_1.TimestampNanosecondBuilder;
				}
			});
			var interval_1 = require_interval();
			Object.defineProperty(exports, 'IntervalBuilder', {
				enumerable: true,
				get: function () {
					return interval_1.IntervalBuilder;
				}
			});
			Object.defineProperty(exports, 'IntervalDayTimeBuilder', {
				enumerable: true,
				get: function () {
					return interval_1.IntervalDayTimeBuilder;
				}
			});
			Object.defineProperty(exports, 'IntervalYearMonthBuilder', {
				enumerable: true,
				get: function () {
					return interval_1.IntervalYearMonthBuilder;
				}
			});
			var utf8_1 = require_utf82();
			Object.defineProperty(exports, 'Utf8Builder', {
				enumerable: true,
				get: function () {
					return utf8_1.Utf8Builder;
				}
			});
			var binary_1 = require_binary();
			Object.defineProperty(exports, 'BinaryBuilder', {
				enumerable: true,
				get: function () {
					return binary_1.BinaryBuilder;
				}
			});
			var list_1 = require_list();
			Object.defineProperty(exports, 'ListBuilder', {
				enumerable: true,
				get: function () {
					return list_1.ListBuilder;
				}
			});
			var fixedsizelist_1 = require_fixedsizelist();
			Object.defineProperty(exports, 'FixedSizeListBuilder', {
				enumerable: true,
				get: function () {
					return fixedsizelist_1.FixedSizeListBuilder;
				}
			});
			var map_1 = require_map();
			Object.defineProperty(exports, 'MapBuilder', {
				enumerable: true,
				get: function () {
					return map_1.MapBuilder;
				}
			});
			var struct_1 = require_struct();
			Object.defineProperty(exports, 'StructBuilder', {
				enumerable: true,
				get: function () {
					return struct_1.StructBuilder;
				}
			});
			var union_1 = require_union();
			Object.defineProperty(exports, 'UnionBuilder', {
				enumerable: true,
				get: function () {
					return union_1.UnionBuilder;
				}
			});
			Object.defineProperty(exports, 'SparseUnionBuilder', {
				enumerable: true,
				get: function () {
					return union_1.SparseUnionBuilder;
				}
			});
			Object.defineProperty(exports, 'DenseUnionBuilder', {
				enumerable: true,
				get: function () {
					return union_1.DenseUnionBuilder;
				}
			});
			var enum_1 = require_enum();
			var utf8_2 = require_utf82();
			var builder_2 = require_builder();
			var set_1 = require_set();
			var builderctor_1 = require_builderctor();
			builder_2.Builder.new = newBuilder;
			function newBuilder(options) {
				const type = options.type;
				const builder = new (builderctor_1.instance.getVisitFn(type)())(options);
				if (type.children && type.children.length > 0) {
					const children = options['children'] || [];
					const defaultOptions = { nullValues: options['nullValues'] };
					const getChildOptions = Array.isArray(children)
						? (_, i) => children[i] || defaultOptions
						: ({ name }) => children[name] || defaultOptions;
					type.children.forEach((field, index) => {
						const { type: type2 } = field;
						const opts = getChildOptions(field, index);
						builder.children.push(
							newBuilder(Object.assign(Object.assign({}, opts), { type: type2 }))
						);
					});
				}
				return builder;
			}
			Object.keys(enum_1.Type)
				.map((T) => enum_1.Type[T])
				.filter((T) => typeof T === 'number' && T !== enum_1.Type.NONE)
				.forEach((typeId) => {
					const BuilderCtor = builderctor_1.instance.visit(typeId);
					BuilderCtor.prototype._setValue = set_1.instance.getVisitFn(typeId);
				});
			utf8_2.Utf8Builder.prototype._setValue = set_1.instance.visitBinary;
		}
	});

	// ../../node_modules/apache-arrow/fb/File.js
	var require_File = __commonJS({
		'../../node_modules/apache-arrow/fb/File.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Block = exports.Footer = void 0;
			var flatbuffers_1 = require_flatbuffers();
			var NS13596923344997147894 = require_Schema();
			var Footer = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
				}
				static getRootAsFooter(bb, obj) {
					return (obj || new Footer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				static getSizePrefixedRootAsFooter(bb, obj) {
					bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
					return (obj || new Footer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
				}
				version() {
					const offset = this.bb.__offset(this.bb_pos, 4);
					return offset
						? this.bb.readInt16(this.bb_pos + offset)
						: NS13596923344997147894.MetadataVersion.V1;
				}
				schema(obj) {
					const offset = this.bb.__offset(this.bb_pos, 6);
					return offset
						? (obj || new NS13596923344997147894.Schema()).__init(
								this.bb.__indirect(this.bb_pos + offset),
								this.bb
						  )
						: null;
				}
				dictionaries(index, obj) {
					const offset = this.bb.__offset(this.bb_pos, 8);
					return offset
						? (obj || new Block()).__init(
								this.bb.__vector(this.bb_pos + offset) + index * 24,
								this.bb
						  )
						: null;
				}
				dictionariesLength() {
					const offset = this.bb.__offset(this.bb_pos, 8);
					return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
				}
				recordBatches(index, obj) {
					const offset = this.bb.__offset(this.bb_pos, 10);
					return offset
						? (obj || new Block()).__init(
								this.bb.__vector(this.bb_pos + offset) + index * 24,
								this.bb
						  )
						: null;
				}
				recordBatchesLength() {
					const offset = this.bb.__offset(this.bb_pos, 10);
					return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
				}
				customMetadata(index, obj) {
					const offset = this.bb.__offset(this.bb_pos, 12);
					return offset
						? (obj || new NS13596923344997147894.KeyValue()).__init(
								this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4),
								this.bb
						  )
						: null;
				}
				customMetadataLength() {
					const offset = this.bb.__offset(this.bb_pos, 12);
					return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
				}
				static startFooter(builder) {
					builder.startObject(5);
				}
				static addVersion(builder, version) {
					builder.addFieldInt16(0, version, NS13596923344997147894.MetadataVersion.V1);
				}
				static addSchema(builder, schemaOffset) {
					builder.addFieldOffset(1, schemaOffset, 0);
				}
				static addDictionaries(builder, dictionariesOffset) {
					builder.addFieldOffset(2, dictionariesOffset, 0);
				}
				static startDictionariesVector(builder, numElems) {
					builder.startVector(24, numElems, 8);
				}
				static addRecordBatches(builder, recordBatchesOffset) {
					builder.addFieldOffset(3, recordBatchesOffset, 0);
				}
				static startRecordBatchesVector(builder, numElems) {
					builder.startVector(24, numElems, 8);
				}
				static addCustomMetadata(builder, customMetadataOffset) {
					builder.addFieldOffset(4, customMetadataOffset, 0);
				}
				static createCustomMetadataVector(builder, data) {
					builder.startVector(4, data.length, 4);
					for (let i = data.length - 1; i >= 0; i--) {
						builder.addOffset(data[i]);
					}
					return builder.endVector();
				}
				static startCustomMetadataVector(builder, numElems) {
					builder.startVector(4, numElems, 4);
				}
				static endFooter(builder) {
					const offset = builder.endObject();
					return offset;
				}
				static finishFooterBuffer(builder, offset) {
					builder.finish(offset);
				}
				static finishSizePrefixedFooterBuffer(builder, offset) {
					builder.finish(offset, void 0, true);
				}
				static createFooter(
					builder,
					version,
					schemaOffset,
					dictionariesOffset,
					recordBatchesOffset,
					customMetadataOffset
				) {
					Footer.startFooter(builder);
					Footer.addVersion(builder, version);
					Footer.addSchema(builder, schemaOffset);
					Footer.addDictionaries(builder, dictionariesOffset);
					Footer.addRecordBatches(builder, recordBatchesOffset);
					Footer.addCustomMetadata(builder, customMetadataOffset);
					return Footer.endFooter(builder);
				}
			};
			exports.Footer = Footer;
			var Block = class {
				constructor() {
					this.bb = null;
					this.bb_pos = 0;
				}
				__init(i, bb) {
					this.bb_pos = i;
					this.bb = bb;
					return this;
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
				static createBlock(builder, offset, metaDataLength, bodyLength) {
					builder.prep(8, 24);
					builder.writeInt64(bodyLength);
					builder.pad(4);
					builder.writeInt32(metaDataLength);
					builder.writeInt64(offset);
					return builder.offset();
				}
			};
			exports.Block = Block;
		}
	});

	// ../../node_modules/apache-arrow/ipc/metadata/file.js
	var require_file = __commonJS({
		'../../node_modules/apache-arrow/ipc/metadata/file.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.FileBlock = exports.Footer = void 0;
			var File_1 = require_File();
			var flatbuffers_1 = require_flatbuffers();
			var Long = flatbuffers_1.flatbuffers.Long;
			var Builder3 = flatbuffers_1.flatbuffers.Builder;
			var ByteBuffer = flatbuffers_1.flatbuffers.ByteBuffer;
			var schema_1 = require_schema();
			var enum_1 = require_enum();
			var buffer_1 = require_buffer();
			var Footer_ = class {
				constructor(schema, version = enum_1.MetadataVersion.V4, recordBatches, dictionaryBatches) {
					this.schema = schema;
					this.version = version;
					recordBatches && (this._recordBatches = recordBatches);
					dictionaryBatches && (this._dictionaryBatches = dictionaryBatches);
				}
				static decode(buf) {
					buf = new ByteBuffer(buffer_1.toUint8Array(buf));
					const footer = File_1.Footer.getRootAsFooter(buf);
					const schema = schema_1.Schema.decode(footer.schema());
					return new OffHeapFooter(schema, footer);
				}
				static encode(footer) {
					const b = new Builder3();
					const schemaOffset = schema_1.Schema.encode(b, footer.schema);
					File_1.Footer.startRecordBatchesVector(b, footer.numRecordBatches);
					[...footer.recordBatches()]
						.slice()
						.reverse()
						.forEach((rb) => FileBlock.encode(b, rb));
					const recordBatchesOffset = b.endVector();
					File_1.Footer.startDictionariesVector(b, footer.numDictionaries);
					[...footer.dictionaryBatches()]
						.slice()
						.reverse()
						.forEach((db2) => FileBlock.encode(b, db2));
					const dictionaryBatchesOffset = b.endVector();
					File_1.Footer.startFooter(b);
					File_1.Footer.addSchema(b, schemaOffset);
					File_1.Footer.addVersion(b, enum_1.MetadataVersion.V4);
					File_1.Footer.addRecordBatches(b, recordBatchesOffset);
					File_1.Footer.addDictionaries(b, dictionaryBatchesOffset);
					File_1.Footer.finishFooterBuffer(b, File_1.Footer.endFooter(b));
					return b.asUint8Array();
				}
				get numRecordBatches() {
					return this._recordBatches.length;
				}
				get numDictionaries() {
					return this._dictionaryBatches.length;
				}
				*recordBatches() {
					for (let block, i = -1, n = this.numRecordBatches; ++i < n; ) {
						if ((block = this.getRecordBatch(i))) {
							yield block;
						}
					}
				}
				*dictionaryBatches() {
					for (let block, i = -1, n = this.numDictionaries; ++i < n; ) {
						if ((block = this.getDictionaryBatch(i))) {
							yield block;
						}
					}
				}
				getRecordBatch(index) {
					return (
						(index >= 0 && index < this.numRecordBatches && this._recordBatches[index]) || null
					);
				}
				getDictionaryBatch(index) {
					return (
						(index >= 0 && index < this.numDictionaries && this._dictionaryBatches[index]) || null
					);
				}
			};
			exports.Footer = Footer_;
			var OffHeapFooter = class extends Footer_ {
				constructor(schema, _footer) {
					super(schema, _footer.version());
					this._footer = _footer;
				}
				get numRecordBatches() {
					return this._footer.recordBatchesLength();
				}
				get numDictionaries() {
					return this._footer.dictionariesLength();
				}
				getRecordBatch(index) {
					if (index >= 0 && index < this.numRecordBatches) {
						const fileBlock = this._footer.recordBatches(index);
						if (fileBlock) {
							return FileBlock.decode(fileBlock);
						}
					}
					return null;
				}
				getDictionaryBatch(index) {
					if (index >= 0 && index < this.numDictionaries) {
						const fileBlock = this._footer.dictionaries(index);
						if (fileBlock) {
							return FileBlock.decode(fileBlock);
						}
					}
					return null;
				}
			};
			var FileBlock = class {
				constructor(metaDataLength, bodyLength, offset) {
					this.metaDataLength = metaDataLength;
					this.offset = typeof offset === 'number' ? offset : offset.low;
					this.bodyLength = typeof bodyLength === 'number' ? bodyLength : bodyLength.low;
				}
				static decode(block) {
					return new FileBlock(block.metaDataLength(), block.bodyLength(), block.offset());
				}
				static encode(b, fileBlock) {
					const { metaDataLength } = fileBlock;
					const offset = new Long(fileBlock.offset, 0);
					const bodyLength = new Long(fileBlock.bodyLength, 0);
					return File_1.Block.createBlock(b, offset, metaDataLength, bodyLength);
				}
			};
			exports.FileBlock = FileBlock;
		}
	});

	// ../../node_modules/apache-arrow/io/stream.js
	var require_stream = __commonJS({
		'../../node_modules/apache-arrow/io/stream.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.AsyncByteStream = exports.ByteStream = exports.AsyncByteQueue = void 0;
			var tslib_1 = require_tslib();
			var adapters_1 = require_adapters();
			var utf8_1 = require_utf8();
			var interfaces_1 = require_interfaces();
			var buffer_1 = require_buffer();
			var compat_1 = require_compat();
			var AsyncByteQueue2 = class extends interfaces_1.AsyncQueue {
				write(value) {
					if ((value = buffer_1.toUint8Array(value)).byteLength > 0) {
						return super.write(value);
					}
				}
				toString(sync = false) {
					return sync
						? utf8_1.decodeUtf8(this.toUint8Array(true))
						: this.toUint8Array(false).then(utf8_1.decodeUtf8);
				}
				toUint8Array(sync = false) {
					return sync
						? buffer_1.joinUint8Arrays(this._values)[0]
						: (() =>
								tslib_1.__awaiter(this, void 0, void 0, function* () {
									var e_1, _a;
									const buffers = [];
									let byteLength = 0;
									try {
										for (
											var _b = tslib_1.__asyncValues(this), _c;
											(_c = yield _b.next()), !_c.done;

										) {
											const chunk = _c.value;
											buffers.push(chunk);
											byteLength += chunk.byteLength;
										}
									} catch (e_1_1) {
										e_1 = { error: e_1_1 };
									} finally {
										try {
											if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
										} finally {
											if (e_1) throw e_1.error;
										}
									}
									return buffer_1.joinUint8Arrays(buffers, byteLength)[0];
								}))();
				}
			};
			exports.AsyncByteQueue = AsyncByteQueue2;
			var ByteStream2 = class {
				constructor(source) {
					if (source) {
						this.source = new ByteStreamSource(adapters_1.default.fromIterable(source));
					}
				}
				[Symbol.iterator]() {
					return this;
				}
				next(value) {
					return this.source.next(value);
				}
				throw(value) {
					return this.source.throw(value);
				}
				return(value) {
					return this.source.return(value);
				}
				peek(size) {
					return this.source.peek(size);
				}
				read(size) {
					return this.source.read(size);
				}
			};
			exports.ByteStream = ByteStream2;
			var AsyncByteStream2 = class {
				constructor(source) {
					if (source instanceof AsyncByteStream2) {
						this.source = source.source;
					} else if (source instanceof AsyncByteQueue2) {
						this.source = new AsyncByteStreamSource(adapters_1.default.fromAsyncIterable(source));
					} else if (compat_1.isReadableNodeStream(source)) {
						this.source = new AsyncByteStreamSource(adapters_1.default.fromNodeStream(source));
					} else if (compat_1.isReadableDOMStream(source)) {
						this.source = new AsyncByteStreamSource(adapters_1.default.fromDOMStream(source));
					} else if (compat_1.isFetchResponse(source)) {
						this.source = new AsyncByteStreamSource(adapters_1.default.fromDOMStream(source.body));
					} else if (compat_1.isIterable(source)) {
						this.source = new AsyncByteStreamSource(adapters_1.default.fromIterable(source));
					} else if (compat_1.isPromise(source)) {
						this.source = new AsyncByteStreamSource(adapters_1.default.fromAsyncIterable(source));
					} else if (compat_1.isAsyncIterable(source)) {
						this.source = new AsyncByteStreamSource(adapters_1.default.fromAsyncIterable(source));
					}
				}
				[Symbol.asyncIterator]() {
					return this;
				}
				next(value) {
					return this.source.next(value);
				}
				throw(value) {
					return this.source.throw(value);
				}
				return(value) {
					return this.source.return(value);
				}
				get closed() {
					return this.source.closed;
				}
				cancel(reason) {
					return this.source.cancel(reason);
				}
				peek(size) {
					return this.source.peek(size);
				}
				read(size) {
					return this.source.read(size);
				}
			};
			exports.AsyncByteStream = AsyncByteStream2;
			var ByteStreamSource = class {
				constructor(source) {
					this.source = source;
				}
				cancel(reason) {
					this.return(reason);
				}
				peek(size) {
					return this.next(size, 'peek').value;
				}
				read(size) {
					return this.next(size, 'read').value;
				}
				next(size, cmd = 'read') {
					return this.source.next({ cmd, size });
				}
				throw(value) {
					return Object.create(
						(this.source.throw && this.source.throw(value)) || interfaces_1.ITERATOR_DONE
					);
				}
				return(value) {
					return Object.create(
						(this.source.return && this.source.return(value)) || interfaces_1.ITERATOR_DONE
					);
				}
			};
			var AsyncByteStreamSource = class {
				constructor(source) {
					this.source = source;
					this._closedPromise = new Promise((r) => (this._closedPromiseResolve = r));
				}
				cancel(reason) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						yield this.return(reason);
					});
				}
				get closed() {
					return this._closedPromise;
				}
				read(size) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						return (yield this.next(size, 'read')).value;
					});
				}
				peek(size) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						return (yield this.next(size, 'peek')).value;
					});
				}
				next(size, cmd = 'read') {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						return yield this.source.next({ cmd, size });
					});
				}
				throw(value) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						const result =
							(this.source.throw && (yield this.source.throw(value))) || interfaces_1.ITERATOR_DONE;
						this._closedPromiseResolve && this._closedPromiseResolve();
						this._closedPromiseResolve = void 0;
						return Object.create(result);
					});
				}
				return(value) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						const result =
							(this.source.return && (yield this.source.return(value))) ||
							interfaces_1.ITERATOR_DONE;
						this._closedPromiseResolve && this._closedPromiseResolve();
						this._closedPromiseResolve = void 0;
						return Object.create(result);
					});
				}
			};
		}
	});

	// ../../node_modules/apache-arrow/io/file.js
	var require_file2 = __commonJS({
		'../../node_modules/apache-arrow/io/file.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.AsyncRandomAccessFile = exports.RandomAccessFile = void 0;
			var tslib_1 = require_tslib();
			var stream_1 = require_stream();
			var buffer_1 = require_buffer();
			var RandomAccessFile = class extends stream_1.ByteStream {
				constructor(buffer, byteLength) {
					super();
					this.position = 0;
					this.buffer = buffer_1.toUint8Array(buffer);
					this.size = typeof byteLength === 'undefined' ? this.buffer.byteLength : byteLength;
				}
				readInt32(position) {
					const { buffer, byteOffset } = this.readAt(position, 4);
					return new DataView(buffer, byteOffset).getInt32(0, true);
				}
				seek(position) {
					this.position = Math.min(position, this.size);
					return position < this.size;
				}
				read(nBytes) {
					const { buffer, size, position } = this;
					if (buffer && position < size) {
						if (typeof nBytes !== 'number') {
							nBytes = Infinity;
						}
						this.position = Math.min(size, position + Math.min(size - position, nBytes));
						return buffer.subarray(position, this.position);
					}
					return null;
				}
				readAt(position, nBytes) {
					const buf = this.buffer;
					const end = Math.min(this.size, position + nBytes);
					return buf ? buf.subarray(position, end) : new Uint8Array(nBytes);
				}
				close() {
					this.buffer && (this.buffer = null);
				}
				throw(value) {
					this.close();
					return { done: true, value };
				}
				return(value) {
					this.close();
					return { done: true, value };
				}
			};
			exports.RandomAccessFile = RandomAccessFile;
			var AsyncRandomAccessFile = class extends stream_1.AsyncByteStream {
				constructor(file, byteLength) {
					super();
					this.position = 0;
					this._handle = file;
					if (typeof byteLength === 'number') {
						this.size = byteLength;
					} else {
						this._pending = (() =>
							tslib_1.__awaiter(this, void 0, void 0, function* () {
								this.size = (yield file.stat()).size;
								delete this._pending;
							}))();
					}
				}
				readInt32(position) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						const { buffer, byteOffset } = yield this.readAt(position, 4);
						return new DataView(buffer, byteOffset).getInt32(0, true);
					});
				}
				seek(position) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						this._pending && (yield this._pending);
						this.position = Math.min(position, this.size);
						return position < this.size;
					});
				}
				read(nBytes) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						this._pending && (yield this._pending);
						const { _handle: file, size, position } = this;
						if (file && position < size) {
							if (typeof nBytes !== 'number') {
								nBytes = Infinity;
							}
							let pos = position,
								offset = 0,
								bytesRead = 0;
							const end = Math.min(size, pos + Math.min(size - pos, nBytes));
							const buffer = new Uint8Array(Math.max(0, (this.position = end) - pos));
							while ((pos += bytesRead) < end && (offset += bytesRead) < buffer.byteLength) {
								({ bytesRead } = yield file.read(buffer, offset, buffer.byteLength - offset, pos));
							}
							return buffer;
						}
						return null;
					});
				}
				readAt(position, nBytes) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						this._pending && (yield this._pending);
						const { _handle: file, size } = this;
						if (file && position + nBytes < size) {
							const end = Math.min(size, position + nBytes);
							const buffer = new Uint8Array(end - position);
							return (yield file.read(buffer, 0, nBytes, position)).buffer;
						}
						return new Uint8Array(nBytes);
					});
				}
				close() {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						const f = this._handle;
						this._handle = null;
						f && (yield f.close());
					});
				}
				throw(value) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						yield this.close();
						return { done: true, value };
					});
				}
				return(value) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						yield this.close();
						return { done: true, value };
					});
				}
			};
			exports.AsyncRandomAccessFile = AsyncRandomAccessFile;
		}
	});

	// ../../node_modules/apache-arrow/util/int.js
	var require_int2 = __commonJS({
		'../../node_modules/apache-arrow/util/int.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Int128 = exports.Int64 = exports.Uint64 = exports.BaseInt64 = void 0;
			var carryBit16 = 1 << 16;
			function intAsHex(value) {
				if (value < 0) {
					value = 4294967295 + value + 1;
				}
				return `0x${value.toString(16)}`;
			}
			var kInt32DecimalDigits = 8;
			var kPowersOfTen = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8];
			var BaseInt64 = class {
				constructor(buffer) {
					this.buffer = buffer;
				}
				high() {
					return this.buffer[1];
				}
				low() {
					return this.buffer[0];
				}
				_times(other) {
					const L = new Uint32Array([
						this.buffer[1] >>> 16,
						this.buffer[1] & 65535,
						this.buffer[0] >>> 16,
						this.buffer[0] & 65535
					]);
					const R = new Uint32Array([
						other.buffer[1] >>> 16,
						other.buffer[1] & 65535,
						other.buffer[0] >>> 16,
						other.buffer[0] & 65535
					]);
					let product = L[3] * R[3];
					this.buffer[0] = product & 65535;
					let sum = product >>> 16;
					product = L[2] * R[3];
					sum += product;
					product = (L[3] * R[2]) >>> 0;
					sum += product;
					this.buffer[0] += sum << 16;
					this.buffer[1] = sum >>> 0 < product ? carryBit16 : 0;
					this.buffer[1] += sum >>> 16;
					this.buffer[1] += L[1] * R[3] + L[2] * R[2] + L[3] * R[1];
					this.buffer[1] += (L[0] * R[3] + L[1] * R[2] + L[2] * R[1] + L[3] * R[0]) << 16;
					return this;
				}
				_plus(other) {
					const sum = (this.buffer[0] + other.buffer[0]) >>> 0;
					this.buffer[1] += other.buffer[1];
					if (sum < this.buffer[0] >>> 0) {
						++this.buffer[1];
					}
					this.buffer[0] = sum;
				}
				lessThan(other) {
					return (
						this.buffer[1] < other.buffer[1] ||
						(this.buffer[1] === other.buffer[1] && this.buffer[0] < other.buffer[0])
					);
				}
				equals(other) {
					return this.buffer[1] === other.buffer[1] && this.buffer[0] == other.buffer[0];
				}
				greaterThan(other) {
					return other.lessThan(this);
				}
				hex() {
					return `${intAsHex(this.buffer[1])} ${intAsHex(this.buffer[0])}`;
				}
			};
			exports.BaseInt64 = BaseInt64;
			var Uint642 = class extends BaseInt64 {
				times(other) {
					this._times(other);
					return this;
				}
				plus(other) {
					this._plus(other);
					return this;
				}
				static from(val, out_buffer = new Uint32Array(2)) {
					return Uint642.fromString(typeof val === 'string' ? val : val.toString(), out_buffer);
				}
				static fromNumber(num, out_buffer = new Uint32Array(2)) {
					return Uint642.fromString(num.toString(), out_buffer);
				}
				static fromString(str, out_buffer = new Uint32Array(2)) {
					const length = str.length;
					const out = new Uint642(out_buffer);
					for (let posn = 0; posn < length; ) {
						const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
						const chunk = new Uint642(new Uint32Array([parseInt(str.substr(posn, group), 10), 0]));
						const multiple = new Uint642(new Uint32Array([kPowersOfTen[group], 0]));
						out.times(multiple);
						out.plus(chunk);
						posn += group;
					}
					return out;
				}
				static convertArray(values) {
					const data = new Uint32Array(values.length * 2);
					for (let i = -1, n = values.length; ++i < n; ) {
						Uint642.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
					}
					return data;
				}
				static multiply(left, right) {
					const rtrn = new Uint642(new Uint32Array(left.buffer));
					return rtrn.times(right);
				}
				static add(left, right) {
					const rtrn = new Uint642(new Uint32Array(left.buffer));
					return rtrn.plus(right);
				}
			};
			exports.Uint64 = Uint642;
			var Int642 = class extends BaseInt64 {
				negate() {
					this.buffer[0] = ~this.buffer[0] + 1;
					this.buffer[1] = ~this.buffer[1];
					if (this.buffer[0] == 0) {
						++this.buffer[1];
					}
					return this;
				}
				times(other) {
					this._times(other);
					return this;
				}
				plus(other) {
					this._plus(other);
					return this;
				}
				lessThan(other) {
					const this_high = this.buffer[1] << 0;
					const other_high = other.buffer[1] << 0;
					return (
						this_high < other_high || (this_high === other_high && this.buffer[0] < other.buffer[0])
					);
				}
				static from(val, out_buffer = new Uint32Array(2)) {
					return Int642.fromString(typeof val === 'string' ? val : val.toString(), out_buffer);
				}
				static fromNumber(num, out_buffer = new Uint32Array(2)) {
					return Int642.fromString(num.toString(), out_buffer);
				}
				static fromString(str, out_buffer = new Uint32Array(2)) {
					const negate = str.startsWith('-');
					const length = str.length;
					const out = new Int642(out_buffer);
					for (let posn = negate ? 1 : 0; posn < length; ) {
						const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
						const chunk = new Int642(new Uint32Array([parseInt(str.substr(posn, group), 10), 0]));
						const multiple = new Int642(new Uint32Array([kPowersOfTen[group], 0]));
						out.times(multiple);
						out.plus(chunk);
						posn += group;
					}
					return negate ? out.negate() : out;
				}
				static convertArray(values) {
					const data = new Uint32Array(values.length * 2);
					for (let i = -1, n = values.length; ++i < n; ) {
						Int642.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
					}
					return data;
				}
				static multiply(left, right) {
					const rtrn = new Int642(new Uint32Array(left.buffer));
					return rtrn.times(right);
				}
				static add(left, right) {
					const rtrn = new Int642(new Uint32Array(left.buffer));
					return rtrn.plus(right);
				}
			};
			exports.Int64 = Int642;
			var Int128 = class {
				constructor(buffer) {
					this.buffer = buffer;
				}
				high() {
					return new Int642(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
				}
				low() {
					return new Int642(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
				}
				negate() {
					this.buffer[0] = ~this.buffer[0] + 1;
					this.buffer[1] = ~this.buffer[1];
					this.buffer[2] = ~this.buffer[2];
					this.buffer[3] = ~this.buffer[3];
					if (this.buffer[0] == 0) {
						++this.buffer[1];
					}
					if (this.buffer[1] == 0) {
						++this.buffer[2];
					}
					if (this.buffer[2] == 0) {
						++this.buffer[3];
					}
					return this;
				}
				times(other) {
					const L0 = new Uint642(new Uint32Array([this.buffer[3], 0]));
					const L1 = new Uint642(new Uint32Array([this.buffer[2], 0]));
					const L2 = new Uint642(new Uint32Array([this.buffer[1], 0]));
					const L3 = new Uint642(new Uint32Array([this.buffer[0], 0]));
					const R0 = new Uint642(new Uint32Array([other.buffer[3], 0]));
					const R1 = new Uint642(new Uint32Array([other.buffer[2], 0]));
					const R2 = new Uint642(new Uint32Array([other.buffer[1], 0]));
					const R3 = new Uint642(new Uint32Array([other.buffer[0], 0]));
					let product = Uint642.multiply(L3, R3);
					this.buffer[0] = product.low();
					const sum = new Uint642(new Uint32Array([product.high(), 0]));
					product = Uint642.multiply(L2, R3);
					sum.plus(product);
					product = Uint642.multiply(L3, R2);
					sum.plus(product);
					this.buffer[1] = sum.low();
					this.buffer[3] = sum.lessThan(product) ? 1 : 0;
					this.buffer[2] = sum.high();
					const high = new Uint642(
						new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)
					);
					high
						.plus(Uint642.multiply(L1, R3))
						.plus(Uint642.multiply(L2, R2))
						.plus(Uint642.multiply(L3, R1));
					this.buffer[3] += Uint642.multiply(L0, R3)
						.plus(Uint642.multiply(L1, R2))
						.plus(Uint642.multiply(L2, R1))
						.plus(Uint642.multiply(L3, R0))
						.low();
					return this;
				}
				plus(other) {
					const sums = new Uint32Array(4);
					sums[3] = (this.buffer[3] + other.buffer[3]) >>> 0;
					sums[2] = (this.buffer[2] + other.buffer[2]) >>> 0;
					sums[1] = (this.buffer[1] + other.buffer[1]) >>> 0;
					sums[0] = (this.buffer[0] + other.buffer[0]) >>> 0;
					if (sums[0] < this.buffer[0] >>> 0) {
						++sums[1];
					}
					if (sums[1] < this.buffer[1] >>> 0) {
						++sums[2];
					}
					if (sums[2] < this.buffer[2] >>> 0) {
						++sums[3];
					}
					this.buffer[3] = sums[3];
					this.buffer[2] = sums[2];
					this.buffer[1] = sums[1];
					this.buffer[0] = sums[0];
					return this;
				}
				hex() {
					return `${intAsHex(this.buffer[3])} ${intAsHex(this.buffer[2])} ${intAsHex(
						this.buffer[1]
					)} ${intAsHex(this.buffer[0])}`;
				}
				static multiply(left, right) {
					const rtrn = new Int128(new Uint32Array(left.buffer));
					return rtrn.times(right);
				}
				static add(left, right) {
					const rtrn = new Int128(new Uint32Array(left.buffer));
					return rtrn.plus(right);
				}
				static from(val, out_buffer = new Uint32Array(4)) {
					return Int128.fromString(typeof val === 'string' ? val : val.toString(), out_buffer);
				}
				static fromNumber(num, out_buffer = new Uint32Array(4)) {
					return Int128.fromString(num.toString(), out_buffer);
				}
				static fromString(str, out_buffer = new Uint32Array(4)) {
					const negate = str.startsWith('-');
					const length = str.length;
					const out = new Int128(out_buffer);
					for (let posn = negate ? 1 : 0; posn < length; ) {
						const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
						const chunk = new Int128(
							new Uint32Array([parseInt(str.substr(posn, group), 10), 0, 0, 0])
						);
						const multiple = new Int128(new Uint32Array([kPowersOfTen[group], 0, 0, 0]));
						out.times(multiple);
						out.plus(chunk);
						posn += group;
					}
					return negate ? out.negate() : out;
				}
				static convertArray(values) {
					const data = new Uint32Array(values.length * 4);
					for (let i = -1, n = values.length; ++i < n; ) {
						Int128.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 4 * 4 * i, 4));
					}
					return data;
				}
			};
			exports.Int128 = Int128;
		}
	});

	// ../../node_modules/apache-arrow/visitor/vectorloader.js
	var require_vectorloader = __commonJS({
		'../../node_modules/apache-arrow/visitor/vectorloader.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.JSONVectorLoader = exports.VectorLoader = void 0;
			var data_1 = require_data();
			var schema_1 = require_schema();
			var type_1 = require_type();
			var visitor_1 = require_visitor();
			var bit_1 = require_bit();
			var utf8_1 = require_utf8();
			var int_1 = require_int2();
			var enum_1 = require_enum();
			var buffer_1 = require_buffer();
			var VectorLoader = class extends visitor_1.Visitor {
				constructor(bytes, nodes, buffers, dictionaries) {
					super();
					this.nodesIndex = -1;
					this.buffersIndex = -1;
					this.bytes = bytes;
					this.nodes = nodes;
					this.buffers = buffers;
					this.dictionaries = dictionaries;
				}
				visit(node) {
					return super.visit(node instanceof schema_1.Field ? node.type : node);
				}
				visitNull(type, { length } = this.nextFieldNode()) {
					return data_1.Data.Null(type, 0, length);
				}
				visitBool(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.Bool(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readData(type)
					);
				}
				visitInt(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.Int(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readData(type)
					);
				}
				visitFloat(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.Float(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readData(type)
					);
				}
				visitUtf8(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.Utf8(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readOffsets(type),
						this.readData(type)
					);
				}
				visitBinary(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.Binary(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readOffsets(type),
						this.readData(type)
					);
				}
				visitFixedSizeBinary(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.FixedSizeBinary(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readData(type)
					);
				}
				visitDate(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.Date(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readData(type)
					);
				}
				visitTimestamp(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.Timestamp(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readData(type)
					);
				}
				visitTime(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.Time(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readData(type)
					);
				}
				visitDecimal(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.Decimal(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readData(type)
					);
				}
				visitList(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.List(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readOffsets(type),
						this.visit(type.children[0])
					);
				}
				visitStruct(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.Struct(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.visitMany(type.children)
					);
				}
				visitUnion(type) {
					return type.mode === enum_1.UnionMode.Sparse
						? this.visitSparseUnion(type)
						: this.visitDenseUnion(type);
				}
				visitDenseUnion(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.Union(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readTypeIds(type),
						this.readOffsets(type),
						this.visitMany(type.children)
					);
				}
				visitSparseUnion(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.Union(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readTypeIds(type),
						this.visitMany(type.children)
					);
				}
				visitDictionary(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.Dictionary(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readData(type.indices),
						this.readDictionary(type)
					);
				}
				visitInterval(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.Interval(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readData(type)
					);
				}
				visitFixedSizeList(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.FixedSizeList(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.visit(type.children[0])
					);
				}
				visitMap(type, { length, nullCount } = this.nextFieldNode()) {
					return data_1.Data.Map(
						type,
						0,
						length,
						nullCount,
						this.readNullBitmap(type, nullCount),
						this.readOffsets(type),
						this.visit(type.children[0])
					);
				}
				nextFieldNode() {
					return this.nodes[++this.nodesIndex];
				}
				nextBufferRange() {
					return this.buffers[++this.buffersIndex];
				}
				readNullBitmap(type, nullCount, buffer = this.nextBufferRange()) {
					return (nullCount > 0 && this.readData(type, buffer)) || new Uint8Array(0);
				}
				readOffsets(type, buffer) {
					return this.readData(type, buffer);
				}
				readTypeIds(type, buffer) {
					return this.readData(type, buffer);
				}
				readData(_type, { length, offset } = this.nextBufferRange()) {
					return this.bytes.subarray(offset, offset + length);
				}
				readDictionary(type) {
					return this.dictionaries.get(type.id);
				}
			};
			exports.VectorLoader = VectorLoader;
			var JSONVectorLoader = class extends VectorLoader {
				constructor(sources, nodes, buffers, dictionaries) {
					super(new Uint8Array(0), nodes, buffers, dictionaries);
					this.sources = sources;
				}
				readNullBitmap(_type, nullCount, { offset } = this.nextBufferRange()) {
					return nullCount <= 0 ? new Uint8Array(0) : bit_1.packBools(this.sources[offset]);
				}
				readOffsets(_type, { offset } = this.nextBufferRange()) {
					return buffer_1.toArrayBufferView(
						Uint8Array,
						buffer_1.toArrayBufferView(Int32Array, this.sources[offset])
					);
				}
				readTypeIds(type, { offset } = this.nextBufferRange()) {
					return buffer_1.toArrayBufferView(
						Uint8Array,
						buffer_1.toArrayBufferView(type.ArrayType, this.sources[offset])
					);
				}
				readData(type, { offset } = this.nextBufferRange()) {
					const { sources } = this;
					if (type_1.DataType.isTimestamp(type)) {
						return buffer_1.toArrayBufferView(
							Uint8Array,
							int_1.Int64.convertArray(sources[offset])
						);
					} else if (
						(type_1.DataType.isInt(type) || type_1.DataType.isTime(type)) &&
						type.bitWidth === 64
					) {
						return buffer_1.toArrayBufferView(
							Uint8Array,
							int_1.Int64.convertArray(sources[offset])
						);
					} else if (type_1.DataType.isDate(type) && type.unit === enum_1.DateUnit.MILLISECOND) {
						return buffer_1.toArrayBufferView(
							Uint8Array,
							int_1.Int64.convertArray(sources[offset])
						);
					} else if (type_1.DataType.isDecimal(type)) {
						return buffer_1.toArrayBufferView(
							Uint8Array,
							int_1.Int128.convertArray(sources[offset])
						);
					} else if (type_1.DataType.isBinary(type) || type_1.DataType.isFixedSizeBinary(type)) {
						return binaryDataFromJSON(sources[offset]);
					} else if (type_1.DataType.isBool(type)) {
						return bit_1.packBools(sources[offset]);
					} else if (type_1.DataType.isUtf8(type)) {
						return utf8_1.encodeUtf8(sources[offset].join(''));
					}
					return buffer_1.toArrayBufferView(
						Uint8Array,
						buffer_1.toArrayBufferView(
							type.ArrayType,
							sources[offset].map((x) => +x)
						)
					);
				}
			};
			exports.JSONVectorLoader = JSONVectorLoader;
			function binaryDataFromJSON(values) {
				const joined = values.join('');
				const data = new Uint8Array(joined.length / 2);
				for (let i = 0; i < joined.length; i += 2) {
					data[i >> 1] = parseInt(joined.substr(i, 2), 16);
				}
				return data;
			}
		}
	});

	// ../../node_modules/apache-arrow/vector/row.js
	var require_row = __commonJS({
		'../../node_modules/apache-arrow/vector/row.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.StructRow = exports.MapRow = void 0;
			var pretty_1 = require_pretty();
			var kParent = Symbol.for('parent');
			var kRowIndex = Symbol.for('rowIndex');
			var kKeyToIdx = Symbol.for('keyToIdx');
			var kIdxToVal = Symbol.for('idxToVal');
			var kCustomInspect = Symbol.for('nodejs.util.inspect.custom');
			var Row = class {
				constructor(parent, numKeys) {
					this[kParent] = parent;
					this.size = numKeys;
				}
				entries() {
					return this[Symbol.iterator]();
				}
				has(key) {
					return this.get(key) !== void 0;
				}
				get(key) {
					let val = void 0;
					if (key != null) {
						const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = /* @__PURE__ */ new Map());
						let idx = ktoi.get(key);
						if (idx !== void 0) {
							const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
							(val = itov[idx]) !== void 0 || (itov[idx] = val = this.getValue(idx));
						} else if ((idx = this.getIndex(key)) > -1) {
							ktoi.set(key, idx);
							const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
							(val = itov[idx]) !== void 0 || (itov[idx] = val = this.getValue(idx));
						}
					}
					return val;
				}
				set(key, val) {
					if (key != null) {
						const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = /* @__PURE__ */ new Map());
						let idx = ktoi.get(key);
						if (idx === void 0) {
							ktoi.set(key, (idx = this.getIndex(key)));
						}
						if (idx > -1) {
							const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
							itov[idx] = this.setValue(idx, val);
						}
					}
					return this;
				}
				clear() {
					throw new Error(`Clearing ${this[Symbol.toStringTag]} not supported.`);
				}
				delete(_) {
					throw new Error(`Deleting ${this[Symbol.toStringTag]} values not supported.`);
				}
				*[Symbol.iterator]() {
					const ki = this.keys();
					const vi = this.values();
					const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = /* @__PURE__ */ new Map());
					const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
					for (let k, v, i = 0, kr, vr; !((kr = ki.next()).done || (vr = vi.next()).done); ++i) {
						k = kr.value;
						v = vr.value;
						itov[i] = v;
						ktoi.has(k) || ktoi.set(k, i);
						yield [k, v];
					}
				}
				forEach(callbackfn, thisArg) {
					const ki = this.keys();
					const vi = this.values();
					const callback =
						thisArg === void 0 ? callbackfn : (v, k, m) => callbackfn.call(thisArg, v, k, m);
					const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = /* @__PURE__ */ new Map());
					const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
					for (let k, v, i = 0, kr, vr; !((kr = ki.next()).done || (vr = vi.next()).done); ++i) {
						k = kr.value;
						v = vr.value;
						itov[i] = v;
						ktoi.has(k) || ktoi.set(k, i);
						callback(v, k, this);
					}
				}
				toArray() {
					return [...this.values()];
				}
				toJSON() {
					const obj = {};
					this.forEach((val, key) => (obj[key] = val));
					return obj;
				}
				inspect() {
					return this.toString();
				}
				[kCustomInspect]() {
					return this.toString();
				}
				toString() {
					const str = [];
					this.forEach((val, key) => {
						key = pretty_1.valueToString(key);
						val = pretty_1.valueToString(val);
						str.push(`${key}: ${val}`);
					});
					return `{ ${str.join(', ')} }`;
				}
			};
			Row[Symbol.toStringTag] = ((proto) => {
				Object.defineProperties(proto, {
					size: { writable: true, enumerable: false, configurable: false, value: 0 },
					[kParent]: { writable: true, enumerable: false, configurable: false, value: null },
					[kRowIndex]: { writable: true, enumerable: false, configurable: false, value: -1 }
				});
				return (proto[Symbol.toStringTag] = 'Row');
			})(Row.prototype);
			var MapRow = class extends Row {
				constructor(slice) {
					super(slice, slice.length);
					return createRowProxy(this);
				}
				keys() {
					return this[kParent].getChildAt(0)[Symbol.iterator]();
				}
				values() {
					return this[kParent].getChildAt(1)[Symbol.iterator]();
				}
				getKey(idx) {
					return this[kParent].getChildAt(0).get(idx);
				}
				getIndex(key) {
					return this[kParent].getChildAt(0).indexOf(key);
				}
				getValue(index) {
					return this[kParent].getChildAt(1).get(index);
				}
				setValue(index, value) {
					this[kParent].getChildAt(1).set(index, value);
				}
			};
			exports.MapRow = MapRow;
			var StructRow = class extends Row {
				constructor(parent) {
					super(parent, parent.type.children.length);
					return defineRowProxyProperties(this);
				}
				*keys() {
					for (const field of this[kParent].type.children) {
						yield field.name;
					}
				}
				*values() {
					for (const field of this[kParent].type.children) {
						yield this[field.name];
					}
				}
				getKey(idx) {
					return this[kParent].type.children[idx].name;
				}
				getIndex(key) {
					return this[kParent].type.children.findIndex((f) => f.name === key);
				}
				getValue(index) {
					return this[kParent].getChildAt(index).get(this[kRowIndex]);
				}
				setValue(index, value) {
					return this[kParent].getChildAt(index).set(this[kRowIndex], value);
				}
			};
			exports.StructRow = StructRow;
			Object.setPrototypeOf(Row.prototype, Map.prototype);
			var defineRowProxyProperties = (() => {
				const desc = { enumerable: true, configurable: false, get: null, set: null };
				return (row) => {
					let idx = -1;
					const ktoi = row[kKeyToIdx] || (row[kKeyToIdx] = /* @__PURE__ */ new Map());
					const getter = (key) =>
						function () {
							return this.get(key);
						};
					const setter = (key) =>
						function (val) {
							return this.set(key, val);
						};
					for (const key of row.keys()) {
						ktoi.set(key, ++idx);
						desc.get = getter(key);
						desc.set = setter(key);
						Object.prototype.hasOwnProperty.call(row, key) ||
							((desc.enumerable = true), Object.defineProperty(row, key, desc));
						Object.prototype.hasOwnProperty.call(row, idx) ||
							((desc.enumerable = false), Object.defineProperty(row, idx, desc));
					}
					desc.get = desc.set = null;
					return row;
				};
			})();
			var createRowProxy = (() => {
				if (typeof Proxy === 'undefined') {
					return defineRowProxyProperties;
				}
				const has = Row.prototype.has;
				const get = Row.prototype.get;
				const set = Row.prototype.set;
				const getKey = Row.prototype.getKey;
				const RowProxyHandler = {
					isExtensible() {
						return false;
					},
					deleteProperty() {
						return false;
					},
					preventExtensions() {
						return true;
					},
					ownKeys(row) {
						return [...row.keys()].map((x) => `${x}`);
					},
					has(row, key) {
						switch (key) {
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
							case kParent:
							case kRowIndex:
							case kIdxToVal:
							case kKeyToIdx:
							case kCustomInspect:
								return true;
						}
						if (typeof key === 'number' && !row.has(key)) {
							key = row.getKey(key);
						}
						return row.has(key);
					},
					get(row, key, receiver) {
						switch (key) {
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
							case kParent:
							case kRowIndex:
							case kIdxToVal:
							case kKeyToIdx:
							case kCustomInspect:
								return Reflect.get(row, key, receiver);
						}
						if (typeof key === 'number' && !has.call(receiver, key)) {
							key = getKey.call(receiver, key);
						}
						return get.call(receiver, key);
					},
					set(row, key, val, receiver) {
						switch (key) {
							case kParent:
							case kRowIndex:
							case kIdxToVal:
							case kKeyToIdx:
								return Reflect.set(row, key, val, receiver);
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
								return false;
						}
						if (typeof key === 'number' && !has.call(receiver, key)) {
							key = getKey.call(receiver, key);
						}
						return has.call(receiver, key) ? !!set.call(receiver, key, val) : false;
					}
				};
				return (row) => new Proxy(row, RowProxyHandler);
			})();
		}
	});

	// ../../node_modules/apache-arrow/util/vector.js
	var require_vector2 = __commonJS({
		'../../node_modules/apache-arrow/util/vector.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.createElementComparator = exports.clampRange = exports.clampIndex = void 0;
			var vector_1 = require_vector();
			var row_1 = require_row();
			var buffer_1 = require_buffer();
			var compat_1 = require_compat();
			function clampIndex(source, index, then) {
				const length = source.length;
				const adjust = index > -1 ? index : length + (index % length);
				return then ? then(source, adjust) : adjust;
			}
			exports.clampIndex = clampIndex;
			var tmp;
			function clampRange(source, begin, end, then) {
				const { length: len = 0 } = source;
				let lhs = typeof begin !== 'number' ? 0 : begin;
				let rhs = typeof end !== 'number' ? len : end;
				lhs < 0 && (lhs = ((lhs % len) + len) % len);
				rhs < 0 && (rhs = ((rhs % len) + len) % len);
				rhs < lhs && ((tmp = lhs), (lhs = rhs), (rhs = tmp));
				rhs > len && (rhs = len);
				return then ? then(source, lhs, rhs) : [lhs, rhs];
			}
			exports.clampRange = clampRange;
			var big0 = compat_1.BigIntAvailable ? compat_1.BigInt(0) : 0;
			var isNaNFast = (value) => value !== value;
			function createElementComparator(search) {
				const typeofSearch = typeof search;
				if (typeofSearch !== 'object' || search === null) {
					if (isNaNFast(search)) {
						return isNaNFast;
					}
					return typeofSearch !== 'bigint'
						? (value) => value === search
						: (value) => big0 + value === search;
				}
				if (search instanceof Date) {
					const valueOfSearch = search.valueOf();
					return (value) => (value instanceof Date ? value.valueOf() === valueOfSearch : false);
				}
				if (ArrayBuffer.isView(search)) {
					return (value) => (value ? buffer_1.compareArrayLike(search, value) : false);
				}
				if (search instanceof Map) {
					return creatMapComparator(search);
				}
				if (Array.isArray(search)) {
					return createArrayLikeComparator(search);
				}
				if (search instanceof vector_1.Vector) {
					return createVectorComparator(search);
				}
				return createObjectComparator(search);
			}
			exports.createElementComparator = createElementComparator;
			function createArrayLikeComparator(lhs) {
				const comparators = [];
				for (let i = -1, n = lhs.length; ++i < n; ) {
					comparators[i] = createElementComparator(lhs[i]);
				}
				return createSubElementsComparator(comparators);
			}
			function creatMapComparator(lhs) {
				let i = -1;
				const comparators = [];
				lhs.forEach((v) => (comparators[++i] = createElementComparator(v)));
				return createSubElementsComparator(comparators);
			}
			function createVectorComparator(lhs) {
				const comparators = [];
				for (let i = -1, n = lhs.length; ++i < n; ) {
					comparators[i] = createElementComparator(lhs.get(i));
				}
				return createSubElementsComparator(comparators);
			}
			function createObjectComparator(lhs) {
				const keys = Object.keys(lhs);
				if (keys.length === 0) {
					return () => false;
				}
				const comparators = [];
				for (let i = -1, n = keys.length; ++i < n; ) {
					comparators[i] = createElementComparator(lhs[keys[i]]);
				}
				return createSubElementsComparator(comparators, keys);
			}
			function createSubElementsComparator(comparators, keys) {
				return (rhs) => {
					if (!rhs || typeof rhs !== 'object') {
						return false;
					}
					switch (rhs.constructor) {
						case Array:
							return compareArray(comparators, rhs);
						case Map:
						case row_1.MapRow:
						case row_1.StructRow:
							return compareObject(comparators, rhs, rhs.keys());
						case Object:
						case void 0:
							return compareObject(comparators, rhs, keys || Object.keys(rhs));
					}
					return rhs instanceof vector_1.Vector ? compareVector(comparators, rhs) : false;
				};
			}
			function compareArray(comparators, arr) {
				const n = comparators.length;
				if (arr.length !== n) {
					return false;
				}
				for (let i = -1; ++i < n; ) {
					if (!comparators[i](arr[i])) {
						return false;
					}
				}
				return true;
			}
			function compareVector(comparators, vec) {
				const n = comparators.length;
				if (vec.length !== n) {
					return false;
				}
				for (let i = -1; ++i < n; ) {
					if (!comparators[i](vec.get(i))) {
						return false;
					}
				}
				return true;
			}
			function compareObject(comparators, obj, keys) {
				const lKeyItr = keys[Symbol.iterator]();
				const rKeyItr = obj instanceof Map ? obj.keys() : Object.keys(obj)[Symbol.iterator]();
				const rValItr = obj instanceof Map ? obj.values() : Object.values(obj)[Symbol.iterator]();
				let i = 0;
				const n = comparators.length;
				let rVal = rValItr.next();
				let lKey = lKeyItr.next();
				let rKey = rKeyItr.next();
				for (
					;
					i < n && !lKey.done && !rKey.done && !rVal.done;
					++i, lKey = lKeyItr.next(), rKey = rKeyItr.next(), rVal = rValItr.next()
				) {
					if (lKey.value !== rKey.value || !comparators[i](rVal.value)) {
						break;
					}
				}
				if (i === n && lKey.done && rKey.done && rVal.done) {
					return true;
				}
				lKeyItr.return && lKeyItr.return();
				rKeyItr.return && rKeyItr.return();
				rValItr.return && rValItr.return();
				return false;
			}
		}
	});

	// ../../node_modules/apache-arrow/util/args.js
	var require_args = __commonJS({
		'../../node_modules/apache-arrow/util/args.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.selectColumnChildrenArgs =
				exports.selectVectorChildrenArgs =
				exports.selectChunkArgs =
				exports.selectFieldArgs =
				exports.selectColumnArgs =
				exports.selectArgs =
				exports.arrayTypeToDataType =
				exports.isTypedArray =
					void 0;
			var data_1 = require_data();
			var schema_1 = require_schema();
			var column_1 = require_column();
			var vector_1 = require_vector();
			var type_1 = require_type();
			var chunked_1 = require_chunked();
			var isArray = Array.isArray;
			function isTypedArray2(arr) {
				return ArrayBuffer.isView(arr) && 'BYTES_PER_ELEMENT' in arr;
			}
			exports.isTypedArray = isTypedArray2;
			function arrayTypeToDataType(ctor) {
				switch (ctor) {
					case Int8Array:
						return type_1.Int8;
					case Int16Array:
						return type_1.Int16;
					case Int32Array:
						return type_1.Int32;
					case BigInt64Array:
						return type_1.Int64;
					case Uint8Array:
						return type_1.Uint8;
					case Uint16Array:
						return type_1.Uint16;
					case Uint32Array:
						return type_1.Uint32;
					case BigUint64Array:
						return type_1.Uint64;
					case Float32Array:
						return type_1.Float32;
					case Float64Array:
						return type_1.Float64;
					default:
						return null;
				}
			}
			exports.arrayTypeToDataType = arrayTypeToDataType;
			function vectorFromTypedArray(array) {
				const ArrowType = arrayTypeToDataType(array.constructor);
				if (!ArrowType) {
					throw new TypeError('Unrecognized Array input');
				}
				const type = new ArrowType();
				const data = data_1.Data.new(type, 0, array.length, 0, [void 0, array]);
				return vector_1.Vector.new(data);
			}
			exports.selectArgs = (Ctor, vals) => _selectArgs(Ctor, vals, [], 0);
			exports.selectColumnArgs = (args) => {
				const [fields, values] = _selectFieldArgs(args, [[], []]);
				return values.map((x, i) =>
					x instanceof column_1.Column
						? column_1.Column.new(x.field.clone(fields[i]), x)
						: x instanceof vector_1.Vector
						? column_1.Column.new(fields[i], x)
						: isTypedArray2(x)
						? column_1.Column.new(fields[i], vectorFromTypedArray(x))
						: column_1.Column.new(fields[i], [])
				);
			};
			exports.selectFieldArgs = (args) => _selectFieldArgs(args, [[], []]);
			exports.selectChunkArgs = (Ctor, vals) => _selectChunkArgs(Ctor, vals, [], 0);
			exports.selectVectorChildrenArgs = (Ctor, vals) =>
				_selectVectorChildrenArgs(Ctor, vals, [], 0);
			exports.selectColumnChildrenArgs = (Ctor, vals) =>
				_selectColumnChildrenArgs(Ctor, vals, [], 0);
			function _selectArgs(Ctor, vals, res, idx) {
				let value,
					j = idx;
				let i = -1;
				const n = vals.length;
				while (++i < n) {
					if (isArray((value = vals[i]))) {
						j = _selectArgs(Ctor, value, res, j).length;
					} else if (value instanceof Ctor) {
						res[j++] = value;
					}
				}
				return res;
			}
			function _selectChunkArgs(Ctor, vals, res, idx) {
				let value,
					j = idx;
				let i = -1;
				const n = vals.length;
				while (++i < n) {
					if (isArray((value = vals[i]))) {
						j = _selectChunkArgs(Ctor, value, res, j).length;
					} else if (value instanceof chunked_1.Chunked) {
						j = _selectChunkArgs(Ctor, value.chunks, res, j).length;
					} else if (value instanceof Ctor) {
						res[j++] = value;
					}
				}
				return res;
			}
			function _selectVectorChildrenArgs(Ctor, vals, res, idx) {
				let value,
					j = idx;
				let i = -1;
				const n = vals.length;
				while (++i < n) {
					if (isArray((value = vals[i]))) {
						j = _selectVectorChildrenArgs(Ctor, value, res, j).length;
					} else if (value instanceof Ctor) {
						j = _selectArgs(
							vector_1.Vector,
							value.schema.fields.map((_, i2) => value.getChildAt(i2)),
							res,
							j
						).length;
					} else if (value instanceof vector_1.Vector) {
						res[j++] = value;
					}
				}
				return res;
			}
			function _selectColumnChildrenArgs(Ctor, vals, res, idx) {
				let value,
					j = idx;
				let i = -1;
				const n = vals.length;
				while (++i < n) {
					if (isArray((value = vals[i]))) {
						j = _selectColumnChildrenArgs(Ctor, value, res, j).length;
					} else if (value instanceof Ctor) {
						j = _selectArgs(
							column_1.Column,
							value.schema.fields.map((f, i2) => column_1.Column.new(f, value.getChildAt(i2))),
							res,
							j
						).length;
					} else if (value instanceof column_1.Column) {
						res[j++] = value;
					}
				}
				return res;
			}
			var toKeysAndValues = (xs, [k, v], i) => ((xs[0][i] = k), (xs[1][i] = v), xs);
			function _selectFieldArgs(vals, ret) {
				let keys;
				let n;
				switch ((n = vals.length)) {
					case 0:
						return ret;
					case 1:
						keys = ret[0];
						if (!vals[0]) {
							return ret;
						}
						if (isArray(vals[0])) {
							return _selectFieldArgs(vals[0], ret);
						}
						if (
							!(
								vals[0] instanceof data_1.Data ||
								vals[0] instanceof vector_1.Vector ||
								isTypedArray2(vals[0]) ||
								vals[0] instanceof type_1.DataType
							)
						) {
							[keys, vals] = Object.entries(vals[0]).reduce(toKeysAndValues, ret);
						}
						break;
					default:
						!isArray((keys = vals[n - 1]))
							? ((vals = isArray(vals[0]) ? vals[0] : vals), (keys = []))
							: (vals = isArray(vals[0]) ? vals[0] : vals.slice(0, n - 1));
				}
				let fieldIndex = -1;
				let valueIndex = -1;
				let idx = -1;
				const len = vals.length;
				let field;
				let val;
				const [fields, values] = ret;
				while (++idx < len) {
					val = vals[idx];
					if (val instanceof column_1.Column && (values[++valueIndex] = val)) {
						fields[++fieldIndex] = val.field.clone(keys[idx], val.type, true);
					} else {
						({ [idx]: field = idx } = keys);
						if (val instanceof type_1.DataType && (values[++valueIndex] = val)) {
							fields[++fieldIndex] = schema_1.Field.new(field, val, true);
						} else if (
							(val === null || val === void 0 ? void 0 : val.type) &&
							(values[++valueIndex] = val)
						) {
							val instanceof data_1.Data && (values[valueIndex] = val = vector_1.Vector.new(val));
							fields[++fieldIndex] = schema_1.Field.new(field, val.type, true);
						}
					}
				}
				return ret;
			}
		}
	});

	// ../../node_modules/apache-arrow/vector/chunked.js
	var require_chunked = __commonJS({
		'../../node_modules/apache-arrow/vector/chunked.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Chunked = void 0;
			var vector_1 = require_vector2();
			var type_1 = require_type();
			var args_1 = require_args();
			var vector_2 = require_vector();
			var ChunkedIterator = class {
				constructor(chunks) {
					this.chunks = chunks;
					this.chunkIndex = 0;
					this.chunkIterator = this.getChunkIterator();
				}
				next() {
					while (this.chunkIndex < this.chunks.length) {
						const next = this.chunkIterator.next();
						if (!next.done) {
							return next;
						}
						if (++this.chunkIndex < this.chunks.length) {
							this.chunkIterator = this.getChunkIterator();
						}
					}
					return { done: true, value: null };
				}
				getChunkIterator() {
					return this.chunks[this.chunkIndex][Symbol.iterator]();
				}
				[Symbol.iterator]() {
					return this;
				}
			};
			var Chunked2 = class extends vector_2.AbstractVector {
				constructor(type, chunks = [], offsets = calculateOffsets(chunks)) {
					super();
					this._nullCount = -1;
					this._type = type;
					this._chunks = chunks;
					this._chunkOffsets = offsets;
					this._length = offsets[offsets.length - 1];
					this._numChildren = (this._type.children || []).length;
				}
				static flatten(...vectors) {
					return args_1.selectChunkArgs(vector_2.Vector, vectors);
				}
				static concat(...vectors) {
					const chunks = Chunked2.flatten(...vectors);
					return new Chunked2(chunks[0].type, chunks);
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
					return this._chunks.reduce((byteLength, chunk) => byteLength + chunk.byteLength, 0);
				}
				get nullCount() {
					let nullCount = this._nullCount;
					if (nullCount < 0) {
						this._nullCount = nullCount = this._chunks.reduce(
							(x, { nullCount: nullCount2 }) => x + nullCount2,
							0
						);
					}
					return nullCount;
				}
				get indices() {
					if (type_1.DataType.isDictionary(this._type)) {
						if (!this._indices) {
							const chunks = this._chunks;
							this._indices =
								chunks.length === 1
									? chunks[0].indices
									: Chunked2.concat(...chunks.map((x) => x.indices));
						}
						return this._indices;
					}
					return null;
				}
				get dictionary() {
					if (type_1.DataType.isDictionary(this._type)) {
						return this._chunks[this._chunks.length - 1].data.dictionary;
					}
					return null;
				}
				[Symbol.iterator]() {
					return new ChunkedIterator(this._chunks);
				}
				clone(chunks = this._chunks) {
					return new Chunked2(this._type, chunks);
				}
				concat(...others) {
					return this.clone(Chunked2.flatten(this, ...others));
				}
				slice(begin, end) {
					return vector_1.clampRange(this, begin, end, this._sliceInternal);
				}
				getChildAt(index) {
					if (index < 0 || index >= this._numChildren) {
						return null;
					}
					const columns = this._children || (this._children = []);
					let child, field, chunks;
					if ((child = columns[index])) {
						return child;
					}
					if ((field = (this._type.children || [])[index])) {
						chunks = this._chunks
							.map((vector) => vector.getChildAt(index))
							.filter((vec) => vec != null);
						if (chunks.length > 0) {
							return (columns[index] = new Chunked2(field.type, chunks));
						}
					}
					return null;
				}
				search(index, then) {
					const idx = index;
					const offsets = this._chunkOffsets;
					let rhs = offsets.length - 1;
					if (idx < 0) {
						return null;
					}
					if (idx >= offsets[rhs]) {
						return null;
					}
					if (rhs <= 1) {
						return then ? then(this, 0, idx) : [0, idx];
					}
					let lhs = 0,
						pos = 0,
						mid = 0;
					do {
						if (lhs + 1 === rhs) {
							return then ? then(this, lhs, idx - pos) : [lhs, idx - pos];
						}
						mid = (lhs + (rhs - lhs) / 2) | 0;
						idx >= offsets[mid] ? (lhs = mid) : (rhs = mid);
					} while (idx < offsets[rhs] && idx >= (pos = offsets[lhs]));
					return null;
				}
				isValid(index) {
					return !!this.search(index, this.isValidInternal);
				}
				get(index) {
					return this.search(index, this.getInternal);
				}
				set(index, value) {
					this.search(index, ({ chunks }, i, j) => chunks[i].set(j, value));
				}
				indexOf(element, offset) {
					if (offset && typeof offset === 'number') {
						return this.search(offset, (self2, i, j) => this.indexOfInternal(self2, i, j, element));
					}
					return this.indexOfInternal(this, 0, Math.max(0, offset || 0), element);
				}
				toArray() {
					const { chunks } = this;
					const n = chunks.length;
					let ArrayType = this._type.ArrayType;
					if (n <= 0) {
						return new ArrayType(0);
					}
					if (n <= 1) {
						return chunks[0].toArray();
					}
					let len = 0;
					const src = new Array(n);
					for (let i = -1; ++i < n; ) {
						len += (src[i] = chunks[i].toArray()).length;
					}
					if (ArrayType !== src[0].constructor) {
						ArrayType = src[0].constructor;
					}
					const dst = new ArrayType(len);
					const set = ArrayType === Array ? arraySet : typedSet;
					for (let i = -1, idx = 0; ++i < n; ) {
						idx = set(src[i], dst, idx);
					}
					return dst;
				}
				getInternal({ _chunks }, i, j) {
					return _chunks[i].get(j);
				}
				isValidInternal({ _chunks }, i, j) {
					return _chunks[i].isValid(j);
				}
				indexOfInternal({ _chunks }, chunkIndex, fromIndex, element) {
					let i = chunkIndex - 1;
					const n = _chunks.length;
					let start = fromIndex,
						offset = 0,
						found = -1;
					while (++i < n) {
						if (~(found = _chunks[i].indexOf(element, start))) {
							return offset + found;
						}
						start = 0;
						offset += _chunks[i].length;
					}
					return -1;
				}
				_sliceInternal(self2, begin, end) {
					const slices = [];
					const { chunks, _chunkOffsets: chunkOffsets } = self2;
					for (let i = -1, n = chunks.length; ++i < n; ) {
						const chunk = chunks[i];
						const chunkLength = chunk.length;
						const chunkOffset = chunkOffsets[i];
						if (chunkOffset >= end) {
							break;
						}
						if (begin >= chunkOffset + chunkLength) {
							continue;
						}
						if (chunkOffset >= begin && chunkOffset + chunkLength <= end) {
							slices.push(chunk);
							continue;
						}
						const from = Math.max(0, begin - chunkOffset);
						const to = Math.min(end - chunkOffset, chunkLength);
						slices.push(chunk.slice(from, to));
					}
					return self2.clone(slices);
				}
			};
			exports.Chunked = Chunked2;
			function calculateOffsets(vectors) {
				const offsets = new Uint32Array((vectors || []).length + 1);
				let offset = (offsets[0] = 0);
				const length = offsets.length;
				for (let index = 0; ++index < length; ) {
					offsets[index] = offset += vectors[index - 1].length;
				}
				return offsets;
			}
			var typedSet = (src, dst, offset) => {
				dst.set(src, offset);
				return offset + src.length;
			};
			var arraySet = (src, dst, offset) => {
				let idx = offset;
				for (let i = -1, n = src.length; ++i < n; ) {
					dst[idx++] = src[i];
				}
				return idx;
			};
		}
	});

	// ../../node_modules/apache-arrow/column.js
	var require_column = __commonJS({
		'../../node_modules/apache-arrow/column.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Column = void 0;
			var schema_1 = require_schema();
			var vector_1 = require_vector();
			var chunked_1 = require_chunked();
			var Column5 = class extends chunked_1.Chunked {
				constructor(field, vectors = [], offsets) {
					vectors = chunked_1.Chunked.flatten(...vectors);
					super(field.type, vectors, offsets);
					this._field = field;
					if (vectors.length === 1 && !(this instanceof SingleChunkColumn)) {
						return new SingleChunkColumn(field, vectors[0], this._chunkOffsets);
					}
				}
				static new(...args) {
					let [field, data, ...rest] = args;
					if (typeof field !== 'string' && !(field instanceof schema_1.Field)) {
						data = field;
						field = '';
					}
					const chunks = chunked_1.Chunked.flatten(
						Array.isArray(data)
							? [...data, ...rest]
							: data instanceof vector_1.Vector
							? [data, ...rest]
							: [vector_1.Vector.new(data, ...rest)]
					);
					if (typeof field === 'string') {
						const type = chunks[0].data.type;
						field = new schema_1.Field(field, type, true);
					} else if (!field.nullable && chunks.some(({ nullCount }) => nullCount > 0)) {
						field = field.clone({ nullable: true });
					}
					return new Column5(field, chunks);
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
				clone(chunks = this._chunks) {
					return new Column5(this._field, chunks);
				}
				getChildAt(index) {
					if (index < 0 || index >= this.numChildren) {
						return null;
					}
					const columns = this._children || (this._children = []);
					let column, field, chunks;
					if ((column = columns[index])) {
						return column;
					}
					if ((field = (this.type.children || [])[index])) {
						chunks = this._chunks
							.map((vector) => vector.getChildAt(index))
							.filter((vec) => vec != null);
						if (chunks.length > 0) {
							return (columns[index] = new Column5(field, chunks));
						}
					}
					return null;
				}
			};
			exports.Column = Column5;
			var SingleChunkColumn = class extends Column5 {
				constructor(field, vector, offsets) {
					super(field, [vector], offsets);
					this._chunk = vector;
				}
				search(index, then) {
					return then ? then(this, 0, index) : [0, index];
				}
				isValid(index) {
					return this._chunk.isValid(index);
				}
				get(index) {
					return this._chunk.get(index);
				}
				set(index, value) {
					this._chunk.set(index, value);
				}
				indexOf(element, offset) {
					return this._chunk.indexOf(element, offset);
				}
			};
		}
	});

	// ../../node_modules/apache-arrow/visitor/typeassembler.js
	var require_typeassembler = __commonJS({
		'../../node_modules/apache-arrow/visitor/typeassembler.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.instance = exports.TypeAssembler = void 0;
			var flatbuffers_1 = require_flatbuffers();
			var Long = flatbuffers_1.flatbuffers.Long;
			var visitor_1 = require_visitor();
			var Schema_1 = require_Schema();
			var TypeAssembler = class extends visitor_1.Visitor {
				visit(node, builder) {
					return node == null || builder == null ? void 0 : super.visit(node, builder);
				}
				visitNull(_node, b) {
					Schema_1.Null.startNull(b);
					return Schema_1.Null.endNull(b);
				}
				visitInt(node, b) {
					Schema_1.Int.startInt(b);
					Schema_1.Int.addBitWidth(b, node.bitWidth);
					Schema_1.Int.addIsSigned(b, node.isSigned);
					return Schema_1.Int.endInt(b);
				}
				visitFloat(node, b) {
					Schema_1.FloatingPoint.startFloatingPoint(b);
					Schema_1.FloatingPoint.addPrecision(b, node.precision);
					return Schema_1.FloatingPoint.endFloatingPoint(b);
				}
				visitBinary(_node, b) {
					Schema_1.Binary.startBinary(b);
					return Schema_1.Binary.endBinary(b);
				}
				visitBool(_node, b) {
					Schema_1.Bool.startBool(b);
					return Schema_1.Bool.endBool(b);
				}
				visitUtf8(_node, b) {
					Schema_1.Utf8.startUtf8(b);
					return Schema_1.Utf8.endUtf8(b);
				}
				visitDecimal(node, b) {
					Schema_1.Decimal.startDecimal(b);
					Schema_1.Decimal.addScale(b, node.scale);
					Schema_1.Decimal.addPrecision(b, node.precision);
					return Schema_1.Decimal.endDecimal(b);
				}
				visitDate(node, b) {
					Schema_1.Date.startDate(b);
					Schema_1.Date.addUnit(b, node.unit);
					return Schema_1.Date.endDate(b);
				}
				visitTime(node, b) {
					Schema_1.Time.startTime(b);
					Schema_1.Time.addUnit(b, node.unit);
					Schema_1.Time.addBitWidth(b, node.bitWidth);
					return Schema_1.Time.endTime(b);
				}
				visitTimestamp(node, b) {
					const timezone = (node.timezone && b.createString(node.timezone)) || void 0;
					Schema_1.Timestamp.startTimestamp(b);
					Schema_1.Timestamp.addUnit(b, node.unit);
					if (timezone !== void 0) {
						Schema_1.Timestamp.addTimezone(b, timezone);
					}
					return Schema_1.Timestamp.endTimestamp(b);
				}
				visitInterval(node, b) {
					Schema_1.Interval.startInterval(b);
					Schema_1.Interval.addUnit(b, node.unit);
					return Schema_1.Interval.endInterval(b);
				}
				visitList(_node, b) {
					Schema_1.List.startList(b);
					return Schema_1.List.endList(b);
				}
				visitStruct(_node, b) {
					Schema_1.Struct_.startStruct_(b);
					return Schema_1.Struct_.endStruct_(b);
				}
				visitUnion(node, b) {
					Schema_1.Union.startTypeIdsVector(b, node.typeIds.length);
					const typeIds = Schema_1.Union.createTypeIdsVector(b, node.typeIds);
					Schema_1.Union.startUnion(b);
					Schema_1.Union.addMode(b, node.mode);
					Schema_1.Union.addTypeIds(b, typeIds);
					return Schema_1.Union.endUnion(b);
				}
				visitDictionary(node, b) {
					const indexType = this.visit(node.indices, b);
					Schema_1.DictionaryEncoding.startDictionaryEncoding(b);
					Schema_1.DictionaryEncoding.addId(b, new Long(node.id, 0));
					Schema_1.DictionaryEncoding.addIsOrdered(b, node.isOrdered);
					if (indexType !== void 0) {
						Schema_1.DictionaryEncoding.addIndexType(b, indexType);
					}
					return Schema_1.DictionaryEncoding.endDictionaryEncoding(b);
				}
				visitFixedSizeBinary(node, b) {
					Schema_1.FixedSizeBinary.startFixedSizeBinary(b);
					Schema_1.FixedSizeBinary.addByteWidth(b, node.byteWidth);
					return Schema_1.FixedSizeBinary.endFixedSizeBinary(b);
				}
				visitFixedSizeList(node, b) {
					Schema_1.FixedSizeList.startFixedSizeList(b);
					Schema_1.FixedSizeList.addListSize(b, node.listSize);
					return Schema_1.FixedSizeList.endFixedSizeList(b);
				}
				visitMap(node, b) {
					Schema_1.Map.startMap(b);
					Schema_1.Map.addKeysSorted(b, node.keysSorted);
					return Schema_1.Map.endMap(b);
				}
			};
			exports.TypeAssembler = TypeAssembler;
			exports.instance = new TypeAssembler();
		}
	});

	// ../../node_modules/apache-arrow/ipc/metadata/json.js
	var require_json = __commonJS({
		'../../node_modules/apache-arrow/ipc/metadata/json.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.fieldFromJSON =
				exports.dictionaryBatchFromJSON =
				exports.recordBatchFromJSON =
				exports.schemaFromJSON =
					void 0;
			var schema_1 = require_schema();
			var type_1 = require_type();
			var message_1 = require_message();
			var enum_1 = require_enum();
			function schemaFromJSON(_schema, dictionaries = /* @__PURE__ */ new Map()) {
				return new schema_1.Schema(
					schemaFieldsFromJSON(_schema, dictionaries),
					customMetadataFromJSON(_schema['customMetadata']),
					dictionaries
				);
			}
			exports.schemaFromJSON = schemaFromJSON;
			function recordBatchFromJSON(b) {
				return new message_1.RecordBatch(
					b['count'],
					fieldNodesFromJSON(b['columns']),
					buffersFromJSON(b['columns'])
				);
			}
			exports.recordBatchFromJSON = recordBatchFromJSON;
			function dictionaryBatchFromJSON(b) {
				return new message_1.DictionaryBatch(recordBatchFromJSON(b['data']), b['id'], b['isDelta']);
			}
			exports.dictionaryBatchFromJSON = dictionaryBatchFromJSON;
			function schemaFieldsFromJSON(_schema, dictionaries) {
				return (_schema['fields'] || [])
					.filter(Boolean)
					.map((f) => schema_1.Field.fromJSON(f, dictionaries));
			}
			function fieldChildrenFromJSON(_field, dictionaries) {
				return (_field['children'] || [])
					.filter(Boolean)
					.map((f) => schema_1.Field.fromJSON(f, dictionaries));
			}
			function fieldNodesFromJSON(xs) {
				return (xs || []).reduce(
					(fieldNodes, column) => [
						...fieldNodes,
						new message_1.FieldNode(column['count'], nullCountFromJSON(column['VALIDITY'])),
						...fieldNodesFromJSON(column['children'])
					],
					[]
				);
			}
			function buffersFromJSON(xs, buffers = []) {
				for (let i = -1, n = (xs || []).length; ++i < n; ) {
					const column = xs[i];
					column['VALIDITY'] &&
						buffers.push(new message_1.BufferRegion(buffers.length, column['VALIDITY'].length));
					column['TYPE'] &&
						buffers.push(new message_1.BufferRegion(buffers.length, column['TYPE'].length));
					column['OFFSET'] &&
						buffers.push(new message_1.BufferRegion(buffers.length, column['OFFSET'].length));
					column['DATA'] &&
						buffers.push(new message_1.BufferRegion(buffers.length, column['DATA'].length));
					buffers = buffersFromJSON(column['children'], buffers);
				}
				return buffers;
			}
			function nullCountFromJSON(validity) {
				return (validity || []).reduce((sum, val) => sum + +(val === 0), 0);
			}
			function fieldFromJSON(_field, dictionaries) {
				let id;
				let keys;
				let field;
				let dictMeta;
				let type;
				let dictType;
				if (!dictionaries || !(dictMeta = _field['dictionary'])) {
					type = typeFromJSON(_field, fieldChildrenFromJSON(_field, dictionaries));
					field = new schema_1.Field(
						_field['name'],
						type,
						_field['nullable'],
						customMetadataFromJSON(_field['customMetadata'])
					);
				} else if (!dictionaries.has((id = dictMeta['id']))) {
					keys = (keys = dictMeta['indexType']) ? indexTypeFromJSON(keys) : new type_1.Int32();
					dictionaries.set(
						id,
						(type = typeFromJSON(_field, fieldChildrenFromJSON(_field, dictionaries)))
					);
					dictType = new type_1.Dictionary(type, keys, id, dictMeta['isOrdered']);
					field = new schema_1.Field(
						_field['name'],
						dictType,
						_field['nullable'],
						customMetadataFromJSON(_field['customMetadata'])
					);
				} else {
					keys = (keys = dictMeta['indexType']) ? indexTypeFromJSON(keys) : new type_1.Int32();
					dictType = new type_1.Dictionary(dictionaries.get(id), keys, id, dictMeta['isOrdered']);
					field = new schema_1.Field(
						_field['name'],
						dictType,
						_field['nullable'],
						customMetadataFromJSON(_field['customMetadata'])
					);
				}
				return field || null;
			}
			exports.fieldFromJSON = fieldFromJSON;
			function customMetadataFromJSON(_metadata) {
				return new Map(Object.entries(_metadata || {}));
			}
			function indexTypeFromJSON(_type) {
				return new type_1.Int(_type['isSigned'], _type['bitWidth']);
			}
			function typeFromJSON(f, children) {
				const typeId = f['type']['name'];
				switch (typeId) {
					case 'NONE':
						return new type_1.Null();
					case 'null':
						return new type_1.Null();
					case 'binary':
						return new type_1.Binary();
					case 'utf8':
						return new type_1.Utf8();
					case 'bool':
						return new type_1.Bool();
					case 'list':
						return new type_1.List((children || [])[0]);
					case 'struct':
						return new type_1.Struct(children || []);
					case 'struct_':
						return new type_1.Struct(children || []);
				}
				switch (typeId) {
					case 'int': {
						const t = f['type'];
						return new type_1.Int(t['isSigned'], t['bitWidth']);
					}
					case 'floatingpoint': {
						const t = f['type'];
						return new type_1.Float(enum_1.Precision[t['precision']]);
					}
					case 'decimal': {
						const t = f['type'];
						return new type_1.Decimal(t['scale'], t['precision']);
					}
					case 'date': {
						const t = f['type'];
						return new type_1.Date_(enum_1.DateUnit[t['unit']]);
					}
					case 'time': {
						const t = f['type'];
						return new type_1.Time(enum_1.TimeUnit[t['unit']], t['bitWidth']);
					}
					case 'timestamp': {
						const t = f['type'];
						return new type_1.Timestamp(enum_1.TimeUnit[t['unit']], t['timezone']);
					}
					case 'interval': {
						const t = f['type'];
						return new type_1.Interval(enum_1.IntervalUnit[t['unit']]);
					}
					case 'union': {
						const t = f['type'];
						return new type_1.Union(
							enum_1.UnionMode[t['mode']],
							t['typeIds'] || [],
							children || []
						);
					}
					case 'fixedsizebinary': {
						const t = f['type'];
						return new type_1.FixedSizeBinary(t['byteWidth']);
					}
					case 'fixedsizelist': {
						const t = f['type'];
						return new type_1.FixedSizeList(t['listSize'], (children || [])[0]);
					}
					case 'map': {
						const t = f['type'];
						return new type_1.Map_((children || [])[0], t['keysSorted']);
					}
				}
				throw new Error(`Unrecognized type: "${typeId}"`);
			}
		}
	});

	// ../../node_modules/apache-arrow/ipc/metadata/message.js
	var require_message = __commonJS({
		'../../node_modules/apache-arrow/ipc/metadata/message.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.FieldNode =
				exports.BufferRegion =
				exports.DictionaryBatch =
				exports.RecordBatch =
				exports.Message =
					void 0;
			var flatbuffers_1 = require_flatbuffers();
			var Schema_1 = require_Schema();
			var Message_1 = require_Message();
			var schema_1 = require_schema();
			var buffer_1 = require_buffer();
			var enum_1 = require_enum();
			var typeassembler_1 = require_typeassembler();
			var json_1 = require_json();
			var Long = flatbuffers_1.flatbuffers.Long;
			var Builder3 = flatbuffers_1.flatbuffers.Builder;
			var ByteBuffer = flatbuffers_1.flatbuffers.ByteBuffer;
			var type_1 = require_type();
			var Message2 = class {
				constructor(bodyLength, version, headerType, header) {
					this._version = version;
					this._headerType = headerType;
					this.body = new Uint8Array(0);
					header && (this._createHeader = () => header);
					this._bodyLength = typeof bodyLength === 'number' ? bodyLength : bodyLength.low;
				}
				static fromJSON(msg, headerType) {
					const message = new Message2(0, enum_1.MetadataVersion.V4, headerType);
					message._createHeader = messageHeaderFromJSON(msg, headerType);
					return message;
				}
				static decode(buf) {
					buf = new ByteBuffer(buffer_1.toUint8Array(buf));
					const _message = Message_1.Message.getRootAsMessage(buf);
					const bodyLength = _message.bodyLength();
					const version = _message.version();
					const headerType = _message.headerType();
					const message = new Message2(bodyLength, version, headerType);
					message._createHeader = decodeMessageHeader(_message, headerType);
					return message;
				}
				static encode(message) {
					const b = new Builder3();
					let headerOffset = -1;
					if (message.isSchema()) {
						headerOffset = schema_1.Schema.encode(b, message.header());
					} else if (message.isRecordBatch()) {
						headerOffset = RecordBatch2.encode(b, message.header());
					} else if (message.isDictionaryBatch()) {
						headerOffset = DictionaryBatch.encode(b, message.header());
					}
					Message_1.Message.startMessage(b);
					Message_1.Message.addVersion(b, enum_1.MetadataVersion.V4);
					Message_1.Message.addHeader(b, headerOffset);
					Message_1.Message.addHeaderType(b, message.headerType);
					Message_1.Message.addBodyLength(b, new Long(message.bodyLength, 0));
					Message_1.Message.finishMessageBuffer(b, Message_1.Message.endMessage(b));
					return b.asUint8Array();
				}
				static from(header, bodyLength = 0) {
					if (header instanceof schema_1.Schema) {
						return new Message2(0, enum_1.MetadataVersion.V4, enum_1.MessageHeader.Schema, header);
					}
					if (header instanceof RecordBatch2) {
						return new Message2(
							bodyLength,
							enum_1.MetadataVersion.V4,
							enum_1.MessageHeader.RecordBatch,
							header
						);
					}
					if (header instanceof DictionaryBatch) {
						return new Message2(
							bodyLength,
							enum_1.MetadataVersion.V4,
							enum_1.MessageHeader.DictionaryBatch,
							header
						);
					}
					throw new Error(`Unrecognized Message header: ${header}`);
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
					return this.headerType === enum_1.MessageHeader.Schema;
				}
				isRecordBatch() {
					return this.headerType === enum_1.MessageHeader.RecordBatch;
				}
				isDictionaryBatch() {
					return this.headerType === enum_1.MessageHeader.DictionaryBatch;
				}
			};
			exports.Message = Message2;
			var RecordBatch2 = class {
				constructor(length, nodes, buffers) {
					this._nodes = nodes;
					this._buffers = buffers;
					this._length = typeof length === 'number' ? length : length.low;
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
			exports.RecordBatch = RecordBatch2;
			var DictionaryBatch = class {
				constructor(data, id, isDelta = false) {
					this._data = data;
					this._isDelta = isDelta;
					this._id = typeof id === 'number' ? id : id.low;
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
			exports.DictionaryBatch = DictionaryBatch;
			var BufferRegion = class {
				constructor(offset, length) {
					this.offset = typeof offset === 'number' ? offset : offset.low;
					this.length = typeof length === 'number' ? length : length.low;
				}
			};
			exports.BufferRegion = BufferRegion;
			var FieldNode = class {
				constructor(length, nullCount) {
					this.length = typeof length === 'number' ? length : length.low;
					this.nullCount = typeof nullCount === 'number' ? nullCount : nullCount.low;
				}
			};
			exports.FieldNode = FieldNode;
			function messageHeaderFromJSON(message, type) {
				return () => {
					switch (type) {
						case enum_1.MessageHeader.Schema:
							return schema_1.Schema.fromJSON(message);
						case enum_1.MessageHeader.RecordBatch:
							return RecordBatch2.fromJSON(message);
						case enum_1.MessageHeader.DictionaryBatch:
							return DictionaryBatch.fromJSON(message);
					}
					throw new Error(
						`Unrecognized Message type: { name: ${enum_1.MessageHeader[type]}, type: ${type} }`
					);
				};
			}
			function decodeMessageHeader(message, type) {
				return () => {
					switch (type) {
						case enum_1.MessageHeader.Schema:
							return schema_1.Schema.decode(message.header(new Schema_1.Schema()));
						case enum_1.MessageHeader.RecordBatch:
							return RecordBatch2.decode(
								message.header(new Message_1.RecordBatch()),
								message.version()
							);
						case enum_1.MessageHeader.DictionaryBatch:
							return DictionaryBatch.decode(
								message.header(new Message_1.DictionaryBatch()),
								message.version()
							);
					}
					throw new Error(
						`Unrecognized Message type: { name: ${enum_1.MessageHeader[type]}, type: ${type} }`
					);
				};
			}
			schema_1.Field['encode'] = encodeField;
			schema_1.Field['decode'] = decodeField;
			schema_1.Field['fromJSON'] = json_1.fieldFromJSON;
			schema_1.Schema['encode'] = encodeSchema;
			schema_1.Schema['decode'] = decodeSchema;
			schema_1.Schema['fromJSON'] = json_1.schemaFromJSON;
			RecordBatch2['encode'] = encodeRecordBatch;
			RecordBatch2['decode'] = decodeRecordBatch;
			RecordBatch2['fromJSON'] = json_1.recordBatchFromJSON;
			DictionaryBatch['encode'] = encodeDictionaryBatch;
			DictionaryBatch['decode'] = decodeDictionaryBatch;
			DictionaryBatch['fromJSON'] = json_1.dictionaryBatchFromJSON;
			FieldNode['encode'] = encodeFieldNode;
			FieldNode['decode'] = decodeFieldNode;
			BufferRegion['encode'] = encodeBufferRegion;
			BufferRegion['decode'] = decodeBufferRegion;
			function decodeSchema(_schema, dictionaries = /* @__PURE__ */ new Map()) {
				const fields = decodeSchemaFields(_schema, dictionaries);
				return new schema_1.Schema(fields, decodeCustomMetadata(_schema), dictionaries);
			}
			function decodeRecordBatch(batch, version = enum_1.MetadataVersion.V4) {
				return new RecordBatch2(
					batch.length(),
					decodeFieldNodes(batch),
					decodeBuffers(batch, version)
				);
			}
			function decodeDictionaryBatch(batch, version = enum_1.MetadataVersion.V4) {
				return new DictionaryBatch(
					RecordBatch2.decode(batch.data(), version),
					batch.id(),
					batch.isDelta()
				);
			}
			function decodeBufferRegion(b) {
				return new BufferRegion(b.offset(), b.length());
			}
			function decodeFieldNode(f) {
				return new FieldNode(f.length(), f.nullCount());
			}
			function decodeFieldNodes(batch) {
				const nodes = [];
				for (let f, i = -1, j = -1, n = batch.nodesLength(); ++i < n; ) {
					if ((f = batch.nodes(i))) {
						nodes[++j] = FieldNode.decode(f);
					}
				}
				return nodes;
			}
			function decodeBuffers(batch, version) {
				const bufferRegions = [];
				for (let b, i = -1, j = -1, n = batch.buffersLength(); ++i < n; ) {
					if ((b = batch.buffers(i))) {
						if (version < enum_1.MetadataVersion.V4) {
							b.bb_pos += 8 * (i + 1);
						}
						bufferRegions[++j] = BufferRegion.decode(b);
					}
				}
				return bufferRegions;
			}
			function decodeSchemaFields(schema, dictionaries) {
				const fields = [];
				for (let f, i = -1, j = -1, n = schema.fieldsLength(); ++i < n; ) {
					if ((f = schema.fields(i))) {
						fields[++j] = schema_1.Field.decode(f, dictionaries);
					}
				}
				return fields;
			}
			function decodeFieldChildren(field, dictionaries) {
				const children = [];
				for (let f, i = -1, j = -1, n = field.childrenLength(); ++i < n; ) {
					if ((f = field.children(i))) {
						children[++j] = schema_1.Field.decode(f, dictionaries);
					}
				}
				return children;
			}
			function decodeField(f, dictionaries) {
				let id;
				let field;
				let type;
				let keys;
				let dictType;
				let dictMeta;
				if (!dictionaries || !(dictMeta = f.dictionary())) {
					type = decodeFieldType(f, decodeFieldChildren(f, dictionaries));
					field = new schema_1.Field(f.name(), type, f.nullable(), decodeCustomMetadata(f));
				} else if (!dictionaries.has((id = dictMeta.id().low))) {
					keys = (keys = dictMeta.indexType()) ? decodeIndexType(keys) : new type_1.Int32();
					dictionaries.set(id, (type = decodeFieldType(f, decodeFieldChildren(f, dictionaries))));
					dictType = new type_1.Dictionary(type, keys, id, dictMeta.isOrdered());
					field = new schema_1.Field(f.name(), dictType, f.nullable(), decodeCustomMetadata(f));
				} else {
					keys = (keys = dictMeta.indexType()) ? decodeIndexType(keys) : new type_1.Int32();
					dictType = new type_1.Dictionary(dictionaries.get(id), keys, id, dictMeta.isOrdered());
					field = new schema_1.Field(f.name(), dictType, f.nullable(), decodeCustomMetadata(f));
				}
				return field || null;
			}
			function decodeCustomMetadata(parent) {
				const data = /* @__PURE__ */ new Map();
				if (parent) {
					for (let entry, key, i = -1, n = parent.customMetadataLength() | 0; ++i < n; ) {
						if ((entry = parent.customMetadata(i)) && (key = entry.key()) != null) {
							data.set(key, entry.value());
						}
					}
				}
				return data;
			}
			function decodeIndexType(_type) {
				return new type_1.Int(_type.isSigned(), _type.bitWidth());
			}
			function decodeFieldType(f, children) {
				const typeId = f.typeType();
				switch (typeId) {
					case Schema_1.Type['NONE']:
						return new type_1.Null();
					case Schema_1.Type['Null']:
						return new type_1.Null();
					case Schema_1.Type['Binary']:
						return new type_1.Binary();
					case Schema_1.Type['Utf8']:
						return new type_1.Utf8();
					case Schema_1.Type['Bool']:
						return new type_1.Bool();
					case Schema_1.Type['List']:
						return new type_1.List((children || [])[0]);
					case Schema_1.Type['Struct_']:
						return new type_1.Struct(children || []);
				}
				switch (typeId) {
					case Schema_1.Type['Int']: {
						const t = f.type(new Schema_1.Int());
						return new type_1.Int(t.isSigned(), t.bitWidth());
					}
					case Schema_1.Type['FloatingPoint']: {
						const t = f.type(new Schema_1.FloatingPoint());
						return new type_1.Float(t.precision());
					}
					case Schema_1.Type['Decimal']: {
						const t = f.type(new Schema_1.Decimal());
						return new type_1.Decimal(t.scale(), t.precision());
					}
					case Schema_1.Type['Date']: {
						const t = f.type(new Schema_1.Date());
						return new type_1.Date_(t.unit());
					}
					case Schema_1.Type['Time']: {
						const t = f.type(new Schema_1.Time());
						return new type_1.Time(t.unit(), t.bitWidth());
					}
					case Schema_1.Type['Timestamp']: {
						const t = f.type(new Schema_1.Timestamp());
						return new type_1.Timestamp(t.unit(), t.timezone());
					}
					case Schema_1.Type['Interval']: {
						const t = f.type(new Schema_1.Interval());
						return new type_1.Interval(t.unit());
					}
					case Schema_1.Type['Union']: {
						const t = f.type(new Schema_1.Union());
						return new type_1.Union(t.mode(), t.typeIdsArray() || [], children || []);
					}
					case Schema_1.Type['FixedSizeBinary']: {
						const t = f.type(new Schema_1.FixedSizeBinary());
						return new type_1.FixedSizeBinary(t.byteWidth());
					}
					case Schema_1.Type['FixedSizeList']: {
						const t = f.type(new Schema_1.FixedSizeList());
						return new type_1.FixedSizeList(t.listSize(), (children || [])[0]);
					}
					case Schema_1.Type['Map']: {
						const t = f.type(new Schema_1.Map());
						return new type_1.Map_((children || [])[0], t.keysSorted());
					}
				}
				throw new Error(`Unrecognized type: "${Schema_1.Type[typeId]}" (${typeId})`);
			}
			function encodeSchema(b, schema) {
				const fieldOffsets = schema.fields.map((f) => schema_1.Field.encode(b, f));
				Schema_1.Schema.startFieldsVector(b, fieldOffsets.length);
				const fieldsVectorOffset = Schema_1.Schema.createFieldsVector(b, fieldOffsets);
				const metadataOffset = !(schema.metadata && schema.metadata.size > 0)
					? -1
					: Schema_1.Schema.createCustomMetadataVector(
							b,
							[...schema.metadata].map(([k, v]) => {
								const key = b.createString(`${k}`);
								const val = b.createString(`${v}`);
								Schema_1.KeyValue.startKeyValue(b);
								Schema_1.KeyValue.addKey(b, key);
								Schema_1.KeyValue.addValue(b, val);
								return Schema_1.KeyValue.endKeyValue(b);
							})
					  );
				Schema_1.Schema.startSchema(b);
				Schema_1.Schema.addFields(b, fieldsVectorOffset);
				Schema_1.Schema.addEndianness(
					b,
					platformIsLittleEndian ? Schema_1.Endianness.Little : Schema_1.Endianness.Big
				);
				if (metadataOffset !== -1) {
					Schema_1.Schema.addCustomMetadata(b, metadataOffset);
				}
				return Schema_1.Schema.endSchema(b);
			}
			function encodeField(b, field) {
				let nameOffset = -1;
				let typeOffset = -1;
				let dictionaryOffset = -1;
				const type = field.type;
				let typeId = field.typeId;
				if (!type_1.DataType.isDictionary(type)) {
					typeOffset = typeassembler_1.instance.visit(type, b);
				} else {
					typeId = type.dictionary.typeId;
					dictionaryOffset = typeassembler_1.instance.visit(type, b);
					typeOffset = typeassembler_1.instance.visit(type.dictionary, b);
				}
				const childOffsets = (type.children || []).map((f) => schema_1.Field.encode(b, f));
				const childrenVectorOffset = Schema_1.Field.createChildrenVector(b, childOffsets);
				const metadataOffset = !(field.metadata && field.metadata.size > 0)
					? -1
					: Schema_1.Field.createCustomMetadataVector(
							b,
							[...field.metadata].map(([k, v]) => {
								const key = b.createString(`${k}`);
								const val = b.createString(`${v}`);
								Schema_1.KeyValue.startKeyValue(b);
								Schema_1.KeyValue.addKey(b, key);
								Schema_1.KeyValue.addValue(b, val);
								return Schema_1.KeyValue.endKeyValue(b);
							})
					  );
				if (field.name) {
					nameOffset = b.createString(field.name);
				}
				Schema_1.Field.startField(b);
				Schema_1.Field.addType(b, typeOffset);
				Schema_1.Field.addTypeType(b, typeId);
				Schema_1.Field.addChildren(b, childrenVectorOffset);
				Schema_1.Field.addNullable(b, !!field.nullable);
				if (nameOffset !== -1) {
					Schema_1.Field.addName(b, nameOffset);
				}
				if (dictionaryOffset !== -1) {
					Schema_1.Field.addDictionary(b, dictionaryOffset);
				}
				if (metadataOffset !== -1) {
					Schema_1.Field.addCustomMetadata(b, metadataOffset);
				}
				return Schema_1.Field.endField(b);
			}
			function encodeRecordBatch(b, recordBatch) {
				const nodes = recordBatch.nodes || [];
				const buffers = recordBatch.buffers || [];
				Message_1.RecordBatch.startNodesVector(b, nodes.length);
				nodes
					.slice()
					.reverse()
					.forEach((n) => FieldNode.encode(b, n));
				const nodesVectorOffset = b.endVector();
				Message_1.RecordBatch.startBuffersVector(b, buffers.length);
				buffers
					.slice()
					.reverse()
					.forEach((b_) => BufferRegion.encode(b, b_));
				const buffersVectorOffset = b.endVector();
				Message_1.RecordBatch.startRecordBatch(b);
				Message_1.RecordBatch.addLength(b, new Long(recordBatch.length, 0));
				Message_1.RecordBatch.addNodes(b, nodesVectorOffset);
				Message_1.RecordBatch.addBuffers(b, buffersVectorOffset);
				return Message_1.RecordBatch.endRecordBatch(b);
			}
			function encodeDictionaryBatch(b, dictionaryBatch) {
				const dataOffset = RecordBatch2.encode(b, dictionaryBatch.data);
				Message_1.DictionaryBatch.startDictionaryBatch(b);
				Message_1.DictionaryBatch.addId(b, new Long(dictionaryBatch.id, 0));
				Message_1.DictionaryBatch.addIsDelta(b, dictionaryBatch.isDelta);
				Message_1.DictionaryBatch.addData(b, dataOffset);
				return Message_1.DictionaryBatch.endDictionaryBatch(b);
			}
			function encodeFieldNode(b, node) {
				return Message_1.FieldNode.createFieldNode(
					b,
					new Long(node.length, 0),
					new Long(node.nullCount, 0)
				);
			}
			function encodeBufferRegion(b, node) {
				return Schema_1.Buffer.createBuffer(b, new Long(node.offset, 0), new Long(node.length, 0));
			}
			var platformIsLittleEndian = (function () {
				const buffer = new ArrayBuffer(2);
				new DataView(buffer).setInt16(0, 256, true);
				return new Int16Array(buffer)[0] === 256;
			})();
		}
	});

	// ../../node_modules/apache-arrow/ipc/message.js
	var require_message2 = __commonJS({
		'../../node_modules/apache-arrow/ipc/message.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.magicX2AndPadding =
				exports.magicAndPadding =
				exports.magicLength =
				exports.checkForMagicArrowString =
				exports.MAGIC =
				exports.MAGIC_STR =
				exports.PADDING =
				exports.JSONMessageReader =
				exports.AsyncMessageReader =
				exports.MessageReader =
					void 0;
			var tslib_1 = require_tslib();
			var enum_1 = require_enum();
			var flatbuffers_1 = require_flatbuffers();
			var ByteBuffer = flatbuffers_1.flatbuffers.ByteBuffer;
			var message_1 = require_message();
			var compat_1 = require_compat();
			var file_1 = require_file2();
			var buffer_1 = require_buffer();
			var stream_1 = require_stream();
			var interfaces_1 = require_interfaces();
			var invalidMessageType = (type) =>
				`Expected ${enum_1.MessageHeader[type]} Message in stream, but was null or length 0.`;
			var nullMessage = (type) =>
				`Header pointer of flatbuffer-encoded ${enum_1.MessageHeader[type]} Message is null or length 0.`;
			var invalidMessageMetadata = (expected, actual) =>
				`Expected to read ${expected} metadata bytes, but only read ${actual}.`;
			var invalidMessageBodyLength = (expected, actual) =>
				`Expected to read ${expected} bytes for message body, but only read ${actual}.`;
			var MessageReader2 = class {
				constructor(source) {
					this.source =
						source instanceof stream_1.ByteStream ? source : new stream_1.ByteStream(source);
				}
				[Symbol.iterator]() {
					return this;
				}
				next() {
					let r;
					if ((r = this.readMetadataLength()).done) {
						return interfaces_1.ITERATOR_DONE;
					}
					if (r.value === -1 && (r = this.readMetadataLength()).done) {
						return interfaces_1.ITERATOR_DONE;
					}
					if ((r = this.readMetadata(r.value)).done) {
						return interfaces_1.ITERATOR_DONE;
					}
					return r;
				}
				throw(value) {
					return this.source.throw(value);
				}
				return(value) {
					return this.source.return(value);
				}
				readMessage(type) {
					let r;
					if ((r = this.next()).done) {
						return null;
					}
					if (type != null && r.value.headerType !== type) {
						throw new Error(invalidMessageType(type));
					}
					return r.value;
				}
				readMessageBody(bodyLength) {
					if (bodyLength <= 0) {
						return new Uint8Array(0);
					}
					const buf = buffer_1.toUint8Array(this.source.read(bodyLength));
					if (buf.byteLength < bodyLength) {
						throw new Error(invalidMessageBodyLength(bodyLength, buf.byteLength));
					}
					return buf.byteOffset % 8 === 0 &&
						buf.byteOffset + buf.byteLength <= buf.buffer.byteLength
						? buf
						: buf.slice();
				}
				readSchema(throwIfNull = false) {
					const type = enum_1.MessageHeader.Schema;
					const message = this.readMessage(type);
					const schema = message === null || message === void 0 ? void 0 : message.header();
					if (throwIfNull && !schema) {
						throw new Error(nullMessage(type));
					}
					return schema;
				}
				readMetadataLength() {
					const buf = this.source.read(exports.PADDING);
					const bb = buf && new ByteBuffer(buf);
					const len = (bb === null || bb === void 0 ? void 0 : bb.readInt32(0)) || 0;
					return { done: len === 0, value: len };
				}
				readMetadata(metadataLength) {
					const buf = this.source.read(metadataLength);
					if (!buf) {
						return interfaces_1.ITERATOR_DONE;
					}
					if (buf.byteLength < metadataLength) {
						throw new Error(invalidMessageMetadata(metadataLength, buf.byteLength));
					}
					return { done: false, value: message_1.Message.decode(buf) };
				}
			};
			exports.MessageReader = MessageReader2;
			var AsyncMessageReader2 = class {
				constructor(source, byteLength) {
					this.source =
						source instanceof stream_1.AsyncByteStream
							? source
							: compat_1.isFileHandle(source)
							? new file_1.AsyncRandomAccessFile(source, byteLength)
							: new stream_1.AsyncByteStream(source);
				}
				[Symbol.asyncIterator]() {
					return this;
				}
				next() {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						let r;
						if ((r = yield this.readMetadataLength()).done) {
							return interfaces_1.ITERATOR_DONE;
						}
						if (r.value === -1 && (r = yield this.readMetadataLength()).done) {
							return interfaces_1.ITERATOR_DONE;
						}
						if ((r = yield this.readMetadata(r.value)).done) {
							return interfaces_1.ITERATOR_DONE;
						}
						return r;
					});
				}
				throw(value) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						return yield this.source.throw(value);
					});
				}
				return(value) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						return yield this.source.return(value);
					});
				}
				readMessage(type) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						let r;
						if ((r = yield this.next()).done) {
							return null;
						}
						if (type != null && r.value.headerType !== type) {
							throw new Error(invalidMessageType(type));
						}
						return r.value;
					});
				}
				readMessageBody(bodyLength) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						if (bodyLength <= 0) {
							return new Uint8Array(0);
						}
						const buf = buffer_1.toUint8Array(yield this.source.read(bodyLength));
						if (buf.byteLength < bodyLength) {
							throw new Error(invalidMessageBodyLength(bodyLength, buf.byteLength));
						}
						return buf.byteOffset % 8 === 0 &&
							buf.byteOffset + buf.byteLength <= buf.buffer.byteLength
							? buf
							: buf.slice();
					});
				}
				readSchema(throwIfNull = false) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						const type = enum_1.MessageHeader.Schema;
						const message = yield this.readMessage(type);
						const schema = message === null || message === void 0 ? void 0 : message.header();
						if (throwIfNull && !schema) {
							throw new Error(nullMessage(type));
						}
						return schema;
					});
				}
				readMetadataLength() {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						const buf = yield this.source.read(exports.PADDING);
						const bb = buf && new ByteBuffer(buf);
						const len = (bb === null || bb === void 0 ? void 0 : bb.readInt32(0)) || 0;
						return { done: len === 0, value: len };
					});
				}
				readMetadata(metadataLength) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						const buf = yield this.source.read(metadataLength);
						if (!buf) {
							return interfaces_1.ITERATOR_DONE;
						}
						if (buf.byteLength < metadataLength) {
							throw new Error(invalidMessageMetadata(metadataLength, buf.byteLength));
						}
						return { done: false, value: message_1.Message.decode(buf) };
					});
				}
			};
			exports.AsyncMessageReader = AsyncMessageReader2;
			var JSONMessageReader2 = class extends MessageReader2 {
				constructor(source) {
					super(new Uint8Array(0));
					this._schema = false;
					this._body = [];
					this._batchIndex = 0;
					this._dictionaryIndex = 0;
					this._json =
						source instanceof interfaces_1.ArrowJSON ? source : new interfaces_1.ArrowJSON(source);
				}
				next() {
					const { _json } = this;
					if (!this._schema) {
						this._schema = true;
						const message = message_1.Message.fromJSON(_json.schema, enum_1.MessageHeader.Schema);
						return { done: false, value: message };
					}
					if (this._dictionaryIndex < _json.dictionaries.length) {
						const batch = _json.dictionaries[this._dictionaryIndex++];
						this._body = batch['data']['columns'];
						const message = message_1.Message.fromJSON(batch, enum_1.MessageHeader.DictionaryBatch);
						return { done: false, value: message };
					}
					if (this._batchIndex < _json.batches.length) {
						const batch = _json.batches[this._batchIndex++];
						this._body = batch['columns'];
						const message = message_1.Message.fromJSON(batch, enum_1.MessageHeader.RecordBatch);
						return { done: false, value: message };
					}
					this._body = [];
					return interfaces_1.ITERATOR_DONE;
				}
				readMessageBody(_bodyLength) {
					return flattenDataSources(this._body);
					function flattenDataSources(xs) {
						return (xs || []).reduce(
							(buffers, column) => [
								...buffers,
								...((column['VALIDITY'] && [column['VALIDITY']]) || []),
								...((column['TYPE'] && [column['TYPE']]) || []),
								...((column['OFFSET'] && [column['OFFSET']]) || []),
								...((column['DATA'] && [column['DATA']]) || []),
								...flattenDataSources(column['children'])
							],
							[]
						);
					}
				}
				readMessage(type) {
					let r;
					if ((r = this.next()).done) {
						return null;
					}
					if (type != null && r.value.headerType !== type) {
						throw new Error(invalidMessageType(type));
					}
					return r.value;
				}
				readSchema() {
					const type = enum_1.MessageHeader.Schema;
					const message = this.readMessage(type);
					const schema = message === null || message === void 0 ? void 0 : message.header();
					if (!message || !schema) {
						throw new Error(nullMessage(type));
					}
					return schema;
				}
			};
			exports.JSONMessageReader = JSONMessageReader2;
			exports.PADDING = 4;
			exports.MAGIC_STR = 'ARROW1';
			exports.MAGIC = new Uint8Array(exports.MAGIC_STR.length);
			for (let i = 0; i < exports.MAGIC_STR.length; i += 1 | 0) {
				exports.MAGIC[i] = exports.MAGIC_STR.charCodeAt(i);
			}
			function checkForMagicArrowString(buffer, index = 0) {
				for (let i = -1, n = exports.MAGIC.length; ++i < n; ) {
					if (exports.MAGIC[i] !== buffer[index + i]) {
						return false;
					}
				}
				return true;
			}
			exports.checkForMagicArrowString = checkForMagicArrowString;
			exports.magicLength = exports.MAGIC.length;
			exports.magicAndPadding = exports.magicLength + exports.PADDING;
			exports.magicX2AndPadding = exports.magicLength * 2 + exports.PADDING;
		}
	});

	// ../../node_modules/apache-arrow/visitor/typecomparator.js
	var require_typecomparator = __commonJS({
		'../../node_modules/apache-arrow/visitor/typecomparator.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.compareTypes =
				exports.compareFields =
				exports.compareSchemas =
				exports.instance =
				exports.TypeComparator =
					void 0;
			var visitor_1 = require_visitor();
			var TypeComparator = class extends visitor_1.Visitor {
				compareSchemas(schema, other) {
					return (
						schema === other ||
						(other instanceof schema.constructor &&
							this.compareManyFields(schema.fields, other.fields))
					);
				}
				compareManyFields(fields, others) {
					return (
						fields === others ||
						(Array.isArray(fields) &&
							Array.isArray(others) &&
							fields.length === others.length &&
							fields.every((f, i) => this.compareFields(f, others[i])))
					);
				}
				compareFields(field, other) {
					return (
						field === other ||
						(other instanceof field.constructor &&
							field.name === other.name &&
							field.nullable === other.nullable &&
							this.visit(field.type, other.type))
					);
				}
			};
			exports.TypeComparator = TypeComparator;
			function compareConstructor(type, other) {
				return other instanceof type.constructor;
			}
			function compareAny(type, other) {
				return type === other || compareConstructor(type, other);
			}
			function compareInt(type, other) {
				return (
					type === other ||
					(compareConstructor(type, other) &&
						type.bitWidth === other.bitWidth &&
						type.isSigned === other.isSigned)
				);
			}
			function compareFloat(type, other) {
				return (
					type === other || (compareConstructor(type, other) && type.precision === other.precision)
				);
			}
			function compareFixedSizeBinary(type, other) {
				return (
					type === other || (compareConstructor(type, other) && type.byteWidth === other.byteWidth)
				);
			}
			function compareDate(type, other) {
				return type === other || (compareConstructor(type, other) && type.unit === other.unit);
			}
			function compareTimestamp(type, other) {
				return (
					type === other ||
					(compareConstructor(type, other) &&
						type.unit === other.unit &&
						type.timezone === other.timezone)
				);
			}
			function compareTime(type, other) {
				return (
					type === other ||
					(compareConstructor(type, other) &&
						type.unit === other.unit &&
						type.bitWidth === other.bitWidth)
				);
			}
			function compareList(type, other) {
				return (
					type === other ||
					(compareConstructor(type, other) &&
						type.children.length === other.children.length &&
						exports.instance.compareManyFields(type.children, other.children))
				);
			}
			function compareStruct(type, other) {
				return (
					type === other ||
					(compareConstructor(type, other) &&
						type.children.length === other.children.length &&
						exports.instance.compareManyFields(type.children, other.children))
				);
			}
			function compareUnion(type, other) {
				return (
					type === other ||
					(compareConstructor(type, other) &&
						type.mode === other.mode &&
						type.typeIds.every((x, i) => x === other.typeIds[i]) &&
						exports.instance.compareManyFields(type.children, other.children))
				);
			}
			function compareDictionary(type, other) {
				return (
					type === other ||
					(compareConstructor(type, other) &&
						type.id === other.id &&
						type.isOrdered === other.isOrdered &&
						exports.instance.visit(type.indices, other.indices) &&
						exports.instance.visit(type.dictionary, other.dictionary))
				);
			}
			function compareInterval(type, other) {
				return type === other || (compareConstructor(type, other) && type.unit === other.unit);
			}
			function compareFixedSizeList(type, other) {
				return (
					type === other ||
					(compareConstructor(type, other) &&
						type.listSize === other.listSize &&
						type.children.length === other.children.length &&
						exports.instance.compareManyFields(type.children, other.children))
				);
			}
			function compareMap(type, other) {
				return (
					type === other ||
					(compareConstructor(type, other) &&
						type.keysSorted === other.keysSorted &&
						type.children.length === other.children.length &&
						exports.instance.compareManyFields(type.children, other.children))
				);
			}
			TypeComparator.prototype.visitNull = compareAny;
			TypeComparator.prototype.visitBool = compareAny;
			TypeComparator.prototype.visitInt = compareInt;
			TypeComparator.prototype.visitInt8 = compareInt;
			TypeComparator.prototype.visitInt16 = compareInt;
			TypeComparator.prototype.visitInt32 = compareInt;
			TypeComparator.prototype.visitInt64 = compareInt;
			TypeComparator.prototype.visitUint8 = compareInt;
			TypeComparator.prototype.visitUint16 = compareInt;
			TypeComparator.prototype.visitUint32 = compareInt;
			TypeComparator.prototype.visitUint64 = compareInt;
			TypeComparator.prototype.visitFloat = compareFloat;
			TypeComparator.prototype.visitFloat16 = compareFloat;
			TypeComparator.prototype.visitFloat32 = compareFloat;
			TypeComparator.prototype.visitFloat64 = compareFloat;
			TypeComparator.prototype.visitUtf8 = compareAny;
			TypeComparator.prototype.visitBinary = compareAny;
			TypeComparator.prototype.visitFixedSizeBinary = compareFixedSizeBinary;
			TypeComparator.prototype.visitDate = compareDate;
			TypeComparator.prototype.visitDateDay = compareDate;
			TypeComparator.prototype.visitDateMillisecond = compareDate;
			TypeComparator.prototype.visitTimestamp = compareTimestamp;
			TypeComparator.prototype.visitTimestampSecond = compareTimestamp;
			TypeComparator.prototype.visitTimestampMillisecond = compareTimestamp;
			TypeComparator.prototype.visitTimestampMicrosecond = compareTimestamp;
			TypeComparator.prototype.visitTimestampNanosecond = compareTimestamp;
			TypeComparator.prototype.visitTime = compareTime;
			TypeComparator.prototype.visitTimeSecond = compareTime;
			TypeComparator.prototype.visitTimeMillisecond = compareTime;
			TypeComparator.prototype.visitTimeMicrosecond = compareTime;
			TypeComparator.prototype.visitTimeNanosecond = compareTime;
			TypeComparator.prototype.visitDecimal = compareAny;
			TypeComparator.prototype.visitList = compareList;
			TypeComparator.prototype.visitStruct = compareStruct;
			TypeComparator.prototype.visitUnion = compareUnion;
			TypeComparator.prototype.visitDenseUnion = compareUnion;
			TypeComparator.prototype.visitSparseUnion = compareUnion;
			TypeComparator.prototype.visitDictionary = compareDictionary;
			TypeComparator.prototype.visitInterval = compareInterval;
			TypeComparator.prototype.visitIntervalDayTime = compareInterval;
			TypeComparator.prototype.visitIntervalYearMonth = compareInterval;
			TypeComparator.prototype.visitFixedSizeList = compareFixedSizeList;
			TypeComparator.prototype.visitMap = compareMap;
			exports.instance = new TypeComparator();
			function compareSchemas(schema, other) {
				return exports.instance.compareSchemas(schema, other);
			}
			exports.compareSchemas = compareSchemas;
			function compareFields(field, other) {
				return exports.instance.compareFields(field, other);
			}
			exports.compareFields = compareFields;
			function compareTypes(type, other) {
				return exports.instance.visit(type, other);
			}
			exports.compareTypes = compareTypes;
		}
	});

	// ../../node_modules/apache-arrow/visitor/vectorassembler.js
	var require_vectorassembler = __commonJS({
		'../../node_modules/apache-arrow/visitor/vectorassembler.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.VectorAssembler = void 0;
			var visitor_1 = require_visitor();
			var enum_1 = require_enum();
			var recordbatch_1 = require_recordbatch2();
			var buffer_1 = require_buffer();
			var bit_1 = require_bit();
			var args_1 = require_args();
			var message_1 = require_message();
			var type_1 = require_type();
			var VectorAssembler = class extends visitor_1.Visitor {
				constructor() {
					super();
					this._byteLength = 0;
					this._nodes = [];
					this._buffers = [];
					this._bufferRegions = [];
				}
				static assemble(...args) {
					const assembler = new VectorAssembler();
					const vectorChildren = args_1.selectVectorChildrenArgs(recordbatch_1.RecordBatch, args);
					const [assembleResult = assembler] = assembler.visitMany(vectorChildren);
					return assembleResult;
				}
				visit(vector) {
					if (!type_1.DataType.isDictionary(vector.type)) {
						const { data, length, nullCount } = vector;
						if (length > 2147483647) {
							throw new RangeError('Cannot write arrays larger than 2^31 - 1 in length');
						}
						if (!type_1.DataType.isNull(vector.type)) {
							addBuffer.call(
								this,
								nullCount <= 0
									? new Uint8Array(0)
									: bit_1.truncateBitmap(data.offset, length, data.nullBitmap)
							);
						}
						this.nodes.push(new message_1.FieldNode(length, nullCount));
					}
					return super.visit(vector);
				}
				visitNull(_nullV) {
					return this;
				}
				visitDictionary(vector) {
					return this.visit(vector.indices);
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
			exports.VectorAssembler = VectorAssembler;
			function addBuffer(values) {
				const byteLength = (values.byteLength + 7) & ~7;
				this.buffers.push(values);
				this.bufferRegions.push(new message_1.BufferRegion(this._byteLength, byteLength));
				this._byteLength += byteLength;
				return this;
			}
			function assembleUnion(vector) {
				const { type, length, typeIds, valueOffsets } = vector;
				addBuffer.call(this, typeIds);
				if (type.mode === enum_1.UnionMode.Sparse) {
					return assembleNestedVector.call(this, vector);
				} else if (type.mode === enum_1.UnionMode.Dense) {
					if (vector.offset <= 0) {
						addBuffer.call(this, valueOffsets);
						return assembleNestedVector.call(this, vector);
					} else {
						const maxChildTypeId = typeIds.reduce((x, y) => Math.max(x, y), typeIds[0]);
						const childLengths = new Int32Array(maxChildTypeId + 1);
						const childOffsets = new Int32Array(maxChildTypeId + 1).fill(-1);
						const shiftedOffsets = new Int32Array(length);
						const unshiftedOffsets = buffer_1.rebaseValueOffsets(
							-valueOffsets[0],
							length,
							valueOffsets
						);
						for (let typeId, shift, index = -1; ++index < length; ) {
							if ((shift = childOffsets[(typeId = typeIds[index])]) === -1) {
								shift = childOffsets[typeId] = unshiftedOffsets[typeId];
							}
							shiftedOffsets[index] = unshiftedOffsets[index] - shift;
							++childLengths[typeId];
						}
						addBuffer.call(this, shiftedOffsets);
						for (
							let child, childIndex = -1, numChildren = type.children.length;
							++childIndex < numChildren;

						) {
							if ((child = vector.getChildAt(childIndex))) {
								const typeId = type.typeIds[childIndex];
								const childLength = Math.min(length, childLengths[typeId]);
								this.visit(child.slice(childOffsets[typeId], childLength));
							}
						}
					}
				}
				return this;
			}
			function assembleBoolVector(vector) {
				let values;
				if (vector.nullCount >= vector.length) {
					return addBuffer.call(this, new Uint8Array(0));
				} else if ((values = vector.values) instanceof Uint8Array) {
					return addBuffer.call(this, bit_1.truncateBitmap(vector.offset, vector.length, values));
				}
				return addBuffer.call(this, bit_1.packBools(vector));
			}
			function assembleFlatVector(vector) {
				return addBuffer.call(this, vector.values.subarray(0, vector.length * vector.stride));
			}
			function assembleFlatListVector(vector) {
				const { length, values, valueOffsets } = vector;
				const firstOffset = valueOffsets[0];
				const lastOffset = valueOffsets[length];
				const byteLength = Math.min(lastOffset - firstOffset, values.byteLength - firstOffset);
				addBuffer.call(this, buffer_1.rebaseValueOffsets(-valueOffsets[0], length, valueOffsets));
				addBuffer.call(this, values.subarray(firstOffset, firstOffset + byteLength));
				return this;
			}
			function assembleListVector(vector) {
				const { length, valueOffsets } = vector;
				if (valueOffsets) {
					addBuffer.call(this, buffer_1.rebaseValueOffsets(valueOffsets[0], length, valueOffsets));
				}
				return this.visit(vector.getChildAt(0));
			}
			function assembleNestedVector(vector) {
				return this.visitMany(
					vector.type.children.map((_, i) => vector.getChildAt(i)).filter(Boolean)
				)[0];
			}
			VectorAssembler.prototype.visitBool = assembleBoolVector;
			VectorAssembler.prototype.visitInt = assembleFlatVector;
			VectorAssembler.prototype.visitFloat = assembleFlatVector;
			VectorAssembler.prototype.visitUtf8 = assembleFlatListVector;
			VectorAssembler.prototype.visitBinary = assembleFlatListVector;
			VectorAssembler.prototype.visitFixedSizeBinary = assembleFlatVector;
			VectorAssembler.prototype.visitDate = assembleFlatVector;
			VectorAssembler.prototype.visitTimestamp = assembleFlatVector;
			VectorAssembler.prototype.visitTime = assembleFlatVector;
			VectorAssembler.prototype.visitDecimal = assembleFlatVector;
			VectorAssembler.prototype.visitList = assembleListVector;
			VectorAssembler.prototype.visitStruct = assembleNestedVector;
			VectorAssembler.prototype.visitUnion = assembleUnion;
			VectorAssembler.prototype.visitInterval = assembleFlatVector;
			VectorAssembler.prototype.visitFixedSizeList = assembleListVector;
			VectorAssembler.prototype.visitMap = assembleListVector;
		}
	});

	// ../../node_modules/apache-arrow/visitor/jsontypeassembler.js
	var require_jsontypeassembler = __commonJS({
		'../../node_modules/apache-arrow/visitor/jsontypeassembler.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.JSONTypeAssembler = void 0;
			var visitor_1 = require_visitor();
			var Schema_1 = require_Schema();
			var enum_1 = require_enum();
			var JSONTypeAssembler = class extends visitor_1.Visitor {
				visit(node) {
					return node == null ? void 0 : super.visit(node);
				}
				visitNull({ typeId }) {
					return { name: Schema_1.Type[typeId].toLowerCase() };
				}
				visitInt({ typeId, bitWidth, isSigned }) {
					return {
						name: Schema_1.Type[typeId].toLowerCase(),
						bitWidth: bitWidth,
						isSigned: isSigned
					};
				}
				visitFloat({ typeId, precision }) {
					return {
						name: Schema_1.Type[typeId].toLowerCase(),
						precision: enum_1.Precision[precision]
					};
				}
				visitBinary({ typeId }) {
					return { name: Schema_1.Type[typeId].toLowerCase() };
				}
				visitBool({ typeId }) {
					return { name: Schema_1.Type[typeId].toLowerCase() };
				}
				visitUtf8({ typeId }) {
					return { name: Schema_1.Type[typeId].toLowerCase() };
				}
				visitDecimal({ typeId, scale, precision }) {
					return { name: Schema_1.Type[typeId].toLowerCase(), scale: scale, precision: precision };
				}
				visitDate({ typeId, unit }) {
					return { name: Schema_1.Type[typeId].toLowerCase(), unit: enum_1.DateUnit[unit] };
				}
				visitTime({ typeId, unit, bitWidth }) {
					return {
						name: Schema_1.Type[typeId].toLowerCase(),
						unit: enum_1.TimeUnit[unit],
						bitWidth
					};
				}
				visitTimestamp({ typeId, timezone, unit }) {
					return {
						name: Schema_1.Type[typeId].toLowerCase(),
						unit: enum_1.TimeUnit[unit],
						timezone
					};
				}
				visitInterval({ typeId, unit }) {
					return { name: Schema_1.Type[typeId].toLowerCase(), unit: enum_1.IntervalUnit[unit] };
				}
				visitList({ typeId }) {
					return { name: Schema_1.Type[typeId].toLowerCase() };
				}
				visitStruct({ typeId }) {
					return { name: Schema_1.Type[typeId].toLowerCase() };
				}
				visitUnion({ typeId, mode, typeIds }) {
					return {
						name: Schema_1.Type[typeId].toLowerCase(),
						mode: enum_1.UnionMode[mode],
						typeIds: [...typeIds]
					};
				}
				visitDictionary(node) {
					return this.visit(node.dictionary);
				}
				visitFixedSizeBinary({ typeId, byteWidth }) {
					return { name: Schema_1.Type[typeId].toLowerCase(), byteWidth: byteWidth };
				}
				visitFixedSizeList({ typeId, listSize }) {
					return { name: Schema_1.Type[typeId].toLowerCase(), listSize: listSize };
				}
				visitMap({ typeId, keysSorted }) {
					return { name: Schema_1.Type[typeId].toLowerCase(), keysSorted: keysSorted };
				}
			};
			exports.JSONTypeAssembler = JSONTypeAssembler;
		}
	});

	// ../../node_modules/apache-arrow/visitor/jsonvectorassembler.js
	var require_jsonvectorassembler = __commonJS({
		'../../node_modules/apache-arrow/visitor/jsonvectorassembler.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.JSONVectorAssembler = void 0;
			var bn_1 = require_bn();
			var column_1 = require_column();
			var vector_1 = require_vector();
			var visitor_1 = require_visitor();
			var enum_1 = require_enum();
			var recordbatch_1 = require_recordbatch2();
			var enum_2 = require_enum();
			var bit_1 = require_bit();
			var args_1 = require_args();
			var type_1 = require_type();
			var JSONVectorAssembler = class extends visitor_1.Visitor {
				static assemble(...args) {
					return new JSONVectorAssembler().visitMany(
						args_1.selectColumnChildrenArgs(recordbatch_1.RecordBatch, args)
					);
				}
				visit(column) {
					const { data, name, length } = column;
					const { offset, nullCount, nullBitmap } = data;
					const type = type_1.DataType.isDictionary(column.type)
						? column.type.indices
						: column.type;
					const buffers = Object.assign([], data.buffers, { [enum_1.BufferType.VALIDITY]: void 0 });
					return Object.assign(
						{
							name: name,
							count: length,
							VALIDITY: type_1.DataType.isNull(type)
								? void 0
								: nullCount <= 0
								? Array.from({ length }, () => 1)
								: [...new bit_1.BitIterator(nullBitmap, offset, length, null, bit_1.getBit)]
						},
						super.visit(vector_1.Vector.new(data.clone(type, offset, length, 0, buffers)))
					);
				}
				visitNull() {
					return {};
				}
				visitBool({ values, offset, length }) {
					return { DATA: [...new bit_1.BitIterator(values, offset, length, null, bit_1.getBool)] };
				}
				visitInt(vector) {
					return {
						DATA:
							vector.type.bitWidth < 64
								? [...vector.values]
								: [...bigNumsToStrings(vector.values, 2)]
					};
				}
				visitFloat(vector) {
					return { DATA: [...vector.values] };
				}
				visitUtf8(vector) {
					return { DATA: [...vector], OFFSET: [...vector.valueOffsets] };
				}
				visitBinary(vector) {
					return { DATA: [...binaryToString(vector)], OFFSET: [...vector.valueOffsets] };
				}
				visitFixedSizeBinary(vector) {
					return { DATA: [...binaryToString(vector)] };
				}
				visitDate(vector) {
					return {
						DATA:
							vector.type.unit === enum_2.DateUnit.DAY
								? [...vector.values]
								: [...bigNumsToStrings(vector.values, 2)]
					};
				}
				visitTimestamp(vector) {
					return { DATA: [...bigNumsToStrings(vector.values, 2)] };
				}
				visitTime(vector) {
					return {
						DATA:
							vector.type.unit < enum_2.TimeUnit.MICROSECOND
								? [...vector.values]
								: [...bigNumsToStrings(vector.values, 2)]
					};
				}
				visitDecimal(vector) {
					return { DATA: [...bigNumsToStrings(vector.values, 4)] };
				}
				visitList(vector) {
					return {
						OFFSET: [...vector.valueOffsets],
						children: vector.type.children.map((f, i) =>
							this.visit(new column_1.Column(f, [vector.getChildAt(i)]))
						)
					};
				}
				visitStruct(vector) {
					return {
						children: vector.type.children.map((f, i) =>
							this.visit(new column_1.Column(f, [vector.getChildAt(i)]))
						)
					};
				}
				visitUnion(vector) {
					return {
						TYPE: [...vector.typeIds],
						OFFSET: vector.type.mode === enum_2.UnionMode.Dense ? [...vector.valueOffsets] : void 0,
						children: vector.type.children.map((f, i) =>
							this.visit(new column_1.Column(f, [vector.getChildAt(i)]))
						)
					};
				}
				visitInterval(vector) {
					return { DATA: [...vector.values] };
				}
				visitFixedSizeList(vector) {
					return {
						children: vector.type.children.map((f, i) =>
							this.visit(new column_1.Column(f, [vector.getChildAt(i)]))
						)
					};
				}
				visitMap(vector) {
					return {
						OFFSET: [...vector.valueOffsets],
						children: vector.type.children.map((f, i) =>
							this.visit(new column_1.Column(f, [vector.getChildAt(i)]))
						)
					};
				}
			};
			exports.JSONVectorAssembler = JSONVectorAssembler;
			function* binaryToString(vector) {
				for (const octets of vector) {
					yield octets
						.reduce((str, byte) => {
							return `${str}${('0' + (byte & 255).toString(16)).slice(-2)}`;
						}, '')
						.toUpperCase();
				}
			}
			function* bigNumsToStrings(values, stride) {
				for (let i = -1, n = values.length / stride; ++i < n; ) {
					yield `${bn_1.BN.new(values.subarray((i + 0) * stride, (i + 1) * stride), false)}`;
				}
			}
		}
	});

	// ../../node_modules/apache-arrow/ipc/writer.js
	var require_writer = __commonJS({
		'../../node_modules/apache-arrow/ipc/writer.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.RecordBatchJSONWriter =
				exports.RecordBatchFileWriter =
				exports.RecordBatchStreamWriter =
				exports.RecordBatchWriter =
					void 0;
			var tslib_1 = require_tslib();
			var table_1 = require_table();
			var message_1 = require_message2();
			var column_1 = require_column();
			var type_1 = require_type();
			var schema_1 = require_schema();
			var message_2 = require_message();
			var metadata = require_message();
			var file_1 = require_file();
			var enum_1 = require_enum();
			var typecomparator_1 = require_typecomparator();
			var stream_1 = require_stream();
			var vectorassembler_1 = require_vectorassembler();
			var jsontypeassembler_1 = require_jsontypeassembler();
			var jsonvectorassembler_1 = require_jsonvectorassembler();
			var buffer_1 = require_buffer();
			var recordbatch_1 = require_recordbatch2();
			var interfaces_1 = require_interfaces();
			var compat_1 = require_compat();
			var RecordBatchWriter3 = class extends interfaces_1.ReadableInterop {
				constructor(options) {
					super();
					this._position = 0;
					this._started = false;
					this._sink = new stream_1.AsyncByteQueue();
					this._schema = null;
					this._dictionaryBlocks = [];
					this._recordBatchBlocks = [];
					this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map();
					compat_1.isObject(options) ||
						(options = { autoDestroy: true, writeLegacyIpcFormat: false });
					this._autoDestroy = typeof options.autoDestroy === 'boolean' ? options.autoDestroy : true;
					this._writeLegacyIpcFormat =
						typeof options.writeLegacyIpcFormat === 'boolean'
							? options.writeLegacyIpcFormat
							: false;
				}
				static throughNode(options) {
					throw new Error(`"throughNode" not available in this environment`);
				}
				static throughDOM(writableStrategy, readableStrategy) {
					throw new Error(`"throughDOM" not available in this environment`);
				}
				toString(sync = false) {
					return this._sink.toString(sync);
				}
				toUint8Array(sync = false) {
					return this._sink.toUint8Array(sync);
				}
				writeAll(input) {
					if (compat_1.isPromise(input)) {
						return input.then((x) => this.writeAll(x));
					} else if (compat_1.isAsyncIterable(input)) {
						return writeAllAsync(this, input);
					}
					return writeAll(this, input);
				}
				get closed() {
					return this._sink.closed;
				}
				[Symbol.asyncIterator]() {
					return this._sink[Symbol.asyncIterator]();
				}
				toDOMStream(options) {
					return this._sink.toDOMStream(options);
				}
				toNodeStream(options) {
					return this._sink.toNodeStream(options);
				}
				close() {
					return this.reset()._sink.close();
				}
				abort(reason) {
					return this.reset()._sink.abort(reason);
				}
				finish() {
					this._autoDestroy ? this.close() : this.reset(this._sink, this._schema);
					return this;
				}
				reset(sink = this._sink, schema = null) {
					if (sink === this._sink || sink instanceof stream_1.AsyncByteQueue) {
						this._sink = sink;
					} else {
						this._sink = new stream_1.AsyncByteQueue();
						if (sink && compat_1.isWritableDOMStream(sink)) {
							this.toDOMStream({ type: 'bytes' }).pipeTo(sink);
						} else if (sink && compat_1.isWritableNodeStream(sink)) {
							this.toNodeStream({ objectMode: false }).pipe(sink);
						}
					}
					if (this._started && this._schema) {
						this._writeFooter(this._schema);
					}
					this._started = false;
					this._dictionaryBlocks = [];
					this._recordBatchBlocks = [];
					this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map();
					if (!schema || !typecomparator_1.compareSchemas(schema, this._schema)) {
						if (schema === null) {
							this._position = 0;
							this._schema = null;
						} else {
							this._started = true;
							this._schema = schema;
							this._writeSchema(schema);
						}
					}
					return this;
				}
				write(payload) {
					let schema = null;
					if (!this._sink) {
						throw new Error(`RecordBatchWriter is closed`);
					} else if (payload == null) {
						return this.finish() && void 0;
					} else if (payload instanceof table_1.Table && !(schema = payload.schema)) {
						return this.finish() && void 0;
					} else if (payload instanceof recordbatch_1.RecordBatch && !(schema = payload.schema)) {
						return this.finish() && void 0;
					}
					if (schema && !typecomparator_1.compareSchemas(schema, this._schema)) {
						if (this._started && this._autoDestroy) {
							return this.close();
						}
						this.reset(this._sink, schema);
					}
					if (payload instanceof recordbatch_1.RecordBatch) {
						if (!(payload instanceof recordbatch_1._InternalEmptyPlaceholderRecordBatch)) {
							this._writeRecordBatch(payload);
						}
					} else if (payload instanceof table_1.Table) {
						this.writeAll(payload.chunks);
					} else if (compat_1.isIterable(payload)) {
						this.writeAll(payload);
					}
				}
				_writeMessage(message, alignment = 8) {
					const a = alignment - 1;
					const buffer = message_2.Message.encode(message);
					const flatbufferSize = buffer.byteLength;
					const prefixSize = !this._writeLegacyIpcFormat ? 8 : 4;
					const alignedSize = (flatbufferSize + prefixSize + a) & ~a;
					const nPaddingBytes = alignedSize - flatbufferSize - prefixSize;
					if (message.headerType === enum_1.MessageHeader.RecordBatch) {
						this._recordBatchBlocks.push(
							new file_1.FileBlock(alignedSize, message.bodyLength, this._position)
						);
					} else if (message.headerType === enum_1.MessageHeader.DictionaryBatch) {
						this._dictionaryBlocks.push(
							new file_1.FileBlock(alignedSize, message.bodyLength, this._position)
						);
					}
					if (!this._writeLegacyIpcFormat) {
						this._write(Int32Array.of(-1));
					}
					this._write(Int32Array.of(alignedSize - prefixSize));
					if (flatbufferSize > 0) {
						this._write(buffer);
					}
					return this._writePadding(nPaddingBytes);
				}
				_write(chunk) {
					if (this._started) {
						const buffer = buffer_1.toUint8Array(chunk);
						if (buffer && buffer.byteLength > 0) {
							this._sink.write(buffer);
							this._position += buffer.byteLength;
						}
					}
					return this;
				}
				_writeSchema(schema) {
					return this._writeMessage(message_2.Message.from(schema));
				}
				_writeFooter(schema) {
					return this._writeLegacyIpcFormat
						? this._write(Int32Array.of(0))
						: this._write(Int32Array.of(-1, 0));
				}
				_writeMagic() {
					return this._write(message_1.MAGIC);
				}
				_writePadding(nBytes) {
					return nBytes > 0 ? this._write(new Uint8Array(nBytes)) : this;
				}
				_writeRecordBatch(batch) {
					const { byteLength, nodes, bufferRegions, buffers } =
						vectorassembler_1.VectorAssembler.assemble(batch);
					const recordBatch = new metadata.RecordBatch(batch.length, nodes, bufferRegions);
					const message = message_2.Message.from(recordBatch, byteLength);
					return this._writeDictionaries(batch)._writeMessage(message)._writeBodyBuffers(buffers);
				}
				_writeDictionaryBatch(dictionary, id, isDelta = false) {
					this._dictionaryDeltaOffsets.set(
						id,
						dictionary.length + (this._dictionaryDeltaOffsets.get(id) || 0)
					);
					const { byteLength, nodes, bufferRegions, buffers } =
						vectorassembler_1.VectorAssembler.assemble(dictionary);
					const recordBatch = new metadata.RecordBatch(dictionary.length, nodes, bufferRegions);
					const dictionaryBatch = new metadata.DictionaryBatch(recordBatch, id, isDelta);
					const message = message_2.Message.from(dictionaryBatch, byteLength);
					return this._writeMessage(message)._writeBodyBuffers(buffers);
				}
				_writeBodyBuffers(buffers) {
					let buffer;
					let size, padding;
					for (let i = -1, n = buffers.length; ++i < n; ) {
						if ((buffer = buffers[i]) && (size = buffer.byteLength) > 0) {
							this._write(buffer);
							if ((padding = ((size + 7) & ~7) - size) > 0) {
								this._writePadding(padding);
							}
						}
					}
					return this;
				}
				_writeDictionaries(batch) {
					for (let [id, dictionary] of batch.dictionaries) {
						let offset = this._dictionaryDeltaOffsets.get(id) || 0;
						if (offset === 0 || (dictionary = dictionary.slice(offset)).length > 0) {
							const chunks = 'chunks' in dictionary ? dictionary.chunks : [dictionary];
							for (const chunk of chunks) {
								this._writeDictionaryBatch(chunk, id, offset > 0);
								offset += chunk.length;
							}
						}
					}
					return this;
				}
			};
			exports.RecordBatchWriter = RecordBatchWriter3;
			var RecordBatchStreamWriter3 = class extends RecordBatchWriter3 {
				static writeAll(input, options) {
					const writer = new RecordBatchStreamWriter3(options);
					if (compat_1.isPromise(input)) {
						return input.then((x) => writer.writeAll(x));
					} else if (compat_1.isAsyncIterable(input)) {
						return writeAllAsync(writer, input);
					}
					return writeAll(writer, input);
				}
			};
			exports.RecordBatchStreamWriter = RecordBatchStreamWriter3;
			var RecordBatchFileWriter3 = class extends RecordBatchWriter3 {
				static writeAll(input) {
					const writer = new RecordBatchFileWriter3();
					if (compat_1.isPromise(input)) {
						return input.then((x) => writer.writeAll(x));
					} else if (compat_1.isAsyncIterable(input)) {
						return writeAllAsync(writer, input);
					}
					return writeAll(writer, input);
				}
				constructor() {
					super();
					this._autoDestroy = true;
				}
				_writeSchema(schema) {
					return this._writeMagic()._writePadding(2);
				}
				_writeFooter(schema) {
					const buffer = file_1.Footer.encode(
						new file_1.Footer(
							schema,
							enum_1.MetadataVersion.V4,
							this._recordBatchBlocks,
							this._dictionaryBlocks
						)
					);
					return super
						._writeFooter(schema)
						._write(buffer)
						._write(Int32Array.of(buffer.byteLength))
						._writeMagic();
				}
			};
			exports.RecordBatchFileWriter = RecordBatchFileWriter3;
			var RecordBatchJSONWriter2 = class extends RecordBatchWriter3 {
				constructor() {
					super();
					this._autoDestroy = true;
					this._recordBatches = [];
					this._dictionaries = [];
				}
				static writeAll(input) {
					return new RecordBatchJSONWriter2().writeAll(input);
				}
				_writeMessage() {
					return this;
				}
				_writeFooter(schema) {
					return this;
				}
				_writeSchema(schema) {
					return this._write(`{
  "schema": ${JSON.stringify({ fields: schema.fields.map(fieldToJSON) }, null, 2)}`);
				}
				_writeDictionaries(batch) {
					if (batch.dictionaries.size > 0) {
						this._dictionaries.push(batch);
					}
					return this;
				}
				_writeDictionaryBatch(dictionary, id, isDelta = false) {
					this._dictionaryDeltaOffsets.set(
						id,
						dictionary.length + (this._dictionaryDeltaOffsets.get(id) || 0)
					);
					this._write(
						this._dictionaryBlocks.length === 0
							? `    `
							: `,
    `
					);
					this._write(`${dictionaryBatchToJSON(dictionary, id, isDelta)}`);
					this._dictionaryBlocks.push(new file_1.FileBlock(0, 0, 0));
					return this;
				}
				_writeRecordBatch(batch) {
					this._writeDictionaries(batch);
					this._recordBatches.push(batch);
					return this;
				}
				close() {
					if (this._dictionaries.length > 0) {
						this._write(`,
  "dictionaries": [
`);
						for (const batch of this._dictionaries) {
							super._writeDictionaries(batch);
						}
						this._write(`
  ]`);
					}
					if (this._recordBatches.length > 0) {
						for (let i = -1, n = this._recordBatches.length; ++i < n; ) {
							this._write(
								i === 0
									? `,
  "batches": [
    `
									: `,
    `
							);
							this._write(`${recordBatchToJSON(this._recordBatches[i])}`);
							this._recordBatchBlocks.push(new file_1.FileBlock(0, 0, 0));
						}
						this._write(`
  ]`);
					}
					if (this._schema) {
						this._write(`
}`);
					}
					this._dictionaries = [];
					this._recordBatches = [];
					return super.close();
				}
			};
			exports.RecordBatchJSONWriter = RecordBatchJSONWriter2;
			function writeAll(writer, input) {
				let chunks = input;
				if (input instanceof table_1.Table) {
					chunks = input.chunks;
					writer.reset(void 0, input.schema);
				}
				for (const batch of chunks) {
					writer.write(batch);
				}
				return writer.finish();
			}
			function writeAllAsync(writer, batches) {
				var batches_1, batches_1_1;
				var e_1, _a;
				return tslib_1.__awaiter(this, void 0, void 0, function* () {
					try {
						for (
							batches_1 = tslib_1.__asyncValues(batches);
							(batches_1_1 = yield batches_1.next()), !batches_1_1.done;

						) {
							const batch = batches_1_1.value;
							writer.write(batch);
						}
					} catch (e_1_1) {
						e_1 = { error: e_1_1 };
					} finally {
						try {
							if (batches_1_1 && !batches_1_1.done && (_a = batches_1.return))
								yield _a.call(batches_1);
						} finally {
							if (e_1) throw e_1.error;
						}
					}
					return writer.finish();
				});
			}
			function fieldToJSON({ name, type, nullable }) {
				const assembler = new jsontypeassembler_1.JSONTypeAssembler();
				return {
					name: name,
					nullable: nullable,
					type: assembler.visit(type),
					children: (type.children || []).map(fieldToJSON),
					dictionary: !type_1.DataType.isDictionary(type)
						? void 0
						: {
								id: type.id,
								isOrdered: type.isOrdered,
								indexType: assembler.visit(type.indices)
						  }
				};
			}
			function dictionaryBatchToJSON(dictionary, id, isDelta = false) {
				const field = new schema_1.Field(`${id}`, dictionary.type, dictionary.nullCount > 0);
				const columns = jsonvectorassembler_1.JSONVectorAssembler.assemble(
					new column_1.Column(field, [dictionary])
				);
				return JSON.stringify(
					{
						id: id,
						isDelta: isDelta,
						data: {
							count: dictionary.length,
							columns: columns
						}
					},
					null,
					2
				);
			}
			function recordBatchToJSON(records) {
				return JSON.stringify(
					{
						count: records.length,
						columns: jsonvectorassembler_1.JSONVectorAssembler.assemble(records)
					},
					null,
					2
				);
			}
		}
	});

	// ../../node_modules/apache-arrow/util/recordbatch.js
	var require_recordbatch = __commonJS({
		'../../node_modules/apache-arrow/util/recordbatch.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.distributeVectorsIntoRecordBatches =
				exports.distributeColumnsIntoRecordBatches =
				exports.ensureSameLengthData =
					void 0;
			var data_1 = require_data();
			var schema_1 = require_schema();
			var chunked_1 = require_chunked();
			var recordbatch_1 = require_recordbatch2();
			var noopBuf = new Uint8Array(0);
			var nullBufs = (bitmapLength) => [noopBuf, noopBuf, new Uint8Array(bitmapLength), noopBuf];
			function ensureSameLengthData(
				schema,
				chunks,
				batchLength = chunks.reduce((l, c) => Math.max(l, c.length), 0)
			) {
				let data;
				let field;
				let i = -1;
				const n = chunks.length;
				const fields = [...schema.fields];
				const batchData = [];
				const bitmapLength = ((batchLength + 63) & ~63) >> 3;
				while (++i < n) {
					if ((data = chunks[i]) && data.length === batchLength) {
						batchData[i] = data;
					} else {
						(field = fields[i]).nullable || (fields[i] = fields[i].clone({ nullable: true }));
						batchData[i] = data
							? data._changeLengthAndBackfillNullBitmap(batchLength)
							: data_1.Data.new(field.type, 0, batchLength, batchLength, nullBufs(bitmapLength));
					}
				}
				return [new schema_1.Schema(fields), batchLength, batchData];
			}
			exports.ensureSameLengthData = ensureSameLengthData;
			function distributeColumnsIntoRecordBatches(columns) {
				return distributeVectorsIntoRecordBatches(
					new schema_1.Schema(columns.map(({ field }) => field)),
					columns
				);
			}
			exports.distributeColumnsIntoRecordBatches = distributeColumnsIntoRecordBatches;
			function distributeVectorsIntoRecordBatches(schema, vecs) {
				return uniformlyDistributeChunksAcrossRecordBatches(
					schema,
					vecs.map((v) => (v instanceof chunked_1.Chunked ? v.chunks.map((c) => c.data) : [v.data]))
				);
			}
			exports.distributeVectorsIntoRecordBatches = distributeVectorsIntoRecordBatches;
			function uniformlyDistributeChunksAcrossRecordBatches(schema, columns) {
				const fields = [...schema.fields];
				const batchArgs = [];
				const memo = { numBatches: columns.reduce((n, c) => Math.max(n, c.length), 0) };
				let numBatches = 0,
					batchLength = 0;
				let i = -1;
				const numColumns = columns.length;
				let child,
					childData = [];
				while (memo.numBatches-- > 0) {
					for (batchLength = Number.POSITIVE_INFINITY, i = -1; ++i < numColumns; ) {
						childData[i] = child = columns[i].shift();
						batchLength = Math.min(batchLength, child ? child.length : batchLength);
					}
					if (isFinite(batchLength)) {
						childData = distributeChildData(fields, batchLength, childData, columns, memo);
						if (batchLength > 0) {
							batchArgs[numBatches++] = [batchLength, childData.slice()];
						}
					}
				}
				return [
					(schema = new schema_1.Schema(fields, schema.metadata)),
					batchArgs.map((xs) => new recordbatch_1.RecordBatch(schema, ...xs))
				];
			}
			function distributeChildData(fields, batchLength, childData, columns, memo) {
				let data;
				let field;
				let length = 0,
					i = -1;
				const n = columns.length;
				const bitmapLength = ((batchLength + 63) & ~63) >> 3;
				while (++i < n) {
					if ((data = childData[i]) && (length = data.length) >= batchLength) {
						if (length === batchLength) {
							childData[i] = data;
						} else {
							childData[i] = data.slice(0, batchLength);
							data = data.slice(batchLength, length - batchLength);
							memo.numBatches = Math.max(memo.numBatches, columns[i].unshift(data));
						}
					} else {
						(field = fields[i]).nullable || (fields[i] = field.clone({ nullable: true }));
						childData[i] = data
							? data._changeLengthAndBackfillNullBitmap(batchLength)
							: data_1.Data.new(field.type, 0, batchLength, batchLength, nullBufs(bitmapLength));
					}
				}
				return childData;
			}
		}
	});

	// ../../node_modules/apache-arrow/vector/base.js
	var require_base = __commonJS({
		'../../node_modules/apache-arrow/vector/base.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.BaseVector = void 0;
			var enum_1 = require_enum();
			var chunked_1 = require_chunked();
			var vector_1 = require_vector2();
			var vector_2 = require_vector();
			var BaseVector2 = class extends vector_2.AbstractVector {
				constructor(data, children) {
					super();
					this._children = children;
					this.numChildren = data.childData.length;
					this._bindDataAccessors((this.data = data));
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
					return `${enum_1.Type[this.typeId]}Vector`;
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
				clone(data, children = this._children) {
					return vector_2.Vector.new(data, children);
				}
				concat(...others) {
					return chunked_1.Chunked.concat(this, ...others);
				}
				slice(begin, end) {
					return vector_1.clampRange(this, begin, end, this._sliceInternal);
				}
				isValid(index) {
					if (this.nullCount > 0) {
						const idx = this.offset + index;
						const val = this.nullBitmap[idx >> 3];
						const mask = val & (1 << idx % 8);
						return mask !== 0;
					}
					return true;
				}
				getChildAt(index) {
					return index < 0 || index >= this.numChildren
						? null
						: (this._children || (this._children = []))[index] ||
								(this._children[index] = vector_2.Vector.new(this.data.childData[index]));
				}
				toJSON() {
					return [...this];
				}
				_sliceInternal(self2, begin, end) {
					return self2.clone(self2.data.slice(begin, end - begin), null);
				}
				_bindDataAccessors(data) {}
			};
			exports.BaseVector = BaseVector2;
			BaseVector2.prototype[Symbol.isConcatSpreadable] = true;
		}
	});

	// ../../node_modules/apache-arrow/vector/binary.js
	var require_binary2 = __commonJS({
		'../../node_modules/apache-arrow/vector/binary.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.BinaryVector = void 0;
			var vector_1 = require_vector();
			var base_1 = require_base();
			var type_1 = require_type();
			var BinaryVector2 = class extends base_1.BaseVector {
				asUtf8() {
					return vector_1.Vector.new(this.data.clone(new type_1.Utf8()));
				}
			};
			exports.BinaryVector = BinaryVector2;
		}
	});

	// ../../node_modules/apache-arrow/vector/bool.js
	var require_bool2 = __commonJS({
		'../../node_modules/apache-arrow/vector/bool.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.BoolVector = void 0;
			var type_1 = require_type();
			var base_1 = require_base();
			var index_1 = require_vector3();
			var BoolVector2 = class extends base_1.BaseVector {
				static from(input) {
					return index_1.vectorFromValuesWithType(() => new type_1.Bool(), input);
				}
			};
			exports.BoolVector = BoolVector2;
		}
	});

	// ../../node_modules/apache-arrow/vector/date.js
	var require_date2 = __commonJS({
		'../../node_modules/apache-arrow/vector/date.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.DateMillisecondVector = exports.DateDayVector = exports.DateVector = void 0;
			var enum_1 = require_enum();
			var base_1 = require_base();
			var index_1 = require_vector3();
			var type_1 = require_type();
			var DateVector2 = class extends base_1.BaseVector {
				static from(...args) {
					if (args.length === 2) {
						return index_1.vectorFromValuesWithType(
							() =>
								args[1] === enum_1.DateUnit.DAY
									? new type_1.DateDay()
									: new type_1.DateMillisecond(),
							args[0]
						);
					}
					return index_1.vectorFromValuesWithType(() => new type_1.DateMillisecond(), args[0]);
				}
			};
			exports.DateVector = DateVector2;
			var DateDayVector2 = class extends DateVector2 {};
			exports.DateDayVector = DateDayVector2;
			var DateMillisecondVector2 = class extends DateVector2 {};
			exports.DateMillisecondVector = DateMillisecondVector2;
		}
	});

	// ../../node_modules/apache-arrow/vector/decimal.js
	var require_decimal2 = __commonJS({
		'../../node_modules/apache-arrow/vector/decimal.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.DecimalVector = void 0;
			var base_1 = require_base();
			var DecimalVector2 = class extends base_1.BaseVector {};
			exports.DecimalVector = DecimalVector2;
		}
	});

	// ../../node_modules/apache-arrow/vector/dictionary.js
	var require_dictionary2 = __commonJS({
		'../../node_modules/apache-arrow/vector/dictionary.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.DictionaryVector = void 0;
			var data_1 = require_data();
			var vector_1 = require_vector();
			var base_1 = require_base();
			var index_1 = require_vector3();
			var type_1 = require_type();
			var DictionaryVector2 = class extends base_1.BaseVector {
				constructor(data) {
					super(data);
					this.indices = vector_1.Vector.new(data.clone(this.type.indices));
				}
				static from(...args) {
					if (args.length === 3) {
						const [values, indices, keys] = args;
						const type = new type_1.Dictionary(values.type, indices, null, null);
						return vector_1.Vector.new(
							data_1.Data.Dictionary(type, 0, keys.length, 0, null, keys, values)
						);
					}
					return index_1.vectorFromValuesWithType(() => args[0].type, args[0]);
				}
				get dictionary() {
					return this.data.dictionary;
				}
				reverseLookup(value) {
					return this.dictionary.indexOf(value);
				}
				getKey(idx) {
					return this.indices.get(idx);
				}
				getValue(key) {
					return this.dictionary.get(key);
				}
				setKey(idx, key) {
					return this.indices.set(idx, key);
				}
				setValue(key, value) {
					return this.dictionary.set(key, value);
				}
			};
			exports.DictionaryVector = DictionaryVector2;
			DictionaryVector2.prototype.indices = null;
		}
	});

	// ../../node_modules/apache-arrow/vector/fixedsizebinary.js
	var require_fixedsizebinary2 = __commonJS({
		'../../node_modules/apache-arrow/vector/fixedsizebinary.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.FixedSizeBinaryVector = void 0;
			var base_1 = require_base();
			var FixedSizeBinaryVector2 = class extends base_1.BaseVector {};
			exports.FixedSizeBinaryVector = FixedSizeBinaryVector2;
		}
	});

	// ../../node_modules/apache-arrow/vector/fixedsizelist.js
	var require_fixedsizelist2 = __commonJS({
		'../../node_modules/apache-arrow/vector/fixedsizelist.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.FixedSizeListVector = void 0;
			var base_1 = require_base();
			var FixedSizeListVector2 = class extends base_1.BaseVector {};
			exports.FixedSizeListVector = FixedSizeListVector2;
		}
	});

	// ../../node_modules/apache-arrow/vector/float.js
	var require_float2 = __commonJS({
		'../../node_modules/apache-arrow/vector/float.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Float64Vector =
				exports.Float32Vector =
				exports.Float16Vector =
				exports.FloatVector =
					void 0;
			var data_1 = require_data();
			var vector_1 = require_vector();
			var base_1 = require_base();
			var index_1 = require_vector3();
			var type_1 = require_type();
			var FloatVector2 = class extends base_1.BaseVector {
				static from(input) {
					let ArrowType = vectorTypeToDataType(this);
					if (input instanceof ArrayBuffer || ArrayBuffer.isView(input)) {
						const InputType = arrayTypeToDataType(input.constructor) || ArrowType;
						if (ArrowType === null) {
							ArrowType = InputType;
						}
						if (ArrowType && ArrowType === InputType) {
							const type = new ArrowType();
							const length = input.byteLength / type.ArrayType.BYTES_PER_ELEMENT;
							if (!convertTo16Bit(ArrowType, input.constructor)) {
								return vector_1.Vector.new(data_1.Data.Float(type, 0, length, 0, null, input));
							}
						}
					}
					if (ArrowType) {
						return index_1.vectorFromValuesWithType(() => new ArrowType(), input);
					}
					if (input instanceof DataView || input instanceof ArrayBuffer) {
						throw new TypeError(
							`Cannot infer float type from instance of ${input.constructor.name}`
						);
					}
					throw new TypeError('Unrecognized FloatVector input');
				}
			};
			exports.FloatVector = FloatVector2;
			var Float16Vector2 = class extends FloatVector2 {
				toFloat32Array() {
					return new Float32Array(this);
				}
				toFloat64Array() {
					return new Float64Array(this);
				}
			};
			exports.Float16Vector = Float16Vector2;
			var Float32Vector2 = class extends FloatVector2 {};
			exports.Float32Vector = Float32Vector2;
			var Float64Vector2 = class extends FloatVector2 {};
			exports.Float64Vector = Float64Vector2;
			var convertTo16Bit = (typeCtor, dataCtor) => {
				return typeCtor === type_1.Float16 && dataCtor !== Uint16Array;
			};
			var arrayTypeToDataType = (ctor) => {
				switch (ctor) {
					case Uint16Array:
						return type_1.Float16;
					case Float32Array:
						return type_1.Float32;
					case Float64Array:
						return type_1.Float64;
					default:
						return null;
				}
			};
			var vectorTypeToDataType = (ctor) => {
				switch (ctor) {
					case Float16Vector2:
						return type_1.Float16;
					case Float32Vector2:
						return type_1.Float32;
					case Float64Vector2:
						return type_1.Float64;
					default:
						return null;
				}
			};
		}
	});

	// ../../node_modules/apache-arrow/vector/interval.js
	var require_interval2 = __commonJS({
		'../../node_modules/apache-arrow/vector/interval.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.IntervalYearMonthVector =
				exports.IntervalDayTimeVector =
				exports.IntervalVector =
					void 0;
			var base_1 = require_base();
			var IntervalVector2 = class extends base_1.BaseVector {};
			exports.IntervalVector = IntervalVector2;
			var IntervalDayTimeVector2 = class extends IntervalVector2 {};
			exports.IntervalDayTimeVector = IntervalDayTimeVector2;
			var IntervalYearMonthVector2 = class extends IntervalVector2 {};
			exports.IntervalYearMonthVector = IntervalYearMonthVector2;
		}
	});

	// ../../node_modules/apache-arrow/vector/int.js
	var require_int3 = __commonJS({
		'../../node_modules/apache-arrow/vector/int.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Uint64Vector =
				exports.Uint32Vector =
				exports.Uint16Vector =
				exports.Uint8Vector =
				exports.Int64Vector =
				exports.Int32Vector =
				exports.Int16Vector =
				exports.Int8Vector =
				exports.IntVector =
					void 0;
			var data_1 = require_data();
			var vector_1 = require_vector();
			var base_1 = require_base();
			var index_1 = require_vector3();
			var compat_1 = require_compat();
			var buffer_1 = require_buffer();
			var type_1 = require_type();
			var IntVector2 = class extends base_1.BaseVector {
				static from(...args) {
					const [input, is64bit = false] = args;
					let ArrowType = vectorTypeToDataType(this, is64bit);
					if (input instanceof ArrayBuffer || ArrayBuffer.isView(input)) {
						const InputType = arrayTypeToDataType(input.constructor, is64bit) || ArrowType;
						if (ArrowType === null) {
							ArrowType = InputType;
						}
						if (ArrowType && ArrowType === InputType) {
							const type = new ArrowType();
							let length = input.byteLength / type.ArrayType.BYTES_PER_ELEMENT;
							if (convert32To64Bit(ArrowType, input.constructor)) {
								length *= 0.5;
							}
							return vector_1.Vector.new(data_1.Data.Int(type, 0, length, 0, null, input));
						}
					}
					if (ArrowType) {
						return index_1.vectorFromValuesWithType(() => new ArrowType(), input);
					}
					if (input instanceof DataView || input instanceof ArrayBuffer) {
						throw new TypeError(
							`Cannot infer integer type from instance of ${input.constructor.name}`
						);
					}
					throw new TypeError('Unrecognized IntVector input');
				}
			};
			exports.IntVector = IntVector2;
			var Int8Vector2 = class extends IntVector2 {};
			exports.Int8Vector = Int8Vector2;
			var Int16Vector2 = class extends IntVector2 {};
			exports.Int16Vector = Int16Vector2;
			var Int32Vector2 = class extends IntVector2 {};
			exports.Int32Vector = Int32Vector2;
			var Int64Vector2 = class extends IntVector2 {
				toBigInt64Array() {
					return buffer_1.toBigInt64Array(this.values);
				}
				get values64() {
					return this._values64 || (this._values64 = this.toBigInt64Array());
				}
			};
			exports.Int64Vector = Int64Vector2;
			var Uint8Vector2 = class extends IntVector2 {};
			exports.Uint8Vector = Uint8Vector2;
			var Uint16Vector2 = class extends IntVector2 {};
			exports.Uint16Vector = Uint16Vector2;
			var Uint32Vector2 = class extends IntVector2 {};
			exports.Uint32Vector = Uint32Vector2;
			var Uint64Vector2 = class extends IntVector2 {
				toBigUint64Array() {
					return buffer_1.toBigUint64Array(this.values);
				}
				get values64() {
					return this._values64 || (this._values64 = this.toBigUint64Array());
				}
			};
			exports.Uint64Vector = Uint64Vector2;
			var convert32To64Bit = (typeCtor, dataCtor) => {
				return (
					(typeCtor === type_1.Int64 || typeCtor === type_1.Uint64) &&
					(dataCtor === Int32Array || dataCtor === Uint32Array)
				);
			};
			var arrayTypeToDataType = (ctor, is64bit) => {
				switch (ctor) {
					case Int8Array:
						return type_1.Int8;
					case Int16Array:
						return type_1.Int16;
					case Int32Array:
						return is64bit ? type_1.Int64 : type_1.Int32;
					case compat_1.BigInt64Array:
						return type_1.Int64;
					case Uint8Array:
						return type_1.Uint8;
					case Uint16Array:
						return type_1.Uint16;
					case Uint32Array:
						return is64bit ? type_1.Uint64 : type_1.Uint32;
					case compat_1.BigUint64Array:
						return type_1.Uint64;
					default:
						return null;
				}
			};
			var vectorTypeToDataType = (ctor, is64bit) => {
				switch (ctor) {
					case Int8Vector2:
						return type_1.Int8;
					case Int16Vector2:
						return type_1.Int16;
					case Int32Vector2:
						return is64bit ? type_1.Int64 : type_1.Int32;
					case Int64Vector2:
						return type_1.Int64;
					case Uint8Vector2:
						return type_1.Uint8;
					case Uint16Vector2:
						return type_1.Uint16;
					case Uint32Vector2:
						return is64bit ? type_1.Uint64 : type_1.Uint32;
					case Uint64Vector2:
						return type_1.Uint64;
					default:
						return null;
				}
			};
		}
	});

	// ../../node_modules/apache-arrow/vector/list.js
	var require_list2 = __commonJS({
		'../../node_modules/apache-arrow/vector/list.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.ListVector = void 0;
			var base_1 = require_base();
			var ListVector2 = class extends base_1.BaseVector {};
			exports.ListVector = ListVector2;
		}
	});

	// ../../node_modules/apache-arrow/vector/map.js
	var require_map2 = __commonJS({
		'../../node_modules/apache-arrow/vector/map.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.MapVector = void 0;
			var row_1 = require_row();
			var vector_1 = require_vector();
			var base_1 = require_base();
			var type_1 = require_type();
			var MapVector2 = class extends base_1.BaseVector {
				asList() {
					const child = this.type.children[0];
					return vector_1.Vector.new(this.data.clone(new type_1.List(child)));
				}
				bind(index) {
					const child = this.getChildAt(0);
					const { [index]: begin, [index + 1]: end } = this.valueOffsets;
					return new row_1.MapRow(child.slice(begin, end));
				}
			};
			exports.MapVector = MapVector2;
		}
	});

	// ../../node_modules/apache-arrow/vector/null.js
	var require_null2 = __commonJS({
		'../../node_modules/apache-arrow/vector/null.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.NullVector = void 0;
			var base_1 = require_base();
			var NullVector2 = class extends base_1.BaseVector {};
			exports.NullVector = NullVector2;
		}
	});

	// ../../node_modules/apache-arrow/vector/struct.js
	var require_struct2 = __commonJS({
		'../../node_modules/apache-arrow/vector/struct.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.StructVector = void 0;
			var row_1 = require_row();
			var base_1 = require_base();
			var kRowIndex = Symbol.for('rowIndex');
			var StructVector2 = class extends base_1.BaseVector {
				bind(index) {
					const proto = this._row || (this._row = new row_1.StructRow(this));
					const bound = Object.create(proto);
					bound[kRowIndex] = index;
					return bound;
				}
			};
			exports.StructVector = StructVector2;
		}
	});

	// ../../node_modules/apache-arrow/vector/timestamp.js
	var require_timestamp2 = __commonJS({
		'../../node_modules/apache-arrow/vector/timestamp.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.TimestampNanosecondVector =
				exports.TimestampMicrosecondVector =
				exports.TimestampMillisecondVector =
				exports.TimestampSecondVector =
				exports.TimestampVector =
					void 0;
			var base_1 = require_base();
			var TimestampVector2 = class extends base_1.BaseVector {};
			exports.TimestampVector = TimestampVector2;
			var TimestampSecondVector2 = class extends TimestampVector2 {};
			exports.TimestampSecondVector = TimestampSecondVector2;
			var TimestampMillisecondVector2 = class extends TimestampVector2 {};
			exports.TimestampMillisecondVector = TimestampMillisecondVector2;
			var TimestampMicrosecondVector2 = class extends TimestampVector2 {};
			exports.TimestampMicrosecondVector = TimestampMicrosecondVector2;
			var TimestampNanosecondVector2 = class extends TimestampVector2 {};
			exports.TimestampNanosecondVector = TimestampNanosecondVector2;
		}
	});

	// ../../node_modules/apache-arrow/vector/time.js
	var require_time2 = __commonJS({
		'../../node_modules/apache-arrow/vector/time.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.TimeNanosecondVector =
				exports.TimeMicrosecondVector =
				exports.TimeMillisecondVector =
				exports.TimeSecondVector =
				exports.TimeVector =
					void 0;
			var base_1 = require_base();
			var TimeVector2 = class extends base_1.BaseVector {};
			exports.TimeVector = TimeVector2;
			var TimeSecondVector2 = class extends TimeVector2 {};
			exports.TimeSecondVector = TimeSecondVector2;
			var TimeMillisecondVector2 = class extends TimeVector2 {};
			exports.TimeMillisecondVector = TimeMillisecondVector2;
			var TimeMicrosecondVector2 = class extends TimeVector2 {};
			exports.TimeMicrosecondVector = TimeMicrosecondVector2;
			var TimeNanosecondVector2 = class extends TimeVector2 {};
			exports.TimeNanosecondVector = TimeNanosecondVector2;
		}
	});

	// ../../node_modules/apache-arrow/vector/union.js
	var require_union2 = __commonJS({
		'../../node_modules/apache-arrow/vector/union.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.SparseUnionVector = exports.DenseUnionVector = exports.UnionVector = void 0;
			var base_1 = require_base();
			var UnionVector2 = class extends base_1.BaseVector {
				get typeIdToChildIndex() {
					return this.data.type.typeIdToChildIndex;
				}
			};
			exports.UnionVector = UnionVector2;
			var DenseUnionVector2 = class extends UnionVector2 {
				get valueOffsets() {
					return this.data.valueOffsets;
				}
			};
			exports.DenseUnionVector = DenseUnionVector2;
			var SparseUnionVector2 = class extends UnionVector2 {};
			exports.SparseUnionVector = SparseUnionVector2;
		}
	});

	// ../../node_modules/apache-arrow/vector/utf8.js
	var require_utf83 = __commonJS({
		'../../node_modules/apache-arrow/vector/utf8.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Utf8Vector = void 0;
			var vector_1 = require_vector();
			var base_1 = require_base();
			var type_1 = require_type();
			var index_1 = require_vector3();
			var Utf8Vector2 = class extends base_1.BaseVector {
				static from(input) {
					return index_1.vectorFromValuesWithType(() => new type_1.Utf8(), input);
				}
				asBinary() {
					return vector_1.Vector.new(this.data.clone(new type_1.Binary()));
				}
			};
			exports.Utf8Vector = Utf8Vector2;
		}
	});

	// ../../node_modules/apache-arrow/util/fn.js
	var require_fn = __commonJS({
		'../../node_modules/apache-arrow/util/fn.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.partial2 = exports.partial1 = exports.partial0 = void 0;
			function partial0(visit) {
				return function () {
					return visit(this);
				};
			}
			exports.partial0 = partial0;
			function partial1(visit) {
				return function (a) {
					return visit(this, a);
				};
			}
			exports.partial1 = partial1;
			function partial2(visit) {
				return function (a, b) {
					return visit(this, a, b);
				};
			}
			exports.partial2 = partial2;
		}
	});

	// ../../node_modules/apache-arrow/visitor/get.js
	var require_get = __commonJS({
		'../../node_modules/apache-arrow/visitor/get.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.instance = exports.GetVisitor = void 0;
			var bn_1 = require_bn();
			var visitor_1 = require_visitor();
			var utf8_1 = require_utf8();
			var math_1 = require_math();
			var enum_1 = require_enum();
			var GetVisitor = class extends visitor_1.Visitor {};
			exports.GetVisitor = GetVisitor;
			var epochDaysToMs = (data, index) => 864e5 * data[index];
			var epochMillisecondsLongToMs = (data, index) =>
				4294967296 * data[index + 1] + (data[index] >>> 0);
			var epochMicrosecondsLongToMs = (data, index) =>
				4294967296 * (data[index + 1] / 1e3) + (data[index] >>> 0) / 1e3;
			var epochNanosecondsLongToMs = (data, index) =>
				4294967296 * (data[index + 1] / 1e6) + (data[index] >>> 0) / 1e6;
			var epochMillisecondsToDate = (epochMs) => new Date(epochMs);
			var epochDaysToDate = (data, index) => epochMillisecondsToDate(epochDaysToMs(data, index));
			var epochMillisecondsLongToDate = (data, index) =>
				epochMillisecondsToDate(epochMillisecondsLongToMs(data, index));
			var getNull = (_vector, _index) => null;
			var getVariableWidthBytes = (values, valueOffsets, index) => {
				const { [index]: x, [index + 1]: y } = valueOffsets;
				return x != null && y != null ? values.subarray(x, y) : null;
			};
			var getBool = ({ offset, values }, index) => {
				const idx = offset + index;
				const byte = values[idx >> 3];
				return (byte & (1 << idx % 8)) !== 0;
			};
			var getDateDay = ({ values }, index) => epochDaysToDate(values, index);
			var getDateMillisecond = ({ values }, index) =>
				epochMillisecondsLongToDate(values, index * 2);
			var getNumeric = ({ stride, values }, index) => values[stride * index];
			var getFloat16 = ({ stride, values }, index) =>
				math_1.uint16ToFloat64(values[stride * index]);
			var getBigInts = ({ stride, values, type }, index) =>
				bn_1.BN.new(values.subarray(stride * index, stride * (index + 1)), type.isSigned);
			var getFixedSizeBinary = ({ stride, values }, index) =>
				values.subarray(stride * index, stride * (index + 1));
			var getBinary = ({ values, valueOffsets }, index) =>
				getVariableWidthBytes(values, valueOffsets, index);
			var getUtf8 = ({ values, valueOffsets }, index) => {
				const bytes = getVariableWidthBytes(values, valueOffsets, index);
				return bytes !== null ? utf8_1.decodeUtf8(bytes) : null;
			};
			var getInt = (vector, index) =>
				vector.type.bitWidth < 64 ? getNumeric(vector, index) : getBigInts(vector, index);
			var getFloat = (vector, index) =>
				vector.type.precision !== enum_1.Precision.HALF
					? getNumeric(vector, index)
					: getFloat16(vector, index);
			var getDate = (vector, index) =>
				vector.type.unit === enum_1.DateUnit.DAY
					? getDateDay(vector, index)
					: getDateMillisecond(vector, index);
			var getTimestampSecond = ({ values }, index) =>
				1e3 * epochMillisecondsLongToMs(values, index * 2);
			var getTimestampMillisecond = ({ values }, index) =>
				epochMillisecondsLongToMs(values, index * 2);
			var getTimestampMicrosecond = ({ values }, index) =>
				epochMicrosecondsLongToMs(values, index * 2);
			var getTimestampNanosecond = ({ values }, index) =>
				epochNanosecondsLongToMs(values, index * 2);
			var getTimestamp = (vector, index) => {
				switch (vector.type.unit) {
					case enum_1.TimeUnit.SECOND:
						return getTimestampSecond(vector, index);
					case enum_1.TimeUnit.MILLISECOND:
						return getTimestampMillisecond(vector, index);
					case enum_1.TimeUnit.MICROSECOND:
						return getTimestampMicrosecond(vector, index);
					case enum_1.TimeUnit.NANOSECOND:
						return getTimestampNanosecond(vector, index);
				}
			};
			var getTimeSecond = ({ values, stride }, index) => values[stride * index];
			var getTimeMillisecond = ({ values, stride }, index) => values[stride * index];
			var getTimeMicrosecond = ({ values }, index) =>
				bn_1.BN.signed(values.subarray(2 * index, 2 * (index + 1)));
			var getTimeNanosecond = ({ values }, index) =>
				bn_1.BN.signed(values.subarray(2 * index, 2 * (index + 1)));
			var getTime = (vector, index) => {
				switch (vector.type.unit) {
					case enum_1.TimeUnit.SECOND:
						return getTimeSecond(vector, index);
					case enum_1.TimeUnit.MILLISECOND:
						return getTimeMillisecond(vector, index);
					case enum_1.TimeUnit.MICROSECOND:
						return getTimeMicrosecond(vector, index);
					case enum_1.TimeUnit.NANOSECOND:
						return getTimeNanosecond(vector, index);
				}
			};
			var getDecimal = ({ values }, index) =>
				bn_1.BN.decimal(values.subarray(4 * index, 4 * (index + 1)));
			var getList = (vector, index) => {
				const child = vector.getChildAt(0),
					{ valueOffsets, stride } = vector;
				return child.slice(valueOffsets[index * stride], valueOffsets[index * stride + 1]);
			};
			var getMap = (vector, index) => {
				return vector.bind(index);
			};
			var getStruct = (vector, index) => {
				return vector.bind(index);
			};
			var getUnion = (vector, index) => {
				return vector.type.mode === enum_1.UnionMode.Dense
					? getDenseUnion(vector, index)
					: getSparseUnion(vector, index);
			};
			var getDenseUnion = (vector, index) => {
				const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
				const child = vector.getChildAt(childIndex);
				return child ? child.get(vector.valueOffsets[index]) : null;
			};
			var getSparseUnion = (vector, index) => {
				const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
				const child = vector.getChildAt(childIndex);
				return child ? child.get(index) : null;
			};
			var getDictionary = (vector, index) => {
				return vector.getValue(vector.getKey(index));
			};
			var getInterval = (vector, index) =>
				vector.type.unit === enum_1.IntervalUnit.DAY_TIME
					? getIntervalDayTime(vector, index)
					: getIntervalYearMonth(vector, index);
			var getIntervalDayTime = ({ values }, index) => values.subarray(2 * index, 2 * (index + 1));
			var getIntervalYearMonth = ({ values }, index) => {
				const interval = values[index];
				const int32s = new Int32Array(2);
				int32s[0] = (interval / 12) | 0;
				int32s[1] = interval % 12 | 0;
				return int32s;
			};
			var getFixedSizeList = (vector, index) => {
				const child = vector.getChildAt(0),
					{ stride } = vector;
				return child.slice(index * stride, (index + 1) * stride);
			};
			GetVisitor.prototype.visitNull = getNull;
			GetVisitor.prototype.visitBool = getBool;
			GetVisitor.prototype.visitInt = getInt;
			GetVisitor.prototype.visitInt8 = getNumeric;
			GetVisitor.prototype.visitInt16 = getNumeric;
			GetVisitor.prototype.visitInt32 = getNumeric;
			GetVisitor.prototype.visitInt64 = getBigInts;
			GetVisitor.prototype.visitUint8 = getNumeric;
			GetVisitor.prototype.visitUint16 = getNumeric;
			GetVisitor.prototype.visitUint32 = getNumeric;
			GetVisitor.prototype.visitUint64 = getBigInts;
			GetVisitor.prototype.visitFloat = getFloat;
			GetVisitor.prototype.visitFloat16 = getFloat16;
			GetVisitor.prototype.visitFloat32 = getNumeric;
			GetVisitor.prototype.visitFloat64 = getNumeric;
			GetVisitor.prototype.visitUtf8 = getUtf8;
			GetVisitor.prototype.visitBinary = getBinary;
			GetVisitor.prototype.visitFixedSizeBinary = getFixedSizeBinary;
			GetVisitor.prototype.visitDate = getDate;
			GetVisitor.prototype.visitDateDay = getDateDay;
			GetVisitor.prototype.visitDateMillisecond = getDateMillisecond;
			GetVisitor.prototype.visitTimestamp = getTimestamp;
			GetVisitor.prototype.visitTimestampSecond = getTimestampSecond;
			GetVisitor.prototype.visitTimestampMillisecond = getTimestampMillisecond;
			GetVisitor.prototype.visitTimestampMicrosecond = getTimestampMicrosecond;
			GetVisitor.prototype.visitTimestampNanosecond = getTimestampNanosecond;
			GetVisitor.prototype.visitTime = getTime;
			GetVisitor.prototype.visitTimeSecond = getTimeSecond;
			GetVisitor.prototype.visitTimeMillisecond = getTimeMillisecond;
			GetVisitor.prototype.visitTimeMicrosecond = getTimeMicrosecond;
			GetVisitor.prototype.visitTimeNanosecond = getTimeNanosecond;
			GetVisitor.prototype.visitDecimal = getDecimal;
			GetVisitor.prototype.visitList = getList;
			GetVisitor.prototype.visitStruct = getStruct;
			GetVisitor.prototype.visitUnion = getUnion;
			GetVisitor.prototype.visitDenseUnion = getDenseUnion;
			GetVisitor.prototype.visitSparseUnion = getSparseUnion;
			GetVisitor.prototype.visitDictionary = getDictionary;
			GetVisitor.prototype.visitInterval = getInterval;
			GetVisitor.prototype.visitIntervalDayTime = getIntervalDayTime;
			GetVisitor.prototype.visitIntervalYearMonth = getIntervalYearMonth;
			GetVisitor.prototype.visitFixedSizeList = getFixedSizeList;
			GetVisitor.prototype.visitMap = getMap;
			exports.instance = new GetVisitor();
		}
	});

	// ../../node_modules/apache-arrow/visitor/indexof.js
	var require_indexof = __commonJS({
		'../../node_modules/apache-arrow/visitor/indexof.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.instance = exports.IndexOfVisitor = void 0;
			var visitor_1 = require_visitor();
			var bit_1 = require_bit();
			var vector_1 = require_vector2();
			var IndexOfVisitor = class extends visitor_1.Visitor {};
			exports.IndexOfVisitor = IndexOfVisitor;
			function nullIndexOf(vector, searchElement) {
				return searchElement === null && vector.length > 0 ? 0 : -1;
			}
			function indexOfNull(vector, fromIndex) {
				const { nullBitmap } = vector.data;
				if (!nullBitmap || vector.nullCount <= 0) {
					return -1;
				}
				let i = 0;
				for (const isValid of new bit_1.BitIterator(
					nullBitmap,
					vector.data.offset + (fromIndex || 0),
					vector.length,
					nullBitmap,
					bit_1.getBool
				)) {
					if (!isValid) {
						return i;
					}
					++i;
				}
				return -1;
			}
			function indexOfValue(vector, searchElement, fromIndex) {
				if (searchElement === void 0) {
					return -1;
				}
				if (searchElement === null) {
					return indexOfNull(vector, fromIndex);
				}
				const compare = vector_1.createElementComparator(searchElement);
				for (let i = (fromIndex || 0) - 1, n = vector.length; ++i < n; ) {
					if (compare(vector.get(i))) {
						return i;
					}
				}
				return -1;
			}
			function indexOfUnion(vector, searchElement, fromIndex) {
				const compare = vector_1.createElementComparator(searchElement);
				for (let i = (fromIndex || 0) - 1, n = vector.length; ++i < n; ) {
					if (compare(vector.get(i))) {
						return i;
					}
				}
				return -1;
			}
			IndexOfVisitor.prototype.visitNull = nullIndexOf;
			IndexOfVisitor.prototype.visitBool = indexOfValue;
			IndexOfVisitor.prototype.visitInt = indexOfValue;
			IndexOfVisitor.prototype.visitInt8 = indexOfValue;
			IndexOfVisitor.prototype.visitInt16 = indexOfValue;
			IndexOfVisitor.prototype.visitInt32 = indexOfValue;
			IndexOfVisitor.prototype.visitInt64 = indexOfValue;
			IndexOfVisitor.prototype.visitUint8 = indexOfValue;
			IndexOfVisitor.prototype.visitUint16 = indexOfValue;
			IndexOfVisitor.prototype.visitUint32 = indexOfValue;
			IndexOfVisitor.prototype.visitUint64 = indexOfValue;
			IndexOfVisitor.prototype.visitFloat = indexOfValue;
			IndexOfVisitor.prototype.visitFloat16 = indexOfValue;
			IndexOfVisitor.prototype.visitFloat32 = indexOfValue;
			IndexOfVisitor.prototype.visitFloat64 = indexOfValue;
			IndexOfVisitor.prototype.visitUtf8 = indexOfValue;
			IndexOfVisitor.prototype.visitBinary = indexOfValue;
			IndexOfVisitor.prototype.visitFixedSizeBinary = indexOfValue;
			IndexOfVisitor.prototype.visitDate = indexOfValue;
			IndexOfVisitor.prototype.visitDateDay = indexOfValue;
			IndexOfVisitor.prototype.visitDateMillisecond = indexOfValue;
			IndexOfVisitor.prototype.visitTimestamp = indexOfValue;
			IndexOfVisitor.prototype.visitTimestampSecond = indexOfValue;
			IndexOfVisitor.prototype.visitTimestampMillisecond = indexOfValue;
			IndexOfVisitor.prototype.visitTimestampMicrosecond = indexOfValue;
			IndexOfVisitor.prototype.visitTimestampNanosecond = indexOfValue;
			IndexOfVisitor.prototype.visitTime = indexOfValue;
			IndexOfVisitor.prototype.visitTimeSecond = indexOfValue;
			IndexOfVisitor.prototype.visitTimeMillisecond = indexOfValue;
			IndexOfVisitor.prototype.visitTimeMicrosecond = indexOfValue;
			IndexOfVisitor.prototype.visitTimeNanosecond = indexOfValue;
			IndexOfVisitor.prototype.visitDecimal = indexOfValue;
			IndexOfVisitor.prototype.visitList = indexOfValue;
			IndexOfVisitor.prototype.visitStruct = indexOfValue;
			IndexOfVisitor.prototype.visitUnion = indexOfValue;
			IndexOfVisitor.prototype.visitDenseUnion = indexOfUnion;
			IndexOfVisitor.prototype.visitSparseUnion = indexOfUnion;
			IndexOfVisitor.prototype.visitDictionary = indexOfValue;
			IndexOfVisitor.prototype.visitInterval = indexOfValue;
			IndexOfVisitor.prototype.visitIntervalDayTime = indexOfValue;
			IndexOfVisitor.prototype.visitIntervalYearMonth = indexOfValue;
			IndexOfVisitor.prototype.visitFixedSizeList = indexOfValue;
			IndexOfVisitor.prototype.visitMap = indexOfValue;
			exports.instance = new IndexOfVisitor();
		}
	});

	// ../../node_modules/apache-arrow/visitor/iterator.js
	var require_iterator = __commonJS({
		'../../node_modules/apache-arrow/visitor/iterator.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.instance = exports.IteratorVisitor = void 0;
			var enum_1 = require_enum();
			var visitor_1 = require_visitor();
			var bit_1 = require_bit();
			var get_1 = require_get();
			var IteratorVisitor = class extends visitor_1.Visitor {};
			exports.IteratorVisitor = IteratorVisitor;
			function nullableIterator(vector) {
				const getFn = get_1.instance.getVisitFn(vector);
				return new bit_1.BitIterator(
					vector.data.nullBitmap,
					vector.data.offset,
					vector.length,
					vector,
					(vec, idx, nullByte, nullBit) =>
						(nullByte & (1 << nullBit)) !== 0 ? getFn(vec, idx) : null
				);
			}
			var VectorIterator = class {
				constructor(vector, getFn) {
					this.vector = vector;
					this.getFn = getFn;
					this.index = 0;
				}
				next() {
					if (this.index < this.vector.length) {
						return {
							value: this.getFn(this.vector, this.index++)
						};
					}
					return { done: true, value: null };
				}
				[Symbol.iterator]() {
					return this;
				}
			};
			function vectorIterator(vector) {
				if (vector.nullCount > 0) {
					return nullableIterator(vector);
				}
				const { type, typeId, length } = vector;
				if (
					vector.stride === 1 &&
					(typeId === enum_1.Type.Timestamp ||
						(typeId === enum_1.Type.Int && type.bitWidth !== 64) ||
						(typeId === enum_1.Type.Time && type.bitWidth !== 64) ||
						(typeId === enum_1.Type.Float && type.precision > 0))
				) {
					return vector.data.values.subarray(0, length)[Symbol.iterator]();
				}
				return new VectorIterator(vector, get_1.instance.getVisitFn(vector));
			}
			IteratorVisitor.prototype.visitNull = vectorIterator;
			IteratorVisitor.prototype.visitBool = vectorIterator;
			IteratorVisitor.prototype.visitInt = vectorIterator;
			IteratorVisitor.prototype.visitInt8 = vectorIterator;
			IteratorVisitor.prototype.visitInt16 = vectorIterator;
			IteratorVisitor.prototype.visitInt32 = vectorIterator;
			IteratorVisitor.prototype.visitInt64 = vectorIterator;
			IteratorVisitor.prototype.visitUint8 = vectorIterator;
			IteratorVisitor.prototype.visitUint16 = vectorIterator;
			IteratorVisitor.prototype.visitUint32 = vectorIterator;
			IteratorVisitor.prototype.visitUint64 = vectorIterator;
			IteratorVisitor.prototype.visitFloat = vectorIterator;
			IteratorVisitor.prototype.visitFloat16 = vectorIterator;
			IteratorVisitor.prototype.visitFloat32 = vectorIterator;
			IteratorVisitor.prototype.visitFloat64 = vectorIterator;
			IteratorVisitor.prototype.visitUtf8 = vectorIterator;
			IteratorVisitor.prototype.visitBinary = vectorIterator;
			IteratorVisitor.prototype.visitFixedSizeBinary = vectorIterator;
			IteratorVisitor.prototype.visitDate = vectorIterator;
			IteratorVisitor.prototype.visitDateDay = vectorIterator;
			IteratorVisitor.prototype.visitDateMillisecond = vectorIterator;
			IteratorVisitor.prototype.visitTimestamp = vectorIterator;
			IteratorVisitor.prototype.visitTimestampSecond = vectorIterator;
			IteratorVisitor.prototype.visitTimestampMillisecond = vectorIterator;
			IteratorVisitor.prototype.visitTimestampMicrosecond = vectorIterator;
			IteratorVisitor.prototype.visitTimestampNanosecond = vectorIterator;
			IteratorVisitor.prototype.visitTime = vectorIterator;
			IteratorVisitor.prototype.visitTimeSecond = vectorIterator;
			IteratorVisitor.prototype.visitTimeMillisecond = vectorIterator;
			IteratorVisitor.prototype.visitTimeMicrosecond = vectorIterator;
			IteratorVisitor.prototype.visitTimeNanosecond = vectorIterator;
			IteratorVisitor.prototype.visitDecimal = vectorIterator;
			IteratorVisitor.prototype.visitList = vectorIterator;
			IteratorVisitor.prototype.visitStruct = vectorIterator;
			IteratorVisitor.prototype.visitUnion = vectorIterator;
			IteratorVisitor.prototype.visitDenseUnion = vectorIterator;
			IteratorVisitor.prototype.visitSparseUnion = vectorIterator;
			IteratorVisitor.prototype.visitDictionary = vectorIterator;
			IteratorVisitor.prototype.visitInterval = vectorIterator;
			IteratorVisitor.prototype.visitIntervalDayTime = vectorIterator;
			IteratorVisitor.prototype.visitIntervalYearMonth = vectorIterator;
			IteratorVisitor.prototype.visitFixedSizeList = vectorIterator;
			IteratorVisitor.prototype.visitMap = vectorIterator;
			exports.instance = new IteratorVisitor();
		}
	});

	// ../../node_modules/apache-arrow/visitor/toarray.js
	var require_toarray = __commonJS({
		'../../node_modules/apache-arrow/visitor/toarray.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.instance = exports.ToArrayVisitor = void 0;
			var enum_1 = require_enum();
			var visitor_1 = require_visitor();
			var iterator_1 = require_iterator();
			var ToArrayVisitor = class extends visitor_1.Visitor {};
			exports.ToArrayVisitor = ToArrayVisitor;
			function arrayOfVector(vector) {
				const { type, length, stride } = vector;
				switch (type.typeId) {
					case enum_1.Type.Int:
					case enum_1.Type.Float:
					case enum_1.Type.Decimal:
					case enum_1.Type.Time:
					case enum_1.Type.Timestamp:
						return vector.data.values.subarray(0, length * stride);
				}
				return [...iterator_1.instance.visit(vector)];
			}
			ToArrayVisitor.prototype.visitNull = arrayOfVector;
			ToArrayVisitor.prototype.visitBool = arrayOfVector;
			ToArrayVisitor.prototype.visitInt = arrayOfVector;
			ToArrayVisitor.prototype.visitInt8 = arrayOfVector;
			ToArrayVisitor.prototype.visitInt16 = arrayOfVector;
			ToArrayVisitor.prototype.visitInt32 = arrayOfVector;
			ToArrayVisitor.prototype.visitInt64 = arrayOfVector;
			ToArrayVisitor.prototype.visitUint8 = arrayOfVector;
			ToArrayVisitor.prototype.visitUint16 = arrayOfVector;
			ToArrayVisitor.prototype.visitUint32 = arrayOfVector;
			ToArrayVisitor.prototype.visitUint64 = arrayOfVector;
			ToArrayVisitor.prototype.visitFloat = arrayOfVector;
			ToArrayVisitor.prototype.visitFloat16 = arrayOfVector;
			ToArrayVisitor.prototype.visitFloat32 = arrayOfVector;
			ToArrayVisitor.prototype.visitFloat64 = arrayOfVector;
			ToArrayVisitor.prototype.visitUtf8 = arrayOfVector;
			ToArrayVisitor.prototype.visitBinary = arrayOfVector;
			ToArrayVisitor.prototype.visitFixedSizeBinary = arrayOfVector;
			ToArrayVisitor.prototype.visitDate = arrayOfVector;
			ToArrayVisitor.prototype.visitDateDay = arrayOfVector;
			ToArrayVisitor.prototype.visitDateMillisecond = arrayOfVector;
			ToArrayVisitor.prototype.visitTimestamp = arrayOfVector;
			ToArrayVisitor.prototype.visitTimestampSecond = arrayOfVector;
			ToArrayVisitor.prototype.visitTimestampMillisecond = arrayOfVector;
			ToArrayVisitor.prototype.visitTimestampMicrosecond = arrayOfVector;
			ToArrayVisitor.prototype.visitTimestampNanosecond = arrayOfVector;
			ToArrayVisitor.prototype.visitTime = arrayOfVector;
			ToArrayVisitor.prototype.visitTimeSecond = arrayOfVector;
			ToArrayVisitor.prototype.visitTimeMillisecond = arrayOfVector;
			ToArrayVisitor.prototype.visitTimeMicrosecond = arrayOfVector;
			ToArrayVisitor.prototype.visitTimeNanosecond = arrayOfVector;
			ToArrayVisitor.prototype.visitDecimal = arrayOfVector;
			ToArrayVisitor.prototype.visitList = arrayOfVector;
			ToArrayVisitor.prototype.visitStruct = arrayOfVector;
			ToArrayVisitor.prototype.visitUnion = arrayOfVector;
			ToArrayVisitor.prototype.visitDenseUnion = arrayOfVector;
			ToArrayVisitor.prototype.visitSparseUnion = arrayOfVector;
			ToArrayVisitor.prototype.visitDictionary = arrayOfVector;
			ToArrayVisitor.prototype.visitInterval = arrayOfVector;
			ToArrayVisitor.prototype.visitIntervalDayTime = arrayOfVector;
			ToArrayVisitor.prototype.visitIntervalYearMonth = arrayOfVector;
			ToArrayVisitor.prototype.visitFixedSizeList = arrayOfVector;
			ToArrayVisitor.prototype.visitMap = arrayOfVector;
			exports.instance = new ToArrayVisitor();
		}
	});

	// ../../node_modules/apache-arrow/visitor/bytewidth.js
	var require_bytewidth = __commonJS({
		'../../node_modules/apache-arrow/visitor/bytewidth.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.instance = exports.ByteWidthVisitor = void 0;
			var visitor_1 = require_visitor();
			var enum_1 = require_enum();
			var sum = (x, y) => x + y;
			var variableWidthColumnErrorMessage = (type) =>
				`Cannot compute the byte width of variable-width column ${type}`;
			var ByteWidthVisitor = class extends visitor_1.Visitor {
				visitNull(____) {
					return 0;
				}
				visitInt(type) {
					return type.bitWidth / 8;
				}
				visitFloat(type) {
					return type.ArrayType.BYTES_PER_ELEMENT;
				}
				visitBinary(type) {
					throw new Error(variableWidthColumnErrorMessage(type));
				}
				visitUtf8(type) {
					throw new Error(variableWidthColumnErrorMessage(type));
				}
				visitBool(____) {
					return 1 / 8;
				}
				visitDecimal(____) {
					return 16;
				}
				visitDate(type) {
					return (type.unit + 1) * 4;
				}
				visitTime(type) {
					return type.bitWidth / 8;
				}
				visitTimestamp(type) {
					return type.unit === enum_1.TimeUnit.SECOND ? 4 : 8;
				}
				visitInterval(type) {
					return (type.unit + 1) * 4;
				}
				visitList(type) {
					throw new Error(variableWidthColumnErrorMessage(type));
				}
				visitStruct(type) {
					return this.visitFields(type.children).reduce(sum, 0);
				}
				visitUnion(type) {
					return this.visitFields(type.children).reduce(sum, 0);
				}
				visitFixedSizeBinary(type) {
					return type.byteWidth;
				}
				visitFixedSizeList(type) {
					return type.listSize * this.visitFields(type.children).reduce(sum, 0);
				}
				visitMap(type) {
					return this.visitFields(type.children).reduce(sum, 0);
				}
				visitDictionary(type) {
					return this.visit(type.indices);
				}
				visitFields(fields) {
					return (fields || []).map((field) => this.visit(field.type));
				}
				visitSchema(schema) {
					return this.visitFields(schema.fields).reduce(sum, 0);
				}
			};
			exports.ByteWidthVisitor = ByteWidthVisitor;
			exports.instance = new ByteWidthVisitor();
		}
	});

	// ../../node_modules/apache-arrow/visitor/vectorctor.js
	var require_vectorctor = __commonJS({
		'../../node_modules/apache-arrow/visitor/vectorctor.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.instance = exports.GetVectorConstructor = void 0;
			var visitor_1 = require_visitor();
			var binary_1 = require_binary2();
			var bool_1 = require_bool2();
			var date_1 = require_date2();
			var decimal_1 = require_decimal2();
			var dictionary_1 = require_dictionary2();
			var fixedsizebinary_1 = require_fixedsizebinary2();
			var fixedsizelist_1 = require_fixedsizelist2();
			var float_1 = require_float2();
			var interval_1 = require_interval2();
			var int_1 = require_int3();
			var list_1 = require_list2();
			var map_1 = require_map2();
			var null_1 = require_null2();
			var struct_1 = require_struct2();
			var timestamp_1 = require_timestamp2();
			var time_1 = require_time2();
			var union_1 = require_union2();
			var utf8_1 = require_utf83();
			var GetVectorConstructor = class extends visitor_1.Visitor {
				visitNull() {
					return null_1.NullVector;
				}
				visitBool() {
					return bool_1.BoolVector;
				}
				visitInt() {
					return int_1.IntVector;
				}
				visitInt8() {
					return int_1.Int8Vector;
				}
				visitInt16() {
					return int_1.Int16Vector;
				}
				visitInt32() {
					return int_1.Int32Vector;
				}
				visitInt64() {
					return int_1.Int64Vector;
				}
				visitUint8() {
					return int_1.Uint8Vector;
				}
				visitUint16() {
					return int_1.Uint16Vector;
				}
				visitUint32() {
					return int_1.Uint32Vector;
				}
				visitUint64() {
					return int_1.Uint64Vector;
				}
				visitFloat() {
					return float_1.FloatVector;
				}
				visitFloat16() {
					return float_1.Float16Vector;
				}
				visitFloat32() {
					return float_1.Float32Vector;
				}
				visitFloat64() {
					return float_1.Float64Vector;
				}
				visitUtf8() {
					return utf8_1.Utf8Vector;
				}
				visitBinary() {
					return binary_1.BinaryVector;
				}
				visitFixedSizeBinary() {
					return fixedsizebinary_1.FixedSizeBinaryVector;
				}
				visitDate() {
					return date_1.DateVector;
				}
				visitDateDay() {
					return date_1.DateDayVector;
				}
				visitDateMillisecond() {
					return date_1.DateMillisecondVector;
				}
				visitTimestamp() {
					return timestamp_1.TimestampVector;
				}
				visitTimestampSecond() {
					return timestamp_1.TimestampSecondVector;
				}
				visitTimestampMillisecond() {
					return timestamp_1.TimestampMillisecondVector;
				}
				visitTimestampMicrosecond() {
					return timestamp_1.TimestampMicrosecondVector;
				}
				visitTimestampNanosecond() {
					return timestamp_1.TimestampNanosecondVector;
				}
				visitTime() {
					return time_1.TimeVector;
				}
				visitTimeSecond() {
					return time_1.TimeSecondVector;
				}
				visitTimeMillisecond() {
					return time_1.TimeMillisecondVector;
				}
				visitTimeMicrosecond() {
					return time_1.TimeMicrosecondVector;
				}
				visitTimeNanosecond() {
					return time_1.TimeNanosecondVector;
				}
				visitDecimal() {
					return decimal_1.DecimalVector;
				}
				visitList() {
					return list_1.ListVector;
				}
				visitStruct() {
					return struct_1.StructVector;
				}
				visitUnion() {
					return union_1.UnionVector;
				}
				visitDenseUnion() {
					return union_1.DenseUnionVector;
				}
				visitSparseUnion() {
					return union_1.SparseUnionVector;
				}
				visitDictionary() {
					return dictionary_1.DictionaryVector;
				}
				visitInterval() {
					return interval_1.IntervalVector;
				}
				visitIntervalDayTime() {
					return interval_1.IntervalDayTimeVector;
				}
				visitIntervalYearMonth() {
					return interval_1.IntervalYearMonthVector;
				}
				visitFixedSizeList() {
					return fixedsizelist_1.FixedSizeListVector;
				}
				visitMap() {
					return map_1.MapVector;
				}
			};
			exports.GetVectorConstructor = GetVectorConstructor;
			exports.instance = new GetVectorConstructor();
		}
	});

	// ../../node_modules/apache-arrow/vector/index.js
	var require_vector3 = __commonJS({
		'../../node_modules/apache-arrow/vector/index.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.vectorFromValuesWithType =
				exports.StructRow =
				exports.MapRow =
				exports.Utf8Vector =
				exports.SparseUnionVector =
				exports.DenseUnionVector =
				exports.UnionVector =
				exports.TimeNanosecondVector =
				exports.TimeMicrosecondVector =
				exports.TimeMillisecondVector =
				exports.TimeSecondVector =
				exports.TimeVector =
				exports.TimestampNanosecondVector =
				exports.TimestampMicrosecondVector =
				exports.TimestampMillisecondVector =
				exports.TimestampSecondVector =
				exports.TimestampVector =
				exports.StructVector =
				exports.NullVector =
				exports.MapVector =
				exports.ListVector =
				exports.Uint64Vector =
				exports.Uint32Vector =
				exports.Uint16Vector =
				exports.Uint8Vector =
				exports.Int64Vector =
				exports.Int32Vector =
				exports.Int16Vector =
				exports.Int8Vector =
				exports.IntVector =
				exports.IntervalYearMonthVector =
				exports.IntervalDayTimeVector =
				exports.IntervalVector =
				exports.Float64Vector =
				exports.Float32Vector =
				exports.Float16Vector =
				exports.FloatVector =
				exports.FixedSizeListVector =
				exports.FixedSizeBinaryVector =
				exports.DictionaryVector =
				exports.DecimalVector =
				exports.DateMillisecondVector =
				exports.DateDayVector =
				exports.DateVector =
				exports.Chunked =
				exports.BoolVector =
				exports.BinaryVector =
				exports.BaseVector =
				exports.Vector =
					void 0;
			var tslib_1 = require_tslib();
			var vector_1 = require_vector();
			Object.defineProperty(exports, 'Vector', {
				enumerable: true,
				get: function () {
					return vector_1.Vector;
				}
			});
			var base_1 = require_base();
			Object.defineProperty(exports, 'BaseVector', {
				enumerable: true,
				get: function () {
					return base_1.BaseVector;
				}
			});
			var binary_1 = require_binary2();
			Object.defineProperty(exports, 'BinaryVector', {
				enumerable: true,
				get: function () {
					return binary_1.BinaryVector;
				}
			});
			var bool_1 = require_bool2();
			Object.defineProperty(exports, 'BoolVector', {
				enumerable: true,
				get: function () {
					return bool_1.BoolVector;
				}
			});
			var chunked_1 = require_chunked();
			Object.defineProperty(exports, 'Chunked', {
				enumerable: true,
				get: function () {
					return chunked_1.Chunked;
				}
			});
			var date_1 = require_date2();
			Object.defineProperty(exports, 'DateVector', {
				enumerable: true,
				get: function () {
					return date_1.DateVector;
				}
			});
			Object.defineProperty(exports, 'DateDayVector', {
				enumerable: true,
				get: function () {
					return date_1.DateDayVector;
				}
			});
			Object.defineProperty(exports, 'DateMillisecondVector', {
				enumerable: true,
				get: function () {
					return date_1.DateMillisecondVector;
				}
			});
			var decimal_1 = require_decimal2();
			Object.defineProperty(exports, 'DecimalVector', {
				enumerable: true,
				get: function () {
					return decimal_1.DecimalVector;
				}
			});
			var dictionary_1 = require_dictionary2();
			Object.defineProperty(exports, 'DictionaryVector', {
				enumerable: true,
				get: function () {
					return dictionary_1.DictionaryVector;
				}
			});
			var fixedsizebinary_1 = require_fixedsizebinary2();
			Object.defineProperty(exports, 'FixedSizeBinaryVector', {
				enumerable: true,
				get: function () {
					return fixedsizebinary_1.FixedSizeBinaryVector;
				}
			});
			var fixedsizelist_1 = require_fixedsizelist2();
			Object.defineProperty(exports, 'FixedSizeListVector', {
				enumerable: true,
				get: function () {
					return fixedsizelist_1.FixedSizeListVector;
				}
			});
			var float_1 = require_float2();
			Object.defineProperty(exports, 'FloatVector', {
				enumerable: true,
				get: function () {
					return float_1.FloatVector;
				}
			});
			Object.defineProperty(exports, 'Float16Vector', {
				enumerable: true,
				get: function () {
					return float_1.Float16Vector;
				}
			});
			Object.defineProperty(exports, 'Float32Vector', {
				enumerable: true,
				get: function () {
					return float_1.Float32Vector;
				}
			});
			Object.defineProperty(exports, 'Float64Vector', {
				enumerable: true,
				get: function () {
					return float_1.Float64Vector;
				}
			});
			var interval_1 = require_interval2();
			Object.defineProperty(exports, 'IntervalVector', {
				enumerable: true,
				get: function () {
					return interval_1.IntervalVector;
				}
			});
			Object.defineProperty(exports, 'IntervalDayTimeVector', {
				enumerable: true,
				get: function () {
					return interval_1.IntervalDayTimeVector;
				}
			});
			Object.defineProperty(exports, 'IntervalYearMonthVector', {
				enumerable: true,
				get: function () {
					return interval_1.IntervalYearMonthVector;
				}
			});
			var int_1 = require_int3();
			Object.defineProperty(exports, 'IntVector', {
				enumerable: true,
				get: function () {
					return int_1.IntVector;
				}
			});
			Object.defineProperty(exports, 'Int8Vector', {
				enumerable: true,
				get: function () {
					return int_1.Int8Vector;
				}
			});
			Object.defineProperty(exports, 'Int16Vector', {
				enumerable: true,
				get: function () {
					return int_1.Int16Vector;
				}
			});
			Object.defineProperty(exports, 'Int32Vector', {
				enumerable: true,
				get: function () {
					return int_1.Int32Vector;
				}
			});
			Object.defineProperty(exports, 'Int64Vector', {
				enumerable: true,
				get: function () {
					return int_1.Int64Vector;
				}
			});
			Object.defineProperty(exports, 'Uint8Vector', {
				enumerable: true,
				get: function () {
					return int_1.Uint8Vector;
				}
			});
			Object.defineProperty(exports, 'Uint16Vector', {
				enumerable: true,
				get: function () {
					return int_1.Uint16Vector;
				}
			});
			Object.defineProperty(exports, 'Uint32Vector', {
				enumerable: true,
				get: function () {
					return int_1.Uint32Vector;
				}
			});
			Object.defineProperty(exports, 'Uint64Vector', {
				enumerable: true,
				get: function () {
					return int_1.Uint64Vector;
				}
			});
			var list_1 = require_list2();
			Object.defineProperty(exports, 'ListVector', {
				enumerable: true,
				get: function () {
					return list_1.ListVector;
				}
			});
			var map_1 = require_map2();
			Object.defineProperty(exports, 'MapVector', {
				enumerable: true,
				get: function () {
					return map_1.MapVector;
				}
			});
			var null_1 = require_null2();
			Object.defineProperty(exports, 'NullVector', {
				enumerable: true,
				get: function () {
					return null_1.NullVector;
				}
			});
			var struct_1 = require_struct2();
			Object.defineProperty(exports, 'StructVector', {
				enumerable: true,
				get: function () {
					return struct_1.StructVector;
				}
			});
			var timestamp_1 = require_timestamp2();
			Object.defineProperty(exports, 'TimestampVector', {
				enumerable: true,
				get: function () {
					return timestamp_1.TimestampVector;
				}
			});
			Object.defineProperty(exports, 'TimestampSecondVector', {
				enumerable: true,
				get: function () {
					return timestamp_1.TimestampSecondVector;
				}
			});
			Object.defineProperty(exports, 'TimestampMillisecondVector', {
				enumerable: true,
				get: function () {
					return timestamp_1.TimestampMillisecondVector;
				}
			});
			Object.defineProperty(exports, 'TimestampMicrosecondVector', {
				enumerable: true,
				get: function () {
					return timestamp_1.TimestampMicrosecondVector;
				}
			});
			Object.defineProperty(exports, 'TimestampNanosecondVector', {
				enumerable: true,
				get: function () {
					return timestamp_1.TimestampNanosecondVector;
				}
			});
			var time_1 = require_time2();
			Object.defineProperty(exports, 'TimeVector', {
				enumerable: true,
				get: function () {
					return time_1.TimeVector;
				}
			});
			Object.defineProperty(exports, 'TimeSecondVector', {
				enumerable: true,
				get: function () {
					return time_1.TimeSecondVector;
				}
			});
			Object.defineProperty(exports, 'TimeMillisecondVector', {
				enumerable: true,
				get: function () {
					return time_1.TimeMillisecondVector;
				}
			});
			Object.defineProperty(exports, 'TimeMicrosecondVector', {
				enumerable: true,
				get: function () {
					return time_1.TimeMicrosecondVector;
				}
			});
			Object.defineProperty(exports, 'TimeNanosecondVector', {
				enumerable: true,
				get: function () {
					return time_1.TimeNanosecondVector;
				}
			});
			var union_1 = require_union2();
			Object.defineProperty(exports, 'UnionVector', {
				enumerable: true,
				get: function () {
					return union_1.UnionVector;
				}
			});
			Object.defineProperty(exports, 'DenseUnionVector', {
				enumerable: true,
				get: function () {
					return union_1.DenseUnionVector;
				}
			});
			Object.defineProperty(exports, 'SparseUnionVector', {
				enumerable: true,
				get: function () {
					return union_1.SparseUnionVector;
				}
			});
			var utf8_1 = require_utf83();
			Object.defineProperty(exports, 'Utf8Vector', {
				enumerable: true,
				get: function () {
					return utf8_1.Utf8Vector;
				}
			});
			var row_1 = require_row();
			Object.defineProperty(exports, 'MapRow', {
				enumerable: true,
				get: function () {
					return row_1.MapRow;
				}
			});
			Object.defineProperty(exports, 'StructRow', {
				enumerable: true,
				get: function () {
					return row_1.StructRow;
				}
			});
			var fn = require_fn();
			var enum_1 = require_enum();
			var vector_2 = require_vector();
			var chunked_2 = require_chunked();
			var base_2 = require_base();
			var bit_1 = require_bit();
			var compat_1 = require_compat();
			var builder_1 = require_builder();
			var get_1 = require_get();
			var set_1 = require_set();
			var indexof_1 = require_indexof();
			var toarray_1 = require_toarray();
			var iterator_1 = require_iterator();
			var bytewidth_1 = require_bytewidth();
			var vectorctor_1 = require_vectorctor();
			vector_2.Vector.new = newVector;
			vector_2.Vector.from = vectorFrom;
			function newVector(data, ...args) {
				return new (vectorctor_1.instance.getVisitFn(data)())(data, ...args);
			}
			function vectorFromValuesWithType(newDataType, input) {
				if (compat_1.isIterable(input)) {
					return vector_2.Vector.from({
						nullValues: [null, void 0],
						type: newDataType(),
						values: input
					});
				} else if (compat_1.isAsyncIterable(input)) {
					return vector_2.Vector.from({
						nullValues: [null, void 0],
						type: newDataType(),
						values: input
					});
				}
				const {
					values: values = [],
					type: type = newDataType(),
					nullValues: nullValues = [null, void 0]
				} = Object.assign({}, input);
				return compat_1.isIterable(values)
					? vector_2.Vector.from(Object.assign(Object.assign({ nullValues }, input), { type }))
					: vector_2.Vector.from(Object.assign(Object.assign({ nullValues }, input), { type }));
			}
			exports.vectorFromValuesWithType = vectorFromValuesWithType;
			function vectorFrom(input) {
				const _a = Object.assign({ nullValues: [null, void 0] }, input),
					{ values: values = [] } = _a,
					options = tslib_1.__rest(_a, ['values']);
				if (compat_1.isIterable(values)) {
					const chunks = [...builder_1.Builder.throughIterable(options)(values)];
					return chunks.length === 1 ? chunks[0] : chunked_2.Chunked.concat(chunks);
				}
				return ((chunks) =>
					tslib_1.__awaiter(this, void 0, void 0, function* () {
						var e_1, _b;
						const transform = builder_1.Builder.throughAsyncIterable(options);
						try {
							for (
								var _c = tslib_1.__asyncValues(transform(values)), _d;
								(_d = yield _c.next()), !_d.done;

							) {
								const chunk = _d.value;
								chunks.push(chunk);
							}
						} catch (e_1_1) {
							e_1 = { error: e_1_1 };
						} finally {
							try {
								if (_d && !_d.done && (_b = _c.return)) yield _b.call(_c);
							} finally {
								if (e_1) throw e_1.error;
							}
						}
						return chunks.length === 1 ? chunks[0] : chunked_2.Chunked.concat(chunks);
					}))([]);
			}
			base_2.BaseVector.prototype.get = function baseVectorGet(index) {
				return get_1.instance.visit(this, index);
			};
			base_2.BaseVector.prototype.set = function baseVectorSet(index, value) {
				return set_1.instance.visit(this, index, value);
			};
			base_2.BaseVector.prototype.indexOf = function baseVectorIndexOf(value, fromIndex) {
				return indexof_1.instance.visit(this, value, fromIndex);
			};
			base_2.BaseVector.prototype.toArray = function baseVectorToArray() {
				return toarray_1.instance.visit(this);
			};
			base_2.BaseVector.prototype.getByteWidth = function baseVectorGetByteWidth() {
				return bytewidth_1.instance.visit(this.type);
			};
			base_2.BaseVector.prototype[Symbol.iterator] = function baseVectorSymbolIterator() {
				return iterator_1.instance.visit(this);
			};
			base_2.BaseVector.prototype._bindDataAccessors = bindBaseVectorDataAccessors;
			Object.keys(enum_1.Type)
				.map((T) => enum_1.Type[T])
				.filter((T) => typeof T === 'number')
				.filter((typeId) => typeId !== enum_1.Type.NONE)
				.forEach((typeId) => {
					const VectorCtor = vectorctor_1.instance.visit(typeId);
					VectorCtor.prototype['get'] = fn.partial1(get_1.instance.getVisitFn(typeId));
					VectorCtor.prototype['set'] = fn.partial2(set_1.instance.getVisitFn(typeId));
					VectorCtor.prototype['indexOf'] = fn.partial2(indexof_1.instance.getVisitFn(typeId));
					VectorCtor.prototype['toArray'] = fn.partial0(toarray_1.instance.getVisitFn(typeId));
					VectorCtor.prototype['getByteWidth'] = partialType0(
						bytewidth_1.instance.getVisitFn(typeId)
					);
					VectorCtor.prototype[Symbol.iterator] = fn.partial0(
						iterator_1.instance.getVisitFn(typeId)
					);
				});
			function partialType0(visit) {
				return function () {
					return visit(this.type);
				};
			}
			function wrapNullableGet(fn2) {
				return function (i) {
					return this.isValid(i) ? fn2.call(this, i) : null;
				};
			}
			function wrapNullableSet(fn2) {
				return function (i, a) {
					if (bit_1.setBool(this.nullBitmap, this.offset + i, !(a == null))) {
						fn2.call(this, i, a);
					}
				};
			}
			function bindBaseVectorDataAccessors() {
				const nullBitmap = this.nullBitmap;
				if (nullBitmap && nullBitmap.byteLength > 0) {
					this.get = wrapNullableGet(this.get);
					this.set = wrapNullableSet(this.set);
				}
			}
		}
	});

	// ../../node_modules/apache-arrow/table.js
	var require_table = __commonJS({
		'../../node_modules/apache-arrow/table.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.Table = void 0;
			var tslib_1 = require_tslib();
			var column_1 = require_column();
			var reader_1 = require_reader();
			var writer_1 = require_writer();
			var recordbatch_1 = require_recordbatch2();
			var schema_1 = require_schema();
			var type_1 = require_type();
			var args_1 = require_args();
			var compat_1 = require_compat();
			var recordbatch_2 = require_recordbatch();
			var index_1 = require_vector3();
			var Table2 = class extends index_1.Chunked {
				constructor(...args) {
					var _a;
					let schema = null;
					if (args[0] instanceof schema_1.Schema) {
						schema = args[0];
					}
					const chunks =
						args[0] instanceof Table2
							? args[0].chunks
							: args_1.selectArgs(recordbatch_1.RecordBatch, args);
					if (
						!schema &&
						!(schema = (_a = chunks[0]) === null || _a === void 0 ? void 0 : _a.schema)
					) {
						throw new TypeError(
							'Table must be initialized with a Schema or at least one RecordBatch'
						);
					}
					chunks[0] || (chunks[0] = new recordbatch_1._InternalEmptyPlaceholderRecordBatch(schema));
					super(new type_1.Struct(schema.fields), chunks);
					this._schema = schema;
					this._chunks = chunks;
				}
				static empty(schema = new schema_1.Schema([])) {
					return new Table2(schema, []);
				}
				static from(input) {
					if (!input) {
						return Table2.empty();
					}
					if (typeof input === 'object') {
						const table = compat_1.isIterable(input['values'])
							? tableFromIterable(input)
							: compat_1.isAsyncIterable(input['values'])
							? tableFromAsyncIterable(input)
							: null;
						if (table !== null) {
							return table;
						}
					}
					let reader = reader_1.RecordBatchReader.from(input);
					if (compat_1.isPromise(reader)) {
						return (() =>
							tslib_1.__awaiter(this, void 0, void 0, function* () {
								return yield Table2.from(yield reader);
							}))();
					}
					if (reader.isSync() && (reader = reader.open())) {
						return !reader.schema ? Table2.empty() : new Table2(reader.schema, [...reader]);
					}
					return ((opening) =>
						tslib_1.__awaiter(this, void 0, void 0, function* () {
							var e_1, _a;
							const reader2 = yield opening;
							const schema = reader2.schema;
							const batches = [];
							if (schema) {
								try {
									for (
										var reader_2 = tslib_1.__asyncValues(reader2), reader_2_1;
										(reader_2_1 = yield reader_2.next()), !reader_2_1.done;

									) {
										const batch = reader_2_1.value;
										batches.push(batch);
									}
								} catch (e_1_1) {
									e_1 = { error: e_1_1 };
								} finally {
									try {
										if (reader_2_1 && !reader_2_1.done && (_a = reader_2.return))
											yield _a.call(reader_2);
									} finally {
										if (e_1) throw e_1.error;
									}
								}
								return new Table2(schema, batches);
							}
							return Table2.empty();
						}))(reader.open());
				}
				static fromAsync(source) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						return yield Table2.from(source);
					});
				}
				static fromStruct(vector) {
					return Table2.new(vector.data.childData, vector.type.children);
				}
				static new(...cols) {
					return new Table2(
						...recordbatch_2.distributeColumnsIntoRecordBatches(args_1.selectColumnArgs(cols))
					);
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
				clone(chunks = this._chunks) {
					return new Table2(this._schema, chunks);
				}
				getColumn(name) {
					return this.getColumnAt(this.getColumnIndex(name));
				}
				getColumnAt(index) {
					return this.getChildAt(index);
				}
				getColumnIndex(name) {
					return this._schema.fields.findIndex((f) => f.name === name);
				}
				getChildAt(index) {
					if (index < 0 || index >= this.numChildren) {
						return null;
					}
					let field, child;
					const fields = this._schema.fields;
					const columns = this._children || (this._children = []);
					if ((child = columns[index])) {
						return child;
					}
					if ((field = fields[index])) {
						const chunks = this._chunks
							.map((chunk) => chunk.getChildAt(index))
							.filter((vec) => vec != null);
						if (chunks.length > 0) {
							return (columns[index] = new column_1.Column(field, chunks));
						}
					}
					return null;
				}
				serialize(encoding = 'binary', stream = true) {
					const Writer = !stream
						? writer_1.RecordBatchFileWriter
						: writer_1.RecordBatchStreamWriter;
					return Writer.writeAll(this).toUint8Array(true);
				}
				count() {
					return this._length;
				}
				select(...columnNames) {
					const nameToIndex = this._schema.fields.reduce(
						(m, f, i) => m.set(f.name, i),
						/* @__PURE__ */ new Map()
					);
					return this.selectAt(
						...columnNames.map((columnName) => nameToIndex.get(columnName)).filter((x) => x > -1)
					);
				}
				selectAt(...columnIndices) {
					const schema = this._schema.selectAt(...columnIndices);
					return new Table2(
						schema,
						this._chunks.map(({ length, data: { childData } }) => {
							return new recordbatch_1.RecordBatch(
								schema,
								length,
								columnIndices.map((i) => childData[i]).filter(Boolean)
							);
						})
					);
				}
				assign(other) {
					const fields = this._schema.fields;
					const [indices, oldToNew] = other.schema.fields.reduce(
						(memo, f2, newIdx) => {
							const [indices2, oldToNew2] = memo;
							const i = fields.findIndex((f) => f.name === f2.name);
							~i ? (oldToNew2[i] = newIdx) : indices2.push(newIdx);
							return memo;
						},
						[[], []]
					);
					const schema = this._schema.assign(other.schema);
					const columns = [
						...fields.map((_f, i, _fs, j = oldToNew[i]) =>
							j === void 0 ? this.getColumnAt(i) : other.getColumnAt(j)
						),
						...indices.map((i) => other.getColumnAt(i))
					].filter(Boolean);
					return new Table2(...recordbatch_2.distributeVectorsIntoRecordBatches(schema, columns));
				}
			};
			exports.Table = Table2;
			function tableFromIterable(input) {
				const { type } = input;
				if (type instanceof type_1.Struct) {
					return Table2.fromStruct(index_1.StructVector.from(input));
				}
				return null;
			}
			function tableFromAsyncIterable(input) {
				const { type } = input;
				if (type instanceof type_1.Struct) {
					return index_1.StructVector.from(input).then((vector) => Table2.fromStruct(vector));
				}
				return null;
			}
		}
	});

	// ../../node_modules/apache-arrow/recordbatch.js
	var require_recordbatch2 = __commonJS({
		'../../node_modules/apache-arrow/recordbatch.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports._InternalEmptyPlaceholderRecordBatch = exports.RecordBatch = void 0;
			var data_1 = require_data();
			var table_1 = require_table();
			var vector_1 = require_vector();
			var visitor_1 = require_visitor();
			var schema_1 = require_schema();
			var compat_1 = require_compat();
			var chunked_1 = require_chunked();
			var args_1 = require_args();
			var type_1 = require_type();
			var recordbatch_1 = require_recordbatch();
			var index_1 = require_vector3();
			var RecordBatch2 = class extends index_1.StructVector {
				constructor(...args) {
					let data;
					const schema = args[0];
					let children;
					if (args[1] instanceof data_1.Data) {
						[, data, children] = args;
					} else {
						const fields = schema.fields;
						const [, length, childData] = args;
						data = data_1.Data.Struct(new type_1.Struct(fields), 0, length, 0, null, childData);
					}
					super(data, children);
					this._schema = schema;
				}
				static from(options) {
					if (compat_1.isIterable(options['values'])) {
						return table_1.Table.from(options);
					}
					return table_1.Table.from(options);
				}
				static new(...args) {
					const [fs, xs] = args_1.selectFieldArgs(args);
					const vs = xs.filter((x) => x instanceof vector_1.Vector);
					return new RecordBatch2(
						...recordbatch_1.ensureSameLengthData(
							new schema_1.Schema(fs),
							vs.map((x) => x.data)
						)
					);
				}
				clone(data, children = this._children) {
					return new RecordBatch2(this._schema, data, children);
				}
				concat(...others) {
					const schema = this._schema,
						chunks = chunked_1.Chunked.flatten(this, ...others);
					return new table_1.Table(
						schema,
						chunks.map(({ data }) => new RecordBatch2(schema, data))
					);
				}
				get schema() {
					return this._schema;
				}
				get numCols() {
					return this._schema.fields.length;
				}
				get dictionaries() {
					return this._dictionaries || (this._dictionaries = DictionaryCollector.collect(this));
				}
				select(...columnNames) {
					const nameToIndex = this._schema.fields.reduce(
						(m, f, i) => m.set(f.name, i),
						/* @__PURE__ */ new Map()
					);
					return this.selectAt(
						...columnNames.map((columnName) => nameToIndex.get(columnName)).filter((x) => x > -1)
					);
				}
				selectAt(...columnIndices) {
					const schema = this._schema.selectAt(...columnIndices);
					const childData = columnIndices.map((i) => this.data.childData[i]).filter(Boolean);
					return new RecordBatch2(schema, this.length, childData);
				}
			};
			exports.RecordBatch = RecordBatch2;
			var _InternalEmptyPlaceholderRecordBatch = class extends RecordBatch2 {
				constructor(schema) {
					super(
						schema,
						0,
						schema.fields.map((f) => data_1.Data.new(f.type, 0, 0, 0))
					);
				}
			};
			exports._InternalEmptyPlaceholderRecordBatch = _InternalEmptyPlaceholderRecordBatch;
			var DictionaryCollector = class extends visitor_1.Visitor {
				constructor() {
					super(...arguments);
					this.dictionaries = /* @__PURE__ */ new Map();
				}
				static collect(batch) {
					return new DictionaryCollector().visit(batch.data, new type_1.Struct(batch.schema.fields))
						.dictionaries;
				}
				visit(data, type) {
					if (type_1.DataType.isDictionary(type)) {
						return this.visitDictionary(data, type);
					} else {
						data.childData.forEach((child, i) => this.visit(child, type.children[i].type));
					}
					return this;
				}
				visitDictionary(data, type) {
					const dictionary = data.dictionary;
					if (dictionary && dictionary.length > 0) {
						this.dictionaries.set(type.id, dictionary);
					}
					return this;
				}
			};
		}
	});

	// ../../node_modules/apache-arrow/ipc/reader.js
	var require_reader = __commonJS({
		'../../node_modules/apache-arrow/ipc/reader.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.AsyncRecordBatchFileReader =
				exports.RecordBatchFileReader =
				exports.AsyncRecordBatchStreamReader =
				exports.RecordBatchStreamReader =
				exports.RecordBatchReader =
					void 0;
			var tslib_1 = require_tslib();
			var vector_1 = require_vector();
			var enum_1 = require_enum();
			var file_1 = require_file();
			var adapters_1 = require_adapters();
			var stream_1 = require_stream();
			var file_2 = require_file2();
			var vectorloader_1 = require_vectorloader();
			var recordbatch_1 = require_recordbatch2();
			var interfaces_1 = require_interfaces();
			var message_1 = require_message2();
			var compat_1 = require_compat();
			var RecordBatchReader3 = class extends interfaces_1.ReadableInterop {
				constructor(impl) {
					super();
					this._impl = impl;
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
				throw(value) {
					return this._impl.throw(value);
				}
				return(value) {
					return this._impl.return(value);
				}
				cancel() {
					return this._impl.cancel();
				}
				reset(schema) {
					this._impl.reset(schema);
					this._DOMStream = void 0;
					this._nodeStream = void 0;
					return this;
				}
				open(options) {
					const opening = this._impl.open(options);
					return compat_1.isPromise(opening) ? opening.then(() => this) : this;
				}
				readRecordBatch(index) {
					return this._impl.isFile() ? this._impl.readRecordBatch(index) : null;
				}
				[Symbol.iterator]() {
					return this._impl[Symbol.iterator]();
				}
				[Symbol.asyncIterator]() {
					return this._impl[Symbol.asyncIterator]();
				}
				toDOMStream() {
					return adapters_1.default.toDOMStream(
						this.isSync()
							? { [Symbol.iterator]: () => this }
							: { [Symbol.asyncIterator]: () => this }
					);
				}
				toNodeStream() {
					return adapters_1.default.toNodeStream(
						this.isSync()
							? { [Symbol.iterator]: () => this }
							: { [Symbol.asyncIterator]: () => this },
						{ objectMode: true }
					);
				}
				static throughNode(options) {
					throw new Error(`"throughNode" not available in this environment`);
				}
				static throughDOM(writableStrategy, readableStrategy) {
					throw new Error(`"throughDOM" not available in this environment`);
				}
				static from(source) {
					if (source instanceof RecordBatchReader3) {
						return source;
					} else if (compat_1.isArrowJSON(source)) {
						return fromArrowJSON(source);
					} else if (compat_1.isFileHandle(source)) {
						return fromFileHandle(source);
					} else if (compat_1.isPromise(source)) {
						return (() =>
							tslib_1.__awaiter(this, void 0, void 0, function* () {
								return yield RecordBatchReader3.from(yield source);
							}))();
					} else if (
						compat_1.isFetchResponse(source) ||
						compat_1.isReadableDOMStream(source) ||
						compat_1.isReadableNodeStream(source) ||
						compat_1.isAsyncIterable(source)
					) {
						return fromAsyncByteStream(new stream_1.AsyncByteStream(source));
					}
					return fromByteStream(new stream_1.ByteStream(source));
				}
				static readAll(source) {
					if (source instanceof RecordBatchReader3) {
						return source.isSync() ? readAllSync(source) : readAllAsync(source);
					} else if (
						compat_1.isArrowJSON(source) ||
						ArrayBuffer.isView(source) ||
						compat_1.isIterable(source) ||
						compat_1.isIteratorResult(source)
					) {
						return readAllSync(source);
					}
					return readAllAsync(source);
				}
			};
			exports.RecordBatchReader = RecordBatchReader3;
			var RecordBatchStreamReader3 = class extends RecordBatchReader3 {
				constructor(_impl) {
					super(_impl);
					this._impl = _impl;
				}
				[Symbol.iterator]() {
					return this._impl[Symbol.iterator]();
				}
				[Symbol.asyncIterator]() {
					return tslib_1.__asyncGenerator(this, arguments, function* _a() {
						yield tslib_1.__await(
							yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues(this[Symbol.iterator]()))
						);
					});
				}
			};
			exports.RecordBatchStreamReader = RecordBatchStreamReader3;
			var AsyncRecordBatchStreamReader2 = class extends RecordBatchReader3 {
				constructor(_impl) {
					super(_impl);
					this._impl = _impl;
				}
				[Symbol.iterator]() {
					throw new Error(`AsyncRecordBatchStreamReader is not Iterable`);
				}
				[Symbol.asyncIterator]() {
					return this._impl[Symbol.asyncIterator]();
				}
			};
			exports.AsyncRecordBatchStreamReader = AsyncRecordBatchStreamReader2;
			var RecordBatchFileReader3 = class extends RecordBatchStreamReader3 {
				constructor(_impl) {
					super(_impl);
					this._impl = _impl;
				}
			};
			exports.RecordBatchFileReader = RecordBatchFileReader3;
			var AsyncRecordBatchFileReader2 = class extends AsyncRecordBatchStreamReader2 {
				constructor(_impl) {
					super(_impl);
					this._impl = _impl;
				}
			};
			exports.AsyncRecordBatchFileReader = AsyncRecordBatchFileReader2;
			var RecordBatchReaderImpl = class {
				constructor(dictionaries = /* @__PURE__ */ new Map()) {
					this.closed = false;
					this.autoDestroy = true;
					this._dictionaryIndex = 0;
					this._recordBatchIndex = 0;
					this.dictionaries = dictionaries;
				}
				get numDictionaries() {
					return this._dictionaryIndex;
				}
				get numRecordBatches() {
					return this._recordBatchIndex;
				}
				isSync() {
					return false;
				}
				isAsync() {
					return false;
				}
				isFile() {
					return false;
				}
				isStream() {
					return false;
				}
				reset(schema) {
					this._dictionaryIndex = 0;
					this._recordBatchIndex = 0;
					this.schema = schema;
					this.dictionaries = /* @__PURE__ */ new Map();
					return this;
				}
				_loadRecordBatch(header, body) {
					return new recordbatch_1.RecordBatch(
						this.schema,
						header.length,
						this._loadVectors(header, body, this.schema.fields)
					);
				}
				_loadDictionaryBatch(header, body) {
					const { id, isDelta, data } = header;
					const { dictionaries, schema } = this;
					const dictionary = dictionaries.get(id);
					if (isDelta || !dictionary) {
						const type = schema.dictionaries.get(id);
						return dictionary && isDelta
							? dictionary.concat(vector_1.Vector.new(this._loadVectors(data, body, [type])[0]))
							: vector_1.Vector.new(this._loadVectors(data, body, [type])[0]);
					}
					return dictionary;
				}
				_loadVectors(header, body, types) {
					return new vectorloader_1.VectorLoader(
						body,
						header.nodes,
						header.buffers,
						this.dictionaries
					).visitMany(types);
				}
			};
			var RecordBatchStreamReaderImpl = class extends RecordBatchReaderImpl {
				constructor(source, dictionaries) {
					super(dictionaries);
					this._reader = !compat_1.isArrowJSON(source)
						? new message_1.MessageReader((this._handle = source))
						: new message_1.JSONMessageReader((this._handle = source));
				}
				isSync() {
					return true;
				}
				isStream() {
					return true;
				}
				[Symbol.iterator]() {
					return this;
				}
				cancel() {
					if (!this.closed && (this.closed = true)) {
						this.reset()._reader.return();
						this._reader = null;
						this.dictionaries = null;
					}
				}
				open(options) {
					if (!this.closed) {
						this.autoDestroy = shouldAutoDestroy(this, options);
						if (!(this.schema || (this.schema = this._reader.readSchema()))) {
							this.cancel();
						}
					}
					return this;
				}
				throw(value) {
					if (!this.closed && this.autoDestroy && (this.closed = true)) {
						return this.reset()._reader.throw(value);
					}
					return interfaces_1.ITERATOR_DONE;
				}
				return(value) {
					if (!this.closed && this.autoDestroy && (this.closed = true)) {
						return this.reset()._reader.return(value);
					}
					return interfaces_1.ITERATOR_DONE;
				}
				next() {
					if (this.closed) {
						return interfaces_1.ITERATOR_DONE;
					}
					let message;
					const { _reader: reader } = this;
					while ((message = this._readNextMessageAndValidate())) {
						if (message.isSchema()) {
							this.reset(message.header());
						} else if (message.isRecordBatch()) {
							this._recordBatchIndex++;
							const header = message.header();
							const buffer = reader.readMessageBody(message.bodyLength);
							const recordBatch = this._loadRecordBatch(header, buffer);
							return { done: false, value: recordBatch };
						} else if (message.isDictionaryBatch()) {
							this._dictionaryIndex++;
							const header = message.header();
							const buffer = reader.readMessageBody(message.bodyLength);
							const vector = this._loadDictionaryBatch(header, buffer);
							this.dictionaries.set(header.id, vector);
						}
					}
					if (this.schema && this._recordBatchIndex === 0) {
						this._recordBatchIndex++;
						return {
							done: false,
							value: new recordbatch_1._InternalEmptyPlaceholderRecordBatch(this.schema)
						};
					}
					return this.return();
				}
				_readNextMessageAndValidate(type) {
					return this._reader.readMessage(type);
				}
			};
			var AsyncRecordBatchStreamReaderImpl = class extends RecordBatchReaderImpl {
				constructor(source, dictionaries) {
					super(dictionaries);
					this._reader = new message_1.AsyncMessageReader((this._handle = source));
				}
				isAsync() {
					return true;
				}
				isStream() {
					return true;
				}
				[Symbol.asyncIterator]() {
					return this;
				}
				cancel() {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						if (!this.closed && (this.closed = true)) {
							yield this.reset()._reader.return();
							this._reader = null;
							this.dictionaries = null;
						}
					});
				}
				open(options) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						if (!this.closed) {
							this.autoDestroy = shouldAutoDestroy(this, options);
							if (!(this.schema || (this.schema = yield this._reader.readSchema()))) {
								yield this.cancel();
							}
						}
						return this;
					});
				}
				throw(value) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						if (!this.closed && this.autoDestroy && (this.closed = true)) {
							return yield this.reset()._reader.throw(value);
						}
						return interfaces_1.ITERATOR_DONE;
					});
				}
				return(value) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						if (!this.closed && this.autoDestroy && (this.closed = true)) {
							return yield this.reset()._reader.return(value);
						}
						return interfaces_1.ITERATOR_DONE;
					});
				}
				next() {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						if (this.closed) {
							return interfaces_1.ITERATOR_DONE;
						}
						let message;
						const { _reader: reader } = this;
						while ((message = yield this._readNextMessageAndValidate())) {
							if (message.isSchema()) {
								yield this.reset(message.header());
							} else if (message.isRecordBatch()) {
								this._recordBatchIndex++;
								const header = message.header();
								const buffer = yield reader.readMessageBody(message.bodyLength);
								const recordBatch = this._loadRecordBatch(header, buffer);
								return { done: false, value: recordBatch };
							} else if (message.isDictionaryBatch()) {
								this._dictionaryIndex++;
								const header = message.header();
								const buffer = yield reader.readMessageBody(message.bodyLength);
								const vector = this._loadDictionaryBatch(header, buffer);
								this.dictionaries.set(header.id, vector);
							}
						}
						if (this.schema && this._recordBatchIndex === 0) {
							this._recordBatchIndex++;
							return {
								done: false,
								value: new recordbatch_1._InternalEmptyPlaceholderRecordBatch(this.schema)
							};
						}
						return yield this.return();
					});
				}
				_readNextMessageAndValidate(type) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						return yield this._reader.readMessage(type);
					});
				}
			};
			var RecordBatchFileReaderImpl = class extends RecordBatchStreamReaderImpl {
				constructor(source, dictionaries) {
					super(
						source instanceof file_2.RandomAccessFile
							? source
							: new file_2.RandomAccessFile(source),
						dictionaries
					);
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
					return true;
				}
				isFile() {
					return true;
				}
				open(options) {
					if (!this.closed && !this._footer) {
						this.schema = (this._footer = this._readFooter()).schema;
						for (const block of this._footer.dictionaryBatches()) {
							block && this._readDictionaryBatch(this._dictionaryIndex++);
						}
					}
					return super.open(options);
				}
				readRecordBatch(index) {
					if (this.closed) {
						return null;
					}
					if (!this._footer) {
						this.open();
					}
					const block = this._footer && this._footer.getRecordBatch(index);
					if (block && this._handle.seek(block.offset)) {
						const message = this._reader.readMessage(enum_1.MessageHeader.RecordBatch);
						if (message === null || message === void 0 ? void 0 : message.isRecordBatch()) {
							const header = message.header();
							const buffer = this._reader.readMessageBody(message.bodyLength);
							const recordBatch = this._loadRecordBatch(header, buffer);
							return recordBatch;
						}
					}
					return null;
				}
				_readDictionaryBatch(index) {
					const block = this._footer && this._footer.getDictionaryBatch(index);
					if (block && this._handle.seek(block.offset)) {
						const message = this._reader.readMessage(enum_1.MessageHeader.DictionaryBatch);
						if (message === null || message === void 0 ? void 0 : message.isDictionaryBatch()) {
							const header = message.header();
							const buffer = this._reader.readMessageBody(message.bodyLength);
							const vector = this._loadDictionaryBatch(header, buffer);
							this.dictionaries.set(header.id, vector);
						}
					}
				}
				_readFooter() {
					const { _handle } = this;
					const offset = _handle.size - message_1.magicAndPadding;
					const length = _handle.readInt32(offset);
					const buffer = _handle.readAt(offset - length, length);
					return file_1.Footer.decode(buffer);
				}
				_readNextMessageAndValidate(type) {
					if (!this._footer) {
						this.open();
					}
					if (this._footer && this._recordBatchIndex < this.numRecordBatches) {
						const block = this._footer && this._footer.getRecordBatch(this._recordBatchIndex);
						if (block && this._handle.seek(block.offset)) {
							return this._reader.readMessage(type);
						}
					}
					return null;
				}
			};
			var AsyncRecordBatchFileReaderImpl = class extends AsyncRecordBatchStreamReaderImpl {
				constructor(source, ...rest) {
					const byteLength = typeof rest[0] !== 'number' ? rest.shift() : void 0;
					const dictionaries = rest[0] instanceof Map ? rest.shift() : void 0;
					super(
						source instanceof file_2.AsyncRandomAccessFile
							? source
							: new file_2.AsyncRandomAccessFile(source, byteLength),
						dictionaries
					);
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
					return true;
				}
				isAsync() {
					return true;
				}
				open(options) {
					const _super = Object.create(null, {
						open: { get: () => super.open }
					});
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						if (!this.closed && !this._footer) {
							this.schema = (this._footer = yield this._readFooter()).schema;
							for (const block of this._footer.dictionaryBatches()) {
								block && (yield this._readDictionaryBatch(this._dictionaryIndex++));
							}
						}
						return yield _super.open.call(this, options);
					});
				}
				readRecordBatch(index) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						if (this.closed) {
							return null;
						}
						if (!this._footer) {
							yield this.open();
						}
						const block = this._footer && this._footer.getRecordBatch(index);
						if (block && (yield this._handle.seek(block.offset))) {
							const message = yield this._reader.readMessage(enum_1.MessageHeader.RecordBatch);
							if (message === null || message === void 0 ? void 0 : message.isRecordBatch()) {
								const header = message.header();
								const buffer = yield this._reader.readMessageBody(message.bodyLength);
								const recordBatch = this._loadRecordBatch(header, buffer);
								return recordBatch;
							}
						}
						return null;
					});
				}
				_readDictionaryBatch(index) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						const block = this._footer && this._footer.getDictionaryBatch(index);
						if (block && (yield this._handle.seek(block.offset))) {
							const message = yield this._reader.readMessage(enum_1.MessageHeader.DictionaryBatch);
							if (message === null || message === void 0 ? void 0 : message.isDictionaryBatch()) {
								const header = message.header();
								const buffer = yield this._reader.readMessageBody(message.bodyLength);
								const vector = this._loadDictionaryBatch(header, buffer);
								this.dictionaries.set(header.id, vector);
							}
						}
					});
				}
				_readFooter() {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						const { _handle } = this;
						_handle._pending && (yield _handle._pending);
						const offset = _handle.size - message_1.magicAndPadding;
						const length = yield _handle.readInt32(offset);
						const buffer = yield _handle.readAt(offset - length, length);
						return file_1.Footer.decode(buffer);
					});
				}
				_readNextMessageAndValidate(type) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						if (!this._footer) {
							yield this.open();
						}
						if (this._footer && this._recordBatchIndex < this.numRecordBatches) {
							const block = this._footer.getRecordBatch(this._recordBatchIndex);
							if (block && (yield this._handle.seek(block.offset))) {
								return yield this._reader.readMessage(type);
							}
						}
						return null;
					});
				}
			};
			var RecordBatchJSONReaderImpl = class extends RecordBatchStreamReaderImpl {
				constructor(source, dictionaries) {
					super(source, dictionaries);
				}
				_loadVectors(header, body, types) {
					return new vectorloader_1.JSONVectorLoader(
						body,
						header.nodes,
						header.buffers,
						this.dictionaries
					).visitMany(types);
				}
			};
			function shouldAutoDestroy(self2, options) {
				return options && typeof options['autoDestroy'] === 'boolean'
					? options['autoDestroy']
					: self2['autoDestroy'];
			}
			function* readAllSync(source) {
				const reader = RecordBatchReader3.from(source);
				try {
					if (!reader.open({ autoDestroy: false }).closed) {
						do {
							yield reader;
						} while (!reader.reset().open().closed);
					}
				} finally {
					reader.cancel();
				}
			}
			function readAllAsync(source) {
				return tslib_1.__asyncGenerator(this, arguments, function* readAllAsync_1() {
					const reader = yield tslib_1.__await(RecordBatchReader3.from(source));
					try {
						if (!(yield tslib_1.__await(reader.open({ autoDestroy: false }))).closed) {
							do {
								yield yield tslib_1.__await(reader);
							} while (!(yield tslib_1.__await(reader.reset().open())).closed);
						}
					} finally {
						yield tslib_1.__await(reader.cancel());
					}
				});
			}
			function fromArrowJSON(source) {
				return new RecordBatchStreamReader3(new RecordBatchJSONReaderImpl(source));
			}
			function fromByteStream(source) {
				const bytes = source.peek((message_1.magicLength + 7) & ~7);
				return bytes && bytes.byteLength >= 4
					? !message_1.checkForMagicArrowString(bytes)
						? new RecordBatchStreamReader3(new RecordBatchStreamReaderImpl(source))
						: new RecordBatchFileReader3(new RecordBatchFileReaderImpl(source.read()))
					: new RecordBatchStreamReader3(new RecordBatchStreamReaderImpl((function* () {})()));
			}
			function fromAsyncByteStream(source) {
				return tslib_1.__awaiter(this, void 0, void 0, function* () {
					const bytes = yield source.peek((message_1.magicLength + 7) & ~7);
					return bytes && bytes.byteLength >= 4
						? !message_1.checkForMagicArrowString(bytes)
							? new AsyncRecordBatchStreamReader2(new AsyncRecordBatchStreamReaderImpl(source))
							: new RecordBatchFileReader3(new RecordBatchFileReaderImpl(yield source.read()))
						: new AsyncRecordBatchStreamReader2(
								new AsyncRecordBatchStreamReaderImpl(
									(function () {
										return tslib_1.__asyncGenerator(this, arguments, function* () {});
									})()
								)
						  );
				});
			}
			function fromFileHandle(source) {
				return tslib_1.__awaiter(this, void 0, void 0, function* () {
					const { size } = yield source.stat();
					const file = new file_2.AsyncRandomAccessFile(source, size);
					if (size >= message_1.magicX2AndPadding) {
						if (
							message_1.checkForMagicArrowString(
								yield file.readAt(0, (message_1.magicLength + 7) & ~7)
							)
						) {
							return new AsyncRecordBatchFileReader2(new AsyncRecordBatchFileReaderImpl(file));
						}
					}
					return new AsyncRecordBatchStreamReader2(new AsyncRecordBatchStreamReaderImpl(file));
				});
			}
		}
	});

	// ../../node_modules/apache-arrow/io/whatwg/iterable.js
	var require_iterable = __commonJS({
		'../../node_modules/apache-arrow/io/whatwg/iterable.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.toDOMStream = void 0;
			var tslib_1 = require_tslib();
			var buffer_1 = require_buffer();
			var compat_1 = require_compat();
			function toDOMStream2(source, options) {
				if (compat_1.isAsyncIterable(source)) {
					return asyncIterableAsReadableDOMStream(source, options);
				}
				if (compat_1.isIterable(source)) {
					return iterableAsReadableDOMStream(source, options);
				}
				throw new Error(`toDOMStream() must be called with an Iterable or AsyncIterable`);
			}
			exports.toDOMStream = toDOMStream2;
			function iterableAsReadableDOMStream(source, options) {
				let it2 = null;
				const bm =
					(options === null || options === void 0 ? void 0 : options.type) === 'bytes' || false;
				const hwm =
					(options === null || options === void 0 ? void 0 : options.highWaterMark) ||
					Math.pow(2, 24);
				return new ReadableStream(
					Object.assign(Object.assign({}, options), {
						start(controller) {
							next(controller, it2 || (it2 = source[Symbol.iterator]()));
						},
						pull(controller) {
							it2 ? next(controller, it2) : controller.close();
						},
						cancel() {
							(((it2 === null || it2 === void 0 ? void 0 : it2.return) && it2.return()) || true) &&
								(it2 = null);
						}
					}),
					Object.assign({ highWaterMark: bm ? hwm : void 0 }, options)
				);
				function next(controller, it3) {
					let buf;
					let r = null;
					let size = controller.desiredSize || null;
					while (!(r = it3.next(bm ? size : null)).done) {
						if (ArrayBuffer.isView(r.value) && (buf = buffer_1.toUint8Array(r.value))) {
							size != null && bm && (size = size - buf.byteLength + 1);
							r.value = buf;
						}
						controller.enqueue(r.value);
						if (size != null && --size <= 0) {
							return;
						}
					}
					controller.close();
				}
			}
			function asyncIterableAsReadableDOMStream(source, options) {
				let it2 = null;
				const bm =
					(options === null || options === void 0 ? void 0 : options.type) === 'bytes' || false;
				const hwm =
					(options === null || options === void 0 ? void 0 : options.highWaterMark) ||
					Math.pow(2, 24);
				return new ReadableStream(
					Object.assign(Object.assign({}, options), {
						start(controller) {
							return tslib_1.__awaiter(this, void 0, void 0, function* () {
								yield next(controller, it2 || (it2 = source[Symbol.asyncIterator]()));
							});
						},
						pull(controller) {
							return tslib_1.__awaiter(this, void 0, void 0, function* () {
								it2 ? yield next(controller, it2) : controller.close();
							});
						},
						cancel() {
							return tslib_1.__awaiter(this, void 0, void 0, function* () {
								(((it2 === null || it2 === void 0 ? void 0 : it2.return) && (yield it2.return())) ||
									true) &&
									(it2 = null);
							});
						}
					}),
					Object.assign({ highWaterMark: bm ? hwm : void 0 }, options)
				);
				function next(controller, it3) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						let buf;
						let r = null;
						let size = controller.desiredSize || null;
						while (!(r = yield it3.next(bm ? size : null)).done) {
							if (ArrayBuffer.isView(r.value) && (buf = buffer_1.toUint8Array(r.value))) {
								size != null && bm && (size = size - buf.byteLength + 1);
								r.value = buf;
							}
							controller.enqueue(r.value);
							if (size != null && --size <= 0) {
								return;
							}
						}
						controller.close();
					});
				}
			}
		}
	});

	// ../../node_modules/apache-arrow/io/whatwg/builder.js
	var require_builder3 = __commonJS({
		'../../node_modules/apache-arrow/io/whatwg/builder.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.BuilderTransform = exports.builderThroughDOMStream = void 0;
			var tslib_1 = require_tslib();
			var index_1 = require_builder2();
			function builderThroughDOMStream2(options) {
				return new BuilderTransform(options);
			}
			exports.builderThroughDOMStream = builderThroughDOMStream2;
			var BuilderTransform = class {
				constructor(options) {
					this._numChunks = 0;
					this._finished = false;
					this._bufferedSize = 0;
					const {
							['readableStrategy']: readableStrategy,
							['writableStrategy']: writableStrategy,
							['queueingStrategy']: queueingStrategy = 'count'
						} = options,
						builderOptions = tslib_1.__rest(options, [
							'readableStrategy',
							'writableStrategy',
							'queueingStrategy'
						]);
					this._controller = null;
					this._builder = index_1.Builder.new(builderOptions);
					this._getSize = queueingStrategy !== 'bytes' ? chunkLength : chunkByteLength;
					const {
						['highWaterMark']: readableHighWaterMark = queueingStrategy === 'bytes'
							? Math.pow(2, 14)
							: 1e3
					} = Object.assign({}, readableStrategy);
					const {
						['highWaterMark']: writableHighWaterMark = queueingStrategy === 'bytes'
							? Math.pow(2, 14)
							: 1e3
					} = Object.assign({}, writableStrategy);
					this['readable'] = new ReadableStream(
						{
							['cancel']: () => {
								this._builder.clear();
							},
							['pull']: (c) => {
								this._maybeFlush(this._builder, (this._controller = c));
							},
							['start']: (c) => {
								this._maybeFlush(this._builder, (this._controller = c));
							}
						},
						{
							highWaterMark: readableHighWaterMark,
							size: queueingStrategy !== 'bytes' ? chunkLength : chunkByteLength
						}
					);
					this['writable'] = new WritableStream(
						{
							['abort']: () => {
								this._builder.clear();
							},
							['write']: () => {
								this._maybeFlush(this._builder, this._controller);
							},
							['close']: () => {
								this._maybeFlush(this._builder.finish(), this._controller);
							}
						},
						{
							highWaterMark: writableHighWaterMark,
							size: (value) => this._writeValueAndReturnChunkSize(value)
						}
					);
				}
				_writeValueAndReturnChunkSize(value) {
					const bufferedSize = this._bufferedSize;
					this._bufferedSize = this._getSize(this._builder.append(value));
					return this._bufferedSize - bufferedSize;
				}
				_maybeFlush(builder, controller) {
					if (controller === null) {
						return;
					}
					if (this._bufferedSize >= controller.desiredSize) {
						++this._numChunks && this._enqueue(controller, builder.toVector());
					}
					if (builder.finished) {
						if (builder.length > 0 || this._numChunks === 0) {
							++this._numChunks && this._enqueue(controller, builder.toVector());
						}
						if (!this._finished && (this._finished = true)) {
							this._enqueue(controller, null);
						}
					}
				}
				_enqueue(controller, chunk) {
					this._bufferedSize = 0;
					this._controller = null;
					chunk === null ? controller.close() : controller.enqueue(chunk);
				}
			};
			exports.BuilderTransform = BuilderTransform;
			var chunkLength = (chunk) => chunk.length;
			var chunkByteLength = (chunk) => chunk.byteLength;
		}
	});

	// ../../node_modules/apache-arrow/io/whatwg/reader.js
	var require_reader2 = __commonJS({
		'../../node_modules/apache-arrow/io/whatwg/reader.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.recordBatchReaderThroughDOMStream = void 0;
			var tslib_1 = require_tslib();
			var stream_1 = require_stream();
			var reader_1 = require_reader();
			function recordBatchReaderThroughDOMStream2(writableStrategy, readableStrategy) {
				const queue = new stream_1.AsyncByteQueue();
				let reader = null;
				const readable = new ReadableStream({
					cancel() {
						return tslib_1.__awaiter(this, void 0, void 0, function* () {
							yield queue.close();
						});
					},
					start(controller) {
						return tslib_1.__awaiter(this, void 0, void 0, function* () {
							yield next(controller, reader || (reader = yield open()));
						});
					},
					pull(controller) {
						return tslib_1.__awaiter(this, void 0, void 0, function* () {
							reader ? yield next(controller, reader) : controller.close();
						});
					}
				});
				return {
					writable: new WritableStream(
						queue,
						Object.assign({ highWaterMark: Math.pow(2, 14) }, writableStrategy)
					),
					readable
				};
				function open() {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						return yield (yield reader_1.RecordBatchReader.from(queue)).open(readableStrategy);
					});
				}
				function next(controller, reader2) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						let size = controller.desiredSize;
						let r = null;
						while (!(r = yield reader2.next()).done) {
							controller.enqueue(r.value);
							if (size != null && --size <= 0) {
								return;
							}
						}
						controller.close();
					});
				}
			}
			exports.recordBatchReaderThroughDOMStream = recordBatchReaderThroughDOMStream2;
		}
	});

	// ../../node_modules/apache-arrow/io/whatwg/writer.js
	var require_writer2 = __commonJS({
		'../../node_modules/apache-arrow/io/whatwg/writer.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.recordBatchWriterThroughDOMStream = void 0;
			var tslib_1 = require_tslib();
			var stream_1 = require_stream();
			function recordBatchWriterThroughDOMStream2(writableStrategy, readableStrategy) {
				const writer = new this(writableStrategy);
				const reader = new stream_1.AsyncByteStream(writer);
				const readable = new ReadableStream(
					{
						type: 'bytes',
						cancel() {
							return tslib_1.__awaiter(this, void 0, void 0, function* () {
								yield reader.cancel();
							});
						},
						pull(controller) {
							return tslib_1.__awaiter(this, void 0, void 0, function* () {
								yield next(controller);
							});
						},
						start(controller) {
							return tslib_1.__awaiter(this, void 0, void 0, function* () {
								yield next(controller);
							});
						}
					},
					Object.assign({ highWaterMark: Math.pow(2, 14) }, readableStrategy)
				);
				return { writable: new WritableStream(writer, writableStrategy), readable };
				function next(controller) {
					return tslib_1.__awaiter(this, void 0, void 0, function* () {
						let buf = null;
						let size = controller.desiredSize;
						while ((buf = yield reader.read(size || null))) {
							controller.enqueue(buf);
							if (size != null && (size -= buf.byteLength) <= 0) {
								return;
							}
						}
						controller.close();
					});
				}
			}
			exports.recordBatchWriterThroughDOMStream = recordBatchWriterThroughDOMStream2;
		}
	});

	// ../../node_modules/apache-arrow/compute/predicate.js
	var require_predicate = __commonJS({
		'../../node_modules/apache-arrow/compute/predicate.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.custom =
				exports.or =
				exports.and =
				exports.col =
				exports.lit =
				exports.CustomPredicate =
				exports.Not =
				exports.GTeq =
				exports.LTeq =
				exports.Equals =
				exports.Or =
				exports.And =
				exports.CombinationPredicate =
				exports.ComparisonPredicate =
				exports.Predicate =
				exports.Col =
				exports.Literal =
				exports.Value =
					void 0;
			var dictionary_1 = require_dictionary2();
			var Value = class {
				eq(other) {
					if (!(other instanceof Value)) {
						other = new Literal(other);
					}
					return new Equals(this, other);
				}
				le(other) {
					if (!(other instanceof Value)) {
						other = new Literal(other);
					}
					return new LTeq(this, other);
				}
				ge(other) {
					if (!(other instanceof Value)) {
						other = new Literal(other);
					}
					return new GTeq(this, other);
				}
				lt(other) {
					return new Not(this.ge(other));
				}
				gt(other) {
					return new Not(this.le(other));
				}
				ne(other) {
					return new Not(this.eq(other));
				}
			};
			exports.Value = Value;
			var Literal = class extends Value {
				constructor(v) {
					super();
					this.v = v;
				}
			};
			exports.Literal = Literal;
			var Col = class extends Value {
				constructor(name) {
					super();
					this.name = name;
				}
				bind(batch) {
					if (!this.colidx) {
						this.colidx = -1;
						const fields = batch.schema.fields;
						for (let idx = -1; ++idx < fields.length; ) {
							if (fields[idx].name === this.name) {
								this.colidx = idx;
								break;
							}
						}
						if (this.colidx < 0) {
							throw new Error(`Failed to bind Col "${this.name}"`);
						}
					}
					const vec = (this.vector = batch.getChildAt(this.colidx));
					return (idx) => vec.get(idx);
				}
			};
			exports.Col = Col;
			var Predicate = class {
				and(...expr) {
					return new And(this, ...expr);
				}
				or(...expr) {
					return new Or(this, ...expr);
				}
				not() {
					return new Not(this);
				}
			};
			exports.Predicate = Predicate;
			var ComparisonPredicate = class extends Predicate {
				constructor(left, right) {
					super();
					this.left = left;
					this.right = right;
				}
				bind(batch) {
					if (this.left instanceof Literal) {
						if (this.right instanceof Literal) {
							return this._bindLitLit(batch, this.left, this.right);
						} else {
							return this._bindLitCol(batch, this.left, this.right);
						}
					} else {
						if (this.right instanceof Literal) {
							return this._bindColLit(batch, this.left, this.right);
						} else {
							return this._bindColCol(batch, this.left, this.right);
						}
					}
				}
			};
			exports.ComparisonPredicate = ComparisonPredicate;
			var CombinationPredicate = class extends Predicate {
				constructor(...children) {
					super();
					this.children = children;
				}
			};
			exports.CombinationPredicate = CombinationPredicate;
			CombinationPredicate.prototype.children = Object.freeze([]);
			var And = class extends CombinationPredicate {
				constructor(...children) {
					children = children.reduce((accum, p) => {
						return accum.concat(p instanceof And ? p.children : p);
					}, []);
					super(...children);
				}
				bind(batch) {
					const bound = this.children.map((p) => p.bind(batch));
					return (idx, batch2) => bound.every((p) => p(idx, batch2));
				}
			};
			exports.And = And;
			var Or = class extends CombinationPredicate {
				constructor(...children) {
					children = children.reduce((accum, p) => {
						return accum.concat(p instanceof Or ? p.children : p);
					}, []);
					super(...children);
				}
				bind(batch) {
					const bound = this.children.map((p) => p.bind(batch));
					return (idx, batch2) => bound.some((p) => p(idx, batch2));
				}
			};
			exports.Or = Or;
			var Equals = class extends ComparisonPredicate {
				_bindLitLit(_batch, left, right) {
					const rtrn = left.v == right.v;
					return () => rtrn;
				}
				_bindColCol(batch, left, right) {
					const left_func = left.bind(batch);
					const right_func = right.bind(batch);
					return (idx, batch2) => left_func(idx, batch2) == right_func(idx, batch2);
				}
				_bindColLit(batch, col2, lit2) {
					const col_func = col2.bind(batch);
					if (col2.vector instanceof dictionary_1.DictionaryVector) {
						let key;
						const vector = col2.vector;
						if (vector.dictionary !== this.lastDictionary) {
							key = vector.reverseLookup(lit2.v);
							this.lastDictionary = vector.dictionary;
							this.lastKey = key;
						} else {
							key = this.lastKey;
						}
						if (key === -1) {
							return () => false;
						} else {
							return (idx) => {
								return vector.getKey(idx) === key;
							};
						}
					} else {
						return (idx, cols) => col_func(idx, cols) == lit2.v;
					}
				}
				_bindLitCol(batch, lit2, col2) {
					return this._bindColLit(batch, col2, lit2);
				}
			};
			exports.Equals = Equals;
			var LTeq = class extends ComparisonPredicate {
				_bindLitLit(_batch, left, right) {
					const rtrn = left.v <= right.v;
					return () => rtrn;
				}
				_bindColCol(batch, left, right) {
					const left_func = left.bind(batch);
					const right_func = right.bind(batch);
					return (idx, cols) => left_func(idx, cols) <= right_func(idx, cols);
				}
				_bindColLit(batch, col2, lit2) {
					const col_func = col2.bind(batch);
					return (idx, cols) => col_func(idx, cols) <= lit2.v;
				}
				_bindLitCol(batch, lit2, col2) {
					const col_func = col2.bind(batch);
					return (idx, cols) => lit2.v <= col_func(idx, cols);
				}
			};
			exports.LTeq = LTeq;
			var GTeq = class extends ComparisonPredicate {
				_bindLitLit(_batch, left, right) {
					const rtrn = left.v >= right.v;
					return () => rtrn;
				}
				_bindColCol(batch, left, right) {
					const left_func = left.bind(batch);
					const right_func = right.bind(batch);
					return (idx, cols) => left_func(idx, cols) >= right_func(idx, cols);
				}
				_bindColLit(batch, col2, lit2) {
					const col_func = col2.bind(batch);
					return (idx, cols) => col_func(idx, cols) >= lit2.v;
				}
				_bindLitCol(batch, lit2, col2) {
					const col_func = col2.bind(batch);
					return (idx, cols) => lit2.v >= col_func(idx, cols);
				}
			};
			exports.GTeq = GTeq;
			var Not = class extends Predicate {
				constructor(child) {
					super();
					this.child = child;
				}
				bind(batch) {
					const func = this.child.bind(batch);
					return (idx, batch2) => !func(idx, batch2);
				}
			};
			exports.Not = Not;
			var CustomPredicate = class extends Predicate {
				constructor(next, bind_) {
					super();
					this.next = next;
					this.bind_ = bind_;
				}
				bind(batch) {
					this.bind_(batch);
					return this.next;
				}
			};
			exports.CustomPredicate = CustomPredicate;
			function lit(v) {
				return new Literal(v);
			}
			exports.lit = lit;
			function col(n) {
				return new Col(n);
			}
			exports.col = col;
			function and(...p) {
				return new And(...p);
			}
			exports.and = and;
			function or(...p) {
				return new Or(...p);
			}
			exports.or = or;
			function custom(next, bind) {
				return new CustomPredicate(next, bind);
			}
			exports.custom = custom;
		}
	});

	// ../../node_modules/apache-arrow/compute/dataframe.js
	var require_dataframe = __commonJS({
		'../../node_modules/apache-arrow/compute/dataframe.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.FilteredDataFrame = exports.CountByResult = exports.DataFrame = void 0;
			var table_1 = require_table();
			var int_1 = require_int3();
			var schema_1 = require_schema();
			var predicate_1 = require_predicate();
			var recordbatch_1 = require_recordbatch2();
			var type_1 = require_type();
			var DataFrame2 = class extends table_1.Table {
				filter(predicate2) {
					return new FilteredDataFrame2(this.chunks, predicate2);
				}
				scan(next, bind) {
					const batches = this.chunks,
						numBatches = batches.length;
					for (let batchIndex = -1; ++batchIndex < numBatches; ) {
						const batch = batches[batchIndex];
						if (bind) {
							bind(batch);
						}
						for (let index = -1, numRows = batch.length; ++index < numRows; ) {
							next(index, batch);
						}
					}
				}
				scanReverse(next, bind) {
					const batches = this.chunks,
						numBatches = batches.length;
					for (let batchIndex = numBatches; --batchIndex >= 0; ) {
						const batch = batches[batchIndex];
						if (bind) {
							bind(batch);
						}
						for (let index = batch.length; --index >= 0; ) {
							next(index, batch);
						}
					}
				}
				countBy(name) {
					const batches = this.chunks,
						numBatches = batches.length;
					const count_by = typeof name === 'string' ? new predicate_1.Col(name) : name;
					count_by.bind(batches[numBatches - 1]);
					const vector = count_by.vector;
					if (!type_1.DataType.isDictionary(vector.type)) {
						throw new Error('countBy currently only supports dictionary-encoded columns');
					}
					const countByteLength = Math.ceil(Math.log(vector.length) / Math.log(256));
					const CountsArrayType =
						countByteLength == 4 ? Uint32Array : countByteLength >= 2 ? Uint16Array : Uint8Array;
					const counts = new CountsArrayType(vector.dictionary.length);
					for (let batchIndex = -1; ++batchIndex < numBatches; ) {
						const batch = batches[batchIndex];
						count_by.bind(batch);
						const keys = count_by.vector.indices;
						for (let index = -1, numRows = batch.length; ++index < numRows; ) {
							const key = keys.get(index);
							if (key !== null) {
								counts[key]++;
							}
						}
					}
					return new CountByResult2(vector.dictionary, int_1.IntVector.from(counts));
				}
			};
			exports.DataFrame = DataFrame2;
			var CountByResult2 = class extends table_1.Table {
				constructor(values, counts) {
					const schema = new schema_1.Schema([
						new schema_1.Field('values', values.type),
						new schema_1.Field('counts', counts.type)
					]);
					super(new recordbatch_1.RecordBatch(schema, counts.length, [values, counts]));
				}
				toJSON() {
					const values = this.getColumnAt(0);
					const counts = this.getColumnAt(1);
					const result = {};
					for (let i = -1; ++i < this.length; ) {
						result[values.get(i)] = counts.get(i);
					}
					return result;
				}
			};
			exports.CountByResult = CountByResult2;
			var FilteredBatchIterator = class {
				constructor(batches, predicate2) {
					this.batches = batches;
					this.predicate = predicate2;
					this.batchIndex = 0;
					this.index = 0;
					this.batch = this.batches[this.batchIndex];
					this.predicateFunc = this.predicate.bind(this.batch);
				}
				next() {
					while (this.batchIndex < this.batches.length) {
						while (this.index < this.batch.length) {
							if (this.predicateFunc(this.index, this.batch)) {
								return {
									value: this.batch.get(this.index++)
								};
							}
							this.index++;
						}
						if (++this.batchIndex < this.batches.length) {
							this.index = 0;
							this.batch = this.batches[this.batchIndex];
							this.predicateFunc = this.predicate.bind(this.batch);
						}
					}
					return { done: true, value: null };
				}
				[Symbol.iterator]() {
					return this;
				}
			};
			var FilteredDataFrame2 = class extends DataFrame2 {
				constructor(batches, predicate2) {
					super(batches);
					this._predicate = predicate2;
				}
				scan(next, bind) {
					const batches = this._chunks;
					const numBatches = batches.length;
					for (let batchIndex = -1; ++batchIndex < numBatches; ) {
						const batch = batches[batchIndex];
						const predicate2 = this._predicate.bind(batch);
						let isBound = false;
						for (let index = -1, numRows = batch.length; ++index < numRows; ) {
							if (predicate2(index, batch)) {
								if (bind && !isBound) {
									bind(batch);
									isBound = true;
								}
								next(index, batch);
							}
						}
					}
				}
				scanReverse(next, bind) {
					const batches = this._chunks;
					const numBatches = batches.length;
					for (let batchIndex = numBatches; --batchIndex >= 0; ) {
						const batch = batches[batchIndex];
						const predicate2 = this._predicate.bind(batch);
						let isBound = false;
						for (let index = batch.length; --index >= 0; ) {
							if (predicate2(index, batch)) {
								if (bind && !isBound) {
									bind(batch);
									isBound = true;
								}
								next(index, batch);
							}
						}
					}
				}
				count() {
					let sum = 0;
					const batches = this._chunks;
					const numBatches = batches.length;
					for (let batchIndex = -1; ++batchIndex < numBatches; ) {
						const batch = batches[batchIndex];
						const predicate2 = this._predicate.bind(batch);
						for (let index = -1, numRows = batch.length; ++index < numRows; ) {
							if (predicate2(index, batch)) {
								++sum;
							}
						}
					}
					return sum;
				}
				[Symbol.iterator]() {
					return new FilteredBatchIterator(this._chunks, this._predicate);
				}
				filter(predicate2) {
					return new FilteredDataFrame2(this._chunks, this._predicate.and(predicate2));
				}
				countBy(name) {
					const batches = this._chunks,
						numBatches = batches.length;
					const count_by = typeof name === 'string' ? new predicate_1.Col(name) : name;
					count_by.bind(batches[numBatches - 1]);
					const vector = count_by.vector;
					if (!type_1.DataType.isDictionary(vector.type)) {
						throw new Error('countBy currently only supports dictionary-encoded columns');
					}
					const countByteLength = Math.ceil(Math.log(vector.length) / Math.log(256));
					const CountsArrayType =
						countByteLength == 4 ? Uint32Array : countByteLength >= 2 ? Uint16Array : Uint8Array;
					const counts = new CountsArrayType(vector.dictionary.length);
					for (let batchIndex = -1; ++batchIndex < numBatches; ) {
						const batch = batches[batchIndex];
						const predicate2 = this._predicate.bind(batch);
						count_by.bind(batch);
						const keys = count_by.vector.indices;
						for (let index = -1, numRows = batch.length; ++index < numRows; ) {
							const key = keys.get(index);
							if (key !== null && predicate2(index, batch)) {
								counts[key]++;
							}
						}
					}
					return new CountByResult2(vector.dictionary, int_1.IntVector.from(counts));
				}
			};
			exports.FilteredDataFrame = FilteredDataFrame2;
		}
	});

	// ../../node_modules/apache-arrow/Arrow.js
	var require_Arrow = __commonJS({
		'../../node_modules/apache-arrow/Arrow.js'(exports) {
			'use strict';
			Object.defineProperty(exports, '__esModule', { value: true });
			exports.isTypedArray =
				exports.util =
				exports.predicate =
				exports.CountByResult =
				exports.FilteredDataFrame =
				exports.DataFrame =
				exports.RecordBatch =
				exports.Message =
				exports.JSONMessageReader =
				exports.AsyncMessageReader =
				exports.MessageReader =
				exports.RecordBatchJSONWriter =
				exports.RecordBatchStreamWriter =
				exports.RecordBatchFileWriter =
				exports.RecordBatchWriter =
				exports.AsyncRecordBatchStreamReader =
				exports.AsyncRecordBatchFileReader =
				exports.RecordBatchStreamReader =
				exports.RecordBatchFileReader =
				exports.RecordBatchReader =
				exports.AsyncByteQueue =
				exports.AsyncByteStream =
				exports.ByteStream =
				exports.Utf8Builder =
				exports.SparseUnionBuilder =
				exports.DenseUnionBuilder =
				exports.UnionBuilder =
				exports.TimeNanosecondBuilder =
				exports.TimeMicrosecondBuilder =
				exports.TimeMillisecondBuilder =
				exports.TimeSecondBuilder =
				exports.TimeBuilder =
				exports.TimestampNanosecondBuilder =
				exports.TimestampMicrosecondBuilder =
				exports.TimestampMillisecondBuilder =
				exports.TimestampSecondBuilder =
				exports.TimestampBuilder =
				exports.StructBuilder =
				exports.NullBuilder =
				exports.MapBuilder =
				exports.ListBuilder =
				exports.Uint64Builder =
				exports.Uint32Builder =
				exports.Uint16Builder =
				exports.Uint8Builder =
				exports.Int64Builder =
				exports.Int32Builder =
				exports.Int16Builder =
				exports.Int8Builder =
				exports.IntBuilder =
				exports.IntervalYearMonthBuilder =
				exports.IntervalDayTimeBuilder =
				exports.IntervalBuilder =
				exports.Float64Builder =
				exports.Float32Builder =
				exports.Float16Builder =
				exports.FloatBuilder =
				exports.FixedSizeListBuilder =
				exports.FixedSizeBinaryBuilder =
				exports.DictionaryBuilder =
				exports.DecimalBuilder =
				exports.DateMillisecondBuilder =
				exports.DateDayBuilder =
				exports.DateBuilder =
				exports.BoolBuilder =
				exports.BinaryBuilder =
				exports.Builder =
				exports.Utf8Vector =
				exports.SparseUnionVector =
				exports.DenseUnionVector =
				exports.UnionVector =
				exports.TimeNanosecondVector =
				exports.TimeMicrosecondVector =
				exports.TimeMillisecondVector =
				exports.TimeSecondVector =
				exports.TimeVector =
				exports.TimestampNanosecondVector =
				exports.TimestampMicrosecondVector =
				exports.TimestampMillisecondVector =
				exports.TimestampSecondVector =
				exports.TimestampVector =
				exports.StructVector =
				exports.NullVector =
				exports.MapVector =
				exports.ListVector =
				exports.Uint64Vector =
				exports.Uint32Vector =
				exports.Uint16Vector =
				exports.Uint8Vector =
				exports.Int64Vector =
				exports.Int32Vector =
				exports.Int16Vector =
				exports.Int8Vector =
				exports.IntVector =
				exports.IntervalYearMonthVector =
				exports.IntervalDayTimeVector =
				exports.IntervalVector =
				exports.Float64Vector =
				exports.Float32Vector =
				exports.Float16Vector =
				exports.FloatVector =
				exports.FixedSizeListVector =
				exports.FixedSizeBinaryVector =
				exports.DictionaryVector =
				exports.DecimalVector =
				exports.DateMillisecondVector =
				exports.DateDayVector =
				exports.DateVector =
				exports.Chunked =
				exports.BoolVector =
				exports.BinaryVector =
				exports.BaseVector =
				exports.Vector =
				exports.Field =
				exports.Schema =
				exports.Visitor =
				exports.Column =
				exports.Table =
				exports.Map_ =
				exports.FixedSizeList =
				exports.IntervalYearMonth =
				exports.IntervalDayTime =
				exports.Interval =
				exports.Dictionary =
				exports.SparseUnion =
				exports.DenseUnion =
				exports.Union =
				exports.Struct =
				exports.List =
				exports.Decimal =
				exports.TimeNanosecond =
				exports.TimeMicrosecond =
				exports.TimeMillisecond =
				exports.TimeSecond =
				exports.Time =
				exports.TimestampNanosecond =
				exports.TimestampMicrosecond =
				exports.TimestampMillisecond =
				exports.TimestampSecond =
				exports.Timestamp =
				exports.DateMillisecond =
				exports.DateDay =
				exports.Date_ =
				exports.FixedSizeBinary =
				exports.Binary =
				exports.Utf8 =
				exports.Float64 =
				exports.Float32 =
				exports.Float16 =
				exports.Float =
				exports.Uint64 =
				exports.Uint32 =
				exports.Uint16 =
				exports.Uint8 =
				exports.Int64 =
				exports.Int32 =
				exports.Int16 =
				exports.Int8 =
				exports.Int =
				exports.Bool =
				exports.Null =
				exports.DataType =
				exports.Data =
				exports.BufferType =
				exports.Type =
				exports.MessageHeader =
				exports.MetadataVersion =
				exports.IntervalUnit =
				exports.UnionMode =
				exports.Precision =
				exports.TimeUnit =
				exports.DateUnit =
					void 0;
			var Schema_1 = require_Schema();
			Object.defineProperty(exports, 'DateUnit', {
				enumerable: true,
				get: function () {
					return Schema_1.DateUnit;
				}
			});
			Object.defineProperty(exports, 'TimeUnit', {
				enumerable: true,
				get: function () {
					return Schema_1.TimeUnit;
				}
			});
			Object.defineProperty(exports, 'Precision', {
				enumerable: true,
				get: function () {
					return Schema_1.Precision;
				}
			});
			Object.defineProperty(exports, 'UnionMode', {
				enumerable: true,
				get: function () {
					return Schema_1.UnionMode;
				}
			});
			Object.defineProperty(exports, 'IntervalUnit', {
				enumerable: true,
				get: function () {
					return Schema_1.IntervalUnit;
				}
			});
			Object.defineProperty(exports, 'MetadataVersion', {
				enumerable: true,
				get: function () {
					return Schema_1.MetadataVersion;
				}
			});
			var Message_1 = require_Message();
			Object.defineProperty(exports, 'MessageHeader', {
				enumerable: true,
				get: function () {
					return Message_1.MessageHeader;
				}
			});
			var enum_1 = require_enum();
			Object.defineProperty(exports, 'Type', {
				enumerable: true,
				get: function () {
					return enum_1.Type;
				}
			});
			Object.defineProperty(exports, 'BufferType', {
				enumerable: true,
				get: function () {
					return enum_1.BufferType;
				}
			});
			var data_1 = require_data();
			Object.defineProperty(exports, 'Data', {
				enumerable: true,
				get: function () {
					return data_1.Data;
				}
			});
			var type_1 = require_type();
			Object.defineProperty(exports, 'DataType', {
				enumerable: true,
				get: function () {
					return type_1.DataType;
				}
			});
			Object.defineProperty(exports, 'Null', {
				enumerable: true,
				get: function () {
					return type_1.Null;
				}
			});
			Object.defineProperty(exports, 'Bool', {
				enumerable: true,
				get: function () {
					return type_1.Bool;
				}
			});
			Object.defineProperty(exports, 'Int', {
				enumerable: true,
				get: function () {
					return type_1.Int;
				}
			});
			Object.defineProperty(exports, 'Int8', {
				enumerable: true,
				get: function () {
					return type_1.Int8;
				}
			});
			Object.defineProperty(exports, 'Int16', {
				enumerable: true,
				get: function () {
					return type_1.Int16;
				}
			});
			Object.defineProperty(exports, 'Int32', {
				enumerable: true,
				get: function () {
					return type_1.Int32;
				}
			});
			Object.defineProperty(exports, 'Int64', {
				enumerable: true,
				get: function () {
					return type_1.Int64;
				}
			});
			Object.defineProperty(exports, 'Uint8', {
				enumerable: true,
				get: function () {
					return type_1.Uint8;
				}
			});
			Object.defineProperty(exports, 'Uint16', {
				enumerable: true,
				get: function () {
					return type_1.Uint16;
				}
			});
			Object.defineProperty(exports, 'Uint32', {
				enumerable: true,
				get: function () {
					return type_1.Uint32;
				}
			});
			Object.defineProperty(exports, 'Uint64', {
				enumerable: true,
				get: function () {
					return type_1.Uint64;
				}
			});
			Object.defineProperty(exports, 'Float', {
				enumerable: true,
				get: function () {
					return type_1.Float;
				}
			});
			Object.defineProperty(exports, 'Float16', {
				enumerable: true,
				get: function () {
					return type_1.Float16;
				}
			});
			Object.defineProperty(exports, 'Float32', {
				enumerable: true,
				get: function () {
					return type_1.Float32;
				}
			});
			Object.defineProperty(exports, 'Float64', {
				enumerable: true,
				get: function () {
					return type_1.Float64;
				}
			});
			Object.defineProperty(exports, 'Utf8', {
				enumerable: true,
				get: function () {
					return type_1.Utf8;
				}
			});
			Object.defineProperty(exports, 'Binary', {
				enumerable: true,
				get: function () {
					return type_1.Binary;
				}
			});
			Object.defineProperty(exports, 'FixedSizeBinary', {
				enumerable: true,
				get: function () {
					return type_1.FixedSizeBinary;
				}
			});
			Object.defineProperty(exports, 'Date_', {
				enumerable: true,
				get: function () {
					return type_1.Date_;
				}
			});
			Object.defineProperty(exports, 'DateDay', {
				enumerable: true,
				get: function () {
					return type_1.DateDay;
				}
			});
			Object.defineProperty(exports, 'DateMillisecond', {
				enumerable: true,
				get: function () {
					return type_1.DateMillisecond;
				}
			});
			Object.defineProperty(exports, 'Timestamp', {
				enumerable: true,
				get: function () {
					return type_1.Timestamp;
				}
			});
			Object.defineProperty(exports, 'TimestampSecond', {
				enumerable: true,
				get: function () {
					return type_1.TimestampSecond;
				}
			});
			Object.defineProperty(exports, 'TimestampMillisecond', {
				enumerable: true,
				get: function () {
					return type_1.TimestampMillisecond;
				}
			});
			Object.defineProperty(exports, 'TimestampMicrosecond', {
				enumerable: true,
				get: function () {
					return type_1.TimestampMicrosecond;
				}
			});
			Object.defineProperty(exports, 'TimestampNanosecond', {
				enumerable: true,
				get: function () {
					return type_1.TimestampNanosecond;
				}
			});
			Object.defineProperty(exports, 'Time', {
				enumerable: true,
				get: function () {
					return type_1.Time;
				}
			});
			Object.defineProperty(exports, 'TimeSecond', {
				enumerable: true,
				get: function () {
					return type_1.TimeSecond;
				}
			});
			Object.defineProperty(exports, 'TimeMillisecond', {
				enumerable: true,
				get: function () {
					return type_1.TimeMillisecond;
				}
			});
			Object.defineProperty(exports, 'TimeMicrosecond', {
				enumerable: true,
				get: function () {
					return type_1.TimeMicrosecond;
				}
			});
			Object.defineProperty(exports, 'TimeNanosecond', {
				enumerable: true,
				get: function () {
					return type_1.TimeNanosecond;
				}
			});
			Object.defineProperty(exports, 'Decimal', {
				enumerable: true,
				get: function () {
					return type_1.Decimal;
				}
			});
			Object.defineProperty(exports, 'List', {
				enumerable: true,
				get: function () {
					return type_1.List;
				}
			});
			Object.defineProperty(exports, 'Struct', {
				enumerable: true,
				get: function () {
					return type_1.Struct;
				}
			});
			Object.defineProperty(exports, 'Union', {
				enumerable: true,
				get: function () {
					return type_1.Union;
				}
			});
			Object.defineProperty(exports, 'DenseUnion', {
				enumerable: true,
				get: function () {
					return type_1.DenseUnion;
				}
			});
			Object.defineProperty(exports, 'SparseUnion', {
				enumerable: true,
				get: function () {
					return type_1.SparseUnion;
				}
			});
			Object.defineProperty(exports, 'Dictionary', {
				enumerable: true,
				get: function () {
					return type_1.Dictionary;
				}
			});
			Object.defineProperty(exports, 'Interval', {
				enumerable: true,
				get: function () {
					return type_1.Interval;
				}
			});
			Object.defineProperty(exports, 'IntervalDayTime', {
				enumerable: true,
				get: function () {
					return type_1.IntervalDayTime;
				}
			});
			Object.defineProperty(exports, 'IntervalYearMonth', {
				enumerable: true,
				get: function () {
					return type_1.IntervalYearMonth;
				}
			});
			Object.defineProperty(exports, 'FixedSizeList', {
				enumerable: true,
				get: function () {
					return type_1.FixedSizeList;
				}
			});
			Object.defineProperty(exports, 'Map_', {
				enumerable: true,
				get: function () {
					return type_1.Map_;
				}
			});
			var table_1 = require_table();
			Object.defineProperty(exports, 'Table', {
				enumerable: true,
				get: function () {
					return table_1.Table;
				}
			});
			var column_1 = require_column();
			Object.defineProperty(exports, 'Column', {
				enumerable: true,
				get: function () {
					return column_1.Column;
				}
			});
			var visitor_1 = require_visitor();
			Object.defineProperty(exports, 'Visitor', {
				enumerable: true,
				get: function () {
					return visitor_1.Visitor;
				}
			});
			var schema_1 = require_schema();
			Object.defineProperty(exports, 'Schema', {
				enumerable: true,
				get: function () {
					return schema_1.Schema;
				}
			});
			Object.defineProperty(exports, 'Field', {
				enumerable: true,
				get: function () {
					return schema_1.Field;
				}
			});
			var index_1 = require_vector3();
			Object.defineProperty(exports, 'Vector', {
				enumerable: true,
				get: function () {
					return index_1.Vector;
				}
			});
			Object.defineProperty(exports, 'BaseVector', {
				enumerable: true,
				get: function () {
					return index_1.BaseVector;
				}
			});
			Object.defineProperty(exports, 'BinaryVector', {
				enumerable: true,
				get: function () {
					return index_1.BinaryVector;
				}
			});
			Object.defineProperty(exports, 'BoolVector', {
				enumerable: true,
				get: function () {
					return index_1.BoolVector;
				}
			});
			Object.defineProperty(exports, 'Chunked', {
				enumerable: true,
				get: function () {
					return index_1.Chunked;
				}
			});
			Object.defineProperty(exports, 'DateVector', {
				enumerable: true,
				get: function () {
					return index_1.DateVector;
				}
			});
			Object.defineProperty(exports, 'DateDayVector', {
				enumerable: true,
				get: function () {
					return index_1.DateDayVector;
				}
			});
			Object.defineProperty(exports, 'DateMillisecondVector', {
				enumerable: true,
				get: function () {
					return index_1.DateMillisecondVector;
				}
			});
			Object.defineProperty(exports, 'DecimalVector', {
				enumerable: true,
				get: function () {
					return index_1.DecimalVector;
				}
			});
			Object.defineProperty(exports, 'DictionaryVector', {
				enumerable: true,
				get: function () {
					return index_1.DictionaryVector;
				}
			});
			Object.defineProperty(exports, 'FixedSizeBinaryVector', {
				enumerable: true,
				get: function () {
					return index_1.FixedSizeBinaryVector;
				}
			});
			Object.defineProperty(exports, 'FixedSizeListVector', {
				enumerable: true,
				get: function () {
					return index_1.FixedSizeListVector;
				}
			});
			Object.defineProperty(exports, 'FloatVector', {
				enumerable: true,
				get: function () {
					return index_1.FloatVector;
				}
			});
			Object.defineProperty(exports, 'Float16Vector', {
				enumerable: true,
				get: function () {
					return index_1.Float16Vector;
				}
			});
			Object.defineProperty(exports, 'Float32Vector', {
				enumerable: true,
				get: function () {
					return index_1.Float32Vector;
				}
			});
			Object.defineProperty(exports, 'Float64Vector', {
				enumerable: true,
				get: function () {
					return index_1.Float64Vector;
				}
			});
			Object.defineProperty(exports, 'IntervalVector', {
				enumerable: true,
				get: function () {
					return index_1.IntervalVector;
				}
			});
			Object.defineProperty(exports, 'IntervalDayTimeVector', {
				enumerable: true,
				get: function () {
					return index_1.IntervalDayTimeVector;
				}
			});
			Object.defineProperty(exports, 'IntervalYearMonthVector', {
				enumerable: true,
				get: function () {
					return index_1.IntervalYearMonthVector;
				}
			});
			Object.defineProperty(exports, 'IntVector', {
				enumerable: true,
				get: function () {
					return index_1.IntVector;
				}
			});
			Object.defineProperty(exports, 'Int8Vector', {
				enumerable: true,
				get: function () {
					return index_1.Int8Vector;
				}
			});
			Object.defineProperty(exports, 'Int16Vector', {
				enumerable: true,
				get: function () {
					return index_1.Int16Vector;
				}
			});
			Object.defineProperty(exports, 'Int32Vector', {
				enumerable: true,
				get: function () {
					return index_1.Int32Vector;
				}
			});
			Object.defineProperty(exports, 'Int64Vector', {
				enumerable: true,
				get: function () {
					return index_1.Int64Vector;
				}
			});
			Object.defineProperty(exports, 'Uint8Vector', {
				enumerable: true,
				get: function () {
					return index_1.Uint8Vector;
				}
			});
			Object.defineProperty(exports, 'Uint16Vector', {
				enumerable: true,
				get: function () {
					return index_1.Uint16Vector;
				}
			});
			Object.defineProperty(exports, 'Uint32Vector', {
				enumerable: true,
				get: function () {
					return index_1.Uint32Vector;
				}
			});
			Object.defineProperty(exports, 'Uint64Vector', {
				enumerable: true,
				get: function () {
					return index_1.Uint64Vector;
				}
			});
			Object.defineProperty(exports, 'ListVector', {
				enumerable: true,
				get: function () {
					return index_1.ListVector;
				}
			});
			Object.defineProperty(exports, 'MapVector', {
				enumerable: true,
				get: function () {
					return index_1.MapVector;
				}
			});
			Object.defineProperty(exports, 'NullVector', {
				enumerable: true,
				get: function () {
					return index_1.NullVector;
				}
			});
			Object.defineProperty(exports, 'StructVector', {
				enumerable: true,
				get: function () {
					return index_1.StructVector;
				}
			});
			Object.defineProperty(exports, 'TimestampVector', {
				enumerable: true,
				get: function () {
					return index_1.TimestampVector;
				}
			});
			Object.defineProperty(exports, 'TimestampSecondVector', {
				enumerable: true,
				get: function () {
					return index_1.TimestampSecondVector;
				}
			});
			Object.defineProperty(exports, 'TimestampMillisecondVector', {
				enumerable: true,
				get: function () {
					return index_1.TimestampMillisecondVector;
				}
			});
			Object.defineProperty(exports, 'TimestampMicrosecondVector', {
				enumerable: true,
				get: function () {
					return index_1.TimestampMicrosecondVector;
				}
			});
			Object.defineProperty(exports, 'TimestampNanosecondVector', {
				enumerable: true,
				get: function () {
					return index_1.TimestampNanosecondVector;
				}
			});
			Object.defineProperty(exports, 'TimeVector', {
				enumerable: true,
				get: function () {
					return index_1.TimeVector;
				}
			});
			Object.defineProperty(exports, 'TimeSecondVector', {
				enumerable: true,
				get: function () {
					return index_1.TimeSecondVector;
				}
			});
			Object.defineProperty(exports, 'TimeMillisecondVector', {
				enumerable: true,
				get: function () {
					return index_1.TimeMillisecondVector;
				}
			});
			Object.defineProperty(exports, 'TimeMicrosecondVector', {
				enumerable: true,
				get: function () {
					return index_1.TimeMicrosecondVector;
				}
			});
			Object.defineProperty(exports, 'TimeNanosecondVector', {
				enumerable: true,
				get: function () {
					return index_1.TimeNanosecondVector;
				}
			});
			Object.defineProperty(exports, 'UnionVector', {
				enumerable: true,
				get: function () {
					return index_1.UnionVector;
				}
			});
			Object.defineProperty(exports, 'DenseUnionVector', {
				enumerable: true,
				get: function () {
					return index_1.DenseUnionVector;
				}
			});
			Object.defineProperty(exports, 'SparseUnionVector', {
				enumerable: true,
				get: function () {
					return index_1.SparseUnionVector;
				}
			});
			Object.defineProperty(exports, 'Utf8Vector', {
				enumerable: true,
				get: function () {
					return index_1.Utf8Vector;
				}
			});
			var index_2 = require_builder2();
			Object.defineProperty(exports, 'Builder', {
				enumerable: true,
				get: function () {
					return index_2.Builder;
				}
			});
			Object.defineProperty(exports, 'BinaryBuilder', {
				enumerable: true,
				get: function () {
					return index_2.BinaryBuilder;
				}
			});
			Object.defineProperty(exports, 'BoolBuilder', {
				enumerable: true,
				get: function () {
					return index_2.BoolBuilder;
				}
			});
			Object.defineProperty(exports, 'DateBuilder', {
				enumerable: true,
				get: function () {
					return index_2.DateBuilder;
				}
			});
			Object.defineProperty(exports, 'DateDayBuilder', {
				enumerable: true,
				get: function () {
					return index_2.DateDayBuilder;
				}
			});
			Object.defineProperty(exports, 'DateMillisecondBuilder', {
				enumerable: true,
				get: function () {
					return index_2.DateMillisecondBuilder;
				}
			});
			Object.defineProperty(exports, 'DecimalBuilder', {
				enumerable: true,
				get: function () {
					return index_2.DecimalBuilder;
				}
			});
			Object.defineProperty(exports, 'DictionaryBuilder', {
				enumerable: true,
				get: function () {
					return index_2.DictionaryBuilder;
				}
			});
			Object.defineProperty(exports, 'FixedSizeBinaryBuilder', {
				enumerable: true,
				get: function () {
					return index_2.FixedSizeBinaryBuilder;
				}
			});
			Object.defineProperty(exports, 'FixedSizeListBuilder', {
				enumerable: true,
				get: function () {
					return index_2.FixedSizeListBuilder;
				}
			});
			Object.defineProperty(exports, 'FloatBuilder', {
				enumerable: true,
				get: function () {
					return index_2.FloatBuilder;
				}
			});
			Object.defineProperty(exports, 'Float16Builder', {
				enumerable: true,
				get: function () {
					return index_2.Float16Builder;
				}
			});
			Object.defineProperty(exports, 'Float32Builder', {
				enumerable: true,
				get: function () {
					return index_2.Float32Builder;
				}
			});
			Object.defineProperty(exports, 'Float64Builder', {
				enumerable: true,
				get: function () {
					return index_2.Float64Builder;
				}
			});
			Object.defineProperty(exports, 'IntervalBuilder', {
				enumerable: true,
				get: function () {
					return index_2.IntervalBuilder;
				}
			});
			Object.defineProperty(exports, 'IntervalDayTimeBuilder', {
				enumerable: true,
				get: function () {
					return index_2.IntervalDayTimeBuilder;
				}
			});
			Object.defineProperty(exports, 'IntervalYearMonthBuilder', {
				enumerable: true,
				get: function () {
					return index_2.IntervalYearMonthBuilder;
				}
			});
			Object.defineProperty(exports, 'IntBuilder', {
				enumerable: true,
				get: function () {
					return index_2.IntBuilder;
				}
			});
			Object.defineProperty(exports, 'Int8Builder', {
				enumerable: true,
				get: function () {
					return index_2.Int8Builder;
				}
			});
			Object.defineProperty(exports, 'Int16Builder', {
				enumerable: true,
				get: function () {
					return index_2.Int16Builder;
				}
			});
			Object.defineProperty(exports, 'Int32Builder', {
				enumerable: true,
				get: function () {
					return index_2.Int32Builder;
				}
			});
			Object.defineProperty(exports, 'Int64Builder', {
				enumerable: true,
				get: function () {
					return index_2.Int64Builder;
				}
			});
			Object.defineProperty(exports, 'Uint8Builder', {
				enumerable: true,
				get: function () {
					return index_2.Uint8Builder;
				}
			});
			Object.defineProperty(exports, 'Uint16Builder', {
				enumerable: true,
				get: function () {
					return index_2.Uint16Builder;
				}
			});
			Object.defineProperty(exports, 'Uint32Builder', {
				enumerable: true,
				get: function () {
					return index_2.Uint32Builder;
				}
			});
			Object.defineProperty(exports, 'Uint64Builder', {
				enumerable: true,
				get: function () {
					return index_2.Uint64Builder;
				}
			});
			Object.defineProperty(exports, 'ListBuilder', {
				enumerable: true,
				get: function () {
					return index_2.ListBuilder;
				}
			});
			Object.defineProperty(exports, 'MapBuilder', {
				enumerable: true,
				get: function () {
					return index_2.MapBuilder;
				}
			});
			Object.defineProperty(exports, 'NullBuilder', {
				enumerable: true,
				get: function () {
					return index_2.NullBuilder;
				}
			});
			Object.defineProperty(exports, 'StructBuilder', {
				enumerable: true,
				get: function () {
					return index_2.StructBuilder;
				}
			});
			Object.defineProperty(exports, 'TimestampBuilder', {
				enumerable: true,
				get: function () {
					return index_2.TimestampBuilder;
				}
			});
			Object.defineProperty(exports, 'TimestampSecondBuilder', {
				enumerable: true,
				get: function () {
					return index_2.TimestampSecondBuilder;
				}
			});
			Object.defineProperty(exports, 'TimestampMillisecondBuilder', {
				enumerable: true,
				get: function () {
					return index_2.TimestampMillisecondBuilder;
				}
			});
			Object.defineProperty(exports, 'TimestampMicrosecondBuilder', {
				enumerable: true,
				get: function () {
					return index_2.TimestampMicrosecondBuilder;
				}
			});
			Object.defineProperty(exports, 'TimestampNanosecondBuilder', {
				enumerable: true,
				get: function () {
					return index_2.TimestampNanosecondBuilder;
				}
			});
			Object.defineProperty(exports, 'TimeBuilder', {
				enumerable: true,
				get: function () {
					return index_2.TimeBuilder;
				}
			});
			Object.defineProperty(exports, 'TimeSecondBuilder', {
				enumerable: true,
				get: function () {
					return index_2.TimeSecondBuilder;
				}
			});
			Object.defineProperty(exports, 'TimeMillisecondBuilder', {
				enumerable: true,
				get: function () {
					return index_2.TimeMillisecondBuilder;
				}
			});
			Object.defineProperty(exports, 'TimeMicrosecondBuilder', {
				enumerable: true,
				get: function () {
					return index_2.TimeMicrosecondBuilder;
				}
			});
			Object.defineProperty(exports, 'TimeNanosecondBuilder', {
				enumerable: true,
				get: function () {
					return index_2.TimeNanosecondBuilder;
				}
			});
			Object.defineProperty(exports, 'UnionBuilder', {
				enumerable: true,
				get: function () {
					return index_2.UnionBuilder;
				}
			});
			Object.defineProperty(exports, 'DenseUnionBuilder', {
				enumerable: true,
				get: function () {
					return index_2.DenseUnionBuilder;
				}
			});
			Object.defineProperty(exports, 'SparseUnionBuilder', {
				enumerable: true,
				get: function () {
					return index_2.SparseUnionBuilder;
				}
			});
			Object.defineProperty(exports, 'Utf8Builder', {
				enumerable: true,
				get: function () {
					return index_2.Utf8Builder;
				}
			});
			var stream_1 = require_stream();
			Object.defineProperty(exports, 'ByteStream', {
				enumerable: true,
				get: function () {
					return stream_1.ByteStream;
				}
			});
			Object.defineProperty(exports, 'AsyncByteStream', {
				enumerable: true,
				get: function () {
					return stream_1.AsyncByteStream;
				}
			});
			Object.defineProperty(exports, 'AsyncByteQueue', {
				enumerable: true,
				get: function () {
					return stream_1.AsyncByteQueue;
				}
			});
			var reader_1 = require_reader();
			Object.defineProperty(exports, 'RecordBatchReader', {
				enumerable: true,
				get: function () {
					return reader_1.RecordBatchReader;
				}
			});
			Object.defineProperty(exports, 'RecordBatchFileReader', {
				enumerable: true,
				get: function () {
					return reader_1.RecordBatchFileReader;
				}
			});
			Object.defineProperty(exports, 'RecordBatchStreamReader', {
				enumerable: true,
				get: function () {
					return reader_1.RecordBatchStreamReader;
				}
			});
			Object.defineProperty(exports, 'AsyncRecordBatchFileReader', {
				enumerable: true,
				get: function () {
					return reader_1.AsyncRecordBatchFileReader;
				}
			});
			Object.defineProperty(exports, 'AsyncRecordBatchStreamReader', {
				enumerable: true,
				get: function () {
					return reader_1.AsyncRecordBatchStreamReader;
				}
			});
			var writer_1 = require_writer();
			Object.defineProperty(exports, 'RecordBatchWriter', {
				enumerable: true,
				get: function () {
					return writer_1.RecordBatchWriter;
				}
			});
			Object.defineProperty(exports, 'RecordBatchFileWriter', {
				enumerable: true,
				get: function () {
					return writer_1.RecordBatchFileWriter;
				}
			});
			Object.defineProperty(exports, 'RecordBatchStreamWriter', {
				enumerable: true,
				get: function () {
					return writer_1.RecordBatchStreamWriter;
				}
			});
			Object.defineProperty(exports, 'RecordBatchJSONWriter', {
				enumerable: true,
				get: function () {
					return writer_1.RecordBatchJSONWriter;
				}
			});
			var message_1 = require_message2();
			Object.defineProperty(exports, 'MessageReader', {
				enumerable: true,
				get: function () {
					return message_1.MessageReader;
				}
			});
			Object.defineProperty(exports, 'AsyncMessageReader', {
				enumerable: true,
				get: function () {
					return message_1.AsyncMessageReader;
				}
			});
			Object.defineProperty(exports, 'JSONMessageReader', {
				enumerable: true,
				get: function () {
					return message_1.JSONMessageReader;
				}
			});
			var message_2 = require_message();
			Object.defineProperty(exports, 'Message', {
				enumerable: true,
				get: function () {
					return message_2.Message;
				}
			});
			var recordbatch_1 = require_recordbatch2();
			Object.defineProperty(exports, 'RecordBatch', {
				enumerable: true,
				get: function () {
					return recordbatch_1.RecordBatch;
				}
			});
			var dataframe_1 = require_dataframe();
			Object.defineProperty(exports, 'DataFrame', {
				enumerable: true,
				get: function () {
					return dataframe_1.DataFrame;
				}
			});
			Object.defineProperty(exports, 'FilteredDataFrame', {
				enumerable: true,
				get: function () {
					return dataframe_1.FilteredDataFrame;
				}
			});
			Object.defineProperty(exports, 'CountByResult', {
				enumerable: true,
				get: function () {
					return dataframe_1.CountByResult;
				}
			});
			var util_bn_ = require_bn();
			var util_int_ = require_int2();
			var util_bit_ = require_bit();
			var util_math_ = require_math();
			var util_buffer_ = require_buffer();
			var util_vector_ = require_vector2();
			var predicate2 = require_predicate();
			exports.predicate = predicate2;
			var typecomparator_1 = require_typecomparator();
			exports.util = Object.assign(
				Object.assign(
					Object.assign(
						Object.assign(
							Object.assign(Object.assign(Object.assign({}, util_bn_), util_int_), util_bit_),
							util_math_
						),
						util_buffer_
					),
					util_vector_
				),
				{
					compareSchemas: typecomparator_1.compareSchemas,
					compareFields: typecomparator_1.compareFields,
					compareTypes: typecomparator_1.compareTypes
				}
			);
			var args_1 = require_args();
			Object.defineProperty(exports, 'isTypedArray', {
				enumerable: true,
				get: function () {
					return args_1.isTypedArray;
				}
			});
		}
	});

	// (disabled):path
	var require_path = __commonJS({
		'(disabled):path'() {}
	});

	// (disabled):fs
	var require_fs = __commonJS({
		'(disabled):fs'() {}
	});

	// ../../node_modules/web-worker/cjs/browser.js
	var require_browser = __commonJS({
		'../../node_modules/web-worker/cjs/browser.js'(exports, module) {
			module.exports = Worker;
		}
	});

	// ../../node_modules/apache-arrow/Arrow.dom.mjs
	var import_adapters = __toESM(require_adapters(), 1);
	var import_builder = __toESM(require_builder2(), 1);
	var import_reader = __toESM(require_reader(), 1);
	var import_writer = __toESM(require_writer(), 1);
	var import_iterable = __toESM(require_iterable(), 1);
	var import_builder2 = __toESM(require_builder3(), 1);
	var import_reader2 = __toESM(require_reader2(), 1);
	var import_writer2 = __toESM(require_writer2(), 1);
	var import_Arrow = __toESM(require_Arrow(), 1);
	import_adapters.default.toDOMStream = import_iterable.toDOMStream;
	import_builder.Builder['throughDOM'] = import_builder2.builderThroughDOMStream;
	import_reader.RecordBatchReader['throughDOM'] = import_reader2.recordBatchReaderThroughDOMStream;
	import_reader.RecordBatchFileReader['throughDOM'] =
		import_reader2.recordBatchReaderThroughDOMStream;
	import_reader.RecordBatchStreamReader['throughDOM'] =
		import_reader2.recordBatchReaderThroughDOMStream;
	import_writer.RecordBatchWriter['throughDOM'] = import_writer2.recordBatchWriterThroughDOMStream;
	import_writer.RecordBatchFileWriter['throughDOM'] =
		import_writer2.recordBatchWriterThroughDOMStream;
	import_writer.RecordBatchStreamWriter['throughDOM'] =
		import_writer2.recordBatchWriterThroughDOMStream;

	// src/bindings/connection.ts
	var DuckDBConnection = class {
		constructor(bindings, conn) {
			this._bindings = bindings;
			this._conn = conn;
		}
		close() {
			this._bindings.disconnect(this._conn);
		}
		useUnsafe(callback) {
			return callback(this._bindings, this._conn);
		}
		query(text) {
			const buffer = this._bindings.runQuery(this._conn, text);
			const reader = import_Arrow.RecordBatchReader.from(buffer);
			console.assert(reader.isSync());
			console.assert(reader.isFile());
			return import_Arrow.Table.from(reader);
		}
		send(text) {
			const header = this._bindings.sendQuery(this._conn, text);
			const iter = new ResultStreamIterator(this._bindings, this._conn, header);
			const reader = import_Arrow.RecordBatchReader.from(iter);
			console.assert(reader.isSync());
			console.assert(reader.isStream());
			return reader;
		}
		getTableNames(query) {
			return this._bindings.getTableNames(this._conn, query);
		}
		prepare(text) {
			const stmt = this._bindings.createPrepared(this._conn, text);
			return new PreparedStatement(this._bindings, this._conn, stmt);
		}
		insertArrowTable(table, options) {
			const buffer = table.serialize('binary', true);
			this.insertArrowFromIPCStream(buffer, options);
		}
		insertArrowFromIPCStream(buffer, options) {
			this._bindings.insertArrowFromIPCStream(this._conn, buffer, options);
		}
		insertCSVFromPath(path, options) {
			this._bindings.insertCSVFromPath(this._conn, path, options);
		}
		insertJSONFromPath(path, options) {
			this._bindings.insertJSONFromPath(this._conn, path, options);
		}
	};
	var ResultStreamIterator = class {
		constructor(bindings, conn, header) {
			this.bindings = bindings;
			this.conn = conn;
			this.header = header;
			this._first = true;
			this._depleted = false;
		}
		next() {
			if (this._first) {
				this._first = false;
				return { done: false, value: this.header };
			}
			if (this._depleted) {
				return { done: true, value: null };
			}
			const bufferI8 = this.bindings.fetchQueryResults(this.conn);
			this._depleted = bufferI8.length == 0;
			return {
				done: this._depleted,
				value: bufferI8
			};
		}
		[Symbol.iterator]() {
			return this;
		}
	};
	var PreparedStatement = class {
		constructor(bindings, connectionId, statementId) {
			this.bindings = bindings;
			this.connectionId = connectionId;
			this.statementId = statementId;
		}
		close() {
			this.bindings.closePrepared(this.connectionId, this.statementId);
		}
		query(...params) {
			const buffer = this.bindings.runPrepared(this.connectionId, this.statementId, params);
			const reader = import_Arrow.RecordBatchReader.from(buffer);
			console.assert(reader.isSync());
			console.assert(reader.isFile());
			return import_Arrow.Table.from(reader);
		}
		send(...params) {
			const header = this.bindings.sendPrepared(this.connectionId, this.statementId, params);
			const iter = new ResultStreamIterator(this.bindings, this.connectionId, header);
			const reader = import_Arrow.RecordBatchReader.from(iter);
			console.assert(reader.isSync());
			console.assert(reader.isStream());
			return reader;
		}
	};

	// src/status.ts
	var StatusCode = /* @__PURE__ */ ((StatusCode2) => {
		StatusCode2[(StatusCode2['SUCCESS'] = 0)] = 'SUCCESS';
		return StatusCode2;
	})(StatusCode || {});

	// src/bindings/runtime.ts
	function TextDecoderWrapper() {
		const decoder2 = new TextDecoder();
		return (data) => {
			if (typeof SharedArrayBuffer !== 'undefined' && data.buffer instanceof SharedArrayBuffer) {
				data = new Uint8Array(data);
			}
			return decoder2.decode(data);
		};
	}
	var decodeText = TextDecoderWrapper();
	function failWith(mod, msg) {
		mod.ccall('duckdb_web_fail_with', null, ['string'], [msg]);
	}
	function copyBuffer(mod, begin, length) {
		const buffer = mod.HEAPU8.subarray(begin, begin + length);
		const copy = new Uint8Array(new ArrayBuffer(buffer.byteLength));
		copy.set(buffer);
		return copy;
	}
	function readString(mod, begin, length) {
		return decodeText(mod.HEAPU8.subarray(begin, begin + length));
	}
	var DuckDBDataProtocol = /* @__PURE__ */ ((DuckDBDataProtocol2) => {
		DuckDBDataProtocol2[(DuckDBDataProtocol2['BUFFER'] = 0)] = 'BUFFER';
		DuckDBDataProtocol2[(DuckDBDataProtocol2['NATIVE'] = 1)] = 'NATIVE';
		DuckDBDataProtocol2[(DuckDBDataProtocol2['HTTP'] = 3)] = 'HTTP';
		return DuckDBDataProtocol2;
	})(DuckDBDataProtocol || {});
	function callSRet(mod, funcName, argTypes, args) {
		const stackPointer = mod.stackSave();
		const response = mod.stackAlloc(3 * 8);
		argTypes.unshift('number');
		args.unshift(response);
		mod.ccall(funcName, null, argTypes, args);
		const status = mod.HEAPF64[(response >> 3) + 0];
		const data = mod.HEAPF64[(response >> 3) + 1];
		const dataSize = mod.HEAPF64[(response >> 3) + 2];
		mod.stackRestore(stackPointer);
		return [status, data, dataSize];
	}
	function dropResponseBuffers(mod) {
		mod.ccall('duckdb_web_clear_response', null, [], []);
	}

	// src/bindings/file_stats.ts
	var FileStatistics = class {
		constructor(u8array) {
			const f64 = new Float64Array(u8array.buffer, u8array.byteOffset, u8array.byteLength / 8);
			const blocks = new Uint8Array(new ArrayBuffer(u8array.byteLength));
			blocks.set(u8array.subarray(7 * 8));
			this.totalFileReadsCold = f64[0];
			this.totalFileReadsAhead = f64[1];
			this.totalFileReadsCached = f64[2];
			this.totalFileWrites = f64[3];
			this.totalPageAccesses = f64[4];
			this.totalPageLoads = f64[5];
			this.blockSize = f64[6];
			this.blockStats = blocks;
		}
		getBlockStats(index, out) {
			out = out || {
				file_reads_cold: 0,
				file_reads_ahead: 0,
				file_reads_cached: 0,
				file_writes: 0,
				page_accesses: 0,
				page_loads: 0
			};
			out.file_writes = this.blockStats[index * 3 + 0] & 15;
			out.file_reads_cold = this.blockStats[index * 3 + 0] >> 4;
			out.file_reads_ahead = this.blockStats[index * 3 + 1] & 15;
			out.file_reads_cached = this.blockStats[index * 3 + 1] >> 4;
			out.page_accesses = this.blockStats[index * 3 + 1] & 15;
			out.page_loads = this.blockStats[index * 3 + 1] >> 4;
			return out;
		}
	};

	// src/flat_arrow.ts
	function flattenArrowField(name, type) {
		switch (type.typeId) {
			case import_Arrow.Type.Binary:
				return { name, type: 'binary' };
			case import_Arrow.Type.Bool:
				return { name, type: 'bool' };
			case import_Arrow.Type.Date:
				return { name, type: 'date' };
			case import_Arrow.Type.DateDay:
				return { name, type: 'date32[d]' };
			case import_Arrow.Type.DateMillisecond:
				return { name, type: 'date64[ms]' };
			case import_Arrow.Type.Decimal: {
				const dec = type;
				return { name, type: 'decimal', precision: dec.precision, scale: dec.scale };
			}
			case import_Arrow.Type.Float:
				return { name, type: 'float' };
			case import_Arrow.Type.Float16:
				return { name, type: 'float16' };
			case import_Arrow.Type.Float32:
				return { name, type: 'float32' };
			case import_Arrow.Type.Float64:
				return { name, type: 'float64' };
			case import_Arrow.Type.Int:
				return { name, type: 'int32' };
			case import_Arrow.Type.Int16:
				return { name, type: 'int16' };
			case import_Arrow.Type.Int32:
				return { name, type: 'int32' };
			case import_Arrow.Type.Int64:
				return { name, type: 'int64' };
			case import_Arrow.Type.Uint16:
				return { name, type: 'uint16' };
			case import_Arrow.Type.Uint32:
				return { name, type: 'uint32' };
			case import_Arrow.Type.Uint64:
				return { name, type: 'uint64' };
			case import_Arrow.Type.Uint8:
				return { name, type: 'uint8' };
			case import_Arrow.Type.IntervalDayTime:
				return { name, type: 'interval[dt]' };
			case import_Arrow.Type.IntervalYearMonth:
				return { name, type: 'interval[m]' };
			case import_Arrow.Type.List: {
				const list = type;
				return {
					name,
					type: 'list',
					children: [flattenArrowField(list.valueField.name, list.valueField.type)]
				};
			}
			case import_Arrow.Type.FixedSizeBinary: {
				const bin = type;
				return { name, type: 'fixedsizebinary', byteWidth: bin.byteWidth };
			}
			case import_Arrow.Type.Null:
				return { name, type: 'null' };
			case import_Arrow.Type.Utf8:
				return { name, type: 'utf8' };
			case import_Arrow.Type.Struct: {
				const struct_ = type;
				return {
					name,
					type: 'struct',
					children: struct_.children.map((c) => flattenArrowField(c.name, c.type))
				};
			}
			case import_Arrow.Type.Time:
				return { name, type: 'time[s]' };
			case import_Arrow.Type.TimeMicrosecond:
				return { name, type: 'time[us]' };
			case import_Arrow.Type.TimeMillisecond:
				return { name, type: 'time[ms]' };
			case import_Arrow.Type.TimeNanosecond:
				return { name, type: 'time[ns]' };
			case import_Arrow.Type.TimeSecond:
				return { name, type: 'time[s]' };
			case import_Arrow.Type.Timestamp: {
				const ts = type;
				return { name, type: 'timestamp', timezone: ts.timezone || void 0 };
			}
			case import_Arrow.Type.TimestampSecond: {
				const ts = type;
				return { name, type: 'timestamp[s]', timezone: ts.timezone || void 0 };
			}
			case import_Arrow.Type.TimestampMicrosecond: {
				const ts = type;
				return { name, type: 'timestamp[us]', timezone: ts.timezone || void 0 };
			}
			case import_Arrow.Type.TimestampNanosecond: {
				const ts = type;
				return { name, type: 'timestamp[ns]', timezone: ts.timezone || void 0 };
			}
			case import_Arrow.Type.TimestampMillisecond: {
				const ts = type;
				return { name, type: 'timestamp[ms]', timezone: ts.timezone || void 0 };
			}
		}
		throw new Error(`unsupported arrow type: ${type.toString()}`);
	}

	// src/bindings/bindings_base.ts
	var TEXT_ENCODER = new TextEncoder();
	var DuckDBBindingsBase = class {
		constructor(logger, runtime) {
			this._instance = null;
			this._initPromise = null;
			this._initPromiseResolver = () => {};
			this._logger = logger;
			this._runtime = runtime;
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
			if (this._instance != null) {
				return this;
			}
			if (this._initPromise != null) {
				await this._initPromise;
			}
			this._initPromise = new Promise((resolve) => {
				this._initPromiseResolver = resolve;
			});
			this._instance = await this.instantiateImpl({
				print: console.log.bind(console),
				printErr: console.log.bind(console),
				onRuntimeInitialized: this._initPromiseResolver
			});
			await this._initPromise;
			this._initPromise = null;
			return this;
		}
		open(config) {
			const [s, d, n] = callSRet(this.mod, 'duckdb_web_open', ['string'], [JSON.stringify(config)]);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			dropResponseBuffers(this.mod);
		}
		reset() {
			const [s, d, n] = callSRet(this.mod, 'duckdb_web_reset', [], []);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			dropResponseBuffers(this.mod);
		}
		getVersion() {
			const [s, d, n] = callSRet(this.mod, 'duckdb_web_get_version', [], []);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			const version = readString(this.mod, d, n);
			dropResponseBuffers(this.mod);
			return version;
		}
		getFeatureFlags() {
			return this.mod.ccall('duckdb_web_get_feature_flags', 'number', [], []);
		}
		tokenize(text) {
			const [s, d, n] = callSRet(this.mod, 'duckdb_web_tokenize', ['string'], [text]);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			const res = readString(this.mod, d, n);
			dropResponseBuffers(this.mod);
			return JSON.parse(res);
		}
		connect() {
			const conn = this.mod.ccall('duckdb_web_connect', 'number', [], []);
			return new DuckDBConnection(this, conn);
		}
		disconnect(conn) {
			this.mod.ccall('duckdb_web_disconnect', null, ['number'], [conn]);
		}
		runQuery(conn, text) {
			const [s, d, n] = callSRet(
				this.mod,
				'duckdb_web_query_run',
				['number', 'string'],
				[conn, text]
			);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			const res = copyBuffer(this.mod, d, n);
			dropResponseBuffers(this.mod);
			return res;
		}
		sendQuery(conn, text) {
			const [s, d, n] = callSRet(
				this.mod,
				'duckdb_web_query_send',
				['number', 'string'],
				[conn, text]
			);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			const res = copyBuffer(this.mod, d, n);
			dropResponseBuffers(this.mod);
			return res;
		}
		fetchQueryResults(conn) {
			const [s, d, n] = callSRet(this.mod, 'duckdb_web_query_fetch_results', ['number'], [conn]);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			const res = copyBuffer(this.mod, d, n);
			dropResponseBuffers(this.mod);
			return res;
		}
		getTableNames(conn, text) {
			const [s, d, n] = callSRet(
				this.mod,
				'duckdb_web_get_tablenames',
				['number', 'string'],
				[conn, text]
			);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			const res = readString(this.mod, d, n);
			dropResponseBuffers(this.mod);
			return JSON.parse(res);
		}
		createPrepared(conn, text) {
			const [s, d, n] = callSRet(
				this.mod,
				'duckdb_web_prepared_create',
				['number', 'string'],
				[conn, text]
			);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			dropResponseBuffers(this.mod);
			return d;
		}
		closePrepared(conn, statement) {
			const [s, d, n] = callSRet(
				this.mod,
				'duckdb_web_prepared_close',
				['number', 'number'],
				[conn, statement]
			);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			dropResponseBuffers(this.mod);
		}
		runPrepared(conn, statement, params) {
			const [s, d, n] = callSRet(
				this.mod,
				'duckdb_web_prepared_run',
				['number', 'number', 'string'],
				[conn, statement, JSON.stringify(params)]
			);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			const res = copyBuffer(this.mod, d, n);
			dropResponseBuffers(this.mod);
			return res;
		}
		sendPrepared(conn, statement, params) {
			const [s, d, n] = callSRet(
				this.mod,
				'duckdb_web_prepared_send',
				['number', 'number', 'string'],
				[conn, statement, JSON.stringify(params)]
			);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			const res = copyBuffer(this.mod, d, n);
			dropResponseBuffers(this.mod);
			return res;
		}
		insertArrowFromIPCStream(conn, buffer, options) {
			if (buffer.length == 0) return;
			const bufferPtr = this.mod._malloc(buffer.length);
			const bufferOfs = this.mod.HEAPU8.subarray(bufferPtr, bufferPtr + buffer.length);
			bufferOfs.set(buffer);
			const optJSON = options ? JSON.stringify(options) : '';
			const [s, d, n] = callSRet(
				this.mod,
				'duckdb_web_insert_arrow_from_ipc_stream',
				['number', 'number', 'number', 'string'],
				[conn, bufferPtr, buffer.length, optJSON]
			);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
		}
		insertCSVFromPath(conn, path, options) {
			if (options.columns !== void 0) {
				options.columnsFlat = [];
				for (const k in options.columns) {
					options.columnsFlat.push(flattenArrowField(k, options.columns[k]));
				}
			}
			const opt = { ...options };
			opt.columns = opt.columnsFlat;
			delete opt.columnsFlat;
			const optJSON = JSON.stringify(opt);
			const [s, d, n] = callSRet(
				this.mod,
				'duckdb_web_insert_csv_from_path',
				['number', 'string', 'string'],
				[conn, path, optJSON]
			);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
		}
		insertJSONFromPath(conn, path, options) {
			if (options.columns !== void 0) {
				options.columnsFlat = [];
				for (const k in options.columns) {
					options.columnsFlat.push(flattenArrowField(k, options.columns[k]));
				}
			}
			const opt = { ...options };
			opt.columns = opt.columnsFlat;
			delete opt.columnsFlat;
			const optJSON = JSON.stringify(opt);
			const [s, d, n] = callSRet(
				this.mod,
				'duckdb_web_insert_json_from_path',
				['number', 'string', 'string'],
				[conn, path, optJSON]
			);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
		}
		globFiles(path) {
			const [s, d, n] = callSRet(this.mod, 'duckdb_web_fs_glob_file_infos', ['string'], [path]);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			const infoStr = readString(this.mod, d, n);
			dropResponseBuffers(this.mod);
			const info = JSON.parse(infoStr);
			if (info == null) {
				return [];
			}
			return info;
		}
		registerFileURL(name, url) {
			if (url === void 0) {
				url = name;
			}
			const [s, d, n] = callSRet(
				this.mod,
				'duckdb_web_fs_register_file_url',
				['string', 'string'],
				[name, url]
			);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			dropResponseBuffers(this.mod);
		}
		registerFileText(name, text) {
			const buffer = TEXT_ENCODER.encode(text);
			this.registerFileBuffer(name, buffer);
		}
		registerFileBuffer(name, buffer) {
			const ptr = this.mod._malloc(buffer.length);
			const dst = this.mod.HEAPU8.subarray(ptr, ptr + buffer.length);
			dst.set(buffer);
			const [s, d, n] = callSRet(
				this.mod,
				'duckdb_web_fs_register_file_buffer',
				['string', 'number', 'number'],
				[name, ptr, buffer.length]
			);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			dropResponseBuffers(this.mod);
		}
		registerFileHandle(name, handle) {
			const [s, d, n] = callSRet(
				this.mod,
				'duckdb_web_fs_register_file_url',
				['string', 'string'],
				[name, name]
			);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			dropResponseBuffers(this.mod);
			globalThis.DUCKDB_RUNTIME._files = (
				globalThis.DUCKDB_RUNTIME._files || /* @__PURE__ */ new Map()
			).set(name, handle);
			if (this.pthread) {
				for (const worker2 of this.pthread.runningWorkers) {
					worker2.postMessage({
						cmd: 'registerFileHandle',
						fileName: name,
						fileHandle: handle
					});
				}
				for (const worker2 of this.pthread.unusedWorkers) {
					worker2.postMessage({
						cmd: 'dropFileHandle',
						fileName: name
					});
				}
			}
		}
		dropFile(name) {
			return this.mod.ccall('duckdb_web_fs_drop_file', 'boolean', ['string'], [name]);
		}
		dropFiles() {
			const [s, d, n] = callSRet(this.mod, 'duckdb_web_fs_drop_files', [], []);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			dropResponseBuffers(this.mod);
		}
		flushFiles() {
			this.mod.ccall('duckdb_web_flush_files', null, [], []);
		}
		copyFileToPath(name, path) {
			const [s, d, n] = callSRet(
				this.mod,
				'duckdb_web_copy_file_to_path',
				['string', 'string'],
				[name, path]
			);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			dropResponseBuffers(this.mod);
		}
		copyFileToBuffer(name) {
			const [s, d, n] = callSRet(this.mod, 'duckdb_web_copy_file_to_buffer', ['string'], [name]);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			const buffer = this.mod.HEAPU8.subarray(d, d + n);
			const copy = new Uint8Array(buffer.length);
			copy.set(buffer);
			dropResponseBuffers(this.mod);
			return copy;
		}
		collectFileStatistics(file, enable) {
			const [s, d, n] = callSRet(
				this.mod,
				'duckdb_web_collect_file_stats',
				['string', 'boolean'],
				[file, enable]
			);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
		}
		exportFileStatistics(file) {
			const [s, d, n] = callSRet(this.mod, 'duckdb_web_export_file_stats', ['string'], [file]);
			if (s !== StatusCode.SUCCESS) {
				throw new Error(readString(this.mod, d, n));
			}
			return new FileStatistics(this.mod.HEAPU8.subarray(d, d + n));
		}
	};

	// src/bindings/insert_options.ts
	var JSONTableShape = /* @__PURE__ */ ((JSONTableShape2) => {
		JSONTableShape2['ROW_ARRAY'] = 'row-array';
		JSONTableShape2['COLUMN_OBJECT'] = 'column-object';
		return JSONTableShape2;
	})(JSONTableShape || {});

	// src/log.ts
	var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
		LogLevel2[(LogLevel2['NONE'] = 0)] = 'NONE';
		LogLevel2[(LogLevel2['DEBUG'] = 1)] = 'DEBUG';
		LogLevel2[(LogLevel2['INFO'] = 2)] = 'INFO';
		LogLevel2[(LogLevel2['WARNING'] = 3)] = 'WARNING';
		LogLevel2[(LogLevel2['ERROR'] = 4)] = 'ERROR';
		return LogLevel2;
	})(LogLevel || {});
	var LogTopic = /* @__PURE__ */ ((LogTopic2) => {
		LogTopic2[(LogTopic2['NONE'] = 0)] = 'NONE';
		LogTopic2[(LogTopic2['CONNECT'] = 1)] = 'CONNECT';
		LogTopic2[(LogTopic2['DISCONNECT'] = 2)] = 'DISCONNECT';
		LogTopic2[(LogTopic2['OPEN'] = 3)] = 'OPEN';
		LogTopic2[(LogTopic2['QUERY'] = 4)] = 'QUERY';
		return LogTopic2;
	})(LogTopic || {});
	var LogEvent = /* @__PURE__ */ ((LogEvent2) => {
		LogEvent2[(LogEvent2['NONE'] = 0)] = 'NONE';
		LogEvent2[(LogEvent2['OK'] = 1)] = 'OK';
		LogEvent2[(LogEvent2['ERROR'] = 2)] = 'ERROR';
		LogEvent2[(LogEvent2['START'] = 3)] = 'START';
		LogEvent2[(LogEvent2['RUN'] = 4)] = 'RUN';
		LogEvent2[(LogEvent2['CAPTURE'] = 5)] = 'CAPTURE';
		return LogEvent2;
	})(LogEvent || {});
	var LogOrigin = /* @__PURE__ */ ((LogOrigin2) => {
		LogOrigin2[(LogOrigin2['NONE'] = 0)] = 'NONE';
		LogOrigin2[(LogOrigin2['WEB_WORKER'] = 1)] = 'WEB_WORKER';
		LogOrigin2[(LogOrigin2['NODE_WORKER'] = 2)] = 'NODE_WORKER';
		LogOrigin2[(LogOrigin2['BINDINGS'] = 3)] = 'BINDINGS';
		LogOrigin2[(LogOrigin2['ASYNC_DUCKDB'] = 4)] = 'ASYNC_DUCKDB';
		return LogOrigin2;
	})(LogOrigin || {});
	var VoidLogger = class {
		log(_entry) {}
	};

	// ../../node_modules/wasm-feature-detect/dist/esm/index.js
	var bulkMemory = async () =>
		WebAssembly.validate(
			new Uint8Array([
				0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0,
				65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11
			])
		);
	var exceptions = async () =>
		WebAssembly.validate(
			new Uint8Array([
				0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 6, 64, 25, 11,
				11
			])
		);
	var simd = async () =>
		WebAssembly.validate(
			new Uint8Array([
				0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0,
				253, 15, 253, 98, 11
			])
		);
	var threads = () =>
		(async (e) => {
			try {
				return (
					typeof MessageChannel != 'undefined' &&
						new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),
					WebAssembly.validate(e)
				);
			} catch (e2) {
				return false;
			}
		})(
			new Uint8Array([
				0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9,
				0, 65, 0, 254, 16, 2, 0, 26, 11
			])
		);

	// src/platform.ts
	var bigInt64Array = null;
	var wasmExceptions = null;
	var wasmThreads = null;
	var wasmSIMD = null;
	var wasmBulkMemory = null;
	function isNode() {
		return typeof process !== 'undefined' && process.release.name === 'node';
	}
	async function getPlatformFeatures() {
		if (bigInt64Array == null) {
			bigInt64Array = typeof BigInt64Array != 'undefined';
		}
		if (wasmExceptions == null) {
			wasmExceptions = await exceptions();
		}
		if (wasmThreads == null) {
			wasmThreads = await threads();
		}
		if (wasmSIMD == null) {
			wasmSIMD = await simd();
		}
		if (wasmBulkMemory == null) {
			wasmBulkMemory = await bulkMemory();
		}
		return {
			bigInt64Array,
			crossOriginIsolated: isNode() || globalThis.crossOriginIsolated || false,
			wasmExceptions,
			wasmSIMD,
			wasmThreads,
			wasmBulkMemory
		};
	}
	async function selectBundle(bundles) {
		const platform = await getPlatformFeatures();
		if (platform.wasmExceptions && platform.wasmSIMD) {
			if (platform.wasmThreads && platform.crossOriginIsolated && bundles.nextCOI) {
				return {
					mainModule: bundles.nextCOI.mainModule,
					mainWorker: bundles.nextCOI.mainWorker,
					pthreadWorker: bundles.nextCOI.pthreadWorker
				};
			}
			if (bundles.next) {
				return {
					mainModule: bundles.next.mainModule,
					mainWorker: bundles.next.mainWorker,
					pthreadWorker: null
				};
			}
		}
		return {
			mainModule: bundles.mvp.mainModule,
			mainWorker: bundles.mvp.mainWorker,
			pthreadWorker: null
		};
	}

	// src/bindings/runtime_browser.ts
	var BROWSER_RUNTIME = {
		fileInfoCache: /* @__PURE__ */ new Map(),
		getFileInfo(mod, fileId) {
			try {
				const cached = BROWSER_RUNTIME.fileInfoCache.get(fileId);
				if (cached) return cached;
				const [s, d, n] = callSRet(mod, 'duckdb_web_fs_get_file_info_by_id', ['number'], [fileId]);
				if (s !== StatusCode.SUCCESS) {
					return null;
				}
				const infoStr = readString(mod, d, n);
				dropResponseBuffers(mod);
				const info = JSON.parse(infoStr);
				if (info == null) {
					return null;
				}
				const file = { ...info, blob: null };
				BROWSER_RUNTIME.fileInfoCache.set(fileId, file);
				return file;
			} catch (e) {
				return null;
			}
		},
		testPlatformFeature: (_mod, feature) => {
			switch (feature) {
				case 1:
					return typeof BigInt64Array !== 'undefined';
				default:
					console.warn(`test for unknown feature: ${feature}`);
					return false;
			}
		},
		openFile: (mod, fileId) => {
			try {
				BROWSER_RUNTIME.fileInfoCache.delete(fileId);
				const file = BROWSER_RUNTIME.getFileInfo(mod, fileId);
				switch (file?.dataProtocol) {
					case DuckDBDataProtocol.HTTP: {
						let error = null;
						try {
							const xhr = new XMLHttpRequest();
							xhr.open('HEAD', file.dataUrl, false);
							xhr.setRequestHeader('Range', `bytes=0-`);
							xhr.send(null);
							const contentLength = xhr.getResponseHeader('Content-Length');
							if (xhr.status == 206 && contentLength !== null) {
								const result = mod._malloc(2 * 8);
								mod.HEAPF64[(result >> 3) + 0] = +contentLength;
								mod.HEAPF64[(result >> 3) + 1] = 0;
								return result;
							}
						} catch (e) {
							error = e;
							console.warn(`HEAD request with range header failed: ${e}`);
						}
						if (file.allowFullHttpReads) {
							console.warn(`falling back to full HTTP read for: ${file.dataUrl}`);
							const xhr = new XMLHttpRequest();
							xhr.open('GET', file.dataUrl, false);
							xhr.responseType = 'arraybuffer';
							xhr.send(null);
							if (xhr.status == 200) {
								const data = mod._malloc(xhr.response.byteLength);
								const src = new Uint8Array(xhr.response, 0, xhr.response.byteLength);
								mod.HEAPU8.set(src, data);
								const result = mod._malloc(2 * 8);
								mod.HEAPF64[(result >> 3) + 0] = xhr.response.byteLength;
								mod.HEAPF64[(result >> 3) + 1] = data;
								return result;
							}
						}
						if (error != null) {
							throw new Error(`Reading file ${file.fileName} failed with error: ${error}`);
						}
						return 0;
					}
					case DuckDBDataProtocol.NATIVE: {
						const handle = BROWSER_RUNTIME._files?.get(file.fileName);
						if (handle) {
							const result2 = mod._malloc(2 * 8);
							mod.HEAPF64[(result2 >> 3) + 0] = handle.size;
							mod.HEAPF64[(result2 >> 3) + 1] = 0;
							return result2;
						}
						console.warn(`Buffering missing file: ${file.fileName}`);
						const result = mod._malloc(2 * 8);
						const buffer = mod._malloc(1);
						mod.HEAPF64[(result >> 3) + 0] = 1;
						mod.HEAPF64[(result >> 3) + 1] = buffer;
						return result;
					}
				}
			} catch (e) {
				console.error(e.toString());
				failWith(mod, e.toString());
			}
			return 0;
		},
		glob: (mod, pathPtr, pathLen) => {
			try {
				const path = readString(mod, pathPtr, pathLen);
				if (path.startsWith('http')) {
					const xhr = new XMLHttpRequest();
					xhr.open('HEAD', path, false);
					xhr.send(null);
					if (xhr.status != 200 && xhr.status !== 206) {
						failWith(mod, `HEAD request failed: ${path}`);
						return;
					}
					mod.ccall('duckdb_web_fs_glob_add_path', null, ['string'], [path]);
				}
			} catch (e) {
				failWith(mod, e.toString());
				return 0;
			}
		},
		checkFile: (mod, pathPtr, pathLen) => {
			try {
				const path = readString(mod, pathPtr, pathLen);
				if (path.startsWith('http')) {
					const xhr = new XMLHttpRequest();
					xhr.open('HEAD', path, false);
					xhr.setRequestHeader('Range', `bytes=0-`);
					xhr.send(null);
					let supportsRanges = false;
					if (xhr.status == 206) {
						supportsRanges = true;
					} else if (xhr.status == 200) {
						const header = xhr.getResponseHeader('Accept-Ranges');
						supportsRanges = header === 'bytes';
					} else {
						return false;
					}
					if (!supportsRanges) {
						return false;
					}
					return true;
				}
			} catch (e) {
				return false;
			}
			return false;
		},
		syncFile: (_mod, _fileId) => {},
		closeFile: (mod, fileId) => {
			const file = BROWSER_RUNTIME.getFileInfo(mod, fileId);
			BROWSER_RUNTIME.fileInfoCache.delete(fileId);
			switch (file?.dataProtocol) {
				case DuckDBDataProtocol.HTTP:
					break;
				case DuckDBDataProtocol.NATIVE:
					return;
			}
		},
		truncateFile: (mod, fileId, newSize) => {
			const file = BROWSER_RUNTIME.getFileInfo(mod, fileId);
			switch (file?.dataProtocol) {
				case DuckDBDataProtocol.HTTP:
					failWith(mod, `Cannot truncate a http file`);
					return;
				case DuckDBDataProtocol.NATIVE:
					failWith(mod, `truncateFile not implemented`);
					return;
			}
			return 0;
		},
		readFile(mod, fileId, buf, bytes, location) {
			try {
				const file = BROWSER_RUNTIME.getFileInfo(mod, fileId);
				switch (file?.dataProtocol) {
					case DuckDBDataProtocol.HTTP: {
						if (!file.dataUrl) {
							throw new Error(`Missing data URL for file ${fileId}`);
						}
						try {
							const xhr = new XMLHttpRequest();
							xhr.open('GET', file.dataUrl, false);
							xhr.responseType = 'arraybuffer';
							xhr.setRequestHeader('Range', `bytes=${location}-${location + bytes - 1}`);
							xhr.send(null);
							if (
								xhr.status == 206 ||
								(xhr.status == 200 && bytes == xhr.response.byteLength && location == 0)
							) {
								const src = new Uint8Array(
									xhr.response,
									0,
									Math.min(xhr.response.byteLength, bytes)
								);
								mod.HEAPU8.set(src, buf);
								return src.byteLength;
							} else if (xhr.status == 200) {
								throw new Error(
									`Range request for ${file.dataUrl} did not return a partial response: ${xhr.status} "${xhr.statusText}"`
								);
							} else {
								throw new Error(
									`Range request for ${file.dataUrl} did returned non-success status: ${xhr.status} "${xhr.statusText}"`
								);
							}
						} catch (e) {
							throw new Error(`Range request for ${file.dataUrl} failed with error: ${e}"`);
						}
					}
					case DuckDBDataProtocol.NATIVE: {
						const handle = BROWSER_RUNTIME._files?.get(file.fileName);
						if (!handle) {
							throw new Error(`No handle available for file: ${file.fileName}`);
						}
						const sliced = handle.slice(location, location + bytes);
						const data = new Uint8Array(new FileReaderSync().readAsArrayBuffer(sliced));
						mod.HEAPU8.set(data, buf);
						return data.byteLength;
					}
				}
				return 0;
			} catch (e) {
				failWith(mod, e.toString());
				return 0;
			}
		},
		writeFile: (mod, fileId, buf, bytes, location) => {
			const file = BROWSER_RUNTIME.getFileInfo(mod, fileId);
			switch (file?.dataProtocol) {
				case DuckDBDataProtocol.HTTP:
					failWith(mod, 'Cannot write to HTTP file');
					return 0;
				case DuckDBDataProtocol.NATIVE:
					failWith(mod, 'writefile not implemented');
					return 0;
			}
			return 0;
		},
		getLastFileModificationTime: (mod, fileId) => {
			const file = BROWSER_RUNTIME.getFileInfo(mod, fileId);
			switch (file?.dataProtocol) {
				case DuckDBDataProtocol.NATIVE: {
					const handle = BROWSER_RUNTIME._files?.get(file.fileName);
					if (!handle) {
						throw Error(`No handle available for file: ${file.fileName}`);
					}
					return 0;
				}
				case DuckDBDataProtocol.HTTP:
					return new Date().getTime();
			}
			return 0;
		},
		checkDirectory: (mod, pathPtr, pathLen) => {
			const path = readString(mod, pathPtr, pathLen);
			console.log(`checkDirectory: ${path}`);
			return false;
		},
		createDirectory: (mod, pathPtr, pathLen) => {
			const path = readString(mod, pathPtr, pathLen);
			console.log(`createDirectory: ${path}`);
		},
		removeDirectory: (mod, pathPtr, pathLen) => {
			const path = readString(mod, pathPtr, pathLen);
			console.log(`removeDirectory: ${path}`);
		},
		listDirectoryEntries: (mod, pathPtr, pathLen) => {
			const path = readString(mod, pathPtr, pathLen);
			console.log(`listDirectoryEntries: ${path}`);
			return false;
		},
		moveFile: (_mod, _fromPtr, _fromLen, _toPtr, _toLen) => {},
		removeFile: (_mod, _pathPtr, _pathLen) => {}
	};

	// src/bindings/duckdb.js
	var import_meta = {};
	var DuckDB = (function () {
		var _scriptDir = import_meta.url;
		return function (DuckDB5) {
			DuckDB5 = DuckDB5 || {};
			var Module = typeof DuckDB5 !== 'undefined' ? DuckDB5 : {};
			var readyPromiseResolve, readyPromiseReject;
			Module['ready'] = new Promise(function (resolve, reject) {
				readyPromiseResolve = resolve;
				readyPromiseReject = reject;
			});
			var moduleOverrides = {};
			var key;
			for (key in Module) {
				if (Module.hasOwnProperty(key)) {
					moduleOverrides[key] = Module[key];
				}
			}
			var arguments_ = [];
			var thisProgram = './this.program';
			var quit_ = function (status, toThrow) {
				throw toThrow;
			};
			var ENVIRONMENT_IS_WEB = typeof window === 'object';
			var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
			var ENVIRONMENT_IS_NODE =
				typeof process === 'object' &&
				typeof process.versions === 'object' &&
				typeof process.versions.node === 'string';
			var scriptDirectory = '';
			function locateFile(path) {
				if (Module['locateFile']) {
					return Module['locateFile'](path, scriptDirectory);
				}
				return scriptDirectory + path;
			}
			var read_, readAsync, readBinary, setWindowTitle;
			function logExceptionOnExit(e) {
				if (e instanceof ExitStatus) return;
				var toLog = e;
				err('exiting due to exception: ' + toLog);
			}
			var nodeFS;
			var nodePath;
			if (ENVIRONMENT_IS_NODE) {
				if (ENVIRONMENT_IS_WORKER) {
					scriptDirectory = require_path().dirname(scriptDirectory) + '/';
				} else {
					scriptDirectory = __dirname + '/';
				}
				read_ = function shell_read(filename, binary) {
					if (!nodeFS) nodeFS = require_fs();
					if (!nodePath) nodePath = require_path();
					filename = nodePath['normalize'](filename);
					return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
				};
				readBinary = function readBinary2(filename) {
					var ret = read_(filename, true);
					if (!ret.buffer) {
						ret = new Uint8Array(ret);
					}
					assert(ret.buffer);
					return ret;
				};
				readAsync = function readAsync2(filename, onload, onerror) {
					if (!nodeFS) nodeFS = require_fs();
					if (!nodePath) nodePath = require_path();
					filename = nodePath['normalize'](filename);
					nodeFS['readFile'](filename, function (err2, data) {
						if (err2) onerror(err2);
						else onload(data.buffer);
					});
				};
				if (process['argv'].length > 1) {
					thisProgram = process['argv'][1].replace(/\\/g, '/');
				}
				arguments_ = process['argv'].slice(2);
				process['on']('uncaughtException', function (ex) {
					if (!(ex instanceof ExitStatus)) {
						throw ex;
					}
				});
				process['on']('unhandledRejection', function (reason) {
					throw reason;
				});
				quit_ = function (status, toThrow) {
					if (keepRuntimeAlive()) {
						process['exitCode'] = status;
						throw toThrow;
					}
					logExceptionOnExit(toThrow);
					process['exit'](status);
				};
				Module['inspect'] = function () {
					return '[Emscripten Module object]';
				};
			} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
				if (ENVIRONMENT_IS_WORKER) {
					scriptDirectory = self.location.href;
				} else if (typeof document !== 'undefined' && document.currentScript) {
					scriptDirectory = document.currentScript.src;
				}
				if (_scriptDir) {
					scriptDirectory = _scriptDir;
				}
				if (scriptDirectory.indexOf('blob:') !== 0) {
					scriptDirectory = scriptDirectory.substr(
						0,
						scriptDirectory.replace(/[?#].*/, '').lastIndexOf('/') + 1
					);
				} else {
					scriptDirectory = '';
				}
				{
					read_ = function (url) {
						var xhr = new XMLHttpRequest();
						xhr.open('GET', url, false);
						xhr.send(null);
						return xhr.responseText;
					};
					if (ENVIRONMENT_IS_WORKER) {
						readBinary = function (url) {
							var xhr = new XMLHttpRequest();
							xhr.open('GET', url, false);
							xhr.responseType = 'arraybuffer';
							xhr.send(null);
							return new Uint8Array(xhr.response);
						};
					}
					readAsync = function (url, onload, onerror) {
						var xhr = new XMLHttpRequest();
						xhr.open('GET', url, true);
						xhr.responseType = 'arraybuffer';
						xhr.onload = function () {
							if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
								onload(xhr.response);
								return;
							}
							onerror();
						};
						xhr.onerror = onerror;
						xhr.send(null);
					};
				}
				setWindowTitle = function (title) {
					document.title = title;
				};
			} else {
			}
			var out = Module['print'] || console.log.bind(console);
			var err = Module['printErr'] || console.warn.bind(console);
			for (key in moduleOverrides) {
				if (moduleOverrides.hasOwnProperty(key)) {
					Module[key] = moduleOverrides[key];
				}
			}
			moduleOverrides = null;
			if (Module['arguments']) arguments_ = Module['arguments'];
			if (Module['thisProgram']) thisProgram = Module['thisProgram'];
			if (Module['quit']) quit_ = Module['quit'];
			var tempRet0 = 0;
			var setTempRet0 = function (value) {
				tempRet0 = value;
			};
			var getTempRet0 = function () {
				return tempRet0;
			};
			var wasmBinary;
			if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
			var noExitRuntime = Module['noExitRuntime'] || true;
			if (typeof WebAssembly !== 'object') {
				abort('no native wasm support detected');
			}
			var wasmMemory;
			var ABORT = false;
			var EXITSTATUS;
			function assert(condition, text) {
				if (!condition) {
					abort('Assertion failed: ' + text);
				}
			}
			function getCFunc(ident) {
				var func = Module['_' + ident];
				assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
				return func;
			}
			function ccall(ident, returnType, argTypes, args, opts) {
				var toC = {
					string: function (str) {
						var ret2 = 0;
						if (str !== null && str !== void 0 && str !== 0) {
							var len = (str.length << 2) + 1;
							ret2 = stackAlloc(len);
							stringToUTF8(str, ret2, len);
						}
						return ret2;
					},
					array: function (arr) {
						var ret2 = stackAlloc(arr.length);
						writeArrayToMemory(arr, ret2);
						return ret2;
					}
				};
				function convertReturnValue(ret2) {
					if (returnType === 'string') return UTF8ToString(ret2);
					if (returnType === 'boolean') return Boolean(ret2);
					return ret2;
				}
				var func = getCFunc(ident);
				var cArgs = [];
				var stack = 0;
				if (args) {
					for (var i = 0; i < args.length; i++) {
						var converter = toC[argTypes[i]];
						if (converter) {
							if (stack === 0) stack = stackSave();
							cArgs[i] = converter(args[i]);
						} else {
							cArgs[i] = args[i];
						}
					}
				}
				var ret = func.apply(null, cArgs);
				function onDone(ret2) {
					if (stack !== 0) stackRestore(stack);
					return convertReturnValue(ret2);
				}
				ret = onDone(ret);
				return ret;
			}
			var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : void 0;
			function UTF8ArrayToString(heap, idx, maxBytesToRead) {
				var endIdx = idx + maxBytesToRead;
				var endPtr = idx;
				while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;
				if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
					return UTF8Decoder.decode(heap.subarray(idx, endPtr));
				} else {
					var str = '';
					while (idx < endPtr) {
						var u0 = heap[idx++];
						if (!(u0 & 128)) {
							str += String.fromCharCode(u0);
							continue;
						}
						var u1 = heap[idx++] & 63;
						if ((u0 & 224) == 192) {
							str += String.fromCharCode(((u0 & 31) << 6) | u1);
							continue;
						}
						var u2 = heap[idx++] & 63;
						if ((u0 & 240) == 224) {
							u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
						} else {
							u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
						}
						if (u0 < 65536) {
							str += String.fromCharCode(u0);
						} else {
							var ch = u0 - 65536;
							str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
						}
					}
				}
				return str;
			}
			function UTF8ToString(ptr, maxBytesToRead) {
				return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
			}
			function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
				if (!(maxBytesToWrite > 0)) return 0;
				var startIdx = outIdx;
				var endIdx = outIdx + maxBytesToWrite - 1;
				for (var i = 0; i < str.length; ++i) {
					var u = str.charCodeAt(i);
					if (u >= 55296 && u <= 57343) {
						var u1 = str.charCodeAt(++i);
						u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
					}
					if (u <= 127) {
						if (outIdx >= endIdx) break;
						heap[outIdx++] = u;
					} else if (u <= 2047) {
						if (outIdx + 1 >= endIdx) break;
						heap[outIdx++] = 192 | (u >> 6);
						heap[outIdx++] = 128 | (u & 63);
					} else if (u <= 65535) {
						if (outIdx + 2 >= endIdx) break;
						heap[outIdx++] = 224 | (u >> 12);
						heap[outIdx++] = 128 | ((u >> 6) & 63);
						heap[outIdx++] = 128 | (u & 63);
					} else {
						if (outIdx + 3 >= endIdx) break;
						heap[outIdx++] = 240 | (u >> 18);
						heap[outIdx++] = 128 | ((u >> 12) & 63);
						heap[outIdx++] = 128 | ((u >> 6) & 63);
						heap[outIdx++] = 128 | (u & 63);
					}
				}
				heap[outIdx] = 0;
				return outIdx - startIdx;
			}
			function stringToUTF8(str, outPtr, maxBytesToWrite) {
				return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
			}
			function lengthBytesUTF8(str) {
				var len = 0;
				for (var i = 0; i < str.length; ++i) {
					var u = str.charCodeAt(i);
					if (u >= 55296 && u <= 57343)
						u = (65536 + ((u & 1023) << 10)) | (str.charCodeAt(++i) & 1023);
					if (u <= 127) ++len;
					else if (u <= 2047) len += 2;
					else if (u <= 65535) len += 3;
					else len += 4;
				}
				return len;
			}
			function writeArrayToMemory(array, buffer2) {
				HEAP8.set(array, buffer2);
			}
			function writeAsciiToMemory(str, buffer2, dontAddNull) {
				for (var i = 0; i < str.length; ++i) {
					HEAP8[buffer2++ >> 0] = str.charCodeAt(i);
				}
				if (!dontAddNull) HEAP8[buffer2 >> 0] = 0;
			}
			function alignUp(x, multiple) {
				if (x % multiple > 0) {
					x += multiple - (x % multiple);
				}
				return x;
			}
			var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
			function updateGlobalBufferAndViews(buf) {
				buffer = buf;
				Module['HEAP8'] = HEAP8 = new Int8Array(buf);
				Module['HEAP16'] = HEAP16 = new Int16Array(buf);
				Module['HEAP32'] = HEAP32 = new Int32Array(buf);
				Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
				Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
				Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
				Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
				Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
			}
			var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;
			var wasmTable;
			var __ATPRERUN__ = [];
			var __ATINIT__ = [];
			var __ATMAIN__ = [];
			var __ATPOSTRUN__ = [];
			var runtimeInitialized = false;
			var runtimeExited = false;
			var runtimeKeepaliveCounter = 0;
			function keepRuntimeAlive() {
				return noExitRuntime || runtimeKeepaliveCounter > 0;
			}
			function preRun() {
				if (Module['preRun']) {
					if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
					while (Module['preRun'].length) {
						addOnPreRun(Module['preRun'].shift());
					}
				}
				callRuntimeCallbacks(__ATPRERUN__);
			}
			function initRuntime() {
				runtimeInitialized = true;
				callRuntimeCallbacks(__ATINIT__);
			}
			function preMain() {
				callRuntimeCallbacks(__ATMAIN__);
			}
			function exitRuntime() {
				runtimeExited = true;
			}
			function postRun() {
				if (Module['postRun']) {
					if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
					while (Module['postRun'].length) {
						addOnPostRun(Module['postRun'].shift());
					}
				}
				callRuntimeCallbacks(__ATPOSTRUN__);
			}
			function addOnPreRun(cb) {
				__ATPRERUN__.unshift(cb);
			}
			function addOnInit(cb) {
				__ATINIT__.unshift(cb);
			}
			function addOnPostRun(cb) {
				__ATPOSTRUN__.unshift(cb);
			}
			var runDependencies = 0;
			var runDependencyWatcher = null;
			var dependenciesFulfilled = null;
			function addRunDependency(id) {
				runDependencies++;
				if (Module['monitorRunDependencies']) {
					Module['monitorRunDependencies'](runDependencies);
				}
			}
			function removeRunDependency(id) {
				runDependencies--;
				if (Module['monitorRunDependencies']) {
					Module['monitorRunDependencies'](runDependencies);
				}
				if (runDependencies == 0) {
					if (runDependencyWatcher !== null) {
						clearInterval(runDependencyWatcher);
						runDependencyWatcher = null;
					}
					if (dependenciesFulfilled) {
						var callback = dependenciesFulfilled;
						dependenciesFulfilled = null;
						callback();
					}
				}
			}
			Module['preloadedImages'] = {};
			Module['preloadedAudios'] = {};
			function abort(what) {
				{
					if (Module['onAbort']) {
						Module['onAbort'](what);
					}
				}
				what = 'Aborted(' + what + ')';
				err(what);
				ABORT = true;
				EXITSTATUS = 1;
				what += '. Build with -s ASSERTIONS=1 for more info.';
				var e = new WebAssembly.RuntimeError(what);
				readyPromiseReject(e);
				throw e;
			}
			var dataURIPrefix = 'data:application/octet-stream;base64,';
			function isDataURI(filename) {
				return filename.startsWith(dataURIPrefix);
			}
			var wasmBinaryFile;
			if (Module['locateFile']) {
				wasmBinaryFile = './duckdb-wasm.wasm';
				if (!isDataURI(wasmBinaryFile)) {
					wasmBinaryFile = locateFile(wasmBinaryFile);
				}
			} else {
				wasmBinaryFile = new URL('duckdb_wasm.wasm', import_meta.url).toString();
			}
			function getBinary(file) {
				try {
					if (file == wasmBinaryFile && wasmBinary) {
						return new Uint8Array(wasmBinary);
					}
					if (readBinary) {
						return readBinary(file);
					} else {
						throw 'both async and sync fetching of the wasm failed';
					}
				} catch (err2) {
					abort(err2);
				}
			}
			function getBinaryPromise() {
				if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
					if (typeof fetch === 'function') {
						return fetch(wasmBinaryFile, { credentials: 'same-origin' })
							.then(function (response) {
								if (!response['ok']) {
									throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
								}
								return response['arrayBuffer']();
							})
							.catch(function () {
								return getBinary(wasmBinaryFile);
							});
					}
				}
				return Promise.resolve().then(function () {
					return getBinary(wasmBinaryFile);
				});
			}
			function createWasm() {
				var info = { a: asmLibraryArg };
				function receiveInstance(instance, module) {
					var exports2 = instance.exports;
					Module['asm'] = exports2;
					wasmMemory = Module['asm']['Oe'];
					updateGlobalBufferAndViews(wasmMemory.buffer);
					wasmTable = Module['asm']['Re'];
					addOnInit(Module['asm']['Pe']);
					removeRunDependency('wasm-instantiate');
				}
				addRunDependency('wasm-instantiate');
				function receiveInstantiationResult(result) {
					receiveInstance(result['instance']);
				}
				function instantiateArrayBuffer(receiver) {
					return getBinaryPromise()
						.then(function (binary) {
							return WebAssembly.instantiate(binary, info);
						})
						.then(function (instance) {
							return instance;
						})
						.then(receiver, function (reason) {
							err('failed to asynchronously prepare wasm: ' + reason);
							abort(reason);
						});
				}
				function instantiateAsync() {
					if (
						!wasmBinary &&
						typeof WebAssembly.instantiateStreaming === 'function' &&
						!isDataURI(wasmBinaryFile) &&
						typeof fetch === 'function'
					) {
						return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
							var result = WebAssembly.instantiateStreaming(response, info);
							return result.then(receiveInstantiationResult, function (reason) {
								err('wasm streaming compile failed: ' + reason);
								err('falling back to ArrayBuffer instantiation');
								return instantiateArrayBuffer(receiveInstantiationResult);
							});
						});
					} else {
						return instantiateArrayBuffer(receiveInstantiationResult);
					}
				}
				if (Module['instantiateWasm']) {
					try {
						var exports = Module['instantiateWasm'](info, receiveInstance);
						return exports;
					} catch (e) {
						err('Module.instantiateWasm callback failed with error: ' + e);
						return false;
					}
				}
				instantiateAsync().catch(readyPromiseReject);
				return {};
			}
			function callRuntimeCallbacks(callbacks) {
				while (callbacks.length > 0) {
					var callback = callbacks.shift();
					if (typeof callback == 'function') {
						callback(Module);
						continue;
					}
					var func = callback.func;
					if (typeof func === 'number') {
						if (callback.arg === void 0) {
							wasmTable.get(func)();
						} else {
							wasmTable.get(func)(callback.arg);
						}
					} else {
						func(callback.arg === void 0 ? null : callback.arg);
					}
				}
			}
			function handleException(e) {
				if (e instanceof ExitStatus || e == 'unwind') {
					return EXITSTATUS;
				}
				quit_(1, e);
			}
			function ___cxa_allocate_exception(size) {
				return _malloc(size + 16) + 16;
			}
			function ExceptionInfo(excPtr) {
				this.excPtr = excPtr;
				this.ptr = excPtr - 16;
				this.set_type = function (type) {
					HEAP32[(this.ptr + 4) >> 2] = type;
				};
				this.get_type = function () {
					return HEAP32[(this.ptr + 4) >> 2];
				};
				this.set_destructor = function (destructor) {
					HEAP32[(this.ptr + 8) >> 2] = destructor;
				};
				this.get_destructor = function () {
					return HEAP32[(this.ptr + 8) >> 2];
				};
				this.set_refcount = function (refcount) {
					HEAP32[this.ptr >> 2] = refcount;
				};
				this.set_caught = function (caught) {
					caught = caught ? 1 : 0;
					HEAP8[(this.ptr + 12) >> 0] = caught;
				};
				this.get_caught = function () {
					return HEAP8[(this.ptr + 12) >> 0] != 0;
				};
				this.set_rethrown = function (rethrown) {
					rethrown = rethrown ? 1 : 0;
					HEAP8[(this.ptr + 13) >> 0] = rethrown;
				};
				this.get_rethrown = function () {
					return HEAP8[(this.ptr + 13) >> 0] != 0;
				};
				this.init = function (type, destructor) {
					this.set_type(type);
					this.set_destructor(destructor);
					this.set_refcount(0);
					this.set_caught(false);
					this.set_rethrown(false);
				};
				this.add_ref = function () {
					var value = HEAP32[this.ptr >> 2];
					HEAP32[this.ptr >> 2] = value + 1;
				};
				this.release_ref = function () {
					var prev = HEAP32[this.ptr >> 2];
					HEAP32[this.ptr >> 2] = prev - 1;
					return prev === 1;
				};
			}
			function CatchInfo(ptr) {
				this.free = function () {
					_free(this.ptr);
					this.ptr = 0;
				};
				this.set_base_ptr = function (basePtr) {
					HEAP32[this.ptr >> 2] = basePtr;
				};
				this.get_base_ptr = function () {
					return HEAP32[this.ptr >> 2];
				};
				this.set_adjusted_ptr = function (adjustedPtr) {
					HEAP32[(this.ptr + 4) >> 2] = adjustedPtr;
				};
				this.get_adjusted_ptr_addr = function () {
					return this.ptr + 4;
				};
				this.get_adjusted_ptr = function () {
					return HEAP32[(this.ptr + 4) >> 2];
				};
				this.get_exception_ptr = function () {
					var isPointer = ___cxa_is_pointer_type(this.get_exception_info().get_type());
					if (isPointer) {
						return HEAP32[this.get_base_ptr() >> 2];
					}
					var adjusted = this.get_adjusted_ptr();
					if (adjusted !== 0) return adjusted;
					return this.get_base_ptr();
				};
				this.get_exception_info = function () {
					return new ExceptionInfo(this.get_base_ptr());
				};
				if (ptr === void 0) {
					this.ptr = _malloc(8);
					this.set_adjusted_ptr(0);
				} else {
					this.ptr = ptr;
				}
			}
			var exceptionCaught = [];
			function exception_addRef(info) {
				info.add_ref();
			}
			var uncaughtExceptionCount = 0;
			function ___cxa_begin_catch(ptr) {
				var catchInfo = new CatchInfo(ptr);
				var info = catchInfo.get_exception_info();
				if (!info.get_caught()) {
					info.set_caught(true);
					uncaughtExceptionCount--;
				}
				info.set_rethrown(false);
				exceptionCaught.push(catchInfo);
				exception_addRef(info);
				return catchInfo.get_exception_ptr();
			}
			var exceptionLast = 0;
			function ___cxa_free_exception(ptr) {
				return _free(new ExceptionInfo(ptr).ptr);
			}
			function exception_decRef(info) {
				if (info.release_ref() && !info.get_rethrown()) {
					var destructor = info.get_destructor();
					if (destructor) {
						wasmTable.get(destructor)(info.excPtr);
					}
					___cxa_free_exception(info.excPtr);
				}
			}
			function ___cxa_end_catch() {
				_setThrew(0);
				var catchInfo = exceptionCaught.pop();
				exception_decRef(catchInfo.get_exception_info());
				catchInfo.free();
				exceptionLast = 0;
			}
			function ___resumeException(catchInfoPtr) {
				var catchInfo = new CatchInfo(catchInfoPtr);
				var ptr = catchInfo.get_base_ptr();
				if (!exceptionLast) {
					exceptionLast = ptr;
				}
				catchInfo.free();
				throw ptr;
			}
			function ___cxa_find_matching_catch_2() {
				var thrown = exceptionLast;
				if (!thrown) {
					setTempRet0(0);
					return 0 | 0;
				}
				var info = new ExceptionInfo(thrown);
				var thrownType = info.get_type();
				var catchInfo = new CatchInfo();
				catchInfo.set_base_ptr(thrown);
				catchInfo.set_adjusted_ptr(thrown);
				if (!thrownType) {
					setTempRet0(0);
					return catchInfo.ptr | 0;
				}
				var typeArray = Array.prototype.slice.call(arguments);
				for (var i = 0; i < typeArray.length; i++) {
					var caughtType = typeArray[i];
					if (caughtType === 0 || caughtType === thrownType) {
						break;
					}
					if (___cxa_can_catch(caughtType, thrownType, catchInfo.get_adjusted_ptr_addr())) {
						setTempRet0(caughtType);
						return catchInfo.ptr | 0;
					}
				}
				setTempRet0(thrownType);
				return catchInfo.ptr | 0;
			}
			function ___cxa_find_matching_catch_3() {
				var thrown = exceptionLast;
				if (!thrown) {
					setTempRet0(0);
					return 0 | 0;
				}
				var info = new ExceptionInfo(thrown);
				var thrownType = info.get_type();
				var catchInfo = new CatchInfo();
				catchInfo.set_base_ptr(thrown);
				catchInfo.set_adjusted_ptr(thrown);
				if (!thrownType) {
					setTempRet0(0);
					return catchInfo.ptr | 0;
				}
				var typeArray = Array.prototype.slice.call(arguments);
				for (var i = 0; i < typeArray.length; i++) {
					var caughtType = typeArray[i];
					if (caughtType === 0 || caughtType === thrownType) {
						break;
					}
					if (___cxa_can_catch(caughtType, thrownType, catchInfo.get_adjusted_ptr_addr())) {
						setTempRet0(caughtType);
						return catchInfo.ptr | 0;
					}
				}
				setTempRet0(thrownType);
				return catchInfo.ptr | 0;
			}
			function ___cxa_find_matching_catch_4() {
				var thrown = exceptionLast;
				if (!thrown) {
					setTempRet0(0);
					return 0 | 0;
				}
				var info = new ExceptionInfo(thrown);
				var thrownType = info.get_type();
				var catchInfo = new CatchInfo();
				catchInfo.set_base_ptr(thrown);
				catchInfo.set_adjusted_ptr(thrown);
				if (!thrownType) {
					setTempRet0(0);
					return catchInfo.ptr | 0;
				}
				var typeArray = Array.prototype.slice.call(arguments);
				for (var i = 0; i < typeArray.length; i++) {
					var caughtType = typeArray[i];
					if (caughtType === 0 || caughtType === thrownType) {
						break;
					}
					if (___cxa_can_catch(caughtType, thrownType, catchInfo.get_adjusted_ptr_addr())) {
						setTempRet0(caughtType);
						return catchInfo.ptr | 0;
					}
				}
				setTempRet0(thrownType);
				return catchInfo.ptr | 0;
			}
			function ___cxa_find_matching_catch_5() {
				var thrown = exceptionLast;
				if (!thrown) {
					setTempRet0(0);
					return 0 | 0;
				}
				var info = new ExceptionInfo(thrown);
				var thrownType = info.get_type();
				var catchInfo = new CatchInfo();
				catchInfo.set_base_ptr(thrown);
				catchInfo.set_adjusted_ptr(thrown);
				if (!thrownType) {
					setTempRet0(0);
					return catchInfo.ptr | 0;
				}
				var typeArray = Array.prototype.slice.call(arguments);
				for (var i = 0; i < typeArray.length; i++) {
					var caughtType = typeArray[i];
					if (caughtType === 0 || caughtType === thrownType) {
						break;
					}
					if (___cxa_can_catch(caughtType, thrownType, catchInfo.get_adjusted_ptr_addr())) {
						setTempRet0(caughtType);
						return catchInfo.ptr | 0;
					}
				}
				setTempRet0(thrownType);
				return catchInfo.ptr | 0;
			}
			function ___cxa_rethrow() {
				var catchInfo = exceptionCaught.pop();
				if (!catchInfo) {
					abort('no exception to throw');
				}
				var info = catchInfo.get_exception_info();
				var ptr = catchInfo.get_base_ptr();
				if (!info.get_rethrown()) {
					exceptionCaught.push(catchInfo);
					info.set_rethrown(true);
					info.set_caught(false);
					uncaughtExceptionCount++;
				} else {
					catchInfo.free();
				}
				exceptionLast = ptr;
				throw ptr;
			}
			function ___cxa_throw(ptr, type, destructor) {
				var info = new ExceptionInfo(ptr);
				info.init(type, destructor);
				exceptionLast = ptr;
				uncaughtExceptionCount++;
				throw ptr;
			}
			function ___cxa_uncaught_exceptions() {
				return uncaughtExceptionCount;
			}
			var SYSCALLS = {
				mappings: {},
				buffers: [null, [], []],
				printChar: function (stream, curr) {
					var buffer2 = SYSCALLS.buffers[stream];
					if (curr === 0 || curr === 10) {
						(stream === 1 ? out : err)(UTF8ArrayToString(buffer2, 0));
						buffer2.length = 0;
					} else {
						buffer2.push(curr);
					}
				},
				varargs: void 0,
				get: function () {
					SYSCALLS.varargs += 4;
					var ret = HEAP32[(SYSCALLS.varargs - 4) >> 2];
					return ret;
				},
				getStr: function (ptr) {
					var ret = UTF8ToString(ptr);
					return ret;
				},
				get64: function (low, high) {
					return low;
				}
			};
			function ___sys__newselect(nfds, readfds, writefds, exceptfds, timeout) {}
			function ___sys_access(path, amode) {
				path = SYSCALLS.getStr(path);
				return SYSCALLS.doAccess(path, amode);
			}
			function SOCKFS() {
				err('missing function: $SOCKFS');
				abort(-1);
			}
			function FS() {
				err('missing function: $FS');
				abort(-1);
			}
			function getSocketFromFD(fd) {
				var socket = SOCKFS.getSocket(fd);
				if (!socket) throw new FS.ErrnoError(8);
				return socket;
			}
			function setErrNo(value) {
				HEAP32[___errno_location() >> 2] = value;
				return value;
			}
			function inetNtop4(addr) {
				return (
					(addr & 255) +
					'.' +
					((addr >> 8) & 255) +
					'.' +
					((addr >> 16) & 255) +
					'.' +
					((addr >> 24) & 255)
				);
			}
			function inetNtop6(ints) {
				var str = '';
				var word = 0;
				var longest = 0;
				var lastzero = 0;
				var zstart = 0;
				var len = 0;
				var i = 0;
				var parts = [
					ints[0] & 65535,
					ints[0] >> 16,
					ints[1] & 65535,
					ints[1] >> 16,
					ints[2] & 65535,
					ints[2] >> 16,
					ints[3] & 65535,
					ints[3] >> 16
				];
				var hasipv4 = true;
				var v4part = '';
				for (i = 0; i < 5; i++) {
					if (parts[i] !== 0) {
						hasipv4 = false;
						break;
					}
				}
				if (hasipv4) {
					v4part = inetNtop4(parts[6] | (parts[7] << 16));
					if (parts[5] === -1) {
						str = '::ffff:';
						str += v4part;
						return str;
					}
					if (parts[5] === 0) {
						str = '::';
						if (v4part === '0.0.0.0') v4part = '';
						if (v4part === '0.0.0.1') v4part = '1';
						str += v4part;
						return str;
					}
				}
				for (word = 0; word < 8; word++) {
					if (parts[word] === 0) {
						if (word - lastzero > 1) {
							len = 0;
						}
						lastzero = word;
						len++;
					}
					if (len > longest) {
						longest = len;
						zstart = word - longest + 1;
					}
				}
				for (word = 0; word < 8; word++) {
					if (longest > 1) {
						if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
							if (word === zstart) {
								str += ':';
								if (zstart === 0) str += ':';
							}
							continue;
						}
					}
					str += Number(_ntohs(parts[word] & 65535)).toString(16);
					str += word < 7 ? ':' : '';
				}
				return str;
			}
			function readSockaddr(sa, salen) {
				var family = HEAP16[sa >> 1];
				var port = _ntohs(HEAPU16[(sa + 2) >> 1]);
				var addr;
				switch (family) {
					case 2:
						if (salen !== 16) {
							return { errno: 28 };
						}
						addr = HEAP32[(sa + 4) >> 2];
						addr = inetNtop4(addr);
						break;
					case 10:
						if (salen !== 28) {
							return { errno: 28 };
						}
						addr = [
							HEAP32[(sa + 8) >> 2],
							HEAP32[(sa + 12) >> 2],
							HEAP32[(sa + 16) >> 2],
							HEAP32[(sa + 20) >> 2]
						];
						addr = inetNtop6(addr);
						break;
					default:
						return { errno: 5 };
				}
				return { family, addr, port };
			}
			function getSocketAddress(addrp, addrlen, allowNull) {
				if (allowNull && addrp === 0) return null;
				var info = readSockaddr(addrp, addrlen);
				if (info.errno) throw new FS.ErrnoError(info.errno);
				info.addr = DNS.lookup_addr(info.addr) || info.addr;
				return info;
			}
			function ___sys_bind(fd, addr, addrlen) {
				var sock = getSocketFromFD(fd);
				var info = getSocketAddress(addr, addrlen);
				sock.sock_ops.bind(sock, info.addr, info.port);
				return 0;
			}
			function ___sys_connect(fd, addr, addrlen) {
				var sock = getSocketFromFD(fd);
				var info = getSocketAddress(addr, addrlen);
				sock.sock_ops.connect(sock, info.addr, info.port);
				return 0;
			}
			function ___sys_fcntl64(fd, cmd, varargs) {
				SYSCALLS.varargs = varargs;
				return 0;
			}
			function ___sys_fstat64(fd, buf) {}
			function ___sys_ftruncate64(fd, zero, low, high) {}
			function ___sys_getdents64(fd, dirp, count) {}
			function inetPton4(str) {
				var b = str.split('.');
				for (var i = 0; i < 4; i++) {
					var tmp = Number(b[i]);
					if (isNaN(tmp)) return null;
					b[i] = tmp;
				}
				return (b[0] | (b[1] << 8) | (b[2] << 16) | (b[3] << 24)) >>> 0;
			}
			function jstoi_q(str) {
				return parseInt(str);
			}
			function inetPton6(str) {
				var words;
				var w, offset, z;
				var valid6regx =
					/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
				var parts = [];
				if (!valid6regx.test(str)) {
					return null;
				}
				if (str === '::') {
					return [0, 0, 0, 0, 0, 0, 0, 0];
				}
				if (str.startsWith('::')) {
					str = str.replace('::', 'Z:');
				} else {
					str = str.replace('::', ':Z:');
				}
				if (str.indexOf('.') > 0) {
					str = str.replace(new RegExp('[.]', 'g'), ':');
					words = str.split(':');
					words[words.length - 4] =
						jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
					words[words.length - 3] =
						jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
					words = words.slice(0, words.length - 2);
				} else {
					words = str.split(':');
				}
				offset = 0;
				z = 0;
				for (w = 0; w < words.length; w++) {
					if (typeof words[w] === 'string') {
						if (words[w] === 'Z') {
							for (z = 0; z < 8 - words.length + 1; z++) {
								parts[w + z] = 0;
							}
							offset = z - 1;
						} else {
							parts[w + offset] = _htons(parseInt(words[w], 16));
						}
					} else {
						parts[w + offset] = words[w];
					}
				}
				return [
					(parts[1] << 16) | parts[0],
					(parts[3] << 16) | parts[2],
					(parts[5] << 16) | parts[4],
					(parts[7] << 16) | parts[6]
				];
			}
			function zeroMemory(address, size) {
				HEAPU8.fill(0, address, address + size);
			}
			function writeSockaddr(sa, family, addr, port, addrlen) {
				switch (family) {
					case 2:
						addr = inetPton4(addr);
						zeroMemory(sa, 16);
						if (addrlen) {
							HEAP32[addrlen >> 2] = 16;
						}
						HEAP16[sa >> 1] = family;
						HEAP32[(sa + 4) >> 2] = addr;
						HEAP16[(sa + 2) >> 1] = _htons(port);
						break;
					case 10:
						addr = inetPton6(addr);
						zeroMemory(sa, 28);
						if (addrlen) {
							HEAP32[addrlen >> 2] = 28;
						}
						HEAP32[sa >> 2] = family;
						HEAP32[(sa + 8) >> 2] = addr[0];
						HEAP32[(sa + 12) >> 2] = addr[1];
						HEAP32[(sa + 16) >> 2] = addr[2];
						HEAP32[(sa + 20) >> 2] = addr[3];
						HEAP16[(sa + 2) >> 1] = _htons(port);
						break;
					default:
						return 5;
				}
				return 0;
			}
			var DNS = {
				address_map: { id: 1, addrs: {}, names: {} },
				lookup_name: function (name) {
					var res = inetPton4(name);
					if (res !== null) {
						return name;
					}
					res = inetPton6(name);
					if (res !== null) {
						return name;
					}
					var addr;
					if (DNS.address_map.addrs[name]) {
						addr = DNS.address_map.addrs[name];
					} else {
						var id = DNS.address_map.id++;
						assert(id < 65535, 'exceeded max address mappings of 65535');
						addr = '172.29.' + (id & 255) + '.' + (id & 65280);
						DNS.address_map.names[addr] = name;
						DNS.address_map.addrs[name] = addr;
					}
					return addr;
				},
				lookup_addr: function (addr) {
					if (DNS.address_map.names[addr]) {
						return DNS.address_map.names[addr];
					}
					return null;
				}
			};
			function ___sys_getpeername(fd, addr, addrlen) {
				var sock = getSocketFromFD(fd);
				if (!sock.daddr) {
					return -53;
				}
				var errno = writeSockaddr(
					addr,
					sock.family,
					DNS.lookup_name(sock.daddr),
					sock.dport,
					addrlen
				);
				return 0;
			}
			function ___sys_getpid() {
				return 42;
			}
			function ___sys_getsockopt(fd, level, optname, optval, optlen) {
				var sock = getSocketFromFD(fd);
				if (level === 1) {
					if (optname === 4) {
						HEAP32[optval >> 2] = sock.error;
						HEAP32[optlen >> 2] = 4;
						sock.error = null;
						return 0;
					}
				}
				return -50;
			}
			function ___sys_ioctl(fd, op, varargs) {
				SYSCALLS.varargs = varargs;
				return 0;
			}
			function ___sys_madvise1(addr, length, advice) {
				return 0;
			}
			function ___sys_mkdir(path, mode) {
				path = SYSCALLS.getStr(path);
				return SYSCALLS.doMkdir(path, mode);
			}
			function ___sys_open(path, flags, varargs) {
				SYSCALLS.varargs = varargs;
			}
			function ___sys_recvfrom(fd, buf, len, flags, addr, addrlen) {
				var sock = getSocketFromFD(fd);
				var msg = sock.sock_ops.recvmsg(sock, len);
				if (!msg) return 0;
				if (addr) {
					var errno = writeSockaddr(
						addr,
						sock.family,
						DNS.lookup_name(msg.addr),
						msg.port,
						addrlen
					);
				}
				HEAPU8.set(msg.buffer, buf);
				return msg.buffer.byteLength;
			}
			function ___sys_rename(old_path, new_path) {}
			function ___sys_rmdir(path) {}
			function ___sys_sendto(fd, message, length, flags, addr, addr_len) {}
			function ___sys_setsockopt(fd) {
				return -50;
			}
			function ___sys_shutdown(fd, how) {
				getSocketFromFD(fd);
				return -52;
			}
			function ___sys_socket(domain, type, protocol) {}
			function ___sys_stat64(path, buf) {}
			function ___sys_unlink(path) {}
			function __dlopen_js(filename, flag) {
				abort(
					"To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
				);
			}
			function __dlsym_js(handle, symbol) {
				abort(
					"To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
				);
			}
			function _abort() {
				abort('');
			}
			var _emscripten_get_now;
			if (ENVIRONMENT_IS_NODE) {
				_emscripten_get_now = function () {
					var t = process['hrtime']();
					return t[0] * 1e3 + t[1] / 1e6;
				};
			} else
				_emscripten_get_now = function () {
					return performance.now();
				};
			var _emscripten_get_now_is_monotonic = true;
			function _clock_gettime(clk_id, tp) {
				var now;
				if (clk_id === 0) {
					now = Date.now();
				} else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
					now = _emscripten_get_now();
				} else {
					setErrNo(28);
					return -1;
				}
				HEAP32[tp >> 2] = (now / 1e3) | 0;
				HEAP32[(tp + 4) >> 2] = ((now % 1e3) * 1e3 * 1e3) | 0;
				return 0;
			}
			function _duckdb_web_fs_directory_create(path, pathLen) {
				return globalThis.DUCKDB_RUNTIME.createDirectory(Module, path, pathLen);
			}
			function _duckdb_web_fs_directory_exists(path, pathLen) {
				return globalThis.DUCKDB_RUNTIME.checkDirectory(Module, path, pathLen);
			}
			function _duckdb_web_fs_directory_list_files(path, pathLen) {
				return globalThis.DUCKDB_RUNTIME.listDirectoryEntries(Module, path, pathLen);
			}
			function _duckdb_web_fs_directory_remove(path, pathLen) {
				return globalThis.DUCKDB_RUNTIME.removeDirectory(Module, path, pathLen);
			}
			function _duckdb_web_fs_file_close(fileId) {
				return globalThis.DUCKDB_RUNTIME.closeFile(Module, fileId);
			}
			function _duckdb_web_fs_file_exists(path, pathLen) {
				return globalThis.DUCKDB_RUNTIME.checkFile(Module, path, pathLen);
			}
			function _duckdb_web_fs_file_get_last_modified_time(fileId) {
				return globalThis.DUCKDB_RUNTIME.getLastFileModificationTime(Module, fileId);
			}
			function _duckdb_web_fs_file_move(from, fromLen, to, toLen) {
				return globalThis.DUCKDB_RUNTIME.moveFile(Module, from, fromLen, to, toLen);
			}
			function _duckdb_web_fs_file_open(fileId) {
				return globalThis.DUCKDB_RUNTIME.openFile(Module, fileId);
			}
			function _duckdb_web_fs_file_read(fileId, buf, size, location) {
				return globalThis.DUCKDB_RUNTIME.readFile(Module, fileId, buf, size, location);
			}
			function _duckdb_web_fs_file_truncate(fileId, newSize) {
				return globalThis.DUCKDB_RUNTIME.truncateFile(Module, fileId, newSize);
			}
			function _duckdb_web_fs_file_write(fileId, buf, size, location) {
				return globalThis.DUCKDB_RUNTIME.writeFile(Module, fileId, buf, size, location);
			}
			function _duckdb_web_fs_glob(path, pathLen) {
				return globalThis.DUCKDB_RUNTIME.glob(Module, path, pathLen);
			}
			function _duckdb_web_test_platform_feature(feature) {
				return globalThis.DUCKDB_RUNTIME.testPlatformFeature(Module, feature);
			}
			function _emscripten_get_heap_max() {
				return 2147483648;
			}
			function _emscripten_memcpy_big(dest, src, num) {
				HEAPU8.copyWithin(dest, src, src + num);
			}
			function emscripten_realloc_buffer(size) {
				try {
					wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16);
					updateGlobalBufferAndViews(wasmMemory.buffer);
					return 1;
				} catch (e) {}
			}
			function _emscripten_resize_heap(requestedSize) {
				var oldSize = HEAPU8.length;
				requestedSize = requestedSize >>> 0;
				var maxHeapSize = 2147483648;
				if (requestedSize > maxHeapSize) {
					return false;
				}
				for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
					var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
					overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
					var newSize = Math.min(
						maxHeapSize,
						alignUp(Math.max(requestedSize, overGrownHeapSize), 65536)
					);
					var replacement = emscripten_realloc_buffer(newSize);
					if (replacement) {
						return true;
					}
				}
				return false;
			}
			var ENV = {};
			function getExecutableName() {
				return thisProgram || './this.program';
			}
			function getEnvStrings() {
				if (!getEnvStrings.strings) {
					var lang =
						(
							(typeof navigator === 'object' && navigator.languages && navigator.languages[0]) ||
							'C'
						).replace('-', '_') + '.UTF-8';
					var env = {
						USER: 'web_user',
						LOGNAME: 'web_user',
						PATH: '/',
						PWD: '/',
						HOME: '/home/web_user',
						LANG: lang,
						_: getExecutableName()
					};
					for (var x in ENV) {
						if (ENV[x] === void 0) delete env[x];
						else env[x] = ENV[x];
					}
					var strings = [];
					for (var x in env) {
						strings.push(x + '=' + env[x]);
					}
					getEnvStrings.strings = strings;
				}
				return getEnvStrings.strings;
			}
			function _environ_get(__environ, environ_buf) {
				var bufSize = 0;
				getEnvStrings().forEach(function (string, i) {
					var ptr = environ_buf + bufSize;
					HEAP32[(__environ + i * 4) >> 2] = ptr;
					writeAsciiToMemory(string, ptr);
					bufSize += string.length + 1;
				});
				return 0;
			}
			function _environ_sizes_get(penviron_count, penviron_buf_size) {
				var strings = getEnvStrings();
				HEAP32[penviron_count >> 2] = strings.length;
				var bufSize = 0;
				strings.forEach(function (string) {
					bufSize += string.length + 1;
				});
				HEAP32[penviron_buf_size >> 2] = bufSize;
				return 0;
			}
			function _fd_close(fd) {
				return 0;
			}
			function _fd_fdstat_get(fd, pbuf) {
				var type = fd == 1 || fd == 2 ? 2 : abort();
				HEAP8[pbuf >> 0] = type;
				return 0;
			}
			function _fd_pread(fd, iov, iovcnt, offset_low, offset_high, pnum) {
				var stream = SYSCALLS.getStreamFromFD(fd);
				var num = SYSCALLS.doReadv(stream, iov, iovcnt, offset_low);
				HEAP32[pnum >> 2] = num;
				return 0;
			}
			function _fd_pwrite(fd, iov, iovcnt, offset_low, offset_high, pnum) {
				var stream = SYSCALLS.getStreamFromFD(fd);
				var num = SYSCALLS.doWritev(stream, iov, iovcnt, offset_low);
				HEAP32[pnum >> 2] = num;
				return 0;
			}
			function _fd_read(fd, iov, iovcnt, pnum) {
				var stream = SYSCALLS.getStreamFromFD(fd);
				var num = SYSCALLS.doReadv(stream, iov, iovcnt);
				HEAP32[pnum >> 2] = num;
				return 0;
			}
			function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {}
			function _fd_sync(fd) {
				var stream = SYSCALLS.getStreamFromFD(fd);
				if (stream.stream_ops && stream.stream_ops.fsync) {
					return -stream.stream_ops.fsync(stream);
				}
				return 0;
			}
			function _fd_write(fd, iov, iovcnt, pnum) {
				var num = 0;
				for (var i = 0; i < iovcnt; i++) {
					var ptr = HEAP32[(iov + i * 8) >> 2];
					var len = HEAP32[(iov + (i * 8 + 4)) >> 2];
					for (var j = 0; j < len; j++) {
						SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
					}
					num += len;
				}
				HEAP32[pnum >> 2] = num;
				return 0;
			}
			function _getTempRet0() {
				return getTempRet0();
			}
			function _getaddrinfo(node, service, hint, out2) {
				var addr = 0;
				var port = 0;
				var flags = 0;
				var family = 0;
				var type = 0;
				var proto = 0;
				var ai;
				function allocaddrinfo(family2, type2, proto2, canon, addr2, port2) {
					var sa, salen, ai2;
					var errno;
					salen = family2 === 10 ? 28 : 16;
					addr2 = family2 === 10 ? inetNtop6(addr2) : inetNtop4(addr2);
					sa = _malloc(salen);
					errno = writeSockaddr(sa, family2, addr2, port2);
					assert(!errno);
					ai2 = _malloc(32);
					HEAP32[(ai2 + 4) >> 2] = family2;
					HEAP32[(ai2 + 8) >> 2] = type2;
					HEAP32[(ai2 + 12) >> 2] = proto2;
					HEAP32[(ai2 + 24) >> 2] = canon;
					HEAP32[(ai2 + 20) >> 2] = sa;
					if (family2 === 10) {
						HEAP32[(ai2 + 16) >> 2] = 28;
					} else {
						HEAP32[(ai2 + 16) >> 2] = 16;
					}
					HEAP32[(ai2 + 28) >> 2] = 0;
					return ai2;
				}
				if (hint) {
					flags = HEAP32[hint >> 2];
					family = HEAP32[(hint + 4) >> 2];
					type = HEAP32[(hint + 8) >> 2];
					proto = HEAP32[(hint + 12) >> 2];
				}
				if (type && !proto) {
					proto = type === 2 ? 17 : 6;
				}
				if (!type && proto) {
					type = proto === 17 ? 2 : 1;
				}
				if (proto === 0) {
					proto = 6;
				}
				if (type === 0) {
					type = 1;
				}
				if (!node && !service) {
					return -2;
				}
				if (flags & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32)) {
					return -1;
				}
				if (hint !== 0 && HEAP32[hint >> 2] & 2 && !node) {
					return -1;
				}
				if (flags & 32) {
					return -2;
				}
				if (type !== 0 && type !== 1 && type !== 2) {
					return -7;
				}
				if (family !== 0 && family !== 2 && family !== 10) {
					return -6;
				}
				if (service) {
					service = UTF8ToString(service);
					port = parseInt(service, 10);
					if (isNaN(port)) {
						if (flags & 1024) {
							return -2;
						}
						return -8;
					}
				}
				if (!node) {
					if (family === 0) {
						family = 2;
					}
					if ((flags & 1) === 0) {
						if (family === 2) {
							addr = _htonl(2130706433);
						} else {
							addr = [0, 0, 0, 1];
						}
					}
					ai = allocaddrinfo(family, type, proto, null, addr, port);
					HEAP32[out2 >> 2] = ai;
					return 0;
				}
				node = UTF8ToString(node);
				addr = inetPton4(node);
				if (addr !== null) {
					if (family === 0 || family === 2) {
						family = 2;
					} else if (family === 10 && flags & 8) {
						addr = [0, 0, _htonl(65535), addr];
						family = 10;
					} else {
						return -2;
					}
				} else {
					addr = inetPton6(node);
					if (addr !== null) {
						if (family === 0 || family === 10) {
							family = 10;
						} else {
							return -2;
						}
					}
				}
				if (addr != null) {
					ai = allocaddrinfo(family, type, proto, node, addr, port);
					HEAP32[out2 >> 2] = ai;
					return 0;
				}
				if (flags & 4) {
					return -2;
				}
				node = DNS.lookup_name(node);
				addr = inetPton4(node);
				if (family === 0) {
					family = 2;
				} else if (family === 10) {
					addr = [0, 0, _htonl(65535), addr];
				}
				ai = allocaddrinfo(family, type, proto, null, addr, port);
				HEAP32[out2 >> 2] = ai;
				return 0;
			}
			function getRandomDevice() {
				if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
					var randomBuffer = new Uint8Array(1);
					return function () {
						crypto.getRandomValues(randomBuffer);
						return randomBuffer[0];
					};
				} else if (ENVIRONMENT_IS_NODE) {
					try {
						var crypto_module = __require('crypto');
						return function () {
							return crypto_module['randomBytes'](1)[0];
						};
					} catch (e) {}
				}
				return function () {
					abort('randomDevice');
				};
			}
			function _getentropy(buffer2, size) {
				if (!_getentropy.randomDevice) {
					_getentropy.randomDevice = getRandomDevice();
				}
				for (var i = 0; i < size; i++) {
					HEAP8[(buffer2 + i) >> 0] = _getentropy.randomDevice();
				}
				return 0;
			}
			function _getnameinfo(sa, salen, node, nodelen, serv, servlen, flags) {
				var info = readSockaddr(sa, salen);
				if (info.errno) {
					return -6;
				}
				var port = info.port;
				var addr = info.addr;
				var overflowed = false;
				if (node && nodelen) {
					var lookup;
					if (flags & 1 || !(lookup = DNS.lookup_addr(addr))) {
						if (flags & 8) {
							return -2;
						}
					} else {
						addr = lookup;
					}
					var numBytesWrittenExclNull = stringToUTF8(addr, node, nodelen);
					if (numBytesWrittenExclNull + 1 >= nodelen) {
						overflowed = true;
					}
				}
				if (serv && servlen) {
					port = '' + port;
					var numBytesWrittenExclNull = stringToUTF8(port, serv, servlen);
					if (numBytesWrittenExclNull + 1 >= servlen) {
						overflowed = true;
					}
				}
				if (overflowed) {
					return -12;
				}
				return 0;
			}
			function _llvm_eh_typeid_for(type) {
				return type;
			}
			function _setTempRet0(val) {
				setTempRet0(val);
			}
			function __isLeapYear(year) {
				return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
			}
			function __arraySum(array, index) {
				var sum = 0;
				for (var i = 0; i <= index; sum += array[i++]) {}
				return sum;
			}
			var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			function __addDays(date, days) {
				var newDate = new Date(date.getTime());
				while (days > 0) {
					var leap = __isLeapYear(newDate.getFullYear());
					var currentMonth = newDate.getMonth();
					var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
					if (days > daysInCurrentMonth - newDate.getDate()) {
						days -= daysInCurrentMonth - newDate.getDate() + 1;
						newDate.setDate(1);
						if (currentMonth < 11) {
							newDate.setMonth(currentMonth + 1);
						} else {
							newDate.setMonth(0);
							newDate.setFullYear(newDate.getFullYear() + 1);
						}
					} else {
						newDate.setDate(newDate.getDate() + days);
						return newDate;
					}
				}
				return newDate;
			}
			function _strftime(s, maxsize, format, tm) {
				var tm_zone = HEAP32[(tm + 40) >> 2];
				var date = {
					tm_sec: HEAP32[tm >> 2],
					tm_min: HEAP32[(tm + 4) >> 2],
					tm_hour: HEAP32[(tm + 8) >> 2],
					tm_mday: HEAP32[(tm + 12) >> 2],
					tm_mon: HEAP32[(tm + 16) >> 2],
					tm_year: HEAP32[(tm + 20) >> 2],
					tm_wday: HEAP32[(tm + 24) >> 2],
					tm_yday: HEAP32[(tm + 28) >> 2],
					tm_isdst: HEAP32[(tm + 32) >> 2],
					tm_gmtoff: HEAP32[(tm + 36) >> 2],
					tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
				};
				var pattern = UTF8ToString(format);
				var EXPANSION_RULES_1 = {
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
				for (var rule in EXPANSION_RULES_1) {
					pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
				}
				var WEEKDAYS = [
					'Sunday',
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday'
				];
				var MONTHS = [
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
				function leadingSomething(value, digits, character) {
					var str = typeof value === 'number' ? value.toString() : value || '';
					while (str.length < digits) {
						str = character[0] + str;
					}
					return str;
				}
				function leadingNulls(value, digits) {
					return leadingSomething(value, digits, '0');
				}
				function compareByDay(date1, date2) {
					function sgn(value) {
						return value < 0 ? -1 : value > 0 ? 1 : 0;
					}
					var compare;
					if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
						if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
							compare = sgn(date1.getDate() - date2.getDate());
						}
					}
					return compare;
				}
				function getFirstWeekStartDate(janFourth) {
					switch (janFourth.getDay()) {
						case 0:
							return new Date(janFourth.getFullYear() - 1, 11, 29);
						case 1:
							return janFourth;
						case 2:
							return new Date(janFourth.getFullYear(), 0, 3);
						case 3:
							return new Date(janFourth.getFullYear(), 0, 2);
						case 4:
							return new Date(janFourth.getFullYear(), 0, 1);
						case 5:
							return new Date(janFourth.getFullYear() - 1, 11, 31);
						case 6:
							return new Date(janFourth.getFullYear() - 1, 11, 30);
					}
				}
				function getWeekBasedYear(date2) {
					var thisDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
					var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
					var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
					var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
					var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
					if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
						if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
							return thisDate.getFullYear() + 1;
						} else {
							return thisDate.getFullYear();
						}
					} else {
						return thisDate.getFullYear() - 1;
					}
				}
				var EXPANSION_RULES_2 = {
					'%a': function (date2) {
						return WEEKDAYS[date2.tm_wday].substring(0, 3);
					},
					'%A': function (date2) {
						return WEEKDAYS[date2.tm_wday];
					},
					'%b': function (date2) {
						return MONTHS[date2.tm_mon].substring(0, 3);
					},
					'%B': function (date2) {
						return MONTHS[date2.tm_mon];
					},
					'%C': function (date2) {
						var year = date2.tm_year + 1900;
						return leadingNulls((year / 100) | 0, 2);
					},
					'%d': function (date2) {
						return leadingNulls(date2.tm_mday, 2);
					},
					'%e': function (date2) {
						return leadingSomething(date2.tm_mday, 2, ' ');
					},
					'%g': function (date2) {
						return getWeekBasedYear(date2).toString().substring(2);
					},
					'%G': function (date2) {
						return getWeekBasedYear(date2);
					},
					'%H': function (date2) {
						return leadingNulls(date2.tm_hour, 2);
					},
					'%I': function (date2) {
						var twelveHour = date2.tm_hour;
						if (twelveHour == 0) twelveHour = 12;
						else if (twelveHour > 12) twelveHour -= 12;
						return leadingNulls(twelveHour, 2);
					},
					'%j': function (date2) {
						return leadingNulls(
							date2.tm_mday +
								__arraySum(
									__isLeapYear(date2.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR,
									date2.tm_mon - 1
								),
							3
						);
					},
					'%m': function (date2) {
						return leadingNulls(date2.tm_mon + 1, 2);
					},
					'%M': function (date2) {
						return leadingNulls(date2.tm_min, 2);
					},
					'%n': function () {
						return '\n';
					},
					'%p': function (date2) {
						if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
							return 'AM';
						} else {
							return 'PM';
						}
					},
					'%S': function (date2) {
						return leadingNulls(date2.tm_sec, 2);
					},
					'%t': function () {
						return '	';
					},
					'%u': function (date2) {
						return date2.tm_wday || 7;
					},
					'%U': function (date2) {
						var janFirst = new Date(date2.tm_year + 1900, 0, 1);
						var firstSunday =
							janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
						var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
						if (compareByDay(firstSunday, endDate) < 0) {
							var februaryFirstUntilEndMonth =
								__arraySum(
									__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR,
									endDate.getMonth() - 1
								) - 31;
							var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
							var days =
								firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
							return leadingNulls(Math.ceil(days / 7), 2);
						}
						return compareByDay(firstSunday, janFirst) === 0 ? '01' : '00';
					},
					'%V': function (date2) {
						var janFourthThisYear = new Date(date2.tm_year + 1900, 0, 4);
						var janFourthNextYear = new Date(date2.tm_year + 1901, 0, 4);
						var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
						var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
						var endDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
						if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
							return '53';
						}
						if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
							return '01';
						}
						var daysDifference;
						if (firstWeekStartThisYear.getFullYear() < date2.tm_year + 1900) {
							daysDifference = date2.tm_yday + 32 - firstWeekStartThisYear.getDate();
						} else {
							daysDifference = date2.tm_yday + 1 - firstWeekStartThisYear.getDate();
						}
						return leadingNulls(Math.ceil(daysDifference / 7), 2);
					},
					'%w': function (date2) {
						return date2.tm_wday;
					},
					'%W': function (date2) {
						var janFirst = new Date(date2.tm_year, 0, 1);
						var firstMonday =
							janFirst.getDay() === 1
								? janFirst
								: __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
						var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
						if (compareByDay(firstMonday, endDate) < 0) {
							var februaryFirstUntilEndMonth =
								__arraySum(
									__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR,
									endDate.getMonth() - 1
								) - 31;
							var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
							var days =
								firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
							return leadingNulls(Math.ceil(days / 7), 2);
						}
						return compareByDay(firstMonday, janFirst) === 0 ? '01' : '00';
					},
					'%y': function (date2) {
						return (date2.tm_year + 1900).toString().substring(2);
					},
					'%Y': function (date2) {
						return date2.tm_year + 1900;
					},
					'%z': function (date2) {
						var off = date2.tm_gmtoff;
						var ahead = off >= 0;
						off = Math.abs(off) / 60;
						off = (off / 60) * 100 + (off % 60);
						return (ahead ? '+' : '-') + String('0000' + off).slice(-4);
					},
					'%Z': function (date2) {
						return date2.tm_zone;
					},
					'%%': function () {
						return '%';
					}
				};
				for (var rule in EXPANSION_RULES_2) {
					if (pattern.includes(rule)) {
						pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
					}
				}
				var bytes = intArrayFromString(pattern, false);
				if (bytes.length > maxsize) {
					return 0;
				}
				writeArrayToMemory(bytes, s);
				return bytes.length - 1;
			}
			function _strftime_l(s, maxsize, format, tm) {
				return _strftime(s, maxsize, format, tm);
			}
			function intArrayFromString(stringy, dontAddNull, length) {
				var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
				var u8array = new Array(len);
				var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
				if (dontAddNull) u8array.length = numBytesWritten;
				return u8array;
			}
			var asmLibraryArg = {
				j: ___cxa_allocate_exception,
				A: ___cxa_begin_catch,
				F: ___cxa_end_catch,
				b: ___cxa_find_matching_catch_2,
				n: ___cxa_find_matching_catch_3,
				I: ___cxa_find_matching_catch_4,
				na: ___cxa_find_matching_catch_5,
				i: ___cxa_free_exception,
				ga: ___cxa_rethrow,
				u: ___cxa_throw,
				E: ___cxa_uncaught_exceptions,
				e: ___resumeException,
				Ia: ___sys__newselect,
				za: ___sys_access,
				Ka: ___sys_bind,
				Ja: ___sys_connect,
				N: ___sys_fcntl64,
				Ba: ___sys_fstat64,
				Aa: ___sys_ftruncate64,
				Ne: ___sys_getdents64,
				Ea: ___sys_getpeername,
				va: ___sys_getpid,
				Ha: ___sys_getsockopt,
				Ra: ___sys_ioctl,
				Je: ___sys_madvise1,
				ya: ___sys_mkdir,
				qa: ___sys_open,
				Fa: ___sys_recvfrom,
				Le: ___sys_rename,
				wa: ___sys_rmdir,
				Ga: ___sys_sendto,
				La: ___sys_setsockopt,
				Na: ___sys_shutdown,
				la: ___sys_socket,
				ia: ___sys_stat64,
				xa: ___sys_unlink,
				Pa: __dlopen_js,
				Oa: __dlsym_js,
				fa: _abort,
				oa: _clock_gettime,
				Ce: _duckdb_web_fs_directory_create,
				De: _duckdb_web_fs_directory_exists,
				Ae: _duckdb_web_fs_directory_list_files,
				Be: _duckdb_web_fs_directory_remove,
				ua: _duckdb_web_fs_file_close,
				ye: _duckdb_web_fs_file_exists,
				Fe: _duckdb_web_fs_file_get_last_modified_time,
				ze: _duckdb_web_fs_file_move,
				He: _duckdb_web_fs_file_open,
				ha: _duckdb_web_fs_file_read,
				Ee: _duckdb_web_fs_file_truncate,
				Ge: _duckdb_web_fs_file_write,
				xe: _duckdb_web_fs_glob,
				ta: _duckdb_web_test_platform_feature,
				Sa: _emscripten_get_heap_max,
				eb: _emscripten_memcpy_big,
				ad: _emscripten_resize_heap,
				Ua: _environ_get,
				Va: _environ_sizes_get,
				U: _fd_close,
				Qa: _fd_fdstat_get,
				nb: _fd_pread,
				mb: _fd_pwrite,
				pa: _fd_read,
				Qd: _fd_seek,
				Me: _fd_sync,
				ea: _fd_write,
				a: _getTempRet0,
				Ma: _getaddrinfo,
				Ca: _getentropy,
				Da: _getnameinfo,
				Y: invoke_ddd,
				L: invoke_di,
				T: invoke_diii,
				vc: invoke_diijii,
				Z: invoke_fff,
				O: invoke_fi,
				sa: invoke_fiii,
				wc: invoke_fiijii,
				t: invoke_i,
				W: invoke_id,
				Jb: invoke_idd,
				$: invoke_idiii,
				X: invoke_if,
				Ub: invoke_iff,
				d: invoke_ii,
				ba: invoke_iid,
				C: invoke_iidii,
				Eb: invoke_iidj,
				c: invoke_iii,
				_: invoke_iiid,
				ja: invoke_iiif,
				h: invoke_iiii,
				Cb: invoke_iiiidjj,
				m: invoke_iiiii,
				ra: invoke_iiiiid,
				o: invoke_iiiiii,
				w: invoke_iiiiiii,
				z: invoke_iiiiiiii,
				S: invoke_iiiiiiiii,
				y: invoke_iiiiiiiiiii,
				v: invoke_iiiiiiiiiiii,
				p: invoke_iiiiiiiiiiiiiii,
				M: invoke_iiiiiiiiiiiiiiiiiiii,
				J: invoke_iiiiiiiiiiiiiiiiiiiii,
				Zb: invoke_iiiiiiiiiiiij,
				ac: invoke_iiiiiiiiiiji,
				dc: invoke_iiiiiiiij,
				kc: invoke_iiiiiiiiji,
				_b: invoke_iiiiiiij,
				Db: invoke_iiiiiiiji,
				uc: invoke_iiiiiiijii,
				bc: invoke_iiiiiij,
				lc: invoke_iiiiiiji,
				te: invoke_iiiiij,
				Od: invoke_iiiiiji,
				Hd: invoke_iiiiijii,
				ge: invoke_iiiiijj,
				Pb: invoke_iiiiijji,
				hd: invoke_iiiiijjiijj,
				Ib: invoke_iiiiijjj,
				Gb: invoke_iiiiijjji,
				Yd: invoke_iiiij,
				Nd: invoke_iiiiji,
				vb: invoke_iiiijii,
				Vc: invoke_iiiijiii,
				Xd: invoke_iiiijj,
				Cc: invoke_iiiijji,
				Qb: invoke_iiiijjii,
				Fb: invoke_iiiijjj,
				oe: invoke_iiij,
				Ud: invoke_iiiji,
				yc: invoke_iiijii,
				Id: invoke_iiijiii,
				td: invoke_iiijiiii,
				Fd: invoke_iiijiij,
				ib: invoke_iiijiijj,
				Vd: invoke_iiijij,
				ic: invoke_iiijj,
				Sd: invoke_iiijji,
				gd: invoke_iiijjii,
				cb: invoke_iiijjji,
				Kb: invoke_iiijjjii,
				jd: invoke_iiijjjj,
				$d: invoke_iij,
				Zd: invoke_iiji,
				_a: invoke_iijii,
				tb: invoke_iijiii,
				Jd: invoke_iijiiii,
				db: invoke_iijiijj,
				Bb: invoke_iijiji,
				Td: invoke_iijj,
				Cd: invoke_iijji,
				fd: invoke_iijjii,
				Ed: invoke_iijjiii,
				Dd: invoke_iijjiiii,
				zd: invoke_iijjijj,
				hc: invoke_iijjj,
				Xb: invoke_ij,
				me: invoke_iji,
				ee: invoke_ijj,
				mc: invoke_ijji,
				de: invoke_ijjiii,
				Pd: invoke_j,
				pc: invoke_jd,
				oc: invoke_jf,
				ke: invoke_ji,
				fe: invoke_jii,
				Md: invoke_jiii,
				we: invoke_jiiii,
				Ec: invoke_jiiiii,
				nc: invoke_jiiiiii,
				$b: invoke_jiiiiiii,
				Dc: invoke_jiiiiiijii,
				sc: invoke_jiiiiijiiii,
				Sc: invoke_jiiiij,
				sb: invoke_jiiiiji,
				zc: invoke_jiiiijii,
				tc: invoke_jiiiijiiiiiiii,
				qd: invoke_jiiij,
				ld: invoke_jiiiji,
				Bc: invoke_jiiijii,
				rc: invoke_jiiijiii,
				wb: invoke_jiiijj,
				Wb: invoke_jiij,
				nd: invoke_jiiji,
				bd: invoke_jiijii,
				Nc: invoke_jiijiiiii,
				Mc: invoke_jiijiijiii,
				Kc: invoke_jiijijii,
				Lc: invoke_jiijjiii,
				rd: invoke_jij,
				zb: invoke_jiji,
				Zc: invoke_jijiii,
				Hb: invoke_jijiiii,
				fc: invoke_jijijjij,
				kb: invoke_jijj,
				Xc: invoke_jijjij,
				qc: invoke_jj,
				Sb: invoke_jjj,
				s: invoke_v,
				k: invoke_vi,
				B: invoke_vid,
				ca: invoke_vidi,
				pb: invoke_vidiijj,
				D: invoke_vif,
				da: invoke_vifi,
				qb: invoke_vifiijj,
				f: invoke_vii,
				V: invoke_viid,
				R: invoke_viidii,
				xc: invoke_viif,
				g: invoke_viii,
				l: invoke_viiii,
				Ke: invoke_viiiidiiii,
				q: invoke_viiiii,
				r: invoke_viiiiii,
				ka: invoke_viiiiiidiii,
				x: invoke_viiiiiii,
				P: invoke_viiiiiiii,
				Q: invoke_viiiiiiiii,
				K: invoke_viiiiiiiiii,
				Ie: invoke_viiiiiiiiiii,
				ma: invoke_viiiiiiiiiiiii,
				aa: invoke_viiiiiiiiiiiiiii,
				Bd: invoke_viiiiiij,
				ob: invoke_viiiiij,
				id: invoke_viiiiiji,
				Yb: invoke_viiiiijiii,
				Ac: invoke_viiiiijiiii,
				jc: invoke_viiiiijj,
				Lb: invoke_viiiiijji,
				gb: invoke_viiiiijjji,
				re: invoke_viiiij,
				Wd: invoke_viiiiji,
				ub: invoke_viiiijii,
				ab: invoke_viiiijiii,
				xd: invoke_viiiijiiii,
				yd: invoke_viiiijiiiii,
				Tb: invoke_viiiijiiiiiiii,
				ud: invoke_viiiijj,
				Nb: invoke_viiiijji,
				Mb: invoke_viiiijjii,
				Oc: invoke_viiiijjjj,
				qe: invoke_viiij,
				vd: invoke_viiiji,
				Ad: invoke_viiijii,
				Uc: invoke_viiijiii,
				Hc: invoke_viiijiiiijjj,
				xb: invoke_viiijij,
				yb: invoke_viiijijiji,
				fb: invoke_viiijijjj,
				je: invoke_viiijj,
				sd: invoke_viiijji,
				Ob: invoke_viiijjii,
				Fc: invoke_viiijjiij,
				Rc: invoke_viiijjij,
				pe: invoke_viiijjj,
				bb: invoke_viiijjjji,
				ue: invoke_viij,
				be: invoke_viiji,
				ce: invoke_viijii,
				Gd: invoke_viijiii,
				$a: invoke_viijiiii,
				$c: invoke_viijiiiii,
				Jc: invoke_viijiiiiij,
				Ic: invoke_viijiiiijj,
				_c: invoke_viijiiij,
				Wc: invoke_viijiij,
				md: invoke_viijiiji,
				hb: invoke_viijiijj,
				ed: invoke_viijij,
				Za: invoke_viijiji,
				Gc: invoke_viijijiiiijjj,
				jb: invoke_viijijj,
				ve: invoke_viijj,
				Rd: invoke_viijji,
				cd: invoke_viijjii,
				Pc: invoke_viijjij,
				he: invoke_viijjj,
				cc: invoke_viijjji,
				se: invoke_vij,
				le: invoke_viji,
				dd: invoke_vijii,
				Ld: invoke_vijiii,
				Kd: invoke_vijiiii,
				Yc: invoke_vijiiiji,
				rb: invoke_vijiijj,
				kd: invoke_vijij,
				gc: invoke_vijijiiiijjj,
				ne: invoke_vijijj,
				Ya: invoke_vijijjiiiii,
				Qc: invoke_vijijjiij,
				lb: invoke_vijijjji,
				ae: invoke_vijj,
				Tc: invoke_vijji,
				Wa: invoke_vijjiiii,
				Xa: invoke_vijjiiiii,
				ec: invoke_vijjij,
				ie: invoke_vijjj,
				pd: invoke_vijjji,
				_d: invoke_vj,
				Rb: invoke_vjii,
				Vb: invoke_vjiiii,
				Ab: invoke_vjiiiji,
				wd: invoke_vjjii,
				od: invoke_vjjijij,
				H: _llvm_eh_typeid_for,
				G: _setTempRet0,
				Ta: _strftime_l
			};
			var asm = createWasm();
			var ___wasm_call_ctors = (Module['___wasm_call_ctors'] = function () {
				return (___wasm_call_ctors = Module['___wasm_call_ctors'] = Module['asm']['Pe']).apply(
					null,
					arguments
				);
			});
			var _main = (Module['_main'] = function () {
				return (_main = Module['_main'] = Module['asm']['Qe']).apply(null, arguments);
			});
			var _duckdb_web_fs_glob_add_path = (Module['_duckdb_web_fs_glob_add_path'] = function () {
				return (_duckdb_web_fs_glob_add_path = Module['_duckdb_web_fs_glob_add_path'] =
					Module['asm']['Se']).apply(null, arguments);
			});
			var _duckdb_web_clear_response = (Module['_duckdb_web_clear_response'] = function () {
				return (_duckdb_web_clear_response = Module['_duckdb_web_clear_response'] =
					Module['asm']['Te']).apply(null, arguments);
			});
			var _duckdb_web_fail_with = (Module['_duckdb_web_fail_with'] = function () {
				return (_duckdb_web_fail_with = Module['_duckdb_web_fail_with'] =
					Module['asm']['Ue']).apply(null, arguments);
			});
			var _duckdb_web_reset = (Module['_duckdb_web_reset'] = function () {
				return (_duckdb_web_reset = Module['_duckdb_web_reset'] = Module['asm']['Ve']).apply(
					null,
					arguments
				);
			});
			var _duckdb_web_connect = (Module['_duckdb_web_connect'] = function () {
				return (_duckdb_web_connect = Module['_duckdb_web_connect'] = Module['asm']['We']).apply(
					null,
					arguments
				);
			});
			var _duckdb_web_disconnect = (Module['_duckdb_web_disconnect'] = function () {
				return (_duckdb_web_disconnect = Module['_duckdb_web_disconnect'] =
					Module['asm']['Xe']).apply(null, arguments);
			});
			var _duckdb_web_flush_files = (Module['_duckdb_web_flush_files'] = function () {
				return (_duckdb_web_flush_files = Module['_duckdb_web_flush_files'] =
					Module['asm']['Ye']).apply(null, arguments);
			});
			var _duckdb_web_flush_file = (Module['_duckdb_web_flush_file'] = function () {
				return (_duckdb_web_flush_file = Module['_duckdb_web_flush_file'] =
					Module['asm']['Ze']).apply(null, arguments);
			});
			var _duckdb_web_open = (Module['_duckdb_web_open'] = function () {
				return (_duckdb_web_open = Module['_duckdb_web_open'] = Module['asm']['_e']).apply(
					null,
					arguments
				);
			});
			var _duckdb_web_collect_file_stats = (Module['_duckdb_web_collect_file_stats'] = function () {
				return (_duckdb_web_collect_file_stats = Module['_duckdb_web_collect_file_stats'] =
					Module['asm']['$e']).apply(null, arguments);
			});
			var _duckdb_web_export_file_stats = (Module['_duckdb_web_export_file_stats'] = function () {
				return (_duckdb_web_export_file_stats = Module['_duckdb_web_export_file_stats'] =
					Module['asm']['af']).apply(null, arguments);
			});
			var _duckdb_web_fs_drop_file = (Module['_duckdb_web_fs_drop_file'] = function () {
				return (_duckdb_web_fs_drop_file = Module['_duckdb_web_fs_drop_file'] =
					Module['asm']['bf']).apply(null, arguments);
			});
			var _duckdb_web_fs_drop_files = (Module['_duckdb_web_fs_drop_files'] = function () {
				return (_duckdb_web_fs_drop_files = Module['_duckdb_web_fs_drop_files'] =
					Module['asm']['cf']).apply(null, arguments);
			});
			var _duckdb_web_fs_glob_file_infos = (Module['_duckdb_web_fs_glob_file_infos'] = function () {
				return (_duckdb_web_fs_glob_file_infos = Module['_duckdb_web_fs_glob_file_infos'] =
					Module['asm']['df']).apply(null, arguments);
			});
			var _duckdb_web_fs_get_file_info_by_id = (Module['_duckdb_web_fs_get_file_info_by_id'] =
				function () {
					return (_duckdb_web_fs_get_file_info_by_id = Module[
						'_duckdb_web_fs_get_file_info_by_id'
					] =
						Module['asm']['ef']).apply(null, arguments);
				});
			var _duckdb_web_fs_get_file_info_by_name = (Module['_duckdb_web_fs_get_file_info_by_name'] =
				function () {
					return (_duckdb_web_fs_get_file_info_by_name = Module[
						'_duckdb_web_fs_get_file_info_by_name'
					] =
						Module['asm']['ff']).apply(null, arguments);
				});
			var _duckdb_web_fs_set_file_descriptor = (Module['_duckdb_web_fs_set_file_descriptor'] =
				function () {
					return (_duckdb_web_fs_set_file_descriptor = Module[
						'_duckdb_web_fs_set_file_descriptor'
					] =
						Module['asm']['gf']).apply(null, arguments);
				});
			var _duckdb_web_fs_register_file_url = (Module['_duckdb_web_fs_register_file_url'] =
				function () {
					return (_duckdb_web_fs_register_file_url = Module['_duckdb_web_fs_register_file_url'] =
						Module['asm']['hf']).apply(null, arguments);
				});
			var _duckdb_web_fs_register_file_buffer = (Module['_duckdb_web_fs_register_file_buffer'] =
				function () {
					return (_duckdb_web_fs_register_file_buffer = Module[
						'_duckdb_web_fs_register_file_buffer'
					] =
						Module['asm']['jf']).apply(null, arguments);
				});
			var _duckdb_web_copy_file_to_buffer = (Module['_duckdb_web_copy_file_to_buffer'] =
				function () {
					return (_duckdb_web_copy_file_to_buffer = Module['_duckdb_web_copy_file_to_buffer'] =
						Module['asm']['kf']).apply(null, arguments);
				});
			var _duckdb_web_copy_file_to_path = (Module['_duckdb_web_copy_file_to_path'] = function () {
				return (_duckdb_web_copy_file_to_path = Module['_duckdb_web_copy_file_to_path'] =
					Module['asm']['lf']).apply(null, arguments);
			});
			var _duckdb_web_get_version = (Module['_duckdb_web_get_version'] = function () {
				return (_duckdb_web_get_version = Module['_duckdb_web_get_version'] =
					Module['asm']['mf']).apply(null, arguments);
			});
			var _duckdb_web_get_feature_flags = (Module['_duckdb_web_get_feature_flags'] = function () {
				return (_duckdb_web_get_feature_flags = Module['_duckdb_web_get_feature_flags'] =
					Module['asm']['nf']).apply(null, arguments);
			});
			var _duckdb_web_tokenize = (Module['_duckdb_web_tokenize'] = function () {
				return (_duckdb_web_tokenize = Module['_duckdb_web_tokenize'] = Module['asm']['of']).apply(
					null,
					arguments
				);
			});
			var _duckdb_web_prepared_create = (Module['_duckdb_web_prepared_create'] = function () {
				return (_duckdb_web_prepared_create = Module['_duckdb_web_prepared_create'] =
					Module['asm']['pf']).apply(null, arguments);
			});
			var _duckdb_web_prepared_close = (Module['_duckdb_web_prepared_close'] = function () {
				return (_duckdb_web_prepared_close = Module['_duckdb_web_prepared_close'] =
					Module['asm']['qf']).apply(null, arguments);
			});
			var _duckdb_web_prepared_run = (Module['_duckdb_web_prepared_run'] = function () {
				return (_duckdb_web_prepared_run = Module['_duckdb_web_prepared_run'] =
					Module['asm']['rf']).apply(null, arguments);
			});
			var _duckdb_web_prepared_send = (Module['_duckdb_web_prepared_send'] = function () {
				return (_duckdb_web_prepared_send = Module['_duckdb_web_prepared_send'] =
					Module['asm']['sf']).apply(null, arguments);
			});
			var _duckdb_web_query_run = (Module['_duckdb_web_query_run'] = function () {
				return (_duckdb_web_query_run = Module['_duckdb_web_query_run'] =
					Module['asm']['tf']).apply(null, arguments);
			});
			var _duckdb_web_query_send = (Module['_duckdb_web_query_send'] = function () {
				return (_duckdb_web_query_send = Module['_duckdb_web_query_send'] =
					Module['asm']['uf']).apply(null, arguments);
			});
			var _duckdb_web_query_fetch_results = (Module['_duckdb_web_query_fetch_results'] =
				function () {
					return (_duckdb_web_query_fetch_results = Module['_duckdb_web_query_fetch_results'] =
						Module['asm']['vf']).apply(null, arguments);
				});
			var _duckdb_web_get_tablenames = (Module['_duckdb_web_get_tablenames'] = function () {
				return (_duckdb_web_get_tablenames = Module['_duckdb_web_get_tablenames'] =
					Module['asm']['wf']).apply(null, arguments);
			});
			var _duckdb_web_insert_arrow_from_ipc_stream = (Module[
				'_duckdb_web_insert_arrow_from_ipc_stream'
			] = function () {
				return (_duckdb_web_insert_arrow_from_ipc_stream = Module[
					'_duckdb_web_insert_arrow_from_ipc_stream'
				] =
					Module['asm']['xf']).apply(null, arguments);
			});
			var _duckdb_web_insert_csv_from_path = (Module['_duckdb_web_insert_csv_from_path'] =
				function () {
					return (_duckdb_web_insert_csv_from_path = Module['_duckdb_web_insert_csv_from_path'] =
						Module['asm']['yf']).apply(null, arguments);
				});
			var _duckdb_web_insert_json_from_path = (Module['_duckdb_web_insert_json_from_path'] =
				function () {
					return (_duckdb_web_insert_json_from_path = Module['_duckdb_web_insert_json_from_path'] =
						Module['asm']['zf']).apply(null, arguments);
				});
			var ___errno_location = (Module['___errno_location'] = function () {
				return (___errno_location = Module['___errno_location'] = Module['asm']['Af']).apply(
					null,
					arguments
				);
			});
			var _htonl = (Module['_htonl'] = function () {
				return (_htonl = Module['_htonl'] = Module['asm']['Bf']).apply(null, arguments);
			});
			var _ntohs = (Module['_ntohs'] = function () {
				return (_ntohs = Module['_ntohs'] = Module['asm']['Cf']).apply(null, arguments);
			});
			var _htons = (Module['_htons'] = function () {
				return (_htons = Module['_htons'] = Module['asm']['Df']).apply(null, arguments);
			});
			var stackSave = (Module['stackSave'] = function () {
				return (stackSave = Module['stackSave'] = Module['asm']['Ef']).apply(null, arguments);
			});
			var stackRestore = (Module['stackRestore'] = function () {
				return (stackRestore = Module['stackRestore'] = Module['asm']['Ff']).apply(null, arguments);
			});
			var stackAlloc = (Module['stackAlloc'] = function () {
				return (stackAlloc = Module['stackAlloc'] = Module['asm']['Gf']).apply(null, arguments);
			});
			var _setThrew = (Module['_setThrew'] = function () {
				return (_setThrew = Module['_setThrew'] = Module['asm']['Hf']).apply(null, arguments);
			});
			var ___cxa_can_catch = (Module['___cxa_can_catch'] = function () {
				return (___cxa_can_catch = Module['___cxa_can_catch'] = Module['asm']['If']).apply(
					null,
					arguments
				);
			});
			var ___cxa_is_pointer_type = (Module['___cxa_is_pointer_type'] = function () {
				return (___cxa_is_pointer_type = Module['___cxa_is_pointer_type'] =
					Module['asm']['Jf']).apply(null, arguments);
			});
			var _malloc = (Module['_malloc'] = function () {
				return (_malloc = Module['_malloc'] = Module['asm']['Kf']).apply(null, arguments);
			});
			var _free = (Module['_free'] = function () {
				return (_free = Module['_free'] = Module['asm']['Lf']).apply(null, arguments);
			});
			var dynCall_viiij = (Module['dynCall_viiij'] = function () {
				return (dynCall_viiij = Module['dynCall_viiij'] = Module['asm']['Mf']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiijjj = (Module['dynCall_viiijjj'] = function () {
				return (dynCall_viiijjj = Module['dynCall_viiijjj'] = Module['asm']['Nf']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiij = (Module['dynCall_iiij'] = function () {
				return (dynCall_iiij = Module['dynCall_iiij'] = Module['asm']['Of']).apply(null, arguments);
			});
			var dynCall_vijijj = (Module['dynCall_vijijj'] = function () {
				return (dynCall_vijijj = Module['dynCall_vijijj'] = Module['asm']['Pf']).apply(
					null,
					arguments
				);
			});
			var dynCall_iji = (Module['dynCall_iji'] = function () {
				return (dynCall_iji = Module['dynCall_iji'] = Module['asm']['Qf']).apply(null, arguments);
			});
			var dynCall_viji = (Module['dynCall_viji'] = function () {
				return (dynCall_viji = Module['dynCall_viji'] = Module['asm']['Rf']).apply(null, arguments);
			});
			var dynCall_vij = (Module['dynCall_vij'] = function () {
				return (dynCall_vij = Module['dynCall_vij'] = Module['asm']['Sf']).apply(null, arguments);
			});
			var dynCall_viijj = (Module['dynCall_viijj'] = function () {
				return (dynCall_viijj = Module['dynCall_viijj'] = Module['asm']['Tf']).apply(
					null,
					arguments
				);
			});
			var dynCall_ji = (Module['dynCall_ji'] = function () {
				return (dynCall_ji = Module['dynCall_ji'] = Module['asm']['Uf']).apply(null, arguments);
			});
			var dynCall_viiijj = (Module['dynCall_viiijj'] = function () {
				return (dynCall_viiijj = Module['dynCall_viiijj'] = Module['asm']['Vf']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijjj = (Module['dynCall_vijjj'] = function () {
				return (dynCall_vijjj = Module['dynCall_vijjj'] = Module['asm']['Wf']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiij = (Module['dynCall_viiiij'] = function () {
				return (dynCall_viiiij = Module['dynCall_viiiij'] = Module['asm']['Xf']).apply(
					null,
					arguments
				);
			});
			var dynCall_jii = (Module['dynCall_jii'] = function () {
				return (dynCall_jii = Module['dynCall_jii'] = Module['asm']['Yf']).apply(null, arguments);
			});
			var dynCall_jiiii = (Module['dynCall_jiiii'] = function () {
				return (dynCall_jiiii = Module['dynCall_jiiii'] = Module['asm']['Zf']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiij = (Module['dynCall_iiiiij'] = function () {
				return (dynCall_iiiiij = Module['dynCall_iiiiij'] = Module['asm']['_f']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiijj = (Module['dynCall_iiiiijj'] = function () {
				return (dynCall_iiiiijj = Module['dynCall_iiiiijj'] = Module['asm']['$f']).apply(
					null,
					arguments
				);
			});
			var dynCall_iij = (Module['dynCall_iij'] = function () {
				return (dynCall_iij = Module['dynCall_iij'] = Module['asm']['ag']).apply(null, arguments);
			});
			var dynCall_viijii = (Module['dynCall_viijii'] = function () {
				return (dynCall_viijii = Module['dynCall_viijii'] = Module['asm']['bg']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiji = (Module['dynCall_viiji'] = function () {
				return (dynCall_viiji = Module['dynCall_viiji'] = Module['asm']['cg']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijj = (Module['dynCall_vijj'] = function () {
				return (dynCall_vijj = Module['dynCall_vijj'] = Module['asm']['dg']).apply(null, arguments);
			});
			var dynCall_vj = (Module['dynCall_vj'] = function () {
				return (dynCall_vj = Module['dynCall_vj'] = Module['asm']['eg']).apply(null, arguments);
			});
			var dynCall_iiji = (Module['dynCall_iiji'] = function () {
				return (dynCall_iiji = Module['dynCall_iiji'] = Module['asm']['fg']).apply(null, arguments);
			});
			var dynCall_viij = (Module['dynCall_viij'] = function () {
				return (dynCall_viij = Module['dynCall_viij'] = Module['asm']['gg']).apply(null, arguments);
			});
			var dynCall_jiji = (Module['dynCall_jiji'] = function () {
				return (dynCall_jiji = Module['dynCall_jiji'] = Module['asm']['hg']).apply(null, arguments);
			});
			var dynCall_iiiij = (Module['dynCall_iiiij'] = function () {
				return (dynCall_iiiij = Module['dynCall_iiiij'] = Module['asm']['ig']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiiji = (Module['dynCall_iiiiiji'] = function () {
				return (dynCall_iiiiiji = Module['dynCall_iiiiiji'] = Module['asm']['jg']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiji = (Module['dynCall_iiiji'] = function () {
				return (dynCall_iiiji = Module['dynCall_iiiji'] = Module['asm']['kg']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiji = (Module['dynCall_iiiiji'] = function () {
				return (dynCall_iiiiji = Module['dynCall_iiiiji'] = Module['asm']['lg']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiii = (Module['dynCall_jiii'] = function () {
				return (dynCall_jiii = Module['dynCall_jiii'] = Module['asm']['mg']).apply(null, arguments);
			});
			var dynCall_jij = (Module['dynCall_jij'] = function () {
				return (dynCall_jij = Module['dynCall_jij'] = Module['asm']['ng']).apply(null, arguments);
			});
			var dynCall_j = (Module['dynCall_j'] = function () {
				return (dynCall_j = Module['dynCall_j'] = Module['asm']['og']).apply(null, arguments);
			});
			var dynCall_viijij = (Module['dynCall_viijij'] = function () {
				return (dynCall_viijij = Module['dynCall_viijij'] = Module['asm']['pg']).apply(
					null,
					arguments
				);
			});
			var dynCall_iijjijj = (Module['dynCall_iijjijj'] = function () {
				return (dynCall_iijjijj = Module['dynCall_iijjijj'] = Module['asm']['qg']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiijiiiii = (Module['dynCall_viiiijiiiii'] = function () {
				return (dynCall_viiiijiiiii = Module['dynCall_viiiijiiiii'] = Module['asm']['rg']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiijiiii = (Module['dynCall_viiiijiiii'] = function () {
				return (dynCall_viiiijiiii = Module['dynCall_viiiijiiii'] = Module['asm']['sg']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiijii = (Module['dynCall_viiijii'] = function () {
				return (dynCall_viiijii = Module['dynCall_viiijii'] = Module['asm']['tg']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiiiij = (Module['dynCall_viiiiiij'] = function () {
				return (dynCall_viiiiiij = Module['dynCall_viiiiiij'] = Module['asm']['ug']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiijiii = (Module['dynCall_iiijiii'] = function () {
				return (dynCall_iiijiii = Module['dynCall_iiijiii'] = Module['asm']['vg']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiijii = (Module['dynCall_iiiiijii'] = function () {
				return (dynCall_iiiiijii = Module['dynCall_iiiiijii'] = Module['asm']['wg']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijiii = (Module['dynCall_viijiii'] = function () {
				return (dynCall_viijiii = Module['dynCall_viijiii'] = Module['asm']['xg']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiijiij = (Module['dynCall_iiijiij'] = function () {
				return (dynCall_iiijiij = Module['dynCall_iiijiij'] = Module['asm']['yg']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijiii = (Module['dynCall_vijiii'] = function () {
				return (dynCall_vijiii = Module['dynCall_vijiii'] = Module['asm']['zg']).apply(
					null,
					arguments
				);
			});
			var dynCall_iijjiii = (Module['dynCall_iijjiii'] = function () {
				return (dynCall_iijjiii = Module['dynCall_iijjiii'] = Module['asm']['Ag']).apply(
					null,
					arguments
				);
			});
			var dynCall_iijjiiii = (Module['dynCall_iijjiiii'] = function () {
				return (dynCall_iijjiiii = Module['dynCall_iijjiiii'] = Module['asm']['Bg']).apply(
					null,
					arguments
				);
			});
			var dynCall_iijji = (Module['dynCall_iijji'] = function () {
				return (dynCall_iijji = Module['dynCall_iijji'] = Module['asm']['Cg']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijiiii = (Module['dynCall_vijiiii'] = function () {
				return (dynCall_vijiiii = Module['dynCall_vijiiii'] = Module['asm']['Dg']).apply(
					null,
					arguments
				);
			});
			var dynCall_iijiiii = (Module['dynCall_iijiiii'] = function () {
				return (dynCall_iijiiii = Module['dynCall_iijiiii'] = Module['asm']['Eg']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijij = (Module['dynCall_vijij'] = function () {
				return (dynCall_vijij = Module['dynCall_vijij'] = Module['asm']['Fg']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiijjjj = (Module['dynCall_iiijjjj'] = function () {
				return (dynCall_iiijjjj = Module['dynCall_iiijjjj'] = Module['asm']['Gg']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiijiiii = (Module['dynCall_iiijiiii'] = function () {
				return (dynCall_iiijiiii = Module['dynCall_iiijiiii'] = Module['asm']['Hg']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiiij = (Module['dynCall_jiiij'] = function () {
				return (dynCall_jiiij = Module['dynCall_jiiij'] = Module['asm']['Ig']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiijjiijj = (Module['dynCall_iiiiijjiijj'] = function () {
				return (dynCall_iiiiijjiijj = Module['dynCall_iiiiijjiijj'] = Module['asm']['Jg']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijiiji = (Module['dynCall_viijiiji'] = function () {
				return (dynCall_viijiiji = Module['dynCall_viijiiji'] = Module['asm']['Kg']).apply(
					null,
					arguments
				);
			});
			var dynCall_vjjijij = (Module['dynCall_vjjijij'] = function () {
				return (dynCall_vjjijij = Module['dynCall_vjjijij'] = Module['asm']['Lg']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijjji = (Module['dynCall_vijjji'] = function () {
				return (dynCall_vijjji = Module['dynCall_vijjji'] = Module['asm']['Mg']).apply(
					null,
					arguments
				);
			});
			var dynCall_vjjii = (Module['dynCall_vjjii'] = function () {
				return (dynCall_vjjii = Module['dynCall_vjjii'] = Module['asm']['Ng']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiiiji = (Module['dynCall_viiiiiji'] = function () {
				return (dynCall_viiiiiji = Module['dynCall_viiiiiji'] = Module['asm']['Og']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiiiji = (Module['dynCall_jiiiji'] = function () {
				return (dynCall_jiiiji = Module['dynCall_jiiiji'] = Module['asm']['Pg']).apply(
					null,
					arguments
				);
			});
			var dynCall_iijj = (Module['dynCall_iijj'] = function () {
				return (dynCall_iijj = Module['dynCall_iijj'] = Module['asm']['Qg']).apply(null, arguments);
			});
			var dynCall_iiijjii = (Module['dynCall_iiijjii'] = function () {
				return (dynCall_iiijjii = Module['dynCall_iiijjii'] = Module['asm']['Rg']).apply(
					null,
					arguments
				);
			});
			var dynCall_iijjii = (Module['dynCall_iijjii'] = function () {
				return (dynCall_iijjii = Module['dynCall_iijjii'] = Module['asm']['Sg']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijii = (Module['dynCall_vijii'] = function () {
				return (dynCall_vijii = Module['dynCall_vijii'] = Module['asm']['Tg']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijjii = (Module['dynCall_viijjii'] = function () {
				return (dynCall_viijjii = Module['dynCall_viijjii'] = Module['asm']['Ug']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiijj = (Module['dynCall_viiiijj'] = function () {
				return (dynCall_viiiijj = Module['dynCall_viiiijj'] = Module['asm']['Vg']).apply(
					null,
					arguments
				);
			});
			var dynCall_jijjij = (Module['dynCall_jijjij'] = function () {
				return (dynCall_jijjij = Module['dynCall_jijjij'] = Module['asm']['Wg']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiijii = (Module['dynCall_jiijii'] = function () {
				return (dynCall_jiijii = Module['dynCall_jiijii'] = Module['asm']['Xg']).apply(
					null,
					arguments
				);
			});
			var dynCall_jijiii = (Module['dynCall_jijiii'] = function () {
				return (dynCall_jijiii = Module['dynCall_jijiii'] = Module['asm']['Yg']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijiiiii = (Module['dynCall_viijiiiii'] = function () {
				return (dynCall_viijiiiii = Module['dynCall_viijiiiii'] = Module['asm']['Zg']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijiiij = (Module['dynCall_viijiiij'] = function () {
				return (dynCall_viijiiij = Module['dynCall_viijiiij'] = Module['asm']['_g']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijiiiji = (Module['dynCall_vijiiiji'] = function () {
				return (dynCall_vijiiiji = Module['dynCall_vijiiiji'] = Module['asm']['$g']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiiji = (Module['dynCall_jiiji'] = function () {
				return (dynCall_jiiji = Module['dynCall_jiiji'] = Module['asm']['ah']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiijij = (Module['dynCall_viiijij'] = function () {
				return (dynCall_viiijij = Module['dynCall_viiijij'] = Module['asm']['bh']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijiij = (Module['dynCall_viijiij'] = function () {
				return (dynCall_viijiij = Module['dynCall_viijiij'] = Module['asm']['ch']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiiijj = (Module['dynCall_viiiiijj'] = function () {
				return (dynCall_viiiiijj = Module['dynCall_viiiiijj'] = Module['asm']['dh']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiijji = (Module['dynCall_viiijji'] = function () {
				return (dynCall_viiijji = Module['dynCall_viiijji'] = Module['asm']['eh']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiji = (Module['dynCall_viiiji'] = function () {
				return (dynCall_viiiji = Module['dynCall_viiiji'] = Module['asm']['fh']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiijiii = (Module['dynCall_iiiijiii'] = function () {
				return (dynCall_iiiijiii = Module['dynCall_iiiijiii'] = Module['asm']['gh']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiijij = (Module['dynCall_iiijij'] = function () {
				return (dynCall_iiijij = Module['dynCall_iiijij'] = Module['asm']['hh']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiijji = (Module['dynCall_iiijji'] = function () {
				return (dynCall_iiijji = Module['dynCall_iiijji'] = Module['asm']['ih']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijji = (Module['dynCall_viijji'] = function () {
				return (dynCall_viijji = Module['dynCall_viijji'] = Module['asm']['jh']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiijj = (Module['dynCall_iiiijj'] = function () {
				return (dynCall_iiiijj = Module['dynCall_iiiijj'] = Module['asm']['kh']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiijiii = (Module['dynCall_viiijiii'] = function () {
				return (dynCall_viiijiii = Module['dynCall_viiijiii'] = Module['asm']['lh']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijji = (Module['dynCall_vijji'] = function () {
				return (dynCall_vijji = Module['dynCall_vijji'] = Module['asm']['mh']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiiiij = (Module['dynCall_jiiiij'] = function () {
				return (dynCall_jiiiij = Module['dynCall_jiiiij'] = Module['asm']['nh']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiijiiiii = (Module['dynCall_jiijiiiii'] = function () {
				return (dynCall_jiijiiiii = Module['dynCall_jiijiiiii'] = Module['asm']['oh']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiijiijiii = (Module['dynCall_jiijiijiii'] = function () {
				return (dynCall_jiijiijiii = Module['dynCall_jiijiijiii'] = Module['asm']['ph']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiijjiii = (Module['dynCall_jiijjiii'] = function () {
				return (dynCall_jiijjiii = Module['dynCall_jiijjiii'] = Module['asm']['qh']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiijijii = (Module['dynCall_jiijijii'] = function () {
				return (dynCall_jiijijii = Module['dynCall_jiijijii'] = Module['asm']['rh']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiijjij = (Module['dynCall_viiijjij'] = function () {
				return (dynCall_viiijjij = Module['dynCall_viiijjij'] = Module['asm']['sh']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijijjiij = (Module['dynCall_vijijjiij'] = function () {
				return (dynCall_vijijjiij = Module['dynCall_vijijjiij'] = Module['asm']['th']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijjij = (Module['dynCall_viijjij'] = function () {
				return (dynCall_viijjij = Module['dynCall_viijjij'] = Module['asm']['uh']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiijjiij = (Module['dynCall_viiijjiij'] = function () {
				return (dynCall_viiijjiij = Module['dynCall_viiijjiij'] = Module['asm']['vh']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiijjjj = (Module['dynCall_viiiijjjj'] = function () {
				return (dynCall_viiiijjjj = Module['dynCall_viiiijjjj'] = Module['asm']['wh']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijiiiiij = (Module['dynCall_viijiiiiij'] = function () {
				return (dynCall_viijiiiiij = Module['dynCall_viijiiiiij'] = Module['asm']['xh']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijiiiijj = (Module['dynCall_viijiiiijj'] = function () {
				return (dynCall_viijiiiijj = Module['dynCall_viijiiiijj'] = Module['asm']['yh']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiijiiiijjj = (Module['dynCall_viiijiiiijjj'] = function () {
				return (dynCall_viiijiiiijjj = Module['dynCall_viiijiiiijjj'] = Module['asm']['zh']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijijiiiijjj = (Module['dynCall_viijijiiiijjj'] = function () {
				return (dynCall_viijijiiiijjj = Module['dynCall_viijijiiiijjj'] =
					Module['asm']['Ah']).apply(null, arguments);
			});
			var dynCall_jiiijii = (Module['dynCall_jiiijii'] = function () {
				return (dynCall_jiiijii = Module['dynCall_jiiijii'] = Module['asm']['Bh']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiiijiiii = (Module['dynCall_viiiiijiiii'] = function () {
				return (dynCall_viiiiijiiii = Module['dynCall_viiiiijiiii'] = Module['asm']['Ch']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiijii = (Module['dynCall_iiijii'] = function () {
				return (dynCall_iiijii = Module['dynCall_iiijii'] = Module['asm']['Dh']).apply(
					null,
					arguments
				);
			});
			var dynCall_fiijii = (Module['dynCall_fiijii'] = function () {
				return (dynCall_fiijii = Module['dynCall_fiijii'] = Module['asm']['Eh']).apply(
					null,
					arguments
				);
			});
			var dynCall_diijii = (Module['dynCall_diijii'] = function () {
				return (dynCall_diijii = Module['dynCall_diijii'] = Module['asm']['Fh']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiiiijii = (Module['dynCall_iiiiiiijii'] = function () {
				return (dynCall_iiiiiiijii = Module['dynCall_iiiiiiijii'] = Module['asm']['Gh']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiiji = (Module['dynCall_viiiiji'] = function () {
				return (dynCall_viiiiji = Module['dynCall_viiiiji'] = Module['asm']['Hh']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiiiijii = (Module['dynCall_jiiiijii'] = function () {
				return (dynCall_jiiiijii = Module['dynCall_jiiiijii'] = Module['asm']['Ih']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiiiijiiiiiiii = (Module['dynCall_jiiiijiiiiiiii'] = function () {
				return (dynCall_jiiiijiiiiiiii = Module['dynCall_jiiiijiiiiiiii'] =
					Module['asm']['Jh']).apply(null, arguments);
			});
			var dynCall_jiiiiijiiii = (Module['dynCall_jiiiiijiiii'] = function () {
				return (dynCall_jiiiiijiiii = Module['dynCall_jiiiiijiiii'] = Module['asm']['Kh']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiiijiii = (Module['dynCall_jiiijiii'] = function () {
				return (dynCall_jiiijiii = Module['dynCall_jiiijiii'] = Module['asm']['Lh']).apply(
					null,
					arguments
				);
			});
			var dynCall_jj = (Module['dynCall_jj'] = function () {
				return (dynCall_jj = Module['dynCall_jj'] = Module['asm']['Mh']).apply(null, arguments);
			});
			var dynCall_jd = (Module['dynCall_jd'] = function () {
				return (dynCall_jd = Module['dynCall_jd'] = Module['asm']['Nh']).apply(null, arguments);
			});
			var dynCall_jf = (Module['dynCall_jf'] = function () {
				return (dynCall_jf = Module['dynCall_jf'] = Module['asm']['Oh']).apply(null, arguments);
			});
			var dynCall_iijjj = (Module['dynCall_iijjj'] = function () {
				return (dynCall_iijjj = Module['dynCall_iijjj'] = Module['asm']['Ph']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiijj = (Module['dynCall_iiijj'] = function () {
				return (dynCall_iiijj = Module['dynCall_iiijj'] = Module['asm']['Qh']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijijiiiijjj = (Module['dynCall_vijijiiiijjj'] = function () {
				return (dynCall_vijijiiiijjj = Module['dynCall_vijijiiiijjj'] = Module['asm']['Rh']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiiiji = (Module['dynCall_iiiiiiji'] = function () {
				return (dynCall_iiiiiiji = Module['dynCall_iiiiiiji'] = Module['asm']['Sh']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiiiiiji = (Module['dynCall_iiiiiiiiji'] = function () {
				return (dynCall_iiiiiiiiji = Module['dynCall_iiiiiiiiji'] = Module['asm']['Th']).apply(
					null,
					arguments
				);
			});
			var dynCall_jijijjij = (Module['dynCall_jijijjij'] = function () {
				return (dynCall_jijijjij = Module['dynCall_jijijjij'] = Module['asm']['Uh']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijjj = (Module['dynCall_viijjj'] = function () {
				return (dynCall_viijjj = Module['dynCall_viijjj'] = Module['asm']['Vh']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijjij = (Module['dynCall_vijjij'] = function () {
				return (dynCall_vijjij = Module['dynCall_vijjij'] = Module['asm']['Wh']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijjji = (Module['dynCall_viijjji'] = function () {
				return (dynCall_viijjji = Module['dynCall_viijjji'] = Module['asm']['Xh']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiiij = (Module['dynCall_iiiiiij'] = function () {
				return (dynCall_iiiiiij = Module['dynCall_iiiiiij'] = Module['asm']['Yh']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiiiiiiiji = (Module['dynCall_iiiiiiiiiiji'] = function () {
				return (dynCall_iiiiiiiiiiji = Module['dynCall_iiiiiiiiiiji'] = Module['asm']['Zh']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiiiiiii = (Module['dynCall_jiiiiiii'] = function () {
				return (dynCall_jiiiiiii = Module['dynCall_jiiiiiii'] = Module['asm']['_h']).apply(
					null,
					arguments
				);
			});
			var dynCall_jijj = (Module['dynCall_jijj'] = function () {
				return (dynCall_jijj = Module['dynCall_jijj'] = Module['asm']['$h']).apply(null, arguments);
			});
			var dynCall_viiiijiiiiiiii = (Module['dynCall_viiiijiiiiiiii'] = function () {
				return (dynCall_viiiijiiiiiiii = Module['dynCall_viiiijiiiiiiii'] =
					Module['asm']['ai']).apply(null, arguments);
			});
			var dynCall_ij = (Module['dynCall_ij'] = function () {
				return (dynCall_ij = Module['dynCall_ij'] = Module['asm']['bi']).apply(null, arguments);
			});
			var dynCall_jjj = (Module['dynCall_jjj'] = function () {
				return (dynCall_jjj = Module['dynCall_jjj'] = Module['asm']['ci']).apply(null, arguments);
			});
			var dynCall_vjii = (Module['dynCall_vjii'] = function () {
				return (dynCall_vjii = Module['dynCall_vjii'] = Module['asm']['di']).apply(null, arguments);
			});
			var dynCall_vjiiii = (Module['dynCall_vjiiii'] = function () {
				return (dynCall_vjiiii = Module['dynCall_vjiiii'] = Module['asm']['ei']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiiijiii = (Module['dynCall_viiiiijiii'] = function () {
				return (dynCall_viiiiijiii = Module['dynCall_viiiiijiii'] = Module['asm']['fi']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiij = (Module['dynCall_jiij'] = function () {
				return (dynCall_jiij = Module['dynCall_jiij'] = Module['asm']['gi']).apply(null, arguments);
			});
			var dynCall_iiiijjii = (Module['dynCall_iiiijjii'] = function () {
				return (dynCall_iiiijjii = Module['dynCall_iiiijjii'] = Module['asm']['hi']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiijji = (Module['dynCall_iiiiijji'] = function () {
				return (dynCall_iiiiijji = Module['dynCall_iiiiijji'] = Module['asm']['ii']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiijjii = (Module['dynCall_viiijjii'] = function () {
				return (dynCall_viiijjii = Module['dynCall_viiijjii'] = Module['asm']['ji']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiijji = (Module['dynCall_viiiijji'] = function () {
				return (dynCall_viiiijji = Module['dynCall_viiiijji'] = Module['asm']['ki']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiijjii = (Module['dynCall_viiiijjii'] = function () {
				return (dynCall_viiiijjii = Module['dynCall_viiiijjii'] = Module['asm']['li']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiiijji = (Module['dynCall_viiiiijji'] = function () {
				return (dynCall_viiiiijji = Module['dynCall_viiiiijji'] = Module['asm']['mi']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiijjj = (Module['dynCall_iiiiijjj'] = function () {
				return (dynCall_iiiiijjj = Module['dynCall_iiiiijjj'] = Module['asm']['ni']).apply(
					null,
					arguments
				);
			});
			var dynCall_jijiiii = (Module['dynCall_jijiiii'] = function () {
				return (dynCall_jijiiii = Module['dynCall_jijiiii'] = Module['asm']['oi']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiijjjii = (Module['dynCall_iiijjjii'] = function () {
				return (dynCall_iiijjjii = Module['dynCall_iiijjjii'] = Module['asm']['pi']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiijjji = (Module['dynCall_iiiiijjji'] = function () {
				return (dynCall_iiiiijjji = Module['dynCall_iiiiijjji'] = Module['asm']['qi']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiijjj = (Module['dynCall_iiiijjj'] = function () {
				return (dynCall_iiiijjj = Module['dynCall_iiiijjj'] = Module['asm']['ri']).apply(
					null,
					arguments
				);
			});
			var dynCall_iidj = (Module['dynCall_iidj'] = function () {
				return (dynCall_iidj = Module['dynCall_iidj'] = Module['asm']['si']).apply(null, arguments);
			});
			var dynCall_ijji = (Module['dynCall_ijji'] = function () {
				return (dynCall_ijji = Module['dynCall_ijji'] = Module['asm']['ti']).apply(null, arguments);
			});
			var dynCall_iiiiiiiij = (Module['dynCall_iiiiiiiij'] = function () {
				return (dynCall_iiiiiiiij = Module['dynCall_iiiiiiiij'] = Module['asm']['ui']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiiiij = (Module['dynCall_iiiiiiij'] = function () {
				return (dynCall_iiiiiiij = Module['dynCall_iiiiiiij'] = Module['asm']['vi']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiiiiiiiiiij = (Module['dynCall_iiiiiiiiiiiij'] = function () {
				return (dynCall_iiiiiiiiiiiij = Module['dynCall_iiiiiiiiiiiij'] =
					Module['asm']['wi']).apply(null, arguments);
			});
			var dynCall_iiiiiiiji = (Module['dynCall_iiiiiiiji'] = function () {
				return (dynCall_iiiiiiiji = Module['dynCall_iiiiiiiji'] = Module['asm']['xi']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiidjj = (Module['dynCall_iiiidjj'] = function () {
				return (dynCall_iiiidjj = Module['dynCall_iiiidjj'] = Module['asm']['yi']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiiiii = (Module['dynCall_jiiiii'] = function () {
				return (dynCall_jiiiii = Module['dynCall_jiiiii'] = Module['asm']['zi']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiiiiiijii = (Module['dynCall_jiiiiiijii'] = function () {
				return (dynCall_jiiiiiijii = Module['dynCall_jiiiiiijii'] = Module['asm']['Ai']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiijji = (Module['dynCall_iiiijji'] = function () {
				return (dynCall_iiiijji = Module['dynCall_iiiijji'] = Module['asm']['Bi']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiiiiii = (Module['dynCall_jiiiiii'] = function () {
				return (dynCall_jiiiiii = Module['dynCall_jiiiiii'] = Module['asm']['Ci']).apply(
					null,
					arguments
				);
			});
			var dynCall_iijiji = (Module['dynCall_iijiji'] = function () {
				return (dynCall_iijiji = Module['dynCall_iijiji'] = Module['asm']['Di']).apply(
					null,
					arguments
				);
			});
			var dynCall_vjiiiji = (Module['dynCall_vjiiiji'] = function () {
				return (dynCall_vjiiiji = Module['dynCall_vjiiiji'] = Module['asm']['Ei']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiijijiji = (Module['dynCall_viiijijiji'] = function () {
				return (dynCall_viiijijiji = Module['dynCall_viiijijiji'] = Module['asm']['Fi']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiiijj = (Module['dynCall_jiiijj'] = function () {
				return (dynCall_jiiijj = Module['dynCall_jiiijj'] = Module['asm']['Gi']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiiijii = (Module['dynCall_iiiijii'] = function () {
				return (dynCall_iiiijii = Module['dynCall_iiiijii'] = Module['asm']['Hi']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiijii = (Module['dynCall_viiiijii'] = function () {
				return (dynCall_viiiijii = Module['dynCall_viiiijii'] = Module['asm']['Ii']).apply(
					null,
					arguments
				);
			});
			var dynCall_iijiii = (Module['dynCall_iijiii'] = function () {
				return (dynCall_iijiii = Module['dynCall_iijiii'] = Module['asm']['Ji']).apply(
					null,
					arguments
				);
			});
			var dynCall_jiiiiji = (Module['dynCall_jiiiiji'] = function () {
				return (dynCall_jiiiiji = Module['dynCall_jiiiiji'] = Module['asm']['Ki']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijiijj = (Module['dynCall_vijiijj'] = function () {
				return (dynCall_vijiijj = Module['dynCall_vijiijj'] = Module['asm']['Li']).apply(
					null,
					arguments
				);
			});
			var dynCall_vifiijj = (Module['dynCall_vifiijj'] = function () {
				return (dynCall_vifiijj = Module['dynCall_vifiijj'] = Module['asm']['Mi']).apply(
					null,
					arguments
				);
			});
			var dynCall_vidiijj = (Module['dynCall_vidiijj'] = function () {
				return (dynCall_vidiijj = Module['dynCall_vidiijj'] = Module['asm']['Ni']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiiij = (Module['dynCall_viiiiij'] = function () {
				return (dynCall_viiiiij = Module['dynCall_viiiiij'] = Module['asm']['Oi']).apply(
					null,
					arguments
				);
			});
			var dynCall_ijj = (Module['dynCall_ijj'] = function () {
				return (dynCall_ijj = Module['dynCall_ijj'] = Module['asm']['Pi']).apply(null, arguments);
			});
			var dynCall_ijjiii = (Module['dynCall_ijjiii'] = function () {
				return (dynCall_ijjiii = Module['dynCall_ijjiii'] = Module['asm']['Qi']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijijjji = (Module['dynCall_vijijjji'] = function () {
				return (dynCall_vijijjji = Module['dynCall_vijijjji'] = Module['asm']['Ri']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijiijj = (Module['dynCall_viijiijj'] = function () {
				return (dynCall_viijiijj = Module['dynCall_viijiijj'] = Module['asm']['Si']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijijj = (Module['dynCall_viijijj'] = function () {
				return (dynCall_viijijj = Module['dynCall_viijijj'] = Module['asm']['Ti']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiiijjji = (Module['dynCall_viiiiijjji'] = function () {
				return (dynCall_viiiiijjji = Module['dynCall_viiiiijjji'] = Module['asm']['Ui']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiijiijj = (Module['dynCall_iiijiijj'] = function () {
				return (dynCall_iiijiijj = Module['dynCall_iiijiijj'] = Module['asm']['Vi']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiijijjj = (Module['dynCall_viiijijjj'] = function () {
				return (dynCall_viiijijjj = Module['dynCall_viiijijjj'] = Module['asm']['Wi']).apply(
					null,
					arguments
				);
			});
			var dynCall_iijiijj = (Module['dynCall_iijiijj'] = function () {
				return (dynCall_iijiijj = Module['dynCall_iijiijj'] = Module['asm']['Xi']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiijjjji = (Module['dynCall_viiijjjji'] = function () {
				return (dynCall_viiijjjji = Module['dynCall_viiijjjji'] = Module['asm']['Yi']).apply(
					null,
					arguments
				);
			});
			var dynCall_viiiijiii = (Module['dynCall_viiiijiii'] = function () {
				return (dynCall_viiiijiii = Module['dynCall_viiiijiii'] = Module['asm']['Zi']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijiiii = (Module['dynCall_viijiiii'] = function () {
				return (dynCall_viijiiii = Module['dynCall_viijiiii'] = Module['asm']['_i']).apply(
					null,
					arguments
				);
			});
			var dynCall_iijii = (Module['dynCall_iijii'] = function () {
				return (dynCall_iijii = Module['dynCall_iijii'] = Module['asm']['$i']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijjiiii = (Module['dynCall_vijjiiii'] = function () {
				return (dynCall_vijjiiii = Module['dynCall_vijjiiii'] = Module['asm']['aj']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijijjiiiii = (Module['dynCall_vijijjiiiii'] = function () {
				return (dynCall_vijijjiiiii = Module['dynCall_vijijjiiiii'] = Module['asm']['bj']).apply(
					null,
					arguments
				);
			});
			var dynCall_vijjiiiii = (Module['dynCall_vijjiiiii'] = function () {
				return (dynCall_vijjiiiii = Module['dynCall_vijjiiiii'] = Module['asm']['cj']).apply(
					null,
					arguments
				);
			});
			var dynCall_iiijjji = (Module['dynCall_iiijjji'] = function () {
				return (dynCall_iiijjji = Module['dynCall_iiijjji'] = Module['asm']['dj']).apply(
					null,
					arguments
				);
			});
			var dynCall_viijiji = (Module['dynCall_viijiji'] = function () {
				return (dynCall_viijiji = Module['dynCall_viijiji'] = Module['asm']['ej']).apply(
					null,
					arguments
				);
			});
			function invoke_v(index) {
				var sp = stackSave();
				try {
					wasmTable.get(index)();
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vii(index, a1, a2) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_ii(index, a1) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iii(index, a1, a2) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vi(index, a1) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiii(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiii(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3, a4);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiii(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3, a4);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_fiii(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_diii(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viif(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viid(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viii(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iff(index, a1, a2) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_idd(index, a1, a2) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_i(index) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)();
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiiiiiiiiiiii(
				index,
				a1,
				a2,
				a3,
				a4,
				a5,
				a6,
				a7,
				a8,
				a9,
				a10,
				a11,
				a12,
				a13,
				a14,
				a15
			) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_idiii(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3, a4);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iidii(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3, a4);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viidii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vif(index, a1, a2) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vid(index, a1, a2) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_di(index, a1) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiid(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiid(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vifi(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vidi(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiiiiiiiiii(
				index,
				a1,
				a2,
				a3,
				a4,
				a5,
				a6,
				a7,
				a8,
				a9,
				a10,
				a11,
				a12,
				a13,
				a14
			) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiiiiiiiiii(
				index,
				a1,
				a2,
				a3,
				a4,
				a5,
				a6,
				a7,
				a8,
				a9,
				a10,
				a11,
				a12,
				a13
			) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_if(index, a1) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_id(index, a1) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiiiiiiiiiiiiiiii(
				index,
				a1,
				a2,
				a3,
				a4,
				a5,
				a6,
				a7,
				a8,
				a9,
				a10,
				a11,
				a12,
				a13,
				a14,
				a15,
				a16,
				a17,
				a18,
				a19,
				a20
			) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(
						a1,
						a2,
						a3,
						a4,
						a5,
						a6,
						a7,
						a8,
						a9,
						a10,
						a11,
						a12,
						a13,
						a14,
						a15,
						a16,
						a17,
						a18,
						a19,
						a20
					);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiiiiiiiiiiiiiii(
				index,
				a1,
				a2,
				a3,
				a4,
				a5,
				a6,
				a7,
				a8,
				a9,
				a10,
				a11,
				a12,
				a13,
				a14,
				a15,
				a16,
				a17,
				a18,
				a19
			) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(
						a1,
						a2,
						a3,
						a4,
						a5,
						a6,
						a7,
						a8,
						a9,
						a10,
						a11,
						a12,
						a13,
						a14,
						a15,
						a16,
						a17,
						a18,
						a19
					);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iid(index, a1, a2) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiiidiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_fi(index, a1) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_fff(index, a1, a2) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_ddd(index, a1, a2) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiif(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return wasmTable.get(index)(a1, a2, a3);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiidiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
				var sp = stackSave();
				try {
					wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiii(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_jiiii(index, a1, a2, a3, a4);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijj(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_viijj(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viij(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					dynCall_viij(index, a1, a2, a3, a4);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiij(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_iiiiij(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vij(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					dynCall_vij(index, a1, a2, a3);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiij(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_viiiij(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiij(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_viiij(index, a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_viiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiij(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_iiij(index, a1, a2, a3, a4);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijijj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_vijijj(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iji(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return dynCall_iji(index, a1, a2, a3);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viji(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					dynCall_viji(index, a1, a2, a3, a4);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_ji(index, a1) {
				var sp = stackSave();
				try {
					return dynCall_ji(index, a1);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiijj(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					dynCall_viiijj(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijjj(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					dynCall_vijjj(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijjj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_viijjj(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_iiiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jii(index, a1, a2) {
				var sp = stackSave();
				try {
					return dynCall_jii(index, a1, a2);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_ijj(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_ijj(index, a1, a2, a3, a4);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_ijjiii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_ijjiii(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_viijii(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiji(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_viiji(index, a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijj(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_vijj(index, a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iij(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return dynCall_iij(index, a1, a2, a3);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vj(index, a1, a2) {
				var sp = stackSave();
				try {
					dynCall_vj(index, a1, a2);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiji(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_iiji(index, a1, a2, a3, a4);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiij(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_iiiij(index, a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiijj(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_iiiijj(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiji(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					dynCall_viiiiji(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiijij(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_iiijij(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiji(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_iiiji(index, a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iijj(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_iijj(index, a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiijji(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_iiijji(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijji(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					dynCall_viijji(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_j(index) {
				var sp = stackSave();
				try {
					return dynCall_j(index);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiji(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiji(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiji(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_iiiiji(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiii(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return dynCall_jiii(index, a1, a2, a3);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijiii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_vijiii(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijiiii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					dynCall_vijiiii(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iijiiii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_iijiiii(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiijiii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_iiijiii(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_iiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijiii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					dynCall_viijiii(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiijiij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_iiijiij(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iijjiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_iijjiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iijjiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					return dynCall_iijjiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iijji(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_iijji(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_viiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiijii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					dynCall_viiijii(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iijjijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					return dynCall_iijjijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiijiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
				var sp = stackSave();
				try {
					dynCall_viiiijiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					dynCall_viiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vjjii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_vjjii(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiji(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_viiiji(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_viiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_iiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiijji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_viiijji(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jij(index, a1, a2, a3) {
				var sp = stackSave();
				try {
					return dynCall_jij(index, a1, a2, a3);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiij(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_jiiij(index, a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijjji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_vijjji(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vjjijij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					dynCall_vjjijij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiji(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_jiiji(index, a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_viijiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiiji(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_jiiiji(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijij(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_vijij(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiijjjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					return dynCall_iiijjjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_viiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiijjiijj(
				index,
				a1,
				a2,
				a3,
				a4,
				a5,
				a6,
				a7,
				a8,
				a9,
				a10,
				a11,
				a12,
				a13,
				a14
			) {
				var sp = stackSave();
				try {
					return dynCall_iiiiijjiijj(
						index,
						a1,
						a2,
						a3,
						a4,
						a5,
						a6,
						a7,
						a8,
						a9,
						a10,
						a11,
						a12,
						a13,
						a14
					);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_iiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iijjii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_iijjii(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijij(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					dynCall_viijij(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					dynCall_vijii(index, a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijjii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_viijjii(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiijii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_jiijii(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_viijiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_viijiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jijiii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_jijiii(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_vijiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jijjij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_jijjij(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijiij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_viijiij(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_iiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_viiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijji(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_vijji(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiiij(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_jiiiij(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiijjij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					dynCall_viiijjij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijijjiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
				var sp = stackSave();
				try {
					dynCall_vijijjiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijjij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_viijjij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiijjjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
				var sp = stackSave();
				try {
					dynCall_viiiijjjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiijiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					return dynCall_jiijiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiijiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
				var sp = stackSave();
				try {
					return dynCall_jiijiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiijjiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					return dynCall_jiijjiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiijijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					return dynCall_jiijijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
				var sp = stackSave();
				try {
					dynCall_viijiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijiiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
				var sp = stackSave();
				try {
					dynCall_viijiiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiijiiiijjj(
				index,
				a1,
				a2,
				a3,
				a4,
				a5,
				a6,
				a7,
				a8,
				a9,
				a10,
				a11,
				a12,
				a13,
				a14,
				a15
			) {
				var sp = stackSave();
				try {
					dynCall_viiijiiiijjj(
						index,
						a1,
						a2,
						a3,
						a4,
						a5,
						a6,
						a7,
						a8,
						a9,
						a10,
						a11,
						a12,
						a13,
						a14,
						a15
					);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijijiiiijjj(
				index,
				a1,
				a2,
				a3,
				a4,
				a5,
				a6,
				a7,
				a8,
				a9,
				a10,
				a11,
				a12,
				a13,
				a14,
				a15,
				a16,
				a17
			) {
				var sp = stackSave();
				try {
					dynCall_viijijiiiijjj(
						index,
						a1,
						a2,
						a3,
						a4,
						a5,
						a6,
						a7,
						a8,
						a9,
						a10,
						a11,
						a12,
						a13,
						a14,
						a15,
						a16,
						a17
					);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiijjiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
				var sp = stackSave();
				try {
					dynCall_viiijjiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiiii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_jiiiii(index, a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					return dynCall_jiiiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_iiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiijii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_jiiijii(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
				var sp = stackSave();
				try {
					dynCall_viiiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_jiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiijii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_iiijii(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_fiijii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_fiijii(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_diijii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_diijii(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiiijiiiiiiii(
				index,
				a1,
				a2,
				a3,
				a4,
				a5,
				a6,
				a7,
				a8,
				a9,
				a10,
				a11,
				a12,
				a13,
				a14
			) {
				var sp = stackSave();
				try {
					return dynCall_jiiiijiiiiiiii(
						index,
						a1,
						a2,
						a3,
						a4,
						a5,
						a6,
						a7,
						a8,
						a9,
						a10,
						a11,
						a12,
						a13,
						a14
					);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
				var sp = stackSave();
				try {
					return dynCall_jiiiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_jiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jj(index, a1, a2) {
				var sp = stackSave();
				try {
					return dynCall_jj(index, a1, a2);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jd(index, a1) {
				var sp = stackSave();
				try {
					return dynCall_jd(index, a1);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jf(index, a1) {
				var sp = stackSave();
				try {
					return dynCall_jf(index, a1);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiiiii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_jiiiiii(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_ijji(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_ijji(index, a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_viiiiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiijj(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_iiijj(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iijjj(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_iijjj(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijijiiiijjj(
				index,
				a1,
				a2,
				a3,
				a4,
				a5,
				a6,
				a7,
				a8,
				a9,
				a10,
				a11,
				a12,
				a13,
				a14,
				a15,
				a16
			) {
				var sp = stackSave();
				try {
					dynCall_vijijiiiijjj(
						index,
						a1,
						a2,
						a3,
						a4,
						a5,
						a6,
						a7,
						a8,
						a9,
						a10,
						a11,
						a12,
						a13,
						a14,
						a15,
						a16
					);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jijijjij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
				var sp = stackSave();
				try {
					return dynCall_jijijjij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijjij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_vijjij(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_viijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiij(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiij(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_jiiiiiii(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiiiiiiij(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiiiiiiij(
						index,
						a1,
						a2,
						a3,
						a4,
						a5,
						a6,
						a7,
						a8,
						a9,
						a10,
						a11,
						a12,
						a13
					);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					dynCall_viiiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_ij(index, a1, a2) {
				var sp = stackSave();
				try {
					return dynCall_ij(index, a1, a2);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiij(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_jiij(index, a1, a2, a3, a4);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vjiiii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					dynCall_vjiiii(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiijiiiiiiii(
				index,
				a1,
				a2,
				a3,
				a4,
				a5,
				a6,
				a7,
				a8,
				a9,
				a10,
				a11,
				a12,
				a13,
				a14
			) {
				var sp = stackSave();
				try {
					dynCall_viiiijiiiiiiii(
						index,
						a1,
						a2,
						a3,
						a4,
						a5,
						a6,
						a7,
						a8,
						a9,
						a10,
						a11,
						a12,
						a13,
						a14
					);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jjj(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_jjj(index, a1, a2, a3, a4);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vjii(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					dynCall_vjii(index, a1, a2, a3, a4);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					return dynCall_iiiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					return dynCall_iiiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_viiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_viiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					dynCall_viiiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					dynCall_viiiiijji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiijjjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					return dynCall_iiijjjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					return dynCall_iiiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jijiiii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_jijiiii(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
				var sp = stackSave();
				try {
					return dynCall_iiiiijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					return dynCall_iiiijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iidj(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_iidj(index, a1, a2, a3, a4);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					return dynCall_iiiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiidjj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					return dynCall_iiiidjj(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iijiji(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_iijiji(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vjiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_vjiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiji(index, a1, a2, a3, a4) {
				var sp = stackSave();
				try {
					return dynCall_jiji(index, a1, a2, a3, a4);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiijijiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
				var sp = stackSave();
				try {
					dynCall_viiijijiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiijij(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_viiijij(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiijj(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_jiiijj(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiiijii(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_iiiijii(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_viiiijii(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iijiii(index, a1, a2, a3, a4, a5, a6) {
				var sp = stackSave();
				try {
					return dynCall_iijiii(index, a1, a2, a3, a4, a5, a6);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jiiiiji(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					return dynCall_jiiiiji(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_vijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vifiijj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_vifiijj(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vidiijj(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_vidiijj(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiij(index, a1, a2, a3, a4, a5, a6, a7) {
				var sp = stackSave();
				try {
					dynCall_viiiiij(index, a1, a2, a3, a4, a5, a6, a7);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
				var sp = stackSave();
				try {
					dynCall_vijijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_jijj(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_jijj(index, a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_viijijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					return dynCall_iiijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					dynCall_viijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiiijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
				var sp = stackSave();
				try {
					dynCall_viiiiijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiijijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
				var sp = stackSave();
				try {
					dynCall_viiijijjj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					return dynCall_iijiijj(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iiijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					return dynCall_iiijjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiijjjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
				var sp = stackSave();
				try {
					dynCall_viiijjjji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_viiiijiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_viijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_iijii(index, a1, a2, a3, a4, a5) {
				var sp = stackSave();
				try {
					return dynCall_iijii(index, a1, a2, a3, a4, a5);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_viijiji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
				var sp = stackSave();
				try {
					dynCall_viijiji(index, a1, a2, a3, a4, a5, a6, a7, a8);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijijjiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
				var sp = stackSave();
				try {
					dynCall_vijijjiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijjiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
				var sp = stackSave();
				try {
					dynCall_vijjiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			function invoke_vijjiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
				var sp = stackSave();
				try {
					dynCall_vijjiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
				} catch (e) {
					stackRestore(sp);
					if (e !== e + 0 && e !== 'longjmp') throw e;
					_setThrew(1, 0);
				}
			}
			Module['ccall'] = ccall;
			var calledRun;
			function ExitStatus(status) {
				this.name = 'ExitStatus';
				this.message = 'Program terminated with exit(' + status + ')';
				this.status = status;
			}
			var calledMain = false;
			dependenciesFulfilled = function runCaller() {
				if (!calledRun) run();
				if (!calledRun) dependenciesFulfilled = runCaller;
			};
			function callMain(args) {
				var entryFunction = Module['_main'];
				var argc = 0;
				var argv = 0;
				try {
					var ret = entryFunction(argc, argv);
					exit(ret, true);
					return ret;
				} catch (e) {
					return handleException(e);
				} finally {
					calledMain = true;
				}
			}
			function run(args) {
				args = args || arguments_;
				if (runDependencies > 0) {
					return;
				}
				preRun();
				if (runDependencies > 0) {
					return;
				}
				function doRun() {
					if (calledRun) return;
					calledRun = true;
					Module['calledRun'] = true;
					if (ABORT) return;
					initRuntime();
					preMain();
					readyPromiseResolve(Module);
					if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();
					if (shouldRunNow) callMain(args);
					postRun();
				}
				if (Module['setStatus']) {
					Module['setStatus']('Running...');
					setTimeout(function () {
						setTimeout(function () {
							Module['setStatus']('');
						}, 1);
						doRun();
					}, 1);
				} else {
					doRun();
				}
			}
			Module['run'] = run;
			function exit(status, implicit) {
				EXITSTATUS = status;
				if (keepRuntimeAlive()) {
				} else {
					exitRuntime();
				}
				procExit(status);
			}
			function procExit(code) {
				EXITSTATUS = code;
				if (!keepRuntimeAlive()) {
					if (Module['onExit']) Module['onExit'](code);
					ABORT = true;
				}
				quit_(code, new ExitStatus(code));
			}
			if (Module['preInit']) {
				if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
				while (Module['preInit'].length > 0) {
					Module['preInit'].pop()();
				}
			}
			var shouldRunNow = true;
			if (Module['noInitialRun']) shouldRunNow = false;
			run();
			return DuckDB5.ready;
		};
	})();
	var duckdb_default = DuckDB;

	// src/bindings/bindings_browser_base.ts
	var DuckDBBrowserBindings = class extends DuckDBBindingsBase {
		constructor(logger, runtime, mainModuleURL, pthreadWorkerURL) {
			super(logger, runtime);
			this.mainModuleURL = mainModuleURL;
			this.pthreadWorkerURL = pthreadWorkerURL;
		}
		locateFile(path, prefix) {
			if (path.endsWith('.wasm')) {
				return this.mainModuleURL;
			}
			if (path.endsWith('.worker.js')) {
				if (!this.pthreadWorkerURL) {
					throw new Error('Missing DuckDB worker URL!');
				}
				return this.pthreadWorkerURL;
			}
			throw new Error(
				`WASM instantiation requested unexpected file: prefix=${prefix} path=${path}`
			);
		}
		instantiateWasm(imports, success) {
			globalThis.DUCKDB_RUNTIME = this._runtime;
			if (WebAssembly.instantiateStreaming) {
				WebAssembly.instantiateStreaming(
					fetch(this.mainModuleURL, {
						mode: 'cors'
					}),
					imports
				).then((output) => {
					success(output.instance, output.module);
				});
			} else {
				fetch(this.mainModuleURL, {
					mode: 'cors'
				})
					.then((resp) => resp.arrayBuffer())
					.then((bytes) =>
						WebAssembly.instantiate(bytes, imports).then((output) => {
							success(output.instance, output.module);
						})
					)
					.catch((error) => {
						console.error('Failed to instantiate WASM:', error);
					});
			}
			return [];
		}
	};

	// src/bindings/bindings_browser.ts
	var DuckDB2 = class extends DuckDBBrowserBindings {
		constructor(logger, runtime, mainModuleURL, pthreadWorkerURL = null) {
			super(logger, runtime, mainModuleURL, pthreadWorkerURL);
		}
		instantiateImpl(moduleOverrides) {
			return duckdb_default({
				...moduleOverrides,
				instantiateWasm: this.instantiateWasm.bind(this),
				locateFile: this.locateFile.bind(this)
			});
		}
	};

	// src/bindings/duckdb-next.js
	var import_meta2 = {};
	var DuckDB3 = (function () {
		var _scriptDir = import_meta2.url;
		return function (DuckDB5) {
			DuckDB5 = DuckDB5 || {};
			var Module = typeof DuckDB5 !== 'undefined' ? DuckDB5 : {};
			var readyPromiseResolve, readyPromiseReject;
			Module['ready'] = new Promise(function (resolve, reject) {
				readyPromiseResolve = resolve;
				readyPromiseReject = reject;
			});
			var moduleOverrides = {};
			var key;
			for (key in Module) {
				if (Module.hasOwnProperty(key)) {
					moduleOverrides[key] = Module[key];
				}
			}
			var arguments_ = [];
			var thisProgram = './this.program';
			var quit_ = function (status, toThrow) {
				throw toThrow;
			};
			var ENVIRONMENT_IS_WEB = typeof window === 'object';
			var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
			var ENVIRONMENT_IS_NODE =
				typeof process === 'object' &&
				typeof process.versions === 'object' &&
				typeof process.versions.node === 'string';
			var scriptDirectory = '';
			function locateFile(path) {
				if (Module['locateFile']) {
					return Module['locateFile'](path, scriptDirectory);
				}
				return scriptDirectory + path;
			}
			var read_, readAsync, readBinary, setWindowTitle;
			function logExceptionOnExit(e) {
				if (e instanceof ExitStatus) return;
				var toLog = e;
				err('exiting due to exception: ' + toLog);
			}
			var nodeFS;
			var nodePath;
			if (ENVIRONMENT_IS_NODE) {
				if (ENVIRONMENT_IS_WORKER) {
					scriptDirectory = require_path().dirname(scriptDirectory) + '/';
				} else {
					scriptDirectory = __dirname + '/';
				}
				read_ = function shell_read(filename, binary) {
					if (!nodeFS) nodeFS = require_fs();
					if (!nodePath) nodePath = require_path();
					filename = nodePath['normalize'](filename);
					return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
				};
				readBinary = function readBinary2(filename) {
					var ret = read_(filename, true);
					if (!ret.buffer) {
						ret = new Uint8Array(ret);
					}
					assert(ret.buffer);
					return ret;
				};
				readAsync = function readAsync2(filename, onload, onerror) {
					if (!nodeFS) nodeFS = require_fs();
					if (!nodePath) nodePath = require_path();
					filename = nodePath['normalize'](filename);
					nodeFS['readFile'](filename, function (err2, data) {
						if (err2) onerror(err2);
						else onload(data.buffer);
					});
				};
				if (process['argv'].length > 1) {
					thisProgram = process['argv'][1].replace(/\\/g, '/');
				}
				arguments_ = process['argv'].slice(2);
				process['on']('uncaughtException', function (ex) {
					if (!(ex instanceof ExitStatus)) {
						throw ex;
					}
				});
				process['on']('unhandledRejection', function (reason) {
					throw reason;
				});
				quit_ = function (status, toThrow) {
					if (keepRuntimeAlive()) {
						process['exitCode'] = status;
						throw toThrow;
					}
					logExceptionOnExit(toThrow);
					process['exit'](status);
				};
				Module['inspect'] = function () {
					return '[Emscripten Module object]';
				};
			} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
				if (ENVIRONMENT_IS_WORKER) {
					scriptDirectory = self.location.href;
				} else if (typeof document !== 'undefined' && document.currentScript) {
					scriptDirectory = document.currentScript.src;
				}
				if (_scriptDir) {
					scriptDirectory = _scriptDir;
				}
				if (scriptDirectory.indexOf('blob:') !== 0) {
					scriptDirectory = scriptDirectory.substr(
						0,
						scriptDirectory.replace(/[?#].*/, '').lastIndexOf('/') + 1
					);
				} else {
					scriptDirectory = '';
				}
				{
					read_ = function (url) {
						var xhr = new XMLHttpRequest();
						xhr.open('GET', url, false);
						xhr.send(null);
						return xhr.responseText;
					};
					if (ENVIRONMENT_IS_WORKER) {
						readBinary = function (url) {
							var xhr = new XMLHttpRequest();
							xhr.open('GET', url, false);
							xhr.responseType = 'arraybuffer';
							xhr.send(null);
							return new Uint8Array(xhr.response);
						};
					}
					readAsync = function (url, onload, onerror) {
						var xhr = new XMLHttpRequest();
						xhr.open('GET', url, true);
						xhr.responseType = 'arraybuffer';
						xhr.onload = function () {
							if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
								onload(xhr.response);
								return;
							}
							onerror();
						};
						xhr.onerror = onerror;
						xhr.send(null);
					};
				}
				setWindowTitle = function (title) {
					document.title = title;
				};
			} else {
			}
			var out = Module['print'] || console.log.bind(console);
			var err = Module['printErr'] || console.warn.bind(console);
			for (key in moduleOverrides) {
				if (moduleOverrides.hasOwnProperty(key)) {
					Module[key] = moduleOverrides[key];
				}
			}
			moduleOverrides = null;
			if (Module['arguments']) arguments_ = Module['arguments'];
			if (Module['thisProgram']) thisProgram = Module['thisProgram'];
			if (Module['quit']) quit_ = Module['quit'];
			var wasmBinary;
			if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
			var noExitRuntime = Module['noExitRuntime'] || true;
			if (typeof WebAssembly !== 'object') {
				abort('no native wasm support detected');
			}
			var wasmMemory;
			var ABORT = false;
			var EXITSTATUS;
			function assert(condition, text) {
				if (!condition) {
					abort('Assertion failed: ' + text);
				}
			}
			function getCFunc(ident) {
				var func = Module['_' + ident];
				assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
				return func;
			}
			function ccall(ident, returnType, argTypes, args, opts) {
				var toC = {
					string: function (str) {
						var ret2 = 0;
						if (str !== null && str !== void 0 && str !== 0) {
							var len = (str.length << 2) + 1;
							ret2 = stackAlloc(len);
							stringToUTF8(str, ret2, len);
						}
						return ret2;
					},
					array: function (arr) {
						var ret2 = stackAlloc(arr.length);
						writeArrayToMemory(arr, ret2);
						return ret2;
					}
				};
				function convertReturnValue(ret2) {
					if (returnType === 'string') return UTF8ToString(ret2);
					if (returnType === 'boolean') return Boolean(ret2);
					return ret2;
				}
				var func = getCFunc(ident);
				var cArgs = [];
				var stack = 0;
				if (args) {
					for (var i = 0; i < args.length; i++) {
						var converter = toC[argTypes[i]];
						if (converter) {
							if (stack === 0) stack = stackSave();
							cArgs[i] = converter(args[i]);
						} else {
							cArgs[i] = args[i];
						}
					}
				}
				var ret = func.apply(null, cArgs);
				function onDone(ret2) {
					if (stack !== 0) stackRestore(stack);
					return convertReturnValue(ret2);
				}
				ret = onDone(ret);
				return ret;
			}
			var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : void 0;
			function UTF8ArrayToString(heap, idx, maxBytesToRead) {
				var endIdx = idx + maxBytesToRead;
				var endPtr = idx;
				while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;
				if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
					return UTF8Decoder.decode(heap.subarray(idx, endPtr));
				} else {
					var str = '';
					while (idx < endPtr) {
						var u0 = heap[idx++];
						if (!(u0 & 128)) {
							str += String.fromCharCode(u0);
							continue;
						}
						var u1 = heap[idx++] & 63;
						if ((u0 & 224) == 192) {
							str += String.fromCharCode(((u0 & 31) << 6) | u1);
							continue;
						}
						var u2 = heap[idx++] & 63;
						if ((u0 & 240) == 224) {
							u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
						} else {
							u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
						}
						if (u0 < 65536) {
							str += String.fromCharCode(u0);
						} else {
							var ch = u0 - 65536;
							str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
						}
					}
				}
				return str;
			}
			function UTF8ToString(ptr, maxBytesToRead) {
				return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
			}
			function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
				if (!(maxBytesToWrite > 0)) return 0;
				var startIdx = outIdx;
				var endIdx = outIdx + maxBytesToWrite - 1;
				for (var i = 0; i < str.length; ++i) {
					var u = str.charCodeAt(i);
					if (u >= 55296 && u <= 57343) {
						var u1 = str.charCodeAt(++i);
						u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
					}
					if (u <= 127) {
						if (outIdx >= endIdx) break;
						heap[outIdx++] = u;
					} else if (u <= 2047) {
						if (outIdx + 1 >= endIdx) break;
						heap[outIdx++] = 192 | (u >> 6);
						heap[outIdx++] = 128 | (u & 63);
					} else if (u <= 65535) {
						if (outIdx + 2 >= endIdx) break;
						heap[outIdx++] = 224 | (u >> 12);
						heap[outIdx++] = 128 | ((u >> 6) & 63);
						heap[outIdx++] = 128 | (u & 63);
					} else {
						if (outIdx + 3 >= endIdx) break;
						heap[outIdx++] = 240 | (u >> 18);
						heap[outIdx++] = 128 | ((u >> 12) & 63);
						heap[outIdx++] = 128 | ((u >> 6) & 63);
						heap[outIdx++] = 128 | (u & 63);
					}
				}
				heap[outIdx] = 0;
				return outIdx - startIdx;
			}
			function stringToUTF8(str, outPtr, maxBytesToWrite) {
				return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
			}
			function lengthBytesUTF8(str) {
				var len = 0;
				for (var i = 0; i < str.length; ++i) {
					var u = str.charCodeAt(i);
					if (u >= 55296 && u <= 57343)
						u = (65536 + ((u & 1023) << 10)) | (str.charCodeAt(++i) & 1023);
					if (u <= 127) ++len;
					else if (u <= 2047) len += 2;
					else if (u <= 65535) len += 3;
					else len += 4;
				}
				return len;
			}
			function writeArrayToMemory(array, buffer2) {
				HEAP8.set(array, buffer2);
			}
			function writeAsciiToMemory(str, buffer2, dontAddNull) {
				for (var i = 0; i < str.length; ++i) {
					HEAP8[buffer2++ >> 0] = str.charCodeAt(i);
				}
				if (!dontAddNull) HEAP8[buffer2 >> 0] = 0;
			}
			function alignUp(x, multiple) {
				if (x % multiple > 0) {
					x += multiple - (x % multiple);
				}
				return x;
			}
			var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
			function updateGlobalBufferAndViews(buf) {
				buffer = buf;
				Module['HEAP8'] = HEAP8 = new Int8Array(buf);
				Module['HEAP16'] = HEAP16 = new Int16Array(buf);
				Module['HEAP32'] = HEAP32 = new Int32Array(buf);
				Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
				Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
				Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
				Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
				Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
			}
			var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;
			var wasmTable;
			var __ATPRERUN__ = [];
			var __ATINIT__ = [];
			var __ATMAIN__ = [];
			var __ATPOSTRUN__ = [];
			var runtimeInitialized = false;
			var runtimeExited = false;
			var runtimeKeepaliveCounter = 0;
			function keepRuntimeAlive() {
				return noExitRuntime || runtimeKeepaliveCounter > 0;
			}
			function preRun() {
				if (Module['preRun']) {
					if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
					while (Module['preRun'].length) {
						addOnPreRun(Module['preRun'].shift());
					}
				}
				callRuntimeCallbacks(__ATPRERUN__);
			}
			function initRuntime() {
				runtimeInitialized = true;
				callRuntimeCallbacks(__ATINIT__);
			}
			function preMain() {
				callRuntimeCallbacks(__ATMAIN__);
			}
			function exitRuntime() {
				runtimeExited = true;
			}
			function postRun() {
				if (Module['postRun']) {
					if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
					while (Module['postRun'].length) {
						addOnPostRun(Module['postRun'].shift());
					}
				}
				callRuntimeCallbacks(__ATPOSTRUN__);
			}
			function addOnPreRun(cb) {
				__ATPRERUN__.unshift(cb);
			}
			function addOnInit(cb) {
				__ATINIT__.unshift(cb);
			}
			function addOnPostRun(cb) {
				__ATPOSTRUN__.unshift(cb);
			}
			var runDependencies = 0;
			var runDependencyWatcher = null;
			var dependenciesFulfilled = null;
			function addRunDependency(id) {
				runDependencies++;
				if (Module['monitorRunDependencies']) {
					Module['monitorRunDependencies'](runDependencies);
				}
			}
			function removeRunDependency(id) {
				runDependencies--;
				if (Module['monitorRunDependencies']) {
					Module['monitorRunDependencies'](runDependencies);
				}
				if (runDependencies == 0) {
					if (runDependencyWatcher !== null) {
						clearInterval(runDependencyWatcher);
						runDependencyWatcher = null;
					}
					if (dependenciesFulfilled) {
						var callback = dependenciesFulfilled;
						dependenciesFulfilled = null;
						callback();
					}
				}
			}
			Module['preloadedImages'] = {};
			Module['preloadedAudios'] = {};
			function abort(what) {
				{
					if (Module['onAbort']) {
						Module['onAbort'](what);
					}
				}
				what = 'Aborted(' + what + ')';
				err(what);
				ABORT = true;
				EXITSTATUS = 1;
				what += '. Build with -s ASSERTIONS=1 for more info.';
				var e = new WebAssembly.RuntimeError(what);
				readyPromiseReject(e);
				throw e;
			}
			var dataURIPrefix = 'data:application/octet-stream;base64,';
			function isDataURI(filename) {
				return filename.startsWith(dataURIPrefix);
			}
			var wasmBinaryFile;
			if (Module['locateFile']) {
				wasmBinaryFile = './duckdb-wasm-next.wasm';
				if (!isDataURI(wasmBinaryFile)) {
					wasmBinaryFile = locateFile(wasmBinaryFile);
				}
			} else {
				wasmBinaryFile = new URL('duckdb_wasm.wasm', import_meta2.url).toString();
			}
			function getBinary(file) {
				try {
					if (file == wasmBinaryFile && wasmBinary) {
						return new Uint8Array(wasmBinary);
					}
					if (readBinary) {
						return readBinary(file);
					} else {
						throw 'both async and sync fetching of the wasm failed';
					}
				} catch (err2) {
					abort(err2);
				}
			}
			function getBinaryPromise() {
				if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
					if (typeof fetch === 'function') {
						return fetch(wasmBinaryFile, { credentials: 'same-origin' })
							.then(function (response) {
								if (!response['ok']) {
									throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
								}
								return response['arrayBuffer']();
							})
							.catch(function () {
								return getBinary(wasmBinaryFile);
							});
					}
				}
				return Promise.resolve().then(function () {
					return getBinary(wasmBinaryFile);
				});
			}
			function createWasm() {
				var info = { a: asmLibraryArg };
				function receiveInstance(instance, module) {
					var exports2 = instance.exports;
					Module['asm'] = exports2;
					wasmMemory = Module['asm']['fa'];
					updateGlobalBufferAndViews(wasmMemory.buffer);
					wasmTable = Module['asm']['ia'];
					addOnInit(Module['asm']['ga']);
					removeRunDependency('wasm-instantiate');
				}
				addRunDependency('wasm-instantiate');
				function receiveInstantiationResult(result) {
					receiveInstance(result['instance']);
				}
				function instantiateArrayBuffer(receiver) {
					return getBinaryPromise()
						.then(function (binary) {
							return WebAssembly.instantiate(binary, info);
						})
						.then(function (instance) {
							return instance;
						})
						.then(receiver, function (reason) {
							err('failed to asynchronously prepare wasm: ' + reason);
							abort(reason);
						});
				}
				function instantiateAsync() {
					if (
						!wasmBinary &&
						typeof WebAssembly.instantiateStreaming === 'function' &&
						!isDataURI(wasmBinaryFile) &&
						typeof fetch === 'function'
					) {
						return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
							var result = WebAssembly.instantiateStreaming(response, info);
							return result.then(receiveInstantiationResult, function (reason) {
								err('wasm streaming compile failed: ' + reason);
								err('falling back to ArrayBuffer instantiation');
								return instantiateArrayBuffer(receiveInstantiationResult);
							});
						});
					} else {
						return instantiateArrayBuffer(receiveInstantiationResult);
					}
				}
				if (Module['instantiateWasm']) {
					try {
						var exports = Module['instantiateWasm'](info, receiveInstance);
						return exports;
					} catch (e) {
						err('Module.instantiateWasm callback failed with error: ' + e);
						return false;
					}
				}
				instantiateAsync().catch(readyPromiseReject);
				return {};
			}
			function callRuntimeCallbacks(callbacks) {
				while (callbacks.length > 0) {
					var callback = callbacks.shift();
					if (typeof callback == 'function') {
						callback(Module);
						continue;
					}
					var func = callback.func;
					if (typeof func === 'number') {
						if (callback.arg === void 0) {
							wasmTable.get(func)();
						} else {
							wasmTable.get(func)(callback.arg);
						}
					} else {
						func(callback.arg === void 0 ? null : callback.arg);
					}
				}
			}
			function handleException(e) {
				if (e instanceof ExitStatus || e == 'unwind') {
					return EXITSTATUS;
				}
				quit_(1, e);
			}
			var SYSCALLS = {
				mappings: {},
				buffers: [null, [], []],
				printChar: function (stream, curr) {
					var buffer2 = SYSCALLS.buffers[stream];
					if (curr === 0 || curr === 10) {
						(stream === 1 ? out : err)(UTF8ArrayToString(buffer2, 0));
						buffer2.length = 0;
					} else {
						buffer2.push(curr);
					}
				},
				varargs: void 0,
				get: function () {
					SYSCALLS.varargs += 4;
					var ret = HEAP32[(SYSCALLS.varargs - 4) >> 2];
					return ret;
				},
				getStr: function (ptr) {
					var ret = UTF8ToString(ptr);
					return ret;
				},
				get64: function (low, high) {
					return low;
				}
			};
			function ___sys__newselect(nfds, readfds, writefds, exceptfds, timeout) {}
			function ___sys_access(path, amode) {
				path = SYSCALLS.getStr(path);
				return SYSCALLS.doAccess(path, amode);
			}
			function SOCKFS() {
				err('missing function: $SOCKFS');
				abort(-1);
			}
			function FS() {
				err('missing function: $FS');
				abort(-1);
			}
			function getSocketFromFD(fd) {
				var socket = SOCKFS.getSocket(fd);
				if (!socket) throw new FS.ErrnoError(8);
				return socket;
			}
			function setErrNo(value) {
				HEAP32[___errno_location() >> 2] = value;
				return value;
			}
			function inetNtop4(addr) {
				return (
					(addr & 255) +
					'.' +
					((addr >> 8) & 255) +
					'.' +
					((addr >> 16) & 255) +
					'.' +
					((addr >> 24) & 255)
				);
			}
			function inetNtop6(ints) {
				var str = '';
				var word = 0;
				var longest = 0;
				var lastzero = 0;
				var zstart = 0;
				var len = 0;
				var i = 0;
				var parts = [
					ints[0] & 65535,
					ints[0] >> 16,
					ints[1] & 65535,
					ints[1] >> 16,
					ints[2] & 65535,
					ints[2] >> 16,
					ints[3] & 65535,
					ints[3] >> 16
				];
				var hasipv4 = true;
				var v4part = '';
				for (i = 0; i < 5; i++) {
					if (parts[i] !== 0) {
						hasipv4 = false;
						break;
					}
				}
				if (hasipv4) {
					v4part = inetNtop4(parts[6] | (parts[7] << 16));
					if (parts[5] === -1) {
						str = '::ffff:';
						str += v4part;
						return str;
					}
					if (parts[5] === 0) {
						str = '::';
						if (v4part === '0.0.0.0') v4part = '';
						if (v4part === '0.0.0.1') v4part = '1';
						str += v4part;
						return str;
					}
				}
				for (word = 0; word < 8; word++) {
					if (parts[word] === 0) {
						if (word - lastzero > 1) {
							len = 0;
						}
						lastzero = word;
						len++;
					}
					if (len > longest) {
						longest = len;
						zstart = word - longest + 1;
					}
				}
				for (word = 0; word < 8; word++) {
					if (longest > 1) {
						if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
							if (word === zstart) {
								str += ':';
								if (zstart === 0) str += ':';
							}
							continue;
						}
					}
					str += Number(_ntohs(parts[word] & 65535)).toString(16);
					str += word < 7 ? ':' : '';
				}
				return str;
			}
			function readSockaddr(sa, salen) {
				var family = HEAP16[sa >> 1];
				var port = _ntohs(HEAPU16[(sa + 2) >> 1]);
				var addr;
				switch (family) {
					case 2:
						if (salen !== 16) {
							return { errno: 28 };
						}
						addr = HEAP32[(sa + 4) >> 2];
						addr = inetNtop4(addr);
						break;
					case 10:
						if (salen !== 28) {
							return { errno: 28 };
						}
						addr = [
							HEAP32[(sa + 8) >> 2],
							HEAP32[(sa + 12) >> 2],
							HEAP32[(sa + 16) >> 2],
							HEAP32[(sa + 20) >> 2]
						];
						addr = inetNtop6(addr);
						break;
					default:
						return { errno: 5 };
				}
				return { family, addr, port };
			}
			function getSocketAddress(addrp, addrlen, allowNull) {
				if (allowNull && addrp === 0) return null;
				var info = readSockaddr(addrp, addrlen);
				if (info.errno) throw new FS.ErrnoError(info.errno);
				info.addr = DNS.lookup_addr(info.addr) || info.addr;
				return info;
			}
			function ___sys_bind(fd, addr, addrlen) {
				var sock = getSocketFromFD(fd);
				var info = getSocketAddress(addr, addrlen);
				sock.sock_ops.bind(sock, info.addr, info.port);
				return 0;
			}
			function ___sys_connect(fd, addr, addrlen) {
				var sock = getSocketFromFD(fd);
				var info = getSocketAddress(addr, addrlen);
				sock.sock_ops.connect(sock, info.addr, info.port);
				return 0;
			}
			function ___sys_fcntl64(fd, cmd, varargs) {
				SYSCALLS.varargs = varargs;
				return 0;
			}
			function ___sys_fstat64(fd, buf) {}
			function ___sys_ftruncate64(fd, zero, low, high) {}
			function ___sys_getdents64(fd, dirp, count) {}
			function inetPton4(str) {
				var b = str.split('.');
				for (var i = 0; i < 4; i++) {
					var tmp = Number(b[i]);
					if (isNaN(tmp)) return null;
					b[i] = tmp;
				}
				return (b[0] | (b[1] << 8) | (b[2] << 16) | (b[3] << 24)) >>> 0;
			}
			function jstoi_q(str) {
				return parseInt(str);
			}
			function inetPton6(str) {
				var words;
				var w, offset, z;
				var valid6regx =
					/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
				var parts = [];
				if (!valid6regx.test(str)) {
					return null;
				}
				if (str === '::') {
					return [0, 0, 0, 0, 0, 0, 0, 0];
				}
				if (str.startsWith('::')) {
					str = str.replace('::', 'Z:');
				} else {
					str = str.replace('::', ':Z:');
				}
				if (str.indexOf('.') > 0) {
					str = str.replace(new RegExp('[.]', 'g'), ':');
					words = str.split(':');
					words[words.length - 4] =
						jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
					words[words.length - 3] =
						jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
					words = words.slice(0, words.length - 2);
				} else {
					words = str.split(':');
				}
				offset = 0;
				z = 0;
				for (w = 0; w < words.length; w++) {
					if (typeof words[w] === 'string') {
						if (words[w] === 'Z') {
							for (z = 0; z < 8 - words.length + 1; z++) {
								parts[w + z] = 0;
							}
							offset = z - 1;
						} else {
							parts[w + offset] = _htons(parseInt(words[w], 16));
						}
					} else {
						parts[w + offset] = words[w];
					}
				}
				return [
					(parts[1] << 16) | parts[0],
					(parts[3] << 16) | parts[2],
					(parts[5] << 16) | parts[4],
					(parts[7] << 16) | parts[6]
				];
			}
			function zeroMemory(address, size) {
				HEAPU8.fill(0, address, address + size);
			}
			function writeSockaddr(sa, family, addr, port, addrlen) {
				switch (family) {
					case 2:
						addr = inetPton4(addr);
						zeroMemory(sa, 16);
						if (addrlen) {
							HEAP32[addrlen >> 2] = 16;
						}
						HEAP16[sa >> 1] = family;
						HEAP32[(sa + 4) >> 2] = addr;
						HEAP16[(sa + 2) >> 1] = _htons(port);
						break;
					case 10:
						addr = inetPton6(addr);
						zeroMemory(sa, 28);
						if (addrlen) {
							HEAP32[addrlen >> 2] = 28;
						}
						HEAP32[sa >> 2] = family;
						HEAP32[(sa + 8) >> 2] = addr[0];
						HEAP32[(sa + 12) >> 2] = addr[1];
						HEAP32[(sa + 16) >> 2] = addr[2];
						HEAP32[(sa + 20) >> 2] = addr[3];
						HEAP16[(sa + 2) >> 1] = _htons(port);
						break;
					default:
						return 5;
				}
				return 0;
			}
			var DNS = {
				address_map: { id: 1, addrs: {}, names: {} },
				lookup_name: function (name) {
					var res = inetPton4(name);
					if (res !== null) {
						return name;
					}
					res = inetPton6(name);
					if (res !== null) {
						return name;
					}
					var addr;
					if (DNS.address_map.addrs[name]) {
						addr = DNS.address_map.addrs[name];
					} else {
						var id = DNS.address_map.id++;
						assert(id < 65535, 'exceeded max address mappings of 65535');
						addr = '172.29.' + (id & 255) + '.' + (id & 65280);
						DNS.address_map.names[addr] = name;
						DNS.address_map.addrs[name] = addr;
					}
					return addr;
				},
				lookup_addr: function (addr) {
					if (DNS.address_map.names[addr]) {
						return DNS.address_map.names[addr];
					}
					return null;
				}
			};
			function ___sys_getpeername(fd, addr, addrlen) {
				var sock = getSocketFromFD(fd);
				if (!sock.daddr) {
					return -53;
				}
				var errno = writeSockaddr(
					addr,
					sock.family,
					DNS.lookup_name(sock.daddr),
					sock.dport,
					addrlen
				);
				return 0;
			}
			function ___sys_getpid() {
				return 42;
			}
			function ___sys_getsockopt(fd, level, optname, optval, optlen) {
				var sock = getSocketFromFD(fd);
				if (level === 1) {
					if (optname === 4) {
						HEAP32[optval >> 2] = sock.error;
						HEAP32[optlen >> 2] = 4;
						sock.error = null;
						return 0;
					}
				}
				return -50;
			}
			function ___sys_ioctl(fd, op, varargs) {
				SYSCALLS.varargs = varargs;
				return 0;
			}
			function ___sys_madvise1(addr, length, advice) {
				return 0;
			}
			function ___sys_mkdir(path, mode) {
				path = SYSCALLS.getStr(path);
				return SYSCALLS.doMkdir(path, mode);
			}
			function ___sys_open(path, flags, varargs) {
				SYSCALLS.varargs = varargs;
			}
			function ___sys_recvfrom(fd, buf, len, flags, addr, addrlen) {
				var sock = getSocketFromFD(fd);
				var msg = sock.sock_ops.recvmsg(sock, len);
				if (!msg) return 0;
				if (addr) {
					var errno = writeSockaddr(
						addr,
						sock.family,
						DNS.lookup_name(msg.addr),
						msg.port,
						addrlen
					);
				}
				HEAPU8.set(msg.buffer, buf);
				return msg.buffer.byteLength;
			}
			function ___sys_rename(old_path, new_path) {}
			function ___sys_rmdir(path) {}
			function ___sys_sendto(fd, message, length, flags, addr, addr_len) {}
			function ___sys_setsockopt(fd) {
				return -50;
			}
			function ___sys_shutdown(fd, how) {
				getSocketFromFD(fd);
				return -52;
			}
			function ___sys_socket(domain, type, protocol) {}
			function ___sys_stat64(path, buf) {}
			function ___sys_unlink(path) {}
			function __dlopen_js(filename, flag) {
				abort(
					"To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
				);
			}
			function __dlsym_js(handle, symbol) {
				abort(
					"To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking"
				);
			}
			function _abort() {
				abort('');
			}
			var _emscripten_get_now;
			if (ENVIRONMENT_IS_NODE) {
				_emscripten_get_now = function () {
					var t = process['hrtime']();
					return t[0] * 1e3 + t[1] / 1e6;
				};
			} else
				_emscripten_get_now = function () {
					return performance.now();
				};
			var _emscripten_get_now_is_monotonic = true;
			function _clock_gettime(clk_id, tp) {
				var now;
				if (clk_id === 0) {
					now = Date.now();
				} else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
					now = _emscripten_get_now();
				} else {
					setErrNo(28);
					return -1;
				}
				HEAP32[tp >> 2] = (now / 1e3) | 0;
				HEAP32[(tp + 4) >> 2] = ((now % 1e3) * 1e3 * 1e3) | 0;
				return 0;
			}
			function _duckdb_web_fs_directory_create(path, pathLen) {
				return globalThis.DUCKDB_RUNTIME.createDirectory(Module, path, pathLen);
			}
			function _duckdb_web_fs_directory_exists(path, pathLen) {
				return globalThis.DUCKDB_RUNTIME.checkDirectory(Module, path, pathLen);
			}
			function _duckdb_web_fs_directory_list_files(path, pathLen) {
				return globalThis.DUCKDB_RUNTIME.listDirectoryEntries(Module, path, pathLen);
			}
			function _duckdb_web_fs_directory_remove(path, pathLen) {
				return globalThis.DUCKDB_RUNTIME.removeDirectory(Module, path, pathLen);
			}
			function _duckdb_web_fs_file_close(fileId) {
				return globalThis.DUCKDB_RUNTIME.closeFile(Module, fileId);
			}
			function _duckdb_web_fs_file_exists(path, pathLen) {
				return globalThis.DUCKDB_RUNTIME.checkFile(Module, path, pathLen);
			}
			function _duckdb_web_fs_file_get_last_modified_time(fileId) {
				return globalThis.DUCKDB_RUNTIME.getLastFileModificationTime(Module, fileId);
			}
			function _duckdb_web_fs_file_move(from, fromLen, to, toLen) {
				return globalThis.DUCKDB_RUNTIME.moveFile(Module, from, fromLen, to, toLen);
			}
			function _duckdb_web_fs_file_open(fileId) {
				return globalThis.DUCKDB_RUNTIME.openFile(Module, fileId);
			}
			function _duckdb_web_fs_file_read(fileId, buf, size, location) {
				return globalThis.DUCKDB_RUNTIME.readFile(Module, fileId, buf, size, location);
			}
			function _duckdb_web_fs_file_truncate(fileId, newSize) {
				return globalThis.DUCKDB_RUNTIME.truncateFile(Module, fileId, newSize);
			}
			function _duckdb_web_fs_file_write(fileId, buf, size, location) {
				return globalThis.DUCKDB_RUNTIME.writeFile(Module, fileId, buf, size, location);
			}
			function _duckdb_web_fs_glob(path, pathLen) {
				return globalThis.DUCKDB_RUNTIME.glob(Module, path, pathLen);
			}
			function _duckdb_web_test_platform_feature(feature) {
				return globalThis.DUCKDB_RUNTIME.testPlatformFeature(Module, feature);
			}
			function _emscripten_get_heap_max() {
				return 2147483648;
			}
			function _emscripten_memcpy_big(dest, src, num) {
				HEAPU8.copyWithin(dest, src, src + num);
			}
			function emscripten_realloc_buffer(size) {
				try {
					wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16);
					updateGlobalBufferAndViews(wasmMemory.buffer);
					return 1;
				} catch (e) {}
			}
			function _emscripten_resize_heap(requestedSize) {
				var oldSize = HEAPU8.length;
				requestedSize = requestedSize >>> 0;
				var maxHeapSize = 2147483648;
				if (requestedSize > maxHeapSize) {
					return false;
				}
				for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
					var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
					overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
					var newSize = Math.min(
						maxHeapSize,
						alignUp(Math.max(requestedSize, overGrownHeapSize), 65536)
					);
					var replacement = emscripten_realloc_buffer(newSize);
					if (replacement) {
						return true;
					}
				}
				return false;
			}
			var ENV = {};
			function getExecutableName() {
				return thisProgram || './this.program';
			}
			function getEnvStrings() {
				if (!getEnvStrings.strings) {
					var lang =
						(
							(typeof navigator === 'object' && navigator.languages && navigator.languages[0]) ||
							'C'
						).replace('-', '_') + '.UTF-8';
					var env = {
						USER: 'web_user',
						LOGNAME: 'web_user',
						PATH: '/',
						PWD: '/',
						HOME: '/home/web_user',
						LANG: lang,
						_: getExecutableName()
					};
					for (var x in ENV) {
						if (ENV[x] === void 0) delete env[x];
						else env[x] = ENV[x];
					}
					var strings = [];
					for (var x in env) {
						strings.push(x + '=' + env[x]);
					}
					getEnvStrings.strings = strings;
				}
				return getEnvStrings.strings;
			}
			function _environ_get(__environ, environ_buf) {
				var bufSize = 0;
				getEnvStrings().forEach(function (string, i) {
					var ptr = environ_buf + bufSize;
					HEAP32[(__environ + i * 4) >> 2] = ptr;
					writeAsciiToMemory(string, ptr);
					bufSize += string.length + 1;
				});
				return 0;
			}
			function _environ_sizes_get(penviron_count, penviron_buf_size) {
				var strings = getEnvStrings();
				HEAP32[penviron_count >> 2] = strings.length;
				var bufSize = 0;
				strings.forEach(function (string) {
					bufSize += string.length + 1;
				});
				HEAP32[penviron_buf_size >> 2] = bufSize;
				return 0;
			}
			function _fd_close(fd) {
				return 0;
			}
			function _fd_fdstat_get(fd, pbuf) {
				var type = fd == 1 || fd == 2 ? 2 : abort();
				HEAP8[pbuf >> 0] = type;
				return 0;
			}
			function _fd_pread(fd, iov, iovcnt, offset_low, offset_high, pnum) {
				var stream = SYSCALLS.getStreamFromFD(fd);
				var num = SYSCALLS.doReadv(stream, iov, iovcnt, offset_low);
				HEAP32[pnum >> 2] = num;
				return 0;
			}
			function _fd_pwrite(fd, iov, iovcnt, offset_low, offset_high, pnum) {
				var stream = SYSCALLS.getStreamFromFD(fd);
				var num = SYSCALLS.doWritev(stream, iov, iovcnt, offset_low);
				HEAP32[pnum >> 2] = num;
				return 0;
			}
			function _fd_read(fd, iov, iovcnt, pnum) {
				var stream = SYSCALLS.getStreamFromFD(fd);
				var num = SYSCALLS.doReadv(stream, iov, iovcnt);
				HEAP32[pnum >> 2] = num;
				return 0;
			}
			function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {}
			function _fd_sync(fd) {
				var stream = SYSCALLS.getStreamFromFD(fd);
				if (stream.stream_ops && stream.stream_ops.fsync) {
					return -stream.stream_ops.fsync(stream);
				}
				return 0;
			}
			function _fd_write(fd, iov, iovcnt, pnum) {
				var num = 0;
				for (var i = 0; i < iovcnt; i++) {
					var ptr = HEAP32[(iov + i * 8) >> 2];
					var len = HEAP32[(iov + (i * 8 + 4)) >> 2];
					for (var j = 0; j < len; j++) {
						SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
					}
					num += len;
				}
				HEAP32[pnum >> 2] = num;
				return 0;
			}
			function _getaddrinfo(node, service, hint, out2) {
				var addr = 0;
				var port = 0;
				var flags = 0;
				var family = 0;
				var type = 0;
				var proto = 0;
				var ai;
				function allocaddrinfo(family2, type2, proto2, canon, addr2, port2) {
					var sa, salen, ai2;
					var errno;
					salen = family2 === 10 ? 28 : 16;
					addr2 = family2 === 10 ? inetNtop6(addr2) : inetNtop4(addr2);
					sa = _malloc(salen);
					errno = writeSockaddr(sa, family2, addr2, port2);
					assert(!errno);
					ai2 = _malloc(32);
					HEAP32[(ai2 + 4) >> 2] = family2;
					HEAP32[(ai2 + 8) >> 2] = type2;
					HEAP32[(ai2 + 12) >> 2] = proto2;
					HEAP32[(ai2 + 24) >> 2] = canon;
					HEAP32[(ai2 + 20) >> 2] = sa;
					if (family2 === 10) {
						HEAP32[(ai2 + 16) >> 2] = 28;
					} else {
						HEAP32[(ai2 + 16) >> 2] = 16;
					}
					HEAP32[(ai2 + 28) >> 2] = 0;
					return ai2;
				}
				if (hint) {
					flags = HEAP32[hint >> 2];
					family = HEAP32[(hint + 4) >> 2];
					type = HEAP32[(hint + 8) >> 2];
					proto = HEAP32[(hint + 12) >> 2];
				}
				if (type && !proto) {
					proto = type === 2 ? 17 : 6;
				}
				if (!type && proto) {
					type = proto === 17 ? 2 : 1;
				}
				if (proto === 0) {
					proto = 6;
				}
				if (type === 0) {
					type = 1;
				}
				if (!node && !service) {
					return -2;
				}
				if (flags & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32)) {
					return -1;
				}
				if (hint !== 0 && HEAP32[hint >> 2] & 2 && !node) {
					return -1;
				}
				if (flags & 32) {
					return -2;
				}
				if (type !== 0 && type !== 1 && type !== 2) {
					return -7;
				}
				if (family !== 0 && family !== 2 && family !== 10) {
					return -6;
				}
				if (service) {
					service = UTF8ToString(service);
					port = parseInt(service, 10);
					if (isNaN(port)) {
						if (flags & 1024) {
							return -2;
						}
						return -8;
					}
				}
				if (!node) {
					if (family === 0) {
						family = 2;
					}
					if ((flags & 1) === 0) {
						if (family === 2) {
							addr = _htonl(2130706433);
						} else {
							addr = [0, 0, 0, 1];
						}
					}
					ai = allocaddrinfo(family, type, proto, null, addr, port);
					HEAP32[out2 >> 2] = ai;
					return 0;
				}
				node = UTF8ToString(node);
				addr = inetPton4(node);
				if (addr !== null) {
					if (family === 0 || family === 2) {
						family = 2;
					} else if (family === 10 && flags & 8) {
						addr = [0, 0, _htonl(65535), addr];
						family = 10;
					} else {
						return -2;
					}
				} else {
					addr = inetPton6(node);
					if (addr !== null) {
						if (family === 0 || family === 10) {
							family = 10;
						} else {
							return -2;
						}
					}
				}
				if (addr != null) {
					ai = allocaddrinfo(family, type, proto, node, addr, port);
					HEAP32[out2 >> 2] = ai;
					return 0;
				}
				if (flags & 4) {
					return -2;
				}
				node = DNS.lookup_name(node);
				addr = inetPton4(node);
				if (family === 0) {
					family = 2;
				} else if (family === 10) {
					addr = [0, 0, _htonl(65535), addr];
				}
				ai = allocaddrinfo(family, type, proto, null, addr, port);
				HEAP32[out2 >> 2] = ai;
				return 0;
			}
			function getRandomDevice() {
				if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
					var randomBuffer = new Uint8Array(1);
					return function () {
						crypto.getRandomValues(randomBuffer);
						return randomBuffer[0];
					};
				} else if (ENVIRONMENT_IS_NODE) {
					try {
						var crypto_module = __require('crypto');
						return function () {
							return crypto_module['randomBytes'](1)[0];
						};
					} catch (e) {}
				}
				return function () {
					abort('randomDevice');
				};
			}
			function _getentropy(buffer2, size) {
				if (!_getentropy.randomDevice) {
					_getentropy.randomDevice = getRandomDevice();
				}
				for (var i = 0; i < size; i++) {
					HEAP8[(buffer2 + i) >> 0] = _getentropy.randomDevice();
				}
				return 0;
			}
			function _getnameinfo(sa, salen, node, nodelen, serv, servlen, flags) {
				var info = readSockaddr(sa, salen);
				if (info.errno) {
					return -6;
				}
				var port = info.port;
				var addr = info.addr;
				var overflowed = false;
				if (node && nodelen) {
					var lookup;
					if (flags & 1 || !(lookup = DNS.lookup_addr(addr))) {
						if (flags & 8) {
							return -2;
						}
					} else {
						addr = lookup;
					}
					var numBytesWrittenExclNull = stringToUTF8(addr, node, nodelen);
					if (numBytesWrittenExclNull + 1 >= nodelen) {
						overflowed = true;
					}
				}
				if (serv && servlen) {
					port = '' + port;
					var numBytesWrittenExclNull = stringToUTF8(port, serv, servlen);
					if (numBytesWrittenExclNull + 1 >= servlen) {
						overflowed = true;
					}
				}
				if (overflowed) {
					return -12;
				}
				return 0;
			}
			function __isLeapYear(year) {
				return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
			}
			function __arraySum(array, index) {
				var sum = 0;
				for (var i = 0; i <= index; sum += array[i++]) {}
				return sum;
			}
			var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			function __addDays(date, days) {
				var newDate = new Date(date.getTime());
				while (days > 0) {
					var leap = __isLeapYear(newDate.getFullYear());
					var currentMonth = newDate.getMonth();
					var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
					if (days > daysInCurrentMonth - newDate.getDate()) {
						days -= daysInCurrentMonth - newDate.getDate() + 1;
						newDate.setDate(1);
						if (currentMonth < 11) {
							newDate.setMonth(currentMonth + 1);
						} else {
							newDate.setMonth(0);
							newDate.setFullYear(newDate.getFullYear() + 1);
						}
					} else {
						newDate.setDate(newDate.getDate() + days);
						return newDate;
					}
				}
				return newDate;
			}
			function _strftime(s, maxsize, format, tm) {
				var tm_zone = HEAP32[(tm + 40) >> 2];
				var date = {
					tm_sec: HEAP32[tm >> 2],
					tm_min: HEAP32[(tm + 4) >> 2],
					tm_hour: HEAP32[(tm + 8) >> 2],
					tm_mday: HEAP32[(tm + 12) >> 2],
					tm_mon: HEAP32[(tm + 16) >> 2],
					tm_year: HEAP32[(tm + 20) >> 2],
					tm_wday: HEAP32[(tm + 24) >> 2],
					tm_yday: HEAP32[(tm + 28) >> 2],
					tm_isdst: HEAP32[(tm + 32) >> 2],
					tm_gmtoff: HEAP32[(tm + 36) >> 2],
					tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
				};
				var pattern = UTF8ToString(format);
				var EXPANSION_RULES_1 = {
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
				for (var rule in EXPANSION_RULES_1) {
					pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
				}
				var WEEKDAYS = [
					'Sunday',
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday'
				];
				var MONTHS = [
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
				function leadingSomething(value, digits, character) {
					var str = typeof value === 'number' ? value.toString() : value || '';
					while (str.length < digits) {
						str = character[0] + str;
					}
					return str;
				}
				function leadingNulls(value, digits) {
					return leadingSomething(value, digits, '0');
				}
				function compareByDay(date1, date2) {
					function sgn(value) {
						return value < 0 ? -1 : value > 0 ? 1 : 0;
					}
					var compare;
					if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
						if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
							compare = sgn(date1.getDate() - date2.getDate());
						}
					}
					return compare;
				}
				function getFirstWeekStartDate(janFourth) {
					switch (janFourth.getDay()) {
						case 0:
							return new Date(janFourth.getFullYear() - 1, 11, 29);
						case 1:
							return janFourth;
						case 2:
							return new Date(janFourth.getFullYear(), 0, 3);
						case 3:
							return new Date(janFourth.getFullYear(), 0, 2);
						case 4:
							return new Date(janFourth.getFullYear(), 0, 1);
						case 5:
							return new Date(janFourth.getFullYear() - 1, 11, 31);
						case 6:
							return new Date(janFourth.getFullYear() - 1, 11, 30);
					}
				}
				function getWeekBasedYear(date2) {
					var thisDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
					var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
					var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
					var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
					var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
					if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
						if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
							return thisDate.getFullYear() + 1;
						} else {
							return thisDate.getFullYear();
						}
					} else {
						return thisDate.getFullYear() - 1;
					}
				}
				var EXPANSION_RULES_2 = {
					'%a': function (date2) {
						return WEEKDAYS[date2.tm_wday].substring(0, 3);
					},
					'%A': function (date2) {
						return WEEKDAYS[date2.tm_wday];
					},
					'%b': function (date2) {
						return MONTHS[date2.tm_mon].substring(0, 3);
					},
					'%B': function (date2) {
						return MONTHS[date2.tm_mon];
					},
					'%C': function (date2) {
						var year = date2.tm_year + 1900;
						return leadingNulls((year / 100) | 0, 2);
					},
					'%d': function (date2) {
						return leadingNulls(date2.tm_mday, 2);
					},
					'%e': function (date2) {
						return leadingSomething(date2.tm_mday, 2, ' ');
					},
					'%g': function (date2) {
						return getWeekBasedYear(date2).toString().substring(2);
					},
					'%G': function (date2) {
						return getWeekBasedYear(date2);
					},
					'%H': function (date2) {
						return leadingNulls(date2.tm_hour, 2);
					},
					'%I': function (date2) {
						var twelveHour = date2.tm_hour;
						if (twelveHour == 0) twelveHour = 12;
						else if (twelveHour > 12) twelveHour -= 12;
						return leadingNulls(twelveHour, 2);
					},
					'%j': function (date2) {
						return leadingNulls(
							date2.tm_mday +
								__arraySum(
									__isLeapYear(date2.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR,
									date2.tm_mon - 1
								),
							3
						);
					},
					'%m': function (date2) {
						return leadingNulls(date2.tm_mon + 1, 2);
					},
					'%M': function (date2) {
						return leadingNulls(date2.tm_min, 2);
					},
					'%n': function () {
						return '\n';
					},
					'%p': function (date2) {
						if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
							return 'AM';
						} else {
							return 'PM';
						}
					},
					'%S': function (date2) {
						return leadingNulls(date2.tm_sec, 2);
					},
					'%t': function () {
						return '	';
					},
					'%u': function (date2) {
						return date2.tm_wday || 7;
					},
					'%U': function (date2) {
						var janFirst = new Date(date2.tm_year + 1900, 0, 1);
						var firstSunday =
							janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
						var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
						if (compareByDay(firstSunday, endDate) < 0) {
							var februaryFirstUntilEndMonth =
								__arraySum(
									__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR,
									endDate.getMonth() - 1
								) - 31;
							var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
							var days =
								firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
							return leadingNulls(Math.ceil(days / 7), 2);
						}
						return compareByDay(firstSunday, janFirst) === 0 ? '01' : '00';
					},
					'%V': function (date2) {
						var janFourthThisYear = new Date(date2.tm_year + 1900, 0, 4);
						var janFourthNextYear = new Date(date2.tm_year + 1901, 0, 4);
						var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
						var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
						var endDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
						if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
							return '53';
						}
						if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
							return '01';
						}
						var daysDifference;
						if (firstWeekStartThisYear.getFullYear() < date2.tm_year + 1900) {
							daysDifference = date2.tm_yday + 32 - firstWeekStartThisYear.getDate();
						} else {
							daysDifference = date2.tm_yday + 1 - firstWeekStartThisYear.getDate();
						}
						return leadingNulls(Math.ceil(daysDifference / 7), 2);
					},
					'%w': function (date2) {
						return date2.tm_wday;
					},
					'%W': function (date2) {
						var janFirst = new Date(date2.tm_year, 0, 1);
						var firstMonday =
							janFirst.getDay() === 1
								? janFirst
								: __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
						var endDate = new Date(date2.tm_year + 1900, date2.tm_mon, date2.tm_mday);
						if (compareByDay(firstMonday, endDate) < 0) {
							var februaryFirstUntilEndMonth =
								__arraySum(
									__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR,
									endDate.getMonth() - 1
								) - 31;
							var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
							var days =
								firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
							return leadingNulls(Math.ceil(days / 7), 2);
						}
						return compareByDay(firstMonday, janFirst) === 0 ? '01' : '00';
					},
					'%y': function (date2) {
						return (date2.tm_year + 1900).toString().substring(2);
					},
					'%Y': function (date2) {
						return date2.tm_year + 1900;
					},
					'%z': function (date2) {
						var off = date2.tm_gmtoff;
						var ahead = off >= 0;
						off = Math.abs(off) / 60;
						off = (off / 60) * 100 + (off % 60);
						return (ahead ? '+' : '-') + String('0000' + off).slice(-4);
					},
					'%Z': function (date2) {
						return date2.tm_zone;
					},
					'%%': function () {
						return '%';
					}
				};
				for (var rule in EXPANSION_RULES_2) {
					if (pattern.includes(rule)) {
						pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
					}
				}
				var bytes = intArrayFromString(pattern, false);
				if (bytes.length > maxsize) {
					return 0;
				}
				writeArrayToMemory(bytes, s);
				return bytes.length - 1;
			}
			function _strftime_l(s, maxsize, format, tm) {
				return _strftime(s, maxsize, format, tm);
			}
			function intArrayFromString(stringy, dontAddNull, length) {
				var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
				var u8array = new Array(len);
				var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
				if (dontAddNull) u8array.length = numBytesWritten;
				return u8array;
			}
			var asmLibraryArg = {
				X: ___sys__newselect,
				N: ___sys_access,
				Z: ___sys_bind,
				Y: ___sys_connect,
				a: ___sys_fcntl64,
				P: ___sys_fstat64,
				O: ___sys_ftruncate64,
				L: ___sys_getdents64,
				T: ___sys_getpeername,
				i: ___sys_getpid,
				W: ___sys_getsockopt,
				q: ___sys_ioctl,
				H: ___sys_madvise1,
				M: ___sys_mkdir,
				f: ___sys_open,
				U: ___sys_recvfrom,
				J: ___sys_rename,
				j: ___sys_rmdir,
				V: ___sys_sendto,
				_: ___sys_setsockopt,
				$: ___sys_shutdown,
				m: ___sys_socket,
				l: ___sys_stat64,
				k: ___sys_unlink,
				ba: __dlopen_js,
				aa: __dlsym_js,
				c: _abort,
				o: _clock_gettime,
				B: _duckdb_web_fs_directory_create,
				C: _duckdb_web_fs_directory_exists,
				y: _duckdb_web_fs_directory_list_files,
				z: _duckdb_web_fs_directory_remove,
				h: _duckdb_web_fs_file_close,
				w: _duckdb_web_fs_file_exists,
				E: _duckdb_web_fs_file_get_last_modified_time,
				x: _duckdb_web_fs_file_move,
				G: _duckdb_web_fs_file_open,
				d: _duckdb_web_fs_file_read,
				D: _duckdb_web_fs_file_truncate,
				F: _duckdb_web_fs_file_write,
				v: _duckdb_web_fs_glob,
				g: _duckdb_web_test_platform_feature,
				r: _emscripten_get_heap_max,
				da: _emscripten_memcpy_big,
				ea: _emscripten_resize_heap,
				I: _environ_get,
				Q: _environ_sizes_get,
				b: _fd_close,
				ca: _fd_fdstat_get,
				t: _fd_pread,
				s: _fd_pwrite,
				p: _fd_read,
				u: _fd_seek,
				K: _fd_sync,
				e: _fd_write,
				n: _getaddrinfo,
				R: _getentropy,
				S: _getnameinfo,
				A: _strftime_l
			};
			var asm = createWasm();
			var ___wasm_call_ctors = (Module['___wasm_call_ctors'] = function () {
				return (___wasm_call_ctors = Module['___wasm_call_ctors'] = Module['asm']['ga']).apply(
					null,
					arguments
				);
			});
			var _main = (Module['_main'] = function () {
				return (_main = Module['_main'] = Module['asm']['ha']).apply(null, arguments);
			});
			var _duckdb_web_fs_glob_add_path = (Module['_duckdb_web_fs_glob_add_path'] = function () {
				return (_duckdb_web_fs_glob_add_path = Module['_duckdb_web_fs_glob_add_path'] =
					Module['asm']['ja']).apply(null, arguments);
			});
			var _duckdb_web_clear_response = (Module['_duckdb_web_clear_response'] = function () {
				return (_duckdb_web_clear_response = Module['_duckdb_web_clear_response'] =
					Module['asm']['ka']).apply(null, arguments);
			});
			var _duckdb_web_fail_with = (Module['_duckdb_web_fail_with'] = function () {
				return (_duckdb_web_fail_with = Module['_duckdb_web_fail_with'] =
					Module['asm']['la']).apply(null, arguments);
			});
			var _duckdb_web_reset = (Module['_duckdb_web_reset'] = function () {
				return (_duckdb_web_reset = Module['_duckdb_web_reset'] = Module['asm']['ma']).apply(
					null,
					arguments
				);
			});
			var _duckdb_web_connect = (Module['_duckdb_web_connect'] = function () {
				return (_duckdb_web_connect = Module['_duckdb_web_connect'] = Module['asm']['na']).apply(
					null,
					arguments
				);
			});
			var _duckdb_web_disconnect = (Module['_duckdb_web_disconnect'] = function () {
				return (_duckdb_web_disconnect = Module['_duckdb_web_disconnect'] =
					Module['asm']['oa']).apply(null, arguments);
			});
			var _duckdb_web_flush_files = (Module['_duckdb_web_flush_files'] = function () {
				return (_duckdb_web_flush_files = Module['_duckdb_web_flush_files'] =
					Module['asm']['pa']).apply(null, arguments);
			});
			var _duckdb_web_flush_file = (Module['_duckdb_web_flush_file'] = function () {
				return (_duckdb_web_flush_file = Module['_duckdb_web_flush_file'] =
					Module['asm']['qa']).apply(null, arguments);
			});
			var _duckdb_web_open = (Module['_duckdb_web_open'] = function () {
				return (_duckdb_web_open = Module['_duckdb_web_open'] = Module['asm']['ra']).apply(
					null,
					arguments
				);
			});
			var _duckdb_web_collect_file_stats = (Module['_duckdb_web_collect_file_stats'] = function () {
				return (_duckdb_web_collect_file_stats = Module['_duckdb_web_collect_file_stats'] =
					Module['asm']['sa']).apply(null, arguments);
			});
			var _duckdb_web_export_file_stats = (Module['_duckdb_web_export_file_stats'] = function () {
				return (_duckdb_web_export_file_stats = Module['_duckdb_web_export_file_stats'] =
					Module['asm']['ta']).apply(null, arguments);
			});
			var _duckdb_web_fs_drop_file = (Module['_duckdb_web_fs_drop_file'] = function () {
				return (_duckdb_web_fs_drop_file = Module['_duckdb_web_fs_drop_file'] =
					Module['asm']['ua']).apply(null, arguments);
			});
			var _duckdb_web_fs_drop_files = (Module['_duckdb_web_fs_drop_files'] = function () {
				return (_duckdb_web_fs_drop_files = Module['_duckdb_web_fs_drop_files'] =
					Module['asm']['va']).apply(null, arguments);
			});
			var _duckdb_web_fs_glob_file_infos = (Module['_duckdb_web_fs_glob_file_infos'] = function () {
				return (_duckdb_web_fs_glob_file_infos = Module['_duckdb_web_fs_glob_file_infos'] =
					Module['asm']['wa']).apply(null, arguments);
			});
			var _duckdb_web_fs_get_file_info_by_id = (Module['_duckdb_web_fs_get_file_info_by_id'] =
				function () {
					return (_duckdb_web_fs_get_file_info_by_id = Module[
						'_duckdb_web_fs_get_file_info_by_id'
					] =
						Module['asm']['xa']).apply(null, arguments);
				});
			var _duckdb_web_fs_get_file_info_by_name = (Module['_duckdb_web_fs_get_file_info_by_name'] =
				function () {
					return (_duckdb_web_fs_get_file_info_by_name = Module[
						'_duckdb_web_fs_get_file_info_by_name'
					] =
						Module['asm']['ya']).apply(null, arguments);
				});
			var _duckdb_web_fs_set_file_descriptor = (Module['_duckdb_web_fs_set_file_descriptor'] =
				function () {
					return (_duckdb_web_fs_set_file_descriptor = Module[
						'_duckdb_web_fs_set_file_descriptor'
					] =
						Module['asm']['za']).apply(null, arguments);
				});
			var _duckdb_web_fs_register_file_url = (Module['_duckdb_web_fs_register_file_url'] =
				function () {
					return (_duckdb_web_fs_register_file_url = Module['_duckdb_web_fs_register_file_url'] =
						Module['asm']['Aa']).apply(null, arguments);
				});
			var _duckdb_web_fs_register_file_buffer = (Module['_duckdb_web_fs_register_file_buffer'] =
				function () {
					return (_duckdb_web_fs_register_file_buffer = Module[
						'_duckdb_web_fs_register_file_buffer'
					] =
						Module['asm']['Ba']).apply(null, arguments);
				});
			var _duckdb_web_copy_file_to_buffer = (Module['_duckdb_web_copy_file_to_buffer'] =
				function () {
					return (_duckdb_web_copy_file_to_buffer = Module['_duckdb_web_copy_file_to_buffer'] =
						Module['asm']['Ca']).apply(null, arguments);
				});
			var _duckdb_web_copy_file_to_path = (Module['_duckdb_web_copy_file_to_path'] = function () {
				return (_duckdb_web_copy_file_to_path = Module['_duckdb_web_copy_file_to_path'] =
					Module['asm']['Da']).apply(null, arguments);
			});
			var _duckdb_web_get_version = (Module['_duckdb_web_get_version'] = function () {
				return (_duckdb_web_get_version = Module['_duckdb_web_get_version'] =
					Module['asm']['Ea']).apply(null, arguments);
			});
			var _duckdb_web_get_feature_flags = (Module['_duckdb_web_get_feature_flags'] = function () {
				return (_duckdb_web_get_feature_flags = Module['_duckdb_web_get_feature_flags'] =
					Module['asm']['Fa']).apply(null, arguments);
			});
			var _duckdb_web_tokenize = (Module['_duckdb_web_tokenize'] = function () {
				return (_duckdb_web_tokenize = Module['_duckdb_web_tokenize'] = Module['asm']['Ga']).apply(
					null,
					arguments
				);
			});
			var _duckdb_web_prepared_create = (Module['_duckdb_web_prepared_create'] = function () {
				return (_duckdb_web_prepared_create = Module['_duckdb_web_prepared_create'] =
					Module['asm']['Ha']).apply(null, arguments);
			});
			var _duckdb_web_prepared_close = (Module['_duckdb_web_prepared_close'] = function () {
				return (_duckdb_web_prepared_close = Module['_duckdb_web_prepared_close'] =
					Module['asm']['Ia']).apply(null, arguments);
			});
			var _duckdb_web_prepared_run = (Module['_duckdb_web_prepared_run'] = function () {
				return (_duckdb_web_prepared_run = Module['_duckdb_web_prepared_run'] =
					Module['asm']['Ja']).apply(null, arguments);
			});
			var _duckdb_web_prepared_send = (Module['_duckdb_web_prepared_send'] = function () {
				return (_duckdb_web_prepared_send = Module['_duckdb_web_prepared_send'] =
					Module['asm']['Ka']).apply(null, arguments);
			});
			var _duckdb_web_query_run = (Module['_duckdb_web_query_run'] = function () {
				return (_duckdb_web_query_run = Module['_duckdb_web_query_run'] =
					Module['asm']['La']).apply(null, arguments);
			});
			var _duckdb_web_query_send = (Module['_duckdb_web_query_send'] = function () {
				return (_duckdb_web_query_send = Module['_duckdb_web_query_send'] =
					Module['asm']['Ma']).apply(null, arguments);
			});
			var _duckdb_web_query_fetch_results = (Module['_duckdb_web_query_fetch_results'] =
				function () {
					return (_duckdb_web_query_fetch_results = Module['_duckdb_web_query_fetch_results'] =
						Module['asm']['Na']).apply(null, arguments);
				});
			var _duckdb_web_get_tablenames = (Module['_duckdb_web_get_tablenames'] = function () {
				return (_duckdb_web_get_tablenames = Module['_duckdb_web_get_tablenames'] =
					Module['asm']['Oa']).apply(null, arguments);
			});
			var _duckdb_web_insert_arrow_from_ipc_stream = (Module[
				'_duckdb_web_insert_arrow_from_ipc_stream'
			] = function () {
				return (_duckdb_web_insert_arrow_from_ipc_stream = Module[
					'_duckdb_web_insert_arrow_from_ipc_stream'
				] =
					Module['asm']['Pa']).apply(null, arguments);
			});
			var _duckdb_web_insert_csv_from_path = (Module['_duckdb_web_insert_csv_from_path'] =
				function () {
					return (_duckdb_web_insert_csv_from_path = Module['_duckdb_web_insert_csv_from_path'] =
						Module['asm']['Qa']).apply(null, arguments);
				});
			var _duckdb_web_insert_json_from_path = (Module['_duckdb_web_insert_json_from_path'] =
				function () {
					return (_duckdb_web_insert_json_from_path = Module['_duckdb_web_insert_json_from_path'] =
						Module['asm']['Ra']).apply(null, arguments);
				});
			var ___errno_location = (Module['___errno_location'] = function () {
				return (___errno_location = Module['___errno_location'] = Module['asm']['Sa']).apply(
					null,
					arguments
				);
			});
			var _htonl = (Module['_htonl'] = function () {
				return (_htonl = Module['_htonl'] = Module['asm']['Ta']).apply(null, arguments);
			});
			var _ntohs = (Module['_ntohs'] = function () {
				return (_ntohs = Module['_ntohs'] = Module['asm']['Ua']).apply(null, arguments);
			});
			var _htons = (Module['_htons'] = function () {
				return (_htons = Module['_htons'] = Module['asm']['Va']).apply(null, arguments);
			});
			var stackSave = (Module['stackSave'] = function () {
				return (stackSave = Module['stackSave'] = Module['asm']['Wa']).apply(null, arguments);
			});
			var stackRestore = (Module['stackRestore'] = function () {
				return (stackRestore = Module['stackRestore'] = Module['asm']['Xa']).apply(null, arguments);
			});
			var stackAlloc = (Module['stackAlloc'] = function () {
				return (stackAlloc = Module['stackAlloc'] = Module['asm']['Ya']).apply(null, arguments);
			});
			var _malloc = (Module['_malloc'] = function () {
				return (_malloc = Module['_malloc'] = Module['asm']['Za']).apply(null, arguments);
			});
			var _free = (Module['_free'] = function () {
				return (_free = Module['_free'] = Module['asm']['_a']).apply(null, arguments);
			});
			Module['ccall'] = ccall;
			var calledRun;
			function ExitStatus(status) {
				this.name = 'ExitStatus';
				this.message = 'Program terminated with exit(' + status + ')';
				this.status = status;
			}
			var calledMain = false;
			dependenciesFulfilled = function runCaller() {
				if (!calledRun) run();
				if (!calledRun) dependenciesFulfilled = runCaller;
			};
			function callMain(args) {
				var entryFunction = Module['_main'];
				var argc = 0;
				var argv = 0;
				try {
					var ret = entryFunction(argc, argv);
					exit(ret, true);
					return ret;
				} catch (e) {
					return handleException(e);
				} finally {
					calledMain = true;
				}
			}
			function run(args) {
				args = args || arguments_;
				if (runDependencies > 0) {
					return;
				}
				preRun();
				if (runDependencies > 0) {
					return;
				}
				function doRun() {
					if (calledRun) return;
					calledRun = true;
					Module['calledRun'] = true;
					if (ABORT) return;
					initRuntime();
					preMain();
					readyPromiseResolve(Module);
					if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();
					if (shouldRunNow) callMain(args);
					postRun();
				}
				if (Module['setStatus']) {
					Module['setStatus']('Running...');
					setTimeout(function () {
						setTimeout(function () {
							Module['setStatus']('');
						}, 1);
						doRun();
					}, 1);
				} else {
					doRun();
				}
			}
			Module['run'] = run;
			function exit(status, implicit) {
				EXITSTATUS = status;
				if (keepRuntimeAlive()) {
				} else {
					exitRuntime();
				}
				procExit(status);
			}
			function procExit(code) {
				EXITSTATUS = code;
				if (!keepRuntimeAlive()) {
					if (Module['onExit']) Module['onExit'](code);
					ABORT = true;
				}
				quit_(code, new ExitStatus(code));
			}
			if (Module['preInit']) {
				if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
				while (Module['preInit'].length > 0) {
					Module['preInit'].pop()();
				}
			}
			var shouldRunNow = true;
			if (Module['noInitialRun']) shouldRunNow = false;
			run();
			return DuckDB5.ready;
		};
	})();
	var duckdb_next_default = DuckDB3;

	// src/bindings/bindings_browser_next.ts
	var DuckDB4 = class extends DuckDBBrowserBindings {
		constructor(logger, runtime, mainModuleURL, pthreadWorkerURL = null) {
			super(logger, runtime, mainModuleURL, pthreadWorkerURL);
		}
		instantiateImpl(moduleOverrides) {
			return duckdb_next_default({
				...moduleOverrides,
				instantiateWasm: this.instantiateWasm.bind(this),
				locateFile: this.locateFile.bind(this)
			});
		}
	};

	// src/targets/duckdb-browser-blocking.ts
	async function createDuckDB(bundles, logger, runtime) {
		const platform = await getPlatformFeatures();
		if (platform.wasmExceptions && platform.wasmSIMD) {
			if (bundles.next) {
				return new DuckDB4(logger, runtime, bundles.next.mainModule);
			}
		}
		return new DuckDB2(logger, runtime, bundles.mvp.mainModule);
	}

	// src/parallel/async_connection.ts
	var AsyncDuckDBConnection = class {
		constructor(bindings, conn) {
			this._bindings = bindings;
			this._conn = conn;
		}
		get bindings() {
			return this._bindings;
		}
		async close() {
			return this._bindings.disconnect(this._conn);
		}
		useUnsafe(callback) {
			return callback(this._bindings, this._conn);
		}
		async query(text) {
			this._bindings.logger.log({
				timestamp: new Date(),
				level: LogLevel.INFO,
				origin: LogOrigin.ASYNC_DUCKDB,
				topic: LogTopic.QUERY,
				event: LogEvent.RUN,
				value: text
			});
			const buffer = await this._bindings.runQuery(this._conn, text);
			const reader = import_Arrow.RecordBatchReader.from(buffer);
			console.assert(reader.isSync());
			console.assert(reader.isFile());
			return import_Arrow.Table.from(reader);
		}
		async send(text) {
			this._bindings.logger.log({
				timestamp: new Date(),
				level: LogLevel.INFO,
				origin: LogOrigin.ASYNC_DUCKDB,
				topic: LogTopic.QUERY,
				event: LogEvent.RUN,
				value: text
			});
			const header = await this._bindings.sendQuery(this._conn, text);
			const iter = new AsyncResultStreamIterator(this._bindings, this._conn, header);
			const reader = await import_Arrow.RecordBatchReader.from(iter);
			console.assert(reader.isAsync());
			console.assert(reader.isStream());
			return reader;
		}
		async getTableNames(query) {
			return await this._bindings.getTableNames(this._conn, query);
		}
		async prepare(text) {
			const stmt = await this._bindings.createPrepared(this._conn, text);
			return new AsyncPreparedStatement(this._bindings, this._conn, stmt);
		}
		async insertArrowTable(table, options) {
			const buffer = table.serialize('binary', true);
			await this.insertArrowFromIPCStream(buffer, options);
		}
		async insertArrowFromIPCStream(buffer, options) {
			await this._bindings.insertArrowFromIPCStream(this._conn, buffer, options);
		}
		async insertCSVFromPath(text, options) {
			await this._bindings.insertCSVFromPath(this._conn, text, options);
		}
		async insertJSONFromPath(text, options) {
			await this._bindings.insertJSONFromPath(this._conn, text, options);
		}
	};
	var AsyncResultStreamIterator = class {
		constructor(db2, conn, header) {
			this.db = db2;
			this.conn = conn;
			this.header = header;
			this._first = true;
			this._depleted = false;
			this._inFlight = null;
		}
		async next() {
			if (this._first) {
				this._first = false;
				return { done: false, value: this.header };
			}
			if (this._depleted) {
				return { done: true, value: null };
			}
			let buffer;
			if (this._inFlight != null) {
				buffer = await this._inFlight;
				this._inFlight = null;
			} else {
				buffer = await this.db.fetchQueryResults(this.conn);
			}
			this._depleted = buffer.length == 0;
			if (!this._depleted) {
				this._inFlight = this.db.fetchQueryResults(this.conn);
			}
			return {
				done: this._depleted,
				value: buffer
			};
		}
		[Symbol.asyncIterator]() {
			return this;
		}
	};
	var AsyncPreparedStatement = class {
		constructor(bindings, connectionId, statementId) {
			this.bindings = bindings;
			this.connectionId = connectionId;
			this.statementId = statementId;
		}
		async close() {
			await this.bindings.closePrepared(this.connectionId, this.statementId);
		}
		async query(...params) {
			const buffer = await this.bindings.runPrepared(this.connectionId, this.statementId, params);
			const reader = import_Arrow.RecordBatchReader.from(buffer);
			console.assert(reader.isSync());
			console.assert(reader.isFile());
			return import_Arrow.Table.from(reader);
		}
		async send(...params) {
			const header = await this.bindings.sendPrepared(this.connectionId, this.statementId, params);
			const iter = new AsyncResultStreamIterator(this.bindings, this.connectionId, header);
			const reader = await import_Arrow.RecordBatchReader.from(iter);
			console.assert(reader.isAsync());
			console.assert(reader.isStream());
			return reader;
		}
	};

	// src/parallel/worker_request.ts
	var WorkerRequestType = /* @__PURE__ */ ((WorkerRequestType2) => {
		WorkerRequestType2['CLOSE_PREPARED'] = 'CLOSE_PREPARED';
		WorkerRequestType2['COLLECT_FILE_STATISTICS'] = 'COLLECT_FILE_STATISTICS';
		WorkerRequestType2['CONNECT'] = 'CONNECT';
		WorkerRequestType2['COPY_FILE_TO_BUFFER'] = 'COPY_FILE_TO_BUFFER';
		WorkerRequestType2['COPY_FILE_TO_PATH'] = 'COPY_FILE_TO_PATH';
		WorkerRequestType2['CREATE_PREPARED'] = 'CREATE_PREPARED';
		WorkerRequestType2['DISCONNECT'] = 'DISCONNECT';
		WorkerRequestType2['DROP_FILE'] = 'DROP_FILE';
		WorkerRequestType2['DROP_FILES'] = 'DROP_FILES';
		WorkerRequestType2['EXPORT_FILE_STATISTICS'] = 'EXPORT_FILE_STATISTICS';
		WorkerRequestType2['FETCH_QUERY_RESULTS'] = 'FETCH_QUERY_RESULTS';
		WorkerRequestType2['FLUSH_FILES'] = 'FLUSH_FILES';
		WorkerRequestType2['GET_FEATURE_FLAGS'] = 'GET_FEATURE_FLAGS';
		WorkerRequestType2['GET_TABLE_NAMES'] = 'GET_TABLE_NAMES';
		WorkerRequestType2['GET_VERSION'] = 'GET_VERSION';
		WorkerRequestType2['GLOB_FILE_INFOS'] = 'GLOB_FILE_INFOS';
		WorkerRequestType2['INSERT_ARROW_FROM_IPC_STREAM'] = 'INSERT_ARROW_FROM_IPC_STREAM';
		WorkerRequestType2['INSERT_CSV_FROM_PATH'] = 'IMPORT_CSV_FROM_PATH';
		WorkerRequestType2['INSERT_JSON_FROM_PATH'] = 'IMPORT_JSON_FROM_PATH';
		WorkerRequestType2['INSTANTIATE'] = 'INSTANTIATE';
		WorkerRequestType2['OPEN'] = 'OPEN';
		WorkerRequestType2['PING'] = 'PING';
		WorkerRequestType2['REGISTER_FILE_BUFFER'] = 'REGISTER_FILE_BUFFER';
		WorkerRequestType2['REGISTER_FILE_HANDLE'] = 'REGISTER_FILE_HANDLE';
		WorkerRequestType2['REGISTER_FILE_URL'] = 'REGISTER_FILE_URL';
		WorkerRequestType2['RESET'] = 'RESET';
		WorkerRequestType2['RUN_PREPARED'] = 'RUN_PREPARED';
		WorkerRequestType2['RUN_QUERY'] = 'RUN_QUERY';
		WorkerRequestType2['SEND_PREPARED'] = 'SEND_PREPARED';
		WorkerRequestType2['SEND_QUERY'] = 'SEND_QUERY';
		WorkerRequestType2['TOKENIZE'] = 'TOKENIZE';
		return WorkerRequestType2;
	})(WorkerRequestType || {});
	var WorkerResponseType = /* @__PURE__ */ ((WorkerResponseType2) => {
		WorkerResponseType2['CONNECTION_INFO'] = 'CONNECTION_INFO';
		WorkerResponseType2['ERROR'] = 'ERROR';
		WorkerResponseType2['FEATURE_FLAGS'] = 'FEATURE_FLAGS';
		WorkerResponseType2['FILE_BUFFER'] = 'FILE_BUFFER';
		WorkerResponseType2['FILE_INFOS'] = 'FILE_INFOS';
		WorkerResponseType2['FILE_SIZE'] = 'FILE_SIZE';
		WorkerResponseType2['FILE_STATISTICS'] = 'FILE_STATISTICS';
		WorkerResponseType2['LOG'] = 'LOG';
		WorkerResponseType2['OK'] = 'OK';
		WorkerResponseType2['PREPARED_STATEMENT_ID'] = 'PREPARED_STATEMENT_ID';
		WorkerResponseType2['QUERY_PLAN'] = 'QUERY_PLAN';
		WorkerResponseType2['QUERY_RESULT'] = 'QUERY_RESULT';
		WorkerResponseType2['QUERY_RESULT_CHUNK'] = 'QUERY_RESULT_CHUNK';
		WorkerResponseType2['QUERY_START'] = 'QUERY_START';
		WorkerResponseType2['REGISTERED_FILE'] = 'REGISTERED_FILE';
		WorkerResponseType2['SCRIPT_TOKENS'] = 'SCRIPT_TOKENS';
		WorkerResponseType2['SUCCESS'] = 'SUCCESS';
		WorkerResponseType2['TABLE_NAMES'] = 'TABLE_NAMES';
		WorkerResponseType2['VERSION_STRING'] = 'VERSION_STRING';
		return WorkerResponseType2;
	})(WorkerResponseType || {});
	var WorkerTask = class {
		constructor(type, data) {
			this.promiseResolver = () => {};
			this.promiseRejecter = () => {};
			this.type = type;
			this.data = data;
			this.promise = new Promise((resolve, reject) => {
				this.promiseResolver = resolve;
				this.promiseRejecter = reject;
			});
		}
	};

	// src/parallel/async_bindings.ts
	var TEXT_ENCODER2 = new TextEncoder();
	var AsyncDuckDB = class {
		constructor(logger, worker2 = null) {
			this._worker = null;
			this._workerShutdownPromise = null;
			this._workerShutdownResolver = () => {};
			this._nextMessageId = 0;
			this._pendingRequests = /* @__PURE__ */ new Map();
			this._logger = logger;
			this._onMessageHandler = this.onMessage.bind(this);
			this._onErrorHandler = this.onError.bind(this);
			this._onCloseHandler = this.onClose.bind(this);
			if (worker2 != null) this.attach(worker2);
		}
		get logger() {
			return this._logger;
		}
		attach(worker2) {
			this._worker = worker2;
			this._worker.addEventListener('message', this._onMessageHandler);
			this._worker.addEventListener('error', this._onErrorHandler);
			this._worker.addEventListener('close', this._onCloseHandler);
			this._workerShutdownPromise = new Promise((resolve, _reject) => {
				this._workerShutdownResolver = resolve;
			});
		}
		detach() {
			if (!this._worker) return;
			this._worker.removeEventListener('message', this._onMessageHandler);
			this._worker.removeEventListener('error', this._onErrorHandler);
			this._worker.removeEventListener('close', this._onCloseHandler);
			this._worker = null;
			this._workerShutdownResolver(null);
			this._workerShutdownPromise = null;
			this._workerShutdownResolver = () => {};
		}
		async terminate() {
			if (!this._worker) return;
			this._worker.terminate();
			this._worker = null;
			this._workerShutdownPromise = null;
			this._workerShutdownResolver = () => {};
		}
		async postTask(task, transfer = []) {
			if (!this._worker) {
				console.error('cannot send a message since the worker is not set!');
				return void 0;
			}
			const mid = this._nextMessageId++;
			this._pendingRequests.set(mid, task);
			this._worker.postMessage({
				messageId: mid,
				type: task.type,
				data: task.data
			});
			return await task.promise;
		}
		onMessage(event) {
			const response = event.data;
			if (response.type == WorkerResponseType.LOG) {
				this._logger.log(response.data);
			}
			const task = this._pendingRequests.get(response.requestId);
			if (!task) {
				console.warn(`unassociated response: [${response.requestId}, ${response.type.toString()}]`);
				return;
			}
			this._pendingRequests.delete(response.requestId);
			if (response.type == WorkerResponseType.ERROR) {
				const e = new Error(response.data.message);
				e.name = response.data.name;
				e.stack = response.data.stack;
				task.promiseRejecter(e);
				return;
			}
			switch (task.type) {
				case WorkerRequestType.CLOSE_PREPARED:
				case WorkerRequestType.COLLECT_FILE_STATISTICS:
				case WorkerRequestType.COPY_FILE_TO_PATH:
				case WorkerRequestType.DISCONNECT:
				case WorkerRequestType.DROP_FILES:
				case WorkerRequestType.FLUSH_FILES:
				case WorkerRequestType.INSERT_ARROW_FROM_IPC_STREAM:
				case WorkerRequestType.INSERT_CSV_FROM_PATH:
				case WorkerRequestType.INSERT_JSON_FROM_PATH:
				case WorkerRequestType.INSTANTIATE:
				case WorkerRequestType.OPEN:
				case WorkerRequestType.PING:
				case WorkerRequestType.REGISTER_FILE_BUFFER:
				case WorkerRequestType.REGISTER_FILE_HANDLE:
				case WorkerRequestType.REGISTER_FILE_URL:
				case WorkerRequestType.RESET:
					if (response.type == WorkerResponseType.OK) {
						task.promiseResolver(response.data);
						return;
					}
					break;
				case WorkerRequestType.GLOB_FILE_INFOS:
					if (response.type == WorkerResponseType.FILE_INFOS) {
						task.promiseResolver(response.data);
						return;
					}
					break;
				case WorkerRequestType.GET_VERSION:
					if (response.type == WorkerResponseType.VERSION_STRING) {
						task.promiseResolver(response.data);
						return;
					}
					break;
				case WorkerRequestType.GET_FEATURE_FLAGS:
					if (response.type == WorkerResponseType.FEATURE_FLAGS) {
						task.promiseResolver(response.data);
						return;
					}
					break;
				case WorkerRequestType.GET_TABLE_NAMES:
					if (response.type == WorkerResponseType.TABLE_NAMES) {
						task.promiseResolver(response.data);
						return;
					}
					break;
				case WorkerRequestType.TOKENIZE:
					if (response.type == WorkerResponseType.SCRIPT_TOKENS) {
						task.promiseResolver(response.data);
						return;
					}
					break;
				case WorkerRequestType.DROP_FILE:
					if (response.type == WorkerResponseType.SUCCESS) {
						task.promiseResolver(response.data);
						return;
					}
					break;
				case WorkerRequestType.COPY_FILE_TO_BUFFER:
					if (response.type == WorkerResponseType.FILE_BUFFER) {
						task.promiseResolver(response.data);
						return;
					}
					break;
				case WorkerRequestType.EXPORT_FILE_STATISTICS:
					if (response.type == WorkerResponseType.FILE_STATISTICS) {
						task.promiseResolver(response.data);
						return;
					}
					break;
				case WorkerRequestType.CONNECT:
					if (response.type == WorkerResponseType.CONNECTION_INFO) {
						task.promiseResolver(response.data);
						return;
					}
					break;
				case WorkerRequestType.RUN_PREPARED:
				case WorkerRequestType.RUN_QUERY:
					if (response.type == WorkerResponseType.QUERY_RESULT) {
						task.promiseResolver(response.data);
						return;
					}
					break;
				case WorkerRequestType.SEND_PREPARED:
				case WorkerRequestType.SEND_QUERY:
					if (response.type == WorkerResponseType.QUERY_START) {
						task.promiseResolver(response.data);
						return;
					}
					break;
				case WorkerRequestType.FETCH_QUERY_RESULTS:
					if (response.type == WorkerResponseType.QUERY_RESULT_CHUNK) {
						task.promiseResolver(response.data);
						return;
					}
					break;
				case WorkerRequestType.CREATE_PREPARED:
					if (response.type == WorkerResponseType.PREPARED_STATEMENT_ID) {
						task.promiseResolver(response.data);
						return;
					}
					break;
			}
			task.promiseRejecter(new Error(`unexpected response type: ${response.type.toString()}`));
		}
		onError(event) {
			console.error(event);
			console.error(`error in duckdb worker: ${event.message}`);
			this._pendingRequests.clear();
		}
		onClose() {
			this._workerShutdownResolver(null);
			if (this._pendingRequests.size != 0) {
				console.warn(`worker terminated with ${this._pendingRequests.size} pending requests`);
				return;
			}
			this._pendingRequests.clear();
		}
		async reset() {
			const task = new WorkerTask(WorkerRequestType.RESET, null);
			return await this.postTask(task);
		}
		async ping() {
			const task = new WorkerTask(WorkerRequestType.PING, null);
			await this.postTask(task);
		}
		async dropFile(name) {
			const task = new WorkerTask(WorkerRequestType.DROP_FILE, name);
			return await this.postTask(task);
		}
		async dropFiles() {
			const task = new WorkerTask(WorkerRequestType.DROP_FILES, null);
			return await this.postTask(task);
		}
		async flushFiles() {
			const task = new WorkerTask(WorkerRequestType.FLUSH_FILES, null);
			return await this.postTask(task);
		}
		async instantiate(mainModuleURL, pthreadWorkerURL = null) {
			const task = new WorkerTask(WorkerRequestType.INSTANTIATE, [mainModuleURL, pthreadWorkerURL]);
			return await this.postTask(task);
		}
		async getVersion() {
			const task = new WorkerTask(WorkerRequestType.GET_VERSION, null);
			const version = await this.postTask(task);
			return version;
		}
		async getFeatureFlags() {
			const task = new WorkerTask(WorkerRequestType.GET_FEATURE_FLAGS, null);
			const feature = await this.postTask(task);
			return feature;
		}
		async open(config) {
			const task = new WorkerTask(WorkerRequestType.OPEN, config);
			await this.postTask(task);
		}
		async tokenize(text) {
			const task = new WorkerTask(WorkerRequestType.TOKENIZE, text);
			const tokens = await this.postTask(task);
			return tokens;
		}
		async connectInternal() {
			const task = new WorkerTask(WorkerRequestType.CONNECT, null);
			return await this.postTask(task);
		}
		async connect() {
			const cid = await this.connectInternal();
			return new AsyncDuckDBConnection(this, cid);
		}
		async disconnect(conn) {
			const task = new WorkerTask(WorkerRequestType.DISCONNECT, conn);
			await this.postTask(task);
		}
		async runQuery(conn, text) {
			const task = new WorkerTask(WorkerRequestType.RUN_QUERY, [conn, text]);
			return await this.postTask(task);
		}
		async sendQuery(conn, text) {
			const task = new WorkerTask(WorkerRequestType.SEND_QUERY, [conn, text]);
			return await this.postTask(task);
		}
		async fetchQueryResults(conn) {
			const task = new WorkerTask(WorkerRequestType.FETCH_QUERY_RESULTS, conn);
			return await this.postTask(task);
		}
		async getTableNames(conn, text) {
			const task = new WorkerTask(WorkerRequestType.GET_TABLE_NAMES, [conn, text]);
			return await this.postTask(task);
		}
		async createPrepared(conn, text) {
			const task = new WorkerTask(WorkerRequestType.CREATE_PREPARED, [conn, text]);
			return await this.postTask(task);
		}
		async closePrepared(conn, statement) {
			const task = new WorkerTask(WorkerRequestType.CLOSE_PREPARED, [conn, statement]);
			await this.postTask(task);
		}
		async runPrepared(conn, statement, params) {
			const task = new WorkerTask(WorkerRequestType.RUN_PREPARED, [conn, statement, params]);
			return await this.postTask(task);
		}
		async sendPrepared(conn, statement, params) {
			const task = new WorkerTask(WorkerRequestType.SEND_PREPARED, [conn, statement, params]);
			return await this.postTask(task);
		}
		async globFiles(path) {
			const task = new WorkerTask(WorkerRequestType.GLOB_FILE_INFOS, path);
			return await this.postTask(task);
		}
		async registerFileText(name, text) {
			const buffer = TEXT_ENCODER2.encode(text);
			await this.registerFileBuffer(name, buffer);
		}
		async registerFileURL(name, url) {
			if (url === void 0) {
				url = name;
			}
			const task = new WorkerTask(WorkerRequestType.REGISTER_FILE_URL, [name, url]);
			await this.postTask(task);
		}
		async registerEmptyFileBuffer(name) {
			const task = new WorkerTask(WorkerRequestType.REGISTER_FILE_BUFFER, [name, new Uint8Array()]);
			await this.postTask(task);
		}
		async registerFileBuffer(name, buffer) {
			const task = new WorkerTask(WorkerRequestType.REGISTER_FILE_BUFFER, [name, buffer]);
			await this.postTask(task, [buffer.buffer]);
		}
		async registerFileHandle(name, handle) {
			const task = new WorkerTask(WorkerRequestType.REGISTER_FILE_HANDLE, [name, handle]);
			await this.postTask(task, []);
		}
		async collectFileStatistics(name, enable) {
			const task = new WorkerTask(WorkerRequestType.COLLECT_FILE_STATISTICS, [name, enable]);
			await this.postTask(task, []);
		}
		async exportFileStatistics(name) {
			const task = new WorkerTask(WorkerRequestType.EXPORT_FILE_STATISTICS, name);
			return await this.postTask(task, []);
		}
		async copyFileToBuffer(name) {
			const task = new WorkerTask(WorkerRequestType.COPY_FILE_TO_BUFFER, name);
			return await this.postTask(task);
		}
		async copyFileToPath(name, path) {
			const task = new WorkerTask(WorkerRequestType.COPY_FILE_TO_PATH, [name, path]);
			await this.postTask(task);
		}
		async insertArrowFromIPCStream(conn, buffer, options) {
			if (buffer.length == 0) return;
			const task = new WorkerTask(WorkerRequestType.INSERT_ARROW_FROM_IPC_STREAM, [
				conn,
				buffer,
				options
			]);
			await this.postTask(task, [buffer.buffer]);
		}
		async insertCSVFromPath(conn, path, options) {
			if (options.columns !== void 0) {
				const out = [];
				for (const k in options.columns) {
					const type = options.columns[k];
					out.push(flattenArrowField(k, type));
				}
				options.columnsFlat = out;
				delete options.columns;
			}
			const task = new WorkerTask(WorkerRequestType.INSERT_CSV_FROM_PATH, [conn, path, options]);
			await this.postTask(task);
		}
		async insertJSONFromPath(conn, path, options) {
			if (options.columns !== void 0) {
				const out = [];
				for (const k in options.columns) {
					const type = options.columns[k];
					out.push(flattenArrowField(k, type));
				}
				options.columnsFlat = out;
				delete options.columns;
			}
			const task = new WorkerTask(WorkerRequestType.INSERT_JSON_FROM_PATH, [conn, path, options]);
			await this.postTask(task);
		}
	};

	// src/worker.ts
	var import_web_worker = __toESM(require_browser());
	async function createWorker(url) {
		const workerScript = await fetch(url, {
			mode: 'cors'
		});
		const workerURL = URL.createObjectURL(await workerScript.blob());
		return new import_web_worker.default(workerURL);
	}

	// test/bindings.test.ts
	function testBindings(db2, baseURL2) {
		let conn;
		beforeEach(() => {
			conn = db2().connect();
		});
		afterEach(() => {
			conn.close();
			db2().flushFiles();
			db2().dropFiles();
		});
		describe('DuckDBBindings', () => {
			describe('error handling', () => {
				it('INVALID SQL', async () => {
					let error = null;
					try {
						conn.send('INVALID');
					} catch (e) {
						error = e;
					}
					expect(error).not.toBe(null);
				});
			});
			describe('Open', () => {});
			describe('Reset', () => {
				it('table must disappear', async () => {
					await db2().reset();
					conn = db2().connect();
					conn.query('CREATE TABLE foo (a int)');
					let table = conn.query('PRAGMA show_tables;');
					let rows = table.toArray();
					expect(rows.length).toEqual(1);
					expect(rows[0].name).toEqual('foo');
					await db2().reset();
					conn = db2().connect();
					table = conn.query('PRAGMA show_tables;');
					rows = table.toArray();
					expect(rows.length).toEqual(0);
				});
			});
			describe('Prepared Statement', () => {
				it('Materialized', async () => {
					const stmt = conn.prepare(
						'SELECT v::INTEGER + ? AS v FROM generate_series(0, 10000) as t(v);'
					);
					const result = stmt.query(234);
					expect(result.length).toBe(10001);
					stmt.close();
				});
				it('Streaming', async () => {
					const stmt = conn.prepare(
						'SELECT v::INTEGER + ? AS v FROM generate_series(0, 10000) as t(v);'
					);
					const stream = stmt.send(234);
					let size = 0;
					for (const batch of stream) {
						size += batch.length;
					}
					expect(size).toBe(10001);
					conn.close();
				});
				it('Typecheck', async () => {
					conn.query(`CREATE TABLE typecheck (
                    a BOOLEAN DEFAULT NULL,
                    b TINYINT DEFAULT NULL,
                    c SMALLINT DEFAULT NULL,
                    d INTEGER DEFAULT NULL,
                    e BIGINT DEFAULT NULL,
                    f FLOAT DEFAULT NULL,
                    g DOUBLE DEFAULT NULL,
                    h CHAR(11) DEFAULT NULL,
                    i VARCHAR(11) DEFAULT NULL
                )`);
					const stmt = conn.prepare('INSERT INTO typecheck VALUES(?,?,?,?,?,?,?,?,?)');
					expect(() =>
						stmt.query(true, 100, 1e4, 1e6, 5e9, 0.5, Math.PI, 'hello world', 'hi')
					).not.toThrow();
					expect(() =>
						stmt.query('test', 100, 1e4, 1e6, 5e9, 0.5, Math.PI, 'hello world', 'hi')
					).toThrow();
					expect(() =>
						stmt.query(true, 1e4, 1e4, 1e6, 5e9, 0.5, Math.PI, 'hello world', 'hi')
					).toThrow();
					expect(() =>
						stmt.query(true, 100, 1e6, 1e6, 5e9, 0.5, Math.PI, 'hello world', 'hi')
					).toThrow();
					expect(() =>
						stmt.query(true, 100, 1e4, 5e9, 5e9, 0.5, Math.PI, 'hello world', 'hi')
					).toThrow();
					conn.close();
				});
			});
		});
	}
	function testAsyncBindings(adb2, baseURL2) {
		beforeEach(async () => {});
		afterEach(async () => {
			await adb2().flushFiles();
			await adb2().dropFiles();
			await adb2().open({
				path: ':memory:'
			});
		});
		describe('Bindings', () => {
			describe('Open', () => {
				it('Remote TPCH 0_01', async () => {
					await adb2().registerFileURL('tpch_0_01.db', `${baseURL2}/tpch/0_01/duckdb/db`);
					await adb2().open({
						path: 'tpch_0_01.db'
					});
					const conn = await adb2().connect();
					const table = await conn.query('select count(*)::INTEGER as a from lineitem');
					const rows = table.toArray();
					expect(rows.length).toEqual(1);
					expect(rows[0].a).toEqual(60175);
				});
			});
			describe('Patching', () => {
				it('Count(*) Default', async () => {
					await adb2().open({
						path: ':memory:',
						query: {
							castBigIntToDouble: false
						}
					});
					const conn = await adb2().connect();
					const table = await conn.query('select 1::BIGINT');
					expect(table.schema.fields.length).toEqual(1);
					expect(table.schema.fields[0].typeId).toEqual(import_Arrow.Type.Int);
				});
				it('Count(*) No BigInt', async () => {
					await adb2().open({
						path: ':memory:',
						query: {
							castBigIntToDouble: true
						}
					});
					const conn = await adb2().connect();
					const table = await conn.query('select 1::BIGINT');
					expect(table.schema.fields.length).toEqual(1);
					expect(table.schema.fields[0].typeId).toEqual(import_Arrow.Type.Float);
				});
			});
			describe('Prepared Statement', () => {
				it('Materialized', async () => {
					const conn = await adb2().connect();
					const stmt = await conn.prepare('SELECT v + ? FROM generate_series(0, 10000) as t(v);');
					const result = await stmt.query(234);
					expect(result.length).toBe(10001);
					await stmt.close();
				});
				it('Streaming', async () => {
					const conn = await adb2().connect();
					const stmt = await conn.prepare(
						'SELECT v::INTEGER + ? AS v FROM generate_series(0, 10000) as t(v);'
					);
					const stream = await stmt.send(234);
					let size = 0;
					for await (const batch of stream) {
						size += batch.length;
					}
					expect(size).toBe(10001);
					await conn.close();
				});
				it('Typecheck', async () => {
					const conn = await adb2().connect();
					await conn.query(`CREATE TABLE typecheck (
                    a BOOLEAN DEFAULT NULL,
                    b TINYINT DEFAULT NULL,
                    c SMALLINT DEFAULT NULL,
                    d INTEGER DEFAULT NULL,
                    e BIGINT DEFAULT NULL,
                    f FLOAT DEFAULT NULL,
                    g DOUBLE DEFAULT NULL,
                    h CHAR(11) DEFAULT NULL,
                    i VARCHAR(11) DEFAULT NULL
                )`);
					const stmt = await conn.prepare('INSERT INTO typecheck VALUES(?,?,?,?,?,?,?,?,?)');
					const expectToThrow = async (fn) => {
						let throwed = false;
						try {
							await fn();
						} catch (e) {
							throwed = true;
						}
						expect(throwed).toBe(true);
					};
					expectToThrow(async () => {
						await stmt.query('test', 100, 1e4, 1e6, 5e9, 0.5, Math.PI, 'hello world', 'hi');
					});
					expectToThrow(async () => {
						await stmt.query(true, 1e4, 1e4, 1e6, 5e9, 0.5, Math.PI, 'hello world', 'hi');
					});
					expectToThrow(async () => {
						await stmt.query(true, 100, 1e6, 1e6, 5e9, 0.5, Math.PI, 'hello world', 'hi');
					});
					expectToThrow(async () => {
						await stmt.query(true, 100, 1e4, 5e9, 5e9, 0.5, Math.PI, 'hello world', 'hi');
					});
					await conn.close();
				});
			});
		});
	}

	// test/batch_stream.test.ts
	var testRows = 1e4;
	function testBatchStream(db2) {
		let conn;
		beforeEach(() => {
			conn = db2().connect();
		});
		afterEach(() => {
			conn.close();
			db2().flushFiles();
			db2().dropFiles();
		});
		describe('Arrow Record-Batches Row-Major', () => {
			describe('single column', () => {
				it('TINYINT', () => {
					const result = conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					let i = 0;
					for (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const row of batch) {
							expect(row.v).toBe(i++ & 127);
						}
					}
					expect(i).toBe(testRows + 1);
				});
				it('SMALLINT', () => {
					const result = conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					let i = 0;
					for (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const row of batch) {
							expect(row.v).toBe(i++ & 32767);
						}
					}
					expect(i).toBe(testRows + 1);
				});
				it('INTEGER', () => {
					const result = conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					let i = 0;
					for (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const row of batch) {
							expect(row.v).toBe(i++);
						}
					}
					expect(i).toBe(testRows + 1);
				});
				it('BIGINT', () => {
					const result = conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					let i = 0;
					for (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const row of batch) {
							expect(row.v.valueOf()).toBe(i++);
						}
					}
					expect(i).toBe(testRows + 1);
				});
				it('STRING', () => {
					const result = conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					let i = 0;
					for (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const row of batch) {
							expect(row.v).toBe(String(i++));
						}
					}
					expect(i).toBe(testRows + 1);
				});
			});
		});
		describe('Arrow Record-Batches Column-Major', () => {
			describe('single column', () => {
				it('TINYINT', () => {
					const result = conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					let i = 0;
					for (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const v of batch.getChildAt(0)) {
							expect(v).toBe(i++ & 127);
						}
					}
					expect(i).toBe(testRows + 1);
				});
				it('SMALLINT', () => {
					const result = conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					let i = 0;
					for (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const v of batch.getChildAt(0)) {
							expect(v).toBe(i++ & 32767);
						}
					}
					expect(i).toBe(testRows + 1);
				});
				it('INTEGER', () => {
					const result = conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					let i = 0;
					for (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const v of batch.getChildAt(0)) {
							expect(v).toBe(i++);
						}
					}
					expect(i).toBe(testRows + 1);
				});
				it('BIGINT', () => {
					const result = conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					let i = 0;
					for (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const v of batch.getChildAt(0)) {
							expect(v.valueOf()).toBe(i++);
						}
					}
					expect(i).toBe(testRows + 1);
				});
				it('STRING', () => {
					const result = conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					let i = 0;
					for (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const v of batch.getChildAt(0)) {
							expect(v).toBe(String(i++));
						}
					}
					expect(i).toBe(testRows + 1);
				});
			});
		});
		describe('Arrow Table Row-Major', () => {
			describe('single column', () => {
				it('TINYINT', () => {
					const result = conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					const table = import_Arrow.Table.from(result);
					let i = 0;
					for (const row of table) {
						expect(row.v).toBe(i++ & 127);
					}
					expect(i).toBe(testRows + 1);
				});
				it('SMALLINT', () => {
					const result = conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					const table = import_Arrow.Table.from(result);
					let i = 0;
					for (const row of table) {
						expect(row.v).toBe(i++ & 32767);
					}
					expect(i).toBe(testRows + 1);
				});
				it('INTEGER', () => {
					const result = conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					const table = import_Arrow.Table.from(result);
					let i = 0;
					for (const row of table) {
						expect(row.v).toBe(i++);
					}
					expect(i).toBe(testRows + 1);
				});
				it('BIGINT', () => {
					const result = conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					const table = import_Arrow.Table.from(result);
					let i = 0;
					for (const row of table) {
						expect(row.v.valueOf()).toBe(i++);
					}
					expect(i).toBe(testRows + 1);
				});
				it('STRING', () => {
					const result = conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					const table = import_Arrow.Table.from(result);
					let i = 0;
					for (const row of table) {
						expect(row.v.valueOf()).toBe(String(i++));
					}
					expect(i).toBe(testRows + 1);
				});
			});
		});
		describe('Arrow Table Column-Major', () => {
			describe('single column', () => {
				it('TINYINT', () => {
					const result = conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					const table = import_Arrow.Table.from(result);
					let i = 0;
					for (const v of table.getColumnAt(0)) {
						expect(v).toBe(i++ & 127);
					}
					expect(i).toBe(testRows + 1);
				});
				it('SMALLINT', () => {
					const result = conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					const table = import_Arrow.Table.from(result);
					let i = 0;
					for (const v of table.getColumnAt(0)) {
						expect(v).toBe(i++ & 32767);
					}
					expect(i).toBe(testRows + 1);
				});
				it('INTEGER', () => {
					const result = conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					const table = import_Arrow.Table.from(result);
					let i = 0;
					for (const v of table.getColumnAt(0)) {
						expect(v).toBe(i++);
					}
					expect(i).toBe(testRows + 1);
				});
				it('BIGINT', () => {
					const result = conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					const table = import_Arrow.Table.from(result);
					let i = 0;
					for (const v of table.getColumnAt(0)) {
						expect(v.valueOf()).toBe(i++);
					}
					expect(i).toBe(testRows + 1);
				});
				it('STRING', () => {
					const result = conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows}) as t(v);
                `);
					const table = import_Arrow.Table.from(result);
					let i = 0;
					for (const v of table.getColumnAt(0)) {
						expect(v.valueOf()).toBe(String(i++));
					}
					expect(i).toBe(testRows + 1);
				});
			});
		});
	}

	// test/batch_stream_async.test.ts
	var testRows2 = 1e4;
	function testAsyncBatchStream(db2) {
		let conn;
		beforeEach(async () => {
			conn = await db2().connect();
		});
		afterEach(async () => {
			await conn.close();
			await db2().flushFiles();
			await db2().dropFiles();
		});
		describe('AsyncDuckDB', () => {
			it('ping', async () => {
				await db2().ping();
			});
		});
		describe('Arrow Record-Batches Row-Major', () => {
			describe('single column', () => {
				it('TINYINT', async () => {
					const result = await conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					let i = 0;
					for await (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const row of batch) {
							expect(row.v).toBe(i++ & 127);
						}
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('SMALLINT', async () => {
					const result = await conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					let i = 0;
					for await (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const v of batch.getChildAt(0)) {
							expect(v).toBe(i++ & 32767);
						}
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('INTEGER', async () => {
					const result = await conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					let i = 0;
					for await (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const v of batch.getChildAt(0)) {
							expect(v).toBe(i++);
						}
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('BIGINT', async () => {
					const result = await conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					let i = 0;
					for await (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const v of batch.getChildAt(0)) {
							expect(v.valueOf()).toBe(i++);
						}
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('STRING', async () => {
					const result = await conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					let i = 0;
					for await (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const v of batch.getChildAt(0)) {
							expect(v).toBe(String(i++));
						}
					}
					expect(i).toBe(testRows2 + 1);
				});
			});
			describe('scripts', () => {
				it('test1', async () => {
					const result = await conn.send(`
                    SELECT v::INTEGER AS x, (sin(v) * 100 + 100)::INTEGER AS y FROM generate_series(0, ${testRows2}) as t(v)
                `);
					let i = 0;
					for await (const batch of result) {
						expect(batch.numCols).toBe(2);
						for (const row of batch) {
							expect(row.x).toBe(i++);
						}
					}
					expect(i).toBe(testRows2 + 1);
				});
			});
		});
		describe('Arrow Record-Batches Column-Major', () => {
			describe('single column', () => {
				it('TINYINT', async () => {
					const result = await conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					let i = 0;
					for await (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const v of batch.getChildAt(0)) {
							expect(v).toBe(i++ & 127);
						}
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('SMALLINT', async () => {
					const result = await conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					let i = 0;
					for await (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const v of batch.getChildAt(0)) {
							expect(v).toBe(i++ & 32767);
						}
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('INTEGER', async () => {
					const result = await conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					let i = 0;
					for await (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const v of batch.getChildAt(0)) {
							expect(v).toBe(i++);
						}
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('BIGINT', async () => {
					const result = await conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					let i = 0;
					for await (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const v of batch.getChildAt(0)) {
							expect(v.valueOf()).toBe(i++);
						}
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('STRING', async () => {
					const result = await conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					let i = 0;
					for await (const batch of result) {
						expect(batch.numCols).toBe(1);
						for (const v of batch.getChildAt(0)) {
							expect(v).toBe(String(i++));
						}
					}
					expect(i).toBe(testRows2 + 1);
				});
			});
		});
		describe('Arrow Table Row-Major', () => {
			describe('single column', () => {
				it('TINYINT', async () => {
					const result = await conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					const table = await import_Arrow.Table.from(result);
					let i = 0;
					for (const row of table) {
						expect(row.v).toBe(i++ & 127);
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('SMALLINT', async () => {
					const result = await conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					const table = await import_Arrow.Table.from(result);
					let i = 0;
					for (const row of table) {
						expect(row.v).toBe(i++ & 32767);
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('INTEGER', async () => {
					const result = conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					const table = await import_Arrow.Table.from(result);
					let i = 0;
					for (const row of table) {
						expect(row.v).toBe(i++);
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('BIGINT', async () => {
					const result = conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					const table = await import_Arrow.Table.from(result);
					let i = 0;
					for (const row of table) {
						expect(row.v.valueOf()).toBe(i++);
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('STRING', async () => {
					const result = await conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					const table = await import_Arrow.Table.from(result);
					let i = 0;
					for (const row of table) {
						expect(row.v.valueOf()).toBe(String(i++));
					}
					expect(i).toBe(testRows2 + 1);
				});
			});
		});
		describe('Arrow Table Column-Major', () => {
			describe('single column', () => {
				it('TINYINT', async () => {
					const result = await conn.send(`
                    SELECT (v & 127)::TINYINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					const table = await import_Arrow.Table.from(result);
					let i = 0;
					for (const v of table.getColumnAt(0)) {
						expect(v).toBe(i++ & 127);
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('SMALLINT', async () => {
					const result = await conn.send(`
                    SELECT (v & 32767)::SMALLINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					const table = await import_Arrow.Table.from(result);
					let i = 0;
					for (const v of table.getColumnAt(0)) {
						expect(v).toBe(i++ & 32767);
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('INTEGER', async () => {
					const result = await conn.send(`
                    SELECT v::INTEGER AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					const table = await import_Arrow.Table.from(result);
					let i = 0;
					for (const v of table.getColumnAt(0)) {
						expect(v).toBe(i++);
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('BIGINT', async () => {
					const result = await conn.send(`
                    SELECT v::BIGINT AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					const table = await import_Arrow.Table.from(result);
					let i = 0;
					for (const v of table.getColumnAt(0)) {
						expect(v.valueOf()).toBe(i++);
					}
					expect(i).toBe(testRows2 + 1);
				});
				it('STRING', async () => {
					const result = await conn.send(`
                    SELECT v::VARCHAR AS v FROM generate_series(0, ${testRows2}) as t(v);
                `);
					const table = await import_Arrow.Table.from(result);
					let i = 0;
					for (const v of table.getColumnAt(0)) {
						expect(v.valueOf()).toBe(String(i++));
					}
					expect(i).toBe(testRows2 + 1);
				});
			});
		});
	}

	// test/filesystem.test.ts
	var decoder = new TextDecoder();
	function testFilesystem(db2, resolveData2, baseDir) {
		let conn;
		beforeEach(async () => {
			conn = await db2().connect();
		});
		afterEach(async () => {
			await conn.close();
			await db2().flushFiles();
			await db2().dropFiles();
		});
		describe('File buffer registration', () => {
			const test = async () => {
				const result = await conn.send(`SELECT matrnr FROM parquet_scan('studenten.parquet');`);
				const table = await import_Arrow.Table.from(result);
				expect(table.getColumnAt(0)?.toArray()).toEqual(
					new Int32Array([24002, 25403, 26120, 26830, 27550, 28106, 29120, 29555])
				);
			};
			it('File buffer used once', async () => {
				const students = await resolveData2('/uni/studenten.parquet');
				expect(students).not.toBeNull();
				await db2().registerFileBuffer('studenten.parquet', students);
				await test();
			});
			it('File buffer registered twice', async () => {
				const students = await resolveData2('/uni/studenten.parquet');
				expect(students).not.toBeNull();
				await db2().registerFileBuffer('studenten.parquet', students);
				await test();
				await db2().registerFileBuffer('studenten.parquet', students);
				await test();
			});
			it('File buffer used twice', async () => {
				const students = await resolveData2('/uni/studenten.parquet');
				expect(students).not.toBeNull();
				await db2().registerFileBuffer('studenten.parquet', students);
				await test();
				await test();
			});
		});
		describe('Parquet Scans', () => {
			it('single table from buffer', async () => {
				const students = await resolveData2('/uni/studenten.parquet');
				expect(students).not.toBeNull();
				await db2().registerFileBuffer('studenten.parquet', students);
				const result = await conn.send(`SELECT matrnr FROM parquet_scan('studenten.parquet');`);
				const table = await import_Arrow.Table.from(result);
				expect(table.getColumnAt(0)?.toArray()).toEqual(
					new Int32Array([24002, 25403, 26120, 26830, 27550, 28106, 29120, 29555])
				);
			});
			it('simple join', async () => {
				const students = await resolveData2('/uni/studenten.parquet');
				const hoeren = await resolveData2('/uni/hoeren.parquet');
				const vorlesungen = await resolveData2('/uni/vorlesungen.parquet');
				expect(students).not.toBeNull();
				expect(hoeren).not.toBeNull();
				expect(vorlesungen).not.toBeNull();
				await db2().registerFileBuffer('studenten.parquet', students);
				await db2().registerFileBuffer('hoeren.parquet', hoeren);
				await db2().registerFileBuffer('vorlesungen.parquet', vorlesungen);
				const result = await conn.send(`
                    SELECT students.matrnr, vorlesungen.titel
                    FROM parquet_scan('studenten.parquet') students
                    INNER JOIN parquet_scan('hoeren.parquet') hoeren ON (students.matrnr = hoeren.matrnr)
                    INNER JOIN parquet_scan('vorlesungen.parquet') vorlesungen ON (vorlesungen.vorlnr = hoeren.vorlnr);
                `);
				const table = await import_Arrow.Table.from(result);
				expect(table.numCols).toBe(2);
				const flat = [];
				for (const row of table) {
					flat.push({
						matrnr: row.matrnr,
						titel: row.titel?.toString()
					});
				}
				expect(flat).toEqual([
					{ matrnr: 26120, titel: 'Grundz\xFCge' },
					{ matrnr: 27550, titel: 'Grundz\xFCge' },
					{ matrnr: 27550, titel: 'Logik' },
					{ matrnr: 28106, titel: 'Ethik' },
					{ matrnr: 28106, titel: 'Wissenschaftstheorie' },
					{ matrnr: 28106, titel: 'Bioethik' },
					{ matrnr: 28106, titel: 'Der Wiener Kreis' },
					{ matrnr: 29120, titel: 'Grundz\xFCge' },
					{ matrnr: 29120, titel: 'Ethik' },
					{ matrnr: 29120, titel: 'M\xE4eutik' },
					{ matrnr: 29555, titel: 'Glaube und Wissen' },
					{ matrnr: 25403, titel: 'Glaube und Wissen' }
				]);
			});
		});
		describe('Writing', () => {
			it('Copy To CSV Buffer', async () => {
				const students = await resolveData2('/uni/studenten.parquet');
				expect(students).not.toBeNull();
				await db2().registerFileBuffer('studenten.parquet', students);
				await db2().registerEmptyFileBuffer('students.csv');
				await conn.query(
					`CREATE TABLE students AS SELECT * FROM parquet_scan('studenten.parquet');`
				);
				await conn.query(
					`COPY students TO 'students.csv' WITH (HEADER 1, DELIMITER ';', FORMAT CSV);`
				);
				await conn.query(`DROP TABLE IF EXISTS students`);
				const outBuffer = await db2().copyFileToBuffer('students.csv');
				expect(outBuffer).not.toBeNull();
				const text = decoder.decode(outBuffer);
				expect(text).toBe(`matrnr;name;semester
24002;Xenokrates;18
25403;Jonas;12
26120;Fichte;10
26830;Aristoxenos;8
27550;Schopenhauer;6
28106;Carnap;3
29120;Theophrastos;2
29555;Feuerbach;2
`);
			});
			it('Copy To Parquet', async () => {
				const students = await resolveData2('/uni/studenten.parquet');
				expect(students).not.toBeNull();
				await db2().registerFileBuffer('studenten.parquet', students);
				await db2().registerEmptyFileBuffer('students2.parquet');
				await conn.query(
					`CREATE TABLE students2 AS SELECT * FROM parquet_scan('studenten.parquet');`
				);
				await conn.query(`COPY students2 TO 'students2.parquet' (FORMAT PARQUET);`);
				const url = await db2().copyFileToBuffer('students2.parquet');
				expect(url).not.toBeNull();
			});
			it('Copy To Parquet And Load Again', async () => {
				const students = await resolveData2('/uni/studenten.parquet');
				expect(students).not.toBeNull();
				await db2().registerFileBuffer('studenten.parquet', students);
				await db2().registerEmptyFileBuffer('students3.parquet');
				await conn.query(
					`CREATE TABLE students3 AS SELECT * FROM parquet_scan('studenten.parquet');`
				);
				await conn.query(`COPY students3 TO 'students3.parquet' (FORMAT PARQUET);`);
				const url = await db2().copyFileToBuffer('students3.parquet');
				expect(url).not.toBeNull();
				await conn.query(
					`CREATE TABLE students4 AS SELECT * FROM parquet_scan('students3.parquet');`
				);
				const result = await conn.send(`SELECT matrnr FROM students4;`);
				const table = await import_Arrow.Table.from(result);
				expect(table.getColumnAt(0)?.toArray()).toEqual(
					new Int32Array([24002, 25403, 26120, 26830, 27550, 28106, 29120, 29555])
				);
			});
		});
		describe('File access', () => {
			it('Small Parquet file', async () => {
				await db2().registerFileURL('studenten.parquet', `${baseDir}/uni/studenten.parquet`);
				const result = await conn.send(`SELECT matrnr FROM parquet_scan('studenten.parquet');`);
				const table = await import_Arrow.Table.from(result);
				expect(table.getColumnAt(0)?.toArray()).toEqual(
					new Int32Array([24002, 25403, 26120, 26830, 27550, 28106, 29120, 29555])
				);
			});
			it('Large Parquet file', async () => {
				await db2().registerFileURL(
					'lineitem.parquet',
					`${baseDir}/tpch/0_01/parquet/lineitem.parquet`
				);
				const result = await conn.send(
					`SELECT count(*)::INTEGER as cnt FROM parquet_scan('lineitem.parquet');`
				);
				const table = await import_Arrow.Table.from(result);
				expect(table.getColumnAt(0)?.get(0)).toBeGreaterThan(6e4);
			});
		});
		describe('Export', () => {
			it('Generate Series as CSV', async () => {
				await conn.query('CREATE TABLE foo AS SELECT * FROM generate_series(1, 5) t(v)');
				await conn.query(`EXPORT DATABASE '/tmp/duckdbexportcsv'`);
				const results = await db2().globFiles('/tmp/duckdbexportcsv/*');
				expect(results).not.toEqual([]);
				expect(results.length).toEqual(3);
				const filenames = results.map((file) => file.fileName).sort();
				expect(filenames).toEqual([
					'/tmp/duckdbexportcsv/0_foo.csv',
					'/tmp/duckdbexportcsv/load.sql',
					'/tmp/duckdbexportcsv/schema.sql'
				]);
				const csv_buffer_utf8 = await db2().copyFileToBuffer('/tmp/duckdbexportcsv/0_foo.csv');
				const load_script_utf8 = await db2().copyFileToBuffer('/tmp/duckdbexportcsv/load.sql');
				const schema_script_utf8 = await db2().copyFileToBuffer('/tmp/duckdbexportcsv/schema.sql');
				expect(load_script_utf8.length).not.toEqual(0);
				expect(schema_script_utf8.length).not.toEqual(0);
				expect(csv_buffer_utf8.length).not.toEqual(0);
				const load_script = decoder.decode(load_script_utf8);
				const schema_script = decoder.decode(schema_script_utf8);
				const csv_buffer = decoder.decode(csv_buffer_utf8);
				expect(load_script.trim()).toEqual(
					`COPY foo FROM '/tmp/duckdbexportcsv/0_foo.csv' (FORMAT 'csv', quote '"', delimiter ',', header 0);`
				);
				expect(schema_script.trim()).toEqual(`CREATE TABLE foo(v BIGINT);`);
				expect(csv_buffer.trim()).toEqual(`1
2
3
4
5`);
			});
			it('Generate Series as Parquet', async () => {
				await conn.query('CREATE TABLE foo AS SELECT * FROM generate_series(1, 5) t(v)');
				await conn.query(`EXPORT DATABASE '/tmp/duckdbexportparquet' (FORMAT PARQUET)`);
				const results = await db2().globFiles('/tmp/duckdbexportparquet/*');
				expect(results).not.toEqual([]);
				expect(results.length).toEqual(3);
				const filenames = results.map((file) => file.fileName).sort();
				expect(filenames).toEqual([
					'/tmp/duckdbexportparquet/0_foo.parquet',
					'/tmp/duckdbexportparquet/load.sql',
					'/tmp/duckdbexportparquet/schema.sql'
				]);
				const parquet_buffer = await db2().copyFileToBuffer(
					'/tmp/duckdbexportparquet/0_foo.parquet'
				);
				const load_script_utf8 = await db2().copyFileToBuffer('/tmp/duckdbexportparquet/load.sql');
				const schema_script_utf8 = await db2().copyFileToBuffer(
					'/tmp/duckdbexportparquet/schema.sql'
				);
				expect(load_script_utf8.length).not.toEqual(0);
				expect(schema_script_utf8.length).not.toEqual(0);
				expect(parquet_buffer.length).not.toEqual(0);
				const content = await conn.query(
					`SELECT v::integer FROM parquet_scan('/tmp/duckdbexportparquet/0_foo.parquet')`
				);
				expect(content.nullCount).toEqual(0);
				expect(content.length).toEqual(5);
				expect(content.getColumnAt(0)?.toArray()).toEqual(new Int32Array([1, 2, 3, 4, 5]));
			});
		});
		describe('Copy', () => {
			it('Generate Series as Parquet', async () => {
				await conn.query(
					`COPY (SELECT * FROM generate_series(1, 5) t(v)) TO '/tmp/duckdbcopytest.parquet' (FORMAT 'parquet')`
				);
				const results = await db2().globFiles('/tmp/duckdbcopytest*');
				expect(results).not.toEqual([]);
				expect(results.length).toEqual(1);
				const filenames = results.map((file) => file.fileName).sort();
				expect(filenames).toEqual(['/tmp/duckdbcopytest.parquet']);
				const parquet_buffer = await db2().copyFileToBuffer('/tmp/duckdbcopytest.parquet');
				expect(parquet_buffer.length).not.toEqual(0);
				const content = await conn.query(
					`SELECT v::integer FROM parquet_scan('/tmp/duckdbcopytest.parquet')`
				);
				expect(content.length).toEqual(5);
				expect(content.getColumnAt(0)?.toArray()).toEqual(new Int32Array([1, 2, 3, 4, 5]));
			});
		});
	}

	// test/table_test.ts
	function compareTable(table, expected) {
		const colCount = expected.length;
		expect(table.numCols).toEqual(colCount);
		if (colCount == 0) return;
		const rowCount = expected[0].values.length;
		for (let i = 0; i < colCount; ++i) {
			expect(expected[i].values.length).toEqual(rowCount);
			expect(table.getColumnAt(i)?.length).toEqual(rowCount);
			expect(table.getColumnAt(i)?.name).toEqual(expected[i].name);
		}
		for (let i = 0; i < colCount; ++i) {
			const col = table.getColumnAt(i);
			const have = [];
			for (let j = 0; j < rowCount; ++j) {
				have.push(col.get(j));
			}
			expect(have).toEqual(expected[i].values);
		}
	}

	// test/insert_arrow.test.ts
	var ARROW_INSERT_TESTS = [
		{
			name: 'integers_1',
			schema: new import_Arrow.Schema([
				new import_Arrow.Field('a', new import_Arrow.Int32()),
				new import_Arrow.Field('b', new import_Arrow.Int32()),
				new import_Arrow.Field('c', new import_Arrow.Int32())
			]),
			batches: [
				{
					numRows: 3,
					columns: [
						import_Arrow.Int32Vector.from([1, 4, 7]),
						import_Arrow.Int32Vector.from([2, 5, 8]),
						import_Arrow.Int32Vector.from([3, 6, 9])
					]
				}
			],
			options: {
				schema: 'main',
				name: 'foo'
			},
			query: 'SELECT * FROM main.foo',
			expectedColumns: [
				{ name: 'a', values: [1, 4, 7] },
				{ name: 'b', values: [2, 5, 8] },
				{ name: 'c', values: [3, 6, 9] }
			]
		},
		{
			name: 'combined_1',
			schema: new import_Arrow.Schema([
				new import_Arrow.Field('a', new import_Arrow.Int32()),
				new import_Arrow.Field('b', new import_Arrow.Int16()),
				new import_Arrow.Field('c', new import_Arrow.Utf8())
			]),
			batches: [
				{
					numRows: 3,
					columns: [
						import_Arrow.Int32Vector.from([1, 4, 7]),
						import_Arrow.Int16Vector.from([2, 5, 8]),
						import_Arrow.Utf8Vector.from(['3', '6', '9'])
					]
				}
			],
			options: {
				schema: 'main',
				name: 'foo'
			},
			query: 'SELECT * FROM main.foo',
			expectedColumns: [
				{ name: 'a', values: [1, 4, 7] },
				{ name: 'b', values: [2, 5, 8] },
				{ name: 'c', values: ['3', '6', '9'] }
			]
		},
		{
			name: 'combined_2',
			schema: new import_Arrow.Schema([
				new import_Arrow.Field('a', new import_Arrow.Int32()),
				new import_Arrow.Field('b', new import_Arrow.Int16()),
				new import_Arrow.Field('c', new import_Arrow.Utf8())
			]),
			batches: [
				{
					numRows: 3,
					columns: [
						import_Arrow.Int32Vector.from([1, 4, 7]),
						import_Arrow.Int16Vector.from([2, 5, 8]),
						import_Arrow.Utf8Vector.from(['3', '6', '9'])
					]
				},
				{
					numRows: 2,
					columns: [
						import_Arrow.Int32Vector.from([10, 13]),
						import_Arrow.Int16Vector.from([11, 14]),
						import_Arrow.Utf8Vector.from(['12', '15'])
					]
				}
			],
			options: {
				schema: 'main',
				name: 'foo'
			},
			query: 'SELECT * FROM main.foo',
			expectedColumns: [
				{ name: 'a', values: [1, 4, 7, 10, 13] },
				{ name: 'b', values: [2, 5, 8, 11, 14] },
				{ name: 'c', values: ['3', '6', '9', '12', '15'] }
			]
		}
	];
	function testArrowInsert(db2) {
		let conn;
		beforeEach(async () => {
			db2().flushFiles();
			conn = db2().connect();
		});
		afterEach(async () => {
			conn.close();
			await db2().flushFiles();
			await db2().dropFiles();
		});
		describe('Arrow insert from iterable', () => {
			for (const test of ARROW_INSERT_TESTS) {
				it(test.name, () => {
					conn.query(`DROP TABLE IF EXISTS ${test.options.schema || 'main'}.${test.options.name}`);
					const table = new import_Arrow.Table(
						test.schema,
						test.batches.map((b) => new import_Arrow.RecordBatch(test.schema, b.numRows, b.columns))
					);
					conn.insertArrowTable(table, test.options);
					const results = conn.query(test.query);
					compareTable(results, test.expectedColumns);
				});
			}
		});
	}
	function testArrowInsertAsync(db2) {
		let conn;
		beforeEach(async () => {
			await db2().flushFiles();
			conn = await db2().connect();
		});
		afterEach(async () => {
			await conn.close();
			await db2().flushFiles();
			await db2().dropFiles();
		});
		describe('Arrow async insert from iterable', () => {
			for (const test of ARROW_INSERT_TESTS) {
				it(test.name, async () => {
					await conn.query(
						`DROP TABLE IF EXISTS ${test.options.schema || 'main'}.${test.options.name}`
					);
					const table = new import_Arrow.Table(
						test.schema,
						test.batches.map((b) => new import_Arrow.RecordBatch(test.schema, b.numRows, b.columns))
					);
					await conn.insertArrowTable(table, test.options);
					const results = await conn.query(test.query);
					compareTable(results, test.expectedColumns);
				});
			}
		});
		describe('Arrow async insert from table', () => {
			it('simple integers', async () => {
				await conn.query(`DROP TABLE IF EXISTS insert_from_table`);
				const table = import_Arrow.Table.new(
					[
						import_Arrow.Int32Vector.from([1, 4, 7]),
						import_Arrow.Int32Vector.from([2, 5, 8]),
						import_Arrow.Utf8Vector.from(['3', '6', '9'])
					],
					['a', 'b', 'c']
				);
				await conn.insertArrowTable(table, {
					name: 'insert_from_vectors'
				});
				const results = await conn.query('select * from insert_from_vectors');
				compareTable(results, [
					{ name: 'a', values: [1, 4, 7] },
					{ name: 'b', values: [2, 5, 8] },
					{ name: 'c', values: ['3', '6', '9'] }
				]);
			});
		});
	}

	// test/insert_json.test.ts
	function itBrowser(expectation, assertion, timeout) {
		if (typeof window !== 'undefined') {
			it(expectation, assertion, timeout);
		}
	}
	var encoder = new TextEncoder();
	var JSON_INSERT_TESTS = [
		{
			name: 'rows_integers',
			input: `[
            {"a":1, "b":2, "c":3},
            {"a":4, "b":5, "c":6},
            {"a":7, "b":8, "c":9},
        ]`,
			options: {
				schema: 'main',
				name: 'foo'
			},
			query: 'SELECT * FROM main.foo',
			expectedColumns: [
				{ name: 'a', values: [1, 4, 7] },
				{ name: 'b', values: [2, 5, 8] },
				{ name: 'c', values: [3, 6, 9] }
			]
		},
		{
			name: 'cols_integers',
			input: `{
            "a": [1, 4, 7],
            "b": [2, 5, 8],
            "c": [3, 6, 9]
        }`,
			options: {
				schema: 'main',
				name: 'foo'
			},
			query: 'SELECT * FROM main.foo',
			expectedColumns: [
				{ name: 'a', values: [1, 4, 7] },
				{ name: 'b', values: [2, 5, 8] },
				{ name: 'c', values: [3, 6, 9] }
			]
		},
		{
			name: 'options_1',
			input: `[
            {"a":1, "b":2, "c":3},
            {"a":4, "b":5, "c":6},
            {"a":7, "b":8, "c":9},
        ]`,
			options: {
				schema: 'main',
				name: 'foo',
				shape: JSONTableShape.ROW_ARRAY,
				columns: {
					a: new import_Arrow.Int16(),
					b: new import_Arrow.Int32(),
					c: new import_Arrow.Utf8()
				}
			},
			query: 'SELECT * FROM main.foo',
			expectedColumns: [
				{ name: 'a', values: [1, 4, 7] },
				{ name: 'b', values: [2, 5, 8] },
				{ name: 'c', values: ['3', '6', '9'] }
			]
		}
	];
	var TEST_FILE = 'TEST';
	function testJSONInsert(db2) {
		let conn;
		beforeEach(async () => {
			db2().flushFiles();
			conn = db2().connect();
		});
		afterEach(async () => {
			conn.close();
			await db2().flushFiles();
			await db2().dropFiles();
		});
		describe('JSON Insert Sync', () => {
			for (const test of JSON_INSERT_TESTS) {
				it(test.name, () => {
					conn.query(`DROP TABLE IF EXISTS ${test.options.schema || 'main'}.${test.options.name}`);
					const buffer = encoder.encode(test.input);
					db2().registerFileBuffer(TEST_FILE, buffer);
					conn.insertJSONFromPath(TEST_FILE, test.options);
					const results = conn.query(test.query);
					compareTable(results, test.expectedColumns);
				});
			}
		});
	}
	function testJSONInsertAsync(db2) {
		let conn;
		beforeEach(async () => {
			await db2().flushFiles();
			conn = await db2().connect();
		});
		afterEach(async () => {
			await conn.close();
			await db2().flushFiles();
			await db2().dropFiles();
		});
		describe('JSON Insert Buffer Async', () => {
			for (const test of JSON_INSERT_TESTS) {
				it(test.name, async () => {
					await conn.query(
						`DROP TABLE IF EXISTS ${test.options.schema || 'main'}.${test.options.name}`
					);
					const buffer = encoder.encode(test.input);
					await db2().registerFileBuffer(TEST_FILE, buffer);
					await conn.insertJSONFromPath(TEST_FILE, test.options);
					const results = await conn.query(test.query);
					compareTable(results, test.expectedColumns);
				});
			}
		});
		describe('JSON Insert Blob Async', () => {
			for (const test of JSON_INSERT_TESTS) {
				itBrowser(test.name, async () => {
					await conn.query(
						`DROP TABLE IF EXISTS ${test.options.schema || 'main'}.${test.options.name}`
					);
					const buffer = encoder.encode(test.input);
					const blob = new Blob([buffer]);
					await db2().registerFileHandle(TEST_FILE, blob);
					await conn.insertJSONFromPath(TEST_FILE, test.options);
					const results = await conn.query(test.query);
					compareTable(results, test.expectedColumns);
				});
			}
		});
	}

	// test/insert_csv.test.ts
	function itBrowser2(expectation, assertion, timeout) {
		if (typeof window !== 'undefined') {
			it(expectation, assertion, timeout);
		}
	}
	var encoder2 = new TextEncoder();
	var CSV_INSERT_TESTS = [
		{
			name: 'integers_auto_1',
			input: `"a","b","c"
1,2,3
4,5,6
7,8,9
`,
			options: {
				schema: 'main',
				name: 'foo'
			},
			query: 'SELECT * FROM main.foo',
			expectedColumns: [
				{ name: 'a', values: [1, 4, 7] },
				{ name: 'b', values: [2, 5, 8] },
				{ name: 'c', values: [3, 6, 9] }
			]
		},
		{
			name: 'integers_auto_2',
			input: `a,b,c
1,2,3
4,5,6
7,8,9
`,
			options: {
				schema: 'main',
				name: 'foo'
			},
			query: 'SELECT * FROM main.foo',
			expectedColumns: [
				{ name: 'a', values: [1, 4, 7] },
				{ name: 'b', values: [2, 5, 8] },
				{ name: 'c', values: [3, 6, 9] }
			]
		},
		{
			name: 'integers_auto_3',
			input: `a,b,c`,
			options: {
				schema: 'main',
				name: 'foo'
			},
			query: 'SELECT * FROM main.foo',
			expectedColumns: [
				{ name: 'column0', values: ['a'] },
				{ name: 'column1', values: ['b'] },
				{ name: 'column2', values: ['c'] }
			]
		},
		{
			name: 'integers_auto_2',
			input: `a
1
4
7
`,
			options: {
				schema: 'main',
				name: 'foo'
			},
			query: 'SELECT * FROM main.foo',
			expectedColumns: [{ name: 'a', values: [1, 4, 7] }]
		},
		{
			name: 'options_1',
			input: `1,2,3
4,5,6
7,8,9
`,
			options: {
				schema: 'main',
				name: 'foo2',
				header: false,
				detect: false,
				columns: {
					a: new import_Arrow.Int16(),
					b: new import_Arrow.Int32(),
					c: new import_Arrow.Utf8()
				}
			},
			query: 'SELECT * FROM main.foo2',
			expectedColumns: [
				{ name: 'a', values: [1, 4, 7] },
				{ name: 'b', values: [2, 5, 8] },
				{ name: 'c', values: ['3', '6', '9'] }
			]
		},
		{
			name: 'options_2',
			input: `1|2|01/02/2020
4|5|01/03/2020
7|8|01/04/2020
`,
			options: {
				schema: 'main',
				name: 'foo',
				detect: false,
				header: false,
				delimiter: '|',
				dateFormat: '%m/%d/%Y',
				columns: {
					a: new import_Arrow.Int16(),
					b: new import_Arrow.Int32(),
					c: new import_Arrow.DateDay()
				}
			},
			query: 'SELECT * FROM main.foo',
			expectedColumns: [
				{ name: 'a', values: [1, 4, 7] },
				{ name: 'b', values: [2, 5, 8] },
				{
					name: 'c',
					values: [
						new Date(Date.UTC(2020, 0, 2)),
						new Date(Date.UTC(2020, 0, 3)),
						new Date(Date.UTC(2020, 0, 4))
					]
				}
			]
		},
		{
			name: 'options_3',
			input: `1|2|20:32:45 1992-03-02
4|5|20:32:50 1992-03-02
7|8|20:32:55 1992-03-02
`,
			options: {
				schema: 'main',
				name: 'foo',
				detect: false,
				header: false,
				delimiter: '|',
				quote: "'",
				timestampFormat: '%H:%M:%S %Y-%m-%d',
				columns: {
					a: new import_Arrow.Int16(),
					b: new import_Arrow.Int32(),
					c: new import_Arrow.TimestampSecond()
				}
			},
			query: 'SELECT * FROM main.foo',
			expectedColumns: [
				{ name: 'a', values: [1, 4, 7] },
				{ name: 'b', values: [2, 5, 8] },
				{
					name: 'c',
					values: [
						new Date(Date.UTC(1992, 2, 2, 20, 32, 45)).getTime(),
						new Date(Date.UTC(1992, 2, 2, 20, 32, 50)).getTime(),
						new Date(Date.UTC(1992, 2, 2, 20, 32, 55)).getTime()
					]
				}
			]
		}
	];
	var TEST_FILE2 = 'TEST';
	function testCSVInsert(db2) {
		let conn;
		beforeEach(async () => {
			db2().flushFiles();
			conn = db2().connect();
		});
		afterEach(async () => {
			conn.close();
			await db2().flushFiles();
			await db2().dropFiles();
		});
		describe('CSV Insert Sync', () => {
			for (const test of CSV_INSERT_TESTS) {
				it(test.name, () => {
					conn.query(`DROP TABLE IF EXISTS ${test.options.schema || 'main'}.${test.options.name}`);
					const buffer = encoder2.encode(test.input);
					db2().registerFileBuffer(TEST_FILE2, buffer);
					conn.insertCSVFromPath(TEST_FILE2, test.options);
					const results = conn.query(test.query);
					compareTable(results, test.expectedColumns);
				});
			}
		});
	}
	function testCSVInsertAsync(db2) {
		let conn;
		beforeEach(async () => {
			await db2().flushFiles();
			conn = await db2().connect();
		});
		afterEach(async () => {
			await conn.close();
			await db2().flushFiles();
			await db2().dropFiles();
		});
		describe('CSV Insert Buffer Async', () => {
			for (const test of CSV_INSERT_TESTS) {
				it(test.name, async () => {
					await conn.query(
						`DROP TABLE IF EXISTS ${test.options.schema || 'main'}.${test.options.name}`
					);
					const buffer = encoder2.encode(test.input);
					await db2().registerFileBuffer(TEST_FILE2, buffer);
					await conn.insertCSVFromPath(TEST_FILE2, test.options);
					const results = await conn.query(test.query);
					compareTable(results, test.expectedColumns);
				});
			}
		});
		describe('CSV Insert Blob Async', () => {
			for (const test of CSV_INSERT_TESTS) {
				itBrowser2(test.name, async () => {
					await conn.query(
						`DROP TABLE IF EXISTS ${test.options.schema || 'main'}.${test.options.name}`
					);
					const buffer = encoder2.encode(test.input);
					const blob = new Blob([buffer]);
					await db2().registerFileHandle(TEST_FILE2, blob);
					await conn.insertCSVFromPath(TEST_FILE2, test.options);
					const results = await conn.query(test.query);
					compareTable(results, test.expectedColumns);
				});
			}
		});
	}

	// test/tokenizer.test.ts
	function testTokenization(db2) {
		describe('Tokenizer', () => {
			it('SELECT 1', async () => {
				expect(db2().tokenize('SELECT 1')).toEqual({
					offsets: [0, 7],
					types: [4, 1]
				});
			});
			it('SELECT * FROM region', async () => {
				expect(db2().tokenize('SELECT * FROM region')).toEqual({
					offsets: [0, 7, 9, 14],
					types: [4, 3, 4, 0]
				});
			});
		});
	}
	function testTokenizationAsync(db2) {
		describe('Tokenizer', () => {
			it('SELECT 1', async () => {
				expect(await db2().tokenize('SELECT 1')).toEqual({
					offsets: [0, 7],
					types: [4, 1]
				});
			});
			it('SELECT * FROM region', async () => {
				expect(await db2().tokenize('SELECT * FROM region')).toEqual({
					offsets: [0, 7, 9, 14],
					types: [4, 3, 4, 0]
				});
			});
		});
	}

	// test/tablenames.test.ts
	var TABLENAME_TESTS = [
		{
			name: 'standard',
			input: 'SELECT * FROM my_table',
			tables: ['my_table']
		},
		{
			name: 'fetch_specific',
			input: 'SELECT col_a FROM my_table',
			tables: ['my_table']
		},
		{
			name: 'multiple_tables',
			input: 'SELECT * FROM my_table1, my_table2, my_table3',
			tables: ['my_table1', 'my_table2', 'my_table3']
		},
		{
			name: 'same_table_multiple_times',
			input: 'SELECT col_a FROM my_table, my_table m2, my_table m3',
			tables: ['my_table']
		},
		{
			name: 'subqueries',
			input: 'SELECT * FROM (SELECT * FROM (SELECT * FROM my_table) bla) bla3',
			tables: ['my_table']
		},
		{
			name: 'join',
			input: 'SELECT col_a FROM my_table JOIN my_table2 ON (my_table.col_b=my_table2.col_d)',
			tables: ['my_table', 'my_table2']
		},
		{
			name: 'scalar_subquery',
			input: 'SELECT (SELECT COUNT(*) FROM my_table)',
			tables: ['my_table']
		},
		{
			name: 'set_operations',
			input:
				'SELECT * FROM my_table UNION ALL SELECT * FROM my_table2 INTERSECT SELECT * FROM my_table3',
			tables: ['my_table', 'my_table2', 'my_table3']
		},
		{
			name: 'window_functions',
			input: 'SELECT row_number() OVER (ORDER BY (SELECT i+j FROM my_table2)) FROM my_table',
			tables: ['my_table', 'my_table2']
		}
	];
	function testTableNames(db2) {
		let conn;
		beforeEach(() => {
			conn = db2().connect();
		});
		afterEach(() => {
			conn.close();
		});
		describe('TableNames', () => {
			for (const test of TABLENAME_TESTS) {
				it(test.name, () => {
					const tables = conn.getTableNames(test.input);
					expect(tables).toEqual(test.tables);
				});
			}
		});
	}
	function testTableNamesAsync(db2) {
		let conn;
		beforeEach(async () => {
			conn = await db2().connect();
		});
		afterEach(async () => {
			await conn.close();
		});
		describe('TableNames Async', () => {
			for (const test of TABLENAME_TESTS) {
				it(test.name, async () => {
					const tables = await conn.getTableNames(test.input);
					expect(tables).toEqual(test.tables);
				});
			}
		});
	}

	// test/regression/github_332.test.ts
	function test332(db2) {
		let conn;
		beforeEach(async () => {
			await db2().flushFiles();
			conn = await db2().connect();
		});
		afterEach(async () => {
			await conn.close();
			await db2().flushFiles();
			await db2().dropFiles();
		});
		describe('GitHub issues', () => {
			it('332', async () => {
				await db2().registerFileText(
					'Products.csv',
					`ProductGroup,Product,Year,Quarter,Revenue,Units,Count,Product Key,Reseller,Product Info,QuarterAsNumber
Electronics,Phone,2018,Q1,103,7,1,2018-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2018,Q1,102,4,1,2018-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2019,Q1,98,12,1,2019-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Computer,2018,Q1,104,3,1,2018-Q1,Samsung,Format=XML; <Properties>\u2026,1
Electronics,Computer,2019,Q1,83,7,1,2019-Q1,Google,Format=XML; <Properties>\u2026,1
Media,Theater,2018,Q1,17,4,1,2018-Q1,Sony,Format=XML; <Properties>\u2026,1
Media,Theater,2019,Q1,20,7,1,2019-Q1,Sony,Format=XML; <Properties>\u2026,1
Media,Movies,2018,Q1,25,12,1,2018-Q1,Microsoft,Format=XML; <Properties>\u2026,1
Media,Movies,2019,Q1,26,13,1,2019-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2018,Q2,105,5,1,2018-Q2,Samsung,Format=XML; <Properties>\u2026,2
Electronics,Phone,2019,Q2,82,15,1,2019-Q2,LG,Format=XML; <Properties>\u2026,2
Electronics,Computer,2018,Q2,99,4,1,2018-Q2,LG,Format=XML; <Properties>\u2026,2
Electronics,Computer,2019,Q2,84,20,1,2019-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Theater,2018,Q2,17,4,1,2018-Q2,Microsoft,Format=XML; <Properties>\u2026,2
Media,Theater,2019,Q2,22,5,1,2019-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Movies,2018,Q2,25,12,1,2018-Q2,Samsung,Format=XML; <Properties>\u2026,2
Media,Movies,2019,Q2,26,14,1,2019-Q2,Google,Format=XML; <Properties>\u2026,2
Electronics,Phone,2000,Q1,103,7,1,2000-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2001,Q1,102,4,1,2001-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2002,Q1,98,12,1,2002-Q1,Microsoft,Format=XML; <Properties>\u2026,1
Electronics,Computer,2003,Q1,104,3,1,2003-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Computer,2004,Q1,83,7,1,2004-Q1,Samsung,Format=XML; <Properties>\u2026,1
Media,Theater,2005,Q1,17,4,1,2005-Q1,Google,Format=XML; <Properties>\u2026,1
Media,Theater,2006,Q1,20,7,1,2006-Q1,Sony,Format=XML; <Properties>\u2026,1
Media,Movies,2007,Q1,25,12,1,2007-Q1,Sony,Format=XML; <Properties>\u2026,1
Media,Movies,2008,Q1,26,13,1,2008-Q1,Microsoft,Format=XML; <Properties>\u2026,1
Electronics,Phone,2009,Q2,105,5,1,2009-Q2,Sony,Format=XML; <Properties>\u2026,2
Electronics,Phone,2010,Q2,82,15,1,2010-Q2,Sony,Format=XML; <Properties>\u2026,2
Electronics,Computer,2011,Q2,99,4,1,2011-Q2,Sony,Format=XML; <Properties>\u2026,2
Electronics,Computer,2012,Q2,84,20,1,2012-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Theater,2013,Q2,17,4,1,2013-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Theater,2014,Q2,22,5,1,2014-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Movies,2015,Q2,25,12,1,2015-Q2,Sony,Format=XML; <Properties>\u2026,2
Media,Movies,2016,Q2,26,14,1,2016-Q2,Samsung,Format=XML; <Properties>\u2026,2
Media,Movies,2017,Q1,26,13,1,2017-Q1,Google,Format=XML; <Properties>\u2026,1
Electronics,Phone,2018,Q2,105,5,1,2018-Q2,Sony,Format=XML; <Properties>\u2026,2
Electronics,Phone,2019,Q2,82,15,1,2019-Q2,Sony,Format=XML; <Properties>\u2026,2
Electronics,Computer,2020,Q2,99,4,1,2020-Q2,Microsoft,Format=XML; <Properties>\u2026,2
Electronics,Phone,2020,Q1,103,7,1,2020-Q1,Sony,Format=XML; <Properties>\u2026,1
Electronics,Phone,2020,Q2,102,4,1,2020-Q2,Samsung,Format=XML; <Properties>\u2026,2
Electronics,Phone,2020,Q3,98,12,1,2020-Q3,LG,Format=XML; <Properties>\u2026,3
Electronics,Computer,2020,Q4,104,3,1,2020-Q4,LG,Format=XML; <Properties>\u2026,4
Electronics,Computer,2020,Q1,83,7,1,2020-Q1,Sony,Format=XML; <Properties>\u2026,1
Media,Theater,2020,Q1,17,4,1,2020-Q1,Microsoft,Format=XML; <Properties>\u2026,1
Media,Theater,2020,Q1,20,7,1,2020-Q1,Sony,Format=XML; <Properties>\u2026,1
`
				);
				await conn.query("CREATE TABLE products AS SELECT * FROM 'Products.csv'");
				const all = await conn.query('SELECT * FROM products');
				expect(all.schema.fields.length).toBe(11);
				expect(all.schema.fields[0].name).toBe('ProductGroup');
				const insensitive = await conn.query(
					'SELECT productgroup FROM products GROUP BY productgroup'
				);
				expect(insensitive.schema.fields.length).toBe(1);
				expect(insensitive.schema.fields[0].name).toBe('ProductGroup');
				expect(insensitive.toArray().length).toEqual(2);
				await conn.query('DROP TABLE products');
			});
		});
	}

	// test/regression/github_334.test.ts
	function test334(adb2) {
		describe('GitHub issues', () => {
			describe('334', () => {
				it('CSV insert', async () => {
					await adb2().registerFileText(`data.csv`, '1|foo\n2|bar\n');
					const conn = await adb2().connect();
					await conn.insertCSVFromPath('data.csv', {
						schema: 'main',
						name: 'foo',
						detect: false,
						header: false,
						delimiter: '|',
						columns: {
							col1: new import_Arrow.Int32(),
							col2: new import_Arrow.Utf8()
						}
					});
					await conn.query('DROP TABLE IF EXISTS foo');
					await conn.close();
					await adb2().dropFile('data.csv');
				});
				it('JSON row insert', async () => {
					await adb2().registerFileText(
						'rows.json',
						`[
                    { "col1": 1, "col2": "foo" },
                    { "col1": 2, "col2": "bar" },
                ]`
					);
					const conn = await adb2().connect();
					await conn.insertJSONFromPath('rows.json', { name: 'rows' });
					await conn.query('DROP TABLE IF EXISTS rows');
					await conn.close();
					await adb2().dropFile('rows.json');
				});
				it('JSON column insert', async () => {
					await adb2().registerFileText(
						'columns.json',
						`{
                    "col1": [1, 2],
                    "col2": ["foo", "bar"]
                }`
					);
					const conn = await adb2().connect();
					await conn.insertJSONFromPath('columns.json', { name: 'columns' });
					await conn.query('DROP TABLE IF EXISTS columns');
					await conn.close();
					await adb2().dropFile('columns.json');
				});
				it('Query result materialized', async () => {
					const conn = await adb2().connect();
					await conn.query(`
                SELECT * FROM generate_series(1, 100) t(v)
            `);
					await conn.close();
				});
				it('Query result streamed', async () => {
					const conn = await adb2().connect();
					for await (const batch of await conn.send(`
                SELECT * FROM generate_series(1, 100) t(v)
            `)) {
						expect(batch.length).toBeGreaterThan(0);
					}
					await conn.close();
				});
				it('Prepared statement materialized', async () => {
					const conn = await adb2().connect();
					const stmt = await conn.prepare(`SELECT v + ? FROM generate_series(0, 10000) as t(v);`);
					await stmt.query(234);
					await stmt.close();
					await conn.close();
				});
				it('Prepared statement streamed', async () => {
					const conn = await adb2().connect();
					const stmt = await conn.prepare(`SELECT v + ? FROM generate_series(0, 10000) as t(v);`);
					for await (const batch of await stmt.send(234)) {
						expect(batch.length).toBeGreaterThan(0);
					}
					await stmt.close();
					await conn.close();
				});
			});
		});
	}

	// test/regression/github_393.test.ts
	function test393(db2) {
		let conn = null;
		beforeEach(async () => {
			await db2().flushFiles();
		});
		afterEach(async () => {
			if (conn) {
				await conn.close();
				conn = null;
			}
			await db2().flushFiles();
			await db2().dropFiles();
		});
		describe('GitHub issues', () => {
			it('393', async () => {
				await db2().open({
					path: ':memory:',
					query: {
						castTimestampToDate: false
					}
				});
				conn = await db2().connect();
				const resultWithoutCast = await conn.query(`SELECT TIMESTAMP '1992-03-22 01:02:03' as ts`);
				expect(resultWithoutCast.toArray()[0].ts).toEqual(
					new Date(Date.UTC(1992, 2, 22, 1, 2, 3)).getTime()
				);
				await db2().open({
					path: ':memory:',
					query: {
						castTimestampToDate: true
					}
				});
				conn = await db2().connect();
				const resultWithCast = await conn.query(`SELECT TIMESTAMP '1992-03-22 01:02:03' as ts`);
				expect(resultWithCast.toArray()[0].ts).toEqual(new Date(Date.UTC(1992, 2, 22, 1, 2, 3)));
			});
		});
	}

	// test/regression/github_448.test.ts
	function test448(db2) {
		let conn = null;
		beforeEach(async () => {
			await db2().flushFiles();
		});
		afterEach(async () => {
			if (conn) {
				await conn.close();
				conn = null;
			}
			await db2().flushFiles();
			await db2().dropFiles();
		});
		describe('GitHub issues', () => {
			it('448', async () => {
				conn = await db2().connect();
				await conn.query(`create temp table test448(i integer)`);
				await conn.query(`insert into test448 values (1),(2),(1)`);
				let result = await conn.query(`select * from test448`);
				expect(result.numCols).toBe(1);
				expect(result.length).toBe(3);
				expect(result.getColumnAt(0)?.toArray()).toEqual(new Int32Array([1, 2, 1]));
				result = await conn.query(`select histogram(i) from test448`);
				expect(result.numCols).toBe(1);
				expect(result.length).toBe(1);
				const array = result.getColumnAt(0).toArray();
				expect(array.length).toEqual(1);
				expect(array[0].toString()).toEqual('{ 1: 2, 2: 1 }');
			});
		});
	}

	// test/regression/github_470.test.ts
	function test470(db2) {
		let conn = null;
		beforeEach(async () => {
			await db2().flushFiles();
		});
		afterEach(async () => {
			if (conn) {
				await conn.close();
				conn = null;
			}
			await db2().flushFiles();
			await db2().dropFiles();
		});
		describe('GitHub issues', () => {
			it('470', async () => {
				await db2().open({
					path: ':memory:',
					query: {
						castDurationToTime64: false
					}
				});
				conn = await db2().connect();
				conn
					.query(`SELECT INTERVAL '3' MONTH AS interval`)
					.then((x) => fail('Query is expected to fail due to duration type not being implemented'))
					.catch((x) => {
						expect(x).toEqual(new Error('Unrecognized type: "Duration" (18)'));
					});
				await db2().open({
					path: ':memory:',
					query: {
						castDurationToTime64: true
					}
				});
				conn = await db2().connect();
				const resultWithCast = await conn.query(`SELECT INTERVAL '3' MONTH AS interval`);
				expect(resultWithCast.toArray()[0].interval?.toString()).toEqual('7776000000000');
				await db2().open({
					path: ':memory:',
					query: {}
				});
				conn = await db2().connect();
				const resultWithDefault = await conn.query(`SELECT INTERVAL '3' MONTH AS interval`);
				expect(resultWithDefault.toArray()[0].interval?.toString()).toEqual('7776000000000');
			});
		});
	}

	// test/regression/index.ts
	function testRegressionAsync(adb2) {
		test332(adb2);
		test334(adb2);
		test393(adb2);
		test448(adb2);
		test470(adb2);
	}

	// test/index_browser.ts
	var DUCKDB_BUNDLES = {
		mvp: {
			mainModule: new URL('/static/duckdb.wasm', window.location.href).href,
			mainWorker: new URL('/static/duckdb-browser.worker.js', window.location.href).href
		},
		next: {
			mainModule: new URL('/static/duckdb-next.wasm', window.location.href).href,
			mainWorker: new URL('/static/duckdb-browser-next.worker.js', window.location.href).href
		},
		nextCOI: {
			mainModule: new URL('/static/duckdb-next-coi.wasm', window.location.href).href,
			mainWorker: new URL('/static/duckdb-browser-next-coi.worker.js', window.location.href).href,
			pthreadWorker: new URL(
				'/static/duckdb-browser-next-coi.pthread.worker.js',
				window.location.href
			).href
		}
	};
	var DUCKDB_BUNDLE = null;
	describe('wasm check', () => {
		it('worker and wasm urls', async () => {
			if (
				(await getPlatformFeatures()).crossOriginIsolated &&
				(await exceptions()) &&
				(await threads())
			) {
				expect(DUCKDB_BUNDLE.mainModule).toEqual(DUCKDB_BUNDLES.nextCOI.mainModule);
				expect(DUCKDB_BUNDLE.mainWorker).toEqual(DUCKDB_BUNDLES.nextCOI.mainWorker);
				expect(DUCKDB_BUNDLE.pthreadWorker).toEqual(DUCKDB_BUNDLES.nextCOI.pthreadWorker);
			}
			if ((await exceptions()) && !(await threads())) {
				expect(DUCKDB_BUNDLE.mainModule).toEqual(DUCKDB_BUNDLES.next.mainModule);
				expect(DUCKDB_BUNDLE.mainWorker).toEqual(DUCKDB_BUNDLES.next.mainWorker);
				expect(DUCKDB_BUNDLE.pthreadWorker).toEqual(null);
			}
			if (!(await exceptions())) {
				expect(DUCKDB_BUNDLE.mainModule).toEqual(DUCKDB_BUNDLES.mvp.mainModule);
				expect(DUCKDB_BUNDLE.mainWorker).toEqual(DUCKDB_BUNDLES.mvp.mainWorker);
				expect(DUCKDB_BUNDLE.pthreadWorker).toEqual(null);
			}
		});
	});
	jasmine.DEFAULT_TIMEOUT_INTERVAL = 6e4;
	var resolveBuffer = async (url) => {
		const req = await fetch(`/data${url}`);
		if (!req.ok) return null;
		return new Uint8Array(await req.arrayBuffer());
	};
	var resolveData = async (url) => {
		switch (url) {
			case '/uni/all.zip':
				return await resolveBuffer('/uni/all.zip');
			case '/uni/assistenten.parquet':
				return await resolveBuffer('/uni/assistenten.parquet');
			case '/uni/studenten.parquet':
				return await resolveBuffer('/uni/studenten.parquet');
			case '/uni/hoeren.parquet':
				return await resolveBuffer('/uni/hoeren.parquet');
			case '/uni/vorlesungen.parquet':
				return await resolveBuffer('/uni/vorlesungen.parquet');
			default:
				return null;
		}
	};
	var db = null;
	var adb = null;
	var worker = null;
	beforeAll(async () => {
		const logger = new VoidLogger();
		db = await createDuckDB(DUCKDB_BUNDLES, logger, BROWSER_RUNTIME);
		await db.instantiate();
		DUCKDB_BUNDLE = await selectBundle(DUCKDB_BUNDLES);
		worker = await createWorker(DUCKDB_BUNDLE.mainWorker);
		adb = new AsyncDuckDB(logger, worker);
		await adb.instantiate(DUCKDB_BUNDLE.mainModule, DUCKDB_BUNDLE.pthreadWorker);
	});
	afterAll(async () => {
		if (worker) worker.terminate();
	});
	var baseURL = window.location.origin;
	var dataURL = `${baseURL}/data`;
	testTableNames(() => db);
	testTableNamesAsync(() => adb);
	testRegressionAsync(() => adb);
	testBindings(() => db, dataURL);
	testAsyncBindings(() => adb, dataURL);
	testBatchStream(() => db);
	testAsyncBatchStream(() => adb);
	testFilesystem(() => adb, resolveData, dataURL);
	testArrowInsert(() => db);
	testArrowInsertAsync(() => adb);
	testJSONInsert(() => db);
	testJSONInsertAsync(() => adb);
	testCSVInsert(() => db);
	testCSVInsertAsync(() => adb);
	testTokenization(() => db);
	testTokenizationAsync(() => adb);
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
//# sourceMappingURL=tests-browser.js.map
