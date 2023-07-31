const frmGetQuote = document.querySelector("#frmGetQuote");

// Inputs
const name = document.querySelector("#name");
const receiver = document.querySelector("#receiver");
const phonenumber = document.querySelector("#phonenumber");
const subject = document.querySelector("#subject");
const text = document.querySelector("#text");

frmGetQuote.addEventListener("submit", async function (event) {
  event.preventDefault();

  try {
    const data = {
      name: name.value,
      receiver: receiver.value,
      phonenumber: phonenumber.value,
      subject: subject.value,
      text: text.value,
    };
    const request = await fetch("https://solarich-be.onrender.com/quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    clearFields();
    if (response.responseMessage === "send succesfully") {
      window.location.href = "http://127.0.0.1:5500/pages/thank-you.html";
    } else {
      console.log("false");
    }
    console.log(response);
  } catch (e) {
    console.log(e);
  }
});

function clearFields() {
  name.value = "";
  receiver.value = "";
  phonenumber.value = "";
  subject.value = "General Inquiry";
  text.value = "";
}
