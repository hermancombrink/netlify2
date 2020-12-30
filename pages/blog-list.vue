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
import BlogListing from '@/components/Sofbox-sass/BlogListing'
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
      blogList: [
        {
          media: require('@/assets/sofbox-sass-black/images/blog/03.jpg'),
          title: 'Fully Dedicated Finding',
          // tslint:disable-next-line:max-line-length
          description:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          createddate: 'April 05, 2019',
          likes: '60',
          comments: '20'
        },
        {
          media: require('@/assets/sofbox-sass-black/images/blog/03.jpg'),
          title: 'Fully Dedicated Finding',
          // tslint:disable-next-line:max-line-length
          description:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          createddate: 'April 05, 2019',
          likes: '60',
          comments: '20'
        },
        {
          media: require('@/assets/sofbox-sass-black/images/blog/03.jpg'),
          title: 'Fully Dedicated Finding',
          // tslint:disable-next-line:max-line-length
          description:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          createddate: 'April 05, 2019',
          likes: '60',
          comments: '20'
        }
      ]
    }
  },
  mounted () {
    sofbox.index()
  }
}
</script>
