import React, { useEffect, useState } from "react";
import { TeamData } from '../interface/TeamData'; // Importar a interface, se necessário

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
            <div className="flex flex-col pl-16 py-8 gap-4 bg-white dark:bg-zinc-800">
                <p className="font-extrabold text-4xl dark:text-white">Principal Investigators</p>
                <div className="flex flex-row w-full px-6 py-2 gap-8">
                    {data.length > 0 ? ( // Verifica se há dados para renderizar
                        data.map((teamMember) => (
                            <div key={teamMember.name} className="h-64 w-48 flex flex-col bg-sand-100/50 dark:bg-sand-200">
                                <img className="w-full h-3/4 rounded-t-lg" src={teamMember.picture} alt={teamMember.name} />
                                <div className="flex flex-col justify-center align-middle">
                                    <h3 className="text-lg font-semibold">{teamMember.name}</h3>
                                    <p className="text-sm font-medium text-black/50">{teamMember.institution}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-zinc-500">Carregando...</p> // Mensagem de carregamento
                    )}
                </div>
            </div>
        </div>
    );
}
