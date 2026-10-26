// callback hell or pyramid of dom
setTimeout(() => {
  console.log("one");
  setTimeout(() => {
    console.log("two");
    setTimeout(() => {
      console.log("three");
      setTimeout(() => {
        console.log("four");
        setTimeout(() => {
          console.log("five");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
