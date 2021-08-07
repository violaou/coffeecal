
'use strict'
window.onload = function () {
  document.getElementById('res').style.display = 'none'
}

document.getElementById('input_form').onsubmit = function (e) {
  console.log('here')
  e.preventDefault()
  var calories = document.getElementById('calorie_input').value
  localStorage.setItem('calories', JSON.stringify(calories))

  var container = document.getElementById('res')
  container.innerHTML = ''

  var e = document.createElement('div')
  e.className = "result";
  e.id = "results.list";
  e.innerHTML = `you entered ${calories} calories`
  container.prepend(e)

  console.log(calories)
  document.getElementById('res').style.display = 'block'
}
