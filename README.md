# mingster.github.io

the blog is powered by [hexo](https://github.com/hexojs/hexo?tab=readme-ov-file)

## Setup

- instal hexo if not yet do so.

	```
	brew install hexo
	```

- initial new blog

	```
	cd ~/GitHub/mingster.com
	hexo init blog
	```

- Create a new post

	```
	cd blog
	hexo new "Hello Hexo"
	```

- Generate static files

	```
	hexo generate
	```


- install theme
	
	```
	cd blog
	git clone https://github.com/fluid-dev/hexo-theme-fluid.git themes/fluid
	```
	
	edit _config.yml
	
	```
	theme: fluid
	```
	 
## References

- [theme-concise](https://github.com/sanonz/hexo-theme-concise)
- 