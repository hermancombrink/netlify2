<template>
  <div>
    <BlackBannerStyle1 title="Blog Detail right Sidebar">
      <template v-slot:bannerLinks>
        <ol class="breadcrumb title">
          <li class="breadcrumb-item">
            <a href="index.html" class="">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Blogs
          </li>
        </ol>
      </template>
    </BlackBannerStyle1>
    <div class="main-content">
      <section class="iq-blogs">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <Detail :page="page" />
            </div>
            <div class="col-lg-4">
              <BlackSidebar />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
import { sofbox } from '@/assets/app/app'
import Footer from '@/components/Sofbox-sass/Footer'
import Detail from '@/components/main/Blog-Detail'
export default {
  components: {
    Footer,
    Detail
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
