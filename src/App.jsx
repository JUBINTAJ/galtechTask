import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './componts/Blog'
import Fullpage from './Pages/Fullpage'
import SingleBlog from './componts/SingleBlog'

function App() {
  return (
    <div className>
    
      <Routes>
        <Route path='/' element={<Fullpage/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/single/:id' element={<SingleBlog/>}/>
      </Routes>
    </div>
  )
}

export default App