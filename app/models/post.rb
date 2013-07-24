class Post < ActiveRecord::Base
    validates_uniqueness_of :title
    def to_param
      [id, title.parameterize].join("-")
    end
  attr_accessible :description, :title, :image, :draft
 
  validates :user_id, presence: true
  validates :description, presence: true
   
  belongs_to :user
  has_attached_file :image
  
  scope :draft, -> { where(draft: true) }
  scope :published, -> { where(draft: false) }
  
  

end
