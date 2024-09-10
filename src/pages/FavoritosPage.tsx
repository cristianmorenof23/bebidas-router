import { useMemo } from "react";
import BebidaCard from "../components/BebidaCard";
import { useAppStore } from "../stores/useAppStore";


export default function FavoritosPage() {
  const { favortios } = useAppStore();
  const hasFavoritos = useMemo(() => favortios.length, [favortios])
  return (
    <>
      <h1 className="font-serif text-5xl text-center">Favoritos</h1>

    {hasFavoritos ? (
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
            {favortios.map((receta) => (
              <BebidaCard
                key={receta.idDrink}
                drink={receta}
              />
            ))}
          </div>
    ) : (
      <p className="my-10 text-center text-2xl font-serif">Los favoritos se mostraran aquí</p>
    )}
    </>
  );
}
