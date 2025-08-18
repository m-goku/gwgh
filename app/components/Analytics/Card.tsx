import Image from "next/image";

type CardProps = {
  label?: string;
  value?: string | number;
  icon?: any; // path to your image (e.g. "/icons/leaf.png")
};

export default function Card({ label, value, icon }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex justify-between items-center h-[20vh] md:h-[30vh]">
      {/* Left: Image takes 1/3 */}
      <div className="w-20 h-20 flex items-center justify-center bg-orange-300 rounded-full">
        <img
          src={icon}
          alt={`${label} icon`}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Right: Label + Value stacked (2/3) */}
      <div className="w-2/3 flex flex-col ">
        <h2 className="text-lg font-semibold mb-2 text-green-400">{label}</h2>
        <h1 className="text-4xl font-semibold text-green-900">{value}</h1>
      </div>
    </div>
  );
}
