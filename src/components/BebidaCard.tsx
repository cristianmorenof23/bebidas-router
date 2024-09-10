import { Bebida } from "../interfaces";
import { useAppStore } from "../stores/useAppStore";

type DrinkCardProps = {
  drink: Bebida;
};

const BebidaCard = ({ drink }: DrinkCardProps) => {
  const { seleccionarReceta } = useAppStore();
  return (
    <div className="border shadow-lg">
      <div>
        <img
          className="transform transition duration-300 hover:scale-105 rounded"
          src={drink.strDrinkThumb}
          alt={`${drink.strDrink}`}
        />
      </div>

      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
        <button
          type="button"
          className=" mt-4 middle text-center none center w-full rounded-lg bg-cyan-500 py-4 px-6 font-sans text-sm font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          onClick={() => seleccionarReceta(drink.idDrink)}
        >
          Ver Receta
        </button>
      </div>
    </div>
  );
};

export default BebidaCard;
