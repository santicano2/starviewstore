"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";

import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import { media as wixMedia } from "@wix/sdk";

const CartModal = () => {
  // TEMPORARY
  // const cartItems = true;

  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCartStore();

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cart.lineItems?.length ? (
        <div className="">El carrito esta vacío</div>
      ) : (
        <>
          <h2 className="text-xl">Carrito</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            {cart.lineItems.map((item) => (
              <div className="flex gap-4" key={item._id}>
                {item.image && (
                  <Image
                    src={wixMedia.getScaledToFillImageUrl(
                      item.image,
                      72,
                      96,
                      {}
                    )}
                    alt=""
                    width={72}
                    height={96}
                    className="object-cover rounded-md"
                  />
                )}
                <div className="flex flex-col justify-between w-full">
                  {/* TOP */}
                  <div>
                    {/* TITLE */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">
                        {item.productName?.original}
                      </h3>
                      <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                        {item.quantity && item.quantity > 1 && (
                          <div className="text-xs text-gray-500">
                            {item.quantity} x{" "}
                          </div>
                        )}
                        ${item.price?.amount}
                      </div>
                    </div>
                    {/*DESC */}
                    <div className="text-sm text-gray-500">
                      {item.availability?.status ? "Disponible" : "Agotado"}
                    </div>
                  </div>
                  {/* BOTTOM */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Unidad/es {item.quantity}
                    </span>
                    <span
                      style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                      onClick={() => removeItem(wixClient, item._id!)}
                    >
                      <Trash2
                        className="w-5 h-5 text-red-500"
                        strokeWidth={1.5}
                      />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* BUTTON */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Total</span>
              <span>${cart.subtotal.amount}</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4 truncate">
              Envío e impuestos calculados al momento de la compra
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                Ver carrito
              </button>
              <button
                className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not- disabled:opacity-75"
                disabled={isLoading}
              >
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
