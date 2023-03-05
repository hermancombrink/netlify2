<template>
  <div>
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
  name: 'XTContent',
  data () {
    return {
      styleLogo: false,
      logo: logoImg,
      logoWhite,
      navItems: [
        {
          href: '/',
          title: 'Home',
          active: true,
          redirect: true
        },
        {
          href: '/about-xt',
          title: 'About XT',
          active: true,
          redirect: true
        },
        {
          href: '/about-me',
          title: 'About Me',
          active: true,
          redirect: true
        },
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
