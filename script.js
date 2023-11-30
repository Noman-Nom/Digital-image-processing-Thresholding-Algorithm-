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
    console.log( "input matrix = " ,values)
    return values
}


const calculate = ()=>{

    const ThresholdValue = parseFloat(document.getElementById('ThresholdValue').value)
    console.log(ThresholdValue)
    const inputMatrix = getMatrix()

    // console.log(inputMatrix)
}