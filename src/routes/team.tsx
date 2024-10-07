import React, { useEffect, useState } from "react";
import { TeamData } from '../interface/TeamData'; // Importar a interface, se necessário
import { TeamSection } from "../components/teamSection";

export function Team() {
    const [data, setData] = useState<TeamData[]>([]); // Estado para armazenar os dados

    useEffect(() => {
        // Chamando a função serverless do Netlify
        const fetchData = async () => {
            try {
                const response = await fetch('/.netlify/functions/teamService'); // Endpoint da sua função serverless
                if (!response.ok) throw new Error('Erro ao buscar os dados');

                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col w-full h-auto justify-center bg-white dark:bg-zinc-800">
          <TeamSection
            title="Principal Investigators"
            role="principal"
            data={data}
            colorClass="bg-sand-100/50 dark:bg-sand-200"
          />
          <TeamSection
            title="Associate Researchers"
            role="researchers"
            data={data}
            className="bg-sand-100/50 dark:bg-sand-200"
            colorClass="bg-zinc-200"
          />
          <TeamSection
            title="Team Members"
            role="members"
            data={data}
            colorClass="bg-zinc-200"
          />
        </div>
      );
}
