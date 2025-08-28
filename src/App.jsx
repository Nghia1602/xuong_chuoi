import { useState } from 'react'


import Header from './components/header/header'
import Sub_menu from './components/sub_menu/sub_menu'
import Content from './components/content/conten'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{border: "1px solid #398640", width:"1920px", height:"847px"}}>
      <Header/>
      <Sub_menu/>
      <Content/>
    </div>
  )
}

export default App
