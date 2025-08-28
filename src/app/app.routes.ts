import { Routes } from '@angular/router';
import { Homepage } from "./homepage/homepage";
import { Projectpage } from './projectpage/projectpage';

export const routes: Routes = [
    { path: '', component: Homepage },
    { path: 'projects', component: Projectpage}
];
