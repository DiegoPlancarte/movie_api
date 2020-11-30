Rails.application.routes.draw do
  resources :movies
  root to: "home#index"
end
