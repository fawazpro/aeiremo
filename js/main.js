///////// Input Details
let content2 = $('#content2');
let content2Text = $('#content2Text');
let form = $('#details');

form.submit(function (e) { 
    e.preventDefault();
    let content2Value = content2.val();
    content2Text.html(content2Value);
});

let dp = $('#dp');
let previewBtn = $('#preview');
let downloadBtn = $('#download');
let getCanvas;

previewBtn.on('click', function() {
    h2i();
});

function h2i() {
    html2canvas(dp, {
        onrendered: function(canvas) {
            previewBtn.append(canvas);
            getCanvas = canvas;
        }
    });
}

downloadBtn.on('click', function() { 
     
      var imgageData = getCanvas.toDataURL("image/png"); 
    // var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    // console.log('About to download');
        downloadBtn.attr(
        "download", `aei(${content2.val()}).png`).attr( 
            "href", imgageData);
            
});
