import { Routes } from '@angular/router';
import { Overview } from './overview/overview';
import { Home } from './home/home';
import { Politician } from './politician/politician';

export const routes: Routes = [
    {
        path: 'overview',
        component: Overview
    },
    {
        path: 'politician/:id',
        component: Politician
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: '',
        redirectTo: '/overview',
        pathMatch: 'full'
    }
];
