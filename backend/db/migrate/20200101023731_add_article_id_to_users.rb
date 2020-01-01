class AddArticleIdToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :article_id, :integer
  end
end
