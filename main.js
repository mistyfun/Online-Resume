  const app = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data: {
      projects: []
    },
    created() { //created() belongs to vue. It's called when the component has been created.
      fetch("https://api.github.com/repos/mistyfun/Online-Resume/issues/1/comments")//fetch is like ajax in jquery
        .then(response => response.json())
        .then(comments => {
          let projects = comments.map(comment => {
            let strippedComment = comment.body;
            strippedComment = strippedComment.replace("```json", ""); //replace "```json" with ""
            strippedComment = strippedComment.replace("```", "");
            return JSON.parse(strippedComment); //parse json string to json objects, so js can read it
          });//done transforming the texts to the json object
          this.projects = projects; //the projects that the vue component has are equal to the ones that we just fetched and transformed
        });
    }
  });
