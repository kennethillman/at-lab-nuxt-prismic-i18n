<template>
  <section>

    <div class="container">
      <!-- i18n - From json-->
      <h6 class="label">From json</h6>
      <h2 class="title">{{ $t('home.title') }}</h2>
      <h4>{{ $t('home.introduction') }}</h4> <br><br><br>
      <h6 class="label">From Prismic.io</h6>
    </div>
   
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
    try {

      let homepage

      if (app.i18n.locale === 'fr'){
        homepage = (await $prismic.api.getSingle('homepage', { lang : 'fr-fr' })).data
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

<style type="text/css">
  
  /* Not scoped*/
  .label {
    background-color: #484d52;
    display: inline-block;
    padding: 6px 8px 7px;
    line-height: 1;
    font-size: 11px;
    color: #f6f6f6;
    border-radius: 4px;
  }
  .title {
    margin-top: 20px;
  }
  
</style>
