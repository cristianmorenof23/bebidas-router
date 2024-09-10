import { create } from "zustand"
import { devtools } from 'zustand/middleware'
import { createRecetaSlice, IRecetasSlice } from "./recetasSlice"
import { FavoritosSlicesType, createFavoritosSlice } from "./favoritosSlice"

export const useAppStore = create<IRecetasSlice & FavoritosSlicesType>()(devtools((...a) => ({
  ...createRecetaSlice(...a),
  ...createFavoritosSlice(...a)
})))