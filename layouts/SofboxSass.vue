<template>
  <div>
    <Loader />
    <HeaderStyle3
      :logo-img="logo"
      :nav-item-list="navItems"
      :styled-logo="true"
      class-name="main-bg"
    />
    <nuxt />
    <ScrollTop />
  </div>
</template>
<script>
// import { menu } from '../config/constant.js'
import logoImg from '../assets/sofbox-sass-black/images/logo.png'
import Loader from '~/components/sofbox/Loader'
export default {
  name: 'SofboxSass',
  components: { Loader },
  data () {
    return {
      styleLogo: false,
      logo: logoImg,
      navItems: [
        {
          href: '/',
          title: 'Home',
          redirect: true,
          _is_active: true
        },
        { href: '#how-it-works', title: 'Service', redirect: true },
        { href: '#about-us', title: 'About Us', redirect: true },
        { href: '#feature', title: 'Feature', redirect: true },
        { href: '#team', title: 'Team', redirect: true },
        { href: '#testimonial', title: 'Testimonial', redirect: true },
        { href: '#pricing', title: 'Pricing', redirect: true },
        {
          href: '#blog',
          title: 'Blog',
          _is_active: false,
          children: true,
          child: [
            { href: '/blog-list', title: 'All Blog' },
            { href: '/blog-detail', title: 'Blog Detail' },
            {
              href: '/blog-detail-left-sidebar',
              title: 'Blog Details Left Sidebar'
            },
            {
              href: '/blog-detail-right-sidebar',
              title: 'Blog Details Right Sidebar'
            },
            { href: '/blog-list-left-sidebar', title: 'Blog Left Sidebar' },
            { href: '/blog-list-right-sidebar', title: 'Blog Right Sidebar' }
          ]
        },
        {
          href: '#pages',
          title: 'Pages',
          _is_active: true,
          children: true,
          child: [
            { href: '/404', title: '404 Error' },
            { href: '/coming-soon', title: 'Coming Soon' },
            { href: '/maintenance', title: 'Maintenance' }
          ]
        },

        { href: '/contact-us', title: 'Contact Us', redirect: true }
      ]
    }
  },
  beforeMount () {},
  head () {
    return {
      bodyAttrs: {
        'data-spy': 'scroll',
        'data-offset': '80',
        class: 'main-bg'
      }
    }
  }
}
</script>
<style>
@import url('../assets/sofbox-sass-black/css/flaticon.css');
@import url('../assets/sofbox-sass-black/css/typography.css');
@import url('../assets/sofbox-sass-black/css/style.css');
@import url('../assets/sofbox-sass-black/revslider/css/settings.css');
@import url('../assets/sofbox-sass-black/css/responsive.css');
.main-bg {
  background-size: cover !important;
}
</style>
