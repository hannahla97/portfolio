import { css } from "@style/css";
import { Header } from './components/Header';
import { Skills } from './pages/Skills';
import { Experience } from './pages/Experience';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { SVGLineHr } from './components/Line';

function App() {

  return (
    <div className={css({
      textStyle: "body",
      width: "full",
      pos: "relative",
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      gap: "40px",
      lg: {
        gap: "60px"
      }
    })}>
      <Header />
      <Home />
      <Skills />
      {/* <Projects /> */}
      <Experience />
      <div className={css({ my: "24px", w: "full", textAlign: "center" })}>
        <SVGLineHr className={css({ w: "full" })} />
        <p>2024 - lakimhanh97@gmail.com</p>
      </div>
    </div>
  )
}

export default App
