import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const TargetAudience = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Este Programa é Para Você?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-red-500">Antes do Protocolo</h3>
            <ul className="space-y-4">
              {[
                "Sem direção clara na vida",
                "Problemas financeiros recorrentes",
                "Baixa autoestima e confiança",
                "Relacionamentos problemáticos",
                "Procrastinação constante",
                "Falta de energia e motivação"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <XCircle className="text-red-500 flex-shrink-0" size={20} />
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-green-500">Depois do Protocolo</h3>
            <ul className="space-y-4">
              {[
                "Propósito de vida claro",
                "Liberdade financeira",
                "Autoconfiança inabalável",
                "Relacionamentos saudáveis",
                "Alta produtividade",
                "Energia e motivação diária"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
            Quero Fazer Parte da Transformação
          </button>
        </div>
      </div>
    </section>
  );
};