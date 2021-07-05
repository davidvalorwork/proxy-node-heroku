git config --global user.name 'David Valor'
git config --global user.email 'davidvalorwork@gmail.com'
git config credential.helper 'store --file ~/.credentialproxy'
git add .
git commit -am update
git pull
git push
git push heroku master
