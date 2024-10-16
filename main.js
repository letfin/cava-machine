function CoffeeMachine(power) {
    this.waterAmount = 0;
    this.milkAmount = 0;
    let timerID;

    const WATER_HEAT_CAPACITY = 4200;


  

    let getBoilTime = function () {
        let t = this.waterAmount * WATER_HEAT_CAPACITY * 80 / 1000;

    
        console.log(t);
        return t;
    }.bind(this);


   
    
  

    function onReady() {
        alert('Кава готова!');
    }
    this.run = function () {
        timerID = setTimeout(onReady, getBoilTime());
    }

    this.stop = function () {
        clearTimeout(timerID);
        alert('Готування кави призупинено');
    }
}

let coffeeMachine = new CoffeeMachine(1500);
coffeeMachine.waterAmount = 0;



console.log(coffeeMachine.waterAmount);



$('#run').click(function () {
    coffeeMachine.run();
})
$('#stop').click(function () {
    coffeeMachine.stop();
})


$('#addWater').click(function () {
    if (coffeeMachine.waterAmount < 100) {
        coffeeMachine.waterAmount += 10;
        console.log(coffeeMachine.waterAmount);
        $('.water').css('height', coffeeMachine.waterAmount + '%');
        $('.water').text(coffeeMachine.waterAmount + '%');
    }
})


$('#removeWater').click(function () {
    if (coffeeMachine.waterAmount > 0) {
        coffeeMachine.waterAmount -= 10;
        console.log(coffeeMachine.waterAmount);
        $('.water').css('height', coffeeMachine.waterAmount + '%');
        $('.water').text(coffeeMachine.waterAmount + '%');
    }

})



$('#addMilk').click(function () {
  if (coffeeMachine.milkAmount < 100) {
      coffeeMachine.milkAmount += 10;
      console.log(coffeeMachine.milkAmount);
      $('.milk').css('height', coffeeMachine.milkAmount + '%');
      $('.milk').text(coffeeMachine.milkAmount + '%');
  }
})


$('#removeMilk').click(function () {
  if (coffeeMachine.milkAmount > 0) {
      coffeeMachine.milkAmount -= 10;
      console.log(coffeeMachine.milkAmount);
      $('.milk').css('height', coffeeMachine.milkAmount + '%');
      $('.milk').text(coffeeMachine.milkAmount + '%');
  }

})


$('#milkbtn').click (function () {
  $('.milkblock').css('display' , 'flex')})

  $('#closeMilk').click (function () {
    $('.milkblock').css('display' , 'none')})


    
$('#waterbtn').click (function () {
  $('.waterblock').css('display' , 'flex')})

  $('#closeWater').click (function () {
    $('.waterblock').css('display' , 'none')})

    const images = document.querySelectorAll('.image-container img');


    const texts = [
        "ESPRESSO",
        "LATTE",
        "COFEE",
        "COFFE+MILK",
        "RAF",
        "CAPUCHINO"
    ];
    
  
    let currentIndex = 0;
    
  
    const imageText = document.getElementById('image-text');
    

    function updateContent() {
        
        images.forEach((img, index) => {
            img.classList.remove('active');
         
            if (index === currentIndex) {
                img.classList.add('active');
            }
        });
    
       
        imageText.textContent = texts[currentIndex];
    }
    
 
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
  
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateContent();
    });
    
  
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateContent();
    });

    updateContent();





$('#img1').click(function () {
    if (coffeeMachine.waterAmount > 20) {
        coffeeMachine.waterAmount -= 30;
        console.log(coffeeMachine.waterAmount);
        $('.water').css('height', coffeeMachine.waterAmount + '%');
        $('.water').text(coffeeMachine.waterAmount + '%');
        coffeeMachine.run();
    }

})

$('#img1').click(function () {
    if (coffeeMachine.milkAmount > 10) {
        console.log(coffeeMachine.milk);
        coffeeMachine.milkAmount -= 20;
        $('.milk').css('height', coffeeMachine.milkAmount + '%');
        $('.milk').text(coffeeMachine.milkAmount + '%');
        coffeeMachine.run();
       
      
    }

})

$('#img2').click(function () {
    if (coffeeMachine.waterAmount > 20) {
        coffeeMachine.waterAmount -= 20;
        console.log(coffeeMachine.waterAmount);
        $('.water').css('height', coffeeMachine.waterAmount + '%');
        $('.water').text(coffeeMachine.waterAmount + '%');
        coffeeMachine.run();
    }

})

$('#img2').click(function () {
    if (coffeeMachine.milkAmount > 10) {
        console.log(coffeeMachine.milk);
        coffeeMachine.milkAmount -= 30;
        $('.milk').css('height', coffeeMachine.milkAmount + '%');
        $('.milk').text(coffeeMachine.milkAmount + '%');
        coffeeMachine.run();
       
      
    }

})

$('#img3').click(function () {
    if (coffeeMachine.waterAmount > 30) {
        coffeeMachine.waterAmount -= 40;
        console.log(coffeeMachine.waterAmount);
        $('.water').css('height', coffeeMachine.waterAmount + '%');
        $('.water').text(coffeeMachine.waterAmount + '%');
        coffeeMachine.run();
    }

})



$('#img4').click(function () {
    if (coffeeMachine.milkAmount > 10) {
        console.log(coffeeMachine.milk);
        coffeeMachine.milkAmount -= 20;
        $('.milk').css('height', coffeeMachine.milkAmount + '%');
        $('.milk').text(coffeeMachine.milkAmount + '%');
        coffeeMachine.run();
       
      
    }

})

$('#img4').click(function () {
    if (coffeeMachine.waterAmount > 30) {
        coffeeMachine.waterAmount -= 30;
        console.log(coffeeMachine.waterAmount);
        $('.water').css('height', coffeeMachine.waterAmount + '%');
        $('.water').text(coffeeMachine.waterAmount + '%');
        coffeeMachine.run();
    }

})

$('#img5').click(function () {
    if (coffeeMachine.milkAmount > 40) {
        console.log(coffeeMachine.milk);
        coffeeMachine.milkAmount -= 50;
        $('.milk').css('height', coffeeMachine.milkAmount + '%');
        $('.milk').text(coffeeMachine.milkAmount + '%');
        coffeeMachine.run();
       
      
    }

})

$('#img5').click(function () {
    if (coffeeMachine.waterAmount > 10) {
        coffeeMachine.waterAmount -= 20;
        console.log(coffeeMachine.waterAmount);
        $('.water').css('height', coffeeMachine.waterAmount + '%');
        $('.water').text(coffeeMachine.waterAmount + '%');
        coffeeMachine.run();
    }

})










$('#img6').click(function () {
    if (coffeeMachine.milkAmount > 10) {
        console.log(coffeeMachine.milk);
        coffeeMachine.milkAmount -= 20;
        $('.milk').css('height', coffeeMachine.milkAmount + '%');
        $('.milk').text(coffeeMachine.milkAmount + '%');
        coffeeMachine.run();
       
      
    }

})

$('#img6').click(function () {
    if (coffeeMachine.waterAmount > 10) {
        coffeeMachine.waterAmount -= 20;
        console.log(coffeeMachine.waterAmount);
        $('.water').css('height', coffeeMachine.waterAmount + '%');
        $('.water').text(coffeeMachine.waterAmount + '%');
        coffeeMachine.run();
    }

})

