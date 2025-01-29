import React from 'react';
import { Check, Shield } from 'lucide-react';

export const Pricing = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Invista em Sua Transformação
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Pagamento Único</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">R$ 997</span>
              <span className="text-gray-400"> /único</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Acesso vitalício ao programa",
                "30 dias de suporte direto",
                "Comunidade exclusiva",
                "Bônus especiais",
                "Garantia de 7 dias"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="text-green-500" size={20} />
                  <span className="text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition-all transform hover:scale-105">
              Começar Agora
            </button>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-[#718ec2]">
            <div className="inline-block px-4 py-1 bg-[#718ec2]/10 text-[#718ec2] rounded-full text-sm font-semibold mb-4">
              Mais Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">Parcelado</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">12x R$ 97</span>
              <span className="text-gray-400"> /mês</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Acesso vitalício ao programa",
                "30 dias de suporte direto",
                "Comunidade exclusiva",
                "Bônus especiais",
                "Garantia de 7 dias",
                "Parcelamento sem juros"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="text-green-500" size={20} />
                  <span className="text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#718ec2] hover:bg-[#5a7ab3] text-white py-3 rounded-full font-semibold transition-all transform hover:scale-105">
              Escolher Este Plano
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400">
            <Shield size={20} />
            <span>Pagamento 100% seguro com garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
};