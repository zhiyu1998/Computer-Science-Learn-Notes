import axios from "axios";
import { takeEvery, put, all } from "redux-saga/effects";
import { FETCH_HOME_MULTIDATA } from "./constance.js";
import { changeBannersAction, changeRecommendsAction } from "./actionCreators";

function* fetchHomeMultiData(action) {
  const res = yield axios.get(
    "http://152.136.185.210:7878/api/hy66/home/multidata"
  );
  const banners = res.data.data.banner.list;
  const recommends = res.data.data.recommend.list;
  yield all([
    yield put(changeBannersAction(banners)),
    yield put(changeRecommendsAction(recommends)),
  ]);
}

function* mySaga() {
  // 参数一：拦截的类型，也就是type
  // 参数二：生成器函数
  // 还有一个类似的函数叫做：takeLatest
  // takeLatest：依次只能监听一个对应的action
  // takeEvery: 每一个都会被执行
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultiData);
}

export default mySaga;
