# CodeAlpha Calculator

A modern, interactive calculator web application built with HTML, CSS, and JavaScript. This project demonstrates essential web development concepts including DOM manipulation, event handling, and mathematical expression evaluation.

## Features

✨ **Core Functionality**
- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Decimal number support
- Percentage calculations
- Clear and delete functionality
- Real-time expression evaluation with live result preview

🎨 **User Interface**
- Clean, modern design with intuitive button layout
- Color-coded buttons for different operation types
- Responsive display showing current expression and calculated result
- Professional styling with visual feedback on interactions

⌨️ **Input Methods**
- **Mouse/Touch**: Click buttons for full functionality
- **Keyboard Support**:
  - Number keys (0-9) for digit input
  - Operators: `+`, `-`, `*`, `/`
  - Decimal: `.` or `,`
  - Calculate: `Enter` or `=`
  - Delete: `Backspace`
  - Clear: `Escape`

## Project Structure

```
CodeAlpha_calculator/
├── index.html      # HTML structure and calculator layout
├── styles.css      # Styling and responsive design
├── script.js       # Calculator logic and event handling
└── README.md       # Project documentation
```

## Files Overview

### `index.html`
Defines the calculator structure with:
- A display area showing current expression and result
- 4×4 grid of buttons for digits, operators, and functions
- Links to external CSS and JavaScript files

### `styles.css`
Provides styling for:
- Calculator container and button layout
- Visual distinctions for different button types (numbers, operators, functions)
- Responsive design principles
- Interactive button states (hover, active)

### `script.js`
Implements core functionality:
- **Expression Management**: Builds and stores mathematical expressions
- **Expression Evaluation**: Safely evaluates expressions with validation
- **Event Handling**: Processes button clicks and keyboard input
- **Display Updates**: Real-time update of output and calculated results
- **Error Prevention**: Input validation to prevent invalid operations

## How It Works

1. **User Input**: Click buttons or use keyboard to enter numbers and operators
2. **Expression Building**: The calculator concatenates inputs into an expression string
3. **Live Preview**: As you type, the calculator shows the evaluated result below the input
4. **Calculation**: Press `=` or `Enter` to finalize and display the result
5. **Chain Operations**: Use the result to perform additional calculations

## Installation & Usage

### Local Development
1. Clone or download the repository
2. Open `index.html` in a web browser
3. Start calculating!

### No Server Required
This is a static web application—no server, build process, or dependencies needed. Just open the HTML file and start using it.

## Example Operations

| Operation | Input | Result |
|-----------|-------|--------|
| Addition | 5 + 3 | 8 |
| Subtraction | 10 - 4 | 6 |
| Multiplication | 6 × 7 | 42 |
| Division | 20 ÷ 4 | 5 |
| Percentage | 100% | 1 |
| Decimals | 3.14 + 2.86 | 6 |

## Technical Highlights

- **Expression Validation**: Sanitizes input to prevent code injection
- **Safe Evaluation**: Uses `Function()` constructor with strict mode for secure expression evaluation
- **Floating-Point Precision**: Rounds results to 10 decimal places to avoid floating-point errors
- **Smart Input Handling**: Prevents invalid operations (e.g., consecutive operators, division by zero)
- **Keyboard Accessibility**: Full keyboard support for accessibility and power users

## Browser Compatibility

Works on all modern browsers that support:
- ES6 JavaScript
- CSS Grid/Flexbox
- DOM APIs

## Future Enhancements

- History of recent calculations
- Scientific calculator mode (trigonometric functions, logarithms)
- Dark/light theme toggle
- Calculator memory functions (M+, M-, MR, MC)
- Export calculation history

## License

This project is part of the CodeAlpha learning program.

## Author

Michelle2424-mola

---

**Happy Calculating! 🧮**
