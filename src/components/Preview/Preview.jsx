import './Preview.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Preview() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div data-aos="fade-down" data-aos-duration="1000" className='preview-container'>
            <div className='preview-video'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ebEYk_o4BMo?si=zf_rgqApDVBtwNim" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
            </div>
            <div className='preview-text'>
                <p className='preview-text-title'>รับสร้างบ้านขอนแก่น
                    S-House Design</p>
                <p className='preview-text-dis'>รับสร้างบ้าน รับสร้างบ้านขอนแก่นและทั่วภาคอิสาน รับสร้างบ้านแบบครบวงจร ทั้งสไตล์ โมเดิร์น ลอฟท์  และวินเทจ งานออกแบบมีความทันสมัย โดดเด่น ตอบโจทย์ทุกไลฟ์สไตล์  😊👌 ในแบบที่ลูกค้าต้องการ ด้วยงบประมาณที่กำหนดได้เอง 💸💰 เรียกได้ว่ามาที่นี่ที่เดียว จบครบเรื่องบ้าน❗</p>
            </div>
        </div>
    )

}