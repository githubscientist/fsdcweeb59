# Git and GitHub

## What is Git?

- Git is a version control tool that allows developers to track changes in their code with timestamps and comments.

## What is GitHub?

- GitHub is a web-based platform that provides hosting for software development and version control using Git. It allows developers to collaborate on projects, manage code repositories, and track changes.

## To Push an existing repository from the command line:

Let's say you have a local repository that you want to push to GitHub. You can follow these steps:

1. Login to your GitHub account and create a new repository. You can do this by clicking on the "New" button on the repositories page.

2. Open the local folder in VS Code that contains your existing repository.
3. Open the terminal in VS Code by going to `View > Terminal` or using the shortcut `Ctrl + ``.
4. Initialize the local repository if you haven't already by running the command:
   ```
   git init
   ```
5. Add the files to the staging area by running:
   ```
   git add .
   ```
6. Commit the changes with a message:
    ```
    git commit -m "Initial commit"
    ```
7. Add the remote repository URL that you created on GitHub:
    ```
    git remote add origin <repository-url>
    ```
   Replace `<repository-url>` with the URL of your GitHub repository (e.g., `https://github.com/githubscientist/my-repo.git`).
8. Finally, push the changes to GitHub:
    ```
    git push -u origin master
    ```