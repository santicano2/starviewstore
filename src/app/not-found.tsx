import Link from "next/link";
import React from "react";

const notFoundPage = () => {
  return (
    <div className="mt-24 text-3xl flex flex-col justify-center items-center">
      Ups! La página no existe.
      <Link href="/">
        <button className="rounded-3xl px-8 py-2 mt-8 bg-starview text-white hover:bg-white hover:text-starview transition-colors ease-in-out">
          Volver a la página principal
        </button>
      </Link>
    </div>
  );
};

export default notFoundPage;
