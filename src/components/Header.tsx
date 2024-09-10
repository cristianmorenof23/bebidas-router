import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import Swal from "sweetalert2";

export default function Header() {
  const [busquedaFiltro, setBusquedaFiltro] = useState({
    ingredient: "",
    categoria: "",
  });
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  const { fetchCategorias, categorias, busquedaRecetas } = useAppStore();

  useEffect(() => {
    fetchCategorias();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setBusquedaFiltro({
      ...busquedaFiltro,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validar
    if (Object.values(busquedaFiltro).includes("")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
        confirmButtonText: "Reintentar"
      });
      return;
    }

    // consultar las recetas
    busquedaRecetas(busquedaFiltro)
  };
  return (
    <header
      className={
        isHome
          ? " bg-header sombreado bg-center bg-cover"
          : "bg-slate-800 sombreado"
      }
    >
      <div className="mx-auto container px-5 p-16">
        <div className="flex justify-between items-center">
          <div>
            <NavLink to="/">
              <img
                className="w-32 hover:scale-110 transition-transform duration-200"
                src="/logo.svg"
                alt="logotipo"
              />
            </NavLink>
          </div>

          <nav className="flex gap-4">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `text-orange-500 uppercase font-bold relative before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-[-2px] before:h-[2px] before:bg-orange-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100`
                  : `text-white uppercase font-bold relative before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-[-2px] before:h-[2px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100`
              }
              to="/"
            >
              Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `text-orange-500 uppercase font-bold relative before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-[-2px] before:h-[2px] before:bg-orange-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100`
                  : `text-white uppercase font-bold relative before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-[-2px] before:h-[2px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100`
              }
              to="/favoritos"
            >
              Favoritos
            </NavLink>
          </nav>
        </div>

        {isHome && (
          <form
            className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Nombre o Ingredientes
              </label>
              <input
                id="ingredient"
                type="text"
                placeholder="Nombre o ingrediente. Ej. Vodka, Tequile, Caffe"
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none focus:border-orange-400 focus:ring-orange-500 focus:ring-1"
                onChange={handleChange}
                value={busquedaFiltro.ingredient}
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="categoria"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categoria
              </label>
              <select
                id="categoria"
                name="categoria"
                className="p-3 w-full rounded-lg text-slate-500 focus:outline-none focus:border-orange-400 focus:ring-orange-500 focus:ring-1"
                onChange={handleChange}
                value={busquedaFiltro.categoria}
              >
                <option value="" className="text-center">
                  -- Seleccione --
                </option>
                {categorias.drinks.map((categoria) => (
                  <option
                    value={categoria.strCategory}
                    key={categoria.strCategory}
                  >
                    {categoria.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Buscar Recetas"
              className="middle text-center none center w-full rounded-lg bg-cyan-500 py-4 px-6 font-sans text-sm font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
            />
          </form>
        )}
      </div>
    </header>
  );
}
