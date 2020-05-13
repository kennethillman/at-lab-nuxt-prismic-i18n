<template>
  <section>
 
    <div class="container">
      <!-- i18n - From json-->
      <h6 class="label">From json</h6>
      <h2 class="title">{{ $t('page.title') }}</h2>
      <h4>{{ $t('page.introduction') }}</h4> <br><br><br>
      <h6 class="label">From Prismic.io</h6>
    </div>

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

      if (app.i18n.locale === 'fr'){
        page = (await $prismic.api.getByUID('page', params.uid, { lang : 'fr-fr' })).data
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
