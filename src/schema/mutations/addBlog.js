const graphql = require("graphql");

const { BlogType } = require("../types/blog");

const Blog = require("../../model/blog");

var addBlog = {
  type: BlogType,
  args: {
    authorID: { type: graphql.GraphQLID },
    publishedIn: { type: graphql.GraphQLString },
    title: { type: graphql.GraphQLString },
    readTime: { type: graphql.GraphQLInt },
    date: { type: graphql.GraphQLString },
    isStarred: { type: graphql.GraphQLBoolean },
    tags: { type: graphql.GraphQLList(graphql.GraphQLString) },
    content: { type: graphql.GraphQLString },
    claps: { type: graphql.GraphQLInt },
    tweets: { type: graphql.GraphQLInt },
    rank: { type: graphql.GraphQLInt },
  },
  resolve(parent, args) {
    let blogTemp = new Blog({
      authorID: args.authorID, //Todo
      publishedIn: args.publishedIn,
      title: args.title,
      readTime: args.readTime,
      date: args.date,
      isStarred: args.isStarred,
      tags: args.tags,
      content: args.content,
      claps: args.claps,
      tweets: args.tweets,
      rank: args.rank,
    });
    return blogTemp.save();
  },
};

module.exports = addBlog;
