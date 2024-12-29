import React, { useState } from 'react'
import DataTable from 'react-data-table-component'

function DataTables() {
    const [value,setValue] = useState('')
    
    const data = [
        { id: 1, title: 'Conan the Barbarian', year: '1982' },
        { id: 2, title: 'The Terminator', year: '1984' },
        { id: 3, title: 'Predator', year: '1987' },
        { id: 4, title: 'RoboCop', year: '1987' },
        { id: 5, title: 'Die Hard', year: '1988' },
        { id: 6, title: 'Total Recall', year: '1990' },
        { id: 7, title: 'Terminator 2: Judgment Day', year: '1991' },
        { id: 8, title: 'Jurassic Park', year: '1993' },
        { id: 9, title: 'The Matrix', year: '1999' },
        { id: 10, title: 'Gladiator', year: '2000' },
        { id: 11, title: 'The Lord of the Rings: The Fellowship of the Ring', year: '2001' },
        { id: 12, title: 'The Dark Knight', year: '2008' },
        { id: 13, title: 'Inception', year: '2010' },           
      ];

      const filterData = data.filter(val=>val.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()))

      const columns = [
        {
            name:'Title',
            selector: row => row.title,
            sortable: true
        },
        {
            name:'Year',
            selector: row => row.year,
            sortable: false
        }
      ]

      const customStyles = {
        header: {
            style:{
                fontSize:"2rem",
                color:"green",
            }
        },
        headCells: {
            style:{
                fontSize:"1.5rem",
                backgroundColor:"#e0e0e0"
            }
        },
        cells: {
            style:{
                fontSize:"1rem",
            }
        }
      }
    

  return (
    <div>
        <input name="search" value={value} onChange={(e)=>setValue(e.target.value)} />
        <DataTable
            title="Movie"
            columns={columns}
            data={filterData}
            customStyles={customStyles}
            pagination
        />
    </div>
  )
}

export default DataTables