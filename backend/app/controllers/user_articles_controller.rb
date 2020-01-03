class UserArticlesController < ApplicationController
    def index
        userarticles = UserArticle.all 
        render json: UserArticleSerializer.new(userarticles)
    end

    def create
        userArticle = UserArticle.create(article_id: params[:article_id], user_id: params[:user_id])
        render json: UserArticleSerializer.new(userArticle)
    end
end
 