import React from 'react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

function CreatePdfTable() {
    // npm install jspdf jspdf-autotable
    const data = [
        {
          "id": "1",
          "Name": "Johnson",
          "Phone": "9890987890",
          "Email": "akajith919@gmail",
          "Joined": "2024-03-09",
          "Tot_amt": "4000",
          "Paid_amt": "4000"
        },
        {
          "id": "2",
          "Name": "vishal",
          "Phone": "9876567890",
          "Email": "akajith919@gmail.com",
          "Joined": "2024-03-23",
          "Tot_amt": "5600",
          "Paid_amt": "500"
        },
        {
          "id": "2",
          "Name": "vishal",
          "Phone": "9876567890",
          "Email": "akajith919@gmail.com",
          "Joined": "2024-03-23",
          "Tot_amt": "5600",
          "Paid_amt": "500"
        }
        
      ];

      const handleGenerate = () =>{
        const doc = new jsPDF()
        const title = "PDF Demo"
        const padding = 10
        const titleWidth = doc.getTextWidth(title)
        const center = (doc.internal.pageSize.width / 2) - (titleWidth / 2)
        doc.setTextColor('red')
        doc.text(title,center,padding)

        doc.autoTable({
            head:[['Id','Name','Phone','Email','Joined','Tot_amt','Paid_amt']],
            body: data.map((val,i)=>[i+1,val.Name,val.Phone,val.Email,val.Joined,val.Tot_amt,val.Paid_amt]),
            columnStyles:{
                0:{cellWidth:10},
                1:{cellWidth:35},
                2:{cellWidth:25},
                3:{cellWidth:45},
                4:{cellWidth:30},
                5:{cellWidth:20},
                6:{cellWidth:20},
            },
            headStyles:{
                fillColor: "red",
                textColor: "white"
            }
        })

        doc.save('demoPDF.pdf')
      }

  return (
    <div>
       <button onClick={handleGenerate}>Generate PDF</button> 
    </div>
  )
}

export default CreatePdfTable