var toDoList = [];

document.getElementById("add").onclick = function() {
  var val = document.getElementById("in").value;
  var list = {};
  list.todo = val;
  list.check = false;
  var toDoList_len = toDoList.length;
  toDoList[toDoList_len] = list;
  out();
}

function out() {
 var out = "";
  for (key in toDoList) {
    if (toDoList.check == true) {
      out += "<input id='checkbox' type='checkbox'> checked";
    }else {
      out += "<input id='checkbox' type='checkbox'>";
    }
    out += toDoList[key].todo + "<br>";
  }
  document.getElementById("out").innerHTML = out;
  document.getElementById("in").value = "";

  document.getElementById('checkbox').onclick = function() {
    if ( this.checked ) {
      var result = out.strike();
      document.getElementById("out").innerHTML = result;
    } 
  }
}
