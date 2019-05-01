/***********************************************************************
* File that contains the Screen Class
***********************************************************************/
import React from 'react';
import './Screen.css';


class Screen extends React.Component {
  render() {
    return (
      <div className="screen">
        {this.props.display}
      </div>
    );
  }
}


export default Screen;
