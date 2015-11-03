// jshint devel:true
$(document).ready(function() {


$(function() {
    $( "#accordion" ).accordion({
    		active: false,
  			collapsible: true,
    });
  });


//Quick Quote choices  

var selectorSize = '#dog-size-menu li';

$(selectorSize).on('click', function(){
	$(selectorSize).removeClass('dog-size');
    $(this).addClass('dog-size');
    myDogSize = $('.dog-size').text();
    console.log(myDogSize);
    $('#dog-size-button').text(myDogSize).css('font-size', '12px');
});

var selectorHair = '#hair-menu li';

$(selectorHair).on('click', function(){
	$(selectorHair).removeClass('hair-length');
    $(this).addClass('hair-length');
    var myDogHair = $('.hair-length').text();
    console.log(myDogHair);
    $('#hair-length-button').text(myDogHair).css('font-size', '12px');
});

var selectorService = '#service-menu li';

$(selectorService).on('click', function(){
	$(selectorService).removeClass('service-type');
    $(this).addClass('service-type');
    var myDogService = $('.service-type').text();
    console.log(myDogService);
    $('#service-type-button').text(myDogService).css('font-size', '12px');
});


//Which Dog Size script to run
$('#estimate-button').on('click', function(){

  if (($('#hair-length-button').text() !='Short Hair') && ($('#hair-length-button').text() !='Med-Long Hair')){  
    //output final cost for Small Dog
    $('#final-estimate-min').text("You did not choose a hair type!").css('font-size', '12px');
    $('#final-estimate-max').text();
    //output div to show final cost estimate
    $(".total").addClass('js-total');

    return;
    
  } else if (($('#service-type-button').text() !='Bath & Brush only') && ($('#service-type-button').text() !='Bath & Full Groom') && ($('#service-type-button').text() !='Doggie Day Spa') && ($('#service-type-button').text() !='Puppy Intro')){
    //output warning to choose all 3 types
    $('#final-estimate-min').text("You did not choose a service!").css('font-size', '12px');
    $('#final-estimate-max').text();
    //output div to show final cost estimate
    $(".total").addClass('js-total');

    return;
    
  } else

  if (myDogSize === "Small: Under 10 lbs"){
      smallDogPrices();
  } else if (myDogSize === "Medium: 11-25 lbs"){
      mediumDogPrices();
  } else if (myDogSize === "Mid: 26-45 lbs"){
      midDogPrices();
  } else if (myDogSize === "Large: 46-75 lbs"){
      largeDogPrices();
  } else if (myDogSize === "Giant: 76-115 lbs"){
      giantDogPrices();
  } else if (myDogSize === "XXL: Over 116 lbs"){
      xxlDogPrices();
  }
});


//Small Dog script
function smallDogPrices(){
 


  //Define prices for small dog
  var shortBrushMin = 12;
  var shortBrushMax = 25;
  var longBrushMin = 21;
  var longBrushMax = 26;

  var groomMin = 30;
  var groomMax = 40;


  var puppy = 20;
  var spaMin = 40;
  var spaMax = 50;

  var flea = 4;
  var soother = 4;
  var oatmeal = 4;
  var amino = 3.50;

  var subTotalMin;
  var subTotalMax;

  //define function for Small Dog checked options
  var checkedSmallOptions = function(){
    if ($('.flea_bath input').prop('checked')) {
	    subTotalMin += flea;
	    subTotalMax += flea;                
	  }
    if ($('.soother_shampoo input').prop('checked')) {
      subTotalMin += soother;
      subTotalMax += soother;                
	  }
	  if ($('.oatmeal_shampoo input').prop('checked')) {
      subTotalMin += oatmeal;
      subTotalMax += oatmeal;                
	  }

	  if ($('.aminoflex input').prop('checked')) {
      subTotalMin += amino;
      subTotalMax += amino;                
	  }

	  //output final cost for Small Dog
    if ($('.service-type').text() === "Puppy Intro") {
      $('#final-estimate-min').text("$" + subTotalMin).css('font-size', '18px');
      $('#final-estimate-max').text("");
    } else {
  	  $('#final-estimate-min').text("$" + subTotalMin + " - ").css('font-size', '18px');
  	  $('#final-estimate-max').text("$" + subTotalMax);
    }
	  //output div to show final cost estimate
	  $(".total").addClass('js-total');
  };


  //determine which options were selected for a small dog with short hair brush only
  if (($('.dog-size').text() === "Small: Under 10 lbs") && ($('.hair-length').text() === "Short Hair") && ($('.service-type').text() === "Bath & Brush only")){
    subTotalMin = shortBrushMin;
    subTotalMax = shortBrushMax;
  } else if 
  //selected for a small dog with long hair brush only
  (($('.dog-size').text() === "Small: Under 10 lbs") && ($('.hair-length').text() === "Med-Long Hair") && ($('.service-type').text() === "Bath & Brush only")){
    subTotalMin = longBrushMin;
    subTotalMax = longBrushMax;
  } else if 
      //selected for a small dog with short hair full groom
  (($('.dog-size').text() === "Small: Under 10 lbs") && ($('.hair-length').text() === "Short Hair") && ($('.service-type').text() === "Bath & Full Groom")){
    subTotalMin = groomMin;
    subTotalMax = groomMax;
  } else if 
  //selected for a small dog with long hair full groom
  (($('.dog-size').text() === "Small: Under 10 lbs") && ($('.hair-length').text() === "Med-Long Hair") && ($('.service-type').text() === "Bath & Full Groom")){
    subTotalMin = groomMin;
    subTotalMax = groomMax;
  } else if 

  //selected for a small dog Day Spa
  (($('.dog-size').text() === "Small: Under 10 lbs") && ($('.service-type').text() === "Doggie Day Spa")){
    subTotalMin = spaMin;
    subTotalMax = spaMax;
  } else if

  //selected for a small dog Puppy Intro
  (($('.dog-size').text() === "Small: Under 10 lbs") && ($('.service-type').text() === "Puppy Intro")){
    subTotalMin = puppy;
    subTotalMax = puppy;
  };
      
  checkedSmallOptions();

};

});

