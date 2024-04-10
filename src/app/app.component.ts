import { Component } from '@angular/core'; 
@Component({ 
    selector: 'app-root', 
    templateUrl: './app.component.html', 
}) 
export class AppComponent { 
    data = { 
        labels: ['GeeksforGeeks', 'Tutorial Point', 'W3 Schools',  
                 'Javatpoint', 'Indiabix', 'Codechef'], 
        datasets: [ 
            { 
                label: 'Single Dataset', 
                data: [75, 49, 95, 71, 66, 65], 
                borderColor: 'lightgreen', 
                pointHoverBackgroundColor: '#fff', 
                pointHoverBorderColor: 'lightgreen', 
            } ,
            { 
                label: 'Double Dataset', 
                data: [37, 24, 48, 35, 33, 32], 
                borderColor: 'red', 
                pointHoverBackgroundColor: '#fff', 
                pointHoverBorderColor: 'lightgreen', 
            } 
        ] 
    }; 
}