<template>
  <section class="sofbox-gradient-bg-top pb-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h2 class="mb-3">
            Xebra Tech Ltd
          </h2>
          <div
            class="owl-carousel our-testimonial"
            data-autoplay="true"
            data-loop="true"
            data-nav="false"
            data-dots="true"
            data-items="1"
            data-items-laptop="1"
            data-items-tab="1"
            data-items-mobile="1"
            data-items-mobile-sm="1"
          >
            <div
              v-for="(list, index) in List"
              :key="index"
              class="item text-left"
            >
              <div class="iq-testimonial">
                <div class="testimonial-info">
                  <div class="testimonial-name mb-3">
                    <h5 class="d-inline mr-3">
                      {{ list.name }}
                    </h5>
                    <span class="sub-title">{{ list.design }}</span>
                  </div>
                </div>
                <p>{{ list.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 p-7 mb-5 mt-5">
          <div class="testimonial-circle postion-relative">
            <div class="testimonial-img">
              <ul class="list-inline mb-0">
                <li
                  v-for="(list, index) in images"
                  :key="index"
                  class="list-inline-item"
                >
                  <img
                    :src="list.image"
                    class="img-fluid client-img wow zoomIn"
                    alt="image0"
                  >
                </li>
              </ul>
              <div class="dot-circle">
                <div class="effect-circle" />
              </div>
              <div class="main-circle">
                <div class="circle-bg">
                  <img src="@/assets/xebra-tech/xt-logo.png" alt="Xebra Tech">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Testimonial',
  data () {
    return {
      List: [
        {
          name: 'Herman Combrink',
          design: 'Architech/Developer',
          description:
            'Specializing in software development contracting and cloud architecture. With 16+ years experience in front-line tech companies and certified DBA and Azure Cloud Architect I strive to bring value and agility to my customers'
        },
        {
          name: 'Hamilton, NZ Based',
          design: 'Kiwi Resident',
          description:
            'Born in South Africa and based in NZ I have worked with a wide variaty of cultures both onsite and remote. Leading teams with bringing people, process and technological tools together.'
        },
        {
          name: 'Adaptability',
          design: 'Adopting the right tools at the right time is key',
          description:
            'With over 1500 service providers and products listed by the CNCF, choosing the right stack for a company in the ever expanding technology landscape, is vital to its strategy and success.'
        }
      ],

      images: [
        { image: require('@/assets/tech/vuejs.png') },
        { image: require('@/assets/tech/netcore.png') },
        { image: require('@/assets/tech/sqlserver.png') },
        { image: require('@/assets/tech/docker.png') },
        { image: require('@/assets/tech/azure.png') },
        { image: require('@/assets/tech/k8.png') },
        { image: require('@/assets/tech/powerbi.png') },
        { image: require('@/assets/tech/elk.png') }
      ]
    }
  }
}
</script>
<style scoped>
.sofbox-gradient-bg-top {
  background-image: url(../../assets/sofbox-v2/images/home-1/15.png);
  background-position: 0 0 !important;
  background-repeat: no-repeat !important;
}
.testimonial-img .list-inline {
  overflow: hidden;
}
</style>
