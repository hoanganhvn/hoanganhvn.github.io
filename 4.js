// var x1 = document.querySelectorAll('.n1');
// console.log(x1[0].classList.remove('btn-outline-info'));
// console.log(x1[0].classList.remove('btn'));
// console.log(x1[0].classList.add('btn'));
// console.log(x1[0].classList.add('btn-block'));
// console.log(x1[0].classList.add('btn-warning'));

// var x3 = document.querySelectorAll('.n3');
// console.log(x3[0].classList.toggle('btn-block'));

document.addEventListener("DOMContentLoaded",function(){

    var x1 = document.getElementById('n3');
    console.log(x1);
    x1.onclick = function(){
        console.log('Ban vua click vao' +x1);
        x1.classList.add('dixuong');
    }
},false)