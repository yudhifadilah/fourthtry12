"use client"
import React from 'react'

 
export function TestimonialCard() {
  return (
<div className="flex items-center justify-center p-8 border border-black">
  <div className="w-1/2 h-full bg-gradient-to-b from-white to-black"></div>
  <div className="w-1/2 h-full bg-white p-4">
    <h2 className="text-2xl font-semibold mb-3">Description.</h2>
    <p className="text-black-500">
      Majoring in informatics engineer. Intrested in web programming, data and love to learn new things. &#x2764;
    </p>
  </div>
</div>
  );
};