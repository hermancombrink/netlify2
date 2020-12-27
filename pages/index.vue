<template>
  <div>
    <home id="iq-home" />
    <div class="main-content pt-5 overflow">
      <about id="iq-about" />
      <feature id="iq-feature" />
      <blog />
      <contact id="iq-contact" />
    </div>

    <FooterStyle01
      :footer-logo="footerLogo"
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
import blog from '@/components/main/blog'
import contact from '@/components/main/contact'
import footerLogo from '@/assets/sofbox-v2/images/home-2/logo-white.png'

export default {
  components: {
    home,
    about,
    feature,
    blog,
    contact
  },
  data () {
    return {
      footerLogo
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
