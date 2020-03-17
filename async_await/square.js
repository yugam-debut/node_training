function square(x) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      try {
        // hello_world();
        resolve(Math.pow(x, 2));
      }
      catch (e) {
        reject(e);
      }
    }, 1000);

  });
}
async function power(x) {
  try {
    const value = await square(x);
    console.log(value);
  }
  catch (err) {
    console.log(err);
  }

}

power(10);