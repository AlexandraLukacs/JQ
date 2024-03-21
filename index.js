/* fogjuk meg a .kivalaszt div-et */
const ELEM = $(".kivalaszt")
ELEM.eq(0).html("<h2>Hello JQuery!</h2>")


const pELEM = $("#masodik p")

pELEM.html("<b>Szegény emberek!</b>")

/* Ha az OK gombra kattintunk, akkor az első kivalaszt div tartalmát tegye bele a p tagek-be */
const BUTTON = $("button")

BUTTON.on("click", function(){
    let tartalom = ELEM.eq(0).html()
    pELEM.html(tartalom)
    /* pELEM.html(ELEM.eq(0).html()) */
})