import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Quanto tempo preciso dedicar por dia?",
    answer: "O programa requer apenas 30 minutos por dia de dedicação. Foi desenvolvido para pessoas ocupadas que querem resultados reais."
  },
  {
    question: "Funciona mesmo em 30 dias?",
    answer: "Sim! O programa foi estruturado para entregar resultados visíveis em 30 dias, seguindo nossa metodologia comprovada."
  },
  {
    question: "Tem garantia de resultados?",
    answer: "Oferecemos garantia de 7 dias. Se você não ficar satisfeito, devolvemos 100% do seu investimento."
  },
  {
    question: "Preciso ter experiência prévia?",
    answer: "Não! O programa foi desenvolvido para iniciantes e inclui todo o suporte necessário para sua jornada."
  },
  {
    question: "Como funciona o suporte?",
    answer: "Você terá acesso a suporte direto por 30 dias através de nossa comunidade exclusiva e sessões de mentoria."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Perguntas Frequentes
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-black border border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <Minus size={20} className="text-[#718ec2]" />
                ) : (
                  <Plus size={20} className="text-[#718ec2]" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Ainda tem dúvidas? Estamos aqui para ajudar!
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
            Começar Minha Transformação
          </button>
        </div>
      </div>
    </section>
  );
};