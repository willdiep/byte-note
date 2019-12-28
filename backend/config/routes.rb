Rails.application.routes.draw do
  resources :articles, only: [:index, :new, :create, :show]
  resources :notes, only: [:index, :new, :create, :show]
  resources :users, only: [:show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
