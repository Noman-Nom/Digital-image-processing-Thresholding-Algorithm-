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

   const resultMatrix =  inputMatrix.map((rows)=>(
                rows.map((value)=>{

                    // console.log(`${value} / 255  = ${value/255}`)
                    // value = (value/255).toFixed(2);
                    console.log(value)
                   

                    if (value <= ThresholdValue) {
                        value = 0
                        
                    }else{
                        value = 1
                    }

                    // console.log("calculated result = " , value)
                    return value

                })
    ))

    console.log( "Result Matrix",resultMatrix)

    dispalyMatrix('resultMatrix' , resultMatrix)
}

const dispalyMatrix = (resultMatrix , result)=>{

    const finalMatrix = document.getElementById(resultMatrix)
    console.log(finalMatrix)


    while(finalMatrix.rows.length>0){
        finalMatrix.deleteRow(0)
    }

    for (let i = 0; i < result.length; i++) {
        const row = finalMatrix.insertRow(i)

        for (let j = 0; j < result[i].length; j++) {
            const col = row.insertCell(j)

            col.appendChild(document.createTextNode(result[i][j]))
            
        }
        
    }

}