import {
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
  FETCH_HOME_MULTIDATA,
} from "./constance.js";
import axios from "axios";

export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});

export const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMENDS,
  recommends,
});

// redux-thunk中定义的action函数
// ！！！思想！！！！ -> dispatch(函数) [此步骤不用加入'()'以此调用]-> 在action中的这个函数再dispatch()
// 此外这里除了有dispatch参数外还有getState参数
export const getHomeMultidataAction = (dispatch) => {
  axios({
    url: "http://152.136.185.210:7878/api/hy66/home/multidata",
  }).then((res) => {
    const data = res.data.data;
    dispatch(changeBannersAction(data.banner.list));
    dispatch(changeRecommendsAction(data.recommend.list));
  });
};

// redux-saga 拦截 action
export const fetchHomeMutidataAction = { type: FETCH_HOME_MULTIDATA };