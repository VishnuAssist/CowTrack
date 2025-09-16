1. Check your current remotes

Run:

git remote -v


You will probably see something like:

origin  https://github.com/bloomui/tokyo-free-white-react-admin-dashboard.git (fetch)
origin  https://github.com/bloomui/tokyo-free-white-react-admin-dashboard.git (push)

2. Remove the old remote

Run:

git remote remove origin

3. Add your new remote

Run:

git remote add origin https://github.com/VishnuAssist/CowTrack.git

4. Push your code

Run:

git push -u origin main


Now your main branch will be linked to your new repo (VishnuAssist/CowTrack), and you should be able to push without a 403 error.