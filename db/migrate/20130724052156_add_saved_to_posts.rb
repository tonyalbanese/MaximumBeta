class AddSavedToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :draft, :boolean, default: true
  end
end
