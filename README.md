# goit-advancedjs-hw-05
Woolf University. Neoversity GoIT. Advanced JS. Homework #5

## TypeScript Project Setup

### Project Structure
```
├── src/           # TypeScript source files
├── dist/          # Compiled JavaScript files
├── tsconfig.json  # TypeScript configuration
├── package.json   # npm configuration
├── index.html     # Demo page for browser
├── styles.css     # CSS styles
└── .gitignore     # Git ignore file
```

### Install Dependencies
```bash
npm install
```

### Available Commands

- `npm run build` - Compile TypeScript to JavaScript
- `npm run build:watch` - Compile with file watching
- `npm run start` - Run compiled code
- `npm run dev` - Run TypeScript code directly via ts-node
- `npm run clean` - Clean dist folder

### tsconfig.json Configuration

The project is configured with the following parameters:

- **rootDir**: `./src` - source TypeScript files folder
- **outDir**: `./dist` - compiled JavaScript files folder  
- **sourceMap**: `true` - generate source maps for browser debugging
- **declarationMap**: `true` - generate source maps for TypeScript declarations
- **strict**: `true` - enable all strict TypeScript checks

### Browser Debugging

1. Open `index.html` in browser
2. Open Developer Tools (F12)
3. Go to Sources tab
4. Thanks to source maps, you can see and debug original TypeScript code

### Simple Counter Example

```typescript
class Counter {
  private count: number = 0;

  increment(): void {
    this.count++;
    this.updateDisplay();
  }

  decrement(): void {
    this.count--;
    this.updateDisplay();
  }

  reset(): void {
    this.count = 0;
    this.updateDisplay();
  }

  getCurrentValue(): number {
    return this.count;
  }

  private updateDisplay(): void {
    console.log(`Current count: ${this.count}`);
  }
}
```
