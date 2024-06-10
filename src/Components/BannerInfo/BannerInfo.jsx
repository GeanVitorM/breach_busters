import React from 'react';

const BannerInfo = ({ title, subtitle, textColor }) => {
    return (
        <div className="mt-20 py-20 flex items-center justify-center min-h-[200px] text-center bg-[#f8f4f4] py-16">
            <div>
                <h1 className={`text-6xl font-bold mb-2 ${textColor}`}>
                    {title}
                </h1>
                {subtitle && (
                    <p className={`text-2xl mt-4 ${textColor}`}>
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default BannerInfo;
