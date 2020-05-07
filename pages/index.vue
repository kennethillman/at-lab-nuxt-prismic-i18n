<template>
  <section>

   
    <!-- i18n -->
    <h6>(Static from json)</h6>
    <h2>{{ $t('home.title') }}</h2>
    <h4>{{ $t('home.introduction') }}</h4> <br><br><br>
    <h6>(From Prismic.io)</h6>

    <!-- Banner component -->
    <homepage-banner :banner="banner"/>
    <!-- Slices block component -->
    <slices-block :slices="slices"/>

  </section>
</template>

<script>

import HomepageBanner from '~/components/HomepageBanner.vue'
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'Home',
  layout: 'homepage',
  components: {
    HomepageBanner,
    SlicesBlock
  },
  async asyncData({ $prismic, error, app}) {
    console.log('app.i18n.locale -> ' + app.i18n.locale);
 
    try {

      let homepage
      const prismicLang =  app.i18n.locale+"-"+app.i18n.locale

      if (app.i18n.locale === 'fr'){
        homepage = (await $prismic.api.getSingle('homepage', { lang : prismicLang })).data
      } else if (app.i18n.locale === 'sv'){
        homepage = (await $prismic.api.getSingle('homepage', { lang : 'sv-se' })).data
      } else {
        homepage = (await $prismic.api.getSingle('homepage')).data
      }
    
      return {
        banner: homepage.homepage_banner[0],
        slices: homepage.page_content
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
