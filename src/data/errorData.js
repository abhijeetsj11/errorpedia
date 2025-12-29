// Sample error data for Errorpedia
export const errorData = [
  {
    id: 1,
    category: "JavaScript",
    title: "TypeError: Cannot read property 'map' of undefined",
    description: "Occurs when you try to use map() on an undefined variable.",
    fix: "Initialize the variable as an empty array before using map().",
    level: "Beginner"
  },
  {
    id: 2,
    category: "JavaScript",
    title: "ReferenceError: variable is not defined",
    description: "A variable is used without being declared.",
    fix: "Declare the variable using let, const, or var.",
    level: "Beginner"
  },
  {
    id: 3,
    category: "JavaScript",
    title: "TypeError: Assignment to constant variable",
    description: "Trying to reassign a variable declared with const.",
    fix: "Use let instead of const if reassignment is needed.",
    level: "Beginner"
  },
  {
    id: 4,
    category: "JavaScript",
    title: "Uncaught SyntaxError: Unexpected token",
    description: "Syntax mistake such as missing bracket or comma.",
    fix: "Check for missing or extra symbols in code.",
    level: "Beginner"
  },
  {
    id: 5,
    category: "JavaScript",
    title: "NaN returned",
    description: "Occurs when an invalid mathematical operation happens.",
    fix: "Ensure both operands are valid numbers.",
    level: "Beginner"
  },
  {
    id: 6,
    category: "JavaScript",
    title: "Cannot read property 'length' of undefined",
    description: "Trying to access length of an undefined variable.",
    fix: "Check variable before accessing length.",
    level: "Beginner"
  },
  {
    id: 7,
    category: "JavaScript",
    title: "Unexpected end of input",
    description: "Missing closing bracket or parenthesis.",
    fix: "Ensure all brackets and braces are closed.",
    level: "Beginner"
  },
  {
    id: 8,
    category: "JavaScript",
    title: "Maximum call stack size exceeded",
    description: "Occurs due to infinite recursion.",
    fix: "Add proper exit condition in recursive functions.",
    level: "Intermediate"
  },
  {
    id: 9,
    category: "JavaScript",
    title: "Uncaught TypeError: undefined is not a function",
    description: "Calling a function that does not exist.",
    fix: "Verify function name and definition.",
    level: "Beginner"
  },
  {
    id: 10,
    category: "JavaScript",
    title: "Cannot set property of undefined",
    description: "Trying to assign a value to an undefined object.",
    fix: "Initialize the object before setting values.",
    level: "Beginner"
  },
  {
    id: 11,
    category: "JavaScript",
    title: "Unexpected token '<'",
    description: "Usually caused by wrong file path or HTML returned instead of JS.",
    fix: "Check script source or API response.",
    level: "Intermediate"
  },
  {
    id: 12,
    category: "JavaScript",
    title: "Promise is not defined",
    description: "Using Promise in unsupported environment.",
    fix: "Use modern browser or polyfill.",
    level: "Intermediate"
  },
  {
    id: 13,
    category: "JavaScript",
    title: "JSON.parse error",
    description: "Invalid JSON format.",
    fix: "Validate JSON structure before parsing.",
    level: "Beginner"
  },
  {
    id: 14,
    category: "JavaScript",
    title: "Unexpected identifier",
    description: "Syntax error caused by missing operator or keyword.",
    fix: "Check syntax near the reported line.",
    level: "Beginner"
  },
  {
    id: 15,
    category: "JavaScript",
    title: "Cannot read property 'push' of undefined",
    description: "Trying to push into an undefined array.",
    fix: "Initialize array before pushing.",
    level: "Beginner"
  },
  {
    id: 16,
    category: "JavaScript",
    title: "Assignment to read-only property",
    description: "Trying to modify a read-only object property.",
    fix: "Check object immutability.",
    level: "Intermediate"
  },
  {
    id: 17,
    category: "JavaScript",
    title: "Event is undefined",
    description: "Event object not passed to function.",
    fix: "Pass event parameter properly.",
    level: "Beginner"
  },
  {
    id: 18,
    category: "JavaScript",
    title: "Unexpected string",
    description: "String not closed properly.",
    fix: "Check quotation marks.",
    level: "Beginner"
  },
  {
    id: 19,
    category: "JavaScript",
    title: "Cannot read property 'value' of null",
    description: "DOM element not found.",
    fix: "Ensure element exists before accessing it.",
    level: "Beginner"
  },
  {
    id: 20,
    category: "JavaScript",
    title: "forEach is not a function",
    description: "Called forEach on a non-array variable.",
    fix: "Ensure the variable is an array.",
    level: "Beginner"
  },
  {
    id: 21,
    category: "JavaScript",
    title: "Unexpected number",
    description: "Syntax issue near numeric value.",
    fix: "Check operators and commas.",
    level: "Beginner"
  },
  {
    id: 22,
    category: "JavaScript",
    title: "Cannot access before initialization",
    description: "Using let/const before declaration.",
    fix: "Move declaration above usage.",
    level: "Intermediate"
  },
  {
    id: 23,
    category: "JavaScript",
    title: "Invalid left-hand side in assignment",
    description: "Incorrect assignment expression.",
    fix: "Check assignment syntax.",
    level: "Intermediate"
  },
  {
    id: 24,
    category: "JavaScript",
    title: "Unexpected token export",
    description: "Using ES module syntax in unsupported environment.",
    fix: "Use module type or bundler.",
    level: "Intermediate"
  },
  {
    id: 25,
    category: "JavaScript",
    title: "Uncaught RangeError",
    description: "Number out of allowed range.",
    fix: "Validate number limits.",
    level: "Intermediate"
  },
  {
    id: 26,
    category: "React",
    title: "Too many re-renders",
    description: "State update is being called repeatedly inside the component.",
    fix: "Move state updates inside useEffect or event handlers.",
    level: "Intermediate"
  },
  {
    id: 27,
    category: "React",
    title: "Objects are not valid as a React child",
    description: "Trying to render an object directly in JSX.",
    fix: "Render object properties instead of the whole object.",
    level: "Beginner"
  },
  {
    id: 28,
    category: "React",
    title: "Each child in a list should have a unique key",
    description: "Missing key prop when rendering lists.",
    fix: "Add a unique key attribute to list items.",
    level: "Beginner"
  },
  {
    id: 29,
    category: "React",
    title: "useState is not defined",
    description: "useState hook not imported.",
    fix: "Import useState from React.",
    level: "Beginner"
  },
  {
    id: 30,
    category: "React",
    title: "Component is not defined",
    description: "Component not imported or misspelled.",
    fix: "Check component name and import path.",
    level: "Beginner"
  },
  {
    id: 31,
    category: "React",
    title: "Invalid hook call",
    description: "Hook used outside functional component.",
    fix: "Use hooks only inside React components.",
    level: "Intermediate"
  },
  {
    id: 32,
    category: "React",
    title: "State not updating",
    description: "State is mutated directly.",
    fix: "Use setState or spread operator to update state.",
    level: "Intermediate"
  },
  {
    id: 33,
    category: "React",
    title: "useEffect runs infinitely",
    description: "Missing or incorrect dependency array.",
    fix: "Provide correct dependencies to useEffect.",
    level: "Intermediate"
  },
  {
    id: 34,
    category: "React",
    title: "Cannot read property of undefined (props)",
    description: "Props not passed correctly.",
    fix: "Ensure props are passed from parent component.",
    level: "Beginner"
  },
  {
    id: 35,
    category: "React",
    title: "Component not re-rendering",
    description: "State update not triggering re-render.",
    fix: "Avoid mutating state directly.",
    level: "Intermediate"
  },
  {
    id: 36,
    category: "React",
    title: "JSX expressions must have one parent element",
    description: "Returning multiple elements without wrapper.",
    fix: "Wrap elements inside a div or React.Fragment.",
    level: "Beginner"
  },
  {
    id: 37,
    category: "React",
    title: "setState is not a function",
    description: "Using setState incorrectly in functional component.",
    fix: "Use useState instead of this.setState.",
    level: "Beginner"
  },
  {
    id: 38,
    category: "React",
    title: "Cannot update a component while rendering another",
    description: "State update happening during render.",
    fix: "Move update logic to useEffect.",
    level: "Intermediate"
  },
  {
    id: 39,
    category: "React",
    title: "Unhandled promise rejection",
    description: "Promise error not handled properly.",
    fix: "Use try/catch or .catch() for promises.",
    level: "Intermediate"
  },
  {
    id: 40,
    category: "React",
    title: "Warning: Failed prop type",
    description: "Incorrect prop type passed.",
    fix: "Ensure correct prop types are passed.",
    level: "Beginner"
  },
  {
    id: 41,
    category: "React",
    title: "Component not showing on UI",
    description: "Component not returned or rendered.",
    fix: "Ensure component is returned in JSX.",
    level: "Beginner"
  },
  {
    id: 42,
    category: "React",
    title: "useEffect cleanup not working",
    description: "Cleanup function not returned correctly.",
    fix: "Return cleanup function from useEffect.",
    level: "Intermediate"
  },
  {
    id: 43,
    category: "React",
    title: "State updates are asynchronous",
    description: "Expecting immediate state update.",
    fix: "Use useEffect to track updated state.",
    level: "Intermediate"
  },
  {
    id: 44,
    category: "React",
    title: "Cannot read property 'map' of undefined",
    description: "Data not loaded before rendering list.",
    fix: "Use conditional rendering or default state.",
    level: "Beginner"
  },
  {
    id: 45,
    category: "React",
    title: "React.StrictMode double rendering",
    description: "Component renders twice in development.",
    fix: "This is expected behavior in StrictMode.",
    level: "Beginner"
  },
  {
    id: 46,
    category: "React",
    title: "Props drilling issue",
    description: "Passing props through many components.",
    fix: "Use Context API.",
    level: "Intermediate"
  },
  {
    id: 47,
    category: "React",
    title: "Memory leak warning",
    description: "State updated after component unmount.",
    fix: "Cleanup async calls in useEffect.",
    level: "Intermediate"
  },
  {
    id: 48,
    category: "React",
    title: "Component re-rendering too often",
    description: "Unnecessary state updates.",
    fix: "Use React.memo or useCallback.",
    level: "Intermediate"
  },
  {
    id: 49,
    category: "React",
    title: "useRef value not updating UI",
    description: "useRef does not cause re-render.",
    fix: "Use useState instead if UI needs update.",
    level: "Intermediate"
  },
  {
    id: 50,
    category: "React",
    title: "Failed to compile",
    description: "Syntax or import error in code.",
    fix: "Check console for exact compile error.",
    level: "Beginner"
  },
  {
    id: 51,
    category: "CSS",
    title: "Flexbox not working",
    description: "Flex properties used without display:flex.",
    fix: "Add display:flex to the parent container.",
    level: "Beginner"
  },
  {
    id: 52,
    category: "CSS",
    title: "Center align not working",
    description: "Incorrect alignment properties used.",
    fix: "Use justify-content and align-items.",
    level: "Beginner"
  },
  {
    id: 53,
    category: "CSS",
    title: "z-index not working",
    description: "z-index used without position property.",
    fix: "Add position: relative or absolute.",
    level: "Beginner"
  },
  {
    id: 54,
    category: "CSS",
    title: "Height 100% not working",
    description: "Parent element has no defined height.",
    fix: "Set height on parent elements.",
    level: "Intermediate"
  },
  {
    id: 55,
    category: "CSS",
    title: "Overflow hidden not working",
    description: "Parent size not defined properly.",
    fix: "Set fixed width or height.",
    level: "Intermediate"
  },
  {
    id: 56,
    category: "CSS",
    title: "Image stretching",
    description: "Image aspect ratio distorted.",
    fix: "Use object-fit: cover.",
    level: "Beginner"
  },
  {
    id: 57,
    category: "CSS",
    title: "Margin collapsing issue",
    description: "Vertical margins collapsing unexpectedly.",
    fix: "Use padding or overflow:hidden.",
    level: "Intermediate"
  },
  {
    id: 58,
    category: "CSS",
    title: "Position absolute not working",
    description: "Parent element is not positioned.",
    fix: "Set parent position to relative.",
    level: "Beginner"
  },
  {
    id: 59,
    category: "CSS",
    title: "Font not applying",
    description: "Font not properly imported.",
    fix: "Check font import or link tag.",
    level: "Beginner"
  },
  {
    id: 60,
    category: "CSS",
    title: "Hover effect not working",
    description: "Incorrect selector or syntax.",
    fix: "Check :hover selector and element.",
    level: "Beginner"
  },
  {
    id: 61,
    category: "CSS",
    title: "Media query not applying",
    description: "Incorrect screen size condition.",
    fix: "Verify min-width and max-width values.",
    level: "Intermediate"
  },
  {
    id: 62,
    category: "CSS",
    title: "Background image not showing",
    description: "Incorrect image path.",
    fix: "Check relative path of image.",
    level: "Beginner"
  },
  {
    id: 63,
    category: "CSS",
    title: "Text overflow not working",
    description: "Missing overflow and white-space properties.",
    fix: "Use overflow: hidden and text-overflow: ellipsis.",
    level: "Intermediate"
  },
  {
    id: 64,
    category: "CSS",
    title: "Button click area too small",
    description: "Padding not applied properly.",
    fix: "Increase padding and display block.",
    level: "Beginner"
  },
  {
    id: 65,
    category: "CSS",
    title: "Grid layout not working",
    description: "display:grid not defined.",
    fix: "Add display:grid to container.",
    level: "Beginner"
  },
  {
    id: 66,
    category: "CSS",
    title: "Flex items overflowing",
    description: "Flex-wrap not enabled.",
    fix: "Use flex-wrap: wrap.",
    level: "Intermediate"
  },
  {
    id: 67,
    category: "CSS",
    title: "Text not centered vertically",
    description: "Incorrect alignment method used.",
    fix: "Use flexbox or line-height.",
    level: "Beginner"
  },
  {
    id: 68,
    category: "CSS",
    title: "Box-shadow not visible",
    description: "Shadow color too light or clipped.",
    fix: "Increase blur or spread value.",
    level: "Beginner"
  },
  {
    id: 69,
    category: "CSS",
    title: "CSS not loading",
    description: "Wrong file path or import issue.",
    fix: "Check CSS file path and import.",
    level: "Beginner"
  },
  {
    id: 70,
    category: "CSS",
    title: "Sticky position not working",
    description: "Parent overflow hidden.",
    fix: "Remove overflow from parent.",
    level: "Intermediate"
  },
  {
    id: 71,
    category: "CSS",
    title: "Border-radius not applied",
    description: "Element overflow hidden missing.",
    fix: "Add overflow: hidden.",
    level: "Beginner"
  },
  {
    id: 72,
    category: "CSS",
    title: "Font-size not changing",
    description: "CSS overridden by other styles.",
    fix: "Check CSS specificity.",
    level: "Beginner"
  },
  {
    id: 73,
    category: "CSS",
    title: "Alignment breaks on mobile",
    description: "No responsive styling applied.",
    fix: "Use media queries.",
    level: "Intermediate"
  },
  {
    id: 74,
    category: "CSS",
    title: "Line-height too large",
    description: "Incorrect line-height value.",
    fix: "Set appropriate line-height.",
    level: "Beginner"
  },
  {
    id: 75,
    category: "CSS",
    title: "Content overflowing container",
    description: "Container width too small.",
    fix: "Use overflow or adjust width.",
    level: "Beginner"
  },
  {
    id: 76,
    category: "Git",
    title: "fatal: not a git repository",
    description: "Git commands are run outside a Git repository.",
    fix: "Run git init or navigate to the correct folder.",
    level: "Beginner"
  },
  {
    id: 77,
    category: "Git",
    title: "fatal: repository not found",
    description: "Remote repository URL is incorrect or does not exist.",
    fix: "Check the repository URL on GitHub.",
    level: "Beginner"
  },
  {
    id: 78,
    category: "Git",
    title: "error: failed to push some refs",
    description: "Remote branch has changes not present locally.",
    fix: "Run git pull before pushing.",
    level: "Beginner"
  },
  {
    id: 79,
    category: "Git",
    title: "fatal: refusing to merge unrelated histories",
    description: "Trying to merge two unrelated repositories.",
    fix: "Use --allow-unrelated-histories flag.",
    level: "Intermediate"
  },
  {
    id: 80,
    category: "Git",
    title: "merge conflict",
    description: "Same lines edited in different branches.",
    fix: "Manually resolve conflicts and commit.",
    level: "Intermediate"
  },
  {
    id: 81,
    category: "Git",
    title: "error: pathspec did not match any file",
    description: "Incorrect file or branch name.",
    fix: "Check spelling and branch existence.",
    level: "Beginner"
  },
  {
    id: 82,
    category: "Git",
    title: "fatal: remote origin already exists",
    description: "Trying to add a remote that already exists.",
    fix: "Use git remote set-url or remove existing remote.",
    level: "Beginner"
  },
  {
    id: 83,
    category: "Git",
    title: "fatal: HEAD detached",
    description: "Checked out a commit instead of branch.",
    fix: "Checkout a branch using git checkout branch-name.",
    level: "Intermediate"
  },
  {
    id: 84,
    category: "Git",
    title: "permission denied (publickey)",
    description: "SSH key not configured correctly.",
    fix: "Add SSH key to GitHub account.",
    level: "Intermediate"
  },
  {
    id: 85,
    category: "Git",
    title: "fatal: unable to access repository",
    description: "Network or permission issue.",
    fix: "Check internet connection and repo access.",
    level: "Beginner"
  },
  {
    id: 86,
    category: "Git",
    title: "error: cannot pull with rebase",
    description: "Local changes conflict with remote.",
    fix: "Commit or stash changes before pulling.",
    level: "Intermediate"
  },
  {
    id: 87,
    category: "Git",
    title: "fatal: index file corrupt",
    description: "Git index file is corrupted.",
    fix: "Delete index file and reset.",
    level: "Intermediate"
  },
  {
    id: 88,
    category: "Git",
    title: "error: Your local changes would be overwritten",
    description: "Uncommitted changes block merge or pull.",
    fix: "Commit or stash changes.",
    level: "Beginner"
  },
  {
    id: 89,
    category: "Git",
    title: "fatal: branch already exists",
    description: "Trying to create an existing branch.",
    fix: "Use a different branch name.",
    level: "Beginner"
  },
  {
    id: 90,
    category: "Git",
    title: "error: src refspec does not match any",
    description: "Branch name does not exist locally.",
    fix: "Check branch name before pushing.",
    level: "Beginner"
  },
  {
    id: 91,
    category: "Git",
    title: "fatal: could not read from remote repository",
    description: "Access rights or repository issue.",
    fix: "Verify SSH keys and repo access.",
    level: "Intermediate"
  },
  {
    id: 92,
    category: "Git",
    title: "fatal: ambiguous argument",
    description: "Invalid commit or branch reference.",
    fix: "Check commit hash or branch name.",
    level: "Intermediate"
  },
  {
    id: 93,
    category: "Git",
    title: "error: failed to merge",
    description: "Merge conflict occurred.",
    fix: "Resolve conflicts and commit changes.",
    level: "Intermediate"
  },
  {
    id: 94,
    category: "Git",
    title: "fatal: bad object",
    description: "Corrupt object or invalid reference.",
    fix: "Run git fsck or reclone repo.",
    level: "Advanced"
  },
  {
    id: 95,
    category: "Git",
    title: "fatal: Not possible to fast-forward",
    description: "Branch histories have diverged.",
    fix: "Merge or rebase manually.",
    level: "Intermediate"
  },
  {
    id: 96,
    category: "Git",
    title: "error: cannot lock ref",
    description: "Another git process is running.",
    fix: "Close other git processes or delete lock file.",
    level: "Intermediate"
  },
  {
    id: 97,
    category: "Git",
    title: "fatal: shallow update not allowed",
    description: "Shallow clone restriction.",
    fix: "Fetch full history using --unshallow.",
    level: "Advanced"
  },
  {
    id: 98,
    category: "Git",
    title: "error: failed to push refs",
    description: "Push rejected due to conflicts.",
    fix: "Pull changes and retry push.",
    level: "Beginner"
  },
  {
    id: 99,
    category: "Git",
    title: "fatal: invalid refspec",
    description: "Incorrect refspec format.",
    fix: "Verify branch name syntax.",
    level: "Beginner"
  },
  {
    id: 100,
    category: "Git",
    title: "error: remote origin already exists",
    description: "Remote named origin already exists.",
    fix: "Use git remote set-url instead.",
    level: "Beginner"
  },
  {
    id: 101,
    category: "DOM",
    title: "Cannot read property 'innerHTML' of null",
    description: "Element is not found in the DOM.",
    fix: "Ensure the element exists before accessing it.",
    level: "Beginner"
  },
  {
    id: 102,
    category: "DOM",
    title: "document is not defined",
    description: "Trying to access DOM in non-browser environment.",
    fix: "Run code only in browser or after DOM loads.",
    level: "Beginner"
  },
  {
    id: 103,
    category: "DOM",
    title: "getElementById returns null",
    description: "Element ID does not exist or script runs too early.",
    fix: "Check ID or use DOMContentLoaded.",
    level: "Beginner"
  },
  {
    id: 104,
    category: "DOM",
    title: "addEventListener is not a function",
    description: "Trying to add listener to undefined element.",
    fix: "Check element reference before adding listener.",
    level: "Beginner"
  },
  {
    id: 105,
    category: "DOM",
    title: "Cannot read property 'classList' of null",
    description: "Target element not found in DOM.",
    fix: "Ensure element exists before accessing classList.",
    level: "Beginner"
  },
  {
    id: 106,
    category: "DOM",
    title: "querySelector returns null",
    description: "Incorrect selector or element not loaded.",
    fix: "Verify selector and DOM load timing.",
    level: "Beginner"
  },
  {
    id: 107,
    category: "DOM",
    title: "Event listener not firing",
    description: "Listener attached before DOM load.",
    fix: "Wrap code in DOMContentLoaded event.",
    level: "Beginner"
  },
  {
    id: 108,
    category: "DOM",
    title: "Cannot set property 'style' of undefined",
    description: "Element reference is undefined.",
    fix: "Check query selector result.",
    level: "Beginner"
  },
  {
    id: 109,
    category: "DOM",
    title: "removeChild failed",
    description: "Trying to remove a node that is not a child.",
    fix: "Ensure correct parent-child relationship.",
    level: "Intermediate"
  },
  {
    id: 110,
    category: "DOM",
    title: "appendChild is not a function",
    description: "Target is not a DOM element.",
    fix: "Ensure correct node type.",
    level: "Beginner"
  },
  {
    id: 111,
    category: "DOM",
    title: "Event object undefined",
    description: "Event not passed to handler.",
    fix: "Pass event parameter to function.",
    level: "Beginner"
  },
  {
    id: 112,
    category: "DOM",
    title: "Form submit reloads page",
    description: "Default form behavior not prevented.",
    fix: "Use event.preventDefault().",
    level: "Beginner"
  },
  {
    id: 113,
    category: "DOM",
    title: "Input value not updating",
    description: "Incorrect event handling.",
    fix: "Use event.target.value.",
    level: "Beginner"
  },
  {
    id: 114,
    category: "DOM",
    title: "Checkbox value always false",
    description: "Using value instead of checked.",
    fix: "Use event.target.checked.",
    level: "Beginner"
  },
  {
    id: 115,
    category: "DOM",
    title: "Click event fires multiple times",
    description: "Event listener attached multiple times.",
    fix: "Avoid adding listeners repeatedly.",
    level: "Intermediate"
  },
  {
    id: 116,
    category: "DOM",
    title: "innerHTML not updating",
    description: "Incorrect element reference.",
    fix: "Check selector and timing.",
    level: "Beginner"
  },
  {
    id: 117,
    category: "DOM",
    title: "Element not visible",
    description: "CSS display or visibility hidden.",
    fix: "Check display and visibility properties.",
    level: "Beginner"
  },
  {
    id: 118,
    category: "DOM",
    title: "Scroll event not working",
    description: "Listener attached to wrong element.",
    fix: "Attach event to correct container.",
    level: "Intermediate"
  },
  {
    id: 119,
    category: "DOM",
    title: "Focus not working",
    description: "Element not focusable.",
    fix: "Add tabindex or input element.",
    level: "Beginner"
  },
  {
    id: 120,
    category: "DOM",
    title: "Keydown event not firing",
    description: "Element not focused.",
    fix: "Ensure element is focused.",
    level: "Beginner"
  },
  {
    id: 121,
    category: "DOM",
    title: "Class not toggling",
    description: "Incorrect class name or selector.",
    fix: "Verify classList.toggle usage.",
    level: "Beginner"
  },
  {
    id: 122,
    category: "DOM",
    title: "Form input not clearing",
    description: "Value not reset after submit.",
    fix: "Manually reset input value.",
    level: "Beginner"
  },
  {
    id: 123,
    category: "DOM",
    title: "DOM not updating after change",
    description: "Using innerText incorrectly.",
    fix: "Use textContent or innerHTML.",
    level: "Beginner"
  },
  {
    id: 124,
    category: "DOM",
    title: "Button disabled not working",
    description: "Disabled attribute incorrectly set.",
    fix: "Use boolean true/false.",
    level: "Beginner"
  },
  {
    id: 125,
    category: "DOM",
    title: "Element overlapping unexpectedly",
    description: "CSS positioning issue.",
    fix: "Check z-index and positioning.",
    level: "Intermediate"
  },
  {
    id: 126,
    category: "API",
    title: "Failed to fetch",
    description: "API request failed due to network or CORS issue.",
    fix: "Check API URL, network connection, and CORS policy.",
    level: "Beginner"
  },
  {
    id: 127,
    category: "API",
    title: "404 Not Found",
    description: "Requested API endpoint does not exist.",
    fix: "Verify the endpoint URL.",
    level: "Beginner"
  },
  {
    id: 128,
    category: "API",
    title: "401 Unauthorized",
    description: "Authentication credentials missing or invalid.",
    fix: "Provide valid API key or token.",
    level: "Beginner"
  },
  {
    id: 129,
    category: "API",
    title: "403 Forbidden",
    description: "You do not have permission to access the resource.",
    fix: "Check API permissions.",
    level: "Intermediate"
  },
  {
    id: 130,
    category: "API",
    title: "500 Internal Server Error",
    description: "Server encountered an unexpected condition.",
    fix: "Check server logs or try again later.",
    level: "Beginner"
  },
  {
    id: 131,
    category: "API",
    title: "CORS policy blocked request",
    description: "Browser blocked request due to CORS policy.",
    fix: "Enable CORS on server or use proxy.",
    level: "Intermediate"
  },
  {
    id: 132,
    category: "API",
    title: "Unexpected token in JSON",
    description: "Response is not valid JSON.",
    fix: "Check API response format.",
    level: "Beginner"
  },
  {
    id: 133,
    category: "API",
    title: "NetworkError when attempting to fetch resource",
    description: "Network issue or incorrect API URL.",
    fix: "Check internet connection and API endpoint.",
    level: "Beginner"
  },
  {
    id: 134,
    category: "API",
    title: "Request timeout",
    description: "Server took too long to respond.",
    fix: "Increase timeout or optimize request.",
    level: "Intermediate"
  },
  {
    id: 135,
    category: "API",
    title: "Invalid API key",
    description: "Provided API key is incorrect or expired.",
    fix: "Generate a new API key.",
    level: "Beginner"
  },
  {
    id: 136,
    category: "API",
    title: "Rate limit exceeded",
    description: "Too many requests sent in short time.",
    fix: "Wait or upgrade API plan.",
    level: "Intermediate"
  },
  {
    id: 137,
    category: "API",
    title: "Method Not Allowed",
    description: "Incorrect HTTP method used.",
    fix: "Use correct HTTP method (GET, POST, etc).",
    level: "Beginner"
  },
  {
    id: 138,
    category: "API",
    title: "Request body is empty",
    description: "POST request missing body data.",
    fix: "Send valid request payload.",
    level: "Beginner"
  },
  {
    id: 139,
    category: "API",
    title: "Invalid JSON format",
    description: "Malformed JSON in request body.",
    fix: "Validate JSON before sending.",
    level: "Beginner"
  },
  {
    id: 140,
    category: "API",
    title: "Response undefined",
    description: "API response not handled properly.",
    fix: "Check response before accessing data.",
    level: "Beginner"
  },
  {
    id: 141,
    category: "API",
    title: "Axios network error",
    description: "Request blocked or server unreachable.",
    fix: "Check base URL and CORS.",
    level: "Intermediate"
  },
  {
    id: 142,
    category: "API",
    title: "Unexpected token '<'",
    description: "HTML returned instead of JSON.",
    fix: "Check API endpoint or response type.",
    level: "Beginner"
  },
  {
    id: 143,
    category: "API",
    title: "API response undefined",
    description: "Incorrect response handling.",
    fix: "Check response.data existence.",
    level: "Beginner"
  },
  {
    id: 144,
    category: "API",
    title: "Missing headers",
    description: "Required headers not sent.",
    fix: "Add Content-Type or Authorization headers.",
    level: "Beginner"
  },
  {
    id: 145,
    category: "API",
    title: "OPTIONS request failed",
    description: "CORS preflight failed.",
    fix: "Configure server to allow OPTIONS.",
    level: "Intermediate"
  },
  {
    id: 146,
    category: "API",
    title: "Payload too large",
    description: "Request body exceeds server limit.",
    fix: "Reduce payload size.",
    level: "Intermediate"
  },
  {
    id: 147,
    category: "API",
    title: "Unsupported media type",
    description: "Incorrect Content-Type header.",
    fix: "Set Content-Type to application/json.",
    level: "Beginner"
  },
  {
    id: 148,
    category: "API",
    title: "API not responding",
    description: "Server down or unreachable.",
    fix: "Check server status.",
    level: "Beginner"
  },
  {
    id: 149,
    category: "API",
    title: "Invalid query parameters",
    description: "Incorrect or missing query params.",
    fix: "Verify query parameters.",
    level: "Beginner"
  },
  {
    id: 150,
    category: "API",
    title: "Unexpected API response structure",
    description: "API response format changed.",
    fix: "Update parsing logic.",
    level: "Intermediate"
  },
  {
    id: 151,
    category: "Deployment",
    title: "Build failed",
    description: "Build process failed due to syntax or dependency error.",
    fix: "Check build logs and fix reported errors.",
    level: "Beginner"
  },
  {
    id: 152,
    category: "Deployment",
    title: "Page not found after deployment",
    description: "Incorrect routing configuration.",
    fix: "Check base path or routing setup.",
    level: "Beginner"
  },
  {
    id: 153,
    category: "Deployment",
    title: "Blank page after deploy",
    description: "JavaScript error or incorrect build path.",
    fix: "Check console and build output.",
    level: "Beginner"
  },
  {
    id: 154,
    category: "Deployment",
    title: "Environment variables not working",
    description: "Variables not added to hosting platform.",
    fix: "Add environment variables in deployment settings.",
    level: "Beginner"
  },
  {
    id: 155,
    category: "Deployment",
    title: "Build command not found",
    description: "Incorrect build command in settings.",
    fix: "Use correct build command like npm run build.",
    level: "Beginner"
  },
  {
    id: 156,
    category: "Deployment",
    title: "Dist folder not found",
    description: "Incorrect output directory specified.",
    fix: "Set correct output folder (dist or build).",
    level: "Beginner"
  },
  {
    id: 157,
    category: "Deployment",
    title: "404 error on refresh",
    description: "SPA routing not configured properly.",
    fix: "Enable fallback routing or rewrite rules.",
    level: "Intermediate"
  },
  {
    id: 158,
    category: "Deployment",
    title: "CORS error after deployment",
    description: "API blocked by CORS policy.",
    fix: "Configure server CORS or proxy.",
    level: "Intermediate"
  },
  {
    id: 159,
    category: "Deployment",
    title: "Build works locally but fails online",
    description: "Environment mismatch or missing dependency.",
    fix: "Check Node version and dependencies.",
    level: "Intermediate"
  },
  {
    id: 160,
    category: "Deployment",
    title: "Static files not loading",
    description: "Incorrect asset path.",
    fix: "Use relative paths or public folder.",
    level: "Beginner"
  },
  {
    id: 161,
    category: "Deployment",
    title: "Permission denied",
    description: "Deployment service lacks permissions.",
    fix: "Check repository access and permissions.",
    level: "Beginner"
  },
  {
    id: 162,
    category: "Deployment",
    title: "Deployment stuck in build stage",
    description: "Build process hanging.",
    fix: "Check build logs and optimize build.",
    level: "Intermediate"
  },
  {
    id: 163,
    category: "Deployment",
    title: "App crashes after deployment",
    description: "Runtime error in production build.",
    fix: "Check production logs.",
    level: "Intermediate"
  },
  {
    id: 164,
    category: "Deployment",
    title: "Wrong Node version",
    description: "Hosting uses different Node version.",
    fix: "Specify Node version in config.",
    level: "Intermediate"
  },
  {
    id: 165,
    category: "Deployment",
    title: "Environment variable undefined",
    description: "Missing variable in production.",
    fix: "Add variable in hosting dashboard.",
    level: "Beginner"
  },
  {
    id: 166,
    category: "Deployment",
    title: "Build timeout",
    description: "Build process takes too long.",
    fix: "Optimize dependencies or increase timeout.",
    level: "Intermediate"
  },
  {
    id: 167,
    category: "Deployment",
    title: "Wrong output directory",
    description: "Deployment pointing to wrong folder.",
    fix: "Set correct build output folder.",
    level: "Beginner"
  },
  {
    id: 168,
    category: "Deployment",
    title: "Assets not loading",
    description: "Incorrect public path.",
    fix: "Check asset path configuration.",
    level: "Beginner"
  },
  {
    id: 169,
    category: "Deployment",
    title: "SSL certificate error",
    description: "HTTPS certificate issue.",
    fix: "Reconfigure domain or SSL settings.",
    level: "Intermediate"
  },
  {
    id: 170,
    category: "Deployment",
    title: "DNS not resolving",
    description: "Domain not connected properly.",
    fix: "Check DNS records.",
    level: "Intermediate"
  },
  {
    id: 171,
    category: "Deployment",
    title: "Redirect loop",
    description: "Incorrect redirect rules.",
    fix: "Fix redirect configuration.",
    level: "Intermediate"
  },
  {
    id: 172,
    category: "Deployment",
    title: "Mixed content warning",
    description: "HTTP resources loaded on HTTPS site.",
    fix: "Use HTTPS for all resources.",
    level: "Beginner"
  },
  {
    id: 173,
    category: "Deployment",
    title: "Service unavailable",
    description: "Server temporarily down.",
    fix: "Wait or restart service.",
    level: "Beginner"
  },
  {
    id: 174,
    category: "Deployment",
    title: "Deployment succeeded but app not updating",
    description: "Cache issue.",
    fix: "Clear cache or redeploy.",
    level: "Beginner"
  },
  {
    id: 175,
    category: "Deployment",
    title: "Build succeeds but site shows 404",
    description: "Incorrect routing or output folder.",
    fix: "Check routing and build directory.",
    level: "Beginner"
  }

];

export const categories = [
  "JavaScript",
  "React",
  "CSS",
  "Git",
  "DOM",
  "API",
  "Deployment"
];


