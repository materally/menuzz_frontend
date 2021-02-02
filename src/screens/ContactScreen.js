import React, { Fragment, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";

import API, { API_SECRET } from '../services/api.service';

const ContactScreen = () => {
    const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
    const [g, setG] = useState(null);

    const onChangeCaptcha = (value) => {
		setG(value);
    }
    
    const submit = () => {

		if(email.trim().length === 0 || name.trim().length === 0 || phone.trim().length === 0 || message.trim().length === 0){
            alert("Minden mező kitöltése kötelező!");
            return;
		}

		if(g === null){
			alert("Jelöld be, hogy nem vagy robot!");
            return;
		}

		API.post(`home/contactPost`, 'name='+encodeURIComponent(name)+'&phone='+encodeURIComponent(phone)+'&email='+encodeURIComponent(email)+'&message='+encodeURIComponent(message)+'&API_SECRET='+API_SECRET)
        .then(res => {
            if(res.data.success){
				alert("Sikeres küldés!")
				setName('');
				setPhone('');
				setEmail('');
				setMessage('');
			}
        })
        .catch(error => console.log(error));
		
	}
    
    return (
    <Fragment>
        <Helmet>
            <title>Menüzz kapcsolatfelvétel</title>
            <meta name="description" content="Vedd fel velünk a kapcsolatot"/>
            <link rel="canonical" href={process.env.REACT_APP_FRONTEND_URL} />
        </Helmet>
        <section className="section pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="p-5 osahan-invoice bg-white shadow-sm">
                            <h3>Kapcsolat</h3>
                            <p>Lépj velünk kapcsolatba: 06 30/542 06 41</p>

                            <h6 className="mt-5">VAGY ÍRJ ÜZENETET:</h6>
                    
                            <form>
                                <div className="form-label-group">
                                    <input className="form-control" type="text" id="name" placeholder="Neved" onChange={ e => setName(e.target.value) } value={name}/>
                                    <label htmlFor="name">Neved</label>
                                </div>
                                <div className="form-label-group">
                                    <input className="form-control" type="email" id="email" placeholder="E-mail címed" onChange={ e => setEmail(e.target.value) } value={email}/>
                                    <label htmlFor="email">E-mail címed</label>
                                </div>
                                <div className="form-label-group">
                                    <input className="form-control" type="text" id="phone" placeholder="Telefonszámod"  onChange={ e => setPhone(e.target.value) } value={phone}/>
                                    <label htmlFor="phone">Telefonszámod</label>
                                </div>
                                <div className="form-label-group mb-4">
                                    <textarea className="form-control" as="textarea" placeholder="Üzeneted..." aria-label="With textarea" rows="5"  onChange={ e => setMessage(e.target.value) } value={message}></textarea>
                                </div>
                                <div className="mb-4">
                                    <ReCAPTCHA
                                        sitekey="6LdWHs8ZAAAAAMO6KbFzyYhXpTxBXW96Nax4Ky63"
                                        onChange={onChangeCaptcha}
                                    />
                                </div>
                                <button type="button" className="btn btn-primary btn-lg text-uppercase font-weight-bold mb-2" onClick={ () => submit()}>Üzenet elküldése</button>
                                <div className="text-center pt-3">
                                    
                                </div>
                            </form>
                        </div> {/* p-5 osahan-invoice bg-white shadow-sm */}
                    </div> {/* col-md-8 mx-auto */}
                </div> {/* row */}
            </div> {/* container */}
        </section>
    </Fragment>
  );
};

export default ContactScreen;
