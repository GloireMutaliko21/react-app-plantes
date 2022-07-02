import React from 'react'
import { useState } from 'react'
import '../styles/Footer.css'


function Footer() {
    const [inputValue, setInputValue] = useState('')

    function handlerInput(e) {
        setInputValue(e.target.value)
    }

    function handlerBlur(e) {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@ ! Ce n'est pas un mail valide")
        }
    }
    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input
                value={inputValue}
                onChange={handlerInput}
                onBlur={handlerBlur}
                placeholder="Votre mail"
            />
        </footer>
    )
}

export default Footer