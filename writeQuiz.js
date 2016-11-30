$(function() {
    $( "#sortable" ).sortable({
      revert: true
    });
    $( "#draggable" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
    $( "ul, li" ).disableSelection();
});

var textArray=[
                'Client JVM opens Hadoop File System',
                'Client JVM asks NameNode for location to write data Block A',
                'NameNode responds with an appropriate DataNode location, say DN1',
                'Client JVM opens Data InputStream',
                'InputStream writes data Block A to DN1',
                'InputStream replicates Block A to another DataNode, say DN2 assuming that it is nearest physically connected DataNode',
                'DN1 acknowledges InputStream with success status',
                'Client JVM closes Data InputStream',
                'Client JVM updates NameNode with success status'
              ]
function process(){
  var isSorted=true;
  for(i=0; i<textArray.length; i++)
      if ($("#sortable li")[i].innerText != textArray[i]){
        isSorted=false;
        break;
      }
  if(isSorted)
    alert('Correct Order!!!!!!')
  else
    alert('Try Again!!!!!!')
}

function list(){
  var ul = document.getElementById("sortable");
  shuffledArray=_.shuffle(textArray)
  for (var i = 0; i < shuffledArray.length; i++)
  {
    var li = document.createElement("li");  
    li.class="ui-state-default";
    li.innerHTML = shuffledArray[i]+'\n';
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}