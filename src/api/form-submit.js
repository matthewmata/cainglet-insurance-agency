const axios = require("axios");

exports.handler = async function (event, context) {
  console.log('event', event);
  console.log('context', context);
  console.log('ran form submit')
  try {
    const { phone_number, full_name, email, interestIn, comments } = JSON.parse(
      event.body
    );
    const response = await axios({
      method: "post",
      url: "https://formsubmit.co/ajax/matthewmata1030@gmail.com",
      data: {
        full_name,
        phone_number,
        email,
        interestIn,
        comments,
      },
    });
    console.log(response)
    return {
      statusCode: 200,
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};
