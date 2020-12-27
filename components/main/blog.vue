<template>
  <section id="iq-blog" class="pb-70">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <SectionTitle01 :title-section-prop="titleSectionProp" />
        </div>
        <div class="col-lg-12">
          <BlogPost01 :post-list="articles" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Blog',
  async fetch () {
    this.articles = await this.$content('articles')
      .sortBy('createdAt', 'desc')
      .limit(6)
      .fetch()
  },

  data () {
    return {
      titleSectionProp: {
        title: 'Latest Posts',
        description: 'Concepts and ideas worth a mention'
      },
      articles: []
    }
  }
}
</script>
