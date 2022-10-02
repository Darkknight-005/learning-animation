import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className=" App  w-screen h-screen ">
      <div className='flex'>
        <img src={reactLogo} className="w-16" id='spin' alt="react logo" />
        <h1 className='anm text-red-500 mx-2'>Animation</h1>
      </div>

      <div className="typewriter ">
        My name is Darkknight_005 & I am a front-end developer.
      </div>
    </div>
  )
}

export default App
