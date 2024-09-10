import axios from "axios";
import { BebidasAPIResponse, CategoriasApiResponseSchema, RecipeAPIResponseSchema } from "../schemas/recetas-schema";
import { Bebida, BusquedaFiltro } from "../interfaces";


export async function ObtenerCategorias() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
  const { data } = await axios.get(url)
  const result = CategoriasApiResponseSchema.safeParse(data)
  if (result.success) {
    return result.data
  }
}


export async function ObtenerRecetas(filtros: BusquedaFiltro) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filtros.categoria}&i=${filtros.ingredient}`
  const { data } = await axios(url)
  const result = BebidasAPIResponse.safeParse(data)
  if (result.success) {
    return result.data
  }
}

export async function ObtenerRecetaById(id: Bebida['idDrink']) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  const { data } = await axios(url)
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
  if (result.success) {
    return result.data
  }

}