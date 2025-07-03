import { Country } from '../../models/country.model';

export interface CountriesState {
  countries: Country[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  filterRegion: string;
}

export const initialCountriesState: CountriesState = {
  countries: [],
  loading: false,
  error: null,
  searchQuery: '',
  filterRegion: ''
};
