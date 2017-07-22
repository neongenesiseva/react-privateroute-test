import React,{Component} from 'react';
import {connect} from 'react-redux';

export default function(ComposedComponent){


  class Authentication extends Component{
    static contextTypes = {
      router:React.PropTypes.object
    }
    //static is a class level property,on the actual class not the instance;

    //contextTypes has been replaced by propTypes

    componentWillMount() {
      if(!this.props.authenticated){
        this.context.router.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated){
        this.context.router.push('/')
      }
    }

    render (){
      console.log(this.context);
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state){
    return {authenticated:state.authenticated};
  }

  return connect(mapStateToProps)(Authentication);
}

      // //in some other location...not in this file..
      // //we want to use this HOC
      //
      // import Authentication//This is my HOC
      // import Resources //this is the component I wrapped;
      //
      // const ComposedComponent = Authentication(Resources);
      // //In Some render method
      // <ComposedComponent />
