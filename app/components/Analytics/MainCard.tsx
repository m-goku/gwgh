import React from "react";

type LabelValueProps = {
  label: string;
  value: string | number;
  color?: string;
};

function LabelValue({ label, value, color }: LabelValueProps) {
  return (
    <div className="flex justify-between mb-5 w-full">
      <span className="text-gray-900 text-sm font-medium">{label}</span>
      <span className={`${color} text-lg font-semibold`}>{value}</span>
    </div>
  );
}

const MainCard = ({ value, title }: { value: any; title?: string }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex-col justify-between   ">
      <h1 className="mb-5 font-bold text-green-900">{title}</h1>
      <LabelValue
        label={"Total Pre-Finance (GH₵)"}
        value={`${value?.totalPrefinance.toLocaleString()}.00`}
        color="text-orange-500"
      />
      <LabelValue
        label={"Total Nuts (Kg)"}
        value={value?.totalKgBrought}
        color="text-green-900"
      />
      <LabelValue
        label={"Total Value (GH₵)"}
        value={value?.totalAmount.toLocaleString()}
        color="text-green-500"
      />
      <LabelValue
        label={"Total Farmers"}
        value={value?.totalFarmers}
        color="text-green-900"
      />
      <LabelValue
        label={"Recovery Rate"}
        value={`${Number(value?.recoveryRate).toFixed(2)}%`}
        color="text-green-900"
      />
    </div>
  );
};

export default MainCard;
