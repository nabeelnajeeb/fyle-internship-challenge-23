# Getting Started

Clone the Repository
Clone the GitHub repository to your local machine using the following command:
```sh
git clone https://github.com/nabeelnajeeb/fyle-internship-challenge-23.git
cd fyle-internship-challenge-23
```
# Install Dependencies
Install the project dependencies using npm:
```sh
npm install
```
# Run the Application
Run the Angular development server:
```sh
ng serve
```
Navigate to http://localhost:4200/ in your web browser. The application should be running, and you can start exploring!

# Usage
### Search Repositories
- Enter a GitHub username in the search bar.
- Click the "Search Repositories" button.

### Pagination
- Use the "Page Size" dropdown to select the number of repositories to display per page (10, 30, 50, or 100).
- Click the "Load Repositories" button to load repositories based on the selected page size.

### Unit Tests
The application includes unit tests for the AppComponent and GithubService. Ensure you have followed the prerequisites before running the tests.

### Run Unit Tests
Run the unit tests using the following command:
```sh
ng test
```
This will execute the tests and display the code coverage report. Ensure that the coverage is 100% for both the component and the service.
