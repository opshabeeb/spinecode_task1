import React from 'react'
import logo from '../../assets/images/spinelogo.png'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    const nav_titles=[
        {
            path:'/',display:'Home'
        },
        {
            path:'/About',display:'About'
        },
        {
            path:'/product',display:'Products'
        },
        {
            path:'/Services',display:'Services'
        },
        {
            path:'/contact',display:'Contact'
        }
    ]
  return (
    <header className='header'>
    <div className="container">
        <div className="nav_container">
            <div className="logo">
                <div className="logo-img">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="navigation">
                <ul className='menu'>
                   {
                nav_titles.map((item)=>(
                               
                               <li className='nav-item'><Link to={item.path}>{item.display}</Link></li>
                           ))
                        }  
                </ul>
            </div>
        </div>
    </div>
</header>
  )
}

export default Header