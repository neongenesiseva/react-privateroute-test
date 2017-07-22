import React, { Component } from 'react';
import CommentBox from './comment_box';
import CommentList from './comment-list';
import Header from './header';

export default class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }
  //this.props.children will render the nested components;
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <CommentBox/>
        <CommentList/>
      </div>
    );
  }
}
