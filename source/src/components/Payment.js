import { useState } from "react";
import "../css/Payment.css";
function Payment({ handlePaymentData }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [tel, setTel] = useState('');

    // const [errorName, setErrorName] = useState('');
    // const [errorEmail, setErrorEmail] = useState('');
    // const [errorAddress, setErrorAddress] = useState('');
    // const [errorTel, setErrorTel] = useState('');

    const submit = (e) => {
        e.preventDefault();
        const paymentData = { name, email, address, tel }
        console.log(paymentData);
        handlePaymentData(paymentData);
        setName('');
        setEmail('');
        setAddress('');
        setTel('');

    }

    return (

        <div className="container payment">
            <hr></hr>
            {/* <h3 className="payment_title">Payment </h3> */}
            <div>
                <form onSubmit={submit} className="payment_form">
                    <div >
                        <div className="form-group">
                            <div>Your Name </div>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                            {/* <div className="payment_error">{errorName}</div> */}
                        </div>
                        <div className="form-group">
                            <div>Email</div>
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {/* <div className="payment_error">{errorEmail}</div> */}
                        </div>
                        <div className="form-group">
                            <div>Address</div>
                            <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                            {/* <div className="payment_error">{errorAddress}</div> */}
                        </div>
                        <div className="form-group">
                            <div>Phone</div>
                            <input type="tel" name="tel" value={tel} onChange={(e) => setTel(e.target.value)} />
                            {/* <div className="payment_error">{errorTel}</div> */}
                        </div>

                    </div>
                    <button type="submit" className="btn_checkout"><h5>Check out</h5></button>

                </form>
            </div>
        </div >


    )
}
export default Payment