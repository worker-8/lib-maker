PHONY: init build

node_modules:
	npm ci

init: node_modules
	git config core.hooksPath .githooks
	chmod +x .githooks/*

build:
	export NODE_ENV=production;\
	./node_modules/.bin/webpack --env.mode=production --progress
