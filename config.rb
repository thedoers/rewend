require 'builder'
require 'susy'

activate :deploy do |deploy|
  deploy.method = :ftp
  deploy.host = "web332.webfaction.com"
  deploy.user = "piermaria"
  deploy.password = "Nonmelaricordo2"
  deploy.path = "/home/piermaria/webapps/devrewend"
  deploy.build_before = true
end



activate :bower
activate :automatic_image_sizes
activate :livereload
activate :i18n, :mount_at_root => :en

page "/it/", :layout => :html5
page "/", :layout => :html5
page "/404.html", :layout => :html5
page "/sitemap.xml", :layout => false

set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'images'
set :fonts_dir, 'fonts'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # # Minify Javascript on build
  activate :minify_javascript
  activate :minify_html
  # # Create favicon/touch icon set from source/favicon_base.png
  activate :favicon_maker

  # # Enable cache buster
  activate :cache_buster
  #activate :image_optim

  # # Use relative URLs
  #activate :relative_assets
  # # To put width and height inside tag and to compression

  activate :gzip
  #activate :smusher

  # Or use a different image path
  #set :http_path, "http://thedoers.co/"
end
