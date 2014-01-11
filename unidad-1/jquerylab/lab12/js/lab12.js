 $(document).ready(function(){
   var members = [14, 15, 56, 77777, 544, 356805836, 4784654];

   $('.originalArray').html(members.join('<br />'));

   var strs = members.join(" ");

   $('.stringArray').text(strs);

   var subStr = strs.substr(0, 3);

   console.log(typeof(subStr));

   $('.partArray').text(subStr);
});