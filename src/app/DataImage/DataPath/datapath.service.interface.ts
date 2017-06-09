import { DataPath } from './datapath' 
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable'; 
import { IDataPathStorageService } from '../../DataPathStorage/datapathstorage.service.interface'
import { DataPathSvg } from '../../DataPathStorage/datapathsvg'

export interface IDataPathService {
    paths : BehaviorSubject<DataPath[]>;
    changes : Observable<DataPath[]>;
    svgNamesChanges : Observable<DataPathSvg[]>;

    loadPathsFromFile(file:Blob) : void;
    loadPathsFromStorage(sourceName: string) : void;
    savePathsToStorage(sourceName: string) :void;
}