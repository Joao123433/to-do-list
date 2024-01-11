var lista = document.querySelector("#lista");
var form = document.querySelector("form");
function createP(text) {
    var p = document.createElement("p");
    p.textContent = text;
    return p;
}
function createBtnRemove() {
    var btn = document.createElement("button");
    btn.id = "btn-remove";
    btn.textContent = "Excluir";
    btn.addEventListener("click", removeLi);
    return btn;
}
function createLi() {
    var li = document.createElement("li");
    li.addEventListener("click", complete);
    li.classList.add('animate__animated', "animate__fadeInUpBig");
    return li;
}
function removeLi(ev) {
    var element = ev.target.parentNode;
    element.classList.remove("animate__fadeInUpBig");
    element.classList.add("animate__zoomOut");
    var key = ev.target.parentNode.childNodes[0].innerText;
    localStorage.removeItem(key);
    setTimeout(function () { return element.remove(); }, 500);
}
function complete(ev) {
    var element = ev.target;
    element.classList.toggle("complete");
}
function getData(ev) {
    ev.preventDefault();
    var inputValue = document.querySelector("#input");
    if (inputValue.value !== "") {
        setup(inputValue.value);
        return;
    }
    alert("Digite algo para adicionar a lista");
}
function renderElement(text) {
    var li = createLi();
    var p = createP(text);
    var btnRemove = createBtnRemove();
    li.append(p, btnRemove);
    lista.append(li);
}
function setup(text) {
    renderElement(text);
    document.querySelector("#input").value = "";
    localStorage.setItem(text, text);
}
function dataLocalStorage() {
    var datas = localStorage;
    for (var chave in datas) {
        if (datas.hasOwnProperty(chave)) {
            renderElement(chave);
        }
    }
}
form.addEventListener("submit", getData);
document.addEventListener("DOMContentLoaded", dataLocalStorage);
