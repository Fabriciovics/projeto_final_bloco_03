import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { Pencil, Trash } from "@phosphor-icons/react";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (

    <div className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
      
      <p className="flex-grow text-base font-semibold text-slate-700">
        {categoria.nome}
      </p>

      <div className="flex items-center gap-4">
        <Link 
          to={`/editarcategoria/${categoria.id}`} 
          className="text-slate-500 transition-colors duration-200 hover:text-[#00969d]"
          aria-label={`Editar categoria ${categoria.nome}`}
        >
          <Pencil size={20} />
        </Link>

        <Link 
          to={`/deletarcategoria/${categoria.id}`} 
          className="text-slate-500 transition-colors duration-200 hover:text-red-600"
          aria-label={`Deletar categoria ${categoria.nome}`}
        >
          <Trash size={20} />
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
