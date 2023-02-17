/**
 * Shareable minimal ESLint config supporting both TypeScript (for source code,
 * tests, and scripts) and plain JavaScript (mostly for configuration files).
 */
module.exports = {
  extends: ["airbnb", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "jest"],
  rules: {
    // Rule: Don't use @ts-ignore.
    // Reasoning: We shouldn't use this, but we are forced to sometimes.
    "@typescript-eslint/ban-ts-comment": 1,

    // Rule: All functions must specify a return type.
    // Reasoning: Why have typescript if you're not going to use it?!
    // Rule: Allow allowTypedFunctionExpressions
    // Reasoning: Why not?
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowTypedFunctionExpressions: true,
      },
    ],

    // Reasoning: Disable this rule which would control indentation; allow eslint to take priority.
    // Result: Indent 2 spaces.
    "@typescript-eslint/indent": 0,

    // Reasoning:
    //  1. Disable this rule which would control what character goes at the end of a line inside an interface; allow eslint to take priority.
    //  2. Having commas at the end of each item in a list makes reordering, adding, and removing items simpler, and it makes git commit diffs cleaner!
    // Result: Each line of an interface ends with no character (rather than a semicolon or comma).
    "@typescript-eslint/member-delimiter-style": 0,

    // Reasoning: We do this all the time and it it's never been a problem.
    // Result: Defining empty arrow functions is acceptable.
    "@typescript-eslint/no-empty-function": 0,

    // Reasoning:
    //  1. no-shadow creates false-positives for typescript code; @typescript-eslint/no-shadow must be used instead. https://stackoverflow.com/questions/63961803/eslint-says-all-enums-in-typescript-app-are-already-declared-in-the-upper-scope
    // Result: The no-shadow rule will behave as normal.
    "no-shadow": 0,
    "@typescript-eslint/no-shadow": 1,

    // Reasoning:
    //  1. no-use-before-define creates false-positives for typescript code; @typescript-eslint/no-use-before-define must be used instead. https://github.com/typescript-eslint/typescript-eslint/issues/2540
    // Result: The no-use-before-define rule will behave as normal.
    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": 1,

    // Reasoning:
    //  1. Disable this rule because it creates many false positives in, for example, array destructuring and function arguments; eslint rules cover this area without issue.
    // Result: eslint is the sole check for this area, without false positives.
    "@typescript-eslint/no-unused-vars": 0,

    // Rule: End each line of a mltiline array, object, import, or export must end with a comma.
    // Reasoning: Simplified editing of code. Less noise in commits.
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        exports: "always-multiline",
        functions: "never",
        imports: "always-multiline",
        objects: "always-multiline",
      },
    ],

    // Result: File extensions for the listed files need not be defined.
    // Reasoning: Webpack handles this automatically.
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],

    // Result: Test files can import dependencies from devDependencies.
    // Reasoning: Dependencies of test files aren't needed for a production build.
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/setup-tests.*", "**/*.test.*", "**/*.spec.*"] },
    ],

    // Result: A file can export a single item without that item having to be a default export.
    // Reasoning: Unnecessary.
    "import/prefer-default-export": 0,

    // Rule: Prettier changes are eslint errors.
    // Reasoning: If prettier says it's wrong, it's wrong. If it's not wrong, we should change the prettier rules.
    "prettier/prettier": 2,

    // Rule: Any file with jsx code must be a '.jsx' or '.tsx' file.
    // Reasoning: Not perfect, but helps to elucidate which files are React components.
    "react/jsx-filename-extension": [2, { extensions: [".jsx", ".tsx"] }],

    // Rule: Don't do something like {...rest} with props.
    // Reasoning: Just be aware of the consequences of {...rest}. You have an
    //  increased likelyhood of passing down props which will result in some
    //  tyep of React error.
    "react/jsx-props-no-spreading": 0,

    // Rule: Default prop type definitions must be sorted alphabetically.
    // Reasoning: Consistency.
    "react/jsx-sort-default-props": 2,

    // Rule: Props must be sorted alphabetically.
    // Reasoning: Consistency.
    "react/jsx-sort-props": 2,

    // Rule: Ensure that any non-required prop types of a component has a corresponding defaultProps value.
    // Reasoning: Typescript has our back here. Disabling this rule allows us to type React component functions like any other.
    "react/require-default-props": 0,

    // Rule: Function inputs for React components must be explicitly defined.
    // Reasoning: Typescript has our back here. Disabling this rule allows us to type React component functions like any other.
    "react/prop-types": 0,

    // Rule: Component methods must be sorted alphabetically.
    // Reasoning: Consistency.
    "react/sort-comp": 2,

    // Rule: Prop type definitions must be sorted alphabetically.
    // Reasoning: Consistency.
    "react/sort-prop-types": 2,

    // Rule: Lines must not end with a semicolon.
    // Reasoning: Conciceness.
    semi: ["error", "never"],
    // Rule: No tests should be left focused
    // Reasoning: it will cause we miss other tests in CI
    "jest/no-focused-tests": "error",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
}
