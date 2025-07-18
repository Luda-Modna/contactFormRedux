import { configureStore } from '@reduxjs/toolkit'
import contactsReduser from './slices/contactsSlice'

const store = configureStore({
  reducer: {
    contactsData: contactsReduser
  }
})

export default store
