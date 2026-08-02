document.addEventListener("DOMContentLoaded", () => {
  console.log("Green Leaf Variety Loaded Successfully!");

  const cards = document.querySelectorAll(".card, .product");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      alert("ধন্যবাদ! বিস্তারিত তথ্য খুব শীঘ্রই যোগ করা হবে।");
    });
  });
});
