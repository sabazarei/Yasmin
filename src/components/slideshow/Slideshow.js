import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css'

// const spanStyle = {
//   color: 'rgb(229, 220, 211)',
  
// }



const fadeImages = [
  {
    id:1,
    url:'https://img.freepik.com/free-photo/still-life-with-classic-shirts-hanger_23-2150828586.jpg?t=st=1724949604~exp=1724953204~hmac=07ae938624ed05c14731e58e11d555a0e2911093b082e0044f895c0dc97a8ce3&w=996'
  },
  {
    id:2,
    url:'https://img.freepik.com/free-photo/still-life-with-classic-shirts-hanger_23-2150828628.jpg?t=st=1724949979~exp=1724953579~hmac=9e0643e6188109292a9cd423a0e9c66dd4fc1b2e9500ff2e218faf7995d988ab&w=900'
  },
  {
    id:3,
    url: 'https://img.freepik.com/free-photo/still-life-with-classic-shirts-hanger_23-2150828579.jpg?t=st=1724950066~exp=1724953666~hmac=062711ec98edb565d47c321c7e55e885a53de1213229f18ff640186a0fa67650&w=996'
  },
  {
    id:4,
    url: 'https://img.freepik.com/free-photo/still-life-with-classic-shirts-hanger_23-2150828570.jpg?t=st=1724949595~exp=1724953195~hmac=b0c4718459d93f3f7102546b21111ee3c949e3362f3af755674d724b01424f62&w=996'
  },
  {
    id:5,
    url:'https://img.freepik.com/free-photo/close-up-flannel-shirt-detail_23-2149575327.jpg?t=st=1724950164~exp=1724953764~hmac=bf4b79d444abf4b4209cff4984e227f361e91828d978f0ea35242eea1f10a1a4&w=996'
  }
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade>
         {fadeImages.map((fadeImage)=> (
            <div key={fadeImage.id}>
              <img className='fade-img' src={fadeImage.url} alt='images'/>
            </div>
          ))} 
        </Fade>
      </div>
    )
}

export default Slideshow
