import {renderComponent,expect} from '../test_helper';
import CommentList from '../../src/components/comment-list';

describe("comment-list",()=>{
  let component;

  beforeEach(()=>{
    const props = {comments:['new comment','another comment']};
    component=renderComponent(CommentList,null,props);
  });
  //the third component is accepted as props

  it('shows an LI for each comment',()=>{
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided',()=>{
    expect(component).to.contain('new comment');
    expect(component).to.contain('another comment');
  });
})
