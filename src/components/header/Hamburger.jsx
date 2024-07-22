import { useState } from "react"
import './Hamburger.css'
export default function Hamburger() {
    const [menuChange, setMenuChange] = useState("change");
    const [disNone, setDisNone] = useState('none')
    const [activlink, setActivelink] = useState('home')

    const chnageHamber = () => {

        if (menuChange === '') {
            setMenuChange('change');
            setDisNone('none')
        } else {
            setMenuChange('');
            setDisNone('block')
        }
    };
    const changClose = () => {
        if (menuChange === 'chamge') {
            setMenuChange('');
            setDisNone('none');
        }

    }
    return (
        <div>
            <div className="nav-hamber-menu" onClick={chnageHamber} >

                <div className={` ${menuChange ? '' : 'change'} line-one`}></div>
                <div className={` ${menuChange ? '' : 'change'} line-two`}></div>
                <div className={` ${menuChange ? '' : 'change'} line-three`}></div>

            </div>
            <div className="black-plate" style={{ display: disNone }} onClick={chnageHamber} ></div>
            <div className={` ${menuChange ? '' : 'change'} hambur-slide`} style={{ display: disNone }} onClickCapture={changClose} >
                <ul className="list-menu">
                    <li><a className={activlink === 'home' ? 'active' : ''} href="#" onClick={() => setActivelink('home')}>หน้าหลัก</a></li>
                    <li> <a className={activlink === 'about' ? 'active' : ''} href="#about" onClick={() => setActivelink('about')}>เกี่ยวกับเรา</a></li>
                    <li><a className={activlink === 'plan' ? 'active' : ''} href="#plan" onClick={() => setActivelink('plan')}>แบบบ้าน</a></li>
                    <li> <a className={activlink === 'working' ? 'active' : ''} href="#working" onClick={() => setActivelink('working')}>ผลงานของเรา</a></li>
                    <li> <a className={activlink === 'contac' ? 'active' : ''} href="#contact" onClick={() => setActivelink('contact')}>ติดต่อเรา</a></li>
                </ul>
                <div className="hambur-slide-icon">
                    <a href="https://www.facebook.com/profile.php?id=100069528232259" target="_blank"> <img className="ham-icon-facebook" src="/image/icon/icons8-facebook-48.png" alt="" /> </a>
                    <a href="https://line.me/ti/p/sFOZ0T8Mes" target="_blank"> <img className="ham-icon-line" src="/image/icon/social-line-100px.png" alt="" /> </a>
                </div>
            </div>
        </div>
    )
}