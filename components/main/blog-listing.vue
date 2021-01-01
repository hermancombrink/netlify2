<template>
  <div class="row">
    <div
      v-for="(list, index) in bloglists"
      :key="index"
      :class="'col-lg-' + lg + ' ' + 'col-md-' + md + ' ' + 'col-sm-' + sm"
    >
      <div class="effect-chico blog pb-5">
        <b-row>
          <b-col sm="6">
            <b-link :to="`${list.path}`">
              <img
                :src="list.image"
                class="img-fluid img-blog"
                alt="Blog Image"
              >
            </b-link>
          </b-col>
          <b-col sm="6">
            <div class="blog-info">
              <b-link :to="`${list.path}`">
                <h2 class="font-weight-bold">
                  {{ list.title }}
                </h2>
              </b-link>
              <small class="form-text text-muted">
                <i class="far fa-calendar-alt" />
                {{ $moment(list.createdAt).format('DD MMMM YYYY') }}
              </small>
              <p>{{ list.description }}</p>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlogListing',
  props: {
    lg: {
      type: String,
      default: '6'
    },
    md: {
      type: String,
      default: '6'
    },
    sm: {
      type: String,
      default: '6'
    },
    bloglists: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped>
.img-blog {
  max-height: 460px;
}
</style>
