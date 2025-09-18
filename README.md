# 🎯 Jogo de Adivinhação

Um mini jogo feito em **HTML, CSS e JavaScript puro (Vanilla)**, onde o jogador deve adivinhar um número secreto entre 1 e 100.  
Você escolhe a dificuldade e tenta acertar antes que suas tentativas acabem. Ideal para praticar lógica e DOM em JS!

---

## 📍 Acesse o jogo online

👉 [**Clique aqui para jogar**]([https://andrepczx.github.io/Adivinhe-os-Numeros/main/mainpg/index.html])

(Hospedado via GitHub Pages)

---

## 🚀 Como Jogar

1. Vá até a página inicial e escolha a dificuldade:
   - 🟢 **Fácil** — 15 tentativas
   - 🟡 **Médio** — 8 tentativas
   - 🔴 **Difícil** — 5 tentativas
2. Um número secreto entre **1 e 100** será gerado automaticamente.
3. Digite seu palpite no campo e clique em "Chutar".
4. Caso você digite um valor inválido (não numérico ou fora do intervalo 1-100), o jogo mostrará uma mensagem de erro.
5. O jogo vai te dar dicas:
   - "É menor!" se o número secreto for menor que o seu chute
   - "É maior!" se for maior
6. Tente acertar antes de acabar as tentativas.
7. Ao acertar ou perder, você será redirecionado à página inicial.

---

## 🧠 Lógica do Jogo

- O número é gerado usando `Math.random()`
- Cada modo define um limite diferente de tentativas
- O jogador recebe **feedback imediato** após cada palpite
- Ao finalizar (acerto ou erro), o jogo aguarda um tempo e redireciona para o menu principal

---

## 🛠 Tecnologias usadas

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## 🗂️ Estrutura do Projeto

```plaintext
Jogo-Adivinhar/
├── index.html               → Redirecionamento para página principal
├── main/
│   └── mainpg/
│       ├── index.html       → Tela com escolha de dificuldade
│       ├── style.css
│       └── script.js
├── pages/
│   ├── easymode/
│   ├── mediummode/
│   └── hardmode/
├── README.md
```

## 📫 Contato

Quer trocar uma ideia? Me ache no [GitHub](https://github.com/andrepczx) ou mande um email. **andreananiasm.contact@gmail.com**
