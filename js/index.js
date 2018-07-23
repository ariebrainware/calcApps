const formAdd = document.getElementById('form-add')
const formAddResult = document.getElementById('addResultField')

const formSubstract = document.getElementById('form-substract')
const formSubResult = document.getElementById('substractResultField')

const formMultiply = document.getElementById('form-multiply')
const formMultiplyResult = document.getElementById('multiplyResultField')

const formDivide = document.getElementById('form-divide')
const formDivideResult = document.getElementById('divideResultField')

const formModulo = document.getElementById('form-modulo')
const formModuloResult = document.getElementById('moduloResultField')

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
    formAddResult.innerHTML = calc.add(val1, val2)
  }
}

const substractDom = x => {
  x.preventDefault()
  const val1 = Number(document.getElementById('val1-substract').value)
  const val2 = Number(document.getElementById('val2-substract').value)
  if (val1 && val2) {
    formMultiplyResult.innerHTML = calc.substract(val1, val2)
  }
}

const multiplyDom = x => {
  x.preventDefault()
  const val1 = Number(document.getElementById('val1-multiply').value)
  const val2 = Number(document.getElementById('val2-multiply').value)
  if (val1 && val2) {
    formMultiplyResult.innerHTML = calc.multiply(val1, val2)
  }
}

const divideDom = x => {
  x.preventDefault()
  const val1 = Number(document.getElementById('val1-divide').value)
  const val2 = Number(document.getElementById('val2-divide').value)
  if (val1 && val2) {
    formDivideResult.innerHTML = calc.divide(val1, val2)
  }
}

const moduloDom = x => {
  x.preventDefault()
  const val1 = Number(document.getElementById('val1-modulo').value)
  const val2 = Number(document.getElementById('val2-modulo').value)
  if (val1 && val2) {
    formModuloResult.innerHTML = calc.modulo(val1, val2)
  }
}

formAdd.addEventListener('submit', addDom)
formSubstract.addEventListener('submit', substractDom)
formMultiply.addEventListener('submit', multiplyDom)
formDivide.addEventListener('submit', divideDom)
formModulo.addEventListener('submit', moduloDom)