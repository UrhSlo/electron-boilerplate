const NewsAPI = require("newsapi");
      const moment = require("moment");
      const newsapi = new NewsAPI("8717edacdc164636841ed4b6c551b178");
      document.addEventListener("DOMContentLoaded", function() {
        new Vue({
          el: "#mainDiv",
          data: {
            news: [],
            filter: "",
            singleView: null
          },
          created: function() {
            newsapi.v2
              .topHeadlines({
                sources: "bbc-news",
                language: "en"
              })
              .then(response => {
                this.news = response;
                console.log(response);
              });
          },
          methods: {
            goToSingleView($index) {
                this.singleView = $index;
                console.log("osem");
            },
            back() {
                this.singleView = null;
            }
          },
          filters: {
            dateF: date => moment(date).format("DD. MM. YYYY")
          }
        });
      });