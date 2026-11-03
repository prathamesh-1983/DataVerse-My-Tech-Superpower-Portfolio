# DataVerse – My Tech Superpower Portfolio

## Project Overview
This project is a static portfolio website for Prathamesh Desai, designed as a futuristic data analytics command center inspired by a premium dashboard-style aesthetic. The site is built with HTML, CSS, and vanilla JavaScript, and is intended for AWS Amplify Hosting without a backend.

## Challenge Information
This project is developed for the AWS Student Builder Challenge: Build Your Tech Superpower.

## Features
- Fixed desktop sidebar with smooth section navigation
- Futuristic analytics-inspired hero section
- Skills, projects, achievements, and journey sections
- Responsive layout for desktop, tablet, and mobile
- Interactive terminal command center with commands such as help, about, skills, projects, and contact
- Dynamic content driven by a central JavaScript configuration file
- AWS Amplify-ready static deployment configuration

## Technology Stack
- HTML5
- CSS3
- Vanilla JavaScript
- Local SVG graphics and CSS-based artwork

## Project Architecture
```text
DataVerse-Portfolio/
├── index.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── data.js
│   ├── navigation.js
│   ├── terminal.js
│   ├── projects.js
│   ├── skills.js
│   └── animations.js
├── assets/
│   ├── icons/
│   └── illustrations/
├── README.md
├── .gitignore
├── amplify.yml
└── favicon.svg
```

## Installation and Local Run
1. Open a terminal in the project folder.
2. Run:

```bash
py -3 -m http.server 8000
```

3. Open the website in a browser:

```text
http://localhost:8000
```

## How to Customize Profile Data
Edit the profile data in `js/data.js` to update:
- Name
- Title
- Headline
- Education
- About Me text
- Skills
- Projects
- Achievement cards
- Contact links
- Statistics

## How to Test the Terminal
Open the website and click the button labeled "Open Terminal" or use the visible terminal hint in the hero section. Try commands such as:

```text
help
about
skills
projects
journey
superpower
contact
clear
exit
```

## Uploading to GitHub
1. Create a new GitHub repository.
2. Initialize the project with Git and commit the files.
3. Push the repository to GitHub.
4. Connect the repository to AWS Amplify.

## Deploying to AWS Amplify
### 1. AWS account preparation
- Create or sign in to an AWS account.
- Confirm billing is enabled for your account.
- Set a reasonable budget alert in Billing and Cost Management.
- Use least-privilege access only.

### 2. GitHub repository creation
- Create a public or private repository on GitHub.
- Push the portfolio project to that repository.

### 3. GitHub source connection
- Log in to AWS Amplify Console.
- Choose "New app" > "Host web app".
- Select the GitHub source provider.
- Connect the desired repository and branch.

### 4. Repository and branch selection
- Choose the repository containing the portfolio.
- Select the main branch or your deployment branch.

### 5. Amplify deployment
- Amplify will detect a static site configuration.
- No build step is required for this project.
- Confirm the deployment settings and start the deployment.

### 6. Live URL verification
- Wait for amplification to finish the build and deploy process.
- Verify the generated URL loads the site correctly.

### 7. Updating the website through GitHub
- Push new commits to the connected GitHub branch.
- AWS Amplify automatically rebuilds and redeploys the site.

### 8. AWS billing and budget precautions
- Monitor monthly usage in the AWS billing dashboard.
- Set budget alerts for unexpected charges.
- Keep the project static to minimize infrastructure cost.
- Do not store AWS credentials or secrets in the repo.

## AWS Services Used
- AWS Amplify Hosting
- GitHub repository integration

## Screenshots
Add screenshots here after deployment or local preview is complete.

## Live Demo URL
Placeholder: https://drive.google.com/file/d/1TzTRVuoreLG0LZWPllyIKV7RJx1FCbJY/view?usp=sharing

## GitHub Repository
Placeholder: https://github.com/prathamesh-1983/DataVerse-My-Tech-Superpower-Portfolio

## Future Improvements
- Add richer project case studies
- Add real screenshots and portfolio assets
- Improve motion design and micro-interactions
- Integrate contact form or newsletter box
- Add multilingual support or dark/light themes

## Learning Outcomes
- Strengthened frontend layout and design implementation
- Improved responsive design and accessibility practices
- Increased confidence with JavaScript interactivity and UI behavior
- Gained experience with static hosting and cloud deployment basics

## Notes
This project is intentionally static and does not require a backend or environment variables for normal operation. The project should work offline after local assets are loaded.
