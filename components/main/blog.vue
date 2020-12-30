<template>
  <section id="iq-blog" class="pb-0">
    <div class="container">
      <b-row>
        <b-col lg="12">
          <SectionTitle01 :title-section-prop="titleSectionProp" />
        </b-col>
        <b-col lg="12">
          <BlogPost01 :post-list="articles" />
        </b-col>
      </b-row>
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
        title: 'Latest posts',
        description: 'Concepts and ideas worth a mention'
      },
      articles: []
    }
  }
}
</script>
