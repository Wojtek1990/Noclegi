import React, {Component} from "react";
import styles from './Hotels.module.css';
import Hotel from "./Hotel/Hotel";


class Hotels extends Component {


    render() {
        const {hotels} = this.props
        return (
            <div className={styles.container}>
               <h2 className={styles.title}>Oferty:</h2>
               
               {hotels.map(hotel => <Hotel key={hotel.id} {...hotel} /> )}
               
           </div>
        );
    }
}
export default Hotels;