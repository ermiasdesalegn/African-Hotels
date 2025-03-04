import React from "react";
import Image from "next/image";

const Destinations: React.FC = () => {
  return (
    <div className="container mx-auto mt-12">
      <h2 className="font-bold text-2xl mb-2">Trending destinations</h2>
      <p>Most popular choices for travelers from anywhere to Africa</p>
      <div className="flex flex-col gap-4 relative mt-3">
        <div className="grid grid-cols-2 gap-4">
          {/* Ethiopia */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute text-white text-xl font-bold m-5 mt-2 z-10">
              <p>Ethiopia</p>
            </div>
            <Image
              src="/assets/ethiopia.jpg"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Ethiopia"
              width={500}
              height={300}
            />
          </div>

          {/* Egypt */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute text-white text-xl font-bold m-5 mt-2 z-10">
              <p>Egypt</p>
            </div>
            <Image
              src="/assets/egypt.jpg"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Egypt"
              width={500}
              height={300}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Morocco */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute text-white text-xl font-bold m-5 mt-2 z-10">
              <p>Morocco</p>
            </div>
            <Image
              src="/assets/morocco.jpg"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Morocco"
              width={500}
              height={300}
            />
          </div>

          {/* Nigeria */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute text-white text-xl font-bold m-5 mt-2 z-10">
              <p>Nigeria</p>
            </div>
            <Image
              src="/assets/nigeria.jpg"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Nigeria"
              width={500}
              height={300}
            />
          </div>

          {/* Algeria */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="absolute text-white text-xl font-bold m-5 mt-2 z-10">
              <p>Algeria</p>
            </div>
            <Image
              src="/assets/algeria.jpg"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Algeria"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
