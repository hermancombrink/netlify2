<template>
  <section id="iq-feature" class="popup-images align-left pt-0 pb-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="popup-images align-left">
            <div class="img-one wow zoomIn" data-wow-duration="0.6s">
              <img
                src="@/assets/sofbox-v2/images/home-4/401.png"
                alt="image1"
              >
            </div>
            <div class="d-block" />
          </div>
          <div class="layer_wrap iq-objects style-two left-top">
            <span class="iq-objects-02">
              <img
                src="@/assets/sofbox-v2/images/home-1/07.png"
                alt="drive02"
              >
            </span>
            <span class="iq-objects-03">
              <img
                src="@/assets/sofbox-v2/images/home-1/image5.png"
                alt="drive02"
              >
            </span>
          </div>
        </div>
        <div class="col-lg-6">
          <SectionTitle01 :title-section-prop="titleSectionProp" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Feature',
  data () {
    return {
      titleSectionProp: {
        title: 'A little about me',
        description:
          'Father of 2 awesome boys and lucky to have the best wife/mother at my side. We are a tight knit family of 4 making to most of our time together',
        description2:
          'With a passion for the running world as well as the software development evolution I enjoy time at the desk as well as away from it on the dirt roads of New Zealand'
      }
    }
  }
}
</script>
