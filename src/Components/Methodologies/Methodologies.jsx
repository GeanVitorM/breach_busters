import React, { useState } from 'react';

const Methodologies = ({ content }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleContent = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#38347c] py-16">
            <div className="container mx-auto flex flex-col gap-6 px-4 md:px-0">
                {content.map((section, index) => {
                    const isReverse = index % 2 !== 0;
                    const isOpen = openIndex === index;

                    return (
                        <div 
                            key={index} 
                            className={`flex flex-col md:flex-${isReverse ? 'row-reverse' : 'row'} items-center`}
                        >
                            <div className="hidden md:flex w-1/3 justify-center">
                                <img src={section.image} alt={section.title} className="h-auto max-w-xs rounded-lg" />
                            </div>
                            <div className="w-full md:w-2/3 bg-[#1A1A5C] p-6 rounded-lg shadow-lg mt-4 md:mt-0">
                                <h3 
                                    className="text-xl font-bold mb-4 text-white cursor-pointer md:cursor-default"
                                    onClick={() => toggleContent(index)}
                                >
                                    {section.title}
                                </h3>
                                <div className={`md:block ${isOpen ? 'block' : 'hidden'}`}>
                                    {section.content.map((text, idx) => (
                                        <p key={idx} className="text-white mb-2">{text}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Methodologies;
