import { StateCreator } from "zustand"
import { Receta } from "../interfaces"
import Swal from "sweetalert2"


export type FavoritosSlicesType = {
  favortios: Receta[]
  handleClickFavoritos: (receta: Receta) => void
  favoritosExiste: (id: Receta['idDrink']) => boolean
  loadFormStorage: () => void
}

export const createFavoritosSlice: StateCreator<FavoritosSlicesType> = (set, get) => ({
  favortios: [],
  handleClickFavoritos: (receta) => {
    if (get().favortios.some(favorito => favorito.idDrink === receta.idDrink)) {
      set((state) => ({
        favortios: state.favortios.filter(favorito => favorito.idDrink !== receta.idDrink)
      }))
      Swal.fire({
        icon: "success",
        title: "Eliminado de favoritos",
        text: `${receta.strDrink} ha sido eliminado de tus favoritos.`,
        timer: 1500,
        showConfirmButton: false
      });
    } else {
      set((state) => ({
        favortios: [...state.favortios, receta]
      }))
      Swal.fire({
        icon: "success",
        title: "Agregado a favoritos",
        text: `${receta.strDrink} ha sido agregado a tus favoritos.`,
        timer: 1500,
        showConfirmButton: false
      });
    }
    localStorage.setItem('favoritos', JSON.stringify(get().favortios))
  },
  favoritosExiste: (id) => {
    return get().favortios.some(favorito => favorito.idDrink === id)
  },
  loadFormStorage: () => {
    const favoritosStore = localStorage.getItem('favoritos')
    if (favoritosStore) {
      set({
        favortios: JSON.parse(favoritosStore)
      })
    }
  }
})