import { useEffect } from 'react';
import './Contact.css'
import Form from './Form.jsx'
import Aos from 'aos'
import 'aos/dist/aos.css';
export default function Contact() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='contact-container'>
            <div className='contact-text'>
                <p data-aos="fade-up" data-aos-duration="1000" className='contact-text-title'>ติดต่อสอบถาม</p>
            </div>
            <div className='contact'>
                <div data-aos="fade-down" data-aos-duration="1000" className="contact-form">
                    <Form />
                </div>
                <div className="contact-map">
                    <p className='text-map'>Map</p>
                    <iframe data-aos="fade-up" data-aos-duration="1000" className='map' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3826.0302085856565!2d102.85708707514465!3d16.474007984265754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI4JzI2LjQiTiAxMDLCsDUxJzM0LjgiRQ!5e0!3m2!1sen!2sth!4v1698991140480!5m2!1sen!2sth" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>


            <div className="contact-media-container">

                <ul data-aos="fade-up" data-aos-duration="1000" className="contact-media-socie">
                    <li><img src="/image/society/viber 1.png" alt="" />Mobile : 085-545-9598</li>
                    <li><img src="/image/society/facebook (6) 1.png" alt="" />Facebook : รับสร้างบ้านขอนแก่น S-House Design</li>
                    <li><img src="/image/society/line (3) 1.png" alt="" />Line ID : Suriyo.k</li>
                    <li><img src="/image/society/apple (1) 1.png" alt="" />Email : suriyo.civil@gmail.com </li>
                </ul>

                <div data-aos="fade-down" data-aos-duration="1000" className='contact-adress'>
                    <img className='ct-ad-logo' src="/image/Group 18.png" alt="" />
                    <div className='cntact-adres-text-con'>
                        <p className='cntact-adres-text'>ห้างหุ้นสำว่นจำกัด เอส-เฮ้าส์ ดีไซน์</p>
                        <p className='cntact-adres-text'>241  ม.28  ตำบลศิลา  อำเภอเมืองขอนแก่น  จังหวัดขอนแก่น  40000</p>
                    </div>

                    <ul className='cntact-adres-list1'>
                        <li>รับออกแบบบ้าน</li>
                        <li>รับต่อเติมบ้าน</li>
                        <li>รับก่อสร้างบ้าน</li>
                        <li>บ้านมือสอง</li>
                    </ul>
                    <ul className='cntact-adres-list2'>
                        <li>รีโนเวทบ้าน</li>
                        <li>ขายบ้าน</li>
                        <li>จัดหาที่ดิน</li>
                        <li>รับซ่อมแซมบ้าน</li>
                    </ul>
                </div>


            </div>


        </div>
    )
}