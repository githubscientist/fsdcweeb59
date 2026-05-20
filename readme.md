# CSS: Cascading Style Sheets

- CSS is a stylesheet language used to describe the presentation of a document written in HTML.
- It allows you to control the layout, colors, fonts, and overall appearance of a web page.
- CSS works by associating rules with HTML elements. These rules govern how the content of specified elements should be displayed.

## Three ways to add CSS to HTML:

1. Inline CSS: Using the `style` attribute within HTML elements.
   ```html
   <p style="color: blue; font-size: 20px;">This is an inline styled paragraph.</p>
   ```

2. Internal CSS: Placing CSS rules within a `<style>` tag in the `<head>` section of the HTML document.
   ```html
   <head>
     <style>
       p {
         color: red;
         font-size: 18px;
       }
     </style>
   </head>
   <body>
     <p>This is an internally styled paragraph.</p>
   </body>
   ```
3. External CSS: Linking to an external CSS file using the `<link>` tag in the `<head>` section.
   ```html
   <head>
     <link rel="stylesheet" type="text/css" href="styles.css">
   </head>
   <body>
     <p>This is a paragraph styled with an external CSS file.</p>
   </body>
   ```

## CSS Selectors

1. Element Selector: Selects all elements of a specific type.
   ```css
   p {
     color: green;
   }
   ```