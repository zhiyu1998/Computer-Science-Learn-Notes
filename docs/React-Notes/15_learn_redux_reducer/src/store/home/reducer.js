import { CHANGE_BANNERS, CHANGE_RECOMMENDS } from "./constance.js";

const initialHomeInfo = {
  banners: [],
  recommends: [],
};
function homeReducer(state = initialHomeInfo, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default homeReducer;
