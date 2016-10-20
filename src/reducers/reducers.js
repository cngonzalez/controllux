export function uploadedSongReducer(state={}, action) {
  switch (action.type) {
    case 'UPLOAD_FILE':
      return action.payload
    default:
      return state
  }
}
