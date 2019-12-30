class Article < ApplicationRecord
    has_many :user_articles
    has_many :users, through: :user_articles
end
