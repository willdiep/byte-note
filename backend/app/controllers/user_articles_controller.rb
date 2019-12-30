class UserArticlesController < ApplicationController
    def index
        userarticles = UserArticle.all 
        render json: UserArticleSerializer.new(userarticles
    end
end
 