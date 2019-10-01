require 'test_helper'

class HelloControllerTest < ActionDispatch::IntegrationTest
  test "should get data" do
    get hello_data_url
    assert_response :success
  end

end
