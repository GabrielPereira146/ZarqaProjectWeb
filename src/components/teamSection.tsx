import React from "react";
import { TeamData } from '../interface/TeamData';

interface TeamSectionProps {
  title: string;
  role: string;
  data: TeamData[];
  className?: string;
  colorClass?: string;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ title, role, data, className, colorClass }) => {
  return (
    <div className={`flex flex-col pl-16 py-8 gap-4 ${className}`}>
      <p className="font-extrabold text-4xl text-zinc-800 dark:text-white">{title}</p>
      <div className="flex flex-row w-full px-6 py-2 gap-8 ">
        {data.length > 0 ? (
          data
            .filter((teamMember) => teamMember.role.toLowerCase() === role.toLowerCase())
            .map((teamMember) => (
              <div key={teamMember.name} className={`h-96 w-60 flex flex-col rounded-2xl ${colorClass}`}>
                <img className="w-full h-3/4 rounded-t-2xl" src={teamMember.picture} alt={teamMember.name} />
                <div className="flex flex-col justify-center align-middle py-4">
                  <h3 className="text-lg font-semibold text-center">{teamMember.name}</h3>
                  <p className="text-sm font-medium text-black/50 text-center">{teamMember.institution}</p>
                </div>
              </div>
            ))
        ) : (
          <p className="text-zinc-500">Carregando...</p> // Mensagem de carregamento
        )}
      </div>
    </div>
  );
};
