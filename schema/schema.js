const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book{
        id: ID
        name: String
        gene: String
    }

    type Author {
        id:ID!
        name: String
        age: Int
    }

    # type Part {
    #     partNumber: String
    #     records {
    #         activePlanner {
    #             id: String
    #             firstName: String
    #             middleName: String
    #             lastName: String
    #             emailAddress: String
    #             installGroup: String
    #         },
    #         clientPartRev: String
    #         company {
    #             companyName: String
    #             contactEmail: String
    #             contactEmail: String
    #             billToAddress: String
    #             billToCity: String
    #             billToCountry: String
    #             billToState: String
    #             billToZipcode: String
    #         },
    #         customerPartNumber: String
    #     }
    # }

    #Root Type
    type Query {
        books: [Book]
        book(id:ID!): Book
        authors: [Author]
        author(id:ID!): Author
        # parts: [Part]
    }
`


module.exports = typeDefs