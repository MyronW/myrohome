function changeBG(color) {
  document.getElementsByTagName("body")[0].id                  = "radial"+color;
  switch (color) {
    case "spacegray":
      document.getElementsByTagName("canvas")[0].style.borderColor = "DimGray";
      break;
    case "silver":
      document.getElementsByTagName("canvas")[0].style.borderColor = color;     
      break;
    case "gold":
      document.getElementsByTagName("canvas")[0].style.borderColor = color;
      break;
  }
}
