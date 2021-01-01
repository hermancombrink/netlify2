<template>
  <div>
    <div class="main-content">
      <section class="iq-blogs">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <page-detail :page="page" />
            </div>
          </div>
        </div>
      </section>

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
import contact from '@/components/main/contact'

import pageDetail from '@/components/main/page-detail'
export default {
  components: {
    pageDetail,
    contact
  },
  async asyncData ({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(`${slug}`)
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
    return {}
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
