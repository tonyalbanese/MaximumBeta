class AddDraftToPosts < ActiveRecord::Migration
  def self.up
    change_table :posts do |t|
      t.boolean :draft, default: true
  end
end