//Medium Dog script
function mediumDogPrices(){
  //Define prices for medium dog
  var shortBrushMin = 16;
  var shortBrushMax = 25;
  var longBrushMin = 27;
  var longBrushMax = 40;

  var groomMin = 36;
  var groomMax = 48;


  var puppy = 28;
  var spaMin = 52;
  var spaMax = 65;

  var flea = 6;
  var soother = 6;
  var oatmeal = 6;
  var amino = 4;

  var subTotalMin;
  var subTotalMax;

  //define function for checked options
  var checkedOptions = function(){
      if ($('.flea_bath input').prop('checked')) {
      subTotalMin += flea;
      subTotalMax += flea;                
	  }
    if ($('.soother_shampoo input').prop('checked')) {
      subTotalMin += soother;
      subTotalMax += soother;                
	  }
	  if ($('.oatmeal_shampoo input').prop('checked')) {
      subTotalMin += oatmeal;
      subTotalMax += oatmeal;                
	  }

	  if ($('.aminoflex input').prop('checked')) {
      subTotalMin += amino;
      subTotalMax += amino;                
	  }
    //output final cost for medium Dog
    if ($('.service-type').text() === "Puppy Intro") {
      $('#final-estimate-min').text("$" + subTotalMin).css('font-size', '18px');
      $('#final-estimate-max').text("");
    } else {
      $('#final-estimate-min').text("$" + subTotalMin + " - ").css('font-size', '18px');
      $('#final-estimate-max').text("$" + subTotalMax);
    }
	  //output div to show final cost estimate
	  $(".total").addClass('js-total');
	};


  //determine which options were selected for a medium dog with short hair brush only
  if (($('.dog-size').text() === "Medium: 11-25 lbs") && ($('.hair-length').text() === "Short Hair") && ($('.service-type').text() === "Bath & Brush only")){
    subTotalMin = shortBrushMin;
    subTotalMax = shortBrushMax;
  } else if 
  //selected for a medium dog with long hair brush only
  (($('.dog-size').text() === "Medium: 11-25 lbs") && ($('.hair-length').text() === "Med-Long Hair") && ($('.service-type').text() === "Bath & Brush only")){
    subTotalMin = longBrushMin;
    subTotalMax = longBrushMax;
  } else if 
      //selected for a medium dog with short hair full groom
  (($('.dog-size').text() === "Medium: 11-25 lbs") && ($('.hair-length').text() === "Short Hair") && ($('.service-type').text() === "Bath & Full Groom")){
    subTotalMin = groomMin;
    subTotalMax = groomMax;
  } else if 
  //selected for a medium dog with long hair full groom
  (($('.dog-size').text() === "Medium: 11-25 lbs") && ($('.hair-length').text() === "Med-Long Hair") && ($('.service-type').text() === "Bath & Full Groom")){
    subTotalMin = groomMin;
    subTotalMax = groomMax;
  } else if

  //selected for a medium dog Day Spa
  (($('.dog-size').text() === "Medium: 11-25 lbs") && ($('.service-type').text() === "Doggie Day Spa")){
    subTotalMin = spaMin;
    subTotalMax = spaMax;
  } else if

  //selected for a medium dog Puppy Intro
  (($('.dog-size').text() === "Medium: 11-25 lbs") && ($('.service-type').text() === "Puppy Intro")){
    subTotalMin = puppy;
  };    

  checkedOptions();

};

