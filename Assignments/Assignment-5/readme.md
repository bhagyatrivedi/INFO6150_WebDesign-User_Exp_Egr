# Trip Eazy Travel Booking App

This project is a demonstration of advanced CSS and SASS/SCSS features, focusing on responsive design with CSS Grid and Flexbox, alongside a rich implementation of SASS/SCSS. The website consists of a Search Page and a Booking Page, each designed to showcase specific layout and styling techniques.

## Features

- **CSS Grid Layouts**: Utilized in the `.results-container` to display hotel cards and in the `.offers-grid` for special offers.
- **Flexbox Layouts**: Implemented in the `.city-banner` for horizontal scrolling on the Search Page and in `.form-actions` for centering buttons within forms.
- **SASS/SCSS**:
  - **Variables**: Defined for colors, font stacks, and layout properties.
  - **Custom Properties**: CSS variables are set using SCSS variables for theming.
  - **Nesting**: SCSS nesting is used throughout for cleaner and more organized stylesheets.
  - **Interpolation**: Used within the `@mixin respond-to` for responsive design.
  - **Placeholder Selectors**: A `%button-base` placeholder is used for button styles.
  - **Mixins**: Several mixins are created for reusable styles, such as `@mixin flex-center` and `@mixin theme`.
  - **Functions**: A `dynamic-spacing` function is utilized to calculate margins and paddings.

## Additional SASS Features

- **Media Query Mixins**: Simplifies the use of media queries for responsiveness.
- **Loops**: Used to generate utility classes for margins, padding, and text colors.
- **Conditionals**: Implemented within mixins to apply styles based on themes (dark and light themes).

## Project Structure

The project's SASS/SCSS files are organized into multiple folders based on UI features, common elements, or themes:

- `abstracts/`: Contains `_variables.scss`, `_mixins.scss`, and `_functions.scss` for global definitions.
- `base/`: Includes base styles such as `_reset.scss`, `_typography.scss`, and `_utilities.scss`.
- `components/`: Houses SCSS files for specific components like `_button.scss` and `_form.scss`.
- `layout/`: Contains SCSS for layout-related styling, including `_header.scss`, `_footer.scss`, and `_grid.scss`.
- `pages/`: SCSS files specific to the Search Page and Booking Page are located here.

## UI Design

The UI is designed to be rich and user-friendly, with attention to responsiveness and accessibility. The theme toggle feature allows users to switch between light and dark modes, enhancing usability and personalization.

## How to Run

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open `SearchPage.html` in your browser to start exploring the Search Page.
4. Use the navigation or the search functionality to proceed to the Booking Page.

