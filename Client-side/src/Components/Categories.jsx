import React from 'react';
export default function Categories() {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row gap-4">
        {/* Left Section: Living Room */}
        <div className=" livingRoom w-full md:w-1/2 flex flex-row items-center bg-blue-gray-50 p-6">
          <div className="text-start flex-1">
            <h2 className="text-2xl font-bold">Living Room</h2>
            <button className="text-blue-500 font-medium hover:underline mt-2">
              Shop Now →
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src="couch-gray.png"
              alt="Living Room"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Section: Bedroom and Kitchen */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* Bedroom */}
          <div className="w-full flex bg-blue-gray-50 p-6">
            <div className="flex-1 flex justify-center items-center">
              <img
                src="plakar.png"
                alt="Bedroom"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-start flex-1">
              <h2 className="text-2xl font-bold">Bedroom</h2>
              <button className="text-blue-500 font-medium hover:underline mt-2">
                Shop Now →
              </button>
            </div>
          </div>

          {/* Kitchen */}
          <div className="w-full flex bg-blue-gray-50 p-6">
            <div className="flex-1 flex justify-center items-center">
              <img
                src="toast.png"
                alt="Kitchen"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-start flex-1">
              <h2 className="text-2xl font-bold">Kitchen</h2>
              <button className="text-blue-500 font-medium hover:underline mt-2">
                Shop Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
