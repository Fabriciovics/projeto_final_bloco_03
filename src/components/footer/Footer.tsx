import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-slate-200 bg-slate-100 text-slate-600">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 p-6 sm:flex-row">
                
                <div className="text-center sm:text-left">
                    <p className="text-sm font-semibold text-slate-800">
                        VicsFarma | Sua Saúde em Primeiro Lugar
                    </p>
                    <p className="text-xs">
                        &copy; Fabriciovics {currentYear} | Todos os direitos reservados.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a 
                        href="https://www.linkedin.com/in/fabriciovics/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group"
                        aria-label="LinkedIn"
                    >
                        <LinkedinLogo 
                            size={28} 
                            className="text-slate-500 transition-colors duration-300 group-hover:text-[#00969d]" 
                        />
                    </a>
                    <a 
                        href="https://github.com/Fabriciovics" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group"
                        aria-label="GitHub"
                    >
                        <GithubLogo 
                            size={28} 
                            className="text-slate-500 transition-colors duration-300 group-hover:text-[#00969d]" 
                        />
                    </a>
                </div>
            </div>
        </footer>
     );
}

export default Footer;
