import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import axios from "axios";
import data from "~/static/menu.json";
Vue.use(Vuex)

const createStore = () =>
  new Vuex.Store({
    state: {
      menuIsActive: false,
      menuInitial: true,
      blogPosts: [],
      allPages: [],
      navheight: 60,
      blogTitle: '',
      siteInfo: [],
      connect: [],
      faq: [],
      shirt: [],
      about: [],
      cta: [],
      item: [],
      menu: [],
      gridItems: [],
      gridNumPosts: '11',
      gridNumCats: '11',
      gridOffset: '0',
      theThumbnail: '',
      theCategory: '',
      theCrumb: '',
      allCats: [],
      results: [],
      resultsnum: [],
      number: {
        orders: null,
      },
      cartUIStatus: 'idle',
      cart: [],
      clientSecret: "",
      storedata: data,
    },

    getters: {
      orders(state) {
        return state.number.orders
      },
      cartItems: state => {
        return state.cart.map(payload => payload);
      },
      clientSecret: state => state.clientSecret
    },

    actions: {
      async nuxtServerInit({ dispatch }) {
        await dispatch('getSiteInfo')
        await dispatch('getBlogPosts')
        await dispatch('getPages')
        await dispatch('getCats')
      },
      async createPaymentIntent({ getters, commit }) {
        try {
          // Create a PaymentIntent with the information about the order
          const result = await axios.post(
            "https://pit-master.netlify.app/.netlify/functions/create-payment-intent",
            {
              items: getters.cartItems
            },
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );

          if (result.data.clientSecret) {
            // Store a reference to the client secret created by the PaymentIntent
            // This secret will be used to finalize the payment from the client
            commit("setClientSecret", result.data.clientSecret);
          }
        } catch (e) {
          console.log("error", e);
        }
      },
      async getBlogPosts({ state, commit }) {
        const context = await require.context('~/content/blog/posts/', false, /\.json$/);

        const searchposts = await context.keys().map(key => ({
          ...context(key),
          _path: `/blog/${key.replace('.json', '').replace('./', '')}`
        }));



        commit('SET_POSTS', searchposts.reverse())

      },
      getPages({ state, commit }) {


        const faq = require('~/content/page/faq.json');
        const shirt = require('~/content/page/shirt.json');
        const about = require('~/content/page/about.json');
        const cta = require('~/content/page/cta.json');
        const notice = require('~/content/page/notice.json');
        const menu = require('~/content/page/menu.json');

        commit('SET_FAQ', faq)
        commit('SET_SHIRT', shirt)
        commit('SET_ABOUT', about)
        commit('SET_CTA', cta)
        commit('SET_NOTICE', notice)
        commit('SET_MENU', menu)

      },

      async getCats({ state, commit }) {


        const context = await require.context('~/content/categories/posts/', false, /\.json$/);

        const pages = await context.keys().map(key => ({
          ...context(key),
          _path: `/category/${key.replace('.json', '').replace('./', '')}`
        }));

        commit('SET_CATS', pages)

      },
      getSiteInfo({ state, commit }) {
        const info = require('~/content/setup/info.json');
        const connect = require('~/content/setup/connect.json');
        const context = require.context('~/content/blog/posts/', false, /\.json$/);


        const searchposts = context.keys().map(key => ({
          ...context(key),
          _path: `/blog/${key.replace('.json', '').replace('./', '')}`
        }));


        commit('SET_POSTS', searchposts)
        commit('SET_INFO', info)
        commit('SET_CONNECT', connect)

      },
      bindnumber: firestoreAction(async function ({ bindFirestoreRef }) {
        const ref = this.$fireStore
          .collection('slots')
          .doc('number')
        await bindFirestoreRef('number', ref, { wait: true })
      }),
      unbindnumber: firestoreAction(function ({ unbindFirestoreRef }) {
        unbindFirestoreRef('number', false)
      }),

    },
    mutations: {
      ...vuexfireMutations,
      SET_COUNT_DOCUMENT: (state, number) => {
        // Only needed for SSR/Universal Mode
        state.number = number
      },
      SET_POSTS(state, data) {
        state.blogPosts = data
      },
      SET_PAGES(state, data) {
        state.allPages = data
      },
      SET_CATS(state, data) {
        state.allCats = data
      },
      SET_CRUMB(state, data) {
        state.theCrumb = data
      },
      SET_GRIDITEMS(state, data) {
        state.gridItems = data
      },
      SET_GRIDNUMPOSTS(state, data) {
        state.gridNumPosts = data
      },
      SET_GRIDNUMCATS(state, data) {
        state.gridNumCats = data
      },
      SET_GRIDOFFSET(state, data) {
        state.gridOffset = data
      },
      SET_POSTCAT(state, data) {
        state.theCategory = data
      },
      SET_TAGS(state, data) {
        state.allTags = data
      },
      SET_THUMB(state, data) {
        state.theThumbnail = data
      },
      SET_TITLE(state, data) {
        state.blogTitle = data
      },
      SET_NAVHEIGHT(state, data) {
        state.navheight = data
      },
      SET_INFO(state, data) {
        state.siteInfo = data
      },
      SET_CONNECT(state, data) {
        state.connect = data
      },
      SET_FAQ(state, data) {
        state.faq = data
      },
      SET_SHIRT(state, data) {
        state.shirt = data
      },
      SET_ABOUT(state, data) {
        state.about = data
      },
      SET_CTA(state, data) {
        state.cta = data
      },
      SET_NOTICE(state, data) {
        state.notice = data
      },
      SET_MENU(state, data) {
        state.menu = data
      },
      SET_RESULTS(state, data) {
        state.results = data
      },
      paginateOn(state, data) {
        state.pagination = data
      },
      paginateOff(state, data) {
        state.pagination = data
      },
      resultsLength(state, data) {
        state.resultsnum = data
      },
      setMenuState(state, menuIsActive) {
        state.menuIsActive = menuIsActive
      },
      toggleMenuState(state) {
        state.menuIsActive = !state.menuIsActive
      },
      clearCart: state => {
        //this clears the cart
        (state.cart = []), (state.cartUIStatus = "idle");
      },
      addToCart: (state, payload) => {
        let itemfound = state.cart.find(el => el.item === payload.item);
        itemfound
          ? (itemfound.quantity = payload.quantity, itemfound.side1 = payload.side1, itemfound.side2 = payload.side2)
          : state.cart.push(payload);
      },
      setClientSecret: (state, payload) => {
        state.clientSecret = payload;
      },
      addOneToCart: (state, payload) => {
        let itemfound = state.cart.find(el => el.item === payload.item)
        itemfound ? itemfound.quantity++ : state.cart.push(payload)
      },
      removeOneFromCart: (state, payload) => {
        let index = state.cart.findIndex(el => el.item === payload.item)
        state.cart[index].quantity
          ? state.cart[index].quantity--
          : state.cart.splice(index, 1)
      },
      removeAllFromCart: (state, payload) => {
        state.cart = state.cart.filter(el => el.item !== payload.item)
      },
      updateCartUI: (state, payload) => {
        state.cartUIStatus = payload;
      },

    }
  });

export default createStore