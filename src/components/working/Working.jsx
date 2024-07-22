import './Working.css';
import { Dataimg } from './data/Dataimg';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function Working() {
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

    const filteredData = Dataimg.filter(item => item.id === dataid);
    return (
        <div className='working-container'>
            <div className='working-text'>
                <p className='working-text-title'>ผลงานของเรา</p>
                <p className='working-text-dis'>เรารวบรวมผลงานที่ทางเราดำเนินงาน ทั้งออกแบบ ตกแต่ง ก่อสร้าง รวมทั้งรีโนเวท</p>
            </div>
            <div className='working-card-wrap'>
                {Dataimg.map((data) => (
                    <div key={data.id} data-aos="flip-right" data-aos-duration="2000" className='working-card' onClick={() => handleOpen(data.id, data.setmainimage)}>
                        <figure className='working-card-img'>
                            <div className="black-cover"></div>
                            <img className='working-card-img-item' src={data.Image} alt="" />
                            <div class="middle" >
                                <div class="middle-btn" >View</div>
                            </div>
                        </figure>
                        <div className='working-card-text'>
                            <p className='working-card-text-title'>{data.title}</p>
                            <p className='working-card-text-dis'>{data.description}</p>
                        </div>
                    </div>
                ))}


            </div>
            {open && (

                <div className='close-btn' onClick={handleClose}>
                    < HighlightOffIcon sx={{ color: "#fff", fontSize: "36px", position: "absolute", top: 0, right: 0 }} />
                </div>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >



                <div className='working-popup' >

                    {filteredData.map((data) => (

                        <div key={data.id} className='working-popup-container'>

                            <p className='working-popup-title'>ผลงานบ้าน</p>
                            <div className='working-popup-img'>
                                <div className='working-main-img'>
                                    <img src={mainimg} alt="" />
                                </div>
                                <div className='working-sub-img'>

                                    {data.Subimage.map((item) => (
                                        <div key={item.id} className={`${mainimg === item.Subimage ? 'actimg' : ''} working-sub-img-item`} onClick={() => setMainimg(item.Subimage)}>
                                            <img src={item.Subimage} alt="" />
                                        </div>
                                    ))}


                                </div>

                            </div>


                        </div>


                    ))}

                </div>

            </Modal>



        </div>

    )
}