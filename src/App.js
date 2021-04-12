import { Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Home from './components/Home'
import Trailer from './components/Trailer'

const App =()=>{
  return (
    <div>
  

 
         <Route  exact path="/"  component={Home}     />
         <Route path="/Trailer/:id" component={Trailer}  />
      
      
       
       



 
    </div>
);
}
export default App;