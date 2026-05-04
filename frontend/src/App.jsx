import React from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)} style={{}}>Count: {count}</button>
    </div>
  )
}

export default App