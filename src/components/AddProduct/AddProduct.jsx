import { useForm } from 'react-hook-form';
import './AddProduct.css';

export function AddProduct({newProduct}) {

    const { handleSubmit, register, reset } = useForm();

    function send(data) {
        
        if(!data.title.trim() || !data.body.trim()) return;
        const newData = {
            id: Date.now(),
            title: data.title,
            body: data.body,
            createdAt: Date.now().toString()
        }
        newProduct(newData);
        reset();
    }

    return (
        <div className="AddProduct">
            <h1>Add new product</h1>
            <form onSubmit={handleSubmit(send)}>
                <input
                    type="text"
                    id='productName'
                    placeholder='Product name'
                    {...register('title')}
                    required
                />

                <input
                    type="text"
                    id='productBody'
                    placeholder='Product body'
                    {...register('body')}
                    required
                />

                <button type='submit'>Do it!</button>

            </form>
        </div>
    );
}