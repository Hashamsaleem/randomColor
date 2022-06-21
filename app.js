const hexaColor = () => {
  let str = "012345679abcde";
  let hexa = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    hexa = hexa + str[index];
  }
  return "#" + hexa;
};

let container = document.getElementById("container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
for (let i = 0; i <= 1000; i++) {
  let div = document.createElement("div");
  div.style.width = "150px";
  div.style.height = "150px";
  div.style.fontSize = "25px";
  div.style.textAlign = "center";
  div.style.lineHeight = "150px";
  div.style.color = "black";
  div.style.fontWeight = "500px";
  div.style.margin = "1px";
  div.style.borderRadius = "20%";
  div.style.background = hexaColor();
  div.textContent = hexaColor(i);
  container.appendChild(div);
}
