import React from 'react';
import img from './404.png';
import notfoundless from './notfound.module.less'
export default class NotFound extends React.Component {
  state = {
    on: false
  }
  enter = () => {
    this.imgError.style.animation = 'vibration 1s';
    setTimeout(() => {
      this.imgError.removeAttribute("style");
    }, 2000)
  }
  render() {
    return (
      <div className={notfoundless.img_box}>
        <img
          src={img} alt="404"
          className={notfoundless.img}
          ref={(element) => this.imgError = element}
          onMouseEnter={this.enter}
        />
        <style>
          {
            `  
          @keyframes vibration {
            20% {
              transform: rotate(110deg);
            }
            40% {
              transform: rotate(70deg);
            }
            60% {
              transform: rotate(100deg);
            }

            80% {
              transform: rotate(80deg);
            }
            100% {
              transform: rotate(90deg);
            }
          }
          `
          }
        </style>
      </div>
    )
  }
}

