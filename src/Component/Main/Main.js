import React, { useEffect, useState } from 'react';

const Main = () => {
    const [surah, setSurah] = useState([]);
    useEffect(() => {
        fetch('http://api.alquran.cloud/v1/surah')
            .then(res => res.json())
            .then(data => setSurah(data.data))
    }, [])

    return (
        <div className='grid grid-cols-1 gap-4 justify-items-center md:grid-cols-3 mt-6'>
            {
                surah.map(data => (
                    <div key={data.number} className="card w-4/5 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{data.number}</h2>
                            <p>Name : {data.name}</p>
                            <p>English Name : {data.englishName}</p>
                            <p>English Name Translation : {data.englishNameTranslation}</p>
                            <p>Number Of Ayahs : {data.numberOfAyahs}</p>
                            <p>Revelation Type : {data.revelationType}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    );
};

export default Main;