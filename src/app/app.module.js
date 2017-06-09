"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
//todo - move this into a module of its own
var dataimagehost_component_1 = require("./DataImage/DataImageHost/dataimagehost.component");
var dataimage_component_1 = require("./DataImage/dataimage.component");
var mappedproperty_service_1 = require("./DataImage/MappedProperty/mappedproperty.service");
var mappedpropertymock_service_1 = require("./DataImage/MappedProperty/mappedpropertymock.service");
var datapath_service_1 = require("./DataImage/DataPath/datapath.service");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, dataimagehost_component_1.DataImageHostComponent, dataimage_component_1.DataImageComponent],
        providers: [{ provide: mappedproperty_service_1.MappedPropertyService, useClass: mappedpropertymock_service_1.MappedPropertyMockService },
            datapath_service_1.DataPathService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map