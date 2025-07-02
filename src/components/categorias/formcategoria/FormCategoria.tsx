import { useState, useEffect, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import type Categoria from "../../../models/Categoria";
import { listar, atualizar, cadastrar } from "../../../service/Service";

function FormCategoria() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const { id } = useParams<{ id: string }>();

  async function buscarCategoriaPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      alert("Categoria não encontrada!");
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert("Categoria atualizada com sucesso");
      } catch (error: any) {
        alert("Erro ao atualizar a Categoria");
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("Categoria cadastrada com sucesso");
      } catch (error: any) {
        alert("Erro ao cadastrar a Categoria");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="flex justify-center font-roboto text-slate-800">
      <div className="container my-10 flex flex-col items-center">
        <h1 className="py-4 text-4xl font-bold text-center">
          {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
        </h1>
        <form 
          className="flex w-full max-w-lg flex-col gap-6 rounded-lg border border-slate-200 bg-white p-8 shadow-md" 
          onSubmit={gerarNovaCategoria}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="font-semibold">
              Nome da Categoria
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Ex: Vitaminas"
              className="rounded-md border border-slate-300 bg-slate-50 p-3 focus:border-[#00969d] focus:outline-none focus:ring-1 focus:ring-[#00969d]"
              value={categoria.nome}
              onChange={atualizarEstado}
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-end gap-4 sm:flex-row">
            <button
              className="w-full rounded-full border border-slate-300 px-8 py-2.5 font-bold text-slate-700 transition-colors hover:bg-slate-100 sm:w-auto"
              type="button"
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#00b4b4] to-[#00838a] px-8 py-2.5 font-bold text-white transition-transform hover:scale-105 disabled:opacity-75 sm:w-auto"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>{id === undefined ? "Cadastrar" : "Salvar Alterações"}</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCategoria;
