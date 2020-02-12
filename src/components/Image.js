import React from 'react';
import regretImg from '../images/beats/regret.jpg';
import slowDownImg from '../images/beats/slowDown.jpg';
import mistakesImg from '../images/beats/mistakes.jpg';
import flyImg from '../images/beats/fly.jpg';
import fallinImg from '../images/beats/fallin.jpg';
import hunterImg from '../images/beats/hunter.jpg';
import vultureImg from '../images/beats/vulture.jpg';
import redImg from '../images/beats/red.jpg';
import problemImg from '../images/beats/problem.jpg';
import takenImg from '../images/beats/taken.jpg';
import routeImg from '../images/beats/route.jpg';
import '../App.css';
import rabbitImg from '../images/beats/rabbit.jpg';


class Image extends React.Component {

  render() {
    console.log(this.props)
    let imgObj =
      {
"regret":regretImg,
"slowDown":slowDownImg,
"mistakes":mistakesImg,
"fly":flyImg,
"hunter":hunterImg ,
"red":redImg,
"problem":problemImg,
"taken":takenImg,
"route":routeImg,
"rabbit":rabbitImg,
"vulture":vultureImg,
"fallin": fallinImg
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