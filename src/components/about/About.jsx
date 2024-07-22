import './About.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function About() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (


        <div className="about-container">
            <div className="bg-green">
                <img src="/image/bg-abuot.png" alt="" />
            </div>
            <div className="about-wrapper">
                <figure className="about-logo">
                    <img src="/image/logoAbout.png" alt="" />
                </figure>
                <div className="about-text">
                    <p>รับสร้างบ้าน S-House Design รับสร้างบ้านในแบบที่คุณต้องการ บริการรับสร้างบ้าน ออกแบบบ้าน ตกแต่งภายในบ้านแบบครบวงจร
                        รองรับทุกความต้องการของลูกค้า ตอบโจทย์ทั้งขนาด และดีไซน์ ที่โดดเด่นด้วยเทคโนโลยีการอยู่อาศัย อยากมีบ้านที่สวย หรู ดูทันสมัย</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="about-skill">
                    <div className="skill-builtin">
                        <img src="/image/brush 1.png" alt="" />
                        <p className="skill-title">รับงานBUILT IN</p>
                        <p className="skill-text">รับตกแต่งภายใน บิ้วอินเฟอร์นิเจอร์
                            ตามงบประมาณและความต้องการของลูกค้า โดยทีมงานมืออาชีพ</p>
                    </div>
                    <div className="skill-design">
                        <img src="/image/design-03.png" alt="" />
                        <p className="skill-title">รับออกแบบบ้าน</p>
                        <p className="skill-text">บริการให้คำปรึกษาด้านการออกแบบบ้าน ให้ตอบโจทย์ทุกความต้องการ เพื่อแบบบ้านที่ตรงใจคุณ
                        </p>
                    </div>
                    <div className="skill-house">
                        <img src="/image/house-03.png" alt="" />
                        <p className="skill-title">รับสร้างบ้าน</p>
                        <p className="skill-text">ให้รับสร้างบ้านที่มีคุณภาพ พร้อมรายละเอียด วัสดุคุณภาพดี ผู้รับเหมาไม่ทิ้งงาน สัญญาชัดเจน
                            เพื่อรองรับความต้องการเฉพาะของผู้อยู่อาศัย</p>
                    </div>
                </div>
            </div>

        </div>


    )
}