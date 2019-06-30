import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [MatTableModule,MatButtonModule,MatMenuModule],
    
 exports: [MatTableModule,MatButtonModule,MatMenuModule] 
})
export class MaterialModule { }