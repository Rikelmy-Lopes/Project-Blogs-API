module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: { type: DataTypes.INTEGER, foreignKey: true },
        categoryId:{ type: DataTypes.INTEGER, foreignKey: true}
    },
    {
      timestamps: false,
      underscored: true,
    })

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blog_posts',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'blogPostId',
        });

        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'blogPostId',
            otherKey: 'categoryId',
        });
    }

    return PostCategory;
}