<template>
  <div class="blog-img">
    <b-row>
      <b-col lg="6">
        <ul class="list-unstyled">
          <li class="mb-2">
            <h4>
              {{ page.title }}
            </h4>
          </li>
          <li>
            <small>
              <i class="far fa-calendar-alt" />
              {{ $moment(page.createdAt).format('DD MMMM YYYY') }}
            </small>
          </li>
        </ul>
      </b-col>
    </b-row>
    <p class="mb-5">
      <nuxt-content :document="page" />
    </p>
  </div>
</template>
<script>
export default {
  name: 'BlogDetail',
  props: {
    page: { type: [String, Object], default: () => '' }
  },
  data () {
    return {}
  }
}
</script>
<style scoped></style>
