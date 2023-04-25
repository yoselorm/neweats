import React, { useState } from 'react';
import { categories, data } from '../data/Data.js';

const Food = () => {
    const [food, setFood] = useState(data)
    console.log(food)

    const filterByCategory = (category) => {
        setFood(data.filter((item => {
            return item.category === category
        })))
    }

    const filterByPrice = (price) => {
        setFood(
            data.filter((item) => {
                return item.price == price
            })
        )
    }

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center
            '>Top Rated Menu Items</h1>
            <div className='flex flex-col lg:flex-row justify-between '>
                <div>
                    <p className='font-bold text-gray-700'>Filter type</p>
                    <div className='flex  flex-wrap'>
                        <button onClick={() => { setFood(data) }} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>All</button>
                        <button onClick={() => filterByCategory('burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Burgers</button>
                        <button onClick={() => filterByCategory('pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Pizza</button>
                        <button onClick={() => filterByCategory('salad')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Salad</button>
                        <button onClick={() => filterByCategory('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Chicken</button>
                    </div>
                </div>
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={() => { filterByPrice(10) }} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>10</button>
                        <button onClick={() => { filterByPrice(20) }} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>20</button>
                        <button onClick={() => { filterByPrice(30) }} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>30</button>
                        <button onClick={() => { filterByPrice(40) }} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>40</button>
                    </div>

                </div>
            </div>


            {/**display foods */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {food.map((item, index) => {
                    return (
                        <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 '>
                            <img src={item.image} alt={item.name} className='w-full h-[200px] rounded-t-lg object-cover' />
                            <div className='flex justify-between px-2 py-4'>
                                <p className='font-bold'>{item.name}</p>
                                <p> <span className='bg-orange-500 text-white  rounded-full p-2'>{item.price}</span></p>

                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default Food;
