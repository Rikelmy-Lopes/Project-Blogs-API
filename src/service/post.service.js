const { BlogPost, Category, User, PostCategory } = require('../models');

const addPost = async ({ title, content, categoryIds, userEmail }) => {
    const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });

    if (count !== categoryIds.length) {
      return { error: 'one or more "categoryIds" not found', post: null };
}
  const [{ id }] = await User.findAll({ where: { email: userEmail } });

  const post = await BlogPost.create({ title,
    content,
    userId: id, 
    published: Date.now(),
    updated: Date.now() });

    const promises = categoryIds.map(async (categoryId) => {
        await PostCategory.create({ postId: post.id, categoryId });
    });

    await Promise.all(promises);

    return { error: null, post: post.dataValues };
};

const getAllPost = async () => {
    const posts = await BlogPost.findAll({
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });
    return posts;
};

module.exports = {
    getAllPost,
    addPost,
};