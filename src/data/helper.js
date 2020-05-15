/* @desc - API to get "operator" & "user" data from their respective files.
 */
import operatorData from "./operator.json";
import userData from "./user.json";
import { OPERATOR, USER } from "./constants";

/* Operator START */
const currentOperatorKey = "sat_tv";
function getOperatorData(key) {
  return operatorData[currentOperatorKey][key];
}

const { OPERATOR_NAME, BASE_PACKS, CHANNELS, SERVICES } = OPERATOR;

const getOperatorName = getOperatorData(OPERATOR_NAME);

const getPacks = getOperatorData(BASE_PACKS);

const getChannels = getOperatorData(CHANNELS);

const getServices = getOperatorData(SERVICES);
/* Operator END */

/* User START */
function getUserData(key) {
  return userData[key];
}

const { USERNAME, EMAIL, CONTACT } = USER;

const getUserName = getUserData(USERNAME);

const getUserMail = getUserData(EMAIL);

const getUserContact = getUserData(CONTACT);
/* User END */

/* Common Export */
export {
  getOperatorName,
  getPacks,
  getServices,
  getChannels,
  getUserName,
  getUserMail,
  getUserContact
};
