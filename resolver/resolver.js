const {books, authors} = require('../data/static')
const axios = require('axios')


const resolvers = {
    Query: {
        books: () => books,
        book:(parent, args)=> books.find(item=>item.id ==args.id),
        authors:()=> authors,
        author:(parent, args)=> authors.find(item=>item.id == args.id),
        // parts: async (parent, args)=> {
        //     let res = await axios.get('http://localhost:3000/parts')
        //     return  res.data
        // }
    }
}

module.exports = resolvers