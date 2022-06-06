# build docker image for production
docker compose -f docker-compose.prod.yml build

# tag image for heroku
docker tag hydens-bookshelf-prod registry.heroku.com/hydens-bookshelf/web

# push image to heroku registry
heroku container:push web -a hydens-bookshelf

# release the container
heroku container:release web -a hydens-bookshelf
