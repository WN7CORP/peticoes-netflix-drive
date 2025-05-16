
import React from "react";
import { FolderOpen } from "lucide-react";

interface AreaCardProps {
  nome: string;
  modelos: number;
  driveUrl: string;
  color: string;
}

const AreaCard: React.FC<AreaCardProps> = ({ nome, modelos, driveUrl, color }) => (
  <a
    href={driveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group overflow-hidden rounded-xl transition-all hover:scale-105 shadow-lg bg-gradient-to-br from-[#23252688] to-[#141414f8] ring-1 ring-[#262626] hover:ring-[#E50914]"
    style={{
      minHeight: 144,
      backgroundBlendMode: "overlay",
    }}
  >
    <div className="flex items-center gap-3 p-6">
      <FolderOpen size={36} color={color} className="drop-shadow-md" />
      <div>
        <h2 className="font-semibold text-lg mb-0 text-white">{nome}</h2>
        <span className="text-sm text-gray-400">{modelos} modelos</span>
      </div>
    </div>
    <div className="absolute right-4 top-4 text-xs bg-[#E50914] text-white px-2 py-1 rounded shadow font-bold tracking-wider transition-all opacity-80 group-hover:opacity-100">
      Abrir
    </div>
  </a>
);

export default AreaCard;
