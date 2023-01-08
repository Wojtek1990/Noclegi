import React from "react";
import styles from './Hotel.module.css'
import hotelimg from '../../../assets/images/1.jpg';



function Hotel(props) {
    return (
        
        <div className={`card ${styles.hotel}`}>
        <div className="card-body">

            

            <div className="row">
                <div className="col-4">
                    <img 
                    src={hotelimg} 
                    alt="" 
                    className="img-fluid img-thumbnail"/>
                </div>

            <div className="col-8">
                <div className="row">
                    <div className="col">
                        <p className={styles.title}>{props.name}</p>
                        <span className="badge-light"><b>{props.city}</b></span>
                    </div>
                    <div className="col">
                        <h5 className="float-end">
                            <p>Ocena: {props.rating}</p>
                            <a href="www.google.com" className="btn btn-secondary mt-2 px-5" >Pokaż</a>
                        </h5>
                        
                    </div>
                </div>
            </div>


            <div className="col-12">
                <p className={styles.description}>{props.description}</p>
                
            </div>
            </div>
        </div>
        </div>
    )
}

export default Hotel;