
const listHelper = require('../utils/list_helper')
const { empty_list, short_list, long_list } = require('./test_objects')

test('dummy returns one', () => {
    const result = listHelper.dummy(empty_list)
    expect(result).toBe(1)
})

describe('total likes', () => {

    test('of an empty list is 0', () => {
        expect(listHelper.totalLikes(empty_list)).toBe(0)
    })

    test('of list with one blog equals the likes of that blog', () => {
        expect(listHelper.totalLikes(short_list)).toBe(2)
    })

    test('of bigger list is calculated rigth', () => {
        expect(listHelper.totalLikes(long_list)).toBe(36)
    })
})

describe('favorite blog', () => {

    const favorite =  {
        _id: '5a422b3a1b54a676234d17f9',
        title: 'Canonical string reduction',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
        likes: 12,
        __v: 0
    }

    test('is the blog with most likes in longer list', () => {
        expect(listHelper.favoriteBlog(long_list)).toEqual(favorite)
    })

    test('is one of the favorite blogs that have equally most likes', () => {
        const new_blog =  {
            _id: '19982b3a1b54a676234d17g4',
            title: 'Harry Potter ja Viisasten Kivi',
            author: 'J. K. Rowling',
            url: 'http://www.google.com',
            likes: 12,
            __v: 0
        }
        long_list.push(new_blog)

        expect(listHelper.favoriteBlog(long_list)).toEqual(favorite)
    })

    test('is empty object if there are no blogs', () => {
        expect(listHelper.favoriteBlog(empty_list)).toEqual({})
    })
})

describe('most blogs', () => {

    test('has the author associated with most blogs', () => {
        expect(listHelper.mostBlogs(long_list)).toEqual({ author: 'Robert C. Martin', blogs: 3 })
    })

    test('is 1 for the author in the list', () => {
        expect(listHelper.mostBlogs(short_list)).toEqual({ author: 'Robert C. Martin', blogs: 1 })
    })

    test('is empty object if there are no blogs', () => {
        expect(listHelper.mostBlogs(empty_list)).toEqual({})
    })
})