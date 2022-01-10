import React from 'react'
import { Link
 } from 'react-router-dom'

 import logo from '../assets/images/Logo-2.png'
const mainNav = [
    {
        display: 'Trang Chủ',
        path: '/'
    },
    {
        display: 'Sản Phẩm',
        path: '/catalog'
    },
    {
        display: 'Phụ Kiện',
        path: '/accessories'
    },
    {
        display: 'Liên Hệ',
        path: '/contact'
    },
]

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="header_logo">
                    <Link to='./'>
                        <img src={logo} alt="" />
                     </Link>
                </div>
                <div className="header_menu">
                        <div className="header_menu_mobile-togge">
                            <i className="bx bx-menu-alt-left"></i>
                        </div>
                    <div className="header_menu_left">
                        
                        {
                            mainNav.map((item,index)=>(
                                <div key={index}className="header_menu_left_item">
                                    <Link to={item.path} >
                                        <span>{item.display}</span>
                                    </Link>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
