import React from 'react';

/*Designen af brugergrænsefladen.*/
class Layout extends React.Component {
  render() {
    return (
        <div>
          {this.props.children}
        </div>
    )
  }
}

export default Layout;
