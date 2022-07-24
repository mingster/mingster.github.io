# mingster.github.io

this is my personal website to keep notes.

It is automatically transformed by [Jekyll](https://github.com/mojombo/jekyll) into a static site.

## Setup

#### 1. Install Ruby
Ruby and RubyGems are usually installed by default on Macs. If you are using the version from mac default, permission issues will occur.

[Jekyll on macOS](https://jekyllrb.com/docs/installation/macos/)




#### 2. Install Bundler to manage dependencies

[Bundler](http://bundler.io) handles Ruby dependencies. To install it, simply
run:

```bash
gem install bundler
```

Once you have installed it, `cd` into the local clone of your fork and run:

```bash
bundle add webrick

bundle install
```
This will read the GemFile to download and install the necessary dependencies.

#### 3. Run Jekyll

In order to run a development server (with live-reloading on) just run:

```bash
bundle exec jekyll build && bundle exec jekyll serve --incremental
```

The generated site will be available at [http://localhost:4000](http://localhost:4000). You can stop the
server with <kbd>Ctrl</kbd>-<kbd>C</kbd>.

The generated "static" website is under "_site" directory. So don't edit the generated folder.


#### 4. Make your changes and push them

Now you're ready to make your changes! Be sure to test the changes locally using
the development server. Once you're done with your changes, push those changes
to your fork and then [submit a **pull
request**](https://help.github.com/articles/using-pull-requests/). For a nice
wrap-up on how to open a good pull request have a look at the [Elixir
contributing
guide](https://github.com/elixir-lang/elixir/#contributing).

#### 5. Upgrade if needed
```
sudo gem update jekyll
```

## References
 - [Install Jekyll on Mac](https://securityrat.github.io/mydoc_install_jekyll_on_mac.html)
 - [Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)
