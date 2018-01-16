import { ADD_BLOG } from '../../Actions/CreateBlog/actions'


const mockBlogs = [
  {
    owner: 'oscar',
    title: 'My first Blog',
    text: 'This is some super important text needed for anything to be good!',
    images:
      [
        {
          href: 'https://media.timeout.com/images/103941355/image.jpg',
          description: 'The beautiful town of tokyo'
        },
        {
          href: 'http://www.telegraph.co.uk/content/dam/Travel/2017/September/tokyo%20GettyImages-532806099-xlarge.jpg',
          description: 'Another great picture'
        }
      ]
  },
  {
    owner: 'oscar',
    title: 'My Second blog post',
    text: 'What the the fuck am i doing',
    images: []
  },
  {
    owner: 'amanda',
    title: 'My first Blog',
    text: 'Hamburg är det bästa som finns, mah god!',
    images:
      [
        {
          href: 'https://static.goodgamestudios.com/wp-content/uploads/2014/07/img_hamburg_landungsbruecken_900x450.jpg',
          description: 'Hamburg harbour is the best'
        },
        {
          href: 'https://media.globalchampionstour.com/cache/750x429/assets/hamburg_2014.jpg',
          description: 'Another great picture'
        }
      ]
  }
]

const BlogReducer = (state = mockBlogs, action) => {

  switch (action.type) {

    // TODO: ADD IMAGES, ADD OWNERS
    case ADD_BLOG:
      return [
        {
          title: action.title,
          text: action.text,
          owner: action.owner,
          images: []
        },
        ...state
      ]

    default:
      return state;
  }
}

export default BlogReducer