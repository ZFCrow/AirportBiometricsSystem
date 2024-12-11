Team37's Assignment 5 Studio: Changi Airport Check-In System

Installation Instructions:

1. In your terminal, enter the following commands:
   - cd "my-project"
   - 'npm install'
   - 'npm run dev'

2. After running 'npm run dev', a link will appear. Use Ctrl + Click to open: [http://localhost:5173](http://localhost:5173).

System Navigation and Usage:
- Ensure your audio is enabled to experience the sound features.
- Navigation: Use keyboard inputs to move through pages.
- Help Button: Each page has an assistant help button. Press "2" to close any pop-up messages.
- Language Options: Users can select their preferred language (English, Chinese, Malay, or Tamil) for the check-in experience.

System Flow:
1. Welcome Page:
   - Press "1" to begin passport scanning.

2. Passport Scanning Page:
   - Press "1" if the passport scan is successful, or "2" if it fails.
   - If successful, a success message appears, and you'll be directed to the Face Scanner page.
   - If unsuccessful, you'll be taken to the Passport Scan Failed page with an error prompt. Press "1" to retry the scan.

3. Face Scanner Page:
   - Position your face in the frame. Use the following keys to adjust:
     - Press "4" for "Look a bit lower"
     - Press "5" for "Look a bit higher"
   - For face scan results:
     - Press "1" for Success (Green Glow)
     - Press "2" for Failure (Red Glow)
     - Press "6" to mark Success and Redirect
     - Press "7" for Failure and Redirect to Finger Scanning

4. Finger Scanning Page (if redirected):
   - Press "1" to begin fingerprint scanning.
   - When prompted, press "1" for a successful scan or "2" if the scan fails.#   i n f 2 0 0 2 - t e a m 3 7 - 2 0 2 4  
 