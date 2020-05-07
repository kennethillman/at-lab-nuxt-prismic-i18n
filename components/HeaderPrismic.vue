<template>
  <header class="site-header">
    <p v-if="$store.state.menu === 'Please create a menu document'" class="logo">{{ $store.state.menu }}</p>

    <nuxt-link :to="localePath('/')" class="logo">{{ $prismic.asText($store.state.menu.title) }}</nuxt-link>
    
    <nav>
      <ul>
        <li v-for="(menuLink,index) in $store.state.menu.menu_links" :key="menuLink.id">
          <nuxt-link v-if="$i18n.locale === 'en'" :to="localePath($prismic.asLink(menuLink.link))">{{ $prismic.asText(menuLink.label) }}</nuxt-link>
          <nuxt-link v-if="$i18n.locale === 'fr'" :to="localePath($prismic.asLink(menuLink.link))">{{ $prismic.asText($store.state.menu_fr.menu_links[index].label) }}</nuxt-link>
          <nuxt-link v-if="$i18n.locale === 'sv'" :to="localePath($prismic.asLink(menuLink.link))">{{ $prismic.asText($store.state.menu_sv.menu_links[index].label) }}</nuxt-link>
        </li>
        <li><nuxt-link :to="switchLocalePath('sv')">SV</nuxt-link></li>
        <li><nuxt-link :to="switchLocalePath('en')">EN</nuxt-link></li>
        <li><nuxt-link :to="switchLocalePath('fr')">FR</nuxt-link></li>
      </ul>
    </nav>
    <div></div>
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

.homepage .site-header
  color: #000
  a
    color: #000
  nav a:hover
    color: #c8c9cb

.site-header
  .logo
    display: inline-block
    font-size: 22px
    font-weight: 900
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


