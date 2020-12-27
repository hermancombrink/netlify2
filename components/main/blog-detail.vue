<template>
  <div class="blog-img">
    <img :src="page.image" class="img-fluid mb-3" alt="Page Header">
    <div class="blog-box">
      <ul class="d-inline-block float-left">
        <li class="d-inline">
          <span class="pl-2 text-white">{{ page.author.name }}</span>
        </li>
        <li class="d-inline ml-3">
          <a
            href="javascript:void(0)"
            class=""
          ><i class="far fa-calendar-alt" />
            {{ $moment(page.createdAt).format('YYYY-MMM-DD') }}</a>
        </li>
      </ul>
    </div>
    <h3 class="mb-3">
      {{ page.title }}
    </h3>
    <div class="address text-white mb-3">
      <a
        href="javascript:void(0)"
      ><i class="fas fa-tags mr-3" /> {{ page.description }}</a>
    </div>
    <p class="mb-5">
      <nuxt-content :document="page" />
    </p>

    <div class="clearfix" />
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
