import React from 'react'
import hero from '../assets/hero1.png'
import { useNavigate } from 'react-router-dom'
import { Book, Candy, Castle, Coffee, CookingPot, Drum, Hexagon, LanguagesIcon, Mountain, Sailboat, Scale, TowerControl, Train, Volleyball, Waves } from 'lucide-react'

const Home = () => {
    const Navigate = useNavigate()
    return (
        <div>
            <div className="bg-black/10 rounded-4xl p-6">
                <div className="flex items-center justify-center p-10">
                    <div className='flex flex-col items-center justify-start'>
                        <h1 className="text-5xl font-bold tracking-normal text-[#123F75] w-3/4">
                            Tired of Juggling Between Apps For Every Ride?
                        </h1>
                        <p className="mt-4 w-3/4 text-xl md:text-2xl text-gray-700 font-light italic text-left">
                            “Your Journey. Your Choice. All in One Tap.”
                        </p>
                    </div>
                    <img src={hero} alt="Hero" className="w-[600px]" />
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex justify-start items-start py-6 gap-4  max-w-[800px] no-scrollbar overflow-x-scroll'>
                    <div onClick={()=>Navigate('/district/0')} className='flex justify-center w-[80px] flex-col items-center rounded-full bg-[#123F75]/10 p-4 px-6'>
                        <Scale size={32} />
                        <p>TVM</p>
                    </div>
                    <div onClick={()=>Navigate('/district/1')} className='flex justify-center w-[80px] flex-col items-center rounded-full bg-[#123F75]/10 p-4 px-6'>
                        <TowerControl size={32} />
                        <p>KLM</p>
                    </div>
                    <div onClick={()=>Navigate('/district/2')} className='flex justify-center w-[80px] flex-col items-center rounded-full bg-[#123F75]/10 p-4 px-6'>
                        <Hexagon size={32} />
                        <p>PTA</p>
                    </div>
                    <div onClick={()=>Navigate('/district/3')} className='flex justify-center w-[80px] flex-col items-center rounded-full bg-[#123F75]/10 p-4 px-6'>
                        <Sailboat size={32} />
                        <p>ALP</p>
                    </div>
                    <div onClick={()=>Navigate('/district/4')} className='flex justify-center w-[80px] flex-col items-center rounded-full bg-[#123F75]/10 p-4 px-6'>
                        <Book size={32} />
                        <p>KTM</p>
                    </div>
                    <div onClick={()=>Navigate('/district/5')} className='flex justify-center w-[80px] flex-col items-center rounded-full bg-[#123F75]/10 p-4 px-6'>
                        <Coffee size={32} />
                        <p>IDK</p>
                    </div>
                    <div onClick={()=>Navigate('/district/6')} className='flex justify-center w-[80px] flex-col items-center rounded-full bg-[#123F75]/10 p-4 px-6'>
                        <Train size={32} />
                        <p>EKM</p>
                    </div>
                    <div onClick={()=>Navigate('/district/7')} className='flex justify-center w-[80px] flex-col items-center rounded-full bg-[#123F75]/10 p-4 px-6'>
                        <Drum size={32} />
                        <p>TSR</p>
                    </div>
                    <div onClick={()=>Navigate('/district/8')} className='flex justify-center  w-[80px] flex-col items-center rounded-full bg-[#123F75]/10 p-4 px-6'>
                        <Castle size={32} />
                        <p>PLKD</p>
                    </div>
                    <div onClick={()=>Navigate('/district/9')} className='flex justify-center  w-[80px] flex-col items-center rounded-full bg-[#123F75]/10 p-4 px-6'>
                        <Volleyball size={32} />
                        <p>MLP</p>
                    </div>
                    <div onClick={()=>Navigate('/district/10')} className='flex justify-center  w-[80px] flex-col items-center rounded-full bg-[#123F75]/10 p-4 px-6'>
                        <Candy size={32} />
                        <p>KKD</p>
                    </div>
                    <div onClick={()=>Navigate('/district/11')} className='flex justify-center  w-[80px] flex-col items-center rounded-full bg-[#123F75]/10 p-4 px-6'>
                        <Mountain size={32} />
                        <p>WYD</p>
                    </div>
                    <div onClick={()=>Navigate('/district/12')} className='flex justify-center  w-[80px] flex-col items-center rounded-full bg-[#123F75]/10 p-4 px-6'>
                        <CookingPot size={32} />
                        <p>KNR</p>
                    </div>
                    <div onClick={()=>Navigate('/district/13')} className='flex justify-center  w-[80px] flex-col items-center rounded-full bg-[#123F75]/10 p-4 px-6'>
                        <Waves size={32} />
                        <p>KSR</p>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default Home