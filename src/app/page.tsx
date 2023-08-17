import React from 'react';
import Navbar from '../lib/Navbar';
import { TestimonialCard } from '../lib/EcommerceCard'; 
import { FooterASU } from '../lib/footer'; 
import { ImageGrid } from '../lib/Grid'; 



const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-mono grid grid-cols-2 gap-4">
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-semibold text-center">
          a story of
        </h1>
        <p className="mt-8 text-center">
          Yudhi Fadilah.
        </p>
        <div className="mt-8">
          <br />
          <TestimonialCard />
          </div>
          <br></br>
          <div className="grid grid-cols-2 gap-4">
          <ImageGrid />
          </div>
          <br></br>
          <FooterASU />
          <br></br>
      </main>
    </div>
  );
};
export default Home;
