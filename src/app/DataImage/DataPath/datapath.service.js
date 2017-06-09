"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var xml2js = require("xml2js");
var DataPathService = (function () {
    function DataPathService() {
        this.paths = [
            { pathkey: 'A', path: 'M637.1,163.7c0,0-2.6-3.8-2.7-4.1C568,60.2,466.8,3.5,349.4,0C232,3.5,130.9,60.2,64.4,159.6c-0.2,0.2-2.7,4.1-2.7,4.1C9.8,244-11.5,344.4,6,426.2V426c0.4,1.9,0.7,3.7,1.2,5.9C22,488.7,80.8,534.3,130.5,558.5 c57.6-70.8,132.5-105.1,219.4-105.3c87,0.2,158.9,28.1,218.5,105.3c49.7-24.2,108.5-69.8,123.2-126.6c0.5-2.1,0.9-4,1.2-5.9l0.1,0.1C710.4,344.4,689,244,637.1,163.7' },
            { pathkey: 'B', path: 'M39.6,421l-0.1-0.4c-3.7-17.2-5.5-35.4-5.5-54c0-33.8,6-69.3,17.2-103.8c8.8-24.1,23-54.4,38-80.1c7.1,23.5,11.3,48.9,11.3,75.5C100.6,323.6,76.9,382,39.6,421' },
            { pathkey: 'B', path: 'M353,376.3c-93.3,0-168.9-73.7-168.9-164.6S259.7,47.2,353,47.2c93.3,0,168.9,73.7,168.9,164.5S446.3,376.3,353,376.3' },
            { pathkey: 'B', path: 'M663.4,420.1c0,0.1,0,0.2,0,0.4c-37-39-60.6-97.1-60.6-162.3c0-26.3,4-51.5,11-74.8c15.8,27.1,30.6,59.1,39.1,83.5c10.4,32.9,15.9,66.6,15.9,99C668.9,384.4,667.1,402.6,663.4,420.1' },
            { pathkey: 'C', path: 'M349.3,452.6c-79,0.2-175.4,26.7-218.9,105.9c4.6,39.2,21.8,90.4,77.7,110.1c44.8,15.8,90.1,20.8,120.7,21c0.1,0,10.8,0,10.8,0c0.2,0.2,9.8,0.2,9.8,0.2s9.6,0,9.9-0.2c0,0,10.7,0,10.7,0c30.6-0.2,75.9-5.2,120.6-21                                c55.9-19.7,73.1-70.9,77.7-110.1C524.8,479.3,428.4,452.8,349.3,452.6' },
            { pathkey: 'D', path: 'M278,596.9c-16.3-0.2-18.4-27.7-18.4-60.1c0-32.5,3.5-56.4,18.8-57.8c17.6-1.7,17.6,26.5,17.6,59C296.2,570.5,293.5,597,278,596.9' },
            { pathkey: 'D', path: 'M426.3,596.9c-15.5,0.1-18.1-26.4-18.1-59c0-32.5,0-60.7,17.6-59c15.3,1.4,18.8,25.3,18.8,57.8C444.6,569.2,442.5,596.6,426.3,596.9' },
        ];
    }
    DataPathService.prototype.retrievePaths = function () {
        return this.paths;
    };
    //
    DataPathService.prototype.retrievePathsFromFile = function (file) {
        var reader = new FileReader();
        reader.onloadend = function (e) {
            var result = reader.result;
            console.log();
            xml2js.parseString(result, function (err, results) {
                console.log(results);
            });
        };
        reader.readAsText(file, 'ISO-8859-1');
    };
    return DataPathService;
}());
DataPathService = __decorate([
    core_1.Injectable()
], DataPathService);
exports.DataPathService = DataPathService;
//# sourceMappingURL=datapath.service.js.map