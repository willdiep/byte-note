class UserNoteSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :user 
  belongs_to :note
end
 