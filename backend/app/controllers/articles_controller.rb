class ArticlesController < ApplicationController
    def index
        articles = Article.all 
        render json: articles, include: [:title, :url]
    end

    def new
        article = Article.new
    end

    def create
        
    end

    def show
        article = Article.find_by(params[:id])
        render json: article, include: [:title, :url]
    end
end
