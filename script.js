document.addEventListener('DOMContentLoaded', function() {
    // Quiz Questions and Answers
    const quizQuestions = [
        {
            question: "GitHub'ın kurulduğu yıl hangisidir?",
            options: ["2005", "2008", "2010", "2012"],
            answer: 1,
            explanation: "GitHub, 2008 yılında Tom Preston-Werner, Chris Wanstrath ve PJ Hyett tarafından kurulmuştur."
        },
        {
            question: "Aşağıdakilerden hangisi bir Git komutu değildir?",
            options: ["git push", "git pull", "git commit", "git upload"],
            answer: 3,
            explanation: "'git upload' geçerli bir Git komutu değildir. Dosyaları uzak depoya göndermek için 'git push' komutu kullanılır."
        },
        {
            question: "GitHub'ı hangi şirket satın almıştır?",
            options: ["Google", "Apple", "Microsoft", "Amazon"],
            answer: 2,
            explanation: "GitHub, 2018 yılında Microsoft tarafından 7.5 milyar dolara satın alınmıştır."
        },
        {
            question: "Bir repository'yi yerel bilgisayarınıza kopyalamak için hangi komut kullanılır?",
            options: ["git clone", "git copy", "git download", "git fetch"],
            answer: 0,
            explanation: "Bir repository'yi yerel bilgisayarınıza kopyalamak için 'git clone' komutu kullanılır."
        },
        {
            question: "GitHub'da bir projeye katkıda bulunmak için genellikle hangi işlem yapılır?",
            options: ["Fork", "Merge", "Clone", "Commit"],
            answer: 0,
            explanation: "Başka birisinin projesine katkıda bulunmak için genellikle önce projeyi 'fork' ederek kendi hesabınıza kopyalarsınız."
        },
        {
            question: "Git'te yeni bir dal (branch) oluşturmak için hangi komut kullanılır?",
            options: ["git branch yeni-dal", "git checkout -b yeni-dal", "git create yeni-dal", "git new-branch yeni-dal"],
            answer: 1,
            explanation: "Yeni bir dal oluşturup hemen o dala geçmek için 'git checkout -b yeni-dal' komutu kullanılır."
        },
        {
            question: "GitHub'da Pull Request ne işe yarar?",
            options: ["Kodunuzu uzak depoya göndermek", "Değişiklikleri ana projeye birleştirmek için istek göndermek", "Kodunuzu yerel bilgisayarınıza indirmek", "Bir repository'yi silmek"],
            answer: 1,
            explanation: "Pull Request, yaptığınız değişikliklerin ana projeye birleştirilmesi için bir istek göndermenizi sağlar."
        },
        {
            question: "Git'te 'commit' işlemi ne yapar?",
            options: ["Değişiklikleri uzak depoya gönderir", "Değişiklikleri yerel depoya kaydeder", "Uzak depodan güncellemeleri alır", "Yeni bir dal oluşturur"],
            answer: 1,
            explanation: "'commit' işlemi, değişikliklerinizi yerel Git deposuna kaydeder ve bir anlık görüntü oluşturur."
        },
        {
            question: "GitHub'da bir repository'nin görünürlük ayarı hangisi olamaz?",
            options: ["Public", "Private", "Internal", "External"],
            answer: 3,
            explanation: "GitHub'da repository görünürlük ayarları: Public (herkes görebilir), Private (sadece izin verilenler görebilir) ve Internal (organizasyon üyeleri görebilir) olabilir. 'External' geçerli bir görünürlük ayarı değildir."
        },
        {
            question: "Git'te iki dalı birleştirmek için hangi komut kullanılır?",
            options: ["git merge", "git combine", "git join", "git unite"],
            answer: 0,
            explanation: "İki dalı birleştirmek için 'git merge' komutu kullanılır."
        }
    ];
    
    // Smooth scrolling for navigation links (only for same-page links)
    const navLinks = document.querySelectorAll('nav a, .hero a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Only apply smooth scrolling to same-page links (starting with #)
        if (href && href.startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
    
    // Highlight active section in navigation
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Add active class style
    const style = document.createElement('style');
    style.textContent = `
        nav ul li a.active {
            background-color: rgba(255, 255, 255, 0.2);
            color: #fff;
        }
    `;
    document.head.appendChild(style);
    
    // Code block syntax highlighting effect
    const codeBlocks = document.querySelectorAll('.code-block code');
    
    codeBlocks.forEach(block => {
        const text = block.textContent;
        let highlighted = text;
        
        // Simple syntax highlighting
        highlighted = highlighted
            .replace(/(\$|git|init|add|commit|push|pull|clone|status)/g, '<span style="color: #7ee787;">$1</span>')
            .replace(/(--global|-m)/g, '<span style="color: #ff7b72;">$1</span>')
            .replace(/"([^"]*)"/g, '<span style="color: #a5d6ff;">"$1"</span>')
            .replace(/(https:\/\/[^\s]+)/g, '<span style="color: #a5d6ff;">$1</span>');
            
        block.innerHTML = highlighted;
    });
    
    // Add scroll-to-top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    document.body.appendChild(scrollTopBtn);
    
    // Add button style
    const btnStyle = document.createElement('style');
    btnStyle.textContent = `
        .scroll-top-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--primary-color);
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 99;
        }
        
        .scroll-top-btn.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-top-btn:hover {
            background-color: #2c974b;
            transform: translateY(-3px);
        }
    `;
    document.head.appendChild(btnStyle);
    
    // Show/hide scroll-to-top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .step, .command, .workflow-item, .tip');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    const elementsToAnimate = document.querySelectorAll('.feature-card, .step, .command, .workflow-item, .tip');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run animation on load
    animateOnScroll();
    
    // Mobile navigation toggle
    const createMobileNav = function() {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav ul');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        header.querySelector('.container').appendChild(mobileMenuBtn);
        
        // Add mobile styles
        const mobileStyle = document.createElement('style');
        mobileStyle.textContent = `
            @media (max-width: 768px) {
                .mobile-menu-btn {
                    display: block;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
                
                nav ul {
                    position: fixed;
                    top: 70px;
                    left: 0;
                    width: 100%;
                    background-color: var(--dark-color);
                    flex-direction: column;
                    padding: 20px;
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
                    transform: translateY(-150%);
                    transition: transform 0.3s ease;
                }
                
                nav ul.active {
                    transform: translateY(0);
                    display: flex;
                }
                
                nav ul li {
                    margin: 10px 0;
                }
            }
        `;
        document.head.appendChild(mobileStyle);
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    nav.classList.remove('active');
                }
            });
        });
    };
    
    // Initialize mobile navigation
    if (window.innerWidth <= 768) {
        createMobileNav();
    }
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
                createMobileNav();
            }
        }, 250);
    });
    
    // Quiz Functionality
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const shareResultBtn = document.getElementById('share-result-btn');
    
    const quizStartScreen = document.getElementById('quiz-start-screen');
    const quizQuestionScreen = document.getElementById('quiz-question-screen');
    const quizResultScreen = document.getElementById('quiz-result-screen');
    
    const questionText = document.getElementById('question-text');
    const quizOptions = document.getElementById('quiz-options');
    const quizFeedback = document.getElementById('quiz-feedback');
    const feedbackText = document.getElementById('feedback-text');
    const feedbackIconCorrect = document.querySelector('.feedback-icon.correct');
    const feedbackIconWrong = document.querySelector('.feedback-icon.wrong');
    
    const currentQuestionEl = document.getElementById('current-question');
    const totalQuestionsEl = document.getElementById('total-questions');
    const currentScoreEl = document.getElementById('current-score');
    const finalScoreEl = document.getElementById('final-score');
    const resultMessageEl = document.getElementById('result-message');
    const progressBar = document.getElementById('quiz-progress-bar');
    
    let currentQuestion = 0;
    let score = 0;
    let selectedOption = null;
    
    // Initialize quiz
    function initQuiz() {
        currentQuestion = 0;
        score = 0;
        totalQuestionsEl.textContent = quizQuestions.length;
        showStartScreen();
    }
    
    // Show start screen
    function showStartScreen() {
        quizStartScreen.style.display = 'block';
        quizQuestionScreen.style.display = 'none';
        quizResultScreen.style.display = 'none';
    }
    
    // Show question screen
    function showQuestionScreen() {
        quizStartScreen.style.display = 'none';
        quizQuestionScreen.style.display = 'block';
        quizResultScreen.style.display = 'none';
        quizFeedback.style.display = 'none';
        
        loadQuestion();
    }
    
    // Show result screen
    function showResultScreen() {
        quizStartScreen.style.display = 'none';
        quizQuestionScreen.style.display = 'none';
        quizResultScreen.style.display = 'block';
        
        finalScoreEl.textContent = score;
        
        // Generate result message based on score
        let resultMessage = '';
        const percentage = (score / (quizQuestions.length * 10)) * 100;
        
        if (percentage >= 90) {
            resultMessage = 'Harika! GitHub konusunda bir uzman gibisiniz!';
        } else if (percentage >= 70) {
            resultMessage = 'Çok iyi! GitHub konusunda oldukça bilgilisiniz.';
        } else if (percentage >= 50) {
            resultMessage = 'İyi! Temel GitHub bilgileriniz var, ancak daha fazla öğrenebilirsiniz.';
        } else {
            resultMessage = 'GitHub hakkında daha fazla bilgi edinmek için sayfamızdaki bilgileri inceleyebilirsiniz.';
        }
        
        resultMessageEl.textContent = resultMessage;
    }
    
    // Load current question
    function loadQuestion() {
        const question = quizQuestions[currentQuestion];
        questionText.textContent = question.question;
        
        // Update progress
        currentQuestionEl.textContent = currentQuestion + 1;
        currentScoreEl.textContent = score;
        progressBar.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
        
        // Clear previous options
        quizOptions.innerHTML = '';
        
        // Add options
        const letters = ['A', 'B', 'C', 'D'];
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'quiz-option';
            optionElement.innerHTML = `<span class="option-letter">${letters[index]}</span> ${option}`;
            optionElement.dataset.index = index;
            
            optionElement.addEventListener('click', selectOption);
            
            quizOptions.appendChild(optionElement);
        });
    }
    
    // Handle option selection
    function selectOption(e) {
        // If feedback is already shown, don't allow selection
        if (quizFeedback.style.display === 'block') return;
        
        // Remove previous selection
        const options = quizOptions.querySelectorAll('.quiz-option');
        options.forEach(option => option.classList.remove('selected'));
        
        // Add selection to clicked option
        const selectedElement = e.currentTarget;
        selectedElement.classList.add('selected');
        
        selectedOption = parseInt(selectedElement.dataset.index);
        
        // Show feedback after a short delay
        setTimeout(() => {
            showFeedback();
        }, 500);
    }
    
    // Show feedback for selected answer
    function showFeedback() {
        const question = quizQuestions[currentQuestion];
        const isCorrect = selectedOption === question.answer;
        
        // Show appropriate feedback
        quizFeedback.style.display = 'block';
        feedbackText.textContent = question.explanation;
        
        if (isCorrect) {
            feedbackIconCorrect.style.display = 'block';
            feedbackIconWrong.style.display = 'none';
            score += 10;
            currentScoreEl.textContent = score;
        } else {
            feedbackIconCorrect.style.display = 'none';
            feedbackIconWrong.style.display = 'block';
        }
        
        // Highlight correct and wrong answers
        const options = quizOptions.querySelectorAll('.quiz-option');
        options.forEach((option, index) => {
            if (index === question.answer) {
                option.classList.add('correct');
            } else if (index === selectedOption && selectedOption !== question.answer) {
                option.classList.add('wrong');
            }
            
            // Disable further clicks
            option.removeEventListener('click', selectOption);
        });
    }
    
    // Move to next question or show results
    function nextQuestion() {
        currentQuestion++;
        
        if (currentQuestion < quizQuestions.length) {
            showQuestionScreen();
        } else {
            showResultScreen();
        }
    }
    
    // Event listeners for quiz buttons
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', () => {
            showQuestionScreen();
        });
    }
    
    if (nextQuestionBtn) {
        nextQuestionBtn.addEventListener('click', nextQuestion);
    }
    
    if (restartQuizBtn) {
        restartQuizBtn.addEventListener('click', () => {
            initQuiz();
            showQuestionScreen();
        });
    }
    
    if (shareResultBtn) {
        shareResultBtn.addEventListener('click', () => {
            // Share functionality (could be implemented with Web Share API)
            alert('Sonucunuz: ' + score + ' puan!');
        });
    }
    
    // Initialize quiz if quiz elements exist
    if (document.querySelector('.quiz-container')) {
        initQuiz();
    }
});
