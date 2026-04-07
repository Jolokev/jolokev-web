import Cuestionario from "./Cuestionario";

export default function Home() {
  return (
   <main className="bg-black text-white">
  {/* NAVBAR */}
 <nav className="fixed top-6 right-8 z-50">
  <a
    href="https://wa.me/523482558445?text=Hola%20quiero%20información"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black px-4 py-2 rounded-full"
  >
    Contactar
  </a>
</nav>
<img
  src="/logo-jolokev.png"
  alt="Grupo Jolokev"
  className="fixed top-2 left-2 z-40 h-24 md:h-28 lg:h-32 w-auto object-contain pointer-events-none"
/>



      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6">
        
         <h1 className="text-5xl md:text-7xl font-bold mb-6">
  Maquila de bebidas lista para escalar
</h1>

        <p className="text-lg text-gray-400 max-w-2xl mb-8">
          Desde la fórmula hasta la lata final. En Grupo Jolokev convertimos tu
          idea en un producto listo para vender.
        </p>

        <a
          href="https://wa.me/523482558445?text=Hola%20quiero%20cotizar%20mi%20bebida"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Cotizar mi bebida ahora
        </a>
      </section>

      {/* PROCESO */}
      <section className="py-20 px-6 bg-white text-black text-center">
        <h2 className="text-4xl font-bold mb-12">Nuestro proceso</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-bold mb-2">1. Fórmula</h3>
            <p>Desarrollamos o ajustamos tu bebida</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">2. Insumos</h3>
            <p>Lata, tapa, manga y todo incluido</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">3. Producción</h3>
            <p>Llenado, pasteurizado y control de calidad</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">4. Entrega</h3>
            <p>Producto listo para distribución</p>
          </div>
        </div>
      </section>

      {/* CONFIANZA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Capacidad de producción
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-gray-300">
          <div>
            <h3 className="text-3xl font-bold text-white">2,000,000+</h3>
            <p>Latas por mes </p>
          </div>

          <div>
  <h3 className="text-3xl font-bold text-white">355 ml y 473 ml</h3>
  <p className="mb-4">Formatos disponibles</p>

  <img
    src="/latas.png"
    alt="Formatos de lata"
    className="mx-auto rounded-xl shadow-2xl mt-4"
  />
</div>

          <div>
  <h3 className="text-3xl font-bold text-white">Llave en mano</h3>
  <p className="mb-4">Todo incluido listo para vender</p>

  <div className="flex flex-col items-center gap-3 mt-4">
    
    <img
      src="/pensando.png"
      alt="Idea de bebida"
      className="rounded-xl shadow-xl w-[160px]"
    />

    <img
      src="/proceso.png"
      alt="Proceso de producción"
      className="rounded-xl shadow-xl w-full max-w-xs"
    />

  </div>

  <p className="text-sm text-gray-400 mt-3 text-center">
    De la idea al producto terminado listo para vender
  </p>
</div>
        </div>
      </section>

      {/* POR QUE ELEGIRNOS */}
      <section className="py-20 px-6 bg-white text-black text-center">
        <h2 className="text-4xl font-bold mb-10">¿Por qué elegirnos?</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-bold mb-2">Experiencia real</h3>
            <p>Operamos nuestra propia marca (WISH)</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Velocidad</h3>
            <p>De idea a producción en semanas</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Todo incluido</h3>
            <p>No necesitas buscar proveedores externos</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Lanza tu bebida con nosotros
        </h2>

        <a
          href="https://wa.me/523482558445?text=Hola%20quiero%20cotizar%20mi%20bebida"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Iniciar proyecto
        </a>
      </section>

      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/523482558445?text=Hola%20quiero%20cotizar%20mi%20bebida"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition"
      >
        WhatsApp
      </a>
      <Cuestionario />
    </main>
    );
 }