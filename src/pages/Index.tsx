
import AreaCard from "@/components/AreaCard";
import { areas, totalModelos } from "@/data/areas";

// Paleta Netflix: vermelho = #E50914, fundo = #141414
const CARD_COLORS = [
  "#E50914", "#FE4A49", "#F6CA56", "#21BF73", "#22A7F0",
  "#845EC2", "#FF9671", "#BDB76B", "#ED217C", "#F8333C"
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#141414] w-full py-10 px-4 flex flex-col items-center">
      {/* Header Netflix-style */}
      <header className="w-full max-w-5xl flex flex-col items-center gap-2 mb-12">
        <h1 className="text-4xl sm:text-5xl text-white font-bold drop-shadow-glow tracking-tight mb-2">
          <span className="text-[#E50914]">Modelos</span> de Petições
        </h1>
        <p className="text-lg text-gray-300 max-w-xl text-center">
          O seu portal estratégico: selecione a área desejada e acesse centenas de modelos prontos para uso profissional!
        </p>
        <div className="mt-4 flex items-center gap-2 px-5 py-2 rounded-lg bg-[#222] bg-opacity-80 shadow-xl">
          <span className="text-sm text-gray-300">Total disponível:</span>
          <span className="text-2xl text-white font-black tracking-wide">{totalModelos}</span>
          <span className="uppercase text-xs ml-2 px-2 py-1 bg-[#E50914] text-white rounded font-semibold">Modelos</span>
        </div>
      </header>

      {/* Grid de áreas */}
      <section
        className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {areas.map((area, idx) => (
          <AreaCard
            key={area.slug}
            nome={area.nome}
            modelos={area.modelos}
            driveUrl={area.driveUrl}
            color={CARD_COLORS[idx % CARD_COLORS.length]}
          />
        ))}
      </section>

      <footer className="mt-16 text-xs text-gray-500 opacity-40">
        &copy; {new Date().getFullYear()} Peticionário. Inspirado na experiência Netflix. 
      </footer>
    </div>
  );
};

export default Index;
