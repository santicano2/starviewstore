const CustomizeProduct = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Elegí un color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-white">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-black"></li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-red-500">
          <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-blue-500">
          <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
      </ul>
      <h4 className="font-medium">Elegí el talle</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-starview text-starview rounded-md py-1 px-4 text-sm cursor-pointer">
          XS
        </li>
        <li className="ring-1 ring-starview text-white bg-starview rounded-md py-1 px-4 text-sm cursor-pointer">
          S
        </li>
        <li className="ring-1 ring-pink-200 bg-pink-200 text-white rounded-md py-1 px-4 text-sm cursor-not-allowed">
          M
        </li>
      </ul>
    </div>
  );
};

export default CustomizeProduct;
