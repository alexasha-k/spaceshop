import axios from "axios";
import config from "@/config.json";

const apiEndPoint = config.configApiEndpoint + "/wc/v3/orders";

export default {
  createOrder: function(data) {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    return axios
      .post(apiEndPoint, data, config)
      .then(response => {
        if (response.status === 201) {
          return response.data;
        }
      })
      .catch(ex => {
        throw ex.response.message;
      });
  }
};
