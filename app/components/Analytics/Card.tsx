import React from "react";

const Card = ({ label, value }: { label?: string; value?: string }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm  p-6 flex flex-col items-center h-[20vh] md:h-[30vh]">
      <h2 className="text-xl font-semibold mb-6 text-green-300">{label}</h2>
      <h1 className="text-3xl font-semibold mb-2 text-green-900">{value}</h1>
    </div>
  );
};

export default Card;
