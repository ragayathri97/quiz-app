import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React from 'react'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'

 function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/result' element={<Result />} />
        <Route path='/result/:userId' element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
 }
export default App;