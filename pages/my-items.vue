<template>

  <div class="container">
    <MyItem 
      v-for="rental in myRentals"
      :key="rental.id"
      :item="rental"
    />
  </div>

</template>


<script>

  import { mapState } from 'vuex'

  export default {

    layout (context) {
      return 'no-nav'
    },
    
    computed: {
      ...mapState ([ 'myRentals' ])
    }

  }

</script>


<style scoped lang="sass">

  .container
    padding: 5rem 0

</style>