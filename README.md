# creating a docker image with a simple node js project, 
building the docker - 
sudo docker build -t node-docker .

 and then running

 sudo docker run -it -p 8000:8080 node-docker

 and then try localhost:8000 in the browser
