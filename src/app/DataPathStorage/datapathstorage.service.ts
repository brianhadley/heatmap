import { Injectable } from '@angular/core'
import { IDataPathStorageService } from './datapathstorage.service.interface'
import { DataPath } from '../DataImage/DataPath/datapath'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DataPathSvg } from './datapathsvg'

@Injectable()

export class DataPathStorageService implements IDataPathStorageService {
    
    //to be made into a constant or param
    private imageStorePath : string = "alphaTestingImages"; 

    private paths : DataPath[];
    private svgindex : DataPathSvg[] = [];
    private db : AngularFireDatabase;
    private currentSelectedPathRef = "";

    loadedPaths = new BehaviorSubject<DataPath[]>([]);
    dataPathSvgIndex = new BehaviorSubject<DataPathSvg[]>([]);

    loadedPathsChanged = this.loadedPaths.asObservable();
    dataPathSvgIndexChanged = this.dataPathSvgIndex.asObservable();
    

    constructor(db: AngularFireDatabase) {
        this.db = db;
        
        var postListRef = db.database.ref('svgnames/' + this.imageStorePath);
            postListRef.on('value', snapshot => {
                //console.log(key,snapshot.val());
                for (var key in snapshot.val()){                    
                    var newitemRef = this.svgindex.push(snapshot.val()[key]); 
                    this.svgindex[newitemRef-1].key = key;
                    
                }
                this.dataPathSvgIndex.next(this.svgindex);
            });

    }

    test(dblistitem) : boolean {
        console.log(dblistitem);
        
        return true;
    }

    save(svgKey:string, paths:DataPath[], svgName?:string, svgDescription?:string) {
        if (svgKey=="") {
            var postListRef = this.db.database.ref('svgnames/' + this.imageStorePath);
            var newPostRef = postListRef.push();
        
            newPostRef.set({name:svgName,description:svgDescription}); 
            var newkey = newPostRef.key;

            this.db.database.ref('maps/' + this.imageStorePath +'/' + newkey).set(paths);   
        } else {
            this.db.database
                .ref('maps/' + this.imageStorePath +'/' + svgKey)
                .set(paths); 
        }       
    }



    loadAsync(svgKey:string) {
        if (this.currentSelectedPathRef!=="") {
            var oldRef = this.db.database.ref('maps/' + this.imageStorePath + '/' + svgKey);
            oldRef.off(); 
        }

        var svgRef = this.db.database.ref('maps/' + this.imageStorePath + '/' + svgKey);
        svgRef.on('value',snapshot => {
            this.loadedPaths.next(snapshot.val());
        });
    }

    listAllAsync() {
        
    }
}