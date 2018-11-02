var ghost = {};

ghost.counter = function() {
  var i = -1;
  return function() {
    i += 1;
    return i;
  };
}();

ghost.create = function(element) {
  return document.createElement(element);
};

ghost.select = function(element) {
  return document.querySelector(element);
};

ghost.makeList = function(text) {
  var i = ghost.counter();
  
  var li = ghost.create('li');
  var span = ghost.create('span');
  var edit = ghost.create('a');
  var del = ghost.create('a');
  
  li.textContent = text
  edit.textContent = ' Edit';
  edit.href = '#';
  del.textContent = ' Delete';
  del.href = '#';
  
  span.appendChild(edit);
  span.appendChild(del);
  li.appendChild(span);
  ul.insertBefore(li, ul.childNodes[0]);
  
  li.id = 'item' + i;
  del.id = 'delete' + i;
  edit.id = 'edit' + i;
  edit.className = 'edit-link';
  del.className = 'delete-link';
  
  localStorage.notes = JSON.stringify(notes);
};

const ul = ghost.select('ul');
const input = ghost.select('input');
var notes;

$(document).ready(function() {
  if (localStorage.getItem('notes')) {
    notes = JSON.parse(localStorage.getItem('notes'));
  } else {
    notes = [];
  }
  
  localStorage.setItem('notes', JSON.stringify(notes));
  JSON.parse(localStorage.getItem('notes')).forEach(function(item) {
    ghost.makeList(item);
  });
  
  $('.form').submit(function(e) {
    e.preventDefault();
    if (input.value.length > 0) {
      notes.push(input.value);
      localStorage.setItem('notes', JSON.stringify(notes));
      ghost.makeList(input.value);
      input.value = '';
    }
  });
  
  $('#clear').click(function() {
    if(localStorage.length > 0){
      if (window.confirm('This will clear all items.\nAre you sure you want to do this?')) {
        localStorage.clear();
        while (ul.firstChild) {
          ul.removeChild(ul.firstChild);
        }
      }
    }
  });
  
  $('ul').click('li', function(e) {
    if (e.target.id.includes('edit')) {
      console.log(' item ' + e.target.id.split('edit')[1] + ' needs to be edited.');
    }
    if (e.target.id.includes('delete')) {
      e.target.parentNode.parentNode.remove();
      localStorage.notes = JSON.stringify(notes);
      var t = e.target.parentNode.parentNode;
      var array = t.textContent.split(' ');
      var str = array.slice(0, array.length - 2).join(' ');
      var index = notes.indexOf(str);
      notes.splice(index, 1);
      localStorage.notes = JSON.stringify(notes);
    }
  });
  
  // Figure out how to edit individual items..
  $('li').click(function() {
    var item = document.getElementById(this.id)
    console.log(item);
    $('')
    //$('#edit-button').click();
  });
});
