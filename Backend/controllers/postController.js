import User from '../models/userModel.js';
import posts from '../models/postModel.js';
import Post from '../models/postModel.js';

const createPost = async (req, res) => {
  try {
    const { postedBy, text, image } = req.body;
    if (!postedBy || !text) {
      return res
        .status(400)
        .json({ message: 'postedBy and text fields are required..!' });
    }
    const user = await User.findById(postedBy);
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    if (user._id.toString() !== req.user._id.toString()) {
      return res.status(400).json({
        message: 'u are not authorized to create a post for someone else..! ',
      });
    }

    const maxLength = 500;
    if (text.length > maxLength) {
      return res.status(400).json({
        message: `Text length should be less than ${maxLength} characters..!`,
      });
    }

    const newPost = new Post({
      postedBy,
      text,
      image,
    });

    await newPost.save();
    res
      .status(201)
      .json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};

const getPost = async (req, res) => {
  try {
    // getting post by id
    const post = await Post.findById(req.params.id);
    // if post not found
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    // if post found
    res.status(200).json({ message: 'Post fetched successfully', post });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};
export default { createPost, getPost };
