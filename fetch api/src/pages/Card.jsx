import { useEffect, useState } from "react"
import './card.css'


const Card = () => {

    const [records, setRecord] = useState([])

    const fetchdeta = () => {
        fetch('https://dummyjson.com/products?sortBy=title&order=asc')
            .then(response => response.json())
            .then(data => setRecord(data.products))
    }

    useEffect(() => {
        fetchdeta()
    }, [])

    return (
        <div>
            <h1>Product API Using Fetch Method</h1>
            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Rating</th>
                        <th>Stock</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((val) => {
                            const { id, thumbnail, title, price, stock, rating } = val;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td><img src={thumbnail} /></td>
                                    <td>{title}</td>
                                    <td>{rating}</td>
                                    <td>{stock}</td>
                                    <td>{price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Card

