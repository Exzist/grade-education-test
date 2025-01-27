import { createStore } from "vuex";
import reviewModule from "@/store/modules/reviews";

export default createStore({
  modules: {
    reviews: reviewModule,
  },
});
