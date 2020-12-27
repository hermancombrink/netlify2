import Vue from 'vue'
import _ from 'lodash'

const components = require.context('@/components/_partials')
_.forEach(components.keys(), (fileName) => {
  const componentConfig = components(fileName)
  const componentName = fileName.split('/').pop().split('.')[0]
  Vue.component(componentName, componentConfig.default || componentConfig)
})
