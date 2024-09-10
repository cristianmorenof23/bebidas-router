import { StateCreator } from "zustand"
import { ObtenerCategorias, ObtenerRecetaById, ObtenerRecetas } from "../services/RecetasService"
import { Bebida, Bebidas, BusquedaFiltro, ICategoria, Receta } from "../interfaces"

export interface IRecetasSlice {
  categorias: ICategoria
  drinks: Bebidas
  elegirReceta: Receta
  modal: boolean
  fetchCategorias: () => Promise<void>
  busquedaRecetas: (busquedaFiltros: BusquedaFiltro) => Promise<void>
  seleccionarReceta: (id: Bebida['idDrink']) => Promise<void>
  cerrarModal: () => void
}


export const createRecetaSlice: StateCreator<IRecetasSlice> = (set) => ({
  categorias: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  elegirReceta: {} as Receta,
  modal: false,
  fetchCategorias: async () => {
    const categorias = await ObtenerCategorias()
    set({
      categorias
    })
  },
  // bsucar recetas
  busquedaRecetas: async (filtros) => {
    const drinks = await ObtenerRecetas(filtros)
    set({
      drinks
    })
  },
  seleccionarReceta: async (id) => {
    const receta = await ObtenerRecetaById(id)
    set({
      elegirReceta : receta,
      modal: true
    })
  },
  cerrarModal: () => {
    set({
      modal: false,
      elegirReceta: {} as Receta
    })
  }
})