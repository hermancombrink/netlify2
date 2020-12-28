<template>
  <div class="blog-img">
    <b-row>
      <b-col lg="6">
        <img
          :src="page.image"
          class="img-fluid mb-3 head-img"
          alt="Page Header"
        >
      </b-col>
      <b-col lg="6">
        <ul class="list-unstyled">
          <li class="mb-2">
            <h4>
              {{ page.title }}
            </h4>
          </li>
          <li>
            <span class="text-white text-muted">{{ page.author.name }}</span>
            <small class="form-text"> {{ page.author.bio }}</small>
          </li>
          <li>
            <small>
              <i class="far fa-calendar-alt" />
              {{ $moment(page.createdAt).format('DD MMMM YYYY') }}
            </small>
          </li>
          <li>
            <small> <i class="fas fa-tags" /> {{ page.description }} </small>
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
