<template>
    <section class="search container">
        <div class="input__container">
            <i class="fa fa-search"></i>
            <input v-model="searchedTitle" type="text" name="search" placeholder="filter by title">
        </div>
        <div class="input__container">
            <i class="fa fa-building"></i>
            <input v-model="searchedCompany" type="text" name="search" placeholder="filter by company">
        </div>
        <div class="input__container">
            <i class="fa fa-map-marker-alt"></i>
            <input v-model="searchedLocation" type="text" name="search" placeholder="filter by location">
        </div>
    </section>
</template>

<script>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'TheSearch',
  setup(){
        const store = useStore();
        const searchedTitle = ref('');
        const searchedCompany = ref('');
        const searchedLocation = ref('');
        watch(searchedTitle,(newValue)=>{
            store.commit('updateSearchedTitle',newValue.toLowerCase());
        });
        watch(searchedCompany,(newValue)=>{
            store.commit('updateSearchedCompany',newValue.toLowerCase());
        });
        watch(searchedLocation,(newValue)=>{
            store.commit('updateSearchedLocation',newValue.toLowerCase());
        });
        return {
            searchedTitle,
            searchedCompany,
            searchedLocation
        }
  }
}
</script>
<style lang="scss" scoped>
.search{
    background-color: transparent;
    margin-top: 2em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
    border-radius: 5px;
    .input__container{
        flex: 1 0 220px;
        position: relative;
        overflow: hidden;
        padding: .875rem 2.5em;
        background-color: lighten($color: #1C1C24, $amount: 7);
        input{
            width: 100%;
            border: none;
            outline: none;
            color: #fff;
            font-size: 1em;
            letter-spacing: .05em;
            text-transform: capitalize;
            background-color: transparent;
        }
        i{
            position: absolute;
            top: 50%;
            left: .5em;
            transform: translateY(-50%);
            font-size: 1.4em;
            color: #fff;
        }
    }
}
</style>
