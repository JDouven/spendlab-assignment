# Interview Assignment

## Objective

Create a small application in which users can manage a company’s clients. Users should be able to:

- Create new clients with the following fields: Name, Surname, Picture, Email & Address (street name, postal code, house number, city, country)
- Create a solution so clients can be edited and save the changes
- View all clients in an overview that displays the full name & picture of each client.
- Choose a client from the overview and view more details for that client.

You are allowed to use any libraries you wish to use. Write the code like you would write it for production.

The following resources will be provided to you for the overview and details page:

- An Angular FE with Angular Material pre-installed
- A .NET Backend with EF Core

## Deliverables

You’ve received the seed git repo in a `.zip` file along with your assignment.
Please send back to us the link to the git repo you’ve pushed up to (on Github or other)
or zip up the git repo with your work committed. Remember to commit early and often.

1. **Source Code**: Your solution, covering all relevant aspects such as editing clients,
   saving the changes, etc. See below for requirements.
2. **Documentation**: Please include comprehensive documentation explaining your solution,
   covering design choices, setup instructions, and any other relevant details.
   This could be in the form of a README file in the repo root or a separate document.

## Running the backend

### Visual Studio

When using Visual Studio (non-Code), you can launch the `ClientManager.Api` project.

### Unix-based Systems (Linux, macOS)

Make sure you have the .NET 7 SDK installed on your system.
Navigate to the Backend directory.

Execute the following command in your terminal:

```bash
chmod +x start_debug.sh
./start_project.sh
```

### Windows

Ensure you have the .NET 7 SDK installed on your system.
Navigate to the Backend directory.

Run the following command in Command Prompt or PowerShell:

```bash
start_project.bat
```

or

```bash
start_project.ps1
```

### Docker

Make sure you have Docker installed on your system.
Navigate to the Backend directory.

Build the Docker image using the provided Dockerfile:

```bash
cd Backend
docker build -t client-manager-api .
```

Run the Docker container:

```bash
docker run -d -p 5229:5229 --name client-manager-api client-manager-api

```

### Accessing the Swagger

When you run the project, you can access the Swagger UI through
[http://localhost:5229/swagger/index.html](http://localhost:5229/swagger/index.html).

Good luck with the assignment 🍀.
