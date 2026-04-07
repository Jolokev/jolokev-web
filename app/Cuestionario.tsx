"use client";

import { useState } from "react";

export default function Cuestionario() {
  const [form, setForm] = useState({
    tipoBebida: "",
    alcohol: "",
    tipoAlcohol: "",
    pasteurizacion: "",
    lata: "",
    materiaPrima: "",
    mpCliente: [] as string[],
    mpJolokev: [] as string[],
    mercado: "",
    charola: "",
    pack: "",
    estibado: "",
    etapa: "",
    impi: "",
    formula: "",
    observaciones: "",
  });

  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleMultiSelect = (field: "mpCliente" | "mpJolokev", value: string) => {
    setForm((prev) => {
      const current = prev[field];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
  };

  const enviarWhats = () => {
    const mensaje = `
📋 NUEVO CLIENTE

Tipo de bebida: ${form.tipoBebida}
Alcohol: ${form.alcohol}
Tipo alcohol: ${form.tipoAlcohol}
Pasteurización: ${form.pasteurizacion}
Lata: ${form.lata}
Materia prima: ${form.materiaPrima}
MP Cliente: ${form.mpCliente.join(", ")}
MP Jolokev: ${form.mpJolokev.join(", ")}
Mercado: ${form.mercado}
Charola: ${form.charola}
Pack: ${form.pack}
Estibado: ${form.estibado}
Etapa: ${form.etapa}
IMPI: ${form.impi}
Fórmula: ${form.formula}

Observaciones:
${form.observaciones}
`;

    const url = `https://wa.me/523482558445?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const opciones = ["Ingredientes", "Lata", "Tapa", "Manga", "Charola", "Caja"];

  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Cuestionario de Proyecto
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto bg-[#050505] p-8 rounded-3xl border border-white/10">

        <input
          placeholder="Tipo de bebida"
          className="p-4 rounded-xl bg-gray-900"
          onChange={(e) => handleChange("tipoBebida", e.target.value)}
        />

        {/* Alcohol */}
       <div>
  <p className="mb-2">¿Lleva alcohol?</p>
  <button
    type="button"
    onClick={() => handleChange("alcohol", "Sí")}
    className={`mr-2 px-4 py-2 rounded ${
      form.alcohol === "Sí"
        ? "bg-green-500 text-black font-bold"
        : "bg-gray-700 text-white"
    }`}
  >
    Sí
  </button>
  <button
    type="button"
    onClick={() => handleChange("alcohol", "No")}
    className={`px-4 py-2 rounded ${
      form.alcohol === "No"
        ? "bg-red-500 text-white font-bold"
        : "bg-gray-700 text-white"
    }`}
  >
    No
  </button>
</div>

        <input
          placeholder="Tipo de alcohol"
          className="p-4 rounded-xl bg-gray-900"
          onChange={(e) => handleChange("tipoAlcohol", e.target.value)}
        />

        {/* Pasteurización */}
        <div>
  <p className="mb-2">¿Requiere pasteurización?</p>
  <button
    type="button"
    onClick={() => handleChange("pasteurizacion", "Sí")}
    className={`mr-2 px-4 py-2 rounded ${
      form.pasteurizacion === "Sí"
        ? "bg-green-500 text-black font-bold"
        : "bg-gray-700 text-white"
    }`}
  >
    Sí
  </button>
  <button
    type="button"
    onClick={() => handleChange("pasteurizacion", "No")}
    className={`px-4 py-2 rounded ${
      form.pasteurizacion === "No"
        ? "bg-red-500 text-white font-bold"
        : "bg-gray-700 text-white"
    }`}
  >
    No
  </button>
</div>

        <select onChange={(e) => handleChange("lata", e.target.value)} className="p-4 bg-gray-900 rounded">
          <option>Tipo de lata</option>
          <option>12 oz sleek</option>
          <option>12 oz standard</option>
          <option>16 oz standard</option>
        </select>

        <select onChange={(e) => handleChange("materiaPrima", e.target.value)} className="p-4 bg-gray-900 rounded">
          <option>Materia prima</option>
          <option>Cliente</option>
          <option>Grupo Jolokev</option>
          <option>Mixto</option>
        </select>

        {(form.materiaPrima === "Cliente" || form.materiaPrima === "Mixto") && (
  <div className="md:col-span-2">
    <p className="mb-2">Materia prima cliente</p>
    {opciones.map((item) => (
      <button
        key={item}
        type="button"
        onClick={() => toggleMultiSelect("mpCliente", item)}
        className={`mr-2 mb-2 px-3 py-1 rounded ${
          form.mpCliente.includes(item)
            ? "bg-green-500 text-black font-bold"
            : "bg-gray-700 text-white"
        }`}
      >
        {item}
      </button>
    ))}
  </div>
)}

{(form.materiaPrima === "Grupo Jolokev" || form.materiaPrima === "Mixto") && (
  <div className="md:col-span-2">
    <p className="mb-2">Materia prima Jolokev</p>
    {opciones.map((item) => (
      <button
        key={item}
        type="button"
        onClick={() => toggleMultiSelect("mpJolokev", item)}
        className={`mr-2 mb-2 px-3 py-1 rounded ${
          form.mpJolokev.includes(item)
            ? "bg-blue-500 text-white font-bold"
            : "bg-gray-700 text-white"
        }`}
      >
        {item}
      </button>
    ))}
  </div>
)}

        <select onChange={(e) => handleChange("mercado", e.target.value)} className="p-4 bg-gray-900 rounded">
          <option>Mercado</option>
          <option>Nacional</option>
          <option>Exportación</option>
        </select>

        {/* Charola */}
        <div>
  <p className="mb-2">¿Con charola?</p>
  <button
    type="button"
    onClick={() => handleChange("charola", "Sí")}
    className={`mr-2 px-4 py-2 rounded ${
      form.charola === "Sí"
        ? "bg-green-500 text-black font-bold"
        : "bg-gray-700 text-white"
    }`}
  >
    Sí
  </button>
  <button
    type="button"
    onClick={() => handleChange("charola", "No")}
    className={`px-4 py-2 rounded ${
      form.charola === "No"
        ? "bg-red-500 text-white font-bold"
        : "bg-gray-700 text-white"
    }`}
  >
    No
  </button>
</div>

        {/* PACK */}
        <div>
  <p className="mb-2">Configuración de pack</p>
  <button
    type="button"
    onClick={() => handleChange("pack", "12 pack")}
    className={`mr-2 px-4 py-2 rounded ${
      form.pack === "12 pack"
        ? "bg-green-500 text-black font-bold"
        : "bg-gray-700 text-white"
    }`}
  >
    12 pack
  </button>
  <button
    type="button"
    onClick={() => handleChange("pack", "24 pack")}
    className={`px-4 py-2 rounded ${
      form.pack === "24 pack"
        ? "bg-blue-500 text-white font-bold"
        : "bg-gray-700 text-white"
    }`}
  >
    24 pack
  </button>
</div>

        <input
          placeholder="Tipo de estibado"
          className="p-4 bg-gray-900 rounded"
          onChange={(e) => handleChange("estibado", e.target.value)}
        />

        <select onChange={(e) => handleChange("etapa", e.target.value)} className="p-4 bg-gray-900 rounded">
          <option>Etapa</option>
          <option>Prototipo</option>
          <option>En mercado</option>
        </select>

        {/* IMPI */}
        <div>
  <p className="mb-2">¿Registro IMPI?</p>
  <button
    type="button"
    onClick={() => handleChange("impi", "Sí")}
    className={`mr-2 px-4 py-2 rounded ${
      form.impi === "Sí"
        ? "bg-green-500 text-black font-bold"
        : "bg-gray-700 text-white"
    }`}
  >
    Sí
  </button>
  <button
    type="button"
    onClick={() => handleChange("impi", "No")}
    className={`px-4 py-2 rounded ${
      form.impi === "No"
        ? "bg-red-500 text-white font-bold"
        : "bg-gray-700 text-white"
    }`}
  >
    No
  </button>
</div>

        {/* Fórmula */}
        <div>
  <p className="mb-2">¿Ya cuenta con fórmula?</p>
  <button
    type="button"
    onClick={() => handleChange("formula", "Sí")}
    className={`mr-2 px-4 py-2 rounded ${
      form.formula === "Sí"
        ? "bg-green-500 text-black font-bold"
        : "bg-gray-700 text-white"
    }`}
  >
    Sí
  </button>
  <button
    type="button"
    onClick={() => handleChange("formula", "No")}
    className={`px-4 py-2 rounded ${
      form.formula === "No"
        ? "bg-yellow-500 text-black font-bold"
        : "bg-gray-700 text-white"
    }`}
  >
    No
  </button>
</div>

        <textarea
          placeholder="Observaciones"
          className="p-4 bg-gray-900 rounded md:col-span-2"
          onChange={(e) => handleChange("observaciones", e.target.value)}
        />

        <div className="md:col-span-2 text-center mt-4">
          <button
            onClick={enviarWhats}
            className="bg-green-500 px-6 py-3 rounded text-black font-bold"
          >
            Enviar por WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}