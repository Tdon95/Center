# class UsersController < ApplicationController
#     before_action :ensure_logged_in, only: [:index, :show]

#     def new
#         @user = User.new
#         render :new
#     end
#     def create
#     end
#     def show
#         @user = User.find(params[:id])
#         render :show
#     end
#     def index 
#         @user = User.all
#         render :index
#     end

#     private
#     def user_params
#         self.params(:user).permit(:email, :password)
#     end
# end

class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
