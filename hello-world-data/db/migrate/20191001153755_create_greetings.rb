class CreateGreetings < ActiveRecord::Migration[6.0]
  def change
    create_table :greetings do |t|
      t.string :language
      t.string :content

      t.timestamps
    end
  end
end
