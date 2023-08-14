"use client";
import React from 'react';
import { useState } from 'react';
import { ProductData } from './ProductData';

export default function ProductList() {
  const [query, setQuery] = useState("");

  const search = ProductData.filter(item => item.product.toLowerCase().includes(query));
  
  return (
    <>
      <div className= 'flex flex-col items-center container mx-auto py-5'>

        <h1 className='text-lg'>Products</h1>
        <input
          className="border border-slate-300 bg-transparent text-black-300 px-2 py-1 rounded hover:bg-transparent-700 focus-within:bg-transparent-700 outline -none"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />

        {ProductData.filter(product => product.product.toLowerCase().includes(query)
        ).map((product) => (
          <div
            key={product.id}
            className='flex flex-col items-center py-3'
          >
            <h1 className='font-bold blue-bg text-center'>{product.product}</h1>
            <img
              src={product.img}
              alt={product.product}
              width='100%'
            />
          </div>
        ))}
      </div>
    </>
  )
}
