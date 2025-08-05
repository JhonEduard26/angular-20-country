export interface Country {
  area: number;
  isoCode: string;
  flag: string;
  flagSvg: string;
  name: string;
  capital: string;
  population: number;
  currency: string;
}

export type Region =
  | 'Africa'
  | 'Americas'
  | 'Asia'
  | 'Europe'
  | 'Oceania'
  | 'Antarctic';
