import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE
} from "../../redux/postRedux"

export default function* getPostsSaga() {
    yield all([
        fork(watchGetPosts)
    ])
}

// login
function getPostsAPI() {
    return axios.get("/post");
}
function* getPosts(action) {
    try {
        const result = yield call(getPostsAPI);
        yield put({
            type: GET_POSTS_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: GET_POSTS_FAILURE,
            payload: err.response.data
        })
    }
}
function* watchGetPosts() {
    yield takeLatest(GET_POSTS_REQUEST, getPosts);
}
