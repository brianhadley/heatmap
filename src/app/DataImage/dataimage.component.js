"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Path = (function () {
    function Path() {
    }
    return Path;
}());
exports.Path = Path;
var MapItem = (function () {
    function MapItem() {
    }
    return MapItem;
}());
exports.MapItem = MapItem;
var DataImageComponent = (function () {
    //todo move this out, input from service transform
    function DataImageComponent() {
    }
    DataImageComponent.prototype.setSelected = function (path) {
        this.selectedPath = path;
    };
    DataImageComponent.prototype.generateClasses = function () {
        var result = "";
        this.mappedProperties.forEach(function (element) {
            result += "." + element.datakey + "{fill:" + element.color + "}";
        });
        return result;
    };
    return DataImageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DataImageComponent.prototype, "paths", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataImageComponent.prototype, "isEditorMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DataImageComponent.prototype, "mappedProperties", void 0);
DataImageComponent = __decorate([
    core_1.Component({
        selector: 'data-image',
        templateUrl: './dataimage.component.html'
    })
    //todo move this out, input from service transform
], DataImageComponent);
exports.DataImageComponent = DataImageComponent;
//# sourceMappingURL=dataimage.component.js.map