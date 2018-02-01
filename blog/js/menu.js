function dealMenu(){
    var btn = document.getElementsByClassName('menu-btn')[0];
    var list1 = document.getElementsByClassName('list1')[0];
    var list2 = document.getElementsByClassName('list2')[0];
    var boo = false;
    btn.addEventListener('click',function(){
        if(!boo){
            list1.style.display = 'block';
            list2.style.display = 'block';
            boo = true;
        }else{
            list1.style.display = 'none';
            list2.style.display = 'none';
            boo = false;
        }
    });
}
window.onload = dealMenu;