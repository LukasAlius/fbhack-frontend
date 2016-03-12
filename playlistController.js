function addRow() {
  var div = document.createElement('li');
  div.className = 'collection-item avatar hoverable';
  div.innerHTML = '<i class="material-icons circle red">play_arrow</i><span class="title">Title</span><p>First Line <br> Second Line </p> <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>';
  document.getElementById('collection').appendChild(div);
}

function removeRow(input) {
  document.getElementById('collection').removeChild( input.parentNode );
}

for (i = 0; i < 7; i++) {
     addRow();
}
