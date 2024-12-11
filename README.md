# Changi Airport Check-In System

This project represents an improved Human-Computer Interaction (HCI) version of the Singapore Changi Airport eGate system. It provides an intuitive and user-friendly interface for travelers to check in seamlessly, integrating enhanced audio and visual feedback along with multilingual support for a diverse user base.

# Installation Instructions

Open your terminal and enter the following commands:

cd "my-project"

npm install

npm run dev

After running npm run dev, a link will appear. Use Ctrl + Click to open the system in your browser: http://localhost:5173.

System Navigation and Usage

Audio Features: Ensure your audio is enabled to experience the system's sound features.

Navigation: Use keyboard inputs to navigate through the system pages.

Help Button: Each page includes an assistant help button for guidance. Press "2" to close any pop-up messages.

Language Options: Select your preferred language for the check-in experience. Supported languages include English, Chinese, Malay, and Tamil.

#System Flow

## 1. Welcome Page

Press "1" to begin passport scanning.

## 2. Passport Scanning Page

Press "1" if the passport scan is successful, or "2" if it fails.

Success: A success message will appear, redirecting you to the Face Scanner page.

Failure: You will be taken to the Passport Scan Failed page with an error prompt. Press "1" to retry the scan.

## 3. Face Scanner Page

Position your face within the frame. Use the following keys for adjustments:

Press "4" for "Look a bit lower."

Press "5" for "Look a bit higher."

For face scan results:

Press "1" for Success (Green Glow).

Press "2" for Failure (Red Glow).

Press "6" to mark Success and Redirect.

Press "7" to mark Failure and Redirect to Finger Scanning.

## 4. Finger Scanning Page (if redirected)

Press "1" to begin fingerprint scanning.

When prompted, press:

"1" for a successful scan.

"2" for a failed scan.

