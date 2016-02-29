
document.addEventListener("DOMContentLoaded", function () {
  //Use CLOSURES to solve these two problems
  
  //PART A
  //Build 6 paragraphs with filler text inside #main. When you click on the paragraph
  //the index number of the paragraph becomes the innerHTML. Eg:  1, 2, 3, 4, 5, 6
  //Use the numbers 1  - 6, not 0 - 5
  
    for (var i=1; i<7; i++){
        var main = document.getElementById("main");
        var para = document.createElement("p");
        para.addEventListener("click", (function(innerI){
            return function(){
                this.innerHTML = innerI;
                //this.replaceChild(para);
            }
        })(i));
        para.innerHTML = "This is paragraph #" + i;
        main.appendChild(para);
    }
   
  //PART B 
  //after the user clicks on the h2 heading inside #second, start adding list items to the
  //unordered list #theList. Use a for loop and a setTimeout. The delay for the first list item to appear
  //is one second, two second delay for the second one, three second delay for the third and so on.
  //Add a total of five list items to the ul.

    for(var x=1; x<6; x++){
        var second = document.getElementById("second");
        var clicked = second.firstElementChild; 
        clicked.addEventListener("click", (function(innerX){
            return function(){
                setTimeout(function(){
                    var list = document.getElementById("theList");
                    var listItem = document.createElement("li");
                    listItem.innerHTML = "List item " + innerX; 
                    list.appendChild(listItem);
                }, 1000 * innerX);
            }
        })(x));
    }
    
    
});