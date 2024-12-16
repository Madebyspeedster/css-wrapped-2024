const mainContainer = document.querySelector(".container");
const navItems = document.querySelectorAll(".sidebar-nav li");
let activePage = null;
navItems.forEach((item, index) => {
  item.dataset.section = item
    .getAttribute("value")
    .toLowerCase()
    .replace(/\s+/g, "");
  item.addEventListener("click", () => {
    if (activePage) {
      activePage.classList.toggle("activeNavElement");
    }
    activePage = item;
    activePage.classList.toggle("activeNavElement");

    const section = item.dataset.section;
    mainContainer.innerHTML = navigation[section];
  });
});

const navigation = {
  fieldsizing: `
  <head>
   <link rel="stylesheet" href="styles/fieldsizing.css" />
  </head>
    <h1>CSS field-sizing</h1>

<main>
  <section class="without">
    <h2>Without</h2>
    <textarea placeholder="No grow…"></textarea>

    <select>
      <option>This doesn't shrink to fit</option>
      <option>hi</option>
      <option>short</option>
      <option>medium</option>
      <option>annoying long option that needs rewritten</option>
    </select>

    <select multiple>
      <option>This doesn't shrink to fit</option>
      <option>hi</option>
      <option>short</option>
      <option>medium</option>
      <option>annoying long option that needs rewritten</option>
    </select>

    <input type="text" placeholder="I don't grow">

    <input type="email" placeholder="Email no grow">

    <input type="number" placeholder="99">

    <input type="file">
  </section>

  <section class="with">
    <h2>With</h2>

    <textarea placeholder="Does grow…"></textarea>

    <select>
      <option>This shrinks to fit</option>
      <option>hi</option>
      <option>short</option>
      <option>medium</option>
      <option>annoying long option that needs rewritten</option>
    </select>

    <select multiple>
      <option>This shrinks to fit</option>
      <option>hi</option>
      <option>short</option>
      <option>medium</option>
      <option>annoying long option that needs rewritten</option>
    </select>

    <input type="text" placeholder="I grow too">
    <input type="email" placeholder="Email input type too">

    <input type="number" placeholder="99">

    <input type="file">
  </section>
</main>
 `,
  interpolatesize: `
    <head>
     <link rel="stylesheet" href="styles/interpolate-size.css" />
    </head>
      <div>
        <p>Subscribe</p>
        <p>To</p>
        <p>channel</p>
      </div>
 `,
  styleabledetails: `
 <main>
     <head>
     <link rel="stylesheet" href="styles/styled-details.css" />
    </head>
	<div>
		<div>
			<details name="accordion">
			<summary>Item 1</summary>
			<div class="details-content-wrapper">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aliquam. Veritatis consequatur, soluta molestiae voluptates accusamus qui odio, error, repellat rem harum id similique omnis quod dignissimos saepe quas mollitia.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aliquam. Veritatis consequatur, soluta molestiae voluptates accusamus qui odio, error, repellat rem harum id similique omnis quod dignissimos saepe quas mollitia.</p>
			</div>
		</details>
		<details name="accordion">
			<summary>Item 2</summary>
			<div class="details-content-wrapper">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aliquam. Veritatis consequatur, soluta molestiae voluptates accusamus qui odio, error, repellat rem harum id similique omnis quod dignissimos saepe quas mollitia.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aliquam. Veritatis consequatur, soluta molestiae voluptates accusamus qui odio, error, repellat rem harum id similique omnis quod dignissimos saepe quas mollitia.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aliquam. Veritatis consequatur, soluta molestiae voluptates accusamus qui odio, error, repellat rem harum id similique omnis quod dignissimos saepe quas mollitia.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aliquam. Veritatis consequatur, soluta molestiae voluptates accusamus qui odio, error, repellat rem harum id similique omnis quod dignissimos saepe quas mollitia.</p>
			</div>
		</details>
		<details name="accordion">
			<summary>Item 3</summary>
			<div class="details-content-wrapper">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<p>Dolor, aliquam. Veritatis consequatur, soluta molestiae voluptates accusamus qui odio, error, repellat rem harum id similique omnis quod dignissimos saepe quas mollitia.</p>
			</div>
		</details>
		</div>
	</div>
</main>
 `,
  anchorposition: `
    <head>
      <link rel="stylesheet" href="styles/anchor-position.css" />
    </head>
    <div class="anchor">
      <img
       src="https://yt3.ggpht.com/mCCR1mU3xrRbSH575EVZUeJH03294gEsqepxlcLi6myEmEUjJIFh-KGXkKU4692vCPDU-gvStA=s600-c-k-c0x00ffffff-no-rj-rp-mo" 
       alt="webx logo"
       width="300px"
       height="300px"
       />
    </div>

    <div class="positioned-element">
      Subscribe
    </div>
 `,
  styledscroll: `
  <main>
   <head>
      <link rel="stylesheet" href="styles/styled-scroll.css" />
    </head>
  <div class="scroller">
    <div class="content">
      <p>CSS, short for Cascading Style Sheets, is a programming language that is used to describe the presentation or visual layout of a document written in HTML. It acts as a styling tool and enables web developers to control the appearance of their websites or web pages by specifying how different elements should be displayed on the screen. CSS allows designers to define various aspects such as font styles, colors, spacing between elements, background images, and much more.</p>
      <p>The term "cascading" in CSS refers to its ability to apply multiple stylesheets simultaneously and prioritize them based on their importance or specificity. This feature allows developers to create consistent designs across multiple web pages by defining common styles in an external stylesheet which can then be linked to all relevant HTML documents. Additionally, CSS makes it easy to update the design of an entire website by simply modifying one central stylesheet rather than having to manually edit each individual webpage.</p>
      <p>CSS can be applied directly within an HTML document using inline stylesheets or internally through embedded stylesheets within the head section of a page. However, it is considered best practice and more efficient from both maintenance and performance perspectives to use external style sheets stored separately in .css files which are then referenced within HTML documents.</p>
      <p>One important concept in CSS is selectors. Selectors allow you to target specific elements within your HTML markup so that you can apply different styles only where needed. Selectors can target tags (e.g., p, div), classes (e.g., .header), IDs (e.g., #main), attributes (e.g., [type="submit"]), pseudo-classes (e.g., :hover) and many other properties of DOM elements.</p>
      <p>Overall, CSS plays a crucial role in modern web development as it provides great flexibility and control over how content looks on websites. By separating style from structure with this powerful language, developers are able to create visually appealing websites while maintaining clean code that adheres to best practices for web accessibility and user experience.</p>
    </div>
  </div>
  </div>
 `,
  crossdoctransition: `
     <a href="demo.html">Demo Page</a>
 `,
  animationtimeline: `
  <head>
      <link rel="stylesheet" href="styles/animation-timeline.css" />
    </head>
 <div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
 `,
  colorscheme: `
   <head>
      <link rel="stylesheet" href="styles/color-scheme.css" />
    </head>
 <div class="row gap align-top">
    Dark Mode Setting:
    <label><input name="color-scheme" type="radio" value="light dark" checked> System</label>
    <label><input name="color-scheme" type="radio" value="light"> Set Light</label>
    <label><input name="color-scheme" type="radio" value="dark"> Set Dark</label>
</div>
<p>Use your operating system’s preferences to <mark>switch between light and dark mode</mark>, or use one of the options to force a mode</p>

 `,
  popoverapi: `
 <head>
      <link rel="stylesheet" href="styles/popover.css" />
    </head>
 <button popovertarget="my-popover"> Open Popover </button>

<div id="my-popover" popover>
  <p>I am a popover with more information. Hit <kbd>esc</kbd> or click away to close me.<p>
</div>
 `,
};
