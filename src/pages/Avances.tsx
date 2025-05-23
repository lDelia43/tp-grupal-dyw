export default function Avances() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-6 text-primary">Avances del Proyecto - Parque Temático</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introducción</h2>
        <p>
          Nuestro parque temático busca ofrecer una experiencia única y divertida enfocada en la naturaleza
          acuática, combinando atracciones para todas las edades. El sitio web tiene como objetivo presentar
          el proyecto, atraer visitantes y comunicar las novedades y avances del desarrollo.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Identidad Visual Inicial</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Paleta de colores: azules, verdes, amarillos y naranjas para transmitir frescura y energía.</li>
          <li>Tipografía: Moderna y legible.</li>
          <li>Íconos: Estilo divertido y amigable.</li>
          <li>Logo: Versión preliminar creada con diseño simple y colores de la paleta.</li>
        </ul>
        <div className="border p-4 bg-aqua-light rounded text-center font-bold text-aqua-dark">
          Logo preliminar aquí (placeholder)
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Mapa del Sitio</h2>
        <p>Se prevé incluir secciones como Home, Avances y Proyecto, cada una con funciones específicas.</p>
        <ul className="list-disc list-inside">
          <li>Home: Presentación del grupo y portafolios.</li>
          <li>Avances: Documentación y avances del proyecto.</li>
          <li>Proyecto: Página en construcción.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Prototipo</h2>
        <p>
          Wireframes y prototipos están disponibles en:{" "}
          <a
            href="https://www.figma.com/file/ejemplo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Figma
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Organización del Equipo</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Leonel Jesús D Elia</strong> - Programador, responsable del frontend y configuración del
            proyecto.
          </li>
          <li>
            <strong>Integrante 2</strong> - Diseñador UX/UI, creación de wireframes y diseño visual.
          </li>
          <li>
            <strong>Integrante 3</strong> - Comunicador Web, redacción de contenidos y documentación.
          </li>
        </ul>
      </section>
    </section>
  )
}
