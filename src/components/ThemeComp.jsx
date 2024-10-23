"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";



const ThemeComp = () => {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const themeMode = theme === "system" ? systemTheme : theme;
    return (


        <div>

            {
                mounted && (
                    themeMode === "dark" ?
                        <FaSun onClick={() => setTheme('light')} size={25} className='curcor-pointer' /> :
                        <MdOutlineDarkMode onClick={() => setTheme('dark')} size={25} className='curcor-pointer' />

                )
            }



        </div>
    )
}

export default ThemeComp