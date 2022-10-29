function change_image(image){
var container = document.getElementById("thumbnail");
container.src = image.src;
}
document.addEventListener("DOMContentLoaded", function(event) {
});

function CalculateTotal($element,num) {
        var btn = $element;        
        var qtyEl = document.getElementById("quantity_" + num);  

        if (btn.id.startsWith("r")) {

            if (qtyEl.value <= 1) {
                qtyEl.value = "1";
            }
            else {
                qtyEl.value = parseFloat(qtyEl.value.replace(',', '.')) - 1;
                qtyEl.value = qtyEl.value.replace('.', ',');
            }                
        }
        else if (btn.id.startsWith("a")) {
            if (qtyEl.value > 99) {
                qtyEl.value = "99";
            }
            else {
                qtyEl.value = parseFloat(qtyEl.value.replace(',','.')) + 1;
                qtyEl.value = qtyEl.value.replace('.', ',');
            }
        }
        else {
            qtyEl.value = qtyEl.value;
        }

           
    }