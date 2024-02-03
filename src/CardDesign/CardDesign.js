import React from 'react'
import './CardDesign.css'
import active from './Images/member.png'
import trainee from './Images/trainer.png'
import revenue from './Images/revenue.png'

function CardDesign() {
    
  return (
    <div>
        <div className='mainCardContainer'>
            <div style={{background:"#c345fd"}} className='cardContainer'>
                <div>
                    <img src={active} height='40px' />
                    <div className='caredName'>Active<br/>Member</div>
                    <div className='cardValue'>2</div>
                    <div className='circleOne'></div>
                    <div className='circleTwo'></div>
                </div>
            </div>
            <div style={{background:"#2fc5ff"}} className='cardContainer'>
                <div>
                    <img src={active} height='40px' />
                    <div className='caredName'>Active<br/>Member</div>
                    <div className='cardValue'>2</div>
                    <div className='circleOne'></div>
                    <div className='circleTwo'></div>
                </div>
            </div>
            <div style={{background:"#04f6cd"}} className='cardContainer'>
                <div>
                    <img src={active} height='40px' />
                    <div className='caredName'>Active<br/>Member</div>
                    <div className='cardValue'>2</div>
                    <div className='circleOne'></div>
                    <div className='circleTwo'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardDesign