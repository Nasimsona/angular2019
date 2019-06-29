import {Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import {TemplatedrivenComponent} from './templatedriven/templatedriven.component';

export const appRoutes: Routes = [
  { path: 'Home', component: AppComponent },
  { path: 'Hello', component: HelloComponent },
  { path:'Employee',component:EmployeeListComponent},
  { path:'ReactiveForm',component:TemplatedrivenComponent}
   
];