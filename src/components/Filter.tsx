"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Tipo</option>
          <option value="remera">Remera</option>
          <option value="buzo">Buzo</option>
        </select>
        <input
          type="number"
          name="min"
          min={1}
          placeholder="Precio min"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="max"
          placeholder="Precio max"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        {/* <select
          name="talle"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Talle</option>
          <option value="xxs">XXS</option>
          <option value="xs">XS</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>
          <option value="xxxl">XXXL</option>
          <option value="xxxxl">XXXXL</option>
          <option value="long_sleeve">Long sleeve</option>
          <option value="tank_top">Tank top</option>
          <option value="baby_tee">Baby tee</option>
        </select>
        <select
          name="color"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Color</option>
          <option value="blanco">Blanco</option>
          <option value="negro">Negro</option>
          <option value="rojo">Rojo</option>
          <option value="azul">Azul</option>
          <option value="verde">Verde</option>
          <option value="rosa">Rosa</option>
          <option value="amarillo">Amarillo</option>
          <option value="violeta">Violeta</option>
        </select> */}
        <select
          name="category"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Categoría</option>
          <option value="popular">Popular</option>
          <option value="nuevo">Nuevos</option>
        </select>
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Todos los filtros</option>
        </select>
      </div>
      <div>
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Ordenar por</option>
          <option value="asc price">Precio (menor a mayor)</option>
          <option value="desc price">Precio (mayor a menor)</option>
          <option value="asc lastUpdated">Mas nuevo</option>
          <option value="desc lastUpdated">Mas viejo</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
