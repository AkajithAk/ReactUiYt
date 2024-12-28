import React from 'react'
import './DynamicNestedMenu.css'

function DynamicNestedMenu() {
    const menu = [
        {
            id: 0,
            name: 'Home',
            child: []
        },
        {
            id: 1,
            name: 'Product',
            child: [
                {
                    id: 1.0,
                    cname: "One"
                },
                {
                    id: 1.1,
                    cname: "Two"
                }
            ]
        },
        {
            id: 2,
            name: 'Blog',
            child: [
                {
                    id: 2.0,
                   cname: "Three"
                }
            ]
        },
        {
            id: 3,
            name: 'Contact',
            child: []
        }
    ]
    return (
        <div>
            <div className='dMenu'>
                <div className='logo'>Coding Comics</div>
                {
                    menu.map(val=><div className='dChild'>
                        {val.name}
                        <div className='dSubChild'>
                            {
                                val.child.map(cmenu=><div>
                                    {cmenu.cname}
                                </div>)
                            }
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default DynamicNestedMenu