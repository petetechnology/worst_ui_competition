# Worst UI Competition - Random Letter Keyboard 🎹

## Description
The **Worst UI Competition** is a project featuring a virtual keyboard that randomly shuffles the letters on its keys after a set interval or when a key is pressed. This project utilizes HTML, CSS, and JavaScript to create a deliberately confusing and playful user interface.

## Features ✨

- **Random Key Values:** The letters on the virtual keyboard change randomly every 1.8 seconds.
- **Key Types:** The keyboard includes numeric keys, letters, and special keys like "espaço" and "apagar."
- **Input Recording:** Each time a key is pressed, its value is recorded and displayed in the form fields.
- **Delete Functionality:** Pressing the "apagar" key removes the last character entered.
- **Space Key:** Pressing the "espaço" key adds a blank space to the sequence.
- **Responsive Design:** The page design adapts to different screen sizes (desktop and mobile).

## Technologies Used 🛠️

- **HTML5:** For the page structure.
- **CSS3:** For styling the interface, including responsiveness.
- **JavaScript:** For keyboard manipulation logic and random letter shuffling.

## How to Use 🚀

1. Clone this repository and open the `index.html` file or [Click Here](https://kaue-alves.github.io/worst_ui_competition/).
2. Open the `index.html` file in your web browser.
3. Press the virtual keys on the keyboard to type.
4. The keys will randomly change their values every 1.8 seconds or when clicked.
5. The sequence of pressed keys will be displayed in the form fields.

## Styling and Layout 🎨

- The layout is adapted for various screen sizes. On mobile devices, the keyboard buttons are resized to provide a comfortable user experience.
- The keys have hover effects, changing color when the cursor hovers over them.

## Customization ⚙️

If you want to change the interval between key reshuffles, you can modify the value in the `setInterval` method in the `src/js/index.js` file:

```javascript
setInterval(mudarLetras, 1800); // Change 1800 to the desired value (in milliseconds)
