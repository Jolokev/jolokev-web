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
📋 NUEVO CLIENTE MAQUILA

Tipo de bebida: ${form.tipoBebida}
¿Lleva alcohol?: ${form.alcohol}
Tipo de alcohol: ${form.tipoAlcohol}
¿Requiere pasteurización?: ${form.pasteurizacion}
Tipo de lata: ${form.lata}
Materia prima: ${form.materiaPrima}
Materia prima cliente: ${form.mpCliente.join(", ")}
Materia prima Grupo Jolokev: ${form.mpJolokev.join(", ")}
Mercado: ${form.mercado}
¿Con charola?: ${form.charola}
Configuración de pack: ${form.pack}
Tipo de estibado: ${form.estibado}
Etapa: ${form.etapa}
¿Registro IMPI?: ${form.impi}
¿Ya cuenta con fórmula?: ${form.formula}

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
          value={form.tipoBebida}
          className="p-4 rounded-xl bg-gray-900 border border-white/10 focus:border-white/30 outline-none"
          onChange={(e) => handleChange("tipoBebida", e.target.value)}
        />

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
          value={form.tipoAlcohol}
          className="p-4 rounded-xl bg-gray-900 border border-white/10 focus:border-white/30 outline-none"
          onChange={(e) => handleChange("tipoAlcohol", e.target.value)}
        />

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

        <select
          value={form.lata}
          onChange={(e) => handleChange("lata", e.target.value)}
          className="p-4 bg-gray-900 rounded-xl border border-white/10 focus:border-white/30 outline-none"
        >
          <option value="">Tipo de lata</option>
          <option value="12 oz sleek">12 oz sleek</option>
          <option value="12 oz standard">12 oz standard</option>
          <option value="16 oz standard">16 oz standard</option>
        </select>

        <select
          value={form.materiaPrima}
          onChange={(e) => handleChange("materiaPrima", e.target.value)}
          className="p-4 bg-gray-900 rounded-xl border border-white/10 focus:border-white/30 outline-none"
        >
          <option value="">Materia prima</option>
          <option value="Cliente">Cliente</option>
          <option value="Grupo Jolokev">Grupo Jolokev</option>
          <option value="Mixto">Mixto</option>
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

        <select
          value={form.mercado}
          onChange={(e) => handleChange("mercado", e.target.value)}
          className="p-4 bg-gray-900 rounded-xl border border-white/10 focus:border-white/30 outline-none"
        >
          <option value="">Mercado</option>
          <option value="Nacional">Nacional</option>
          <option value="Exportación">Exportación</option>
        </select>

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
          value={form.estibado}
          className="p-4 rounded-xl bg-gray-900 border border-white/10 focus:border-white/30 outline-none"
          onChange={(e) => handleChange("estibado", e.target.value)}
        />

        <select
          value={form.etapa}
          onChange={(e) => handleChange("etapa", e.target.value)}
          className="p-4 bg-gray-900 rounded-xl border border-white/10 focus:border-white/30 outline-none"
        >
          <option value="">Etapa</option>
          <option value="Prototipo">Prototipo</option>
          <option value="En mercado">En mercado</option>
        </select>

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
          value={form.observaciones}
          className="p-4 bg-gray-900 rounded-xl md:col-span-2 border border-white/10 focus:border-white/30 outline-none min-h-[120px]"
          onChange={(e) => handleChange("observaciones", e.target.value)}
        />

        <div className="md:col-span-2 text-center mt-4">
          <button
            type="button"
            onClick={enviarWhats}
            className="bg-green-500 px-6 py-3 rounded-full text-black font-bold"
          >
            Enviar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}