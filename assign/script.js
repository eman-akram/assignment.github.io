const reviews = [
  {
    id: 1,
    name: "Paul Green",
    img: "http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png",
    text: "Great job from start to finish. Updates were spot on. Will definitely be working together in the future.",
  },
  {
    id: 2,
    name: "Caroline Phillips",
    img: "https://tse4.mm.bing.net/th?id=OIP.OwjGOqZo_xrPUlv1cqd9kwHaHx&pid=Api&P=0&h=220",
    text: "Excellent fast and efficient service - Highly recommended - Many Thanks!",
  },
  {
    id: 3,
    name: "Sunny Mistry",
    img: "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg",
    text: "One of the best. Right choice have come to the rescue on many occasions for us. Professional, top class and a very friendly service as always.",
  },
  {
    id: 4,
    name: "Mike Sheppard",
    img: "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
    text: "Great staff, very professional Dispatchers and fast and courteous drivers. I would definitely recommend.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");
  const title = document.getElementById("testimonial-title");
  const text = document.getElementById("testimonial-text");
  const userName = document.getElementById("user-name");

  function updateActiveCircle(activeCircle) {
    circles.forEach((circle) => {
      circle.classList.remove("active");
    });
    activeCircle.classList.add("active");
  }

  circles.forEach((circle) => {
    circle.addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id);
      const review = reviews.find((r) => r.id === id);
      if (review) {
        title.textContent = "The Best Financial Accounting App Ever!";
        text.textContent = `"${review.text}"`;
        userName.textContent = review.name;
        updateActiveCircle(e.target);
      }
    });
  });

  // Set initial active circle
  updateActiveCircle(document.querySelector('.circle[data-id="1"]'));
});
