import {z} from 'zod';

export const createClimaSchema = z.object({
   ciudad: z.string().min(1, "La ciudad es requerida")
})
