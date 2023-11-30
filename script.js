const getMatrix = ()=>{
    const table = document.getElementById("inputMatrix")
    // console.log(table.rows)
    const values = []

    for (let i = 0; i < table.rows.length; i++) {
        values[i] = []

        for (let j = 0; j < table.rows[i].cells.length ; j++) {
            const input = table.rows[i].cells[j].querySelector('input')
           
            values[i][j] = parseInt(input.value)
            
        }
        
    }
    console.log(values)
}


const calculate = ()=>{
    getMatrix()
}