//Mid Dog script
function midDogPrices(){
 //Define prices for Mid dog
  var shortBrushMin = 26;
  var shortBrushMax = 35;
  var longBrushMin = 36;
  var longBrushMax = 46;

  var groomMin = 49;
  var groomMax = 60;


  var puppy = 35;
  var spaMin = 67;
  var spaMax = 80;

  var flea = 7;
  var soother = 7;
  var oatmeal = 7;
  var amino = 6;

  var subTotalMin;
  var subTotalMax;

  //define function for checked options
  var checkedOptions = function(){
    if ($('.flea_bath input').prop('checked')) {
      subTotalMin += flea;
      subTotalMax += flea;                
	  }
    if ($('.soother_shampoo input').prop('checked')) {
      subTotalMin += soother;
      subTotalMax += soother;                
	  }
	  if ($('.oatmeal_shampoo input').prop('checked')) {
      subTotalMin += oatmeal;
      subTotalMax += oatmeal;                
	  }

	  if ($('.aminoflex input').prop('checked')) {
      subTotalMin += amino;
      subTotalMax += amino;                
	  }

	  //output final cost for mid Dog
    if ($('.service-type').text() === "Puppy Intro") {
      $('#final-estimate-min').text("$" + subTotalMin).css('font-size', '18px');
      $('#final-estimate-max').text("");
    } else {
      $('#final-estimate-min').text("$" + subTotalMin + " - ").css('font-size', '18px');
      $('#final-estimate-max').text("$" + subTotalMax);
    }

	  //output div to show final cost estimate
	  $(".total").addClass('js-total');
	};


  //determine which options were selected for a Mid dog with short hair brush only
  if (($('.dog-size').text() === "Mid: 26-45 lbs") && ($('.hair-length').text() === "Short Hair") && ($('.service-type').text() === "Bath & Brush only")){
      subTotalMin = shortBrushMin;
      subTotalMax = shortBrushMax;
    } else if 
    //selected for a Mid dog with long hair brush only
    (($('.dog-size').text() === "Mid: 26-45 lbs") && ($('.hair-length').text() === "Med-Long Hair") && ($('.service-type').text() === "Bath & Brush only")){
      subTotalMin = longBrushMin;
      subTotalMax = longBrushMax;
    } else if 
        //selected for a Mid dog with short hair full groom
    (($('.dog-size').text() === "Mid: 26-45 lbs") && ($('.hair-length').text() === "Short Hair") && ($('.service-type').text() === "Bath & Full Groom")){
      subTotalMin = groomMin;
      subTotalMax = groomMax;
    } else if 
    //selected for a Mid dog with long hair full groom
    (($('.dog-size').text() === "Mid: 26-45 lbs") && ($('.hair-length').text() === "Med-Long Hair") && ($('.service-type').text() === "Bath & Full Groom")){
      subTotalMin = groomMin;
      subTotalMax = groomMax;
    } else if  
    //selected for a mid dog Day Spa
    (($('.dog-size').text() === "Mid: 26-45 lbs") && ($('.service-type').text() === "Doggie Day Spa")){
      subTotalMin = spaMin;
      subTotalMax = spaMax;
    } else if
    //selected for a mid dog Puppy Intro
    (($('.dog-size').text() === "Mid: 26-45 lbs") && ($('.service-type').text() === "Puppy Intro")){
      subTotalMin = puppy;
    }    

      
  checkedOptions();

};


