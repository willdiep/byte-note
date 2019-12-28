class User < ApplicationRecord
    has_many :articles
    has_many :notes, through: :articles
end
