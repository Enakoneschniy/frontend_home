let log = prompt('введите логин');
let pas = prompt('введите пароль');
if (log === 'ivan' && pas === '334455') {
    alert("доступ разрешен");
}
else if (log === 'alex' && pas === '777') {
    alert("доступ разрешен");
}
else if (log === 'petr' && pas === 'd5678') {
    alert("доступ разрешен");
}
else alert('доступ запрещен');