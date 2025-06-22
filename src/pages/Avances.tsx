import aquapark from "../../public/images/logo.png";
import mapa from "../assets/images/mapa.jpg";

export default function Avances() {
  return (
    <div className="p-12">
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
        <div className="p-4 rounded text-center font-bold text-aqua-dark">
          <img src={aquapark} alt="Imagen centrada" className="logo mx-auto" />
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Mapa del Sitio</h2>
        <p>Se prevé incluir secciones como Home, Avances y Proyecto, cada una con funciones específicas.</p>
        <ul className="list-disc list-inside mb-4">
          <li>Home: Presentación del grupo y portafolios.</li>
          <li>Avances: Documentación y avances del proyecto.</li>
          <li>Proyecto: Página en construcción.</li>
        </ul>
        <div className="flex justify-center">
          <img src={mapa} alt="Mapa del sitio" className="rounded shadow max-w-full h-auto" style={{ maxHeight: 350 }} />
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Prototipo</h2>
        <p>
          Wireframes y prototipos están disponibles en:{" "}
          <a
            href="https://www.figma.com/design/6dC3oXx6ZNhIGs7MOQawyW/Trabajo-práctico-Obligatorio-Avances-Proyecto-Grupal?node-id=21-3&t=CpXfaaxBmwHBTWB6-0"
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
            <strong>Bautista Lammertyn</strong> - Diseñador UX/UI, creación de wireframes y diseño visual.
          </li>
          <li>
            <strong>Matias Ariel Lepe</strong> - Comunicador Web, redacción de contenidos y documentación.
          </li>
          <li>
            <strong>Tobias Liuboschitz</strong> - Maquetador
          </li>
        </ul>
      </section>
    </div>
  )
}
