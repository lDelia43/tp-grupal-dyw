import banner from "../assets/images/banner.jpg";

export default function Proyecto() {
  return (
    <section className="mt-0 flex flex-col items-center">
      {/* Banner superior solo imagen */}
      <img
        src={banner}
        alt="Banner del proyecto"
        className="w-full max-h-64 object-cover mb-8 rounded-b-lg shadow"
        style={{ minHeight: 180 }}
      />

      {/* Cuadro centrado */}
      <div className="max-w-xl w-full bg-white rounded-lg shadow p-6 mt-4 mb-8 text-center" style={{ marginLeft: 16, marginRight: 16 }}>
        <h2 className="text-2xl font-semibold mb-4 text-aqua-dark">Sitio del proyecto</h2>
        <a
          href="https://ldelia43.github.io/tp-grupal-dyw-final/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold hover:underline block mb-4"
        >
          Ir al sitio del proyecto
        </a>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/s5H77oZDavQ"
            title="Video del proyecto"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 rounded"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
