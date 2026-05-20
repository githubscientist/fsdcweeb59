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
2. Class Selector: Selects elements with a specific class attribute.
   ```css
   .highlight {
     background-color: yellow;
   }
   ```
3. ID Selector: Selects a single element with a specific id attribute.
   ```css   
    #main-header {
      font-size: 24px;
    }
    ```
4. Attribute Selector: Selects elements based on an attribute or attribute value.
   ```css
    a[target="_blank"] {  
      color: orange;  
    }
    ```
5. Descendant Selector: Selects elements that are descendants of a specified element.
   ```css
    div p {
      color: purple;
    }
    ```

6. Child Selector: Selects elements that are direct children of a specified element.
   ```css
    ul > li {
      list-style-type: square;
    }
    ```
7. Adjacent Sibling Selector: Selects an element that is immediately preceded by a specified element.
   ```css
    h1 + p {
      margin-top: 0;
    }
    ```
8. General Sibling Selector: Selects all elements that are siblings of a specified element.
   ```css
    h2 ~ p {
      color: gray;
    } 
    ```

## Box Model

- There are four components of the CSS box model: content, padding, border, and margin.
- The content is the innermost part of the box where text and images appear.
- Padding is the space between the content and the border.
- The border is the line that surrounds the padding and content.
- Margin is the outermost layer that creates space between the element and other elements on the page.
- This is called as Box Model because every element on a web page is represented as a rectangular box, and the box model describes how these boxes are structured and how they interact with each other.