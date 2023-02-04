import axios from "axios";

const addToCart = async (e) => {
  const id = e.target.closest(".productCard").dataset.id;

  try {
    // const data = await axios.post("/", { id });
    const res = await fetch("/", {
      method: "POST",
      // Json must also be specified in server side (app.use(express.json());)
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const data = await res.json();
    // If the response is not ok, throw an error - given the error message from the server
    if (!res.ok) throw new Error(data);
    window.location.reload();
  } catch (error) {
    console.log(error.message);
  }
};

document.querySelectorAll(".add-to-cart").forEach((element) => {
  element.addEventListener("click", addToCart);
});
