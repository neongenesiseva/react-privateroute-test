export default function({ dispatch }){
  return next => action => {
    //if there is no payload, or the payload is not a promise(has no .then property)
    if(!action.payload || !action.payload.then){
      return next(action);
    }
    //make sure the action's promise resolved
    action.payload
      .then(function(res){
        const newAction = {...action,payload:res}
        //creates a new action with the old type, but replace the promise with the response data
        dispatch(newAction);
        //run the entire cycle again. a redux method->similar as  next(action);
      })
  }
}

//SAME AS
// export default function({dispatch}){
//   return function(next){
//     return function(action){
//       console.log(action);
//       next(action);
//     }
//   }
// }
