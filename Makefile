mongo:
	docker run -p 27017:27017 \
		-d \
 		--rm \
	 	--name mongodb \
	 	--network result \
	 	mongo

backend:
	docker run -p 3001:3001 \
		--rm \
		-d \
		--name notes-backend \
		--network result \
		backend-notes


SSH_STRING:=root@83.147.245.222

ssh:
	ssh $(SSH_STRING)

copy-files:
	scp -r ./*  $(SSH_STRING):/root/app
		