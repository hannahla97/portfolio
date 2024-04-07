import { useState } from 'react'
import { css } from "@style/css";
import { Header } from './components/Header';
import { Decorator } from './components/Decorator';
import { Skills } from './pages/Skills';
import { Experience } from './pages/Experience';
import { Home } from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={css({
      textStyle: "body",
      width: "full",
      pos: "relative",
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      gap: "32px",
      lg: {
        gap: "48px"
      }
    })}>
      <Header />
      <Home />
      <Skills />
      <Experience />
    </div>
  )
}

export default App
