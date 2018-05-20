$(document).ready(function () {


    //
    //start button and timer
    //
    var $startButton = $('#start-button');
    $startButton.click(function () {


        //hide gif
        var $gif = $('#thinking-gif');
        $gif.css('display', 'none');


        //show questions
        var $cards = $('.card');
        $cards.css('display', 'block');
        $cards.animate({
            'opacity': '1',
        }, 1000)


        //button disappear effect
        $startButton.unbind('click');
        $startButton.animate({
            'left': '40%',
            'opacity': '0'
        }, 500, function () {


            //remove startbutton
            $startButton.remove();


            //create finish button
            var $container = $('.container-fluid');
            $container.append('<button type="button" class="btn btn-primary" id="finish-button">Finish</button>');


            //finish button appear animation
            var $finishButton = $('#finish-button')
            $finishButton.animate({
                'opacity': '1'
            }, 500)


            //create timer
            var $timerDiv = $('#timer-div');
            $timerDiv.append('<div class="m-auto" id="timer"></div>');


            //set timer value
            var $timer = $('#timer');
            var timerCounter = 60;
            $timer.text(timerCounter);


            //timer display animation
            $timer.animate({
                'opacity': '1',
                'right': '0'
            }, 500, function () {


                //finish button click function
                $finishButton.on('click', function () {
                    timerCounter = 0;
                    $finishButton.animate({
                        'opacity': '0'
                    }, 500, function () {
                        $finishButton.remove();
                    })
                    countdownFunc();
                    $(window).scrollTop(0);
                })


                //begin timer countdown
                var countdown = setInterval(countdownFunc, 1000);
                function countdownFunc() {


                    //end timer
                    if (timerCounter === 0) {

                        clearInterval(countdown);


                        //check answers
                        var rightAnswers = 0;
                        var wrongAnswers = 0;
                        for (var i = 1; i <= 5; i++) {
                            var $correct = $('#correct' + i)
                            if ($correct.is(':checked') === true) {
                                rightAnswers++;
                                $correct.parents().eq(2).css('background-color', '#e8ffef')
                            } else {
                                wrongAnswers++;
                                $correct.parents().eq(2).css('background-color', '#ffe8e8')
                            }
                        }


                        //change timer to number right
                        $timer.css('color', '#333333')
                        $timer.html('Time\'s up! ' + rightAnswers + '/5 correct.')


                        //disable radio buttons
                        var $radio = $('input[type="radio"]')
                        $radio.attr('disabled', true)

                    } else {


                        //continue timer
                        timerCounter--;
                        $timer.html(timerCounter);
                    }
                }
            })
        });
    })
})