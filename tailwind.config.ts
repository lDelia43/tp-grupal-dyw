import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00BFFF", // Deep Sky Blue (agua principal)
          light: "#87CEFA", // Light Sky Blue
          dark: "#007ACC", // Azul fuerte para contraste
        },
        accent: {
          DEFAULT: "#FFB300", // Amarillo sol
          light: "#FFD54F", // Amarillo suave
          dark: "#FF8F00", // Naranja cálido
        },
        aqua: {
          DEFAULT: "#00E5FF", // Celeste vibrante
          light: "#84FFFF", // Turquesa claro
          dark: "#00B8D4", // Celeste profundo
        },
        nature: {
          DEFAULT: "#66BB6A", // Verde pasto
          light: "#A5D6A7", // Verde claro
          dark: "#388E3C", // Verde oscuro
        },
        neutral: {
          light: "#f1f5f9", // Gris muy claro (background)
          dark: "#2c3e50", // Gris oscuro (textos fuertes)
        },
      },
    },
  },
  plugins: [],
}
export default config
