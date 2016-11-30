$( function() {
  $( "#sortable" ).sortable({
    revert: true
  });
  $( "ul, li" ).disableSelection();
} );

var textArray=[
                'Client JVM asks NameNode for Data Blocks of say, FileA',
                'NameNode responds with all DataNode locations of FileA DataBlocks',
                'Client JVM opens Data InputStream',
                'InputStream reads one responsive DataNode for every DataBlock',
                'Client JVM closes Data InputStream'
                ]
function process(){
  var isSorted=true;
  var textArray=[
                'Client JVM asks NameNode for Data Blocks of say, FileA',
                'NameNode responds with all DataNode locations of FileA DataBlocks',
                'Client JVM opens Data InputStream',
                'InputStream reads one responsive DataNode for every DataBlock',
                'Client JVM closes Data InputStream'
                ]
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
}