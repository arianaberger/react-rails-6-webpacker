json.extract! greeting, :id, :language, :content, :created_at, :updated_at
json.url greeting_url(greeting, format: :json)
