
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const NEW_POST = 'NEW_POST';

export const fetchPosts = () => dispatch => {
  console.log('fetching');

  fetch('http://localhost:8070/eleve')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = newElevesData => dispatch => {
  console.log('action called', newElevesData);
  axios({
    method: 'post',
    url: 'http://localhost:8070/eleve',
    data: newElevesData
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};