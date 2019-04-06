export default function(state = [], action) {
  if (!action.error) {
    return "";
  }

  return action.payload.response.data.message;
}
