import React, {useState} from 'react';
import {IProduct} from "../Types";

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {
    const [details, setDetails] = useState(false);

    const buttonChangeColor = details ? 'py-2 px-4 border bg-yellow-200' : 'py-2 px-4 border bg-blue-200'

    return (
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img className='w-1/6' src={product.image} alt={product.title}/>
            <p className='py-4'>{product.title}</p>
            <p className='font-bold'>{product.price}</p>
            <button
                className={buttonChangeColor}
                onClick={() => setDetails(prevState => !prevState)}
            >
                {details ? 'Hide Info ▲' : 'Show Info ▼'}
            </button>

            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
            </div>}
        </div>
    );
};

export default Product;