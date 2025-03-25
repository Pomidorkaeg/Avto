// Интерактивные функции
document.addEventListener('DOMContentLoaded', () => {
    // Анимация появления карточек при скролле
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        observer.observe(card);
    });

    // Плавная прокрутка к разделам
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('data-target');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Модальное окно с детальной информацией
    const modal = document.querySelector('.modal');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const playerData = {
                name: card.querySelector('.card-title').textContent,
                role: card.querySelector('.card-role').textContent,
                description: card.querySelector('.card-description').textContent,
                image: card.querySelector('.card-image').src
            };
            
            showPlayerDetails(playerData);
        });
    });

    function showPlayerDetails(player) {
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = `
            <div class="modal-header">
                <h2>${player.name}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <img src="${player.image}" alt="${player.name}" class="modal-image">
                <h3>${player.role}</h3>
                <p>${player.description}</p>
            </div>
        `;
        
        modal.classList.add('active');
        
        document.querySelector('.modal-close').addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Закрытие модального окна по клику вне его
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Анимация заголовка при наведении
    const title = document.querySelector('.header-title');
    title.addEventListener('mouseover', () => {
        title.style.animation = 'none';
        setTimeout(() => {
            title.style.animation = 'titleGlow 2s ease-in-out infinite alternate';
        }, 10);
    });
});

// Динамическая загрузка данных
async function loadTeamData() {
    try {
        const response = await fetch('your-api-endpoint');
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        showErrorMessage('Не удалось загрузить данные команды');
        return null;
    }
}

function renderTeams(data) {
    const fcSection = document.querySelector('#fc-players');
    const schoolSection = document.querySelector('#school-players');
    
    // Рендеринг команд с анимацией
    data.players.forEach((player, index) => {
        const card = createPlayerCard(player);
        card.style.animationDelay = `${index * 0.1}s`;
        
        if (player.team === 'goodauta') {
            fcSection.appendChild(card);
        } else {
            schoolSection.appendChild(card);
        }
    });
}

function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${player.image}" alt="${player.name}" class="card-image">
        <div class="card-content">
            <h3 class="card-title">${player.name}</h3>
            <div class="card-role">${player.role}</div>
            <p class="card-description">${player.description}</p>
        </div>
    `;
    return card;
} 