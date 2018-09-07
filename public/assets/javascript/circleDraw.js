                //var c = document.getElementById("vennCanvas");
                // var ctx = c.getContext("2d");
                // ctx.beginPath();
                // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
                // ctx.stroke();
    
    
                    
                $(function () {
    
                        var canvas = document.getElementById("canvas");
                        var ctx = canvas.getContext("2d");
                        var canvas1 = document.createElement("canvas");
                        var ctx1 = canvas1.getContext("2d");
    
                        var circleBlue = {
                            x: 50,
                            y: 50,
                            r: 40
                        };
                        var circleYellow = {
                            x: 100,
                            y: 50,
                            r: 40
                        };
                        var circleRed = {
                            x: 75,
                            y: 85,
                            r: 40
                        };
    
                        drawCircle(ctx, circleRed, "salmon");
                        drawCircle(ctx, circleYellow, "lemonchiffon");
                        drawCircle(ctx, circleBlue, "lightblue");
    
                        $r = $("#r")[0];
                        $y = $("#y")[0];
                        $b = $("#b")[0];
                        $by = $("#by")[0];
                        $br = $("#br")[0];
                        $yr = $("#yr")[0];
                        $byNotR = $("#byNotR")[0];
                        $brNotY = $("#brNotY")[0];
                        $yrNotB = $("#yrNotB")[0];
                        $yrb = $("#yrb")[0];
                        $r.checked = true;
                        $y.checked = true;
                        $b.checked = true;
    
                        $(":checkbox").change(function () {
                            drawAll()
                        });
    
                        function drawIntersect(a, b, c, notC, color) {
    
                            ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    
                            ctx1.save();
    
                            // a
                            drawCircle(ctx1, a, color);
                            // b
                            ctx1.globalCompositeOperation = "source-in";
                            drawCircle(ctx1, b, color);
                            // c
                            if (c) {
                                drawCircle(ctx1, c, color);
                            }
                            // notC
                            ctx1.globalCompositeOperation = "destination-out";
                            if (notC) {
                                drawCircle(ctx1, notC, color);
                            }
    
                            ctx1.restore();
    
                            ctx.drawImage(canvas1, 0, 0);
    
                        }
    
                        function drawCircle(ctx, circle, color) {
                            ctx.beginPath();
                            ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
                            ctx.closePath();
                            ctx.fillStyle = color;
                            ctx.fill();
                        }
    
                        function drawAll() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            if ($r.checked) {
                                drawCircle(ctx, circleRed, "salmon");
                            }
                            if ($y.checked) {
                                drawCircle(ctx, circleYellow, "lemonchiffon");
                            }
                            if ($b.checked) {
                                drawCircle(ctx, circleBlue, "lightblue");
                            }
                            if ($by.checked) {
                                drawIntersect(circleBlue, circleYellow, null, null, "green");
                            }
                            if ($br.checked) {
                                drawIntersect(circleBlue, circleRed, null, null, "blue");
                            }
                            if ($yr.checked) {
                                drawIntersect(circleYellow, circleRed, null, null, "red");
                            }
                            if ($byNotR.checked) {
                                drawIntersect(circleBlue, circleYellow, null, circleRed, "green");
                            }
                            if ($brNotY.checked) {
                                drawIntersect(circleBlue, circleRed, null, circleYellow, "blue");
                            }
                            if ($yrNotB.checked) {
                                drawIntersect(circleYellow, circleRed, null, circleBlue, "red");
                            }
                            if ($yrb.checked) {
                                drawIntersect(circleYellow, circleRed, circleBlue, null, "black");
                            }
                        }
    
                    }); // end $(function(){});