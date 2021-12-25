const hamBtn = document.getElementById("bar");

const item = document.getElementById("item");

item.style.right = "-300px";
// it's necessary as without it first click doesn't open sidebar

hamBtn.onclick = function () {
  if (item.style.right == "-300px") {
    item.style.right = "0px";
  } else {
    item.style.right = "-300px";
  }
};
