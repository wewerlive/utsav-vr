import React from 'react';

const Partners = () => {
    const partners = [
        { name: 'Karkhana', logo: 'logo/karkhana.png' },
        { name: 'Prelude', logo: 'logo/prelude.webp' },
        // Add more sponsors here
    ];

    return (
        <div className="bg-[#fdc500] text-[#003f88] grid grid-rows-[repeat(auto-fill,minmax(25px,1fr))] gap-1 pb-5 flex flex-col py-5 md:py-8 px-5">
            <h2 className='md:text-5xl text-3xl font-bold mb-3 md:mb-8'>Our Partners</h2>
            <div>
                {partners.map((partner, index) => (
                    <div key={index} className="inline-block w-[50%] md:w-[20%] h-auto align-middle">
                        <img src={partner.logo} alt={partner.name}
                            className="w-[70%] md:w-[50%] h-auto mx-auto"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;