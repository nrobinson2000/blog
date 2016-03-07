var token = "0101e75a4acb0c906e1d8f4956f9cd032163db43";
var device = "3f0028000b47343432313031";

var neck = 90;
var left = 90;
var right = 90;

var red = 0;
var green = 0;
var blue = 0;

function httpPost(url, params)
{
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Authorization", "Bearer " + token);
xhr.send(params);
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function callFunction(functionName, args)
{
//  var params = '{"arg": "' + args + '","access_token": "' + token +'"}';
  var params = 'arg=' + args;
  console.log(params);
  httpPost("https://api.particle.io/v1/devices/" + device + "/" + functionName, params);
}

function makeProper(value)
{
  var valuedata = "";
  if (value.length == 2)
  {
        valuedata = "0" + value;
  }

  if (value.length == 1)
  {
    valuedata = "00" + value;
  }
  if (value.length == 3)
  {
    valuedata = value;
  }

  return valuedata;
}

function setNeck(data)
{
  neck = data;
  updateServos()
}

function setLeft(data)
{
  left = data;
  updateServos()
}

function setRight(data)
{
  right = data;
  updateServos();
}

function updateServos()
{
  callFunction("moveServos", makeProper(neck) + " " + makeProper(left) + " " + makeProper(right));
}

function moodlights()
{
  callFunction("moodlights", makeProper(red) + " " + makeProper(green) + " " + makeProper(blue));
}

function getNoise()
{
var response = httpGet("https://api.particle.io/v1/devices/" + device + "/noise?access_token=" + token);
var obj = JSON.parse(response);
document.getElementById("noiselevel").innerHTML = "noise = " + obj.result;

}

function getBrightness()
{
  var response = httpGet("https://api.particle.io/v1/devices/" + device + "/brightness?access_token=" + token);
  var obj = JSON.parse(response);
  document.getElementById("brightnesslevel").innerHTML = "brightness = " + obj.result;
}

setInterval(getNoise, 2500);
setInterval(getBrightness, 2500);
