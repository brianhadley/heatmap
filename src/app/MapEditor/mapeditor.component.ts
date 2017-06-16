import { Component, Inject } from '@angular/core';
import { DataImageComponent } from '../DataImage/dataimage.component'
import { DataPath } from '../DataImage/DataPath/datapath'
import { IMappedPropertyService } from '../DataImage/MappedProperty/mappedproperty.service.interface'
import { IDataPathService } from '../DataImage/DataPath/datapath.service.interface'
import { MappedProperty } from '../DataImage/MappedProperty/mappedproperty'
import { DataPathSvg } from '../DataPathStorage/datapathsvg'

@Component({
    selector : 'map-editor',
    templateUrl : './mapeditor.component.html',
    styleUrls: ['./mapeditor.component.css']
})

export class MapEditorComponent
{
    isEditorMode: boolean = false;
    mappedProperties: MappedProperty[];
    paths: DataPath[];
    selectedPath: DataPath = {addlClass:"",pathkey:"",path:"",stroke:""};
    svgnames: DataPathSvg[] = [];
    currentSvgKey = "";
    showsidenav = false;


    selectionIdAssignment: string;
    x: string = "1500";
    y: string = "800";

    currentAltered: boolean = false;

   constructor(@Inject('IMappedPropertyService') private mappedPropertyService: IMappedPropertyService,
               @Inject('IDataPathService') private dataPathService: IDataPathService) { }
               

    ngOnInit() {        
        this.mappedProperties = this.mappedPropertyService.getMappedProperties();
        
        this.dataPathService
            .changes
            .subscribe((newPaths:DataPath[]) => this.paths = newPaths);

        this.dataPathService
            .svgNamesChanges
            .subscribe((newSvgs:DataPathSvg[]) => {this.svgnames = newSvgs; 
                console.log('svgnames',newSvgs);});
    }

    selectedPathChanged(newPath:DataPath){        
        this.selectedPath = newPath;        
    }

    openSideNav() {
        this.showsidenav = true;
    }

    closeSideNav() {
        this.showsidenav = false;
    }

    readSvg($event : any) : void {
        this.currentSvgKey = "";
        this.dataPathService.loadPathsFromFile($event.target.files[0]);
        this.currentAltered = true;
    } 
    
    svgChanged() : void {
        this.currentAltered = true;
    }

    saveCurrent() {
        this.selectedPath.stroke = "";
        this.selectedPath.addlClass = "";
        this.dataPathService.savePathsToStorage(this.currentSvgKey);        
    }

    loadNewSvgFromDb(selectedKey : any){
        this.currentSvgKey = selectedKey.value;        
        this.dataPathService.loadPathsFromStorage(selectedKey.value);
    }
}