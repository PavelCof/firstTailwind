import React from 'react';


import './App.css';

import { NavMenus } from './NavMenus/NavMenus';
import { HomePage } from './pages/HomePage';
import { FooterBlock } from './components/FooterBlock';

function App() {
  return (
      
      <div className="relative p-0 h-screen flex flex-col">
          {NavMenus()}

          <section className="min-w-[331px]  top-10 flex-1 overflow-auto">

            { HomePage()}
   
            {FooterBlock() }
          </section> 

      </div>


       
  );
}


export default App;
