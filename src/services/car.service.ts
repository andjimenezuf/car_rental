// car.service.ts
import { supabaseClient } from './auth.service';
import { Car } from './interfaces';

export const fetchCars = async () => {
    let { data: cars, error } = await supabaseClient
        .from('cars')
        .select('*');
    if (error) throw new Error(error.message);
    return cars;
};
