import { z } from 'zod'

export const CategoriasApiResponseSchema = z.object({
  drinks: z.array(z.object({
    strCategory: z.string()
  }))
})

export const BusquedaFiltroSchema = z.object({
  ingredient: z.string(),
  categoria: z.string(),
})

export const BebidaAPIResponse = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string()
})

export const BebidasAPIResponse = z.object({
  drinks: z.array(BebidaAPIResponse)
})


export const RecipeAPIResponseSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
  strInstructions: z.string(),
  strIngredient1: z.string().nullable(),
  strIngredient2: z.string().nullable(),
  strIngredient3: z.string().nullable(),
  strIngredient4: z.string().nullable(),
  strIngredient5: z.string().nullable(),
  strIngredient6: z.string().nullable(),
  strMeasure1: z.string().nullable(),
  strMeasure2: z.string().nullable(),
  strMeasure3: z.string().nullable(),
  strMeasure4: z.string().nullable(),
  strMeasure5: z.string().nullable(),
  strMeasure6: z.string().nullable(),
});