import React,{Component} from 'react';
import {connect} from 'react-redux';

// const CommentList =(props)=> {
//     const list=props.comments.map(comment => <li key={comment}>{comment}</li>)
//
//     return (
//         <ul className="comment-list">
//           {list}
//         </ul>
//     );
//
// }

//this also works

class CommentList extends Component {
    constructor(props){
    	super(props);
    	this.state = {};
    }

    render() {
      const list = this.props.comments.map(c=>{return <li key={c}>{c}</li>});
      //in {} there should be a 'return', or it will return a error;
      //if without {}, do not need 'return';
        return (
            <ul className="comment-list">
                {list}
            </ul>
        );
    }
}

function mapStateToProps(state) {
  return {comments:state.comments}
}

export default connect(mapStateToProps)(CommentList);
