const makeTataAiaApiCall = require("../../common/tata-aia-api-call");

class AuthServices {
  getUID = async () => {
    return { success: true, msg: "Successfully executed!" };
  };

  generateOtpByMobile = async () => {};
}

module.exports = new AuthServices();