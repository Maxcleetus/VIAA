import React from 'react'
import logo from '../assets/logo1.png'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <div className='flex justify-between py-4'>
            <div>
                <img className='w-48 h-24' src={logo} alt="" />
            </div>
            <div className='flex text-lg items-center gap-4 pb-6'>
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive
                            ? "font-semibold border-b-2 border-[#123F75]/50"
                            : "font-semibold"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/district"
                    className={({ isActive }) =>
                        isActive
                            ? "font-semibold border-b-2 border-[#123F75]/50"
                            : "font-semibold"
                    }
                >
                    Districts
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "font-semibold border-b-2 border-[#123F75]/50"
                            : "font-semibold"
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? "font-semibold border-b-2 border-[#123F75]/50"
                            : "font-semibold"
                    }
                >
                    Contact
                </NavLink>
            </div>
            <div>
                <input placeholder='Search districts....' className='px-4 py-2 border-2 border-[#123F75]/50 rounded-full' type="search" />
            </div>
        </div>
    )
}

export default NavBar