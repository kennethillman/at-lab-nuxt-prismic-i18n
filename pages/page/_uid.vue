<template>
  <section>
    <!-- i18n -->
    <h6>(Static from json)</h6>
    <h2>{{ $t('page.title') }}</h2>
    <h4>{{ $t('page.introduction') }}</h4> <br><br><br>
    <!-- Slices block component -->
    <h6>(From Prismic.io)</h6>
    <slices-block :slices="slices"/>
  </section>
</template>

<script>
// Imports for Prismic Slice components
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'page',
  components: {
    SlicesBlock
  },
  async asyncData({ $prismic, params, error, app}) {
    try{

      let page
      const prismicLang =  app.i18n.locale+"-"+app.i18n.locale

      if (app.i18n.locale === 'fr'){
        page = (await $prismic.api.getByUID('page', params.uid, { lang : prismicLang })).data
      }  else if (app.i18n.locale === 'sv'){
        page = (await $prismic.api.getByUID('page', params.uid, { lang : 'sv-se' })).data
      } else {
        page = (await $prismic.api.getByUID('page', params.uid)).data
      }

      return {
        // Set slices as variable
        slices: page.page_content
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
