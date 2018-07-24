const formAdd = document.getElementById('form-add')
const addResultField = document.getElementById('add-result-field')

const formSubstract = document.getElementById('form-substract')
const substractResultField = document.getElementById('substract-result-field')

const formMultiply = document.getElementById('form-multiply')
const multiplyResultField = document.getElementById('multiply-result-field')

const formDivide = document.getElementById('form-divide')
const divideResultField = document.getElementById('divide-result-field')

const formModulo = document.getElementById('form-modulo')
const moduloResultField = document.getElementById('modulo-result-field')

//Basic calc function

var calc = {
  add: (x, y) => {
    return x + y;
  },
  substract: (x, y) => {
    return x - y;
  },
  multiply: (x, y) => {
    return x * y;
  },
  divide: (x, y) => {
    return x / y;
  },
  modulo: (x, y) => {
    return x % y;
  }
};

const addDom = (event) => {
  event.preventDefault()
  const val1 = Number(document.getElementById('val1-add').value)
  const val2 = Number(document.getElementById('val2-add').value)
  if (val1 && val2) {
    addResultField.innerHTML = calc.add(val1, val2)
  }
}

const substractDom = x => {
  x.preventDefault()
  const val1 = Number(document.getElementById('val1-substract').value)
  const val2 = Number(document.getElementById('val2-substract').value)
  if (val1 && val2) {
    substractResultField.innerHTML = calc.substract(val1, val2)
  }
}

const multiplyDom = x => {
  x.preventDefault()
  const val1 = Number(document.getElementById('val1-multiply').value)
  const val2 = Number(document.getElementById('val2-multiply').value)
  if (val1 && val2) {
    multiplyResultField.innerHTML = calc.multiply(val1, val2)
  }
}

const divideDom = x => {
  x.preventDefault()
  const val1 = Number(document.getElementById('val1-divide').value)
  const val2 = Number(document.getElementById('val2-divide').value)
  if (val1 && val2) {
    divideResultField.innerHTML = calc.divide(val1, val2)
  }
}

const moduloDom = x => {
  x.preventDefault()
  const val1 = Number(document.getElementById('val1-modulo').value)
  const val2 = Number(document.getElementById('val2-modulo').value)
  if (val1 && val2) {
    moduloResultField.innerHTML = calc.modulo(val1, val2)
  }
}

formAdd.addEventListener('submit', addDom)
formSubstract.addEventListener('submit', substractDom)
formMultiply.addEventListener('submit', multiplyDom)
formDivide.addEventListener('submit', divideDom)
formModulo.addEventListener('submit', moduloDom)