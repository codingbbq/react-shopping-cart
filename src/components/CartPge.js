import { useEffect, useState } from 'react';

function CartPage({ state, dispatch }) {
    const { products, cart } = state;

    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0));
    }, [cart]);

    const handleQtyChange = (id, qty) => {
        dispatch({
            type: 'CHANGE_CART_QTY',
            payload: {
                id,
                qty
            }
        });
    }
    return (
        <>
            <div className="d-flex justify-content-between">
                <h3>Cart</h3>
                <h4>${total}</h4>
            </div>

            {
                cart.map((item) => {
                    return (
                        <div className='card mb-3' key={item.id}>
                            <div className='card-body'>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <img className='img-fluid' style={{ width: '200px', height: '100px', objectFit: 'cover' }} src={item.thumbnail} alt={item.description} />
                                    </div>
                                    <div className='d-flex align-items-end flex-column'>
                                        <h5 className='text-end'>{item.title}</h5>
                                        <div className="mt-auto d-flex align-items-end">
                                            <button className='btn btn-sm btn-outline-primary' onClick={() => handleQtyChange(item.id, item.qty + 1)}>+</button>
                                            <h6 className='p-2 m-0 d-inline'>{item.qty}</h6>
                                            <button className='btn btn-sm btn-outline-primary' onClick={() => handleQtyChange(item.id, item.qty - 1)}>-</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }

        </>
    );
}

export default CartPage;