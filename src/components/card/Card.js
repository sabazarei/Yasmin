import './Card.css'
import {Link} from 'react-router-dom'
import { TiArrowLeftThick } from "react-icons/ti";

export default function Card(props){

    const style={'margin':'0 2px -4px 0'}

    return(
        <>
        <div className="product-card">
            <div className="card-header">
                <img src={props.image} alt="jacket"/>
            </div>
            <div className="card-body">
                <p>قیمت : {props.price} تومان</p>

                <Link to={`clothesInfo/${props.id}`}>
                <div>
                    <span>اطلاعات بیشتر</span>
                    <TiArrowLeftThick style={style} />
                </div>
                </Link> 
            </div>
        </div>
        </>
    )
}