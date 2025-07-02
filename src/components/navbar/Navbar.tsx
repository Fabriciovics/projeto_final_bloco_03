import { MagnifyingGlass, ShoppingCartSimple, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        
        <header className="w-full bg-white text-slate-800 shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                
                <div className="flex-shrink-0">
                    <Link to={'/home'}>
                        <img 
                            className="w-32"
                            src="https://ik.imagekit.io/v5ijt4s2j/projetos/logofarma.gif?updatedAt=1751466396348" 
                            alt="Logo Farma"
                        />
                    </Link>
                </div>

                <div className="flex flex-grow items-center justify-center gap-8">
                    <form className="relative w-full max-w-lg">
                        <input 
                            type="text" 
                            id="search" 
                            className="w-full rounded-full border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-sm text-gray-900 focus:border-[#00969d] focus:outline-none focus:ring-1 focus:ring-[#00969d]" 
                            placeholder="O que você procura?" 
                            required 
                        />
                        <button 
                            type="submit" 
                            className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-[#00969d]"
                        >
                            <MagnifyingGlass size={20} />
                        </button>
                    </form>

                    <nav className="hidden items-center gap-6 md:flex">
                        <Link to='/produtos' className="group relative font-medium text-gray-600 transition-colors hover:text-[#00969d]">
                            Produtos
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00969d] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to='/categorias' className="group relative font-medium text-gray-600 transition-colors hover:text-[#00969d]">
                            Categorias
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00969d] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to='/cadastrarcategoria' className="group relative font-medium text-gray-600 transition-colors hover:text-[#00969d]">
                            Cadastrar Categoria
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#00969d] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/perfil" className="text-gray-600 transition-colors hover:text-[#00969d]">
                        <User size={28} />
                    </Link>
                    <Link to="/carrinho" className="text-gray-600 transition-colors hover:text-[#00969d]">
                        <ShoppingCartSimple size={28} />
                    </Link>
                </div>
            </div>
        </header>
     );
}

export default Navbar;
