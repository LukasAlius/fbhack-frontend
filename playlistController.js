
function addRow(title, fline, sline) {
    var div = document.createElement('li');
            div.className = 'collection-item avatar hoverable';
            div.innerHTML = '<i class="material-icons circle red">play_arrow</i><span class="title">'+title+'</span><p>'+fline+'<br>'+ sline +'</p> <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>';
            document.getElementById('collection').appendChild(div);
}

for (i = 0; i < 7; i++) {
          addRow('Song title', 'Artist', 'Description');
}

function play(){

}
