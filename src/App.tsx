import React from 'react';

import logo from './imgs/lavygin.jpg';
import './App.css';

function App() {
  return (
      
      <div className="relative p-0 h-screen flex flex-col">
          <nav className=" container transition-all duration-3000 relative bg-sitered mx-auto p-3 rounded-lg min-w-[265px] h-150  ">
            <div className="flex items-center justify-between">
              {/* logo */}
              <div className="logo pt-2 rounded-lg mx-5">
                <img src={logo} alt="" className="max-h-20  rounded-lg" />
              </div>
              {/* menuItems */}

              <div className="hidden w-300 lg:flex space-x-6 text-white| mr-5 ">
                <a href="#" className="text-gray-light hover:text-white">Домашняя</a>
                <a href="#" className="text-gray-light hover:text-white">Воторое</a>
                <a href="#" className="text-gray-light hover:text-white">Супы</a>
                <a href="#" className="text-gray-light hover:text-white">Салаты</a>
                <a href="#" className="text-gray-light hover:text-white">Выпечка</a>
                <a href="#" className="text-gray-light hover:text-white">Десерты</a>
                <a href="#" className="text-gray-light hover:text-white">Мороженное</a>
                <a href="#" className="text-gray-light hover:text-white">Напитки</a> 
              </div>
              <a href="#" className="hidden w-300 lg:block p-3 px-6 text-sitered bg-gray-light rounded-full baseline hover:bg-white whitespace-nowrap">Выбрать блюдо</a>
            </div>
         
          </nav>

          <section className="min-w-[331px] pb-5 top-10 flex-1 overflow-auto">

            <div className="container flex flex-col flex-wrap mx-auto mt-5 md:flex-row ">

              {/* топ пять */}
                <div className="flex flex-col border-2 border-solid border-gray-light m-5 rounded-lg p-7 space-y-3 flex-auto " >
                      <div className="flex mb-3 items-center space-x-2 flex-row rounded-full bg-red2">
                            <div className="flex justify-center items-center w-9 h-9  text-white rounded-full md:py-1 bg-red1">5</div>
                            <h1 className="text-white md:text-white">Топ салатов</h1>
                      </div>
                  <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6  ">
                    <div className="rounded-full  md:bg-transparent md:text-gray ">
                      <div className="flex mb-3 items-center space-x-2 flex-row bg-red1 md:transparent rounded-full cursor-pointer">
                            <div className="flex justify-center items-center w-9 h-9  text-white rounded-full md:py-1 bg-red1">1</div>
                            <h1 className="text-gray-dark md:text-gray-dark">Салат оливье</h1>
                      </div>
                      <div className="flex mb-3 items-center space-x-2 flex-row bg-red1 md:transparent rounded-full cursor-pointer">
                            <div className="flex justify-center items-center w-9 h-9  text-white rounded-full md:py-1 bg-red1">2</div>
                            <h1 className="text-gray-dark md:text-gray-dark">Сельдь под шубой</h1>
                      </div>
                      <div className="flex mb-3 items-center space-x-2 flex-row bg-red1 md:transparent rounded-full cursor-pointer">
                            <div className="flex justify-center items-center w-9 h-9  text-white rounded-full md:py-1 bg-red1">3</div>
                            <h1 className="text-gray-dark md:text-gray-dark">Салат цезарь</h1>
                      </div>
                      <div className="flex mb-3 items-center space-x-2 flex-row bg-red1 md:transparent rounded-full cursor-pointer">
                            <div className="flex justify-center items-center w-9 h-9  text-white rounded-full md:py-1 bg-red1">4</div>
                            <h1 className="text-gray-dark md:text-gray-dark">Салат Московский</h1>
                      </div>
                      <div className="flex mb-3 items-center space-x-2 flex-row bg-red1 md:transparent rounded-full cursor-pointer">
                            <div className="flex justify-center items-center w-9 h-9  text-white rounded-full md:py-1 bg-red1">5</div>
                            <h1 className="text-gray-dark md:text-gray-dark">Салат крабовый</h1>
                      </div>
             
                      
                    </div>
                  </div>
                </div>

                <div className="flex flex-col border-2 border-solid border-gray-light m-5 rounded-lg p-7 space-y-3 flex-auto" >
                    <h1 className="max-w-md text-2xl font-bold text-center md:text-3xl md:text-left">
                    Салат Оливье
                    </h1>
                    <p className="max-w-md mt-3 text-center text-grey md:text-left">
                    Салат Оливье - это классическое блюдо, которое обычно готовят на праздники в России и других странах бывшего СССР. Вот простой рецепт для приготовления этого салата:
                    </p>
                </div>
                <div className="flex flex-col border-2 border-solid border-gray-light mx-5 my-5 rounded-lg p-7 flex-auto" >
                    <h1 className="max-w-sm text-2xl font-bold text-center md:text-3xl md:text-left">
                    Салат Оливье
                    </h1>
                    <p className="max-w-sm mt-3 text-center text-grey md:text-left">
                    Салат Оливье - это классическое блюдо, которое обычно готовят на праздники в России и других странах бывшего СССР. Вот простой рецепт для приготовления этого салата:
                    </p>
                </div>
                <div className="flex flex-col border-2 border-solid border-gray-light mx-5 my-5 rounded-lg p-7 flex-auto" >
                    <h1 className="max-w-sm text-2xl font-bold text-center md:text-3xl md:text-left">
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
