import { Routes } from '@angular/router';
import { ByCapital } from './pages/by-capital/by-capital';
import { CountryLayout } from './layout/country-layout/country-layout';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapital,
      },
      {
        path: 'by-country',
        loadComponent: () =>
          import('./pages/by-country/by-country').then((m) => m.ByCountry),
      },
      {
        path: 'by-region',
        loadComponent: () =>
          import('./pages/by-region/by-region').then((m) => m.ByRegion),
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];
