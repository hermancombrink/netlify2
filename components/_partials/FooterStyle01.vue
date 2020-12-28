<template>
  <footer
    id="iq-contact"
    :class="
      footerClass !== undefined && footerClass
        ? 'iq-footer footer-shap footer-one position-relative' +
          ' ' +
          footerClass
        : 'iq-footer footer-shap footer-one iq-over-dark-90 position-relative'
    "
  >
    <div class="row">
      <div class="offset-sm-2 col-lg-5 col-md-6 col-sm-6">
        <div class="logo">
          <div class="iq-copyright mt-5 pt-5 text-white">
            Copyright @ {{ $moment().format('YYYY') }}.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterStyle01',
  props: {
    footerLogo: { type: String, default: '' },
    footerText: { type: String, default: '' },
    footerTitle: { type: String, default: '' },
    footerDescription: { type: String, default: '' },
    footerClass: { type: String, default: '' },
    buttonClass: { type: String, default: '' }
  }
}
</script>
