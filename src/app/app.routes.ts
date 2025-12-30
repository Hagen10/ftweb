import { Routes } from '@angular/router';
import { Overview } from './overview/overview';

export const routes: Routes = [
    {
        path: 'overview',
        component: Overview
    },
    {
        path: '',
        redirectTo: '/overview',
        pathMatch: 'full'
    }
];
