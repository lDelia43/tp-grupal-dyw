const integrantes = [
  {
    nombre: "Leonel Jesús D Elia",
    portfolio: "https://github.com/lDelia43",
  },
  {
    nombre: "Integrante 2",
    portfolio: "https://portfolio2.example.com",
  },
  {
    nombre: "Integrante 3",
    portfolio: "https://portfolio3.example.com",
  },
]

export default function Home() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-6 text-primary">Grupo 6 - Parque Temático</h1>

      <h2 className="text-2xl font-semibold mb-4">Integrantes</h2>
      <ul className="list-disc list-inside mb-6">
        {integrantes.map(({ nombre, portfolio }) => (
          <li key={nombre}>
            {nombre} -{" "}
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Portfolio
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
