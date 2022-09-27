import { useMemo, useState, useRef } from "react";

function UseMemo() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);
    const nameRef = useRef()

    const handleClickAdd = () => {
        setProducts([...products, {
            name,
            price: parseInt(price)
        }])

        setName('')
        setPrice('')
        nameRef.current.focus()
    }
    const total = useMemo(() => {
        const total = products.reduce((result, prod) => {
            console.log("lặp")
            result = result + prod.price
            return result;
        }, 0)
        return total;
    }, [products])

    return (
        <div style={{ padding: '10px 30px' }}>
            <input
                ref={nameRef}
                value={name}
                placeholder="Enter name..."
                onChange={(e) => setName(e.target.value)}
            />
            <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleClickAdd}>Add</button>
            <br />
            ToTal:{total}
            {
                products.map((product, index) => (
                    <li key={index}>
                        {product.name}-{product.price}
                    </li>
                ))
            }

        </div>


    );
}
export default UseMemo;