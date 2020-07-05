/*Store ( Vuex ) is a state management pattern + library for Vue.js applications. It serves as a centralized store for
all the components in an application, with rules ensuring that the state can only be mutated in a predictable
fashion.*/

const defaultState = () => {
  return {
    showMenu: false,
    profileMenu: false
  };
};
export const state = () => defaultState();

export const mutations = {
  toggleMenu(state) {
    state.showMenu = !state.showMenu;
  },

  toggleProfileMenu(state) {
    state.profileMenu = !state.profileMenu;
  }
};
