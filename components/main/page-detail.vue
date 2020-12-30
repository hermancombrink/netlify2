<template>
  <div>
    <b-row class="text-center">
      <b-col lg="12">
        <ul class="list-unstyled">
          <li class="mb-2">
            <h1>
              {{ page.title }}
            </h1>
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
    <nuxt-content :document="page" />
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
