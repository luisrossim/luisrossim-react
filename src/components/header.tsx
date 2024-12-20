import { BriefcaseBusiness, RefreshCcw } from "lucide-react";

export function Header(){
    return (
        <header className="fixed top-0 left-0 w-full bg-white z-50 text-slate-500 border-b mb-16">
            <div className="container mx-auto px-4 md:px-6 py-2">
                <div className="flex justify-between gap-2">
                    <small className="flex items-center gap-2"><BriefcaseBusiness size={'12px'} /> Portfolio - Luis Gustavo Leal Rossim</small>
                    <small className="flex items-center gap-2"><RefreshCcw size={'11px'} /> 16/12/2024</small>
                </div>
            </div>
        </header>
    )
}