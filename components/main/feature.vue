<template>
  <section id="iq-feature" class="align-left pt-0 pb-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="popup-images align-left">
            <div class="img-one wow zoomIn" data-wow-duration="0.6s">
              <img src="@/assets/xebra-tech/401.png" alt="image1">
            </div>
            <div class="d-block" />
          </div>
          <div class="layer_wrap iq-objects style-two left-top">
            <span class="iq-objects-02">
              <img src="@/assets/xebra-tech/07.png" alt="drive02">
            </span>
            <span class="iq-objects-03">
              <img src="@/assets/xebra-tech/05.png" alt="drive02">
            </span>
          </div>
        </div>
        <div class="col-lg-6">
          <SectionTitle01 :title-section-prop="titleSectionProp" />
        </div>
      </div>
      <b-btn
        variant="outline-dark"
        size="sm"
        :to="'/about-me'"
        class="button gradient-btn button-icon mt-5"
      >
        Read More
      </b-btn>
      <b-btn
        variant="outline-dark"
        size="sm"
        href="/xebra-tech/HCOMBRINK.pdf"
        class="button gradient-btn button-icon mt-5"
      >
        Download Resume
      </b-btn>
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
