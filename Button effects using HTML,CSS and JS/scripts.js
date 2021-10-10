var flag = true;
var colors = ["#1DB9C3", "#7027A0", "#F56FAD", "#f5fdb0", "white","red"];

const hoverEffects = (element, event) => {
  var eventX = event.clientX;
  var eventY = event.clientY;
  let randomIndex = Math.floor(Math.random() * colors.length);
  // console.log(`${randomIndex} ${colors[randomIndex]}`);
  if (flag == true) {
    element.style.backgroundColor = colors[randomIndex];
    flag=false;
  } else {
    element.style.backgroundColor = colors[randomIndex];
    flag = true;
  }
  // console.log(eventX + " " + eventY);
};
