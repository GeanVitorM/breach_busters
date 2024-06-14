import React from 'react';

const Methodologies = ({ content }) => {
    return (
        <div className="bg-[#38347c] py-16">
            <div className="container mx-auto flex flex-col gap-6">
                {content.map((section, index) => {
                    const isReverse = index % 2 !== 0;
                    return (
                        <div key={index} className={`flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} items-center`}>
                            <div className="w-1/3 flex justify-center">
                                <img src={section.image} alt={section.title} className="h-auto max-w-xs rounded-lg" />
                            </div>
                            <div className="w-2/3 bg-[#1A1A5C] p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-bold mb-4 text-white">{section.title}</h3>
                                {section.content.map((text, idx) => (
                                    <p key={idx} className="text-white mb-2">{text}</p>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Methodologies;
