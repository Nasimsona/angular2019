import {Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import {TemplatedrivenComponent} from './templatedriven/templatedriven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

import { BuilderFormComponent } from './builder-form/builder-form.component';

export const appRoutes: Routes = [
  { path: 'Home', component: AppComponent },
  { path: 'Hello', component: HelloComponent },
  { path:'Employee',component:EmployeeListComponent},
  { path:'Template',component:TemplatedrivenComponent},
  { path:'Reactive',component:ReactiveformComponent},
    { path:'builderForm',component:BuilderFormComponent}
];