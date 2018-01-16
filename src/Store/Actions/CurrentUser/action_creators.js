import { UPDATE_CURRENT_USER } from './actions'

export function updateCurrentUser(user) {
  return {
    type: UPDATE_CURRENT_USER,
    user
  }
}