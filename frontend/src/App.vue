<template>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');
*,
*::after,
*::before{
    box-sizing: border-box;
}
body{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    background-color: #11121A;
    font-family: 'Spartan', sans-serif;
    font-size: 1rem;
}
.container{
    width: 100%;
    max-width: 1440px;
    padding: 1rem;
    margin: 0 auto;
}
ul, li, p{
    margin: 0;
    padding: 0;
}
.btn{
    border :none;
    outline: none;
    font-weight: 700;
    transition: all .2s ease-in-out;
    cursor: pointer;
    border-radius: 10px;
    font-size: 1em;
    padding: .5em 1em;
    &--primary{
        background-color: #3060ff;
        color: white;
        &:hover{
            background-color: darken($color: #3060ff, $amount: 5);
        }
    }
    &--secondary{
        background-color: #2E2E39;
        color: white;
        &:hover{
            background-color: darken($color: #2E2E39, $amount: 5);
        }
    }
    
}
</style>
