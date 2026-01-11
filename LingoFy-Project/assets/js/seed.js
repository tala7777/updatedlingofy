
// Seed data for LingoFy

function seedData() {
    // 1. Seed Users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.length === 0) {
        users.push({
            fullName: "Admin User",
            email: "admin@lingofy.com",
            password: "password123",
            role: "admin"
        });
        users.push({
            fullName: "John Doe",
            email: "student@lingofy.com",
            password: "password123",
            role: "student"
        });
        localStorage.setItem('users', JSON.stringify(users));
        console.log("Users seeded.");
    }

    // 2. Seed Forms (Quizzes)
    const forms = JSON.parse(localStorage.getItem('forms')) || [];
    if (forms.length === 0) {
        const mockQuizzes = [
            {
                formId: 1,
                formDate: new Date().toLocaleDateString(),
                formTitle: "Spanish Basics",
                formDesc: "Learn common Spanish greetings and basic phrases.",
                formStatus: true,
                numberOfQuestions: 3,
                questions: [
                    {
                        questionId: 1,
                        questionTitle: "How do you say 'Hello' in Spanish?",
                        questionType: "radio",
                        isRequired: true,
                        options: [
                            { optionId: 1, optionContent: "Hola", isCorrect: true },
                            { optionId: 2, optionContent: "Bonjour", isCorrect: false },
                            { optionId: 3, optionContent: "Ciao", isCorrect: false }
                        ]
                    },
                    {
                        questionId: 2,
                        questionTitle: "Which of these means 'Thank you'?",
                        questionType: "select",
                        isRequired: true,
                        options: [
                            { optionId: 4, optionContent: "Gracias", isCorrect: true },
                            { optionId: 5, optionContent: "Por favor", isCorrect: false },
                            { optionId: 6, optionContent: "De nada", isCorrect: false }
                        ]
                    },
                    {
                        questionId: 3,
                        questionTitle: "Translate 'Good morning'",
                        questionType: "radio",
                        isRequired: true,
                        options: [
                            { optionId: 7, optionContent: "Buenas noches", isCorrect: false },
                            { optionId: 8, optionContent: "Buenos días", isCorrect: true },
                            { optionId: 9, optionContent: "Buenas tardes", isCorrect: false }
                        ]
                    }
                ]
            },
            {
                formId: 2,
                formDate: new Date().toLocaleDateString(),
                formTitle: "German Vocabulary",
                formDesc: "Advanced German vocabulary for daily use.",
                formStatus: true,
                numberOfQuestions: 2,
                questions: [
                    {
                        questionId: 1,
                        questionTitle: "What is the German word for 'Apple'?",
                        questionType: "radio",
                        isRequired: true,
                        options: [
                            { optionId: 1, optionContent: "Apfel", isCorrect: true },
                            { optionId: 2, optionContent: "Birne", isCorrect: false },
                            { optionId: 3, optionContent: "Orange", isCorrect: false }
                        ]
                    },
                    {
                        questionId: 2,
                        questionTitle: "How do you say 'School' in German?",
                        questionType: "radio",
                        isRequired: true,
                        options: [
                            { optionId: 4, optionContent: "Haus", isCorrect: false },
                            { optionId: 5, optionContent: "Schule", isCorrect: true },
                            { optionId: 6, optionContent: "Auto", isCorrect: false }
                        ]
                    }
                ]
            },
            {
                formId: 3,
                formDate: new Date().toLocaleDateString(),
                formTitle: "French Cuisine Quiz",
                formDesc: "Test your knowledge of French food terms.",
                formStatus: true,
                numberOfQuestions: 2,
                questions: [
                    {
                        questionId: 1,
                        questionTitle: "What is a 'Croissant'?",
                        questionType: "radio",
                        isRequired: true,
                        options: [
                            { optionId: 1, optionContent: "A pastry", isCorrect: true },
                            { optionId: 2, optionContent: "A type of cheese", isCorrect: false },
                            { optionId: 3, optionContent: "A soup", isCorrect: false }
                        ]
                    },
                    {
                        questionId: 2,
                        questionTitle: "Which of these is a famous French soup?",
                        questionType: "select",
                        isRequired: true,
                        options: [
                            { optionId: 4, optionContent: "Gazpacho", isCorrect: false },
                            { optionId: 5, optionContent: "Bouillabaisse", isCorrect: true },
                            { optionId: 6, optionContent: "Minestrone", isCorrect: false }
                        ]
                    }
                ]
            }
        ];
        localStorage.setItem('forms', JSON.stringify(mockQuizzes));
        console.log("Forms seeded.");
    }
}

// Automatically seed when included
seedData();
