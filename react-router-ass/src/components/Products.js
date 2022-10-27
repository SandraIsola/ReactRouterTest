import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
    return (
        <>
        <div>
            <input type='search' placeholder="Search Products" />
        </div>
        <nav>
        <Link to='groceries'>Groceries</Link>
        <Link to='cosmetics'>Cosmetics</Link>
        </nav>
        <Outlet />
        </>
    )
}