const dummy = () => 1

const totalLikes = (blogs) => {
    const sum = blogs.reduce((sum, blog) => {
        return sum + blog.likes
    }, 0)
    return sum
}

const favoriteBlog = (blogs) => {
    const max_likes = Math.max(...blogs.map(blog => blog.likes))
    const favorites = blogs.filter(blog => blog.likes === max_likes)
    return favorites.length === 0 ? {} : favorites[0]
}

const mostBlogs = (blogs) => {
    const authors = blogs.reduce((authors, blog) => {
        const author = authors.find(author => blog.author === author.author)
        author ? author.blogs += 1 : authors.push({ author: blog.author, blogs: 1 })
        return authors
    }, [])
    const max = Math.max(...authors.map(author => author.blogs))
    console.log(authors)
    return authors.length ? authors.find(author => author.blogs === max) : {}
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs }
