import React, { useState } from 'react'
import './Menu.css'
import logo from './Assets/logo.PNG'
import more from './Assets/more.jpg'
import Component from './Component'

function Menu() {
    const [show,setShow] = useState(false)
    const [active,setActive] = useState('Home')
     
  return (
    <div>
        <div>
            {
                window.innerWidth <800?
                <img onClick={()=>setShow(true)} src={more} />:''
            }
        </div>
        {
            window.innerWidth >800 || show && window.innerWidth <800 ?
            <div className='main'>
                {show && window.innerWidth <800?
                    <span onClick={()=>setShow(false)}>X</span>:''
                }
                <div className='menu'>
                    <div className='imgC'>
                        <img src={logo} />
                    </div>
                    <ul>
                        <li className={active =='Home' ?'active':''} onClick={()=>setActive('Home')}>Home</li>
                        <li className={active =='About' ?'active':''} onClick={()=>setActive('About')}>About</li>
                        <li className={active =='Education' ?'active':''} onClick={()=>setActive('Education')}>Education</li>
                        <li className={active =='Contact' ?'active':''} onClick={()=>setActive('Contact')}>Contact</li>
                        <li className={active =='Help' ?'active':''} onClick={()=>setActive('Help')}>Help</li>
                    </ul>
                </div>
            </div>
        :''}
        <Component val={active} />
    </div>
  )
}

export default Menu