$(document).ready(function(){
    let counter = 0
    $("input").each(function(){
        counter++
        if(counter == 1){
        setTimeout(() =>{
            $(this).trigger('click') 
        },2000)
        }
        else if(counter == 2){
            setTimeout(() =>{
                $(this).trigger('click') 
            },1500)
        }
        else if(counter == 3){
            setTimeout(() =>{
                $(this).trigger('click') 
            },1000)
        }
        else if(counter == 4){
            setTimeout(() =>{
                $(this).trigger('click') 
            },3000)
        }
        else if(counter == 5){
            setTimeout(() =>{
                $(this).trigger('click') 
            },2500)
        }
            
    })
    
})
