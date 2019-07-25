import axios from "axios";
import config from "@/config.json";
import store from "@/store";

const apiEndPoint = config.configApiEndpoint + "/jwt-auth/v1/token";

export default {
  authUser: function(data) {
    return axios
      .post(apiEndPoint, data)
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          store.dispatch("toggleIsAuth");
        }
      })
      .catch(ex => {
        if (ex.response.data.code.match("invalid_username")) {
          throw "Invalid Username";
        } else if (ex.response.data.code.match("incorrect_password")) {
          throw "Incorrect Password";
        } else {
          throw "Please, check your Internet connection and try again";
        }
      });
  }
};
