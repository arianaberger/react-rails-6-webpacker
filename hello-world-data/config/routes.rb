Rails.application.routes.draw do
  root 'hello#data'
  resources :greetings
end
