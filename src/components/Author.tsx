import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

export const Author = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop" 
              alt="Mentor" 
              className="rounded-xl shadow-2xl"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Conheça Seu Mentor
            </h2>
            
            <p className="text-gray-400 mb-8">
              Com mais de 10 anos de experiência em desenvolvimento pessoal e 
              transformação de vidas, já ajudei milhares de pessoas a alcançarem 
              seus objetivos e viverem uma vida extraordinária.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#718ec2]/10 p-3 rounded-lg">
                  <Award size={24} className="text-[#718ec2]" />
                </div>
                <div>
                  <h3 className="font-semibold">Especialista Certificado</h3>
                  <p className="text-gray-400">Certificações internacionais em coaching e mentoria</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#718ec2]/10 p-3 rounded-lg">
                  <BookOpen size={24} className="text-[#718ec2]" />
                </div>
                <div>
                  <h3 className="font-semibold">Autor Best-seller</h3>
                  <p className="text-gray-400">3 livros publicados sobre desenvolvimento pessoal</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#718ec2]/10 p-3 rounded-lg">
                  <Users size={24} className="text-[#718ec2]" />
                </div>
                <div>
                  <h3 className="font-semibold">Comunidade Ativa</h3>
                  <p className="text-gray-400">Mais de 10.000 alunos transformados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};