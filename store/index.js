export const state = () => ({
  menu: {},
  menu_fr: {},
  menu_sv: {}
})

export const mutations = {
  SET_MENU(state, menu) {
    state.menu = menu
  },
  SET_MENU_FR(state, menu_fr) {
    state.menu_fr = menu_fr
  },
  SET_MENU_SV(state, menu_sv) {
    state.menu_sv = menu_sv
  },
  SET_ERROR(state, error) {
    state.menu = error
  }
}

export const actions = {
  async fetchMenu({ commit }, $prismic) {
    try {
      
      let menu,menu_fr,menu_sv
      
      menu_sv = (await $prismic.api.getSingle('menu', { lang : 'sv-se' })).data
      menu_fr = (await $prismic.api.getSingle('menu', { lang : 'fr-fr' })).data
      menu = (await $prismic.api.getSingle('menu')).data
      
      commit('SET_MENU', menu)
      commit('SET_MENU_FR', menu_fr)
      commit('SET_MENU_SV', menu_sv)

    } catch (e) {
      
      const error = 'Please create a menu document'
      commit('SET_ERROR', error);

    }
  }
}
