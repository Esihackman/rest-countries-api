export interface Country {
borders: any;
tld: any;
subregion: any;
  languages: any;
  currencies: any;
  cca3: string | null;
  name: {
    nativeName: any;
    toLowerCase(): unknown;
    common: string;
  };
  flags: { svg: string; png: string };
  
  population: number;
  region: string;
  capital?: string[];
}
