import ApiService from "@/core/services/ApiService";
import type { AxiosResponseHeaders } from "axios";
import type { Module } from "vuex/types/index.js";
import type { Review } from "@/assets/ts/interfaces/Review";

interface ReviewState {
  reviews: Review[];
  loading: boolean;
  error: string | null;
}

interface ApiResponse {
  config: object;
  data: Review[];
  headers: AxiosResponseHeaders;
  request: XMLHttpRequest;
  status: 200 | 404;
  satusText: string;
}

const state: ReviewState = {
  reviews: [],
  loading: false,
  error: null,
};

const reviewModule: Module<ReviewState, any> = {
  namespaced: true,
  state,
  getters: {
    allReviews: (state) => state.reviews,
    isLoading: (state) => state.loading,
    errorMessage: (state) => state.error,
  },
  mutations: {
    SET_REVIEWS(state, reviews: Review[]) {
      state.reviews = reviews;
    },
    SET_LOADING(state, isLoading: boolean) {
      state.loading = isLoading;
    },
    SET_ERROR(state, error: string | null) {
      state.error = error;
    },
  },
  actions: {
    async fetchReviews({ commit }) {
      commit("SET_LOADING", true);
      try {
        const response: ApiResponse = await ApiService.query(
          "grade_education_schema.json",
          {}
        );
        commit("SET_REVIEWS", response.data);
      } catch (error) {
        commit("SET_ERROR", "Error while fetching reviews data");
        console.error("Api error:", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
};

export default reviewModule;
