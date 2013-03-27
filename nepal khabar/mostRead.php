
<div id="sideBarContent">
<h2 style="border-bottom:1px solid #CCC;" align="center">Most Read</h2>
<div id="sideNavBar">
<ul>
        <li><a href="javascript:void(0);" id="tab1" class="selected">Politics</a></li>
		<li><a href="javascript:void(0);" id="tab2">Economy</a></li>
		<li><a href="javascript:void(0);" id="tab3">Sports</a></li>
		<li><a href="javascript:void(0);" id="tab4">Tech</a></li>
		
</ul>
</div>

<div id="content">
	<p id="content_changer">You have selected Tab 1</p>
	<p>See the page source for full code</p>
</div>

</div>

<script type="text/javascript">
	$(document).ready(function(){
		$('#navigation ul a').click(function(){
			$('#navigation ul a').removeClass('selected');
			$(this).addClass('selected');
			$('#content_changer').html('You have selected '+ $(this).html());
		});
	});
	
	</script>