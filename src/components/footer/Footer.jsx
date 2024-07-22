import './foter.css';
export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='f-part1'>
                <figure className='f-gr'>
                    <img src="/image/Rectangle 18.png" alt="" />
                </figure>
                <div className='f-part1-text'>
                    <p>S-House Design plus .co.ltd
                    </p>
                    <p>241  ม.28  ตำบลศิลา  อำเภอเมืองขอนแก่น  จังหวัดขอนแก่น  40000</p>
                    <p>E-mail: suriyo.civil@gmail.com</p>
                </div>
            </div>
            <div className='f-part2'>
                <ul className='f-part2-text'>
                    <li>ฝ่ายวิศวกรรม<p>: 085-545-9598, 062-560-2290</p></li>
                    <li>ฝ่ายการตลาด<p>: 094-290-2122</p></li>
                    <li>ฝ่ายประสานงาน<p>: 091-164-4458</p></li>
                </ul>
            </div>
        </div>
    )
}