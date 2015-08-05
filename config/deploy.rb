set :repository,  "git@github.com:syweb/sacredheartschool.net.git"
set :user,        "ubuntu"
set :domain,      "#{user}@insightmethods.com"
set :deploy_to,   "/home/#{user}/sites/sacredheartschool.net"
set :port,          4000
set :merb_env,      "preview"
set :processes,     1
set :revision,    "origin/master"


namespace :vlad do

end