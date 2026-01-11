document.addEventListener("DOMContentLoaded", () => {
  const quizList = document.getElementById("quizList");
  const quizSection = document.getElementById("quizSection");
  const emptySection = document.getElementById("emptySection");

  const tests = JSON.parse(localStorage.getItem("forms")) || [];

  // Reset visibility
  quizSection.classList.add("d-none");
  emptySection.classList.add("d-none");

  if (tests.length === 0) {
    emptySection.classList.remove("d-none");
    quizList.innerHTML = "";
  } else {
    quizSection.classList.remove("d-none");
    quizList.innerHTML = "";

    tests.forEach((test) => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4 d-flex";

      card.innerHTML = `
        <div class="card shadow-sm p-4 border-0 d-flex flex-column rounded-4" style="height: 280px;">
          <div class="flex-grow-1">
            <h5 class="fw-bold mb-3">${test.formTitle}</h5>
            <p class="text-muted small" style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">${test.formDesc}</p>
          </div>
          <button class="btn btn-primary w-100 btn-lg rounded-3 mt-auto" onclick="startQuiz('${test.formId}')">
            <i class="bi bi-play-fill me-1"></i>Start Quiz
          </button>
        </div>
      `;

      quizList.appendChild(card);
    });
  }
});

function startQuiz(id) {
  localStorage.setItem("userAnswers", JSON.stringify([]));
  localStorage.setItem("currentQuiz", id);
  window.location.href = "../quiz/index.html";
}
