const axios = require("axios");

function getHeaders(token) {
  return {
    Authorization: `Bearer ${token})}`,
    "content-type": "application/json",
  };
}

const makeTataAiaApiCall = async (apiPath, method, params, bodyData, token) => {
  const url = `${app_config.services.TATA_AIA_API_SERVER}${apiPath}`;
  const newParams = { ...params };
  const header = getHeaders(token);
  let apiCall;
  switch (method.toLowerCase()) {
    case "get":
      try {
        apiCall = await axios.get(url, { params: newParams, headers: header });
        if (apiCall.data.status == 200) {
          return apiCall.data;
        } else {
          return {
            success: false,
            msg: ex.message,
          };
        }
      } catch (ex) {
        return {
          success: false,
          msg: ex.message,
        };
      }
    case "post":
      try {
        apiCall = await axios.post(url, bodyData, {
          params: newParams,
          headers: header,
        });
        if (apiCall.data.status == 200) {
          return apiCall.data;
        } else {
          return {
            success: false,
            msg: ex.message,
          };
        }
      } catch (ex) {
        return {
          success: false,
          msg: ex.message,
        };
      }
    case "delete":
      try {
        apiCall = await axios.delete(url, {
          params: newParams,
          headers: header,
          data: bodyData,
        });
        if (apiCall.data.status == 200) {
          return apiCall.data;
        } else {
          return {
            success: false,
            msg: ex.message,
          };
        }
      } catch (ex) {
        return {
          success: false,
          msg: ex.message,
        };
      }
    case "put":
      try {
        apiCall = await axios.put(url, bodyData, {
          params: newParams,
          headers: header,
        });
        if (apiCall.data.status == 200) {
          return apiCall.data;
        } else {
          return {
            success: false,
            msg: ex.message,
          };
        }
      } catch (ex) {
        return {
          success: false,
          msg: ex.message,
        };
      }
    default:
      break;
  }
};

module.exports = makeTataAiaApiCall;
