import { MapPinHouse, UserRound, Mail, Linkedin, ExternalLink, BrainCog, Github, Link } from "lucide-react";
import { Conhecimentos } from "./conhecimentos";

export function Profile(){
    return (
        <div id="profile" className="mb-10">
            <div className="flex items-center gap-4 mb-6 px-2">
                <img className="w-[60px] md:w-[90px] rounded-full" src="./perfil.jpg" alt="" />
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-4xl font-semibold">Luis Gustavo Leal Rossim</h1>
                    <span className="text-slate-500">Web Developer</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-8 p-6 w-full md:w-[50%] lg:w-[60%] border rounded-lg">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Contato</h2>
                        <div className="flex flex-col gap-1">
                            <p className="flex items-center gap-2">
                                <Linkedin size={'15px'} />
                                <a href="https://www.linkedin.com/in/luisrossim/" 
                                    target="_blank" 
                                    className="flex text-sky-600 items-center hover:underline gap-1"
                                >
                                    LinkedIn<ExternalLink size={'12px'} />
                                </a>
                            </p>
                            <p className="flex items-center gap-2"><Mail size={'15px'} />luisrossim23@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Sobre mim</h2>
                        <div className="flex flex-col gap-1">
                            <p className="flex items-center gap-2"><UserRound size={'15px'} />22 anos</p>
                            <p className="flex items-center gap-2"><MapPinHouse size={'15px'} />Nova Venécia, ES, Brasil</p>
                            <p className="flex items-center gap-2"><BrainCog size={'15px'} />Programação, Inovação, Design, Simplicidade</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Formação Acadêmica <small className="text-slate-400">(1)</small></h2>
                        <button className="text-start bg-slate-50 transition-all duration-100 ease-out hover:bg-slate-100 border rounded-lg px-4 py-2">
                            <div className="flex flex-col">
                                <p className="flex items-center gap-2 font-semibold">
                                    <img width={'15px'} src="./ifes.png" alt="ifes-logo" />
                                    IFES - Instituto Federal do Espírito Santo
                                </p>
                                <p>Bacharelado em Sistemas de Informação</p>
                                <p className="font-light">2021 - 2024</p>
                            </div>
                        </button>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Experiência <small className="text-slate-400">(1)</small></h2>
                        <button className="text-start bg-slate-50 transition-all duration-100 ease-out hover:bg-slate-100 border rounded-lg px-4 py-2">
                            <div className="flex flex-col">
                                <p className="flex items-center gap-2 font-semibold">
                                    <img width={'15px'} src="./leds.png" alt="ifes-logo" />
                                    LEDS
                                </p>
                                <p>Front-End Developer</p>
                                <p className="font-light">2023 - 2024</p>
                            </div>
                        </button>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Perfis <small className="text-slate-400">(3)</small></h2>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 bg-slate-50 transition-all duration-100 ease-out hover:bg-slate-100 border rounded-lg px-4 py-2">
                                <Linkedin size={'14px'} /> LinkedIn
                            </button>
                            <button className="flex items-center gap-2 bg-slate-50 transition-all duration-100 ease-out hover:bg-slate-100 border rounded-lg px-4 py-2">
                                <Github size={'14px'} /> GitHub
                            </button>
                            <button className="flex items-center gap-2 bg-slate-50 transition-all duration-100 ease-out hover:bg-slate-100 border rounded-lg px-4 py-2">
                                <Link size={'14px'} /> Behance
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 p-6 w-full md:w-[50%] lg:w-[40%] border rounded-lg text-slate-800">
                    <Conhecimentos />
                </div>
            </div>
        </div>
    )
}