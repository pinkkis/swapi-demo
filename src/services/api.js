import { API_BASE } from '@/constants';
import { ApiBaseService } from './api-base.service';

export const api = {
	people: new ApiBaseService(API_BASE, 'people'),
	planets: new ApiBaseService(API_BASE, 'planets'),
};
