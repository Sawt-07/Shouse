import './Banner.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Banner() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="bannder-container">

            <div className="banner-big-title">
                <p className='big-text1'>S-HOUSE DESIGN</p>
                <p className='big-text2'>Comprehensive home decoration design</p>
            </div>

            <div className="banner-title">
                <p>รับสร้างบ้าน S-House Design รับสร้างบ้านในแบบที่คุณต้องการ บริการรับสร้างบ้าน ออกแบบบ้าน ตกแต่งภายในบ้านแบบครบวงจร
                    รองรับทุกความต้องการของลูกค้า ตอบโจทย์ทั้งขนาด และดีไซน์ ที่โดดเด่นด้วยเทคโนโลยีการอยู่อาศัย อยากมีบ้านที่สวย หรูหรา ดูทันสมัย</p>
            </div>


        </div>
    )
}