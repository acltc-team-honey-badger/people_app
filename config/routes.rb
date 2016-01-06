Rails.application.routes.draw do
  root 'people#index'

  namespace :api do
    namespace :v1 do
      resources :people
    end
  end
  
end
