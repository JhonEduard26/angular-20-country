import { Routes } from '@angular/router';
import { ByCapital } from './pages/by-capital/by-capital';
import { CountryLayout } from './layout/country-layout/country-layout';
import { ByCountry } from './pages/by-country/by-country';
import { ByRegion } from './pages/by-region/by-region';
import { ByCode } from './pages/by-code/by-code';

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
        component: ByCountry,
      },
      {
        path: 'by-region',
        component: ByRegion,
      },
      {
        path: 'by/:isocode',
        component: ByCode,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];
