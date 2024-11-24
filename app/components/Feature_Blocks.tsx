import React from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbNeedleThread } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";

const Features = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Features</h2>
        </div>
        <div className="grid md:grid-cols-3 justify-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Feature 1 */}
          <div className="border-red-400 md:border-r-2 p-6 text-center">
            <div className="text-teal-500 mb-4">
              <TbNeedleThread className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">High Quality</h3>
            <p className="text-gray-600">
              We ensure the highest quality in every stitch, delivering
              exceptional craftsmanship.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 text-center">
            <div className="text-teal-500 mb-4">
              <MdOutlineDesignServices className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Designs</h3>
            <p className="text-gray-600">
              Create bespoke pieces that match your vision, tailored to
              perfection.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border-red-400 md:border-l-2 p-6 text-center">
            <div className="text-teal-500 mb-4">
              <TbTruckDelivery className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Enjoy quick turnaround times and reliable delivery for all your
              orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
