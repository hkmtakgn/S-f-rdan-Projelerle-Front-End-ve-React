

function App() {

  return (
    <>
      <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button">Main button</button>
          <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
        </form>
      </nav>
      <h1>React - Bootstrap</h1>
      <button className="btn btn-dark">Button Dark</button>
      <br />
      <button className="btn btn-info">Button Info</button>
      <br />
      <button className="btn btn-primary">Button Primary</button>
      <br />
      <button className="btn btn-danger">Button Danger</button>
      <br />
      <button className="btn btn-warning">Button Warning</button>
      <br />
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://picsum.photos/seed/picsum/100/100" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div>
        <br />
        <div className="d-flex justify-content-start">1</div>
        <div className="d-flex justify-content-end">2</div>
        <div className="d-flex justify-content-center">3</div>
        <div className="d-flex justify-content-between">4</div>
        <div className="d-flex justify-content-around">5</div>
        <div className="d-flex justify-content-evenly">6</div>
        <br />
        <p><a className="link-offset-2 link-underline link-underline-opacity-0" href="#">Underline opacity 0</a></p>
        <p><a className="link-offset-2 link-underline link-underline-opacity-10" href="#">Underline opacity 10</a></p>
        <p><a className="link-offset-2 link-underline link-underline-opacity-25" href="#">Underline opacity 25</a></p>
        <p><a className="link-offset-2 link-underline link-underline-opacity-50" href="#">Underline opacity 50</a></p>
        <p><a className="link-offset-2 link-underline link-underline-opacity-75" href="#">Underline opacity 75</a></p>
        <p><a className="link-offset-2 link-underline link-underline-opacity-100" href="#">Underline opacity 100</a></p>
        <br />
      </div>


    </>
  )
}

export default App
