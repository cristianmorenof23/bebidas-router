import { z } from 'zod';
import { BebidaAPIResponse, BebidasAPIResponse, BusquedaFiltroSchema, CategoriasApiResponseSchema, RecipeAPIResponseSchema } from '../schemas/recetas-schema';

export type ICategoria = z.infer<typeof CategoriasApiResponseSchema>
export type BusquedaFiltro = z.infer<typeof BusquedaFiltroSchema>
export type Bebidas = z.infer<typeof BebidasAPIResponse>
export type Bebida = z.infer<typeof BebidaAPIResponse>
export type Receta = z.infer<typeof RecipeAPIResponseSchema> 