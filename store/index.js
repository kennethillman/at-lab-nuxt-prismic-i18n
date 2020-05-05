export const state = () => ({
  menu: {},
  locales: ['en', 'fr'],
  locale: 'en'
})

export const mutations = {
  SET_MENU(state, menu) {
    state.menu = menu
  },
  SET_ERROR(state, error) {
    state.menu = error
  },
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

export const actions = {
  async fetchMenu({ commit }, $prismic) {
    try {
      const menu = (await $prismic.api.getSingle('menu')).data

      commit('SET_MENU', menu)
    } catch (e) {
      const error = 'Please create a menu document'

      commit('SET_ERROR', error);
    }
  }
}
