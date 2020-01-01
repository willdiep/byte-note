class AddNoteIdToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :note_id, :integer
  end
end
