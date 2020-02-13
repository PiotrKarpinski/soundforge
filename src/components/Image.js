import React from 'react';
import regretImg from '../images/beats/regret.jpg';
import kendiImg from '../images/beats/kendi.jpg';
import riverImg from '../images/beats/river.jpg';
import vultureImg from '../images/beats/vulture.jpg';
import heistImg from '../images/beats/heist.jpg';
import takenImg from '../images/beats/taken.jpg';
import dizzyImg from '../images/beats/dizzy.jpg';
import '../App.css';



class Image extends React.Component {

  render() {
    console.log(this.props)
    let imgObj =
      {
"regret":regretImg,
"kendi":kendiImg,
"taken":takenImg,
"river":riverImg,
"heist":heistImg,
"vulture":vultureImg,
"dizzy": dizzyImg
}
        return (
        <img
        className='beat-img'
        alt={this.props.img}
        src={imgObj[this.props.img]}/>

    )
  }
}






export default Image;