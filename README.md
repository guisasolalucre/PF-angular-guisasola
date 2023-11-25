# XAVIER'S SCHOOL

![Badge en Desarrollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)

Angular project developed as the final project for the Angular course at Coderhouse. It serves as an administrative system for an educational institution, specifically Xavier's School for Gifted Youngsters (X-MEN).

The system allows users to log in as an administrator or assistant.

### Administrator

- Create, modify, delete, send emails, and view student details.
- Create, modify, delete, and view course details.
- Create or delete an enrollment.
- Create, delete, and change roles of other users.

### Assistant

- Create, modify, and send emails, and view student details.
- View course details.
- Create or delete an enrollment.

## Live Demo

The API is hosted on a free web service server, so there may be a slight delay in loading. Please allow a few seconds.

### [Check the app here](https://guisasolalucre.github.io/PF-angular-guisasola/)

Credentials to log in with test users can be found on the login page.

## Installation and Configuration

Follow these steps to set up the development environment and project dependencies.

### Prerequisites

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/): JavaScript runtime platform.
- [npm](https://www.npmjs.com/): Package manager for Node.js.

### Installation Steps

1. **Clone the API Repository:**

    ```bash
    git clone https://github.com/guisasolalucre/xaviers-school-db
    cd xaviers-school-db
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

    This will install all the dependencies specified in the `package.json` file.

3. **Run the API:**

    ```bash
    npm start
    ```

    This command starts the Angular development server. You can access the application at `http://localhost:3000/`.

4. **Clone the Project Repository:**

    ```bash
    git clone https://github.com/guisasolalucre/PF-angular-guisasola
    cd PF-angular-guisasola
    ```

5. **Install Dependencies:**

    ```bash
    npm install
    ```

    This will install all the dependencies specified in the `package.json` file.

6. **Start the Application:**

    ```bash
    ng serve
    ```

    This command starts the Angular development server. You can access the application at `http://localhost:4200/`.

7. **Ready!**

## Features

### Toolbar

On the left side of the toolbar, you will find a button to show or hide the side menu. It displays the name of the institution, current time, and date. On the right side, there is a button that shows your username, role, and options to change your password or log out.

### Side Menu

This menu will automatically appear on the left side of the dashboard. To hide it, click on the menu button located on the toolbar. The side menu displays different interfaces that users can interact with.

### Home

This page displays a calendar where users can see the start (green) and end (maroon) dates of each course. Clicking on each event will redirect you to the course details. You can navigate through the calendar and easily return to the current day by clicking on the 'Today' button.

### Students

This page shows a table with all the students' personal details. There is also a button to add a new student, which opens a dialog to fill in all the student's personal details.

- **View student's details:** Redirects you to a page displaying the student's details and all the courses they are enrolled in. There is a button to enroll the student in a new course, as well as an option to unenroll them from a specific course.
  
- **Update student's details:** Opens the same dialog to add a new student but preloaded with the student's details.
  
- **Send an email:** Shows an alert informing the email has been sent. Please allow a few seconds.
  
- **Delete student (admin only):** Deletes the student from the database. For security, it will ask first if you are sure.

### Courses

This page shows a table with all the courses' details. There are three buttons (admin only):

- **Add a new course:** Opens a dialog to select all the course's details.
  
- **Add a new teacher:** Opens a dialog to fill with the teacher's name.
  
- **Add a new course name:** Opens a dialog to fill with the course name.

In the 'Actions' column of the table, there are various icons for performing different actions:

- **View course's details:** Redirects you to a page that displays the course's details and all the students enrolled in it. There is a button to enroll a student in the course, as well as two options to unenroll a specific student from the course and email the student.
  
- **Update course's details (admin only):** Opens the same dialog to add a new course but preloaded with the course's details. Note that if the course has already started, the name and start date fields will be disabled.
  
- **Delete course (admin only):** Deletes the course from the database. For security, it will ask first if you are sure.

### Enrollments

This page shows a table with all the enrollments' details. There is also a button to create an enrollment, which opens a dialog to choose a student and a course. In the 'Actions' column of the table, there is an icon to delete an enrollment. This will delete the enrollment from the database. For security, it will ask first if you are sure.

### Users (admin only)

This page shows a table with all the users' details (except passwords). There is a button to create a new user, which opens a dialog to fill in the username and password.

- **Set user as administrator:** In the 'Admin' column of the table, there is an option to set the user as an administrator. It will show a person on the logged user. Note you won't be able to modify any test user or your own user.
  
- **Delete user:** In the 'Actions' column of the table, there is an option to delete the user. This will delete the user from the database. For security, it will ask first if you are sure.
