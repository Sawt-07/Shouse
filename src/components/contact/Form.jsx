import './Form.css';
export default function Form() {
    return (
        <form action="">
            <div className="input-group-1">
                <div className="input-1">
                    <label htmlFor="">Name(*)</label>
                    <input type="text" placeholder="your name" />
                </div>
                <div className="input-2">
                    <label htmlFor="">E-mail(*)</label>
                    <input type="text" placeholder="your email" />
                </div>

            </div>

            <div className="input-group-2">
                <label htmlFor="">Subject(*)</label>
                <input type="text" name="" id="" placeholder="subject" />
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>

            </div>
            <div className='contact-f-btn' >
                <button type='submit' className='f-btn'>Send</button>
            </div>

        </form>
    )
}