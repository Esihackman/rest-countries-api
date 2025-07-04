export interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld?: string[];
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital?: string[];
  borders?: string[];
  cca3: string;
}

export interface CountryState {
  country?: Country;
  countries: Country[];
  selectedRegion: string;
  filteredCountries?: Country[];
  loading: boolean;
}
