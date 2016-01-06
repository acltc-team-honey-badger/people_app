class Person < ActiveRecord::Base
  validates :bio, :name, presence: true
end
