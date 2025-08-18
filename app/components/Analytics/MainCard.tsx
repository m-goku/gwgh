import React from "react";

type LabelValueProps = {
  label: string;
  value: string | number;
};

function LabelValue({ label, value }: LabelValueProps) {
  return (
    <div className="flex justify-between mb-5 w-full">
      <span className="text-gray-600 font-medium">{label}</span>
      <span className="text-gray-900 font-semibold">{value}</span>
    </div>
  );
}

const MainCard = ({ value, title }: { value: any; title?: string }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex-col justify-between   ">
      <h1 className="mb-5 font-bold text-green-900">{title}</h1>
      <LabelValue
        label={"Total Pre-Finance"}
        value={value?.totalPrefinance.toLocaleString()}
      />
      <LabelValue label={"Total Kg"} value={value?.totalKgBrought} />
      <LabelValue
        label={"Total Value"}
        value={value?.totalAmount.toLocaleString()}
      />
      <LabelValue label={"Total Farmers"} value={value?.totalFarmers} />
      <LabelValue
        label={"Recovery Rate"}
        value={`${Number(value?.recoveryRate).toFixed(2)}%`}
      />
    </div>
  );
};

export default MainCard;
