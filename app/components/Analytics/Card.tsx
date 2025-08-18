import React from "react";

const Card = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center h-[30vh] md:h-[50vh]">
      <h2 className="text-xl font-semibold mb-6">{label}</h2>
      <h1 className="text-3xl font-semibold mb-2">1{value}</h1>
    </div>
  );
};

export default Card;
