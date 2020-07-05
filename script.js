 // <![CDATA[
					    $(document).ready(function () {
					        //----------------------------------- DATETIME
					        var d = new Date();
					        var n = d.getTime();
					        var nString = n.toString();
					        var sub = nString.substring(0, 7) * 70.3;
					        var min = 1035475;
					        var max = 2035698;
					        var random = sub;
					        var increment = random / 2.3;
					        var tmpStart = random;
					        var tmpEnd = random + 10000;
					        $('#foo').counter({ start: tmpStart, end: tmpEnd });
					    });

					    ; (function ($) {
					        $.fn.counter = function (options) {

					            var defaults = {
					                start: 10000,
					                end: 20000,
					                time: 8,
					                step: 1,
					                callback: function () {
					                    var start2 = options.end;
					                    var end2 = options.end + options.end;
					                    $('#foo').counter({ start: start2, end: end2, time: options.time, step: options.step });
					                }
					            }
					            var options = $.extend(defaults, options);

					            var counterFunc = function (el, increment, end, step) {
					                var min = increment;
					                var max = min + 1;
					                var increment = Math.random() * (max - min + 1) + min / 2.1;
					                var valuex = el.html();
					                var value = parseInt(valuex.replace(/,/g,''), 10) + increment;

					                if (value >= end) {
					                    //el.html(Math.round(end));
					                    
					                    el.html(moneyformat(end));
					                    
					                    //el.html(parseFloat(end).toFixed(0));
					                    
					                    options.callback();
					                } else {
					                    //el.html(Math.round(value));
					                    el.html(moneyformat(value));
					                    //el.html(parseFloat(value).toFixed(0));
					                    
					                    setTimeout(counterFunc, step, el, increment, end, step);
					                }
					            }

					            $(this).html(Math.round(options.start));
					            var increment = (options.end - options.start) / ((1000 / options.step) * options.time);

					            var min = 321;
					            var max = 999;
					            var random = Math.floor(Math.random() * (max - min + 1)) + min;
					            var increment = random / 2.3;

					            (function (e, i, o, s) {
					                setTimeout(counterFunc, s, e, i, o, s);
					            })($(this), increment, options.end, options.step);
					        }
					    })(jQuery);






					function moneyformat(n ) {
					  return n.toFixed(0).replace(/./g, function(c, i, a) {
					    return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
					  });
					}



					    // ]]>
					</script>

					<script type="text/javascript">
						
						var timeInSecs;
						var ticker;

						function startTimer(secs) {
						timeInSecs = parseInt(secs);
						ticker = setInterval("tick()", 1000); 
						}

						function tick( ) {
						var secs = timeInSecs;
						if (secs > 0) {
						timeInSecs--; 
						}
						else {
						clearInterval(ticker);
						startTimer(5*60); // 4 minutes in seconds
						}

						var days= Math.floor(secs/86400); 
						secs %= 86400;
						var hours= Math.floor(secs/3600);
						secs %= 3600;
						var mins = Math.floor(secs/60);
						secs %= 60;
						var prettyhour = ( (hours < 10 ) ? "0" : "" ) + hours;
						var prettymin = ( (mins < 10) ? "0" : "" ) + mins;
						var prettysec = ( (secs < 10) ? "0" : "" ) + secs;

						document.getElementById("hours").innerHTML = prettyhour;
						document.getElementById("minutes").innerHTML = prettymin;
						document.getElementById("seconds").innerHTML = prettysec;
						}

						startTimer(180*60); // 4 minutes in seconds

						//Credits to Philip M from codingforum

					</script>

					<script>
						document.addEventListener("DOMContentLoaded",
						    function() {
						        var div, n,
						            v = document.getElementsByClassName("youtube-player");
						        for (n = 0; n < v.length; n++) {
						            div = document.createElement("div");
						            div.setAttribute("data-id", v[n].dataset.id);
						            div.innerHTML = loadThumb(v[n].dataset.id);
						            div.onclick = loadIframe;
						            v[n].appendChild(div);
						        }
						    });
						 
						function loadThumb(id) {
						    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
						        play = '<div class="play"></div>';
						    return thumb.replace("ID", id) + play;
						}
						 
						function loadIframe() {
						    var iframe = document.createElement("iframe");
						    var embed = "https://www.youtube.com/embed/ID?autoplay=1";
						    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
						    iframe.setAttribute("frameborder", "0");
						    iframe.setAttribute("allowfullscreen", "1");
						    this.parentNode.replaceChild(iframe, this);
						}
					</script>
