import React,{Component} from 'react';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import Header from './header';

class UserList extends Component {

  renderUser(user){
    return (
      <div className="card card-block" key={user.name}>
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a className="btn btn-primary">{user.email}</a>
        <hr/>
        <a className='btn' href={user.website} target="_blank">Website</a>
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchUser();
  }

    render() {
        return (
            <div>
            <Header/>
            <div className="user-list">
                {this.props.users.map(this.renderUser)}
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return{users:state.users}
};

export default connect(mapStateToProps, actions)(UserList);
