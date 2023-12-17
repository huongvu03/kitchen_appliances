import { useState } from "react";
import "../css/Payment.css";
import { Modal } from 'react-bootstrap';
function Payment({ handlePaymentData }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [tel, setTel] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorAddress, setErrorAddress] = useState('');
    const [errorTel, setErrorTel] = useState('');
    // *******************************
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // *******************************
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const isValidAddress = (address) => {
        const addressRegex = /^[a-zA-Z0-9\s,.'-]+$/;
        return addressRegex.test(address);
    };
    const isValidTel = (phoneNumber) => {
        const phoneRegex = /^0\d{8,10}$/;
        return phoneRegex.test(phoneNumber);
    };
    // *******************************
    const submit = (e) => {
        e.preventDefault();
        if (!name) {
            setErrorName('Name is required');
        } else if (name) {
            setErrorName('');
        } if (!email) {
            setErrorEmail('Email is required');
        } else if (!isValidEmail(email)) {
            setErrorEmail('Please enter a valid email');
        } else {
            setErrorEmail('');
        } if (!address) {
            setErrorAddress('Address is required');
        } else if (!isValidAddress(address)) {
            setErrorAddress('Please enter a valid address')
        } else {
            setErrorAddress('')
        } if (!tel) {
            setErrorTel('Tel isrequired');
        } else if (!isValidTel(tel)) {
            setErrorTel('Telephone number at least 9 number and start with 0')
        } else {
            setErrorTel('');
            const paymentData = { name, email, address, tel }
            handleShow();
            // alert(`THANH TOAN THANH CONG \nName: ${paymentData.name}\nEmail: ${paymentData.email}\nAddress: ${paymentData.address}\nTel: ${paymentData.tel}`);
            handlePaymentData(paymentData);
            setName('');
            setEmail('');
            setAddress('');
            setTel('');
        }


    }

    return (

        <div className="container payment">
            <hr></hr>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body><h3 className='alert_modal text-center' >Success !!!</h3></Modal.Body>
            </Modal>
            <div>
                <form onSubmit={submit} className="payment_form">
                    <div >
                        <div className="form-group">
                            <div>Your Name </div>
                            <div><input type="text" name="name" value={name} placeholder='Your name' onChange={(e) => setName(e.target.value)} />
                                <div className="payment_error">{errorName}</div></div>

                        </div>
                        <div className="form-group">
                            <div>Email</div>
                            <div> <input type="text" name="email" value={email} placeholder='Example@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                                <div className="payment_error">{errorEmail}</div></div>

                        </div>
                        <div className="form-group">
                            <div>Address</div>
                            <div> <input type="text" name="address" value={address} placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
                                <div className="payment_error">{errorAddress}</div></div>

                        </div>
                        <div className="form-group">
                            <div>Phone</div>
                            <div> <input type="tel" name="tel" value={tel} placeholder='0xxxxxxxx' onChange={(e) => setTel(e.target.value)} />
                                <div className="payment_error">{errorTel}</div></div>

                        </div>

                    </div>
                    <button type="submit" className="btn_checkout"><h5>Check out</h5></button>

                </form>
            </div>
        </div >


    )
}
export default Payment