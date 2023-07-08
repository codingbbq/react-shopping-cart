function Header() {
    return (
        <header className="py-3 mb-1">
            <div className="container-fluid d-grid gap-3 align-items-center" style={{ gridTemplateColumns: '1fr 2fr' }}>
                <h2>React shopping cart</h2>

                {/* <div className="d-flex align-items-center">
                    <form className="w-100 me-3" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                </div> */}
            </div>
        </header>
    )
}

export default Header;