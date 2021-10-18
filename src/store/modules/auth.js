import authApi from '@/api/auth'

const state = {
  isSubmitting: false
}

const mutations = {
  registerStart(state) {
    state.isSubmitting = true
  }
}

const actions = {
  register(context, credentials) {
    return new Promise(() => {
      authApi.register(credentials)
        .then(response => {
          console.log('response', response)
        })
        .catch(result => {
          console.log('result errors', result)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}