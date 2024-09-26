import Container from "./container/Container"
import Counter from "./counter/Counter"
import { paragraphStyles } from "./stylesForParagraph/paragraphStyled"

function App() {

  const counterBtnStyles = [
    "btn",
    "btn-danger",
    "rounded-pill"
  ]


  return (
    <>
      <Container>
      <h1>App</h1>
      <Counter paragraphStyles={paragraphStyles} counterBtnStyles={counterBtnStyles} />
      </Container>
    </>
  )
}

export default App
