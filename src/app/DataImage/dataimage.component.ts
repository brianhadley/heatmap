
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DataPath} from './DataPath/datapath';
import {MappedProperty} from './MappedProperty/mappedproperty';


export class Path {
    d: string;
    id: string;
}

export class MapItem {
    id: string;
    color: string;
}

@Component (
    {
        selector : 'data-image',
        templateUrl : './dataimage.component.html',
        styleUrls: ['./dataimage.component.css']       
    }
)

//todo move this out, input from service transform
export class DataImageComponent {
  @Input()
  paths: DataPath[];

  @Input()
  mappedProperties : MappedProperty[];
 
  @Input()
  x: string;

  @Input()
  y: string;

  @Input()
  currentSelectedId: string;

  @Input()
  selectedPath : DataPath;

  trackedPathKey : string;
  
  @Output() selectedPathChanged = new EventEmitter<DataPath>();

  ngOnChanges() {
      if (this.selectedPath) {
          this.selectedPathChanged.emit(this.selectedPath);
          this.selectedPath.pathkey = this.currentSelectedId;
          this.trackedPathKey = this.currentSelectedId;
      }
  }

  computeViewbox() : string {
    return "0 0 " + this.x + " " + this.y;
  }

  setSelected(path : DataPath) {
    this.selectedPathChanged.emit(path);  
    if (this.selectedPath) {
        this.selectedPath.stroke = "";
        this.selectedPath.addlClass = "";
        
    }

    this.selectedPath = path;
    this.selectedPath.addlClass = "svg-light";
    //this.selectedPath.pathkey = this.selectedPath.pathkey + " svg-light";           
    this.selectedPath.stroke = "red"; 

    //this.trackedPathKey = this.selectedPath.pathkey;
  }

  createClass(Path : DataPath) {
      return Path.pathkey + " " + Path.addlClass;
  }

  generateClasses() {
      var result : string = "";

      this.mappedProperties.forEach(element => {
          result += "." + element.datakey + "{fill:"+element.color+"}";
      });
      return result;
  }
}