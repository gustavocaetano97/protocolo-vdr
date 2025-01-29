import React, { useState, useEffect } from 'react';
import { Play, Lock, ArrowDown } from 'lucide-react';

export const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes in seconds
  const [showLoadingMessage, setShowLoadingMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Show loading message after video is ready
    const loadingMessageTimer = setTimeout(() => {
      setShowLoadingMessage(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(loadingMessageTimer);
    };
  }, []);

  useEffect(() => {
    if (timeRemaining > 0) {
      const interval = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timeRemaining]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h1 className="text-center mb-8">
          <span className="text-red-600 font-bold text-3xl md:text-4xl lg:text-5xl">
            Esse <span className="text-[#718ec2]">vídeo</span> pode sumir a qualquer momento
          </span>
        </h1>

        <div className="max-w-3xl mx-auto">
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                  <p className="text-white mt-4">Carregando o vídeo...</p>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full transition-all transform hover:scale-105">
                  <Play size={24} />
                  <span>Assistir Agora</span>
                </button>
              </div>
            )}
          </div>

          {showLoadingMessage && timeRemaining > 0 && (
            <div className="mt-8 space-y-4">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-yellow-900/50 text-yellow-400 px-4 py-2 rounded-full border border-yellow-700/50">
                  <Lock size={16} />
                  <span>
                    Mais informações serão reveladas em {formatTime(timeRemaining)}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center text-gray-400">
                <ArrowDown className="animate-bounce" size={24} />
                <p className="text-sm">Continue assistindo para desbloquear o conteúdo completo</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};