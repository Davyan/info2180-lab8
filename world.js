window.onload = function() {
    $("lookup").onclick = loadXMLDoc;
}

function loadXMLDoc() 
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    // code for Internet Explorer 7+, Firefox, Chrome, Opera, Safari
      {
      xmlhttp=new XMLHttpRequest();
      }
    else
     // code for Internet Explorer 6, Internet Explorer 5
      {
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange = function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        document.getElementById("result").innerHTML = xmlhttp.responseText;
        alert(xmlhttp.responseText);
        }
      };
        var meaning = document.getElementById("term").value;
        var ruler = xmlhttp.open("GET","world.php?lookup="+meaning,true);
        xmlhttp.send();
        console.log(xmlhttp.responseText);
        
};
