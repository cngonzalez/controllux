Rails.application.routes.draw do
  resources :mp3s
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  match '*all', to: 'application#preflight', via: [:options]
end
