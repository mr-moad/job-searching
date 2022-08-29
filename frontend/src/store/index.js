import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    searchedTitle : '',
    searchedCompany : '',
    searchedLocation : '',
    jobsList : [],
  },
  getters: {
    getSearchedTitle(state){
      return state.searchedTitle;
    },
    getSearchedCompany(state){
      return state.searchedCompany;
    },
    getSearchedLocation(state){
      return state.searchedLocation;
    },
    getJobsList(state){
      return state.jobsList;
    }
  },
  mutations: {
    updateSearchedTitle(state, data){
      state.searchedTitle = data;
    },
    updateSearchedCompany(state, data){
      state.searchedCompany = data;
    },
    updateSearchedLocation(state, data){
      state.searchedLocation = data;
    },
    updateJobsList(state, data){
      console.log(data);
      state.jobsList = data;
    },
  },
  actions: {
    async getJObs(context){
      const response = await axios.get('https://job-searching-ma.herokuapp.com/jobs');
      context.commit('updateJobsList',response.data);
    },
  },
  modules: {
  }
})
