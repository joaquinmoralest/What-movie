import './App.css'

function App() {
  return (
    <div className='App'>
      <section className="full-view home">
        <div className='row'>
          <div className="col-6">
            <h1>What movie?</h1>
            <div className="subtitle-container">
              <p className='subtitle'>No te quedes pegado buscando en cada plataforma qué puedes ver.</p>
              <p className='subtitle'>Revisa el catalogo completo aqui!</p>
              <div className='d-flex justify-content-center'>
                <button className='btn-custom-primary'>Ver catálogo</button>
              </div> 
            </div>
          </div>       
        </div>
      </section>

      <main className='full-view main-content'>
        <section className="platforms">
          <div className="d-flex justify-content-center">
            <div className="card-platform"></div>
            <div className="card-platform"></div>
            <div className="card-platform"></div>
            <div className="card-platform"></div>
            <div className="card-platform"></div>
          </div>
        </section>

        <section className='more-views mt-5'>
          <h2 className='text-center mb-3'>🔥Mas vistas🔥</h2>
          <div className='d-flex justify-content-center'>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
          </div>
        </section>

        <section className='top-rated mt-5'>
          <h2 className='text-center mb-3'>🔥Mejor valoradas🔥</h2>
          <div className='d-flex justify-content-center'>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
            <div className="card-movie"></div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
