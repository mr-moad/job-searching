<template>
  <section class="container jobs-list">
        <h1 class="jobs-list__title">you have {{ itemsCount }} element</h1>
        <div class="jobs-list__items">

            <template v-if="itemsList.length">
                <div 
                    class="jobs-list__item"
                    v-for="item in itemsList"
                    :key="item.id">
                    <div class="item-header">
                        <img class="company__image" :src="item.companyImage" alt="logo">
                        <div class="company-info">
                            <div class="company-name">{{item.jobCompany}}</div>
                            <div class="company-location">{{item.jobLocation}}</div>
                        </div>
                    </div>
                    <div class="item-title">
                        {{ item.jobTitle}}
                    </div>
                    <p class="item-decription">
                        {{ item.jobDecription }}
                    </p>
                    <div class="item-buttons">
                        <button class="apply btn btn--primary">apply now</button>
                        <button class="message btn btn--secondary">message</button>
                    </div>
                </div>
            </template>
            <div v-else>
                no job found
            </div>
        </div>
    </section>
</template>

<script>
import {ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
    name : 'JobsList',
    setup(){
        const itemsCount = ref('');
        const store = useStore();
        store.dispatch('getJObs');
        const itemsList = computed(() => {
                    const data = store.getters.getJobsList;
                    return data.filter(item => {
                        console.log(item);
                        const a= item.jobTitle.includes(store.getters.getSearchedTitle);
                        const b = item.jobCompany.includes(store.getters.getSearchedCompany) ;
                        const c= item.jobLocation.includes(store.getters.getSearchedLocation) ;
                        return ( a && c && b);
                    });
                }
        );
        itemsCount.value = computed(() => itemsList.value.length);
        return{
            itemsCount,
            itemsList
        }
    },
}
</script>
<style lang="scss" scoped>
.jobs-list{
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.jobs-list__title{
    text-align: center;
    text-transform: uppercase;
    font-size: .875em;
}

.jobs-list__items{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
.jobs-list__item{
    flex: 1 0 300px;
    border-radius: 10px;
    background-color: #1C1C24;
    box-shadow: 0px 0px 1px darken($color: #1C1C24, $amount: 4);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.02);
    }
}

.item-header{
    display: flex;
    gap: 1rem;
    align-items: center;
}
.company__image{
    width: 60px;
    height: 60px;
    border-radius: 10px;
}
                
.item-title{
    font-size: 1.4em;
    font-weight: 600;
    text-transform: capitalize;
}
.item-decription{
    line-height: 1.4;
    letter-spacing: .03em;
    font-weight: 600;
    color: #96939B;
    max-height: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.item-buttons{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.company-info{
    display: flex;
    flex-direction: column;
    gap: .5em;
    .company-name{
        font-weight: 600;
        text-transform: uppercase;
    }
    .company-location{
        color: whitesmoke;
    }
}
</style>