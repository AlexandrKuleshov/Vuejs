import authApi from '@/api/auth'
import {setItem} from '@/helpers/storage'
const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
}

// export const mutationTypes = {
//   registerStart: '[auth] registerStart',
//   registerSuccess: '[auth] registerSuccess',
//   registerFailure: '[auth] registerFailure'
// }

// export const actionTypes = {
//   register: '[auth] register'
// }

const mutations = {
  registerStart(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  registerSuccess(state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isSubmitting = false
  },
  registerFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
  loginStart(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  loginSuccess(state, payload) {
    state.isSubmitting = false
    state.isLoggedIn = true
    state.currentUser = payload
  },
  loginFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  }
}

const actions = {
  register(context, credentials) {
    return new Promise(resolve => {
      authApi
        .register(credentials)
        .then(response => {
          context.commit('registerSuccess', response.data.user)
          console.log(setItem('accessToken', response.data.user.token))

          resolve(response.data.user)
        })
        .catch(result => {
          context.commit('registerFailure', result.response.data.errors)
        })
    })
  },
  login(context, credentials) {
    return new Promise(resolve => {
      context.commit('loginStart')
      authApi
        .login(credentials)
        .then(response => {
          context.commit('loginSuccess', response.data.user)
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        })
        .catch(result => {
          context.commit(
            'loginFailure',
            result.response.data.errors
          )
        })
    })
  }
}

export default {
  state,
  actions,
  mutations
  // getters
}
