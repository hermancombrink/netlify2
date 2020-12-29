<template>
  <div>
    <div id="loading">
      <div id="loading-center">
        <img src="@/assets/xebra-tech/xt-logo-w.png" alt="loader">
      </div>
    </div>
    <div class="container-fluid">
      <b-navbar toggleable="lg">
        <b-navbar-brand to="/">
          <img class="img-fluid sticky-logo" :src="logoImg" alt="img">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#iq-home" right>
              Home
            </b-nav-item>
            <b-nav-item href="#iq-about" right>
              About XT
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">
                EN
              </b-dropdown-item>
              <b-dropdown-item href="#">
                ES
              </b-dropdown-item>
              <b-dropdown-item href="#">
                RU
              </b-dropdown-item>
              <b-dropdown-item href="#">
                FA
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">
                Profile
              </b-dropdown-item>
              <b-dropdown-item href="#">
                Sign Out
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
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
      logoImg,
      logoWhite,
      navItems: [
        {
          href: '#iq-home',
          title: 'Home',
          active: true
        },
        { href: '#iq-about', title: 'About XT' },
        { href: '#iq-feature', title: 'About Me' },
        { href: '#iq-blog', title: 'XT Blog' },
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
