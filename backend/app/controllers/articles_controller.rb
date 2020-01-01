class ArticlesController < ApplicationController
    def index
        articles = Article.all 
        render json: ArticleSerializer.new(articles)
    end
    
    def show
        article = Article.find_by(params[:id])
        render json: ArticleSerializer.new(article)
    end

    def create    
        article = Article.create(id: params[:id], title: params[:title])
        # render json:ArticleSeriazlier.new(article)
        
    end
end
 