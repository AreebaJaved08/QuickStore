Rails.application.routes.draw do
  root "users#index"
  devise_for :users, controllers: {
    registrations: "registrations"
  }
    get "up" => "rails/health#show", as: :rails_health_check

  resources :users
end
