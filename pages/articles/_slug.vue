<template>
  <div>
    <div class="main-content">
      <section class="iq-blogs">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <blog-detail :page="page" />
            </div>
            <div class="col-lg-4">
              <SideBar01 />
            </div>
          </div>
        </div>
      </section>
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
import blogDetail from '@/components/main/blog-detail'
import footerLogo from '@/assets/sofbox-v2/images/home-2/logo-white.png'
export default {
  components: {
    blogDetail
  },
  async asyncData ({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(`articles/${slug}`)
      .fetch()
      // eslint-disable-next-line handle-callback-err
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page
    }
  },
  data () {
    return { footerLogo }
  },
  mounted () {
    sofbox.index()
  },
  layout: 'XTContent',
  head () {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.page.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.page.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.page.description
        }
      ]
    }
  }
}
</script>
