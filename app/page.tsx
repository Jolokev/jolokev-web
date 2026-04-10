import Cuestionario from "./Cuestionario";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* BOTÓN CONTACTAR */}
      <nav className="fixed top-6 right-8 z-50">
        <a
          href="https://wa.me/523482558445?text=Hola%20quiero%20informaci%C3%B3n"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-3 rounded-full font-medium shadow-lg"
        >
          Contactar
        </a>
      </nav>

      {/* LOGO */}
      <img
        src="/logo-jolokev.png"
        alt="Grupo Jolokev"
        className="fixed top-2 left-2 z-40 h-24 md:h-28 lg:h-32 w-auto object-contain"
      />

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Maquila de bebidas lista para escalar
        </h1>

        <p className="text-lg text-gray-400 max-w-3xl mb-8">
          Desde la fórmula hasta la lata final. En Grupo Jolokev convertimos tu
          idea en un producto listo para vender.
        </p>

        <a
          href="https://wa.me/523482558445?text=Hola%20quiero%20informaci%C3%B3n"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg"
        >
          Cotizar mi bebida ahora
        </a>
      </section>

      {/* CUESTIONARIO */}
      <Cuestionario />

      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/523482558445?text=Hola%20quiero%20informaci%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-8 py-4 rounded-full font-bold z-50 shadow-lg"
      >
        WhatsApp
      </a>
    </main>
  );
}