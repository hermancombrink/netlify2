<template>
  <div>
    <div class="main-content pt-5 overflow">
      <home id="iq-home" />
      <about id="iq-about" />
      <feature id="iq-feature" />
      <contact id="iq-contact" />
    </div>

    <FooterStyle01
      :footer-logo="''"
      :footer-text="''"
      :footer-title="''"
      :footer-description="''"
    />
  </div>
</template>
<script>
import { sofbox } from '@/assets/app/app'
import about from '@/components/main/about'
import home from '@/components/main/home'
import feature from '@/components/main/feature'
import contact from '@/components/main/contact'

export default {
  components: {
    home,
    about,
    feature,
    contact
  },
  data () {
    return {
    }
  },
  mounted () {
    setTimeout(function () {
      sofbox.index()
      sofbox.initRevSliderSaasMain()
    }, 1000)
  },
  layout: 'XTMain',
  head () {
    return {
      title: 'Xebra Tech Ltd',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Developer Portfolio'
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: 'Xebra Tech Ltd' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Developer Portfolio'
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Xebra Tech Ltd'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Developer Portfolio'
        }
      ]
    }
  }
}
</script>
