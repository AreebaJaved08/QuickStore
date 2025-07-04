class UsersController < ApplicationController
  def index
    @users =User.basic_info
  end
end
