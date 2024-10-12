import './About.css'
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from 'react-router-dom';


export default function About(){

    const style={'margin':'0 2px -4px 0'}

    return(
        <>
            <div className="about-container">
                <div className="about-title">درباره ما</div>
                <div className="about-wrapper">
                    <div className="about-img-col">
                        <img src="https://img.freepik.com/premium-photo/clothing-store-with-stylish-merchandise-racks-fashion-luxury-stole_1124848-136899.jpg?w=996" alt="shop" />
                    </div>

                    <div className="about-body-col">
                        <h3>درباره ما</h3>
                        <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده 
                        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
                         ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
                         با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و 
                        آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                         و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                        
                        <Link to={'/about'}>
                        <div>
                            <span>اطلاعات بیشتر</span>
                            <TiArrowLeftThick style={style} />
                        </div>
                        </Link>
                        

                    </div>
                </div>
            </div>
        </>
    )
}