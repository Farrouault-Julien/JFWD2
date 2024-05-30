import Header from './components/Header'
import Home from './components/Home'
import './App.css'


function App() {
  

  return (
    <div className="App">
      <div className="home_wrapper h-lvh flex flex-col justify-between ">
        <section className='px-10 '>
        <Header />
        <Home />
      </section>

      </div>
    </div>
  )
}

export default App
