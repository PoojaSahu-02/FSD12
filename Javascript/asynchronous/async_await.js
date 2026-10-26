let h1 = document.querySelector("#head1");
let h2 = document.querySelector("#head2");
let h3 = document.querySelector("#head3");
let h4 = document.querySelector("#head4");
let h5 = document.querySelector("#head5");
let h6 = document.querySelector("#head6");

function getNumber(ele, text) {
  return new Promise((res, rej) => {
    if (ele) {
      setTimeout(() => {
        ele.textContent = text;
        res();
      }, 1000);
    } else {
      rej("element not found");
    }
  });
}
let getData = async () => {
  try {
    await getNumber(h1, "one");
    await getNumber(h2, "two");
    await getNumber(h3, "Three");
    await getNumber(h4, "four");
    await getNumber(h5, "five");
    await getNumber(h6, "six");
  } catch {
    console.log("something went wrong");
  }
};
getData();

// getNumber(h1, "one")
//   .then(() => getNumber(h2, "two"))
//   .then(() => getNumber(h3, "Three"))
//   .then(() => getNumber(h4, "four"))
//   .then(() => getNumber(h5, "five"))
//   .then(() => getNumber(h6, "six"))
// .then(() => getNumber(h7, "seven"))
// .catch((err)=>console.err(err))
