<script type="text/javascript" charset="utf-8">
Handlebars.registerHelper('sy_date', function(date_string, style) {
  var date = date_string.replace(/\-/g, '/')
  date = Date.parse(date)
	if (!isNaN(date)){
		var ary = new Date(date).toDateString().split(' ');
		console.log(ary)
		if(style === 'day'){
			return ary[2]
		}else if(style === 'month'){
			return ary[1]
		}else if(style === 'year'){
			return ary[3]
		}else{
			ary.shift();
			return ary.join(' ');
		}
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
	{{#each items}}
		{{#ifEql calendar.start_date calendar.end_date}}
			{{#if calendar.start_date}} 
				<dd class="col-date">{{sy_date calendar.start_date "month"}}<br/><span>{{sy_date calendar.start_date "day"}}</span></dd>
			{{/if}}
	  {{else}}
	 		<dd class="col-date">
				{{#if calendar.start_date}} 
					{{sy_date calendar.start_date "month"}}<br/><span>{{sy_date calendar.start_date "day"}}</span>
				{{/if}}            
				{{#if calendar.end_date}}  
					<br/>to<br/>{{sy_date calendar.end_date "month"}}<br/><span>{{sy_date calendar.end_date "day"}}</span>
				{{/if}}
			</dd>	                       
	  {{/ifEql}}
		<dd class="col-data">
			{{#if calendar.title}}
				<span>{{calendar.title}}</span><br/>
			{{/if}}
			{{#if calendar.description}}
				{{{calendar.description}}}<br/>
			{{/if}}   
			{{#if calendar.has_downloads}}
				<a href="{{../../syurl}}/publik/download/{{calendar.id}}" target="_blank">Click here to download</a><br/>
			{{/if}} 
			{{#if calendar.location}}
				<span class="sy-heading">Location :</span> {{calendar.location}}<br/>
			{{/if}}
		</dd>
		<dd class="sptr-5"></dd>	
	{{/each}}
{{else}}
	<dd class="col-data">Not Available</dd>
{{/if}}
</script>

<!-- ---------------------------------------------- -->
<script id="group_announcements_tpl" type="text/x-handlebars-template">  
	{{#if itemCount}}
		{{#each items}}
			{{#if announcement.title}}                                                   
				<p class="sy-title"><strong>{{announcement.title}}</strong></p>                                           
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
			{{#if announcement.content}}
				{{{announcement.content}}}
			{{/if}}
			{{#if announcement.has_downloads}}
				<p class="sy-attachment">
				<a href="{{../../syurl}}/publik/download/{{announcement.id}}" target="_blank">
				Click here to download
				</a>
				</p>  
			{{/if}}  
		{{/each}}
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


                                                                                                      
                                                                                                      
                                                                                                      