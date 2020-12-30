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
    <div class="logo">
      <div class="iq-copyright pl-5 mt-5 pt-5 text-white">
        Copyright @ {{ $moment().format('YYYY') }}.
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
<style scoped>
.iq-copyright {
  position: relative;
}
</style>
