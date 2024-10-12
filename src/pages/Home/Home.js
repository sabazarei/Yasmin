import Navbar from "../../components/navbar/Navbar";
import Slideshow from "../../components/slideshow/Slideshow"
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import './Home.css';
import Whycard from "../../components/whycard/Whycard";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import About from "../../components/about/About";

export default function Home(){

    const[products , setProducts] = useState([])
    useEffect(()=>{
        axios
            .get('http://localhost:5000/clothesInfo')
            .then((response)=> setProducts(response.data))
    },[])

    const winterProducts = products.filter((product) => product.id <6)
    
    const mantoProducts = products.filter((product) => product.id >5 && product.id <11)

    const tshirtProducts = products.filter((product) => product.id >10 && product.id <16)

    const hoodiProducts = products.filter((product) => product.id >15 && product.id <21)


    const whyInfo = [
        {
            icon:<TbRosetteDiscountCheck/>,
            title: 'ضمانت برگشت پول'
        },
        {
            icon:<CiDeliveryTruck/>,
            title: 'تحویل سریع'
        },
        {
            icon:<TbShoppingBagCheck/>,
            title: 'بهترین کیفیت'
        }
    ]

    return(
        <>
            <Navbar/>
            <Slideshow/>
            <div className="container">
                <h2 className="title">لباس های زمستانی</h2>
                <div className="card-wrapper">
                    {
                        winterProducts.map((product)=>(
                            <div key={product.id} className="card-col">
                                <Card {...product} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="container">
                <h2 className="title">مانتو </h2>
                <div className="card-wrapper">
                    {
                        mantoProducts.map((product)=>(
                            <div key={product.id} className="card-col">
                                <Card {...product} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="container">
                <h2 className="title">تیشرت </h2>
                <div className="card-wrapper">
                    {
                        tshirtProducts.map((product)=>(
                            <div key={product.id} className="card-col">
                                <Card {...product} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="container">
                <h2 className="title">هودی </h2>
                <div className="card-wrapper">
                    {
                        hoodiProducts.map((product)=>(
                            <div key={product.id} className="card-col">
                                <Card {...product} />
                            </div>
                        ))
                    }
                </div>
            </div>
            
            
            <div className="why-container">
                <h2 className="why-card-title">
                    چرا ما را برای خرید انتخاب کنید
                </h2>
                <div className="why-card-wrapper">
                    {
                        whyInfo.map((item)=>(
                            <div key={item.id} className="why-card-col">
                                <Whycard {...item} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <About/>
        </>
        
    )
}