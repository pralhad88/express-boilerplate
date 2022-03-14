const makeTataAiaApiCall = require("../../common/api-call");

class PolicieServices {
  getPolicies = async () => {
    return { msg: "List Of polices", success: true };
  };

  getPoliciesByNumber = async () => {};
}

module.exports = new PolicieServices();
