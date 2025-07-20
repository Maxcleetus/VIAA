import React, { useState } from 'react'
import { keralaDistricts, subdis, driversByTaluk, shopsByTaluk, hospital, trvWorkshopsByTaluk } from '../assets/login'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import shop1 from '../assets/hotel1.jpg'
const District = () => {
    const { id } = useParams()
    const Navigate = useNavigate()
    const [sub, setSub] = useState(0)
    const [subclr, setSubClr] = useState(0)
    const [subVal, setSubVal] = useState("")


    return (
        <div>
            <div className='flex gap-4  items-center justify-center'>{
                keralaDistricts.map((item, index) => (
                    <div >
                        <h1 onClick={() => { { Navigate(`/district/${index}`); setSub(index) } }} className={` ${id == index ? "bg-gray-900 text-white" : "bg-gray-800/10"} px-2 py-1  rounded-2xl`}>{item}</h1>
                    </div>
                ))
            }</div>
            <div className='flex items-center py-7 justify-center gap-4'>
                {subdis.map((item, index) => {
                    if (item.name === keralaDistricts[sub]) {
                        return (
                            <div className='flex items-center justify-center gap-7' key={index}>
                                {/* Render when condition is true */}
                                {item.taluks.map((s, ind) => (

                                    <h1 onClick={() => {
                                        setSubClr(ind);
                                        setSubVal(s)
                                    }} className={`px-2 py-1 ${ind == subclr ? "bg-gray-900 text-white" : "bg-gray-800/10"}  rounded-2xl`}>{s}</h1>
                                ))}
                            </div>
                        );
                    }
                    // Return null to render nothing for false case
                    return null;
                })}
            </div>
            <div>
                <h1 className='font-semibold text-3xl py-4 text-center'>Vehicles</h1>

                {driversByTaluk
                    .filter(item => item.taluk === subVal)
                    .map(item => (
                        <div className='flex rounded-lg items-center pb-5 justify-center gap-4' key={item.taluk}>
                            {item.drivers.map(det => (
                                <div className='flex flex-col  rounded-lg items-center border-2 bg-black/10 border-black/20'>
                                    <div className='w-64 h-64 overflow-hidden rounded-lg border-2 border-black/60' key={det.id}>
                                        <img className='h-full w-full' src={det.image} alt={det.category} />
                                    </div>
                                    <div className='flex flex-col items-center '>
                                        <p>{det.name}</p>
                                        <p>{item.taluk}</p>
                                        <p>{det.phone}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>
            <div>
                <h1 className='font-semibold text-3xl py-4 text-center'>Shops</h1>

                {shopsByTaluk
                    .filter(item => item.taluk === subVal)
                    .map(item => (
                        <div className='flex items-center justify-center py-2  gap-4' key={item.taluk}>
                            {item.shops.map((shop, idx) => (
                                <div key={idx} className="p-2 w-64 h-52  text-black overflow-hidden rounded-lg gap-4 bg-gray-900/20 flex flex-col items-end justify-center">
                                    <img className='rounded-lg' src={shop1} alt="images of shop" />
                                    {shop}
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
            <div>
                <h1 className="font-semibold flex items-center justify-center text-3xl py-4 text-center">Hospitals</h1>
                {hospital
                    .filter(item => item.taluk === subVal)
                    .map(taluk => (
                        <div className='flex items-center justify-center p-2 gap-4 ' key={taluk.taluk}>
                            {taluk.hospitals.map(h => (
                                <div key={h.name} className="bg-white/10 shadow-md p-4 my-2 rounded-xl">
                                    <h2 className="text-xl font-semibold">{h.name}</h2>
                                    <p>📍 {h.place}</p>
                                    <p>🏥 {h.type}</p>
                                    <p>📞 {h.contact}</p>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
            <div>
                <h1 className="font-semibold flex items-center justify-center text-3xl py-4 text-center">
                    WorkShops
                </h1>

                {trvWorkshopsByTaluk
                    .filter(item => item.taluk === subVal)
                    .map(({ taluk, workshops }) => (
                        <div className="flex items-center justify-center p-2 gap-4" key={taluk}>
                            {workshops.map(w => (
                                <div
                                    key={w.name}
                                    className="bg-white/10 shadow-md p-4 my-2 rounded-xl w-60"
                                >
                                    <h2 className="text-xl font-semibold">{w.name}</h2>
                                    <p>📍 {w.place}</p>
                                    <p>🏷️ {w.type}</p>
                                    {w.contact && <p>📞 {w.contact}</p>}
                                </div>
                            ))}
                        </div>
                    ))}
            </div>






        </div>


    )
}

export default District