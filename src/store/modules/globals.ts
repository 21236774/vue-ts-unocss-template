import { defineStore } from 'pinia'

interface GlobalState {
  date: Date | string
}

export const useGlobalStore = defineStore('useGlobalStore', {
  state: (): GlobalState => ({
    date: ''
  }),
  actions: {
    updateDate(time: Date | string) {
      this.date = time
    }
  }
})
