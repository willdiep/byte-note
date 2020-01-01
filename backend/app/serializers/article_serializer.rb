class ArticleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :url, :author, :user_id
  has_many :users
end
 