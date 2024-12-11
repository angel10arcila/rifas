document.addEventListener('DOMContentLoaded', function() {
            const numbersGrid = document.getElementById('numbersGrid');
            const sortButton = document.getElementById('sortButton');
            const result = document.getElementById('result');
            let numbers = [];
            let lastWinner = null;

            const backgrounds = [
                'https://raw.githubusercontent.com/angel10arcila/rifas/refs/heads/main/gavera-maltin.jpg',
                'https://raw.githubusercontent.com/angel10arcila/rifas/refs/heads/main/bulto-de-harina.jpg', 
                'https://raw.githubusercontent.com/angel10arcila/rifas/refs/heads/main/gavera.jpg',
                'https://raw.githubusercontent.com/angel10arcila/rifas/refs/heads/main/caroreña.jpg',
                'https://raw.githubusercontent.com/angel10arcila/rifas/refs/heads/main/polar-tobo.jpg',
                'https://raw.githubusercontent.com/angel10arcila/rifas/refs/heads/main/pepsi-6.png',
                'https://raw.githubusercontent.com/angel10arcila/rifas/refs/heads/main/malta6.jpg',
                'https://raw.githubusercontent.com/angel10arcila/rifas/refs/heads/main/pepsi.jpg'
                       
            ];

            // Generar los 8 números
            for (let i = 1; i <= 8; i++) {
                const numberDiv = document.createElement('div');
                numberDiv.className = 'number';
                numberDiv.style.backgroundImage = `url(${backgrounds[i-1]})`;
                const span = document.createElement('span');
                span.textContent = i;
                numberDiv.appendChild(span);
                numbersGrid.appendChild(numberDiv);
                numbers.push(numberDiv);
            }

            // Función para realizar el sorteo
            function performSort() {
                if (lastWinner) {
                    lastWinner.classList.remove('winner');
                }

                sortButton.disabled = true;

                let iterations = 0;
                const maxIterations = 30;
                const interval = setInterval(() => {
                    numbers.forEach(num => num.classList.remove('selected'));
                    const randomIndex = Math.floor(Math.random() * numbers.length);
                    numbers[randomIndex].classList.add('selected');

                    iterations++;
                    if (iterations >= maxIterations) {
                        clearInterval(interval);
                        const winnerIndex = Math.floor(Math.random() * numbers.length);
                        lastWinner = numbers[winnerIndex];
                        lastWinner.classList.add('winner');
                        result.textContent = `¡El número ganador es el ${winnerIndex + 1}!`;
                        sortButton.disabled = false;
                    }
                }, 100);
            }

            sortButton.addEventListener('click', performSort);
        });

