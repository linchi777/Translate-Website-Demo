//传输JSON，Ajax加载
$(document).ready(function(){
	$("#translate").click(function(){
		$.getJSON("word_JSON.js",function(result){
                $.each(result, function(i, field){
                if($("#content").val()==i) //这里是jquery对象，不是dom对象，不能用.value
                {
                    $("#showoutput").html(field);
                }
			});
		});
	});
});
//鼠标点击效果
$(document).ready(function(){
    var a_index = 0;
    $("body").click(function(e){
        var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
        var $i = $("<span/>").text(a[a_index]);
        a_index = (a_index + 1) % a.length;
        var x = e.pageX,y = e.pageY;
        $i.css({
            "z-index": 99999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#ff6651"
        });
        $("body").append($i);
        $i.animate({"top": y-180,"opacity": 0},1500,function() {
            $i.remove();
        });
    });
});
//语音功能实现
function doTTS1(){
    var ttsDiv = document.getElementById('bdtts_div_id');
    var ttsAudio = document.getElementById('tts_autio_id');
    var ttsText = document.getElementById('content').value;
    ttsDiv.removeChild(ttsAudio);
    var au1 = '<audio id="tts_autio_id" autoplay="autoplay">';
    var sss = '<source id="tts_source_id" src="http://tts.baidu.com/text2audio?lan=en&ie=UTF-8&spd=9&text='+ttsText+'" type="audio/mpeg">';
    var eee = '<embed id="tts_embed_id" height="0" width="0" src="">';
    var au2 = '</audio>';
    ttsDiv.innerHTML = au1 + sss + eee + au2;
    ttsAudio = document.getElementById('tts_autio_id');
    ttsAudio.play();
}