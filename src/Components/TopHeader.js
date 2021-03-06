import React from 'react'
import { useSelector } from 'react-redux'

export default function TopHeader() {

    const cartCount = useSelector((state) => state.cart.cartItemCount)

    return (
        <nav className="navbar navbar-expand-lg navbar-light py-1 bg-dark-blue">

            <a className="navbar-brand" href="#">
                <img src="./assets/images/logo.png" alt="Vatan Computer" width="162" className="d-inline-block align-text-top" />
            </a>
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link text-light" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-bars"></i> <span className="ms-1">Kategoriler</span>
                    </a>
                </li>
            </ul>
            <form className="search-form d-flex mx-5">
                <input className="form-control border-0" id="search-bar" type="search" placeholder="Ürün Ara" aria-label="Search" />
                <i className="fas fa-search position-absolute fa-lg text-white"></i>
            </form>
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link text-light d-flex" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="my-auto">Üyelik</span> <i className="fas fa-user-circle fa-lg my-auto ms-2"></i>
                    </a>
                </li>
            </ul>
            <ul className="navbar-nav ms-3">
                <li className="nav-item dropdown">
                    <a className="nav-link text-light" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="my-auto">Sepetim</span> <i className="fas fa-shopping-cart fa-lg my-auto ms-2 "></i>
                        {cartCount > 0 ? <span className="badge bg-danger rounded-circle position-absolute " style={{ width: '27px', height: '26px', fontSize: '1.1rem', top: '-10px' }}> {cartCount} </span> : ''}
                    </a>
                </li>
            </ul>
        </nav>
    )
}
