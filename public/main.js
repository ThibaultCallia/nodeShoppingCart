const addToCart = async (e) => {
  console.log(e.target.closest(".productCard").dataset.id);
};

document.querySelectorAll(".add-to-cart").forEach((element) => {
  element.addEventListener("click", addToCart);
});
