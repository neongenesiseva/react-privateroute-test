import {renderComponent,expect} from '../test_helper';
import App from '../../src/components/app';

//Use describe to group together similar TestUtils
describe('Test the App Component',()=>{
  let component;

  beforeEach(()=>{
    component=renderComponent(App);
  })
  //Use 'it' to test a single attribute of a target
  it ('shows a comment box',()=>{
    expect(component.find('.comment-box')).to.exist;
  });
  //.find is a jquery method

  it('shows a comment list',()=>{
    expect(component.find('.comment-list')).to.exist;
  })

});
