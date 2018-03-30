function buy() {
    var person = prompt("Введите номер телефона", "+79999999999");

    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
        alert(txt);
    } else {
        txt = "Мы позвоним по телефону " + person + " в ближайшее время и подтвердим заказ";
        alert(txt);
    }
}