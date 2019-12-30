class ArticleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :url
  has_many :users
  
end
 