import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { useAppStore } from "../stores/useAppStore";
import { Receta } from "../interfaces";

export default function Modal() {
  const { modal, cerrarModal, elegirReceta, handleClickFavoritos, favoritosExiste } = useAppStore();

  // cantidad y listado de ingredientes
  const renderIngredients = () => {
    const ingredientes: JSX.Element[] = [];
    for (let i = 1; i <= 6; i++) {
      const ingrediente = elegirReceta[`strIngredient${i}` as keyof Receta];
      const cantidades = elegirReceta[`strMeasure${i}` as keyof Receta];

      if (ingrediente && cantidades) {
        ingredientes.push(
          <li key={i} className="text-lg font-normal">
            {ingrediente} - {cantidades}
          </li>
        );
      }
    }

    return ingredientes;
  };
  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={cerrarModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-4xl font-serif my-5 text-center"
                  >
                    {elegirReceta.strDrink}
                  </DialogTitle>

                  <img
                    src={elegirReceta.strDrinkThumb}
                    alt={`imagen de ${elegirReceta.strDrink}`}
                    className="mx-auto rounded sombreado w-96"
                  />
                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-2xl font-serif my-5"
                  >
                    Ingredientes y Cantidades
                  </DialogTitle>
                  {renderIngredients()}
                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-2xl font-serif my-5"
                  >
                    Instrucciones
                    <p className="text-lg">{elegirReceta.strInstructions}</p>
                    <div className="flex mt-5 justify-between gap-4">
                      <button className=" mt-4 middle text-center none center w-full rounded-lg bg-orange-500 py-4 px-6 font-sans text-sm font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                        onClick={() => {
                          handleClickFavoritos(elegirReceta)
                          cerrarModal()
                        }}
                      >
                        {favoritosExiste(elegirReceta.idDrink) ? 'Eliminar Favorito' : 'Agregar a Favoritos'}
                      </button>

                      <button
                        className=" mt-4 middle text-center none center w-full rounded-lg bg-red-500 py-4 px-6 font-sans text-sm font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        onClick={cerrarModal}
                      >
                        Cerrar
                      </button>
                    </div>
                  </DialogTitle>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
