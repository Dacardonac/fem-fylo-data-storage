
# Frontend Mentor - Fylo Storage Component solution with React and Typescript ⚛️✅

![Design preview for Fylo Storage Component coding challenge](./public/design/preview.webp)

This is a solution to the **[Fylo Storage Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n)** by **[Dacardonac](https://github.com/Dacardonac)**. Frontend Mentor challenges help you improve your coding skills by building realistic projects with Frontend.

## Table of contents 📄

- **Frontend Mentor - Fylo Storage Component**
  - **[Table of contents](#table-of-contents-)**
  - **[Overview](#overview-)**
    - [The challenge](#the-challenge-)
    - [Screenshot](#screenshots-)
    - [Links](#links-)
    - [How to use](#how-to-use-the-project-)
  - **[My process](#my-process-)**
    - [Built with](#built-with-)
    - [What I learned](#what-i-learned-)
    - [Continued development](#continued-development-)
    - [Useful resources](#useful-resources-)
  - **[Author](#author-)**
  - **[Acknowledgments](#acknowledgments-)**
  - **[Contributing](#contributing-)**

## Overview ⬇️

### The challenge 🧩

**Users should be able to see in this project:**

- View the optimal layout depending on their device's screen size only between mobile and desktop (Responsive)
- Styles in Components and modules (Sass/Scss)
- React Components
- Accessibility (a11y)
- BEM Methodology
- Typecript

### Screenshots 📷

Desktop 🖥️

**![Solution Desktop Screenshot]()**


Mobile 🤳

**![Solution Mobile Screenshot](./public/screenshots/mobile-screenshot.webp)**
#
### Links 📍

- Solution URL: **[Frontend Mentor Solution 👨‍💻]()**
- Live Site URL: **[Solution Deploy in Vercel 🚀]()**
- LinkedIn: **[Solution Post in LinkedIn 💻]()**
- Challenge: **[Frontend Mentor Challenge 🧩](https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n)**
#
### How to Use the Project 💻

To use this project, you need to follow these steps:

1. **Clone the repository**:

  ```bash
  git clone https://github.com/Dacardonac/fem-fylo-data-storage.git
  ```

2. **Navigate to the project directory 📂**:

  ```bash
  cd fem-fylo-storage-component
  ```

3. **Install dependencies ⬇️: Make sure you have Node.js installed, then run**:

  ```bash
  npm install
  ```

4. **Run the project ▶️: Start the development server with**:

  ```bash
  npm run dev
  ```
  This will start the project locally, typically accessible at `http://localhost:5173`.

5. **If you want to see a preview of the project ▶️**:

  ```bash
  npm run build
  npm run preview
  ```
  **This will start the Preview server on `http://localhost:5174`.**

## My process 🎓

### Built with 🛠

- HTML5 - Structure
- CSS3 Custom Properties - Styles
- React TSX - Programming Logic and Components
- Mobile-first Workflow
- Flexbox - Spaces and Alignments
- Conventional Commits - Commit Specification
- [Vite](https://vitejs.dev/) - Frontend Tooling
- [Sass/Scss](https://sass-lang.com/) - Modules and Styles
- Markdown - README.md and LICENSE files (Documentation)
- BEM Methodology
- [TypeScript](https://www.typescriptlang.org/)
#
### What I learned 🧠

With this project, I learned, implemented, and practiced **React - TSX**, along with its properties and methods like **Props**, **Components** and **Functions**. I also reinforced and practiced my **CSS3** knowledge with **Sass/Scss modules**, worked on semantic **HTML5** by applying the **BEM** methodology for class naming and **Componets**.

**You can see an example below ⬇️:**

``` JSX
const Stats = ({ minLength, maxLength }: StatsProps) => {
  const max = 1000;
  const [used, setUsed] = useState(815);

  const left = max - used;

  useEffect(() => {
    const percentage = (used / max) * 100;

    const root = document.documentElement;
    root.style.setProperty('--fill-width', `${percentage}%`);
  }, [used]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsed(Number(event.target.value));
  };

  return (
    <article className={c.stats}>
      <p className={c['stats__info']}>
        You’ve used <span className={c['stats__info-strong']}>{used} GB</span>{' '}
        of your storage
      </p>
      <div className={c['stats__graph']}>
        <input
          className={c['stats__graph-bar']}
          type="range"
          min={0}
          max={max}
          value={used}
          onChange={handleChange}
        />
        <div className={c['stats__graph-length']}>
          <p>{minLength}</p>
          <p>{maxLength}</p>
        </div>
      </div>
      <div
        className={`${c['stats__notification']} ${c['stats__notification-small']}`}
      >
        <span className={c['stats__notification-strong']}>{left}</span>
        GB LEFT
      </div>
    </article>
  );
};
```
#
```scss
.stats {
  position: relative;
  width: 326px;
  height: 154px;
  background-color: var(--blue-850);
  color: var(--white);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  box-shadow: 0 75px 100px -30px rgba(0, 0, 0, 0.24);

  &__info {
    text-align: center;
    font-size: 14px;
    line-height: 115%;
    color: var(--blue-200);
    margin-bottom: 1rem;

    &-strong {
      font-weight: bold;
    }
  }

  &__graph {
    display: flex;
    flex-direction: column;
    position: relative;

    ...
```
#
### Continued development 🔎

I want to continue learning more about **React**, **Props** and **Typescript**, **Responsive Design** and how to work across different devices with **Flexbox**, **Grid** and **@media**, also I want continue using  **BEM methodology** and perfect the technique in aspects like name the classes and components, also I want to improve in modularize the components styles and classes with **Sass modules**, learn about **Conventional Commits**, keep using **Vite** and continue using **Config files** and **AI**.

### Useful resources 🛠

- **[MDN](https://developer.mozilla.org/en-US/)** - This helped me with **Documentation** on many topics, mostly with **HTML** and **CSS** properties.
- **[ChatGPT](https://chatgpt.com/)** - This is an incredible **Artificial Intelligence (AI)** tool, **ChatGPT** helps me with **specific topics**, **errors in the project** and **investigations**.
- **[Figma](https://www.figma.com/)** - Amazing tool for the **design** and style of the project.

## Author 👨‍💻

- Frontend Mentor - **[@Dacardonac](https://www.frontendmentor.io/profile/Dacardonac)**
- LinkedIn - **[@Daniel Alejandro Cano Cardona](https://www.linkedin.com/in/daniel-alejandro-cano-cardona/)**

## Acknowledgments 🙌

I want to thank **[Jairovg](https://github.com/jairovg)** for the teachings and his help to complete this challenge in a good way and with good practices.

## 🤝 Contributing

Thank you for your interest in contributing to this project! Any kind of help is welcome — fixing bugs, improving the design, optimizing code, or sharing new ideas.

### How to Contribute 🧑‍💻

1. **Fork this repository**

2. **Create a new branch for your feature or fix**

```bash
git checkout -b feature/your-feature-name
```
3. **Make your changes and commit with clear, conventional messages**

```bash
git commit -m "feat: add notification component"
```

4. **Push your branch**

```bash
git push origin feature/your-feature-name
```

5. **Open a Pull Request (PR) from your fork to the main branch of this repository.**
#
### Contribution Guidelines 📌

- Follow the project's best practices (BEM, modular structure, naming conventions).

- Keep consistency with existing styles and code.

- Use Conventional Commits.

- Make sure the project runs correctly before submitting your PR (npm run dev and npm run preview).
#
**thank you frontend mentor for promoting learning and providing knowledge with these challenges** 🙌

**Have fun building!** 🚀
#
