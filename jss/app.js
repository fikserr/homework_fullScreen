const imgContent = document.querySelector('.img__content');
const image = document.querySelectorAll('.image');
const body = document.querySelector('body');

imgContent.addEventListener('click', function(e){
    let javob = e.target
    javob.requestFullscreen();
});

document.addEventListener('dblclick', function(){
    document.exitFullscreen();
});
