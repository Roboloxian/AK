t = Number.parseFloat(window.prompt("Enter the time taken to travel the distance "));
unit3 = window.prompt("Tell the unit s or hr ").toString();

if (unit3 === "hr") {
  document.write("Time in seconds is ", t * 3600, "s <br>");
}

document.write("<br>Avg speed<br>");
document.write("= total distance/total time taken <br>");
document.write("=", d / t, "m/s<br>");
document.write("Therefore average speed=", d / t, "<br>");
document.write("<br>Avg velocity <br>");
document.write("= total distance/total time taken <br>");
document.write("=", dis / t, "m/s <br>");
document.write("Therefore average velocity=", dis / t, "<br>");
