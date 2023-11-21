import { NavLink } from "react-router-dom";

function Sidebar(){
    return(
        <>
            <div className="row">
            <ul className="list-unstyled sidebar ">
                <li>
                    <NavLink to="products">get All Products</NavLink>
                </li>
                <li>
                    <NavLink to="products/categories">get All Categories</NavLink>
                </li>
            </ul>
            </div>
        </>
    )
}

export default Sidebar;