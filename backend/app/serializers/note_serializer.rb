class NoteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :text
  belongs_to :user
  belongs_to :article
end
