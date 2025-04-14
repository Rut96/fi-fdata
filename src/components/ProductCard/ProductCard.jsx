import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import './ProductCard.css';
import { useState } from 'react';

export function ProductCard({ product, handleDelete, handleEdit }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(product.title);
    const [editedBody, setEditedBody] = useState(product.body);

    function handleDeleteProduct() {
        handleDelete(product.id);
    }

    function handleEditProduct() {
        // handleEdit(product.id);
        if (isEditing) {
            const editedProduct = {
                id: product.id,
                title: editedTitle,
                body: editedBody,
                createdAt: product.createdAt
            }
            handleEdit(editedProduct)
        }
        setIsEditing(!isEditing);
    }

    return (
        <div className="ProductCard">
            {!isEditing ? (
                <div className="product-container">
                    <div className="product-header">
                        <div className="product-title">
                            {product.title}
                        </div>

                        <div className="product-settings">
                            <EditIcon className='set edit' onClick={handleEditProduct} />
                            <DeleteOutlineIcon className='set delete' onClick={handleDeleteProduct} />
                        </div>
                    </div>

                    <div className="product-body">
                        {product.body}
                    </div>
                </div>
            ) : (
                <div className="product-edit">
                    <div className="product-header">
                        <div className="product-title">
                            <input
                                type="text"
                                value={editedTitle}
                                onChange={(e) => { setEditedTitle(e.target.value) }}
                                placeholder="Title"
                                autoFocus
                            />
                        </div>
                        <div className="product-settings">
                            <EditIcon className='set edit' onClick={handleEditProduct} />
                            <DeleteOutlineIcon className='set delete' onClick={handleDeleteProduct} />
                        </div>
                    </div>
                    <div className="product-body">
                        <textarea
                            type="text"
                            value={editedBody}
                            onChange={(e) => { setEditedBody(e.target.value) }}
                            placeholder="Description"
                        />
                    </div>
                </div>
            )}






        </div>
    );
}