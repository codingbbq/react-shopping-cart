function ProductPage({ state, dispatch }) {
    console.log(state);
    const { products, cart } = state;
    return (
        <>
            <h3>Products</h3>
            <div className="row">
                {
                    products.map((item) => {
                        // Check if the Product is in the cart, if yes, then show the remove from cart button
                        const isInCart = cart.some((c) => c.id === item.id);
                        return (
                            <div className="col-lg-4 mb-3 d-flex align-items-stretch" key={item.id}>
                                <div className='card'>
                                    <img src={item.thumbnail} className="card-img-top img-fluid img-thumbnail" style={{height: '200px', objectFit: 'cover'}} alt={item.description} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{`${item.description.slice(0, 200)}${item.description.length > 200 ? '...' : ''}`}</p>

                                        {isInCart ? 
                                        (
                                            <button className="btn btn-outline-danger btn-sm w-100  mt-auto align-self-start" onClick={() => dispatch({
                                                type: 'REMOVE_FROM_CART',
                                                payload: {
                                                    id: item.id
                                                }
                                            })}>Remove from Cart</button>
                                        ) : 
                                        (<button className="btn btn-outline-success btn-sm w-100  mt-auto align-self-start" onClick={() => dispatch({
                                            type: 'ADD_TO_CART',
                                            payload: {
                                                ...item, qty: 1
                                            }
                                        })}>Add to Cart</button>)}


                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    );
}

export default ProductPage;