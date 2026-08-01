COMMIT & DEPLOY NEW CHANGES FOR ALL DEVELOPERS AT SAME BRANCH

Let's say you want to add a new article:

STEP 1: MAKE YOUR CHANGES LOCALLY
Option A: Add a New Blog Post
Open src/data/blogs.json in your editor
Find the end of the blogs array
Add a new blog object in JSON file 
Save all files 

STEP 2: TEST CHANGES LOCALLY
Before pushing to GitHub, test your changes:

Bash

# Start dev server
npm run dev
This runs at: http://localhost:5173/

Check:

  New content appears
  No console errors
  Design looks good
  Everything works as expected
To stop dev server, press Ctrl + C

STEP 3: REBUILD FOR PRODUCTION
Once you're happy with changes:

Bash

# Build for production
npm run build
You should see:

text

✓ built in 779ms
dist/assets/index-xyz.css
dist/assets/index-xyz.js

STEP 4: CHECK WHAT CHANGED
Open Command Prompt and check Git status:

Bash

# See all changes
git status
You should see:

text

On branch main
Changes not staged for commit:
  (use "git add <file>..." to update the index)
  (use "git restore <file>..." to discard changes)
        modified:   src/data/blogs.json
        modified:   dist/assets/index-xyz.js
        modified:   dist/assets/index-xyz.css

Untracked files:
  (use "git add <file>..." to update the index)
        dist/assets/index-new.js
        dist/assets/index-new.css


STEP 5: ADD ALL CHANGES TO GIT
Bash

# Add all modified files
git add .
Verify what will be added:

Bash

git status
All changes should now be in green (staged).

STEP 6: CREATE A COMMIT MESSAGE
A good commit message describes what changed:

Bash

# Format: git commit -m "type: description"

# Examples:
git commit -m "feat: add new blog post about React hooks"
git commit -m "fix: update navigation styling"
git commit -m "update: modify blog content"
git commit -m "docs: update README"
git commit -m "style: improve homepage design"
Good commit messages:

Clear and descriptive
Start with lowercase
Explain WHAT changed
Keep it concise
Example:

Bash

git commit -m "Add new blog: JavaScript Performance Tips"
STEP 7: PUSH TO GITHUB
Push your committed changes to GitHub:

Bash

git push origin main
You should see:

text
..............
.................
Push successful!

STEP 8: CLOUDFLARE AUTO-DEPLOYS
Cloudflare automatically detects your push and:

Pulls latest code from GitHub
Runs npm run build
Deploys new version, takes 2-5 minutes
You can watch the deployment in Cloudflare dashboard:
https://dash.cloudflare.com → Workers & Pages → Pages → Your project

STEP 9: VERIFY CHANGES ARE LIVE
After 2-5 minutes, visit your site:

text

changes are live now

COMPLETE WORKFLOW SUMMARY
Here's the quick reference for all steps:

Bash

# 1. Make changes to files
# (Edit src/data/blogs.json, components, etc.)

# 2. Test locally
npm run dev
# Visit http://localhost:5173/
# Check everything works
# Press Ctrl + C to stop

# 3. Build for production
npm run build

# 4. Check changes
git status

# 5. Add all changes
git add .

# 6. Commit with message
git commit -m "Add new blog post: Your Title"

# 7. Push to GitHub
git push origin main

# 8. Wait 2-5 minutes for Cloudflare to deploy

# 9. Visit your site to verify changes
# https://personal-blog.jah267478.workers.dev/
COMMON TASKS
Add New Blog Post
Bash

# 1. Edit src/data/blogs.json - add new article
# 2. npm run build
# 3. git add .
# 4. git commit -m "Add blog: Your Title"
# 5. git push origin main
Update Blog Post
Bash

# 1. Edit src/data/blogs.json - modify article
# 2. npm run build
# 3. git add .
# 4. git commit -m "Update blog: Your Title"
# 5. git push origin main
Change Design/Colors
Bash

# 1. Edit src/index.css - modify styles
# 2. npm run build
# 3. git add .
# 4. git commit -m "style: update homepage design"
# 5. git push origin main
Add New Page/Component
Bash

# 1. Create new files in src/components/ or src/pages/
# 2. Edit src/App.jsx - add route
# 3. npm run build
# 4. git add .
# 5. git commit -m "feat: add new feature"
# 6. git push origin main
Fix Bug
Bash

# 1. Find and fix the bug in code
# 2. npm run build
# 3. git add .
# 4. git commit -m "fix: resolve navigation bug"
# 5. git push origin main
📊 GIT COMMANDS REFERENCE
Command	What it does
git status	See what changed
git add .	Stage all changes
git add filename	Stage specific file
git commit -m "msg"	Create save point
git push origin main	Upload to GitHub
git log --oneline	See commit history
git diff	See exact changes

CAUTION: IMPORTANT NOTES
Always rebuild before pushing:

Bash

npm run build
Always add dist folder:

Bash

git add .  # Includes dist/
Use meaningful commit messages:

 git commit -m "update"
 git commit -m "Add new blog post about React"
Check locally first:

Bash

npm run dev
Don't push broken code!

Wait for deployment:
After pushing, wait 2-5 minutes before checking live site.

MADE A MISTAKE?
Before pushing (haven't run git push):
Bash

# Undo last commit but keep changes
git reset --soft HEAD~1

# Or discard last commit completely
git reset --hard HEAD~1
After pushing (already on GitHub):
Bash

# Make new commit that fixes it
# Then push again
git add .
git commit -m "fix: resolve previous issue"
git push origin main
Now you can:

 Add new blog posts
 Edit existing content
 Change design
 Fix bugs
 Deploy instantly


If you get stuck:

Check Git status:

Bash

git status
See what changed:

Bash

git diff
Check commit history:

Bash


Happy Coding :) -Dev

git log --oneline
Your blog is ready for continuous updates! 🚀
