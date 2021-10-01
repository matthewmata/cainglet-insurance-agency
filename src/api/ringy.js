const axios = require("axios");
const { REACT_APP_RINGY_SID, REACT_APP_RINGY_AUTHTOKEN } = process.env;

exports.handler = async function (event, context) {

  try {
    const { phone_number, full_name, email } = JSON.parse(event.body);
    const response = await axios({
      method: "post",
      url: "https://app.ringy.com/api/public/leads/new-lead",
      data: {
        sid: REACT_APP_RINGY_SID,
        authToken: REACT_APP_RINGY_AUTHTOKEN,
        phone_number,
        full_name,
        email,
      },
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        vendorResponseId: response.data.vendorResponseId,
      }),
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};
