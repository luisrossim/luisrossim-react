import { Conhecimentos } from "./components/conhecimentos";
import { Experiencia } from "./components/experiencia";
import { HeaderInfo } from "./components/header";
import { Profile } from "./components/profile";
import { Projetos } from "./components/projetos";

function App() {
  return (
    <>
      <HeaderInfo />
      <main className="container mx-auto px-2 md:px-6 mt-16">
        <Profile />
        <Experiencia />
        <Projetos/>
      </main>
    </>
  )
}

export default App;