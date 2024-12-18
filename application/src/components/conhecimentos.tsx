import { Progress } from "@/components/ui/progress"

export function Conhecimentos(){
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">Linguagens <small className="text-slate-400">(7)</small></h2>
            <div id="conhecimentos" className="flex flex-col gap-2 mb-8">
                <div className="flex items-center gap-2">
                    <img src="./html.svg" alt="" />
                    <span className="w-[130px]">HTML</span>
                    <Progress value={100} />
                </div>
                <div className="flex items-center gap-2">
                    <img src="./css.svg" alt="" />
                    <span className="w-[130px]">CSS</span>
                    <Progress value={100} />
                </div>
                <div className="flex items-center gap-2">
                    <img src="./js.png" alt="" />
                    <span className="w-[130px]">JavaScript</span>
                    <Progress value={80} />
                </div>
                <div className="flex items-center gap-2">
                    <img src="./ts.png" alt="" />
                    <span className="w-[130px]">TypeScript</span>
                    <Progress value={80} />
                </div>
                <div className="flex items-center gap-2">
                    <img src="./java.svg" alt="" />
                    <span className="w-[130px]">Java</span>
                    <Progress value={80} />
                </div>
                <div className="flex items-center gap-2">
                    <img src="./php.svg" alt="" />
                    <span className="w-[130px]">PHP</span>
                    <Progress value={60} />
                </div>
            </div>

            <h2 className="text-xl font-semibold mb-2">Ferramentas e Bibliotecas <small className="text-slate-400">(5)</small></h2>
            <div id="conhecimentos" className="flex flex-col gap-2 mb-8">
                <div className="flex items-center gap-2">
                    <img src="./angular.png" alt="" />
                    <span className="w-[130px]">Angular</span>
                    <Progress className="" value={90} />
                </div>
                <div className="flex items-center gap-2">
                    <img src="./spring.svg" alt="" />
                    <span className="w-[130px]">Spring</span>
                    <Progress value={90} />
                </div>
                <div className="flex items-center gap-2">
                    <img src="./react.svg" alt="" />
                    <span className="w-[130px]">React</span>
                    <Progress value={60} />
                </div>
                <div className="flex items-center gap-2">
                    <img src="./nextjs.svg" alt="" />
                    <span className="w-[130px]">NextJS</span>
                    <Progress value={50} />
                </div>
                <div className="flex items-center gap-2">
                    <img src="./ci.svg" alt="" />
                    <span className="w-[130px]">CodeIgniter</span>
                    <Progress value={50} />
                </div>
            </div>

            <h2 className="text-xl font-semibold mb-2">Banco de dados <small className="text-slate-400">(2)</small></h2>
            <div id="conhecimentos" className="flex flex-col gap-2 mb-8">
                <div className="flex items-center gap-2">
                    <img src="./mysql.png" alt="" />
                    <span className="w-[130px]">MySQL</span>
                    <Progress className="" value={90} />
                </div>
                <div className="flex items-center gap-2">
                    <img src="./postgre.png" alt="" />
                    <span className="w-[130px]">PostgreSQL</span>
                    <Progress value={70} />
                </div>
            </div>

            <h2 className="text-xl font-semibold mb-2">Outros <small className="text-slate-400">(8)</small></h2>
            <div id="conhecimentos" className="flex flex-col gap-2">
                <p>PrimeNG, Bootstrap, TailwindCSS, Vite, MaterializeCSS, JQuery, Hibernate, Postman</p>
            </div>
        </div>
    )
}