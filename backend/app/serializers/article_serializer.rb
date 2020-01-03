class ArticleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :url, :author
  has_many :users
end
 