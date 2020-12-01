import React, { Component } from 'react';

class Log extends Component {
  render() {
    return (
      <div className="Log">
    <div class="commentbox"></div>
      </div>
    )
  }
}
export default Log;

// import React, { Component } from 'react';
// import commentBox from 'commentbox.io';
// class Log extends Component {

//   componentDidMount() {

//     this.removeCommentBox = commentBox('my-project-id');
// }

// componentWillUnmount() {

//     this.removeCommentBox();
// }

// render() {

//     return (
//         <div className="commentbox" />
//     );
// }
// }
// export default Log;