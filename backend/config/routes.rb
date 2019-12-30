Rails.application.routes.draw do
  resources :user_notes
  resources :notes
  resources :user_articles
  resources :articles
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
