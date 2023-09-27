import React from 'react';
import './DynamicRouting.css'
import { useNavigate } from 'react-router-dom';


function PageOne(){

    const navigate = useNavigate()
    
    const data = [
        {
            title:"React js",
            desc:"React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance."
        },
        {
            title:"Javascript",
            desc:"JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS."
        },
        {
            title:"Javascript1",
            desc:"JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS."
        },
        {
            title:"Javascript2",
            desc:"JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS."
        }
    ]


    const handleClick= (value)=>{
        console.log(value)
        navigate(`/${value.title}`,{state:value})
    }
    
    return(
        <div className='routingBody'>
            <div>
            {
                data.map((val,i)=><div key={i} className='cards' onClick={()=>handleClick(val)}>{val.title}</div>)
            }
            </div>
        </div>
    )
}
export default PageOne;