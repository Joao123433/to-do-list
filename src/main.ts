const lista: HTMLElement = document.querySelector("#lista")
const form = document.querySelector("form")

function createP(text: string) {
  const p = document.createElement("p")
  p.textContent = text
  return p
}

function createBtnRemove() {
  const btn = document.createElement("button")
  btn.id = "btn-remove"
  btn.textContent = "Excluir"
  btn.addEventListener("click", removeLi)
  return btn
}

function createLi() {
  const li = document.createElement("li")
  li.addEventListener("click", complete)
  li.classList.add('animate__animated', "animate__fadeInUpBig")
  return li
}

function removeLi(ev) {
  const element = ev.target.parentNode
  element.classList.remove("animate__fadeInUpBig")
  element.classList.add("animate__zoomOut")

  const key = ev.target.parentNode.childNodes[0].innerText
  localStorage.removeItem(key)

  setTimeout(() => element.remove() ,500)
}

function complete(ev: { target: any }) {
  const element = ev.target
  element.classList.toggle("complete")
}

function getData(ev: { preventDefault: () => void }) {
  ev.preventDefault()
  const inputValue: HTMLInputElement = document.querySelector("#input")
  if(inputValue.value !== "") {
    setup(inputValue.value)
    return
  }

  alert("Digite algo para adicionar a lista")
}

function renderElement(text: string) {
  const li = createLi()
  const p = createP(text)
  const btnRemove = createBtnRemove()
  li.append(p, btnRemove)
  lista.append(li)
}

function setup(text: string) {
  renderElement(text)
  document.querySelector<HTMLInputElement>("#input").value = ""
  localStorage.setItem(text, text)
}

function dataLocalStorage() {
  const datas = localStorage
  for(const chave in datas) {
    if (datas.hasOwnProperty(chave)) {
      renderElement(chave)
    }
  }
}

form.addEventListener("submit", getData)
document.addEventListener("DOMContentLoaded", dataLocalStorage)