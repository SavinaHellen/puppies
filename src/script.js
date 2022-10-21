function buyAPuppy() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");

  let h1 = document.querySelector("h1");
  h1.innerHTML =
    "<em>Hello </em>" + name + "! <br /> Welcome to the dog lovers club 🐶";

  if (name.length > 0 && email.length > 0) {
    alert(
      `Hello, ${name}! We will be in touch by your email ${email} as soon as we can.`
    );
  } else {
    alert(`Hello! We can't connect with you without your name or email 😥`);
  }
}

let buyButton = document.querySelector("button");
buyButton.addEventListener("click", buyAPuppy);
