import React from 'react';

export function CardOne(props) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md custom-class group">
      <img
        src={props.image}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left transition-all duration-300 group-hover:bottom-10">
        <p className="mt-2 text-sm text-gray-300 opacity-0 transition-opacity duration-300 transform group-hover:translate-y-[-10px] group-hover:opacity-100">
          {props.desc}
        </p>
        <h1 className="text-lg font-semibold text-white transition-transform duration-300 transform group-hover:translate-y-[-10px]">
          {props.heading}
        </h1>
      </div>
    </div>
  );
}
