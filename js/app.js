const fruits = ["Banana", "Apple", "Orange", "Lemon"];

function fn(list, nameFruit) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == nameFruit) {
      list[i] = "Only " + list[i];
    }
    document.querySelector(".list").innerHTML += `<li> ${list[i]} </li>`;
  }
}
fn(fruits, "Apple");
