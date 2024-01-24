var id=0
function Render(){
    id++
    var name = getEle('name').value
    var quanity = getEle('quanity').value
    var price = getEle('price').value
    var discount = getEle('discount').value
    var total = Number(quanity)*Number(price)*(1-Number(discount)/100)
    if(name == '' || quanity == '' || price == '' || discount == '' ){
        alert('vui long nhap input')
        return
    }
    var row = "<tr>"
    row += "<td>"+ id +"</td>"
    row += "<td>"+ name +"</td>"
    row += "<td>"+ quanity +"</td>"
    row += "<td>"+ price +"</td>"
    row += "<td>"+ discount +"</td>"
    row += "<td>"+ total +"</td>"
    row += "</tr>"
    getEle('tbl').innerHTML += row
}

function Cancel(){
    
}

getEle('sell').onclick = Render

function getEle(id){
    return document.getElementById(id)
}

