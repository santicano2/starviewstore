const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="tipo"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
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
        />
        <input
          type="number"
          name="max"
          placeholder="Precio max"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
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
        </select>
        <select
          name="categoria"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
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
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Ordenar por</option>
          <option value="">Precio (menor a mayor)</option>
          <option value="">Precio (mayor a menor)</option>
          <option value="">Mas nuevo</option>
          <option value="">Mas viejo</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
