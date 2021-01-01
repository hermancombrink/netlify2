<template>
  <div id="back-to-top" style="display: none">
    <a id="top" class="top" @click="scrollTop()">
      <i class="ion-ios-arrow-up" />
    </a>
  </div>
</template>
<script>
const $ = require('jquery')
export default {
  name: 'ScrollTop01',
  methods: {
    scrollTop () {
      $('body,html').animate(
        {
          scrollTop: 0
        },
        800
      )
    }
  }
}
</script>
