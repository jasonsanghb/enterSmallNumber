export default {
  inserted(el) {
    el.addEventListener('keydown', function(e) {
      const key = e.key
      if (key === 'e' || key === '-') {
        // 禁止输入框内输入-或者e
        e.preventDefault()
      }
      if (/(\d+)\.(\d{1})(\d+)/.test(e.target.value) && e.keyCode !== 8) {
        e.preventDefault()
      }
    })
  }
}
