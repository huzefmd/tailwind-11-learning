import React from 'react'
import Content from './components/Content'


function App() {
  return (
    <div
      
      className='h-screen w-screen flex justify-center items-center bg-neutral-950'
      style={{
        backgroundImage: `radial-gradient(circle at  0.5px 0.5px, rgba(6,182,212,0.2) 0.5px,transparent 0)`,
        backgroundSize: '8px 8px',
        backgroundRepeat:"repeat", 
    }}>
      <Content/>
    </div>
  )
}

export default App
