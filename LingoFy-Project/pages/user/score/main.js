// ===== Score Main JS =====
const scoreData = JSON.parse(localStorage.getItem("lastScore"));
const quizId = localStorage.getItem("currentQuiz");
const allForms = JSON.parse(localStorage.getItem("forms")) || [];
const quiz = allForms.find(f => f.formId == quizId);
const userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];

if (scoreData && quiz) {
  document.getElementById("scoreDisplay").textContent = `${scoreData.score}/${scoreData.total}`;

  // Level and Feedback
  const percent = (scoreData.score / scoreData.total) * 100;
  const levelDisplay = document.getElementById("levelDisplay");
  const feedbackText = document.getElementById("feedbackText");
  const motivationalTitle = document.getElementById("motivationalTitle");
  const motivationalText = document.getElementById("motivationalText");

  if (percent >= 80) {
    levelDisplay.textContent = "Advanced";
    feedbackText.textContent = "You have a great grasp of this topic!";
    motivationalTitle.textContent = "Excellent!";
    motivationalText.textContent = "Amazing job! You've mastered this set of questions.";
  } else if (percent >= 50) {
    levelDisplay.textContent = "Intermediate";
    feedbackText.textContent = "You're doing well, but there's room for improvement.";
    motivationalTitle.textContent = "Good Job!";
    motivationalText.textContent = "Keep practicing and you'll reach the top in no time.";
  } else {
    levelDisplay.textContent = "Beginner";
    feedbackText.textContent = "Keep studying and try again.";
    motivationalTitle.textContent = "Don't Give Up!";
    motivationalText.textContent = "Every mistake is a learning opportunity. Try the quiz again soon!";
  }

  const tbody = document.getElementById("resultsTableBody");
  tbody.innerHTML = "";
  quiz.questions.forEach((q, i) => {
    const correctAnswer = q.options.find(opt => opt.isCorrect).optionContent;
    const status = userAnswers[i] === correctAnswer
      ? '<span class="text-success fw-bold"><i class="bi bi-check-circle me-1"></i>Correct</span>'
      : '<span class="text-danger fw-bold"><i class="bi bi-x-circle me-1"></i>Incorrect</span>';

    tbody.innerHTML += `<tr>
      <td>${q.questionTitle}</td>
      <td>${userAnswers[i] || '<span class="text-muted">No answer</span>'}</td>
      <td>${correctAnswer}</td>
      <td>${status}</td>
    </tr>`;
  });
}
