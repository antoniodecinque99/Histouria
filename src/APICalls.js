const backendURL = "http://localhost:3001";

async function getCategories(){
    try {
        const requestObject = {
            method: "GET"
        }
        const response = await fetch(backendURL + "/categories")
        if (response.ok) {
            const categories = await response.json();
            return categories
        }
        return false
    } catch (err) {
        console.log(err)
        return false
    }
}

async function getQuizzes(category) {
    try {
        const requestObject = {
            method: "GET",
        }
        const response = await fetch(backendURL + "/quizzes?category=" + category.replace("%20", " "),requestObject)
        if (response.ok)  {
            const quizzes = await response.json();
            return quizzes
        }
        return false
    } catch (err) {
        console.log(err)
        return false
    }
}

async function addImage(formData) {
    try {
        const requestObject = {
            method: "POST",
            body: formData
        }
    
        const response = await fetch(backendURL + "/upload", requestObject)
        if (response.ok) {
            const answer = await response.json();
            console.log(answer)
            return answer
        }
        return false
    } catch (err) {
        console.log(err)
        return false
    }
}

async function addQuizz(quizz) {
    try {
        const requestObject = {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                quiz_name:quizz.name,
                category: quizz.category,
                picture: quizz.picture,
                description: quizz.description
              })
        }
        const response = await fetch(backendURL + "/quizzes",requestObject)
        if (response.ok) {
            const quizzes = await response.json();
            console.log(quizzes)
            return quizzes
        }
        return false
    } catch (err) {
        console.log(err)
        return false
    }
}

async function addQuestion(question) {
    try {
        const requestObject = {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                quiz_name:question.name,
                question_text:question.question_text,
                answer_1:question.answerA,
                answer_2:question.answerB,
                answer_3:question.answerC,
                answer_4:question.answerD,
                correct_answer:question.correct_answer,
                explanation:question.explanation
              })
        }
        const response = await fetch(backendURL + "/questions/"+question.quiz_name,requestObject)
        if (response.ok) {
            const questions = await response.json();
            console.log(questions)
            return questions
        }
        return false
    } catch (err) {
        console.log(err)
        return false
    }
}

export {
    getCategories,
    getQuizzes,
    addQuizz,
    addQuestion,
    addImage
}