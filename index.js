let arr = [
  { value: 1, colorClass: "one" },
  { value: 8, colorClass: "one" },
  { value: 2, colorClass: "two" },
  { value: 4, colorClass: "two" },
  { value: 3, colorClass: "three" },
  { value: 5, colorClass: "three" },
  { value: 9, colorClass: "three" },
  { value: 6, colorClass: "four" },
  { value: 7, colorClass: "four" }
];

/*
    Description: This function creates the grid on the board
 */
const createPlayBoard = () => {
  const playSection = document.getElementById("play-section");
  let innerSection = "";
  arr.forEach(i => {
    const { value, colorClass } = i;
    innerSection =
      innerSection +
      `<div class="play-section-item ${colorClass}">${value}</div>`;
  });
  playSection.innerHTML = innerSection;
};

/*
    Description: This function sorts the array
 */
const sort = () => {
  arr = arr.sort(function compare(a, b) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
    return 0;
  });
  createPlayBoard();
};

/*
    Description: This function shuffles the array
 */
const shuffle = () => {
  let n = arr.length;
  const tempArr = [];
  while (n) {
    const randomIndex = Math.floor(Math.random() * n);
    tempArr.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
    n--;
  }
  arr = [...tempArr];
  createPlayBoard();
};

window.onload = () => {
  createPlayBoard();
  sort();

  // Creating Event Listeners for buttons
  document.getElementById("btnShuffle").addEventListener("click", shuffle);
  document.getElementById("btnSort").addEventListener("click", sort);
};
