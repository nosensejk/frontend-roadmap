async function getNumber() {
  return 10;
}

async function showNumber() {
  const res = await getNumber();
  console.log(res);
}
showNumber();

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 2000);
  });
}

async function showDelay() {
  console.log(await delay());
}

showDelay();

async function loadBooks() {
  try {
    const response = await fetch(
      "https://openlibrary.org/search.json?q=javascript",
    );
    const data = await response.json();
    console.log(data.docs);
  } catch (error) {
    console.log("Failed to load books:", error);
  }
}

async function loadData() {
  try {
    const [number, delays] = await Promise.all([getNumber(), delay()]);
    console.log(number);
    console.log(delays);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Loading finished");
  }
}

loadData();
