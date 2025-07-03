export interface Country {
  name: {
    toLowerCase(): unknown;
    common: string;
  };
  flags: { svg: string; png: string };
  
  population: number;
  region: string;
  capital?: string[];
}
