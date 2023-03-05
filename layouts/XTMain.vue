<template>
  <div>
    <div id="loading">
      <div id="loading-center">
        <img src="@/assets/xebra-tech/xt-logo-w.png" alt="loader">
      </div>
    </div>
    <HeaderStyle01
      :logo-img="logoWhite"
      :nav-item-list="navItems"
      :styled-logo="styleLogo"
      class-name="main-header"
      :logo-white="logo"
    />
    <nuxt />
    <ScrollTop01 />
  </div>
</template>
<script>
import logoImg from '@/assets/xebra-tech/xt-logo-w.png'
import logoWhite from '@/assets/xebra-tech/xt-logo.png'
export default {
  name: 'XTMain',
  data () {
    return {
      styleLogo: false,
      logo: logoImg,
      logoWhite,
      navItems: [
        {
          href: '#iq-home',
          title: 'Home',
          active: true
        },
        { href: '#iq-about', title: 'About XT' },
        { href: '#iq-feature', title: 'About Me' },
        { href: '#iq-contact', title: 'Contact Me' }
      ]
    }
  },
  mounted () {},
  head () {
    return {
      bodyAttrs: {
        'data-spy': 'scroll',
        'data-offset': '80'
      }
    }
  }
}
</script>
<style>
@import url('@/assets/sofbox-v2/css/variable/saasmain-variable.css');
@import url('@/assets/sofbox-v2/css/typography.css');
@import url('@/assets/sofbox-v2/css/sofbox-style.css');
@import url('@/assets/sofbox-v2/css/responsive.css');
</style>
