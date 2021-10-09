const hoverEffects = (element,event) => {
    var eventX = event.clientX;
    var eventY = event.clientY;
    element.style.backgroundColor = "red";
    console.log(eventX + " " + eventY);
  };
  