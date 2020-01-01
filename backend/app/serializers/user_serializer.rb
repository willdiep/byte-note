class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :firstname, :lastname, :notes, :articles
  has_many :notes
  has_many :articles
end
 