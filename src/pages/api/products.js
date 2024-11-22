// src/pages/api/products.js
export default function handler(req, res) {
    const products = [
        { id: 1, name: "Product A", price: 10 },
        { id: 2, name: "Product B", price: 20 },
        { id: 3, name: "Product C", price: 30 },
    ];

    res.status(200).json(products);
}
