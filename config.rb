activate :deploy do |deploy|
    deploy.method = :ftp
    deploy.host = "web332.webfaction.com"
    deploy.user = "piermaria"
    deploy.password = "Nonmelaricordo2"
    deploy.path = "/home/piermaria/webapps/devrewend"
    deploy.build_before = true
end

activate :s3_sync do |s3_sync|
  s3_sync.bucket                     = 's3.rewend.co' # The name of the S3 bucket you are targetting. This is globally unique.
  s3_sync.region                     = 'eu-west-1'     # The AWS region for your bucket.
  s3_sync.delete                     = true # We delete stray files by default.
  s3_sync.after_build                = false # We chain after the build step by default. This may not be your desired behavior...
  s3_sync.prefer_gzip                = true
  s3_sync.path_style                 = true
  s3_sync.reduced_redundancy_storage = false
  s3_sync.acl                        = 'public-read'
  s3_sync.encryption                 = false
end

activate :cloudfront do |cf|
  cf.access_key_id = "AKIAIA2PSSK7HQN2O33A"
  cf.secret_access_key = "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"
  cf.distribution_id = ''
  cf.after_build = false
end

require 'builder'

page "/", :layout => :html5
page "/404.html", :layout => :html5


page "/sitemap.xml", :layout => false




require 'susy'


set :css_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'images'


set :fonts_dir, 'fonts'

activate :automatic_image_sizes

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
