// TODO: this file! :)

const app = {
    // State management
    state: {
        numberBank: [],
        sortedOdds: [],
        sortedEvens: []
    },

    // Initialize the application
    init() {
        this.cacheDOM();
        this.bindEvents();
    },

    // Cache DOM elements for performance
    cacheDOM() {
        this.numberInput = document.querySelector('#number');
        this.addNumberButton = this.numberInput.nextElementSibling;
        this.numberBankOutput = document.querySelector('#numberBank output');
        this.oddsOutput = document.querySelector('#odds output');
        this.evensOutput = document.querySelector('#evens output');
        this.sortOneButton = document.querySelector('#sortOne');
        this.sortAllButton = document.querySelector('#sortAll');
    },

    // Attach event listeners
    bindEvents() {
        this.addNumberButton.addEventListener('click', this.handleAddNumber.bind(this));
        this.sortOneButton.addEventListener('click', this.sortOneNumber.bind(this));
        this.sortAllButton.addEventListener('click', this.sortAllNumbers.bind(this));
    },

    // Handle adding a number to the bank
    handleAddNumber(event) {
        event.preventDefault();
        const numberValue = Number(this.numberInput.value);

        // Validate input is a number
        if (!isNaN(numberValue)) {
            this.state.numberBank.push(numberValue);
            this.updateNumberBankDisplay();
            this.numberInput.value = ''; // Clear input
        }
    },

    // Update the display of the number bank
    updateNumberBankDisplay() {
        this.numberBankOutput.textContent = this.state.numberBank.join(', ');
    },

    // Sort the first number in the bank
    sortOneNumber(event) {
        event.preventDefault();
        
        if (this.state.numberBank.length > 0) {
            const number = this.state.numberBank.shift();
            this.categorizeNumber(number);
            this.updateDisplay();
        }
    },

    // Sort all numbers in the bank
    sortAllNumbers(event) {
        event.preventDefault();
        
        while (this.state.numberBank.length > 0) {
            const number = this.state.numberBank.shift();
            this.categorizeNumber(number);
        }
        this.updateDisplay();
    },

    // Categorize a number as odd or even
    categorizeNumber(number) {
        if (number % 2 === 0) {
            this.state.sortedEvens.push(number);
        } else {
            this.state.sortedOdds.push(number);
        }
    },

    // Update all displays after sorting
    updateDisplay() {
        this.updateNumberBankDisplay();
        this.oddsOutput.textContent = this.state.sortedOdds.join(', ');
        this.evensOutput.textContent = this.state.sortedEvens.join(', ');
    }
};

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => app.init());