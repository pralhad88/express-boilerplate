const Banner = require("../../model/banner");
const makeTataAiaApiCall = require("../../common/tata-aia-api-call");

class BannerServices {
  getBanners = async () => {
    return { msg: "List Of polices", success: true };
  };

  getBannersById = async () => {};
}

module.exports = new BannerServices();