//Large Dog script
function largeDogPrices(){
 //Define prices for Large dog
  var shortBrushMin = 36;
  var shortBrushMax = 45;
  var longBrushMin = 47;
  var longBrushMax = 69;

  var groomMin = 60;
  var groomMax = 82;


  var puppy = 40;
  var spaMin = 82;
  var spaMax = 115;

  var flea = 9;
  var soother = 10;
  var oatmeal = 10;
  var amino = 8.50;

  var subTotalMin;
  var subTotalMax;

  //define function for checked options
  var checkedOptions = function(){
    if ($('.flea_bath input').prop('checked')) {
      subTotalMin += flea;
      subTotalMax += flea;                
  	}
    if ($('.soother_shampoo input').prop('checked')) {
      subTotalMin += soother;
      subTotalMax += soother;                
	  }
	  if ($('.oatmeal_shampoo input').prop('checked')) {
      subTotalMin += oatmeal;
      subTotalMax += oatmeal;                
	  }

	  if ($('.aminoflex input').prop('checked')) {
      subTotalMin += amino;
      subTotalMax += amino;                
	  }

	  //output final cost for large Dog
    if ($('.service-type').text() === "Puppy Intro") {
      $('#final-estimate-min').text("$" + subTotalMin).css('font-size', '18px');
      $('#final-estimate-max').text("");
    } else {
      $('#final-estimate-min').text("$" + subTotalMin + " - ").css('font-size', '18px');
      $('#final-estimate-max').text("$" + subTotalMax);
    }
	  //output div to show final cost estimate
	  $(".total").addClass('js-total');
	};


  //determine which options were selected for a Large dog with short hair brush only
  if (($('.dog-size').text() === "Large: 46-75 lbs") && ($('.hair-length').text() === "Short Hair") && ($('.service-type').text() === "Bath & Brush only")){
	    subTotalMin = shortBrushMin;
	    subTotalMax = shortBrushMax;
    } else if 
    //selected for a Large dog with long hair brush only
    (($('.dog-size').text() === "Large: 46-75 lbs") && ($('.hair-length').text() === "Med-Long Hair") && ($('.service-type').text() === "Bath & Brush only")){
      subTotalMin = longBrushMin;
      subTotalMax = longBrushMax;
  	} else if 
        //selected for a Large dog with short hair full groom
    (($('.dog-size').text() === "Large: 46-75 lbs") && ($('.hair-length').text() === "Short Hair") && ($('.service-type').text() === "Bath & Full Groom")){
      subTotalMin = groomMin;
      subTotalMax = groomMax;
    } else if 
    //selected for a Large dog with long hair full groom
    (($('.dog-size').text() === "Large: 46-75 lbs") && ($('.hair-length').text() === "Med-Long Hair") && ($('.service-type').text() === "Bath & Full Groom")){
      subTotalMin = groomMin;
      subTotalMax = groomMax;
    } else if  
    //selected for a large dog Day Spa
    (($('.dog-size').text() === "Large: 46-75 lbs") && ($('.service-type').text() === "Doggie Day Spa")){
      subTotalMin = spaMin;
      subTotalMax = spaMax;
    } else if

    //selected for a large dog Puppy Intro
    (($('.dog-size').text() === "Large: 46-75 lbs") && ($('.service-type').text() === "Puppy Intro")){
      subTotalMin = puppy;
    }    
      
  checkedOptions();

};

//Giant Dog script
function giantDogPrices(){
  //Define prices for giant dog
  var shortBrushMin = 46
  var shortBrushMax = 55;
  var longBrushMin = 70;
  var longBrushMax = 93;

  var groomMin = 83;
  var groomMax = 110;

  var puppy = 65;
  var spaMin = 117;
  var spaMax = 150;

  var flea = 12;
  var soother = 13;
  var oatmeal = 13;
  var amino = 11;

  var subTotalMin;
  var subTotalMax;

  //define function for checked options
  var checkedOptions = function(){
    if ($('.flea_bath input').prop('checked')) {
      subTotalMin += flea;
      subTotalMax += flea;                
  	}
    if ($('.soother_shampoo input').prop('checked')) {
      subTotalMin += soother;
      subTotalMax += soother;                
  	}
  	if ($('.oatmeal_shampoo input').prop('checked')) {
      subTotalMin += oatmeal;
      subTotalMax += oatmeal;                
  	}

  	if ($('.aminoflex input').prop('checked')) {
      subTotalMin += amino;
      subTotalMax += amino;                
  	}

	 //output final cost for giant Dog
    if ($('.service-type').text() === "Puppy Intro") {
      $('#final-estimate-min').text("$" + subTotalMin).css('font-size', '18px');
      $('#final-estimate-max').text("");
    } else {
      $('#final-estimate-min').text("$" + subTotalMin + " - ").css('font-size', '18px');
      $('#final-estimate-max').text("$" + subTotalMax);
    }
	  //output div to show final cost estimate
	  $(".total").addClass('js-total');
	};


//determine which options were selected for a giant dog with short hair brush only
if (($('.dog-size').text() === "Giant: 76-115 lbs") && ($('.hair-length').text() === "Short Hair") && ($('.service-type').text() === "Bath & Brush only")){
    subTotalMin = shortBrushMin;
    subTotalMax = shortBrushMax;
  } else if 
  //selected for a giant dog with long hair brush only
  (($('.dog-size').text() === "Giant: 76-115 lbs") && ($('.hair-length').text() === "Med-Long Hair") && ($('.service-type').text() === "Bath & Brush only")){
    subTotalMin = longBrushMin;
    subTotalMax = longBrushMax;
  } else if 
      //selected for a giant dog with short hair full groom
  (($('.dog-size').text() === "Giant: 76-115 lbs") && ($('.hair-length').text() === "Short Hair") && ($('.service-type').text() === "Bath & Full Groom")){
    subTotalMin = groomMin;
    subTotalMax = groomMax;
  } else if 
  //selected for a giant dog with long hair full groom
  (($('.dog-size').text() === "Giant: 76-115 lbs") && ($('.hair-length').text() === "Med-Long Hair") && ($('.service-type').text() === "Bath & Full Groom")){
    subTotalMin = groomMin;
    subTotalMax = groomMax;
  } else if  
    //selected for a giant dog Day Spa
    (($('.dog-size').text() === "Giant: 76-115 lbs") && ($('.service-type').text() === "Doggie Day Spa")){
      subTotalMin = spaMin;
      subTotalMax = spaMax;
    } else if
    //selected for a giant dog Puppy Intro
    (($('.dog-size').text() === "Giant: 76-115 lbs") && ($('.service-type').text() === "Puppy Intro")){
      subTotalMin = puppy;
    }    
      
  checkedOptions();

};


