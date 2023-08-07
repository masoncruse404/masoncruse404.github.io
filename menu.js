window.onload = addListeners();

function addListeners(){
    document.getElementById('myMenu').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

}

function closeMenu(){
    document.getElementById('myMenu').style.display = 'none';
    document.getElementById('settings').style.display = 'block';
}

function closedMenu(){
    document.getElementById('myMenu').style.display = 'block';
    document.getElementById('settings').style.display = 'none';
   
}