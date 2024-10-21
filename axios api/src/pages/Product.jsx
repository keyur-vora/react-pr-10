import axios from "axios";
import { useEffect, useState } from "react";
import './product.css'; // Optional: for external styling

const Product = () => {
    const [products, setProducts] = useState([]);

    const getRecord = async () => {
        try {
            let { data } = await axios.get('https://dummyjson.com/products/search?q=phone');
            setProducts(data.products);
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    useEffect(() => {
        getRecord();
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Product API Using Axios Method</h2>
            <div className="product-container">
                {
                    products.map((val) => {
                        const { id, title, description, price, thumbnail } = val
                        return (
                            <div key={id} className="product-card">
                                <img src={thumbnail} alt={title} className="product-image" />
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <p><strong>Price:</strong> ${price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product;
