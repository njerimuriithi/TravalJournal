import React from 'react'
import styles from './Card.module.css'
import { GrLocation } from "react-icons/gr";
//import { IconContext } from "react-icons";

function Card(props) {
    console.log(props.item)
    return (
        <div className={styles.mainContent}>
            <img src ={props.item.imageUrl} alt="adventure image" className={styles.img}/>
              <div className={styles.contents}>
                  <div className={styles.contentItems}>
            <p className={styles.location}>
                <GrLocation/>

            {props.item.location}
            </p>
            <a className={styles.link} href={props.item.googleMapsUrl}> View on Google maps</a>
            </div>
            <h2 className={styles.title}>{props.item.title}</h2>
        
            <p className={styles.dates}>{props.item.startDate} - {props.item.endDate}</p>
            
            <p className={styles.description}>{props.item.description}</p>
            </div>

                    </div>
    )
}

export default Card
