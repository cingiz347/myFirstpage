
$( document ).ready(function() {
      data() ;
    });



function data(){




var news1 = document.getElementById('news1')
var a,b,c;
a = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=59b4953289c44e9fbbca3ee5f9f3afa7';
 b = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=59b4953289c44e9fbbca3ee5f9f3afa7';
c = [a,b]
news1.innerHTML = '';
$.ajax({
 url:a,

    }).done(function news01(data){
     
    

   news1.innerHTML = data2(data);
    
    

  

   });




$.ajax({
 url:b,
    }).done(function news1(data){
     
    

   news1.innerHTML = data2(data);
    
    

  

   }); 



  
   }

    

    function data2(data){
      var newsdata = '';
       for(var i=0;i<data.articles.length;i++){

        
    

       
      newsdata += (`<div class="col-sm-3">
         '<img src="${data.articles[i].urlToImage}" class="img-responsive" style="width:100%" alt="Image">
       <a href="http://www.bbc.com/news/world" <h3 class="panel-title">Title:${data.articles[i].title}</h3></a>
      <h3 class="panel-title">Author:${data.articles[i].author}</h3>
           <h2 class="panel-title">Description:${data.articles[i].description}</h2>
          
           </div>`);
      
      
     }

    
        

        return newsdata ;



}















     /* 




  $('#news1').append('<div class="col-sm-4">'+
      '<img src="${data.articles[i].urlToImage}" class="img-responsive" style="width:100%" alt="Image">'+
       '<p><h2><a href="http://www.bbc.com/news/world"<p class="panel-title">Title:${data.articles[i].title}</p></h2>'+
       '</p><h3 class="panel-title">Author:${data.articles[i].author}</h3>'+
           '<h2 class="panel-title">Description:${data.articles[i].description}</h2></div>'



{
       $.ajax({
 url:'https://newsapi.org/v2/everything?q=bitcoin&apiKey=59b4953289c44e9fbbca3ee5f9f3afa7',
    }).done(function(data)
       console.log(data);
    for(var i=0;i<data.articles.length;i++){
       $('#profile2').append(`
          <p> <img src="${data.articles[i].urlToImage}" width="200" height="200"></p>
          
            
           
           `);
      
     }

        })     */