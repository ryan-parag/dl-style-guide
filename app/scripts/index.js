import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}

const swatchButtons = document.querySelectorAll('.swatch__button')

swatchButtons.forEach(button => {
  button.addEventListener('click', function () {
    button.querySelector('input').select()
    document.execCommand('copy')
    const colorVal = button.querySelector('input').value
    const colorLabel = button.parentNode.querySelector('.swatch__label').innerHTML
    alert(' You copied the HEX value for ' + colorLabel + ': ' + colorVal)
  })
})
