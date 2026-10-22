import images from './assets/images.png'

function Card() {
  return (
    <div className="w-72 overflow-hidden rounded-2xl bg-white shadow-lg">
      <img
        src={images}
        alt="Pica-pau da Reserva"
        className="h-64 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          Reserva
        </h3>

        <p className="mb-4 text-sm text-gray-600">
          Seja você mesmo, mas nem sempre o mesmo.
        </p>

        <button className="rounded-lg bg-black px-5 py-2 text-white transition hover:bg-gray-700">
          Saiba mais
        </button>
      </div>
    </div>
  )
}

export default Card