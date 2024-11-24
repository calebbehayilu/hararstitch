import React from "react";

const Photo_Display = () => {
  return (
    <div className="grid grid-cols-3 justify-center items-center md:grid-cols-4 gap-2">
      <div className="grid gap-2">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/img_1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/img_6.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-2">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/img_7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/img_4.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-2">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/img_5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/img_8.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Photo_Display;
