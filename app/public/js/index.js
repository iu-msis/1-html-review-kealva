
const SomeApp = {
    data() {
      return {
        books: [],
        selectedBook: null,
        offers: [],
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
        },
    },
    created() {
        this.fetchBookData();
    }
  
}
  
  Vue.createApp(SomeApp).mount('#SomeApp');