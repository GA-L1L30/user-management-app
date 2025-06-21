# User Management Application

This project is a user management application built with Angular. It provides a comprehensive interface for viewing and managing users, with a focus on a clean architecture and a rich user experience.

## Demo

A video demonstration of the application is available here:
[https://drive.google.com/file/d/1qzzxyCl-xrwwniJFkX-lFJWOOasoeb8m/view?usp=sharing](https://drive.google.com/file/d/1qzzxyCl-xrwwniJFkX-lFJWOOasoeb8m/view?usp=sharing) (public access)

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have Node.js and the Angular CLI installed on your machine.

* Node.js: [https://nodejs.org/](https://nodejs.org/)
* Angular CLI: `npm install -g @angular/cli`

### Installation and Running

1. Clone the repository or download the source code.
2. Navigate to the `user-management-app` directory:
   ```bash
   cd user-management-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   ng serve
   ```
   The application will be available at `http://localhost:4200/`.
   ``


5. Login credentials:
    ```bash
   {username: 'user123', password: 'Password1!'},
   {username: 'coder_gal', password: 'SecurePass2#'},
   {username: 'dev_master', password: 'MySecretPwd3$'},
   {username: 'test_account', password: 'WeakPassword4%'},
   {username: 'admin_user', password: 'AdminPass5^'}
    ```

## Design Choices and Challenges

The project was developed with a focus on creating a robust and maintainable application.

* **Advanced UI & Component Architecture**: The application features a detailed and professional user interface. It is built with a modular approach, using many small and reusable components. This improves scalability and maintainability.
  * **Reusable Components**: A suite of reusable components has been developed to ensure a consistent look and feel and to promote code reuse. These include: `navbar`, `spinner`, `user-card`, `side-info`, `background-card`, `sub-header-info-cards`, and a `footer-paginator`.
* **State Management with Signals**: The project leverages modern Angular features, including Signals, for optimal performance and reactivity in state management.
* **Challenge**: One of the main challenges was to create a user experience that felt like a real-world application, going beyond the basic requirements to deliver a polished and intuitive interface.

## Bonus Features

Several features were implemented to enhance the application:

* **Custom Route Guards**: The `auth.guard.ts` protects routes from unauthenticated access, redirecting users to the login page if they are not logged in.
* **Local Storage for State Persistence**: The application uses `localStorage` to persist the selected user, so the selection is remembered across page reloads.
* **Custom Pipes**:
  * `capitalize.pipe.ts`: A pipe to capitalize text.
  * `compact-number.pipe.ts`: A pipe to format large numbers into a compact, readable format (e.g., 1K, 1M).
* **Go Back Navigation**: The user detail view includes a "Go Back" functionality to easily navigate back to the user list.
