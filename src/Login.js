import React, {useState} from "react";
import './Login.css'
const Login = () => {
    const [increase, SetIncrease] = useState(0)
    
    const handleIncrease = () => {
        SetIncrease(increase + 1)
    }

    const handle2 = () => {
        SetIncrease( increase - 1 )
    }
    return (
       
        <React.Fragment>
            <div className="body">
                <h1>{increase}</h1>
                <button onClick={handleIncrease}>+1</button> 
                <br />
                <br />
                <br />
                <button onClick={handle2}>-1</button>
                </div>
        </React.Fragment>
    )
}

export default Login;