<template>
  <div class="left-side-blog">
    <div class="iq-widget">
      <h5 class="iq-widget-title mb-2 title">
        Recent Posts
      </h5>
      <div class="iq-widget mb-3">
        <div class="iq-sidebar-widget">
          <div class="iq-widget-search position-relative">
            <b-input-group size="sm">
              <template #append>
                <b-input-group-text>
                  <i class="fa fa-search" />
                </b-input-group-text>
              </template>
              <b-form-input
                v-model="searchQuery"
                type="search"
                placeholder="Search Your Keyword"
              />
            </b-input-group>
          </div>
        </div>
      </div>
      <div v-for="(post, index) in articles" :key="index" class="media mb-3">
        <b-img thumbnail fluid :src="post.image" alt="Post Header" />
        <div class="media-body ml-3">
          <b-link :to="post.path" rel="bookmark">
            <h6 class="mt-0 iq-fw-4">
              {{ post.title }}
            </h6>
          </b-link>
          <i class="far fa-calendar-alt mr-2" />
          {{ $moment(post.createdAt).format('YYYY-MMM-DD') }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SideBar01',
  async fetch () {
    if (this.searchQuery) {
      this.articles = await this.$content('articles')
        .sortBy('createdAt', 'desc')
        .limit(6)
        .search(this.searchQuery)
        .fetch()
    } else {
      this.articles = await this.$content('articles')
        .sortBy('createdAt', 'desc')
        .limit(6)
        .fetch()
    }
  },
  data () {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
    async searchQuery (newVal) {
      if (this.searchQuery) {
        this.articles = await this.$content('articles')
          .sortBy('createdAt', 'desc')
          .limit(6)
          .search(this.searchQuery)
          .fetch()
      } else {
        this.articles = await this.$content('articles')
          .sortBy('createdAt', 'desc')
          .limit(6)
          .fetch()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.media img {
  width: 120px;
  display: block;
}
</style>
