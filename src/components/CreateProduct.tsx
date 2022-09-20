import React, {useState} from 'react';
import {IProduct} from "../Types";
import axios from "axios";
import Error from "./Error";

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 1,
        count: 1
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

const CreateProduct = ({onCreate}: CreateProductProps) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const sumbitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }

        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    // const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     setValue(event.target.value)
    // }


    return (
        <form onSubmit={sumbitHandler}>
            <input
                className='border py-2 px-4 mb-2 w-full outline-0'
                type="text"
                placeholder='Enter product title'
                value={value}
                onChange={event => setValue(event.target.value)}
                // onChange={changeHandler}
            />

            {error && <Error error={error}/>}
            <button type='submit' className='py-2 px-4 border bg-blue-400 hover:text-white'>Enter</button>
        </form>
    );
};

export default CreateProduct;