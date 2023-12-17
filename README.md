# Enview - Frontend Take Home Exercise - Arundhathi Singh

This document explains the features and structure of the frontend application for the alert dashboard. The purpose of this app is to display and manage alerts generated by a system, allowing users to easily search, filter, and mark them as false positives.

##

![App Screenshot](https://i.ibb.co/kSsS960/Screenshot-from-2023-12-17-17-03-58.png)

## Features

-   Alert Display: The app visualizes alerts in a pre-defined layout, including information like type, description, vehicle, and timestamp.
-   Search: Users can find specific alerts through four methods:

    -   Free Text Search: Search all text in the alerts for a string. Matches in any field will display the corresponding alert.
    -   Vehicle Search: Find alerts only for a specific vehicle by typing or selecting from a dropdown of current vehicles (requires GET /vehicles endpoint).
    -   Date Range Search: Filter alerts based on their timestamps within a chosen date range.

    -   **Show Only False Alarms (Additional)**: This only show alerts that are marked false. So, in future can be tracked easily if something happens accidently.

-   False Alarm Marking: Users can mark displayed alerts as false positives, potentially informing future model training.

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Tech Stack

**Client:** React, Moment.js, Material UI, TailwindCSS

**Database:** Browser's local storage. Due to this we can retain data(like which alarm is marked false).

## Author

-   [@ArundhathiSingh](https://github.com/ArundhathiSingh)
