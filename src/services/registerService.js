import axios from "axios";
import config from "@/config.json";

const apiEndPoint = config.configApiEndpoint + "/wp/v2/users/register";

export default {
  registerUser: function(data) {
    return axios
      .post(apiEndPoint, data)
      .then(response => {
        if (response.status === 200) {
          return response;
        }
      })
      .catch(ex => {
        if (ex.response.status === 400) {
          throw ex.response.data.message;
        } else {
          throw ex.response;
        }
      });
  }
};
