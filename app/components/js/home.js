const NewsAPI = require("newsapi");
const moment = require("moment");
const newsapi = new NewsAPI("8717edacdc164636841ed4b6c551b178");
document.addEventListener("DOMContentLoaded", function () {
    new Vue({
        el: "#mainDiv",
        data: {
            news: [],
            filter: "",
            singleView: null,
            loading: true
        },
        created: function () {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.loading = true;
                newsapi.v2
                    .topHeadlines({
                        sources: 'bbc-news,the-verge',
                        language: "en"
                    })
                    .then(response => {
                        this.news = response;
                        this.loading = false;
                        console.log(response);
                    });
            },
            goToSingleView($index) {
                this.singleView = $index;
            },
            back() {
                this.singleView = null;
            },
            reload() {
                this.fetchData();
            }
        },
        filters: {
            dateF: date => moment(date).format("DD. MM. YYYY")
        }
    });
});