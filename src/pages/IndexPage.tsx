import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import BebidaCard from "../components/BebidaCard";

export default function IndexPage() {
  const { drinks } = useAppStore();

  const tenemosRecetas = useMemo(() => drinks.drinks.length > 0, [drinks]);
  return (
    <>
      <h1 className="text-6xl text-center font-serif">Recetas</h1>
      {tenemosRecetas ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
          {drinks.drinks.map((drink) => (
            <BebidaCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl font-serif">
          No hay resultados aún, utiliza el formulario para buscar recetas
        </p>
      )}
    </>
  );
}
