import React from 'react';

import logo from './imgs/lavygin.jpg';
import './App.css';

function App() {
  return (
      
      <div>
          <nav className="relative container transition-all duration-3000  bg-sitered mx-auto mt-3 p-3 pt-2 rounded-lg">
            <div className="flex items-center justify-between">
              {/* logo */}
              <div className="logo pt-2 rounded-lg mx-5">
                <img src={logo} alt="" className="max-h-20  rounded-lg" />
              </div>
              {/* menuItems */}

              <div className="hidden w-300 lg:flex space-x-6 text-white| mr-5">
                <a href="#" className="text-gray-light hover:text-white">Домашняя</a>
                <a href="#" className="text-gray-light hover:text-white">Воторое</a>
                <a href="#" className="text-gray-light hover:text-white">Супы</a>
                <a href="#" className="text-gray-light hover:text-white">Салаты</a>
                <a href="#" className="text-gray-light hover:text-white">Выпечка</a>
                <a href="#" className="text-gray-light hover:text-white">Десерты</a>
                <a href="#" className="text-gray-light hover:text-white">Мороженное</a>
                <a href="#" className="text-gray-light hover:text-white">Напитки</a> 
              </div>
              <a href="#" className="hidden w-300 lg:block p-3 px-6 text-sitered bg-gray-light rounded-full baseline hover:bg-white">Начать</a>
            </div>
         
          </nav>

          <section>

            <div className="container flex flex-col px-4 mx-auto mt-5  space-y-12 md:space-y-0 md:flex-row">

              {/* топ пять */}
                <div className="flex flex-col border-2 border-solid border-gray-light mx-5 rounded-lg p-7 space-y-5 md:w-1/2" >
                      <div className="flex mb-3 items-center space-x-2 flex-row rounded-full bg-red1">
                            <div className="flex justify-center items-center w-9 h-9  text-white rounded-full md:py-1 bg-red1">5</div>
                            <h1 className="text-white md:text-gray-dark">Топ салатов</h1>
                      </div>
                  <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6  ">
                    <div className="rounded-full  md:bg-transparent md:text-gray">
                      <div className="flex mb-3 items-center space-x-2 flex-row bg-red1 md:transparent rounded-full">
                            <div className="flex justify-center items-center w-9 h-9  text-white rounded-full md:py-1 bg-red1">1</div>
                            <h1 className="text-white md:text-gray-dark">Салат оливье</h1>
                      </div>
                      <div className="flex mb-3 items-center space-x-2 flex-row bg-red1 md:transparent rounded-full">
                            <div className="flex justify-center items-center w-9 h-9  text-white rounded-full md:py-1 bg-red1">2</div>
                            <h1 className="text-white md:text-gray-dark">Сельдь под шубой</h1>
                      </div>
                      <div className="flex mb-3 items-center space-x-2 flex-row bg-red1 md:transparent rounded-full">
                            <div className="flex justify-center items-center w-9 h-9  text-white rounded-full md:py-1 bg-red1">3</div>
                            <h1 className="text-white md:text-gray-dark">Салат цезарь</h1>
                      </div>
                      <div className="flex mb-3 items-center space-x-2 flex-row bg-red1 md:transparent rounded-full">
                            <div className="flex justify-center items-center w-9 h-9  text-white rounded-full md:py-1 bg-red1">4</div>
                            <h1 className="text-white md:text-gray-dark">Салат Московский</h1>
                      </div>
                      <div className="flex mb-3 items-center space-x-2 flex-row bg-red1 md:transparent rounded-full">
                            <div className="flex justify-center items-center w-9 h-9  text-white rounded-full md:py-1 bg-red1">5</div>
                            <h1 className="text-white md:text-gray-dark">Салат крабовый</h1>
                      </div>
             
                      
                    </div>
                  </div>
                </div>

                <div className="flex flex-col border-2 border-solid border-gray-light mx-5 rounded-lg p-7 space-y-5 md:w-1/2" >
                    <h1 className="max-w-md text-2xl font-bold text-center md:text-3xl md:text-left">
                    Салат Оливье
                    </h1>
                    <p className="max-w-sm mt-3 text-center text-grey md:text-left">
                    Салат Оливье - это классическое блюдо, которое обычно готовят на праздники в России и других странах бывшего СССР. Вот простой рецепт для приготовления этого салата:
                    </p>
                </div>
            </div>
          </section>
      </div>


       
  );
}

function TailwingButton() {
  return(
    <button className='bg-blue text-white font-medium px-4 py-2 rounded-lg m-3 hover:bg-blue01 '>1</button>
  )
}

export default App;
