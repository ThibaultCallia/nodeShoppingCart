const toggleCart = () => {
  document.querySelector(".shoppingCart").classList.toggle("active");
};

const addToCart = async (e) => {
  const id = e.target.closest(".productCard").dataset.id;

  try {
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

const deleteItemFromCart = async (e) => {
  console.log("test");
  const id = e.target.closest(".shoppingCartItem").dataset.id;

  try {
    // const data = await axios.delete("/", { id });
    const res = await fetch("/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data);
    window.location.reload();
  } catch (error) {
    console.log(error.message);
  }
};

document.querySelector(".cart-btn").addEventListener("click", toggleCart);

document.querySelectorAll(".add-to-cart").forEach((element) => {
  element.addEventListener("click", addToCart);
});

document.querySelectorAll(".delete-item").forEach((element) => {
  element.addEventListener("click", deleteItemFromCart);
});
