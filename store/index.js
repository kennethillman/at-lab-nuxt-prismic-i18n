export const state = () => ({
  menu_en: {},
  menu_fr: {},
  menu_sv: {},
  error: false
}) 

export const mutations = {
  SET_MENU_EN(state, menu_en) {
    state.menu_en = menu_en
  },
  SET_MENU_FR(state, menu_fr) {
    state.menu_fr = menu_fr
  },
  SET_MENU_SV(state, menu_sv) {
    state.menu_sv = menu_sv
  },
  SET_ERROR(state, error) {
    state.error = error
  }
}

export const actions = {
  async fetchMenu({ commit }, $prismic) {
    try {
      
      let menu_en,menu_fr,menu_sv
      
      menu_sv = (await $prismic.api.getSingle('menu', { lang : 'sv-se' })).data
      menu_fr = (await $prismic.api.getSingle('menu', { lang : 'fr-fr' })).data
      menu_en = (await $prismic.api.getSingle('menu')).data
      
      commit('SET_MENU_EN', menu_en)
      commit('SET_MENU_FR', menu_fr)
      commit('SET_MENU_SV', menu_sv)
      commit('SET_ERROR', false);

    } catch (e) {
      
      commit('SET_ERROR', true);

    }
  }
}
