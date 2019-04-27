$(document).ready(function(){
    $(".navbar a").on('click',function(e){
    
    if(this.hash!== ''){
        
        e.preventDefault();

        const hash=this.hash;
        console.log(this.hash);
        $("html, body").animate({
            scrollTop:$(hash).offset().top
        },800
        );
        
    }
});
});