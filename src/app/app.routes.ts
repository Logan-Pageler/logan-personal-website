import { Routes } from '@angular/router';
import { Homepage } from "./homepage/homepage";
import { Projectpage } from './projectpage/projectpage';

/**
 * List of all the routes and the pages they map to
 */
export const routes: Routes = [
    { path: '', component: Homepage },
    { path: 'projects', component: Projectpage}
];
