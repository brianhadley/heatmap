import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { MapEditorComponent } from './MapEditor/mapeditor.component'
import { MapAnalyzerComponent } from './MapAnalyzer/mapanalyzer.component'


const appRoutes: Routes = [
    { path : '', redirectTo : 'map-analyzer', pathMatch : 'full'},
    { path : 'map-editor', component: MapEditorComponent },
    { path : 'map-analyzer', component: MapAnalyzerComponent }
]

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports : [
        RouterModule
    ]
}
)

export class AppRouterModule {}
