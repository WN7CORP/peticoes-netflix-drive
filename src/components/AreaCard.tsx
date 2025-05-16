
import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface AreaCardProps {
  nome: string;
  modelos: number;
  driveUrl: string;
  color: string;
  icon: React.ReactNode;
}

const AreaCard: React.FC<AreaCardProps> = ({ nome, modelos, driveUrl, color, icon }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <a
        href={driveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group overflow-hidden rounded-xl transition-all hover:scale-105 shadow-lg bg-gradient-to-br from-[#23252688] to-[#141414f8] ring-1 ring-[#262626] hover:ring-[#E50914] flex flex-col justify-between"
        style={{ minHeight: 144, backgroundBlendMode: "overlay" }}
        aria-label={`Acessar modelos de ${nome}`}
      >
        <div className="flex items-center gap-3 p-6">
          <span className="drop-shadow-md">{icon}</span>
          <div>
            <h2 className="font-semibold text-lg mb-0 text-white">{nome}</h2>
            <span className="text-sm text-gray-400">{modelos} modelos</span>
          </div>
        </div>
        <div className="absolute right-4 top-4 text-xs bg-[#E50914] text-white px-2 py-1 rounded shadow font-bold tracking-wider transition-all opacity-80 group-hover:opacity-100">
          Abrir
        </div>
      </a>
    </TooltipTrigger>
    <TooltipContent side="top">
      Clique para acessar todos modelos da área {nome}.
    </TooltipContent>
  </Tooltip>
);

export default AreaCard;