//XXL Dog script
function xxlDogPrices(){
  //Define prices for xxl dog
  var shortBrushMin = 56
  var shortBrushMax = 70;
  var longBrushMin = 94;
  var longBrushMax = 110;

  var groomMin = 110;
  var groomMax = 150;


  var puppy = 90;
  var spaMin = 153;
  var spaMax = 170;

  var flea = 16;
  var soother = 16;
  var oatmeal = 16;
  var amino = 13;

  var subTotalMin;
  var subTotalMax;

  //define function for checked options
  var checkedOptions = function(){
    if ($('.flea_bath input').prop('checked')) {
	    subTotalMin += flea;
	    subTotalMax += flea;                
    }
    if ($('.soother_shampoo input').prop('checked')) {
      subTotalMin += soother;
      subTotalMax += soother;                
    }
  	if ($('.oatmeal_shampoo input').prop('checked')) {
      subTotalMin += oatmeal;
      subTotalMax += oatmeal;                
    }

  	if ($('.aminoflex input').prop('checked')) {
      subTotalMin += amino;
      subTotalMax += amino;                
    }

    //output final cost for xxl Dog
    if ($('.service-type').text() === "Puppy Intro") {
      $('#final-estimate-min').text("$" + subTotalMin).css('font-size', '18px');
      $('#final-estimate-max').text("");
    } else {
      $('#final-estimate-min').text("$" + subTotalMin + " - ").css('font-size', '18px');
      $('#final-estimate-max').text("$" + subTotalMax);
    }
    //output div to show final cost estimate
    $(".total").addClass('js-total');
	};


  //determine which options were selected for a xxl dog with short hair brush only
  if (($('.dog-size').text() === "XXL: Over 116 lbs") && ($('.hair-length').text() === "Short Hair") && ($('.service-type').text() === "Bath & Brush only")){
    subTotalMin = shortBrushMin;
    subTotalMax = shortBrushMax;
  } else if 
  //selected for a xxl dog with long hair brush only
  (($('.dog-size').text() === "XXL: Over 116 lbs") && ($('.hair-length').text() === "Med-Long Hair") && ($('.service-type').text() === "Bath & Brush only")){
    subTotalMin = longBrushMin;
    subTotalMax = longBrushMax;
  } else if 
  //selected for a xxl dog with short hair full groom
  (($('.dog-size').text() === "XXL: Over 116 lbs") && ($('.hair-length').text() === "Short Hair") && ($('.service-type').text() === "Bath & Full Groom")){
    subTotalMin = groomMin;
    subTotalMax = groomMax;
  } else if 
  //selected for a xxl dog with long hair full groom
  (($('.dog-size').text() === "XXL: Over 116 lbs") && ($('.hair-length').text() === "Med-Long Hair") && ($('.service-type').text() === "Bath & Full Groom")){
    subTotalMin = groomMin;
    subTotalMax = groomMax;
  } else if  
  //selected for a xxl dog Day Spa
  (($('.dog-size').text() === "XXL: Over 116 lbs") && ($('.service-type').text() === "Doggie Day Spa")){
    subTotalMin = spaMin;
    subTotalMax = spaMax;
  } else if
  //selected for a xxl dog Puppy Intro
  (($('.dog-size').text() === "XXL: Over 116 lbs") && ($('.service-type').text() === "Puppy Intro")){
    subTotalMin = puppy;
  }    
    
  checkedOptions();

};





