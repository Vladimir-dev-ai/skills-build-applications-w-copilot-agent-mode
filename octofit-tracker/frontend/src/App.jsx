import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>OctoFit Tracker</h1>
        <p>Track your fitness goals with OctoFit</p>
      </header>
      <main>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </main>
    </div>
  )
}

export default App
