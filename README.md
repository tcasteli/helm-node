#nodejs-sample app + dockerfile + helmchart

You can go through my medium article for more details - [Nodejs on kubernetes](https://medium.com/@cloudegl/run-node-js-app-using-kubernetes-helm-bb87747785a)


commands used:

minikube start --driver qemu --network socket_vmnet   
minikube delete --all

minikube dashboard

podman build -t tcastelia/node-web-app .
podman push tcastelia/node-web-app       

kubectl get all
minikube service helm-node-helm-chart --url