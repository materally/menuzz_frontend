import React from "react";
import nl2br from 'react-nl2br';

// utils
import { niceDeliveryInfo } from '../../helpers';

const Info = (props) => {
    const { data, externalMenu } = props;

    const price = () => {
        const { price } = props.data;
        if(price.length > 0){
            return (
                <div style={{ paddingBottom: '1rem' }}>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                            <th className="text-black font-weight-bold" scope="col">Megnevezés</th>
                            <th className="text-right text-black font-weight-bold" scope="col">Ár</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                price.map((p,i) => (
                                    <tr key={p.price_id}>
                                        <td style={{ paddingBottom: '5px' }}><b>{p.item}</b> <br/><span className="text-secondary" style={{ fontSize: '11px' }}>{p.description}</span></td>
                                        <td className="text-right text-menuzz"><b>{p.price} Ft</b></td>
                                    </tr>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
            )
        }else{
            return <p>Nincs ár feltöltve</p>
        }
    }

    const delivery = () => {
        const { delivery } = props.data
        if(delivery.can_order){
            return (
                <div style={{ paddingBottom: '1rem' }}>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="font-weight-bold" style={{ paddingBottom: '5px' }}>Minimum rendelési összeg</td>
                                <td className="text-right text-menuzz"><b>{delivery.min_order_price} Ft</b></td>
                            </tr>
                            <tr>
                                <td className="font-weight-bold" style={{ paddingBottom: '5px' }}>Szállítási díj</td>
                                <td className="text-right text-menuzz"><b>{delivery.delivery_price} Ft</b></td>
                            </tr>
                            <tr>
                                <td className="font-weight-bold" style={{ paddingBottom: '5px' }}>Csomagolási díj</td>
                                <td className="text-right text-menuzz"><b>{delivery.packing_price} Ft</b></td>
                            </tr>
                            <tr>
                                <td className="font-weight-bold" style={{ paddingBottom: '5px' }}>Kiszállítási idő</td>
                                <td className="text-right text-menuzz"><b>{niceDeliveryInfo(delivery.delivery_time.substring(0,5))}</b></td>
                            </tr>

                            <tr>
                                <td colSpan="2">{nl2br(delivery.delivery_info)}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            )
        }else{
            return <p>Nincs kiszállítás</p>
        }
    }

    const paymentMethods = () => {
        const  pm  = props.data.payment_methods
        return (
            <>
                { (pm.cash === "1" && <span className="badge badge-success mr-2">Készpénz</span>) }
                { (pm.credit_card === "1" && <span className="badge badge-success mr-2">Bankkártya</span>) }
                { (pm.szep_kartya === "1" && <span className="badge badge-success mr-2">SZÉP kártya</span>) }
                { (pm.erzsebet_utalvany === "1" && <span className="badge badge-success mr-2">Erzsébet utalvány</span>) }
                { (pm.sodexo === "1" && <span className="badge badge-success mr-2">Sodexo</span>) }
                { (pm.ticket_express === "1" && <span className="badge badge-success mr-2">Ticket express</span>) }
                { (pm.mkb === "1" && <span className="badge badge-success mr-2">MKB SZÉP kártya</span>) }
                { (pm.otp_szep_kartya === "1" && <span className="badge badge-success mr-2">OTP SZÉP kártya</span>) }
                { (pm.kh === "1" && <span className="badge badge-success mr-2">K&amp;H SZÉP kártya</span>) }
            </>
        )
    }
    
    return (
        <div className="tab-pane fade show active" id="pills-info" role="tabpanel" aria-labelledby="pills-info-tab">
            <div id="restaurant-info" className="bg-white rounded shadow-sm p-4 mb-4">
                <div className="address-map float-right ml-5">
                    <img className="mr-3 img-fluid" alt={data.name} src={data.logo} style={{ width:'130px' }}/>
                </div>

                <h5 className="mb-2">{data.name}</h5>


                { data.menu_url && <p className="mb-3"><a href={`${data.menu_url}`} target="_blank"><span className="badge badge-primary" style={{ fontSize: 16 }}><i className="fas fa-utensils"></i> MENÜ MEGTEKINTÉSE</span></a></p> }

                <p className="mb-2" style={{ fontSize: 16 }}><i className="fas fa-phone text-primary mr-2" />
                    { data.contact.phone_1 && <a href={`tel:${data.contact.phone_1}`}>{data.contact.phone_1}</a> }
                    { data.contact.phone_2 && <>, <a href={`tel:${data.contact.phone_2}`}>{data.contact.phone_2}</a></> }
                    { data.contact.phone_3 && <>, <a href={`tel:${data.contact.phone_3}`}>{data.contact.phone_3}</a></> }
                </p>

                { data.contact.email && <p className="mb-2" style={{ fontSize: 16 }}><i className="fas fa-envelope text-primary mr-2" /><a href={"mailto: "+data.contact.email}>{data.contact.email}</a></p>  }

                {
                    data.contact.website && (
                        <p className="mb-2" style={{ fontSize: 16 }}><i className="fab fa-internet-explorer text-primary mr-2"/><a href={data.contact.website} target="_blank" rel="noopener noreferrer">Weboldal felkeresése</a></p>
                    )
                }

                {
                    data.contact.facebook && (
                        <p className="mb-2" style={{ fontSize: 16 }}><i className="fab fa-facebook text-primary mr-2"/><a href={data.contact.facebook} target="_blank" rel="noopener noreferrer">{data.name}</a></p>
                    )
                }

                {
                    data.delivery.order_link && (
                        <p className="mb-2 text-white" style={{ fontSize: 16 }}><span className="badge badge-info"><i className="fas fa-link mr-2 text-white"/><a href={data.delivery.order_link} target="_blank" rel="noopener noreferrer" className="text-white">Online rendelés</a></span></p>
                    )
                }
            
                {
                    (externalMenu !== null && externalMenu !== undefined) ? (
                        <>
                            <hr />
                            <h5 className="mt-4">Heti menü</h5>
                            <p dangerouslySetInnerHTML={{ __html: externalMenu }}></p>
                        </>
                    ) : null
                }
                

                <hr className="clearfix" />
                {
                    (data.general_info !== null && data.general_info.length > 2) ? (
                        <>
                            <h5 className="mt-4">Általános leírás</h5>
                            <p>{nl2br(data.general_info)}</p>
                            <hr />
                        </>
                    ) : null
                }

                <h5 className="mt-4">Árak <span className="text-primary" style={{ fontSize: 11 }}>(az árak tájékoztató jellegűek, az elírásokért felelősséget nem vállalunk!)</span></h5>
                { price() }

                <h5 className="mt-4">Kiszállítás</h5>
                { delivery() }

                <h5 className="mt-4">Fizetési módok</h5>
                <p style={{ fontSize: 18 }}>
                    { paymentMethods() }
                </p>

            </div>
        </div>
    );
};


export default Info;