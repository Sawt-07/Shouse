import { useState } from 'react'
import './header.css'
import Hamburger from './Hamburger.jsx'
export default function Header() {
    const [actives, setActives] = useState('home');
    const styleactives = {
        borderBottom: "2px solid white!important"
    }
    function togleactive(menu) {
        setActives(menu);
    };
    return (
        <nav className="nav-warp">
            <div className="nav-container">
                <figure className="head-logo">
                    <img className="home-logo" src="/image/logo.png" alt="" />
                </figure>

                <div className="nav-menu-container">

                    <div className="nav-menu">
                        <a className={actives === 'home' ? 'active' : ''} href="#home" onClick={() => togleactive('home')}>หน้าหลัก</a>
                        <a className={actives === 'about' ? 'active' : ''} href="#about" onClick={() => togleactive('about')}>เกี่ยวกับเรา</a>
                        <a className={actives === 'plan' ? 'active' : ''} href="#plan" onClick={() => togleactive('plan')}>แบบบ้าน</a>
                        <a className={actives === 'working' ? 'active' : ''} href="#working" onClick={() => togleactive('working')}>ผลงานของเรา</a>
                        <a className={actives === 'contact' ? 'active' : ''} href="#contact" onClick={() => togleactive('contact')}>ติดต่อเรา</a>
                    </div>

                    <div className="nav-menu-icon">
                        <a href="https://www.facebook.com/profile.php?id=100069528232259" target="_blank"> <img className="icon-facebook" src="/image/icon/icons8-facebook-48.png" alt="" /> </a>
                        <a href="https://line.me/ti/p/sFOZ0T8Mes" target="_blank"> <img className="icon-line" src="/image/icon/social-line-100px.png" alt="" /> </a>

                    </div>
                    <div className="ham-container">
                        <Hamburger />
                    </div>


                </div>

            </div>
        </nav>
    )
}