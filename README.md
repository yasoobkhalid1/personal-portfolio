# Personal Portfolio Website

My personal portfolio website, built with [React](https://reactjs.org/) (through [Next.JS](https://nextjs.org/)) and [Tailwind CSS](https://tailwindcss.com/), hosted on [Vercel](https://vercel.com/).

## Design Decisions

### React

While a personal static website can easily be created without the use of any framework - simply built with HTML and CSS - there were a few reasons I decided to use React to build the portfolio.

Firstly, and perhaps most importantly, I love the compartmentality and reusibality React components provide. When I tried creating this website using simple HTML, I noticed _a lot_ of sections that had the same underlying format, with tiny variations on one another. Every time I would copy-paste one of these elements, changing small values within it, I would think about how much easier it would be to extract a single component for the element and pass in the variable values as props to it.

Alongside this, I also appreciate the compartmentality React provides: rather than having a single, sprawling HTML file with all the various sections of the portfolio (e.g. education, skills, etc.) contained within it, I found it much easier for developmenet and code readability to have everything broken into smaller, more manageable components that could have a clear execution flow easily established.

### Next.JS

Similar to the previous section, the easier (and perhaps more common) approach to quickly setting up a React project is to use the [Create-React-App](https://create-react-app.dev/) framework. However, there were a few reasons why I decided to use Next.JS: perhaps the biggest reason was how Next.JS drastically simplified the process of setting up the custom requirements for my project with the least amount of hassle. For example, previously I have attempted to initialize a React project with Create-React-App and connect it to Tailwind CSS, finding the process to be quite cumbersome and frustrating, wasting hours configuring it as a PostCSS plugin alongside [CRACO](https://github.com/gsoft-inc/craco). In comparison, Next.JS included Tailwind CSS as a preconfigured [example](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss) and setting the whole project up only required executing a single line.

Other than the above, I also ended up going with Next.JS due to the various features it provides out-of-the-box. I deeply appreciate its pre-rendering (allowing me to generate my pages statically for extremely fast executing), in-built dynamic routing (saving me a lot of headache by removing the need to use a specific routing library), fast refresh (so that I can observe every change immediately), and so many other features that are included with the framework.

### Tailwind CSS

This was the first project I worked on that used Tailwind CSS for its styling framework. In fact, it was my first exposure to a utility-first CSS framework since most of my previous work used Bootstrap. The reason I decided to go with Tailwind CSS was due to the various pain points I noticed while working with Bootstrap that this framework claimed to solve: while using Bootstrap components, there were numerous times where I found myself frustrated trying to force my own custom CSS on top of the layer established by the framework itself. Obviously, Bootstrap's philosophy encourages minimizing custom changes and using the provided, pre-built styles. This, however, results in extremely similar-styled websites which take a disproportionately large amount of effort to customize and drag away from this standardized format.

Moreover, I also appreciated some of the smaller QoL improvements Tailwind CSS provided, such as removing the need to create arbitrary class names for element selection, allowing me to work in a single HTML file while styling each component individually without the need to constantly switch back-and-forth with another file, and many other such benefits.

<!-- ### Varcel

## Implementation

### Initialization

Initializing the project for Tailwind CSS was extremely straightforward with Next.JS.

First, I created a repository for the project on Github, cloning it to a local drive.

Then, I initialized the project by running the following command inside the folder:

```bash
npx create-next-app -e with-tailwindcss .
```

### Favicon

One of the first task I worked on for my website was creating and implementing a favicon in the head of the document. This was actually much more complicated then I expected due to the various sizes for the favicon and the different platforms the website could be accessed from (there was a need for seperate Touch icons for iOS Safari and the `favicon.ico` file needed different, common dimensions).

To simplify this process, I ended up using this [Favicon Generator](https://realfavicongenerator.net/) which made it extremely easy to upload my image and have all the custom configurations generated automatically that I could store in my `public` folder and paste their `link` elements in the `head` of my main `index.js` file.

By doing the above, I made sure my favicon was correctly configured for all modern browser sizes, Windows tile icons, mobile browsers in both the iOS and Android ecosystems, etc. -->
