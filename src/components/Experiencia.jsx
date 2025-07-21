import React from "react";
import yalutecLogo from "../img/logoyalutec.jpg";

const Experiencia = () => {
    console.log("🚀 Componente Experiencia renderizado");
    
    return (
        <div className="container mt-44 mx-auto px-4 lg:px-8 md:px-14 w-full">
            <h2 id="experiencia" className="secondary-title">
                Experiencia Laboral
            </h2>
            <p className="section-paragraph">
                Mi trayectoria profesional como desarrollador web.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center bg-gray-800 border border-gray-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6 md:mb-0 md:mr-8">
                    <img 
                        src={yalutecLogo} 
                        alt="Yalutec Logo" 
                        className="w-32 h-32 md:w-40 md:h-40 object-contain bg-white p-4 rounded-lg"
                    />
                </div>
                
                <div className="text-center md:text-left flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                        Desarrollador Web Junior
                    </h3>
                    <h4 className="text-xl text-theme font-semibold mb-3">
                        Yalutec
                    </h4>
                    <p className="text-gray-300 mb-4">
                        <span className="font-medium">Duración:</span> 5 meses
                    </p>
                    <p className="text-gray-200 leading-relaxed">
                        Desarrollé aplicaciones web utilizando tecnologías modernas, 
                        colaboré en proyectos de front-end y back-end, y contribuí al 
                        desarrollo de soluciones tecnológicas innovadoras.
                    </p>
                    
                    <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                        <span className="bg-theme text-white px-3 py-1 rounded-full text-sm">
                            JavaScript
                        </span>
                        <span className="bg-theme text-white px-3 py-1 rounded-full text-sm">
                            Angular
                        </span>
                        <span className="bg-theme text-white px-3 py-1 rounded-full text-sm">
                            Web Development
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiencia;