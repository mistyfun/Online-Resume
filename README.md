# Online Resume

This is my online resume that showcases my skills, experience, and education. It is built using HTML, CSS, [Vue.js](https://vuejs.org/), and [Vuetify](https://vuetifyjs.com/), a Material Design component framework for Vue.js.

## Files

The project has the following files:

- `index.html`: The main HTML file that defines the structure and content of the resume.
- `main.js`: The JavaScript file that sets up the Vue.js application and defines the Vuetify components used in the resume.
- `style.css`: The CSS file that defines the styling for the resume.

## Resume Data

The content of the resume is stored in GitHub comments, which allows me to easily update and maintain the resume by simply editing the comments in the GitHub web interface.

To fetch the resume data, the `main.js` file uses the [GitHub API](https://docs.github.com/en/rest) to retrieve the comments associated with the GitHub repository where the project is hosted. The comments are then parsed using JavaScript and used to populate the resume content.
