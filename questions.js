const questionsData = [
  {
      id: 1,
      question: "How do you handle async API calls in JS?",
      options: [
          { text: "Just use normal callbacks and ignore catch blocks", score: 0 },
          { text: "Use async/await with proper try/catch blocks", score: 2 },
          { text: "Use .then() but sometimes miss error handling", score: 1 }
      ]
  },
  {
      id: 2,
      question: "Best way to manage global state in a vanilla app?",
      options: [
          { text: "Store everything in window object globally", score: 0 },
          { text: "Pass props down manually everywhere", score: 1 },
          { text: "Use modular state pattern with clear getters/setters", score: 2 }
      ]
  },
  {
      id: 3,
      question: "How do you structure your CSS files?",
      options: [
          { text: "Put everything in one giant style.css file with !important", score: 0 },
          { text: "Use utility classes or modular CSS approach", score: 2 },
          { text: "Write inline styles on every element", score: 1 }
      ]
  },
  {
      id: 4,
      question: "How do you avoid performance lag during DOM updates?",
      options: [
          { text: "Re-render the whole body using innerHTML constantly", score: 0 },
          { text: "Cache DOM selectors and minimize reflows", score: 2 },
          { text: "Query elements inside loops", score: 1 }
      ]
  },
  {
      id: 5,
      question: "How do you handle user input security?",
      options: [
          { text: "Trust all user input blindly without checking", score: 0 },
          { text: "Sanitize and validate inputs on client side", score: 2 },
          { text: "Use simple HTML required tags only", score: 1 }
      ]
  },
  {
      id: 6,
      question: "Where should helper functions go?",
      options: [
          { text: "Put all helper functions in a utils folder", score: 2 },
          { text: "Copy paste them in every file", score: 0 },
          { text: "Keep them at the bottom of main script file", score: 1 }
      ]
  },
  {
      id: 7,
      question: "How do you debug code issues?",
      options: [
          { text: "Leave tons of console.logs in production", score: 1 },
          { text: "Remove all logs and guess when bugs happen", score: 0 },
          { text: "Use proper debugging tools and clean console logs", score: 2 }
      ]
  },
  {
      id: 8,
      question: "How do you manage git commits?",
      options: [
          { text: "Commit everything with message 'fixes' once a week", score: 0 },
          { text: "Use clear commit messages and feature branches", score: 2 },
          { text: "Commit occasionally with random names", score: 1 }
      ]
  },
  {
      id: 9,
      question: "How do you make layouts responsive?",
      options: [
          { text: "Use fixed pixel widths for desktop only", score: 0 },
          { text: "Use flexbox, grid, and media queries", score: 2 },
          { text: "Use percentages everywhere blindly", score: 1 }
      ]
  },
  {
      id: 10,
      question: "How do you test your code?",
      options: [
          { text: "Test directly in production environment", score: 0 },
          { text: "Check edge cases and test locally first", score: 2 },
          { text: "Test only on one browser", score: 1 }
      ]
  },
  {
      id: 11,
      question: "How do you save data locally in browser?",
      options: [
          { text: "Save passwords in plaintext localStorage", score: 0 },
          { text: "Store non-sensitive UI prefs using JSON.stringify", score: 2 },
          { text: "Use localStorage without checking if it's enabled", score: 1 }
      ]
  },
  {
      id: 12,
      question: "How to handle large lists in DOM?",
      options: [
          { text: "Render 5000 items at once", score: 0 },
          { text: "Use pagination or virtual rendering", score: 2 },
          { text: "Load 200 items randomly", score: 1 }
      ]
  },
  {
      id: 13,
      question: "How to prevent memory leaks with timers?",
      options: [
          { text: "Never clear intervals", score: 0 },
          { text: "Clear intervals/timeouts when component/page unloads", score: 2 },
          { text: "Ignore it unless page crashes", score: 1 }
      ]
  },
  {
      id: 14,
      question: "How long should functions be?",
      options: [
          { text: "Write massive 500 line functions doing everything", score: 0 },
          { text: "Keep functions small and single-purpose", score: 2 },
          { text: "Medium length functions", score: 1 }
      ]
  },
  {
      id: 15,
      question: "How to handle missing images or broken links?",
      options: [
          { text: "Ignore broken images", score: 0 },
          { text: "Add fallback states or onerror handlers", score: 2 },
          { text: "Remove image tags completely", score: 1 }
      ]
  },
  {
      id: 16,
      question: "Where to keep API keys?",
      options: [
          { text: "Hardcode them directly in public frontend JS files", score: 0 },
          { text: "Use environment variables or backend proxies", score: 2 },
          { text: "Put them in a config file committed to git", score: 1 }
      ]
  },
  {
      id: 17,
      question: "How to handle events on dynamic list items?",
      options: [
          { text: "Attach event listener to every single new item manually", score: 0 },
          { text: "Use event delegation on parent container", score: 2 },
          { text: "Re-bind all listeners on every update", score: 1 }
      ]
  },
  {
      id: 18,
      question: "How to handle slow internet connections?",
      options: [
          { text: "Show blank screen until data arrives", score: 0 },
          { text: "Show loading spinners or skeletons", score: 2 },
          { text: "Print 'loading' in console", score: 1 }
      ]
  },
  {
      id: 19,
      question: "Best CSS property to animate for performance?",
      options: [
          { text: "Animate width and height directly", score: 0 },
          { text: "Animate transform and opacity", score: 2 },
          { text: "Animate top and left pixels", score: 1 }
      ]
  },
  {
      id: 20,
      question: "How to handle JSON parsing safely?",
      options: [
          { text: "Call JSON.parse without checking", score: 0 },
          { text: "Wrap JSON.parse in try/catch block", score: 2 },
          { text: "Assume data is always valid JSON", score: 1 }
      ]
  },
  {
      id: 21,
      question: "How to prevent spam clicking on submit buttons?",
      options: [
          { text: "Let user spam click and send duplicate requests", score: 0 },
          { text: "Disable button and show loading state on click", score: 2 },
          { text: "Alert user not to click twice", score: 1 }
      ]
  },
  {
      id: 22,
      question: "How to structure variable names?",
      options: [
          { text: "Use single letters like a, b, c everywhere", score: 0 },
          { text: "Use clear descriptive camelCase names", score: 2 },
          { text: "Use random words", score: 1 }
      ]
  },
  {
      id: 23,
      question: "How to handle browser console errors?",
      options: [
          { text: "Ignore red errors in console", score: 0 },
          { text: "Fix warnings and errors proactively", score: 2 },
          { text: "Hide console output", score: 1 }
      ]
  },
  {
      id: 24,
      question: "How to handle form validation UX?",
      options: [
          { text: "Only validate after final submit with generic alerts", score: 0 },
          { text: "Provide helpful real-time inline validation", score: 2 },
          { text: "Don't validate inputs", score: 1 }
      ]
  },
  {
      id: 25,
      question: "How to keep code clean across teammates?",
      options: [
          { text: "Everyone format code however they want", score: 0 },
          { text: "Use linters like ESLint and Prettier", score: 2 },
          { text: "Tell team verbally to write clean code", score: 1 }
      ]
  },
  {
      id: 26,
      question: "How to avoid typing lag in search bars?",
      options: [
          { text: "Search on every single keystroke instantly", score: 0 },
          { text: "Use debouncing function for search input", score: 2 },
          { text: "Require pressing enter to search", score: 1 }
      ]
  },
  {
      id: 27,
      question: "How to handle browser window resizing events?",
      options: [
          { text: "Bind heavy recalculations directly to resize listener", score: 0 },
          { text: "Throttle resize listener calls", score: 2 },
          { text: "Don't handle resize", score: 1 }
      ]
  },
  {
      id: 28,
      question: "How to organize project folder structure?",
      options: [
          { text: "Dump 50 files in one root folder", score: 0 },
          { text: "Group by components, services, and utils", score: 2 },
          { text: "Make 20 nested subfolders for simple app", score: 1 }
      ]
  },
  {
      id: 29,
      question: "How to write a useful README file?",
      options: [
          { text: "Leave README blank", score: 0 },
          { text: "Include setup steps, run commands, and overview", score: 2 },
          { text: "Write just project title", score: 1 }
      ]
  },
  {
      id: 30,
      question: "How to handle outdated npm packages?",
      options: [
          { text: "Never update packages ever", score: 0 },
          { text: "Regularly audit and update dependencies safely", score: 2 },
          { text: "Update all packages blindly and break app", score: 1 }
      ]
  },
  {
      id: 31,
      question: "How to handle unexpected null pointer errors?",
      options: [
          { text: "Let app crash with TypeError", score: 0 },
          { text: "Use optional chaining (?.) and default fallbacks", score: 2 },
          { text: "Wrap everything in massive try-catch", score: 1 }
      ]
  },
  {
      id: 32,
      question: "How to handle CSS specificity wars?",
      options: [
          { text: "Add more !important rules", score: 0 },
          { text: "Keep selectors flat and use simple classes", score: 2 },
          { text: "Nest selectors 10 levels deep", score: 1 }
      ]
  },
  {
      id: 33,
      question: "How to handle browser tab switching performance?",
      options: [
          { text: "Keep heavy polling intervals running in background", score: 0 },
          { text: "Pause polling or animations when tab is hidden", score: 2 },
          { text: "Ignore background state", score: 1 }
      ]
  },
  {
      id: 34,
      question: "How to share code between functions?",
      options: [
          { text: "Duplicate the code block everywhere", score: 0 },
          { text: "Extract into a reusable helper function", score: 2 },
          { text: "Write global variables", score: 1 }
      ]
  },
  {
      id: 35,
      question: "How to pick third-party libraries?",
      options: [
          { text: "Install heavy library for a tiny math function", score: 0 },
          { text: "Check bundle size and utility before installing", score: 2 },
          { text: "Install top 50 random libraries", score: 1 }
      ]
  },
  {
      id: 36,
      question: "How to handle CSS colors?",
      options: [
          { text: "Hardcode random hex codes everywhere", score: 0 },
          { text: "Use CSS variables or theme tokens", score: 2 },
          { text: "Use rgb values randomly", score: 1 }
      ]
  },
  {
      id: 37,
      question: "How to test async code execution?",
      options: [
          { text: "Assume it works without checking timing", score: 0 },
          { text: "Log steps or use debugger breakpoints", score: 2 },
          { text: "Add random setTimeouts everywhere", score: 1 }
      ]
  },
  {
      id: 38,
      question: "How to handle browser back button in SPAs?",
      options: [
          { text: "Let back button break the app view", score: 0 },
          { text: "Handle history state properly", score: 2 },
          { text: "Disable history navigation", score: 1 }
      ]
  },
  {
      id: 39,
      question: "How to manage comments in code?",
      options: [
          { text: "Leave commented-out dead code blocks everywhere", score: 1 },
          { text: "Write clear comments explaining 'why', not 'what'", score: 2 },
          { text: "No comments at all", score: 0 }
      ]
  },
  {
      id: 40,
      question: "How to deploy frontend apps efficiently?",
      options: [
          { text: "Upload raw messy files manually", score: 0 },
          { text: "Build production bundle with minification and deploy", score: 2 },
          { text: "Run dev server in production", score: 1 }
      ]
  }
];