# Application Status Lookup

## Project Overview

This project is a web application that allows applicants to check the status of their applications. It provides a user-friendly interface for applicants to enter their submission ID and view the current status of their application.

## Features

1. **Welcome Screen**: Introduces users to the application and provides basic instructions.
2. **Submission ID Entry**: Allows users to input their unique submission ID.
3. **Status Display**: Shows the current status of the application and the last update date.
4. **Error Handling**: Displays appropriate error messages if an invalid submission ID is entered.
5. **Responsive Design**: Works well on both desktop and mobile devices.
6. **Accessibility**: Implements best practices for web accessibility.

## Technical Specifications

- **Framework**: Next.js with React
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion for smooth transitions
- **State Management**: React Hooks (useState)
- **Form Handling**: Custom form submission with simulated API call
- **Icons**: Lucide React

## Component Structure

The main component is `EnhancedApplicationLookup`, which includes:

1. A multi-step process (Welcome, Enter ID, View Status)
2. A progress indicator
3. Animated transitions between steps
4. A form for submitting the application ID
5. A status display section
6. An error display for invalid submissions
7. A footer with support information

## Data Flow

1. User enters a submission ID
2. Application simulates an API call to a database
3. If the ID is found, the application status is displayed
4. If the ID is not found, an error message is shown

## Simulated Database

For demonstration purposes, the application uses a simulated database with predefined submission IDs and statuses. In a production environment, this would be replaced with actual API calls to a backend service.

## Future Enhancements

1. Integration with a real backend API
4. Notification system for status updates
5. Multi-language support

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser