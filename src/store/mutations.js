function startReq (state) {
  console.log('start')
}

function successReq (state) {
  console.log('success')
}

function failedReq (state) {
  console.log('failed')
}

function setActive (state, block) {
  state.active = block
}

export default {
  startReq,
  successReq,
  failedReq,
  setActive
}
