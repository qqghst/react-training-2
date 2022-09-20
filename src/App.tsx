import React, {useState} from 'react';
import Product from "./components/Product";
import {useProducts} from "./hooks/Products";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";
import product from "./components/Product";
import {IProduct} from "./Types";


function App() {
    const {products, loading, error, addProduct} = useProducts()
    const [modal, setModal] = useState(true)

    const createHandler = (product: IProduct) => {
        setModal(false)
        addProduct(product)
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {error && <Error error={error}/>}
            {loading && <Loader/>}
            {products.map(product => <Product key={product.id} product={product}/>)}

            {modal && <Modal title="Modal" onClose={() => setModal(false)}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}

            <button
                className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
                onClick={() => {setModal(true)}}
            >+</button>
        </div>
    )
}

export default App;
