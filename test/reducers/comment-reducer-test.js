import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comment-reducer';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('comments reducer',()=>{

  it('handles actions with unknown type',()=>{
    expect(commentReducer(undefined,{})).to.be.instanceof(Array);
    expect(commentReducer(undefined,{})).to.eql([]);
  });

  it('handles actions of type SAVE_COMMENT',()=>{
    const action = {type:SAVE_COMMENT,payload:'new comment'};
    expect(commentReducer([],action)).to.eql(['new comment']);
  });

})
