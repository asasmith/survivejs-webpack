export default (text = 'hello world') => {
  const el = document.createElement('div')

  el.innerHTML = text

  return el
}
