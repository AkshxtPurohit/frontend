function circle(dets){
    document.querySelectorAll(".pic").forEach(function(elem){
        elem.addEventListener('mouseover',function(dets){
            var dim=elem.getBoundingClientRect();
            elem.lastElementChild.style.clipPath = `circle(30% at ${dets.clientX-(dim.left)}px ${dets.clientY-(dim.top)}px)`;
        })
        elem.addEventListener('mousemove',function(dets){
            var dim=elem.getBoundingClientRect();
            elem.lastElementChild.style.clipPath = `circle(30% at ${dets.clientX-(dim.left)}px ${dets.clientY-(dim.top)}px)`;
        })
        elem.addEventListener('mouseleave',function(dets){
            var dim=elem.getBoundingClientRect();
            elem.lastElementChild.style.clipPath = `circle(0% at ${dets.clientX-(dim.left)}px ${dets.clientY-(dim.top)}px)`;
        })
    })
};
circle();
function skewer(diff){
    document.querySelectorAll(".pic").forEach(function(elem){
        elem.style.transform=`skew(${diff}deg)`
    })
}

function skew(){
    var dim= document.querySelector(".pic").getBoundingClientRect();
    var prev= dim.left;
    document.querySelector("#project").addEventListener('scroll',function(dets){
        var dim2= document.querySelector(".pic").getBoundingClientRect();
        var diff=prev-dim2.left;
        skewer(diff*.13);
        prev=dim2.left;
    })
}
skew();



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
