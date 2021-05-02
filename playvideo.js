var modal =   document.getElementById('modal');

document.getElementById('playButton').addEventListener('click', addModal);
document.getElementById('close-btn-modal').addEventListener('click', removeModal);
document.querySelector('.modal-background').addEventListener('click', removeModal);

function addModal(){
    modal.classList.add('is-active');
}

function removeModal(){
    modal.classList.remove('is-active');
}
