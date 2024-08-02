function clickHandeler(color = 'red') {
    return function () {
        document.body.style.backgroundColor = `${color}`;
        console.log(color);

    }
}

// let btn = document.querySelector('#red').onclick = 
let btn = document.querySelectorAll('button').forEach((btn) => {
    btn.onclick = clickHandeler(btn.id)
})