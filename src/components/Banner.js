import React from "react";
import "../styles/Banner.css"
import logo from '../assets/logo.png'

function Banner({children}) {
    const title = "La maison jungle"
    return <div className='lmj-banner'>{children}</div>
}

export default Banner