<template>
  <header class="site-header">
    <p v-if="$store.state.menu === 'Please create a menu document'" class="logo">{{ $store.state.menu }}</p>
    
    <nav>

      <ul class="langs" >
        <li v-for="(locale,index) in $i18n.locales" :key="locale.code+index">
          <nuxt-link :class="{ 'current-lang': $i18n.locale === locale.code }" :to="switchLocalePath(locale.code)">{{locale.code}}</nuxt-link>
        </li>
      </ul>
      
      <ul>
        <template v-if="$i18n.locale === 'en'">
          <li v-for="(menuLink,index) in $store.state.menu_en.menu_links" :key="menuLink+index"> 
            <nuxt-link :to="localePath($prismic.asLink(menuLink.link))">{{ $prismic.asText(menuLink.label) }}</nuxt-link>
          </li>
        </template>  
        <template v-if="$i18n.locale === 'fr'">
          <li v-for="(menuLink,index) in $store.state.menu_fr.menu_links" :key="menuLink+index"> 
            <nuxt-link :to="localePath($prismic.asLink(menuLink.link))">{{ $prismic.asText(menuLink.label) }}</nuxt-link>
          </li>
        </template>
        <template v-if="$i18n.locale === 'sv'">
          <li v-for="(menuLink,index) in $store.state.menu_sv.menu_links" :key="menuLink+index"> 
            <nuxt-link :to="localePath($prismic.asLink(menuLink.link))">{{ $prismic.asText(menuLink.label) }}</nuxt-link>
          </li>
        </template>   
      </ul>

    </nav>

  </header>
</template>

<script>
export default {
  name: 'header-prismic',
}
</script>



<style lang="sass">
.site-header
  height: 30px
  padding: 20px 0
  color: #484d52
  font-weight: 700
  a
    color: #484d52
    font-weight: 700
  nav a:hover
    color: #72767B


.site-header
  color: #000

  a
    color: #000
  nav 
    text-align: right
    a:hover
      color: #c8c9cb
  .langs
    a 
      color: #777
      text-transform: uppercase
      font-size: 12px
      &.current-lang
        color: red
        text-decoration: underline

.site-header
  .logo
    display: inline-block
    font-size: 22px
    font-weight: 900
    cursor: pointer
  nav
    float: right
    ul
      margin: 0
      padding-left: 0
    li
      display: inline-block
      margin-left: 40px

@media (max-width: 1060px)
  .site-header
    padding-left: 20px
    padding-right: 20px

@media (max-width: 767px)
  .site-header
    height: auto

  .homepage .site-header
    position: absolute
    left: 0
    right: 0

  .site-header
    .logo
      display: block
      text-align: center
    nav
      float: none
      text-align: center
      li
        display: inline-block
        margin-left: 10px
        margin-right: 10px
</style>


