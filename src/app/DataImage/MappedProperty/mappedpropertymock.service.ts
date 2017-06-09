import { Injectable } from '@angular/core'
import { MappedProperty } from './mappedproperty'

@Injectable()

export class MappedPropertyMockService {
    private mappedProperties : MappedProperty[] = [
      {datakey:'A', color:'#4682b4', stroke:''},
      {datakey:'B', color:'#C0C0C0',stroke:''},
      {datakey:'C', color:'#98ff98',stroke:''},
      {datakey:'D', color:'#FFDB58',stroke:''},
    ];  

    getMappedProperties() : MappedProperty[] {
        return this.mappedProperties;
    } 
}