import React from 'react';
import img from './404.png';
import notfoundless from './notfound.module.less'
export default class NotFound extends React.Component {
  state = {
    on: false
  }
  enter = () => {
    this.setState({
      on: true
    })
  }
  render() {
    const { on } = this.state;
    return (
      <div className={notfoundless.img_box}>
        <img
          src={img} alt="404"
          className={on ? notfoundless.img_animate : notfoundless.img}
          ref={(element) => this.imgError = element}
          onMouseEnter={this.enter}
          onMouseLeave={this.leave}
        />
      </div>
    )
  }
}

