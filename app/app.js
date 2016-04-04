var token = "0101e75a4acb0c906e1d8f4956f9cd032163db43";
var photon = "3f0028000b47343432313031";
var electron = "54002e001951343334363036";

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

function callFunction(device, functionName, args)
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
  callFunction(photon, "moveServos", makeProper(neck) + " 200 200");
}

function setLeft(data)
{
  left = data;
  callFunction(photon, "moveServos", "200 " + makeProper(left) + " 200");
}

function setRight(data)
{
  right = data;
  callFunction(photon, "moveServos", "200 200 " + makeProper(right));
}

function setRed(data)
{
  red = data;
  callFunction(photon, "moodlights", makeProper(red) + " 300 300");
}

function setGreen(data)
{
  green = data;
  callFunction(photon, "moodlights", "300 " + makeProper(green) +" 300");
}

function setBlue(data)
{
  blue = data;
  callFunction(photon, "moodlights", "300 300 " + makeProper(blue));
}

function getNoise()
{
var response = httpGet("https://api.particle.io/v1/devices/" + photon + "/noise?access_token=" + token);
var obj = JSON.parse(response);
document.getElementById("noiselevel").innerHTML = "noise = " + obj.result;

}

function getBrightness()
{
  var response = httpGet("https://api.particle.io/v1/devices/" + photon + "/brightness?access_token=" + token);
  var obj = JSON.parse(response);
  document.getElementById("brightnesslevel").innerHTML = "brightness = " + obj.result;
}

function lcdPrint(text)
{
  callFunction(electron, "print", text);
}
