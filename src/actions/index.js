import {SAVE_COMMENT} from './types';
import {CHANGE_AUTH} from './types';
import {FETCH_USERS} from './types';
import axios from 'axios';

export function saveComment(comment){
  return {
    type:SAVE_COMMENT,
    payload:comment
  }
}

export function authenticate(isLoggedIn){
  return {
    type:CHANGE_AUTH,
    payload:isLoggedIn
  }
}

export function fetchUser(){

  const URL = 'https://jsonplaceholder.typicode.com/users';
  const request = axios.get(URL)

  return {
    type:FETCH_USERS,
    payload:request
  }
}
