"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">El carrito esta vacío</div>
      ) : (
        <>
          <h2 className="text-xl">Carrito</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="/product.png"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Producto</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/*DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Cantidad 2</span>
                  {/* TODO: TACHO DE BASURA ICONO */}
                  <span className="text-red-500">Eliminar</span>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="/product.png"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Producto</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/*DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Cantidad 2</span>
                  {/* TODO: TACHO DE BASURA ICONO */}
                  <span className="text-red-500">Eliminar</span>
                </div>
              </div>
            </div>
          </div>
          {/* BUTTON */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Total</span>
              <span>$98</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4 truncate">
              Envío e impuestos calculados al momento de la compra
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                Ver carrito
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Pagar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
