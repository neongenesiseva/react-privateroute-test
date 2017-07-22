import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
    //global is window in nodejs
global.window = global.document.defaultView;
const $ = _$(window);
    //tell jquery just responsible to global.window;

//build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass,props={},state={}){
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers,state)}>
      <ComponentClass {...props}/>
    </Provider>
  );
      //renderIntoDocument->his is from 'react' official site for testing;
  return $(ReactDOM.findDOMNode(componentInstance)); //produces HTML;
      //the $ is just for chai-jquery to access the DOM
}

//build helper for simulating events
$.fn.simulate=function(eventName,value){
  if (value){
    this.val(value);
    //val is jquery method;
  }
  TestUtils.Simulate[eventName](this[0]);
}

//Set up chai-jquery;
chaiJquery(chai,chai.util,$);

export {renderComponent,expect};
