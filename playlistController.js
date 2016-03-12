
function addRow(title, fline, sline) {
    var div = document.createElement('li');

            div.className = 'collection-item avatar hoverable';
            div.innerHTML = '<i id="play" class="material-icons circle red">play_arrow</i><span class="title">'+title+'</span><p>'+fline+'<br>'+ sline +'</p> <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>';
            document.getElementById('collection').appendChild(div);
}

function playMusic(){
    alert("PlayMusic");
    var elem = document.getElementById('play').innerHTML = "pause";
}

for (i = 0; i < 17; i++) {
          addRow('Song title', 'Artist', 'Description');
}

playMusic();
