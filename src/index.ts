// Simple TypeScript Counter Example
class Counter {
  private count: number = 0;

  constructor() {
    console.log('Counter initialized');
    this.updateDisplay();
  }

  increment(): void {
    this.count++;
    console.log(`Incremented to: ${this.count}`);
    this.updateDisplay();
  }

  decrement(): void {
    this.count--;
    console.log(`Decremented to: ${this.count}`);
    this.updateDisplay();
  }

  reset(): void {
    this.count = 0;
    console.log('Counter reset to 0');
    this.updateDisplay();
  }

  getCurrentValue(): number {
    return this.count;
  }

  private updateDisplay(): void {
    // Check if we're in a browser environment
    if (typeof document !== 'undefined') {
      const displayElement = document.getElementById('counter-display');
      if (displayElement) {
        displayElement.textContent = this.count.toString();
      }
    }
  }
}

// Demo usage - will be used in HTML
const counter = new Counter();

// Make counter available globally for HTML buttons (browser only)
if (typeof window !== 'undefined') {
  (window as any).counter = counter;
}

// Export for potential module usage
export { Counter };