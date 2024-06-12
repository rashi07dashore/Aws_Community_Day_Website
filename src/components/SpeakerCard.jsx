import React from 'react'
import { FaLinkedin } from 'react-icons/fa';

function SpeakerCard(props) {

  return (
 
    <div className='flex flex-row'>
    <div class="rounded-xl overflow-hidden relative text-center p-7 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
    <div class="text-gray-500 group-hover:scale-105 transition-all">
      <img class="w-[95px] h-[95px] rounded" src= {props.image}/> 
    </div>
    <div class="group-hover:pb-10 transition-all duration-500 delay-200">
      <h1 class="font-semibold text-gray-700">{props.heading}</h1>
      <p class="text-gray-500 text-sm">{props.about}</p>
    </div>
    <div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full cursor-pointer">
      <div class="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded shadow-sm">
        <a class="hover:scale-110 transition-all duration-500 delay-200" href={props.linkedin} target="_blank">
          <FaLinkedin/>
        </a>
      </div>
    </div>
  </div>
   </div> 
  )
}

export default SpeakerCard







