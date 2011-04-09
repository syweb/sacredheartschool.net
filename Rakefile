require 'rubygems'
require 'rake/rdoctask'

##############################################################################
# ADD YOUR CUSTOM TASKS IN /lib/tasks
# NAME YOUR RAKE FILES file_name.rake
##############################################################################
begin
  require 'vlad'
  Vlad.load(:scm => :git, :app => nil)
rescue LoadError
  puts "Vlad is required to run deploy tasks"
end
