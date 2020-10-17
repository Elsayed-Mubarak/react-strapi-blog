import React, { useEffect, useRef, useState } from 'react';

import User from './hoocks/user'

function AppHoocks() {

    const [counter, setCounter] = useState(0);
    const inputRef = useRef();

    let handelChaange = (e) => {
        console.log(e.target.value);
    }
    //replaced component didmount and didupdate
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div className="AppTest">
            <span ><h1>{counter}</h1></span>
            <input type="text" ref={inputRef} onChange={handelChaange} />
            <button onClick={() => setCounter(counter + 1)} ></button>
            <User uInput={counter} />
        </div>

    );
}

export default AppHoocks;