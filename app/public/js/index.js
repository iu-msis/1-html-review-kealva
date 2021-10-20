
const SomeApp = {
    data() {
      return {
        books: [],
        selectedBook: null,
        offerForm: {}
      }
    },
    computed: {},
    methods: {

        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        // selectBook(s) {
        //     if (s == this.selectedBook) {
        //         return;
        //     }
        //     this.selectedBook = s;
        //     this.book = [];
        //     this.fetchBookData(this.selectedBook);
        // },
        fetchBookData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
            .catch( (error) => {
                console.error(error);
            });
        },

    postNewBook(evt) {
        
        console.log("Posting!", this.offerForm);

        fetch('api/books/create.php', {
            method:'POST',
            body: JSON.stringify(this.offerForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;
            
            // reset the form
            this.offerForm = {};
          });
    },
 },
    created() {
        this.fetchBookData();
    }
  
}
  
  Vue.createApp(SomeApp).mount('#SomeApp');