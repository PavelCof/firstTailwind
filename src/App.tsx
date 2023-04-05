import React from 'react';

import logo from './imgs/lavygin.jpg';
import './App.css';

function App() {
  return (
      
      <div>
          <nav className="relative container transition-all duration-3000  bg-sitered mx-auto mt-3 p-3 pt-2 rounded-lg">
            <div className="flex items-center justify-between">
              {/* logo */}
              <div className="logo pt-2 rounded-lg mx-5 overflow-hidden">
                    <img src={logo} alt="" className="max-h-20  rounded-lg  " />
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
          <section>
              <div className="  px-5 mx-auto mt-32 text-center pb-10 container ">
                  <h2 className="text-4lx font-bold text-center  ">
                    Лучшие блюда недели
                  </h2>
                  <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg mb-10 bg-gray-light md:w-1/3">
                        <img src={logo} alt="" className="w-16 -mt-14 rounded-lg shadow-md" />
                        <h5 className="text-lg font-bold">Салат весенний</h5>
                        <p className="text-sm text-gray">
                         Подготовьте указанные ингредиенты. Промойте огурец в воде, срежьте с овоща хвостики. Горошек при желании можно опустить в кипяток на пару минут, чтобы он не потемнел. С капусты счистите верхние листья и отрежьте необходимую часть для салата. Нарежьте ее лентами: крупными или тонкими — по вашему вкусу. Немного промассируйте капустную нарезку, чтобы она выпустила сок — так она станет мягче и салат будет приятнее есть. Выложите нарезку в салатник или глубокую миску, тарелку. Добавьте туда же зеленый горошек. Вместо горошка можно добавить нарезку редиса или шпината. Огурец нарежьте брусочками или полукольцами. Высыпьте к остальным ингредиента в салатнике. Обязательно попробуйте овощ на вкус — он может горчить. Ранние или тепличные огурцы не слишком горчат, но иногда случаются исключения из этого правила. Промойте свежую пряную зелень, измельчите ее и добавьте в емкость вместе с солью и растительным маслом. Аккуратно перемешайте все содержимое салатника. В этот момент блюдо можно сбрызнуть яблочным уксусом. Выложите весенний салат на тарелку и подайте к столу сразу же после приготовления, пока он максимально свежий. 
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg mb-10 bg-gray-light md:w-1/3">
                        <img src={logo} alt="" className="w-16 -mt-14 rounded-lg shadow-md" />
                        <h5 className="text-lg font-bold">Салат весенний</h5>
                        <p className="text-sm text-gray">
                         Подготовьте указанные ингредиенты. Промойте огурец в воде, срежьте с овоща хвостики. Горошек при желании можно опустить в кипяток на пару минут, чтобы он не потемнел. С капусты счистите верхние листья и отрежьте необходимую часть для салата. Нарежьте ее лентами: крупными или тонкими — по вашему вкусу. Немного промассируйте капустную нарезку, чтобы она выпустила сок — так она станет мягче и салат будет приятнее есть. Выложите нарезку в салатник или глубокую миску, тарелку. Добавьте туда же зеленый горошек. Вместо горошка можно добавить нарезку редиса или шпината. Огурец нарежьте брусочками или полукольцами. Высыпьте к остальным ингредиента в салатнике. Обязательно попробуйте овощ на вкус — он может горчить. Ранние или тепличные огурцы не слишком горчат, но иногда случаются исключения из этого правила. Промойте свежую пряную зелень, измельчите ее и добавьте в емкость вместе с солью и растительным маслом. Аккуратно перемешайте все содержимое салатника. В этот момент блюдо можно сбрызнуть яблочным уксусом. Выложите весенний салат на тарелку и подайте к столу сразу же после приготовления, пока он максимально свежий. 
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 space-y-6 mb-10 rounded-lg bg-gray-light md:w-1/3 ">
                        <img src={logo} alt="" className="w-16 -mt-14 rounded-lg shadow-md" />
                        <h5 className="text-lg font-bold">Салат весенний</h5>
                        <p className="text-sm text-gray">
                         Подготовьте указанные ингредиенты. Промойте огурец в воде, срежьте с овоща хвостики. Горошек при желании можно опустить в кипяток на пару минут, чтобы он не потемнел. С капусты счистите верхние листья и отрежьте необходимую часть для салата. Нарежьте ее лентами: крупными или тонкими — по вашему вкусу. Немного промассируйте капустную нарезку, чтобы она выпустила сок — так она станет мягче и салат будет приятнее есть. Выложите нарезку в салатник или глубокую миску, тарелку. Добавьте туда же зеленый горошек. Вместо горошка можно добавить нарезку редиса или шпината. Огурец нарежьте брусочками или полукольцами. Высыпьте к остальным ингредиента в салатнике. Обязательно попробуйте овощ на вкус — он может горчить. Ранние или тепличные огурцы не слишком горчат, но иногда случаются исключения из этого правила. Промойте свежую пряную зелень, измельчите ее и добавьте в емкость вместе с солью и растительным маслом. Аккуратно перемешайте все содержимое салатника. В этот момент блюдо можно сбрызнуть яблочным уксусом. Выложите весенний салат на тарелку и подайте к столу сразу же после приготовления, пока он максимально свежий. 
                        </p>
                    </div>
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
