class UserArticleSerializer
  include FastJsonapi::ObjectSerializer
  # attributes 
  belongs_to :user 
  belongs_to :article 
end
 