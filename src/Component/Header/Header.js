import React, { useEffect, useState } from 'react';

const Header = () => {
    const [surah, setSurah] = useState([]);
    useEffect(() => {
        fetch('http://api.alquran.cloud/v1/surah')
            .then(res => res.json())
            .then(data => setSurah(data.data))
    }, [])
    console.log(surah)
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 text-black rounded-box w-52">
                        <li tabIndex={0}>
                            <a className="justify-between">
                            Surah
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2 z-50 shadow bg-base-300 text-black overflow-y-scroll h-screen">
                                {
                                    surah.map(data => (
                                        <li className='pt-0.5 ml-3'>{data.number} : {data.englishName}</li>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost normal-case text-xl">Al-Quran</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li tabIndex={0}>
                        <a>
                            Surah
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 text-white z-50 bg-neutral overflow-y-scroll h-screen">
                            {
                                surah.map(data => (
                                    <li className='pt-0.5 ml-3'>{data.number} : {data.englishName}</li>
                                ))
                            }
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <input type="text" placeholder="Search" className="input text-black mr-1" />
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
        </div>
    );
};

export default Header;