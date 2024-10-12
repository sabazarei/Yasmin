import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ClothesInfo.css'
import Navbar from "../../components/navbar/Navbar";

export default function ClothesInfo(){

    const clothId = useParams().clothID
    
    const [clothesData , setClothesData] = useState({})

    useEffect(() => {
        axios
            .get(`http://localhost:5000/clothesInfo/${clothId}`)
            .then(response => setClothesData(response.data))
    }, [])
    console.log(clothesData);
    

    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="product-wrapper">
                    <div className="image-col">
                        <img src={clothesData.image} alt="cloth"/>
                    </div>

                    <div className="body-col">
                        <p className="name">{clothesData.name}</p>
                        <p className="price"> {clothesData.price} تومان</p>

                        <ul>
                            <li>{clothesData.desc}</li>
                        </ul>

                        <form className="color-select">
                            <label htmlFor='colors'>رنگ </label>
                            <select className="select" name="color" id="colors">
                                <option>یک گزینه را انتخاب کنید</option>
                                <option value="کرمی">کرمی</option>
                                <option value="قرمز">قرمز</option>
                                <option value="سبز">سبز</option>
                                <option value="زرد">زرد</option>
                                <option value="بنفش">بنفش</option>
                            </select>
                        </form>

                        <form className="size-select">
                            <label htmlFor="size">سایز </label>
                            <select className="select" name="size" id="size">
                                <option>یک گزینه را انتخاب کنید</option>
                                <option value="free size 36-42">free size 36-42</option>
                            </select>
                        </form>

                        <button className="submit-btn" type="submit">افزودن به سبد خرید</button>
                    </div>
                </div>
            </div>
        </>
    )
}