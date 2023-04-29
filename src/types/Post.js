const { objectType } = require('@nexus/schema')
const PostType = require('nexus-prisma').Post


const Post = objectType({
  name: PostType.$name,
  definition(t) {
    t.field(PostType.id)
    t.field(PostType.published)
    t.field(PostType.title)
    t.field(PostType.content)
    t.field(PostType.author)
  },
})

module.exports = {
  Post,
}
