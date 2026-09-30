import Header from './assets/componentes/header.jsx'
import './App.css'
import Section1 from './assets/componentes/section1.jsx'
import Section2 from './assets/componentes/section2.jsx'
import Section3 from './assets/componentes/section3.jsx'
import Section4 from './assets/componentes/section4.jsx'
import Rodape from './assets/componentes/footer.jsx'

function App() {
  return (
    <main className="preenchimento">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Rodape />
  
    </main>
  )
}

export default App