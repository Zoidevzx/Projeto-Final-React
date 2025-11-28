export default function Added() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5 font-sans">
      
      <h1 className="text-[40px] text-black">
        Produto adicionado!
      </h1>

      <a 
        href="/dev"
        className="px-6 py-2 bg-[#9F1D1D] text-white rounded-md font-bold no-underline"
      >
        Voltar
      </a>
      
    </div>
  );
}
