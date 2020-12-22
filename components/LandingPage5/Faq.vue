<template>
  <section class="overview-block-ptb white-bg iq-asked-1">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <SectionStyle>
            <div slot="sectionTitle">
              <h3 class="title iq-tw-7">
                Frequently Asked Questions
              </h3>
            </div>
            <div slot="sectionDescription">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </SectionStyle>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="iq-accordion iq-mlr-40">
            <div class="iq-accordion accordion-active">
              <a v-b-toggle.collapse-1 href="javascript:void(0)" class="accordion-title iq-tw-7 iq-font-grey">Ipsum is simply dummy the printing?</a>
              <b-collapse id="collapse-1" :visible="true" accordion="faq-accordian" class="accordion-details">
                <div class="row">
                  <div class="col-sm-3">
                    <img alt="#" class="img-fluid" :src="require('../../assets/images/blog/01.jpg')">
                  </div>
                  <div class="col-sm-9">
                    It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est.
                  </div>
                </div>
              </b-collapse>
            </div>
            <div class="iq-accordion">
              <a v-b-toggle.collapse-2 href="javascript:void(0)" class="accordion-title iq-tw-7 iq-font-grey">Dummy the printing and type setting?</a>
              <b-collapse id="collapse-2" accordion="faq-accordian" class="accordion-details">
                It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est.
              </b-collapse>
            </div>
            <div class="iq-accordion">
              <a v-b-toggle.collapse-3 href="javascript:void(0)" class="accordion-title iq-tw-7 iq-font-grey">Standard dummy since the 1500s?</a>
              <b-collapse id="collapse-3" accordion="faq-accordian" class="accordion-details">
                <div class="row">
                  <div class="col-sm-9">
                    It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est.
                  </div>
                  <div class="col-sm-3">
                    <img alt="#" class="img-fluid" :src="require('../../assets/images/blog/01.jpg')">
                  </div>
                </div>
              </b-collapse>
            </div>
            <div class="iq-accordion">
              <a v-b-toggle.collapse-4 href="javascript:void(0)" class="accordion-title iq-tw-7 iq-font-grey">It has survived five centuries?</a>
              <b-collapse id="collapse-4" accordion="faq-accordian" class="accordion-details">
                It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est.
              </b-collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionStyle from '../sofbox/Sections/SectionStyle'
export default {
  name: 'Faq',
  components: { SectionStyle }
}
</script>

<style>
.iq-accordion .accordion-details{
  display: block;
}
</style>
