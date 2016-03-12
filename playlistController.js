
function addRow(title, fline, sline) {
    var div = document.createElement('li');
    div.className = 'collection-item avatar hoverable';

    var ione = document.createElement('i');
    ione.className = "material-icons circle red";
    ione.innerHTML = 'play_arrow';
    ione.addEventListener('click', function(e){
      var target = e.target;
    })
    div.appendChild(ione);

    var span = document.createElement('span');
    span.className = 'title';
    span.innerHTML = title;
    div.appendChild(span);

    var p = document.createElement('p');
    p.innerHTML = fline+'<br>'+ sline
    div.appendChild(p);

    document.getElementById('collection').appendChild(div);
}

for (i = 0; i < 7; i++) {
  addRow('Song title', 'Artist', 'Description');
}

function play(){

}
