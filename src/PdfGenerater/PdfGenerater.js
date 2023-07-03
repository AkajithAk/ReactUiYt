import React from "react";
import './PdfGenerater.css'
import { jsPDF } from "jspdf";

function PdfGenerater(){

    const jspdf = new jsPDF('p','pt','letter')

    const handleSubmit = (e) =>{
        e.preventDefault()
        const val = e.target.txt.value;

        const data = {
            callback:function(jspdf){
                jspdf.save('demo.pdf')
            },
            margin:[10,10,10,10],
            autoPaging:'text'
        }

        jspdf.html(val,data)
    }

    return(
        <div>

            <form onSubmit={(e)=>handleSubmit(e)}>
                <textarea className="txt" name="txt" /> <br/>
                <button>Generate</button>
            </form>
           
        </div>
    )
}
export default PdfGenerater;