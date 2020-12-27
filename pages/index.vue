<template>
  <div>
    <Home id="iq-home" />
    <div class="main-content pt-5 overflow">
      <about id="iq-about" />
      <feature id="iq-feature" />
      <blog />
      <contact id="iq-contact" />
    </div>

    <VTwoFooterStyle2
      :footer-logo="footerLogo"
      :footer-text="''"
      :footer-title="''"
      :footer-description="''"
    />
  </div>
</template>
<script>
import { sofbox } from '@/assets/app/app'
import about from '@/components/saas-main/about'
import Home from '@/components/saas-main/home'
import feature from '@/components/saas-main/feature'
import blog from '@/components/saas-main/blog'
import contact from '@/components/saas-main/contact'
import footerLogo from '@/assets/sofbox-v2/images/home-2/logo-white.png'
export default {
  components: {
    Home,
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
  head: {
    title: 'Xebra Tech Ltd'
  },
  layout: 'SaasMain'
}
</script>
