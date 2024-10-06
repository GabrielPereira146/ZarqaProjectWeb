import React, { useEffect, useState } from "react";

export function Team() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Chamando a função serverless do Netlify
        fetch('/.netlify/functions/getGoogleSheet')
            .then((response) => response.json())
            .then((data) => {
                const rows = data.values;
                const keys = rows[0]; // Primeira linha como cabeçalho
                const formattedData = rows.slice(1).map((row) => {
                    let obj = {};
                    keys.forEach((key, index) => {
                        obj[key.toLowerCase()] = row[index];
                    });
                    return obj;
                });
                setData(formattedData);
            })
            .catch((error) => console.error('Erro ao buscar dados:', error));
    }, []);

    console.log(data);

    return (
        <div className="flex flex-col w-full h-auto justify-center bg-white dark:bg-zinc-800">
            <div className="flex flex-col pl-16 py-8 gap-4 bg-white dark:bg-zinc-800">
                <p className="font-extrabold text-4xl dark:text-white">Principal Investigators</p>
                <div className="flex flex-row w-full px-6 py-2 gap-8">
                    <div className="flex flex-col rounded-2xl h-72 w-48 bg-sand-100/50"></div>
                    {data?.map((teamData, index) => (
                        <div key={index} className="relative flex-shrink-0 w-56">
                            <div className="relative group">
                                <img className="w-full h-80 rounded-lg" src={teamData.foto} alt={teamData.nome} />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition duration-300 ease-in-out rounded-lg"></div>
                                <div className="absolute inset-0 pl-4 py-2 text-white transform opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex flex-col justify-start items-start">
                                    <h3 className="text-lg font-semibold">{teamData.nome}</h3>
                                    <p className="text-sm">{teamData.instituicao}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
