"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 'a';
// import { Something } from "./interfaces"
// import  type { Something } from "./interfaces"
const interfaces_js_1 = require("./interfaces.js");
const test = 'test';
const watch = 'tsc --watch';
const something = {
    some: 'something',
    amount: 111,
    fn() { console.log(this.some, interfaces_js_1.ourExport); }
};
something.fn();
// @internal
function fn(str) {
    return str;
}
console.log(fn('Declaration: true'));
function otherOne(number) {
    return number;
}
console.log(otherOne(100));
const object = {
    some: 19
};
const objTest = {
    some: 119
};
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(4..length);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ3BCLDJDQUEyQztBQUMzQyxpREFBaUQ7QUFDakQsbURBQTJEO0FBQzNELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQTtBQUNuQixNQUFNLEtBQUssR0FBRyxhQUFhLENBQUE7QUFDM0IsTUFBTSxTQUFTLEdBQWM7SUFDM0IsSUFBSSxFQUFFLFdBQVc7SUFDakIsTUFBTSxFQUFFLEdBQUc7SUFDWCxFQUFFLEtBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHlCQUFTLENBQUMsQ0FBQSxDQUFBLENBQUM7Q0FDekMsQ0FBQTtBQUNELFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQTtBQUNkLFlBQVk7QUFDWixTQUFTLEVBQUUsQ0FBRSxHQUFXO0lBRXRCLE9BQU8sR0FBRyxDQUFBO0FBQ1osQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUUsRUFBRSxDQUFFLG1CQUFtQixDQUFFLENBQUUsQ0FBQTtBQUV4QyxTQUFTLFFBQVEsQ0FBRSxNQUFjO0lBRS9CLE9BQU8sTUFBTSxDQUFBO0FBQ2YsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFFMUIsTUFBTSxNQUFNLEdBQTZCO0lBQ3ZDLElBQUksRUFBRSxFQUFFO0NBQ1QsQ0FBQTtBQUVELE1BQU0sT0FBTyxHQUE0QjtJQUN2QyxJQUFJLEVBQUUsR0FBRztDQUNWLENBQUE7QUFLRCxJQUFLLGtCQUtKO0FBTEQsV0FBSyxrQkFBa0I7SUFDckIscUNBQWUsQ0FBQTtJQUNmLG1DQUFhLENBQUE7SUFDYixxQ0FBZSxDQUFBO0lBQ2YsbUNBQWEsQ0FBQTtBQUNmLENBQUMsRUFMSSxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBS3RCO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBSSxDQUF3QixFQUFDLE1BQU0sQ0FBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGEgPSAnYSdcclxuLy8gaW1wb3J0IHsgU29tZXRoaW5nIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiXHJcbi8vIGltcG9ydCAgdHlwZSB7IFNvbWV0aGluZyB9IGZyb20gXCIuL2ludGVyZmFjZXNcIlxyXG5pbXBvcnQgeyB0eXBlIFNvbWV0aGluZywgb3VyRXhwb3J0IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy5qc1wiXHJcbmNvbnN0IHRlc3QgPSAndGVzdCdcclxuY29uc3Qgd2F0Y2ggPSAndHNjIC0td2F0Y2gnXHJcbmNvbnN0IHNvbWV0aGluZzogU29tZXRoaW5nID0ge1xyXG4gIHNvbWU6ICdzb21ldGhpbmcnLFxyXG4gIGFtb3VudDogMTExLFxyXG4gIGZuKCl7IGNvbnNvbGUubG9nKHRoaXMuc29tZSwgb3VyRXhwb3J0KX1cclxufVxyXG5zb21ldGhpbmcuZm4oKVxyXG4vLyBAaW50ZXJuYWxcclxuZnVuY3Rpb24gZm4gKHN0cjogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICByZXR1cm4gc3RyXHJcbn1cclxuY29uc29sZS5sb2coIGZuKCAnRGVjbGFyYXRpb246IHRydWUnICkgKVxyXG5cclxuZnVuY3Rpb24gb3RoZXJPbmUgKG51bWJlcjogbnVtYmVyKVxyXG57XHJcbiAgcmV0dXJuIG51bWJlclxyXG59XHJcbmNvbnNvbGUubG9nKG90aGVyT25lKDEwMCkpXHJcblxyXG5jb25zdCBvYmplY3Q6IFJlY29yZCA8c3RyaW5nLCBudW1iZXIgPiA9IHtcclxuICBzb21lOiAxOVxyXG59XHJcblxyXG5jb25zdCBvYmpUZXN0OiB7W2tleTogc3RyaW5nXTogbnVtYmVyfSA9IHtcclxuICBzb21lOiAxMTlcclxufVxyXG5pbnRlcmZhY2UgSW5kZXhTaWduYXR1cmVcclxue1xyXG4gIFsga2V5OiBzdHJpbmcgXTogbnVtYmVyIHwgc3RyaW5nXHJcbn1cclxuZW51bSBDYXJkaW5hbERpcmVjdGlvbnMge1xyXG4gIE5vcnRoID0gJ05vcnRoJyxcclxuICBFYXN0ID0gXCJFYXN0XCIsXHJcbiAgU291dGggPSBcIlNvdXRoXCIsXHJcbiAgV2VzdCA9IFwiV2VzdFwiXHJcbn1cclxuY29uc29sZS5sb2coICggNCBhcyB1bmtub3duIGFzIHN0cmluZyApLmxlbmd0aCApXHJcbiJdfQ==