import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-2xl tracking-wide">Starview</div>
            <Image src="/logo.webp" alt="logo" width={40} height={40} />
          </Link>
          <p>Buenos Aires, Argentina</p>
          <span className="font-semibold">starviewtiendaonline@gmail.com</span>
          <span className="font-semibold">+54 9 11 5555-5555</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" width={16} height={16} alt="facebook" />
            <Image
              src="/instagram.png"
              width={16}
              height={16}
              alt="instagram"
            />
            <Image src="/youtube.png" width={16} height={16} alt="youtube" />
            <Image
              src="/pinterest.png"
              width={16}
              height={16}
              alt="pinterest"
            />
            <Image src="/x.png" width={16} height={16} alt="x" />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between items-start w-1/2">
          <div className="flex flex-col justify-between gap-6">
            <h1 className="font-medium text-lg">STARVIEW</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">Sobre nosotros</Link>
              <Link href="/">Contacto</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <h1 className="font-medium text-lg">TIENDA</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">Nuevos productos</Link>
              <Link href="/">Todos los productos</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <h1 className="font-medium text-lg">AYUDA</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">Mi cuenta</Link>
              <Link href="/">Contacto</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">Suscribite!</h1>
          <p>¡Se el primero en recibir nuestras novedades y promociones!</p>
          <div className="flex">
            <input type="text" placeholder="Email" className="p-4 w-3/4" />
            <button className="w-1/4 bg-starview text-white">
              Suscribirme
            </button>
          </div>
          <span className="font-semibold">Pagos seguros</span>
          <div className="flex justify-between">
            <Image
              src="/mercadopago.png"
              width={40}
              height={20}
              alt="mercadopago"
            />
            <Image src="/skrill.png" width={40} height={20} alt="skrill" />
            <Image src="/paypal.png" width={40} height={20} alt="skrill" />
            <Image
              src="/mastercard.png"
              width={40}
              height={20}
              alt="mastercard"
            />
            <Image src="/visa.png" width={40} height={20} alt="visa" />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© Copyright Starview - 2024</div>
        <div>Todos los derechos reservados.</div>
      </div>
    </div>
  );
};

export default Footer;
