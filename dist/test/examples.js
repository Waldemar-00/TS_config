// var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
//     function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
//     var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
//     var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
//     var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
//     var _, done = false;
//     for (var i = decorators.length - 1; i >= 0; i--) {
//         var context = {};
//         for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
//         for (var p in contextIn.access) context.access[p] = contextIn.access[p];
//         context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
//         var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
//         if (kind === "accessor") {
//             if (result === void 0) continue;
//             if (result === null || typeof result !== "object") throw new TypeError("Object expected");
//             if (_ = accept(result.get)) descriptor.get = _;
//             if (_ = accept(result.set)) descriptor.set = _;
//             if (_ = accept(result.init)) initializers.unshift(_);
//         }
//         else if (_ = accept(result)) {
//             if (kind === "field") initializers.unshift(_);
//             else descriptor[key] = _;
//         }
//     }
//     if (target) Object.defineProperty(target, contextIn.name, descriptor);
//     done = true;
// };
// var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
//     var useValue = arguments.length > 2;
//     for (var i = 0; i < initializers.length; i++) {
//         value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
//     }
//     return useValue ? value : void 0;
// };
// var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
//     if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
//     return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
// };
// function createPair(v1, v2) {
//     return [v1, v2];
// }
// console.log(createPair('hello', 42)); // ['hello', 42]
// function createLoggedPair(v1, v2) {
//     console.log("creating pair: v1='".concat(v1, "', v2='").concat(v2, "'"));
//     return [v1, v2];
// }
// var bob = {
//     name: 'Bob',
//     //! age: 42, Object literal may only specify known properties, and 'age' does not exist in type 'Omit<Person, "age" | "location">'
//     // `Omit` has removed age and location from the type and they can't be defined here
// };
// var point = {
//     x: 10,
//     y: 20
// };
// console.log(point);
// // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
// function printPersonProperty(person, property) {
//     console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\""));
// }
// var person = {
//     name: "Max",
//     age: 27
// };
// printPersonProperty(person, "age"); // Printing person property name: "Max"
// function printMileage(mileage) {
//     console.log("Mileage: ".concat(mileage !== null && mileage !== void 0 ? mileage : 'Not Available'));
// }
// printMileage(null); // Prints 'Mileage: Not Available'
// printMileage(0); // Prints 'Mileage: 0'
// var ETest;
// (function (ETest) {
//     ETest[ETest["ADMIN"] = 0] = "ADMIN";
//     ETest[ETest["GUEST"] = 1] = "GUEST";
//     ETest[ETest["DEVELOPER"] = 2] = "DEVELOPER";
// })(ETest || (ETest = {}));
// var user = {
//     role: ETest.DEVELOPER
// };
// function entity(arg) {
//     return arg;
// }
// console.log(entity(34));
// function getLength(arg) {
//     return arg.length;
// }
// console.log(getLength('ABCD'));
// console.log(getLength(['ABCD']));
// var ourCommonProperty = 'role';
// console.log(ourCommonProperty);
// //! decorators
// function LogClass(constructor) {
//     console.log(constructor);
// }
// var Example = function () {
//     var _classDecorators = [LogClass];
//     var _classDescriptor;
//     var _classExtraInitializers = [];
//     var _classThis;
//     var Example = _classThis = /** @class */ (function () {
//         function Example_1() {
//         }
//         return Example_1;
//     }());
//     __setFunctionName(_classThis, "Example");
//     (function () {
//         var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
//         __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
//         Example = _classThis = _classDescriptor.value;
//         if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
//         __runInitializers(_classThis, _classExtraInitializers);
//     })();
//     return Example = _classThis;
// }();
