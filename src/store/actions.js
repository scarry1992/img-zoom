function getBlocks ({ state }) {
  fetch('/data/data.json')
    .then((resp) => resp.json())
    .then(json => { state.blocks = json })
}

export default {
  getBlocks
}
