# Threat Reporting Application

This Threat Reporting Application is developed in Angular and provides users with a platform to report threats the Lower Mainland region. The application features a dynamic map interface where users can pinpoint the location of the threat and provide details about it. Authenticated users have the additional capability to edit and delete reports from the application.

## Features

- **Dynamic Map Interface**: Users can visually locate and pinpoint threats on an interactive map.
- **Threat Reporting**: Users can report threats by providing relevant information such as threat type, location, and description.
- **Authentication**: Users can provide the admin password to the application to access additional features like editing and deleting reports.
- **Edit and Delete Reports**: Authenticated users have the ability to edit and delete the reports they have submitted.
- **Responsive Design**: The application is designed to be responsive on all devices except mobile.

## Technologies Used

- **Angular** (https://angular.io/)
- **HTML/CSS**
- **TypeScript** (https://www.typescriptlang.org/)
- **Angular Material** (https://material.angular.io/) (for pop-up UI components)
- **Leaflet** (https://leafletjs.com/) (for interactive map)
- **Hashify** (https://hashify.net/) (for admin password authentication)

## Installation & Usage

1. Clone the repository:

```bash
git clone https://github.com/yourusername/threat-reporting-app.git

2. Navigate to the project directory:

cd threat-reporting-app

3. Install depencencies:

npm install

4. Start the development server

ng serve -o

5. You can now use the application to report threats, view existing reports, and perform other actions based on your authentication status. (As this application is just a hypothetical application the admin password is: BaggyJeans)
