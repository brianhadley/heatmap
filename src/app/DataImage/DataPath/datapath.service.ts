import { Injectable, Inject } from '@angular/core'
import { DataPath } from './datapath' 
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IDataPathService } from './datapath.service.interface'; 
import { IDataPathStorageService } from '../../DataPathStorage/datapathstorage.service.interface'
import { DataPathSvg } from '../../DataPathStorage/datapathsvg'

import * as xml2js from 'xml2js';

@Injectable()

export class DataPathService implements IDataPathService{

    selectPaths : DataPath[] = [];

    paths = new BehaviorSubject<DataPath[]>([{ addlClass: '',stroke:'', pathkey:'', path: '' }]);
    svgNames = new BehaviorSubject<DataPathSvg[]>([]);

    changes = this.paths.asObservable();
    svgNamesChanges = this.svgNames.asObservable();

    constructor(@Inject('IDataPathStorageService') private storage: IDataPathStorageService) {
        this.Init();
    }

    Init() {
        this.storage
        .loadedPathsChanged
        .subscribe((newPaths:DataPath[]) => {{this.selectPaths = newPaths;
                                              this.paths.next(this.selectPaths)}}
        );

        this.storage
        .dataPathSvgIndexChanged
        .subscribe((newnames:DataPathSvg[]) => this.svgNames.next(newnames));
    }

    loadPathsFromFile(file:Blob) {
        var reader:FileReader = new FileReader();
        
        reader.onloadend = (event) => {                        
            var result = reader.result;

            xml2js.parseString(result,
                (err,result)=>{this.parsePathsFromSvgJson(err,result)});
        } 
        reader.readAsText(file, 'ISO-8859-1');    
    }

    loadPathsFromStorage(sourceKey : string){
        this.storage.loadAsync(sourceKey);
    }

    savePathsToStorage(svgKey : string){
        this.storage.save(svgKey,this.selectPaths,"turtle5","");
    }
    
    private parsePathsFromSvgJson(err: any, parsedSvg: any) : void {
        //TODO: make this more adaptable
        var newPaths : DataPath[] = [];

            parsedSvg.svg.g.forEach(topLevelgs => {
                //console.log(topLevelgs.path);

                topLevelgs.path.forEach(path=>{
                    var newPath : DataPath = {addlClass:"",pathkey:"",path:path.$.d,stroke:""};
                    newPaths.push(newPath);        
                })
            });
            this.selectPaths = newPaths;    
            this.paths.next(this.selectPaths);
    }

}