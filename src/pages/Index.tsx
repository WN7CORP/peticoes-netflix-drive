
import React, { useMemo, useState } from "react";
import AreaCard from "@/components/AreaCard";
import { useModelosPeticoes } from "@/hooks/useModelosPeticoes";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";
import {
  Gavel, Scale, Wallet, Book, FileText, Clipboard, Shield
} from "lucide-react";

// Mapeamento area->Icon via regex/casos (lucide-react: gavel, scale, wallet, book, file-text, clipboard, shield)
const areaToIcon = (area: string, color: string) => {
  const key = area.toLowerCase();
  if (key.includes("penal") || key.includes("criminal")) return <Gavel color={color} size={36} />;
  if (key.includes("civil")) return <Scale color={color} size={36} />;
  if (key.includes("tribut") || key.includes("banc")) return <Wallet color={color} size={36} />;
  if (key.includes("constit")) return <Shield color={color} size={36} />;
  if (key.includes("família") || key.includes("infância")) return <Book color={color} size={36} />;
  if (key.includes("advocacia") || key.includes("empresarial") || key.includes("comercial")) return <FileText color={color} size={36} />;
  if (key.includes("proced") || key.includes("recurso") || key.includes("peti") || key.includes("procura")) return <Clipboard color={color} size={36} />;
  // fallback
  return <Scale color={color} size={36} />;
};

// Netflix palette, 10 opções. Recicla para termos extra.
const CARD_COLORS = [
  "#E50914", "#FE4A49", "#F6CA56", "#21BF73", "#22A7F0",
  "#845EC2", "#FF9671", "#BDB76B", "#ED217C", "#F8333C"
];

const Index = () => {
  const { data, isLoading, error } = useModelosPeticoes();
  const [search, setSearch] = useState("");

  // Filtro de busca por nome da área
  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter(
      ({ area }) => area?.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  // Soma total de modelos
  const totalModelos = useMemo(() => {
    return (data || []).reduce((sum, area) => sum + (Number(area.total) || 0), 0);
  }, [data]);

  // Toast feedback
  React.useEffect(() => {
    if (error) {
      toast("Erro ao carregar áreas!", { description: String(error) });
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-[#141414] w-full py-10 px-4 flex flex-col items-center">
      {/* Banner/Header estilo Netflix */}
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
        {/* Busca */}
        <div className="w-full max-w-sm mt-4">
          <Input
            placeholder="Buscar área do direito..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-[#222] text-white placeholder:text-gray-400 border border-[#333]"
            aria-label="Buscar área do direito"
          />
        </div>
      </header>

      {/* Grid de áreas */}
      <section
        className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {isLoading ? (
          <div className="col-span-full py-8 text-center text-lg text-gray-400">Carregando...</div>
        ) : filtered.length === 0 ? (
          <div className="col-span-full py-8 text-center text-lg text-gray-400">Nenhuma área encontrada.</div>
        ) : (
            filtered.map((area, idx) => (
              <AreaCard
                key={area.id}
                nome={area.area}
                modelos={Number(area.total)}
                driveUrl={area.link}
                color={CARD_COLORS[idx % CARD_COLORS.length]}
                icon={areaToIcon(area.area, CARD_COLORS[idx % CARD_COLORS.length])}
              />
          ))
        )}
      </section>

      <footer className="mt-16 text-xs text-gray-500 opacity-40">
        &copy; {new Date().getFullYear()} Peticionário. Inspirado na experiência Netflix.
      </footer>
    </div>
  );
};

export default Index;
