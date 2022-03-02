<template>

  <div class="container">

    <Hero />

    <LargeCardDisplay
      v-for="cardInfo in largeCardSections"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
    />

    <SmallCardDisplay
      v-for="cardInfo in smallCardSections"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
    />

  </div>

</template>


<script>

  import { largeCardSections, smallCardSections }
    from '@/assets/data.js'

  export default {

    data () {

      return {
        largeCardSections,
        smallCardSections
      }
      
    }

  }

</script>
