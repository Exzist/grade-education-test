import type { Module } from "vuex/types/index.js";

interface Review {
  evaluation: number;
  reviewsNumber: number;
}

interface ReviewState {
  reviews: Review[];
}

interface ApiResponse {
  reviews: Review[];
}

const state: ReviewState = {
  reviews: [],
};

const reviewModule: Module<ReviewState, any> = {
  namespaced: true,
  state,
  getters: {
    allReviews: (state) => state.reviews,
  },
  mutations: {
    SET_REVIEWS(state, reviews: Review[]) {
      state.reviews = reviews;
    },
  },
  actions: {},
};

export default reviewModule;
