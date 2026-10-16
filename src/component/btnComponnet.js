import react, { useState} from 'react'


function BtnComponent() {
    // const array = new Array(50).fill((el,i) => `text${i+1}`)
    const createArrayOf50Ele = () => {
        const arr = []
        for(let i =0; i <50; i++) {
            arr.push(`text${i+1}`)
        }
        return arr
    }
    const arr = createArrayOf50Ele()
    // const [arr, setArray] = useState(createArrayOf50Ele())
    const onParentClickHandler = (e) => {
        console.log(e)
        console.log(e.target.innerText)
    }
    console.log("arr", arr)
    return (
        <div onClick={onParentClickHandler}>
            {arr.map((el, index) => {
                return (
                    <button kay={index} >{el}</button>
                )
            })}
        </div>
    )
}

export default  BtnComponent;

// Int startTime[]={900,940,950,1100,1520,1800};
// Int endTime[]={910,1200,1120,1130,1900,2000};



function minRoomRequired(startTime, endTime) {
    let minRoom = 1;
    let pointer = 0;
    for(let i = 1; i <startTime.length; i++) {
        if(startTime[i] > startTime[pointer] && endTime[i] < endTime[pointer])
            minRoom = minRoom+1
        else {
            pointer = pointer+1
        }
    }
    console.log(minRoom)
}

minRoomRequired([900,940,950,1100,1520,1800],[910, 1200,1120,1130,1900,2000] )
























