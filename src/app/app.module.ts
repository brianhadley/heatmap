//@angular modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

//third party
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'

//todo - move these into modules of their own
//app components and modules
import { AppRouterModule } from './app-router.module'
import { DataImageComponent } from './DataImage/dataimage.component'
import { MappedPropertyService } from './DataImage/MappedProperty/mappedproperty.service'
import { MappedPropertyMockService  } from './DataImage/MappedProperty/mappedpropertymock.service'
import { DataPathService } from './DataImage/DataPath/datapath.service'
import { DataPathStorageService } from './DataPathStorage/datapathstorage.service'
import { MapEditorComponent } from './MapEditor/mapeditor.component'
import { MapAnalyzerComponent } from './MapAnalyzer/mapanalyzer.component'

import { AppComponent }  from './app.component';

export const firebaseConfig = {
    apiKey: "something",
    authDomain: "heatmap-f775c.firebaseapp.com",
    databaseURL: "https://heatmap-f775c.firebaseio.com",
    projectId: "heatmap-f775c",
    storageBucket: "heatmap-f775c.appspot.com",
    messagingSenderId: "orother"
  };

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  BrowserAnimationsModule, 
                  MaterialModule,
                  FlexLayoutModule,
                  AppRouterModule,                   
                  AngularFireModule.initializeApp(firebaseConfig), 
                  AngularFireDatabaseModule ],
  
  declarations: [ AppComponent, DataImageComponent, MapEditorComponent, MapAnalyzerComponent ],
  providers:    [ {provide: 'IMappedPropertyService', useClass:MappedPropertyMockService},
                  {provide: 'IDataPathService', useClass : DataPathService},
                  {provide: 'IDataPathStorageService', useClass : DataPathStorageService}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
