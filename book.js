const book={
    bookData:[
        {'name' :"C++", 'author' :"Jim Smith"},
        {'name' :"Java", 'author' :"Lisa Jones"},
        {'name' :"MySQL", 'author' :"Bob Danieles"}
    ],
    getAllBooks(){
        console.log(this.bookData);
    },
    getOneBook(x){
        console.log(this.bookData[x]);
    },
    addBook(name, author){
        this.bookData.push({'name':name, 'author':author});
    }

}
//kaikki kirjat
book.getAllBooks();
//kirja, jonka indeksi on 1
book.getOneBook(1);
//uusi kirja
book.addBook('SQL','Teppo Testi');
//tarkistetaan tulostamalla kaikki kirjat
book.getAllBooks();
