import React from 'react'


export function CardOne(props) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={props.image}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{props.heading}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {props.desc}
        </p>
        <button className="mt-2 inline-flex bg-gray-200 text-black  cursor-pointer items-center text-sm font-semibold text-white">
           Add to favorites 
        </button>
      </div>
    </div>
  )
}
