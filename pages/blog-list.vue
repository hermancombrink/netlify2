<template>
  <div>
    <div>
      <div class="main-content">
        <section class="iq-blogs">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <BlogListing sm="12" md="12" lg="12" :bloglists="blogList" />
              </div>
              <div class="col-lg-4">
                <SideBar01 />
              </div>
            </div>
          </div>
        </section>
        <contact id="iq-contact" />
      </div>

      <FooterStyle01
        :footer-logo="footerLogo"
        :footer-text="''"
        :footer-title="''"
        :footer-description="''"
      />
    </div>
  </div>
</template>

<script>
import { sofbox } from '@/assets/app/app'
import BlogListing from '@/components/main/blog-listing'
import contact from '@/components/main/contact'

export default {
  name: 'Index',
  layout: 'XTContent',
  components: {
    BlogListing,
    contact
  },
  data () {
    return {
      blogList: []
    }
  },
  mounted () {
    sofbox.index()
  }
}
</script>
