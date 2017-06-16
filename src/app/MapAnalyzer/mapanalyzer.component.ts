import {Component} from '@angular/core'

@Component({
    selector : 'map-analzyer',
    templateUrl : './mapanalyzer.component.html'
})

export class MapAnalyzerComponent {
    /*member variables*/ 
    showsidenav : boolean = false;

    /*function declarations*/
    openSideNav() {
        this.showsidenav = true;
    }

    closeSideNav() {
        this.showsidenav = false;
    }

    readCsv(event) {
        this.parseCsvToJson(event.target.files[0]);
    }

    parseCsvToJson (file) {
        var reader:FileReader = new FileReader();
        
        reader.onloadend = (event) => {                        
            var result = reader.result;

            console.log(result);
        } 
        reader.readAsText(file, 'ISO-8859-1');
    }
}