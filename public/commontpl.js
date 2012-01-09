<script type="text/javascript" charset="utf-8">
  Handlebars.registerHelper('sy_date', function(date_string) {
    var date = date_string.replace(/\-/g, '/')
        date = Date.parse(date)
          if (!isNaN(date)){
            var ary = new Date(date).toDateString().split(' ');
            // ary.pop();
            ary.shift();
            return ary.join(' ');
          }
    return date_string;
  });


Handlebars.registerHelper('ifEql', function(v1, v2, options) {
  var condition = (v1 === v2);
  if(condition){  
    return options.fn(this);
  }else{
    return options.inverse(this);
  }
});


</script>
  
  
  
  <script id="group_events_tpl" type="text/x-handlebars-template">
    {{#if itemCount}}
      <div class="fromsy ">
        <div class="sy-events">
          
          {{#each items}}
            <div class="sy-event ">
              
              {{#if calendar.title}}
                <div class="sy-title"><span>{{calendar.title}}</span></div>
                  {{/if}}
                   
                   {{#ifEql calendar.start_date calendar.end_date}} 
                     
                     
                     
                     {{#if calendar.start_date}} 

<div class="sy-startdate">
  <span class="sy-heading">Event Date : </span>{{sy_date calendar.start_date}}
    <span class="sy-day">&nbsp;</span>
      <span class="sy-month">&nbsp;</span>
        <span class="sy-year">&nbsp;</span>
          </div>
          {{/if}}
            
            {{else}} 
             
             {{#if calendar.start_date}} 
             <div class="sy-startdate">
               <span class="sy-heading">Start Date : </span>{{sy_date calendar.start_date}}
                 <span class="sy-day">&nbsp;</span>
                   <span class="sy-month">&nbsp;</span>
                     <span class="sy-year">&nbsp;</span>
                       </div>
                       {{/if}}            
                         
                         {{#if calendar.end_date}}  
                         <div class="sy-enddate">
                           <span class="sy-heading">End Date : </span>{{sy_date calendar.end_date}}
                             <span class="sy-day">&nbsp;</span>
                               <span class="sy-month">&nbsp;</span>
                                 <span class="sy-year">&nbsp;</span>
                                   </div>
                                   {{/if}}                       
                                     
                                     
                                     
                                     
                                     
                                     {{/ifEql}}                                              
                                       <div class="sy-data">
                                         
                                         {{#if calendar.description}}
                                      <div class="sy-detail">
                                        {{{calendar.description}}} 
                                    </div>
                                      {{/if}}   
                                        
                                        {{#if calendar.has_downloads}}
                                        <div class="sy-attachment">
                                          <a href="{{../../syurl}}/publik/download/{{calendar.id}}" target="_blank">Click here to download</a>
                                            </div>  
                                            {{/if}} 
                                              
                                              {{#if calendar.location}}
                                              <div class="sy-Location">
                                                <span class="sy-heading">Location :</span> {{calendar.location}}
                                                  </div> 
                                                  {{/if}}
                                                    
                                                    </div>
                                                    
                                                    </div>  
                                                    {{/each}}
                                                      
                                                      </div> 
                                                      </div>    
                                                      {{else}}
                                                       <p>Not Available</p>
                                                         {{/if}}
                                                           </script>
                                                           <!-- ---------------------------------------------- -->
                                                           <script id="group_announcements_tpl" type="text/x-handlebars-template">  
                                                             
                                                             {{#if itemCount}}
                                                          <div class="fromsy ">
                                                            <div class="sy-events">
                                                              
                                                              {{#each items}}
                                                       
                                                       {{#if announcement.title}}                                                   
                                                       <div class="sy-title"><span>{{announcement.title}}</span></div>                                           
                                                         {{/if}}
                                                          <!--
                                                          {{#if announcement.created_at}}
                                                     <div class="sy-startdate">
                                                       <span class="sy-heading">Start Date :</span>{{sy_date announcement.created_at}}
                                                         <span class="sy-day">&nbsp;</span>
                                                           <span class="sy-month">&nbsp;</span>
                                                             <span class="sy-year">&nbsp;</span>
                                                               </div>
                                                               
                                                               {{/if}}
                                                                 {{#if announcement.expiration}}      
                                                                 <div class="sy-enddate">
                                                                   <span class="sy-heading">End Date :</span>{{sy_date announcement.expiration}}
                                                                     <span class="sy-day">&nbsp;</span>
                                                                       <span class="sy-month">&nbsp;</span>
                                                                         <span class="sy-year">&nbsp;</span>
                                                                           </div>
                                                                           {{/if}}   -->   
                                                                             <div class="sy-data">
                                                                               
                                                                               {{#if announcement.content}}
                                                                            <div class="sy-detail">
                                                                              {{{announcement.content}}}
                                                                </div>
                                                                  {{/if}}
                                                                    
                                                                    {{#if announcement.has_downloads}}
                                                                    <div class="sy-attachment">
                                                                      <a href="{{../../syurl}}/publik/download/{{announcement.id}}" target="_blank">
                                                                        Click here to download
                                                                          </a>
                                                                          </div>  
                                                                          {{/if}}  
                                                                            
                                                                            </div>  
                                                                            
                                                                            {{/each}}
                                                                              
                                                                              </div>
                                                                              </div>  
                                                                              {{else}}
                                                                               <p>Not Available</p>
                                                                                 {{/if}}  
                                                                                   
                                                                                   </script>            
                                                                                   
                                                                                   <!-- ----------------------------------------------------------------------------- -->
                                                                                   <script id="group_forms_tpl" type="text/x-handlebars-template">  
                                                                                     
                                                                                     {{#if itemCount}}
                                                                                  <div class="fromsy ">
                                                                                    <div class="sy-events">
                                                                                      
                                                                                      {{#each items}}
                                                                               
                                                                               {{#if form.title}}                                                   
                                                                               <div class="sy-title"><span>{{form.title}}</span></div>                                           
                                                                                 {{/if}}
                                                                                  <!--
                                                                                  {{#if form.created_at}}
                                                                             <div class="sy-startdate">
                                                                               <span class="sy-heading">Start Date :</span>{{sy_date form.created_at}}
                                                                                 <span class="sy-day">&nbsp;</span>
                                                                                   <span class="sy-month">&nbsp;</span>
                                                                                     <span class="sy-year">&nbsp;</span>
                                                                                       </div>
                                                                                       
                                                                                       {{/if}}
                                                                                         {{#if form.expiration}}      
                                                                                         <div class="sy-enddate">
                                                                                           <span class="sy-heading">End Date :</span>{{sy_date form.expiration}}
                                                                                             <span class="sy-day">&nbsp;</span>
                                                                                               <span class="sy-month">&nbsp;</span>
                                                                                                 <span class="sy-year">&nbsp;</span>
                                                                                                   </div>
                                                                                                   {{/if}}   -->   
                                                                                                     <div class="sy-data">
                                                                                                       
                                                                                                       {{#if form.content}}
                                                                                                    <div class="sy-detail">
                                                                                                      {{{form.content}}}
                                                                                        </div>
                                                                                          {{/if}}
                                                                                            
                                                                                            {{#if form.has_downloads}}
                                                                                            <div class="sy-attachment">
                                                                                              <a href="{{../../syurl}}/publik/download/{{form.id}}" target="_blank">
                                                                                                {{form.title}}
                                                                                           </a>
                                                                                             </div>  
                                                                                             {{/if}}  
                                                                                               
                                                                                               </div>  
                                                                                               
                                                                                               {{/each}}
                                                                                                 
                                                                                                 </div>
                                                                                                 </div>  
                                                                                                 {{else}}
                                                                                                  <p>Not Available</p>
                                                                                                    {{/if}}  
                                                                                                      
                                                                                                      </script> 
                                                                                                      
                                                                                                      
                                                                                                      
                                                                                                      
                                                                                                      