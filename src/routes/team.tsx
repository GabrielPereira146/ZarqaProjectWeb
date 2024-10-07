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
                            <div key={teamMember.name} className="relative flex-shrink-0 w-56">
                                <div className="relative group">
                                    <img className="w-full h-80 rounded-lg" src={teamMember.picture} alt={teamMember.name} />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition duration-300 ease-in-out rounded-lg"></div>
                                    <div className="absolute inset-0 pl-4 py-2 text-white transform opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex flex-col justify-start items-start">
                                        <h3 className="text-lg font-semibold">{teamMember.name}</h3>
                                        <p className="text-sm">{teamMember.institution}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">Carregando...</p> // Mensagem de carregamento
                    )}
                </div>
            </div>
        </div>
    );
}
