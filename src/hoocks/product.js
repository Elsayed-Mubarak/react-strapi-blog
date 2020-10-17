import React from 'react';

const Product = (props) => {
    const uInput = props.uInput;
    return (
        <div>{uInput} {console.log("im on product", uInput)}</div>
    );

}

export default Product;
