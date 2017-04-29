// import './materials.js'
$(document).ready(function() {

var hitBtn = $('button.damage'),
      reset = $('button.reset'),
      hBar = $('.health-bar'),
      bar = hBar.find('.bar'),
      hit = hBar.find('.hit'),
      simulate = $('#materials');
      
var hp = 100
      
  
  hitBtn.on("click", function(){
      console.log("foo")
    var total = hBar.data('total'),
        value = hBar.data('value');
    
    if (value < 0) {
			console.log("you dead, reset");
      return;
    }
    // max damage is essentially quarter of max life
    var damage = Math.floor(Math.random()*total);
    // damage = 100;
    var newValue = value - damage;
    // calculate the percentage of the total width
    var barWidth = (newValue / total) * 100;
    var hitWidth = (damage / value) * 100 + "%";
    
    // show hit bar and set the width
    hit.css('width', hitWidth);
    hBar.data('value', newValue);
    
    setTimeout(function(){
      hit.css({'width': '0'});
      bar.css('width', barWidth + "%");
    }, 500);
    //bar.css('width', total - value);
    
    console.log(value, damage, hitWidth);
    
    if( value < 0){
      console.log("DEAD");
    }
  });
  
  reset.on('click', function(e){
    hBar.data('value', hBar.data('total'));
    
    hit.css({'width': '0'});
    
		bar.css('width', '100%');
		console.log("resetting health to 1000");
  });
  
  function disasterHurricane(house_resistance){
      hp = hp - ((25));
      //console.log(hp)
  }
  
  simulate.on('submit', function(){
    console.log("simulate clicked")
    var years=2017;
    hp = 100;
    $("#output").html("")
    while ((hp > 0) && years < 2300){
        years++;
        var x = Math.floor((Math.random() * 50) + 1);
        if ((0 <= x) & (x <= 5)){
          $("#output").html($("#output").html() + "<br/>" + "Hurricane! hit on the year " + years);
            disasterHurricane();
        }
        else if ((6 <= x) & (x <= 7)){
          $("#output").html($("#output").html() + "<br/>" + "Flood! hit" + years);
            console.log('disasterFlood')
        }
        else if ((8 <= x) & (x <= 10)){
          $("#output").html($("#output").html() + "<br/>" + "Earthquake! hit" + years);
            console.log('disasterEarthquake')
        }
        else{
            console.log("no disaster");
        }
      console.log(x);
    }
    $("#output").html($("#output").html() + "<br/>" + "Your house was resilient, but it fell down in the year " + years);
    hp = 100;
  });
  
});