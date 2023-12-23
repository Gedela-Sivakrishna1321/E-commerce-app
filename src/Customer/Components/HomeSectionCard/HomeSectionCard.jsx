import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className='flex flex-col w-[15rem] items-center rounded-lg overflow-hidden
     bg-white shadow-lg mx-3 border cursor-pointer '>
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-top object-cover w-full h-full' src={product.imageUrl} alt="" />
        </div>

        <div className='p-4'>
            <h1 className='text-lg font-medium text-gray-900'>{product.brand}</h1>
            <p className='text-sm mt-2 text-gray-500'>{product.title}</p>
        </div>
    </div>
  )
}

export default HomeSectionCard