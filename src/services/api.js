import { API_BASE } from '@/constants';
import { SwapiService } from './swapi.service';

export const api = {
	people: new SwapiService(API_BASE, 'people'),
	planets: new SwapiService(API_BASE, 'planets'),
};
