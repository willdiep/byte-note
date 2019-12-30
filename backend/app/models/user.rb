class User < ApplicationRecord
    has_many :user_notes
    has_many :notes, through: :user_notes
    has_many :user_articles
    has_many :articles, through: :user_articles
end
