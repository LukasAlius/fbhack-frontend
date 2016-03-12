function addChip(src, name) {
  var div = document.createElement('div');
  var img = document.createElement('img');
  img.src = src;
  div.className = 'chip';
  div.appendChild(img);

  var span = document.createElement('span');
  span.innerHTML = name;
  div.appendChild(span);

  document.getElementById('friends').appendChild(div);
}

for (i = 0; i < 7; i++) {
  addChip('https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg', "Added To");
}
