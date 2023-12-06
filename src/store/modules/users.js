/* eslint-disable no-undef */
import Vue from "vue";
import $request from "@/axios";
// import config from "@/config.js";

// import router from 'router'

Vue.use(require("vue-moment"));

const getDefaultState = () => {
  return {
    loading: false,
    error: false,
    success: false,
    regError: false,
    regSuccess: false,
    validationErrors: {},
    user: {},
    loggedIn: false,
    dataSet: [],
    singleDataSet: {},
  };
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    isLoading: (state) => state.loading,
  },

  mutations: {
    SET_LOADING(state) {
      state.loading = true;
      state.error = false;
      state.success = false;
      state.regError = false;
      state.regSuccess = false;
      state.validationErrors = {};
    },

    SET_ERROR(state, message) {
      state.error = message;
      state.success = false;
      state.loading = false;
      state.validationErrors = {};
    },

    SET_SUCCESS(state, message) {
      state.success = message;
      state.error = false;
      state.validationErrors = {};
      state.loading = false;
    },

    SET_VALIDATION_ERRORS(state, payload) {
      state.loading = false;
      state.validationErrors = payload;
    },

    REMOVE_ERROR_SUCCESS(state) {
      state.error = false;
      state.success = false;
      state.regError = false;
      state.regSuccess = false;
      state.validationErrors = {};
      state.loading = false;
    },

    SET_DATA(state, payload) {
      state.dataSet = payload.data;
      state.metaSet = payload.meta
      state.error = false;
      state.validationErrors = {};
      state.loading = false;
    },

    SET_SINGLE_DATA(state, payload) {
      state.singleDataSet = payload;
      state.error = false;
      state.validationErrors = {};
      state.loading = false;
    },
  },
  actions: {
    // Get Users
    async list({ commit }) {
      commit("SET_LOADING");
      NProgress.start();
      try {
        let res = await $request.get("/admin/users");
        let resPayload = res.data;
        console.log(res);
        commit("SET_DATA", resPayload);
        return res;
      } catch (err) {
        console.log(err);
      } finally {
        NProgress.done();
      }
    },

    // Get Single User
    async view({ commit }, id) {
      NProgress.start();
      try {
        let res = await $request.get(`/admin/users/${id}`);
        let resPayload = res.data;
        console.log(res);
        commit("SET_SINGLE_DATA", resPayload);
        return res;
      } catch (error) {
        console.log(error);
      } finally {
        NProgress.done();
      }
    },
  },
};
