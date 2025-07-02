import { Pencil, ShoppingCart, Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import type Produto from "../../../models/Produto";

interface CardProdutoProps {
    produto: Produto;
}

function CardProdutos({ produto }: CardProdutoProps) {
    return (

        <div className="group relative flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white font-roboto transition-shadow duration-300 hover:shadow-lg">
            <div className="absolute right-2 top-2 z-10 flex translate-x-12 transform gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <Link 
                    to={`/editarproduto/${produto.id}`} 
                    className="rounded-full bg-white p-2 text-slate-600 shadow-md transition-colors hover:text-blue-600"
                    aria-label="Editar produto"
                >
                    <Pencil size={20} />
                </Link>
                <Link 
                    to={`/deletarproduto/${produto.id}`} 
                    className="rounded-full bg-white p-2 text-slate-600 shadow-md transition-colors hover:text-red-600"
                    aria-label="Deletar produto"
                >
                    <Trash size={20} />
                </Link>
            </div>

            <div className="relative overflow-hidden">
                <img
                    src={produto.foto}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={`Foto do produto ${produto.nome}`}
                />
            </div>

            <div className="flex flex-1 flex-col p-4">
                <div className="flex-1">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {produto.categoria?.nome || 'Medicamentos'}
                    </p>
                    <h3 className="mb-2 text-base font-bold text-slate-800">
                        {produto.nome}
                    </h3>
                    <p className="text-xl font-extrabold text-slate-900">
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(produto.preco)}
                    </p>
                </div>

                <button
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00b4b4] to-[#00838a] px-4 py-2.5 font-bold text-white transition-transform duration-200 hover:scale-105"
                >
                    <ShoppingCart size={20} />
                    Comprar
                </button>
            </div>
        </div>
    );
}

export default CardProdutos;
