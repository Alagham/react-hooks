// import Bttn from "../src/comps/button" 

// const Bttn = () => {
//     return ( 
//         <Btn/>
//      );
// }
 
// export default Bttn ;
import {useState} from 'react'
function CountNumber(){
    const [number, setNumber] = useState(0);
        return(
            <div>
                <button onClick={() => setNumber(number + 1)}>+</button>
                <p> {number}</p>
                <button onClick={() => setNumber(number - 1)}>-</button>
            </div>
        )
    }
    export default CountNumber