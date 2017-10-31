function containsSelector(selector){
    return document.querySelector(selector) != null
}

// INITIATE SLIDE PHOTOS FUNCTIONALITY
if(content.length > 1){
        
    var nextPhoto = document.createElement('button');

        nextPhoto.classList.add('photo-next');

        nextPhoto.innerHTML = "next";
    
    var prevPhoto = document.createElement('button');

        prevPhoto.classList.add('photo-prev');

        prevPhoto.innerHTML = "prev";

    document.body.appendChild(prevPhoto);

}

if(containsSelector('.photo-prev')){
    prevPhoto.addEventListener('click', function(){

        var dayShowed = actualToday -= 1;

        document.body.style.backgroundImage = "url("+content[dayShowed - 1].photo+")";

        document.querySelector('.label-photo').textContent = content[dayShowed - 1].label;

        document.body.appendChild(nextPhoto);

        if(dayShowed == 1){

            prevPhoto.remove();

        }

        
    })
    
    nextPhoto.addEventListener('click', function(){
        
        var dayShowed = actualToday += 1;
    
        document.body.style.backgroundImage = "url("+content[dayShowed - 1].photo+")";
    
        document.querySelector('.label-photo').textContent = content[dayShowed - 1].label;
    
        document.body.appendChild(prevPhoto);
    
        if(dayShowed >= content.length){
    
            nextPhoto.remove();
    
        }
            
    })
}


