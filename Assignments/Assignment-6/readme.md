# Trip Eazy Travel Booking App

This project is a demonstration of advanced CSS and SASS/SCSS features, focusing on responsive design with CSS Grid and Flexbox, alongside a rich implementation of SASS/SCSS. The website consists of a Search Page and a Booking Page, each designed to showcase specific layout and styling techniques.

## SCSS Features and Implementation

### Variables and Custom Properties

- **Usage**: Define and centralize reusable values like color schemes, font stacks, and layout margins, ensuring consistency and ease of updates.
- **Implementation**: Applied throughout the `abstracts/_variables.scss` file to set global styles that are accessed across the entire project.

### Mixins

- **Usage**: Create reusable and parameterized blocks of code for themes, media queries, and common patterns like flexbox and grid settings.
- **Implementation**: Found in `abstracts/_mixins.scss`, mixins are used for responsive breakpoints, flex and grid layouts, enhancing the DRY principle in the styling process.

### Functions

- **Usage**: Perform operations and calculations, primarily for responsive typography and spacing.
- **Implementation**: Utilized in `abstracts/_functions.scss` for converting pixel values to rem units, facilitating accessible design.

### Placeholder Selectors

- **Usage**: Define a common set of styles that can be extended across multiple selectors, reducing redundancy.
- **Implementation**: Used in `_placeholders.scss` for common patterns such as button styles and form elements, which are then extended in `components/` and `layout/`.

### Nesting

- **Usage**: Nest selectors within one another to mirror the HTML structure, improving readability and organization.
- **Implementation**: Extensively used across the project, particularly in component and layout SCSS files, to scope styles and manage specificity efficiently.

## Additional SCSS Features

### Conditional Logic (@if, @else)

- **Usage**: Apply different styles based on conditions, such as theme preferences or feature supports.
- **Implementation**: Incorporated in mixins for theme switching and feature checks, allowing dynamic styling based on user or device attributes.

### Loops (@for, @each, @while)

- **Usage**: Generate repetitive CSS blocks or create variations of a component or utility classes, such as a series of margin or padding utilities.
- **Implementation**: Loops are used in `abstracts/_mixins.scss` and `base/_utilities.scss` for creating responsive utility classes and iterating over colors or sizes defined in variables.

### @import

- **Usage**: Split SCSS into smaller, more manageable files, then import them into a main file to compile a single CSS output.
- **Implementation**: The `main.scss` file serves as the entry point, importing all other SCSS files from `abstracts`, `base`, `components`, `layout`, and `pages`, streamlining project organization and compilation.

### @extend

- **Usage**: Share sets of CSS properties from one selector to another without duplicating code, promoting the DRY principle.
- **Implementation**: Applied in `components/_button.scss` and `layout/_flexbox.scss` to extend common styles for buttons and flex containers, ensuring consistency and reducing the amount of generated CSS.

### Responsiveness with SCSS

- **Usage**: Achieve fluid and adaptable designs across different screen sizes and devices using mixins, conditionals, and loops.
- **Implementation**: Responsive design is woven into the fabric of the project through media query mixins that adapt layouts, typography, and components based on viewport width, orientation, and other factors.

## UI Design

The UI is designed to be rich and user-friendly, with attention to responsiveness and accessibility. The theme toggle feature allows users to switch between light and dark modes, enhancing usability and personalization.

## How to Run

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open `SearchPage.html` in your browser to start exploring the Search Page.
4. Use the navigation or the search functionality to proceed to the Booking Page.

