


import './Whycard.css';

export default function Whycard(props){

    
    return(
        <>
            <div className="why-card">
                <div className="why-card-header">
                    {props.icon}
                </div>

                <div className="why-card-body">
                    <h3 className="why-title">
                        {props.title}
                    </h3>
                    <p className="why-desc">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ    
                    </p>
                </div>
            </div>
        </>
    )
}