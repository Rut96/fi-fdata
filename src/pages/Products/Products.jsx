import { useEffect, useState } from 'react';
import './Products.css'
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { AddProduct } from '../../components/AddProduct/AddProduct';

export function Products() {

    const [products, setProducts] = useState(() => {
        const storedProducts = localStorage.getItem('products');
        return storedProducts ? JSON.parse(storedProducts) : [];
    });
    const [isPopup, setIsPopup] = useState(false);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
    }, [products]);

    function togglePopup() {
        setIsPopup(!isPopup)
    }

    function handleAddProduct(newProduct) {
        setProducts(prevProducts => [...prevProducts, newProduct])
    }

    function handleEditProduct(editedProduct) {
        const updatedProducts = products.map(p => 
            p.id === editedProduct.id 
                ? {...p, ...editedProduct}
                : p
        );
        
        setProducts(updatedProducts);
    }

    function handleDeleteProduct(prodId) {
        const filteredProducts = products.filter(p => p.id !== prodId);
        setProducts(filteredProducts);
    }


    return (
        <div className="Products">

            <div className="nav-products">
                <button onClick={togglePopup}>+</button>
            </div>

            {isPopup &&
                <div className="products-popup-overlay" onClick={togglePopup}>
                    <div className="products-popup-content" onClick={e => e.stopPropagation()}>
                        <AddProduct newProduct={handleAddProduct} />
                    </div>
                </div>
            }

            <div className="products-container">
                {products && products.length > 0 ? (
                    products.map(p => (
                        <ProductCard
                            key={p.id}
                            product={p}
                            handleDelete={handleDeleteProduct}
                            handleEdit={handleEditProduct}
                        />
                    ))
                ) : (
                    <div className="no-products">
                        No products Added
                    </div>
                )}
            </div>

        </div>
    );
}