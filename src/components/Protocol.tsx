import React from 'react';
import { Crown, Target, Rocket, Brain, Heart, Shield, Coins, Clock, Users, Trophy } from 'lucide-react';

const steps = [
  { icon: Crown, title: "Mentalidade de Rei", description: "Desenvolva a mentalidade necessária para alcançar seus objetivos." },
  { icon: Target, title: "Definição de Metas", description: "Estabeleça metas claras e alcançáveis para sua jornada." },
  { icon: Brain, title: "Reprogramação Mental", description: "Elimine crenças limitantes e fortaleça sua autoconfiança." },
  { icon: Heart, title: "Saúde e Energia", description: "Otimize sua saúde física e mental para máxima performance." },
  { icon: Shield, title: "Proteção Financeira", description: "Aprenda a proteger e multiplicar seus recursos." },
  { icon: Coins, title: "Gestão Financeira", description: "Domine as técnicas de gestão financeira pessoal." },
  { icon: Clock, title: "Produtividade", description: "Maximize seu tempo e aumente sua produtividade." },
  { icon: Users, title: "Networking", description: "Construa relacionamentos estratégicos e valiosos." },
  { icon: Rocket, title: "Aceleração", description: "Acelere seus resultados com estratégias comprovadas." },
  { icon: Trophy, title: "Legado", description: "Construa um legado duradouro e significativo." }
];

export const Protocol = () => {
  return (
    <section id="como-funciona" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-[#718ec2]">10 Passos</span> Para Sua Transformação
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((Step, index) => (
            <div 
              key={index}
              className="bg-black p-6 rounded-xl border border-gray-800 hover:border-[#718ec2] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#718ec2]/10 p-3 rounded-lg">
                  <Step.icon size={24} className="text-[#718ec2]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{Step.title}</h3>
                  <p className="text-gray-400">{Step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h4 className="text-3xl font-bold text-[#718ec2] mb-2">97%</h4>
              <p className="text-gray-400">Taxa de Sucesso</p>
            </div>
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h4 className="text-3xl font-bold text-[#718ec2] mb-2">30 Dias</h4>
              <p className="text-gray-400">Transformação Completa</p>
            </div>
            <div className="bg-black p-6 rounded-xl border border-gray-800">
              <h4 className="text-3xl font-bold text-[#718ec2] mb-2">10.000+</h4>
              <p className="text-gray-400">Vidas Transformadas</p>
            </div>
          </div>
          
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
            Quero Transformar Minha Vida Agora
          </button>
        </div>
      </div>
    </section>
  );
};