import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    comment: "Incrível como minha vida mudou em apenas 30 dias! Recomendo muito!",
    rating: 5
  },
  {
    id: 2,
    name: "Maria Santos",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    comment: "O melhor investimento que já fiz em mim mesmo. Resultados surpreendentes!",
    rating: 5
  },
  {
    id: 3,
    name: "Pedro Costa",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    comment: "Protocolo sensacional! Já estou colhendo os frutos da mudança.",
    rating: 5
  }
];

export const SocialProof = () => {
  return (
    <section id="depoimentos" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Transformando Vidas em Todo o Brasil
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-black rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CheckCircle className="ml-auto text-green-500" size={24} />
              </div>
              <p className="text-gray-400">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};