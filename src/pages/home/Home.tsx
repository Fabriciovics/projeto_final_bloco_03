import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="bg-slate-50 font-roboto">
            <div className="container mx-auto grid min-h-[80vh] grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2">
                <div className="flex flex-col gap-6 text-center md:text-left">
                    <h2 className="text-5xl font-bold text-slate-800 md:text-6xl">
                        Cuidado e bem-estar,
                        <span className="bg-gradient-to-r from-[#00b4b4] to-[#00838a] bg-clip-text text-transparent"> sempre à mão.</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Encontre tudo o que você precisa para sua saúde e de sua família. Qualidade e confiança em um só lugar.
                    </p>
                    
                    <div className="flex justify-center md:justify-start">
                        <Link 
                            to={'/produtos'} 
                            className="transform rounded-full bg-gradient-to-r from-[#00b4b4] to-[#00838a] px-8 py-3 font-bold text-white transition-transform hover:scale-105"
                        >
                            Ver Produtos
                        </Link>
                    </div>
                </div>
 
               <div className="flex justify-center">
                    <img
                        src="https://ik.imagekit.io/v5ijt4s2j/projetos/farmahomess.png?updatedAt=1751467374009"
                        alt="Ilustração de Farmácia e Saúde"
                        className="w-full max-w-xl drop-shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
