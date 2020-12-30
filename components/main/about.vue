<template>
  <section class="pt-0 sofbox-fullrside-img">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <SectionTitle01 :title-section-prop="titleSectionProp" />
          <div class="row">
            <div class="col-lg-6">
              <div class="text-left">
                <ul class="iq-list wow fadeInUp">
                  <li v-for="(service, index) in service1" :key="index">
                    <i class="fa fa-check" /><span>{{ service.title }} </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="text-left">
                <ul class="iq-list wow fadeInUp">
                  <li v-for="(service, index) in service2" :key="index">
                    <i class="fa fa-check" /><span>{{ service.title }} </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <b-btn
            variant="outline-dark"
            size="sm"
            class="button gradient-btn button-icon mt-5"
          >
            Read More
          </b-btn>
        </div>
        <div class="col-lg-6 mt-5 mt-lg-0">
          <div
            v-for="(list, index) in List"
            :key="index"
            :class="
              index == 1
                ? 'color-palette wow fadeInUp text-left ml-lg-5 ml-0' +
                  ' ' +
                  list.hoverClass
                : 'color-palette wow fadeInUp text-left mr-lg-5 mr-0 ' +
                  ' ' +
                  list.hoverClass
            "
          >
            <div class="media">
              <div class="circle-icon">
                <i :class="list.icon" aria-hidden="true" />
              </div>
              <div class="media-body">
                <h4 class="color-text mb-2">
                  {{ list.title }}
                </h4>
                <p class="mb-0">
                  {{ list.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      titleSectionProp: {
        title: 'Solution design is art more than science',
        description:
          'Design and building long lasting value software is an iterative piece of art. Every evolving along with the needs of the end user. Xebra Tech strives to achieve this'
      },

      List: [
        {
          title: 'Easy to work with',
          icon: 'flaticon flaticon-project-management',
          hoverClass: 'purple-hover purple-arrow',
          description:
            'A solution should bring satisfaction to all users working with it, including developers, testers and support personnel'
        },
        {
          title: 'Seperation of concern',
          icon: 'flaticon flaticon-business',
          hoverClass: 'org-hover org-arrow',
          description:
            'Each component should be extensible, replaceable and strive to do 1 thing well. Identifying new boundries as the product grows and refactoring at the right time'
        },
        {
          title: 'Provide insight to its users',
          icon: 'flaticon flaticon-cloud',
          hoverClass: 'green-hover purple-arrow',
          description:
            'The data and meta data produced should be easily accessible to a systems end users. Diagnotic, descriptive, predictive, and even prescriptive analytics should be a self service'
        }
      ],
      service1: [
        { title: 'Software solution design' },
        { title: 'Full stack development' },
        { title: 'DevOps implementation' }
      ],

      service2: [
        { title: 'Database optimization and design' },
        { title: 'Self service business inteligence' },
        { title: 'Agile team coordination' }
      ]
    }
  }
}
</script>
