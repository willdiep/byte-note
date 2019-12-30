class NoteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :topic, :content
  has_many :users
end
 