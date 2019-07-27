import { fromJS } from 'immutable';

export const initialState = fromJS({
  
  auth:{
     user:null,
     isAuthenticated:false
  }
});
