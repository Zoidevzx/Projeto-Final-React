export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5 font-sans">

      <h1 className="text-[40px] text-center">
        Produto não encontrado!
      </h1>

      <a
        href="/dev"
        className="px-6 py-2 bg-[#9F1D1D] text-white rounded-md font-bold no-underline font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:bg-[#b22222] hover:scale-105 hover:shadow-xl active:scale-95"
      >
        Voltar
      </a>

    </div>
  );
}
