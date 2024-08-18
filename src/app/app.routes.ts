import { Routes } from '@angular/router';
import { TodojsonComponent } from './Components/todojson/todojson.component';
import { HomeComponent } from './Components/home/home.component';
import { TododetailsComponent } from './Components/tododetails/tododetails.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

export const routes: Routes = [
  {
    path:'',redirectTo:'/todos',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'todos',component:TodojsonComponent
  },
  {
    path:'todos/:id',component:TododetailsComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'aboutus',component:AboutusComponent
  },
  {
    path:'**',component:NotfoundComponent
  },

];
