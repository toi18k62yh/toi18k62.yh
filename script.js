const questions = [
    {
        question: "Q1/12: Một buổi sáng thứ Hai đầu tuần, bạn thức dậy từ một giấc mơ: Người bạn thân nhất đã phản bội bạn và đi theo người bạn ghét. Bạn sẽ làm gì?",
        image: "media/Q1.gif",
        answers: {
            F: {
                text: "Suy nghĩ về chuyện của hai đứa trong thời gian gần, liệu giấc mơ có phải điềm báo?!",
                scores: { S: 0, N: +1 },
            },
            T: {
                text: "Tò mò về phần tiếp theo của giấc mơ, không biết có cảnh var nhau không nhỉ?",
                scores: { S: +1, N: 0 },
            },
        },
    },
    {
        question: "Q2/12: Đến giờ đi học rồi. Phóng trên con chiến mã lao thẳng về phía cổng trường, bạn thấy Hoàng tử Lai đang trực cổng và bắt những người đang sơ vin!?!?",
        image: "media/Q2.gif",
        answers: {
            J: {
                text: "Ngơ ngác không hiểu gì, cứ đi vào trường như bình thường.",
                scores: { P: 0, J: +1 },
            },
            P: {
                text: "Hào hứng hưởng ứng cởi sơ vin ra ngay lập tức, trường mình đúng là sáng suốt.",
                scores: { P: +1, J: 0 },
            },
        },
    },
    {
        question: "Q3/12: Giờ chào cờ tới rồi, vẫn như mọi ngày, bài Quốc ca hào hùng được bật lên. Thế nhưng ngay sau đó là Yên Hòa Cypher!!!",
        image: "media/Q3.gif",
        answers: {
            S: {
                text: "Ngồi tại chỗ vibing cùng đám bạn, hôm nay chào cờ thú vị ha.",
                scores: { E: +1, I: 0 },
            },
            N: {
                text: "Cảm thấy khó chịu vì mới sáng đã bật nhạc quá to.",
                scores: { E: 0, I: +1 },
            },
        },
    },
    {
        question: "Q4/12: Hết giờ chào cờ và bạn lại lên lớp. Trên cầu thang bạn thân va phải một người khác và cậu ta hùng hổ quát ngược lại/lườm nguýt lẩm bẩm. Bạn sẽ",
        image: "media/Q4.gif",
        answers: {
            F: {
                text: "Khuyên can bạn rồi kéo bạn đi về lớp.",
                scores: { I: +1, E: 0 },
            },
            T: {
                text: "Đứng ra bảo vệ bạn, quạc ngược lại ông bạn kia.",
                scores: { I: 0, E: +1 },
            },
        },
    },
    {
        question: "Q5/12: Cuối cùng cũng tới cửa lớp, bạn mở cửa bước vào. Nhưng không gian trong đó không phải lớp của bạn, và người bạn thân cũng đột nhiên biến mất. Đó là thế giới sự kiện Yên Hòa!",
        image: "media/Q5.gif",
        answers: {
            P: {
                text: "\"Nhìn quen quá, liệu có phải mình đang ở thế giới sự kiện không? Thế còn lớp học thì sao?\"",
                scores: { N: +1, S: 0 },
            },
            J: {
                text: "\"Uầyy hay thế, vậy là không phải học nữa, đi chơi bời khám phá thôi!\"",
                scores: { N: 0, S: +1 },
            },
        },
    },
    {
        question: "Q6/12: Vừa bước chân vào sự kiện, bạn đột nhiên bị kéo lên tháp. Bộ đồng phục biến thành đồ diễn, xung quanh khán giả đang cổ vũ nhiệt liệt.",
        image: "media/Q6.gif",
        answers: {
            I: {
                text: "\“Không ổn rồi, mình có biết nhảy gì đâu. Hay là tìm cách sủi xuống mà không ai biết nhỉ?\”",
                scores: { J: +1, P: 0 },
            },
            E: {
                text: "\“Từ trên cao nhìn xuống tuyệt quá, mọi người cũng nhiệt nữa. Thôi thì freestyle theo nhạc vậy!\”",
                scores: { J: 0, P: +1 },
            },
        },
    },
    {
        question: "Q7/12: Buổi trình diễn kết thúc, đội của bạn đã vô địch. Riêng bạn MC giữ lại phát biểu cảm nghĩ. Bạn sẽ nói gì?",
        image: "media/Q7.gif",
        answers: {
            S: {
                text: "Đóng vai người trình diễn, cảm ơn mọi người, khán giả, ban giám khảo một cách trang trọng và đầy cảm xúc.",
                scores: { I: 0, E: +1 },
            },
            N: {
                text: "Ngập ngừng, ngại ngùng không biết trả lời như nào, tìm cách trốn tránh việc phỏng vấn.",
                scores: { I: +1, E: 0 }
            },
        },
    },
    {
        question: "Q8/12: Đang nói thì cái mic nổ tung, bạn giật mình đứng dậy giữa lớp. Tất cả mọi người nhìn chằm chằm vào bạn.",
        image: "media/Q8.gif",
        answers: {
            E: {
                text: "Vội vàng xin lỗi cô và các bạn rồi tiếp tục học trong sự bồn chồn.",
                scores: { T: +1, F: 0 },
            },
            I: {
                text: "Ngại ngùng gục xuống, chỉ muốn tìm cái hố chui vào.",
                scores: { T: 0, F: +1 },
            },
        },
    },
    {
        question: "Q9/12: Dường như chả ai biết gì về nơi bạn vừa bước vào. Bạn vừa suy nghĩ vừa đi xuống góc nhỏ trong giờ ra chơi.",
        image: "media/Q9.gif",
        answers: {
            J: {
                text: "Tìm người quen để kể chuyện, xem liệu có ai giống mình hay không.",
                scores: { I: 0, E: +1 },
            },
            P: {
                text: "Giữ kín mọi chuyện, tự suy nghĩ về thế giới đó một mình trước khi hỏi mọi người.",
                scores: { I: +1, E: 0 },
            },
        },
    },
    {
        question: "Q10/12: Một đám học sinh kéo xô vào góc nhỏ. Thì ra là canteen đang phát đồ ăn miễn phí. Có hai lựa chọn được canteen quảng cáo: “Bánh mì trí nhớ” và “Trà đường quay ngược thời gian”. Bạn sẽ chọn gì?",
        image: "media/Q10.gif",
        answers: {
            F: {
                text: "Bánh mì trí nhớ.",
                scores: { N: +1, S: 0 },
            },
            T: {
                text: "Trà đường quay ngược thời gian.",
                scores: { N: 0, S: +1 },
            },
        },

    },
    {
        question: "Q11/12: Đột nhiên ánh mắt bạn va vào một điều lạ thường. Một con mèo đeo trên người pompom. Một con mèo biết nói!!! Con mèo hỏi: \"Liệu bạn đã dậy thật chưa?\"",
        image: "media/Q11.gif",
        answers: {
            S: {
                text: "“Cái quái gì vậy?!?! Trông thật kỳ quặc!”",
                scores: { T: +1, F: 0 },
            },
            N: {
                text: "“Con mèo cute hay ho vậy, ra sờ thử phát.”",
                scores: { T: 0, F: +1 },
            },
        },
    },
    {
        question: "Q12/12: Trống đánh, con mèo chạy bắn đi về phía sau góc nhỏ.",
        image: "media/Q12.gif",
        answers: {
            I: {
                text: "Chạy đuổi theo con mèo.",
                scores: { J: 0, P: +1 },
            },
            E: {
                text: "Đi về lớp, bỏ qua con mèo.",
                scores: { J: +1, P: 0 },
            },
        },
    },
    {
        question: "Hết ngày rồi, bạn lững thững đi về, kết thúc một ngày trong sự ngỡ ngàng và khó hiểu.",
        image: "media/Q13.gif",
        answers: {
            K: {
                text: "Suy nghĩ về những gì vừa xảy ra, tự hỏi làm sao để quay lại thế giới đó.",
            },
            U: {
                text: "Không suy nghĩ gì nữa, đi ăn tào phớ cho nó ngon.",
            },
        },
    },
];

const resultOptions = {
    "ISTJ": {
        image: "ISTJ.png",
    },
    "ISFJ": {
        image: "ISFJ.png"
    },
    "INFJ": {
        image: "INFJ.png"
    },
    "INTJ": {
        image: "INTJ.png"
    },
    "ISTP": {
        image: "ISTP.png"
    },
    "ISFP": {
        image: "ISFP.png"
    },
    "INFP": {
        image: "INFP.png"
    },
    "INTP": {
        image: "INTP.png"
    },
    "ESTP": {
        image: "ESTP.png"
    },
    "ESFP": {
        image: "ESFP.png"
    },
    "ENFP": {
        image: "ENFP.png"
    },
    "ENTP": {
        image: "ENTP.png"
    },
    "ESTJ": {
        image: "ESTJ.png"
    },
    "ESFJ": {
        image: "ESFJ.png"
    },
    "ENFJ": {
        image: "ENFJ.png"
    },
    "ENTJ": {
        image: "ENTJ.png"
    },

};

let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...


function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const result = pairs.map(pair => topLetters[pair]).join('');

    //show result
    const personalityData = resultOptions[result];
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        resultImage.src = "media/"+personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    } else {

    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();