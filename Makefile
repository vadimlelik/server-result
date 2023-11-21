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


