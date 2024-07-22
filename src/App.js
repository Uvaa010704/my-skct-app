import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'


import SignInSide from './Signinslide/SignInSlide'

import Dashboard from './Dashboard/Dashboard'
import Life from './Life/Life'
import Hook from './Hook/Hook'
import Use from './Hook/Use'
import Ref from './Ref/Ref'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Ref/>}></Route>
       
      </Routes>
      </BrowserRouter>
     
    </div>
    
  )
}

export default App;