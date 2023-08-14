"use client";
import React from 'react';
import { AiTwotonePhone } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    
<footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href=".." className="flex items-center">
                  <img
                    src="./photos/logo.png"
                    className="h-11 mr-3"
                    alt="Idea Builder Logo"
                  />
                  <div>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Idea Builder</span>
                    <br></br>
                    <span className='text-white'>Printing & Design</span>
                  </div>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Address</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-small">
                      <li className="mb-4 w-40">
                          3277 Lake Worth Rd. Suite B Palm Springs, FL 33461
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li><a href='tel:+5617211473' id='white'><AiTwotonePhone/> (561) 721-1473</a></li>
                    <li><a href='mailto:sales@ideaprinting.com' id='white'><IoMdMail/> sales@ideaprinting.com</a></li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://www.facebook.com/ideabprinting" className="hover:underline "><AiFillFacebook/> FaceBook</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://www.ibtshirts.com/" className="hover:underline "><img src='photos/ib tshirt logo.png' width='100px' alt='ibshirtslogo'/></a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Idea Builder</a>. All Rights Reserved.
          </span>
      </div>
    </div>
</footer>

  )
}
