"use client"
import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function page() {
    const [loading, setLoading] = useState(false);
    const [rickandmorty, setRickandmorty] = useState([]);

    const buscarRickandmorty = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://api.sampleapis.com/rickandmorty/characters');
            const data = response.data;
            setRickandmorty(data);
        } catch (error) {
            console.error("Erro ao buscar personagens:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-rose-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-red-400 mb-4">Personagens</h1>

                <div className="text-center mb-8">
                    <div className="mb-6">
                        <button 
                            onClick={buscarRickandmorty} 
                            disabled={loading} 
                            className="px-6 py-3 bg-gradient-to-r from-rose-300 to-rose-400 text-white rounded-lg border-2 border-rose-300 shadow-md hover:from-rose-400 hover:to-rose-300 hover:shadow-lg focus:ring-4 focus:ring-rose-200 disabled:opacity-50 transition-all "
                        >
                            {loading ? 'Carregando...' : '🔍 Buscar Personagens'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {rickandmorty.map((rickandmorty) => (
                    <div key={rickandmorty.id} className="bg-white p-6 rounded-lg shadow-md border-2 border-rose-200 hover:border-rose-400 transition-all">
                        <h2 className="text-xl font-semibold mb-2 text-rose-700">{rickandmorty.name}</h2>
                        <p className="text-gray-700"><strong>Status:</strong> {rickandmorty.status}</p>
                        

                        <img 
                            src={rickandmorty.image || 'https://via.placeholder.com/150'} 
                            alt={rickandmorty.title || 'Imagem não disponível'} 
                            className="w-full h-auto rounded-lg mt-4" 
                            onError={(e) => e.target.src = 'https://via.placeholder.com/150'} 
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
