import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faPlus,
  faMinus,
  faStar,
  faHeart,
  faShoppingCart,
  faUserAstronaut,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPlus,
  faMinus,
  faStar,
  faHeart,
  faShoppingCart,
  faUserAstronaut,
  faSignInAlt,
  faFacebook,
  faInstagram,
  faTwitter
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
