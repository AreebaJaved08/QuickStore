class User < ApplicationRecord
  scope :basic_info, -> { select(:name, :email) }

  validates :name, presence: true

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable
end
