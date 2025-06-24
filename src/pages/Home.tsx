import banner from "../../public/images/banner.png"

export default function Home() {
  return (
    <div>
      <main>
        <img src={banner} alt="banner" className="w-full md:max-h-[250px]" />
        <div className="p-6 flex justify-center">
          <div className="border border-neutral-300 bg-white rounded-lg shadow-md p-12">
            <h1 className="text-4xl font-bold mb-6 text-black">Datos del equipo</h1>
            <div className="flex flex-col gap-4">
              <h2>
                <strong>Número del equipo:</strong> 6
              </h2>
              <h2>
                <strong>Nombre del equipo:</strong> Aqualandia
              </h2>
              <h2>
                <strong>Año y curso:</strong> 516035 - 2025-1C
              </h2>
              <h2>
                <strong>Materia:</strong> Diseño y Desarrollo Web
              </h2>
              <h2>
                <strong>Docente:</strong> Litovicius, Patricia Carina
              </h2>
              <h2>
              <strong>Integrantes:</strong>
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>
                <a href="https://ldelia43.github.io/dyw-8/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Leonel Jesús D Elia
                </a>
              </li>
              <li>
                <a href="https://blammertyn.github.io/nuevaPagDefinitiva/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Bautista Lammertyn
                </a>
              </li>
              <li>
                <a href="https://matiasl07.github.io/PaginaPersonalfinal/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Matias Ariel Lepe
                </a>
              </li>
              <li>
                <a href="https://github.com/tliuboschitz/ejercicio_integrador" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Tobias Liuboschitz
                </a>
              </li>
            </ul>
            </div>
        </div>
      </div>
      </main>
    </div>
  )
}
