import { useLocation } from "react-router-dom";

function AboutPage(){

    const value = useLocation()

    console.log(value)
    return(
        <div>
            About PAge
        </div>
    )
}

export default AboutPage;