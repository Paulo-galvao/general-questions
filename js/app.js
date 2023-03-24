// seleciona as tres caixas de perguntas
const question = document.querySelectorAll(".question");

// loop entre os elementos que contem as caixas de perguntas
question.forEach((q) => {

    const btn = q.querySelector(".arrow-btn");

    btn.addEventListener("click", () => {
        
        question.forEach((i) => {
            if(i != q) {
                i.classList.remove("question-visible");
            } 
        })

        // troca entre as classes que mostram e escondem as respostas
        q.classList.toggle("question-visible");

    })

})
