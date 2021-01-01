<template>
  <section id="iq-blog" class="pb-0 align-left pt-0 pb-5">
    <div class="container">
      <b-row>
        <b-col lg="12">
          <SectionTitle01 :title-section-prop="titleSectionProp" />
        </b-col>
        <b-col lg="12">
          <BlogPost01 :post-list="articles" />
        </b-col>
      </b-row>
      <b-btn
        variant="outline-dark"
        size="sm"
        :to="'/blog-list'"
        class="button gradient-btn button-icon mt-5"
      >
        Read More
      </b-btn>
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
