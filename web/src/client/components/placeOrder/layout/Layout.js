import React from 'react';

/*Design of the user interface.*/
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
