import './Planhouse.css'
import { houseData } from './data/Datahouse.jsx'
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Planhouse() {
    useEffect(() => {
        Aos.init();
    }, [])
    const [mainimg, setMainimg] = useState();
    const [open, setOpen] = useState(false);
    const [dataid, setDataId] = useState();

    function handleOpen(id, img) {
        setOpen(true);
        setDataId(id);
        setMainimg(img);
    }
    const handleClose = () => setOpen(false);

    const filteredData = houseData.filter(item => item.id === dataid);

    return (
        <div className='ph-wrap'>

            <div className='ph-container'>
                <div className='ph-text'>
                    <p data-aos="fade-down" data-aos-duration="800" className='ph-title'>แบบบ้าน</p>
                    <p data-aos="fade-down" data-aos-duration="900" className='ph-dis'>ทางเรามีแบบบ้านให้ลูกค้าเลือกสรรมากมาย ทั้งบ้านเดียว แบบแฝด ทาวเฮ้าส์</p>
                </div>

                <div data-aos="fade-down" data-aos-duration="2000" className='card-house-container'>
                    {houseData.map((data) => (
                        <div key={data.id} className='card-house' onClick={() => handleOpen(data.id, data.setmainimage)} >
                            <figure className='img-house'>

                                <img src={data.Image} alt="" />
                            </figure>
                            <div className='card-text'>
                                <p className='text-title'>{data.title}</p>
                                <p className='text-dis'>{data.description}</p>
                            </div>
                        </div>
                    ))}



                </div>

            </div>
            {open && (

                <div className='plan-close-btn' onClick={handleClose}>
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

                    {filteredData.map((data) => (

                        <div key={data.id} className='popup-container'>

                            <div className='popup-img'>
                                <div className='main-img'>
                                    <img src={mainimg} alt="" />
                                </div>
                                <div className='sub-img'>
                                    {/* <div key={data.id} className='sub-img-item' onClick={() => setMainimg(data.Image)}>
                                        <img src={data.Image} alt="" />
                                    </div> */}
                                    {data.subImage.map((image) => (

                                        <div key={image.id} className={`${mainimg === image.subImage ? 'actimg' : ''}  sub-img-item`} onClick={() => setMainimg(image.subImage)}>
                                            <img src={image.subImage} alt="" />
                                        </div>
                                    ))}

                                </div>
                                <div className='green-line'>
                                    <div className='green-line-item'></div>
                                </div>
                            </div>
                            <div className='popup-text-container'>
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

                        </div>


                    ))}

                </div>
            </Modal>


        </div>


    )
}