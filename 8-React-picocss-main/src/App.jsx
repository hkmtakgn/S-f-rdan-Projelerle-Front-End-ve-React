

function App() {


  return (
    <>
      <div className="container">
        <h1>React - Picocss</h1>
        <nav>
          <ul>
            <li><strong>Acme Corp</strong></li>
          </ul>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><button className="secondary">Products</button></li>
          </ul>
        </nav>
        <br />
        <button>Button</button>
        <br />
        <button className="secondary">Secondary</button>
        <br />
        <button className="contrast">Contrast</button>
        <br />
        <button className="outline">Primary</button>
        <br />
        <button className="outline secondary">Secondary</button>
        <br />
        <button className="outline contrast">Contrast</button>
        <br />
        <a href="#">Primary</a>
        <br />
        <a href="#" className="secondary">Secondary</a>
        <br />
        <a href="#" className="contrast">Contrast</a>
        <br />
        <span aria-busy="true">Generating your link...</span>
        <br />
        <button aria-busy="true" aria-label="Please wait…" />
        <button aria-busy="true" aria-label="Please wait…" className="secondary" />
        <button aria-busy="true" aria-label="Please wait…" className="contrast" />
        <button aria-busy="false" className="outline">Please wait…</button>
        <button aria-busy="true" className="outline secondary">Please wait…</button>
        <button aria-busy="false" className="outline contrast">Please wait…</button>
        <br />



      </div>
    </>
  )
}

export default App

