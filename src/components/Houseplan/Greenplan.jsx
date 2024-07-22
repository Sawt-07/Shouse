import './Greenplan.css';
import { greenData } from './data/Greendata';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
export default function Greenplan() {
    useEffect(() => {
        Aos.init();
    }, [])
    const [mainimg, setMainimg] = useState("/image/imagehouseNEW/house/housecenter-2.jpg");
    const [open, setOpen] = useState(false);
    function handleOpen() {
        setOpen(true);


    }
    const handleClose = () => setOpen(false);
    return (
        <div className="greenplan-wrap">
            <div data-aos="fade-down" data-aos-duration="1000" className="greenplan-container">
                <figure className="img-planhouse">
                    <img src="/image/imagehouseNEW/p-0.jpg" alt="" />
                </figure>
                <div className="greenplan-text">
                    <p className='green-title'>แบบบ้าน 2 ชั้นสไตล์ Loft ผสมผสาน Luxury</p>
                    <div className="green-title1">
                        <p>Detail :  </p>
                        <p>  5 ห้องนอน 3 ห้องน้ำ 1 ห้องโถง 1 ห้องรับแขก 1 ห้องทำงาน 1 ห้องทานอาหาร<br></br>
                            1 ห้องครัวฝรั่ง พื้นที่จอดรถ 2 คัน  </p>
                    </div>
                    <p className='text1'>Square meters:
                        220 ตร.ม.</p>
                    <ul>
                        <li>ฟรี ตอกเสาเข็ม</li>
                        <li>ฟรี ระบบกำจัดปลวก 3 ปี</li>
                        <li>ฟรี เทพื้นทางเดินรอบบ้าน 1 เมตร</li>
                        <li>ฟรี ฝ้าหลุมเลือกลวดลายได้ 1 ห้อง</li>
                        <li>ฟรี แผ่นสะท้อนความร้อนใต้แผ่นหลังคา</li>
                        <li>ฟรี ออกแบบห้องน้ำโดยสถาปนิกบริษัท</li>
                        <li>ฟรี ออกแบบภายในโซนห้องโถง</li>
                        <li>เคาเตอร์ครัวตามงบ</li>
                        <li>ติดตั้งปั้มถังน้ำ</li>
                        <li>ติดตั้งระบบไฟอัติโนมัติไม่ต้องคอยเปิดเอง</li>

                    </ul>
                    <button className='detall-btn' onClick={handleOpen}>Detall</button>
                </div>

            </div>
            {open && (

                <div className='grenplan-close-btn' onClick={handleClose}>
                    < HighlightOffIcon sx={{ color: "#fff", fontSize: "36px", position: "absolute", top: 0, right: 0 }} />
                </div>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <div className='popup' >
                    {greenData.map((data) => (

                        <div key={data.id} className='popup-container'>

                            <div className='popup-img'>
                                <div className='main-img'>
                                    <img src={mainimg} alt="" />
                                </div>
                                <div className='sub-img'>

                                    {data.subImage.map((image) => (

                                        <div key={image.id} className='sub-img-item' onClick={() => setMainimg(image.subImage)}>
                                            <img src={image.subImage} alt="" />
                                        </div>
                                    ))}

                                </div>
                                <div className='green-line'>
                                    <div className='green-line-item'></div>
                                </div>
                            </div>

                            <p className='popup-title'>{data.title}</p>

                            <div className='popup-des'>
                                <p>🌲{data.areadescription}</p>
                                {data.subdescription.map((item) => (
                                    <ul key={item.id} className='popup-des-list'>
                                        <li >{item.description}</li>

                                    </ul>
                                ))}

                            </div>
                            <div className='green-line-des'>
                                <div className='green-line-des-item'></div>
                            </div>
                            <div className='popup-text-1'>
                                <p>จองบ้านได้แล้ววันนี้ แถม<span>ฟรี!</span> </p>
                                <ul className='popup-text-list'>
                                    <li><span>ฟรี</span> ตอกเสาเข็ม</li>
                                    <li><span>ฟรี</span> ระบบกำจัดปลวก 3 ปี</li>
                                    <li><span>ฟรี</span> เทพื้นทางเดินรอบบ้าน 1 เมตร</li>
                                    <li><span>ฟรี</span> ฝ้าหลุมเลือกลวดลายได้ 1 ห้อง</li>
                                    <li><span>ฟรี</span> แผ่นสะท้อนความร้อนใต้แผ่นหลังคา</li>
                                    <li><span>ฟรี</span> ออกแบบห้องน้ำโดยสถาปนิกบริษัท</li>
                                    <li><span>ฟรี</span> ออกแบบภายในโซนห้องโถง</li>
                                    <li><span>ฟรี</span> เคาเตอร์ครัวตามงบ</li>
                                    <li><span>ฟรี</span> ติดตั้งปั้มถังน้ำ</li>
                                    <li><span>ฟรี</span> ติดตั้งระบบไฟอัติโนมัติไม่ต้องคอยเปิดเอง</li>
                                </ul>
                                <p>*งานของเรา Skim coat ทั้งหลัง</p>
                                <p>*โปรโมชันและราคาขึ้นอยู่กับแบบบ้าน และสเปคที่ลูกค้าเลือก</p>
                            </div>
                            <br />
                            <div className='popup-text-2'>
                                <p>🏠วัสดุ มาตรฐาน ต้องมี ม.อ.ก เท่านั้น</p>
                                <ul className='popup-text-list'>
                                    <li>คอนกรีตผสมเสร็จจากโรงงาน</li>
                                    <li>สีทาบ้าน TOA & Jotun</li>
                                    <li>กระเบื้องแกรนิตโต้เกรด A</li>
                                    <li>เหล็ก มอก.โรงงานเท่านั้น</li>
                                    <li>สุขภัณฑ์มาตรฐาน American,Cotto หรือยี่ห้อที่ลูกค้าชอบ</li>
                                    <li>หลังคากระเบื้องลอนหรือเรียบ SCG เท่านั้นตามแบบที่นำเสนอตอนแรก</li>
                                    <li>วัสดุประปา ท่อน้ำไทย SCG ยี่ห้อดีที่สุด</li>
                                    <li>วัสดุเกรดA</li>

                                </ul>

                            </div>
                            <div className='popup-text-3'>
                                <p>การรับประกันงาน</p>
                                <ul className='popup-text-list'>
                                    <li>งานโครงสร้างรับประกัน 20 ปี</li>
                                    <li>งานหลังคารับประกัน 10 ปี</li>
                                    <li>งานสถาปัตย์รับประกัน 1 ปี</li>

                                </ul>

                            </div>
                            <div className='green-line-des'>
                                <div className='green-line-des-item'></div>
                            </div>
                            <div className="popup-contact">
                                <p>ติดต่อสอบถามประเมินราคาเบื้องต้น ประเมินหน้างานฟรี</p>
                                <ul className='contact-social'>
                                    <li><img src="/image/society/facebook (1) 1.png" alt="" />https://www.facebook.com/profile.php?id=100069528232259</li>
                                    <li><img src="/image/society/line (7) 1.png" alt="" />ID : Suriyo.k
                                        https://line.me/ti/p/sFOZ0T8Mes</li>
                                    <li><img src="/image/society/phone-call (2) 1.png" alt="" />0855459598 คุณโย</li>
                                </ul>
                                <ul className='popup-contact-text'>
                                    <li>ดำเนินการด้านสินเชื่อ</li>
                                    <li>ดำเนินการยื่นขออนุญาตก่อสร้าง</li>
                                </ul>
                            </div>
                            <div className='text-footer'>
                                <p>#บริษัทรับสร้างบ้านขอนแก่น #บริษัทรับออกแบบบ้านขอนแก่น #สร้างบ้านขอนแก่น #ออกแบบบ้านขอนแก่น #บริษัทรับสร้างบ้าน #บริษัทรับออกแบบบ้านอีสาน #บริษัทรับสร้างบ้านภาคอีสาน #บริษัทรับสร้างบ้านคุณภาพ #บริษัทสร้างบ้านมาตรฐาน #บริษัทสร้างบ้านราคาประหยัด #ศูนยรับสร้างบ้านขอนแก่นและภาคอีสาน #ศูนยรับสร้างบ้านขอนแก่นและภาคอีสาน #Homebuilder #Homedesign #บ้านราคาประหยัด #บริษัทรับสร้างบ้านหรู.</p>
                            </div>
                        </div>


                    ))}

                </div>
            </Modal>
        </div>
    )
}