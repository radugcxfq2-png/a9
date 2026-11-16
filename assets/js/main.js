(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var sf=$('sm-f');if(sf){var bx=[].slice.call(sf.querySelectorAll('input'));
 on(bx,function(){var v=0,lap=false,n=0;bx.forEach(function(b){if(b.checked){v+=parseFloat(b.value);n++;if(b.getAttribute('data-lap'))lap=true;}});v*=1.25;
  var r=v<=1.2?['Mini','about 18 x 12 x 6 cm','A clutch or mini crossbody is enough.']:v<=3?['Small','about 22 x 15 x 8 cm','A small crossbody or top-handle bag will hold this neatly.']:v<=6?['Medium','about 28 x 20 x 11 cm','A medium shoulder bag or satchel is the right everyday size.']:v<=11?['Large','about 34 x 26 x 13 cm','Look at large shoulder bags and soft bucket shapes.']:['Tote','about 40 x 30 x 15 cm','Only a tote will carry this comfortably.'];
  var h=n?'<strong>'+r[0]+'</strong><p>'+r[1]+', roughly '+v.toFixed(1)+' litres with room to spare.</p><p>'+r[2]+'</p>':'<p>Tick at least one item to see a size.</p>';
  if(lap)h+='<p>For the laptop, check the interior is at least 33 cm wide and choose a flat, reinforced base.</p>';
  if(n&&v>8)h+='<p>That is a heavy load. Wide straps, or carrying across the body, will be kinder to your shoulder.</p>';
  $('sm-r').innerHTML=h;});}
var cw=$('cp-w');if(cw){var cg=$('cp-g'),ch=$('cp-h'),C={neutral:{blend:[['Tan','#B5804F'],['Taupe','#8E7F70'],['Ivory','#EFE6D5']],contrast:[['Forest','#2F4A3A'],['Oxblood','#7A2331'],['Navy','#1F2D4A']]},navy:{blend:[['Navy','#1F2D4A'],['Cognac','#9A5B2E'],['Grey','#8A8D91']],contrast:[['Tan','#B5804F'],['Mustard','#C9982E'],['Red','#A32A2A']]},black:{blend:[['Black','#1B1B1B'],['Charcoal','#444548'],['Dark brown','#4A3324']],contrast:[['Burgundy','#6E1F2B'],['Emerald','#1F6B52'],['Cobalt','#27479A']]},earth:{blend:[['Chocolate','#4A3324'],['Olive','#5E6238'],['Rust','#A4522B']],contrast:[['Cream','#EFE6D5'],['Teal','#256A6E'],['Mustard','#C9982E']]},bright:{blend:[['Tan','#B5804F'],['White','#F6F3EC'],['Black','#1B1B1B']],contrast:[['Stone','#B9AE9C'],['Navy','#1F2D4A'],['Soft gold','#C6A867']]},pastel:{blend:[['Stone','#B9AE9C'],['Blush','#E3C2BC'],['Pale grey','#C9CBCD']],contrast:[['Cognac','#9A5B2E'],['Navy','#1F2D4A'],['Deep green','#2F4A3A']]}};
 on([cw,cg,ch],function(){var s=C[cw.value][cg.value];
  $('cp-r').innerHTML='<strong>'+s[0][0]+', '+s[1][0]+' or '+s[2][0]+'</strong><div class="hb-sw">'+s.map(function(x){return '<span><i style="background:'+x[1]+'"></i>'+x[0]+'</span>';}).join('')+'</div><p>'+(ch.value==='gold'?'Gold and brass hardware sit best on warm shades. Of these, start with '+s[0][0].toLowerCase()+'.':'Silver and nickel hardware suit cooler, deeper shades and look crisp against dark leather.')+'</p><p>'+(cg.value==='blend'?'A bag close in tone to your clothes lengthens the outfit and never competes with it.':'One contrasting bag lifts a quiet wardrobe. Repeat its colour once elsewhere, in a scarf or shoes.')+'</p>';});}
var oo=$('oc-o');if(oo){var oc=$('oc-c'),O={office:['Structured satchel or tote','Medium to large','Zip top','Choose a flat base so it stands beside a desk, and an interior pocket for a phone.'],weekend:['Crossbody or bucket bag','Small to medium','Zip or drawstring','Soft leather and a relaxed shape suit a day on foot.'],evening:['Clutch or mini top-handle','Mini','Clasp or magnetic flap','Carry only a phone, cards, keys and one cosmetic.'],travel:['Zipped crossbody','Small to medium','Full zip, worn to the front','Pick a bag with an outside pocket for documents and a strap you can adjust.'],wedding:['Top-handle or clutch','Mini to small','Clasp','Keep to smooth leather or satin in one plain colour so it works in photographs.'],errands:['Lightweight tote or crossbody','Medium','Zip or centre clasp','Light weight matters most; look for under 700 g empty.']},K={shoulder:'For the shoulder, look for a strap drop of 22 to 25 cm so it clears a coat sleeve.',cross:'Worn across the body, the bag should rest at the hip bone; check the strap adjusts to at least 110 cm.',hand:'Carried in the hand, a rolled handle is more comfortable than a flat one over a long day.'};
 on([oo,oc],function(){var r=O[oo.value];$('oc-r').innerHTML='<strong>'+r[0]+'</strong><p><b>Size:</b> '+r[1]+'<br><b>Closure:</b> '+r[2]+'</p><p>'+r[3]+'</p><p>'+K[oc.value]+'</p>';});}
})();
