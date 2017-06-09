
import { DataPath } from '../DataImage/DataPath/datapath'
import { DataPathSvg } from './datapathsvg'
import { Observable } from 'rxjs/Observable'; 

export interface IDataPathStorageService {
    save(svgKey : string, paths : DataPath[], svgName?:string, svgDescription?:string);
    loadAsync(svgName);
    listAllAsync();
    loadedPathsChanged : Observable<DataPath[]>;
    dataPathSvgIndexChanged : Observable<DataPathSvg[]>;
}