import {siteStatus} from "./site-status/site-status";
import {siteData} from "./site-data/site-data";
import {combineReducers} from "redux";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  STATUS: `STATUS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: siteData,
  [NameSpace.STATUS]: siteStatus,
  [NameSpace.USER]: user,
});
