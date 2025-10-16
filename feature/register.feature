Feature: Registration page

    Scenario: User enters information to submit form to register an account
    Given Navigate to the website
    Then Fill out the registration form
    | Name                      |  Company                    | EMail_Address                  | Password              | Confirm_Password|
    | Benjamin Saint Elien      | Brand X Solutions           | random@random.com               | testAdmin@123         | testAdmin@123   | 
    Then Click the register button