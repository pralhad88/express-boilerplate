const User = require("../../model/user");
const makeTataAiaApiCall = require("../../common/tata-aia-api-call");

class UserServices {
  getBanners = async () => {
    return { msg: "List Of polices", success: true };
  };

  createUser = async (payload) => {
    const createUser = await User.query().insert(payload)
    return {success: true, data: createUser}
  }
  getBannersById = async () => {};
}

module.exports = new UserServices();
