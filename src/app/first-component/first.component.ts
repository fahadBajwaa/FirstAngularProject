import { Component } from "@angular/core";

@Component({
    selector:'app-first', // we use this to add this component in the app.component.html
    standalone:true, // specific imports for each component
    styles:'first.component.css',  // styling files
    templateUrl:'./fist.component.html' // template file
})

export class FirstComponent{

}