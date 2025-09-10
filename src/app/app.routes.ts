import { Routes } from '@angular/router';
import { Homepage } from "./homepage/homepage";
import { Projectpage } from './projectpage/projectpage';
import { SortWiki } from './projectpage/sort-wiki/sort-wiki';
import { Shapemon } from './projectpage/shapemon/shapemon';
import { PersonalWebsite } from './projectpage/personal-website/personal-website';

/**
 * List of all the routes and the pages they map to
 */
export const routes: Routes = [
    { path: '', component: Homepage },
    { path: 'projects', component: Projectpage},
    { path: 'projects/sort-wiki', component: SortWiki},
    { path: 'projects/personal-website', component: PersonalWebsite},
    { path: 'projects/shapemon', component: Shapemon},
];
