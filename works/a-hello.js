var count = 0;
var h1;

document.addEventListener('DOMContentLoaded', function() {
    h1 = document.querySelector('h1');
    document.querySelector('button').onclick = counter;
});

function counter(){
    count++;
    h1.innerHTML = count;

    if(count % 10 === 0){
        alert(`counter is ${count}`);
    }
}

function reset(){
    count = 0;
    h1.innerHTML = count;
    
}