module.exports = (sequelize, DataTypes) => {
    const PostsCategory = sequelize.define('PostsCategory', {
        postId: { type: DataTypes.INTEGER, foreignKey: true },
        categoryId:{ type: DataTypes.INTEGER, foreignKey: true}
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories'
    })

    PostsCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blog_posts',
            through: PostsCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });

        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostsCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });
    }

    return PostsCategory;
}